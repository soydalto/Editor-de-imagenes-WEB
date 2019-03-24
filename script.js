document.addEventListener("change",cambiar);

function a(content){
    return document.querySelector(content);
}
img = a("#img");
const blur = a("#blur");
const grayscale = a("#grayscale");
const brightness = a("#brightness");
const contrast = a("#contrast");
const invert = a("#invert");
const opacity = a("#opacity");
const hueRotate = a("#hueRotate");
const sepia = a("#sepia");
const saturate = a("#saturate");

function cambiar(){
    filtro = "blur("+blur.value+"px)";
    filtro+= "grayscale("+grayscale.value+"%)";
	filtro += "opacity("+ opacity.value +"%)"; 
	filtro += "brightness("+ brightness.value +"%)"; 
	filtro += "contrast("+ contrast.value +")"; 
	filtro += "invert("+ invert.value +"%)"; 
	filtro += "hue-rotate("+ hueRotate.value +"deg)"; 
	filtro += "sepia("+ sepia.value +"%)"; 
	filtro += "saturate("+ saturate.value +"%)";
	img.style.filter = filtro;
}