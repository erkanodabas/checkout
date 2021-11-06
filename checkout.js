const taxRate = 0.18;
const shippinPrice = 15.0;

window.onload = () =>{
    window.localStorage("taxtRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);

    window.sessionStorage("taxtRate", taxRate);
    sessionStorage.setItem("shippingPrice", shippingPrice);
}

let quantityControllerDivs = document.getElementsByClassName("quantity-controller");
console.log(quantityControllerDivs);

[...quantityControllerDivs].forEach((quantityControllerDiv)=>{
    //minus button
    quantityControllerDiv.firstElementChild.addEventListener("click", ()=>{
        let quantityP = quantityControllerDiv.querySelector("#product-quantity");
        quantityP.innerText = parseInt(quantityP.innerText) -1;
    });
    //plusbutton
    quantityControllerDiv.lastElementChild.addEventListener("click", ()=>{
    });
});