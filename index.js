const containerEl=document.querySelector(".container");
const leftEl = document.querySelector(".left")
const rightEl = document.querySelector(".right")


leftEl.addEventListener("mouseover", () =>{
    containerEl.classList.add("active-left")
})
leftEl.addEventListener("mouseleave", () =>{
    containerEl.classList.remove("active-left")
})
rightEl.addEventListener("mouseover", () =>{
    containerEl.classList.add("active-right")
})
rightEl.addEventListener("mouseleave", () =>{
    containerEl.classList.remove("active-right")
})
