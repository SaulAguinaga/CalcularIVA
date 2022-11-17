
let totalPrice=0;
let ivaPrice=0;
let iva;
let price;


function app(){
    pedirDatos();
    calculateIVA();
    sumarIVA();
    imprimirPrice();
}

app();

function calculateIVA(){
    ivaPrice=price*(iva*0.01);
}
function sumarIVA(){
    totalPrice = parseFloat(price)+parseFloat(ivaPrice);
}
function pedirDatos(){
    price=prompt("Dame el precio", 0);
    iva=prompt("Dime el IVA","%");
}
function imprimirPrice(){
    document.write(totalPrice);
}
