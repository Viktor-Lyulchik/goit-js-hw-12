import{a as m,S as M,i as s}from"./assets/vendor-CocXUmuy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const P="50537281-d9f964856e12bb960f966723f";m.defaults.baseURL="https://pixabay.com/api/";async function g(o,t){return await m.get("",{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t}})}let f;const h=document.querySelector(".gallery"),b=document.querySelector(".loader"),L=document.querySelector(".load-more");function v(o){const t=o.map(({webformatURL:a,largeImageURL:u,tags:e,likes:r,views:i,comments:E,downloads:S})=>`<li class="gallery-item">
    <a class="gallery-link" href="${u}">
      <img
        class="gallery-image"
        src="${a}"
        alt="${e}"
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
  </li>`).join("");h.insertAdjacentHTML("beforeend",t),q()}function q(){f?f.refresh():f=new M(".gallery a",{captions:!0,captionPosition:"bottom",captionDelay:250,captionsData:"alt"})}function p(){h.innerHTML="",q()}function w(){b.style.display="block"}function d(){b.style.display="none"}function $(){L.style.display="block"}function n(){L.style.display="none"}function x(){const o=document.querySelector(".gallery .gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}const y=document.querySelector(".form"),A=document.querySelector(".load-more");let l=1,B=0,c="";s.settings({position:"topRight"});y.addEventListener("submit",o=>{if(o.preventDefault(),c=o.currentTarget.elements["search-text"].value.trim(),p(),w(),c===""){o.currentTarget.elements["search-text"].value="",s.error({title:"Error",message:"Your query is empty, enter the query text in search field!"}),d(),n();return}g(c,l).then(t=>{const a=t.data.hits;B=Math.ceil(t.data.totalHits/15),a.length>0?(v(a),l++,$()):(p(),n(),s.error({title:"Error",message:"Sorry, there are no images matching your search query.Please try again!"}))}).catch(()=>{n(),s.error({title:"Error",message:"Error loading images from the server!"})}).finally(()=>d()),y.reset()});A.addEventListener("click",o=>{if(!c){d();return}if(l>B)return n(),s.info({message:"We're sorry, but you've reached the end of search results."});w(),g(c,l).then(t=>{const a=t.data.hits;a.length>0&&(v(a),x(),l++)}).catch(()=>{n(),s.error({title:"Error",message:"Error loading images from the server!"})}).finally(()=>d())});
//# sourceMappingURL=index.js.map
