import{a as m,S as M,i as s}from"./assets/vendor-CocXUmuy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const P="50537281-d9f964856e12bb960f966723f";m.defaults.baseURL="https://pixabay.com/api/";async function g(e,o){return(await m.get("",{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:o}})).data}let d;const h=document.querySelector(".gallery"),b=document.querySelector(".loader"),L=document.querySelector(".load-more");function v(e){const o=e.map(({webformatURL:l,largeImageURL:c,tags:t,likes:r,views:i,comments:E,downloads:S})=>`<li class="gallery-item">
    <a class="gallery-link" href="${c}">
      <img
        class="gallery-image"
        src="${l}"
        alt="${t}"
      />
    </a>
    <div class="image-captions">
        <p class="caption-value">
          <b class="caption-header">Likes</b>
          ${r}
        </p>
        <p class="caption-value">
          <b class="caption-header">Views</b>
          ${i}
        </p>
        <p class="caption-value">
          <b class="caption-header">Comments</b>
          ${E}
        </p>
        <p class="caption-value">
          <b class="caption-header">Downloads</b>
          ${S}
        </p>
    </div>
  </li>`).join("");h.insertAdjacentHTML("beforeend",o),q()}function q(){d?d.refresh():d=new M(".gallery a",{captions:!0,captionPosition:"bottom",captionDelay:250,captionsData:"alt"})}function w(){h.innerHTML="",q()}function B(){b.style.display="block"}function p(){b.style.display="none"}function I(){L.style.display="block"}function n(){L.style.display="none"}function $(){const e=document.querySelector(".gallery .gallery-item");if(e){const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}const f=document.querySelector(".form"),A=document.querySelector(".load-more");let a,y=0,u="";s.settings({position:"topRight"});const x=async()=>{try{const{hits:e,totalHits:o}=await g(u,a);y=Math.ceil(o/15),e.length>0?(v(e),a<y&&I(),a++):(w(),n(),s.error({title:"Error",message:"Sorry, there are no images matching your search query.Please try again!"}))}catch{n(),s.error({title:"Error",message:"Error loading images from the server!"})}finally{p()}},O=async()=>{try{const{hits:e}=await g(u,a);if(e.length>0&&(v(e),$(),a++,a>y))return n(),s.info({message:"We're sorry, but you've reached the end of search results."})}catch{n(),s.error({title:"Error",message:"Error loading images from the server!"})}finally{p()}};f.addEventListener("submit",e=>{if(e.preventDefault(),u=e.currentTarget.elements["search-text"].value.trim(),w(),B(),u===""){e.currentTarget.elements["search-text"].value="",s.error({title:"Error",message:"Your query is empty, enter the query text in search field!"}),p(),n();return}a=1,x(),f.reset()});A.addEventListener("click",e=>{B(),O()});
//# sourceMappingURL=index.js.map
