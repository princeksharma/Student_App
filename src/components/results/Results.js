import React, {useState} from 'react'

import {data} from '../../data/data';
import ResultTable from './ResultTable';

const Results = () => {
  const [result, setResult] = useState([data]);
  
  return (
    <div className="container">
      <ResultTable key={data.id} datas={result[0]} />
    </div>
  )
}

export default Results
