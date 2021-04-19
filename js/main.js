function searchFunc() {
    document.getElementById('left').style.display = "none";
    document.getElementById('rightHeader').style.display = "none";
    document.getElementById('middleHeader').style.display = "flex";
}
function arrow() {
    document.getElementById('left').style.display = "flex";
    document.getElementById('rightHeader').style.display = "flex";
    document.getElementById('middleHeader').style.display = "none";
}
temp = document.getElementById('keyboard');
temp_2 = document.getElementById('search');

temp.addEventListener('click', () =>  {
    temp_2.focus();
});
let condition = 0
function responsiveMenu(){
    if(condition == 0) {
        document.getElementById('menu1').style.left = "-240px";
        document.getElementById('bg').style.opacity = "0";
        document.getElementById('bg').style.display = "none";
        condition = 1
    }
    else {
        document.getElementById('menu1').style.left = "0";
        document.getElementById('res-top').style.left = "0px";
        document.getElementById('bg').style.opacity = "0.3";
        document.getElementById('bg').style.display = "block";
        condition = 0
    }
}
function responsiveMenu2() {
    if(condition == 0) {
        document.getElementById('res-top').style.left = "-240px";
        document.getElementById('menu1').style.left = "-240px";
        document.getElementById('bg').style.opacity = "0";
        document.getElementById('bg').style.display = "none";
        condition = 1
    }
    else {
        document.getElementById('res-top').style.left = "0px";
        document.getElementById('menu1').style.left = "0";
        document.getElementById('bg').style.opacity = "0.3";
        document.getElementById('bg').style.display = "block";
        condition = 0
    }
}
function bg() {
    if(condition == 0) {
        document.getElementById('res-top').style.left = "-240px";
        document.getElementById('menu1').style.left = "-240px";
        document.getElementById('bg').style.opacity = "0";
        document.getElementById('bg').style.display = "none";
        condition = 1
    }
    else {
        document.getElementById('res-top').style.left = "0px";
        document.getElementById('menu1').style.left = "0";
        document.getElementById('bg').style.opacity = "0.3";
        document.getElementById('bg').style.display = "block";
        condition = 0
    }
}

let resMedeia1 = window.matchMedia("(max-width: 1330px)")
resHeaderContents1(resMedeia1)
resMedeia1.addListener(resHeaderContents1)
function resHeaderContents1(x){
    if(x.matches){
        document.body.style.background = "white"
        document.getElementById('menu1').style.left = "-240px";
        document.getElementById('menu1').style.transition = "left .2s linear";
        document.getElementById('res-top').style.display = "block";
        document.getElementById('res-top').style.left = "-240px";
        condition = 1
    }else{
        document.body.style.background = "blue"
        document.getElementById('menu1').style.left = "0";
        document.getElementById('menu1').style.transition = "none";
        document.getElementById('res-top').style.display = "none";
        document.getElementById('bg').style.display = "none !important";
        condition = 0
    }
}

let resMedeia2 = window.matchMedia("(max-width: 807px)")
resHeaderContents2(resMedeia2)
resMedeia2.addListener(resHeaderContents2)
function resHeaderContents2(x){
    if(x.matches){
        document.getElementById('menu2').style.display = "none";
    }else{
        document.getElementById('menu2').style.display = "block";
    }
}













// let condition  = 0
// function responMenu() {
//     if(condition ==0) {
//         document.getElementById('menu1').style.zIndex = "80";
//         document.getElementById('menu1').style.left = "-240px";
//         // document.getElementById('menu11').style.left = "0";
//         document.getElementById('res-top').style.left = "0";
//         condition = 1;
//     }
//     else if(condition == 1) {
//         document.getElementById('menu1').style.zIndex = "100";
//         document.getElementById('menu1').style.left = "0";
//         // document.getElementById('menu11').style.left = "-240px";
//         document.getElementById('res-top').style.left = "-100%";
//         condition = 0;
//     } 
// }
// function responMenu2() {
//     if(condition ==1 ) {
//         //document.getElementById('menu11').style.left = "-100%";
//         document.getElementById('res-top').style.left = "-100%";
//         document.getElementById('menu1').style.left = "-100%";
//         // condition = 0;
//     }
//     else if(condition == 0) {
//         // document.getElementById('menu11').style.left = "0";
//         document.getElementById('res-top').style.left = "0";
//         document.getElementById('menu1').style.left = "0";
//         // condition = 1
//     }
// }


// function resHeaderContents(x){
//     if(x.matches){
//         // document.getElementById('menu1').style.left = "-240px";
//         // condition = 1
//     }else{
        
//     }
// }   

// function resHeaderContents2(x){
//     if(x.matches){
//         condition = 0
//         document.getElementById('res-top').style.display = "none";
//     }else{
//         document.getElementById('res-top').style.display = "none";
//     }
// }
// let resMedeia = window.matchMedia("(max-width: 807px)")
// let resMedeia2 = window.matchMedia("(max-width: 1330px)")

// resHeaderContents(resMedeia)
// resMedeia.addListener(resHeaderContents)

// // resHeaderContents2(resMedeia2)
// // resMedeia2.addListener(resHeaderContents2)