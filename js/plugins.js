/*
	01) NICESCROLL
	02) WAYPOINTS
	03) NAV ANCHOR (ONE PAGE NAV PLUGIN)
	04) SCROLL TO
	05) EASING
	06) OWL CAROUSEL
	07) TYPED
	08)	COUNT TO
*/


/*------------------------------------------------------------------*/
/*	02) NICESCROLL
/*------------------------------------------------------------------*/

/* jquery.nicescroll 3.2.0 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */
(function (e) {
	var y = !1,
		D = !1,
		J = 5E3,
		K = 2E3,
		x = 0,
		L = function () {
			var e = document.getElementsByTagName("script"),
				e = e[e.length - 1].src.split("?")[0];
			return 0 < e.split("/").length ? e.split("/").slice(0, -1).join("/") + "/" : ""
		}();
	Array.prototype.forEach || (Array.prototype.forEach = function (e, c) {
		for (var h = 0, l = this.length; h < l; ++h) e.call(c, this[h], h, this)
	});
	var v = window.requestAnimationFrame || !1,
		w = window.cancelAnimationFrame || !1;
	["ms", "moz", "webkit", "o"].forEach(function (e) {
		v || (v = window[e + "RequestAnimationFrame"]);
		w || (w =
			window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"])
	});
	var z = window.MutationObserver || window.WebKitMutationObserver || !1,
		F = {
			zindex: "auto",
			cursoropacitymin: 0,
			cursoropacitymax: 1,
			cursorcolor: "#424242",
			cursorwidth: "5px",
			cursorborder: "1px solid #fff",
			cursorborderradius: "5px",
			scrollspeed: 60,
			mousescrollstep: 24,
			touchbehavior: !1,
			hwacceleration: !0,
			usetransition: !0,
			boxzoom: !1,
			dblclickzoom: !0,
			gesturezoom: !0,
			grabcursorenabled: !0,
			autohidemode: !0,
			background: "",
			iframeautoresize: !0,
			cursorminheight: 32,
			preservenativescrolling: !0,
			railoffset: !1,
			bouncescroll: !0,
			spacebarenabled: !0,
			railpadding: {
				top: 0,
				right: 0,
				left: 0,
				bottom: 0
			},
			disableoutline: !0,
			horizrailenabled: !0,
			railalign: "right",
			railvalign: "bottom",
			enabletranslate3d: !0,
			enablemousewheel: !0,
			enablekeyboard: !0,
			smoothscroll: !0,
			sensitiverail: !0,
			enablemouselockapi: !0,
			cursorfixedheight: !1,
			directionlockdeadzone: 6,
			hidecursordelay: 400,
			nativeparentscrolling: !0,
			enablescrollonselection: !0,
			overflowx: !0,
			overflowy: !0,
			cursordragspeed: 0.3,
			rtlmode: !1,
			cursordragontouch: !1
		},
		E = !1,
		M = function () {
			if (E) return E;
			var e = document.createElement("DIV"),
				c = {
					haspointerlock: "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document
				};
			c.isopera = "opera" in window;
			c.isopera12 = c.isopera && "getUserMedia" in navigator;
			c.isie = "all" in document && "attachEvent" in e && !c.isopera;
			c.isieold = c.isie && !("msInterpolationMode" in e.style);
			c.isie7 = c.isie && !c.isieold && (!("documentMode" in document) || 7 == document.documentMode);
			c.isie8 = c.isie && "documentMode" in document &&
				8 == document.documentMode;
			c.isie9 = c.isie && "performance" in window && 9 <= document.documentMode;
			c.isie10 = c.isie && "performance" in window && 10 <= document.documentMode;
			c.isie9mobile = /iemobile.9/i.test(navigator.userAgent);
			c.isie9mobile && (c.isie9 = !1);
			c.isie7mobile = !c.isie9mobile && c.isie7 && /iemobile/i.test(navigator.userAgent);
			c.ismozilla = "MozAppearance" in e.style;
			c.iswebkit = "WebkitAppearance" in e.style;
			c.ischrome = "chrome" in window;
			c.ischrome22 = c.ischrome && c.haspointerlock;
			c.ischrome26 = c.ischrome && "transition" in
				e.style;
			c.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;
			c.hasmstouch = window.navigator.msPointerEnabled || !1;
			c.ismac = /^mac$/i.test(navigator.platform);
			c.isios = c.cantouch && /iphone|ipad|ipod/i.test(navigator.platform);
			c.isios4 = c.isios && !("seal" in Object);
			c.isandroid = /android/i.test(navigator.userAgent);
			c.trstyle = !1;
			c.hastransform = !1;
			c.hastranslate3d = !1;
			c.transitionstyle = !1;
			c.hastransition = !1;
			c.transitionend = !1;
			for (var h = ["transform", "msTransform", "webkitTransform", "MozTransform",
					"OTransform"
				], l = 0; l < h.length; l++)
				if ("undefined" != typeof e.style[h[l]]) {
					c.trstyle = h[l];
					break
				} c.hastransform = !1 != c.trstyle;
			c.hastransform && (e.style[c.trstyle] = "translate3d(1px,2px,3px)", c.hastranslate3d = /translate3d/.test(e.style[c.trstyle]));
			c.transitionstyle = !1;
			c.prefixstyle = "";
			c.transitionend = !1;
			for (var h = "transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "), n = " -webkit- -moz- -o- -o -ms- -khtml-".split(" "), t = "transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "),
					l = 0; l < h.length; l++)
				if (h[l] in e.style) {
					c.transitionstyle = h[l];
					c.prefixstyle = n[l];
					c.transitionend = t[l];
					break
				} c.ischrome26 && (c.prefixstyle = n[1]);
			c.hastransition = c.transitionstyle;
			a: {
				h = ["-moz-grab", "-webkit-grab", "grab"];
				if (c.ischrome && !c.ischrome22 || c.isie) h = [];
				for (l = 0; l < h.length; l++)
					if (n = h[l], e.style.cursor = n, e.style.cursor == n) {
						h = n;
						break a
					} h = "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
			}
			c.cursorgrabvalue = h;
			c.hasmousecapture = "setCapture" in e;
			c.hasMutationObserver = !1 !== z;
			return E =
				c
		},
		N = function (k, c) {
			function h() {
				var d = b.win;
				if ("zIndex" in d) return d.zIndex();
				for (; 0 < d.length && 9 != d[0].nodeType;) {
					var c = d.css("zIndex");
					if (!isNaN(c) && 0 != c) return parseInt(c);
					d = d.parent()
				}
				return !1
			}

			function l(d, c, g) {
				c = d.css(c);
				d = parseFloat(c);
				return isNaN(d) ? (d = u[c] || 0, g = 3 == d ? g ? b.win.outerHeight() - b.win.innerHeight() : b.win.outerWidth() - b.win.innerWidth() : 1, b.isie8 && d && (d += 1), g ? d : 0) : d
			}

			function n(d, c, g, e) {
				b._bind(d, c, function (b) {
					b = b ? b : window.event;
					var e = {
						original: b,
						target: b.target || b.srcElement,
						type: "wheel",
						deltaMode: "MozMousePixelScroll" == b.type ? 0 : 1,
						deltaX: 0,
						deltaZ: 0,
						preventDefault: function () {
							b.preventDefault ? b.preventDefault() : b.returnValue = !1;
							return !1
						},
						stopImmediatePropagation: function () {
							b.stopImmediatePropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0
						}
					};
					"mousewheel" == c ? (e.deltaY = -0.025 * b.wheelDelta, b.wheelDeltaX && (e.deltaX = -0.025 * b.wheelDeltaX)) : e.deltaY = b.detail;
					return g.call(d, e)
				}, e)
			}

			function t(d, c, g) {
				var e, f;
				0 == d.deltaMode ? (e = -Math.floor(d.deltaX * (b.opt.mousescrollstep / 54)), f = -Math.floor(d.deltaY *
					(b.opt.mousescrollstep / 54))) : 1 == d.deltaMode && (e = -Math.floor(d.deltaX * b.opt.mousescrollstep), f = -Math.floor(d.deltaY * b.opt.mousescrollstep));
				c && (0 == e && f) && (e = f, f = 0);
				e && (b.scrollmom && b.scrollmom.stop(), b.lastdeltax += e, b.debounced("mousewheelx", function () {
					var d = b.lastdeltax;
					b.lastdeltax = 0;
					b.rail.drag || b.doScrollLeftBy(d)
				}, 120));
				if (f) {
					if (b.opt.nativeparentscrolling && g && !b.ispage && !b.zoomactive)
						if (0 > f) {
							if (b.getScrollTop() >= b.page.maxh) return !0
						} else if (0 >= b.getScrollTop()) return !0;
					b.scrollmom && b.scrollmom.stop();
					b.lastdeltay += f;
					b.debounced("mousewheely", function () {
						var d = b.lastdeltay;
						b.lastdeltay = 0;
						b.rail.drag || b.doScrollBy(d)
					}, 120)
				}
				d.stopImmediatePropagation();
				return d.preventDefault()
			}
			var b = this;
			this.version = "3.4.0";
			this.name = "nicescroll";
			this.me = c;
			this.opt = {
				doc: e("body"),
				win: !1
			};
			e.extend(this.opt, F);
			this.opt.snapbackspeed = 80;
			if (k)
				for (var q in b.opt) "undefined" != typeof k[q] && (b.opt[q] = k[q]);
			this.iddoc = (this.doc = b.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
			this.ispage = /BODY|HTML/.test(b.opt.win ? b.opt.win[0].nodeName :
				this.doc[0].nodeName);
			this.haswrapper = !1 !== b.opt.win;
			this.win = b.opt.win || (this.ispage ? e(window) : this.doc);
			this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win;
			this.body = e("body");
			this.iframe = this.isfixed = this.viewport = !1;
			this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
			this.istextarea = "TEXTAREA" == this.win[0].nodeName;
			this.forcescreen = !1;
			this.canshowonmouseevent = "scroll" != b.opt.autohidemode;
			this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel =
				this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
			this.scroll = {
				x: 0,
				y: 0
			};
			this.scrollratio = {
				x: 0,
				y: 0
			};
			this.cursorheight = 20;
			this.scrollvaluemax = 0;
			this.observerremover = this.observer = this.scrollmom = this.scrollrunning = this.checkrtlmode = !1;
			do this.id = "ascrail" + K++; while (document.getElementById(this.id));
			this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor =
				this.rail = !1;
			this.visibility = !0;
			this.hidden = this.locked = !1;
			this.cursoractive = !0;
			this.overflowx = b.opt.overflowx;
			this.overflowy = b.opt.overflowy;
			this.nativescrollingarea = !1;
			this.checkarea = 0;
			this.events = [];
			this.saved = {};
			this.delaylist = {};
			this.synclist = {};
			this.lastdeltay = this.lastdeltax = 0;
			this.detected = M();
			var f = e.extend({}, this.detected);
			this.ishwscroll = (this.canhwscroll = f.hastransform && b.opt.hwacceleration) && b.haswrapper;
			this.istouchcapable = !1;
			f.cantouch && (f.ischrome && !f.isios && !f.isandroid) && (this.istouchcapable = !0, f.cantouch = !1);
			f.cantouch && (f.ismozilla && !f.isios) && (this.istouchcapable = !0, f.cantouch = !1);
			b.opt.enablemouselockapi || (f.hasmousecapture = !1, f.haspointerlock = !1);
			this.delayed = function (d, c, g, e) {
				var f = b.delaylist[d],
					h = (new Date).getTime();
				if (!e && f && f.tt) return !1;
				f && f.tt && clearTimeout(f.tt);
				if (f && f.last + g > h && !f.tt) b.delaylist[d] = {
					last: h + g,
					tt: setTimeout(function () {
						b.delaylist[d].tt = 0;
						c.call()
					}, g)
				};
				else if (!f || !f.tt) b.delaylist[d] = {
					last: h,
					tt: 0
				}, setTimeout(function () {
					c.call()
				}, 0)
			};
			this.debounced = function (d,
				c, g) {
				var f = b.delaylist[d];
				(new Date).getTime();
				b.delaylist[d] = c;
				f || setTimeout(function () {
					var c = b.delaylist[d];
					b.delaylist[d] = !1;
					c.call()
				}, g)
			};
			this.synched = function (d, c) {
				b.synclist[d] = c;
				(function () {
					b.onsync || (v(function () {
						b.onsync = !1;
						for (d in b.synclist) {
							var c = b.synclist[d];
							c && c.call(b);
							b.synclist[d] = !1
						}
					}), b.onsync = !0)
				})();
				return d
			};
			this.unsynched = function (d) {
				b.synclist[d] && (b.synclist[d] = !1)
			};
			this.css = function (d, c) {
				for (var g in c) b.saved.css.push([d, g, d.css(g)]), d.css(g, c[g])
			};
			this.scrollTop = function (d) {
				return "undefined" ==
					typeof d ? b.getScrollTop() : b.setScrollTop(d)
			};
			this.scrollLeft = function (d) {
				return "undefined" == typeof d ? b.getScrollLeft() : b.setScrollLeft(d)
			};
			BezierClass = function (b, c, g, f, e, h, l) {
				this.st = b;
				this.ed = c;
				this.spd = g;
				this.p1 = f || 0;
				this.p2 = e || 1;
				this.p3 = h || 0;
				this.p4 = l || 1;
				this.ts = (new Date).getTime();
				this.df = this.ed - this.st
			};
			BezierClass.prototype = {
				B2: function (b) {
					return 3 * b * b * (1 - b)
				},
				B3: function (b) {
					return 3 * b * (1 - b) * (1 - b)
				},
				B4: function (b) {
					return (1 - b) * (1 - b) * (1 - b)
				},
				getNow: function () {
					var b = 1 - ((new Date).getTime() - this.ts) /
						this.spd,
						c = this.B2(b) + this.B3(b) + this.B4(b);
					return 0 > b ? this.ed : this.st + Math.round(this.df * c)
				},
				update: function (b, c) {
					this.st = this.getNow();
					this.ed = b;
					this.spd = c;
					this.ts = (new Date).getTime();
					this.df = this.ed - this.st;
					return this
				}
			};
			if (this.ishwscroll) {
				this.doc.translate = {
					x: 0,
					y: 0,
					tx: "0px",
					ty: "0px"
				};
				f.hastranslate3d && f.isios && this.doc.css("-webkit-backface-visibility", "hidden");
				var r = function () {
					var d = b.doc.css(f.trstyle);
					return d && "matrix" == d.substr(0, 6) ? d.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) :
						!1
				};
				this.getScrollTop = function (d) {
					if (!d) {
						if (d = r()) return 16 == d.length ? -d[13] : -d[5];
						if (b.timerscroll && b.timerscroll.bz) return b.timerscroll.bz.getNow()
					}
					return b.doc.translate.y
				};
				this.getScrollLeft = function (d) {
					if (!d) {
						if (d = r()) return 16 == d.length ? -d[12] : -d[4];
						if (b.timerscroll && b.timerscroll.bh) return b.timerscroll.bh.getNow()
					}
					return b.doc.translate.x
				};
				this.notifyScrollEvent = document.createEvent ? function (b) {
						var c = document.createEvent("UIEvents");
						c.initUIEvent("scroll", !1, !0, window, 1);
						b.dispatchEvent(c)
					} :
					document.fireEvent ? function (b) {
						var c = document.createEventObject();
						b.fireEvent("onscroll");
						c.cancelBubble = !0
					} : function (b, c) {};
				f.hastranslate3d && b.opt.enabletranslate3d ? (this.setScrollTop = function (d, c) {
					b.doc.translate.y = d;
					b.doc.translate.ty = -1 * d + "px";
					b.doc.css(f.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)");
					c || b.notifyScrollEvent(b.win[0])
				}, this.setScrollLeft = function (d, c) {
					b.doc.translate.x = d;
					b.doc.translate.tx = -1 * d + "px";
					b.doc.css(f.trstyle, "translate3d(" + b.doc.translate.tx +
						"," + b.doc.translate.ty + ",0px)");
					c || b.notifyScrollEvent(b.win[0])
				}) : (this.setScrollTop = function (d, c) {
					b.doc.translate.y = d;
					b.doc.translate.ty = -1 * d + "px";
					b.doc.css(f.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")");
					c || b.notifyScrollEvent(b.win[0])
				}, this.setScrollLeft = function (d, c) {
					b.doc.translate.x = d;
					b.doc.translate.tx = -1 * d + "px";
					b.doc.css(f.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")");
					c || b.notifyScrollEvent(b.win[0])
				})
			} else this.getScrollTop = function () {
					return b.docscroll.scrollTop()
				},
				this.setScrollTop = function (d) {
					return b.docscroll.scrollTop(d)
				}, this.getScrollLeft = function () {
					return b.docscroll.scrollLeft()
				}, this.setScrollLeft = function (d) {
					return b.docscroll.scrollLeft(d)
				};
			this.getTarget = function (b) {
				return !b ? !1 : b.target ? b.target : b.srcElement ? b.srcElement : !1
			};
			this.hasParent = function (b, c) {
				if (!b) return !1;
				for (var g = b.target || b.srcElement || b || !1; g && g.id != c;) g = g.parentNode || !1;
				return !1 !== g
			};
			var u = {
				thin: 1,
				medium: 3,
				thick: 5
			};
			this.getOffset = function () {
				if (b.isfixed) return {
					top: parseFloat(b.win.css("top")),
					left: parseFloat(b.win.css("left"))
				};
				if (!b.viewport) return b.win.offset();
				var d = b.win.offset(),
					c = b.viewport.offset();
				return {
					top: d.top - c.top + b.viewport.scrollTop(),
					left: d.left - c.left + b.viewport.scrollLeft()
				}
			};
			this.updateScrollBar = function (d) {
				if (b.ishwscroll) b.rail.css({
					height: b.win.innerHeight()
				}), b.railh && b.railh.css({
					width: b.win.innerWidth()
				});
				else {
					var c = b.getOffset(),
						g = c.top,
						f = c.left,
						g = g + l(b.win, "border-top-width", !0);
					b.win.outerWidth();
					b.win.innerWidth();
					var f = f + (b.rail.align ? b.win.outerWidth() -
							l(b.win, "border-right-width") - b.rail.width : l(b.win, "border-left-width")),
						e = b.opt.railoffset;
					e && (e.top && (g += e.top), b.rail.align && e.left && (f += e.left));
					b.locked || b.rail.css({
						top: g,
						left: f,
						height: d ? d.h : b.win.innerHeight()
					});
					b.zoom && b.zoom.css({
						top: g + 1,
						left: 1 == b.rail.align ? f - 20 : f + b.rail.width + 4
					});
					b.railh && !b.locked && (g = c.top, f = c.left, d = b.railh.align ? g + l(b.win, "border-top-width", !0) + b.win.innerHeight() - b.railh.height : g + l(b.win, "border-top-width", !0), f += l(b.win, "border-left-width"), b.railh.css({
						top: d,
						left: f,
						width: b.railh.width
					}))
				}
			};
			this.doRailClick = function (d, c, g) {
				var f;
				b.locked || (b.cancelEvent(d), c ? (c = g ? b.doScrollLeft : b.doScrollTop, f = g ? (d.pageX - b.railh.offset().left - b.cursorwidth / 2) * b.scrollratio.x : (d.pageY - b.rail.offset().top - b.cursorheight / 2) * b.scrollratio.y, c(f)) : (c = g ? b.doScrollLeftBy : b.doScrollBy, f = g ? b.scroll.x : b.scroll.y, d = g ? d.pageX - b.railh.offset().left : d.pageY - b.rail.offset().top, g = g ? b.view.w : b.view.h, f >= d ? c(g) : c(-g)))
			};
			b.hasanimationframe = v;
			b.hascancelanimationframe = w;
			b.hasanimationframe ? b.hascancelanimationframe ||
				(w = function () {
					b.cancelAnimationFrame = !0
				}) : (v = function (b) {
					return setTimeout(b, 15 - Math.floor(+new Date / 1E3) % 16)
				}, w = clearInterval);
			this.init = function () {
				b.saved.css = [];
				if (f.isie7mobile) return !0;
				f.hasmstouch && b.css(b.ispage ? e("html") : b.win, {
					"-ms-touch-action": "none"
				});
				b.zindex = "auto";
				b.zindex = !b.ispage && "auto" == b.opt.zindex ? h() || "auto" : b.opt.zindex;
				!b.ispage && "auto" != b.zindex && b.zindex > x && (x = b.zindex);
				b.isie && (0 == b.zindex && "auto" == b.opt.zindex) && (b.zindex = "auto");
				if (!b.ispage || !f.cantouch && !f.isieold &&
					!f.isie9mobile) {
					var d = b.docscroll;
					b.ispage && (d = b.haswrapper ? b.win : b.doc);
					f.isie9mobile || b.css(d, {
						"overflow-y": "hidden"
					});
					b.ispage && f.isie7 && ("BODY" == b.doc[0].nodeName ? b.css(e("html"), {
						"overflow-y": "hidden"
					}) : "HTML" == b.doc[0].nodeName && b.css(e("body"), {
						"overflow-y": "hidden"
					}));
					f.isios && (!b.ispage && !b.haswrapper) && b.css(e("body"), {
						"-webkit-overflow-scrolling": "touch"
					});
					var c = e(document.createElement("div"));
					c.css({
						position: "relative",
						top: 0,
						"float": "right",
						width: b.opt.cursorwidth,
						height: "0px",
						"background-color": b.opt.cursorcolor,
						border: b.opt.cursorborder,
						"background-clip": "padding-box",
						"-webkit-border-radius": b.opt.cursorborderradius,
						"-moz-border-radius": b.opt.cursorborderradius,
						"border-radius": b.opt.cursorborderradius
					});
					c.hborder = parseFloat(c.outerHeight() - c.innerHeight());
					b.cursor = c;
					var g = e(document.createElement("div"));
					g.attr("id", b.id);
					g.addClass("nicescroll-rails");
					var l, k, n = ["left", "right"],
						G;
					for (G in n) k = n[G], (l = b.opt.railpadding[k]) ? g.css("padding-" + k, l + "px") : b.opt.railpadding[k] = 0;
					g.append(c);
					g.width = Math.max(parseFloat(b.opt.cursorwidth),
						c.outerWidth()) + b.opt.railpadding.left + b.opt.railpadding.right;
					g.css({
						width: g.width + "px",
						zIndex: b.zindex,
						background: b.opt.background,
						cursor: "default"
					});
					g.visibility = !0;
					g.scrollable = !0;
					g.align = "left" == b.opt.railalign ? 0 : 1;
					b.rail = g;
					c = b.rail.drag = !1;
					b.opt.boxzoom && (!b.ispage && !f.isieold) && (c = document.createElement("div"), b.bind(c, "click", b.doZoom), b.zoom = e(c), b.zoom.css({
							cursor: "pointer",
							"z-index": b.zindex,
							backgroundImage: "url(" + L + "zoomico.png)",
							height: 18,
							width: 18,
							backgroundPosition: "0px 0px"
						}), b.opt.dblclickzoom &&
						b.bind(b.win, "dblclick", b.doZoom), f.cantouch && b.opt.gesturezoom && (b.ongesturezoom = function (d) {
							1.5 < d.scale && b.doZoomIn(d);
							0.8 > d.scale && b.doZoomOut(d);
							return b.cancelEvent(d)
						}, b.bind(b.win, "gestureend", b.ongesturezoom)));
					b.railh = !1;
					if (b.opt.horizrailenabled) {
						b.css(d, {
							"overflow-x": "hidden"
						});
						c = e(document.createElement("div"));
						c.css({
							position: "relative",
							top: 0,
							height: b.opt.cursorwidth,
							width: "0px",
							"background-color": b.opt.cursorcolor,
							border: b.opt.cursorborder,
							"background-clip": "padding-box",
							"-webkit-border-radius": b.opt.cursorborderradius,
							"-moz-border-radius": b.opt.cursorborderradius,
							"border-radius": b.opt.cursorborderradius
						});
						c.wborder = parseFloat(c.outerWidth() - c.innerWidth());
						b.cursorh = c;
						var m = e(document.createElement("div"));
						m.attr("id", b.id + "-hr");
						m.addClass("nicescroll-rails");
						m.height = Math.max(parseFloat(b.opt.cursorwidth), c.outerHeight());
						m.css({
							height: m.height + "px",
							zIndex: b.zindex,
							background: b.opt.background
						});
						m.append(c);
						m.visibility = !0;
						m.scrollable = !0;
						m.align = "top" == b.opt.railvalign ? 0 : 1;
						b.railh = m;
						b.railh.drag = !1
					}
					b.ispage ?
						(g.css({
							position: "fixed",
							top: "0px",
							height: "100%"
						}), g.align ? g.css({
							right: "0px"
						}) : g.css({
							left: "0px"
						}), b.body.append(g), b.railh && (m.css({
							position: "fixed",
							left: "0px",
							width: "100%"
						}), m.align ? m.css({
							bottom: "0px"
						}) : m.css({
							top: "0px"
						}), b.body.append(m))) : (b.ishwscroll ? ("static" == b.win.css("position") && b.css(b.win, {
								position: "relative"
							}), d = "HTML" == b.win[0].nodeName ? b.body : b.win, b.zoom && (b.zoom.css({
								position: "absolute",
								top: 1,
								right: 0,
								"margin-right": g.width + 4
							}), d.append(b.zoom)), g.css({
								position: "absolute",
								top: 0
							}),
							g.align ? g.css({
								right: 0
							}) : g.css({
								left: 0
							}), d.append(g), m && (m.css({
								position: "absolute",
								left: 0,
								bottom: 0
							}), m.align ? m.css({
								bottom: 0
							}) : m.css({
								top: 0
							}), d.append(m))) : (b.isfixed = "fixed" == b.win.css("position"), d = b.isfixed ? "fixed" : "absolute", b.isfixed || (b.viewport = b.getViewport(b.win[0])), b.viewport && (b.body = b.viewport, !1 == /relative|absolute/.test(b.viewport.css("position")) && b.css(b.viewport, {
								position: "relative"
							})), g.css({
								position: d
							}), b.zoom && b.zoom.css({
								position: d
							}), b.updateScrollBar(), b.body.append(g), b.zoom &&
							b.body.append(b.zoom), b.railh && (m.css({
								position: d
							}), b.body.append(m))), f.isios && b.css(b.win, {
							"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
							"-webkit-touch-callout": "none"
						}), f.isie && b.opt.disableoutline && b.win.attr("hideFocus", "true"), f.iswebkit && b.opt.disableoutline && b.win.css({
							outline: "none"
						}));
					!1 === b.opt.autohidemode ? (b.autohidedom = !1, b.rail.css({
						opacity: b.opt.cursoropacitymax
					}), b.railh && b.railh.css({
						opacity: b.opt.cursoropacitymax
					})) : !0 === b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), f.isie8 &&
						(b.autohidedom = b.autohidedom.add(b.cursor)), b.railh && (b.autohidedom = b.autohidedom.add(b.railh)), b.railh && f.isie8 && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "scroll" == b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), b.railh && (b.autohidedom = b.autohidedom.add(b.railh))) : "cursor" == b.opt.autohidemode ? (b.autohidedom = e().add(b.cursor), b.railh && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "hidden" == b.opt.autohidemode && (b.autohidedom = !1, b.hide(), b.locked = !1);
					if (f.isie9mobile) b.scrollmom = new H(b), b.onmangotouch =
						function (d) {
							d = b.getScrollTop();
							var c = b.getScrollLeft();
							if (d == b.scrollmom.lastscrolly && c == b.scrollmom.lastscrollx) return !0;
							var g = d - b.mangotouch.sy,
								f = c - b.mangotouch.sx;
							if (0 != Math.round(Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)))) {
								var p = 0 > g ? -1 : 1,
									e = 0 > f ? -1 : 1,
									h = +new Date;
								b.mangotouch.lazy && clearTimeout(b.mangotouch.lazy);
								80 < h - b.mangotouch.tm || b.mangotouch.dry != p || b.mangotouch.drx != e ? (b.scrollmom.stop(), b.scrollmom.reset(c, d), b.mangotouch.sy = d, b.mangotouch.ly = d, b.mangotouch.sx = c, b.mangotouch.lx = c, b.mangotouch.dry =
									p, b.mangotouch.drx = e, b.mangotouch.tm = h) : (b.scrollmom.stop(), b.scrollmom.update(b.mangotouch.sx - f, b.mangotouch.sy - g), b.mangotouch.tm = h, g = Math.max(Math.abs(b.mangotouch.ly - d), Math.abs(b.mangotouch.lx - c)), b.mangotouch.ly = d, b.mangotouch.lx = c, 2 < g && (b.mangotouch.lazy = setTimeout(function () {
									b.mangotouch.lazy = !1;
									b.mangotouch.dry = 0;
									b.mangotouch.drx = 0;
									b.mangotouch.tm = 0;
									b.scrollmom.doMomentum(30)
								}, 100)))
							}
						}, g = b.getScrollTop(), m = b.getScrollLeft(), b.mangotouch = {
							sy: g,
							ly: g,
							dry: 0,
							sx: m,
							lx: m,
							drx: 0,
							lazy: !1,
							tm: 0
						}, b.bind(b.docscroll,
							"scroll", b.onmangotouch);
					else {
						if (f.cantouch || b.istouchcapable || b.opt.touchbehavior || f.hasmstouch) {
							b.scrollmom = new H(b);
							b.ontouchstart = function (d) {
								if (d.pointerType && 2 != d.pointerType) return !1;
								if (!b.locked) {
									if (f.hasmstouch)
										for (var c = d.target ? d.target : !1; c;) {
											var g = e(c).getNiceScroll();
											if (0 < g.length && g[0].me == b.me) break;
											if (0 < g.length) return !1;
											if ("DIV" == c.nodeName && c.id == b.id) break;
											c = c.parentNode ? c.parentNode : !1
										}
									b.cancelScroll();
									if ((c = b.getTarget(d)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return b.stopPropagation(d);
									!("clientX" in d) && "changedTouches" in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY);
									b.forcescreen && (g = d, d = {
										original: d.original ? d.original : d
									}, d.clientX = g.screenX, d.clientY = g.screenY);
									b.rail.drag = {
										x: d.clientX,
										y: d.clientY,
										sx: b.scroll.x,
										sy: b.scroll.y,
										st: b.getScrollTop(),
										sl: b.getScrollLeft(),
										pt: 2,
										dl: !1
									};
									if (b.ispage || !b.opt.directionlockdeadzone) b.rail.drag.dl = "f";
									else {
										var g = e(window).width(),
											p = e(window).height(),
											h = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
											l = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
											p = Math.max(0, l - p),
											g = Math.max(0, h - g);
										b.rail.drag.ck = !b.rail.scrollable && b.railh.scrollable ? 0 < p ? "v" : !1 : b.rail.scrollable && !b.railh.scrollable ? 0 < g ? "h" : !1 : !1;
										b.rail.drag.ck || (b.rail.drag.dl = "f")
									}
									b.opt.touchbehavior && (b.isiframe && f.isie) && (g = b.win.position(), b.rail.drag.x += g.left, b.rail.drag.y += g.top);
									b.hasmoving = !1;
									b.lastmouseup = !1;
									b.scrollmom.reset(d.clientX, d.clientY);
									if (!f.cantouch && !this.istouchcapable && !f.hasmstouch) {
										if (!c ||
											!/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !b.ispage && f.hasmousecapture && c.setCapture(), b.cancelEvent(d);
										/SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type")) && (pc = {
											tg: c,
											click: !1
										}, b.preventclick = pc)
									}
								}
							};
							b.ontouchend = function (d) {
								if (d.pointerType && 2 != d.pointerType) return !1;
								if (b.rail.drag && 2 == b.rail.drag.pt && (b.scrollmom.doMomentum(), b.rail.drag = !1, b.hasmoving && (b.hasmoving = !1, b.lastmouseup = !0, b.hideCursor(), f.hasmousecapture && document.releaseCapture(), !f.cantouch))) return b.cancelEvent(d)
							};
							var q = b.opt.touchbehavior &&
								b.isiframe && !f.hasmousecapture;
							b.ontouchmove = function (d, c) {
								if (d.pointerType && 2 != d.pointerType) return !1;
								if (b.rail.drag && 2 == b.rail.drag.pt) {
									if (f.cantouch && "undefined" == typeof d.original) return !0;
									b.hasmoving = !0;
									b.preventclick && !b.preventclick.click && (b.preventclick.click = b.preventclick.tg.onclick || !1, b.preventclick.tg.onclick = b.onpreventclick);
									d = e.extend({
										original: d
									}, d);
									"changedTouches" in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY);
									if (b.forcescreen) {
										var g = d;
										d = {
											original: d.original ?
												d.original : d
										};
										d.clientX = g.screenX;
										d.clientY = g.screenY
									}
									g = ofy = 0;
									if (q && !c) {
										var p = b.win.position(),
											g = -p.left;
										ofy = -p.top
									}
									var h = d.clientY + ofy,
										p = h - b.rail.drag.y,
										l = d.clientX + g,
										k = l - b.rail.drag.x,
										s = b.rail.drag.st - p;
									b.ishwscroll && b.opt.bouncescroll ? 0 > s ? s = Math.round(s / 2) : s > b.page.maxh && (s = b.page.maxh + Math.round((s - b.page.maxh) / 2)) : (0 > s && (h = s = 0), s > b.page.maxh && (s = b.page.maxh, h = 0));
									if (b.railh && b.railh.scrollable) {
										var m = b.rail.drag.sl - k;
										b.ishwscroll && b.opt.bouncescroll ? 0 > m ? m = Math.round(m / 2) : m > b.page.maxw && (m = b.page.maxw +
											Math.round((m - b.page.maxw) / 2)) : (0 > m && (l = m = 0), m > b.page.maxw && (m = b.page.maxw, l = 0))
									}
									g = !1;
									if (b.rail.drag.dl) g = !0, "v" == b.rail.drag.dl ? m = b.rail.drag.sl : "h" == b.rail.drag.dl && (s = b.rail.drag.st);
									else {
										var p = Math.abs(p),
											k = Math.abs(k),
											n = b.opt.directionlockdeadzone;
										if ("v" == b.rail.drag.ck) {
											if (p > n && k <= 0.3 * p) return b.rail.drag = !1, !0;
											k > n && (b.rail.drag.dl = "f", e("body").scrollTop(e("body").scrollTop()))
										} else if ("h" == b.rail.drag.ck) {
											if (k > n && p <= 0.3 * az) return b.rail.drag = !1, !0;
											p > n && (b.rail.drag.dl = "f", e("body").scrollLeft(e("body").scrollLeft()))
										}
									}
									b.synched("touchmove",
										function () {
											b.rail.drag && 2 == b.rail.drag.pt && (b.prepareTransition && b.prepareTransition(0), b.rail.scrollable && b.setScrollTop(s), b.scrollmom.update(l, h), b.railh && b.railh.scrollable ? (b.setScrollLeft(m), b.showCursor(s, m)) : b.showCursor(s), f.isie10 && document.selection.clear())
										});
									f.ischrome && b.istouchcapable && (g = !1);
									if (g) return b.cancelEvent(d)
								}
							}
						}
						b.onmousedown = function (d, c) {
							if (!(b.rail.drag && 1 != b.rail.drag.pt)) {
								if (b.locked) return b.cancelEvent(d);
								b.cancelScroll();
								b.rail.drag = {
									x: d.clientX,
									y: d.clientY,
									sx: b.scroll.x,
									sy: b.scroll.y,
									pt: 1,
									hr: !!c
								};
								var g = b.getTarget(d);
								!b.ispage && f.hasmousecapture && g.setCapture();
								b.isiframe && !f.hasmousecapture && (b.saved.csspointerevents = b.doc.css("pointer-events"), b.css(b.doc, {
									"pointer-events": "none"
								}));
								return b.cancelEvent(d)
							}
						};
						b.onmouseup = function (d) {
							if (b.rail.drag && (f.hasmousecapture && document.releaseCapture(), b.isiframe && !f.hasmousecapture && b.doc.css("pointer-events", b.saved.csspointerevents), 1 == b.rail.drag.pt)) return b.rail.drag = !1, b.cancelEvent(d)
						};
						b.onmousemove = function (d) {
							if (b.rail.drag &&
								1 == b.rail.drag.pt) {
								if (f.ischrome && 0 == d.which) return b.onmouseup(d);
								b.cursorfreezed = !0;
								if (b.rail.drag.hr) {
									b.scroll.x = b.rail.drag.sx + (d.clientX - b.rail.drag.x);
									0 > b.scroll.x && (b.scroll.x = 0);
									var c = b.scrollvaluemaxw;
									b.scroll.x > c && (b.scroll.x = c)
								} else b.scroll.y = b.rail.drag.sy + (d.clientY - b.rail.drag.y), 0 > b.scroll.y && (b.scroll.y = 0), c = b.scrollvaluemax, b.scroll.y > c && (b.scroll.y = c);
								b.synched("mousemove", function () {
									b.rail.drag && 1 == b.rail.drag.pt && (b.showCursor(), b.rail.drag.hr ? b.doScrollLeft(Math.round(b.scroll.x *
										b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), b.opt.cursordragspeed))
								});
								return b.cancelEvent(d)
							}
						};
						if (f.cantouch || b.opt.touchbehavior) b.onpreventclick = function (d) {
							if (b.preventclick) return b.preventclick.tg.onclick = b.preventclick.click, b.preventclick = !1, b.cancelEvent(d)
						}, b.bind(b.win, "mousedown", b.ontouchstart), b.onclick = f.isios ? !1 : function (d) {
							return b.lastmouseup ? (b.lastmouseup = !1, b.cancelEvent(d)) : !0
						}, b.opt.grabcursorenabled && f.cursorgrabvalue && (b.css(b.ispage ?
							b.doc : b.win, {
								cursor: f.cursorgrabvalue
							}), b.css(b.rail, {
							cursor: f.cursorgrabvalue
						}));
						else {
							var r = function (d) {
								if (b.selectiondrag) {
									if (d) {
										var c = b.win.outerHeight();
										d = d.pageY - b.selectiondrag.top;
										0 < d && d < c && (d = 0);
										d >= c && (d -= c);
										b.selectiondrag.df = d
									}
									0 != b.selectiondrag.df && (b.doScrollBy(2 * -Math.floor(b.selectiondrag.df / 6)), b.debounced("doselectionscroll", function () {
										r()
									}, 50))
								}
							};
							b.hasTextSelected = "getSelection" in document ? function () {
								return 0 < document.getSelection().rangeCount
							} : "selection" in document ? function () {
								return "None" !=
									document.selection.type
							} : function () {
								return !1
							};
							b.onselectionstart = function (d) {
								b.ispage || (b.selectiondrag = b.win.offset())
							};
							b.onselectionend = function (d) {
								b.selectiondrag = !1
							};
							b.onselectiondrag = function (d) {
								b.selectiondrag && b.hasTextSelected() && b.debounced("selectionscroll", function () {
									r(d)
								}, 250)
							}
						}
						f.hasmstouch && (b.css(b.rail, {
							"-ms-touch-action": "none"
						}), b.css(b.cursor, {
							"-ms-touch-action": "none"
						}), b.bind(b.win, "MSPointerDown", b.ontouchstart), b.bind(document, "MSPointerUp", b.ontouchend), b.bind(document, "MSPointerMove",
							b.ontouchmove), b.bind(b.cursor, "MSGestureHold", function (b) {
							b.preventDefault()
						}), b.bind(b.cursor, "contextmenu", function (b) {
							b.preventDefault()
						}));
						this.istouchcapable && (b.bind(b.win, "touchstart", b.ontouchstart), b.bind(document, "touchend", b.ontouchend), b.bind(document, "touchcancel", b.ontouchend), b.bind(document, "touchmove", b.ontouchmove));
						b.bind(b.cursor, "mousedown", b.onmousedown);
						b.bind(b.cursor, "mouseup", b.onmouseup);
						b.railh && (b.bind(b.cursorh, "mousedown", function (d) {
							b.onmousedown(d, !0)
						}), b.bind(b.cursorh,
							"mouseup",
							function (d) {
								if (!(b.rail.drag && 2 == b.rail.drag.pt)) return b.rail.drag = !1, b.hasmoving = !1, b.hideCursor(), f.hasmousecapture && document.releaseCapture(), b.cancelEvent(d)
							}));
						if (b.opt.cursordragontouch || !f.cantouch && !b.opt.touchbehavior) b.rail.css({
								cursor: "default"
							}), b.railh && b.railh.css({
								cursor: "default"
							}), b.jqbind(b.rail, "mouseenter", function () {
								b.canshowonmouseevent && b.showCursor();
								b.rail.active = !0
							}), b.jqbind(b.rail, "mouseleave", function () {
								b.rail.active = !1;
								b.rail.drag || b.hideCursor()
							}), b.opt.sensitiverail &&
							(b.bind(b.rail, "click", function (d) {
								b.doRailClick(d, !1, !1)
							}), b.bind(b.rail, "dblclick", function (d) {
								b.doRailClick(d, !0, !1)
							}), b.bind(b.cursor, "click", function (d) {
								b.cancelEvent(d)
							}), b.bind(b.cursor, "dblclick", function (d) {
								b.cancelEvent(d)
							})), b.railh && (b.jqbind(b.railh, "mouseenter", function () {
								b.canshowonmouseevent && b.showCursor();
								b.rail.active = !0
							}), b.jqbind(b.railh, "mouseleave", function () {
								b.rail.active = !1;
								b.rail.drag || b.hideCursor()
							}), b.opt.sensitiverail && (b.bind(b.railh, "click", function (d) {
								b.doRailClick(d,
									!1, !0)
							}), b.bind(b.railh, "dblclick", function (d) {
								b.doRailClick(d, !0, !0)
							}), b.bind(b.cursorh, "click", function (d) {
								b.cancelEvent(d)
							}), b.bind(b.cursorh, "dblclick", function (d) {
								b.cancelEvent(d)
							})));
						!f.cantouch && !b.opt.touchbehavior ? (b.bind(f.hasmousecapture ? b.win : document, "mouseup", b.onmouseup), b.bind(document, "mousemove", b.onmousemove), b.onclick && b.bind(document, "click", b.onclick), !b.ispage && b.opt.enablescrollonselection && (b.bind(b.win[0], "mousedown", b.onselectionstart), b.bind(document, "mouseup", b.onselectionend),
							b.bind(b.cursor, "mouseup", b.onselectionend), b.cursorh && b.bind(b.cursorh, "mouseup", b.onselectionend), b.bind(document, "mousemove", b.onselectiondrag)), b.zoom && (b.jqbind(b.zoom, "mouseenter", function () {
							b.canshowonmouseevent && b.showCursor();
							b.rail.active = !0
						}), b.jqbind(b.zoom, "mouseleave", function () {
							b.rail.active = !1;
							b.rail.drag || b.hideCursor()
						}))) : (b.bind(f.hasmousecapture ? b.win : document, "mouseup", b.ontouchend), b.bind(document, "mousemove", b.ontouchmove), b.onclick && b.bind(document, "click", b.onclick), b.opt.cursordragontouch &&
							(b.bind(b.cursor, "mousedown", b.onmousedown), b.bind(b.cursor, "mousemove", b.onmousemove), b.cursorh && b.bind(b.cursorh, "mousedown", b.onmousedown), b.cursorh && b.bind(b.cursorh, "mousemove", b.onmousemove)));
						b.opt.enablemousewheel && (b.isiframe || b.bind(f.isie && b.ispage ? document : b.docscroll, "mousewheel", b.onmousewheel), b.bind(b.rail, "mousewheel", b.onmousewheel), b.railh && b.bind(b.railh, "mousewheel", b.onmousewheelhr));
						!b.ispage && (!f.cantouch && !/HTML|BODY/.test(b.win[0].nodeName)) && (b.win.attr("tabindex") || b.win.attr({
								tabindex: J++
							}),
							b.jqbind(b.win, "focus", function (d) {
								y = b.getTarget(d).id || !0;
								b.hasfocus = !0;
								b.canshowonmouseevent && b.noticeCursor()
							}), b.jqbind(b.win, "blur", function (d) {
								y = !1;
								b.hasfocus = !1
							}), b.jqbind(b.win, "mouseenter", function (d) {
								D = b.getTarget(d).id || !0;
								b.hasmousefocus = !0;
								b.canshowonmouseevent && b.noticeCursor()
							}), b.jqbind(b.win, "mouseleave", function () {
								D = !1;
								b.hasmousefocus = !1
							}))
					}
					b.onkeypress = function (d) {
						if (b.locked && 0 == b.page.maxh) return !0;
						d = d ? d : window.e;
						var c = b.getTarget(d);
						if (c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) &&
							(!c.getAttribute("type") && !c.type || !/submit|button|cancel/i.tp)) return !0;
						if (b.hasfocus || b.hasmousefocus && !y || b.ispage && !y && !D) {
							c = d.keyCode;
							if (b.locked && 27 != c) return b.cancelEvent(d);
							var g = d.ctrlKey || !1,
								p = d.shiftKey || !1,
								f = !1;
							switch (c) {
								case 38:
								case 63233:
									b.doScrollBy(72);
									f = !0;
									break;
								case 40:
								case 63235:
									b.doScrollBy(-72);
									f = !0;
									break;
								case 37:
								case 63232:
									b.railh && (g ? b.doScrollLeft(0) : b.doScrollLeftBy(72), f = !0);
									break;
								case 39:
								case 63234:
									b.railh && (g ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72), f = !0);
									break;
								case 33:
								case 63276:
									b.doScrollBy(b.view.h);
									f = !0;
									break;
								case 34:
								case 63277:
									b.doScrollBy(-b.view.h);
									f = !0;
									break;
								case 36:
								case 63273:
									b.railh && g ? b.doScrollPos(0, 0) : b.doScrollTo(0);
									f = !0;
									break;
								case 35:
								case 63275:
									b.railh && g ? b.doScrollPos(b.page.maxw, b.page.maxh) : b.doScrollTo(b.page.maxh);
									f = !0;
									break;
								case 32:
									b.opt.spacebarenabled && (p ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h), f = !0);
									break;
								case 27:
									b.zoomactive && (b.doZoom(), f = !0)
							}
							if (f) return b.cancelEvent(d)
						}
					};
					b.opt.enablekeyboard && b.bind(document, f.isopera &&
						!f.isopera12 ? "keypress" : "keydown", b.onkeypress);
					b.bind(window, "resize", b.lazyResize);
					b.bind(window, "orientationchange", b.lazyResize);
					b.bind(window, "load", b.lazyResize);
					if (f.ischrome && !b.ispage && !b.haswrapper) {
						var t = b.win.attr("style"),
							g = parseFloat(b.win.css("width")) + 1;
						b.win.css("width", g);
						b.synched("chromefix", function () {
							b.win.attr("style", t)
						})
					}
					b.onAttributeChange = function (d) {
						b.lazyResize(250)
					};
					!b.ispage && !b.haswrapper && (!1 !== z ? (b.observer = new z(function (d) {
						d.forEach(b.onAttributeChange)
					}), b.observer.observe(b.win[0], {
						childList: !0,
						characterData: !1,
						attributes: !0,
						subtree: !1
					}), b.observerremover = new z(function (d) {
						d.forEach(function (d) {
							if (0 < d.removedNodes.length)
								for (var c in d.removedNodes)
									if (d.removedNodes[c] == b.win[0]) return b.remove()
						})
					}), b.observerremover.observe(b.win[0].parentNode, {
						childList: !0,
						characterData: !1,
						attributes: !1,
						subtree: !1
					})) : (b.bind(b.win, f.isie && !f.isie9 ? "propertychange" : "DOMAttrModified", b.onAttributeChange), f.isie9 && b.win[0].attachEvent("onpropertychange", b.onAttributeChange), b.bind(b.win, "DOMNodeRemoved",
						function (d) {
							d.target == b.win[0] && b.remove()
						})));
					!b.ispage && b.opt.boxzoom && b.bind(window, "resize", b.resizeZoom);
					b.istextarea && b.bind(b.win, "mouseup", b.lazyResize);
					b.checkrtlmode = !0;
					b.lazyResize(30)
				}
				if ("IFRAME" == this.doc[0].nodeName) {
					var I = function (d) {
						b.iframexd = !1;
						try {
							var c = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
						} catch (g) {
							b.iframexd = !0, c = !1
						}
						if (b.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
						b.forcescreen = !0;
						b.isiframe &&
							(b.iframe = {
								doc: e(c),
								html: b.doc.contents().find("html")[0],
								body: b.doc.contents().find("body")[0]
							}, b.getContentSize = function () {
								return {
									w: Math.max(b.iframe.html.scrollWidth, b.iframe.body.scrollWidth),
									h: Math.max(b.iframe.html.scrollHeight, b.iframe.body.scrollHeight)
								}
							}, b.docscroll = e(b.iframe.body));
						!f.isios && (b.opt.iframeautoresize && !b.isiframe) && (b.win.scrollTop(0), b.doc.height(""), d = Math.max(c.getElementsByTagName("html")[0].scrollHeight, c.body.scrollHeight), b.doc.height(d));
						b.lazyResize(30);
						f.isie7 &&
							b.css(e(b.iframe.html), {
								"overflow-y": "hidden"
							});
						b.css(e(b.iframe.body), {
							"overflow-y": "hidden"
						});
						"contentWindow" in this ? b.bind(this.contentWindow, "scroll", b.onscroll) : b.bind(c, "scroll", b.onscroll);
						b.opt.enablemousewheel && b.bind(c, "mousewheel", b.onmousewheel);
						b.opt.enablekeyboard && b.bind(c, f.isopera ? "keypress" : "keydown", b.onkeypress);
						if (f.cantouch || b.opt.touchbehavior) b.bind(c, "mousedown", b.onmousedown), b.bind(c, "mousemove", function (d) {
								b.onmousemove(d, !0)
							}), b.opt.grabcursorenabled && f.cursorgrabvalue &&
							b.css(e(c.body), {
								cursor: f.cursorgrabvalue
							});
						b.bind(c, "mouseup", b.onmouseup);
						b.zoom && (b.opt.dblclickzoom && b.bind(c, "dblclick", b.doZoom), b.ongesturezoom && b.bind(c, "gestureend", b.ongesturezoom))
					};
					this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
						I.call(b.doc[0], !1)
					}, 500);
					b.bind(this.doc, "load", I)
				}
			};
			this.showCursor = function (d, c) {
				b.cursortimeout && (clearTimeout(b.cursortimeout), b.cursortimeout = 0);
				if (b.rail) {
					b.autohidedom && (b.autohidedom.stop().css({
							opacity: b.opt.cursoropacitymax
						}),
						b.cursoractive = !0);
					if (!b.rail.drag || 1 != b.rail.drag.pt) "undefined" != typeof d && !1 !== d && (b.scroll.y = Math.round(1 * d / b.scrollratio.y)), "undefined" != typeof c && (b.scroll.x = Math.round(1 * c / b.scrollratio.x));
					b.cursor.css({
						height: b.cursorheight,
						top: b.scroll.y
					});
					b.cursorh && (!b.rail.align && b.rail.visibility ? b.cursorh.css({
						width: b.cursorwidth,
						left: b.scroll.x + b.rail.width
					}) : b.cursorh.css({
						width: b.cursorwidth,
						left: b.scroll.x
					}), b.cursoractive = !0);
					b.zoom && b.zoom.stop().css({
						opacity: b.opt.cursoropacitymax
					})
				}
			};
			this.hideCursor =
				function (d) {
					!b.cursortimeout && (b.rail && b.autohidedom) && (b.cursortimeout = setTimeout(function () {
						if (!b.rail.active || !b.showonmouseevent) b.autohidedom.stop().animate({
							opacity: b.opt.cursoropacitymin
						}), b.zoom && b.zoom.stop().animate({
							opacity: b.opt.cursoropacitymin
						}), b.cursoractive = !1;
						b.cursortimeout = 0
					}, d || b.opt.hidecursordelay))
				};
			this.noticeCursor = function (d, c, g) {
				b.showCursor(c, g);
				b.rail.active || b.hideCursor(d)
			};
			this.getContentSize = b.ispage ? function () {
				return {
					w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
					h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
				}
			} : b.haswrapper ? function () {
				return {
					w: b.doc.outerWidth() + parseInt(b.win.css("paddingLeft")) + parseInt(b.win.css("paddingRight")),
					h: b.doc.outerHeight() + parseInt(b.win.css("paddingTop")) + parseInt(b.win.css("paddingBottom"))
				}
			} : function () {
				return {
					w: b.docscroll[0].scrollWidth,
					h: b.docscroll[0].scrollHeight
				}
			};
			this.onResize = function (d, c) {
				if (!b.win) return !1;
				if (!b.haswrapper && !b.ispage) {
					if ("none" == b.win.css("display")) return b.visibility &&
						b.hideRail().hideRailHr(), !1;
					!b.hidden && !b.visibility && b.showRail().showRailHr()
				}
				var g = b.page.maxh,
					f = b.page.maxw,
					e = b.view.w;
				b.view = {
					w: b.ispage ? b.win.width() : parseInt(b.win[0].clientWidth),
					h: b.ispage ? b.win.height() : parseInt(b.win[0].clientHeight)
				};
				b.page = c ? c : b.getContentSize();
				b.page.maxh = Math.max(0, b.page.h - b.view.h);
				b.page.maxw = Math.max(0, b.page.w - b.view.w);
				if (b.page.maxh == g && b.page.maxw == f && b.view.w == e) {
					if (b.ispage) return b;
					g = b.win.offset();
					if (b.lastposition && (f = b.lastposition, f.top == g.top && f.left ==
							g.left)) return b;
					b.lastposition = g
				}
				0 == b.page.maxh ? (b.hideRail(), b.scrollvaluemax = 0, b.scroll.y = 0, b.scrollratio.y = 0, b.cursorheight = 0, b.setScrollTop(0), b.rail.scrollable = !1) : b.rail.scrollable = !0;
				0 == b.page.maxw ? (b.hideRailHr(), b.scrollvaluemaxw = 0, b.scroll.x = 0, b.scrollratio.x = 0, b.cursorwidth = 0, b.setScrollLeft(0), b.railh.scrollable = !1) : b.railh.scrollable = !0;
				b.locked = 0 == b.page.maxh && 0 == b.page.maxw;
				if (b.locked) return b.ispage || b.updateScrollBar(b.view), !1;
				!b.hidden && !b.visibility ? b.showRail().showRailHr() :
					!b.hidden && !b.railh.visibility && b.showRailHr();
				b.istextarea && (b.win.css("resize") && "none" != b.win.css("resize")) && (b.view.h -= 20);
				b.cursorheight = Math.min(b.view.h, Math.round(b.view.h * (b.view.h / b.page.h)));
				b.cursorheight = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorheight);
				b.cursorwidth = Math.min(b.view.w, Math.round(b.view.w * (b.view.w / b.page.w)));
				b.cursorwidth = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorwidth);
				b.scrollvaluemax =
					b.view.h - b.cursorheight - b.cursor.hborder;
				b.railh && (b.railh.width = 0 < b.page.maxh ? b.view.w - b.rail.width : b.view.w, b.scrollvaluemaxw = b.railh.width - b.cursorwidth - b.cursorh.wborder);
				b.checkrtlmode && b.railh && (b.checkrtlmode = !1, b.opt.rtlmode && 0 == b.scroll.x && b.setScrollLeft(b.page.maxw));
				b.ispage || b.updateScrollBar(b.view);
				b.scrollratio = {
					x: b.page.maxw / b.scrollvaluemaxw,
					y: b.page.maxh / b.scrollvaluemax
				};
				b.getScrollTop() > b.page.maxh ? b.doScrollTop(b.page.maxh) : (b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)),
					b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)), b.cursoractive && b.noticeCursor());
				b.scroll.y && 0 == b.getScrollTop() && b.doScrollTo(Math.floor(b.scroll.y * b.scrollratio.y));
				return b
			};
			this.resize = b.onResize;
			this.lazyResize = function (d) {
				d = isNaN(d) ? 30 : d;
				b.delayed("resize", b.resize, d);
				return b
			};
			this._bind = function (d, c, g, f) {
				b.events.push({
					e: d,
					n: c,
					f: g,
					b: f,
					q: !1
				});
				d.addEventListener ? d.addEventListener(c, g, f || !1) : d.attachEvent ? d.attachEvent("on" + c, g) : d["on" + c] = g
			};
			this.jqbind = function (d, c, g) {
				b.events.push({
					e: d,
					n: c,
					f: g,
					q: !0
				});
				e(d).bind(c, g)
			};
			this.bind = function (d, c, g, e) {
				var h = "jquery" in d ? d[0] : d;
				"mousewheel" == c ? "onwheel" in b.win ? b._bind(h, "wheel", g, e || !1) : (d = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll", n(h, d, g, e || !1), "DOMMouseScroll" == d && n(h, "MozMousePixelScroll", g, e || !1)) : h.addEventListener ? (f.cantouch && /mouseup|mousedown|mousemove/.test(c) && b._bind(h, "mousedown" == c ? "touchstart" : "mouseup" == c ? "touchend" : "touchmove", function (b) {
					if (b.touches) {
						if (2 > b.touches.length) {
							var d = b.touches.length ?
								b.touches[0] : b;
							d.original = b;
							g.call(this, d)
						}
					} else b.changedTouches && (d = b.changedTouches[0], d.original = b, g.call(this, d))
				}, e || !1), b._bind(h, c, g, e || !1), f.cantouch && "mouseup" == c && b._bind(h, "touchcancel", g, e || !1)) : b._bind(h, c, function (d) {
					if ((d = d || window.event || !1) && d.srcElement) d.target = d.srcElement;
					"pageY" in d || (d.pageX = d.clientX + document.documentElement.scrollLeft, d.pageY = d.clientY + document.documentElement.scrollTop);
					return !1 === g.call(h, d) || !1 === e ? b.cancelEvent(d) : !0
				})
			};
			this._unbind = function (b, c, g, f) {
				b.removeEventListener ?
					b.removeEventListener(c, g, f) : b.detachEvent ? b.detachEvent("on" + c, g) : b["on" + c] = !1
			};
			this.unbindAll = function () {
				for (var d = 0; d < b.events.length; d++) {
					var c = b.events[d];
					c.q ? c.e.unbind(c.n, c.f) : b._unbind(c.e, c.n, c.f, c.b)
				}
			};
			this.cancelEvent = function (b) {
				b = b.original ? b.original : b ? b : window.event || !1;
				if (!b) return !1;
				b.preventDefault && b.preventDefault();
				b.stopPropagation && b.stopPropagation();
				b.preventManipulation && b.preventManipulation();
				b.cancelBubble = !0;
				b.cancel = !0;
				return b.returnValue = !1
			};
			this.stopPropagation =
				function (b) {
					b = b.original ? b.original : b ? b : window.event || !1;
					if (!b) return !1;
					if (b.stopPropagation) return b.stopPropagation();
					b.cancelBubble && (b.cancelBubble = !0);
					return !1
				};
			this.showRail = function () {
				if (0 != b.page.maxh && (b.ispage || "none" != b.win.css("display"))) b.visibility = !0, b.rail.visibility = !0, b.rail.css("display", "block");
				return b
			};
			this.showRailHr = function () {
				if (!b.railh) return b;
				if (0 != b.page.maxw && (b.ispage || "none" != b.win.css("display"))) b.railh.visibility = !0, b.railh.css("display", "block");
				return b
			};
			this.hideRail =
				function () {
					b.visibility = !1;
					b.rail.visibility = !1;
					b.rail.css("display", "none");
					return b
				};
			this.hideRailHr = function () {
				if (!b.railh) return b;
				b.railh.visibility = !1;
				b.railh.css("display", "none");
				return b
			};
			this.show = function () {
				b.hidden = !1;
				b.locked = !1;
				return b.showRail().showRailHr()
			};
			this.hide = function () {
				b.hidden = !0;
				b.locked = !0;
				return b.hideRail().hideRailHr()
			};
			this.toggle = function () {
				return b.hidden ? b.show() : b.hide()
			};
			this.remove = function () {
				b.stop();
				b.cursortimeout && clearTimeout(b.cursortimeout);
				b.doZoomOut();
				b.unbindAll();
				!1 !== b.observer && b.observer.disconnect();
				!1 !== b.observerremover && b.observerremover.disconnect();
				b.events = [];
				b.cursor && (b.cursor.remove(), b.cursor = null);
				b.cursorh && (b.cursorh.remove(), b.cursorh = null);
				b.rail && (b.rail.remove(), b.rail = null);
				b.railh && (b.railh.remove(), b.railh = null);
				b.zoom && (b.zoom.remove(), b.zoom = null);
				for (var d = 0; d < b.saved.css.length; d++) {
					var c = b.saved.css[d];
					c[0].css(c[1], "undefined" == typeof c[2] ? "" : c[2])
				}
				b.saved = !1;
				b.me.data("__nicescroll", "");
				b.me = null;
				b.doc = null;
				b.docscroll =
					null;
				b.win = null;
				return b
			};
			this.scrollstart = function (d) {
				this.onscrollstart = d;
				return b
			};
			this.scrollend = function (d) {
				this.onscrollend = d;
				return b
			};
			this.scrollcancel = function (d) {
				this.onscrollcancel = d;
				return b
			};
			this.zoomin = function (d) {
				this.onzoomin = d;
				return b
			};
			this.zoomout = function (d) {
				this.onzoomout = d;
				return b
			};
			this.isScrollable = function (b) {
				b = b.target ? b.target : b;
				if ("OPTION" == b.nodeName) return !0;
				for (; b && 1 == b.nodeType && !/BODY|HTML/.test(b.nodeName);) {
					var c = e(b),
						c = c.css("overflowY") || c.css("overflowX") || c.css("overflow") ||
						"";
					if (/scroll|auto/.test(c)) return b.clientHeight != b.scrollHeight;
					b = b.parentNode ? b.parentNode : !1
				}
				return !1
			};
			this.getViewport = function (b) {
				for (b = b && b.parentNode ? b.parentNode : !1; b && 1 == b.nodeType && !/BODY|HTML/.test(b.nodeName);) {
					var c = e(b),
						g = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
					if (/scroll|auto/.test(g) && b.clientHeight != b.scrollHeight || 0 < c.getNiceScroll().length) return c;
					b = b.parentNode ? b.parentNode : !1
				}
				return !1
			};
			this.onmousewheel = function (d) {
				if (b.locked) return !0;
				if (b.rail.drag) return b.cancelEvent(d);
				if (!b.rail.scrollable) return b.railh && b.railh.scrollable ? b.onmousewheelhr(d) : !0;
				var c = +new Date,
					g = !1;
				b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d), g = !0);
				b.checkarea = c;
				if (b.nativescrollingarea) return !0;
				if (d = t(d, !1, g)) b.checkarea = 0;
				return d
			};
			this.onmousewheelhr = function (d) {
				if (b.locked || !b.railh.scrollable) return !0;
				if (b.rail.drag) return b.cancelEvent(d);
				var c = +new Date,
					g = !1;
				b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d),
					g = !0);
				b.checkarea = c;
				return b.nativescrollingarea ? !0 : b.locked ? b.cancelEvent(d) : t(d, !0, g)
			};
			this.stop = function () {
				b.cancelScroll();
				b.scrollmon && b.scrollmon.stop();
				b.cursorfreezed = !1;
				b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));
				b.noticeCursor();
				return b
			};
			this.getTransitionSpeed = function (c) {
				var f = Math.round(10 * b.opt.scrollspeed);
				c = Math.min(f, Math.round(c / 20 * b.opt.scrollspeed));
				return 20 < c ? c : 0
			};
			b.opt.smoothscroll ? b.ishwscroll && f.hastransition && b.opt.usetransition ? (this.prepareTransition = function (c,
				e) {
				var g = e ? 20 < c ? c : 0 : b.getTransitionSpeed(c),
					h = g ? f.prefixstyle + "transform " + g + "ms ease-out" : "";
				if (!b.lasttransitionstyle || b.lasttransitionstyle != h) b.lasttransitionstyle = h, b.doc.css(f.transitionstyle, h);
				return g
			}, this.doScrollLeft = function (c, f) {
				var g = b.scrollrunning ? b.newscrolly : b.getScrollTop();
				b.doScrollPos(c, g, f)
			}, this.doScrollTop = function (c, f) {
				var g = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
				b.doScrollPos(g, c, f)
			}, this.doScrollPos = function (c, e, g) {
				var h = b.getScrollTop(),
					l = b.getScrollLeft();
				(0 >
					(b.newscrolly - h) * (e - h) || 0 > (b.newscrollx - l) * (c - l)) && b.cancelScroll();
				!1 == b.opt.bouncescroll && (0 > e ? e = 0 : e > b.page.maxh && (e = b.page.maxh), 0 > c ? c = 0 : c > b.page.maxw && (c = b.page.maxw));
				if (b.scrollrunning && c == b.newscrollx && e == b.newscrolly) return !1;
				b.newscrolly = e;
				b.newscrollx = c;
				b.newscrollspeed = g || !1;
				if (b.timer) return !1;
				b.timer = setTimeout(function () {
					var g = b.getScrollTop(),
						h = b.getScrollLeft(),
						l, k;
					l = c - h;
					k = e - g;
					l = Math.round(Math.sqrt(Math.pow(l, 2) + Math.pow(k, 2)));
					l = b.newscrollspeed && 1 < b.newscrollspeed ? b.newscrollspeed :
						b.getTransitionSpeed(l);
					b.newscrollspeed && 1 >= b.newscrollspeed && (l *= b.newscrollspeed);
					b.prepareTransition(l, !0);
					b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
					0 < l && (!b.scrollrunning && b.onscrollstart && b.onscrollstart.call(b, {
						type: "scrollstart",
						current: {
							x: h,
							y: g
						},
						request: {
							x: c,
							y: e
						},
						end: {
							x: b.newscrollx,
							y: b.newscrolly
						},
						speed: l
					}), f.transitionend ? b.scrollendtrapped || (b.scrollendtrapped = !0, b.bind(b.doc, f.transitionend, b.onScrollEnd, !1)) : (b.scrollendtrapped && clearTimeout(b.scrollendtrapped),
						b.scrollendtrapped = setTimeout(b.onScrollEnd, l)), b.timerscroll = {
						bz: new BezierClass(g, b.newscrolly, l, 0, 0, 0.58, 1),
						bh: new BezierClass(h, b.newscrollx, l, 0, 0, 0.58, 1)
					}, b.cursorfreezed || (b.timerscroll.tm = setInterval(function () {
						b.showCursor(b.getScrollTop(), b.getScrollLeft())
					}, 60)));
					b.synched("doScroll-set", function () {
						b.timer = 0;
						b.scrollendtrapped && (b.scrollrunning = !0);
						b.setScrollTop(b.newscrolly);
						b.setScrollLeft(b.newscrollx);
						if (!b.scrollendtrapped) b.onScrollEnd()
					})
				}, 50)
			}, this.cancelScroll = function () {
				if (!b.scrollendtrapped) return !0;
				var c = b.getScrollTop(),
					e = b.getScrollLeft();
				b.scrollrunning = !1;
				f.transitionend || clearTimeout(f.transitionend);
				b.scrollendtrapped = !1;
				b._unbind(b.doc, f.transitionend, b.onScrollEnd);
				b.prepareTransition(0);
				b.setScrollTop(c);
				b.railh && b.setScrollLeft(e);
				b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
				b.timerscroll = !1;
				b.cursorfreezed = !1;
				b.showCursor(c, e);
				return b
			}, this.onScrollEnd = function () {
				b.scrollendtrapped && b._unbind(b.doc, f.transitionend, b.onScrollEnd);
				b.scrollendtrapped = !1;
				b.prepareTransition(0);
				b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
				b.timerscroll = !1;
				var c = b.getScrollTop(),
					e = b.getScrollLeft();
				b.setScrollTop(c);
				b.railh && b.setScrollLeft(e);
				b.noticeCursor(!1, c, e);
				b.cursorfreezed = !1;
				0 > c ? c = 0 : c > b.page.maxh && (c = b.page.maxh);
				0 > e ? e = 0 : e > b.page.maxw && (e = b.page.maxw);
				if (c != b.newscrolly || e != b.newscrollx) return b.doScrollPos(e, c, b.opt.snapbackspeed);
				b.onscrollend && b.scrollrunning && b.onscrollend.call(b, {
					type: "scrollend",
					current: {
						x: e,
						y: c
					},
					end: {
						x: b.newscrollx,
						y: b.newscrolly
					}
				});
				b.scrollrunning = !1
			}) : (this.doScrollLeft = function (c, f) {
				var g = b.scrollrunning ? b.newscrolly : b.getScrollTop();
				b.doScrollPos(c, g, f)
			}, this.doScrollTop = function (c, f) {
				var g = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
				b.doScrollPos(g, c, f)
			}, this.doScrollPos = function (c, f, g) {
				function e() {
					if (b.cancelAnimationFrame) return !0;
					b.scrollrunning = !0;
					if (r = 1 - r) return b.timer = v(e) || 1;
					var c = 0,
						d = sy = b.getScrollTop();
					if (b.dst.ay) {
						var d = b.bzscroll ? b.dst.py + b.bzscroll.getNow() * b.dst.ay : b.newscrolly,
							g = d - sy;
						if (0 > g && d < b.newscrolly || 0 < g && d > b.newscrolly) d =
							b.newscrolly;
						b.setScrollTop(d);
						d == b.newscrolly && (c = 1)
					} else c = 1;
					var f = sx = b.getScrollLeft();
					if (b.dst.ax) {
						f = b.bzscroll ? b.dst.px + b.bzscroll.getNow() * b.dst.ax : b.newscrollx;
						g = f - sx;
						if (0 > g && f < b.newscrollx || 0 < g && f > b.newscrollx) f = b.newscrollx;
						b.setScrollLeft(f);
						f == b.newscrollx && (c += 1)
					} else c += 1;
					2 == c ? (b.timer = 0, b.cursorfreezed = !1, b.bzscroll = !1, b.scrollrunning = !1, 0 > d ? d = 0 : d > b.page.maxh && (d = b.page.maxh), 0 > f ? f = 0 : f > b.page.maxw && (f = b.page.maxw), f != b.newscrollx || d != b.newscrolly ? b.doScrollPos(f, d) : b.onscrollend && b.onscrollend.call(b, {
						type: "scrollend",
						current: {
							x: sx,
							y: sy
						},
						end: {
							x: b.newscrollx,
							y: b.newscrolly
						}
					})) : b.timer = v(e) || 1
				}
				f = "undefined" == typeof f || !1 === f ? b.getScrollTop(!0) : f;
				if (b.timer && b.newscrolly == f && b.newscrollx == c) return !0;
				b.timer && w(b.timer);
				b.timer = 0;
				var h = b.getScrollTop(),
					l = b.getScrollLeft();
				(0 > (b.newscrolly - h) * (f - h) || 0 > (b.newscrollx - l) * (c - l)) && b.cancelScroll();
				b.newscrolly = f;
				b.newscrollx = c;
				if (!b.bouncescroll || !b.rail.visibility) 0 > b.newscrolly ? b.newscrolly = 0 : b.newscrolly > b.page.maxh && (b.newscrolly = b.page.maxh);
				if (!b.bouncescroll ||
					!b.railh.visibility) 0 > b.newscrollx ? b.newscrollx = 0 : b.newscrollx > b.page.maxw && (b.newscrollx = b.page.maxw);
				b.dst = {};
				b.dst.x = c - l;
				b.dst.y = f - h;
				b.dst.px = l;
				b.dst.py = h;
				var k = Math.round(Math.sqrt(Math.pow(b.dst.x, 2) + Math.pow(b.dst.y, 2)));
				b.dst.ax = b.dst.x / k;
				b.dst.ay = b.dst.y / k;
				var n = 0,
					q = k;
				0 == b.dst.x ? (n = h, q = f, b.dst.ay = 1, b.dst.py = 0) : 0 == b.dst.y && (n = l, q = c, b.dst.ax = 1, b.dst.px = 0);
				k = b.getTransitionSpeed(k);
				g && 1 >= g && (k *= g);
				b.bzscroll = 0 < k ? b.bzscroll ? b.bzscroll.update(q, k) : new BezierClass(n, q, k, 0, 1, 0, 1) : !1;
				if (!b.timer) {
					(h ==
						b.page.maxh && f >= b.page.maxh || l == b.page.maxw && c >= b.page.maxw) && b.checkContentSize();
					var r = 1;
					b.cancelAnimationFrame = !1;
					b.timer = 1;
					b.onscrollstart && !b.scrollrunning && b.onscrollstart.call(b, {
						type: "scrollstart",
						current: {
							x: l,
							y: h
						},
						request: {
							x: c,
							y: f
						},
						end: {
							x: b.newscrollx,
							y: b.newscrolly
						},
						speed: k
					});
					e();
					(h == b.page.maxh && f >= h || l == b.page.maxw && c >= l) && b.checkContentSize();
					b.noticeCursor()
				}
			}, this.cancelScroll = function () {
				b.timer && w(b.timer);
				b.timer = 0;
				b.bzscroll = !1;
				b.scrollrunning = !1;
				return b
			}) : (this.doScrollLeft = function (c,
				f) {
				var g = b.getScrollTop();
				b.doScrollPos(c, g, f)
			}, this.doScrollTop = function (c, f) {
				var g = b.getScrollLeft();
				b.doScrollPos(g, c, f)
			}, this.doScrollPos = function (c, f, g) {
				var e = c > b.page.maxw ? b.page.maxw : c;
				0 > e && (e = 0);
				var h = f > b.page.maxh ? b.page.maxh : f;
				0 > h && (h = 0);
				b.synched("scroll", function () {
					b.setScrollTop(h);
					b.setScrollLeft(e)
				})
			}, this.cancelScroll = function () {});
			this.doScrollBy = function (c, f) {
				var g = 0,
					g = f ? Math.floor((b.scroll.y - c) * b.scrollratio.y) : (b.timer ? b.newscrolly : b.getScrollTop(!0)) - c;
				if (b.bouncescroll) {
					var e =
						Math.round(b.view.h / 2);
					g < -e ? g = -e : g > b.page.maxh + e && (g = b.page.maxh + e)
				}
				b.cursorfreezed = !1;
				py = b.getScrollTop(!0);
				if (0 > g && 0 >= py) return b.noticeCursor();
				if (g > b.page.maxh && py >= b.page.maxh) return b.checkContentSize(), b.noticeCursor();
				b.doScrollTop(g)
			};
			this.doScrollLeftBy = function (c, f) {
				var g = 0,
					g = f ? Math.floor((b.scroll.x - c) * b.scrollratio.x) : (b.timer ? b.newscrollx : b.getScrollLeft(!0)) - c;
				if (b.bouncescroll) {
					var e = Math.round(b.view.w / 2);
					g < -e ? g = -e : g > b.page.maxw + e && (g = b.page.maxw + e)
				}
				b.cursorfreezed = !1;
				px = b.getScrollLeft(!0);
				if (0 > g && 0 >= px || g > b.page.maxw && px >= b.page.maxw) return b.noticeCursor();
				b.doScrollLeft(g)
			};
			this.doScrollTo = function (c, f) {
				f && Math.round(c * b.scrollratio.y);
				b.cursorfreezed = !1;
				b.doScrollTop(c)
			};
			this.checkContentSize = function () {
				var c = b.getContentSize();
				(c.h != b.page.h || c.w != b.page.w) && b.resize(!1, c)
			};
			b.onscroll = function (c) {
				b.rail.drag || b.cursorfreezed || b.synched("scroll", function () {
					b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));
					b.railh && (b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)));
					b.noticeCursor()
				})
			};
			b.bind(b.docscroll, "scroll", b.onscroll);
			this.doZoomIn = function (c) {
				if (!b.zoomactive) {
					b.zoomactive = !0;
					b.zoomrestore = {
						style: {}
					};
					var h = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
						g = b.win[0].style,
						l;
					for (l in h) {
						var k = h[l];
						b.zoomrestore.style[k] = "undefined" != typeof g[k] ? g[k] : ""
					}
					b.zoomrestore.style.width = b.win.css("width");
					b.zoomrestore.style.height = b.win.css("height");
					b.zoomrestore.padding = {
						w: b.win.outerWidth() - b.win.width(),
						h: b.win.outerHeight() -
							b.win.height()
					};
					f.isios4 && (b.zoomrestore.scrollTop = e(window).scrollTop(), e(window).scrollTop(0));
					b.win.css({
						position: f.isios4 ? "absolute" : "fixed",
						top: 0,
						left: 0,
						"z-index": x + 100,
						margin: "0px"
					});
					h = b.win.css("backgroundColor");
					("" == h || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h)) && b.win.css("backgroundColor", "#fff");
					b.rail.css({
						"z-index": x + 101
					});
					b.zoom.css({
						"z-index": x + 102
					});
					b.zoom.css("backgroundPosition", "0px -18px");
					b.resizeZoom();
					b.onzoomin && b.onzoomin.call(b);
					return b.cancelEvent(c)
				}
			};
			this.doZoomOut =
				function (c) {
					if (b.zoomactive) return b.zoomactive = !1, b.win.css("margin", ""), b.win.css(b.zoomrestore.style), f.isios4 && e(window).scrollTop(b.zoomrestore.scrollTop), b.rail.css({
						"z-index": b.zindex
					}), b.zoom.css({
						"z-index": b.zindex
					}), b.zoomrestore = !1, b.zoom.css("backgroundPosition", "0px 0px"), b.onResize(), b.onzoomout && b.onzoomout.call(b), b.cancelEvent(c)
				};
			this.doZoom = function (c) {
				return b.zoomactive ? b.doZoomOut(c) : b.doZoomIn(c)
			};
			this.resizeZoom = function () {
				if (b.zoomactive) {
					var c = b.getScrollTop();
					b.win.css({
						width: e(window).width() -
							b.zoomrestore.padding.w + "px",
						height: e(window).height() - b.zoomrestore.padding.h + "px"
					});
					b.onResize();
					b.setScrollTop(Math.min(b.page.maxh, c))
				}
			};
			this.init();
			e.nicescroll.push(this)
		},
		H = function (e) {
			var c = this;
			this.nc = e;
			this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
			this.snapy = this.snapx = !1;
			this.demuly = this.demulx = 0;
			this.lastscrolly = this.lastscrollx = -1;
			this.timer = this.chky = this.chkx = 0;
			this.time = function () {
				return +new Date
			};
			this.reset = function (e, l) {
				c.stop();
				var k = c.time();
				c.steptime =
					0;
				c.lasttime = k;
				c.speedx = 0;
				c.speedy = 0;
				c.lastx = e;
				c.lasty = l;
				c.lastscrollx = -1;
				c.lastscrolly = -1
			};
			this.update = function (e, l) {
				var k = c.time();
				c.steptime = k - c.lasttime;
				c.lasttime = k;
				var k = l - c.lasty,
					t = e - c.lastx,
					b = c.nc.getScrollTop(),
					q = c.nc.getScrollLeft(),
					b = b + k,
					q = q + t;
				c.snapx = 0 > q || q > c.nc.page.maxw;
				c.snapy = 0 > b || b > c.nc.page.maxh;
				c.speedx = t;
				c.speedy = k;
				c.lastx = e;
				c.lasty = l
			};
			this.stop = function () {
				c.nc.unsynched("domomentum2d");
				c.timer && clearTimeout(c.timer);
				c.timer = 0;
				c.lastscrollx = -1;
				c.lastscrolly = -1
			};
			this.doSnapy = function (e,
				l) {
				var k = !1;
				0 > l ? (l = 0, k = !0) : l > c.nc.page.maxh && (l = c.nc.page.maxh, k = !0);
				0 > e ? (e = 0, k = !0) : e > c.nc.page.maxw && (e = c.nc.page.maxw, k = !0);
				k && c.nc.doScrollPos(e, l, c.nc.opt.snapbackspeed)
			};
			this.doMomentum = function (e) {
				var l = c.time(),
					k = e ? l + e : c.lasttime;
				e = c.nc.getScrollLeft();
				var t = c.nc.getScrollTop(),
					b = c.nc.page.maxh,
					q = c.nc.page.maxw;
				c.speedx = 0 < q ? Math.min(60, c.speedx) : 0;
				c.speedy = 0 < b ? Math.min(60, c.speedy) : 0;
				k = k && 50 >= l - k;
				if (0 > t || t > b || 0 > e || e > q) k = !1;
				e = c.speedx && k ? c.speedx : !1;
				if (c.speedy && k && c.speedy || e) {
					var f = Math.max(16,
						c.steptime);
					50 < f && (e = f / 50, c.speedx *= e, c.speedy *= e, f = 50);
					c.demulxy = 0;
					c.lastscrollx = c.nc.getScrollLeft();
					c.chkx = c.lastscrollx;
					c.lastscrolly = c.nc.getScrollTop();
					c.chky = c.lastscrolly;
					var r = c.lastscrollx,
						u = c.lastscrolly,
						d = function () {
							var e = 600 < c.time() - l ? 0.04 : 0.02;
							if (c.speedx && (r = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy)), c.lastscrollx = r, 0 > r || r > q)) e = 0.1;
							if (c.speedy && (u = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy)), c.lastscrolly = u, 0 > u || u > b)) e = 0.1;
							c.demulxy = Math.min(1, c.demulxy + e);
							c.nc.synched("domomentum2d",
								function () {
									c.speedx && (c.nc.getScrollLeft() != c.chkx && c.stop(), c.chkx = r, c.nc.setScrollLeft(r));
									c.speedy && (c.nc.getScrollTop() != c.chky && c.stop(), c.chky = u, c.nc.setScrollTop(u));
									c.timer || (c.nc.hideCursor(), c.doSnapy(r, u))
								});
							1 > c.demulxy ? c.timer = setTimeout(d, f) : (c.stop(), c.nc.hideCursor(), c.doSnapy(r, u))
						};
					d()
				} else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop())
			}
		},
		A = e.fn.scrollTop;
	e.cssHooks.pageYOffset = {
		get: function (k, c, h) {
			return (c = e.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : A.call(k)
		},
		set: function (k, c) {
			var h = e.data(k, "__nicescroll") || !1;
			h && h.ishwscroll ? h.setScrollTop(parseInt(c)) : A.call(k, c);
			return this
		}
	};
	e.fn.scrollTop = function (k) {
		if ("undefined" == typeof k) {
			var c = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
			return c && c.ishwscroll ? c.getScrollTop() : A.call(this)
		}
		return this.each(function () {
			var c = e.data(this, "__nicescroll") || !1;
			c && c.ishwscroll ? c.setScrollTop(parseInt(k)) : A.call(e(this), k)
		})
	};
	var B = e.fn.scrollLeft;
	e.cssHooks.pageXOffset = {
		get: function (k, c, h) {
			return (c = e.data(k, "__nicescroll") ||
				!1) && c.ishwscroll ? c.getScrollLeft() : B.call(k)
		},
		set: function (k, c) {
			var h = e.data(k, "__nicescroll") || !1;
			h && h.ishwscroll ? h.setScrollLeft(parseInt(c)) : B.call(k, c);
			return this
		}
	};
	e.fn.scrollLeft = function (k) {
		if ("undefined" == typeof k) {
			var c = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
			return c && c.ishwscroll ? c.getScrollLeft() : B.call(this)
		}
		return this.each(function () {
			var c = e.data(this, "__nicescroll") || !1;
			c && c.ishwscroll ? c.setScrollLeft(parseInt(k)) : B.call(e(this), k)
		})
	};
	var C = function (k) {
		var c = this;
		this.length =
			0;
		this.name = "nicescrollarray";
		this.each = function (e) {
			for (var h = 0; h < c.length; h++) e.call(c[h]);
			return c
		};
		this.push = function (e) {
			c[c.length] = e;
			c.length++
		};
		this.eq = function (e) {
			return c[e]
		};
		if (k)
			for (a = 0; a < k.length; a++) {
				var h = e.data(k[a], "__nicescroll") || !1;
				h && (this[this.length] = h, this.length++)
			}
		return this
	};
	(function (e, c, h) {
		for (var l = 0; l < c.length; l++) h(e, c[l])
	})(C.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (e, c) {
		e[c] = function () {
			var e = arguments;
			return this.each(function () {
				this[c].apply(this,
					e)
			})
		}
	});
	e.fn.getNiceScroll = function (k) {
		return "undefined" == typeof k ? new C(this) : e.data(this[k], "__nicescroll") || !1
	};
	e.extend(e.expr[":"], {
		nicescroll: function (k) {
			return e.data(k, "__nicescroll") ? !0 : !1
		}
	});
	e.fn.niceScroll = function (k, c) {
		"undefined" == typeof c && ("object" == typeof k && !("jquery" in k)) && (c = k, k = !1);
		var h = new C;
		"undefined" == typeof c && (c = {});
		k && (c.doc = e(k), c.win = e(this));
		var l = !("doc" in c);
		!l && !("win" in c) && (c.win = e(this));
		this.each(function () {
			var k = e(this).data("__nicescroll") || !1;
			k || (c.doc = l ?
				e(this) : c.doc, k = new N(c, e(this)), e(this).data("__nicescroll", k));
			h.push(k)
		});
		return 1 == h.length ? h[0] : h
	};
	window.NiceScroll = {
		getjQuery: function () {
			return e
		}
	};
	e.nicescroll || (e.nicescroll = new C, e.nicescroll.options = F)
})(jQuery);



