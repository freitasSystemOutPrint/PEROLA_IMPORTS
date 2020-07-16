

const searchBtn=document.querySelector(".search-btn");
const searchOverlay=document.querySelector(".search-overlay");
const searchPopup=document.querySelector(".search-popup");

searchBtn.addEventListener("click",()=>{
searchOverlay.classList.add("active");
searchPopup.classList.add("active");
})


searchOverlay.addEventListener("click",(event)=>{
if(event.target == searchOverlay){
	searchOverlay.classList.remove("active");
	searchPopup.classList.remove("active");
}
})