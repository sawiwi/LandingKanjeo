/** Truncate string lenght */
export const truncateString = (str, limit = 60) =>
    str.length > limit ? `${str.substring(0, limit)}...` : str;
  
/** Parse number to CLP currency */
  export const parseToCLPCurrency = (number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    }).format(number);
  };
  
  /** Parse CLP to UF */
  export const clpToUf = (clpValue, ufValue) => {
    return (Math.round((clpValue / ufValue) * 100) / 100000).toFixed(2);
  };
  export const clpToUf2 = (clpValue, ufValue) => {
    return (clpValue / ufValue).toFixed(2);
  };
  
  /** Parse UF to CLP */
  export const ufToClp = (priceUF, ufValue) => priceUF * ufValue;
  
  export const parseToDecimal = (number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  
  /** Truncate small string */
  export const truncateStringSmall = (str, limit = 30) =>
    str?.length > limit ? `${str?.substring(0, limit)}...` : str;

  
  
  export const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };