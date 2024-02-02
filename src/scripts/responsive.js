const sidebar = document.querySelector(".sidebar"); 
const headerNavigation = document.querySelector(".header__navigation"); 

sidebar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  headerNavigation.classList.toggle("active"); 
});