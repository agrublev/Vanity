!function(u){u.fn.jPaginate=function(b){b=u.extend({items:4,next:"Next",previous:"Previous",active:"active",pagination_class:"pagination",minimize:!1,nav_items:6,cookies:!0,position:"after",equal:!1,offset:50},b);return this.each(function(){var g=u(this),e=b.items,t=g.children().size(),m=Math.ceil(t/e),a=[],s=0,n=e,c=0,l=0;for(i=1;i<=m;i++)a[i]=g.children().slice(s,n),b.equal&&(g.children().slice(s,n).each(function(){c+=u(this).outerHeight()}),l<c&&(l=c),c=0),s+=e,n+=e;function o(e){g.children().hide(),a[e].show()}function r(e){var t,a,s="",n="";t="<ul class='"+b.pagination_class+"'>";var c="<li><a class='goto_previous' href='#'>"+b.previous+"</a></li>",l="<li><a class='goto_next' href='#'>"+b.next+"</a></li>",o="<li><a class='inactive'>"+b.previous+"</a></li>",r="<li><a class='inactive'>"+b.next+"</a></li>";a="</ul><br clear='all' />";b.after;var d,f,u,h,v,p=(d=e,f=Math.floor(b.nav_items/2),u=m-b.nav_items,h=f<d?Math.max(Math.min(d-f,u),0):0,v=f<d?Math.min(d+f+b.nav_items%2,m):Math.min(b.nav_items,m),{start:h,end:v});for(i=1;i<=m;i++)if(1==b.minimize){var _=Math.ceil(m/2);i>=p.start&&i<=p.end?i==e?s+='<li><a class="'+b.active+'" title="'+i+'">'+i+"</a></li>":s+='<li><a href="#" class="goto" title="'+i+'">'+i+"</a></li>":e<=_?i>=m-2&&(i==e?s+='<li><a class="'+b.active+'" title="'+i+'">'+i+"</a></li>":s+='<li><a href="#" class="goto" title="'+i+'">'+i+"</a></li>"):_<=e&&i<=2&&(i==e?s+='<li><a class="'+b.active+'" title="'+i+'">'+i+"</a></li>":s+='<li><a href="#" class="goto" title="'+i+'">'+i+"</a></li>")}else i==e?s+='<li><a class="'+b.active+'" title="'+i+'">'+i+"</a></li>":s+='<li><a href="#" class="goto" title="'+i+'">'+i+"</a></li>";1!=e&&e!=m?n=t+c+s+l+a:1==m?n=t+o+s+r+a:e==m?n=t+c+s+r+a:1==e&&(n=t+o+s+l+a),"before"==b.position?g.before(n):"after"==b.position?g.after(n):(g.after(n),g.before(n))}function d(e,i){var t=new Date;t.setDate(t.getDate()+999),document.cookie=e+"="+escape(i)+";expires="+t.toUTCString()}function f(e){return 0<document.cookie.length&&(c_start=document.cookie.indexOf(e+"="),-1!=c_start)?(c_start=c_start+e.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""}b.equal&&(l+=b.offset,g.css({height:l})),1==b.cookies?(f("current")||d("current","1"),o(f("current")),r(f("current"))):(o(1),r(1)),u(".goto").live("click",function(e){e.preventDefault(),o(u(this).attr("title")),d("current",u(this).attr("title")),u(".pagination").remove(),r(u(this).attr("title"))}),u(".goto_next").live("click",function(e){e.preventDefault();b.active;var i=parseInt(u(".pagination").find(".active").attr("title"))+1;d("current",i),o(i),u(".pagination").remove(),r(i)}),u(".goto_previous").live("click",function(e){e.preventDefault();b.active;var i=parseInt(u(".pagination").find(".active").attr("title"))-1;d("current",i),o(i),u(".pagination").remove(),r(i)})})}}(jQuery),function(a){a.fn.jPlaceholder=function(t){t=a.extend({css_class:"placeholder"},t);return a("form").submit(function(){a("input").each(function(){null!=a(this).attr("placeholder")&&a(this).attr("placeholder")==a(this).attr("value")&&a(this).val("")})}),this.each(function(){var e=a(this).attr("placeholder"),i=a(this).attr("value");null!=e&&(e==i?a(this).addClass(t.css_class):a(this).removeClass(t.css_class),""==i&&(a(this).addClass(t.css_class),a(this).val(e)),a(this).focus(function(){e==a(this).val()&&a(this).val("").removeClass(t.css_class)}),a(this).blur(function(){""==a(this).val()&&a(this).val(e).addClass(t.css_class)}))}),this}}(jQuery),function(f){f.fn.jSlider=function(d){d=f.extend({previous_class:"prev",next_class:"next",inactive:"inactive",elem:"div",animation:"fade",easing:"swing",speed:700,navi:!0,navi_active_class:"active",navi_class:"navi",auto_slide:!1,auto_slide_interval:5e3,auto_pause_hover:!0,click_next:!1,infinite:!1,images:!1},d);return this.each(function(){obj=f(this);var n=obj.children(d.elem),c=obj.children(d.elem).size(),s=f("."+d.previous_class),l=f("."+d.next_class),o=[],r=1;for(i=1;i<=c;i++)o[i]=obj.find(d.elem+":nth-child("+i+")");if(t(1,"",1),d.auto_slide)var e=setInterval(function(){r<c?t(r,"next",r):d.infinite&&(t(1,r,c),r=1)},d.auto_slide_interval);function t(e,t,a){"next"==t&&(r=++e),"prev"==t&&(r=--e),obj.children(d.elem).hide(),function(e,i){if(d.images&&1!=c){var t=o[i].find("img").attr("src");obj.css({background:"url("+t+") center center"})}if("random"==d.animation)var a=Math.floor(10*Math.random()),s=["fade","slideDown","slideUp","slideRight","slideLeft","bounce","slideUp","explode","fold","scale"][a];else var s=d.animation;switch(n.hide(),s){case"fade":o[e].stop().fadeIn(d.speed);break;case"slideDown":o[e].stop().show("slide",{direction:"up",easing:d.easing},d.speed);break;case"slideUp":o[e].stop().show("slide",{direction:"down",easing:d.easing},d.speed);break;case"slideRight":o[e].stop().show("slide",{direction:"left",easing:d.easing},d.speed);break;case"slideLeft":o[e].stop().show("slide",{direction:"right",easing:d.easing},d.speed);break;case"bounce":o[e].stop().show("bounce",{direction:"up",easing:d.easing},d.speed);break;case"explode":o[e].stop().show("explode",{direction:"down",easing:d.easing},d.speed);break;case"fold":o[e].stop().show("fold",{direction:"down",easing:d.easing},d.speed);break;case"scale":o[e].stop().show("scale",{direction:"down",easing:d.easing},d.speed);break;default:o[e].show()}}(e,a),d.navi&&function(e){f("."+d.navi_class).remove();var t,a="",s="";t="<ul class='"+d.navi_class+"'>";for(i=1;i<=c;i++)i==e?a+='<li><a class="'+d.navi_active_class+'" title="'+i+'">'+i+"</a></li>":a+='<li><a href="#" class="goto" title="'+i+'">'+i+"</a></li>";s=t+a+"</ul>",obj.append(s)}(e),d.infinite||(1==e?s.addClass(d.inactive).css({cursor:"default"}):s.removeClass(d.inactive).css({cursor:"pointer"}),e==c?l.addClass(d.inactive).css({cursor:"default"}):l.removeClass(d.inactive).css({cursor:"pointer"}))}d.auto_slide&&d.auto_pause_hover&&obj.children().hover(function(){clearInterval(e)},function(){e=setInterval(function(){r<c?t(r,"next",r):d.infinite&&(t(1,r,c),r=1)},d.auto_slide_interval)}),d.click_next&&n.click("click",function(e){e.preventDefault(),r<c?t(r,"next",r):d.infinite&&(t(1,r,c),r=1)}),f("."+d.next_class).live("click",function(e){e.preventDefault(),r<c?t(r,"next",r):d.infinite&&(t(1,r,c),r=1)}),f("."+d.previous_class).live("click",function(e){e.preventDefault(),1<r?t(r,"prev",r):d.infinite&&(t(c,r,1),r=c)}),f(".goto").live("click",function(e){e.preventDefault();var i=f(this).attr("title");t(i,"",r),r=i})})}}(jQuery),function(a){a.fn.jSpotlight=function(t){t=a.extend({active:"active",inactive:"inactive",attr:"title",title_class:"title",title_effect:"fade",title_speed:300,title:!0,scale:!1},t);return this.each(function(){var e=a(this);t.title&&e.children().each(function(){var e=a(this).find("img").attr(t.attr),i='<div class="'+t.title_class+'" style="display:none">'+e+"</div>";a(this).append(i)}),e.children().hover(function(e){var i=a(this);if(i.siblings().removeClass(t.active).addClass(t.inactive),i.removeClass(t.inactive).addClass(t.active),t.scale&&(i.css({transform:"scale(1.051)",transition:"all 1s"}),i.siblings().css({transform:"scale(0.9)",transition:"all 1s"})),t.title)switch(t.title_effect){case"fade":i.find("."+t.title_class).stop(!0,!0).fadeIn(t.title_speed,function(){});break;case"slide":i.find("."+t.title_class).stop(!0,!0).slideDown(t.title_speed);break;default:i.find("."+t.title_class).show()}},function(){var e=a(this);if(e.removeClass(t.active).removeClass(t.inactive).siblings().removeClass(t.active).removeClass(t.inactive),t.scale&&(e.siblings().css({transform:"none"}),e.css("transform","none")),t.title)switch(t.title_effect){case"fade":e.find("."+t.title_class).stop(!0,!0).fadeOut(t.title_speed);break;case"slide":e.find("."+t.title_class).stop(!0,!0).slideUp(t.title_speed);break;default:e.find("."+t.title_class).hide()}})})}}(jQuery),function(r){r.fn.jTabs=function(o){o=r.extend({content:"div.content",equal_height:!1,cookies:!1,animate:!1,effect:"fade",speed:400},o);return this.each(function(){obj=r(this);r(o.content);var e=obj.children("li").size(),t=[],a=[];for(i=1;i<=e;i++)t[i]=obj.find("li:nth-child("+i+")"),t[i].attr("title",i);for(i=1;i<=e;i++)a[i]=r(o.content+"> div:nth-child("+i+")");if(o.equal_height){var s=0;r(o.content).children("div").each(function(){r(this).outerHeight()>s&&(s=r(this).outerHeight())}),r(o.content).height(s)}function n(e){if(t[e].addClass("active").siblings().removeClass("active"),o.animate)switch(o.effect){case"fade":a[e].fadeIn(o.speed).siblings().hide();break;case"slide":a[e].slideDown(o.speed).siblings().hide()}else a[e].show().siblings().hide()}function c(e,i,t){var a=new Date;a.setDate(a.getDate()+t),document.cookie=e+"="+escape(i)+(null==t?"":";expires="+a.toUTCString())}function l(e){return 0<document.cookie.length&&(c_start=document.cookie.indexOf(e+"="),-1!=c_start)?(c_start=c_start+e.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""}o.cookies?l("page")?n(l("page")):(c("page",1,999),n(1)):n(1),obj.find("li").live("click",function(e){e.preventDefault();var i=r(this).attr("title");n(i),o.cookies&&c("page",i,999)})})}}(jQuery),function(c){c.fn.jTip=function(n){n=c.extend({attr:"title",tip_class:"tip_window",y_coordinate:40,x_coordinate:0},n);return this.each(function(){var i=c(this),s=c('<div class="'+n.tip_class+'" style="position:absolute; z-index:999; left:-9999px;"></div>');c("body").append(s);var t=i.attr(n.attr);function a(e){var i=e.pageY+n.y_coordinate,t=e.pageX+n.x_coordinate,a=s.width();t+s.width()>=c(window).width()&&(t=e.pageX-a),s.css({left:t,top:i})}i.on({mouseenter:function(e){s.css({opacity:.8,display:"none"}).fadeIn(400),i.attr(n.attr,""),s.html(t),a(e),s.stop().fadeTo("10",.8)},mouseleave:function(e){i.attr(n.attr,t),s.stop().fadeOut(400)}}),i.on("mousemove",function(e){a(e)})})}}(jQuery),function(e){e.fn.jCollapse=function(s){s=e.extend({expand_text:"Expand",collapse_text:"Collapse",effect:"display"},s);return this.each(function(){var i=e(this),t=s.expand_text;i.html(t);s.expand_text;var a=e(i.attr("rel"));i.click(function(e){if(e.preventDefault(),i.html()==t)switch(i.html(s.collapse_text),s.effect){case"display":a.show();break;case"fade":a.fadeIn("slow");break;case"slide":a.slideDown("slow");break;default:a.show()}else switch(i.html(s.expand_text),s.effect){case"display":a.hide();break;case"fade":a.fadeOut("slow");break;case"slide":a.slideUp("slow");break;default:a.hide()}})})}}(jQuery);