/*------------------------------------------------------------------*/
/*	06) WAYPOINTS
/*------------------------------------------------------------------*/


/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function () {
	"use strict";

	function t(o) {
		if (!o) throw new Error("No options passed to Waypoint constructor");
		if (!o.element) throw new Error("No element option passed to Waypoint constructor");
		if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
		this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
			name: this.options.group,
			axis: this.axis
		}), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
	}
	var e = 0,
		i = {};
	t.prototype.queueTrigger = function (t) {
		this.group.queueTrigger(this, t)
	}, t.prototype.trigger = function (t) {
		this.enabled && this.callback && this.callback.apply(this, t)
	}, t.prototype.destroy = function () {
		this.context.remove(this), this.group.remove(this), delete i[this.key]
	}, t.prototype.disable = function () {
		return this.enabled = !1, this
	}, t.prototype.enable = function () {
		return this.context.refresh(), this.enabled = !0, this
	}, t.prototype.next = function () {
		return this.group.next(this)
	}, t.prototype.previous = function () {
		return this.group.previous(this)
	}, t.invokeAll = function (t) {
		var e = [];
		for (var o in i) e.push(i[o]);
		for (var n = 0, r = e.length; r > n; n++) e[n][t]()
	}, t.destroyAll = function () {
		t.invokeAll("destroy")
	}, t.disableAll = function () {
		t.invokeAll("disable")
	}, t.enableAll = function () {
		t.Context.refreshAll();
		for (var e in i) i[e].enabled = !0;
		return this
	}, t.refreshAll = function () {
		t.Context.refreshAll()
	}, t.viewportHeight = function () {
		return window.innerHeight || document.documentElement.clientHeight
	}, t.viewportWidth = function () {
		return document.documentElement.clientWidth
	}, t.adapters = [], t.defaults = {
		context: window,
		continuous: !0,
		enabled: !0,
		group: "default",
		horizontal: !1,
		offset: 0
	}, t.offsetAliases = {
		"bottom-in-view": function () {
			return this.context.innerHeight() - this.adapter.outerHeight()
		},
		"right-in-view": function () {
			return this.context.innerWidth() - this.adapter.outerWidth()
		}
	}, window.Waypoint = t
}(),
function () {
	"use strict";

	function t(t) {
		window.setTimeout(t, 1e3 / 60)
	}

	function e(t) {
		this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
			x: this.adapter.scrollLeft(),
			y: this.adapter.scrollTop()
		}, this.waypoints = {
			vertical: {},
			horizontal: {}
		}, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
	}
	var i = 0,
		o = {},
		n = window.Waypoint,
		r = window.onload;
	e.prototype.add = function (t) {
		var e = t.options.horizontal ? "horizontal" : "vertical";
		this.waypoints[e][t.key] = t, this.refresh()
	}, e.prototype.checkEmpty = function () {
		var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
			e = this.Adapter.isEmptyObject(this.waypoints.vertical),
			i = this.element == this.element.window;
		t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
	}, e.prototype.createThrottledResizeHandler = function () {
		function t() {
			e.handleResize(), e.didResize = !1
		}
		var e = this;
		this.adapter.on("resize.waypoints", function () {
			e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
		})
	}, e.prototype.createThrottledScrollHandler = function () {
		function t() {
			e.handleScroll(), e.didScroll = !1
		}
		var e = this;
		this.adapter.on("scroll.waypoints", function () {
			(!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
		})
	}, e.prototype.handleResize = function () {
		n.Context.refreshAll()
	}, e.prototype.handleScroll = function () {
		var t = {},
			e = {
				horizontal: {
					newScroll: this.adapter.scrollLeft(),
					oldScroll: this.oldScroll.x,
					forward: "right",
					backward: "left"
				},
				vertical: {
					newScroll: this.adapter.scrollTop(),
					oldScroll: this.oldScroll.y,
					forward: "down",
					backward: "up"
				}
			};
		for (var i in e) {
			var o = e[i],
				n = o.newScroll > o.oldScroll,
				r = n ? o.forward : o.backward;
			for (var s in this.waypoints[i]) {
				var a = this.waypoints[i][s];
				if (null !== a.triggerPoint) {
					var l = o.oldScroll < a.triggerPoint,
						h = o.newScroll >= a.triggerPoint,
						p = l && h,
						u = !l && !h;
					(p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
				}
			}
		}
		for (var c in t) t[c].flushTriggers();
		this.oldScroll = {
			x: e.horizontal.newScroll,
			y: e.vertical.newScroll
		}
	}, e.prototype.innerHeight = function () {
		return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
	}, e.prototype.remove = function (t) {
		delete this.waypoints[t.axis][t.key], this.checkEmpty()
	}, e.prototype.innerWidth = function () {
		return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
	}, e.prototype.destroy = function () {
		var t = [];
		for (var e in this.waypoints)
			for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
		for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
	}, e.prototype.refresh = function () {
		var t, e = this.element == this.element.window,
			i = e ? void 0 : this.adapter.offset(),
			o = {};
		this.handleScroll(), t = {
			horizontal: {
				contextOffset: e ? 0 : i.left,
				contextScroll: e ? 0 : this.oldScroll.x,
				contextDimension: this.innerWidth(),
				oldScroll: this.oldScroll.x,
				forward: "right",
				backward: "left",
				offsetProp: "left"
			},
			vertical: {
				contextOffset: e ? 0 : i.top,
				contextScroll: e ? 0 : this.oldScroll.y,
				contextDimension: this.innerHeight(),
				oldScroll: this.oldScroll.y,
				forward: "down",
				backward: "up",
				offsetProp: "top"
			}
		};
		for (var r in t) {
			var s = t[r];
			for (var a in this.waypoints[r]) {
				var l, h, p, u, c, d = this.waypoints[r][a],
					f = d.options.offset,
					w = d.triggerPoint,
					y = 0,
					g = null == w;
				d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
			}
		}
		return n.requestAnimationFrame(function () {
			for (var t in o) o[t].flushTriggers()
		}), this
	}, e.findOrCreateByElement = function (t) {
		return e.findByElement(t) || new e(t)
	}, e.refreshAll = function () {
		for (var t in o) o[t].refresh()
	}, e.findByElement = function (t) {
		return o[t.waypointContextKey]
	}, window.onload = function () {
		r && r(), e.refreshAll()
	}, n.requestAnimationFrame = function (e) {
		var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
		i.call(window, e)
	}, n.Context = e
}(),
function () {
	"use strict";

	function t(t, e) {
		return t.triggerPoint - e.triggerPoint
	}

	function e(t, e) {
		return e.triggerPoint - t.triggerPoint
	}

	function i(t) {
		this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
	}
	var o = {
			vertical: {},
			horizontal: {}
		},
		n = window.Waypoint;
	i.prototype.add = function (t) {
		this.waypoints.push(t)
	}, i.prototype.clearTriggerQueues = function () {
		this.triggerQueues = {
			up: [],
			down: [],
			left: [],
			right: []
		}
	}, i.prototype.flushTriggers = function () {
		for (var i in this.triggerQueues) {
			var o = this.triggerQueues[i],
				n = "up" === i || "left" === i;
			o.sort(n ? e : t);
			for (var r = 0, s = o.length; s > r; r += 1) {
				var a = o[r];
				(a.options.continuous || r === o.length - 1) && a.trigger([i])
			}
		}
		this.clearTriggerQueues()
	}, i.prototype.next = function (e) {
		this.waypoints.sort(t);
		var i = n.Adapter.inArray(e, this.waypoints),
			o = i === this.waypoints.length - 1;
		return o ? null : this.waypoints[i + 1]
	}, i.prototype.previous = function (e) {
		this.waypoints.sort(t);
		var i = n.Adapter.inArray(e, this.waypoints);
		return i ? this.waypoints[i - 1] : null
	}, i.prototype.queueTrigger = function (t, e) {
		this.triggerQueues[e].push(t)
	}, i.prototype.remove = function (t) {
		var e = n.Adapter.inArray(t, this.waypoints);
		e > -1 && this.waypoints.splice(e, 1)
	}, i.prototype.first = function () {
		return this.waypoints[0]
	}, i.prototype.last = function () {
		return this.waypoints[this.waypoints.length - 1]
	}, i.findOrCreate = function (t) {
		return o[t.axis][t.name] || new i(t)
	}, n.Group = i
}(),
function () {
	"use strict";

	function t(t) {
		this.$element = e(t)
	}
	var e = window.jQuery,
		i = window.Waypoint;
	e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
		t.prototype[i] = function () {
			var t = Array.prototype.slice.call(arguments);
			return this.$element[i].apply(this.$element, t)
		}
	}), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
		t[o] = e[o]
	}), i.adapters.push({
		name: "jquery",
		Adapter: t
	}), i.Adapter = t
}(),
function () {
	"use strict";

	function t(t) {
		return function () {
			var i = [],
				o = arguments[0];
			return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
				var n = t.extend({}, o, {
					element: this
				});
				"string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
			}), i
		}
	}
	var e = window.Waypoint;
	window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();


