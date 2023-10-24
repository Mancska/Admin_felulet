import AdatModel from "../model/AdatModel.js"
import Adatcontroller from "../controller/AdatController.js"
class AdatView{
    #lista=[];
constructor(lista,szuloelem){
    this.szuloelem=szuloelem
    this.#lista=lista
    console.log(lista)
    this.szuloelem.html(lista)
}
getLista(){
    return this.#lista
}
}


export default AdatView