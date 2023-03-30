import React, { PropsWithChildren } from 'react';
import MoviesProvider from '../providers/MoviesProvider';

interface AppProviderProps {}

const AppProvider = ({ children }: PropsWithChildren<AppProviderProps>) => {
  return <MoviesProvider>{children}</MoviesProvider>;
};

export default AppProvider;
