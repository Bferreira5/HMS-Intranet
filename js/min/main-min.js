jQuery(document).ready(function(){function e(){return window.getComputedStyle(document.querySelector(".cd-main-content"),"::before").getPropertyValue("content").replace(/'/g,"").replace(/"/g,"")}function n(){var n=e();"mobile"==n&&0==r.parents(".cd-side-nav").length?(t(),r.appendTo(c),l.removeClass("is-hidden").prependTo(c)):("tablet"==n||"desktop"==n)&&r.parents(".cd-side-nav").length>0&&(t(),l.insertAfter(a.find(".cd-logo")),r.appendTo(a.find(".cd-nav"))),i(n),m=!1}function t(){r.detach(),l.detach()}function i(e){"desktop"==e&&$(".has-children.selected").removeClass("selected")}function s(){var n=e();if("mobile"!=n){var t=c.outerHeight(),i=$(window).height(),s=o.outerHeight(),a=$(window).scrollTop();a+i>t&&s-t!=0?c.addClass("is-fixed").css("bottom",0):c.removeClass("is-fixed").attr("style","")}v=!1}var o=$(".cd-main-content"),a=$(".cd-main-header"),c=$(".cd-side-nav"),d=$(".cd-nav-trigger"),r=$(".cd-top-nav"),l=$(".cd-search"),u=$(".account"),m=!1;n(),$(window).on("resize",function(){m||(window.requestAnimationFrame?window.requestAnimationFrame(n):setTimeout(n,300),m=!0)});var v=!1;s(),$(window).on("scroll",function(){v||(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,300),v=!0)}),d.on("click",function(e){e.preventDefault(),$([c,d]).toggleClass("nav-is-visible")}),$(".has-children > a").on("click",function(n){var t=e(),i=$(this);("mobile"==t||"tablet"==t)&&(n.preventDefault(),i.parent("li").hasClass("selected")?i.parent("li").removeClass("selected"):(c.find(".has-children.selected").removeClass("selected"),u.removeClass("selected"),i.parent("li").addClass("selected")))}),u.children("a").on("click",function(n){var t=e(),i=$(this);"desktop"==t&&(n.preventDefault(),u.toggleClass("selected"),c.find(".has-children.selected").removeClass("selected"))}),$(document).on("click",function(e){$(e.target).is(".has-children a")||(c.find(".has-children.selected").removeClass("selected"),u.removeClass("selected"))}),c.children("ul").menuAim({activate:function(e){$(e).addClass("hover")},deactivate:function(e){$(e).removeClass("hover")},exitMenu:function(){return c.find(".hover").removeClass("hover"),!0},submenuSelector:".has-children"})});