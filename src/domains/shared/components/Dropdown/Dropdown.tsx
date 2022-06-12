import React, { useState } from 'react';
import { DropdownProps } from './DropdownType';

function Dropdown({ title, TitleComponent, listNames, ListComponent }: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <ul>
      <a onClick={() => setOpen(!open)}>{TitleComponent ? TitleComponent : <h1>{title}</h1>}</a>
      {ListComponent
        ? open && listNames.map((name) => <ListComponent key={name} name={name} />)
        : open && listNames.map((name) => <li key={name}>{name}</li>)}
    </ul>
  );
}

export default Dropdown;
