(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{c0Z7:function(l,n,a){"use strict";a.r(n),a.d(n,"ServicesViewModuleNgFactory",(function(){return Ol}));var o=a("kZht"),e=a("JFzN"),t=a("C9Ky"),i=a("4UJ1"),u=a("SH86"),c=a("QN88"),r=a("zJ+W");class b{}var s=o.xb({encapsulation:0,styles:[[""]],data:{}});function p(l){return o.ac(0,[(l()(),o.zb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.Xb(-1,null,["services-overview works!"]))],null,null)}function d(l){return o.ac(0,[(l()(),o.zb(0,0,null,null,1,"app-services-overview",[],null,null,null,p,s)),o.yb(1,49152,null,0,b,[],null,null)],null,null)}var m=o.vb("app-services-overview",b,d,{},{},[]),L=a("8+cH"),y=a("qoTl"),g=a("mspE"),v=a("xmHW"),f=a("Sgnd"),x=a("76xf"),h=a("Xekx"),w=a("hCLc"),k=a("jL3B"),j=a("FxgA");class O{constructor(l,n){this.proximityDialogService=l,this.snackBar=n}onOpenDialog(l){this.proximityDialogService.open(A,l._elementRef.nativeElement,void 0,{originX:"start",originY:"top",overlayX:"end",overlayY:"top"}).subscribe(l=>this.snackBar.open(l?"You were sure!":"You were not sure...",void 0,{duration:2e3}))}}class A{constructor(){this.onClose=new o.o}}var N=a("ZtZA"),z=a("g6G6"),S=a("YtkY"),C=a("J+dc"),X=a("8j5Y");let Y=(()=>{class l{constructor(l){this.overlay=l}open(n,a,o,e={originX:"end",originY:"top",overlayX:"start",overlayY:"top"}){const t=this.overlay.create(Object.assign(Object.assign({},l.OVERLAY_CONFIG),{positionStrategy:this.overlay.position().flexibleConnectedTo(a).withPositions([e]),scrollStrategy:this.overlay.scrollStrategies.block()})),i=t.attach(new N.d(n));return i.instance.data=o,Object(z.a)(t.backdropClick().pipe(Object(S.a)(()=>!1)),i.instance.onClose.asObservable()).pipe(Object(C.a)(1),Object(X.a)(()=>t.dispose()))}}return l.OVERLAY_CONFIG={disposeOnNavigation:!0,maxHeight:"100vh",maxWidth:"100vw",hasBackdrop:!0},l})();var D=a("rovy"),_=a("fxvw"),M=a("F6wS"),J=a("vE5V"),U=o.xb({encapsulation:2,styles:[],data:{}});function q(l){return o.ac(0,[(l()(),o.zb(0,0,null,null,4,"section",[["fxLayoutAlign","center center"]],[[4,"padding","px"]],null,null,null,null)),o.yb(1,671744,null,0,f.b,[o.l,x.i,f.g,x.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),o.zb(2,0,null,null,2,"button",[["class","mat-focus-indicator"],["color","accent"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,a){var e=!0;return"click"===n&&(e=!1!==l.component.onOpenDialog(o.Nb(l,3))&&e),e}),h.b,h.a)),o.yb(3,180224,[["anchor",4]],0,w.b,[o.l,k.e,[2,j.a]],{color:[0,"color"]},null),(l()(),o.Xb(-1,0,[" Open my dialog "]))],(function(l,n){l(n,1,0,"center center"),l(n,3,0,"accent")}),(function(l,n){l(n,0,0,16),l(n,2,0,o.Nb(n,3).disabled||null,"NoopAnimations"===o.Nb(n,3)._animationMode)}))}var E=o.xb({encapsulation:2,styles:[],data:{}});function V(l){return o.ac(0,[(l()(),o.zb(0,0,null,null,12,"mat-card",[["class","mat-card mat-focus-indicator"]],[[2,"_mat-animation-noopable",null]],null,null,_.b,_.a)),o.yb(1,49152,null,0,M.a,[[2,j.a]],null,null),(l()(),o.zb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Xb(-1,null,["Are you sure you want to do this?"])),(l()(),o.zb(4,0,null,0,8,"section",[["fxLayoutAlign","center center"],["fxLayoutGap","12px"]],null,null,null,null,null)),o.yb(5,1720320,null,0,f.d,[o.l,o.A,J.b,x.i,f.h,x.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),o.yb(6,671744,null,0,f.b,[o.l,x.i,f.g,x.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),o.zb(7,0,null,null,2,"button",[["class","mat-focus-indicator"],["color","default"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,a){var o=!0;return"click"===n&&(o=!1!==l.component.onClose.emit(!1)&&o),o}),h.b,h.a)),o.yb(8,180224,null,0,w.b,[o.l,k.e,[2,j.a]],{color:[0,"color"]},null),(l()(),o.Xb(-1,0,[" Cancel "])),(l()(),o.zb(10,0,null,null,2,"button",[["class","mat-focus-indicator"],["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,a){var o=!0;return"click"===n&&(o=!1!==l.component.onClose.emit(!0)&&o),o}),h.b,h.a)),o.yb(11,180224,null,0,w.b,[o.l,k.e,[2,j.a]],{color:[0,"color"]},null),(l()(),o.Xb(-1,0,[" Do it "]))],(function(l,n){l(n,5,0,"12px"),l(n,6,0,"center center"),l(n,8,0,"default"),l(n,11,0,"primary")}),(function(l,n){l(n,0,0,"NoopAnimations"===o.Nb(n,1)._animationMode),l(n,7,0,o.Nb(n,8).disabled||null,"NoopAnimations"===o.Nb(n,8)._animationMode),l(n,10,0,o.Nb(n,11).disabled||null,"NoopAnimations"===o.Nb(n,11)._animationMode)}))}function G(l){return o.ac(0,[(l()(),o.zb(0,0,null,null,1,"app-proximity-dialog-a",[],null,null,null,V,E)),o.yb(1,49152,null,0,A,[],null,null)],null,null)}var B=o.vb("app-proximity-dialog-a",A,G,{},{},[]);class F{}var H=o.xb({encapsulation:0,styles:[[""]],data:{}});function T(l){return o.ac(0,[(l()(),o.zb(0,0,null,null,5,"app-demo",[["description","Opens a modal dialog near the specified HTML anchor element"],["title","Proximity Dialog"],["tsSourceUrl","projects/hammerhead-ui/src/lib/services/proximity-dialog/proximity-dialog.service.ts"]],null,null,null,L.b,L.a)),o.yb(1,49152,null,0,y.a,[],{title:[0,"title"],description:[1,"description"],tsSourceUrl:[2,"tsSourceUrl"]},null),(l()(),o.zb(2,0,null,0,3,"app-demo-example",[["class","margin-bottom-heavy"],["description","Open a dialog near its trigger button"],["tsSourceUrl","projects/hammerhead-ui-app/src/app/views/services/components/proximity-dialog/examples/proximity-dialog-example-a/proximity-dialog-example-a.component.ts"]],null,null,null,g.b,g.a)),o.yb(3,49152,null,0,v.a,[],{description:[0,"description"],tsSourceUrl:[1,"tsSourceUrl"]},null),(l()(),o.zb(4,0,null,0,1,"app-proximity-dialog-example-a",[],null,null,null,q,U)),o.yb(5,49152,null,0,O,[Y,D.b],null,null)],(function(l,n){l(n,1,0,"Proximity Dialog","Opens a modal dialog near the specified HTML anchor element","projects/hammerhead-ui/src/lib/services/proximity-dialog/proximity-dialog.service.ts"),l(n,3,0,"Open a dialog near its trigger button","projects/hammerhead-ui-app/src/app/views/services/components/proximity-dialog/examples/proximity-dialog-example-a/proximity-dialog-example-a.component.ts")}),null)}function P(l){return o.ac(0,[(l()(),o.zb(0,0,null,null,1,"app-proximity-dialog-demo",[],null,null,null,T,H)),o.yb(1,49152,null,0,F,[],null,null)],null,null)}var R=o.vb("app-proximity-dialog-demo",F,P,{},{},[]),W=a("An66"),Z=a("3kIJ"),I=a("s2U3"),Q=a("5GZx"),K=a("mcff"),$=a("pTnX"),ll=a("WYJo"),nl=a("1VvW"),al=a("aBdD"),ol=a("2ob+"),el=a("aLyt"),tl=a("CBf0"),il=a("O1jd"),ul=a("UDV5"),cl=a("VbQ3"),rl=a("8EXQ"),bl=a("EmXI"),sl=a("ydE+"),pl=a("VMkX"),dl=a("Tcl6"),ml=a("uryd"),Ll=a("h2+Y"),yl=a("wvDw"),gl=a("A7hd"),vl=a("i9Na"),fl=a("PRqq"),xl=a("MuSR"),hl=a("P0vk"),wl=a("sq1e"),kl=a("aJOL"),jl=a("8DfD"),Ol=o.wb(e.b,[],(function(l){return o.Kb([o.Lb(512,o.j,o.ab,[[8,[t.a,i.a,u.a,c.a,c.d,r.a,r.b,m,R,B]],[3,o.j],o.y]),o.Lb(4608,W.n,W.m,[o.v]),o.Lb(5120,o.b,(function(l,n){return[x.j(l,n)]}),[W.d,o.C]),o.Lb(4608,Z.q,Z.q,[]),o.Lb(4608,I.c,I.c,[]),o.Lb(4608,Q.a,Q.a,[Q.g,Q.c,o.j,Q.f,Q.d,o.s,o.A,W.d,J.b,[2,W.h]]),o.Lb(5120,Q.h,Q.i,[Q.a]),o.Lb(5120,K.c,K.d,[Q.a]),o.Lb(135680,K.e,K.e,[Q.a,o.s,[2,W.h],[2,K.b],K.c,[3,K.e],Q.c]),o.Lb(4608,$.b,$.b,[]),o.Lb(5120,ll.b,ll.c,[Q.a]),o.Lb(4608,Z.d,Z.d,[]),o.Lb(4608,Y,Y,[Q.a]),o.Lb(1073742336,nl.o,nl.o,[[2,nl.t],[2,nl.l]]),o.Lb(1073742336,W.c,W.c,[]),o.Lb(1073742336,al.n,al.n,[]),o.Lb(1073742336,x.c,x.c,[]),o.Lb(1073742336,J.a,J.a,[]),o.Lb(1073742336,f.e,f.e,[]),o.Lb(1073742336,ol.a,ol.a,[]),o.Lb(1073742336,el.a,el.a,[]),o.Lb(1073742336,tl.a,tl.a,[x.g,o.C]),o.Lb(1073742336,Z.p,Z.p,[]),o.Lb(1073742336,Z.h,Z.h,[]),o.Lb(1073742336,$.j,$.j,[k.g,[2,$.c],[2,W.d]]),o.Lb(1073742336,il.b,il.b,[]),o.Lb(1073742336,$.s,$.s,[]),o.Lb(1073742336,w.c,w.c,[]),o.Lb(1073742336,M.c,M.c,[]),o.Lb(1073742336,I.d,I.d,[]),o.Lb(1073742336,ul.e,ul.e,[]),o.Lb(1073742336,ul.d,ul.d,[]),o.Lb(1073742336,N.g,N.g,[]),o.Lb(1073742336,cl.b,cl.b,[]),o.Lb(1073742336,cl.d,cl.d,[]),o.Lb(1073742336,Q.e,Q.e,[]),o.Lb(1073742336,K.h,K.h,[]),o.Lb(1073742336,rl.b,rl.b,[]),o.Lb(1073742336,bl.e,bl.e,[]),o.Lb(1073742336,sl.c,sl.c,[]),o.Lb(1073742336,pl.c,pl.c,[]),o.Lb(1073742336,dl.b,dl.b,[]),o.Lb(1073742336,$.k,$.k,[]),o.Lb(1073742336,$.q,$.q,[]),o.Lb(1073742336,ml.c,ml.c,[]),o.Lb(1073742336,Ll.c,Ll.c,[]),o.Lb(1073742336,yl.b,yl.b,[]),o.Lb(1073742336,k.a,k.a,[k.g]),o.Lb(1073742336,ll.e,ll.e,[]),o.Lb(1073742336,Z.o,Z.o,[]),o.Lb(1073742336,gl.o,gl.o,[]),o.Lb(1073742336,gl.j,gl.j,[]),o.Lb(1073742336,gl.e,gl.e,[]),o.Lb(1073742336,gl.n,gl.n,[]),o.Lb(1073742336,gl.d,gl.d,[]),o.Lb(1073742336,vl.b,vl.b,[]),o.Lb(1073742336,gl.l,gl.l,[]),o.Lb(1073742336,fl.c,fl.c,[]),o.Lb(1073742336,xl.d,xl.d,[]),o.Lb(1073742336,hl.h,hl.h,[]),o.Lb(1073742336,D.e,D.e,[]),o.Lb(1073742336,wl.l,wl.l,[]),o.Lb(1073742336,kl.b,kl.b,[]),o.Lb(1073742336,jl.a,jl.a,[]),o.Lb(1073742336,e.b,e.b,[]),o.Lb(1024,nl.j,(function(){return[[{path:"",component:b,pathMatch:"full"},{path:"proximity-dialog",component:F}]]}),[])])}))}}]);