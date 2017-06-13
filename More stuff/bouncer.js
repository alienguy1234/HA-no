let bouncer = function( agesAndBribes  ){
  let minimumage=18
  let agesiIn = [];
  let ages0ut = [];
for (var i = 0; i < agesLine.length; i++) {
  if (agesLine[i]>=minimumage) {
  agesIn.push(agesAndBribes[i][0])
  console.log(agesIn)
}else {
  if( agesAndBribes[i][1] > 0){
  agesOut.push(agesAndBribes[i][0])
  //console.log(agesIn);
}else {
  agesOut.push(agesAndBribes[i][0])
  //console.log(agesOut);

}
let lists =[agesIn, agesOut];

  return list;
}
