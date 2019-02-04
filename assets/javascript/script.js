var resultat="<ul>";
var compteur=0;
for (var i=-12728; i <=16856; i+=17) {
  if (i%23==0){
    resultat+="<li>"+i+"</li>";
    compteur++;
  }
}
resultat=resultat+"</ul>";
document.write(resultat);
alert(compteur);
