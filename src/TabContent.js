import React from 'react';
import useTabContext from './useTabsContext.hook';

export default function TabContent({ children, ...props }) {
  const { active } = useTabContext();
  if (active !== props.index) {
    return null;
  }
  return <div {...props}>{children}</div>;
}
