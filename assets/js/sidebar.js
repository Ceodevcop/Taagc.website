const sidebar = document.getElementById("sidebar");
const main = document.getElementById("mainContent");

window.toggleSidebar = () => {
  sidebar.classList.toggle("closed");
  main.classList.toggle("full");
};
