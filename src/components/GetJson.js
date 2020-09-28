import React, {useState, useEffect} from 'react';
import dataService from '../services/data'

const GetJson = () => {
    const [dataSet, setDataSet] = useState([])

    useEffect(() => {
      dataService.getAll().then(data =>
        setDataSet( data )
      )
    }, [])
    console.log(dataSet)
    const data = dataSet.map(d => <p key={d.key}>{d.key} : {d.value}</p>)
    console.log(data)
    return (
      data
    )
}

export default GetJson
