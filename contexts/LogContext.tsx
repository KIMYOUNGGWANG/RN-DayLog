import React from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
const LogContext = createContext({});

export const LogContextProvider = ({children}: {children: React.ReactNode}) => {
  const [logs, setLogs] = useState<
    {
      title: string;
      body: string;
      date: Date;
      id: string;
    }[]
  >([]);
  const onCreate = ({
    title,
    body,
    date,
  }: {
    title: string;
    body: string;
    date: Date;
  }) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };
  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
};
export default LogContext;
