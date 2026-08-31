const slides=[...document.querySelectorAll(".project-slide")];
const dots=document.querySelector(".slider-dots");
let current=0;

slides.forEach((_,i)=>{
  const dot=document.createElement("button");
  dot.setAttribute("aria-label",`Show project ${i+1}`);
  dot.addEventListener("click",()=>show(i));
  dots.appendChild(dot);
});

function show(i){
  current=(i+slides.length)%slides.length;
  slides.forEach((slide,index)=>slide.classList.toggle("active",index===current));
  [...dots.children].forEach((dot,index)=>dot.classList.toggle("active",index===current));
}
document.querySelector(".next").addEventListener("click",()=>show(current+1));
document.querySelector(".prev").addEventListener("click",()=>show(current-1));
show(0);

document.querySelectorAll(".section").forEach(el=>el.classList.add("reveal"));
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")});
},{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".needs-link").forEach(link=>{
  link.addEventListener("click",e=>{
    if(link.getAttribute("href")==="#"){
      e.preventDefault();
      alert("Add your GitHub URL to this link in index.html.");
    }
  });
});
document.getElementById("year").textContent=new Date().getFullYear();
