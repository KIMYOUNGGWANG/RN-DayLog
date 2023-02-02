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
  >(
    Array.from({length: 10}).map((_, idx) => ({
      id: uuidv4(),
      title: `Log-${idx}`,
      body: `Log-${idx}`,
      date: new Date().toISOString(),
    })),
  );
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

  const onModify = modified => {
    const nextLog = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLog);
  };

  const onRemove = id => {
    const newLog = logs.filter(log => log.id !== id);
    setLogs(newLog);
  };
  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
};
export default LogContext;
