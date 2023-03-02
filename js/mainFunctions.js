const scrollUp = document.querySelector("#scroll-up");
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const hamburger = document.querySelector("#hamburger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

const btSwitch= document.querySelector("#switch");
btSwitch.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
  btSwitch.classList.toggle("active");
  
  if(document.body.classList.contains("dark")){
    localStorage.setItem("dark-mode", "true");
  } else{
    localStorage.setItem("dark-mode", "false");
  }
});

if(localStorage.getItem("dark-mode")=== "true"){
  document.body.classList.add("dark");
  btSwitch.classList.add("active");
}else{
  document.body.classList.remove("dark");
  btSwitch.classList.remove("active");
}