var i;
for (i=1; i<=20; i++){
        console.log(i)
}

for (i=1; i<=20; i++){
    if(i%2==0){
        console.log(i)
    } 
        

}

var array = [1,2,3,4];
var s;
var sum = 0;
for(var s = 0; s < array.length ;s +=1 ){
        sum += array[s]
}
console.log(sum);

var array2= [11,5,77];
console.log(Math.max(11,5,77));

var array3=[2,5,4,2,7,8,2];

var count = {};

for (var element of array3) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
console.log(count);