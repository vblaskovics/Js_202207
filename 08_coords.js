var p1 = {
  x: 20,
  y: 10
}

var p2 = {
  x: 30,
  y: 40
}

// FELADAT: írj függvényt, ami összead két vektort, és visszaadja az
// összeg vektort! Hívd is meg a p1 és p2 pontokkal!

function addCoord(c1, c2) { 
  return {
    x: c1.x + c2.x,
    y: c1.y + c2.y
  };
}

console.log(addCoord(p1, p2));
