document.addEventListener("DOMContentLoaded",()=>{
let menuBar=document.querySelector('#menu_bar')
let content =document.querySelector('.content')

document.querySelector('.about').onclick=function(){
    content.innerHTML="<div id='aboutme'><img src='img/anas.jpg' ><div id='word'><h1>About Me</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nihil.</p></div></div>"   
    
    menuBar.style.visibility= '';

}
document.querySelector('.home').onclick=function(){
    content.innerHTML="<div class='content'><div class='hero'><h1 >Anas Lawanseh</h1><br><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt molestias, quos modi iure sapiente fugit nam animi fugiat vero maiores.</p></div><img src='img/undraw_Teaching_re_g7e3.png' class='animation'></div></div>"
    menuBar.style.visibility= '';

}
document.querySelector('.skill').onclick=function(){
    content.innerHTML="<div class='skillss'><div class='skills'><h1 >Skills</h1><br><ul><li>Lorem, ipsum.</li><li>Lorem, ipsum.</li><li>Lorem, ipsum.</li><li>Lorem, ipsum.</li></ul></div><img src='img/undraw_Personal_goals_re_iow7.png' class='animation' ></div></div>"
    menuBar.style.visibility= '';

}
document.querySelector('.Project').onclick=function(){
    content.innerHTML="<div class='all_cont_in_proj'> <div id='aboutme'> <img src='img/anas.jpg'> <div id='word'> <h1>About Me</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nihil.</p> </div> </div> <div class='content'> <img src='img/undraw_Teaching_re_g7e3.png'> <div class='hero'> <h1>Anas Lawanseh</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt molestias, quos modi iure sapiente fugit nam animi fugiat vero maiores.</p> </div> </div> <div class='all_cont_in_proj'> <div id='aboutme'> <img src='img/anas.jpg'> <div id='word'> <h1>About Me</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nihil.</p> </div> </div> <div class='content'> <img src='img/undraw_Teaching_re_g7e3.png'> <div class='hero'> <h1>Anas Lawanseh</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt molestias, quos modi iure sapiente fugit nam animi fugiat vero maiores.</p> </div> </div> </div> <div class='all_cont_in_proj'> <div id='aboutme'> <img src='img/anas.jpg' style='margen-top=10px'> <div id='word'> <h1>About Me</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nihil.</p> </div> </div> </div> </div>";
    menuBar.style.visibility= '';
    
}


document.querySelector('.list1 .about').onclick=function(){
    content.innerHTML="<div id='aboutme'><img src='img/anas.jpg' ><div id='word'><h1>About Me</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nihil.</p></div></div>"   
    
    menuBar.style.visibility= '';

}
document.querySelector('.list1 .home').onclick=function(){
    content.innerHTML="<div class='content'><div class='hero'><h1 >Anas Lawanseh</h1><br><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt molestias, quos modi iure sapiente fugit nam animi fugiat vero maiores.</p></div><img src='img/undraw_Teaching_re_g7e3.png' class='animation'></div></div>"
    menuBar.style.visibility= '';

}
document.querySelector('.list1 .skill').onclick=function(){
    content.innerHTML="<div class='skillss'><div class='skills'><h1 >Skills</h1><br><ul><li>Lorem, ipsum.</li><li>Lorem, ipsum.</li><li>Lorem, ipsum.</li><li>Lorem, ipsum.</li></ul></div><img src='img/undraw_Personal_goals_re_iow7.png' class='animation' ></div></div>"
    menuBar.style.visibility= '';

}
document.querySelector('.list1  .Project').onclick=function(){
    content.innerHTML="<div class='all_cont_in_proj'> <div id='aboutme'> <img src='img/anas.jpg'> <div id='word'> <h1>About Me</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nihil.</p> </div> </div> <div class='content'> <img src='img/undraw_Teaching_re_g7e3.png'> <div class='hero'> <h1>Anas Lawanseh</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt molestias, quos modi iure sapiente fugit nam animi fugiat vero maiores.</p> </div> </div> <div class='all_cont_in_proj'> <div id='aboutme'> <img src='img/anas.jpg'> <div id='word'> <h1>About Me</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nihil.</p> </div> </div> <div class='content'> <img src='img/undraw_Teaching_re_g7e3.png'> <div class='hero'> <h1>Anas Lawanseh</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt molestias, quos modi iure sapiente fugit nam animi fugiat vero maiores.</p> </div> </div> </div> <div class='all_cont_in_proj'> <div id='aboutme'> <img src='img/anas.jpg' style='margen-top=10px'> <div id='word'> <h1>About Me</h1> <br> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nihil.</p> </div> </div> </div> </div>";
    menuBar.style.visibility= '';
    
}


})



document.querySelector('#menu').onclick=function(){
    let menuBar=document.querySelector('#menu_bar')
        if(menuBar.style.visibility==''){
            menuBar.style.visibility= 'visible';
    }
    else if(menuBar.style.visibility=='visible'){
        menuBar.style.visibility= '';
    }
 
}

