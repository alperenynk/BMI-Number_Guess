// Function Used to Switch to Project 2
function sayiTahminCalistir() {
  window.location.href = "sayiTahmin.html";
}

// BMI Calculator == Project 1

function hesaplaVKI() {

  /* 
  Get Weight and Height Information from User
  parseInt() --> Convert to Integer
  Number() --> Convert to Decimal Number
  */ 
  let kilo = Number(document.getElementById("kilo").value);
  let boy  = Number(document.getElementById("boy").value);

  let kiloHata = document.getElementById("kilohata");
  let boyHata = document.getElementById("boyhata");

  /*
  Makes Span Empty in vki.html File
  Otherwise Your Height Will Be In CM And
  Your Weight in KG Below Their Portions
  Posts Visible
  */
  kiloHata.innerHTML = "";
  boyHata.innerHTML = "";

  /*
  If Weight and Height Values are Entered Abnormally Back to Top
  NaN = Not a Number --> isNaN = Is Not a Number 
  */
  if (kilo <= 0 || isNaN(kilo)){
      kiloHata.innerHTML = "Geçerli Bir Sayı Giriniz.";
      return;
  }
  if (boy <= 0 || isNaN(boy)){
      boyHata.innerHTML = "Geçerli Bir Sayı Giriniz.";
      return;
  }

  /*
  Body Mass Index = Weight / (Height * Height) --> If in meters
  Body Mass Index = Weight / ((Height * Height)/10000) --> If in Centimeters
  .toFixed(Number) = Determines how many numbers come after the dot in float numbers.
  */
  let vki = (kilo / ((boy * boy) / 10000)).toFixed(2);

  // Print Your BMI on Screen
  let sonuc = document.getElementById("output");
  if (vki < 18.5){
    sonuc.style.color = "yellow";
    sonuc.innerHTML = 'İdeal Kilonun Altında : ' + vki;
    return;
  } else if(vki >= 18.5 && vki < 24.9){
    sonuc.style.color = "green";
    sonuc.innerHTML = 'İdeal Kiloda : ' + vki;
    return;
  } else if(vki >= 24.9 && vki < 29.9){
    sonuc.style.color = "yellow";
    sonuc.innerHTML = 'İdeal Kilonun Üstünde : ' + vki;
    return;
  } else if(vki >= 29.9 && vki < 39.9){
    sonuc.style.color = "orange";
    sonuc.innerHTML = 'İdeal Kilonun Çok Üstünde (Obez) : ' + vki;
    return;
  } else{
    sonuc.style.color = "red";
    sonuc.innerHTML = 'İdeal Kilonun Çok Üstünde (Morbid Obez) : ' + vki;
    return;
  }
}

// Reset the Function
function sifirlaVKI() {
  document.getElementById("kilo").value = "";
  document.getElementById("boy").value = "";
  document.getElementById("kilohata").innerHTML = "";
  document.getElementById("boyhata").innerHTML = "";
  document.getElementById("output").innerHTML = "";
}

let input1 = document.getElementById("boy");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    hesaplaVKI();
  }
});