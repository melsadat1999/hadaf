(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"668k":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("fXoL"),a=n("ofXK");function r(t,e){1&t&&(i.Mb(0,"div"),i.Mb(1,"div",2),i.Kb(2,"div",3),i.Kb(3,"div",3),i.Kb(4,"div",3),i.Kb(5,"div",4),i.Kb(6,"div",4),i.Kb(7,"div",4),i.Mb(8,"span"),i.gc(9,"Loading"),i.Lb(),i.Lb(),i.Lb())}function o(t,e){1&t&&(i.Mb(0,"div"),i.Mb(1,"div",5),i.gc(2,"Loading..."),i.Lb(),i.Lb())}let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["loader"]],inputs:{type:"type"},decls:3,vars:3,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"wrapper"],[1,"circle"],[1,"shadow"],[1,"loader"]],template:function(t,e){1&t&&(i.Mb(0,"div",0),i.fc(1,r,10,0,"div",1),i.fc(2,o,3,0,"div",1),i.Lb()),2&t&&(i.Zb("ngSwitch",e.type),i.zb(1),i.Zb("ngSwitchCase","loader"),i.zb(1),i.Zb("ngSwitchCase","spinner"))},directives:[a.k,a.l],styles:['.wrapper[_ngcontent-%COMP%]{width:200px;height:60px;left:50%;top:50%;transform:translate(-50%,-50%)}.circle[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{position:absolute}.circle[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;background-color:#a79343;left:15%;transform-origin:50%;-webkit-animation:circle .5s ease infinite alternate;animation:circle .5s ease infinite alternate}@-webkit-keyframes circle{0%{top:60px;height:5px;border-radius:50px 50px 25px 25px;transform:scaleX(1.7)}40%{height:20px;border-radius:50%;transform:scaleX(1)}to{top:0}}@keyframes circle{0%{top:60px;height:5px;border-radius:50px 50px 25px 25px;transform:scaleX(1.7)}40%{height:20px;border-radius:50%;transform:scaleX(1)}to{top:0}}.circle[_ngcontent-%COMP%]:nth-child(2){left:45%;-webkit-animation-delay:.2s;animation-delay:.2s}.circle[_ngcontent-%COMP%]:nth-child(3){left:auto;right:15%;-webkit-animation-delay:.3s;animation-delay:.3s}.shadow[_ngcontent-%COMP%]{width:20px;height:4px;border-radius:50%;background-color:rgba(0,0,0,.5);position:absolute;top:62px;transform-origin:50%;z-index:-1;left:15%;-webkit-filter:blur(1px);filter:blur(1px);-webkit-animation:shadow .5s ease infinite alternate;animation:shadow .5s ease infinite alternate}@-webkit-keyframes shadow{0%{transform:scaleX(1.5)}40%{transform:scaleX(1);opacity:.7}to{transform:scaleX(.2);opacity:.4}}@keyframes shadow{0%{transform:scaleX(1.5)}40%{transform:scaleX(1);opacity:.7}to{transform:scaleX(.2);opacity:.4}}.shadow[_ngcontent-%COMP%]:nth-child(4){left:45%;-webkit-animation-delay:.2s;animation-delay:.2s}.shadow[_ngcontent-%COMP%]:nth-child(5){left:auto;right:15%;-webkit-animation-delay:.3s;animation-delay:.3s}.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:75px;font-family:Lato;font-size:20px;letter-spacing:12px;color:#a79343;left:15%}.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:after, .loader[_ngcontent-%COMP%]:before{border-radius:50%}.loader[_ngcontent-%COMP%]{color:#fff;font-size:11px;text-indent:-99999em;margin:55px auto;position:relative;width:10em;height:10em;box-shadow:inset 0 0 0 1em;transform:translateZ(0)}.loader[_ngcontent-%COMP%]:after, .loader[_ngcontent-%COMP%]:before{position:absolute;content:""}.loader[_ngcontent-%COMP%]:before{border-radius:10.2em 0 0 10.2em;left:-.1em;transform-origin:5.1em 5.1em;-webkit-animation:load2 2s ease 1.5s infinite;animation:load2 2s ease 1.5s infinite}.loader[_ngcontent-%COMP%]:after, .loader[_ngcontent-%COMP%]:before{width:5.2em;height:10.2em;background:#0dc5c1;top:-.1em}.loader[_ngcontent-%COMP%]:after{border-radius:0 10.2em 10.2em 0;left:4.9em;transform-origin:.1em 5.1em;-webkit-animation:load2 2s ease infinite;animation:load2 2s ease infinite}@-webkit-keyframes load2{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load2{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}']}),t})()},Tdnt:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("tk/3"),a=n("lNwX"),r=n("fXoL");let o=(()=>{class t{constructor(t){this.http=t}get(t,e=new i.d){return this.http.get(`${a.a.apiUrl}${t}`,{params:e})}post(t,e={}){return this.http.post(`${a.a.apiUrl}${t}`,e)}delete(t,e={}){return this.http.delete(`${a.a.apiUrl}${t}`,e)}update(t,e={}){return this.http.put(`${a.a.apiUrl}${t}`,e)}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(i.b))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},lNwX:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));let i=(()=>{class t{}return t.apiUrl="https://gorest.co.in/public-api",t.users="/users",t.posts="/posts",t})()},lbyg:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));class i{constructor(t,e,n,i,a,r,o,s,c,d){this.id=t,this.dob=e,this.email=n,this.first_name=i,this.last_name=a,this.gender=r,this.phone=o,this.status=s,this.website=c,this.address=d}}},zJym:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("ofXK"),a=n("fXoL");let r=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[i.b]]}),t})()}}]);