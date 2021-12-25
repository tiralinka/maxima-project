import axios from "axios";

export const baseUrl = "http://localhost:8080/"

export async function getUsers() {
    try {
        const response = await axios.get(baseUrl + 'user')
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export async function getMenuList() {
    try {
        const response = await axios.get(baseUrl + 'post')
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export async function getMenu(id) {
    try {
        const response = await axios.get(baseUrl + 'post' + '/' + id)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export async function createItem(object) {
    try {
        const response = await axios.post(baseUrl + 'post' + '/', object)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

