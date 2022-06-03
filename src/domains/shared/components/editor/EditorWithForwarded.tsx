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
import { useEffect, useRef } from 'react';

export interface EditorWithForwardedProps extends EditorProps {
  onChange: (value: string) => void;
}

const EditorWithForwarded = (props: EditorWithForwardedProps) => {
  const ref = useRef<Editor>(null);

  const handleChange = () => {
    const writerInstance = ref.current?.getInstance();
    const writerContent = writerInstance?.isMarkdownMode ? writerInstance?.getMarkdown() : writerInstance?.getHTML();
    props.onChange(writerContent || '');
  };

  useEffect(() => {
    if (ref.current) {
      const instance = ref.current.getInstance();
      instance.moveCursorToEnd();

      if (!props.initialValue) {
        instance.setMarkdown('');
      }

      instance.removeHook('addImageBlobHook');
      instance.addHook('addImageBlobHook', (blob, callback) => {
        console.log(blob); // 이미지 업로드를 하고, 그 주소를 editor에 보여주게 하기
        // https://velog.io/@developerjhp/Toast-UI-Editor%EC%97%90%EC%84%9C-s3%EB%A1%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
        // https://myeongjae.kim/blog/2020/04/05/tui-editor-with-nextjs
      });
    }
  }, []);

  return (
    <Editor
      {...props}
      onChange={handleChange}
      previewStyle="vertical"
      theme="dark"
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax]}
      ref={ref}
      autofocus
    />
  );
};

export default EditorWithForwarded;
