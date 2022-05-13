import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Writer from 'src/domains/shared/components/editor/Writer';
import Viewer from 'src/domains/shared/components/editor/Viewer';
import Button from 'src/domains/shared/components/Button';
import Header from 'src/domains/shared/components/Header';
import { useCounterStore } from '../domains/shared/store/counter';
import { useEffect, useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';

const Viewer = dynamic(() => import('../domains/shared/components/editor/Viewer'), { ssr: false });

const Home: NextPage = () => {
  const { count, increase, decrease, increaseByValue } = useCounterStore();
  const writerRef = useRef<Editor>(null);
  const [content, setContent] = useState('');

  const onSaveContent = () => {
    const writerInstance = writerRef.current?.getInstance();
    const writerContent = writerInstance?.isMarkdownMode ? writerInstance?.getMarkdown() : writerInstance?.getHTML();

    if (writerContent) {
      setContent(writerContent);
    }
  };

  useEffect(() => {
    if (writerRef.current) {
      writerRef.current.getInstance().removeHook('addImageBlobHook');

      writerRef.current.getInstance().addHook('addImageBlobHook', (blob, callback) => {
        console.log(blob); // 이미지 업로드를 하고, 그 주소를 editor에 보여주게 하기
        // https://velog.io/@developerjhp/Toast-UI-Editor%EC%97%90%EC%84%9C-s3%EB%A1%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
        // https://myeongjae.kim/blog/2020/04/05/tui-editor-with-nextjs
      });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Writer ref={writerRef} />
        {content && <Viewer initialValue={content} />}

        <Button onClick={onSaveContent}>확인해보기</Button>
        <div>본 카운트: {count}</div>
        <TestComponent />

        <Button color="Primary100" size="large" onClick={increase}>
          증가하기
        </Button>
        <Viewer />
        <Button color="Primary50" size="medium" onClick={decrease}>
          감소하기
        </Button>
        <Viewer />
        <Button color="Gray005" size="small" onClick={() => increaseByValue(5)}>
          많이 증가하기
        </Button>
      </main>
    </div>
  );
};

export default Home;

const TestComponent = () => {
  const { count } = useCounterStore();
  return <div>테스트: {count}</div>;
};
