(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function o(r){const i="50867086-a3d680221e2677e18377c4443",s="https://pixabay.com/api/",a=new URLSearchParams({key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>(console.log(e),e)).catch(e=>{console.error(e)})}const n=document.querySelector(".form"),l=document.querySelector(".gallery");n.addEventListener("submit",m);function m(r){r.preventDefault();const i=r.currentTarget.elements["search-text"].value.trim();console.log(i),o(i).then(s=>{l.innerHTML=d(s)}).catch(s=>{console.log(s)})}function d(r){return r.hits.map(({likes:i,views:s,comments:a,downloads:e,previewURL:t,tags:c})=>`
    <li class="image-card">

    <img src="${t}" alt="${c}" class="image-icon">

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
