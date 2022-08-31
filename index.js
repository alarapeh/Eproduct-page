var fullImage= document.getElementById("holder");
function imgFunction( image){

    fullImage.setAttribute("src", "images/image-product-1.jpg");
    return fullImage;
}

function img( image){
    
    fullImage.setAttribute("src", "images/image-product-2.jpg");
    return fullImage;
}
function thirdImg( image) {

    fullImage.setAttribute("src", "images/image-product-3.jpg");
    return fullImage;
}
function imagess( image){

    fullImage.setAttribute("src", "images/image-product-4.jpg");
    return fullImage;
}
var count = document.querySelector(".count").innerHTML
function countProducts (){
    count++
    document.querySelector(".count").innerHTML= count;
    calcPrice()
} 
function subtractProducts(){
    count--
    document.querySelector(".count").innerHTML= count;
    if ( count<0){
        document.querySelector(".count").innerHTML= " 0";
        calcPrice()
    }
}
var priced =document.querySelector( " .pricee");
function calcPrice(){
var itemPrice= count*125 +  " .00"+" $";
if (count>=1){
    document.querySelector(".pricee").innerHTML = itemPrice;
    var pricer =document.querySelector(".pricer").innerHTML="$125.00 x "+ count +"   " +itemPrice;


}
}
function delCart(){
    document.querySelector(".modbody").innerHTML=" Your cart is empty"
    if (count>=1){
        calcPrice()
    }
    
}
