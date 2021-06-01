var welcome = document.getElementById('hwel');
var myName = document.getElementById('hmn');
var richard = document.getElementById('hric');

welcome.addEventListener('mouseover', ()=>{
    welcome.innerHTML = 'About';
})

welcome.addEventListener('mouseleave', ()=>{
    welcome.innerHTML = 'Welcome';
})

myName.addEventListener('mouseover', ()=>{
    myName.innerHTML = 'Projects';
})

myName.addEventListener('mouseleave', ()=>{
    myName.innerHTML = 'My name is';
})

richard.addEventListener('mouseover', ()=>{
    richard.innerHTML = 'Contact';
})

richard.addEventListener('mouseleave', ()=>{
    richard.innerHTML = 'Richard';
})

//-------------- navbar------------------

jQuery(function($) {
    $(document).ready( function() {
        $('.nav').stickUp();
    });
});