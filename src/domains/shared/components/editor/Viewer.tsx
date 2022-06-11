import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import { ReactElement, useCallback, useEffect, useState } from 'react';

interface PostViewProps {
  initialValue: string;
  onLoadEnd?: () => void;
}

// Next의 dynamic으로 import 시 codeSyntaxHighlight 설정이 어렵다.
// Editor와 통일적이진 않지만, 해결 방법이 없어 useEffect 안에서 dynamic import 하는걸로 대체한다.

const Viewer = ({ initialValue, onLoadEnd }: PostViewProps) => {
  const [PostViewer, setPostViewer] = useState<ReactElement | null>(null);

  const getViewerDynamic = useCallback(async () => {
    const { Viewer } = await import('@toast-ui/react-editor');
    const codeSyntaxHighlight = await import('@toast-ui/editor-plugin-code-syntax-highlight');

    setPostViewer(
      <Viewer
        initialValue={initialValue}
        plugins={[[codeSyntaxHighlight.default, { highlighter: Prism }]]}
        theme="dark"
      />,
    );

    onLoadEnd?.();
  }, []);

  useEffect(() => {
    if (!initialValue) {
      return;
    }

    getViewerDynamic();
  }, [initialValue]);

  return PostViewer;
};

export default Viewer;
