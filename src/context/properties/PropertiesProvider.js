import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PropertiesContext } from './PropertiesContext';
// import PropertiesServices from '../../services/PropertiesServices';
import PropertiesServices from '../../services/portal-properties/PropertiesServices';
import ExchangeRateServices from '../../services/ExchangeRateServices';
import { paginationTopLimit } from '../../constants/consts/company';

const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [propertiesInExchange, setPropertiesInExchange] = useState([]);
  const [allProperties, setAllProperties] = useState([]);
  const [propertyId, setPropertyId] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundMsg, setNotFoundMsg] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [limit, setLimit] = useState(paginationTopLimit.limit)
  const [allLimit, setAllLimit] = useState(paginationTopLimit.allLimit)

  const [valueUf, setValueUf] = useState('');


  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // properties.sort((a, b) => {
  //   if (sortOrder === 'asc') {
  //     return a.price - b.price;
  //   } else if (sortOrder === 'desc') {
  //     return b.price - a.price;
  //   } else {
  //     return 0;
  //   }
  // });

  const getProperties = async (
  ) => {
    try {
      setNotFoundMsg('');
      setIsLoading(true);
      const { data, meta } =
        await PropertiesServices.getProperties();
      setProperties(data)
      setTotalItems(meta.totalItems);
      // setTotalPages(Math.ceil(meta.totalItems / limit)); // + 0.5
      setNotFoundMsg(
        data.length === 0
          ? 'Lo sentimos, tu busqueda no coincide con nuestros registros'
          : ''
      );
      setIsLoading(false);
    } catch (error) {
      console.log('Bad server request', error);
    }
  };

  const getAllProperties = async (
  ) => {
    try {
      setNotFoundMsg('');
      setIsLoading(true);
      const { data, meta } =
        await PropertiesServices.getAllProperties();
      setAllProperties(data)
      setTotalItems(meta.totalItems);
      // setTotalPages(Math.ceil(meta.totalItems / limit)); // + 0.5
      setNotFoundMsg(
        data.length === 0
          ? 'Lo sentimos, tu busqueda no coincide con nuestros registros'
          : ''
      );
      setIsLoading(false);
    } catch (error) {
      console.log('Bad server request', error);
    }
  };

  const getPropertiesExchange = async (
    limit
  ) => {
    try {
      setNotFoundMsg('');
      setIsLoading(true);
      const { data, meta } =
        await PropertiesServices.getPropertiesExchange();
      setPropertiesInExchange(data)
      setTotalItems(meta.totalItems);
      setLimit(limit)
      // setTotalPages(Math.ceil(meta.totalItems / limit)); // + 0.5
      setNotFoundMsg(
        data.length === 0
          ? 'Lo sentimos, tu busqueda no coincide con nuestros registros'
          : ''
      );
      setIsLoading(false);
    } catch (error) {
      console.log('Bad server request', error);
    }
  };

  // const getAllProperties = async () => {
  //   try {
  //     setNotFoundMsg('');
  //     setIsLoading(true);
  //     const { data, meta } = 
  //       await PropertiesServices.getAllProperties();
  //     setAllProperties(data);
  //     setTotalItems(meta.totalItems);
  //     // setLimit(allLimit)
  //     setNotFoundMsg(
  //       data.length === 0
  //         ? 'Lo sentimos, tu busqueda no coincide con nuestros registros'
  //         : ''
  //     );
  //     setIsLoading(false);
  //   }catch (error) {
  //     console.log('Bad server request', error);
  //   }
  // };

  const getValueUF = async () => {
    const value = await ExchangeRateServices.getExchangeRateUF();
    setValueUf(value.UFs[0]);
  };

  useEffect(() => {
    getValueUF();
  }, []);

  // useEffect(() => {
  //   getAllProperties();
  // }, []);

  const handlePageChange = (newPage) => {
    setProperties([]);
    setAllProperties([])
    setPropertiesInExchange([])
    setPage(newPage);
  };

  useEffect(() => {
    getProperties(page);
    getAllProperties(page);
    getPropertiesExchange(page);
  }, [page]);

  return (
    <PropertiesContext.Provider
      value={{
        contextData: {
          properties,
          allProperties,
          setAllProperties,
          // allSimilarProperties,
          // highlightedProperties,
          // propertiesToShow,
          // setPropertiesToShow,
          // propertiesInMap,
          setProperties,
          propertiesInExchange,
          setPropertiesInExchange,
          page,
          totalPages,
          totalItems,
          handlePageChange,
          isLoading,
          setIsLoading,
          notFoundMsg,
          setNotFoundMsg,
          propertyId,
          setPropertyId,
          handleSortChange,
          sortOrder,
          setSortOrder,
          valueUf,
          limit, 
          setLimit,
          allLimit,
          setAllLimit,
        },
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;

