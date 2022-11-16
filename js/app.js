let price=0;
let iva=0;
let totalPrice=0;
let ivaPrice=0;

price=prompt("Dame el precio", 0);
iva=prompt("Dime el IVA","%")*0.01;

calculateIVA();
sumarIVA();

document.write(totalPrice);

function calculateIVA(){
    ivaPrice=price*iva;
}
function sumarIVA(){
    totalPrice = parseFloat(price)+parseFloat(ivaPrice);
}