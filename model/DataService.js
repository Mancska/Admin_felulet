class DataService{
    constructor(){

    }
    getData(apivegpont,Callback,hibaCallback){
        axios.get(apivegpont)
  .then(function (response) {
    // handle success
    // console.log("valasz objektum",response)
    // console.log("adatok",response.data.nevek)
    // console.log("status szöveg",response.statusText)
    // console.log("Valasz fejléc ",response.headers)
    // console.log("Valasz conufg ",response.config)
    // console.log(response);
    Callback(response.data.nevek)
  })
  .catch(function (error) {
    hibaCallback(error)
  })
  .finally(function () {
    // always executed
  });


    }
}
export default DataService