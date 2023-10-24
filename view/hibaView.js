class hibaView{
    constructor(error,szuloelem){
        this.szuloelem=szuloelem
        console.log(this.szuloelem)
        this.szuloelem.html(error)
        console.log(error)

    }
}
export default hibaView