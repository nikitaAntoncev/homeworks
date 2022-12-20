"use strict";
function solveEquation(a,b,c){\
 let D = b*b - 4 * a * c
 let x, x1, x2;
 if(D < 0) {
    D = [];
 } else if(D === 0){
    return x = -b/(2*a);
 } else if(D > 0){
    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a);
    return x1,x2
 }
}
solveEquation(1,3,-4)