(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+P1L":function(t,e,n){"use strict";n.r(e),n.d(e,"UsersModule",(function(){return tt}));var i=n("ofXK"),o=n("lNwX");class r{constructor(t=1){this.page=t}}var s=n("fXoL"),l=n("Tdnt"),c=n("668k"),a=n("LRne"),d=n("HDdC"),h=n("DH7j"),u=n("n6bG"),f=n("lJxs"),g=n("5+tZ"),p=n("vkgz"),b=n("pLZG"),M=n("7o/Q"),w=n("quSY");class C extends w.a{constructor(t,e){super()}schedule(t,e=0){return this}}class O extends C{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){if(this.closed)return this;this.state=t;const n=this.id,i=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(i,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(i,this.id,e),this}requestAsyncId(t,e,n=0){return setInterval(t.flush.bind(t,this),n)}recycleAsyncId(t,e,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let n=!1,i=void 0;try{this.work(t)}catch(o){n=!0,i=!!o&&o||new Error(o)}if(n)return this.unsubscribe(),i}_unsubscribe(){const t=this.id,e=this.scheduler,n=e.actions,i=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&n.splice(i,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null}}let m=(()=>{class t{constructor(e,n=t.now){this.SchedulerAction=e,this.now=n}schedule(t,e=0,n){return new this.SchedulerAction(this,t).schedule(n,e)}}return t.now=()=>Date.now(),t})();class y extends m{constructor(t,e=m.now){super(t,()=>y.delegate&&y.delegate!==this?y.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,e=0,n){return y.delegate&&y.delegate!==this?y.delegate.schedule(t,e,n):super.schedule(t,e,n)}flush(t){const{actions:e}=this;if(this.active)return void e.push(t);let n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}}const _=new y(O);class P{constructor(t,e){this.period=t,this.scheduler=e}call(t,e){return e.subscribe(new v(t,this.period,this.scheduler))}}class v extends M.a{constructor(t,e,n){super(t),this.period=e,this.scheduler=n,this.hasValue=!1,this.add(n.schedule(S,e,{subscriber:this,period:e}))}_next(t){this.lastValue=t,this.hasValue=!0}notifyNext(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.lastValue))}}function S(t){let{subscriber:e,period:n}=t;e.notifyNext(),this.schedule(t,n)}function x(t,e,n,i){const o=window&&!!window.document&&window.document.documentElement;let r=o&&e?window:n;if(t&&(r=t&&o&&"string"==typeof t?function(t,e,n){return(n?window.document:e).querySelector(t)}(t,n.nativeElement,i):t,!r))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return r}function K(t){return t&&!t.firstChange}const k={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},L={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class T{constructor(t=!0){this.vertical=t,this.propsMap=t?k:L}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function D(t){return["Window","global"].some(e=>Object.prototype.toString.call(t).includes(e))}function z(t,e){return t?e.document.documentElement:null}function H(t,e){const n=function({container:t,isWindow:e,axis:n}){const{offsetHeightKey:i,clientHeightKey:o}=E(n);return W(t,e,i,o)}(e);return e.isWindow?function(t,e,n){const{axis:i,container:o,isWindow:r}=n,{offsetHeightKey:s,clientHeightKey:l}=E(i),c=t+I(z(r,o),i,r),a=W(e.nativeElement,r,s,l);return{height:t,scrolled:c,totalToScroll:function(t,e,n){const i=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[i]+I(t,e,n)}(e.nativeElement,i,r)+a,isWindow:r}}(n,t,e):function(t,e,n){const{axis:i,container:o}=n;return{height:t,scrolled:o[i.scrollTopKey()],totalToScroll:o[i.scrollHeightKey()],isWindow:!1}}(n,0,e)}function E(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function W(t,e,n,i){if(isNaN(t[n])){const n=z(e,t);return n?n[i]:0}return t[n]}function I(t,e,n){const i=e.pageYOffsetKey(),o=e.scrollTopKey(),r=e.offsetTopKey();return isNaN(window.pageYOffset)?z(n,t)[o]:t.ownerDocument?t.ownerDocument.defaultView[i]:t[r]}function j(t,e,n){let i,o;if(t.totalToScroll<=0)return!1;const r=t.isWindow?t.scrolled:t.height+t.scrolled;return n?(i=(t.totalToScroll-r)/t.totalToScroll,o=e.down/10):(i=t.scrolled/(t.scrolled+(t.totalToScroll-r)),o=e.up/10),i<=o}class Z{constructor({totalToScroll:t}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=t}updateScrollPosition(t){return this.lastScrollPosition=t}updateTotalToScroll(t){this.lastTotalToScroll!==t&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=t)}updateScroll(t,e){this.updateScrollPosition(t),this.updateTotalToScroll(e)}updateTriggeredFlag(t,e){e?this.triggered.down=t:this.triggered.up=t}isTriggeredScroll(t,e){return e?this.triggered.down===t:this.triggered.up===t}}function N(t){const{scrollDown:e,stats:{scrolled:n}}=t;return{type:e?"[NGX_ISE] DOWN":"[NGX_ISE] UP",payload:{currentScrollPosition:n}}}let U=(()=>{class t{constructor(t,e){this.element=t,this.zone=e,this.scrolled=new s.n,this.scrolledUp=new s.n,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:t,infiniteScrollDisabled:e,infiniteScrollDistance:n}){const i=K(t),o=K(e),r=K(n),s=!o&&!this.infiniteScrollDisabled||o&&!e.currentValue||r;(i||o||r)&&(this.destroyScroller(),s&&this.setup())}setup(){"undefined"!=typeof window&&this.zone.runOutsideAngular(()=>{this.disposeScroller=function(t){const{scrollContainer:e,scrollWindow:n,element:i,fromRoot:o}=t,r=function({windowElement:t,axis:e}){return function(t,e){const n=t.isWindow||e&&!e.nativeElement?e:e.nativeElement;return Object.assign(Object.assign({},t),{container:n})}({axis:e,isWindow:D(t)},t)}({axis:new T(!t.horizontal),windowElement:x(e,n,i,o)}),s=new Z({totalToScroll:H(i,r)}),l={up:t.upDistance,down:t.downDistance};return function(t){let e=function t(e,n,i,o){return Object(u.a)(i)&&(o=i,i=void 0),o?t(e,n,i).pipe(Object(f.a)(t=>Object(h.a)(t)?o(...t):o(t))):new d.a(t=>{!function t(e,n,i,o,r){let s;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(e)){const t=e;e.addEventListener(n,i,r),s=()=>t.removeEventListener(n,i,r)}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(e)){const t=e;e.on(n,i),s=()=>t.off(n,i)}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(e)){const t=e;e.addListener(n,i),s=()=>t.removeListener(n,i)}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(let s=0,l=e.length;s<l;s++)t(e[s],n,i,o,r)}o.add(s)}(e,n,(function(e){t.next(arguments.length>1?Array.prototype.slice.call(arguments):e)}),t,i)})}(t.container,"scroll");return t.throttle&&(e=e.pipe(function(t,e=_){return n=>n.lift(new P(t,e))}(t.throttle))),e}({container:r.container,throttle:t.throttle}).pipe(Object(g.a)(()=>Object(a.a)(H(i,r))),Object(f.a)(t=>function(t,e,n){const{scrollDown:i,fire:o}=function(t,e,n){const i=function(t,e){return t<e.scrolled}(t,e);return{fire:j(e,n,i),scrollDown:i}}(t,e,n);return{scrollDown:i,fire:o,stats:e}}(s.lastScrollPosition,t,l)),Object(p.a)(({stats:t})=>s.updateScroll(t.scrolled,t.totalToScroll)),Object(b.a)(({fire:e,scrollDown:n,stats:{totalToScroll:i}})=>function(t,e,n){return!(!t||!e)||!(n||!e)}(t.alwaysCallback,e,s.isTriggeredScroll(i,n))),Object(p.a)(({scrollDown:t,stats:{totalToScroll:e}})=>{s.updateTriggeredFlag(e,t)}),Object(f.a)(N))}({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(t=>this.zone.run(()=>this.handleOnScroll(t)))})}handleOnScroll({type:t,payload:e}){switch(t){case"[NGX_ISE] DOWN":return this.scrolled.emit(e);case"[NGX_ISE] UP":return this.scrolledUp.emit(e);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(s.l),s.Jb(s.z))},t.\u0275dir=s.Eb({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[s.xb]}),t})(),A=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},providers:[],imports:[[]]}),t})();var Y=n("lbyg"),R=n("tyNb");const V=function(t){return["/user-details",t]},X=function(t){return{green:t}};let G=(()=>{class t{constructor(){this.user=new Y.a}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Db({type:t,selectors:[["user"]],inputs:{user:"user"},decls:91,vars:11,consts:[[1,"center","posts"],[1,"card",3,"routerLink","ngClass"],[1,"additional"],[1,"user-card"],[1,"level","center"],[1,"points","center"],["width","110","height","110","viewBox","0 0 250 250","xmlns","http://www.w3.org/2000/svg","role","img","aria-labelledby","title desc",1,"center"],["id","title"],["id","desc"],["id","scene"],["cx","125","cy","125","r","115"],["id","lips"],["d","M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z"],["cx","125","cy","125","r","120","fill","rgba(0,0,0,0.15)"],["stroke","none","stroke-width","0","clip-path","url(#scene)"],["x","0","y","0","width","250","height","250","fill","#b0d2e5"],["id","head"],["fill","none","stroke","#111111","stroke-width","2","d","M 68,103 83,103.5"],["d","M 67,90 67,169 78,164 89,169 100,164 112,169 125,164 138,169 150,164 161,169 172,164 183,169 183,90 Z",1,"hair"],["cx","125","cy","100","r","55",1,"skin"],["cx","102","cy","107","rx","5","ry","5","id","eye-left",1,"eyes"],["cx","148","cy","107","rx","5","ry","5","id","eye-right",1,"eyes"],["x","119","y","140","width","12","height","40",1,"skin"],["d","M 90,98 C 93,90 103,89 110,94","id","eyebrow-left",1,"line","eyebrow"],["d","M 160,98 C 157,90 147,89 140,94","id","eyebrow-right",1,"line","eyebrow"],["stroke","#111111","stroke-width","4","d","M 68,103 83,102.5"],["stroke","#111111","stroke-width","4","d","M 182,103 167,102.5"],["stroke","#050505","stroke-width","3","fill","none","d","M 119,102 C 123,99 127,99 131,102"],["fill","#050505","d","M 92,97 C 85,97 79,98 80,101 81,104 84,104 85,102"],["fill","#050505","d","M 158,97 C 165,97 171,98 170,101 169,104 166,104 165,102"],["stroke","#050505","stroke-width","3","fill","rgba(240,240,255,0.4)","d","M 119,102 C 118,111 115,119 98,117 85,115 84,108 84,104 84,97 94,96 105,97 112,98 117,98 119,102 Z"],["stroke","#050505","stroke-width","3","fill","rgba(240,240,255,0.4)","d","M 131,102 C 132,111 135,119 152,117 165,115 166,108 166,104 166,97 156,96 145,97 138,98 133,98 131,102 Z"],["d","M 60,109 C 59,39 118,40 129,40 139,40 187,43 189,99 135,98 115,67 115,67 115,67 108,90 80,109 86,101 91,92 92,87 85,99 65,108 60,109",1,"hair"],["id","mouth","fill","#d73e3e","d","M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z"],["id","smile","fill","white","d","M125,141 C 140,141 143,132 143,132 143,132 125,133 125,133 125,133 106.5,132 106.5,132 106.5,132 110,141 125,141 Z","clip-path","url(#lips)"],["id","shirt"],["fill","#8665c2","d","M 132,170 C 146,170 154,200 154,200 154,200 158,250 158,250 158,250 92,250 92,250 92,250 96,200 96,200 96,200 104,170 118,170 118,170 125,172 125,172 125,172 132,170 132,170 Z"],["id","arm-left","stroke","#8665c2","fill","none","stroke-width","14","d","M 118,178 C 94,179 66,220 65,254",1,"arm"],["id","arm-right","stroke","#8665c2","fill","none","stroke-width","14","d","M 132,178 C 156,179 184,220 185,254",1,"arm"],["fill","white","d","M 117,166 C 117,166 125,172 125,172 125,182 115,182 109,170 Z"],["fill","white","d","M 133,166 C 133,166 125,172 125,172 125,182 135,182 141,170 Z"],["cx","125","cy","188","r","4","fill","#5a487b"],["cx","125","cy","202","r","4","fill","#5a487b"],["cx","125","cy","216","r","4","fill","#5a487b"],["cx","125","cy","230","r","4","fill","#5a487b"],["cx","125","cy","244","r","4","fill","#5a487b"],["stroke","#daa37f","stroke-width","1","id","hand-left","d","M 51,270 C 46,263 60,243 63,246 65,247 66,248 61,255 72,243 76,238 79,240 82,243 72,254 69,257 72,254 82,241 86,244 89,247 75,261 73,263 77,258 84,251 86,253 89,256 70,287 59,278",1,"skin","hand"],["stroke","#daa37f","stroke-width","1","id","hand-right","d","M 199,270 C 204,263 190,243 187,246 185,247 184,248 189,255 178,243 174,238 171,240 168,243 178,254 181,257 178,254 168,241 164,244 161,247 175,261 177,263 173,258 166,251 164,253 161,256 180,287 191,278",1,"skin","hand"],[1,"more-info"],[1,"coords"],[1,"stats"],[1,"title"],[1,"fa","fa-trophy"],[1,"value"],[1,"fa","fa-gamepad"],[1,"general"],[1,"more"]],template:function(t,e){1&t&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Mb(2,"div",2),s.Mb(3,"div",3),s.Mb(4,"div",4),s.gc(5),s.Lb(),s.Mb(6,"div",5),s.gc(7," 5,312 Points "),s.Lb(),s.Xb(),s.Mb(8,"svg",6),s.Mb(9,"title",7),s.gc(10,"Teacher"),s.Lb(),s.Mb(11,"desc",8),s.gc(12,"Cartoon of a Caucasian woman smiling, and wearing black glasses and a purple shirt with white collar drawn by Alvaro Montoro."),s.Lb(),s.Mb(13,"style"),s.gc(14," .skin { fill: #eab38f; } .eyes { fill: #1f1f1f; } .hair { fill: #2f1b0d; } .line { fill: none; stroke: #2f1b0d; stroke-width: 2px; } "),s.Lb(),s.Mb(15,"defs"),s.Mb(16,"clipPath",9),s.Kb(17,"circle",10),s.Lb(),s.Mb(18,"clipPath",11),s.Kb(19,"path",12),s.Lb(),s.Lb(),s.Kb(20,"circle",13),s.Mb(21,"g",14),s.Kb(22,"rect",15),s.Mb(23,"g",16),s.Kb(24,"path",17),s.Kb(25,"path",18),s.Kb(26,"circle",19),s.Kb(27,"ellipse",20),s.Kb(28,"ellipse",21),s.Kb(29,"rect",22),s.Kb(30,"path",23),s.Kb(31,"path",24),s.Kb(32,"path",25),s.Kb(33,"path",26),s.Kb(34,"path",27),s.Kb(35,"path",28),s.Kb(36,"path",29),s.Kb(37,"path",30),s.Kb(38,"path",31),s.Kb(39,"path",32),s.Kb(40,"path",33),s.Kb(41,"path",34),s.Lb(),s.Mb(42,"g",35),s.Kb(43,"path",36),s.Kb(44,"path",37),s.Kb(45,"path",38),s.Kb(46,"path",39),s.Kb(47,"path",40),s.Kb(48,"circle",41),s.Kb(49,"circle",42),s.Kb(50,"circle",43),s.Kb(51,"circle",44),s.Kb(52,"circle",45),s.Kb(53,"path",46),s.Kb(54,"path",47),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Wb(),s.Mb(55,"div",48),s.Mb(56,"h1"),s.gc(57),s.Lb(),s.Mb(58,"div",49),s.Mb(59,"span"),s.gc(60,"Address"),s.Lb(),s.Mb(61,"span"),s.gc(62),s.Lb(),s.Lb(),s.Mb(63,"div",49),s.Mb(64,"span"),s.gc(65),s.Lb(),s.Lb(),s.Mb(66,"div",50),s.Mb(67,"div"),s.Mb(68,"div",51),s.gc(69,"like"),s.Lb(),s.Kb(70,"i",52),s.Mb(71,"div",53),s.gc(72,"2"),s.Lb(),s.Lb(),s.Mb(73,"div"),s.Mb(74,"div",51),s.gc(75,"share"),s.Lb(),s.Kb(76,"i",54),s.Mb(77,"div",53),s.gc(78,"27"),s.Lb(),s.Lb(),s.Mb(79,"div"),s.Mb(80,"div",51),s.gc(81,"view"),s.Lb(),s.Mb(82,"div",53),s.gc(83,"123"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(84,"div",55),s.Mb(85,"h1"),s.gc(86),s.Lb(),s.Mb(87,"p"),s.gc(88,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar."),s.Lb(),s.Mb(89,"span",56),s.gc(90,"Mouse over the card for more info"),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&t&&(s.zb(1),s.Zb("routerLink",s.ac(7,V,e.user.id))("ngClass",s.ac(9,X,"male"==e.user.gender)),s.zb(4),s.ic(" Level ",e.user.id," "),s.zb(52),s.hc(e.user.first_name+" "+e.user.last_name),s.zb(5),s.hc(e.user.dob),s.zb(3),s.hc(e.user.address),s.zb(21),s.hc(e.user.first_name+" "+e.user.last_name))},directives:[R.c,i.h],styles:['.center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.center.posts[_ngcontent-%COMP%]{position:relative;top:auto;left:auto;transform:none}.center[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:800px;height:250px;background-color:#fff;background:linear-gradient(#f8f8f8,#fff);box-shadow:0 8px 16px -8px rgba(0,0,0,.4);border-radius:6px;overflow:hidden;position:relative;margin:1.5rem auto}.center[_ngcontent-%COMP%]   .card.green[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{background:linear-gradient(#92bca6,#a2ccb6)}.center[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin:14px}.center[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{position:absolute;width:150px;height:100%;background:linear-gradient(#de685e,#ee786e);transition:width .4s;overflow:hidden;z-index:2}.avatar[_ngcontent-%COMP%]{width:100px;height:100px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%}.card[_ngcontent-%COMP%]:hover   .additional[_ngcontent-%COMP%]{width:100%;border-radius:0 5px 5px 0}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]{width:150px;height:100%;position:relative;float:left}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;top:10%;right:-2px;height:80%;border-left:2px solid rgba(0,0,0,.025)}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .points[_ngcontent-%COMP%]{top:15%;color:#fff;text-transform:uppercase;font-size:.75em;font-weight:700;background:rgba(0,0,0,.15);padding:.125rem .75rem;border-radius:100px;white-space:nowrap}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   .points[_ngcontent-%COMP%]{top:85%}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .user-card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{top:50%}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]{width:600px;float:left;position:absolute;left:150px;height:100%}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;margin-bottom:0}.card.green[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#224c36}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .coords[_ngcontent-%COMP%]{margin:0 1rem;color:#fff;font-size:1rem}.card.green[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .coords[_ngcontent-%COMP%]{color:#325c46}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .coords[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{float:right}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{font-size:2rem;display:flex;position:absolute;bottom:1rem;left:1rem;right:1rem;top:auto;color:#fff}.card.green[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{color:#325c46}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1;text-align:center}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;text-transform:uppercase}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   div.value[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;line-height:1.5rem}.card[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   div.value.infinity[_ngcontent-%COMP%]{font-size:2.5rem}.card[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]{width:600px;height:100%;position:absolute;top:0;right:0;z-index:1;box-sizing:border-box;padding:0 1rem 1rem}.card[_ngcontent-%COMP%]   .general[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%]{position:absolute;bottom:1rem;right:1rem;font-size:.9em}']}),t})();function J(t,e){1&t&&s.Kb(0,"loader",2)}function F(t,e){1&t&&s.Kb(0,"user",5),2&t&&s.Zb("user",e.$implicit)}function q(t,e){if(1&t){const t=s.Nb();s.Mb(0,"div",3),s.Ub("scrolled",(function(){return s.cc(t),s.Yb().onScroll()})),s.fc(1,F,1,1,"user",4),s.Lb()}if(2&t){const t=s.Yb();s.Zb("infiniteScrollDistance",2)("infiniteScrollThrottle",50),s.zb(1),s.Zb("ngForOf",t.users)}}let B=(()=>{class t{constructor(t){this.http=t,this.users=[],this.page=new r,this._meta={}}ngOnInit(){this.getUsers()}getUsers(){0==this.users.length&&(this.loader=!0),this.http.get(o.a.users,{page:this.page.page}).subscribe(t=>{this.users.push(...t.result),this._meta=t._meta,this.loader=!1})}onScroll(){this._meta.totalCount!=this.users.length&&(this.page.page++,this.getUsers())}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(l.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-users"]],decls:2,vars:2,consts:[["type","loader",4,"ngIf"],["class","search-results","infiniteScroll","",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled",4,"ngIf"],["type","loader"],["infiniteScroll","",1,"search-results",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],[3,"user",4,"ngFor","ngForOf"],[3,"user"]],template:function(t,e){1&t&&(s.fc(0,J,1,0,"loader",0),s.fc(1,q,2,3,"div",1)),2&t&&(s.Zb("ngIf",e.loader),s.zb(1),s.Zb("ngIf",!e.loader))},directives:[i.j,c.a,U,i.i,G],styles:[""]}),t})();var Q=n("zJym");const $=[{path:"",component:B}];let tt=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[i.b,R.d.forChild($),Q.a,A]]}),t})()}}]);