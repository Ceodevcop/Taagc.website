// Select sidebar and main content
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");

// Toggle sidebar open/close
window.toggleSidebar = () => {
  if(sidebar.classList.contains("closed")){
    sidebar.classList.remove("closed");
    mainContent.classList.remove("full");
  } else {
    sidebar.classList.add("closed");
    mainContent.classList.add("full");
  }
};

// Close sidebar automatically on mobile
window.addEventListener("resize", () => {
  if(window.innerWidth < 768){
    sidebar.classList.add("closed");
    mainContent.classList.add("full");
  } else {
    sidebar.classList.remove("closed");
    mainContent.classList.remove("full");
  }
});

// Initialize sidebar state on page load
if(window.innerWidth < 768){
  sidebar.classList.add("closed");
  mainContent.classList.add("full");
} else {
  sidebar.classList.remove("closed");
  mainContent.classList.remove("full");
}
