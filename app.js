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