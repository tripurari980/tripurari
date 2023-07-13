function setmetatagurl() {
    $('meta[property="og:url"]').attr("content", window.location.href)
}
if (! function(n, t) {
        function i(t, i) {
            var u, f, e, o = t.nodeName.toLowerCase();
            return "area" === o ? (u = t.parentNode, f = u.name, t.href && f && "map" === u.nodeName.toLowerCase() ? (e = n("img[usemap=#" + f + "]")[0], !!e && r(e)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && r(t)
        }

        function r(t) {
            return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function() {
                return "hidden" === n.css(this, "visibility")
            }).length
        }
        var u = 0,
            f = /^ui-id-\d+$/;
        n.ui = n.ui || {}, n.extend(n.ui, {
            version: "1.10.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), n.fn.extend({
            focus: function(t) {
                return function(i, r) {
                    return "number" == typeof i ? this.each(function() {
                        var t = this;
                        setTimeout(function() {
                            n(t).focus(), r && r.call(t)
                        }, i)
                    }) : t.apply(this, arguments)
                }
            }(n.fn.focus),
            scrollParent: function() {
                var t;
                return t = n.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(n.css(this, "position")) && /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? n(document) : t
            },
            zIndex: function(i) {
                if (i !== t) return this.css("zIndex", i);
                if (this.length)
                    for (var u, f, r = n(this[0]); r.length && r[0] !== document;) {
                        if (u = r.css("position"), ("absolute" === u || "relative" === u || "fixed" === u) && (f = parseInt(r.css("zIndex"), 10), !isNaN(f) && 0 !== f)) return f;
                        r = r.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++u)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    f.test(this.id) && n(this).removeAttr("id")
                })
            }
        }), n.extend(n.expr[":"], {
            data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
                return function(i) {
                    return !!n.data(i, t)
                }
            }) : function(t, i, r) {
                return !!n.data(t, r[3])
            },
            focusable: function(t) {
                return i(t, !isNaN(n.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var r = n.attr(t, "tabindex"),
                    u = isNaN(r);
                return (u || r >= 0) && i(t, !u)
            }
        }), n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function(i, r) {
            function u(t, i, r, u) {
                return n.each(o, function() {
                    i -= parseFloat(n.css(t, "padding" + this)) || 0, r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0), u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
                }), i
            }
            var o = "Width" === r ? ["Left", "Right"] : ["Top", "Bottom"],
                f = r.toLowerCase(),
                e = {
                    innerWidth: n.fn.innerWidth,
                    innerHeight: n.fn.innerHeight,
                    outerWidth: n.fn.outerWidth,
                    outerHeight: n.fn.outerHeight
                };
            n.fn["inner" + r] = function(i) {
                return i === t ? e["inner" + r].call(this) : this.each(function() {
                    n(this).css(f, u(this, i) + "px")
                })
            }, n.fn["outer" + r] = function(t, i) {
                return "number" != typeof t ? e["outer" + r].call(this, t) : this.each(function() {
                    n(this).css(f, u(this, t, !0, i) + "px")
                })
            }
        }), n.fn.addBack || (n.fn.addBack = function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }), n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function(t) {
            return function(i) {
                return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this)
            }
        }(n.fn.removeData)), n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), n.support.selectstart = "onselectstart" in document.createElement("div"), n.fn.extend({
            disableSelection: function() {
                return this.bind((n.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(n) {
                    n.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), n.extend(n.ui, {
            plugin: {
                add: function(t, i, r) {
                    var u, f = n.ui[t].prototype;
                    for (u in r) f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]])
                },
                call: function(n, t, i) {
                    var r, u = n.plugins[t];
                    if (u && n.element[0].parentNode && 11 !== n.element[0].parentNode.nodeType)
                        for (r = 0; u.length > r; r++) n.options[u[r][0]] && u[r][1].apply(n.element, i)
                }
            },
            hasScroll: function(t, i) {
                if ("hidden" === n(t).css("overflow")) return !1;
                var r = i && "left" === i ? "scrollLeft" : "scrollTop",
                    u = !1;
                return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u)
            }
        })
    }(jQuery), function(n, t) {
        var r = 0,
            i = Array.prototype.slice,
            u = n.cleanData;
        n.cleanData = function(t) {
            for (var i, r = 0; null != (i = t[r]); r++) try {
                n(i).triggerHandler("remove")
            } catch (f) {}
            u(t)
        }, n.widget = function(i, r, u) {
            var h, e, f, s, c = {},
                o = i.split(".")[0];
            i = i.split(".")[1], h = o + "-" + i, u || (u = r, r = n.Widget), n.expr[":"][h.toLowerCase()] = function(t) {
                return !!n.data(t, h)
            }, n[o] = n[o] || {}, e = n[o][i], f = n[o][i] = function(n, i) {
                return this._createWidget ? (arguments.length && this._createWidget(n, i), t) : new f(n, i)
            }, n.extend(f, e, {
                version: u.version,
                _proto: n.extend({}, u),
                _childConstructors: []
            }), s = new r, s.options = n.widget.extend({}, s.options), n.each(u, function(i, u) {
                return n.isFunction(u) ? (c[i] = function() {
                    var n = function() {
                            return r.prototype[i].apply(this, arguments)
                        },
                        t = function(n) {
                            return r.prototype[i].apply(this, n)
                        };
                    return function() {
                        var i, r = this._super,
                            f = this._superApply;
                        return this._super = n, this._superApply = t, i = u.apply(this, arguments), this._super = r, this._superApply = f, i
                    }
                }(), t) : (c[i] = u, t)
            }), f.prototype = n.widget.extend(s, {
                widgetEventPrefix: e ? s.widgetEventPrefix || i : i
            }, c, {
                constructor: f,
                namespace: o,
                widgetName: i,
                widgetFullName: h
            }), e ? (n.each(e._childConstructors, function(t, i) {
                var r = i.prototype;
                n.widget(r.namespace + "." + r.widgetName, f, i._proto)
            }), delete e._childConstructors) : r._childConstructors.push(f), n.widget.bridge(i, f)
        }, n.widget.extend = function(r) {
            for (var u, f, o = i.call(arguments, 1), e = 0, s = o.length; s > e; e++)
                for (u in o[e]) f = o[e][u], o[e].hasOwnProperty(u) && f !== t && (r[u] = n.isPlainObject(f) ? n.isPlainObject(r[u]) ? n.widget.extend({}, r[u], f) : n.widget.extend({}, f) : f);
            return r
        }, n.widget.bridge = function(r, u) {
            var f = u.prototype.widgetFullName || r;
            n.fn[r] = function(e) {
                var h = "string" == typeof e,
                    o = i.call(arguments, 1),
                    s = this;
                return e = !h && o.length ? n.widget.extend.apply(null, [e].concat(o)) : e, h ? this.each(function() {
                    var i, u = n.data(this, f);
                    return u ? n.isFunction(u[e]) && "_" !== e.charAt(0) ? (i = u[e].apply(u, o), i !== u && i !== t ? (s = i && i.jquery ? s.pushStack(i.get()) : i, !1) : t) : n.error("no such method '" + e + "' for " + r + " widget instance") : n.error("cannot call methods on " + r + " prior to initialization; attempted to call method '" + e + "'")
                }) : this.each(function() {
                    var t = n.data(this, f);
                    t ? t.option(e || {})._init() : n.data(this, f, new u(e, this))
                }), s
            }
        }, n.Widget = function() {}, n.Widget._childConstructors = [], n.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(t, i) {
                i = n(i || this.defaultElement || this)[0], this.element = n(i), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = n(), this.hoverable = n(), this.focusable = n(), i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(n) {
                        n.target === i && this.destroy()
                    }
                }), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: n.noop,
            _getCreateEventData: n.noop,
            _create: n.noop,
            _init: n.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: n.noop,
            widget: function() {
                return this.element
            },
            option: function(i, r) {
                var u, f, e, o = i;
                if (0 === arguments.length) return n.widget.extend({}, this.options);
                if ("string" == typeof i)
                    if (o = {}, u = i.split("."), i = u.shift(), u.length) {
                        for (f = o[i] = n.widget.extend({}, this.options[i]), e = 0; u.length - 1 > e; e++) f[u[e]] = f[u[e]] || {}, f = f[u[e]];
                        if (i = u.pop(), 1 === arguments.length) return f[i] === t ? null : f[i];
                        f[i] = r
                    } else {
                        if (1 === arguments.length) return this.options[i] === t ? null : this.options[i];
                        o[i] = r
                    }
                return this._setOptions(o), this
            },
            _setOptions: function(n) {
                var t;
                for (t in n) this._setOption(t, n[t]);
                return this
            },
            _setOption: function(n, t) {
                return this.options[n] = t, "disabled" === n && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(i, r, u) {
                var e, f = this;
                "boolean" != typeof i && (u = r, r = i, i = !1), u ? (r = e = n(r), this.bindings = this.bindings.add(r)) : (u = r, r = this.element, e = this.widget()), n.each(u, function(u, o) {
                    function s() {
                        return i || f.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? f[o] : o).apply(f, arguments) : t
                    }
                    "string" != typeof o && (s.guid = o.guid = o.guid || s.guid || n.guid++);
                    var h = u.match(/^(\w+)\s*(.*)$/),
                        c = h[1] + f.eventNamespace,
                        l = h[2];
                    l ? e.delegate(l, c, s) : r.bind(c, s)
                })
            },
            _off: function(n, t) {
                t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, n.unbind(t).undelegate(t)
            },
            _delay: function(n, t) {
                function r() {
                    return ("string" == typeof n ? i[n] : n).apply(i, arguments)
                }
                var i = this;
                return setTimeout(r, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        n(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(t) {
                        n(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        n(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(t) {
                        n(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(t, i, r) {
                var u, f, e = this.options[t];
                if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent)
                    for (u in f) u in i || (i[u] = f[u]);
                return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
            }
        }, n.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, i) {
            n.Widget.prototype["_" + t] = function(r, u, f) {
                "string" == typeof u && (u = {
                    effect: u
                });
                var o, e = u ? u === !0 || "number" == typeof u ? i : u.effect || i : t;
                u = u || {}, "number" == typeof u && (u = {
                    duration: u
                }), o = !n.isEmptyObject(u), u.complete = f, u.delay && r.delay(u.delay), o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
                    n(this)[t](), f && f.call(r[0]), i()
                })
            }
        })
    }(jQuery), function(n) {
        var t = !1;
        n(document).mouseup(function() {
            t = !1
        }), n.widget("ui.mouse", {
            version: "1.10.4",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(n) {
                    return t._mouseDown(n)
                }).bind("click." + this.widgetName, function(i) {
                    if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent")) return n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(i) {
                if (!t) {
                    this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                    var r = this,
                        u = 1 === i.which,
                        f = "string" == typeof this.options.cancel && i.target.nodeName ? n(i.target).closest(this.options.cancel).length : !1;
                    return u && !f && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        r.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === n.data(i.target, this.widgetName + ".preventClickEvent") && n.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(n) {
                        return r._mouseMove(n)
                    }, this._mouseUpDelegate = function(n) {
                        return r._mouseUp(n)
                    }, n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
                }
            },
            _mouseMove: function(t) {
                return n.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
            },
            _mouseDistanceMet: function(n) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    }(jQuery), function(n) {
        n.widget("ui.draggable", n.ui.mouse, {
            version: "1.10.4",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            _destroy: function() {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
            },
            _mouseCapture: function(t) {
                var i = this.options;
                return this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (n(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                    n("<div class='ui-draggable-iframeFix' style='background: #fff;'><\/div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(n(this).offset()).appendTo("body")
                }), !0) : !1)
            },
            _mouseStart: function(t) {
                var i = this.options;
                return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, this.offset.scroll = !1, n.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0)
            },
            _mouseDrag: function(t, i) {
                if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var r = this._uiHash();
                    if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                    this.position = r.position
                }
                return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var r = this,
                    i = !1;
                return n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "original" !== this.options.helper || n.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    r._trigger("stop", t) !== !1 && r._clear()
                }) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
            },
            _mouseUp: function(t) {
                return n("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                }), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), n.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(t) {
                return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _createHelper: function(t) {
                var r = this.options,
                    i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t])) : "clone" === r.helper ? this.element.clone().removeAttr("id") : this.element;
                return i.parents("body").length || i.appendTo("parent" === r.appendTo ? this.element[0].parentNode : r.appendTo), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), n.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && n.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var n = this.element.position();
                    return {
                        top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var u, t, i, r = this.options;
                return r.containment ? "window" === r.containment ? void(this.containment = [n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, n(window).scrollLeft() + n(window).width() - this.helperProportions.width - this.margins.left, n(window).scrollTop() + (n(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === r.containment ? void(this.containment = [0, 0, n(document).width() - this.helperProportions.width - this.margins.left, (n(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : r.containment.constructor === Array ? void(this.containment = r.containment) : ("parent" === r.containment && (r.containment = this.helper[0].parentNode), t = n(r.containment), i = t[0], void(i && (u = "hidden" !== t.css("overflow"), this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (u ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (u ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = t))) : void(this.containment = null)
            },
            _convertPositionTo: function(t, i) {
                i || (i = this.position);
                var r = "absolute" === t ? 1 : -1,
                    u = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
                return this.offset.scroll || (this.offset.scroll = {
                    top: u.scrollTop(),
                    left: u.scrollLeft()
                }), {
                    top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * r,
                    left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * r
                }
            },
            _generatePosition: function(t) {
                var i, e, u, f, r = this.options,
                    h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    o = t.pageX,
                    s = t.pageY;
                return this.offset.scroll || (this.offset.scroll = {
                    top: h.scrollTop(),
                    left: h.scrollLeft()
                }), this.originalPosition && (this.containment && (this.relative_container ? (e = this.relative_container.offset(), i = [this.containment[0] + e.left, this.containment[1] + e.top, this.containment[2] + e.left, this.containment[3] + e.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (o = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (s = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (o = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (s = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, s = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u, f = r.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, o = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f)), {
                    top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
            },
            _trigger: function(t, i, r) {
                return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), n.Widget.prototype._trigger.call(this, t, i, r)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), n.ui.plugin.add("draggable", "connectToSortable", {
            start: function(t, i) {
                var r = n(this).data("ui-draggable"),
                    u = r.options,
                    f = n.extend({}, i, {
                        item: r.element
                    });
                r.sortables = [], n(u.connectToSortable).each(function() {
                    var i = n.data(this, "ui-sortable");
                    i && !i.options.disabled && (r.sortables.push({
                        instance: i,
                        shouldRevert: i.options.revert
                    }), i.refreshPositions(), i._trigger("activate", t, f))
                })
            },
            stop: function(t, i) {
                var r = n(this).data("ui-draggable"),
                    u = n.extend({}, i, {
                        item: r.element
                    });
                n.each(r.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === r.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, u))
                })
            },
            drag: function(t, i) {
                var r = n(this).data("ui-draggable"),
                    u = this;
                n.each(r.sortables, function() {
                    var f = !1,
                        e = this;
                    this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (f = !0, n.each(r.sortables, function() {
                        return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== e && this.instance._intersectsWith(this.instance.containerCache) && n.contains(e.instance.element[0], this.instance.element[0]) && (f = !1), f
                    })), f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = n(u).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                        return i.helper[0]
                    }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
                })
            }
        }), n.ui.plugin.add("draggable", "cursor", {
            start: function() {
                var t = n("body"),
                    i = n(this).data("ui-draggable").options;
                t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
            },
            stop: function() {
                var t = n(this).data("ui-draggable").options;
                t._cursor && n("body").css("cursor", t._cursor)
            }
        }), n.ui.plugin.add("draggable", "opacity", {
            start: function(t, i) {
                var r = n(i.helper),
                    u = n(this).data("ui-draggable").options;
                r.css("opacity") && (u._opacity = r.css("opacity")), r.css("opacity", u.opacity)
            },
            stop: function(t, i) {
                var r = n(this).data("ui-draggable").options;
                r._opacity && n(i.helper).css("opacity", r._opacity)
            }
        }), n.ui.plugin.add("draggable", "scroll", {
            start: function() {
                var t = n(this).data("ui-draggable");
                t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
            },
            drag: function(t) {
                var r = n(this).data("ui-draggable"),
                    i = r.options,
                    u = !1;
                r.scrollParent[0] !== document && "HTML" !== r.scrollParent[0].tagName ? (i.axis && "x" === i.axis || (r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && "y" === i.axis || (r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && "x" === i.axis || (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? u = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (u = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed))), i.axis && "y" === i.axis || (t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? u = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (u = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed)))), u !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
            }
        }), n.ui.plugin.add("draggable", "snap", {
            start: function() {
                var t = n(this).data("ui-draggable"),
                    i = t.options;
                t.snapElements = [], n(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                    var i = n(this),
                        r = i.offset();
                    this !== t.element[0] && t.snapElements.push({
                        item: this,
                        width: i.outerWidth(),
                        height: i.outerHeight(),
                        top: r.top,
                        left: r.left
                    })
                })
            },
            drag: function(t, i) {
                for (var e, o, s, h, c, a, l, v, w, r = n(this).data("ui-draggable"), b = r.options, f = b.snapTolerance, y = i.offset.left, k = y + r.helperProportions.width, p = i.offset.top, d = p + r.helperProportions.height, u = r.snapElements.length - 1; u >= 0; u--) c = r.snapElements[u].left, a = c + r.snapElements[u].width, l = r.snapElements[u].top, v = l + r.snapElements[u].height, c - f > k || y > a + f || l - f > d || p > v + f || !n.contains(r.snapElements[u].item.ownerDocument, r.snapElements[u].item) ? (r.snapElements[u].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[u].item
                })), r.snapElements[u].snapping = !1) : ("inner" !== b.snapMode && (e = f >= Math.abs(l - d), o = f >= Math.abs(v - p), s = f >= Math.abs(c - k), h = f >= Math.abs(a - y), e && (i.position.top = r._convertPositionTo("relative", {
                    top: l - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top), o && (i.position.top = r._convertPositionTo("relative", {
                    top: v,
                    left: 0
                }).top - r.margins.top), s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c - r.helperProportions.width
                }).left - r.margins.left), h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left - r.margins.left)), w = e || o || s || h, "outer" !== b.snapMode && (e = f >= Math.abs(l - p), o = f >= Math.abs(v - d), s = f >= Math.abs(c - y), h = f >= Math.abs(a - k), e && (i.position.top = r._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - r.margins.top), o && (i.position.top = r._convertPositionTo("relative", {
                    top: v - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top), s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c
                }).left - r.margins.left), h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a - r.helperProportions.width
                }).left - r.margins.left)), !r.snapElements[u].snapping && (e || o || s || h || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[u].item
                })), r.snapElements[u].snapping = e || o || s || h || w)
            }
        }), n.ui.plugin.add("draggable", "stack", {
            start: function() {
                var i, r = this.data("ui-draggable").options,
                    t = n.makeArray(n(r.stack)).sort(function(t, i) {
                        return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
                    });
                t.length && (i = parseInt(n(t[0]).css("zIndex"), 10) || 0, n(t).each(function(t) {
                    n(this).css("zIndex", i + t)
                }), this.css("zIndex", i + t.length))
            }
        }), n.ui.plugin.add("draggable", "zIndex", {
            start: function(t, i) {
                var r = n(i.helper),
                    u = n(this).data("ui-draggable").options;
                r.css("zIndex") && (u._zIndex = r.css("zIndex")), r.css("zIndex", u.zIndex)
            },
            stop: function(t, i) {
                var r = n(this).data("ui-draggable").options;
                r._zIndex && n(i.helper).css("zIndex", r._zIndex)
            }
        })
    }(jQuery), function(n) {
        function t(n, t, i) {
            return n > t && t + i > n
        }
        n.widget("ui.droppable", {
            version: "1.10.4",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var i, t = this.options,
                    r = t.accept;
                this.isover = !1, this.isout = !0, this.accept = n.isFunction(r) ? r : function(n) {
                    return n.is(r)
                }, this.proportions = function() {
                    return arguments.length ? void(i = arguments[0]) : i ? i : i = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                }, n.ui.ddmanager.droppables[t.scope] = n.ui.ddmanager.droppables[t.scope] || [], n.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
            },
            _destroy: function() {
                for (var t = 0, i = n.ui.ddmanager.droppables[this.options.scope]; i.length > t; t++) i[t] === this && i.splice(t, 1);
                this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(t, i) {
                "accept" === t && (this.accept = n.isFunction(i) ? i : function(n) {
                    return n.is(i)
                }), n.Widget.prototype._setOption.apply(this, arguments)
            },
            _activate: function(t) {
                var i = n.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
            },
            _deactivate: function(t) {
                var i = n.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
            },
            _over: function(t) {
                var i = n.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
            },
            _out: function(t) {
                var i = n.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
            },
            _drop: function(t, i) {
                var r = i || n.ui.ddmanager.current,
                    u = !1;
                return r && (r.currentItem || r.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var t = n.data(this, "ui-droppable");
                    if (t.options.greedy && !t.options.disabled && t.options.scope === r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(t, {
                            offset: t.element.offset()
                        }), t.options.tolerance)) return u = !0, !1
                }), u ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1) : !1
            },
            ui: function(n) {
                return {
                    draggable: n.currentItem || n.element,
                    helper: n.helper,
                    position: n.position,
                    offset: n.positionAbs
                }
            }
        }), n.ui.intersect = function(n, i, r) {
            if (!i.offset) return !1;
            var a, v, e = (n.positionAbs || n.position.absolute).left,
                o = (n.positionAbs || n.position.absolute).top,
                s = e + n.helperProportions.width,
                h = o + n.helperProportions.height,
                u = i.offset.left,
                f = i.offset.top,
                c = u + i.proportions().width,
                l = f + i.proportions().height;
            switch (r) {
                case "fit":
                    return e >= u && c >= s && o >= f && l >= h;
                case "intersect":
                    return e + n.helperProportions.width / 2 > u && c > s - n.helperProportions.width / 2 && o + n.helperProportions.height / 2 > f && l > h - n.helperProportions.height / 2;
                case "pointer":
                    return a = (n.positionAbs || n.position.absolute).left + (n.clickOffset || n.offset.click).left, v = (n.positionAbs || n.position.absolute).top + (n.clickOffset || n.offset.click).top, t(v, f, i.proportions().height) && t(a, u, i.proportions().width);
                case "touch":
                    return (o >= f && l >= o || h >= f && l >= h || f > o && h > l) && (e >= u && c >= e || s >= u && c >= s || u > e && s > c);
                default:
                    return !1
            }
        }, n.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(t, i) {
                var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [],
                    o = i ? i.type : null,
                    e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                n: for (r = 0; u.length > r; r++)
                    if (!(u[r].options.disabled || t && !u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                        for (f = 0; e.length > f; f++)
                            if (e[f] === u[r].element[0]) {
                                u[r].proportions().height = 0;
                                continue n
                            }
                        u[r].visible = "none" !== u[r].element.css("display"), u[r].visible && ("mousedown" === o && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions({
                            width: u[r].element[0].offsetWidth,
                            height: u[r].element[0].offsetHeight
                        }))
                    }
            },
            drop: function(t, i) {
                var r = !1;
                return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                }), r
            },
            dragStart: function(t, i) {
                t.element.parentsUntil("body").bind("scroll.droppable", function() {
                    t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
                })
            },
            drag: function(t, i) {
                t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i), n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var r, e, f, o = n.ui.intersect(t, this, this.options.tolerance),
                            u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                        u && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                            return n.data(this, "ui-droppable").options.scope === e
                        }), f.length && (r = n.data(f[0], "ui-droppable"), r.greedyChild = "isover" === u)), r && "isover" === u && (r.isover = !1, r.isout = !0, r._out.call(r, i)), this[u] = !0, this["isout" === u ? "isover" : "isout"] = !1, this["isover" === u ? "_over" : "_out"].call(this, i), r && "isout" === u && (r.isout = !1, r.isover = !0, r._over.call(r, i)))
                    }
                })
            },
            dragStop: function(t, i) {
                t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            }
        }
    }(jQuery), function(n) {
        function i(n) {
            return parseInt(n, 10) || 0
        }

        function t(n) {
            return !isNaN(parseInt(n, 10))
        }
        n.widget("ui.resizable", n.ui.mouse, {
            version: "1.10.4",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _create: function() {
                var e, f, r, i, o, u = this,
                    t = this.options;
                if (this.element.addClass("ui-resizable"), n.extend(this, {
                        _aspectRatio: !!t.aspectRatio,
                        aspectRatio: t.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, f = 0; e.length > f; f++) r = n.trim(e[f]), o = "ui-resizable-" + r, i = n("<div class='ui-resizable-handle " + o + "'><\/div>"), i.css({
                        zIndex: t.zIndex
                    }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i);
                this._renderAxis = function(t) {
                    var i, r, u, f;
                    t = t || this.element;
                    for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = n(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element), f = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(), u = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(u, f), this._proportionallyResize()), n(this.handles[i]).length
                }, this._renderAxis(this.element), this._handles = n(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    u.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), u.axis = i && i[1] ? i[1] : "se")
                }), t.autoHide && (this._handles.hide(), n(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    t.disabled || (n(this).removeClass("ui-resizable-autohide"), u._handles.show())
                }).mouseleave(function() {
                    t.disabled || u.resizing || (n(this).addClass("ui-resizable-autohide"), u._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var t, i = function(t) {
                    n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                    position: t.css("position"),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css("top"),
                    left: t.css("left")
                }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _mouseCapture: function(t) {
                var r, i, u = !1;
                for (r in this.handles) i = n(this.handles[r])[0], (i === t.target || n.contains(i, t.target)) && (u = !0);
                return !this.options.disabled && u
            },
            _mouseStart: function(t) {
                var f, e, o, u = this.options,
                    s = this.element.position(),
                    r = this.element;
                return this.resizing = !0, /absolute/.test(r.css("position")) ? r.css({
                    position: "absolute",
                    top: r.css("top"),
                    left: r.css("left")
                }) : r.is(".ui-draggable") && r.css({
                    position: "absolute",
                    top: s.top,
                    left: s.left
                }), this._renderProxy(), f = i(this.helper.css("left")), e = i(this.helper.css("top")), u.containment && (f += n(u.containment).scrollLeft() || 0, e += n(u.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: f,
                    top: e
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: r.width(),
                    height: r.height()
                }, this.originalSize = this._helper ? {
                    width: r.outerWidth(),
                    height: r.outerHeight()
                } : {
                    width: r.width(),
                    height: r.height()
                }, this.originalPosition = {
                    left: f,
                    top: e
                }, this.sizeDiff = {
                    width: r.outerWidth() - r.width(),
                    height: r.outerHeight() - r.height()
                }, this.originalMousePosition = {
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = "number" == typeof u.aspectRatio ? u.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), r.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function(t) {
                var i, e = this.helper,
                    r = {},
                    u = this.originalMousePosition,
                    o = this.axis,
                    s = this.position.top,
                    h = this.position.left,
                    c = this.size.width,
                    l = this.size.height,
                    a = t.pageX - u.left || 0,
                    v = t.pageY - u.top || 0,
                    f = this._change[o];
                return f ? (i = f.apply(this, [t, a, v]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== s && (r.top = this.position.top + "px"), this.position.left !== h && (r.left = this.position.left + "px"), this.size.width !== c && (r.width = this.size.width + "px"), this.size.height !== l && (r.height = this.size.height + "px"), e.css(r), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), n.isEmptyObject(r) || this._trigger("resize", t, this.ui()), !1) : !1
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var r, u, f, e, o, s, h, c = this.options,
                    i = this;
                return this._helper && (r = this._proportionallyResizeElements, u = r.length && /textarea/i.test(r[0].nodeName), f = u && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, e = u ? 0 : i.sizeDiff.width, o = {
                    width: i.helper.width() - e,
                    height: i.helper.height() - f
                }, s = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null, c.animate || this.element.css(n.extend(o, {
                    top: h,
                    left: s
                })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !c.animate && this._proportionallyResize()), n("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updateVirtualBoundaries: function(n) {
                var u, f, e, o, i, r = this.options;
                i = {
                    minWidth: t(r.minWidth) ? r.minWidth : 0,
                    maxWidth: t(r.maxWidth) ? r.maxWidth : 1 / 0,
                    minHeight: t(r.minHeight) ? r.minHeight : 0,
                    maxHeight: t(r.maxHeight) ? r.maxHeight : 1 / 0
                }, (this._aspectRatio || n) && (u = i.minHeight * this.aspectRatio, e = i.minWidth / this.aspectRatio, f = i.maxHeight * this.aspectRatio, o = i.maxWidth / this.aspectRatio, u > i.minWidth && (i.minWidth = u), e > i.minHeight && (i.minHeight = e), i.maxWidth > f && (i.maxWidth = f), i.maxHeight > o && (i.maxHeight = o)), this._vBoundaries = i
            },
            _updateCache: function(n) {
                this.offset = this.helper.offset(), t(n.left) && (this.position.left = n.left), t(n.top) && (this.position.top = n.top), t(n.height) && (this.size.height = n.height), t(n.width) && (this.size.width = n.width)
            },
            _updateRatio: function(n) {
                var i = this.position,
                    r = this.size,
                    u = this.axis;
                return t(n.height) ? n.width = n.height * this.aspectRatio : t(n.width) && (n.height = n.width / this.aspectRatio), "sw" === u && (n.left = i.left + (r.width - n.width), n.top = null), "nw" === u && (n.top = i.top + (r.height - n.height), n.left = i.left + (r.width - n.width)), n
            },
            _respectSize: function(n) {
                var i = this._vBoundaries,
                    r = this.axis,
                    u = t(n.width) && i.maxWidth && i.maxWidth < n.width,
                    f = t(n.height) && i.maxHeight && i.maxHeight < n.height,
                    e = t(n.width) && i.minWidth && i.minWidth > n.width,
                    o = t(n.height) && i.minHeight && i.minHeight > n.height,
                    s = this.originalPosition.left + this.originalSize.width,
                    h = this.position.top + this.size.height,
                    c = /sw|nw|w/.test(r),
                    l = /nw|ne|n/.test(r);
                return e && (n.width = i.minWidth), o && (n.height = i.minHeight), u && (n.width = i.maxWidth), f && (n.height = i.maxHeight), e && c && (n.left = s - i.minWidth), u && c && (n.left = s - i.maxWidth), o && l && (n.top = h - i.minHeight), f && l && (n.top = h - i.maxHeight), n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null, n
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var t, r, u, n, f = this.helper || this.element, i = 0; this._proportionallyResizeElements.length > i; i++) {
                        if (n = this._proportionallyResizeElements[i], !this.borderDif)
                            for (this.borderDif = [], r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; r.length > t; t++) this.borderDif[t] = (parseInt(r[t], 10) || 0) + (parseInt(u[t], 10) || 0);
                        n.css({
                            height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
            },
            _renderProxy: function() {
                var t = this.element,
                    i = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(n, t) {
                    return {
                        width: this.originalSize.width + t
                    }
                },
                w: function(n, t) {
                    var i = this.originalSize,
                        r = this.originalPosition;
                    return {
                        left: r.left + t,
                        width: i.width - t
                    }
                },
                n: function(n, t, i) {
                    var r = this.originalSize,
                        u = this.originalPosition;
                    return {
                        top: u.top + i,
                        height: r.height - i
                    }
                },
                s: function(n, t, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(t, i, r) {
                    return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
                },
                sw: function(t, i, r) {
                    return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
                },
                ne: function(t, i, r) {
                    return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
                },
                nw: function(t, i, r) {
                    return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
                }
            },
            _propagate: function(t, i) {
                n.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), n.ui.plugin.add("resizable", "animate", {
            stop: function(t) {
                var i = n(this).data("ui-resizable"),
                    u = i.options,
                    r = i._proportionallyResizeElements,
                    f = r.length && /textarea/i.test(r[0].nodeName),
                    s = f && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
                    h = f ? 0 : i.sizeDiff.width,
                    c = {
                        width: i.size.width - h,
                        height: i.size.height - s
                    },
                    e = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                    o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(n.extend(c, o && e ? {
                    top: o,
                    left: e
                } : {}), {
                    duration: u.animateDuration,
                    easing: u.animateEasing,
                    step: function() {
                        var u = {
                            width: parseInt(i.element.css("width"), 10),
                            height: parseInt(i.element.css("height"), 10),
                            top: parseInt(i.element.css("top"), 10),
                            left: parseInt(i.element.css("left"), 10)
                        };
                        r && r.length && n(r[0]).css({
                            width: u.width,
                            height: u.height
                        }), i._updateCache(u), i._propagate("resize", t)
                    }
                })
            }
        }), n.ui.plugin.add("resizable", "containment", {
            start: function() {
                var u, e, o, s, h, c, l, t = n(this).data("ui-resizable"),
                    a = t.options,
                    v = t.element,
                    f = a.containment,
                    r = f instanceof n ? f.get(0) : /parent/.test(f) ? v.parent().get(0) : f;
                r && (t.containerElement = n(r), /document/.test(f) || f === document ? (t.containerOffset = {
                    left: 0,
                    top: 0
                }, t.containerPosition = {
                    left: 0,
                    top: 0
                }, t.parentData = {
                    element: n(document),
                    left: 0,
                    top: 0,
                    width: n(document).width(),
                    height: n(document).height() || document.body.parentNode.scrollHeight
                }) : (u = n(r), e = [], n(["Top", "Right", "Left", "Bottom"]).each(function(n, t) {
                    e[n] = i(u.css("padding" + t))
                }), t.containerOffset = u.offset(), t.containerPosition = u.position(), t.containerSize = {
                    height: u.innerHeight() - e[3],
                    width: u.innerWidth() - e[1]
                }, o = t.containerOffset, s = t.containerSize.height, h = t.containerSize.width, c = n.ui.hasScroll(r, "left") ? r.scrollWidth : h, l = n.ui.hasScroll(r) ? r.scrollHeight : s, t.parentData = {
                    element: r,
                    left: o.left,
                    top: o.top,
                    width: c,
                    height: l
                }))
            },
            resize: function(t) {
                var f, o, s, h, i = n(this).data("ui-resizable"),
                    a = i.options,
                    r = i.containerOffset,
                    c = i.position,
                    e = i._aspectRatio || t.shiftKey,
                    u = {
                        top: 0,
                        left: 0
                    },
                    l = i.containerElement;
                l[0] !== document && /static/.test(l.css("position")) && (u = r), c.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - u.left), e && (i.size.height = i.size.width / i.aspectRatio), i.position.left = a.helper ? r.left : 0), c.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), e && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? r.top : 0), i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top, f = Math.abs((i._helper ? i.offset.left - u.left : i.offset.left - u.left) + i.sizeDiff.width), o = Math.abs((i._helper ? i.offset.top - u.top : i.offset.top - r.top) + i.sizeDiff.height), s = i.containerElement.get(0) === i.element.parent().get(0), h = /relative|absolute/.test(i.containerElement.css("position")), s && h && (f -= Math.abs(i.parentData.left)), f + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - f, e && (i.size.height = i.size.width / i.aspectRatio)), o + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - o, e && (i.size.width = i.size.height * i.aspectRatio))
            },
            stop: function() {
                var t = n(this).data("ui-resizable"),
                    r = t.options,
                    u = t.containerOffset,
                    f = t.containerPosition,
                    e = t.containerElement,
                    i = n(t.helper),
                    o = i.offset(),
                    s = i.outerWidth() - t.sizeDiff.width,
                    h = i.outerHeight() - t.sizeDiff.height;
                t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                    left: o.left - f.left - u.left,
                    width: s,
                    height: h
                }), t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                    left: o.left - f.left - u.left,
                    width: s,
                    height: h
                })
            }
        }), n.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var r = n(this).data("ui-resizable"),
                    t = r.options,
                    i = function(t) {
                        n(t).each(function() {
                            var t = n(this);
                            t.data("ui-resizable-alsoresize", {
                                width: parseInt(t.width(), 10),
                                height: parseInt(t.height(), 10),
                                left: parseInt(t.css("left"), 10),
                                top: parseInt(t.css("top"), 10)
                            })
                        })
                    };
                "object" != typeof t.alsoResize || t.alsoResize.parentNode ? i(t.alsoResize) : t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], i(t.alsoResize)) : n.each(t.alsoResize, function(n) {
                    i(n)
                })
            },
            resize: function(t, i) {
                var r = n(this).data("ui-resizable"),
                    u = r.options,
                    f = r.originalSize,
                    e = r.originalPosition,
                    s = {
                        height: r.size.height - f.height || 0,
                        width: r.size.width - f.width || 0,
                        top: r.position.top - e.top || 0,
                        left: r.position.left - e.left || 0
                    },
                    o = function(t, r) {
                        n(t).each(function() {
                            var t = n(this),
                                f = n(this).data("ui-resizable-alsoresize"),
                                u = {},
                                e = r && r.length ? r : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            n.each(e, function(n, t) {
                                var i = (f[t] || 0) + (s[t] || 0);
                                i && i >= 0 && (u[t] = i || null)
                            }), t.css(u)
                        })
                    };
                "object" != typeof u.alsoResize || u.alsoResize.nodeType ? o(u.alsoResize) : n.each(u.alsoResize, function(n, t) {
                    o(n, t)
                })
            },
            stop: function() {
                n(this).removeData("resizable-alsoresize")
            }
        }), n.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = n(this).data("ui-resizable"),
                    i = t.options,
                    r = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: r.height,
                    width: r.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = n(this).data("ui-resizable");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function() {
                var t = n(this).data("ui-resizable");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), n.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t = n(this).data("ui-resizable"),
                    i = t.options,
                    v = t.size,
                    o = t.originalSize,
                    s = t.originalPosition,
                    h = t.axis,
                    c = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                    f = c[0] || 1,
                    e = c[1] || 1,
                    l = Math.round((v.width - o.width) / f) * f,
                    a = Math.round((v.height - o.height) / e) * e,
                    r = o.width + l,
                    u = o.height + a,
                    y = i.maxWidth && r > i.maxWidth,
                    p = i.maxHeight && u > i.maxHeight,
                    w = i.minWidth && i.minWidth > r,
                    b = i.minHeight && i.minHeight > u;
                i.grid = c, w && (r += f), b && (u += e), y && (r -= f), p && (u -= e), /^(se|s|e)$/.test(h) ? (t.size.width = r, t.size.height = u) : /^(ne)$/.test(h) ? (t.size.width = r, t.size.height = u, t.position.top = s.top - a) : /^(sw)$/.test(h) ? (t.size.width = r, t.size.height = u, t.position.left = s.left - l) : (u - e > 0 ? (t.size.height = u, t.position.top = s.top - a) : (t.size.height = e, t.position.top = s.top + o.height - e), r - f > 0 ? (t.size.width = r, t.position.left = s.left - l) : (t.size.width = f, t.position.left = s.left + o.width - f))
            }
        })
    }(jQuery), function(n) {
        n.widget("ui.selectable", n.ui.mouse, {
            version: "1.10.4",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var t, i = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    t = n(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function() {
                        var t = n(this),
                            i = t.offset();
                        n.data(this, "selectable-item", {
                            element: this,
                            $element: t,
                            left: i.left,
                            top: i.top,
                            right: i.left + t.outerWidth(),
                            bottom: i.top + t.outerHeight(),
                            startselected: !1,
                            selected: t.hasClass("ui-selected"),
                            selecting: t.hasClass("ui-selecting"),
                            unselecting: t.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = n("<div class='ui-selectable-helper'><\/div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function(t) {
                var i = this,
                    r = this.options;
                this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = n(r.filter, this.element[0]), this._trigger("start", t), n(r.appendTo).append(this.helper), this.helper.css({
                    left: t.pageX,
                    top: t.pageY,
                    width: 0,
                    height: 0
                }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var r = n.data(this, "selectable-item");
                    r.startselected = !0, t.metaKey || t.ctrlKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, i._trigger("unselecting", t, {
                        unselecting: r.element
                    }))
                }), n(t.target).parents().addBack().each(function() {
                    var u, r = n.data(this, "selectable-item");
                    if (r) return u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"), r.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"), r.unselecting = !u, r.selecting = u, r.selected = u, u ? i._trigger("selecting", t, {
                        selecting: r.element
                    }) : i._trigger("unselecting", t, {
                        unselecting: r.element
                    }), !1
                }))
            },
            _mouseDrag: function(t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var e, o = this,
                        s = this.options,
                        i = this.opos[0],
                        r = this.opos[1],
                        u = t.pageX,
                        f = t.pageY;
                    return i > u && (e = u, u = i, i = e), r > f && (e = f, f = r, r = e), this.helper.css({
                        left: i,
                        top: r,
                        width: u - i,
                        height: f - r
                    }), this.selectees.each(function() {
                        var e = n.data(this, "selectable-item"),
                            h = !1;
                        e && e.element !== o.element[0] && ("touch" === s.tolerance ? h = !(e.left > u || i > e.right || e.top > f || r > e.bottom) : "fit" === s.tolerance && (h = e.left > i && u > e.right && e.top > r && f > e.bottom), h ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, o._trigger("selecting", t, {
                            selecting: e.element
                        }))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), o._trigger("unselecting", t, {
                            unselecting: e.element
                        }))), e.selected && (t.metaKey || t.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, o._trigger("unselecting", t, {
                            unselecting: e.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(t) {
                var i = this;
                return this.dragged = !1, n(".ui-unselecting", this.element[0]).each(function() {
                    var r = n.data(this, "selectable-item");
                    r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, i._trigger("unselected", t, {
                        unselected: r.element
                    })
                }), n(".ui-selecting", this.element[0]).each(function() {
                    var r = n.data(this, "selectable-item");
                    r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, i._trigger("selected", t, {
                        selected: r.element
                    })
                }), this._trigger("stop", t), this.helper.remove(), !1
            }
        })
    }(jQuery), function(n) {
        function t(n, t, i) {
            return n > t && t + i > n
        }

        function i(n) {
            return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display"))
        }
        n.widget("ui.sortable", n.ui.mouse, {
            version: "1.10.4",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _create: function() {
                var n = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === n.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
                for (var n = this.items.length - 1; n >= 0; n--) this.items[n].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function(t, i) {
                "disabled" === t ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : n.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function(t, i) {
                var r = null,
                    f = !1,
                    u = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), n(t.target).parents().each(function() {
                    if (n.data(this, u.widgetName + "-item") === u) return r = n(this), !1
                }), n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)), r && (!this.options.handle || i || (n(this.options.handle, r).find("*").addBack().each(function() {
                    this === t.target && (f = !0)
                }), f)) ? (this.currentItem = r, this._removeCurrentsFromItems(), !0) : !1)
            },
            _mouseStart: function(t, i, r) {
                var f, e, u = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, n.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && "auto" !== u.cursor && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", u.cursor), this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }<\/style>").appendTo(e)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r)
                    for (f = this.containers.length - 1; f >= 0; f--) this.containers[f]._trigger("activate", t, this._uiHash(this));
                return n.ui.ddmanager && (n.ui.ddmanager.current = this), n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function(t) {
                var e, u, f, o, i = this.options,
                    r = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)), t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--)
                    if (u = this.items[e], f = u.item[0], o = this._intersectsWithPointer(u), o && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && ("semi-dynamic" === this.options.type ? !n.contains(this.element[0], f) : !0)) {
                        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(u)) break;
                        this._rearrange(t, u), this._trigger("change", t, this._uiHash());
                        break
                    }
                return this._contactContainers(t), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(t, i) {
                if (t) {
                    if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) {
                        var e = this,
                            f = this.placeholder.offset(),
                            r = this.options.axis,
                            u = {};
                        r && "x" !== r || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), r && "y" !== r || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function() {
                            e._clear(t)
                        })
                    } else this._clear(t, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(t) {
                var r = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                return t = t || {}, n(r).each(function() {
                    var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                    r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
                }), !i.length && t.key && i.push(t.key + "="), i.join("&")
            },
            toArray: function(t) {
                var r = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                return t = t || {}, r.each(function() {
                    i.push(n(t.item || this).attr(t.attribute || "id") || "")
                }), i
            },
            _intersectsWith: function(n) {
                var t = this.positionAbs.left,
                    h = t + this.helperProportions.width,
                    i = this.positionAbs.top,
                    c = i + this.helperProportions.height,
                    r = n.left,
                    f = r + n.width,
                    u = n.top,
                    e = u + n.height,
                    o = this.offset.click.top,
                    s = this.offset.click.left,
                    l = "x" === this.options.axis || i + o > u && e > i + o,
                    a = "y" === this.options.axis || t + s > r && f > t + s,
                    v = l && a;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? v : t + this.helperProportions.width / 2 > r && f > h - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > u && e > c - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(n) {
                var u = "x" === this.options.axis || t(this.positionAbs.top + this.offset.click.top, n.top, n.height),
                    f = "y" === this.options.axis || t(this.positionAbs.left + this.offset.click.left, n.left, n.width),
                    e = u && f,
                    i = this._getDragVerticalDirection(),
                    r = this._getDragHorizontalDirection();
                return e ? this.floating ? r && "right" === r || "down" === i ? 2 : 1 : i && ("down" === i ? 2 : 1) : !1
            },
            _intersectsWithSides: function(n) {
                var u = t(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height),
                    f = t(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width),
                    i = this._getDragVerticalDirection(),
                    r = this._getDragHorizontalDirection();
                return this.floating && r ? "right" === r && f || "left" === r && !f : i && ("down" === i && u || "up" === i && !u)
            },
            _getDragVerticalDirection: function() {
                var n = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== n && (n > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var n = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== n && (n > 0 ? "right" : "left")
            },
            refresh: function(n) {
                return this._refreshItems(n), this.refreshPositions(), this
            },
            _connectWith: function() {
                var n = this.options;
                return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith
            },
            _getItemsAsjQuery: function(t) {
                function h() {
                    s.push(this)
                }
                var r, u, e, i, s = [],
                    f = [],
                    o = this._connectWith();
                if (o && t)
                    for (r = o.length - 1; r >= 0; r--)
                        for (e = n(o[r]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
                for (f.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = f.length - 1; r >= 0; r--) f[r][0].each(h);
                return n(s)
            },
            _removeCurrentsFromItems: function() {
                var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = n.grep(this.items, function(n) {
                    for (var i = 0; t.length > i; i++)
                        if (t[i] === n.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(t) {
                this.items = [], this.containers = [this];
                var r, u, e, i, o, s, h, l, a = this.items,
                    f = [
                        [n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        }) : n(this.options.items, this.element), this]
                    ],
                    c = this._connectWith();
                if (c && this.ready)
                    for (r = c.length - 1; r >= 0; r--)
                        for (e = n(c[r]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                            item: this.currentItem
                        }) : n(i.options.items, i.element), i]), this.containers.push(i));
                for (r = f.length - 1; r >= 0; r--)
                    for (o = f[r][1], s = f[r][0], u = 0, l = s.length; l > u; u++) h = n(s[u]), h.data(this.widgetName + "-item", o), a.push({
                        item: h,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(t) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                for (var r, f, u, i = this.items.length - 1; i >= 0; i--) r = this.items[i], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0] || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) u = this.containers[i].element.offset(), this.containers[i].containerCache.left = u.left, this.containers[i].containerCache.top = u.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(t) {
                t = t || this;
                var r, i = t.options;
                i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder, i.placeholder = {
                    element: function() {
                        var u = t.currentItem[0].nodeName.toLowerCase(),
                            i = n("<" + u + ">", t.document[0]).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tr" === u ? t.currentItem.children().each(function() {
                            n("<td>&#160;<\/td>", t.document[0]).attr("colspan", n(this).attr("colspan") || 1).appendTo(i)
                        }) : "img" === u && i.attr("src", t.currentItem.attr("src")), r || i.css("visibility", "hidden"), i
                    },
                    update: function(n, u) {
                        (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), i.placeholder.update(t, t.placeholder)
            },
            _contactContainers: function(r) {
                for (var u, v, s, l, y, h, o, p, a, c = null, f = null, e = this.containers.length - 1; e >= 0; e--)
                    if (!n.contains(this.currentItem[0], this.containers[e].element[0]))
                        if (this._intersectsWith(this.containers[e].containerCache)) {
                            if (c && n.contains(this.containers[e].element[0], c.element[0])) continue;
                            c = this.containers[e], f = e
                        } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", r, this._uiHash(this)), this.containers[e].containerCache.over = 0);
                if (c)
                    if (1 === this.containers.length) this.containers[f].containerCache.over || (this.containers[f]._trigger("over", r, this._uiHash(this)), this.containers[f].containerCache.over = 1);
                    else {
                        for (v = 1e4, s = null, a = c.floating || i(this.currentItem), l = a ? "left" : "top", y = a ? "width" : "height", h = this.positionAbs[l] + this.offset.click[l], u = this.items.length - 1; u >= 0; u--) n.contains(this.containers[f].element[0], this.items[u].item[0]) && this.items[u].item[0] !== this.currentItem[0] && (!a || t(this.positionAbs.top + this.offset.click.top, this.items[u].top, this.items[u].height)) && (o = this.items[u].item.offset()[l], p = !1, Math.abs(o - h) > Math.abs(o + this.items[u][y] - h) && (p = !0, o += this.items[u][y]), v > Math.abs(o - h) && (v = Math.abs(o - h), s = this.items[u], this.direction = p ? "up" : "down"));
                        if (!s && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[f]) return;
                        s ? this._rearrange(r, s, null, !0) : this._rearrange(r, null, this.containers[f].element, !0), this._trigger("change", r, this._uiHash()), this.containers[f]._trigger("change", r, this._uiHash(this)), this.currentContainer = this.containers[f], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[f]._trigger("over", r, this._uiHash(this)), this.containers[f].containerCache.over = 1
                    }
            },
            _createHelper: function(t) {
                var r = this.options,
                    i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === r.helper ? this.currentItem.clone() : this.currentItem;
                return i.parents("body").length || n("parent" !== r.appendTo ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()), i
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), n.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && n.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var n = this.currentItem.position();
                    return {
                        top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, r, u, i = this.options;
                "parent" === i.containment && (i.containment = this.helper[0].parentNode), ("document" === i.containment || "window" === i.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n("document" === i.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (n("document" === i.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0], r = n(i.containment).offset(), u = "hidden" !== n(t).css("overflow"), this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(t, i) {
                i || (i = this.position);
                var r = "absolute" === t ? 1 : -1,
                    u = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    f = /(html|body)/i.test(u[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                    left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
                }
            },
            _generatePosition: function(t) {
                var r, u, i = this.options,
                    f = t.pageX,
                    e = t.pageY,
                    o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(o[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)), {
                    top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                    left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
                }
            },
            _rearrange: function(n, t, i, r) {
                i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var u = this.counter;
                this._delay(function() {
                    u === this.counter && this.refreshPositions(!r)
                })
            },
            _clear: function(n, t) {
                function u(n, t, i) {
                    return function(r) {
                        i._trigger(n, r, t._uiHash(t))
                    }
                }
                this.reverting = !1;
                var i, r = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !t && r.push(function(n) {
                        this._trigger("receive", n, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push(function(n) {
                        this._trigger("update", n, this._uiHash())
                    }), this !== this.currentContainer && (t || (r.push(function(n) {
                        this._trigger("remove", n, this._uiHash())
                    }), r.push(function(n) {
                        return function(t) {
                            n._trigger("receive", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), r.push(function(n) {
                        return function(t) {
                            n._trigger("update", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || r.push(u("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(u("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!t) {
                        for (this._trigger("beforeStop", n, this._uiHash()), i = 0; r.length > i; i++) r[i].call(this, n);
                        this._trigger("stop", n, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (t || this._trigger("beforeStop", n, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
                    for (i = 0; r.length > i; i++) r[i].call(this, n);
                    this._trigger("stop", n, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function() {
                n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(t) {
                var i = t || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || n([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: t ? t.element : null
                }
            }
        })
    }(jQuery), function(n, t) {
        var i = "ui-effects-";
        n.effects = {
                effect: {}
            },
            function(n, t) {
                function f(n, t, i) {
                    var r = h[t.type] || {};
                    return null == n ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : n > r.max ? r.max : n)
                }

                function s(f) {
                    var o = i(),
                        s = o._rgba = [];
                    return f = f.toLowerCase(), r(y, function(n, i) {
                        var r, h = i.re.exec(f),
                            c = h && i.parse(h),
                            e = i.space || "rgba";
                        return c ? (r = o[e](c), o[u[e].cache] = r[u[e].cache], s = o._rgba = r._rgba, !1) : t
                    }), s.length ? ("0,0,0,0" === s.join() && n.extend(s, e.transparent), o) : e[f]
                }

                function o(n, t, i) {
                    return i = (i + 1) % 1, 1 > 6 * i ? n + 6 * (t - n) * i : 1 > 2 * i ? t : 2 > 3 * i ? n + 6 * (t - n) * (2 / 3 - i) : n
                }
                var e, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    v = /^([\-+])=\s*(\d+\.?\d*)/,
                    y = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(n) {
                            return [n[1], n[2], n[3], n[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(n) {
                            return [2.55 * n[1], 2.55 * n[2], 2.55 * n[3], n[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(n) {
                            return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(n) {
                            return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(n) {
                            return [n[1], n[2] / 100, n[3] / 100, n[4]]
                        }
                    }],
                    i = n.Color = function(t, i, r, u) {
                        return new n.Color.fn.parse(t, i, r, u)
                    },
                    u = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    h = {
                        byte: {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    c = i.support = {},
                    l = n("<p>")[0],
                    r = n.each;
                l.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = l.style.backgroundColor.indexOf("rgba") > -1, r(u, function(n, t) {
                    t.cache = "_" + n, t.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), i.fn = n.extend(i.prototype, {
                    parse: function(o, h, c, l) {
                        if (o === t) return this._rgba = [null, null, null, null], this;
                        (o.jquery || o.nodeType) && (o = n(o).css(h), h = t);
                        var a = this,
                            v = n.type(o),
                            y = this._rgba = [];
                        return h !== t && (o = [o, h, c, l], v = "array"), "string" === v ? this.parse(s(o) || e._default) : "array" === v ? (r(u.rgba.props, function(n, t) {
                            y[t.idx] = f(o[t.idx], t)
                        }), this) : "object" === v ? (o instanceof i ? r(u, function(n, t) {
                            o[t.cache] && (a[t.cache] = o[t.cache].slice())
                        }) : r(u, function(t, i) {
                            var u = i.cache;
                            r(i.props, function(n, t) {
                                if (!a[u] && i.to) {
                                    if ("alpha" === n || null == o[n]) return;
                                    a[u] = i.to(a._rgba)
                                }
                                a[u][t.idx] = f(o[n], t, !0)
                            }), a[u] && 0 > n.inArray(null, a[u].slice(0, 3)) && (a[u][3] = 1, i.from && (a._rgba = i.from(a[u])))
                        }), this) : t
                    },
                    is: function(n) {
                        var o = i(n),
                            f = !0,
                            e = this;
                        return r(u, function(n, i) {
                            var s, u = o[i.cache];
                            return u && (s = e[i.cache] || i.to && i.to(e._rgba) || [], r(i.props, function(n, i) {
                                return null != u[i.idx] ? f = u[i.idx] === s[i.idx] : t
                            })), f
                        }), f
                    },
                    _space: function() {
                        var n = [],
                            t = this;
                        return r(u, function(i, r) {
                            t[r.cache] && n.push(i)
                        }), n.pop()
                    },
                    transition: function(n, t) {
                        var e = i(n),
                            c = e._space(),
                            o = u[c],
                            l = 0 === this.alpha() ? i("transparent") : this,
                            a = l[o.cache] || o.to(l._rgba),
                            s = a.slice();
                        return e = e[o.cache], r(o.props, function(n, i) {
                            var c = i.idx,
                                r = a[c],
                                u = e[c],
                                o = h[i.type] || {};
                            null !== u && (null === r ? s[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), s[c] = f((u - r) * t + r, i)))
                        }), this[c](s)
                    },
                    blend: function(t) {
                        if (1 === this._rgba[3]) return this;
                        var r = this._rgba.slice(),
                            u = r.pop(),
                            f = i(t)._rgba;
                        return i(n.map(r, function(n, t) {
                            return (1 - u) * f[t] + u * n
                        }))
                    },
                    toRgbaString: function() {
                        var i = "rgba(",
                            t = n.map(this._rgba, function(n, t) {
                                return null == n ? t > 2 ? 1 : 0 : n
                            });
                        return 1 === t[3] && (t.pop(), i = "rgb("), i + t.join() + ")"
                    },
                    toHslaString: function() {
                        var i = "hsla(",
                            t = n.map(this.hsla(), function(n, t) {
                                return null == n && (n = t > 2 ? 1 : 0), t && 3 > t && (n = Math.round(100 * n) + "%"), n
                            });
                        return 1 === t[3] && (t.pop(), i = "hsl("), i + t.join() + ")"
                    },
                    toHexString: function(t) {
                        var i = this._rgba.slice(),
                            r = i.pop();
                        return t && i.push(~~(255 * r)), "#" + n.map(i, function(n) {
                            return n = (n || 0).toString(16), 1 === n.length ? "0" + n : n
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), i.fn.parse.prototype = i.fn, u.hsla.to = function(n) {
                    if (null == n[0] || null == n[1] || null == n[2]) return [null, null, null, n[3]];
                    var s, h, i = n[0] / 255,
                        r = n[1] / 255,
                        f = n[2] / 255,
                        c = n[3],
                        u = Math.max(i, r, f),
                        e = Math.min(i, r, f),
                        t = u - e,
                        o = u + e,
                        l = .5 * o;
                    return s = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, h = 0 === t ? 0 : .5 >= l ? t / o : t / (2 - o), [Math.round(s) % 360, h, l, null == c ? 1 : c]
                }, u.hsla.from = function(n) {
                    if (null == n[0] || null == n[1] || null == n[2]) return [null, null, null, n[3]];
                    var r = n[0] / 360,
                        u = n[1],
                        t = n[2],
                        e = n[3],
                        i = .5 >= t ? t * (1 + u) : t + u - t * u,
                        f = 2 * t - i;
                    return [Math.round(255 * o(f, i, r + 1 / 3)), Math.round(255 * o(f, i, r)), Math.round(255 * o(f, i, r - 1 / 3)), e]
                }, r(u, function(u, e) {
                    var s = e.props,
                        o = e.cache,
                        h = e.to,
                        c = e.from;
                    i.fn[u] = function(u) {
                        if (h && !this[o] && (this[o] = h(this._rgba)), u === t) return this[o].slice();
                        var l, a = n.type(u),
                            v = "array" === a || "object" === a ? u : arguments,
                            e = this[o].slice();
                        return r(s, function(n, t) {
                            var i = v["object" === a ? n : t.idx];
                            null == i && (i = e[t.idx]), e[t.idx] = f(i, t)
                        }), c ? (l = i(c(e)), l[o] = e, l) : i(e)
                    }, r(s, function(t, r) {
                        i.fn[t] || (i.fn[t] = function(i) {
                            var f, e = n.type(i),
                                h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : u,
                                o = this[h](),
                                s = o[r.idx];
                            return "undefined" === e ? s : ("function" === e && (i = i.call(this, s), e = n.type(i)), null == i && r.empty ? this : ("string" === e && (f = v.exec(i), f && (i = s + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), o[r.idx] = i, this[h](o)))
                        })
                    })
                }), i.hook = function(t) {
                    var u = t.split(" ");
                    r(u, function(t, r) {
                        n.cssHooks[r] = {
                            set: function(t, u) {
                                var o, f, e = "";
                                if ("transparent" !== u && ("string" !== n.type(u) || (o = s(u)))) {
                                    if (u = i(o || u), !c.rgba && 1 !== u._rgba[3]) {
                                        for (f = "backgroundColor" === r ? t.parentNode : t;
                                            ("" === e || "transparent" === e) && f && f.style;) try {
                                            e = n.css(f, "backgroundColor"), f = f.parentNode
                                        } catch (h) {}
                                        u = u.blend(e && "transparent" !== e ? e : "_default")
                                    }
                                    u = u.toRgbaString()
                                }
                                try {
                                    t.style[r] = u
                                } catch (h) {}
                            }
                        }, n.fx.step[r] = function(t) {
                            t.colorInit || (t.start = i(t.elem, r), t.end = i(t.end), t.colorInit = !0), n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
                        }
                    })
                }, i.hook(a), n.cssHooks.borderColor = {
                    expand: function(n) {
                        var t = {};
                        return r(["Top", "Right", "Bottom", "Left"], function(i, r) {
                            t["border" + r + "Color"] = n
                        }), t
                    }
                }, e = n.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(jQuery),
            function() {
                function i(t) {
                    var r, u, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                        f = {};
                    if (i && i.length && i[0] && i[i[0]])
                        for (u = i.length; u--;) r = i[u], "string" == typeof i[r] && (f[n.camelCase(r)] = i[r]);
                    else
                        for (r in i) "string" == typeof i[r] && (f[r] = i[r]);
                    return f
                }

                function r(t, i) {
                    var r, u, e = {};
                    for (r in i) u = i[r], t[r] !== u && (f[r] || (n.fx.step[r] || !isNaN(parseFloat(u))) && (e[r] = u));
                    return e
                }
                var u = ["add", "remove", "toggle"],
                    f = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                    n.fx.step[i] = function(n) {
                        ("none" === n.end || n.setAttr) && (1 !== n.pos || n.setAttr) || (jQuery.style(n.elem, i, n.end), n.setAttr = !0)
                    }
                }), n.fn.addBack || (n.fn.addBack = function(n) {
                    return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
                }), n.effects.animateClass = function(t, f, e, o) {
                    var s = n.speed(f, e, o);
                    return this.queue(function() {
                        var o, e = n(this),
                            h = e.attr("class") || "",
                            f = s.children ? e.find("*").addBack() : e;
                        f = f.map(function() {
                            var t = n(this);
                            return {
                                el: t,
                                start: i(this)
                            }
                        }), o = function() {
                            n.each(u, function(n, i) {
                                t[i] && e[i + "Class"](t[i])
                            })
                        }, o(), f = f.map(function() {
                            return this.end = i(this.el[0]), this.diff = r(this.start, this.end), this
                        }), e.attr("class", h), f = f.map(function() {
                            var i = this,
                                t = n.Deferred(),
                                r = n.extend({}, s, {
                                    queue: !1,
                                    complete: function() {
                                        t.resolve(i)
                                    }
                                });
                            return this.el.animate(this.diff, r), t.promise()
                        }), n.when.apply(n, f.get()).done(function() {
                            o(), n.each(arguments, function() {
                                var t = this.el;
                                n.each(this.diff, function(n) {
                                    t.css(n, "")
                                })
                            }), s.complete.call(e[0])
                        })
                    })
                }, n.fn.extend({
                    addClass: function(t) {
                        return function(i, r, u, f) {
                            return r ? n.effects.animateClass.call(this, {
                                add: i
                            }, r, u, f) : t.apply(this, arguments)
                        }
                    }(n.fn.addClass),
                    removeClass: function(t) {
                        return function(i, r, u, f) {
                            return arguments.length > 1 ? n.effects.animateClass.call(this, {
                                remove: i
                            }, r, u, f) : t.apply(this, arguments)
                        }
                    }(n.fn.removeClass),
                    toggleClass: function(i) {
                        return function(r, u, f, e, o) {
                            return "boolean" == typeof u || u === t ? f ? n.effects.animateClass.call(this, u ? {
                                add: r
                            } : {
                                remove: r
                            }, f, e, o) : i.apply(this, arguments) : n.effects.animateClass.call(this, {
                                toggle: r
                            }, u, f, e)
                        }
                    }(n.fn.toggleClass),
                    switchClass: function(t, i, r, u, f) {
                        return n.effects.animateClass.call(this, {
                            add: i,
                            remove: t
                        }, r, u, f)
                    }
                })
            }(),
            function() {
                function r(t, i, r, u) {
                    return n.isPlainObject(t) && (i = t, t = t.effect), t = {
                        effect: t
                    }, null == i && (i = {}), n.isFunction(i) && (u = i, r = null, i = {}), ("number" == typeof i || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : "number" == typeof r ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t
                }

                function u(t) {
                    return !t || "number" == typeof t || n.fx.speeds[t] ? !0 : "string" != typeof t || n.effects.effect[t] ? n.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
                }
                n.extend(n.effects, {
                    version: "1.10.4",
                    save: function(n, t) {
                        for (var r = 0; t.length > r; r++) null !== t[r] && n.data(i + t[r], n[0].style[t[r]])
                    },
                    restore: function(n, r) {
                        for (var f, u = 0; r.length > u; u++) null !== r[u] && (f = n.data(i + r[u]), f === t && (f = ""), n.css(r[u], f))
                    },
                    setMode: function(n, t) {
                        return "toggle" === t && (t = n.is(":hidden") ? "show" : "hide"), t
                    },
                    getBaseline: function(n, t) {
                        var i, r;
                        switch (n[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = n[0] / t.height
                        }
                        switch (n[1]) {
                            case "left":
                                r = 0;
                                break;
                            case "center":
                                r = .5;
                                break;
                            case "right":
                                r = 1;
                                break;
                            default:
                                r = n[1] / t.width
                        }
                        return {
                            x: r,
                            y: i
                        }
                    },
                    createWrapper: function(t) {
                        if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                        var i = {
                                width: t.outerWidth(!0),
                                height: t.outerHeight(!0),
                                float: t.css("float")
                            },
                            u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            f = {
                                width: t.width(),
                                height: t.height()
                            },
                            r = document.activeElement;
                        try {
                            r.id
                        } catch (e) {
                            r = document.body
                        }
                        return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).focus(), u = t.parent(), "static" === t.css("position") ? (u.css({
                            position: "relative"
                        }), t.css({
                            position: "relative"
                        })) : (n.extend(i, {
                            position: t.css("position"),
                            zIndex: t.css("z-index")
                        }), n.each(["top", "left", "bottom", "right"], function(n, r) {
                            i[r] = t.css(r), isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                        }), t.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), t.css(f), u.css(i).show()
                    },
                    removeWrapper: function(t) {
                        var i = document.activeElement;
                        return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus()), t
                    },
                    setTransition: function(t, i, r, u) {
                        return u = u || {}, n.each(i, function(n, i) {
                            var f = t.cssUnit(i);
                            f[0] > 0 && (u[i] = f[0] * r + f[1])
                        }), u
                    }
                }), n.fn.extend({
                    effect: function() {
                        function i(i) {
                            function f() {
                                n.isFunction(o) && o.call(r[0]), n.isFunction(i) && i()
                            }
                            var r = n(this),
                                o = t.complete,
                                u = t.mode;
                            (r.is(":hidden") ? "hide" === u : "show" === u) ? (r[u](), f()) : e.call(r[0], t, f)
                        }
                        var t = r.apply(this, arguments),
                            u = t.mode,
                            f = t.queue,
                            e = n.effects.effect[t.effect];
                        return n.fx.off || !e ? u ? this[u](t.duration, t.complete) : this.each(function() {
                            t.complete && t.complete.call(this)
                        }) : f === !1 ? this.each(i) : this.queue(f || "fx", i)
                    },
                    show: function(n) {
                        return function(t) {
                            if (u(t)) return n.apply(this, arguments);
                            var i = r.apply(this, arguments);
                            return i.mode = "show", this.effect.call(this, i)
                        }
                    }(n.fn.show),
                    hide: function(n) {
                        return function(t) {
                            if (u(t)) return n.apply(this, arguments);
                            var i = r.apply(this, arguments);
                            return i.mode = "hide", this.effect.call(this, i)
                        }
                    }(n.fn.hide),
                    toggle: function(n) {
                        return function(t) {
                            if (u(t) || "boolean" == typeof t) return n.apply(this, arguments);
                            var i = r.apply(this, arguments);
                            return i.mode = "toggle", this.effect.call(this, i)
                        }
                    }(n.fn.toggle),
                    cssUnit: function(t) {
                        var i = this.css(t),
                            r = [];
                        return n.each(["em", "px", "%", "pt"], function(n, t) {
                            i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                        }), r
                    }
                })
            }(),
            function() {
                var t = {};
                n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, i) {
                    t[i] = function(t) {
                        return Math.pow(t, n + 2)
                    }
                }), n.extend(t, {
                    Sine: function(n) {
                        return 1 - Math.cos(n * Math.PI / 2)
                    },
                    Circ: function(n) {
                        return 1 - Math.sqrt(1 - n * n)
                    },
                    Elastic: function(n) {
                        return 0 === n || 1 === n ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin((80 * (n - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(n) {
                        return n * n * (3 * n - 2)
                    },
                    Bounce: function(n) {
                        for (var t, i = 4;
                            ((t = Math.pow(2, --i)) - 1) / 11 > n;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - n, 2)
                    }
                }), n.each(t, function(t, i) {
                    n.easing["easeIn" + t] = i, n.easing["easeOut" + t] = function(n) {
                        return 1 - i(1 - n)
                    }, n.easing["easeInOut" + t] = function(n) {
                        return .5 > n ? i(2 * n) / 2 : 1 - i(-2 * n + 2) / 2
                    }
                })
            }()
    }(jQuery), function(n) {
        var r = 0,
            t = {},
            i = {};
        t.height = t.paddingTop = t.paddingBottom = t.borderTopWidth = t.borderBottomWidth = "hide", i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show", n.widget("ui.accordion", {
            version: "1.10.4",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            _create: function() {
                var t = this.options;
                this.prevShow = this.prevHide = n(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : n(),
                    content: this.active.length ? this.active.next() : n()
                }
            },
            _createIcons: function() {
                var t = this.options.icons;
                t && (n("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var n;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), this._destroyIcons(), n = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), "content" !== this.options.heightStyle && n.css("height", "")
            },
            _setOption: function(n, t) {
                return "active" === n ? void this._activate(t) : ("event" === n && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(n, t), "collapsible" !== n || t || this.options.active !== !1 || this._activate(0), "icons" === n && (this._destroyIcons(), t && this._createIcons()), void("disabled" === n && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)))
            },
            _keydown: function(t) {
                if (!t.altKey && !t.ctrlKey) {
                    var i = n.ui.keyCode,
                        u = this.headers.length,
                        f = this.headers.index(t.target),
                        r = !1;
                    switch (t.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            r = this.headers[(f + 1) % u];
                            break;
                        case i.LEFT:
                        case i.UP:
                            r = this.headers[(f - 1 + u) % u];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(t);
                            break;
                        case i.HOME:
                            r = this.headers[0];
                            break;
                        case i.END:
                            r = this.headers[u - 1]
                    }
                    r && (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), r.focus(), t.preventDefault())
                }
            },
            _panelKeyDown: function(t) {
                t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().focus()
            },
            refresh: function() {
                var t = this.options;
                this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = n()) : t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
            },
            _refresh: function() {
                var t, i = this.options,
                    u = i.heightStyle,
                    e = this.element.parent(),
                    f = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++r);
                this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(t) {
                    var i = n(this),
                        r = i.attr("id"),
                        e = i.next(),
                        u = e.attr("id");
                    r || (r = f + "-header-" + t, i.attr("id", r)), u || (u = f + "-panel-" + t, e.attr("id", u)), i.attr("aria-controls", u), e.attr("aria-labelledby", r)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === u ? (t = e.height(), this.element.siblings(":visible").each(function() {
                    var i = n(this),
                        r = i.css("position");
                    "absolute" !== r && "fixed" !== r && (t -= i.outerHeight(!0))
                }), this.headers.each(function() {
                    t -= n(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
                }).css("overflow", "auto")) : "auto" === u && (t = 0, this.headers.next().each(function() {
                    t = Math.max(t, n(this).css("height", "").height())
                }).height(t))
            },
            _activate: function(t) {
                var i = this._findActive(t)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: n.noop
                }))
            },
            _findActive: function(t) {
                return "number" == typeof t ? this.headers.eq(t) : n()
            },
            _setupEvents: function(t) {
                var i = {
                    keydown: "_keydown"
                };
                t && n.each(t.split(" "), function(n, t) {
                    i[t] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(t) {
                var i = this.options,
                    u = this.active,
                    r = n(t.currentTarget),
                    f = r[0] === u[0],
                    e = f && i.collapsible,
                    s = e ? n() : r.next(),
                    h = u.next(),
                    o = {
                        oldHeader: u,
                        oldPanel: h,
                        newHeader: e ? n() : r,
                        newPanel: s
                    };
                t.preventDefault(), f && !i.collapsible || this._trigger("beforeActivate", t, o) === !1 || (i.active = e ? !1 : this.headers.index(r), this.active = f ? n() : r, this._toggle(o), u.removeClass("ui-accordion-header-active ui-state-active"), i.icons && u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), f || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), r.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(t) {
                var r = t.newPanel,
                    i = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = r, this.prevHide = i, this.options.animate ? this._animate(r, i, t) : (i.hide(), r.show(), this._toggleComplete(t)), i.attr({
                    "aria-hidden": "true"
                }), i.prev().attr("aria-selected", "false"), r.length && i.length ? i.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : r.length && this.headers.filter(function() {
                    return 0 === n(this).attr("tabIndex")
                }).attr("tabIndex", -1), r.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    tabIndex: 0,
                    "aria-expanded": "true"
                })
            },
            _animate: function(n, r, u) {
                var l, f, e, a = this,
                    h = 0,
                    v = n.length && (!r.length || n.index() < r.index()),
                    s = this.options.animate || {},
                    o = v && s.down || s,
                    c = function() {
                        a._toggleComplete(u)
                    };
                return "number" == typeof o && (e = o), "string" == typeof o && (f = o), f = f || o.easing || s.easing, e = e || o.duration || s.duration, r.length ? n.length ? (l = n.show().outerHeight(), r.animate(t, {
                    duration: e,
                    easing: f,
                    step: function(n, t) {
                        t.now = Math.round(n)
                    }
                }), void n.hide().animate(i, {
                    duration: e,
                    easing: f,
                    complete: c,
                    step: function(n, t) {
                        t.now = Math.round(n), "height" !== t.prop ? h += t.now : "content" !== a.options.heightStyle && (t.now = Math.round(l - r.outerHeight() - h), h = 0)
                    }
                })) : r.animate(t, e, f, c) : n.animate(i, e, f, c)
            },
            _toggleComplete: function(n) {
                var t = n.oldPanel;
                t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, n)
            }
        })
    }(jQuery), function(n) {
        n.widget("ui.autocomplete", {
            version: "1.10.4",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var t, i, r, u = this.element[0].nodeName.toLowerCase(),
                    f = "textarea" === u,
                    e = "input" === u;
                this.isMultiLine = f ? !0 : e ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[f || e ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(u) {
                        if (this.element.prop("readOnly")) return t = !0, r = !0, void(i = !0);
                        t = !1, r = !1, i = !1;
                        var f = n.ui.keyCode;
                        switch (u.keyCode) {
                            case f.PAGE_UP:
                                t = !0, this._move("previousPage", u);
                                break;
                            case f.PAGE_DOWN:
                                t = !0, this._move("nextPage", u);
                                break;
                            case f.UP:
                                t = !0, this._keyEvent("previous", u);
                                break;
                            case f.DOWN:
                                t = !0, this._keyEvent("next", u);
                                break;
                            case f.ENTER:
                            case f.NUMPAD_ENTER:
                                this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u));
                                break;
                            case f.TAB:
                                this.menu.active && this.menu.select(u);
                                break;
                            case f.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(u), u.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(u)
                        }
                    },
                    keypress: function(r) {
                        if (t) return t = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault());
                        if (!i) {
                            var u = n.ui.keyCode;
                            switch (r.keyCode) {
                                case u.PAGE_UP:
                                    this._move("previousPage", r);
                                    break;
                                case u.PAGE_DOWN:
                                    this._move("nextPage", r);
                                    break;
                                case u.UP:
                                    this._keyEvent("previous", r);
                                    break;
                                case u.DOWN:
                                    this._keyEvent("next", r)
                            }
                        }
                    },
                    input: function(n) {
                        return r ? (r = !1, void n.preventDefault()) : void this._searchTimeout(n)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(n) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(n), void this._change(n))
                    }
                }), this._initSource(), this.menu = n("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().data("ui-menu"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var i = this.menu.element[0];
                        n(t.target).closest(".ui-menu-item").length || this._delay(function() {
                            var t = this;
                            this.document.one("mousedown", function(r) {
                                r.target === t.element[0] || r.target === i || n.contains(i, r.target) || t.close()
                            })
                        })
                    },
                    menufocus: function(t, i) {
                        if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                            n(t.target).trigger(t.originalEvent)
                        });
                        var r = i.item.data("ui-autocomplete-item");
                        !1 !== this._trigger("focus", t, {
                            item: r
                        }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                    },
                    menuselect: function(n, t) {
                        var i = t.item.data("ui-autocomplete-item"),
                            r = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                            this.previous = r, this.selectedItem = i
                        })), !1 !== this._trigger("select", n, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(n), this.selectedItem = i
                    }
                }), this.liveRegion = n("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(n, t) {
                this._super(n, t), "source" === n && this._initSource(), "appendTo" === n && this.menu.element.appendTo(this._appendTo()), "disabled" === n && t && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var i, r, t = this;
                n.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, r) {
                    r(n.ui.autocomplete.filter(i, t.term))
                }) : "string" == typeof this.options.source ? (r = this.options.source, this.source = function(i, u) {
                    t.xhr && t.xhr.abort(), t.xhr = n.ajax({
                        url: r,
                        data: i,
                        dataType: "json",
                        success: function(n) {
                            u(n)
                        },
                        error: function() {
                            u([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(n) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, n))
                }, this.options.delay)
            },
            search: function(n, t) {
                return n = null != n ? n : this._value(), this.term = this._value(), n.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(n) : void 0
            },
            _search: function(n) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: n
                }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return n.proxy(function(n) {
                    t === this.requestIndex && this.__response(n), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(n) {
                n && (n = this._normalize(n)), this._trigger("response", null, {
                    content: n
                }), !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close()
            },
            close: function(n) {
                this.cancelSearch = !0, this._close(n)
            },
            _close: function(n) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n))
            },
            _change: function(n) {
                this.previous !== this._value() && this._trigger("change", n, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : n.extend({
                        label: t.label || t.value,
                        value: t.value || t.label
                    }, t)
                })
            },
            _suggest: function(t) {
                var i = this.menu.element.empty();
                this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(n.extend({ of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var n = this.menu.element;
                n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, i) {
                var r = this;
                n.each(i, function(n, i) {
                    r._renderItemData(t, i)
                })
            },
            _renderItemData: function(n, t) {
                return this._renderItem(n, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function(t, i) {
                return n("<li>").append(n("<a>").text(i.label)).appendTo(t)
            },
            _move: function(n, t) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n) ? (this._value(this.term), void this.menu.blur()) : void this.menu[n](t) : void this.search(null, t)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(n, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault())
            }
        }), n.extend(n.ui.autocomplete, {
            escapeRegex: function(n) {
                return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, i) {
                var r = RegExp(n.ui.autocomplete.escapeRegex(i), "i");
                return n.grep(t, function(n) {
                    return r.test(n.label || n.value || n)
                })
            }
        }), n.widget("ui.autocomplete", n.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(n) {
                        return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(n) {
                var t;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = n && n.length ? this.options.messages.results(n.length) : this.options.messages.noResults, this.liveRegion.text(t))
            }
        })
    }(jQuery), function(n) {
        var t, i = "ui-button ui-widget ui-state-default ui-corner-all",
            r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            f = function() {
                var t = n(this);
                setTimeout(function() {
                    t.find(":ui-button").button("refresh")
                }, 1)
            },
            u = function(t) {
                var i = t.name,
                    r = t.form,
                    u = n([]);
                return i && (i = i.replace(/'/g, "\\'"), u = r ? n(r).find("[name='" + i + "']") : n("[name='" + i + "']", t.ownerDocument).filter(function() {
                    return !this.form
                })), u
            };
        n.widget("ui.button", {
            version: "1.10.4",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var e = this,
                    r = this.options,
                    o = "checkbox" === this.type || "radio" === this.type,
                    s = o ? "" : "ui-state-active";
                null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    r.disabled || this === t && n(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    r.disabled || n(this).removeClass(s)
                }).bind("click" + this.eventNamespace, function(n) {
                    r.disabled && (n.preventDefault(), n.stopImmediatePropagation())
                }), this._on({
                    focus: function() {
                        this.buttonElement.addClass("ui-state-focus")
                    },
                    blur: function() {
                        this.buttonElement.removeClass("ui-state-focus")
                    }
                }), o && this.element.bind("change" + this.eventNamespace, function() {
                    e.refresh()
                }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (r.disabled) return !1
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (r.disabled) return !1;
                    n(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
                    var t = e.element[0];
                    u(t).not(t).map(function() {
                        return n(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    return r.disabled ? !1 : (n(this).addClass("ui-state-active"), t = this, void e.document.one("mouseup", function() {
                        t = null
                    }))
                }).bind("mouseup" + this.eventNamespace, function() {
                    return r.disabled ? !1 : void n(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(t) {
                    return r.disabled ? !1 : void((t.keyCode === n.ui.keyCode.SPACE || t.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active"))
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    n(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                    t.keyCode === n.ui.keyCode.SPACE && n(this).click()
                })), this._setOption("disabled", r.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                var n, t, i;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (n = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = n.find(t), this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(), this.buttonElement = n.filter(t), this.buttonElement.length || (this.buttonElement = n.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(i + " ui-state-active " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(n, t) {
                return this._super(n, t), "disabled" === n ? (this.element.prop("disabled", !!t), void(t && this.buttonElement.removeClass("ui-state-focus"))) : void this._resetButton()
            },
            refresh: function() {
                var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? u(this.element[0]).each(function() {
                    n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
                var i = this.buttonElement.removeClass(r),
                    e = n("<span><\/span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),
                    t = this.options.icons,
                    f = t.primary && t.secondary,
                    u = [];
                t.primary || t.secondary ? (this.options.text && u.push("ui-button-text-icon" + (f ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"), t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"), this.options.text || (u.push(f ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || i.attr("title", n.trim(e)))) : u.push("ui-button-text-only"), i.addClass(u.join(" "))
            }
        }), n.widget("ui.buttonset", {
            version: "1.10.4",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(n, t) {
                "disabled" === n && this.buttons.button("option", n, t), this._super(n, t)
            },
            refresh: function() {
                var t = "rtl" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
    }(jQuery), function(n, t) {
        function f() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, n.extend(this._defaults, this.regional[""]), this.dpDiv = e(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
        }

        function e(t) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(i, "mouseout", function() {
                n(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && n(this).removeClass("ui-datepicker-next-hover")
            }).delegate(i, "mouseover", function() {
                n.datepicker._isDisabledDatepicker(u.inline ? t.parent()[0] : u.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && n(this).addClass("ui-datepicker-next-hover"))
            })
        }

        function r(t, i) {
            n.extend(t, i);
            for (var r in i) null == i[r] && (t[r] = i[r]);
            return t
        }
        n.extend(n.ui, {
            datepicker: {
                version: "1.10.4"
            }
        });
        var u, i = "datepicker";
        n.extend(f.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(n) {
                return r(this._defaults, n || {}), this
            },
            _attachDatepicker: function(t, i) {
                var r, f, u;
                r = t.nodeName.toLowerCase(), f = "div" === r || "span" === r, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), u = this._newInst(n(t), f), u.settings = n.extend({}, i || {}), "input" === r ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u)
            },
            _newInst: function(t, i) {
                var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: r,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? e(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, r) {
                var u = n(t);
                r.append = n([]), r.trigger = n([]), u.hasClass(this.markerClassName) || (this._attachments(u, r), u.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(r), n.data(t, i, r), r.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, i) {
                var u, r, f, e = this._get(i, "appendText"),
                    o = this._get(i, "isRTL");
                i.append && i.append.remove(), e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), u = this._get(i, "showOn"), ("focus" === u || "both" === u) && t.focus(this._showDatepicker), ("button" === u || "both" === u) && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: r,
                    title: r
                }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({
                    src: f,
                    alt: r,
                    title: r
                }) : r)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
                    return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1
                }))
            },
            _autoSize: function(n) {
                if (this._get(n, "autoSize") && !n.inline) {
                    var r, u, f, t, i = new Date(2009, 11, 20),
                        e = this._get(n, "dateFormat");
                    e.match(/[DM]/) && (r = function(n) {
                        for (u = 0, f = 0, t = 0; n.length > t; t++) n[t].length > u && (u = n[t].length, f = t);
                        return f
                    }, i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))), i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay())), n.input.attr("size", this._formatDate(n, i).length)
                }
            },
            _inlineDatepicker: function(t, r) {
                var u = n(t);
                u.hasClass(this.markerClassName) || (u.addClass(this.markerClassName).append(r.dpDiv), n.data(t, i, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, u, f, e, o) {
                var h, c, l, a, v, s = this._dialogInst;
                return s || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = n("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), n("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, n.data(this._dialogInput[0], i, s)), r(s.settings, e || {}), u = u && u.constructor === Date ? this._formatDate(s, u) : u, this._dialogInput.val(u), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, l = document.documentElement.clientHeight, a = document.documentElement.scrollLeft || document.body.scrollLeft, v = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + a, l / 2 - 150 + v]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = f, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], i, s), this
            },
            _destroyDatepicker: function(t) {
                var r, u = n(t),
                    f = n.data(t, i);
                u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), n.removeData(t, i), "input" === r ? (f.append.remove(), f.trigger.remove(), u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === r || "span" === r) && u.removeClass(this.markerClassName).empty())
            },
            _enableDatepicker: function(t) {
                var r, u, f = n(t),
                    e = n.data(t, i);
                f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), "input" === r ? (t.disabled = !1, e.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === r || "span" === r) && (u = f.children("." + this._inlineClass), u.children().removeClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
                    return n === t ? null : n
                }))
            },
            _disableDatepicker: function(t) {
                var r, u, f = n(t),
                    e = n.data(t, i);
                f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), "input" === r ? (t.disabled = !0, e.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === r || "span" === r) && (u = f.children("." + this._inlineClass), u.children().addClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
                    return n === t ? null : n
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function(n) {
                if (!n) return !1;
                for (var t = 0; this._disabledInputs.length > t; t++)
                    if (this._disabledInputs[t] === n) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return n.data(t, i)
                } catch (r) {
                    throw "Missing instance data for this datepicker";
                }
            },
            _optionDatepicker: function(i, u, f) {
                var o, c, s, h, e = this._getInst(i);
                return 2 === arguments.length && "string" == typeof u ? "defaults" === u ? n.extend({}, n.datepicker._defaults) : e ? "all" === u ? n.extend({}, e.settings) : this._get(e, u) : null : (o = u || {}, "string" == typeof u && (o = {}, o[u] = f), e && (this._curInst === e && this._hideDatepicker(), c = this._getDateDatepicker(i, !0), s = this._getMinMaxDate(e, "min"), h = this._getMinMaxDate(e, "max"), r(e.settings, o), null !== s && o.dateFormat !== t && o.minDate === t && (e.settings.minDate = this._formatDate(e, s)), null !== h && o.dateFormat !== t && o.maxDate === t && (e.settings.maxDate = this._formatDate(e, h)), "disabled" in o && (o.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(n(i), e), this._autoSize(e), this._setDate(e, c), this._updateAlternate(e), this._updateDatepicker(e)), t)
            },
            _changeDatepicker: function(n, t, i) {
                this._optionDatepicker(n, t, i)
            },
            _refreshDatepicker: function(n) {
                var t = this._getInst(n);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function(n, t) {
                var i = this._getInst(n);
                i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(n, t) {
                var i = this._getInst(n);
                return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
            },
            _doKeyDown: function(t) {
                var u, e, f, i = n.datepicker._getInst(t.target),
                    r = !0,
                    o = i.dpDiv.is(".ui-datepicker-rtl");
                if (i._keyEvent = !0, n.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        n.datepicker._hideDatepicker(), r = !1;
                        break;
                    case 13:
                        return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv), f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]), u = n.datepicker._get(i, "onSelect"), u ? (e = n.datepicker._formatDate(i), u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(), !1;
                    case 27:
                        n.datepicker._hideDatepicker();
                        break;
                    case 33:
                        n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 34:
                        n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        r = !1
                } else 36 === t.keyCode && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
                r && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(i) {
                var r, u, f = n.datepicker._getInst(i.target);
                return n.datepicker._get(f, "constrainInput") ? (r = n.datepicker._possibleChars(n.datepicker._get(f, "dateFormat")), u = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > u || !r || r.indexOf(u) > -1) : t
            },
            _doKeyUp: function(t) {
                var r, i = n.datepicker._getInst(t.target);
                if (i.input.val() !== i.lastVal) try {
                    r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i)), r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i))
                } catch (u) {}
                return !0
            },
            _showDatepicker: function(t) {
                if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
                    var i, o, s, u, f, e, h;
                    i = n.datepicker._getInst(t), n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])), o = n.datepicker._get(i, "beforeShow"), s = o ? o.apply(t, [t, i]) : {}, s !== !1 && (r(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), u = !1, n(t).parents().each(function() {
                        return u |= "fixed" === n(this).css("position"), !u
                    }), f = {
                        left: n.datepicker._pos[0],
                        top: n.datepicker._pos[1]
                    }, n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), n.datepicker._updateDatepicker(i), f = n.datepicker._checkOffset(i, f, u), i.dpDiv.css({
                        position: n.datepicker._inDialog && n.blockUI ? "static" : u ? "fixed" : "absolute",
                        display: "none",
                        left: f.left + "px",
                        top: f.top + "px"
                    }), i.inline || (e = n.datepicker._get(i, "showAnim"), h = n.datepicker._get(i, "duration"), i.dpDiv.zIndex(n(t).zIndex() + 1), n.datepicker._datepickerShowing = !0, n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null), n.datepicker._shouldFocusInput(i) && i.input.focus(), n.datepicker._curInst = i))
                }
            },
            _updateDatepicker: function(t) {
                this.maxRows = 4, u = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var i, r = this._getNumberOfMonths(t),
                    f = r[1],
                    e = 17;
                t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), f > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", e * f + "em"), t.dpDiv[(1 !== r[0] || 1 !== r[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function() {
                    i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(n) {
                return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus")
            },
            _checkOffset: function(t, i, r) {
                var u = t.dpDiv.outerWidth(),
                    f = t.dpDiv.outerHeight(),
                    h = t.input ? t.input.outerWidth() : 0,
                    o = t.input ? t.input.outerHeight() : 0,
                    e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()),
                    s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
                return i.left -= this._get(t, "isRTL") ? u - h : 0, i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0, i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0), i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0), i
            },
            _findPos: function(t) {
                for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || n.expr.filters.hidden(t));) t = t[u ? "previousSibling" : "nextSibling"];
                return i = n(t).offset(), [i.left, i.top]
            },
            _hideDatepicker: function(t) {
                var u, e, f, o, r = this._curInst;
                !r || t && r !== n.data(t, i) || this._datepickerShowing && (u = this._get(r, "showAnim"), e = this._get(r, "duration"), f = function() {
                    n.datepicker._tidyDialog(r)
                }, n.effects && (n.effects.effect[u] || n.effects[u]) ? r.dpDiv.hide(u, n.datepicker._get(r, "showOptions"), e, f) : r.dpDiv["slideDown" === u ? "slideUp" : "fadeIn" === u ? "fadeOut" : "hide"](u ? e : null, f), u || f(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(n) {
                n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if (n.datepicker._curInst) {
                    var i = n(t.target),
                        r = n.datepicker._getInst(i[0]);
                    (i[0].id === n.datepicker._mainDivId || 0 !== i.parents("#" + n.datepicker._mainDivId).length || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, i, r) {
                var f = n(t),
                    u = this._getInst(f[0]);
                this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + ("M" === r ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u))
            },
            _gotoToday: function(t) {
                var r, u = n(t),
                    i = this._getInst(u[0]);
                this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear()), this._notifyChange(i), this._adjustDate(u)
            },
            _selectMonthYear: function(t, i, r) {
                var f = n(t),
                    u = this._getInst(f[0]);
                u["selected" + ("M" === r ? "Month" : "Year")] = u["draw" + ("M" === r ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(u), this._adjustDate(f)
            },
            _selectDay: function(t, i, r, u) {
                var f, e = n(t);
                n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
            },
            _clearDate: function(t) {
                var i = n(t);
                this._selectDate(i, "")
            },
            _selectDate: function(t, i) {
                var u, f = n(t),
                    r = this._getInst(f[0]);
                i = null != i ? i : this._formatDate(r), r.input && r.input.val(i), this._updateAlternate(r), u = this._get(r, "onSelect"), u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var i, r, u, f = this._get(t, "altField");
                f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), u = this.formatDate(i, r, this._getFormatConfig(t)), n(f).each(function() {
                    n(this).val(u)
                }))
            },
            noWeekends: function(n) {
                var t = n.getDay();
                return [t > 0 && 6 > t, ""]
            },
            iso8601Week: function(n) {
                var i, t = new Date(n.getTime());
                return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
            },
            parseDate: function(i, r, u) {
                if (null == i || null == r) throw "Invalid arguments";
                if (r = "object" == typeof r ? "" + r : r + "", "" === r) return null;
                for (var v, y, f, e = 0, p = (u ? u.shortYearCutoff : null) || this._defaults.shortYearCutoff, g = "string" != typeof p ? p : (new Date).getFullYear() % 100 + parseInt(p, 10), nt = (u ? u.dayNamesShort : null) || this._defaults.dayNamesShort, tt = (u ? u.dayNames : null) || this._defaults.dayNames, it = (u ? u.monthNamesShort : null) || this._defaults.monthNamesShort, rt = (u ? u.monthNames : null) || this._defaults.monthNames, o = -1, s = -1, c = -1, w = -1, b = !1, a = function(n) {
                        var t = i.length > h + 1 && i.charAt(h + 1) === n;
                        return t && h++, t
                    }, l = function(n) {
                        var i = a(n),
                            u = "@" === n ? 14 : "!" === n ? 20 : "y" === n && i ? 4 : "o" === n ? 3 : 2,
                            f = RegExp("^\\d{1," + u + "}"),
                            t = r.substring(e).match(f);
                        if (!t) throw "Missing number at position " + e;
                        return e += t[0].length, parseInt(t[0], 10)
                    }, d = function(i, u, f) {
                        var o = -1,
                            s = n.map(a(i) ? f : u, function(n, t) {
                                return [
                                    [t, n]
                                ]
                            }).sort(function(n, t) {
                                return -(n[1].length - t[1].length)
                            });
                        if (n.each(s, function(n, i) {
                                var u = i[1];
                                return r.substr(e, u.length).toLowerCase() === u.toLowerCase() ? (o = i[0], e += u.length, !1) : t
                            }), -1 !== o) return o + 1;
                        throw "Unknown name at position " + e;
                    }, k = function() {
                        if (r.charAt(e) !== i.charAt(h)) throw "Unexpected literal at position " + e;
                        e++
                    }, h = 0; i.length > h; h++)
                    if (b) "'" !== i.charAt(h) || a("'") ? k() : b = !1;
                    else switch (i.charAt(h)) {
                        case "d":
                            c = l("d");
                            break;
                        case "D":
                            d("D", nt, tt);
                            break;
                        case "o":
                            w = l("o");
                            break;
                        case "m":
                            s = l("m");
                            break;
                        case "M":
                            s = d("M", it, rt);
                            break;
                        case "y":
                            o = l("y");
                            break;
                        case "@":
                            f = new Date(l("@")), o = f.getFullYear(), s = f.getMonth() + 1, c = f.getDate();
                            break;
                        case "!":
                            f = new Date((l("!") - this._ticksTo1970) / 1e4), o = f.getFullYear(), s = f.getMonth() + 1, c = f.getDate();
                            break;
                        case "'":
                            a("'") ? k() : b = !0;
                            break;
                        default:
                            k()
                    }
                if (r.length > e && (y = r.substr(e), !/^\s+/.test(y))) throw "Extra/unparsed characters found in date: " + y;
                if (-1 === o ? o = (new Date).getFullYear() : 100 > o && (o += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g >= o ? 0 : -100)), w > -1)
                    for (s = 1, c = w; v = this._getDaysInMonth(o, s - 1), !(v >= c);) s++, c -= v;
                if (f = this._daylightSavingAdjust(new Date(o, s - 1, c)), f.getFullYear() !== o || f.getMonth() + 1 !== s || f.getDate() !== c) throw "Invalid date";
                return f
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function(n, t, i) {
                if (!t) return "";
                var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    c = (i ? i.dayNames : null) || this._defaults.dayNames,
                    l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (i ? i.monthNames : null) || this._defaults.monthNames,
                    f = function(t) {
                        var i = n.length > u + 1 && n.charAt(u + 1) === t;
                        return i && u++, i
                    },
                    e = function(n, t, i) {
                        var r = "" + t;
                        if (f(n))
                            for (; i > r.length;) r = "0" + r;
                        return r
                    },
                    s = function(n, t, i, r) {
                        return f(n) ? r[t] : i[t]
                    },
                    r = "",
                    o = !1;
                if (t)
                    for (u = 0; n.length > u; u++)
                        if (o) "'" !== n.charAt(u) || f("'") ? r += n.charAt(u) : o = !1;
                        else switch (n.charAt(u)) {
                            case "d":
                                r += e("d", t.getDate(), 2);
                                break;
                            case "D":
                                r += s("D", t.getDay(), h, c);
                                break;
                            case "o":
                                r += e("o", Math.round((+new Date(t.getFullYear(), t.getMonth(), t.getDate()) - +new Date(t.getFullYear(), 0, 0)) / 864e5), 3);
                                break;
                            case "m":
                                r += e("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                r += s("M", t.getMonth(), l, a);
                                break;
                            case "y":
                                r += f("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                r += t.getTime();
                                break;
                            case "!":
                                r += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                f("'") ? r += "'" : o = !0;
                                break;
                            default:
                                r += n.charAt(u)
                        }
                return r
            },
            _possibleChars: function(n) {
                for (var i = "", r = !1, u = function(i) {
                        var r = n.length > t + 1 && n.charAt(t + 1) === i;
                        return r && t++, r
                    }, t = 0; n.length > t; t++)
                    if (r) "'" !== n.charAt(t) || u("'") ? i += n.charAt(t) : r = !1;
                    else switch (n.charAt(t)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            u("'") ? i += "'" : r = !0;
                            break;
                        default:
                            i += n.charAt(t)
                    }
                return i
            },
            _get: function(n, i) {
                return n.settings[i] !== t ? n.settings[i] : this._defaults[i]
            },
            _setDateFromField: function(n, t) {
                if (n.input.val() !== n.lastVal) {
                    var f = this._get(n, "dateFormat"),
                        r = n.lastVal = n.input ? n.input.val() : null,
                        u = this._getDefaultDate(n),
                        i = u,
                        e = this._getFormatConfig(n);
                    try {
                        i = this.parseDate(f, r, e) || u
                    } catch (o) {
                        r = t ? "" : r
                    }
                    n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear(), n.currentDay = r ? i.getDate() : 0, n.currentMonth = r ? i.getMonth() : 0, n.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(n)
                }
            },
            _getDefaultDate: function(n) {
                return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
            },
            _determineDate: function(t, i, r) {
                var f = function(n) {
                        var t = new Date;
                        return t.setDate(t.getDate() + n), t
                    },
                    e = function(i) {
                        try {
                            return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                        } catch (h) {}
                        for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
                            switch (u[2] || "d") {
                                case "d":
                                case "D":
                                    r += parseInt(u[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    r += 7 * parseInt(u[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    e += parseInt(u[1], 10), r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                                    break;
                                case "y":
                                case "Y":
                                    f += parseInt(u[1], 10), r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                            }
                            u = s.exec(i)
                        }
                        return new Date(f, e, r)
                    },
                    u = null == i || "" === i ? r : "string" == typeof i ? e(i) : "number" == typeof i ? isNaN(i) ? r : f(i) : new Date(i.getTime());
                return u = u && "Invalid Date" == "" + u ? r : u, u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)), this._daylightSavingAdjust(u)
            },
            _daylightSavingAdjust: function(n) {
                return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null
            },
            _setDate: function(n, t, i) {
                var u = !t,
                    f = n.selectedMonth,
                    e = n.selectedYear,
                    r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
                n.selectedDay = n.currentDay = r.getDate(), n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth(), n.drawYear = n.selectedYear = n.currentYear = r.getFullYear(), f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n), this._adjustInstDate(n), n.input && n.input.val(u ? "" : this._formatDate(n))
            },
            _getDate: function(n) {
                return !n.currentYear || n.input && "" === n.input.val() ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
            },
            _attachHandlers: function(t) {
                var r = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            n.datepicker._adjustDate(i, -r, "M")
                        },
                        next: function() {
                            n.datepicker._adjustDate(i, +r, "M")
                        },
                        hide: function() {
                            n.datepicker._hideDatepicker()
                        },
                        today: function() {
                            n.datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return n.datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return n.datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(n) {
                var b, s, it, h, rt, k, ut, ft, ri, c, et, ui, fi, ei, oi, ot, g, si, st, nt, o, y, ht, p, ct, l, u, lt, at, vt, yt, pt, wt, i, bt, kt, d, a, tt, dt = new Date,
                    gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())),
                    f = this._get(n, "isRTL"),
                    li = this._get(n, "showButtonPanel"),
                    hi = this._get(n, "hideIfNoPrevNext"),
                    ni = this._get(n, "navigationAsDateFormat"),
                    e = this._getNumberOfMonths(n),
                    ai = this._get(n, "showCurrentAtPos"),
                    ci = this._get(n, "stepMonths"),
                    ti = 1 !== e[0] || 1 !== e[1],
                    ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)),
                    w = this._getMinMaxDate(n, "min"),
                    v = this._getMinMaxDate(n, "max"),
                    t = n.drawMonth - ai,
                    r = n.drawYear;
                if (0 > t && (t += 12, r--), v)
                    for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - e[0] * e[1] + 1, v.getDate())), b = w && w > b ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;) t--, 0 > t && (t = 11, r--);
                for (n.drawMonth = t, n.drawYear = r, s = this._get(n, "prevText"), s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s, it = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>", h = this._get(n, "nextText"), h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h, rt = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>", k = this._get(n, "currentText"), ut = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt, k = ni ? this.formatDate(k, ut, this._getFormatConfig(n)) : k, ft = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>", ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (f ? ft : "") + (this._isInRange(n, ut) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (f ? "" : ft) + "<\/div>" : "", c = parseInt(this._get(n, "firstDay"), 10), c = isNaN(c) ? 0 : c, et = this._get(n, "showWeek"), ui = this._get(n, "dayNames"), fi = this._get(n, "dayNamesMin"), ei = this._get(n, "monthNames"), oi = this._get(n, "monthNamesShort"), ot = this._get(n, "beforeShowDay"), g = this._get(n, "showOtherMonths"), si = this._get(n, "selectOtherMonths"), st = this._getDefaultDate(n), nt = "", y = 0; e[0] > y; y++) {
                    for (ht = "", this.maxRows = 4, p = 0; e[1] > p; p++) {
                        if (ct = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)), l = " ui-corner-all", u = "", ti) {
                            if (u += "<div class='ui-datepicker-group", e[1] > 1) switch (p) {
                                case 0:
                                    u += " ui-datepicker-group-first", l = " ui-corner-" + (f ? "right" : "left");
                                    break;
                                case e[1] - 1:
                                    u += " ui-datepicker-group-last", l = " ui-corner-" + (f ? "left" : "right");
                                    break;
                                default:
                                    u += " ui-datepicker-group-middle", l = ""
                            }
                            u += "'>"
                        }
                        for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && 0 === y ? f ? rt : it : "") + (/all|right/.test(l) && 0 === y ? f ? it : rt : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>", lt = et ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "", o = 0; 7 > o; o++) at = (o + c) % 7, lt += "<th" + ((o + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[at] + "'>" + fi[at] + "<\/span><\/th>";
                        for (u += lt + "<\/tr><\/thead><tbody>", vt = this._getDaysInMonth(r, t), r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, vt)), yt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7, pt = Math.ceil((yt + vt) / 7), wt = ti && this.maxRows > pt ? this.maxRows : pt, this.maxRows = wt, i = this._daylightSavingAdjust(new Date(r, t, 1 - yt)), bt = 0; wt > bt; bt++) {
                            for (u += "<tr>", kt = et ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "", o = 0; 7 > o; o++) d = ot ? ot.apply(n.input ? n.input[0] : null, [i]) : [!0, ""], a = i.getMonth() !== t, tt = a && !si || !d[0] || w && w > i || v && i > v, kt += "<td class='" + ((o + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === ct.getTime() && t === n.selectedMonth && n._keyEvent || st.getTime() === i.getTime() && st.getTime() === ct.getTime() ? " " + this._dayOverClass : "") + (tt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + (a && !g || !d[2] ? "" : " title='" + d[2].replace(/'/g, "&#39;") + "'") + (tt ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : tt ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>", i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
                            u += kt + "<\/tr>"
                        }
                        t++, t > 11 && (t = 0, r++), u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (e[0] > 0 && p === e[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : ""), ht += u
                    }
                    nt += ht
                }
                return nt += ri, n._keyEvent = !1, nt
            },
            _generateMonthYearHeader: function(n, t, i, r, u, f, e, o) {
                var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"),
                    b = this._get(n, "changeYear"),
                    g = this._get(n, "showMonthAfterYear"),
                    c = "<div class='ui-datepicker-title'>",
                    l = "";
                if (f || !w) l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>";
                else {
                    for (k = r && r.getFullYear() === i, d = u && u.getFullYear() === i, l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)(!k || h >= r.getMonth()) && (!d || u.getMonth() >= h) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
                    l += "<\/select>"
                }
                if (g || (c += l + (!f && w && b ? "" : "&#xa0;")), !n.yearshtml)
                    if (n.yearshtml = "", f || !b) c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
                    else {
                        for (v = this._get(n, "yearRange").split(":"), y = (new Date).getFullYear(), p = function(n) {
                                var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
                                return isNaN(t) ? y : t
                            }, s = p(v[0]), a = Math.max(s, p(v[1] || "")), s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; a >= s; s++) n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                        n.yearshtml += "<\/select>", c += n.yearshtml, n.yearshtml = null
                    }
                return c += this._get(n, "yearSuffix"), g && (c += (!f && w && b ? "" : "&#xa0;") + l), c += "<\/div>"
            },
            _adjustInstDate: function(n, t, i) {
                var u = n.drawYear + ("Y" === i ? t : 0),
                    f = n.drawMonth + ("M" === i ? t : 0),
                    e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + ("D" === i ? t : 0),
                    r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
                n.selectedDay = r.getDate(), n.drawMonth = n.selectedMonth = r.getMonth(), n.drawYear = n.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(n)
            },
            _restrictMinMax: function(n, t) {
                var i = this._getMinMaxDate(n, "min"),
                    r = this._getMinMaxDate(n, "max"),
                    u = i && i > t ? i : t;
                return r && u > r ? r : u
            },
            _notifyChange: function(n) {
                var t = this._get(n, "onChangeMonthYear");
                t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
            },
            _getNumberOfMonths: function(n) {
                var t = this._get(n, "numberOfMonths");
                return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
            },
            _getMinMaxDate: function(n, t) {
                return this._determineDate(n, this._get(n, t + "Date"), null)
            },
            _getDaysInMonth: function(n, t) {
                return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function(n, t) {
                return new Date(n, t, 1).getDay()
            },
            _canAdjustMonth: function(n, t, i, r) {
                var f = this._getNumberOfMonths(n),
                    u = this._daylightSavingAdjust(new Date(i, r + (0 > t ? t : f[0] * f[1]), 1));
                return 0 > t && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())), this._isInRange(n, u)
            },
            _isInRange: function(n, t) {
                var i, f, e = this._getMinMaxDate(n, "min"),
                    o = this._getMinMaxDate(n, "max"),
                    r = null,
                    u = null,
                    s = this._get(n, "yearRange");
                return s && (i = s.split(":"), f = (new Date).getFullYear(), r = parseInt(i[0], 10), u = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += f), i[1].match(/[+\-].*/) && (u += f)), (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || u >= t.getFullYear())
            },
            _getFormatConfig: function(n) {
                var t = this._get(n, "shortYearCutoff");
                return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(n, "dayNamesShort"),
                    dayNames: this._get(n, "dayNames"),
                    monthNamesShort: this._get(n, "monthNamesShort"),
                    monthNames: this._get(n, "monthNames")
                }
            },
            _formatDate: function(n, t, i, r) {
                t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
                var u = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
                return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
            }
        }), n.fn.datepicker = function(t) {
            if (!this.length) return this;
            n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick), n.datepicker.initialized = !0), 0 === n("#" + n.datepicker._mainDivId).length && n("body").append(n.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
                "string" == typeof t ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
            }) : n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i))
        }, n.datepicker = new f, n.datepicker.initialized = !1, n.datepicker.uuid = +new Date, n.datepicker.version = "1.10.4"
    }(jQuery), function(n) {
        var t = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            i = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        n.widget("ui.dialog", {
            version: "1.10.4",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(t) {
                        var i = n(this).css(t).offset().top;
                        0 > i && n(this).css("top", t.top - i)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && n.fn.draggable && this._makeDraggable(), this.options.resizable && n.fn.resizable && this._makeResizable(), this._isOpen = !1
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
            },
            _destroy: function() {
                var n, t = this.originalPosition;
                this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), n = t.parent.children().eq(t.index), n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: n.noop,
            enable: n.noop,
            close: function(t) {
                var i, r = this;
                if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                    if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length) try {
                        i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && n(i).blur()
                    } catch (u) {}
                    this._hide(this.uiDialog, this.options.hide, function() {
                        r._trigger("close", t)
                    })
                }
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(n, t) {
                var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
                return i && !t && this._trigger("focus", n), i
            },
            open: function() {
                var t = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = n(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                    t._focusTabbable(), t._trigger("focus")
                }), void this._trigger("open"))
            },
            _focusTabbable: function() {
                var n = this.element.find("[autofocus]");
                n.length || (n = this.element.find(":tabbable")), n.length || (n = this.uiDialogButtonPane.find(":tabbable")), n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable")), n.length || (n = this.uiDialog), n.eq(0).focus()
            },
            _keepFocus: function(t) {
                function i() {
                    var t = this.document[0].activeElement,
                        i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
                    i || this._focusTabbable()
                }
                t.preventDefault(), i.call(this), this._delay(i)
            },
            _createWrapper: function() {
                this.uiDialog = n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                    keydown: function(t) {
                        if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                        if (t.keyCode === n.ui.keyCode.TAB) {
                            var i = this.uiDialog.find(":tabbable"),
                                r = i.filter(":first"),
                                u = i.filter(":last");
                            t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== r[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (u.focus(1), t.preventDefault()) : (r.focus(1), t.preventDefault())
                        }
                    },
                    mousedown: function(n) {
                        this._moveToTop(n) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var t;
                this.uiDialogTitlebar = n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                    mousedown: function(t) {
                        n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                }), this.uiDialogTitlebarClose = n("<button type='button'><\/button>").button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                    click: function(n) {
                        n.preventDefault(), this.close(n)
                    }
                }), t = n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                    "aria-labelledby": t.attr("id")
                })
            },
            _title: function(n) {
                this.options.title || n.html("&#160;"), n.text(this.options.title)
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
            },
            _createButtons: function() {
                var i = this,
                    t = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), n.isEmptyObject(t) || n.isArray(t) && !t.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (n.each(t, function(t, r) {
                    var u, f;
                    r = n.isFunction(r) ? {
                        click: r,
                        text: t
                    } : r, r = n.extend({
                        type: "button"
                    }, r), u = r.click, r.click = function() {
                        u.apply(i.element[0], arguments)
                    }, f = {
                        icons: r.icons,
                        text: r.showText
                    }, delete r.icons, delete r.showText, n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                function i(n) {
                    return {
                        position: n.position,
                        offset: n.offset
                    }
                }
                var t = this,
                    r = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(r, u) {
                        n(this).addClass("ui-dialog-dragging"), t._blockFrames(), t._trigger("dragStart", r, i(u))
                    },
                    drag: function(n, r) {
                        t._trigger("drag", n, i(r))
                    },
                    stop: function(u, f) {
                        r.position = [f.position.left - t.document.scrollLeft(), f.position.top - t.document.scrollTop()], n(this).removeClass("ui-dialog-dragging"), t._unblockFrames(), t._trigger("dragStop", u, i(f))
                    }
                })
            },
            _makeResizable: function() {
                function r(n) {
                    return {
                        originalPosition: n.originalPosition,
                        originalSize: n.originalSize,
                        position: n.position,
                        size: n.size
                    }
                }
                var i = this,
                    t = this.options,
                    u = t.resizable,
                    f = this.uiDialog.css("position"),
                    e = "string" == typeof u ? u : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: t.maxWidth,
                    maxHeight: t.maxHeight,
                    minWidth: t.minWidth,
                    minHeight: this._minHeight(),
                    handles: e,
                    start: function(t, u) {
                        n(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", t, r(u))
                    },
                    resize: function(n, t) {
                        i._trigger("resize", n, r(t))
                    },
                    stop: function(u, f) {
                        t.height = n(this).height(), t.width = n(this).width(), n(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", u, r(f))
                    }
                }).css("position", f)
            },
            _minHeight: function() {
                var n = this.options;
                return "auto" === n.height ? n.minHeight : Math.min(n.minHeight, n.height)
            },
            _position: function() {
                var n = this.uiDialog.is(":visible");
                n || this.uiDialog.show(), this.uiDialog.position(this.options.position), n || this.uiDialog.hide()
            },
            _setOptions: function(r) {
                var e = this,
                    u = !1,
                    f = {};
                n.each(r, function(n, r) {
                    e._setOption(n, r), n in t && (u = !0), n in i && (f[n] = r)
                }), u && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", f)
            },
            _setOption: function(n, t) {
                var u, r, i = this.uiDialog;
                "dialogClass" === n && i.removeClass(this.options.dialogClass).addClass(t), "disabled" !== n && (this._super(n, t), "appendTo" === n && this.uiDialog.appendTo(this._appendTo()), "buttons" === n && this._createButtons(), "closeText" === n && this.uiDialogTitlebarClose.button({
                    label: "" + t
                }), "draggable" === n && (u = i.is(":data(ui-draggable)"), u && !t && i.draggable("destroy"), !u && t && this._makeDraggable()), "position" === n && this._position(), "resizable" === n && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && "string" == typeof t && i.resizable("option", "handles", t), r || t === !1 || this._makeResizable()), "title" === n && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var t, i, r, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(), i = Math.max(0, n.minHeight - t), r = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                    minHeight: i,
                    maxHeight: r,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var t = n(this);
                    return n("<div>").css({
                        position: "absolute",
                        width: t.outerWidth(),
                        height: t.outerHeight()
                    }).appendTo(t.parent()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(t) {
                return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var t = this,
                        i = this.widgetFullName;
                    n.ui.dialog.overlayInstances || this._delay(function() {
                        n.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(r) {
                            t._allowInteraction(r) || (r.preventDefault(), n(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                        })
                    }), this.overlay = n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), n.ui.dialog.overlayInstances++
                }
            },
            _destroyOverlay: function() {
                this.options.modal && this.overlay && (n.ui.dialog.overlayInstances--, n.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
            }
        }), n.ui.dialog.overlayInstances = 0, n.uiBackCompat !== !1 && n.widget("ui.dialog", n.ui.dialog, {
            _position: function() {
                var u, t = this.options.position,
                    i = [],
                    r = [0, 0];
                t ? (("string" == typeof t || "object" == typeof t && "0" in t) && (i = t.split ? t.split(" ") : [t[0], t[1]], 1 === i.length && (i[1] = i[0]), n.each(["left", "top"], function(n, t) {
                    +i[n] === i[n] && (r[n] = i[n], i[n] = t)
                }), t = {
                    my: i[0] + (0 > r[0] ? r[0] : "+" + r[0]) + " " + i[1] + (0 > r[1] ? r[1] : "+" + r[1]),
                    at: i.join(" ")
                }), t = n.extend({}, n.ui.dialog.prototype.options.position, t)) : t = n.ui.dialog.prototype.options.position, u = this.uiDialog.is(":visible"), u || this.uiDialog.show(), this.uiDialog.position(t), u || this.uiDialog.hide()
            }
        })
    }(jQuery), function(n) {
        var t = /up|down|vertical/,
            i = /up|left|vertical|horizontal/;
        n.effects.effect.blind = function(r, u) {
            var e, o, s, f = n(this),
                c = ["position", "top", "bottom", "left", "right", "height", "width"],
                p = n.effects.setMode(f, r.mode || "hide"),
                w = r.direction || "up",
                h = t.test(w),
                l = h ? "height" : "width",
                a = h ? "top" : "left",
                b = i.test(w),
                v = {},
                y = "show" === p;
            f.parent().is(".ui-effects-wrapper") ? n.effects.save(f.parent(), c) : n.effects.save(f, c), f.show(), e = n.effects.createWrapper(f).css({
                overflow: "hidden"
            }), o = e[l](), s = parseFloat(e.css(a)) || 0, v[l] = y ? o : 0, b || (f.css(h ? "bottom" : "right", 0).css(h ? "top" : "left", "auto").css({
                position: "absolute"
            }), v[a] = y ? s : o + s), y && (e.css(l, 0), b || e.css(a, s + o)), e.animate(v, {
                duration: r.duration,
                easing: r.easing,
                queue: !1,
                complete: function() {
                    "hide" === p && f.hide(), n.effects.restore(f, c), n.effects.removeWrapper(f), u()
                }
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.bounce = function(t, i) {
            var v, f, e, r = n(this),
                y = ["position", "top", "bottom", "left", "right", "height", "width"],
                k = n.effects.setMode(r, t.mode || "effect"),
                o = "hide" === k,
                p = "show" === k,
                h = t.direction || "up",
                u = t.distance,
                w = t.times || 5,
                d = 2 * w + (p || o ? 1 : 0),
                c = t.duration / d,
                l = t.easing,
                s = "up" === h || "down" === h ? "top" : "left",
                b = "up" === h || "left" === h,
                a = r.queue(),
                g = a.length;
            for ((p || o) && y.push("opacity"), n.effects.save(r, y), r.show(), n.effects.createWrapper(r), u || (u = r["top" === s ? "outerHeight" : "outerWidth"]() / 3), p && (e = {
                    opacity: 1
                }, e[s] = 0, r.css("opacity", 0).css(s, b ? 2 * -u : 2 * u).animate(e, c, l)), o && (u /= Math.pow(2, w - 1)), e = {}, e[s] = 0, v = 0; w > v; v++) f = {}, f[s] = (b ? "-=" : "+=") + u, r.animate(f, c, l).animate(e, c, l), u = o ? 2 * u : u / 2;
            o && (f = {
                opacity: 0
            }, f[s] = (b ? "-=" : "+=") + u, r.animate(f, c, l)), r.queue(function() {
                o && r.hide(), n.effects.restore(r, y), n.effects.removeWrapper(r), i()
            }), g > 1 && a.splice.apply(a, [1, 0].concat(a.splice(g, d + 1))), r.dequeue()
        }
    }(jQuery), function(n) {
        n.effects.effect.clip = function(t, i) {
            var h, u, f, r = n(this),
                c = ["position", "top", "bottom", "left", "right", "height", "width"],
                v = n.effects.setMode(r, t.mode || "hide"),
                e = "show" === v,
                y = t.direction || "vertical",
                l = "vertical" === y,
                o = l ? "height" : "width",
                a = l ? "top" : "left",
                s = {};
            n.effects.save(r, c), r.show(), h = n.effects.createWrapper(r).css({
                overflow: "hidden"
            }), u = "IMG" === r[0].tagName ? h : r, f = u[o](), e && (u.css(o, 0), u.css(a, f / 2)), s[o] = e ? f : 0, s[a] = e ? 0 : f / 2, u.animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    e || r.hide(), n.effects.restore(r, c), n.effects.removeWrapper(r), i()
                }
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.drop = function(t, i) {
            var u, r = n(this),
                h = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                c = n.effects.setMode(r, t.mode || "hide"),
                e = "show" === c,
                f = t.direction || "left",
                o = "up" === f || "down" === f ? "top" : "left",
                s = "up" === f || "left" === f ? "pos" : "neg",
                l = {
                    opacity: e ? 1 : 0
                };
            n.effects.save(r, h), r.show(), n.effects.createWrapper(r), u = t.distance || r["top" === o ? "outerHeight" : "outerWidth"](!0) / 2, e && r.css("opacity", 0).css(o, "pos" === s ? -u : u), l[o] = (e ? "pos" === s ? "+=" : "-=" : "pos" === s ? "-=" : "+=") + u, r.animate(l, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === c && r.hide(), n.effects.restore(r, h), n.effects.removeWrapper(r), i()
                }
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.explode = function(t, i) {
            function b() {
                p.push(this), p.length === o * c && k()
            }

            function k() {
                r.css({
                    visibility: "visible"
                }), n(p).remove(), u || r.hide(), i()
            }
            for (var f, l, a, v, y, o = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = o, r = n(this), d = n.effects.setMode(r, t.mode || "hide"), u = "show" === d, w = r.show().css("visibility", "hidden").offset(), s = Math.ceil(r.outerWidth() / c), h = Math.ceil(r.outerHeight() / o), p = [], e = 0; o > e; e++)
                for (a = w.top + e * h, y = e - (o - 1) / 2, f = 0; c > f; f++) l = w.left + f * s, v = f - (c - 1) / 2, r.clone().appendTo("body").wrap("<div><\/div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -f * s,
                    top: -e * h
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: s,
                    height: h,
                    left: l + (u ? v * s : 0),
                    top: a + (u ? y * h : 0),
                    opacity: u ? 0 : 1
                }).animate({
                    left: l + (u ? 0 : v * s),
                    top: a + (u ? 0 : y * h),
                    opacity: u ? 1 : 0
                }, t.duration || 500, t.easing, b)
        }
    }(jQuery), function(n) {
        n.effects.effect.fade = function(t, i) {
            var r = n(this),
                u = n.effects.setMode(r, t.mode || "toggle");
            r.animate({
                opacity: u
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.fold = function(t, i) {
            var r, e, u = n(this),
                s = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = n.effects.setMode(u, t.mode || "hide"),
                o = "show" === h,
                c = "hide" === h,
                f = t.size || 15,
                l = /([0-9]+)%/.exec(f),
                a = !!t.horizFirst,
                v = o !== a,
                y = v ? ["width", "height"] : ["height", "width"],
                p = t.duration / 2,
                w = {},
                b = {};
            n.effects.save(u, s), u.show(), r = n.effects.createWrapper(u).css({
                overflow: "hidden"
            }), e = v ? [r.width(), r.height()] : [r.height(), r.width()], l && (f = parseInt(l[1], 10) / 100 * e[c ? 0 : 1]), o && r.css(a ? {
                height: 0,
                width: f
            } : {
                height: f,
                width: 0
            }), w[y[0]] = o ? e[0] : f, b[y[1]] = o ? e[1] : 0, r.animate(w, p, t.easing).animate(b, p, t.easing, function() {
                c && u.hide(), n.effects.restore(u, s), n.effects.removeWrapper(u), i()
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.highlight = function(t, i) {
            var r = n(this),
                u = ["backgroundImage", "backgroundColor", "opacity"],
                f = n.effects.setMode(r, t.mode || "show"),
                e = {
                    backgroundColor: r.css("backgroundColor")
                };
            "hide" === f && (e.opacity = 0), n.effects.save(r, u), r.show().css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(e, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === f && r.hide(), n.effects.restore(r, u), i()
                }
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.pulsate = function(t, i) {
            var e, r = n(this),
                o = n.effects.setMode(r, t.mode || "show"),
                h = "show" === o,
                a = "hide" === o,
                v = h || "hide" === o,
                s = 2 * (t.times || 5) + (v ? 1 : 0),
                c = t.duration / s,
                u = 0,
                f = r.queue(),
                l = f.length;
            for ((h || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1), e = 1; s > e; e++) r.animate({
                opacity: u
            }, c, t.easing), u = 1 - u;
            r.animate({
                opacity: u
            }, c, t.easing), r.queue(function() {
                a && r.hide(), i()
            }), l > 1 && f.splice.apply(f, [1, 0].concat(f.splice(l, s + 1))), r.dequeue()
        }
    }(jQuery), function(n) {
        n.effects.effect.puff = function(t, i) {
            var r = n(this),
                e = n.effects.setMode(r, t.mode || "hide"),
                o = "hide" === e,
                s = parseInt(t.percent, 10) || 150,
                f = s / 100,
                u = {
                    height: r.height(),
                    width: r.width(),
                    outerHeight: r.outerHeight(),
                    outerWidth: r.outerWidth()
                };
            n.extend(t, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: e,
                complete: i,
                percent: o ? s : 100,
                from: o ? u : {
                    height: u.height * f,
                    width: u.width * f,
                    outerHeight: u.outerHeight * f,
                    outerWidth: u.outerWidth * f
                }
            }), r.effect(t)
        }, n.effects.effect.scale = function(t, i) {
            var u = n(this),
                r = n.extend(!0, {}, t),
                f = n.effects.setMode(u, t.mode || "effect"),
                s = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === f ? 0 : 100),
                h = t.direction || "both",
                c = t.origin,
                e = {
                    height: u.height(),
                    width: u.width(),
                    outerHeight: u.outerHeight(),
                    outerWidth: u.outerWidth()
                },
                o = {
                    y: "horizontal" !== h ? s / 100 : 1,
                    x: "vertical" !== h ? s / 100 : 1
                };
            r.effect = "size", r.queue = !1, r.complete = i, "effect" !== f && (r.origin = c || ["middle", "center"], r.restore = !0), r.from = t.from || ("show" === f ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : e), r.to = {
                height: e.height * o.y,
                width: e.width * o.x,
                outerHeight: e.outerHeight * o.y,
                outerWidth: e.outerWidth * o.x
            }, r.fade && ("show" === f && (r.from.opacity = 0, r.to.opacity = 1), "hide" === f && (r.from.opacity = 1, r.to.opacity = 0)), u.effect(r)
        }, n.effects.effect.size = function(t, i) {
            var f, l, u, r = n(this),
                w = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                k = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                a = ["width", "height", "overflow"],
                v = ["fontSize"],
                e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                h = n.effects.setMode(r, t.mode || "effect"),
                y = t.restore || "effect" !== h,
                c = t.scale || "both",
                b = t.origin || ["middle", "center"],
                d = r.css("position"),
                s = y ? w : k,
                p = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === h && r.show(), f = {
                height: r.height(),
                width: r.width(),
                outerHeight: r.outerHeight(),
                outerWidth: r.outerWidth()
            }, "toggle" === t.mode && "show" === h ? (r.from = t.to || p, r.to = t.from || f) : (r.from = t.from || ("show" === h ? p : f), r.to = t.to || ("hide" === h ? p : f)), u = {
                from: {
                    y: r.from.height / f.height,
                    x: r.from.width / f.width
                },
                to: {
                    y: r.to.height / f.height,
                    x: r.to.width / f.width
                }
            }, ("box" === c || "both" === c) && (u.from.y !== u.to.y && (s = s.concat(e), r.from = n.effects.setTransition(r, e, u.from.y, r.from), r.to = n.effects.setTransition(r, e, u.to.y, r.to)), u.from.x !== u.to.x && (s = s.concat(o), r.from = n.effects.setTransition(r, o, u.from.x, r.from), r.to = n.effects.setTransition(r, o, u.to.x, r.to))), ("content" === c || "both" === c) && u.from.y !== u.to.y && (s = s.concat(v).concat(a), r.from = n.effects.setTransition(r, v, u.from.y, r.from), r.to = n.effects.setTransition(r, v, u.to.y, r.to)), n.effects.save(r, s), r.show(), n.effects.createWrapper(r), r.css("overflow", "hidden").css(r.from), b && (l = n.effects.getBaseline(b, f), r.from.top = (f.outerHeight - r.outerHeight()) * l.y, r.from.left = (f.outerWidth - r.outerWidth()) * l.x, r.to.top = (f.outerHeight - r.to.outerHeight) * l.y, r.to.left = (f.outerWidth - r.to.outerWidth) * l.x), r.css(r.from), ("content" === c || "both" === c) && (e = e.concat(["marginTop", "marginBottom"]).concat(v), o = o.concat(["marginLeft", "marginRight"]), a = w.concat(e).concat(o), r.find("*[width]").each(function() {
                var i = n(this),
                    r = {
                        height: i.height(),
                        width: i.width(),
                        outerHeight: i.outerHeight(),
                        outerWidth: i.outerWidth()
                    };
                y && n.effects.save(i, a), i.from = {
                    height: r.height * u.from.y,
                    width: r.width * u.from.x,
                    outerHeight: r.outerHeight * u.from.y,
                    outerWidth: r.outerWidth * u.from.x
                }, i.to = {
                    height: r.height * u.to.y,
                    width: r.width * u.to.x,
                    outerHeight: r.height * u.to.y,
                    outerWidth: r.width * u.to.x
                }, u.from.y !== u.to.y && (i.from = n.effects.setTransition(i, e, u.from.y, i.from), i.to = n.effects.setTransition(i, e, u.to.y, i.to)), u.from.x !== u.to.x && (i.from = n.effects.setTransition(i, o, u.from.x, i.from), i.to = n.effects.setTransition(i, o, u.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function() {
                    y && n.effects.restore(i, a)
                })
            })), r.animate(r.to, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    0 === r.to.opacity && r.css("opacity", r.from.opacity), "hide" === h && r.hide(), n.effects.restore(r, s), y || ("static" === d ? r.css({
                        position: "relative",
                        top: r.to.top,
                        left: r.to.left
                    }) : n.each(["top", "left"], function(n, t) {
                        r.css(t, function(t, i) {
                            var f = parseInt(i, 10),
                                u = n ? r.to.left : r.to.top;
                            return "auto" === i ? u + "px" : f + u + "px"
                        })
                    })), n.effects.removeWrapper(r), i()
                }
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.shake = function(t, i) {
            var o, r = n(this),
                v = ["position", "top", "bottom", "left", "right", "height", "width"],
                k = n.effects.setMode(r, t.mode || "effect"),
                f = t.direction || "left",
                s = t.distance || 20,
                y = t.times || 3,
                p = 2 * y + 1,
                u = Math.round(t.duration / p),
                h = "up" === f || "down" === f ? "top" : "left",
                c = "up" === f || "left" === f,
                l = {},
                a = {},
                w = {},
                e = r.queue(),
                b = e.length;
            for (n.effects.save(r, v), r.show(), n.effects.createWrapper(r), l[h] = (c ? "-=" : "+=") + s, a[h] = (c ? "+=" : "-=") + 2 * s, w[h] = (c ? "-=" : "+=") + 2 * s, r.animate(l, u, t.easing), o = 1; y > o; o++) r.animate(a, u, t.easing).animate(w, u, t.easing);
            r.animate(a, u, t.easing).animate(l, u / 2, t.easing).queue(function() {
                "hide" === k && r.hide(), n.effects.restore(r, v), n.effects.removeWrapper(r), i()
            }), b > 1 && e.splice.apply(e, [1, 0].concat(e.splice(b, p + 1))), r.dequeue()
        }
    }(jQuery), function(n) {
        n.effects.effect.slide = function(t, i) {
            var u, r = n(this),
                s = ["position", "top", "bottom", "left", "right", "width", "height"],
                h = n.effects.setMode(r, t.mode || "show"),
                c = "show" === h,
                f = t.direction || "left",
                e = "up" === f || "down" === f ? "top" : "left",
                o = "up" === f || "left" === f,
                l = {};
            n.effects.save(r, s), r.show(), u = t.distance || r["top" === e ? "outerHeight" : "outerWidth"](!0), n.effects.createWrapper(r).css({
                overflow: "hidden"
            }), c && r.css(e, o ? isNaN(u) ? "-" + u : -u : u), l[e] = (c ? o ? "+=" : "-=" : o ? "-=" : "+=") + u, r.animate(l, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === h && r.hide(), n.effects.restore(r, s), n.effects.removeWrapper(r), i()
                }
            })
        }
    }(jQuery), function(n) {
        n.effects.effect.transfer = function(t, i) {
            var u = n(this),
                r = n(t.to),
                f = "fixed" === r.css("position"),
                e = n("body"),
                o = f ? e.scrollTop() : 0,
                s = f ? e.scrollLeft() : 0,
                h = r.offset(),
                l = {
                    top: h.top - o,
                    left: h.left - s,
                    height: r.innerHeight(),
                    width: r.innerWidth()
                },
                c = u.offset(),
                a = n("<div class='ui-effects-transfer'><\/div>").appendTo(document.body).addClass(t.className).css({
                    top: c.top - o,
                    left: c.left - s,
                    height: u.innerHeight(),
                    width: u.innerWidth(),
                    position: f ? "fixed" : "absolute"
                }).animate(l, t.duration, t.easing, function() {
                    a.remove(), i()
                })
        }
    }(jQuery), function(n) {
        n.widget("ui.menu", {
            version: "1.10.4",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" + this.eventNamespace, n.proxy(function(n) {
                    this.options.disabled && n.preventDefault()
                }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item > a": function(n) {
                        n.preventDefault()
                    },
                    "click .ui-state-disabled > a": function(n) {
                        n.preventDefault()
                    },
                    "click .ui-menu-item:has(a)": function(t) {
                        var i = n(t.target).closest(".ui-menu-item");
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && n(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        var i = n(t.currentTarget);
                        i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(n, t) {
                        var i = this.active || this.element.children(".ui-menu-item").eq(0);
                        t || this.focus(n, i)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            n.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(t) {
                        n(t.target).closest(".ui-menu").length || this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var t = n(this);
                    t.data("ui-menu-submenu-carat") && t.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(t) {
                function o(n) {
                    return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }
                var i, f, r, e, u, s = !0;
                switch (t.keyCode) {
                    case n.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case n.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case n.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case n.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case n.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case n.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case n.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case n.ui.keyCode.ENTER:
                    case n.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case n.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        s = !1, f = this.previousFilter || "", r = String.fromCharCode(t.keyCode), e = !1, clearTimeout(this.filterTimer), r === f ? e = !0 : r = f + r, u = RegExp("^" + o(r), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return u.test(n(this).children("a").text())
                        }), i = e && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (r = String.fromCharCode(t.keyCode), u = RegExp("^" + o(r), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return u.test(n(this).children("a").text())
                        })), i.length ? (this.focus(t, i), i.length > 1 ? (this.previousFilter = r, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                s && t.preventDefault()
            },
            _activate: function(n) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(n) : this.select(n))
            },
            refresh: function() {
                var t, r = this.options.icons.submenu,
                    i = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = n(this),
                        i = t.prev("a"),
                        u = n("<span>").addClass("ui-menu-icon ui-icon " + r).data("ui-menu-submenu-carat", !0);
                    i.attr("aria-haspopup", "true").prepend(u), t.attr("aria-labelledby", i.attr("id"))
                }), t = i.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), t.children(":not(.ui-menu-item)").each(function() {
                    var t = n(this);
                    /[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
                }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(n, t) {
                "icons" === n && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), this._super(n, t)
            },
            focus: function(n, t) {
                var i, r;
                this.blur(n, n && "focus" === n.type), this._scrollIntoView(t), this.active = t.first(), r = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), n && "keydown" === n.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), i = t.children(".ui-menu"), i.length && n && /^mouse/.test(n.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", n, {
                    item: t
                })
            },
            _scrollIntoView: function(t) {
                var e, o, i, r, u, f;
                this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.height(), 0 > i ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
            },
            blur: function(n, t) {
                t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", n, {
                    item: this.active
                }))
            },
            _startOpening: function(n) {
                clearTimeout(this.timer), "true" === n.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(n)
                }, this.delay))
            },
            _open: function(t) {
                var i = n.extend({ of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(t, i) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                    r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r
                }, this.delay)
            },
            _close: function(n) {
                n || (n = this.active ? this.active.parent() : this.element), n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function(n) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(n, t))
            },
            expand: function(n) {
                var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                t && t.length && (this._open(t.parent()), this._delay(function() {
                    this.focus(n, t)
                }))
            },
            next: function(n) {
                this._move("next", "first", n)
            },
            previous: function(n) {
                this._move("prev", "last", n)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(n, t, i) {
                var r;
                this.active && (r = "first" === n || "last" === n ? this.active["first" === n ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0)), r && r.length && this.active || (r = this.activeMenu.children(".ui-menu-item")[t]()), this.focus(i, r)
            },
            nextPage: function(t) {
                var i, r, u;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return i = n(this), 0 > i.offset().top - r - u
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(t)
            },
            previousPage: function(t) {
                var i, r, u;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return i = n(this), i.offset().top - r + u > 0
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(t)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(t) {
                this.active = this.active || n(t.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
            }
        })
    }(jQuery), function(n, t) {
        function e(n, t, i) {
            return [parseFloat(n[0]) * (a.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (a.test(n[1]) ? i / 100 : 1)]
        }

        function r(t, i) {
            return parseInt(n.css(t, i), 10) || 0
        }

        function v(t) {
            var i = t[0];
            return 9 === i.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : n.isWindow(i) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        n.ui = n.ui || {};
        var f, u = Math.max,
            i = Math.abs,
            o = Math.round,
            s = /left|center|right/,
            h = /top|center|bottom/,
            c = /[\+\-]\d+(\.[\d]+)?%?/,
            l = /^\w+/,
            a = /%$/,
            y = n.fn.position;
        n.position = {
                scrollbarWidth: function() {
                    if (f !== t) return f;
                    var u, r, i = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
                        e = i.children()[0];
                    return n("body").append(i), u = e.offsetWidth, i.css("overflow", "scroll"), r = e.offsetWidth, u === r && (r = i[0].clientWidth), i.remove(), f = u - r
                },
                getScrollInfo: function(t) {
                    var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        u = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                        f = "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight;
                    return {
                        width: f ? n.position.scrollbarWidth() : 0,
                        height: u ? n.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var i = n(t || window),
                        r = n.isWindow(i[0]),
                        u = !!i[0] && 9 === i[0].nodeType;
                    return {
                        element: i,
                        isWindow: r,
                        isDocument: u,
                        offset: i.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: r ? i.width() : i.outerWidth(),
                        height: r ? i.height() : i.outerHeight()
                    }
                }
            }, n.fn.position = function(t) {
                if (!t || !t.of) return y.apply(this, arguments);
                t = n.extend({}, t);
                var b, f, a, w, p, d, g = n(t.of),
                    tt = n.position.getWithinInfo(t.within),
                    it = n.position.getScrollInfo(tt),
                    k = (t.collision || "flip").split(" "),
                    nt = {};
                return d = v(g), g[0].preventDefault && (t.at = "left top"), f = d.width, a = d.height, w = d.offset, p = n.extend({}, w), n.each(["my", "at"], function() {
                    var i, r, n = (t[this] || "").split(" ");
                    1 === n.length && (n = s.test(n[0]) ? n.concat(["center"]) : h.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = s.test(n[0]) ? n[0] : "center", n[1] = h.test(n[1]) ? n[1] : "center", i = c.exec(n[0]), r = c.exec(n[1]), nt[this] = [i ? i[0] : 0, r ? r[0] : 0], t[this] = [l.exec(n[0])[0], l.exec(n[1])[0]]
                }), 1 === k.length && (k[1] = k[0]), "right" === t.at[0] ? p.left += f : "center" === t.at[0] && (p.left += f / 2), "bottom" === t.at[1] ? p.top += a : "center" === t.at[1] && (p.top += a / 2), b = e(nt.at, f, a), p.left += b[0], p.top += b[1], this.each(function() {
                    var y, d, h = n(this),
                        c = h.outerWidth(),
                        l = h.outerHeight(),
                        rt = r(this, "marginLeft"),
                        ut = r(this, "marginTop"),
                        ft = c + rt + r(this, "marginRight") + it.width,
                        et = l + ut + r(this, "marginBottom") + it.height,
                        s = n.extend({}, p),
                        v = e(nt.my, h.outerWidth(), h.outerHeight());
                    "right" === t.my[0] ? s.left -= c : "center" === t.my[0] && (s.left -= c / 2), "bottom" === t.my[1] ? s.top -= l : "center" === t.my[1] && (s.top -= l / 2), s.left += v[0], s.top += v[1], n.support.offsetFractions || (s.left = o(s.left), s.top = o(s.top)), y = {
                        marginLeft: rt,
                        marginTop: ut
                    }, n.each(["left", "top"], function(i, r) {
                        n.ui.position[k[i]] && n.ui.position[k[i]][r](s, {
                            targetWidth: f,
                            targetHeight: a,
                            elemWidth: c,
                            elemHeight: l,
                            collisionPosition: y,
                            collisionWidth: ft,
                            collisionHeight: et,
                            offset: [b[0] + v[0], b[1] + v[1]],
                            my: t.my,
                            at: t.at,
                            within: tt,
                            elem: h
                        })
                    }), t.using && (d = function(n) {
                        var r = w.left - s.left,
                            v = r + f - c,
                            e = w.top - s.top,
                            y = e + a - l,
                            o = {
                                target: {
                                    element: g,
                                    left: w.left,
                                    top: w.top,
                                    width: f,
                                    height: a
                                },
                                element: {
                                    element: h,
                                    left: s.left,
                                    top: s.top,
                                    width: c,
                                    height: l
                                },
                                horizontal: 0 > v ? "left" : r > 0 ? "right" : "center",
                                vertical: 0 > y ? "top" : e > 0 ? "bottom" : "middle"
                            };
                        c > f && f > i(r + v) && (o.horizontal = "center"), l > a && a > i(e + y) && (o.vertical = "middle"), o.important = u(i(r), i(v)) > u(i(e), i(y)) ? "horizontal" : "vertical", t.using.call(this, n, o)
                    }), h.offset(n.extend(s, {
                        using: d
                    }))
                })
            }, n.ui.position = {
                fit: {
                    left: function(n, t) {
                        var h, e = t.within,
                            r = e.isWindow ? e.scrollLeft : e.offset.left,
                            o = e.width,
                            s = n.left - t.collisionPosition.marginLeft,
                            i = r - s,
                            f = s + t.collisionWidth - o - r;
                        t.collisionWidth > o ? i > 0 && 0 >= f ? (h = n.left + i + t.collisionWidth - o - r, n.left += i - h) : n.left = f > 0 && 0 >= i ? r : i > f ? r + o - t.collisionWidth : r : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = u(n.left - s, n.left)
                    },
                    top: function(n, t) {
                        var h, o = t.within,
                            r = o.isWindow ? o.scrollTop : o.offset.top,
                            e = t.within.height,
                            s = n.top - t.collisionPosition.marginTop,
                            i = r - s,
                            f = s + t.collisionHeight - e - r;
                        t.collisionHeight > e ? i > 0 && 0 >= f ? (h = n.top + i + t.collisionHeight - e - r, n.top += i - h) : n.top = f > 0 && 0 >= i ? r : i > f ? r + e - t.collisionHeight : r : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = u(n.top - s, n.top)
                    }
                },
                flip: {
                    left: function(n, t) {
                        var o, s, r = t.within,
                            y = r.offset.left + r.scrollLeft,
                            c = r.width,
                            h = r.isWindow ? r.scrollLeft : r.offset.left,
                            l = n.left - t.collisionPosition.marginLeft,
                            a = l - h,
                            v = l + t.collisionWidth - c - h,
                            u = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                            f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                            e = -2 * t.offset[0];
                        0 > a ? (o = n.left + u + f + e + t.collisionWidth - c - y, (0 > o || i(a) > o) && (n.left += u + f + e)) : v > 0 && (s = n.left - t.collisionPosition.marginLeft + u + f + e - h, (s > 0 || v > i(s)) && (n.left += u + f + e))
                    },
                    top: function(n, t) {
                        var o, s, r = t.within,
                            y = r.offset.top + r.scrollTop,
                            a = r.height,
                            h = r.isWindow ? r.scrollTop : r.offset.top,
                            v = n.top - t.collisionPosition.marginTop,
                            c = v - h,
                            l = v + t.collisionHeight - a - h,
                            p = "top" === t.my[1],
                            u = p ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                            f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                            e = -2 * t.offset[1];
                        0 > c ? (s = n.top + u + f + e + t.collisionHeight - a - y, n.top + u + f + e > c && (0 > s || i(c) > s) && (n.top += u + f + e)) : l > 0 && (o = n.top - t.collisionPosition.marginTop + u + f + e - h, n.top + u + f + e > l && (o > 0 || l > i(o)) && (n.top += u + f + e))
                    }
                },
                flipfit: {
                    left: function() {
                        n.ui.position.flip.left.apply(this, arguments), n.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        n.ui.position.flip.top.apply(this, arguments), n.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var t, i, r, u, f, e = document.getElementsByTagName("body")[0],
                    o = document.createElement("div");
                t = document.createElement(e ? "div" : "body"), r = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, e && n.extend(r, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (f in r) t.style[f] = r[f];
                t.appendChild(o), i = e || document.documentElement, i.insertBefore(t, i.firstChild), o.style.cssText = "position: absolute; left: 10.7432222px;", u = n(o).offset().left, n.support.offsetFractions = u > 10 && 11 > u, t.innerHTML = "", i.removeChild(t)
            }()
    }(jQuery), function(n, t) {
        n.widget("ui.progressbar", {
            version: "1.10.4",
            options: {
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element), this._refreshValue()
            },
            _destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
            },
            value: function(n) {
                return n === t ? this.options.value : (this.options.value = this._constrainedValue(n), this._refreshValue(), t)
            },
            _constrainedValue: function(n) {
                return n === t && (n = this.options.value), this.indeterminate = n === !1, "number" != typeof n && (n = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n))
            },
            _setOptions: function(n) {
                var t = n.value;
                delete n.value, this._super(n), this.options.value = this._constrainedValue(t), this._refreshValue()
            },
            _setOption: function(n, t) {
                "max" === n && (t = Math.max(this.min, t)), this._super(n, t)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var t = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = n("<div class='ui-progressbar-overlay'><\/div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": t
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
            }
        })
    }(jQuery), function(n) {
        var t = 5;
        n.widget("ui.slider", n.ui.mouse, {
            version: "1.10.4",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var r, i, u = this.options,
                    t = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    e = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'><\/a>",
                    f = [];
                for (i = u.values && u.values.length || 1, t.length > i && (t.slice(i).remove(), t = t.slice(0, i)), r = t.length; i > r; r++) f.push(e);
                this.handles = t.add(n(f.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                    n(this).data("ui-slider-handle-index", t)
                })
            },
            _createRange: function() {
                var t = this.options,
                    i = "";
                t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = n("<div><\/div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                var n = this.handles.add(this.range).filter("a");
                this._off(n), this._on(n, this._handleEvents), this._hoverable(n), this._focusable(n)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function(t) {
                var s, f, r, i, u, h, e, c, o = this,
                    l = this.options;
                return l.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), s = {
                    x: t.pageX,
                    y: t.pageY
                }, f = this._normValueFromMouse(s), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                    var e = Math.abs(f - o.values(t));
                    (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e, i = n(this), u = t)
                }), h = this._start(t, u), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = u, i.addClass("ui-state-active").focus(), e = i.offset(), c = !n(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - e.left - i.width() / 2,
                    top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, f), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(n) {
                var t = {
                        x: n.pageX,
                        y: n.pageY
                    },
                    i = this._normValueFromMouse(t);
                return this._slide(n, this._handleIndex, i), !1
            },
            _mouseStop: function(n) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(n) {
                var i, r, t, u, f;
                return "horizontal" === this.orientation ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), 0 > t && (t = 0), "vertical" === this.orientation && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f)
            },
            _start: function(n, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", n, i)
            },
            _slide: function(n, t, i) {
                var r, f, u;
                this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > r || 1 === t && r > i) && (i = r), i !== this.values(t) && (f = this.values(), f[t] = i, u = this._trigger("slide", n, {
                    handle: this.handles[t],
                    value: i,
                    values: f
                }), r = this.values(t ? 0 : 1), u !== !1 && this.values(t, i))) : i !== this.value() && (u = this._trigger("slide", n, {
                    handle: this.handles[t],
                    value: i
                }), u !== !1 && this.value(i))
            },
            _stop: function(n, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", n, i)
            },
            _change: function(n, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[t],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", n, i)
                }
            },
            value: function(n) {
                return arguments.length ? (this.options.value = this._trimAlignValue(n), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(t, i) {
                var u, f, r;
                if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, t);
                if (!arguments.length) return this._values();
                if (!n.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                for (u = this.options.values, f = arguments[0], r = 0; u.length > r; r += 1) u[r] = this._trimAlignValue(f[r]), this._change(null, r);
                this._refreshValue()
            },
            _setOption: function(t, i) {
                var r, u = 0;
                switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), n.isArray(this.options.values) && (u = this.options.values.length), n.Widget.prototype._setOption.apply(this, arguments), t) {
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), r = 0; u > r; r += 1) this._change(null, r);
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function() {
                var n = this.options.value;
                return n = this._trimAlignValue(n)
            },
            _values: function(n) {
                var r, t, i;
                if (arguments.length) return r = this.options.values[n], r = this._trimAlignValue(r);
                if (this.options.values && this.options.values.length) {
                    for (t = this.options.values.slice(), i = 0; t.length > i; i += 1) t[i] = this._trimAlignValue(t[i]);
                    return t
                }
                return []
            },
            _trimAlignValue: function(n) {
                if (this._valueMin() >= n) return this._valueMin();
                if (n >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    i = (n - this._valueMin()) % t,
                    r = n - i;
                return 2 * Math.abs(i) >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var s, t, c, f, h, e = this.options.range,
                    i = this.options,
                    r = this,
                    u = this._animateOff ? !1 : i.animate,
                    o = {};
                this.options.values && this.options.values.length ? this.handles.each(function(f) {
                    t = 100 * ((r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin())), o["horizontal" === r.orientation ? "left" : "bottom"] = t + "%", n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate), r.options.range === !0 && ("horizontal" === r.orientation ? (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({
                        left: t + "%"
                    }, i.animate), 1 === f && r.range[u ? "animate" : "css"]({
                        width: t - s + "%"
                    }, {
                        queue: !1,
                        duration: i.animate
                    })) : (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({
                        bottom: t + "%"
                    }, i.animate), 1 === f && r.range[u ? "animate" : "css"]({
                        height: t - s + "%"
                    }, {
                        queue: !1,
                        duration: i.animate
                    }))), s = t
                }) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? 100 * ((c - f) / (h - f)) : 0, o["horizontal" === this.orientation ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate), "min" === e && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    width: t + "%"
                }, i.animate), "max" === e && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                    width: 100 - t + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                }), "min" === e && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    height: t + "%"
                }, i.animate), "max" === e && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                    height: 100 - t + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                }))
            },
            _handleEvents: {
                keydown: function(i) {
                    var o, u, r, f, e = n(i.target).data("ui-slider-handle-index");
                    switch (i.keyCode) {
                        case n.ui.keyCode.HOME:
                        case n.ui.keyCode.END:
                        case n.ui.keyCode.PAGE_UP:
                        case n.ui.keyCode.PAGE_DOWN:
                        case n.ui.keyCode.UP:
                        case n.ui.keyCode.RIGHT:
                        case n.ui.keyCode.DOWN:
                        case n.ui.keyCode.LEFT:
                            if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, n(i.target).addClass("ui-state-active"), o = this._start(i, e), o === !1)) return
                    }
                    switch (f = this.options.step, u = r = this.options.values && this.options.values.length ? this.values(e) : this.value(), i.keyCode) {
                        case n.ui.keyCode.HOME:
                            r = this._valueMin();
                            break;
                        case n.ui.keyCode.END:
                            r = this._valueMax();
                            break;
                        case n.ui.keyCode.PAGE_UP:
                            r = this._trimAlignValue(u + (this._valueMax() - this._valueMin()) / t);
                            break;
                        case n.ui.keyCode.PAGE_DOWN:
                            r = this._trimAlignValue(u - (this._valueMax() - this._valueMin()) / t);
                            break;
                        case n.ui.keyCode.UP:
                        case n.ui.keyCode.RIGHT:
                            if (u === this._valueMax()) return;
                            r = this._trimAlignValue(u + f);
                            break;
                        case n.ui.keyCode.DOWN:
                        case n.ui.keyCode.LEFT:
                            if (u === this._valueMin()) return;
                            r = this._trimAlignValue(u - f)
                    }
                    this._slide(i, e, r)
                },
                click: function(n) {
                    n.preventDefault()
                },
                keyup: function(t) {
                    var i = n(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), n(t.target).removeClass("ui-state-active"))
                }
            }
        })
    }(jQuery), function(n) {
        function t(n) {
            return function() {
                var t = this.element.val();
                n.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
            }
        }
        n.widget("ui.spinner", {
            version: "1.10.4",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var t = {},
                    i = this.element;
                return n.each(["min", "max", "step"], function(n, r) {
                    var u = i.attr(r);
                    void 0 !== u && u.length && (t[r] = u)
                }), t
            },
            _events: {
                keydown: function(n) {
                    this._start(n) && this._keydown(n) && n.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(n) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", n)))
                },
                mousewheel: function(n, t) {
                    if (t) {
                        if (!this.spinning && !this._start(n)) return !1;
                        this._spin((t > 0 ? 1 : -1) * this.options.step, n), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(n)
                        }, 100), n.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(t) {
                    function r() {
                        var n = this.element[0] === this.document[0].activeElement;
                        n || (this.element.focus(), this.previous = i, this._delay(function() {
                            this.previous = i
                        }))
                    }
                    var i;
                    i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, r.call(this)
                    }), this._start(t) !== !1 && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(t) {
                    if (n(t.currentTarget).hasClass("ui-state-active")) return this._start(t) === !1 ? !1 : void this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function() {
                var n = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"), this.buttons = n.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * n.height()) && n.height() > 0 && n.height(n.height()), this.options.disabled && this.disable()
            },
            _keydown: function(t) {
                var r = this.options,
                    i = n.ui.keyCode;
                switch (t.keyCode) {
                    case i.UP:
                        return this._repeat(null, 1, t), !0;
                    case i.DOWN:
                        return this._repeat(null, -1, t), !0;
                    case i.PAGE_UP:
                        return this._repeat(null, r.page, t), !0;
                    case i.PAGE_DOWN:
                        return this._repeat(null, -r.page, t), !0
                }
                return !1
            },
            _uiSpinnerHtml: function() {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'><\/span>"
            },
            _buttonHtml: function() {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;<\/span><\/a>"
            },
            _start: function(n) {
                return this.spinning || this._trigger("start", n) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
            },
            _repeat: function(n, t, i) {
                n = n || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                    this._repeat(40, t, i)
                }, n), this._spin(t * this.options.step, i)
            },
            _spin: function(n, t) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + n * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {
                    value: i
                }) === !1 || (this._value(i), this.counter++)
            },
            _increment: function(t) {
                var i = this.options.incremental;
                return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
            },
            _precision: function() {
                var n = this._precisionOf(this.options.step);
                return null !== this.options.min && (n = Math.max(n, this._precisionOf(this.options.min))), n
            },
            _precisionOf: function(n) {
                var t = "" + n,
                    i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1
            },
            _adjustValue: function(n) {
                var r, i, t = this.options;
                return r = null !== t.min ? t.min : 0, i = n - r, i = Math.round(i / t.step) * t.step, n = r + i, n = parseFloat(n.toFixed(this._precision())), null !== t.max && n > t.max ? t.max : null !== t.min && t.min > n ? t.min : n
            },
            _stop: function(n) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", n))
            },
            _setOption: function(n, t) {
                if ("culture" === n || "numberFormat" === n) {
                    var i = this._parse(this.element.val());
                    return this.options[n] = t, void this.element.val(this._format(i))
                }("max" === n || "min" === n || "step" === n) && "string" == typeof t && (t = this._parse(t)), "icons" === n && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(n, t), "disabled" === n && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
            },
            _setOptions: t(function(n) {
                this._super(n), this._value(this.element.val())
            }),
            _parse: function(n) {
                return "string" == typeof n && "" !== n && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n), "" === n || isNaN(n) ? null : n
            },
            _format: function(n) {
                return "" === n ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            _value: function(n, t) {
                var i;
                "" !== n && (i = this._parse(n), null !== i && (t || (i = this._adjustValue(i)), n = this._format(i))), this.element.val(n), this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: t(function(n) {
                this._stepUp(n)
            }),
            _stepUp: function(n) {
                this._start() && (this._spin((n || 1) * this.options.step), this._stop())
            },
            stepDown: t(function(n) {
                this._stepDown(n)
            }),
            _stepDown: function(n) {
                this._start() && (this._spin((n || 1) * -this.options.step), this._stop())
            },
            pageUp: t(function(n) {
                this._stepUp((n || 1) * this.options.page)
            }),
            pageDown: t(function(n) {
                this._stepDown((n || 1) * this.options.page)
            }),
            value: function(n) {
                return arguments.length ? void t(this._value).call(this, n) : this._parse(this.element.val())
            },
            widget: function() {
                return this.uiSpinner
            }
        })
    }(jQuery), function(n, t) {
        function u() {
            return ++f
        }

        function i(n) {
            return n = n.cloneNode(!1), n.hash.length > 1 && decodeURIComponent(n.href.replace(r, "")) === decodeURIComponent(location.href.replace(r, ""))
        }
        var f = 0,
            r = /#.*$/;
        n.widget("ui.tabs", {
            version: "1.10.4",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _create: function() {
                var i = this,
                    t = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t) {
                    n(this).is(".ui-state-disabled") && t.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    n(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this._processTabs(), t.active = this._initialActive(), n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function(n) {
                    return i.tabs.index(n)
                }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n(), this._refresh(), this.active.length && this.load(t.active)
            },
            _initialActive: function() {
                var i = this.options.active,
                    r = this.options.collapsible,
                    u = location.hash.substring(1);
                return null === i && (u && this.tabs.each(function(r, f) {
                    return n(f).attr("aria-controls") === u ? (i = r, !1) : t
                }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = r ? !1 : 0)), !r && i === !1 && this.anchors.length && (i = 0), i
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : n()
                }
            },
            _tabKeydown: function(i) {
                var u = n(this.document[0].activeElement).closest("li"),
                    r = this.tabs.index(u),
                    f = !0;
                if (!this._handlePageNav(i)) {
                    switch (i.keyCode) {
                        case n.ui.keyCode.RIGHT:
                        case n.ui.keyCode.DOWN:
                            r++;
                            break;
                        case n.ui.keyCode.UP:
                        case n.ui.keyCode.LEFT:
                            f = !1, r--;
                            break;
                        case n.ui.keyCode.END:
                            r = this.anchors.length - 1;
                            break;
                        case n.ui.keyCode.HOME:
                            r = 0;
                            break;
                        case n.ui.keyCode.SPACE:
                            return i.preventDefault(), clearTimeout(this.activating), this._activate(r), t;
                        case n.ui.keyCode.ENTER:
                            return i.preventDefault(), clearTimeout(this.activating), this._activate(r === this.options.active ? !1 : r), t;
                        default:
                            return
                    }
                    i.preventDefault(), clearTimeout(this.activating), r = this._focusNextTab(r, f), i.ctrlKey || (u.attr("aria-selected", "false"), this.tabs.eq(r).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", r)
                    }, this.delay))
                }
            },
            _panelKeydown: function(t) {
                this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(i) {
                return i.altKey && i.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : t
            },
            _findNextTab: function(t, i) {
                function u() {
                    return t > r && (t = 0), 0 > t && (t = r), t
                }
                for (var r = this.tabs.length - 1; - 1 !== n.inArray(u(), this.options.disabled);) t = i ? t + 1 : t - 1;
                return t
            },
            _focusNextTab: function(n, t) {
                return n = this._findNextTab(n, t), this.tabs.eq(n).focus(), n
            },
            _setOption: function(n, i) {
                return "active" === n ? (this._activate(i), t) : "disabled" === n ? (this._setupDisabled(i), t) : (this._super(n, i), "collapsible" === n && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === n && this._setupEvents(i), "heightStyle" === n && this._setupHeightStyle(i), t)
            },
            _tabId: function(n) {
                return n.attr("aria-controls") || "ui-tabs-" + u()
            },
            _sanitizeSelector: function(n) {
                return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var t = this.options,
                    i = this.tablist.children(":has(a[href])");
                t.disabled = n.map(i.filter(".ui-state-disabled"), function(n) {
                    return i.index(n)
                }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = n()), this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var t = this;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function() {
                    return n("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = n(), this.anchors.each(function(r, u) {
                    var e, f, s, h = n(u).uniqueId().attr("id"),
                        o = n(u).closest("li"),
                        c = o.attr("aria-controls");
                    i(u) ? (e = u.hash, f = t.element.find(t._sanitizeSelector(e))) : (s = t._tabId(o), e = "#" + s, f = t.element.find(e), f.length || (f = t._createPanel(s), f.insertAfter(t.panels[r - 1] || t.tablist)), f.attr("aria-live", "polite")), f.length && (t.panels = t.panels.add(f)), c && o.data("ui-tabs-aria-controls", c), o.attr({
                        "aria-controls": e.substring(1),
                        "aria-labelledby": h
                    }), f.attr("aria-labelledby", h)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
            },
            _getList: function() {
                return this.tablist || this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(t) {
                return n("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(t) {
                n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                for (var i, r = 0; i = this.tabs[r]; r++) t === !0 || -1 !== n.inArray(r, t) ? n(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : n(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = t
            },
            _setupEvents: function(t) {
                var i = {
                    click: function(n) {
                        n.preventDefault()
                    }
                };
                t && n.each(t.split(" "), function(n, t) {
                    i[t] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(t) {
                var i, r = this.element.parent();
                "fill" === t ? (i = r.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var t = n(this),
                        r = t.css("position");
                    "absolute" !== r && "fixed" !== r && (i -= t.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    i -= n(this).outerHeight(!0)
                }), this.panels.each(function() {
                    n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
                }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() {
                    i = Math.max(i, n(this).height("").height())
                }).height(i))
            },
            _eventHandler: function(t) {
                var u = this.options,
                    r = this.active,
                    c = n(t.currentTarget),
                    i = c.closest("li"),
                    f = i[0] === r[0],
                    e = f && u.collapsible,
                    o = e ? n() : this._getPanelForTab(i),
                    s = r.length ? this._getPanelForTab(r) : n(),
                    h = {
                        oldTab: r,
                        oldPanel: s,
                        newTab: e ? n() : i,
                        newPanel: o
                    };
                t.preventDefault(), i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1 || (u.active = e ? !1 : this.tabs.index(i), this.active = f ? n() : i, this.xhr && this.xhr.abort(), s.length || o.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(i), t), this._toggle(t, h))
            },
            _toggle: function(t, i) {
                function e() {
                    u.running = !1, u._trigger("activate", t, i)
                }

                function o() {
                    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && u.options.show ? u._show(r, u.options.show, e) : (r.show(), e())
                }
                var u = this,
                    r = i.newPanel,
                    f = i.oldPanel;
                this.running = !0, f.length && this.options.hide ? this._hide(f, this.options.hide, function() {
                    i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o()
                }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), f.hide(), o()), f.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), i.oldTab.attr("aria-selected", "false"), r.length && f.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                    return 0 === n(this).attr("tabIndex")
                }).attr("tabIndex", -1), r.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }), i.newTab.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                })
            },
            _activate: function(t) {
                var r, i = this._findActive(t);
                i[0] !== this.active[0] && (i.length || (i = this.active), r = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: r,
                    currentTarget: r,
                    preventDefault: n.noop
                }))
            },
            _findActive: function(t) {
                return t === !1 ? n() : this.tabs.eq(t)
            },
            _getIndex: function(n) {
                return "string" == typeof n && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))), n
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                    n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function() {
                    var t = n(this),
                        i = t.data("ui-tabs-aria-controls");
                    i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(i) {
                var r = this.options.disabled;
                r !== !1 && (i === t ? r = !1 : (i = this._getIndex(i), r = n.isArray(r) ? n.map(r, function(n) {
                    return n !== i ? n : null
                }) : n.map(this.tabs, function(n, t) {
                    return t !== i ? t : null
                })), this._setupDisabled(r))
            },
            disable: function(i) {
                var r = this.options.disabled;
                if (r !== !0) {
                    if (i === t) r = !0;
                    else {
                        if (i = this._getIndex(i), -1 !== n.inArray(i, r)) return;
                        r = n.isArray(r) ? n.merge([i], r).sort() : [i]
                    }
                    this._setupDisabled(r)
                }
            },
            load: function(t, r) {
                t = this._getIndex(t);
                var f = this,
                    u = this.tabs.eq(t),
                    o = u.find(".ui-tabs-anchor"),
                    e = this._getPanelForTab(u),
                    s = {
                        tab: u,
                        panel: e
                    };
                i(o[0]) || (this.xhr = n.ajax(this._ajaxSettings(o, r, s)), this.xhr && "canceled" !== this.xhr.statusText && (u.addClass("ui-tabs-loading"), e.attr("aria-busy", "true"), this.xhr.success(function(n) {
                    setTimeout(function() {
                        e.html(n), f._trigger("load", r, s)
                    }, 1)
                }).complete(function(n, t) {
                    setTimeout(function() {
                        "abort" === t && f.panels.stop(!1, !0), u.removeClass("ui-tabs-loading"), e.removeAttr("aria-busy"), n === f.xhr && delete f.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function(t, i, r) {
                var u = this;
                return {
                    url: t.attr("href"),
                    beforeSend: function(t, f) {
                        return u._trigger("beforeLoad", i, n.extend({
                            jqXHR: t,
                            ajaxSettings: f
                        }, r))
                    }
                }
            },
            _getPanelForTab: function(t) {
                var i = n(t).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        })
    }(jQuery), function(n) {
        function t(t, i) {
            var r = (t.attr("aria-describedby") || "").split(/\s+/);
            r.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
        }

        function i(t) {
            var u = t.data("ui-tooltip-id"),
                i = (t.attr("aria-describedby") || "").split(/\s+/),
                r = n.inArray(u, i); - 1 !== r && i.splice(r, 1), t.removeData("ui-tooltip-id"), i = n.trim(i.join(" ")), i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
        }
        var r = 0;
        n.widget("ui.tooltip", {
            version: "1.10.4",
            options: {
                content: function() {
                    var t = n(this).attr("title") || "";
                    return n("<a>").text(t).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
            },
            _setOption: function(t, i) {
                var r = this;
                return "disabled" === t ? (this[i ? "_disable" : "_enable"](), void(this.options[t] = i)) : (this._super(t, i), void("content" === t && n.each(this.tooltips, function(n, t) {
                    r._updateContent(t)
                })))
            },
            _disable: function() {
                var t = this;
                n.each(this.tooltips, function(i, r) {
                    var u = n.Event("blur");
                    u.target = u.currentTarget = r[0], t.close(u, !0)
                }), this.element.find(this.options.items).addBack().each(function() {
                    var t = n(this);
                    t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
                })
            },
            _enable: function() {
                this.element.find(this.options.items).addBack().each(function() {
                    var t = n(this);
                    t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                })
            },
            open: function(t) {
                var r = this,
                    i = n(t ? t.target : this.element).closest(this.options.items);
                i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && "mouseover" === t.type && i.parents().each(function() {
                    var i, t = n(this);
                    t.data("ui-tooltip-open") && (i = n.Event("blur"), i.target = i.currentTarget = this, r.close(i, !0)), t.attr("title") && (t.uniqueId(), r.parents[this.id] = {
                        element: this,
                        title: t.attr("title")
                    }, t.attr("title", ""))
                }), this._updateContent(i, t))
            },
            _updateContent: function(n, t) {
                var i, r = this.options.content,
                    u = this,
                    f = t ? t.type : null;
                return "string" == typeof r ? this._open(t, n, r) : (i = r.call(n[0], function(i) {
                    n.data("ui-tooltip-open") && u._delay(function() {
                        t && (t.type = f), this._open(t, n, i)
                    })
                }), void(i && this._open(t, n, i)))
            },
            _open: function(i, r, u) {
                function o(n) {
                    s.of = n, f.is(":hidden") || f.position(s)
                }
                var f, e, h, s = n.extend({}, this.options.position);
                if (u) {
                    if (f = this._find(r), f.length) return void f.find(".ui-tooltip-content").html(u);
                    r.is("[title]") && (i && "mouseover" === i.type ? r.attr("title", "") : r.removeAttr("title")), f = this._tooltip(r), t(r, f.attr("id")), f.find(".ui-tooltip-content").html(u), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                        mousemove: o
                    }), o(i)) : f.position(n.extend({ of: r
                    }, this.options.position)), f.hide(), this._show(f, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                        f.is(":visible") && (o(s.of), clearInterval(h))
                    }, n.fx.interval)), this._trigger("open", i, {
                        tooltip: f
                    }), e = {
                        keyup: function(t) {
                            if (t.keyCode === n.ui.keyCode.ESCAPE) {
                                var i = n.Event(t);
                                i.currentTarget = r[0], this.close(i, !0)
                            }
                        },
                        remove: function() {
                            this._removeTooltip(f)
                        }
                    }, i && "mouseover" !== i.type || (e.mouseleave = "close"), i && "focusin" !== i.type || (e.focusout = "close"), this._on(!0, r, e)
                }
            },
            close: function(t) {
                var f = this,
                    r = n(t ? t.currentTarget : this.element),
                    u = this._find(r);
                this.closing || (clearInterval(this.delayedShow), r.data("ui-tooltip-title") && r.attr("title", r.data("ui-tooltip-title")), i(r), u.stop(!0), this._hide(u, this.options.hide, function() {
                    f._removeTooltip(n(this))
                }), r.removeData("ui-tooltip-open"), this._off(r, "mouseleave focusout keyup"), r[0] !== this.element[0] && this._off(r, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && n.each(this.parents, function(t, i) {
                    n(i.element).attr("title", i.title), delete f.parents[t]
                }), this.closing = !0, this._trigger("close", t, {
                    tooltip: u
                }), this.closing = !1)
            },
            _tooltip: function(t) {
                var u = "ui-tooltip-" + r++,
                    i = n("<div>").attr({
                        id: u,
                        role: "tooltip"
                    }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                return n("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[u] = t, i
            },
            _find: function(t) {
                var i = t.data("ui-tooltip-id");
                return i ? n("#" + i) : n()
            },
            _removeTooltip: function(n) {
                n.remove(), delete this.tooltips[n.attr("id")]
            },
            _destroy: function() {
                var t = this;
                n.each(this.tooltips, function(i, r) {
                    var u = n.Event("blur");
                    u.target = u.currentTarget = r[0], t.close(u, !0), n("#" + i).remove(), r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
                })
            }
        })
    }(jQuery), $(document).ready(function() {
        $("body").on("click", ".socialpopup", function() {
            window.open($(this).attr("data-link"), "socialsharing", "menubar=0,resizable=1,width=700,height=500")
        });
        $("input").keydown(function(n) {
            n.keyCode == 13 && n.preventDefault()
        })
    }), typeof jQuery == "undefined") throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || t[0] == 1 && t[1] == 9 && t[2] < 1 || t[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery), + function(n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            },
            n;
        for (n in t)
            if (i.style[n] !== undefined) return {
                end: t[n]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    }, n(function() {
        (n.support.transition = t(), n.support.transition) && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(n) {
    "use strict";

    function u(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this)), typeof i == "string" && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.VERSION = "3.3.6", t.TRANSITION_DURATION = 150, t.prototype.close = function(i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this),
            u = f.attr("data-target"),
            r;
        (u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, "")), r = n(u), i && i.preventDefault(), r.length || (r = f.closest(".alert")), r.trigger(i = n.Event("close.bs.alert")), i.isDefaultPrevented()) || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    }, r = n.fn.alert, n.fn.alert = u, n.fn.alert.Constructor = t, n.fn.alert.noConflict = function() {
        return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery), + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = typeof i == "object" && i;
            r || u.data("bs.button", r = new t(this, f)), i == "toggle" ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
            this.$element = n(i), this.options = n.extend({}, t.DEFAULTS, r), this.isLoading = !1
        },
        r;
    t.VERSION = "3.3.6", t.DEFAULTS = {
        loadingText: "loading..."
    }, t.prototype.setState = function(t) {
        var r = "disabled",
            i = this.$element,
            f = i.is("input") ? "val" : "html",
            u = i.data();
        t += "Text", u.resetText == null && i.data("resetText", i[f]()), setTimeout(n.proxy(function() {
            i[f](u[t] == null ? this.options[t] : u[t]), t == "loadingText" ? (this.isLoading = !0, i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1, i.removeClass(r).removeAttr(r))
        }, this), 0)
    }, t.prototype.toggle = function() {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length ? (n = this.$element.find("input"), n.prop("type") == "radio" ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : n.prop("type") == "checkbox" && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    }, r = n.fn.button, n.fn.button = i, n.fn.button.Constructor = t, n.fn.button.noConflict = function() {
        return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = n(t.target);
        r.hasClass("btn") || (r = r.closest(".btn")), i.call(r, "toggle"), n(t.target).is('input[type="radio"]') || n(t.target).is('input[type="checkbox"]') || t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i),
                e = typeof i == "string" ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f)), typeof i == "number" ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
            this.$element = n(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this)), this.options.pause != "hover" || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
        },
        u, r;
    t.VERSION = "3.3.6", t.TRANSITION_DURATION = 600, t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    }, t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    }, t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    }, t.prototype.getItemForDirection = function(n, t) {
        var i = this.getItemIndex(t),
            f = n == "prev" && i === 0 || n == "next" && i == this.$items.length - 1,
            r, u;
        return f && !this.options.wrap ? t : (r = n == "prev" ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
    }, t.prototype.to = function(n) {
        var i = this,
            t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1) && !(n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    }, t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"),
            u = r || this.getItemForDirection(i, e),
            l = this.interval,
            f = i == "next" ? "left" : "right",
            a = this,
            o, s, h, c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), this.$element.trigger(s), s.isDefaultPrevented()) ? void 0 : (this.sliding = !0, l && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
            u.removeClass([i, f].join(" ")).addClass("active"), e.removeClass(["active", f].join(" ")), a.sliding = !1, setTimeout(function() {
                a.$element.trigger(c)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this)
    }, u = n.fn.carousel, n.fn.carousel = i, n.fn.carousel.Constructor = t, n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u, this
    }, r = function(t) {
        var o, r = n(this),
            u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
            e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery), + function(n) {
    "use strict";

    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1), r || u.data("bs.collapse", r = new t(this, f)), typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.$element = n(i), this.options = n.extend({}, t.DEFAULTS, r), this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        },
        u;
    t.VERSION = "3.3.6", t.TRANSITION_DURATION = 350, t.DEFAULTS = {
        toggle: !0
    }, t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    }, t.prototype.show = function() {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !r || !r.length || (f = r.data("bs.collapse"), !f || !f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented())) {
            if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition) return o.call(this);
            s = n.camelCase(["scroll", u].join("-")), this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    }, t.prototype.hide = function() {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) {
            if (i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                }, !n.support.transition) return u.call(this);
            this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
        }
    }, t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    }, t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i), t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    }, u = n.fn.collapse, n.fn.collapse = i, n.fn.collapse.Constructor = t, n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u),
            e = f.data("bs.collapse"),
            o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery), + function(n) {
    "use strict";

    function r(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function u(t) {
        t && t.which === 3 || (n(e).remove(), n(i).each(function() {
            var u = n(this),
                i = r(u),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && (t && t.type == "click" && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented()) || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f))))
        }))
    }

    function o(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this)), typeof i == "string" && u[i].call(r)
        })
    }
    var e = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.6", t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f), o = i.hasClass("open"), u(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length) n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u);
                if (e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    }, t.prototype.keydown = function(t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = r(e), s = o.hasClass("open"), !s && t.which != 27 || s && t.which == 27) return t.which == 27 && o.find(i).trigger("focus"), e.trigger("click");
            (h = " li:not(.disabled):visible a", f = o.find(".dropdown-menu" + h), f.length) && (u = f.index(t.target), t.which == 38 && u > 0 && u--, t.which == 40 && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
        }
    }, f = n.fn.dropdown, n.fn.dropdown = o, n.fn.dropdown.Constructor = t, n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery), + function(n) {
    "use strict";

    function i(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), typeof i == "object" && i);
            u || f.data("bs.modal", u = new t(this, e)), typeof i == "string" ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
            this.options = i, this.$body = n(document.body), this.$element = n(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        r;
    t.VERSION = "3.3.6", t.TRANSITION_DURATION = 300, t.BACKDROP_TRANSITION_DURATION = 150, t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    }, t.prototype.show = function(i) {
        var r = this,
            u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        if (this.$element.trigger(u), !this.isShown && !u.isDefaultPrevented()) {
            this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize();
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this));
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                    n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                })
            });
            this.backdrop(function() {
                var f = n.support.transition && r.$element.hasClass("fade"),
                    u;
                r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), f && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus(), u = n.Event("shown.bs.modal", {
                    relatedTarget: i
                }), f ? r.$dialog.one("bsTransitionEnd", function() {
                    r.$element.trigger("focus").trigger(u)
                }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
            })
        }
    }, t.prototype.hide = function(i) {
        (i && i.preventDefault(), i = n.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented()) && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    }, t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    }, t.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            n.which == 27 && this.hide()
        }, this));
        else this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, t.prototype.resize = function() {
        if (this.isShown) n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this));
        else n(window).off("resize.bs.modal")
    }, t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide(), this.backdrop(function() {
            n.$body.removeClass("modal-open"), n.resetAdjustments(), n.resetScrollbar(), n.$element.trigger("hidden.bs.modal")
        })
    }, t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, t.prototype.backdrop = function(i) {
        var e = this,
            f = this.$element.hasClass("fade") ? "fade" : "",
            r, u;
        if (this.isShown && this.options.backdrop) {
            r = n.support.transition && f, this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = !1;
                    return
                }
                n.target === n.currentTarget && (this.options.backdrop == "static" ? this.$element[0].focus() : this.hide())
            }, this));
            if (r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
            e.removeBackdrop(), i && i()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    }, t.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    }, t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, t.prototype.checkScrollbar = function() {
        var n = window.innerWidth,
            t;
        n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left)), this.bodyIsOverflowing = document.body.clientWidth < n, this.scrollbarWidth = this.measureScrollbar()
    }, t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    }, t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"),
            t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    }, r = n.fn.modal, n.fn.modal = i, n.fn.modal.Constructor = t, n.fn.modal.noConflict = function() {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this),
            f = r.attr("href"),
            u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            if (!n.isDefaultPrevented()) u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery), + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = typeof i == "object" && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.tooltip", r = new t(this, f)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", n, t)
        },
        i;
    t.VERSION = "3.3.6", t.TRANSITION_DURATION = 150, t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "), e = f.length; e--;)
            if (u = f[e], u == "click") this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else if (u != "manual") {
            o = u == "hover" ? "mouseenter" : "focusin", s = u == "hover" ? "mouseleave" : "focusout";
            this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this));
            this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this))
        }
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    }, t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState[t.type == "focusin" ? "focus" : "hover"] = !0), i.tip().hasClass("in") || i.hoverState == "in") {
            i.hoverState = "in";
            return
        }
        if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
        i.timeout = setTimeout(function() {
            i.hoverState == "in" && i.show()
        }, i.options.delay.show)
    }, t.prototype.isInStateTrue = function() {
        for (var n in this.inState)
            if (this.inState[n]) return !0;
        return !1
    }, t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState[t.type == "focusout" ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout(function() {
                i.hoverState == "out" && i.hide()
            }, i.options.delay.hide)
        }
    }, t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type),
            l, p, e, w, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
            var u = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
            var i = typeof this.options.placement == "function" ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                v = /\s?auto?\s?/i,
                y = v.test(i);
            y && (i = i.replace(v, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(),
                o = r[0].offsetWidth,
                s = r[0].offsetHeight;
            y && (p = i, e = this.getPosition(this.$viewport), i = i == "bottom" && f.bottom + s > e.bottom ? "top" : i == "top" && f.top - s < e.top ? "bottom" : i == "right" && f.right + o > e.width ? "left" : i == "left" && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i)), w = this.getCalculatedOffset(i, f, o, s), this.applyPlacement(w, i), h = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type), u.hoverState = null, n == "out" && u.leave(u)
            }, n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    }, t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            h, f, u;
        isNaN(o) && (o = 0), isNaN(s) && (s = 0), t.top += o, t.left += s, n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0), r.addClass("in"), h = r[0].offsetWidth, f = r[0].offsetHeight, i == "top" && f != e && (t.top = t.top + e - f), u = this.getViewportAdjustedDelta(i, t, h, f), u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i),
            a = c ? u.left * 2 - l + h : u.top * 2 - e + f,
            v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t), this.replaceArrow(a, r[0][v], c)
    }, t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    }, t.prototype.setContent = function() {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), n.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function(i) {
        function e() {
            u.hoverState != "in" && r.detach(), u.$element.removeAttr("aria-describedby").trigger("hidden.bs." + u.type), i && i()
        }
        var u = this,
            r = n(this.$tip),
            f = n.Event("hide.bs." + this.type);
        if (this.$element.trigger(f), !f.isDefaultPrevented()) return r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e(), this.hoverState = null, this
    }, t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || typeof n.attr("data-original-title") != "string") && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function() {
        return this.getTitle()
    }, t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var u = t[0],
            r = u.tagName == "BODY",
            i = u.getBoundingClientRect();
        i.width == null && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = r ? {
                top: 0,
                left: 0
            } : t.offset(),
            e = {
                scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            o = r ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, e, o, f)
    }, t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return n == "bottom" ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : n == "top" ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : n == "left" ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }, t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
                top: 0,
                left: 0
            },
            e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
    }, t.prototype.getTitle = function() {
        var t, i = this.$element,
            n = this.options;
        return t = i.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(i[0]) : n.title)
    }, t.prototype.getUID = function(n) {
        do n += ~~(Math.random() * 1e6); while (document.getElementById(n));
        return n
    }, t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template), this.$tip.length != 1)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.disable = function() {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i))), t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout), this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type), n.$tip && n.$tip.detach(), n.$tip = null, n.$arrow = null, n.$viewport = null
        })
    }, i = n.fn.tooltip, n.fn.tooltip = r, n.fn.tooltip.Constructor = t, n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery), + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = typeof i == "object" && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.popover", r = new t(this, f)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.6", t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    }), t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i), n.find(".popover-content").children().detach().end()[this.options.html ? typeof t == "string" ? "html" : "append" : "text"](t), n.removeClass("fade top bottom left right in"), n.find(".popover-title").html() || n.find(".popover-title").hide()
    }, t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, i = n.fn.popover, n.fn.popover = r, n.fn.popover.Constructor = t, n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery), + function(n) {
    "use strict";

    function t(i, r) {
        this.$body = n(document.body), this.$scrollElement = n(i).is(document.body) ? n(window) : n(i), this.options = n.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = typeof i == "object" && i;
            r || u.data("bs.scrollspy", r = new t(this, f)), typeof i == "string" && r[i]()
        })
    }
    t.VERSION = "3.3.6", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            i = "offset",
            r = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [
                [t[i]().top + r, u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget,
            n;
        if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null, this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (t[n + 1] === undefined || i < t[n + 1]) && this.activate(r[n])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i, n.fn.scrollspy.Constructor = t, n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery), + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this)), typeof i == "string" && r[i]()
        })
    }
    var t = function(t) {
            this.element = n(t)
        },
        u, i;
    t.VERSION = "3.3.6", t.TRANSITION_DURATION = 150, t.prototype.show = function() {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
                e = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                }), t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    }, t.prototype.activate = function(i, r, u) {
        function o() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), e ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade"), i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), u && u()
        }
        var f = r.find("> .active"),
            e = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && e ? f.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION) : o(), f.removeClass("in")
    }, u = n.fn.tab, n.fn.tab = r, n.fn.tab.Constructor = t, n.fn.tab.noConflict = function() {
        return n.fn.tab = u, this
    }, i = function(t) {
        t.preventDefault(), r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = typeof i == "object" && i;
            r || u.data("bs.affix", r = new t(this, f)), typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.options = n.extend({}, t.DEFAULTS, r), this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this)), this.$element = n(i), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        },
        r;
    t.VERSION = "3.3.6", t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
        offset: 0,
        target: window
    }, t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop(),
            f = this.$element.offset(),
            e = this.$target.height();
        if (i != null && this.affixed == "top") return u < i ? "top" : !1;
        if (this.affixed == "bottom") return i != null ? u + this.unpin <= f.top ? !1 : "bottom" : u + e <= n - r ? !1 : "bottom";
        var o = this.affixed == null,
            s = o ? u : f.top,
            h = o ? e : t;
        return i != null && u <= i ? "top" : r != null && s + h >= n - r ? "bottom" : !1
    }, t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    }, t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    }, t.prototype.checkPosition = function() {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom,
                h = Math.max(n(document).height(), n(document.body).height());
            if (typeof r != "object" && (u = f = r), typeof f == "function" && (f = r.top(this.$element)), typeof u == "function" && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
                if (this.unpin != null && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
                this.affixed = i, this.unpin = i == "bottom" ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            i == "bottom" && this.$element.offset({
                top: h - s - u
            })
        }
    }, r = n.fn.affix, n.fn.affix = i, n.fn.affix.Constructor = t, n.fn.affix.noConflict = function() {
        return n.fn.affix = r, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {}, t.offsetBottom != null && (t.offset.bottom = t.offsetBottom), t.offsetTop != null && (t.offset.top = t.offsetTop), i.call(r, t)
        })
    })
}(jQuery), typeof Object.create != "function" && (Object.create = function(n) {
        function t() {}
        return t.prototype = n, new t
    }),
    function(n, t, i) {
        var r = {
            init: function(t, i) {
                var r = this;
                r.$elem = n(i), r.options = n.extend({}, n.fn.owlCarousel.options, r.$elem.data(), t), r.userOptions = t, r.loadContent()
            },
            loadContent: function() {
                function r(n) {
                    var i, r = "";
                    if (typeof t.options.jsonSuccess == "function") t.options.jsonSuccess.apply(this, [n]);
                    else {
                        for (i in n.owl) n.owl.hasOwnProperty(i) && (r += n.owl[i].item);
                        t.$elem.html(r)
                    }
                    t.logIn()
                }
                var t = this,
                    i;
                typeof t.options.beforeInit == "function" && t.options.beforeInit.apply(this, [t.$elem]), typeof t.options.jsonPath == "string" ? (i = t.options.jsonPath, n.getJSON(i, r)) : t.logIn()
            },
            logIn: function() {
                var n = this;
                n.$elem.data("owl-originalStyles", n.$elem.attr("style")), n.$elem.data("owl-originalClasses", n.$elem.attr("class")), n.$elem.css({
                    opacity: 0
                }), n.orignalItems = n.options.items, n.checkBrowser(), n.wrapperWidth = 0, n.checkVisible = null, n.setVars()
            },
            setVars: function() {
                var n = this;
                if (n.$elem.children().length === 0) return !1;
                n.baseClass(), n.eventTypes(), n.$userItems = n.$elem.children(), n.itemsAmount = n.$userItems.length, n.wrapItems(), n.$owlItems = n.$elem.find(".owl-item"), n.$owlWrapper = n.$elem.find(".owl-wrapper"), n.playDirection = "next", n.prevItem = 0, n.prevArr = [0], n.currentItem = 0, n.customEvents(), n.onStartup()
            },
            onStartup: function() {
                var n = this;
                n.updateItems(), n.calculateAll(), n.buildControls(), n.updateControls(), n.response(), n.moveEvents(), n.stopOnHover(), n.owlStatus(), n.options.transitionStyle !== !1 && n.transitionTypes(n.options.transitionStyle), n.options.autoPlay === !0 && (n.options.autoPlay = 5e3), n.play(), n.$elem.find(".owl-wrapper").css("display", "block"), n.$elem.is(":visible") ? n.$elem.css("opacity", 1) : n.watchVisibility(), n.onstartup = !1, n.eachMoveUpdate(), typeof n.options.afterInit == "function" && n.options.afterInit.apply(this, [n.$elem])
            },
            eachMoveUpdate: function() {
                var n = this;
                n.options.lazyLoad === !0 && n.lazyLoad(), n.options.autoHeight === !0 && n.autoHeight(), n.onVisibleItems(), typeof n.options.afterAction == "function" && n.options.afterAction.apply(this, [n.$elem])
            },
            updateVars: function() {
                var n = this;
                typeof n.options.beforeUpdate == "function" && n.options.beforeUpdate.apply(this, [n.$elem]), n.watchVisibility(), n.updateItems(), n.calculateAll(), n.updatePosition(), n.updateControls(), n.eachMoveUpdate(), typeof n.options.afterUpdate == "function" && n.options.afterUpdate.apply(this, [n.$elem])
            },
            reload: function() {
                var n = this;
                t.setTimeout(function() {
                    n.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var n = this;
                if (n.$elem.is(":visible") === !1) n.$elem.css({
                    opacity: 0
                }), t.clearInterval(n.autoPlayInterval), t.clearInterval(n.checkVisible);
                else return !1;
                n.checkVisible = t.setInterval(function() {
                    n.$elem.is(":visible") && (n.reload(), n.$elem.animate({
                        opacity: 1
                    }, 200), t.clearInterval(n.checkVisible))
                }, 500)
            },
            wrapItems: function() {
                var n = this;
                n.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"><\/div>'), n.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), n.wrapperOuter = n.$elem.find(".owl-wrapper-outer"), n.$elem.css("display", "block")
            },
            baseClass: function() {
                var n = this,
                    t = n.$elem.hasClass(n.options.baseClass),
                    i = n.$elem.hasClass(n.options.theme);
                t || n.$elem.addClass(n.options.baseClass), i || n.$elem.addClass(n.options.theme)
            },
            updateItems: function() {
                var t = this,
                    i, r;
                if (t.options.responsive === !1) return !1;
                if (t.options.singleItem === !0) return t.options.items = t.orignalItems = 1, t.options.itemsCustom = !1, t.options.itemsDesktop = !1, t.options.itemsDesktopSmall = !1, t.options.itemsTablet = !1, t.options.itemsTabletSmall = !1, t.options.itemsMobile = !1, !1;
                if (i = n(t.options.responsiveBaseWidth).width(), i > (t.options.itemsDesktop[0] || t.orignalItems) && (t.options.items = t.orignalItems), t.options.itemsCustom !== !1)
                    for (t.options.itemsCustom.sort(function(n, t) {
                            return n[0] - t[0]
                        }), r = 0; r < t.options.itemsCustom.length; r += 1) t.options.itemsCustom[r][0] <= i && (t.options.items = t.options.itemsCustom[r][1]);
                else i <= t.options.itemsDesktop[0] && t.options.itemsDesktop !== !1 && (t.options.items = t.options.itemsDesktop[1]), i <= t.options.itemsDesktopSmall[0] && t.options.itemsDesktopSmall !== !1 && (t.options.items = t.options.itemsDesktopSmall[1]), i <= t.options.itemsTablet[0] && t.options.itemsTablet !== !1 && (t.options.items = t.options.itemsTablet[1]), i <= t.options.itemsTabletSmall[0] && t.options.itemsTabletSmall !== !1 && (t.options.items = t.options.itemsTabletSmall[1]), i <= t.options.itemsMobile[0] && t.options.itemsMobile !== !1 && (t.options.items = t.options.itemsMobile[1]);
                t.options.items > t.itemsAmount && t.options.itemsScaleUp === !0 && (t.options.items = t.itemsAmount)
            },
            response: function() {
                var i = this,
                    u, r;
                if (i.options.responsive !== !0) return !1;
                r = n(t).width(), i.resizer = function() {
                    n(t).width() !== r && (i.options.autoPlay !== !1 && t.clearInterval(i.autoPlayInterval), t.clearTimeout(u), u = t.setTimeout(function() {
                        r = n(t).width(), i.updateVars()
                    }, i.options.responsiveRefreshRate))
                }, n(t).resize(i.resizer)
            },
            updatePosition: function() {
                var n = this;
                n.jumpTo(n.currentItem), n.options.autoPlay !== !1 && n.checkAp()
            },
            appendItemsSizes: function() {
                var t = this,
                    i = 0,
                    r = t.itemsAmount - t.options.items;
                t.$owlItems.each(function(u) {
                    var f = n(this);
                    f.css({
                        width: t.itemWidth
                    }).data("owl-item", Number(u)), (u % t.options.items == 0 || u === r) && (u > r || (i += 1)), f.data("owl-roundPages", i)
                })
            },
            appendWrapperSizes: function() {
                var n = this,
                    t = n.$owlItems.length * n.itemWidth;
                n.$owlWrapper.css({
                    width: t * 2,
                    left: 0
                }), n.appendItemsSizes()
            },
            calculateAll: function() {
                var n = this;
                n.calculateWidth(), n.appendWrapperSizes(), n.loops(), n.max()
            },
            calculateWidth: function() {
                var n = this;
                n.itemWidth = Math.round(n.$elem.width() / n.options.items)
            },
            max: function() {
                var n = this,
                    t = (n.itemsAmount * n.itemWidth - n.options.items * n.itemWidth) * -1;
                return n.options.items > n.itemsAmount ? (n.maximumItem = 0, t = 0, n.maximumPixels = 0) : (n.maximumItem = n.itemsAmount - n.options.items, n.maximumPixels = t), t
            },
            min: function() {
                return 0
            },
            loops: function() {
                var t = this,
                    r = 0,
                    f = 0,
                    i, e, u;
                for (t.positionsInArray = [0], t.pagesInArray = [], i = 0; i < t.itemsAmount; i += 1) f += t.itemWidth, t.positionsInArray.push(-f), t.options.scrollPerPage === !0 && (e = n(t.$owlItems[i]), u = e.data("owl-roundPages"), u !== r && (t.pagesInArray[r] = t.positionsInArray[i], r = u))
            },
            buildControls: function() {
                var t = this;
                (t.options.navigation === !0 || t.options.pagination === !0) && (t.owlControls = n('<div class="owl-controls"/>').toggleClass("clickable", !t.browser.isTouch).appendTo(t.$elem)), t.options.pagination === !0 && t.buildPagination(), t.options.navigation === !0 && t.buildButtons()
            },
            buildButtons: function() {
                var t = this,
                    i = n('<div class="owl-buttons"/>');
                t.owlControls.append(i), t.buttonPrev = n("<div/>", {
                    "class": "owl-prev",
                    html: t.options.navigationText[0] || ""
                }), t.buttonNext = n("<div/>", {
                    "class": "owl-next",
                    html: t.options.navigationText[1] || ""
                }), i.append(t.buttonPrev).append(t.buttonNext);
                i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(n) {
                    n.preventDefault()
                });
                i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(i) {
                    i.preventDefault(), n(this).hasClass("owl-next") ? t.next() : t.prev()
                })
            },
            buildPagination: function() {
                var t = this;
                t.paginationWrapper = n('<div class="owl-pagination"/>'), t.owlControls.append(t.paginationWrapper);
                t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(i) {
                    i.preventDefault(), Number(n(this).data("owl-page")) !== t.currentItem && t.goTo(Number(n(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var t = this,
                    u, f, e, i, r, o;
                if (t.options.pagination === !1) return !1;
                for (t.paginationWrapper.html(""), u = 0, f = t.itemsAmount - t.itemsAmount % t.options.items, i = 0; i < t.itemsAmount; i += 1) i % t.options.items == 0 && (u += 1, f === i && (e = t.itemsAmount - t.options.items), r = n("<div/>", {
                    "class": "owl-page"
                }), o = n("<span><\/span>", {
                    text: t.options.paginationNumbers === !0 ? u : "",
                    "class": t.options.paginationNumbers === !0 ? "owl-numbers" : ""
                }), r.append(o), r.data("owl-page", f === i ? e : i), r.data("owl-roundPages", u), t.paginationWrapper.append(r));
                t.checkPagination()
            },
            checkPagination: function() {
                var t = this;
                if (t.options.pagination === !1) return !1;
                t.paginationWrapper.find(".owl-page").each(function() {
                    n(this).data("owl-roundPages") === n(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), n(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var n = this;
                if (n.options.navigation === !1) return !1;
                n.options.rewindNav === !1 && (n.currentItem === 0 && n.maximumItem === 0 ? (n.buttonPrev.addClass("disabled"), n.buttonNext.addClass("disabled")) : n.currentItem === 0 && n.maximumItem !== 0 ? (n.buttonPrev.addClass("disabled"), n.buttonNext.removeClass("disabled")) : n.currentItem === n.maximumItem ? (n.buttonPrev.removeClass("disabled"), n.buttonNext.addClass("disabled")) : n.currentItem !== 0 && n.currentItem !== n.maximumItem && (n.buttonPrev.removeClass("disabled"), n.buttonNext.removeClass("disabled")))
            },
            updateControls: function() {
                var n = this;
                n.updatePagination(), n.checkNavigation(), n.owlControls && (n.options.items >= n.itemsAmount ? n.owlControls.hide() : n.owlControls.show())
            },
            destroyControls: function() {
                var n = this;
                n.owlControls && n.owlControls.remove()
            },
            next: function(n) {
                var t = this;
                if (t.isTransition) return !1;
                if (t.currentItem += t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem > t.maximumItem + (t.options.scrollPerPage === !0 ? t.options.items - 1 : 0))
                    if (t.options.rewindNav === !0) t.currentItem = 0, n = "rewind";
                    else return t.currentItem = t.maximumItem, !1;
                t.goTo(t.currentItem, n)
            },
            prev: function(n) {
                var t = this;
                if (t.isTransition) return !1;
                if (t.options.scrollPerPage === !0 && t.currentItem > 0 && t.currentItem < t.options.items ? t.currentItem = 0 : t.currentItem -= t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem < 0)
                    if (t.options.rewindNav === !0) t.currentItem = t.maximumItem, n = "rewind";
                    else return t.currentItem = 0, !1;
                t.goTo(t.currentItem, n)
            },
            goTo: function(n, i, r) {
                var u = this,
                    f;
                if (u.isTransition) return !1;
                if (typeof u.options.beforeMove == "function" && u.options.beforeMove.apply(this, [u.$elem]), n >= u.maximumItem ? n = u.maximumItem : n <= 0 && (n = 0), u.currentItem = u.owl.currentItem = n, u.options.transitionStyle !== !1 && r !== "drag" && u.options.items === 1 && u.browser.support3d === !0) return u.swapSpeed(0), u.browser.support3d === !0 ? u.transition3d(u.positionsInArray[n]) : u.css2slide(u.positionsInArray[n], 1), u.afterGo(), u.singleItemTransition(), !1;
                f = u.positionsInArray[n], u.browser.support3d === !0 ? (u.isCss3Finish = !1, i === !0 ? (u.swapSpeed("paginationSpeed"), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.paginationSpeed)) : i === "rewind" ? (u.swapSpeed(u.options.rewindSpeed), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.rewindSpeed)) : (u.swapSpeed("slideSpeed"), t.setTimeout(function() {
                    u.isCss3Finish = !0
                }, u.options.slideSpeed)), u.transition3d(f)) : i === !0 ? u.css2slide(f, u.options.paginationSpeed) : i === "rewind" ? u.css2slide(f, u.options.rewindSpeed) : u.css2slide(f, u.options.slideSpeed), u.afterGo()
            },
            jumpTo: function(n) {
                var t = this;
                typeof t.options.beforeMove == "function" && t.options.beforeMove.apply(this, [t.$elem]), n >= t.maximumItem || n === -1 ? n = t.maximumItem : n <= 0 && (n = 0), t.swapSpeed(0), t.browser.support3d === !0 ? t.transition3d(t.positionsInArray[n]) : t.css2slide(t.positionsInArray[n], 1), t.currentItem = t.owl.currentItem = n, t.afterGo()
            },
            afterGo: function() {
                var n = this;
                n.prevArr.push(n.currentItem), n.prevItem = n.owl.prevItem = n.prevArr[n.prevArr.length - 2], n.prevArr.shift(0), n.prevItem !== n.currentItem && (n.checkPagination(), n.checkNavigation(), n.eachMoveUpdate(), n.options.autoPlay !== !1 && n.checkAp()), typeof n.options.afterMove == "function" && n.prevItem !== n.currentItem && n.options.afterMove.apply(this, [n.$elem])
            },
            stop: function() {
                var n = this;
                n.apStatus = "stop", t.clearInterval(n.autoPlayInterval)
            },
            checkAp: function() {
                var n = this;
                n.apStatus !== "stop" && n.play()
            },
            play: function() {
                var n = this;
                if (n.apStatus = "play", n.options.autoPlay === !1) return !1;
                t.clearInterval(n.autoPlayInterval), n.autoPlayInterval = t.setInterval(function() {
                    n.next(!0)
                }, n.options.autoPlay)
            },
            swapSpeed: function(n) {
                var t = this;
                n === "slideSpeed" ? t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)) : n === "paginationSpeed" ? t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)) : typeof n != "string" && t.$owlWrapper.css(t.addCssSpeed(n))
            },
            addCssSpeed: function(n) {
                return {
                    "-webkit-transition": "all " + n + "ms ease",
                    "-moz-transition": "all " + n + "ms ease",
                    "-o-transition": "all " + n + "ms ease",
                    transition: "all " + n + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(n) {
                return {
                    "-webkit-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + n + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + n + "px, 0px, 0px)",
                    transform: "translate3d(" + n + "px, 0px,0px)"
                }
            },
            transition3d: function(n) {
                var t = this;
                t.$owlWrapper.css(t.doTranslate(n))
            },
            css2move: function(n) {
                var t = this;
                t.$owlWrapper.css({
                    left: n
                })
            },
            css2slide: function(n, t) {
                var i = this;
                i.isCssFinish = !1, i.$owlWrapper.stop(!0, !0).animate({
                    left: n
                }, {
                    duration: t || i.options.slideSpeed,
                    complete: function() {
                        i.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var s = this,
                    n = "translate3d(0px, 0px, 0px)",
                    u = i.createElement("div"),
                    f, r, e, o;
                u.style.cssText = "  -moz-transform:" + n + "; -ms-transform:" + n + "; -o-transform:" + n + "; -webkit-transform:" + n + "; transform:" + n, f = /translate3d\(0px, 0px, 0px\)/g, r = u.style.cssText.match(f), e = r !== null && r.length === 1, o = "ontouchstart" in t || t.navigator.msMaxTouchPoints, s.browser = {
                    support3d: e,
                    isTouch: o
                }
            },
            moveEvents: function() {
                var n = this;
                (n.options.mouseDrag !== !1 || n.options.touchDrag !== !1) && (n.gestures(), n.disabledEvents())
            },
            eventTypes: function() {
                var n = this,
                    t = ["s", "e", "x"];
                n.ev_types = {}, n.options.mouseDrag === !0 && n.options.touchDrag === !0 ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : n.options.mouseDrag === !1 && n.options.touchDrag === !0 ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : n.options.mouseDrag === !0 && n.options.touchDrag === !1 && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), n.ev_types.start = t[0], n.ev_types.move = t[1], n.ev_types.end = t[2]
            },
            disabledEvents: function() {
                var t = this;
                t.$elem.on("dragstart.owl", function(n) {
                    n.preventDefault()
                });
                t.$elem.on("mousedown.disableTextSelect", function(t) {
                    return n(t.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function f(n) {
                    if (n.touches !== undefined) return {
                        x: n.touches[0].pageX,
                        y: n.touches[0].pageY
                    };
                    if (n.touches === undefined) {
                        if (n.pageX !== undefined) return {
                            x: n.pageX,
                            y: n.pageY
                        };
                        if (n.pageX === undefined) return {
                            x: n.clientX,
                            y: n.clientY
                        }
                    }
                }

                function e(t) {
                    if (t === "on") {
                        n(i).on(r.ev_types.move, s);
                        n(i).on(r.ev_types.end, h)
                    } else t === "off" && (n(i).off(r.ev_types.move), n(i).off(r.ev_types.end))
                }

                function o(i) {
                    var o = i.originalEvent || i || t.event,
                        s;
                    if (o.which === 3) return !1;
                    if (!(r.itemsAmount <= r.options.items)) {
                        if (r.isCssFinish === !1 && !r.options.dragBeforeAnimFinish || r.isCss3Finish === !1 && !r.options.dragBeforeAnimFinish) return !1;
                        r.options.autoPlay !== !1 && t.clearInterval(r.autoPlayInterval), r.browser.isTouch === !0 || r.$owlWrapper.hasClass("grabbing") || r.$owlWrapper.addClass("grabbing"), r.newPosX = 0, r.newRelativeX = 0, n(this).css(r.removeTransition()), s = n(this).position(), u.relativePos = s.left, u.offsetX = f(o).x - s.left, u.offsetY = f(o).y - s.top, e("on"), u.sliding = !1, u.targetElement = o.target || o.srcElement
                    }
                }

                function s(e) {
                    var o = e.originalEvent || e || t.event,
                        s, h;
                    r.newPosX = f(o).x - u.offsetX, r.newPosY = f(o).y - u.offsetY, r.newRelativeX = r.newPosX - u.relativePos, typeof r.options.startDragging == "function" && u.dragging !== !0 && r.newRelativeX !== 0 && (u.dragging = !0, r.options.startDragging.apply(r, [r.$elem])), (r.newRelativeX > 8 || r.newRelativeX < -8) && r.browser.isTouch === !0 && (o.preventDefault !== undefined ? o.preventDefault() : o.returnValue = !1, u.sliding = !0), (r.newPosY > 10 || r.newPosY < -10) && u.sliding === !1 && n(i).off("touchmove.owl"), s = function() {
                        return r.newRelativeX / 5
                    }, h = function() {
                        return r.maximumPixels + r.newRelativeX / 5
                    }, r.newPosX = Math.max(Math.min(r.newPosX, s()), h()), r.browser.support3d === !0 ? r.transition3d(r.newPosX) : r.css2move(r.newPosX)
                }

                function h(i) {
                    var f = i.originalEvent || i || t.event,
                        s, o, h;
                    if (f.target = f.target || f.srcElement, u.dragging = !1, r.browser.isTouch !== !0 && r.$owlWrapper.removeClass("grabbing"), r.dragDirection = r.newRelativeX < 0 ? r.owl.dragDirection = "left" : r.owl.dragDirection = "right", r.newRelativeX !== 0 && (s = r.getNewPosition(), r.goTo(s, !1, "drag"), u.targetElement === f.target && r.browser.isTouch !== !0)) {
                        n(f.target).on("click.disable", function(t) {
                            t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), n(t.target).off("click.disable")
                        });
                        o = n._data(f.target, "events").click, h = o.pop(), o.splice(0, 0, h)
                    }
                    e("off")
                }
                var r = this,
                    u = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                r.isCssFinish = !0;
                r.$elem.on(r.ev_types.start, ".owl-wrapper", o)
            },
            getNewPosition: function() {
                var n = this,
                    t = n.closestItem();
                return t > n.maximumItem ? (n.currentItem = n.maximumItem, t = n.maximumItem) : n.newPosX >= 0 && (t = 0, n.currentItem = 0), t
            },
            closestItem: function() {
                var t = this,
                    i = t.options.scrollPerPage === !0 ? t.pagesInArray : t.positionsInArray,
                    u = t.newPosX,
                    r = null;
                return n.each(i, function(f, e) {
                    u - t.itemWidth / 20 > i[f + 1] && u - t.itemWidth / 20 < e && t.moveDirection() === "left" ? (r = e, t.currentItem = t.options.scrollPerPage === !0 ? n.inArray(r, t.positionsInArray) : f) : u + t.itemWidth / 20 < e && u + t.itemWidth / 20 > (i[f + 1] || i[f] - t.itemWidth) && t.moveDirection() === "right" && (t.options.scrollPerPage === !0 ? (r = i[f + 1] || i[i.length - 1], t.currentItem = n.inArray(r, t.positionsInArray)) : (r = i[f + 1], t.currentItem = f + 1))
                }), t.currentItem
            },
            moveDirection: function() {
                var n = this,
                    t;
                return n.newRelativeX < 0 ? (t = "right", n.playDirection = "next") : (t = "left", n.playDirection = "prev"), t
            },
            customEvents: function() {
                var n = this;
                n.$elem.on("owl.next", function() {
                    n.next()
                });
                n.$elem.on("owl.prev", function() {
                    n.prev()
                });
                n.$elem.on("owl.play", function(t, i) {
                    n.options.autoPlay = i, n.play(), n.hoverStatus = "play"
                });
                n.$elem.on("owl.stop", function() {
                    n.stop(), n.hoverStatus = "stop"
                });
                n.$elem.on("owl.goTo", function(t, i) {
                    n.goTo(i)
                });
                n.$elem.on("owl.jumpTo", function(t, i) {
                    n.jumpTo(i)
                })
            },
            stopOnHover: function() {
                var n = this;
                if (n.options.stopOnHover === !0 && n.browser.isTouch !== !0 && n.options.autoPlay !== !1) {
                    n.$elem.on("mouseover", function() {
                        n.stop()
                    });
                    n.$elem.on("mouseout", function() {
                        n.hoverStatus !== "stop" && n.play()
                    })
                }
            },
            lazyLoad: function() {
                var t = this,
                    u, i, f, r, e;
                if (t.options.lazyLoad === !1) return !1;
                for (u = 0; u < t.itemsAmount; u += 1)
                    if (i = n(t.$owlItems[u]), i.data("owl-loaded") !== "loaded") {
                        if (f = i.data("owl-item"), r = i.find(".lazyOwl"), typeof r.data("src") != "string") {
                            i.data("owl-loaded", "loaded");
                            continue
                        }
                        i.data("owl-loaded") === undefined && (r.hide(), i.addClass("loading").data("owl-loaded", "checked")), e = t.options.lazyFollow === !0 ? f >= t.currentItem : !0, e && f < t.currentItem + t.options.items && r.length && t.lazyPreload(i, r)
                    }
            },
            lazyPreload: function(n, i) {
                function e() {
                    n.data("owl-loaded", "loaded").removeClass("loading"), i.removeAttr("data-src"), r.options.lazyEffect === "fade" ? i.fadeIn(400) : i.show(), typeof r.options.afterLazyLoad == "function" && r.options.afterLazyLoad.apply(this, [r.$elem])
                }

                function o() {
                    u += 1, r.completeImg(i.get(0)) || f === !0 ? e() : u <= 100 ? t.setTimeout(o, 100) : e()
                }
                var r = this,
                    u = 0,
                    f;
                i.prop("tagName") === "DIV" ? (i.css("background-image", "url(" + i.data("src") + ")"), f = !0) : i[0].src = i.data("src"), o()
            },
            autoHeight: function() {
                function f() {
                    var r = n(i.$owlItems[i.currentItem]).height();
                    i.wrapperOuter.css("height", r + "px"), i.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function() {
                        i.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function e() {
                    r += 1, i.completeImg(u.get(0)) ? f() : r <= 100 ? t.setTimeout(e, 100) : i.wrapperOuter.css("height", "")
                }
                var i = this,
                    u = n(i.$owlItems[i.currentItem]).find("img"),
                    r;
                u.get(0) !== undefined ? (r = 0, e()) : f()
            },
            completeImg: function(n) {
                var t;
                return n.complete ? (t = typeof n.naturalWidth, t !== "undefined" && n.naturalWidth === 0) ? !1 : !0 : !1
            },
            onVisibleItems: function() {
                var t = this,
                    i;
                for (t.options.addClassActive === !0 && t.$owlItems.removeClass("active"), t.visibleItems = [], i = t.currentItem; i < t.currentItem + t.options.items; i += 1) t.visibleItems.push(i), t.options.addClassActive === !0 && n(t.$owlItems[i]).addClass("active");
                t.owl.visibleItems = t.visibleItems
            },
            transitionTypes: function(n) {
                var t = this;
                t.outClass = "owl-" + n + "-out", t.inClass = "owl-" + n + "-in"
            },
            singleItemTransition: function() {
                function s(n) {
                    return {
                        position: "relative",
                        left: n + "px"
                    }
                }
                var n = this,
                    f = n.outClass,
                    e = n.inClass,
                    i = n.$owlItems.eq(n.currentItem),
                    r = n.$owlItems.eq(n.prevItem),
                    o = Math.abs(n.positionsInArray[n.currentItem]) + n.positionsInArray[n.prevItem],
                    u = Math.abs(n.positionsInArray[n.currentItem]) + n.itemWidth / 2,
                    t = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                n.isTransition = !0, n.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": u + "px",
                    "-moz-perspective-origin": u + "px",
                    "perspective-origin": u + "px"
                });
                r.css(s(o, 10)).addClass(f).on(t, function() {
                    n.endPrev = !0, r.off(t), n.clearTransStyle(r, f)
                });
                i.addClass(e).on(t, function() {
                    n.endCurrent = !0, i.off(t), n.clearTransStyle(i, e)
                })
            },
            clearTransStyle: function(n, t) {
                var i = this;
                n.css({
                    position: "",
                    left: ""
                }).removeClass(t), i.endPrev && i.endCurrent && (i.$owlWrapper.removeClass("owl-origin"), i.endPrev = !1, i.endCurrent = !1, i.isTransition = !1)
            },
            owlStatus: function() {
                var n = this;
                n.owl = {
                    userOptions: n.userOptions,
                    baseElement: n.$elem,
                    userItems: n.$userItems,
                    owlItems: n.$owlItems,
                    currentItem: n.currentItem,
                    prevItem: n.prevItem,
                    visibleItems: n.visibleItems,
                    isTouch: n.browser.isTouch,
                    browser: n.browser,
                    dragDirection: n.dragDirection
                }
            },
            clearEvents: function() {
                var r = this;
                r.$elem.off(".owl owl mousedown.disableTextSelect"), n(i).off(".owl owl"), n(t).off("resize", r.resizer)
            },
            unWrap: function() {
                var n = this;
                n.$elem.children().length !== 0 && (n.$owlWrapper.unwrap(), n.$userItems.unwrap().unwrap(), n.owlControls && n.owlControls.remove()), n.clearEvents(), n.$elem.attr("style", n.$elem.data("owl-originalStyles") || "").attr("class", n.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                var n = this;
                n.stop(), t.clearInterval(n.checkVisible), n.unWrap(), n.$elem.removeData()
            },
            reinit: function(t) {
                var i = this,
                    r = n.extend({}, i.userOptions, t);
                i.unWrap(), i.init(r, i.$elem)
            },
            addItem: function(n, t) {
                var i = this,
                    r;
                if (!n) return !1;
                if (i.$elem.children().length === 0) return i.$elem.append(n), i.setVars(), !1;
                i.unWrap(), r = t === undefined || t === -1 ? -1 : t, r >= i.$userItems.length || r === -1 ? i.$userItems.eq(-1).after(n) : i.$userItems.eq(r).before(n), i.setVars()
            },
            removeItem: function(n) {
                var t = this,
                    i;
                if (t.$elem.children().length === 0) return !1;
                i = n === undefined || n === -1 ? -1 : n, t.unWrap(), t.$userItems.eq(i).remove(), t.setVars()
            }
        };
        n.fn.owlCarousel = function(t) {
            return this.each(function() {
                if (n(this).data("owl-init") === !0) return !1;
                n(this).data("owl-init", !0);
                var i = Object.create(r);
                i.init(t, this), n.data(this, "owlCarousel", i)
            })
        }, n.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: t,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document),
    function(n) {
        var e = Array.prototype.slice,
            h = Array.prototype.splice,
            u = {
                topSpacing: 0,
                bottomSpacing: 0,
                className: "is-sticky",
                wrapperClassName: "sticky-wrapper",
                center: !1,
                getWidthFrom: "",
                widthFromWrapper: !0,
                responsiveWidth: !1
            },
            f = n(window),
            c = n(document),
            t = [],
            o = f.height(),
            r = function() {
                for (var e = f.scrollTop(), h = c.height(), l = h - o, a = e > l ? l - e : 0, r, u, s = 0; s < t.length; s++) {
                    var i = t[s],
                        v = i.stickyWrapper.offset().top,
                        y = v - i.topSpacing - a;
                    e <= y ? i.currentTop !== null && (i.stickyElement.css({
                        width: "",
                        position: "",
                        top: ""
                    }), i.stickyElement.parent().removeClass(i.className), i.stickyElement.trigger("sticky-end", [i]), i.currentTop = null) : (r = h - i.stickyElement.outerHeight() - i.topSpacing - i.bottomSpacing - e - a, r = r < 0 ? r + i.topSpacing : i.topSpacing, i.currentTop != r && (i.getWidthFrom ? u = n(i.getWidthFrom).width() || null : i.widthFromWrapper && (u = i.stickyWrapper.width()), u == null && (u = i.stickyElement.width()), i.stickyElement.css("width", u).css("position", "fixed").css("top", r), i.stickyElement.parent().addClass(i.className), i.currentTop === null ? i.stickyElement.trigger("sticky-start", [i]) : i.stickyElement.trigger("sticky-update", [i]), i.currentTop === i.topSpacing && i.currentTop > r || i.currentTop === null && r < i.topSpacing ? i.stickyElement.trigger("sticky-bottom-reached", [i]) : i.currentTop !== null && r === i.topSpacing && i.currentTop < r && i.stickyElement.trigger("sticky-bottom-unreached", [i]), i.currentTop = r))
                }
            },
            s = function() {
                var u, i, r;
                for (o = f.height(), u = 0; u < t.length; u++) i = t[u], r = null, i.getWidthFrom ? i.responsiveWidth === !0 && (r = n(i.getWidthFrom).width()) : i.widthFromWrapper && (r = i.stickyWrapper.width()), r != null && i.stickyElement.css("width", r)
            },
            i = {
                init: function(i) {
                    var r = n.extend({}, u, i);
                    return this.each(function() {
                        var i = n(this),
                            e = i.attr("id"),
                            o = i.outerHeight(),
                            s = e ? e + "-" + u.wrapperClassName : u.wrapperClassName,
                            h = n("<div><\/div>").attr("id", s).addClass(r.wrapperClassName),
                            f;
                        i.wrapAll(h), f = i.parent(), r.center && f.css({
                            width: i.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        }), i.css("float") == "right" && i.css({
                            float: "none"
                        }).parent().css({
                            float: "right"
                        }), f.css("height", o), r.stickyElement = i, r.stickyWrapper = f, r.currentTop = null, t.push(r)
                    })
                },
                update: r,
                unstick: function() {
                    return this.each(function() {
                        for (var r = this, u = n(r), f = -1, i = t.length; i-- > 0;) t[i].stickyElement.get(0) === r && (h.call(t, i, 1), f = i);
                        f != -1 && (u.unwrap(), u.css({
                            width: "",
                            position: "",
                            top: "",
                            float: ""
                        }))
                    })
                }
            };
        window.addEventListener ? (window.addEventListener("scroll", r, !1), window.addEventListener("resize", s, !1)) : window.attachEvent && (window.attachEvent("onscroll", r), window.attachEvent("onresize", s)), n.fn.sticky = function(t) {
            if (i[t]) return i[t].apply(this, e.call(arguments, 1));
            if (typeof t != "object" && t) n.error("Method " + t + " does not exist on jQuery.sticky");
            else return i.init.apply(this, arguments)
        }, n.fn.unstick = function(t) {
            if (i[t]) return i[t].apply(this, e.call(arguments, 1));
            if (typeof t != "object" && t) n.error("Method " + t + " does not exist on jQuery.sticky");
            else return i.unstick.apply(this, arguments)
        }, n(function() {
            setTimeout(r, 0)
        })
    }(jQuery);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, t, i) {
                var h = function(n) {
                        for (var i = [], r = n.length, t = 0; t !== r; i.push(n[t++]));
                        return i
                    },
                    r = function(n, t, u) {
                        i.call(this, n, t, u), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    f = 1e-10,
                    o = i._internals,
                    a = o.isSelector,
                    v = o.isArray,
                    u = r.prototype = i.to({}, .1, {}),
                    e = [],
                    s, c, l;
                return r.version = "1.15.1", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, u.updateTo = function(n, t) {
                    var u, h = this.ratio,
                        f = this.vars.immediateRender || n.immediateRender,
                        e, o, s, r;
                    t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (u in n) this.vars[u] = n[u];
                    if (this._initted || f)
                        if (t) this._initted = !1, f && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) e = this._time, this.render(0, !0, !1), this._initted = !1, this.render(e, !0, !1);
                    else if (this._time > 0 || f)
                        for (this._initted = !1, this._init(), s = 1 / (1 - h), r = this._firstPT; r;) o = r.s + r.c, r.c *= s, r.s = o - r.c, r = r._next;
                    return this
                }, u.render = function(n, t, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var l, h, s, p, r, a, v, w, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        b = this._time,
                        y = this._totalTime,
                        k = this._cycle,
                        u = this._duration,
                        c = this._rawPrevTime;
                    if (n >= d ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = u, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (l = !0, h = "onComplete"), 0 === u && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (n = 0), (0 === n || 0 > c || c === f) && c !== n && (i = !0, c > f && (h = "onReverseComplete")), this._rawPrevTime = w = !t || n || c === n ? n : f)) : 1e-7 > n ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== y || 0 === u && c > 0 && c !== f) && (h = "onReverseComplete", l = this._reversed), 0 > n && (this._active = !1, 0 === u && (this._initted || !this.vars.lazy || i) && (c >= 0 && (i = !0), this._rawPrevTime = w = !t || n || c === n ? n : f)), this._initted || (i = !0)) : (this._totalTime = this._time = n, 0 !== this._repeat && (p = u + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 != (1 & this._cycle) && (this._time = u - this._time), this._time > u ? this._time = u : 0 > this._time && (this._time = 0)), this._easeType ? (r = this._time / u, a = this._easeType, v = this._easePower, (1 === a || 3 === a && r >= .5) && (r = 1 - r), 3 === a && (r *= 2), 1 === v ? r *= r : 2 === v ? r *= r * r : 3 === v ? r *= r * r * r : 4 === v && (r *= r * r * r * r), this.ratio = 1 === a ? 1 - r : 2 === a ? r : .5 > this._time / u ? r / 2 : 1 - r / 2) : this.ratio = this._ease.getRatio(this._time / u)), b === this._time && !i && k === this._cycle) return y !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)), void 0;
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = b, this._totalTime = y, this._rawPrevTime = c, this._cycle = k, o.lazyTweens.push(this), this._lazy = [n, t], void 0;
                        this._time && !l ? this.ratio = this._ease.getRatio(this._time / u) : l && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== b && n >= 0 && (this._active = !0), 0 === y && (2 === this._initted && n > 0 && this._init(), this._startAt && (n >= 0 ? this._startAt.render(n, t, i) : h || (h = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === u) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || e))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > n && this._startAt && this._startTime && this._startAt.render(n, t, i), t || (this._totalTime !== y || l) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)), this._cycle !== k && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || e)), h && (!this._gc || i) && (0 > n && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(n, t, i), l && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || e), 0 === u && this._rawPrevTime === f && w !== f && (this._rawPrevTime = 0))
                }, r.to = function(n, t, i) {
                    return new r(n, t, i)
                }, r.from = function(n, t, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(n, t, i)
                }, r.fromTo = function(n, t, i, u) {
                    return u.startAt = i, u.immediateRender = 0 != u.immediateRender && 0 != i.immediateRender, new r(n, t, u)
                }, r.staggerTo = r.allTo = function(n, t, u, f, o, s, c) {
                    f = f || 0;
                    var p, y, l, w, b = u.delay || 0,
                        k = [],
                        d = function() {
                            u.onComplete && u.onComplete.apply(u.onCompleteScope || this, arguments), o.apply(c || this, s || e)
                        };
                    for (v(n) || ("string" == typeof n && (n = i.selector(n) || n), a(n) && (n = h(n))), n = n || [], 0 > f && (n = h(n), n.reverse(), f *= -1), p = n.length - 1, l = 0; p >= l; l++) {
                        y = {};
                        for (w in u) y[w] = u[w];
                        y.delay = b, l === p && o && (y.onComplete = d), k[l] = new r(n[l], t, y), b += f
                    }
                    return k
                }, r.staggerFrom = r.allFrom = function(n, t, i, u, f, e, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(n, t, i, u, f, e, o)
                }, r.staggerFromTo = r.allFromTo = function(n, t, i, u, f, e, o, s) {
                    return u.startAt = i, u.immediateRender = 0 != u.immediateRender && 0 != i.immediateRender, r.staggerTo(n, t, u, f, e, o, s)
                }, r.delayedCall = function(n, t, i, u, f) {
                    return new r(t, 0, {
                        delay: n,
                        onComplete: t,
                        onCompleteParams: i,
                        onCompleteScope: u,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: u,
                        immediateRender: !1,
                        useFrames: f,
                        overwrite: 0
                    })
                }, r.set = function(n, t) {
                    return new r(n, 0, t)
                }, r.isTweening = function(n) {
                    return i.getTweensOf(n, !0).length > 0
                }, s = function(n, t) {
                    for (var u = [], f = 0, r = n._first; r;) r instanceof i ? u[f++] = r : (t && (u[f++] = r), u = u.concat(s(r, t)), f = u.length), r = r._next;
                    return u
                }, c = r.getAllTweens = function(t) {
                    return s(n._rootTimeline, t).concat(s(n._rootFramesTimeline, t))
                }, r.killAll = function(n, i, r, u) {
                    null == i && (i = !0), null == r && (r = !0);
                    for (var o, f, s = c(0 != u), h = s.length, l = i && r && u, e = 0; h > e; e++) f = s[e], (l || f instanceof t || (o = f.target === f.vars.onComplete) && r || i && !o) && (n ? f.totalTime(f._reversed ? 0 : f.totalDuration()) : f._enabled(!1, !1))
                }, r.killChildTweensOf = function(n, t) {
                    if (null != n) {
                        var f, e, s, u, l, c = o.tweenLookup;
                        if ("string" == typeof n && (n = i.selector(n) || n), a(n) && (n = h(n)), v(n))
                            for (u = n.length; --u > -1;) r.killChildTweensOf(n[u], t);
                        else {
                            f = [];
                            for (s in c)
                                for (e = c[s].target.parentNode; e;) e === n && (f = f.concat(c[s].tweens)), e = e.parentNode;
                            for (l = f.length, u = 0; l > u; u++) t && f[u].totalTime(f[u].totalDuration()), f[u]._enabled(!1, !1)
                        }
                    }
                }, l = function(n, i, r, u) {
                    i = i !== !1, r = r !== !1, u = u !== !1;
                    for (var e, f, o = c(u), h = i && r && u, s = o.length; --s > -1;) f = o[s], (h || f instanceof t || (e = f.target === f.vars.onComplete) && r || i && !e) && f.paused(n)
                }, r.pauseAll = function(n, t, i) {
                    l(!0, n, t, i)
                }, r.resumeAll = function(n, t, i) {
                    l(!1, n, t, i)
                }, r.globalTimeScale = function(t) {
                    var r = n._rootTimeline,
                        u = i.ticker.time;
                    return arguments.length ? (t = t || f, r._startTime = u - (u - r._startTime) * r._timeScale / t, r = n._rootFramesTimeline, u = i.ticker.frame, r._startTime = u - (u - r._startTime) * r._timeScale / t, r._timeScale = n._rootTimeline._timeScale = t, t) : r._timeScale
                }, u.progress = function(n) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - n : n) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, u.totalProgress = function(n) {
                    return arguments.length ? this.totalTime(this.totalDuration() * n, !1) : this._totalTime / this.totalDuration()
                }, u.time = function(n, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), n > this._duration && (n = this._duration), this._yoyo && 0 != (1 & this._cycle) ? n = this._duration - n + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (n += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(n, t)) : this._time
                }, u.duration = function(t) {
                    return arguments.length ? n.prototype.duration.call(this, t) : this._duration
                }, u.totalDuration = function(n) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((n - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, u.repeat = function(n) {
                    return arguments.length ? (this._repeat = n, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(n) {
                    return arguments.length ? (this._repeatDelay = n, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(n) {
                    return arguments.length ? (this._yoyo = n, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, t, i) {
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
                    c = o.lazyTweens,
                    l = o.lazyRender,
                    s = [],
                    h = _gsScope._gsDefine.globals,
                    a = function(n) {
                        var t, i = {};
                        for (t in n) i[t] = n[t];
                        return i
                    },
                    w = y.pauseCallback = function(n, t, i, r) {
                        var u = n._timeline,
                            f = u._totalTime;
                        !t && this._forcingPlayhead || u._rawPrevTime === n._startTime || (u.pause(n._startTime), t && t.apply(r || u, i || s), this._forcingPlayhead && u.seek(f))
                    },
                    v = function(n) {
                        for (var i = [], r = n.length, t = 0; t !== r; i.push(n[t++]));
                        return i
                    },
                    r = u.prototype = new t;
                return u.version = "1.15.1", r.constructor = u, r.kill()._gc = r._forcingPlayhead = !1, r.to = function(n, t, r, u) {
                    var f = r.repeat && h.TweenMax || i;
                    return t ? this.add(new f(n, t, r), u) : this.set(n, r, u)
                }, r.from = function(n, t, r, u) {
                    return this.add((r.repeat && h.TweenMax || i).from(n, t, r), u)
                }, r.fromTo = function(n, t, r, u, f) {
                    var e = u.repeat && h.TweenMax || i;
                    return t ? this.add(e.fromTo(n, t, r, u), f) : this.set(n, u, f)
                }, r.staggerTo = function(n, t, r, f, e, o, s, h) {
                    var c, l = new u({
                        onComplete: o,
                        onCompleteParams: s,
                        onCompleteScope: h,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof n && (n = i.selector(n) || n), n = n || [], p(n) && (n = v(n)), f = f || 0, 0 > f && (n = v(n), n.reverse(), f *= -1), c = 0; n.length > c; c++) r.startAt && (r.startAt = a(r.startAt)), l.to(n[c], t, a(r), c * f);
                    return this.add(l, e)
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
                    if (t instanceof n) return this._remove(t, !1);
                    if (t instanceof Array || t && t.push && f(t)) {
                        for (var i = t.length; --i > -1;) this.remove(t[i]);
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
                    var f = i.delayedCall(0, w, ["{self}", t, r, u], this);
                    return f.data = "isPause", this.add(f, n)
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
                    var r, v, o, u, h, a = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        p = this._startTime,
                        w = this._timeScale,
                        y = this._paused;
                    if (n >= a ? (this._totalTime = this._time = a, this._reversed || this._hasPausedChild() || (v = !0, u = "onComplete", 0 === this._duration && (0 === n || 0 > this._rawPrevTime || this._rawPrevTime === e) && this._rawPrevTime !== n && this._first && (h = !0, this._rawPrevTime > e && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || n || this._rawPrevTime === n ? n : e, n = a + .0001) : 1e-7 > n ? (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > n && this._rawPrevTime >= 0)) && (u = "onReverseComplete", v = this._reversed), 0 > n ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = n) : (this._rawPrevTime = this._duration || !t || n || this._rawPrevTime === n ? n : e, n = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = n, this._time !== f && this._first || i || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && n > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= f)
                            for (r = this._first; r && (o = r._next, !this._paused || y);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)), r = o;
                        else
                            for (r = this._last; r && (o = r._prev, !this._paused || y);)(r._active || f >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)), r = o;
                        this._onUpdate && (t || (c.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s))), u && (this._gc || (p === this._startTime || w !== this._timeScale) && (0 === this._time || a >= this.totalDuration()) && (v && (c.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || s)))
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
                }, r.usesFrames = function() {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === n._rootFramesTimeline
                }, r.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, u
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(n, t, i) {
                var e = function(t) {
                        n.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    f = 1e-10,
                    u = [],
                    o = t._internals,
                    s = o.lazyTweens,
                    h = o.lazyRender,
                    c = new i(null, null, 1, 0),
                    r = e.prototype = new n;
                return r.constructor = e, r.kill()._gc = !1, e.version = "1.15.1", r.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
                }, r.addCallback = function(n, i, r, u) {
                    return this.add(t.delayedCall(0, n, r, u), i)
                }, r.removeCallback = function(n, t) {
                    if (n)
                        if (null == t) this._kill(null, n);
                        else
                            for (var i = this.getTweensOf(n, !1), r = i.length, u = this._parseTimeOrLabel(t); --r > -1;) i[r]._startTime === u && i[r]._enabled(!1, !1);
                    return this
                }, r.removePause = function(t) {
                    return this.removeCallback(n._internals.pauseCallback, t)
                }, r.tweenTo = function(n, i) {
                    i = i || {};
                    var e, o, r, f = {
                        ease: c,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (o in i) f[o] = i[o];
                    return f.time = this._parseTimeOrLabel(n), e = Math.abs(Number(f.time) - this._time) / this._timeScale || .001, r = new t(this, e, f), f.onStart = function() {
                        r.target.paused(!0), r.vars.time !== r.target.time() && e === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || r, i.onStartParams || u)
                    }, r
                }, r.tweenFromTo = function(n, t, i) {
                    i = i || {}, n = this._parseTimeOrLabel(n), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [n],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var r = this.tweenTo(t, i);
                    return r.duration(Math.abs(r.vars.time - n) / this._timeScale || .001)
                }, r.render = function(n, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var r, b, p, l, a, w, k = this._dirty ? this.totalDuration() : this._totalDuration,
                        e = this._duration,
                        c = this._time,
                        d = this._totalTime,
                        nt = this._startTime,
                        tt = this._timeScale,
                        o = this._rawPrevTime,
                        g = this._paused,
                        v = this._cycle;
                    if (n >= k ? (this._locked || (this._totalTime = k, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (b = !0, l = "onComplete", 0 === this._duration && (0 === n || 0 > o || o === f) && o !== n && this._first && (a = !0, o > f && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || n || this._rawPrevTime === n ? n : f, this._yoyo && 0 != (1 & this._cycle) ? this._time = n = 0 : (this._time = e, n = e + .0001)) : 1e-7 > n ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== c || 0 === e && o !== f && (o > 0 || 0 > n && o >= 0) && !this._locked) && (l = "onReverseComplete", b = this._reversed), 0 > n ? (this._active = !1, o >= 0 && this._first && (a = !0), this._rawPrevTime = n) : (this._rawPrevTime = e || !t || n || this._rawPrevTime === n ? n : f, n = 0, this._initted || (a = !0))) : (0 === e && 0 > o && (a = !0), this._time = this._rawPrevTime = n, this._locked || (this._totalTime = n, 0 !== this._repeat && (w = e + this._repeatDelay, this._cycle = this._totalTime / w >> 0, 0 !== this._cycle && this._cycle === this._totalTime / w && this._cycle--, this._time = this._totalTime - this._cycle * w, this._yoyo && 0 != (1 & this._cycle) && (this._time = e - this._time), this._time > e ? (this._time = e, n = e + .0001) : 0 > this._time ? this._time = n = 0 : n = this._time))), this._cycle !== v && !this._locked) {
                        var y = this._yoyo && 0 != (1 & v),
                            it = y === (this._yoyo && 0 != (1 & this._cycle)),
                            rt = this._totalTime,
                            ut = this._cycle,
                            ft = this._rawPrevTime,
                            et = this._time;
                        if (this._totalTime = v * e, v > this._cycle ? y = !y : this._totalTime += e, this._time = c, this._rawPrevTime = 0 === e ? o - .0001 : o, this._cycle = v, this._locked = !0, c = y ? 0 : e, this.render(c, t, 0 === e), t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u), it && (c = y ? e + .0001 : -.0001, this.render(c, !0, !1)), this._locked = !1, this._paused && !g) return;
                        this._time = et, this._totalTime = rt, this._cycle = ut, this._rawPrevTime = ft
                    }
                    if (!(this._time !== c && this._first || i || a)) return d !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), void 0;
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && n > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= c)
                        for (r = this._first; r && (p = r._next, !this._paused || g);)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)), r = p;
                    else
                        for (r = this._last; r && (p = r._prev, !this._paused || g);)(r._active || c >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)), r = p;
                    this._onUpdate && (t || (s.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))), l && (this._locked || this._gc || (nt === this._startTime || tt !== this._timeScale) && (0 === this._time || k >= this.totalDuration()) && (b && (s.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || u)))
                }, r.getActive = function(n, t, i) {
                    null == n && (n = !0), null == t && (t = !0), null == i && (i = !1);
                    for (var u, f = [], e = this.getChildren(n, t, i), o = 0, s = e.length, r = 0; s > r; r++) u = e[r], u.isActive() && (f[o++] = u);
                    return f
                }, r.getLabelAfter = function(n) {
                    n || 0 !== n && (n = this._time);
                    for (var i = this.getLabelsArray(), r = i.length, t = 0; r > t; t++)
                        if (i[t].time > n) return i[t].name;
                    return null
                }, r.getLabelBefore = function(n) {
                    null == n && (n = this._time);
                    for (var t = this.getLabelsArray(), i = t.length; --i > -1;)
                        if (n > t[i].time) return t[i].name;
                    return null
                }, r.getLabelsArray = function() {
                    var n, t = [],
                        i = 0;
                    for (n in this._labels) t[i++] = {
                        time: this._labels[n],
                        name: n
                    };
                    return t.sort(function(n, t) {
                        return n.time - t.time
                    }), t
                }, r.progress = function(n, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - n : n) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, r.totalProgress = function(n, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * n, t) : this._totalTime / this.totalDuration()
                }, r.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (n.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, r.time = function(n, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), n > this._duration && (n = this._duration), this._yoyo && 0 != (1 & this._cycle) ? n = this._duration - n + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (n += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(n, t)) : this._time
                }, r.repeat = function(n) {
                    return arguments.length ? (this._repeat = n, this._uncache(!0)) : this._repeat
                }, r.repeatDelay = function(n) {
                    return arguments.length ? (this._repeatDelay = n, this._uncache(!0)) : this._repeatDelay
                }, r.yoyo = function(n) {
                    return arguments.length ? (this._yoyo = n, this) : this._yoyo
                }, r.currentLabel = function(n) {
                    return arguments.length ? this.seek(n, !0) : this.getLabelBefore(this._time + 1e-8)
                }, e
            }, !0),
            function() {
                var h = 180 / Math.PI,
                    n = [],
                    t = [],
                    i = [],
                    f = {},
                    c = _gsScope._gsDefine.globals,
                    u = function(n, t, i, r) {
                        this.a = n, this.b = t, this.c = i, this.d = r, this.da = r - n, this.ca = i - n, this.ba = t - n
                    },
                    l = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    e = function(n, t, i, r) {
                        var e = {
                                a: n
                            },
                            u = {},
                            f = {},
                            o = {
                                c: r
                            },
                            s = (n + t) / 2,
                            a = (t + i) / 2,
                            h = (i + r) / 2,
                            c = (s + a) / 2,
                            l = (a + h) / 2,
                            v = (l - c) / 8;
                        return e.b = s + (n - s) / 4, u.b = c + v, e.c = u.a = (e.b + u.b) / 2, u.c = f.a = (c + l) / 2, f.b = l - v, o.b = h + (r - h) / 4, f.c = o.a = (f.b + o.b) / 2, [e, u, f, o]
                    },
                    a = function(r, u, f, o, s) {
                        for (var v, c, nt, h, y, b, g, tt, l, k, d, it, rt = r.length - 1, p = 0, a = r[0].a, w = 0; rt > w; w++) h = r[p], v = h.a, c = h.d, nt = r[p + 1].d, s ? (k = n[w], d = t[w], it = .25 * (d + k) * u / (o ? .5 : i[w] || .5), y = c - (c - v) * (o ? .5 * u : 0 !== k ? it / k : 0), b = c + (nt - c) * (o ? .5 * u : 0 !== d ? it / d : 0), g = c - (y + ((b - y) * (3 * k / (k + d) + .5) / 4 || 0))) : (y = c - .5 * (c - v) * u, b = c + .5 * (nt - c) * u, g = c - (y + b) / 2), y += g, b += g, h.c = tt = y, h.b = 0 !== w ? a : a = h.a + .6 * (h.c - h.a), h.da = c - v, h.ca = tt - v, h.ba = a - v, f ? (l = e(v, a, tt, c), r.splice(p, 1, l[0], l[1], l[2], l[3]), p += 4) : p++, a = b;
                        h = r[p], h.b = a, h.c = a + .4 * (h.d - a), h.da = h.d - h.a, h.ca = h.c - h.a, h.ba = a - h.a, f && (l = e(h.a, a, h.c, h.d), r.splice(p, 1, l[0], l[1], l[2], l[3]))
                    },
                    v = function(i, r, f, e) {
                        var c, o, l, s, v, a, h = [];
                        if (e)
                            for (i = [e].concat(i), o = i.length; --o > -1;) "string" == typeof(a = i[o][r]) && "=" === a.charAt(1) && (i[o][r] = e[r] + Number(a.charAt(0) + a.substr(2)));
                        if (c = i.length - 2, 0 > c) return h[0] = new u(i[0][r], 0, 0, i[-1 > c ? 0 : 1][r]), h;
                        for (o = 0; c > o; o++) l = i[o][r], s = i[o + 1][r], h[o] = new u(l, 0, 0, s), f && (v = i[o + 2][r], n[o] = (n[o] || 0) + (s - l) * (s - l), t[o] = (t[o] || 0) + (v - s) * (v - s));
                        return h[o] = new u(i[o][r], 0, 0, i[o + 1][r]), h
                    },
                    o = function(r, u, e, o, s, h) {
                        var c, y, w, p, g, nt, k, tt, d = {},
                            b = [],
                            it = h || r[0];
                        s = "string" == typeof s ? "," + s + "," : l, null == u && (u = 1);
                        for (y in r[0]) b.push(y);
                        if (r.length > 1) {
                            for (tt = r[r.length - 1], k = !0, c = b.length; --c > -1;)
                                if (y = b[c], Math.abs(it[y] - tt[y]) > .05) {
                                    k = !1;
                                    break
                                }
                            k && (r = r.concat(), h && r.unshift(h), r.push(r[1]), h = r[r.length - 3])
                        }
                        for (n.length = t.length = i.length = 0, c = b.length; --c > -1;) y = b[c], f[y] = -1 !== s.indexOf("," + y + ","), d[y] = v(r, y, f[y], h);
                        for (c = n.length; --c > -1;) n[c] = Math.sqrt(n[c]), t[c] = Math.sqrt(t[c]);
                        if (!o) {
                            for (c = b.length; --c > -1;)
                                if (f[y])
                                    for (w = d[b[c]], nt = w.length - 1, p = 0; nt > p; p++) g = w[p + 1].da / t[p] + w[p].da / n[p], i[p] = (i[p] || 0) + g * g;
                            for (c = i.length; --c > -1;) i[c] = Math.sqrt(i[c])
                        }
                        for (c = b.length, p = e ? 4 : 1; --c > -1;) y = b[c], w = d[y], a(w, u, e, o, f[y]), k && (w.splice(0, p), w.splice(w.length - p, p));
                        return d
                    },
                    y = function(n, t, i) {
                        t = t || "soft";
                        var o, a, v, w, f, y, r, c, s, e, h, b = {},
                            l = "cubic" === t ? 3 : 2,
                            k = "soft" === t,
                            p = [];
                        if (k && i && (n = [i].concat(n)), null == n || l + 1 > n.length) throw "invalid Bezier data";
                        for (s in n[0]) p.push(s);
                        for (y = p.length; --y > -1;) {
                            for (s = p[y], b[s] = f = [], e = 0, c = n.length, r = 0; c > r; r++) o = null == i ? n[r][s] : "string" == typeof(h = n[r][s]) && "=" === h.charAt(1) ? i[s] + Number(h.charAt(0) + h.substr(2)) : Number(h), k && r > 1 && c - 1 > r && (f[e++] = (o + f[e - 2]) / 2), f[e++] = o;
                            for (c = e - l + 1, e = 0, r = 0; c > r; r += l) o = f[r], a = f[r + 1], v = f[r + 2], w = 2 === l ? 0 : f[r + 3], f[e++] = h = 3 === l ? new u(o, a, v, w) : new u(o, (2 * a + o) / 3, (2 * a + v) / 3, v);
                            f.length = e
                        }
                        return b
                    },
                    p = function(n, t, i) {
                        for (var e, s, o, a, v, y, r, u, h, f, c, p = 1 / i, l = n.length; --l > -1;)
                            for (f = n[l], o = f.a, a = f.d - o, v = f.c - o, y = f.b - o, e = s = 0, u = 1; i >= u; u++) r = p * u, h = 1 - r, e = s - (s = (r * r * a + 3 * h * (r * v + h * y)) * r), c = l * i + u - 1, t[c] = (t[c] || 0) + e * e
                    },
                    w = function(n, t) {
                        t = t >> 0 || 6;
                        var s, i, h, r, f = [],
                            c = [],
                            u = 0,
                            e = 0,
                            a = t - 1,
                            l = [],
                            o = [];
                        for (s in n) p(n[s], f, t);
                        for (h = f.length, i = 0; h > i; i++) u += Math.sqrt(f[i]), r = i % t, o[r] = u, r === a && (e += u, r = i / t >> 0, l[r] = o, c[r] = e, u = 0, o = []);
                        return {
                            length: e,
                            lengths: c,
                            segments: l
                        }
                    },
                    r = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(n, t, i) {
                            var c;
                            this._target = n, t instanceof Array && (t = {
                                values: t
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                            var r, a, f, e, l, s = t.values || [],
                                h = {},
                                v = s[0],
                                u = t.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = u ? u instanceof Array ? u : [
                                ["x", "y", "rotation", u === !0 ? 0 : Number(u) || 0]
                            ] : null;
                            for (r in v) this._props.push(r);
                            for (f = this._props.length; --f > -1;) r = this._props[f], this._overwriteProps.push(r), a = this._func[r] = "function" == typeof n[r], h[r] = a ? n[r.indexOf("set") || "function" != typeof n["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(n[r]), l || h[r] !== s[0][r] && (l = h);
                            if ((this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? o(s, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, l) : y(s, t.type, h), this._segCount = this._beziers[r].length, this._timeRes) && (c = w(this._beziers, this._timeRes), this._length = c.length, this._lengths = c.lengths, this._segments = c.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length), u = this._autoRotate)
                                for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), f = u.length; --f > -1;) {
                                    for (e = 0; 3 > e; e++) r = u[f][e], this._func[r] = "function" == typeof n[r] ? n[r.indexOf("set") || "function" != typeof n["get" + r.substr(3)] ? r : "get" + r.substr(3)] : !1;
                                    r = u[f][2], this._initialRotations[f] = this._func[r] ? this._func[r].call(this._target) : this._target[r]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(n) {
                            var c, d, t, e, i, r, o, p, a, u, l = this._segCount,
                                g = this._func,
                                w = this._target,
                                it = n !== this._startRatio,
                                f, b, k, v, y, nt, tt, s;
                            if (this._timeRes) {
                                if (a = this._lengths, u = this._curSeg, n *= this._length, t = this._li, n > this._l2 && l - 1 > t) {
                                    for (p = l - 1; p > t && n >= (this._l2 = a[++t]););
                                    this._l1 = a[t - 1], this._li = t, this._curSeg = u = this._segments[t], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > n && t > 0) {
                                    for (; t > 0 && (this._l1 = a[--t]) >= n;);
                                    0 === t && this._l1 > n ? this._l1 = 0 : t++, this._l2 = a[t], this._li = t, this._curSeg = u = this._segments[t], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (c = t, n -= this._l1, t = this._si, n > this._s2 && u.length - 1 > t) {
                                    for (p = u.length - 1; p > t && n >= (this._s2 = u[++t]););
                                    this._s1 = u[t - 1], this._si = t
                                } else if (this._s1 > n && t > 0) {
                                    for (; t > 0 && (this._s1 = u[--t]) >= n;);
                                    0 === t && this._s1 > n ? this._s1 = 0 : t++, this._s2 = u[t], this._si = t
                                }
                                r = (t + (n - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else c = 0 > n ? 0 : n >= 1 ? l - 1 : l * n >> 0, r = (n - c * (1 / l)) * l;
                            for (d = 1 - r, t = this._props.length; --t > -1;) e = this._props[t], i = this._beziers[e][c], o = (r * r * i.da + 3 * d * (r * i.ca + d * i.ba)) * r + i.a, this._round[e] && (o = Math.round(o)), g[e] ? w[e](o) : w[e] = o;
                            if (this._autoRotate)
                                for (s = this._autoRotate, t = s.length; --t > -1;) e = s[t][2], nt = s[t][3] || 0, tt = s[t][4] === !0 ? 1 : h, i = this._beziers[s[t][0]], f = this._beziers[s[t][1]], i && f && (i = i[c], f = f[c], b = i.a + (i.b - i.a) * r, v = i.b + (i.c - i.b) * r, b += (v - b) * r, v += (i.c + (i.d - i.c) * r - v) * r, k = f.a + (f.b - f.a) * r, y = f.b + (f.c - f.b) * r, k += (y - k) * r, y += (f.c + (f.d - f.c) * r - y) * r, o = it ? Math.atan2(y - k, v - b) * tt + nt : this._initialRotations[t], g[e] ? w[e](o) : w[e] = o)
                        }
                    }),
                    s = r.prototype;
                r.bezierThrough = o, r.cubicToQuadratic = e, r._autoCSS = !0, r.quadraticToCubic = function(n, t, i) {
                    return new u(n, (2 * t + n) / 3, (2 * t + i) / 3, i)
                }, r._cssRegister = function() {
                    var t = c.CSSPlugin;
                    if (t) {
                        var n = t._internals,
                            i = n._parseToProxy,
                            u = n._setPluginRatio,
                            f = n.CSSPropTween;
                        n._registerComplexSpecialProp("bezier", {
                            parser: function(n, t, e, o, s, h) {
                                t instanceof Array && (t = {
                                    values: t
                                }), h = new r;
                                var l, v, a, p = t.values,
                                    y = p.length - 1,
                                    w = [],
                                    c = {};
                                if (0 > y) return s;
                                for (l = 0; y >= l; l++) a = i(n, p[l], o, s, h, y !== l), w[l] = a.end;
                                for (v in t) c[v] = t[v];
                                return c.values = w, s = new f(n, "bezier", 0, 0, a.pt, 2), s.data = a, s.plugin = h, s.setRatio = u, 0 === c.autoRotate && (c.autoRotate = !0), !c.autoRotate || c.autoRotate instanceof Array || (l = c.autoRotate === !0 ? 0 : Number(c.autoRotate), c.autoRotate = null != a.end.left ? [
                                    ["left", "top", "rotation", l, !1]
                                ] : null != a.end.x ? [
                                    ["x", "y", "rotation", l, !1]
                                ] : !1), c.autoRotate && (o._transform || o._enableTransforms(!1), a.autoRotate = o._target._gsTransform), h._onInitTween(a.proxy, c, o._tween), s
                            }
                        })
                    }
                }, s._roundProps = function(n, t) {
                    for (var i = this._overwriteProps, r = i.length; --r > -1;)(n[i[r]] || n.bezier || n.bezierThrough) && (this._round[i[r]] = t)
                }, s._kill = function(n) {
                    var t, i, r = this._props;
                    for (t in this._beziers)
                        if (t in n)
                            for (delete this._beziers[t], delete this._func[t], i = r.length; --i > -1;) r[i] === t && r.splice(i, 1);
                    return this._super._kill.call(this, n)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(n, t) {
                var ut, yt, e, gt, r = function() {
                        n.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = r.prototype.setRatio
                    },
                    wr = _gsScope._gsDefine.globals,
                    a = {},
                    i = r.prototype = new n("css"),
                    ar, dt, vr, yr, pr, vt;
                i.constructor = r, r.version = "1.15.1", r.API = 2, r.defaultTransformPerspective = 0, r.defaultSkewType = "compensated", i = "px", r.suffixMap = {
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
                var ni, wi, ti, ii, bi, g, pt = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    ki = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    ri = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    ui = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    wt = /(?:\d|\-|\+|=|#|\.)*/g,
                    fi = /opacity *= *([^)]*)/i,
                    br = /opacity:([^;]*)/i,
                    kr = /alpha\(opacity *=.+?\)/i,
                    di = /^(rgb|hsl)/,
                    gi = /([A-Z])/g,
                    dr = /-([a-z])/gi,
                    gr = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    nu = function(n, t) {
                        return t.toUpperCase()
                    },
                    tu = /(?:Left|Right|Width)/i,
                    iu = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    ru = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    v = /,(?=[^\)]*(?:\(|$))/gi,
                    k = Math.PI / 180,
                    nt = 180 / Math.PI,
                    bt = {},
                    y = document,
                    ei = function(n) {
                        return y.createElementNS ? y.createElementNS("http://www.w3.org/1999/xhtml", n) : y.createElement(n)
                    },
                    d = ei("div"),
                    oi = ei("img"),
                    p = r._internals = {
                        _specialProps: a
                    },
                    w = navigator.userAgent,
                    tt = function() {
                        var t = w.indexOf("Android"),
                            n = ei("a");
                        return ti = -1 !== w.indexOf("Safari") && -1 === w.indexOf("Chrome") && (-1 === t || Number(w.substr(t + 8, 1)) > 3), bi = ti && 6 > Number(w.substr(w.indexOf("Version/") + 8, 1)), ii = -1 !== w.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(w) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(w)) && (g = parseFloat(RegExp.$1)), n ? (n.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(n.style.opacity)) : !1
                    }(),
                    nr = function(n) {
                        return fi.test("string" == typeof n ? n : (n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    tr = function(n) {
                        window.console && console.log(n)
                    },
                    ir = "",
                    si = "",
                    ft = function(n, t) {
                        t = t || d;
                        var r, i, u = t.style;
                        if (void 0 !== u[n]) return n;
                        for (n = n.charAt(0).toUpperCase() + n.substr(1), r = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === u[r[i] + n];);
                        return i >= 0 ? (si = 3 === i ? "ms" : r[i], ir = "-" + si.toLowerCase() + "-", si + n) : null
                    },
                    et = y.defaultView ? y.defaultView.getComputedStyle : function() {},
                    u = r.getStyle = function(n, t, i, r, u) {
                        var f;
                        return tt || "opacity" !== t ? (!r && n.style[t] ? f = n.style[t] : (i = i || et(n)) ? f = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(gi, "-$1").toLowerCase()) : n.currentStyle && (f = n.currentStyle[t]), null == u || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : u) : nr(n)
                    },
                    b = p.convertToPixels = function(n, i, f, e, o) {
                        if ("px" === e || !e) return f;
                        if ("auto" === e || !f) return 0;
                        var s, h, a, l = tu.test(i),
                            c = n,
                            v = d.style,
                            p = 0 > f;
                        if (p && (f = -f), "%" === e && -1 !== i.indexOf("border")) s = f / 100 * (l ? n.clientWidth : n.clientHeight);
                        else {
                            if (v.cssText = "border:0 solid red;position:" + u(n, "position") + ";line-height:0;", "%" !== e && c.appendChild) v[l ? "borderLeftWidth" : "borderTopWidth"] = f + e;
                            else {
                                if (c = n.parentNode || y.body, h = c._gsCache, a = t.ticker.frame, h && l && h.time === a) return h.width * f / 100;
                                v[l ? "width" : "height"] = f + e
                            }
                            c.appendChild(d), s = parseFloat(d[l ? "offsetWidth" : "offsetHeight"]), c.removeChild(d), l && "%" === e && r.cacheWidths !== !1 && (h = c._gsCache = c._gsCache || {}, h.time = a, h.width = 100 * (s / f)), 0 !== s || o || (s = b(n, i, f, e, !0))
                        }
                        return p ? -s : s
                    },
                    rr = p.calculateOffset = function(n, t, i) {
                        if ("absolute" !== u(n, "position", i)) return 0;
                        var r = "left" === t ? "Left" : "Top",
                            f = u(n, "margin" + r, i);
                        return n["offset" + r] - (b(n, t, parseFloat(f), f.replace(wt, "")) || 0)
                    },
                    ot = function(n, t) {
                        var u, r, i = {};
                        if (t = t || et(n, null))
                            for (u in t)(-1 === u.indexOf("Transform") || h === u) && (i[u] = t[u]);
                        else if (t = n.currentStyle || n.style)
                            for (u in t) "string" == typeof u && void 0 === i[u] && (i[u.replace(dr, nu)] = t[u]);
                        return tt || (i.opacity = nr(n)), r = at(n, t, !1), i.rotation = r.rotation, i.skewX = r.skewX, i.scaleX = r.scaleX, i.scaleY = r.scaleY, i.x = r.x, i.y = r.y, c && (i.z = r.z, i.rotationX = r.rotationX, i.rotationY = r.rotationY, i.scaleZ = r.scaleZ), i.filters && delete i.filters, i
                    },
                    hi = function(n, t, i, r, u) {
                        var e, f, o, s = {},
                            h = n.style;
                        for (f in i) "cssText" !== f && "length" !== f && isNaN(f) && (t[f] !== (e = i[f]) || u && u[f]) && -1 === f.indexOf("Origin") && ("number" == typeof e || "string" == typeof e) && (s[f] = "auto" !== e || "left" !== f && "top" !== f ? "" !== e && "auto" !== e && "none" !== e || "string" != typeof t[f] || "" === t[f].replace(ui, "") ? e : 0 : rr(n, f), void 0 !== h[f] && (o = new vi(h, f, h[f], o)));
                        if (r)
                            for (f in r) "className" !== f && (s[f] = r[f]);
                        return {
                            difs: s,
                            firstMPT: o
                        }
                    },
                    uu = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    fu = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    eu = function(n, t, i) {
                        var r = parseFloat("width" === t ? n.offsetWidth : n.offsetHeight),
                            f = uu[t],
                            e = f.length;
                        for (i = i || et(n, null); --e > -1;) r -= parseFloat(u(n, "padding" + f[e], i, !0)) || 0, r -= parseFloat(u(n, "border" + f[e] + "Width", i, !0)) || 0;
                        return r
                    },
                    st = function(n, t) {
                        (null == n || "" === n || "auto" === n || "auto auto" === n) && (n = "0 0");
                        var u = n.split(" "),
                            i = -1 !== n.indexOf("left") ? "0%" : -1 !== n.indexOf("right") ? "100%" : u[0],
                            r = -1 !== n.indexOf("top") ? "0%" : -1 !== n.indexOf("bottom") ? "100%" : u[1];
                        return null == r ? r = "center" === i ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), t && (t.oxp = -1 !== i.indexOf("%"), t.oyp = -1 !== r.indexOf("%"), t.oxr = "=" === i.charAt(1), t.oyr = "=" === r.charAt(1), t.ox = parseFloat(i.replace(ui, "")), t.oy = parseFloat(r.replace(ui, ""))), i + " " + r + (u.length > 2 ? " " + u[2] : "")
                    },
                    ur = function(n, t) {
                        return "string" == typeof n && "=" === n.charAt(1) ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - parseFloat(t)
                    },
                    l = function(n, t) {
                        return null == n ? t : "string" == typeof n && "=" === n.charAt(1) ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) + t : parseFloat(n)
                    },
                    ht = function(n, t, i, r) {
                        var f, o, u, e, s, h = 1e-6;
                        return null == n ? e = t : "number" == typeof n ? e = n : (f = 360, o = n.split("_"), s = "=" === n.charAt(1), u = (s ? parseInt(n.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === n.indexOf("rad") ? 1 : nt) - (s ? 0 : t), o.length && (r && (r[i] = t + u), -1 !== n.indexOf("short") && (u %= f, u !== u % (f / 2) && (u = 0 > u ? u + f : u - f)), -1 !== n.indexOf("_cw") && 0 > u ? u = (u + 9999999999 * f) % f - (0 | u / f) * f : -1 !== n.indexOf("ccw") && u > 0 && (u = (u - 9999999999 * f) % f - (0 | u / f) * f)), e = t + u), h > e && e > -h && (e = 0), e
                    },
                    it = {
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
                    ci = function(n, t, i) {
                        return n = 0 > n ? n + 1 : n > 1 ? n - 1 : n, 0 | 255 * (1 > 6 * n ? t + 6 * (i - t) * n : .5 > n ? i : 2 > 3 * n ? t + 6 * (i - t) * (2 / 3 - n) : t) + .5
                    },
                    li = r.parseColor = function(n) {
                        var i, t, e, u, f, r;
                        return n && "" !== n ? "number" == typeof n ? [n >> 16, 255 & n >> 8, 255 & n] : ("," === n.charAt(n.length - 1) && (n = n.substr(0, n.length - 1)), it[n] ? it[n] : "#" === n.charAt(0) ? (4 === n.length && (i = n.charAt(1), t = n.charAt(2), e = n.charAt(3), n = "#" + i + i + t + t + e + e), n = parseInt(n.substr(1), 16), [n >> 16, 255 & n >> 8, 255 & n]) : "hsl" === n.substr(0, 3) ? (n = n.match(pt), u = Number(n[0]) % 360 / 360, f = Number(n[1]) / 100, r = Number(n[2]) / 100, t = .5 >= r ? r * (f + 1) : r + f - r * f, i = 2 * r - t, n.length > 3 && (n[3] = Number(n[3])), n[0] = ci(u + 1 / 3, i, t), n[1] = ci(u, i, t), n[2] = ci(u - 1 / 3, i, t), n) : (n = n.match(pt) || it.transparent, n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3])), n)) : it.black
                    },
                    rt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (i in it) rt += "|" + i + "\\b";
                rt = RegExp(rt + ")", "gi");
                var fr = function(n, t, i, r) {
                        if (null == n) return function(n) {
                            return n
                        };
                        var e, s = t ? (n.match(rt) || [""])[0] : "",
                            f = n.split(s).join("").match(ri) || [],
                            h = n.substr(0, n.indexOf(f[0])),
                            c = ")" === n.charAt(n.length - 1) ? ")" : "",
                            o = -1 !== n.indexOf(" ") ? " " : ",",
                            u = f.length,
                            l = u > 0 ? f[0].replace(pt, "") : "";
                        return u ? e = t ? function(n) {
                            var p, a, t, y;
                            if ("number" == typeof n) n += l;
                            else if (r && v.test(n)) {
                                for (y = n.replace(v, "|").split("|"), t = 0; y.length > t; t++) y[t] = e(y[t]);
                                return y.join(",")
                            }
                            if (p = (n.match(rt) || [s])[0], a = n.split(p).join("").match(ri) || [], t = a.length, u > t--)
                                for (; u > ++t;) a[t] = i ? a[0 | (t - 1) / 2] : f[t];
                            return h + a.join(o) + o + p + c + (-1 !== n.indexOf("inset") ? " inset" : "")
                        } : function(n) {
                            var s, a, t;
                            if ("number" == typeof n) n += l;
                            else if (r && v.test(n)) {
                                for (a = n.replace(v, "|").split("|"), t = 0; a.length > t; t++) a[t] = e(a[t]);
                                return a.join(",")
                            }
                            if (s = n.match(ri) || [], t = s.length, u > t--)
                                for (; u > ++t;) s[t] = i ? s[0 | (t - 1) / 2] : f[t];
                            return h + s.join(o) + c
                        } : function(n) {
                            return n
                        }
                    },
                    ai = function(n) {
                        return n = n.split(","),
                            function(t, i, r, u, f, e, o) {
                                var s, h = (i + "").split(" ");
                                for (o = {}, s = 0; 4 > s; s++) o[n[s]] = h[s] = h[s] || h[(s - 1) / 2 >> 0];
                                return u.parse(t, o, f, e)
                            }
                    },
                    vi = (p._setPluginRatio = function(n) {
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
                    o = (p._parseToProxy = function(n, t, i, r, u, f) {
                        var c, e, o, s, v, h = r,
                            l = {},
                            a = {},
                            y = i._transform,
                            p = bt;
                        for (i._transform = null, bt = t, r = v = i.parse(n, t, r, u), bt = p, f && (i._transform = y, h && (h._prev = null, h._prev && (h._prev._next = null))); r && r !== h;) {
                            if (1 >= r.type && (e = r.p, a[e] = r.s + r.c, l[e] = r.s, f || (s = new vi(r, "s", e, s, r.r), r.c = 0), 1 === r.type))
                                for (c = r.l; --c > 0;) o = "xn" + c, e = r.p + "_" + o, a[e] = r.data[o], l[e] = r[o], f || (s = new vi(r, o, e, s, r.rxp[o]));
                            r = r._next
                        }
                        return {
                            proxy: l,
                            end: a,
                            firstMPT: s,
                            pt: v
                        }
                    }, p.CSSPropTween = function(n, t, i, r, u, f, e, s, h, c, l) {
                        this.t = n, this.p = t, this.s = i, this.c = r, this.n = e || t, n instanceof o || gt.push(this.n), this.r = s, this.type = f || 0, h && (this.pr = h, ut = !0), this.b = void 0 === c ? i : c, this.e = void 0 === l ? i + r : l, u && (this._next = u, u._prev = this)
                    }),
                    kt = r.parseComplex = function(n, t, i, r, u, f, e, s, h, c) {
                        i = i || f || "", e = new o(n, t, 0, 0, e, c ? 2 : 1, null, !1, s, i, r), r += "";
                        var y, w, b, l, a, ut, ft, nt, k, et, d, g, p = i.split(", ").join(",").split(" "),
                            rt = r.split(", ").join(",").split(" "),
                            ot = p.length,
                            st = ni !== !1;
                        for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (p = p.join(" ").replace(v, ", ").split(" "), rt = rt.join(" ").replace(v, ", ").split(" "), ot = p.length), ot !== rt.length && (p = (f || "").split(" "), ot = p.length), e.plugin = h, e.setRatio = c, y = 0; ot > y; y++)
                            if (l = p[y], a = rt[y], nt = parseFloat(l), nt || 0 === nt) e.appendXtra("", nt, ur(a, nt), a.replace(ki, ""), st && -1 !== a.indexOf("px"), !0);
                            else if (u && ("#" === l.charAt(0) || it[l] || di.test(l))) g = "," === a.charAt(a.length - 1) ? ")," : ")", l = li(l), a = li(a), k = l.length + a.length > 6, k && !tt && 0 === a[3] ? (e["xs" + e.l] += e.l ? " transparent" : "transparent", e.e = e.e.split(rt[y]).join("transparent")) : (tt || (k = !1), e.appendXtra(k ? "rgba(" : "rgb(", l[0], a[0] - l[0], ",", !0, !0).appendXtra("", l[1], a[1] - l[1], ",", !0).appendXtra("", l[2], a[2] - l[2], k ? "," : g, !0), k && (l = 4 > l.length ? 1 : l[3], e.appendXtra("", l, (4 > a.length ? 1 : a[3]) - l, g, !1)));
                        else if (ut = l.match(pt)) {
                            if (ft = a.match(ki), !ft || ft.length !== ut.length) return e;
                            for (b = 0, w = 0; ut.length > w; w++) d = ut[w], et = l.indexOf(d, b), e.appendXtra(l.substr(b, et - b), Number(d), ur(ft[w], d), "", st && "px" === l.substr(et + d.length, 2), 0 === w), b = et + d.length;
                            e["xs" + e.l] += l.substr(b)
                        } else e["xs" + e.l] += e.l ? " " + l : l;
                        if (-1 !== r.indexOf("=") && e.data) {
                            for (g = e.xs0 + e.data.s, y = 1; e.l > y; y++) g += e["xs" + y] + e.data["xn" + y];
                            e.e = g + e["xs" + y]
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
                var er = function(n, t) {
                        t = t || {}, this.p = t.prefix ? ft(n) || n : n, a[n] = a[this.p] = this, this.format = t.formatter || fr(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                    },
                    f = p._registerComplexSpecialProp = function(n, t, i) {
                        "object" != typeof t && (t = {
                            parser: i
                        });
                        var r, e, u = n.split(","),
                            f = t.defaultValue;
                        for (i = i || [f], r = 0; u.length > r; r++) t.prefix = 0 === r && t.prefix, t.defaultValue = i[r] || f, e = new er(u[r], t)
                    },
                    ou = function(n) {
                        if (!a[n]) {
                            var t = n.charAt(0).toUpperCase() + n.substr(1) + "Plugin";
                            f(n, {
                                parser: function(n, i, r, u, f, e, o) {
                                    var s = wr.com.greensock.plugins[t];
                                    return s ? (s._cssRegister(), a[r].parse(n, i, r, u, f, e, o)) : (tr("Error: " + t + " js file not loaded."), f)
                                }
                            })
                        }
                    };
                i = er.prototype, i.parseComplex = function(n, t, i, r, u, f) {
                    var o, s, e, l, a, c, h = this.keyword;
                    if (this.multi && (v.test(i) || v.test(t) ? (s = t.replace(v, "|").split("|"), e = i.replace(v, "|").split("|")) : h && (s = [t], e = [i])), e) {
                        for (l = e.length > s.length ? e.length : s.length, o = 0; l > o; o++) t = s[o] = s[o] || this.dflt, i = e[o] = e[o] || this.dflt, h && (a = t.indexOf(h), c = i.indexOf(h), a !== c && (i = -1 === c ? e : s, i[o] += " " + h));
                        t = s.join(", "), i = e.join(", ")
                    }
                    return kt(n, this.p, t, i, this.clrs, this.dflt, r, this.pr, u, f)
                }, i.parse = function(n, t, i, r, f, o) {
                    return this.parseComplex(n.style, this.format(u(n, this.p, e, !1, this.dflt)), this.format(t), f, o)
                }, r.registerSpecialProp = function(n, t, i) {
                    f(n, {
                        parser: function(n, r, u, f, e, s) {
                            var h = new o(n, u, 0, 0, e, 2, u, !1, i);
                            return h.plugin = s, h.setRatio = t(n, r, f._tween, u), h
                        },
                        priority: i
                    })
                };
                var ct, or = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    h = ft("transform"),
                    su = ir + "transform",
                    lt = ft("transformOrigin"),
                    c = null !== ft("perspective"),
                    yi = p.Transform = function() {
                        this.perspective = parseFloat(r.defaultTransformPerspective) || 0, this.force3D = r.defaultForce3D !== !1 && c ? r.defaultForce3D || "auto" : !1
                    },
                    hu = window.SVGElement,
                    sr = function(n, t, i) {
                        var r, u = y.createElementNS("http://www.w3.org/2000/svg", n),
                            f = /([a-z])([A-Z])/g;
                        for (r in i) u.setAttributeNS(null, r.replace(f, "$1-$2").toLowerCase(), i[r]);
                        return t.appendChild(u), u
                    },
                    hr = document.documentElement,
                    cu = function() {
                        var t, n, r, i = g || /Android/i.test(w) && !window.chrome;
                        return y.createElementNS && !i && (t = sr("svg", hr), n = sr("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), r = n.getBoundingClientRect().width, n.style[lt] = "50% 50%", n.style[h] = "scaleX(0.5)", i = r === n.getBoundingClientRect().width && !(ii && c), hr.removeChild(t)), i
                    }(),
                    cr = function(n, t, i) {
                        var r = n.getBBox();
                        t = st(t).split(" "), i.xOrigin = (-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * r.width : parseFloat(t[0])) + r.x, i.yOrigin = (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * r.height : parseFloat(t[1])) + r.y
                    },
                    at = p.getTransform = function(n, t, i, f) {
                        if (n._gsTransform && i && !f) return n._gsTransform;
                        var at, v, s, k, ht, ni, ti, ii, ft, rt, o = i ? n._gsTransform || new yi : new yi,
                            oi = 0 > o.scaleX,
                            ri = 2e-5,
                            d = 1e5,
                            si = c ? parseFloat(u(n, lt, t, !1, "0 0 0").split(" ")[2]) || o.zOrigin || 0 : 0,
                            hi = parseFloat(r.defaultTransformPerspective) || 0;
                        if (h ? v = u(n, su, t, !0) : n.currentStyle && (v = n.currentStyle.filter.match(iu), v = v && 4 === v.length ? [v[0].substr(4), Number(v[2].substr(4)), Number(v[1].substr(4)), v[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), at = !v || "none" === v || "matrix(1, 0, 0, 1, 0, 0)" === v, o.svg = !!(hu && "function" == typeof n.getBBox && n.getCTM && (!n.parentNode || n.parentNode.getBBox && n.parentNode.getCTM)), o.svg && (cr(n, u(n, lt, e, !1, "50% 50%") + "", o), ct = r.useSVGTransformAttr || cu, s = n.getAttribute("transform"), at && s && -1 !== s.indexOf("matrix") && (v = s, at = 0)), !at) {
                            for (s = (v || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], k = s.length; --k > -1;) ht = Number(s[k]), s[k] = (ni = ht - (ht |= 0)) ? (0 | ni * d + (0 > ni ? -.5 : .5)) / d + ht : ht;
                            if (16 === s.length) {
                                var vt, et, yt, l, a, ut = s[0],
                                    w = s[1],
                                    pt = s[2],
                                    ci = s[3],
                                    wt = s[4],
                                    g = s[5],
                                    tt = s[6],
                                    li = s[7],
                                    ot = s[8],
                                    b = s[9],
                                    p = s[10],
                                    ui = s[12],
                                    fi = s[13],
                                    st = s[14],
                                    it = s[11],
                                    y = Math.atan2(tt, p);
                                o.zOrigin && (st = -o.zOrigin, ui = ot * st - s[12], fi = b * st - s[13], st = p * st + o.zOrigin - s[14]), o.rotationX = y * nt, y && (l = Math.cos(-y), a = Math.sin(-y), vt = wt * l + ot * a, et = g * l + b * a, yt = tt * l + p * a, ot = wt * -a + ot * l, b = g * -a + b * l, p = tt * -a + p * l, it = li * -a + it * l, wt = vt, g = et, tt = yt), y = Math.atan2(ot, p), o.rotationY = y * nt, y && (l = Math.cos(-y), a = Math.sin(-y), vt = ut * l - ot * a, et = w * l - b * a, yt = pt * l - p * a, b = w * a + b * l, p = pt * a + p * l, it = ci * a + it * l, ut = vt, w = et, pt = yt), y = Math.atan2(w, ut), o.rotation = y * nt, y && (l = Math.cos(-y), a = Math.sin(-y), ut = ut * l + wt * a, et = w * l + g * a, g = w * -a + g * l, tt = pt * -a + tt * l, w = et), o.rotationX && Math.abs(o.rotationX) + Math.abs(o.rotation) > 359.9 && (o.rotationX = o.rotation = 0, o.rotationY += 180), o.scaleX = (0 | Math.sqrt(ut * ut + w * w) * d + .5) / d, o.scaleY = (0 | Math.sqrt(g * g + b * b) * d + .5) / d, o.scaleZ = (0 | Math.sqrt(tt * tt + p * p) * d + .5) / d, o.skewX = 0, o.perspective = it ? 1 / (0 > it ? -it : it) : 0, o.x = ui, o.y = fi, o.z = st
                            } else if (!(c && !f && s.length && o.x === s[4] && o.y === s[5] && (o.rotationX || o.rotationY) || void 0 !== o.x && "none" === u(n, "display", t))) {
                                var ei = s.length >= 6,
                                    bt = ei ? s[0] : 1,
                                    kt = s[1] || 0,
                                    dt = s[2] || 0,
                                    gt = ei ? s[3] : 1;
                                o.x = s[4] || 0, o.y = s[5] || 0, ti = Math.sqrt(bt * bt + kt * kt), ii = Math.sqrt(gt * gt + dt * dt), ft = bt || kt ? Math.atan2(kt, bt) * nt : o.rotation || 0, rt = dt || gt ? Math.atan2(dt, gt) * nt + ft : o.skewX || 0, Math.abs(rt) > 90 && 270 > Math.abs(rt) && (oi ? (ti *= -1, rt += 0 >= ft ? 180 : -180, ft += 0 >= ft ? 180 : -180) : (ii *= -1, rt += 0 >= rt ? 180 : -180)), o.scaleX = ti, o.scaleY = ii, o.rotation = ft, o.skewX = rt, c && (o.rotationX = o.rotationY = o.z = 0, o.perspective = hi, o.scaleZ = 1)
                            }
                            o.zOrigin = si;
                            for (k in o) ri > o[k] && o[k] > -ri && (o[k] = 0)
                        }
                        return i && (n._gsTransform = o), o
                    },
                    lu = function(n) {
                        var o, y, t = this.data,
                            tt = -t.rotation * k,
                            ft = tt + t.skewX * k,
                            e = 1e5,
                            h = (0 | Math.cos(tt) * t.scaleX * e) / e,
                            u = (0 | Math.sin(tt) * t.scaleX * e) / e,
                            f = (0 | Math.sin(ft) * -t.scaleY * e) / e,
                            c = (0 | Math.cos(ft) * t.scaleY * e) / e,
                            d = this.t.style,
                            nt = this.t.currentStyle,
                            w, v, et, ot;
                        if (nt) {
                            y = u, u = -f, f = -y, o = nt.filter, d.filter = "";
                            var i, r, l = this.t.offsetWidth,
                                a = this.t.offsetHeight,
                                it = "absolute" !== nt.position,
                                p = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + u + ", M21=" + f + ", M22=" + c,
                                rt = t.x + l * t.xPercent / 100,
                                ut = t.y + a * t.yPercent / 100;
                            if (null != t.ox && (i = (t.oxp ? .01 * l * t.ox : t.ox) - l / 2, r = (t.oyp ? .01 * a * t.oy : t.oy) - a / 2, rt += i - (i * h + r * u), ut += r - (i * f + r * c)), it ? (i = l / 2, r = a / 2, p += ", Dx=" + (i - (i * h + r * u) + rt) + ", Dy=" + (r - (i * f + r * c) + ut) + ")") : p += ", sizingMethod='auto expand')", d.filter = -1 !== o.indexOf("DXImageTransform.Microsoft.Matrix(") ? o.replace(ru, p) : p + " " + o, (0 === n || 1 === n) && 1 === h && 0 === u && 0 === f && 1 === c && (it && -1 === p.indexOf("Dx=0, Dy=0") || fi.test(o) && 100 !== parseFloat(RegExp.$1) || -1 === o.indexOf("gradient(" && o.indexOf("Alpha")) && d.removeAttribute("filter")), !it)
                                for (ot = 8 > g ? 1 : -1, i = t.ieOffsetX || 0, r = t.ieOffsetY || 0, t.ieOffsetX = Math.round((l - ((0 > h ? -h : h) * l + (0 > u ? -u : u) * a)) / 2 + rt), t.ieOffsetY = Math.round((a - ((0 > c ? -c : c) * a + (0 > f ? -f : f) * l)) / 2 + ut), s = 0; 4 > s; s++) v = fu[s], w = nt[v], y = -1 !== w.indexOf("px") ? parseFloat(w) : b(this.t, v, parseFloat(w), w.replace(wt, "")) || 0, et = y !== t[v] ? 2 > s ? -t.ieOffsetX : -t.ieOffsetY : 2 > s ? i - t.ieOffsetX : r - t.ieOffsetY, d[v] = (t[v] = Math.round(y - et * (0 === s || 2 === s ? 1 : ot))) + "px"
                        }
                    },
                    pi = p.set3DTransformRatio = function(n) {
                        var p, s, c, w, l, a, ot, st, b, ht, ct, d, ut, i, r, u, nt, lt, tt, f, e, t = this.data,
                            at = this.t.style,
                            o = t.rotation * k,
                            v = t.scaleX,
                            y = t.scaleY,
                            g = t.scaleZ,
                            ft = t.x,
                            et = t.y,
                            it = t.z,
                            rt = t.perspective;
                        if (!(1 !== n && 0 !== n && t.force3D || t.force3D === !0 || t.rotationY || t.rotationX || 1 !== g || rt || it)) return lr.call(this, n), void 0;
                        if (ii && (i = .0001, i > v && v > -i && (v = g = 2e-5), i > y && y > -i && (y = g = 2e-5), !rt || t.z || t.rotationX || t.rotationY || (rt = 0)), o || t.skewX) r = p = Math.cos(o), u = w = Math.sin(o), t.skewX && (o -= t.skewX * k, r = Math.cos(o), u = Math.sin(o), "simple" === t.skewType && (nt = Math.tan(t.skewX * k), nt = Math.sqrt(1 + nt * nt), r *= nt, u *= nt)), s = -u, l = r;
                        else {
                            if (!(t.rotationY || t.rotationX || 1 !== g || rt || t.svg)) return at[h] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + ft + "px," + et + "px," + it + "px)" + (1 !== v || 1 !== y ? " scale(" + v + "," + y + ")" : ""), void 0;
                            p = l = 1, s = w = 0
                        }
                        b = 1, c = a = ot = st = ht = ct = 0, d = rt ? -1 / rt : 0, ut = t.zOrigin, i = 1e-6, f = ",", e = "0", o = t.rotationY * k, o && (r = Math.cos(o), u = Math.sin(o), ot = -u, ht = d * -u, c = p * u, a = w * u, b = r, d *= r, p *= r, w *= r), o = t.rotationX * k, o && (r = Math.cos(o), u = Math.sin(o), nt = s * r + c * u, lt = l * r + a * u, st = b * u, ct = d * u, c = s * -u + c * r, a = l * -u + a * r, b *= r, d *= r, s = nt, l = lt), 1 !== g && (c *= g, a *= g, b *= g, d *= g), 1 !== y && (s *= y, l *= y, st *= y, ct *= y), 1 !== v && (p *= v, w *= v, ot *= v, ht *= v), (ut || t.svg) && (ut && (ft += c * -ut, et += a * -ut, it += b * -ut + ut), t.svg && (ft += t.xOrigin - (t.xOrigin * p + t.yOrigin * s), et += t.yOrigin - (t.xOrigin * w + t.yOrigin * l)), i > ft && ft > -i && (ft = e), i > et && et > -i && (et = e), i > it && it > -i && (it = 0)), tt = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(", tt += (i > p && p > -i ? e : p) + f + (i > w && w > -i ? e : w) + f + (i > ot && ot > -i ? e : ot), tt += f + (i > ht && ht > -i ? e : ht) + f + (i > s && s > -i ? e : s) + f + (i > l && l > -i ? e : l), t.rotationX || t.rotationY ? (tt += f + (i > st && st > -i ? e : st) + f + (i > ct && ct > -i ? e : ct) + f + (i > c && c > -i ? e : c), tt += f + (i > a && a > -i ? e : a) + f + (i > b && b > -i ? e : b) + f + (i > d && d > -i ? e : d) + f) : tt += ",0,0,0,0,1,0,", tt += ft + f + et + f + it + f + (rt ? 1 + -it / rt : 1) + ")", at[h] = tt
                    },
                    lr = p.set2DTransformRatio = function(n) {
                        var e, l, i, o, s, a, v, y, p, w, f, t = this.data,
                            b = this.t,
                            d = b.style,
                            r = t.x,
                            u = t.y;
                        return !(t.rotationX || t.rotationY || t.z || t.force3D === !0 || "auto" === t.force3D && 1 !== n && 0 !== n) || t.svg && ct || !c ? (o = t.scaleX, s = t.scaleY, t.rotation || t.skewX || t.svg ? (e = t.rotation * k, l = e - t.skewX * k, i = 1e5, a = Math.cos(e) * o, v = Math.sin(e) * o, y = Math.sin(l) * -s, p = Math.cos(l) * s, t.svg && (r += t.xOrigin - (t.xOrigin * a + t.yOrigin * y), u += t.yOrigin - (t.xOrigin * v + t.yOrigin * p), f = 1e-6, f > r && r > -f && (r = 0), f > u && u > -f && (u = 0)), w = (0 | a * i) / i + "," + (0 | v * i) / i + "," + (0 | y * i) / i + "," + (0 | p * i) / i + "," + r + "," + u + ")", t.svg && ct ? b.setAttribute("transform", "matrix(" + w) : d[h] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + w) : d[h] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + o + ",0,0," + s + "," + r + "," + u + ")", void 0) : (this.setRatio = pi, pi.call(this, n), void 0)
                    };
                for (i = yi.prototype, i.x = i.y = i.z = i.skewX = i.skewY = i.rotation = i.rotationX = i.rotationY = i.zOrigin = i.xPercent = i.yPercent = 0, i.scaleX = i.scaleY = i.scaleZ = 1, f("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                        parser: function(n, t, i, f, s, a, v) {
                            if (f._lastParsedTransform === v) return s;
                            f._lastParsedTransform = v;
                            var b, ut, g, k, it, rt, nt, w = f._transform = at(n, e, !0, v.parseTransform),
                                ft = n.style,
                                et = 1e-6,
                                ot = or.length,
                                p = v,
                                tt = {};
                            if ("string" == typeof p.transform && h) g = d.style, g[h] = p.transform, g.display = "block", g.position = "absolute", y.body.appendChild(d), b = at(d, null, !1), y.body.removeChild(d);
                            else if ("object" == typeof p) {
                                if (b = {
                                        scaleX: l(null != p.scaleX ? p.scaleX : p.scale, w.scaleX),
                                        scaleY: l(null != p.scaleY ? p.scaleY : p.scale, w.scaleY),
                                        scaleZ: l(p.scaleZ, w.scaleZ),
                                        x: l(p.x, w.x),
                                        y: l(p.y, w.y),
                                        z: l(p.z, w.z),
                                        xPercent: l(p.xPercent, w.xPercent),
                                        yPercent: l(p.yPercent, w.yPercent),
                                        perspective: l(p.transformPerspective, w.perspective)
                                    }, nt = p.directionalRotation, null != nt)
                                    if ("object" == typeof nt)
                                        for (g in nt) p[g] = nt[g];
                                    else p.rotation = nt;
                                "string" == typeof p.x && -1 !== p.x.indexOf("%") && (b.x = 0, b.xPercent = l(p.x, w.xPercent)), "string" == typeof p.y && -1 !== p.y.indexOf("%") && (b.y = 0, b.yPercent = l(p.y, w.yPercent)), b.rotation = ht("rotation" in p ? p.rotation : "shortRotation" in p ? p.shortRotation + "_short" : "rotationZ" in p ? p.rotationZ : w.rotation, w.rotation, "rotation", tt), c && (b.rotationX = ht("rotationX" in p ? p.rotationX : "shortRotationX" in p ? p.shortRotationX + "_short" : w.rotationX || 0, w.rotationX, "rotationX", tt), b.rotationY = ht("rotationY" in p ? p.rotationY : "shortRotationY" in p ? p.shortRotationY + "_short" : w.rotationY || 0, w.rotationY, "rotationY", tt)), b.skewX = null == p.skewX ? w.skewX : ht(p.skewX, w.skewX), b.skewY = null == p.skewY ? w.skewY : ht(p.skewY, w.skewY), (ut = b.skewY - w.skewY) && (b.skewX += ut, b.rotation += ut)
                            }
                            for (c && null != p.force3D && (w.force3D = p.force3D, rt = !0), w.skewType = p.skewType || w.skewType || r.defaultSkewType, it = w.force3D || w.z || w.rotationX || w.rotationY || b.z || b.rotationX || b.rotationY || b.perspective, it || null == p.scale || (b.scaleZ = 1); --ot > -1;) i = or[ot], k = b[i] - w[i], (k > et || -et > k || null != p[i] || null != bt[i]) && (rt = !0, s = new o(w, i, w[i], k, s), i in tt && (s.e = tt[i]), s.xs0 = 0, s.plugin = a, f._overwriteProps.push(s.n));
                            return k = p.transformOrigin, k && w.svg && (cr(n, st(k), b), s = new o(w, "xOrigin", w.xOrigin, b.xOrigin - w.xOrigin, s, -1, "transformOrigin"), s.b = w.xOrigin, s.e = s.xs0 = b.xOrigin, s = new o(w, "yOrigin", w.yOrigin, b.yOrigin - w.yOrigin, s, -1, "transformOrigin"), s.b = w.yOrigin, s.e = s.xs0 = b.yOrigin, k = "0px 0px"), (k || c && it && w.zOrigin) && (h ? (rt = !0, i = lt, k = (k || u(n, i, e, !1, "50% 50%")) + "", s = new o(ft, i, 0, 0, s, -1, "transformOrigin"), s.b = ft[i], s.plugin = a, c ? (g = w.zOrigin, k = k.split(" "), w.zOrigin = (k.length > 2 && (0 === g || "0px" !== k[2]) ? parseFloat(k[2]) : g) || 0, s.xs0 = s.e = k[0] + " " + (k[1] || "50%") + " 0px", s = new o(w, "zOrigin", 0, 0, s, -1, s.n), s.b = g, s.xs0 = s.e = w.zOrigin) : s.xs0 = s.e = k) : st(k + "", w)), rt && (f._transformType = w.svg && ct || !it && 3 !== this._transformType ? 2 : 3), s
                        },
                        prefix: !0
                    }), f("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }), f("borderRadius", {
                        defaultValue: "0px",
                        parser: function(n, t, i, r, f) {
                            t = this.format(t);
                            var tt, l, d, h, o, s, p, a, it, rt, c, v, g, w, k, nt, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                ut = n.style;
                            for (it = parseFloat(n.offsetWidth), rt = parseFloat(n.offsetHeight), tt = t.split(" "), l = 0; y.length > l; l++) this.p.indexOf("border") && (y[l] = ft(y[l])), o = h = u(n, y[l], e, !1, "0px"), -1 !== o.indexOf(" ") && (h = o.split(" "), o = h[0], h = h[1]), s = d = tt[l], p = parseFloat(o), v = o.substr((p + "").length), g = "=" === s.charAt(1), g ? (a = parseInt(s.charAt(0) + "1", 10), s = s.substr(2), a *= parseFloat(s), c = s.substr((a + "").length - (0 > a ? 1 : 0)) || "") : (a = parseFloat(s), c = s.substr((a + "").length)), "" === c && (c = yt[i] || v), c !== v && (w = b(n, "borderLeft", p, v), k = b(n, "borderTop", p, v), "%" === c ? (o = 100 * (w / it) + "%", h = 100 * (k / rt) + "%") : "em" === c ? (nt = b(n, "borderLeft", 1, "em"), o = w / nt + "em", h = k / nt + "em") : (o = w + "px", h = k + "px"), g && (s = parseFloat(o) + a + c, d = parseFloat(h) + a + c)), f = kt(ut, y[l], o + " " + h, s + " " + d, !1, "0px", f);
                            return f
                        },
                        prefix: !0,
                        formatter: fr("0px 0px 0px 0px", !1, !0)
                    }), f("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function(n, t, i, r, f, o) {
                            var c, b, h, v, y, l, p = "background-position",
                                a = e || et(n, null),
                                s = this.format((a ? g ? a.getPropertyValue(p + "-x") + " " + a.getPropertyValue(p + "-y") : a.getPropertyValue(p) : n.currentStyle.backgroundPositionX + " " + n.currentStyle.backgroundPositionY) || "0 0"),
                                w = this.format(t);
                            if (-1 !== s.indexOf("%") != (-1 !== w.indexOf("%")) && (l = u(n, "backgroundImage").replace(gr, ""), l && "none" !== l)) {
                                for (c = s.split(" "), b = w.split(" "), oi.setAttribute("src", l), h = 2; --h > -1;) s = c[h], v = -1 !== s.indexOf("%"), v !== (-1 !== b[h].indexOf("%")) && (y = 0 === h ? n.offsetWidth - oi.width : n.offsetHeight - oi.height, c[h] = v ? parseFloat(s) / 100 * y + "px" : 100 * (parseFloat(s) / y) + "%");
                                s = c.join(" ")
                            }
                            return this.parseComplex(n.style, s, w, f, o)
                        },
                        formatter: st
                    }), f("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: st
                    }), f("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }), f("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }), f("transformStyle", {
                        prefix: !0
                    }), f("backfaceVisibility", {
                        prefix: !0
                    }), f("userSelect", {
                        prefix: !0
                    }), f("margin", {
                        parser: ai("marginTop,marginRight,marginBottom,marginLeft")
                    }), f("padding", {
                        parser: ai("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }), f("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function(n, t, i, r, f, o) {
                            var c, s, h;
                            return 9 > g ? (s = n.currentStyle, h = 8 > g ? " " : ",", c = "rect(" + s.clipTop + h + s.clipRight + h + s.clipBottom + h + s.clipLeft + ")", t = this.format(t).split(",").join(h)) : (c = this.format(u(n, this.p, e, !1, this.dflt)), t = this.format(t)), this.parseComplex(n.style, c, t, f, o)
                        }
                    }), f("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }), f("autoRound,strictUnits", {
                        parser: function(n, t, i, r, u) {
                            return u
                        }
                    }), f("border", {
                        defaultValue: "0px solid #000",
                        parser: function(n, t, i, r, f, o) {
                            return this.parseComplex(n.style, this.format(u(n, "borderTopWidth", e, !1, "0px") + " " + u(n, "borderTopStyle", e, !1, "solid") + " " + u(n, "borderTopColor", e, !1, "#000")), this.format(t), f, o)
                        },
                        color: !0,
                        formatter: function(n) {
                            var t = n.split(" ");
                            return t[0] + " " + (t[1] || "solid") + " " + (n.match(rt) || ["#000"])[0]
                        }
                    }), f("borderWidth", {
                        parser: ai("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }), f("float,cssFloat,styleFloat", {
                        parser: function(n, t, i, r, u) {
                            var f = n.style,
                                e = "cssFloat" in f ? "cssFloat" : "styleFloat";
                            return new o(f, e, 0, 0, u, -1, i, !1, 0, f[e], t)
                        }
                    }), ar = function(n) {
                        var f, i = this.t,
                            t = i.filter || u(this.data, "filter") || "",
                            r = 0 | this.s + this.c * n;
                        100 === r && (-1 === t.indexOf("atrix(") && -1 === t.indexOf("radient(") && -1 === t.indexOf("oader(") ? (i.removeAttribute("filter"), f = !u(this.data, "filter")) : (i.filter = t.replace(kr, ""), f = !0)), f || (this.xn1 && (i.filter = t = t || "alpha(opacity=" + r + ")"), -1 === t.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = t + " alpha(opacity=" + r + ")") : i.filter = t.replace(fi, "opacity=" + r))
                    }, f("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function(n, t, i, r, f, s) {
                            var h = parseFloat(u(n, "opacity", e, !1, "1")),
                                c = n.style,
                                l = "autoAlpha" === i;
                            return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + h), l && 1 === h && "hidden" === u(n, "visibility", e) && 0 !== t && (h = 0), tt ? f = new o(c, "opacity", h, t - h, f) : (f = new o(c, "opacity", 100 * h, 100 * (t - h), f), f.xn1 = l ? 1 : 0, c.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = n, f.plugin = s, f.setRatio = ar), l && (f = new o(c, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), f.xs0 = "inherit", r._overwriteProps.push(f.n), r._overwriteProps.push(i)), f
                        }
                    }), dt = function(n, t) {
                        t && (n.removeProperty ? ("ms" === t.substr(0, 2) && (t = "M" + t.substr(1)), n.removeProperty(t.replace(gi, "-$1").toLowerCase())) : n.removeAttribute(t))
                    }, vr = function(n) {
                        if (this.t._gsClassPT = this, 1 === n || 0 === n) {
                            this.t.setAttribute("class", 0 === n ? this.b : this.e);
                            for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : dt(i, t.p), t = t._next;
                            1 === n && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    }, f("className", {
                        parser: function(n, t, i, r, u, f, s) {
                            var c, y, l, a, h, v = n.getAttribute("class") || "",
                                p = n.style.cssText;
                            if (u = r._classNamePT = new o(n, i, 0, 0, u, 2), u.setRatio = vr, u.pr = -11, ut = !0, u.b = v, y = ot(n, e), l = n._gsClassPT) {
                                for (a = {}, h = l.data; h;) a[h.p] = 1, h = h._next;
                                l.setRatio(1)
                            }
                            return n._gsClassPT = u, u.e = "=" !== t.charAt(1) ? t : v.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), r._tween._duration && (n.setAttribute("class", u.e), c = hi(n, y, ot(n), s, a), n.setAttribute("class", v), u.data = c.firstMPT, n.style.cssText = p, u = u.xfirst = r.parse(n, c.difs, u, f)), u
                        }
                    }), yr = function(n) {
                        if ((1 === n || 0 === n) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var i, t, r, u, f = this.t.style,
                                e = a.transform.parse;
                            if ("all" === this.e) f.cssText = "", u = !0;
                            else
                                for (i = this.e.split(" ").join("").split(","), r = i.length; --r > -1;) t = i[r], a[t] && (a[t].parse === e ? u = !0 : t = "transformOrigin" === t ? lt : a[t].p), dt(f, t);
                            u && (dt(f, h), this.t._gsTransform && delete this.t._gsTransform)
                        }
                    }, f("clearProps", {
                        parser: function(n, t, i, r, u) {
                            return u = new o(n, i, 0, 0, u, 2), u.setRatio = yr, u.e = t, u.pr = -10, u.data = r._tween, ut = !0, u
                        }
                    }), i = "bezier,throwProps,physicsProps,physics2D".split(","), s = i.length; s--;) ou(i[s]);
                return i = r.prototype, i._firstPT = i._lastParsedTransform = i._transform = null, i._onInitTween = function(n, t, i) {
                    if (!n.nodeType) return !1;
                    this._target = n, this._tween = i, this._vars = t, ni = t.autoRound, ut = !1, yt = t.suffixMap || r.suffixMap, e = et(n, ""), gt = this._overwriteProps;
                    var a, s, f, v, b, k, p, y, w, l = n.style;
                    if (wi && "" === l.zIndex && (a = u(n, "zIndex", e), ("auto" === a || "" === a) && this._addLazySet(l, "zIndex", 0)), "string" == typeof t && (v = l.cssText, a = ot(n, e), l.cssText = v + ";" + t, a = hi(n, a, ot(n)).difs, !tt && br.test(t) && (a.opacity = parseFloat(RegExp.$1)), t = a, l.cssText = v), this._firstPT = s = this.parse(n, t, null), this._transformType) {
                        for (w = 3 === this._transformType, h ? ti && (wi = !0, "" === l.zIndex && (p = u(n, "zIndex", e), ("auto" === p || "" === p) && this._addLazySet(l, "zIndex", 0)), bi && this._addLazySet(l, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : l.zoom = 1, f = s; f && f._next;) f = f._next;
                        y = new o(n, "transform", 0, 0, null, 2), this._linkCSSP(y, null, f), y.setRatio = w && c ? pi : h ? lr : lu, y.data = this._transform || at(n, e, !0), gt.pop()
                    }
                    if (ut) {
                        for (; s;) {
                            for (k = s._next, f = v; f && f.pr > s.pr;) f = f._next;
                            (s._prev = f ? f._prev : b) ? s._prev._next = s: v = s, (s._next = f) ? f._prev = s : b = s, s = k
                        }
                        this._firstPT = v
                    }
                    return !0
                }, i.parse = function(n, t, i, r) {
                    var f, d, h, c, v, s, y, l, p, w, k = n.style;
                    for (f in t) s = t[f], d = a[f], d ? i = d.parse(n, s, f, this, i, r, t) : (v = u(n, f, e) + "", p = "string" == typeof s, "color" === f || "fill" === f || "stroke" === f || -1 !== f.indexOf("Color") || p && di.test(s) ? (p || (s = li(s), s = (s.length > 3 ? "rgba(" : "rgb(") + s.join(",") + ")"), i = kt(k, f, v, s, !0, "transparent", i, 0, r)) : !p || -1 === s.indexOf(" ") && -1 === s.indexOf(",") ? (h = parseFloat(v), y = h || 0 === h ? v.substr((h + "").length) : "", ("" === v || "auto" === v) && ("width" === f || "height" === f ? (h = eu(n, f, e), y = "px") : "left" === f || "top" === f ? (h = rr(n, f, e), y = "px") : (h = "opacity" !== f ? 0 : 1, y = "")), w = p && "=" === s.charAt(1), w ? (c = parseInt(s.charAt(0) + "1", 10), s = s.substr(2), c *= parseFloat(s), l = s.replace(wt, "")) : (c = parseFloat(s), l = p ? s.replace(wt, "") : ""), "" === l && (l = f in yt ? yt[f] : y), s = c || 0 === c ? (w ? c + h : c) + l : t[f], y !== l && "" !== l && (c || 0 === c) && h && (h = b(n, f, h, y), "%" === l ? (h /= b(n, f, 100, "%") / 100, t.strictUnits !== !0 && (v = h + "%")) : "em" === l ? h /= b(n, f, 1, "em") : "px" !== l && (c = b(n, f, c, l), l = "px"), w && (c || 0 === c) && (s = c + h + l)), w && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== k[f] && (s || "NaN" != s + "" && null != s) ? (i = new o(k, f, c || h || 0, 0, i, -1, f, !1, 0, v, s), i.xs0 = "none" !== s || "display" !== f && -1 === f.indexOf("Style") ? s : v) : tr("invalid " + f + " tween value: " + t[f]) : (i = new o(k, f, h, c - h, i, 0, f, ni !== !1 && ("px" === l || "zIndex" === f), 0, v, s), i.xs0 = l)) : i = kt(k, f, v, s, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                    return i
                }, i.setRatio = function(n) {
                    var i, u, r, t = this._firstPT,
                        f = 1e-6;
                    if (1 !== n || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (n || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; t;) {
                                if (i = t.c * n + t.s, t.r ? i = Math.round(i) : f > i && i > -f && (i = 0), t.type)
                                    if (1 === t.type)
                                        if (r = t.l, 2 === r) t.t[t.p] = t.xs0 + i + t.xs1 + t.xn1 + t.xs2;
                                        else if (3 === r) t.t[t.p] = t.xs0 + i + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3;
                                else if (4 === r) t.t[t.p] = t.xs0 + i + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4;
                                else if (5 === r) t.t[t.p] = t.xs0 + i + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5;
                                else {
                                    for (u = t.xs0 + i + t.xs1, r = 1; t.l > r; r++) u += t["xn" + r] + t["xs" + (r + 1)];
                                    t.t[t.p] = u
                                } else -1 === t.type ? t.t[t.p] = t.xs0 : t.setRatio && t.setRatio(n);
                                else t.t[t.p] = i + t.xs0;
                                t = t._next
                            } else
                                for (; t;) 2 !== t.type ? t.t[t.p] = t.b : t.setRatio(n), t = t._next;
                        else
                            for (; t;) 2 !== t.type ? t.t[t.p] = t.e : t.setRatio(n), t = t._next
                }, i._enableTransforms = function(n) {
                    this._transform = this._transform || at(this._target, e, !0), this._transformType = this._transform.svg && ct || !n && 3 !== this._transformType ? 2 : 3
                }, pr = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                }, i._addLazySet = function(n, t, i) {
                    var r = this._firstPT = new o(n, t, 0, 0, this._firstPT, 2);
                    r.e = i, r.setRatio = pr, r.data = this
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
                }, vt = function(n, t, i) {
                    var e, u, r, f;
                    if (n.slice)
                        for (u = n.length; --u > -1;) vt(n[u], t, i);
                    else
                        for (e = n.childNodes, u = e.length; --u > -1;) r = e[u], f = r.type, r.style && (t.push(ot(r)), i && i.push(r)), 1 !== f && 9 !== f && 11 !== f || !r.childNodes.length || vt(r, t, i)
                }, r.cascadeTo = function(n, i, r) {
                    var u, f, o, e = t.to(n, i, r),
                        h = [e],
                        c = [],
                        l = [],
                        s = [],
                        a = t._internals.reservedProps;
                    for (n = e._targets || e.target, vt(n, c, s), e.render(i, !0), vt(n, l), e.render(0, !0), e._enabled(!0), u = s.length; --u > -1;)
                        if (f = hi(s[u], c[u], l[u]), f.firstMPT) {
                            f = f.difs;
                            for (o in r) a[o] && (f[o] = r[o]);
                            h.push(t.to(s[u], i, f))
                        }
                    return h
                }, n.activate([r]), r
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(n, t, i) {
                            return this._tween = i, !0
                        }
                    }),
                    n = t.prototype;
                n._onInitAllProps = function() {
                    for (var u, n, i, t = this._tween, f = t.vars.roundProps instanceof Array ? t.vars.roundProps : t.vars.roundProps.split(","), r = f.length, e = {}, o = t._propLookup.roundProps; --r > -1;) e[f[r]] = 1;
                    for (r = f.length; --r > -1;)
                        for (u = f[r], n = t._firstPT; n;) i = n._next, n.pg ? n.t._roundProps(e, !0) : n.n === u && (this._add(n.t, u, n.s, n.c), i && (i._prev = n._prev), n._prev ? n._prev._next = i : t._firstPT === n && (t._firstPT = i), n._next = n._prev = null, t._propLookup[u] = o), n = i;
                    return !1
                }, n._add = function(n, t, i, r) {
                    this._addTween(n, t, i, i + r, t, !0), this._overwriteProps.push(t)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.3.3",
                init: function(n, t) {
                    var i, u, r;
                    if ("function" != typeof n.setAttribute) return !1;
                    this._target = n, this._proxy = {}, this._start = {}, this._end = {};
                    for (i in t) this._start[i] = this._proxy[i] = u = n.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(u), t[i], i), this._end[i] = r ? r.s + r.c : t[i], this._overwriteProps.push(i);
                    return !0
                },
                set: function(n) {
                    this._super.setRatio.call(this, n);
                    for (var t, i = this._overwriteProps, r = i.length, u = 1 === n ? this._end : n ? this._proxy : this._start; --r > -1;) t = i[r], this._target.setAttribute(t, u[t] + "")
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(n, t) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var r, f, e, s, i, o, u = t.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (r in t) "useRadians" !== r && (o = (t[r] + "").split("_"), f = o[0], e = parseFloat("function" != typeof n[r] ? n[r] : n[r.indexOf("set") || "function" != typeof n["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), s = this.finals[r] = "string" == typeof f && "=" === f.charAt(1) ? e + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = s - e, o.length && (f = o.join("_"), -1 !== f.indexOf("short") && (i %= u, i !== i % (u / 2) && (i = 0 > i ? i + u : i - u)), -1 !== f.indexOf("_cw") && 0 > i ? i = (i + 9999999999 * u) % u - (0 | i / u) * u : -1 !== f.indexOf("ccw") && i > 0 && (i = (i - 9999999999 * u) % u - (0 | i / u) * u)), (i > h || -h > i) && (this._addTween(n, r, e, e + i, r), this._overwriteProps.push(r)));
                    return !0
                },
                set: function(n) {
                    var t;
                    if (1 !== n) this._super.setRatio.call(this, n);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(n) {
                var f, u, h, v = _gsScope.GreenSockGlobals || _gsScope,
                    p = v.com.greensock,
                    s = 2 * Math.PI,
                    y = Math.PI / 2,
                    r = p._class,
                    t = function(t, i) {
                        var u = r("easing." + t, function() {}, !0),
                            f = u.prototype = new n;
                        return f.constructor = u, f.getRatio = i, u
                    },
                    c = n.register || function() {},
                    e = function(n, t, i, u) {
                        var f = r("easing." + n, {
                            easeOut: new t,
                            easeIn: new i,
                            easeInOut: new u
                        }, !0);
                        return c(f, n), f
                    },
                    l = function(n, t, i) {
                        this.t = n, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - n)
                    },
                    a = function(t, i) {
                        var u = r("easing." + t, function(n) {
                                this._p1 = n || 0 === n ? n : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            f = u.prototype = new n;
                        return f.constructor = u, f.getRatio = i, f.config = function(n) {
                            return new u(n)
                        }, u
                    },
                    w = e("Back", a("BackOut", function(n) {
                        return (n -= 1) * n * ((this._p1 + 1) * n + this._p1) + 1
                    }), a("BackIn", function(n) {
                        return n * n * ((this._p1 + 1) * n - this._p1)
                    }), a("BackInOut", function(n) {
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
                    for (var i, r, u, f, h, e, c = t.taper || "none", a = [], w = 0, v = 0 | (t.points || 20), o = v, y = t.randomize !== !1, b = t.clamp === !0, p = t.template instanceof n ? t.template : null, s = "number" == typeof t.strength ? .4 * t.strength : .4; --o > -1;) i = y ? Math.random() : 1 / v * o, r = p ? p.getRatio(i) : i, "none" === c ? u = s : "out" === c ? (f = 1 - i, u = f * f * s) : "in" === c ? u = i * i * s : .5 > i ? (f = 2 * i, u = .5 * f * f * s) : (f = 2 * (1 - i), u = .5 * f * f * s), y ? r += Math.random() * u - .5 * u : o % 2 ? r += .5 * u : r -= .5 * u, b && (r > 1 ? r = 1 : 0 > r && (r = 0)), a[w++] = {
                        x: i,
                        y: r
                    };
                    for (a.sort(function(n, t) {
                            return n.x - t.x
                        }), e = new l(1, 1, null), o = v; --o > -1;) h = a[o], e = new l(h.x, h.y, e);
                    this._prev = new l(0, 0, 0 !== e.t ? e : e.next)
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
                })), h = function(t, i, u) {
                    var f = r("easing." + t, function(n, t) {
                            this._p1 = n || 1, this._p2 = t || u, this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        e = f.prototype = new n;
                    return e.constructor = f, e.getRatio = i, e.config = function(n, t) {
                        return new f(n, t)
                    }, f
                }, e("Elastic", h("ElasticOut", function(n) {
                    return this._p1 * Math.pow(2, -10 * n) * Math.sin((n - this._p3) * s / this._p2) + 1
                }, .3), h("ElasticIn", function(n) {
                    return -(this._p1 * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - this._p3) * s / this._p2))
                }, .3), h("ElasticInOut", function(n) {
                    return 1 > (n *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - this._p3) * s / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - this._p3) * s / this._p2) + 1
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
                }, !0), c(v.SlowMo, "SlowMo", "ease,"), c(u, "RoughEase", "ease,"), c(f, "SteppedEase", "ease,"), w
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(n, t) {
        "use strict";
        var ot = n.GreenSockGlobals = n.GreenSockGlobals || n,
            lt, o, vt, ut, c;
        if (!ot.TweenLite) {
            var s, f, i, u, h, gt = function(n) {
                    for (var r = n.split("."), i = ot, t = 0; r.length > t; t++) i[r[t]] = i = i[r[t]] || {};
                    return i
                },
                v = gt("com.greensock"),
                e = 1e-10,
                ni = function(n) {
                    for (var i = [], r = n.length, t = 0; t !== r; i.push(n[t++]));
                    return i
                },
                ti = function() {},
                d = function() {
                    var n = Object.prototype.toString,
                        t = n.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && n.call(i) === t)
                    }
                }(),
                g = {},
                ii = function(i, r, u, f) {
                    this.sc = g[i] ? g[i].sc : [], g[i] = this, this.gsClass = null, this.func = u;
                    var e = [];
                    this.check = function(o) {
                        for (var c, l, a, h, s = r.length, v = s; --s > -1;)(c = g[r[s]] || new ii(r[s], [])).gsClass ? (e[s] = c.gsClass, v--) : o && c.sc.push(this);
                        if (0 === v && u)
                            for (l = ("com.greensock." + i).split("."), a = l.pop(), h = gt(l.join("."))[a] = this.gsClass = u.apply(u, e), f && (ot[a] = h, "function" == typeof define && define.amd ? define((n.GreenSockAMDPath ? n.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function() {
                                    return h
                                }) : i === t && "undefined" != typeof module && module.exports && (module.exports = h)), s = 0; this.sc.length > s; s++) this.sc[s].check()
                    }, this.check(!0)
                },
                st = n._gsDefine = function(n, t, i, r) {
                    return new ii(n, t, i, r)
                },
                l = v._class = function(n, t, i) {
                    return t = t || function() {}, st(n, [], function() {
                        return t
                    }, i), t
                };
            st.globals = ot;
            var ri = [0, 0, 1, 1],
                ht = [],
                a = l("easing.Ease", function(n, t, i, r) {
                    this._func = n, this._type = i || 0, this._power = r || 0, this._params = t ? ri.concat(t) : ri
                }, !0),
                nt = a.map = {},
                ct = a.register = function(n, t, i, r) {
                    for (var o, u, e, f, s = t.split(","), h = s.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (u = s[h], o = r ? l("easing." + u, null, !0) : v.easing[u] || {}, e = c.length; --e > -1;) f = c[e], nt[u + "." + f] = nt[f + u] = o[f] = n.getRatio ? n : n[f] || new n
                };
            for (i = a.prototype, i._calcEnd = !1, i.getRatio = function(n) {
                    if (this._func) return this._params[0] = n, this._func.apply(null, this._params);
                    var i = this._type,
                        r = this._power,
                        t = 1 === i ? 1 - n : 2 === i ? n : .5 > n ? 2 * n : 2 * (1 - n);
                    return 1 === r ? t *= t : 2 === r ? t *= t * t : 3 === r ? t *= t * t * t : 4 === r && (t *= t * t * t * t), 1 === i ? 1 - t : 2 === i ? t : .5 > n ? t / 2 : 1 - t / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], f = s.length; --f > -1;) i = s[f] + ",Power" + f, ct(new a(null, null, 1, f), i, "easeOut", !0), ct(new a(null, null, 2, f), i, "easeIn" + (0 === f ? ",easeNone" : "")), ct(new a(null, null, 3, f), i, "easeInOut");
            nt.linear = v.easing.Linear.easeIn, nt.swing = v.easing.Quad.easeInOut, lt = l("events.EventDispatcher", function(n) {
                this._listeners = {}, this._eventTarget = n || this
            }), i = lt.prototype, i.addEventListener = function(n, t, i, r, f) {
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
            var tt = n.requestAnimationFrame,
                at = n.cancelAnimationFrame,
                it = Date.now || function() {
                    return +new Date
                },
                rt = it();
            for (s = ["ms", "moz", "webkit", "o"], f = s.length; --f > -1 && !tt;) tt = n[s[f] + "RequestAnimationFrame"], at = n[s[f] + "CancelAnimationFrame"] || n[s[f] + "CancelRequestAnimationFrame"];
            l("Ticker", function(n, t) {
                var f, a, r, s, c, i = this,
                    y = it(),
                    o = t !== !1 && tt,
                    l = 500,
                    p = 33,
                    w = "tick",
                    v = function(n) {
                        var t, e, u = it() - rt;
                        u > l && (y += u - p), rt += u, i.time = (rt - y) / 1e3, t = i.time - c, (!f || t > 0 || n === !0) && (i.frame++, c += t + (t >= s ? .004 : s - t), e = !0), n !== !0 && (r = a(v)), e && i.dispatchEvent(w)
                    };
                lt.call(i), i.time = i.frame = 0, i.tick = function() {
                    v(!0)
                }, i.lagSmoothing = function(n, t) {
                    l = n || 1 / e, p = Math.min(t, l, 0)
                }, i.sleep = function() {
                    null != r && (o && at ? at(r) : clearTimeout(r), a = ti, r = null, i === u && (h = !1))
                }, i.wake = function() {
                    null !== r ? i.sleep() : i.frame > 10 && (rt = it() - l + 5), a = 0 === f ? ti : o && tt ? tt : function(n) {
                        return setTimeout(n, 0 | 1e3 * (c - i.time) + 1)
                    }, i === u && (h = !0), v(2)
                }, i.fps = function(n) {
                    return arguments.length ? (f = n, s = 1 / (f || 60), c = this.time + s, i.wake(), void 0) : f
                }, i.useRAF = function(n) {
                    return arguments.length ? (i.sleep(), o = n, i.fps(f), void 0) : o
                }, i.fps(n), setTimeout(function() {
                    o && (!r || 5 > i.frame) && i.useRAF(!1)
                }, 1500)
            }), i = v.Ticker.prototype = new v.events.EventDispatcher, i.constructor = v.Ticker, o = l("core.Animation", function(n, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = n || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, p) {
                    h || u.wake();
                    var i = this.vars.useFrames ? k : p;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            }), u = o.ticker = new v.Ticker, i = o.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1, vt = function() {
                h && it() - rt > 2e3 && u.wake(), setTimeout(vt, 2e3)
            }, vt(), i.play = function(n, t) {
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
                    this._gc && this._enabled(!0, !1), (this._totalTime !== n || 0 === this._duration) && (this.render(n, t, !1), y.length && ft())
                }
                return this
            }, i.progress = i.totalProgress = function(n, t) {
                return arguments.length ? this.totalTime(this.duration() * n, t) : this._time / this.duration()
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
                if (n != this._paused && this._timeline) {
                    h || n || u.wake();
                    var t = this._timeline,
                        i = t.rawTime(),
                        r = i - this._pauseTime;
                    !n && t.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = n ? i : null, this._paused = n, this._active = this.isActive(), !n && 0 !== r && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !n && this._enabled(!0, !1), this
            }, ut = l("core.SimpleTimeline", function(n) {
                o.call(this, 0, n), this.autoRemoveChildren = this.smoothChildTiming = !0
            }), i = ut.prototype = new o, i.constructor = ut, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function(n, t) {
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
                    if (this._overwrite = c = null == c ? ui[r.defaultOverwrite] : "number" == typeof c ? c >> 0 : ui[c], (l || t instanceof Array || t.push && d(t)) && "number" != typeof t[0])
                        for (this._targets = h = ni(t), this._propLookup = [], this._siblings = [], s = 0; h.length > s; s++) f = h[s], f ? "string" != typeof f ? f.length && f !== n && f[0] && (f[0] === n || f[0].nodeType && f[0].style && !f.nodeType) ? (h.splice(s--, 1), this._targets = h = h.concat(ni(f))) : (this._siblings[s] = et(f, this, !1), 1 === c && this._siblings[s].length > 1 && dt(f, this, null, 1, this._siblings[s])) : (f = h[s--] = r.selector(f), "string" == typeof f && h.splice(s + 1, 1)) : h.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === c && this._siblings.length > 1 && dt(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -e, this.render(-this._delay))
                }, !0),
                yt = function(t) {
                    return t && t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType)
                },
                ei = function(n, t) {
                    var i, r = {};
                    for (i in n) bt[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!w[i] || w[i] && w[i]._autoCSS) || (r[i] = n[i], delete n[i]);
                    n.css = r
                };
            i = r.prototype = new o, i.constructor = r, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, r.version = "1.15.1", r.defaultEase = i._ease = new a(null, null, 1, 1), r.defaultOverwrite = "auto", r.ticker = u, r.autoSleep = !0, r.lagSmoothing = function(n, t) {
                u.lagSmoothing(n, t)
            }, r.selector = n.$ || n.jQuery || function(t) {
                var i = n.$ || n.jQuery;
                return i ? (r.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var y = [],
                pt = {},
                wt = r._internals = {
                    isArray: d,
                    isSelector: yt,
                    lazyTweens: y
                },
                w = r._plugins = {},
                b = wt.tweenLookup = {},
                oi = 0,
                bt = wt.reservedProps = {
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
                    onOverwrite: 1
                },
                ui = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                k = o._rootFramesTimeline = new ut,
                p = o._rootTimeline = new ut,
                ft = wt.lazyRender = function() {
                    var n, t = y.length;
                    for (pt = {}; --t > -1;) n = y[t], n && n._lazy !== !1 && (n.render(n._lazy[0], n._lazy[1], !0), n._lazy = !1);
                    y.length = 0
                };
            p._startTime = u.time, k._startTime = u.frame, p._active = k._active = !0, setTimeout(ft, 1), o._updateRoot = r.render = function() {
                var i, t, n;
                if (y.length && ft(), p.render((u.time - p._startTime) * p._timeScale, !1, !1), k.render((u.frame - k._startTime) * k._timeScale, !1, !1), y.length && ft(), !(u.frame % 120)) {
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
                    if (b[u || (n._gsTweenID = u = "t" + oi++)] || (b[u] = {
                            target: n,
                            tweens: []
                        }), t && (r = b[u].tweens, r[f = r.length] = t, i))
                        for (; --f > -1;) r[f] === t && r.splice(f, 1);
                    return b[u].tweens
                },
                kt = function(n, t, i, u) {
                    var e, o, f = n.vars.onOverwrite;
                    return f && (e = f(n, t, i, u)), f = r.onOverwrite, f && (o = f(n, t, i, u)), e !== !1 && o !== !1
                },
                dt = function(n, t, i, r, u) {
                    var o, s, f, y;
                    if (1 === r || r >= 4) {
                        for (y = u.length, o = 0; y > o; o++)
                            if ((f = u[o]) !== t) f._gc || kt(f, t) && f._enabled(!1, !1) && (s = !0);
                            else if (5 === r) break;
                        return s
                    }
                    var h, c = t._startTime + e,
                        l = [],
                        a = 0,
                        v = 0 === t._duration;
                    for (o = u.length; --o > -1;)(f = u[o]) === t || f._gc || f._paused || (f._timeline !== t._timeline ? (h = h || fi(t, 0, v), 0 === fi(f, h, v) && (l[a++] = f)) : c >= f._startTime && f._startTime + f.totalDuration() / f._timeScale > c && ((v || !f._initted) && 2e-10 >= c - f._startTime || (l[a++] = f)));
                    for (o = a; --o > -1;)
                        if (f = l[o], 2 === r && f._kill(i, n, t) && (s = !0), 2 !== r || !f._firstPT && f._initted) {
                            if (2 !== r && !kt(f, t)) continue;
                            f._enabled(!1, !1) && (s = !0)
                        }
                    return s
                },
                fi = function(n, t, i) {
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
                            for (u in t) bt[u] && "autoCSS" !== u || (n[u] = t[u]);
                            if (n.overwrite = 0, n.data = "isFromStart", n.lazy = o && t.lazy !== !1, n.immediateRender = o, this._startAt = r.to(this.target, 0, n), o) {
                                if (0 === this._time) return
                            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                        }
                    if (this._ease = i = i ? i instanceof a ? i : "function" == typeof i ? new a(i, t.easeParams) : nt[i] || r.defaultEase : r.defaultEase, t.easeParams instanceof Array && i.config && (this._ease = i.config.apply(i, t.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null) && (h = !0);
                    else h = this._initProps(this.target, this._propLookup, this._siblings, s);
                    if (h && r._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), t.runBackwards)
                        for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
                    this._onUpdate = t.onUpdate, this._initted = !0
                }, i._initProps = function(t, i, r, u) {
                    var f, h, c, s, o, e;
                    if (null == t) return !1;
                    pt[t._gsTweenID] && ft(), this.vars.css || t.style && t !== n && t.nodeType && w.css && this.vars.autoCSS !== !1 && ei(this.vars, t);
                    for (f in this.vars) {
                        if (e = this.vars[f], bt[f]) e && (e instanceof Array || e.push && d(e)) && -1 !== e.join("").indexOf("{self}") && (this.vars[f] = e = this._swapSelfInParams(e, this));
                        else if (w[f] && (s = new w[f])._onInitTween(t, this.vars[f], this)) {
                            for (this._firstPT = o = {
                                    _next: this._firstPT,
                                    t: s,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: !0,
                                    n: f,
                                    pg: !0,
                                    pr: s._priority
                                }, h = s._overwriteProps.length; --h > -1;) i[s._overwriteProps[h]] = this._firstPT;
                            (s._priority || s._onInitAllProps) && (c = !0), (s._onDisable || s._onEnable) && (this._notifyPluginsOfEnabled = !0)
                        } else this._firstPT = i[f] = o = {
                            _next: this._firstPT,
                            t: t,
                            p: f,
                            f: "function" == typeof t[f],
                            n: f,
                            pg: !1,
                            pr: 0
                        }, o.s = o.f ? t[f.indexOf("set") || "function" != typeof t["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(t[f]), o.c = "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) : Number(e) - o.s || 0;
                        o && o._next && (o._next._prev = o)
                    }
                    return u && this._kill(u, t) ? this._initProps(t, i, r, u) : this._overwrite > 1 && this._firstPT && r.length > 1 && dt(t, this, i, this._overwrite, r) ? (this._kill(i, t), this._initProps(t, i, r, u)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (pt[t._gsTweenID] = !0), c)
                }, i.render = function(n, t, i) {
                    var h, s, u, v, c = this._time,
                        f = this._duration,
                        o = this._rawPrevTime;
                    if (n >= f) this._totalTime = this._time = f, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (h = !0, s = "onComplete"), 0 === f && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (n = 0), (0 === n || 0 > o || o === e && "isPause" !== this.data) && o !== n && (i = !0, o > e && (s = "onReverseComplete")), this._rawPrevTime = v = !t || n || o === n ? n : e);
                    else if (1e-7 > n) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== c || 0 === f && o > 0 && o !== e) && (s = "onReverseComplete", h = this._reversed), 0 > n && (this._active = !1, 0 === f && (this._initted || !this.vars.lazy || i) && (o >= 0 && (o !== e || "isPause" !== this.data) && (i = !0), this._rawPrevTime = v = !t || n || o === n ? n : e)), this._initted || (i = !0);
                    else if (this._totalTime = this._time = n, this._easeType) {
                        var r = n / f,
                            l = this._easeType,
                            a = this._easePower;
                        (1 === l || 3 === l && r >= .5) && (r = 1 - r), 3 === l && (r *= 2), 1 === a ? r *= r : 2 === a ? r *= r * r : 3 === a ? r *= r * r * r : 4 === a && (r *= r * r * r * r), this.ratio = 1 === l ? 1 - r : 2 === l ? r : .5 > n / f ? r / 2 : 1 - r / 2
                    } else this.ratio = this._ease.getRatio(n / f);
                    if (this._time !== c || i) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = c, this._rawPrevTime = o, y.push(this), this._lazy = [n, t], void 0;
                            this._time && !h ? this.ratio = this._ease.getRatio(this._time / f) : h && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== c && n >= 0 && (this._active = !0), 0 === c && (this._startAt && (n >= 0 ? this._startAt.render(n, t, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === f) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || ht))), u = this._firstPT; u;) u.f ? u.t[u.p](u.c * this.ratio + u.s) : u.t[u.p] = u.c * this.ratio + u.s, u = u._next;
                        this._onUpdate && (0 > n && this._startAt && n !== -.0001 && this._startAt.render(n, t, i), t || (this._time !== c || h) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || ht)), s && (!this._gc || i) && (0 > n && this._startAt && !this._onUpdate && n !== -.0001 && this._startAt.render(n, t, i), h && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || ht), 0 === f && this._rawPrevTime === e && v !== e && (this._rawPrevTime = 0))
                    }
                }, i._kill = function(n, t, i) {
                    if ("all" === n && (n = null), null == n && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    t = "string" != typeof t ? t || this._targets || this.target : r.selector(t) || t;
                    var f, s, o, u, e, l, h, a, c;
                    if ((d(t) || yt(t)) && "number" != typeof t[0])
                        for (f = t.length; --f > -1;) this._kill(n, t[f]) && (l = !0);
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
                            if (h = n || e, a = n !== s && "all" !== s && n !== e && ("object" != typeof n || !n._tempKill), i && (r.onOverwrite || this.vars.onOverwrite)) {
                                for (o in h) e[o] && (c || (c = []), c.push(o));
                                if (!kt(this, i, t, c)) return !1
                            }
                            for (o in h)(u = e[o]) && (u.pg && u.t._kill(h) && (l = !0), u.pg && 0 !== u.t._overwriteProps.length || (u._prev ? u._prev._next = u._next : u === this._firstPT && (this._firstPT = u._next), u._next && (u._next._prev = u._prev), u._next = u._prev = null), delete e[o]), a && (s[o] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1)
                        }
                    }
                    return l
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
                        onCompleteScope: u,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: u,
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
                    if ((d(n) || yt(n)) && "number" != typeof n[0]) {
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
                }, !0), i = c.prototype, c.version = "1.10.1", c.API = 2, i._firstPT = null, i._addTween = function(n, t, i, r, u, f) {
                    var o, e;
                    if (null != r && (o = "number" == typeof r || "=" !== r.charAt(1) ? Number(r) - i : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)))) return this._firstPT = e = {
                        _next: this._firstPT,
                        t: n,
                        p: t,
                        s: i,
                        c: o,
                        f: "function" == typeof n[t],
                        n: u || t,
                        r: f
                    }, e._next && (e._next._prev = e), e
                }, i.setRatio = function(n) {
                    for (var i, t = this._firstPT, r = 1e-6; t;) i = t.c * n + t.s, t.r ? i = Math.round(i) : r > i && i > -r && (i = 0), t.f ? t.t[t.p](i) : t.t[t.p] = i, t = t._next
                }, i._kill = function(n) {
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
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(n) {
        function i(t) {
            var f, i;
            (i = n(this), i.length) && (f = new r(t), window.cws_prlx = window.cws_prlx != undefined ? window.cws_prlx : new u, i.each(function() {
                var i = n(this),
                    t = f.add_section(i);
                t && window.cws_prlx.prepare_section_data(t)
            }))
        }

        function r(n) {
            var n = n != undefined ? n : {};
            n.def_speed = n.def_speed != undefined && !isNaN(parseInt(n.def_speed)) && parseInt(n.def_speed > 0) && parseInt(n.def_speed <= 100) ? n.def_speed : 50, n.layer_sel = n.layer_sel != undefined && typeof n.layer_sel == "string" && n.layer_sel.length ? n.layer_sel : ".cws_prlx_layer", this.args = n, this.add_section = f, this.add_layer = e, this.remove_layer = o
        }

        function u() {
            this.servant = new a, this.sections = {}, this.layers = {}, this.calc_layer_speed = b, this.prepare_section_data = s, this.prepare_layer_data = h, this.translate_layers = c, this.translate_layer = l, this.conditions = {}, this.conditions.layer_loaded = w, this.disabled = !1
        }

        function f(t) {
            var i, r, u, f, o, e;
            if (i = this, r = t[0], f = n(i.args.layer_sel, t), !f.length) return !1;
            for (u = window.cws_prlx.servant.uniq_id("cws_prlx_section_"), r.id = u, window.cws_prlx.sections[u] = {
                    el: r,
                    height: null,
                    layer_sel: i.args.layer_sel
                }, /cws_Yt_video_bg/.test(r.className) && (r.addEventListener("DOMNodeRemoved", function(t) {
                    var r = t.srcElement ? t.srcElement : t.target;
                    n(r).is(i.args.layer_sel) && i.remove_layer(r.id)
                }, !1), r.addEventListener("DOMNodeInserted", function(t) {
                    var r = t.srcElement ? t.srcElement : t.target;
                    n(r).is(i.args.layer_sel) && i.add_layer(r, u)
                }, !1)), r.addEventListener("DOMNodeRemoved", function() {
                    window.cws_prlx.prepare_section_data(u)
                }, !1), r.addEventListener("DOMNodeInserted", function() {
                    window.cws_prlx.prepare_section_data(u)
                }, !1), e = 0; e < f.length; e++) o = f[e], i.add_layer(o, u);
            return u
        }

        function e(t, i) {
            var u, r, f;
            return u = this, t.id = t.id.length ? t.id : window.cws_prlx.servant.uniq_id("cws_prlx_layer_"), r = n(t).data("scroll-speed"), r = r != undefined ? r : u.args.def_speed, f = {
                el: t,
                section_id: i,
                height: null,
                loaded: !1,
                rel_speed: r,
                speed: null
            }, window.cws_prlx.layers[t.id] = f, t.id
        }

        function o(n) {
            var t;
            t = window.cws_prlx.layers, t[n] != undefined && delete t[n]
        }

        function s(t) {
            var u, i, s, f, o, e, r;
            if (!Object.keys(window.cws_prlx.sections).length || window.cws_prlx.sections[t] == undefined) return !1;
            for (i = window.cws_prlx.sections[t], u = i.el, i.height = u.offsetHeight, section_obj = n(u), f = n(i.layer_sel, section_obj), r = 0; r < f.length; r++) o = f[r], e = o.id, e && window.cws_prlx.prepare_layer_data(e, t)
        }

        function h(n) {
            window.cws_prlx.servant.wait_for("layer_loaded", [n], function(n) {
                var t, i;
                t = window.cws_prlx.layers[n], i = t.el, t.height = i.offsetHeight, window.cws_prlx.calc_layer_speed(n), window.cws_prlx.translate_layer(n), t.loaded = !0
            }, [n])
        }

        function c() {
            var i, t, r, n;
            if (window.cws_prlx != undefined)
                for (i = window.cws_prlx.layers, t = Object.keys(i), n = 0; n < t.length; n++) r = t[n], window.cws_prlx.translate_layer(r)
        }

        function l(n) {
            var t, r, f, i, u;
            if (window.cws_prlx == undefined || window.cws_prlx.layers[n] == undefined || (t = window.cws_prlx.layers[n], t.speed == null) || t.section_id == undefined || window.cws_prlx.sections[t.section_id] == undefined) return !1;
            if (r = window.cws_prlx.sections[t.section_id].el, window.cws_prlx.servant.is_visible(r)) {
                f = t.el, i = (r.getBoundingClientRect().top - window.innerHeight) * t.speed, u = {
                    WebkitTransform: "translate(-50%," + i + "px)",
                    MozTransform: "translate(-50%," + i + "px)",
                    msTransform: "translate(-50%," + i + "px)",
                    OTransform: "translate(-50%," + i + "px)",
                    transform: "translate(-50%," + i + "px)"
                };
                for (key in u) f.style[key] = u[key]
            }
        }

        function a() {
            this.uniq_id = v, this.wait_for = t, this.is_visible = y, this.is_mobile = p
        }

        function v(n) {
            var t, i, r, u, n = n != undefined ? n : "";
            return t = new Date, i = t.getTime(), r = parseInt(Math.random() * i), u = n + r
        }

        function t(n, i, r, u) {
            var f = !1,
                i = i != undefined && typeof i == "object" ? i : [],
                u = u != undefined && typeof u == "object" ? u : [];
            if (n == undefined || typeof n != "string" || r == undefined || typeof r != "function") return f;
            if (f = window.cws_prlx.conditions[n].apply(window, i), f == !0) return r.apply(window, u), !0;
            if (f == !1) setTimeout(function() {
                t(n, i, r, u)
            }, 10);
            else return !1
        }

        function y(t) {
            var i, e, u, r, o, f, s;
            return i = window.pageYOffset, e = window.innerHeight, u = i + e, r = n(t).offset().top, o = t.offsetHeight, f = r + o, s = r > i && r < u || r < i && f > u || f > i && f < u ? !0 : !1
        }

        function p() {
            return window.innerWidth < 768
        }

        function w(n) {
            var t, i;
            if ((i = !1, n == undefined || typeof n != "string") || window.cws_prlx.layers[n] == undefined) return i;
            t = window.cws_prlx.layers[n].el;
            switch (t.tagName) {
                case "IMG":
                    if (t.complete == undefined) console.log("img hasn't complete property");
                    else if (!t.complete) return i;
                    break;
                case "DIV":
                    if (/^video-/.test(t.id)) return i
            }
            return !0
        }

        function b(n) {
            var t, f, r, i, u;
            t = window.cws_prlx.layers[n], f = t.el, r = t.section_id, i = window.cws_prlx.sections[r], u = window.innerHeight, t.speed = (t.height - i.height) / (u + i.height) * (t.rel_speed / 100)
        }
        n.fn.cws_prlx = i, window.addEventListener("scroll", function() {
            window.cws_prlx == undefined || window.cws_prlx.disabled || window.cws_prlx.translate_layers()
        }, !1), window.addEventListener("resize", function() {
            var i, n, t;
            if (window.cws_prlx != undefined)
                if (window.cws_prlx.servant.is_mobile()) {
                    if (!window.cws_prlx.disabled) {
                        for (layer_id in window.cws_prlx.layers) window.cws_prlx.layers[layer_id].el.removeAttribute("style");
                        window.cws_prlx.disabled = !0
                    }
                } else {
                    window.cws_prlx.disabled && (window.cws_prlx.disabled = !1);
                    for (n in window.cws_prlx.sections) t = window.cws_prlx.sections[n], t.height != t.el.offsetHeight && window.cws_prlx.prepare_section_data(n)
                }
        }, !1)
    }(jQuery), ! function(n, t, i, r) {
        var p = i("html"),
            e = i(n),
            o = i(t),
            u = i.fancybox = function() {
                u.open.apply(this, arguments)
            },
            y = navigator.userAgent.match(/msie/i),
            v = null,
            s = t.createTouch !== r,
            a = function(n) {
                return n && n.hasOwnProperty && n instanceof i
            },
            c = function(n) {
                return n && "string" === i.type(n)
            },
            l = function(n) {
                return c(n) && 0 < n.indexOf("%")
            },
            f = function(n, t) {
                var i = parseInt(n, 10) || 0;
                return t && l(n) && (i *= u.getViewport()[t] / 100), Math.ceil(i)
            },
            h = function(n, t) {
                return f(n, t) + "px"
            };
        i.extend(u, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !s,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"><\/div><\/div><\/div><\/div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (y ? ' allowtransparency="true"' : "") + "><\/iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.<\/p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><\/a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span><\/span><\/a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span><\/span><\/a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeChange: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(n, t) {
                if (n && (i.isPlainObject(t) || (t = {}), !1 !== u.close(!0))) return i.isArray(n) || (n = a(n) ? i(n).get() : [n]), i.each(n, function(f, e) {
                    var s, y, l, o, v, h = {};
                    "object" === i.type(e) && (e.nodeType && (e = i(e)), a(e) ? (h = {
                        href: e.data("fancybox-href") || e.attr("href"),
                        title: e.data("fancybox-title") || e.attr("title"),
                        isDom: !0,
                        element: e
                    }, i.metadata && i.extend(!0, h, e.metadata())) : h = e), s = t.href || h.href || (c(e) ? e : null), y = t.title !== r ? t.title : h.title || "", o = (l = t.content || h.content) ? "html" : t.type || h.type, !o && h.isDom && (o = e.data("fancybox-type"), o || (o = (o = e.prop("class").match(/fancybox\.(\w+)/)) ? o[1] : null)), c(s) && (o || (u.isImage(s) ? o = "image" : u.isSWF(s) ? o = "swf" : "#" === s.charAt(0) ? o = "inline" : c(e) && (o = "html", l = e)), "ajax" === o && (v = s.split(/\s+/, 2), s = v.shift(), v = v.shift())), l || ("inline" === o ? s ? l = i(c(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : h.isDom && (l = e) : "html" === o ? l = s : !o && !s && h.isDom && (o = "inline", l = e)), i.extend(h, {
                        href: s,
                        type: o,
                        content: l,
                        title: y,
                        selector: v
                    }), n[f] = h
                }), u.opts = i.extend(!0, {}, u.defaults, t), t.keys !== r && (u.opts.keys = t.keys ? i.extend({}, u.defaults.keys, t.keys) : !1), u.group = n, u._start(u.opts.index)
            },
            cancel: function() {
                var n = u.coming;
                n && !1 !== u.trigger("onCancel") && (u.hideLoading(), u.ajaxLoad && u.ajaxLoad.abort(), u.ajaxLoad = null, u.imgPreload && (u.imgPreload.onload = u.imgPreload.onerror = null), n.wrap && n.wrap.stop(!0, !0).trigger("onReset").remove(), u.coming = null, u.current || u._afterZoomOut(n))
            },
            close: function(n) {
                u.cancel(), !1 !== u.trigger("beforeClose") && (u.unbindEvents(), u.isActive && (u.isOpen && !0 !== n ? (u.isOpen = u.isOpened = !1, u.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), u.wrap.stop(!0, !0).removeClass("fancybox-opened"), u.transitions[u.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), u._afterZoomOut())))
            },
            play: function(n) {
                var t = function() {
                        clearTimeout(u.player.timer)
                    },
                    i = function() {
                        t(), u.current && u.player.isActive && (u.player.timer = setTimeout(u.next, u.current.playSpeed))
                    },
                    r = function() {
                        t(), o.unbind(".player"), u.player.isActive = !1, u.trigger("onPlayEnd")
                    };
                !0 === n || !u.player.isActive && !1 !== n ? u.current && (u.current.loop || u.current.index < u.group.length - 1) && (u.player.isActive = !0, o.bind({
                    "onCancel.player beforeClose.player": r,
                    "onUpdate.player": i,
                    "beforeLoad.player": t
                }), i(), u.trigger("onPlayStart")) : r()
            },
            next: function(n) {
                var t = u.current;
                t && (c(n) || (n = t.direction.next), u.jumpto(t.index + 1, n, "next"))
            },
            prev: function(n) {
                var t = u.current;
                t && (c(n) || (n = t.direction.prev), u.jumpto(t.index - 1, n, "prev"))
            },
            jumpto: function(n, t, i) {
                var e = u.current;
                e && (n = f(n), u.direction = t || e.direction[n >= e.index ? "next" : "prev"], u.router = i || "jumpto", e.loop && (0 > n && (n = e.group.length + n % e.group.length), n %= e.group.length), e.group[n] !== r && (u.cancel(), u._start(n)))
            },
            reposition: function(n, t) {
                var r, f = u.current,
                    e = f ? f.wrap : null;
                e && (r = u._getPosition(t), n && "scroll" === n.type ? (delete r.position, e.stop(!0, !0).animate(r, 200)) : (e.css(r), f.pos = i.extend({}, f.dim, r)))
            },
            update: function(n) {
                var t = n && n.type,
                    i = !t || "orientationchange" === t;
                i && (clearTimeout(v), v = null), u.isOpen && !v && (v = setTimeout(function() {
                    var r = u.current;
                    r && !u.isClosing && (u.wrap.removeClass("fancybox-tmp"), (i || "load" === t || "resize" === t && r.autoResize) && u._setDimension(), "scroll" === t && r.canShrink || u.reposition(n), u.trigger("onUpdate"), v = null)
                }, i && !s ? 0 : 300))
            },
            toggle: function(n) {
                u.isOpen && (u.current.fitToView = "boolean" === i.type(n) ? n : !u.current.fitToView, s && (u.wrap.removeAttr("style").addClass("fancybox-tmp"), u.trigger("onUpdate")), u.update())
            },
            hideLoading: function() {
                o.unbind(".loading"), i("#fancybox-loading").remove()
            },
            showLoading: function() {
                var t, n;
                u.hideLoading(), t = i('<div id="fancybox-loading"><div><\/div><\/div>').click(u.cancel).appendTo("body"), o.bind("keydown.loading", function(n) {
                    27 === (n.which || n.keyCode) && (n.preventDefault(), u.cancel())
                }), u.defaults.fixed || (n = u.getViewport(), t.css({
                    position: "absolute",
                    top: .5 * n.h + n.y,
                    left: .5 * n.w + n.x
                }))
            },
            getViewport: function() {
                var i = u.current && u.current.locked || !1,
                    t = {
                        x: e.scrollLeft(),
                        y: e.scrollTop()
                    };
                return i ? (t.w = i[0].clientWidth, t.h = i[0].clientHeight) : (t.w = s && n.innerWidth ? n.innerWidth : e.width(), t.h = s && n.innerHeight ? n.innerHeight : e.height()), t
            },
            unbindEvents: function() {
                u.wrap && a(u.wrap) && u.wrap.unbind(".fb"), o.unbind(".fb"), e.unbind(".fb")
            },
            bindEvents: function() {
                var t, n = u.current;
                n && (e.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (n.autoCenter && !n.locked ? " scroll.fb" : ""), u.update), (t = n.keys) && o.bind("keydown.fb", function(f) {
                    var e = f.which || f.keyCode,
                        o = f.target || f.srcElement;
                    return 27 === e && u.coming ? !1 : void(!f.ctrlKey && !f.altKey && !f.shiftKey && !f.metaKey && (!o || !o.type && !i(o).is("[contenteditable]")) && i.each(t, function(t, o) {
                        return 1 < n.group.length && o[e] !== r ? (u[t](o[e]), f.preventDefault(), !1) : -1 < i.inArray(e, o) ? (u[t](), f.preventDefault(), !1) : void 0
                    }))
                }), i.fn.mousewheel && n.mouseWheel && u.wrap.bind("mousewheel.fb", function(t, r, f, e) {
                    for (var o = i(t.target || null), s = !1; o.length && !s && !o.is(".fancybox-skin") && !o.is(".fancybox-wrap");) s = o[0] && !(o[0].style.overflow && "hidden" === o[0].style.overflow) && (o[0].clientWidth && o[0].scrollWidth > o[0].clientWidth || o[0].clientHeight && o[0].scrollHeight > o[0].clientHeight), o = i(o).parent();
                    0 !== r && !s && 1 < u.group.length && !n.canShrink && (e > 0 || f > 0 ? u.prev(e > 0 ? "down" : "left") : (0 > e || 0 > f) && u.next(0 > e ? "up" : "right"), t.preventDefault())
                }))
            },
            trigger: function(n, t) {
                var f, r = t || u.coming || u.current;
                if (r) {
                    if (i.isFunction(r[n]) && (f = r[n].apply(r, Array.prototype.slice.call(arguments, 1))), !1 === f) return !1;
                    r.helpers && i.each(r.helpers, function(t, f) {
                        f && u.helpers[t] && i.isFunction(u.helpers[t][n]) && u.helpers[t][n](i.extend(!0, {}, u.helpers[t].defaults, f), r)
                    }), o.trigger(n)
                }
            },
            isImage: function(n) {
                return c(n) && n.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(n) {
                return c(n) && n.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(n) {
                var e, r, t = {};
                if (n = f(n), e = u.group[n] || null, !e) return !1;
                if (t = i.extend(!0, {}, u.opts, e), e = t.margin, r = t.padding, "number" === i.type(e) && (t.margin = [e, e, e, e]), "number" === i.type(r) && (t.padding = [r, r, r, r]), t.modal && i.extend(!0, t, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), t.autoSize && (t.autoWidth = t.autoHeight = !0), "auto" === t.width && (t.autoWidth = !0), "auto" === t.height && (t.autoHeight = !0), t.group = u.group, t.index = n, u.coming = t, !1 === u.trigger("beforeLoad")) u.coming = null;
                else {
                    if (r = t.type, e = t.href, !r) return u.coming = null, u.current && u.router && "jumpto" !== u.router ? (u.current.index = n, u[u.router](u.direction)) : !1;
                    if (u.isActive = !0, ("image" === r || "swf" === r) && (t.autoHeight = t.autoWidth = !1, t.scrolling = "visible"), "image" === r && (t.aspectRatio = !0), "iframe" === r && s && (t.scrolling = "scroll"), t.wrap = i(t.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body"), i.extend(t, {
                            skin: i(".fancybox-skin", t.wrap),
                            outer: i(".fancybox-outer", t.wrap),
                            inner: i(".fancybox-inner", t.wrap)
                        }), i.each(["Top", "Right", "Bottom", "Left"], function(n, i) {
                            t.skin.css("padding" + i, h(t.padding[n]))
                        }), u.trigger("onReady"), "inline" === r || "html" === r) {
                        if (!t.content || !t.content.length) return u._error("content")
                    } else if (!e) return u._error("href");
                    "image" === r ? u._loadImage() : "ajax" === r ? u._loadAjax() : "iframe" === r ? u._loadIframe() : u._afterLoad()
                }
            },
            _error: function(n) {
                i.extend(u.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: n,
                    content: u.coming.tpl.error
                }), u._afterLoad()
            },
            _loadImage: function() {
                var n = u.imgPreload = new Image;
                n.onload = function() {
                    this.onload = this.onerror = null, u.coming.width = this.width / u.opts.pixelRatio, u.coming.height = this.height / u.opts.pixelRatio, u._afterLoad()
                }, n.onerror = function() {
                    this.onload = this.onerror = null, u._error("image")
                }, n.src = u.coming.href, !0 !== n.complete && u.showLoading()
            },
            _loadAjax: function() {
                var n = u.coming;
                u.showLoading(), u.ajaxLoad = i.ajax(i.extend({}, n.ajax, {
                    url: n.href,
                    error: function(n, t) {
                        u.coming && "abort" !== t ? u._error("ajax", n) : u.hideLoading()
                    },
                    success: function(t, i) {
                        "success" === i && (n.content = t, u._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var n = u.coming,
                    t = i(n.tpl.iframe.replace(/\{rnd\}/g, +new Date)).attr("scrolling", s ? "auto" : n.iframe.scrolling).attr("src", n.href);
                i(n.wrap).bind("onReset", function() {
                    try {
                        i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (n) {}
                }), n.iframe.preload && (u.showLoading(), t.one("load", function() {
                    i(this).data("ready", 1), s || i(this).bind("load.fb", u.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), u._afterLoad()
                })), n.content = t.appendTo(n.inner), n.iframe.preload || u._afterLoad()
            },
            _preloadImages: function() {
                for (var n, r = u.group, i = u.current, f = r.length, e = i.preload ? Math.min(i.preload, f - 1) : 0, t = 1; e >= t; t += 1) n = r[(i.index + t) % f], "image" === n.type && n.href && ((new Image).src = n.href)
            },
            _afterLoad: function() {
                var t, s, f, e, o, n = u.coming,
                    r = u.current;
                if (u.hideLoading(), n && !1 !== u.isActive)
                    if (!1 === u.trigger("afterLoad", n, r)) n.wrap.stop(!0).trigger("onReset").remove(), u.coming = null;
                    else {
                        switch (r && (u.trigger("beforeChange", r), r.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), u.unbindEvents(), t = n.content, s = n.type, f = n.scrolling, i.extend(u, {
                            wrap: n.wrap,
                            skin: n.skin,
                            outer: n.outer,
                            inner: n.inner,
                            current: n,
                            previous: r
                        }), e = n.href, s) {
                            case "inline":
                            case "ajax":
                            case "html":
                                n.selector ? t = i("<div>").html(t).find(n.selector) : a(t) && (t.data("fancybox-placeholder") || t.data("fancybox-placeholder", i('<div class="fancybox-placeholder"><\/div>').insertAfter(t).hide()), t = t.show().detach(), n.wrap.bind("onReset", function() {
                                    i(this).find(t).length && t.hide().replaceAll(t.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                }));
                                break;
                            case "image":
                                t = n.tpl.image.replace("{href}", e);
                                break;
                            case "swf":
                                t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + e + '"><\/param>', o = "", i.each(n.swf, function(n, i) {
                                    t += '<param name="' + n + '" value="' + i + '"><\/param>', o += " " + n + '="' + i + '"'
                                }), t += '<embed src="' + e + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "><\/embed><\/object>"
                        }
                        a(t) && t.parent().is(n.inner) || n.inner.append(t), u.trigger("beforeShow"), n.inner.css("overflow", "yes" === f ? "scroll" : "no" === f ? "hidden" : f), u._setDimension(), u.reposition(), u.isOpen = !1, u.coming = null, u.bindEvents(), u.isOpened ? r.prevMethod && u.transitions[r.prevMethod]() : i(".fancybox-wrap").not(n.wrap).stop(!0).trigger("onReset").remove(), u.transitions[u.isOpened ? n.nextMethod : n.openMethod](), u._preloadImages()
                    }
            },
            _setDimension: function() {
                var et, w, rt, d, b, tt, ot, g, ut, o = u.getViewport(),
                    st = 0,
                    s = !1,
                    n = !1,
                    s = u.wrap,
                    nt = u.skin,
                    e = u.inner,
                    r = u.current,
                    n = r.width,
                    t = r.height,
                    c = r.minWidth,
                    a = r.minHeight,
                    v = r.maxWidth,
                    y = r.maxHeight,
                    ht = r.scrolling,
                    ft = r.scrollOutside ? r.scrollbarWidth : 0,
                    p = r.margin,
                    k = f(p[1] + p[3]),
                    it = f(p[0] + p[2]);
                if (s.add(nt).add(e).width("auto").height("auto").removeClass("fancybox-tmp"), p = f(nt.outerWidth(!0) - nt.width()), et = f(nt.outerHeight(!0) - nt.height()), w = k + p, rt = it + et, d = l(n) ? (o.w - w) * f(n) / 100 : n, b = l(t) ? (o.h - rt) * f(t) / 100 : t, "iframe" === r.type) {
                    if (ut = r.content, r.autoHeight && 1 === ut.data("ready")) try {
                        ut[0].contentWindow.document.location && (e.width(d).height(9999), tt = ut.contents().find("body"), ft && tt.css("overflow-x", "hidden"), b = tt.outerHeight(!0))
                    } catch (ct) {}
                } else(r.autoWidth || r.autoHeight) && (e.addClass("fancybox-tmp"), r.autoWidth || e.width(d), r.autoHeight || e.height(b), r.autoWidth && (d = e.width()), r.autoHeight && (b = e.height()), e.removeClass("fancybox-tmp"));
                if (n = f(d), t = f(b), g = d / b, c = f(l(c) ? f(c, "w") - w : c), v = f(l(v) ? f(v, "w") - w : v), a = f(l(a) ? f(a, "h") - rt : a), y = f(l(y) ? f(y, "h") - rt : y), tt = v, ot = y, r.fitToView && (v = Math.min(o.w - w, v), y = Math.min(o.h - rt, y)), w = o.w - k, it = o.h - it, r.aspectRatio ? (n > v && (n = v, t = f(n / g)), t > y && (t = y, n = f(t * g)), c > n && (n = c, t = f(n / g)), a > t && (t = a, n = f(t * g))) : (n = Math.max(c, Math.min(n, v)), r.autoHeight && "iframe" !== r.type && (e.width(n), t = e.height()), t = Math.max(a, Math.min(t, y))), r.fitToView)
                    if (e.width(n).height(t), s.width(n + p), o = s.width(), k = s.height(), r.aspectRatio)
                        for (;
                            (o > w || k > it) && n > c && t > a && !(19 < st++);) t = Math.max(a, Math.min(y, t - 10)), n = f(t * g), c > n && (n = c, t = f(n / g)), n > v && (n = v, t = f(n / g)), e.width(n).height(t), s.width(n + p), o = s.width(), k = s.height();
                    else n = Math.max(c, Math.min(n, n - (o - w))), t = Math.max(a, Math.min(t, t - (k - it)));
                ft && "auto" === ht && b > t && w > n + p + ft && (n += ft), e.width(n).height(t), s.width(n + p), o = s.width(), k = s.height(), s = (o > w || k > it) && n > c && t > a, n = r.aspectRatio ? tt > n && ot > t && d > n && b > t : (tt > n || ot > t) && (d > n || b > t), i.extend(r, {
                    dim: {
                        width: h(o),
                        height: h(k)
                    },
                    origWidth: d,
                    origHeight: b,
                    canShrink: s,
                    canExpand: n,
                    wPadding: p,
                    hPadding: et,
                    wrapSpace: k - nt.outerHeight(!0),
                    skinSpace: nt.height() - t
                }), !ut && r.autoHeight && t > a && y > t && !n && e.height("auto")
            },
            _getPosition: function(n) {
                var i = u.current,
                    r = u.getViewport(),
                    t = i.margin,
                    f = u.wrap.width() + t[1] + t[3],
                    e = u.wrap.height() + t[0] + t[2],
                    t = {
                        position: "absolute",
                        top: t[0],
                        left: t[3]
                    };
                return i.autoCenter && i.fixed && !n && e <= r.h && f <= r.w ? t.position = "fixed" : i.locked || (t.top += r.y, t.left += r.x), t.top = h(Math.max(t.top, t.top + (r.h - e) * i.topRatio)), t.left = h(Math.max(t.left, t.left + (r.w - f) * i.leftRatio)), t
            },
            _afterZoomIn: function() {
                var n = u.current;
                n && (u.isOpen = u.isOpened = !0, u.wrap.css("overflow", "visible").addClass("fancybox-opened"), u.update(), (n.closeClick || n.nextClick && 1 < u.group.length) && u.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(), u[n.closeClick ? "close" : "next"]())
                }), n.closeBtn && i(n.tpl.closeBtn).appendTo(u.skin).bind("click.fb", function(n) {
                    n.preventDefault(), u.close()
                }), n.arrows && 1 < u.group.length && ((n.loop || 0 < n.index) && i(n.tpl.prev).appendTo(u.outer).bind("click.fb", u.prev), (n.loop || n.index < u.group.length - 1) && i(n.tpl.next).appendTo(u.outer).bind("click.fb", u.next)), u.trigger("afterShow"), n.loop || n.index !== n.group.length - 1 ? u.opts.autoPlay && !u.player.isActive && (u.opts.autoPlay = !1, u.play()) : u.play(!1))
            },
            _afterZoomOut: function(n) {
                n = n || u.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(u, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), u.trigger("afterClose", n)
            }
        }), u.transitions = {
            getOrigPosition: function() {
                var n = u.current,
                    f = n.element,
                    t = n.orig,
                    i = {},
                    e = 50,
                    o = 50,
                    s = n.hPadding,
                    c = n.wPadding,
                    r = u.getViewport();
                return !t && n.isDom && f.is(":visible") && (t = f.find("img:first"), t.length || (t = f)), a(t) ? (i = t.offset(), t.is("img") && (e = t.outerWidth(), o = t.outerHeight())) : (i.top = r.y + (r.h - o) * n.topRatio, i.left = r.x + (r.w - e) * n.leftRatio), ("fixed" === u.wrap.css("position") || n.locked) && (i.top -= r.y, i.left -= r.x), i = {
                    top: h(i.top - s * n.topRatio),
                    left: h(i.left - c * n.leftRatio),
                    width: h(e + c),
                    height: h(o + s)
                }
            },
            step: function(n, t) {
                var e, i, r = t.prop,
                    o, s;
                i = u.current, o = i.wrapSpace, s = i.skinSpace, ("width" === r || "height" === r) && (e = t.end === t.start ? 1 : (n - t.start) / (t.end - t.start), u.isClosing && (e = 1 - e), i = "width" === r ? i.wPadding : i.hPadding, i = n - i, u.skin[r](f("width" === r ? i : i - o * e)), u.inner[r](f("width" === r ? i : i - o * e - s * e)))
            },
            zoomIn: function() {
                var n = u.current,
                    t = n.pos,
                    r = n.openEffect,
                    f = "elastic" === r,
                    e = i.extend({
                        opacity: 1
                    }, t);
                delete e.position, f ? (t = this.getOrigPosition(), n.openOpacity && (t.opacity = .1)) : "fade" === r && (t.opacity = .1), u.wrap.css(t).animate(e, {
                    duration: "none" === r ? 0 : n.openSpeed,
                    easing: n.openEasing,
                    step: f ? this.step : null,
                    complete: u._afterZoomIn
                })
            },
            zoomOut: function() {
                var n = u.current,
                    i = n.closeEffect,
                    r = "elastic" === i,
                    t = {
                        opacity: .1
                    };
                r && (t = this.getOrigPosition(), n.closeOpacity && (t.opacity = .1)), u.wrap.animate(t, {
                    duration: "none" === i ? 0 : n.closeSpeed,
                    easing: n.closeEasing,
                    step: r ? this.step : null,
                    complete: u._afterZoomOut
                })
            },
            changeIn: function() {
                var n, i = u.current,
                    o = i.nextEffect,
                    t = i.pos,
                    e = {
                        opacity: 1
                    },
                    r = u.direction;
                t.opacity = .1, "elastic" === o && (n = "down" === r || "up" === r ? "top" : "left", "down" === r || "right" === r ? (t[n] = h(f(t[n]) - 200), e[n] = "+=200px") : (t[n] = h(f(t[n]) + 200), e[n] = "-=200px")), "none" === o ? u._afterZoomIn() : u.wrap.css(t).animate(e, {
                    duration: i.nextSpeed,
                    easing: i.nextEasing,
                    complete: u._afterZoomIn
                })
            },
            changeOut: function() {
                var n = u.previous,
                    r = n.prevEffect,
                    f = {
                        opacity: .1
                    },
                    t = u.direction;
                "elastic" === r && (f["down" === t || "up" === t ? "top" : "left"] = ("up" === t || "left" === t ? "-" : "+") + "=200px"), n.wrap.animate(f, {
                    duration: "none" === r ? 0 : n.prevSpeed,
                    easing: n.prevEasing,
                    complete: function() {
                        i(this).trigger("onReset").remove()
                    }
                })
            }
        }, u.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !s,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: i("html"),
            create: function(n) {
                n = i.extend({}, this.defaults, n), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"><\/div>').appendTo(u.coming ? u.coming.parent : n.parent), this.fixed = !1, n.fixed && u.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(n) {
                var t = this;
                n = i.extend({}, this.defaults, n), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(n), this.fixed || (e.bind("resize.overlay", i.proxy(this.update, this)), this.update()), n.closeClick && this.overlay.bind("click.overlay", function(n) {
                    if (i(n.target).hasClass("fancybox-overlay")) return u.isActive ? u.close() : t.close(), !1
                }), this.overlay.css(n.css).show()
            },
            close: function() {
                var n, t;
                e.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), n = e.scrollTop(), t = e.scrollLeft(), this.el.removeClass("fancybox-lock"), e.scrollTop(n).scrollLeft(t)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var i, n = "100%";
                this.overlay.width(n).height("100%"), y ? (i = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > i && (n = o.width())) : o.width() > e.width() && (n = o.width()), this.overlay.width(n).height(o.height())
            },
            onReady: function(n, t) {
                var r = this.overlay;
                i(".fancybox-overlay").stop(!0, !0), r || this.create(n), n.locked && this.fixed && t.fixed && (r || (this.margin = o.height() > e.height() ? i("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === n.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(n, t) {
                var r, u;
                t.locked && (!1 !== this.margin && (i("*").filter(function() {
                    return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), r = e.scrollTop(), u = e.scrollLeft(), this.el.addClass("fancybox-lock"), e.scrollTop(r).scrollLeft(u)), this.open(n)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(n) {
                this.overlay && !u.coming && this.overlay.fadeOut(n.speedOut, i.proxy(this.close, this))
            }
        }, u.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(n) {
                var t = u.current,
                    e = t.title,
                    r = n.type;
                if (i.isFunction(e) && (e = e.call(t.element, t)), c(e) && "" !== i.trim(e)) {
                    switch (t = i('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + e + "<\/div>"), r) {
                        case "inside":
                            r = u.skin;
                            break;
                        case "outside":
                            r = u.wrap;
                            break;
                        case "over":
                            r = u.inner;
                            break;
                        default:
                            r = u.skin, t.appendTo("body"), y && t.width(t.width()), t.wrapInner('<span class="child"><\/span>'), u.current.margin[2] += Math.abs(f(t.css("margin-bottom")))
                    }
                    t["top" === n.position ? "prependTo" : "appendTo"](r)
                }
            }
        }, i.fn.fancybox = function(n) {
            var r, f = i(this),
                t = this.selector || "",
                e = function(e) {
                    var h, s, o = i(this).blur(),
                        c = r;
                    e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || o.is(".fancybox-wrap") || (h = n.groupAttr || "data-fancybox-group", s = o.attr(h), s || (h = "rel", s = o.get(0)[h]), s && "" !== s && "nofollow" !== s && (o = t.length ? i(t) : f, o = o.filter("[" + h + '="' + s + '"]'), c = o.index(this)), n.index = c, !1 !== u.open(o, n) && e.preventDefault())
                };
            return n = n || {}, r = n.index || 0, t && !1 !== n.live ? o.undelegate(t, "click.fb-start").delegate(t + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", e) : f.unbind("click.fb-start").bind("click.fb-start", e), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, o.ready(function() {
            var f, t, e;
            (i.scrollbarWidth === r && (i.scrollbarWidth = function() {
                var t = i('<div style="width:50px;height:50px;overflow:auto"><div/><\/div>').appendTo("body"),
                    n = t.children(),
                    n = n.innerWidth() - n.height(99).innerWidth();
                return t.remove(), n
            }), i.support.fixedPosition === r) && (f = i.support, t = i('<div style="position:fixed;top:20px;"><\/div>').appendTo("body"), e = 20 === t[0].offsetTop || 15 === t[0].offsetTop, t.remove(), f.fixedPosition = e), i.extend(u.defaults, {
                scrollbarWidth: i.scrollbarWidth(),
                fixed: i.support.fixedPosition,
                parent: i("body")
            }), f = i(n).width(), p.addClass("fancybox-lock-test"), t = i(n).width(), p.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (t - f) + "px;}<\/style>").appendTo("head")
        })
    }(window, document, jQuery),
    function(n) {
        "use strict";
        var t = n.fancybox,
            i = function(t, i, r) {
                return r = r || "", n.type(r) === "object" && (r = n.param(r, !0)), n.each(i, function(n, i) {
                    t = t.replace("$" + n, i || "")
                }), r.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + r), t
            };
        t.helpers.media = {
            defaults: {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "opaque",
                        enablejsapi: 1
                    },
                    type: "iframe",
                    url: "//www.youtube.com/embed/$3"
                },
                vimeo: {
                    matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1
                    },
                    type: "iframe",
                    url: "//player.vimeo.com/video/$1"
                },
                metacafe: {
                    matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                    params: {
                        autoPlay: "yes"
                    },
                    type: "swf",
                    url: function(t, i, r) {
                        return r.swf.flashVars = "playerVars=" + n.param(i, !0), "//www.metacafe.com/fplayer/" + t[1] + "/.swf"
                    }
                },
                dailymotion: {
                    matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                    params: {
                        additionalInfos: 0,
                        autoStart: 1
                    },
                    type: "swf",
                    url: "//www.dailymotion.com/swf/video/$1"
                },
                twitvid: {
                    matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                    params: {
                        autoplay: 0
                    },
                    type: "iframe",
                    url: "//www.twitvid.com/embed.php?guid=$1"
                },
                twitpic: {
                    matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                    type: "image",
                    url: "//twitpic.com/show/full/$1/"
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l"
                },
                google_maps: {
                    matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                    type: "iframe",
                    url: function(n) {
                        return "//maps.google." + n[1] + "/" + n[3] + "" + n[4] + "&output=" + (n[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
                    }
                }
            },
            beforeLoad: function(t, r) {
                var o = r.href || "",
                    s = !1,
                    f, u, e, h;
                for (f in t)
                    if (t.hasOwnProperty(f) && (u = t[f], e = o.match(u.matcher), e)) {
                        s = u.type, h = n.extend(!0, {}, u.params, r[f] || (n.isPlainObject(t[f]) ? t[f].params : null)), o = n.type(u.url) === "function" ? u.url.call(this, e, h, r) : i(u.url, e, h);
                        break
                    }
                s && (r.href = o, r.type = s, r.autoHeight = !1)
            }
        }
    }(jQuery), ! function(n) {
        function i() {}

        function t(n) {
            function u(t) {
                t.prototype.option || (t.prototype.option = function(t) {
                    n.isPlainObject(t) && (this.options = n.extend(!0, this.options, t))
                })
            }

            function f(i, u) {
                n.fn[i] = function(f) {
                    var h, e, s;
                    if ("string" == typeof f) {
                        for (var c = r.call(arguments, 1), o = 0, l = this.length; l > o; o++)
                            if (h = this[o], e = n.data(h, i), e)
                                if (n.isFunction(e[f]) && "_" !== f.charAt(0)) {
                                    if (s = e[f].apply(e, c), void 0 !== s) return s
                                } else t("no such method '" + f + "' for " + i + " instance");
                        else t("cannot call methods on " + i + " prior to initialization; attempted to call '" + f + "'");
                        return this
                    }
                    return this.each(function() {
                        var t = n.data(this, i);
                        t ? (t.option(f), t._init()) : (t = new u(this, f), n.data(this, i, t))
                    })
                }
            }
            if (n) {
                var t = "undefined" == typeof console ? i : function(n) {
                    console.error(n)
                };
                return n.bridget = function(n, t) {
                    u(t), f(n, t)
                }, n.bridget
            }
        }
        var r = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], t) : t("object" == typeof exports ? require("jquery") : n.jQuery)
    }(window),
    function(n) {
        function f(t) {
            var i = n.event;
            return i.target = i.target || i.srcElement || t, i
        }
        var t = document.documentElement,
            u = function() {},
            i, r;
        t.addEventListener ? u = function(n, t, i) {
            n.addEventListener(t, i, !1)
        } : t.attachEvent && (u = function(n, t, i) {
            n[t + i] = i.handleEvent ? function() {
                var t = f(n);
                i.handleEvent.call(i, t)
            } : function() {
                var t = f(n);
                i.call(n, t)
            }, n.attachEvent("on" + t, n[t + i])
        }), i = function() {}, t.removeEventListener ? i = function(n, t, i) {
            n.removeEventListener(t, i, !1)
        } : t.detachEvent && (i = function(n, t, i) {
            n.detachEvent("on" + t, n[t + i]);
            try {
                delete n[t + i]
            } catch (r) {
                n[t + i] = void 0
            }
        }), r = {
            bind: u,
            unbind: i
        }, "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : n.eventie = r
    }(window),
    function() {
        "use strict";

        function t() {}

        function u(n, t) {
            for (var i = n.length; i--;)
                if (n[i].listener === t) return i;
            return -1
        }

        function i(n) {
            return function() {
                return this[n].apply(this, arguments)
            }
        }
        var n = t.prototype,
            r = this,
            f = r.EventEmitter;
        n.getListeners = function(n) {
            var r, t, i = this._getEvents();
            if (n instanceof RegExp) {
                r = {};
                for (t in i) i.hasOwnProperty(t) && n.test(t) && (r[t] = i[t])
            } else r = i[n] || (i[n] = []);
            return r
        }, n.flattenListeners = function(n) {
            for (var i = [], t = 0; t < n.length; t += 1) i.push(n[t].listener);
            return i
        }, n.getListenersAsObject = function(n) {
            var t, i = this.getListeners(n);
            return i instanceof Array && (t = {}, t[n] = i), t || i
        }, n.addListener = function(n, t) {
            var i, r = this.getListenersAsObject(n),
                f = "object" == typeof t;
            for (i in r) r.hasOwnProperty(i) && -1 === u(r[i], t) && r[i].push(f ? t : {
                listener: t,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(n, t) {
            return this.addListener(n, {
                listener: t,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(n) {
            return this.getListeners(n), this
        }, n.defineEvents = function(n) {
            for (var t = 0; t < n.length; t += 1) this.defineEvent(n[t]);
            return this
        }, n.removeListener = function(n, t) {
            var f, i, r = this.getListenersAsObject(n);
            for (i in r) r.hasOwnProperty(i) && (f = u(r[i], t), -1 !== f && r[i].splice(f, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(n, t) {
            return this.manipulateListeners(!1, n, t)
        }, n.removeListeners = function(n, t) {
            return this.manipulateListeners(!0, n, t)
        }, n.manipulateListeners = function(n, t, i) {
            var r, u, f = n ? this.removeListener : this.addListener,
                e = n ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (r = i.length; r--;) f.call(this, t, i[r]);
            else
                for (r in t) t.hasOwnProperty(r) && (u = t[r]) && ("function" == typeof u ? f.call(this, r, u) : e.call(this, r, u));
            return this
        }, n.removeEvent = function(n) {
            var t, r = typeof n,
                i = this._getEvents();
            if ("string" === r) delete i[n];
            else if (n instanceof RegExp)
                for (t in i) i.hasOwnProperty(t) && n.test(t) && delete i[t];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(n, t) {
            var i, f, r, e, u = this.getListenersAsObject(n);
            for (r in u)
                if (u.hasOwnProperty(r))
                    for (f = u[r].length; f--;) i = u[r][f], i.once === !0 && this.removeListener(n, i.listener), e = i.listener.apply(this, t || []), e === this._getOnceReturnValue() && this.removeListener(n, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(n) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(n, t)
        }, n.setOnceReturnValue = function(n) {
            return this._onceReturnValue = n, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return r.EventEmitter = f, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : r.EventEmitter = t
    }.call(this),
    function(n) {
        function t(n) {
            if (n) {
                if ("string" == typeof r[n]) return n;
                n = n.charAt(0).toUpperCase() + n.slice(1);
                for (var t, u = 0, f = i.length; f > u; u++)
                    if (t = i[u] + n, "string" == typeof r[t]) return t
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            r = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return t
        }) : "object" == typeof exports ? module.exports = t : n.getStyleProperty = t
    }(window),
    function(n) {
        function r(n) {
            var t = parseFloat(n),
                i = -1 === n.indexOf("%") && !isNaN(t);
            return i && t
        }

        function f() {}

        function e() {
            for (var r, t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, n = 0, u = i.length; u > n; n++) r = i[n], t[r] = 0;
            return t
        }

        function u(t) {
            function c() {
                var e, i, c, l;
                h || (h = !0, e = n.getComputedStyle, (f = function() {
                    var n = e ? function(n) {
                        return e(n, null)
                    } : function(n) {
                        return n.currentStyle
                    };
                    return function(t) {
                        var i = n(t);
                        return i || o("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                    }
                }(), u = t("boxSizing")) && (i = document.createElement("div"), i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style[u] = "border-box", c = document.body || document.documentElement, c.appendChild(i), l = f(i), s = 200 === r(l.width), c.removeChild(i)))
            }

            function l(n) {
                var o, t, v, h, y, p;
                if (c(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType) {
                    if (o = f(n), "none" === o.display) return e();
                    t = {}, t.width = n.offsetWidth, t.height = n.offsetHeight;
                    for (var tt = t.isBorderBox = !(!u || !o[u] || "border-box" !== o[u]), l = 0, it = i.length; it > l; l++) v = i[l], h = o[v], h = a(n, h), y = parseFloat(h), t[v] = isNaN(y) ? 0 : y;
                    var w = t.paddingLeft + t.paddingRight,
                        b = t.paddingTop + t.paddingBottom,
                        rt = t.marginLeft + t.marginRight,
                        ut = t.marginTop + t.marginBottom,
                        k = t.borderLeftWidth + t.borderRightWidth,
                        d = t.borderTopWidth + t.borderBottomWidth,
                        g = tt && s,
                        nt = r(o.width);
                    return nt !== !1 && (t.width = nt + (g ? 0 : w + k)), p = r(o.height), p !== !1 && (t.height = p + (g ? 0 : b + d)), t.innerWidth = t.width - (w + k), t.innerHeight = t.height - (b + d), t.outerWidth = t.width + rt, t.outerHeight = t.height + ut, t
                }
            }

            function a(t, i) {
                if (n.getComputedStyle || -1 === i.indexOf("%")) return i;
                var r = t.style,
                    e = r.left,
                    u = t.runtimeStyle,
                    f = u && u.left;
                return f && (u.left = t.currentStyle.left), r.left = i, i = r.pixelLeft, r.left = e, f && (u.left = f), i
            }
            var f, u, s, h = !1;
            return l
        }
        var o = "undefined" == typeof console ? f : function(n) {
                console.error(n)
            },
            i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], u) : "object" == typeof exports ? module.exports = u(require("desandro-get-style-property")) : n.getSize = u(n.getStyleProperty)
    }(window),
    function(n) {
        function t(n) {
            "function" == typeof n && (t.isReady ? n() : f.push(n))
        }

        function r(n) {
            var r = "readystatechange" === n.type && "complete" !== i.readyState;
            t.isReady || r || e()
        }

        function e() {
            var n, i, r;
            for (t.isReady = !0, n = 0, i = f.length; i > n; n++) r = f[n], r()
        }

        function u(u) {
            return "complete" === i.readyState ? e() : (u.bind(i, "DOMContentLoaded", r), u.bind(i, "readystatechange", r), u.bind(n, "load", r)), t
        }
        var i = n.document,
            f = [];
        t.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], u) : "object" == typeof exports ? module.exports = u(require("eventie")) : n.docReady = u(n.eventie)
    }(window),
    function(n) {
        "use strict";

        function i(n, t) {
            return n[u](t)
        }

        function r(n) {
            if (!n.parentNode) {
                var t = document.createDocumentFragment();
                t.appendChild(n)
            }
        }

        function o(n, t) {
            r(n);
            for (var u = n.parentNode.querySelectorAll(t), i = 0, f = u.length; f > i; i++)
                if (u[i] === n) return !0;
            return !1
        }

        function s(n, t) {
            return r(n), i(n, t)
        }
        var t, u = function() {
                var u, i;
                if (n.matches) return "matches";
                if (n.matchesSelector) return "matchesSelector";
                for (var r = ["webkit", "moz", "ms", "o"], t = 0, f = r.length; f > t; t++)
                    if (u = r[t], i = u + "MatchesSelector", n[i]) return i
            }(),
            f, e;
        u ? (f = document.createElement("div"), e = i(f, "div"), t = e ? i : s) : t = o, "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return t
        }) : "object" == typeof exports ? module.exports = t : window.matchesSelector = t
    }(Element.prototype),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, r) {
            return t(n, i, r)
        }) : "object" == typeof exports ? module.exports = t(n, require("doc-ready"), require("desandro-matches-selector")) : n.fizzyUIUtils = t(n, n.docReady, n.matchesSelector)
    }(window, function(n, t, i) {
        var r = {},
            f, u;
        return r.extend = function(n, t) {
            for (var i in t) n[i] = t[i];
            return n
        }, r.modulo = function(n, t) {
            return (n % t + t) % t
        }, f = Object.prototype.toString, r.isArray = function(n) {
            return "[object Array]" == f.call(n)
        }, r.makeArray = function(n) {
            var t = [],
                i, u;
            if (r.isArray(n)) t = n;
            else if (n && "number" == typeof n.length)
                for (i = 0, u = n.length; u > i; i++) t.push(n[i]);
            else t.push(n);
            return t
        }, r.indexOf = Array.prototype.indexOf ? function(n, t) {
            return n.indexOf(t)
        } : function(n, t) {
            for (var i = 0, r = n.length; r > i; i++)
                if (n[i] === t) return i;
            return -1
        }, r.removeFrom = function(n, t) {
            var i = r.indexOf(n, t); - 1 != i && n.splice(i, 1)
        }, r.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(n) {
            return n instanceof HTMLElement
        } : function(n) {
            return n && "object" == typeof n && 1 == n.nodeType && "string" == typeof n.nodeName
        }, r.setText = function() {
            function t(t, i) {
                n = n || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[n] = i
            }
            var n;
            return t
        }(), r.getParent = function(n, t) {
            for (; n != document.body;)
                if (n = n.parentNode, i(n, t)) return n
        }, r.getQueryElement = function(n) {
            return "string" == typeof n ? document.querySelector(n) : n
        }, r.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }, r.filterFindElements = function(n, t) {
            var u;
            n = r.makeArray(n);
            for (var f = [], e = 0, h = n.length; h > e; e++)
                if (u = n[e], r.isElement(u))
                    if (t) {
                        i(u, t) && f.push(u);
                        for (var s = u.querySelectorAll(t), o = 0, c = s.length; c > o; o++) f.push(s[o])
                    } else f.push(u);
            return f
        }, r.debounceMethod = function(n, t, i) {
            var u = n.prototype[t],
                r = t + "Timeout";
            n.prototype[t] = function() {
                var t = this[r],
                    f, n;
                t && clearTimeout(t), f = arguments, n = this, this[r] = setTimeout(function() {
                    u.apply(n, f), delete n[r]
                }, i || 100)
            }
        }, r.toDashed = function(n) {
            return n.replace(/(.)([A-Z])/g, function(n, t, i) {
                return t + "-" + i
            }).toLowerCase()
        }, u = n.console, r.htmlInit = function(i, f) {
            t(function() {
                for (var a, t, o, v, s, h = r.toDashed(f), c = document.querySelectorAll(".js-" + h), l = "data-" + h + "-options", e = 0, y = c.length; y > e; e++) {
                    t = c[e], o = t.getAttribute(l);
                    try {
                        a = o && JSON.parse(o)
                    } catch (p) {
                        u && u.error("Error parsing " + l + " on " + t.nodeName.toLowerCase() + (t.id ? "#" + t.id : "") + ": " + p);
                        continue
                    }
                    v = new i(t, a), s = n.jQuery, s && s.data(t, f, v)
                }
            })
        }, r
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, r, u, f) {
            return t(n, i, r, u, f)
        }) : "object" == typeof exports ? module.exports = t(n, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (n.Outlayer = {}, n.Outlayer.Item = t(n, n.EventEmitter, n.getSize, n.getStyleProperty, n.fizzyUIUtils))
    }(window, function(n, t, i, r, u) {
        "use strict";

        function y(n) {
            for (var t in n) return !1;
            return t = null, !0
        }

        function f(n, t) {
            n && (this.element = n, this.layout = t, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function p(n) {
            return n.replace(/([A-Z])/g, function(n) {
                return "-" + n.toLowerCase()
            })
        }
        var o = n.getComputedStyle,
            w = o ? function(n) {
                return o(n, null)
            } : function(n) {
                return n.currentStyle
            },
            e = r("transition"),
            b = r("transform"),
            k = e && b,
            d = !!r("perspective"),
            s = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[e],
            h = ["transform", "transition", "transitionDuration", "transitionProperty"],
            c = function() {
                for (var n, t, u = {}, i = 0, f = h.length; f > i; i++) n = h[i], t = r(n), t && t !== n && (u[n] = t);
                return u
            }(),
            l, a, v;
        return u.extend(f.prototype, t.prototype), f.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, f.prototype.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }, f.prototype.getSize = function() {
            this.size = i(this.element)
        }, f.prototype.css = function(n) {
            var r = this.element.style,
                t, i;
            for (t in n) i = c[t] || t, r[i] = n[t]
        }, f.prototype.getPosition = function() {
            var f = w(this.element),
                e = this.layout.options,
                o = e.isOriginLeft,
                s = e.isOriginTop,
                r = f[o ? "left" : "right"],
                u = f[s ? "top" : "bottom"],
                n = this.layout.size,
                t = -1 != r.indexOf("%") ? parseFloat(r) / 100 * n.width : parseInt(r, 10),
                i = -1 != u.indexOf("%") ? parseFloat(u) / 100 * n.height : parseInt(u, 10);
            t = isNaN(t) ? 0 : t, i = isNaN(i) ? 0 : i, t -= o ? n.paddingLeft : n.paddingRight, i -= s ? n.paddingTop : n.paddingBottom, this.position.x = t, this.position.y = i
        }, f.prototype.layoutPosition = function() {
            var i = this.layout.size,
                n = this.layout.options,
                t = {},
                r = n.isOriginLeft ? "paddingLeft" : "paddingRight",
                u = n.isOriginLeft ? "left" : "right",
                f = n.isOriginLeft ? "right" : "left",
                e = this.position.x + i[r];
            t[u] = this.getXValue(e), t[f] = "";
            var o = n.isOriginTop ? "paddingTop" : "paddingBottom",
                s = n.isOriginTop ? "top" : "bottom",
                h = n.isOriginTop ? "bottom" : "top",
                c = this.position.y + i[o];
            t[s] = this.getYValue(c), t[h] = "", this.css(t), this.emitEvent("layout", [this])
        }, f.prototype.getXValue = function(n) {
            var t = this.layout.options;
            return t.percentPosition && !t.isHorizontal ? n / this.layout.size.width * 100 + "%" : n + "px"
        }, f.prototype.getYValue = function(n) {
            var t = this.layout.options;
            return t.percentPosition && t.isHorizontal ? n / this.layout.size.height * 100 + "%" : n + "px"
        }, f.prototype._transitionTo = function(n, t) {
            this.getPosition();
            var r = this.position.x,
                u = this.position.y,
                f = parseInt(n, 10),
                e = parseInt(t, 10),
                o = f === this.position.x && e === this.position.y;
            if (this.setPosition(n, t), o && !this.isTransitioning) return void this.layoutPosition();
            var s = n - r,
                h = t - u,
                i = {};
            i.transform = this.getTranslate(s, h), this.transition({
                to: i,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, f.prototype.getTranslate = function(n, t) {
            var i = this.layout.options;
            return n = i.isOriginLeft ? n : -n, t = i.isOriginTop ? t : -t, d ? "translate3d(" + n + "px, " + t + "px, 0)" : "translate(" + n + "px, " + t + "px)"
        }, f.prototype.goTo = function(n, t) {
            this.setPosition(n, t), this.layoutPosition()
        }, f.prototype.moveTo = k ? f.prototype._transitionTo : f.prototype.goTo, f.prototype.setPosition = function(n, t) {
            this.position.x = parseInt(n, 10), this.position.y = parseInt(t, 10)
        }, f.prototype._nonTransition = function(n) {
            this.css(n.to), n.isCleaning && this._removeStyles(n.to);
            for (var t in n.onTransitionEnd) n.onTransitionEnd[t].call(this)
        }, f.prototype._transition = function(n) {
            var i, t, r;
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(n);
            i = this._transn;
            for (t in n.onTransitionEnd) i.onEnd[t] = n.onTransitionEnd[t];
            for (t in n.to) i.ingProperties[t] = !0, n.isCleaning && (i.clean[t] = !0);
            n.from && (this.css(n.from), r = this.element.offsetHeight, r = null), this.enableTransition(n.to), this.css(n.to), this.isTransitioning = !0
        }, l = "opacity," + p(c.transform || "transform"), f.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: l,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(s, this, !1))
        }, f.prototype.transition = f.prototype[e ? "_transition" : "_nonTransition"], f.prototype.onwebkitTransitionEnd = function(n) {
            this.ontransitionend(n)
        }, f.prototype.onotransitionend = function(n) {
            this.ontransitionend(n)
        }, a = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        }, f.prototype.ontransitionend = function(n) {
            var t, i, r;
            n.target === this.element && (t = this._transn, i = a[n.propertyName] || n.propertyName, (delete t.ingProperties[i], y(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[n.propertyName] = "", delete t.clean[i]), i in t.onEnd) && (r = t.onEnd[i], r.call(this), delete t.onEnd[i]), this.emitEvent("transitionEnd", [this]))
        }, f.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
        }, f.prototype._removeStyles = function(n) {
            var t = {},
                i;
            for (i in n) t[i] = "";
            this.css(t)
        }, v = {
            transitionProperty: "",
            transitionDuration: ""
        }, f.prototype.removeTransitionStyles = function() {
            this.css(v)
        }, f.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, f.prototype.remove = function() {
            if (!e || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var n = this;
            this.once("transitionEnd", function() {
                n.removeElem()
            }), this.hide()
        }, f.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var n = this.layout.options,
                t = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            t[i] = this.onRevealTransitionEnd, this.transition({
                from: n.hiddenStyle,
                to: n.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, f.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, f.prototype.getHideRevealTransitionEndProperty = function(n) {
            var t = this.layout.options[n],
                i;
            if (t.opacity) return "opacity";
            for (i in t) return i
        }, f.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var n = this.layout.options,
                t = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            t[i] = this.onHideTransitionEnd, this.transition({
                from: n.visibleStyle,
                to: n.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, f.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, f.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, f
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, r, u, f, e) {
            return t(n, i, r, u, f, e)
        }) : "object" == typeof exports ? module.exports = t(n, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = t(n, n.eventie, n.EventEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
    }(window, function(n, t, i, r, u, f) {
        "use strict";

        function e(n, t) {
            var i = u.getQueryElement(n),
                r;
            if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || n)));
            this.element = i, o && (this.$element = o(this.element)), this.options = u.extend({}, this.constructor.defaults), this.option(t), r = ++l, this.element.outlayerGUID = r, s[r] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = n.console,
            o = n.jQuery,
            c = function() {},
            l = 0,
            s = {};
        return e.namespace = "outlayer", e.Item = f, e.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, u.extend(e.prototype, i.prototype), e.prototype.option = function(n) {
            u.extend(this.options, n)
        }, e.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), u.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, e.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, e.prototype._itemize = function(n) {
            for (var u, f, i = this._filterFindItemElements(n), e = this.constructor.Item, r = [], t = 0, o = i.length; o > t; t++) u = i[t], f = new e(u, this), r.push(f);
            return r
        }, e.prototype._filterFindItemElements = function(n) {
            return u.filterFindElements(n, this.options.itemSelector)
        }, e.prototype.getItemElements = function() {
            for (var t = [], n = 0, i = this.items.length; i > n; n++) t.push(this.items[n].element);
            return t
        }, e.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var n = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, n), this._isLayoutInited = !0
        }, e.prototype._init = e.prototype.layout, e.prototype._resetLayout = function() {
            this.getSize()
        }, e.prototype.getSize = function() {
            this.size = r(this.element)
        }, e.prototype._getMeasurement = function(n, t) {
            var f, i = this.options[n];
            i ? ("string" == typeof i ? f = this.element.querySelector(i) : u.isElement(i) && (f = i), this[n] = f ? r(f)[t] : i) : this[n] = 0
        }, e.prototype.layoutItems = function(n, t) {
            n = this._getItemsForLayout(n), this._layoutItems(n, t), this._postLayout()
        }, e.prototype._getItemsForLayout = function(n) {
            for (var i, r = [], t = 0, u = n.length; u > t; t++) i = n[t], i.isIgnored || r.push(i);
            return r
        }, e.prototype._layoutItems = function(n, t) {
            var i, r;
            if (this._emitCompleteOnItems("layout", n), n && n.length) {
                for (var f = [], u = 0, e = n.length; e > u; u++) i = n[u], r = this._getItemLayoutPosition(i), r.item = i, r.isInstant = t || i.isLayoutInstant, f.push(r);
                this._processLayoutQueue(f)
            }
        }, e.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, e.prototype._processLayoutQueue = function(n) {
            for (var t, i = 0, r = n.length; r > i; i++) t = n[i], this._positionItem(t.item, t.x, t.y, t.isInstant)
        }, e.prototype._positionItem = function(n, t, i, r) {
            r ? n.goTo(t, i) : n.moveTo(t, i)
        }, e.prototype._postLayout = function() {
            this.resizeContainer()
        }, e.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var n = this._getContainerSize();
                n && (this._setContainerMeasure(n.width, !0), this._setContainerMeasure(n.height, !1))
            }
        }, e.prototype._getContainerSize = c, e.prototype._setContainerMeasure = function(n, t) {
            if (void 0 !== n) {
                var i = this.size;
                i.isBorderBox && (n += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), n = Math.max(n, 0), this.element.style[t ? "width" : "height"] = n + "px"
            }
        }, e.prototype._emitCompleteOnItems = function(n, t) {
            function r() {
                s.dispatchEvent(n + "Complete", null, [t])
            }

            function o() {
                f++, f === u && r()
            }
            var s = this,
                u = t.length,
                e;
            if (!t || !u) return void r();
            for (var f = 0, i = 0, h = t.length; h > i; i++) {
                e = t[i];
                e.once(n, o)
            }
        }, e.prototype.dispatchEvent = function(n, t, i) {
            var u = t ? [t].concat(i) : i,
                r;
            (this.emitEvent(n, u), o) && ((this.$element = this.$element || o(this.element), t) ? (r = o.Event(t), r.type = n, this.$element.trigger(r, i)) : this.$element.trigger(n, i))
        }, e.prototype.ignore = function(n) {
            var t = this.getItem(n);
            t && (t.isIgnored = !0)
        }, e.prototype.unignore = function(n) {
            var t = this.getItem(n);
            t && delete t.isIgnored
        }, e.prototype.stamp = function(n) {
            var t, i, r;
            if (n = this._find(n))
                for (this.stamps = this.stamps.concat(n), t = 0, i = n.length; i > t; t++) r = n[t], this.ignore(r)
        }, e.prototype.unstamp = function(n) {
            var t, r, i;
            if (n = this._find(n))
                for (t = 0, r = n.length; r > t; t++) i = n[t], u.removeFrom(this.stamps, i), this.unignore(i)
        }, e.prototype._find = function(n) {
            if (n) return "string" == typeof n && (n = this.element.querySelectorAll(n)), n = u.makeArray(n)
        }, e.prototype._manageStamps = function() {
            var n, t, i;
            if (this.stamps && this.stamps.length)
                for (this._getBoundingRect(), n = 0, t = this.stamps.length; t > n; n++) i = this.stamps[n], this._manageStamp(i)
        }, e.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                n = this.size;
            this._boundingRect = {
                left: t.left + n.paddingLeft + n.borderLeftWidth,
                top: t.top + n.paddingTop + n.borderTopWidth,
                right: t.right - (n.paddingRight + n.borderRightWidth),
                bottom: t.bottom - (n.paddingBottom + n.borderBottomWidth)
            }
        }, e.prototype._manageStamp = c, e.prototype._getElementOffset = function(n) {
            var t = n.getBoundingClientRect(),
                i = this._boundingRect,
                u = r(n);
            return {
                left: t.left - i.left - u.marginLeft,
                top: t.top - i.top - u.marginTop,
                right: i.right - t.right - u.marginRight,
                bottom: i.bottom - t.bottom - u.marginBottom
            }
        }, e.prototype.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }, e.prototype.bindResize = function() {
            this.isResizeBound || (t.bind(n, "resize", this), this.isResizeBound = !0)
        }, e.prototype.unbindResize = function() {
            this.isResizeBound && t.unbind(n, "resize", this), this.isResizeBound = !1
        }, e.prototype.onresize = function() {
            function t() {
                n.resize(), delete n.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var n = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, e.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, e.prototype.needsResizeLayout = function() {
            var n = r(this.element),
                t = this.size && n;
            return t && n.innerWidth !== this.size.innerWidth
        }, e.prototype.addItems = function(n) {
            var t = this._itemize(n);
            return t.length && (this.items = this.items.concat(t)), t
        }, e.prototype.appended = function(n) {
            var t = this.addItems(n);
            t.length && (this.layoutItems(t, !0), this.reveal(t))
        }, e.prototype.prepended = function(n) {
            var t = this._itemize(n),
                i;
            t.length && (i = this.items.slice(0), this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i))
        }, e.prototype.reveal = function(n) {
            var i, t, r;
            for (this._emitCompleteOnItems("reveal", n), i = n && n.length, t = 0; i && i > t; t++) r = n[t], r.reveal()
        }, e.prototype.hide = function(n) {
            var i, t, r;
            for (this._emitCompleteOnItems("hide", n), i = n && n.length, t = 0; i && i > t; t++) r = n[t], r.hide()
        }, e.prototype.revealItemElements = function(n) {
            var t = this.getItems(n);
            this.reveal(t)
        }, e.prototype.hideItemElements = function(n) {
            var t = this.getItems(n);
            this.hide(t)
        }, e.prototype.getItem = function(n) {
            for (var i, t = 0, r = this.items.length; r > t; t++)
                if (i = this.items[t], i.element === n) return i
        }, e.prototype.getItems = function(n) {
            var f, i;
            n = u.makeArray(n);
            for (var r = [], t = 0, e = n.length; e > t; t++) f = n[t], i = this.getItem(f), i && r.push(i);
            return r
        }, e.prototype.remove = function(n) {
            var t = this.getItems(n),
                i, f, r;
            if (this._emitCompleteOnItems("remove", t), t && t.length)
                for (i = 0, f = t.length; f > i; i++) r = t[i], r.remove(), u.removeFrom(this.items, r)
        }, e.prototype.destroy = function() {
            var t = this.element.style,
                n, i, r, u;
            for (t.height = "", t.position = "", t.width = "", n = 0, i = this.items.length; i > n; n++) r = this.items[n], r.destroy();
            this.unbindResize(), u = this.element.outlayerGUID, delete s[u], delete this.element.outlayerGUID, o && o.removeData(this.element, this.constructor.namespace)
        }, e.data = function(n) {
            n = u.getQueryElement(n);
            var t = n && n.outlayerGUID;
            return t && s[t]
        }, e.create = function(n, t) {
            function i() {
                e.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(e.prototype) : u.extend(i.prototype, e.prototype), i.prototype.constructor = i, i.defaults = u.extend({}, e.defaults), u.extend(i.defaults, t), i.prototype.settings = {}, i.namespace = n, i.data = e.data, i.Item = function() {
                f.apply(this, arguments)
            }, i.Item.prototype = new f, u.htmlInit(i, n), o && o.bridget && o.bridget(n, i), i
        }, e.Item = f, e
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : "object" == typeof exports ? module.exports = t(require("outlayer")) : (n.Isotope = n.Isotope || {}, n.Isotope.Item = t(n.Outlayer))
    }(window, function(n) {
        "use strict";

        function t() {
            n.Item.apply(this, arguments)
        }
        t.prototype = new n.Item, t.prototype._create = function() {
            this.id = this.layout.itemGUID++, n.Item.prototype._create.call(this), this.sortData = {}
        }, t.prototype.updateSortData = function() {
            var t, i, n, r;
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(), t = this.layout.options.getSortData, i = this.layout._sorters;
                for (n in t) r = i[n], this.sortData[n] = r(this.element, this)
            }
        };
        var i = t.prototype.destroy;
        return t.prototype.destroy = function() {
            i.apply(this, arguments), this.css({
                display: ""
            })
        }, t
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof exports ? module.exports = t(require("get-size"), require("outlayer")) : (n.Isotope = n.Isotope || {}, n.Isotope.LayoutMode = t(n.getSize, n.Outlayer))
    }(window, function(n, t) {
        "use strict";

        function i(n) {
            this.isotope = n, n && (this.options = n.options[this.namespace], this.element = n.element, this.items = n.filteredItems, this.size = n.size)
        }
        return function() {
            function f(n) {
                return function() {
                    return t.prototype[n].apply(this.isotope, arguments)
                }
            }
            for (var r, u = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, e = u.length; e > n; n++) r = u[n], i.prototype[r] = f(r)
        }(), i.prototype.needsVerticalResizeLayout = function() {
            var t = n(this.isotope.element),
                i = this.isotope.size && t;
            return i && t.innerHeight != this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function(n, t) {
            var i = n + t,
                u = "outer" + t,
                r;
            (this._getMeasurement(i, u), this[i]) || (r = this.getFirstItemSize(), this[i] = r && r[u] || this.isotope.size["inner" + t])
        }, i.prototype.getFirstItemSize = function() {
            var t = this.isotope.filteredItems[0];
            return t && t.element && n(t.element)
        }, i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(n, t) {
            function r() {
                i.apply(this, arguments)
            }
            return r.prototype = new i, t && (r.options = t), r.prototype.namespace = n, i.modes[n] = r, r
        }, i
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], t) : "object" == typeof exports ? module.exports = t(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : n.Masonry = t(n.Outlayer, n.getSize, n.fizzyUIUtils)
    }(window, function(n, t, i) {
        var r = n.create("masonry");
        return r.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var n = this.cols;
            for (this.colYs = []; n--;) this.colYs.push(0);
            this.maxY = 0
        }, r.prototype.measureColumns = function() {
            var n, i;
            (this.getContainerWidth(), this.columnWidth) || (n = this.items[0], i = n && n.element, this.columnWidth = i && t(i).outerWidth || this.containerWidth);
            var r = this.columnWidth += this.gutter,
                f = this.containerWidth + this.gutter,
                u = f / r,
                e = r - f % r,
                o = e && 1 > e ? "round" : "floor";
            u = Math[o](u), this.cols = Math.max(u, 1)
        }, r.prototype.getContainerWidth = function() {
            var i = this.options.isFitWidth ? this.element.parentNode : this.element,
                n = t(i);
            this.containerWidth = n && n.innerWidth
        }, r.prototype._getItemLayoutPosition = function(n) {
            n.getSize();
            var e = n.size.outerWidth % this.columnWidth,
                s = e && 1 > e ? "round" : "ceil",
                t = Math[s](n.size.outerWidth / this.columnWidth);
            t = Math.min(t, this.cols);
            for (var r = this._getColGroup(t), u = Math.min.apply(Math, r), o = i.indexOf(r, u), h = {
                    x: this.columnWidth * o,
                    y: u
                }, c = u + n.size.outerHeight, l = this.cols + 1 - r.length, f = 0; l > f; f++) this.colYs[o + f] = c;
            return h
        }, r.prototype._getColGroup = function(n) {
            var r;
            if (2 > n) return this.colYs;
            for (var i = [], u = this.cols + 1 - n, t = 0; u > t; t++) r = this.colYs.slice(t, t + n), i[t] = Math.max.apply(Math, r);
            return i
        }, r.prototype._manageStamp = function(n) {
            var e = t(n),
                u = this._getElementOffset(n),
                o = this.options.isOriginLeft ? u.left : u.right,
                s = o + e.outerWidth,
                f = Math.floor(o / this.columnWidth),
                i, h, r;
            for (f = Math.max(0, f), i = Math.floor(s / this.columnWidth), i -= s % this.columnWidth ? 0 : 1, i = Math.min(this.cols - 1, i), h = (this.options.isOriginTop ? u.top : u.bottom) + e.outerHeight, r = f; i >= r; r++) this.colYs[r] = Math.max(h, this.colYs[r])
        }, r.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var n = {
                height: this.maxY
            };
            return this.options.isFitWidth && (n.width = this._getContainerFitWidth()), n
        }, r.prototype._getContainerFitWidth = function() {
            for (var n = 0, t = this.cols; --t && 0 === this.colYs[t];) n++;
            return (this.cols - n) * this.columnWidth - this.gutter
        }, r.prototype.needsResizeLayout = function() {
            var n = this.containerWidth;
            return this.getContainerWidth(), n !== this.containerWidth
        }, r
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(n.Isotope.LayoutMode, n.Masonry)
    }(window, function(n, t) {
        "use strict";

        function f(n, t) {
            for (var i in t) n[i] = t[i];
            return n
        }
        var i = n.create("masonry"),
            e = i.prototype._getElementOffset,
            o = i.prototype.layout,
            s = i.prototype._getMeasurement,
            r, u;
        return f(i.prototype, t.prototype), i.prototype._getElementOffset = e, i.prototype.layout = o, i.prototype._getMeasurement = s, r = i.prototype.measureColumns, i.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, r.call(this)
        }, u = i.prototype._manageStamp, i.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
        }, i
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(n.Isotope.LayoutMode)
    }(window, function(n) {
        "use strict";
        var t = n.create("fitRows");
        return t.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, t.prototype._getItemLayoutPosition = function(n) {
            var t, i, r;
            return n.getSize(), t = n.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter, 0 !== this.x && t + this.x > i && (this.x = 0, this.y = this.maxY), r = {
                x: this.x,
                y: this.y
            }, this.maxY = Math.max(this.maxY, this.y + n.size.outerHeight), this.x += t, r
        }, t.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, t
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(n.Isotope.LayoutMode)
    }(window, function(n) {
        "use strict";
        var t = n.create("vertical", {
            horizontalAlignment: 0
        });
        return t.prototype._resetLayout = function() {
            this.y = 0
        }, t.prototype._getItemLayoutPosition = function(n) {
            n.getSize();
            var t = (this.isotope.size.innerWidth - n.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += n.size.outerHeight, {
                x: t,
                y: i
            }
        }, t.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, t
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, r, u, f, e, o) {
            return t(n, i, r, u, f, e, o)
        }) : "object" == typeof exports ? module.exports = t(n, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : n.Isotope = t(n, n.Outlayer, n.getSize, n.matchesSelector, n.fizzyUIUtils, n.Isotope.Item, n.Isotope.LayoutMode)
    }(window, function(n, t, i, r, u, f, e) {
        function l(n, t) {
            return function(i, r) {
                for (var h, c, u = 0, s = n.length; s > u; u++) {
                    var f = n[u],
                        e = i.sortData[f],
                        o = r.sortData[f];
                    if (e > o || o > e) return h = void 0 !== t[f] ? t[f] : t, c = h ? 1 : -1, (e > o ? 1 : -1) * c
                }
                return 0
            }
        }
        var s = n.jQuery,
            a = String.prototype.trim ? function(n) {
                return n.trim()
            } : function(n) {
                return n.replace(/^\s+|\s+$/g, "")
            },
            v = document.documentElement,
            y = v.textContent ? function(n) {
                return n.textContent
            } : function(n) {
                return n.innerText
            },
            o = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            }),
            h, c;
        return o.Item = f, o.LayoutMode = e, o.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var n in e.modes) this._initLayoutMode(n)
        }, o.prototype.reloadItems = function() {
            this.itemGUID = 0, t.prototype.reloadItems.call(this)
        }, o.prototype._itemize = function() {
            for (var r, n = t.prototype._itemize.apply(this, arguments), i = 0, u = n.length; u > i; i++) r = n[i], r.id = this.itemGUID++;
            return this._updateItemsSortData(n), n
        }, o.prototype._initLayoutMode = function(n) {
            var t = e.modes[n],
                i = this.options[n] || {};
            this.options[n] = t.options ? u.extend(t.options, i) : i, this.modes[n] = new t(this)
        }, o.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, o.prototype._layout = function() {
            var n = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, n), this._isLayoutInited = !0
        }, o.prototype.arrange = function(n) {
            function r() {
                i.reveal(t.needReveal), i.hide(t.needHide)
            }
            var t, i;
            this.option(n), this._getIsInstant(), t = this._filter(this.items), this.filteredItems = t.matches, i = this, this._bindArrangeComplete(), this._isInstant ? this._noTransition(r) : r(), this._sort(), this._layout()
        }, o.prototype._init = o.prototype.arrange, o.prototype._getIsInstant = function() {
            var n = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = n, n
        }, o.prototype._bindArrangeComplete = function() {
            function n() {
                t && i && r && u.dispatchEvent("arrangeComplete", null, [u.filteredItems])
            }
            var t, i, r, u = this;
            this.once("layoutComplete", function() {
                t = !0, n()
            }), this.once("hideComplete", function() {
                i = !0, n()
            }), this.once("revealComplete", function() {
                r = !0, n()
            })
        }, o.prototype._filter = function(n) {
            var r = this.options.filter,
                t, i;
            r = r || "*";
            for (var f = [], e = [], o = [], s = this._getFilterTest(r), u = 0, h = n.length; h > u; u++) t = n[u], t.isIgnored || (i = s(t), i && f.push(t), i && t.isHidden ? e.push(t) : i || t.isHidden || o.push(t));
            return {
                matches: f,
                needReveal: e,
                needHide: o
            }
        }, o.prototype._getFilterTest = function(n) {
            return s && this.options.isJQueryFiltering ? function(t) {
                return s(t.element).is(n)
            } : "function" == typeof n ? function(t) {
                return n(t.element)
            } : function(t) {
                return r(t.element, n)
            }
        }, o.prototype.updateSortData = function(n) {
            var t;
            n ? (n = u.makeArray(n), t = this.getItems(n)) : t = this.items, this._getSorters(), this._updateItemsSortData(t)
        }, o.prototype._getSorters = function() {
            var t = this.options.getSortData,
                n, i;
            for (n in t) i = t[n], this._sorters[n] = h(i)
        }, o.prototype._updateItemsSortData = function(n) {
            for (var r, i = n && n.length, t = 0; i && i > t; t++) r = n[t], r.updateSortData()
        }, h = function() {
            function n(n) {
                if ("string" != typeof n) return n;
                var i = a(n).split(" "),
                    r = i[0],
                    u = r.match(/^\[(.+)\]$/),
                    s = u && u[1],
                    f = t(s, r),
                    e = o.sortDataParsers[i[1]];
                return n = e ? function(n) {
                    return n && e(f(n))
                } : function(n) {
                    return n && f(n)
                }
            }

            function t(n, t) {
                var i;
                return i = n ? function(t) {
                    return t.getAttribute(n)
                } : function(n) {
                    var i = n.querySelector(t);
                    return i && y(i)
                }
            }
            return n
        }(), o.sortDataParsers = {
            parseInt: function(n) {
                return parseInt(n, 10)
            },
            parseFloat: function(n) {
                return parseFloat(n)
            }
        }, o.prototype._sort = function() {
            var n = this.options.sortBy,
                t, i;
            n && (t = [].concat.apply(n, this.sortHistory), i = l(t, this.options.sortAscending), this.filteredItems.sort(i), n != this.sortHistory[0] && this.sortHistory.unshift(n))
        }, o.prototype._mode = function() {
            var n = this.options.layoutMode,
                t = this.modes[n];
            if (!t) throw new Error("No layout mode: " + n);
            return t.options = this.options[n], t
        }, o.prototype._resetLayout = function() {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, o.prototype._getItemLayoutPosition = function(n) {
            return this._mode()._getItemLayoutPosition(n)
        }, o.prototype._manageStamp = function(n) {
            this._mode()._manageStamp(n)
        }, o.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, o.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, o.prototype.appended = function(n) {
            var t = this.addItems(n),
                i;
            t.length && (i = this._filterRevealAdded(t), this.filteredItems = this.filteredItems.concat(i))
        }, o.prototype.prepended = function(n) {
            var t = this._itemize(n),
                i;
            t.length && (this._resetLayout(), this._manageStamps(), i = this._filterRevealAdded(t), this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = t.concat(this.items))
        }, o.prototype._filterRevealAdded = function(n) {
            var t = this._filter(n);
            return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
        }, o.prototype.insert = function(n) {
            var i = this.addItems(n),
                t, u, r, f;
            if (i.length) {
                for (r = i.length, t = 0; r > t; t++) u = i[t], this.element.appendChild(u.element);
                for (f = this._filter(i).matches, t = 0; r > t; t++) i[t].isLayoutInstant = !0;
                for (this.arrange(), t = 0; r > t; t++) delete i[t].isLayoutInstant;
                this.reveal(f)
            }
        }, c = o.prototype.remove, o.prototype.remove = function(n) {
            var t, r, i, f;
            if (n = u.makeArray(n), t = this.getItems(n), c.call(this, n), r = t && t.length, r)
                for (i = 0; r > i; i++) f = t[i], u.removeFrom(this.filteredItems, f)
        }, o.prototype.shuffle = function() {
            for (var i, n = 0, t = this.items.length; t > n; n++) i = this.items[n], i.sortData.random = Math.random();
            this.options.sortBy = "random", this._sort(), this._layout()
        }, o.prototype._noTransition = function(n) {
            var i = this.options.transitionDuration,
                t;
            return this.options.transitionDuration = 0, t = n.call(this), this.options.transitionDuration = i, t
        }, o.prototype.getFilteredItemElements = function() {
            for (var t = [], n = 0, i = this.filteredItems.length; i > n; n++) t.push(this.filteredItems[n].element);
            return t
        }, o
    }),
    function() {
        "use strict";

        function t() {}

        function r(n, t) {
            for (var i = n.length; i--;)
                if (n[i].listener === t) return i;
            return -1
        }

        function i(n) {
            return function() {
                return this[n].apply(this, arguments)
            }
        }
        var n = t.prototype,
            u = this,
            f = u.EventEmitter;
        n.getListeners = function(n) {
            var r, t, i = this._getEvents();
            if ("object" == typeof n) {
                r = {};
                for (t in i) i.hasOwnProperty(t) && n.test(t) && (r[t] = i[t])
            } else r = i[n] || (i[n] = []);
            return r
        }, n.flattenListeners = function(n) {
            for (var i = [], t = 0; t < n.length; t += 1) i.push(n[t].listener);
            return i
        }, n.getListenersAsObject = function(n) {
            var t, i = this.getListeners(n);
            return i instanceof Array && (t = {}, t[n] = i), t || i
        }, n.addListener = function(n, t) {
            var i, u = this.getListenersAsObject(n),
                f = "object" == typeof t;
            for (i in u) u.hasOwnProperty(i) && -1 === r(u[i], t) && u[i].push(f ? t : {
                listener: t,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(n, t) {
            return this.addListener(n, {
                listener: t,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(n) {
            return this.getListeners(n), this
        }, n.defineEvents = function(n) {
            for (var t = 0; t < n.length; t += 1) this.defineEvent(n[t]);
            return this
        }, n.removeListener = function(n, t) {
            var f, i, u = this.getListenersAsObject(n);
            for (i in u) u.hasOwnProperty(i) && (f = r(u[i], t), -1 !== f && u[i].splice(f, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(n, t) {
            return this.manipulateListeners(!1, n, t)
        }, n.removeListeners = function(n, t) {
            return this.manipulateListeners(!0, n, t)
        }, n.manipulateListeners = function(n, t, i) {
            var r, u, f = n ? this.removeListener : this.addListener,
                e = n ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (r = i.length; r--;) f.call(this, t, i[r]);
            else
                for (r in t) t.hasOwnProperty(r) && (u = t[r]) && ("function" == typeof u ? f.call(this, r, u) : e.call(this, r, u));
            return this
        }, n.removeEvent = function(n) {
            var t, r = typeof n,
                i = this._getEvents();
            if ("string" === r) delete i[n];
            else if ("object" === r)
                for (t in i) i.hasOwnProperty(t) && n.test(t) && delete i[t];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(n, t) {
            var i, f, r, e, u = this.getListenersAsObject(n);
            for (r in u)
                if (u.hasOwnProperty(r))
                    for (f = u[r].length; f--;) i = u[r][f], i.once === !0 && this.removeListener(n, i.listener), e = i.listener.apply(this, t || []), e === this._getOnceReturnValue() && this.removeListener(n, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(n) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(n, t)
        }, n.setOnceReturnValue = function(n) {
            return this._onceReturnValue = n, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return u.EventEmitter = f, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(n) {
        function f(t) {
            var i = n.event;
            return i.target = i.target || i.srcElement || t, i
        }
        var t = document.documentElement,
            r = function() {},
            i, u;
        t.addEventListener ? r = function(n, t, i) {
            n.addEventListener(t, i, !1)
        } : t.attachEvent && (r = function(n, t, i) {
            n[t + i] = i.handleEvent ? function() {
                var t = f(n);
                i.handleEvent.call(i, t)
            } : function() {
                var t = f(n);
                i.call(n, t)
            }, n.attachEvent("on" + t, n[t + i])
        }), i = function() {}, t.removeEventListener ? i = function(n, t, i) {
            n.removeEventListener(t, i, !1)
        } : t.detachEvent && (i = function(n, t, i) {
            n.detachEvent("on" + t, n[t + i]);
            try {
                delete n[t + i]
            } catch (r) {
                n[t + i] = void 0
            }
        }), u = {
            bind: r,
            unbind: i
        }, "function" == typeof define && define.amd ? define("eventie/eventie", u) : n.eventie = u
    }(this),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, r) {
            return t(n, i, r)
        }) : "object" == typeof module && module.exports ? module.exports = t(n, require("wolfy87-eventemitter"), require("eventie")) : n.imagesLoaded = t(n, n.EventEmitter, n.eventie)
    }(window, function(n, t, i) {
        function o(n, t) {
            for (var i in t) n[i] = t[i];
            return n
        }

        function l(n) {
            return "[object Array]" == v.call(n)
        }

        function a(n) {
            var t = [],
                i;
            if (l(n)) t = n;
            else if ("number" == typeof n.length)
                for (i = 0; i < n.length; i++) t.push(n[i]);
            else t.push(n);
            return t
        }

        function r(n, t, i) {
            if (!(this instanceof r)) return new r(n, t, i);
            "string" == typeof n && (n = document.querySelectorAll(n)), this.elements = a(n), this.options = o({}, this.options), "function" == typeof t ? i = t : o(this.options, t), i && this.on("always", i), this.getImages(), e && (this.jqDeferred = new e.Deferred);
            var u = this;
            setTimeout(function() {
                u.check()
            })
        }

        function u(n) {
            this.img = n
        }

        function f(n, t) {
            this.url = n, this.element = t, this.img = new Image
        }
        var e = n.jQuery,
            s = n.console,
            v = Object.prototype.toString,
            h, c;
        return r.prototype = new t, r.prototype.options = {}, r.prototype.getImages = function() {
            var n, t;
            for (this.images = [], n = 0; n < this.elements.length; n++) t = this.elements[n], this.addElementImages(t)
        }, r.prototype.addElementImages = function(n) {
            var i, r, t, f, u, e;
            if ("IMG" == n.nodeName && this.addImage(n), this.options.background === !0 && this.addElementBackgroundImages(n), i = n.nodeType, i && h[i]) {
                for (r = n.querySelectorAll("img"), t = 0; t < r.length; t++) f = r[t], this.addImage(f);
                if ("string" == typeof this.options.background)
                    for (u = n.querySelectorAll(this.options.background), t = 0; t < u.length; t++) e = u[t], this.addElementBackgroundImages(e)
            }
        }, h = {
            1: !0,
            9: !0,
            11: !0
        }, r.prototype.addElementBackgroundImages = function(n) {
            for (var i, r = c(n), u = /url\(['"]*([^'"\)]+)['"]*\)/gi, t = u.exec(r.backgroundImage); null !== t;) i = t && t[1], i && this.addBackground(i, n), t = u.exec(r.backgroundImage)
        }, c = n.getComputedStyle || function(n) {
            return n.currentStyle
        }, r.prototype.addImage = function(n) {
            var t = new u(n);
            this.images.push(t)
        }, r.prototype.addBackground = function(n, t) {
            var i = new f(n, t);
            this.images.push(i)
        }, r.prototype.check = function() {
            function i(n, t, i) {
                setTimeout(function() {
                    r.progress(n, t, i)
                })
            }
            var r = this,
                n, t;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
            for (n = 0; n < this.images.length; n++) t = this.images[n], t.once("progress", i), t.check()
        }, r.prototype.progress = function(n, t, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !n.isLoaded, this.emit("progress", this, n, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, n), this.progressedCount == this.images.length && this.complete(), this.options.debug && s && s.log("progress: " + i, n, t)
        }, r.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done",
                n;
            (this.isComplete = !0, this.emit(t, this), this.emit("always", this), this.jqDeferred) && (n = this.hasAnyBroken ? "reject" : "resolve", this.jqDeferred[n](this))
        }, u.prototype = new t, u.prototype.check = function() {
            var n = this.getIsImageComplete();
            return n ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, i.bind(this.proxyImage, "load", this), i.bind(this.proxyImage, "error", this), i.bind(this.img, "load", this), i.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
        }, u.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, u.prototype.confirm = function(n, t) {
            this.isLoaded = n, this.emit("progress", this, this.img, t)
        }, u.prototype.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }, u.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, u.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, u.prototype.unbindEvents = function() {
            i.unbind(this.proxyImage, "load", this), i.unbind(this.proxyImage, "error", this), i.unbind(this.img, "load", this), i.unbind(this.img, "error", this)
        }, f.prototype = new u, f.prototype.check = function() {
            i.bind(this.img, "load", this), i.bind(this.img, "error", this), this.img.src = this.url;
            var n = this.getIsImageComplete();
            n && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, f.prototype.unbindEvents = function() {
            i.unbind(this.img, "load", this), i.unbind(this.img, "error", this)
        }, f.prototype.confirm = function(n, t) {
            this.isLoaded = n, this.emit("progress", this, this.element, t)
        }, r.makeJQueryPlugin = function(t) {
            t = t || n.jQuery, t && (e = t, e.fn.imagesLoaded = function(n, t) {
                var i = new r(this, n, t);
                return i.jqDeferred.promise(e(this))
            })
        }, r.makeJQueryPlugin(), r
    }), ! function(n) {
        function i() {}

        function t(n) {
            function u(t) {
                t.prototype.option || (t.prototype.option = function(t) {
                    n.isPlainObject(t) && (this.options = n.extend(!0, this.options, t))
                })
            }

            function f(i, u) {
                n.fn[i] = function(f) {
                    var h, e, s;
                    if ("string" == typeof f) {
                        for (var c = r.call(arguments, 1), o = 0, l = this.length; l > o; o++)
                            if (h = this[o], e = n.data(h, i), e)
                                if (n.isFunction(e[f]) && "_" !== f.charAt(0)) {
                                    if (s = e[f].apply(e, c), void 0 !== s) return s
                                } else t("no such method '" + f + "' for " + i + " instance");
                        else t("cannot call methods on " + i + " prior to initialization; attempted to call '" + f + "'");
                        return this
                    }
                    return this.each(function() {
                        var t = n.data(this, i);
                        t ? (t.option(f), t._init()) : (t = new u(this, f), n.data(this, i, t))
                    })
                }
            }
            if (n) {
                var t = "undefined" == typeof console ? i : function(n) {
                    console.error(n)
                };
                return n.bridget = function(n, t) {
                    u(t), f(n, t)
                }, n.bridget
            }
        }
        var r = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], t) : t("object" == typeof exports ? require("jquery") : n.jQuery)
    }(window),
    function(n) {
        function f(t) {
            var i = n.event;
            return i.target = i.target || i.srcElement || t, i
        }
        var t = document.documentElement,
            u = function() {},
            i, r;
        t.addEventListener ? u = function(n, t, i) {
            n.addEventListener(t, i, !1)
        } : t.attachEvent && (u = function(n, t, i) {
            n[t + i] = i.handleEvent ? function() {
                var t = f(n);
                i.handleEvent.call(i, t)
            } : function() {
                var t = f(n);
                i.call(n, t)
            }, n.attachEvent("on" + t, n[t + i])
        }), i = function() {}, t.removeEventListener ? i = function(n, t, i) {
            n.removeEventListener(t, i, !1)
        } : t.detachEvent && (i = function(n, t, i) {
            n.detachEvent("on" + t, n[t + i]);
            try {
                delete n[t + i]
            } catch (r) {
                n[t + i] = void 0
            }
        }), r = {
            bind: u,
            unbind: i
        }, "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : n.eventie = r
    }(window),
    function() {
        function t() {}

        function u(n, t) {
            for (var i = n.length; i--;)
                if (n[i].listener === t) return i;
            return -1
        }

        function i(n) {
            return function() {
                return this[n].apply(this, arguments)
            }
        }
        var n = t.prototype,
            r = this,
            f = r.EventEmitter;
        n.getListeners = function(n) {
            var r, t, i = this._getEvents();
            if (n instanceof RegExp) {
                r = {};
                for (t in i) i.hasOwnProperty(t) && n.test(t) && (r[t] = i[t])
            } else r = i[n] || (i[n] = []);
            return r
        }, n.flattenListeners = function(n) {
            for (var i = [], t = 0; t < n.length; t += 1) i.push(n[t].listener);
            return i
        }, n.getListenersAsObject = function(n) {
            var t, i = this.getListeners(n);
            return i instanceof Array && (t = {}, t[n] = i), t || i
        }, n.addListener = function(n, t) {
            var i, r = this.getListenersAsObject(n),
                f = "object" == typeof t;
            for (i in r) r.hasOwnProperty(i) && -1 === u(r[i], t) && r[i].push(f ? t : {
                listener: t,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(n, t) {
            return this.addListener(n, {
                listener: t,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(n) {
            return this.getListeners(n), this
        }, n.defineEvents = function(n) {
            for (var t = 0; t < n.length; t += 1) this.defineEvent(n[t]);
            return this
        }, n.removeListener = function(n, t) {
            var f, i, r = this.getListenersAsObject(n);
            for (i in r) r.hasOwnProperty(i) && (f = u(r[i], t), -1 !== f && r[i].splice(f, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(n, t) {
            return this.manipulateListeners(!1, n, t)
        }, n.removeListeners = function(n, t) {
            return this.manipulateListeners(!0, n, t)
        }, n.manipulateListeners = function(n, t, i) {
            var r, u, f = n ? this.removeListener : this.addListener,
                e = n ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (r = i.length; r--;) f.call(this, t, i[r]);
            else
                for (r in t) t.hasOwnProperty(r) && (u = t[r]) && ("function" == typeof u ? f.call(this, r, u) : e.call(this, r, u));
            return this
        }, n.removeEvent = function(n) {
            var t, r = typeof n,
                i = this._getEvents();
            if ("string" === r) delete i[n];
            else if (n instanceof RegExp)
                for (t in i) i.hasOwnProperty(t) && n.test(t) && delete i[t];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(n, t) {
            var i, f, r, e, u = this.getListenersAsObject(n);
            for (r in u)
                if (u.hasOwnProperty(r))
                    for (f = u[r].length; f--;) i = u[r][f], i.once === !0 && this.removeListener(n, i.listener), e = i.listener.apply(this, t || []), e === this._getOnceReturnValue() && this.removeListener(n, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(n) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(n, t)
        }, n.setOnceReturnValue = function(n) {
            return this._onceReturnValue = n, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return r.EventEmitter = f, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : r.EventEmitter = t
    }.call(this),
    function(n) {
        function t(n) {
            if (n) {
                if ("string" == typeof r[n]) return n;
                n = n.charAt(0).toUpperCase() + n.slice(1);
                for (var t, u = 0, f = i.length; f > u; u++)
                    if (t = i[u] + n, "string" == typeof r[t]) return t
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            r = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return t
        }) : "object" == typeof exports ? module.exports = t : n.getStyleProperty = t
    }(window),
    function(n) {
        function i(n) {
            var t = parseFloat(n),
                i = -1 === n.indexOf("%") && !isNaN(t);
            return i && t
        }

        function u() {}

        function f() {
            for (var r, i = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, n = 0, u = t.length; u > n; n++) r = t[n], i[r] = 0;
            return i
        }

        function r(r) {
            function c() {
                var f, t, c, l;
                h || (h = !0, f = n.getComputedStyle, (o = function() {
                    var n = f ? function(n) {
                        return f(n, null)
                    } : function(n) {
                        return n.currentStyle
                    };
                    return function(t) {
                        var i = n(t);
                        return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                    }
                }(), u = r("boxSizing")) && (t = document.createElement("div"), t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[u] = "border-box", c = document.body || document.documentElement, c.appendChild(t), l = o(t), s = 200 === i(l.width), c.removeChild(t)))
            }

            function l(n) {
                var e, r, v, h, y, p;
                if (c(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType) {
                    if (e = o(n), "none" === e.display) return f();
                    r = {}, r.width = n.offsetWidth, r.height = n.offsetHeight;
                    for (var tt = r.isBorderBox = !(!u || !e[u] || "border-box" !== e[u]), l = 0, it = t.length; it > l; l++) v = t[l], h = e[v], h = a(n, h), y = parseFloat(h), r[v] = isNaN(y) ? 0 : y;
                    var w = r.paddingLeft + r.paddingRight,
                        b = r.paddingTop + r.paddingBottom,
                        rt = r.marginLeft + r.marginRight,
                        ut = r.marginTop + r.marginBottom,
                        k = r.borderLeftWidth + r.borderRightWidth,
                        d = r.borderTopWidth + r.borderBottomWidth,
                        g = tt && s,
                        nt = i(e.width);
                    return nt !== !1 && (r.width = nt + (g ? 0 : w + k)), p = i(e.height), p !== !1 && (r.height = p + (g ? 0 : b + d)), r.innerWidth = r.width - (w + k), r.innerHeight = r.height - (b + d), r.outerWidth = r.width + rt, r.outerHeight = r.height + ut, r
                }
            }

            function a(t, i) {
                if (n.getComputedStyle || -1 === i.indexOf("%")) return i;
                var r = t.style,
                    e = r.left,
                    u = t.runtimeStyle,
                    f = u && u.left;
                return f && (u.left = t.currentStyle.left), r.left = i, i = r.pixelLeft, r.left = e, f && (u.left = f), i
            }
            var o, u, s, h = !1;
            return l
        }
        var e = "undefined" == typeof console ? u : function(n) {
                console.error(n)
            },
            t = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : n.getSize = r(n.getStyleProperty)
    }(window),
    function(n) {
        function t(n) {
            "function" == typeof n && (t.isReady ? n() : f.push(n))
        }

        function r(n) {
            var r = "readystatechange" === n.type && "complete" !== i.readyState;
            t.isReady || r || e()
        }

        function e() {
            var n, i, r;
            for (t.isReady = !0, n = 0, i = f.length; i > n; n++) r = f[n], r()
        }

        function u(u) {
            return "complete" === i.readyState ? e() : (u.bind(i, "DOMContentLoaded", r), u.bind(i, "readystatechange", r), u.bind(n, "load", r)), t
        }
        var i = n.document,
            f = [];
        t.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], u) : "object" == typeof exports ? module.exports = u(require("eventie")) : n.docReady = u(n.eventie)
    }(window),
    function(n) {
        function i(n, t) {
            return n[u](t)
        }

        function r(n) {
            if (!n.parentNode) {
                var t = document.createDocumentFragment();
                t.appendChild(n)
            }
        }

        function o(n, t) {
            r(n);
            for (var u = n.parentNode.querySelectorAll(t), i = 0, f = u.length; f > i; i++)
                if (u[i] === n) return !0;
            return !1
        }

        function s(n, t) {
            return r(n), i(n, t)
        }
        var t, u = function() {
                var u, i;
                if (n.matches) return "matches";
                if (n.matchesSelector) return "matchesSelector";
                for (var r = ["webkit", "moz", "ms", "o"], t = 0, f = r.length; f > t; t++)
                    if (u = r[t], i = u + "MatchesSelector", n[i]) return i
            }(),
            f, e;
        u ? (f = document.createElement("div"), e = i(f, "div"), t = e ? i : s) : t = o, "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return t
        }) : "object" == typeof exports ? module.exports = t : window.matchesSelector = t
    }(Element.prototype),
    function(n, t) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, r) {
            return t(n, i, r)
        }) : "object" == typeof exports ? module.exports = t(n, require("doc-ready"), require("desandro-matches-selector")) : n.fizzyUIUtils = t(n, n.docReady, n.matchesSelector)
    }(window, function(n, t, i) {
        var r = {},
            f, u;
        return r.extend = function(n, t) {
            for (var i in t) n[i] = t[i];
            return n
        }, r.modulo = function(n, t) {
            return (n % t + t) % t
        }, f = Object.prototype.toString, r.isArray = function(n) {
            return "[object Array]" == f.call(n)
        }, r.makeArray = function(n) {
            var t = [],
                i, u;
            if (r.isArray(n)) t = n;
            else if (n && "number" == typeof n.length)
                for (i = 0, u = n.length; u > i; i++) t.push(n[i]);
            else t.push(n);
            return t
        }, r.indexOf = Array.prototype.indexOf ? function(n, t) {
            return n.indexOf(t)
        } : function(n, t) {
            for (var i = 0, r = n.length; r > i; i++)
                if (n[i] === t) return i;
            return -1
        }, r.removeFrom = function(n, t) {
            var i = r.indexOf(n, t); - 1 != i && n.splice(i, 1)
        }, r.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(n) {
            return n instanceof HTMLElement
        } : function(n) {
            return n && "object" == typeof n && 1 == n.nodeType && "string" == typeof n.nodeName
        }, r.setText = function() {
            function t(t, i) {
                n = n || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[n] = i
            }
            var n;
            return t
        }(), r.getParent = function(n, t) {
            for (; n != document.body;)
                if (n = n.parentNode, i(n, t)) return n
        }, r.getQueryElement = function(n) {
            return "string" == typeof n ? document.querySelector(n) : n
        }, r.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }, r.filterFindElements = function(n, t) {
            var u;
            n = r.makeArray(n);
            for (var f = [], e = 0, h = n.length; h > e; e++)
                if (u = n[e], r.isElement(u))
                    if (t) {
                        i(u, t) && f.push(u);
                        for (var s = u.querySelectorAll(t), o = 0, c = s.length; c > o; o++) f.push(s[o])
                    } else f.push(u);
            return f
        }, r.debounceMethod = function(n, t, i) {
            var u = n.prototype[t],
                r = t + "Timeout";
            n.prototype[t] = function() {
                var t = this[r],
                    f, n;
                t && clearTimeout(t), f = arguments, n = this, this[r] = setTimeout(function() {
                    u.apply(n, f), delete n[r]
                }, i || 100)
            }
        }, r.toDashed = function(n) {
            return n.replace(/(.)([A-Z])/g, function(n, t, i) {
                return t + "-" + i
            }).toLowerCase()
        }, u = n.console, r.htmlInit = function(i, f) {
            t(function() {
                for (var a, t, o, v, s, h = r.toDashed(f), c = document.querySelectorAll(".js-" + h), l = "data-" + h + "-options", e = 0, y = c.length; y > e; e++) {
                    t = c[e], o = t.getAttribute(l);
                    try {
                        a = o && JSON.parse(o)
                    } catch (p) {
                        u && u.error("Error parsing " + l + " on " + t.nodeName.toLowerCase() + (t.id ? "#" + t.id : "") + ": " + p);
                        continue
                    }
                    v = new i(t, a), s = n.jQuery, s && s.data(t, f, v)
                }
            })
        }, r
    }),
    function(n, t) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, r, u, f) {
            return t(n, i, r, u, f)
        }) : "object" == typeof exports ? module.exports = t(n, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (n.Outlayer = {}, n.Outlayer.Item = t(n, n.EventEmitter, n.getSize, n.getStyleProperty, n.fizzyUIUtils))
    }(window, function(n, t, i, r, u) {
        function y(n) {
            for (var t in n) return !1;
            return t = null, !0
        }

        function f(n, t) {
            n && (this.element = n, this.layout = t, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function p(n) {
            return n.replace(/([A-Z])/g, function(n) {
                return "-" + n.toLowerCase()
            })
        }
        var o = n.getComputedStyle,
            w = o ? function(n) {
                return o(n, null)
            } : function(n) {
                return n.currentStyle
            },
            e = r("transition"),
            b = r("transform"),
            k = e && b,
            d = !!r("perspective"),
            s = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[e],
            h = ["transform", "transition", "transitionDuration", "transitionProperty"],
            c = function() {
                for (var n, t, u = {}, i = 0, f = h.length; f > i; i++) n = h[i], t = r(n), t && t !== n && (u[n] = t);
                return u
            }(),
            l, a, v;
        return u.extend(f.prototype, t.prototype), f.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, f.prototype.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }, f.prototype.getSize = function() {
            this.size = i(this.element)
        }, f.prototype.css = function(n) {
            var r = this.element.style,
                t, i;
            for (t in n) i = c[t] || t, r[i] = n[t]
        }, f.prototype.getPosition = function() {
            var f = w(this.element),
                e = this.layout.options,
                o = e.isOriginLeft,
                s = e.isOriginTop,
                r = f[o ? "left" : "right"],
                u = f[s ? "top" : "bottom"],
                n = this.layout.size,
                t = -1 != r.indexOf("%") ? parseFloat(r) / 100 * n.width : parseInt(r, 10),
                i = -1 != u.indexOf("%") ? parseFloat(u) / 100 * n.height : parseInt(u, 10);
            t = isNaN(t) ? 0 : t, i = isNaN(i) ? 0 : i, t -= o ? n.paddingLeft : n.paddingRight, i -= s ? n.paddingTop : n.paddingBottom, this.position.x = t, this.position.y = i
        }, f.prototype.layoutPosition = function() {
            var i = this.layout.size,
                n = this.layout.options,
                t = {},
                r = n.isOriginLeft ? "paddingLeft" : "paddingRight",
                u = n.isOriginLeft ? "left" : "right",
                f = n.isOriginLeft ? "right" : "left",
                e = this.position.x + i[r];
            t[u] = this.getXValue(e), t[f] = "";
            var o = n.isOriginTop ? "paddingTop" : "paddingBottom",
                s = n.isOriginTop ? "top" : "bottom",
                h = n.isOriginTop ? "bottom" : "top",
                c = this.position.y + i[o];
            t[s] = this.getYValue(c), t[h] = "", this.css(t), this.emitEvent("layout", [this])
        }, f.prototype.getXValue = function(n) {
            var t = this.layout.options;
            return t.percentPosition && !t.isHorizontal ? n / this.layout.size.width * 100 + "%" : n + "px"
        }, f.prototype.getYValue = function(n) {
            var t = this.layout.options;
            return t.percentPosition && t.isHorizontal ? n / this.layout.size.height * 100 + "%" : n + "px"
        }, f.prototype._transitionTo = function(n, t) {
            this.getPosition();
            var r = this.position.x,
                u = this.position.y,
                f = parseInt(n, 10),
                e = parseInt(t, 10),
                o = f === this.position.x && e === this.position.y;
            if (this.setPosition(n, t), o && !this.isTransitioning) return void this.layoutPosition();
            var s = n - r,
                h = t - u,
                i = {};
            i.transform = this.getTranslate(s, h), this.transition({
                to: i,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, f.prototype.getTranslate = function(n, t) {
            var i = this.layout.options;
            return n = i.isOriginLeft ? n : -n, t = i.isOriginTop ? t : -t, d ? "translate3d(" + n + "px, " + t + "px, 0)" : "translate(" + n + "px, " + t + "px)"
        }, f.prototype.goTo = function(n, t) {
            this.setPosition(n, t), this.layoutPosition()
        }, f.prototype.moveTo = k ? f.prototype._transitionTo : f.prototype.goTo, f.prototype.setPosition = function(n, t) {
            this.position.x = parseInt(n, 10), this.position.y = parseInt(t, 10)
        }, f.prototype._nonTransition = function(n) {
            this.css(n.to), n.isCleaning && this._removeStyles(n.to);
            for (var t in n.onTransitionEnd) n.onTransitionEnd[t].call(this)
        }, f.prototype._transition = function(n) {
            var i, t, r;
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(n);
            i = this._transn;
            for (t in n.onTransitionEnd) i.onEnd[t] = n.onTransitionEnd[t];
            for (t in n.to) i.ingProperties[t] = !0, n.isCleaning && (i.clean[t] = !0);
            n.from && (this.css(n.from), r = this.element.offsetHeight, r = null), this.enableTransition(n.to), this.css(n.to), this.isTransitioning = !0
        }, l = "opacity," + p(c.transform || "transform"), f.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: l,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(s, this, !1))
        }, f.prototype.transition = f.prototype[e ? "_transition" : "_nonTransition"], f.prototype.onwebkitTransitionEnd = function(n) {
            this.ontransitionend(n)
        }, f.prototype.onotransitionend = function(n) {
            this.ontransitionend(n)
        }, a = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        }, f.prototype.ontransitionend = function(n) {
            var t, i, r;
            n.target === this.element && (t = this._transn, i = a[n.propertyName] || n.propertyName, (delete t.ingProperties[i], y(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[n.propertyName] = "", delete t.clean[i]), i in t.onEnd) && (r = t.onEnd[i], r.call(this), delete t.onEnd[i]), this.emitEvent("transitionEnd", [this]))
        }, f.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
        }, f.prototype._removeStyles = function(n) {
            var t = {},
                i;
            for (i in n) t[i] = "";
            this.css(t)
        }, v = {
            transitionProperty: "",
            transitionDuration: ""
        }, f.prototype.removeTransitionStyles = function() {
            this.css(v)
        }, f.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, f.prototype.remove = function() {
            if (!e || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var n = this;
            this.once("transitionEnd", function() {
                n.removeElem()
            }), this.hide()
        }, f.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var n = this.layout.options,
                t = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            t[i] = this.onRevealTransitionEnd, this.transition({
                from: n.hiddenStyle,
                to: n.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, f.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, f.prototype.getHideRevealTransitionEndProperty = function(n) {
            var t = this.layout.options[n],
                i;
            if (t.opacity) return "opacity";
            for (i in t) return i
        }, f.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var n = this.layout.options,
                t = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            t[i] = this.onHideTransitionEnd, this.transition({
                from: n.visibleStyle,
                to: n.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, f.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, f.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, f
    }),
    function(n, t) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, r, u, f, e) {
            return t(n, i, r, u, f, e)
        }) : "object" == typeof exports ? module.exports = t(n, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = t(n, n.eventie, n.EventEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
    }(window, function(n, t, i, r, u, f) {
        function e(n, t) {
            var i = u.getQueryElement(n),
                r;
            if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || n)));
            this.element = i, o && (this.$element = o(this.element)), this.options = u.extend({}, this.constructor.defaults), this.option(t), r = ++l, this.element.outlayerGUID = r, s[r] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = n.console,
            o = n.jQuery,
            c = function() {},
            l = 0,
            s = {};
        return e.namespace = "outlayer", e.Item = f, e.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, u.extend(e.prototype, i.prototype), e.prototype.option = function(n) {
            u.extend(this.options, n)
        }, e.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), u.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, e.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, e.prototype._itemize = function(n) {
            for (var u, f, i = this._filterFindItemElements(n), e = this.constructor.Item, r = [], t = 0, o = i.length; o > t; t++) u = i[t], f = new e(u, this), r.push(f);
            return r
        }, e.prototype._filterFindItemElements = function(n) {
            return u.filterFindElements(n, this.options.itemSelector)
        }, e.prototype.getItemElements = function() {
            for (var t = [], n = 0, i = this.items.length; i > n; n++) t.push(this.items[n].element);
            return t
        }, e.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var n = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, n), this._isLayoutInited = !0
        }, e.prototype._init = e.prototype.layout, e.prototype._resetLayout = function() {
            this.getSize()
        }, e.prototype.getSize = function() {
            this.size = r(this.element)
        }, e.prototype._getMeasurement = function(n, t) {
            var f, i = this.options[n];
            i ? ("string" == typeof i ? f = this.element.querySelector(i) : u.isElement(i) && (f = i), this[n] = f ? r(f)[t] : i) : this[n] = 0
        }, e.prototype.layoutItems = function(n, t) {
            n = this._getItemsForLayout(n), this._layoutItems(n, t), this._postLayout()
        }, e.prototype._getItemsForLayout = function(n) {
            for (var i, r = [], t = 0, u = n.length; u > t; t++) i = n[t], i.isIgnored || r.push(i);
            return r
        }, e.prototype._layoutItems = function(n, t) {
            var i, r;
            if (this._emitCompleteOnItems("layout", n), n && n.length) {
                for (var f = [], u = 0, e = n.length; e > u; u++) i = n[u], r = this._getItemLayoutPosition(i), r.item = i, r.isInstant = t || i.isLayoutInstant, f.push(r);
                this._processLayoutQueue(f)
            }
        }, e.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, e.prototype._processLayoutQueue = function(n) {
            for (var t, i = 0, r = n.length; r > i; i++) t = n[i], this._positionItem(t.item, t.x, t.y, t.isInstant)
        }, e.prototype._positionItem = function(n, t, i, r) {
            r ? n.goTo(t, i) : n.moveTo(t, i)
        }, e.prototype._postLayout = function() {
            this.resizeContainer()
        }, e.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var n = this._getContainerSize();
                n && (this._setContainerMeasure(n.width, !0), this._setContainerMeasure(n.height, !1))
            }
        }, e.prototype._getContainerSize = c, e.prototype._setContainerMeasure = function(n, t) {
            if (void 0 !== n) {
                var i = this.size;
                i.isBorderBox && (n += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), n = Math.max(n, 0), this.element.style[t ? "width" : "height"] = n + "px"
            }
        }, e.prototype._emitCompleteOnItems = function(n, t) {
            function r() {
                s.dispatchEvent(n + "Complete", null, [t])
            }

            function o() {
                f++, f === u && r()
            }
            var s = this,
                u = t.length,
                e;
            if (!t || !u) return void r();
            for (var f = 0, i = 0, h = t.length; h > i; i++) {
                e = t[i];
                e.once(n, o)
            }
        }, e.prototype.dispatchEvent = function(n, t, i) {
            var u = t ? [t].concat(i) : i,
                r;
            (this.emitEvent(n, u), o) && ((this.$element = this.$element || o(this.element), t) ? (r = o.Event(t), r.type = n, this.$element.trigger(r, i)) : this.$element.trigger(n, i))
        }, e.prototype.ignore = function(n) {
            var t = this.getItem(n);
            t && (t.isIgnored = !0)
        }, e.prototype.unignore = function(n) {
            var t = this.getItem(n);
            t && delete t.isIgnored
        }, e.prototype.stamp = function(n) {
            var t, i, r;
            if (n = this._find(n))
                for (this.stamps = this.stamps.concat(n), t = 0, i = n.length; i > t; t++) r = n[t], this.ignore(r)
        }, e.prototype.unstamp = function(n) {
            var t, r, i;
            if (n = this._find(n))
                for (t = 0, r = n.length; r > t; t++) i = n[t], u.removeFrom(this.stamps, i), this.unignore(i)
        }, e.prototype._find = function(n) {
            if (n) return "string" == typeof n && (n = this.element.querySelectorAll(n)), n = u.makeArray(n)
        }, e.prototype._manageStamps = function() {
            var n, t, i;
            if (this.stamps && this.stamps.length)
                for (this._getBoundingRect(), n = 0, t = this.stamps.length; t > n; n++) i = this.stamps[n], this._manageStamp(i)
        }, e.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                n = this.size;
            this._boundingRect = {
                left: t.left + n.paddingLeft + n.borderLeftWidth,
                top: t.top + n.paddingTop + n.borderTopWidth,
                right: t.right - (n.paddingRight + n.borderRightWidth),
                bottom: t.bottom - (n.paddingBottom + n.borderBottomWidth)
            }
        }, e.prototype._manageStamp = c, e.prototype._getElementOffset = function(n) {
            var t = n.getBoundingClientRect(),
                i = this._boundingRect,
                u = r(n);
            return {
                left: t.left - i.left - u.marginLeft,
                top: t.top - i.top - u.marginTop,
                right: i.right - t.right - u.marginRight,
                bottom: i.bottom - t.bottom - u.marginBottom
            }
        }, e.prototype.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }, e.prototype.bindResize = function() {
            this.isResizeBound || (t.bind(n, "resize", this), this.isResizeBound = !0)
        }, e.prototype.unbindResize = function() {
            this.isResizeBound && t.unbind(n, "resize", this), this.isResizeBound = !1
        }, e.prototype.onresize = function() {
            function t() {
                n.resize(), delete n.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var n = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, e.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, e.prototype.needsResizeLayout = function() {
            var n = r(this.element),
                t = this.size && n;
            return t && n.innerWidth !== this.size.innerWidth
        }, e.prototype.addItems = function(n) {
            var t = this._itemize(n);
            return t.length && (this.items = this.items.concat(t)), t
        }, e.prototype.appended = function(n) {
            var t = this.addItems(n);
            t.length && (this.layoutItems(t, !0), this.reveal(t))
        }, e.prototype.prepended = function(n) {
            var t = this._itemize(n),
                i;
            t.length && (i = this.items.slice(0), this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i))
        }, e.prototype.reveal = function(n) {
            var i, t, r;
            for (this._emitCompleteOnItems("reveal", n), i = n && n.length, t = 0; i && i > t; t++) r = n[t], r.reveal()
        }, e.prototype.hide = function(n) {
            var i, t, r;
            for (this._emitCompleteOnItems("hide", n), i = n && n.length, t = 0; i && i > t; t++) r = n[t], r.hide()
        }, e.prototype.revealItemElements = function(n) {
            var t = this.getItems(n);
            this.reveal(t)
        }, e.prototype.hideItemElements = function(n) {
            var t = this.getItems(n);
            this.hide(t)
        }, e.prototype.getItem = function(n) {
            for (var i, t = 0, r = this.items.length; r > t; t++)
                if (i = this.items[t], i.element === n) return i
        }, e.prototype.getItems = function(n) {
            var f, i;
            n = u.makeArray(n);
            for (var r = [], t = 0, e = n.length; e > t; t++) f = n[t], i = this.getItem(f), i && r.push(i);
            return r
        }, e.prototype.remove = function(n) {
            var t = this.getItems(n),
                i, f, r;
            if (this._emitCompleteOnItems("remove", t), t && t.length)
                for (i = 0, f = t.length; f > i; i++) r = t[i], r.remove(), u.removeFrom(this.items, r)
        }, e.prototype.destroy = function() {
            var t = this.element.style,
                n, i, r, u;
            for (t.height = "", t.position = "", t.width = "", n = 0, i = this.items.length; i > n; n++) r = this.items[n], r.destroy();
            this.unbindResize(), u = this.element.outlayerGUID, delete s[u], delete this.element.outlayerGUID, o && o.removeData(this.element, this.constructor.namespace)
        }, e.data = function(n) {
            n = u.getQueryElement(n);
            var t = n && n.outlayerGUID;
            return t && s[t]
        }, e.create = function(n, t) {
            function i() {
                e.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(e.prototype) : u.extend(i.prototype, e.prototype), i.prototype.constructor = i, i.defaults = u.extend({}, e.defaults), u.extend(i.defaults, t), i.prototype.settings = {}, i.namespace = n, i.data = e.data, i.Item = function() {
                f.apply(this, arguments)
            }, i.Item.prototype = new f, u.htmlInit(i, n), o && o.bridget && o.bridget(n, i), i
        }, e.Item = f, e
    }),
    function(n, t) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], t) : "object" == typeof exports ? module.exports = t(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : n.Masonry = t(n.Outlayer, n.getSize, n.fizzyUIUtils)
    }(window, function(n, t, i) {
        var r = n.create("masonry");
        return r.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var n = this.cols;
            for (this.colYs = []; n--;) this.colYs.push(0);
            this.maxY = 0
        }, r.prototype.measureColumns = function() {
            var n, i;
            (this.getContainerWidth(), this.columnWidth) || (n = this.items[0], i = n && n.element, this.columnWidth = i && t(i).outerWidth || this.containerWidth);
            var r = this.columnWidth += this.gutter,
                f = this.containerWidth + this.gutter,
                u = f / r,
                e = r - f % r,
                o = e && 1 > e ? "round" : "floor";
            u = Math[o](u), this.cols = Math.max(u, 1)
        }, r.prototype.getContainerWidth = function() {
            var i = this.options.isFitWidth ? this.element.parentNode : this.element,
                n = t(i);
            this.containerWidth = n && n.innerWidth
        }, r.prototype._getItemLayoutPosition = function(n) {
            n.getSize();
            var e = n.size.outerWidth % this.columnWidth,
                s = e && 1 > e ? "round" : "ceil",
                t = Math[s](n.size.outerWidth / this.columnWidth);
            t = Math.min(t, this.cols);
            for (var r = this._getColGroup(t), u = Math.min.apply(Math, r), o = i.indexOf(r, u), h = {
                    x: this.columnWidth * o,
                    y: u
                }, c = u + n.size.outerHeight, l = this.cols + 1 - r.length, f = 0; l > f; f++) this.colYs[o + f] = c;
            return h
        }, r.prototype._getColGroup = function(n) {
            var r;
            if (2 > n) return this.colYs;
            for (var i = [], u = this.cols + 1 - n, t = 0; u > t; t++) r = this.colYs.slice(t, t + n), i[t] = Math.max.apply(Math, r);
            return i
        }, r.prototype._manageStamp = function(n) {
            var e = t(n),
                u = this._getElementOffset(n),
                o = this.options.isOriginLeft ? u.left : u.right,
                s = o + e.outerWidth,
                f = Math.floor(o / this.columnWidth),
                i, h, r;
            for (f = Math.max(0, f), i = Math.floor(s / this.columnWidth), i -= s % this.columnWidth ? 0 : 1, i = Math.min(this.cols - 1, i), h = (this.options.isOriginTop ? u.top : u.bottom) + e.outerHeight, r = f; i >= r; r++) this.colYs[r] = Math.max(h, this.colYs[r])
        }, r.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var n = {
                height: this.maxY
            };
            return this.options.isFitWidth && (n.width = this._getContainerFitWidth()), n
        }, r.prototype._getContainerFitWidth = function() {
            for (var n = 0, t = this.cols; --t && 0 === this.colYs[t];) n++;
            return (this.cols - n) * this.columnWidth - this.gutter
        }, r.prototype.needsResizeLayout = function() {
            var n = this.containerWidth;
            return this.getContainerWidth(), n !== this.containerWidth
        }, r
    })