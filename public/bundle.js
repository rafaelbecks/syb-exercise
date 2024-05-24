!function(t){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}}const o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,{is:a,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,m=u.trustedTypes,_=m?m.emptyScript:"",g=u.reactiveElementPolyfillSupport,f=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},b=(t,e)=>!a(t,e),$={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const n=i?.call(this);r.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??b)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[f("elementProperties")]=new Map,A[f("finalized")]=new Map,g?.({ReactiveElement:A}),(u.reactiveElementVersions??=[]).push("2.0.4");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const v=globalThis,k=v.trustedTypes,w=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+x,C=`<${E}>`,P=document,H=()=>P.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,M="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,O=/>/g,N=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,z=/"/g,B=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),W=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),F=new WeakMap,J=P.createTreeWalker(P,129);function G(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const V=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=j;for(let e=0;e<s;e++){const s=t[e];let a,c,h=-1,l=0;for(;l<s.length&&(o.lastIndex=l,c=o.exec(s),null!==c);)l=o.lastIndex,o===j?"!--"===c[1]?o=T:void 0!==c[1]?o=O:void 0!==c[2]?(B.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=N):void 0!==c[3]&&(o=N):o===N?">"===c[0]?(o=r??j,h=-1):void 0===c[1]?h=-2:(h=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?N:'"'===c[3]?z:R):o===z||o===R?o=N:o===T||o===O?o=j:(o=N,r=void 0);const d=o===N&&t[e+1].startsWith("/>")?" ":"";n+=o===j?s+C:h>=0?(i.push(a),s.slice(0,h)+S+s.slice(h)+x+d):s+x+(-2===h?e:d)}return[G(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[c,h]=V(t,e);if(this.el=q.createElement(c,s),J.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=h[n++],s=i.getAttribute(t).split(x),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?K:"?"===o[1]?tt:"@"===o[1]?et:Z}),i.removeAttribute(t)}else t.startsWith(x)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(x),e=t.length-1;if(e>0){i.textContent=k?k.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],H()),J.nextNode(),a.push({type:2,index:++r});i.append(t[e],H())}}}else if(8===i.nodeType)if(i.data===E)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(x,t+1));)a.push({type:7,index:r}),t+=x.length-1}r++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===W)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=U(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??P).importNode(e,!0);J.currentNode=i;let r=J.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=J.nextNode(),n++)}return J.currentNode=P,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),U(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>I(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==L&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new q(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Y(this.S(H()),this.S(H()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=X(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=X(this,i[s+o],e,o),a===W&&(a=this._$AH[o]),n||=!U(a)||a!==this._$AH[o],a===L?t=L:t!==L&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class K extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class tt extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class et extends Z{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??L)===W)return;const s=this._$AH,i=t===L&&s!==L||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==L&&(s===L||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const it=v.litHtmlPolyfillSupport;it?.(q,Y),(v.litHtmlVersions??=[]).push("3.1.3");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
class rt extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Y(e.insertBefore(H(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.0.5");const ot=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(s,t,i)})`
  .main-area {
    background-color: #e5e5f7;
    background-color: #e5e5f7;
    background-image:  linear-gradient(30deg, #7BA29E 12%, transparent 12.5%, transparent 87%, #7BA29E 87.5%, #7BA29E), linear-gradient(150deg, #7BA29E 12%, transparent 12.5%, transparent 87%, #7BA29E 87.5%, #7BA29E), linear-gradient(30deg, #7BA29E 12%, transparent 12.5%, transparent 87%, #7BA29E 87.5%, #7BA29E), linear-gradient(150deg, #7BA29E 12%, transparent 12.5%, transparent 87%, #7BA29E 87.5%, #7BA29E), linear-gradient(60deg, #7BA29E77 25%, transparent 25.5%, transparent 75%, #7BA29E77 75%, #7BA29E77), linear-gradient(60deg, #7BA29E77 25%, transparent 25.5%, transparent 75%, #7BA29E77 75%, #7BA29E77);
    background-size: 160px 200px;
    background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;
    width: 100vw;
    height: 100vh;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    justify-content: center;
  }

  .main-area section {
    background: rgba(255,255,255,0.7);
    border-radius: 24px;
    display: flex;
    align-items: center;
    margin: 0 5px;
  }

  .main-area #history {
    width: 733px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 440px;
  }

  .main-area #playing {
    width: 400px;
    height: 440px;
    justify-content: center;
  }

  #playing {

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      border-radius: 16px;
      width: 248px;
    }

    header {
      margin: 20px 20px 0px 20px;
      text-align: center;
      width: -webkit-fill-available;
    }

    .song__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      h2 {
        font-size: 18px;
        margin: 20px 0 0 0;
        line-height: 24px;
      }

      h3 {
        font-size: 16px;
        color: #99938F;
        margin: 0;
        font-weight: 300;
      }
    }
  }

  .played {
    width: 100%;
  }

  #history header {
    margin: 20px 20px 0px 20px;
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
  }

  header button {
    width: 45px;
    height: 45px;
    background-color: #F33440;
    border-radius: 100px;
    border: 0;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    font-size: 36px;
  }

  header div {
    display: flex;
  }

  header h2 {
    font-size: 20px;
    font-weight: 500;
  }

  .list {
    width: 100%;
    max-height: 350px;
    overflow-y: auto;
  }

  .played__row-template {
    background: #fff;
    border-radius: 16px;
    display: flex;
    align-items: center;
    padding: 8px;
    margin: 5px 20px;
  }

  .played__row-template img  {
    width: 84px;
    border-radius: 16px;
  }

  .played__title__artists {
    margin: 0px 15px;
  }

  .played__title__artists h2 {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    line-height: 24px;
  }

  .played__title__artists span {
    font-size: 12px;
    font-weight: 300;
    color: #99938F;
  }

  .played__title__artists h3 {
    font-size: 14px;
    font-family: Inter;
    font-weight: 300;
    color: #99938F;
    margin: 0;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: #F33440;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

  `;var at,ct;at=function(t){!function(){function e(t){if("string"!=typeof t||!t.length)throw new Error("ScrobbleApi must be instantiated with a valid zoneId");this.zoneId=t}e.mockScrobble=function(){const t=s[Math.floor(Math.random()*s.length)];return Object.assign({},t,{channel_name:"Mock Soundtrack",created_at:(new Date).toJSON(),id:Math.random().toString(36).substr(2)})},e.prototype.fetchHistory=function(){const t="https://radio.api.soundtrackyourbrand.com/sound_zones/"+this.zoneId+"/history_tracks/latest";return fetch(t,{headers:{"X-API-Version":10}}).then((t=>t.json())).then((t=>t.sort(((t,e)=>new Date(t.created_at)-new Date(e.created_at)))))},e.prototype.subscribe=function(t){const e=this;if("function"!=typeof t)throw new Error("ScrobbleApi must be instantiated with an onScrobble function");function s(){e.socket.send("2"),e.pingTimeout=setTimeout(s,2e4)}return e.socket=new WebSocket("wss://ws.soundtrackyourbrand.com/ws/?EIO=3&transport=websocket"),this.socket.onopen=function(){console.info("[socket] connected")},this.socket.onclose=function(){console.info("[socket] disconnected")},this.socket.onmessage=function(i){let r,n=0;switch(parseInt(i.data.charAt(n++),10)){case 0:return r=JSON.parse(i.data.substr(n)),s(),void e.socket.send("40/sound_zone/"+e.zoneId+"/scrobbles");case 4:if(parseInt(i.data.charAt(n++),10),"/"===i.data.charAt(n)){const t=n;for(;n<i.data.length&&","!==i.data.charAt(++n););i.data.substring(t,n++)}n<i.data.length&&(r=JSON.parse(i.data.substr(n)),t(r[1].data),console.info("[socket]",r[1].data))}},e.socket},e.prototype.unsubscribe=function(){this.socket&&this.socket.readyState<2&&this.socket.close(),clearTimeout(this.pingTimeout)};const s=[{song_name:"You Make My Dreams",artists:[{name:"Daryl Hall & John Oates",uri:"4fHFnIMdNdCrxJwrmQ8pPj"}],colors:{primary:"#e2e1df",accent:"#272321"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/002/938/0000293852_200.jpg",duration_ms:190626,track_id:"soundtrack:track:3pk0v8IzJuWrrcBvncVWyD",uri:"spotify:track:4o6BgsqLIBViaGVbx5rbRk"},{song_name:"Scars To Your Beautiful",artists:[{name:"Alessia Cara",uri:"4cciI4QHkd1dvcCjs62uU5"}],colors:{primary:"#b9c7ca",accent:"#a03942"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/051/826/0005182655_200.jpg",duration_ms:230226,track_id:"soundtrack:track:6tmsxyCEJr220A1i6qShVb",uri:"spotify:track:42ydLwx4i5V49RXHOozJZq"},{song_name:"Waka Waka (This Time for Africa) [The Official 2010 FIFA World Cup (TM) Song]",artists:[{name:"Shakira",uri:"2yzHQzIGOeR2IvaMwY5aFI"},{name:"Freshlyground",uri:"4FyOu0JTiIXNFgMLtEHHqa"}],colors:{primary:"#ede9e1",accent:"#259957"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/008/226/0000822604_200.jpg",duration_ms:202626,track_id:"soundtrack:track:4kpEDB8T4WGkeIp6R8hfc9",uri:"spotify:track:2Cd9iWfcOpGDHLz6tVA3G4"},{song_name:"Sweet but Psycho",artists:[{name:"Ava Max",uri:"2KPlbDoOrszHsoe0C9C8du"}],colors:{primary:"#c8b1a1",accent:"#ba3d1a"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/138/013/0013801367_200.jpg",duration_ms:187436,track_id:"soundtrack:track:7t11dieIyGiyvvJytX1PHf",uri:"spotify:track:7DnAm9FOTWE3cUvso43HhI"},{song_name:"This Is What You Came For",artists:[{name:"Calvin Harris",uri:"0kW6QDJPajgPy5APKtpZtX"},{name:"Rihanna",uri:"4c2J7NUOmXPhEl3SRHimCS"}],colors:{primary:"#bbc2d0",accent:"#0e2bbb"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/053/395/0005339516_200.jpg",duration_ms:222160,track_id:"soundtrack:track:0hIbwVdtM32opIWUS036MN",uri:"spotify:track:0azC730Exh71aQlOt9Zj3y"},{song_name:"I'm Coming Out",artists:[{name:"Diana Ross",uri:"623hr1m88CE7yVAPckmaSS"}],colors:{primary:"#bababa",accent:"#121212"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/000/146/0000014687_200.jpg",duration_ms:325266,track_id:"soundtrack:track:3UerMrafbFmRDw0R1Uah2G",uri:"spotify:track:0ew27xRdxSexrWbODuLfeE"},{song_name:'Happy (From "Despicable Me 2")',artists:[{name:"Pharrell Williams",uri:"7wEoGi9yFUb7mt542MmELn"}],colors:{primary:"#9b7c66",accent:"#dbab29"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/097/375/0009737539_200.jpg",duration_ms:232720,track_id:"soundtrack:track:556IgpLbfzKioXbwUTzpAH",uri:"spotify:track:60nZcImufyMA1MKQY3dcCH"},{song_name:"Faded",artists:[{name:"Alan Walker",uri:"72N6b4O54y3w4egF2ADNAh"}],colors:{primary:"#e9dba3",accent:"#1b1c27"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/087/343/0008734377_200.jpg",duration_ms:212106,track_id:"soundtrack:track:5yRGNJh05HuxqeO8CfQ988",uri:"spotify:track:698ItKASDavgwZ3WjaWjtz"},{song_name:"New Rules",artists:[{name:"Dua Lipa",uri:"0ajDEtqfMCjz2DiigWJWoo"}],colors:{primary:"#ad959f",accent:"#130a11"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/064/764/0006476404_200.jpg",duration_ms:209320,track_id:"soundtrack:track:0WeDR3AbVeYtliL9YuqURB",uri:"spotify:track:2ekn2ttSfGqwhhate0LSR0"},{song_name:"Just the Two of Us (feat. Bill Withers)",artists:[{name:"Jr.",uri:"4bZXRPQZRsB6YGYlp8ZaJ6"},{name:"Grover Washington, Jr.",uri:"109dqwCGdSdyAopX2LOQj6"},{name:"Bill Withers",uri:"1Lx59mIUqmJqYPt3ucM26F"}],colors:{primary:"#463138",accent:"#b2485b"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/004/609/0000460982_200.jpg",duration_ms:237106,track_id:"soundtrack:track:0uiA0whoNYuGASF87Qio43",uri:"spotify:track:1ko2lVN0vKGUl9zrU0qSlT"},{song_name:"Higher Love",artists:[{name:"Kygo",uri:"19YhJTULBl968CZF8FYT5f"},{name:"Whitney Houston",uri:"3ISZIXYut3j32klI2eaBAP"}],colors:{primary:"#b6b6b5",accent:"#d30453"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/097/376/0009737601_200.jpg",duration_ms:228267,track_id:"soundtrack:track:0hfHDGybnQu6QlGJnbgfYw",uri:"spotify:track:6oJ6le65B3SEqPwMRNXWjY"},{song_name:"Starving",artists:[{name:"Hailee Steinfeld",uri:"4mVrsMDEJRmLMbEPJjhjet"},{name:"Grey",uri:"3jK5Euaa0MMLtvXxf19LFB"},{name:"Zedd",uri:"0PXi20NlXzc53jUHAC4HXJ"}],colors:{primary:"#c1a49e",accent:"#97112c"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/055/817/0005581785_200.jpg",duration_ms:181880,track_id:"soundtrack:track:44Lu1GecivaqQgvWDXkh7g",uri:"spotify:track:4Ce37cRWvM1vIGGynKcs22"},{song_name:"Harder, Better, Faster, Stronger",artists:[{name:"Daft Punk",uri:"1PQsyKzCPVuxXSrbDaGtZe"}],colors:{primary:"#cac9cc",accent:"#a4411b"},image_url:"https://artwork-cdn.7static.com/static/img/sleeveart/00/000/454/0000045472_200.jpg",duration_ms:224693,track_id:"soundtrack:track:4iFiuP9PNlAOIToTr1Rf6X",uri:"spotify:track:5W3cjX2J3tjhG8zb6u0qHn"}];t.exports?(e.default=e,t.exports=e):window.ScrobbleApi=e}()},at(ct={exports:{}},ct.exports);class ht extends rt{static properties={scrobbles:[]};static get styles(){return ot}apiInstance=null;zoneId=null;constructor(){super(),this.zoneId=location.hash||"U291bmRab25lLCwxaHM2bnI2cW9lOC9Mb2NhdGlvbiwsMW9oZXI5OTh5eW8vQWNjb3VudCwsMWd3dWtvcm1icjQv",this.apiInstance=new ScrobbleApi(this.zoneId)}connectedCallback(){super.connectedCallback(),this.getScrobblesData(this.zoneId),window.addEventListener("hashchange",(()=>{this.getScrobblesData(this.zoneId)}))}getScrobblesData(t){t=t.replace(/^[ #]+|\s+$/,""),this.apiInstance&&this.apiInstance.unsubscribe(),this.apiInstance.fetchHistory().then((t=>{this.scrobbles=t,this.apiInstance.subscribe((t=>{this.scrobbles.push(t),this.requestUpdate()}))}))}addMockedScrobble(){this.scrobbles.push(ScrobbleApi.mockScrobble()),this.requestUpdate()}renderScrobbleCard(){return this.scrobbles.slice().reverse().map((t=>D`
           <div class="played__row-template">
             <div><img class="played__cover" alt="" src="${t.image_url}"></div>
             <div class="played__title__artists">
              <h2>${t.song_name}<h2>
              <h3>${t.artists.map((t=>t.name)).join(", ")}</h3>
              <span>${new Date(t.created_at).toLocaleString()}</span>
             </div>
           </div>
        `))}renderCurrentPlaying(){const t=this.scrobbles[this.scrobbles.length-1];return D`
      <section id="playing">
        <header>
          <h2>Now Playing</h2>
        </header>
        <div class="song__info">
          <img class="played__cover" alt="" src="${t.image_url}">
          <h2>${t.song_name}</h2>
          <h3>${t.artists.map((t=>t.name)).join(", ")}</h3>
        <div>
      </section>
    `}render(){return this.scrobbles?D`
      <div class="main-area">
      ${this.renderCurrentPlaying()}
        <section id="history">
          <header>
            <h2>History</h2>
            <button
              @click=${()=>{this.addMockedScrobble()}}
            >+</button>
          </header>
          <div class="list">
            ${this.renderScrobbleCard()}
          </div>
        </section>
      </div>
    `:D`
      <div class="main-area">
        <div class="loader"></div>
      </div>`}}window.customElements.define("syb-now-playing",ht),t.NowPlaying=ht,Object.defineProperty(t,"__esModule",{value:!0})}({});
//# sourceMappingURL=bundle.js.map
