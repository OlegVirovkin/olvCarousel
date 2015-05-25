/*
 *  Pure JS olvCarousel v1.0.0
 *
 *  Copyright (c) 2015 Oleg Virovkin (OLV)
 *  https://github.com/OlegVirovkin
 *
 */

// The 'carousel' function move slides to the left or to the right side
    
function carousel(side) {

    var list = document.getElementById("carousel").children, i;

if (side=="prev"){
    for (i = list.length - 1; i >= 0; i--) {

        if (list[i].classList.contains('active') === true) {

            list[i].className = list[i].className.replace('active', '');

            if (i == 0) {
                list[list.length - 1].className = list[list.length - 1].className.replace('item', 'item active');
            }
            else {
                list[i - 1].className = list[i - 1].className.replace('item', 'item active');
            }

            break;
        }
    }
}

else if (side=="next"){
    for (i = 0; i < list.length; i++) {

        if (list[i].className.indexOf('active') > -1) {

            list[i].className = list[i].className.replace('active', '');

            if (i == (list.length-1)){
                list[i - (list.length-1)].className = list[i - (list.length-1)].className.replace('item', 'item active');
            }

            else {
                list[i + 1].className = list[i + 1].className.replace('item', 'item active');
            }

            break;
        }
    }
}
    
}

document.getElementById('prev').onclick = function () {
carousel("prev");
}

document.getElementById('next').onclick = function () {
carousel("next");
}

//The frequency of page refreshing, uncomment bottom line and set the time of Page Refreshing (ms)
//var pagetimeRefresh = 12000;

//setInterval( document.getElementById('next').onclick = function () {
    //carousel("next");
//}, pagetimeRefresh/3);

//setInterval(function(){
    //location.reload();
//}, pagetimeRefresh);
