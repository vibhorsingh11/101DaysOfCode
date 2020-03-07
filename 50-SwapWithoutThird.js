let x = 3, y = 66;

function Swap(x,y) {
    x = x ^ y;
    y = x ^ y;
    x = x ^ y;
    console.log('X = '+ x + ' and Y = ' + y);
}

Swap(x,y);
