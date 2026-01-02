function openNav() {
  document.getElementById("mySidepanel").style.width = "330px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = 'Read more <i class="fa-solid fa-chevron-down"></i>'; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'; 
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dotss = document.getElementById("dots-2");
  var moreTextt = document.getElementById("more-2");
  var btnTextt = document.getElementById("myBtn-2");

  if (dotss.style.display === "none") {
    dotss.style.display = "inline";
    btnTextt.innerHTML = 'Read more <i class="fa-solid fa-chevron-down"></i>'; 
    moreTextt.style.display = "none";
  } else {
    dotss.style.display = "none";
    btnTextt.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'; 
    moreTextt.style.display = "inline";
  }
}

function myFunction3() {
  var dotsss = document.getElementById("dots-3");
  var moreTexttt = document.getElementById("more-3");
  var btnTexttt = document.getElementById("myBtn-3");

  if (dotsss.style.display === "none") {
    dotsss.style.display = "inline";
    btnTexttt.innerHTML = 'Read more <i class="fa-solid fa-chevron-down"></i>'; 
    moreTexttt.style.display = "none";
  } else {
    dotsss.style.display = "none";
    btnTexttt.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'; 
    moreTexttt.style.display = "inline";
  }
}