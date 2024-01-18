import React from "react";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

//themes
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

//Coding Languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

interface CodeEditorProps {
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string;
}

const CodeEditor = ({ language, theme, icon, background, currentPadding }) => {
  return (
    <div>
      <Resizable minHeight={466} minWidth={510} maxWidth={1000}>
        <div>
          <AceEditor
            mode={language.toLocaleLowerCase()}
            theme="monokai"
            fontSize={16}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            className="ace-editor-container"
          />
        </div>
      </Resizable>
    </div>
  );
};

export default CodeEditor;
