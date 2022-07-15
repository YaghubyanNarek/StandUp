const remember = document.querySelector('#remember');
const closeX = document.querySelectorAll('.close');
const resetpass = document.querySelector('.resetpass');
const menu = document.querySelector(".burger__menu");
// const closeX = document.querySelector(".close");
const burger = document.querySelector(".burger")
const searchdrop = document.querySelector('.searchdrop');
const search = document.querySelector('.class');
const redimg = document.querySelector('.redimg')
const whiteimg = document.querySelector('.whiteimg')
const loading = document.querySelector('.onload');
const eye = document.querySelector('#eye');
const pass = document.querySelector('#pass');


eye.addEventListener('click',()=>{
    if(pass.type === 'text'){
        pass.type = 'password';
    }
    else{
        pass.type = 'text';
    }
})

document.body.addEventListener('click', () => {
    searchdrop.classList.remove('borderSolidOrange')
    redimg.classList.remove('displayBlock')
    whiteimg.classList.add('displayBlock')
    searchdrop.classList.add('borderTransparent')
    search.placeholder = 'Поиск'
    return false;



})
remember.onclick = () => {
    resetpass.classList.add('scale1')
    document.body.classList.add('overflowHid')
}
closeX[0].onclick=()=>{
    menu.classList.remove('Right0')
    setTimeout(()=>{
       menu.classList.remove('displayBlock') 
    },500)
}
closeX[1].onclick = () => {
    resetpass.classList.remove('scale1')
    document.body.classList.remove('overflowHid')
}
closeX[2].onclick = () => {
    resetpass.classList.remove('scale1')
    document.body.classList.remove('overflowHid')
}
burger.addEventListener('click',()=>{
    menu.classList.add('displayBlock')
    setTimeout(()=>{
        menu.classList.add('Right0')
        
    },100)
})
searchdrop.onclick = () => {
    setTimeout(() => {
        searchdrop.classList.remove('borderTransparent')
        searchdrop.classList.add('borderSolidOrange')
        redimg.classList.remove('displayNone')
        redimg.classList.add('displayBlock')
        whiteimg.classList.remove('displayBlock')
        whiteimg.classList.add('displayNone')
        search.placeholder = 'Введите название'
    }, 100);
}