/*------------------------------------------------------------------*/
/*	07) NAV ANCHOR(ONE PAGE NAV PLUGIN)
/*------------------------------------------------------------------*/

/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */

;
(function ($, window, document, undefined) {

	// our plugin constructor
	var OnePageNav = function (elem, options) {
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;
		this.metadata = this.$elem.data('plugin-options');
		this.$win = $(window);
		this.sections = {};
		this.didScroll = false;
		this.$doc = $(document);
		this.docHeight = this.$doc.height();
	};

	// the plugin prototype
	OnePageNav.prototype = {
		defaults: {
			navItems: 'a',
			currentClass: 'current',
			changeHash: false,
			easing: 'swing',
			filter: '',
			scrollSpeed: 1000,
			scrollThreshold: 0.5,
			begin: false,
			end: false,
			scrollChange: false
		},

		init: function () {
			// Introduce defaults that can be extended either
			// globally or using an object literal.
			this.config = $.extend({}, this.defaults, this.options, this.metadata);

			this.$nav = this.$elem.find(this.config.navItems);

			//Filter any links out of the nav
			if (this.config.filter !== '') {
				this.$nav = this.$nav.filter(this.config.filter);
			}

			//Handle clicks on the nav
			this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

			//Get the section positions
			this.getPositions();

			//Handle scroll changes
			this.bindInterval();

			//Update the positions on resize too
			this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

			return this;
		},

		adjustNav: function (self, $parent) {
			self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
			$parent.addClass(self.config.currentClass);
		},

		bindInterval: function () {
			var self = this;
			var docHeight;

			self.$win.on('scroll.onePageNav', function () {
				self.didScroll = true;
			});

			self.t = setInterval(function () {
				docHeight = self.$doc.height();

				//If it was scrolled
				if (self.didScroll) {
					self.didScroll = false;
					self.scrollChange();
				}

				//If the document height changes
				if (docHeight !== self.docHeight) {
					self.docHeight = docHeight;
					self.getPositions();
				}
			}, 250);
		},

		getHash: function ($link) {
			return $link.attr('href').split('#')[1];
		},

		getPositions: function () {
			var self = this;
			var linkHref;
			var topPos;
			var $target;

			self.$nav.each(function () {
				linkHref = self.getHash($(this));
				$target = $('#' + linkHref);

				if ($target.length) {
					topPos = $target.offset().top;
					self.sections[linkHref] = Math.round(topPos);
				}
			});
		},

		getSection: function (windowPos) {
			var returnValue = null;
			var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

			for (var section in this.sections) {
				if ((this.sections[section] - windowHeight) < windowPos) {
					returnValue = section;
				}
			}

			return returnValue;
		},

		handleClick: function (e) {
			var self = this;
			var $link = $(e.currentTarget);
			var $parent = $link.parent();
			var newLoc = '#' + self.getHash($link);

			if (!$parent.hasClass(self.config.currentClass)) {
				//Start callback
				if (self.config.begin) {
					self.config.begin();
				}

				//Change the highlighted nav item
				self.adjustNav(self, $parent);

				//Removing the auto-adjust on scroll
				self.unbindInterval();

				//Scroll to the correct position
				self.scrollTo(newLoc, function () {
					//Do we need to change the hash?
					if (self.config.changeHash) {
						window.location.hash = newLoc;
					}

					//Add the auto-adjust on scroll back in
					self.bindInterval();

					//End callback
					if (self.config.end) {
						self.config.end();
					}
				});
			}

			e.preventDefault();
		},

		scrollChange: function () {
			var windowTop = this.$win.scrollTop();
			var position = this.getSection(windowTop);
			var $parent;

			//If the position is set
			if (position !== null) {
				$parent = this.$elem.find('a[href$="#' + position + '"]').parent();

				//If it's not already the current section
				if (!$parent.hasClass(this.config.currentClass)) {
					//Change the highlighted nav item
					this.adjustNav(this, $parent);

					//If there is a scrollChange callback
					if (this.config.scrollChange) {
						this.config.scrollChange($parent);
					}
				}
			}
		},

		scrollTo: function (target, callback) {
			var offset = $(target).offset().top;

			$('html, body').animate({
				scrollTop: offset - 85
			}, this.config.scrollSpeed, this.config.easing, callback);
		},

		unbindInterval: function () {
			clearInterval(this.t);
			this.$win.unbind('scroll.onePageNav');
		}
	};

	OnePageNav.defaults = OnePageNav.prototype.defaults;

	$.fn.onePageNav = function (options) {
		return this.each(function () {
			new OnePageNav(this, options).init();
		});
	};

})(jQuery, window, document);


