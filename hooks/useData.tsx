import React, {
  createContext, useState, ReactNode, useContext,
} from 'react';

interface IDataProps {
  children: ReactNode;
}

interface IData {
  language:string;
  font: string;
  toc: boolean;
}

interface ISetData extends Partial<IData> {};

interface IContextData {
  data:IData;
  setUserData: (data:ISetData) => void;
  initializeInClientSide: () => void;
}

export const DataContext = createContext<IContextData>(
  {} as IContextData,
);

export function DataProvider({ children }:IDataProps) {

  const [data, setData] = useState<IData>({
    language:'en',
    font: 'Roboto',
    toc: true,
  });

  function initializeInClientSide(){
    const userData = localStorage.getItem('@WikiData:userData');

    if (userData) {
      setData( JSON.parse(userData));
    }
  }

  function setUserData({...rest}:ISetData){
    const newData = {...data, ...rest};
    localStorage.setItem('@WikiData:userData',JSON.stringify(newData));
    setData(newData);
  }

  return (
    <DataContext.Provider value={{
      data,
      setUserData,
      initializeInClientSide
    }}
    >
      {children}
    </DataContext.Provider>
  );
}
export function useData() {
  const context = useContext(DataContext);

  return context;
}