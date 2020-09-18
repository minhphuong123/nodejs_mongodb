/*!
 * Wert Theme Plugins v1.0.0
 * A library which contains all used plugins in a minified version.
 * Author: Copyright (c) IshYoBoy.com <@ishyoboy.com> <http://ishyoboy.com>
 * Url: http://ishyoboy.com
 * License: ISC
 */
/*!
 * Wert Theme Plugins v1.0.0
 * A library which contains all used plugins in a minified version.
 * Author: Copyright (c) IshYoBoy.com <@ishyoboy.com> <http://ishyoboy.com>
 * Url: http://ishyoboy.com
 * License: ISC
 */
/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = function(window, document, undefined) {
        function setCss(str) { mStyle.cssText = str }

        function setCssAll(str1, str2) { return setCss(prefixes.join(str1 + ";") + (str2 || "")) }

        function is(obj, type) { return typeof obj === type }

        function contains(str, substr) { return !!~("" + str).indexOf(substr) }

        function testProps(props, prefixed) { for (var i in props) { var prop = props[i]; if (!contains(prop, "-") && mStyle[prop] !== undefined) return "pfx" != prefixed || prop } return !1 }

        function testDOMProps(props, obj, elem) { for (var i in props) { var item = obj[props[i]]; if (item !== undefined) return elem === !1 ? props[i] : is(item, "function") ? item.bind(elem || obj) : item } return !1 }

        function testPropsAll(prop, prefixed, elem) {
            var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
                props = (prop + " " + cssomPrefixes.join(ucProp + " ") + ucProp).split(" ");
            return is(prefixed, "string") || is(prefixed, "undefined") ? testProps(props, prefixed) : (props = (prop + " " + domPrefixes.join(ucProp + " ") + ucProp).split(" "), testDOMProps(props, prefixed, elem))
        }

        function webforms() { Modernizr.input = function(props) { for (var i = 0, len = props.length; i < len; i++) attrs[props[i]] = !!(props[i] in inputElem); return attrs.list && (attrs.list = !(!document.createElement("datalist") || !window.HTMLDataListElement)), attrs }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), Modernizr.inputtypes = function(props) { for (var bool, inputElemType, defaultView, i = 0, len = props.length; i < len; i++) inputElem.setAttribute("type", inputElemType = props[i]), bool = "text" !== inputElem.type, bool && (inputElem.value = smile, inputElem.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ? (docElement.appendChild(inputElem), defaultView = document.defaultView, bool = defaultView.getComputedStyle && "textfield" !== defaultView.getComputedStyle(inputElem, null).WebkitAppearance && 0 !== inputElem.offsetHeight, docElement.removeChild(inputElem)) : /^(search|tel)$/.test(inputElemType) || (bool = /^(url|email)$/.test(inputElemType) ? inputElem.checkValidity && inputElem.checkValidity() === !1 : inputElem.value != smile)), inputs[props[i]] = !!bool; return inputs }("search tel url email datetime date month week time datetime-local number range color".split(" ")) }
        var featureName, hasOwnProp, version = "2.8.3",
            Modernizr = {},
            enableClasses = !0,
            docElement = document.documentElement,
            mod = "modernizr",
            modElem = document.createElement(mod),
            mStyle = modElem.style,
            inputElem = document.createElement("input"),
            smile = ":)",
            toString = {}.toString,
            prefixes = " -webkit- -moz- -o- -ms- ".split(" "),
            omPrefixes = "Webkit Moz O ms",
            cssomPrefixes = omPrefixes.split(" "),
            domPrefixes = omPrefixes.toLowerCase().split(" "),
            ns = { svg: "http://www.w3.org/2000/svg" },
            tests = {},
            inputs = {},
            attrs = {},
            classes = [],
            slice = classes.slice,
            injectElementWithStyles = function(rule, callback, nodes, testnames) {
                var style, ret, node, docOverflow, div = document.createElement("div"),
                    body = document.body,
                    fakeBody = body || document.createElement("body");
                if (parseInt(nodes, 10))
                    for (; nodes--;) node = document.createElement("div"), node.id = testnames ? testnames[nodes] : mod + (nodes + 1), div.appendChild(node);
                return style = ["&#173;", '<style id="s', mod, '">', rule, "</style>"].join(""), div.id = mod, (body ? div : fakeBody).innerHTML += style, fakeBody.appendChild(div), body || (fakeBody.style.background = "", fakeBody.style.overflow = "hidden", docOverflow = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(fakeBody)), ret = callback(div, rule), body ? div.parentNode.removeChild(div) : (fakeBody.parentNode.removeChild(fakeBody), docElement.style.overflow = docOverflow), !!ret
            },
            testMediaQuery = function(mq) { var matchMedia = window.matchMedia || window.msMatchMedia; if (matchMedia) return matchMedia(mq) && matchMedia(mq).matches || !1; var bool; return injectElementWithStyles("@media " + mq + " { #" + mod + " { position: absolute; } }", function(node) { bool = "absolute" == (window.getComputedStyle ? getComputedStyle(node, null) : node.currentStyle).position }), bool },
            isEventSupported = function() {
                function isEventSupported(eventName, element) { element = element || document.createElement(TAGNAMES[eventName] || "div"), eventName = "on" + eventName; var isSupported = eventName in element; return isSupported || (element.setAttribute || (element = document.createElement("div")), element.setAttribute && element.removeAttribute && (element.setAttribute(eventName, ""), isSupported = is(element[eventName], "function"), is(element[eventName], "undefined") || (element[eventName] = undefined), element.removeAttribute(eventName))), element = null, isSupported }
                var TAGNAMES = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };
                return isEventSupported
            }(),
            _hasOwnProperty = {}.hasOwnProperty;
        hasOwnProp = is(_hasOwnProperty, "undefined") || is(_hasOwnProperty.call, "undefined") ? function(object, property) { return property in object && is(object.constructor.prototype[property], "undefined") } : function(object, property) { return _hasOwnProperty.call(object, property) }, Function.prototype.bind || (Function.prototype.bind = function(that) {
            var target = this;
            if ("function" != typeof target) throw new TypeError;
            var args = slice.call(arguments, 1),
                bound = function() {
                    if (this instanceof bound) {
                        var F = function() {};
                        F.prototype = target.prototype;
                        var self = new F,
                            result = target.apply(self, args.concat(slice.call(arguments)));
                        return Object(result) === result ? result : self
                    }
                    return target.apply(that, args.concat(slice.call(arguments)))
                };
            return bound
        }), tests.flexbox = function() { return testPropsAll("flexWrap") }, tests.flexboxlegacy = function() { return testPropsAll("boxDirection") }, tests.canvas = function() { var elem = document.createElement("canvas"); return !(!elem.getContext || !elem.getContext("2d")) }, tests.canvastext = function() { return !(!Modernizr.canvas || !is(document.createElement("canvas").getContext("2d").fillText, "function")) }, tests.webgl = function() { return !!window.WebGLRenderingContext }, tests.touch = function() { var bool; return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch ? bool = !0 : injectElementWithStyles(["@media (", prefixes.join("touch-enabled),("), mod, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(node) { bool = 9 === node.offsetTop }), bool }, tests.geolocation = function() { return "geolocation" in navigator }, tests.postmessage = function() { return !!window.postMessage }, tests.websqldatabase = function() { return !!window.openDatabase }, tests.indexedDB = function() { return !!testPropsAll("indexedDB", window) }, tests.hashchange = function() { return isEventSupported("hashchange", window) && (document.documentMode === undefined || document.documentMode > 7) }, tests.history = function() { return !(!window.history || !history.pushState) }, tests.draganddrop = function() { var div = document.createElement("div"); return "draggable" in div || "ondragstart" in div && "ondrop" in div }, tests.websockets = function() { return "WebSocket" in window || "MozWebSocket" in window }, tests.rgba = function() { return setCss("background-color:rgba(150,255,150,.5)"), contains(mStyle.backgroundColor, "rgba") }, tests.hsla = function() { return setCss("background-color:hsla(120,40%,100%,.5)"), contains(mStyle.backgroundColor, "rgba") || contains(mStyle.backgroundColor, "hsla") }, tests.multiplebgs = function() { return setCss("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(mStyle.background) }, tests.backgroundsize = function() { return testPropsAll("backgroundSize") }, tests.borderimage = function() { return testPropsAll("borderImage") }, tests.borderradius = function() { return testPropsAll("borderRadius") }, tests.boxshadow = function() { return testPropsAll("boxShadow") }, tests.textshadow = function() { return "" === document.createElement("div").style.textShadow }, tests.opacity = function() { return setCssAll("opacity:.55"), /^0.55$/.test(mStyle.opacity) }, tests.cssanimations = function() { return testPropsAll("animationName") }, tests.csscolumns = function() { return testPropsAll("columnCount") }, tests.cssgradients = function() {
            var str1 = "background-image:",
                str2 = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                str3 = "linear-gradient(left top,#9f9, white);";
            return setCss((str1 + "-webkit- ".split(" ").join(str2 + str1) + prefixes.join(str3 + str1)).slice(0, -str1.length)), contains(mStyle.backgroundImage, "gradient")
        }, tests.cssreflections = function() { return testPropsAll("boxReflect") }, tests.csstransforms = function() { return !!testPropsAll("transform") }, tests.csstransforms3d = function() { var ret = !!testPropsAll("perspective"); return ret && "webkitPerspective" in docElement.style && injectElementWithStyles("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(node, rule) { ret = 9 === node.offsetLeft && 3 === node.offsetHeight }), ret }, tests.csstransitions = function() { return testPropsAll("transition") }, tests.fontface = function() {
            var bool;
            return injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function(node, rule) {
                var style = document.getElementById("smodernizr"),
                    sheet = style.sheet || style.styleSheet,
                    cssText = sheet ? sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || "" : "";
                bool = /src/i.test(cssText) && 0 === cssText.indexOf(rule.split(" ")[0])
            }), bool
        }, tests.generatedcontent = function() { var bool; return injectElementWithStyles(["#", mod, "{font:0/0 a}#", mod, ':after{content:"', smile, '";visibility:hidden;font:3px/1 a}'].join(""), function(node) { bool = node.offsetHeight >= 3 }), bool }, tests.video = function() {
            var elem = document.createElement("video"),
                bool = !1;
            try {
                (bool = !!elem.canPlayType) && (bool = new Boolean(bool), bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (e) {}
            return bool
        }, tests.audio = function() {
            var elem = document.createElement("audio"),
                bool = !1;
            try {
                (bool = !!elem.canPlayType) && (bool = new Boolean(bool), bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), bool.mp3 = elem.canPlayType("audio/mpeg;").replace(/^no$/, ""), bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), bool.m4a = (elem.canPlayType("audio/x-m4a;") || elem.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (e) {}
            return bool
        }, tests.localstorage = function() { try { return localStorage.setItem(mod, mod), localStorage.removeItem(mod), !0 } catch (e) { return !1 } }, tests.sessionstorage = function() { try { return sessionStorage.setItem(mod, mod), sessionStorage.removeItem(mod), !0 } catch (e) { return !1 } }, tests.webworkers = function() { return !!window.Worker }, tests.applicationcache = function() { return !!window.applicationCache }, tests.svg = function() { return !!document.createElementNS && !!document.createElementNS(ns.svg, "svg").createSVGRect }, tests.inlinesvg = function() { var div = document.createElement("div"); return div.innerHTML = "<svg/>", (div.firstChild && div.firstChild.namespaceURI) == ns.svg }, tests.smil = function() { return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, "animate"))) }, tests.svgclippaths = function() { return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, "clipPath"))) };
        for (var feature in tests) hasOwnProp(tests, feature) && (featureName = feature.toLowerCase(), Modernizr[featureName] = tests[feature](), classes.push((Modernizr[featureName] ? "" : "no-") + featureName));
        return Modernizr.input || webforms(), Modernizr.addTest = function(feature, test) {
                if ("object" == typeof feature)
                    for (var key in feature) hasOwnProp(feature, key) && Modernizr.addTest(key, feature[key]);
                else {
                    if (feature = feature.toLowerCase(), Modernizr[feature] !== undefined) return Modernizr;
                    test = "function" == typeof test ? test() : test, "undefined" != typeof enableClasses && enableClasses && (docElement.className += " " + (test ? "" : "no-") + feature), Modernizr[feature] = test
                }
                return Modernizr
            }, setCss(""), modElem = inputElem = null,
            function(window, document) {
                function addStyleSheet(ownerDocument, cssText) {
                    var p = ownerDocument.createElement("p"),
                        parent = ownerDocument.getElementsByTagName("head")[0] || ownerDocument.documentElement;
                    return p.innerHTML = "x<style>" + cssText + "</style>", parent.insertBefore(p.lastChild, parent.firstChild)
                }

                function getElements() { var elements = html5.elements; return "string" == typeof elements ? elements.split(" ") : elements }

                function getExpandoData(ownerDocument) { var data = expandoData[ownerDocument[expando]]; return data || (data = {}, expanID++, ownerDocument[expando] = expanID, expandoData[expanID] = data), data }

                function createElement(nodeName, ownerDocument, data) {
                    if (ownerDocument || (ownerDocument = document), supportsUnknownElements) return ownerDocument.createElement(nodeName);
                    data || (data = getExpandoData(ownerDocument));
                    var node;
                    return node = data.cache[nodeName] ? data.cache[nodeName].cloneNode() : saveClones.test(nodeName) ? (data.cache[nodeName] = data.createElem(nodeName)).cloneNode() : data.createElem(nodeName), !node.canHaveChildren || reSkip.test(nodeName) || node.tagUrn ? node : data.frag.appendChild(node)
                }

                function createDocumentFragment(ownerDocument, data) {
                    if (ownerDocument || (ownerDocument = document), supportsUnknownElements) return ownerDocument.createDocumentFragment();
                    data = data || getExpandoData(ownerDocument);
                    for (var clone = data.frag.cloneNode(), i = 0, elems = getElements(), l = elems.length; i < l; i++) clone.createElement(elems[i]);
                    return clone
                }

                function shivMethods(ownerDocument, data) { data.cache || (data.cache = {}, data.createElem = ownerDocument.createElement, data.createFrag = ownerDocument.createDocumentFragment, data.frag = data.createFrag()), ownerDocument.createElement = function(nodeName) { return html5.shivMethods ? createElement(nodeName, ownerDocument, data) : data.createElem(nodeName) }, ownerDocument.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + getElements().join().replace(/[\w\-]+/g, function(nodeName) { return data.createElem(nodeName), data.frag.createElement(nodeName), 'c("' + nodeName + '")' }) + ");return n}")(html5, data.frag) }

                function shivDocument(ownerDocument) { ownerDocument || (ownerDocument = document); var data = getExpandoData(ownerDocument); return !html5.shivCSS || supportsHtml5Styles || data.hasCSS || (data.hasCSS = !!addStyleSheet(ownerDocument, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), supportsUnknownElements || shivMethods(ownerDocument, data), ownerDocument }
                var supportsHtml5Styles, supportsUnknownElements, version = "3.7.0",
                    options = window.html5 || {},
                    reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    expando = "_html5shiv",
                    expanID = 0,
                    expandoData = {};
                ! function() {
                    try {
                        var a = document.createElement("a");
                        a.innerHTML = "<xyz></xyz>", supportsHtml5Styles = "hidden" in a, supportsUnknownElements = 1 == a.childNodes.length || function() { document.createElement("a"); var frag = document.createDocumentFragment(); return "undefined" == typeof frag.cloneNode || "undefined" == typeof frag.createDocumentFragment || "undefined" == typeof frag.createElement }()
                    } catch (e) { supportsHtml5Styles = !0, supportsUnknownElements = !0 }
                }();
                var html5 = { elements: options.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: version, shivCSS: options.shivCSS !== !1, supportsUnknownElements: supportsUnknownElements, shivMethods: options.shivMethods !== !1, type: "default", shivDocument: shivDocument, createElement: createElement, createDocumentFragment: createDocumentFragment };
                window.html5 = html5, shivDocument(document)
            }(this, document), Modernizr._version = version, Modernizr._prefixes = prefixes, Modernizr._domPrefixes = domPrefixes, Modernizr._cssomPrefixes = cssomPrefixes, Modernizr.mq = testMediaQuery, Modernizr.hasEvent = isEventSupported, Modernizr.testProp = function(prop) { return testProps([prop]) }, Modernizr.testAllProps = testPropsAll, Modernizr.testStyles = injectElementWithStyles, Modernizr.prefixed = function(prop, obj, elem) { return obj ? testPropsAll(prop, obj, elem) : testPropsAll(prop, "pfx") }, docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (enableClasses ? " js " + classes.join(" ") : ""), Modernizr
    }(this, this.document),
    /*!
     * jQuery JavaScript Library v1.11.3
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2015-04-28T16:19Z
     */
    function(global, factory) { "object" == typeof module && "object" == typeof module.exports ? module.exports = global.document ? factory(global, !0) : function(w) { if (!w.document) throw new Error("jQuery requires a window with a document"); return factory(w) } : factory(global) }("undefined" != typeof window ? window : this, function(window, noGlobal) {
        function isArraylike(obj) {
            var length = "length" in obj && obj.length,
                type = jQuery.type(obj);
            return "function" !== type && !jQuery.isWindow(obj) && (!(1 !== obj.nodeType || !length) || "array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj)
        }

        function winnow(elements, qualifier, not) {
            if (jQuery.isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) { return !!qualifier.call(elem, i, elem) !== not });
            if (qualifier.nodeType) return jQuery.grep(elements, function(elem) { return elem === qualifier !== not });
            if ("string" == typeof qualifier) {
                if (risSimple.test(qualifier)) return jQuery.filter(qualifier, elements, not);
                qualifier = jQuery.filter(qualifier, elements)
            }
            return jQuery.grep(elements, function(elem) { return jQuery.inArray(elem, qualifier) >= 0 !== not })
        }

        function sibling(cur, dir) { do cur = cur[dir]; while (cur && 1 !== cur.nodeType); return cur }

        function createOptions(options) { var object = optionsCache[options] = {}; return jQuery.each(options.match(rnotwhite) || [], function(_, flag) { object[flag] = !0 }), object }

        function detach() { document.addEventListener ? (document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1)) : (document.detachEvent("onreadystatechange", completed), window.detachEvent("onload", completed)) }

        function completed() {
            (document.addEventListener || "load" === event.type || "complete" === document.readyState) && (detach(), jQuery.ready())
        }

        function dataAttr(elem, key, data) {
            if (void 0 === data && 1 === elem.nodeType) {
                var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
                if (data = elem.getAttribute(name), "string" == typeof data) {
                    try { data = "true" === data || "false" !== data && ("null" === data ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data) } catch (e) {}
                    jQuery.data(elem, key, data)
                } else data = void 0
            }
            return data
        }

        function isEmptyDataObject(obj) {
            var name;
            for (name in obj)
                if (("data" !== name || !jQuery.isEmptyObject(obj[name])) && "toJSON" !== name) return !1;
            return !0
        }

        function internalData(elem, name, data, pvt) {
            if (jQuery.acceptData(elem)) {
                var ret, thisCache, internalKey = jQuery.expando,
                    isNode = elem.nodeType,
                    cache = isNode ? jQuery.cache : elem,
                    id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
                if (id && cache[id] && (pvt || cache[id].data) || void 0 !== data || "string" != typeof name) return id || (id = isNode ? elem[internalKey] = deletedIds.pop() || jQuery.guid++ : internalKey), cache[id] || (cache[id] = isNode ? {} : { toJSON: jQuery.noop }), "object" != typeof name && "function" != typeof name || (pvt ? cache[id] = jQuery.extend(cache[id], name) : cache[id].data = jQuery.extend(cache[id].data, name)), thisCache = cache[id], pvt || (thisCache.data || (thisCache.data = {}), thisCache = thisCache.data), void 0 !== data && (thisCache[jQuery.camelCase(name)] = data), "string" == typeof name ? (ret = thisCache[name], null == ret && (ret = thisCache[jQuery.camelCase(name)])) : ret = thisCache, ret
            }
        }

        function internalRemoveData(elem, name, pvt) {
            if (jQuery.acceptData(elem)) {
                var thisCache, i, isNode = elem.nodeType,
                    cache = isNode ? jQuery.cache : elem,
                    id = isNode ? elem[jQuery.expando] : jQuery.expando;
                if (cache[id]) { if (name && (thisCache = pvt ? cache[id] : cache[id].data)) { jQuery.isArray(name) ? name = name.concat(jQuery.map(name, jQuery.camelCase)) : name in thisCache ? name = [name] : (name = jQuery.camelCase(name), name = name in thisCache ? [name] : name.split(" ")), i = name.length; for (; i--;) delete thisCache[name[i]]; if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) return }(pvt || (delete cache[id].data, isEmptyDataObject(cache[id]))) && (isNode ? jQuery.cleanData([elem], !0) : support.deleteExpando || cache != cache.window ? delete cache[id] : cache[id] = null) }
            }
        }

        function returnTrue() { return !0 }

        function returnFalse() { return !1 }

        function safeActiveElement() { try { return document.activeElement } catch (err) {} }

        function createSafeFragment(document) {
            var list = nodeNames.split("|"),
                safeFrag = document.createDocumentFragment();
            if (safeFrag.createElement)
                for (; list.length;) safeFrag.createElement(list.pop());
            return safeFrag
        }

        function getAll(context, tag) {
            var elems, elem, i = 0,
                found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== strundefined ? context.querySelectorAll(tag || "*") : void 0;
            if (!found)
                for (found = [], elems = context.childNodes || context; null != (elem = elems[i]); i++) !tag || jQuery.nodeName(elem, tag) ? found.push(elem) : jQuery.merge(found, getAll(elem, tag));
            return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found
        }

        function fixDefaultChecked(elem) { rcheckableType.test(elem.type) && (elem.defaultChecked = elem.checked) }

        function manipulationTarget(elem, content) { return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem }

        function disableScript(elem) { return elem.type = (null !== jQuery.find.attr(elem, "type")) + "/" + elem.type, elem }

        function restoreScript(elem) { var match = rscriptTypeMasked.exec(elem.type); return match ? elem.type = match[1] : elem.removeAttribute("type"), elem }

        function setGlobalEval(elems, refElements) { for (var elem, i = 0; null != (elem = elems[i]); i++) jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval")) }

        function cloneCopyEvent(src, dest) {
            if (1 === dest.nodeType && jQuery.hasData(src)) {
                var type, i, l, oldData = jQuery._data(src),
                    curData = jQuery._data(dest, oldData),
                    events = oldData.events;
                if (events) {
                    delete curData.handle, curData.events = {};
                    for (type in events)
                        for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i])
                }
                curData.data && (curData.data = jQuery.extend({}, curData.data))
            }
        }

        function fixCloneNodeIssues(src, dest) {
            var nodeName, e, data;
            if (1 === dest.nodeType) {
                if (nodeName = dest.nodeName.toLowerCase(), !support.noCloneEvent && dest[jQuery.expando]) {
                    data = jQuery._data(dest);
                    for (e in data.events) jQuery.removeEvent(dest, e, data.handle);
                    dest.removeAttribute(jQuery.expando)
                }
                "script" === nodeName && dest.text !== src.text ? (disableScript(dest).text = src.text, restoreScript(dest)) : "object" === nodeName ? (dest.parentNode && (dest.outerHTML = src.outerHTML), support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML) && (dest.innerHTML = src.innerHTML)) : "input" === nodeName && rcheckableType.test(src.type) ? (dest.defaultChecked = dest.checked = src.checked, dest.value !== src.value && (dest.value = src.value)) : "option" === nodeName ? dest.defaultSelected = dest.selected = src.defaultSelected : "input" !== nodeName && "textarea" !== nodeName || (dest.defaultValue = src.defaultValue)
            }
        }

        function actualDisplay(name, doc) {
            var style, elem = jQuery(doc.createElement(name)).appendTo(doc.body),
                display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
            return elem.detach(), display
        }

        function defaultDisplay(nodeName) {
            var doc = document,
                display = elemdisplay[nodeName];
            return display || (display = actualDisplay(nodeName, doc), "none" !== display && display || (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement), doc = (iframe[0].contentWindow || iframe[0].contentDocument).document, doc.write(), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach()), elemdisplay[nodeName] = display), display
        }

        function addGetHookIf(conditionFn, hookFn) { return { get: function() { var condition = conditionFn(); if (null != condition) return condition ? void delete this.get : (this.get = hookFn).apply(this, arguments) } } }

        function vendorPropName(style, name) {
            if (name in style) return name;
            for (var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length; i--;)
                if (name = cssPrefixes[i] + capName, name in style) return name;
            return origName
        }

        function showHide(elements, show) { for (var display, elem, hidden, values = [], index = 0, length = elements.length; index < length; index++) elem = elements[index], elem.style && (values[index] = jQuery._data(elem, "olddisplay"), display = elem.style.display, show ? (values[index] || "none" !== display || (elem.style.display = ""), "" === elem.style.display && isHidden(elem) && (values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName)))) : (hidden = isHidden(elem), (display && "none" !== display || !hidden) && jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display")))); for (index = 0; index < length; index++) elem = elements[index], elem.style && (show && "none" !== elem.style.display && "" !== elem.style.display || (elem.style.display = show ? values[index] || "" : "none")); return elements }

        function setPositiveNumber(elem, value, subtract) { var matches = rnumsplit.exec(value); return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value }

        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) { for (var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0, val = 0; i < 4; i += 2) "margin" === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), isBorderBox ? ("content" === extra && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), "margin" !== extra && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), "padding" !== extra && (val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))); return val }

        function getWidthOrHeight(elem, name, extra) {
            var valueIsBorderBox = !0,
                val = "width" === name ? elem.offsetWidth : elem.offsetHeight,
                styles = getStyles(elem),
                isBorderBox = support.boxSizing && "border-box" === jQuery.css(elem, "boxSizing", !1, styles);
            if (val <= 0 || null == val) {
                if (val = curCSS(elem, name, styles), (val < 0 || null == val) && (val = elem.style[name]), rnumnonpx.test(val)) return val;
                valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]), val = parseFloat(val) || 0
            }
            return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
        }

        function Tween(elem, options, prop, end, easing) { return new Tween.prototype.init(elem, options, prop, end, easing) }

        function createFxNow() { return setTimeout(function() { fxNow = void 0 }), fxNow = jQuery.now() }

        function genFx(type, includeWidth) {
            var which, attrs = { height: type },
                i = 0;
            for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth) which = cssExpand[i], attrs["margin" + which] = attrs["padding" + which] = type;
            return includeWidth && (attrs.opacity = attrs.width = type), attrs
        }

        function createTween(value, prop, animation) {
            for (var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length; index < length; index++)
                if (tween = collection[index].call(animation, prop, value)) return tween
        }

        function defaultPrefilter(elem, props, opts) {
            var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this,
                orig = {},
                style = elem.style,
                hidden = elem.nodeType && isHidden(elem),
                dataShow = jQuery._data(elem, "fxshow");
            opts.queue || (hooks = jQuery._queueHooks(elem, "fx"), null == hooks.unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() { hooks.unqueued || oldfire() }), hooks.unqueued++, anim.always(function() { anim.always(function() { hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire() }) })), 1 === elem.nodeType && ("height" in props || "width" in props) && (opts.overflow = [style.overflow, style.overflowX, style.overflowY], display = jQuery.css(elem, "display"), checkDisplay = "none" === display ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display, "inline" === checkDisplay && "none" === jQuery.css(elem, "float") && (support.inlineBlockNeedsLayout && "inline" !== defaultDisplay(elem.nodeName) ? style.zoom = 1 : style.display = "inline-block")), opts.overflow && (style.overflow = "hidden", support.shrinkWrapBlocks() || anim.always(function() { style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2] }));
            for (prop in props)
                if (value = props[prop], rfxtypes.exec(value)) {
                    if (delete props[prop], toggle = toggle || "toggle" === value, value === (hidden ? "hide" : "show")) {
                        if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;
                        hidden = !0
                    }
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
                } else display = void 0;
            if (jQuery.isEmptyObject(orig)) "inline" === ("none" === display ? defaultDisplay(elem.nodeName) : display) && (style.display = display);
            else {
                dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = jQuery._data(elem, "fxshow", {}), toggle && (dataShow.hidden = !hidden), hidden ? jQuery(elem).show() : anim.done(function() { jQuery(elem).hide() }), anim.done(function() {
                    var prop;
                    jQuery._removeData(elem, "fxshow");
                    for (prop in orig) jQuery.style(elem, prop, orig[prop])
                });
                for (prop in orig) tween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = tween.start, hidden && (tween.end = tween.start, tween.start = "width" === prop || "height" === prop ? 1 : 0))
            }
        }

        function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props)
                if (name = jQuery.camelCase(index), easing = specialEasing[name], value = props[index], jQuery.isArray(value) && (easing = value[1], value = props[index] = value[0]), index !== name && (props[name] = value, delete props[index]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) { value = hooks.expand(value), delete props[name]; for (index in value) index in props || (props[index] = value[index], specialEasing[index] = easing) } else specialEasing[name] = easing
        }

        function Animation(elem, properties, options) {
            var result, stopped, index = 0,
                length = animationPrefilters.length,
                deferred = jQuery.Deferred().always(function() { delete tick.elem }),
                tick = function() { if (stopped) return !1; for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length; index < length; index++) animation.tweens[index].run(percent); return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (deferred.resolveWith(elem, [animation]), !1) },
                animation = deferred.promise({
                    elem: elem,
                    props: jQuery.extend({}, properties),
                    opts: jQuery.extend(!0, { specialEasing: {} }, options),
                    originalProperties: properties,
                    originalOptions: options,
                    startTime: fxNow || createFxNow(),
                    duration: options.duration,
                    tweens: [],
                    createTween: function(prop, end) { var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing); return animation.tweens.push(tween), tween },
                    stop: function(gotoEnd) {
                        var index = 0,
                            length = gotoEnd ? animation.tweens.length : 0;
                        if (stopped) return this;
                        for (stopped = !0; index < length; index++) animation.tweens[index].run(1);
                        return gotoEnd ? deferred.resolveWith(elem, [animation, gotoEnd]) : deferred.rejectWith(elem, [animation, gotoEnd]), this
                    }
                }),
                props = animation.props;
            for (propFilter(props, animation.opts.specialEasing); index < length; index++)
                if (result = animationPrefilters[index].call(animation, elem, props, animation.opts)) return result;
            return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, { elem: elem, anim: animation, queue: animation.opts.queue })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
        }

        function addToPrefiltersOrTransports(structure) {
            return function(dataTypeExpression, func) {
                "string" != typeof dataTypeExpression && (func = dataTypeExpression, dataTypeExpression = "*");
                var dataType, i = 0,
                    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
                if (jQuery.isFunction(func))
                    for (; dataType = dataTypes[i++];) "+" === dataType.charAt(0) ? (dataType = dataType.slice(1) || "*", (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func)
            }
        }

        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            function inspect(dataType) { var selected; return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) { var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR); return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1) }), selected }
            var inspected = {},
                seekingTransport = structure === transports;
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
        }

        function ajaxExtend(target, src) { var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {}; for (key in src) void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]); return deep && jQuery.extend(!0, target, deep), target }

        function ajaxHandleResponses(s, jqXHR, responses) {
            for (var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;
                "*" === dataTypes[0];) dataTypes.shift(), void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
            if (ct)
                for (type in contents)
                    if (contents[type] && contents[type].test(ct)) { dataTypes.unshift(type); break }
            if (dataTypes[0] in responses) finalDataType = dataTypes[0];
            else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) { finalDataType = type; break }
                    firstDataType || (firstDataType = type)
                }
                finalDataType = finalDataType || firstDataType
            }
            if (finalDataType) return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType]
        }

        function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2, current, conv, tmp, prev, converters = {},
                dataTypes = s.dataTypes.slice();
            if (dataTypes[1])
                for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
            for (current = dataTypes.shift(); current;)
                if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift())
                    if ("*" === current) current = prev;
                    else if ("*" !== prev && prev !== current) {
                if (conv = converters[prev + " " + current] || converters["* " + current], !conv)
                    for (conv2 in converters)
                        if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) { conv === !0 ? conv = converters[conv2] : converters[conv2] !== !0 && (current = tmp[0], dataTypes.unshift(tmp[1])); break }
                if (conv !== !0)
                    if (conv && s["throws"]) response = conv(response);
                    else try { response = conv(response) } catch (e) { return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current } }
            }
            return { state: "success", data: response }
        }

        function buildParams(prefix, obj, traditional, add) {
            var name;
            if (jQuery.isArray(obj)) jQuery.each(obj, function(i, v) { traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v ? i : "") + "]", v, traditional, add) });
            else if (traditional || "object" !== jQuery.type(obj)) add(prefix, obj);
            else
                for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
        }

        function createStandardXHR() { try { return new window.XMLHttpRequest } catch (e) {} }

        function createActiveXHR() { try { return new window.ActiveXObject("Microsoft.XMLHTTP") } catch (e) {} }

        function getWindow(elem) { return jQuery.isWindow(elem) ? elem : 9 === elem.nodeType && (elem.defaultView || elem.parentWindow) }
        var deletedIds = [],
            slice = deletedIds.slice,
            concat = deletedIds.concat,
            push = deletedIds.push,
            indexOf = deletedIds.indexOf,
            class2type = {},
            toString = class2type.toString,
            hasOwn = class2type.hasOwnProperty,
            support = {},
            version = "1.11.3",
            jQuery = function(selector, context) { return new jQuery.fn.init(selector, context) },
            rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            rmsPrefix = /^-ms-/,
            rdashAlpha = /-([\da-z])/gi,
            fcamelCase = function(all, letter) { return letter.toUpperCase() };
        jQuery.fn = jQuery.prototype = {
            jquery: version,
            constructor: jQuery,
            selector: "",
            length: 0,
            toArray: function() { return slice.call(this) },
            get: function(num) { return null != num ? num < 0 ? this[num + this.length] : this[num] : slice.call(this) },
            pushStack: function(elems) { var ret = jQuery.merge(this.constructor(), elems); return ret.prevObject = this, ret.context = this.context, ret },
            each: function(callback, args) { return jQuery.each(this, callback, args) },
            map: function(callback) { return this.pushStack(jQuery.map(this, function(elem, i) { return callback.call(elem, i, elem) })) },
            slice: function() { return this.pushStack(slice.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(i) {
                var len = this.length,
                    j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
            },
            end: function() { return this.prevObject || this.constructor(null) },
            push: push,
            sort: deletedIds.sort,
            splice: deletedIds.splice
        }, jQuery.extend = jQuery.fn.extend = function() {
            var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = !1;
            for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, i++), "object" == typeof target || jQuery.isFunction(target) || (target = {}), i === length && (target = this, i--); i < length; i++)
                if (null != (options = arguments[i]))
                    for (name in options) src = target[name], copy = options[name], target !== copy && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, clone = src && jQuery.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {}, target[name] = jQuery.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
            return target
        }, jQuery.extend({
            expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(msg) { throw new Error(msg) },
            noop: function() {},
            isFunction: function(obj) { return "function" === jQuery.type(obj) },
            isArray: Array.isArray || function(obj) { return "array" === jQuery.type(obj) },
            isWindow: function(obj) { return null != obj && obj == obj.window },
            isNumeric: function(obj) { return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0 },
            isEmptyObject: function(obj) { var name; for (name in obj) return !1; return !0 },
            isPlainObject: function(obj) {
                var key;
                if (!obj || "object" !== jQuery.type(obj) || obj.nodeType || jQuery.isWindow(obj)) return !1;
                try { if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) return !1 } catch (e) { return !1 }
                if (support.ownLast)
                    for (key in obj) return hasOwn.call(obj, key);
                for (key in obj);
                return void 0 === key || hasOwn.call(obj, key)
            },
            type: function(obj) { return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj },
            globalEval: function(data) { data && jQuery.trim(data) && (window.execScript || function(data) { window.eval.call(window, data) })(data) },
            camelCase: function(string) { return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase) },
            nodeName: function(elem, name) { return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase() },
            each: function(obj, callback, args) {
                var value, i = 0,
                    length = obj.length,
                    isArray = isArraylike(obj);
                if (args) {
                    if (isArray)
                        for (; i < length && (value = callback.apply(obj[i], args), value !== !1); i++);
                    else
                        for (i in obj)
                            if (value = callback.apply(obj[i], args), value === !1) break
                } else if (isArray)
                    for (; i < length && (value = callback.call(obj[i], i, obj[i]), value !== !1); i++);
                else
                    for (i in obj)
                        if (value = callback.call(obj[i], i, obj[i]), value === !1) break; return obj
            },
            trim: function(text) { return null == text ? "" : (text + "").replace(rtrim, "") },
            makeArray: function(arr, results) { var ret = results || []; return null != arr && (isArraylike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : push.call(ret, arr)), ret },
            inArray: function(elem, arr, i) {
                var len;
                if (arr) {
                    if (indexOf) return indexOf.call(arr, elem, i);
                    for (len = arr.length, i = i ? i < 0 ? Math.max(0, len + i) : i : 0; i < len; i++)
                        if (i in arr && arr[i] === elem) return i
                }
                return -1
            },
            merge: function(first, second) {
                for (var len = +second.length, j = 0, i = first.length; j < len;) first[i++] = second[j++];
                if (len !== len)
                    for (; void 0 !== second[j];) first[i++] = second[j++];
                return first.length = i, first
            },
            grep: function(elems, callback, invert) { for (var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert; i < length; i++) callbackInverse = !callback(elems[i], i), callbackInverse !== callbackExpect && matches.push(elems[i]); return matches },
            map: function(elems, callback, arg) {
                var value, i = 0,
                    length = elems.length,
                    isArray = isArraylike(elems),
                    ret = [];
                if (isArray)
                    for (; i < length; i++) value = callback(elems[i], i, arg), null != value && ret.push(value);
                else
                    for (i in elems) value = callback(elems[i], i, arg), null != value && ret.push(value);
                return concat.apply([], ret)
            },
            guid: 1,
            proxy: function(fn, context) { var args, proxy, tmp; if ("string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), jQuery.isFunction(fn)) return args = slice.call(arguments, 2), proxy = function() { return fn.apply(context || this, args.concat(slice.call(arguments))) }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy },
            now: function() { return +new Date },
            support: support
        }), jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) { class2type["[object " + name + "]"] = name.toLowerCase() });
        var Sizzle =
            /*!
             * Sizzle CSS Selector Engine v2.2.0-pre
             * http://sizzlejs.com/
             *
             * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2014-12-16
             */
            function(window) {
                function Sizzle(selector, context, results, seed) {
                    var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
                    if ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), context = context || document, results = results || [], nodeType = context.nodeType, "string" != typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;
                    if (!seed && documentIsHTML) {
                        if (11 !== nodeType && (match = rquickExpr.exec(selector)))
                            if (m = match[1]) { if (9 === nodeType) { if (elem = context.getElementById(m), !elem || !elem.parentNode) return results; if (elem.id === m) return results.push(elem), results } else if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), results } else { if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), results; if ((m = match[3]) && support.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), results }
                        if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            if (nid = old = expando, newContext = context, newSelector = 1 !== nodeType && selector, 1 === nodeType && "object" !== context.nodeName.toLowerCase()) {
                                for (groups = tokenize(selector), (old = context.getAttribute("id")) ? nid = old.replace(rescape, "\\$&") : context.setAttribute("id", nid), nid = "[id='" + nid + "'] ", i = groups.length; i--;) groups[i] = nid + toSelector(groups[i]);
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context, newSelector = groups.join(",")
                            }
                            if (newSelector) try { return push.apply(results, newContext.querySelectorAll(newSelector)), results } catch (qsaError) {} finally { old || context.removeAttribute("id") }
                        }
                    }
                    return select(selector.replace(rtrim, "$1"), context, results, seed)
                }

                function createCache() {
                    function cache(key, value) { return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key + " "] = value }
                    var keys = [];
                    return cache
                }

                function markFunction(fn) { return fn[expando] = !0, fn }

                function assert(fn) { var div = document.createElement("div"); try { return !!fn(div) } catch (e) { return !1 } finally { div.parentNode && div.parentNode.removeChild(div), div = null } }

                function addHandle(attrs, handler) { for (var arr = attrs.split("|"), i = attrs.length; i--;) Expr.attrHandle[arr[i]] = handler }

                function siblingCheck(a, b) {
                    var cur = b && a,
                        diff = cur && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
                    if (diff) return diff;
                    if (cur)
                        for (; cur = cur.nextSibling;)
                            if (cur === b) return -1;
                    return a ? 1 : -1
                }

                function createInputPseudo(type) { return function(elem) { var name = elem.nodeName.toLowerCase(); return "input" === name && elem.type === type } }

                function createButtonPseudo(type) { return function(elem) { var name = elem.nodeName.toLowerCase(); return ("input" === name || "button" === name) && elem.type === type } }

                function createPositionalPseudo(fn) { return markFunction(function(argument) { return argument = +argument, markFunction(function(seed, matches) { for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--;) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j])) }) }) }

                function testContext(context) { return context && "undefined" != typeof context.getElementsByTagName && context }

                function setFilters() {}

                function toSelector(tokens) { for (var i = 0, len = tokens.length, selector = ""; i < len; i++) selector += tokens[i].value; return selector }

                function addCombinator(matcher, combinator, base) {
                    var dir = combinator.dir,
                        checkNonElements = base && "parentNode" === dir,
                        doneName = done++;
                    return combinator.first ? function(elem, context, xml) {
                        for (; elem = elem[dir];)
                            if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml)
                    } : function(elem, context, xml) {
                        var oldCache, outerCache, newCache = [dirruns, doneName];
                        if (xml) {
                            for (; elem = elem[dir];)
                                if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0
                        } else
                            for (; elem = elem[dir];)
                                if (1 === elem.nodeType || checkNonElements) { if (outerCache = elem[expando] || (elem[expando] = {}), (oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2]; if (outerCache[dir] = newCache, newCache[2] = matcher(elem, context, xml)) return !0 }
                    }
                }

                function elementMatcher(matchers) {
                    return matchers.length > 1 ? function(elem, context, xml) {
                        for (var i = matchers.length; i--;)
                            if (!matchers[i](elem, context, xml)) return !1;
                        return !0
                    } : matchers[0]
                }

                function multipleContexts(selector, contexts, results) { for (var i = 0, len = contexts.length; i < len; i++) Sizzle(selector, contexts[i], results); return results }

                function condense(unmatched, map, filter, context, xml) { for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; i < len; i++)(elem = unmatched[i]) && (filter && !filter(elem, context, xml) || (newUnmatched.push(elem), mapped && map.push(i))); return newUnmatched }

                function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                    return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function(seed, results, context, xml) {
                        var temp, i, elem, preMap = [],
                            postMap = [],
                            preexisting = results.length,
                            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                            matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml),
                            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                        if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter)
                            for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i = temp.length; i--;)(elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
                        if (seed) {
                            if (postFinder || preFilter) {
                                if (postFinder) {
                                    for (temp = [], i = matcherOut.length; i--;)(elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                                    postFinder(null, matcherOut = [], temp, xml)
                                }
                                for (i = matcherOut.length; i--;)(elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem))
                            }
                        } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut)
                    })
                }

                function matcherFromTokens(tokens) {
                    for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) { return elem === checkContext }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) { return indexOf(checkContext, elem) > -1 }, implicitRelative, !0), matchers = [function(elem, context, xml) { var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); return checkContext = null, ret }]; i < len; i++)
                        if (matcher = Expr.relative[tokens[i].type]) matchers = [addCombinator(elementMatcher(matchers), matcher)];
                        else {
                            if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) { for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++); return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({ value: " " === tokens[i - 2].type ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens)) }
                            matchers.push(matcher)
                        }
                    return elementMatcher(matchers)
                }

                function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                    var bySet = setMatchers.length > 0,
                        byElement = elementMatchers.length > 0,
                        superMatcher = function(seed, context, xml, results, outermost) {
                            var elem, j, matcher, matchedCount = 0,
                                i = "0",
                                unmatched = seed && [],
                                setMatched = [],
                                contextBackup = outermostContext,
                                elems = seed || byElement && Expr.find.TAG("*", outermost),
                                dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1,
                                len = elems.length;
                            for (outermost && (outermostContext = context !== document && context); i !== len && null != (elem = elems[i]); i++) {
                                if (byElement && elem) {
                                    for (j = 0; matcher = elementMatchers[j++];)
                                        if (matcher(elem, context, xml)) { results.push(elem); break }
                                    outermost && (dirruns = dirrunsUnique)
                                }
                                bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem))
                            }
                            if (matchedCount += i, bySet && i !== matchedCount) {
                                for (j = 0; matcher = setMatchers[j++];) matcher(unmatched, setMatched, context, xml);
                                if (seed) {
                                    if (matchedCount > 0)
                                        for (; i--;) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                                    setMatched = condense(setMatched)
                                }
                                push.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results)
                            }
                            return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched
                        };
                    return bySet ? markFunction(superMatcher) : superMatcher
                }
                var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date,
                    preferredDoc = window.document,
                    dirruns = 0,
                    done = 0,
                    classCache = createCache(),
                    tokenCache = createCache(),
                    compilerCache = createCache(),
                    sortOrder = function(a, b) { return a === b && (hasDuplicate = !0), 0 },
                    MAX_NEGATIVE = 1 << 31,
                    hasOwn = {}.hasOwnProperty,
                    arr = [],
                    pop = arr.pop,
                    push_native = arr.push,
                    push = arr.push,
                    slice = arr.slice,
                    indexOf = function(list, elem) {
                        for (var i = 0, len = list.length; i < len; i++)
                            if (list[i] === elem) return i;
                        return -1
                    },
                    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    whitespace = "[\\x20\\t\\r\\n\\f]",
                    characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    identifier = characterEncoding.replace("w", "w#"),
                    attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
                    pseudos = ":(" + characterEncoding + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)",
                    rwhitespace = new RegExp(whitespace + "+", "g"),
                    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
                    rpseudo = new RegExp(pseudos),
                    ridentifier = new RegExp("^" + identifier + "$"),
                    matchExpr = { ID: new RegExp("^#(" + characterEncoding + ")"), CLASS: new RegExp("^\\.(" + characterEncoding + ")"), TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"), ATTR: new RegExp("^" + attributes), PSEUDO: new RegExp("^" + pseudos), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"), bool: new RegExp("^(?:" + booleans + ")$", "i"), needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i") },
                    rinputs = /^(?:input|select|textarea|button)$/i,
                    rheader = /^h\d$/i,
                    rnative = /^[^{]+\{\s*\[native \w/,
                    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    rsibling = /[+~]/,
                    rescape = /'|\\/g,
                    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                    funescape = function(_, escaped, escapedWhitespace) { var high = "0x" + escaped - 65536; return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320) },
                    unloadHandler = function() { setDocument() };
                try { push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), arr[preferredDoc.childNodes.length].nodeType } catch (e) {
                    push = {
                        apply: arr.length ? function(target, els) { push_native.apply(target, slice.call(els)) } : function(target, els) {
                            for (var j = target.length, i = 0; target[j++] = els[i++];);
                            target.length = j - 1
                        }
                    }
                }
                support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) { var documentElement = elem && (elem.ownerDocument || elem).documentElement; return !!documentElement && "HTML" !== documentElement.nodeName }, setDocument = Sizzle.setDocument = function(node) {
                    var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
                    return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, docElem = doc.documentElement, parent = doc.defaultView, parent && parent !== parent.top && (parent.addEventListener ? parent.addEventListener("unload", unloadHandler, !1) : parent.attachEvent && parent.attachEvent("onunload", unloadHandler)), documentIsHTML = !isXML(doc), support.attributes = assert(function(div) { return div.className = "i", !div.getAttribute("className") }), support.getElementsByTagName = assert(function(div) { return div.appendChild(doc.createComment("")), !div.getElementsByTagName("*").length }), support.getElementsByClassName = rnative.test(doc.getElementsByClassName), support.getById = assert(function(div) { return docElem.appendChild(div).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length }), support.getById ? (Expr.find.ID = function(id, context) { if ("undefined" != typeof context.getElementById && documentIsHTML) { var m = context.getElementById(id); return m && m.parentNode ? [m] : [] } }, Expr.filter.ID = function(id) { var attrId = id.replace(runescape, funescape); return function(elem) { return elem.getAttribute("id") === attrId } }) : (delete Expr.find.ID, Expr.filter.ID = function(id) { var attrId = id.replace(runescape, funescape); return function(elem) { var node = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id"); return node && node.value === attrId } }), Expr.find.TAG = support.getElementsByTagName ? function(tag, context) { return "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag) : support.qsa ? context.querySelectorAll(tag) : void 0 } : function(tag, context) {
                        var elem, tmp = [],
                            i = 0,
                            results = context.getElementsByTagName(tag);
                        if ("*" === tag) { for (; elem = results[i++];) 1 === elem.nodeType && tmp.push(elem); return tmp }
                        return results
                    }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) { if (documentIsHTML) return context.getElementsByClassName(className) }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(doc.querySelectorAll)) && (assert(function(div) { docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\f]' msallowcapture=''><option selected=''></option></select>", div.querySelectorAll("[msallowcapture^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), div.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), div.querySelectorAll("[id~=" + expando + "-]").length || rbuggyQSA.push("~="), div.querySelectorAll(":checked").length || rbuggyQSA.push(":checked"), div.querySelectorAll("a#" + expando + "+*").length || rbuggyQSA.push(".#.+[+~]") }), assert(function(div) {
                        var input = doc.createElement("input");
                        input.setAttribute("type", "hidden"), div.appendChild(input).setAttribute("name", "D"), div.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), div.querySelectorAll(":enabled").length || rbuggyQSA.push(":enabled", ":disabled"), div.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:")
                    })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(div) { support.disconnectedMatch = matches.call(div, "div"), matches.call(div, "[s!='']:x"), rbuggyMatches.push("!=", pseudos) }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                        var adown = 9 === a.nodeType ? a.documentElement : a,
                            bup = b && b.parentNode;
                        return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)))
                    } : function(a, b) {
                        if (b)
                            for (; b = b.parentNode;)
                                if (b === a) return !0;
                        return !1
                    }, sortOrder = hasCompare ? function(a, b) { if (a === b) return hasDuplicate = !0, 0; var compare = !a.compareDocumentPosition - !b.compareDocumentPosition; return compare ? compare : (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0 : 4 & compare ? -1 : 1) } : function(a, b) {
                        if (a === b) return hasDuplicate = !0, 0;
                        var cur, i = 0,
                            aup = a.parentNode,
                            bup = b.parentNode,
                            ap = [a],
                            bp = [b];
                        if (!aup || !bup) return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                        if (aup === bup) return siblingCheck(a, b);
                        for (cur = a; cur = cur.parentNode;) ap.unshift(cur);
                        for (cur = b; cur = cur.parentNode;) bp.unshift(cur);
                        for (; ap[i] === bp[i];) i++;
                        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
                    }, doc) : document
                }, Sizzle.matches = function(expr, elements) { return Sizzle(expr, null, null, elements) }, Sizzle.matchesSelector = function(elem, expr) {
                    if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try { var ret = matches.call(elem, expr); if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret } catch (e) {}
                    return Sizzle(expr, document, null, [elem]).length > 0
                }, Sizzle.contains = function(context, elem) { return (context.ownerDocument || context) !== document && setDocument(context), contains(context, elem) }, Sizzle.attr = function(elem, name) {
                    (elem.ownerDocument || elem) !== document && setDocument(elem);
                    var fn = Expr.attrHandle[name.toLowerCase()],
                        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                    return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null
                }, Sizzle.error = function(msg) { throw new Error("Syntax error, unrecognized expression: " + msg) }, Sizzle.uniqueSort = function(results) {
                    var elem, duplicates = [],
                        j = 0,
                        i = 0;
                    if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(sortOrder), hasDuplicate) { for (; elem = results[i++];) elem === results[i] && (j = duplicates.push(i)); for (; j--;) results.splice(duplicates[j], 1) }
                    return sortInput = null, results
                }, getText = Sizzle.getText = function(elem) {
                    var node, ret = "",
                        i = 0,
                        nodeType = elem.nodeType;
                    if (nodeType) { if (1 === nodeType || 9 === nodeType || 11 === nodeType) { if ("string" == typeof elem.textContent) return elem.textContent; for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem) } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue } else
                        for (; node = elem[i++];) ret += getText(node);
                    return ret
                }, Expr = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: matchExpr,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: { ATTR: function(match) { return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4) }, CHILD: function(match) { return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match }, PSEUDO: function(match) { var excess, unquoted = !match[6] && match[2]; return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3)) } },
                    filter: {
                        TAG: function(nodeNameSelector) { var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase(); return "*" === nodeNameSelector ? function() { return !0 } : function(elem) { return elem.nodeName && elem.nodeName.toLowerCase() === nodeName } },
                        CLASS: function(className) { var pattern = classCache[className + " "]; return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) { return pattern.test("string" == typeof elem.className && elem.className || "undefined" != typeof elem.getAttribute && elem.getAttribute("class") || "") }) },
                        ATTR: function(name, operator, check) { return function(elem) { var result = Sizzle.attr(elem, name); return null == result ? "!=" === operator : !operator || (result += "", "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : "|=" === operator && (result === check || result.slice(0, check.length + 1) === check + "-")) } },
                        CHILD: function(type, what, argument, first, last) {
                            var simple = "nth" !== type.slice(0, 3),
                                forward = "last" !== type.slice(-4),
                                ofType = "of-type" === what;
                            return 1 === first && 0 === last ? function(elem) { return !!elem.parentNode } : function(elem, context, xml) {
                                var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType;
                                if (parent) {
                                    if (simple) {
                                        for (; dir;) {
                                            for (node = elem; node = node[dir];)
                                                if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                                            start = dir = "only" === type && !start && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                                        for (outerCache = parent[expando] || (parent[expando] = {}), cache = outerCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = cache[0] === dirruns && cache[2], node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();)
                                            if (1 === node.nodeType && ++diff && node === elem) { outerCache[type] = [dirruns, nodeIndex, diff]; break }
                                    } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) diff = cache[1];
                                    else
                                        for (;
                                            (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && ((node[expando] || (node[expando] = {}))[type] = [dirruns, diff]), node !== elem)););
                                    return diff -= last, diff === first || diff % first === 0 && diff / first >= 0
                                }
                            }
                        },
                        PSEUDO: function(pseudo, argument) { var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) { for (var idx, matched = fn(seed, argument), i = matched.length; i--;) idx = indexOf(seed, matched[i]), seed[idx] = !(matches[idx] = matched[i]) }) : function(elem) { return fn(elem, 0, args) }) : fn }
                    },
                    pseudos: {
                        not: markFunction(function(selector) {
                            var input = [],
                                results = [],
                                matcher = compile(selector.replace(rtrim, "$1"));
                            return matcher[expando] ? markFunction(function(seed, matches, context, xml) { for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--;)(elem = unmatched[i]) && (seed[i] = !(matches[i] = elem)) }) : function(elem, context, xml) { return input[0] = elem, matcher(input, null, xml, results), input[0] = null, !results.pop() }
                        }),
                        has: markFunction(function(selector) { return function(elem) { return Sizzle(selector, elem).length > 0 } }),
                        contains: markFunction(function(text) {
                            return text = text.replace(runescape, funescape),
                                function(elem) { return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1 }
                        }),
                        lang: markFunction(function(lang) {
                            return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(),
                                function(elem) {
                                    var elemLang;
                                    do
                                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + "-");
                                    while ((elem = elem.parentNode) && 1 === elem.nodeType);
                                    return !1
                                }
                        }),
                        target: function(elem) { var hash = window.location && window.location.hash; return hash && hash.slice(1) === elem.id },
                        root: function(elem) { return elem === docElem },
                        focus: function(elem) { return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex) },
                        enabled: function(elem) { return elem.disabled === !1 },
                        disabled: function(elem) { return elem.disabled === !0 },
                        checked: function(elem) { var nodeName = elem.nodeName.toLowerCase(); return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected },
                        selected: function(elem) { return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === !0 },
                        empty: function(elem) {
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                                if (elem.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(elem) { return !Expr.pseudos.empty(elem) },
                        header: function(elem) { return rheader.test(elem.nodeName) },
                        input: function(elem) { return rinputs.test(elem.nodeName) },
                        button: function(elem) { var name = elem.nodeName.toLowerCase(); return "input" === name && "button" === elem.type || "button" === name },
                        text: function(elem) { var attr; return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase()) },
                        first: createPositionalPseudo(function() { return [0] }),
                        last: createPositionalPseudo(function(matchIndexes, length) { return [length - 1] }),
                        eq: createPositionalPseudo(function(matchIndexes, length, argument) { return [argument < 0 ? argument + length : argument] }),
                        even: createPositionalPseudo(function(matchIndexes, length) { for (var i = 0; i < length; i += 2) matchIndexes.push(i); return matchIndexes }),
                        odd: createPositionalPseudo(function(matchIndexes, length) { for (var i = 1; i < length; i += 2) matchIndexes.push(i); return matchIndexes }),
                        lt: createPositionalPseudo(function(matchIndexes, length, argument) { for (var i = argument < 0 ? argument + length : argument; --i >= 0;) matchIndexes.push(i); return matchIndexes }),
                        gt: createPositionalPseudo(function(matchIndexes, length, argument) { for (var i = argument < 0 ? argument + length : argument; ++i < length;) matchIndexes.push(i); return matchIndexes })
                    }
                }, Expr.pseudos.nth = Expr.pseudos.eq;
                for (i in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) Expr.pseudos[i] = createInputPseudo(i);
                for (i in { submit: !0, reset: !0 }) Expr.pseudos[i] = createButtonPseudo(i);
                return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(selector, parseOnly) { var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "]; if (cached) return parseOnly ? 0 : cached.slice(0); for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar;) { matched && !(match = rcomma.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), tokens.push({ value: matched, type: match[0].replace(rtrim, " ") }), soFar = soFar.slice(matched.length)); for (type in Expr.filter) !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), tokens.push({ value: matched, type: type, matches: match }), soFar = soFar.slice(matched.length)); if (!matched) break } return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0) }, compile = Sizzle.compile = function(selector, match) {
                    var i, setMatchers = [],
                        elementMatchers = [],
                        cached = compilerCache[selector + " "];
                    if (!cached) {
                        for (match || (match = tokenize(selector)), i = match.length; i--;) cached = matcherFromTokens(match[i]), cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), cached.selector = selector
                    }
                    return cached
                }, select = Sizzle.select = function(selector, context, results, seed) {
                    var i, tokens, token, type, find, compiled = "function" == typeof selector && selector,
                        match = !seed && tokenize(selector = compiled.selector || selector);
                    if (results = results || [], 1 === match.length) {
                        if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                            if (context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0], !context) return results;
                            compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length)
                        }
                        for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], !Expr.relative[type = token.type]);)
                            if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) { if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector) return push.apply(results, seed), results; break }
                    }
                    return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context), results
                }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function(div1) { return 1 & div1.compareDocumentPosition(document.createElement("div")) }), assert(function(div) { return div.innerHTML = "<a href='#'></a>", "#" === div.firstChild.getAttribute("href") }) || addHandle("type|href|height|width", function(elem, name, isXML) { if (!isXML) return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2) }), support.attributes && assert(function(div) { return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), "" === div.firstChild.getAttribute("value") }) || addHandle("value", function(elem, name, isXML) { if (!isXML && "input" === elem.nodeName.toLowerCase()) return elem.defaultValue }), assert(function(div) { return null == div.getAttribute("disabled") }) || addHandle(booleans, function(elem, name, isXML) { var val; if (!isXML) return elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null }), Sizzle
            }(window);
        jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains;
        var rneedsContext = jQuery.expr.match.needsContext,
            rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            risSimple = /^.[^:#\[\.,]*$/;
        jQuery.filter = function(expr, elems, not) { var elem = elems[0]; return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) { return 1 === elem.nodeType })) }, jQuery.fn.extend({
            find: function(selector) {
                var i, ret = [],
                    self = this,
                    len = self.length;
                if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++)
                        if (jQuery.contains(self[i], this)) return !0
                }));
                for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
                return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, ret
            },
            filter: function(selector) { return this.pushStack(winnow(this, selector || [], !1)) },
            not: function(selector) { return this.pushStack(winnow(this, selector || [], !0)) },
            is: function(selector) { return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length }
        });
        var rootjQuery, document = window.document,
            rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            init = jQuery.fn.init = function(selector, context) {
                var match, elem;
                if (!selector) return this;
                if ("string" == typeof selector) {
                    if (match = "<" === selector.charAt(0) && ">" === selector.charAt(selector.length - 1) && selector.length >= 3 ? [null, selector, null] : rquickExpr.exec(selector), !match || !match[1] && context) return !context || context.jquery ? (context || rootjQuery).find(selector) : this.constructor(context).find(selector);
                    if (match[1]) {
                        if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
                            for (match in context) jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                        return this
                    }
                    if (elem = document.getElementById(match[2]), elem && elem.parentNode) {
                        if (elem.id !== match[2]) return rootjQuery.find(selector);
                        this.length = 1, this[0] = elem
                    }
                    return this.context = document, this.selector = selector, this
                }
                return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? "undefined" != typeof rootjQuery.ready ? rootjQuery.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector,
                    this.context = selector.context), jQuery.makeArray(selector, this))
            };
        init.prototype = jQuery.fn, rootjQuery = jQuery(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/,
            guaranteedUnique = { children: !0, contents: !0, next: !0, prev: !0 };
        jQuery.extend({ dir: function(elem, dir, until) { for (var matched = [], cur = elem[dir]; cur && 9 !== cur.nodeType && (void 0 === until || 1 !== cur.nodeType || !jQuery(cur).is(until));) 1 === cur.nodeType && matched.push(cur), cur = cur[dir]; return matched }, sibling: function(n, elem) { for (var r = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && r.push(n); return r } }), jQuery.fn.extend({
            has: function(target) {
                var i, targets = jQuery(target, this),
                    len = targets.length;
                return this.filter(function() {
                    for (i = 0; i < len; i++)
                        if (jQuery.contains(this, targets[i])) return !0
                })
            },
            closest: function(selectors, context) {
                for (var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || "string" != typeof selectors ? jQuery(selectors, context || this.context) : 0; i < l; i++)
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
                        if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) { matched.push(cur); break }
                return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched)
            },
            index: function(elem) { return elem ? "string" == typeof elem ? jQuery.inArray(this[0], jQuery(elem)) : jQuery.inArray(elem.jquery ? elem[0] : elem, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(selector, context) { return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context)))) },
            addBack: function(selector) { return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector)) }
        }), jQuery.each({ parent: function(elem) { var parent = elem.parentNode; return parent && 11 !== parent.nodeType ? parent : null }, parents: function(elem) { return jQuery.dir(elem, "parentNode") }, parentsUntil: function(elem, i, until) { return jQuery.dir(elem, "parentNode", until) }, next: function(elem) { return sibling(elem, "nextSibling") }, prev: function(elem) { return sibling(elem, "previousSibling") }, nextAll: function(elem) { return jQuery.dir(elem, "nextSibling") }, prevAll: function(elem) { return jQuery.dir(elem, "previousSibling") }, nextUntil: function(elem, i, until) { return jQuery.dir(elem, "nextSibling", until) }, prevUntil: function(elem, i, until) { return jQuery.dir(elem, "previousSibling", until) }, siblings: function(elem) { return jQuery.sibling((elem.parentNode || {}).firstChild, elem) }, children: function(elem) { return jQuery.sibling(elem.firstChild) }, contents: function(elem) { return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes) } }, function(name, fn) { jQuery.fn[name] = function(until, selector) { var ret = jQuery.map(this, fn, until); return "Until" !== name.slice(-5) && (selector = until), selector && "string" == typeof selector && (ret = jQuery.filter(selector, ret)), this.length > 1 && (guaranteedUnique[name] || (ret = jQuery.unique(ret)), rparentsprev.test(name) && (ret = ret.reverse())), this.pushStack(ret) } });
        var rnotwhite = /\S+/g,
            optionsCache = {};
        jQuery.Callbacks = function(options) {
            options = "string" == typeof options ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
            var firing, memory, fired, firingLength, firingIndex, firingStart, list = [],
                stack = !options.once && [],
                fire = function(data) {
                    for (memory = options.memory && data, fired = !0, firingIndex = firingStart || 0, firingStart = 0, firingLength = list.length, firing = !0; list && firingIndex < firingLength; firingIndex++)
                        if (list[firingIndex].apply(data[0], data[1]) === !1 && options.stopOnFalse) { memory = !1; break }
                    firing = !1, list && (stack ? stack.length && fire(stack.shift()) : memory ? list = [] : self.disable())
                },
                self = {
                    add: function() { if (list) { var start = list.length;! function add(args) { jQuery.each(args, function(_, arg) { var type = jQuery.type(arg); "function" === type ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== type && add(arg) }) }(arguments), firing ? firingLength = list.length : memory && (firingStart = start, fire(memory)) } return this },
                    remove: function() {
                        return list && jQuery.each(arguments, function(_, arg) {
                            for (var index;
                                (index = jQuery.inArray(arg, list, index)) > -1;) list.splice(index, 1), firing && (index <= firingLength && firingLength--, index <= firingIndex && firingIndex--)
                        }), this
                    },
                    has: function(fn) { return fn ? jQuery.inArray(fn, list) > -1 : !(!list || !list.length) },
                    empty: function() { return list = [], firingLength = 0, this },
                    disable: function() { return list = stack = memory = void 0, this },
                    disabled: function() { return !list },
                    lock: function() { return stack = void 0, memory || self.disable(), this },
                    locked: function() { return !stack },
                    fireWith: function(context, args) { return !list || fired && !stack || (args = args || [], args = [context, args.slice ? args.slice() : args], firing ? stack.push(args) : fire(args)), this },
                    fire: function() { return self.fireWith(this, arguments), this },
                    fired: function() { return !!fired }
                };
            return self
        }, jQuery.extend({
            Deferred: function(func) {
                var tuples = [
                        ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", jQuery.Callbacks("memory")]
                    ],
                    state = "pending",
                    promise = {
                        state: function() { return state },
                        always: function() { return deferred.done(arguments).fail(arguments), this },
                        then: function() {
                            var fns = arguments;
                            return jQuery.Deferred(function(newDefer) {
                                jQuery.each(tuples, function(i, tuple) {
                                    var fn = jQuery.isFunction(fns[i]) && fns[i];
                                    deferred[tuple[1]](function() {
                                        var returned = fn && fn.apply(this, arguments);
                                        returned && jQuery.isFunction(returned.promise) ? returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify) : newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                                    })
                                }), fns = null
                            }).promise()
                        },
                        promise: function(obj) { return null != obj ? jQuery.extend(obj, promise) : promise }
                    },
                    deferred = {};
                return promise.pipe = promise.then, jQuery.each(tuples, function(i, tuple) {
                    var list = tuple[2],
                        stateString = tuple[3];
                    promise[tuple[1]] = list.add, stateString && list.add(function() { state = stateString }, tuples[1 ^ i][2].disable, tuples[2][2].lock), deferred[tuple[0]] = function() { return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), this }, deferred[tuple[0] + "With"] = list.fireWith
                }), promise.promise(deferred), func && func.call(deferred, deferred), deferred
            },
            when: function(subordinate) {
                var progressValues, progressContexts, resolveContexts, i = 0,
                    resolveValues = slice.call(arguments),
                    length = resolveValues.length,
                    remaining = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
                    deferred = 1 === remaining ? subordinate : jQuery.Deferred(),
                    updateFunc = function(i, contexts, values) { return function(value) { contexts[i] = this, values[i] = arguments.length > 1 ? slice.call(arguments) : value, values === progressValues ? deferred.notifyWith(contexts, values) : --remaining || deferred.resolveWith(contexts, values) } };
                if (length > 1)
                    for (progressValues = new Array(length), progressContexts = new Array(length), resolveContexts = new Array(length); i < length; i++) resolveValues[i] && jQuery.isFunction(resolveValues[i].promise) ? resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues)) : --remaining;
                return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise()
            }
        });
        var readyList;
        jQuery.fn.ready = function(fn) { return jQuery.ready.promise().done(fn), this }, jQuery.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(hold) { hold ? jQuery.readyWait++ : jQuery.ready(!0) },
            ready: function(wait) {
                if (wait === !0 ? !--jQuery.readyWait : !jQuery.isReady) {
                    if (!document.body) return setTimeout(jQuery.ready);
                    jQuery.isReady = !0, wait !== !0 && --jQuery.readyWait > 0 || (readyList.resolveWith(document, [jQuery]), jQuery.fn.triggerHandler && (jQuery(document).triggerHandler("ready"), jQuery(document).off("ready")))
                }
            }
        }), jQuery.ready.promise = function(obj) {
            if (!readyList)
                if (readyList = jQuery.Deferred(), "complete" === document.readyState) setTimeout(jQuery.ready);
                else if (document.addEventListener) document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1);
            else {
                document.attachEvent("onreadystatechange", completed), window.attachEvent("onload", completed);
                var top = !1;
                try { top = null == window.frameElement && document.documentElement } catch (e) {}
                top && top.doScroll && ! function doScrollCheck() {
                    if (!jQuery.isReady) {
                        try { top.doScroll("left") } catch (e) { return setTimeout(doScrollCheck, 50) }
                        detach(), jQuery.ready()
                    }
                }()
            }
            return readyList.promise(obj)
        };
        var i, strundefined = "undefined";
        for (i in jQuery(support)) break;
        support.ownLast = "0" !== i, support.inlineBlockNeedsLayout = !1, jQuery(function() {
                var val, div, body, container;
                body = document.getElementsByTagName("body")[0], body && body.style && (div = document.createElement("div"), container = document.createElement("div"), container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", body.appendChild(container).appendChild(div), typeof div.style.zoom !== strundefined && (div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", support.inlineBlockNeedsLayout = val = 3 === div.offsetWidth, val && (body.style.zoom = 1)), body.removeChild(container))
            }),
            function() {
                var div = document.createElement("div");
                if (null == support.deleteExpando) { support.deleteExpando = !0; try { delete div.test } catch (e) { support.deleteExpando = !1 } }
                div = null
            }(), jQuery.acceptData = function(elem) {
                var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
                    nodeType = +elem.nodeType || 1;
                return (1 === nodeType || 9 === nodeType) && (!noData || noData !== !0 && elem.getAttribute("classid") === noData)
            };
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            rmultiDash = /([A-Z])/g;
        jQuery.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(elem) { return elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando], !!elem && !isEmptyDataObject(elem) }, data: function(elem, name, data) { return internalData(elem, name, data) }, removeData: function(elem, name) { return internalRemoveData(elem, name) }, _data: function(elem, name, data) { return internalData(elem, name, data, !0) }, _removeData: function(elem, name) { return internalRemoveData(elem, name, !0) } }), jQuery.fn.extend({
            data: function(key, value) {
                var i, name, data, elem = this[0],
                    attrs = elem && elem.attributes;
                if (void 0 === key) {
                    if (this.length && (data = jQuery.data(elem), 1 === elem.nodeType && !jQuery._data(elem, "parsedAttrs"))) {
                        for (i = attrs.length; i--;) attrs[i] && (name = attrs[i].name, 0 === name.indexOf("data-") && (name = jQuery.camelCase(name.slice(5)), dataAttr(elem, name, data[name])));
                        jQuery._data(elem, "parsedAttrs", !0)
                    }
                    return data
                }
                return "object" == typeof key ? this.each(function() { jQuery.data(this, key) }) : arguments.length > 1 ? this.each(function() { jQuery.data(this, key, value) }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : void 0
            },
            removeData: function(key) { return this.each(function() { jQuery.removeData(this, key) }) }
        }), jQuery.extend({
            queue: function(elem, type, data) { var queue; if (elem) return type = (type || "fx") + "queue", queue = jQuery._data(elem, type), data && (!queue || jQuery.isArray(data) ? queue = jQuery._data(elem, type, jQuery.makeArray(data)) : queue.push(data)), queue || [] },
            dequeue: function(elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type),
                    startLength = queue.length,
                    fn = queue.shift(),
                    hooks = jQuery._queueHooks(elem, type),
                    next = function() { jQuery.dequeue(elem, type) };
                "inprogress" === fn && (fn = queue.shift(), startLength--), fn && ("fx" === type && queue.unshift("inprogress"), delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire()
            },
            _queueHooks: function(elem, type) { var key = type + "queueHooks"; return jQuery._data(elem, key) || jQuery._data(elem, key, { empty: jQuery.Callbacks("once memory").add(function() { jQuery._removeData(elem, type + "queue"), jQuery._removeData(elem, key) }) }) }
        }), jQuery.fn.extend({
            queue: function(type, data) {
                var setter = 2;
                return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
                    var queue = jQuery.queue(this, type, data);
                    jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type)
                })
            },
            dequeue: function(type) { return this.each(function() { jQuery.dequeue(this, type) }) },
            clearQueue: function(type) { return this.queue(type || "fx", []) },
            promise: function(type, obj) {
                var tmp, count = 1,
                    defer = jQuery.Deferred(),
                    elements = this,
                    i = this.length,
                    resolve = function() {--count || defer.resolveWith(elements, [elements]) };
                for ("string" != typeof type && (obj = type, type = void 0), type = type || "fx"; i--;) tmp = jQuery._data(elements[i], type + "queueHooks"), tmp && tmp.empty && (count++, tmp.empty.add(resolve));
                return resolve(), defer.promise(obj)
            }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            cssExpand = ["Top", "Right", "Bottom", "Left"],
            isHidden = function(elem, el) { return elem = el || elem, "none" === jQuery.css(elem, "display") || !jQuery.contains(elem.ownerDocument, elem) },
            access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                var i = 0,
                    length = elems.length,
                    bulk = null == key;
                if ("object" === jQuery.type(key)) { chainable = !0; for (i in key) jQuery.access(elems, fn, i, key[i], !0, emptyGet, raw) } else if (void 0 !== value && (chainable = !0, jQuery.isFunction(value) || (raw = !0), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, key, value) { return bulk.call(jQuery(elem), value) })), fn))
                    for (; i < length; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet
            },
            rcheckableType = /^(?:checkbox|radio)$/i;
        ! function() {
            var input = document.createElement("input"),
                div = document.createElement("div"),
                fragment = document.createDocumentFragment();
            if (div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", support.leadingWhitespace = 3 === div.firstChild.nodeType, support.tbody = !div.getElementsByTagName("tbody").length, support.htmlSerialize = !!div.getElementsByTagName("link").length, support.html5Clone = "<:nav></:nav>" !== document.createElement("nav").cloneNode(!0).outerHTML, input.type = "checkbox", input.checked = !0, fragment.appendChild(input), support.appendChecked = input.checked, div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue, fragment.appendChild(div), div.innerHTML = "<input type='radio' checked='checked' name='t'/>", support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, support.noCloneEvent = !0, div.attachEvent && (div.attachEvent("onclick", function() { support.noCloneEvent = !1 }), div.cloneNode(!0).click()), null == support.deleteExpando) { support.deleteExpando = !0; try { delete div.test } catch (e) { support.deleteExpando = !1 } }
        }(),
        function() {
            var i, eventName, div = document.createElement("div");
            for (i in { submit: !0, change: !0, focusin: !0 }) eventName = "on" + i, (support[i + "Bubbles"] = eventName in window) || (div.setAttribute(eventName, "t"), support[i + "Bubbles"] = div.attributes[eventName].expando === !1);
            div = null
        }();
        var rformElems = /^(?:input|select|textarea)$/i,
            rkeyEvent = /^key/,
            rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
            rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
            rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
        jQuery.event = {
            global: {},
            add: function(elem, types, handler, data, selector) {
                var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
                if (elemData) {
                    for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, selector = handleObjIn.selector), handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) { return typeof jQuery === strundefined || e && jQuery.event.triggered === e.type ? void 0 : jQuery.event.dispatch.apply(eventHandle.elem, arguments) }, eventHandle.elem = elem), types = (types || "").match(rnotwhite) || [""], t = types.length; t--;) tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, handleObj = jQuery.extend({ type: type, origType: origType, data: data, handler: handler, guid: handler.guid, selector: selector, needsContext: selector && jQuery.expr.match.needsContext.test(selector), namespace: namespaces.join(".") }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, special.setup && special.setup.call(elem, data, namespaces, eventHandle) !== !1 || (elem.addEventListener ? elem.addEventListener(type, eventHandle, !1) : elem.attachEvent && elem.attachEvent("on" + type, eventHandle))), special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), jQuery.event.global[type] = !0);
                    elem = null
                }
            },
            remove: function(elem, types, handler, selector, mappedTypes) {
                var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
                if (elemData && (events = elemData.events)) {
                    for (types = (types || "").match(rnotwhite) || [""], t = types.length; t--;)
                        if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type) {
                            for (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), origCount = j = handlers.length; j--;) handleObj = handlers[j], !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                            origCount && !handlers.length && (special.teardown && special.teardown.call(elem, namespaces, elemData.handle) !== !1 || jQuery.removeEvent(elem, type, elemData.handle), delete events[type])
                        } else
                            for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                    jQuery.isEmptyObject(events) && (delete elemData.handle, jQuery._removeData(elem, "events"))
                }
            },
            trigger: function(event, data, elem, onlyHandlers) {
                var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document],
                    type = hasOwn.call(event, "type") ? event.type : event,
                    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") >= 0 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = elem), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || special.trigger.apply(elem, data) !== !1)) {
                    if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                        for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), tmp = cur;
                        tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                    }
                    for (i = 0;
                        (cur = eventPath[i++]) && !event.isPropagationStopped();) event.type = i > 1 ? bubbleType : special.bindType || type, handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle"), handle && handle.apply(cur, data), handle = ontype && cur[ontype], handle && handle.apply && jQuery.acceptData(cur) && (event.result = handle.apply(cur, data), event.result === !1 && event.preventDefault());
                    if (event.type = type, !onlyHandlers && !event.isDefaultPrevented() && (!special._default || special._default.apply(eventPath.pop(), data) === !1) && jQuery.acceptData(elem) && ontype && elem[type] && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype], tmp && (elem[ontype] = null), jQuery.event.triggered = type;
                        try { elem[type]() } catch (e) {}
                        jQuery.event.triggered = void 0, tmp && (elem[ontype] = tmp)
                    }
                    return event.result
                }
            },
            dispatch: function(event) {
                event = jQuery.event.fix(event);
                var i, ret, handleObj, matched, j, handlerQueue = [],
                    args = slice.call(arguments),
                    handlers = (jQuery._data(this, "events") || {})[event.type] || [],
                    special = jQuery.event.special[event.type] || {};
                if (args[0] = event, event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== !1) {
                    for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0;
                        (matched = handlerQueue[i++]) && !event.isPropagationStopped();)
                        for (event.currentTarget = matched.elem, j = 0;
                            (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) event.namespace_re && !event.namespace_re.test(handleObj.namespace) || (event.handleObj = handleObj, event.data = handleObj.data, ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), void 0 !== ret && (event.result = ret) === !1 && (event.preventDefault(), event.stopPropagation()));
                    return special.postDispatch && special.postDispatch.call(this, event), event.result
                }
            },
            handlers: function(event, handlers) {
                var sel, handleObj, matches, i, handlerQueue = [],
                    delegateCount = handlers.delegateCount,
                    cur = event.target;
                if (delegateCount && cur.nodeType && (!event.button || "click" !== event.type))
                    for (; cur != this; cur = cur.parentNode || this)
                        if (1 === cur.nodeType && (cur.disabled !== !0 || "click" !== event.type)) {
                            for (matches = [], i = 0; i < delegateCount; i++) handleObj = handlers[i], sel = handleObj.selector + " ", void 0 === matches[sel] && (matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length), matches[sel] && matches.push(handleObj);
                            matches.length && handlerQueue.push({ elem: cur, handlers: matches })
                        }
                return delegateCount < handlers.length && handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) }), handlerQueue
            },
            fix: function(event) {
                if (event[jQuery.expando]) return event;
                var i, prop, copy, type = event.type,
                    originalEvent = event,
                    fixHook = this.fixHooks[type];
                for (fixHook || (this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}), copy = fixHook.props ? this.props.concat(fixHook.props) : this.props, event = new jQuery.Event(originalEvent), i = copy.length; i--;) prop = copy[i], event[prop] = originalEvent[prop];
                return event.target || (event.target = originalEvent.srcElement || document), 3 === event.target.nodeType && (event.target = event.target.parentNode), event.metaKey = !!event.metaKey, fixHook.filter ? fixHook.filter(event, originalEvent) : event
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(event, original) { return null == event.which && (event.which = null != original.charCode ? original.charCode : original.keyCode), event } },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(event, original) {
                    var body, eventDoc, doc, button = original.button,
                        fromElement = original.fromElement;
                    return null == event.pageX && null != original.clientX && (eventDoc = event.target.ownerDocument || document, doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), !event.relatedTarget && fromElement && (event.relatedTarget = fromElement === event.target ? original.toElement : fromElement), event.which || void 0 === button || (event.which = 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0), event
                }
            },
            special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== safeActiveElement() && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { if (this === safeActiveElement() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if (jQuery.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1 }, _default: function(event) { return jQuery.nodeName(event.target, "a") } }, beforeunload: { postDispatch: function(event) { void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result) } } },
            simulate: function(type, elem, event, bubble) {
                var e = jQuery.extend(new jQuery.Event, event, { type: type, isSimulated: !0, originalEvent: {} });
                bubble ? jQuery.event.trigger(e, null, elem) : jQuery.event.dispatch.call(elem, e), e.isDefaultPrevented() && event.preventDefault()
            }
        }, jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) { elem.removeEventListener && elem.removeEventListener(type, handle, !1) } : function(elem, type, handle) {
            var name = "on" + type;
            elem.detachEvent && (typeof elem[name] === strundefined && (elem[name] = null), elem.detachEvent(name, handle))
        }, jQuery.Event = function(src, props) { return this instanceof jQuery.Event ? (src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && src.returnValue === !1 ? returnTrue : returnFalse) : this.type = src, props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), void(this[jQuery.expando] = !0)) : new jQuery.Event(src, props) }, jQuery.Event.prototype = {
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, jQuery.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(orig, fix) {
            jQuery.event.special[orig] = {
                delegateType: fix,
                bindType: fix,
                handle: function(event) {
                    var ret, target = this,
                        related = event.relatedTarget,
                        handleObj = event.handleObj;
                    return related && (related === target || jQuery.contains(target, related)) || (event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix), ret
                }
            }
        }), support.submitBubbles || (jQuery.event.special.submit = {
            setup: function() {
                return !jQuery.nodeName(this, "form") && void jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                    var elem = e.target,
                        form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : void 0;
                    form && !jQuery._data(form, "submitBubbles") && (jQuery.event.add(form, "submit._submit", function(event) { event._submit_bubble = !0 }), jQuery._data(form, "submitBubbles", !0))
                })
            },
            postDispatch: function(event) { event._submit_bubble && (delete event._submit_bubble, this.parentNode && !event.isTrigger && jQuery.event.simulate("submit", this.parentNode, event, !0)) },
            teardown: function() { return !jQuery.nodeName(this, "form") && void jQuery.event.remove(this, "._submit") }
        }), support.changeBubbles || (jQuery.event.special.change = {
            setup: function() {
                return rformElems.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (jQuery.event.add(this, "propertychange._change", function(event) { "checked" === event.originalEvent.propertyName && (this._just_changed = !0) }), jQuery.event.add(this, "click._change", function(event) { this._just_changed && !event.isTrigger && (this._just_changed = !1), jQuery.event.simulate("change", this, event, !0) })), !1) : void jQuery.event.add(this, "beforeactivate._change", function(e) {
                    var elem = e.target;
                    rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles") && (jQuery.event.add(elem, "change._change", function(event) {!this.parentNode || event.isSimulated || event.isTrigger || jQuery.event.simulate("change", this.parentNode, event, !0) }), jQuery._data(elem, "changeBubbles", !0))
                })
            },
            handle: function(event) { var elem = event.target; if (this !== elem || event.isSimulated || event.isTrigger || "radio" !== elem.type && "checkbox" !== elem.type) return event.handleObj.handler.apply(this, arguments) },
            teardown: function() { return jQuery.event.remove(this, "._change"), !rformElems.test(this.nodeName) }
        }), support.focusinBubbles || jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
            var handler = function(event) { jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), !0) };
            jQuery.event.special[fix] = {
                setup: function() {
                    var doc = this.ownerDocument || this,
                        attaches = jQuery._data(doc, fix);
                    attaches || doc.addEventListener(orig, handler, !0), jQuery._data(doc, fix, (attaches || 0) + 1)
                },
                teardown: function() {
                    var doc = this.ownerDocument || this,
                        attaches = jQuery._data(doc, fix) - 1;
                    attaches ? jQuery._data(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), jQuery._removeData(doc, fix))
                }
            }
        }), jQuery.fn.extend({
            on: function(types, selector, data, fn, one) {
                var type, origFn;
                if ("object" == typeof types) { "string" != typeof selector && (data = data || selector, selector = void 0); for (type in types) this.on(type, selector, data, types[type], one); return this }
                if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, data = void 0) : (fn = data, data = selector, selector = void 0)), fn === !1) fn = returnFalse;
                else if (!fn) return this;
                return 1 === one && (origFn = fn, fn = function(event) { return jQuery().off(event), origFn.apply(this, arguments) }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), this.each(function() { jQuery.event.add(this, types, fn, data, selector) })
            },
            one: function(types, selector, data, fn) { return this.on(types, selector, data, fn, 1) },
            off: function(types, selector, fn) { var handleObj, type; if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this; if ("object" == typeof types) { for (type in types) this.off(type, selector, types[type]); return this } return selector !== !1 && "function" != typeof selector || (fn = selector, selector = void 0), fn === !1 && (fn = returnFalse), this.each(function() { jQuery.event.remove(this, types, fn, selector) }) },
            trigger: function(type, data) { return this.each(function() { jQuery.event.trigger(type, data, this) }) },
            triggerHandler: function(type, data) { var elem = this[0]; if (elem) return jQuery.event.trigger(type, data, elem, !0) }
        });
        var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
            rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
            rleadingWhitespace = /^\s+/,
            rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            rtagName = /<([\w:]+)/,
            rtbody = /<tbody/i,
            rhtml = /<|&#?\w+;/,
            rnoInnerhtml = /<(?:script|style|link)/i,
            rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rscriptType = /^$|\/(?:java|ecma)script/i,
            rscriptTypeMasked = /^true\/(.*)/,
            rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            wrapMap = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
            safeFragment = createSafeFragment(document),
            fragmentDiv = safeFragment.appendChild(document.createElement("div"));
        wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td, jQuery.extend({
            clone: function(elem, dataAndEvents, deepDataAndEvents) {
                var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
                if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">") ? clone = elem.cloneNode(!0) : (fragmentDiv.innerHTML = elem.outerHTML, fragmentDiv.removeChild(clone = fragmentDiv.firstChild)), !(support.noCloneEvent && support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem)))
                    for (destElements = getAll(clone), srcElements = getAll(elem), i = 0; null != (node = srcElements[i]); ++i) destElements[i] && fixCloneNodeIssues(node, destElements[i]);
                if (dataAndEvents)
                    if (deepDataAndEvents)
                        for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0; null != (node = srcElements[i]); i++) cloneCopyEvent(node, destElements[i]);
                    else cloneCopyEvent(elem, clone);
                return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), destElements = srcElements = node = null, clone
            },
            buildFragment: function(elems, context, scripts, selection) {
                for (var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0; i < l; i++)
                    if (elem = elems[i], elem || 0 === elem)
                        if ("object" === jQuery.type(elem)) jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                        else if (rhtml.test(elem)) {
                    for (tmp = tmp || safe.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2], j = wrap[0]; j--;) tmp = tmp.lastChild;
                    if (!support.leadingWhitespace && rleadingWhitespace.test(elem) && nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0])), !support.tbody)
                        for (elem = "table" !== tag || rtbody.test(elem) ? "<table>" !== wrap[1] || rtbody.test(elem) ? 0 : tmp : tmp.firstChild, j = elem && elem.childNodes.length; j--;) jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length && elem.removeChild(tbody);
                    for (jQuery.merge(nodes, tmp.childNodes), tmp.textContent = ""; tmp.firstChild;) tmp.removeChild(tmp.firstChild);
                    tmp = safe.lastChild
                } else nodes.push(context.createTextNode(elem));
                for (tmp && safe.removeChild(tmp), support.appendChecked || jQuery.grep(getAll(nodes, "input"), fixDefaultChecked), i = 0; elem = nodes[i++];)
                    if ((!selection || jQuery.inArray(elem, selection) === -1) && (contains = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(safe.appendChild(elem), "script"), contains && setGlobalEval(tmp), scripts))
                        for (j = 0; elem = tmp[j++];) rscriptType.test(elem.type || "") && scripts.push(elem);
                return tmp = null, safe
            },
            cleanData: function(elems, acceptData) {
                for (var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = support.deleteExpando, special = jQuery.event.special; null != (elem = elems[i]); i++)
                    if ((acceptData || jQuery.acceptData(elem)) && (id = elem[internalKey], data = id && cache[id])) {
                        if (data.events)
                            for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                        cache[id] && (delete cache[id], deleteExpando ? delete elem[internalKey] : typeof elem.removeAttribute !== strundefined ? elem.removeAttribute(internalKey) : elem[internalKey] = null, deletedIds.push(id))
                    }
            }
        }), jQuery.fn.extend({
            text: function(value) { return access(this, function(value) { return void 0 === value ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value)) }, null, value, arguments.length) },
            append: function() {
                return this.domManip(arguments, function(elem) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var target = manipulationTarget(this, elem);
                        target.appendChild(elem)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(elem) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var target = manipulationTarget(this, elem);
                        target.insertBefore(elem, target.firstChild)
                    }
                })
            },
            before: function() { return this.domManip(arguments, function(elem) { this.parentNode && this.parentNode.insertBefore(elem, this) }) },
            after: function() { return this.domManip(arguments, function(elem) { this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling) }) },
            remove: function(selector, keepData) { for (var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0; null != (elem = elems[i]); i++) keepData || 1 !== elem.nodeType || jQuery.cleanData(getAll(elem)), elem.parentNode && (keepData && jQuery.contains(elem.ownerDocument, elem) && setGlobalEval(getAll(elem, "script")), elem.parentNode.removeChild(elem)); return this },
            empty: function() {
                for (var elem, i = 0; null != (elem = this[i]); i++) {
                    for (1 === elem.nodeType && jQuery.cleanData(getAll(elem, !1)); elem.firstChild;) elem.removeChild(elem.firstChild);
                    elem.options && jQuery.nodeName(elem, "select") && (elem.options.length = 0)
                }
                return this
            },
            clone: function(dataAndEvents, deepDataAndEvents) { return dataAndEvents = null != dataAndEvents && dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, this.map(function() { return jQuery.clone(this, dataAndEvents, deepDataAndEvents) }) },
            html: function(value) {
                return access(this, function(value) {
                    var elem = this[0] || {},
                        i = 0,
                        l = this.length;
                    if (void 0 === value) return 1 === elem.nodeType ? elem.innerHTML.replace(rinlinejQuery, "") : void 0;
                    if ("string" == typeof value && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                        value = value.replace(rxhtmlTag, "<$1></$2>");
                        try {
                            for (; i < l; i++) elem = this[i] || {}, 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.innerHTML = value);
                            elem = 0
                        } catch (e) {}
                    }
                    elem && this.empty().append(value)
                }, null, value, arguments.length)
            },
            replaceWith: function() { var arg = arguments[0]; return this.domManip(arguments, function(elem) { arg = this.parentNode, jQuery.cleanData(getAll(this)), arg && arg.replaceChild(elem, this) }), arg && (arg.length || arg.nodeType) ? this : this.remove() },
            detach: function(selector) { return this.remove(selector, !0) },
            domManip: function(args, callback) {
                args = concat.apply([], args);
                var first, node, hasScripts, scripts, doc, fragment, i = 0,
                    l = this.length,
                    set = this,
                    iNoClone = l - 1,
                    value = args[0],
                    isFunction = jQuery.isFunction(value);
                if (isFunction || l > 1 && "string" == typeof value && !support.checkClone && rchecked.test(value)) return this.each(function(index) {
                    var self = set.eq(index);
                    isFunction && (args[0] = value.call(this, index, self.html())), self.domManip(args, callback)
                });
                if (l && (fragment = jQuery.buildFragment(args, this[0].ownerDocument, !1, this), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first)) {
                    for (scripts = jQuery.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length; i < l; i++) node = fragment, i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), callback.call(this[i], node, i);
                    if (hasScripts)
                        for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), i = 0; i < hasScripts; i++) node = scripts[i], rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl && jQuery._evalUrl(node.src) : jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, "")));
                    fragment = first = null
                }
                return this
            }
        }), jQuery.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(name, original) { jQuery.fn[name] = function(selector) { for (var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1; i <= last; i++) elems = i === last ? this : this.clone(!0), jQuery(insert[i])[original](elems), push.apply(ret, elems.get()); return this.pushStack(ret) } });
        var iframe, elemdisplay = {};
        ! function() {
            var shrinkWrapBlocksVal;
            support.shrinkWrapBlocks = function() {
                if (null != shrinkWrapBlocksVal) return shrinkWrapBlocksVal;
                shrinkWrapBlocksVal = !1;
                var div, body, container;
                return body = document.getElementsByTagName("body")[0], body && body.style ? (div = document.createElement("div"), container = document.createElement("div"), container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", body.appendChild(container).appendChild(div), typeof div.style.zoom !== strundefined && (div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", div.appendChild(document.createElement("div")).style.width = "5px", shrinkWrapBlocksVal = 3 !== div.offsetWidth), body.removeChild(container), shrinkWrapBlocksVal) : void 0
            }
        }();
        var getStyles, curCSS, rmargin = /^margin/,
            rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
            rposition = /^(top|right|bottom|left)$/;
        window.getComputedStyle ? (getStyles = function(elem) { return elem.ownerDocument.defaultView.opener ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : window.getComputedStyle(elem, null) }, curCSS = function(elem, name, computed) { var width, minWidth, maxWidth, ret, style = elem.style; return computed = computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : void 0, computed && ("" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth)), void 0 === ret ? ret : ret + "" }) : document.documentElement.currentStyle && (getStyles = function(elem) { return elem.currentStyle }, curCSS = function(elem, name, computed) { var left, rs, rsLeft, ret, style = elem.style; return computed = computed || getStyles(elem), ret = computed ? computed[name] : void 0, null == ret && style && style[name] && (ret = style[name]), rnumnonpx.test(ret) && !rposition.test(name) && (left = style.left, rs = elem.runtimeStyle, rsLeft = rs && rs.left, rsLeft && (rs.left = elem.currentStyle.left), style.left = "fontSize" === name ? "1em" : ret, ret = style.pixelLeft + "px", style.left = left, rsLeft && (rs.left = rsLeft)), void 0 === ret ? ret : ret + "" || "auto" }),
            function() {
                function computeStyleTests() {
                    var div, body, container, contents;
                    body = document.getElementsByTagName("body")[0], body && body.style && (div = document.createElement("div"), container = document.createElement("div"), container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", body.appendChild(container).appendChild(div), div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", pixelPositionVal = boxSizingReliableVal = !1, reliableMarginRightVal = !0, window.getComputedStyle && (pixelPositionVal = "1%" !== (window.getComputedStyle(div, null) || {}).top, boxSizingReliableVal = "4px" === (window.getComputedStyle(div, null) || { width: "4px" }).width, contents = div.appendChild(document.createElement("div")), contents.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", contents.style.marginRight = contents.style.width = "0", div.style.width = "1px", reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents, null) || {}).marginRight), div.removeChild(contents)), div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", contents = div.getElementsByTagName("td"), contents[0].style.cssText = "margin:0;border:0;padding:0;display:none", reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight, reliableHiddenOffsetsVal && (contents[0].style.display = "", contents[1].style.display = "none", reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight), body.removeChild(container))
                }
                var div, style, a, pixelPositionVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal;
                div = document.createElement("div"), div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = div.getElementsByTagName("a")[0], style = a && a.style, style && (style.cssText = "float:left;opacity:.5", support.opacity = "0.5" === style.opacity, support.cssFloat = !!style.cssFloat, div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = "content-box" === div.style.backgroundClip, support.boxSizing = "" === style.boxSizing || "" === style.MozBoxSizing || "" === style.WebkitBoxSizing, jQuery.extend(support, { reliableHiddenOffsets: function() { return null == reliableHiddenOffsetsVal && computeStyleTests(), reliableHiddenOffsetsVal }, boxSizingReliable: function() { return null == boxSizingReliableVal && computeStyleTests(), boxSizingReliableVal }, pixelPosition: function() { return null == pixelPositionVal && computeStyleTests(), pixelPositionVal }, reliableMarginRight: function() { return null == reliableMarginRightVal && computeStyleTests(), reliableMarginRightVal } }))
            }(), jQuery.swap = function(elem, options, callback, args) {
                var ret, name, old = {};
                for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
                ret = callback.apply(elem, args || []);
                for (name in options) elem.style[name] = old[name];
                return ret
            };
        var ralpha = /alpha\([^)]*\)/i,
            ropacity = /opacity\s*=\s*([^)]*)/,
            rdisplayswap = /^(none|table(?!-c[ea]).+)/,
            rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
            rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
            cssShow = { position: "absolute", visibility: "hidden", display: "block" },
            cssNormalTransform = { letterSpacing: "0", fontWeight: "400" },
            cssPrefixes = ["Webkit", "O", "Moz", "ms"];
        jQuery.extend({
            cssHooks: { opacity: { get: function(elem, computed) { if (computed) { var ret = curCSS(elem, "opacity"); return "" === ret ? "1" : ret } } } },
            cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { "float": support.cssFloat ? "cssFloat" : "styleFloat" },
            style: function(elem, name, value, extra) {
                if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                    var ret, type, hooks, origName = jQuery.camelCase(name),
                        style = elem.style;
                    if (name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value) return hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name];
                    if (type = typeof value, "string" === type && (ret = rrelNum.exec(value)) && (value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name)), type = "number"), null != value && value === value && ("number" !== type || jQuery.cssNumber[origName] || (value += "px"), support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), !(hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra))))) try { style[name] = value } catch (e) {}
                }
            },
            css: function(elem, name, extra, styles) { var num, val, hooks, origName = jQuery.camelCase(name); return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), void 0 === val && (val = curCSS(elem, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === extra || extra ? (num = parseFloat(val), extra === !0 || jQuery.isNumeric(num) ? num || 0 : val) : val }
        }), jQuery.each(["height", "width"], function(i, name) { jQuery.cssHooks[name] = { get: function(elem, computed, extra) { if (computed) return rdisplayswap.test(jQuery.css(elem, "display")) && 0 === elem.offsetWidth ? jQuery.swap(elem, cssShow, function() { return getWidthOrHeight(elem, name, extra) }) : getWidthOrHeight(elem, name, extra) }, set: function(elem, value, extra) { var styles = extra && getStyles(elem); return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && "border-box" === jQuery.css(elem, "boxSizing", !1, styles), styles) : 0) } } }), support.opacity || (jQuery.cssHooks.opacity = {
            get: function(elem, computed) { return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "" },
            set: function(elem, value) {
                var style = elem.style,
                    currentStyle = elem.currentStyle,
                    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + 100 * value + ")" : "",
                    filter = currentStyle && currentStyle.filter || style.filter || "";
                style.zoom = 1, (value >= 1 || "" === value) && "" === jQuery.trim(filter.replace(ralpha, "")) && style.removeAttribute && (style.removeAttribute("filter"), "" === value || currentStyle && !currentStyle.filter) || (style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity)
            }
        }), jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) { if (computed) return jQuery.swap(elem, { display: "inline-block" }, curCSS, [elem, "marginRight"]) }), jQuery.each({ margin: "", padding: "", border: "Width" }, function(prefix, suffix) { jQuery.cssHooks[prefix + suffix] = { expand: function(value) { for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [value]; i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0]; return expanded } }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber) }), jQuery.fn.extend({
            css: function(name, value) {
                return access(this, function(elem, name, value) {
                    var styles, len, map = {},
                        i = 0;
                    if (jQuery.isArray(name)) { for (styles = getStyles(elem), len = name.length; i < len; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles); return map }
                    return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
                }, name, value, arguments.length > 1)
            },
            show: function() { return showHide(this, !0) },
            hide: function() { return showHide(this) },
            toggle: function(state) { return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() { isHidden(this) ? jQuery(this).show() : jQuery(this).hide() }) }
        }), jQuery.Tween = Tween, Tween.prototype = { constructor: Tween, init: function(elem, options, prop, end, easing, unit) { this.elem = elem, this.prop = prop, this.easing = easing || "swing", this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px") }, cur: function() { var hooks = Tween.propHooks[this.prop]; return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this) }, run: function(percent) { var eased, hooks = Tween.propHooks[this.prop]; return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this } }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = { _default: { get: function(tween) { var result; return null == tween.elem[tween.prop] || tween.elem.style && null != tween.elem.style[tween.prop] ? (result = jQuery.css(tween.elem, tween.prop, ""), result && "auto" !== result ? result : 0) : tween.elem[tween.prop] }, set: function(tween) { jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : tween.elem.style && (null != tween.elem.style[jQuery.cssProps[tween.prop]] || jQuery.cssHooks[tween.prop]) ? jQuery.style(tween.elem, tween.prop, tween.now + tween.unit) : tween.elem[tween.prop] = tween.now } } }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = { set: function(tween) { tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now) } }, jQuery.easing = { linear: function(p) { return p }, swing: function(p) { return .5 - Math.cos(p * Math.PI) / 2 } }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
        var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
            rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
            rrun = /queueHooks$/,
            animationPrefilters = [defaultPrefilter],
            tweeners = {
                "*": [function(prop, value) {
                    var tween = this.createTween(prop, value),
                        target = tween.cur(),
                        parts = rfxnum.exec(value),
                        unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
                        start = (jQuery.cssNumber[prop] || "px" !== unit && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
                        scale = 1,
                        maxIterations = 20;
                    if (start && start[3] !== unit) {
                        unit = unit || start[3], parts = parts || [], start = +target || 1;
                        do scale = scale || ".5", start /= scale, jQuery.style(tween.elem, prop, start + unit); while (scale !== (scale = tween.cur() / target) && 1 !== scale && --maxIterations)
                    }
                    return parts && (start = tween.start = +start || +target || 0, tween.unit = unit, tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]), tween
                }]
            };
        jQuery.Animation = jQuery.extend(Animation, { tweener: function(props, callback) { jQuery.isFunction(props) ? (callback = props, props = ["*"]) : props = props.split(" "); for (var prop, index = 0, length = props.length; index < length; index++) prop = props[index], tweeners[prop] = tweeners[prop] || [], tweeners[prop].unshift(callback) }, prefilter: function(callback, prepend) { prepend ? animationPrefilters.unshift(callback) : animationPrefilters.push(callback) } }), jQuery.speed = function(speed, easing, fn) { var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : { complete: fn || !fn && easing || jQuery.isFunction(speed) && speed, duration: speed, easing: fn && easing || easing && !jQuery.isFunction(easing) && easing }; return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, null != opt.queue && opt.queue !== !0 || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() { jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue) }, opt }, jQuery.fn.extend({
                fadeTo: function(speed, to, easing, callback) { return this.filter(isHidden).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback) },
                animate: function(prop, speed, easing, callback) {
                    var empty = jQuery.isEmptyObject(prop),
                        optall = jQuery.speed(speed, easing, callback),
                        doAnimation = function() {
                            var anim = Animation(this, jQuery.extend({}, prop), optall);
                            (empty || jQuery._data(this, "finish")) && anim.stop(!0)
                        };
                    return doAnimation.finish = doAnimation, empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
                },
                stop: function(type, clearQueue, gotoEnd) {
                    var stopQueue = function(hooks) {
                        var stop = hooks.stop;
                        delete hooks.stop, stop(gotoEnd)
                    };
                    return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && type !== !1 && this.queue(type || "fx", []), this.each(function() {
                        var dequeue = !0,
                            index = null != type && type + "queueHooks",
                            timers = jQuery.timers,
                            data = jQuery._data(this);
                        if (index) data[index] && data[index].stop && stopQueue(data[index]);
                        else
                            for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                        for (index = timers.length; index--;) timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), dequeue = !1, timers.splice(index, 1));
                        !dequeue && gotoEnd || jQuery.dequeue(this, type)
                    })
                },
                finish: function(type) {
                    return type !== !1 && (type = type || "fx"), this.each(function() {
                        var index, data = jQuery._data(this),
                            queue = data[type + "queue"],
                            hooks = data[type + "queueHooks"],
                            timers = jQuery.timers,
                            length = queue ? queue.length : 0;
                        for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index = timers.length; index--;) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1));
                        for (index = 0; index < length; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
                        delete data.finish
                    })
                }
            }), jQuery.each(["toggle", "show", "hide"], function(i, name) {
                var cssFn = jQuery.fn[name];
                jQuery.fn[name] = function(speed, easing, callback) { return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback) }
            }), jQuery.each({ slideDown: genFx("show"), slideUp: genFx("hide"), slideToggle: genFx("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(name, props) { jQuery.fn[name] = function(speed, easing, callback) { return this.animate(props, speed, easing, callback) } }), jQuery.timers = [], jQuery.fx.tick = function() {
                var timer, timers = jQuery.timers,
                    i = 0;
                for (fxNow = jQuery.now(); i < timers.length; i++) timer = timers[i], timer() || timers[i] !== timer || timers.splice(i--, 1);
                timers.length || jQuery.fx.stop(), fxNow = void 0
            }, jQuery.fx.timer = function(timer) { jQuery.timers.push(timer), timer() ? jQuery.fx.start() : jQuery.timers.pop() }, jQuery.fx.interval = 13, jQuery.fx.start = function() { timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval)) }, jQuery.fx.stop = function() { clearInterval(timerId), timerId = null }, jQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 }, jQuery.fn.delay = function(time, type) {
                return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(next, hooks) {
                    var timeout = setTimeout(next, time);
                    hooks.stop = function() { clearTimeout(timeout) }
                })
            },
            function() {
                var input, div, select, a, opt;
                div = document.createElement("div"), div.setAttribute("className", "t"), div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = div.getElementsByTagName("a")[0], select = document.createElement("select"), opt = select.appendChild(document.createElement("option")), input = div.getElementsByTagName("input")[0], a.style.cssText = "top:1px", support.getSetAttribute = "t" !== div.className, support.style = /top/.test(a.getAttribute("style")), support.hrefNormalized = "/a" === a.getAttribute("href"), support.checkOn = !!input.value, support.optSelected = opt.selected, support.enctype = !!document.createElement("form").enctype, select.disabled = !0, support.optDisabled = !opt.disabled, input = document.createElement("input"), input.setAttribute("value", ""), support.input = "" === input.getAttribute("value"), input.value = "t", input.setAttribute("type", "radio"), support.radioValue = "t" === input.value
            }();
        var rreturn = /\r/g;
        jQuery.fn.extend({
            val: function(value) {
                var hooks, ret, isFunction, elem = this[0];
                return arguments.length ? (isFunction = jQuery.isFunction(value), this.each(function(i) {
                    var val;
                    1 === this.nodeType && (val = isFunction ? value.call(this, i, jQuery(this).val()) : value, null == val ? val = "" : "number" == typeof val ? val += "" : jQuery.isArray(val) && (val = jQuery.map(val, function(value) { return null == value ? "" : value + "" })), hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], hooks && "set" in hooks && void 0 !== hooks.set(this, val, "value") || (this.value = val))
                })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : (ret = elem.value, "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret)) : void 0
            }
        }), jQuery.extend({
            valHooks: {
                option: { get: function(elem) { var val = jQuery.find.attr(elem, "value"); return null != val ? val : jQuery.trim(jQuery.text(elem)) } },
                select: {
                    get: function(elem) {
                        for (var value, option, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0; i < max; i++)
                            if (option = options[i], (option.selected || i === index) && (support.optDisabled ? !option.disabled : null === option.getAttribute("disabled")) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                                if (value = jQuery(option).val(), one) return value;
                                values.push(value)
                            }
                        return values
                    },
                    set: function(elem, value) {
                        for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--;)
                            if (option = options[i], jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0) try { option.selected = optionSet = !0 } catch (_) { option.scrollHeight } else option.selected = !1;
                        return optionSet || (elem.selectedIndex = -1), options
                    }
                }
            }
        }), jQuery.each(["radio", "checkbox"], function() { jQuery.valHooks[this] = { set: function(elem, value) { if (jQuery.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0 } }, support.checkOn || (jQuery.valHooks[this].get = function(elem) { return null === elem.getAttribute("value") ? "on" : elem.value }) });
        var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle,
            ruseDefault = /^(?:checked|selected)$/i,
            getSetAttribute = support.getSetAttribute,
            getSetInput = support.input;
        jQuery.fn.extend({ attr: function(name, value) { return access(this, jQuery.attr, name, value, arguments.length > 1) }, removeAttr: function(name) { return this.each(function() { jQuery.removeAttr(this, name) }) } }), jQuery.extend({
            attr: function(elem, name, value) { var hooks, ret, nType = elem.nodeType; if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return typeof elem.getAttribute === strundefined ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)), void 0 === value ? hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : (ret = jQuery.find.attr(elem, name), null == ret ? void 0 : ret) : null !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), value) : void jQuery.removeAttr(elem, name)) },
            removeAttr: function(elem, value) {
                var name, propName, i = 0,
                    attrNames = value && value.match(rnotwhite);
                if (attrNames && 1 === elem.nodeType)
                    for (; name = attrNames[i++];) propName = jQuery.propFix[name] || name, jQuery.expr.match.bool.test(name) ? getSetInput && getSetAttribute || !ruseDefault.test(name) ? elem[propName] = !1 : elem[jQuery.camelCase("default-" + name)] = elem[propName] = !1 : jQuery.attr(elem, name, ""), elem.removeAttribute(getSetAttribute ? name : propName)
            },
            attrHooks: { type: { set: function(elem, value) { if (!support.radioValue && "radio" === value && jQuery.nodeName(elem, "input")) { var val = elem.value; return elem.setAttribute("type", value), val && (elem.value = val), value } } } }
        }), boolHook = { set: function(elem, value, name) { return value === !1 ? jQuery.removeAttr(elem, name) : getSetInput && getSetAttribute || !ruseDefault.test(name) ? elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name) : elem[jQuery.camelCase("default-" + name)] = elem[name] = !0, name } }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
            var getter = attrHandle[name] || jQuery.find.attr;
            attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function(elem, name, isXML) { var ret, handle; return isXML || (handle = attrHandle[name], attrHandle[name] = ret, ret = null != getter(elem, name, isXML) ? name.toLowerCase() : null, attrHandle[name] = handle), ret } : function(elem, name, isXML) { if (!isXML) return elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null }
        }), getSetInput && getSetAttribute || (jQuery.attrHooks.value = { set: function(elem, value, name) { return jQuery.nodeName(elem, "input") ? void(elem.defaultValue = value) : nodeHook && nodeHook.set(elem, value, name) } }), getSetAttribute || (nodeHook = { set: function(elem, value, name) { var ret = elem.getAttributeNode(name); if (ret || elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name)), ret.value = value += "", "value" === name || value === elem.getAttribute(name)) return value } }, attrHandle.id = attrHandle.name = attrHandle.coords = function(elem, name, isXML) { var ret; if (!isXML) return (ret = elem.getAttributeNode(name)) && "" !== ret.value ? ret.value : null }, jQuery.valHooks.button = { get: function(elem, name) { var ret = elem.getAttributeNode(name); if (ret && ret.specified) return ret.value }, set: nodeHook.set }, jQuery.attrHooks.contenteditable = { set: function(elem, value, name) { nodeHook.set(elem, "" !== value && value, name) } }, jQuery.each(["width", "height"], function(i, name) { jQuery.attrHooks[name] = { set: function(elem, value) { if ("" === value) return elem.setAttribute(name, "auto"), value } } })), support.style || (jQuery.attrHooks.style = { get: function(elem) { return elem.style.cssText || void 0 }, set: function(elem, value) { return elem.style.cssText = value + "" } });
        var rfocusable = /^(?:input|select|textarea|button|object)$/i,
            rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({ prop: function(name, value) { return access(this, jQuery.prop, name, value, arguments.length > 1) }, removeProp: function(name) { return name = jQuery.propFix[name] || name, this.each(function() { try { this[name] = void 0, delete this[name] } catch (e) {} }) } }), jQuery.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(elem, name, value) { var ret, hooks, notxml, nType = elem.nodeType; if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return notxml = 1 !== nType || !jQuery.isXMLDoc(elem), notxml && (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name] }, propHooks: { tabIndex: { get: function(elem) { var tabindex = jQuery.find.attr(elem, "tabindex"); return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1 } } } }), support.hrefNormalized || jQuery.each(["href", "src"], function(i, name) { jQuery.propHooks[name] = { get: function(elem) { return elem.getAttribute(name, 4) } } }), support.optSelected || (jQuery.propHooks.selected = { get: function(elem) { var parent = elem.parentNode; return parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex), null } }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { jQuery.propFix[this.toLowerCase()] = this }), support.enctype || (jQuery.propFix.enctype = "encoding");
        var rclass = /[\t\r\n\f]/g;
        jQuery.fn.extend({
            addClass: function(value) {
                var classes, elem, cur, clazz, j, finalValue, i = 0,
                    len = this.length,
                    proceed = "string" == typeof value && value;
                if (jQuery.isFunction(value)) return this.each(function(j) { jQuery(this).addClass(value.call(this, j, this.className)) });
                if (proceed)
                    for (classes = (value || "").match(rnotwhite) || []; i < len; i++)
                        if (elem = this[i], cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ")) {
                            for (j = 0; clazz = classes[j++];) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                            finalValue = jQuery.trim(cur), elem.className !== finalValue && (elem.className = finalValue)
                        }
                return this
            },
            removeClass: function(value) {
                var classes, elem, cur, clazz, j, finalValue, i = 0,
                    len = this.length,
                    proceed = 0 === arguments.length || "string" == typeof value && value;
                if (jQuery.isFunction(value)) return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, this.className));
                });
                if (proceed)
                    for (classes = (value || "").match(rnotwhite) || []; i < len; i++)
                        if (elem = this[i], cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "")) {
                            for (j = 0; clazz = classes[j++];)
                                for (; cur.indexOf(" " + clazz + " ") >= 0;) cur = cur.replace(" " + clazz + " ", " ");
                            finalValue = value ? jQuery.trim(cur) : "", elem.className !== finalValue && (elem.className = finalValue)
                        }
                return this
            },
            toggleClass: function(value, stateVal) {
                var type = typeof value;
                return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function(i) { jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal) }) : this.each(function() {
                    if ("string" === type)
                        for (var className, i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || []; className = classNames[i++];) self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
                    else type !== strundefined && "boolean" !== type || (this.className && jQuery._data(this, "__className__", this.className), this.className = this.className || value === !1 ? "" : jQuery._data(this, "__className__") || "")
                })
            },
            hasClass: function(selector) {
                for (var className = " " + selector + " ", i = 0, l = this.length; i < l; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) return !0;
                return !1
            }
        }), jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(i, name) { jQuery.fn[name] = function(data, fn) { return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name) } }), jQuery.fn.extend({ hover: function(fnOver, fnOut) { return this.mouseenter(fnOver).mouseleave(fnOut || fnOver) }, bind: function(types, data, fn) { return this.on(types, null, data, fn) }, unbind: function(types, fn) { return this.off(types, null, fn) }, delegate: function(selector, types, data, fn) { return this.on(types, selector, data, fn) }, undelegate: function(selector, types, fn) { return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn) } });
        var nonce = jQuery.now(),
            rquery = /\?/,
            rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        jQuery.parseJSON = function(data) {
            if (window.JSON && window.JSON.parse) return window.JSON.parse(data + "");
            var requireNonComma, depth = null,
                str = jQuery.trim(data + "");
            return str && !jQuery.trim(str.replace(rvalidtokens, function(token, comma, open, close) { return requireNonComma && comma && (depth = 0), 0 === depth ? token : (requireNonComma = open || comma, depth += !close - !open, "") })) ? Function("return " + str)() : jQuery.error("Invalid JSON: " + data)
        }, jQuery.parseXML = function(data) { var xml, tmp; if (!data || "string" != typeof data) return null; try { window.DOMParser ? (tmp = new DOMParser, xml = tmp.parseFromString(data, "text/xml")) : (xml = new ActiveXObject("Microsoft.XMLDOM"), xml.async = "false", xml.loadXML(data)) } catch (e) { xml = void 0 } return xml && xml.documentElement && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml };
        var ajaxLocParts, ajaxLocation, rhash = /#.*$/,
            rts = /([?&])_=[^&]*/,
            rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            rnoContent = /^(?:GET|HEAD)$/,
            rprotocol = /^\/\//,
            rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            prefilters = {},
            transports = {},
            allTypes = "*/".concat("*");
        try { ajaxLocation = location.href } catch (e) { ajaxLocation = document.createElement("a"), ajaxLocation.href = "", ajaxLocation = ajaxLocation.href }
        ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [], jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: ajaxLocation, type: "GET", isLocal: rlocalProtocol.test(ajaxLocParts[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": allTypes, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(target, settings) { return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target) },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            ajax: function(url, options) {
                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    2 !== state && (state = 2, timeoutTimer && clearTimeout(timeoutTimer), transport = void 0, responseHeadersString = headers || "", jqXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && status < 300 || 304 === status, responses && (response = ajaxHandleResponses(s, jqXHR, responses)), response = ajaxConvert(s, response, jqXHR, isSuccess), isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"), modified && (jQuery.lastModified[cacheURL] = modified), modified = jqXHR.getResponseHeader("etag"), modified && (jQuery.etag[cacheURL] = modified)), 204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, !status && statusText || (statusText = "error", status < 0 && (status = 0))), jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]), jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]), completeDeferred.fireWith(callbackContext, [jqXHR, statusText]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [jqXHR, s]), --jQuery.active || jQuery.event.trigger("ajaxStop")))
                }
                "object" == typeof url && (options = url, url = void 0), options = options || {};
                var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options),
                    callbackContext = s.context || s,
                    globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                    deferred = jQuery.Deferred(),
                    completeDeferred = jQuery.Callbacks("once memory"),
                    statusCode = s.statusCode || {},
                    requestHeaders = {},
                    requestHeadersNames = {},
                    state = 0,
                    strAbort = "canceled",
                    jqXHR = {
                        readyState: 0,
                        getResponseHeader: function(key) {
                            var match;
                            if (2 === state) {
                                if (!responseHeaders)
                                    for (responseHeaders = {}; match = rheaders.exec(responseHeadersString);) responseHeaders[match[1].toLowerCase()] = match[2];
                                match = responseHeaders[key.toLowerCase()]
                            }
                            return null == match ? null : match
                        },
                        getAllResponseHeaders: function() { return 2 === state ? responseHeadersString : null },
                        setRequestHeader: function(name, value) { var lname = name.toLowerCase(); return state || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, requestHeaders[name] = value), this },
                        overrideMimeType: function(type) { return state || (s.mimeType = type), this },
                        statusCode: function(map) {
                            var code;
                            if (map)
                                if (state < 2)
                                    for (code in map) statusCode[code] = [statusCode[code], map[code]];
                                else jqXHR.always(map[jqXHR.status]);
                            return this
                        },
                        abort: function(statusText) { var finalText = statusText || strAbort; return transport && transport.abort(finalText), done(0, finalText), this }
                    };
                if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""], null == s.crossDomain && (parts = rurl.exec(s.url.toLowerCase()), s.crossDomain = !(!parts || parts[1] === ajaxLocParts[1] && parts[2] === ajaxLocParts[2] && (parts[3] || ("http:" === parts[1] ? "80" : "443")) === (ajaxLocParts[3] || ("http:" === ajaxLocParts[1] ? "80" : "443")))), s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === state) return jqXHR;
                fireGlobals = jQuery.event && s.global, fireGlobals && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url, s.hasContent || (s.data && (cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), s.cache === !1 && (s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++)), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && s.contentType !== !1 || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || 2 === state)) return jqXHR.abort();
                strAbort = "abort";
                for (i in { success: 1, error: 1, complete: 1 }) jqXHR[i](s[i]);
                if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
                    jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]), s.async && s.timeout > 0 && (timeoutTimer = setTimeout(function() { jqXHR.abort("timeout") }, s.timeout));
                    try { state = 1, transport.send(requestHeaders, done) } catch (e) {
                        if (!(state < 2)) throw e;
                        done(-1, e)
                    }
                } else done(-1, "No Transport");
                return jqXHR
            },
            getJSON: function(url, data, callback) { return jQuery.get(url, data, callback, "json") },
            getScript: function(url, callback) { return jQuery.get(url, void 0, callback, "script") }
        }), jQuery.each(["get", "post"], function(i, method) { jQuery[method] = function(url, data, callback, type) { return jQuery.isFunction(data) && (type = type || callback, callback = data, data = void 0), jQuery.ajax({ url: url, type: method, dataType: type, data: data, success: callback }) } }), jQuery._evalUrl = function(url) { return jQuery.ajax({ url: url, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, jQuery.fn.extend({
            wrapAll: function(html) {
                if (jQuery.isFunction(html)) return this.each(function(i) { jQuery(this).wrapAll(html.call(this, i)) });
                if (this[0]) {
                    var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function() { for (var elem = this; elem.firstChild && 1 === elem.firstChild.nodeType;) elem = elem.firstChild; return elem }).append(this)
                }
                return this
            },
            wrapInner: function(html) {
                return jQuery.isFunction(html) ? this.each(function(i) { jQuery(this).wrapInner(html.call(this, i)) }) : this.each(function() {
                    var self = jQuery(this),
                        contents = self.contents();
                    contents.length ? contents.wrapAll(html) : self.append(html)
                })
            },
            wrap: function(html) { var isFunction = jQuery.isFunction(html); return this.each(function(i) { jQuery(this).wrapAll(isFunction ? html.call(this, i) : html) }) },
            unwrap: function() { return this.parent().each(function() { jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes) }).end() }
        }), jQuery.expr.filters.hidden = function(elem) { return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !support.reliableHiddenOffsets() && "none" === (elem.style && elem.style.display || jQuery.css(elem, "display")) }, jQuery.expr.filters.visible = function(elem) { return !jQuery.expr.filters.hidden(elem) };
        var r20 = /%20/g,
            rbracket = /\[\]$/,
            rCRLF = /\r?\n/g,
            rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
            rsubmittable = /^(?:input|select|textarea|keygen)/i;
        jQuery.param = function(a, traditional) {
            var prefix, s = [],
                add = function(key, value) { value = jQuery.isFunction(value) ? value() : null == value ? "" : value, s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value) };
            if (void 0 === traditional && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() { add(this.name, this.value) });
            else
                for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
            return s.join("&").replace(r20, "+")
        }, jQuery.fn.extend({ serialize: function() { return jQuery.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var elements = jQuery.prop(this, "elements"); return elements ? jQuery.makeArray(elements) : this }).filter(function() { var type = this.type; return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type)) }).map(function(i, elem) { var val = jQuery(this).val(); return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) { return { name: elem.name, value: val.replace(rCRLF, "\r\n") } }) : { name: elem.name, value: val.replace(rCRLF, "\r\n") } }).get() } }), jQuery.ajaxSettings.xhr = void 0 !== window.ActiveXObject ? function() { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR() } : createStandardXHR;
        var xhrId = 0,
            xhrCallbacks = {},
            xhrSupported = jQuery.ajaxSettings.xhr();
        window.attachEvent && window.attachEvent("onunload", function() { for (var key in xhrCallbacks) xhrCallbacks[key](void 0, !0) }), support.cors = !!xhrSupported && "withCredentials" in xhrSupported, xhrSupported = support.ajax = !!xhrSupported, xhrSupported && jQuery.ajaxTransport(function(options) {
            if (!options.crossDomain || support.cors) {
                var callback;
                return {
                    send: function(headers, complete) {
                        var i, xhr = options.xhr(),
                            id = ++xhrId;
                        if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields)
                            for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                        options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest");
                        for (i in headers) void 0 !== headers[i] && xhr.setRequestHeader(i, headers[i] + "");
                        xhr.send(options.hasContent && options.data || null), callback = function(_, isAbort) {
                            var status, statusText, responses;
                            if (callback && (isAbort || 4 === xhr.readyState))
                                if (delete xhrCallbacks[id], callback = void 0, xhr.onreadystatechange = jQuery.noop, isAbort) 4 !== xhr.readyState && xhr.abort();
                                else {
                                    responses = {}, status = xhr.status, "string" == typeof xhr.responseText && (responses.text = xhr.responseText);
                                    try { statusText = xhr.statusText } catch (e) { statusText = "" }
                                    status || !options.isLocal || options.crossDomain ? 1223 === status && (status = 204) : status = responses.text ? 200 : 404
                                }
                            responses && complete(status, statusText, responses, xhr.getAllResponseHeaders())
                        }, options.async ? 4 === xhr.readyState ? setTimeout(callback) : xhr.onreadystatechange = xhrCallbacks[id] = callback : callback()
                    },
                    abort: function() { callback && callback(void 0, !0) }
                }
            }
        }), jQuery.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(text) { return jQuery.globalEval(text), text } } }), jQuery.ajaxPrefilter("script", function(s) { void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET", s.global = !1) }), jQuery.ajaxTransport("script", function(s) {
            if (s.crossDomain) {
                var script, head = document.head || jQuery("head")[0] || document.documentElement;
                return {
                    send: function(_, callback) {
                        script = document.createElement("script"), script.async = !0, s.scriptCharset && (script.charset = s.scriptCharset), script.src = s.url, script.onload = script.onreadystatechange = function(_, isAbort) {
                            (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) && (script.onload = script.onreadystatechange = null, script.parentNode && script.parentNode.removeChild(script), script = null, isAbort || callback(200, "success"))
                        }, head.insertBefore(script, head.firstChild)
                    },
                    abort: function() { script && script.onload(void 0, !0) }
                }
            }
        });
        var oldCallbacks = [],
            rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++; return this[callback] = !0, callback } }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) { var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data"); if (jsonProp || "jsonp" === s.dataTypes[0]) return callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== !1 && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() { return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0] }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() { responseContainer = arguments }, jqXHR.always(function() { window[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = void 0 }), "script" }), jQuery.parseHTML = function(data, context, keepScripts) {
            if (!data || "string" != typeof data) return null;
            "boolean" == typeof context && (keepScripts = context, context = !1), context = context || document;
            var parsed = rsingleTag.exec(data),
                scripts = !keepScripts && [];
            return parsed ? [context.createElement(parsed[1])] : (parsed = jQuery.buildFragment([data], context, scripts), scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes))
        };
        var _load = jQuery.fn.load;
        jQuery.fn.load = function(url, params, callback) {
            if ("string" != typeof url && _load) return _load.apply(this, arguments);
            var selector, response, type, self = this,
                off = url.indexOf(" ");
            return off >= 0 && (selector = jQuery.trim(url.slice(off, url.length)), url = url.slice(0, off)), jQuery.isFunction(params) ? (callback = params, params = void 0) : params && "object" == typeof params && (type = "POST"), self.length > 0 && jQuery.ajax({ url: url, type: type, dataType: "html", data: params }).done(function(responseText) { response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText) }).complete(callback && function(jqXHR, status) { self.each(callback, response || [jqXHR.responseText, status, jqXHR]) }), this
        }, jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) { jQuery.fn[type] = function(fn) { return this.on(type, fn) } }), jQuery.expr.filters.animated = function(elem) { return jQuery.grep(jQuery.timers, function(fn) { return elem === fn.elem }).length };
        var docElem = window.document.documentElement;
        jQuery.offset = {
            setOffset: function(elem, options, i) {
                var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
                    curElem = jQuery(elem),
                    props = {};
                "static" === position && (elem.style.position = "relative"), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = ("absolute" === position || "fixed" === position) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1, calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), jQuery.isFunction(options) && (options = options.call(elem, i, curOffset)), null != options.top && (props.top = options.top - curOffset.top + curTop), null != options.left && (props.left = options.left - curOffset.left + curLeft), "using" in options ? options.using.call(elem, props) : curElem.css(props)
            }
        }, jQuery.fn.extend({
            offset: function(options) {
                if (arguments.length) return void 0 === options ? this : this.each(function(i) { jQuery.offset.setOffset(this, options, i) });
                var docElem, win, box = { top: 0, left: 0 },
                    elem = this[0],
                    doc = elem && elem.ownerDocument;
                return doc ? (docElem = doc.documentElement, jQuery.contains(docElem, elem) ? (typeof elem.getBoundingClientRect !== strundefined && (box = elem.getBoundingClientRect()), win = getWindow(doc), { top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0), left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0) }) : box) : void 0
            },
            position: function() {
                if (this[0]) {
                    var offsetParent, offset, parentOffset = { top: 0, left: 0 },
                        elem = this[0];
                    return "fixed" === jQuery.css(elem, "position") ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", !0), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", !0)), { top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0), left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map(function() { for (var offsetParent = this.offsetParent || docElem; offsetParent && !jQuery.nodeName(offsetParent, "html") && "static" === jQuery.css(offsetParent, "position");) offsetParent = offsetParent.offsetParent; return offsetParent || docElem }) }
        }), jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
            var top = /Y/.test(prop);
            jQuery.fn[method] = function(val) { return access(this, function(elem, method, val) { var win = getWindow(elem); return void 0 === val ? win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method] : void(win ? win.scrollTo(top ? jQuery(win).scrollLeft() : val, top ? val : jQuery(win).scrollTop()) : elem[method] = val) }, method, val, arguments.length, null) }
        }), jQuery.each(["top", "left"], function(i, prop) { jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) { if (computed) return computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed }) }), jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
            jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function(defaultExtra, funcName) {
                jQuery.fn[funcName] = function(margin, value) {
                    var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin),
                        extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
                    return access(this, function(elem, type, value) { var doc; return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra) }, type, chainable ? margin : void 0, chainable, null)
                }
            })
        }), jQuery.fn.size = function() { return this.length }, jQuery.fn.andSelf = jQuery.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return jQuery });
        var _jQuery = window.jQuery,
            _$ = window.$;
        return jQuery.noConflict = function(deep) { return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery }, typeof noGlobal === strundefined && (window.jQuery = window.$ = jQuery), jQuery
    }),
    /**
     * EvEmitter v1.1.0
     * Lil' event emitter
     * MIT License
     */
    function(global, factory) { "function" == typeof define && define.amd ? define(factory) : "object" == typeof module && module.exports ? module.exports = factory() : global.EvEmitter = factory() }("undefined" != typeof window ? window : this, function() {
        "use strict";

        function EvEmitter() {}
        var proto = EvEmitter.prototype;
        return proto.on = function(eventName, listener) {
            if (eventName && listener) {
                var events = this._events = this._events || {},
                    listeners = events[eventName] = events[eventName] || [];
                return listeners.indexOf(listener) == -1 && listeners.push(listener), this
            }
        }, proto.once = function(eventName, listener) {
            if (eventName && listener) {
                this.on(eventName, listener);
                var onceEvents = this._onceEvents = this._onceEvents || {},
                    onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
                return onceListeners[listener] = !0, this
            }
        }, proto.off = function(eventName, listener) { var listeners = this._events && this._events[eventName]; if (listeners && listeners.length) { var index = listeners.indexOf(listener); return index != -1 && listeners.splice(index, 1), this } }, proto.emitEvent = function(eventName, args) {
            var listeners = this._events && this._events[eventName];
            if (listeners && listeners.length) {
                listeners = listeners.slice(0), args = args || [];
                for (var onceListeners = this._onceEvents && this._onceEvents[eventName], i = 0; i < listeners.length; i++) {
                    var listener = listeners[i],
                        isOnce = onceListeners && onceListeners[listener];
                    isOnce && (this.off(eventName, listener), delete onceListeners[listener]), listener.apply(this, args)
                }
                return this
            }
        }, proto.allOff = function() { delete this._events, delete this._onceEvents }, EvEmitter
    }),
    /*! lightgallery - v1.6.2 - 2017-10-03
     * http://sachinchoolur.github.io/lightGallery/
     * Copyright (c) 2017 Sachin N; Licensed GPLv3 */
    ! function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(a.jQuery) }(this, function(a) {
        ! function() {
            "use strict";

            function b(b, d) { if (this.el = b, this.$el = a(b), this.s = a.extend({}, c, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array."; return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this }
            var c = { mode: "lg-slide", cssEasing: "ease", easing: "linear", speed: 600, height: "100%", width: "100%", addClass: "", startClass: "lg-start-zoom", backdropDuration: 150, hideBarsDelay: 6e3, useLeft: !1, closable: !0, loop: !0, escKey: !0, keyPress: !0, controls: !0, slideEndAnimatoin: !0, hideControlOnEnd: !1, mousewheel: !0, getCaptionFromTitleOrAlt: !0, appendSubHtmlTo: ".lg-sub-html", subHtmlSelectorRelative: !1, preload: 1, showAfterLoad: !0, selector: "", selectWithin: "", nextHtml: "", prevHtml: "", index: !1, iframeMaxWidth: "100%", download: !0, counter: !0, appendCounterTo: ".lg-toolbar", swipeThreshold: 50, enableSwipe: !0, enableDrag: !0, dynamic: !1, dynamicEl: [], galleryId: 1 };
            b.prototype.init = function() {
                var b = this;
                b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
                var c = window.location.hash;
                c.indexOf("lg=" + this.s.galleryId) > 0 && (b.index = parseInt(c.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function() { b.build(b.index) }), a("body").addClass("lg-on"))), b.s.dynamic ? (b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function() { b.build(b.index), a("body").addClass("lg-on") })) : b.$items.on("click.lgcustom", function(c) {
                    try { c.preventDefault(), c.preventDefault() } catch (a) { c.returnValue = !1 }
                    b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || b.$items.index(this), a("body").hasClass("lg-on") || (b.build(b.index), a("body").addClass("lg-on"))
                })
            }, b.prototype.build = function(b) {
                var c = this;
                c.structure(), a.each(a.fn.lightGallery.modules, function(b) { c.modules[b] = new a.fn.lightGallery.modules[b](c.el) }), c.slide(b, !1, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 ? (c.arrow(), setTimeout(function() { c.enableDrag(), c.enableSwipe() }, 50), c.s.mousewheel && c.mousewheel()) : c.$slide.on("click.lg", function() { c.$el.trigger("onSlideClick.lg") }), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function() { c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function() { c.$outer.addClass("lg-hide-items") }, c.s.hideBarsDelay) }), c.$outer.trigger("mousemove.lg")
            }, b.prototype.structure = function() {
                var b, c = "",
                    d = "",
                    e = 0,
                    f = "",
                    g = this;
                for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), e = 0; e < this.$items.length; e++) c += '<div class="lg-item"></div>';
                if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'), b = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + c + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + d + f + "</div></div>", a("body").append(b), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), g.setTop(), a(window).on("resize.lg orientationchange.lg", function() { setTimeout(function() { g.setTop() }, 100) }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
                    var h = this.$outer.find(".lg-inner");
                    h.css("transition-timing-function", this.s.cssEasing), h.css("transition-duration", this.s.speed + "ms")
                }
                setTimeout(function() { a(".lg-backdrop").addClass("in") }), setTimeout(function() { g.$outer.addClass("lg-visible") }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(window).scrollTop()
            }, b.prototype.setTop = function() {
                if ("100%" !== this.s.height) {
                    var b = a(window).height(),
                        c = (b - parseInt(this.s.height, 10)) / 2,
                        d = this.$outer.find(".lg");
                    b >= parseInt(this.s.height, 10) ? d.css("top", c + "px") : d.css("top", "0px")
                }
            }, b.prototype.doCss = function() {
                var a = function() {
                    var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                        b = document.documentElement,
                        c = 0;
                    for (c = 0; c < a.length; c++)
                        if (a[c] in b.style) return !0
                };
                return !!a()
            }, b.prototype.isVideo = function(a, b) {
                var c;
                if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a) return c ? { html5: !0 } : (console.error("lightGallery :- data-src is not pvovided on slide item " + (b + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
                var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                    e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                    f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                    g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
                return d ? { youtube: d } : e ? { vimeo: e } : f ? { dailymotion: f } : g ? { vk: g } : void 0
            }, b.prototype.counter = function() { this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>") }, b.prototype.addHtml = function(b) {
                var c, d, e = null;
                if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c)
                    if ("undefined" != typeof e && null !== e) { var f = e.substring(0, 1); "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html()) } else e = "";
                    ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e), "undefined" != typeof e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b])
            }, b.prototype.preload = function(a) {
                var b = 1,
                    c = 1;
                for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
                for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0)
            }, b.prototype.loadContent = function(b, c, d) {
                var e, f, g, h, i, j, k = this,
                    l = !1,
                    m = function(b) {
                        for (var c = [], d = [], e = 0; e < b.length; e++) { var g = b[e].split(" "); "" === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1]) }
                        for (var h = a(window).width(), i = 0; i < c.length; i++)
                            if (parseInt(c[i], 10) > h) { f = d[i]; break }
                    };
                if (k.s.dynamic) {
                    if (k.s.dynamicEl[b].poster && (l = !0, g = k.s.dynamicEl[b].poster), j = k.s.dynamicEl[b].html, f = k.s.dynamicEl[b].src, k.s.dynamicEl[b].responsive) {
                        var n = k.s.dynamicEl[b].responsive.split(",");
                        m(n)
                    }
                    h = k.s.dynamicEl[b].srcset, i = k.s.dynamicEl[b].sizes
                } else {
                    if (k.$items.eq(b).attr("data-poster") && (l = !0, g = k.$items.eq(b).attr("data-poster")), j = k.$items.eq(b).attr("data-html"), f = k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src"), k.$items.eq(b).attr("data-responsive")) {
                        var o = k.$items.eq(b).attr("data-responsive").split(",");
                        m(o)
                    }
                    h = k.$items.eq(b).attr("data-srcset"), i = k.$items.eq(b).attr("data-sizes")
                }
                var p = !1;
                k.s.dynamic ? k.s.dynamicEl[b].iframe && (p = !0) : "true" === k.$items.eq(b).attr("data-iframe") && (p = !0);
                var q = k.isVideo(f, b);
                if (!k.$slide.eq(b).hasClass("lg-loaded")) {
                    if (p) k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>');
                    else if (l) {
                        var r = "";
                        r = q && q.youtube ? "lg-has-youtube" : q && q.vimeo ? "lg-has-vimeo" : "lg-has-html5", k.$slide.eq(b).prepend('<div class="lg-video-cont ' + r + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>')
                    } else q ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), k.$el.trigger("hasVideo.lg", [b, f, j])) : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
                    if (k.$el.trigger("onAferAppendSlide.lg", [b]), e = k.$slide.eq(b).find(".lg-object"), i && e.attr("sizes", i), h) { e.attr("srcset", h); try { picturefill({ elements: [e[0]] }) } catch (a) { console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.") } }
                    ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b), k.$slide.eq(b).addClass("lg-loaded")
                }
                k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
                    var c = 0;
                    d && !a("body").hasClass("lg-from-hash") && (c = d), setTimeout(function() { k.$slide.eq(b).addClass("lg-complete"), k.$el.trigger("onSlideItemLoad.lg", [b, d || 0]) }, c)
                }), q && q.html5 && !l && k.$slide.eq(b).addClass("lg-complete"), c === !0 && (k.$slide.eq(b).hasClass("lg-complete") ? k.preload(b) : k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() { k.preload(b) }))
            }, b.prototype.slide = function(b, c, d, e) {
                var f = this.$outer.find(".lg-current").index(),
                    g = this;
                if (!g.lGalleryOn || f !== b) {
                    var h = this.$slide.length,
                        i = g.lGalleryOn ? this.s.speed : 0;
                    if (!g.lgBusy) {
                        if (this.s.download) {
                            var j;
                            j = g.s.dynamic ? g.s.dynamicEl[b].downloadUrl !== !1 && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src) : "false" !== g.$items.eq(b).attr("data-download-url") && (g.$items.eq(b).attr("data-download-url") || g.$items.eq(b).attr("href") || g.$items.eq(b).attr("data-src")), j ? (a("#lg-download").attr("href", j), g.$outer.removeClass("lg-hide-download")) : g.$outer.addClass("lg-hide-download")
                        }
                        if (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]), g.lgBusy = !0, clearTimeout(g.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() { g.addHtml(b) }, i), this.arrowDisable(b), e || (b < f ? e = "prev" : b > f && (e = "next")), c) {
                            this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                            var k, l;
                            h > 2 ? (k = b - 1, l = b + 1, 0 === b && f === h - 1 ? (l = 0, k = h - 1) : b === h - 1 && 0 === f && (l = 0, k = h - 1)) : (k = 0, l = 1), "prev" === e ? g.$slide.eq(l).addClass("lg-next-slide") : g.$slide.eq(k).addClass("lg-prev-slide"), g.$slide.eq(b).addClass("lg-current")
                        } else g.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === e ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(f).addClass("lg-next-slide")) : (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(f).addClass("lg-prev-slide")), setTimeout(function() { g.$slide.removeClass("lg-current"), g.$slide.eq(b).addClass("lg-current"), g.$outer.removeClass("lg-no-trans") }, 50);
                        g.lGalleryOn ? (setTimeout(function() { g.loadContent(b, !0, 0) }, this.s.speed + 50), setTimeout(function() { g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d]) }, this.s.speed)) : (g.loadContent(b, !0, g.s.backdropDuration), g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d])), g.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1)
                    }
                    g.index = b
                }
            }, b.prototype.goToNextSlide = function(a) {
                var b = this,
                    c = b.s.loop;
                a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : c ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-right-end"), setTimeout(function() { b.$outer.removeClass("lg-right-end") }, 400)))
            }, b.prototype.goToPrevSlide = function(a) {
                var b = this,
                    c = b.s.loop;
                a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : c ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-left-end"), setTimeout(function() { b.$outer.removeClass("lg-left-end") }, 400)))
            }, b.prototype.keyPress = function() {
                var b = this;
                this.$items.length > 1 && a(window).on("keyup.lg", function(a) { b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), b.goToNextSlide())) }), a(window).on("keydown.lg", function(a) { b.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), b.$outer.hasClass("lg-thumb-open") ? b.$outer.removeClass("lg-thumb-open") : b.destroy()) })
            }, b.prototype.arrow = function() {
                var a = this;
                this.$outer.find(".lg-prev").on("click.lg", function() { a.goToPrevSlide() }), this.$outer.find(".lg-next").on("click.lg", function() { a.goToNextSlide() })
            }, b.prototype.arrowDisable = function(a) {!this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled")) }, b.prototype.setTranslate = function(a, b, c) { this.s.useLeft ? a.css("left", b) : a.css({ transform: "translate3d(" + b + "px, " + c + "px, 0px)" }) }, b.prototype.touchMove = function(b, c) {
                var d = c - b;
                Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
            }, b.prototype.touchEnd = function(a) { var b = this; "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() { b.$outer.removeClass("lg-dragging"), a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style") }), setTimeout(function() { b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide") }, b.s.speed + 100) }, b.prototype.enableSwipe = function() {
                var a = this,
                    b = 0,
                    c = 0,
                    d = !1;
                a.s.enableSwipe && a.doCss() && (a.$slide.on("touchstart.lg", function(c) { a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX) }), a.$slide.on("touchmove.lg", function(e) { a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0) }), a.$slide.on("touchend.lg", function() { a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg")) }))
            }, b.prototype.enableDrag = function() {
                var b = this,
                    c = 0,
                    d = 0,
                    e = !1,
                    f = !1;
                b.s.enableDrag && b.doCss() && (b.$slide.on("mousedown.lg", function(d) { b.$outer.hasClass("lg-zoomed") || (a(d.target).hasClass("lg-object") || a(d.target).hasClass("lg-video-play")) && (d.preventDefault(), b.lgBusy || (b.manageSwipeClass(), c = d.pageX, e = !0, b.$outer.scrollLeft += 1, b.$outer.scrollLeft -= 1, b.$outer.removeClass("lg-grab").addClass("lg-grabbing"), b.$el.trigger("onDragstart.lg"))) }), a(window).on("mousemove.lg", function(a) { e && (f = !0, d = a.pageX, b.touchMove(c, d), b.$el.trigger("onDragmove.lg")) }), a(window).on("mouseup.lg", function(g) { f ? (f = !1, b.touchEnd(d - c), b.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b.$el.trigger("onSlideClick.lg"), e && (e = !1, b.$outer.removeClass("lg-grabbing").addClass("lg-grab")) }))
            }, b.prototype.manageSwipeClass = function() {
                var a = this.index + 1,
                    b = this.index - 1;
                this.s.loop && this.$slide.length > 2 && (0 === this.index ? b = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")
            }, b.prototype.mousewheel = function() {
                var a = this;
                a.$outer.on("mousewheel.lg", function(b) { b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault()) })
            }, b.prototype.closeGallery = function() {
                var b = this,
                    c = !1;
                this.$outer.find(".lg-close").on("click.lg", function() { b.destroy() }), b.s.closable && (b.$outer.on("mousedown.lg", function(b) { c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap")) }), b.$outer.on("mouseup.lg", function(d) {
                    (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
                }))
            }, b.prototype.destroy = function(b) {
                var c = this;
                b || (c.$el.trigger("onBeforeClose.lg"), a(window).scrollTop(c.prevScrollTop)), b && (c.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(c.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function(a) { c.modules[a] && c.modules[a].destroy() }), this.lGalleryOn = !1, clearTimeout(c.hideBartimeout), this.hideBartimeout = !1, a(window).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), c.$outer && c.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function() { c.$outer && c.$outer.remove(), a(".lg-backdrop").remove(), b || c.$el.trigger("onCloseAfter.lg") }, c.s.backdropDuration + 50)
            }, a.fn.lightGallery = function(c) { return this.each(function() { if (a.data(this, "lightGallery")) try { a(this).data("lightGallery").init() } catch (a) { console.error("lightGallery has not initiated properly") } else a.data(this, "lightGallery", new b(this, c)) }) }, a.fn.lightGallery.modules = {}
        }()
    }),
    function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
        ! function() {
            "use strict";
            var b = { autoplay: !1, pause: 5e3, progressBar: !0, fourceAutoplay: !1, autoplayControls: !0, appendAutoplayControlsTo: ".lg-toolbar" },
                c = function(c) { return this.core = a(c).data("lightGallery"), this.$el = a(c), !(this.core.$items.length < 2) && (this.core.s = a.extend({}, b, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this) };
            c.prototype.init = function() {
                var a = this;
                a.core.s.autoplayControls && a.controls(), a.core.s.progressBar && a.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), a.progress(), a.core.s.autoplay && a.$el.one("onSlideItemLoad.lg.tm", function() { a.startlAuto() }), a.$el.on("onDragstart.lg.tm touchstart.lg.tm", function() { a.interval && (a.cancelAuto(), a.canceledOnTouch = !0) }), a.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function() {!a.interval && a.canceledOnTouch && (a.startlAuto(), a.canceledOnTouch = !1) })
            }, c.prototype.progress = function() {
                var a, b, c = this;
                c.$el.on("onBeforeSlide.lg.tm", function() { c.core.s.progressBar && c.fromAuto && (a = c.core.$outer.find(".lg-progress-bar"), b = c.core.$outer.find(".lg-progress"), c.interval && (b.removeAttr("style"), a.removeClass("lg-start"), setTimeout(function() { b.css("transition", "width " + (c.core.s.speed + c.core.s.pause) + "ms ease 0s"), a.addClass("lg-start") }, 20))), c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(), c.fromAuto = !1 })
            }, c.prototype.controls = function() {
                var b = this,
                    c = '<span class="lg-autoplay-button lg-icon"></span>';
                a(this.core.s.appendAutoplayControlsTo).append(c), b.core.$outer.find(".lg-autoplay-button").on("click.lg", function() { a(b.core.$outer).hasClass("lg-show-autoplay") ? (b.cancelAuto(), b.core.s.fourceAutoplay = !1) : b.interval || (b.startlAuto(), b.core.s.fourceAutoplay = b.fourceAutoplayTemp) })
            }, c.prototype.startlAuto = function() {
                var a = this;
                a.core.$outer.find(".lg-progress").css("transition", "width " + (a.core.s.speed + a.core.s.pause) + "ms ease 0s"), a.core.$outer.addClass("lg-show-autoplay"), a.core.$outer.find(".lg-progress-bar").addClass("lg-start"), a.interval = setInterval(function() { a.core.index + 1 < a.core.$items.length ? a.core.index++ : a.core.index = 0, a.fromAuto = !0, a.core.slide(a.core.index, !1, !1, "next") }, a.core.s.speed + a.core.s.pause)
            }, c.prototype.cancelAuto = function() { clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start") }, c.prototype.destroy = function() { this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove() }, a.fn.lightGallery.modules.autoplay = c
        }()
    }),
    function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
        ! function() {
            "use strict";
            var b = { fullScreen: !0 },
                c = function(c) { return this.core = a(c).data("lightGallery"), this.$el = a(c), this.core.s = a.extend({}, b, this.core.s), this.init(), this };
            c.prototype.init = function() {
                var a = "";
                if (this.core.s.fullScreen) {
                    if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
                    a = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(a), this.fullScreen()
                }
            }, c.prototype.requestFullscreen = function() {
                var a = document.documentElement;
                a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
            }, c.prototype.exitFullscreen = function() { document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() }, c.prototype.fullScreen = function() {
                var b = this;
                a(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function() { b.core.$outer.toggleClass("lg-fullscreen-on") }), this.core.$outer.find(".lg-fullscreen").on("click.lg", function() { document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? b.exitFullscreen() : b.requestFullscreen() })
            }, c.prototype.destroy = function() { this.exitFullscreen(), a(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg") }, a.fn.lightGallery.modules.fullscreen = c
        }()
    }),
    function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
        ! function() {
            "use strict";
            var b = { pager: !1 },
                c = function(c) { return this.core = a(c).data("lightGallery"), this.$el = a(c), this.core.s = a.extend({}, b, this.core.s), this.core.s.pager && this.core.$items.length > 1 && this.init(), this };
            c.prototype.init = function() {
                var b, c, d, e = this,
                    f = "";
                if (e.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), e.core.s.dynamic)
                    for (var g = 0; g < e.core.s.dynamicEl.length; g++) f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e.core.s.dynamicEl[g].thumb + '" /></div></span>';
                else e.core.$items.each(function() { f += e.core.s.exThumbImage ? '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).attr(e.core.s.exThumbImage) + '" /></div></span>' : '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).find("img").attr("src") + '" /></div></span>' });
                c = e.core.$outer.find(".lg-pager-outer"), c.html(f), b = e.core.$outer.find(".lg-pager-cont"), b.on("click.lg touchend.lg", function() {
                    var b = a(this);
                    e.core.index = b.index(), e.core.slide(e.core.index, !1, !0, !1)
                }), c.on("mouseover.lg", function() { clearTimeout(d), c.addClass("lg-pager-hover") }), c.on("mouseout.lg", function() { d = setTimeout(function() { c.removeClass("lg-pager-hover") }) }), e.core.$el.on("onBeforeSlide.lg.tm", function(a, c, d) { b.removeClass("lg-pager-active"), b.eq(d).addClass("lg-pager-active") })
            }, c.prototype.destroy = function() {}, a.fn.lightGallery.modules.pager = c
        }()
    }),
    function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
        ! function() {
            "use strict";
            var b = { thumbnail: !0, animateThumb: !0, currentPagerPosition: "middle", thumbWidth: 100, thumbHeight: "80px", thumbContHeight: 100, thumbMargin: 5, exThumbImage: !1, showThumbByDefault: !0, toogleThumb: !0, pullCaptionUp: !0, enableThumbDrag: !0, enableThumbSwipe: !0, swipeThreshold: 50, loadYoutubeThumbnail: !0, youtubeThumbSize: 1, loadVimeoThumbnail: !0, vimeoThumbSize: "thumbnail_small", loadDailymotionThumbnail: !0 },
                c = function(c) { return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.$el = a(c), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"), this.left = 0, this.init(), this };
            c.prototype.init = function() {
                var a = this;
                this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function() { a.core.$outer.addClass("lg-thumb-open") }, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
            }, c.prototype.build = function() {
                function b(a, b, c) {
                    var g, h = d.core.isVideo(a, c) || {},
                        i = "";
                    h.youtube || h.vimeo || h.dailymotion ? h.youtube ? g = d.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + h.youtube[1] + "/" + d.core.s.youtubeThumbSize + ".jpg" : b : h.vimeo ? d.core.s.loadVimeoThumbnail ? (g = "//i.vimeocdn.com/video/error_" + f + ".jpg", i = h.vimeo[1]) : g = b : h.dailymotion && (g = d.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + h.dailymotion[1] : b) : g = b, e += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + d.core.s.thumbWidth + "px; height: " + d.core.s.thumbHeight + "; margin-right: " + d.core.s.thumbMargin + 'px"><img src="' + g + '" /></div>', i = ""
                }
                var c, d = this,
                    e = "",
                    f = "",
                    g = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
                switch (this.core.s.vimeoThumbSize) {
                    case "thumbnail_large":
                        f = "640";
                        break;
                    case "thumbnail_medium":
                        f = "200x150";
                        break;
                    case "thumbnail_small":
                        f = "100x75"
                }
                if (d.core.$outer.addClass("lg-has-thumb"), d.core.$outer.find(".lg").append(g), d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer"), d.thumbOuterWidth = d.$thumbOuter.width(), d.core.s.animateThumb && d.core.$outer.find(".lg-thumb").css({ width: d.thumbTotalWidth + "px", position: "relative" }), this.core.s.animateThumb && d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"), d.core.s.dynamic)
                    for (var h = 0; h < d.core.s.dynamicEl.length; h++) b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
                else d.core.$items.each(function(c) { d.core.s.exThumbImage ? b(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(d.core.s.exThumbImage), c) : b(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), c) });
                d.core.$outer.find(".lg-thumb").html(e), c = d.core.$outer.find(".lg-thumb-item"), c.each(function() {
                    var b = a(this),
                        c = b.attr("data-vimeo-id");
                    c && a.getJSON("//www.vimeo.com/api/v2/video/" + c + ".json?callback=?", { format: "json" }, function(a) { b.find("img").attr("src", a[0][d.core.s.vimeoThumbSize]) })
                }), c.eq(d.core.index).addClass("active"), d.core.$el.on("onBeforeSlide.lg.tm", function() { c.removeClass("active"), c.eq(d.core.index).addClass("active") }), c.on("click.lg touchend.lg", function() {
                    var b = a(this);
                    setTimeout(function() {
                        (d.thumbClickable && !d.core.lgBusy || !d.core.doCss()) && (d.core.index = b.index(), d.core.slide(d.core.index, !1, !0, !1))
                    }, 50)
                }), d.core.$el.on("onBeforeSlide.lg.tm", function() { d.animateThumb(d.core.index) }), a(window).on("resize.lg.thumb orientationchange.lg.thumb", function() { setTimeout(function() { d.animateThumb(d.core.index), d.thumbOuterWidth = d.$thumbOuter.width() }, 200) })
            }, c.prototype.setTranslate = function(a) { this.core.$outer.find(".lg-thumb").css({ transform: "translate3d(-" + a + "px, 0px, 0px)" }) }, c.prototype.animateThumb = function(a) {
                var b = this.core.$outer.find(".lg-thumb");
                if (this.core.s.animateThumb) {
                    var c;
                    switch (this.core.s.currentPagerPosition) {
                        case "left":
                            c = 0;
                            break;
                        case "middle":
                            c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                            break;
                        case "right":
                            c = this.thumbOuterWidth - this.core.s.thumbWidth
                    }
                    this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (b.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || b.animate({ left: -this.left + "px" }, this.core.s.speed)) : this.core.doCss() || b.css("left", -this.left + "px"), this.setTranslate(this.left)
                }
            }, c.prototype.enableThumbDrag = function() {
                var b = this,
                    c = 0,
                    d = 0,
                    e = !1,
                    f = !1,
                    g = 0;
                b.$thumbOuter.addClass("lg-grab"), b.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function(a) { b.thumbTotalWidth > b.thumbOuterWidth && (a.preventDefault(), c = a.pageX, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.thumbClickable = !1, b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing")) }), a(window).on("mousemove.lg.thumb", function(a) { e && (g = b.left, f = !0, d = a.pageX, b.$thumbOuter.addClass("lg-dragging"), g -= d - c, g > b.thumbTotalWidth - b.thumbOuterWidth && (g = b.thumbTotalWidth - b.thumbOuterWidth), g < 0 && (g = 0), b.setTranslate(g)) }), a(window).on("mouseup.lg.thumb", function() { f ? (f = !1, b.$thumbOuter.removeClass("lg-dragging"), b.left = g, Math.abs(d - c) < b.core.s.swipeThreshold && (b.thumbClickable = !0)) : b.thumbClickable = !0, e && (e = !1, b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")) })
            }, c.prototype.enableThumbSwipe = function() {
                var a = this,
                    b = 0,
                    c = 0,
                    d = !1,
                    e = 0;
                a.core.$outer.find(".lg-thumb").on("touchstart.lg", function(c) { a.thumbTotalWidth > a.thumbOuterWidth && (c.preventDefault(), b = c.originalEvent.targetTouches[0].pageX, a.thumbClickable = !1) }), a.core.$outer.find(".lg-thumb").on("touchmove.lg", function(f) { a.thumbTotalWidth > a.thumbOuterWidth && (f.preventDefault(), c = f.originalEvent.targetTouches[0].pageX, d = !0, a.$thumbOuter.addClass("lg-dragging"), e = a.left, e -= c - b, e > a.thumbTotalWidth - a.thumbOuterWidth && (e = a.thumbTotalWidth - a.thumbOuterWidth), e < 0 && (e = 0), a.setTranslate(e)) }), a.core.$outer.find(".lg-thumb").on("touchend.lg", function() { a.thumbTotalWidth > a.thumbOuterWidth && d ? (d = !1, a.$thumbOuter.removeClass("lg-dragging"), Math.abs(c - b) < a.core.s.swipeThreshold && (a.thumbClickable = !0), a.left = e) : a.thumbClickable = !0 })
            }, c.prototype.toogle = function() {
                var a = this;
                a.core.s.toogleThumb && (a.core.$outer.addClass("lg-can-toggle"), a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function() { a.core.$outer.toggleClass("lg-thumb-open") }))
            }, c.prototype.thumbkeyPress = function() {
                var b = this;
                a(window).on("keydown.lg.thumb", function(a) { 38 === a.keyCode ? (a.preventDefault(), b.core.$outer.addClass("lg-thumb-open")) : 40 === a.keyCode && (a.preventDefault(), b.core.$outer.removeClass("lg-thumb-open")) })
            }, c.prototype.destroy = function() {
                this.core.s.thumbnail && this.core.$items.length > 1 && (a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),
                    this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
            }, a.fn.lightGallery.modules.Thumbnail = c
        }()
    }),
    function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
        ! function() {
            "use strict";
            var b = { videoMaxWidth: "855px", youtubePlayerParams: !1, vimeoPlayerParams: !1, dailymotionPlayerParams: !1, vkPlayerParams: !1, videojs: !1, videojsOptions: {} },
                c = function(c) { return this.core = a(c).data("lightGallery"), this.$el = a(c), this.core.s = a.extend({}, b, this.core.s), this.videoLoaded = !1, this.init(), this };
            c.prototype.init = function() {
                var b = this;
                b.core.$el.on("hasVideo.lg.tm", function(a, c, d, e) {
                    if (b.core.$slide.eq(c).find(".lg-video").append(b.loadVideo(d, "lg-object", !0, c, e)), e)
                        if (b.core.s.videojs) try { videojs(b.core.$slide.eq(c).find(".lg-html5").get(0), b.core.s.videojsOptions, function() { b.videoLoaded || this.play() }) } catch (a) { console.error("Make sure you have included videojs") } else b.videoLoaded || b.core.$slide.eq(c).find(".lg-html5").get(0).play()
                }), b.core.$el.on("onAferAppendSlide.lg.tm", function(a, c) {
                    var d = b.core.$slide.eq(c).find(".lg-video-cont");
                    d.hasClass("lg-has-iframe") || (d.css("max-width", b.core.s.videoMaxWidth), b.videoLoaded = !0)
                });
                var c = function(a) {
                    if (a.find(".lg-object").hasClass("lg-has-poster") && a.find(".lg-object").is(":visible"))
                        if (a.hasClass("lg-has-video")) {
                            var c = a.find(".lg-youtube").get(0),
                                d = a.find(".lg-vimeo").get(0),
                                e = a.find(".lg-dailymotion").get(0),
                                f = a.find(".lg-html5").get(0);
                            if (c) c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                            else if (d) try { $f(d).api("play") } catch (a) { console.error("Make sure you have included froogaloop2 js") } else if (e) e.contentWindow.postMessage("play", "*");
                                else if (f)
                                if (b.core.s.videojs) try { videojs(f).play() } catch (a) { console.error("Make sure you have included videojs") } else f.play();
                            a.addClass("lg-video-playing")
                        } else {
                            a.addClass("lg-video-playing lg-has-video");
                            var g, h, i = function(c, d) {
                                if (a.find(".lg-video").append(b.loadVideo(c, "", !1, b.core.index, d)), d)
                                    if (b.core.s.videojs) try { videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0), b.core.s.videojsOptions, function() { this.play() }) } catch (a) { console.error("Make sure you have included videojs") } else b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play()
                            };
                            b.core.s.dynamic ? (g = b.core.s.dynamicEl[b.core.index].src, h = b.core.s.dynamicEl[b.core.index].html, i(g, h)) : (g = b.core.$items.eq(b.core.index).attr("href") || b.core.$items.eq(b.core.index).attr("data-src"), h = b.core.$items.eq(b.core.index).attr("data-html"), i(g, h));
                            var j = a.find(".lg-object");
                            a.find(".lg-video").append(j), a.find(".lg-video-object").hasClass("lg-html5") || (a.removeClass("lg-complete"), a.find(".lg-video-object").on("load.lg error.lg", function() { a.addClass("lg-complete") }))
                        }
                };
                b.core.doCss() && b.core.$items.length > 1 && (b.core.s.enableSwipe || b.core.s.enableDrag) ? b.core.$el.on("onSlideClick.lg.tm", function() {
                    var a = b.core.$slide.eq(b.core.index);
                    c(a)
                }) : b.core.$slide.on("click.lg", function() { c(a(this)) }), b.core.$el.on("onBeforeSlide.lg.tm", function(c, d, e) {
                    var f = b.core.$slide.eq(d),
                        g = f.find(".lg-youtube").get(0),
                        h = f.find(".lg-vimeo").get(0),
                        i = f.find(".lg-dailymotion").get(0),
                        j = f.find(".lg-vk").get(0),
                        k = f.find(".lg-html5").get(0);
                    if (g) g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                    else if (h) try { $f(h).api("pause") } catch (a) { console.error("Make sure you have included froogaloop2 js") } else if (i) i.contentWindow.postMessage("pause", "*");
                        else if (k)
                        if (b.core.s.videojs) try { videojs(k).pause() } catch (a) { console.error("Make sure you have included videojs") } else k.pause();
                    j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));
                    var l;
                    l = b.core.s.dynamic ? b.core.s.dynamicEl[e].src : b.core.$items.eq(e).attr("href") || b.core.$items.eq(e).attr("data-src");
                    var m = b.core.isVideo(l, e) || {};
                    (m.youtube || m.vimeo || m.dailymotion || m.vk) && b.core.$outer.addClass("lg-hide-download")
                }), b.core.$el.on("onAfterSlide.lg.tm", function(a, c) { b.core.$slide.eq(c).removeClass("lg-video-playing") })
            }, c.prototype.loadVideo = function(b, c, d, e, f) {
                var g = "",
                    h = 1,
                    i = "",
                    j = this.core.isVideo(b, e) || {};
                if (d && (h = this.videoLoaded ? 0 : 1), j.youtube) i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1", this.core.s.youtubePlayerParams && (i = i + "&" + a.param(this.core.s.youtubePlayerParams)), g = '<iframe class="lg-video-object lg-youtube ' + c + '" width="560" height="315" src="//www.youtube.com/embed/' + j.youtube[1] + i + '" frameborder="0" allowfullscreen></iframe>';
                else if (j.vimeo) i = "?autoplay=" + h + "&api=1", this.core.s.vimeoPlayerParams && (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)), g = '<iframe class="lg-video-object lg-vimeo ' + c + '" width="560" height="315"  src="//player.vimeo.com/video/' + j.vimeo[1] + i + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
                else if (j.dailymotion) i = "?wmode=opaque&autoplay=" + h + "&api=postMessage", this.core.s.dailymotionPlayerParams && (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)), g = '<iframe class="lg-video-object lg-dailymotion ' + c + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + j.dailymotion[1] + i + '" frameborder="0" allowfullscreen></iframe>';
                else if (j.html5) { var k = f.substring(0, 1); "." !== k && "#" !== k || (f = a(f).html()), g = f } else j.vk && (i = "&autoplay=" + h, this.core.s.vkPlayerParams && (i = i + "&" + a.param(this.core.s.vkPlayerParams)), g = '<iframe class="lg-video-object lg-vk ' + c + '" width="560" height="315" src="http://vk.com/video_ext.php?' + j.vk[1] + i + '" frameborder="0" allowfullscreen></iframe>');
                return g
            }, c.prototype.destroy = function() { this.videoLoaded = !1 }, a.fn.lightGallery.modules.video = c
        }()
    }),
    function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
        ! function() {
            "use strict";
            var b = function() {
                    var a = !1,
                        b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                    return b && parseInt(b[2], 10) < 54 && (a = !0), a
                },
                c = { scale: 1, zoom: !0, actualSize: !0, enableZoomAfter: 300, useLeftForZoom: b() },
                d = function(b) { return this.core = a(b).data("lightGallery"), this.core.s = a.extend({}, c, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()), this };
            d.prototype.init = function() {
                var b = this,
                    c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
                b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'), b.core.s.useLeftForZoom ? b.core.$outer.addClass("lg-use-left-for-zoom") : b.core.$outer.addClass("lg-use-transition-for-zoom"), this.core.$outer.find(".lg-toolbar").append(c), b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(c, d, e) {
                    var f = b.core.s.enableZoomAfter + e;
                    a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"), b.zoomabletimeout = setTimeout(function() { b.core.$slide.eq(d).addClass("lg-zoomable") }, f + 30)
                });
                var d = 1,
                    e = function(c) {
                        var d, e, f = b.core.$outer.find(".lg-current .lg-image"),
                            g = (a(window).width() - f.prop("offsetWidth")) / 2,
                            h = (a(window).height() - f.prop("offsetHeight")) / 2 + a(window).scrollTop();
                        d = b.pageX - g, e = b.pageY - h;
                        var i = (c - 1) * d,
                            j = (c - 1) * e;
                        f.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c), b.core.s.useLeftForZoom ? f.parent().css({ left: -i + "px", top: -j + "px" }).attr("data-x", i).attr("data-y", j) : f.parent().css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)").attr("data-x", i).attr("data-y", j)
                    },
                    f = function() { d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(), d < 1 && (d = 1), e(d) },
                    g = function(c, e, g, h) {
                        var i, j = e.prop("offsetWidth");
                        i = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || j;
                        var k;
                        b.core.$outer.hasClass("lg-zoomed") ? d = 1 : i > j && (k = i / j, d = k || 2), h ? (b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop()) : (b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX, b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY), f(), setTimeout(function() { b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab") }, 10)
                    },
                    h = !1;
                b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(a, c) {
                    var d = b.core.$slide.eq(c).find(".lg-image");
                    d.on("dblclick", function(a) { g(a, d, c) }), d.on("touchstart", function(a) { h ? (clearTimeout(h), h = null, g(a, d, c)) : h = setTimeout(function() { h = null }, 300), a.preventDefault() })
                }), a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() { b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop(), e(d) }), a("#lg-zoom-out").on("click.lg", function() { b.core.$outer.find(".lg-current .lg-image").length && (d -= b.core.s.scale, f()) }), a("#lg-zoom-in").on("click.lg", function() { b.core.$outer.find(".lg-current .lg-image").length && (d += b.core.s.scale, f()) }), a("#lg-actual-size").on("click.lg", function(a) { g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0) }), b.core.$el.on("onBeforeSlide.lg.tm", function() { d = 1, b.resetZoom() }), b.zoomDrag(), b.zoomSwipe()
            }, d.prototype.resetZoom = function() { this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop() }, d.prototype.zoomSwipe = function() {
                var a = this,
                    b = {},
                    c = {},
                    d = !1,
                    e = !1,
                    f = !1;
                a.core.$slide.on("touchstart.lg", function(c) {
                    if (a.core.$outer.hasClass("lg-zoomed")) {
                        var d = a.core.$slide.eq(a.core.index).find(".lg-object");
                        f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height(), e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width(), (e || f) && (c.preventDefault(), b = { x: c.originalEvent.targetTouches[0].pageX, y: c.originalEvent.targetTouches[0].pageY })
                    }
                }), a.core.$slide.on("touchmove.lg", function(g) {
                    if (a.core.$outer.hasClass("lg-zoomed")) {
                        var h, i, j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                        g.preventDefault(), d = !0, c = { x: g.originalEvent.targetTouches[0].pageX, y: g.originalEvent.targetTouches[0].pageY }, a.core.$outer.addClass("lg-zoom-dragging"), i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")), h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")), (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? j.css({ left: h + "px", top: i + "px" }) : j.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
                    }
                }), a.core.$slide.on("touchend.lg", function() { a.core.$outer.hasClass("lg-zoomed") && d && (d = !1, a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f)) })
            }, d.prototype.zoomDrag = function() {
                var b = this,
                    c = {},
                    d = {},
                    e = !1,
                    f = !1,
                    g = !1,
                    h = !1;
                b.core.$slide.on("mousedown.lg.zoom", function(d) {
                    var f = b.core.$slide.eq(b.core.index).find(".lg-object");
                    h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height(), g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width(), b.core.$outer.hasClass("lg-zoomed") && a(d.target).hasClass("lg-object") && (g || h) && (d.preventDefault(), c = { x: d.pageX, y: d.pageY }, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
                }), a(window).on("mousemove.lg.zoom", function(a) {
                    if (e) {
                        var i, j, k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
                        f = !0, d = { x: a.pageX, y: a.pageY }, b.core.$outer.addClass("lg-zoom-dragging"), j = h ? -Math.abs(k.attr("data-y")) + (d.y - c.y) : -Math.abs(k.attr("data-y")), i = g ? -Math.abs(k.attr("data-x")) + (d.x - c.x) : -Math.abs(k.attr("data-x")), b.core.s.useLeftForZoom ? k.css({ left: i + "px", top: j + "px" }) : k.css("transform", "translate3d(" + i + "px, " + j + "px, 0)")
                    }
                }), a(window).on("mouseup.lg.zoom", function(a) { e && (e = !1, b.core.$outer.removeClass("lg-zoom-dragging"), !f || c.x === d.x && c.y === d.y || (d = { x: a.pageX, y: a.pageY }, b.touchendZoom(c, d, g, h)), f = !1), b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab") })
            }, d.prototype.touchendZoom = function(a, b, c, d) {
                var e = this,
                    f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
                    g = e.core.$slide.eq(e.core.index).find(".lg-object"),
                    h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
                    i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
                    j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
                    k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
                    l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
                    m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
                (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)), c && (h <= -m ? h = -m : h >= -l && (h = -l)), d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")), c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")), e.core.s.useLeftForZoom ? f.css({ left: h + "px", top: i + "px" }) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
            }, d.prototype.destroy = function() {
                var b = this;
                b.core.$el.off(".lg.zoom"), a(window).off(".lg.zoom"), b.core.$slide.off(".lg.zoom"), b.core.$el.off(".lg.tm.zoom"), b.resetZoom(), clearTimeout(b.zoomabletimeout), b.zoomabletimeout = !1
            }, a.fn.lightGallery.modules.zoom = d
        }()
    }),
    function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
        ! function() {
            "use strict";
            var b = { hash: !0 },
                c = function(c) { return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.hash && (this.oldHash = window.location.hash, this.init()), this };
            c.prototype.init = function() {
                var b, c = this;
                c.core.$el.on("onAfterSlide.lg.tm", function(a, b, d) { history.replaceState ? history.replaceState(null, null, "#lg=" + c.core.s.galleryId + "&slide=" + d) : window.location.hash = "lg=" + c.core.s.galleryId + "&slide=" + d }), a(window).on("hashchange.lg.hash", function() {
                    b = window.location.hash;
                    var a = parseInt(b.split("&slide=")[1], 10);
                    b.indexOf("lg=" + c.core.s.galleryId) > -1 ? c.core.slide(a, !1, !1) : c.core.lGalleryOn && c.core.destroy()
                })
            }, c.prototype.destroy = function() { this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "", this.core.$el.off(".lg.hash")) }, a.fn.lightGallery.modules.hash = c
        }()
    }),
    function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {
        ! function() {
            "use strict";
            var b = { share: !0, facebook: !0, facebookDropdownText: "Facebook", twitter: !0, twitterDropdownText: "Twitter", googlePlus: !0, googlePlusDropdownText: "GooglePlus", pinterest: !0, pinterestDropdownText: "Pinterest" },
                c = function(c) { return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.share && this.init(), this };
            c.prototype.init = function() {
                var b = this,
                    c = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
                c += b.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + "</span></a></li>" : "", c += b.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + "</span></a></li>" : "", c += b.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + "</span></a></li>" : "", c += b.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + "</span></a></li>" : "", c += "</ul></span>", this.core.$outer.find(".lg-toolbar").append(c), this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'), a("#lg-share").on("click.lg", function() { b.core.$outer.toggleClass("lg-dropdown-active") }), a("#lg-dropdown-overlay").on("click.lg", function() { b.core.$outer.removeClass("lg-dropdown-active") }), b.core.$el.on("onAfterSlide.lg.tm", function(c, d, e) { setTimeout(function() { a("#lg-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(b.getSahreProps(e, "facebookShareUrl") || window.location.href)), a("#lg-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + b.getSahreProps(e, "tweetText") + "&url=" + encodeURIComponent(b.getSahreProps(e, "twitterShareUrl") || window.location.href)), a("#lg-share-googleplus").attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(b.getSahreProps(e, "googleplusShareUrl") || window.location.href)), a("#lg-share-pinterest").attr("href", "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(b.getSahreProps(e, "pinterestShareUrl") || window.location.href) + "&media=" + encodeURIComponent(b.getSahreProps(e, "src")) + "&description=" + b.getSahreProps(e, "pinterestText")) }, 100) })
            }, c.prototype.getSahreProps = function(a, b) {
                var c = "";
                if (this.core.s.dynamic) c = this.core.s.dynamicEl[a][b];
                else {
                    var d = this.core.$items.eq(a).attr("href"),
                        e = this.core.$items.eq(a).data(b);
                    c = "src" === b ? d || e : e
                }
                return c
            }, c.prototype.destroy = function() {}, a.fn.lightGallery.modules.share = c
        }()
    }),
    /*!
     * Justified Gallery - v3.6.3
     * http://miromannino.github.io/Justified-Gallery/
     * Copyright (c) 2016 Miro Mannino
     * Licensed under the MIT license.
     */
    function($) {
        function hasScrollBar() { return $("body").height() > $(window).height() }
        var JustifiedGallery = function($gallery, settings) { this.settings = settings, this.checkSettings(), this.imgAnalyzerTimeout = null, this.entries = null, this.buildingRow = { entriesBuff: [], width: 0, height: 0, aspectRatio: 0 }, this.lastFetchedEntry = null, this.lastAnalyzedIndex = -1, this["yield"] = { every: 2, flushed: 0 }, this.border = settings.border >= 0 ? settings.border : settings.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges(), this.offY = this.border, this.rows = 0, this.spinner = { phase: 0, timeSlot: 150, $el: $('<div class="spinner"><span></span><span></span><span></span></div>'), intervalId: null }, this.checkWidthIntervalId = null, this.galleryWidth = $gallery.width(), this.$gallery = $gallery };
        JustifiedGallery.prototype.getSuffix = function(width, height) {
            var longestSide, i;
            for (longestSide = width > height ? width : height, i = 0; i < this.suffixRanges.length; i++)
                if (longestSide <= this.suffixRanges[i]) return this.settings.sizeRangeSuffixes[this.suffixRanges[i]];
            return this.settings.sizeRangeSuffixes[this.suffixRanges[i - 1]]
        }, JustifiedGallery.prototype.removeSuffix = function(str, suffix) { return str.substring(0, str.length - suffix.length) }, JustifiedGallery.prototype.endsWith = function(str, suffix) { return str.indexOf(suffix, str.length - suffix.length) !== -1 }, JustifiedGallery.prototype.getUsedSuffix = function(str) {
            for (var si in this.settings.sizeRangeSuffixes)
                if (this.settings.sizeRangeSuffixes.hasOwnProperty(si)) { if (0 === this.settings.sizeRangeSuffixes[si].length) continue; if (this.endsWith(str, this.settings.sizeRangeSuffixes[si])) return this.settings.sizeRangeSuffixes[si] }
            return ""
        }, JustifiedGallery.prototype.newSrc = function(imageSrc, imgWidth, imgHeight, image) {
            var newImageSrc;
            if (this.settings.thumbnailPath) newImageSrc = this.settings.thumbnailPath(imageSrc, imgWidth, imgHeight, image);
            else {
                var matchRes = imageSrc.match(this.settings.extension),
                    ext = null !== matchRes ? matchRes[0] : "";
                newImageSrc = imageSrc.replace(this.settings.extension, ""), newImageSrc = this.removeSuffix(newImageSrc, this.getUsedSuffix(newImageSrc)), newImageSrc += this.getSuffix(imgWidth, imgHeight) + ext
            }
            return newImageSrc
        }, JustifiedGallery.prototype.showImg = function($entry, callback) { this.settings.cssAnimation ? ($entry.addClass("entry-visible"), callback && callback()) : ($entry.stop().fadeTo(this.settings.imagesAnimationDuration, 1, callback), $entry.find("> img, > a > img").stop().fadeTo(this.settings.imagesAnimationDuration, 1, callback)) }, JustifiedGallery.prototype.extractImgSrcFromImage = function($image) { var imageSrc = "undefined" != typeof $image.data("safe-src") ? $image.data("safe-src") : $image.attr("src"); return $image.data("jg.originalSrc", imageSrc), imageSrc }, JustifiedGallery.prototype.imgFromEntry = function($entry) { var $img = $entry.find("> img"); return 0 === $img.length && ($img = $entry.find("> a > img")), 0 === $img.length ? null : $img }, JustifiedGallery.prototype.captionFromEntry = function($entry) { var $caption = $entry.find("> .caption"); return 0 === $caption.length ? null : $caption }, JustifiedGallery.prototype.displayEntry = function($entry, x, y, imgWidth, imgHeight, rowHeight) {
            $entry.width(imgWidth), $entry.height(rowHeight), $entry.css("top", y), $entry.css("left", x);
            var $image = this.imgFromEntry($entry);
            if (null !== $image) {
                $image.css("width", imgWidth), $image.css("height", imgHeight), $image.css("margin-left", -imgWidth / 2), $image.css("margin-top", -imgHeight / 2);
                var imageSrc = $image.attr("src"),
                    newImageSrc = this.newSrc(imageSrc, imgWidth, imgHeight, $image[0]);
                $image.one("error", function() { $image.attr("src", $image.data("jg.originalSrc")) });
                var loadNewImage = function() { imageSrc !== newImageSrc && $image.attr("src", newImageSrc) };
                "skipped" === $entry.data("jg.loaded") ? this.onImageEvent(imageSrc, $.proxy(function() { this.showImg($entry, loadNewImage), $entry.data("jg.loaded", !0) }, this)) : this.showImg($entry, loadNewImage)
            } else this.showImg($entry);
            this.displayEntryCaption($entry)
        }, JustifiedGallery.prototype.displayEntryCaption = function($entry) {
            var $image = this.imgFromEntry($entry);
            if (null !== $image && this.settings.captions) {
                var $imgCaption = this.captionFromEntry($entry);
                if (null === $imgCaption) {
                    var caption = $image.attr("alt");
                    this.isValidCaption(caption) || (caption = $entry.attr("title")), this.isValidCaption(caption) && ($imgCaption = $('<div class="caption">' + caption + "</div>"), $entry.append($imgCaption), $entry.data("jg.createdCaption", !0))
                }
                null !== $imgCaption && (this.settings.cssAnimation || $imgCaption.stop().fadeTo(0, this.settings.captionSettings.nonVisibleOpacity), this.addCaptionEventsHandlers($entry))
            } else this.removeCaptionEventsHandlers($entry)
        }, JustifiedGallery.prototype.isValidCaption = function(caption) { return "undefined" != typeof caption && caption.length > 0 }, JustifiedGallery.prototype.onEntryMouseEnterForCaption = function(eventObject) {
            var $caption = this.captionFromEntry($(eventObject.currentTarget));
            this.settings.cssAnimation ? $caption.addClass("caption-visible").removeClass("caption-hidden") : $caption.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.visibleOpacity)
        }, JustifiedGallery.prototype.onEntryMouseLeaveForCaption = function(eventObject) {
            var $caption = this.captionFromEntry($(eventObject.currentTarget));
            this.settings.cssAnimation ? $caption.removeClass("caption-visible").removeClass("caption-hidden") : $caption.stop().fadeTo(this.settings.captionSettings.animationDuration, this.settings.captionSettings.nonVisibleOpacity)
        }, JustifiedGallery.prototype.addCaptionEventsHandlers = function($entry) { var captionMouseEvents = $entry.data("jg.captionMouseEvents"); "undefined" == typeof captionMouseEvents && (captionMouseEvents = { mouseenter: $.proxy(this.onEntryMouseEnterForCaption, this), mouseleave: $.proxy(this.onEntryMouseLeaveForCaption, this) }, $entry.on("mouseenter", void 0, void 0, captionMouseEvents.mouseenter), $entry.on("mouseleave", void 0, void 0, captionMouseEvents.mouseleave), $entry.data("jg.captionMouseEvents", captionMouseEvents)) }, JustifiedGallery.prototype.removeCaptionEventsHandlers = function($entry) { var captionMouseEvents = $entry.data("jg.captionMouseEvents"); "undefined" != typeof captionMouseEvents && ($entry.off("mouseenter", void 0, captionMouseEvents.mouseenter), $entry.off("mouseleave", void 0, captionMouseEvents.mouseleave), $entry.removeData("jg.captionMouseEvents")) }, JustifiedGallery.prototype.prepareBuildingRow = function(isLastRow) {
            var i, $entry, imgAspectRatio, newImgW, newImgH, justify = !0,
                minHeight = 0,
                availableWidth = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
                rowHeight = availableWidth / this.buildingRow.aspectRatio,
                defaultRowHeight = this.settings.rowHeight,
                justifiable = this.buildingRow.width / availableWidth > this.settings.justifyThreshold;
            if (isLastRow && "hide" === this.settings.lastRow && !justifiable) { for (i = 0; i < this.buildingRow.entriesBuff.length; i++) $entry = this.buildingRow.entriesBuff[i], this.settings.cssAnimation ? $entry.removeClass("entry-visible") : ($entry.stop().fadeTo(0, .1), $entry.find("> img, > a > img").fadeTo(0, 0)); return -1 }
            for (isLastRow && !justifiable && "justify" !== this.settings.lastRow && "hide" !== this.settings.lastRow && (justify = !1, this.rows > 0 && (defaultRowHeight = (this.offY - this.border - this.settings.margins * this.rows) / this.rows, justify = defaultRowHeight * this.buildingRow.aspectRatio / availableWidth > this.settings.justifyThreshold)), i = 0; i < this.buildingRow.entriesBuff.length; i++) $entry = this.buildingRow.entriesBuff[i], imgAspectRatio = $entry.data("jg.width") / $entry.data("jg.height"), justify ? (newImgW = i === this.buildingRow.entriesBuff.length - 1 ? availableWidth : rowHeight * imgAspectRatio, newImgH = rowHeight) : (newImgW = defaultRowHeight * imgAspectRatio, newImgH = defaultRowHeight), availableWidth -= Math.round(newImgW), $entry.data("jg.jwidth", Math.round(newImgW)), $entry.data("jg.jheight", Math.ceil(newImgH)), (0 === i || minHeight > newImgH) && (minHeight = newImgH);
            return this.buildingRow.height = minHeight, justify
        }, JustifiedGallery.prototype.clearBuildingRow = function() { this.buildingRow.entriesBuff = [], this.buildingRow.aspectRatio = 0, this.buildingRow.width = 0 }, JustifiedGallery.prototype.flushRow = function(isLastRow) {
            var $entry, buildingRowRes, i, settings = this.settings,
                offX = this.border;
            if (buildingRowRes = this.prepareBuildingRow(isLastRow), isLastRow && "hide" === settings.lastRow && buildingRowRes === -1) return void this.clearBuildingRow();
            if (this.maxRowHeight && (this.maxRowHeight.isPercentage && this.maxRowHeight.value * settings.rowHeight < this.buildingRow.height ? this.buildingRow.height = this.maxRowHeight.value * settings.rowHeight : this.maxRowHeight.value >= settings.rowHeight && this.maxRowHeight.value < this.buildingRow.height && (this.buildingRow.height = this.maxRowHeight.value)), "center" === settings.lastRow || "right" === settings.lastRow) { var availableWidth = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * settings.margins; for (i = 0; i < this.buildingRow.entriesBuff.length; i++) $entry = this.buildingRow.entriesBuff[i], availableWidth -= $entry.data("jg.jwidth"); "center" === settings.lastRow ? offX += availableWidth / 2 : "right" === settings.lastRow && (offX += availableWidth) }
            for (i = 0; i < this.buildingRow.entriesBuff.length; i++) $entry = this.buildingRow.entriesBuff[i], this.displayEntry($entry, offX, this.offY, $entry.data("jg.jwidth"), $entry.data("jg.jheight"), this.buildingRow.height), offX += $entry.data("jg.jwidth") + settings.margins;
            this.galleryHeightToSet = this.offY + this.buildingRow.height + this.border, this.$gallery.height(this.galleryHeightToSet + this.getSpinnerHeight()), (!isLastRow || this.buildingRow.height <= settings.rowHeight && buildingRowRes) && (this.offY += this.buildingRow.height + settings.margins, this.rows += 1, this.clearBuildingRow(), this.$gallery.trigger("jg.rowflush"))
        };
        var scrollBarOn = !1;
        JustifiedGallery.prototype.checkWidth = function() {
            this.checkWidthIntervalId = setInterval($.proxy(function() {
                var galleryWidth = parseFloat(this.$gallery.width());
                hasScrollBar() === scrollBarOn ? Math.abs(galleryWidth - this.galleryWidth) > this.settings.refreshSensitivity && (this.galleryWidth = galleryWidth, this.rewind(), this.startImgAnalyzer(!0)) : (scrollBarOn = hasScrollBar(), this.galleryWidth = galleryWidth)
            }, this), this.settings.refreshTime)
        }, JustifiedGallery.prototype.isSpinnerActive = function() { return null !== this.spinner.intervalId }, JustifiedGallery.prototype.getSpinnerHeight = function() { return this.spinner.$el.innerHeight() }, JustifiedGallery.prototype.stopLoadingSpinnerAnimation = function() { clearInterval(this.spinner.intervalId), this.spinner.intervalId = null, this.$gallery.height(this.$gallery.height() - this.getSpinnerHeight()), this.spinner.$el.detach() }, JustifiedGallery.prototype.startLoadingSpinnerAnimation = function() {
            var spinnerContext = this.spinner,
                $spinnerPoints = spinnerContext.$el.find("span");
            clearInterval(spinnerContext.intervalId), this.$gallery.append(spinnerContext.$el), this.$gallery.height(this.offY + this.buildingRow.height + this.getSpinnerHeight()), spinnerContext.intervalId = setInterval(function() { spinnerContext.phase < $spinnerPoints.length ? $spinnerPoints.eq(spinnerContext.phase).fadeTo(spinnerContext.timeSlot, 1) : $spinnerPoints.eq(spinnerContext.phase - $spinnerPoints.length).fadeTo(spinnerContext.timeSlot, 0), spinnerContext.phase = (spinnerContext.phase + 1) % (2 * $spinnerPoints.length) }, spinnerContext.timeSlot)
        }, JustifiedGallery.prototype.rewind = function() { this.lastFetchedEntry = null, this.lastAnalyzedIndex = -1, this.offY = this.border, this.rows = 0, this.clearBuildingRow() }, JustifiedGallery.prototype.updateEntries = function(norewind) { var newEntries; return norewind && null != this.lastFetchedEntry ? newEntries = $(this.lastFetchedEntry).nextAll(this.settings.selector).toArray() : (this.entries = [], newEntries = this.$gallery.children(this.settings.selector).toArray()), newEntries.length > 0 && ($.isFunction(this.settings.sort) ? newEntries = this.sortArray(newEntries) : this.settings.randomize && (newEntries = this.shuffleArray(newEntries)), this.lastFetchedEntry = newEntries[newEntries.length - 1], this.settings.filter ? newEntries = this.filterArray(newEntries) : this.resetFilters(newEntries)), this.entries = this.entries.concat(newEntries), !0 }, JustifiedGallery.prototype.insertToGallery = function(entries) {
            var that = this;
            $.each(entries, function() { $(this).appendTo(that.$gallery) })
        }, JustifiedGallery.prototype.shuffleArray = function(a) { var i, j, temp; for (i = a.length - 1; i > 0; i--) j = Math.floor(Math.random() * (i + 1)), temp = a[i], a[i] = a[j], a[j] = temp; return this.insertToGallery(a), a }, JustifiedGallery.prototype.sortArray = function(a) { return a.sort(this.settings.sort), this.insertToGallery(a), a }, JustifiedGallery.prototype.resetFilters = function(a) { for (var i = 0; i < a.length; i++) $(a[i]).removeClass("jg-filtered") }, JustifiedGallery.prototype.filterArray = function(a) { var settings = this.settings; if ("string" === $.type(settings.filter)) return a.filter(function(el) { var $el = $(el); return $el.is(settings.filter) ? ($el.removeClass("jg-filtered"), !0) : ($el.addClass("jg-filtered").removeClass("jg-visible"), !1) }); if ($.isFunction(settings.filter)) { for (var filteredArr = a.filter(settings.filter), i = 0; i < a.length; i++) filteredArr.indexOf(a[i]) == -1 ? $(a[i]).addClass("jg-filtered").removeClass("jg-visible") : $(a[i]).removeClass("jg-filtered"); return filteredArr } }, JustifiedGallery.prototype.destroy = function() {
            clearInterval(this.checkWidthIntervalId), $.each(this.entries, $.proxy(function(_, entry) {
                var $entry = $(entry);
                $entry.css("width", ""), $entry.css("height", ""), $entry.css("top", ""), $entry.css("left", ""), $entry.data("jg.loaded", void 0), $entry.removeClass("jg-entry");
                var $img = this.imgFromEntry($entry);
                $img.css("width", ""), $img.css("height", ""), $img.css("margin-left", ""), $img.css("margin-top", ""), $img.attr("src", $img.data("jg.originalSrc")), $img.data("jg.originalSrc", void 0), this.removeCaptionEventsHandlers($entry);
                var $caption = this.captionFromEntry($entry);
                $entry.data("jg.createdCaption") ? ($entry.data("jg.createdCaption", void 0), null !== $caption && $caption.remove()) : null !== $caption && $caption.fadeTo(0, 1)
            }, this)), this.$gallery.css("height", ""), this.$gallery.removeClass("justified-gallery"), this.$gallery.data("jg.controller", void 0)
        }, JustifiedGallery.prototype.analyzeImages = function(isForResize) {
            for (var i = this.lastAnalyzedIndex + 1; i < this.entries.length; i++) {
                var $entry = $(this.entries[i]);
                if ($entry.data("jg.loaded") === !0 || "skipped" === $entry.data("jg.loaded")) {
                    var availableWidth = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
                        imgAspectRatio = $entry.data("jg.width") / $entry.data("jg.height");
                    if (availableWidth / (this.buildingRow.aspectRatio + imgAspectRatio) < this.settings.rowHeight && (this.flushRow(!1), ++this["yield"].flushed >= this["yield"].every)) return void this.startImgAnalyzer(isForResize);
                    this.buildingRow.entriesBuff.push($entry), this.buildingRow.aspectRatio += imgAspectRatio, this.buildingRow.width += imgAspectRatio * this.settings.rowHeight, this.lastAnalyzedIndex = i
                } else if ("error" !== $entry.data("jg.loaded")) return
            }
            this.buildingRow.entriesBuff.length > 0 && this.flushRow(!0), this.isSpinnerActive() && this.stopLoadingSpinnerAnimation(), this.stopImgAnalyzerStarter(), this.$gallery.trigger(isForResize ? "jg.resize" : "jg.complete"), this.$gallery.height(this.galleryHeightToSet)
        }, JustifiedGallery.prototype.stopImgAnalyzerStarter = function() { this["yield"].flushed = 0, null !== this.imgAnalyzerTimeout && clearTimeout(this.imgAnalyzerTimeout) }, JustifiedGallery.prototype.startImgAnalyzer = function(isForResize) {
            var that = this;
            this.stopImgAnalyzerStarter(), this.imgAnalyzerTimeout = setTimeout(function() { that.analyzeImages(isForResize) }, .001)
        }, JustifiedGallery.prototype.onImageEvent = function(imageSrc, onLoad, onError) {
            if (onLoad || onError) {
                var memImage = new Image,
                    $memImage = $(memImage);
                onLoad && $memImage.one("load", function() { $memImage.off("load error"), onLoad(memImage) }), onError && $memImage.one("error", function() { $memImage.off("load error"), onError(memImage) }), memImage.src = imageSrc
            }
        }, JustifiedGallery.prototype.init = function() {
            var imagesToLoad = !1,
                skippedImages = !1,
                that = this;
            $.each(this.entries, function(index, entry) {
                var $entry = $(entry),
                    $image = that.imgFromEntry($entry);
                if ($entry.addClass("jg-entry"), $entry.data("jg.loaded") !== !0 && "skipped" !== $entry.data("jg.loaded"))
                    if (null !== that.settings.rel && $entry.attr("rel", that.settings.rel), null !== that.settings.target && $entry.attr("target", that.settings.target), null !== $image) {
                        var imageSrc = that.extractImgSrcFromImage($image);
                        if ($image.attr("src", imageSrc), that.settings.waitThumbnailsLoad === !1) {
                            var width = parseFloat($image.attr("width")),
                                height = parseFloat($image.attr("height"));
                            if (!isNaN(width) && !isNaN(height)) return $entry.data("jg.width", width), $entry.data("jg.height", height), $entry.data("jg.loaded", "skipped"), skippedImages = !0, that.startImgAnalyzer(!1), !0
                        }
                        $entry.data("jg.loaded", !1), imagesToLoad = !0, that.isSpinnerActive() || that.startLoadingSpinnerAnimation(), that.onImageEvent(imageSrc, function(loadImg) { $entry.data("jg.width", loadImg.width), $entry.data("jg.height", loadImg.height), $entry.data("jg.loaded", !0), that.startImgAnalyzer(!1) }, function() { $entry.data("jg.loaded", "error"), that.startImgAnalyzer(!1) })
                    } else $entry.data("jg.loaded", !0), $entry.data("jg.width", $entry.width() | parseFloat($entry.css("width")) | 1), $entry.data("jg.height", $entry.height() | parseFloat($entry.css("height")) | 1)
            }), imagesToLoad || skippedImages || this.startImgAnalyzer(!1), this.checkWidth()
        }, JustifiedGallery.prototype.checkOrConvertNumber = function(settingContainer, settingName) { if ("string" === $.type(settingContainer[settingName]) && (settingContainer[settingName] = parseFloat(settingContainer[settingName])), "number" !== $.type(settingContainer[settingName])) throw settingName + " must be a number"; if (isNaN(settingContainer[settingName])) throw "invalid number for " + settingName }, JustifiedGallery.prototype.checkSizeRangesSuffixes = function() {
            if ("object" !== $.type(this.settings.sizeRangeSuffixes)) throw "sizeRangeSuffixes must be defined and must be an object";
            var suffixRanges = [];
            for (var rangeIdx in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(rangeIdx) && suffixRanges.push(rangeIdx);
            for (var newSizeRngSuffixes = { 0: "" }, i = 0; i < suffixRanges.length; i++)
                if ("string" === $.type(suffixRanges[i])) try {
                    var numIdx = parseInt(suffixRanges[i].replace(/^[a-z]+/, ""), 10);
                    newSizeRngSuffixes[numIdx] = this.settings.sizeRangeSuffixes[suffixRanges[i]]
                } catch (e) { throw "sizeRangeSuffixes keys must contains correct numbers (" + e + ")" } else newSizeRngSuffixes[suffixRanges[i]] = this.settings.sizeRangeSuffixes[suffixRanges[i]];
            this.settings.sizeRangeSuffixes = newSizeRngSuffixes
        }, JustifiedGallery.prototype.retrieveMaxRowHeight = function() {
            var newMaxRowHeight = {};
            if ("string" === $.type(this.settings.maxRowHeight)) this.settings.maxRowHeight.match(/^[0-9]+%$/) ? (newMaxRowHeight.value = parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1]) / 100, newMaxRowHeight.isPercentage = !1) : (newMaxRowHeight.value = parseFloat(this.settings.maxRowHeight), newMaxRowHeight.isPercentage = !0);
            else {
                if ("number" !== $.type(this.settings.maxRowHeight)) { if (this.settings.maxRowHeight === !1 || null === this.settings.maxRowHeight || "undefined" == typeof this.settings.maxRowHeight) return null; throw "maxRowHeight must be a number or a percentage" }
                newMaxRowHeight.value = this.settings.maxRowHeight, newMaxRowHeight.isPercentage = !1
            }
            if (isNaN(newMaxRowHeight.value)) throw "invalid number for maxRowHeight";
            return newMaxRowHeight.isPercentage && newMaxRowHeight.value < 100 && (newMaxRowHeight.value = 100), newMaxRowHeight
        }, JustifiedGallery.prototype.checkSettings = function() { this.checkSizeRangesSuffixes(), this.checkOrConvertNumber(this.settings, "rowHeight"), this.checkOrConvertNumber(this.settings, "margins"), this.checkOrConvertNumber(this.settings, "border"); var lastRowModes = ["justify", "nojustify", "left", "center", "right", "hide"]; if (lastRowModes.indexOf(this.settings.lastRow) === -1) throw "lastRow must be one of: " + lastRowModes.join(", "); if (this.checkOrConvertNumber(this.settings, "justifyThreshold"), this.settings.justifyThreshold < 0 || this.settings.justifyThreshold > 1) throw "justifyThreshold must be in the interval [0,1]"; if ("boolean" !== $.type(this.settings.cssAnimation)) throw "cssAnimation must be a boolean"; if ("boolean" !== $.type(this.settings.captions)) throw "captions must be a boolean"; if (this.checkOrConvertNumber(this.settings.captionSettings, "animationDuration"), this.checkOrConvertNumber(this.settings.captionSettings, "visibleOpacity"), this.settings.captionSettings.visibleOpacity < 0 || this.settings.captionSettings.visibleOpacity > 1) throw "captionSettings.visibleOpacity must be in the interval [0, 1]"; if (this.checkOrConvertNumber(this.settings.captionSettings, "nonVisibleOpacity"), this.settings.captionSettings.nonVisibleOpacity < 0 || this.settings.captionSettings.nonVisibleOpacity > 1) throw "captionSettings.nonVisibleOpacity must be in the interval [0, 1]"; if (this.checkOrConvertNumber(this.settings, "imagesAnimationDuration"), this.checkOrConvertNumber(this.settings, "refreshTime"), this.checkOrConvertNumber(this.settings, "refreshSensitivity"), "boolean" !== $.type(this.settings.randomize)) throw "randomize must be a boolean"; if ("string" !== $.type(this.settings.selector)) throw "selector must be a string"; if (this.settings.sort !== !1 && !$.isFunction(this.settings.sort)) throw "sort must be false or a comparison function"; if (this.settings.filter !== !1 && !$.isFunction(this.settings.filter) && "string" !== $.type(this.settings.filter)) throw "filter must be false, a string or a filter function" }, JustifiedGallery.prototype.retrieveSuffixRanges = function() { var suffixRanges = []; for (var rangeIdx in this.settings.sizeRangeSuffixes) this.settings.sizeRangeSuffixes.hasOwnProperty(rangeIdx) && suffixRanges.push(parseInt(rangeIdx, 10)); return suffixRanges.sort(function(a, b) { return a > b ? 1 : a < b ? -1 : 0 }), suffixRanges }, JustifiedGallery.prototype.updateSettings = function(newSettings) { this.settings = $.extend({}, this.settings, newSettings), this.checkSettings(), this.border = this.settings.border >= 0 ? this.settings.border : this.settings.margins, this.maxRowHeight = this.retrieveMaxRowHeight(), this.suffixRanges = this.retrieveSuffixRanges() }, $.fn.justifiedGallery = function(arg) {
            return this.each(function(index, gallery) {
                var $gallery = $(gallery);
                $gallery.addClass("justified-gallery");
                var controller = $gallery.data("jg.controller");
                if ("undefined" == typeof controller) {
                    if ("undefined" != typeof arg && null !== arg && "object" !== $.type(arg)) { if ("destroy" === arg) return; throw "The argument must be an object" }
                    controller = new JustifiedGallery($gallery, $.extend({}, $.fn.justifiedGallery.defaults, arg)), $gallery.data("jg.controller", controller)
                } else if ("norewind" === arg);
                else {
                    if ("destroy" === arg) return void controller.destroy();
                    controller.updateSettings(arg), controller.rewind()
                }
                controller.updateEntries("norewind" === arg) && controller.init()
            })
        }, $.fn.justifiedGallery.defaults = { sizeRangeSuffixes: {}, thumbnailPath: void 0, rowHeight: 120, maxRowHeight: !1, margins: 1, border: -1, lastRow: "nojustify", justifyThreshold: .9, waitThumbnailsLoad: !0, captions: !0, cssAnimation: !0, imagesAnimationDuration: 500, captionSettings: { animationDuration: 500, visibleOpacity: .7, nonVisibleOpacity: 0 }, rel: null, target: null, extension: /\.[^.\\/]+$/, refreshTime: 200, refreshSensitivity: 0, randomize: !1, sort: !1, filter: !1, selector: "a, div:not(.spinner)" }
    }(jQuery),
    /*!
     * Macy.js v1.1.2 - Macy is a lightweight, dependency free, masonry layout library
     * Author: Copyright (c) Big Bite Creative <@bigbitecreative> <http://bigbitecreative.com>
     * Url: http://macyjs.com/
     * License: MIT
     */
    function(root, factory) { "function" == typeof define && define.amd ? define([], function() { return factory() }) : "object" == typeof exports ? module.exports = factory() : root.Macy = factory() }(this, function() {
        "use strict";
        var extend = function(objects) {
                var prop, extended = {},
                    i = 1,
                    merge = function(obj) { for (prop in obj) Object.prototype.hasOwnProperty.call(obj, prop) && ("[object Object]" === Object.prototype.toString.call(obj[prop]) ? extended[prop] = extend(extended[prop], obj[prop]) : extended[prop] = obj[prop]) };
                for (merge(arguments[0]), i = 1; i < arguments.length; i++) {
                    var obj = arguments[i];
                    merge(obj)
                }
                return extended
            },
            Macy = {};
        Macy.VERSION = "1.1.2", Macy.settings = {};
        var imgsRequired, currentlyLoaded, defaults = { columns: 3, margin: 2, trueOrder: !0, waitForImages: !1 },
            cache = { options: {} },
            getCurrentColumns = function() {
                var noOfColumns, docWidth = document.body.clientWidth;
                for (var widths in cache.options.breakAt)
                    if (docWidth < widths) { noOfColumns = cache.options.breakAt[widths]; break }
                return noOfColumns || (noOfColumns = cache.options.columns), noOfColumns
            },
            getColumnWidths = function(marginIncluded) { marginIncluded = "undefined" == typeof marginIncluded || marginIncluded; var margins, noOfColumns = getCurrentColumns(); return marginIncluded ? 1 === noOfColumns ? "100%" : (margins = (noOfColumns - 1) * cache.options.margin / noOfColumns, "calc(" + 100 / noOfColumns + "% - " + margins + "px)") : 100 / noOfColumns },
            setWidths = function() {
                var percentageWidth = getColumnWidths();
                each(cache.elements, function(index, val) { val.style.width = percentageWidth, val.style.position = "absolute" })
            },
            getLeftValue = function(col) {
                var margin, str, noOfColumns = getCurrentColumns(),
                    totalLeft = 0;
                return col++, 1 === col ? 0 : (margin = (cache.options.margin - (noOfColumns - 1) * cache.options.margin / noOfColumns) * (col - 1), totalLeft += getColumnWidths(!1) * (col - 1), str = "calc(" + totalLeft + "% + " + margin + "px)")
            },
            getTopValue = function(row, col, eles) { var tempHeight, totalHeight = 0; if (0 === row) return 0; for (var i = 0; i < row; i++) tempHeight = parseInt(getProperty(cache.elements[eles[i]], "height").replace("px", ""), 10), totalHeight += isNaN(tempHeight) ? 0 : tempHeight + cache.options.margin; return totalHeight },
            reOrder = function(columns) {
                var col = 0,
                    elements2d = [],
                    tempIndexs = [],
                    indexArray = [];
                each(cache.elements, function(index) { col++, col > columns && (col = 1, elements2d.push(tempIndexs), tempIndexs = []), tempIndexs.push(index) }), elements2d.push(tempIndexs);
                for (var i = 0, elements2dLen = elements2d.length; i < elements2dLen; i++)
                    for (var eleIndexs = elements2d[i], j = 0, eleIndexsLen = eleIndexs.length; j < eleIndexsLen; j++) indexArray[j] = "undefined" == typeof indexArray[j] ? [] : indexArray[j], indexArray[j].push(eleIndexs[j]);
                cache.rows = indexArray, setPosition(!1)
            },
            shuffleOrder = function(columns) {
                for (var eles = cache.elements, element2dArray = [], overflowEles = [], i = 0; i < columns; i++) element2dArray[i] = [];
                for (var k = 0; k < eles.length; k++) overflowEles.push(k);
                for (var v = 0, overflowElesLen = overflowEles.length; v < overflowElesLen; v++) {
                    var index = findIndexOfSmallestTotal(element2dArray);
                    element2dArray[index] = "undefined" == typeof element2dArray[index] ? [] : element2dArray[index], element2dArray[index].push(overflowEles[v])
                }
                cache.rows = element2dArray, setPosition(!0)
            },
            setPosition = function(alternate) {
                alternate = alternate || !1;
                for (var eles = cache.elements, element2dArray = cache.rows, i = 0, element2dArrayLen = element2dArray.length; i < element2dArrayLen; i++)
                    for (var rowArray = alternate ? bubbleSort(element2dArray[i]) : element2dArray[i], j = 0, rowArrayLen = rowArray.length; j < rowArrayLen; j++) {
                        var left, top;
                        left = getLeftValue(i), top = getTopValue(j, i, rowArray, alternate), eles[rowArray[j]].style.top = top + "px", eles[rowArray[j]].style.left = left
                    }
            },
            findIndexOfSmallestTotal = function(arr) {
                for (var smallestIndex, smallest, lastSmall, tempHeight, runningTotal = 0, i = 0, arrLen = arr.length; i < arrLen; i++) {
                    for (var j = 0; j < arr[i].length; j++) tempHeight = parseInt(getProperty(cache.elements[arr[i][j]], "height").replace("px", ""), 10), runningTotal += isNaN(tempHeight) ? 0 : tempHeight;
                    lastSmall = smallest, smallest = void 0 === smallest ? runningTotal : smallest > runningTotal ? runningTotal : smallest, (void 0 === lastSmall || lastSmall > smallest) && (smallestIndex = i), runningTotal = 0
                }
                return smallestIndex
            },
            getProperty = function(element, value) { return window.getComputedStyle(element, null).getPropertyValue(value) },
            findLargestColumn = function() {
                for (var arr = cache.rows, highest = 0, runningTotal = 0, i = 0, arrLen = arr.length; i < arrLen; i++) {
                    for (var j = 0; j < arr[i].length; j++) runningTotal += parseInt(getProperty(cache.elements[arr[i][j]], "height").replace("px", ""), 10), runningTotal += 0 !== j ? cache.options.margin : 0;
                    highest = highest < runningTotal ? runningTotal : highest, runningTotal = 0
                }
                return highest
            },
            recalculate = function() { var columns = getCurrentColumns(); return 1 === columns ? (cache.container.style.height = "auto", void each(cache.elements, function(index, ele) { ele.removeAttribute("style") })) : (setWidths(), cache.elements = cache.container.children, cache.options.trueOrder ? (reOrder(columns), void setContainerHeight()) : (shuffleOrder(columns), void setContainerHeight())) },
            setContainerHeight = function() { cache.container.style.height = findLargestColumn() + "px" },
            bubbleSort = function(list) {
                for (var arr = list, n = arr.length - 1, i = 0; i < n; i++)
                    for (var j = 0; j < n; j++)
                        if (arr[j] > arr[j + 1]) {
                            var temp = arr[j];
                            arr[j] = arr[j + 1], arr[j + 1] = temp
                        }
                return arr
            },
            ele = function(selector) { return document.querySelector(selector) },
            eles = function(selector) { for (var nl = document.querySelectorAll(selector), arr = [], i = nl.length - 1; i >= 0; i--) null !== nl[i].offsetParent && arr.unshift(nl[i]); return arr },
            each = function(arr, func) { for (var i = 0, arrLen = arr.length; i < arrLen; i++) func(i, arr[i]) },
            imagesLoaded = function(during, after) { during = during || !1, after = after || !1, "function" == typeof during && during(), currentlyLoaded >= imgsRequired && "function" == typeof after && after() },
            remove = function() { each(cache.container.children, function(index, ele) { ele.removeAttribute("style") }), cache.container.removeAttribute("style"), window.removeEventListener("resize", recalculate) },
            calculateOnImageLoad = function(during, after) {
                var imgs = eles("img");
                imgsRequired = imgs.length - 1, currentlyLoaded = 0, each(imgs, function(i, img) { return img.complete ? (currentlyLoaded++, void imagesLoaded(during, after)) : (img.addEventListener("load", function() { currentlyLoaded++, imagesLoaded(during, after) }), void img.addEventListener("error", function() { imgsRequired--, imagesLoaded(during, after) })) })
            };
        return Macy.init = function(options) { if (options.container && (cache.container = ele(options.container), cache.container)) return delete options.container, cache.options = extend(defaults, options), window.addEventListener("resize", recalculate), cache.container.style.position = "relative", cache.elements = cache.container.children, cache.options.waitForImages ? void calculateOnImageLoad(null, function() { recalculate() }) : (recalculate(), void calculateOnImageLoad(function() { recalculate() })) }, Macy.recalculate = recalculate, Macy.onImageLoad = calculateOnImageLoad, Macy.remove = remove, Macy
    }),
    function($) {
        $.fn.tilt = function(options) {
            var requestTick = function() { this.ticking || (requestAnimationFrame(updateTransforms.bind(this)), this.ticking = !0) },
                bindEvents = function() {
                    var _this = this;
                    $(this).on("mousemove", mouseMove), $(this).on("mouseenter", mouseEnter), this.settings.reset && $(this).on("mouseleave", mouseLeave), this.settings.glare && $(window).on("resize", updateGlareSize.bind(_this))
                },
                setTransition = function() {
                    var _this2 = this;
                    void 0 !== this.timeout && clearTimeout(this.timeout), $(this).css({ transition: this.settings.speed + "ms " + this.settings.easing }), this.settings.glare && this.glareElement.css({ transition: "opacity " + this.settings.speed + "ms " + this.settings.easing }), this.timeout = setTimeout(function() { $(_this2).css({ transition: "" }), _this2.settings.glare && _this2.glareElement.css({ transition: "" }) }, this.settings.speed)
                },
                mouseEnter = function(event) { this.ticking = !1, $(this).css({ "will-change": "transform" }), setTransition.call(this), $(this).trigger("tilt.mouseEnter") },
                getMousePositions = function(event) { return "undefined" == typeof event && (event = { pageX: $(this).offset().left + $(this).outerWidth() / 2, pageY: $(this).offset().top + $(this).outerHeight() / 2 }), { x: event.pageX, y: event.pageY } },
                mouseMove = function(event) { this.mousePositions = getMousePositions(event), requestTick.call(this) },
                mouseLeave = function() { setTransition.call(this), this.reset = !0, requestTick.call(this), $(this).trigger("tilt.mouseLeave") },
                getValues = function() {
                    var width = $(this).outerWidth(),
                        height = $(this).outerHeight(),
                        left = $(this).offset().left,
                        top = $(this).offset().top,
                        percentageX = (this.mousePositions.x - left) / width,
                        percentageY = (this.mousePositions.y - top) / height,
                        tiltX = (this.settings.maxTilt / 2 - percentageX * this.settings.maxTilt).toFixed(2),
                        tiltY = (percentageY * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
                        angle = Math.atan2(this.mousePositions.x - (left + width / 2), -(this.mousePositions.y - (top + height / 2))) * (180 / Math.PI);
                    return { tiltX: tiltX, tiltY: tiltY, percentageX: 100 * percentageX, percentageY: 100 * percentageY, angle: angle }
                },
                updateTransforms = function() { return this.transforms = getValues.call(this), this.reset ? (this.reset = !1, $(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"), void(this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "0")))) : ($(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"), this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)), $(this).trigger("change", [this.transforms]), void(this.ticking = !1)) },
                prepareGlare = function() {
                    var glarePrerender = this.settings.glarePrerender;
                    if (glarePrerender || $(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'), this.glareElementWrapper = $(this).find(".js-tilt-glare"), this.glareElement = $(this).find(".js-tilt-glare-inner"), !glarePrerender) {
                        var stretch = { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" };
                        this.glareElementWrapper.css(stretch).css({ overflow: "hidden" }), this.glareElement.css({ position: "absolute", top: "50%", left: "50%", "pointer-events": "none", "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)", width: "" + 2 * $(this).outerWidth(), height: "" + 2 * $(this).outerWidth(), transform: "rotate(180deg) translate(-50%, -50%)", "transform-origin": "0% 0%", opacity: "0" })
                    }
                },
                updateGlareSize = function() { this.glareElement.css({ width: "" + 2 * $(this).outerWidth(), height: "" + 2 * $(this).outerWidth() }) };
            return $.fn.tilt.destroy = function() { $(this).each(function() { $(this).find(".js-tilt-glare").remove(), $(this).css({ "will-change": "", transform: "" }), $(this).off("mousemove mouseenter mouseleave") }) }, $.fn.tilt.getValues = function() { var results = []; return $(this).each(function() { this.mousePositions = getMousePositions.call(this), results.push(getValues.call(this)) }), results }, $.fn.tilt.reset = function() {
                $(this).each(function() {
                    var _this3 = this;
                    this.mousePositions = getMousePositions.call(this), this.settings = $(this).data("settings"), mouseLeave.call(this), setTimeout(function() { _this3.reset = !1 }, this.settings.transition)
                })
            }, this.each(function() {
                var _this4 = this;
                this.settings = $.extend({ maxTilt: $(this).is("[data-tilt-max]") ? $(this).data("tilt-max") : 20, perspective: $(this).is("[data-tilt-perspective]") ? $(this).data("tilt-perspective") : 300, easing: $(this).is("[data-tilt-easing]") ? $(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)", scale: $(this).is("[data-tilt-scale]") ? $(this).data("tilt-scale") : "1", speed: $(this).is("[data-tilt-speed]") ? $(this).data("tilt-speed") : "400", transition: !$(this).is("[data-tilt-transition]") || $(this).data("tilt-transition"), axis: $(this).is("[data-tilt-axis]") ? $(this).data("tilt-axis") : null, reset: !$(this).is("[data-tilt-reset]") || $(this).data("tilt-reset"), glare: !!$(this).is("[data-tilt-glare]") && $(this).data("tilt-glare"), maxGlare: $(this).is("[data-tilt-maxglare]") ? $(this).data("tilt-maxglare") : 1 }, options), this.init = function() { $(_this4).data("settings", _this4.settings), _this4.settings.glare && prepareGlare.call(_this4), bindEvents.call(_this4) }, this.init()
            })
        }, $("[data-tilt]").tilt()
    }(jQuery),
    // Licensed under the terms of the MIT license.
    //
    // You may use it in your theme if you credit me. 
    // It is also free to use on any individual website.
    //
    // Exception:
    // The only restriction is to not publish any  
    // extension for browsers or native application
    // without getting a written permission first.
    //
    function() {
        function initTest() { options.keyboardSupport && addEvent("keydown", keydown) }

        function init() {
            if (!initDone && document.body) {
                initDone = !0;
                var body = document.body,
                    html = document.documentElement,
                    windowHeight = window.innerHeight,
                    scrollHeight = body.scrollHeight;
                if (root = document.compatMode.indexOf("CSS") >= 0 ? html : body, activeElement = body, initTest(), top != self) isFrame = !0;
                else if (isOldSafari && scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {
                    var fullPageElem = document.createElement("div");
                    fullPageElem.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + root.scrollHeight + "px", document.body.appendChild(fullPageElem);
                    var pendingRefresh;
                    refreshSize = function() { pendingRefresh || (pendingRefresh = setTimeout(function() { isExcluded || (fullPageElem.style.height = "0", fullPageElem.style.height = root.scrollHeight + "px", pendingRefresh = null) }, 500)) }, setTimeout(refreshSize, 10), addEvent("resize", refreshSize);
                    var config = { attributes: !0, childList: !0, characterData: !1 };
                    if (observer = new MutationObserver(refreshSize), observer.observe(body, config), root.offsetHeight <= windowHeight) {
                        var clearfix = document.createElement("div");
                        clearfix.style.clear = "both", body.appendChild(clearfix)
                    }
                }
                options.fixedBackground || isExcluded || (body.style.backgroundAttachment = "scroll", html.style.backgroundAttachment = "scroll")
            }
        }

        function cleanup() { observer && observer.disconnect(), removeEvent(wheelEvent, wheel), removeEvent("mousedown", mousedown), removeEvent("keydown", keydown), removeEvent("resize", refreshSize), removeEvent("load", init) }

        function scrollArray(elem, left, top) {
            if (directionCheck(left, top), 1 != options.accelerationMax) {
                var now = Date.now(),
                    elapsed = now - lastScroll;
                if (elapsed < options.accelerationDelta) {
                    var factor = (1 + 50 / elapsed) / 2;
                    factor > 1 && (factor = Math.min(factor, options.accelerationMax), left *= factor, top *= factor)
                }
                lastScroll = Date.now()
            }
            if (que.push({ x: left, y: top, lastX: left < 0 ? .99 : -.99, lastY: top < 0 ? .99 : -.99, start: Date.now() }), !pending) {
                var scrollWindow = elem === document.body,
                    step = function(time) {
                        for (var now = Date.now(), scrollX = 0, scrollY = 0, i = 0; i < que.length; i++) {
                            var item = que[i],
                                elapsed = now - item.start,
                                finished = elapsed >= options.animationTime,
                                position = finished ? 1 : elapsed / options.animationTime;
                            options.pulseAlgorithm && (position = pulse(position));
                            var x = item.x * position - item.lastX >> 0,
                                y = item.y * position - item.lastY >> 0;
                            scrollX += x, scrollY += y, item.lastX += x, item.lastY += y, finished && (que.splice(i, 1), i--)
                        }
                        scrollWindow ? window.scrollBy(scrollX, scrollY) : (scrollX && (elem.scrollLeft += scrollX), scrollY && (elem.scrollTop += scrollY)), left || top || (que = []), que.length ? requestFrame(step, elem, 1e3 / options.frameRate + 1) : pending = !1
                    };
                requestFrame(step, elem, 0), pending = !0
            }
        }

        function wheel(event) {
            initDone || init();
            var target = event.target;
            if (event.defaultPrevented || event.ctrlKey) return !0;
            if (isNodeName(activeElement, "embed") || isNodeName(target, "embed") && /\.pdf/i.test(target.src) || isNodeName(activeElement, "object") || target.shadowRoot) return !0;
            var deltaX = -event.wheelDeltaX || event.deltaX || 0,
                deltaY = -event.wheelDeltaY || event.deltaY || 0;
            isMac && (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120) && (deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX))), event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120) && (deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY)))), deltaX || deltaY || (deltaY = -event.wheelDelta || 0), 1 === event.deltaMode && (deltaX *= 40, deltaY *= 40);
            var overflowing = overflowingAncestor(target);
            return overflowing ? !!isTouchpad(deltaY) || (Math.abs(deltaX) > 1.2 && (deltaX *= options.stepSize / 120), Math.abs(deltaY) > 1.2 && (deltaY *= options.stepSize / 120), scrollArray(overflowing, deltaX, deltaY), void scheduleClearCache()) : !isFrame || !isChrome || (Object.defineProperty(event, "target", { value: window.frameElement }), parent.wheel(event))
        }

        function keydown(event) {
            var target = event.target,
                modifier = event.ctrlKey || event.altKey || event.metaKey || event.shiftKey && event.keyCode !== key.spacebar;
            document.body.contains(activeElement) || (activeElement = document.activeElement);
            var inputNodeNames = /^(textarea|select|embed|object)$/i,
                buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (event.defaultPrevented || inputNodeNames.test(target.nodeName) || isNodeName(target, "input") && !buttonTypes.test(target.type) || isNodeName(activeElement, "video") || isInsideYoutubeVideo(event) || target.isContentEditable || modifier) return !0;
            if ((isNodeName(target, "button") || isNodeName(target, "input") && buttonTypes.test(target.type)) && event.keyCode === key.spacebar) return !0;
            if (isNodeName(target, "input") && "radio" == target.type && arrowKeys[event.keyCode]) return !0;
            var shift, x = 0,
                y = 0,
                overflowing = overflowingAncestor(activeElement);
            if (!overflowing) return !isFrame || !isChrome || parent.keydown(event);
            var clientHeight = overflowing.clientHeight;
            switch (overflowing == document.body && (clientHeight = window.innerHeight), event.keyCode) {
                case key.up:
                    y = -options.arrowScroll;
                    break;
                case key.down:
                    y = options.arrowScroll;
                    break;
                case key.spacebar:
                    shift = event.shiftKey ? 1 : -1, y = -shift * clientHeight * .9;
                    break;
                case key.pageup:
                    y = .9 * -clientHeight;
                    break;
                case key.pagedown:
                    y = .9 * clientHeight;
                    break;
                case key.home:
                    y = -overflowing.scrollTop;
                    break;
                case key.end:
                    var scroll = overflowing.scrollHeight - overflowing.scrollTop,
                        scrollRemaining = scroll - clientHeight;
                    y = scrollRemaining > 0 ? scrollRemaining + 10 : 0;
                    break;
                case key.left:
                    x = -options.arrowScroll;
                    break;
                case key.right:
                    x = options.arrowScroll;
                    break;
                default:
                    return !0
            }
            scrollArray(overflowing, x, y), event.preventDefault(), scheduleClearCache()
        }

        function mousedown(event) { activeElement = event.target }

        function scheduleClearCache() { clearTimeout(clearCacheTimer), clearCacheTimer = setInterval(function() { cache = {} }, 1e3) }

        function setCache(elems, overflowing) { for (var i = elems.length; i--;) cache[uniqueID(elems[i])] = overflowing; return overflowing }

        function overflowingAncestor(el) {
            var elems = [],
                body = document.body,
                rootScrollHeight = root.scrollHeight;
            do {
                var cached = cache[uniqueID(el)];
                if (cached) return setCache(elems, cached);
                if (elems.push(el), rootScrollHeight === el.scrollHeight) {
                    var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body),
                        isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
                    if (isFrame && isContentOverflowing(root) || !isFrame && isOverflowCSS) return setCache(elems, getScrollRoot())
                } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) return setCache(elems, el)
            } while (el = el.parentElement)
        }

        function isContentOverflowing(el) { return el.clientHeight + 10 < el.scrollHeight }

        function overflowNotHidden(el) { var overflow = getComputedStyle(el, "").getPropertyValue("overflow-y"); return "hidden" !== overflow }

        function overflowAutoOrScroll(el) { var overflow = getComputedStyle(el, "").getPropertyValue("overflow-y"); return "scroll" === overflow || "auto" === overflow }

        function addEvent(type, fn) { window.addEventListener(type, fn, !1) }

        function removeEvent(type, fn) { window.removeEventListener(type, fn, !1) }

        function isNodeName(el, tag) { return (el.nodeName || "").toLowerCase() === tag.toLowerCase() }

        function directionCheck(x, y) { x = x > 0 ? 1 : -1, y = y > 0 ? 1 : -1, direction.x === x && direction.y === y || (direction.x = x, direction.y = y, que = [], lastScroll = 0) }

        function isTouchpad(deltaY) { if (deltaY) return deltaBuffer.length || (deltaBuffer = [deltaY, deltaY, deltaY]), deltaY = Math.abs(deltaY), deltaBuffer.push(deltaY), deltaBuffer.shift(), clearTimeout(deltaBufferTimer), deltaBufferTimer = setTimeout(function() { try { localStorage.SS_deltaBuffer = deltaBuffer.join(",") } catch (e) {} }, 1e3), !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100) }

        function isDivisible(n, divisor) { return Math.floor(n / divisor) == n / divisor }

        function allDeltasDivisableBy(divisor) { return isDivisible(deltaBuffer[0], divisor) && isDivisible(deltaBuffer[1], divisor) && isDivisible(deltaBuffer[2], divisor) }

        function isInsideYoutubeVideo(event) {
            var elem = event.target,
                isControl = !1;
            if (document.URL.indexOf("www.youtube.com/watch") != -1)
                do
                    if (isControl = elem.classList && elem.classList.contains("html5-video-controls")) break;
            while (elem = elem.parentNode);
            return isControl
        }

        function pulse_(x) { var val, start, expx; return x *= options.pulseScale, x < 1 ? val = x - (1 - Math.exp(-x)) : (start = Math.exp(-1), x -= 1, expx = 1 - Math.exp(-x), val = start + expx * (1 - start)), val * options.pulseNormalize }

        function pulse(x) { return x >= 1 ? 1 : x <= 0 ? 0 : (1 == options.pulseNormalize && (options.pulseNormalize /= pulse_(1)), pulse_(x)) }

        function SmoothScroll(optionsToSet) { for (var key in optionsToSet) defaultOptions.hasOwnProperty(key) && (options[key] = optionsToSet[key]) }
        var activeElement, observer, refreshSize, clearCacheTimer, deltaBufferTimer, defaultOptions = { frameRate: 150, animationTime: 400, stepSize: 100, pulseAlgorithm: !0, pulseScale: 4, pulseNormalize: 1, accelerationDelta: 50, accelerationMax: 3, keyboardSupport: !0, arrowScroll: 50, fixedBackground: !0, excluded: "" },
            options = defaultOptions,
            isExcluded = !1,
            isFrame = !1,
            direction = { x: 0, y: 0 },
            initDone = !1,
            root = document.documentElement,
            deltaBuffer = [],
            isMac = /^Mac/.test(navigator.platform),
            key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 },
            arrowKeys = { 37: 1, 38: 1, 39: 1, 40: 1 },
            que = [],
            pending = !1,
            lastScroll = Date.now(),
            uniqueID = function() { var i = 0; return function(el) { return el.uniqueID || (el.uniqueID = i++) } }(),
            cache = {};
        if (window.localStorage && localStorage.SS_deltaBuffer) try { deltaBuffer = localStorage.SS_deltaBuffer.split(",") } catch (e) {}
        var wheelEvent, requestFrame = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback, element, delay) { window.setTimeout(callback, delay || 1e3 / 60) } }(),
            MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            getScrollRoot = function() {
                var SCROLL_ROOT;
                return function() {
                    if (!SCROLL_ROOT) {
                        var dummy = document.createElement("div");
                        dummy.style.cssText = "height:10000px;width:1px;", document.body.appendChild(dummy);
                        var bodyScrollTop = document.body.scrollTop;
                        document.documentElement.scrollTop, window.scrollBy(0, 3), SCROLL_ROOT = document.body.scrollTop != bodyScrollTop ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(dummy)
                    }
                    return SCROLL_ROOT
                }
            }(),
            userAgent = window.navigator.userAgent,
            isEdge = /Edge/.test(userAgent),
            isChrome = /chrome/i.test(userAgent) && !isEdge,
            isSafari = /safari/i.test(userAgent) && !isEdge,
            isMobile = /mobile/i.test(userAgent),
            isIEWin7 = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent),
            isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent)),
            isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;
        "onwheel" in document.createElement("div") ? wheelEvent = "wheel" : "onmousewheel" in document.createElement("div") && (wheelEvent = "mousewheel"), wheelEvent && isEnabledForBrowser && (addEvent(wheelEvent, wheel), addEvent("mousedown", mousedown), addEvent("load", init)), SmoothScroll.destroy = cleanup, window.SmoothScrollOptions && SmoothScroll(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function() { return SmoothScroll }) : "object" == typeof exports ? module.exports = SmoothScroll : window.SmoothScroll = SmoothScroll
    }(),
    /*!
     * imagesLoaded v4.1.3
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    function(window, factory) { "use strict"; "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(EvEmitter) { return factory(window, EvEmitter) }) : "object" == typeof module && module.exports ? module.exports = factory(window, require("ev-emitter")) : window.imagesLoaded = factory(window, window.EvEmitter) }("undefined" != typeof window ? window : this, function(window, EvEmitter) {
        "use strict";

        function extend(a, b) { for (var prop in b) a[prop] = b[prop]; return a }

        function makeArray(obj) {
            var ary = [];
            if (Array.isArray(obj)) ary = obj;
            else if ("number" == typeof obj.length)
                for (var i = 0; i < obj.length; i++) ary.push(obj[i]);
            else ary.push(obj);
            return ary
        }

        function ImagesLoaded(elem, options, onAlways) { return this instanceof ImagesLoaded ? ("string" == typeof elem && (elem = document.querySelectorAll(elem)), this.elements = makeArray(elem), this.options = extend({}, this.options), "function" == typeof options ? onAlways = options : extend(this.options, options), onAlways && this.on("always", onAlways), this.getImages(), $ && (this.jqDeferred = new $.Deferred), void setTimeout(function() { this.check() }.bind(this))) : new ImagesLoaded(elem, options, onAlways) }

        function LoadingImage(img) { this.img = img }

        function Background(url, element) { this.url = url, this.element = element, this.img = new Image }
        var $ = window.jQuery,
            console = window.console;
        ImagesLoaded.prototype = Object.create(EvEmitter.prototype), ImagesLoaded.prototype.options = {}, ImagesLoaded.prototype.getImages = function() { this.images = [], this.elements.forEach(this.addElementImages, this) }, ImagesLoaded.prototype.addElementImages = function(elem) {
            "IMG" == elem.nodeName && this.addImage(elem), this.options.background === !0 && this.addElementBackgroundImages(elem);
            var nodeType = elem.nodeType;
            if (nodeType && elementNodeTypes[nodeType]) {
                for (var childImgs = elem.querySelectorAll("img"), i = 0; i < childImgs.length; i++) {
                    var img = childImgs[i];
                    this.addImage(img)
                }
                if ("string" == typeof this.options.background) {
                    var children = elem.querySelectorAll(this.options.background);
                    for (i = 0; i < children.length; i++) {
                        var child = children[i];
                        this.addElementBackgroundImages(child)
                    }
                }
            }
        };
        var elementNodeTypes = { 1: !0, 9: !0, 11: !0 };
        return ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
            var style = getComputedStyle(elem);
            if (style)
                for (var reURL = /url\((['"])?(.*?)\1\)/gi, matches = reURL.exec(style.backgroundImage); null !== matches;) {
                    var url = matches && matches[2];
                    url && this.addBackground(url, elem), matches = reURL.exec(style.backgroundImage)
                }
        }, ImagesLoaded.prototype.addImage = function(img) {
            var loadingImage = new LoadingImage(img);
            this.images.push(loadingImage)
        }, ImagesLoaded.prototype.addBackground = function(url, elem) {
            var background = new Background(url, elem);
            this.images.push(background)
        }, ImagesLoaded.prototype.check = function() {
            function onProgress(image, elem, message) { setTimeout(function() { _this.progress(image, elem, message) }) }
            var _this = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(loadingImage) { loadingImage.once("progress", onProgress), loadingImage.check() }) : void this.complete()
        }, ImagesLoaded.prototype.progress = function(image, elem, message) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded, this.emitEvent("progress", [this, image, elem]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, image), this.progressedCount == this.images.length && this.complete(), this.options.debug && console && console.log("progress: " + message, image, elem) }, ImagesLoaded.prototype.complete = function() {
            var eventName = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(eventName, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[jqMethod](this)
            }
        }, LoadingImage.prototype = Object.create(EvEmitter.prototype), LoadingImage.prototype.check = function() { var isComplete = this.getIsImageComplete(); return isComplete ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src)) }, LoadingImage.prototype.getIsImageComplete = function() { return this.img.complete && void 0 !== this.img.naturalWidth }, LoadingImage.prototype.confirm = function(isLoaded, message) { this.isLoaded = isLoaded, this.emitEvent("progress", [this, this.img, message]) }, LoadingImage.prototype.handleEvent = function(event) {
            var method = "on" + event.type;
            this[method] && this[method](event)
        }, LoadingImage.prototype.onload = function() { this.confirm(!0, "onload"), this.unbindEvents() }, LoadingImage.prototype.onerror = function() { this.confirm(!1, "onerror"), this.unbindEvents() }, LoadingImage.prototype.unbindEvents = function() { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, Background.prototype = Object.create(LoadingImage.prototype), Background.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var isComplete = this.getIsImageComplete();
            isComplete && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, Background.prototype.unbindEvents = function() { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, Background.prototype.confirm = function(isLoaded, message) { this.isLoaded = isLoaded, this.emitEvent("progress", [this, this.element, message]) }, ImagesLoaded.makeJQueryPlugin = function(jQuery) { jQuery = jQuery || window.jQuery, jQuery && ($ = jQuery, $.fn.imagesLoaded = function(options, callback) { var instance = new ImagesLoaded(this, options, callback); return instance.jqDeferred.promise($(this)) }) }, ImagesLoaded.makeJQueryPlugin(), ImagesLoaded
    });