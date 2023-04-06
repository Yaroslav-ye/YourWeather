document.getElementById("link").onclick = putScreanLink();


function putScreanLink(){
    if( window.innerWidth <= 510 ){
        document.getElementById("link").innerHTML = "<button class= " + "link"  + " onclick="+"window.open('telephonescrean.html')"+">Start Your Weather</button>";
        console.log("telephone screan");
   } else {
    document.getElementById("link").innerHTML = "<button class= " + "link"  + " onclick="+"window.open('fullscrean.html')"+">Start Your Weather</button>";
    console.log("Full screan");
}
}