function calcCircleArea(r){
    if(r >= 0){
        return window['Math']['PI'] * r * r;    
    }else{
        return "wrong input";
    }
}

document.write('r = 7; area = ' + window['calcCircleArea'](7) + "<br />");
document.write('r = 1.5; area = ' + window['calcCircleArea'](1.5) + "<br />");
document.write('r = 20; area = ' + window['calcCircleArea'](20) + "<br />");
