window.addEventListener("load",function(){const e=navigator.userAgent,t=e.match(/Chrome|Opera/)&&-1==e.indexOf("Edge")?".webp":"-min.png",c=["pic/FEDcre"+t,"pic/FEDknw"+t,"pic/FEDore"+t,"pic/FEDpwt"+t,"pic/FEDqic"+t,"pic/FEDvps"+t],i=["pic/RNDfed"+t,"pic/RNDgai3"+t,"pic/RNDgai4"+t,"pic/RNDmin"+t,"pic/RNDpia"+t,"pic/RNDstp"+t,"pic/RNDter"+t,"pic/RNDtrs3"+t,"pic/RNDtrs4"+t],n=["pic/TECcre"+t,"pic/TECgai"+t,"pic/TECknw"+t,"pic/TECore"+t,"pic/TECpia"+t,"pic/TECpow"+t,"pic/TECqic"+t,"pic/TECtyp"+t,"pic/TECvps"+t],p=["pic/ADVfedP"+t,"pic/ADVfedV"+t,"pic/ADVgai"+t,"pic/ADVknw"+t,"pic/ADVlab"+t,"pic/ADVminB"+t,"pic/ADVminV"+t,"pic/ADVore"+t,"pic/ADVqic"+t,"pic/ADVsecO"+t,"pic/ADVsecV"+t,"pic/ADVstp"+t,"pic/ADVtrsB"+t,"pic/ADVtrsV"+t,"pic/ADVtyp"+t],r=["pic/BOOgai"+t,"pic/BOOknw"+t,"pic/BOOlab"+t,"pic/BOOmin"+t,"pic/BOOnav"+t,"pic/BOOpia"+t,"pic/BOOpwt"+t,"pic/BOOqic"+t,"pic/BOOter"+t,"pic/BOOtrs"+t],o=["pic/FINbld"+t,"pic/FINfed"+t,"pic/FINgai"+t,"pic/FINsat"+t,"pic/FINsec"+t,"pic/FINtyp"+t],a={4:["pic/1"+t,"pic/2"+t,"pic/3"+t,"pic/4"+t,"pic/5"+t,"pic/6"+t,"pic/7"+t,"pic/8"+t,"pic/9"+t,"pic/10"+t],3:["pic/1"+t,"pic/2"+t,"pic/3"+t,"pic/4"+t,"pic/5"+t,"pic/6"+t,"pic/7"+t,"pic/8"+t],2:["pic/1"+t,"pic/2"+t,"pic/3"+t,"pic/4"+t,"pic/5_"+t,"pic/6_"+t,"pic/7_"+t]},l=6,s=9,m=6,d=2;function u(e){let t=[].concat(e);for(var c,i,n=t.length;n;)i=Math.floor(Math.random()*n--),c=t[n],t[n]=t[i],t[i]=c;return t}function y(){let e=document.getElementById("map"),t=e.clientWidth/20/2;e.style.gridTemplateRows=(t+"px ").repeat(30),e.style.setProperty("-ms-grid-rows",(t+"px").repeat(30))}function E(e){!function(){if(!document.querySelector("[data-map-css]")){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","./css/map.css"),e.setAttribute("data-map-css",""),document.getElementsByTagName("head")[0].appendChild(e)}}(),y();let t=u(a[e]);Array.prototype.forEach.call(document.querySelectorAll("[data-map]"),function(c,i,n){let p=c.parentElement;if(p.className="mapItem mapTile"+i+"-"+e+"er","none"==(p.currentStyle||document.defaultView.getComputedStyle(p,"")).display)return!0;let r=60*Math.floor(6*Math.random());c.setAttribute("src",t.shift()),c.style.transform="rotate("+r+"deg)"})}function f(e){var t,a,y={};1==e&&function(){const e=window.location.href;e.indexOf("#!")>=0&&(y=function(e){for(var t=e.split("&"),c={},i=0;i<t.length;i++){var n=t[i].split("=");n.length>1?c[n[0]]=n[1]:c[n[0]]=null}return c}(e.slice(e.indexOf("#!")+2)))}(),t=y.FED,a=0,a=t||Math.floor(Math.random()*c.length),document.getElementById("FED").setAttribute("src",c[a]),function(e){for(var t=u(p),c=0;c<l;c++)document.getElementById("ADV"+c).setAttribute("src",t[c])}(),function(e){for(var t=u(n),c=0;c<s;c++)document.getElementById("BAS"+c).setAttribute("src",t[c])}(),function(e){for(var t=u(i),c=0;c<m;c++)document.getElementById("RND"+c).setAttribute("src",t[c])}(),function(e){for(var t=u(o),c=0;c<d;c++)document.getElementById("FIN"+c).setAttribute("src",t[c])}(),function(e){let t=document.getElementById("booster"),c=document.getElementById("pNumbers").value,i=Number(c)+3,n=u(r);t.childElementCount!=i&&Array.prototype.forEach.call(document.getElementsByClassName("booster"),function(e){e.style.display="none"}),t.style.setProperty("grid-template-columns","1fr ".repeat(i)),t.style.setProperty("-ms-grid-columns","1fr ".repeat(i));for(var p=0;p<i;p++){let e=document.getElementById("BST"+p);e.setAttribute("src",n[p]),e.parentElement.style.setProperty("-ms-grid-column",p+1),e.parentElement.style.display="block",Array.prototype.forEach.call(e.parentElement.classList,function(t){5<t.lastIndexOf("er")&&e.parentElement.classList.remove(t)}),e.parentElement.classList.add("booster"+c+"er")}}()}function g(){let e=this.style.transform.match(/rotate\(([0-9]+)deg\)/),t=60;e&&(t=Number(e[1])+60),this.style.transform="rotate("+t+"deg)"}document.getElementById("setup").addEventListener("click",function(){f()}),document.getElementById("hide").addEventListener("click",function(){let e=document.getElementsByTagName("menu")[0],t=document.getElementById("mapGenMenu");e.style.display="none",t.style.display="none";var c=document.getElementsByTagName("main")[0].addEventListener("click",function(){document.getElementsByTagName("menu")[0].style.display="block",document.getElementById("mapGenMenu").style.display="block",document.getElementsByTagName("main")[0].removeEventListener("click",c)})}),document.getElementById("mapGen").addEventListener("click",function(){E(document.getElementById("pNumbers").value)}),Array.prototype.forEach.call(document.querySelectorAll("div.mapItem > img"),function(e){e.addEventListener("click",g)});let B=null;window.addEventListener("resize",function(){clearTimeout(B),B=setTimeout(function(){y()},300)}),f(!0)});