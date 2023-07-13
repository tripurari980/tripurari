var console, oldgs, punchgs, _gsScope;
if (function(n) {
        typeof define == "function" && define.amd && define.amd.jQuery ? define(["jquery"], n) : n(jQuery)
    }(function(n) {
        function ot(t) {
            return t && t.allowPageScroll === undefined && (t.swipe !== undefined || t.swipeStatus !== undefined) && (t.allowPageScroll = y), t.click !== undefined && t.tap === undefined && (t.tap = t.click), t || (t = {}), t = n.extend({}, n.fn.swipetp.defaults, t), this.each(function() {
                var r = n(this),
                    i = r.data(s);
                i || (i = new st(this, t), r.data(s, i))
            })
        }

        function st(ut, et) {
            function di(t) {
                if (!vu() && !(n(t.target).closest(et.excludedElements, ot).length > 0)) {
                    var r = t.originalEvent ? t.originalEvent : t,
                        f, u = r.touches,
                        e = u ? u[0] : r;
                    return (ht = rt, u ? ct = u.length : t.preventDefault(), at = 0, vt = null, bt = null, lt = 0, kt = 0, dt = 0, yt = 1, wt = 0, st = pu(), si = bu(), dr(), !u || ct === et.fingers || et.fingers === c || ui() ? (or(0, e), wi = ni(), ct == 2 && (or(1, u[1]), kt = dt = sr(st[0].start, st[1].start)), (et.swipeStatus || et.pinchStatus) && (f = pt(r, ht))) : f = !1, f === !1) ? (ht = i, pt(r, ht), f) : (et.hold && (ki = setTimeout(n.proxy(function() {
                        ot.trigger("hold", [r.target]), et.hold && (f = et.hold.call(ot, r, r.target))
                    }, this), et.longTapThreshold)), ai(!0), null)
                }
            }

            function gi(n) {
                var u = n.originalEvent ? n.originalEvent : n,
                    e, h;
                if (ht !== t && ht !== i && !gr()) {
                    var s, r = u.touches,
                        l = r ? r[0] : u,
                        f = nu(l);
                    hi = ni(), r && (ct = r.length), et.hold && clearTimeout(ki), ht = o, ct == 2 && (kt == 0 ? (or(1, r[1]), kt = dt = sr(st[0].start, st[1].start)) : (nu(r[1]), dt = sr(st[0].end, st[1].end), bt = du(st[0].end, st[1].end)), yt = ku(kt, dt), wt = Math.abs(kt - dt)), ct === et.fingers || et.fingers === c || !r || ui() ? (vt = tf(f.start, f.end), uu(n, vt), at = gu(f.start, f.end), lt = iu(), wu(vt, at), (et.swipeStatus || et.pinchStatus) && (s = pt(u, ht)), (!et.triggerOnTouchEnd || et.triggerOnTouchLeave) && (e = !0, et.triggerOnTouchLeave && (h = rf(this), e = uf(f.end, h)), !et.triggerOnTouchEnd && e ? ht = ir(o) : et.triggerOnTouchLeave && !e && (ht = ir(t)), (ht == i || ht == t) && pt(u, ht))) : (ht = i, pt(u, ht)), s === !1 && (ht = i, pt(u, ht))
                }
            }

            function nr(n) {
                var r = n.originalEvent ? n.originalEvent : n,
                    u = r.touches;
                return u && u.length ? (au(), !0) : (gr() && (ct = bi), hi = ni(), lt = iu(), ur() || !rr() ? (ht = i, pt(r, ht)) : et.triggerOnTouchEnd || et.triggerOnTouchEnd == !1 && ht === o ? (n.preventDefault(), ht = t, pt(r, ht)) : !et.triggerOnTouchEnd && br() ? (ht = t, ri(r, ht, p)) : ht === o && (ht = i, pt(r, ht)), ai(!1), null)
            }

            function ii() {
                ct = 0, hi = 0, wi = 0, kt = 0, dt = 0, yt = 1, dr(), ai(!1)
            }

            function tr(n) {
                var i = n.originalEvent ? n.originalEvent : n;
                et.triggerOnTouchLeave && (ht = ir(t), pt(i, ht))
            }

            function hr() {
                ot.unbind(ei, di), ot.unbind(oi, ii), ot.unbind(yi, gi), ot.unbind(pi, nr), ti && ot.unbind(ti, tr), ai(!1)
            }

            function ir(n) {
                var r = n,
                    f = cr(),
                    u = rr(),
                    e = ur();
                return !f || e ? r = i : u && n == o && (!et.triggerOnTouchEnd || et.triggerOnTouchLeave) ? r = t : !u && n == t && et.triggerOnTouchLeave && (r = i), r
            }

            function pt(n, r) {
                var u, f = n.touches;
                return yr() || fr() || ar() || ui() ? ((yr() || fr()) && (u = ri(n, r, g)), (ar() || ui()) && u !== !1 && (u = ri(n, r, nt))) : cu() && u !== !1 ? u = ri(n, r, tt) : lu() && u !== !1 ? u = ri(n, r, it) : hu() && u !== !1 && (u = ri(n, r, p)), r === i && ii(n), r === t && (f ? f.length || ii(n) : ii(n)), u
            }

            function ri(o, s, h) {
                var c;
                if (h == g) {
                    if (ot.trigger("swipeStatus", [s, vt || null, at || 0, lt || 0, ct, st]), et.swipeStatus && (c = et.swipeStatus.call(ot, o, s, vt || null, at || 0, lt || 0, ct, st), c === !1)) return !1;
                    if (s == t && vr()) {
                        if (ot.trigger("swipe", [vt, at, lt, ct, st]), et.swipe && (c = et.swipe.call(ot, o, vt, at, lt, ct, st), c === !1)) return !1;
                        switch (vt) {
                            case r:
                                ot.trigger("swipeLeft", [vt, at, lt, ct, st]), et.swipeLeft && (c = et.swipeLeft.call(ot, o, vt, at, lt, ct, st));
                                break;
                            case u:
                                ot.trigger("swipeRight", [vt, at, lt, ct, st]), et.swipeRight && (c = et.swipeRight.call(ot, o, vt, at, lt, ct, st));
                                break;
                            case f:
                                ot.trigger("swipeUp", [vt, at, lt, ct, st]), et.swipeUp && (c = et.swipeUp.call(ot, o, vt, at, lt, ct, st));
                                break;
                            case e:
                                ot.trigger("swipeDown", [vt, at, lt, ct, st]), et.swipeDown && (c = et.swipeDown.call(ot, o, vt, at, lt, ct, st))
                        }
                    }
                }
                if (h == nt) {
                    if (ot.trigger("pinchStatus", [s, bt || null, wt || 0, lt || 0, ct, yt, st]), et.pinchStatus && (c = et.pinchStatus.call(ot, o, s, bt || null, wt || 0, lt || 0, ct, yt, st), c === !1)) return !1;
                    if (s == t && lr()) switch (bt) {
                        case a:
                            ot.trigger("pinchIn", [bt || null, wt || 0, lt || 0, ct, yt, st]), et.pinchIn && (c = et.pinchIn.call(ot, o, bt || null, wt || 0, lt || 0, ct, yt, st));
                            break;
                        case v:
                            ot.trigger("pinchOut", [bt || null, wt || 0, lt || 0, ct, yt, st]), et.pinchOut && (c = et.pinchOut.call(ot, o, bt || null, wt || 0, lt || 0, ct, yt, st))
                    }
                }
                return h == p ? (s === i || s === t) && (clearTimeout(li), clearTimeout(ki), er() && !eu() ? (gt = ni(), li = setTimeout(n.proxy(function() {
                    gt = null, ot.trigger("tap", [o.target]), et.tap && (c = et.tap.call(ot, o, o.target))
                }, this), et.doubleTapThreshold)) : (gt = null, ot.trigger("tap", [o.target]), et.tap && (c = et.tap.call(ot, o, o.target)))) : h == tt ? (s === i || s === t) && (clearTimeout(li), gt = null, ot.trigger("doubletap", [o.target]), et.doubleTap && (c = et.doubleTap.call(ot, o, o.target))) : h == it && (s === i || s === t) && (clearTimeout(li), gt = null, ot.trigger("longtap", [o.target]), et.longTap && (c = et.longTap.call(ot, o, o.target))), c
            }

            function rr() {
                var n = !0;
                return et.threshold !== null && (n = at >= et.threshold), n
            }

            function ur() {
                var n = !1;
                return et.cancelThreshold !== null && vt !== null && (n = tu(vt) - at >= et.cancelThreshold), n
            }

            function ru() {
                return et.pinchThreshold !== null ? wt >= et.pinchThreshold : !0
            }

            function cr() {
                var n;
                return n = et.maxTimeThreshold ? lt >= et.maxTimeThreshold ? !1 : !0 : !0
            }

            function uu(n, t) {
                if (et.preventDefaultEvents !== !1)
                    if (et.allowPageScroll === y) n.preventDefault();
                    else {
                        var i = et.allowPageScroll === d;
                        switch (t) {
                            case r:
                                (et.swipeLeft && i || !i && et.allowPageScroll != w) && n.preventDefault();
                                break;
                            case u:
                                (et.swipeRight && i || !i && et.allowPageScroll != w) && n.preventDefault();
                                break;
                            case f:
                                (et.swipeUp && i || !i && et.allowPageScroll != b) && n.preventDefault();
                                break;
                            case e:
                                (et.swipeDown && i || !i && et.allowPageScroll != b) && n.preventDefault()
                        }
                    }
            }

            function lr() {
                var n = pr(),
                    t = wr(),
                    i = ru();
                return n && t && i
            }

            function ui() {
                return !!(et.pinchStatus || et.pinchIn || et.pinchOut)
            }

            function ar() {
                return !!(lr() && ui())
            }

            function vr() {
                var n = cr(),
                    t = rr(),
                    i = pr(),
                    r = wr(),
                    u = ur();
                return !u && r && i && t && n
            }

            function fr() {
                return !!(et.swipe || et.swipeStatus || et.swipeLeft || et.swipeRight || et.swipeUp || et.swipeDown)
            }

            function yr() {
                return !!(vr() && fr())
            }

            function pr() {
                return ct === et.fingers || et.fingers === c || !k
            }

            function wr() {
                return st[0].end.x !== 0
            }

            function br() {
                return !!et.tap
            }

            function er() {
                return !!et.doubleTap
            }

            function fu() {
                return !!et.longTap
            }

            function kr() {
                if (gt == null) return !1;
                var n = ni();
                return er() && n - gt <= et.doubleTapThreshold
            }

            function eu() {
                return kr()
            }

            function ou() {
                return (ct === 1 || !k) && (isNaN(at) || at < et.threshold)
            }

            function su() {
                return lt > et.longTapThreshold && at < ft
            }

            function hu() {
                return !!(ou() && br())
            }

            function cu() {
                return !!(kr() && er())
            }

            function lu() {
                return !!(su() && fu())
            }

            function au() {
                ci = ni(), bi = event.touches.length + 1
            }

            function dr() {
                ci = 0, bi = 0
            }

            function gr() {
                var n = !1,
                    t;
                return ci && (t = ni() - ci, t <= et.fingerReleaseThreshold && (n = !0)), n
            }

            function vu() {
                return !!(ot.data(s + "_intouch") === !0)
            }

            function ai(n) {
                n === !0 ? (ot.bind(yi, gi), ot.bind(pi, nr), ti && ot.bind(ti, tr)) : (ot.unbind(yi, gi, !1), ot.unbind(pi, nr, !1), ti && ot.unbind(ti, tr, !1)), ot.data(s + "_intouch", n === !0)
            }

            function or(n, t) {
                var i = t.identifier !== undefined ? t.identifier : 0;
                return st[n].identifier = i, st[n].start.x = st[n].end.x = t.pageX || t.clientX, st[n].start.y = st[n].end.y = t.pageY || t.clientY, st[n]
            }

            function nu(n) {
                var i = n.identifier !== undefined ? n.identifier : 0,
                    t = yu(i);
                return t.end.x = n.pageX || n.clientX, t.end.y = n.pageY || n.clientY, t
            }

            function yu(n) {
                for (var t = 0; t < st.length; t++)
                    if (st[t].identifier == n) return st[t]
            }

            function pu() {
                for (var t = [], n = 0; n <= 5; n++) t.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
                return t
            }

            function wu(n, t) {
                t = Math.max(t, tu(n)), si[n].distance = t
            }

            function tu(n) {
                return si[n] ? si[n].distance : undefined
            }

            function bu() {
                var n = {};
                return n[r] = vi(r), n[u] = vi(u), n[f] = vi(f), n[e] = vi(e), n
            }

            function vi(n) {
                return {
                    direction: n,
                    distance: 0
                }
            }

            function iu() {
                return hi - wi
            }

            function sr(n, t) {
                var i = Math.abs(n.x - t.x),
                    r = Math.abs(n.y - t.y);
                return Math.round(Math.sqrt(i * i + r * r))
            }

            function ku(n, t) {
                var i = t / n * 1;
                return i.toFixed(2)
            }

            function du() {
                return yt < 1 ? v : a
            }

            function gu(n, t) {
                return Math.round(Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)))
            }

            function nf(n, t) {
                var r = n.x - t.x,
                    u = t.y - n.y,
                    f = Math.atan2(u, r),
                    i = Math.round(f * 180 / Math.PI);
                return i < 0 && (i = 360 - Math.abs(i)), i
            }

            function tf(n, t) {
                var i = nf(n, t);
                return i <= 45 && i >= 0 ? r : i <= 360 && i >= 315 ? r : i >= 135 && i <= 225 ? u : i > 45 && i < 135 ? e : f
            }

            function ni() {
                var n = new Date;
                return n.getTime()
            }

            function rf(t) {
                t = n(t);
                var i = t.offset();
                return {
                    left: i.left,
                    right: i.left + t.outerWidth(),
                    top: i.top,
                    bottom: i.top + t.outerHeight()
                }
            }

            function uf(n, t) {
                return n.x > t.left && n.x < t.right && n.y > t.top && n.y < t.bottom
            }
            var fi = k || h || !et.fallbackToMouseEvents,
                ei = fi ? h ? l ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                yi = fi ? h ? l ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                pi = fi ? h ? l ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                ti = fi ? null : "mouseleave",
                oi = h ? l ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                at = 0,
                vt = null,
                lt = 0,
                kt = 0,
                dt = 0,
                yt = 1,
                wt = 0,
                bt = 0,
                si = null,
                ot = n(ut),
                ht = "start",
                ct = 0,
                st = null,
                wi = 0,
                hi = 0,
                ci = 0,
                bi = 0,
                gt = 0,
                li = null,
                ki = null;
            try {
                ot.bind(ei, di), ot.bind(oi, ii)
            } catch (ff) {
                n.error("events not supported " + ei + "," + oi + " on jQuery.swipetp")
            }
            this.enable = function() {
                return ot.bind(ei, di), ot.bind(oi, ii), ot
            }, this.disable = function() {
                return hr(), ot
            }, this.destroy = function() {
                hr(), ot.data(s, null), ot = null
            }, this.option = function(t, i) {
                if (et[t] !== undefined) {
                    if (i === undefined) return et[t];
                    et[t] = i
                } else n.error("Option " + t + " does not exist on jQuery.swipetp.options");
                return null
            }
        }
        var ut = "1.6.9",
            r = "left",
            u = "right",
            f = "up",
            e = "down",
            a = "in",
            v = "out",
            y = "none",
            d = "auto",
            g = "swipe",
            nt = "pinch",
            p = "tap",
            tt = "doubletap",
            it = "longtap",
            ht = "hold",
            w = "horizontal",
            b = "vertical",
            c = "all",
            ft = 10,
            rt = "start",
            o = "move",
            t = "end",
            i = "cancel",
            k = "ontouchstart" in window,
            l = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
            h = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            s = "TouchSwipe",
            et = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "label, button, input, select, textarea, a, .noSwipe",
                preventDefaultEvents: !0
            };
        n.fn.swipetp = function(t) {
            var r = n(this),
                i = r.data(s);
            if (i && typeof t == "string") {
                if (i[t]) return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
                n.error("Method " + t + " does not exist on jQuery.swipetp")
            } else if (!i && (typeof t == "object" || !t)) return ot.apply(this, arguments);
            return r
        }, n.fn.swipetp.version = ut, n.fn.swipetp.defaults = et, n.fn.swipetp.phases = {
            PHASE_START: rt,
            PHASE_MOVE: o,
            PHASE_END: t,
            PHASE_CANCEL: i
        }, n.fn.swipetp.directions = {
            LEFT: r,
            RIGHT: u,
            UP: f,
            DOWN: e,
            IN: a,
            OUT: v
        }, n.fn.swipetp.pageScroll = {
            NONE: y,
            HORIZONTAL: w,
            VERTICAL: b,
            AUTO: d
        }, n.fn.swipetp.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: c
        }
    }), typeof console == "undefined" && (console = {}, console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {}), window.tplogs == !0) try {
    console.groupCollapsed("ThemePunch GreenSocks Logs")
} catch (e) {}
if (oldgs = window.GreenSockGlobals, oldgs_queue = window._gsQueue, punchgs = window.GreenSockGlobals = {}, window.tplogs == !0) try {
        console.info("Build GreenSock SandBox for ThemePunch Plugins"), console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin")
    } catch (e) {}(function(n, t) {
        "use strict";
        var ot = n.GreenSockGlobals = n.GreenSockGlobals || n,
            ct, o, at, ft, c;
        if (!ot.TweenLite) {
            var s, f, i, u, h, kt = function(n) {
                    for (var r = n.split("."), i = ot, t = 0; r.length > t; t++) i[r[t]] = i = i[r[t]] || {};
                    return i
                },
                y = kt("com.greensock"),
                e = 1e-10,
                dt = function(n) {
                    for (var i = [], r = n.length, t = 0; t !== r; i.push(n[t++]));
                    return i
                },
                gt = function() {},
                d = function() {
                    var n = Object.prototype.toString,
                        t = n.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && n.call(i) === t)
                    }
                }(),
                g = {},
                ni = function(i, r, u, f) {
                    this.sc = g[i] ? g[i].sc : [], g[i] = this, this.gsClass = null, this.func = u;
                    var e = [];
                    this.check = function(o) {
                        for (var c, l, a, h, v, s = r.length, y = s; --s > -1;)(c = g[r[s]] || new ni(r[s], [])).gsClass ? (e[s] = c.gsClass, y--) : o && c.sc.push(this);
                        if (0 === y && u)
                            for (l = ("com.greensock." + i).split("."), a = l.pop(), h = kt(l.join("."))[a] = this.gsClass = u.apply(u, e), f && (ot[a] = h, v = "undefined" != typeof module && module.exports, !v && "function" == typeof define && define.amd ? define((n.GreenSockAMDPath ? n.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function() {
                                    return h
                                }) : i === t && v && (module.exports = h)), s = 0; this.sc.length > s; s++) this.sc[s].check()
                    }, this.check(!0)
                },
                st = n._gsDefine = function(n, t, i, r) {
                    return new ni(n, t, i, r)
                },
                l = y._class = function(n, t, i) {
                    return t = t || function() {}, st(n, [], function() {
                        return t
                    }, i), t
                };
            st.globals = ot;
            var ti = [0, 0, 1, 1],
                ci = [],
                a = l("easing.Ease", function(n, t, i, r) {
                    this._func = n, this._type = i || 0, this._power = r || 0, this._params = t ? ti.concat(t) : ti
                }, !0),
                tt = a.map = {},
                ht = a.register = function(n, t, i, r) {
                    for (var o, u, e, f, s = t.split(","), h = s.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (u = s[h], o = r ? l("easing." + u, null, !0) : y.easing[u] || {}, e = c.length; --e > -1;) f = c[e], tt[u + "." + f] = tt[f + u] = o[f] = n.getRatio ? n : n[f] || new n
                };
            for (i = a.prototype, i._calcEnd = !1, i.getRatio = function(n) {
                    if (this._func) return this._params[0] = n, this._func.apply(null, this._params);
                    var i = this._type,
                        r = this._power,
                        t = 1 === i ? 1 - n : 2 === i ? n : .5 > n ? 2 * n : 2 * (1 - n);
                    return 1 === r ? t *= t : 2 === r ? t *= t * t : 3 === r ? t *= t * t * t : 4 === r && (t *= t * t * t * t), 1 === i ? 1 - t : 2 === i ? t : .5 > n ? t / 2 : 1 - t / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], f = s.length; --f > -1;) i = s[f] + ",Power" + f, ht(new a(null, null, 1, f), i, "easeOut", !0), ht(new a(null, null, 2, f), i, "easeIn" + (0 === f ? ",easeNone" : "")), ht(new a(null, null, 3, f), i, "easeInOut");
            tt.linear = y.easing.Linear.easeIn, tt.swing = y.easing.Quad.easeInOut, ct = l("events.EventDispatcher", function(n) {
                this._listeners = {}, this._eventTarget = n || this
            }), i = ct.prototype, i.addEventListener = function(n, t, i, r, f) {
                f = f || 0;
                var s, o, e = this._listeners[n],
                    c = 0;
                for (null == e && (this._listeners[n] = e = []), o = e.length; --o > -1;) s = e[o], s.c === t && s.s === i ? e.splice(o, 1) : 0 === c && f > s.pr && (c = o + 1);
                e.splice(c, 0, {
                    c: t,
                    s: i,
                    up: r,
                    pr: f
                }), this !== u || h || u.wake()
            }, i.removeEventListener = function(n, t) {
                var i, r = this._listeners[n];
                if (r)
                    for (i = r.length; --i > -1;)
                        if (r[i].c === t) return r.splice(i, 1), void 0
            }, i.dispatchEvent = function(n) {
                var r, i, t, u = this._listeners[n];
                if (u)
                    for (r = u.length, i = this._eventTarget; --r > -1;) t = u[r], t && (t.up ? t.c.call(t.s || i, {
                        type: n,
                        target: i
                    }) : t.c.call(t.s || i))
            };
            var it = n.requestAnimationFrame,
                lt = n.cancelAnimationFrame,
                rt = Date.now || function() {
                    return +new Date
                },
                ut = rt();
            for (s = ["ms", "moz", "webkit", "o"], f = s.length; --f > -1 && !it;) it = n[s[f] + "RequestAnimationFrame"], lt = n[s[f] + "CancelAnimationFrame"] || n[s[f] + "CancelRequestAnimationFrame"];
            l("Ticker", function(n, t) {
                var r, a, f, s, c, i = this,
                    y = rt(),
                    o = t !== !1 && it,
                    l = 500,
                    p = 33,
                    w = "tick",
                    v = function(n) {
                        var t, e, u = rt() - ut;
                        u > l && (y += u - p), ut += u, i.time = (ut - y) / 1e3, t = i.time - c, (!r || t > 0 || n === !0) && (i.frame++, c += t + (t >= s ? .004 : s - t), e = !0), n !== !0 && (f = a(v)), e && i.dispatchEvent(w)
                    };
                ct.call(i), i.time = i.frame = 0, i.tick = function() {
                    v(!0)
                }, i.lagSmoothing = function(n, t) {
                    l = n || 1 / e, p = Math.min(t, l, 0)
                }, i.sleep = function() {
                    null != f && (o && lt ? lt(f) : clearTimeout(f), a = gt, f = null, i === u && (h = !1))
                }, i.wake = function() {
                    null !== f ? i.sleep() : i.frame > 10 && (ut = rt() - l + 5), a = 0 === r ? gt : o && it ? it : function(n) {
                        return setTimeout(n, 0 | 1e3 * (c - i.time) + 1)
                    }, i === u && (h = !0), v(2)
                }, i.fps = function(n) {
                    return arguments.length ? (r = n, s = 1 / (r || 60), c = this.time + s, i.wake(), void 0) : r
                }, i.useRAF = function(n) {
                    return arguments.length ? (i.sleep(), o = n, i.fps(r), void 0) : o
                }, i.fps(n), setTimeout(function() {
                    o && 5 > i.frame && i.useRAF(!1)
                }, 1500)
            }), i = y.Ticker.prototype = new y.events.EventDispatcher, i.constructor = y.Ticker, o = l("core.Animation", function(n, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = n || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, p) {
                    h || u.wake();
                    var i = this.vars.useFrames ? k : p;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            }), u = o.ticker = new y.Ticker, i = o.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1, at = function() {
                h && rt() - ut > 2e3 && u.wake(), setTimeout(at, 2e3)
            }, at(), i.play = function(n, t) {
                return null != n && this.seek(n, t), this.reversed(!1).paused(!1)
            }, i.pause = function(n, t) {
                return null != n && this.seek(n, t), this.paused(!0)
            }, i.resume = function(n, t) {
                return null != n && this.seek(n, t), this.paused(!1)
            }, i.seek = function(n, t) {
                return this.totalTime(Number(n), t !== !1)
            }, i.restart = function(n, t) {
                return this.reversed(!1).paused(!1).totalTime(n ? -this._delay : 0, t !== !1, !0)
            }, i.reverse = function(n, t) {
                return null != n && this.seek(n || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, i.render = function() {}, i.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, i.isActive = function() {
                var t, n = this._timeline,
                    i = this._startTime;
                return !n || !this._gc && !this._paused && n.isActive() && (t = n.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, i._enabled = function(n, t) {
                return h || u.wake(), this._gc = !n, this._active = this.isActive(), t !== !0 && (n && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !n && this.timeline && this._timeline._remove(this, !0)), !1
            }, i._kill = function() {
                return this._enabled(!1, !1)
            }, i.kill = function(n, t) {
                return this._kill(n, t), this
            }, i._uncache = function(n) {
                for (var t = n ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, i._swapSelfInParams = function(n) {
                for (var t = n.length, i = n.concat(); --t > -1;) "{self}" === n[t] && (i[t] = this);
                return i
            }, i._callback = function(n) {
                var t = this.vars;
                t[n].apply(t[n + "Scope"] || t.callbackScope || this, t[n + "Params"] || ci)
            }, i.eventCallback = function(n, t, i, r) {
                if ("on" === (n || "").substr(0, 2)) {
                    var u = this.vars;
                    if (1 === arguments.length) return u[n];
                    null == t ? delete u[n] : (u[n] = t, u[n + "Params"] = d(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, u[n + "Scope"] = r), "onUpdate" === n && (this._onUpdate = t)
                }
                return this
            }, i.delay = function(n) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + n - this._delay), this._delay = n, this) : this._delay
            }, i.duration = function(n) {
                return arguments.length ? (this._duration = this._totalDuration = n, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== n && this.totalTime(this._totalTime * (n / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, i.totalDuration = function(n) {
                return this._dirty = !1, arguments.length ? this.duration(n) : this._totalDuration
            }, i.time = function(n, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(n > this._duration ? this._duration : n, t)) : this._time
            }, i.totalTime = function(n, t, i) {
                if (h || u.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > n && !i && (n += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var f = this._totalDuration,
                            r = this._timeline;
                        if (n > f && !i && (n = f), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? f - n : n) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== n || 0 === this._duration) && (v.length && nt(), this.render(n, t, !1), v.length && nt())
                }
                return this
            }, i.progress = i.totalProgress = function(n, t) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * n, t) : i ? this._time / i : this.ratio
            }, i.startTime = function(n) {
                return arguments.length ? (n !== this._startTime && (this._startTime = n, this.timeline && this.timeline._sortChildren && this.timeline.add(this, n - this._delay)), this) : this._startTime
            }, i.endTime = function(n) {
                return this._startTime + (0 != n ? this.totalDuration() : this.duration()) / this._timeScale
            }, i.timeScale = function(n) {
                if (!arguments.length) return this._timeScale;
                if (n = n || e, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        i = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / n
                }
                return this._timeScale = n, this._uncache(!1)
            }, i.reversed = function(n) {
                return arguments.length ? (n != this._reversed && (this._reversed = n, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, i.paused = function(n) {
                if (!arguments.length) return this._paused;
                var t, r, i = this._timeline;
                return n != this._paused && i && (h || n || u.wake(), t = i.rawTime(), r = t - this._pauseTime, !n && i.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = n ? t : null, this._paused = n, this._active = this.isActive(), !n && 0 !== r && this._initted && this.duration() && (t = i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !n && this._enabled(!0, !1), this
            }, ft = l("core.SimpleTimeline", function(n) {
                o.call(this, 0, n), this.autoRemoveChildren = this.smoothChildTiming = !0
            }), i = ft.prototype = new o, i.constructor = ft, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function(n, t) {
                var i, r;
                if (n._startTime = Number(t || 0) + n._delay, n._paused && this !== n._timeline && (n._pauseTime = n._startTime + (this.rawTime() - n._startTime) / n._timeScale), n.timeline && n.timeline._remove(n, !0), n.timeline = n._timeline = this, n._gc && n._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (r = n._startTime; i && i._startTime > r;) i = i._prev;
                return i ? (n._next = i._next, i._next = n) : (n._next = this._first, this._first = n), n._next ? n._next._prev = n : this._last = n, n._prev = i, this._recent = n, this._timeline && this._uncache(!0), this
            }, i._remove = function(n, t) {
                return n.timeline === this && (t || n._enabled(!1, !0), n._prev ? n._prev._next = n._next : this._first === n && (this._first = n._next), n._next ? n._next._prev = n._prev : this._last === n && (this._last = n._prev), n._next = n._prev = n.timeline = null, n === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, i.render = function(n, t, i) {
                var u, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = n; r;) u = r._next, (r._active || n >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)), r = u
            }, i.rawTime = function() {
                return h || u.wake(), this._totalTime
            };
            var r = l("TweenLite", function(t, i, u) {
                    if (o.call(this, i, u), this.render = r.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : r.selector(t) || t;
                    var s, f, h, l = t.jquery || t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType),
                        c = this.vars.overwrite;
                    if (this._overwrite = c = null == c ? ei[r.defaultOverwrite] : "number" == typeof c ? c >> 0 : ei[c], (l || t instanceof Array || t.push && d(t)) && "number" != typeof t[0])
                        for (this._targets = h = dt(t), this._propLookup = [], this._siblings = [], s = 0; h.length > s; s++) f = h[s], f ? "string" != typeof f ? f.length && f !== n && f[0] && (f[0] === n || f[0].nodeType && f[0].style && !f.nodeType) ? (h.splice(s--, 1), this._targets = h = h.concat(dt(f))) : (this._siblings[s] = et(f, this, !1), 1 === c && this._siblings[s].length > 1 && bt(f, this, null, 1, this._siblings[s])) : (f = h[s--] = r.selector(f), "string" == typeof f && h.splice(s + 1, 1)) : h.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === c && this._siblings.length > 1 && bt(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -e, this.render(-this._delay))
                }, !0),
                vt = function(t) {
                    return t && t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType)
                },
                li = function(n, t) {
                    var i, r = {};
                    for (i in n) wt[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!w[i] || w[i] && w[i]._autoCSS) || (r[i] = n[i], delete n[i]);
                    n.css = r
                };
            i = r.prototype = new o, i.constructor = r, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, r.version = "1.18.0", r.defaultEase = i._ease = new a(null, null, 1, 1), r.defaultOverwrite = "auto", r.ticker = u, r.autoSleep = 120, r.lagSmoothing = function(n, t) {
                u.lagSmoothing(n, t)
            }, r.selector = n.$ || n.jQuery || function(t) {
                var i = n.$ || n.jQuery;
                return i ? (r.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var v = [],
                yt = {},
                ii = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                ri = function(n) {
                    for (var i, t = this._firstPT, r = 1e-6; t;) i = t.blob ? n ? this.join("") : this.start : t.c * n + t.s, t.r ? i = Math.round(i) : r > i && i > -r && (i = 0), t.f ? t.fp ? t.t[t.p](t.fp, i) : t.t[t.p](i) : t.t[t.p] = i, t = t._next
                },
                ui = function(n, t, i, r) {
                    var l, v, a, e, y, c, f, u = [n, t],
                        s = 0,
                        o = "",
                        h = 0;
                    for (u.start = n, i && (i(u), n = u[0], t = u[1]), u.length = 0, l = n.match(ii) || [], v = t.match(ii) || [], r && (r._next = null, r.blob = 1, u._firstPT = r), y = v.length, e = 0; y > e; e++) f = v[e], c = t.substr(s, t.indexOf(f, s) - s), o += c || !e ? c : ",", s += c.length, h ? h = (h + 1) % 5 : "rgba(" === c.substr(-5) && (h = 1), f === l[e] || e >= l.length ? o += f : (o && (u.push(o), o = ""), a = parseFloat(l[e]), u.push(a), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: a,
                        c: ("=" === f.charAt(1) ? parseInt(f.charAt(0) + "1", 10) * parseFloat(f.substr(2)) : parseFloat(f) - a) || 0,
                        f: 0,
                        r: h && 4 > h
                    }), s += f.length;
                    return o += t.substr(s), o && u.push(o), u.setRatio = ri, u
                },
                fi = function(n, t, i, u, f, e, o, s) {
                    var v, l, c = "get" === i ? n[t] : i,
                        a = typeof n[t],
                        y = "string" == typeof u && "=" === u.charAt(1),
                        h = {
                            t: n,
                            p: t,
                            s: c,
                            f: "function" === a,
                            pg: 0,
                            n: f || t,
                            r: e,
                            pr: 0,
                            c: y ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - c || 0
                        };
                    return "number" !== a && ("function" === a && "get" === i && (l = t.indexOf("set") || "function" != typeof n["get" + t.substr(3)] ? t : "get" + t.substr(3), h.s = c = o ? n[l](o) : n[l]()), "string" == typeof c && (o || isNaN(c)) ? (h.fp = o, v = ui(c, u, s || r.defaultStringFilter, h), h = {
                        t: v,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: f || t,
                        pr: 0
                    }) : y || (h.c = parseFloat(u) - parseFloat(c) || 0)), h.c ? ((h._next = this._firstPT) && (h._next._prev = h), this._firstPT = h, h) : void 0
                },
                pt = r._internals = {
                    isArray: d,
                    isSelector: vt,
                    lazyTweens: v,
                    blobDif: ui
                },
                w = r._plugins = {},
                b = pt.tweenLookup = {},
                ai = 0,
                wt = pt.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1
                },
                ei = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                k = o._rootFramesTimeline = new ft,
                p = o._rootTimeline = new ft,
                oi = 30,
                nt = pt.lazyRender = function() {
                    var n, t = v.length;
                    for (yt = {}; --t > -1;) n = v[t], n && n._lazy !== !1 && (n.render(n._lazy[0], n._lazy[1], !0), n._lazy = !1);
                    v.length = 0
                };
            p._startTime = u.time, k._startTime = u.frame, p._active = k._active = !0, setTimeout(nt, 1), o._updateRoot = r.render = function() {
                var i, t, n;
                if (v.length && nt(), p.render((u.time - p._startTime) * p._timeScale, !1, !1), k.render((u.frame - k._startTime) * k._timeScale, !1, !1), v.length && nt(), u.frame >= oi) {
                    oi = u.frame + (parseInt(r.autoSleep, 10) || 120);
                    for (n in b) {
                        for (t = b[n].tweens, i = t.length; --i > -1;) t[i]._gc && t.splice(i, 1);
                        0 === t.length && delete b[n]
                    }
                    if (n = p._first, (!n || n._paused) && r.autoSleep && !k._first && 1 === u._listeners.tick.length) {
                        for (; n && n._paused;) n = n._next;
                        n || u.sleep()
                    }
                }
            }, u.addEventListener("tick", o._updateRoot);
            var et = function(n, t, i) {
                    var r, f, u = n._gsTweenID;
                    if (b[u || (n._gsTweenID = u = "t" + ai++)] || (b[u] = {
                            target: n,
                            tweens: []
                        }), t && (r = b[u].tweens, r[f = r.length] = t, i))
                        for (; --f > -1;) r[f] === t && r.splice(f, 1);
                    return b[u].tweens
                },
                si = function(n, t, i, u) {
                    var e, o, f = n.vars.onOverwrite;
                    return f && (e = f(n, t, i, u)), f = r.onOverwrite, f && (o = f(n, t, i, u)), e !== !1 && o !== !1
                },
                bt = function(n, t, i, r, u) {
                    var o, s, f, y;
                    if (1 === r || r >= 4) {
                        for (y = u.length, o = 0; y > o; o++)
                            if ((f = u[o]) !== t) f._gc || f._kill(null, n, t) && (s = !0);
                            else if (5 === r) break;
                        return s
                    }
                    var h, c = t._startTime + e,
                        l = [],
                        a = 0,
                        v = 0 === t._duration;
                    for (o = u.length; --o > -1;)(f = u[o]) === t || f._gc || f._paused || (f._timeline !== t._timeline ? (h = h || hi(t, 0, v), 0 === hi(f, h, v) && (l[a++] = f)) : c >= f._startTime && f._startTime + f.totalDuration() / f._timeScale > c && ((v || !f._initted) && 2e-10 >= c - f._startTime || (l[a++] = f)));
                    for (o = a; --o > -1;)
                        if (f = l[o], 2 === r && f._kill(i, n, t) && (s = !0), 2 !== r || !f._firstPT && f._initted) {
                            if (2 !== r && !si(f, t)) continue;
                            f._enabled(!1, !1) && (s = !0)
                        }
                    return s
                },
                hi = function(n, t, i) {
                    for (var u = n._timeline, f = u._timeScale, r = n._startTime; u._timeline;) {
                        if (r += u._startTime, f *= u._timeScale, u._paused) return -100;
                        u = u._timeline
                    }
                    return r /= f, r > t ? r - t : i && r === t || !n._initted && 2 * e > r - t ? e : (r += n.totalDuration() / n._timeScale / f) > t + e ? 0 : r - t - e
                };
            if (i._init = function() {
                    var e, h, n, u, f, t = this.vars,
                        s = this._overwrittenProps,
                        c = this._duration,
                        o = !!t.immediateRender,
                        i = t.ease;
                    if (t.startAt) {
                        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), f = {};
                        for (u in t.startAt) f[u] = t.startAt[u];
                        if (f.overwrite = !1, f.immediateRender = !0, f.lazy = o && t.lazy !== !1, f.startAt = f.delay = null, this._startAt = r.to(this.target, 0, f), o)
                            if (this._time > 0) this._startAt = null;
                            else if (0 !== c) return
                    } else if (t.runBackwards && 0 !== c)
                        if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                        else {
                            0 !== this._time && (o = !1), n = {};
                            for (u in t) wt[u] && "autoCSS" !== u || (n[u] = t[u]);
                            if (n.overwrite = 0, n.data = "isFromStart", n.lazy = o && t.lazy !== !1, n.immediateRender = o, this._startAt = r.to(this.target, 0, n), o) {
                                if (0 === this._time) return
                            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                        }
                    if (this._ease = i = i ? i instanceof a ? i : "function" == typeof i ? new a(i, t.easeParams) : tt[i] || r.defaultEase : r.defaultEase, t.easeParams instanceof Array && i.config && (this._ease = i.config.apply(i, t.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null) && (h = !0);
                    else h = this._initProps(this.target, this._propLookup, this._siblings, s);
                    if (h && r._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), t.runBackwards)
                        for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                    this._onUpdate = t.onUpdate, this._initted = !0
                }, i._initProps = function(t, i, r, u) {
                    var f, h, c, e, s, o;
                    if (null == t) return !1;
                    yt[t._gsTweenID] && nt(), this.vars.css || t.style && t !== n && t.nodeType && w.css && this.vars.autoCSS !== !1 && li(this.vars, t);
                    for (f in this.vars)
                        if (o = this.vars[f], wt[f]) o && (o instanceof Array || o.push && d(o)) && -1 !== o.join("").indexOf("{self}") && (this.vars[f] = o = this._swapSelfInParams(o, this));
                        else if (w[f] && (e = new w[f])._onInitTween(t, this.vars[f], this)) {
                        for (this._firstPT = s = {
                                _next: this._firstPT,
                                t: e,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: 1,
                                n: f,
                                pg: 1,
                                pr: e._priority
                            }, h = e._overwriteProps.length; --h > -1;) i[e._overwriteProps[h]] = this._firstPT;
                        (e._priority || e._onInitAllProps) && (c = !0), (e._onDisable || e._onEnable) && (this._notifyPluginsOfEnabled = !0), s._next && (s._next._prev = s)
                    } else i[f] = fi.call(this, t, f, "get", o, f, 0, null, this.vars.stringFilter);
                    return u && this._kill(u, t) ? this._initProps(t, i, r, u) : this._overwrite > 1 && this._firstPT && r.length > 1 && bt(t, this, i, this._overwrite, r) ? (this._kill(i, t), this._initProps(t, i, r, u)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (yt[t._gsTweenID] = !0), c)
                }, i.render = function(n, t, i) {
                    var h, s, u, y, c = this._time,
                        f = this._duration,
                        o = this._rawPrevTime;
                    if (n >= f) this._totalTime = this._time = f, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (h = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === f && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (n = 0), (0 === n || 0 > o || o === e && "isPause" !== this.data) && o !== n && (i = !0, o > e && (s = "onReverseComplete")), this._rawPrevTime = y = !t || n || o === n ? n : e);
                    else if (1e-7 > n) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== c || 0 === f && o > 0) && (s = "onReverseComplete", h = this._reversed), 0 > n && (this._active = !1, 0 === f && (this._initted || !this.vars.lazy || i) && (o >= 0 && (o !== e || "isPause" !== this.data) && (i = !0), this._rawPrevTime = y = !t || n || o === n ? n : e)), this._initted || (i = !0);
                    else if (this._totalTime = this._time = n, this._easeType) {
                        var r = n / f,
                            l = this._easeType,
                            a = this._easePower;
                        (1 === l || 3 === l && r >= .5) && (r = 1 - r), 3 === l && (r *= 2), 1 === a ? r *= r : 2 === a ? r *= r * r : 3 === a ? r *= r * r * r : 4 === a && (r *= r * r * r * r), this.ratio = 1 === l ? 1 - r : 2 === l ? r : .5 > n / f ? r / 2 : 1 - r / 2
                    } else this.ratio = this._ease.getRatio(n / f);
                    if (this._time !== c || i) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = c, this._rawPrevTime = o, v.push(this), this._lazy = [n, t], void 0;
                            this._time && !h ? this.ratio = this._ease.getRatio(this._time / f) : h && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== c && n >= 0 && (this._active = !0), 0 === c && (this._startAt && (n >= 0 ? this._startAt.render(n, t, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === f) && (t || this._callback("onStart"))), u = this._firstPT; u;) u.f ? u.t[u.p](u.c * this.ratio + u.s) : u.t[u.p] = u.c * this.ratio + u.s, u = u._next;
                        this._onUpdate && (0 > n && this._startAt && n !== -.0001 && this._startAt.render(n, t, i), t || (this._time !== c || h) && this._callback("onUpdate")), s && (!this._gc || i) && (0 > n && this._startAt && !this._onUpdate && n !== -.0001 && this._startAt.render(n, t, i), h && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s), 0 === f && this._rawPrevTime === e && y !== e && (this._rawPrevTime = 0))
                    }
                }, i._kill = function(n, t, i) {
                    if ("all" === n && (n = null), null == n && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    t = "string" != typeof t ? t || this._targets || this.target : r.selector(t) || t;
                    var f, s, o, u, e, c, l, a, h, v = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                    if ((d(t) || vt(t)) && "number" != typeof t[0])
                        for (f = t.length; --f > -1;) this._kill(n, t[f], i) && (c = !0);
                    else {
                        if (this._targets) {
                            for (f = this._targets.length; --f > -1;)
                                if (t === this._targets[f]) {
                                    e = this._propLookup[f] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[f] = n ? this._overwrittenProps[f] || {} : "all";
                                    break
                                }
                        } else {
                            if (t !== this.target) return !1;
                            e = this._propLookup, s = this._overwrittenProps = n ? this._overwrittenProps || {} : "all"
                        }
                        if (e) {
                            if (l = n || e, a = n !== s && "all" !== s && n !== e && ("object" != typeof n || !n._tempKill), i && (r.onOverwrite || this.vars.onOverwrite)) {
                                for (o in l) e[o] && (h || (h = []), h.push(o));
                                if ((h || !n) && !si(this, i, t, h)) return !1
                            }
                            for (o in l)(u = e[o]) && (v && (u.f ? u.t[u.p](u.s) : u.t[u.p] = u.s, c = !0), u.pg && u.t._kill(l) && (c = !0), u.pg && 0 !== u.t._overwriteProps.length || (u._prev ? u._prev._next = u._next : u === this._firstPT && (this._firstPT = u._next), u._next && (u._next._prev = u._prev), u._next = u._prev = null), delete e[o]), a && (s[o] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1)
                        }
                    }
                    return c
                }, i.invalidate = function() {
                    return this._notifyPluginsOfEnabled && r._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], o.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -e, this.render(-this._delay)), this
                }, i._enabled = function(n, t) {
                    if (h || u.wake(), n && this._gc) {
                        var i, f = this._targets;
                        if (f)
                            for (i = f.length; --i > -1;) this._siblings[i] = et(f[i], this, !0);
                        else this._siblings = et(this.target, this, !0)
                    }
                    return o.prototype._enabled.call(this, n, t), this._notifyPluginsOfEnabled && this._firstPT ? r._onPluginEvent(n ? "_onEnable" : "_onDisable", this) : !1
                }, r.to = function(n, t, i) {
                    return new r(n, t, i)
                }, r.from = function(n, t, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(n, t, i)
                }, r.fromTo = function(n, t, i, u) {
                    return u.startAt = i, u.immediateRender = 0 != u.immediateRender && 0 != i.immediateRender, new r(n, t, u)
                }, r.delayedCall = function(n, t, i, u, f) {
                    return new r(t, 0, {
                        delay: n,
                        onComplete: t,
                        onCompleteParams: i,
                        callbackScope: u,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        lazy: !1,
                        useFrames: f,
                        overwrite: 0
                    })
                }, r.set = function(n, t) {
                    return new r(n, 0, t)
                }, r.getTweensOf = function(n, t) {
                    if (null == n) return [];
                    n = "string" != typeof n ? n : r.selector(n) || n;
                    var i, u, f, e;
                    if ((d(n) || vt(n)) && "number" != typeof n[0]) {
                        for (i = n.length, u = []; --i > -1;) u = u.concat(r.getTweensOf(n[i], t));
                        for (i = u.length; --i > -1;)
                            for (e = u[i], f = i; --f > -1;) e === u[f] && u.splice(i, 1)
                    } else
                        for (u = et(n).concat(), i = u.length; --i > -1;)(u[i]._gc || t && !u[i].isActive()) && u.splice(i, 1);
                    return u
                }, r.killTweensOf = r.killDelayedCallsTo = function(n, t, i) {
                    "object" == typeof t && (i = t, t = !1);
                    for (var u = r.getTweensOf(n, t), f = u.length; --f > -1;) u[f]._kill(i, n)
                }, c = l("plugins.TweenPlugin", function(n, t) {
                    this._overwriteProps = (n || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = c.prototype
                }, !0), i = c.prototype, c.version = "1.18.0", c.API = 2, i._firstPT = null, i._addTween = fi, i.setRatio = ri, i._kill = function(n) {
                    var i, r = this._overwriteProps,
                        t = this._firstPT;
                    if (null != n[this._propName]) this._overwriteProps = [];
                    else
                        for (i = r.length; --i > -1;) null != n[r[i]] && r.splice(i, 1);
                    for (; t;) null != n[t.n] && (t._next && (t._next._prev = t._prev), t._prev ? (t._prev._next = t._next, t._prev = null) : this._firstPT === t && (this._firstPT = t._next)), t = t._next;
                    return !1
                }, i._roundProps = function(n, t) {
                    for (var i = this._firstPT; i;)(n[this._propName] || null != i.n && n[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
                }, r._onPluginEvent = function(n, t) {
                    var f, r, u, e, o, i = t._firstPT;
                    if ("_onInitAllProps" === n) {
                        for (; i;) {
                            for (o = i._next, r = u; r && r.pr > i.pr;) r = r._next;
                            (i._prev = r ? r._prev : e) ? i._prev._next = i: u = i, (i._next = r) ? r._prev = i : e = i, i = o
                        }
                        i = t._firstPT = u
                    }
                    for (; i;) i.pg && "function" == typeof i.t[n] && i.t[n]() && (f = !0), i = i._next;
                    return f
                }, c.activate = function(n) {
                    for (var t = n.length; --t > -1;) n[t].API === c.API && (w[(new n[t])._propName] = n[t]);
                    return !0
                }, st.plugin = function(n) {
                    if (!(n && n.propName && n.init && n.API)) throw "illegal plugin definition.";
                    var i, r = n.propName,
                        e = n.priority || 0,
                        o = n.overwriteProps,
                        u = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        t = l("plugins." + r.charAt(0).toUpperCase() + r.substr(1) + "Plugin", function() {
                            c.call(this, r, e), this._overwriteProps = o || []
                        }, n.global === !0),
                        f = t.prototype = new c(r);
                    f.constructor = t, t.API = n.API;
                    for (i in u) "function" == typeof n[i] && (f[u[i]] = n[i]);
                    return t.version = n.version, c.activate([t]), t
                }, s = n._gsQueue) {
                for (f = 0; s.length > f; f++) s[f]();
                for (i in g) g[i].func || n.console.log("GSAP encountered missing dependency: com.greensock." + i)
            }
            h = !1
        }
    })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite"), _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, t, i) {
            var u = function(n) {
                    t.call(this, n), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var r, u, i = this.vars;
                    for (u in i) r = i[u], f(r) && -1 !== r.join("").indexOf("{self}") && (i[u] = this._swapSelfInParams(r));
                    f(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
                },
                e = 1e-10,
                o = i._internals,
                y = u._internals = {},
                p = o.isSelector,
                f = o.isArray,
                h = o.lazyTweens,
                c = o.lazyRender,
                s = _gsScope._gsDefine.globals,
                l = function(n) {
                    var t, i = {};
                    for (t in n) i[t] = n[t];
                    return i
                },
                a = function(n, t, i) {
                    var u, r, f = n.cycle;
                    for (u in f) r = f[u], n[u] = "function" == typeof r ? r.call(t[i], i) : r[i % r.length];
                    delete n.cycle
                },
                w = y.pauseCallback = function() {},
                v = function(n) {
                    for (var i = [], r = n.length, t = 0; t !== r; i.push(n[t++]));
                    return i
                },
                r = u.prototype = new t;
            return u.version = "1.18.0", r.constructor = u, r.kill()._gc = r._forcingPlayhead = r._hasPause = !1, r.to = function(n, t, r, u) {
                var f = r.repeat && s.TweenMax || i;
                return t ? this.add(new f(n, t, r), u) : this.set(n, r, u)
            }, r.from = function(n, t, r, u) {
                return this.add((r.repeat && s.TweenMax || i).from(n, t, r), u)
            }, r.fromTo = function(n, t, r, u, f) {
                var e = u.repeat && s.TweenMax || i;
                return t ? this.add(e.fromTo(n, t, r, u), f) : this.set(n, u, f)
            }, r.staggerTo = function(n, t, r, f, e, o, s, h) {
                var c, y, w = new u({
                        onComplete: o,
                        onCompleteParams: s,
                        callbackScope: h,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    b = r.cycle;
                for ("string" == typeof n && (n = i.selector(n) || n), n = n || [], p(n) && (n = v(n)), f = f || 0, 0 > f && (n = v(n), n.reverse(), f *= -1), y = 0; n.length > y; y++) c = l(r), c.startAt && (c.startAt = l(c.startAt), c.startAt.cycle && a(c.startAt, n, y)), b && a(c, n, y), w.to(n[y], t, c, y * f);
                return this.add(w, e)
            }, r.staggerFrom = function(n, t, i, r, u, f, e, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(n, t, i, r, u, f, e, o)
            }, r.staggerFromTo = function(n, t, i, r, u, f, e, o, s) {
                return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(n, t, r, u, f, e, o, s)
            }, r.call = function(n, t, r, u) {
                return this.add(i.delayedCall(0, n, t, r), u)
            }, r.set = function(n, t, r) {
                return r = this._parseTimeOrLabel(r, 0, !0), null == t.immediateRender && (t.immediateRender = r === this._time && !this._paused), this.add(new i(n, 0, t), r)
            }, u.exportRoot = function(n, t) {
                n = n || {}, null == n.smoothChildTiming && (n.smoothChildTiming = !0);
                var r, o, f = new u(n),
                    e = f._timeline;
                for (null == t && (t = !0), e._remove(f, !0), f._startTime = 0, f._rawPrevTime = f._time = f._totalTime = e._time, r = e._first; r;) o = r._next, t && r instanceof i && r.target === r.vars.onComplete || f.add(r, r._startTime - r._delay), r = o;
                return e.add(f, 0), f
            }, r.add = function(r, e, o, s) {
                var l, v, a, h, c, y;
                if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, r)), !(r instanceof n)) {
                    if (r instanceof Array || r && r.push && f(r)) {
                        for (o = o || "normal", s = s || 0, l = e, v = r.length, a = 0; v > a; a++) f(h = r[a]) && (h = new u({
                            tweens: h
                        })), this.add(h, l), "string" != typeof h && "function" != typeof h && ("sequence" === o ? l = h._startTime + h.totalDuration() / h._timeScale : "start" === o && (h._startTime -= h.delay())), l += s;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof r) return this.addLabel(r, e);
                    if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r)
                }
                if (t.prototype.add.call(this, r, e), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (c = this, y = c.rawTime() > r._startTime; c._timeline;) y && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                return this
            }, r.remove = function(t) {
                var r, i;
                if (t instanceof n) return this._remove(t, !1), r = t._timeline = t.vars.useFrames ? n._rootFramesTimeline : n._rootTimeline, t._startTime = (t._paused ? t._pauseTime : r._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this;
                if (t instanceof Array || t && t.push && f(t)) {
                    for (i = t.length; --i > -1;) this.remove(t[i]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, r._remove = function(n, i) {
                t.prototype._remove.call(this, n, i);
                var r = this._last;
                return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, r.append = function(n, t) {
                return this.add(n, this._parseTimeOrLabel(null, t, !0, n))
            }, r.insert = r.insertMultiple = function(n, t, i, r) {
                return this.add(n, t || 0, i, r)
            }, r.appendMultiple = function(n, t, i, r) {
                return this.add(n, this._parseTimeOrLabel(null, t, !0, n), i, r)
            }, r.addLabel = function(n, t) {
                return this._labels[n] = this._parseTimeOrLabel(t), this
            }, r.addPause = function(n, t, r, u) {
                var f = i.delayedCall(0, w, r, u || this);
                return f.vars.onComplete = f.vars.onReverseComplete = t, f.data = "isPause", this._hasPause = !0, this.add(f, n)
            }, r.removeLabel = function(n) {
                return delete this._labels[n], this
            }, r.getLabelTime = function(n) {
                return null != this._labels[n] ? this._labels[n] : -1
            }, r._parseTimeOrLabel = function(t, i, r, u) {
                var e;
                if (u instanceof n && u.timeline === this) this.remove(u);
                else if (u && (u instanceof Array || u.push && f(u)))
                    for (e = u.length; --e > -1;) u[e] instanceof n && u[e].timeline === this && this.remove(u[e]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, r);
                if (i = i || 0, "string" == typeof t && (isNaN(t) || null != this._labels[t])) {
                    if (e = t.indexOf("="), -1 === e) return null == this._labels[t] ? r ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
                    i = parseInt(t.charAt(e - 1) + "1", 10) * Number(t.substr(e + 1)), t = e > 1 ? this._parseTimeOrLabel(t.substr(0, e - 1), 0, r) : this.duration()
                } else null == t && (t = this.duration());
                return Number(t) + i
            }, r.seek = function(n, t) {
                return this.totalTime("number" == typeof n ? n : this._parseTimeOrLabel(n), t !== !1)
            }, r.stop = function() {
                return this.paused(!0)
            }, r.gotoAndPlay = function(n, t) {
                return this.play(n, t)
            }, r.gotoAndStop = function(n, t) {
                return this.pause(n, t)
            }, r.render = function(n, t, i) {
                this._gc && this._enabled(!0, !1);
                var r, s, a, f, l, u, v = this._dirty ? this.totalDuration() : this._totalDuration,
                    o = this._time,
                    p = this._startTime,
                    w = this._timeScale,
                    y = this._paused;
                if (n >= v) this._totalTime = this._time = v, this._reversed || this._hasPausedChild() || (s = !0, f = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === n || 0 > this._rawPrevTime || this._rawPrevTime === e) && this._rawPrevTime !== n && this._first && (l = !0, this._rawPrevTime > e && (f = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || n || this._rawPrevTime === n ? n : e, n = v + .0001;
                else if (1e-7 > n)
                    if (this._totalTime = this._time = 0, (0 !== o || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > n && this._rawPrevTime >= 0)) && (f = "onReverseComplete", s = this._reversed), 0 > n) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, f = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = n;
                    else {
                        if (this._rawPrevTime = this._duration || !t || n || this._rawPrevTime === n ? n : e, 0 === n && s)
                            for (r = this._first; r && 0 === r._startTime;) r._duration || (s = !1), r = r._next;
                        n = 0, this._initted || (l = !0)
                    }
                else {
                    if (this._hasPause && !this._forcingPlayhead && !t) {
                        if (n >= o)
                            for (r = this._first; r && n >= r._startTime && !u;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (u = r), r = r._next;
                        else
                            for (r = this._last; r && r._startTime >= n && !u;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (u = r), r = r._prev;
                        u && (this._time = n = u._startTime, this._totalTime = n + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = n
                }
                if (this._time !== o && this._first || i || l || u) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== o && n > 0 && (this._active = !0), 0 === o && this.vars.onStart && 0 !== this._time && (t || this._callback("onStart")), this._time >= o)
                        for (r = this._first; r && (a = r._next, !this._paused || y);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (u === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)), r = a;
                    else
                        for (r = this._last; r && (a = r._prev, !this._paused || y);) {
                            if (r._active || o >= r._startTime && !r._paused && !r._gc) {
                                if (u === r) {
                                    for (u = r._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (n - u._startTime) * u._timeScale : (n - u._startTime) * u._timeScale, t, i), u = u._prev;
                                    u = null, this.pause()
                                }
                                r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)
                            }
                            r = a
                        }
                    this._onUpdate && (t || (h.length && c(), this._callback("onUpdate"))), f && (this._gc || (p === this._startTime || w !== this._timeScale) && (0 === this._time || v >= this.totalDuration()) && (s && (h.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[f] && this._callback(f)))
                }
            }, r._hasPausedChild = function() {
                for (var n = this._first; n;) {
                    if (n._paused || n instanceof u && n._hasPausedChild()) return !0;
                    n = n._next
                }
                return !1
            }, r.getChildren = function(n, t, r, u) {
                u = u || -9999999999;
                for (var e = [], f = this._first, o = 0; f;) u > f._startTime || (f instanceof i ? t !== !1 && (e[o++] = f) : (r !== !1 && (e[o++] = f), n !== !1 && (e = e.concat(f.getChildren(!0, t, r)), o = e.length))), f = f._next;
                return e
            }, r.getTweensOf = function(n, t) {
                var r, u, f = this._gc,
                    e = [],
                    o = 0;
                for (f && this._enabled(!0, !0), r = i.getTweensOf(n), u = r.length; --u > -1;)(r[u].timeline === this || t && this._contains(r[u])) && (e[o++] = r[u]);
                return f && this._enabled(!1, !0), e
            }, r.recent = function() {
                return this._recent
            }, r._contains = function(n) {
                for (var t = n.timeline; t;) {
                    if (t === this) return !0;
                    t = t.timeline
                }
                return !1
            }, r.shiftChildren = function(n, t, i) {
                i = i || 0;
                for (var u, r = this._first, f = this._labels; r;) r._startTime >= i && (r._startTime += n), r = r._next;
                if (t)
                    for (u in f) f[u] >= i && (f[u] += n);
                return this._uncache(!0)
            }, r._kill = function(n, t) {
                if (!n && !t) return this._enabled(!1, !1);
                for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = i.length, u = !1; --r > -1;) i[r]._kill(n, t) && (u = !0);
                return u
            }, r.clear = function(n) {
                var t = this.getChildren(!1, !0, !0),
                    i = t.length;
                for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
                return n !== !1 && (this._labels = {}), this._uncache(!0)
            }, r.invalidate = function() {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return n.prototype.invalidate.call(this)
            }, r._enabled = function(n, i) {
                if (n === this._gc)
                    for (var r = this._first; r;) r._enabled(n, !0), r = r._next;
                return t.prototype._enabled.call(this, n, i)
            }, r.totalTime = function() {
                this._forcingPlayhead = !0;
                var t = n.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, t
            }, r.duration = function(n) {
                return arguments.length ? (0 !== this.duration() && 0 !== n && this.timeScale(this._duration / n), this) : (this._dirty && this.totalDuration(), this._duration)
            }, r.totalDuration = function(n) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var f, r, i = 0, t = this._last, u = 999999999999; t;) f = t._prev, t._dirty && t.totalDuration(), t._startTime > u && this._sortChildren && !t._paused ? this.add(t, t._startTime - t._delay) : u = t._startTime, 0 > t._startTime && !t._paused && (i -= t._startTime, this._timeline.smoothChildTiming && (this._startTime += t._startTime / this._timeScale), this.shiftChildren(-t._startTime, !1, -9999999999), u = 0), r = t._startTime + t._totalDuration / t._timeScale, r > i && (i = r), t = f;
                        this._duration = this._totalDuration = i, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== n && this.timeScale(this._totalDuration / n), this
            }, r.paused = function(t) {
                if (!t)
                    for (var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return n.prototype.paused.apply(this, arguments)
            }, r.usesFrames = function() {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === n._rootFramesTimeline
            }, r.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, u
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(n) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[n]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = t())
    }("TimelineLite"), _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(n) {
            var f, u, s, a = _gsScope.GreenSockGlobals || _gsScope,
                p = a.com.greensock,
                v = 2 * Math.PI,
                y = Math.PI / 2,
                r = p._class,
                t = function(t, i) {
                    var u = r("easing." + t, function() {}, !0),
                        f = u.prototype = new n;
                    return f.constructor = u, f.getRatio = i, u
                },
                h = n.register || function() {},
                e = function(n, t, i, u) {
                    var f = r("easing." + n, {
                        easeOut: new t,
                        easeIn: new i,
                        easeInOut: new u
                    }, !0);
                    return h(f, n), f
                },
                c = function(n, t, i) {
                    this.t = n, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - n)
                },
                l = function(t, i) {
                    var u = r("easing." + t, function(n) {
                            this._p1 = n || 0 === n ? n : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        f = u.prototype = new n;
                    return f.constructor = u, f.getRatio = i, f.config = function(n) {
                        return new u(n)
                    }, u
                },
                w = e("Back", l("BackOut", function(n) {
                    return (n -= 1) * n * ((this._p1 + 1) * n + this._p1) + 1
                }), l("BackIn", function(n) {
                    return n * n * ((this._p1 + 1) * n - this._p1)
                }), l("BackInOut", function(n) {
                    return 1 > (n *= 2) ? .5 * n * n * ((this._p2 + 1) * n - this._p2) : .5 * ((n -= 2) * n * ((this._p2 + 1) * n + this._p2) + 2)
                })),
                o = r("easing.SlowMo", function(n, t, i) {
                    t = t || 0 === t ? t : .7, null == n ? n = .7 : n > 1 && (n = 1), this._p = 1 !== n ? t : 0, this._p1 = (1 - n) / 2, this._p2 = n, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                }, !0),
                i = o.prototype = new n;
            return i.constructor = o, i.getRatio = function(n) {
                var t = n + (.5 - n) * this._p;
                return this._p1 > n ? this._calcEnd ? 1 - (n = 1 - n / this._p1) * n : t - (n = 1 - n / this._p1) * n * n * n * t : n > this._p3 ? this._calcEnd ? 1 - (n = (n - this._p3) / this._p1) * n : t + (n - t) * (n = (n - this._p3) / this._p1) * n * n * n : this._calcEnd ? 1 : t
            }, o.ease = new o(.7, .7), i.config = o.config = function(n, t, i) {
                return new o(n, t, i)
            }, f = r("easing.SteppedEase", function(n) {
                n = n || 1, this._p1 = 1 / n, this._p2 = n + 1
            }, !0), i = f.prototype = new n, i.constructor = f, i.getRatio = function(n) {
                return 0 > n ? n = 0 : n >= 1 && (n = .999999999), (this._p2 * n >> 0) * this._p1
            }, i.config = f.config = function(n) {
                return new f(n)
            }, u = r("easing.RoughEase", function(t) {
                t = t || {};
                for (var i, r, u, f, h, e, l = t.taper || "none", a = [], w = 0, v = 0 | (t.points || 20), o = v, y = t.randomize !== !1, b = t.clamp === !0, p = t.template instanceof n ? t.template : null, s = "number" == typeof t.strength ? .4 * t.strength : .4; --o > -1;) i = y ? Math.random() : 1 / v * o, r = p ? p.getRatio(i) : i, "none" === l ? u = s : "out" === l ? (f = 1 - i, u = f * f * s) : "in" === l ? u = i * i * s : .5 > i ? (f = 2 * i, u = .5 * f * f * s) : (f = 2 * (1 - i), u = .5 * f * f * s), y ? r += Math.random() * u - .5 * u : o % 2 ? r += .5 * u : r -= .5 * u, b && (r > 1 ? r = 1 : 0 > r && (r = 0)), a[w++] = {
                    x: i,
                    y: r
                };
                for (a.sort(function(n, t) {
                        return n.x - t.x
                    }), e = new c(1, 1, null), o = v; --o > -1;) h = a[o], e = new c(h.x, h.y, e);
                this._prev = new c(0, 0, 0 !== e.t ? e : e.next)
            }, !0), i = u.prototype = new n, i.constructor = u, i.getRatio = function(n) {
                var t = this._prev;
                if (n > t.t) {
                    for (; t.next && n >= t.t;) t = t.next;
                    t = t.prev
                } else
                    for (; t.prev && t.t >= n;) t = t.prev;
                return this._prev = t, t.v + (n - t.t) / t.gap * t.c
            }, i.config = function(n) {
                return new u(n)
            }, u.ease = new u, e("Bounce", t("BounceOut", function(n) {
                return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
            }), t("BounceIn", function(n) {
                return 1 / 2.75 > (n = 1 - n) ? 1 - 7.5625 * n * n : 2 / 2.75 > n ? 1 - (7.5625 * (n -= 1.5 / 2.75) * n + .75) : 2.5 / 2.75 > n ? 1 - (7.5625 * (n -= 2.25 / 2.75) * n + .9375) : 1 - (7.5625 * (n -= 2.625 / 2.75) * n + .984375)
            }), t("BounceInOut", function(n) {
                var t = .5 > n;
                return n = t ? 1 - 2 * n : 2 * n - 1, n = 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375, t ? .5 * (1 - n) : .5 * n + .5
            })), e("Circ", t("CircOut", function(n) {
                return Math.sqrt(1 - (n -= 1) * n)
            }), t("CircIn", function(n) {
                return -(Math.sqrt(1 - n * n) - 1)
            }), t("CircInOut", function(n) {
                return 1 > (n *= 2) ? -.5 * (Math.sqrt(1 - n * n) - 1) : .5 * (Math.sqrt(1 - (n -= 2) * n) + 1)
            })), s = function(t, i, u) {
                var f = r("easing." + t, function(n, t) {
                        this._p1 = n >= 1 ? n : 1, this._p2 = (t || u) / (1 > n ? n : 1), this._p3 = this._p2 / v * (Math.asin(1 / this._p1) || 0), this._p2 = v / this._p2
                    }, !0),
                    e = f.prototype = new n;
                return e.constructor = f, e.getRatio = i, e.config = function(n, t) {
                    return new f(n, t)
                }, f
            }, e("Elastic", s("ElasticOut", function(n) {
                return this._p1 * Math.pow(2, -10 * n) * Math.sin((n - this._p3) * this._p2) + 1
            }, .3), s("ElasticIn", function(n) {
                return -(this._p1 * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - this._p3) * this._p2))
            }, .3), s("ElasticInOut", function(n) {
                return 1 > (n *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - this._p3) * this._p2) + 1
            }, .45)), e("Expo", t("ExpoOut", function(n) {
                return 1 - Math.pow(2, -10 * n)
            }), t("ExpoIn", function(n) {
                return Math.pow(2, 10 * (n - 1)) - .001
            }), t("ExpoInOut", function(n) {
                return 1 > (n *= 2) ? .5 * Math.pow(2, 10 * (n - 1)) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
            })), e("Sine", t("SineOut", function(n) {
                return Math.sin(n * y)
            }), t("SineIn", function(n) {
                return -Math.cos(n * y) + 1
            }), t("SineInOut", function(n) {
                return -.5 * (Math.cos(Math.PI * n) - 1)
            })), r("easing.EaseLookup", {
                find: function(t) {
                    return n.map[t]
                }
            }, !0), h(a.SlowMo, "SlowMo", "ease,"), h(u, "RoughEase", "ease,"), h(f, "SteppedEase", "ease,"), w
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(n, t) {
            var ft, wt, f, fi, r = function() {
                    n.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = r.prototype.setRatio
                },
                nu = _gsScope._gsDefine.globals,
                a = {},
                i = r.prototype = new n("css"),
                br, yt, kr, dr, gr, pt;
            i.constructor = r, r.version = "1.18.0", r.API = 2, r.defaultTransformPerspective = 0, r.defaultSkewType = "compensated", r.defaultSmoothOrigin = !0, i = "px", r.suffixMap = {
                top: i,
                right: i,
                bottom: i,
                left: i,
                width: i,
                height: i,
                fontSize: i,
                padding: i,
                margin: i,
                perspective: i,
                lineHeight: ""
            };
            var ei, di, bt, kt, gi, it, dt = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                oi = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                si = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                hi = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                gt = /(?:\d|\-|\+|=|#|\.)*/g,
                ci = /opacity *= *([^)]*)/i,
                tu = /opacity:([^;]*)/i,
                iu = /alpha\(opacity *=.+?\)/i,
                ru = /^(rgb|hsl)/,
                nr = /([A-Z])/g,
                tr = /-([a-z])/gi,
                uu = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                ir = function(n, t) {
                    return t.toUpperCase()
                },
                fu = /(?:Left|Right|Width)/i,
                eu = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                ou = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                p = /,(?=[^\)]*(?:\(|$))/gi,
                d = Math.PI / 180,
                rt = 180 / Math.PI,
                ni = {},
                v = document,
                li = function(n) {
                    return v.createElementNS ? v.createElementNS("http://www.w3.org/1999/xhtml", n) : v.createElement(n)
                },
                g = li("div"),
                ai = li("img"),
                w = r._internals = {
                    _specialProps: a
                },
                b = navigator.userAgent,
                tt = function() {
                    var t = b.indexOf("Android"),
                        n = li("a");
                    return bt = -1 !== b.indexOf("Safari") && -1 === b.indexOf("Chrome") && (-1 === t || Number(b.substr(t + 8, 1)) > 3), gi = bt && 6 > Number(b.substr(b.indexOf("Version/") + 8, 1)), kt = -1 !== b.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(b) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(b)) && (it = parseFloat(RegExp.$1)), n ? (n.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(n.style.opacity)) : !1
                }(),
                rr = function(n) {
                    return ci.test("string" == typeof n ? n : (n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                ur = function(n) {
                    window.console && console.log(n)
                },
                fr = "",
                vi = "",
                et = function(n, t) {
                    t = t || g;
                    var r, i, u = t.style;
                    if (void 0 !== u[n]) return n;
                    for (n = n.charAt(0).toUpperCase() + n.substr(1), r = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === u[r[i] + n];);
                    return i >= 0 ? (vi = 3 === i ? "ms" : r[i], fr = "-" + vi.toLowerCase() + "-", vi + n) : null
                },
                ot = v.defaultView ? v.defaultView.getComputedStyle : function() {},
                u = r.getStyle = function(n, t, i, r, u) {
                    var f;
                    return tt || "opacity" !== t ? (!r && n.style[t] ? f = n.style[t] : (i = i || ot(n)) ? f = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(nr, "-$1").toLowerCase()) : n.currentStyle && (f = n.currentStyle[t]), null == u || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : u) : rr(n)
                },
                k = w.convertToPixels = function(n, i, f, e, o) {
                    if ("px" === e || !e) return f;
                    if ("auto" === e || !f) return 0;
                    var s, h, a, l = fu.test(i),
                        c = n,
                        y = g.style,
                        p = 0 > f;
                    if (p && (f = -f), "%" === e && -1 !== i.indexOf("border")) s = f / 100 * (l ? n.clientWidth : n.clientHeight);
                    else {
                        if (y.cssText = "border:0 solid red;position:" + u(n, "position") + ";line-height:0;", "%" !== e && c.appendChild && "v" !== e.charAt(0) && "rem" !== e) y[l ? "borderLeftWidth" : "borderTopWidth"] = f + e;
                        else {
                            if (c = n.parentNode || v.body, h = c._gsCache, a = t.ticker.frame, h && l && h.time === a) return h.width * f / 100;
                            y[l ? "width" : "height"] = f + e
                        }
                        c.appendChild(g), s = parseFloat(g[l ? "offsetWidth" : "offsetHeight"]), c.removeChild(g), l && "%" === e && r.cacheWidths !== !1 && (h = c._gsCache = c._gsCache || {}, h.time = a, h.width = 100 * (s / f)), 0 !== s || o || (s = k(n, i, f, e, !0))
                    }
                    return p ? -s : s
                },
                er = w.calculateOffset = function(n, t, i) {
                    if ("absolute" !== u(n, "position", i)) return 0;
                    var r = "left" === t ? "Left" : "Top",
                        f = u(n, "margin" + r, i);
                    return n["offset" + r] - (k(n, t, parseFloat(f), f.replace(gt, "")) || 0)
                },
                st = function(n, t) {
                    var r, u, f, i = {};
                    if (t = t || ot(n, null))
                        if (r = t.length)
                            for (; --r > -1;) f = t[r], (-1 === f.indexOf("-transform") || lr === f) && (i[f.replace(tr, ir)] = t.getPropertyValue(f));
                        else
                            for (r in t)(-1 === r.indexOf("Transform") || h === r) && (i[r] = t[r]);
                    else if (t = n.currentStyle || n.style)
                        for (r in t) "string" == typeof r && void 0 === i[r] && (i[r.replace(tr, ir)] = t[r]);
                    return tt || (i.opacity = rr(n)), u = ut(n, t, !1), i.rotation = u.rotation, i.skewX = u.skewX, i.scaleX = u.scaleX, i.scaleY = u.scaleY, i.x = u.x, i.y = u.y, y && (i.z = u.z, i.rotationX = u.rotationX, i.rotationY = u.rotationY, i.scaleZ = u.scaleZ), i.filters && delete i.filters, i
                },
                yi = function(n, t, i, r, u) {
                    var e, f, o, s = {},
                        h = n.style;
                    for (f in i) "cssText" !== f && "length" !== f && isNaN(f) && (t[f] !== (e = i[f]) || u && u[f]) && -1 === f.indexOf("Origin") && ("number" == typeof e || "string" == typeof e) && (s[f] = "auto" !== e || "left" !== f && "top" !== f ? "" !== e && "auto" !== e && "none" !== e || "string" != typeof t[f] || "" === t[f].replace(hi, "") ? e : 0 : er(n, f), void 0 !== h[f] && (o = new bi(h, f, h[f], o)));
                    if (r)
                        for (f in r) "className" !== f && (s[f] = r[f]);
                    return {
                        difs: s,
                        firstMPT: o
                    }
                },
                su = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                hu = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                cu = function(n, t, i) {
                    var r = parseFloat("width" === t ? n.offsetWidth : n.offsetHeight),
                        f = su[t],
                        e = f.length;
                    for (i = i || ot(n, null); --e > -1;) r -= parseFloat(u(n, "padding" + f[e], i, !0)) || 0, r -= parseFloat(u(n, "border" + f[e] + "Width", i, !0)) || 0;
                    return r
                },
                ht = function(n, t) {
                    if ("contain" === n || "auto" === n || "auto auto" === n) return n + " ";
                    (null == n || "" === n) && (n = "0 0");
                    var u = n.split(" "),
                        i = -1 !== n.indexOf("left") ? "0%" : -1 !== n.indexOf("right") ? "100%" : u[0],
                        r = -1 !== n.indexOf("top") ? "0%" : -1 !== n.indexOf("bottom") ? "100%" : u[1];
                    return null == r ? r = "center" === i ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), n = i + " " + r + (u.length > 2 ? " " + u[2] : ""), t && (t.oxp = -1 !== i.indexOf("%"), t.oyp = -1 !== r.indexOf("%"), t.oxr = "=" === i.charAt(1), t.oyr = "=" === r.charAt(1), t.ox = parseFloat(i.replace(hi, "")), t.oy = parseFloat(r.replace(hi, "")), t.v = n), t || n
                },
                ct = function(n, t) {
                    return "string" == typeof n && "=" === n.charAt(1) ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - parseFloat(t)
                },
                c = function(n, t) {
                    return null == n ? t : "string" == typeof n && "=" === n.charAt(1) ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) + t : parseFloat(n)
                },
                lt = function(n, t, i, r) {
                    var f, o, u, e, s, h = 1e-6;
                    return null == n ? e = t : "number" == typeof n ? e = n : (f = 360, o = n.split("_"), s = "=" === n.charAt(1), u = (s ? parseInt(n.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === n.indexOf("rad") ? 1 : rt) - (s ? 0 : t), o.length && (r && (r[i] = t + u), -1 !== n.indexOf("short") && (u %= f, u !== u % (f / 2) && (u = 0 > u ? u + f : u - f)), -1 !== n.indexOf("_cw") && 0 > u ? u = (u + 9999999999 * f) % f - (0 | u / f) * f : -1 !== n.indexOf("ccw") && u > 0 && (u = (u - 9999999999 * f) % f - (0 | u / f) * f)), e = t + u), h > e && e > -h && (e = 0), e
                },
                at = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                pi = function(n, t, i) {
                    return n = 0 > n ? n + 1 : n > 1 ? n - 1 : n, 0 | 255 * (1 > 6 * n ? t + 6 * (i - t) * n : .5 > n ? i : 2 > 3 * n ? t + 6 * (i - t) * (2 / 3 - n) : t) + .5
                },
                ti = r.parseColor = function(n, t) {
                    var i, u, r, f, o, h, e, s, c, l, a;
                    if (n)
                        if ("number" == typeof n) i = [n >> 16, 255 & n >> 8, 255 & n];
                        else {
                            if ("," === n.charAt(n.length - 1) && (n = n.substr(0, n.length - 1)), at[n]) i = at[n];
                            else if ("#" === n.charAt(0)) 4 === n.length && (u = n.charAt(1), r = n.charAt(2), f = n.charAt(3), n = "#" + u + u + r + r + f + f), n = parseInt(n.substr(1), 16), i = [n >> 16, 255 & n >> 8, 255 & n];
                            else if ("hsl" === n.substr(0, 3))
                                if (i = a = n.match(dt), t) {
                                    if (-1 !== n.indexOf("=")) return n.match(oi)
                                } else o = Number(i[0]) % 360 / 360, h = Number(i[1]) / 100, e = Number(i[2]) / 100, r = .5 >= e ? e * (h + 1) : e + h - e * h, u = 2 * e - r, i.length > 3 && (i[3] = Number(n[3])), i[0] = pi(o + 1 / 3, u, r), i[1] = pi(o, u, r), i[2] = pi(o - 1 / 3, u, r);
                            else i = n.match(dt) || at.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                        }
                    else i = at.black;
                    return t && !a && (u = i[0] / 255, r = i[1] / 255, f = i[2] / 255, s = Math.max(u, r, f), c = Math.min(u, r, f), e = (s + c) / 2, s === c ? o = h = 0 : (l = s - c, h = e > .5 ? l / (2 - s - c) : l / (s + c), o = s === u ? (r - f) / l + (f > r ? 6 : 0) : s === r ? (f - u) / l + 2 : (u - r) / l + 4, o *= 60), i[0] = 0 | o + .5, i[1] = 0 | 100 * h + .5, i[2] = 0 | 100 * e + .5), i
                },
                or = function(n, t) {
                    for (var i, f, e = n.match(l) || [], r = 0, o = e.length ? "" : n, u = 0; e.length > u; u++) i = e[u], f = n.substr(r, n.indexOf(i, r) - r), r += f.length + i.length, i = ti(i, t), 3 === i.length && i.push(1), o += f + (t ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                    return o
                },
                l = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (i in at) l += "|" + i + "\\b";
            l = RegExp(l + ")", "gi"), r.colorStringFilter = function(n) {
                var t, i = n[0] + n[1];
                l.lastIndex = 0, l.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), n[0] = or(n[0], t), n[1] = or(n[1], t))
            }, t.defaultStringFilter || (t.defaultStringFilter = r.colorStringFilter);
            var sr = function(n, t, i, r) {
                    if (null == n) return function(n) {
                        return n
                    };
                    var e, s = t ? (n.match(l) || [""])[0] : "",
                        f = n.split(s).join("").match(si) || [],
                        h = n.substr(0, n.indexOf(f[0])),
                        c = ")" === n.charAt(n.length - 1) ? ")" : "",
                        o = -1 !== n.indexOf(" ") ? " " : ",",
                        u = f.length,
                        a = u > 0 ? f[0].replace(dt, "") : "";
                    return u ? e = t ? function(n) {
                        var w, v, t, y;
                        if ("number" == typeof n) n += a;
                        else if (r && p.test(n)) {
                            for (y = n.replace(p, "|").split("|"), t = 0; y.length > t; t++) y[t] = e(y[t]);
                            return y.join(",")
                        }
                        if (w = (n.match(l) || [s])[0], v = n.split(w).join("").match(si) || [], t = v.length, u > t--)
                            for (; u > ++t;) v[t] = i ? v[0 | (t - 1) / 2] : f[t];
                        return h + v.join(o) + o + w + c + (-1 !== n.indexOf("inset") ? " inset" : "")
                    } : function(n) {
                        var s, l, t;
                        if ("number" == typeof n) n += a;
                        else if (r && p.test(n)) {
                            for (l = n.replace(p, "|").split("|"), t = 0; l.length > t; t++) l[t] = e(l[t]);
                            return l.join(",")
                        }
                        if (s = n.match(si) || [], t = s.length, u > t--)
                            for (; u > ++t;) s[t] = i ? s[0 | (t - 1) / 2] : f[t];
                        return h + s.join(o) + c
                    } : function(n) {
                        return n
                    }
                },
                wi = function(n) {
                    return n = n.split(","),
                        function(t, i, r, u, f, e, o) {
                            var s, h = (i + "").split(" ");
                            for (o = {}, s = 0; 4 > s; s++) o[n[s]] = h[s] = h[s] || h[(s - 1) / 2 >> 0];
                            return u.parse(t, o, f, e)
                        }
                },
                bi = (w._setPluginRatio = function(n) {
                    this.plugin.setRatio(n);
                    for (var r, t, u, e, f = this.data, o = f.proxy, i = f.firstMPT, s = 1e-6; i;) r = o[i.v], i.r ? r = Math.round(r) : s > r && r > -s && (r = 0), i.t[i.p] = r, i = i._next;
                    if (f.autoRotate && (f.autoRotate.rotation = o.rotation), 1 === n)
                        for (i = f.firstMPT; i;) {
                            if (t = i.t, t.type) {
                                if (1 === t.type) {
                                    for (e = t.xs0 + t.s + t.xs1, u = 1; t.l > u; u++) e += t["xn" + u] + t["xs" + (u + 1)];
                                    t.e = e
                                }
                            } else t.e = t.s + t.xs0;
                            i = i._next
                        }
                }, function(n, t, i, r, u) {
                    this.t = n, this.p = t, this.v = i, this.r = u, r && (r._prev = this, this._next = r)
                }),
                o = (w._parseToProxy = function(n, t, i, r, u, f) {
                    var c, e, o, s, v, h = r,
                        l = {},
                        a = {},
                        y = i._transform,
                        p = ni;
                    for (i._transform = null, ni = t, r = v = i.parse(n, t, r, u), ni = p, f && (i._transform = y, h && (h._prev = null, h._prev && (h._prev._next = null))); r && r !== h;) {
                        if (1 >= r.type && (e = r.p, a[e] = r.s + r.c, l[e] = r.s, f || (s = new bi(r, "s", e, s, r.r), r.c = 0), 1 === r.type))
                            for (c = r.l; --c > 0;) o = "xn" + c, e = r.p + "_" + o, a[e] = r.data[o], l[e] = r[o], f || (s = new bi(r, o, e, s, r.rxp[o]));
                        r = r._next
                    }
                    return {
                        proxy: l,
                        end: a,
                        firstMPT: s,
                        pt: v
                    }
                }, w.CSSPropTween = function(n, t, i, r, u, f, e, s, h, c, l) {
                    this.t = n, this.p = t, this.s = i, this.c = r, this.n = e || t, n instanceof o || fi.push(this.n), this.r = s, this.type = f || 0, h && (this.pr = h, ft = !0), this.b = void 0 === c ? i : c, this.e = void 0 === l ? i + r : l, u && (this._next = u, u._prev = this)
                }),
                ii = function(n, t, i, r, u, f) {
                    var e = new o(n, t, i, r - i, u, -1, f);
                    return e.b = i, e.e = e.xs0 = r, e
                },
                ri = r.parseComplex = function(n, t, i, r, u, f, e, s, h, c) {
                    i = i || f || "", e = new o(n, t, 0, 0, e, c ? 2 : 1, null, !1, s, i, r), r += "";
                    var y, d, g, a, v, ut, ft, it, w, et, nt, b, ot, k = i.split(", ").join(",").split(" "),
                        rt = r.split(", ").join(",").split(" "),
                        st = k.length,
                        ht = ei !== !1;
                    for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(p, ", ").split(" "), rt = rt.join(" ").replace(p, ", ").split(" "), st = k.length), st !== rt.length && (k = (f || "").split(" "), st = k.length), e.plugin = h, e.setRatio = c, l.lastIndex = 0, y = 0; st > y; y++)
                        if (a = k[y], v = rt[y], it = parseFloat(a), it || 0 === it) e.appendXtra("", it, ct(v, it), v.replace(oi, ""), ht && -1 !== v.indexOf("px"), !0);
                        else if (u && l.test(a)) b = "," === v.charAt(v.length - 1) ? ")," : ")", ot = -1 !== v.indexOf("hsl") && tt, a = ti(a, ot), v = ti(v, ot), w = a.length + v.length > 6, w && !tt && 0 === v[3] ? (e["xs" + e.l] += e.l ? " transparent" : "transparent", e.e = e.e.split(rt[y]).join("transparent")) : (tt || (w = !1), ot ? e.appendXtra(w ? "hsla(" : "hsl(", a[0], ct(v[0], a[0]), ",", !1, !0).appendXtra("", a[1], ct(v[1], a[1]), "%,", !1).appendXtra("", a[2], ct(v[2], a[2]), w ? "%," : "%" + b, !1) : e.appendXtra(w ? "rgba(" : "rgb(", a[0], v[0] - a[0], ",", !0, !0).appendXtra("", a[1], v[1] - a[1], ",", !0).appendXtra("", a[2], v[2] - a[2], w ? "," : b, !0), w && (a = 4 > a.length ? 1 : a[3], e.appendXtra("", a, (4 > v.length ? 1 : v[3]) - a, b, !1))), l.lastIndex = 0;
                    else if (ut = a.match(dt)) {
                        if (ft = v.match(oi), !ft || ft.length !== ut.length) return e;
                        for (g = 0, d = 0; ut.length > d; d++) nt = ut[d], et = a.indexOf(nt, g), e.appendXtra(a.substr(g, et - g), Number(nt), ct(ft[d], nt), "", ht && "px" === a.substr(et + nt.length, 2), 0 === d), g = et + nt.length;
                        e["xs" + e.l] += a.substr(g)
                    } else e["xs" + e.l] += e.l ? " " + a : a;
                    if (-1 !== r.indexOf("=") && e.data) {
                        for (b = e.xs0 + e.data.s, y = 1; e.l > y; y++) b += e["xs" + y] + e.data["xn" + y];
                        e.e = b + e["xs" + y]
                    }
                    return e.l || (e.type = -1, e.xs0 = e.e), e.xfirst || e
                },
                s = 9;
            for (i = o.prototype, i.l = i.pr = 0; --s > 0;) i["xn" + s] = 0, i["xs" + s] = "";
            i.xs0 = "", i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null, i.appendXtra = function(n, t, i, r, u, f) {
                var e = this,
                    s = e.l;
                return e["xs" + s] += f && s ? " " + n : n || "", i || 0 === s || e.plugin ? (e.l++, e.type = e.setRatio ? 2 : 1, e["xs" + e.l] = r || "", s > 0 ? (e.data["xn" + s] = t + i, e.rxp["xn" + s] = u, e["xn" + s] = t, e.plugin || (e.xfirst = new o(e, "xn" + s, t, i, e.xfirst || e, 0, e.n, u, e.pr), e.xfirst.xs0 = 0), e) : (e.data = {
                    s: t + i
                }, e.rxp = {}, e.s = t, e.c = i, e.r = u, e)) : (e["xs" + s] += t + (r || ""), e)
            };
            var hr = function(n, t) {
                    t = t || {}, this.p = t.prefix ? et(n) || n : n, a[n] = a[this.p] = this, this.format = t.formatter || sr(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                },
                e = w._registerComplexSpecialProp = function(n, t, i) {
                    "object" != typeof t && (t = {
                        parser: i
                    });
                    var r, e, u = n.split(","),
                        f = t.defaultValue;
                    for (i = i || [f], r = 0; u.length > r; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = i[r] || f, e = new hr(u[r], t)
                },
                lu = function(n) {
                    if (!a[n]) {
                        var t = n.charAt(0).toUpperCase() + n.substr(1) + "Plugin";
                        e(n, {
                            parser: function(n, i, r, u, f, e, o) {
                                var s = nu.com.greensock.plugins[t];
                                return s ? (s._cssRegister(), a[r].parse(n, i, r, u, f, e, o)) : (ur("Error: " + t + " js file not loaded."), f)
                            }
                        })
                    }
                };
            i = hr.prototype, i.parseComplex = function(n, t, i, r, u, f) {
                var e, o, s, a, c, l, h = this.keyword;
                if (this.multi && (p.test(i) || p.test(t) ? (o = t.replace(p, "|").split("|"), s = i.replace(p, "|").split("|")) : h && (o = [t], s = [i])), s) {
                    for (a = s.length > o.length ? s.length : o.length, e = 0; a > e; e++) t = o[e] = o[e] || this.dflt, i = s[e] = s[e] || this.dflt, h && (c = t.indexOf(h), l = i.indexOf(h), c !== l && (-1 === l ? o[e] = o[e].split(h).join("") : -1 === c && (o[e] += " " + h)));
                    t = o.join(", "), i = s.join(", ")
                }
                return ri(n, this.p, t, i, this.clrs, this.dflt, r, this.pr, u, f)
            }, i.parse = function(n, t, i, r, e, o) {
                return this.parseComplex(n.style, this.format(u(n, this.p, f, !1, this.dflt)), this.format(t), e, o)
            }, r.registerSpecialProp = function(n, t, i) {
                e(n, {
                    parser: function(n, r, u, f, e, s) {
                        var h = new o(n, u, 0, 0, e, 2, u, !1, i);
                        return h.plugin = s, h.setRatio = t(n, r, f._tween, u), h
                    },
                    priority: i
                })
            }, r.useSVGTransformAttr = bt || kt;
            var nt, cr = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                h = et("transform"),
                lr = fr + "transform",
                vt = et("transformOrigin"),
                y = null !== et("perspective"),
                ui = w.Transform = function() {
                    this.perspective = parseFloat(r.defaultTransformPerspective) || 0, this.force3D = r.defaultForce3D !== !1 && y ? r.defaultForce3D || "auto" : !1
                },
                au = window.SVGElement,
                ar = function(n, t, i) {
                    var r, u = v.createElementNS("http://www.w3.org/2000/svg", n),
                        f = /([a-z])([A-Z])/g;
                    for (r in i) u.setAttributeNS(null, r.replace(f, "$1-$2").toLowerCase(), i[r]);
                    return t.appendChild(u), u
                },
                vr = v.documentElement,
                vu = function() {
                    var t, n, r, i = it || /Android/i.test(b) && !window.chrome;
                    return v.createElementNS && !i && (t = ar("svg", vr), n = ar("rect", t, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), r = n.getBoundingClientRect().width, n.style[vt] = "50% 50%", n.style[h] = "scaleX(0.5)", i = r === n.getBoundingClientRect().width && !(kt && y), vr.removeChild(t)), i
                }(),
                yr = function(n, t, i, u, f) {
                    var h, l, a, v, y, p, o, w, b, k, d, c, g, nt, s = n._gsTransform,
                        e = wr(n, !0);
                    s && (g = s.xOrigin, nt = s.yOrigin), (!u || 2 > (h = u.split(" ")).length) && (o = n.getBBox(), t = ht(t).split(" "), h = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * o.width : parseFloat(t[0])) + o.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * o.height : parseFloat(t[1])) + o.y]), i.xOrigin = v = parseFloat(h[0]), i.yOrigin = y = parseFloat(h[1]), u && e !== ki && (p = e[0], o = e[1], w = e[2], b = e[3], k = e[4], d = e[5], c = p * b - o * w, l = v * (b / c) + y * (-w / c) + (w * d - b * k) / c, a = v * (-o / c) + y * (p / c) - (p * d - o * k) / c, v = i.xOrigin = h[0] = l, y = i.yOrigin = h[1] = a), s && (f || f !== !1 && r.defaultSmoothOrigin !== !1 ? (l = v - g, a = y - nt, s.xOffset += l * e[0] + a * e[2] - l, s.yOffset += l * e[1] + a * e[3] - a) : s.xOffset = s.yOffset = 0), n.setAttribute("data-svg-origin", h.join(" "))
                },
                pr = function(n) {
                    return !!(au && "function" == typeof n.getBBox && n.getCTM && (!n.parentNode || n.parentNode.getBBox && n.parentNode.getCTM))
                },
                ki = [1, 0, 0, 1, 0, 0],
                wr = function(n, t) {
                    var f, r, i, e, o, c = n._gsTransform || new ui,
                        l = 1e5;
                    if (h ? r = u(n, lr, null, !0) : n.currentStyle && (r = n.currentStyle.filter.match(eu), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), c.x || 0, c.y || 0].join(",") : ""), f = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, (c.svg || n.getBBox && pr(n)) && (f && -1 !== (n.style[h] + "").indexOf("matrix") && (r = n.style[h], f = 0), i = n.getAttribute("transform"), f && i && (-1 !== i.indexOf("matrix") ? (r = i, f = 0) : -1 !== i.indexOf("translate") && (r = "matrix(1,0,0,1," + i.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", f = 0))), f) return ki;
                    for (i = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], s = i.length; --s > -1;) e = Number(i[s]), i[s] = (o = e - (e |= 0)) ? (0 | o * l + (0 > o ? -.5 : .5)) / l + e : e;
                    return t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i
                },
                ut = w.getTransform = function(n, i, e, o) {
                    if (n._gsTransform && e && !o) return n._gsTransform;
                    var c, wt, gt, ni, ut, it, s = e ? n._gsTransform || new ui : new ui,
                        ei = 0 > s.scaleX,
                        ti = 2e-5,
                        ft = 1e5,
                        oi = y ? parseFloat(u(n, vt, i, !1, "0 0 0").split(" ")[2]) || s.zOrigin || 0 : 0,
                        si = parseFloat(r.defaultTransformPerspective) || 0;
                    if (s.svg = !(!n.getBBox || !pr(n)), s.svg && (yr(n, u(n, vt, f, !1, "50% 50%") + "", s, n.getAttribute("data-svg-origin")), nt = r.useSVGTransformAttr || vu), c = wr(n), c !== ki) {
                        if (16 === c.length) {
                            var bt, et, kt, l, a, d = c[0],
                                w = c[1],
                                dt = c[2],
                                hi = c[3],
                                ht = c[4],
                                b = c[5],
                                g = c[6],
                                ci = c[7],
                                ot = c[8],
                                k = c[9],
                                p = c[10],
                                ii = c[12],
                                ri = c[13],
                                st = c[14],
                                tt = c[11],
                                v = Math.atan2(g, p);
                            s.zOrigin && (st = -s.zOrigin, ii = ot * st - c[12], ri = k * st - c[13], st = p * st + s.zOrigin - c[14]), s.rotationX = v * rt, v && (l = Math.cos(-v), a = Math.sin(-v), bt = ht * l + ot * a, et = b * l + k * a, kt = g * l + p * a, ot = ht * -a + ot * l, k = b * -a + k * l, p = g * -a + p * l, tt = ci * -a + tt * l, ht = bt, b = et, g = kt), v = Math.atan2(ot, p), s.rotationY = v * rt, v && (l = Math.cos(-v), a = Math.sin(-v), bt = d * l - ot * a, et = w * l - k * a, kt = dt * l - p * a, k = w * a + k * l, p = dt * a + p * l, tt = hi * a + tt * l, d = bt, w = et, dt = kt), v = Math.atan2(w, d), s.rotation = v * rt, v && (l = Math.cos(-v), a = Math.sin(-v), d = d * l + ht * a, et = w * l + b * a, b = w * -a + b * l, g = dt * -a + g * l, w = et), s.rotationX && Math.abs(s.rotationX) + Math.abs(s.rotation) > 359.9 && (s.rotationX = s.rotation = 0, s.rotationY += 180), s.scaleX = (0 | Math.sqrt(d * d + w * w) * ft + .5) / ft, s.scaleY = (0 | Math.sqrt(b * b + k * k) * ft + .5) / ft, s.scaleZ = (0 | Math.sqrt(g * g + p * p) * ft + .5) / ft, s.skewX = 0, s.perspective = tt ? 1 / (0 > tt ? -tt : tt) : 0, s.x = ii, s.y = ri, s.z = st, s.svg && (s.x -= s.xOrigin - (s.xOrigin * d - s.yOrigin * ht), s.y -= s.yOrigin - (s.yOrigin * w - s.xOrigin * b))
                        } else if (!(y && !o && c.length && s.x === c[4] && s.y === c[5] && (s.rotationX || s.rotationY) || void 0 !== s.x && "none" === u(n, "display", i))) {
                            var fi = c.length >= 6,
                                ct = fi ? c[0] : 1,
                                lt = c[1] || 0,
                                at = c[2] || 0,
                                pt = fi ? c[3] : 1;
                            s.x = c[4] || 0, s.y = c[5] || 0, gt = Math.sqrt(ct * ct + lt * lt), ni = Math.sqrt(pt * pt + at * at), ut = ct || lt ? Math.atan2(lt, ct) * rt : s.rotation || 0, it = at || pt ? Math.atan2(at, pt) * rt + ut : s.skewX || 0, Math.abs(it) > 90 && 270 > Math.abs(it) && (ei ? (gt *= -1, it += 0 >= ut ? 180 : -180, ut += 0 >= ut ? 180 : -180) : (ni *= -1, it += 0 >= it ? 180 : -180)), s.scaleX = gt, s.scaleY = ni, s.rotation = ut, s.skewX = it, y && (s.rotationX = s.rotationY = s.z = 0, s.perspective = si, s.scaleZ = 1), s.svg && (s.x -= s.xOrigin - (s.xOrigin * ct + s.yOrigin * at), s.y -= s.yOrigin - (s.xOrigin * lt + s.yOrigin * pt))
                        }
                        s.zOrigin = oi;
                        for (wt in s) ti > s[wt] && s[wt] > -ti && (s[wt] = 0)
                    }
                    return e && (n._gsTransform = s, s.svg && (nt && n.style[h] ? t.delayedCall(.001, function() {
                        yt(n.style, h)
                    }) : !nt && n.getAttribute("transform") && t.delayedCall(.001, function() {
                        n.removeAttribute("transform")
                    }))), s
                },
                yu = function(n) {
                    var o, y, t = this.data,
                        nt = -t.rotation * d,
                        ft = nt + t.skewX * d,
                        e = 1e5,
                        h = (0 | Math.cos(nt) * t.scaleX * e) / e,
                        u = (0 | Math.sin(nt) * t.scaleX * e) / e,
                        f = (0 | Math.sin(ft) * -t.scaleY * e) / e,
                        c = (0 | Math.cos(ft) * t.scaleY * e) / e,
                        b = this.t.style,
                        g = this.t.currentStyle,
                        w, v, et, ot;
                    if (g) {
                        y = u, u = -f, f = -y, o = g.filter, b.filter = "";
                        var i, r, l = this.t.offsetWidth,
                            a = this.t.offsetHeight,
                            tt = "absolute" !== g.position,
                            p = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + u + ", M21=" + f + ", M22=" + c,
                            rt = t.x + l * t.xPercent / 100,
                            ut = t.y + a * t.yPercent / 100;
                        if (null != t.ox && (i = (t.oxp ? .01 * l * t.ox : t.ox) - l / 2, r = (t.oyp ? .01 * a * t.oy : t.oy) - a / 2, rt += i - (i * h + r * u), ut += r - (i * f + r * c)), tt ? (i = l / 2, r = a / 2, p += ", Dx=" + (i - (i * h + r * u) + rt) + ", Dy=" + (r - (i * f + r * c) + ut) + ")") : p += ", sizingMethod='auto expand')", b.filter = -1 !== o.indexOf("DXImageTransform.Microsoft.Matrix(") ? o.replace(ou, p) : p + " " + o, (0 === n || 1 === n) && 1 === h && 0 === u && 0 === f && 1 === c && (tt && -1 === p.indexOf("Dx=0, Dy=0") || ci.test(o) && 100 !== parseFloat(RegExp.$1) || -1 === o.indexOf("gradient(" && o.indexOf("Alpha")) && b.removeAttribute("filter")), !tt)
                            for (ot = 8 > it ? 1 : -1, i = t.ieOffsetX || 0, r = t.ieOffsetY || 0, t.ieOffsetX = Math.round((l - ((0 > h ? -h : h) * l + (0 > u ? -u : u) * a)) / 2 + rt), t.ieOffsetY = Math.round((a - ((0 > c ? -c : c) * a + (0 > f ? -f : f) * l)) / 2 + ut), s = 0; 4 > s; s++) v = hu[s], w = g[v], y = -1 !== w.indexOf("px") ? parseFloat(w) : k(this.t, v, parseFloat(w), w.replace(gt, "")) || 0, et = y !== t[v] ? 2 > s ? -t.ieOffsetX : -t.ieOffsetY : 2 > s ? i - t.ieOffsetX : r - t.ieOffsetY, b[v] = (t[v] = Math.round(y - et * (0 === s || 2 === s ? 1 : ot))) + "px"
                    }
                },
                pu = w.set3DTransformRatio = w.setTransformRatio = function(n) {
                    var c, l, tt, a, v, it, lt, at, rt, vt, yt, ut, ht, i, f, e, u, gt, g, o, s, pt, ft, t = this.data,
                        wt = this.t.style,
                        r = t.rotation,
                        bt = t.rotationX,
                        dt = t.rotationY,
                        b = t.scaleX,
                        k = t.scaleY,
                        et = t.scaleZ,
                        p = t.x,
                        w = t.y,
                        ot = t.z,
                        ct = t.svg,
                        st = t.perspective,
                        ni = t.force3D;
                    if (!(((1 !== n && 0 !== n || "auto" !== ni || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && ni || ot || st || dt || bt) && (!nt || !ct) && y)) return r || t.skewX || ct ? (r *= d, pt = t.skewX * d, ft = 1e5, c = Math.cos(r) * b, a = Math.sin(r) * b, l = Math.sin(r - pt) * -k, v = Math.cos(r - pt) * k, pt && "simple" === t.skewType && (u = Math.tan(pt), u = Math.sqrt(1 + u * u), l *= u, v *= u, t.skewY && (c *= u, a *= u)), ct && (p += t.xOrigin - (t.xOrigin * c + t.yOrigin * l) + t.xOffset, w += t.yOrigin - (t.xOrigin * a + t.yOrigin * v) + t.yOffset, nt && (t.xPercent || t.yPercent) && (i = this.t.getBBox(), p += .01 * t.xPercent * i.width, w += .01 * t.yPercent * i.height), i = 1e-6, i > p && p > -i && (p = 0), i > w && w > -i && (w = 0)), g = (0 | c * ft) / ft + "," + (0 | a * ft) / ft + "," + (0 | l * ft) / ft + "," + (0 | v * ft) / ft + "," + p + "," + w + ")", ct && nt ? this.t.setAttribute("transform", "matrix(" + g) : wt[h] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + g) : wt[h] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + b + ",0,0," + k + "," + p + "," + w + ")", void 0;
                    if (kt && (i = .0001, i > b && b > -i && (b = et = 2e-5), i > k && k > -i && (k = et = 2e-5), !st || t.z || t.rotationX || t.rotationY || (st = 0)), r || t.skewX) r *= d, f = c = Math.cos(r), e = a = Math.sin(r), t.skewX && (r -= t.skewX * d, f = Math.cos(r), e = Math.sin(r), "simple" === t.skewType && (u = Math.tan(t.skewX * d), u = Math.sqrt(1 + u * u), f *= u, e *= u, t.skewY && (c *= u, a *= u))), l = -e, v = f;
                    else {
                        if (!(dt || bt || 1 !== et || st || ct)) return wt[h] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + p + "px," + w + "px," + ot + "px)" + (1 !== b || 1 !== k ? " scale(" + b + "," + k + ")" : ""), void 0;
                        c = v = 1, l = a = 0
                    }
                    rt = 1, tt = it = lt = at = vt = yt = 0, ut = st ? -1 / st : 0, ht = t.zOrigin, i = 1e-6, o = ",", s = "0", r = dt * d, r && (f = Math.cos(r), e = Math.sin(r), lt = -e, vt = ut * -e, tt = c * e, it = a * e, rt = f, ut *= f, c *= f, a *= f), r = bt * d, r && (f = Math.cos(r), e = Math.sin(r), u = l * f + tt * e, gt = v * f + it * e, at = rt * e, yt = ut * e, tt = l * -e + tt * f, it = v * -e + it * f, rt *= f, ut *= f, l = u, v = gt), 1 !== et && (tt *= et, it *= et, rt *= et, ut *= et), 1 !== k && (l *= k, v *= k, at *= k, yt *= k), 1 !== b && (c *= b, a *= b, lt *= b, vt *= b), (ht || ct) && (ht && (p += tt * -ht, w += it * -ht, ot += rt * -ht + ht), ct && (p += t.xOrigin - (t.xOrigin * c + t.yOrigin * l) + t.xOffset, w += t.yOrigin - (t.xOrigin * a + t.yOrigin * v) + t.yOffset), i > p && p > -i && (p = s), i > w && w > -i && (w = s), i > ot && ot > -i && (ot = 0)), g = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(", g += (i > c && c > -i ? s : c) + o + (i > a && a > -i ? s : a) + o + (i > lt && lt > -i ? s : lt), g += o + (i > vt && vt > -i ? s : vt) + o + (i > l && l > -i ? s : l) + o + (i > v && v > -i ? s : v), bt || dt ? (g += o + (i > at && at > -i ? s : at) + o + (i > yt && yt > -i ? s : yt) + o + (i > tt && tt > -i ? s : tt), g += o + (i > it && it > -i ? s : it) + o + (i > rt && rt > -i ? s : rt) + o + (i > ut && ut > -i ? s : ut) + o) : g += ",0,0,0,0,1,0,", g += p + o + w + o + ot + o + (st ? 1 + -ot / st : 1) + ")", wt[h] = g
                };
            for (i = ui.prototype, i.x = i.y = i.z = i.skewX = i.skewY = i.rotation = i.rotationX = i.rotationY = i.zOrigin = i.xPercent = i.yPercent = i.xOffset = i.yOffset = 0, i.scaleX = i.scaleY = i.scaleZ = 1, e("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(n, t, i, e, s, l, a) {
                        if (e._lastParsedTransform === a) return s;
                        e._lastParsedTransform = a;
                        var p, b, ct, d, k, ft, et, tt, at, yt, ot = n._gsTransform,
                            st = n.style,
                            pt = 1e-6,
                            wt = cr.length,
                            w = a,
                            it = {},
                            rt = "transformOrigin";
                        if (a.display ? (d = u(n, "display"), st.display = "block", p = ut(n, f, !0, a.parseTransform), st.display = d) : p = ut(n, f, !0, a.parseTransform), e._transform = p, "string" == typeof w.transform && h) d = g.style, d[h] = w.transform, d.display = "block", d.position = "absolute", v.body.appendChild(g), b = ut(g, null, !1), v.body.removeChild(g), b.perspective || (b.perspective = p.perspective), null != w.xPercent && (b.xPercent = c(w.xPercent, p.xPercent)), null != w.yPercent && (b.yPercent = c(w.yPercent, p.yPercent));
                        else if ("object" == typeof w) {
                            if (b = {
                                    scaleX: c(null != w.scaleX ? w.scaleX : w.scale, p.scaleX),
                                    scaleY: c(null != w.scaleY ? w.scaleY : w.scale, p.scaleY),
                                    scaleZ: c(w.scaleZ, p.scaleZ),
                                    x: c(w.x, p.x),
                                    y: c(w.y, p.y),
                                    z: c(w.z, p.z),
                                    xPercent: c(w.xPercent, p.xPercent),
                                    yPercent: c(w.yPercent, p.yPercent),
                                    perspective: c(w.transformPerspective, p.perspective)
                                }, tt = w.directionalRotation, null != tt)
                                if ("object" == typeof tt)
                                    for (d in tt) w[d] = tt[d];
                                else w.rotation = tt;
                            "string" == typeof w.x && -1 !== w.x.indexOf("%") && (b.x = 0, b.xPercent = c(w.x, p.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (b.y = 0, b.yPercent = c(w.y, p.yPercent)), b.rotation = lt("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : p.rotation, p.rotation, "rotation", it), y && (b.rotationX = lt("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : p.rotationX || 0, p.rotationX, "rotationX", it), b.rotationY = lt("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : p.rotationY || 0, p.rotationY, "rotationY", it)), b.skewX = null == w.skewX ? p.skewX : lt(w.skewX, p.skewX), b.skewY = null == w.skewY ? p.skewY : lt(w.skewY, p.skewY), (ct = b.skewY - p.skewY) && (b.skewX += ct, b.rotation += ct)
                        }
                        for (y && null != w.force3D && (p.force3D = w.force3D, et = !0), p.skewType = w.skewType || p.skewType || r.defaultSkewType, ft = p.force3D || p.z || p.rotationX || p.rotationY || b.z || b.rotationX || b.rotationY || b.perspective, ft || null == w.scale || (b.scaleZ = 1); --wt > -1;) i = cr[wt], k = b[i] - p[i], (k > pt || -pt > k || null != w[i] || null != ni[i]) && (et = !0, s = new o(p, i, p[i], k, s), i in it && (s.e = it[i]), s.xs0 = 0, s.plugin = l, e._overwriteProps.push(s.n));
                        return k = w.transformOrigin, p.svg && (k || w.svgOrigin) && (at = p.xOffset, yt = p.yOffset, yr(n, ht(k), b, w.svgOrigin, w.smoothOrigin), s = ii(p, "xOrigin", (ot ? p : b).xOrigin, b.xOrigin, s, rt), s = ii(p, "yOrigin", (ot ? p : b).yOrigin, b.yOrigin, s, rt), (at !== p.xOffset || yt !== p.yOffset) && (s = ii(p, "xOffset", ot ? at : p.xOffset, p.xOffset, s, rt), s = ii(p, "yOffset", ot ? yt : p.yOffset, p.yOffset, s, rt)), k = nt ? null : "0px 0px"), (k || y && ft && p.zOrigin) && (h ? (et = !0, i = vt, k = (k || u(n, i, f, !1, "50% 50%")) + "", s = new o(st, i, 0, 0, s, -1, rt), s.b = st[i], s.plugin = l, y ? (d = p.zOrigin, k = k.split(" "), p.zOrigin = (k.length > 2 && (0 === d || "0px" !== k[2]) ? parseFloat(k[2]) : d) || 0, s.xs0 = s.e = k[0] + " " + (k[1] || "50%") + " 0px", s = new o(p, "zOrigin", 0, 0, s, -1, s.n), s.b = d, s.xs0 = s.e = p.zOrigin) : s.xs0 = s.e = k) : ht(k + "", p)), et && (e._transformType = p.svg && nt || !ft && 3 !== this._transformType ? 2 : 3), s
                    },
                    prefix: !0
                }), e("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), e("borderRadius", {
                    defaultValue: "0px",
                    parser: function(n, t, i, r, e) {
                        t = this.format(t);
                        var tt, l, d, h, o, s, p, a, it, rt, c, v, g, w, b, nt, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            ut = n.style;
                        for (it = parseFloat(n.offsetWidth), rt = parseFloat(n.offsetHeight), tt = t.split(" "), l = 0; y.length > l; l++) this.p.indexOf("border") && (y[l] = et(y[l])), o = h = u(n, y[l], f, !1, "0px"), -1 !== o.indexOf(" ") && (h = o.split(" "), o = h[0], h = h[1]), s = d = tt[l], p = parseFloat(o), v = o.substr((p + "").length), g = "=" === s.charAt(1), g ? (a = parseInt(s.charAt(0) + "1", 10), s = s.substr(2), a *= parseFloat(s), c = s.substr((a + "").length - (0 > a ? 1 : 0)) || "") : (a = parseFloat(s), c = s.substr((a + "").length)), "" === c && (c = wt[i] || v), c !== v && (w = k(n, "borderLeft", p, v), b = k(n, "borderTop", p, v), "%" === c ? (o = 100 * (w / it) + "%", h = 100 * (b / rt) + "%") : "em" === c ? (nt = k(n, "borderLeft", 1, "em"), o = w / nt + "em", h = b / nt + "em") : (o = w + "px", h = b + "px"), g && (s = parseFloat(o) + a + c, d = parseFloat(h) + a + c)), e = ri(ut, y[l], o + " " + h, s + " " + d, !1, "0px", e);
                        return e
                    },
                    prefix: !0,
                    formatter: sr("0px 0px 0px 0px", !1, !0)
                }), e("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(n, t, i, r, e, o) {
                        var c, b, h, v, y, l, p = "background-position",
                            a = f || ot(n, null),
                            s = this.format((a ? it ? a.getPropertyValue(p + "-x") + " " + a.getPropertyValue(p + "-y") : a.getPropertyValue(p) : n.currentStyle.backgroundPositionX + " " + n.currentStyle.backgroundPositionY) || "0 0"),
                            w = this.format(t);
                        if (-1 !== s.indexOf("%") != (-1 !== w.indexOf("%")) && (l = u(n, "backgroundImage").replace(uu, ""), l && "none" !== l)) {
                            for (c = s.split(" "), b = w.split(" "), ai.setAttribute("src", l), h = 2; --h > -1;) s = c[h], v = -1 !== s.indexOf("%"), v !== (-1 !== b[h].indexOf("%")) && (y = 0 === h ? n.offsetWidth - ai.width : n.offsetHeight - ai.height, c[h] = v ? parseFloat(s) / 100 * y + "px" : 100 * (parseFloat(s) / y) + "%");
                            s = c.join(" ")
                        }
                        return this.parseComplex(n.style, s, w, e, o)
                    },
                    formatter: ht
                }), e("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: ht
                }), e("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), e("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), e("transformStyle", {
                    prefix: !0
                }), e("backfaceVisibility", {
                    prefix: !0
                }), e("userSelect", {
                    prefix: !0
                }), e("margin", {
                    parser: wi("marginTop,marginRight,marginBottom,marginLeft")
                }), e("padding", {
                    parser: wi("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), e("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(n, t, i, r, e, o) {
                        var c, s, h;
                        return 9 > it ? (s = n.currentStyle, h = 8 > it ? " " : ",", c = "rect(" + s.clipTop + h + s.clipRight + h + s.clipBottom + h + s.clipLeft + ")", t = this.format(t).split(",").join(h)) : (c = this.format(u(n, this.p, f, !1, this.dflt)), t = this.format(t)), this.parseComplex(n.style, c, t, e, o)
                    }
                }), e("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), e("autoRound,strictUnits", {
                    parser: function(n, t, i, r, u) {
                        return u
                    }
                }), e("border", {
                    defaultValue: "0px solid #000",
                    parser: function(n, t, i, r, e, o) {
                        return this.parseComplex(n.style, this.format(u(n, "borderTopWidth", f, !1, "0px") + " " + u(n, "borderTopStyle", f, !1, "solid") + " " + u(n, "borderTopColor", f, !1, "#000")), this.format(t), e, o)
                    },
                    color: !0,
                    formatter: function(n) {
                        var t = n.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (n.match(l) || ["#000"])[0]
                    }
                }), e("borderWidth", {
                    parser: wi("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), e("float,cssFloat,styleFloat", {
                    parser: function(n, t, i, r, u) {
                        var f = n.style,
                            e = "cssFloat" in f ? "cssFloat" : "styleFloat";
                        return new o(f, e, 0, 0, u, -1, i, !1, 0, f[e], t)
                    }
                }), br = function(n) {
                    var f, i = this.t,
                        t = i.filter || u(this.data, "filter") || "",
                        r = 0 | this.s + this.c * n;
                    100 === r && (-1 === t.indexOf("atrix(") && -1 === t.indexOf("radient(") && -1 === t.indexOf("oader(") ? (i.removeAttribute("filter"), f = !u(this.data, "filter")) : (i.filter = t.replace(iu, ""), f = !0)), f || (this.xn1 && (i.filter = t = t || "alpha(opacity=" + r + ")"), -1 === t.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = t + " alpha(opacity=" + r + ")") : i.filter = t.replace(ci, "opacity=" + r))
                }, e("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(n, t, i, r, e, s) {
                        var h = parseFloat(u(n, "opacity", f, !1, "1")),
                            c = n.style,
                            l = "autoAlpha" === i;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + h), l && 1 === h && "hidden" === u(n, "visibility", f) && 0 !== t && (h = 0), tt ? e = new o(c, "opacity", h, t - h, e) : (e = new o(c, "opacity", 100 * h, 100 * (t - h), e), e.xn1 = l ? 1 : 0, c.zoom = 1, e.type = 2, e.b = "alpha(opacity=" + e.s + ")", e.e = "alpha(opacity=" + (e.s + e.c) + ")", e.data = n, e.plugin = s, e.setRatio = br), l && (e = new o(c, "visibility", 0, 0, e, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), e.xs0 = "inherit", r._overwriteProps.push(e.n), r._overwriteProps.push(i)), e
                    }
                }), yt = function(n, t) {
                    t && (n.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), n.removeProperty(t.replace(nr, "-$1").toLowerCase())) : n.removeAttribute(t))
                }, kr = function(n) {
                    if (this.t._gsClassPT = this, 1 === n || 0 === n) {
                        this.t.setAttribute("class", 0 === n ? this.b : this.e);
                        for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : yt(i, t.p), t = t._next;
                        1 === n && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                }, e("className", {
                    parser: function(n, t, i, r, u, e, s) {
                        var c, y, l, a, h, v = n.getAttribute("class") || "",
                            p = n.style.cssText;
                        if (u = r._classNamePT = new o(n, i, 0, 0, u, 2), u.setRatio = kr, u.pr = -11, ft = !0, u.b = v, y = st(n, f), l = n._gsClassPT) {
                            for (a = {}, h = l.data; h;) a[h.p] = 1, h = h._next;
                            l.setRatio(1)
                        }
                        return n._gsClassPT = u, u.e = "=" !== t.charAt(1) ? t : v.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), n.setAttribute("class", u.e), c = yi(n, y, st(n), s, a), n.setAttribute("class", v), u.data = c.firstMPT, n.style.cssText = p, u = u.xfirst = r.parse(n, c.difs, u, e)
                    }
                }), dr = function(n) {
                    if ((1 === n || 0 === n) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var i, t, r, u, f, e = this.t.style,
                            o = a.transform.parse;
                        if ("all" === this.e) e.cssText = "", u = !0;
                        else
                            for (i = this.e.split(" ").join("").split(","), r = i.length; --r > -1;) t = i[r], a[t] && (a[t].parse === o ? u = !0 : t = "transformOrigin" === t ? vt : a[t].p), yt(e, t);
                        u && (yt(e, h), f = this.t._gsTransform, f && (f.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                }, e("clearProps", {
                    parser: function(n, t, i, r, u) {
                        return u = new o(n, i, 0, 0, u, 2), u.setRatio = dr, u.e = t, u.pr = -10, u.data = r._tween, ft = !0, u
                    }
                }), i = "bezier,throwProps,physicsProps,physics2D".split(","), s = i.length; s--;) lu(i[s]);
            return i = r.prototype, i._firstPT = i._lastParsedTransform = i._transform = null, i._onInitTween = function(n, t, i) {
                if (!n.nodeType) return !1;
                this._target = n, this._tween = i, this._vars = t, ei = t.autoRound, ft = !1, wt = t.suffixMap || r.suffixMap, f = ot(n, ""), fi = this._overwriteProps;
                var l, s, e, v, w, b, p, y, k, c = n.style;
                if (di && "" === c.zIndex && (l = u(n, "zIndex", f), ("auto" === l || "" === l) && this._addLazySet(c, "zIndex", 0)), "string" == typeof t && (v = c.cssText, l = st(n, f), c.cssText = v + ";" + t, l = yi(n, l, st(n)).difs, !tt && tu.test(t) && (l.opacity = parseFloat(RegExp.$1)), t = l, c.cssText = v), this._firstPT = s = t.className ? a.className.parse(n, t.className, "className", this, null, null, t) : this.parse(n, t, null), this._transformType) {
                    for (k = 3 === this._transformType, h ? bt && (di = !0, "" === c.zIndex && (p = u(n, "zIndex", f), ("auto" === p || "" === p) && this._addLazySet(c, "zIndex", 0)), gi && this._addLazySet(c, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (k ? "visible" : "hidden"))) : c.zoom = 1, e = s; e && e._next;) e = e._next;
                    y = new o(n, "transform", 0, 0, null, 2), this._linkCSSP(y, null, e), y.setRatio = h ? pu : yu, y.data = this._transform || ut(n, f, !0), y.tween = i, y.pr = -1, fi.pop()
                }
                if (ft) {
                    for (; s;) {
                        for (b = s._next, e = v; e && e.pr > s.pr;) e = e._next;
                        (s._prev = e ? e._prev : w) ? s._prev._next = s: v = s, (s._next = e) ? e._prev = s : w = s, s = b
                    }
                    this._firstPT = v
                }
                return !0
            }, i.parse = function(n, t, i, r) {
                var e, d, h, c, v, s, y, l, p, w, b = n.style;
                for (e in t) s = t[e], d = a[e], d ? i = d.parse(n, s, e, this, i, r, t) : (v = u(n, e, f) + "", p = "string" == typeof s, "color" === e || "fill" === e || "stroke" === e || -1 !== e.indexOf("Color") || p && ru.test(s) ? (p || (s = ti(s), s = (s.length > 3 ? "rgba(" : "rgb(") + s.join(",") + ")"), i = ri(b, e, v, s, !0, "transparent", i, 0, r)) : !p || -1 === s.indexOf(" ") && -1 === s.indexOf(",") ? (h = parseFloat(v), y = h || 0 === h ? v.substr((h + "").length) : "", ("" === v || "auto" === v) && ("width" === e || "height" === e ? (h = cu(n, e, f), y = "px") : "left" === e || "top" === e ? (h = er(n, e, f), y = "px") : (h = "opacity" !== e ? 0 : 1, y = "")), w = p && "=" === s.charAt(1), w ? (c = parseInt(s.charAt(0) + "1", 10), s = s.substr(2), c *= parseFloat(s), l = s.replace(gt, "")) : (c = parseFloat(s), l = p ? s.replace(gt, "") : ""), "" === l && (l = e in wt ? wt[e] : y), s = c || 0 === c ? (w ? c + h : c) + l : t[e], y !== l && "" !== l && (c || 0 === c) && h && (h = k(n, e, h, y), "%" === l ? (h /= k(n, e, 100, "%") / 100, t.strictUnits !== !0 && (v = h + "%")) : "em" === l || "rem" === l ? h /= k(n, e, 1, l) : "px" !== l && (c = k(n, e, c, l), l = "px"), w && (c || 0 === c) && (s = c + h + l)), w && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== b[e] && (s || "NaN" != s + "" && null != s) ? (i = new o(b, e, c || h || 0, 0, i, -1, e, !1, 0, v, s), i.xs0 = "none" !== s || "display" !== e && -1 === e.indexOf("Style") ? s : v) : ur("invalid " + e + " tween value: " + t[e]) : (i = new o(b, e, h, c - h, i, 0, e, ei !== !1 && ("px" === l || "zIndex" === e), 0, v, s), i.xs0 = l)) : i = ri(b, e, v, s, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                return i
            }, i.setRatio = function(n) {
                var r, u, i, t = this._firstPT,
                    f = 1e-6;
                if (1 !== n || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (n || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; t;) {
                            if (r = t.c * n + t.s, t.r ? r = Math.round(r) : f > r && r > -f && (r = 0), t.type)
                                if (1 === t.type)
                                    if (i = t.l, 2 === i) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2;
                                    else if (3 === i) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3;
                            else if (4 === i) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4;
                            else if (5 === i) t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5;
                            else {
                                for (u = t.xs0 + r + t.xs1, i = 1; t.l > i; i++) u += t["xn" + i] + t["xs" + (i + 1)];
                                t.t[t.p] = u
                            } else -1 === t.type ? t.t[t.p] = t.xs0 : t.setRatio && t.setRatio(n);
                            else t.t[t.p] = r + t.xs0;
                            t = t._next
                        } else
                            for (; t;) 2 !== t.type ? t.t[t.p] = t.b : t.setRatio(n), t = t._next;
                    else
                        for (; t;) {
                            if (2 !== t.type)
                                if (t.r && -1 !== t.type)
                                    if (r = Math.round(t.s + t.c), t.type) {
                                        if (1 === t.type) {
                                            for (i = t.l, u = t.xs0 + r + t.xs1, i = 1; t.l > i; i++) u += t["xn" + i] + t["xs" + (i + 1)];
                                            t.t[t.p] = u
                                        }
                                    } else t.t[t.p] = r + t.xs0;
                            else t.t[t.p] = t.e;
                            else t.setRatio(n);
                            t = t._next
                        }
            }, i._enableTransforms = function(n) {
                this._transform = this._transform || ut(this._target, f, !0), this._transformType = this._transform.svg && nt || !n && 3 !== this._transformType ? 2 : 3
            }, gr = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            }, i._addLazySet = function(n, t, i) {
                var r = this._firstPT = new o(n, t, 0, 0, this._firstPT, 2);
                r.e = i, r.setRatio = gr, r.data = this
            }, i._linkCSSP = function(n, t, i, r) {
                return n && (t && (t._prev = n), n._next && (n._next._prev = n._prev), n._prev ? n._prev._next = n._next : this._firstPT === n && (this._firstPT = n._next, r = !0), i ? i._next = n : r || null !== this._firstPT || (this._firstPT = n), n._next = t, n._prev = i), n
            }, i._kill = function(t) {
                var i, f, r, u = t;
                if (t.autoAlpha || t.alpha) {
                    u = {};
                    for (f in t) u[f] = t[f];
                    u.opacity = 1, u.autoAlpha && (u.visibility = 1)
                }
                return t.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), n.prototype._kill.call(this, u)
            }, pt = function(n, t, i) {
                var e, u, r, f;
                if (n.slice)
                    for (u = n.length; --u > -1;) pt(n[u], t, i);
                else
                    for (e = n.childNodes, u = e.length; --u > -1;) r = e[u], f = r.type, r.style && (t.push(st(r)), i && i.push(r)), 1 !== f && 9 !== f && 11 !== f || !r.childNodes.length || pt(r, t, i)
            }, r.cascadeTo = function(n, i, r) {
                var u, f, e, h, o = t.to(n, i, r),
                    l = [o],
                    c = [],
                    a = [],
                    s = [],
                    v = t._internals.reservedProps;
                for (n = o._targets || o.target, pt(n, c, s), o.render(i, !0, !0), pt(n, a), o.render(0, !0, !0), o._enabled(!0), u = s.length; --u > -1;)
                    if (f = yi(s[u], c[u], a[u]), f.firstMPT) {
                        f = f.difs;
                        for (e in r) v[e] && (f[e] = r[e]);
                        h = {};
                        for (e in f) h[e] = c[u][e];
                        l.push(t.fromTo(s[u], i, h, f))
                    }
                return l
            }, n.activate([r]), r
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(n) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[n]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }("CSSPlugin"), _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window,
    function(n) {
        "use strict";
        var o = n.GreenSockGlobals || n,
            y = function(n) {
                for (var r = n.split("."), i = o, t = 0; r.length > t; t++) i[r[t]] = i = i[r[t]] || {};
                return i
            },
            p = y("com.greensock.utils"),
            f = function(n) {
                var t = n.nodeType,
                    i = "";
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += f(n)
                } else if (3 === t || 4 === t) return n.nodeValue;
                return i
            },
            i = document,
            s = i.defaultView ? i.defaultView.getComputedStyle : function() {},
            w = /([A-Z])/g,
            t = function(n, t, i, r) {
                var u;
                return (i = i || s(n, null)) ? (n = i.getPropertyValue(t.replace(w, "-$1").toLowerCase()), u = n || i.length ? n : i[t]) : n.currentStyle && (i = n.currentStyle, u = i[t]), r ? u : parseInt(u, 10) || 0
            },
            h = function(n) {
                return n.length && n[0] && (n[0].nodeType && n[0].style && !n.nodeType || n[0].length && n[0][0]) ? !0 : !1
            },
            b = function(n) {
                for (var t, i, u = [], f = n.length, r = 0; f > r; r++)
                    if (t = n[r], h(t))
                        for (i = t.length, i = 0; t.length > i; i++) u.push(t[i]);
                    else u.push(t);
                return u
            },
            r = ")eefec303079ad17405c",
            c = /(?:<br>|<br\/>|<br \/>)/gi,
            k = i.all && !i.addEventListener,
            d = "<div style='position:relative;display:inline-block;" + (k ? "*display:inline;*zoom:1;'" : "'"),
            l = function(n) {
                n = n || "";
                var t = -1 !== n.indexOf("++"),
                    i = 1;
                return t && (n = n.split("++").join("")),
                    function() {
                        return d + (n ? " class='" + n + (t ? i++ : "") + "'>" : ">")
                    }
            },
            u = p.SplitText = o.SplitText = function(n, t) {
                if ("string" == typeof n && (n = u.selector(n)), !n) throw "cannot split a null element.";
                this.elements = h(n) ? b(n) : [n], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
            },
            a = function(n, t, i) {
                var r = n.nodeType;
                if (1 === r || 9 === r || 11 === r)
                    for (n = n.firstChild; n; n = n.nextSibling) a(n, t, i);
                else(3 === r || 4 === r) && (n.nodeValue = n.nodeValue.split(t).join(i))
            },
            e = function(n, t) {
                for (var i = t.length; --i > -1;) n.push(t[i])
            },
            g = function(n, u, o, h, v) {
                c.test(n.innerHTML) && (n.innerHTML = n.innerHTML.replace(c, r));
                var b, st, g, rt, p, ut, ht, ct, y, nt, w, ft, dt, gt, k = f(n),
                    pt = u.type || u.split || "chars,words,lines",
                    tt = -1 !== pt.indexOf("lines") ? [] : null,
                    et = -1 !== pt.indexOf("words"),
                    ot = -1 !== pt.indexOf("chars"),
                    d = "absolute" === u.position || u.absolute === !0,
                    ni = d ? "&#173; " : " ",
                    ti = -999,
                    it = s(n),
                    ii = t(n, "paddingLeft", it),
                    si = t(n, "borderBottomWidth", it) + t(n, "borderTopWidth", it),
                    hi = t(n, "borderLeftWidth", it) + t(n, "borderRightWidth", it),
                    ci = t(n, "paddingTop", it) + t(n, "paddingBottom", it),
                    li = t(n, "paddingLeft", it) + t(n, "paddingRight", it),
                    ai = t(n, "textAlign", it, !0),
                    at = n.clientHeight,
                    vt = n.clientWidth,
                    wt = "<\/div>",
                    bt = l(u.wordsClass),
                    ri = l(u.charsClass),
                    ui = -1 !== (u.linesClass || "").indexOf("++"),
                    yt = u.linesClass,
                    fi = -1 !== k.indexOf("<"),
                    lt = !0,
                    kt = [],
                    ei = [],
                    oi = [];
                for (ui && (yt = yt.split("++").join("")), fi && (k = k.split("<").join("{{LT}}")), b = k.length, rt = bt(), p = 0; b > p; p++)
                    if (ht = k.charAt(p), ")" === ht && k.substr(p, 20) === r) rt += (lt ? wt : "") + "<BR/>", lt = !1, p !== b - 20 && k.substr(p + 20, 20) !== r && (rt += " " + bt(), lt = !0), p += 19;
                    else if (" " === ht && " " !== k.charAt(p - 1) && p !== b - 1 && k.substr(p - 20, 20) !== r) {
                    for (rt += lt ? wt : "", lt = !1;
                        " " === k.charAt(p + 1);) rt += ni, p++;
                    (")" !== k.charAt(p + 1) || k.substr(p + 1, 20) !== r) && (rt += ni + bt(), lt = !0)
                } else "{" === ht && "{{LT}}" === k.substr(p, 6) ? (rt += ot ? ri() + "{{LT}}<\/div>" : "{{LT}}", p += 5) : rt += ot && " " !== ht ? ri() + ht + "<\/div>" : ht;
                for (n.innerHTML = rt + (lt ? wt : ""), fi && a(n, "{{LT}}", "<"), ut = n.getElementsByTagName("*"), b = ut.length, ct = [], p = 0; b > p; p++) ct[p] = ut[p];
                if (tt || d)
                    for (p = 0; b > p; p++) y = ct[p], g = y.parentNode === n, (g || d || ot && !et) && (nt = y.offsetTop, tt && g && nt !== ti && "BR" !== y.nodeName && (st = [], tt.push(st), ti = nt), d && (y._x = y.offsetLeft, y._y = nt, y._w = y.offsetWidth, y._h = y.offsetHeight), tt && (et !== g && ot || (st.push(y), y._x -= ii), g && p && (ct[p - 1]._wordEnd = !0), "BR" === y.nodeName && y.nextSibling && "BR" === y.nextSibling.nodeName && tt.push([])));
                for (p = 0; b > p; p++) y = ct[p], g = y.parentNode === n, "BR" !== y.nodeName ? (d && (ft = y.style, et || g || (y._x += y.parentNode._x, y._y += y.parentNode._y), ft.left = y._x + "px", ft.top = y._y + "px", ft.position = "absolute", ft.display = "block", ft.width = y._w + 1 + "px", ft.height = y._h + "px"), et ? g && "" !== y.innerHTML ? ei.push(y) : ot && kt.push(y) : g ? (n.removeChild(y), ct.splice(p--, 1), b--) : !g && ot && (nt = !tt && !d && y.nextSibling, n.appendChild(y), nt || n.appendChild(i.createTextNode(" ")), kt.push(y))) : tt || d ? (n.removeChild(y), ct.splice(p--, 1), b--) : et || n.appendChild(y);
                if (tt) {
                    for (d && (w = i.createElement("div"), n.appendChild(w), dt = w.offsetWidth + "px", nt = w.offsetParent === n ? 0 : n.offsetLeft, n.removeChild(w)), ft = n.style.cssText, n.style.cssText = "display:none;"; n.firstChild;) n.removeChild(n.firstChild);
                    for (gt = !d || !et && !ot, p = 0; tt.length > p; p++) {
                        for (st = tt[p], w = i.createElement("div"), w.style.cssText = "display:block;text-align:" + ai + ";position:" + (d ? "absolute;" : "relative;"), yt && (w.className = yt + (ui ? p + 1 : "")), oi.push(w), b = st.length, ut = 0; b > ut; ut++) "BR" !== st[ut].nodeName && (y = st[ut], w.appendChild(y), gt && (y._wordEnd || et) && w.appendChild(i.createTextNode(" ")), d && (0 === ut && (w.style.top = y._y + "px", w.style.left = ii + nt + "px"), y.style.top = "0px", nt && (y.style.left = y._x - nt + "px")));
                        0 === b && (w.innerHTML = "&nbsp;"), et || ot || (w.innerHTML = f(w).split(String.fromCharCode(160)).join(" ")), d && (w.style.width = dt, w.style.height = y._h + "px"), n.appendChild(w)
                    }
                    n.style.cssText = ft
                }
                d && (at > n.clientHeight && (n.style.height = at - ci + "px", at > n.clientHeight && (n.style.height = at + si + "px")), vt > n.clientWidth && (n.style.width = vt - li + "px", vt > n.clientWidth && (n.style.width = vt + hi + "px"))), e(o, kt), e(h, ei), e(v, oi)
            },
            v = u.prototype;
        v.split = function(n) {
            this.isSplit && this.revert(), this.vars = n || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var t = this.elements.length; --t > -1;) this._originals[t] = this.elements[t].innerHTML, g(this.elements[t], this.vars, this.chars, this.words, this.lines);
            return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
        }, v.revert = function() {
            if (!this._originals) throw "revert() call wasn't scoped properly.";
            for (var n = this._originals.length; --n > -1;) this.elements[n].innerHTML = this._originals[n];
            return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
        }, u.selector = n.$ || n.jQuery || function(t) {
            var i = n.$ || n.jQuery;
            return i ? (u.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
        }, u.version = "0.3.4"
    }(_gsScope),
    function(n) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[n]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (module.exports = t())
    }("SplitText");
try {
    window.GreenSockGlobals = null, window._gsQueue = null, window._gsDefine = null, delete window.GreenSockGlobals, delete window._gsQueue, delete window._gsDefine
} catch (e) {}
try {
    window.GreenSockGlobals = oldgs, window._gsQueue = oldgs_queue
} catch (e) {}
if (window.tplogs == !0) try {
    console.groupEnd()
} catch (e) {}(function(n) {
    n.waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
    }, n.expr[":"].uncached = function(t) {
        var i = document.createElement("img");
        return i.src = t.src, n(t).is('img[src!=""]') && !i.complete
    }, n.fn.waitForImages = function(t, i, r) {
        if (n.isPlainObject(arguments[0]) && (i = t.each, r = t.waitForAll, t = t.finished), t = t || n.noop, i = i || n.noop, r = !!r, !n.isFunction(t) || !n.isFunction(i)) throw new TypeError("An invalid callback was supplied.");
        return this.each(function() {
            var f = n(this),
                u = [],
                s, h, e, o;
            r ? (s = n.waitForImages.hasImageProperties || [], h = /url\((['"]?)(.*?)\1\)/g, f.find("*").each(function() {
                var t = n(this);
                t.is("img:uncached") && u.push({
                    src: t.attr("src"),
                    element: t[0]
                }), n.each(s, function(n, i) {
                    var r = t.css(i),
                        f;
                    if (!r) return !0;
                    while (f = h.exec(r)) u.push({
                        src: f[2],
                        element: t[0]
                    })
                })
            })) : f.find("img:uncached").each(function() {
                u.push({
                    src: this.src,
                    element: this
                })
            }), e = u.length, o = 0, e == 0 && t.call(f[0]), n.each(u, function(r, u) {
                var s = new Image;
                n(s).bind("load error", function(n) {
                    return o++, i.call(u.element, o, e, n.type == "load"), o == e ? (t.call(f[0]), !1) : void 0
                }), s.src = u.src
            })
        })
    }
})(jQuery), ! function(n, t) {
    "use strict";
    var i;
    n.fn.extend({
        revolution: function(r) {
            var u = {
                delay: 9e3,
                responsiveLevels: 4064,
                visibilityLevels: [2048, 1024, 778, 480],
                gridwidth: 960,
                gridheight: 500,
                minHeight: 0,
                autoHeight: "off",
                sliderType: "standard",
                sliderLayout: "auto",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                disableProgressBar: "off",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                shadow: 0,
                dottedOverlay: "none",
                startDelay: 0,
                lazyType: "smart",
                spinner: "spinner0",
                shuffle: "off",
                viewPort: {
                    enable: !1,
                    outof: "wait",
                    visible_area: "60%"
                },
                fallbacks: {
                    isJoomla: !1,
                    panZoomDisableOnMobile: "off",
                    simplifyAll: "on",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: !0
                },
                parallax: {
                    type: "off",
                    levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    speed: 400,
                    bgparallax: "on",
                    opacity: "on",
                    disable_onmobile: "off",
                    ddd_shadow: "on",
                    ddd_bgfreeze: "off",
                    ddd_overflow: "visible",
                    ddd_layer_overflow: "visible",
                    ddd_z_correction: 65,
                    ddd_path: "mouse"
                },
                carousel: {
                    horizontal_align: "center",
                    vertical_align: "center",
                    infinity: "on",
                    space: 0,
                    maxVisibleItems: 3,
                    stretch: "off",
                    fadeout: "on",
                    maxRotation: 0,
                    minScale: 0,
                    vary_fade: "off",
                    vary_rotation: "on",
                    vary_scale: "off",
                    border_radius: "0px",
                    padding_top: 0,
                    padding_bottom: 0
                },
                navigation: {
                    keyboardNavigation: "on",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "off",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: !1,
                        swipe_direction: "horizontal"
                    },
                    arrows: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: "",
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        h_align: "left",
                        v_align: "center",
                        space: 0,
                        h_offset: 20,
                        v_offset: 0,
                        tmp: '<span class="tp-bullet-image"><\/span><span class="tp-bullet-title"><\/span>'
                    },
                    thumbnails: {
                        style: "",
                        enable: !1,
                        width: 100,
                        height: 50,
                        min_width: 100,
                        wrapper_padding: 2,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-thumb-image"><\/span><span class="tp-thumb-title"><\/span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        position: "inner",
                        space: 2,
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    tabs: {
                        style: "",
                        enable: !1,
                        width: 100,
                        min_width: 100,
                        height: 50,
                        wrapper_padding: 10,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-tab-image"><\/span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        space: 0,
                        position: "inner",
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                extensions: "extensions/",
                extensions_suffix: ".min.js",
                debugMode: !1
            };
            return r = n.extend(!0, {}, u, r), this.each(function() {
                var u = n(this);
                "hero" == r.sliderType && u.find(">ul>li").each(function(t) {
                    t > 0 && n(this).remove()
                }), r.jsFileLocation = r.jsFileLocation || ft("themepunch.revolution.min.js"), r.jsFileLocation = r.jsFileLocation + r.extensions, r.scriptsneeded = ut(r, u), r.curWinRange = 0, n(this).on("scriptsloaded", function() {
                    return r.modulesfailing ? (u.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + r.errorm + "<\/div>").show(), !1) : (i.migration != t && (r = i.migration(u, r)), punchgs.force3D = !0, "on" !== r.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), et(u, r), void ot(u, r))
                }), p(u, r.scriptsneeded)
            })
        },
        revaddcallback: function(i) {
            return this.each(function() {
                var r = n(this),
                    f, u;
                r != t && r.length > 0 && n("body").find("#" + r.attr("id")).length > 0 && (f = r.parent().find(".tp-bannertimer"), u = f.data("opt"), u.callBackArray === t && (u.callBackArray = []), u.callBackArray.push(i))
            })
        },
        revgetparallaxproc: function() {
            var i = n(this),
                r, u;
            if (i != t && i.length > 0 && n("body").find("#" + i.attr("id")).length > 0) return r = i.parent().find(".tp-bannertimer"), u = r.data("opt"), u.scrollproc
        },
        revdebugmode: function() {
            return this.each(function() {
                var i = n(this),
                    u, r;
                i != t && i.length > 0 && n("body").find("#" + i.attr("id")).length > 0 && (u = i.parent().find(".tp-bannertimer"), r = u.data("opt"), r.debugMode = !0, s(i, r))
            })
        },
        revscroll: function(i) {
            return this.each(function() {
                var r = n(this);
                r != t && r.length > 0 && n("body").find("#" + r.attr("id")).length > 0 && n("body,html").animate({
                    scrollTop: r.offset().top + opt.li[0].height() - i + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function() {
            return this.each(function() {
                var i = n(this),
                    r, u;
                i != t && i.length > 0 && n("body").find("#" + i.attr("id")).length > 0 && (r = i.parent().find(".tp-bannertimer"), u = r.data("opt"), s(i, u))
            })
        },
        revkill: function() {
            var e = this,
                r = n(this),
                u, f, o;
            if (punchgs.TweenLite.killDelayedCallsTo(i.showHideNavElements), i.endMoveCaption && punchgs.TweenLite.killDelayedCallsTo(i.endMoveCaption), r != t && r.length > 0 && n("body").find("#" + r.attr("id")).length > 0) {
                r.data("conthover", 1), r.data("conthover-changed", 1), r.trigger("revolution.slide.onpause"), u = r.parent().find(".tp-bannertimer"), f = u.data("opt"), f.tonpause = !0, r.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(r.find("*"), !1), punchgs.TweenLite.killTweensOf(r, !1), r.unbind("hover, mouseover, mouseenter,mouseleave, resize"), o = "resize.revslider-" + r.attr("id"), n(window).off(o), r.find("*").each(function() {
                    var i = n(this);
                    i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != t && i.data("tween").kill(), i.data("kenburn") != t && i.data("kenburn").kill(), i.data("timeline_out") != t && i.data("timeline_out").kill(), i.data("timeline") != t && i.data("timeline").kill(), i.remove(), i.empty(), i = null
                }), punchgs.TweenLite.killTweensOf(r.find("*"), !1), punchgs.TweenLite.killTweensOf(r, !1), u.remove();
                try {
                    r.closest(".forcefullwidth_wrapper_tp_banner").remove()
                } catch (s) {}
                try {
                    r.closest(".rev_slider_wrapper").remove()
                } catch (s) {}
                try {
                    r.remove()
                } catch (s) {}
                return r.empty(), r.html(), r = null, f = null, delete e.c, delete e.opt, !0
            }
            return !1
        },
        revpause: function() {
            return this.each(function() {
                var i = n(this),
                    r, u;
                i != t && i.length > 0 && n("body").find("#" + i.attr("id")).length > 0 && (i.data("conthover", 1), i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause"), r = i.parent().find(".tp-bannertimer"), u = r.data("opt"), u.tonpause = !0, i.trigger("stoptimer"))
            })
        },
        revresume: function() {
            return this.each(function() {
                var i = n(this),
                    r, u;
                i != t && i.length > 0 && n("body").find("#" + i.attr("id")).length > 0 && (i.data("conthover", 0), i.data("conthover-changed", 1), i.trigger("revolution.slide.onresume"), r = i.parent().find(".tp-bannertimer"), u = r.data("opt"), u.tonpause = !1, i.trigger("starttimer"))
            })
        },
        revnext: function() {
            return this.each(function() {
                var r = n(this),
                    u, f;
                r != t && r.length > 0 && n("body").find("#" + r.attr("id")).length > 0 && (u = r.parent().find(".tp-bannertimer"), f = u.data("opt"), i.callingNewSlide(f, r, 1))
            })
        },
        revprev: function() {
            return this.each(function() {
                var r = n(this),
                    u, f;
                r != t && r.length > 0 && n("body").find("#" + r.attr("id")).length > 0 && (u = r.parent().find(".tp-bannertimer"), f = u.data("opt"), i.callingNewSlide(f, r, -1))
            })
        },
        revmaxslide: function() {
            return n(this).find(".tp-revslider-mainul >li").length
        },
        revcurrentslide: function() {
            var i = n(this),
                r, u;
            if (i != t && i.length > 0 && n("body").find("#" + i.attr("id")).length > 0) return r = i.parent().find(".tp-bannertimer"), u = r.data("opt"), parseInt(u.act, 0) + 1
        },
        revlastslide: function() {
            return n(this).find(".tp-revslider-mainul >li").length
        },
        revshowslide: function(r) {
            return this.each(function() {
                var u = n(this),
                    f, e;
                u != t && u.length > 0 && n("body").find("#" + u.attr("id")).length > 0 && (f = u.parent().find(".tp-bannertimer"), e = f.data("opt"), i.callingNewSlide(e, u, "to" + (r - 1)))
            })
        },
        revcallslidewithid: function(r) {
            return this.each(function() {
                var u = n(this),
                    f, e;
                u != t && u.length > 0 && n("body").find("#" + u.attr("id")).length > 0 && (f = u.parent().find(".tp-bannertimer"), e = f.data("opt"), i.callingNewSlide(e, u, r))
            })
        }
    }), i = n.fn.revolution, n.extend(!0, i, {
        simp: function(n, t, i) {
            var r = Math.abs(n) - Math.floor(Math.abs(n / t)) * t;
            return i ? r : 0 > n ? -1 * r : r
        },
        iOSVersion: function() {
            var n = !1;
            return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (n = !0) : n = !1, n
        },
        isIE: function(t, i) {
            var r = n('<div style="display:none;"/>').appendTo(n("body")),
                u;
            return r.html("<!--[if " + (i || "") + " IE " + (t || "") + "]><a>&nbsp;<\/a><![endif]-->"), u = r.find("a").length, r.remove(), u
        },
        is_mobile: function() {
            var n = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                t = !1,
                i;
            for (i in n) navigator.userAgent.split(n[i]).length > 1 && (t = !0);
            return t
        },
        callBackHandling: function(t, i, r) {
            try {
                t.callBackArray && n.each(t.callBackArray, function(n, t) {
                    t && t.inmodule && t.inmodule === i && t.atposition && t.atposition === r && t.callback && t.callback.call()
                })
            } catch (u) {
                console.log("Call Back Failed")
            }
        },
        get_browser: function() {
            var t, r = navigator.appName,
                i = navigator.userAgent,
                n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return n && null != (t = i.match(/version\/([\.\d]+)/i)) && (n[2] = t[1]), n = n ? [n[1], n[2]] : [r, navigator.appVersion, "-?"], n[0]
        },
        get_browser_version: function() {
            var t, r = navigator.appName,
                i = navigator.userAgent,
                n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return n && null != (t = i.match(/version\/([\.\d]+)/i)) && (n[2] = t[1]), n = n ? [n[1], n[2]] : [r, navigator.appVersion, "-?"], n[1]
        },
        getHorizontalOffset: function(n, t) {
            var i = w(n, ".outer-left"),
                r = w(n, ".outer-right");
            switch (t) {
                case "left":
                    return i;
                case "right":
                    return r;
                case "both":
                    return i + r
            }
        },
        callingNewSlide: function(t, i, r) {
            var f = i.find(".next-revslide").length > 0 ? i.find(".next-revslide").index() : i.find(".processing-revslide").length > 0 ? i.find(".processing-revslide").index() : i.find(".active-revslide").index(),
                u = 0;
            i.find(".next-revslide").removeClass("next-revslide"), r && n.isNumeric(r) || r.match(/to/g) ? (1 === r || -1 === r ? (u = f + r, u = 0 > u ? t.slideamount - 1 : u >= t.slideamount ? 0 : u) : (r = n.isNumeric(r) ? r : parseInt(r.split("to")[1], 0), u = 0 > r ? 0 : r > t.slideamount - 1 ? t.slideamount - 1 : r), i.find(".tp-revslider-slidesli:eq(" + u + ")").addClass("next-revslide")) : r && i.find(".tp-revslider-slidesli").each(function() {
                var t = n(this);
                t.data("index") === r && t.addClass("next-revslide")
            }), u = i.find(".next-revslide").index(), i.trigger("revolution.nextslide.waiting"), u !== f && -1 != u ? c(i, t) : i.find(".next-revslide").removeClass("next-revslide")
        },
        slotSize: function(i, r) {
            r.slotw = Math.ceil(r.width / r.slots), r.sloth = Math.ceil("fullscreen" == r.sliderLayout ? n(window).height() / r.slots : r.height / r.slots), "on" == r.autoHeight && i !== t && "" !== i && (r.sloth = Math.ceil(i.height() / r.slots))
        },
        setSize: function(i) {
            var o = (i.top_outer || 0) + (i.bottom_outer || 0),
                s = parseInt(i.carousel.padding_top || 0, 0),
                h = parseInt(i.carousel.padding_bottom || 0, 0),
                u = i.gridheight[i.curWinRange],
                r, f, e;
            if (u = u < i.minHeight ? i.minHeight : u, "fullwidth" == i.sliderLayout && "off" == i.autoHeight && punchgs.TweenLite.set(i.c, {
                    maxHeight: u + "px"
                }), i.c.css({
                    marginTop: s,
                    marginBottom: h
                }), i.width = i.ul.width(), i.height = i.ul.height(), d(i), i.height = Math.round(i.gridheight[i.curWinRange] * (i.width / i.gridwidth[i.curWinRange])), i.height > i.gridheight[i.curWinRange] && "on" != i.autoHeight && (i.height = i.gridheight[i.curWinRange]), "fullscreen" == i.sliderLayout || i.infullscreenmode) {
                if (i.height = i.bw * i.gridheight[i.curWinRange], r = (i.c.parent().width(), n(window).height()), i.fullScreenOffsetContainer != t) {
                    try {
                        f = i.fullScreenOffsetContainer.split(","), f && n.each(f, function(t, i) {
                            r = n(i).length > 0 ? r - n(i).outerHeight(!0) : r
                        })
                    } catch (c) {}
                    try {
                        i.fullScreenOffset.split("%").length > 1 && i.fullScreenOffset != t && i.fullScreenOffset.length > 0 ? r -= n(window).height() * parseInt(i.fullScreenOffset, 0) / 100 : i.fullScreenOffset != t && i.fullScreenOffset.length > 0 && (r -= parseInt(i.fullScreenOffset, 0))
                    } catch (c) {}
                }
                r = r < i.minHeight ? i.minHeight : r, r -= o, i.c.parent().height(r), i.c.closest(".rev_slider_wrapper").height(r), i.c.css({
                    height: "100%"
                }), i.height = r, i.minHeight != t && i.height < i.minHeight && (i.height = i.minHeight)
            } else i.minHeight != t && i.height < i.minHeight && (i.height = i.minHeight), i.c.height(i.height);
            e = {
                height: s + h + o + i.height
            }, i.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(e), i.c.closest(".rev_slider_wrapper").css(e), d(i)
        },
        enterInViewPort: function(r) {
            r.waitForCountDown && (rt(r.c, r), r.waitForCountDown = !1), r.waitForFirstSlide && (c(r.c, r), r.waitForFirstSlide = !1), ("playing" == r.sliderlaststatus || r.sliderlaststatus == t) && r.c.trigger("starttimer"), r.lastplayedvideos != t && r.lastplayedvideos.length > 0 && n.each(r.lastplayedvideos, function(n, t) {
                i.playVideo(t, r)
            })
        },
        leaveViewPort: function(r) {
            r.sliderlaststatus = r.sliderstatus, r.c.trigger("stoptimer"), r.playingvideos != t && r.playingvideos.length > 0 && (r.lastplayedvideos = n.extend(!0, [], r.playingvideos), r.playingvideos && n.each(r.playingvideos, function(n, t) {
                i.stopVideo && i.stopVideo(t, r)
            }))
        }
    });
    var f = i.is_mobile(),
        u = function(i, r) {
            return n("body").data(i) ? !1 : r.filesystem ? (r.errorm === t && (r.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), r.errorm = r.errorm + '<br>&lt;script type="text/javascript" src="' + r.jsFileLocation + i + r.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(r.jsFileLocation + i + r.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), r.modulesfailing = !0, !1) : (n.ajax({
                url: r.jsFileLocation + i + r.extensions_suffix,
                dataType: "script",
                cache: !0,
                error: function(n) {
                    console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + i + r.extensions_suffix + " on Path:" + r.jsFileLocation), console.info(n)
                }
            }), void n("body").data(i, !0))
        },
        ut = function(r, f) {
            var e = {},
                o = r.navigation;
            return e.kenburns = !1, e.parallax = !1, e.carousel = !1, e.navigation = !1, e.videos = !1, e.actions = !1, e.layeranim = !1, e.migration = !1, f.data("version") && f.data("version").toString().match(/5./gi) ? (f.find("img").each(function() {
                "on" == n(this).data("kenburns") && (e.kenburns = !0)
            }), ("carousel" == r.sliderType || "on" == o.keyboardNavigation || "on" == o.mouseScrollNavigation || "on" == o.touch.touchenabled || o.arrows.enable || o.bullets.enable || o.thumbnails.enable || o.tabs.enable) && (e.navigation = !0), f.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function() {
                var i = n(this);
                (i.data("ytid") != t || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (e.videos = !0), (i.data("vimeoid") != t || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (e.videos = !0), i.data("actions") !== t && (e.actions = !0), e.layeranim = !0
            }), f.find("li").each(function() {
                n(this).data("link") && n(this).data("link") != t && (e.layeranim = !0, e.actions = !0)
            }), !e.videos && (f.find(".rs-background-video-layer").length > 0 || f.find(".tp-videolayer").length > 0 || f.find("iframe").length > 0 || f.find("video").length > 0) && (e.videos = !0), "carousel" == r.sliderType && (e.carousel = !0), ("off" !== r.parallax.type || r.viewPort.enable || "true" == r.viewPort.enable) && (e.parallax = !0)) : (e.kenburns = !0, e.parallax = !0, e.carousel = !1, e.navigation = !0, e.videos = !0, e.actions = !0, e.layeranim = !0, e.migration = !0), "hero" == r.sliderType && (e.carousel = !1, e.navigation = !1), window.location.href.match(/file:/gi) && (e.filesystem = !0, r.filesystem = !0), e.videos && "undefined" == typeof i.isVideoPlaying && u("revolution.extension.video", r), e.carousel && "undefined" == typeof i.prepareCarousel && u("revolution.extension.carousel", r), e.carousel || "undefined" != typeof i.animateSlide || u("revolution.extension.slideanims", r), e.actions && "undefined" == typeof i.checkActions && u("revolution.extension.actions", r), e.layeranim && "undefined" == typeof i.handleStaticLayers && u("revolution.extension.layeranimation", r), e.kenburns && "undefined" == typeof i.stopKenBurn && u("revolution.extension.kenburn", r), e.navigation && "undefined" == typeof i.createNavigation && u("revolution.extension.navigation", r), e.migration && "undefined" == typeof i.migration && u("revolution.extension.migration", r), e.parallax && "undefined" == typeof i.checkForParallax && u("revolution.extension.parallax", r), e
        },
        p = function(n, t) {
            t.filesystem || "undefined" != typeof punchgs && (!t.kenburns || t.kenburns && "undefined" != typeof i.stopKenBurn) && (!t.navigation || t.navigation && "undefined" != typeof i.createNavigation) && (!t.carousel || t.carousel && "undefined" != typeof i.prepareCarousel) && (!t.videos || t.videos && "undefined" != typeof i.resetVideo) && (!t.actions || t.actions && "undefined" != typeof i.checkActions) && (!t.layeranim || t.layeranim && "undefined" != typeof i.handleStaticLayers) && (!t.migration || t.migration && "undefined" != typeof i.migration) && (!t.parallax || t.parallax && "undefined" != typeof i.checkForParallax) && (t.carousel || !t.carousel && "undefined" != typeof i.animateSlide) ? n.trigger("scriptsloaded") : setTimeout(function() {
                p(n, t)
            }, 50)
        },
        ft = function() {
            var i = new RegExp("themepunch.revolution.min.js", "gi"),
                t = "";
            return n("script").each(function() {
                var r = n(this).attr("src");
                r && r.match(i) && (t = r)
            }), t = t.replace("jquery.themepunch.revolution.min.js", ""), t = t.replace("jquery.themepunch.revolution.js", ""), t = t.split("?")[0]
        },
        e = function(t, i) {
            var e = 9999,
                r = 0,
                o = 0,
                u = 0,
                s = n(window).width(),
                f = i && 9999 == t.responsiveLevels ? t.visibilityLevels : t.responsiveLevels;
            f && f.length && n.each(f, function(n, t) {
                t > s && (0 == r || r > t) && (e = t, u = n, r = t), s > t && t > r && (r = t, o = n)
            }), e > r && (u = o), i ? t.forcedWinRange = u : t.curWinRange = u
        },
        et = function(n, t) {
            t.carousel.maxVisibleItems = t.carousel.maxVisibleItems < 1 ? 999 : t.carousel.maxVisibleItems, t.carousel.vertical_align = "top" === t.carousel.vertical_align ? "0%" : "bottom" === t.carousel.vertical_align ? "100%" : "50%"
        },
        w = function(t, i) {
            var r = 0;
            return t.find(i).each(function() {
                var t = n(this);
                !t.hasClass("tp-forcenotvisible") && r < t.outerWidth() && (r = t.outerWidth())
            }), r
        },
        ot = function(r, u) {
            var v, w, ft, ot, d, y, ut, p, l, lt;
            if (r == t) return !1;
            if (r.data("aimg") != t && ("enabled" == r.data("aie8") && i.isIE(8) || "enabled" == r.data("amobile") && f) && r.html('<img class="tp-slider-alternative-image" src="' + r.data("aimg") + '">'), r.find(">ul").addClass("tp-revslider-mainul"), u.c = r, u.ul = r.find(".tp-revslider-mainul"), u.cid = r.attr("id"), u.ul.css({
                    visibility: "visible"
                }), u.slideamount = u.ul.find(">li").length, u.slayers = r.find(".tp-static-layers"), u.ul.find(">li").each(function(t) {
                    n(this).data("originalindex", t)
                }), "on" == u.shuffle) {
                for (v = {}, w = u.ul.find(">li:first-child"), v.fstransition = w.data("fstransition"), v.fsmasterspeed = w.data("fsmasterspeed"), v.fsslotamount = w.data("fsslotamount"), ft = 0; ft < u.slideamount; ft++) ot = Math.round(Math.random() * u.slideamount), u.ul.find(">li:eq(" + ot + ")").prependTo(u.ul);
                d = u.ul.find(">li:first-child"), d.data("fstransition", v.fstransition), d.data("fsmasterspeed", v.fsmasterspeed), d.data("fsslotamount", v.fsslotamount), u.li = u.ul.find(">li")
            }
            if (u.li = u.ul.find(">li"), u.thumbs = [], u.slots = 4, u.act = -1, u.firststart = 1, u.loadqueue = [], u.syncload = 0, u.conw = r.width(), u.conh = r.height(), u.responsiveLevels.length > 1 ? u.responsiveLevels[0] = 9999 : u.responsiveLevels = 9999, n.each(u.li, function(i, r) {
                    var r = n(r),
                        h = r.find(".rev-slidebg") || r.find("img").first(),
                        s = 0,
                        o, e, l;
                    for (r.addClass("tp-revslider-slidesli"), r.data("index") === t && r.data("index", "rs-" + Math.round(999999 * Math.random())), o = {}, o.params = [], o.id = r.data("index"), o.src = r.data("thumb") !== t ? r.data("thumb") : h.data("lazyload") !== t ? h.data("lazyload") : h.attr("src"), r.data("title") !== t && o.params.push({
                            from: RegExp("\\{\\{title\\}\\}", "g"),
                            to: r.data("title")
                        }), r.data("description") !== t && o.params.push({
                            from: RegExp("\\{\\{description\\}\\}", "g"),
                            to: r.data("description")
                        }), s = 1; 10 >= s; s++) r.data("param" + s) !== t && o.params.push({
                        from: RegExp("\\{\\{param" + s + "\\}\\}", "g"),
                        to: r.data("param" + s)
                    });
                    if (u.thumbs.push(o), r.data("origindex", r.index()), r.data("link") != t) {
                        var c = r.data("link"),
                            a = r.data("target") || "_self",
                            v = "back" === r.data("slideindex") ? 0 : 60,
                            f = r.data("linktoslide"),
                            y = f;
                        f != t && "next" != f && "prev" != f && u.li.each(function() {
                            var t = n(this);
                            t.data("origindex") + 1 == y && (f = t.data("index"))
                        }), "slide" != c && (f = "no"), e = '<div class="tp-caption sft slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + v + ';" data-x="center" data-y="center" ', l = "scroll_under" === f ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === f ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === f ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + f + '","delay":"0.2"}]', e = "no" == f ? e + ' data-start="0">' : e + "data-actions='" + l + '\' data-start="0">', e += '<a style="width:100%;height:100%;display:block"', e = "slide" != c ? e + ' target="' + a + '" href="' + c + '"' : e, e += '><span style="width:100%;height:100%;display:block"><\/span><\/a><\/div>', r.append(e)
                    }
                }), u.rle = u.responsiveLevels.length || 1, u.gridwidth = b(u.gridwidth, u.rle), u.gridheight = b(u.gridheight, u.rle), "on" == u.simplifyAll && (i.isIE(8) || i.iOSVersion()) && (r.find(".tp-caption").each(function() {
                    var t = n(this);
                    t.removeClass("customin customout").addClass("fadein fadeout"), t.data("splitin", ""), t.data("speed", 400)
                }), u.li.each(function() {
                    var t = n(this),
                        i;
                    t.data("transition", "fade"), t.data("masterspeed", 500), t.data("slotamount", 1), i = t.find(".rev-slidebg") || t.find(">img").first(), i.data("kenburns", "off")
                })), u.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), u.autoHeight = "fullscreen" == u.sliderLayout ? "on" : u.autoHeight, "fullwidth" == u.sliderLayout && "off" == u.autoHeight && r.css({
                    maxHeight: u.gridheight[u.curWinRange] + "px"
                }), "auto" != u.sliderLayout && 0 == r.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== u.sliderLayout || "on" != u.fullScreenAutoWidth)) {
                var et = r.parent(),
                    g = et.css("marginBottom"),
                    nt = et.css("marginTop");
                g = g === t ? 0 : g, nt = nt === t ? 0 : nt, et.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:' + nt + ";margin-bottom:" + g + '"><\/div>'), r.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + r.height() + 'px"><\/div>'), r.parent().css({
                    marginTop: "0px",
                    marginBottom: "0px"
                }), r.parent().css({
                    position: "absolute"
                })
            }
            if (u.shadow !== t && u.shadow > 0 && (r.parent().addClass("tp-shadow" + u.shadow), r.parent().append('<div class="tp-shadowcover"><\/div>'), r.parent().find(".tp-shadowcover").css({
                    backgroundColor: r.parent().css("backgroundColor"),
                    backgroundImage: r.parent().css("backgroundImage")
                })), e(u), e(u, !0), !r.hasClass("revslider-initialised")) {
                r.addClass("revslider-initialised"), r.addClass("tp-simpleresponsive"), r.attr("id") == t && r.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), u.firefox13 = !1, u.ie = !n.support.opacity, u.ie9 = 9 == document.documentMode, u.origcd = u.delay;
                var it = n.fn.jquery.split("."),
                    ct = parseFloat(it[0]),
                    at = parseFloat(it[1]);
                parseFloat(it[2] || "0"), 1 == ct && 7 > at && r.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + it + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin<\/div>"), ct > 1 && (u.ie = !1), y = {}, y.addedyt = 0, y.addedvim = 0, y.addedvid = 0, r.find(".tp-caption, .rs-background-video-layer").each(function() {
                    var r = n(this),
                        o = r.data("autoplayonlyfirsttime"),
                        e = r.data("autoplay"),
                        h, s, a, c, l;
                    r.hasClass("tp-static-layer") && i.handleStaticLayers && i.handleStaticLayers(r, u), h = 0, (r.find("iframe").each(function() {
                        punchgs.TweenLite.set(n(this), {
                            autoAlpha: 0
                        }), h++
                    }), h > 0 && r.data("iframes", !0), r.hasClass("tp-caption")) && (s = r.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "", r.wrap('<div class="tp-parallax-wrap" style="' + s + 'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="' + s + 'position:absolute;"><div class="tp-mask-wrap" style="' + s + 'position:absolute" ><\/div><\/div><\/div>'), a = ["pendulum", "rotate", "slideloop", "pulse", "wave"], c = r.closest(".tp-loop-wrap"), n.each(a, function(n, t) {
                        var i = r.find(".rs-" + t),
                            u = i.data() || "";
                        "" != u && (c.data(u), c.addClass("rs-" + t), i.children(0).unwrap(), r.data("loopanimation", "on"))
                    }), punchgs.TweenLite.set(r, {
                        visibility: "hidden"
                    })), l = r.data("actions"), l !== t && i.checkActions(r, u, l), st(r, u), i.checkVideoApis && (y = i.checkVideoApis(r, u, y)), f && ((1 == o || "true" == o) && (r.data("autoplayonlyfirsttime", "false"), o = !1), (1 == e || "true" == e || "on" == e || "1sttime" == e) && (r.data("autoplay", "off"), e = "off")), (1 == o || "true" == o || "1sttime" == e) && r.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), (1 == e || "true" == e || "on" == e || "no1sttime" == e) && r.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
                }), r.hover(function() {
                    r.trigger("tp-mouseenter"), u.overcontainer = !0
                }, function() {
                    r.trigger("tp-mouseleft"), u.overcontainer = !1
                }), r.on("mouseover", function() {
                    r.trigger("tp-mouseover"), u.overcontainer = !0
                }), r.find(".tp-caption video").each(function() {
                    var t = n(this);
                    t.removeClass("video-js vjs-default-skin"), t.attr("preload", ""), t.css({
                        display: "none"
                    })
                }), "standard" !== u.sliderType && (u.lazyType = "all"), a(r.find(".tp-static-layers"), u, 0), h(r.find(".tp-static-layers img"), u, function() {
                    r.find(".tp-static-layers img").each(function() {
                        var i = n(this),
                            r = i.data("lazyload") != t ? i.data("lazyload") : i.attr("src"),
                            f = tt(u, r);
                        i.attr("src", f.src)
                    })
                }), u.li.each(function(t) {
                    var i = n(this);
                    ("all" == u.lazyType || "smart" == u.lazyType && (0 == t || 1 == t || t == u.slideamount || t == u.slideamount - 1)) && (a(i, u, t), h(i, u, function() {
                        "carousel" == u.sliderType && punchgs.TweenLite.to(i, 1, {
                            autoAlpha: 1,
                            ease: punchgs.Power3.easeInOut
                        })
                    }))
                }), ut = pt("#")[0], ut.length < 9 && ut.split("slide").length > 1 && (p = parseInt(ut.split("slide")[1], 0), 1 > p && (p = 1), p > u.slideamount && (p = u.slideamount), u.startWithSlide = p - 1), r.append('<div class="tp-loader ' + u.spinner + '"><div class="dot1"><\/div><div class="dot2"><\/div><div class="bounce1"><\/div><div class="bounce2"><\/div><div class="bounce3"><\/div><\/div>'), 0 === r.find(".tp-bannertimer").length && r.append('<div class="tp-bannertimer" style="visibility:hidden"><\/div>'), r.find(".tp-bannertimer").css({
                    width: "0%"
                }), r.find(".tp-bannertimer").data("opt", u), u.ul.css({
                    display: "block"
                }), ht(r, u), "off" !== u.parallax.type && i.checkForParallax(r, u), i.setSize(u), "hero" !== u.sliderType && i.createNavigation(r, u), i.resizeThumbsTabs && i.resizeThumbsTabs(u), o(u), l = u.viewPort, u.inviewport = !1, l != t && l.enable && (l.visible_area = parseFloat(l.visible_area) / 100, l.visible_area = l.visible_area < .001 ? 100 * l.visible_area : l.visible_area, i.scrollTicker && i.scrollTicker(u, r)), setTimeout(function() {
                    "carousel" == u.sliderType && i.prepareCarousel(u), !l.enable || l.enable && u.inviewport || l.enable && !u.inviewport && "wait" == !l.outof ? c(r, u) : u.waitForFirstSlide = !0, i.manageNavigation && i.manageNavigation(u), u.slideamount > 1 && (!l.enable || l.enable && u.inviewport ? rt(r, u) : u.waitForCountDown = !0), setTimeout(function() {
                        r.trigger("revolution.slide.onloaded")
                    }, 100)
                }, u.startDelay), u.startDelay = 0, n("body").data("rs-fullScreenMode", !1), n(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                    n("body").data("rs-fullScreenMode", !n("body").data("rs-fullScreenMode")), n("body").data("rs-fullScreenMode") && setTimeout(function() {
                        n(window).trigger("resize")
                    }, 200)
                }), lt = "resize.revslider-" + r.attr("id"), n(window).on(lt, function() {
                    return r == t ? !1 : (0 != n("body").find(r) && o(u), void((r.outerWidth(!0) != u.width || r.is(":hidden") || "fullscreen" == u.sliderLayout && n(window).height() != u.lastwindowheight) && (u.lastwindowheight = n(window).height(), s(r, u))))
                }), k(r, u), o(u), u.fallbacks.disableFocusListener || "true" == u.fallbacks.disableFocusListener || u.fallbacks.disableFocusListener === !0 || yt(r, u)
            }
        },
        b = function(t, i) {
            var r, u;
            if (n.isArray(t) || (r = t, t = [], t.push(r)), t.length < i)
                for (r = t[t.length - 1], u = 0; u < i - t.length + 2; u++) t.push(r);
            return t
        },
        st = function(r, u) {
            "sliderenter" === r.data("start") && (u.layersonhover === t && (u.c.on("tp-mouseenter", function() {
                u.layersonhover && n.each(u.layersonhover, function(n, r) {
                    var o;
                    r.data("animdirection", "in");
                    var f = r.data("timeline_out"),
                        s = "carousel" === u.sliderType ? 0 : u.width / 2 - u.gridwidth[u.curWinRange] * u.bw / 2,
                        h = 0,
                        e = r.closest(".tp-revslider-slidesli");
                    (e.hasClass("active-revslide") || e.hasClass("processing-revslide")) && (f != t && (f.pause(0), f.kill()), i.animateSingleCaption(r, u, s, h, 0, !1, !0), o = r.data("timeline"), r.data("triggerstate", "on"), o.play(0))
                })
            }), u.c.on("tp-mouseleft", function() {
                u.layersonhover && n.each(u.layersonhover, function(n, t) {
                    t.data("animdirection", "out"), t.data("triggered", !0), t.data("triggerstate", "off"), i.stopVideo && i.stopVideo(t, u), i.endMoveCaption && i.endMoveCaption(t, null, null, u)
                })
            }), u.layersonhover = []), u.layersonhover.push(r))
        },
        o = function(t) {
            var r = i.getHorizontalOffset(t.c, "left"),
                u;
            "auto" == t.sliderLayout || "fullscreen" === t.sliderLayout && "on" == t.fullScreenAutoWidth ? "fullscreen" == t.sliderLayout && "on" == t.fullScreenAutoWidth ? punchgs.TweenLite.set(t.ul, {
                left: 0,
                width: t.c.width()
            }) : punchgs.TweenLite.set(t.ul, {
                left: r,
                width: t.c.width() - i.getHorizontalOffset(t.c, "both")
            }) : (u = Math.ceil(t.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - r), punchgs.TweenLite.set(t.c.parent(), {
                left: 0 - u + "px",
                width: n(window).width() - i.getHorizontalOffset(t.c, "both")
            })), t.slayers && "fullwidth" != t.sliderLayout && "fullscreen" != t.sliderLayout && punchgs.TweenLite.set(t.slayers, {
                left: r
            })
        },
        k = function(r, u, f) {
            var e = r.parent();
            n(window).width() < u.hideSliderAtLimit ? (r.trigger("stoptimer"), "none" != e.css("display") && e.data("olddisplay", e.css("display")), e.css({
                display: "none"
            })) : r.is(":hidden") && f && (e.css(e.data("olddisplay") != t && "undefined" != e.data("olddisplay") && "none" != e.data("olddisplay") ? {
                display: e.data("olddisplay")
            } : {
                display: "block"
            }), r.trigger("restarttimer"), setTimeout(function() {
                s(r, u)
            }, 150)), i.hideUnHideNav && i.hideUnHideNav(u)
        },
        s = function(r, u) {
            if (1 == u.infullscreenmode && (u.minHeight = n(window).height()), e(u), e(u, !0), !i.resizeThumbsTabs || i.resizeThumbsTabs(u) === !0) {
                if (k(r, u, !0), o(u), "carousel" == u.sliderType && i.prepareCarousel(u, !0), r === t) return !1;
                i.setSize(u), u.conw = u.c.width(), u.conh = u.infullscreenmode ? u.minHeight : u.c.height();
                var s = r.find(".active-revslide .slotholder"),
                    f = r.find(".processing-revslide .slotholder");
                l(r, u, r, 2), "standard" === u.sliderType && (punchgs.TweenLite.set(f.find(".defaultimg"), {
                    opacity: 0
                }), s.find(".defaultimg").css({
                    opacity: 1
                })), "carousel" == u.sliderType && u.lastconw != u.conw && (clearTimeout(u.pcartimer), u.pcartimer = setTimeout(function() {
                    i.prepareCarousel(u, !0)
                }, 100), u.lastconw = u.conw), i.manageNavigation && i.manageNavigation(u), i.animateTheCaptions && i.animateTheCaptions(r.find(".active-revslide"), u, !0), "on" == f.data("kenburns") && i.startKenBurn(f, u, f.data("kbtl").progress()), "on" == s.data("kenburns") && i.startKenBurn(s, u, s.data("kbtl").progress()), i.animateTheCaptions && i.animateTheCaptions(f.closest("li"), u, !0), i.manageNavigation && i.manageNavigation(u)
            }
        },
        d = function(n) {
            n.bw = n.width / n.gridwidth[n.curWinRange], n.bh = n.height / n.gridheight[n.curWinRange], n.bh > n.bw ? n.bh = n.bw : n.bw = n.bh, (n.bh > 1 || n.bw > 1) && (n.bw = 1, n.bh = 1)
        },
        ht = function(r, u) {
            if (r.find(".tp-caption").each(function() {
                    var i = n(this);
                    i.data("transition") !== t && i.addClass(i.data("transition"))
                }), u.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: r.parent().css("maxHeight")
                }), "on" == u.autoHeight && (u.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: "none"
                }), r.css({
                    maxHeight: "none"
                }), r.parent().css({
                    maxHeight: "none"
                })), u.li.each(function(i) {
                    var r = n(this),
                        f = r.data("originalindex");
                    (u.startWithSlide != t && f == u.startWithSlide || u.startWithSlide === t && 0 == i) && r.addClass("next-revslide"), r.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    })
                }), "carousel" === u.sliderType) {
                u.ul.css({
                    overflow: "visible"
                }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"><\/div>');
                var e = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"><\/div>';
                u.c.parent().prepend(e), u.c.parent().append(e), i.prepareCarousel(u)
            }
            r.parent().css({
                overflow: "visible"
            }), u.li.find(">img").each(function() {
                var i = n(this),
                    e = i.closest("li").find(".rs-background-video-layer"),
                    r, o, s, h;
                e.addClass("defaultvid").css({
                    zIndex: 30
                }), i.addClass("defaultimg"), "on" == u.panZoomDisableOnMobile && f && (i.data("kenburns", "off"), i.data("bgfit", "cover")), i.wrap('<div class="slotholder" style="width:100%;height:100%;"><\/div>'), e.appendTo(i.closest("li").find(".slotholder")), r = i.data(), i.closest(".slotholder").data(r), e.length > 0 && r.bgparallax != t && e.data("bgparallax", r.bgparallax), "none" != u.dottedOverlay && u.dottedOverlay != t && i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + u.dottedOverlay + '"><\/div>'), o = i.attr("src"), r.src = o, r.bgfit = r.bgfit || "cover", r.bgrepeat = r.bgrepeat || "no-repeat", r.bgposition = r.bgposition || "center center", s = i.closest(".slotholder"), i.parent().append('<div class="tp-bgimg defaultimg" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + r.bgrepeat + ";background-image:url(" + o + ");background-size:" + r.bgfit + ";background-position:" + r.bgposition + ';width:100%;height:100%;"><\/div>'), h = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + i.get(0).outerHTML), i.replaceWith(h), i = s.find(".tp-bgimg"), i.data(r), i.attr("src", o), ("standard" === u.sliderType || "undefined" === u.sliderType) && i.css({
                    opacity: 0
                })
            })
        },
        l = function(t, i, r, u) {
            i.removePrepare = i.removePrepare + u, r.find(".slot, .slot-circle-wrapper").each(function() {
                n(this).remove()
            }), i.transition = 0, i.removePrepare = 0
        },
        r = function(n) {
            var i = n;
            return n != t && n.length > 0 && (i = n.split("?")[0]), i
        },
        ct = function(n, t) {
            var r = n.split("/"),
                u = t.split("/"),
                i;
            for (r.pop(), i = 0; i < u.length; i++) "." != u[i] && (".." == u[i] ? r.pop() : r.push(u[i]));
            return r.join("/")
        },
        g = function(t, i, u) {
            i.syncload--, i.loadqueue && n.each(i.loadqueue, function(n, i) {
                var e = i.src.replace(/\.\.\/\.\.\//gi, ""),
                    f = self.location.href,
                    o = document.location.origin,
                    s = f.substring(0, f.length - 1) + "/" + e,
                    h = o + "/" + e,
                    c = ct(self.location.href, i.src);
                f = f.substring(0, f.length - 1) + e, o += e, (r(o) === r(decodeURIComponent(t.src)) || r(f) === r(decodeURIComponent(t.src)) || r(c) === r(decodeURIComponent(t.src)) || r(h) === r(decodeURIComponent(t.src)) || r(s) === r(decodeURIComponent(t.src)) || r(i.src) === r(decodeURIComponent(t.src)) || r(i.src).replace(/^.*\/\/[^\/]+/, "") === r(decodeURIComponent(t.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && r(t.src).match(new RegExp(e))) && (i.progress = u, i.width = t.width, i.height = t.height)
            }), nt(i)
        },
        nt = function(t) {
            3 != t.syncload && t.loadqueue && n.each(t.loadqueue, function(n, i) {
                if (i.progress.match(/prepared/g) && t.syncload <= 3) {
                    t.syncload++;
                    var r = new Image;
                    r.onload = function() {
                        g(this, t, "loaded")
                    }, r.onerror = function() {
                        g(this, t, "failed")
                    }, r.src = i.src, i.progress = "inload"
                }
            })
        },
        lt = function(t, i, r) {
            var f = !1,
                u;
            (i.loadqueue && n.each(i.loadqueue, function(n, i) {
                i.src === t && (f = !0)
            }), f) || (u = {}, u.src = t, u.prio = r, u.progress = "prepared", i.loadqueue.push(u))
        },
        a = function(i, r, u) {
            i.find("img,.defaultimg").each(function() {
                var i = n(this),
                    f = i.data("lazyload") !== t && "undefined" !== i.data("lazyload") ? i.data("lazyload") : i.attr("src");
                i.data("start-to-load", n.now()), lt(f, r, u)
            }), nt(r)
        },
        tt = function(t, i) {
            var r = {};
            return t.loadqueue && n.each(t.loadqueue, function(n, t) {
                t.src == i && (r = t)
            }), r
        },
        h = function(r, u, f) {
            var e = !1;
            r.find("img,.defaultimg").each(function() {
                var o = n(this),
                    l = o.data("lazyload") != t ? o.data("lazyload") : o.attr("src"),
                    f = tt(u, l),
                    h, c, s;
                o.data("loaded") === t && f !== t && f.progress && f.progress.match(/loaded/g) && ((o.attr("src", f.src), o.hasClass("defaultimg")) ? (i.isIE(8) ? defimg.attr("src", f.src) : o.css({
                    backgroundImage: 'url("' + f.src + '")'
                }), r.data("owidth", f.width), r.data("oheight", f.height), r.find(".slotholder").data("owidth", f.width), r.find(".slotholder").data("oheight", f.height)) : (h = o.data("ww"), c = o.data("hh"), o.data("owidth", f.width), o.data("oheight", f.height), h = h == t || "auto" == h || "" == h ? f.width : h, c = c == t || "auto" == c || "" == c ? f.height : c, o.data("ww", h), o.data("hh", c)), o.data("loaded", !0)), (f && f.progress && f.progress.match(/inprogress|inload|prepared/g) && (n.now() - o.data("start-to-load") < 5e3 ? e = !0 : console.error(l + "  Could not be loaded !")), 1 == u.youtubeapineeded && (!window.YT || YT.Player == t) && (e = !0, n.now() - u.youtubestarttime > 5e3 && 1 != u.youtubewarning)) && (u.youtubewarning = !0, s = "YouTube Api Could not be loaded !", "https:" === location.protocol && (s += " Please Check and Renew SSL Certificate !"), console.error(s), u.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + s + "<\/strong><\/div>")), 1 == u.vimeoapineeded && !window.Froogaloop && (e = !0, n.now() - u.vimeostarttime > 5e3 && 1 != u.vimeowarning) && (u.vimeowarning = !0, s = "Vimeo Froogaloop Api Could not be loaded !", "https:" === location.protocol && (s += " Please Check and Renew SSL Certificate !"), console.error(s), u.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + s + "<\/strong><\/div>"))
            }), e ? setTimeout(function() {
                h(r, u, f)
            }, 19) : f()
        },
        c = function(t, r) {
            if (clearTimeout(r.waitWithSwapSlide), t.find(".processing-revslide").length > 0) return r.waitWithSwapSlide = setTimeout(function() {
                c(t, r)
            }, 150), !1;
            var f = t.find(".active-revslide"),
                u = t.find(".next-revslide"),
                e = u.find(".defaultimg");
            return u.index() === f.index() ? (u.removeClass("next-revslide"), !1) : (u.removeClass("next-revslide").addClass("processing-revslide"), "on" == r.stopLoop && u.index() == r.lastslidetoshow - 1 && (t.find(".tp-bannertimer").css({
                visibility: "hidden"
            }), t.trigger("revolution.slide.onstop"), r.noloopanymore = 1), u.index() === r.slideamount - 1 && (r.looptogo = r.looptogo - 1, r.looptogo <= 0 && (r.stopLoop = "on")), r.tonpause = !0, t.trigger("stoptimer"), r.cd = 0, t.find(".tp-loader").css({
                display: "block"
            }), a(u, r, 1), void h(u, r, function() {
                u.find(".rs-background-video-layer").each(function() {
                    var t = n(this);
                    t.hasClass("HasListener") || (t.data("bgvideo", 1), i.manageVideoLayer(t, r)), t.append('<div class="rs-fullvideo-cover"><\/div>')
                }), at(r, e, t)
            }))
        },
        at = function(n, r, u) {
            var o = u.find(".active-revslide"),
                f = u.find(".processing-revslide"),
                p = o.find(".slotholder"),
                h = f.find(".slotholder"),
                l, a, v, w, e, y, c, s;
            n.tonpause = !1, n.cd = 0, u.trigger("nulltimer"), u.find(".tp-loader").css({
                display: "none"
            }), i.setSize(n), i.slotSize(r, n), i.manageNavigation && i.manageNavigation(n), l = {}, l.nextslide = f, l.currentslide = o, u.trigger("revolution.slide.onbeforeswap", l), n.transition = 1, n.videoplaying = !1, f.data("delay") != t ? (n.cd = 0, n.delay = f.data("delay")) : n.delay = n.origcd, a = o.index(), v = f.index(), n.sdir = a > v ? 1 : 0, "arrow" == n.sc_indicator && (0 == a && v == n.slideamount - 1 && (n.sdir = 1), a == n.slideamount - 1 && 0 == v && (n.sdir = 0)), n.lsdir = n.lsdir === t ? n.sdir : n.lsdir, n.dirc = n.lsdir != n.sdir, n.lsdir = n.sdir, o.index() != f.index() && 1 != n.firststart && i.removeTheCaptions && i.removeTheCaptions(o, n), f.hasClass("rs-pause-timer-once") || f.hasClass("rs-pause-timer-always") ? n.videoplaying = !0 : u.trigger("restarttimer"), f.removeClass("rs-pause-timer-once"), "carousel" == n.sliderType ? (e = new punchgs.TimelineLite, i.prepareCarousel(n, e), it(u, n, h, p, f, o, e), n.transition = 0, n.firststart = 0) : (e = new punchgs.TimelineLite({
                onComplete: function() {
                    it(u, n, h, p, f, o, e)
                }
            }), e.add(punchgs.TweenLite.set(h.find(".defaultimg"), {
                opacity: 0
            })), e.pause(), 1 == n.firststart && (punchgs.TweenLite.set(o, {
                autoAlpha: 0
            }), n.firststart = 0), punchgs.TweenLite.set(o, {
                zIndex: 18
            }), punchgs.TweenLite.set(f, {
                autoAlpha: 0,
                zIndex: 20
            }), "prepared" == f.data("differentissplayed") && (f.data("differentissplayed", "done"), f.data("transition", f.data("savedtransition")), f.data("slotamount", f.data("savedslotamount")), f.data("masterspeed", f.data("savedmasterspeed"))), f.data("fstransition") != t && "done" != f.data("differentissplayed") && (f.data("savedtransition", f.data("transition")), f.data("savedslotamount", f.data("slotamount")), f.data("savedmasterspeed", f.data("masterspeed")), f.data("transition", f.data("fstransition")), f.data("slotamount", f.data("fsslotamount")), f.data("masterspeed", f.data("fsmasterspeed")), f.data("differentissplayed", "prepared")), f.data("transition") == t && f.data("transition", "random"), w = 0, y = f.data("transition") !== t ? f.data("transition").split(",") : "fade", c = f.data("nexttransid") == t ? -1 : f.data("nexttransid"), "on" == f.data("randomtransition") ? c = Math.round(Math.random() * y.length) : c += 1, c == y.length && (c = 0), f.data("nexttransid", c), s = y[c], n.ie && ("boxfade" == s && (s = "boxslide"), "slotfade-vertical" == s && (s = "slotzoom-vertical"), "slotfade-horizontal" == s && (s = "slotzoom-horizontal")), i.isIE(8) && (s = 11), e = i.animateSlide(w, s, u, n, f, o, h, p, e), "on" == h.data("kenburns") && (i.startKenBurn(h, n), e.add(punchgs.TweenLite.set(h, {
                autoAlpha: 0
            }))), e.pause()), "off" != n.parallax.type && n.parallax.firstgo == t && i.scrollHandling && (n.parallax.firstgo = !0, n.lastscrolltop = -999, i.scrollHandling(n), setTimeout(function() {
                n.lastscrolltop = -999, i.scrollHandling(n)
            }, 210), setTimeout(function() {
                n.lastscrolltop = -999, i.scrollHandling(n)
            }, 420)), i.animateTheCaptions ? i.animateTheCaptions(f, n, null, e) : e != t && setTimeout(function() {
                e.resume()
            }, 30), punchgs.TweenLite.to(f, .001, {
                autoAlpha: 1
            })
        },
        it = function(r, u, e, o, s, h, c) {
            "carousel" === u.sliderType || (u.removePrepare = 0, punchgs.TweenLite.to(e.find(".defaultimg"), .001, {
                zIndex: 20,
                autoAlpha: 1,
                onComplete: function() {
                    l(r, u, s, 1)
                }
            }), s.index() != h.index() && punchgs.TweenLite.to(h, .2, {
                zIndex: 18,
                autoAlpha: 0,
                onComplete: function() {
                    l(r, u, h, 1)
                }
            })), r.find(".active-revslide").removeClass("active-revslide"), r.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), u.act = s.index(), ("scroll" == u.parallax.type || "scroll+mouse" == u.parallax.type || "mouse+scroll" == u.parallax.type) && (u.lastscrolltop = -999, i.scrollHandling(u)), c.clear(), o.data("kbtl") != t && (o.data("kbtl").reverse(), o.data("kbtl").timeScale(25)), "on" == e.data("kenburns") && (e.data("kbtl") != t ? (e.data("kbtl").timeScale(1), e.data("kbtl").play()) : i.startKenBurn(e, u)), s.find(".rs-background-video-layer").each(function() {
                if (f) return !1;
                var t = n(this);
                i.resetVideo(t, u), punchgs.TweenLite.fromTo(t, 1, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2,
                    onComplete: function() {
                        i.animcompleted && i.animcompleted(t, u)
                    }
                })
            }), h.find(".rs-background-video-layer").each(function() {
                if (f) return !1;
                var t = n(this);
                i.stopVideo && (i.resetVideo(t, u), i.stopVideo(t, u)), punchgs.TweenLite.to(t, 1, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2
                })
            });
            var a = {};
            a.slideIndex = s.index() + 1, a.slideLIIndex = s.index(), a.slide = s, a.currentslide = s, a.prevslide = h, r.trigger("revolution.slide.onchange", a), r.trigger("revolution.slide.onafterswap", a)
        },
        vt = function(t, i) {
            t.children().each(function() {
                try {
                    n(this).die("click")
                } catch (t) {}
                try {
                    n(this).die("mouseenter")
                } catch (t) {}
                try {
                    n(this).die("mouseleave")
                } catch (t) {}
                try {
                    n(this).unbind("hover")
                } catch (t) {}
            });
            try {
                t.die("click", "mouseenter", "mouseleave")
            } catch (r) {}
            clearInterval(i.cdint), t = null
        },
        rt = function(r, u) {
            var e, o;
            u.cd = 0, u.loop = 0, u.looptogo = u.stopAfterLoops != t && u.stopAfterLoops > -1 ? u.stopAfterLoops : 9999999, u.lastslidetoshow = u.stopAtSlide != t && u.stopAtSlide > -1 ? u.stopAtSlide : 999, u.stopLoop = "off", 0 == u.looptogo && (u.stopLoop = "on"), e = r.find(".tp-bannertimer"), r.on("stoptimer", function() {
                var t = n(this).find(".tp-bannertimer");
                t.data("tween").pause(), "on" == u.disableProgressBar && t.css({
                    visibility: "hidden"
                }), u.sliderstatus = "paused"
            }), r.on("starttimer", function() {
                1 != u.conthover && 1 != u.videoplaying && u.width > u.hideSliderAtLimit && 1 != u.tonpause && 1 != u.overnav && (1 === u.noloopanymore || u.viewPort.enable && !u.inviewport || (e.css({
                    visibility: "visible"
                }), e.data("tween").resume(), u.sliderstatus = "playing")), "on" == u.disableProgressBar && e.css({
                    visibility: "hidden"
                })
            }), r.on("restarttimer", function() {
                var t = n(this).find(".tp-bannertimer");
                return u.mouseoncontainer && "on" == u.navigation.onHoverStop && !f ? !1 : (1 === u.noloopanymore || u.viewPort.enable && !u.inviewport || (t.css({
                    visibility: "visible"
                }), t.data("tween").kill(), t.data("tween", punchgs.TweenLite.fromTo(t, u.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: o,
                    delay: 1
                })), u.sliderstatus = "playing"), void("on" == u.disableProgressBar && t.css({
                    visibility: "hidden"
                })))
            }), r.on("nulltimer", function() {
                e.data("tween").pause(0), "on" == u.disableProgressBar && e.css({
                    visibility: "hidden"
                }), u.sliderstatus = "paused"
            }), o = function() {
                0 == n("body").find(r).length && (vt(r, u), clearInterval(u.cdint)), r.trigger("revolution.slide.slideatend"), 1 == r.data("conthover-changed") && (u.conthover = r.data("conthover"), r.data("conthover-changed", 0)), i.callingNewSlide(u, r, 1)
            }, e.data("tween", punchgs.TweenLite.fromTo(e, u.delay / 1e3, {
                width: "0%"
            }, {
                force3D: "auto",
                width: "100%",
                ease: punchgs.Linear.easeNone,
                onComplete: o,
                delay: 1
            })), e.data("opt", u), u.slideamount > 1 && (0 != u.stopAfterLoops || 1 != u.stopAtSlide) ? r.trigger("starttimer") : (u.noloopanymore = 1, r.trigger("nulltimer")), r.on("tp-mouseenter", function() {
                u.mouseoncontainer = !0, "on" != u.navigation.onHoverStop || f || (r.trigger("stoptimer"), r.trigger("revolution.slide.onpause"))
            }), r.on("tp-mouseleft", function() {
                u.mouseoncontainer = !1, 1 != r.data("conthover") && "on" == u.navigation.onHoverStop && (1 == u.viewPort.enable && u.inviewport || 0 == u.viewPort.enable) && (r.trigger("revolution.slide.onresume"), r.trigger("starttimer"))
            })
        },
        v = (function() {
            var n, t, i = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (n in i)
                if (n in document) {
                    t = i[n];
                    break
                }
            return function(i) {
                return i && document.addEventListener(t, i), !document[n]
            }
        }(), function(n) {
            return n == t || n.c == t ? !1 : void(1 != n.windowfocused && (n.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function() {
                "on" == n.fallbacks.nextSlideOnWindowFocus && n.c.revnext(), n.c.revredraw(), "playing" == n.lastsliderstatus && n.c.revresume()
            })))
        }),
        y = function(n) {
            n.windowfocused = !1, n.lastsliderstatus = n.sliderstatus, n.c.revpause();
            var t = n.c.find(".active-revslide .slotholder"),
                r = n.c.find(".processing-revslide .slotholder");
            "on" == r.data("kenburns") && i.stopKenBurn(r, n), "on" == t.data("kenburns") && i.stopKenBurn(t, n)
        },
        yt = function(i, r) {
            var u = document.documentMode === t,
                f = window.chrome;
            u && !f ? n(window).on("focusin", function() {
                v(r)
            }).on("focusout", function() {
                y(r)
            }) : window.addEventListener ? (window.addEventListener("focus", function() {
                v(r)
            }, !1), window.addEventListener("blur", function() {
                y(r)
            }, !1)) : (window.attachEvent("focus", function() {
                v(r)
            }), window.attachEvent("blur", function() {
                y(r)
            }))
        },
        pt = function(n) {
            for (var i, u = [], r = window.location.href.slice(window.location.href.indexOf(n) + 1).split("_"), t = 0; t < r.length; t++) r[t] = r[t].replace("%3D", "="), i = r[t].split("="), u.push(i[0]), u[i[0]] = i[1];
            return u
        }
}(jQuery), ! function() {
    var t = jQuery.fn.revolution;
    jQuery.extend(!0, t, {
        animateSlide: function(n, t, i, r, f, e, o, s, h) {
            return u(n, t, i, r, f, e, o, s, h)
        }
    });
    var i = function(n, i, r, u) {
            var s = n,
                f = s.find(".defaultimg"),
                l = s.data("zoomstart"),
                h = s.data("rotationstart"),
                k, e;
            void 0 != f.data("currotate") && (h = f.data("currotate")), void 0 != f.data("curscale") && "box" == u ? l = 100 * f.data("curscale") : void 0 != f.data("curscale") && (l = f.data("curscale")), t.slotSize(f, i);
            var g = f.attr("src"),
                nt = f.css("backgroundColor"),
                a = i.width,
                c = i.height,
                v = f.data("fxof"),
                tt = 0;
            "on" == i.autoHeight && (c = i.c.height()), void 0 == v && (v = 0);
            var k = 0,
                y = f.data("bgfit"),
                p = f.data("bgrepeat"),
                w = f.data("bgposition");
            switch (void 0 == y && (y = "cover"), void 0 == p && (p = "no-repeat"), void 0 == w && (w = "center center"), u) {
                case "box":
                    var o = 0,
                        d = 0,
                        b = 0;
                    (o = i.sloth > i.slotw ? i.sloth : i.slotw, r) || (k = 0 - o), i.slotw = o, i.sloth = o;
                    for (var d = 0, b = 0, it = 0; it < i.slots; it++) {
                        for (b = 0, e = 0; e < i.slots; e++) s.append('<div class="slot" style="position:absolute;top:' + (tt + b) + "px;left:" + (v + d) + "px;width:" + o + "px;height:" + o + 'px;overflow:hidden;"><div class="slotslide" data-x="' + d + '" data-y="' + b + '" style="position:absolute;top:0px;left:0px;width:' + o + "px;height:" + o + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - b) + "px;left:" + (0 - d) + "px;width:" + a + "px;height:" + c + "px;background-color:" + nt + ";background-image:url(" + g + ");background-repeat:" + p + ";background-size:" + y + ";background-position:" + w + ';"><\/div><\/div><\/div>'), b += o, void 0 != l && void 0 != h && punchgs.TweenLite.set(s.find(".slot").last(), {
                            rotationZ: h
                        });
                        d += o
                    }
                    break;
                case "vertical":
                case "horizontal":
                    if ("horizontal" == u)
                        for (r || (k = 0 - i.slotw), e = 0; e < i.slots; e++) s.append('<div class="slot" style="position:absolute;top:' + (0 + tt) + "px;left:" + (v + e * i.slotw) + "px;overflow:hidden;width:" + (i.slotw + .6) + "px;height:" + c + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + k + "px;width:" + (i.slotw + .6) + "px;height:" + c + 'px;overflow:hidden;"><div style="background-color:' + nt + ";position:absolute;top:0px;left:" + (0 - e * i.slotw) + "px;width:" + a + "px;height:" + c + "px;background-image:url(" + g + ");background-repeat:" + p + ";background-size:" + y + ";background-position:" + w + ';"><\/div><\/div><\/div>'), void 0 != l && void 0 != h && punchgs.TweenLite.set(s.find(".slot").last(), {
                            rotationZ: h
                        });
                    else
                        for (r || (k = 0 - i.sloth), e = 0; e < i.slots + 2; e++) s.append('<div class="slot" style="position:absolute;top:' + (tt + e * i.sloth) + "px;left:" + v + "px;overflow:hidden;width:" + a + "px;height:" + i.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + k + "px;left:0px;width:" + a + "px;height:" + i.sloth + 'px;overflow:hidden;"><div style="background-color:' + nt + ";position:absolute;top:" + (0 - e * i.sloth) + "px;left:0px;width:" + a + "px;height:" + c + "px;background-image:url(" + g + ");background-repeat:" + p + ";background-size:" + y + ";background-position:" + w + ';"><\/div><\/div><\/div>'), void 0 != l && void 0 != h && punchgs.TweenLite.set(s.find(".slot").last(), {
                            rotationZ: h
                        })
            }
        },
        r = function(n, t, i, r, u) {
            function tt() {
                jQuery.each(v, function(n, t) {
                    (t[0] == i || t[8] == i) && (y = t[1], k = t[2], d = g), g += 1
                })
            }
            var l = punchgs.Power1.easeIn,
                o = punchgs.Power1.easeOut,
                h = punchgs.Power1.easeInOut,
                s = punchgs.Power2.easeIn,
                c = punchgs.Power2.easeOut,
                f = punchgs.Power2.easeInOut,
                it = (punchgs.Power3.easeIn, punchgs.Power3.easeOut),
                e = punchgs.Power3.easeInOut,
                b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                a = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
                y = 0,
                k = 1,
                d = 0,
                g = 0,
                v = ([], [
                    ["boxslide", 0, 1, 10, 0, "box", !1, null, 0, o, o, 500, 6],
                    ["boxfade", 1, 0, 10, 0, "box", !1, null, 1, h, h, 700, 5],
                    ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2, f, f, 700, 3],
                    ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3, f, f, 700, 3],
                    ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4, o, o, 300, 5],
                    ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5, o, o, 300, 5],
                    ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6, o, o, 300, 5],
                    ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7, o, o, 300, 7],
                    ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8, c, c, 500, 8],
                    ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9, c, c, 500, 25],
                    ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10, c, c, 500, 25],
                    ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11, f, f, 1e3, 1],
                    ["crossfade", 11, 1, 1, 300, "horizontal", !0, null, 11, f, f, 1e3, 1],
                    ["fadethroughdark", 11, 2, 1, 300, "horizontal", !0, null, 11, f, f, 1e3, 1],
                    ["fadethroughlight", 11, 3, 1, 300, "horizontal", !0, null, 11, f, f, 1e3, 1],
                    ["fadethroughtransparent", 11, 4, 1, 300, "horizontal", !0, null, 11, f, f, 1e3, 1],
                    ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12, e, e, 1e3, 1],
                    ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13, e, e, 1e3, 1],
                    ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14, e, e, 1e3, 1],
                    ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15, e, e, 1e3, 1],
                    ["slideoverleft", 12, 7, 1, 0, "horizontal", !0, !0, 12, e, e, 1e3, 1],
                    ["slideoverup", 13, 7, 1, 0, "horizontal", !0, !0, 13, e, e, 1e3, 1],
                    ["slideoverdown", 14, 7, 1, 0, "horizontal", !0, !0, 14, e, e, 1e3, 1],
                    ["slideoverright", 15, 7, 1, 0, "horizontal", !0, !0, 15, e, e, 1e3, 1],
                    ["slideremoveleft", 12, 8, 1, 0, "horizontal", !0, !0, 12, e, e, 1e3, 1],
                    ["slideremoveup", 13, 8, 1, 0, "horizontal", !0, !0, 13, e, e, 1e3, 1],
                    ["slideremovedown", 14, 8, 1, 0, "horizontal", !0, !0, 14, e, e, 1e3, 1],
                    ["slideremoveright", 15, 8, 1, 0, "horizontal", !0, !0, 15, e, e, 1e3, 1],
                    ["papercut", 16, 0, 0, 600, "", null, null, 16, e, e, 1e3, 2],
                    ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17, h, h, 500, 7],
                    ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18, h, h, 500, 5],
                    ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19, e, e, 500, 1],
                    ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20, e, e, 500, 1],
                    ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21, it, e, 500, 1],
                    ["turnoff", 21, 0, 1, 500, "horizontal", !1, !0, 22, e, e, 500, 1],
                    ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23, f, f, 500, 1],
                    ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24, c, c, 500, 1],
                    ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25, c, c, 500, 1],
                    ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26, f, f, 500, 1],
                    ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27, f, f, 500, 1],
                    ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28, f, f, 1e3, 1],
                    ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29, f, f, 1e3, 1],
                    ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30, f, f, 1e3, 1],
                    ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31, f, f, 1e3, 1],
                    ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32, f, f, 1e3, 1],
                    ["fadetorightfadefromleft", 15, 2, 1, 0, "horizontal", !0, !0, 33, f, f, 1e3, 1],
                    ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34, f, f, 1e3, 1],
                    ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35, f, f, 1e3, 1],
                    ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36, f, s, 1500, 1],
                    ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37, f, s, 1500, 1],
                    ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38, f, l, 1500, 1],
                    ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39, f, l, 1500, 1],
                    ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40, f, s, 1e3, 1],
                    ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41, f, s, 1e3, 1],
                    ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42, f, s, 1e3, 1],
                    ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43, f, s, 1e3, 1],
                    ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44, f, s, 1e3, 1],
                    ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45, f, s, 1e3, 1],
                    ["slidingoverlayup", 27, 0, 1, 0, "horizontal", !0, !0, 47, h, o, 2e3, 1],
                    ["slidingoverlaydown", 28, 0, 1, 0, "horizontal", !0, !0, 48, h, o, 2e3, 1],
                    ["slidingoverlayright", 30, 0, 1, 0, "horizontal", !0, !0, 49, h, o, 2e3, 1],
                    ["slidingoverlayleft", 29, 0, 1, 0, "horizontal", !0, !0, 50, h, o, 2e3, 1],
                    ["parallaxcirclesup", 31, 0, 1, 0, "horizontal", !0, !0, 51, f, l, 1500, 1],
                    ["parallaxcirclesdown", 32, 0, 1, 0, "horizontal", !0, !0, 52, f, l, 1500, 1],
                    ["parallaxcirclesright", 33, 0, 1, 0, "horizontal", !0, !0, 53, f, l, 1500, 1],
                    ["parallaxcirclesleft", 34, 0, 1, 0, "horizontal", !0, !0, 54, f, l, 1500, 1],
                    ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46, f, s, 1e3, 1],
                    ["parallaxright", 12, 3, 1, 0, "horizontal", !0, !0, 55, f, s, 1500, 1],
                    ["parallaxleft", 15, 3, 1, 0, "horizontal", !0, !0, 56, f, s, 1500, 1],
                    ["parallaxup", 14, 3, 1, 0, "horizontal", !0, !0, 57, f, l, 1500, 1],
                    ["parallaxdown", 13, 3, 1, 0, "horizontal", !0, !0, 58, f, l, 1500, 1]
                ]),
                nt, p, w;
            return t.testanims = !1, 1 == t.testanims && (t.nexttesttransform = void 0 === t.nexttesttransform ? 34 : t.nexttesttransform + 1, t.nexttesttransform = t.nexttesttransform > 70 ? 0 : t.nexttesttransform, i = v[t.nexttesttransform][0], console.log(i + "  " + t.nexttesttransform + "  " + v[t.nexttesttransform][1] + "  " + v[t.nexttesttransform][2])), jQuery.each(["parallaxcircles", "slidingoverlay", "slide", "slideover", "slideremove", "parallax"], function(n, t) {
                i == t + "horizontal" && (i = 1 != u ? t + "left" : t + "right"), i == t + "vertical" && (i = 1 != u ? t + "up" : t + "down")
            }), "random" == i && (i = Math.round(Math.random() * v.length - 1), i > v.length - 1 && (i = v.length - 1)), "random-static" == i && (i = Math.round(Math.random() * b.length - 1), i > b.length - 1 && (i = b.length - 1), i = b[i]), "random-premium" == i && (i = Math.round(Math.random() * a.length - 1), i > a.length - 1 && (i = a.length - 1), i = a[i]), nt = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], 1 == t.isJoomla && void 0 != window.MooTools && -1 != nt.indexOf(i) && (p = Math.round(Math.random() * (a.length - 2)) + 1, p > a.length - 1 && (p = a.length - 1), 0 == p && (p = 1), i = a[p]), tt(), y > 30 && (y = 30), 0 > y && (y = 0), w = {}, w.nexttrans = y, w.STA = v[d], w.specials = k, w
        },
        n = function(n, t) {
            return void 0 == t || jQuery.isNumeric(n) ? n : void 0 == n ? n : n.split(",")[t]
        },
        u = function(t, u, f, e, o, s, h, c, l) {
            function pi(n, t, i, r, u) {
                var s = n.find(".slot"),
                    c = 6,
                    a = [2, 1.2, .9, .7, .55, .42],
                    f = n.width(),
                    e = n.height(),
                    o;
                for (s.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"><\/div>'), o = 0; c > o; o++) s.parent().clone(!1).appendTo(h);
                n.find(".slot-circle-wrapper").each(function(n) {
                    if (c > n) {
                        var v = jQuery(this),
                            w = v.find(".slot"),
                            r = f > e ? a[n] * f : a[n] * e,
                            o = r,
                            s = 0 + (o / 2 - f / 2),
                            h = 0 + (r / 2 - e / 2),
                            b = 0 != n ? "50%" : "0",
                            k = 31 == i ? e / 2 - r / 2 : 32 == i ? e / 2 - r / 2 : e / 2 - r / 2,
                            d = 33 == i ? f / 2 - o / 2 : 34 == i ? f - o : f / 2 - o / 2,
                            g = {
                                scale: 1,
                                transformOrigo: "50% 50%",
                                width: o + "px",
                                height: r + "px",
                                top: k + "px",
                                left: d + "px",
                                borderRadius: b
                            },
                            nt = {
                                scale: 1,
                                top: e / 2 - r / 2,
                                left: f / 2 - o / 2,
                                ease: u
                            },
                            tt = 31 == i ? h : 32 == i ? h : h,
                            it = 33 == i ? s : 34 == i ? s + f / 2 : s,
                            rt = {
                                width: f,
                                height: e,
                                autoAlpha: 1,
                                top: tt + "px",
                                position: "absolute",
                                left: it + "px"
                            },
                            ut = {
                                top: h + "px",
                                left: s + "px",
                                ease: u
                            },
                            y = t,
                            p = 0;
                        l.add(punchgs.TweenLite.fromTo(v, y, g, nt), p), l.add(punchgs.TweenLite.fromTo(w, y, rt, ut), p), l.add(punchgs.TweenLite.fromTo(v, .001, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1
                        }), 0)
                    }
                })
            }
            var wi = s.index(),
                bi = o.index(),
                it = wi > bi ? 1 : 0,
                ot, a, y, w, ni, ht, ti, ii, et, ft, ai, lt, gt, ct, nt, p, v, k;
            "arrow" == e.sc_indicator && (it = e.sc_indicator_dir);
            var wt = r(f, e, u, h, it),
                g = wt.STA,
                d = wt.specials,
                t = wt.nexttrans;
            if ("on" == h.data("kenburns") && (t = 11), ot = o.data("nexttransid") || 0, a = n(o.data("masterspeed"), ot), a = "default" === a ? g[11] : "random" === a ? Math.round(1e3 * Math.random() + 300) : void 0 != a ? parseInt(a, 0) : g[11], a = a > e.delay ? e.delay : a, a += g[4], e.slots = n(o.data("slotamount"), ot), e.slots = void 0 == e.slots || "default" == e.slots ? g[12] : "random" == e.slots ? Math.round(12 * Math.random() + 4) : g[12], e.slots = e.slots < 1 ? "boxslide" == u ? Math.round(6 * Math.random() + 3) : "flyin" == u ? Math.round(4 * Math.random() + 1) : e.slots : e.slots, e.slots = (4 == t || 5 == t || 6 == t) && e.slots < 3 ? 3 : e.slots, e.slots = 0 != g[3] ? Math.min(e.slots, g[3]) : e.slots, e.slots = 9 == t ? e.width / 20 : 10 == t ? e.height / 20 : e.slots, e.rotate = n(o.data("rotate"), ot), e.rotate = void 0 == e.rotate || "default" == e.rotate ? 0 : 999 == e.rotate || "random" == e.rotate ? Math.round(360 * Math.random()) : e.rotate, e.rotate = !jQuery.support.transition || e.ie || e.ie9 ? 0 : e.rotate, 11 != t && (null != g[7] && i(c, e, g[7], g[5]), null != g[6] && i(h, e, g[6], g[5])), l.add(punchgs.TweenLite.set(h.find(".defaultvid"), {
                    y: 0,
                    x: 0,
                    top: 0,
                    left: 0,
                    scale: 1
                }), 0), l.add(punchgs.TweenLite.set(c.find(".defaultvid"), {
                    y: 0,
                    x: 0,
                    top: 0,
                    left: 0,
                    scale: 1
                }), 0), l.add(punchgs.TweenLite.set(h.find(".defaultvid"), {
                    y: "+0%",
                    x: "+0%"
                }), 0), l.add(punchgs.TweenLite.set(c.find(".defaultvid"), {
                    y: "+0%",
                    x: "+0%"
                }), 0), l.add(punchgs.TweenLite.set(h, {
                    autoAlpha: 1,
                    y: "+0%",
                    x: "+0%"
                }), 0), l.add(punchgs.TweenLite.set(c, {
                    autoAlpha: 1,
                    y: "+0%",
                    x: "+0%"
                }), 0), l.add(punchgs.TweenLite.set(h.parent(), {
                    backgroundColor: "transparent"
                }), 0), l.add(punchgs.TweenLite.set(c.parent(), {
                    backgroundColor: "transparent"
                }), 0), y = n(o.data("easein"), ot), w = n(o.data("easeout"), ot), (y = "default" === y ? g[9] || punchgs.Power2.easeInOut : y || g[9] || punchgs.Power2.easeInOut, w = "default" === w ? g[10] || punchgs.Power2.easeInOut : w || g[10] || punchgs.Power2.easeInOut, 0 == t) && (ni = Math.ceil(e.height / e.sloth), ht = 0, h.find(".slotslide").each(function(n) {
                    var t = jQuery(this);
                    ht += 1, ht == ni && (ht = 0), l.add(punchgs.TweenLite.from(t, a / 600, {
                        opacity: 0,
                        top: 0 - e.sloth,
                        left: 0 - e.slotw,
                        rotation: e.rotate,
                        force3D: "auto",
                        ease: y
                    }), (15 * n + 30 * ht) / 1500)
                })), 1 == t && (ii = 0, h.find(".slotslide").each(function(n) {
                    var r = jQuery(this),
                        i = Math.random() * a + 300,
                        t = 500 * Math.random() + 200;
                    i + t > ti && (ti = t + t, ii = n), l.add(punchgs.TweenLite.from(r, i / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        rotation: e.rotate,
                        ease: y
                    }), t / 1e3)
                })), 2 == t && (v = new punchgs.TimelineLite, c.find(".slotslide").each(function() {
                    var n = jQuery(this);
                    v.add(punchgs.TweenLite.to(n, a / 1e3, {
                        left: e.slotw,
                        ease: y,
                        force3D: "auto",
                        rotation: 0 - e.rotate
                    }), 0), l.add(v, 0)
                }), h.find(".slotslide").each(function() {
                    var n = jQuery(this);
                    v.add(punchgs.TweenLite.from(n, a / 1e3, {
                        left: 0 - e.slotw,
                        ease: y,
                        force3D: "auto",
                        rotation: e.rotate
                    }), 0), l.add(v, 0)
                })), 3 == t && (v = new punchgs.TimelineLite, c.find(".slotslide").each(function() {
                    var n = jQuery(this);
                    v.add(punchgs.TweenLite.to(n, a / 1e3, {
                        top: e.sloth,
                        ease: y,
                        rotation: e.rotate,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), l.add(v, 0)
                }), h.find(".slotslide").each(function() {
                    var n = jQuery(this);
                    v.add(punchgs.TweenLite.from(n, a / 1e3, {
                        top: 0 - e.sloth,
                        rotation: e.rotate,
                        ease: w,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), l.add(v, 0)
                })), (4 == t || 5 == t) && (setTimeout(function() {
                    c.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), et = a / 1e3, v = new punchgs.TimelineLite, c.find(".slotslide").each(function(n) {
                    var r = jQuery(this),
                        i = n * et / e.slots;
                    5 == t && (i = (e.slots - n - 1) * et / e.slots / 1.5), v.add(punchgs.TweenLite.to(r, 3 * et, {
                        transformPerspective: 600,
                        force3D: "auto",
                        top: 0 + e.height,
                        opacity: .5,
                        rotation: e.rotate,
                        ease: y,
                        delay: i
                    }), 0), l.add(v, 0)
                }), h.find(".slotslide").each(function(n) {
                    var r = jQuery(this),
                        i = n * et / e.slots;
                    5 == t && (i = (e.slots - n - 1) * et / e.slots / 1.5), v.add(punchgs.TweenLite.from(r, 3 * et, {
                        top: 0 - e.height,
                        opacity: .5,
                        rotation: e.rotate,
                        force3D: "auto",
                        ease: punchgs.eo,
                        delay: i
                    }), 0), l.add(v, 0)
                })), 6 == t && (e.slots < 2 && (e.slots = 2), e.slots % 2 && (e.slots = e.slots + 1), v = new punchgs.TimelineLite, setTimeout(function() {
                    c.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), c.find(".slotslide").each(function(n) {
                    var i = jQuery(this),
                        t;
                    t = n + 1 < e.slots / 2 ? 90 * (n + 2) : 90 * (2 + e.slots - n), v.add(punchgs.TweenLite.to(i, (a + t) / 1e3, {
                        top: 0 + e.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: e.rotate,
                        ease: y
                    }), 0), l.add(v, 0)
                }), h.find(".slotslide").each(function(n) {
                    var i = jQuery(this),
                        t;
                    t = n + 1 < e.slots / 2 ? 90 * (n + 2) : 90 * (2 + e.slots - n), v.add(punchgs.TweenLite.from(i, (a + t) / 1e3, {
                        top: 0 - e.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: e.rotate,
                        ease: w
                    }), 0), l.add(v, 0)
                })), 7 == t && (a = 2 * a, a > e.delay && (a = e.delay), v = new punchgs.TimelineLite, setTimeout(function() {
                    c.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), c.find(".slotslide").each(function() {
                    var n = jQuery(this).find("div");
                    v.add(punchgs.TweenLite.to(n, a / 1e3, {
                        left: 0 - e.slotw / 2 + "px",
                        top: 0 - e.height / 2 + "px",
                        width: 2 * e.slotw + "px",
                        height: 2 * e.height + "px",
                        opacity: 0,
                        rotation: e.rotate,
                        force3D: "auto",
                        ease: y
                    }), 0), l.add(v, 0)
                }), h.find(".slotslide").each(function(n) {
                    var t = jQuery(this).find("div");
                    v.add(punchgs.TweenLite.fromTo(t, a / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                        left: 0 - n * e.slotw + "px",
                        ease: w,
                        force3D: "auto",
                        top: "0px",
                        width: e.width,
                        height: e.height,
                        opacity: 1,
                        rotation: 0,
                        delay: .1
                    }), 0), l.add(v, 0)
                })), 8 == t && (a = 3 * a, a > e.delay && (a = e.delay), v = new punchgs.TimelineLite, c.find(".slotslide").each(function() {
                    var n = jQuery(this).find("div");
                    v.add(punchgs.TweenLite.to(n, a / 1e3, {
                        left: 0 - e.width / 2 + "px",
                        top: 0 - e.sloth / 2 + "px",
                        width: 2 * e.width + "px",
                        height: 2 * e.sloth + "px",
                        force3D: "auto",
                        ease: y,
                        opacity: 0,
                        rotation: e.rotate
                    }), 0), l.add(v, 0)
                }), h.find(".slotslide").each(function(n) {
                    var t = jQuery(this).find("div");
                    v.add(punchgs.TweenLite.fromTo(t, a / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        force3D: "auto"
                    }, {
                        left: "0px",
                        top: 0 - n * e.sloth + "px",
                        width: h.find(".defaultimg").data("neww") + "px",
                        height: h.find(".defaultimg").data("newh") + "px",
                        opacity: 1,
                        ease: w,
                        rotation: 0
                    }), 0), l.add(v, 0)
                })), (9 == t || 10 == t) && (lt = 0, h.find(".slotslide").each(function(n) {
                    var t = jQuery(this);
                    lt++, l.add(punchgs.TweenLite.fromTo(t, a / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        transformPerspective: 600
                    }, {
                        autoAlpha: 1,
                        ease: y,
                        delay: n / 200
                    }), 0)
                })), 27 == t || 28 == t || 29 == t || 30 == t) {
                var bt = h.find(".slot"),
                    ki = 27 == t || 28 == t ? 1 : 2,
                    ri = 27 == t || 29 == t ? "-100%" : "+100%",
                    di = 27 == t || 29 == t ? "+100%" : "-100%",
                    gi = 27 == t || 29 == t ? "-80%" : "80%",
                    nr = 27 == t || 29 == t ? "80%" : "-80%",
                    tr = 27 == t || 29 == t ? "10%" : "-10%",
                    ui = {
                        overwrite: "all"
                    },
                    fi = {
                        autoAlpha: 0,
                        zIndex: 1,
                        force3D: "auto",
                        ease: y
                    },
                    ei = {
                        position: "inherit",
                        autoAlpha: 0,
                        overwrite: "all",
                        zIndex: 1
                    },
                    oi = {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: w
                    },
                    si = {
                        overwrite: "all",
                        zIndex: 2
                    },
                    hi = {
                        autoAlpha: 1,
                        force3D: "auto",
                        overwrite: "all",
                        ease: y
                    },
                    ci = {
                        overwrite: "all",
                        zIndex: 2
                    },
                    li = {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: y
                    },
                    ut = 1 == ki ? "y" : "x";
                ui[ut] = "0px", fi[ut] = ri, ei[ut] = tr, oi[ut] = "0%", si[ut] = di, hi[ut] = ri, ci[ut] = gi, li[ut] = nr, bt.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"><\/span>'), l.add(punchgs.TweenLite.fromTo(c, a / 1e3, ui, fi), 0), l.add(punchgs.TweenLite.fromTo(h.find(".defaultimg"), a / 2e3, ei, oi), a / 2e3), l.add(punchgs.TweenLite.fromTo(bt, a / 1e3, si, hi), 0), l.add(punchgs.TweenLite.fromTo(bt.find(".slotslide div"), a / 1e3, ci, li), 0)
            }
            if ((31 == t || 32 == t || 33 == t || 34 == t) && (a = 6e3, y = punchgs.Power3.easeInOut, ft = a / 1e3, mas = ft - ft / 5, _nt = t, fy = 31 == _nt ? "+100%" : 32 == _nt ? "-100%" : "0%", fx = 33 == _nt ? "+100%" : 34 == _nt ? "-100%" : "0%", ty = 31 == _nt ? "-100%" : 32 == _nt ? "+100%" : "0%", tx = 33 == _nt ? "-100%" : 34 == _nt ? "+100%" : "0%", l.add(punchgs.TweenLite.fromTo(c, ft - .2 * ft, {
                    y: 0,
                    x: 0
                }, {
                    y: ty,
                    x: tx,
                    ease: w
                }), .2 * ft), l.add(punchgs.TweenLite.fromTo(h, ft, {
                    y: fy,
                    x: fx
                }, {
                    y: "0%",
                    x: "0%",
                    ease: y
                }), 0), h.find(".slot").remove(), h.find(".defaultimg").clone().appendTo(h).addClass("slot"), pi(h, ft, _nt, "in", y)), 11 == t) {
                d > 4 && (d = 0), lt = 0, ai = 2 == d ? "#000000" : 3 == d ? "#ffffff" : "transparent";
                switch (d) {
                    case 0:
                        l.add(punchgs.TweenLite.fromTo(h, a / 1e3, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: y
                        }), 0);
                        break;
                    case 1:
                        l.add(punchgs.TweenLite.fromTo(h, a / 1e3, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: y
                        }), 0), l.add(punchgs.TweenLite.fromTo(c, a / 1e3, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: y
                        }), 0);
                        break;
                    case 2:
                    case 3:
                    case 4:
                        l.add(punchgs.TweenLite.set(c.parent(), {
                            backgroundColor: ai,
                            force3D: "auto"
                        }), 0), l.add(punchgs.TweenLite.set(h.parent(), {
                            backgroundColor: "transparent",
                            force3D: "auto"
                        }), 0), l.add(punchgs.TweenLite.to(c, a / 2e3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: y
                        }), 0), l.add(punchgs.TweenLite.fromTo(h, a / 2e3, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: y
                        }), a / 2e3)
                }
                l.add(punchgs.TweenLite.set(h.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), l.add(punchgs.TweenLite.set(c.find("defaultimg"), {
                    autoAlpha: 1
                }), 0)
            }
            if (26 == t && (lt = 0, a = 0, l.add(punchgs.TweenLite.fromTo(h, a / 1e3, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    force3D: "auto",
                    ease: y
                }), 0), l.add(punchgs.TweenLite.to(c, a / 1e3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: y
                }), 0), l.add(punchgs.TweenLite.set(h.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), l.add(punchgs.TweenLite.set(c.find("defaultimg"), {
                    autoAlpha: 1
                }), 0)), 12 == t || 13 == t || 14 == t || 15 == t) {
                a = a, a > e.delay && (a = e.delay), setTimeout(function() {
                    punchgs.TweenLite.set(c.find(".defaultimg"), {
                        autoAlpha: 0
                    })
                }, 100);
                var nt = e.width,
                    p = e.height,
                    vi = h.find(".slotslide, .defaultvid"),
                    at = 0,
                    vt = 0,
                    tt = 1,
                    st = 1,
                    kt = 1,
                    dt = a / 1e3,
                    yt = dt;
                if (("fullwidth" == e.sliderLayout || "fullscreen" == e.sliderLayout) && (nt = vi.width(), p = vi.height()), 12 == t ? at = nt : 15 == t ? at = 0 - nt : 13 == t ? vt = p : 14 == t && (vt = 0 - p), 1 == d && (tt = 0), 2 == d && (tt = 0), 3 == d && (dt = a / 1300), (4 == d || 5 == d) && (st = .6), 6 == d && (st = 1.4), (5 == d || 6 == d) && (kt = 1.4, tt = 0, nt = 0, p = 0, at = 0, vt = 0), 6 == d && (kt = .6), 7 == d && (nt = 0, p = 0), gt = h.find(".slotslide"), ct = c.find(".slotslide, .defaultvid"), l.add(punchgs.TweenLite.set(s, {
                        zIndex: 15
                    }), 0), l.add(punchgs.TweenLite.set(o, {
                        zIndex: 20
                    }), 0), 8 == d ? (l.add(punchgs.TweenLite.set(s, {
                        zIndex: 20
                    }), 0), l.add(punchgs.TweenLite.set(o, {
                        zIndex: 15
                    }), 0), l.add(punchgs.TweenLite.set(gt, {
                        left: 0,
                        top: 0,
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        ease: y,
                        force3D: "auto"
                    }), 0)) : l.add(punchgs.TweenLite.from(gt, dt, {
                        left: at,
                        top: vt,
                        scale: kt,
                        opacity: tt,
                        rotation: e.rotate,
                        ease: y,
                        force3D: "auto"
                    }), 0), (4 == d || 5 == d) && (nt = 0, p = 0), 1 != d) switch (t) {
                    case 12:
                        l.add(punchgs.TweenLite.to(ct, yt, {
                            left: 0 - nt + "px",
                            force3D: "auto",
                            scale: st,
                            opacity: tt,
                            rotation: e.rotate,
                            ease: w
                        }), 0);
                        break;
                    case 15:
                        l.add(punchgs.TweenLite.to(ct, yt, {
                            left: nt + "px",
                            force3D: "auto",
                            scale: st,
                            opacity: tt,
                            rotation: e.rotate,
                            ease: w
                        }), 0);
                        break;
                    case 13:
                        l.add(punchgs.TweenLite.to(ct, yt, {
                            top: 0 - p + "px",
                            force3D: "auto",
                            scale: st,
                            opacity: tt,
                            rotation: e.rotate,
                            ease: w
                        }), 0);
                        break;
                    case 14:
                        l.add(punchgs.TweenLite.to(ct, yt, {
                            top: p + "px",
                            force3D: "auto",
                            scale: st,
                            opacity: tt,
                            rotation: e.rotate,
                            ease: w
                        }), 0)
                }
            }
            if (16 == t) {
                v = new punchgs.TimelineLite, l.add(punchgs.TweenLite.set(s, {
                    position: "absolute",
                    "z-index": 20
                }), 0), l.add(punchgs.TweenLite.set(o, {
                    position: "absolute",
                    "z-index": 15
                }), 0), s.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"><\/div>'), s.find(".tp-half-one").clone(!0).appendTo(s).addClass("tp-half-two"), s.find(".tp-half-two").removeClass("tp-half-one"), nt = e.width, p = e.height, "on" == e.autoHeight && (p = f.height()), s.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + nt + "px;height:" + p + 'px;"><\/div>'), s.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + nt + "px;height:" + p + 'px;"><\/div>'), s.find(".tp-half-two .defaultimg").css({
                    position: "absolute",
                    top: "-50%"
                }), s.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"><\/div>'), l.add(punchgs.TweenLite.set(s.find(".tp-half-two"), {
                    width: nt,
                    height: p,
                    overflow: "hidden",
                    zIndex: 15,
                    position: "absolute",
                    top: p / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }), 0), l.add(punchgs.TweenLite.set(s.find(".tp-half-one"), {
                    width: nt,
                    height: p / 2,
                    overflow: "visible",
                    zIndex: 10,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center top"
                }), 0);
                var ir = (s.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                    rr = Math.round(20 * Math.random() - 10),
                    ur = Math.round(20 * Math.random() - 10),
                    fr = .4 * Math.random() - .2,
                    er = .4 * Math.random() - .2,
                    or = 1 * Math.random() + 1,
                    sr = 1 * Math.random() + 1,
                    hr = .3 * Math.random() + .3;
                l.add(punchgs.TweenLite.set(s.find(".tp-half-one"), {
                    overflow: "hidden"
                }), 0), l.add(punchgs.TweenLite.fromTo(s.find(".tp-half-one"), a / 800, {
                    width: nt,
                    height: p / 2,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center top"
                }, {
                    scale: or,
                    rotation: ir,
                    y: 0 - p - p / 4,
                    autoAlpha: 0,
                    ease: y
                }), 0), l.add(punchgs.TweenLite.fromTo(s.find(".tp-half-two"), a / 800, {
                    width: nt,
                    height: p,
                    overflow: "hidden",
                    position: "absolute",
                    top: p / 2,
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center bottom"
                }, {
                    scale: sr,
                    rotation: rr,
                    y: p + p / 4,
                    ease: y,
                    autoAlpha: 0,
                    onComplete: function() {
                        punchgs.TweenLite.set(s, {
                            position: "absolute",
                            "z-index": 15
                        }), punchgs.TweenLite.set(o, {
                            position: "absolute",
                            "z-index": 20
                        }), s.find(".tp-half-one").length > 0 && (s.find(".tp-half-one .defaultimg").unwrap(), s.find(".tp-half-one .slotholder").unwrap()), s.find(".tp-half-two").remove()
                    }
                }), 0), v.add(punchgs.TweenLite.set(h.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), null != s.html() && l.add(punchgs.TweenLite.fromTo(o, (a - 200) / 1e3, {
                    scale: hr,
                    x: e.width / 4 * fr,
                    y: p / 4 * er,
                    rotation: ur,
                    force3D: "auto",
                    transformOrigin: "center center",
                    ease: w
                }, {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotation: 0
                }), 0), l.add(v, 0)
            }
            if (17 == t && h.find(".slotslide").each(function(n) {
                    var t = jQuery(this);
                    l.add(punchgs.TweenLite.fromTo(t, a / 800, {
                        opacity: 0,
                        rotationY: 0,
                        scale: .9,
                        rotationX: -110,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: y,
                        delay: .06 * n
                    }), 0)
                }), 18 == t && h.find(".slotslide").each(function(n) {
                    var t = jQuery(this);
                    l.add(punchgs.TweenLite.fromTo(t, a / 500, {
                        autoAlpha: 0,
                        rotationY: 110,
                        scale: .9,
                        rotationX: 10,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        autoAlpha: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: y,
                        delay: .06 * n
                    }), 0)
                }), 19 == t || 22 == t) {
                v = new punchgs.TimelineLite, l.add(punchgs.TweenLite.set(s, {
                    zIndex: 20
                }), 0), l.add(punchgs.TweenLite.set(o, {
                    zIndex: 20
                }), 0), setTimeout(function() {
                    c.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var b = 90,
                    tt = 1,
                    k = "center center ";
                1 == it && (b = -90), 19 == t ? (k = k + "-" + e.height / 2, tt = 0) : k += e.height / 2, punchgs.TweenLite.set(f, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    transformPerspective: 600
                }), h.find(".slotslide").each(function(n) {
                    var t = jQuery(this);
                    v.add(punchgs.TweenLite.fromTo(t, a / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        left: 0,
                        rotationY: e.rotate,
                        z: 10,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: k,
                        rotationX: b
                    }, {
                        left: 0,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        rotationX: 0,
                        delay: n / 20,
                        ease: y
                    }), 0), v.add(punchgs.TweenLite.to(t, .1, {
                        autoAlpha: 1,
                        delay: n / 20
                    }), 0), l.add(v)
                }), c.find(".slotslide").each(function(n) {
                    var i = jQuery(this),
                        t = -90;
                    1 == it && (t = 90), v.add(punchgs.TweenLite.fromTo(i, a / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        autoAlpha: 1,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: k,
                        rotationX: 0
                    }, {
                        autoAlpha: 1,
                        rotationY: e.rotate,
                        top: 0,
                        z: 10,
                        scale: 1,
                        rotationX: t,
                        delay: n / 20,
                        force3D: "auto",
                        ease: w
                    }), 0), l.add(v)
                }), l.add(punchgs.TweenLite.set(s, {
                    zIndex: 18
                }), 0)
            }
            if (20 == t) {
                if (setTimeout(function() {
                        c.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100), 1 == it) var pt = -e.width,
                    b = 80,
                    k = "20% 70% -" + e.height / 2;
                else var pt = e.width,
                    b = -80,
                    k = "80% 70% -" + e.height / 2;
                h.find(".slotslide").each(function(n) {
                    var t = jQuery(this),
                        i = n / 20;
                    l.add(punchgs.TweenLite.fromTo(t, a / 1e3, {
                        left: pt,
                        rotationX: 40,
                        z: -600,
                        opacity: tt,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: k,
                        transformStyle: "flat",
                        rotationY: b
                    }, {
                        left: 0,
                        rotationX: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: i,
                        ease: y
                    }), 0)
                }), c.find(".slotslide").each(function(n) {
                    var i = jQuery(this),
                        t = n / 20;
                    if (t = n > 0 ? t + a / 9e3 : 0, 1 != it) var r = -e.width / 2,
                        u = 30,
                        f = "20% 70% -" + e.height / 2;
                    else var r = e.width / 2,
                        u = -30,
                        f = "80% 70% -" + e.height / 2;
                    w = punchgs.Power2.easeInOut, l.add(punchgs.TweenLite.fromTo(i, a / 1e3, {
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        left: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: f,
                        transformStyle: "flat",
                        rotationY: 0
                    }, {
                        opacity: 1,
                        rotationX: 20,
                        top: 0,
                        z: -600,
                        left: r,
                        force3D: "auto",
                        rotationY: u,
                        delay: t,
                        ease: w
                    }), 0)
                })
            }
            if (21 == t || 25 == t) {
                setTimeout(function() {
                    c.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var b = 90,
                    pt = -e.width,
                    rt = -b;
                1 == it ? 25 == t ? (k = "center top 0", b = e.rotate) : (k = "left center 0", rt = e.rotate) : (pt = e.width, b = -90, 25 == t) ? (k = "center bottom 0", rt = -b, b = e.rotate) : (k = "right center 0", rt = e.rotate), h.find(".slotslide").each(function() {
                    var t = jQuery(this),
                        n = a / 1.5 / 3;
                    l.add(punchgs.TweenLite.fromTo(t, n / 500, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: rt,
                        z: 0,
                        autoAlpha: 0,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 1200,
                        transformOrigin: k,
                        rotationY: b
                    }, {
                        left: 0,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        scale: 1,
                        rotationY: 0,
                        force3D: "auto",
                        delay: n / 1e3,
                        ease: y
                    }), 0)
                }), 1 != it ? (pt = -e.width, b = 90, 25 == t ? (k = "center top 0", rt = -b, b = e.rotate) : (k = "left center 0", rt = e.rotate)) : (pt = e.width, b = -90, 25 == t ? (k = "center bottom 0", rt = -b, b = e.rotate) : (k = "right center 0", rt = e.rotate)), c.find(".slotslide").each(function() {
                    var n = jQuery(this);
                    l.add(punchgs.TweenLite.fromTo(n, a / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: 0,
                        z: 0,
                        autoAlpha: 1,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 1200,
                        transformOrigin: k,
                        rotationY: 0
                    }, {
                        left: 0,
                        rotationX: rt,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        force3D: "auto",
                        scale: 1,
                        rotationY: b,
                        ease: w
                    }), 0)
                })
            }
            if (23 == t || 24 == t) {
                setTimeout(function() {
                    c.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var b = -90,
                    tt = 1,
                    yi = 0;
                (1 == it && (b = 90), 23 == t) ? (k = "center center -" + e.width / 2, tt = 0) : k = "center center " + e.width / 2, punchgs.TweenLite.set(f, {
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    perspective: 2500
                }), h.find(".slotslide").each(function(n) {
                    var t = jQuery(this);
                    l.add(punchgs.TweenLite.fromTo(t, a / 1e3, {
                        left: yi,
                        rotationX: e.rotate,
                        force3D: "auto",
                        opacity: tt,
                        top: 0,
                        scale: 1,
                        transformPerspective: 1200,
                        transformOrigin: k,
                        rotationY: b
                    }, {
                        left: 0,
                        rotationX: 0,
                        autoAlpha: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: n / 10,
                        ease: y
                    }), 0)
                }), b = 90, 1 == it && (b = -90), c.find(".slotslide").each(function(n) {
                    var i = jQuery(this);
                    l.add(punchgs.TweenLite.fromTo(i, a / 1e3, {
                        left: 0,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformStyle: "flat",
                        transformPerspective: 1200,
                        transformOrigin: k,
                        rotationY: 0
                    }, {
                        left: yi,
                        rotationX: e.rotate,
                        top: 0,
                        scale: 1,
                        rotationY: b,
                        delay: n / 10,
                        ease: w
                    }), 0), 23 == t && l.add(punchgs.TweenLite.fromTo(i, a / 2e3, {
                        autoAlpha: 1
                    }, {
                        autoAlpha: 0,
                        delay: n / 10 + a / 3e3,
                        ease: w
                    }), 0)
                })
            }
            return l
        }
}(jQuery), ! function() {
    var t = jQuery.fn.revolution,
        u = t.is_mobile();
    jQuery.extend(!0, t, {
        hideUnHideNav: function(t) {
            var i = t.c.width(),
                r = t.navigation.arrows,
                u = t.navigation.bullets,
                f = t.navigation.thumbnails,
                e = t.navigation.tabs;
            n(r) && h(t.c.find(".tparrows"), r.hide_under, i, r.hide_over), n(u) && h(t.c.find(".tp-bullets"), u.hide_under, i, u.hide_over), n(f) && h(t.c.parent().find(".tp-thumbs"), f.hide_under, i, f.hide_over), n(e) && h(t.c.parent().find(".tp-tabs"), e.hide_under, i, e.hide_over), w(t)
        },
        resizeThumbsTabs: function(t) {
            if (t.navigation && t.navigation.tabs.enable || t.navigation && t.navigation.thumbnails.enable) {
                var i = (jQuery(window).width() - 480) / 500,
                    r = new punchgs.TimelineLite,
                    u = t.navigation.tabs,
                    f = t.navigation.thumbnails;
                r.pause(), i = i > 1 ? 1 : 0 > i ? 0 : i, n(u) && u.width > u.min_width && l(i, r, t.c, u, t.slideamount, "tab"), n(f) && f.width > f.min_width && l(i, r, t.c, f, t.slideamount, "thumb"), r.play(), w(t)
            }
            return !0
        },
        manageNavigation: function(i) {
            var u = t.getHorizontalOffset(i.c.parent(), "left"),
                e = t.getHorizontalOffset(i.c.parent(), "right");
            n(i.navigation.bullets) && ("fullscreen" != i.sliderLayout && "fullwidth" != i.sliderLayout && (i.navigation.bullets.h_offset_old = void 0 === i.navigation.bullets.h_offset_old ? i.navigation.bullets.h_offset : i.navigation.bullets.h_offset_old, i.navigation.bullets.h_offset = "center" === i.navigation.bullets.h_align ? i.navigation.bullets.h_offset_old + u / 2 - e / 2 : i.navigation.bullets.h_offset_old + u - e), r(i.c.find(".tp-bullets"), i.navigation.bullets)), n(i.navigation.thumbnails) && r(i.c.parent().find(".tp-thumbs"), i.navigation.thumbnails), n(i.navigation.tabs) && r(i.c.parent().find(".tp-tabs"), i.navigation.tabs), n(i.navigation.arrows) && ("fullscreen" != i.sliderLayout && "fullwidth" != i.sliderLayout && (i.navigation.arrows.left.h_offset_old = void 0 === i.navigation.arrows.left.h_offset_old ? i.navigation.arrows.left.h_offset : i.navigation.arrows.left.h_offset_old, i.navigation.arrows.left.h_offset = "right" === i.navigation.arrows.left.h_align ? i.navigation.arrows.left.h_offset_old + e : i.navigation.arrows.left.h_offset_old + u, i.navigation.arrows.right.h_offset_old = void 0 === i.navigation.arrows.right.h_offset_old ? i.navigation.arrows.right.h_offset : i.navigation.arrows.right.h_offset_old, i.navigation.arrows.right.h_offset = "right" === i.navigation.arrows.right.h_align ? i.navigation.arrows.right.h_offset_old + e : i.navigation.arrows.right.h_offset_old + u), r(i.c.find(".tp-leftarrow.tparrows"), i.navigation.arrows.left), r(i.c.find(".tp-rightarrow.tparrows"), i.navigation.arrows.right)), n(i.navigation.thumbnails) && f(i.c.parent().find(".tp-thumbs"), i.navigation.thumbnails), n(i.navigation.tabs) && f(i.c.parent().find(".tp-tabs"), i.navigation.tabs)
        },
        createNavigation: function(t, r) {
            var s = t.parent(),
                h = r.navigation.arrows,
                v = r.navigation.bullets,
                c = r.navigation.thumbnails,
                l = r.navigation.tabs,
                b = n(h),
                tt = n(v),
                y = n(c),
                w = n(l);
            k(t, r), d(t, r), b && g(t, h, r), r.li.each(function() {
                var n = jQuery(this);
                tt && nt(t, v, n, r), y && p(t, c, n, "tp-thumb", r), w && p(t, l, n, "tp-tab", r)
            }), t.bind("revolution.slide.onafterswap revolution.nextslide.waiting", function() {
                var u = 0 == t.find(".next-revslide").length ? t.find(".active-revslide").data("index") : t.find(".next-revslide").data("index"),
                    i, e, o, a, n;
                t.find(".tp-bullet").each(function() {
                    var n = jQuery(this);
                    n.data("liref") === u ? n.addClass("selected") : n.removeClass("selected")
                }), s.find(".tp-thumb, .tp-tab").each(function() {
                    var n = jQuery(this);
                    n.data("liref") === u ? (n.addClass("selected"), n.hasClass("tp-tab") ? f(s.find(".tp-tabs"), l) : f(s.find(".tp-thumbs"), c)) : n.removeClass("selected")
                }), i = 0, e = !1, r.thumbs && jQuery.each(r.thumbs, function(n, t) {
                    i = e === !1 ? n : i, e = t.id === u || n === u ? !0 : e
                }), o = i > 0 ? i - 1 : r.slideamount - 1, a = i + 1 == r.slideamount ? 0 : i + 1, h.enable === !0 && (n = h.tmp, jQuery.each(r.thumbs[o].params, function(t, i) {
                    n = n.replace(i.from, i.to)
                }), h.left.j.html(n), n = h.tmp, jQuery.each(r.thumbs[a].params, function(t, i) {
                    n = n.replace(i.from, i.to)
                }), h.right.j.html(n), punchgs.TweenLite.set(h.left.j.find(".tp-arr-imgholder"), {
                    backgroundImage: "url(" + r.thumbs[o].src + ")"
                }), punchgs.TweenLite.set(h.right.j.find(".tp-arr-imgholder"), {
                    backgroundImage: "url(" + r.thumbs[a].src + ")"
                }))
            }), o(h), o(v), o(c), o(l), s.on("mouseenter mousemove", function() {
                s.hasClass("tp-mouseover") || (s.addClass("tp-mouseover"), punchgs.TweenLite.killDelayedCallsTo(i), b && h.hide_onleave && i(s.find(".tparrows"), h, "show"), tt && v.hide_onleave && i(s.find(".tp-bullets"), v, "show"), y && c.hide_onleave && i(s.find(".tp-thumbs"), c, "show"), w && l.hide_onleave && i(s.find(".tp-tabs"), l, "show"), u && (s.removeClass("tp-mouseover"), a(t, r)))
            }), s.on("mouseleave", function() {
                s.removeClass("tp-mouseover"), a(t, r)
            }), b && h.hide_onleave && i(s.find(".tparrows"), h, "hide", 0), tt && v.hide_onleave && i(s.find(".tp-bullets"), v, "hide", 0), y && c.hide_onleave && i(s.find(".tp-thumbs"), c, "hide", 0), w && l.hide_onleave && i(s.find(".tp-tabs"), l, "hide", 0), y && e(s.find(".tp-thumbs"), r), w && e(s.find(".tp-tabs"), r), "carousel" === r.sliderType && e(t, r, !0), "on" == r.navigation.touch.touchenabled && e(t, r, "swipebased")
        }
    });
    var f = function(n, t) {
            var y = (n.hasClass("tp-thumbs") ? ".tp-thumbs" : ".tp-tabs", n.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
                p = n.hasClass("tp-thumbs") ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                l = n.hasClass("tp-thumbs") ? ".tp-thumb" : ".tp-tab",
                r = n.find(y),
                u = r.find(p),
                e = t.direction,
                f = "vertical" === e ? r.find(l).first().outerHeight(!0) + t.space : r.find(l).first().outerWidth(!0) + t.space,
                v = "vertical" === e ? r.height() : r.width(),
                w = parseInt(r.find(l + ".selected").data("liindex"), 0),
                a = v / f,
                h = "vertical" === e ? r.height() : r.width(),
                o = 0 - w * f,
                c = "vertical" === e ? u.height() : u.width(),
                i = 0 - (c - h) > o ? 0 - (c - h) : i > 0 ? 0 : o,
                s = u.data("offset");
            a > 2 && (i = 0 >= o - (s + f) ? 0 - f > o - (s + f) ? s : i + f : i, i = f > o - f + s + v && o + (Math.round(a) - 2) * f < s ? o + (Math.round(a) - 2) * f : i), i = 0 - (c - h) > i ? 0 - (c - h) : i > 0 ? 0 : i, "vertical" !== e && r.width() >= u.width() && (i = 0), "vertical" === e && r.height() >= u.height() && (i = 0), n.hasClass("dragged") || ("vertical" === e ? u.data("tmmove", punchgs.TweenLite.to(u, .5, {
                top: i + "px",
                ease: punchgs.Power3.easeInOut
            })) : u.data("tmmove", punchgs.TweenLite.to(u, .5, {
                left: i + "px",
                ease: punchgs.Power3.easeInOut
            })), u.data("offset", i))
        },
        l = function(n, t, i, r, u, f) {
            var s = i.parent().find(".tp-" + f + "s"),
                c = s.find(".tp-" + f + "s-inner-wrapper"),
                v = s.find(".tp-" + f + "-mask"),
                e = r.width * n < r.min_width ? r.min_width : Math.round(r.width * n),
                o = Math.round(e / r.width * r.height),
                l = "vertical" === r.direction ? e : e * u + r.space * (u - 1),
                a = "vertical" === r.direction ? o * u + r.space * (u - 1) : o,
                y = "vertical" === r.direction ? {
                    width: e + "px"
                } : {
                    height: o + "px"
                },
                h;
            return t.add(punchgs.TweenLite.set(s, y)), t.add(punchgs.TweenLite.set(c, {
                width: l + "px",
                height: a + "px"
            })), t.add(punchgs.TweenLite.set(v, {
                width: l + "px",
                height: a + "px"
            })), h = c.find(".tp-" + f), h && jQuery.each(h, function(n, i) {
                "vertical" === r.direction ? t.add(punchgs.TweenLite.set(i, {
                    top: n * (o + parseInt(void 0 === r.space ? 0 : r.space, 0)),
                    width: e + "px",
                    height: o + "px"
                })) : "horizontal" === r.direction && t.add(punchgs.TweenLite.set(i, {
                    left: n * (e + parseInt(void 0 === r.space ? 0 : r.space, 0)),
                    width: e + "px",
                    height: o + "px"
                }))
            }), t
        },
        b = function(n) {
            var u = 0,
                i = 0,
                r = 0,
                t = 0,
                f = 1,
                e = 1,
                o = 1;
            return "detail" in n && (i = n.detail), "wheelDelta" in n && (i = -n.wheelDelta / 120), "wheelDeltaY" in n && (i = -n.wheelDeltaY / 120), "wheelDeltaX" in n && (u = -n.wheelDeltaX / 120), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (u = i, i = 0), r = u * f, t = i * f, "deltaY" in n && (t = n.deltaY), "deltaX" in n && (r = n.deltaX), (r || t) && n.deltaMode && (1 == n.deltaMode ? (r *= e, t *= e) : (r *= o, t *= o)), r && !u && (u = 1 > r ? -1 : 1), t && !i && (i = 1 > t ? -1 : 1), t = navigator.userAgent.match(/mozilla/i) ? 10 * t : t, (t > 300 || -300 > t) && (t /= 10), {
                spinX: u,
                spinY: i,
                pixelX: r,
                pixelY: t
            }
        },
        k = function(n, i) {
            "on" === i.navigation.keyboardNavigation && jQuery(document).keydown(function(r) {
                ("horizontal" == i.navigation.keyboard_direction && 39 == r.keyCode || "vertical" == i.navigation.keyboard_direction && 40 == r.keyCode) && (i.sc_indicator = "arrow", i.sc_indicator_dir = 0, t.callingNewSlide(i, n, 1)), ("horizontal" == i.navigation.keyboard_direction && 37 == r.keyCode || "vertical" == i.navigation.keyboard_direction && 38 == r.keyCode) && (i.sc_indicator = "arrow", i.sc_indicator_dir = 1, t.callingNewSlide(i, n, -1))
            })
        },
        d = function(n, i) {
            if ("on" === i.navigation.mouseScrollNavigation) {
                var r = navigator.userAgent.match(/mozilla/i) ? -29 : -49,
                    u = navigator.userAgent.match(/mozilla/i) ? 29 : 49;
                n.on("mousewheel DOMMouseScroll", function(f) {
                    var s = b(f.originalEvent),
                        o = n.find(".tp-revslider-slidesli.active-revslide").index(),
                        e = n.find(".tp-revslider-slidesli.processing-revslide").index(),
                        c = -1 != o && 0 == o || -1 != e && 0 == e ? !0 : !1,
                        h = -1 != o && o == i.slideamount - 1 || 1 != e && e == i.slideamount - 1 ? !0 : !1;
                    if (-1 == e) {
                        if (s.pixelY < r) {
                            if (!c) return i.sc_indicator = "arrow", i.sc_indicator_dir = 0, t.callingNewSlide(i, n, -1), !1
                        } else if (s.pixelY > u && !h) return i.sc_indicator = "arrow", i.sc_indicator_dir = 1, t.callingNewSlide(i, n, 1), !1
                    } else if (!h) return !1;
                    f.preventDefault()
                })
            }
        },
        c = function(n, t, i) {
            return n = u ? jQuery(i.target).closest("." + n).length || jQuery(i.srcElement).closest("." + n).length : jQuery(i.toElement).closest("." + n).length || jQuery(i.originalTarget).closest("." + n).length, n === !0 || 1 === n ? 1 : 0
        },
        e = function(n, i, r) {
            var f;
            n.data("opt", i), f = i.carousel, jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), f.Limit = "endless";
            var s = (u || "Firefox" === t.get_browser(), n),
                o = "vertical" === i.navigation.thumbnails.direction || "vertical" === i.navigation.tabs.direction ? "none" : "vertical",
                e = i.navigation.touch.swipe_direction || "horizontal";
            o = "swipebased" == r && "vertical" == e ? "none" : r ? "vertical" : o, jQuery.fn.swipetp || (jQuery.fn.swipetp = jQuery.fn.swipe), jQuery.fn.swipetp.defaults && jQuery.fn.swipetp.defaults.excludedElements || (jQuery.fn.swipetp.defaults || (jQuery.fn.swipetp.defaults = {}), jQuery.fn.swipetp.defaults.excludedElements = "label, button, input, select, textarea, a, .noSwipe"), s.swipetp({
                allowPageScroll: o,
                triggerOnTouchLeave: !0,
                excludeElements: jQuery.fn.swipetp.defaults.excludedElements,
                swipeStatus: function(r, u, o, s) {
                    var nt = c("rev_slider_wrapper", n, r),
                        k = c("tp-thumbs", n, r),
                        d = c("tp-tabs", n, r),
                        ut = jQuery(this).attr("class"),
                        tt = ut.match(/tp-tabs|tp-thumb/gi) ? !0 : !1,
                        y, w;
                    if ("carousel" === i.sliderType && (("move" === u || "end" === u || "cancel" == u) && i.dragStartedOverSlider && !i.dragStartedOverThumbs && !i.dragStartedOverTabs || "start" === u && nt > 0 && 0 === k && 0 === d)) switch (i.dragStartedOverSlider = !0, s = o && o.match(/left|up/g) ? Math.round(-1 * s) : s = Math.round(1 * s), u) {
                        case "start":
                            void 0 !== f.positionanim && (f.positionanim.kill(), f.slide_globaloffset = "off" === f.infinity ? f.slide_offset : t.simp(f.slide_offset, f.maxwidth)), f.overpull = "none", f.wrap.addClass("dragged");
                            break;
                        case "move":
                            (f.slide_offset = "off" === f.infinity ? f.slide_globaloffset + s : t.simp(f.slide_globaloffset + s, f.maxwidth), "off" === f.infinity) && (y = "center" === f.horizontal_align ? (f.wrapwidth / 2 - f.slide_width / 2 - f.slide_offset) / f.slide_width : (0 - f.slide_offset) / f.slide_width, "none" !== f.overpull && 0 !== f.overpull || !(0 > y || y > i.slideamount - 1) ? y >= 0 && y <= i.slideamount - 1 && (y >= 0 && s > f.overpull || y <= i.slideamount - 1 && s < f.overpull) && (f.overpull = 0) : f.overpull = s, f.slide_offset = 0 > y ? f.slide_offset + (f.overpull - s) / 1.1 + Math.sqrt(Math.abs((f.overpull - s) / 1.1)) : y > i.slideamount - 1 ? f.slide_offset + (f.overpull - s) / 1.1 - Math.sqrt(Math.abs((f.overpull - s) / 1.1)) : f.slide_offset), t.organiseCarousel(i, o, !0, !0);
                            break;
                        case "end":
                        case "cancel":
                            f.slide_globaloffset = f.slide_offset, f.wrap.removeClass("dragged"), t.carouselToEvalPosition(i, o), i.dragStartedOverSlider = !1, i.dragStartedOverThumbs = !1, i.dragStartedOverTabs = !1
                    } else {
                        if (("move" !== u && "end" !== u && "cancel" != u || i.dragStartedOverSlider || !i.dragStartedOverThumbs && !i.dragStartedOverTabs) && !("start" === u && nt > 0 && (k > 0 || d > 0))) {
                            if ("end" == u && !tt) {
                                if (i.sc_indicator = "arrow", "horizontal" == e && "left" == o || "vertical" == e && "up" == o) return i.sc_indicator_dir = 0, t.callingNewSlide(i, i.c, 1), !1;
                                if ("horizontal" == e && "right" == o || "vertical" == e && "down" == o) return i.sc_indicator_dir = 1, t.callingNewSlide(i, i.c, -1), !1
                            }
                            return i.dragStartedOverSlider = !1, i.dragStartedOverThumbs = !1, i.dragStartedOverTabs = !1, !0
                        }
                        k > 0 && (i.dragStartedOverThumbs = !0), d > 0 && (i.dragStartedOverTabs = !0);
                        var it = i.dragStartedOverThumbs ? ".tp-thumbs" : ".tp-tabs",
                            ft = i.dragStartedOverThumbs ? ".tp-thumb-mask" : ".tp-tab-mask",
                            et = i.dragStartedOverThumbs ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                            rt = i.dragStartedOverThumbs ? ".tp-thumb" : ".tp-tab",
                            g = i.dragStartedOverThumbs ? i.navigation.thumbnails : i.navigation.tabs;
                        s = o && o.match(/left|up/g) ? Math.round(-1 * s) : s = Math.round(1 * s);
                        var a = n.parent().find(ft),
                            l = a.find(et),
                            v = g.direction,
                            ot = "vertical" === v ? l.height() : l.width(),
                            st = "vertical" === v ? a.height() : a.width(),
                            p = "vertical" === v ? a.find(rt).first().outerHeight(!0) + g.space : a.find(rt).first().outerWidth(!0) + g.space,
                            b = void 0 === l.data("offset") ? 0 : parseInt(l.data("offset"), 0),
                            h = 0;
                        switch (u) {
                            case "start":
                                n.parent().find(it).addClass("dragged"), b = "vertical" === v ? l.position().top : l.position().left, l.data("offset", b), l.data("tmmove") && l.data("tmmove").pause();
                                break;
                            case "move":
                                if (st >= ot) return !1;
                                h = b + s, h = h > 0 ? "horizontal" === v ? h - l.width() * (h / l.width() * h / l.width()) : h - l.height() * (h / l.height() * h / l.height()) : h, w = "vertical" === v ? 0 - (l.height() - a.height()) : 0 - (l.width() - a.width()), h = w > h ? "horizontal" === v ? h + l.width() * (h - w) / l.width() * (h - w) / l.width() : h + l.height() * (h - w) / l.height() * (h - w) / l.height() : h, "vertical" === v ? punchgs.TweenLite.set(l, {
                                    top: h + "px"
                                }) : punchgs.TweenLite.set(l, {
                                    left: h + "px"
                                });
                                break;
                            case "end":
                            case "cancel":
                                if (tt) return h = b + s, h = "vertical" === v ? h < 0 - (l.height() - a.height()) ? 0 - (l.height() - a.height()) : h : h < 0 - (l.width() - a.width()) ? 0 - (l.width() - a.width()) : h, h = h > 0 ? 0 : h, h = Math.abs(s) > p / 10 ? 0 >= s ? Math.floor(h / p) * p : Math.ceil(h / p) * p : 0 > s ? Math.ceil(h / p) * p : Math.floor(h / p) * p, h = "vertical" === v ? h < 0 - (l.height() - a.height()) ? 0 - (l.height() - a.height()) : h : h < 0 - (l.width() - a.width()) ? 0 - (l.width() - a.width()) : h, h = h > 0 ? 0 : h, "vertical" === v ? punchgs.TweenLite.to(l, .5, {
                                    top: h + "px",
                                    ease: punchgs.Power3.easeOut
                                }) : punchgs.TweenLite.to(l, .5, {
                                    left: h + "px",
                                    ease: punchgs.Power3.easeOut
                                }), h = h ? h : "vertical" === v ? l.position().top : l.position().left, l.data("offset", h), l.data("distance", s), setTimeout(function() {
                                    i.dragStartedOverSlider = !1, i.dragStartedOverThumbs = !1, i.dragStartedOverTabs = !1
                                }, 100), n.parent().find(it).removeClass("dragged"), !1
                        }
                    }
                }
            })
        },
        o = function(n) {
            n.hide_delay = jQuery.isNumeric(parseInt(n.hide_delay, 0)) ? n.hide_delay / 1e3 : .2, n.hide_delay_mobile = jQuery.isNumeric(parseInt(n.hide_delay_mobile, 0)) ? n.hide_delay_mobile / 1e3 : .2
        },
        n = function(n) {
            return n && n.enable
        },
        s = function(n) {
            return n && n.enable && n.hide_onleave === !0 && (void 0 === n.position ? !0 : !n.position.match(/outer/g))
        },
        a = function(n, t) {
            var r = n.parent();
            s(t.navigation.arrows) && punchgs.TweenLite.delayedCall(u ? t.navigation.arrows.hide_delay_mobile : t.navigation.arrows.hide_delay, i, [r.find(".tparrows"), t.navigation.arrows, "hide"]), s(t.navigation.bullets) && punchgs.TweenLite.delayedCall(u ? t.navigation.bullets.hide_delay_mobile : t.navigation.bullets.hide_delay, i, [r.find(".tp-bullets"), t.navigation.bullets, "hide"]), s(t.navigation.thumbnails) && punchgs.TweenLite.delayedCall(u ? t.navigation.thumbnails.hide_delay_mobile : t.navigation.thumbnails.hide_delay, i, [r.find(".tp-thumbs"), t.navigation.thumbnails, "hide"]), s(t.navigation.tabs) && punchgs.TweenLite.delayedCall(u ? t.navigation.tabs.hide_delay_mobile : t.navigation.tabs.hide_delay, i, [r.find(".tp-tabs"), t.navigation.tabs, "hide"])
        },
        i = function(n, t, i, r) {
            switch (r = void 0 === r ? .5 : r, i) {
                case "show":
                    punchgs.TweenLite.to(n, r, {
                        autoAlpha: 1,
                        ease: punchgs.Power3.easeInOut,
                        overwrite: "auto"
                    });
                    break;
                case "hide":
                    punchgs.TweenLite.to(n, r, {
                        autoAlpha: 0,
                        ease: punchgs.Power3.easeInOu,
                        overwrite: "auto"
                    })
            }
        },
        g = function(n, t, i) {
            t.style = void 0 === t.style ? "" : t.style, t.left.style = void 0 === t.left.style ? "" : t.left.style, t.right.style = void 0 === t.right.style ? "" : t.right.style, 0 === n.find(".tp-leftarrow.tparrows").length && n.append('<div class="tp-leftarrow tparrows ' + t.style + " " + t.left.style + '">' + t.tmp + "<\/div>"), 0 === n.find(".tp-rightarrow.tparrows").length && n.append('<div class="tp-rightarrow tparrows ' + t.style + " " + t.right.style + '">' + t.tmp + "<\/div>");
            var u = n.find(".tp-leftarrow.tparrows"),
                f = n.find(".tp-rightarrow.tparrows");
            f.click(function() {
                i.sc_indicator = "arrow", i.sc_indicator_dir = 0, n.revnext()
            }), u.click(function() {
                i.sc_indicator = "arrow", i.sc_indicator_dir = 1, n.revprev()
            }), t.right.j = n.find(".tp-rightarrow.tparrows"), t.left.j = n.find(".tp-leftarrow.tparrows"), t.padding_top = parseInt(i.carousel.padding_top || 0, 0), t.padding_bottom = parseInt(i.carousel.padding_bottom || 0, 0), r(u, t.left), r(f, t.right), ("outer-left" == t.position || "outer-right" == t.position) && (i.outernav = !0)
        },
        v = function(n, t) {
            var i = n.outerHeight(!0),
                r = (n.outerWidth(!0), "top" === t.v_align ? {
                    top: "0px",
                    y: Math.round(t.v_offset) + "px"
                } : "center" === t.v_align ? {
                    top: "50%",
                    y: Math.round(0 - i / 2 + t.v_offset) + "px"
                } : {
                    top: "100%",
                    y: Math.round(0 - (i + t.v_offset)) + "px"
                });
            n.hasClass("outer-bottom") || punchgs.TweenLite.set(n, r)
        },
        y = function(n, t) {
            var i = (n.outerHeight(!0), n.outerWidth(!0)),
                r = "left" === t.h_align ? {
                    left: "0px",
                    x: Math.round(t.h_offset) + "px"
                } : "center" === t.h_align ? {
                    left: "50%",
                    x: Math.round(0 - i / 2 + t.h_offset) + "px"
                } : {
                    left: "100%",
                    x: Math.round(0 - (i + t.h_offset)) + "px"
                };
            punchgs.TweenLite.set(n, r)
        },
        r = function(n, t) {
            var c = n.closest(".tp-simpleresponsive").length > 0 ? n.closest(".tp-simpleresponsive") : n.closest(".tp-revslider-mainul").length > 0 ? n.closest(".tp-revslider-mainul") : n.closest(".rev_slider_wrapper").length > 0 ? n.closest(".rev_slider_wrapper") : n.parent().find(".tp-revslider-mainul"),
                o = c.width(),
                f = c.height();
            if (v(n, t), y(n, t), "outer-left" !== t.position || "fullwidth" != t.sliderLayout && "fullscreen" != t.sliderLayout ? "outer-right" !== t.position || "fullwidth" != t.sliderLayout && "fullscreen" != t.sliderLayout || punchgs.TweenLite.set(n, {
                    right: 0 - n.outerWidth() + "px",
                    x: t.h_offset + "px"
                }) : punchgs.TweenLite.set(n, {
                    left: 0 - n.outerWidth() + "px",
                    x: t.h_offset + "px"
                }), n.hasClass("tp-thumbs") || n.hasClass("tp-tabs")) {
                var i = n.data("wr_padding"),
                    s = n.data("maxw"),
                    h = n.data("maxh"),
                    r = n.find(n.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
                    u = parseInt(t.padding_top || 0, 0),
                    e = parseInt(t.padding_bottom || 0, 0);
                s > o && "outer-left" !== t.position && "outer-right" !== t.position ? (punchgs.TweenLite.set(n, {
                    left: "0px",
                    x: 0,
                    maxWidth: o - 2 * i + "px"
                }), punchgs.TweenLite.set(r, {
                    maxWidth: o - 2 * i + "px"
                })) : (punchgs.TweenLite.set(n, {
                    maxWidth: s + "px"
                }), punchgs.TweenLite.set(r, {
                    maxWidth: s + "px"
                })), h + 2 * i > f && "outer-bottom" !== t.position && "outer-top" !== t.position ? (punchgs.TweenLite.set(n, {
                    top: "0px",
                    y: 0,
                    maxHeight: u + e + (f - 2 * i) + "px"
                }), punchgs.TweenLite.set(r, {
                    maxHeight: u + e + (f - 2 * i) + "px"
                })) : (punchgs.TweenLite.set(n, {
                    maxHeight: h + "px"
                }), punchgs.TweenLite.set(r, {
                    maxHeight: h + "px"
                })), "outer-left" !== t.position && "outer-right" !== t.position && (u = 0, e = 0), t.span === !0 && "vertical" === t.direction ? (punchgs.TweenLite.set(n, {
                    maxHeight: u + e + (f - 2 * i) + "px",
                    height: u + e + (f - 2 * i) + "px",
                    top: 0 - u,
                    y: 0
                }), v(r, t)) : t.span === !0 && "horizontal" === t.direction && (punchgs.TweenLite.set(n, {
                    maxWidth: "100%",
                    width: o - 2 * i + "px",
                    left: 0,
                    x: 0
                }), y(r, t))
            }
        },
        nt = function(n, t, i, u) {
            0 === n.find(".tp-bullets").length && (t.style = void 0 === t.style ? "" : t.style, n.append('<div class="tp-bullets ' + t.style + " " + t.direction + '"><\/div>'));
            var e = n.find(".tp-bullets"),
                h = i.data("index"),
                s = t.tmp;
            jQuery.each(u.thumbs[i.index()].params, function(n, t) {
                s = s.replace(t.from, t.to)
            }), e.append('<div class="justaddedbullet tp-bullet">' + s + "<\/div>");
            var f = n.find(".justaddedbullet"),
                o = n.find(".tp-bullet").length,
                c = f.outerWidth() + parseInt(void 0 === t.space ? 0 : t.space, 0),
                l = f.outerHeight() + parseInt(void 0 === t.space ? 0 : t.space, 0);
            "vertical" === t.direction ? (f.css({
                top: (o - 1) * l + "px",
                left: "0px"
            }), e.css({
                height: (o - 1) * l + f.outerHeight(),
                width: f.outerWidth()
            })) : (f.css({
                left: (o - 1) * c + "px",
                top: "0px"
            }), e.css({
                width: (o - 1) * c + f.outerWidth(),
                height: f.outerHeight()
            })), f.find(".tp-bullet-image").css({
                backgroundImage: "url(" + u.thumbs[i.index()].src + ")"
            }), f.data("liref", h), f.click(function() {
                u.sc_indicator = "bullet", n.revcallslidewithid(h), n.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected")
            }), f.removeClass("justaddedbullet"), t.padding_top = parseInt(u.carousel.padding_top || 0, 0), t.padding_bottom = parseInt(u.carousel.padding_bottom || 0, 0), ("outer-left" == t.position || "outer-right" == t.position) && (u.outernav = !0), r(e, t)
        },
        tt = function(n, t) {
            t = parseFloat(t), n = n.replace("#", "");
            var i = parseInt(n.substring(0, 2), 16),
                r = parseInt(n.substring(2, 4), 16),
                u = parseInt(n.substring(4, 6), 16);
            return "rgba(" + i + "," + r + "," + u + "," + t + ")"
        },
        p = function(n, t, i, u, f) {
            var c = "tp-thumb" === u ? ".tp-thumbs" : ".tp-tabs",
                rt = "tp-thumb" === u ? ".tp-thumb-mask" : ".tp-tab-mask",
                p = "tp-thumb" === u ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                ut = "tp-thumb" === u ? ".tp-thumb" : ".tp-tab",
                ft = "tp-thumb" === u ? ".tp-thumb-image" : ".tp-tab-image",
                w, s, nt, it;
            (t.visibleAmount = t.visibleAmount > f.slideamount ? f.slideamount : t.visibleAmount, t.sliderLayout = f.sliderLayout, 0 === n.parent().find(c).length) && (t.style = void 0 === t.style ? "" : t.style, w = t.span === !0 ? "tp-span-wrapper" : "", s = '<div class="' + u + "s " + w + " " + t.position + " " + t.style + '"><div class="' + u + '-mask"><div class="' + u + 's-inner-wrapper" style="position:relative;"><\/div><\/div><\/div>', "outer-top" === t.position ? n.parent().prepend(s) : "outer-bottom" === t.position ? n.after(s) : n.append(s), t.padding_top = parseInt(f.carousel.padding_top || 0, 0), t.padding_bottom = parseInt(f.carousel.padding_bottom || 0, 0), ("outer-left" == t.position || "outer-right" == t.position) && (f.outernav = !0));
            var b = i.data("index"),
                o = n.parent().find(c),
                k = o.find(rt),
                l = k.find(p),
                a = "horizontal" === t.direction ? t.width * t.visibleAmount + t.space * (t.visibleAmount - 1) : t.width,
                v = "horizontal" === t.direction ? t.height : t.height * t.visibleAmount + t.space * (t.visibleAmount - 1),
                y = t.tmp;
            jQuery.each(f.thumbs[i.index()].params, function(n, t) {
                y = y.replace(t.from, t.to)
            }), l.append('<div data-liindex="' + i.index() + '" data-liref="' + b + '" class="justaddedthumb ' + u + '" style="width:' + t.width + "px;height:" + t.height + 'px;">' + y + "<\/div>");
            var e = o.find(".justaddedthumb"),
                h = o.find(ut).length,
                d = e.outerWidth() + parseInt(void 0 === t.space ? 0 : t.space, 0),
                g = e.outerHeight() + parseInt(void 0 === t.space ? 0 : t.space, 0);
            e.find(ft).css({
                backgroundImage: "url(" + f.thumbs[i.index()].src + ")"
            }), "vertical" === t.direction ? (e.css({
                top: (h - 1) * g + "px",
                left: "0px"
            }), l.css({
                height: (h - 1) * g + e.outerHeight(),
                width: e.outerWidth()
            })) : (e.css({
                left: (h - 1) * d + "px",
                top: "0px"
            }), l.css({
                width: (h - 1) * d + e.outerWidth(),
                height: e.outerHeight()
            })), o.data("maxw", a), o.data("maxh", v), o.data("wr_padding", t.wrapper_padding), nt = "outer-top" === t.position || "outer-bottom" === t.position ? "relative" : "absolute", it = "outer-top" !== t.position && "outer-bottom" !== t.position || "center" !== t.h_align ? "0" : "auto", k.css({
                maxWidth: a + "px",
                maxHeight: v + "px",
                overflow: "hidden",
                position: "relative"
            }), o.css({
                maxWidth: a + "px",
                margin: it,
                maxHeight: v + "px",
                overflow: "visible",
                position: nt,
                background: tt(t.wrapper_color, t.wrapper_opacity),
                padding: t.wrapper_padding + "px",
                boxSizing: "contet-box"
            }), e.click(function() {
                f.sc_indicator = "bullet";
                var t = n.parent().find(p).data("distance");
                t = void 0 === t ? 0 : t, Math.abs(t) < 10 && (n.revcallslidewithid(b), n.parent().find(c).removeClass("selected"), jQuery(this).addClass("selected"))
            }), e.removeClass("justaddedthumb"), r(o, t)
        },
        w = function(n) {
            var t = n.c.parent().find(".outer-top"),
                i = n.c.parent().find(".outer-bottom");
            n.top_outer = t.hasClass("tp-forcenotvisible") ? 0 : t.outerHeight() || 0, n.bottom_outer = i.hasClass("tp-forcenotvisible") ? 0 : i.outerHeight() || 0
        },
        h = function(n, t, i, r) {
            t > i || i > r ? n.addClass("tp-forcenotvisible") : n.removeClass("tp-forcenotvisible")
        }
}(jQuery), ! function() {
    var n = jQuery.fn.revolution,
        t = n.is_mobile();
    jQuery.extend(!0, n, {
        checkForParallax: function(i, r) {
            var u = r.parallax;
            return t && "on" == u.disable_onmobile ? !1 : (("3D" == u.type || "3d" == u.type) && (punchgs.TweenLite.set(r.c, {
                overflow: u.ddd_overflow
            }), punchgs.TweenLite.set(r.ul, {
                overflow: u.ddd_overflow
            }), "carousel" != r.sliderType && "on" == u.ddd_shadow && (r.c.prepend('<div class="dddwrappershadow"><\/div>'), punchgs.TweenLite.set(r.c.find(".dddwrappershadow"), {
                force3D: "auto",
                transformPerspective: 1600,
                transformOrigin: "50% 50%",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0
            }))), r.li.each(function() {
                var n = jQuery(this),
                    t;
                if ("3D" == u.type || "3d" == u.type) {
                    n.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"><\/div>'), n.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:' + u.ddd_layer_overflow + ';"><\/div>'), n.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"><\/div>');
                    var i = n.find(".dddwrapper"),
                        f = n.find(".dddwrapper-layer"),
                        e = n.find(".dddwrapper-layertobggroup");
                    e.appendTo(i), "carousel" == r.sliderType && ("on" == u.ddd_shadow && i.addClass("dddwrappershadow"), punchgs.TweenLite.set(i, {
                        borderRadius: r.carousel.border_radius
                    })), punchgs.TweenLite.set(n, {
                        overflow: "visible",
                        transformStyle: "preserve-3d",
                        perspective: 1600
                    }), punchgs.TweenLite.set(i, {
                        force3D: "auto",
                        transformOrigin: "50% 50%"
                    }), punchgs.TweenLite.set(f, {
                        force3D: "auto",
                        transformOrigin: "50% 50%",
                        zIndex: 5
                    }), punchgs.TweenLite.set(r.ul, {
                        transformStyle: "preserve-3d",
                        transformPerspective: 1600
                    })
                }
                for (t = 1; t <= u.levels.length; t++) n.find(".rs-parallaxlevel-" + t).each(function() {
                    var i = jQuery(this),
                        n = i.closest(".tp-parallax-wrap");
                    n.data("parallaxlevel", u.levels[t - 1]), n.addClass("tp-parallax-container")
                })
            }), ("mouse" == u.type || "scroll+mouse" == u.type || "mouse+scroll" == u.type || "3D" == u.type || "3d" == u.type) && (i.mouseenter(function(n) {
                var t = i.find(".active-revslide"),
                    r = i.offset().top,
                    u = i.offset().left,
                    f = n.pageX - u,
                    e = n.pageY - r;
                t.data("enterx", f), t.data("entery", e)
            }), i.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function(n, t) {
                var f = t && t.li ? t.li : i.find(".active-revslide"),
                    e, o, l;
                if ("enterpoint" == u.origo) {
                    e = i.offset().top, o = i.offset().left, void 0 == f.data("enterx") && f.data("enterx", n.pageX - o), void 0 == f.data("entery") && f.data("entery", n.pageY - e);
                    var a = f.data("enterx") || n.pageX - o,
                        v = f.data("entery") || n.pageY - e,
                        s = a - (n.pageX - o),
                        h = v - (n.pageY - e),
                        c = u.speed / 1e3 || .4
                } else var e = i.offset().top,
                    o = i.offset().left,
                    s = r.conw / 2 - (n.pageX - o),
                    h = r.conh / 2 - (n.pageY - e),
                    c = u.speed / 1e3 || 3;
                ("mouseleave" == n.type && (s = u.ddd_lasth || 0, h = u.ddd_lastv || 0, c = 1.5), f.find(".tp-parallax-container").each(function() {
                    var n = jQuery(this),
                        t = parseInt(n.data("parallaxlevel"), 0),
                        i = "3D" == u.type || "3d" == u.type ? t / 200 : t / 100,
                        r = s * i,
                        f = h * i;
                    "scroll+mouse" == u.type || "mouse+scroll" == u.type ? punchgs.TweenLite.to(n, c, {
                        force3D: "auto",
                        x: r,
                        ease: punchgs.Power3.easeOut,
                        overwrite: "all"
                    }) : punchgs.TweenLite.to(n, c, {
                        force3D: "auto",
                        x: r,
                        y: f,
                        ease: punchgs.Power3.easeOut,
                        overwrite: "all"
                    })
                }), "3D" == u.type || "3d" == u.type) && (l = ".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer", "carousel" === r.sliderType && (l = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer"), r.c.find(l).each(function() {
                    var t = jQuery(this),
                        i = u.levels[u.levels.length - 1] / 200,
                        f = s * i,
                        e = h * i,
                        a = 0 == r.conw ? 0 : Math.round(s / r.conw * i * 100) || 0,
                        v = 0 == r.conh ? 0 : Math.round(h / r.conh * i * 100) || 0,
                        y = t.closest("li"),
                        o = 0,
                        l = !1;
                    t.hasClass("dddwrapper-layer") && (o = u.ddd_z_correction || 65, l = !0), t.hasClass("dddwrapper-layer") && (f = 0, e = 0), y.hasClass("active-revslide") || "carousel" != r.sliderType ? "on" != u.ddd_bgfreeze || l ? punchgs.TweenLite.to(t, c, {
                        rotationX: v,
                        rotationY: -a,
                        x: f,
                        z: o,
                        y: e,
                        ease: punchgs.Power3.easeOut,
                        overwrite: "all"
                    }) : punchgs.TweenLite.to(t, .5, {
                        force3D: "auto",
                        rotationY: 0,
                        rotationX: 0,
                        z: 0,
                        ease: punchgs.Power3.easeOut,
                        overwrite: "all"
                    }) : punchgs.TweenLite.to(t, .5, {
                        force3D: "auto",
                        rotationY: 0,
                        z: 0,
                        x: 0,
                        y: 0,
                        rotationX: 0,
                        z: 0,
                        ease: punchgs.Power3.easeOut,
                        overwrite: "all"
                    }), "mouseleave" == n.type && punchgs.TweenLite.to(jQuery(this), 3.8, {
                        z: 0,
                        ease: punchgs.Power3.easeOut
                    })
                }))
            }), t && (window.ondeviceorientation = function(n) {
                var t = Math.round(n.beta || 0) - 70,
                    f = Math.round(n.gamma || 0),
                    l = i.find(".active-revslide"),
                    h, s;
                jQuery(window).width() > jQuery(window).height() && (h = f, f = t, t = h);
                var a = i.width(),
                    v = i.height(),
                    e = 360 / a * f,
                    o = 180 / v * t,
                    c = u.speed / 1e3 || 3;
                (l.find(".tp-parallax-container").each(function() {
                    var n = jQuery(this),
                        i = parseInt(n.data("parallaxlevel"), 0),
                        t = i / 100,
                        r = e * t * 2,
                        u = o * t * 4;
                    punchgs.TweenLite.to(n, c, {
                        force3D: "auto",
                        x: r,
                        y: u,
                        ease: punchgs.Power3.easeOut,
                        overwrite: "all"
                    })
                }), "3D" == u.type || "3d" == u.type) && (s = ".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer", "carousel" === r.sliderType && (s = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer"), r.c.find(s).each(function() {
                    var t = jQuery(this),
                        i = u.levels[u.levels.length - 1] / 200;
                    offsh = e * i, offsv = o * i * 3, offrv = 0 == r.conw ? 0 : Math.round(e / r.conw * i * 500) || 0, offrh = 0 == r.conh ? 0 : Math.round(o / r.conh * i * 700) || 0, li = t.closest("li"), zz = 0, itslayer = !1, t.hasClass("dddwrapper-layer") && (zz = u.ddd_z_correction || 65, itslayer = !0), t.hasClass("dddwrapper-layer") && (offsh = 0, offsv = 0), li.hasClass("active-revslide") || "carousel" != r.sliderType ? "on" != u.ddd_bgfreeze || itslayer ? punchgs.TweenLite.to(t, c, {
                        rotationX: offrh,
                        rotationY: -offrv,
                        x: offsh,
                        z: zz,
                        y: offsv,
                        ease: punchgs.Power3.easeOut,
                        overwrite: "all"
                    }) : punchgs.TweenLite.to(t, .5, {
                        force3D: "auto",
                        rotationY: 0,
                        rotationX: 0,
                        z: 0,
                        ease: punchgs.Power3.easeOut,
                        overwrite: "all"
                    }) : punchgs.TweenLite.to(t, .5, {
                        force3D: "auto",
                        rotationY: 0,
                        z: 0,
                        x: 0,
                        y: 0,
                        rotationX: 0,
                        z: 0,
                        ease: punchgs.Power3.easeOut,
                        overwrite: "all"
                    }), "mouseleave" == n.type && punchgs.TweenLite.to(jQuery(this), 3.8, {
                        z: 0,
                        ease: punchgs.Power3.easeOut
                    })
                }))
            })), void n.scrollTicker(r, i))
        },
        scrollTicker: function(t, i) {
            1 != t.scrollTicker && (t.scrollTicker = !0, punchgs.TweenLite.ticker.fps(150), punchgs.TweenLite.ticker.addEventListener("tick", function() {
                n.scrollHandling(t)
            }, i, !0, 1))
        },
        scrollHandling: function(i) {
            var f, e, o;
            i.lastwindowheight = i.lastwindowheight || jQuery(window).height();
            var h = i.c.offset().top,
                s = jQuery(window).scrollTop(),
                r = {},
                c = i.viewPort,
                u = i.parallax;
            if (i.lastscrolltop == s || (i.lastscrolltop = s, r.top = h - s, r.h = 0 == i.conh ? i.c.height() : i.conh, r.bottom = h - s + r.h, f = r.top < 0 ? r.top / r.h : r.bottom > i.lastwindowheight ? (r.bottom - i.lastwindowheight) / r.h : 0, i.scrollproc = f, n.callBackHandling && n.callBackHandling(i, "parallax", "start"), e = 1 - Math.abs(f), e = 0 > e ? 0 : e, c.enable && (1 - c.visible_area <= e ? i.inviewport || (i.inviewport = !0, n.enterInViewPort(i)) : i.inviewport && (i.inviewport = !1, n.leaveViewPort(i))), t && "on" == i.parallax.disable_onmobile)) return !1;
            o = new punchgs.TimelineLite, o.pause(), "3d" != u.type && "3D" != u.type && (("scroll" == u.type || "scroll+mouse" == u.type || "mouse+scroll" == u.type) && i.c.find(".tp-parallax-container").each(function() {
                var n = jQuery(this),
                    r = parseInt(n.data("parallaxlevel"), 0) / 100,
                    t = f * -(r * i.conh);
                n.data("parallaxoffset", t), o.add(punchgs.TweenLite.set(n, {
                    force3D: "auto",
                    y: t
                }), 0)
            }), i.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function() {
                var r = jQuery(this),
                    n = r.data("bgparallax") || i.parallax.bgparallax,
                    u, t;
                (n = "on" == n ? 1 : n, void 0 !== n || "off" !== n) && (u = i.parallax.levels[parseInt(n, 0) - 1] / 100, t = f * -(u * i.conh), jQuery.isNumeric(t) && o.add(punchgs.TweenLite.set(r, {
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    backfaceVisibility: "hidden",
                    force3D: "true",
                    y: t + "px",
                    overwrite: "auto"
                }), 0))
            })), n.callBackHandling && n.callBackHandling(i, "parallax", "end"), o.play(0)
        }
    })
}(jQuery), ! function() {
    function n(n) {
        return void 0 == n ? -1 : jQuery.isNumeric(n) ? n : n.split(":").length > 1 ? 60 * parseInt(n.split(":")[0], 0) + parseInt(n.split(":")[1], 0) : n
    }
    var t = jQuery.fn.revolution,
        r = t.is_mobile();
    jQuery.extend(!0, t, {
        resetVideo: function(t) {
            var u, f, e, i;
            switch (t.data("videotype")) {
                case "youtube":
                    t.data("player");
                    try {
                        "on" != t.data("forcerewind") || r || (i = n(t.data("videostartat")), i = -1 == i ? 0 : i, t.data("player").seekTo(i), t.data("player").pauseVideo())
                    } catch (o) {}
                    0 == t.find(".tp-videoposter").length && punchgs.TweenLite.to(t.find("iframe"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    });
                    break;
                case "vimeo":
                    u = $f(t.find("iframe").attr("id"));
                    try {
                        "on" != t.data("forcerewind") || r || (i = n(t.data("videostartat")), i = -1 == i ? 0 : i, u.api("seekTo", i), u.api("pause"))
                    } catch (o) {}
                    0 == t.find(".tp-videoposter").length && punchgs.TweenLite.to(t.find("iframe"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    });
                    break;
                case "html5":
                    if (r && 1 == t.data("disablevideoonmobile")) return !1;
                    if (f = t.find("video"), e = f[0], punchgs.TweenLite.to(f, .3, {
                            autoAlpha: 1,
                            display: "block",
                            ease: punchgs.Power3.easeInOut
                        }), "on" == t.data("forcerewind") && !t.hasClass("videoisplaying")) try {
                        i = n(t.data("videostartat")), e.currentTime = -1 == i ? 0 : i
                    } catch (o) {}
                    "mute" == t.data("volume") && (e.muted = !0)
            }
        },
        stopVideo: function(n) {
            var t, i, r, u;
            switch (n.data("videotype")) {
                case "youtube":
                    try {
                        t = n.data("player"), t.pauseVideo()
                    } catch (f) {}
                    break;
                case "vimeo":
                    try {
                        i = $f(n.find("iframe").attr("id")), i.api("pause")
                    } catch (f) {}
                    break;
                case "html5":
                    r = n.find("video"), u = r[0], u.pause()
            }
        },
        playVideo: function(u, f) {
            var c, h, o;
            switch (clearTimeout(u.data("videoplaywait")), u.data("videotype")) {
                case "youtube":
                    0 == u.find("iframe").length ? (u.append(u.data("videomarkup")), e(u, f, !0)) : void 0 != u.data("player").playVideo ? (u.data("player").playVideo(), o = n(u.data("videostartat")), -1 != o && u.data("player").seekTo(o)) : u.data("videoplaywait", setTimeout(function() {
                        t.playVideo(u, f)
                    }, 50));
                    break;
                case "vimeo":
                    0 == u.find("iframe").length ? (u.append(u.data("videomarkup")), e(u, f, !0)) : u.hasClass("rs-apiready") ? (c = u.find("iframe").attr("id"), h = $f(c), void 0 == h.api("play") ? u.data("videoplaywait", setTimeout(function() {
                        t.playVideo(u, f)
                    }, 50)) : setTimeout(function() {
                        h.api("play");
                        var t = n(u.data("videostartat")); - 1 != t && h.api("seekTo", t)
                    }, 510)) : u.data("videoplaywait", setTimeout(function() {
                        t.playVideo(u, f)
                    }, 50));
                    break;
                case "html5":
                    if (r && 1 == u.data("disablevideoonmobile")) return !1;
                    var l = u.find("video"),
                        s = l[0],
                        a = l.parent();
                    1 != a.data("metaloaded") ? i(s, "loadedmetadata", function(i) {
                        t.resetVideo(i, f), s.play();
                        var r = n(i.data("videostartat")); - 1 != r && (s.currentTime = r)
                    }(u)) : (s.play(), o = n(u.data("videostartat")), -1 != o && (s.currentTime = o))
            }
        },
        isVideoPlaying: function(n, t) {
            var i = !1;
            return void 0 != t.playingvideos && jQuery.each(t.playingvideos, function(t, r) {
                n.attr("id") == r.attr("id") && (i = !0)
            }), i
        },
        prepareCoveredVideo: function(n, t, i) {
            var f = i.find("iframe, video"),
                h = n.split(":")[0],
                c = n.split(":")[1],
                e = i.closest(".tp-revslider-slidesli"),
                r = e.width() / e.height(),
                u = h / c,
                o = r / u * 100,
                s = u / r * 100;
            r > u ? punchgs.TweenLite.to(f, .001, {
                height: o + "%",
                width: "100%",
                top: -(o - 100) / 2 + "%",
                left: "0px",
                position: "absolute"
            }) : punchgs.TweenLite.to(f, .001, {
                width: s + "%",
                height: "100%",
                left: -(s - 100) / 2 + "%",
                top: "0px",
                position: "absolute"
            })
        },
        checkVideoApis: function(n, t, i) {
            var e = "https:" === location.protocol ? "https" : "http",
                f, r, u;
            if (((void 0 != n.data("ytid") || n.find("iframe").length > 0 && n.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (t.youtubeapineeded = !0), (void 0 != n.data("ytid") || n.find("iframe").length > 0 && n.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && 0 == i.addedyt) && (t.youtubestarttime = jQuery.now(), i.addedyt = 1, f = document.createElement("script"), f.src = "https://www.youtube.com/iframe_api", r = document.getElementsByTagName("script")[0], u = !0, jQuery("head").find("*").each(function() {
                    "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (u = !1)
                }), u && r.parentNode.insertBefore(f, r)), (void 0 != n.data("vimeoid") || n.find("iframe").length > 0 && n.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (t.vimeoapineeded = !0), (void 0 != n.data("vimeoid") || n.find("iframe").length > 0 && n.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && 0 == i.addedvim) {
                t.vimeostarttime = jQuery.now(), i.addedvim = 1;
                var o = document.createElement("script"),
                    r = document.getElementsByTagName("script")[0],
                    u = !0;
                o.src = e + "://f.vimeocdn.com/js/froogaloop2.min.js", jQuery("head").find("*").each(function() {
                    jQuery(this).attr("src") == e + "://a.vimeocdn.com/js/froogaloop2.min.js" && (u = !1)
                }), u && r.parentNode.insertBefore(o, r)
            }
            return i
        },
        manageVideoLayer: function(u, f) {
            var o = u.data("videoattributes"),
                w = u.data("ytid"),
                b = u.data("vimeoid"),
                ft = u.data("videpreload"),
                k = u.data("videomp4"),
                d = u.data("videowebm"),
                it = u.data("videoogv"),
                y = u.data("allowfullscreenvideo"),
                p = u.data("videocontrols"),
                c = "http",
                et = "loop" == u.data("videoloop") ? "loop" : "loopandnoslidestop" == u.data("videoloop") ? "loop" : "",
                l = void 0 != k || void 0 != d ? "html5" : void 0 != w && String(w).length > 1 ? "youtube" : void 0 != b && String(b).length > 1 ? "vimeo" : "none",
                ot = "html5" == l && 0 == u.find("video").length ? "html5" : "youtube" == l && 0 == u.find("iframe").length ? "youtube" : "vimeo" == l && 0 == u.find("iframe").length ? "vimeo" : "none",
                h, g, nt, tt, v, a, rt, ut;
            switch (u.data("videotype", l), ot) {
                case "html5":
                    "controls" != p && (p = ""), h = '<video style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" ' + et + ' preload="' + ft + '">', void 0 != d && "firefox" == t.get_browser().toLowerCase() && (h = h + '<source src="' + d + '" type="video/webm" />'), void 0 != k && (h = h + '<source src="' + k + '" type="video/mp4" />'), void 0 != it && (h = h + '<source src="' + it + '" type="video/ogg" />'), h += "<\/video>", g = "", ("true" === y || y === !0) && (g = '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen<\/button><\/div>'), "controls" == p && (h += '<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play<\/button><\/div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"><\/div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute<\/button><\/div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"><\/div>' + g + "<\/div>"), u.data("videomarkup", h), u.append(h), (r && 1 == u.data("disablevideoonmobile") || t.isIE(8)) && u.find("video").remove(), u.find("video").each(function() {
                        var e = this,
                            n = jQuery(this),
                            r;
                        n.parent().hasClass("html5vid") || n.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"><\/div>'), r = n.parent(), 1 != r.data("metaloaded") && i(e, "loadedmetadata", function(n) {
                            s(n, f), t.resetVideo(n, f)
                        }(u))
                    });
                    break;
                case "youtube":
                    c = "http", "https:" === location.protocol && (c = "https"), "none" == p && (o = o.replace("controls=1", "controls=0"), -1 == o.toLowerCase().indexOf("controls") && (o += "&controls=0")), nt = n(u.data("videostartat")), tt = n(u.data("videoendat")), -1 != nt && (o = o + "&start=" + nt), -1 != tt && (o = o + "&end=" + tt), v = o.split("origin=" + c + "://"), a = "", v.length > 1 ? (a = v[0] + "origin=" + c + "://", self.location.href.match(/www/gi) && !v[1].match(/www/gi) && (a += "www."), a += v[1]) : a = o, rt = "true" === y || y === !0 ? "allowfullscreen" : "", u.data("videomarkup", '<iframe style="visible:hidden" src="' + c + "://www.youtube.com/embed/" + w + "?" + a + '" ' + rt + ' width="100%" height="100%" style="width:100%;height:100%"><\/iframe>');
                    break;
                case "vimeo":
                    "https:" === location.protocol && (c = "https"), u.data("videomarkup", '<iframe style="visible:hidden" src="' + c + "://player.vimeo.com/video/" + b + "?" + o + '" width="100%" height="100%" style="100%;height:100%"><\/iframe>')
            }
            ut = 1 != r && "on" != u.data("posterOnMobile") && "on" != u.data("posteronmobile") || r, void 0 != u.data("videoposter") && u.data("videoposter").length > 2 && ut ? (0 == u.find(".tp-videoposter").length && u.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url(' + u.data("videoposter") + '); background-size:cover;background-position:center center;"><\/div>'), 0 == u.find("iframe").length && u.find(".tp-videoposter").click(function() {
                if (t.playVideo(u, f), r) {
                    if (1 == u.data("disablevideoonmobile")) return !1;
                    punchgs.TweenLite.to(u.find(".tp-videoposter"), .3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    }), punchgs.TweenLite.to(u.find("iframe"), .3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    })
                }
            })) : 0 != u.find("iframe").length || "youtube" != l && "vimeo" != l || (u.append(u.data("videomarkup")), e(u, f, !1)), "none" != u.data("dottedoverlay") && void 0 != u.data("dottedoverlay") && 1 != u.find(".tp-dottedoverlay").length && u.append('<div class="tp-dottedoverlay ' + u.data("dottedoverlay") + '"><\/div>'), u.addClass("HasListener"), 1 == u.data("bgvideo") && punchgs.TweenLite.set(u.find("video, iframe"), {
                autoAlpha: 0
            })
        }
    });
    var i = function(n, t, i) {
            n.addEventListener ? n.addEventListener(t, i, !1) : n.attachEvent(t, i, !1)
        },
        u = function(n, t, i) {
            var r = {};
            return r.video = n, r.videotype = t, r.settings = i, r
        },
        e = function(i, e, s) {
            var w = i.find("iframe"),
                l = "iframe" + Math.round(1e5 * Math.random() + 1),
                a = i.data("videoloop"),
                d = "loopandnoslidestop" != a,
                v, y, p, h;
            if ((a = "loop" == a || "loopandnoslidestop" == a, 1 == i.data("forcecover")) && (i.removeClass("fullscreenvideo").addClass("coverscreenvideo"), v = i.data("aspectratio"), void 0 != v && v.split(":").length > 1 && t.prepareCoveredVideo(v, e, i)), w.attr("id", l), s && i.data("startvideonow", !0), 1 !== i.data("videolistenerexist")) switch (i.data("videotype")) {
                case "youtube":
                    y = new YT.Player(l, {
                        events: {
                            onStateChange: function(t) {
                                var l = t.target.getVideoEmbedCode(),
                                    s = jQuery("#" + l.split('id="')[1].split('"')[0]),
                                    h = s.closest(".tp-simpleresponsive"),
                                    i = s.parent(),
                                    r = s.parent().data("player"),
                                    c;
                                t.data == YT.PlayerState.PLAYING ? (punchgs.TweenLite.to(i.find(".tp-videoposter"), .3, {
                                    autoAlpha: 0,
                                    force3D: "auto",
                                    ease: punchgs.Power3.easeInOut
                                }), punchgs.TweenLite.to(i.find("iframe"), .3, {
                                    autoAlpha: 1,
                                    display: "block",
                                    ease: punchgs.Power3.easeInOut
                                }), "mute" == i.data("volume") ? r.mute() : (r.unMute(), r.setVolume(parseInt(i.data("volume"), 0) || 75)), e.videoplaying = !0, o(i, e), h.trigger("stoptimer"), e.c.trigger("revolution.slide.onvideoplay", u(r, "youtube", i.data()))) : (0 == t.data && a && (c = n(i.data("videostartat")), -1 != c && r.seekTo(c), r.playVideo()), (0 == t.data || 2 == t.data) && "on" == i.data("showcoveronpause") && i.find(".tp-videoposter").length > 0 && (punchgs.TweenLite.to(i.find(".tp-videoposter"), .3, {
                                    autoAlpha: 1,
                                    force3D: "auto",
                                    ease: punchgs.Power3.easeInOut
                                }), punchgs.TweenLite.to(i.find("iframe"), .3, {
                                    autoAlpha: 0,
                                    ease: punchgs.Power3.easeInOut
                                })), -1 != t.data && 3 != t.data && (e.videoplaying = !1, f(i, e), h.trigger("starttimer"), e.c.trigger("revolution.slide.onvideostop", u(r, "youtube", i.data()))), 0 == t.data && 1 == i.data("nextslideatend") ? (e.c.revnext(), f(i, e)) : (f(i, e), e.videoplaying = !1, h.trigger("starttimer"), e.c.trigger("revolution.slide.onvideostop", u(r, "youtube", i.data()))))
                            },
                            onReady: function(t) {
                                var e = t.target.getVideoEmbedCode(),
                                    o = jQuery("#" + e.split('id="')[1].split('"')[0]),
                                    i = o.parent(),
                                    f = i.data("videorate"),
                                    u;
                                i.data("videostart"), (i.addClass("rs-apiready"), void 0 != f && t.target.setPlaybackRate(parseFloat(f)), i.find(".tp-videoposter").unbind("click"), i.find(".tp-videoposter").click(function() {
                                    r || y.playVideo()
                                }), i.data("startvideonow")) && (i.data("player").playVideo(), u = n(i.data("videostartat")), -1 != u && i.data("player").seekTo(u)), i.data("videolistenerexist", 1)
                            }
                        }
                    }), i.data("player", y);
                    break;
                case "vimeo":
                    for (var b, c = w.attr("src"), k = {}, g = c, nt = /([^&=]+)=([^&]*)/g; b = nt.exec(g);) k[decodeURIComponent(b[1])] = decodeURIComponent(b[2]);
                    c = void 0 != k.player_id ? c.replace(k.player_id, l) : c + "&player_id=" + l;
                    try {
                        c = c.replace("api=0", "api=1")
                    } catch (tt) {}
                    c += "&api=1", w.attr("src", c), y = i.find("iframe")[0], h = (jQuery("#" + l), $f(l)), h.addEvent("ready", function() {
                        if (i.addClass("rs-apiready"), h.addEvent("play", function() {
                                i.data("nextslidecalled", 0), punchgs.TweenLite.to(i.find(".tp-videoposter"), .3, {
                                    autoAlpha: 0,
                                    force3D: "auto",
                                    ease: punchgs.Power3.easeInOut
                                }), punchgs.TweenLite.to(i.find("iframe"), .3, {
                                    autoAlpha: 1,
                                    display: "block",
                                    ease: punchgs.Power3.easeInOut
                                }), e.c.trigger("revolution.slide.onvideoplay", u(h, "vimeo", i.data())), e.videoplaying = !0, o(i, e), d && e.c.trigger("stoptimer"), "mute" == i.data("volume") ? h.api("setVolume", "0") : h.api("setVolume", parseInt(i.data("volume"), 0) / 100 || .75)
                            }), h.addEvent("playProgress", function(t) {
                                var r = n(i.data("videoendat")),
                                    u;
                                0 != r && Math.abs(r - t.seconds) < .3 && r > t.seconds && 1 != i.data("nextslidecalled") && (a ? (h.api("play"), u = n(i.data("videostartat")), -1 != u && h.api("seekTo", u)) : (1 == i.data("nextslideatend") && (i.data("nextslidecalled", 1), e.c.revnext()), h.api("pause")))
                            }), h.addEvent("finish", function() {
                                f(i, e), e.videoplaying = !1, e.c.trigger("starttimer"), e.c.trigger("revolution.slide.onvideostop", u(h, "vimeo", i.data())), 1 == i.data("nextslideatend") && e.c.revnext()
                            }), h.addEvent("pause", function() {
                                i.find(".tp-videoposter").length > 0 && "on" == i.data("showcoveronpause") && (punchgs.TweenLite.to(i.find(".tp-videoposter"), .3, {
                                    autoAlpha: 1,
                                    force3D: "auto",
                                    ease: punchgs.Power3.easeInOut
                                }), punchgs.TweenLite.to(i.find("iframe"), .3, {
                                    autoAlpha: 0,
                                    ease: punchgs.Power3.easeInOut
                                })), e.videoplaying = !1, f(i, e), e.c.trigger("starttimer"), e.c.trigger("revolution.slide.onvideostop", u(h, "vimeo", i.data()))
                            }), i.find(".tp-videoposter").unbind("click"), i.find(".tp-videoposter").click(function() {
                                if (!r) return h.api("play"), !1
                            }), i.data("startvideonow")) {
                            h.api("play");
                            var t = n(i.data("videostartat")); - 1 != t && h.api("seekTo", t)
                        }
                        i.data("videolistenerexist", 1)
                    })
            } else {
                p = n(i.data("videostartat"));
                switch (i.data("videotype")) {
                    case "youtube":
                        s && (i.data("player").playVideo(), -1 != p && i.data("player").seekTo());
                        break;
                    case "vimeo":
                        s && (h = $f(i.find("iframe").attr("id")), h.api("play"), -1 != p && h.api("seekTo", p))
                }
            }
        },
        s = function(e, s) {
            var p;
            if (r && 1 == e.data("disablevideoonmobile")) return !1;
            var a = e.find("video"),
                h = a[0],
                v = a.parent(),
                c = e.data("videoloop"),
                d = "loopandnoslidestop" != c;
            (c = "loop" == c || "loopandnoslidestop" == c, v.data("metaloaded", 1), void 0 == a.attr("control") && (0 != e.find(".tp-video-play-button").length || r || e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"><\/i><span class="tp-revstop">&nbsp;<\/span><\/div>'), e.find("video, .tp-poster, .tp-video-play-button").click(function() {
                e.hasClass("videoisplaying") ? h.pause() : h.play()
            })), 1 == e.data("forcecover") || e.hasClass("fullscreenvideo")) && (1 == e.data("forcecover") ? (v.addClass("fullcoveredvideo"), p = e.data("aspectratio"), t.prepareCoveredVideo(p, s, e)) : v.addClass("fullscreenvideo"));
            var w = e.find(".tp-vid-play-pause")[0],
                y = e.find(".tp-vid-mute")[0],
                b = e.find(".tp-vid-full-screen")[0],
                l = e.find(".tp-seek-bar")[0],
                k = e.find(".tp-volume-bar")[0];
            void 0 != w && (i(w, "click", function() {
                1 == h.paused ? h.play() : h.pause()
            }), i(y, "click", function() {
                0 == h.muted ? (h.muted = !0, y.innerHTML = "Unmute") : (h.muted = !1, y.innerHTML = "Mute")
            }), b && i(b, "click", function() {
                h.requestFullscreen ? h.requestFullscreen() : h.mozRequestFullScreen ? h.mozRequestFullScreen() : h.webkitRequestFullscreen && h.webkitRequestFullscreen()
            }), i(l, "change", function() {
                var n = h.duration * (l.value / 100);
                h.currentTime = n
            }), i(h, "timeupdate", function() {
                var u = 100 / h.duration * h.currentTime,
                    t = n(e.data("videoendat")),
                    r = h.currentTime,
                    i;
                (l.value = u, 0 != t && Math.abs(t - r) <= .3 && t > r && 1 != e.data("nextslidecalled")) && (c ? (h.play(), i = n(e.data("videostartat")), -1 != i && (h.currentTime = i)) : (1 == e.data("nextslideatend") && (e.data("nextslidecalled", 1), s.c.revnext()), h.pause()))
            }), i(l, "mousedown", function() {
                e.addClass("seekbardragged"), h.pause()
            }), i(l, "mouseup", function() {
                e.removeClass("seekbardragged"), h.play()
            }), i(k, "change", function() {
                h.volume = k.value
            })), i(h, "play", function() {
                e.data("nextslidecalled", 0), "mute" == e.data("volume") && (h.muted = !0), e.addClass("videoisplaying"), o(e, s), d ? (s.videoplaying = !0, s.c.trigger("stoptimer"), s.c.trigger("revolution.slide.onvideoplay", u(h, "html5", e.data()))) : (s.videoplaying = !1, s.c.trigger("starttimer"), s.c.trigger("revolution.slide.onvideostop", u(h, "html5", e.data()))), punchgs.TweenLite.to(e.find(".tp-videoposter"), .3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut
                }), punchgs.TweenLite.to(e.find("video"), .3, {
                    autoAlpha: 1,
                    display: "block",
                    ease: punchgs.Power3.easeInOut
                });
                var n = e.find(".tp-vid-play-pause")[0],
                    t = e.find(".tp-vid-mute")[0];
                void 0 != n && (n.innerHTML = "Pause"), void 0 != t && h.muted && (t.innerHTML = "Unmute")
            }), i(h, "pause", function() {
                e.find(".tp-videoposter").length > 0 && "on" == e.data("showcoveronpause") && !e.hasClass("seekbardragged") && (punchgs.TweenLite.to(e.find(".tp-videoposter"), .3, {
                    autoAlpha: 1,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut
                }), punchgs.TweenLite.to(e.find("video"), .3, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut
                })), e.removeClass("videoisplaying"), s.videoplaying = !1, f(e, s), s.c.trigger("starttimer"), s.c.trigger("revolution.slide.onvideostop", u(h, "html5", e.data()));
                var n = e.find(".tp-vid-play-pause")[0];
                void 0 != n && (n.innerHTML = "Play")
            }), i(h, "ended", function() {
                f(e, s), s.videoplaying = !1, f(e, s), s.c.trigger("starttimer"), s.c.trigger("revolution.slide.onvideostop", u(h, "html5", e.data())), 1 == e.data("nextslideatend") && s.c.revnext(), e.removeClass("videoisplaying")
            })
        },
        o = function(n, i) {
            void 0 == i.playingvideos && (i.playingvideos = []), n.data("stopallvideos") && void 0 != i.playingvideos && i.playingvideos.length > 0 && (i.lastplayedvideos = jQuery.extend(!0, [], i.playingvideos), jQuery.each(i.playingvideos, function(n, r) {
                t.stopVideo(r, i)
            })), i.playingvideos.push(n)
        },
        f = function(n, t) {
            void 0 != t.playingvideos && t.playingvideos.splice(jQuery.inArray(n, t.playingvideos), 1)
        }
}(jQuery), ! function() {
    var t = jQuery.fn.revolution,
        i, r;
    jQuery.extend(!0, t, {
        checkActions: function(n, t, r) {
            i(n, t, r)
        }
    }), i = function(n, i, u) {
        u && jQuery.each(u, function(u, f) {
            switch (f.delay = parseInt(f.delay, 0) / 1e3, n.addClass("noSwipe"), n.on(f.event, function() {
                var u = jQuery("#" + f.layer),
                    e;
                if ("stoplayer" == f.action || "togglelayer" == f.action || "startlayer" == f.action) {
                    if (u.length > 0)
                        if ("startlayer" == f.action || "togglelayer" == f.action && "in" != u.data("animdirection")) {
                            u.data("animdirection", "in");
                            var o = u.data("timeline_out"),
                                s = "carousel" === i.sliderType ? 0 : i.width / 2 - i.gridwidth[i.curWinRange] * i.bw / 2,
                                h = 0;
                            void 0 != o && o.pause(0).kill(), t.animateSingleCaption && t.animateSingleCaption(u, i, s, h, 0, !1, !0), e = u.data("timeline"), u.data("triggerstate", "on"), punchgs.TweenLite.delayedCall(f.delay, function() {
                                e.play(0)
                            }, [e])
                        } else("stoplayer" == f.action || "togglelayer" == f.action && "out" != u.data("animdirection")) && (u.data("animdirection", "out"), u.data("triggered", !0), u.data("triggerstate", "off"), t.stopVideo && t.stopVideo(u, i), t.endMoveCaption && punchgs.TweenLite.delayedCall(f.delay, t.endMoveCaption, [u, null, null, i]))
                } else punchgs.TweenLite.delayedCall(f.delay, function() {
                    var off, aof, ts, paw, gf;
                    switch (f.action) {
                        case "scrollbelow":
                            n.addClass("tp-scrollbelowslider"), n.data("scrolloffset", f.offset), n.data("scrolldelay", f.delay), off = r(i.fullScreenOffsetContainer) || 0, aof = parseInt(f.offset, 0) || 0, off = off - aof || 0, jQuery("body,html").animate({
                                scrollTop: i.c.offset().top + jQuery(i.li[0]).height() - off + "px"
                            }, {
                                duration: 400
                            });
                            break;
                        case "callback":
                            eval(f.callback);
                            break;
                        case "jumptoslide":
                            switch (f.slide.toLowerCase()) {
                                case "+1":
                                case "next":
                                    i.sc_indicator = "arrow", t.callingNewSlide(i, i.c, 1);
                                    break;
                                case "previous":
                                case "prev":
                                case "-1":
                                    i.sc_indicator = "arrow", t.callingNewSlide(i, i.c, -1);
                                    break;
                                default:
                                    ts = jQuery.isNumeric(f.slide) ? parseInt(f.slide, 0) : f.slide, t.callingNewSlide(i, i.c, ts)
                            }
                            break;
                        case "simplelink":
                            window.open(f.url, f.target);
                            break;
                        case "toggleslider":
                            i.noloopanymore = 0, "playing" == i.sliderstatus ? i.c.revpause() : i.c.revresume();
                            break;
                        case "pauseslider":
                            i.c.revpause();
                            break;
                        case "playslider":
                            i.noloopanymore = 0, i.c.revresume();
                            break;
                        case "playvideo":
                            u.length > 0 && t.playVideo(u, i);
                            break;
                        case "stopvideo":
                            u.length > 0 && t.stopVideo && t.stopVideo(u, i);
                            break;
                        case "togglevideo":
                            u.length > 0 && (t.isVideoPlaying(u, i) ? t.stopVideo && t.stopVideo(u, i) : t.playVideo(u, i));
                            break;
                        case "simulateclick":
                            u.length > 0 && u.click();
                            break;
                        case "toggleclass":
                            u.length > 0 && (u.hasClass(f.classname) ? u.removeClass(f.classname) : u.addClass(f.classname));
                            break;
                        case "gofullscreen":
                        case "exitfullscreen":
                        case "togglefullscreen":
                            jQuery("#rs-go-fullscreen").length > 0 && ("togglefullscreen" == f.action || "exitfullscreen" == f.action) ? (jQuery("#rs-go-fullscreen").appendTo(jQuery("#rs-was-here")), paw = i.c.closest(i.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? ".forcefullwidth_wrapper_tp_banner" : ".rev_slider_wrapper"), paw.unwrap(), paw.unwrap(), i.minHeight = i.oldminheight, i.infullscreenmode = !1, i.c.revredraw(), void 0 != i.playingvideos && i.playingvideos.length > 0 && jQuery.each(i.playingvideos, function(n, r) {
                                t.playVideo(r, i)
                            })) : 0 == jQuery("#rs-go-fullscreen").length && ("togglefullscreen" == f.action || "gofullscreen" == f.action) && (paw = i.c.closest(i.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? ".forcefullwidth_wrapper_tp_banner" : ".rev_slider_wrapper"), paw.wrap('<div id="rs-was-here"><div id="rs-go-fullscreen"><\/div><\/div>'), gf = jQuery("#rs-go-fullscreen"), gf.appendTo(jQuery("body")), gf.css({
                                position: "fixed",
                                width: "100%",
                                height: "100%",
                                top: "0px",
                                left: "0px",
                                zIndex: "9999999",
                                background: "#ffffff"
                            }), i.oldminheight = i.minHeight, i.minHeight = jQuery(window).height(), i.infullscreenmode = !0, i.c.revredraw(), void 0 != i.playingvideos && i.playingvideos.length > 0 && jQuery.each(i.playingvideos, function(n, r) {
                                t.playVideo(r, i)
                            }))
                    }
                }, [u, i, f, n])
            }), f.action) {
                case "togglelayer":
                case "startlayer":
                case "playlayer":
                case "stoplayer":
                    var e = jQuery("#" + f.layer);
                    "bytrigger" != e.data("start") && (e.data("triggerstate", "on"), e.data("animdirection", "in"))
            }
        })
    }, r = function(n) {
        if (void 0 == n) return 0;
        if (n.split(",").length > 1) {
            oc = n.split(",");
            var t = 0;
            return oc && jQuery.each(oc, function(n, i) {
                jQuery(i).length > 0 && (t += jQuery(i).outerHeight(!0))
            }), t
        }
        return jQuery(n).height()
    }
}(jQuery), ! function() {
    var n = jQuery.fn.revolution;
    jQuery.extend(!0, n, {
        stopKenBurn: function(n) {
            void 0 != n.data("kbtl") && n.data("kbtl").pause()
        },
        startKenBurn: function(n, t, i) {
            var r = n.data(),
                e = n.find(".defaultimg"),
                h = e.data("lazyload") || e.data("src"),
                c = (r.owidth / r.oheight, "carousel" === t.sliderType ? t.carousel.slide_width : t.ul.width()),
                l = t.ul.height();
            n.data("kbtl") && n.data("kbtl").kill(), i = i || 0, 0 == n.find(".tp-kbimg").length && (n.append('<div class="tp-kbimg-wrap" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="' + h + '" style="position:absolute;" width="' + r.owidth + '" height="' + r.oheight + '"><\/div>'), n.data("kenburn", n.find(".tp-kbimg")));
            var o = function(n, t, i, r, u, f, e) {
                    var s = n * i,
                        h = t * i,
                        c = Math.abs(r - s),
                        l = Math.abs(u - h),
                        o = {};
                    return o.l = (0 - f) * c, o.r = o.l + s, o.t = (0 - e) * l, o.b = o.t + h, o.h = f, o.v = e, o
                },
                a = function(n, t, i, r, u) {
                    var f = n.bgposition.split(" ") || "center center",
                        e = "center" == f[0] ? "50%" : "left" == f[0] || "left" == f[1] ? "0%" : "right" == f[0] || "right" == f[1] ? "100%" : f[0],
                        s = "center" == f[1] ? "50%" : "top" == f[0] || "top" == f[1] ? "0%" : "bottom" == f[0] || "bottom" == f[1] ? "100%" : f[1],
                        h;
                    return e = parseInt(e, 0) / 100 || 0, s = parseInt(s, 0) / 100 || 0, h = {}, h.start = o(u.start.width, u.start.height, u.start.scale, t, i, e, s), h.end = o(u.start.width, u.start.height, u.end.scale, t, i, e, s), h
                },
                v = function(n, t, i) {
                    var o = i.scalestart / 100,
                        s = i.scaleend / 100,
                        u = void 0 != i.oofsetstart ? i.offsetstart.split(" ") || [0, 0] : [0, 0],
                        f = void 0 != i.offsetend ? i.offsetend.split(" ") || [0, 0] : [0, 0],
                        h, e;
                    i.bgposition = "center center" == i.bgposition ? "50% 50%" : i.bgposition;
                    var r = {},
                        p = n * o,
                        w = (p / i.owidth * i.oheight, n * s);
                    w / i.owidth * i.oheight, (r.start = {}, r.starto = {}, r.end = {}, r.endo = {}, r.start.width = n, r.start.height = r.start.width / i.owidth * i.oheight, r.start.height < t) && (h = t / r.start.height, r.start.height = t, r.start.width = r.start.width * h), r.start.transformOrigin = i.bgposition, r.start.scale = o, r.end.scale = s, r.start.rotation = i.rotatestart + "deg", r.end.rotation = i.rotateend + "deg", e = a(i, n, t, u, r), u[0] = parseFloat(u[0]) + e.start.l, f[0] = parseFloat(f[0]) + e.end.l, u[1] = parseFloat(u[1]) + e.start.t, f[1] = parseFloat(f[1]) + e.end.t;
                    var c = e.start.r - e.start.l,
                        l = e.start.b - e.start.t,
                        v = e.end.r - e.end.l,
                        y = e.end.b - e.end.t;
                    return u[0] = u[0] > 0 ? 0 : c + u[0] < n ? n - c : u[0], f[0] = f[0] > 0 ? 0 : v + f[0] < n ? n - v : f[0], u[1] = u[1] > 0 ? 0 : l + u[1] < t ? t - l : u[1], f[1] = f[1] > 0 ? 0 : y + f[1] < t ? t - y : f[1], r.starto.x = u[0] + "px", r.starto.y = u[1] + "px", r.endo.x = f[0] + "px", r.endo.y = f[1] + "px", r.end.ease = r.endo.ease = i.ease, r.end.force3D = r.endo.force3D = !0, r
                };
            void 0 != n.data("kbtl") && (n.data("kbtl").kill(), n.removeData("kbtl"));
            var s = n.data("kenburn"),
                y = s.parent(),
                u = v(c, l, r),
                f = new punchgs.TimelineLite;
            f.pause(), u.start.transformOrigin = "0% 0%", u.starto.transformOrigin = "0% 0%", f.add(punchgs.TweenLite.fromTo(s, r.duration / 1e3, u.start, u.end), 0), f.add(punchgs.TweenLite.fromTo(y, r.duration / 1e3, u.starto, u.endo), 0), f.progress(i), f.play(), n.data("kbtl", f)
        }
    })
}(jQuery), ! function() {
    var i = jQuery.fn.revolution,
        n, t;
    jQuery.extend(!0, i, {
        migration: function(i, r) {
            return r = n(r), t(i, r), r
        }
    }), n = function(n) {
        var u, f, r, i, t;
        return (n.parallaxLevels || n.parallaxBgFreeze) && (u = {}, u.type = n.parallax, u.levels = n.parallaxLevels, u.bgparallax = "on" == n.parallaxBgFreeze ? "off" : "on", u.disable_onmobile = n.parallaxDisableOnMobile, n.parallax = u), (void 0 === n.disableProgressBar && (n.disableProgressBar = n.hideTimerBar || "off"), (n.startwidth || n.startheight) && (n.gridwidth = n.startwidth, n.gridheight = n.startheight), void 0 === n.sliderType && (n.sliderType = "standard"), "on" === n.fullScreen && (n.sliderLayout = "fullscreen"), "on" === n.fullWidth && (n.sliderLayout = "fullwidth"), void 0 === n.sliderLayout && (n.sliderLayout = "auto"), void 0 === n.navigation) && (f = {}, ("solo" == n.navigationArrows || "nextto" == n.navigationArrows) && (r = {}, r.enable = !0, r.style = n.navigationStyle || "", r.hide_onmobile = "on" === n.hideArrowsOnMobile ? !0 : !1, r.hide_onleave = n.hideThumbs > 0 ? !0 : !1, r.hide_delay = n.hideThumbs > 0 ? n.hideThumbs : 200, r.hide_delay_mobile = n.hideNavDelayOnMobile || 1500, r.hide_under = 0, r.tmp = "", r.left = {
            h_align: n.soloArrowLeftHalign,
            v_align: n.soloArrowLeftValign,
            h_offset: n.soloArrowLeftHOffset,
            v_offset: n.soloArrowLeftVOffset
        }, r.right = {
            h_align: n.soloArrowRightHalign,
            v_align: n.soloArrowRightValign,
            h_offset: n.soloArrowRightHOffset,
            v_offset: n.soloArrowRightVOffset
        }, f.arrows = r), "bullet" == n.navigationType && (i = {}, i.style = n.navigationStyle || "", i.enable = !0, i.hide_onmobile = "on" === n.hideArrowsOnMobile ? !0 : !1, i.hide_onleave = n.hideThumbs > 0 ? !0 : !1, i.hide_delay = n.hideThumbs > 0 ? n.hideThumbs : 200, i.hide_delay_mobile = n.hideNavDelayOnMobile || 1500, i.hide_under = 0, i.direction = "horizontal", i.h_align = n.navigationHAlign || "center", i.v_align = n.navigationVAlign || "bottom", i.space = 5, i.h_offset = n.navigationHOffset || 0, i.v_offset = n.navigationVOffset || 20, i.tmp = '<span class="tp-bullet-image"><\/span><span class="tp-bullet-title"><\/span>', f.bullets = i), "thumb" == n.navigationType && (t = {}, t.style = n.navigationStyle || "", t.enable = !0, t.width = n.thumbWidth || 100, t.height = n.thumbHeight || 50, t.min_width = n.thumbWidth || 100, t.wrapper_padding = 2, t.wrapper_color = "#f5f5f5", t.wrapper_opacity = 1, t.visibleAmount = n.thumbAmount || 3, t.hide_onmobile = "on" === n.hideArrowsOnMobile ? !0 : !1, t.hide_onleave = n.hideThumbs > 0 ? !0 : !1, t.hide_delay = n.hideThumbs > 0 ? n.hideThumbs : 200, t.hide_delay_mobile = n.hideNavDelayOnMobile || 1500, t.hide_under = 0, t.direction = "horizontal", t.span = !1, t.position = "inner", t.space = 2, t.h_align = n.navigationHAlign || "center", t.v_align = n.navigationVAlign || "bottom", t.h_offset = n.navigationHOffset || 0, t.v_offset = n.navigationVOffset || 20, t.tmp = '<span class="tp-thumb-image"><\/span><span class="tp-thumb-title"><\/span>', f.thumbnails = t), n.navigation = f, n.navigation.keyboardNavigation = n.keyboardNavigation || "on", n.navigation.onHoverStop = n.onHoverStop || "on", n.navigation.touch = {
            touchenabled: n.touchenabled || "on",
            swipe_treshold: n.swipe_treshold || 75,
            swipe_min_touches: n.swipe_min_touches || 1,
            drag_block_vertical: n.drag_block_vertical || !1
        }), n.fallbacks = {
            isJoomla: n.isJoomla || !1,
            panZoomDisableOnMobile: n.parallaxDisableOnMobile || "off",
            simplifyAll: n.simplifyAll || "on",
            nextSlideOnWindowFocus: n.nextSlideOnWindowFocus || "off",
            disableFocusListener: n.disableFocusListener || !0
        }, n
    }, t = function(n) {
        var t = {},
            i = n.width(),
            r = n.height();
        t.skewfromleftshort = "x:-50;skX:85;o:0", t.skewfromrightshort = "x:50;skX:-85;o:0", t.sfl = "x:-50;o:0", t.sfr = "x:50;o:0", t.sft = "y:-50;o:0", t.sfb = "y:50;o:0", t.skewfromleft = "x:top;skX:85;o:0", t.skewfromright = "x:bottom;skX:-85;o:0", t.lfl = "x:top;o:0", t.lfr = "x:bottom;o:0", t.lft = "y:left;o:0", t.lfb = "y:right;o:0", t.fade = "o:0", 720 * Math.random() - 360, n.find(".tp-caption").each(function() {
            var n = jQuery(this),
                u = (2 * Math.random() * i - i, 2 * Math.random() * r - r, 3 * Math.random(), 720 * Math.random() - 360, 70 * Math.random() - 35, 70 * Math.random() - 35, n.attr("class"));
            t.randomrotate = "x:{-400,400};y:{-400,400};sX:{0,2};sY:{0,2};rZ:{-180,180};rX:{-180,180};rY:{-180,180};o:0;", u.match("randomrotate") ? n.data("transform_in", t.randomrotate) : u.match(/\blfl\b/) ? n.data("transform_in", t.lfl) : u.match(/\blfr\b/) ? n.data("transform_in", t.lfr) : u.match(/\blft\b/) ? n.data("transform_in", t.lft) : u.match(/\blfb\b/) ? n.data("transform_in", t.lfb) : u.match(/\bsfl\b/) ? n.data("transform_in", t.sfl) : u.match(/\bsfr\b/) ? n.data("transform_in", t.sfr) : u.match(/\bsft\b/) ? n.data("transform_in", t.sft) : u.match(/\bsfb\b/) ? n.data("transform_in", t.sfb) : u.match(/\bskewfromleftshort\b/) ? n.data("transform_in", t.skewfromleftshort) : u.match(/\bskewfromrightshort\b/) ? n.data("transform_in", t.skewfromrightshort) : u.match(/\bskewfromleft\b/) ? n.data("transform_in", t.skewfromleft) : u.match(/\bskewfromright\b/) ? n.data("transform_in", t.skewfromright) : u.match(/\bfade\b/) && n.data("transform_in", t.fade), u.match(/\brandomrotateout\b/) ? n.data("transform_out", t.randomrotate) : u.match(/\bltl\b/) ? n.data("transform_out", t.lfl) : u.match(/\bltr\b/) ? n.data("transform_out", t.lfr) : u.match(/\bltt\b/) ? n.data("transform_out", t.lft) : u.match(/\bltb\b/) ? n.data("transform_out", t.lfb) : u.match(/\bstl\b/) ? n.data("transform_out", t.sfl) : u.match(/\bstr\b/) ? n.data("transform_out", t.sfr) : u.match(/\bstt\b/) ? n.data("transform_out", t.sft) : u.match(/\bstb\b/) ? n.data("transform_out", t.sfb) : u.match(/\bskewtoleftshortout\b/) ? n.data("transform_out", t.skewfromleftshort) : u.match(/\bskewtorightshortout\b/) ? n.data("transform_out", t.skewfromrightshort) : u.match(/\bskewtoleftout\b/) ? n.data("transform_out", t.skewfromleft) : u.match(/\bskewtorightout\b/) ? n.data("transform_out", t.skewfromright) : u.match(/\bfadeout\b/) && n.data("transform_out", t.fade), void 0 != n.data("customin") && n.data("transform_in", n.data("customin")), void 0 != n.data("customout") && n.data("transform_out", n.data("customout"))
        })
    }
}(jQuery)