const btn = document.querySelector('.btn')

let ripple;

btn.addEventListener('mouseenter', (e) =>{
    const left = e.clientX - e.target.getBoundingClientReact().left;
    const top = e.clientY - e.target.getBoundingClientReact().top;

    ripple = document.createElement('div')
    ripple.classList.add("ripple")
    ripple.style.left = `${left}px`
    ripple.style.top =`${top}px`
    btn.prepend(ripple);

})