import{S as f}from"./assets/vendor-870f0eb5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p=new f(".gallery-item");function y(a){const n=document.querySelector(".gallery");n.innerHTML="",a.forEach(r=>{const s=document.createElement("div");s.classList.add("image-card"),r.webformatURL;const e=r.largeImageURL;r.tags;const t=r.likes,o=r.views,l=r.comments,m=r.downloads,c=document.createElement("img");c.classList.add("img"),c.src=r.webformatURL,c.alt=r.tags,c.style.width="100%";const d=document.createElement("div");d.classList.add("image-info"),d.innerHTML=`
      <p class="info-item">Likes:<br>${t}</p>
      <p class="info-item">Views:<br>${o}</p>
      <p class="info-item">Comments:<br>${l}</p>
      <p class="info-item">Downloads:<br>${m}</p>
    `;const i=document.createElement("a");i.href=e,i.classList.add("gallery-item"),i.style.textDecoration="none",i.appendChild(c),i.appendChild(d),s.appendChild(i),n.appendChild(s)}),h()}function h(){p.refresh()}function u(a){iziToast.error({title:"Error!",message:a})}async function g(){const n=document.querySelector(".searchInput").value.trim(),r=document.querySelector(".loader"),s=document.querySelector(".gallery");if(n==="")return u("Please enter a keyword"),Promise.reject("Empty query");const t=`https://pixabay.com/api/?key=42546986-414d01ac2526fb250e7f0e208&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;r.style.display="inline-block",s.innerHTML="";try{const o=await fetch(t);if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const l=await o.json();l.hits.length===0?u("Sorry, there are no images matching your search query. Please try again!"):y(l.hits)}catch(o){r.style.display="none",u(`An error occurred while fetching data: ${o.message}. Please try again later.`)}}const L=document.querySelector(".searchForm");L.addEventListener("submit",function(a){a.preventDefault(),g()});
//# sourceMappingURL=commonHelpers.js.map
