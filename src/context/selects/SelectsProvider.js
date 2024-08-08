import React, { useEffect, useState } from 'react';
import { SelectsContext } from './SelectsContext';
import SelectsServices from '../../services/SelectServices';

const SelectsProvider = ({ children, filterOptions = {} }) => {
  const [operationType, setOperationType] = useState([]);
  const [typeOfProperty, setTypeOfProperty] = useState([]);
  const [regions, setRegions] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [stateId, setStateId] = useState('');
  const [selectedSelects, setSelectedSelects] = useState({
    operationType: '',
    typeOfProperty: '',
    regions: '',
    commune: '',
  });

  const getSelects = async () => {
    try{
        const { data } = await SelectsServices.getSelects();
        const {filterOperationType = [], filterTypeOfProperty = [] } = filterOptions;
    
        const filtredOperationTypeSelects = data?.businessTypes.filter(
          (type) => !filterOperationType.includes(type.name)
        );
    
        const filtredTypeOfPropertiesSelects = data?.propertyTypes.filter(
          (type) => !filterTypeOfProperty.includes(type.name)
        );
    
        setOperationType(filterOptions.applyFilter ? filtredOperationTypeSelects : data?.businessTypes);
        setTypeOfProperty(filterOptions.applyFilter ? filtredTypeOfPropertiesSelects : data?.propertyTypes);
        setRegions(data?.regions);

    } catch (error) {
        console.error("Error fetching selects: ", error);   
    }
  };

  const getCommunesByStateId = async (id) => {
    try {
        const { data } = await SelectsServices.getCommuneByStateId(id);
        setCommunes(data);
    } catch(error) {
        console.error("Error fetching comunas: ", error);
    }
  };

  useEffect(() => {
    getSelects();
  }, []);

  useEffect(() => {
    if (stateId) {
        getCommunesByStateId(stateId);
      }
  }, [stateId]);

  

  return (
    <SelectsContext.Provider
      value={{
        contextData: {
          regions,
          communes,
          stateId,
          setStateId,
          operationType,
          typeOfProperty,
          selectedSelects,
          setSelectedSelects,
        },
      }}
    >
      {children}
    </SelectsContext.Provider>
  );
};

export default SelectsProvider;
