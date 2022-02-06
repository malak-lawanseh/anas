document.addEventListener("DOMContentLoaded",()=>{
let content =document.querySelector('.content')
document.querySelector('#about').onclick=function(){
    content.innerHTML="<div id='aboutme'><img src='img/anas.jpg' ><div id='word'><h1>About Me</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nihil.</p></div></div>"   
}
document.querySelector('#home').onclick=function(){
    content.innerHTML="<div class='content'><div class='hero'><h1 >Anas Lawanseh</h1><br><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt molestias, quos modi iure sapiente fugit nam animi fugiat vero maiores.</p></div><img src='img/undraw_Teaching_re_g7e3.png' class='animation'></div></div>"
}
document.querySelector('#skill').onclick=function(){
    content.innerHTML="<div class='skillss'><div class='skills'><h1 >Skills</h1><br><ul><li>Lorem, ipsum.</li><li>Lorem, ipsum.</li><li>Lorem, ipsum.</li><li>Lorem, ipsum.</li></ul></div><img src='img/undraw_Personal_goals_re_iow7.png' class='animation' ></div></div>"
}
document.querySelector('#Project').onclick=function(){
    content.innerHTML="<div class='all_cont_in_proj'> <div id='aboutme'> <img src='img/anas.jpg'> <div id='word'> <h1>About Me</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nihil.</p> </div> </div> <div class='content'> <div class='hero'> <h1>Anas Lawanseh</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt molestias, quos modi iure sapiente fugit nam animi fugiat vero maiores.</p> </div> <img src='img/undraw_Teaching_re_g7e3.png'> </div> <div class='all_cont_in_proj'> <div id='aboutme'> <img src='img/anas.jpg'> <div id='word'> <h1>About Me</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nihil.</p> </div> </div> <div class='content'> <div class='hero'> <h1>Anas Lawanseh</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt molestias, quos modi iure sapiente fugit nam animi fugiat vero maiores.</p> </div> <img src='img/undraw_Teaching_re_g7e3.png'> </div> </div> <div class='all_cont_in_proj'> <div id='aboutme'> <img src='img/anas.jpg' style='margen-top=10px'> <div id='word'> <h1>About Me</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nihil.</p> </div> </div> </div></div> "
}



})
let ul=document.querySelector('.list')
function myFunction(x) {
    if (x.matches) { // If media query matches
      document.querySelector('.list').innerHTML = "<i class='fas fa-bars'  id ='menu'></i>";
        ul.className='meenu'
        let menu=document.querySelector('#menu')
        menu.addEventListener('onclick',()=>{
    
            document.getElementById("menu_bar").style.visibility = "visible ";
        })}
    else {
        document.querySelector('.list').innerHTML =' <li><a href="#" id="home">Home</a></li><li><a href="#" id="about">About Me</a></li><li><a href="#" id="skill">Skills</a></li><li><a href="#" id="Project">Project</a></li><a href="https://www.linkedin.com/in/anaslawansah/" target="blank" class="btn">Contact </a>'
        ul.className='list'
    }
  }
let x = window.matchMedia("(max-width: 800px)")
myFunction(x)
x.addEventListener('media',myFunction)
