import {instance} from "./instance"

export const locationApi ={
    getAllLocation(params){
        return instance.get(`charackter`,{params})
    }
}