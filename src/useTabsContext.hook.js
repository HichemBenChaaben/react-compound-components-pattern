import React from 'react';
import { TabsContext } from './TabsContext.context';

export default function useTabContext() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('there is no context');
  }
  return context;
}
