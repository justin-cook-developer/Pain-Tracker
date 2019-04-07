import axios from 'axios';

const rootAddress = 'http://localhost:3000/records/'

export const getRecords = async number => {
  try {
    const requestAddress = `${rootAddress}?_limit=${number}`
    const { data } =  await axios.get(requestAddress)
    return data
  } catch(e) {
    console.log(e)
  }
}

export const postRecord = async record => {
  try {
    const { data } = await axios.post(rootAddress, record)
    return data
  } catch(e) {
    console.log(e)
  }
}

export const updateRecord = async (id, record) => {
  try {
    const requestAddresss = `${rootAddress}${id}`
    const { data } = await  axios.put(requestAddresss, record)
    return data
  } catch(e) {
    console.log(e)
  }
}

export const deleteRecord = async id => {
  try {
    const requestAddress = `${rootAddress}${id}`
    const response =  await axios.delete(requestAddress)
    return response.status === 200
  } catch(e) {
    console.log(e)
  }
}
