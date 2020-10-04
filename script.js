
var theLinker = document.getElementById("linker");
var i = 0;
var txt;

var delay = 1500;
var speed = 50;

var timerOnMouseOut;
var timerTypeWriter;
var timerGoNext;

var canGoNext = true;


selectedTextIndex = 0;
prg = document.getElementById("demo");
isTyping = true;





var news = [

    {
        text: "بهره برداری خط مترو",
        href: "http://www.google.com/SKY",

    },

    {
        text: "بالگرد اچ سی و شش  امروز بر فراز دنا",
        href: "http://www.w3schools.com",


    },

    {
        text: "تاثیر دما بر تولید گاز هاای گلخانه ای ",
        href: "http://www.javascript.info",


    },

    {
        text: "     غذا های سالم ؟ ",
        href: "http://www.netparadis.com"


    },


]

window.addEventListener('load', (event) => {
    // console.log('page is fully loaded');
    typeWriter();
    //console.log("news:", news);
});









function caller() {


    //console.log("go next", canGoNext);
    if (canGoNext) {
        selectedTextIndex++;
        if (selectedTextIndex >= news.length) selectedTextIndex = 0;

        txt = news[selectedTextIndex].text;
        if (!txt) {
            // console.log("an error on marquee !!");
            return;
        }
        theLinker.href = news[selectedTextIndex].href;


        timerGoNext = setTimeout(() => {
            isTyping = true
            reset();
            clearTimeout(timerGoNext)
        }, delay)


    } else {
        //  clearTimeout(timerTypeWriter)
        //typeWriter();
    }





}

function typeWriter() {

    isTyping = true;
    if (!txt) {
        //for initialazation 
        if (news[0].text) {

            txt = news[0].text
            theLinker.href = news[0].href;
        } else {
            //  console.log("not any topic found to show in marquee");
            return;
        }
    }
    document.getElementById("ip").innerHTML = theLinker.href



    if (i >= txt.length) {
        isTyping = false;
        caller();
        return;
    }

    prg.innerHTML += txt.charAt(i);
    i++;
    clearTimeout(timerTypeWriter);
    timerTypeWriter = setTimeout(typeWriter, speed);
}




function mouseInHandler() {
    canGoNext = false;
    // console.log("mouseInHandler");
}


function mouseOutHandler() {

    clearTimeout(timerOnMouseOut);
    canGoNext = true;
    timerOnMouseOut = setTimeout(() => {
        //   delay 1000ms just for smooth changing after hover out     
        caller();
    }, 500);
    //clearAndRerun()
}


function reset() {
    prg.innerHTML = "";
    i = 0;

    clearTimeout(timerTypeWriter);
    typeWriter();

}