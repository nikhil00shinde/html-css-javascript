let panels = document.querySelectorAll(".panel");

panels.forEach(panel =>{
    panel.addEventListener("click",() =>{
        removePreviousActiveClass();
        panel.classList.add("active");
    })
})

function removePreviousActiveClass()
{
    panels.forEach(panel =>{
        panel.classList.remove("active")
    })
}






// ----------------------------------------------------------------------------------







// let panels = document.querySelectorAll(".panel");

// for(let i=0;i<panels.length;i++)
// {
//     panels[i].addEventListener("click",function(e){
        // removePreviousActiveClass();
//         e.currentTarget.classList.add("active")
//     })
// }

// function removePreviousActiveClass()
// {
//      for(let i=0;i<panels.length;i++)
//        {
//          panels[i].classList.remove("active");
//        }   
// }