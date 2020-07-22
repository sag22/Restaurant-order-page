import axios from 'axios'
const baseUrl = 'http://localhost:3001/orders'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = Order => {
  return axios.post(baseUrl, Order)
}

const del = (id) =>{
    return axios.delete(`${baseUrl}/${id}`)
}
const update = (id) =>{
    return axios.update('')
}

export default { 
  getAll: getAll, 
  delete: del,    
  update: update,    
  create: create
}