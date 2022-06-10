import { css } from '@emotion/react';
import React from 'react';
import { Color } from 'src/domains/shared/constants';
import { Button, Spacing, Text, Switch } from 'src/domains/shared/components';
import { UseFormRegister } from 'react-hook-form';
import { CreatePostData } from '../PostCreate.model';
import { useBodyOverflowHidden } from 'src/domains/shared/hooks/useBodyOverflowHidden';

interface PostPublishInfoProps {
  onClose: () => void;
  register: UseFormRegister<CreatePostData>;
}

const PostPublishInfo = ({ onClose, register }: PostPublishInfoProps) => {
  useBodyOverflowHidden();

  return (
    <section css={postPublishContainerStyle}>
      <div css={postPublishWrapperStyle}>
        <Text type="title28" color="White100">
          포스트 미리보기
        </Text>
        <Spacing col={39} />
        <div css={postPreviewStyle}>
          <Button color="Primary100" type="button" size="large">
            <Text color="White100" type="title16">
              썸네일 업로드
            </Text>
          </Button>
        </div>
        <Spacing col={24} />
        <textarea css={postDescriptionStyle} placeholder="설명을 입력해주세요" {...register('thumnailContents')} />
        <Spacing col={24} />
        <div css={postPreviewBottomWrapperStyle}>
          <label css={flexStyle} htmlFor="disclosure">
            <Text color="White100" type="title16">
              전체공개
            </Text>
            <Spacing row={8} />
            <Switch id="disclosure" onChange={() => {}} checked={true} />
          </label>
          <div css={flexStyle}>
            <Button color="transparent" type="button" onClick={onClose}>
              취소
            </Button>
            <Spacing row={12} />
            <Button color="Primary100" type="submit" fixedWidth={256}>
              출판하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostPublishInfo;

const postPublishContainerStyle = css`
  position: fixed;
  top: 64px;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100% - 64px);
  background-color: ${Color.Gray900};
`;

const postPublishWrapperStyle = css`
  width: 100%;
  max-width: 605px;
  padding: 0px 32px 30px 30px;
  overflow-y: auto;
`;

const postPreviewStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 310px;
  background-color: ${Color.Gray850};
  border-radius: 8px;
`;

const postDescriptionStyle = css`
  display: block;
  width: 100%;
  height: 310px;
  color: ${Color.White100};
  background-color: ${Color.Gray850};
  padding: 24px;
  resize: none;
  border: none;
  outline: none;
  border-radius: 8px;

  &::placeholder {
    color: ${Color.Gray600};
  }
`;

const postPreviewBottomWrapperStyle = css`
  display: flex;
  justify-content: space-between;
`;

const flexStyle = css`
  display: flex;
  align-items: center;
`;
