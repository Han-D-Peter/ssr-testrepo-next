/* eslint-disable max-len */
import { memo } from 'react';

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 2C14.4217 2 18 5.58282 18 10.0005C18 11.9391 17.3105 13.7172 16.1628 15.1021L22.0303 20.9697L20.9697 22.0303L15.1021 16.1628C13.7178 17.3102 11.9401 18 10 18C5.57938 18 2 14.4167 2 10.0005C2 5.58282 5.57938 2 10 2ZM10 3.5C6.40903 3.5 3.5 6.41003 3.5 10.0005C3.5 13.5898 6.40936 16.5 10 16.5C13.5913 16.5 16.5 13.5902 16.5 10.0005C16.5 6.40964 13.5916 3.5 10 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoSearchIcon = memo(SearchIcon);

export default MemoSearchIcon;