/*------------------------------------------------------------------*/
/*	08) SCROLL TO
/*------------------------------------------------------------------*/
/*!
 * jquery.scrollto.js 0.0.1 - https://github.com/yckart/jquery.scrollto.js
 * Scroll smooth to any element in your DOM.
 *
 * copyright (c) 2012 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/17
 **/
$.scrollTo = $.fn.scrollTo = function (o, t, n) {
	return this instanceof $ ? (n = $.extend({}, {
		gap: {
			x: 0,
			y: 0
		},
		animation: {
			easing: "swing",
			duration: 600,
			complete: $.noop,
			step: $.noop
		}
	}, n), this.each(function () {
		var a = $(this);
		a.stop().animate({
			scrollLeft: isNaN(Number(o)) ? $(t).offset().left + n.gap.x : o,
			scrollTop: isNaN(Number(t)) ? $(t).offset().top + n.gap.y : t
		}, n.animation)
	})) : $.fn.scrollTo.apply($("html, body"), arguments)
};

/*------------------------------------------------------------------*/
/*	09) EASING
/*------------------------------------------------------------------*/

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function (e, a, c, b, d) {
		return jQuery.easing[jQuery.easing.def](e, a, c, b, d)
	},
	easeInQuad: function (e, a, c, b, d) {
		return b * (a /= d) * a + c
	},
	easeOutQuad: function (e, a, c, b, d) {
		return -b * (a /= d) * (a - 2) + c
	},
	easeInOutQuad: function (e, a, c, b, d) {
		if ((a /= d / 2) < 1) return b / 2 * a * a + c;
		return -b / 2 * (--a * (a - 2) - 1) + c
	},
	easeInCubic: function (e, a, c, b, d) {
		return b * (a /= d) * a * a + c
	},
	easeOutCubic: function (e, a, c, b, d) {
		return b * ((a = a / d - 1) * a * a + 1) + c
	},
	easeInOutCubic: function (e, a, c, b, d) {
		if ((a /= d / 2) < 1) return b /
			2 * a * a * a + c;
		return b / 2 * ((a -= 2) * a * a + 2) + c
	},
	easeInQuart: function (e, a, c, b, d) {
		return b * (a /= d) * a * a * a + c
	},
	easeOutQuart: function (e, a, c, b, d) {
		return -b * ((a = a / d - 1) * a * a * a - 1) + c
	},
	easeInOutQuart: function (e, a, c, b, d) {
		if ((a /= d / 2) < 1) return b / 2 * a * a * a * a + c;
		return -b / 2 * ((a -= 2) * a * a * a - 2) + c
	},
	easeInQuint: function (e, a, c, b, d) {
		return b * (a /= d) * a * a * a * a + c
	},
	easeOutQuint: function (e, a, c, b, d) {
		return b * ((a = a / d - 1) * a * a * a * a + 1) + c
	},
	easeInOutQuint: function (e, a, c, b, d) {
		if ((a /= d / 2) < 1) return b / 2 * a * a * a * a * a + c;
		return b / 2 * ((a -= 2) * a * a * a * a + 2) + c
	},
	easeInSine: function (e,
		a, c, b, d) {
		return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
	},
	easeOutSine: function (e, a, c, b, d) {
		return b * Math.sin(a / d * (Math.PI / 2)) + c
	},
	easeInOutSine: function (e, a, c, b, d) {
		return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
	},
	easeInExpo: function (e, a, c, b, d) {
		return a == 0 ? c : b * Math.pow(2, 10 * (a / d - 1)) + c
	},
	easeOutExpo: function (e, a, c, b, d) {
		return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c
	},
	easeInOutExpo: function (e, a, c, b, d) {
		if (a == 0) return c;
		if (a == d) return c + b;
		if ((a /= d / 2) < 1) return b / 2 * Math.pow(2, 10 * (a - 1)) + c;
		return b / 2 * (-Math.pow(2, -10 * --a) + 2) + c
	},
	easeInCirc: function (e, a, c, b, d) {
		return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c
	},
	easeOutCirc: function (e, a, c, b, d) {
		return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
	},
	easeInOutCirc: function (e, a, c, b, d) {
		if ((a /= d / 2) < 1) return -b / 2 * (Math.sqrt(1 - a * a) - 1) + c;
		return b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
	},
	easeInElastic: function (e, a, c, b, d) {
		e = 1.70158;
		var f = 0,
			g = b;
		if (a == 0) return c;
		if ((a /= d) == 1) return c + b;
		f || (f = d * 0.3);
		if (g < Math.abs(b)) {
			g = b;
			e = f / 4
		} else e = f / (2 * Math.PI) * Math.asin(b / g);
		return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f)) + c
	},
	easeOutElastic: function (e,
		a, c, b, d) {
		e = 1.70158;
		var f = 0,
			g = b;
		if (a == 0) return c;
		if ((a /= d) == 1) return c + b;
		f || (f = d * 0.3);
		if (g < Math.abs(b)) {
			g = b;
			e = f / 4
		} else e = f / (2 * Math.PI) * Math.asin(b / g);
		return g * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / f) + b + c
	},
	easeInOutElastic: function (e, a, c, b, d) {
		e = 1.70158;
		var f = 0,
			g = b;
		if (a == 0) return c;
		if ((a /= d / 2) == 2) return c + b;
		f || (f = d * 0.3 * 1.5);
		if (g < Math.abs(b)) {
			g = b;
			e = f / 4
		} else e = f / (2 * Math.PI) * Math.asin(b / g);
		if (a < 1) return -0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + c;
		return g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a *
			d - e) * 2 * Math.PI / f) * 0.5 + b + c
	},
	easeInBack: function (e, a, c, b, d, f) {
		if (f == undefined) f = 1.70158;
		return b * (a /= d) * a * ((f + 1) * a - f) + c
	},
	easeOutBack: function (e, a, c, b, d, f) {
		if (f == undefined) f = 1.70158;
		return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c
	},
	easeInOutBack: function (e, a, c, b, d, f) {
		if (f == undefined) f = 1.70158;
		if ((a /= d / 2) < 1) return b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c;
		return b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
	},
	easeInBounce: function (e, a, c, b, d) {
		return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c
	},
	easeOutBounce: function (e, a, c, b, d) {
		return (a /=
			d) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
	},
	easeInOutBounce: function (e, a, c, b, d) {
		if (a < d / 2) return jQuery.easing.easeInBounce(e, a * 2, 0, b, d) * 0.5 + c;
		return jQuery.easing.easeOutBounce(e, a * 2 - d, 0, b, d) * 0.5 + b * 0.5 + c
	}
});


