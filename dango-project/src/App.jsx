import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Route';
import TokenRefresher from './components/TokenRefresher';

export default function App() {
  return (
    <>
      {/* <TokenRefresher /> */}
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
