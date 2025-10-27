function compression(str){
    return str.replace(/(.)\1{1,}/g,(m)=>' '+m[0]+m.length);

}
console.log(compression('aaaaaaabbbbbbbbbaaacck'));