/*------------------------------------------------------------------*/
/*	10) OWL CAROUSEL
/*------------------------------------------------------------------*/

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
! function (a, b, c, d) {
	function e(b, c) {
		this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		}, this._states = {
			current: {},
			tags: {
				initializing: ["busy"],
				animating: ["busy"],
				dragging: ["interacting"]
			}
		}, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
			this._handlers[c] = a.proxy(this[c], this)
		}, this)), a.each(e.Plugins, a.proxy(function (a, b) {
			this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
		}, this)), a.each(e.Workers, a.proxy(function (b, c) {
			this._pipe.push({
				filter: c.filter,
				run: a.proxy(c.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}
	e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, e.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, e.Type = {
		Event: "event",
		State: "state"
	}, e.Plugins = {}, e.Workers = [{
		filter: ["width", "settings"],
		run: function () {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			this.$stage.children(".cloned").remove()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = this.settings.margin || "",
				c = !this.settings.autoWidth,
				d = this.settings.rtl,
				e = {
					width: "auto",
					"margin-left": d ? b : "",
					"margin-right": d ? "" : b
				};
			!c && this.$stage.children().css(e), a.css = e
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				c = null,
				d = this._items.length,
				e = !this.settings.autoWidth,
				f = [];
			for (a.items = {
					merge: !1,
					width: b
				}; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
			this._widths = f
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			var b = [],
				c = this._items,
				d = this.settings,
				e = Math.max(2 * d.items, 4),
				f = 2 * Math.ceil(c.length / 2),
				g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
				h = "",
				i = "";
			for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
			this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
			this._coordinates = f
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var a = this.settings.stagePadding,
				b = this._coordinates,
				c = {
					width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
					"padding-left": a || "",
					"padding-right": a || ""
				};
			this.$stage.css(c)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = this._coordinates.length,
				c = !this.settings.autoWidth,
				d = this.$stage.children();
			if (c && a.items.merge)
				for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
			else c && (a.css.width = a.items.width, d.css(a.css))
		}
	}, {
		filter: ["items"],
		run: function () {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
		}
	}, {
		filter: ["position"],
		run: function () {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function () {
			var a, b, c, d, e = this.settings.rtl ? 1 : -1,
				f = 2 * this.settings.stagePadding,
				g = this.coordinates(this.current()) + f,
				h = g + this.width() * e,
				i = [];
			for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
			this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
		}
	}], e.prototype.initialize = function () {
		if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
			var b, c, e;
			b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
		}
		this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, e.prototype.setup = function () {
		var b = this.viewport(),
			c = this.options.responsive,
			d = -1,
			e = null;
		c ? (a.each(c, function (a) {
			a <= b && a > d && (d = Number(a))
		}), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	}, e.prototype.optionsLogic = function () {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, e.prototype.prepare = function (b) {
		var c = this.trigger("prepare", {
			content: b
		});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
			content: c.data
		}), c.data
	}, e.prototype.update = function () {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
				return this[a]
			}, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, e.prototype.width = function (a) {
		switch (a = a || e.Width.Default) {
			case e.Width.Inner:
			case e.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, e.prototype.refresh = function () {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, e.prototype.onThrottledResize = function () {
		b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, e.prototype.onResize = function () {
		return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
	}, e.prototype.registerEventHandlers = function () {
		a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
			return !1
		})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
	}, e.prototype.onDragStart = function (b) {
		var d = null;
		3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
			x: d[16 === d.length ? 12 : 4],
			y: d[16 === d.length ? 13 : 5]
		}) : (d = this.$stage.position(), d = {
			x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
			y: d.top
		}), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
			var d = this.difference(this._drag.pointer, this.pointer(b));
			a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		}, this)))
	}, e.prototype.onDragMove = function (a) {
		var b = null,
			c = null,
			d = null,
			e = this.difference(this._drag.pointer, this.pointer(a)),
			f = this.difference(this._drag.stage.start, e);
		this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
	}, e.prototype.onDragEnd = function (b) {
		var d = this.difference(this._drag.pointer, this.pointer(b)),
			e = this._drag.stage.current,
			f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
		a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
			return !1
		})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, e.prototype.closest = function (b, c) {
		var d = -1,
			e = 30,
			f = this.width(),
			g = this.coordinates();
		return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
			return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
		}, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
	}, e.prototype.animate = function (b) {
		var c = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
			transform: "translate3d(" + b + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s"
		}) : c ? this.$stage.animate({
			left: b + "px"
		}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
			left: b + "px"
		})
	}, e.prototype.is = function (a) {
		return this._states.current[a] && this._states.current[a] > 0
	}, e.prototype.current = function (a) {
		if (a === d) return this._current;
		if (0 === this._items.length) return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {
				property: {
					name: "position",
					value: a
				}
			});
			b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, e.prototype.invalidate = function (b) {
		return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
			return b
		})
	}, e.prototype.reset = function (a) {
		a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	}, e.prototype.normalize = function (a, b) {
		var c = this._items.length,
			e = b ? 0 : this._clones.length;
		return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
	}, e.prototype.relative = function (a) {
		return a -= this._clones.length / 2, this.normalize(a, !0)
	}, e.prototype.maximum = function (a) {
		var b, c, d, e = this.settings,
			f = this._coordinates.length;
		if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
		else if (e.autoWidth || e.merge) {
			for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
			f = b + 1
		} else f = e.center ? this._items.length - 1 : this._items.length - e.items;
		return a && (f -= this._clones.length / 2), Math.max(f, 0)
	}, e.prototype.minimum = function (a) {
		return a ? 0 : this._clones.length / 2
	}, e.prototype.items = function (a) {
		return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
	}, e.prototype.mergers = function (a) {
		return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
	}, e.prototype.clones = function (b) {
		var c = this._clones.length / 2,
			e = c + this._items.length,
			f = function (a) {
				return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
			};
		return b === d ? a.map(this._clones, function (a, b) {
			return f(b)
		}) : a.map(this._clones, function (a, c) {
			return a === b ? f(c) : null
		})
	}, e.prototype.speed = function (a) {
		return a !== d && (this._speed = a), this._speed
	}, e.prototype.coordinates = function (b) {
		var c, e = 1,
			f = b - 1;
		return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
			return this.coordinates(b)
		}, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
	}, e.prototype.duration = function (a, b, c) {
		return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	}, e.prototype.to = function (a, b) {
		var c = this.current(),
			d = null,
			e = a - this.relative(c),
			f = (e > 0) - (e < 0),
			g = this._items.length,
			h = this.minimum(),
			i = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
	}, e.prototype.next = function (a) {
		a = a || !1, this.to(this.relative(this.current()) + 1, a)
	}, e.prototype.prev = function (a) {
		a = a || !1, this.to(this.relative(this.current()) - 1, a)
	}, e.prototype.onTransitionEnd = function (a) {
		if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
		this.leave("animating"), this.trigger("translated")
	}, e.prototype.viewport = function () {
		var d;
		return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
	}, e.prototype.replace = function (b) {
		this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
			return 1 === this.nodeType
		}).each(a.proxy(function (a, b) {
			b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, e.prototype.add = function (b, c) {
		var e = this.relative(this._current);
		c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
			content: b,
			position: c
		}), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
			content: b,
			position: c
		})
	}, e.prototype.remove = function (a) {
		a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	}, e.prototype.preloadAutoWidthImages = function (b) {
		b.each(a.proxy(function (b, c) {
			this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
				c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
			}, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
		}, this))
	}, e.prototype.destroy = function () {
		this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
		for (var d in this._plugins) this._plugins[d].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, e.prototype.op = function (a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
			case "<":
				return d ? a > c : a < c;
			case ">":
				return d ? a < c : a > c;
			case ">=":
				return d ? a <= c : a >= c;
			case "<=":
				return d ? a >= c : a <= c
		}
	}, e.prototype.on = function (a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
	}, e.prototype.off = function (a, b, c, d) {
		a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
	}, e.prototype.trigger = function (b, c, d, f, g) {
		var h = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			i = a.camelCase(a.grep(["on", b, d], function (a) {
				return a
			}).join("-").toLowerCase()),
			j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
				relatedTarget: this
			}, h, c));
		return this._supress[b] || (a.each(this._plugins, function (a, b) {
			b.onTrigger && b.onTrigger(j)
		}), this.register({
			type: e.Type.Event,
			name: b
		}), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
	}, e.prototype.enter = function (b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
			this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
		}, this))
	}, e.prototype.leave = function (b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
			this._states.current[b]--
		}, this))
	}, e.prototype.register = function (b) {
		if (b.type === e.Type.Event) {
			if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
				var c = a.event.special[b.name]._default;
				a.event.special[b.name]._default = function (a) {
					return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
				}, a.event.special[b.name].owl = !0
			}
		} else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
			return a.inArray(c, this._states.tags[b.name]) === d
		}, this)))
	}, e.prototype.suppress = function (b) {
		a.each(b, a.proxy(function (a, b) {
			this._supress[b] = !0
		}, this))
	}, e.prototype.release = function (b) {
		a.each(b, a.proxy(function (a, b) {
			delete this._supress[b]
		}, this))
	}, e.prototype.pointer = function (a) {
		var c = {
			x: null,
			y: null
		};
		return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
	}, e.prototype.isNumeric = function (a) {
		return !isNaN(parseFloat(a))
	}, e.prototype.difference = function (a, b) {
		return {
			x: a.x - b.x,
			y: a.y - b.y
		}
	}, a.fn.owlCarousel = function (b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return this.each(function () {
			var d = a(this),
				f = d.data("owl.carousel");
			f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
				f.register({
					type: e.Type.Event,
					name: c
				}), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
					a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
				}, f))
			})), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
		})
	}, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	}, e.prototype.watch = function () {
		this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, e.prototype.refresh = function () {
		this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, e.prototype.destroy = function () {
		var a, c;
		b.clearInterval(this._interval);
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
					for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
							this.load(b)
						}, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		lazyLoad: !1
	}, e.prototype.load = function (c) {
		var d = this._core.$stage.children().eq(c),
			e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
			var e, f = a(d),
				g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
			this._core.trigger("load", {
				element: f,
				url: g
			}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
				f.css("opacity", 1), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
				f.css({
					"background-image": 'url("' + g + '")',
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
			}, this),
			"loaded.owl.lazy": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, e.prototype.update = function () {
		var b = this._core._current,
			c = b + this._core.settings.items,
			d = this._core.$stage.children().toArray().slice(b, c),
			e = [],
			f = 0;
		a.each(d, function (b, c) {
			e.push(a(c).height())
		}), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.register({
					type: "state",
					name: "playing",
					tags: ["interacting"]
				})
			}, this),
			"resize.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
			}, this),
			"refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" === a.property.name && this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace) {
					var c = a(b.content).find(".owl-video");
					c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
			this.play(a)
		}, this))
	};
	e.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, e.prototype.fetch = function (a, b) {
		var c = function () {
				return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
			}(),
			d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight,
			g = a.attr("href");
		if (!g) throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
		else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
		else {
			if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			c = "vzaar"
		}
		d = d[6], this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
	}, e.prototype.thumbnail = function (b, c) {
		var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
			h = b.find("img"),
			i = "src",
			j = "",
			k = this._core.settings,
			l = function (a) {
				e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
			};
		if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
		"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a[0].thumbnail_large, l(f)
			}
		}) : "vzaar" === c.type && a.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a.framegrab_url, l(f)
			}
		})
	}, e.prototype.stop = function () {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, e.prototype.play = function (b) {
		var c, d = a(b.target),
			e = d.closest("." + this._core.settings.itemClass),
			f = this._videos[e.attr("data-video")],
			g = f.width || "100%",
			h = f.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
	}, e.prototype.isInFullScreen = function () {
		var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return b && a(b).parent().hasClass("owl-video-frame")
	}, e.prototype.destroy = function () {
		var a, b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
			"change.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
				a.namespace && (this.swapping = "translated" == a.type)
			}, this),
			"translate.owl.carousel": a.proxy(function (a) {
				a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	e.Defaults = {
			animateOut: !1,
			animateIn: !1
		}, e.prototype.swap = function () {
			if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
				this.core.speed(0);
				var b, c = a.proxy(this.clear, this),
					d = this.core.$stage.children().eq(this.previous),
					e = this.core.$stage.children().eq(this.next),
					f = this.core.settings.animateIn,
					g = this.core.settings.animateOut;
				this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
					left: b + "px"
				}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
			}
		}, e.prototype.clear = function (b) {
			a(b.target).css({
				left: ""
			}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
		}, e.prototype.destroy = function () {
			var a, b;
			for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
			for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
		},
		a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
			}, this),
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoplay && this.play()
			}, this),
			"play.owl.autoplay": a.proxy(function (a, b, c) {
				a.namespace && this.play(b, c)
			}, this),
			"stop.owl.autoplay": a.proxy(function (a) {
				a.namespace && this.stop()
			}, this),
			"mouseover.owl.autoplay": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"mouseleave.owl.autoplay": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this),
			"touchstart.owl.core": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"touchend.owl.core": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
	};
	e.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, e.prototype.play = function (a, b) {
		this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
	}, e.prototype._getNextTimeout = function (d, e) {
		return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
			this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
		}, this), d || this._core.settings.autoplayTimeout)
	}, e.prototype._setAutoPlayInterval = function () {
		this._timeout = this._getNextTimeout()
	}, e.prototype.stop = function () {
		this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
	}, e.prototype.pause = function () {
		this._core.is("rotating") && (this._paused = !0)
	}, e.prototype.destroy = function () {
		var a, b;
		this.stop();
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	"use strict";
	var e = function (b) {
		this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": a.proxy(function (b) {
				b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			}, this),
			"added.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
			}, this),
			"remove.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" == a.property.name && this.draw()
			}, this),
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this),
			"refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	e.Defaults = {
		nav: !1,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, e.prototype.initialize = function () {
		var b, c = this._core.settings;
		this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
			this.prev(c.navSpeed)
		}, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
			this.next(c.navSpeed)
		}, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
			var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
			b.preventDefault(), this.to(d, c.dotsSpeed)
		}, this));
		for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
	}, e.prototype.destroy = function () {
		var a, b, c, d;
		for (a in this._handlers) this.$element.off(a, this._handlers[a]);
		for (b in this._controls) this._controls[b].remove();
		for (d in this.overides) this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, e.prototype.update = function () {
		var a, b, c, d = this._core.clones().length / 2,
			e = d + this._core.items().length,
			f = this._core.maximum(!0),
			g = this._core.settings,
			h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
		if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
			for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
				if (b >= h || 0 === b) {
					if (this._pages.push({
							start: Math.min(f, a - d),
							end: a - d + h - 1
						}), Math.min(f, a - d) === f) break;
					b = 0, ++c
				}
				b += this._core.mergers(this._core.relative(a))
			}
	}, e.prototype.draw = function () {
		var b, c = this._core.settings,
			d = this._core.items().length <= c.items,
			e = this._core.relative(this._core.current()),
			f = c.loop || c.rewind;
		this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
	}, e.prototype.onTrigger = function (b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
		}
	}, e.prototype.current = function () {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, a.proxy(function (a, c) {
			return a.start <= b && a.end >= b
		}, this)).pop()
	}, e.prototype.getPosition = function (b) {
		var c, d, e = this._core.settings;
		return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
	}, e.prototype.next = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	}, e.prototype.prev = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	}, e.prototype.to = function (b, c, d) {
		var e;
		!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
	}, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	"use strict";
	var e = function (c) {
		this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (c) {
				c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace) {
					var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!c) return;
					this._hashes[c] = b.content
				}
			}, this),
			"changed.owl.carousel": a.proxy(function (c) {
				if (c.namespace && "position" === c.property.name) {
					var d = this._core.items(this._core.relative(this._core.current())),
						e = a.map(this._hashes, function (a, b) {
							return a === d ? b : null
						}).join();
					if (!e || b.location.hash.slice(1) === e) return;
					b.location.hash = e
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
			var c = b.location.hash.substring(1),
				e = this._core.$stage.children(),
				f = this._hashes[c] && e.index(this._hashes[c]);
			f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
		}, this))
	};
	e.Defaults = {
		URLhashListener: !1
	}, e.prototype.destroy = function () {
		var c, d;
		a(b).off("hashchange.owl.navigation");
		for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	function e(b, c) {
		var e = !1,
			f = b.charAt(0).toUpperCase() + b.slice(1);
		return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
			if (g[b] !== d) return e = !c || b, !1
		}), e
	}

	function f(a) {
		return e(a, !0)
	}
	var g = a("<support>").get(0).style,
		h = "Webkit Moz O ms".split(" "),
		i = {
			transition: {
				end: {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd",
					transition: "transitionend"
				}
			},
			animation: {
				end: {
					WebkitAnimation: "webkitAnimationEnd",
					MozAnimation: "animationend",
					OAnimation: "oAnimationEnd",
					animation: "animationend"
				}
			}
		},
		j = {
			csstransforms: function () {
				return !!e("transform")
			},
			csstransforms3d: function () {
				return !!e("perspective")
			},
			csstransitions: function () {
				return !!e("transition")
			},
			cssanimations: function () {
				return !!e("animation")
			}
		};
	j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);


