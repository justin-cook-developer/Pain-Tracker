import axios from 'axios';

const rootAddress = '/api/records/';

export const getRecord = async id => {
  try {
    const requestAddress = `${rootAddress}/${id}`
    const { data } = await axios.get(requestAddress)
    return data
  } catch(e) {
    console.log(e)
  }
}

export const getRecords = async (limit = 14, offset = 0) => {
  try {
    const requestAddress = `${rootAddress}?limit=${limit}&offset=${offset}`;
    const { data } = await axios.get(requestAddress);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const postRecord = async formData => {
  try {
    const { data } = await axios.post(rootAddress, formData);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateRecord = async record => {
  try {
    const requestAddresss = `${rootAddress}${record.id}`;
    const { data } = await axios.put(requestAddresss, record);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteRecord = async id => {
  try {
    const requestAddress = `${rootAddress}${id}`;
    const response = await axios.delete(requestAddress);
    return response.status === 200;
  } catch (e) {
    console.log(e);
  }
};
