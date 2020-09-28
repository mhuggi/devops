import axios from 'axios'
const baseUrl = 'https://2tts5ypkch.execute-api.eu-north-1.amazonaws.com/test/getdata'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }
  
export default { getAll }