import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Router from 'next/router';
import { Copy } from '../../components/Copy';
import { Button } from '../../components/Button';
import { logAnalytics } from '../../utils/logAnalytics';
import { Size, margin } from '../../ui/spacing';
import { color, Colors } from '../../ui/color';
import { CreateAccountForm } from '../../components/CreateAccountForm';
import { border } from '../../ui/border';
import { firebase } from '../../utils/firebase';
import fb from 'firebase/app';

export default function CreateAccount() {
  const googleProvider = React.useMemo(() => {
    const provider = new fb.auth.GoogleAuthProvider();
    provider.addScope('openid');
    provider.addScope('email');
    return provider;
  }, []);
  const facebookProvider = React.useMemo(() => {
    const provider = new fb.auth.FacebookAuthProvider();
    provider.addScope('email');
    return provider;
  }, []);
  React.useEffect(
    () =>
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          logAnalytics('auth.login');
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
              <img className="circle" src="/static/friends.svg" />
            </Col>
            <Col xs={12} sm={6} className="margin">
              <Copy type={Copy.Type.H1} inline>
                Nice to meet you!
              </Copy>
              <div className="margin">
                <Copy weight="300" type={Copy.Type.H2}>
                  Before we get started, let's create an account.
                </Copy>
              </div>
              <div className="margin flex-items">
                <Button
                  purpose={Button.Purpose.Google}
                  icon={<i className="fa fa-google"></i>}
                  onClick={() => {
                    firebase.auth().signInWithPopup(googleProvider);
                  }}
                >
                  Sign in with Google
                </Button>
                <Button
                  hue="#3b5998"
                  purpose={Button.Purpose.Google}
                  icon={<i className="fa fa-facebook-f"></i>}
                  onClick={() => {
                    firebase.auth().signInWithPopup(facebookProvider);
                  }}
                >
                  Sign in with Facebook
                </Button>
                {false && (
                  <Button
                    solid
                    purpose={Button.Purpose.Google}
                    icon={<i className="fa fa-apple"></i>}
                  >
                    Sign in with Apple
                  </Button>
                )}
              </div>
              <div>
                <hr />
                <CreateAccountForm />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      <style jsx>{`
        .flex-items {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        .flex-items :global(button) {
          ${margin({ mb: Size.Medium })}
        }

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

        article {
          flex-direction: column;
        }

        hr {
          border: 0;
          ${border({ side: 'bottom', width: 1, color: Colors.LighterEmphasis })}
          position: relative;
          overflow: visible;
        }

        hr::after {
          display: block;
          content: 'or';
          height: 1rem;
          width: 45px;
          top: 0;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          background-color: white;
          position: absolute;
          z-index: 10000;
          text-align: center;
          overflow: visible;
        }

        .green {
          display: inline-block;
          ${color({ color: Colors.Base, type: 'secondary' })}
        }

        .largeMargin :global(.margin) {
          ${margin({ mt: Size.Medium })}
        }

        .center {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media only screen and (min-width: 576px) {
          .center {
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}
