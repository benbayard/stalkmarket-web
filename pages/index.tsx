import React from 'react';
import { Size, padding, margin } from '../ui/spacing';
import { color, Colors, colors } from '../ui/color';
import { Copy } from '../components/Copy';
import { Button } from '../components/Button';
import TextLoop from 'react-text-loop';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card } from '../components/Card';
import { logAnalytics } from '../utils/logAnalytics';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <RotatingMessageSection />
      <WhatDoesItDoSection />
    </>
  );
}

const WhatDoesItDoSection: React.FC = () => (
  <>
    <Grid fluid>
      <Row>
        <Col xs={12}>
          <Copy
            purpose={Copy.Purpose.Marketing}
            type={Copy.Type.H1}
            inline
            align="center"
          >
            What{' '}
            <Copy
              purpose={Copy.Purpose.Marketing}
              type={Copy.Type.H1}
              inline
              colorType="primary"
              color={Colors.Base}
              el="span"
            >
              stalkmarket
            </Copy>{' '}
            does.
          </Copy>
        </Col>
      </Row>
      <Row between="xs">
        <Col sm={4} last="sm">
          <div className="largeMargin">
            <Card
              heading="Track"
              headingIcon={<i className="fad fa-cheeseburger"></i>}
            >
              <dl>
                <dt>
                  <Copy purpose={Copy.Purpose.Marketing} type={Copy.Type.Label}>
                    Track turnip prices
                  </Copy>
                </dt>
                <dd>
                  <Copy
                    purpose={Copy.Purpose.Marketing}
                    type={Copy.Type.Labeled}
                  >
                    Look at our marketplace to see what the current best turnip
                    prices are.
                  </Copy>
                </dd>
                <dt>
                  <Copy purpose={Copy.Purpose.Marketing} type={Copy.Type.Label}>
                    Find items
                  </Copy>
                </dt>
                <dd>
                  <Copy
                    purpose={Copy.Purpose.Marketing}
                    type={Copy.Type.Labeled}
                  >
                    Is there an item you're looking for? Someone here might have
                    it for sale!
                  </Copy>
                </dd>
                <dt>
                  <Copy purpose={Copy.Purpose.Marketing} type={Copy.Type.Label}>
                    Use Anywhere
                  </Copy>
                </dt>
                <dd>
                  <Copy
                    purpose={Copy.Purpose.Marketing}
                    type={Copy.Type.Labeled}
                  >
                    Use our stalkmarket mobile web app wherever you go
                  </Copy>
                </dd>
              </dl>
            </Card>
          </div>
        </Col>
        <Col sm={4} last="sm">
          <div className="mediumMargin">
            <Card
              heading="Users all over"
              headingIcon={<i className="fad fa-map"></i>}
            >
              <dl>
                <dt>
                  <Copy purpose={Copy.Purpose.Marketing} type={Copy.Type.Label}>
                    Get Access to what you're looking for!
                  </Copy>
                </dt>
                <dd>We have everything under the sun!</dd>
              </dl>
            </Card>
          </div>
        </Col>
        <Col sm={4} last="sm">
          <div className="largeMargin">
            <Card
              heading="Share"
              headingIcon={<i className="fad fa-users"></i>}
            >
              <dl>
                <dt>
                  <Copy purpose={Copy.Purpose.Marketing} type={Copy.Type.Label}>
                    Add your turnips
                  </Copy>
                </dt>
                <dd>
                  <Copy
                    purpose={Copy.Purpose.Marketing}
                    type={Copy.Type.Labeled}
                  >
                    When your turnips are for sale add their price here.
                  </Copy>
                </dd>
                <dt>
                  <Copy purpose={Copy.Purpose.Marketing} type={Copy.Type.Label}>
                    Leave Gifts
                  </Copy>
                </dt>
                <dd>
                  <Copy
                    purpose={Copy.Purpose.Marketing}
                    type={Copy.Type.Labeled}
                  >
                    It's polite to leave a gift for your host!
                  </Copy>
                </dd>
                <dt>
                  <Copy purpose={Copy.Purpose.Marketing} type={Copy.Type.Label}>
                    Add items for sale
                  </Copy>
                </dt>
                <dd>
                  <Copy
                    purpose={Copy.Purpose.Marketing}
                    type={Copy.Type.Labeled}
                  >
                    This way everyone can get the items they need!
                  </Copy>
                </dd>
              </dl>
            </Card>
          </div>
        </Col>
      </Row>
    </Grid>
    <style jsx>{`
      .largeMargin {
        ${margin({ mt: Size.Medium })}
      }
      @media only screen and (min-width: 576px) {
        .largeMargin {
          ${margin({ mt: Size.ExtraExtraLarge })}
        }
      }

      .mediumMargin {
        ${margin({ mt: Size.Medium })}
      }
      @media only screen and (min-width: 576px) {
        .largeMargin {
          ${margin({ mt: Size.Large })}
        }
      }

      dt {
        ${padding({ pt: Size.Medium, pb: Size.ExtraSmall })}
        list-style-type: none;
      }
    `}</style>
  </>
);

const RotatingMessageSection: React.FC = () => (
  <>
    <div className="largeMargin">
      <Grid fluid>
        <Row>
          <Col sm={6} last="sm">
            <img src="/static/neighbors.svg" />
          </Col>
          <Col sm={6} className="margin">
            <Copy purpose={Copy.Purpose.Marketing} type={Copy.Type.H1} inline>
              Find the{' '}
              <span className="green">
                <TextLoop children={['turnips', 'furniture', 'friends']} />
              </span>
              you're looking for!
            </Copy>
            <div className="margin">
              <Copy
                weight="300"
                purpose={Copy.Purpose.Marketing}
                type={Copy.Type.H2}
              >
                Health and fitness tracker for your dog.
              </Copy>
            </div>
            <div className="margin center">
              <Link href="/auth/create">
                <Button
                  onClick={() => logAnalytics('gettingStarted.clicked')}
                  solid
                  size={Size.Medium}
                  icon={<i className="fad fa-leaf-heart"></i>}
                >
                  Get Started!
                </Button>
              </Link>
            </div>
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
        margin-top: -100px;
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

      .green {
        display: inline-block;
        ${color({ color: Colors.Base, type: 'secondary' })}
      }

      .margin {
        ${margin({ mt: Size.Large })}
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
