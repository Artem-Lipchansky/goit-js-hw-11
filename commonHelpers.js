import{S as f}from"./assets/vendor-870f0eb5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function m(o){const s=document.querySelector(".gallery");s.innerHTML="";const n=o.map(r=>{const e=r.webformatURL,t=r.largeImageURL,a=r.tags,c=r.likes,l=r.views,u=r.comments,d=r.downloads;return`
      <div class="image-card">
        <a href="${t}" class="gallery-item" style="text-decoration: none;">
          <img src="${e}" alt="${a}" class="img" style="width: 100%;">
          <div class="image-info">
            <p class="info-item">Likes:<br>${c}</p>
            <p class="info-item">Views:<br>${l}</p>
            <p class="info-item">Comments:<br>${u}</p>
            <p class="info-item">Downloads:<br>${d}</p>
          </div>
        </a>
      </div>
    `});s.insertAdjacentHTML("beforeend",n.join("")),y()}function y(){new f(".gallery-item").refresh()}const p=document.querySelector(".searchInput"),i=document.querySelector(".loader"),g=document.querySelector(".gallery");async function h(){const o=p.value.trim();if(o==="")return iziToast.show({message:"Please enter a keyword",backgroundColor:"yellow"}),Promise.reject("Empty query");const n=`https://pixabay.com/api/?key=42546986-414d01ac2526fb250e7f0e208&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;i.style.display="inline-block",g.innerHTML="";try{const r=await fetch(n);if(i.style.display="none",!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);const e=await r.json();e.hits.length===0?iziToast.error({color:"#fafafb",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!"}):m(e.hits)}catch(r){i.style.display="none",iziToast.error({title:"Error!",message:`An error occurred while fetching data: ${r.message}. Please try again later.`})}}const b=document.querySelector(".searchForm");b.addEventListener("submit",function(o){o.preventDefault(),h()});
//# sourceMappingURL=commonHelpers.js.map
