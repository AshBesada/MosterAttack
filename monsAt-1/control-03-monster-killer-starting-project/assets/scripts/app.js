funcution tipCalc (billTotal){
    if (billTotal < 50) {
        return billTotal * 0.2;
    }else if ( billTotal >= 200) {
        return billTotal * 0.15;
    }else {
        return billTotal * 0.1;
    }
}
let result = tipCalc(50);
console.log(result);
