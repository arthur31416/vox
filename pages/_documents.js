import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

import HeadNext from 'next/head'
const HeadWithViewport = () => (
  <div>
    <HeadNext>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </HeadNext>
    <p>Hello world!</p>
  </div>
)

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    return { html, head }
  }

  render () {
    return (
     <html>
       <HeadWithViewport />

       <body className="custom_class">
         {this.props.customValue}
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
