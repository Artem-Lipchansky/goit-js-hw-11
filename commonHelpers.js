import{S as m}from"./assets/vendor-870f0eb5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(a){const n=document.querySelector(".gallery");n.innerHTML="",a.forEach(t=>{const s=document.createElement("div");s.classList.add("image-card"),t.webformatURL;const e=t.largeImageURL;t.tags;const r=t.likes,o=t.views,d=t.comments,u=t.downloads,c=document.createElement("img");c.classList.add("img"),c.src=t.webformatURL,c.alt=t.tags,c.style.width="100%";const l=document.createElement("div");l.classList.add("image-info"),l.innerHTML=`
    <p class="info-item">Likes:<br>${r}</p>
    <p class="info-item">Views:<br>${o}</p>
    <p class="info-item">Comments:<br>${d}</p>
    <p class="info-item">Downloads:<br>${u}</p>
  `;const i=document.createElement("a");i.href=e,i.classList.add("gallery-item"),i.style.textDecoration="none",i.appendChild(c),i.appendChild(l),s.appendChild(i),n.appendChild(s)}),y()}function y(){new m(".gallery-item").refresh()}async function p(){const n=document.querySelector(".searchInput").value.trim(),t=document.querySelector(".loader"),s=document.querySelector(".gallery");if(n==="")return iziToast.show({message:"Please enter a keyword",backgroundColor:"yellow"}),Promise.reject("Empty query");const r=`https://pixabay.com/api/?key=42546986-414d01ac2526fb250e7f0e208&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return t.style.display="inline-block",s.innerHTML="",fetch(r).then(o=>{if(t.style.display="none",!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return o.json()}).then(o=>{o.hits.length===0?iziToast.error({color:"#fafafb",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!"}):f(o.hits)}).catch(o=>{t.style.display="none",iziToast.error({title:"Error!",message:`An error occurred while fetching data: ${o.message}. Please try again later.`})})}const h=document.querySelector(".searchForm");h.addEventListener("submit",function(a){a.preventDefault(),p()});
//# sourceMappingURL=commonHelpers.js.map