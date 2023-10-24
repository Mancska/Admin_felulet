import { urlapLeiro } from "./adat.js"
class Model{
    #leiro
    constructor(){
        this.#leiro = urlapLeiro
    }

    get leiro(){
        return this.#leiro
    }
}
export default Model