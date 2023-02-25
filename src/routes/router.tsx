import React from 'react'
import { Routes, Route } from 'react-router-dom';

import routerData from './DataRouts'
import PublicRoute from './PublicRouts';
import PrivateRoute from './PrivateRouts';
import DefaultRouts from './DefaultRouts';

const routes: React.FC = () => {
  return (
    <Routes>
      {
        routerData.privateRouts.map((props, i) => (
          <Route key={i} {...props} element={
            <PrivateRoute >
              {props?.page}
            </PrivateRoute>
          } />
        ))
      }

      {
        routerData.publicRoutes.map((props, i) => (
          <Route key={i} {...props} element={
            <PublicRoute>
              {props?.page}
            </PublicRoute>
          } />
        ))
      }
      {
        routerData.defaultRouts.map((props,i) =>(
            <Route key={i} {...props} element={
                <DefaultRouts>
                  {props?.page}
                </DefaultRouts>
              } /> 
        ))
      }

    </Routes >
  )
}

export default routes