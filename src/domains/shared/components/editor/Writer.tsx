import React, { Component, forwardRef, ReactElement, useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Editor as EditorType } from '@toast-ui/react-editor';
import { EditorWithForwardedProps } from './EditorWithForwarded';

const Editor = dynamic<EditorWithForwardedProps>(() => import('./EditorWithForwarded'), { ssr: false });

const Writer = forwardRef<EditorType, {}>((props, ref) => {
  return (
    <Editor
      forwardedRef={ref}
      initialValue=" "
      theme="dark"
      previewStyle="vertical"
      height="536px"
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
      ]}
      {...props}
    />
  );
});

export default Writer;
