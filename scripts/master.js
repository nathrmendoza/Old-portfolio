var spcshp = document.getElementById("spcshp");
var spcfot = document.getElementById("test");
var spctalk = document.getElementById("spctalk");
var spcsht = document.getElementById("spcsht");
var ovrvw = document.getElementById("ovrvw");
var bckgrnd = document.getElementById("bckgrnd");

var movement = 0;
window.onscroll = function () {
    console.log(movement);
    myTest();
}

var lastScrollPos = 0;
function myTest () {
    //CHECK IF SCROLL UP / DOWN
    if (window.pageYOffset > lastScrollPos) { //scrolling down
        //bottom spcshp
        if (window.pageYOffset > spcfot.offsetTop) {
            spcshp.classList.add("helloSpc");
            spctalk.classList.add("spanChange");
        }

        /*middle spcshp*/
        if (window.pageYOffset <  bckgrnd.offsetTop) {
            if (movement < 100) {
                movement += 1;
            }
        } else  {
            movement = 100;
            spcsht.style.transform = "translateX(" + movement + "vw)";
        }
        if (window.pageYOffset > ovrvw.offsetTop && window.pageYOffset < bckgrnd.offsetTop) {
            spcsht.style.transform = "translateX(" + movement + "vw)";
        } 

        }
        else { //scrolling up
        //bottom spcshp
            if (window.pageYOffset > spcfot.offsetTop) {
                spcshp.classList.remove("helloSpc");
                spctalk.classList.remove("spanChange");
            }
        //middle spcshp
            if (window.pageYOffset > ovrvw.offsetTop) {
                if (movement > -10) {
                    movement -= 1;
                }
            } else  {
                movement = -10;
                spcsht.style.transform = "translateX(" + movement + "vw)";
            }

            if (window.pageYOffset > ovrvw.offsetTop && window.pageYOffset < bckgrnd.offsetTop) {
                spcsht.style.transform = "translateX(" + movement + "vw)";
            } 
        }
    lastScrollPos = window.pageYOffset;
}
