import styled from '@emotion/styled';
import React, { memo } from 'react';
import { Color } from 'src/domains/shared/constants';
import { useOnUser } from 'src/domains/shared/hooks/useOnUser';
import { DropdownListProps } from './DropdownListType';

function DropdownList({ name, onClick }: DropdownListProps) {
  return (
    <ListItemStyle key={name} onClick={onClick}>
      {name}
    </ListItemStyle>
  );
}

const ListItemStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  list-style: none;
  background-color: ${Color.Gray800};
  transition: background 0.25s ease-in-out;
  color: ${Color.Gray300};
  padding: 15px 27px 9px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${Color.Gray750};
  }
`;

export default memo(DropdownList);
