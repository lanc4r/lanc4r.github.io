var img = document.getElementById("avatar-img");
var preClassName = img.getAttribute("class");

img.onmouseover = function(){
	img.setAttribute("class", preClassName+" animated tada");
}

img.onmouseout = function(){
	img.setAttribute("class", preClassName);
}