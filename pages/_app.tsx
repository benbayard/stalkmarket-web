import React from 'react';
import { Size, padding, margin } from '../ui/spacing';
import { color, Colors } from '../ui/color';
import { backgroundColor } from '../ui/bg';
import { Copy } from '../components/Copy';
import { Button } from '../components/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Link from 'next/link';

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const showLinks =
    !router.pathname.includes('auth') &&
    !router.pathname.includes('marketplace');
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/4ae9266e1b.js"></script>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oou4pyi.css"
        ></link>
      </Head>
      <MainWrapper>
        <Header>
          <Col xs>
            <WordMark />
          </Col>
          {showLinks && (
            <Col xs>
              <Links />
            </Col>
          )}
        </Header>
        <Component {...pageProps} />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default App;

function Footer() {
  return (
    <>
      <footer>
        <section>
          <Grid>
            <Row>
              <Col xs={12}>
                <Copy type={Copy.Type.H2} color={Colors.Lightest}>
                  Any thing I can do to help?
                </Copy>
                <div className="space">
                  <Copy
                    type={Copy.Type.Body}
                    colorType="primary"
                    color={Colors.Lightest}
                  >
                    Send me a message.{' '}
                    <a href="mailto:ben@stalkmarket.app">
                      <Copy
                        type={Copy.Type.Body}
                        colorType="primary"
                        color={Colors.Lighter}
                        inline
                        underline
                        el="span"
                      >
                        Contact Ben
                      </Copy>
                    </a>
                  </Copy>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="moveDown">
                  <Copy type={Copy.Type.H3} color={Colors.Lightest}>
                    Some helpful links
                  </Copy>
                  <ul>
                    <a href="https://www.termsfeed.com/privacy-policy/fdfd75884337e7551f9d47807cb361b5">
                      <Copy
                        type={Copy.Type.Body}
                        colorType="primary"
                        color={Colors.Lighter}
                        inline
                        underline
                        el="span"
                      >
                        <li>Privacy Policy</li>
                      </Copy>
                    </a>
                    <a href="https://www.termsfeed.com/terms-conditions/157385fc7fa006ece4f6156a95ac906b">
                      <Copy
                        type={Copy.Type.Body}
                        colorType="primary"
                        color={Colors.Lighter}
                        inline
                        underline
                        el="span"
                      >
                        <li>Terms of use</li>
                      </Copy>
                    </a>

                    <a href="https://www.termsfeed.com/cookies-policy/c0c45ee72362c79dd90404647f9b2163">
                      <Copy
                        type={Copy.Type.Body}
                        colorType="primary"
                        color={Colors.Lighter}
                        inline
                        underline
                        el="span"
                      >
                        <li>Cookie Policy</li>
                      </Copy>
                    </a>
                  </ul>
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
      </footer>
      <style jsx>{`
        .space {
          ${margin({ mt: Size.Small })}
        }
        
        li {
          ${margin({ mt: Size.ExtraSmall })}
        }

        ul {
          ${padding({ pl: Size.ExtraSmall })}
        }

        .moveDown {
          ${margin({ mt: Size.Small })}
        }
        footer {
          ${backgroundColor({ bg: Colors.Darkest, type: 'primary' })}
          ${padding({ pv: Size.Large })}
          ${margin({ mt: Size.ExtraLarge })}
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        section {
          max-width: 960px;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        @media only screen and (min-width: 576px) {
          section {
            width: 96vw;
          }
        }


        footer {
          background-position-x: right;
          background-size: contain;
          background-repeat: no-repeat;
        }

        @media only screen and (min-width: 576px) {
          footer {
            background-image: url('/static/team_spirit.svg');
            height: 300px;
          }
        }

        @media only screen and (min-width: 768px) {
          footer {
            height: 350px;
          }
        }

        @media only screen and (min-width: 992px) {
          footer {
            height: 350px;
          }
        }
      `}</style>
    </>
  );
}
export const Header: React.FC<{}> = ({ children }) => (
  <>
    <Grid fluid>
      <Row between="xs" middle="xs">
        {children}
      </Row>
    </Grid>
    <style jsx>{``}</style>
  </>
);
export const Links: React.FC<{}> = () => (
  <>
    <ul>
      <li>
        <Link href="/auth/create">
          <Button
            size={Size.Small}
            icon={<i className="fad fa-leaf-heart"></i>}
          >
            Get Started
          </Button>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        display: flex;
        justify-content: flex-end;
      }
      li {
        list-style-type: none;
      }
    `}</style>
  </>
);
export function WordMark() {
  return (
    <>
      <h1>
        stalk<span>market</span>
      </h1>
      <style jsx>{`
        h1 {
          font-size: 1.8rem;
          font-family: coquette, sans-serif;
          ${color({ type: 'primary', color: Colors.Base })}
          position: relative;
        }
        h1:after {
          display: block;
          content: '';
          width: 2rem;
          height: 2rem;
          ${backgroundColor({ bg: Colors.Lighter, type: 'secondary' })}
          border-radius: 100%;
          position: absolute;
          top: -0.25rem;
          left: -0.5rem;
          z-index: -1;
        }
      `}</style>
    </>
  );
}
const MainWrapper: React.FC<{}> = props => (
  <>
    <div className="flex">
      <main>{props.children}</main>
    </div>
    <style jsx>{`
      .flex {
        display: flex;
        flex-direction: column;
      }
      main {
        display: flex;
        flex-direction: column;
        max-width: 960px;
        width: 100vw;
        align-self: center;
        min-height: 80vw;
      }
      @media only screen and (min-width: 576px) {
        main {
          width: 96vw;
        }
      }

      main {
        ${padding({ pt: Size.Small })}
      }
    `}</style>
    <style jsx global>{`
      html,
      body,
      div,
      span,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      abbr,
      address,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      samp,
      small,
      strong,
      sub,
      sup,
      var,
      b,
      i,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
      }

      body {
        line-height: 1;
        font-size: 16px;
        font-family: proxima-soft, sans-serif;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      nav ul {
        list-style: none;
      }

      blockquote,
      q {
        quotes: none;
      }

      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: '';
        content: none;
      }

      a {
        margin: 0;
        padding: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
      }

      /* change colours to suit your needs */
      ins {
        background-color: #ff9;
        color: #000;
        text-decoration: none;
      }

      /* change colours to suit your needs */
      mark {
        background-color: #ff9;
        color: #000;
        font-style: italic;
        font-weight: bold;
      }

      del {
        text-decoration: line-through;
      }

      abbr[title],
      dfn[title] {
        border-bottom: 1px dotted;
        cursor: help;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      /* change border colour to suit your needs */
      hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #cccccc;
        margin: 1em 0;
        padding: 0;
      }

      input,
      select {
        vertical-align: middle;
      }
    `}</style>
  </>
);
