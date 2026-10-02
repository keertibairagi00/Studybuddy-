const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
document.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{const t=document.getElementById("toast");t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}));
