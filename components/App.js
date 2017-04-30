export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      * {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      }
      body {
        margin: 0;
        padding: 25px 50px;
      }
      p {
        font-size: 14px;
        line-height: 24px;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22BAD9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      button:active {
        background-color: #1B9DB7;
        transition: background-color .3s
      }
      button:focus {
        outline: none;
      }
    `}</style>
  </main>
)
