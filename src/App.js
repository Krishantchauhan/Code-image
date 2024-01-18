// App.js
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import CodeEditor from "./components/CodeEditor";
import LanguageSelector from "./components/LanguageSel";
import { languages } from "./components/utilities";

function App() {
  const [selectedLanguage, setLanguage] = useState(languages[0].name);

  return (
    <main>
      <header>
        <LanguageSelector
          languages={languages}
          selectedLanguage={selectedLanguage}
          setLanguage={setLanguage}
        />
      </header>
      <div className="code-editor-ref">
        <CodeEditor language={selectedLanguage} />
      </div>
    </main>
  );
}

export default App;
