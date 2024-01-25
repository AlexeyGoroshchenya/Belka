import {$authHost, $host} from './index'
// import {jwtDecode} from 'jwt-decode'

export const createType = async (type)=>{
    const {data} = await $authHost.post('api/type', type) 
    return data
}

export const fetchTypes = async ()=>{
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brands)=>{
    const {data} = await $authHost.post('api/brand', brands) 
    return data
}

export const fetchBrands = async ()=>{
    const {data} = await $host.get('api/brand')
    return data
}


export const createDevice = async (device)=>{
    const {data} = await $authHost.post('api/device', device) 
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit = 5)=>{
    const {data} = await $host.get('api/device', {params:{typeId, brandId, page, limit}})
    return data
}

export const fetchOneDevice = async (id)=>{
    const {data} = await $host.get(`api/device/${id}`)
    return data
}

export const checkLocalBasket = async (id)=>{
    if(localStorage.basket){
        return JSON.parse(localStorage.basket).find(el => el.id === parseFloat(id))
    } else {
        return undefined
    }
    
}

