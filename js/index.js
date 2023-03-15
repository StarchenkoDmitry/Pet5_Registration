const b_reg_auth = document.querySelector(".block-reg-auth");
const b_reg_container = document.querySelector(".block-reg-container");
const b_auth_container = document.querySelector(".block-auth-container");


let visReg = true;
function register(){
  if(!visReg){
    visReg = true;
    b_auth_container.style.display = "block";

    b_reg_container.classList.remove("anim-disappearance-container");
    b_auth_container.classList.remove("anim-appearance-container");

    b_reg_container.classList.add("anim-appearance-container");
    b_auth_container.classList.add("anim-disappearance-container");
  }
}
function auther(){
  if(visReg){    
    visReg = false;
    b_auth_container.style.display = "block";

    b_reg_container.classList.remove("anim-appearance-container");
    b_auth_container.classList.remove("anim-disappearance-container");

    b_reg_container.classList.add("anim-disappearance-container");
    b_auth_container.classList.add("anim-appearance-container");
  }
}


let isOpenRegAuth = true;
function closeRegAuth(){
  if(isOpenRegAuth){
    isOpenRegAuth = !isOpenRegAuth;
    b_reg_auth.classList.add("close-RA");
    b_reg_auth.classList.remove("open-RA");
  }
}
function openRegAuth(){
  if(!isOpenRegAuth){    
    isOpenRegAuth = !isOpenRegAuth;
    b_reg_auth.classList.remove("close-RA");
    b_reg_auth.classList.add("open-RA");
  }
}