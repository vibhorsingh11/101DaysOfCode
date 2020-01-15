function SwapVaribale(a,b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a,b);
}

SwapVaribale(2,11);


//------------------------Same can be done by XOR operator also---------

function SwapXOR(a,b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    console.log(a,b);
}

SwapXOR(22,9);
