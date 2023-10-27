import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {typeof window === 'undefined' ? (
        <> {children}</>
      ) : (
        <PersistGate persistor={persistor}>{children}</PersistGate>
      )}
    </Provider>
  );
};
