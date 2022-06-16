import { css } from '@emotion/react';
import React from 'react';
import { Text, Spacing } from 'src/domains/shared/components';
import { Color } from 'src/domains/shared/constants';

interface ProfileInfoRowProps {
  labelText: string;
}

const ProfileInfoRow = ({ labelText, children }: React.PropsWithChildren<ProfileInfoRowProps>) => {
  return (
    <div css={profileInfoRowContainerStyle}>
      <Text css={profileLabelTextStyle} type="title16" color="White100">
        {labelText}
      </Text>
      <Spacing row={45} />
      <div css={profileChildrenStyle}>{children}</div>
    </div>
  );
};

export default ProfileInfoRow;

const profileInfoRowContainerStyle = css`
  display: flex;
  border-top: 1px solid ${Color.Gray800};
  padding: 35px 0px 34px;
`;

const profileLabelTextStyle = css`
  width: 115px;
`;

const profileChildrenStyle = css`
  color: ${Color.White100};
`;
