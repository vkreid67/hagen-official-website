const loader = document.getElementById("loader");
window.addEventListener("load", () => setTimeout(() => {
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 650);
}, 500));

const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: .12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const embers = document.querySelector(".embers");
for(let i=0;i<55;i++){
  const e=document.createElement("i");
  e.className="ember";
  e.style.left=Math.random()*100+"%";
  e.style.animationDuration=(4+Math.random()*7)+"s";
  e.style.animationDelay=(-Math.random()*8)+"s";
  e.style.opacity=(.15+Math.random()*.65);
  embers.appendChild(e);
}

function fakePlay(button){
  document.querySelectorAll(".track button").forEach(b => b.textContent="▶");
  button.textContent="❚❚";
  const title = button.parentElement.querySelector("strong").textContent;
  toast("Demo player selected: " + title + "  |  Add your real audio URL in script.js");
}
function demoLink(event){
  event.preventDefault();
  toast("Replace this placeholder with your real link.");
}
function sendMessage(event){
  event.preventDefault();
  const form=event.target;
  const name=form.name.value.trim();
  const email=form.email.value.trim();
  const message=form.message.value.trim();
  const subject=encodeURIComponent("Hagen website inquiry from "+name);
  const body=encodeURIComponent("Name: "+name+"\nEmail: "+email+"\n\n"+message);
  window.location.href=`mailto:booking@hagenband.com?subject=${subject}&body=${body}`;
}
function toast(message){
  const t=document.getElementById("toast");
  t.textContent=message;
  t.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>t.classList.remove("show"),3000);
}
document.getElementById("year").textContent=new Date().getFullYear();
