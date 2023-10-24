import AdatModel from "../model/AdatModel.js"
import AdatView from "../view/AdatView.js"
import DataService from "../model/DataService.js"
import hibaView from "../view/hibaView.js"
class Adatcontroller {
    constructor(){
        console.log("constr")
        this.DataService=new DataService()
        this.DataService.getData("../adatok.json",this.adatokMegj,this.hibaMegj)
    }
    adatokMegj(lista){
        console.log(lista)
        new AdatView(lista,$(".lista"))
    }
    hibaMegj(error){
        console.log(error)
        new hibaView(error,$(".lista"))
    }
}
export default Adatcontroller