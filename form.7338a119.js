parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oVPx":[function(require,module,exports) {
const e=document.querySelector(".js-backdrop-form"),t=document.querySelector(".button-arrow--white"),o=document.querySelector(".form-modal__btn"),n=document.querySelector(".btn-header__container--display"),r=document.querySelector(".form-buy"),c=document.querySelector("#user-name"),a=document.querySelector("#user-phone"),u=document.querySelector("#user-email"),d=document.querySelector("#goods"),l=document.querySelector("#user-time"),s=document.querySelector("#user-time-hour"),i=document.querySelector("#coments"),m=document.querySelector(".form-btn-submit");function v(){e.classList.remove("is-hidden"),window.addEventListener("keydown",y),document.body.classList.add("no-scroll")}function y(e){"Escape"===e.code&&S()}function S(){e.classList.add("is-hidden"),window.removeEventListener("keydown",y),document.body.classList.remove("no-scroll")}function g(e){e.target===e.currentTarget&&S()}r.addEventListener("input",q),n.addEventListener("click",v),t.addEventListener("click",v),o.addEventListener("click",S),e.addEventListener("click",g),m.addEventListener("click",b);const f={};function q(e){console.log(e.target.name),console.log(e.target.value),f[e.target.name]=e.target.value,localStorage.setItem("data",JSON.stringify(f))}function L(){const e=localStorage.getItem("data"),t=JSON.parse(e);t&&(c.value=t.name,a.value=t.telephone,u.value=t.email,d.value=t.ice,l.value=t.day,s.value=t.hours,i.value=t.message)}function b(e){e.preventDefault(),console.log(e.currentTarget),r.reset(),localStorage.removeItem("data")}L();
},{}]},{},["oVPx"], null)
//# sourceMappingURL=/team-project/form.7338a119.js.map