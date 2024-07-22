import React, { useState, useEffect } from 'react';
import UsersServices from '../../services/portal-users/UsersServices';
import { UsersContext } from './UsersContext';

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundMsg, setNotFoundMsg] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  users.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const getUsers = async () => {
    try {
      setNotFoundMsg('');
      setIsLoading(true);
      const { data, meta } = await UsersServices.getUsers();
      setUsers(data);
      setNotFoundMsg(data.length === 0
        ? 'Lo sentimos, tu búsqueda no coincide con nuestros registros'
        : ''
      );
      setIsLoading(false);
    } catch (error) {
      console.log('Bad server request', error);
    }
  };

  const handlePageChange = (newPage) => {
    setUsers([]);
    setPage(newPage);
  };

  useEffect(() => {
    getUsers(page);
  }, [page]);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        page,
        totalPages,
        totalItems,
        handlePageChange,
        isLoading,
        setIsLoading,
        notFoundMsg,
        setNotFoundMsg,
        userId,
        setUserId,
        handleSortChange,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
