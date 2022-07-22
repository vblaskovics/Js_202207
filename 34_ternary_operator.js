// Ternary (or conditional) operator:  ... ? ... : ...

// if szerkezet példa:
function paritasEllenorzes(num) {
  if (num % 2 === 0) {
    console.log(num, "páros")
  } else {
    console.log(num, "páratlan")
  }
}

// if szerkezet röviden ternary operator-ral:
function paritasEllenorzes2(num){
  var paritas = num % 2 === 0 ? "páros" : "páratlan";
  console.log(num, paritas);
}

paritasEllenorzes(4);
paritasEllenorzes2(4);