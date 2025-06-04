import{a as p,S as P,i as s}from"./assets/vendor-CocXUmuy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const I="50537281-d9f964856e12bb960f966723f";p.defaults.baseURL="https://pixabay.com/api/";async function m(e,r){return(await p.get("",{params:{key:I,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r}})).data}let f;const g=document.querySelector(".gallery"),h=document.querySelector(".loader"),b=document.querySelector(".load-more");function L(e){const r=e.map(({webformatURL:c,largeImageURL:u,tags:t,likes:o,views:n,comments:M,downloads:S})=>`<li class="gallery-item">
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
          ${S}
        </p>
    </div>
  </li>`).join("");g.insertAdjacentHTML("beforeend",r),v()}function v(){f?f.refresh():f=new P(".gallery a",{captions:!0,captionPosition:"bottom",captionDelay:250,captionsData:"alt"})}function q(){g.innerHTML="",v()}function w(){h.style.display="block"}function y(){h.style.display="none"}function B(){b.style.display="block"}function l(){b.style.display="none"}function $(){const e=document.querySelector(".gallery .gallery-item");if(e){const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}const E=document.querySelector(".form"),A=document.querySelector(".load-more");let a,i=0,d="";s.settings({position:"topRight"});const x=async()=>{try{const{hits:e,totalHits:r}=await m(d,a);i=Math.ceil(r/15),e.length>0?(L(e),a<i&&B(),a++,a>i&&s.info({message:"We're sorry, but you've reached the end of search results."})):(q(),l(),s.error({title:"Error",message:"Sorry, there are no images matching your search query.Please try again!"}))}catch{l(),s.error({title:"Error",message:"Error loading images from the server!"})}finally{y(),E.reset()}},H=async()=>{try{const{hits:e,totalHits:r}=await m(d,a);i=Math.ceil(r/15),e.length>0&&(L(e),$(),a<i&&B(),a++,a>i&&s.info({message:"We're sorry, but you've reached the end of search results."}))}catch{l(),s.error({title:"Error",message:"Error loading images from the server!"})}finally{y()}};E.addEventListener("submit",e=>{if(e.preventDefault(),d=e.currentTarget.elements["search-text"].value.trim(),q(),w(),d===""){e.currentTarget.elements["search-text"].value="",s.error({title:"Error",message:"Your query is empty, enter the query text in search field!"}),y(),l();return}a=1,x()});A.addEventListener("click",e=>{l(),w(),H()});
//# sourceMappingURL=index.js.map
