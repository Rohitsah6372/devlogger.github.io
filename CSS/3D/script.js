const signupBtn = document.getElementById('signup-btn')
const signinBtn = document.getElementById('signin-btn')

const formsWrapper =  document.querySelector('forms-wrapper')



//add Event Listener
signupBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    formsWrapper.classList.add("change")
});

signinBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    formsWrapper.classList.remove("change")

})