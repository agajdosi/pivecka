texts = [
  "Nenechte zkrachovat\nčeský národní sport!",
  "Pomožte nám vypít sudy\nnenechte nás v tom!"
]


var ad = document.getElementsByClassName("pivoad")[0];



ad.style.backgroundImage = "url(https://pics.ytro.ru/utro_photos/2020/03/14/1438587.jpg)";
ad.style.backgroundSize = "cover"; //pak mozna vyresit vix flexibilne orezavani
//tady vyresit cernobilost

//TEXT
var text1 = ad.getElementsByClassName("text1")[0];
var text2 = ad.getElementsByClassName("text2")[0];

//LOGO
var logo = ad.getElementsByClassName("logo")[0];
logo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Bud%C4%9Bjovick%C3%BD_Budvar_logo_vector.svg/1599px-Bud%C4%9Bjovick%C3%BD_Budvar_logo_vector.svg.png";

