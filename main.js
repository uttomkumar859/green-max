 let toggleBtn = document.querySelector('.toggle-btn');
 let navbar = document.querySelector('.nav-item');
 
toggleBtn.onclick = function (){
    navbar.classList.toggle('active');
}