(this.webpackJsonppointy=this.webpackJsonppointy||[]).push([[0],{20:function(t,e,i){},23:function(t,e,i){"use strict";i.r(e);var n=i(7),s=i.n(n),r=i(15),a=i.n(r),o=(i(20),i(9)),c=i(0),u=i(1),h=i(5),l=i(4),d=i(2),v=i(3),f=i(10),b=function(){function t(e){Object(c.a)(this,t),this.active=void 0,this.subPointers=void 0,this.initial=void 0,this.current=void 0,this.diff=void 0,this.label=void 0,this.logEl=void 0,this.markEl=void 0,this.label=e,this.active=!1,this.subPointers=null,this.initial=new f.a,this.current=new f.a,this.diff=new f.a,this.logEl=null,this.markEl=null}return Object(u.a)(t,[{key:"start",value:function(t){this.active=!0}},{key:"end",value:function(){this.active=!1,this.current.set(0,0),this.diff.set(0,0)}},{key:"setLogEl",value:function(t){this.logEl=t,this.log()}},{key:"log",value:function(){null!==this.logEl&&(this.logEl.innerText=this.label+" "+JSON.stringify(this.active)+" diff "+Math.round(this.diff.x)+","+Math.round(this.diff.y))}},{key:"setMarkEl",value:function(t){this.markEl=t,this.updateMark()}},{key:"extras",value:function(){this.log(),this.updateMark()}},{key:"updateMark",value:function(){null!==this.markEl&&(this.active?this.markEl.style.display="block":this.markEl.style.display="none",this.markEl.style.left=this.current.x+"px",this.markEl.style.top=this.current.y+"px")}}]),t}(),p=function(t){Object(d.a)(i,t);var e=Object(v.a)(i);function i(t){return Object(c.a)(this,i),e.call(this,t)}return Object(u.a)(i,[{key:"start",value:function(t){Object(h.a)(Object(l.a)(i.prototype),"start",this).call(this,t),this.subPointers=t;var e=Object(o.a)(this.subPointers,1)[0];this.initial.copy(e.current),this.current.copy(e.current),this.diff.set(0,0),Object(h.a)(Object(l.a)(i.prototype),"extras",this).call(this)}},{key:"move",value:function(){if(this.subPointers){var t=Object(o.a)(this.subPointers,1)[0];this.current.copy(t.current),this.diff.copy(this.current).sub(this.initial),Object(h.a)(Object(l.a)(i.prototype),"extras",this).call(this)}}},{key:"end",value:function(){Object(h.a)(Object(l.a)(i.prototype),"end",this).call(this),Object(h.a)(Object(l.a)(i.prototype),"extras",this).call(this)}}]),i}(b),j=function(t){Object(d.a)(i,t);var e=Object(v.a)(i);function i(t){return Object(c.a)(this,i),e.call(this,t)}return Object(u.a)(i,[{key:"start",value:function(t){this.active=!0,this.subPointers=t;var e=Object(o.a)(t,3),n=e[0],s=e[1],r=e[2];this.current.copy(n.current).add(s.current).add(r.current).divideScalar(3),this.initial.copy(this.current),this.diff.set(0,0),Object(h.a)(Object(l.a)(i.prototype),"extras",this).call(this)}},{key:"move",value:function(){if(this.subPointers){var t=Object(o.a)(this.subPointers,3),e=t[0],n=t[1],s=t[2];this.current.copy(e.current).add(n.current).add(s.current).divideScalar(3),this.diff.copy(this.current).sub(this.initial),Object(h.a)(Object(l.a)(i.prototype),"extras",this).call(this)}}},{key:"end",value:function(){Object(h.a)(Object(l.a)(i.prototype),"end",this).call(this),Object(h.a)(Object(l.a)(i.prototype),"extras",this).call(this)}}]),i}(b),O=function(t){Object(d.a)(i,t);var e=Object(v.a)(i);function i(t){var n;return Object(c.a)(this,i),(n=e.call(this,t)).initialBetween=void 0,n.between=void 0,n.between=new f.a,n.initialBetween=new f.a,n}return Object(u.a)(i,[{key:"start",value:function(t){Object(h.a)(Object(l.a)(i.prototype),"start",this).call(this,t),this.subPointers=t;var e=Object(o.a)(t,2),n=e[0],s=e[1];this.current.copy(n.current).add(s.current).divideScalar(2),this.initial.copy(this.current),this.between.copy(n.current).sub(s.current),this.initialBetween.copy(this.between),this.diff.set(0,0),Object(h.a)(Object(l.a)(i.prototype),"extras",this).call(this)}},{key:"move",value:function(){if(this.subPointers){var t=Object(o.a)(this.subPointers,2),e=t[0],n=t[1];this.current.copy(e.current).add(n.current).divideScalar(2),this.between.copy(e.current).sub(n.current),this.diff.copy(this.current).sub(this.initial),Object(h.a)(Object(l.a)(i.prototype),"extras",this).call(this)}}},{key:"end",value:function(){Object(h.a)(Object(l.a)(i.prototype),"end",this).call(this),Object(h.a)(Object(l.a)(i.prototype),"extras",this).call(this)}}]),i}(b),P=function(){function t(){Object(c.a)(this,t),this.active=void 0,this.initial=void 0,this.current=void 0,this.diff=void 0,this.active=!1,this.initial=new f.a,this.current=new f.a,this.diff=new f.a}return Object(u.a)(t,[{key:"start",value:function(t){this.active=!0,this.current.set(t.clientX,t.clientY),this.initial.copy(this.current),this.diff.set(0,0)}},{key:"move",value:function(t){this.current.set(t.clientX,t.clientY),this.diff.copy(this.current).sub(this.initial)}},{key:"end",value:function(){this.active=!1,this.current.set(0,0),this.diff.set(0,0)}}]),t}(),y=function t(e){Object(c.a)(this,t),this.canvas=void 0,this.pressed=void 0,this.pointers=void 0,this.extraPointers=void 0,this.PointerOne=void 0,this.PointerTwo=void 0,this.PointerThree=void 0,this.PointerMiddle=void 0,this.lastPointerButtonPressed=void 0,this.canvas=e,this.pressed=[],this.pointers=[],this.extraPointers=[],this.PointerOne=new p("One"),this.PointerTwo=new O("Two"),this.PointerThree=new j("Three"),this.PointerMiddle=new P,this.lastPointerButtonPressed=0,this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight},w=function(){function t(e,i){switch(Object(c.a)(this,t),this.state=void 0,this.id=void 0,this.current=void 0,this.state=e,this.id=i.pointerId,this.current=new f.a(i.clientX,i.clientY),this.state.pointers.push(this),this.state.pointers.length){case 1:this.state.PointerOne.start(this.state.pointers.slice(0,1));break;case 2:this.state.PointerOne.end(),this.state.PointerTwo.start(this.state.pointers.slice(0,2));break;default:this.state.PointerTwo.end(),this.state.PointerThree.start(this.state.pointers.slice(0,3))}}return Object(u.a)(t,[{key:"move",value:function(t){switch(this.current.set(t.clientX,t.clientY),this.state.pointers.length){case 1:this.state.PointerOne.move();break;case 2:this.state.PointerTwo.move();break;default:this.state.PointerThree.move()}}},{key:"remove",value:function(){var t=m(this.state,this.id);switch(-1!==t&&this.state.pointers.splice(t,1),this.state.pointers.length){case 0:this.state.PointerOne.end();break;case 1:this.state.PointerTwo.end(),this.state.PointerOne.start(this.state.pointers.slice(0,1));break;case 2:this.state.PointerThree.end(),this.state.PointerTwo.start(this.state.pointers.slice(0,2))}}}]),t}(),k=function(t){var e=t.state;return Object(n.useEffect)((function(){var t=e.canvas,i=function(t){if(0===e.lastPointerButtonPressed){var i=E(e,t.pointerId);i&&i.move(t)}else 1===e.lastPointerButtonPressed?e.PointerMiddle.active&&e.PointerMiddle.move(t):e.lastPointerButtonPressed},n=function(i){e.lastPointerButtonPressed=i.button,0===e.lastPointerButtonPressed?(new w(e,i),t.setPointerCapture(i.pointerId)):1===e.lastPointerButtonPressed?e.PointerMiddle.start(i):e.lastPointerButtonPressed,t.setPointerCapture(i.pointerId)},s=function(i){if(0===e.lastPointerButtonPressed){var n=E(e,i.pointerId);n&&n.remove(),t.releasePointerCapture(i.pointerId)}else 1===e.lastPointerButtonPressed?e.PointerMiddle.end():e.lastPointerButtonPressed},r=function(t){};if(t)return t.addEventListener("pointerdown",n),t.addEventListener("pointermove",i),t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("mousewheel",r,{passive:!1}),function(){t.removeEventListener("pointerdown",n),t.removeEventListener("pointermove",i),t.removeEventListener("pointerup",s),t.removeEventListener("pointercancel",s),t.removeEventListener("mousewheel",r)}}),[]),null},m=function(t,e){return t.pointers.map((function(t){return t.id})).indexOf(e)},E=function(t,e){var i=m(t,e);return i>-1?t.pointers[i]:null};var x=function(t){var e=t.state;return Object(n.useEffect)((function(){var t=function(t){var i=t.key.toLowerCase();t.repeat||e.pressed.push(i)},i=function(t){var i=t.key.toLowerCase(),n=e.pressed.indexOf(i);-1!==n&&e.pressed.splice(n,1)};return window.addEventListener("keydown",t),window.addEventListener("keyup",i),function(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",i)}}),[]),null},g=i(6);var L=function(){var t=Object(n.useRef)(null),e=Object(n.useRef)(null),i=Object(n.useRef)(null),s=Object(n.useRef)(null),r=Object(n.useRef)(null),a=Object(n.useRef)(null),c=Object(n.useRef)(null),u=Object(n.useState)(null),h=Object(o.a)(u,2),l=h[0],d=h[1];return Object(n.useEffect)((function(){var n=t.current,o=new y(n);o.PointerOne.setLogEl(e.current),o.PointerTwo.setLogEl(i.current),o.PointerThree.setLogEl(s.current),o.PointerOne.setMarkEl(r.current),o.PointerTwo.setMarkEl(a.current),o.PointerThree.setMarkEl(c.current),d(o)}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{style:{position:"fixed",left:0,top:0,userSelect:"none",pointerEvents:"none"},children:[Object(g.jsx)("div",{ref:e}),Object(g.jsx)("div",{ref:i}),Object(g.jsx)("div",{ref:s}),Object(g.jsx)("div",{ref:r,className:"mark"}),Object(g.jsx)("div",{ref:a,className:"mark"}),Object(g.jsx)("div",{ref:c,className:"mark"})]}),Object(g.jsx)("canvas",{ref:t}),l?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k,{state:l}),Object(g.jsx)(x,{state:l})]}):null]})},T=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,24)).then((function(e){var i=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;i(t),n(t),s(t),r(t),a(t)}))};a.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root")),T()}},[[23,1,2]]]);
//# sourceMappingURL=main.c5452d7c.chunk.js.map