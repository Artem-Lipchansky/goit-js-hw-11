import{S as l,i as u}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();class f{constructor(){this.BASE_URL="https://pixabay.com/api/",this.API_KEY="42546986-414d01ac2526fb250e7f0e208"}getImages(o){const s=new URLSearchParams({key:this.API_KEY,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${this.BASE_URL}?${s}`;return fetch(i).then(e=>e.json())}}const h=document.querySelector(".gallery"),d=new l(".gallery a",{captionsData:"alt",captionDelay:250});function m({webformatURL:r,largeImageURL:o,tags:s,likes:i,views:e,comments:t,downloads:a}){return`      
      <li class="card">
        <a href ="${o}">
        <img class="card-img" src="${r}" alt="${s}" >
        <ul class="card-data">
          <li><h3>Likes</h3><p>${i}</p></li>
          <li><h3>Views</h3><p>${e}</p></li>
          <li><h3>Comments</h3><p>${t}</p></li>
          <li><h3>Downloads</h3><p>${a}</p></li>
        </ul>
      </li>`}function p(r){return r.map(m).join("")}function g(r){h.innerHTML=p(r),d.refresh()}const y=new f,L=document.querySelector(".search-form"),S=document.querySelector(".gallery"),b=document.querySelector(".loader");L.addEventListener("submit",P);function P(r){r.preventDefault(),S.innerHTML="",n();const o=r.target.query.value.trim();if(!o){c(new Error("Please enter a search query.")),n();return}y.getImages(o).then(s=>{const i=s.hits;if(!i.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");g(i)}).catch(s=>c(s)).finally(n),r.target.reset()}function c(r){u.error({pauseOnHover:!1,position:"topRight",message:r.message})}function n(){b.classList.toggle("hidden")}
//# sourceMappingURL=commonHelpers.js.map
