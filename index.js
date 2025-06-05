import{a as p,S as I,i as a}from"./assets/vendor-CocXUmuy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const $="50537281-d9f964856e12bb960f966723f";p.defaults.baseURL="https://pixabay.com/api/";async function g(e,r){return(await p.get("",{params:{key:$,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r}})).data}let y;const h=document.querySelector(".gallery"),b=document.querySelector(".loader"),L=document.querySelector(".load-more");function v(e){const r=e.map(({webformatURL:c,largeImageURL:u,tags:t,likes:o,views:n,comments:M,downloads:P})=>`<li class="gallery-item">
    <a class="gallery-link" href="${u}">
      <img
        class="gallery-image"
        src="${c}"
        alt="${t}"
      />
    </a>
    <div class="image-captions">
        <p class="caption-value">
          <b class="caption-header">Likes</b>
          ${o}
        </p>
        <p class="caption-value">
          <b class="caption-header">Views</b>
          ${n}
        </p>
        <p class="caption-value">
          <b class="caption-header">Comments</b>
          ${M}
        </p>
        <p class="caption-value">
          <b class="caption-header">Downloads</b>
          ${P}
        </p>
    </div>
  </li>`).join("");h.insertAdjacentHTML("beforeend",r),q()}function q(){y?y.refresh():y=new I(".gallery a",{captions:!0,captionPosition:"bottom",captionDelay:250,captionsData:"alt"})}function f(){h.innerHTML="",q()}function w(){b.style.display="block"}function m(){b.style.display="none"}function E(){L.style.display="block"}function s(){L.style.display="none"}function A(){const e=document.querySelector(".gallery .gallery-item");if(e){const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}const S=document.querySelector(".form"),x=document.querySelector(".load-more");let i=1,l=0,d="";a.settings({position:"topRight"});const H=async()=>{try{const{hits:e,totalHits:r}=await g(d,i);if(r===0){B();return}l=Math.ceil(r/15),e.length>0?(v(e),i>=l?(s(),a.info({message:"We're sorry, but you've reached the end of search results."})):E(),i++,S.reset()):(f(),s(),a.error({title:"Error",message:"Sorry, there are no images matching your search query.Please try again!"}))}catch{s(),a.error({title:"Error",message:"Error loading images from the server!"})}finally{m()}},O=async()=>{try{const{hits:e,totalHits:r}=await g(d,i);if(r===0){B();return}l=Math.ceil(r/15),e.length>0&&(v(e),A(),i>=l?(s(),a.info({message:"We're sorry, but you've reached the end of search results."})):E(),i++)}catch{s(),a.error({title:"Error",message:"Error loading images from the server!"})}finally{m()}};S.addEventListener("submit",e=>{if(e.preventDefault(),d=e.currentTarget.elements["search-text"].value.trim(),f(),w(),d===""){e.currentTarget.elements["search-text"].value="",a.error({title:"Error",message:"Your query is empty, enter the query text in search field!"}),m(),s();return}i=1,l=0,H()});x.addEventListener("click",e=>{s(),w(),O()});function B(){f(),s(),a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=index.js.map
