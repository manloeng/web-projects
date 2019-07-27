/*

// Make changes to Images on about me
document.getElementById("aboutImg1").src = "#";
document.getElementById("aboutImg2").src = "#";
document.getElementById("aboutImg3").src = "#";
*/

// Make Changes to Paragraphs
let para = document.getElementsByTagName("p");

//if ($(window).width() < 900) - require to automatically adjust length
for (let i = 0; i < para.length; i++) {
  if (para[i].innerHTML.length > 165) {
    para[i].innerHTML = para[i].innerHTML.slice(0, 165) + "...";
  }
}
