import{i as c,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(r){const i="50867086-a3d680221e2677e18377c4443",s="https://pixabay.com/api/",a=new URLSearchParams({key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return n.classList.remove("hidden"),fetch(`${s}?${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>(console.log(e),e)).finally(()=>{n.classList.add("hidden")})}const u=document.querySelector(".form"),g=document.querySelector(".gallery"),n=document.querySelector(".loader");u.addEventListener("submit",h);function h(r){r.preventDefault();const i=r.currentTarget.elements["search-text"].value.trim();console.log(i),d(i).then(s=>{s.hits.length===0&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g.innerHTML=f(s),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(s=>{console.log(s),c.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"})})}function f(r){return r.hits.map(({likes:i,views:s,comments:a,downloads:e,webformatURL:t,tags:o,largeImageURL:l})=>`
    <li class="image-card">
<a href="${l}" class="gallery-link">
    <img src="${t}" alt="${o}" class="image-icon">
</a>
  <div class="image-card-statistic">

    <div class="image-card-statistic-item">
      <h2 class="image-likes image-card-statistic-item-title">Likes</h2>
      <p class="image-card-statistic-item-number">${i}</p>
    </div>

    <div class="image-card-statistic-item">
      <h2 class="image-views image-card-statistic-item-title">Views</h2>
      <p class="image-card-statistic-item-number">${s}</p>
    </div>

    <div class="image-card-statistic-item">
      <h2 class="image-comments image-card-statistic-item-title">Comments</h2>
      <p class="image-card-statistic-item-number">${a}</p>
    </div>

    <div class="image-card-statistic-item">
      <h2 class="image-downloads image-card-statistic-item-title">Downloads</h2>
      <p class="image-card-statistic-item-number">${e}</p>
    </div>

  </div>

    </li> `).join("")}
//# sourceMappingURL=index.js.map
