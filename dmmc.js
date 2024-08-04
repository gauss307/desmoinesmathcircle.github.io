const box1 = document.querySelector(".body3-box1");

box1.addEventListener("mouseenter", () => {
    box1.style.opacity = "0.5";
});

box1.addEventListener("mouseleave", () => {
    box1.style.opacity = "1";
});

const box2 = document.querySelector(".body3-box2");

box2.addEventListener("mouseenter", () => {
    box2.style.opacity = "0.5";
});

box2.addEventListener("mouseleave", () => {
    box2.style.opacity = "1";
});

const box3 = document.querySelector(".body3-box3");

box3.addEventListener("mouseenter", () => {
    box3.style.opacity = "0.5";
});

box3.addEventListener("mouseleave", () => {
    box3.style.opacity = "1";
});

/*promysInterviews*/
function inter(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("inter");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " w3-red";
  }