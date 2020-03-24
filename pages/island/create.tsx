import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Router from 'next/router';
import { firebase, firestore } from '../../utils/firebase';
import { margin, Size } from '../../ui/spacing';
import { useForm } from 'react-hook-form';
import { logAnalytics } from '../../utils/logAnalytics';
import { Field } from '../../components/Field';
import { Button } from '../../components/Button';
import { Island, NativeFruit, Hemisphere } from '../../collections/island';
import { Copy } from '../../components/Copy';
import { getRepository, Instantiable } from 'fireorm';

export default function CreateAccount() {
  React.useEffect(
    () =>
      firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          Router.push('/auth/login');
        }
      }),
    []
  );
  return (
    <>
      <div className="largeMargin">
        <Grid fluid>
          <Row>
            <Col sm={6} last="sm">
              <img src="/static/love.svg" />
            </Col>
            <Col xs={12} sm={6}>
              <Copy type={Copy.Type.H1}>Let's register your island</Copy>
              <CreateIslandForm />
            </Col>
          </Row>
        </Grid>
      </div>
      <style jsx>{`
        .largeMargin {
          ${margin({ mv: Size.Medium })}
        }

        @media only screen and (min-width: 576px) {
          .largeMargin {
            ${margin({ mv: Size.Large })}
          }
          .flex-items {
            max-width: 250px;
          }
        }

        @media only screen and (min-width: 768px) {
          .largeMargin {
            ${margin({ mv: Size.ExtraLarge })}
          }
        }

        @media only screen and (min-width: 992px) {
          .largeMargin {
            ${margin({ mv: Size.ExtraExtraLarge })}
          }
        }

        img {
          width: 100vw;
          margin-left: -20px;
        }

        @media only screen and (min-width: 576px) {
          img {
            max-width: 100%;
            margin-left: 0px;
            margin-top: 0px;
          }
        }
      `}</style>
    </>
  );
}

interface Values {
  name: string;
  nativeFruit: NativeFruit;
  hemisphere: Hemisphere;
}

export function CreateIslandForm() {
  const { register, handleSubmit, errors } = useForm<Values>();
  const onSubmit = (data: Values) => {
    logAnalytics('auth.island.created');
    const islandRepository = getRepository(
      (Island as unknown) as Instantiable<Island>
    );
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
      Router.replace('/auth/login');
      return;
    }
    const island = new Island(
      data.name,
      currentUser.uid,
      data.nativeFruit,
      data.hemisphere
    );
    islandRepository.create(island);
    // firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field<Values>
          ref={register({ required: true })}
          type="text"
          fieldName="name"
          label="Island Name"
          placeholder="Destiny Islands"
          error={errors.name}
        />
        <Field<Values>
          ref={register({ required: true })}
          type="select"
          fieldName="nativeFruit"
          label="Native Fruit"
          placeholder="Select Fruit"
          error={errors.nativeFruit}
          options={[
            { value: Island.NativeFruit.Apple, label: 'Apple' },
            { value: Island.NativeFruit.Cherry, label: 'Cherry' },
            { value: Island.NativeFruit.Orange, label: 'Orange' },
            { value: Island.NativeFruit.Peach, label: 'Peach' },
            { value: Island.NativeFruit.Pear, label: 'Pear' },
          ]}
        />
        <Field<Values>
          ref={register({ required: true })}
          type="select"
          fieldName="hemisphere"
          label="Hemisphere"
          placeholder="North or South"
          error={errors.hemisphere}
          options={[
            { value: Island.Hemisphere.North, label: 'Northern' },
            { value: Island.Hemisphere.Southern, label: 'Southern' },
          ]}
        />
        <div className="submit">
          <Button
            solid
            type="submit"
            icon={<i className="fad fa-island-tropical"></i>}
          >
            Create your island
          </Button>
        </div>
      </form>
      <style jsx>{`
        .submit {
          ${margin({ mt: Size.Small })}
        }
        form {
          ${margin({ mt: Size.Large })}
        }
      `}</style>
    </>
  );
}
