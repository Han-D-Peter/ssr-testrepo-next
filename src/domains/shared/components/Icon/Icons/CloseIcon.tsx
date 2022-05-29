/* eslint-disable max-len */
import { memo } from 'react';

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="24" fill="white" fill-opacity="0.01" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.8225 8.18354C15.5859 7.94691 15.2036 7.94691 14.967 8.18354L12 11.1445L9.03299 8.17747C8.79636 7.94084 8.41411 7.94084 8.17747 8.17747C7.94084 8.41411 7.94084 8.79636 8.17747 9.03299L11.1445 12L8.17747 14.967C7.94084 15.2036 7.94084 15.5859 8.17747 15.8225C8.41411 16.0592 8.79636 16.0592 9.03299 15.8225L12 12.8555L14.967 15.8225C15.2036 16.0592 15.5859 16.0592 15.8225 15.8225C16.0592 15.5859 16.0592 15.2036 15.8225 14.967L12.8555 12L15.8225 9.03299C16.0531 8.80243 16.0531 8.41411 15.8225 8.18354Z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoCloseIcon = memo(CloseIcon);

export default MemoCloseIcon;
