function add(n1, n2) {
  return n1 + n2;
}

function addThre(n1, n2, n3) {
  return n1 + n2 + n3;
}
function addFour(n1, n2, n3, n4) {
  return n1 + n2 + n3, +n4;
}

add(1, 2);
addThre(1, 4, 5);
addFour(1, 5, 7, 88);

// rest opearator
/*
1. rest operator shaloul always be the last parameter or rest operator shoubld be one and only parameter
2. (a,b,...rest) //valid
3. (...rest) //valid
4. (...rest. a,b) // invalid (a and b varaiables will never get any values)
5. (a, ...rest,b) // invalid
*/

function addAll(...nums) {
  console.log(nums);
  let total = 0;

  nums.map((d)=>{
    total+=d
  })
  // for (let i = 0; i < nums.length; i++) {
  //   total += nums[i];
  // }
   console.log("total", total );
}
addAll(10,20);
addAll(10,20,30)
addAll(10,20,30,40)
addAll(10,20,30,40,50)
addAll(100  ,200,300,400,500)


// a, b parameter stores in remaining values will be stored in ...rest as array formate
function addAllValues(a,b, ...rest){
    console.log(a,b, rest)
}

addAllValues(10, 20,30,40,90)