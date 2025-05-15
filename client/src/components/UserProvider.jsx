import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { UserContext } from 'context/UserContext';

const UserProvider = ({ children }) => {
  const location = useLocation();
  const { _id: currentUser } = useSelector((state) => state.user);
  const { userId: routeUserId } = useParams();
  const isHome = location.pathname === '/home';
  const isOwned = isHome || routeUserId === currentUser;
  console.log(isOwned);
  return <UserContext.Provider value={{ isOwned }}>{children}</UserContext.Provider>;
};

export default UserProvider;
