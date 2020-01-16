var rectA = {
    left:   10,
    top:    10,
    right:  30,
    bottom: 30
  };
  
  var rectB = {
    left:   20,
    top:    20,
    right:  50,
    bottom: 50
  };

function Overlap(a, b) {
    return (a.left <= b.right &&
        b.left <= a.right &&
        a.top <= b.bottom &&
        b.top <= a.bottom);
}

let res = Overlap(rectA, rectB);
console.log(res);