import AdatView from "./AdatView.js";
import tablazatSorView from "./tablazatSorView.js";
class tablazatView {
  constructor() {
    const VALAMI = new AdatView();
    const adat = VALAMI.getLista();
   
    for (let index = 0; index < adat.length; index++) {
      new tablazatSorView($(".lista"));
    }
  }
}
export default tablazatView;
