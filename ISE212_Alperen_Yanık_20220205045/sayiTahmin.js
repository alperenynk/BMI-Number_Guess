// Function Used to Switch to Project 1
function vkiCalistir() {
  window.location.href = "vki.html";
}

/*
Number Guessing Game == Project 2

Random Number Chosen By The 
Computer Between 1 and 100 
*/
let pcTahmin = Math.floor(Math.random() * 100) + 1;

// Number of Rights the User Can Try Throughout the Game
let kalanHak = 10;

// Indicates How Many Allowance The User Has Left
document.getElementById("hak").innerHTML = "Kalan Hakkınız : " + kalanHak;

function sayiTahmin() {

  // User Entered Prediction
  let kullaniciTahmin = Number(document.getElementById("tahmin").value);

  // Back to Top if User Value is Entered Abnormally
  if (isNaN(kullaniciTahmin) || kullaniciTahmin < 1 || kullaniciTahmin > 100) {
      document.getElementById("tahminhata").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Geçersiz bir tahmin.";
      document.getElementById("sonuc").innerHTML = "";
      return;
  } 

  /*
  Check if User Guessed Correctly
  Alert the User, Based on the Difference 
  Between pcTahmin and kullaniciTahmin
  */
  if (kullaniciTahmin === pcTahmin) {
    document.getElementById("sonuc").innerHTML = "Tebrikler! Doğru tahmin ettiniz.";
    document.getElementById("tahminhata").innerHTML = "";
    document.getElementById("tahminButton").disabled = true;
  } else {
    let message = "Maalesef, yanlış tahmin.";
    // Reduce Your Allowance by 1 After Each Attempt
    kalanHak--;
    if (kullaniciTahmin < pcTahmin) {
        message += " Yukarı!";
    } else {
        message += " Aşağı!";
    } 
    document.getElementById("hak").innerHTML = "Kalan Hakkınız : " + kalanHak;
    document.getElementById("sonuc").innerHTML = message;
    document.getElementById("tahminhata").innerHTML = "";
  }

/*
Show the correct result if the user runs out of rights
End Game, Block Using Button
*/
  if (kalanHak === 0) {
    document.getElementById("sonuc").style.display = "none";
    document.getElementById("hak").innerHTML = "Oyunu kaybettiniz. Doğru sayı : " + pcTahmin;
    document.getElementById("tahminButton").disabled = true;
  }
}

/*
Convert the entered value to a space character
if there is an output/error, refresh the remaining
rights, change the number held by the computer, in other
words, restart/reset the program. When kalanHak === 0,
the paragraph with the "sonuc" id becomes invisible,
reset it with the function so it becomes visible again.
*/
function sifirlaTahmin() {
  document.getElementById("tahmin").value = "";
  document.getElementById("tahminhata").innerHTML = "";
  document.getElementById("sonuc").innerHTML = "";
  document.getElementById("hak").innerHTML = "Kalan Hakkınız : 10";
  document.getElementById("tahminButton").disabled = false;
  document.getElementById("sonuc").style.display = "block";
  pcTahmin = Math.floor(Math.random() * 100) + 1;
  kalanHak = 10;
}




/*
Alttaki Satırı Henüz Bitiremedim, Bu Yüzden Böyle Bırakma 
Kararı Aldım. Bilgim Arttıkça Bu Kodu Düzelteceğim.
*/
/*
When you click the Enter key, it checks
the value you entered, if it is incorrect,
the value is deleted and you can enter it again
*/
/*
let input = document.getElementById("tahmin");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sayiTahmin();
    document.getElementById("tahmin").value = "";
  }
});
*/