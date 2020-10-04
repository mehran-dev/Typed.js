
var theLinker = document.getElementById("linker");

var i = 0;
var txt;

var delay = 2000;
var speed = 50;

var timerOnMouseOut;
var timerTypeWriter;
var timerGoNext;

var canGoNext = true;
var news = [

    {
        text: "آسمان فرودگاه خیلی هواپیما دارد",
        href: "http://www.google.com/SKY",

    },

    {
        text: "بالگرد اچ سی و شش  امروز بر فراز اورست",
        href: "http://www.w3schools.com/HELICOPTER",


    },

    {
        text: "تاثیر دما بر تولید گاز هاای گلخانه ای ",
        href: "http://www.javascript.info/TEMPERATURE",


    },

    {
        text: "پیتزا سمی تر است  یاغذا های سالم ؟ ",
        href: "http://www.netparadis.com/PIZZA"


    },


]

selectedTextIndex = 0;
prg = document.getElementById("demo");
isTyping = true;



window.addEventListener('load', (event) => {
    // console.log('page is fully loaded');
    typeWriter();
    //console.log("news:", news);
});









function caller() {
    if (isTyping) {
        if (i >= txt.length) {
            isTyping = false;
        }
        typeWriter();

    }
    else {

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
                clearAndRerun();
                clearTimeout(timerGoNext)
            }, delay)


        } else {
            //  clearTimeout(timerTypeWriter)
            typeWriter();
        }

    }



}

function typeWriter() {
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


    prg.innerHTML += txt.charAt(i);
    i++;


    clearTimeout(timerTypeWriter);
    timerTypeWriter = setTimeout(caller, speed);
}




function mouseInHandler() {
    canGoNext = false;
    // console.log("mouseInHandler");
}


function mouseOutHandler() {
    //console.log("mouseOutHandler");
    clearTimeout(timerOnMouseOut);
    canGoNext = true;
    timerOnMouseOut = setTimeout(() => {
        //   delay 1000ms just for smooth changing after hover out     
        clearAndRerun()
    }, 1000);
    //clearAndRerun()
}


function clearAndRerun() {
    prg.innerHTML = "";
    i = 0;
    // isTyping = true;
    // theLinker.href = news[selectedTextIndex].href
    clearTimeout(timerTypeWriter);
    caller();

}