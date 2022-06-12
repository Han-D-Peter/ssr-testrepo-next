import { css } from '@emotion/react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Writer from 'src/domains/shared/components/editor/Writer';
import { Color } from 'src/domains/shared/constants';
import { useIsShown } from 'src/domains/shared/hooks/useIsShown';
import TextareaAutosize from 'react-textarea-autosize';
import PostPublishInfo from './components/PostPublishInfo';
import { Button } from 'src/domains/shared/components/Button';
import { CreatePostData } from './PostCreate.model';
import { usePostCreateMutation } from './PostCreate.queries';
import Router from 'next/router';

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

  return (
    <section css={createSectionStyle}>
      <form onSubmit={onSubmit}>
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
