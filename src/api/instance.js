import axois from 'axios'
export const instance = axois.create({
    baseURL:'https://rickandmortyapi.com/api/'
})