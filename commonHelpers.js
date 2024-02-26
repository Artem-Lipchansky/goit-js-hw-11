import{S as u}from"./assets/vendor-870f0eb5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(a){const i=document.querySelector(".gallery");a.forEach(t=>{const o=document.createElement("div");o.classList.add("image-card"),t.webformatURL;const e=t.largeImageURL;t.tags;const r=t.likes,s=t.views,n=t.comments,d=t.downloads,l=document.createElement("img");l.classList.add("img"),l.src=t.webformatURL,l.alt=t.tags,l.style.width="100%";const m=document.createElement("div");m.classList.add("image-info"),m.innerHTML=`
    <p class="info-item">Likes:<br>${r}</p>
    <p class="info-item">Views:<br>${s}</p>
    <p class="info-item">Comments:<br>${n}</p>
    <p class="info-item">Downloads:<br>${d}</p>
  `;const c=document.createElement("a");c.href=e,c.classList.add("gallery-item"),c.style.textDecoration="none",c.appendChild(l),c.appendChild(m),o.appendChild(c),i.appendChild(o)})}async function p(a){const t=document.querySelector(".searchInput").value.trim(),o=document.querySelector(".loader"),e=document.querySelector(".gallery");if(t==="")return iziToast.show({message:"Please enter a keyword",backgroundColor:"yellow"}),Promise.reject("Empty query");const s=`https://pixabay.com/api/?key=42546986-414d01ac2526fb250e7f0e208&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;o.style.display="inline-block",e.innerHTML="";try{const n=await fetch(s);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);const d=await n.json();d.hits.length===0?iziToast.error({color:"#fafafb",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!"}):f(d.hits)}catch(n){o.style.display="none",iziToast.error({title:"Error!",message:`An error occurred while fetching data: ${n.message}. Please try again later.`})}finally{o.style.display="none",a.refresh()}}const y=new u(".gallery-item"),h=document.querySelector(".searchForm");h.addEventListener("submit",function(a){a.preventDefault(),p(y)});
//# sourceMappingURL=commonHelpers.js.map