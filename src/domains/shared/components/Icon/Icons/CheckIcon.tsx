/* eslint-disable max-len */
import { memo } from 'react';

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.4873 1L15.3712 1.88388L5.52596 11.7291L1 7.20317L1.88388 6.31929L5.52611 9.96163L14.4873 1Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}

const MemoCheckIcon = memo(CheckIcon);

export default MemoCheckIcon;
