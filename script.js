function sumofall(array){
  let sum=0;
  for (let a of array)
    sum +=a;
  return sum;
};
alert(sumofall([1,2,3,4,5.]));