import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import { Colors } from "../themes";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush();
    return { html, head, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Vox - free audiobooks</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <style>{`
            * {
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            }
            html, body {
              height: 100%;
              padding: 0;
              margin: 0;
            }
            .ais-InstantSearch__root {
              display: flex;
              flex: 1;
              flex-direction: column;
            }
            a:focus, input:focus {
              outline: none;
            }
            ::placeholder {
                color: ${Colors.placeholder};
            }
            input:focus::placeholder , input:active::placeholder {
                color: ${Colors.placeholderActive};
            }
          `}</style>
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
