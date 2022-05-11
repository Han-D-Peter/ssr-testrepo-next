import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { ForwardedRef } from 'react';

export interface EditorWithForwardedProps extends EditorProps {
  forwardedRef?: ForwardedRef<Editor | null>;
}

const EditorWithForwarded = (props: EditorWithForwardedProps) => {
  return (
    <Editor
      {...props}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax]}
      ref={props.forwardedRef}
    />
  );
};

export default EditorWithForwarded;
