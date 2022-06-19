import React from 'react';
import dynamic from 'next/dynamic';
import { EditorWithForwardedProps } from './EditorWithForwarded';

const Editor = dynamic<EditorWithForwardedProps>(() => import('./EditorWithForwarded'), { ssr: false });

interface WriterProps {
  initialValue?: string;
  onChange: (value: string) => void;
  height?: string;
}

const Writer: React.FC<WriterProps> = ({ initialValue, onChange, height }) => {
  return <Editor onChange={onChange} initialValue={initialValue} height={height} />;
};

export default Writer;