/*------------------------------------------------------------------*/
/*	12) TYPED 
/*------------------------------------------------------------------*/

// The MIT License (MIT)

// Typed.js | Copyright (c) 2016 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

! function ($) {

	"use strict";

	var Typed = function (el, options) {

		// chosen element to manipulate text
		this.el = $(el);

		// options
		this.options = $.extend({}, $.fn.typed.defaults, options);

		// attribute to type into
		this.isInput = this.el.is('input');
		this.attr = this.options.attr;

		// show cursor
		this.showCursor = this.isInput ? false : this.options.showCursor;

		// text content of element
		this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();

		// html or plain text
		this.contentType = this.options.contentType;

		// typing speed
		this.typeSpeed = this.options.typeSpeed;

		// add a delay before typing starts
		this.startDelay = this.options.startDelay;

		// backspacing speed
		this.backSpeed = this.options.backSpeed;

		// amount of time to wait before backspacing
		this.backDelay = this.options.backDelay;

		// div containing strings
		this.stringsElement = this.options.stringsElement;

		// input strings of text
		this.strings = this.options.strings;

		// character number position of current string
		this.strPos = 0;

		// current array position
		this.arrayPos = 0;

		// number to stop backspacing on.
		// default 0, can change depending on how many chars
		// you want to remove at the time
		this.stopNum = 0;

		// Looping logic
		this.loop = this.options.loop;
		this.loopCount = this.options.loopCount;
		this.curLoop = 0;

		// for stopping
		this.stop = false;

		// custom cursor
		this.cursorChar = this.options.cursorChar;

		// shuffle the strings
		this.shuffle = this.options.shuffle;
		// the order of strings
		this.sequence = [];

		// All systems go!
		this.build();
	};

	Typed.prototype = {

		constructor: Typed,

		init: function () {
			// begin the loop w/ first current string (global self.strings)
			// current string will be passed as an argument each time after this
			var self = this;
			self.timeout = setTimeout(function () {
				for (var i = 0; i < self.strings.length; ++i) self.sequence[i] = i;

				// shuffle the array if true
				if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);

				// Start typing
				self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
			}, self.startDelay);
		},

		build: function () {
			var self = this;
			// Insert cursor
			if (this.showCursor === true) {
				this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
				this.el.after(this.cursor);
			}
			if (this.stringsElement) {
				this.strings = [];
				this.stringsElement.hide();
				console.log(this.stringsElement.children());
				var strings = this.stringsElement.children();
				$.each(strings, function (key, value) {
					self.strings.push($(value).html());
				});
			}
			this.init();
		},

		// pass current string state to each function, types 1 char per call
		typewrite: function (curString, curStrPos) {
			// exit when stopped
			if (this.stop === true) {
				return;
			}

			// varying values for setTimeout during typing
			// can't be global since number changes each time loop is executed
			var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
			var self = this;

			// ------------- optional ------------- //
			// backpaces a certain string faster
			// ------------------------------------ //
			// if (self.arrayPos == 1){
			//  self.backDelay = 50;
			// }
			// else{ self.backDelay = 500; }

			// contain typing function in a timeout humanize'd delay
			self.timeout = setTimeout(function () {
				// check for an escape character before a pause value
				// format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
				// single ^ are removed from string
				var charPause = 0;
				var substr = curString.substr(curStrPos);
				if (substr.charAt(0) === '^') {
					var skip = 1; // skip atleast 1
					if (/^\^\d+/.test(substr)) {
						substr = /\d+/.exec(substr)[0];
						skip += substr.length;
						charPause = parseInt(substr);
					}

					// strip out the escape character and pause value so they're not printed
					curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
				}

				if (self.contentType === 'html') {
					// skip over html tags while typing
					var curChar = curString.substr(curStrPos).charAt(0)
					if (curChar === '<' || curChar === '&') {
						var tag = '';
						var endTag = '';
						if (curChar === '<') {
							endTag = '>'
						} else {
							endTag = ';'
						}
						while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
							tag += curString.substr(curStrPos).charAt(0);
							curStrPos++;
							if (curStrPos + 1 > curString.length) {
								break;
							}
						}
						curStrPos++;
						tag += endTag;
					}
				}

				// timeout for any pause after a character
				self.timeout = setTimeout(function () {
					if (curStrPos === curString.length) {
						// fires callback function
						self.options.onStringTyped(self.arrayPos);

						// is this the final string
						if (self.arrayPos === self.strings.length - 1) {
							// animation that occurs on the last typed string
							self.options.callback();

							self.curLoop++;

							// quit if we wont loop back
							if (self.loop === false || self.curLoop === self.loopCount)
								return;
						}

						self.timeout = setTimeout(function () {
							self.backspace(curString, curStrPos);
						}, self.backDelay);

					} else {

						/* call before functions if applicable */
						if (curStrPos === 0) {
							self.options.preStringTyped(self.arrayPos);
						}

						// start typing each new char into existing string
						// curString: arg, self.el.html: original text inside element
						var nextString = curString.substr(0, curStrPos + 1);
						if (self.attr) {
							self.el.attr(self.attr, nextString);
						} else {
							if (self.isInput) {
								self.el.val(nextString);
							} else if (self.contentType === 'html') {
								self.el.html(nextString);
							} else {
								self.el.text(nextString);
							}
						}

						// add characters one by one
						curStrPos++;
						// loop the function
						self.typewrite(curString, curStrPos);
					}
					// end of character pause
				}, charPause);

				// humanized value for typing
			}, humanize);

		},

		backspace: function (curString, curStrPos) {
			// exit when stopped
			if (this.stop === true) {
				return;
			}

			// varying values for setTimeout during typing
			// can't be global since number changes each time loop is executed
			var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
			var self = this;

			self.timeout = setTimeout(function () {

				// ----- this part is optional ----- //
				// check string array position
				// on the first string, only delete one word
				// the stopNum actually represents the amount of chars to
				// keep in the current string. In my case it's 14.
				// if (self.arrayPos == 1){
				//  self.stopNum = 14;
				// }
				//every other time, delete the whole typed string
				// else{
				//  self.stopNum = 0;
				// }

				if (self.contentType === 'html') {
					// skip over html tags while backspacing
					if (curString.substr(curStrPos).charAt(0) === '>') {
						var tag = '';
						while (curString.substr(curStrPos - 1).charAt(0) !== '<') {
							tag -= curString.substr(curStrPos).charAt(0);
							curStrPos--;
							if (curStrPos < 0) {
								break;
							}
						}
						curStrPos--;
						tag += '<';
					}
				}

				// ----- continue important stuff ----- //
				// replace text with base text + typed characters
				var nextString = curString.substr(0, curStrPos);
				if (self.attr) {
					self.el.attr(self.attr, nextString);
				} else {
					if (self.isInput) {
						self.el.val(nextString);
					} else if (self.contentType === 'html') {
						self.el.html(nextString);
					} else {
						self.el.text(nextString);
					}
				}

				// if the number (id of character in current string) is
				// less than the stop number, keep going
				if (curStrPos > self.stopNum) {
					// subtract characters one by one
					curStrPos--;
					// loop the function
					self.backspace(curString, curStrPos);
				}
				// if the stop number has been reached, increase
				// array position to next string
				else if (curStrPos <= self.stopNum) {
					self.arrayPos++;

					if (self.arrayPos === self.strings.length) {
						self.arrayPos = 0;

						// Shuffle sequence again
						if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);

						self.init();
					} else
						self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
				}

				// humanized value for typing
			}, humanize);

		},
		/**
		 * Shuffles the numbers in the given array.
		 * @param {Array} array
		 * @returns {Array}
		 */
		shuffleArray: function (array) {
			var tmp, current, top = array.length;
			if (top)
				while (--top) {
					current = Math.floor(Math.random() * (top + 1));
					tmp = array[current];
					array[current] = array[top];
					array[top] = tmp;
				}
			return array;
		},

		// Start & Stop currently not working

		// , stop: function() {
		//     var self = this;

		//     self.stop = true;
		//     clearInterval(self.timeout);
		// }

		// , start: function() {
		//     var self = this;
		//     if(self.stop === false)
		//        return;

		//     this.stop = false;
		//     this.init();
		// }

		// Reset and rebuild the element
		reset: function () {
			var self = this;
			clearInterval(self.timeout);
			var id = this.el.attr('id');
			this.el.empty();
			if (typeof this.cursor !== 'undefined') {
				this.cursor.remove();
			}
			this.strPos = 0;
			this.arrayPos = 0;
			this.curLoop = 0;
			// Send the callback
			this.options.resetCallback();
		}

	};

	$.fn.typed = function (option) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('typed'),
				options = typeof option == 'object' && option;
			if (data) {
				data.reset();
			}
			$this.data('typed', (data = new Typed(this, options)));
			if (typeof option == 'string') data[option]();
		});
	};

	$.fn.typed.defaults = {
		strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
		stringsElement: null,
		// typing speed
		typeSpeed: 0,
		// time before typing starts
		startDelay: 0,
		// backspacing speed
		backSpeed: 0,
		// shuffle the strings
		shuffle: false,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: false,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function () {},
		// starting callback function before each string
		preStringTyped: function () {},
		//callback for every typed string
		onStringTyped: function () {},
		// callback for reset
		resetCallback: function () {}
	};


}(window.jQuery);

