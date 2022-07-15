const eye = document.querySelector('#eye');
const pass = document.querySelector('#pass');
const button = document.querySelector(".buttonRegister");
const check = document.querySelector('#check');
const searchdrop = document.querySelector('.searchdrop');
const search = document.querySelector('.class');
const redimg = document.querySelector('.redimg');
const whiteimg = document.querySelector('.whiteimg');
const menu = document.querySelector(".burger__menu");
const closeX = document.querySelector(".close");
const burger = document.querySelector(".burger")
document.body.addEventListener('click', () => {
    searchdrop.classList.remove('borderSolidOrange')
    redimg.classList.add('displayNone')
    whiteimg.classList.add('displayBlock')
    searchdrop.classList.add('borderTransparent')
    search.placeholder = 'Поиск'
    return false;

})

burger.addEventListener('click',()=>{
    menu.classList.add('displayBlock')
    setTimeout(()=>{
        menu.classList.add('Right0')
        
    },100)
})

closeX.addEventListener('click',()=>{
    menu.classList.remove('Right0')
    setTimeout(()=>{
       menu.classList.remove('displayBlock') 
    },500)
})

check.addEventListener('click',()=>{
    if(check.value === 'on'){
        button.classList.add('opacAndPointer')
        check.value = 'off';
    }
    else{
        button.classList.remove('opacAndPointer')
        check.value = 'on'
    }
})


eye.addEventListener('click',()=>{
    if(pass.type === 'text'){
        pass.type = 'password';
    }
    else{
        pass.type = 'text';
    }
})
searchdrop.onclick = () => {
    setTimeout(() => {
        searchdrop.classList.remove('borderTransparent')
        searchdrop.classList.add('borderSolidOrange')
        redimg.classList.remove('displayNonedisplayBlock')
        whiteimg.classList.remove('displayBlock')
        search.placeholder = 'Введите название'
}, 100);
}