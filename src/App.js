import React from 'react';
import ServiceFilter from './components/ServiceFilter';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceFilterClassBased from './components/ServiceFilterClassBased';
import ServiceAddClassBased from './components/ServiceAddClassBased';
import ServiceListClassBased from './components/ServiceListClassBased';

function App() {
  return (
    <>
      <ServiceFilter />
      <ServiceAdd />
      <ServiceList />
      <hr />
      <ServiceFilterClassBased />
      <ServiceAddClassBased />
      <ServiceListClassBased />
    </>
  );
}

export default App;
