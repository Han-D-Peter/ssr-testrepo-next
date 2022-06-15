import styled from '@emotion/styled';
import Image from 'next/image';
import { memo } from 'react';
import { Color } from 'src/domains/shared/constants';
import { UserProfileImgProps } from './UserProfileNameCardType';

const UserProfileNameCard = ({ img, userName }: UserProfileImgProps) => {
  return (
    <UserProfileContainer>
      <UserProfileImgCircle>{img ? <Image src={img} alt="*" width={100} height={100} /> : null}</UserProfileImgCircle>
      <UserProfileName>{userName}</UserProfileName>
    </UserProfileContainer>
  );
};

const UserProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98px;
  height: 32px;
`;

const UserProfileImgCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100px;
  overflow: hidden;
  background-color: 'yellow';
`;

const UserProfileName = styled.div`
  color: ${Color.White100};
  font-size: 12px;
  font-weight: bold;
`;

export default memo(UserProfileNameCard);
