let koenigsegg = {
  tablilla: "log-299"
  color: "blanco"
  millaje:1
  año: 1990
  estado: false,
  velocidad: 0,
  prendeCarro:function(1){
if(!this.estado){
  this.estado = true
}
return void;
}
acelerar: function(rate){
this.velocidad = this.velocidad * rate;
}
koenigsegg.prendeCarro();
