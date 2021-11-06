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
    let quantityP = quantityControllerDiv.querySelector("#product-quantity");
    quantityControllerDiv.firstElementChild.addEventListener("click", ()=>{
        // if(quantityP.innerText != "1"){
        // quantityP.innerText = parseInt(quantityP.innerText) -1;
        // }
        quantityP.innerText = parseInt(quantityP.innerText) -1;
        if(quantityP.innerText == "0"){
            alert("product will be removed!");
            quantityControllerDiv.parentElement.parentElement.remove();
        }
    });
    //plusbutton
    quantityControllerDiv.lastElementChild.addEventListener("click", ()=>{
        quantityP.innerText = parseInt(quantityP.innerText) +1;

    });
});