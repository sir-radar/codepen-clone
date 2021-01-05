import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import useLocalStorage from './hooks/useLocalStorage';
import {defaultHtml, defaultCss, defaultJs} from './util'

function App() {
  const [html, setHtml] = useLocalStorage('html', defaultHtml);
  const [css, setCss] = useLocalStorage('css', defaultCss);
  const [javascript, setJavascript] = useLocalStorage('js', defaultJs);
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `
          <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
          </html>
        `
      );
      return () => clearTimeout(timeout);
    }, 500);
  }, [html, css, javascript]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
