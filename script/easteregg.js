let gameLink = document.getElementById('aGame');
let image = document.getElementById('imgRichard');
let counter = 0;

image.addEventListener('click', ()=>{
    counter += 1;
    if(counter == 15){
        gameLink.style.display = 'block';
    }
})

