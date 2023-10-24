
import Adatcontroller from "./controller/AdatController.js";
import Controller from "../Controller/UrlapController.js";
import tablazatView from "./view/tablazatView.js";

$(function () {
    new Controller()
   new tablazatView();
    new Adatcontroller();
});

