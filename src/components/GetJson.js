import React, {useState, useEffect} from 'react';
import dataService from '../services/data'

const GetJson = () => {
    const [dataSet, setDataSet] = useState([])

    useEffect(() => {
      dataService.getAll().then(data =>
        setDataSet( data )
      )
    }, [])
    const data = dataSet.map(d => <p key={d.key}>{d.key} : {d.value}</p>)
    return (
      data
    )
}

export default GetJson
