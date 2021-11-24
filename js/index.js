function tallennaNimi() {
    var nimiTieto = document.getElementById("nimi").value ;
    sessionStorage.setItem("nimiTieto", nimiTieto);
}
