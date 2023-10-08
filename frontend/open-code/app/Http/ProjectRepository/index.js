import axios from 'axios'

const url = 'https://6521d110a4199548356d95af.mockapi.io/api/v1/'

class ProjectRepository {
    async getOne(id){
        return axios.get(`${url}/proyects/${id}`)
    }
    async getAll(){
        return axios.get(`${url}/proyects`)
    }
    async deleteOne(id){
        return axios.delete(`${url}/proyects/${id}`)
    }
    async updateOne(id) {
        return axios.put(`${url}/proyects/${id}`)
    }
    async create(payload) {
        return axios.post(`${url}/proyects`, payload)
    }
}

export default ProjectRepository;