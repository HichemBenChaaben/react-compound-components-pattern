import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import TabNav from './TabNav';
import { TabsContext } from './TabsContext.context';
import TabContent from './TabContent';

const TabsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
`;

export default function Tabs({ children }) {
  const [ state, setState ] = useState({ active: 1 });
  const handlClick = useCallback((idx) => setState({ active: idx }), []);
  const tabList = children.map((prop) => {
    return prop.props.title;
  });
  return (
    <TabsContext.Provider value={state}>
      <TabsWrapper>
        <TabNav tabList={tabList} onClick={handlClick} activeIndex={state.active} />
        {React.Children.map(children, (child, index) => React.cloneElement(child, { index }))}
      </TabsWrapper>
    </TabsContext.Provider>
  );
}

Tabs.Tab = TabContent;
