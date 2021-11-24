function printName() {
   var nimiTieto = sessionStorage.getItem("nimiTieto") ;
   let firstLetter = nimiTieto.charAt(0).toUpperCase() ;
   let printableName = firstLetter + nimiTieto.substring(1) ;
   document.getElementById("tulostanimi").innerHTML = printableName ;
}