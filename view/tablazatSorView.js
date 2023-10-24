import AdatView from "./AdatView.js";

class tablazatSorView {
  constructor(szuloelem) {

  
    let txt = "";
    this.szuloelem = szuloelem;
    const VALAMI = new AdatView()
    const adat=VALAMI.getLista()

    for (const item of adat) {
        txt += `<table>
        <tr>
            <th>${item.key}</th>
        </tr>
        <tr>
            <td>${item.value}</td>
        </tr>
          </table>`;
       
      }
      this.szuloelem.append(txt)
            
        }}


export default tablazatSorView;