/*------------------------------------------------------------------*/
/*	08) COUNT TO
/*------------------------------------------------------------------*/

! function (t) {
	function e(t, e) {
		return t.toFixed(e.decimals)
	}
	t.fn.countTo = function (e) {
		return e = e || {}, t(this).each(function () {
			function a() {
				s += l, c++, n(s), "function" == typeof o.onUpdate && o.onUpdate.call(f, s), c >= r && (i.removeData("countTo"), clearInterval(d.interval), s = o.to, "function" == typeof o.onComplete && o.onComplete.call(f, s))
			}

			function n(t) {
				var e = o.formatter.call(f, t, o);
				i.text(e)
			}
			var o = t.extend({}, t.fn.countTo.defaults, {
					from: t(this).data("from"),
					to: t(this).data("to"),
					speed: t(this).data("speed"),
					refreshInterval: t(this).data("refresh-interval"),
					decimals: t(this).data("decimals")
				}, e),
				r = Math.ceil(o.speed / o.refreshInterval),
				l = (o.to - o.from) / r,
				f = this,
				i = t(this),
				c = 0,
				s = o.from,
				d = i.data("countTo") || {};
			i.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(a, o.refreshInterval), n(s)
		})
	}, t.fn.countTo.defaults = {
		from: 0,
		to: 0,
		speed: 1e3,
		refreshInterval: 100,
		decimals: 0,
		formatter: e,
		onUpdate: null,
		onComplete: null
	}
}(jQuery);


