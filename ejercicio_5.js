/*
    2.6km desde el pueblo de juan hasta toledo
    desde la tienda hasta la casa de su tio recorre 691mts

    - mostrar la distancia total recorrida en km desde el pueblo de juan hasta la casa de su tio

*/

var distPuebloJuanToledo = 2.6; // recorridoUnoEnKm
var distTiendaCasaTioMts = 691; // recorridoDosEnKm

var recorridoTotalJuanKm = distPuebloJuanToledo + distTiendaCasaTioMts/1000; // recorridoTotalFinal

console.log("distancia total recorrida por Juan es de: " + recorridoTotalJuanKm + " km");

