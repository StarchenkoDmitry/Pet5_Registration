

// setTimeout(()=>{
//     const e = document.querySelector(".block-reg");
//     e.style = "display: block;"
// },100);


setTimeout(ani,2000);

function ani(){
    console.log("Rsf");
    // document.getElementById('img').className ='classname';
    const el = document.querySelector(".block-reg");
    // el.classList.remove("block-reg");
    el.classList.add("back-anim");
}