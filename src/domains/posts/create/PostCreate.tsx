import { css } from '@emotion/react';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Writer from 'src/domains/shared/components/Editor/Writer';
import { Color } from 'src/domains/shared/constants';
import { useIsShown } from 'src/domains/shared/hooks/useIsShown';
import TextareaAutosize from 'react-textarea-autosize';
import PostPublishInfo from './components/PostPublishInfo';
import { Button, MultipleSelect } from 'src/domains/shared/components';
import { CreatePostData } from './PostCreate.model';
import { usePostCreateMutation } from './PostCreate.queries';
import Router from 'next/router';
import { ValueOption } from 'src/domains/shared/components/MultipleSelect/MultipleSelect.types';
import Image from 'next/image';

const PostCreate = () => {
  const postCreateMutation = usePostCreateMutation();

  const { register, handleSubmit, control } = useForm<CreatePostData>();
  const onSubmit = handleSubmit((data) => {
    postCreateMutation.mutate(data, {
      onSuccess: (result) => {
        Router.push(`/post/${result.postIdx}`);
      },
    });
  });

  const [isModalShown, handleModalOpen, handleModalClose] = useIsShown(false);
  const [selectedFriendsList, setSelectedFriendsList] = useState<ValueOption[]>([]);

  return (
    <section css={createSectionStyle}>
      <form css={postFormContainer} onSubmit={onSubmit}>
        <section css={titleWrapperStyle}>
          <TextareaAutosize maxRows={3} placeholder="제목을 입력해주세요." {...register('title')} maxLength={150} />
          <Button type="button" color="Primary100" size="medium" onClick={handleModalOpen}>
            출판하기
          </Button>
        </section>

        <Controller
          control={control}
          name="contents"
          render={({ field }) => {
            return (
              <Writer
                initialValue=""
                onChange={(value) => {
                  field.onChange(value);
                }}
              />
            );
          }}
        />

        <MultipleSelect
          placeholder="친구를 찾아주세요."
          options={FRIENDS_LIST.map((value) => ({
            // key: value.id,
            label: value.email,
            value: value.email,
            leftComponent: <Image src={value.thumbnail} alt="profile" width="20px" height="20px" />,
          }))}
          onChange={(values) => setSelectedFriendsList(values)}
          value={selectedFriendsList}
        />
        {isModalShown && <PostPublishInfo onClose={handleModalClose} register={register} />}
      </form>
    </section>
  );
};

export default PostCreate;

const createSectionStyle = css`
  margin: 83px 0px;
  overflow-y: auto;
`;

const postFormContainer = css`
  padding-bottom: 200px;
`;

const titleWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  & textarea {
    font-weight: bold;
    display: inline-flex;
    width: 80%;
    /* height: auto; */
    max-width: 1015px;
    font-size: 28px;
    color: ${Color.White100};
    caret-color: ${Color.White100};
    border: none;
    background-color: transparent;
    outline: none;
    resize: none;
  }
`;

const FRIENDS_LIST = [
  {
    id: 0,
    thumbnail: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    email: 'test@naver.com',
  },
  {
    id: 1,
    thumbnail: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    email: 'test1@naver.com',
  },
  {
    id: 2,
    thumbnail: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    email: 'aaa@naver.com',
  },
  {
    id: 3,
    thumbnail: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    email: 'high2@naver.com',
  },
];
