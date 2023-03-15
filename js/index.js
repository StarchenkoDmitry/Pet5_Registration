function ani5465467547547(){
    console.log("Rsf");
    // document.getElementById('img').className ='classname';
    const el = document.querySelector(".block-reg");
    // el.classList.remove("block-reg");
    // el.classList.add("back-anim");
    el.classList.remove("anim-open");
    el.classList.add("anim-close");
}





const b_reg_auth = document.querySelector(".block-reg-auth");
const b_reg_container = document.querySelector(".block-reg-container");
const b_auth_container = document.querySelector(".block-auth-container");


setInterval(()=>{
  // che();
},2000);

function che(){
  if(visReg){
    register();
  }
  else{
    auther();
  }
}



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


function form_Reg(){
  console.dir(document.forms["reg"]["name"].length);
  console.dir(document.forms["reg"]);
  if(document.forms["reg"]["name"].length){

  }
  
}