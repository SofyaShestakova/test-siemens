function showOrHidePanel(element1){
var panel  =  document.getElementById(element1);
if (this.panel == null) {
   var b =   document.createElement(element1);
   panel =document.getElementById(element1);
    console.log("AAAAAAAAAAAAAAAA NOT DEFIEMED"+panel);
}
console.log("THOIS IS PANEL ELEMENHT"+panel);
 var style = panel.style;
    if (!(panel.style.display = "block")) {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }

}



