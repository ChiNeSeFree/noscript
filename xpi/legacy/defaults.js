'use strict';

Legacy.migrated.prefs = Object.assign(
{
  "autoReload": true,
  "autoReload.global": true,
  "autoReload.allTabs": true,
  "autoReload.allTabsOnPageAction": true,
  "autoReload.allTabsOnGlobal": false,
  "autoReload.onMultiContent": false,
  "autoReload.useHistory": false,
  "autoReload.useHistory.exceptCurrent": true,
  "autoReload.embedders": 1,
  "ctxMenu": true,
  "statusIcon": true,
  "sound": false,
  "sound.oncePerSite": true,
  "notify": true,
  "notify.bottom": true,
  "showAddress": false,
  "showDomain": false,
  "showTemp": true,
  "showPermanent": true,
  "showDistrust": true,
  "showUntrusted": true,
  "showBaseDomain": true,
  "showAbout": true,
  "showGlobal": true,
  "showTempToPerm": true,
  "showRevokeTemp": true,
  "showBlockedObjects": true,
  "showExternalFilters": true,
  "showTempAllowPage": true,
  "showAllowPage": true,
  "mandatory": "[System+Principal] about: about:addons about:blocked about:certerror about:config about:crashes about:feeds about:home about:memory about:neterror about:plugins about:preferences about:privatebrowsing about:sessionrestore about:srcdoc about:support about:tabcrashed blob: chrome: mediasource: moz-extension: moz-safe-about: resource:",
  "default": "about:blank about:pocket-saved about:pocket-signup addons.mozilla.org afx.ms ajax.aspnetcdn.com ajax.googleapis.com bootstrapcdn.com code.jquery.com firstdata.com firstdata.lv gfx.ms google.com googlevideo.com gstatic.com hotmail.com live.com live.net maps.googleapis.com mozilla.net netflix.com nflxext.com nflximg.com nflxvideo.net noscript.net outlook.com passport.com passport.net passportimages.com paypal.com paypalobjects.com securecode.com securesuite.net sfx.ms tinymce.cachefly.net wlxrs.com yahoo.com yahooapis.com yandex.st yimg.com youtube.com ytimg.com",
  "allowWhitelistUpdates": true,
  "volatilePrivatePermissions": false,
  "showVolatilePrivatePermissionsToggle": true,
  "eraseFloatingElements": true,
  "bgThumbs.allowed": false,
  "bgThumbs.disableJS": true,
  "forbidJava": true,
  "forbidFlash": true,
  "forbidSilverlight": true,
  "forbidPlugins": true,
  "forbidMedia": true,
  "forbidFonts": true,
  "forbidWebGL": false,
  "forbidActiveContentParentTrustCheck": true,
  "forbidIFrames": false,
  "forbidIFramesContext": 3,
  "forbidIFramesParentTrustCheck": true,
  "forbidFrames": false,
  "forbidMixedFrames": true,
  "sound.block": "chrome://noscript/skin/block.wav",
  "allowClipboard": false,
  "allowLocalLinks": false,
  "allowLocalLinks.from": "",
  "allowLocalLinks.to": "",
  "allowCachingObjects": true,
  "showPlaceholder": true,
  "global": false,
  "globalHttpsWhitelist": false,
  "confirmUnblock": true,
  "confirmUnsafeReload": true,
  "statusLabel": false,
  "forbidBookmarklets": false,
  "allowBookmarkletImports": true,
  "allowBookmarks": false,
  "notify.hideDelay": 5,
  "notify.hidePermanent": true,
  "notify.hide": false,
  "truncateTitleLen": 255,
  "truncateTitle": true,
  "fixLinks": true,
  "noping": true,
  "consoleDump": 0,
  "excaps": true,
  "nselForce": true,
  "nselNever": false,
  "nselNoMeta": true,
  "autoAllow": 0,
  "toolbarToggle": 3,
  "allowPageLevel": 0,
  "forbidImpliesUntrust": false,
  "keys.toggle": "ctrl shift VK_BACK_SLASH.|",
  "keys.ui": "ctrl shift S",
  "keys.tempAllowPage": "",
  "keys.revokeTemp": "",
  "menuAccelerators": false,
  "forbidMetaRefresh": false,
  "forbidMetaRefresh.remember": false,
  "forbidMetaRefresh.notify": true,
  "forbidMetaRefresh.exceptions": "^https?://(?:www|encrypted)\\.google\\.(?:[a-z]{2,3}|[a-z]{2}\\.[a-z]{2,3})/ t.co",
  "contentBlocker": false,
  "toggle.temp": true,
  "firstRunRedirection": true,
  "xss.notify": true,
  "xss.notify.subframes": true,
  "xss.trustReloads": false,
  "xss.trustData": true,
  "xss.trustExternal": true,
  "xss.trustTemp": true,
  "xss.checkInclusions": true,
  "xss.checkInclusions.exceptions": "intensedebate.com/idc/js/",
  "xss.checkCharset.exceptions": "",
  "filterXPost": true,
  "filterXGet": true,
  "filterXGetRx": "<+(?=[^<>=\\d. /(-])|[\\\\\"\\x00-\\x07\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F]",
  "filterXGetUserRx": "",
  "filterXExceptions": "^https?://([a-z]+)\\.google\\.(?:[a-z]{1,3}\\.)?[a-z]+/(?:search|custom|\\1)\\?\n^https?://([a-z]*)\\.?search\\.yahoo\\.com/search(?:\\?|/\\1\\b)\n^https?://[a-z]+\\.wikipedia\\.org/wiki/[^\"<>?%]+$\n^https?://translate\\.google\\.com/translate_t[^\"'<>?%]+$\n^https://secure\\.wikimedia\\.org/wikipedia/[a-z]+/wiki/[^\"<>\\?%]+$",
  "filterXExceptions.blogspot": true,
  "filterXExceptions.darla_name": true,
  "filterXExceptions.deviantart": true,
  "filterXExceptions.fbconnect": true,
  "filterXExceptions.ebay": true,
  "filterXExceptions.ggadgets": true,
  "filterXExceptions.letitbit": true,
  "filterXExceptions.livejournal": true,
  "filterXExceptions.lycosmail": true,
  "filterXExceptions.medicare": true,
  "filterXException.photobucket": true,
  "filterXExceptions.printfriendly": true,
  "filterXExceptions.readability": true,
  "filterXExceptions.yahoo": true,
  "filterXExceptions.visa": true,
  "filterXExceptions.verizon": true,
  "filterXExceptions.zendesk": true,
  "filterXExceptions.yt_comments": true,
  "protectWindowNameXAssignment": true,
  "injectionCheck": 2,
  "injectionCheckPost": true,
  "injectionCheckHTML": true,
  "globalwarning": true,
  "jsredirectIgnore": false,
  "jsredirectFollow": false,
  "jsredirectForceShow": false,
  "removeSMILKeySniffer": true,
  "utf7filter": true,
  "safeJSRx": "(?:window\\.)?close\\s*\\(\\)",
  "badInstall": false,
  "fixURI": true,
  "fixURI.exclude": "",
  "urivalid.aim": "\\w[^\\\\?&\\x00-\\x1f#]*(?:\\?[^\\\\\\x00-\\x1f#]*(?:#[\\w.@+-]{2,32})?)?",
  "urivalid.mailto": "[^\\x00-\\x08\\x0b\\x0c\\x0e-\\x1f]*",
  "forbidExtProtSubdocs": true,
  "forbidXBL": 1,
  "forbidXHR": 1,
  "whitelistRegExp": "",
  "tempGlobal": false,
  "lockPrivilegedUI": false,
  "collapseObject": false,
  "showUntrustedPlaceholder": true,
  "jsHack": "",
  "jsHackRegExp": "",
  "canonicalFQDN": false,
  "allowedMimeRegExp": "",
  "alwaysBlockUntrustedContent": true,
  "consoleLog": false,
  "dropXssProtection": true,
  "flashPatch": true,
  "silverlightPatch": true,
  "allowURLBarJS": false,
  "allowURLBarImports": false,
  "hideOnUnloadRegExp": "video/.*",
  "untrusted": "",
  "untrustedGranularity": 3,
  "requireReloadRegExp": "application/x-vnd\\.moveplayer\\b.*",
  "restrictSubdocScripting": false,
  "cascadePermissions": false,
  "secureCookies": false,
  "secureCookiesExceptions": "",
  "secureCookiesForced": "",
  "secureCookies.recycle": false,
  "secureCookies.perTab": false,
  "httpsForced": "",
  "httpsForcedBuiltIn": "www.youtube.com",
  "httpsDefWhitelist": true,
  "allowHttpsOnly": 0,
  "https.showInConsole": true,
  "clearClick": 3,
  "clearClick.plugins": true,
  "clearClick.prompt": true,
  "clearClick.debug": false,
  "clearClick.exceptions": ".mail.yahoo.com https://mail.google.com/ *.ebay.com *.photobucket.com .youtube.com",
  "clearClick.subexceptions": "^http://bit(?:ly\\.com|\\.ly)/a/sidebar\\?u= http://*.uservoice.com/*/popin.html?* http://w.sharethis.com/share3x/lightbox.html?* http://disqus.com/embed/* *.disqus.com/*/reply.html* http://www.feedly.com/mini abine:*",
  "clearClick.rapidFireCheck": true,
  "clearClick.threshold": 18,
  "emulateFrameBreak": true,
  "stickyUI.liveReload": false,
  "stickyUI": true,
  "stickyUI.onKeyboard": true,
  "hoverUI": true,
  "hoverUI.delayEnter": 250,
  "hoverUI.delayStop": 50,
  "hoverUI.delayExit1": 250,
  "hoverUI.delayExit2": 300,
  "hoverUI.excludeToggling": true,
  "ignorePorts": true,
  "cp.last": true,
  "sanitizePaste": true,
  "surrogate.enabled": true,
  "surrogate.debug": false,
  "surrogate.sandbox": true,
  "surrogate.2mdn.replacement": "if('Proxy' in window){let _f=function(){}; google=$S(); Object.defineProperty(google,'__noSuchMethod__',{configurable:true,enumerable:false,value:_f});let ima={};ima.AdsManagerLoadedEvent=ima.AdErrorEvent={Type:new Proxy({},{get:function(){return 0}}),};ima.settings=new Proxy({},{get:function(){return _f}});ima.AdsLoader=ima.AdsRequest=ima.AdDisplayContainer=function(){return new Proxy({},{get:function(){return _f}});};google.ima=ima;}",
  "surrogate.2mdn.sources": ".2mdn.net",
  "surrogate.360Haven.sources": "@www.360haven.com",
  "surrogate.360Haven.replacement": "Object.defineProperty(window,'adblock',{get:function() false,set: function() false});Object.defineProperty(window,'google_ad_client',{get: function () { return $S({__noSuchMethod__: function() this})}});Object.defineProperty(window.HTMLBodyElement.prototype,'innerHTML',{get:function() ''});",
  "surrogate.adagionet.sources": ".adagionet.com",
  "surrogate.adagionet.replacement": "adagioWriteTag=adagioWriteBanner=function(){}",
  "surrogate.addthis.sources": "^https?://(?:[^/:]+\\.)?addthis\\.com/.*addthis_widget\\.js",
  "surrogate.addthis.replacement": "addthis=(function(){var f=$S(arguments.callee);return f.__noSuchMethod__=f.data=f.bar=f.dynamic=f.login=f.ad=f.util=f.user=f.session=f})();",
  "surrogate.adfly.sources": "!@^https?://adf.ly/\\w+/?$",
  "surrogate.adfly.replacement": "for(var a=/ysmm = '(.*?)';/gi.exec(document.documentElement.innerHTML)[1],b='',c='',d=0;d<a.length;d++)0==d%2?b+=a.charAt(d):c=a.charAt(d)+c;window.location=atob(b+c).substring(2)",
  "surrogate.ampush.sources": ".ampush.io",
  "surrogate.ampush.replacement": "window.ampt=$S({__noSuchMethod__:function(){}});",
  "surrogate.digg.sources": "!@digg.com/newsbar/*",
  "surrogate.digg.replacement": "window.location.href=document.querySelector('link[rel=canonical]').href",
  "surrogate.dimtus.sources": "!@^http://(?:dimtus|imageteam)\\.(?:com|org)/img-",
  "surrogate.dimtus.replacement": "document.querySelector('.overlay_ad').style.display='none'",
  "surrogate.ga.sources": "*.google-analytics.com",
  "surrogate.ga.replacement": "(function(){var _0=$S(function()_0),_u=function(){};_0.__noSuchMethod__=_0;('ga'in window)||(ga=_u);window.urchinTracker=window._u||_u;window._gaq=$S({__noSuchMethod__:_0,push:function(f){if(typeof f=='function')f();else if(f&&f.shift&&f[0]in this)this[f.shift()].apply(this,f)},_set:function(a,b){if(typeof b=='function')b()},_link:function(h){if(h)location.href=h},_linkByPost:function(f){if(f&&f.submit)f.submit();return true},_getLinkerUrl:function(u){return u},_trackEvent:_0});window._gat=$S({__noSuchMethod__:function(){return _gaq},_getTrackerByName:function(){return {_visitCode:function(){return 0}}}});window.cxApi=$S({__noSuchMethod__:_0,getChosenVariation:function(x){return typeof x == 'number' ? x : x[0]},chooseVariation:function(x){return 0}})})()",
  "surrogate.glinks.replacement": "['focus','mouseover','mousedown','click'].forEach(function(et){addEventListener(et,function(e){var a=e.target,href=a.href&&a.getAttribute&&a.getAttribute('href');if(href&&/^(?:http|\\/url)/.test(href)&&!a._href){a._href=a.href=a.href.replace(/.*\\/url.*[?&](?:url|q)=(http[^&]+).*/,function(a,b)decodeURIComponent(b));do{if(/\\brwt\\(/.test(a.getAttribute('onmousedown')))a.removeAttribute('onmousedown')}while((a=a.parentElement))}},true)})",
  "surrogate.glinks.sources": "!@^https?://[^/]+google\\..*/search",
  "surrogate.googletag.replacement": "if(typeof googletag==='undefined'){googletag={slots:{},cmd:$S({__noSuchMethod__:function(){return $S(this)},push:function(f){return f()}})};}googletag.defineSlot=function(){return $S({__noSuchMethod__:function(){return $S(this)}})};let _gt=googletag;googletag=new Proxy(_gt,{get:function(s,w,e){return w in s?s[w]:function(){return $S({__noSuchMethod__:function(){return googletag;}})};}});let _renderedAds=new Proxy({},{get:function(a,b){return b in a?a[b]:{size:[729,90]};}});let _adsRenderedInfo=new Proxy({get:function(n){return _renderedAds[n];}},{get:function(x,c){return c in x?x[c]:function(){};},set:function(x,c,v){}});Object.defineProperty(googletag,'adsRenderedInfo',{configurable:true,enumerable:true,set:function(){},get:function(){return _adsRenderedInfo;}});",
  "surrogate.googletag.sources": ".googletagservices.com",
  "surrogate.gravatar.sources": ".gravatar.com",
  "surrogate.gravatar.replacement": "Gravatar=$S({my_hash:'', profile_cb:function(){}, init:function(){}, __noSuchMethod__:function(){}})",
  "surrogate.microsoftSupport.replacement": "let c=document.getElementById('contentArea');if(c)c.style.display=''",
  "surrogate.microsoftSupport.sources": "!support.microsoft.com",
  "surrogate.modpagespeed.replacement": "let s=document.querySelector('noscript>meta[http-equiv=refresh]+style');if(s)s.parentNode.removeChild(s)",
  "surrogate.modpagespeed.sources": "!@^https?:",
  "surrogate.qs.sources": "*.quantserve.com",
  "surrogate.qs.replacement": "window.quantserve=function(){}",
  "surrogate.uniblue.sources": "!@.uniblue.com .liutilities.com",
  "surrogate.uniblue.replacement": "Array.forEach(document.links,function(l){if(/^https:\\/\\/store\\./.test(l.href)){l.setAttribute('href',l.href.replace(/.*?:/, ''));l.parentNode.replaceChild(l,l)}})",
  "surrogate.yieldman.sources": "*.yieldmanager.com",
  "surrogate.yieldman.replacement": "rmAddKey=rmAddCustomKey=rmShowAd=rmShowPop=rmShowInterstitial=rmGetQueryParameters=rmGetSize=rmGetWindowUrl=rmGetPubRedirect=rmGetClickUrl=rmReplace=rmTrim=rmUrlEncode=rmCanShowPop=rmCookieExists=rmWritePopFrequencyCookie=rmWritePopExpirationCookie=flashIntalledCookieExists=writeFlashInstalledCookie=flashDetection=rmGetCookie=function(){}",
  "surrogate.popunder.sources": "@^http:\\/\\/[\\w\\-\\.]+\\.[a-z]+ wyciwyg:",
  "surrogate.popunder.replacement": "(function(){var unloading=false;addEventListener('pagehide',function(){unloading=true;setTimeout(function(){unloading=false},100)},true);var cookie=document.__proto__.__lookupGetter__('cookie');document.__proto__.__defineGetter__('cookie',function() {if(unloading)return cookie.apply(this);var c='; popunder=yes; popundr=yes; setover18=1';return(cookie.apply(this).replace(c,'')+c).replace(/^; /, '')});var fid='_FID_'+(Date.now().toString(16));var open=window.__proto__.open;window.__proto__.open=function(url,target,features){try{if(!(/^_(?:top|parent|self)$/i.test(target)||target in frames)){var suspSrc,suspCall,ff=[],ss=new Error().stack.split('\\n').length;if(/popunde?r/i.test(target))return ko();for(var f,ev,aa=arguments;stackSize-->2&&aa.callee&&(f=aa.callee.caller)&&ff.indexOf(f)<0;ff.push(f)){aa=f.arguments;if(!aa)break;ev=aa[0];suspCall=f.name=='doPopUnder';if(!suspSrc)suspSrc=suspCall||/(?:\\bpopunde?r|\\bfocus\\b.*\\bblur|\\bblur\\b.*\\bfocus|[pP]uShown)\\b/.test(f.toSource());if(suspCall||ev&&typeof ev=='object'&&('type' in ev)&&ev.type=='click'&&ev.button===0&&(ev.currentTarget===document||('tagName' in ev.currentTarget)&&'body'==ev.currentTarget.tagName.toLowerCase())&&!(('href' in ev.target)&&ev.target.href&&(ev.target.href.indexOf(url)===0||url.indexOf(ev.target.href)===0))){if(suspSrc)return ko();}}}}catch(e){}return open.apply(null, arguments);function ko(){var fr=document.getElementById(fid)||document.body.appendChild(document.createElement('iframe'));fr.id=fid;fr.src='data:text/html,';fr.style.display='none';var w=fr.contentWindow;w.blur=function(){};return w;}}})()",
  "surrogate.popunder.exceptions": ".meebo.com",
  "surrogate.imdb.sources": "@*.imdb.com/video/*",
  "surrogate.imdb.replacement": "addEventListener('DOMContentLoaded',function(ev){ad_utils.render_ad=function(w){w.location=w.location.href.replace(/.*\\bTRAILER=([^&]+).*/,'$1')}},true)",
  "surrogate.nscookie.sources": "@*.facebook.com",
  "surrogate.nscookie.replacement": "document.cookie='noscript=; domain=.facebook.com; path=/; expires=Thu, 01-Jan-1970 00:00:01 GMT;'",
  "surrogate.imagebam.replacement": "(function(){if(\"over18\" in window){var _do=doOpen;doOpen=function(){};over18();doOpen=_do}else{var e=document.getElementById(Array.slice(document.getElementsByTagName(\"script\")).filter(function(s){return !!s.innerHTML})[0].innerHTML.match(/over18[\\s\\S]*?'([^']+)/)[1]);e.style.display='none'}})()",
  "surrogate.imagebam.sources": "!@*.imagebam.com",
  "surrogate.imagehaven.replacement": "['agreeCont','TransparentBlack'].forEach(function(id){var o=document.getElementById(id);if(o)o.style.display='none'})",
  "surrogate.imagehaven.sources": "!@*.imagehaven.net",
  "surrogate.imgreserve.sources": "!imgreserve.com",
  "surrogate.imgreserve.replacement": "let b=document.querySelector('input[value=\"YES\"]');if(b)b.addEventListener('click',function(){document.cookie='AgeVerification=1';location.href=location},true)",
  "surrogate.interstitialBox.replacement": "__defineSetter__('interstitialBox',function(){});__defineGetter__('interstitialBox',function(){return{}})",
  "surrogate.interstitialBox.sources": "@*.imagevenue.com",
  "surrogate.invodo.sources": ".invodo.com",
  "surrogate.invodo.replacement": "Invodo=$S({__noSuchMethod__:function(){}})",
  "surrogate.googleThumbs.replacement": "(function(){var ss=document.getElementsByTagName('script');var s,t,m,id,i;for(var j=ss.length;j-->0;)if(((s=ss[j])&&(t=s.firstChild&&s.firstChild.nodeValue)&&(id=t.match(/\\w+thumb\\d+/))&&(m=t.match(/['\"](data:[^'\"]+)/)))&&(i=document.getElementById(id)))i.src=m[1].replace(/\\\\(u[0-9a-f]{4}|x[0-9a-f]{2})/ig,function(a,b){return String.fromCharCode(parseInt(b.substring(1), 16))})})()",
  "surrogate.googleThumbs.sources": "!^https?://www\\.google\\.[a-z]+/search",
  "surrogate.amo.replacement": "addEventListener('click',function(e){if(e.button)return;var a=e.target.parentNode;var hash=a.getAttribute('data-hash');if(hash){var b=a.parentNode.parentNode;InstallTrigger.install({x:{URL:a.href,IconURL:b.getAttribute('data-icon'),Hash:hash,toString:function(){return a.href}}});e.preventDefault()}},false)",
  "surrogate.amo.sources": "!https://addons.mozilla.org/",
  "surrogate.ab_adsense.sources": "pagead2.googlesyndication.com",
  "surrogate.ab_adsense.replacement": "gaGlobal={}",
  "surrogate.ab_adscale.sources": "js.adscale.de",
  "surrogate.ab_adscale.replacement": "adscale={}",
  "surrogate.ab_adtiger.sources": "^http://ads\\.adtiger\\.",
  "surrogate.ab_adtiger.replacement": "adspirit_pid={}",
  "surrogate.ab_bidvertiser.sources": "^http://bdv\\.bidvert",
  "surrogate.ab_bidvertiser.replacement": "report_error=function(){}",
  "surrogate.ab_binlayer.sources": "^http://view\\.binlay(?:er)\\.",
  "surrogate.ab_binlayer.replacement": "blLayer={}",
  "surrogate.ab_mirago.sources": "^http://intext\\.mirago\\.",
  "surrogate.ab_mirago.replacement": "HLSysBannerUrl=''",
  "surrogate.ab_mirando.sources": "^http://get\\.mirando\\.",
  "surrogate.ab_mirando.replacement": "Mirando={}",
  "surrogate.facebook_connect.sources": "connect.facebook.net",
  "surrogate.facebook_connect.replacement": "FB=(function(){var f=$S(arguments.callee);return f.__noSuchMethod__=f.Event=f.XFBML=f;})();",
  "surrogate.revsci.sources": "js.revsci.net",
  "surrogate.revsci.replacement": "rsinetsegs=[];DM_addEncToLoc=DM_tag=function(){};",
  "surrogate.adriver.sources": "ad.adriver.ru/cgi-bin/erle.cgi",
  "surrogate.adriver.replacement": "if(top!==self&&top.location.href===location.href)setTimeout('try{document.close();}catch(e){}',100)",
  "surrogate.twitter.sources": "platform.twitter.com",
  "surrogate.twitter.replacement": "twttr=(function(){var f=$S(arguments.callee); var ro = f.__noSuchMethod__=f.events=f.anywhere=f; ro.widgets=$S({__noSuchMethod__:function(){}}); return ro})();",
  "surrogate.plusone.sources": "apis.google.com/js/plusone.js",
  "surrogate.plusone.replacement": "gapi=(function(){var f=$S(arguments.callee);return f.__noSuchMethod__=f.plusone=f;})();",
  "surrogate.disqus-theme.sources": ">.disqus.com/*/build/themes/t_c4ca4238a0b923820dcc509a6f75849b.js*",
  "surrogate.disqus-theme.replacement": "DISQUS.dtpl.actions.register('comments.reply.new.onLoadingStart', function() { DISQUS.dtpl.actions.remove('comments.reply.new.onLoadingStart'); DISQUS.dtpl.actions.remove('comments.reply.new.onLoadingEnd');});",
  "surrogate.skimlinks.sources": ".skimlinks.com/api/",
  "surrogate.skimlinks.replacement": "window.skimlinks=function(){}",
  "surrogate.picbucks.sources": "!*.picbucks.com  http://www.imagebax.com/show.php/*",
  "surrogate.picbucks.replacement": "Array.forEach(document.getElementsByTagName('script'), function(s){let m = s.textContent.match(/(?:Lbjs\\.TargetUrl\\s*=\\s*|Array\\s*\\().*(\\bhttp[^'\"]*)/); if (m) { location.href = m[1]; throw 'break'; }})",
  "surrogate.imagebunk.sources": "!http://imagebunk.com/image/*",
  "surrogate.imagebunk.replacement": "document.body.insertBefore(document.getElementById('img_obj'), document.body.firstChild)",
  "surrogate.picsee.sources": "!^https?://picsee\\.net/2\\d.*\\.html",
  "surrogate.picsee.replacement": "location.replace(location.href.replace(/(\\/2\\d{3}[^\\/]*)(.*)\\.html/, '/upload$1/$2'));",
  "surrogate.owasp_antiClickjack.sources": "!^https?://",
  "surrogate.owasp_antiClickjack.replacement": "if(window.top===window&&document.body.offsetWidth===0)['body','documentElement'].forEach(function(e){document[e].style.setProperty('display','unset','important')})",
  "surrogate.gigya.replacement": "gigya=$S({__noSuchMethod__:function(){}, isGigya:true, __initialized:true});gigya.socialize=$S({__noSuchMethod__:function(){}, addEventHandlers:function(){}});gigya.accounts=$S({__noSuchMethod__:function(){}})",
  "surrogate.gigya.sources": ".gigya.com",
  "surrogate.stripe.replacement": "Stripe=$S({__noSuchMethod__:function(){}})",
  "surrogate.stripe.sources": "js.stripe.com",
  "surrogate.wp.sources": "!^.*\\/20\\d{2}\\/\\d{2}\\/\\d{2}\\/",
  "surrogate.wp.replacement": "let s=document.createElement('style');s.textContent='.site{opacity: 1 !important}';document.documentElement.appendChild(s)",
  "fakeScriptLoadEvents.enabled": true,
  "fakeScriptLoadEvents.onlyRequireJS": true,
  "fakeScriptLoadEvents.exceptions": "",
  "fakeScriptLoadEvents.docExceptions": "",
  "placeholderMinSize": 32,
  "placeholderLongTip": true,
  "placeholderCollapseOnClose": false,
  "compat.evernote": true,
  "compat.gnotes": true,
  "forbidXSLT": true,
  "oldStylePartial": false,
  "proxiedDNS": 0,
  "placesPrefs": false,
  "ABE.enabled": true,
  "ABE.siteEnabled": false,
  "ABE.allowRulesetRedir": false,
  "ABE.legacyPrompt": false,
  "ABE.disabledRulesetNames": "",
  "ABE.skipBrowserRequests": true,
  "ABE.notify": true,
  "ABE.notify.namedLoopback": false,
  "ABE.wanIpAsLocal": true,
  "ABE.wanIpCheckURL": "https://secure.informaction.com/ipecho/",
  "ABE.localExtras": "",
  "asyncNetworking": true,
  "inclusionTypeChecking": true,
  "inclusionTypeChecking.exceptions": "https://scache.vzw.com/ http://cache.vzw.com .sony-europe.com .amazonaws.com .hp-ww.com .yandex.st cdn.directvid.com/*.jsx",
  "inclusionTypeChecking.checkDynamic": false,
  "nosniff": true,
  "recentlyBlockedCount": 10,
  "showRecentlyBlocked": true,
  "recentlyBlockedLevel": 0,
  "frameOptions.enabled": true,
  "frameOptions.parentWhitelist": "https://mail.google.com/*",
  "logDNS": false,
  "subscription.lastCheck": 0,
  "subscription.checkInterval": 24,
  "subscription.trustedURL": "",
  "subscription.untrustedURL": "",
  "siteInfoProvider": "https://noscript.net/about/%utf8%;%ace%",
  "alwaysShowObjectSources": false,
  "ef.enabled": false,
  "showBlankSources": false,
  "preset": "medium",
  "forbidBGRefresh": 1,
  "forbidBGRefresh.exceptions": ".mozilla.org",
  "toStaticHTML": true,
  "liveConnectInterception": true,
  "audioApiInterception": true,
  "doNotTrack.enabled": true,
  "doNotTrack.exceptions": "",
  "doNotTrack.forced": "",
  "ajaxFallback.enabled": true,
  "sync.enabled": false,
  "ABE.rulesets.SYSTEM": "# Prevent Internet sites from requesting LAN resources.\r\nSite LOCAL\r\nAccept from LOCAL\r\nDeny",
  "ABE.rulesets.USER": "# User-defined rules. Feel free to experiment here.\r\n",
  "ABE.migration": 0,
  "smartClickToPlay": true,
  "removalWarning": true,
  "middlemouse_temp_allow_main_site": true,
  "webext.enabled": true
}, Legacy.migrated.prefs
);