// /* -----------------------------------------------
// /* Author : Vincent Garreau  - vincentgarreau.com
// /* MIT license: http://opensource.org/licenses/MIT
// /* Demo / Generator : vincentgarreau.com/particles.js
// /* GitHub : github.com/VincentGarreau/particles.js
// /* How to use? : Check the GitHub README
// /* v2.0.0
// /* ----------------------------------------------- */
// function hexToRgb(e){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,function(e,a,t,i){return a+a+t+t+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,a,t){return Math.min(Math.max(e,a),t)}function isInArray(e,a){return a.indexOf(e)>-1}var pJS=function(e,a){var t=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:t,w:t.offsetWidth,h:t.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;a&&Object.deepExtend(i,a),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(e,a,t){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*i.canvas.w,this.y=t?t.y:Math.random()*i.canvas.h,this.x>i.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>i.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(i.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}i.particles.move.straight?(this.vx=n.x,this.vy=n.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=i.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=i.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==i.tmp.img_type&&void 0!=i.tmp.source_svg&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){function e(){i.canvas.ctx.drawImage(r,a.x-t,a.y-t,2*t,2*t/a.img.ratio)}var a=this;if(void 0!=a.radius_bubble)var t=a.radius_bubble;else var t=a.radius;if(void 0!=a.opacity_bubble)var s=a.opacity_bubble;else var s=a.opacity;if(a.color.rgb)var n="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+s+")";else var n="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+s+")";switch(i.canvas.ctx.fillStyle=n,i.canvas.ctx.beginPath(),a.shape){case"circle":i.canvas.ctx.arc(a.x,a.y,t,0,2*Math.PI,!1);break;case"edge":i.canvas.ctx.rect(a.x-t,a.y-t,2*t,2*t);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t,a.y+t/1.66,2*t,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t/(i.particles.shape.polygon.nb_sides/3.5),a.y-t/.76,2.66*t/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,a.x-2*t/(i.particles.shape.polygon.nb_sides/4),a.y-t/1.52,2*t*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==i.tmp.img_type)var r=a.img.obj;else var r=i.tmp.img_obj;r&&e()}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var e=0;e<i.particles.number.value;e++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];if(i.particles.move.enable){var t=i.particles.move.speed/2;a.x+=a.vx*t,a.y+=a.vy*t}if(i.particles.opacity.anim.enable&&(1==a.opacity_status?(a.opacity>=i.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=i.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),i.particles.size.anim.enable&&(1==a.size_status?(a.radius>=i.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=i.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),"bounce"==i.particles.move.out_mode)var s={x_left:a.radius,x_right:i.canvas.w,y_top:a.radius,y_bottom:i.canvas.h};else var s={x_left:-a.radius,x_right:i.canvas.w+a.radius,y_top:-a.radius,y_bottom:i.canvas.h+a.radius};switch(a.x-a.radius>i.canvas.w?(a.x=s.x_left,a.y=Math.random()*i.canvas.h):a.x+a.radius<0&&(a.x=s.x_right,a.y=Math.random()*i.canvas.h),a.y-a.radius>i.canvas.h?(a.y=s.y_top,a.x=Math.random()*i.canvas.w):a.y+a.radius<0&&(a.y=s.y_bottom,a.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":a.x+a.radius>i.canvas.w?a.vx=-a.vx:a.x-a.radius<0&&(a.vx=-a.vx),a.y+a.radius>i.canvas.h?a.vy=-a.vy:a.y-a.radius<0&&(a.vy=-a.vy)}if(isInArray("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(a),(isInArray("bubble",i.interactivity.events.onhover.mode)||isInArray("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(a),(isInArray("repulse",i.interactivity.events.onhover.mode)||isInArray("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(a),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var n=e+1;n<i.particles.array.length;n++){var r=i.particles.array[n];i.particles.line_linked.enable&&i.fn.interact.linkParticles(a,r),i.particles.move.attract.enable&&i.fn.interact.attractParticles(a,r),i.particles.move.bounce&&i.fn.interact.bounceParticles(a,r)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];a.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=i.particles.line_linked.opacity-n/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(r>0){var c=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(a.x,a.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=t/(1e3*i.particles.move.attract.rotateX),c=s/(1e3*i.particles.move.attract.rotateY);e.vx-=r,e.vy-=c,a.vx+=r,a.vy+=c}},i.fn.interact.bounceParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y,s=Math.sqrt(t*t+i*i),n=e.radius+a.radius;n>=s&&(e.vx=-e.vx,e.vy=-e.vy,a.vx=-a.vx,a.vy=-a.vy)},i.fn.modes.pushParticles=function(e,a){i.tmp.pushing=!0;for(var t=0;e>t;t++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:a?a.pos_x:Math.random()*i.canvas.w,y:a?a.pos_y:Math.random()*i.canvas.h})),t==e-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(e){i.particles.array.splice(0,e),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(e){function a(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function t(a,t,s,n,c){if(a!=t)if(i.tmp.bubble_duration_end){if(void 0!=s){var o=n-p*(n-a)/i.interactivity.modes.bubble.duration,l=a-o;d=a+l,"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else if(r<=i.interactivity.modes.bubble.distance){if(void 0!=s)var v=s;else var v=n;if(v!=a){var d=n-p*(n-a)/i.interactivity.modes.bubble.duration;"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else"size"==c&&(e.radius_bubble=void 0),"opacity"==c&&(e.opacity_bubble=void 0)}if(i.interactivity.events.onhover.enable&&isInArray("bubble",i.interactivity.events.onhover.mode)){var s=e.x-i.interactivity.mouse.pos_x,n=e.y-i.interactivity.mouse.pos_y,r=Math.sqrt(s*s+n*n),c=1-r/i.interactivity.modes.bubble.distance;if(r<=i.interactivity.modes.bubble.distance){if(c>=0&&"mousemove"==i.interactivity.status){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var o=e.radius+i.interactivity.modes.bubble.size*c;o>=0&&(e.radius_bubble=o)}else{var l=e.radius-i.interactivity.modes.bubble.size,o=e.radius-l*c;o>0?e.radius_bubble=o:e.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var v=i.interactivity.modes.bubble.opacity*c;v>e.opacity&&v<=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{var v=e.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;v<e.opacity&&v>=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else a();"mouseleave"==i.interactivity.status&&a()}else if(i.interactivity.events.onclick.enable&&isInArray("bubble",i.interactivity.events.onclick.mode)){if(i.tmp.bubble_clicking){var s=e.x-i.interactivity.mouse.click_pos_x,n=e.y-i.interactivity.mouse.click_pos_y,r=Math.sqrt(s*s+n*n),p=((new Date).getTime()-i.interactivity.mouse.click_time)/1e3;p>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),p>2*i.interactivity.modes.bubble.duration&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(t(i.interactivity.modes.bubble.size,i.particles.size.value,e.radius_bubble,e.radius,"size"),t(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(e){function a(){var a=Math.atan2(d,p);if(e.vx=u*Math.cos(a),e.vy=u*Math.sin(a),"bounce"==i.particles.move.out_mode){var t={x:e.x+e.vx,y:e.y+e.vy};t.x+e.radius>i.canvas.w?e.vx=-e.vx:t.x-e.radius<0&&(e.vx=-e.vx),t.y+e.radius>i.canvas.h?e.vy=-e.vy:t.y-e.radius<0&&(e.vy=-e.vy)}}if(i.interactivity.events.onhover.enable&&isInArray("repulse",i.interactivity.events.onhover.mode)&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,s=e.y-i.interactivity.mouse.pos_y,n=Math.sqrt(t*t+s*s),r={x:t/n,y:s/n},c=i.interactivity.modes.repulse.distance,o=100,l=clamp(1/c*(-1*Math.pow(n/c,2)+1)*c*o,0,50),v={x:e.x+r.x*l,y:e.y+r.y*l};"bounce"==i.particles.move.out_mode?(v.x-e.radius>0&&v.x+e.radius<i.canvas.w&&(e.x=v.x),v.y-e.radius>0&&v.y+e.radius<i.canvas.h&&(e.y=v.y)):(e.x=v.x,e.y=v.y)}else if(i.interactivity.events.onclick.enable&&isInArray("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){var c=Math.pow(i.interactivity.modes.repulse.distance/6,3),p=i.interactivity.mouse.click_pos_x-e.x,d=i.interactivity.mouse.click_pos_y-e.y,m=p*p+d*d,u=-c/m*1;c>=m&&a()}else 0==i.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},i.fn.modes.grabParticle=function(e){if(i.interactivity.events.onhover.enable&&"mousemove"==i.interactivity.status){var a=e.x-i.interactivity.mouse.pos_x,t=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(a*a+t*t);if(s<=i.interactivity.modes.grab.distance){var n=i.interactivity.modes.grab.line_linked.opacity-s/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(n>0){var r=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){"window"==i.interactivity.detect_on?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(e){if(i.interactivity.el==window)var a=e.clientX,t=e.clientY;else var a=e.offsetX||e.clientX,t=e.offsetY||e.clientY;i.interactivity.mouse.pos_x=a,i.interactivity.mouse.pos_y=t,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(e){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=(new Date).getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):1==i.interactivity.modes.push.particles_nb?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},1e3*i.interactivity.modes.repulse.duration)}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var e=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(e/=2*i.canvas.pxratio);var a=e*i.particles.number.value/i.particles.number.density.value_area,t=i.particles.array.length-a;0>t?i.fn.modes.pushParticles(Math.abs(t)):i.fn.modes.removeParticles(t)}},i.fn.vendors.checkOverlap=function(e,a){for(var t=0;t<i.particles.array.length;t++){var s=i.particles.array[t],n=e.x-s.x,r=e.y-s.y,c=Math.sqrt(n*n+r*r);c<=e.radius+s.radius&&(e.x=a?a.x:Math.random()*i.canvas.w,e.y=a?a.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(e))}},i.fn.vendors.createSvgImg=function(e){var a=i.tmp.source_svg,t=/#([0-9A-F]{3,6})/gi,s=a.replace(t,function(a,t,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(n),o=new Image;o.addEventListener("load",function(){e.img.obj=o,e.img.loaded=!0,r.revokeObjectURL(c),i.tmp.count_svg++}),o.src=c},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),t.remove(),pJSDom=null},i.fn.vendors.drawShape=function(e,a,t,i,s,n){var r=s*n,c=s/n,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(a,t),e.moveTo(0,0);for(var v=0;r>v;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(e){if(i.tmp.img_error=void 0,""!=i.particles.shape.image.src)if("svg"==e){var a=new XMLHttpRequest;a.open("GET",i.particles.shape.image.src),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?(i.tmp.source_svg=e.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},a.send()}else{var t=new Image;t.addEventListener("load",function(){i.tmp.img_obj=t,i.fn.vendors.checkBeforeDraw()}),t.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):void 0!=i.tmp.img_obj?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type&&void 0==i.tmp.source_svg?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=hexToRgb(i.particles.line_linked.color)},i.fn.vendors.start=function(){isInArray("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(e,a){for(var t in a)a[t]&&a[t].constructor&&a[t].constructor===Object?(e[t]=e[t]||{},arguments.callee(e[t],a[t])):e[t]=a[t];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var t=document.getElementById(e),i="particles-js-canvas-el",s=t.getElementsByClassName(i);if(s.length)for(;s.length>0;)t.removeChild(s[0]);var n=document.createElement("canvas");n.className=i,n.style.width="100%",n.style.height="100%";var r=document.getElementById(e).appendChild(n);null!=r&&pJSDom.push(new pJS(e,a))},window.particlesJS.load=function(e,a,t){var i=new XMLHttpRequest;i.open("GET",a),i.onreadystatechange=function(a){if(4==i.readyState)if(200==i.status){var s=JSON.parse(a.currentTarget.response);window.particlesJS(e,s),t&&t()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};


// /* -----------------------------------------------
// /* How to use? : Check the GitHub README
// /* ----------------------------------------------- */

// particlesJS('particles-js',

//   {
//     "particles": {
//       "number": {
//         "value": 50,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#888"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#888"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 3,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 5,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#888",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 6,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true,
//     "config_demo": {
//       "hide_card": false,
//       "background_color": "#b61924",
//       "background_image": "",
//       "background_position": "50% 50%",
//       "background_repeat": "no-repeat",
//       "background_size": "cover"
//     }
//   }

// );