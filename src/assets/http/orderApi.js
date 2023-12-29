import {$authHost, $host} from './index'

export const createOrder = async (order)=>{
    const {data} = await $host.post('api/basket', order) 
    return data
}

export const getAllOrders = async (order)=>{
    const {data} = await $authHost.get('api/basket') 
    return data
}