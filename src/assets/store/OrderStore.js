import { makeAutoObservable } from "mobx"


export default class OrderStore {

constructor(){
    this._order = []
    this._lastOrders = []
    makeAutoObservable(this)
}



setOrder(order){
    this._order = order
}

setUser(lastOrders){
    this._lastOrders = lastOrders
}

get order(){
    return this._order
}

get lastOrders(){
    return  this._lastOrders
}



}