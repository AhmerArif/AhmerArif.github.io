/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
(function(e){function a(h){return new RegExp("(^|\\s+)"+h+"(\\s+|$)")}var d,f,g;if("classList" in document.documentElement){d=function(h,i){return h.classList.contains(i)};f=function(h,i){h.classList.add(i)};g=function(h,i){h.classList.remove(i)}}else{d=function(h,i){return a(i).test(h.className)};f=function(h,i){if(!d(h,i)){h.className=h.className+" "+i}};g=function(h,i){h.className=h.className.replace(a(i)," ")}}function b(i,j){var h=d(i,j)?g:f;h(i,j)}var c={hasClass:d,addClass:f,removeClass:g,toggleClass:b,has:d,add:f,remove:g,toggle:b};if(typeof define==="function"&&define.amd){define(c)}else{e.classie=c}})(window);

/*!
 * jquerystacks
 */
(function(e){e.fn.stacks=function(t){var n=e.extend({body:".stickyparent",title:".header",margin:0,offset:0},t);e.each(this.find(n.body+" "+n.title),function(t,r){var i=e(r).offset();$bdr=0;$bordertopheight=e(r).css("border-top-width").substring(0,e(r).css("border-top-width").indexOf("p"));$borderbtmheight=e(r).css("border-bottom-width").substring(0,e(r).css("border-bottom-width").indexOf("p"));$bdr=parseInt($bordertopheight)+parseInt($borderbtmheight);e(window).resize(function(){$paddleft=e(r).css("padding-left").substring(0,e(r).css("padding-left").indexOf("p"));$paddright=e(r).css("padding-right").substring(0,e(r).css("padding-left").indexOf("p"));$width=e(r).parent().width()-$paddleft-$paddright;if(!e(r).hasClass("fixed")){i=e(r).offset()}$left=i.left;e(r).css({width:$width})});e(window).scroll(function(){if(e(window).scrollTop()+(e(r).outerHeight(true)-$bdr)>=e(r).closest(n.body).offset().top+e(r).closest(n.body).outerHeight(true)+n.margin-n.offset){e(r).removeClass("fixed").addClass("absolute").removeAttr("style")}else if(e(document).scrollTop()>=i.top-n.offset){$offset=i.left;$awidth=e(r).width();e(r).removeClass("absolute").addClass("fixed").css({width:$awidth});if(e(r).siblings("#filler").length<1){e('<div id="filler" />').css("height",e(r).outerHeight(true)).insertAfter(e(r))}}else{e(r).removeClass("fixed");e(r).removeAttr("style");e(r).siblings("#filler").remove()}})});setTimeout(function(){e.each(e(n.body+" "+n.title+".absolute"),function(t,n){e('<div id="filler" />').css("height",e(n).outerHeight(true)).insertAfter(e(n))})},100)}})(jQuery)

