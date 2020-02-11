function check (str1, str2){
    let str3 = str1.toString() + str1.toString() ;
    (str3.includes(str2))? console.log("yesss"): console. log("Nooo");
}

check("IndiaUSAEngland", "IndiaEnglandUSA");
check(123456, 456123);