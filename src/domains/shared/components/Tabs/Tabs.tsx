import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { TabsProps } from './TabsType';

const CATEGORY = {
  post: '글',
  series: '시리즈',
  author: '작가소개',
};

function Tabs({ tabsList }: TabsProps) {
  const [tabView, setTabView] = useState(CATEGORY.post);
  const [tabBarPosition, setTabBarPosition] = useState(0);

  function moveTabBar() {
    if (tabView === CATEGORY.post) {
      setTabBarPosition(0);
    } else if (tabView === CATEGORY.series) {
      setTabBarPosition(100 / 3);
    } else if (tabView === CATEGORY.author) {
      setTabBarPosition((100 / 3) * 2);
    }
  }

  function onClickTab(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    if (e.target instanceof HTMLDivElement) {
      const { innerText } = e.target;
      setTabView(innerText);
    }
  }

  useEffect(() => {
    moveTabBar();
  }, [tabView]);

  return (
    <>
      <TabsList style={{ display: 'flex', justifyContent: 'space-around', position: 'relative', height: '70px' }}>
        {tabsList.map((tab, index) => (
          <Tab key={tab} onClick={(e) => onClickTab(e)}>
            {tab}
          </Tab>
        ))}
        <PointBar tabsList={tabsList} tabBarPosition={tabBarPosition}></PointBar>
      </TabsList>
      {tabView === CATEGORY.post && <div>글 목록</div>}
      {tabView === CATEGORY.series && <div>시리즈</div>}
      {tabView === CATEGORY.author && <div>작가소개</div>}
    </>
  );
}

type PointBarProps = {
  tabsList: string[];
  tabBarPosition: number;
};

const TabsList = styled('div')`
  display: flex;
  justify-content: space-around;
  position: relative;
  height: 70px;
`;

const PointBar = styled('span')<PointBarProps>`
  position: absolute;
  left: ${(props) => props.tabBarPosition}%;
  bottom: 42px;
  display: block;
  height: 3px;
  background: #00b6ff;
  width: ${(props) => 100 / props.tabsList?.length}%;
`;

const Tab = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default Tabs;
