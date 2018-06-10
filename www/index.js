var relay1 = document.querySelector(".tombol1");
var relay2 = document.querySelector(".tombol2");
var relay3 = document.querySelector(".tombol3");
var relay4 = document.querySelector(".tombol4");
var relay5 = document.querySelector(".tombol5");
var relay6 = document.querySelector(".tombol6");

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;

function tombol1(tombol1) {
  a = a + 1;
  if(a % 2 == 0){
    document.querySelector(".lampu1").innerHTML = "MATI";
    document.querySelector(".tombol1").innerHTML = "NYALAKAN";
  }
  else{
    document.querySelector(".lampu1").innerHTML = "MENYALA";
    document.querySelector(".tombol1").innerHTML = "MATIKAN";
  }
}

function tombol2() {
  b = b + 1;
  if(b % 2 == 0){
    document.querySelector(".lampu2").innerHTML = "MATI";
    document.querySelector(".tombol2").innerHTML = "NYALAKAN";
  }
  else{
    document.querySelector(".lampu2").innerHTML = "MENYALA";
    document.querySelector(".tombol2").innerHTML = "MATIKAN";
  }
}

function tombol3() {
  c = c + 1;
  if(c % 2 == 0){
    document.querySelector(".lampu3").innerHTML = "MATI";
    document.querySelector(".tombol3").innerHTML = "NYALAKAN";
  }
  else{
    document.querySelector(".lampu3").innerHTML = "MENYALA";
    document.querySelector(".tombol3").innerHTML = "MATIKAN";
  }
}

function tombol4() {
  d = d + 1;
  if(d % 2 == 0){
    document.querySelector(".lampu4").innerHTML = "MATI";
    document.querySelector(".tombol4").innerHTML = "NYALAKAN";
  }
  else{
    document.querySelector(".lampu4").innerHTML = "MENYALA";
    document.querySelector(".tombol4").innerHTML = "MATIKAN";
  }
}

function tombol5() {
  e = e + 1;
  if(e % 2 == 0){
    document.querySelector(".kipasangin").innerHTML = "MATI";
    document.querySelector(".tombol5").innerHTML = "NYALAKAN";
  }
  else{
    document.querySelector(".kipasangin").innerHTML = "MENYALA";
    document.querySelector(".tombol5").innerHTML = "MATIKAN";
  }
}

function tombol6() {
  f = f + 1;
  if(f % 2 == 0){
    document.querySelector(".pagar").innerHTML = "TERTUTUP";
    document.querySelector(".tombol6").innerHTML = "BUKA";
  }
  else{
    document.querySelector(".pagar").innerHTML = "TERBUKA";
    document.querySelector(".tombol6").innerHTML = "TUTUP";
  }
}

relay1.addEventListener("click", tombol1);
relay2.addEventListener("click", tombol2);
relay3.addEventListener("click", tombol3);
relay4.addEventListener("click", tombol4);
relay5.addEventListener("click", tombol5);
relay6.addEventListener("click", tombol6);
