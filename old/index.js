

// setTimeout(()=>{
//     const e = document.querySelector(".block-reg");
//     e.style = "display: block;"
// },100);


// setTimeout(ani,2000);

function ani(){
    console.log("Rsf");
    // document.getElementById('img').className ='classname';
    const el = document.querySelector(".block-reg");
    // el.classList.remove("block-reg");
    // el.classList.add("back-anim");
    el.classList.remove("anim-open");
    el.classList.add("anim-close");
}


//   const f = fetch("http://ru.stackoverflow.com/",{headers:{'Access-Control-Allow-Origin': '*' }});
//   //http://127.0.0.1:5500/index.html
//   //http://ru.stackoverflow.com/
//   console.dir(f);
//   f.then(r=>{console.dir(r);});











// //http://ru.stackoverflow.com/
// //http://google.com

// //http://127.0.0.1:5500/index.html
// //http://ru.stackoverflow.com/

// const f = fetch("https://translate.google.com",{    
//   method: "GET", // *GET, POST, PUT, DELETE, etc.
//   mode: "no-cors", // no-cors, *cors, same-origin
//   cache: "no-cache", // *default, no-cache, reload, force-cache, onfly-if-cached
//   credentials: "include", // include, *same-origin, omit
//   headers: {
//     // "Content-Type": "application/json",
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//     // 'Access-Control-Allow-Origin': 'http://ru.stackoverflow.com/',
//     // "sec-fetch-dest": "document",
//     // "Content-Type": "application/json"
//   },
// //   redirect: "follow", // manual, *follow, error
// //   referrerPolicy: "no-referrer"
//   referrerPolicy: "strict-origin-when-cross-origin"
// });
// console.dir(f);
// f.then(r=>{console.dir(r);});
// f.catch(e=>{console.dir(e);});






const response = fetch("https://translate.google.com",{    
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  mode: "no-cors", // no-cors, *cors, same-origin
//   cache: "no-cache", // *default, no-cache, reload, force-cache, onfly-if-cached
  credentials: "include", // include, *same-origin, omit
  headers: {
    // "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
    // 'Access-Control-Allow-Origin': 'http://ru.stackoverflow.com/',
    // "sec-fetch-dest": "document",
    // "Content-Type": "application/json"
  },
//   redirect: "follow", // manual, *follow, error
//   referrerPolicy: "no-referrer"
// referrerPolicy: "origin-when-cross-origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    
//   referrerPolicy: "strict-origin-when-cross-origin"
});

console.dir(response);
response.then(r=>{console.dir(r);});




















  

// const xhr = new XMLHttpRequest();
// const hed ={
//     method: 'GET',
//     headers:{
//         'Access-Control-Allow-Origin': '*' 
//     }
// };
// const url2 = "http://ru.stackoverflow.com/";

// // xhr.open("GET", url2, hed);
// xhr.open("GET", url2,hed);

// xhr.onreadystatechange = tt=>{
//     console.dir(tt);
// };
// xhr.send();























let visReg = true;

function register(){
  if(!visReg){
    visReg = true;
    b_auth_container.style.display = "block";

    b_auth_container.classList.remove("anim-disappearance-container");
    b_reg_container.classList.remove("anim-appearance-container");

    b_auth_container.classList.add("anim-appearance-container");
    b_reg_container.classList.add("anim-disappearance-container");
  }
}

function auther(){
  if(visReg){
    visReg = false;

    b_auth_container.classList.remove("anim-appearance-container");
    b_reg_container.classList.remove("anim-disappearance-container");

    b_auth_container.classList.add("anim-disappearance-container");
    b_reg_container.classList.add("anim-appearance-container");
  }
}
