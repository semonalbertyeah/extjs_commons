! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("i18next", t) : e.i18next = t()
}(this, function() {
    "use strict";

    function e(e) {
        return null == e ? "" : "" + e
    }

    function t(e, t, n) {
        e.forEach(function(e) {
            t[e] && (n[e] = t[e])
        })
    }

    function n(e, t, n) {
        function o(e) {
            return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
        }
        for (var r = "string" != typeof t ? [].concat(t) : t.split("."); r.length > 1;) {
            if (!e) return {};
            var i = o(r.shift());
            !e[i] && n && (e[i] = new n), e = e[i]
        }
        return e ? {
            obj: e,
            k: o(r.shift())
        } : {}
    }

    function o(e, t, o) {
        var r = n(e, t, Object),
            i = r.obj,
            s = r.k;
        i[s] = o
    }

    function r(e, t, o, r) {
        var i = n(e, t, Object),
            s = i.obj,
            a = i.k;
        s[a] = s[a] || [], r && (s[a] = s[a].concat(o)), r || s[a].push(o)
    }

    function i(e, t) {
        var o = n(e, t),
            r = o.obj,
            i = o.k;
        return r ? r[i] : void 0
    }

    function s(e, t, n) {
        for (var o in t) o in e ? "string" == typeof e[o] || e[o] instanceof String || "string" == typeof t[o] || t[o] instanceof String ? n && (e[o] = t[o]) : s(e[o], t[o], n) : e[o] = t[o];
        return e
    }

    function a(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }

    function l(e) {
        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, function(e) {
            return w[e]
        }) : e
    }

    function u(e) {
        return e.interpolation = {
            unescapeSuffix: "HTML"
        }, e.interpolation.prefix = e.interpolationPrefix || "__", e.interpolation.suffix = e.interpolationSuffix || "__", e.interpolation.escapeValue = e.escapeInterpolation || !1, e.interpolation.nestingPrefix = e.reusePrefix || "$t(", e.interpolation.nestingSuffix = e.reuseSuffix || ")", e
    }

    function c(e) {
        return e.resStore && (e.resources = e.resStore), e.ns && e.ns.defaultNs ? (e.defaultNS = e.ns.defaultNs, e.ns = e.ns.namespaces) : e.defaultNS = e.ns || "translation", e.fallbackToDefaultNS && e.defaultNS && (e.fallbackNS = e.defaultNS), e.saveMissing = e.sendMissing, e.saveMissingTo = e.sendMissingTo || "current", e.returnNull = !e.fallbackOnNull, e.returnEmptyString = !e.fallbackOnEmpty, e.returnObjects = e.returnObjectTrees, e.joinArrays = "\n", e.returnedObjectHandler = e.objectTreeKeyHandler, e.parseMissingKeyHandler = e.parseMissingKey, e.appendNamespaceToMissingKey = !0, e.nsSeparator = e.nsseparator, e.keySeparator = e.keyseparator, "sprintf" === e.shortcutFunction && (e.overloadTranslationOptionHandler = function(e) {
            for (var t = [], n = 1; n < e.length; n++) t.push(e[n]);
            return {
                postProcess: "sprintf",
                sprintf: t
            }
        }), e.whitelist = e.lngWhitelist, e.preload = e.preload, "current" === e.load && (e.load = "currentOnly"), "unspecific" === e.load && (e.load = "languageOnly"), e.backend = e.backend || {}, e.backend.loadPath = e.resGetPath || "locales/__lng__/__ns__.json", e.backend.addPath = e.resPostPath || "locales/add/__lng__/__ns__", e.backend.allowMultiLoading = e.dynamicLoad, e.cache = e.cache || {}, e.cache.prefix = "res_", e.cache.expirationTime = 6048e5, e.cache.enabled = !! e.useLocalStorage, e = u(e), e.defaultVariables && (e.interpolation.defaultVariables = e.defaultVariables), e
    }

    function p(e) {
        return e = u(e), e.joinArrays = "\n", e
    }

    function f(e) {
        return (e.interpolationPrefix || e.interpolationSuffix || e.escapeInterpolation) && (e = u(e)), e.nsSeparator = e.nsseparator, e.keySeparator = e.keyseparator, e.returnObjects = e.returnObjectTrees, e
    }

    function h(e) {
        e.lng = function() {
            return k.deprecate("i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."), e.services.languageUtils.toResolveHierarchy(e.language)[0]
        }, e.preload = function(t, n) {
            k.deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"), e.loadLanguages(t, n)
        }, e.setLng = function(t, n, o) {
            return k.deprecate("i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."), "function" == typeof n && (o = n, n = {}), n || (n = {}), n.fixLng === !0 && o ? o(null, e.getFixedT(t)) : void e.changeLanguage(t, o)
        }, e.addPostProcessor = function(t, n) {
            k.deprecate("i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"), e.use({
                type: "postProcessor",
                name: t,
                process: n
            })
        }
    }

    function g() {
        var e = {};
        return R.forEach(function(t) {
            t.lngs.forEach(function(n) {
                return e[n] = {
                    numbers: t.nr,
                    plurals: j[t.fc]
                }
            })
        }), e
    }

    function d(e, t) {
        for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t)
    }

    function v() {
        return {
            debug: !1,
            ns: ["translation"],
            defaultNS: ["translation"],
            fallbackLng: ["dev"],
            fallbackNS: !1,
            whitelist: !1,
            load: "all",
            preload: !1,
            keySeparator: ".",
            nsSeparator: ":",
            pluralSeparator: "_",
            contextSeparator: "_",
            saveMissing: !1,
            saveMissingTo: "fallback",
            missingKeyHandler: !1,
            postProcess: !1,
            returnNull: !0,
            returnEmptyString: !0,
            returnObjects: !1,
            joinArrays: !1,
            returnedObjectHandler: function() {},
            parseMissingKeyHandler: !1,
            appendNamespaceToMissingKey: !1,
            overloadTranslationOptionHandler: function(e) {
                return {
                    defaultValue: e[1]
                }
            },
            interpolation: {
                escapeValue: !0,
                prefix: "{{",
                suffix: "}}",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                defaultVariables: void 0
            }
        }
    }

    function y(e) {
        return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && e.whitelist.indexOf("cimode") < 0 && e.whitelist.push("cimode"), e
    }
    var b = {};
    b["typeof"] = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }, b.classCallCheck = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, b["extends"] = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }, b.inherits = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }, b.possibleConstructorReturn = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }, b.slicedToArray = function() {
        function e(e, t) {
            var n = [],
                o = !0,
                r = !1,
                i = void 0;
            try {
                for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
            } catch (l) {
                r = !0, i = l
            } finally {
                try {
                    !o && a["return"] && a["return"]()
                } finally {
                    if (r) throw i
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    var m = {
        type: "logger",
        log: function(e) {
            this._output("log", e)
        },
        warn: function(e) {
            this._output("warn", e)
        },
        error: function(e) {
            this._output("error", e)
        },
        _output: function(e, t) {
            console && console[e] && console[e].apply(console, Array.prototype.slice.call(t))
        }
    }, x = function() {
            function e(t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                b.classCallCheck(this, e), this.subs = [], this.init(t, n)
            }
            return e.prototype.init = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                this.prefix = t.prefix || "i18next:", this.logger = e || m, this.options = t, this.debug = t.debug !== !1
            }, e.prototype.setDebug = function(e) {
                this.debug = e, this.subs.forEach(function(t) {
                    t.setDebug(e)
                })
            }, e.prototype.log = function() {
                this.forward(arguments, "log", "", !0)
            }, e.prototype.warn = function() {
                this.forward(arguments, "warn", "", !0)
            }, e.prototype.error = function() {
                this.forward(arguments, "error", "")
            }, e.prototype.deprecate = function() {
                this.forward(arguments, "warn", "WARNING DEPRECATED: ", !0)
            }, e.prototype.forward = function(e, t, n, o) {
                o && !this.debug || ("string" == typeof e[0] && (e[0] = n + this.prefix + " " + e[0]), this.logger[t](e))
            }, e.prototype.create = function(t) {
                var n = new e(this.logger, b["extends"]({
                    prefix: this.prefix + ":" + t + ":"
                }, this.options));
                return this.subs.push(n), n
            }, e
        }(),
        k = new x,
        S = function() {
            function e() {
                b.classCallCheck(this, e), this.observers = {}
            }
            return e.prototype.on = function(e, t) {
                var n = this;
                e.split(" ").forEach(function(e) {
                    n.observers[e] = n.observers[e] || [], n.observers[e].push(t)
                })
            }, e.prototype.off = function(e, t) {
                var n = this;
                this.observers[e] && this.observers[e].forEach(function() {
                    if (t) {
                        var o = n.observers[e].indexOf(t);
                        o > -1 && n.observers[e].splice(o, 1)
                    } else delete n.observers[e]
                })
            }, e.prototype.emit = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; t > o; o++) n[o - 1] = arguments[o];
                this.observers[e] && this.observers[e].forEach(function(e) {
                    e.apply(void 0, n)
                }), this.observers["*"] && this.observers["*"].forEach(function(t) {
                    var o;
                    t.apply(t, (o = [e]).concat.apply(o, n))
                })
            }, e
        }(),
        w = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        }, L = function(e) {
            function t() {
                var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    o = arguments.length <= 1 || void 0 === arguments[1] ? {
                        ns: ["translation"],
                        defaultNS: "translation"
                    } : arguments[1];
                b.classCallCheck(this, t);
                var r = b.possibleConstructorReturn(this, e.call(this));
                return r.data = n, r.options = o, r
            }
            return b.inherits(t, e), t.prototype.addNamespaces = function(e) {
                this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
            }, t.prototype.removeNamespaces = function(e) {
                var t = this.options.ns.indexOf(e);
                t > -1 && this.options.ns.splice(t, 1)
            }, t.prototype.getResource = function(e, t, n) {
                var o = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3],
                    r = o.keySeparator || this.options.keySeparator;
                void 0 === r && (r = ".");
                var s = [e, t];
                return n && "string" != typeof n && (s = s.concat(n)), n && "string" == typeof n && (s = s.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && (s = e.split(".")), i(this.data, s)
            }, t.prototype.addResource = function(e, t, n, r) {
                var i = arguments.length <= 4 || void 0 === arguments[4] ? {
                    silent: !1
                } : arguments[4],
                    s = this.options.keySeparator;
                void 0 === s && (s = ".");
                var a = [e, t];
                n && (a = a.concat(s ? n.split(s) : n)), e.indexOf(".") > -1 && (a = e.split("."), r = t, t = a[1]), this.addNamespaces(t), o(this.data, a, r), i.silent || this.emit("added", e, t, n, r)
            }, t.prototype.addResources = function(e, t, n) {
                for (var o in n) "string" == typeof n[o] && this.addResource(e, t, o, n[o], {
                    silent: !0
                });
                this.emit("added", e, t, n)
            }, t.prototype.addResourceBundle = function(e, t, n, r, a) {
                var l = [e, t];
                e.indexOf(".") > -1 && (l = e.split("."), r = n, n = t, t = l[1]), this.addNamespaces(t);
                var u = i(this.data, l) || {};
                r ? s(u, n, a) : u = b["extends"]({}, u, n), o(this.data, l, u), this.emit("added", e, t, n)
            }, t.prototype.removeResourceBundle = function(e, t) {
                this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
            }, t.prototype.hasResourceBundle = function(e, t) {
                return void 0 !== this.getResource(e, t)
            }, t.prototype.getResourceBundle = function(e, t) {
                return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? b["extends"]({}, this.getResource(e, t)) : this.getResource(e, t)
            }, t.prototype.toJSON = function() {
                return this.data
            }, t
        }(S),
        N = {
            processors: {},
            addPostProcessor: function(e) {
                this.processors[e.name] = e
            },
            handle: function(e, t, n, o, r) {
                var i = this;
                return e.forEach(function(e) {
                    i.processors[e] && (t = i.processors[e].process(t, n, o, r))
                }), t
            }
        }, O = function(e) {
            function n(o) {
                var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                b.classCallCheck(this, n);
                var i = b.possibleConstructorReturn(this, e.call(this));
                return t(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector"], o, i), i.options = r, i.logger = k.create("translator"), i
            }
            return b.inherits(n, e), n.prototype.changeLanguage = function(e) {
                e && (this.language = e)
            }, n.prototype.exists = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {
                    interpolation: {}
                } : arguments[1];
                return "v1" === this.options.compatibilityAPI && (t = f(t)), void 0 !== this.resolve(e, t)
            }, n.prototype.extractFromKey = function(e, t) {
                var n = t.nsSeparator || this.options.nsSeparator;
                void 0 === n && (n = ":");
                var o = t.ns || this.options.defaultNS;
                if (n && e.indexOf(n) > -1) {
                    var r = e.split(n);
                    o = r[0], e = r[1]
                }
                return "string" == typeof o && (o = [o]), {
                    key: e,
                    namespaces: o
                }
            }, n.prototype.translate = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if ("object" !== ("undefined" == typeof t ? "undefined" : b["typeof"](t)) ? t = this.options.overloadTranslationOptionHandler(arguments) : "v1" === this.options.compatibilityAPI && (t = f(t)), void 0 === e || null === e || "" === e) return "";
                "number" == typeof e && (e = String(e)), "string" == typeof e && (e = [e]);
                var n = t.lng || this.language;
                if (n && "cimode" === n.toLowerCase()) return e[e.length - 1];
                var o = t.keySeparator || this.options.keySeparator || ".",
                    r = this.extractFromKey(e[e.length - 1], t),
                    i = r.key,
                    s = r.namespaces,
                    a = s[s.length - 1],
                    l = this.resolve(e, t),
                    u = Object.prototype.toString.apply(l),
                    c = ["[object Number]", "[object Function]", "[object RegExp]"],
                    p = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays;
                if (l && "string" != typeof l && c.indexOf(u) < 0 && (!p || "[object Array]" !== u)) {
                    if (!t.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(i, l, t) : "key '" + i + " (" + this.language + ")' returned an object instead of string.";
                    var h = "[object Array]" === u ? [] : {};
                    for (var g in l) h[g] = this.translate("" + i + o + g, b["extends"]({
                        joinArrays: !1,
                        ns: s
                    }, t));
                    l = h
                } else if (p && "[object Array]" === u) l = l.join(p), l && (l = this.extendTranslation(l, i, t));
                else {
                    var d = !1,
                        v = !1;
                    if (!this.isValidLookup(l) && t.defaultValue && (d = !0, l = t.defaultValue), this.isValidLookup(l) || (v = !0, l = i), (v || d) && (this.logger.log("missingKey", n, a, i, l), this.options.saveMissing)) {
                        var y = [];
                        if ("fallback" === this.options.saveMissingTo && this.options.fallbackLng && this.options.fallbackLng[0])
                            for (var m = 0; m < this.options.fallbackLng.length; m++) y.push(this.options.fallbackLng[m]);
                        else "all" === this.options.saveMissingTo ? y = this.languageUtils.toResolveHierarchy(t.lng || this.language) : y.push(t.lng || this.language);
                        this.options.missingKeyHandler ? this.options.missingKeyHandler(y, a, i, l) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(y, a, i, l), this.emit("missingKey", y, a, i, l)
                    }
                    l = this.extendTranslation(l, i, t), v && l === i && this.options.appendNamespaceToMissingKey && (l = a + ":" + i), v && this.options.parseMissingKeyHandler && (l = this.options.parseMissingKeyHandler(l))
                }
                return l
            }, n.prototype.extendTranslation = function(e, t, n) {
                var o = this;
                n.interpolation && this.interpolator.init(n);
                var r = n.replace && "string" != typeof n.replace ? n.replace : n;
                this.options.interpolation.defaultVariables && (r = b["extends"]({}, this.options.interpolation.defaultVariables, r)), e = this.interpolator.interpolate(e, r), e = this.interpolator.nest(e, function() {
                    for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                    return o.translate.apply(o, t)
                }, n), n.interpolation && this.interpolator.reset();
                var i = n.postProcess || this.options.postProcess,
                    s = "string" == typeof i ? [i] : i;
                return void 0 !== e && s && s.length && n.applyPostProcessor !== !1 && (e = N.handle(s, e, t, n, this)), e
            }, n.prototype.resolve = function(e) {
                var t = this,
                    n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    o = void 0;
                return "string" == typeof e && (e = [e]), e.forEach(function(e) {
                    if (!t.isValidLookup(o)) {
                        var r = t.extractFromKey(e, n),
                            i = r.key,
                            s = r.namespaces;
                        t.options.fallbackNS && (s = s.concat(t.options.fallbackNS));
                        var a = void 0 !== n.count && "string" != typeof n.count,
                            l = void 0 !== n.context && "string" == typeof n.context && "" !== n.context,
                            u = n.lngs ? n.lngs : t.languageUtils.toResolveHierarchy(n.lng || t.language);
                        s.forEach(function(e) {
                            t.isValidLookup(o) || u.forEach(function(r) {
                                if (!t.isValidLookup(o)) {
                                    var s = i,
                                        u = [s],
                                        c = void 0;
                                    a && (c = t.pluralResolver.getSuffix(r, n.count)), a && l && u.push(s + c), l && u.push(s += "" + t.options.contextSeparator + n.context), a && u.push(s += c);
                                    for (var p = void 0; p = u.pop();) t.isValidLookup(o) || (o = t.getResource(r, e, p, n))
                                }
                            })
                        })
                    }
                }), o
            }, n.prototype.isValidLookup = function(e) {
                return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
            }, n.prototype.getResource = function(e, t, n) {
                var o = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                return this.resourceStore.getResource(e, t, n, o)
            }, n
        }(S),
        C = function() {
            function e(t) {
                b.classCallCheck(this, e), this.options = t, this.whitelist = this.options.whitelist || !1, this.logger = k.create("languageUtils")
            }
            return e.prototype.getLanguagePartFromCode = function(e) {
                if (e.indexOf("-") < 0) return e;
                var t = ["nb-NO", "nn-NO", "nb-no", "nn-no"],
                    n = e.split("-");
                return this.formatLanguageCode(t.indexOf(e) > -1 ? n[1].toLowerCase() : n[0])
            }, e.prototype.formatLanguageCode = function(e) {
                if ("string" == typeof e && e.indexOf("-") > -1) {
                    var t = e.split("-"),
                        n = b.slicedToArray(t, 2),
                        o = n[0],
                        r = n[1];
                    return this.options.lowerCaseLng ? o.toLowerCase() + "-" + r.toLowerCase() : o.toLowerCase() + "-" + r.toUpperCase()
                }
                return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
            }, e.prototype.isWhitelisted = function(e) {
                return "languageOnly" === this.options.load && (e = this.getLanguagePartFromCode(e)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(e) > -1
            }, e.prototype.toResolveHierarchy = function(e, t) {
                var n = this;
                t = t || this.options.fallbackLng || [], "string" == typeof t && (t = [t]);
                var o = [],
                    r = function(e) {
                        n.isWhitelisted(e) ? o.push(e) : n.logger.warn("rejecting non-whitelisted language code: " + e)
                    };
                return "string" == typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)), "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) : "string" == typeof e && r(this.formatLanguageCode(e)), t.forEach(function(e) {
                    o.indexOf(e) < 0 && r(n.formatLanguageCode(e))
                }), o
            }, e
        }(),
        R = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "tg", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "es_ar", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "he", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt", "pt_br", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {
            lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4
        }, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {
            lngs: ["cs", "sk"],
            nr: [1, 2, 5],
            fc: 6
        }, {
            lngs: ["csb", "pl"],
            nr: [1, 2, 5],
            fc: 7
        }, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {
            lngs: ["fr"],
            nr: [1, 2],
            fc: 9
        }, {
            lngs: ["ga"],
            nr: [1, 2, 3, 7, 11],
            fc: 10
        }, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {
            lngs: ["is"],
            nr: [1, 2],
            fc: 12
        }, {
            lngs: ["jv"],
            nr: [0, 1],
            fc: 13
        }, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {
            lngs: ["lt"],
            nr: [1, 2, 10],
            fc: 15
        }, {
            lngs: ["lv"],
            nr: [1, 2, 0],
            fc: 16
        }, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {
            lngs: ["mnk"],
            nr: [0, 1, 2],
            fc: 18
        }, {
            lngs: ["mt"],
            nr: [1, 2, 11, 20],
            fc: 19
        }, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {
            lngs: ["ro"],
            nr: [1, 2, 20],
            fc: 20
        }, {
            lngs: ["sl"],
            nr: [5, 1, 2, 3],
            fc: 21
        }],
        j = {
            1: function(e) {
                return Number(e > 1)
            },
            2: function(e) {
                return Number(1 != e)
            },
            3: function(e) {
                return 0
            },
            4: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
            },
            5: function(e) {
                return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5)
            },
            6: function(e) {
                return Number(1 == e ? 0 : e >= 2 && 4 >= e ? 1 : 2)
            },
            7: function(e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
            },
            8: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
            },
            9: function(e) {
                return Number(e >= 2)
            },
            10: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 7 > e ? 2 : 11 > e ? 3 : 4)
            },
            11: function(e) {
                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && 20 > e ? 2 : 3)
            },
            12: function(e) {
                return Number(e % 10 != 1 || e % 100 == 11)
            },
            13: function(e) {
                return Number(0 !== e)
            },
            14: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
            },
            15: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
            },
            16: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
            },
            17: function(e) {
                return Number(1 == e || e % 10 == 1 ? 0 : 1)
            },
            18: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2)
            },
            19: function(e) {
                return Number(1 == e ? 0 : 0 === e || e % 100 > 1 && 11 > e % 100 ? 1 : e % 100 > 10 && 20 > e % 100 ? 2 : 3)
            },
            20: function(e) {
                return Number(1 == e ? 0 : 0 === e || e % 100 > 0 && 20 > e % 100 ? 1 : 2)
            },
            21: function(e) {
                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
            }
        }, P = function() {
            function e(t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                b.classCallCheck(this, e), this.languageUtils = t, this.options = n, this.logger = k.create("pluralResolver"), this.rules = g()
            }
            return e.prototype.addRule = function(e, t) {
                this.rules[e] = t
            }, e.prototype.getRule = function(e) {
                return this.rules[this.languageUtils.getLanguagePartFromCode(e)]
            }, e.prototype.needsPlural = function(e) {
                var t = this.getRule(e);
                return !(t && t.numbers.length <= 1)
            }, e.prototype.getSuffix = function(e, t) {
                var n = this.getRule(e);
                if (n) {
                    if (1 === n.numbers.length) return "";
                    var o = n.noAbs ? n.plurals(t) : n.plurals(Math.abs(t)),
                        r = n.numbers[o];
                    if (2 === n.numbers.length && 1 === n.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = "")), "v1" === this.options.compatibilityJSON) {
                        if (1 === r) return "";
                        if ("number" == typeof r) return "_plural_" + r.toString()
                    }
                    return this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
                }
                return this.logger.warn("no plural rule found for: " + e), ""
            }, e
        }(),
        E = function() {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                b.classCallCheck(this, t), this.logger = k.create("interpolator"), this.init(e, !0)
            }
            return t.prototype.init = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = arguments[1];
                t && (this.options = e), e.interpolation || (e.interpolation = {
                    escapeValue: !0
                });
                var n = e.interpolation;
                this.escapeValue = n.escapeValue, this.prefix = n.prefix ? a(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? a(n.suffix) : n.suffixEscaped || "}}", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? a(n.nestingPrefix) : n.nestingPrefixEscaped || a("$t("), this.nestingSuffix = n.nestingSuffix ? a(n.nestingSuffix) : n.nestingSuffixEscaped || a(")");
                var o = this.prefix + "(.+?)" + this.suffix;
                this.regexp = new RegExp(o, "g");
                var r = this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix;
                this.regexpUnescape = new RegExp(r, "g");
                var i = this.nestingPrefix + "(.+?)" + this.nestingSuffix;
                this.nestingRegexp = new RegExp(i, "g")
            }, t.prototype.reset = function() {
                this.options && this.init(this.options)
            }, t.prototype.interpolate = function(t, n) {
                function o(e) {
                    return e.replace(/\$/g, "$$$$")
                }
                for (var r = void 0, s = void 0; r = this.regexpUnescape.exec(t);) {
                    var a = i(n, r[1].trim());
                    t = t.replace(r[0], a)
                }
                for (; r = this.regexp.exec(t);) s = i(n, r[1].trim()), "string" != typeof s && (s = e(s)), s || (this.logger.warn("missed to pass in variable " + r[1] + " for interpolating " + t), s = ""), s = o(this.escapeValue ? l(s) : s), t = t.replace(r[0], s), this.regexp.lastIndex = 0;
                return t
            }, t.prototype.nest = function(t, n) {
                function o(e) {
                    return e.replace(/\$/g, "$$$$")
                }

                function r(e) {
                    if (e.indexOf(",") < 0) return e;
                    var t = e.split(",");
                    e = t.shift();
                    var n = t.join(",");
                    n = this.interpolate(n, u);
                    try {
                        u = JSON.parse(n)
                    } catch (o) {
                        this.logger.error("failed parsing options string in nesting for key " + e, o)
                    }
                    return e
                }
                var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                    s = void 0,
                    a = void 0,
                    u = JSON.parse(JSON.stringify(i));
                for (u.applyPostProcessor = !1; s = this.nestingRegexp.exec(t);) a = n(r.call(this, s[1].trim()), u), "string" != typeof a && (a = e(a)), a || (this.logger.warn("missed to pass in variable " + s[1] + " for interpolating " + t), a = ""), a = o(this.escapeValue ? l(a) : a), t = t.replace(s[0], a), this.regexp.lastIndex = 0;
                return t
            }, t
        }(),
        _ = function(e) {
            function t(n, o, r) {
                var i = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                b.classCallCheck(this, t);
                var s = b.possibleConstructorReturn(this, e.call(this));
                return s.backend = n, s.store = o, s.services = r, s.options = i, s.logger = k.create("backendConnector"), s.state = {}, s.queue = [], s.backend && s.backend.init && s.backend.init(r, i.backend, i), s
            }
            return b.inherits(t, e), t.prototype.queueLoad = function(e, t, n) {
                var o = this,
                    r = [],
                    i = [],
                    s = [],
                    a = [];
                return e.forEach(function(e) {
                    var n = !0;
                    t.forEach(function(t) {
                        var s = e + "|" + t;
                        o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? i.indexOf(s) < 0 && i.push(s) : (o.state[s] = 1, n = !1, i.indexOf(s) < 0 && i.push(s), r.indexOf(s) < 0 && r.push(s), a.indexOf(t) < 0 && a.push(t)))
                    }), n || s.push(e)
                }), (r.length || i.length) && this.queue.push({
                    pending: i,
                    loaded: {},
                    errors: [],
                    callback: n
                }), {
                    toLoad: r,
                    pending: i,
                    toLoadLanguages: s,
                    toLoadNamespaces: a
                }
            }, t.prototype.loaded = function(e, t, n) {
                var o = this,
                    i = e.split("|"),
                    s = b.slicedToArray(i, 2),
                    a = s[0],
                    l = s[1];
                t && this.emit("failedLoading", a, l, t), n && this.store.addResourceBundle(a, l, n), this.state[e] = t ? -1 : 2, this.queue.forEach(function(n) {
                    r(n.loaded, [a], l), d(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (n.errors.length ? n.callback(n.errors) : n.callback(), o.emit("loaded", n.loaded), n.done = !0)
                }), this.queue = this.queue.filter(function(e) {
                    return !e.done
                })
            }, t.prototype.read = function(e, t, n, o, r, i) {
                var s = this;
                return o || (o = 0), r || (r = 250), e.length ? void this.backend[n](e, t, function(a, l) {
                    return a && l && 5 > o ? void setTimeout(function() {
                        s.read.call(s, e, t, n, ++o, 2 * r, i)
                    }, r) : void i(a, l)
                }) : i(null, {})
            }, t.prototype.load = function(e, t, n) {
                var o = this;
                if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
                var r = b["extends"]({}, this.backend.options, this.options.backend);
                "string" == typeof e && (e = this.services.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                var s = this.queueLoad(e, t, n);
                return s.toLoad.length ? void(r.allowMultiLoading && this.backend.readMulti ? this.read(s.toLoadLanguages, s.toLoadNamespaces, "readMulti", null, null, function(e, t) {
                    e && o.logger.warn("loading namespaces " + s.toLoadNamespaces.join(", ") + " for languages " + s.toLoadLanguages.join(", ") + " via multiloading failed", e), !e && t && o.logger.log("loaded namespaces " + s.toLoadNamespaces.join(", ") + " for languages " + s.toLoadLanguages.join(", ") + " via multiloading", t), s.toLoad.forEach(function(n) {
                        var r = n.split("|"),
                            s = b.slicedToArray(r, 2),
                            a = s[0],
                            l = s[1],
                            u = i(t, [a, l]);
                        if (u) o.loaded(n, e, u);
                        else {
                            var c = "loading namespace " + l + " for language " + a + " via multiloading failed";
                            o.loaded(n, c), o.logger.error(c)
                        }
                    })
                }) : ! function() {
                    var e = function(e) {
                        var t = this,
                            n = e.split("|"),
                            o = b.slicedToArray(n, 2),
                            r = o[0],
                            i = o[1];
                        this.read(r, i, "read", null, null, function(n, o) {
                            n && t.logger.warn("loading namespace " + i + " for language " + r + " failed", n), !n && o && t.logger.log("loaded namespace " + i + " for language " + r, o), t.loaded(e, n, o)
                        })
                    };
                    s.toLoad.forEach(function(t) {
                        e.call(o, t)
                    })
                }()) : void(s.pending.length || n())
            }, t.prototype.saveMissing = function(e, t, n, o) {
                this.backend && this.backend.create && this.backend.create(e, t, n, o), this.store.addResource(e[0], t, n, o)
            }, t
        }(S),
        T = function(e) {
            function t(n, o, r) {
                var i = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                b.classCallCheck(this, t);
                var s = b.possibleConstructorReturn(this, e.call(this));
                return s.cache = n, s.store = o, s.services = r, s.options = i, s.logger = k.create("cacheConnector"), s.cache && s.cache.init && s.cache.init(r, i.cache, i), s
            }
            return b.inherits(t, e), t.prototype.load = function(e, t, n) {
                var o = this;
                if (!this.cache) return n && n();
                var r = b["extends"]({}, this.cache.options, this.options.cache);
                "string" == typeof e && (e = this.services.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]), r.enabled ? this.cache.load(e, function(t, r) {
                    if (t && o.logger.error("loading languages " + e.join(", ") + " from cache failed", t), r)
                        for (var i in r)
                            for (var s in r[i])
                                if ("i18nStamp" !== s) {
                                    var a = r[i][s];
                                    a && o.store.addResourceBundle(i, s, a)
                                }
                    n && n()
                }) : n && n()
            }, t.prototype.save = function() {
                this.cache && this.options.cache && this.options.cache.enabled && this.cache.save(this.store.data)
            }, t
        }(S),
        A = function(e) {
            function t() {
                var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    o = arguments[1];
                b.classCallCheck(this, t);
                var r = b.possibleConstructorReturn(this, e.call(this));
                return r.options = y(n), r.services = {}, r.logger = k, r.modules = {}, o && !r.isInitialized && r.init(n, o), r
            }
            return b.inherits(t, e), t.prototype.init = function(e, t) {
                function n(e) {
                    return e ? "function" == typeof e ? new e : e : void 0
                }
                var o = this;
                if ("function" == typeof e && (t = e, e = {}), e || (e = {}), "v1" === e.compatibilityAPI ? this.options = b["extends"]({}, v(), y(c(e)), {}) : "v1" === e.compatibilityJSON ? this.options = b["extends"]({}, v(), y(p(e)), {}) : this.options = b["extends"]({}, v(), this.options, y(e)), t || (t = function() {}), !this.options.isClone) {
                    this.modules.logger ? k.init(n(this.modules.logger), this.options) : k.init(null, this.options);
                    var r = new C(this.options);
                    this.store = new L(this.options.resources, this.options);
                    var i = this.services;
                    i.logger = k, i.resourceStore = this.store, i.resourceStore.on("added removed", function(e, t) {
                        i.cacheConnector.save()
                    }), i.languageUtils = r, i.pluralResolver = new P(r, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON
                    }), i.interpolator = new E(this.options), i.backendConnector = new _(n(this.modules.backend), i.resourceStore, i, this.options), i.backendConnector.on("*", function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
                        o.emit.apply(o, [e].concat(n))
                    }), i.backendConnector.on("loaded", function(e) {
                        i.cacheConnector.save()
                    }), i.cacheConnector = new T(n(this.modules.cache), i.resourceStore, i, this.options), i.cacheConnector.on("*", function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
                        o.emit.apply(o, [e].concat(n))
                    }), this.modules.languageDetector && (i.languageDetector = n(this.modules.languageDetector), i.languageDetector.init(i, this.options.detection, this.options)), this.translator = new O(this.services, this.options), this.translator.on("*", function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
                        o.emit.apply(o, [e].concat(n))
                    })
                }
                var s = ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle"];
                return s.forEach(function(e) {
                    o[e] = function() {
                        return this.store[e].apply(this.store, arguments)
                    }
                }), "v1" === this.options.compatibilityAPI && h(this), this.changeLanguage(this.options.lng, function(e, n) {
                    o.emit("initialized", o.options), o.logger.log("initialized", o.options), t(e, n)
                }), this
            }, t.prototype.loadResources = function(e) {
                var t = this;
                if (e || (e = function() {}), this.options.resources) e(null);
                else {
                    var n = function() {
                        if (t.language && "cimode" === t.language.toLowerCase()) return {
                            v: e()
                        };
                        var n = [],
                            o = function(e) {
                                var o = t.services.languageUtils.toResolveHierarchy(e);
                                o.forEach(function(e) {
                                    n.indexOf(e) < 0 && n.push(e)
                                })
                            };
                        o(t.language), t.options.preload && t.options.preload.forEach(function(e) {
                            o(e)
                        }), t.services.cacheConnector.load(n, t.options.ns, function() {
                            t.services.backendConnector.load(n, t.options.ns, e)
                        })
                    }();
                    if ("object" === ("undefined" == typeof n ? "undefined" : b["typeof"](n))) return n.v
                }
            }, t.prototype.use = function(e) {
                return "backend" === e.type && (this.modules.backend = e), "cache" === e.type && (this.modules.cache = e), ("logger" === e.type || e.log && e.warn && e.warn) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "postProcessor" === e.type && N.addPostProcessor(e), this
            }, t.prototype.changeLanguage = function(e, t) {
                var n = this,
                    o = function(o) {
                        e && (n.emit("languageChanged", e), n.logger.log("languageChanged", e)), t && t(o, function() {
                            for (var e = arguments.length, t = Array(e), o = 0; e > o; o++) t[o] = arguments[o];
                            return n.t.apply(n, t)
                        })
                    };
                !e && this.services.languageDetector && (e = this.services.languageDetector.detect()), e && (this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.translator.changeLanguage(e), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage(e)), this.loadResources(function(e) {
                    o(e)
                })
            }, t.prototype.getFixedT = function(e, t) {
                var n = this,
                    o = function r(e, t) {
                        return t = t || {}, t.lng = t.lng || r.lng, t.ns = t.ns || r.ns, n.t(e, t)
                    };
                return o.lng = e, o.ns = t, o
            }, t.prototype.t = function() {
                return this.translator && this.translator.translate.apply(this.translator, arguments)
            }, t.prototype.exists = function() {
                return this.translator && this.translator.exists.apply(this.translator, arguments)
            }, t.prototype.setDefaultNamespace = function(e) {
                this.options.defaultNS = e
            }, t.prototype.loadNamespaces = function(e, t) {
                var n = this;
                return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(function(e) {
                    n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                }), void this.loadResources(t)) : t && t()
            }, t.prototype.loadLanguages = function(e, t) {
                "string" == typeof e && (e = [e]);
                var n = this.options.preload || [],
                    o = e.filter(function(e) {
                        return n.indexOf(e) < 0
                    });
                return o.length ? (this.options.preload = n.concat(o), void this.loadResources(t)) : t()
            }, t.prototype.dir = function(e) {
                e || (e = this.language);
                var t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"];
                return t.indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) ? "ltr" : "rtl";
            }, t.prototype.createInstance = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    n = arguments[1];
                return new t(e, n)
            }, t.prototype.cloneInstance = function() {
                var e = this,
                    n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    o = arguments[1],
                    r = new t(b["extends"]({}, n, this.options, {
                        isClone: !0
                    }), o),
                    i = ["store", "translator", "services", "language"];
                return i.forEach(function(t) {
                    r[t] = e[t]
                }), r
            }, t
        }(S),
        M = new A;
    return M
});