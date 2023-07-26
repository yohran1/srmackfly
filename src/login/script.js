const moon = document.getElementsByClassName('icon-moon')[0]

moon.addEventListener('click', ()=>{
    const form = document.getElementById('form')

    if(moon.classList.contains('fa-moon')){
        moon.classList.remove('fa-moon')
        moon.classList.add('fa-sun')

        form.classList.add('dark')
    }else{
        moon.classList.add('fa-moon')
        moon.classList.remove('fa-sun')
        form.classList.remove('dark')
    }    
})
