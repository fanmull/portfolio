var menubtn = document.getElementById("menubtn")
 var mobmenu = document.getElementById("mobmenu")
 var menu = document.getElementById("menu")
   menubtn.onclick= function() {
    if(mobmenu.style.right=="-250px"){
    mobmenu.style.right="0";
    menu.src="assets/closes.png";
   }   
   else{
     mobmenu.style.right="-250px";
     menu.src="assets/open.png";
   }
  
   }
   function download() {
    var a = document.createElement("a");
    a.style = "display: none";
    a.href = "data:application/pdf;base64,<?= $file_content ?>";
    a.download = "download.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}