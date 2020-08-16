const sandwich_id = document.querySelector("#sandwich-id");
const sidenav = document.querySelector("#sidenav");
const menu_about = document.querySelector("#navmenu_about");
const menu_resume = document.querySelector("#navmenu_resume");
const menu_contact = document.querySelector("#navmenu_contact");
const menu_home = document.querySelector("#navmenu_home");

window.onresize = function () {
  if (window.innerWidth >= 1201) {
    document.getElementById("sidenav").style.left = "0px";
    if (sandwich_id.classList.contains("change") == false) {
      sandwich_id.classList.add("change");
    }
  }
  if (window.innerWidth < 1201) {
    document.getElementById("sidenav").style.left = "-1000px";
    if (sandwich_id.classList.contains("change") == true) {
      sandwich_id.classList.remove("change");
    }
  }
};

function sandwich(x) {
  x.classList.toggle("change");
  if (sandwich_id.classList.contains("change")) {
    document.getElementById("sidenav").style.left = "0px";
  } else {
    document.getElementById("sidenav").style.left = "-1000px";
  }
}

if (window.innerWidth < 1201) {
  document.getElementById("sidenav").style.left = "-1000px";
  if (sandwich_id.classList.contains("change") == true) {
    sandwich_id.classList.remove("change");
  }
}

// Home
menu_home.addEventListener("mouseover", function () {
  document.querySelector(".bx-home").style.color = "aqua";
  menu_home.addEventListener("mouseout", function () {
    document.querySelector(".bx-home").style.color = "rgb(161, 159, 159)";
  });
});

menu_home.addEventListener("click", function () {
  if (window.innerWidth < 1201) {
    document.getElementById("sidenav").style.left = "-1000px";
    if (sandwich_id.classList.contains("change") == true) {
      sandwich_id.classList.remove("change");
    }
  }
});

// About
menu_about.addEventListener("mouseover", function () {
  document.querySelector(".bx-user").style.color = "aqua";
  menu_about.addEventListener("mouseout", function () {
    document.querySelector(".bx-user").style.color = "rgb(161, 159, 159)";
  });
});

menu_about.addEventListener("click", function () {
  if (window.innerWidth < 1201) {
    document.getElementById("sidenav").style.left = "-1000px";
    if (sandwich_id.classList.contains("change") == true) {
      sandwich_id.classList.remove("change");
    }
  }
});

// Resume
menu_resume.addEventListener("mouseover", function () {
  document.querySelector(".bx-file-blank").style.color = "aqua";
  menu_resume.addEventListener("mouseout", function () {
    document.querySelector(".bx-file-blank").style.color = "rgb(161, 159, 159)";
  });
});

menu_resume.addEventListener("click", function () {
  if (window.innerWidth < 1201) {
    document.getElementById("sidenav").style.left = "-1000px";
    if (sandwich_id.classList.contains("change") == true) {
      sandwich_id.classList.remove("change");
    }
  }
});

// Contact
menu_contact.addEventListener("mouseover", function () {
  document.querySelector(".bx-envelope").style.color = "aqua";
  menu_contact.addEventListener("mouseout", function () {
    document.querySelector(".bx-envelope").style.color = "rgb(161, 159, 159)";
  });
});

menu_contact.addEventListener("click", function () {
  if (window.innerWidth < 1201) {
    document.getElementById("sidenav").style.left = "-1000px";
    if (sandwich_id.classList.contains("change") == true) {
      sandwich_id.classList.remove("change");
    }
  }
});
