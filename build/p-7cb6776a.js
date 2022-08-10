function t(t){return"function"==typeof t}function s(t){const s=t((t=>{Error.call(t),t.stack=(new Error).stack}));return s.prototype=Object.create(Error.prototype),s.prototype.constructor=s,s}const r=s((t=>function(s){t(this),this.message=s?`${s.length} errors occurred during unsubscription:\n${s.map(((t,s)=>`${s+1}) ${t.toString()}`)).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=s}));function i(t,s){if(t){const r=t.indexOf(s);0<=r&&t.splice(r,1)}}class n{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let s;if(!this.closed){this.closed=!0;const{_parentage:i}=this;if(i)if(this._parentage=null,Array.isArray(i))for(const t of i)t.remove(this);else i.remove(this);const{initialTeardown:n}=this;if(t(n))try{n()}catch(t){s=t instanceof r?t.errors:[t]}const{_finalizers:e}=this;if(e){this._finalizers=null;for(const t of e)try{c(t)}catch(t){s=null!=s?s:[],t instanceof r?s=[...s,...t.errors]:s.push(t)}}if(s)throw new r(s)}}add(t){var s;if(t&&t!==this)if(this.closed)c(t);else{if(t instanceof n){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(s=this._finalizers)&&void 0!==s?s:[]).push(t)}}_hasParent(t){const{_parentage:s}=this;return s===t||Array.isArray(s)&&s.includes(t)}_addParent(t){const{_parentage:s}=this;this._parentage=Array.isArray(s)?(s.push(t),s):s?[s,t]:t}_removeParent(t){const{_parentage:s}=this;s===t?this._parentage=null:Array.isArray(s)&&i(s,t)}remove(t){const{_finalizers:s}=this;s&&i(s,t),t instanceof n&&t._removeParent(this)}}n.EMPTY=(()=>{const t=new n;return t.closed=!0,t})();const e=n.EMPTY;function o(s){return s instanceof n||s&&"closed"in s&&t(s.remove)&&t(s.add)&&t(s.unsubscribe)}function c(s){t(s)?s():s.unsubscribe()}const h={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},u={setTimeout(t,s,...r){const{delegate:i}=u;return(null==i?void 0:i.setTimeout)?i.setTimeout(t,s,...r):setTimeout(t,s,...r)},clearTimeout(t){const{delegate:s}=u;return((null==s?void 0:s.clearTimeout)||clearTimeout)(t)},delegate:void 0};function l(t){u.setTimeout((()=>{const{onUnhandledError:s}=h;if(!s)throw t;s(t)}))}function a(){}const f=d("C",void 0,void 0);function d(t,s,r){return{kind:t,value:s,error:r}}function v(t){t()}class b extends n{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,o(t)&&t.add(this)):this.destination=E}static create(t,s,r){return new m(t,s,r)}next(t){this.isStopped?x(function(t){return d("N",t,void 0)}(t),this):this._next(t)}error(t){this.isStopped?x(d("E",void 0,t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?x(f,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const p=Function.prototype.bind;function w(t,s){return p.call(t,s)}class y{constructor(t){this.partialObserver=t}next(t){const{partialObserver:s}=this;if(s.next)try{s.next(t)}catch(t){_(t)}}error(t){const{partialObserver:s}=this;if(s.error)try{s.error(t)}catch(t){_(t)}else _(t)}complete(){const{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(t){_(t)}}}class m extends b{constructor(s,r,i){let n;if(super(),t(s)||!s)n={next:null!=s?s:void 0,error:null!=r?r:void 0,complete:null!=i?i:void 0};else{let t;this&&h.useDeprecatedNextContext?(t=Object.create(s),t.unsubscribe=()=>this.unsubscribe(),n={next:s.next&&w(s.next,t),error:s.error&&w(s.error,t),complete:s.complete&&w(s.complete,t)}):n=s}this.destination=new y(n)}}function _(t){l(t)}function x(t,s){const{onStoppedNotification:r}=h;r&&u.setTimeout((()=>r(t,s)))}const E={closed:!0,next:a,error:function(t){throw t},complete:a},S="function"==typeof Symbol&&Symbol.observable||"@@observable";function g(t){return t}class O{constructor(t){t&&(this._subscribe=t)}lift(t){const s=new O;return s.source=this,s.operator=t,s}subscribe(s,r,i){const n=(e=s)&&e instanceof b||function(s){return s&&t(s.next)&&t(s.error)&&t(s.complete)}(e)&&o(e)?s:new m(s,r,i);var e;return v((()=>{const{operator:t,source:s}=this;n.add(t?t.call(n,s):s?this._subscribe(n):this._trySubscribe(n))})),n}_trySubscribe(t){try{return this._subscribe(t)}catch(s){t.error(s)}}forEach(t,s){return new(s=P(s))(((s,r)=>{const i=new m({next:s=>{try{t(s)}catch(t){r(t),i.unsubscribe()}},error:r,complete:s});this.subscribe(i)}))}_subscribe(t){var s;return null===(s=this.source)||void 0===s?void 0:s.subscribe(t)}[S](){return this}pipe(...t){return(0===(s=t).length?g:1===s.length?s[0]:function(t){return s.reduce(((t,s)=>s(t)),t)})(this);var s}toPromise(t){return new(t=P(t))(((t,s)=>{let r;this.subscribe((t=>r=t),(t=>s(t)),(()=>t(r)))}))}}function P(t){var s;return null!==(s=null!=t?t:h.Promise)&&void 0!==s?s:Promise}O.create=t=>new O(t);const A=s((t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}));class T extends O{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){const s=new j(this,this);return s.operator=t,s}_throwIfClosed(){if(this.closed)throw new A}next(t){v((()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const s of this.currentObservers)s.next(t)}}))}error(t){v((()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;const{observers:s}=this;for(;s.length;)s.shift().error(t)}}))}complete(){v((()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:t}=this;for(;t.length;)t.shift().complete()}}))}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){const{hasError:s,isStopped:r,observers:o}=this;return s||r?e:(this.currentObservers=null,o.push(t),new n((()=>{this.currentObservers=null,i(o,t)})))}_checkFinalizedStatuses(t){const{hasError:s,thrownError:r,isStopped:i}=this;s?t.error(r):i&&t.complete()}asObservable(){const t=new O;return t.source=this,t}}T.create=(t,s)=>new j(t,s);class j extends T{constructor(t,s){super(),this.destination=t,this.source=s}next(t){var s,r;null===(r=null===(s=this.destination)||void 0===s?void 0:s.next)||void 0===r||r.call(s,t)}error(t){var s,r;null===(r=null===(s=this.destination)||void 0===s?void 0:s.error)||void 0===r||r.call(s,t)}complete(){var t,s;null===(s=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===s||s.call(t)}_subscribe(t){var s,r;return null!==(r=null===(s=this.source)||void 0===s?void 0:s.subscribe(t))&&void 0!==r?r:e}}export{O,m as S,g as a,T as b,b as c,n as d,i as e,s as f,t as i,a as n,S as o,l as r}