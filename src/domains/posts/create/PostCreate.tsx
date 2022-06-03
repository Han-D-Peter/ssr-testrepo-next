import { css } from '@emotion/react';
import styled from '@emotion/styled/types/base';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from 'src/domains/shared/components/Button';
import Writer from 'src/domains/shared/components/editor/Writer';

interface DataProps {
  title: string;
  content: string;
}

const PostCreate = () => {
  const { register, handleSubmit, control } = useForm<DataProps>();
  const onSubmit = (data: DataProps) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section css={titleWrapperStyle}>
        <input {...register('title')} placeholder="제목을 입력해주세요" />
        <Button type="submit" color="Primary80">
          출간하기
        </Button>
      </section>

      <Controller
        control={control}
        name="content"
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
    </form>
  );
};

export default PostCreate;

const titleWrapperStyle = css`
  display: flex;
  justify-content: space-between;

  & input {
    font-size: 28px;
    color: gray;
  }
`;
