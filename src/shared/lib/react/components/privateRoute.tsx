import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthorizationStatus } from '../const/const';

type PrivateRouteProps = {
  authorizationStatus: (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];
  children: ReactNode;
}

export function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps) {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to="/login" />
  );
}
