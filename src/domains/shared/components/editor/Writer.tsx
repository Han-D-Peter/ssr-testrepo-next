import React from 'react';
import dynamic from 'next/dynamic';
import { EditorWithForwardedProps } from './EditorWithForwarded';

const Editor = dynamic<EditorWithForwardedProps>(() => import('./EditorWithForwarded'), { ssr: false });

interface WriterProps {
  initialValue?: string;
  onChange: (value: string) => void;
}

const Writer: React.FC<WriterProps> = ({ initialValue, onChange }) => {
  return <Editor onChange={onChange} initialValue={initialValue} />;
};

export default Writer;
