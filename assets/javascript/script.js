var message = prompt('veuillez saisir une phrase');
console.log(message);
var reponse ="";
if(message < 0){
  reponse = 'nombre négatif';
}
else if (message > 0){
  reponse = 'Nombre positif'
}
else {
  reponse = 'Null'
}
alert(reponse);
