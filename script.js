
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    sidebar.classList.toggle('active');
    menuToggle.classList.toggle('closed');
}
function toggleLoginForm() {
    var form = document.getElementById("loginForm");
    var button = document.getElementById("loginButton");
  
    if (form.style.display === "none") {
      form.style.display = "block";
      button.style.right = "unset";
      button.style.left = "10px";
    } else {
      form.style.display = "none";
      button.style.left = "unset";
      button.style.right = "10px";
    }
  }
  
  
  