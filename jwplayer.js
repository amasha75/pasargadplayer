function tavoos_init_player(t, e = "", n, r = "", i = !1, o = !1) {
    var a;
    if ("" !== t)
        return (
            (a = { client: "/vast.js", admessage: "اتمام نمایش تبلیغ تا xx ثانیه دیگر", cuetext: "تبلیغ", skipmessage: "xx ثانیه", skiptext: "رد آگهی", requestTimeout: 7e3 }),
            o ? (a.schedule = r.toString()) : (a.tag = r.toString()),
            jwplayer(t).setup({
                key: "iLrOb7wp7Dd43sKXxKN21pHkQpH6p1I5Tn3G/xc4ZDnFMfCcnn1nUQ==",
                playbackRateControls: !0,
                timeSliderAbove: !0,
                width: "100%",
                mute: !1,
                autostart: i,
                aspectratio: "16:9",
                playlist: [{ image: e, sources: n }],
                skin: { active: "#ed145b", controlbar: { iconsActive: "rgb(234, 30, 101)", icons: "#fff" }, timeslider: { progress: "rgb(234, 30, 101)", rail: "#ccc" } },
                advertising: a,
                plugins: { tavoos_jwplayer_plugins: {} },
            })
        );
}
void 0 === window.tavoos_jwplayer_obj && (window.tavoos_jwplayer_obj = {}),
    (function () {
        var f,
            d,
            c,
            n = {
                696: function (t, e) {
                    "use strict";
                    e.Z = {
                        advertising: {
                            admessage: "اتمام نمایش تبلیغ تا xx ثانیه دیگر",
                            cuetext: "تبلیغ",
                            displayHeading: "تبلیغ",
                            loadingAd: "بارگذاری تبلیغ",
                            podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
                            skipmessage: "رد تبلیغ xx",
                            skiptext: "رد تبلیغ",
                        },
                        airplay: "AirPlay",
                        audioTracks: "آهنگ های صوتی",
                        auto: "Auto",
                        buffer: "بارگذاری",
                        cast: "کروم کست",
                        cc: "زیر نویس",
                        close: "بستن",
                        errors: {
                            badConnection: "این ویدیو نمیتواند به دلیل مشکل اتصال اینترنتی شما پخش شود.",
                            cantLoadPlayer: "با عرض پوزش، پخش کننده ویدیویی بارگیری نشد",
                            cantPlayInBrowser: "این ویدیو را نمی توان در این مرورگر پخش کرد.",
                            cantPlayVideo: "این فایل ویدئویی قابل پخش نیست",
                            errorCode: "کد خطا",
                            liveStreamDown: "پخش زنده یا قطع است و یا پایان یافته است.",
                            protectedContent: "مشکلی در دسترسی به محتوای محافظت شده وجود داشت.",
                            technicalError: "این ویدیو را نمی توان به دلیل یک خطای فنی پخش کرد.",
                        },
                        exitFullscreen: "خروج از حالت تمام صفحه",
                        fullscreen: "تمام صفحه",
                        hd: "کیفیت",
                        liveBroadcast: "پخش زنده",
                        logo: "لوگو",
                        mute: "بی صدا",
                        next: "بعدی",
                        nextUp: "ویدیوی بعدی",
                        notLive: "زنده نیست",
                        off: "خاموش",
                        pause: "توقف",
                        pipIcon: "مینی پلیر",
                        play: "پخش",
                        playback: "شروع به پخش",
                        playbackRates: "سرعت پخش",
                        player: "پخش کننده ویدیو",
                        poweredBy: "طراحی شده توسط",
                        prev: "قبلی",
                        related: { autoplaymessage: "شروع پخش ویدیوی بعدی در xx ثانیه دیگر", heading: "ویدیوهای بیشتر" },
                        replay: "بازپخش",
                        rewind: "از 10 ثانیه قبل",
                        settings: "تنظیمات",
                        sharing: { copied: "کپی شد", email: "ایمیل", embed: "کد امبد", heading: "اشتراک گذاری", link: "لینک" },
                        slider: "جستجو",
                        stop: "توقف",
                        unmute: "وصل صدا",
                        videoInfo: "درباره این ویدیو",
                        volume: "میزان صدا",
                        volumeSlider: "میزان صدا",
                        shortcuts: {
                            playPause: "پخش/توقف",
                            volumeToggle: "بی صدا/با صدا",
                            fullscreenToggle: "تمام صفحه/خروج از حالت تمام صفحه",
                            seekPercent: "پرش %",
                            keyboardShortcuts: "میانبرهای صفحه کلید",
                            increaseVolume: "افزایش صدا",
                            decreaseVolume: "کاهش صدا",
                            seekForward: "پرش به جلو",
                            seekBackward: "پرش به عقب",
                            spacebar: "SPACE",
                            captionsToggle: "زیرنویس روشن/خاموش",
                        },
                        captionsStyles: {
                            subtitleSettings: "Subtitle Settings",
                            color: "Font Color",
                            fontOpacity: "Font Opacity",
                            userFontScale: "Font Size",
                            fontFamily: "Font Family",
                            edgeStyle: "Character Edge",
                            backgroundColor: "Background Color",
                            backgroundOpacity: "Background Opacity",
                            windowColor: "Window Color",
                            windowOpacity: "Window Opacity",
                            white: "White",
                            black: "Black",
                            red: "Red",
                            green: "Green",
                            blue: "Blue",
                            yellow: "Yellow",
                            magenta: "Magenta",
                            cyan: "Cyan",
                            none: "None",
                            raised: "Raised",
                            depressed: "Depressed",
                            uniform: "Uniform",
                            dropShadow: "Drop Shadow",
                        },
                        disabled: "Disabled",
                        enabled: "Enabled",
                        reset: "Reset",
                    };
                },
                9128: function (t, e, n) {
                    "use strict";
                    function r(n, t, o) {
                        var a = [],
                            u = {};
                        function c() {
                            for (; 0 < a.length; ) {
                                var t = a.shift(),
                                    e = t.command,
                                    t = t.args;
                                (u[e] || n[e]).apply(n, t);
                            }
                        }
                        t.forEach(function (r) {
                            var i = n[r];
                            (u[r] = i),
                                (n[r] = function () {
                                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                    o() ? a.push({ command: r, args: e }) : (c(), i && i.apply(this, e));
                                });
                        }),
                            Object.defineProperty(this, "queue", {
                                enumerable: !0,
                                get: function () {
                                    return a;
                                },
                            }),
                            (this.flush = c),
                            (this.empty = function () {
                                a.length = 0;
                            }),
                            (this.off = function () {
                                t.forEach(function (t) {
                                    var e = u[t];
                                    e && ((n[t] = e), delete u[t]);
                                });
                            }),
                            (this.destroy = function () {
                                this.off(), this.empty();
                            });
                    }
                    n.d(e, {
                        Z: function () {
                            return r;
                        },
                    });
                },
                4742: function (t, e) {
                    "use strict";
                    e.Z = { debug: !1 };
                },
                5191: function (t, e, n) {
                    "use strict";
                    function r(t) {
                        return (t = t.slice && "px" === t.slice(-2) ? t.slice(0, -2) : t);
                    }
                    function i(t, e) {
                        if (-1 === e.toString().indexOf("%")) return 0;
                        if ("string" != typeof t || !t) return 0;
                        if (/^\d*\.?\d+%$/.test(t)) return t;
                        e = t.indexOf(":");
                        if (-1 === e) return 0;
                        var n = parseFloat(t.substr(0, e)),
                            t = parseFloat(t.substr(e + 1));
                        return n <= 0 || t <= 0 ? 0 : (t / n) * 100 + "%";
                    }
                    n.d(e, {
                        a: function () {
                            return r;
                        },
                        R: function () {
                            return i;
                        },
                    });
                },
                5083: function (t, e, o) {
                    "use strict";
                    o.d(e, {
                        ke: function () {
                            return p;
                        },
                        G0: function () {
                            return h;
                        },
                    });
                    var a = o(6042),
                        u = o(5191),
                        c = o(1569),
                        s = o(9888),
                        l = o(8348),
                        f = o(696),
                        d = o(8518),
                        p = {
                            autoPause: { viewability: !1, pauseAds: !1 },
                            autostart: !1,
                            allowFullscreen: !0,
                            bandwidthEstimate: null,
                            bitrateSelection: null,
                            castAvailable: !1,
                            controls: !0,
                            cues: [],
                            defaultPlaybackRate: 1,
                            displaydescription: !0,
                            displaytitle: !0,
                            displayPlaybackLabel: !1,
                            enableShortcuts: !0,
                            height: 360,
                            intl: {},
                            item: 0,
                            language: "en",
                            liveTimeout: null,
                            localization: f.Z,
                            mute: !1,
                            nextUpDisplay: !0,
                            playbackRateControls: !1,
                            playbackRates: [0.5, 1, 1.25, 1.5, 2],
                            renderCaptionsNatively: !1,
                            repeat: !1,
                            stretching: "uniform",
                            volume: 90,
                            width: 640,
                        };
                    function h(t) {
                        return t < 5 ? 5 : t;
                    }
                    e.ZP = function (t, e) {
                        var n,
                            e = (0, a.l7)({}, (window.jwplayer || {}).defaults, e, t),
                            t =
                                ((n = e),
                                Object.keys(n).forEach(function (t) {
                                    "id" !== t && (n[t] = (0, s.serialize)(n[t]));
                                }),
                                e.forceLocalizationDefaults ? p.language : (0, d.G3)()),
                            r = (0, d.tK)(e.intl),
                            i = ((e.localization = (0, d.Mh)(f.Z, (0, d.Pm)(e, r, t))), (0, a.l7)({}, p, e)),
                            t =
                                ("." === i.base && (i.base = (0, c.getScriptPath)("jwplayer.js")),
                                (i.base = (i.base || (0, c.loadFrom)()).replace(/\/?$/, "/")),
                                (o.p = i.base),
                                (i.width = (0, u.a)(i.width)),
                                (i.height = (0, u.a)(i.height)),
                                (i.aspectratio = (0, u.R)(i.aspectratio, i.width)),
                                (i.volume = (0, a.qh)(i.volume) ? Math.min(Math.max(0, i.volume), 100) : p.volume),
                                (i.mute = !!i.mute),
                                (i.language = t),
                                (i.intl = r),
                                i.playlistIndex),
                            r = (t && (i.item = t), (0, a.hj)(i.item) || (i.item = 0), e.autoPause),
                            t = (r && (i.autoPause.viewability = !("viewability" in r && !r.viewability)), i.playbackRateControls),
                            r =
                                (t &&
                                    ((e = i.playbackRates),
                                    (e = (e = Array.isArray(t) ? t : e)
                                        .filter(function (t) {
                                            return (0, a.hj)(t) && 0.25 <= t && t <= 4;
                                        })
                                        .map(function (t) {
                                            return Math.round(100 * t) / 100;
                                        })).indexOf(1) < 0 && e.push(1),
                                    e.sort(),
                                    (i.playbackRateControls = !0),
                                    (i.playbackRates = e)),
                                (!i.playbackRateControls || i.playbackRates.indexOf(i.defaultPlaybackRate) < 0) && (i.defaultPlaybackRate = 1),
                                (i.playbackRate = i.defaultPlaybackRate),
                                i.aspectratio || delete i.aspectratio,
                                i.playlist),
                            e =
                                (r
                                    ? Array.isArray(r.playlist) && ((i.feedData = r), (i.playlist = r.playlist))
                                    : ((t = (0, a.ei)(i, ["title", "description", "type", "mediaid", "image", "images", "file", "sources", "tracks", "preload", "duration"])), (i.playlist = [t])),
                                (i.qualityLabels = i.qualityLabels || i.hlslabels),
                                delete i.duration,
                                i.liveTimeout);
                        null !== e && ((0, a.qh)(e) ? 0 !== e && (e = Math.max(30, e)) : (e = null), (i.liveTimeout = e));
                        (r = parseFloat(i.bandwidthEstimate)), (t = parseFloat(i.bitrateSelection));
                        return (
                            (i.bandwidthEstimate = (0, a.qh)(r) ? r : ((e = i.defaultBandwidthEstimate), (r = parseFloat(e)), (0, a.qh)(r) ? Math.max(r, 1) : p.bandwidthEstimate)),
                            (i.bitrateSelection = (0, a.qh)(t) ? t : p.bitrateSelection),
                            (i.liveSyncDuration = h(i.liveSyncDuration)),
                            (i.backgroundLoading = ((0, a.jn)(i.backgroundLoading) ? i : l.Features).backgroundLoading),
                            i
                        );
                    };
                },
                2894: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Tr: function () {
                            return i;
                        },
                        Ep: function () {
                            return o;
                        },
                        Jt: function () {
                            return a;
                        },
                        Zq: function () {
                            return u;
                        },
                    });
                    var r = n(4446),
                        i = {};
                    function o(t, e) {
                        return function () {
                            throw new r.rG(r.pJ, t, e);
                        };
                    }
                    function a(t, e) {
                        return function () {
                            throw new r.rG(null, t, e);
                        };
                    }
                    function u() {
                        return n
                            .e(681)
                            .then(
                                function (t) {
                                    return n(7573).default;
                                }.bind(null, n)
                            )
                            .catch(o(r.fU + 101));
                    }
                },
                623: function (t, e, k) {
                    "use strict";
                    k.d(e, {
                        Z: function () {
                            return Q;
                        },
                        c: function () {
                            return v;
                        },
                    });
                    var l = k(6042),
                        n = k(9128),
                        f = k(2445),
                        x = k(2894),
                        C = k(393),
                        j = k(8320),
                        P = k(2963),
                        S = k(670),
                        T = k(4601),
                        E = k(4446),
                        _ = k(8348),
                        O = null;
                    function A() {
                        var t = window.IntersectionObserverEntry;
                        return !(t && "IntersectionObserver" in window && "intersectionRatio" in t.prototype);
                    }
                    function Z() {
                        return (A()
                            ? k
                                  .e(943)
                                  .then(
                                      function (t) {
                                          return k(6337);
                                      }.bind(null, k)
                                  )
                                  .catch((0, x.Ep)(E.fU + 120))
                            : Promise.resolve()
                        ).then(x.Zq);
                    }
                    var d = k(1643),
                        o = k(7263),
                        i = k(676),
                        M = k(8518),
                        D = k(1241);
                    function I(r) {
                        var i = r.get("playlist");
                        return new Promise(function (n, e) {
                            if ("string" != typeof i) return (t = r.get("feedData") || {}), a(r, i, t), n();
                            var t = new o.Z();
                            t.on(d.Ow, function (t) {
                                var e = t.playlist;
                                delete t.playlist, a(r, e, t), n();
                            }),
                                t.on(d.pn, function (t) {
                                    a(r, [], {}), e((0, E.l9)(t, E.xk));
                                }),
                                t.load(i);
                        });
                    }
                    function a(t, e, n) {
                        t = t.attributes;
                        (t.playlist = (0, j.ZP)(e)), (t.feedData = n);
                    }
                    function F(t) {
                        return t.attributes._destroyed;
                    }
                    var N = k(1918),
                        u = k(6599);
                    function z(t) {
                        var e = [
                            (function (t) {
                                var n = t.attributes,
                                    t = n.error;
                                if (t && t.code === u.u) {
                                    var t = n.pid,
                                        e = n.ph,
                                        r = new u.Z(n.key);
                                    if (0 < e && e < 4 && t && -7776e6 < r.duration())
                                        return new i.ZP("//content.jwplatform.com/libraries/" + t + ".js")
                                            .load()
                                            .then(function () {
                                                var t = window.jwplayer.defaults.key,
                                                    e = new u.Z(t);
                                                e.error() || e.token() !== r.token() || ((n.key = t), (n.edition = e.edition()), (n.error = e.error()));
                                            })
                                            .catch(function () {});
                                }
                                return Promise.resolve();
                            })(t),
                        ];
                        return B(t) || e.push(Promise.resolve()), Promise.all(e);
                    }
                    function B(t) {
                        t = t.get("advertising");
                        return t && t.outstream;
                    }
                    function y(b) {
                        var w;
                        (this.start = function (t) {
                            (l = b), (f = t);
                            var n,
                                r,
                                i,
                                o,
                                a,
                                e,
                                u,
                                c,
                                s,
                                l,
                                f,
                                d,
                                p,
                                h,
                                g =
                                    window.location !== window.parent.location && /isAMP/.test(document.location.search)
                                        ? ((p = d = l),
                                          (h = f),
                                          k
                                              .e(168)
                                              .then(
                                                  function (t) {
                                                      return new (k(5545).default)(h).setup(p);
                                                  }.bind(null, k)
                                              )
                                              .catch((0, x.Ep)(E.fU + 130))
                                              .then(function () {
                                                  return L(d);
                                              })
                                              .then(y)
                                              .catch(y))
                                        : y(),
                                m = Promise.all([
                                    ((t = b),
                                    O ||
                                        ((v = (t = t).get("controls")),
                                        (s = A()),
                                        (t = (function (t) {
                                            var e = t.get("playlist");
                                            if (Array.isArray(e) && e.length)
                                                for (var n = (0, j.bx)(t.get("item"), e.length), r = (0, j.T5)((0, C.Z)(e[n]), t), i = 0; i < r.length; i++)
                                                    for (var o = r[i], a = t.getProviders(), u = 0; u < P.B.length; u++) {
                                                        var c = P.B[u];
                                                        if (a.providerSupports(c, o)) return "html5" === c.name;
                                                    }
                                            return !1;
                                        })(t)),
                                        (O = _.OS.tizen
                                            ? Z()
                                            : v && s && t
                                            ? ((c = k
                                                  .e(605)
                                                  .then(
                                                      function (t) {
                                                          k(6337);
                                                          var e = k(7573).default;
                                                          return (T.v.controls = k(6867).default), (0, S.Z)(k(9181).default), e;
                                                      }.bind(null, k)
                                                  )
                                                  .catch((0, x.Ep)(E.fU + 105))),
                                              (x.Tr.html5 = c))
                                            : v && t
                                            ? ((c = k
                                                  .e(207)
                                                  .then(
                                                      function (t) {
                                                          var e = k(7573).default;
                                                          return (T.v.controls = k(6867).default), (0, S.Z)(k(9181).default), e;
                                                      }.bind(null, k)
                                                  )
                                                  .catch((0, x.Ep)(E.fU + 104))),
                                              (x.Tr.html5 = c))
                                            : v && s
                                            ? k
                                                  .e(493)
                                                  .then(
                                                      function (t) {
                                                          k(6337);
                                                          var e = k(7573).default;
                                                          return (T.v.controls = k(6867).default), e;
                                                      }.bind(null, k)
                                                  )
                                                  .catch((0, x.Ep)(E.fU + 103))
                                            : v
                                            ? k
                                                  .e(581)
                                                  .then(
                                                      function (t) {
                                                          var e = k(7573).default;
                                                          return (T.v.controls = k(6867).default), e;
                                                      }.bind(null, k)
                                                  )
                                                  .catch((0, x.Ep)(E.fU + 102))
                                            : Z())),
                                    O),
                                    ((u = b),
                                    new Promise(function (t) {
                                        return 45 < u.attributes.liveSyncDuration ? t((0, E.l9)(new Error(), E.wM)) : t();
                                    })),
                                    g,
                                    B((e = b))
                                        ? Promise.resolve()
                                        : I(e)
                                              .then(function () {
                                                  if (e.get("drm") || (0, N.w0)(e.get("playlist"))) return (0, N.lD)(e.get("edition"));
                                              })
                                              .then(function () {
                                                  return I((i = e)).then(function () {
                                                      if (!F(i)) {
                                                          var t = (0, j.s7)(i.get("playlist"), i);
                                                          i.attributes.playlist = t;
                                                          try {
                                                              (0, j._)(t);
                                                          } catch (t) {
                                                              throw ((t.code += E.xk), t);
                                                          }
                                                          var e = i.getProviders(),
                                                              n = (0, j.bx)(i.get("item"), t.length),
                                                              n = e.choose(t[n].sources[0]),
                                                              r = n.provider,
                                                              n = n.name;
                                                          return "function" == typeof r
                                                              ? r
                                                              : x.Tr.html5 && "html5" === n
                                                              ? x.Tr.html5
                                                              : e.load(n).catch(function (t) {
                                                                    throw (0, E.l9)(t, E.y4);
                                                                });
                                                      }
                                                  });
                                                  var i;
                                              }),
                                    z(b),
                                    L(b),
                                    ((r = (n = b).attributes),
                                    (i = r.language),
                                    (o = r.base),
                                    (t = r.setupConfig),
                                    (s = r.intl),
                                    (a = (0, M.Pm)(t, s, i)),
                                    !(0, M.q2)(i) || (0, M.dl)(a)
                                        ? Promise.resolve()
                                        : new Promise(function (e) {
                                              return (0, M.Dq)(o, i)
                                                  .then(function (t) {
                                                      t = t.response;
                                                      if (!F(n)) {
                                                          if (!t) throw new E.rG(null, E.wH);
                                                          (r.localization = (0, M.Mh)(t, a)), e();
                                                      }
                                                  })
                                                  .catch(function (t) {
                                                      e(t.code === E.wH ? t : (0, E.l9)(t, E.A6));
                                                  });
                                          })),
                                ]),
                                v = new Promise(function (t, e) {
                                    w = setTimeout(function () {
                                        e(new E.rG(E.pJ, E.T6));
                                    }, 6e4);
                                    function n() {
                                        clearTimeout(w), setTimeout(t, 6e4);
                                    }
                                    m.then(n).catch(n);
                                });
                            function y() {
                                return (0, D.Z)(l, f);
                            }
                            return Promise.race([m, v])
                                .catch(function (t) {
                                    function e() {
                                        throw t;
                                    }
                                    return g.then(e).catch(e);
                                })
                                .then(function (t) {
                                    if (!t || !t.length) return { core: null, warnings: [] };
                                    var e = t
                                        .reduce(function (t, e) {
                                            return t.concat(e);
                                        }, [])
                                        .filter(function (t) {
                                            return t && t.code;
                                        });
                                    return { core: t[0], warnings: e };
                                });
                        }),
                            (this.destroy = function () {
                                clearTimeout(w), b.set("_destroyed", !0), (b = null);
                            });
                    }
                    var L = function (t) {
                            t = t.get("skin") ? t.get("skin").url : void 0;
                            return "string" != typeof t ||
                                (function (t) {
                                    for (var e = document.styleSheets, n = 0, r = e.length; n < r; n++) if (e[n].href === t) return 1;
                                })(t)
                                ? Promise.resolve()
                                : new i.ZP(t, !0).load().catch(function (t) {
                                      return t;
                                  });
                        },
                        b = k(2303),
                        w = k(7411),
                        R = k(9888),
                        q = k(4742),
                        c = { removeItem: function (t) {} };
                    try {
                        c = window.localStorage || c;
                    } catch (t) {}
                    function r(t) {
                        (this._events = {}),
                            (this.modelShim = new U.Z()),
                            (this.modelShim._qoeItem = new w.Z()),
                            (this.mediaShim = {}),
                            (this.setup = new y(this.modelShim)),
                            (this.currentContainer = this.originalContainer = t),
                            (this.apiQueue = new n.Z(
                                this,
                                [
                                    "load",
                                    "play",
                                    "pause",
                                    "seek",
                                    "stop",
                                    "playlistItem",
                                    "playlistNext",
                                    "playlistPrev",
                                    "next",
                                    "preload",
                                    "setAllowFullscreen",
                                    "setConfig",
                                    "setCurrentAudioTrack",
                                    "setCurrentCaptions",
                                    "setCurrentQuality",
                                    "setFullscreen",
                                    "setPip",
                                    "requestPip",
                                    "addButton",
                                    "removeButton",
                                    "castToggle",
                                    "setMute",
                                    "setVolume",
                                    "setPlaybackRate",
                                    "addCues",
                                    "setCues",
                                    "setPlaylistItem",
                                    "stopCasting",
                                    "resize",
                                    "setCaptions",
                                    "setControls",
                                ],
                                function () {
                                    return !0;
                                }
                            ));
                    }
                    ((e = s.prototype).getAllItems = function () {
                        var r = this;
                        return this.items.reduce(function (t, e) {
                            var n = c[r.namespace + "." + e];
                            return n && (t[e] = "captions" !== e ? (0, R.serialize)(n) : JSON.parse(n)), t;
                        }, {});
                    }),
                        (e.track = function (t) {
                            var r = this;
                            this.items.forEach(function (n) {
                                t.on("change:" + n, function (t, e) {
                                    try {
                                        "captions" === n && (e = JSON.stringify(e)), (c[r.namespace + "." + n] = e);
                                    } catch (t) {
                                        q.Z.debug && console.error(t);
                                    }
                                });
                            });
                        }),
                        (e.clear = function () {
                            var e = this;
                            this.items.forEach(function (t) {
                                c.removeItem(e.namespace + "." + t);
                            });
                        });
                    var H = s,
                        U = k(7753),
                        p = k(9918),
                        e = k(328),
                        h = k(4225),
                        V = k(7683),
                        G = k(4609),
                        g = k(5882);
                    k(4671), k(9926);
                    function s(t, e) {
                        (this.namespace = t), (this.items = e);
                    }
                    function m(t, e) {
                        e && e.code && (e.sourceError && console.error(e.sourceError), console.error(E.rG.logMessage(e.code)));
                    }
                    function K(t) {
                        t && t.code && console.warn(E.rG.logMessage(t.code));
                    }
                    function v(t, e) {
                        var n;
                        document.body.contains(t.currentContainer) || ((n = document.getElementById(t.get("id"))) && (t.currentContainer = n)),
                            t.currentContainer.parentElement && t.currentContainer.parentElement.replaceChild(e, t.currentContainer),
                            (t.currentContainer = e);
                    }
                    (0, l.l7)(r.prototype, {
                        on: e.ZP.on,
                        once: e.ZP.once,
                        off: e.ZP.off,
                        trigger: e.ZP.trigger,
                        init: function (t, r) {
                            var u = this,
                                i = this.modelShim,
                                o = new H("jwplayer", ["volume", "mute", "captionLabel", "captions", "bandwidthEstimate", "bitrateSelection", "qualityLabel", "enableShortcuts"]),
                                e = o && o.getAllItems(),
                                n = ((i.attributes = i.attributes || {}), (0, l.l7)(this.mediaShim, p.L4), t),
                                a = (0, f.ZP)((0, l.l7)({}, t), e),
                                c =
                                    ((a.id = r.id),
                                    (a.setupConfig = n),
                                    (0, l.l7)(i.attributes, a, p.bv),
                                    (i.getProviders = function () {
                                        return new b.Z(a);
                                    }),
                                    (i.setProvider = function () {}),
                                    (0, V.Z)()),
                                s =
                                    (i.get("backgroundLoading") || (c = (0, G.Z)(c.getPrimedElement(), c)),
                                    (this.primeUi = new g.ZP((0, g.GU)(this.originalContainer)).once("gesture", function () {
                                        c.prime(), u.preload(), s.destroy();
                                    })));
                            return (
                                i.on("change:errorEvent", m),
                                this.setup
                                    .start(r)
                                    .then(function (t) {
                                        var e = t.core;
                                        if (!e) throw (0, E.l9)(null, E.y7);
                                        if (u.setup) {
                                            u.on(d.cM, K),
                                                t.warnings.forEach(function (t) {
                                                    u.trigger(d.cM, t);
                                                });
                                            t = u.modelShim.clone();
                                            if (t.error) throw t.error;
                                            var n = u.apiQueue.queue.slice(0),
                                                e = (u.apiQueue.destroy(), (0, l.l7)(u, e.prototype), u.playerSetup(t, r, u.originalContainer, u._events, n, c), u._model);
                                            return (
                                                i.off("change:errorEvent", m),
                                                e.on("change:errorEvent", m),
                                                o.track(e),
                                                u.updatePlaylist(e.get("playlist"), e.get("feedData")).catch(function (t) {
                                                    var e = t.code === E._M ? E.IB : E.xk;
                                                    throw (0, E.l9)(t, e);
                                                })
                                            );
                                        }
                                    })
                                    .then(function () {
                                        u.setup && u.playerReady();
                                    })
                                    .catch(function (t) {
                                        var i, o, a;
                                        u.setup &&
                                            ((i = u),
                                            (o = r),
                                            (a = t),
                                            Promise.resolve().then(function () {
                                                var t,
                                                    e = (0, E.Mm)(E.ud, E.nk, a),
                                                    n = i._model || i.modelShim,
                                                    r = ((e.message = e.message || n.get("localization").errors[e.key]), delete e.key, n.get("contextual"));
                                                r || ((t = (0, h.Z)(i, e)), h.Z.cloneIcon && t.querySelector(".jw-icon").appendChild(h.Z.cloneIcon("error")), v(i, t)),
                                                    n.set("errorEvent", e),
                                                    n.set("state", d.Vy),
                                                    i.trigger(d.HH, e),
                                                    r && o.remove();
                                            }));
                                    })
                            );
                        },
                        playerDestroy: function () {
                            this.destroy && this.destroy(),
                                this.apiQueue && this.apiQueue.destroy(),
                                this.setup && this.setup.destroy(),
                                this.primeUi && this.primeUi.destroy(),
                                this.currentContainer !== this.originalContainer && v(this, this.originalContainer),
                                this.off(),
                                (this._events = this._model = this.modelShim = this.apiQueue = this.primeUi = this.setup = null);
                        },
                        getContainer: function () {
                            return this.currentContainer;
                        },
                        get: function (t) {
                            if (this.modelShim) return t in this.mediaShim ? this.mediaShim[t] : this.modelShim.get(t);
                        },
                        getItemQoe: function () {
                            return this.modelShim._qoeItem;
                        },
                        getItemPromise: function () {
                            return null;
                        },
                        setItemCallback: function (t) {
                            this.modelShim && (this.modelShim.attributes.playlistItemCallback = t);
                        },
                        getConfig: function () {
                            return (0, l.l7)({}, this.modelShim.attributes, this.mediaShim);
                        },
                        getCurrentCaptions: function () {
                            return this.get("captionsIndex");
                        },
                        getWidth: function () {
                            return this.get("containerWidth");
                        },
                        getHeight: function () {
                            return this.get("containerHeight");
                        },
                        getMute: function () {
                            return this.get("mute");
                        },
                        getProvider: function () {
                            return this.get("provider");
                        },
                        getState: function () {
                            return this.get("state");
                        },
                        getAudioTracks: function () {
                            return null;
                        },
                        getCaptionsList: function () {
                            return null;
                        },
                        getQualityLevels: function () {
                            return null;
                        },
                        getVisualQuality: function () {
                            return null;
                        },
                        getCurrentQuality: function () {
                            return -1;
                        },
                        getCurrentAudioTrack: function () {
                            return -1;
                        },
                        getSafeRegion: function () {
                            return { x: 0, y: 0, width: 0, height: 0 };
                        },
                        isBeforeComplete: function () {
                            return !1;
                        },
                        isBeforePlay: function () {
                            return !1;
                        },
                        createInstream: function () {
                            return null;
                        },
                        skipAd: function () {},
                        attachMedia: function () {},
                        detachMedia: function () {},
                    });
                    var Q = r;
                },
                4446: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        nk: function () {
                            return i;
                        },
                        T6: function () {
                            return o;
                        },
                        y7: function () {
                            return a;
                        },
                        fU: function () {
                            return u;
                        },
                        xk: function () {
                            return c;
                        },
                        IB: function () {
                            return s;
                        },
                        YQ: function () {
                            return l;
                        },
                        DD: function () {
                            return f;
                        },
                        y4: function () {
                            return d;
                        },
                        tJ: function () {
                            return p;
                        },
                        o2: function () {
                            return h;
                        },
                        _M: function () {
                            return g;
                        },
                        EY: function () {
                            return m;
                        },
                        wM: function () {
                            return v;
                        },
                        Y7: function () {
                            return y;
                        },
                        A6: function () {
                            return b;
                        },
                        wH: function () {
                            return w;
                        },
                        ul: function () {
                            return k;
                        },
                        MD: function () {
                            return x;
                        },
                        pJ: function () {
                            return C;
                        },
                        zO: function () {
                            return j;
                        },
                        Sp: function () {
                            return P;
                        },
                        H4: function () {
                            return S;
                        },
                        ud: function () {
                            return T;
                        },
                        rG: function () {
                            return E;
                        },
                        Mm: function () {
                            return O;
                        },
                        l9: function () {
                            return A;
                        },
                        nm: function () {
                            return Z;
                        },
                    });
                    var r = n(6042),
                        i = 1e5,
                        o = 100001,
                        a = 100002,
                        u = 101e3,
                        c = 102e3,
                        s = 102700,
                        l = 200001,
                        f = 202e3,
                        d = 104e3,
                        p = 203e3,
                        h = 203640,
                        g = 203700,
                        m = 204e3,
                        v = 300100,
                        y = 306e3,
                        b = 308e3,
                        w = 308640,
                        k = "cantPlayVideo",
                        x = "badConnection",
                        C = "cantLoadPlayer",
                        j = "cantPlayInBrowser",
                        P = "liveStreamDown",
                        S = "protectedContent",
                        T = "technicalError",
                        E =
                            ((_.logMessage = function (t) {
                                var e = t % 1e3,
                                    n = Math.floor((t - e) / 1e3),
                                    r = t.toString();
                                return (
                                    "JW Player " +
                                    (299999 < t && t < 4e5 ? "Warning" : "Error") +
                                    " " +
                                    t +
                                    ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" +
                                    (r = 400 <= e && e < 600 ? n + "400-" + n + "599" : r)
                                );
                            }),
                            _);
                    function _(t, e, n) {
                        (this.code = (0, r.qh)(e) ? e : 0), (this.sourceError = n || null), t && (this.key = t);
                    }
                    function O(t, e, n) {
                        return n instanceof E && n.code ? n : new E(t, e, n);
                    }
                    function A(t, e) {
                        var n = O(T, e, t);
                        return (n.code = ((t && t instanceof E && t.code) || 0) + e), n;
                    }
                    function Z(t) {
                        var e = t.name,
                            n = t.message;
                        switch (e) {
                            case "AbortError":
                                return /pause/.test(n) ? 303213 : /load/.test(n) ? 303212 : 303210;
                            case "NotAllowedError":
                                return 303220;
                            case "NotSupportedError":
                                return 303230;
                            default:
                                return 303200;
                        }
                    }
                },
                6391: function (t, e) {
                    "use strict";
                    e.Z = [];
                },
                7411: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return c;
                        },
                    });
                    var r = n(6042),
                        i = n(5004),
                        o = window.performance || { timing: {} },
                        a = o.timing.navigationStart || (0, i.z)();
                    function u() {
                        return a + o.now();
                    }
                    "now" in o ||
                        (o.now = function () {
                            return (0, i.z)() - a;
                        });
                    ((e = s.prototype).start = function (t) {
                        (this.startTimes[t] = u()), (this.counts[t] = this.counts[t] + 1 || 1);
                    }),
                        (e.end = function (t) {
                            var e;
                            this.startTimes[t] && ((e = u() - this.startTimes[t]), delete this.startTimes[t], (this.sum[t] = this.sum[t] + e || e));
                        }),
                        (e.dump = function () {
                            var t,
                                e,
                                n = (0, r.l7)({}, this.sum);
                            for (t in this.startTimes) Object.prototype.hasOwnProperty.call(this.startTimes, t) && ((e = u() - this.startTimes[t]), (n[t] = n[t] + e || e));
                            return { counts: (0, r.l7)({}, this.counts), sums: n, events: (0, r.l7)({}, this.ticks) };
                        }),
                        (e.tick = function (t) {
                            this.ticks[t] = u();
                        }),
                        (e.clear = function (t) {
                            delete this.ticks[t];
                        }),
                        (e.between = function (t, e) {
                            return this.ticks[e] && this.ticks[t] ? this.ticks[e] - this.ticks[t] : null;
                        });
                    var c = s;
                    function s() {
                        (this.startTimes = {}), (this.sum = {}), (this.counts = {}), (this.ticks = {});
                    }
                },
                4601: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        v: function () {
                            return a;
                        },
                        z: function () {
                            return u;
                        },
                    });
                    var r = n(2894),
                        i = n(8348),
                        o = null,
                        a = {};
                    function u() {
                        return (o =
                            o ||
                            (i.OS.tizenApp
                                ? n
                                      .e(74)
                                      .then(
                                          function (t) {
                                              var e = n(3112).default;
                                              return (a.controls = e);
                                          }.bind(null, n)
                                      )
                                      .catch(function () {
                                          ((o = null), r.Jt)(301133)();
                                      })
                                : n
                                      .e(716)
                                      .then(
                                          function (t) {
                                              var e = n(6867).default;
                                              return (a.controls = e);
                                          }.bind(null, n)
                                      )
                                      .catch(function () {
                                          ((o = null), r.Jt)(301130)();
                                      })));
                    }
                },
                8348: function (t, e, n) {
                    "use strict";
                    n.r(e),
                        n.d(e, {
                            Browser: function () {
                                return u;
                            },
                            Features: function () {
                                return s;
                            },
                            OS: function () {
                                return c;
                            },
                        });
                    var r = n(2268);
                    function o(t, e) {
                        t = t.exec(e);
                        if (t && 1 < t.length) return t[1];
                    }
                    function i() {}
                    var a = navigator.userAgent,
                        u = {
                            get androidNative() {
                                return (0, r.O7)();
                            },
                            get chrome() {
                                return (0, r.i7)();
                            },
                            get edge() {
                                return (0, r.un)();
                            },
                            get facebook() {
                                return (0, r.DF)();
                            },
                            get firefox() {
                                return (0, r.pZ)();
                            },
                            get ie() {
                                return (0, r.w1)();
                            },
                            get msie() {
                                return (0, r.A)();
                            },
                            get safari() {
                                return (0, r.G6)();
                            },
                            get version() {
                                return (
                                    (e = a),
                                    (t = this).chrome
                                        ? (n = -1 !== e.indexOf("Chrome") ? e.substring(e.indexOf("Chrome") + 7) : e.substring(e.indexOf("CriOS") + 6))
                                        : t.safari
                                        ? (n = e.substring(e.indexOf("Version") + 8))
                                        : t.firefox
                                        ? (n = e.substring(e.indexOf("Firefox") + 8))
                                        : t.edge
                                        ? (-1 === (o = e.indexOf("Edge")) ? (o = e.indexOf("Edg") + 4) : (o += 5), (n = e.substring(o)))
                                        : t.ie && (-1 !== e.indexOf("rv:") ? (n = e.substring(e.indexOf("rv:") + 3)) : -1 !== e.indexOf("MSIE") && (n = e.substring(e.indexOf("MSIE") + 5))),
                                    n &&
                                        (-1 !== (o = (n = -1 !== (o = (n = -1 !== (o = n.indexOf(";")) ? n.substring(0, o) : n).indexOf(" ")) ? n.substring(0, o) : n).indexOf(")")) && (n = n.substring(0, o)),
                                        (r = parseInt(n, 10)),
                                        (i = parseInt(n.split(".")[1], 10))),
                                    { version: n, major: r, minor: i }
                                );
                                var t, e, n, r, i, o;
                            },
                        },
                        c = {
                            get android() {
                                return (0, r.Dt)();
                            },
                            get iOS() {
                                return (0, r.gn)();
                            },
                            get mobile() {
                                return (0, r.tq)();
                            },
                            get mac() {
                                return (0, r.id)();
                            },
                            get iPad() {
                                return (0, r.zc)();
                            },
                            get iPhone() {
                                return (0, r.xb)();
                            },
                            get windows() {
                                return -1 < a.indexOf("Windows");
                            },
                            get tizen() {
                                return (0, r.yS)();
                            },
                            get tizenApp() {
                                return (0, r.Q6)();
                            },
                            get version() {
                                var t,
                                    e,
                                    n,
                                    r = this,
                                    i = a;
                                if (r.windows)
                                    switch ((t = o(/Windows(?: NT|)? ([._\d]+)/, i))) {
                                        case "6.1":
                                            t = "7.0";
                                            break;
                                        case "6.2":
                                            t = "8.0";
                                            break;
                                        case "6.3":
                                            t = "8.1";
                                    }
                                else r.android ? (t = o(/Android ([._\d]+)/, i)) : r.iOS ? (t = o(/OS ([._\d]+)/, i)) : r.mac ? (t = o(/Mac OS X ([._\d]+)/, i)) : r.tizen && (t = o(/Tizen ([._\d]+)/, i));
                                return t && ((n = parseInt(t, 10)), (r = t.split(/[._]/)) && (e = parseInt(r[1], 10))), { version: t, major: n, minor: e };
                            },
                        },
                        s = {
                            get flash() {
                                return (0, r.NO)();
                            },
                            get flashVersion() {
                                return (0, r.dI)();
                            },
                            get iframe() {
                                return (0, r.cL)();
                            },
                            get passiveEvents() {
                                var t = !1;
                                try {
                                    var e = Object.defineProperty({}, "passive", {
                                        get: function () {
                                            return (t = !0);
                                        },
                                    });
                                    window.addEventListener("testPassive", i, e), window.removeEventListener("testPassive", i, e);
                                } catch (t) {}
                                return t;
                            },
                            get backgroundLoading() {
                                return !(c.iOS || u.safari || c.tizen);
                            },
                        };
                },
                1643: function (N, t, e) {
                    "use strict";
                    e.d(t, {
                        Kb: function () {
                            return n;
                        },
                        bc: function () {
                            return r;
                        },
                        xQ: function () {
                            return i;
                        },
                        _5: function () {
                            return o;
                        },
                        r0: function () {
                            return a;
                        },
                        Vy: function () {
                            return u;
                        },
                        ik: function () {
                            return c;
                        },
                        nQ: function () {
                            return s;
                        },
                        Wp: function () {
                            return l;
                        },
                        nv: function () {
                            return f;
                        },
                        Sv: function () {
                            return d;
                        },
                        ot: function () {
                            return p;
                        },
                        P: function () {
                            return h;
                        },
                        B1: function () {
                            return g;
                        },
                        tP: function () {
                            return m;
                        },
                        K5: function () {
                            return v;
                        },
                        U3: function () {
                            return y;
                        },
                        pn: function () {
                            return b;
                        },
                        cM: function () {
                            return w;
                        },
                        Rt: function () {
                            return k;
                        },
                        $_: function () {
                            return x;
                        },
                        Ax: function () {
                            return C;
                        },
                        WE: function () {
                            return j;
                        },
                        k3: function () {
                            return P;
                        },
                        uL: function () {
                            return S;
                        },
                        wh: function () {
                            return T;
                        },
                        Ms: function () {
                            return E;
                        },
                        Rc: function () {
                            return _;
                        },
                        NZ: function () {
                            return O;
                        },
                        $j: function () {
                            return A;
                        },
                        s$: function () {
                            return Z;
                        },
                        Jl: function () {
                            return M;
                        },
                        cy: function () {
                            return I;
                        },
                        V$: function () {
                            return F;
                        },
                        pi: function () {
                            return B;
                        },
                        Ew: function () {
                            return L;
                        },
                        FU: function () {
                            return D;
                        },
                        cq: function () {
                            return z;
                        },
                        Je: function () {
                            return R;
                        },
                        aQ: function () {
                            return q;
                        },
                        HH: function () {
                            return H;
                        },
                        uc: function () {
                            return U;
                        },
                        uT: function () {
                            return V;
                        },
                        R2: function () {
                            return G;
                        },
                        TJ: function () {
                            return K;
                        },
                        oZ: function () {
                            return Q;
                        },
                        yH: function () {
                            return W;
                        },
                        gy: function () {
                            return X;
                        },
                        O1: function () {
                            return J;
                        },
                        rx: function () {
                            return $;
                        },
                        UZ: function () {
                            return Y;
                        },
                        aM: function () {
                            return tt;
                        },
                        ug: function () {
                            return et;
                        },
                        Hy: function () {
                            return nt;
                        },
                        UW: function () {
                            return rt;
                        },
                        sF: function () {
                            return it;
                        },
                        gO: function () {
                            return ot;
                        },
                        Ow: function () {
                            return at;
                        },
                        j0: function () {
                            return ut;
                        },
                        _B: function () {
                            return ct;
                        },
                        jt: function () {
                            return st;
                        },
                        UF: function () {
                            return lt;
                        },
                        QF: function () {
                            return ft;
                        },
                        Ib: function () {
                            return dt;
                        },
                        SL: function () {
                            return pt;
                        },
                        Z_: function () {
                            return ht;
                        },
                        Gj: function () {
                            return gt;
                        },
                        xf: function () {
                            return mt;
                        },
                        l5: function () {
                            return vt;
                        },
                        Bs: function () {
                            return yt;
                        },
                        h7: function () {
                            return bt;
                        },
                        qG: function () {
                            return wt;
                        },
                        RF: function () {
                            return kt;
                        },
                    });
                    var n = "buffering",
                        r = "idle",
                        i = "complete",
                        o = "paused",
                        a = "playing",
                        u = "error",
                        c = "loading",
                        s = "stalled",
                        l = "drag",
                        f = "dragStart",
                        d = "dragEnd",
                        p = "click",
                        h = "doubleClick",
                        g = "over",
                        m = "move",
                        v = "enter",
                        y = "out",
                        b = u,
                        w = "warning",
                        k = "adClick",
                        x = "mediaLoaded",
                        C = "adPause",
                        j = "adPlay",
                        P = "adSkipped",
                        S = "adTime",
                        T = "autostartNotAllowed",
                        E = i,
                        _ = "ready",
                        O = "seek",
                        A = "beforePlay",
                        Z = "beforeComplete",
                        M = "bufferFull",
                        I = "displayClick",
                        F = "playlistComplete",
                        B = "cast",
                        L = "mediaError",
                        D = "firstFrame",
                        z = "playAttempt",
                        R = "playAttemptFailed",
                        q = "seeked",
                        H = "setupError",
                        U = "state",
                        V = "bufferChange",
                        G = "time",
                        K = "ratechange",
                        Q = "mediaType",
                        W = "volume",
                        X = "mute",
                        J = "metadataCueParsed",
                        $ = "meta",
                        Y = "levels",
                        tt = "levelsChanged",
                        et = "visualQuality",
                        nt = "controls",
                        rt = "fullscreen",
                        it = "resize",
                        ot = "playlistItem",
                        at = "playlist",
                        ut = "audioTracks",
                        ct = "audioTrackChanged",
                        st = "subtitlesTracks",
                        lt = "subtitlesTrackChanged",
                        ft = "playbackRateChanged",
                        dt = "logoClick",
                        pt = "captionsList",
                        ht = "captionsChanged",
                        gt = "providerFirstFrame",
                        mt = "userAction",
                        vt = "instreamClick",
                        yt = "breakpoint",
                        bt = "fullscreenchange",
                        wt = "bandwidthEstimate",
                        kt = "float";
                },
                9918: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        bv: function () {
                            return r;
                        },
                        L4: function () {
                            return i;
                        },
                        ni: function () {
                            return o;
                        },
                        OG: function () {
                            return a;
                        },
                    });
                    var r = { audioMode: !1, itemMeta: {}, playbackRate: 1, playRejected: !1, state: n(1643).bc, itemReady: !1, controlsEnabled: !1 },
                        i = { position: 0, duration: 0, buffer: 0, currentTime: 0 },
                        o = 120,
                        a = 25;
                },
                7753: function (t, e, n) {
                    "use strict";
                    function r(t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            function (t, e) {
                                return (t.__proto__ = e), t;
                            })(t, e);
                    }
                    n.d(e, {
                        Z: function () {
                            return o;
                        },
                    });
                    (i = n(328).ZP),
                        (e = i),
                        ((n = a).prototype = Object.create(e.prototype)),
                        r((n.prototype.constructor = n), e),
                        ((n = a.prototype).addAttributes = function (e) {
                            var n = this;
                            Object.keys(e).forEach(function (t) {
                                n.add(t, e[t]);
                            });
                        }),
                        (n.add = function (e, t) {
                            var n = this;
                            Object.defineProperty(this, e, {
                                get: function () {
                                    return n.attributes[e];
                                },
                                set: function (t) {
                                    n.set(e, t);
                                },
                                enumerable: !1,
                            }),
                                (this.attributes[e] = t);
                        }),
                        (n.get = function (t) {
                            return this.attributes[t];
                        }),
                        (n.set = function (t, e) {
                            var n;
                            this.attributes[t] !== e && ((n = this.attributes[t]), (this.attributes[t] = e), this.trigger("change:" + t, this, e, n));
                        }),
                        (n.clone = function () {
                            var t = {},
                                e = this.attributes;
                            if (e) for (var n in e) t[n] = e[n];
                            return t;
                        }),
                        (n.change = function (t, e, n) {
                            this.on("change:" + t, e, n);
                            t = this.get(t);
                            return e.call(n, this, t, t), this;
                        });
                    var i,
                        o = a;
                    function a() {
                        var t;
                        return ((t = i.call(this) || this).attributes = Object.create(null)), t;
                    }
                },
                7941: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        r1: function () {
                            return i;
                        },
                        dZ: function () {
                            return o;
                        },
                        qk: function () {
                            return a;
                        },
                        my: function () {
                            return u;
                        },
                    });
                    var r = n(2957);
                    function i(t) {
                        var e = "";
                        return t && (t.localName ? (e = t.localName) : t.baseName && (e = t.baseName)), e;
                    }
                    function o(t) {
                        var e = "";
                        return t && (t.textContent ? (e = (0, r.fy)(t.textContent)) : t.text && (e = (0, r.fy)(t.text))), e;
                    }
                    function a(t, e) {
                        return t.childNodes[e];
                    }
                    function u(t) {
                        return t.childNodes ? t.childNodes.length : 0;
                    }
                },
                6769: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return r;
                        },
                    });
                    var p = n(7941),
                        h = n(2957);
                    var u = function t(e, n) {
                            for (var r = [], i = 0; i < (0, p.my)(e); i++) {
                                var o,
                                    a = e.childNodes[i];
                                if ("media" === a.prefix && (0, p.r1)(a))
                                    switch ((0, p.r1)(a).toLowerCase()) {
                                        case "content":
                                            (0, h.Dc)(a, "duration") && (n.duration = (0, h.m9)((0, h.Dc)(a, "duration"))),
                                                (0, h.Dc)(a, "url") &&
                                                    (n.sources || (n.sources = []),
                                                    (o = { file: (0, h.Dc)(a, "url"), type: (0, h.Dc)(a, "type"), width: (0, h.Dc)(a, "width"), label: (0, h.Dc)(a, "label") }),
                                                    (u = (function (t) {
                                                        for (var e = [], n = 0; n < (0, p.my)(t); n++) {
                                                            var r = t.childNodes[n];
                                                            "jwplayer" === r.prefix && "mediatypes" === (0, p.r1)(r).toLowerCase() && e.push((0, p.dZ)(r));
                                                        }
                                                        return e;
                                                    })(a)).length && (o.mediaTypes = u),
                                                    n.sources.push(o)),
                                                0 < (0, p.my)(a) && (n = t(a, n));
                                            break;
                                        case "title":
                                            n.title = (0, p.dZ)(a);
                                            break;
                                        case "description":
                                            n.description = (0, p.dZ)(a);
                                            break;
                                        case "guid":
                                            n.mediaid = (0, p.dZ)(a);
                                            break;
                                        case "thumbnail":
                                            n.image || (n.image = (0, h.Dc)(a, "url"));
                                            break;
                                        case "group":
                                            t(a, n);
                                            break;
                                        case "subtitle":
                                            var u = { file: (0, h.Dc)(a, "url"), kind: "captions" };
                                            0 < (0, h.Dc)(a, "lang").length &&
                                                (u.label =
                                                    ((o = (0, h.Dc)(a, "lang")),
                                                    void 0,
                                                    { zh: "Chinese", nl: "Dutch", en: "English", fr: "French", de: "German", it: "Italian", ja: "Japanese", pt: "Portuguese", ru: "Russian", es: "Spanish" }[o] || o)),
                                                r.push(u);
                                    }
                            }
                            n.tracks || (n.tracks = []);
                            for (var c = 0; c < r.length; c++) n.tracks.push(r[c]);
                            return n;
                        },
                        g = n(9888),
                        c = function (t, e) {
                            for (var n = "default", r = [], i = [], o = e, a = 0; a < t.childNodes.length; a++) {
                                var u,
                                    c = t.childNodes[a];
                                "jwplayer" === c.prefix &&
                                    ("source" === (u = (0, p.r1)(c))
                                        ? (delete e.sources, r.push({ file: (0, h.Dc)(c, "file"), default: (0, h.Dc)(c, n), label: (0, h.Dc)(c, "label"), type: (0, h.Dc)(c, "type") }))
                                        : "track" === u
                                        ? (delete e.tracks, i.push({ file: (0, h.Dc)(c, "file"), default: (0, h.Dc)(c, n), kind: (0, h.Dc)(c, "kind"), label: (0, h.Dc)(c, "label") }))
                                        : ((e[u] = (0, g.serialize)((0, p.dZ)(c))), "file" === u && e.sources && delete e.sources)),
                                    e.file || (e.file = e.link);
                            }
                            if (r.length) {
                                e.sources = [];
                                for (var s = 0; s < r.length; s++) {
                                    var l = r[s];
                                    0 < l.file.length && ((l[n] = "true" === r[s][n]), l.label || delete l.label, o.sources.push(l));
                                }
                            }
                            if (i.length) {
                                e.tracks = [];
                                for (var f = 0; f < i.length; f++) {
                                    var d = i[f];
                                    d.file && 0 < d.file.length && ((d[n] = "true" === i[f][n]), (d.kind = i[f].kind.length ? i[f].kind : "captions"), d.label || delete d.label, o.tracks.push(d));
                                }
                            }
                            return o;
                        },
                        s = n(393);
                    function r(t) {
                        var e = [];
                        e.feedData = {};
                        for (var n = 0; n < (0, p.my)(t); n++) {
                            var r = (0, p.qk)(t, n);
                            if ("channel" === (0, p.r1)(r).toLowerCase())
                                for (var i = 0; i < (0, p.my)(r); i++) {
                                    var o = (0, p.qk)(r, i),
                                        a = (0, p.r1)(o).toLowerCase();
                                    "item" === a
                                        ? e.push(
                                              (function (t) {
                                                  for (var e = {}, n = 0; n < t.childNodes.length; n++) {
                                                      var r = t.childNodes[n],
                                                          i = (0, p.r1)(r);
                                                      if (i)
                                                          switch (i.toLowerCase()) {
                                                              case "enclosure":
                                                                  e.file = (0, h.Dc)(r, "url");
                                                                  break;
                                                              case "title":
                                                                  e.title = (0, p.dZ)(r);
                                                                  break;
                                                              case "guid":
                                                                  e.mediaid = (0, p.dZ)(r);
                                                                  break;
                                                              case "pubdate":
                                                                  e.date = (0, p.dZ)(r);
                                                                  break;
                                                              case "description":
                                                                  e.description = (0, p.dZ)(r);
                                                                  break;
                                                              case "link":
                                                                  e.link = (0, p.dZ)(r);
                                                                  break;
                                                              case "category":
                                                                  e.tags ? (e.tags += (0, p.dZ)(r)) : (e.tags = (0, p.dZ)(r));
                                                          }
                                                  }
                                                  return new s.Z(c(t, u(t, e)));
                                              })(o)
                                          )
                                        : a && (e.feedData[a] = (0, p.dZ)(o));
                                }
                        }
                        return e;
                    }
                },
                393: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return i;
                        },
                    });
                    function o(t) {
                        var e;
                        if (t && t.file) return ((t = (0, a.l7)({}, { kind: "captions", default: !1 }, t)).kind = ((e = t.kind), -1 !== r.indexOf(e) ? t.kind : "captions")), (t.default = !!t.default), t;
                    }
                    var a = n(6042),
                        u = n(6053),
                        r = ["captions", "metadata", "thumbnails", "chapters"],
                        c = n(9918),
                        s = Array.isArray,
                        i = function (t) {
                            s((t = t || {}).tracks) || delete t.tracks;
                            var e = (0, a.l7)({}, { sources: [], tracks: [], minDvrWindow: c.ni }, t);
                            e.sources !== Object(e.sources) || s(e.sources) || (e.sources = [(0, u.Z)(e.sources)]), (s(e.sources) && 0 !== e.sources.length) || (t.levels ? (e.sources = t.levels) : (e.sources = [(0, u.Z)(t)]));
                            for (var n = 0; n < e.sources.length; n++) {
                                var r,
                                    i = e.sources[n];
                                i && ((r = i.default), (i.default = !!r && "true" === r.toString()), e.sources[n].label || (e.sources[n].label = n.toString()), (e.sources[n] = (0, u.Z)(e.sources[n])));
                            }
                            return (
                                (e.sources = e.sources.filter(function (t) {
                                    return !!t;
                                })),
                                s(e.tracks) || (e.tracks = []),
                                s(e.captions) && ((e.tracks = e.tracks.concat(e.captions)), delete e.captions),
                                (e.tracks = e.tracks.map(o).filter(function (t) {
                                    return !!t;
                                })),
                                e
                            );
                        };
                },
                7263: function (t, e, n) {
                    "use strict";
                    var s = n(6042),
                        l = n(1643),
                        f = n(7941),
                        d = n(6769),
                        r = n(6886),
                        i = n(328),
                        p = n(4446);
                    e.Z = function () {
                        var u = (0, s.l7)(this, i.ZP);
                        function e(t) {
                            try {
                                var e = t.responseXML ? t.responseXML.childNodes : null,
                                    n = null;
                                if (e) {
                                    for (var r, i, o = 0; o < e.length && 8 === (n = e[o]).nodeType; o++);
                                    (n = n && "xml" === (0, f.r1)(n) ? n.nextSibling : n) && "rss" === (0, f.r1)(n) && ((r = (0, d.Z)(n)), (i = (0, s.l7)({ playlist: r }, r.feedData)));
                                }
                                if (!i)
                                    try {
                                        var a = JSON.parse(t.responseText);
                                        if (Array.isArray(a)) i = { playlist: a };
                                        else {
                                            if (!Array.isArray(a.playlist)) throw Error("Playlist is not an array");
                                            i = a;
                                        }
                                    } catch (t) {
                                        throw new p.rG(p.ul, 621, t);
                                    }
                                u.trigger(l.Ow, i);
                            } catch (t) {
                                c(t);
                            }
                        }
                        function c(t) {
                            t instanceof p.rG && !t.code && (t = new p.rG(p.ul, 0)), u.trigger(l.pn, t);
                        }
                        (this.load = function (t) {
                            (0, r.h)(t, e, function (t, e, n, r) {
                                c(r);
                            });
                        }),
                            (this.destroy = function () {
                                this.off();
                            });
                    };
                },
                8320: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        ZP: function () {
                            return b;
                        },
                        s7: function () {
                            return l;
                        },
                        T5: function () {
                            return h;
                        },
                        YF: function () {
                            return d;
                        },
                        _: function () {
                            return f;
                        },
                        bx: function () {
                            return p;
                        },
                    });
                    var a = n(6042),
                        r = { none: !0, metadata: !0, auto: !0 };
                    function u(t, e) {
                        return r[t] ? t : r[e] ? e : "metadata";
                    }
                    var i = n(393),
                        c = n(6053),
                        o = n(2303),
                        s = n(4446);
                    function l(t, e, n) {
                        var r = (0, a.l7)({}, n);
                        return (
                            delete r.playlist,
                            t
                                .map(function (t) {
                                    return d(e, t, r);
                                })
                                .filter(function (t) {
                                    return !!t;
                                })
                        );
                    }
                    function f(t) {
                        if (!Array.isArray(t) || 0 === t.length) throw new s.rG(s.ul, 630);
                    }
                    function d(t, e, n) {
                        var r = t.getProviders(),
                            i = t.get("preload"),
                            o = (0, a.l7)({}, e);
                        if (((o.preload = u(e.preload, i)), (o.allSources = g(o, t)), (o.sources = m(o.allSources, r)), o.sources.length))
                            return (o.file = o.sources[0].file), (o.feedData = n), (i = (e = o).sources[0].liveSyncDuration) && (e.liveSyncDuration = e.dvrSeekLimit = i), e;
                    }
                    function p(t, e) {
                        t = (parseInt(t, 10) || 0) % e;
                        return t < 0 && (t += e), t;
                    }
                    var h = function (t, e) {
                        return m(g(t, e), e.getProviders());
                    };
                    function g(n, t) {
                        var r = t.attributes,
                            t = n.sources,
                            e = n.allSources,
                            i = n.preload,
                            o = n.drm,
                            a = v(n.withCredentials, r.withCredentials);
                        return (e || t)
                            .map(function (t) {
                                if (t !== Object(t)) return null;
                                y(t, r, "androidhls"), y(t, r, "hlsjsdefault"), y(t, r, "safarihlsjs"), t.liveSyncDuration || y(t, n.liveSyncDuration ? n : r, "liveSyncDuration"), y(t, r, "_hlsjsProgressive"), (t.preload = u(t.preload, i));
                                var e = t.drm || o || r.drm,
                                    e = (e && (t.drm = e), v(t.withCredentials, a));
                                return void 0 !== e && (t.withCredentials = e), (0, c.Z)(t);
                            })
                            .filter(function (t) {
                                return !!t;
                            });
                    }
                    function m(t, e) {
                        var n = (function (t, e) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n],
                                    i = e.choose(r).providerToCheck;
                                if (i) return { type: r.type, provider: i };
                            }
                            return null;
                        })(t, (e = e && e.choose ? e : new o.Z()));
                        if (!n) return [];
                        var r = n.provider,
                            i = n.type;
                        return t.filter(function (t) {
                            return t.type === i && e.providerSupports(r, t);
                        });
                    }
                    function v(t, e) {
                        return void 0 === t ? e : t;
                    }
                    function y(t, e, n) {
                        n in e && (t[n] = e[n]);
                    }
                    var b = function (t) {
                        return (Array.isArray(t) ? t : [t]).map(i.Z);
                    };
                },
                6053: function (t, e, n) {
                    "use strict";
                    var r = n(6042),
                        i = n(7034),
                        o = n(2957);
                    e.Z = function (t) {
                        if (t && t.file) {
                            var e = (0, r.l7)({}, { default: !1, type: "" }, t),
                                t = ((e.file = (0, o.fy)("" + e.file)), /^[^/]+\/(?:x-)?([^/]+)$/),
                                n = e.type;
                            if (
                                (t.test(n) && ((e.mimeType = n), (e.type = n.replace(t, "$1"))), (0, i.isYouTube)(e.file) ? (e.type = "youtube") : (0, i.isRtmp)(e.file) ? (e.type = "rtmp") : e.type || (e.type = (0, o.AO)(e.file)), e.type)
                            ) {
                                switch (e.type) {
                                    case "m3u8":
                                    case "vnd.apple.mpegurl":
                                        e.type = "hls";
                                        break;
                                    case "dash+xml":
                                        e.type = "dash";
                                        break;
                                    case "m4a":
                                        e.type = "aac";
                                        break;
                                    case "smil":
                                        e.type = "rtmp";
                                }
                                return (
                                    Object.keys(e).forEach(function (t) {
                                        "" === e[t] && delete e[t];
                                    }),
                                    e
                                );
                            }
                        }
                    };
                },
                4101: function (t, e, n) {
                    "use strict";
                    function r(t) {
                        if ("string" == typeof t) {
                            var e = (t = t.split("?")[0]).indexOf("://");
                            if (0 < e) return 0;
                            var n = t.indexOf("/"),
                                t = (0, c.AO)(t);
                            return !(e < 0 && n < 0) || (t && isNaN(t)) ? 1 : 2;
                        }
                    }
                    function i(t) {
                        (this.url = t), (this.promise_ = null);
                    }
                    var o = n(6042),
                        a = n(676),
                        u = n(9888),
                        c = n(2957),
                        s = n(4446),
                        l = n(3487);
                    Object.defineProperties(i.prototype, {
                        promise: {
                            get: function () {
                                return this.load();
                            },
                            set: function () {},
                        },
                    }),
                        (0, o.l7)(i.prototype, {
                            load: function () {
                                var t = this;
                                if (!(n = this.promise_)) {
                                    if (2 === r(this.url)) return Promise.resolve(this);
                                    var e = new a.ZP(
                                            (function (t) {
                                                switch (r(t)) {
                                                    case 0:
                                                        return t;
                                                    case 1:
                                                        return (0, u.getAbsolutePath)(t, window.location.href);
                                                }
                                            })(this.url)
                                        ),
                                        n = (this.loader = e).load().then(function () {
                                            return t;
                                        });
                                    this.promise_ = n;
                                }
                                return n;
                            },
                            registerPlugin: function (t, e, n) {
                                (this.name = t), (this.target = e), (this.js = n);
                            },
                            getNewInstance: function (t, e, n) {
                                var r = this.js;
                                if ("function" != typeof r) throw new s.rG(null, (0, l.bX)(this.url) + 100);
                                var i = new r(t, e, n);
                                return (
                                    (i.addToPlayer = function () {
                                        var t = this.getContainer().querySelector(".jw-overlays");
                                        t && ((n.left = t.style.left), (n.top = t.style.top), t.appendChild(n));
                                    }),
                                    (i.resizeHandler = function () {
                                        var t = this.getContainer().querySelector(".jw-overlays");
                                        t && i.resize(t.clientWidth, t.clientHeight);
                                    }),
                                    i
                                );
                            },
                        }),
                        (e.Z = i);
                },
                1241: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return d;
                        },
                        f: function () {
                            return l;
                        },
                    });
                    var a = n(4446),
                        u = n(3487),
                        r = function () {
                            this.load = function (r, i, t, o) {
                                return t && "object" == typeof t
                                    ? Promise.all(
                                          Object.keys(t)
                                              .filter(function (t) {
                                                  return t;
                                              })
                                              .map(function (e) {
                                                  var n = t[e];
                                                  return i
                                                      .setupPlugin(e)
                                                      .then(function (t) {
                                                          if (!o.attributes._destroyed) return (0, u.MK)(t, n, r);
                                                      })
                                                      .catch(function (t) {
                                                          return i.removePlugin(e), t.code ? t : new a.rG(null, (0, u.bX)(e), t);
                                                      });
                                              })
                                      )
                                    : Promise.resolve();
                            };
                        },
                        i = n(4101),
                        o = n(5499),
                        c = {},
                        s =
                            (((e = f.prototype).setupPlugin = function (t) {
                                var e = this.getPlugin(t);
                                return e ? (e.url !== t && (0, o.c)('JW Plugin "' + (0, u.Nq)(t) + '" already loaded from "' + e.url + '". Ignoring "' + t + '."'), e.promise) : this.addPlugin(t).load();
                            }),
                            (e.addPlugin = function (t) {
                                var e = (0, u.Nq)(t),
                                    n = c[e];
                                return n || ((n = new i.Z(t)), (c[e] = n)), n;
                            }),
                            (e.getPlugin = function (t) {
                                return c[(0, u.Nq)(t)];
                            }),
                            (e.removePlugin = function (t) {
                                delete c[(0, u.Nq)(t)];
                            }),
                            (e.getPlugins = function () {
                                return c;
                            }),
                            new f()),
                        l = function (t, e, n) {
                            var r = s.addPlugin(t);
                            r.js || r.registerPlugin(t, e, n);
                        };
                    function f() {}
                    function d(e, t) {
                        var n = e.get("plugins");
                        return (
                            (window.jwplayerPluginJsonp = l),
                            (e.pluginLoader = e.pluginLoader || new r()).load(t, s, n, e).then(function (t) {
                                if (!e.attributes._destroyed) return delete window.jwplayerPluginJsonp, t;
                            })
                        );
                    }
                },
                7164: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Nq: function () {
                            return r;
                        },
                        bX: function () {
                            return i;
                        },
                        MK: function () {
                            return a;
                        },
                    });
                    var o = n(6042),
                        r = function (t) {
                            return t.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, "$2");
                        };
                    function i(t) {
                        return 305e3;
                    }
                    function a(t, e, n) {
                        var r = t.name,
                            e = (0, o.l7)({}, e),
                            i = document.createElement("div"),
                            t = ((i.id = n.id + "_" + r), (i.className = "jw-plugin jw-reset"), t.getNewInstance(n, e, i));
                        return n.addPlugin(r, t), t;
                    }
                },
                7683: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return r;
                        },
                        V: function () {
                            return l;
                        },
                    });
                    var c = n(658);
                    function r() {
                        for (var t = c.Jx, n = [], r = [], e = 0; e < t; e++) {
                            var i = l();
                            n.push(i), r.push(i), s(i);
                        }
                        var o = r.shift(),
                            a = r.shift(),
                            u = !1;
                        return {
                            primed: function () {
                                return u;
                            },
                            prime: function () {
                                n.forEach(s), (u = !0);
                            },
                            played: function () {
                                u = !0;
                            },
                            getPrimedElement: function () {
                                return r.shift() || null;
                            },
                            getAdElement: function () {
                                return o;
                            },
                            getTestElement: function () {
                                return a;
                            },
                            clean: function (t) {
                                if (t.src) {
                                    t.removeAttribute("src");
                                    try {
                                        t.load();
                                    } catch (t) {}
                                }
                            },
                            recycle: function (e) {
                                e &&
                                    !r.some(function (t) {
                                        return t === e;
                                    }) &&
                                    (this.clean(e), r.push(e));
                            },
                            syncVolume: function (t) {
                                var e = Math.min(Math.max(0, t / 100), 1);
                                n.forEach(function (t) {
                                    t.volume = e;
                                });
                            },
                            syncMute: function (e) {
                                n.forEach(function (t) {
                                    t.muted = e;
                                });
                            },
                        };
                    }
                    function s(t) {
                        t.src || t.load();
                    }
                    function l(e) {
                        var n = document.createElement("video");
                        return (
                            (n.className = "jw-video jw-reset"),
                            n.setAttribute("tabindex", "-1"),
                            n.setAttribute("disableRemotePlayback", ""),
                            n.setAttribute("webkit-playsinline", ""),
                            n.setAttribute("playsinline", ""),
                            e &&
                                Object.keys(e).forEach(function (t) {
                                    n.setAttribute(t, e[t]);
                                }),
                            n
                        );
                    }
                },
                658: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Jx: function () {
                            return r;
                        },
                        l_: function () {
                            return i;
                        },
                        HB: function () {
                            return o;
                        },
                    });
                    var r = 4,
                        i = 5,
                        o = 1;
                },
                4609: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return i;
                        },
                    });
                    var r = n(6042);
                    function i(t, e) {
                        return (0, r.l7)({}, e, {
                            prime: function () {
                                t.src || t.load();
                            },
                            getPrimedElement: function () {
                                return t;
                            },
                            clean: function () {
                                e.clean(t);
                            },
                            recycle: function () {
                                e.clean(t);
                            },
                        });
                    }
                },
                6528: function (t, e, n) {
                    "use strict";
                    function r() {}
                    function i() {
                        return !1;
                    }
                    var o = n(1643),
                        a = { name: "default" };
                    e.Z = {
                        supports: i,
                        play: r,
                        pause: r,
                        preload: r,
                        load: r,
                        stop: r,
                        volume: r,
                        mute: r,
                        seek: r,
                        resize: r,
                        remove: r,
                        destroy: r,
                        setVisibility: r,
                        setFullscreen: r,
                        getFullscreen: i,
                        supportsFullscreen: i,
                        getContainer: r,
                        setContainer: r,
                        getName: function () {
                            return a;
                        },
                        getQualityLevels: r,
                        getCurrentQuality: r,
                        setCurrentQuality: r,
                        getAudioTracks: r,
                        getCurrentAudioTrack: r,
                        setCurrentAudioTrack: r,
                        getSeekRange: function () {
                            return { start: 0, end: this.getDuration() };
                        },
                        setPlaybackRate: r,
                        getPlaybackRate: function () {
                            return 1;
                        },
                        getBandwidthEstimate: function () {
                            return null;
                        },
                        getLiveLatency: function () {
                            return null;
                        },
                        attachMedia: r,
                        detachMedia: r,
                        init: r,
                        setState: function (t) {
                            (this.state = t), this.trigger(o.uc, { newstate: t });
                        },
                        sendMediaType: function (t) {
                            var t = t[0],
                                e = t.type,
                                t = t.mimeType,
                                e = "aac" === e || "mp3" === e || "mpeg" === e || (t && 0 === t.indexOf("audio/"));
                            this.trigger(o.oZ, { mediaType: e ? "audio" : "video" });
                        },
                        getDuration: function () {
                            return 0;
                        },
                        trigger: r,
                    };
                },
                1628: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        V: function () {
                            return i;
                        },
                    });
                    var r = n(8348);
                    function i(t) {
                        return "hls" === t.type && r.OS.android ? !1 !== t.androidhls && !r.Browser.firefox && 4.4 <= parseFloat(r.OS.version.version || "0") : null;
                    }
                },
                12: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        U: function () {
                            return r;
                        },
                    });
                    var r = {};
                },
                670: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return u;
                        },
                    });
                    var r = n(12),
                        i = n(2963),
                        o = n(6528),
                        a = n(6042);
                    function u(t) {
                        var e = t.getName().name;
                        if (!r.U[e]) {
                            if (!(0, a.sE)(i.B, (0, a.wB)({ name: e }))) {
                                if (!(0, a.mf)(t.supports)) throw new Error("Tried to register a provider with an invalid object");
                                i.B.unshift({ name: e, supports: t.supports });
                            }
                            (0, a.ce)(t.prototype, o.Z), (r.U[e] = t);
                        }
                    }
                    n(328);
                },
                6593: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        B: function () {
                            return u;
                        },
                        H: function () {
                            return c;
                        },
                    });
                    var r = n(1628),
                        i = n(7034),
                        o = n(9025),
                        a = {
                            aac: "audio/mp4",
                            mp4: "video/mp4",
                            f4v: "video/mp4",
                            m4v: "video/mp4",
                            mov: "video/mp4",
                            mp3: "audio/mpeg",
                            mpeg: "audio/mpeg",
                            ogv: "video/ogg",
                            ogg: "video/ogg",
                            oga: "video/ogg",
                            vorbis: "video/ogg",
                            webm: "video/webm",
                            f4a: "video/aac",
                            m3u8: "application/vnd.apple.mpegurl",
                            m3u: "application/vnd.apple.mpegurl",
                            hls: "application/vnd.apple.mpegurl",
                        },
                        u = [{ name: "html5", supports: c }];
                    function c(t) {
                        if (!o.Z || !o.Z.canPlayType) return !1;
                        if (!1 === (0, r.V)(t)) return !1;
                        var e = t.file,
                            n = t.type;
                        if ((0, i.isRtmp)(e, n)) return !1;
                        e = t.mimeType || a[n];
                        if (!e) return !1;
                        n = t.mediaTypes;
                        return n && n.length && (e = [e].concat(n.slice()).join("; ")), !!o.Z.canPlayType(e);
                    }
                },
                6875: function (t, e) {
                    "use strict";
                    e.Z =
                        "hidden" in document
                            ? function () {
                                  return !document.hidden;
                              }
                            : "webkitHidden" in document
                            ? function () {
                                  return !document.webkitHidden;
                              }
                            : function () {
                                  return !0;
                              };
                },
                6886: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        h: function () {
                            return h;
                        },
                        E: function () {
                            return g;
                        },
                    });
                    var s = n(6042),
                        l = n(9888),
                        f = n(7034),
                        d = n(4446),
                        p = function () {};
                    function h(t, e, n, r) {
                        t === Object(t) && (t = (r = t).url);
                        var i,
                            o,
                            a,
                            u,
                            c = (0, s.l7)(
                                {
                                    xhr: null,
                                    url: t,
                                    withCredentials: !1,
                                    retryWithoutCredentials: !1,
                                    timeout: 6e4,
                                    timeoutId: -1,
                                    oncomplete: e || p,
                                    onerror: n || p,
                                    mimeType: r && !r.responseType ? "text/xml" : "",
                                    requireValidXML: !1,
                                    responseType: r && r.plainText ? "text" : "",
                                    useDomParser: !1,
                                    requestFilter: null,
                                },
                                r
                            ),
                            e =
                                ((o = c),
                                function (t, e) {
                                    var n = t.currentTarget || o.xhr;
                                    if ((clearTimeout(o.timeoutId), o.retryWithoutCredentials && o.xhr.withCredentials)) return g(n), void h((0, s.l7)({}, o, { xhr: null, withCredentials: !1, retryWithoutCredentials: !1 }));
                                    !e && 400 <= n.status && n.status < 600 && (e = n.status), m(o, e ? d.ul : d.ud, e || 6, t);
                                });
                        if ("XMLHttpRequest" in window) {
                            if (((i = c.xhr = c.xhr || new window.XMLHttpRequest()), "function" == typeof c.requestFilter)) {
                                try {
                                    a = c.requestFilter({ url: t, xhr: i });
                                } catch (t) {
                                    return e(t, 5), i;
                                }
                                a && "open" in a && "send" in a && (i = c.xhr = a);
                            }
                            (i.onreadystatechange =
                                ((u = c),
                                function (t) {
                                    var e,
                                        n = t.currentTarget || u.xhr;
                                    if (4 === n.readyState) {
                                        clearTimeout(u.timeoutId);
                                        n = n.status;
                                        if (400 <= n) m(u, d.ul, n < 600 ? n : 6);
                                        else if (200 === n) {
                                            e = u;
                                            if (((t = t.currentTarget || e.xhr), clearTimeout(e.timeoutId), e.responseType)) {
                                                if ("json" === e.responseType) {
                                                    var r = t;
                                                    var i = e;
                                                    if (!r.response || ("string" == typeof r.response && '"' !== r.responseText.substr(1)))
                                                        try {
                                                            r = (0, s.l7)({}, r, { response: JSON.parse(r.responseText) });
                                                        } catch (r) {
                                                            return void m(i, d.ul, 611, r);
                                                        }
                                                    return i.oncomplete(r);
                                                    return;
                                                }
                                            } else {
                                                var o,
                                                    i = t.responseXML;
                                                if (i)
                                                    try {
                                                        o = i.firstChild;
                                                    } catch (t) {}
                                                if (i && o) return v(t, i, e);
                                                if (e.useDomParser && t.responseText && !i && (i = (0, l.parseXML)(t.responseText)) && i.firstChild) return v(t, i, e);
                                                if (e.requireValidXML) return void m(e, d.ul, 602);
                                            }
                                            e.oncomplete(t);
                                        } else 0 === n && (0, f.isFileProtocol)() && !/^[a-z][a-z0-9+.-]*:/.test(u.url) && m(u, d.ul, 7);
                                    }
                                })),
                                (i.onerror = e),
                                "overrideMimeType" in i ? c.mimeType && i.overrideMimeType(c.mimeType) : (c.useDomParser = !0);
                            try {
                                (t = t.replace(/#.*$/, "")), i.open("GET", t, !0);
                            } catch (t) {
                                return e(t, 3), i;
                            }
                            if (c.responseType)
                                try {
                                    i.responseType = c.responseType;
                                } catch (t) {}
                            c.timeout &&
                                ((c.timeoutId = setTimeout(function () {
                                    g(i), m(c, d.ud, 1);
                                }, c.timeout)),
                                (i.onabort = function () {
                                    clearTimeout(c.timeoutId);
                                }));
                            try {
                                c.withCredentials && "withCredentials" in i && (i.withCredentials = !0), i.send();
                            } catch (t) {
                                e(t, 4);
                            }
                            return i;
                        }
                        m(c, d.ud, 2);
                    }
                    function g(t) {
                        (t.onload = null), (t.onprogress = null), (t.onreadystatechange = null), (t.onerror = null), "abort" in t && t.abort();
                    }
                    function m(t, e, n, r) {
                        t.onerror(e, t.url, t.xhr, new d.rG(e, n, r));
                    }
                    function v(t, e, n) {
                        var r = e.documentElement;
                        if (!n.requireValidXML || ("parsererror" !== r.nodeName && !r.getElementsByTagName("parsererror").length)) return t.responseXML || (t = (0, s.l7)({}, t, { responseXML: e })), n.oncomplete(t);
                        m(n, d.ul, 601);
                    }
                },
                328: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        ZP: function () {
                            return r;
                        },
                        on: function () {
                            return i;
                        },
                        IH: function () {
                            return o;
                        },
                        S1: function () {
                            return a;
                        },
                        X$: function () {
                            return u;
                        },
                        wj: function () {
                            return c;
                        },
                    });
                    ((n = s.prototype).on = function (t, e, n) {
                        if (!f(this, "on", t, [e, n]) || !e) return this;
                        var r = this._events || (this._events = {});
                        return (r[t] || (r[t] = [])).push({ callback: e, context: n }), this;
                    }),
                        (n.once = function (t, e, n) {
                            if (!f(this, "once", t, [e, n]) || !e) return this;
                            function r() {
                                i++ || (o.off(t, r), e.apply(this, arguments));
                            }
                            var i = 0,
                                o = this;
                            return (r._callback = e), this.on(t, r, n);
                        }),
                        (n.off = function (t, e, n) {
                            if (!this._events || !f(this, "off", t, [e, n])) return this;
                            if (!t && !e && !n) return delete this._events, this;
                            for (var r = t ? [t] : Object.keys(this._events), i = 0, o = r.length; i < o; i++) {
                                t = r[i];
                                var a = this._events[t];
                                if (a) {
                                    var u = (this._events[t] = []);
                                    if (e || n)
                                        for (var c = 0, s = a.length; c < s; c++) {
                                            var l = a[c];
                                            ((e && e !== l.callback && e !== l.callback._callback) || (n && n !== l.context)) && u.push(l);
                                        }
                                    u.length || delete this._events[t];
                                }
                            }
                            return this;
                        }),
                        (n.trigger = function (t) {
                            for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            if (!this._events) return this;
                            if (!f(this, "trigger", t, n)) return this;
                            var t = this._events[t],
                                i = this._events.all;
                            return t && d(t, n, this), i && d(i, arguments, this), this;
                        }),
                        (n.triggerSafe = function (t) {
                            for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                            if (!this._events) return this;
                            if (!f(this, "trigger", t, n)) return this;
                            var i = this._events[t],
                                o = this._events.all;
                            return i && d(i, n, this, t), o && d(o, arguments, this, t), this;
                        });
                    var r = s,
                        i = r.prototype.on,
                        o = r.prototype.once,
                        a = r.prototype.off,
                        u = r.prototype.trigger,
                        c = r.prototype.triggerSafe;
                    function s() {}
                    (r.on = i), (r.once = o), (r.off = a), (r.trigger = u);
                    var l = /\s+/;
                    function f(t, e, n, r) {
                        if (!n) return 1;
                        if ("object" == typeof n) for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && t[e].apply(t, [i, n[i]].concat(r));
                        else {
                            if (!l.test(n)) return 1;
                            for (var o = n.split(l), a = 0, u = o.length; a < u; a++) t[e].apply(t, [o[a]].concat(r));
                        }
                    }
                    function d(t, e, n, r) {
                        for (var i = -1, o = t.length; ++i < o; ) {
                            var a = t[i];
                            if (r)
                                try {
                                    a.callback.apply(a.context || n, e);
                                } catch (t) {
                                    console.log('Error in "' + r + '" event handler:', t);
                                }
                            else a.callback.apply(a.context || n, e);
                        }
                    }
                },
                2268: function (t, e, n) {
                    "use strict";
                    function r(t) {
                        return null !== navigator.userAgent.match(t);
                    }
                    n.d(e, {
                        pZ: function () {
                            return o;
                        },
                        xb: function () {
                            return a;
                        },
                        zc: function () {
                            return u;
                        },
                        id: function () {
                            return c;
                        },
                        DF: function () {
                            return s;
                        },
                        un: function () {
                            return l;
                        },
                        A: function () {
                            return f;
                        },
                        yS: function () {
                            return d;
                        },
                        Q6: function () {
                            return p;
                        },
                        i7: function () {
                            return h;
                        },
                        w1: function () {
                            return g;
                        },
                        G6: function () {
                            return m;
                        },
                        gn: function () {
                            return v;
                        },
                        O7: function () {
                            return y;
                        },
                        Dt: function () {
                            return b;
                        },
                        tq: function () {
                            return w;
                        },
                        cL: function () {
                            return k;
                        },
                        NO: function () {
                            return x;
                        },
                        dI: function () {
                            return C;
                        },
                    });
                    function i() {
                        return "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints;
                    }
                    var o = function () {
                            return r(/firefox\//i);
                        },
                        a = function () {
                            return r(/iP(hone|od)/i);
                        },
                        u = function () {
                            return r(/iPad/i) || i();
                        },
                        c = function () {
                            return r(/Macintosh/i) && !i();
                        },
                        s = function () {
                            return r(/FBAV/i);
                        },
                        l = function () {
                            return r(/\sEdge?\/\d+/i);
                        },
                        f = function () {
                            return r(/msie/i);
                        },
                        d = function () {
                            return r(/SMART-TV/);
                        },
                        p = function () {
                            return d() && !r(/SamsungBrowser/);
                        },
                        h = function () {
                            return r(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !l() && !r(/UCBrowser/i);
                        },
                        g = function () {
                            return !r(/\sEdg\/\d+/i) && (l() || r(/trident\/.+rv:\s*11/i) || f());
                        },
                        m = function () {
                            return r(/safari/i) && !r(/(?:Chrome|CriOS|chromium|android|phantom)/i) && !d();
                        },
                        v = function () {
                            return r(/iP(hone|ad|od)/i) || i();
                        };
                    function y() {
                        return !(r(/chrome\/[123456789]/i) && !r(/chrome\/18/i) && !o()) && b();
                    }
                    var b = function t() {
                            return "boolean" == typeof t.mock_ ? t.mock_ : r(/Android/i) && !r(/Windows Phone/i);
                        },
                        w =
                            ((b.mock_ = null),
                            function () {
                                return v() || b() || r(/Windows Phone/i);
                            }),
                        k = function t() {
                            if ("boolean" == typeof t.mock_) return t.mock_;
                            try {
                                return window.self !== window.top;
                            } catch (t) {
                                return !0;
                            }
                        },
                        x =
                            ((k.mock_ = null),
                            function () {
                                return !1;
                            }),
                        C = function () {
                            return 0;
                        };
                },
                974: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        oI: function () {
                            return r;
                        },
                        iv: function () {
                            return i;
                        },
                        oB: function () {
                            return u;
                        },
                        vs: function () {
                            return c;
                        },
                        HY: function () {
                            return l;
                        },
                    });
                    var o,
                        s = n(2957),
                        e = n(9563),
                        a = n.n(e),
                        r = a().clear;
                    function i(t, e, n, r) {
                        n = n || "all-players";
                        var i,
                            o = "";
                        "object" == typeof e
                            ? (u((i = document.createElement("div")), e),
                              (i = i.style.cssText),
                              Object.prototype.hasOwnProperty.call(e, "content") && i && (i = i + ' content: "' + e.content + '";'),
                              (o = "{" + (i = r && i ? i.replace(/;/g, " !important;") : i) + "}"))
                            : "string" == typeof e && (o = e),
                            "" !== o && "{}" !== o ? a().style([[t, t + o]], n) : a().clear(n, t);
                    }
                    function u(t, e) {
                        if (null != t) {
                            void 0 === t.length && (t = [t]);
                            var n,
                                r = {};
                            for (n in e)
                                Object.prototype.hasOwnProperty.call(e, n) &&
                                    (r[n] =
                                        ((u = n),
                                        (c = e[n]),
                                        "" === c || null == c
                                            ? ""
                                            : "string" == typeof c && isNaN(c)
                                            ? /png|gif|jpe?g/i.test(c) && c.indexOf("url") < 0
                                                ? "url(" + c + ")"
                                                : c
                                            : 0 === c || "z-index" === u || "opacity" === u
                                            ? "" + c
                                            : /color/i.test(u)
                                            ? "#" + (0, s.vk)(c.toString(16).replace(/^0x/i, ""), 6)
                                            : Math.ceil(c) + "px"));
                            for (var i = 0; i < t.length; i++) {
                                var o,
                                    a = t[i];
                                if (null != a)
                                    for (n in r)
                                        Object.prototype.hasOwnProperty.call(r, n) &&
                                            ((o = (function (t) {
                                                t = t.split("-");
                                                for (var e = 1; e < t.length; e++) t[e] = t[e].charAt(0).toUpperCase() + t[e].slice(1);
                                                return t.join("");
                                            })(n)),
                                            a.style[o] !== r[n] && (a.style[o] = r[n]));
                            }
                        }
                        var u, c;
                    }
                    function c(t, e) {
                        u(t, { transform: e });
                    }
                    function l(t, e) {
                        var n = "rgb",
                            r = void 0 !== e && 100 !== e,
                            i =
                                (r && (n += "a"),
                                o || (((i = document.createElement("canvas")).height = 1), (i.width = 1), (o = i.getContext("2d"))),
                                t ? isNaN(parseInt(t, 16)) || (t = "#" + t) : (t = "#000000"),
                                o.clearRect(0, 0, 1, 1),
                                (o.fillStyle = t),
                                o.fillRect(0, 0, 1, 1),
                                o.getImageData(0, 0, 1, 1).data);
                        return (n += "(" + i[0] + ", " + i[1] + ", " + i[2]), r && (n += ", " + e / 100), n + ")";
                    }
                },
                5004: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        z: function () {
                            return r;
                        },
                    });
                    var r =
                        Date.now ||
                        function () {
                            return new Date().getTime();
                        };
                },
                2799: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        pv: function () {
                            return s;
                        },
                        az: function () {
                            return l;
                        },
                        nh: function () {
                            return f;
                        },
                        bJ: function () {
                            return d;
                        },
                        oH: function () {
                            return p;
                        },
                        gB: function () {
                            return g;
                        },
                        FK: function () {
                            return m;
                        },
                        s1: function () {
                            return b;
                        },
                        cn: function () {
                            return w;
                        },
                        IV: function () {
                            return k;
                        },
                        L_: function () {
                            return x;
                        },
                        og: function () {
                            return C;
                        },
                        P$: function () {
                            return j;
                        },
                        EU: function () {
                            return P;
                        },
                        kq: function () {
                            return S;
                        },
                        cS: function () {
                            return T;
                        },
                        A8: function () {
                            return E;
                        },
                        SH: function () {
                            return _;
                        },
                        AH: function () {
                            return O;
                        },
                        i3: function () {
                            return A;
                        },
                        nG: function () {
                            return Z;
                        },
                        UM: function () {
                            return M;
                        },
                        Ww: function () {
                            return I;
                        },
                    });
                    var r,
                        i = n(6042),
                        o = n(2957),
                        a = n(8348),
                        u = window.DOMParser,
                        c = !0;
                    function s(t, e) {
                        return t.classList.contains(e);
                    }
                    function l(t) {
                        return d(t).firstChild;
                    }
                    function f(t, e) {
                        P(t);
                        if (e) {
                            for (var n = document.createDocumentFragment(), r = d(e).childNodes, i = 0; i < r.length; i++) n.appendChild(r[i].cloneNode(!0));
                            t.appendChild(n);
                        }
                    }
                    function d(t) {
                        t = (function (t) {
                            if (
                                (r ||
                                    ((r = new u()),
                                    (c = (function () {
                                        try {
                                            if (r.parseFromString("", "text/html")) return !0;
                                        } catch (t) {}
                                        return !1;
                                    })())),
                                c)
                            )
                                return r.parseFromString(t, "text/html").body;
                            var e = document.implementation.createHTMLDocument("");
                            return -1 < t.toLowerCase().indexOf("<!doctype") ? (e.documentElement.innerHTML = t) : (e.body.innerHTML = t), e.body;
                        })(t);
                        p(t);
                        for (var e = t.querySelectorAll("*"), n = e.length; n--; ) g(e[n]);
                        return t;
                    }
                    function p(t) {
                        for (var e = t.querySelectorAll("script,object,iframe,meta"), n = e.length; n--; ) {
                            var r = e[n];
                            r.parentNode.removeChild(r);
                        }
                        return t;
                    }
                    var h = new RegExp(/^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/);
                    function g(t) {
                        for (var e = t.attributes, n = e.length; n--; ) {
                            var r,
                                i = e[n].name;
                            /^on/.test(i) && t.removeAttribute(i), /href/.test(i) && ((r = e[n].value), (!/javascript:|javascript&colon;/.test(r) && h.test(r)) || t.removeAttribute(i));
                        }
                        return t;
                    }
                    function m(t) {
                        return t + (0 < t.toString().indexOf("%") ? "" : "px");
                    }
                    function v(t) {
                        return (0, i.HD)(t.className) ? t.className.split(" ") : [];
                    }
                    function y(t, e) {
                        (e = (0, o.fy)(e)), t.className !== e && (t.className = e);
                    }
                    function b(t) {
                        return t.classList || v(t);
                    }
                    function w(t, e) {
                        var n = v(t);
                        (Array.isArray(e) ? e : e.split(" ")).forEach(function (t) {
                            (0, i.r3)(n, t) || n.push(t);
                        }),
                            y(t, n.join(" "));
                    }
                    function k(t, e) {
                        var n = v(t),
                            e = Array.isArray(e) ? e : e.split(" ");
                        y(t, (0, i.e5)(n, e).join(" "));
                    }
                    function x(t, e, n) {
                        var r = t.className || "";
                        e.test(r) ? (r = r.replace(e, n)) : n && (r += " " + n), y(t, r);
                    }
                    function C(t, e, n) {
                        var r = s(t, e);
                        (n = (0, i.jn)(n) ? n : !r) !== r && (n ? w : k)(t, e);
                    }
                    function j(t, e, n) {
                        t.setAttribute(e, n);
                    }
                    function P(t) {
                        for (; t.firstChild; ) t.removeChild(t.firstChild);
                    }
                    function S(t) {
                        var e = document.createElement("link");
                        (e.rel = "stylesheet"), (e.href = t), document.getElementsByTagName("head")[0].appendChild(e);
                    }
                    function T(t) {
                        t && P(t);
                    }
                    function E(t) {
                        var e = { left: 0, right: 0, width: 0, height: 0, top: 0, bottom: 0 };
                        if (!t || !document.body.contains(t)) return e;
                        var t = t.getBoundingClientRect(),
                            n = window.pageYOffset,
                            r = window.pageXOffset;
                        return (t.width || t.height || t.left || t.top) && ((e.left = t.left + r), (e.right = t.right + r), (e.top = t.top + n), (e.bottom = t.bottom + n), (e.width = t.right - t.left), (e.height = t.bottom - t.top)), e;
                    }
                    function _(t, e) {
                        t.insertBefore(e, t.firstChild);
                    }
                    function O(t) {
                        return t.nextElementSibling;
                    }
                    function A(t) {
                        return t.previousElementSibling;
                    }
                    function Z(t, e, n, r) {
                        void 0 === n && (n = {}),
                            void 0 === r && (r = document),
                            h.test(t) &&
                                (((r = r.createElement("a")).href = t), (r.target = e), (r = g((0, i.l7)(r, n))), a.Browser.firefox ? r.dispatchEvent(new MouseEvent("click", { bubbles: !0, cancelable: !0, view: window })) : r.click());
                    }
                    function M() {
                        var t = window.screen.orientation;
                        return (!!t && ("landscape-primary" === t.type || "landscape-secondary" === t.type)) || 90 === window.orientation || -90 === window.orientation;
                    }
                    function I(t) {
                        return (
                            (t = t),
                            ((e = document.createElement("textarea")).innerHTML = t),
                            e.value
                                .replace(/&|<|>|"|''/gm, function (t) {
                                    return "&#" + t.charCodeAt(0) + ";";
                                })
                                .replace(/&#60;(\/?)(b|strong|i|em|p|br|ul|ol|li|h.)&#62;/gim, "<$1$2>")
                        );
                        var e;
                    }
                },
                4429: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return m;
                        },
                    });
                    var e = n(6042),
                        r = n(1569),
                        i = n(7034),
                        o = n(9888),
                        a = n(2957),
                        u = n(7411),
                        c = n(4742);
                    function s(t, e) {
                        (this.name = t), (this.message = e.message || e.toString()), (this.error = e);
                    }
                    var l = n(2268),
                        f = n(2799),
                        d = n(974),
                        p = n(6886),
                        h = n(1261),
                        g = n(5499),
                        n = n(6234),
                        m = (0, e.l7)({}, o, i, r, {
                            addClass: f.cn,
                            hasClass: f.pv,
                            removeClass: f.IV,
                            replaceClass: f.L_,
                            toggleClass: f.og,
                            classList: f.s1,
                            styleDimension: f.FK,
                            createElement: f.az,
                            emptyElement: f.EU,
                            addStyleSheet: f.kq,
                            bounds: f.A8,
                            openLink: f.nG,
                            replaceInnerHtml: f.nh,
                            css: d.iv,
                            clearCss: d.oI,
                            style: d.oB,
                            transform: d.vs,
                            getRgba: d.HY,
                            ajax: p.h,
                            crossdomain: function (t) {
                                var e = window.URL;
                                try {
                                    var n = new e(t, location.origin);
                                    return location.protocol + "//" + location.host != n.protocol + "//" + n.host;
                                } catch (t) {}
                                return !0;
                            },
                            tryCatch: function (t, e, n) {
                                if ((void 0 === n && (n = []), c.Z.debug)) return t.apply(e || this, n);
                                try {
                                    return t.apply(e || this, n);
                                } catch (e) {
                                    return new s(t.name, e);
                                }
                            },
                            Error: s,
                            Timer: u.Z,
                            log: g.c,
                            genId: n.B,
                            between: h.v,
                            foreach: function (t, e) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
                            },
                            flashVersion: l.dI,
                            isIframe: l.cL,
                            indexOf: e.cq,
                            trim: a.fy,
                            pad: a.vk,
                            extension: a.AO,
                            hms: a.WZ,
                            seconds: a.m9,
                            prefix: a.O4,
                            suffix: a.uA,
                            noop: function () {},
                        });
                },
                7543: function (t, e, n) {
                    "use strict";
                    function r(t) {
                        return !!(t = t || window.event) && /^(?:mouse|pointer|touch|gesture|click|key)/.test(t.type);
                    }
                    n.d(e, {
                        C: function () {
                            return r;
                        },
                    });
                },
                8518: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        tK: function () {
                            return p;
                        },
                        id: function () {
                            return h;
                        },
                        Cq: function () {
                            return g;
                        },
                        G3: function () {
                            return v;
                        },
                        t6: function () {
                            return b;
                        },
                        q2: function () {
                            return w;
                        },
                        Pm: function () {
                            return k;
                        },
                        dl: function () {
                            return C;
                        },
                        Dq: function () {
                            return j;
                        },
                        Mh: function () {
                            return P;
                        },
                    });
                    var c = n(6042),
                        r = n(2268),
                        a = n(6886),
                        i = n(7034),
                        o = n(696),
                        u = {},
                        s = {
                            aa: "Afar",
                            ab: "Abkhazian",
                            ae: "Avestan",
                            af: "Afrikaans",
                            ak: "Akan",
                            am: "Amharic",
                            ar: "Arabic",
                            an: "Aragonese",
                            as: "Assamese",
                            av: "Avaric",
                            ay: "Aymara",
                            az: "Azerbaijani",
                            ba: "Bashkir",
                            be: "Belarusian",
                            bg: "Bulgarian",
                            bh: "Bihari languages",
                            bi: "Bislama",
                            bm: "Bambara",
                            bn: "Bengali",
                            bo: "Tibetan",
                            br: "Breton",
                            bs: "Bosnian",
                            ca: "Catalan",
                            ce: "Chechen",
                            ch: "Chamorro",
                            co: "Corsican",
                            cr: "Cree",
                            cs: "Czech",
                            cu: "Church Slavic",
                            cv: "Chuvash",
                            cy: "Welsh",
                            da: "Danish",
                            de: "German",
                            dv: "Divehi",
                            dz: "Dzongkha",
                            ee: "Ewe",
                            el: "Greek",
                            en: "English",
                            eo: "Esperanto",
                            es: "Spanish",
                            et: "Estonian",
                            eu: "Basque",
                            fa: "Persian",
                            ff: "Fulah",
                            fi: "Finnish",
                            fj: "Fijian",
                            fo: "Faroese",
                            fr: "French",
                            fy: "Western Frisian",
                            ga: "Irish",
                            gd: "Gaelic",
                            gl: "Galician",
                            gn: "Guarani",
                            gu: "Gujarati",
                            gv: "Manx",
                            ha: "Hausa",
                            he: "Hebrew",
                            hi: "Hindi",
                            ho: "Hiri Motu",
                            hr: "Croatian",
                            ht: "Haitian",
                            hu: "Hungarian",
                            hy: "Armenian",
                            hz: "Herero",
                            ia: "Interlingua",
                            id: "Indonesian",
                            ie: "Interlingue",
                            ig: "Igbo",
                            ii: "Sichuan Yi",
                            ik: "Inupiaq",
                            io: "Ido",
                            is: "Icelandic",
                            it: "Italian",
                            iu: "Inuktitut",
                            ja: "Japanese",
                            jv: "Javanese",
                            ka: "Georgian",
                            kg: "Kongo",
                            ki: "Kikuyu",
                            kj: "Kuanyama",
                            kk: "Kazakh",
                            kl: "Kalaallisut",
                            km: "Central Khmer",
                            kn: "Kannada",
                            ko: "Korean",
                            kr: "Kanuri",
                            ks: "Kashmiri",
                            ku: "Kurdish",
                            kv: "Komi",
                            kw: "Cornish",
                            ky: "Kirghiz",
                            la: "Latin",
                            lb: "Luxembourgish",
                            lg: "Ganda",
                            li: "Limburgan",
                            lo: "Lao",
                            ln: "Lingala",
                            lt: "Lithuanian",
                            lu: "Luba-Katanga",
                            lv: "Latvian",
                            mg: "Malagasy",
                            mh: "Marshallese",
                            mi: "Maori",
                            mk: "Macedonian",
                            ml: "Malayalam",
                            mn: "Mongolian",
                            mr: "Marathi",
                            ms: "Malay",
                            mt: "Maltese",
                            my: "Burmese",
                            na: "Nauru",
                            nb: "Bokmål",
                            nd: "Ndebele",
                            ne: "Nepali",
                            ng: "Ndonga",
                            nl: "Dutch",
                            nn: "Norwegian Nynorsk",
                            no: "Norwegian",
                            nr: "Ndebele",
                            nv: "Navajo",
                            ny: "Chichewa",
                            oc: "Occitan",
                            oj: "Ojibwa",
                            om: "Oromo",
                            or: "Oriya",
                            os: "Ossetian",
                            pa: "Panjabi",
                            pi: "Pali",
                            pl: "Polish",
                            pt: "Portuguese",
                            ps: "Pushto",
                            qu: "Quechua",
                            rm: "Romansh",
                            rn: "Rundi",
                            ro: "Romanian",
                            ru: "Russian",
                            rw: "Kinyarwanda",
                            sa: "Sanskrit",
                            sc: "Sardinian",
                            sd: "Sindhi",
                            se: "Northern Sami",
                            sg: "Sango",
                            si: "Sinhala",
                            sk: "Slovak",
                            sl: "Slovenian",
                            sm: "Samoan",
                            sn: "Shona",
                            so: "Somali",
                            sq: "Albanian",
                            sr: "Serbian",
                            ss: "Swati",
                            st: "Sotho",
                            su: "Sundanese",
                            sw: "Swahili",
                            sv: "Swedish",
                            ta: "Tamil",
                            te: "Telugu",
                            tg: "Tajik",
                            th: "Thai",
                            ti: "Tigrinya",
                            tk: "Turkmen",
                            tl: "Tagalog",
                            tn: "Tswana",
                            to: "Tonga",
                            tr: "Turkish",
                            ts: "Tsonga",
                            tt: "Tatar",
                            tw: "Twi",
                            ty: "Tahitian",
                            ug: "Uighur",
                            uk: "Ukrainian",
                            ur: "Urdu",
                            uz: "Uzbek",
                            ve: "Venda",
                            vi: "Vietnamese",
                            vo: "Volapük",
                            wa: "Walloon",
                            wo: "Wolof",
                            xh: "Xhosa",
                            yi: "Yiddish",
                            yo: "Yoruba",
                            za: "Zhuang",
                            zh: "Chinese",
                            zu: "Zulu",
                        },
                        l = (0, c.U_)(s);
                    function f(t) {
                        var t = d(t),
                            e = t.indexOf("_");
                        return -1 === e ? t : t.substring(0, e);
                    }
                    function d(t) {
                        return t.toLowerCase().replace("-", "_");
                    }
                    function p(n) {
                        return n
                            ? Object.keys(n).reduce(function (t, e) {
                                  return (t[d(e)] = n[e]), t;
                              }, {})
                            : {};
                    }
                    function h(t) {
                        if (t) return (3 !== t.length && s[f(t)]) || t;
                    }
                    function g(t) {
                        return l[t] || "";
                    }
                    function m(t) {
                        t = t.querySelector("html");
                        return t ? t.getAttribute("lang") : null;
                    }
                    var v = function t() {
                            if ("string" == typeof t.mock_) return t.mock_;
                            var e = m(document);
                            if (!e && (0, r.cL)())
                                try {
                                    e = m(window.top.document);
                                } catch (t) {}
                            return e || navigator.language || "en";
                        },
                        y = ((v.mock_ = null), ["ar", "da", "de", "el", "es", "fi", "fr", "he", "id", "it", "ja", "ko", "nb", "nl", "nn", "no", "oc", "pt", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh"]);
                    function b(t) {
                        return 8207 === t.charCodeAt(0) || /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(t);
                    }
                    var w = function t(e) {
                        return "boolean" == typeof t.mock_ ? t.mock_ : 0 <= y.indexOf(f(e));
                    };
                    function k(t, e, n) {
                        return (0, c.l7)(
                            {},
                            ((r = (t = t).advertising),
                            (i = t.related),
                            (o = t.sharing),
                            (a = t.abouttext),
                            (u = (0, c.l7)({}, t.localization)),
                            r &&
                                ((u.advertising = u.advertising || {}),
                                x(u.advertising, r, "admessage"),
                                x(u.advertising, r, "cuetext"),
                                x(u.advertising, r, "loadingAd"),
                                x(u.advertising, r, "podmessage"),
                                x(u.advertising, r, "skipmessage"),
                                x(u.advertising, r, "skiptext")),
                            "string" == typeof u.related ? (u.related = { heading: u.related }) : (u.related = u.related || {}),
                            i && x(u.related, i, "autoplaymessage"),
                            o && ((u.sharing = u.sharing || {}), x(u.sharing, o, "heading"), x(u.sharing, o, "copied")),
                            a && x(u, t, "abouttext"),
                            (r = u.close || u.nextUpClose) && (u.close = r),
                            u),
                            e[f(n)],
                            e[d(n)]
                        );
                        var r, i, o, a, u;
                    }
                    function x(t, e, n) {
                        e = t[n] || e[n];
                        e && (t[n] = e);
                    }
                    w.mock_ = null;
                    var C = function t(e) {
                            return "boolean" == typeof t.mock_
                                ? t.mock_
                                : (0, i.isDeepKeyCompliant)(o.Z, e, function (t, e) {
                                      return "string" == typeof e[t];
                                  });
                        },
                        j =
                            ((C.mock_ = null),
                            function t(e, o) {
                                if ("function" == typeof t.mock_) return t.mock_;
                                var n,
                                    r = u[o];
                                return (
                                    r ||
                                        ((n = e + "translations/" + ((e = f(o)), (/^n[bn]$/.test(e) ? "no" : e) + ".json")),
                                        (u[o] = r = new Promise(function (t, i) {
                                            (0, a.h)({
                                                url: n,
                                                oncomplete: t,
                                                onerror: function (t, e, n, r) {
                                                    (u[o] = null), i(r);
                                                },
                                                responseType: "json",
                                            });
                                        }))),
                                    r
                                );
                            });
                    function P(t, e) {
                        var n = (0, c.l7)({}, t, e);
                        return S(n, "errors", t, e), S(n, "related", t, e), S(n, "sharing", t, e), S(n, "advertising", t, e), S(n, "shortcuts", t, e), S(n, "captionsStyles", t, e), n;
                    }
                    function S(t, e, n, r) {
                        t[e] = (0, c.l7)({}, n[e], r[e]);
                    }
                    j.mock_ = null;
                },
                5499: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        c: function () {
                            return r;
                        },
                    });
                    var r = "function" == typeof console.log ? console.log.bind(console) : function () {};
                },
                1261: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        v: function () {
                            return r;
                        },
                    });
                    var r = function (t, e, n) {
                        return Math.max(Math.min(t, n), e);
                    };
                },
                9888: function (t, e, n) {
                    "use strict";
                    n.r(e),
                        n.d(e, {
                            getAbsolutePath: function () {
                                return r;
                            },
                            isAbsolutePath: function () {
                                return c;
                            },
                            parseXML: function () {
                                return o;
                            },
                            serialize: function () {
                                return a;
                            },
                            parseDimension: function () {
                                return s;
                            },
                            timeFormat: function () {
                                return l;
                            },
                            timeFormatAria: function () {
                                return f;
                            },
                        });
                    var u = n(7034),
                        i = n(6042);
                    function r(t, e) {
                        if (((e && (0, u.exists)(e)) || (e = document.location.href), !(0, u.exists)(t))) return "";
                        if (c(t)) return t;
                        var n,
                            r = e.substring(0, e.indexOf("://") + 3),
                            i = e.substring(r.length, e.indexOf("/", r.length + 1));
                        n = 0 === t.indexOf("/") ? t.split("/") : (e = (e = e.split("?")[0]).substring(r.length + i.length + 1, e.lastIndexOf("/"))).split("/").concat(t.split("/"));
                        for (var o = [], a = 0; a < n.length; a++) n[a] && (0, u.exists)(n[a]) && "." !== n[a] && (".." === n[a] ? o.pop() : o.push(n[a]));
                        return r + i + "/" + o.join("/");
                    }
                    function c(t) {
                        return /^(?:(?:https?|file):)?\/\//.test(t);
                    }
                    function o(t) {
                        var e = null;
                        try {
                            (e = new window.DOMParser().parseFromString(t, "text/xml")).querySelector("parsererror") && (e = null);
                        } catch (t) {}
                        return e;
                    }
                    function a(t) {
                        if (void 0 === t) return null;
                        if ("string" == typeof t && t.length < 6) {
                            var e = t.toLowerCase();
                            if ("true" === e) return !0;
                            if ("false" === e) return !1;
                            if (!(0, i.i2)(Number(t)) && !(0, i.i2)(parseFloat(t))) return Number(t);
                        }
                        return t;
                    }
                    function s(t) {
                        return (0, i.qh)(t) ? t : "" === t ? 0 : -1 < t.lastIndexOf("%") ? t : parseInt(t.replace("px", ""), 10);
                    }
                    function l(t, e) {
                        if (((0, i.i2)(t) && (t = parseInt(t.toString())), (0, i.i2)(t) || !isFinite(t) || (t <= 0 && !e))) return "00:00";
                        var e = t < 0 ? "-" : "",
                            n = ((t = Math.abs(t)), Math.floor(t / 3600)),
                            r = Math.floor((t - 3600 * n) / 60),
                            t = Math.floor(t % 60);
                        return e + (n ? n + ":" : "") + (r < 10 ? "0" : "") + r + ":" + (t < 10 ? "0" : "") + t;
                    }
                    function f(t) {
                        if (((0, i.i2)(t) && (t = parseInt(t.toString())), (0, i.i2)(t) || !isFinite(t) || t <= 0)) return "0 seconds";
                        var e = Math.floor(t / 3600),
                            n = Math.floor((t - 3600 * e) / 60),
                            t = Math.floor(t % 60);
                        return (e ? e + (1 < e ? " hours, " : 1 === e ? " hour, " : "") : "") + (n ? n + (1 < n ? " minutes, " : 1 === n ? " minute, " : "") : "") + t + (1 !== t ? " seconds" : 1 === t ? " second" : "");
                    }
                },
                1569: function (t, e, n) {
                    "use strict";
                    n.r(e),
                        n.d(e, {
                            getScriptPath: function () {
                                return o;
                            },
                            repo: function () {
                                return a;
                            },
                            versionCheck: function () {
                                return u;
                            },
                            loadFrom: function () {
                                return c;
                            },
                        });
                    var i = n(6601),
                        r = n(7034),
                        o = function (t) {
                            for (var e = document.getElementsByTagName("script"), n = 0; n < e.length; n++) {
                                var r = e[n].src;
                                if (r) {
                                    var i = r.lastIndexOf("/" + t);
                                    if (0 <= i) return r.substr(0, i + 1);
                                }
                            }
                            return "";
                        },
                        a = function () {
                            return ((0, r.isFileProtocol)() ? "https:" : "") + "//player.tavoos.net/";
                        },
                        u = function (t) {
                            var t = ("0" + t).split(/\W/),
                                e = i.i.split(/\W/),
                                n = parseFloat(t[0]),
                                r = parseFloat(e[0]);
                            return !(r < n || (n === r && parseFloat("0" + t[1]) > parseFloat(e[1])));
                        },
                        c = function () {
                            return a();
                        };
                },
                6234: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        F: function () {
                            return r;
                        },
                        B: function () {
                            return i;
                        },
                    });
                    var r = 12;
                    function i(t) {
                        for (var e = ""; e.length < t; )
                            e += (function () {
                                try {
                                    var t = window.crypto || window.msCrypto;
                                    if (t && t.getRandomValues) return t.getRandomValues(new Uint32Array(1))[0].toString(36);
                                } catch (t) {}
                                return Math.random().toString(36).slice(2, 9);
                            })();
                        return e.slice(0, t);
                    }
                },
                1776: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        U: function () {
                            return r;
                        },
                        W: function () {
                            return i;
                        },
                    });
                    var r =
                            window.requestAnimationFrame ||
                            function (t) {
                                return setTimeout(t, 17);
                            },
                        i = window.cancelAnimationFrame || clearTimeout;
                },
                676: function (t, e, n) {
                    "use strict";
                    var r = n(6042),
                        i = n(328),
                        o = n(1643),
                        a = {};
                    function u(u, c, s) {
                        var e = this,
                            n = 0;
                        function l(t) {
                            (n = 2), e.trigger(o.pn, t).off();
                        }
                        function f(t) {
                            (n = 3), e.trigger(o.xQ, t).off();
                        }
                        (this.getStatus = function () {
                            return n;
                        }),
                            (this.load = function () {
                                var t = a[u];
                                return (
                                    0 === n &&
                                        (t && t.then(f).catch(l),
                                        (n = 1),
                                        (t = new Promise(function (e, n) {
                                            function t(t) {
                                                i(), l(t), n(t);
                                            }
                                            var r = (c
                                                    ? function (t) {
                                                          var e = document.createElement("link");
                                                          return (e.type = "text/css"), (e.rel = "stylesheet"), (e.href = t), e;
                                                      }
                                                    : function (t, e) {
                                                          var n = document.createElement("script");
                                                          return (n.type = "text/javascript"), (n.charset = "utf-8"), (n.async = !0), (n.timeout = e || 45e3), (n.src = t), n;
                                                      })(u, s),
                                                i = function () {
                                                    (r.onerror = r.onload = null), clearTimeout(o);
                                                },
                                                o = setTimeout(function () {
                                                    t(new Error("Network timeout " + u));
                                                }, 45e3),
                                                a =
                                                    ((r.onerror = function () {
                                                        t(new Error("Failed to load " + u));
                                                    }),
                                                    (r.onload = function (t) {
                                                        i(), f(t), e(t);
                                                    }),
                                                    document.getElementsByTagName("head")[0] || document.documentElement);
                                            a.insertBefore(r, a.firstChild);
                                        })),
                                        (a[u] = t)),
                                    t
                                );
                            });
                    }
                    (0, r.l7)(u.prototype, i.ZP), (e.ZP = u);
                },
                2957: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        fy: function () {
                            return r;
                        },
                        vk: function () {
                            return i;
                        },
                        Dc: function () {
                            return o;
                        },
                        AO: function () {
                            return c;
                        },
                        WZ: function () {
                            return s;
                        },
                        m9: function () {
                            return l;
                        },
                        U5: function () {
                            return f;
                        },
                        O4: function () {
                            return d;
                        },
                        uA: function () {
                            return p;
                        },
                        zz: function () {
                            return h;
                        },
                    });
                    var a = n(6042),
                        u = window.parseFloat;
                    function r(t) {
                        return t.replace(/^\s+|\s+$/g, "");
                    }
                    function i(t, e, n) {
                        for (t = "" + t, n = n || "0"; t.length < e; ) t = n + t;
                        return t;
                    }
                    function o(t, e) {
                        for (var n = t.attributes, r = 0; r < n.length; r++) if (n[r].name && n[r].name.toLowerCase() === e.toLowerCase()) return n[r].value.toString();
                        return "";
                    }
                    function c(t) {
                        if (!t || "rtmp" === t.substr(0, 4)) return "";
                        var e = /[(,]format=(m3u8|mpd)-/i.exec(t);
                        if (e) return e[1];
                        e = t.replace(/^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/, "$1");
                        return e !== t ? e.toLowerCase() : -1 < (t = t.split("?")[0].split("#")[0]).lastIndexOf(".") ? t.substr(t.lastIndexOf(".") + 1, t.length).toLowerCase() : "";
                    }
                    function s(t) {
                        var e = ((t / 60) | 0) % 60,
                            n = t % 60;
                        return i(((t / 3600) | 0).toString(), 2) + ":" + i(e.toString(), 2) + ":" + i(n.toFixed(3), 6);
                    }
                    function l(t, e) {
                        if (!t) return 0;
                        if ((0, a.qh)(t)) return t;
                        var t = t.replace(",", "."),
                            n = t.slice(-1),
                            r = t.split(":"),
                            i = r.length,
                            o = 0;
                        return (
                            "s" === n
                                ? (o = u(t))
                                : "m" === n
                                ? (o = 60 * u(t))
                                : "h" === n
                                ? (o = 3600 * u(t))
                                : 1 < i
                                ? ((n = i - 1), 4 === i && (e && (o = u(r[n]) / e), --n), (o = (o += u(r[n])) + 60 * u(r[n - 1])), 3 <= i && (o += 3600 * u(r[n - 2])))
                                : (o = u(t)),
                            (0, a.qh)(o) ? o : 0
                        );
                    }
                    function f(t, e, n) {
                        var r;
                        return (0, a.HD)(t) && "%" === t.slice(-1) ? ((r = u(t)), e && (0, a.qh)(e) && (0, a.qh)(r) ? (e * r) / 100 : null) : l(t, n);
                    }
                    function d(t, e) {
                        return t.map(function (t) {
                            return e + t;
                        });
                    }
                    function p(t, e) {
                        return t.map(function (t) {
                            return t + e;
                        });
                    }
                    function h(t) {
                        return !!t && (0, a.HD)(t) && "%" === t.slice(-1);
                    }
                },
                5882: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        ZP: function () {
                            return y;
                        },
                        GU: function () {
                            return S;
                        },
                        dO: function () {
                            return M;
                        },
                    });
                    var i = n(8348),
                        l = n(1643),
                        e = n(328),
                        o = n(5004),
                        f = n(2799);
                    function r(t, e) {
                        return (r =
                            Object.setPrototypeOf ||
                            function (t, e) {
                                return (t.__proto__ = e), t;
                            })(t, e);
                    }
                    var d,
                        a,
                        u,
                        n = "ontouchstart" in window,
                        c = "PointerEvent" in window && !i.OS.android,
                        s = !(c || (n && i.OS.mobile)),
                        p = "window",
                        h = "select",
                        g = "keydown",
                        m = i.Features.passiveEvents,
                        v = !!m && { passive: !0 },
                        y =
                            ((u = e.ZP),
                            (n = u),
                            ((e = w).prototype = Object.create(n.prototype)),
                            r((e.prototype.constructor = e), n),
                            ((e = w.prototype).on = function (t, e, n) {
                                return !k(t) || this.handlers[t] || P[t](this), u.prototype.on.call(this, t, e, n);
                            }),
                            (e.off = function (t, e, n) {
                                var r,
                                    i = this;
                                return (
                                    k(t)
                                        ? E(this, t)
                                        : t ||
                                          ((r = this.handlers),
                                          Object.keys(r).forEach(function (t) {
                                              E(i, t);
                                          })),
                                    u.prototype.off.call(this, t, e, n)
                                );
                            }),
                            (e.destroy = function () {
                                this.el && (this.off(), c && _(this), (this.el = null));
                            }),
                            w),
                        b = /\s+/;
                    function w(t, e) {
                        var n = u.call(this) || this,
                            r = !(e = e || {}).preventScrolling;
                        return (
                            (n.directSelect = !!e.directSelect),
                            (n.dragged = !1),
                            (n.enableDoubleClick = !1),
                            (n.el = t),
                            (n.handlers = {}),
                            (n.options = {}),
                            (n.lastClick = 0),
                            (n.lastStart = 0),
                            (n.passive = r),
                            (n.pointerId = null),
                            (n.startX = 0),
                            (n.startY = 0),
                            (n.event = null),
                            (n.clicking = !1),
                            n
                        );
                    }
                    function k(t) {
                        return t && !b.test(t) && "object" != typeof t;
                    }
                    function x(i) {
                        var o, a, u, c, s;
                        i.handlers.init ||
                            ((o = i.el),
                            (a = i.passive),
                            (u = !!m && { passive: a }),
                            (c = function (t) {
                                var e, n;
                                i.dragged ? A(i, l.Wp, t) : ((n = (e = Z(t)).pageX), (e = e.pageY), 36 < (n = n - i.startX) * n + (n = e - i.startY) * n && (A(i, l.nv, t), (i.dragged = !0), A(i, l.Wp, t))),
                                    a || "touchmove" !== t.type || (t.preventDefault && t.preventDefault());
                            }),
                            (s = function (t) {
                                clearTimeout(d), i.el && (_(i), E(i, p), i.dragged && ((i.dragged = !1), A(i, l.Sv, t)));
                            }),
                            j(i, "init"),
                            I(
                                i,
                                "init",
                                function (t) {
                                    var e, n, r;
                                    (0, f.IV)(o, "jw-tab-focus"),
                                        M(t) ||
                                            ((n = t.target),
                                            (e = t.type),
                                            (i.directSelect && n !== o) ||
                                                ((r = (n = Z(t)).pageX),
                                                (n = n.pageY),
                                                (i.dragged = !1),
                                                (i.startX = r),
                                                (i.startY = n),
                                                E(i, p),
                                                "pointerdown" === e && t.isPrimary
                                                    ? (a || ((r = t.pointerId), (i.pointerId = r), o.setPointerCapture(r)), T(i, p, "pointermove", c, u), T(i, p, "pointercancel", s), T(i, p, "pointerup", s))
                                                    : "mousedown" === e
                                                    ? (T(i, p, "mousemove", c, u), T(i, p, "mouseup", s))
                                                    : "touchstart" === e && (T(i, p, "touchmove", c, u), T(i, p, "touchcancel", s), T(i, p, "touchend", s))));
                                },
                                u
                            ));
                    }
                    function C(r) {
                        var i;
                        r.handlers.select ||
                            ((i = r.el),
                            j(r, h),
                            I(r, h, function (t) {
                                var e = t.target;
                                M(t) || (r.directSelect && e !== i) || (t.isPrimary && "BUTTON" === e.tageName && e.focus(), (r.lastStart = (0, o.z)()), (r.clicking = !0));
                            }),
                            T(r, h, "click", function (t) {
                                var e, n;
                                M(t) ||
                                    (r.directSelect && t.target !== i) ||
                                    ((500 < (0, o.z)() - r.lastStart && !0 === r.clicking) ||
                                        ((n = t), (e = r).enableDoubleClick && ((0, o.z)() - e.lastClick < 300 ? (A(e, l.P, n), (e.lastClick = 0)) : (e.lastClick = (0, o.z)())), A(r, l.ot, t)),
                                    (r.clicking = !1));
                            }));
                    }
                    function j(t, e) {
                        var n;
                        (a = a || new y(document).on("interaction")),
                            t.handlers.init ||
                                t.handlers.select ||
                                ((n = t.el),
                                T(t, e, "blur", function () {
                                    (0, f.IV)(n, "jw-tab-focus"), (t.clicking = !1);
                                }),
                                T(t, e, "focus", function () {
                                    a.event && a.event.type === g && (0, f.cn)(n, "jw-tab-focus");
                                }));
                    }
                    var P = {
                        drag: function (t) {
                            x(t);
                        },
                        dragStart: function (t) {
                            x(t);
                        },
                        dragEnd: function (t) {
                            x(t);
                        },
                        click: function (t) {
                            C(t);
                        },
                        doubleClick: function (t) {
                            (t.enableDoubleClick = !0), C(t);
                        },
                        longPress: function (e) {
                            var n,
                                r = "longPress";
                            i.OS.iOS
                                ? ((n = function () {
                                      clearTimeout(d);
                                  }),
                                  T(e, r, "touchstart", function (t) {
                                      n(),
                                          (d = setTimeout(function () {
                                              A(e, r, t);
                                          }, 500));
                                  }),
                                  T(e, r, "touchmove", n),
                                  T(e, r, "touchcancel", n),
                                  T(e, r, "touchend", n))
                                : (e.el.oncontextmenu = function (t) {
                                      return A(e, r, t), !1;
                                  });
                        },
                        focus: function (e) {
                            var n = "focus";
                            T(e, n, n, function (t) {
                                O(e, n, t);
                            });
                        },
                        blur: function (e) {
                            var n = "blur";
                            T(e, n, n, function (t) {
                                O(e, n, t);
                            });
                        },
                        over: function (e) {
                            (c || s) &&
                                T(e, l.B1, c ? "pointerover" : "mouseover", function (t) {
                                    "touch" !== t.pointerType && A(e, l.B1, t);
                                });
                        },
                        out: function (n) {
                            var r;
                            c
                                ? ((r = n.el),
                                  T(n, l.U3, "pointerout", function (t) {
                                      var e;
                                      "touch" !== t.pointerType && "clientX" in t && ((e = document.elementFromPoint(t.clientX, t.clientY)), r.contains(e) || A(n, l.U3, t));
                                  }))
                                : s &&
                                  T(n, l.U3, "mouseout", function (t) {
                                      A(n, l.U3, t);
                                  });
                        },
                        move: function (e) {
                            (c || s) &&
                                T(e, l.tP, c ? "pointermove" : "mousemove", function (t) {
                                    "touch" !== t.pointerType && A(e, l.tP, t);
                                });
                        },
                        enter: function (e) {
                            T(e, l.K5, g, function (t) {
                                ("Enter" !== t.key && 13 !== t.keyCode) || (t.stopPropagation(), O(e, l.K5, t));
                            });
                        },
                        keydown: function (e) {
                            T(
                                e,
                                g,
                                g,
                                function (t) {
                                    O(e, g, t);
                                },
                                !1
                            );
                        },
                        gesture: function (e) {
                            function t(t) {
                                return A(e, n, t);
                            }
                            var n = "gesture";
                            T(e, n, "click", t), T(e, n, g, t);
                        },
                        interaction: function (e) {
                            function t(t) {
                                e.event = t;
                            }
                            var n = "interaction";
                            T(e, n, "mousedown", t, !0), T(e, n, g, t, !0);
                        },
                        tap: function () {},
                        doubleTap: function () {},
                    };
                    function S(t) {
                        t = t.ownerDocument || t;
                        return t.defaultView || t.parentWindow || window;
                    }
                    function T(t, e, n, r, i) {
                        void 0 === i && (i = v);
                        var o = t.handlers[e],
                            a = t.options[e];
                        if ((o || ((o = t.handlers[e] = {}), (a = t.options[e] = {})), o[n])) throw new Error(e + " " + n + " already registered");
                        (o[n] = r), (a[n] = i);
                        o = t.el;
                        (e === p ? S(o) : o).addEventListener(n, r, i);
                    }
                    function E(t, e) {
                        var n = t.el,
                            r = t.handlers,
                            t = t.options,
                            i = e === p ? S(n) : n,
                            o = r[e],
                            a = t[e];
                        o &&
                            (Object.keys(o).forEach(function (t) {
                                var e = a[t];
                                "boolean" == typeof e ? i.removeEventListener(t, o[t], e) : i.removeEventListener(t, o[t]);
                            }),
                            (r[e] = null),
                            (t[e] = null));
                    }
                    function _(t) {
                        var e = t.el;
                        null !== t.pointerId && (e.releasePointerCapture(t.pointerId), (t.pointerId = null));
                    }
                    function O(t, e, n) {
                        var r = t.el,
                            i = n.target;
                        t.trigger(e, { type: e, sourceEvent: n, currentTarget: r, target: i });
                    }
                    function A(t, e, n) {
                        (r = t.el), (o = n.target), (a = n.touches), (c = n.changedTouches), (u = n.pointerType), (u = a || c ? ((i = (a && a.length ? a : c)[0]), u || "touch") : ((i = n), u || "mouse"));
                        var r,
                            i,
                            o,
                            a,
                            u,
                            c = { type: e, pointerType: u, pageX: (a = i).pageX, pageY: a.pageY, sourceEvent: n, currentTarget: r, target: o };
                        t.trigger(e, c);
                    }
                    function Z(t) {
                        return 0 === t.type.indexOf("touch") ? (t.originalEvent || t).changedTouches[0] : t;
                    }
                    function M(t) {
                        return !(!t.ctrlKey || "click" !== t.type) || ("which" in t ? 3 === t.which : "button" in t && 2 === t.button);
                    }
                    function I(t, e, n, r) {
                        c ? T(t, e, "pointerdown", n, r) : (s && T(t, e, "mousedown", n, r), T(t, e, "touchstart", n, r));
                    }
                },
                6042: function (N, t, e) {
                    "use strict";
                    e.d(t, {
                        S6: function () {
                            return f;
                        },
                        UI: function () {
                            return d;
                        },
                        u4: function () {
                            return p;
                        },
                        sE: function () {
                            return h;
                        },
                        hX: function () {
                            return g;
                        },
                        $6: function () {
                            return m;
                        },
                        Yj: function () {
                            return v;
                        },
                        dp: function () {
                            return ot;
                        },
                        vM: function () {
                            return at;
                        },
                        e1: function () {
                            return y;
                        },
                        r3: function () {
                            return b;
                        },
                        ar: function () {
                            return st;
                        },
                        _e: function () {
                            return lt;
                        },
                        e5: function () {
                            return w;
                        },
                        cq: function () {
                            return k;
                        },
                        ak: function () {
                            return x;
                        },
                        P2: function () {
                            return pt;
                        },
                        U_: function () {
                            return gt;
                        },
                        ce: function () {
                            return mt;
                        },
                        l7: function () {
                            return j;
                        },
                        ei: function () {
                            return vt;
                        },
                        Kn: function () {
                            return S;
                        },
                        mf: function () {
                            return E;
                        },
                        hj: function () {
                            return _;
                        },
                        HD: function () {
                            return bt;
                        },
                        xV: function () {
                            return wt;
                        },
                        i2: function () {
                            return O;
                        },
                        jn: function () {
                            return kt;
                        },
                        o8: function () {
                            return xt;
                        },
                        yR: function () {
                            return Z;
                        },
                        a9: function () {
                            return Ct;
                        },
                        Cb: function () {
                            return M;
                        },
                        wB: function () {
                            return I;
                        },
                        qh: function () {
                            return jt;
                        },
                    });
                    function B(t, e) {
                        var n;
                        return function () {
                            return 0 < --t && (n = e.apply(this, arguments)), t <= 1 && (e = null), n;
                        };
                    }
                    function L(t) {
                        return null == t ? Z : E(t) ? t : M(t);
                    }
                    function D(a) {
                        return function (n, r, i) {
                            var o = {};
                            return (
                                (r = L(r)),
                                f(n, function (t, e) {
                                    e = r.call(i, t, e, n);
                                    a(o, e, t);
                                }),
                                o
                            );
                        };
                    }
                    function a() {}
                    function n(i) {
                        var o = c.call(arguments, 1);
                        return function () {
                            for (var t = 0, e = o.slice(), n = 0, r = e.length; n < r; n++) A(e[n], "partial") && (e[n] = arguments[t++]);
                            for (; t < arguments.length; ) e.push(arguments[t++]);
                            return i.apply(this, e);
                        };
                    }
                    function z(t, e) {
                        var n = c.call(arguments, 2);
                        return setTimeout(function () {
                            return t.apply(null, n);
                        }, e);
                    }
                    var e = e(5004),
                        u = {},
                        i = Array.prototype,
                        r = Object.prototype,
                        R = Function.prototype,
                        c = i.slice,
                        o = i.concat,
                        s = r.toString,
                        q = r.hasOwnProperty,
                        H = i.map,
                        U = i.reduce,
                        V = i.forEach,
                        G = i.filter,
                        K = i.every,
                        Q = i.some,
                        W = i.indexOf,
                        r = Array.isArray,
                        X = Object.keys,
                        l = R.bind,
                        J = window.isFinite,
                        f = function (t, e, n) {
                            if (null == t) return t;
                            if (V && t.forEach === V) t.forEach(e, n);
                            else if (t.length === +t.length) {
                                for (i = 0, o = t.length; i < o; i++) if (e.call(n, t[i], i, t) === u) return;
                            } else for (var r = C(t), i = 0, o = r.length; i < o; i++) if (e.call(n, t[r[i]], r[i], t) === u) return;
                            return t;
                        },
                        R = f,
                        d = function (t, r, i) {
                            var o = [];
                            return null == t
                                ? o
                                : H && t.map === H
                                ? t.map(r, i)
                                : (f(t, function (t, e, n) {
                                      o.push(r.call(i, t, e, n));
                                  }),
                                  o);
                        },
                        $ = d,
                        p = function (t, r, i, o) {
                            var a = 2 < arguments.length;
                            if ((null == t && (t = []), U && t.reduce === U)) return o && (r = x(r, o)), a ? t.reduce(r, i) : t.reduce(r);
                            if (
                                (f(t, function (t, e, n) {
                                    a ? (i = r.call(o, i, t, e, n)) : ((i = t), (a = !0));
                                }),
                                a)
                            )
                                return i;
                            throw new TypeError("Reduce of empty array with no initial value");
                        },
                        Y = p,
                        tt = p,
                        h = function (t, r, i) {
                            var o;
                            return (
                                v(t, function (t, e, n) {
                                    if (r.call(i, t, e, n)) return (o = t), !0;
                                }),
                                o
                            );
                        },
                        et = h,
                        g = function (t, r, i) {
                            var o = [];
                            return null == t
                                ? o
                                : G && t.filter === G
                                ? t.filter(r, i)
                                : (f(t, function (t, e, n) {
                                      r.call(i, t, e, n) && o.push(t);
                                  }),
                                  o);
                        },
                        nt = g,
                        m = function (t, r, i) {
                            r = r || Z;
                            var o = !0;
                            return null == t
                                ? o
                                : K && t.every === K
                                ? t.every(r, i)
                                : (f(t, function (t, e, n) {
                                      if (!(o = o && r.call(i, t, e, n))) return u;
                                  }),
                                  !!o);
                        },
                        rt = m,
                        v = function (t, r, i) {
                            r = r || Z;
                            var o = !1;
                            return null == t
                                ? o
                                : Q && t.some === Q
                                ? t.some(r, i)
                                : (f(t, function (t, e, n) {
                                      if ((o = o || r.call(i, t, e, n))) return u;
                                  }),
                                  !!o);
                        },
                        it = v,
                        ot = function (t) {
                            return null == t ? 0 : (t.length === +t.length ? t : C(t)).length;
                        },
                        at = D(function (t, e, n) {
                            A(t, e) ? t[e].push(n) : (t[e] = [n]);
                        }),
                        ut = D(function (t, e, n) {
                            t[e] = n;
                        }),
                        y = function (t, e, n, r) {
                            for (var i = (n = L(n)).call(r, e), o = 0, a = t.length; o < a; ) {
                                var u = (o + a) >>> 1;
                                n.call(r, t[u]) < i ? (o = 1 + u) : (a = u);
                            }
                            return o;
                        },
                        b = function (t, e) {
                            return null != t && (t.length !== +t.length && (t = ht(t)), 0 <= k(t, e));
                        },
                        ct = b,
                        st = function (t, e) {
                            return g(t, I(e));
                        },
                        lt = function (t, e) {
                            return h(t, I(e));
                        },
                        w = function (t) {
                            var e = o.apply(i, c.call(arguments, 1));
                            return g(t, function (t) {
                                return !b(e, t);
                            });
                        },
                        k = function (t, e, n) {
                            if (null == t) return -1;
                            var r = 0,
                                i = t.length;
                            if (n) {
                                if ("number" != typeof n) return t[(r = y(t, e))] === e ? r : -1;
                                r = n < 0 ? Math.max(0, i + n) : n;
                            }
                            if (W && t.indexOf === W) return t.indexOf(e, n);
                            for (; r < i; r++) if (t[r] === e) return r;
                            return -1;
                        },
                        x = function (n, r) {
                            var i, o;
                            if (l && n.bind === l) return l.apply(n, c.call(arguments, 1));
                            if (E(n))
                                return (
                                    (i = c.call(arguments, 2)),
                                    (o = function () {
                                        if (!(this instanceof o)) return n.apply(r, i.concat(c.call(arguments)));
                                        a.prototype = n.prototype;
                                        var t = new a(),
                                            e = ((a.prototype = null), n.apply(t, i.concat(c.call(arguments))));
                                        return Object(e) === e ? e : t;
                                    })
                                );
                            throw new TypeError();
                        },
                        ft = n(B, 2),
                        dt = n(z, { partial: n }, 1),
                        pt = function (n, r, i) {
                            function o() {
                                (l = !1 === i.leading ? 0 : F()), (s = null), (c = n.apply(a, u)), (a = u = null);
                            }
                            var a,
                                u,
                                c,
                                s = null,
                                l = 0;
                            i = i || {};
                            return function () {
                                var t = F(),
                                    e = (l || !1 !== i.leading || (l = t), r - (t - l));
                                return (a = this), (u = arguments), e <= 0 ? (clearTimeout(s), (s = null), (l = t), (c = n.apply(a, u)), (a = u = null)) : s || !1 === i.trailing || (s = setTimeout(o, e)), c;
                            };
                        },
                        C = function (t) {
                            if (!S(t)) return [];
                            if (X) return X(t);
                            var e,
                                n = [];
                            for (e in t) A(t, e) && n.push(e);
                            return n;
                        },
                        ht = function (t) {
                            for (var e = C(t), n = C.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];
                            return r;
                        },
                        gt = function (t) {
                            for (var e = {}, n = C(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];
                            return e;
                        },
                        mt = function (n) {
                            return (
                                f(c.call(arguments, 1), function (t) {
                                    if (t) for (var e in t) void 0 === n[e] && (n[e] = t[e]);
                                }),
                                n
                            );
                        },
                        j =
                            Object.assign ||
                            function (n) {
                                return (
                                    f(c.call(arguments, 1), function (t) {
                                        if (t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                                    }),
                                    n
                                );
                            },
                        vt = function (e) {
                            var n = {},
                                t = o.apply(i, c.call(arguments, 1));
                            return (
                                f(t, function (t) {
                                    t in e && (n[t] = e[t]);
                                }),
                                n
                            );
                        },
                        P =
                            r ||
                            function (t) {
                                return "[object Array]" == s.call(t);
                            },
                        S = function (t) {
                            return t === Object(t);
                        },
                        T = [],
                        r =
                            (f(["Function", "String", "Number", "Date", "RegExp"], function (e) {
                                T[e] = function (t) {
                                    return s.call(t) == "[object " + e + "]";
                                };
                            }),
                            (T.Function = function (t) {
                                return "function" == typeof t;
                            }),
                            T.Date),
                        yt = T.RegExp,
                        E = T.Function,
                        _ = T.Number,
                        bt = T.String,
                        wt = function (t) {
                            return J(t) && !O(parseFloat(t));
                        },
                        O = function (t) {
                            return _(t) && t != +t;
                        },
                        kt = function (t) {
                            return !0 === t || !1 === t || "[object Boolean]" == s.call(t);
                        },
                        xt = function (t) {
                            return void 0 === t;
                        },
                        A = function (t, e) {
                            return q.call(t, e);
                        },
                        Z = function (t) {
                            return t;
                        },
                        Ct = function (t) {
                            return function () {
                                return t;
                            };
                        },
                        M = function (e) {
                            return function (t) {
                                return t[e];
                            };
                        },
                        I = function (n) {
                            return function (t) {
                                if (t === n) return !0;
                                for (var e in n) if (n[e] !== t[e]) return !1;
                                return !0;
                            };
                        },
                        F = e.z,
                        jt = function (t) {
                            return _(t) && !O(t);
                        };
                    t.ZP = {
                        after: function (t, e) {
                            return function () {
                                if (--t < 1) return e.apply(this, arguments);
                            };
                        },
                        all: m,
                        any: v,
                        before: B,
                        bind: x,
                        clone: function (t) {
                            return S(t) ? (P(t) ? t.slice() : j({}, t)) : t;
                        },
                        collect: $,
                        compact: function (t) {
                            return g(t, Z);
                        },
                        constant: Ct,
                        contains: b,
                        debounce: function (i, o) {
                            var a;
                            return (
                                void 0 === o && (o = 100),
                                function () {
                                    for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    clearTimeout(a),
                                        (a = setTimeout(function () {
                                            i.apply(t, n);
                                        }, o));
                                }
                            );
                        },
                        defaults: mt,
                        defer: dt,
                        delay: z,
                        detect: et,
                        difference: w,
                        each: f,
                        every: rt,
                        extend: j,
                        filter: g,
                        find: h,
                        findWhere: lt,
                        foldl: Y,
                        forEach: R,
                        groupBy: at,
                        has: A,
                        identity: Z,
                        include: ct,
                        indexBy: ut,
                        indexOf: k,
                        inject: tt,
                        invert: gt,
                        isArray: P,
                        isBoolean: kt,
                        isDate: r,
                        isFinite: wt,
                        isFunction: E,
                        isNaN: O,
                        isNull: function (t) {
                            return null === t;
                        },
                        isNumber: _,
                        isObject: S,
                        isRegExp: yt,
                        isString: bt,
                        isUndefined: xt,
                        isValidNumber: jt,
                        keys: C,
                        last: function (t, e, n) {
                            if (null != t) return null == e || n ? t[t.length - 1] : c.call(t, Math.max(t.length - e, 0));
                        },
                        map: d,
                        matches: I,
                        max: function (t, r, i) {
                            if (!r && P(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
                            var o = -1 / 0,
                                a = -1 / 0;
                            return (
                                f(t, function (t, e, n) {
                                    e = r ? r.call(i, t, e, n) : t;
                                    a < e && ((o = t), (a = e));
                                }),
                                o
                            );
                        },
                        memoize: function (e, n) {
                            var r = {};
                            return (
                                (n = n || Z),
                                function () {
                                    var t = n.apply(this, arguments);
                                    return A(r, t) ? r[t] : (r[t] = e.apply(this, arguments));
                                }
                            );
                        },
                        now: F,
                        omit: function (t) {
                            var e,
                                n = {},
                                r = o.apply(i, c.call(arguments, 1));
                            for (e in t) b(r, e) || (n[e] = t[e]);
                            return n;
                        },
                        once: ft,
                        partial: n,
                        pick: vt,
                        pluck: function (t, e) {
                            return d(t, M(e));
                        },
                        property: M,
                        propertyOf: function (e) {
                            return null == e
                                ? function () {}
                                : function (t) {
                                      return e[t];
                                  };
                        },
                        reduce: p,
                        reject: function (t, r, i) {
                            return g(
                                t,
                                function (t, e, n) {
                                    return !r.call(i, t, e, n);
                                },
                                i
                            );
                        },
                        result: function (t, e) {
                            if (null != t) return (e = t[e]), E(e) ? e.call(t) : e;
                        },
                        select: nt,
                        size: ot,
                        some: it,
                        sortedIndex: y,
                        throttle: pt,
                        where: st,
                        without: function (t) {
                            return w(t, c.call(arguments, 1));
                        },
                    };
                },
                7034: function (t, e, n) {
                    "use strict";
                    n.r(e),
                        n.d(e, {
                            exists: function () {
                                return i;
                            },
                            isHTTPS: function () {
                                return o;
                            },
                            isFileProtocol: function () {
                                return a;
                            },
                            isRtmp: function () {
                                return u;
                            },
                            isYouTube: function () {
                                return c;
                            },
                            typeOf: function () {
                                return s;
                            },
                            isDeepKeyCompliant: function () {
                                return l;
                            },
                        });
                    var r = window.location.protocol;
                    function i(t) {
                        switch (typeof t) {
                            case "string":
                                return 0 < t.length;
                            case "object":
                                return null !== t;
                            case "undefined":
                                return !1;
                            default:
                                return !0;
                        }
                    }
                    function o() {
                        return "https:" === r;
                    }
                    function a() {
                        return "file:" === r;
                    }
                    function u(t, e) {
                        return 0 === t.indexOf("rtmp:") || "rtmp" === e;
                    }
                    function c(t, e) {
                        return "youtube" === e || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(t);
                    }
                    function s(t) {
                        if (null === t) return "null";
                        var e = typeof t;
                        return "object" == e && Array.isArray(t) ? "array" : e;
                    }
                    function l(r, i, o) {
                        var t = Object.keys(r);
                        return (
                            Object.keys(i).length >= t.length &&
                            t.every(function (t) {
                                var e = r[t],
                                    n = i[t];
                                return e && "object" == typeof e ? !(!n || "object" != typeof n) && l(e, n, o) : o(t, r);
                            })
                        );
                    }
                },
                9025: function (t, e) {
                    "use strict";
                    var n = document.createElement("video");
                    e.Z = n;
                },
                6601: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        i: function () {
                            return r;
                        },
                    });
                    var r = "8.24.6+commercial_v8-24-6.495.commercial.6baaf82.hlsjs..jwplayer..dai..freewheel..googima..headerbidding.df4863b.vast..analytics.9fd4899.analyticskraken.5a09bfc.gapro.";
                },
                4225: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return r;
                        },
                    });
                    var o = n(2799),
                        a = n(974);
                    function r(t, e) {
                        var n = e.message,
                            e = e.code,
                            r =
                                ((r = t.get("id")),
                                (n = n),
                                (i = t.get("localization").errors.errorCode),
                                (e = e.toString()),
                                '<div id="' +
                                    r +
                                    '" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="' +
                                    r +
                                    '"].jw-error{background:#000;overflow:hidden;position:relative}[id="' +
                                    r +
                                    '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="' +
                                    r +
                                    '"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset-text" dir="auto" data-nosnippet>' +
                                    (n || "") +
                                    '<span class="jw-break jw-reset"></span>' +
                                    (e ? ("(" + i + ": " + e + ")").replace(/\s+/g, "&nbsp;") : "") +
                                    "</div></div></div></div>"),
                            n = t.get("width"),
                            i = t.get("height"),
                            e = (0, o.az)(r);
                        return (0, a.oB)(e, { width: 0 < n.toString().indexOf("%") ? n : n + "px", height: 0 < i.toString().indexOf("%") ? i : i + "px" }), e;
                    }
                },
                9926: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return o;
                        },
                    });
                    var s = n(6042),
                        r = n(1776),
                        l = n(2799),
                        f = n(974),
                        d = [],
                        i = -1;
                    function p() {
                        (0, r.W)(i),
                            (i = (0, r.U)(function () {
                                d.forEach(function (t) {
                                    t.view.updateBounds();
                                    var e = t.view.model.get("containerWidth");
                                    (t.resized = t.width !== e), (t.width = e);
                                }),
                                    d.forEach(function (t) {
                                        t.contractElement.scrollLeft = 2 * t.width;
                                    }),
                                    d.forEach(function (t) {
                                        (0, f.oB)(t.expandChild, { width: t.width + 1 }), t.resized && t.view.model.get("visibility") && t.view.updateStyles();
                                    }),
                                    d.forEach(function (t) {
                                        t.expandElement.scrollLeft = t.width + 1;
                                    }),
                                    d.forEach(function (t) {
                                        t.resized && t.view.checkResized();
                                    });
                            }));
                    }
                    a.prototype.destroy = function () {
                        var t;
                        this.view && (-1 !== (t = d.indexOf(this)) && d.splice(t, 1), this.element.removeEventListener("scroll", p, !0), this.element.removeChild(this.hiddenElement), (this.view = this.model = null));
                    };
                    var o = a;
                    function a(t, e, n) {
                        var r = { display: "block", position: "absolute", top: 0, left: 0 },
                            i = { width: "100%", height: "100%" },
                            o = (0, l.az)('<div style="opacity:0;visibility:hidden;overflow:hidden;"><div><div style="height:1px;"></div></div><div class="jw-contract-trigger"></div></div>'),
                            a = o.firstChild,
                            u = a.firstChild,
                            c = a.nextSibling;
                        (0, f.oB)([a, c], (0, s.l7)({ overflow: "auto" }, r, i)),
                            (0, f.oB)(o, (0, s.l7)({}, r, i)),
                            (this.expandElement = a),
                            (this.expandChild = u),
                            (this.contractElement = c),
                            (this.hiddenElement = o),
                            (this.element = t),
                            (this.view = e),
                            (this.model = n),
                            (this.width = 0),
                            (this.resized = !1),
                            t.firstChild ? t.insertBefore(o, t.firstChild) : t.appendChild(o),
                            t.addEventListener("scroll", p, !0),
                            d.push(this),
                            p();
                    }
                },
                4671: function (t, e, n) {
                    "use strict";
                    var r,
                        i = n(6875),
                        o = n(8348),
                        a = n(2799),
                        u = [],
                        c = [],
                        s = [],
                        l = {},
                        f = "screen" in window && "orientation" in window.screen,
                        d = o.OS.android && o.Browser.chrome,
                        p = !1;
                    function h(t, e) {
                        for (var n = e.length; n--; ) {
                            var r = e[n];
                            if (t.target === r.getContainer()) {
                                r.setIntersection(t);
                                break;
                            }
                        }
                    }
                    function g() {
                        u.forEach(function (t) {
                            var e,
                                n = t.model;
                            n.get("audioMode") ||
                                n.get("isFloating") ||
                                !n.get("controls") ||
                                n.get("visibility") < 0.75 ||
                                ((n = n.get("state")), !(e = (0, a.UM)()) && "paused" === n && t.api.getFullscreen() ? t.api.setFullscreen(!1) : "playing" === n && t.api.setFullscreen(e));
                        });
                    }
                    function m() {
                        u.forEach(function (t) {
                            t.model.set("activeTab", (0, i.Z)());
                        });
                    }
                    function v(t, e) {
                        t = e.indexOf(t);
                        -1 !== t && e.splice(t, 1);
                    }
                    function y(e) {
                        s.forEach(function (t) {
                            t(e);
                        });
                    }
                    document.addEventListener("visibilitychange", m),
                        document.addEventListener("webkitvisibilitychange", m),
                        d && f && window.screen.orientation.addEventListener("change", g),
                        window.addEventListener("beforeunload", function () {
                            document.removeEventListener("visibilitychange", m),
                                document.removeEventListener("webkitvisibilitychange", m),
                                window.removeEventListener("scroll", y),
                                d && f && window.screen.orientation.removeEventListener("change", g);
                        }),
                        (e.Z = {
                            add: function (t) {
                                u.push(t);
                            },
                            remove: function (t) {
                                v(t, u);
                            },
                            addScrollHandler: function (t) {
                                p || ((p = !0), window.addEventListener("scroll", y)), s.push(t);
                            },
                            removeScrollHandler: function (t) {
                                t = s.indexOf(t);
                                -1 !== t && s.splice(t, 1);
                            },
                            addWidget: function (t) {
                                c.push(t);
                            },
                            removeWidget: function (t) {
                                v(t, c);
                            },
                            size: function () {
                                return u.length;
                            },
                            observe: function (t) {
                                var e = window.IntersectionObserver;
                                (r =
                                    r ||
                                    new e(
                                        function (t) {
                                            if (t && t.length)
                                                for (var e = t.length; e--; ) {
                                                    var n = t[e];
                                                    h(n, u), h(n, c);
                                                }
                                        },
                                        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
                                    )),
                                    l[t.id] || ((l[t.id] = !0), r.observe(t));
                            },
                            unobserve: function (t) {
                                r && l[t.id] && (delete l[t.id], r.unobserve(t));
                            },
                        });
                },
                2445: function (t, e, s) {
                    "use strict";
                    s.d(e, {
                        ZP: function () {
                            return n;
                        },
                        qG: function () {
                            return C;
                        },
                    });
                    var l = s(6042),
                        f = s(5083),
                        d = s(1569),
                        p = s(7034),
                        h = s(817),
                        g = s(6599),
                        m = s(386),
                        v = "__CONTEXTUAL__";
                    function y(t, e) {
                        t = t.querySelector(e);
                        if (t) return t.getAttribute("content");
                    }
                    var e = s(4737),
                        b = s.n(e),
                        w = s(67);
                    function k(t) {
                        return "string" == typeof t && /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(t);
                    }
                    function x(t) {
                        return "https:" + t;
                    }
                    function o(t) {
                        var e = "file:" === window.location.protocol ? "https:" : "",
                            t = {
                                bidding: "//player.tavoos.net/bidding.js",
                                jwpsrv: "//player.tavoos.net/jwpsrv.js",
                                dai: "//player.tavoos.net/dai.js",
                                vast: "//player.tavoos.net/vast.js",
                                googima: "//player.tavoos.net/googima.js",
                                freewheel: "//player.tavoos.net/freewheel.js",
                                gapro: "//player.tavoos.net/gapro.js",
                            }[t];
                        return t ? e + t : "";
                    }
                    function a(t, e, n) {
                        e && delete (t[e.client || o(n)] = e).client;
                    }
                    function C(t) {
                        var e,
                            n,
                            r = (0, l.l7)({}, t.plugins),
                            i = (0, m.Z)(t.edition);
                        return (
                            i("ads") && ((n = (e = (0, l.l7)({}, t.advertising)).client) && delete (r[o(n) || n] = e).client, e.bids && a(r, e.bids, "bidding")),
                            i("jwpsrv") && a(r, (n = (n = t.analytics) !== Object(n) ? {} : n), "jwpsrv"),
                            a(r, t.ga, "gapro"),
                            r
                        );
                    }
                    var n = function (t, e) {
                        var n,
                            r,
                            i,
                            o,
                            a,
                            t = (0, f.ZP)(t, e),
                            e = t.key || h.default.key,
                            u = new g.Z(e),
                            c = u.edition();
                        if (
                            (((t =
                                "free" === u.edition()
                                    ? (0, l.l7)(
                                          { skin: { active: "#ff0046", timeslider: { progress: "none" } }, logo: { position: "control-bar", file: b() } },
                                          f.ke,
                                          (0, l.ei)(t, ["analytics", "aspectratio", "base", "file", "height", "playlist", "sources", "width"])
                                      )
                                    : t).key = e),
                            (t.edition = c),
                            (t.error = u.error()),
                            (t.generateSEOMetadata = t.generateSEOMetadata || !1),
                            "unlimited" === c)
                        ) {
                            var e = (0, d.getScriptPath)("jwplayer.js");
                            if (!e) throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
                            s.p = e;
                        }
                        return (
                            (t.related =
                                ((u = t),
                                (c = (0, m.Z)(u.edition)),
                                (e = u.related),
                                (c = !c("discovery") || e !== Object(e)),
                                (i = !e || "none" !== e.displayMode),
                                (o = void 0 === (a = e || {}).oncomplete ? "none" : a.oncomplete),
                                (a = a.autoplaytimer),
                                !1 === o || u.repeat ? (o = "hide") : "none" === o && (a = 0),
                                (u = ("autoplay" === o && a <= 0) || "none" === o),
                                (0, l.l7)({}, e, { disableRelated: c, showButton: i, oncomplete: o, autoplaytimer: a, shouldAutoAdvance: u }))),
                            t.ab &&
                                (t.ab =
                                    ((r = (n = t).ab).clone && (r = r.clone()),
                                    Object.keys(r.tests).forEach(function (t) {
                                        r.tests[t].forEach(function (t) {
                                            t.addConfig && t.addConfig(n, t.selection);
                                        });
                                    }),
                                    r)),
                            (t.plugins = C(t)),
                            (e = t.playlist),
                            (0, l.HD)(e) &&
                                -1 < e.indexOf(v) &&
                                ((t.playlist =
                                    ((c = document),
                                    (i = t.playlist),
                                    (o = (c.querySelector("title") || {}).textContent),
                                    (a = y(c, 'meta[property="og:title"]')),
                                    (a = encodeURIComponent(a || o || "")),
                                    (o = y(c, 'meta[property="og:description"]') || y(c, 'meta[name="description"]')) && (a += "&page_description=" + encodeURIComponent(o)),
                                    i.replace(v, a))),
                                (t.contextual = !0)),
                            (0, p.isFileProtocol)() && ((e = (u = t).playlist), (c = u.related), k(e) && (t.playlist = x(e)), c && k(c.file) && (c.file = x(c.file))),
                            t.__abSendDomainToFeeds &&
                                ((o = t.playlist), /\.jwplatform.com|\.jwplayer.com/.test(o)) &&
                                (t.playlist = ((i = t.playlist), (i += (-1 !== i.indexOf("?") ? "&" : "?") + "page_domain=" + encodeURIComponent((0, w.X)())))),
                            t
                        );
                    };
                },
                817: function (N, t, e) {
                    "use strict";
                    e.d(t, {
                        default: function () {
                            return Q;
                        },
                    });
                    var a = e(6042),
                        n = setTimeout;
                    function r() {}
                    function o(t) {
                        if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof t) throw new TypeError("not a function");
                        (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), f(t, this);
                    }
                    function i(n, r) {
                        for (; 3 === n._state; ) n = n._value;
                        0 !== n._state
                            ? ((n._handled = !0),
                              o._immediateFn(function () {
                                  var t,
                                      e = 1 === n._state ? r.onFulfilled : r.onRejected;
                                  if (null !== e) {
                                      try {
                                          t = e(n._value);
                                      } catch (t) {
                                          return void c(r.promise, t);
                                      }
                                      u(r.promise, t);
                                  } else (1 === n._state ? u : c)(r.promise, n._value);
                              }))
                            : n._deferreds.push(r);
                    }
                    function u(t, e) {
                        try {
                            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if (e instanceof o) return (t._state = 3), (t._value = e), s(t);
                                if ("function" == typeof n)
                                    return f(
                                        ((r = n),
                                        (i = e),
                                        function () {
                                            r.apply(i, arguments);
                                        }),
                                        t
                                    );
                            }
                            (t._state = 1), (t._value = e), s(t);
                        } catch (e) {
                            c(t, e);
                        }
                        var r, i;
                    }
                    function c(t, e) {
                        (t._state = 2), (t._value = e), s(t);
                    }
                    function s(t) {
                        2 === t._state &&
                            0 === t._deferreds.length &&
                            o._immediateFn(function () {
                                t._handled || o._unhandledRejectionFn(t._value);
                            });
                        for (var e = 0, n = t._deferreds.length; e < n; e++) i(t, t._deferreds[e]);
                        t._deferreds = null;
                    }
                    function l(t, e, n) {
                        (this.onFulfilled = "function" == typeof t ? t : null), (this.onRejected = "function" == typeof e ? e : null), (this.promise = n);
                    }
                    function f(t, e) {
                        var n = !1;
                        try {
                            t(
                                function (t) {
                                    n || ((n = !0), u(e, t));
                                },
                                function (t) {
                                    n || ((n = !0), c(e, t));
                                }
                            );
                        } catch (t) {
                            if (n) return;
                            (n = !0), c(e, t);
                        }
                    }
                    (o.prototype.catch = function (t) {
                        return this.then(null, t);
                    }),
                        (o.prototype.then = function (t, e) {
                            var n = new this.constructor(r);
                            return i(this, new l(t, e, n)), n;
                        }),
                        (o.prototype.finally = function (e) {
                            var n = this.constructor;
                            return this.then(
                                function (t) {
                                    return n.resolve(e()).then(function () {
                                        return t;
                                    });
                                },
                                function (t) {
                                    return n.resolve(e()).then(function () {
                                        return n.reject(t);
                                    });
                                }
                            );
                        }),
                        (o.all = function (e) {
                            return new o(function (i, o) {
                                if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                                var a = Array.prototype.slice.call(e);
                                if (0 === a.length) return i([]);
                                var u = a.length;
                                for (var t = 0; t < a.length; t++)
                                    !(function e(n, t) {
                                        try {
                                            if (t && ("object" == typeof t || "function" == typeof t)) {
                                                var r = t.then;
                                                if ("function" == typeof r)
                                                    return r.call(
                                                        t,
                                                        function (t) {
                                                            e(n, t);
                                                        },
                                                        o
                                                    );
                                            }
                                            (a[n] = t), 0 == --u && i(a);
                                        } catch (n) {
                                            o(n);
                                        }
                                    })(t, a[t]);
                            });
                        }),
                        (o.resolve = function (e) {
                            return e && "object" == typeof e && e.constructor === o
                                ? e
                                : new o(function (t) {
                                      t(e);
                                  });
                        }),
                        (o.reject = function (n) {
                            return new o(function (t, e) {
                                e(n);
                            });
                        }),
                        (o.race = function (i) {
                            return new o(function (t, e) {
                                for (var n = 0, r = i.length; n < r; n++) i[n].then(t, e);
                            });
                        }),
                        (o._immediateFn =
                            "function" == typeof setImmediate
                                ? function (t) {
                                      setImmediate(t);
                                  }
                                : function (t) {
                                      n(t, 0);
                                  }),
                        (o._unhandledRejectionFn = function (t) {
                            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
                        });
                    window.Promise || (window.Promise = o);
                    var t = e(1569),
                        d = e(6391),
                        p = e(2963),
                        h = e(670),
                        p = { availableProviders: p.B, registerProvider: h.Z },
                        g = e(1241),
                        m =
                            ((p.registerPlugin = function (t, e, n) {
                                "jwpsrv" !== t && (0, g.f)(t, e, n);
                            }),
                            p),
                        v = e(6601),
                        y = e(4742),
                        b = e(8348),
                        B = e(623),
                        w = e(1643),
                        L = e(7411),
                        k = e(328),
                        x = e(4429),
                        D = 0;
                    function C(n, t) {
                        t = new B.Z(t);
                        return (
                            t.on(w.Rc, function (t) {
                                n._qoe.tick("ready"), (t.setupTime = n._qoe.between("setup", "ready"));
                            }),
                            t.on("all", function (t, e) {
                                n.trigger(t, e);
                            }),
                            t
                        );
                    }
                    function j(t, e) {
                        var n = t.plugins,
                            r = Object.keys(n).map(function (t) {
                                var e = n[t];
                                return delete n[t], e;
                            });
                        e.get("setupConfig") && t.trigger("remove"),
                            t.off(),
                            e.playerDestroy(),
                            r.forEach(function (t) {
                                if (t.destroy)
                                    try {
                                        t.destroy();
                                    } catch (t) {}
                            }),
                            e.getContainer().removeAttribute("data-jwplayer-id");
                    }
                    function P(e) {
                        var t = ++D,
                            n = e.id || "player-" + t,
                            r = new L.Z(),
                            i = {},
                            o = C(this, e);
                        r.tick("init"),
                            e.setAttribute("data-jwplayer-id", n),
                            Object.defineProperties(this, {
                                id: {
                                    enumerable: !0,
                                    get: function () {
                                        return n;
                                    },
                                },
                                uniqueId: {
                                    enumerable: !0,
                                    get: function () {
                                        return t;
                                    },
                                },
                                plugins: {
                                    enumerable: !0,
                                    get: function () {
                                        return i;
                                    },
                                },
                                _qoe: {
                                    enumerable: !0,
                                    get: function () {
                                        return r;
                                    },
                                },
                                version: {
                                    enumerable: !0,
                                    get: function () {
                                        return v.i;
                                    },
                                },
                                Events: {
                                    enumerable: !0,
                                    get: function () {
                                        return k.ZP;
                                    },
                                },
                                utils: {
                                    enumerable: !0,
                                    get: function () {
                                        return x.Z;
                                    },
                                },
                                _: {
                                    enumerable: !0,
                                    get: function () {
                                        return a.ZP;
                                    },
                                },
                            }),
                            (0, a.l7)(this, {
                                _events: {},
                                setup: function (t) {
                                    return r.clear("ready"), r.tick("setup"), o && j(this, o), (o = C(this, e)).init(t, this), this.on(t.events, null, this);
                                },
                                remove: function () {
                                    this.getPip() && this.setPip(!1);
                                    for (var t = this, e = d.Z.length; e--; )
                                        if (d.Z[e].uniqueId === t.uniqueId) {
                                            d.Z.splice(e, 1);
                                            break;
                                        }
                                    return (
                                        o && j(this, o),
                                        Object.keys(i).forEach(function (t) {
                                            delete i[t];
                                        }),
                                        this
                                    );
                                },
                                qoe: function () {
                                    var t = o.getItemQoe();
                                    return { setupTime: this._qoe.between("setup", "ready"), firstFrame: t.getFirstFrame ? t.getFirstFrame() : null, player: this._qoe.dump(), item: t.dump() };
                                },
                                addCues: function (t) {
                                    return Array.isArray(t) && o.addCues(t), this;
                                },
                                getAudioTracks: function () {
                                    return o.getAudioTracks();
                                },
                                getBuffer: function () {
                                    return o.get("buffer");
                                },
                                getCaptions: function () {
                                    return o.get("captions");
                                },
                                getCaptionsList: function () {
                                    return o.getCaptionsList();
                                },
                                getConfig: function () {
                                    return o.getConfig();
                                },
                                getContainer: function () {
                                    return o.getContainer();
                                },
                                getControls: function () {
                                    return o.get("controls");
                                },
                                getCues: function () {
                                    return o.get("cues");
                                },
                                getCurrentAudioTrack: function () {
                                    return o.getCurrentAudioTrack();
                                },
                                getCurrentCaptions: function () {
                                    return o.getCurrentCaptions();
                                },
                                getCurrentQuality: function () {
                                    return o.getCurrentQuality();
                                },
                                getCurrentTime: function () {
                                    return o.get("currentTime");
                                },
                                getDuration: function () {
                                    return o.get("duration");
                                },
                                getEnvironment: function () {
                                    return b;
                                },
                                getFullscreen: function () {
                                    return o.get("fullscreen");
                                },
                                getHeight: function () {
                                    return o.getHeight();
                                },
                                getItemMeta: function () {
                                    return o.get("itemMeta") || {};
                                },
                                getMute: function () {
                                    return o.getMute();
                                },
                                getPercentViewable: function () {
                                    return o.get("visibility");
                                },
                                getPip: function () {
                                    return o.get("pip");
                                },
                                getPlaybackRate: function () {
                                    return o.get("playbackRate");
                                },
                                getPlaylist: function () {
                                    return o.get("playlist");
                                },
                                getPlaylistIndex: function () {
                                    return o.get("item");
                                },
                                getPlaylistItem: function (t) {
                                    if (!x.Z.exists(t)) return o.get("playlistItem");
                                    var e = this.getPlaylist();
                                    return e ? e[t] : null;
                                },
                                getPosition: function () {
                                    return o.get("position");
                                },
                                getProvider: function () {
                                    return o.getProvider();
                                },
                                getQualityLevels: function () {
                                    return o.getQualityLevels();
                                },
                                getSafeRegion: function (t) {
                                    return o.getSafeRegion((t = void 0 === t ? !0 : t));
                                },
                                getState: function () {
                                    return o.getState();
                                },
                                getStretching: function () {
                                    return o.get("stretching");
                                },
                                getViewable: function () {
                                    return o.get("viewable");
                                },
                                getVisualQuality: function () {
                                    return o.getVisualQuality();
                                },
                                getVolume: function () {
                                    return o.get("volume");
                                },
                                getWidth: function () {
                                    return o.getWidth();
                                },
                                setCaptions: function (t) {
                                    return o.setCaptions(t), this;
                                },
                                setConfig: function (t) {
                                    return o.setConfig(t), this;
                                },
                                setControls: function (t) {
                                    return o.setControls(t), this;
                                },
                                setCurrentAudioTrack: function (t) {
                                    o.setCurrentAudioTrack(t);
                                },
                                setCurrentCaptions: function (t) {
                                    o.setCurrentCaptions(t);
                                },
                                setCurrentQuality: function (t) {
                                    o.setCurrentQuality(t);
                                },
                                setFullscreen: function (t) {
                                    return o.setFullscreen(t), this;
                                },
                                setAllowFullscreen: function (t) {
                                    return o.setAllowFullscreen(t), this;
                                },
                                setMute: function (t) {
                                    return o.setMute(t), this;
                                },
                                setPip: function (t) {
                                    return o.setPip(t), this;
                                },
                                setPlaybackRate: function (t) {
                                    return o.setPlaybackRate(t), this;
                                },
                                setPlaylistItem: function (t, e) {
                                    return o.setPlaylistItem(t, e), this;
                                },
                                setCues: function (t) {
                                    return Array.isArray(t) && o.setCues(t), this;
                                },
                                setVolume: function (t) {
                                    return o.setVolume(t), this;
                                },
                                load: function (t, e) {
                                    return o.load(t, e), this;
                                },
                                play: function (t) {
                                    return o.play(t), this;
                                },
                                pause: function (t) {
                                    return o.pause(t), this;
                                },
                                playToggle: function (t) {
                                    switch (this.getState()) {
                                        case w.r0:
                                        case w.Kb:
                                            return this.pause(t);
                                        default:
                                            return this.play(t);
                                    }
                                },
                                seek: function (t, e) {
                                    return o.seek(t, e), this;
                                },
                                playlistItem: function (t, e) {
                                    return o.playlistItem(t, e), this;
                                },
                                playlistNext: function (t) {
                                    return o.playlistNext(t), this;
                                },
                                playlistPrev: function (t) {
                                    return o.playlistPrev(t), this;
                                },
                                next: function (t) {
                                    return o.next(t), this;
                                },
                                requestPip: function (t) {
                                    return o.requestPip(t), this;
                                },
                                castToggle: function () {
                                    return o.castToggle(), this;
                                },
                                stopCasting: function () {
                                    return o.stopCasting(), this;
                                },
                                createInstream: function () {
                                    return o.createInstream();
                                },
                                stop: function () {
                                    return o.stop(), this;
                                },
                                resize: function (t, e) {
                                    return o.resize(t, e), this;
                                },
                                addButton: function (t, e, n, r, i) {
                                    return o.addButton(t, e, n, r, i), this;
                                },
                                removeButton: function (t) {
                                    return o.removeButton(t), this;
                                },
                                attachMedia: function () {
                                    return o.attachMedia(), this;
                                },
                                detachMedia: function () {
                                    return o.detachMedia(), this;
                                },
                                isBeforeComplete: function () {
                                    return o.isBeforeComplete();
                                },
                                isBeforePlay: function () {
                                    return o.isBeforePlay();
                                },
                                setPlaylistItemCallback: function (t, e) {
                                    o.setItemCallback(t, e);
                                },
                                removePlaylistItemCallback: function () {
                                    o.setItemCallback(null);
                                },
                                getPlaylistItemPromise: function (t) {
                                    return o.getItemPromise(t);
                                },
                                getFloating: function () {
                                    return !!o.get("isFloating");
                                },
                                setFloating: function (t) {
                                    o.setConfig({ floating: { mode: t ? "always" : "never" } });
                                },
                            });
                    }
                    (0, a.l7)(P.prototype, {
                        on: function (t, e, n) {
                            return k.on.call(this, t, e, n);
                        },
                        once: function (t, e, n) {
                            return k.IH.call(this, t, e, n);
                        },
                        off: function (t, e, n) {
                            return k.S1.call(this, t, e, n);
                        },
                        trigger: function (t, e) {
                            return ((e = a.ZP.isObject(e) ? (0, a.l7)({}, e) : {}).type = t), (y.Z.debug ? k.X$ : k.wj).call(this, t, e);
                        },
                        getPlugin: function (t) {
                            return this.plugins[t];
                        },
                        addPlugin: function (t, e) {
                            (this.plugins[t] = e), this.on("ready", e.addToPlayer), e.resize && this.on("resize", e.resizeHandler);
                        },
                        registerPlugin: function (t, e, n) {
                            (0, g.f)(t, e, n);
                        },
                        getAdBlock: function () {
                            return !1;
                        },
                        playAd: function (t) {},
                        pauseAd: function (t) {},
                        skipAd: function () {},
                    }),
                        (e.p = (0, t.loadFrom)());
                    function S(t) {
                        var e, n;
                        return (
                            t ? ("string" == typeof t ? (e = T(t)) || (n = document.getElementById(t)) : "number" == typeof t ? (e = d.Z[t]) : t.nodeType && (e = T((n = t).id || n.getAttribute("data-jwplayer-id")))) : (e = d.Z[0]),
                            e || (n ? ((t = new P(n)), d.Z.push(t), t) : { registerPlugin: g.f })
                        );
                    }
                    function T(t) {
                        for (var e = 0; e < d.Z.length; e++) if (d.Z[e].id === t) return d.Z[e];
                        return null;
                    }
                    function E(t) {
                        Object.defineProperties(t, {
                            api: {
                                get: function () {
                                    return m;
                                },
                                set: function () {},
                            },
                            version: {
                                get: function () {
                                    return v.i;
                                },
                                set: function () {},
                            },
                            debug: {
                                get: function () {
                                    return y.Z.debug;
                                },
                                set: function (t) {
                                    y.Z.debug = !!t;
                                },
                            },
                        });
                    }
                    E(S);
                    var _ = S,
                        h = e(5882),
                        p = e(6599),
                        t = e(676),
                        z = e(5592),
                        R = e(6769),
                        q = e(9025),
                        O = a.ZP.extend,
                        A = {},
                        p = ((A._ = a.ZP), (A.utils = (0, a.l7)(x.Z, { key: p.Z, extend: O, scriptloader: t.ZP, rssparser: { parse: R.Z }, tea: z.Z, UI: h.ZP })), (A.utils.css.style = A.utils.style), (A.vid = q.Z), A),
                        H = e(7543),
                        U = /^(?:on(?:ce)?|off|trigger)$/;
                    function V(t) {
                        var e = {};
                        Z(this, t, t, e), Z(this, t, P.prototype, e);
                    }
                    function Z(e, n, r, i) {
                        var o = Object.keys(r);
                        o.forEach(function (t) {
                            "function" == typeof r[t] && "Events" !== t
                                ? (e[t] = (function a(u, c, s, l, f) {
                                      return function () {
                                          var t = Array.prototype.slice.call(arguments),
                                              e = t[0],
                                              i = c._trackCallQueue || (c._trackCallQueue = []),
                                              n = U.test(s),
                                              r = n && t[1] && t[1]._callback,
                                              o = f.edition || G(c, f, "edition"),
                                              o = "free" === o;
                                          if (o) {
                                              o = [
                                                  "addButton",
                                                  "addCues",
                                                  "detachMedia",
                                                  "load",
                                                  "next",
                                                  "pause",
                                                  "play",
                                                  "playlistItem",
                                                  "playlistNext",
                                                  "playlistPrev",
                                                  "playToggle",
                                                  "resize",
                                                  "seek",
                                                  "setCaptions",
                                                  "setConfig",
                                                  "setControls",
                                                  "setCues",
                                                  "setFullscreen",
                                                  "setMute",
                                                  "setPlaybackRate",
                                                  "setPlaylistItem",
                                                  "setVolume",
                                                  "stop",
                                              ];
                                              if (-1 < o.indexOf(s)) return M(s), u;
                                              o = ["createInstream", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality"];
                                              if (-1 < o.indexOf(s)) return M(s), null;
                                          }
                                          if ((r || i.push([s, e]), n)) return I(c, i), c[s].apply(u, t);
                                          K(s, t);
                                          o = c[s].apply(c, t);
                                          return (
                                              "remove" === s
                                                  ? c.off.call(u)
                                                  : "setup" === s &&
                                                    (c.off.call(u),
                                                    c.off(e.events, null, c),
                                                    c.on.call(u, e.events, null, u),
                                                    c.on("all", function (t, e) {
                                                        var n, r;
                                                        "ready" === t &&
                                                            ((n = Object.keys(c).filter(function (t) {
                                                                return "_" !== t[0] && -1 === l.indexOf(t) && "function" == typeof c[t];
                                                            })),
                                                            (r = l.concat(n)),
                                                            n.forEach(function (t) {
                                                                u[t] = a(u, c, t, r, f);
                                                            })),
                                                            c.trigger.call(u, t, e),
                                                            I(c, i);
                                                    })),
                                              I(c, i),
                                              o === c ? u : o
                                          );
                                      };
                                  })(e, n, t, o, i))
                                : "_events" === t
                                ? (e._events = {})
                                : Object.defineProperty(e, t, {
                                      enumerable: !0,
                                      get: function () {
                                          return r[t];
                                      },
                                  });
                        });
                    }
                    function G(t, e, n) {
                        t = t.getConfig()[n];
                        return (e[n] = t);
                    }
                    function M(t) {
                        console.warn("The API method jwplayer()." + t + "() is disabled in the free edition of JW Player.");
                    }
                    function K(t, e) {
                        var n = { reason: "play" !== t && "seek" !== t && "pause" !== t && (0, H.C)() ? "interaction" : "external" };
                        switch (t) {
                            case "play":
                            case "pause":
                            case "playToggle":
                            case "playlistNext":
                            case "playlistPrev":
                            case "next":
                                e[0] = n;
                                break;
                            case "seek":
                            case "playlistItem":
                                e[1] = n;
                        }
                    }
                    function I(t, e) {
                        var i;
                        e.length &&
                            (i = t.getPlugin("jwpsrv")) &&
                            i.trackExternalAPIUsage &&
                            (e.forEach(function (t) {
                                var e = i,
                                    n = t[0],
                                    t = t[1];
                                try {
                                    var r = (function (t) {
                                        switch (n) {
                                            case "setup":
                                                return !!t;
                                            case "getSafeRegion":
                                            case "pauseAd":
                                            case "setControls":
                                            case "setFullscreen":
                                            case "setMute":
                                                return !!t === t ? t : void 0;
                                            case "setPlaylistItem":
                                            case "getPlaylistItem":
                                                return (0 | t) === t ? t : void 0;
                                            case "setPlaybackRate":
                                            case "setVolume":
                                                return Number(t);
                                            case "setConfig":
                                                return Object.keys(Object(t)).join(",");
                                            case "on":
                                            case "once":
                                            case "off":
                                            case "trigger":
                                            case "getPlugin":
                                            case "addPlugin":
                                            case "registerPlugin":
                                                return "" + t;
                                        }
                                        return null;
                                    })(t);
                                    e.trackExternalAPIUsage(n, r);
                                } catch (e) {
                                    y.Z.debug && console.warn(e);
                                }
                            }),
                            (e.length = 0));
                    }
                    function F(t) {
                        return (t = _(t)).uniqueId ? t._publicApi || (t._publicApi = new V(t)) : t;
                    }
                    var O = window,
                        t =
                            ((0, a.l7)(_, p),
                            (0, a.l7)(F, p),
                            E(F),
                            "function" == typeof O.define &&
                                O.define.amd &&
                                O.define([], function () {
                                    return F;
                                }),
                            F),
                        Q = (t = O.jwplayer ? O.jwplayer : t);
                },
                3487: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        MK: function () {
                            return i;
                        },
                        Nq: function () {
                            return o;
                        },
                        bX: function () {
                            return a;
                        },
                    });
                    var r = n(7164),
                        i = r.MK,
                        o = r.Nq;
                    function a(t) {
                        var e = (0, r.bX)(t);
                        if (!t) return e;
                        switch ((0, r.Nq)(t)) {
                            case "jwpsrv":
                                e = 305001;
                                break;
                            case "googima":
                                e = 305002;
                                break;
                            case "vast":
                                e = 305003;
                                break;
                            case "freewheel":
                                e = 305004;
                                break;
                            case "dai":
                                e = 305005;
                                break;
                            case "gapro":
                                e = 305006;
                                break;
                            case "bidding":
                                e = 305007;
                        }
                        return e;
                    }
                },
                1918: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        w0: function () {
                            return c;
                        },
                        lD: function () {
                            return s;
                        },
                        Gb: function () {
                            return l;
                        },
                        d3: function () {
                            return f;
                        },
                    });
                    var r,
                        i = n(386),
                        o = [
                            { configName: "clearkey", keyName: "org.w3.clearkey" },
                            { configName: "widevine", keyName: "com.widevine.alpha" },
                            { configName: "playready", keyName: "com.microsoft.playready" },
                        ],
                        a = [],
                        u = {};
                    function c(t) {
                        return t.some(function (t) {
                            return (
                                !!t.drm ||
                                t.sources.some(function (t) {
                                    return !!t.drm;
                                })
                            );
                        });
                    }
                    function s(t) {
                        return (
                            r ||
                            (((navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration) || window.MSMediaKeys) && (0, i.Z)(t)("drm")
                                ? (o.forEach(function (t) {
                                      r = t.keyName;
                                      var r,
                                          e = (navigator.requestMediaKeySystemAccess
                                              ? navigator.requestMediaKeySystemAccess(r, [
                                                    { initDataTypes: ["cenc"], videoCapabilities: [{ contentType: 'video/mp4;codecs="avc1.4d401e"' }], audioCapabilities: [{ contentType: 'audio/mp4;codecs="mp4a.40.2"' }] },
                                                ])
                                              : new Promise(function (t, e) {
                                                    var n;
                                                    try {
                                                        n = new window.MSMediaKeys(r);
                                                    } catch (t) {
                                                        return void e(t);
                                                    }
                                                    t(n);
                                                })
                                          )
                                              .then(function () {
                                                  u[t.configName] = !0;
                                              })
                                              .catch(function () {
                                                  u[t.configName] = !1;
                                              });
                                      a.push(e);
                                  }),
                                  (r = Promise.all(a)))
                                : Promise.resolve())
                        );
                    }
                    function l(t) {
                        return u[t];
                    }
                    function f(t) {
                        if (r) return Object.keys(t).some(l);
                    }
                },
                2963: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        B: function () {
                            return l;
                        },
                    });
                    var e = n(6593),
                        o = n(8348),
                        r = n(386),
                        i = n(6042),
                        a = n(1918),
                        u = n(9025),
                        n = (0, i.sE)(e.B, (0, i.wB)({ name: "html5" })),
                        c = n.supports;
                    function s(t) {
                        var e = window.MediaSource;
                        return (0, i.$6)(t, function (t) {
                            return !!e && !!e.isTypeSupported && e.isTypeSupported(t);
                        });
                    }
                    (n.supports = function (t, e) {
                        var n = c.apply(this, arguments);
                        return n && t.drm && "hls" === t.type ? ((e = (0, r.Z)(e)("drm")) && t.drm.fairplay ? (t = window.WebKitMediaKeys) && t.isTypeSupported && t.isTypeSupported("com.apple.fps.1_0", "video/mp4") : e) : n;
                    }),
                        e.B.push({
                            name: "shaka",
                            supports: function (t) {
                                return !(t.drm && !(0, a.d3)(t.drm)) && !(!window.HTMLVideoElement || !window.MediaSource) && s(t.mediaTypes) && ("dash" === t.type || "mpd" === t.type || -1 < (t.file || "").indexOf("mpd-time-csf"));
                            },
                        }),
                        e.B.unshift({
                            name: "hlsjs",
                            supports: function (t) {
                                if (t.drm) return !1;
                                var e = -1 < t.file.indexOf(".m3u8"),
                                    n = "hls" === t.type || "m3u8" === t.type;
                                if (!e && !n) return !1;
                                var e = o.Browser.chrome || o.Browser.firefox || o.Browser.edge || (o.Browser.ie && 11 === o.Browser.version.major) || o.OS.tizen,
                                    n = o.Browser.safari && (!u.Z.canPlayType || !u.Z.canPlayType("application/vnd.apple.mpegURL")),
                                    r = o.OS.android && !1 === t.hlsjsdefault,
                                    i = o.Browser.safari && !!t.safarihlsjs;
                                return s(t.mediaTypes || ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"']) && (e || i || n) && !r;
                            },
                        });
                    var l = e.B;
                },
                2303: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return l;
                        },
                    });
                    var e = n(6042),
                        i = n(2963),
                        o = n(12),
                        r = n(670),
                        a = n(2894),
                        u = {
                            html5: function () {
                                return n
                                    .e(250)
                                    .then(
                                        function (t) {
                                            var e = n(9181).default;
                                            return (0, r.Z)(e), e;
                                        }.bind(null, n)
                                    )
                                    .catch((0, a.Ep)(152));
                            },
                        },
                        c =
                            ((0, e.l7)(u, {
                                shaka: function () {
                                    return n
                                        .e(371)
                                        .then(
                                            function (t) {
                                                var e = n(2287).default;
                                                return (0, r.Z)(e), e;
                                            }.bind(null, n)
                                        )
                                        .catch((0, a.Ep)(154));
                                },
                                hlsjs: function () {
                                    return n
                                        .e(98)
                                        .then(
                                            function (t) {
                                                var e = n(9054).default;
                                                return (0, r.Z)(e), e;
                                            }.bind(null, n)
                                        )
                                        .catch((0, a.Ep)(153));
                                },
                            }),
                            u);
                    function s(t) {
                        this.config = t || {};
                    }
                    (0, e.l7)(s.prototype, {
                        load: function (t) {
                            function e() {
                                return Promise.reject(new Error("Failed to load media"));
                            }
                            var n = c[t];
                            return n
                                ? n().then(function () {
                                      return o.U[t] || e();
                                  })
                                : e();
                        },
                        providerSupports: function (t, e) {
                            return t.supports(e);
                        },
                        choose: function (t) {
                            if (t === Object(t))
                                for (var e = i.B.length, n = 0; n < e; n++) {
                                    var r = i.B[n];
                                    if (this.providerSupports(r, t)) return { priority: e - n - 1, name: r.name, type: t.type, providerToCheck: r, provider: o.U[r.name] };
                                }
                            return {};
                        },
                    });
                    var u = s,
                        l =
                            ((u.prototype.providerSupports = function (t, e) {
                                return t.supports(e, this.config.edition);
                            }),
                            u);
                },
                5140: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        t: function () {
                            return r;
                        },
                    });
                    var r = window.atob;
                },
                386: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return p;
                        },
                    });
                    var r = "free",
                        i = "starter",
                        o = "business",
                        a = "premium",
                        u = "enterprise",
                        c = "developer",
                        s = "platinum",
                        l = "ads",
                        f = "unlimited",
                        d = "trial";
                    function p(e) {
                        var n = { setup: [r, i, o, a, u, c, l, f, d, s], drm: [u, c, l, f, d], ads: [l, f, d, s, u, c, o], jwpsrv: [r, i, o, a, u, c, l, d, s, "invalid"], discovery: [l, u, c, d, f] };
                        return function (t) {
                            return n[t] && -1 < n[t].indexOf(e);
                        };
                    }
                },
                560: function (t, e) {
                    "use strict";
                    function n() {
                        return n._iframe;
                    }
                    (n.mock = function (t) {
                        n._iframe = t;
                    }),
                        (n.unmock = function () {
                            n._iframe = n._original;
                        }),
                        (n._iframe = window.top !== window.self),
                        (n._original = n._iframe),
                        (e.Z = n);
                },
                6599: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        u: function () {
                            return l;
                        },
                    });
                    var a = n(5592),
                        u = n(386),
                        c = n(5140),
                        s = n(4446),
                        l = 100013,
                        f = "invalid";
                    e.Z = function (e) {
                        var n, t;
                        try {
                            var r,
                                i,
                                o = (0, a.Z)(e || "", (0, c.t)("NDh2aU1Cb0NHRG5hcDFRZQ==")).split("/");
                            "pro" === (n = o[0]) && (n = "premium"), (0, u.Z)(n)("setup") || (n = f), 2 < o.length && ((r = o[1]), 0 < (i = parseInt(1966516774527)) && (t = new Date()).setTime(i));
                        } catch (e) {
                            n = f;
                        }
                        (this.edition = function () {
                            return n;
                        }),
                            (this.token = function () {
                                return r;
                            }),
                            (this.expiration = function () {
                                return t;
                            }),
                            (this.duration = function () {
                                return t ? t.getTime() - new Date().getTime() : 0;
                            }),
                            (this.error = function () {
                                var t;
                                return void 0 === e ? (t = 100011) : n !== f && r ? this.duration() < 0 && (t = l) : (t = 100012), t ? new s.rG(s.pJ, t) : null;
                            });
                    };
                },
                67: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        X: function () {
                            return i;
                        },
                    });
                    var r = n(560);
                    function i() {
                        var t,
                            e,
                            n = window.location.host;
                        if ((0, r.Z)()) {
                            n = (document.referrer ? ((t = document.referrer), ((e = document.createElement("a")).href = t), e) : {}).host;
                            try {
                                n = n || window.top.location.host;
                            } catch (t) {}
                        }
                        return n;
                    }
                },
                5592: function (t, e, n) {
                    "use strict";
                    n.d(e, {
                        Z: function () {
                            return r;
                        },
                    });
                    var f = n(5140);
                    function d(t) {
                        for (var e = new Array(Math.ceil(t.length / 4)), n = 0; n < e.length; n++) e[n] = t.charCodeAt(4 * n) + (t.charCodeAt(4 * n + 1) << 8) + (t.charCodeAt(4 * n + 2) << 16) + (t.charCodeAt(4 * n + 3) << 24);
                        return e;
                    }
                    function r(e, t) {
                        if (((e = String(e)), (t = String(t)), 0 === e.length)) return "";
                        for (var n, r = d((0, f.t)(e)), i = d(unescape(encodeURIComponent(t)).slice(0, 16)), o = r.length, a = 2654435769, u = (r[o - 1], r[0]), c = Math.floor(6 + 52 / o) * a; c; ) {
                            for (var s = (c >>> 2) & 3, l = o - 1; 0 <= l; l--) (n = ((((n = r[0 < l ? l - 1 : o - 1]) >>> 5) ^ (u << 2)) + ((u >>> 3) ^ (n << 4))) ^ ((c ^ u) + (i[(3 & l) ^ s] ^ n))), (u = r[l] -= n);
                            c -= a;
                        }
                        e = (function (t) {
                            for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = String.fromCharCode(255 & t[n], (t[n] >>> 8) & 255, (t[n] >>> 16) & 255, (t[n] >>> 24) & 255);
                            return e.join("");
                        })(r).replace(/\0+$/, "");
                        try {
                            return decodeURIComponent(escape(e));
                        } catch (t) {
                            return e;
                        }
                    }
                },
                9563: function (t) {
                    var e,
                        n,
                        s = {},
                        c = {},
                        l =
                            ((e = function () {
                                return document.head || document.getElementsByTagName("head")[0];
                            }),
                            function () {
                                return (n = void 0 === n ? e.apply(this, arguments) : n);
                            });
                    function f(t, e) {
                        var n,
                            r,
                            i = c[t],
                            o = (i = i || (c[t] = { element: ((t = t), ((r = document.createElement("style")).type = "text/css"), r.setAttribute("data-jwplayer-id", t), (t = r), l().appendChild(t), r), counter: 0 })).counter++,
                            a = i.element,
                            u = function () {
                                d(a, o, "");
                            };
                        return (
                            (n = function (t) {
                                d(a, o, t);
                            })(e.css),
                            function (t) {
                                t ? (t.css === e.css && t.media === e.media) || n((e = t).css) : u();
                            }
                        );
                    }
                    t.exports = {
                        style: function (t, e) {
                            for (
                                var n = e,
                                    r = (function (t) {
                                        for (var e = [], n = {}, r = 0; r < t.length; r++) {
                                            var i = t[r],
                                                o = i[0],
                                                i = { css: i[1], media: i[2] };
                                            n[o] ? n[o].parts.push(i) : e.push((n[o] = { id: o, parts: [i] }));
                                        }
                                        return e;
                                    })(t),
                                    i = 0;
                                i < r.length;
                                i++
                            ) {
                                var o = r[i],
                                    a = (s[n] || {})[o.id];
                                if (a) {
                                    for (var u = 0; u < a.parts.length; u++) a.parts[u](o.parts[u]);
                                    for (; u < o.parts.length; u++) a.parts.push(f(n, o.parts[u]));
                                } else {
                                    for (var c = [], u = 0; u < o.parts.length; u++) c.push(f(n, o.parts[u]));
                                    (s[n] = s[n] || {}), (s[n][o.id] = { id: o.id, parts: c });
                                }
                            }
                        },
                        clear: function (t, e) {
                            var n = s[t];
                            if (n)
                                if (e) {
                                    var r = n[e];
                                    if (r) for (var i = 0; i < r.parts.length; i += 1) r.parts[i]();
                                } else {
                                    for (var o = Object.keys(n), a = 0; a < o.length; a += 1) for (var u = n[o[a]], c = 0; c < u.parts.length; c += 1) u.parts[c]();
                                    delete s[t];
                                }
                        },
                    };
                    r = [];
                    var r,
                        i = function (t, e) {
                            return (r[t] = e), r.filter(Boolean).join("\n");
                        };
                    function d(t, e, n) {
                        t.styleSheet ? (t.styleSheet.cssText = i(e, n)) : ((n = document.createTextNode(n)), (e = t.childNodes[e]) ? t.replaceChild(n, e) : t.appendChild(n));
                    }
                },
                4737: function (t) {
                    t.exports =
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 29.3" class="jw-svg-icon jw-svg-icon-watermark" focusable="false"><path d="M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z"></path><polygon points="58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61"></polygon><path d="M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z"></path><path d="M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z"></path><polygon points="113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18"></polygon><polygon points="123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29"></polygon><path d="M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z"></path><path d="M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z"></path></svg>';
                },
            },
            r = {};
        function p(t) {
            var e = r[t];
            if (void 0 !== e) return e.exports;
            e = r[t] = { id: t, loaded: !1, exports: {} };
            return n[t].call(e.exports, e, e.exports, p), (e.loaded = !0), e.exports;
        }
        function t(t, e) {
            var n,
                r,
                i = e[0],
                o = e[1],
                a = e[2],
                u = 0;
            if (
                i.some(function (t) {
                    return 0 !== c[t];
                })
            ) {
                for (n in o) p.o(o, n) && (p.m[n] = o[n]);
                a && a(p);
            }
            for (t && t(e); u < i.length; u++) (r = i[u]), p.o(c, r) && c[r] && c[r][0](), (c[i[u]] = 0);
        }
        (p.m = n),
            (p.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return p.d(e, { a: e }), e;
            }),
            (p.d = function (t, e) {
                for (var n in e) p.o(e, n) && !p.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
            }),
            (p.f = {}),
            (p.e = function (n) {
                return Promise.all(
                    Object.keys(p.f).reduce(function (t, e) {
                        return p.f[e](n, t), t;
                    }, [])
                );
            }),
            (p.u = function (t) {
                return (
                    {
                        63: "polyfills.webvtt",
                        74: "jwplayer.controls.tizen",
                        98: "provider.hlsjs",
                        168: "jwplayer.amp",
                        207: "jwplayer.core.controls.html5",
                        250: "provider.html5",
                        347: "vttparser",
                        365: "related",
                        371: "provider.shaka",
                        493: "jwplayer.core.controls.polyfills",
                        520: "provider.airplay",
                        581: "jwplayer.core.controls",
                        605: "jwplayer.core.controls.polyfills.html5",
                        681: "jwplayer.core",
                        716: "jwplayer.controls",
                        926: "jwplayer.stats",
                        943: "polyfills.intersection-observer",
                        977: "provider.cast",
                    }[t] + ".js"
                );
            }),
            (p.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (f = {}),
            (d = "jwplayer:"),
            (p.l = function (r, t, e, n) {
                if (f[r]) f[r].push(t);
                else {
                    var i, o;
                    if (void 0 !== e)
                        for (var a = document.getElementsByTagName("script"), u = 0; u < a.length; u++) {
                            var c = a[u];
                            if (c.getAttribute("src") == r || c.getAttribute("data-webpack") == d + e) {
                                i = c;
                                break;
                            }
                        }
                    i || ((o = !0), ((i = document.createElement("script")).charset = "utf-8"), (i.timeout = 55), p.nc && i.setAttribute("nonce", p.nc), i.setAttribute("data-webpack", d + e), (i.src = r)), (f[r] = [t]);
                    function s(t, e) {
                        (i.onerror = i.onload = null), clearTimeout(l);
                        var n = f[r];
                        if (
                            (delete f[r],
                            i.parentNode && i.parentNode.removeChild(i),
                            n &&
                                n.forEach(function (t) {
                                    return t(e);
                                }),
                            t)
                        )
                            return t(e);
                    }
                    var l = setTimeout(s.bind(null, void 0, { type: "timeout", target: i }), 55e3);
                    (i.onerror = s.bind(null, i.onerror)), (i.onload = s.bind(null, i.onload)), o && document.head.appendChild(i);
                }
            }),
            (p.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (p.nmd = function (t) {
                return (t.paths = []), t.children || (t.children = []), t;
            }),
            (p.p = ""),
            (c = { 313: 0 }),
            (p.f.j = function (n, t) {
                var e,
                    r,
                    i = p.o(c, n) ? c[n] : void 0;
                0 !== i &&
                    (i
                        ? t.push(i[2])
                        : ((e = new Promise(function (t, e) {
                              i = c[n] = [t, e];
                          })),
                          t.push((i[2] = e)),
                          (t = p.p + p.u(n)),
                          (r = new Error()),
                          p.l(
                              t,
                              function (t) {
                                  var e;
                                  p.o(c, n) &&
                                      (0 !== (i = c[n]) && (c[n] = void 0), i) &&
                                      ((e = t && ("load" === t.type ? "missing" : t.type)),
                                      (t = t && t.target && t.target.src),
                                      (r.message = "Loading chunk " + n + " failed.\n(" + e + ": " + t + ")"),
                                      (r.name = "ChunkLoadError"),
                                      (r.type = e),
                                      (r.request = t),
                                      i[1](r));
                              },
                              "chunk-" + n,
                              n
                          )));
            }),
            (e = self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).forEach(t.bind(null, 0)),
            (e.push = t.bind(null, e.push.bind(e)));
        var i,
            e = p(817),
            e =
                ((window.jwplayer = e.default),
                (window.jwplayer.key = "iLrOb7wp7Dd43sKXxKN21pHkQpH6p1I5Tn3G/xc4ZDnFMfCcnn1nUQ=="),
                (window.jwplayer.tavoos_ver = 3.5),
                window.tavoos_jwplayer_obj &&
                    void 0 === window.tavoos_jwplayer_obj.loadcss &&
                    (window.tavoos_jwplayer_obj.loadcss = function (t) {
                        var e = document.createElement("link");
                        (e.async = 1), (e.href = t + "?v=" + window.jwplayer.tavoos_ver), (e.rel = "stylesheet"), document.getElementsByTagName("head")[0].appendChild(e);
                    }),
                window.tavoos_jwplayer_obj &&
                    void 0 === window.tavoos_jwplayer_obj.loadjs &&
                    (window.tavoos_jwplayer_obj.loadjs = function (t) {
                        var e = document.createElement("script");
                        (e.type = "text/javascript"), (e.src = t), document.getElementsByTagName("head")[0].appendChild(e);
                    }),
                document.getElementById("tavoos_player_script"));
        (e && e.getAttribute("data-DontLoadTavoosCss")) || window.tavoos_jwplayer_obj.loadcss("https://player.tavoos.net/tavoos-player.css?v=1"),
            (i = jwplayer)().registerPlugin("tavoos_jwplayer_plugins", "1.0", function (o, t, a) {
                o.on("adPlay", function (t) {
                    if (0 === t.response.getElementsByTagName("Icons").length)
                        t.clickThroughUrl && t.adtitle && ((a.style.display = "block"), (a.innerHTML = '<button type="button" class="vast-clickThrough">' + t.adtitle + '</button><span class="glyphicon glyphicon-new-window"></span>'));
                    else {
                        var e = document.getElementsByClassName("jw-ad-icon-container jw-ad-icon-active");
                        if (0 < e.length) {
                            var t = t.response.getElementsByTagName("Icons"),
                                n = t[0].children[0].getElementsByTagName("HTMLResource");
                            try {
                                var r = t[0].children[0].getElementsByTagName("StaticResource")[0].textContent;
                            } catch (t) {
                                r = null;
                            }
                            if (0 < n.length) {
                                const i = JSON.parse(n[0].firstChild.textContent);
                                (t =
                                    null !== r
                                        ? '<div id="tavoos-cta-container" class="medium-player"><div class="tav-cta-logo"><img src="' +
                                          r.toString() +
                                          '" alt="' +
                                          i.title.text.toString() +
                                          '"></div><div class="tav-cta-info"><div class="tav-cta-title">' +
                                          i.title.text.toString() +
                                          '</div><div class="tav-cta-url">' +
                                          i.website.text.toString() +
                                          '</div></div><div class="tav-cta-btn" style="background-color: ' +
                                          i.call_to_action.bg.toString() +
                                          ';">' +
                                          i.call_to_action.button.toString() +
                                          "</div></div>"
                                        : '<div id="tavoos-cta-container" class="medium-player"><div class="tav-cta-info"><div class="tav-cta-title">' +
                                          i.title.text.toString() +
                                          '</div><div class="tav-cta-url">' +
                                          i.website.text.toString() +
                                          '</div></div><div class="tav-cta-btn" style="background-color: ' +
                                          i.call_to_action.bg.toString() +
                                          ';">' +
                                          i.call_to_action.button.toString() +
                                          "</div></div>"),
                                    (e[0].innerHTML =
                                        "<style>#tavoos-cta-container { display: flex; justify-content: space-evenly; position: absolute; bottom: 0; left: 1rem; padding: 8px; min-width: 275px; max-width: 370px; min-height: 45px; max-height: 75px; direction: rtl; background-color: rgba(243, 243, 243, .8); background: url(https://player.tavoos.net/assets/fastclick.png),rgba(243, 243, 243, .8); border-radius: 4px; transition: opacity ease .3s; box-shadow: 3px 4px 4px -5px gray; cursor: pointer}#tavoos-cta-container:hover { background-color: #f3f3f3}#tavoos-cta-container .tav-cta-logo { all: unset; flex-basis: 40px; height: 40px; align-self: center}#tavoos-cta-container .tav-cta-logo img { height: 100% !important; width: 100% !important; padding: 0 !important; margin: 0 !important}#tavoos-cta-container .tav-cta-info { all: unset; display: flex; flex-direction: column; justify-content: center; align-items: center; margin-left: 12px; margin-right: 12px}#tavoos-cta-container .tav-cta-info .tav-cta-title { font-size: 12px; font-weight: bold; display: -webkit-box; overflow: hidden; -webkit-line-clamp: 1; -webkit-box-orient: vertical; line-height: 20px; width: 100%; color: #000 !important}#tavoos-cta-container .tav-cta-info .tav-cta-url { font-size: 10px; color: gray !important; line-height: 15px}#tavoos-cta-container .tav-cta-info { margin-left: 8px; margin-right: 8px; align-items: end}#tavoos-cta-container .tav-cta-info .tav-cta-url { font-size: 9px}#tavoos-cta-container .tav-cta-btn { all: unset; flex-basis: 30px; width: 82px; padding: 2px 4px 2px 4px; line-height: 34px; display: inline; justify-content: center; align-items: center; border-radius: 4px; background-color: #10af4b94; color: #fff !important; text-decoration: none; align-self: center !important; cursor: pointer !important; transition: background-color ease .3s; position: relative; text-overflow: ellipsis !important; white-space: nowrap !important; animation: animateTop .5s; font-size: 10px; font-weight: bold; text-align: center; direction: rtl !important}@media (max-width:550px){ #tavoos-cta-container{ min-width: 150px; max-width: 160px; min-height: 40px; max-height: 45px; padding: 1px; left: 0.2rem; } #tavoos-cta-container .tav-cta-btn{ font-size: 6px; line-height: 15px; font-weight: 900; } #tavoos-cta-container .tav-cta-info .tav-cta-title{ font-size: 7px; line-height: 10px; text-align: right; } #tavoos-cta-container .tav-cta-info .tav-cta-url{ font-size: 5px; } #tavoos-cta-container .tav-cta-logo{ height: 28px; flex-basis: 28px; } #tavoos-cta-container .tav-cta-info{ margin-left: 2px; margin-right: 2px; } }</style>" +
                                        t);
                            } else
                                (head = document.head || document.getElementsByTagName("head")[0]),
                                    (style = document.createElement("style")),
                                    head.appendChild(style),
                                    style.appendChild(document.createTextNode("@media (max-width:550px){#" + o.id + "_vast .jw-ad-icon-container.jw-ad-icon-active{width: 150px !important;height: 40px !important;}}"));
                        }
                    }
                }),
                    o.on("adSkipped", function () {
                        a.style.display = "none";
                    }),
                    o.on("adComplete", function (t) {
                        t = t.response.getElementsByTagName("Icons");
                        if (0 < t.length) {
                            var e = t[0].children[0].getElementsByTagName("HTMLResource");
                            try {
                                var n = t[0].children[0].getElementsByTagName("StaticResource")[0].textContent;
                            } catch (t) {
                                n = null;
                            }
                            if (0 < e.length) {
                                const r = JSON.parse(e[0].firstChild.textContent);
                                (e = t[0].children[0].getElementsByTagName("IconClicks")[0].children[0].textContent), (t = document.getElementById(o.id));
                                n =
                                    null !== n
                                        ? '<div id="tavoos-complete-view-banner" class="medium-player"> <div class="tav-brand-logo"> <img src="' +
                                          n.toString() +
                                          '" alt="' +
                                          r.title.text.toString() +
                                          '"> </div> <div class="tav-brand-info"> <div class="tav-brand-title">' +
                                          r.title.text.toString() +
                                          '</div> <div class="tav-brand-website"> ' +
                                          r.website.text.toString() +
                                          ' </div> </div> <a href="' +
                                          e.toString() +
                                          '" class="tav-cta-btn" target="blank" rel="noreferrer" style="background-color:' +
                                          r.call_to_action.bg.toString() +
                                          ';"> ' +
                                          r.call_to_action.button.toString() +
                                          ' </a> <svg class="tav-cta-progress"><circle r="12" cx="20" cy="20"></circle></svg> </div>'
                                        : '<div id="tavoos-complete-view-banner" class="medium-player"> <div class="tav-brand-info"> <div class="tav-brand-title">' +
                                          r.title.text.toString() +
                                          '</div> <div class="tav-brand-website"> ' +
                                          r.website.text.toString() +
                                          ' </div> </div> <a href="' +
                                          e.toString() +
                                          '" class="tav-cta-btn" target="blank" rel="noreferrer" style="background-color:' +
                                          r.call_to_action.bg.toString() +
                                          ';"> ' +
                                          r.call_to_action.button.toString() +
                                          ' </a> <svg class="tav-cta-progress"><circle r="12" cx="20" cy="20"></circle></svg> </div>';
                                (t.getElementsByClassName("jw-media jw-reset")[0].innerHTML =
                                    "<style>#tavoos-complete-view-banner { position: absolute; z-index: 999; left: 0; right: 0; top: 0; bottom: 0; display: flex; justify-content: center; align-items: center; flex-direction: column; background: url(https://player.tavoos.net/assets/fastclick.png), rgba(255, 255, 255, .99); animation: fadeIn 1s; direction: rtl}#tavoos-complete-view-banner .tav-brand-logo { all: unset; display: flex; justify-content: center; align-items: center; position: relative; animation: animateTop .6s; height: 90px; width: 90px}#tavoos-complete-view-banner .tav-brand-logo img { height: 100%; width: 100%; padding: 0 !important; margin: 0 !important}#tavoos-complete-view-banner .tav-brand-info { all: unset; display: flex; flex-direction: column; justify-content: center; align-items: center; position: relative; font-size: 12px; animation: animateTop .6s; margin-top: 10px; margin-bottom: 10px}#tavoos-complete-view-banner .tav-brand-info .tav-brand-title { font-weight: bold !important; line-height: 18px !important; color: #000 !important}#tavoos-complete-view-banner .tav-brand-info .tav-brand-website { color: gray !important; font-size: 10px !important; line-height: 18px !important}#tavoos-complete-view-banner .tav-cta-btn { all: unset; flex-basis: 30px; width: 82px; margin-top: 5px; padding: 2px 4px 2px 4px; line-height: 34px; display: inline; justify-content: center; align-items: center; border-radius: 4px; background-color: #34be82; color: #fff !important; text-decoration: none; align-self: center !important; cursor: pointer !important; transition: background-color ease .3s; overflow: hidden; position: relative; text-overflow: ellipsis !important; white-space: nowrap !important; animation: animateTop .5s; font-size: 12px; font-weight: bold; text-align: center; direction: rtl !important}#tavoos-complete-view-banner .tav-cta-btn:hover, #tavoos-complete-view-banner .tav-cta-btn:focus, #tavoos-complete-view-banner .tav-cta-btn:active { background-color: #2c9e6d !important}#tavoos-complete-view-banner .tav-cta-progress { position: absolute !important; bottom: 1rem !important; left: 1rem !important; width: 40px !important; height: 40px !important; transform: rotateY(-180deg) rotateZ(-90deg) !important}#tavoos-complete-view-banner .tav-cta-progress circle { stroke-dasharray: 75px; stroke-dashoffset: 0px; stroke-linecap: round !important; stroke-width: 2px !important; stroke: gray !important; fill: none !important; animation: countdown 5s linear forwards !important}#tavoos-complete-view-banner.medium-player .tav-brand-logo { height: 85px; width: 85px}#tavoos-complete-view-banner.medium-player .tav-cta-btn { flex-basis: 25px; line-height: 25px; font-size: 10px; width: 77px}#tavoos-complete-view-banner.medium-player .tav-brand-info { margin-top: 8px; margin-bottom: 8px}#tavoos-complete-view-banner.medium-player .tav-brand-info .tav-brand-title { font-size: 10px}#tavoos-complete-view-banner.medium-player .tav-brand-info .tav-brand-website { font-size: 9px}#tavoos-complete-view-banner.medium-player .tav-cta-progress { bottom: 1.25rem !important}#tavoos-complete-view-banner.small-player .tav-brand-logo { height: 75px; width: 75px}#tavoos-complete-view-banner.small-player .tav-brand-info { margin-top: 5px; margin-bottom: 5px}#tavoos-complete-view-banner.small-player .tav-brand-info .tav-brand-title { font-size: 8px}#tavoos-complete-view-banner.small-player .tav-brand-info .tav-brand-website { font-size: 7px}#tavoos-complete-view-banner.small-player .tav-cta-btn { font-size: 8px; flex-basis: 20px; line-height: 22px; width: 67px}#tavoos-complete-view-banner.small-player .tav-cta-progress { bottom: .75rem !important}@media (max-width: 550px) { #tavoos-complete-view-banner.medium-player .tav-brand-logo { height: 40px; width: 40px; } #tavoos-complete-view-banner.medium-player .tav-brand-info .tav-brand-title { font-size: 9px; } #tavoos-complete-view-banner.medium-player .tav-brand-info .tav-brand-website{ font-size: 9px !important; }}@keyframes fadeIn { 0% { opacity: 0 } 100% { opacity: 1 }}@keyframes animateTop { from { bottom: -400px; opacity: 0 } to { bottom: 0; opacity: 1 }}@keyframes countdown { from { stroke-dashoffset: 0px } to { stroke-dashoffset: 75px }}</style>".toString() +
                                    n.toString()),
                                    i(o.id).stop(),
                                    setTimeout(function () {
                                        document.getElementById("tavoos-complete-view-banner").remove(), i(o.id).play();
                                    }, 5e3);
                            }
                        }
                        a.style.display = "none";
                    });
            });
    })();
