import axios from 'axios'

const url = 'https://6521d110a4199548356d95af.mockapi.io/api/v1/'

class ProjectRepository {
    async getOne(id){
        return axios.get(`${url}/users/${id}`)
    }
    async getAll(){
        return axios.get(`${url}/users`)
    }
    async deleteOne(id){
        return axios.delete(`${url}/users/${id}`)
    }
    async updateOne(id) {
        return axios.put(`${url}/users/${id}`)
    }
}

export default ProjectRepository;