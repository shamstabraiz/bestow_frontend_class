/*! For license information please see main.833a6ad3.js.LICENSE.txt */
!(function () {
  var e = {
      173: function (e, t, n) {
        var r;
        (r = function () {
          return (function () {
            "use strict";
            var e = [
                ,
                function (e, t, r) {
                  r.r(t),
                    r.d(t, {
                      default: function () {
                        return i;
                      },
                    });
                  var a = (function () {
                      var e =
                        "undefined" !== typeof document && document.currentScript ? document.currentScript.src : void 0;
                      return (
                        (e = e || "/index.js"),
                        function (t) {
                          var r, a, i;
                          (t = t || {}),
                            r || (r = "undefined" !== typeof t ? t : {}),
                            (r.ready = new Promise(function (e, t) {
                              (a = e), (i = t);
                            })),
                            (r.onRuntimeInitialized = function () {
                              function e(e) {
                                (this.xd = e),
                                  (this.be = e.getContext("2d")),
                                  (this.de = n),
                                  (this.clear = function () {
                                    var e = this.xd,
                                      t = n.xd;
                                    (t.width < e.width || t.height < e.height) &&
                                      ((t.width = e.width), (t.height = e.height)),
                                      n.clear();
                                  }),
                                  (this.save = function () {
                                    n.save();
                                  }),
                                  (this.restore = function () {
                                    n.restore();
                                  }),
                                  (this.transform = function (e) {
                                    n.transform(e);
                                  }),
                                  (this.align = function (e, t, r, a) {
                                    n.align(e, t, r, a);
                                  }),
                                  (this.computeAlignment = function (e, t, r, a, i) {
                                    n.Ee(e, t, r, a, i);
                                  }),
                                  (this.flush = function () {
                                    n.flush();
                                    var e = this.be;
                                    (e.globalCompositeOperation = "copy"), e.drawImage(n.xd, 0, 0);
                                  });
                              }
                              function t(e) {
                                var t = {
                                    alpha: 1,
                                    depth: 1,
                                    stencil: 8,
                                    antialias: 0,
                                    premultipliedAlpha: 1,
                                    preserveDrawingBuffer: 0,
                                    preferLowPowerToHighPerformance: 0,
                                    failIfMajorPerformanceCaveat: 0,
                                    enableExtensionsByDefault: 1,
                                    explicitSwapControl: 0,
                                    renderViaOffscreenBackBuffer: 0,
                                  },
                                  n = e.getContext("webgl2", t);
                                n || (n = e.getContext("webgl", t));
                                var i = n,
                                  o = { Ge: (n = Rt(St)), attributes: t, version: t.He, Ld: i };
                                return (
                                  i.canvas && (i.canvas.De = o),
                                  (St[n] = o),
                                  ("undefined" === typeof t.ie || t.ie) &&
                                    (function (e) {
                                      if ((e || (e = Nt), !e.qe)) {
                                        e.qe = !0;
                                        var t = e.Ld;
                                        !(function (e) {
                                          var t = e.getExtension("ANGLE_instanced_arrays");
                                          t &&
                                            ((e.vertexAttribDivisor = function (e, n) {
                                              t.vertexAttribDivisorANGLE(e, n);
                                            }),
                                            (e.drawArraysInstanced = function (e, n, r, a) {
                                              t.drawArraysInstancedANGLE(e, n, r, a);
                                            }),
                                            (e.drawElementsInstanced = function (e, n, r, a, i) {
                                              t.drawElementsInstancedANGLE(e, n, r, a, i);
                                            }));
                                        })(t),
                                          (function (e) {
                                            var t = e.getExtension("OES_vertex_array_object");
                                            t &&
                                              ((e.createVertexArray = function () {
                                                return t.createVertexArrayOES();
                                              }),
                                              (e.deleteVertexArray = function (e) {
                                                t.deleteVertexArrayOES(e);
                                              }),
                                              (e.bindVertexArray = function (e) {
                                                t.bindVertexArrayOES(e);
                                              }),
                                              (e.isVertexArray = function (e) {
                                                return t.isVertexArrayOES(e);
                                              }));
                                          })(t),
                                          (function (e) {
                                            var t = e.getExtension("WEBGL_draw_buffers");
                                            t &&
                                              (e.drawBuffers = function (e, n) {
                                                t.drawBuffersWEBGL(e, n);
                                              });
                                          })(t),
                                          (t.Vd = t.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")),
                                          (t.Yd = t.getExtension(
                                            "WEBGL_multi_draw_instanced_base_vertex_base_instance"
                                          )),
                                          2 <= e.version && (t.Wd = t.getExtension("EXT_disjoint_timer_query_webgl2")),
                                          (2 > e.version || !t.Wd) &&
                                            (t.Wd = t.getExtension("EXT_disjoint_timer_query")),
                                          (t.Ie = t.getExtension("WEBGL_multi_draw")),
                                          (t.getSupportedExtensions() || []).forEach(function (e) {
                                            e.includes("lose_context") || e.includes("debug") || t.getExtension(e);
                                          });
                                      }
                                    })(o),
                                  (Nt = St[n]),
                                  (r.fe = nn = Nt && Nt.Ld),
                                  ((t = a(e.width, e.height)).ce = n),
                                  (t.xd = e),
                                  (t.Td = e.width),
                                  (t.Sd = e.height),
                                  t
                                );
                              }
                              var n = null,
                                a = r.makeRenderer;
                              r.makeRenderer = function (r, a) {
                                return a ? (n || (n = t(document.createElement("canvas"))), new e(r)) : t(r);
                              };
                              var i = r.Artboard.prototype.draw;
                              r.Artboard.prototype.draw = function (e) {
                                i.call(this, e.de || e);
                              };
                              var o = r.WebGLRenderer.prototype.clear;
                              r.WebGLRenderer.prototype.clear = function () {
                                (Nt = St[this.ce]), (r.fe = nn = Nt && Nt.Ld);
                                var e = this.xd;
                                (this.Td == e.width && this.Sd == e.height) ||
                                  (this.resize(e.width, e.height), (this.Td = e.width), (this.Sd = e.height)),
                                  o.call(this);
                              };
                            });
                          var o,
                            u = {};
                          for (o in r) r.hasOwnProperty(o) && (u[o] = r[o]);
                          var l,
                            s,
                            c,
                            f,
                            d,
                            p = "./this.program",
                            h = "object" === typeof window,
                            m = "function" === typeof importScripts,
                            v =
                              "object" === typeof process &&
                              "object" === typeof process.versions &&
                              "string" === typeof process.versions.node,
                            g = "";
                          v
                            ? ((g = m ? n(853).dirname(g) + "/" : "//"),
                              (l = function (e, t) {
                                return (
                                  f || (f = n(598)),
                                  d || (d = n(853)),
                                  (e = d.normalize(e)),
                                  f.readFileSync(e, t ? null : "utf8")
                                );
                              }),
                              (c = function (e) {
                                return (
                                  (e = l(e, !0)).buffer || (e = new Uint8Array(e)),
                                  e.buffer || te("Assertion failed: undefined"),
                                  e
                                );
                              }),
                              (s = function (e, t, r) {
                                f || (f = n(598)),
                                  d || (d = n(853)),
                                  (e = d.normalize(e)),
                                  f.readFile(e, function (e, n) {
                                    e ? r(e) : t(n.buffer);
                                  });
                              }),
                              1 < process.argv.length && (p = process.argv[1].replace(/\\/g, "/")),
                              process.argv.slice(2),
                              process.on("uncaughtException", function (e) {
                                throw e;
                              }),
                              process.on("unhandledRejection", function (e) {
                                throw e;
                              }),
                              (r.inspect = function () {
                                return "[Emscripten Module object]";
                              }))
                            : (h || m) &&
                              (m
                                ? (g = self.location.href)
                                : "undefined" !== typeof document &&
                                  document.currentScript &&
                                  (g = document.currentScript.src),
                              e && (g = e),
                              (g =
                                0 !== g.indexOf("blob:")
                                  ? g.substr(0, g.replace(/[?#].*/, "").lastIndexOf("/") + 1)
                                  : ""),
                              (l = function (e) {
                                var t = new XMLHttpRequest();
                                return t.open("GET", e, !1), t.send(null), t.responseText;
                              }),
                              m &&
                                (c = function (e) {
                                  var t = new XMLHttpRequest();
                                  return (
                                    t.open("GET", e, !1),
                                    (t.responseType = "arraybuffer"),
                                    t.send(null),
                                    new Uint8Array(t.response)
                                  );
                                }),
                              (s = function (e, t, n) {
                                var r = new XMLHttpRequest();
                                r.open("GET", e, !0),
                                  (r.responseType = "arraybuffer"),
                                  (r.onload = function () {
                                    200 == r.status || (0 == r.status && r.response) ? t(r.response) : n();
                                  }),
                                  (r.onerror = n),
                                  r.send(null);
                              }));
                          var y = r.print || console.log.bind(console),
                            b = r.printErr || console.warn.bind(console);
                          for (o in u) u.hasOwnProperty(o) && (r[o] = u[o]);
                          (u = null), r.thisProgram && (p = r.thisProgram);
                          var w,
                            x = 0;
                          r.wasmBinary && (w = r.wasmBinary),
                            r.noExitRuntime,
                            "object" !== typeof WebAssembly && te("no native wasm support detected");
                          var k,
                            E = !1,
                            S = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
                          function C(e, t, n) {
                            var r = t + n;
                            for (n = t; e[n] && !(n >= r); ) ++n;
                            if (16 < n - t && e.subarray && S) return S.decode(e.subarray(t, n));
                            for (r = ""; t < n; ) {
                              var a = e[t++];
                              if (128 & a) {
                                var i = 63 & e[t++];
                                if (192 == (224 & a)) r += String.fromCharCode(((31 & a) << 6) | i);
                                else {
                                  var o = 63 & e[t++];
                                  65536 >
                                  (a =
                                    224 == (240 & a)
                                      ? ((15 & a) << 12) | (i << 6) | o
                                      : ((7 & a) << 18) | (i << 12) | (o << 6) | (63 & e[t++]))
                                    ? (r += String.fromCharCode(a))
                                    : ((a -= 65536), (r += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a))));
                                }
                              } else r += String.fromCharCode(a);
                            }
                            return r;
                          }
                          function P(e, t) {
                            return e ? C(R, e, t) : "";
                          }
                          function O(e, t, n, r) {
                            if (!(0 < r)) return 0;
                            var a = n;
                            r = n + r - 1;
                            for (var i = 0; i < e.length; ++i) {
                              var o = e.charCodeAt(i);
                              if (
                                (55296 <= o &&
                                  57343 >= o &&
                                  (o = (65536 + ((1023 & o) << 10)) | (1023 & e.charCodeAt(++i))),
                                127 >= o)
                              ) {
                                if (n >= r) break;
                                t[n++] = o;
                              } else {
                                if (2047 >= o) {
                                  if (n + 1 >= r) break;
                                  t[n++] = 192 | (o >> 6);
                                } else {
                                  if (65535 >= o) {
                                    if (n + 2 >= r) break;
                                    t[n++] = 224 | (o >> 12);
                                  } else {
                                    if (n + 3 >= r) break;
                                    (t[n++] = 240 | (o >> 18)), (t[n++] = 128 | ((o >> 12) & 63));
                                  }
                                  t[n++] = 128 | ((o >> 6) & 63);
                                }
                                t[n++] = 128 | (63 & o);
                              }
                            }
                            return (t[n] = 0), n - a;
                          }
                          function _(e) {
                            for (var t = 0, n = 0; n < e.length; ++n) {
                              var r = e.charCodeAt(n);
                              55296 <= r &&
                                57343 >= r &&
                                (r = (65536 + ((1023 & r) << 10)) | (1023 & e.charCodeAt(++n))),
                                127 >= r ? ++t : (t = 2047 >= r ? t + 2 : 65535 >= r ? t + 3 : t + 4);
                            }
                            return t;
                          }
                          var j,
                            T,
                            R,
                            A,
                            N,
                            M,
                            L,
                            I,
                            z,
                            F = "undefined" !== typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
                          function D(e, t) {
                            for (var n = e >> 1, r = n + t / 2; !(n >= r) && N[n]; ) ++n;
                            if (32 < (n <<= 1) - e && F) return F.decode(R.subarray(e, n));
                            for (n = "", r = 0; !(r >= t / 2); ++r) {
                              var a = A[(e + 2 * r) >> 1];
                              if (0 == a) break;
                              n += String.fromCharCode(a);
                            }
                            return n;
                          }
                          function B(e, t, n) {
                            if ((void 0 === n && (n = 2147483647), 2 > n)) return 0;
                            var r = t;
                            n = (n -= 2) < 2 * e.length ? n / 2 : e.length;
                            for (var a = 0; a < n; ++a) (A[t >> 1] = e.charCodeAt(a)), (t += 2);
                            return (A[t >> 1] = 0), t - r;
                          }
                          function W(e) {
                            return 2 * e.length;
                          }
                          function U(e, t) {
                            for (var n = 0, r = ""; !(n >= t / 4); ) {
                              var a = M[(e + 4 * n) >> 2];
                              if (0 == a) break;
                              ++n,
                                65536 <= a
                                  ? ((a -= 65536), (r += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a))))
                                  : (r += String.fromCharCode(a));
                            }
                            return r;
                          }
                          function V(e, t, n) {
                            if ((void 0 === n && (n = 2147483647), 4 > n)) return 0;
                            var r = t;
                            n = r + n - 4;
                            for (var a = 0; a < e.length; ++a) {
                              var i = e.charCodeAt(a);
                              if (
                                (55296 <= i &&
                                  57343 >= i &&
                                  (i = (65536 + ((1023 & i) << 10)) | (1023 & e.charCodeAt(++a))),
                                (M[t >> 2] = i),
                                (t += 4) + 4 > n)
                              )
                                break;
                            }
                            return (M[t >> 2] = 0), t - r;
                          }
                          function H(e) {
                            for (var t = 0, n = 0; n < e.length; ++n) {
                              var r = e.charCodeAt(n);
                              55296 <= r && 57343 >= r && ++n, (t += 4);
                            }
                            return t;
                          }
                          function $() {
                            var e = k.buffer;
                            (j = e),
                              (r.HEAP8 = T = new Int8Array(e)),
                              (r.HEAP16 = A = new Int16Array(e)),
                              (r.HEAP32 = M = new Int32Array(e)),
                              (r.HEAPU8 = R = new Uint8Array(e)),
                              (r.HEAPU16 = N = new Uint16Array(e)),
                              (r.HEAPU32 = L = new Uint32Array(e)),
                              (r.HEAPF32 = I = new Float32Array(e)),
                              (r.HEAPF64 = z = new Float64Array(e));
                          }
                          var q,
                            K = [],
                            Y = [],
                            G = [];
                          function Q() {
                            var e = r.preRun.shift();
                            K.unshift(e);
                          }
                          var X,
                            J = 0,
                            Z = null,
                            ee = null;
                          function te(e) {
                            throw (
                              (r.onAbort && r.onAbort(e),
                              b((e = "Aborted(" + e + ")")),
                              (E = !0),
                              (e = new WebAssembly.RuntimeError(e + ". Build with -s ASSERTIONS=1 for more info.")),
                              i(e),
                              e)
                            );
                          }
                          function ne() {
                            return X.startsWith("data:application/octet-stream;base64,");
                          }
                          if (
                            ((r.preloadedImages = {}), (r.preloadedAudios = {}), (X = "webgl_advanced.wasm"), !ne())
                          ) {
                            var re = X;
                            X = r.locateFile ? r.locateFile(re, g) : g + re;
                          }
                          function ae() {
                            var e = X;
                            try {
                              if (e == X && w) return new Uint8Array(w);
                              if (c) return c(e);
                              throw "both async and sync fetching of the wasm failed";
                            } catch (t) {
                              te(t);
                            }
                          }
                          function ie(e) {
                            for (; 0 < e.length; ) {
                              var t = e.shift();
                              if ("function" == typeof t) t(r);
                              else {
                                var n = t.Fe;
                                "number" === typeof n
                                  ? void 0 === t.Md
                                    ? oe(n)()
                                    : oe(n)(t.Md)
                                  : n(void 0 === t.Md ? null : t.Md);
                              }
                            }
                          }
                          function oe(e) {
                            return q.get(e);
                          }
                          var ue = {};
                          function le(e) {
                            for (; e.length; ) {
                              var t = e.pop();
                              e.pop()(t);
                            }
                          }
                          function se(e) {
                            return this.fromWireType(L[e >> 2]);
                          }
                          var ce = {},
                            fe = {},
                            de = {};
                          function pe(e) {
                            if (void 0 === e) return "_unknown";
                            var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                            return 48 <= t && 57 >= t ? "_" + e : e;
                          }
                          function he(e, t) {
                            return (
                              (e = pe(e)),
                              new Function(
                                "body",
                                "return function " +
                                  e +
                                  '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'
                              )(t)
                            );
                          }
                          function me(e) {
                            var t = Error,
                              n = he(e, function (t) {
                                (this.name = e),
                                  (this.message = t),
                                  void 0 !== (t = Error(t).stack) &&
                                    (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""));
                              });
                            return (
                              (n.prototype = Object.create(t.prototype)),
                              (n.prototype.constructor = n),
                              (n.prototype.toString = function () {
                                return void 0 === this.message ? this.name : this.name + ": " + this.message;
                              }),
                              n
                            );
                          }
                          var ve = void 0;
                          function ge(e) {
                            throw new ve(e);
                          }
                          function ye(e, t, n) {
                            function r(t) {
                              (t = n(t)).length !== e.length && ge("Mismatched type converter count");
                              for (var r = 0; r < e.length; ++r) Se(e[r], t[r]);
                            }
                            e.forEach(function (e) {
                              de[e] = t;
                            });
                            var a = Array(t.length),
                              i = [],
                              o = 0;
                            t.forEach(function (e, t) {
                              fe.hasOwnProperty(e)
                                ? (a[t] = fe[e])
                                : (i.push(e),
                                  ce.hasOwnProperty(e) || (ce[e] = []),
                                  ce[e].push(function () {
                                    (a[t] = fe[e]), ++o === i.length && r(a);
                                  }));
                            }),
                              0 === i.length && r(a);
                          }
                          function be(e) {
                            switch (e) {
                              case 1:
                                return 0;
                              case 2:
                                return 1;
                              case 4:
                                return 2;
                              case 8:
                                return 3;
                              default:
                                throw new TypeError("Unknown type size: " + e);
                            }
                          }
                          var we = void 0;
                          function xe(e) {
                            for (var t = ""; R[e]; ) t += we[R[e++]];
                            return t;
                          }
                          var ke = void 0;
                          function Ee(e) {
                            throw new ke(e);
                          }
                          function Se(e, t, n) {
                            if (((n = n || {}), !("argPackAdvance" in t)))
                              throw new TypeError("registerType registeredInstance requires argPackAdvance");
                            var r = t.name;
                            if (
                              (e || Ee('type "' + r + '" must have a positive integer typeid pointer'),
                              fe.hasOwnProperty(e))
                            ) {
                              if (n.pe) return;
                              Ee("Cannot register type '" + r + "' twice");
                            }
                            (fe[e] = t),
                              delete de[e],
                              ce.hasOwnProperty(e) &&
                                ((t = ce[e]),
                                delete ce[e],
                                t.forEach(function (e) {
                                  e();
                                }));
                          }
                          function Ce(e) {
                            Ee(e.gd.kd.hd.name + " instance already deleted");
                          }
                          var Pe = !1;
                          function Oe() {}
                          function _e(e) {
                            --e.count.value, 0 === e.count.value && (e.nd ? e.pd.rd(e.nd) : e.kd.hd.rd(e.jd));
                          }
                          function je(e) {
                            return "undefined" === typeof FinalizationGroup
                              ? ((je = function (e) {
                                  return e;
                                }),
                                e)
                              : ((Pe = new FinalizationGroup(function (e) {
                                  for (var t = e.next(); !t.done; t = e.next())
                                    (t = t.value).jd ? _e(t) : console.warn("object already deleted: " + t.jd);
                                })),
                                (Oe = function (e) {
                                  Pe.unregister(e.gd);
                                }),
                                (je = function (e) {
                                  return Pe.register(e, e.gd, e.gd), e;
                                })(e));
                          }
                          var Te = void 0,
                            Re = [];
                          function Ae() {
                            for (; Re.length; ) {
                              var e = Re.pop();
                              (e.gd.vd = !1), e.delete();
                            }
                          }
                          function Ne() {}
                          var Me = {};
                          function Le(e, t, n) {
                            if (void 0 === e[t].ld) {
                              var r = e[t];
                              (e[t] = function () {
                                return (
                                  e[t].ld.hasOwnProperty(arguments.length) ||
                                    Ee(
                                      "Function '" +
                                        n +
                                        "' called with an invalid number of arguments (" +
                                        arguments.length +
                                        ") - expects one of (" +
                                        e[t].ld +
                                        ")!"
                                    ),
                                  e[t].ld[arguments.length].apply(this, arguments)
                                );
                              }),
                                (e[t].ld = []),
                                (e[t].ld[r.Cd] = r);
                            }
                          }
                          function Ie(e, t, n) {
                            r.hasOwnProperty(e)
                              ? ((void 0 === n || (void 0 !== r[e].ld && void 0 !== r[e].ld[n])) &&
                                  Ee("Cannot register public name '" + e + "' twice"),
                                Le(r, e, e),
                                r.hasOwnProperty(n) &&
                                  Ee(
                                    "Cannot register multiple overloads of a function with the same number of arguments (" +
                                      n +
                                      ")!"
                                  ),
                                (r[e].ld[n] = t))
                              : ((r[e] = t), void 0 !== n && (r[e].Je = n));
                          }
                          function ze(e, t, n, r, a, i, o, u) {
                            (this.name = e),
                              (this.constructor = t),
                              (this.sd = n),
                              (this.rd = r),
                              (this.qd = a),
                              (this.ke = i),
                              (this.Bd = o),
                              (this.he = u),
                              (this.te = []);
                          }
                          function Fe(e, t, n) {
                            for (; t !== n; )
                              t.Bd || Ee("Expected null or instance of " + n.name + ", got an instance of " + t.name),
                                (e = t.Bd(e)),
                                (t = t.qd);
                            return e;
                          }
                          function De(e, t) {
                            return null === t
                              ? (this.Od && Ee("null is not a valid " + this.name), 0)
                              : (t.gd || Ee('Cannot pass "' + lt(t) + '" as a ' + this.name),
                                t.gd.jd || Ee("Cannot pass deleted object as a pointer of type " + this.name),
                                Fe(t.gd.jd, t.gd.kd.hd, this.hd));
                          }
                          function Be(e, t) {
                            if (null === t) {
                              if ((this.Od && Ee("null is not a valid " + this.name), this.Ed)) {
                                var n = this.Pd();
                                return null !== e && e.push(this.rd, n), n;
                              }
                              return 0;
                            }
                            if (
                              (t.gd || Ee('Cannot pass "' + lt(t) + '" as a ' + this.name),
                              t.gd.jd || Ee("Cannot pass deleted object as a pointer of type " + this.name),
                              !this.Dd &&
                                t.gd.kd.Dd &&
                                Ee(
                                  "Cannot convert argument of type " +
                                    (t.gd.pd ? t.gd.pd.name : t.gd.kd.name) +
                                    " to parameter type " +
                                    this.name
                                ),
                              (n = Fe(t.gd.jd, t.gd.kd.hd, this.hd)),
                              this.Ed)
                            )
                              switch (
                                (void 0 === t.gd.nd && Ee("Passing raw pointer to smart pointer is illegal"), this.ye)
                              ) {
                                case 0:
                                  t.gd.pd === this
                                    ? (n = t.gd.nd)
                                    : Ee(
                                        "Cannot convert argument of type " +
                                          (t.gd.pd ? t.gd.pd.name : t.gd.kd.name) +
                                          " to parameter type " +
                                          this.name
                                      );
                                  break;
                                case 1:
                                  n = t.gd.nd;
                                  break;
                                case 2:
                                  if (t.gd.pd === this) n = t.gd.nd;
                                  else {
                                    var r = t.clone();
                                    (n = this.ue(
                                      n,
                                      it(function () {
                                        r.delete();
                                      })
                                    )),
                                      null !== e && e.push(this.rd, n);
                                  }
                                  break;
                                default:
                                  Ee("Unsupporting sharing policy");
                              }
                            return n;
                          }
                          function We(e, t) {
                            return null === t
                              ? (this.Od && Ee("null is not a valid " + this.name), 0)
                              : (t.gd || Ee('Cannot pass "' + lt(t) + '" as a ' + this.name),
                                t.gd.jd || Ee("Cannot pass deleted object as a pointer of type " + this.name),
                                t.gd.kd.Dd &&
                                  Ee(
                                    "Cannot convert argument of type " +
                                      t.gd.kd.name +
                                      " to parameter type " +
                                      this.name
                                  ),
                                Fe(t.gd.jd, t.gd.kd.hd, this.hd));
                          }
                          function Ue(e, t, n) {
                            return t === n ? e : void 0 === n.qd || null === (e = Ue(e, t, n.qd)) ? null : n.he(e);
                          }
                          var Ve = {};
                          function He(e, t) {
                            return (
                              (t.kd && t.jd) || ge("makeClassHandle requires ptr and ptrType"),
                              !!t.pd !== !!t.nd && ge("Both smartPtrType and smartPtr must be specified"),
                              (t.count = { value: 1 }),
                              je(Object.create(e, { gd: { value: t } }))
                            );
                          }
                          function $e(e, t, n, r) {
                            (this.name = e),
                              (this.hd = t),
                              (this.Od = n),
                              (this.Dd = r),
                              (this.Ed = !1),
                              (this.rd = this.ue = this.Pd = this.Zd = this.ye = this.se = void 0),
                              void 0 !== t.qd
                                ? (this.toWireType = Be)
                                : ((this.toWireType = r ? De : We), (this.od = null));
                          }
                          function qe(e, t, n) {
                            r.hasOwnProperty(e) || ge("Replacing nonexistant public symbol"),
                              void 0 !== r[e].ld && void 0 !== n ? (r[e].ld[n] = t) : ((r[e] = t), (r[e].Cd = n));
                          }
                          function Ke(e, t) {
                            var n = (e = xe(e)).includes("j")
                              ? (function (e, t) {
                                  var n = [];
                                  return function () {
                                    n.length = arguments.length;
                                    for (var a = 0; a < arguments.length; a++) n[a] = arguments[a];
                                    return (
                                      e.includes("j")
                                        ? ((a = r["dynCall_" + e]),
                                          (a = n && n.length ? a.apply(null, [t].concat(n)) : a.call(null, t)))
                                        : (a = oe(t).apply(null, n)),
                                      a
                                    );
                                  };
                                })(e, t)
                              : oe(t);
                            return (
                              "function" !== typeof n && Ee("unknown function pointer with signature " + e + ": " + t),
                              n
                            );
                          }
                          var Ye = void 0;
                          function Ge(e) {
                            var t = xe((e = fn(e)));
                            return sn(e), t;
                          }
                          function Qe(e, t) {
                            var n = [],
                              r = {};
                            throw (
                              (t.forEach(function e(t) {
                                r[t] || fe[t] || (de[t] ? de[t].forEach(e) : (n.push(t), (r[t] = !0)));
                              }),
                              new Ye(e + ": " + n.map(Ge).join([", "])))
                            );
                          }
                          function Xe(e, t, n) {
                            return (
                              e instanceof Object || Ee(n + ' with invalid "this": ' + e),
                              e instanceof t.hd.constructor ||
                                Ee(n + ' incompatible with "this" of type ' + e.constructor.name),
                              e.gd.jd || Ee("cannot call emscripten binding method " + n + " on deleted object"),
                              Fe(e.gd.jd, e.gd.kd.hd, t.hd)
                            );
                          }
                          function Je(e, t) {
                            for (var n = [], r = 0; r < e; r++) n.push(M[(t >> 2) + r]);
                            return n;
                          }
                          function Ze(e) {
                            var t = Function;
                            if (!(t instanceof Function))
                              throw new TypeError(
                                "new_ called with constructor type " + typeof t + " which is not a function"
                              );
                            var n = he(t.name || "unknownFunctionName", function () {});
                            return (
                              (n.prototype = t.prototype), (n = new n()), (e = t.apply(n, e)) instanceof Object ? e : n
                            );
                          }
                          function et(e, t, n, r, a) {
                            var i = t.length;
                            2 > i &&
                              Ee("argTypes array size mismatch! Must at least get return value and 'this' types!");
                            var o = null !== t[1] && null !== n,
                              u = !1;
                            for (n = 1; n < t.length; ++n)
                              if (null !== t[n] && void 0 === t[n].od) {
                                u = !0;
                                break;
                              }
                            var l = "void" !== t[0].name,
                              s = "",
                              c = "";
                            for (n = 0; n < i - 2; ++n)
                              (s += (0 !== n ? ", " : "") + "arg" + n),
                                (c += (0 !== n ? ", " : "") + "arg" + n + "Wired");
                            (e =
                              "return function " +
                              pe(e) +
                              "(" +
                              s +
                              ") {\nif (arguments.length !== " +
                              (i - 2) +
                              ") {\nthrowBindingError('function " +
                              e +
                              " called with ' + arguments.length + ' arguments, expected " +
                              (i - 2) +
                              " args!');\n}\n"),
                              u && (e += "var destructors = [];\n");
                            var f = u ? "destructors" : "null";
                            for (
                              s = "throwBindingError invoker fn runDestructors retType classParam".split(" "),
                                r = [Ee, r, a, le, t[0], t[1]],
                                o && (e += "var thisWired = classParam.toWireType(" + f + ", this);\n"),
                                n = 0;
                              n < i - 2;
                              ++n
                            )
                              (e +=
                                "var arg" +
                                n +
                                "Wired = argType" +
                                n +
                                ".toWireType(" +
                                f +
                                ", arg" +
                                n +
                                "); // " +
                                t[n + 2].name +
                                "\n"),
                                s.push("argType" + n),
                                r.push(t[n + 2]);
                            if (
                              (o && (c = "thisWired" + (0 < c.length ? ", " : "") + c),
                              (e += (l ? "var rv = " : "") + "invoker(fn" + (0 < c.length ? ", " : "") + c + ");\n"),
                              u)
                            )
                              e += "runDestructors(destructors);\n";
                            else
                              for (n = o ? 1 : 2; n < t.length; ++n)
                                (i = 1 === n ? "thisWired" : "arg" + (n - 2) + "Wired"),
                                  null !== t[n].od &&
                                    ((e += i + "_dtor(" + i + "); // " + t[n].name + "\n"),
                                    s.push(i + "_dtor"),
                                    r.push(t[n].od));
                            return (
                              l && (e += "var ret = retType.fromWireType(rv);\nreturn ret;\n"),
                              s.push(e + "}\n"),
                              Ze(s).apply(null, r)
                            );
                          }
                          var tt = [],
                            nt = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }];
                          function rt(e) {
                            4 < e && 0 === --nt[e].Qd && ((nt[e] = void 0), tt.push(e));
                          }
                          function at(e) {
                            return e || Ee("Cannot use deleted val. handle = " + e), nt[e].value;
                          }
                          function it(e) {
                            switch (e) {
                              case void 0:
                                return 1;
                              case null:
                                return 2;
                              case !0:
                                return 3;
                              case !1:
                                return 4;
                              default:
                                var t = tt.length ? tt.pop() : nt.length;
                                return (nt[t] = { Qd: 1, value: e }), t;
                            }
                          }
                          function ot(e, t, n) {
                            switch (t) {
                              case 0:
                                return function (e) {
                                  return this.fromWireType((n ? T : R)[e]);
                                };
                              case 1:
                                return function (e) {
                                  return this.fromWireType((n ? A : N)[e >> 1]);
                                };
                              case 2:
                                return function (e) {
                                  return this.fromWireType((n ? M : L)[e >> 2]);
                                };
                              default:
                                throw new TypeError("Unknown integer type: " + e);
                            }
                          }
                          function ut(e, t) {
                            var n = fe[e];
                            return void 0 === n && Ee(t + " has unknown type " + Ge(e)), n;
                          }
                          function lt(e) {
                            if (null === e) return "null";
                            var t = typeof e;
                            return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e;
                          }
                          function st(e, t) {
                            switch (t) {
                              case 2:
                                return function (e) {
                                  return this.fromWireType(I[e >> 2]);
                                };
                              case 3:
                                return function (e) {
                                  return this.fromWireType(z[e >> 3]);
                                };
                              default:
                                throw new TypeError("Unknown float type: " + e);
                            }
                          }
                          function ct(e, t, n) {
                            switch (t) {
                              case 0:
                                return n
                                  ? function (e) {
                                      return T[e];
                                    }
                                  : function (e) {
                                      return R[e];
                                    };
                              case 1:
                                return n
                                  ? function (e) {
                                      return A[e >> 1];
                                    }
                                  : function (e) {
                                      return N[e >> 1];
                                    };
                              case 2:
                                return n
                                  ? function (e) {
                                      return M[e >> 2];
                                    }
                                  : function (e) {
                                      return L[e >> 2];
                                    };
                              default:
                                throw new TypeError("Unknown integer type: " + e);
                            }
                          }
                          var ft = {};
                          function dt(e) {
                            var t = ft[e];
                            return void 0 === t ? xe(e) : t;
                          }
                          var pt,
                            ht = [],
                            mt = [];
                          pt = v
                            ? function () {
                                var e = process.hrtime();
                                return 1e3 * e[0] + e[1] / 1e6;
                              }
                            : function () {
                                return performance.now();
                              };
                          var vt = 1,
                            gt = [],
                            yt = [],
                            bt = [],
                            wt = [],
                            xt = [],
                            kt = [],
                            Et = [],
                            St = [],
                            Ct = [],
                            Pt = [],
                            Ot = {},
                            _t = {},
                            jt = 4;
                          function Tt(e) {
                            At || (At = e);
                          }
                          function Rt(e) {
                            for (var t = vt++, n = e.length; n < t; n++) e[n] = null;
                            return t;
                          }
                          var At,
                            Nt,
                            Mt = [];
                          function Lt(e, t, n, r) {
                            for (var a = 0; a < e; a++) {
                              var i = nn[n](),
                                o = i && Rt(r);
                              i ? ((i.name = o), (r[o] = i)) : Tt(1282), (M[(t + 4 * a) >> 2] = o);
                            }
                          }
                          function It(e, t) {
                            if (t) {
                              var n = void 0;
                              switch (e) {
                                case 36346:
                                  n = 1;
                                  break;
                                case 36344:
                                  return;
                                case 34814:
                                case 36345:
                                  n = 0;
                                  break;
                                case 34466:
                                  var r = nn.getParameter(34467);
                                  n = r ? r.length : 0;
                                  break;
                                case 33309:
                                  if (2 > Nt.version) return void Tt(1282);
                                  n = 2 * (nn.getSupportedExtensions() || []).length;
                                  break;
                                case 33307:
                                case 33308:
                                  if (2 > Nt.version) return void Tt(1280);
                                  n = 33307 == e ? 3 : 0;
                              }
                              if (void 0 === n)
                                switch (((r = nn.getParameter(e)), typeof r)) {
                                  case "number":
                                    n = r;
                                    break;
                                  case "boolean":
                                    n = r ? 1 : 0;
                                    break;
                                  case "string":
                                    return void Tt(1280);
                                  case "object":
                                    if (null === r)
                                      switch (e) {
                                        case 34964:
                                        case 35725:
                                        case 34965:
                                        case 36006:
                                        case 36007:
                                        case 32873:
                                        case 34229:
                                        case 36662:
                                        case 36663:
                                        case 35053:
                                        case 35055:
                                        case 36010:
                                        case 35097:
                                        case 35869:
                                        case 32874:
                                        case 36389:
                                        case 35983:
                                        case 35368:
                                        case 34068:
                                          n = 0;
                                          break;
                                        default:
                                          return void Tt(1280);
                                      }
                                    else {
                                      if (
                                        r instanceof Float32Array ||
                                        r instanceof Uint32Array ||
                                        r instanceof Int32Array ||
                                        r instanceof Array
                                      ) {
                                        for (e = 0; e < r.length; ++e) M[(t + 4 * e) >> 2] = r[e];
                                        return;
                                      }
                                      try {
                                        n = 0 | r.name;
                                      } catch (a) {
                                        return (
                                          Tt(1280),
                                          void b(
                                            "GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter(" +
                                              e +
                                              ")! (error: " +
                                              a +
                                              ")"
                                          )
                                        );
                                      }
                                    }
                                    break;
                                  default:
                                    return (
                                      Tt(1280),
                                      void b(
                                        "GL_INVALID_ENUM in glGet0v: Native code calling glGet0v(" +
                                          e +
                                          ") and it returns " +
                                          r +
                                          " of type " +
                                          typeof r +
                                          "!"
                                      )
                                    );
                                }
                              M[t >> 2] = n;
                            } else Tt(1281);
                          }
                          function zt(e) {
                            var t = _(e) + 1,
                              n = ln(t);
                            return O(e, R, n, t), n;
                          }
                          function Ft(e) {
                            return "]" == e.slice(-1) && e.lastIndexOf("[");
                          }
                          function Dt(e) {
                            return 0 == (e -= 5120)
                              ? T
                              : 1 == e
                              ? R
                              : 2 == e
                              ? A
                              : 4 == e
                              ? M
                              : 6 == e
                              ? I
                              : 5 == e || 28922 == e || 28520 == e || 30779 == e || 30782 == e
                              ? L
                              : N;
                          }
                          function Bt(e, t, n, r, a) {
                            e = Dt(e);
                            var i = 31 - Math.clz32(e.BYTES_PER_ELEMENT),
                              o = jt;
                            return e.subarray(
                              a >> i,
                              (a +
                                r *
                                  ((n *
                                    ({ 5: 3, 6: 4, 8: 2, 29502: 3, 29504: 4, 26917: 2, 26918: 2, 29846: 3, 29847: 4 }[
                                      t - 6402
                                    ] || 1) *
                                    (1 << i) +
                                    o -
                                    1) &
                                    -o)) >>
                                i
                            );
                          }
                          function Wt(e) {
                            var t = nn.ge;
                            if (t) {
                              var n = t.Ad[e];
                              return (
                                "number" === typeof n &&
                                  (t.Ad[e] = n = nn.getUniformLocation(t, t.$d[e] + (0 < n ? "[" + n + "]" : ""))),
                                n
                              );
                            }
                            Tt(1282);
                          }
                          var Ut = [],
                            Vt = [],
                            Ht = {};
                          function $t() {
                            if (!qt) {
                              var e,
                                t = {
                                  USER: "web_user",
                                  LOGNAME: "web_user",
                                  PATH: "/",
                                  PWD: "/",
                                  HOME: "/home/web_user",
                                  LANG:
                                    (
                                      ("object" === typeof navigator &&
                                        navigator.languages &&
                                        navigator.languages[0]) ||
                                      "C"
                                    ).replace("-", "_") + ".UTF-8",
                                  _: p || "./this.program",
                                };
                              for (e in Ht) void 0 === Ht[e] ? delete t[e] : (t[e] = Ht[e]);
                              var n = [];
                              for (e in t) n.push(e + "=" + t[e]);
                              qt = n;
                            }
                            return qt;
                          }
                          var qt,
                            Kt = [null, [], []];
                          function Yt(e) {
                            return 0 === e % 4 && (0 !== e % 100 || 0 === e % 400);
                          }
                          function Gt(e, t) {
                            for (var n = 0, r = 0; r <= t; n += e[r++]);
                            return n;
                          }
                          var Qt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                            Xt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                          function Jt(e, t) {
                            for (e = new Date(e.getTime()); 0 < t; ) {
                              var n = e.getMonth(),
                                r = (Yt(e.getFullYear()) ? Qt : Xt)[n];
                              if (!(t > r - e.getDate())) {
                                e.setDate(e.getDate() + t);
                                break;
                              }
                              (t -= r - e.getDate() + 1),
                                e.setDate(1),
                                11 > n ? e.setMonth(n + 1) : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
                            }
                            return e;
                          }
                          function Zt(e, t, n, r) {
                            function a(e, t, n) {
                              for (e = "number" === typeof e ? e.toString() : e || ""; e.length < t; ) e = n[0] + e;
                              return e;
                            }
                            function i(e, t) {
                              return a(e, t, "0");
                            }
                            function o(e, t) {
                              function n(e) {
                                return 0 > e ? -1 : 0 < e ? 1 : 0;
                              }
                              var r;
                              return (
                                0 === (r = n(e.getFullYear() - t.getFullYear())) &&
                                  0 === (r = n(e.getMonth() - t.getMonth())) &&
                                  (r = n(e.getDate() - t.getDate())),
                                r
                              );
                            }
                            function u(e) {
                              switch (e.getDay()) {
                                case 0:
                                  return new Date(e.getFullYear() - 1, 11, 29);
                                case 1:
                                  return e;
                                case 2:
                                  return new Date(e.getFullYear(), 0, 3);
                                case 3:
                                  return new Date(e.getFullYear(), 0, 2);
                                case 4:
                                  return new Date(e.getFullYear(), 0, 1);
                                case 5:
                                  return new Date(e.getFullYear() - 1, 11, 31);
                                case 6:
                                  return new Date(e.getFullYear() - 1, 11, 30);
                              }
                            }
                            function l(e) {
                              e = Jt(new Date(e.md + 1900, 0, 1), e.Kd);
                              var t = new Date(e.getFullYear() + 1, 0, 4),
                                n = u(new Date(e.getFullYear(), 0, 4));
                              return (
                                (t = u(t)),
                                0 >= o(n, e)
                                  ? 0 >= o(t, e)
                                    ? e.getFullYear() + 1
                                    : e.getFullYear()
                                  : e.getFullYear() - 1
                              );
                            }
                            var s = M[(r + 40) >> 2];
                            for (var c in ((r = {
                              Be: M[r >> 2],
                              Ae: M[(r + 4) >> 2],
                              Id: M[(r + 8) >> 2],
                              zd: M[(r + 12) >> 2],
                              wd: M[(r + 16) >> 2],
                              md: M[(r + 20) >> 2],
                              Jd: M[(r + 24) >> 2],
                              Kd: M[(r + 28) >> 2],
                              Ke: M[(r + 32) >> 2],
                              ze: M[(r + 36) >> 2],
                              Ce: s ? P(s) : "",
                            }),
                            (n = P(n)),
                            (s = {
                              "%c": "%a %b %d %H:%M:%S %Y",
                              "%D": "%m/%d/%y",
                              "%F": "%Y-%m-%d",
                              "%h": "%b",
                              "%r": "%I:%M:%S %p",
                              "%R": "%H:%M",
                              "%T": "%H:%M:%S",
                              "%x": "%m/%d/%y",
                              "%X": "%H:%M:%S",
                              "%Ec": "%c",
                              "%EC": "%C",
                              "%Ex": "%m/%d/%y",
                              "%EX": "%H:%M:%S",
                              "%Ey": "%y",
                              "%EY": "%Y",
                              "%Od": "%d",
                              "%Oe": "%e",
                              "%OH": "%H",
                              "%OI": "%I",
                              "%Om": "%m",
                              "%OM": "%M",
                              "%OS": "%S",
                              "%Ou": "%u",
                              "%OU": "%U",
                              "%OV": "%V",
                              "%Ow": "%w",
                              "%OW": "%W",
                              "%Oy": "%y",
                            })))
                              n = n.replace(new RegExp(c, "g"), s[c]);
                            var f = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                              d =
                                "January February March April May June July August September October November December".split(
                                  " "
                                );
                            for (c in (s = {
                              "%a": function (e) {
                                return f[e.Jd].substring(0, 3);
                              },
                              "%A": function (e) {
                                return f[e.Jd];
                              },
                              "%b": function (e) {
                                return d[e.wd].substring(0, 3);
                              },
                              "%B": function (e) {
                                return d[e.wd];
                              },
                              "%C": function (e) {
                                return i(((e.md + 1900) / 100) | 0, 2);
                              },
                              "%d": function (e) {
                                return i(e.zd, 2);
                              },
                              "%e": function (e) {
                                return a(e.zd, 2, " ");
                              },
                              "%g": function (e) {
                                return l(e).toString().substring(2);
                              },
                              "%G": function (e) {
                                return l(e);
                              },
                              "%H": function (e) {
                                return i(e.Id, 2);
                              },
                              "%I": function (e) {
                                return 0 == (e = e.Id) ? (e = 12) : 12 < e && (e -= 12), i(e, 2);
                              },
                              "%j": function (e) {
                                return i(e.zd + Gt(Yt(e.md + 1900) ? Qt : Xt, e.wd - 1), 3);
                              },
                              "%m": function (e) {
                                return i(e.wd + 1, 2);
                              },
                              "%M": function (e) {
                                return i(e.Ae, 2);
                              },
                              "%n": function () {
                                return "\n";
                              },
                              "%p": function (e) {
                                return 0 <= e.Id && 12 > e.Id ? "AM" : "PM";
                              },
                              "%S": function (e) {
                                return i(e.Be, 2);
                              },
                              "%t": function () {
                                return "\t";
                              },
                              "%u": function (e) {
                                return e.Jd || 7;
                              },
                              "%U": function (e) {
                                var t = new Date(e.md + 1900, 0, 1),
                                  n = 0 === t.getDay() ? t : Jt(t, 7 - t.getDay());
                                return 0 > o(n, (e = new Date(e.md + 1900, e.wd, e.zd)))
                                  ? i(
                                      Math.ceil(
                                        (31 -
                                          n.getDate() +
                                          (Gt(Yt(e.getFullYear()) ? Qt : Xt, e.getMonth() - 1) - 31) +
                                          e.getDate()) /
                                          7
                                      ),
                                      2
                                    )
                                  : 0 === o(n, t)
                                  ? "01"
                                  : "00";
                              },
                              "%V": function (e) {
                                var t = new Date(e.md + 1901, 0, 4),
                                  n = u(new Date(e.md + 1900, 0, 4));
                                t = u(t);
                                var r = Jt(new Date(e.md + 1900, 0, 1), e.Kd);
                                return 0 > o(r, n)
                                  ? "53"
                                  : 0 >= o(t, r)
                                  ? "01"
                                  : i(
                                      Math.ceil(
                                        (n.getFullYear() < e.md + 1900
                                          ? e.Kd + 32 - n.getDate()
                                          : e.Kd + 1 - n.getDate()) / 7
                                      ),
                                      2
                                    );
                              },
                              "%w": function (e) {
                                return e.Jd;
                              },
                              "%W": function (e) {
                                var t = new Date(e.md, 0, 1),
                                  n = 1 === t.getDay() ? t : Jt(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1);
                                return 0 > o(n, (e = new Date(e.md + 1900, e.wd, e.zd)))
                                  ? i(
                                      Math.ceil(
                                        (31 -
                                          n.getDate() +
                                          (Gt(Yt(e.getFullYear()) ? Qt : Xt, e.getMonth() - 1) - 31) +
                                          e.getDate()) /
                                          7
                                      ),
                                      2
                                    )
                                  : 0 === o(n, t)
                                  ? "01"
                                  : "00";
                              },
                              "%y": function (e) {
                                return (e.md + 1900).toString().substring(2);
                              },
                              "%Y": function (e) {
                                return e.md + 1900;
                              },
                              "%z": function (e) {
                                var t = 0 <= (e = e.ze);
                                return (
                                  (e = Math.abs(e) / 60),
                                  (t ? "+" : "-") + String("0000" + ((e / 60) * 100 + (e % 60))).slice(-4)
                                );
                              },
                              "%Z": function (e) {
                                return e.Ce;
                              },
                              "%%": function () {
                                return "%";
                              },
                            }))
                              n.includes(c) && (n = n.replace(new RegExp(c, "g"), s[c](r)));
                            return (
                              (c = (function (e) {
                                var t = Array(_(e) + 1);
                                return O(e, t, 0, t.length), t;
                              })(n)),
                              c.length > t ? 0 : (T.set(c, e), c.length - 1)
                            );
                          }
                          ve = r.InternalError = me("InternalError");
                          for (var en = Array(256), tn = 0; 256 > tn; ++tn) en[tn] = String.fromCharCode(tn);
                          (we = en),
                            (ke = r.BindingError = me("BindingError")),
                            (Ne.prototype.isAliasOf = function (e) {
                              if (!(this instanceof Ne && e instanceof Ne)) return !1;
                              var t = this.gd.kd.hd,
                                n = this.gd.jd,
                                r = e.gd.kd.hd;
                              for (e = e.gd.jd; t.qd; ) (n = t.Bd(n)), (t = t.qd);
                              for (; r.qd; ) (e = r.Bd(e)), (r = r.qd);
                              return t === r && n === e;
                            }),
                            (Ne.prototype.clone = function () {
                              if ((this.gd.jd || Ce(this), this.gd.yd)) return (this.gd.count.value += 1), this;
                              var e = je,
                                t = Object,
                                n = t.create,
                                r = Object.getPrototypeOf(this),
                                a = this.gd;
                              return (
                                ((e = e(
                                  n.call(t, r, {
                                    gd: {
                                      value: {
                                        count: a.count,
                                        vd: a.vd,
                                        yd: a.yd,
                                        jd: a.jd,
                                        kd: a.kd,
                                        nd: a.nd,
                                        pd: a.pd,
                                      },
                                    },
                                  })
                                )).gd.count.value += 1),
                                (e.gd.vd = !1),
                                e
                              );
                            }),
                            (Ne.prototype.delete = function () {
                              this.gd.jd || Ce(this),
                                this.gd.vd && !this.gd.yd && Ee("Object already scheduled for deletion"),
                                Oe(this),
                                _e(this.gd),
                                this.gd.yd || ((this.gd.nd = void 0), (this.gd.jd = void 0));
                            }),
                            (Ne.prototype.isDeleted = function () {
                              return !this.gd.jd;
                            }),
                            (Ne.prototype.deleteLater = function () {
                              return (
                                this.gd.jd || Ce(this),
                                this.gd.vd && !this.gd.yd && Ee("Object already scheduled for deletion"),
                                Re.push(this),
                                1 === Re.length && Te && Te(Ae),
                                (this.gd.vd = !0),
                                this
                              );
                            }),
                            ($e.prototype.le = function (e) {
                              return this.Zd && (e = this.Zd(e)), e;
                            }),
                            ($e.prototype.Ud = function (e) {
                              this.rd && this.rd(e);
                            }),
                            ($e.prototype.argPackAdvance = 8),
                            ($e.prototype.readValueFromPointer = se),
                            ($e.prototype.deleteObject = function (e) {
                              null !== e && e.delete();
                            }),
                            ($e.prototype.fromWireType = function (e) {
                              function t() {
                                return this.Ed
                                  ? He(this.hd.sd, { kd: this.se, jd: n, pd: this, nd: e })
                                  : He(this.hd.sd, { kd: this, jd: e });
                              }
                              var n = this.le(e);
                              if (!n) return this.Ud(e), null;
                              var r = (function (e, t) {
                                for (void 0 === t && Ee("ptr should not be undefined"); e.qd; )
                                  (t = e.Bd(t)), (e = e.qd);
                                return Ve[t];
                              })(this.hd, n);
                              if (void 0 !== r)
                                return 0 === r.gd.count.value
                                  ? ((r.gd.jd = n), (r.gd.nd = e), r.clone())
                                  : ((r = r.clone()), this.Ud(e), r);
                              if (((r = this.hd.ke(n)), !(r = Me[r]))) return t.call(this);
                              r = this.Dd ? r.ee : r.pointerType;
                              var a = Ue(n, this.hd, r.hd);
                              return null === a
                                ? t.call(this)
                                : this.Ed
                                ? He(r.hd.sd, { kd: r, jd: a, pd: this, nd: e })
                                : He(r.hd.sd, { kd: r, jd: a });
                            }),
                            (r.getInheritedInstanceCount = function () {
                              return Object.keys(Ve).length;
                            }),
                            (r.getLiveInheritedInstances = function () {
                              var e,
                                t = [];
                              for (e in Ve) Ve.hasOwnProperty(e) && t.push(Ve[e]);
                              return t;
                            }),
                            (r.flushPendingDeletes = Ae),
                            (r.setDelayFunction = function (e) {
                              (Te = e), Re.length && Te && Te(Ae);
                            }),
                            (Ye = r.UnboundTypeError = me("UnboundTypeError")),
                            (r.count_emval_handles = function () {
                              for (var e = 0, t = 5; t < nt.length; ++t) void 0 !== nt[t] && ++e;
                              return e;
                            }),
                            (r.get_first_emval = function () {
                              for (var e = 5; e < nt.length; ++e) if (void 0 !== nt[e]) return nt[e];
                              return null;
                            });
                          for (var nn, rn = 0; 32 > rn; ++rn) Mt.push(Array(rn));
                          var an = new Float32Array(288);
                          for (rn = 0; 288 > rn; ++rn) Ut[rn] = an.subarray(0, rn + 1);
                          var on = new Int32Array(288);
                          for (rn = 0; 288 > rn; ++rn) Vt[rn] = on.subarray(0, rn + 1);
                          var un = {
                            bb: function (e) {
                              var t = ue[e];
                              delete ue[e];
                              var n = t.Pd,
                                r = t.rd,
                                a = t.Xd;
                              ye(
                                [e],
                                a
                                  .map(function (e) {
                                    return e.oe;
                                  })
                                  .concat(
                                    a.map(function (e) {
                                      return e.we;
                                    })
                                  ),
                                function (e) {
                                  var i = {};
                                  return (
                                    a.forEach(function (t, n) {
                                      var r = e[n],
                                        o = t.me,
                                        u = t.ne,
                                        l = e[n + a.length],
                                        s = t.ve,
                                        c = t.xe;
                                      i[t.je] = {
                                        read: function (e) {
                                          return r.fromWireType(o(u, e));
                                        },
                                        write: function (e, t) {
                                          var n = [];
                                          s(c, e, l.toWireType(n, t)), le(n);
                                        },
                                      };
                                    }),
                                    [
                                      {
                                        name: t.name,
                                        fromWireType: function (e) {
                                          var t,
                                            n = {};
                                          for (t in i) n[t] = i[t].read(e);
                                          return r(e), n;
                                        },
                                        toWireType: function (e, t) {
                                          for (var a in i)
                                            if (!(a in t)) throw new TypeError('Missing field:  "' + a + '"');
                                          var o = n();
                                          for (a in i) i[a].write(o, t[a]);
                                          return null !== e && e.push(r, o), o;
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: se,
                                        od: r,
                                      },
                                    ]
                                  );
                                }
                              );
                            },
                            fb: function () {},
                            vb: function (e, t, n, r, a) {
                              var i = be(n);
                              Se(e, {
                                name: (t = xe(t)),
                                fromWireType: function (e) {
                                  return !!e;
                                },
                                toWireType: function (e, t) {
                                  return t ? r : a;
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: function (e) {
                                  if (1 === n) var r = T;
                                  else if (2 === n) r = A;
                                  else {
                                    if (4 !== n) throw new TypeError("Unknown boolean type size: " + t);
                                    r = M;
                                  }
                                  return this.fromWireType(r[e >> i]);
                                },
                                od: null,
                              });
                            },
                            h: function (e, t, n, r, a, i, o, u, l, s, c, f, d) {
                              (c = xe(c)), (i = Ke(a, i)), u && (u = Ke(o, u)), s && (s = Ke(l, s)), (d = Ke(f, d));
                              var p = pe(c);
                              Ie(p, function () {
                                Qe("Cannot construct " + c + " due to unbound types", [r]);
                              }),
                                ye([e, t, n], r ? [r] : [], function (t) {
                                  if (((t = t[0]), r))
                                    var n = t.hd,
                                      a = n.sd;
                                  else a = Ne.prototype;
                                  t = he(p, function () {
                                    if (Object.getPrototypeOf(this) !== o) throw new ke("Use 'new' to construct " + c);
                                    if (void 0 === l.td) throw new ke(c + " has no accessible constructor");
                                    var e = l.td[arguments.length];
                                    if (void 0 === e)
                                      throw new ke(
                                        "Tried to invoke ctor of " +
                                          c +
                                          " with invalid number of parameters (" +
                                          arguments.length +
                                          ") - expected (" +
                                          Object.keys(l.td).toString() +
                                          ") parameters instead!"
                                      );
                                    return e.apply(this, arguments);
                                  });
                                  var o = Object.create(a, { constructor: { value: t } });
                                  t.prototype = o;
                                  var l = new ze(c, t, o, d, n, i, u, s);
                                  (n = new $e(c, l, !0, !1)), (a = new $e(c + "*", l, !1, !1));
                                  var f = new $e(c + " const*", l, !1, !0);
                                  return (Me[e] = { pointerType: a, ee: f }), qe(p, t), [n, a, f];
                                });
                            },
                            k: function (e, t, n, r, a, i, o, u) {
                              (t = xe(t)),
                                (i = Ke(a, i)),
                                ye([], [e], function (e) {
                                  var a = (e = e[0]).name + "." + t,
                                    l = {
                                      get: function () {
                                        Qe("Cannot access " + a + " due to unbound types", [n]);
                                      },
                                      enumerable: !0,
                                      configurable: !0,
                                    };
                                  return (
                                    (l.set = u
                                      ? function () {
                                          Qe("Cannot access " + a + " due to unbound types", [n]);
                                        }
                                      : function () {
                                          Ee(a + " is a read-only property");
                                        }),
                                    Object.defineProperty(e.hd.constructor, t, l),
                                    ye([], [n], function (n) {
                                      n = n[0];
                                      var a = {
                                        get: function () {
                                          return n.fromWireType(i(r));
                                        },
                                        enumerable: !0,
                                      };
                                      return (
                                        u &&
                                          ((u = Ke(o, u)),
                                          (a.set = function (e) {
                                            var t = [];
                                            u(r, n.toWireType(t, e)), le(t);
                                          })),
                                        Object.defineProperty(e.hd.constructor, t, a),
                                        []
                                      );
                                    }),
                                    []
                                  );
                                });
                            },
                            v: function (e, t, n, r, a, i) {
                              0 < t || te("Assertion failed: undefined");
                              var o = Je(t, n);
                              (a = Ke(r, a)),
                                ye([], [e], function (e) {
                                  var n = "constructor " + (e = e[0]).name;
                                  if ((void 0 === e.hd.td && (e.hd.td = []), void 0 !== e.hd.td[t - 1]))
                                    throw new ke(
                                      "Cannot register multiple constructors with identical number of parameters (" +
                                        (t - 1) +
                                        ") for class '" +
                                        e.name +
                                        "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
                                    );
                                  return (
                                    (e.hd.td[t - 1] = function () {
                                      Qe("Cannot construct " + e.name + " due to unbound types", o);
                                    }),
                                    ye([], o, function (r) {
                                      return r.splice(1, 0, null), (e.hd.td[t - 1] = et(n, r, null, a, i)), [];
                                    }),
                                    []
                                  );
                                });
                            },
                            e: function (e, t, n, r, a, i, o, u) {
                              var l = Je(n, r);
                              (t = xe(t)),
                                (i = Ke(a, i)),
                                ye([], [e], function (e) {
                                  function r() {
                                    Qe("Cannot call " + a + " due to unbound types", l);
                                  }
                                  var a = (e = e[0]).name + "." + t;
                                  t.startsWith("@@") && (t = Symbol[t.substring(2)]), u && e.hd.te.push(t);
                                  var s = e.hd.sd,
                                    c = s[t];
                                  return (
                                    void 0 === c || (void 0 === c.ld && c.className !== e.name && c.Cd === n - 2)
                                      ? ((r.Cd = n - 2), (r.className = e.name), (s[t] = r))
                                      : (Le(s, t, a), (s[t].ld[n - 2] = r)),
                                    ye([], l, function (r) {
                                      return (
                                        (r = et(a, r, e, i, o)),
                                        void 0 === s[t].ld ? ((r.Cd = n - 2), (s[t] = r)) : (s[t].ld[n - 2] = r),
                                        []
                                      );
                                    }),
                                    []
                                  );
                                });
                            },
                            f: function (e, t, n, r, a, i, o, u, l, s) {
                              (t = xe(t)),
                                (a = Ke(r, a)),
                                ye([], [e], function (e) {
                                  var r = (e = e[0]).name + "." + t,
                                    c = {
                                      get: function () {
                                        Qe("Cannot access " + r + " due to unbound types", [n, o]);
                                      },
                                      enumerable: !0,
                                      configurable: !0,
                                    };
                                  return (
                                    (c.set = l
                                      ? function () {
                                          Qe("Cannot access " + r + " due to unbound types", [n, o]);
                                        }
                                      : function () {
                                          Ee(r + " is a read-only property");
                                        }),
                                    Object.defineProperty(e.hd.sd, t, c),
                                    ye([], l ? [n, o] : [n], function (n) {
                                      var o = n[0],
                                        c = {
                                          get: function () {
                                            var t = Xe(this, e, r + " getter");
                                            return o.fromWireType(a(i, t));
                                          },
                                          enumerable: !0,
                                        };
                                      if (l) {
                                        l = Ke(u, l);
                                        var f = n[1];
                                        c.set = function (t) {
                                          var n = Xe(this, e, r + " setter"),
                                            a = [];
                                          l(s, n, f.toWireType(a, t)), le(a);
                                        };
                                      }
                                      return Object.defineProperty(e.hd.sd, t, c), [];
                                    }),
                                    []
                                  );
                                });
                            },
                            ub: function (e, t) {
                              Se(e, {
                                name: (t = xe(t)),
                                fromWireType: function (e) {
                                  var t = at(e);
                                  return rt(e), t;
                                },
                                toWireType: function (e, t) {
                                  return it(t);
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: se,
                                od: null,
                              });
                            },
                            mb: function (e, t, n, r) {
                              function a() {}
                              (n = be(n)),
                                (t = xe(t)),
                                (a.values = {}),
                                Se(e, {
                                  name: t,
                                  constructor: a,
                                  fromWireType: function (e) {
                                    return this.constructor.values[e];
                                  },
                                  toWireType: function (e, t) {
                                    return t.value;
                                  },
                                  argPackAdvance: 8,
                                  readValueFromPointer: ot(t, n, r),
                                  od: null,
                                }),
                                Ie(t, a);
                            },
                            jb: function (e, t, n) {
                              var r = ut(e, "enum");
                              (t = xe(t)),
                                (e = r.constructor),
                                (r = Object.create(r.constructor.prototype, {
                                  value: { value: n },
                                  constructor: { value: he(r.name + "_" + t, function () {}) },
                                })),
                                (e.values[n] = r),
                                (e[t] = r);
                            },
                            x: function (e, t, n) {
                              (n = be(n)),
                                Se(e, {
                                  name: (t = xe(t)),
                                  fromWireType: function (e) {
                                    return e;
                                  },
                                  toWireType: function (e, t) {
                                    return t;
                                  },
                                  argPackAdvance: 8,
                                  readValueFromPointer: st(t, n),
                                  od: null,
                                });
                            },
                            z: function (e, t, n, r, a, i) {
                              var o = Je(t, n);
                              (e = xe(e)),
                                (a = Ke(r, a)),
                                Ie(
                                  e,
                                  function () {
                                    Qe("Cannot call " + e + " due to unbound types", o);
                                  },
                                  t - 1
                                ),
                                ye([], o, function (n) {
                                  return (n = [n[0], null].concat(n.slice(1))), qe(e, et(e, n, null, a, i), t - 1), [];
                                });
                            },
                            m: function (e, t, n, r, a) {
                              function i(e) {
                                return e;
                              }
                              (t = xe(t)), -1 === a && (a = 4294967295);
                              var o = be(n);
                              if (0 === r) {
                                var u = 32 - 8 * n;
                                i = function (e) {
                                  return (e << u) >>> u;
                                };
                              }
                              var l = t.includes("unsigned");
                              Se(e, {
                                name: t,
                                fromWireType: i,
                                toWireType: function (e, n) {
                                  if ("number" !== typeof n && "boolean" !== typeof n)
                                    throw new TypeError('Cannot convert "' + lt(n) + '" to ' + this.name);
                                  if (n < r || n > a)
                                    throw new TypeError(
                                      'Passing a number "' +
                                        lt(n) +
                                        '" from JS side to C/C++ side to an argument of type "' +
                                        t +
                                        '", which is outside the valid range [' +
                                        r +
                                        ", " +
                                        a +
                                        "]!"
                                    );
                                  return l ? n >>> 0 : 0 | n;
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: ct(t, o, 0 !== r),
                                od: null,
                              });
                            },
                            l: function (e, t, n) {
                              function r(e) {
                                var t = L;
                                return new a(j, t[1 + (e >>= 2)], t[e]);
                              }
                              var a = [
                                Int8Array,
                                Uint8Array,
                                Int16Array,
                                Uint16Array,
                                Int32Array,
                                Uint32Array,
                                Float32Array,
                                Float64Array,
                              ][t];
                              Se(
                                e,
                                { name: (n = xe(n)), fromWireType: r, argPackAdvance: 8, readValueFromPointer: r },
                                { pe: !0 }
                              );
                            },
                            y: function (e, t) {
                              var n = "std::string" === (t = xe(t));
                              Se(e, {
                                name: t,
                                fromWireType: function (e) {
                                  var t = L[e >> 2];
                                  if (n)
                                    for (var r = e + 4, a = 0; a <= t; ++a) {
                                      var i = e + 4 + a;
                                      if (a == t || 0 == R[i]) {
                                        if (((r = P(r, i - r)), void 0 === o)) var o = r;
                                        else (o += String.fromCharCode(0)), (o += r);
                                        r = i + 1;
                                      }
                                    }
                                  else {
                                    for (o = Array(t), a = 0; a < t; ++a) o[a] = String.fromCharCode(R[e + 4 + a]);
                                    o = o.join("");
                                  }
                                  return sn(e), o;
                                },
                                toWireType: function (e, t) {
                                  t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                  var r = "string" === typeof t;
                                  r ||
                                    t instanceof Uint8Array ||
                                    t instanceof Uint8ClampedArray ||
                                    t instanceof Int8Array ||
                                    Ee("Cannot pass non-string to std::string");
                                  var a = (
                                      n && r
                                        ? function () {
                                            return _(t);
                                          }
                                        : function () {
                                            return t.length;
                                          }
                                    )(),
                                    i = ln(4 + a + 1);
                                  if (((L[i >> 2] = a), n && r)) O(t, R, i + 4, a + 1);
                                  else if (r)
                                    for (r = 0; r < a; ++r) {
                                      var o = t.charCodeAt(r);
                                      255 < o && (sn(i), Ee("String has UTF-16 code units that do not fit in 8 bits")),
                                        (R[i + 4 + r] = o);
                                    }
                                  else for (r = 0; r < a; ++r) R[i + 4 + r] = t[r];
                                  return null !== e && e.push(sn, i), i;
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: se,
                                od: function (e) {
                                  sn(e);
                                },
                              });
                            },
                            u: function (e, t, n) {
                              if (((n = xe(n)), 2 === t))
                                var r = D,
                                  a = B,
                                  i = W,
                                  o = function () {
                                    return N;
                                  },
                                  u = 1;
                              else
                                4 === t &&
                                  ((r = U),
                                  (a = V),
                                  (i = H),
                                  (o = function () {
                                    return L;
                                  }),
                                  (u = 2));
                              Se(e, {
                                name: n,
                                fromWireType: function (e) {
                                  for (var n, a = L[e >> 2], i = o(), l = e + 4, s = 0; s <= a; ++s) {
                                    var c = e + 4 + s * t;
                                    (s != a && 0 != i[c >> u]) ||
                                      ((l = r(l, c - l)),
                                      void 0 === n ? (n = l) : ((n += String.fromCharCode(0)), (n += l)),
                                      (l = c + t));
                                  }
                                  return sn(e), n;
                                },
                                toWireType: function (e, r) {
                                  "string" !== typeof r && Ee("Cannot pass non-string to C++ string type " + n);
                                  var o = i(r),
                                    l = ln(4 + o + t);
                                  return (L[l >> 2] = o >> u), a(r, l + 4, o + t), null !== e && e.push(sn, l), l;
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: se,
                                od: function (e) {
                                  sn(e);
                                },
                              });
                            },
                            cb: function (e, t, n, r, a, i) {
                              ue[e] = { name: xe(t), Pd: Ke(n, r), rd: Ke(a, i), Xd: [] };
                            },
                            ab: function (e, t, n, r, a, i, o, u, l, s) {
                              ue[e].Xd.push({ je: xe(t), oe: n, me: Ke(r, a), ne: i, we: o, ve: Ke(u, l), xe: s });
                            },
                            wb: function (e, t) {
                              Se(e, {
                                re: !0,
                                name: (t = xe(t)),
                                argPackAdvance: 0,
                                fromWireType: function () {},
                                toWireType: function () {},
                              });
                            },
                            nb: function () {
                              throw "longjmp";
                            },
                            pa: function (e, t, n) {
                              (e = at(e)), (t = ut(t, "emval::as"));
                              var r = [],
                                a = it(r);
                              return (M[n >> 2] = a), t.toWireType(r, e);
                            },
                            K: function (e, t, n, r) {
                              (e = ht[e])((t = at(t)), (n = dt(n)), null, r);
                            },
                            Gc: rt,
                            Fc: function (e, t) {
                              var n = (function (e, t) {
                                  for (var n = Array(e), r = 0; r < e; ++r)
                                    n[r] = ut(M[(t >> 2) + r], "parameter " + r);
                                  return n;
                                })(e, t),
                                r = n[0];
                              t =
                                r.name +
                                "_$" +
                                n
                                  .slice(1)
                                  .map(function (e) {
                                    return e.name;
                                  })
                                  .join("_") +
                                "$";
                              var a = mt[t];
                              if (void 0 !== a) return a;
                              a = ["retType"];
                              for (var i = [r], o = "", u = 0; u < e - 1; ++u)
                                (o += (0 !== u ? ", " : "") + "arg" + u), a.push("argType" + u), i.push(n[1 + u]);
                              var l =
                                  "return function " +
                                  pe("methodCaller_" + t) +
                                  "(handle, name, destructors, args) {\n",
                                s = 0;
                              for (u = 0; u < e - 1; ++u)
                                (l +=
                                  "    var arg" +
                                  u +
                                  " = argType" +
                                  u +
                                  ".readValueFromPointer(args" +
                                  (s ? "+" + s : "") +
                                  ");\n"),
                                  (s += n[u + 1].argPackAdvance);
                              for (l += "    var rv = handle[name](" + o + ");\n", u = 0; u < e - 1; ++u)
                                n[u + 1].deleteObject && (l += "    argType" + u + ".deleteObject(arg" + u + ");\n");
                              return (
                                r.re || (l += "    return retType.toWireType(destructors, rv);\n"),
                                a.push(l + "};\n"),
                                (a = (function (e) {
                                  var t = ht.length;
                                  return ht.push(e), t;
                                })((e = Ze(a).apply(null, i)))),
                                (mt[t] = a)
                              );
                            },
                            La: function (e, t) {
                              return it((e = at(e))[(t = at(t))]);
                            },
                            uc: function (e) {
                              4 < e && (nt[e].Qd += 1);
                            },
                            Aa: function (e) {
                              return it(dt(e));
                            },
                            ea: function (e) {
                              le(at(e)), rt(e);
                            },
                            V: function (e, t) {
                              return it((e = (e = ut(e, "_emval_take_value")).readValueFromPointer(t)));
                            },
                            a: function () {
                              te("");
                            },
                            ob: function (e, t) {
                              if (0 === e) e = Date.now();
                              else {
                                if (1 !== e && 4 !== e) return (M[cn() >> 2] = 28), -1;
                                e = pt();
                              }
                              return (M[t >> 2] = (e / 1e3) | 0), (M[(t + 4) >> 2] = ((e % 1e3) * 1e6) | 0), 0;
                            },
                            Xa: function (e) {
                              nn.activeTexture(e);
                            },
                            Wa: function (e, t) {
                              nn.attachShader(yt[e], kt[t]);
                            },
                            Va: function (e, t, n) {
                              nn.bindAttribLocation(yt[e], t, P(n));
                            },
                            Ua: function (e, t) {
                              35051 == e ? (nn.Nd = t) : 35052 == e && (nn.ud = t), nn.bindBuffer(e, gt[t]);
                            },
                            Wb: function (e, t) {
                              nn.bindFramebuffer(e, bt[t]);
                            },
                            Vb: function (e, t) {
                              nn.bindRenderbuffer(e, wt[t]);
                            },
                            Eb: function (e, t) {
                              nn.bindSampler(e, Ct[t]);
                            },
                            Ta: function (e, t) {
                              nn.bindTexture(e, xt[t]);
                            },
                            mc: function (e) {
                              nn.bindVertexArray(Et[e]);
                            },
                            jc: function (e) {
                              nn.bindVertexArray(Et[e]);
                            },
                            Sa: function (e, t, n, r) {
                              nn.blendColor(e, t, n, r);
                            },
                            Ra: function (e) {
                              nn.blendEquation(e);
                            },
                            Qa: function (e, t) {
                              nn.blendFunc(e, t);
                            },
                            Jb: function (e, t, n, r, a, i, o, u, l, s) {
                              nn.blitFramebuffer(e, t, n, r, a, i, o, u, l, s);
                            },
                            Pa: function (e, t, n, r) {
                              2 <= Nt.version
                                ? n
                                  ? nn.bufferData(e, R, r, n, t)
                                  : nn.bufferData(e, t, r)
                                : nn.bufferData(e, n ? R.subarray(n, n + t) : t, r);
                            },
                            Oa: function (e, t, n, r) {
                              2 <= Nt.version
                                ? nn.bufferSubData(e, t, R, r, n)
                                : nn.bufferSubData(e, t, R.subarray(r, r + n));
                            },
                            Ub: function (e) {
                              return nn.checkFramebufferStatus(e);
                            },
                            Na: function (e) {
                              nn.clear(e);
                            },
                            Ma: function (e, t, n, r) {
                              nn.clearColor(e, t, n, r);
                            },
                            Ka: function (e) {
                              nn.clearStencil(e);
                            },
                            _a: function (e, t, n, r) {
                              return nn.clientWaitSync(Pt[e], t, (n >>> 0) + 4294967296 * r);
                            },
                            Ja: function (e, t, n, r) {
                              nn.colorMask(!!e, !!t, !!n, !!r);
                            },
                            Ia: function (e) {
                              nn.compileShader(kt[e]);
                            },
                            Ha: function (e, t, n, r, a, i, o, u) {
                              2 <= Nt.version
                                ? nn.ud
                                  ? nn.compressedTexImage2D(e, t, n, r, a, i, o, u)
                                  : nn.compressedTexImage2D(e, t, n, r, a, i, R, u, o)
                                : nn.compressedTexImage2D(e, t, n, r, a, i, u ? R.subarray(u, u + o) : null);
                            },
                            Ga: function (e, t, n, r, a, i, o, u, l) {
                              2 <= Nt.version
                                ? nn.ud
                                  ? nn.compressedTexSubImage2D(e, t, n, r, a, i, o, u, l)
                                  : nn.compressedTexSubImage2D(e, t, n, r, a, i, o, R, l, u)
                                : nn.compressedTexSubImage2D(e, t, n, r, a, i, o, l ? R.subarray(l, l + u) : null);
                            },
                            Fa: function (e, t, n, r, a, i, o, u) {
                              nn.copyTexSubImage2D(e, t, n, r, a, i, o, u);
                            },
                            Ea: function () {
                              var e = Rt(yt),
                                t = nn.createProgram();
                              return (t.name = e), (t.Hd = t.Fd = t.Gd = 0), (t.Rd = 1), (yt[e] = t), e;
                            },
                            Da: function (e) {
                              var t = Rt(kt);
                              return (kt[t] = nn.createShader(e)), t;
                            },
                            Ca: function (e) {
                              nn.cullFace(e);
                            },
                            Ba: function (e, t) {
                              for (var n = 0; n < e; n++) {
                                var r = M[(t + 4 * n) >> 2],
                                  a = gt[r];
                                a &&
                                  (nn.deleteBuffer(a),
                                  (a.name = 0),
                                  (gt[r] = null),
                                  r == nn.Nd && (nn.Nd = 0),
                                  r == nn.ud && (nn.ud = 0));
                              }
                            },
                            Tb: function (e, t) {
                              for (var n = 0; n < e; ++n) {
                                var r = M[(t + 4 * n) >> 2],
                                  a = bt[r];
                                a && (nn.deleteFramebuffer(a), (a.name = 0), (bt[r] = null));
                              }
                            },
                            za: function (e) {
                              if (e) {
                                var t = yt[e];
                                t ? (nn.deleteProgram(t), (t.name = 0), (yt[e] = null)) : Tt(1281);
                              }
                            },
                            Sb: function (e, t) {
                              for (var n = 0; n < e; n++) {
                                var r = M[(t + 4 * n) >> 2],
                                  a = wt[r];
                                a && (nn.deleteRenderbuffer(a), (a.name = 0), (wt[r] = null));
                              }
                            },
                            Db: function (e, t) {
                              for (var n = 0; n < e; n++) {
                                var r = M[(t + 4 * n) >> 2],
                                  a = Ct[r];
                                a && (nn.deleteSampler(a), (a.name = 0), (Ct[r] = null));
                              }
                            },
                            ya: function (e) {
                              if (e) {
                                var t = kt[e];
                                t ? (nn.deleteShader(t), (kt[e] = null)) : Tt(1281);
                              }
                            },
                            Hb: function (e) {
                              if (e) {
                                var t = Pt[e];
                                t ? (nn.deleteSync(t), (t.name = 0), (Pt[e] = null)) : Tt(1281);
                              }
                            },
                            xa: function (e, t) {
                              for (var n = 0; n < e; n++) {
                                var r = M[(t + 4 * n) >> 2],
                                  a = xt[r];
                                a && (nn.deleteTexture(a), (a.name = 0), (xt[r] = null));
                              }
                            },
                            lc: function (e, t) {
                              for (var n = 0; n < e; n++) {
                                var r = M[(t + 4 * n) >> 2];
                                nn.deleteVertexArray(Et[r]), (Et[r] = null);
                              }
                            },
                            ic: function (e, t) {
                              for (var n = 0; n < e; n++) {
                                var r = M[(t + 4 * n) >> 2];
                                nn.deleteVertexArray(Et[r]), (Et[r] = null);
                              }
                            },
                            wa: function (e) {
                              nn.depthMask(!!e);
                            },
                            va: function (e) {
                              nn.disable(e);
                            },
                            ua: function (e) {
                              nn.disableVertexAttribArray(e);
                            },
                            ta: function (e, t, n) {
                              nn.drawArrays(e, t, n);
                            },
                            gc: function (e, t, n, r) {
                              nn.drawArraysInstanced(e, t, n, r);
                            },
                            ec: function (e, t, n, r, a) {
                              nn.Vd.drawArraysInstancedBaseInstanceWEBGL(e, t, n, r, a);
                            },
                            cc: function (e, t) {
                              for (var n = Mt[e], r = 0; r < e; r++) n[r] = M[(t + 4 * r) >> 2];
                              nn.drawBuffers(n);
                            },
                            sa: function (e, t, n, r) {
                              nn.drawElements(e, t, n, r);
                            },
                            fc: function (e, t, n, r, a) {
                              nn.drawElementsInstanced(e, t, n, r, a);
                            },
                            dc: function (e, t, n, r, a, i, o) {
                              nn.Vd.drawElementsInstancedBaseVertexBaseInstanceWEBGL(e, t, n, r, a, i, o);
                            },
                            _b: function (e, t, n, r, a, i) {
                              nn.drawElements(e, r, a, i);
                            },
                            ra: function (e) {
                              nn.enable(e);
                            },
                            qa: function (e) {
                              nn.enableVertexAttribArray(e);
                            },
                            Gb: function (e, t) {
                              return (e = nn.fenceSync(e, t)) ? ((t = Rt(Pt)), (e.name = t), (Pt[t] = e), t) : 0;
                            },
                            oa: function () {
                              nn.finish();
                            },
                            na: function () {
                              nn.flush();
                            },
                            Rb: function (e, t, n, r) {
                              nn.framebufferRenderbuffer(e, t, n, wt[r]);
                            },
                            Qb: function (e, t, n, r, a) {
                              nn.framebufferTexture2D(e, t, n, xt[r], a);
                            },
                            ma: function (e) {
                              nn.frontFace(e);
                            },
                            la: function (e, t) {
                              Lt(e, t, "createBuffer", gt);
                            },
                            Pb: function (e, t) {
                              Lt(e, t, "createFramebuffer", bt);
                            },
                            Ob: function (e, t) {
                              Lt(e, t, "createRenderbuffer", wt);
                            },
                            Cb: function (e, t) {
                              Lt(e, t, "createSampler", Ct);
                            },
                            ka: function (e, t) {
                              Lt(e, t, "createTexture", xt);
                            },
                            kc: function (e, t) {
                              Lt(e, t, "createVertexArray", Et);
                            },
                            hc: function (e, t) {
                              Lt(e, t, "createVertexArray", Et);
                            },
                            Nb: function (e) {
                              nn.generateMipmap(e);
                            },
                            ja: function (e, t, n) {
                              n ? (M[n >> 2] = nn.getBufferParameter(e, t)) : Tt(1281);
                            },
                            ia: function () {
                              var e = nn.getError() || At;
                              return (At = 0), e;
                            },
                            Mb: function (e, t, n, r) {
                              ((e = nn.getFramebufferAttachmentParameter(e, t, n)) instanceof WebGLRenderbuffer ||
                                e instanceof WebGLTexture) &&
                                (e = 0 | e.name),
                                (M[r >> 2] = e);
                            },
                            Ya: function (e, t) {
                              It(e, t);
                            },
                            ha: function (e, t, n, r) {
                              null === (e = nn.getProgramInfoLog(yt[e])) && (e = "(unknown error)"),
                                (t = 0 < t && r ? O(e, R, r, t) : 0),
                                n && (M[n >> 2] = t);
                            },
                            ga: function (e, t, n) {
                              if (n)
                                if (e >= vt) Tt(1281);
                                else if (((e = yt[e]), 35716 == t))
                                  null === (e = nn.getProgramInfoLog(e)) && (e = "(unknown error)"),
                                    (M[n >> 2] = e.length + 1);
                                else if (35719 == t) {
                                  if (!e.Hd)
                                    for (t = 0; t < nn.getProgramParameter(e, 35718); ++t)
                                      e.Hd = Math.max(e.Hd, nn.getActiveUniform(e, t).name.length + 1);
                                  M[n >> 2] = e.Hd;
                                } else if (35722 == t) {
                                  if (!e.Fd)
                                    for (t = 0; t < nn.getProgramParameter(e, 35721); ++t)
                                      e.Fd = Math.max(e.Fd, nn.getActiveAttrib(e, t).name.length + 1);
                                  M[n >> 2] = e.Fd;
                                } else if (35381 == t) {
                                  if (!e.Gd)
                                    for (t = 0; t < nn.getProgramParameter(e, 35382); ++t)
                                      e.Gd = Math.max(e.Gd, nn.getActiveUniformBlockName(e, t).length + 1);
                                  M[n >> 2] = e.Gd;
                                } else M[n >> 2] = nn.getProgramParameter(e, t);
                              else Tt(1281);
                            },
                            Lb: function (e, t, n) {
                              n ? (M[n >> 2] = nn.getRenderbufferParameter(e, t)) : Tt(1281);
                            },
                            fa: function (e, t, n, r) {
                              null === (e = nn.getShaderInfoLog(kt[e])) && (e = "(unknown error)"),
                                (t = 0 < t && r ? O(e, R, r, t) : 0),
                                n && (M[n >> 2] = t);
                            },
                            xb: function (e, t, n, r) {
                              (e = nn.getShaderPrecisionFormat(e, t)),
                                (M[n >> 2] = e.rangeMin),
                                (M[(n + 4) >> 2] = e.rangeMax),
                                (M[r >> 2] = e.precision);
                            },
                            da: function (e, t, n) {
                              n
                                ? 35716 == t
                                  ? (null === (e = nn.getShaderInfoLog(kt[e])) && (e = "(unknown error)"),
                                    (M[n >> 2] = e ? e.length + 1 : 0))
                                  : 35720 == t
                                  ? ((e = nn.getShaderSource(kt[e])), (M[n >> 2] = e ? e.length + 1 : 0))
                                  : (M[n >> 2] = nn.getShaderParameter(kt[e], t))
                                : Tt(1281);
                            },
                            s: function (e) {
                              var t = Ot[e];
                              if (!t) {
                                switch (e) {
                                  case 7939:
                                    t = zt(
                                      (t = (t = nn.getSupportedExtensions() || []).concat(
                                        t.map(function (e) {
                                          return "GL_" + e;
                                        })
                                      )).join(" ")
                                    );
                                    break;
                                  case 7936:
                                  case 7937:
                                  case 37445:
                                  case 37446:
                                    (t = nn.getParameter(e)) || Tt(1280), (t = t && zt(t));
                                    break;
                                  case 7938:
                                    (t = nn.getParameter(7938)),
                                      (t = zt(
                                        (t =
                                          2 <= Nt.version ? "OpenGL ES 3.0 (" + t + ")" : "OpenGL ES 2.0 (" + t + ")")
                                      ));
                                    break;
                                  case 35724:
                                    var n = (t = nn.getParameter(35724)).match(
                                      /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/
                                    );
                                    null !== n &&
                                      (3 == n[1].length && (n[1] += "0"),
                                      (t = "OpenGL ES GLSL ES " + n[1] + " (" + t + ")")),
                                      (t = zt(t));
                                    break;
                                  default:
                                    Tt(1280);
                                }
                                Ot[e] = t;
                              }
                              return t;
                            },
                            Za: function (e, t) {
                              if (2 > Nt.version) return Tt(1282), 0;
                              var n = _t[e];
                              return n
                                ? 0 > t || t >= n.length
                                  ? (Tt(1281), 0)
                                  : n[t]
                                : 7939 === e
                                ? ((n = (n = (n = nn.getSupportedExtensions() || []).concat(
                                    n.map(function (e) {
                                      return "GL_" + e;
                                    })
                                  )).map(function (e) {
                                    return zt(e);
                                  })),
                                  (n = _t[e] = n),
                                  0 > t || t >= n.length ? (Tt(1281), 0) : n[t])
                                : (Tt(1280), 0);
                            },
                            ca: function (e, t) {
                              if (((t = P(t)), (e = yt[e]))) {
                                var n,
                                  r = e,
                                  a = r.Ad,
                                  i = r.ae;
                                if (!a)
                                  for (r.Ad = a = {}, r.$d = {}, n = 0; n < nn.getProgramParameter(r, 35718); ++n) {
                                    var o = nn.getActiveUniform(r, n),
                                      u = o.name;
                                    o = o.size;
                                    var l = Ft(u);
                                    l = 0 < l ? u.slice(0, l) : u;
                                    var s = r.Rd;
                                    for (r.Rd += o, i[l] = [o, s], u = 0; u < o; ++u) (a[s] = u), (r.$d[s++] = l);
                                  }
                                if (
                                  ((r = e.Ad),
                                  (a = 0),
                                  (i = t),
                                  0 < (n = Ft(t)) && ((a = parseInt(t.slice(n + 1)) >>> 0), (i = t.slice(0, n))),
                                  (i = e.ae[i]) && a < i[0] && (r[(a += i[1])] = r[a] || nn.getUniformLocation(e, t)))
                                )
                                  return a;
                              } else Tt(1281);
                              return -1;
                            },
                            zb: function (e, t, n) {
                              for (var r = Mt[t], a = 0; a < t; a++) r[a] = M[(n + 4 * a) >> 2];
                              nn.invalidateFramebuffer(e, r);
                            },
                            yb: function (e, t, n, r, a, i, o) {
                              for (var u = Mt[t], l = 0; l < t; l++) u[l] = M[(n + 4 * l) >> 2];
                              nn.invalidateSubFramebuffer(e, u, r, a, i, o);
                            },
                            Fb: function (e) {
                              return nn.isSync(Pt[e]);
                            },
                            ba: function (e) {
                              return (e = xt[e]) ? nn.isTexture(e) : 0;
                            },
                            aa: function (e) {
                              nn.lineWidth(e);
                            },
                            $: function (e) {
                              (e = yt[e]), nn.linkProgram(e), (e.Ad = 0), (e.ae = {});
                            },
                            ac: function (e, t, n, r, a, i) {
                              nn.Yd.multiDrawArraysInstancedBaseInstanceWEBGL(
                                e,
                                M,
                                t >> 2,
                                M,
                                n >> 2,
                                M,
                                r >> 2,
                                L,
                                a >> 2,
                                i
                              );
                            },
                            $b: function (e, t, n, r, a, i, o, u) {
                              nn.Yd.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(
                                e,
                                M,
                                t >> 2,
                                n,
                                M,
                                r >> 2,
                                M,
                                a >> 2,
                                M,
                                i >> 2,
                                L,
                                o >> 2,
                                u
                              );
                            },
                            _: function (e, t) {
                              3317 == e && (jt = t), nn.pixelStorei(e, t);
                            },
                            bc: function (e) {
                              nn.readBuffer(e);
                            },
                            Z: function (e, t, n, r, a, i, o) {
                              if (2 <= Nt.version)
                                if (nn.Nd) nn.readPixels(e, t, n, r, a, i, o);
                                else {
                                  var u = Dt(i);
                                  nn.readPixels(e, t, n, r, a, i, u, o >> (31 - Math.clz32(u.BYTES_PER_ELEMENT)));
                                }
                              else (o = Bt(i, a, n, r, o)) ? nn.readPixels(e, t, n, r, a, i, o) : Tt(1280);
                            },
                            Kb: function (e, t, n, r) {
                              nn.renderbufferStorage(e, t, n, r);
                            },
                            Ib: function (e, t, n, r, a) {
                              nn.renderbufferStorageMultisample(e, t, n, r, a);
                            },
                            Bb: function (e, t, n) {
                              nn.samplerParameteri(Ct[e], t, n);
                            },
                            Ab: function (e, t, n) {
                              nn.samplerParameteri(Ct[e], t, M[n >> 2]);
                            },
                            Y: function (e, t, n, r) {
                              nn.scissor(e, t, n, r);
                            },
                            X: function (e, t, n, r) {
                              for (var a = "", i = 0; i < t; ++i) {
                                var o = r ? M[(r + 4 * i) >> 2] : -1;
                                a += P(M[(n + 4 * i) >> 2], 0 > o ? void 0 : o);
                              }
                              nn.shaderSource(kt[e], a);
                            },
                            W: function (e, t, n) {
                              nn.stencilFunc(e, t, n);
                            },
                            U: function (e, t, n, r) {
                              nn.stencilFuncSeparate(e, t, n, r);
                            },
                            T: function (e) {
                              nn.stencilMask(e);
                            },
                            S: function (e, t) {
                              nn.stencilMaskSeparate(e, t);
                            },
                            R: function (e, t, n) {
                              nn.stencilOp(e, t, n);
                            },
                            Q: function (e, t, n, r) {
                              nn.stencilOpSeparate(e, t, n, r);
                            },
                            P: function (e, t, n, r, a, i, o, u, l) {
                              if (2 <= Nt.version)
                                if (nn.ud) nn.texImage2D(e, t, n, r, a, i, o, u, l);
                                else if (l) {
                                  var s = Dt(u);
                                  nn.texImage2D(e, t, n, r, a, i, o, u, s, l >> (31 - Math.clz32(s.BYTES_PER_ELEMENT)));
                                } else nn.texImage2D(e, t, n, r, a, i, o, u, null);
                              else nn.texImage2D(e, t, n, r, a, i, o, u, l ? Bt(u, o, r, a, l) : null);
                            },
                            O: function (e, t, n) {
                              nn.texParameterf(e, t, n);
                            },
                            N: function (e, t, n) {
                              nn.texParameterf(e, t, I[n >> 2]);
                            },
                            M: function (e, t, n) {
                              nn.texParameteri(e, t, n);
                            },
                            L: function (e, t, n) {
                              nn.texParameteri(e, t, M[n >> 2]);
                            },
                            Zb: function (e, t, n, r, a) {
                              nn.texStorage2D(e, t, n, r, a);
                            },
                            J: function (e, t, n, r, a, i, o, u, l) {
                              if (2 <= Nt.version)
                                if (nn.ud) nn.texSubImage2D(e, t, n, r, a, i, o, u, l);
                                else if (l) {
                                  var s = Dt(u);
                                  nn.texSubImage2D(
                                    e,
                                    t,
                                    n,
                                    r,
                                    a,
                                    i,
                                    o,
                                    u,
                                    s,
                                    l >> (31 - Math.clz32(s.BYTES_PER_ELEMENT))
                                  );
                                } else nn.texSubImage2D(e, t, n, r, a, i, o, u, null);
                              else
                                (s = null), l && (s = Bt(u, o, a, i, l)), nn.texSubImage2D(e, t, n, r, a, i, o, u, s);
                            },
                            I: function (e, t) {
                              nn.uniform1f(Wt(e), t);
                            },
                            H: function (e, t, n) {
                              if (2 <= Nt.version) nn.uniform1fv(Wt(e), I, n >> 2, t);
                              else {
                                if (288 >= t) for (var r = Ut[t - 1], a = 0; a < t; ++a) r[a] = I[(n + 4 * a) >> 2];
                                else r = I.subarray(n >> 2, (n + 4 * t) >> 2);
                                nn.uniform1fv(Wt(e), r);
                              }
                            },
                            G: function (e, t) {
                              nn.uniform1i(Wt(e), t);
                            },
                            F: function (e, t, n) {
                              if (2 <= Nt.version) nn.uniform1iv(Wt(e), M, n >> 2, t);
                              else {
                                if (288 >= t) for (var r = Vt[t - 1], a = 0; a < t; ++a) r[a] = M[(n + 4 * a) >> 2];
                                else r = M.subarray(n >> 2, (n + 4 * t) >> 2);
                                nn.uniform1iv(Wt(e), r);
                              }
                            },
                            E: function (e, t, n) {
                              nn.uniform2f(Wt(e), t, n);
                            },
                            D: function (e, t, n) {
                              if (2 <= Nt.version) nn.uniform2fv(Wt(e), I, n >> 2, 2 * t);
                              else {
                                if (144 >= t)
                                  for (var r = Ut[2 * t - 1], a = 0; a < 2 * t; a += 2)
                                    (r[a] = I[(n + 4 * a) >> 2]), (r[a + 1] = I[(n + (4 * a + 4)) >> 2]);
                                else r = I.subarray(n >> 2, (n + 8 * t) >> 2);
                                nn.uniform2fv(Wt(e), r);
                              }
                            },
                            C: function (e, t, n) {
                              nn.uniform2i(Wt(e), t, n);
                            },
                            B: function (e, t, n) {
                              if (2 <= Nt.version) nn.uniform2iv(Wt(e), M, n >> 2, 2 * t);
                              else {
                                if (144 >= t)
                                  for (var r = Vt[2 * t - 1], a = 0; a < 2 * t; a += 2)
                                    (r[a] = M[(n + 4 * a) >> 2]), (r[a + 1] = M[(n + (4 * a + 4)) >> 2]);
                                else r = M.subarray(n >> 2, (n + 8 * t) >> 2);
                                nn.uniform2iv(Wt(e), r);
                              }
                            },
                            A: function (e, t, n, r) {
                              nn.uniform3f(Wt(e), t, n, r);
                            },
                            Ec: function (e, t, n) {
                              if (2 <= Nt.version) nn.uniform3fv(Wt(e), I, n >> 2, 3 * t);
                              else {
                                if (96 >= t)
                                  for (var r = Ut[3 * t - 1], a = 0; a < 3 * t; a += 3)
                                    (r[a] = I[(n + 4 * a) >> 2]),
                                      (r[a + 1] = I[(n + (4 * a + 4)) >> 2]),
                                      (r[a + 2] = I[(n + (4 * a + 8)) >> 2]);
                                else r = I.subarray(n >> 2, (n + 12 * t) >> 2);
                                nn.uniform3fv(Wt(e), r);
                              }
                            },
                            Dc: function (e, t, n, r) {
                              nn.uniform3i(Wt(e), t, n, r);
                            },
                            Cc: function (e, t, n) {
                              if (2 <= Nt.version) nn.uniform3iv(Wt(e), M, n >> 2, 3 * t);
                              else {
                                if (96 >= t)
                                  for (var r = Vt[3 * t - 1], a = 0; a < 3 * t; a += 3)
                                    (r[a] = M[(n + 4 * a) >> 2]),
                                      (r[a + 1] = M[(n + (4 * a + 4)) >> 2]),
                                      (r[a + 2] = M[(n + (4 * a + 8)) >> 2]);
                                else r = M.subarray(n >> 2, (n + 12 * t) >> 2);
                                nn.uniform3iv(Wt(e), r);
                              }
                            },
                            Bc: function (e, t, n, r, a) {
                              nn.uniform4f(Wt(e), t, n, r, a);
                            },
                            Ac: function (e, t, n) {
                              if (2 <= Nt.version) nn.uniform4fv(Wt(e), I, n >> 2, 4 * t);
                              else {
                                if (72 >= t) {
                                  var r = Ut[4 * t - 1],
                                    a = I;
                                  n >>= 2;
                                  for (var i = 0; i < 4 * t; i += 4) {
                                    var o = n + i;
                                    (r[i] = a[o]), (r[i + 1] = a[o + 1]), (r[i + 2] = a[o + 2]), (r[i + 3] = a[o + 3]);
                                  }
                                } else r = I.subarray(n >> 2, (n + 16 * t) >> 2);
                                nn.uniform4fv(Wt(e), r);
                              }
                            },
                            zc: function (e, t, n, r, a) {
                              nn.uniform4i(Wt(e), t, n, r, a);
                            },
                            yc: function (e, t, n) {
                              if (2 <= Nt.version) nn.uniform4iv(Wt(e), M, n >> 2, 4 * t);
                              else {
                                if (72 >= t)
                                  for (var r = Vt[4 * t - 1], a = 0; a < 4 * t; a += 4)
                                    (r[a] = M[(n + 4 * a) >> 2]),
                                      (r[a + 1] = M[(n + (4 * a + 4)) >> 2]),
                                      (r[a + 2] = M[(n + (4 * a + 8)) >> 2]),
                                      (r[a + 3] = M[(n + (4 * a + 12)) >> 2]);
                                else r = M.subarray(n >> 2, (n + 16 * t) >> 2);
                                nn.uniform4iv(Wt(e), r);
                              }
                            },
                            xc: function (e, t, n, r) {
                              if (2 <= Nt.version) nn.uniformMatrix2fv(Wt(e), !!n, I, r >> 2, 4 * t);
                              else {
                                if (72 >= t)
                                  for (var a = Ut[4 * t - 1], i = 0; i < 4 * t; i += 4)
                                    (a[i] = I[(r + 4 * i) >> 2]),
                                      (a[i + 1] = I[(r + (4 * i + 4)) >> 2]),
                                      (a[i + 2] = I[(r + (4 * i + 8)) >> 2]),
                                      (a[i + 3] = I[(r + (4 * i + 12)) >> 2]);
                                else a = I.subarray(r >> 2, (r + 16 * t) >> 2);
                                nn.uniformMatrix2fv(Wt(e), !!n, a);
                              }
                            },
                            wc: function (e, t, n, r) {
                              if (2 <= Nt.version) nn.uniformMatrix3fv(Wt(e), !!n, I, r >> 2, 9 * t);
                              else {
                                if (32 >= t)
                                  for (var a = Ut[9 * t - 1], i = 0; i < 9 * t; i += 9)
                                    (a[i] = I[(r + 4 * i) >> 2]),
                                      (a[i + 1] = I[(r + (4 * i + 4)) >> 2]),
                                      (a[i + 2] = I[(r + (4 * i + 8)) >> 2]),
                                      (a[i + 3] = I[(r + (4 * i + 12)) >> 2]),
                                      (a[i + 4] = I[(r + (4 * i + 16)) >> 2]),
                                      (a[i + 5] = I[(r + (4 * i + 20)) >> 2]),
                                      (a[i + 6] = I[(r + (4 * i + 24)) >> 2]),
                                      (a[i + 7] = I[(r + (4 * i + 28)) >> 2]),
                                      (a[i + 8] = I[(r + (4 * i + 32)) >> 2]);
                                else a = I.subarray(r >> 2, (r + 36 * t) >> 2);
                                nn.uniformMatrix3fv(Wt(e), !!n, a);
                              }
                            },
                            vc: function (e, t, n, r) {
                              if (2 <= Nt.version) nn.uniformMatrix4fv(Wt(e), !!n, I, r >> 2, 16 * t);
                              else {
                                if (18 >= t) {
                                  var a = Ut[16 * t - 1],
                                    i = I;
                                  r >>= 2;
                                  for (var o = 0; o < 16 * t; o += 16) {
                                    var u = r + o;
                                    (a[o] = i[u]),
                                      (a[o + 1] = i[u + 1]),
                                      (a[o + 2] = i[u + 2]),
                                      (a[o + 3] = i[u + 3]),
                                      (a[o + 4] = i[u + 4]),
                                      (a[o + 5] = i[u + 5]),
                                      (a[o + 6] = i[u + 6]),
                                      (a[o + 7] = i[u + 7]),
                                      (a[o + 8] = i[u + 8]),
                                      (a[o + 9] = i[u + 9]),
                                      (a[o + 10] = i[u + 10]),
                                      (a[o + 11] = i[u + 11]),
                                      (a[o + 12] = i[u + 12]),
                                      (a[o + 13] = i[u + 13]),
                                      (a[o + 14] = i[u + 14]),
                                      (a[o + 15] = i[u + 15]);
                                  }
                                } else a = I.subarray(r >> 2, (r + 64 * t) >> 2);
                                nn.uniformMatrix4fv(Wt(e), !!n, a);
                              }
                            },
                            tc: function (e) {
                              (e = yt[e]), nn.useProgram(e), (nn.ge = e);
                            },
                            sc: function (e, t) {
                              nn.vertexAttrib1f(e, t);
                            },
                            rc: function (e, t) {
                              nn.vertexAttrib2f(e, I[t >> 2], I[(t + 4) >> 2]);
                            },
                            qc: function (e, t) {
                              nn.vertexAttrib3f(e, I[t >> 2], I[(t + 4) >> 2], I[(t + 8) >> 2]);
                            },
                            pc: function (e, t) {
                              nn.vertexAttrib4f(e, I[t >> 2], I[(t + 4) >> 2], I[(t + 8) >> 2], I[(t + 12) >> 2]);
                            },
                            Yb: function (e, t) {
                              nn.vertexAttribDivisor(e, t);
                            },
                            Xb: function (e, t, n, r, a) {
                              nn.vertexAttribIPointer(e, t, n, r, a);
                            },
                            oc: function (e, t, n, r, a, i) {
                              nn.vertexAttribPointer(e, t, n, !!r, a, i);
                            },
                            nc: function (e, t, n, r) {
                              nn.viewport(e, t, n, r);
                            },
                            $a: function (e, t, n, r) {
                              nn.waitSync(Pt[e], t, (n >>> 0) + 4294967296 * r);
                            },
                            t: function (e) {
                              var t = R.length;
                              if (2147483648 < (e >>>= 0)) return !1;
                              for (var n = 1; 4 >= n; n *= 2) {
                                var r = t * (1 + 0.2 / n);
                                (r = Math.min(r, e + 100663296)),
                                  0 < (r = Math.max(e, r)) % 65536 && (r += 65536 - (r % 65536));
                                e: {
                                  try {
                                    k.grow((Math.min(2147483648, r) - j.byteLength + 65535) >>> 16), $();
                                    var a = 1;
                                    break e;
                                  } catch (i) {}
                                  a = void 0;
                                }
                                if (a) return !0;
                              }
                              return !1;
                            },
                            qb: function (e, t) {
                              var n = 0;
                              return (
                                $t().forEach(function (r, a) {
                                  var i = t + n;
                                  for (a = M[(e + 4 * a) >> 2] = i, i = 0; i < r.length; ++i)
                                    T[a++ >> 0] = r.charCodeAt(i);
                                  (T[a >> 0] = 0), (n += r.length + 1);
                                }),
                                0
                              );
                            },
                            rb: function (e, t) {
                              var n = $t();
                              M[e >> 2] = n.length;
                              var r = 0;
                              return (
                                n.forEach(function (e) {
                                  r += e.length + 1;
                                }),
                                (M[t >> 2] = r),
                                0
                              );
                            },
                            tb: function () {
                              return 0;
                            },
                            eb: function () {},
                            sb: function (e, t, n, r) {
                              for (var a = 0, i = 0; i < n; i++) {
                                var o = M[t >> 2],
                                  u = M[(t + 4) >> 2];
                                t += 8;
                                for (var l = 0; l < u; l++) {
                                  var s = R[o + l],
                                    c = Kt[e];
                                  0 === s || 10 === s ? ((1 === e ? y : b)(C(c, 0)), (c.length = 0)) : c.push(s);
                                }
                                a += u;
                              }
                              return (M[r >> 2] = a), 0;
                            },
                            b: function () {
                              return x;
                            },
                            db: function (e, t) {
                              nn.bindFramebuffer(e, bt[t]);
                            },
                            w: function (e, t) {
                              It(e, t);
                            },
                            n: function (e, t) {
                              var n = pn();
                              try {
                                return oe(e)(t);
                              } catch (r) {
                                if ((hn(n), r !== r + 0 && "longjmp" !== r)) throw r;
                                mn(1, 0);
                              }
                            },
                            g: function (e, t, n) {
                              var r = pn();
                              try {
                                return oe(e)(t, n);
                              } catch (a) {
                                if ((hn(r), a !== a + 0 && "longjmp" !== a)) throw a;
                                mn(1, 0);
                              }
                            },
                            o: function (e, t, n, r) {
                              var a = pn();
                              try {
                                return oe(e)(t, n, r);
                              } catch (i) {
                                if ((hn(a), i !== i + 0 && "longjmp" !== i)) throw i;
                                mn(1, 0);
                              }
                            },
                            r: function (e, t, n, r, a) {
                              var i = pn();
                              try {
                                return oe(e)(t, n, r, a);
                              } catch (o) {
                                if ((hn(i), o !== o + 0 && "longjmp" !== o)) throw o;
                                mn(1, 0);
                              }
                            },
                            hb: function (e, t, n, r, a, i) {
                              var o = pn();
                              try {
                                return oe(e)(t, n, r, a, i);
                              } catch (u) {
                                if ((hn(o), u !== u + 0 && "longjmp" !== u)) throw u;
                                mn(1, 0);
                              }
                            },
                            ib: function (e, t, n, r, a, i, o) {
                              var u = pn();
                              try {
                                return oe(e)(t, n, r, a, i, o);
                              } catch (l) {
                                if ((hn(u), l !== l + 0 && "longjmp" !== l)) throw l;
                                mn(1, 0);
                              }
                            },
                            q: function (e) {
                              var t = pn();
                              try {
                                oe(e)();
                              } catch (n) {
                                if ((hn(t), n !== n + 0 && "longjmp" !== n)) throw n;
                                mn(1, 0);
                              }
                            },
                            j: function (e, t) {
                              var n = pn();
                              try {
                                oe(e)(t);
                              } catch (r) {
                                if ((hn(n), r !== r + 0 && "longjmp" !== r)) throw r;
                                mn(1, 0);
                              }
                            },
                            d: function (e, t, n) {
                              var r = pn();
                              try {
                                oe(e)(t, n);
                              } catch (a) {
                                if ((hn(r), a !== a + 0 && "longjmp" !== a)) throw a;
                                mn(1, 0);
                              }
                            },
                            p: function (e, t, n, r) {
                              var a = pn();
                              try {
                                oe(e)(t, n, r);
                              } catch (i) {
                                if ((hn(a), i !== i + 0 && "longjmp" !== i)) throw i;
                                mn(1, 0);
                              }
                            },
                            i: function (e, t, n, r, a) {
                              var i = pn();
                              try {
                                oe(e)(t, n, r, a);
                              } catch (o) {
                                if ((hn(i), o !== o + 0 && "longjmp" !== o)) throw o;
                                mn(1, 0);
                              }
                            },
                            kb: function (e, t, n, r, a, i) {
                              var o = pn();
                              try {
                                oe(e)(t, n, r, a, i);
                              } catch (u) {
                                if ((hn(o), u !== u + 0 && "longjmp" !== u)) throw u;
                                mn(1, 0);
                              }
                            },
                            gb: function (e, t, n, r, a, i, o) {
                              var u = pn();
                              try {
                                oe(e)(t, n, r, a, i, o);
                              } catch (l) {
                                if ((hn(u), l !== l + 0 && "longjmp" !== l)) throw l;
                                mn(1, 0);
                              }
                            },
                            lb: function (e, t, n, r, a, i, o, u, l) {
                              var s = pn();
                              try {
                                oe(e)(t, n, r, a, i, o, u, l);
                              } catch (c) {
                                if ((hn(s), c !== c + 0 && "longjmp" !== c)) throw c;
                                mn(1, 0);
                              }
                            },
                            c: function (e) {
                              x = e;
                            },
                            pb: function (e, t, n, r) {
                              return Zt(e, t, n, r);
                            },
                          };
                          !(function () {
                            function e(e) {
                              (r.asm = e.exports),
                                (k = r.asm.Hc),
                                $(),
                                (q = r.asm.Rc),
                                Y.unshift(r.asm.Ic),
                                J--,
                                r.monitorRunDependencies && r.monitorRunDependencies(J),
                                0 == J &&
                                  (null !== Z && (clearInterval(Z), (Z = null)), ee && ((e = ee), (ee = null), e()));
                            }
                            function t(t) {
                              e(t.instance);
                            }
                            function n(e) {
                              return (function () {
                                if (!w && (h || m)) {
                                  if ("function" === typeof fetch && !X.startsWith("file://"))
                                    return fetch(X, { credentials: "same-origin" })
                                      .then(function (e) {
                                        if (!e.ok) throw "failed to load wasm binary file at '" + X + "'";
                                        return e.arrayBuffer();
                                      })
                                      .catch(function () {
                                        return ae();
                                      });
                                  if (s)
                                    return new Promise(function (e, t) {
                                      s(
                                        X,
                                        function (t) {
                                          e(new Uint8Array(t));
                                        },
                                        t
                                      );
                                    });
                                }
                                return Promise.resolve().then(function () {
                                  return ae();
                                });
                              })()
                                .then(function (e) {
                                  return WebAssembly.instantiate(e, a);
                                })
                                .then(function (e) {
                                  return e;
                                })
                                .then(e, function (e) {
                                  b("failed to asynchronously prepare wasm: " + e), te(e);
                                });
                            }
                            var a = { a: un };
                            if ((J++, r.monitorRunDependencies && r.monitorRunDependencies(J), r.instantiateWasm))
                              try {
                                return r.instantiateWasm(a, e);
                              } catch (o) {
                                return b("Module.instantiateWasm callback failed with error: " + o), !1;
                              }
                            (w ||
                            "function" !== typeof WebAssembly.instantiateStreaming ||
                            ne() ||
                            X.startsWith("file://") ||
                            "function" !== typeof fetch
                              ? n(t)
                              : fetch(X, { credentials: "same-origin" }).then(function (e) {
                                  return WebAssembly.instantiateStreaming(e, a).then(t, function (e) {
                                    return (
                                      b("wasm streaming compile failed: " + e),
                                      b("falling back to ArrayBuffer instantiation"),
                                      n(t)
                                    );
                                  });
                                })
                            ).catch(i);
                          })(),
                            (r.___wasm_call_ctors = function () {
                              return (r.___wasm_call_ctors = r.asm.Ic).apply(null, arguments);
                            });
                          var ln = (r._malloc = function () {
                              return (ln = r._malloc = r.asm.Jc).apply(null, arguments);
                            }),
                            sn = (r._free = function () {
                              return (sn = r._free = r.asm.Kc).apply(null, arguments);
                            }),
                            cn = (r.___errno_location = function () {
                              return (cn = r.___errno_location = r.asm.Lc).apply(null, arguments);
                            }),
                            fn = (r.___getTypeName = function () {
                              return (fn = r.___getTypeName = r.asm.Mc).apply(null, arguments);
                            });
                          r.___embind_register_native_and_builtin_types = function () {
                            return (r.___embind_register_native_and_builtin_types = r.asm.Nc).apply(null, arguments);
                          };
                          var dn,
                            pn = (r.stackSave = function () {
                              return (pn = r.stackSave = r.asm.Oc).apply(null, arguments);
                            }),
                            hn = (r.stackRestore = function () {
                              return (hn = r.stackRestore = r.asm.Pc).apply(null, arguments);
                            }),
                            mn = (r._setThrew = function () {
                              return (mn = r._setThrew = r.asm.Qc).apply(null, arguments);
                            });
                          function vn() {
                            function e() {
                              if (!dn && ((dn = !0), (r.calledRun = !0), !E)) {
                                if ((ie(Y), a(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), r.postRun))
                                  for (
                                    "function" == typeof r.postRun && (r.postRun = [r.postRun]);
                                    r.postRun.length;

                                  ) {
                                    var e = r.postRun.shift();
                                    G.unshift(e);
                                  }
                                ie(G);
                              }
                            }
                            if (!(0 < J)) {
                              if (r.preRun)
                                for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length; ) Q();
                              ie(K),
                                0 < J ||
                                  (r.setStatus
                                    ? (r.setStatus("Running..."),
                                      setTimeout(function () {
                                        setTimeout(function () {
                                          r.setStatus("");
                                        }, 1),
                                          e();
                                      }, 1))
                                    : e());
                            }
                          }
                          if (
                            ((r.dynCall_iiiij = function () {
                              return (r.dynCall_iiiij = r.asm.Sc).apply(null, arguments);
                            }),
                            (r.dynCall_viiij = function () {
                              return (r.dynCall_viiij = r.asm.Tc).apply(null, arguments);
                            }),
                            (r.dynCall_iiij = function () {
                              return (r.dynCall_iiij = r.asm.Uc).apply(null, arguments);
                            }),
                            (r.dynCall_viij = function () {
                              return (r.dynCall_viij = r.asm.Vc).apply(null, arguments);
                            }),
                            (r.dynCall_viiiiij = function () {
                              return (r.dynCall_viiiiij = r.asm.Wc).apply(null, arguments);
                            }),
                            (r.dynCall_jii = function () {
                              return (r.dynCall_jii = r.asm.Xc).apply(null, arguments);
                            }),
                            (r.dynCall_viji = function () {
                              return (r.dynCall_viji = r.asm.Yc).apply(null, arguments);
                            }),
                            (r.dynCall_ji = function () {
                              return (r.dynCall_ji = r.asm.Zc).apply(null, arguments);
                            }),
                            (r.dynCall_iij = function () {
                              return (r.dynCall_iij = r.asm._c).apply(null, arguments);
                            }),
                            (r.dynCall_vij = function () {
                              return (r.dynCall_vij = r.asm.$c).apply(null, arguments);
                            }),
                            (r.dynCall_jiji = function () {
                              return (r.dynCall_jiji = r.asm.ad).apply(null, arguments);
                            }),
                            (r.dynCall_viijii = function () {
                              return (r.dynCall_viijii = r.asm.bd).apply(null, arguments);
                            }),
                            (r.dynCall_iiiiij = function () {
                              return (r.dynCall_iiiiij = r.asm.cd).apply(null, arguments);
                            }),
                            (r.dynCall_iiiiijj = function () {
                              return (r.dynCall_iiiiijj = r.asm.dd).apply(null, arguments);
                            }),
                            (r.dynCall_iiiiiijj = function () {
                              return (r.dynCall_iiiiiijj = r.asm.ed).apply(null, arguments);
                            }),
                            (ee = function e() {
                              dn || vn(), dn || (ee = e);
                            }),
                            (r.run = vn),
                            r.preInit)
                          )
                            for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); 0 < r.preInit.length; )
                              r.preInit.pop()();
                          return vn(), t.ready;
                        }
                      );
                    })(),
                    i = a;
                },
                function (e) {
                  e.exports = JSON.parse(
                    '{"name":"@rive-app/webgl","version":"1.0.33","description":"Rive\'s webgl based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.wasm","rive.js.map","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}'
                  );
                },
              ],
              t = {};
            function r(n) {
              var a = t[n];
              if (void 0 !== a) return a.exports;
              var i = (t[n] = { exports: {} });
              return e[n](i, i.exports, r), i.exports;
            }
            (r.d = function (e, t) {
              for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
              (r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (r.r = function (e) {
                "undefined" !== typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              });
            var a = {};
            return (
              (function () {
                r.r(a),
                  r.d(a, {
                    Fit: function () {
                      return t;
                    },
                    Alignment: function () {
                      return i;
                    },
                    Layout: function () {
                      return p;
                    },
                    RuntimeLoader: function () {
                      return h;
                    },
                    StateMachineInputType: function () {
                      return f;
                    },
                    StateMachineInput: function () {
                      return w;
                    },
                    EventType: function () {
                      return v;
                    },
                    LoopType: function () {
                      return y;
                    },
                    Rive: function () {
                      return C;
                    },
                    Testing: function () {
                      return _;
                    },
                  });
                var e,
                  t,
                  n,
                  i,
                  o,
                  u = r(1),
                  l = r(2),
                  s = function (e, t, n, r) {
                    return new (n || (n = Promise))(function (a, i) {
                      function o(e) {
                        try {
                          l(r.next(e));
                        } catch (t) {
                          i(t);
                        }
                      }
                      function u(e) {
                        try {
                          l(r.throw(e));
                        } catch (t) {
                          i(t);
                        }
                      }
                      function l(e) {
                        var t;
                        e.done
                          ? a(e.value)
                          : ((t = e.value),
                            t instanceof n
                              ? t
                              : new n(function (e) {
                                  e(t);
                                })).then(o, u);
                      }
                      l((r = r.apply(e, t || [])).next());
                    });
                  },
                  c = function (e, t) {
                    var n,
                      r,
                      a,
                      i,
                      o = {
                        label: 0,
                        sent: function () {
                          if (1 & a[0]) throw a[1];
                          return a[1];
                        },
                        trys: [],
                        ops: [],
                      };
                    return (
                      (i = { next: u(0), throw: u(1), return: u(2) }),
                      "function" === typeof Symbol &&
                        (i[Symbol.iterator] = function () {
                          return this;
                        }),
                      i
                    );
                    function u(i) {
                      return function (u) {
                        return (function (i) {
                          if (n) throw new TypeError("Generator is already executing.");
                          for (; o; )
                            try {
                              if (
                                ((n = 1),
                                r &&
                                  (a =
                                    2 & i[0]
                                      ? r.return
                                      : i[0]
                                      ? r.throw || ((a = r.return) && a.call(r), 0)
                                      : r.next) &&
                                  !(a = a.call(r, i[1])).done)
                              )
                                return a;
                              switch (((r = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                                case 0:
                                case 1:
                                  a = i;
                                  break;
                                case 4:
                                  return o.label++, { value: i[1], done: !1 };
                                case 5:
                                  o.label++, (r = i[1]), (i = [0]);
                                  continue;
                                case 7:
                                  (i = o.ops.pop()), o.trys.pop();
                                  continue;
                                default:
                                  if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue;
                                  }
                                  if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                                    o.label = i[1];
                                    break;
                                  }
                                  if (6 === i[0] && o.label < a[1]) {
                                    (o.label = a[1]), (a = i);
                                    break;
                                  }
                                  if (a && o.label < a[2]) {
                                    (o.label = a[2]), o.ops.push(i);
                                    break;
                                  }
                                  a[2] && o.ops.pop(), o.trys.pop();
                                  continue;
                              }
                              i = t.call(e, o);
                            } catch (u) {
                              (i = [6, u]), (r = 0);
                            } finally {
                              n = a = 0;
                            }
                          if (5 & i[0]) throw i[1];
                          return { value: i[0] ? i[1] : void 0, done: !0 };
                        })([i, u]);
                      };
                    }
                  };
                !(function (e) {
                  (e[(e.Play = 0)] = "Play"), (e[(e.Pause = 1)] = "Pause"), (e[(e.Stop = 2)] = "Stop");
                })(e || (e = {})),
                  ((n = t || (t = {})).Cover = "cover"),
                  (n.Contain = "contain"),
                  (n.Fill = "fill"),
                  (n.FitWidth = "fitWidth"),
                  (n.FitHeight = "fitHeight"),
                  (n.None = "none"),
                  (n.ScaleDown = "scaleDown"),
                  ((o = i || (i = {})).Center = "center"),
                  (o.TopLeft = "topLeft"),
                  (o.TopCenter = "topCenter"),
                  (o.TopRight = "topRight"),
                  (o.CenterLeft = "centerLeft"),
                  (o.CenterRight = "centerRight"),
                  (o.BottomLeft = "bottomLeft"),
                  (o.BottomCenter = "bottomCenter"),
                  (o.BottomRight = "bottomRight");
                var f,
                  d,
                  p = (function () {
                    function e(e) {
                      var n, r, a, o, u, l;
                      (this.fit =
                        null !== (n = null === e || void 0 === e ? void 0 : e.fit) && void 0 !== n ? n : t.Contain),
                        (this.alignment =
                          null !== (r = null === e || void 0 === e ? void 0 : e.alignment) && void 0 !== r
                            ? r
                            : i.Center),
                        (this.minX =
                          null !== (a = null === e || void 0 === e ? void 0 : e.minX) && void 0 !== a ? a : 0),
                        (this.minY =
                          null !== (o = null === e || void 0 === e ? void 0 : e.minY) && void 0 !== o ? o : 0),
                        (this.maxX =
                          null !== (u = null === e || void 0 === e ? void 0 : e.maxX) && void 0 !== u ? u : 0),
                        (this.maxY =
                          null !== (l = null === e || void 0 === e ? void 0 : e.maxY) && void 0 !== l ? l : 0);
                    }
                    return (
                      (e.new = function (t) {
                        var n = t.fit,
                          r = t.alignment,
                          a = t.minX,
                          i = t.minY,
                          o = t.maxX,
                          u = t.maxY;
                        return (
                          console.warn("This function is deprecated: please use `new Layout({})` instead"),
                          new e({ fit: n, alignment: r, minX: a, minY: i, maxX: o, maxY: u })
                        );
                      }),
                      (e.prototype.copyWith = function (t) {
                        var n = t.fit,
                          r = t.alignment,
                          a = t.minX,
                          i = t.minY,
                          o = t.maxX,
                          u = t.maxY;
                        return new e({
                          fit: null !== n && void 0 !== n ? n : this.fit,
                          alignment: null !== r && void 0 !== r ? r : this.alignment,
                          minX: null !== a && void 0 !== a ? a : this.minX,
                          minY: null !== i && void 0 !== i ? i : this.minY,
                          maxX: null !== o && void 0 !== o ? o : this.maxX,
                          maxY: null !== u && void 0 !== u ? u : this.maxY,
                        });
                      }),
                      (e.prototype.runtimeFit = function (e) {
                        return this.cachedRuntimeFit
                          ? this.cachedRuntimeFit
                          : ((n =
                              this.fit === t.Cover
                                ? e.Fit.cover
                                : this.fit === t.Contain
                                ? e.Fit.contain
                                : this.fit === t.Fill
                                ? e.Fit.fill
                                : this.fit === t.FitWidth
                                ? e.Fit.fitWidth
                                : this.fit === t.FitHeight
                                ? e.Fit.fitHeight
                                : this.fit === t.ScaleDown
                                ? e.Fit.scaleDown
                                : e.Fit.none),
                            (this.cachedRuntimeFit = n),
                            n);
                        var n;
                      }),
                      (e.prototype.runtimeAlignment = function (e) {
                        return this.cachedRuntimeAlignment
                          ? this.cachedRuntimeAlignment
                          : ((t =
                              this.alignment === i.TopLeft
                                ? e.Alignment.topLeft
                                : this.alignment === i.TopCenter
                                ? e.Alignment.topCenter
                                : this.alignment === i.TopRight
                                ? e.Alignment.topRight
                                : this.alignment === i.CenterLeft
                                ? e.Alignment.centerLeft
                                : this.alignment === i.CenterRight
                                ? e.Alignment.centerRight
                                : this.alignment === i.BottomLeft
                                ? e.Alignment.bottomLeft
                                : this.alignment === i.BottomCenter
                                ? e.Alignment.bottomCenter
                                : this.alignment === i.BottomRight
                                ? e.Alignment.bottomRight
                                : e.Alignment.center),
                            (this.cachedRuntimeAlignment = t),
                            t);
                        var t;
                      }),
                      e
                    );
                  })(),
                  h = (function () {
                    function e() {}
                    return (
                      (e.loadRuntime = function () {
                        u.default({
                          locateFile: function (t) {
                            return e.wasmURL;
                          },
                        }).then(function (t) {
                          var n;
                          for (e.runtime = t; e.callBackQueue.length > 0; )
                            null === (n = e.callBackQueue.shift()) || void 0 === n || n(e.runtime);
                        });
                      }),
                      (e.getInstance = function (t) {
                        e.isLoading || ((e.isLoading = !0), e.loadRuntime()),
                          e.runtime ? t(e.runtime) : e.callBackQueue.push(t);
                      }),
                      (e.awaitInstance = function () {
                        return new Promise(function (t, n) {
                          return e.getInstance(function (e) {
                            return t(e);
                          });
                        });
                      }),
                      (e.setWasmUrl = function (t) {
                        e.wasmURL = t;
                      }),
                      (e.isLoading = !1),
                      (e.callBackQueue = []),
                      (e.wasmURL = "https://unpkg.com/" + l.name + "@" + l.version + "/rive.wasm"),
                      e
                    );
                  })(),
                  m = (function () {
                    function e(e, t, n) {
                      (this.animation = e),
                        (this.playing = n),
                        (this.loopCount = 0),
                        (this.scrubTo = null),
                        (this.instance = new t.LinearAnimationInstance(e));
                    }
                    return (
                      Object.defineProperty(e.prototype, "name", {
                        get: function () {
                          return this.animation.name;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "time", {
                        get: function () {
                          return this.instance.time;
                        },
                        set: function (e) {
                          this.instance.time = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "loopValue", {
                        get: function () {
                          return this.animation.loopValue;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.advance = function (e) {
                        null === this.scrubTo
                          ? this.instance.advance(e)
                          : ((this.instance.time = 0), this.instance.advance(this.scrubTo), (this.scrubTo = null));
                      }),
                      Object.defineProperty(e.prototype, "needsScrub", {
                        get: function () {
                          return null !== this.scrubTo;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.cleanup = function () {
                        this.instance.delete();
                      }),
                      e
                    );
                  })();
                ((d = f || (f = {}))[(d.Number = 56)] = "Number"),
                  (d[(d.Trigger = 58)] = "Trigger"),
                  (d[(d.Boolean = 59)] = "Boolean");
                var v,
                  g,
                  y,
                  b,
                  w = (function () {
                    function e(e, t) {
                      (this.type = e), (this.runtimeInput = t);
                    }
                    return (
                      Object.defineProperty(e.prototype, "name", {
                        get: function () {
                          return this.runtimeInput.name;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "value", {
                        get: function () {
                          return this.runtimeInput.value;
                        },
                        set: function (e) {
                          this.runtimeInput.value = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.fire = function () {
                        this.type === f.Trigger && this.runtimeInput.fire();
                      }),
                      e
                    );
                  })(),
                  x = (function () {
                    function e(e, t, n) {
                      (this.stateMachine = e),
                        (this.playing = n),
                        (this.inputs = []),
                        (this.instance = new t.StateMachineInstance(e)),
                        this.initInputs(t);
                    }
                    return (
                      Object.defineProperty(e.prototype, "name", {
                        get: function () {
                          return this.stateMachine.name;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "statesChanged", {
                        get: function () {
                          for (var e = [], t = 0; t < this.instance.stateChangedCount(); t++)
                            e.push(this.instance.stateChangedNameByIndex(t));
                          return e;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.initInputs = function (e) {
                        for (var t = 0; t < this.instance.inputCount(); t++) {
                          var n = this.instance.input(t);
                          this.inputs.push(this.mapRuntimeInput(n, e));
                        }
                      }),
                      (e.prototype.mapRuntimeInput = function (e, t) {
                        return e.type === t.SMIInput.bool
                          ? new w(f.Boolean, e.asBool())
                          : e.type === t.SMIInput.number
                          ? new w(f.Number, e.asNumber())
                          : e.type === t.SMIInput.trigger
                          ? new w(f.Trigger, e.asTrigger())
                          : void 0;
                      }),
                      (e.prototype.cleanup = function () {
                        this.instance.delete();
                      }),
                      e
                    );
                  })(),
                  k = (function () {
                    function e(e, t, n, r, a) {
                      void 0 === r && (r = []),
                        void 0 === a && (a = []),
                        (this.runtime = e),
                        (this.artboard = t),
                        (this.eventManager = n),
                        (this.animations = r),
                        (this.stateMachines = a);
                    }
                    return (
                      (e.prototype.add = function (e, t, n) {
                        if ((void 0 === n && (n = !0), 0 === (e = O(e)).length))
                          this.animations.forEach(function (e) {
                            return (e.playing = t);
                          }),
                            this.stateMachines.forEach(function (e) {
                              return (e.playing = t);
                            });
                        else {
                          var r = this.animations.map(function (e) {
                              return e.name;
                            }),
                            a = this.stateMachines.map(function (e) {
                              return e.name;
                            });
                          for (var i in e) {
                            var o = r.indexOf(e[i]),
                              u = a.indexOf(e[i]);
                            if (o >= 0 || u >= 0)
                              o >= 0 ? (this.animations[o].playing = t) : (this.stateMachines[u].playing = t);
                            else {
                              var l = this.artboard.animationByName(e[i]);
                              if (l) this.animations.push(new m(l, this.runtime, t));
                              else {
                                var s = this.artboard.stateMachineByName(e[i]);
                                s && this.stateMachines.push(new x(s, this.runtime, t));
                              }
                            }
                          }
                        }
                        return (
                          n &&
                            (t
                              ? this.eventManager.fire({ type: v.Play, data: this.playing })
                              : this.eventManager.fire({ type: v.Pause, data: this.paused })),
                          t ? this.playing : this.paused
                        );
                      }),
                      (e.prototype.play = function (e) {
                        return this.add(e, !0);
                      }),
                      (e.prototype.pause = function (e) {
                        return this.add(e, !1);
                      }),
                      (e.prototype.scrub = function (e, t) {
                        var n = this.animations.filter(function (t) {
                          return e.includes(t.name);
                        });
                        return (
                          n.forEach(function (e) {
                            return (e.scrubTo = t);
                          }),
                          n.map(function (e) {
                            return e.name;
                          })
                        );
                      }),
                      Object.defineProperty(e.prototype, "playing", {
                        get: function () {
                          return this.animations
                            .filter(function (e) {
                              return e.playing;
                            })
                            .map(function (e) {
                              return e.name;
                            })
                            .concat(
                              this.stateMachines
                                .filter(function (e) {
                                  return e.playing;
                                })
                                .map(function (e) {
                                  return e.name;
                                })
                            );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "paused", {
                        get: function () {
                          return this.animations
                            .filter(function (e) {
                              return !e.playing;
                            })
                            .map(function (e) {
                              return e.name;
                            })
                            .concat(
                              this.stateMachines
                                .filter(function (e) {
                                  return !e.playing;
                                })
                                .map(function (e) {
                                  return e.name;
                                })
                            );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.stop = function (e) {
                        var t = this,
                          n = [];
                        if (0 === (e = O(e)).length)
                          (n = this.animations
                            .map(function (e) {
                              return e.name;
                            })
                            .concat(
                              this.stateMachines.map(function (e) {
                                return e.name;
                              })
                            )),
                            this.animations.forEach(function (e) {
                              return e.cleanup();
                            }),
                            this.stateMachines.forEach(function (e) {
                              return e.cleanup();
                            }),
                            this.animations.splice(0, this.animations.length),
                            this.stateMachines.splice(0, this.stateMachines.length);
                        else {
                          var r = this.animations.filter(function (t) {
                            return e.includes(t.name);
                          });
                          r.forEach(function (e) {
                            e.cleanup(), t.animations.splice(t.animations.indexOf(e), 1);
                          });
                          var a = this.stateMachines.filter(function (t) {
                            return e.includes(t.name);
                          });
                          a.forEach(function (e) {
                            e.cleanup(), t.stateMachines.splice(t.stateMachines.indexOf(e), 1);
                          }),
                            (n = r
                              .map(function (e) {
                                return e.name;
                              })
                              .concat(
                                a.map(function (e) {
                                  return e.name;
                                })
                              ));
                        }
                        return this.eventManager.fire({ type: v.Stop, data: n }), n;
                      }),
                      Object.defineProperty(e.prototype, "isPlaying", {
                        get: function () {
                          return (
                            this.animations.reduce(function (e, t) {
                              return e || t.playing;
                            }, !1) ||
                            this.stateMachines.reduce(function (e, t) {
                              return e || t.playing;
                            }, !1)
                          );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "isPaused", {
                        get: function () {
                          return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "isStopped", {
                        get: function () {
                          return 0 === this.animations.length && 0 === this.stateMachines.length;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.atLeastOne = function (e, t) {
                        var n;
                        return (
                          void 0 === t && (t = !0),
                          0 === this.animations.length &&
                            0 === this.stateMachines.length &&
                            (this.artboard.animationCount() > 0
                              ? this.add([(n = this.artboard.animationByIndex(0).name)], e, t)
                              : this.artboard.stateMachineCount() > 0 &&
                                this.add([(n = this.artboard.stateMachineByIndex(0).name)], e, t)),
                          n
                        );
                      }),
                      (e.prototype.handleLooping = function () {
                        for (
                          var e = 0,
                            t = this.animations.filter(function (e) {
                              return e.playing;
                            });
                          e < t.length;
                          e++
                        ) {
                          var n = t[e];
                          0 === n.loopValue && n.loopCount
                            ? ((n.loopCount = 0), this.stop(n.name))
                            : 1 === n.loopValue && n.loopCount
                            ? (this.eventManager.fire({ type: v.Loop, data: { animation: n.name, type: y.Loop } }),
                              (n.loopCount = 0))
                            : 2 === n.loopValue &&
                              n.loopCount > 1 &&
                              (this.eventManager.fire({ type: v.Loop, data: { animation: n.name, type: y.PingPong } }),
                              (n.loopCount = 0));
                        }
                      }),
                      (e.prototype.handleStateChanges = function () {
                        for (
                          var e = [],
                            t = 0,
                            n = this.stateMachines.filter(function (e) {
                              return e.playing;
                            });
                          t < n.length;
                          t++
                        ) {
                          var r = n[t];
                          e.push.apply(e, r.statesChanged);
                        }
                        e.length > 0 && this.eventManager.fire({ type: v.StateChange, data: e });
                      }),
                      e
                    );
                  })();
                ((g = v || (v = {})).Load = "load"),
                  (g.LoadError = "loaderror"),
                  (g.Play = "play"),
                  (g.Pause = "pause"),
                  (g.Stop = "stop"),
                  (g.Loop = "loop"),
                  (g.Draw = "draw"),
                  (g.StateChange = "statechange"),
                  ((b = y || (y = {})).OneShot = "oneshot"),
                  (b.Loop = "loop"),
                  (b.PingPong = "pingpong");
                var E = (function () {
                    function e(e) {
                      void 0 === e && (e = []), (this.listeners = e);
                    }
                    return (
                      (e.prototype.getListeners = function (e) {
                        return this.listeners.filter(function (t) {
                          return t.type === e;
                        });
                      }),
                      (e.prototype.add = function (e) {
                        this.listeners.includes(e) || this.listeners.push(e);
                      }),
                      (e.prototype.remove = function (e) {
                        for (var t = 0; t < this.listeners.length; t++) {
                          var n = this.listeners[t];
                          if (n.type === e.type && n.callback === e.callback) {
                            this.listeners.splice(t, 1);
                            break;
                          }
                        }
                      }),
                      (e.prototype.removeAll = function (e) {
                        var t = this;
                        e
                          ? this.listeners
                              .filter(function (t) {
                                return t.type === e;
                              })
                              .forEach(function (e) {
                                return t.remove(e);
                              })
                          : this.listeners.splice(0, this.listeners.length);
                      }),
                      (e.prototype.fire = function (e) {
                        this.getListeners(e.type).forEach(function (t) {
                          return t.callback(e);
                        });
                      }),
                      e
                    );
                  })(),
                  S = (function () {
                    function e(e) {
                      (this.eventManager = e), (this.queue = []);
                    }
                    return (
                      (e.prototype.add = function (e) {
                        this.queue.push(e);
                      }),
                      (e.prototype.process = function () {
                        for (; this.queue.length > 0; ) {
                          var e = this.queue.shift();
                          null === e || void 0 === e || e.action(),
                            (null === e || void 0 === e ? void 0 : e.event) && this.eventManager.fire(e.event);
                        }
                      }),
                      e
                    );
                  })(),
                  C = (function () {
                    function e(e) {
                      var t;
                      (this._updateLayout = !0),
                        (this.isRendererActive = !0),
                        (this.loaded = !1),
                        (this.readyForPlaying = !1),
                        (this.artboard = null),
                        (this.durations = []),
                        (this.frameTimes = []),
                        (this.frameCount = 0),
                        (this.renderSecondTimer = 0),
                        (this.canvas = e.canvas),
                        (this.src = e.src),
                        (this.buffer = e.buffer),
                        (this.layout = null !== (t = e.layout) && void 0 !== t ? t : new p()),
                        (this.eventManager = new E()),
                        e.onLoad && this.on(v.Load, e.onLoad),
                        e.onLoadError && this.on(v.LoadError, e.onLoadError),
                        e.onPlay && this.on(v.Play, e.onPlay),
                        e.onPause && this.on(v.Pause, e.onPause),
                        e.onStop && this.on(v.Stop, e.onStop),
                        e.onLoop && this.on(v.Loop, e.onLoop),
                        e.onStateChange && this.on(v.StateChange, e.onStateChange),
                        e.onload && !e.onLoad && this.on(v.Load, e.onload),
                        e.onloaderror && !e.onLoadError && this.on(v.LoadError, e.onloaderror),
                        e.onplay && !e.onPlay && this.on(v.Play, e.onplay),
                        e.onpause && !e.onPause && this.on(v.Pause, e.onpause),
                        e.onstop && !e.onStop && this.on(v.Stop, e.onstop),
                        e.onloop && !e.onLoop && this.on(v.Loop, e.onloop),
                        e.onstatechange && !e.onStateChange && this.on(v.StateChange, e.onstatechange),
                        (this.taskQueue = new S(this.eventManager)),
                        this.init({
                          src: this.src,
                          buffer: this.buffer,
                          autoplay: e.autoplay,
                          animations: e.animations,
                          stateMachines: e.stateMachines,
                          artboard: e.artboard,
                          useOffscreenRenderer: e.useOffscreenRenderer,
                        });
                    }
                    return (
                      (e.new = function (t) {
                        return console.warn("This function is deprecated: please use `new Rive({})` instead"), new e(t);
                      }),
                      (e.prototype.init = function (t) {
                        var n = this,
                          r = t.src,
                          a = t.buffer,
                          i = t.animations,
                          o = t.stateMachines,
                          u = t.artboard,
                          l = t.autoplay,
                          s = void 0 !== l && l,
                          c = t.useOffscreenRenderer,
                          f = void 0 !== c && c;
                        if (((this.src = r), (this.buffer = a), !this.src && !this.buffer))
                          throw new Error(e.missingErrorMessage);
                        var d = O(i),
                          p = O(o);
                        (this.loaded = !1),
                          (this.readyForPlaying = !1),
                          h
                            .awaitInstance()
                            .then(function (e) {
                              (n.runtime = e),
                                (n.renderer = n.runtime.makeRenderer(n.canvas, f)),
                                n.canvas.width || n.canvas.height || n.resizeDrawingSurfaceToCanvas(),
                                n.initData(u, d, p, s).catch(function (e) {
                                  console.error(e);
                                });
                            })
                            .catch(function (e) {
                              console.error(e);
                            });
                      }),
                      (e.prototype.initData = function (e, t, n, r) {
                        var a;
                        return s(this, void 0, void 0, function () {
                          var i, o, u;
                          return c(this, function (l) {
                            switch (l.label) {
                              case 0:
                                return this.src ? ((i = this), [4, P(this.src)]) : [3, 2];
                              case 1:
                                (i.buffer = l.sent()), (l.label = 2);
                              case 2:
                                return (o = this), [4, this.runtime.load(new Uint8Array(this.buffer))];
                              case 3:
                                return (
                                  (o.file = l.sent()),
                                  this.file
                                    ? (this.initArtboard(e, t, n, r),
                                      (this.loaded = !0),
                                      this.eventManager.fire({
                                        type: v.Load,
                                        data: null !== (a = this.src) && void 0 !== a ? a : "buffer",
                                      }),
                                      (this.readyForPlaying = !0),
                                      this.taskQueue.process(),
                                      this.drawFrame(),
                                      [2, Promise.resolve()])
                                    : ((u = "Problem loading file; may be corrupt!"),
                                      console.warn(u),
                                      this.eventManager.fire({ type: v.LoadError, data: u }),
                                      [2, Promise.reject(u)])
                                );
                            }
                          });
                        });
                      }),
                      (e.prototype.initArtboard = function (e, t, n, r) {
                        var a,
                          i = e ? this.file.artboardByName(e) : this.file.defaultArtboard();
                        if (!i) {
                          var o = "Invalid artboard name or no default artboard";
                          return console.warn(o), void this.eventManager.fire({ type: v.LoadError, data: o });
                        }
                        if (((this.artboard = i.instance()), this.artboard.animationCount() < 1))
                          throw (
                            ((o = "Artboard has no animations"),
                            this.eventManager.fire({ type: v.LoadError, data: o }),
                            o)
                          );
                        (this.animator = new k(this.runtime, this.artboard, this.eventManager)),
                          t.length > 0 || n.length > 0
                            ? ((a = t.concat(n)), this.animator.add(a, r, !1))
                            : (a = [this.animator.atLeastOne(r, !1)]),
                          this.taskQueue.add({
                            action: function () {},
                            event: { type: r ? v.Play : v.Pause, data: a },
                          });
                      }),
                      (e.prototype.drawFrame = function () {
                        this.startRendering();
                      }),
                      (e.prototype.draw = function (e, t) {
                        var n = performance.now();
                        (this.frameRequestId = null),
                          this.lastRenderTime || (this.lastRenderTime = e),
                          (this.renderSecondTimer += e - this.lastRenderTime),
                          this.renderSecondTimer > 5e3 &&
                            ((this.renderSecondTimer = 0), null === t || void 0 === t || t());
                        var r = (e - this.lastRenderTime) / 1e3;
                        this.lastRenderTime = e;
                        for (
                          var a = 0,
                            i = this.animator.animations
                              .filter(function (e) {
                                return e.playing || e.needsScrub;
                              })
                              .sort(function (e, t) {
                                return e.needsScrub ? -1 : 1;
                              });
                          a < i.length;
                          a++
                        ) {
                          var o = i[a];
                          o.advance(r), o.instance.didLoop && (o.loopCount += 1), o.instance.apply(this.artboard, 1);
                        }
                        for (
                          var u = 0,
                            l = this.animator.stateMachines.filter(function (e) {
                              return e.playing;
                            });
                          u < l.length;
                          u++
                        )
                          l[u].instance.advance(this.artboard, r);
                        this.artboard.advance(r);
                        var s = this.renderer;
                        s.clear(),
                          s.save(),
                          this.alignRenderer(),
                          this.artboard.draw(s),
                          s.restore(),
                          s.flush(),
                          this.animator.handleLooping(),
                          this.animator.handleStateChanges(),
                          this.frameCount++;
                        var c = performance.now();
                        for (this.frameTimes.push(c), this.durations.push(c - n); this.frameTimes[0] <= c - 1e3; )
                          this.frameTimes.shift(), this.durations.shift();
                        this.animator.isPlaying
                          ? this.startRendering()
                          : (this.animator.isPaused || this.animator.isStopped) && (this.lastRenderTime = 0);
                      }),
                      (e.prototype.alignRenderer = function () {
                        var e = this,
                          t = e.renderer,
                          n = e.runtime,
                          r = e._layout,
                          a = e.artboard;
                        t.align(
                          r.runtimeFit(n),
                          r.runtimeAlignment(n),
                          { minX: r.minX, minY: r.minY, maxX: r.maxX, maxY: r.maxY },
                          a.bounds
                        );
                      }),
                      Object.defineProperty(e.prototype, "fps", {
                        get: function () {
                          return this.durations.length;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "frameTime", {
                        get: function () {
                          return 0 === this.durations.length
                            ? 0
                            : (
                                this.durations.reduce(function (e, t) {
                                  return e + t;
                                }, 0) / this.durations.length
                              ).toFixed(4);
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.cleanup = function () {
                        this.artboard.delete();
                      }),
                      (e.prototype.play = function (e, t) {
                        var n = this;
                        (e = O(e)),
                          this.readyForPlaying
                            ? (this.animator.play(e), this.startRendering())
                            : this.taskQueue.add({
                                action: function () {
                                  return n.play(e, t);
                                },
                              });
                      }),
                      (e.prototype.pause = function (e) {
                        var t = this;
                        (e = O(e)),
                          this.readyForPlaying
                            ? this.animator.pause(e)
                            : this.taskQueue.add({
                                action: function () {
                                  return t.pause(e);
                                },
                              });
                      }),
                      (e.prototype.scrub = function (e, t) {
                        var n = this;
                        (e = O(e)),
                          this.readyForPlaying
                            ? (this.animator.scrub(e, t || 0), this.drawFrame())
                            : this.taskQueue.add({
                                action: function () {
                                  return n.scrub(e, t);
                                },
                              });
                      }),
                      (e.prototype.stop = function (e) {
                        var t = this;
                        (e = O(e)),
                          this.readyForPlaying
                            ? this.animator.stop(e)
                            : this.taskQueue.add({
                                action: function () {
                                  return t.stop(e);
                                },
                              });
                      }),
                      (e.prototype.reset = function (e) {
                        var t,
                          n = null === e || void 0 === e ? void 0 : e.artboard,
                          r = O(null === e || void 0 === e ? void 0 : e.animations),
                          a = O(null === e || void 0 === e ? void 0 : e.stateMachines),
                          i = null !== (t = null === e || void 0 === e ? void 0 : e.autoplay) && void 0 !== t && t;
                        this.stop(), this.cleanup(), this.initArtboard(n, r, a, i);
                      }),
                      (e.prototype.load = function (e) {
                        this.stop(), this.init(e);
                      }),
                      Object.defineProperty(e.prototype, "layout", {
                        get: function () {
                          return this._layout;
                        },
                        set: function (e) {
                          (this._layout = e),
                            (e.maxX && e.maxY) || this.resizeToCanvas(),
                            this.loaded && !this.animator.isPlaying && this.drawFrame();
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.resizeToCanvas = function () {
                        this._layout = this.layout.copyWith({
                          minX: 0,
                          minY: 0,
                          maxX: this.canvas.width,
                          maxY: this.canvas.height,
                        });
                      }),
                      (e.prototype.resizeDrawingSurfaceToCanvas = function () {
                        if (this.canvas instanceof HTMLCanvasElement && window) {
                          var e = this.canvas.getBoundingClientRect(),
                            t = e.width,
                            n = e.height,
                            r = window.devicePixelRatio || 1;
                          (this.canvas.width = r * t),
                            (this.canvas.height = r * n),
                            this.startRendering(),
                            this.resizeToCanvas();
                        }
                      }),
                      Object.defineProperty(e.prototype, "source", {
                        get: function () {
                          return this.src;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "activeArtboard", {
                        get: function () {
                          return this.artboard.name;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "animationNames", {
                        get: function () {
                          if (!this.loaded) return [];
                          for (var e = [], t = 0; t < this.artboard.animationCount(); t++)
                            e.push(this.artboard.animationByIndex(t).name);
                          return e;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "stateMachineNames", {
                        get: function () {
                          if (!this.loaded) return [];
                          for (var e = [], t = 0; t < this.artboard.stateMachineCount(); t++)
                            e.push(this.artboard.stateMachineByIndex(t).name);
                          return e;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.stateMachineInputs = function (e) {
                        if (this.loaded) {
                          var t = this.animator.stateMachines.find(function (t) {
                            return t.name === e;
                          });
                          return null === t || void 0 === t ? void 0 : t.inputs;
                        }
                      }),
                      Object.defineProperty(e.prototype, "playingStateMachineNames", {
                        get: function () {
                          return this.loaded
                            ? this.animator.stateMachines
                                .filter(function (e) {
                                  return e.playing;
                                })
                                .map(function (e) {
                                  return e.name;
                                })
                            : [];
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "playingAnimationNames", {
                        get: function () {
                          return this.loaded
                            ? this.animator.animations
                                .filter(function (e) {
                                  return e.playing;
                                })
                                .map(function (e) {
                                  return e.name;
                                })
                            : [];
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "pausedAnimationNames", {
                        get: function () {
                          return this.loaded
                            ? this.animator.animations
                                .filter(function (e) {
                                  return !e.playing;
                                })
                                .map(function (e) {
                                  return e.name;
                                })
                            : [];
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "pausedStateMachineNames", {
                        get: function () {
                          return this.loaded
                            ? this.animator.stateMachines
                                .filter(function (e) {
                                  return !e.playing;
                                })
                                .map(function (e) {
                                  return e.name;
                                })
                            : [];
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "isPlaying", {
                        get: function () {
                          return this.animator.isPlaying;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "isPaused", {
                        get: function () {
                          return this.animator.isPaused;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "isStopped", {
                        get: function () {
                          return this.animator.isStopped;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(e.prototype, "bounds", {
                        get: function () {
                          return this.artboard ? this.artboard.bounds : void 0;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.on = function (e, t) {
                        this.eventManager.add({ type: e, callback: t });
                      }),
                      (e.prototype.unsubscribe = function (e, t) {
                        this.eventManager.remove({ type: e, callback: t });
                      }),
                      (e.prototype.unsubscribeAll = function (e) {
                        this.eventManager.removeAll(e);
                      }),
                      (e.prototype.stopRendering = function () {
                        this.loaded &&
                          this.frameRequestId &&
                          (cancelAnimationFrame(this.frameRequestId), (this.frameRequestId = null));
                      }),
                      (e.prototype.startRendering = function () {
                        this.loaded &&
                          !this.frameRequestId &&
                          (this.frameRequestId = requestAnimationFrame(this.draw.bind(this)));
                      }),
                      Object.defineProperty(e.prototype, "contents", {
                        get: function () {
                          if (this.loaded) {
                            for (var e = { artboards: [] }, t = 0; t < this.file.artboardCount(); t++) {
                              for (
                                var n = this.file.artboardByIndex(t),
                                  r = { name: n.name, animations: [], stateMachines: [] },
                                  a = 0;
                                a < n.animationCount();
                                a++
                              ) {
                                var i = n.animationByIndex(a);
                                r.animations.push(i.name);
                              }
                              for (var o = 0; o < n.stateMachineCount(); o++) {
                                for (
                                  var u = n.stateMachineByIndex(o),
                                    l = u.name,
                                    s = new this.runtime.StateMachineInstance(u),
                                    c = [],
                                    f = 0;
                                  f < s.inputCount();
                                  f++
                                ) {
                                  var d = s.input(f);
                                  c.push({ name: d.name, type: d.type });
                                }
                                r.stateMachines.push({ name: l, inputs: c });
                              }
                              e.artboards.push(r);
                            }
                            return e;
                          }
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.missingErrorMessage = "Rive source file or data buffer required"),
                      e
                    );
                  })(),
                  P = function (e) {
                    return s(void 0, void 0, void 0, function () {
                      var t;
                      return c(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return (t = new Request(e)), [4, fetch(t)];
                          case 1:
                            return [4, n.sent().arrayBuffer()];
                          case 2:
                            return [2, n.sent()];
                        }
                      });
                    });
                  },
                  O = function (e) {
                    return "string" === typeof e ? [e] : e instanceof Array ? e : [];
                  },
                  _ = { EventManager: E, TaskQueueManager: S };
              })(),
              a
            );
          })();
        }),
          (e.exports = r());
      },
      694: function (e, t) {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function a() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var i = typeof n;
                if ("string" === i || "number" === i) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var o = a.apply(null, n);
                    o && e.push(o);
                  }
                } else if ("object" === i)
                  if (n.toString === Object.prototype.toString) for (var u in n) r.call(n, u) && n[u] && e.push(u);
                  else e.push(n.toString());
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (n = function () {
                  return a;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      176: function (e) {
        "use strict";
        e.exports = function (e, t, n, r, a, i, o, u) {
          if (!e) {
            var l;
            if (void 0 === t)
              l = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var s = [n, r, a, i, o, u],
                c = 0;
              (l = new Error(
                t.replace(/%s/g, function () {
                  return s[c++];
                })
              )).name = "Invariant Violation";
            }
            throw ((l.framesToPop = 1), l);
          }
        };
      },
      725: function (e) {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function a(e) {
          if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            );
          } catch (a) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, i) {
              for (var o, u, l = a(e), s = 1; s < arguments.length; s++) {
                for (var c in (o = Object(arguments[s]))) n.call(o, c) && (l[c] = o[c]);
                if (t) {
                  u = t(o);
                  for (var f = 0; f < u.length; f++) r.call(o, u[f]) && (l[u[f]] = o[u[f]]);
                }
              }
              return l;
            };
      },
      573: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            function r() {
              for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
              var a = null;
              return (
                t.forEach(function (e) {
                  if (null == a) {
                    var t = e.apply(void 0, n);
                    null != t && (a = t);
                  }
                }),
                a
              );
            }
            return (0, i.default)(r);
          });
        var r,
          a = n(54),
          i = (r = a) && r.__esModule ? r : { default: r };
        e.exports = t.default;
      },
      54: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function (e) {
            function t(t, n, r, a, i, o) {
              var u = a || "<<anonymous>>",
                l = o || r;
              if (null == n[r])
                return t ? new Error("Required " + i + " `" + l + "` was not specified in `" + u + "`.") : null;
              for (var s = arguments.length, c = Array(s > 6 ? s - 6 : 0), f = 6; f < s; f++) c[f - 6] = arguments[f];
              return e.apply(void 0, [n, r, u, i, l].concat(c));
            }
            var n = t.bind(null, !1);
            return (n.isRequired = t.bind(null, !0)), n;
          }),
          (e.exports = t.default);
      },
      888: function (e, t, n) {
        "use strict";
        var r = n(47);
        function a() {}
        function i() {}
        (i.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, i, o) {
              if (o !== r) {
                var u = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((u.name = "Invariant Violation"), u);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      7: function (e, t, n) {
        e.exports = n(888)();
      },
      47: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(725),
          i = n(296);
        function o(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(o(227));
        var u = new Set(),
          l = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
        }
        var f = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          h = {},
          m = {};
        function v(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
            g[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
            g[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 === a.type
            : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return !!p.call(m, e) || (!p.call(h, e) && (d.test(e) ? (m[e] = !0) : ((h[e] = !0), !1)));
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = 60103,
          E = 60106,
          S = 60107,
          C = 60108,
          P = 60114,
          O = 60109,
          _ = 60110,
          j = 60112,
          T = 60113,
          R = 60120,
          A = 60115,
          N = 60116,
          M = 60121,
          L = 60128,
          I = 60129,
          z = 60130,
          F = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var D = Symbol.for;
          (k = D("react.element")),
            (E = D("react.portal")),
            (S = D("react.fragment")),
            (C = D("react.strict_mode")),
            (P = D("react.profiler")),
            (O = D("react.provider")),
            (_ = D("react.context")),
            (j = D("react.forward_ref")),
            (T = D("react.suspense")),
            (R = D("react.suspense_list")),
            (A = D("react.memo")),
            (N = D("react.lazy")),
            (M = D("react.block")),
            D("react.scope"),
            (L = D("react.opaque.id")),
            (I = D("react.debug_trace_mode")),
            (z = D("react.offscreen")),
            (F = D("react.legacy_hidden"));
        }
        var B,
          W = "function" === typeof Symbol && Symbol.iterator;
        function U(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (W && e[W]) || e["@@iterator"])
            ? e
            : null;
        }
        function V(e) {
          if (void 0 === B)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              B = (t && t[1]) || "";
            }
          return "\n" + B + e;
        }
        var H = !1;
        function $(e, t) {
          if (!e || H) return "";
          H = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (l) {
                  var r = l;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (l) {
                  r = l;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (l) {
                r = l;
              }
              e();
            }
          } catch (l) {
            if (l && r && "string" === typeof l.stack) {
              for (
                var a = l.stack.split("\n"), i = r.stack.split("\n"), o = a.length - 1, u = i.length - 1;
                1 <= o && 0 <= u && a[o] !== i[u];

              )
                u--;
              for (; 1 <= o && 0 <= u; o--, u--)
                if (a[o] !== i[u]) {
                  if (1 !== o || 1 !== u)
                    do {
                      if ((o--, 0 > --u || a[o] !== i[u])) return "\n" + a[o].replace(" at new ", " at ");
                    } while (1 <= o && 0 <= u);
                  break;
                }
            }
          } finally {
            (H = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? V(e) : "";
        }
        function q(e) {
          switch (e.tag) {
            case 5:
              return V(e.type);
            case 16:
              return V("Lazy");
            case 13:
              return V("Suspense");
            case 19:
              return V("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = $(e.type, !1));
            case 11:
              return (e = $(e.type.render, !1));
            case 22:
              return (e = $(e.type._render, !1));
            case 1:
              return (e = $(e.type, !0));
            default:
              return "";
          }
        }
        function K(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case E:
              return "Portal";
            case P:
              return "Profiler";
            case C:
              return "StrictMode";
            case T:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || "Context") + ".Consumer";
              case O:
                return (e._context.displayName || "Context") + ".Provider";
              case j:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case A:
                return K(e.type);
              case M:
                return K(e._render);
              case N:
                (t = e._payload), (e = e._init);
                try {
                  return K(e(t));
                } catch (n) {}
            }
          return null;
        }
        function Y(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function G(e) {
          var t = e.type;
          return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = G(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function X(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return e && (r = G(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
        }
        function J(e) {
          if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Z(e, t) {
          var n = t.checked;
          return a({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Y(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && w(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = Y(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ae(e, t.type, n)
            : t.hasOwnProperty("defaultValue") && ae(e, t.type, Y(t.defaultValue)),
            null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value))) return;
            (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ae(e, t, n) {
          ("number" === t && J(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ie(e, t) {
          return (
            (e = a({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function oe(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + Y(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n) return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ue(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return a({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
        }
        function le(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: Y(n) };
        }
        function se(e, t) {
          var n = Y(t.value),
            r = Y(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
        }
        var fe = "http://www.w3.org/1999/xhtml",
          de = "http://www.w3.org/2000/svg";
        function pe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function he(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? pe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var me,
          ve,
          ge =
            ((ve = function (e, t) {
              if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
              else {
                for (
                  (me = me || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = me.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ve(e, t);
                  });
                }
              : ve);
        function ye(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var be = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          we = ["Webkit", "ms", "Moz", "O"];
        function xe(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n || "number" !== typeof t || 0 === t || (be.hasOwnProperty(e) && be[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ke(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = xe(n, t[n], r);
              "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(be).forEach(function (e) {
          we.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (be[t] = be[e]);
          });
        });
        var Ee = a(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function Se(e, t) {
          if (t) {
            if (Ee[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style) throw Error(o(62));
          }
        }
        function Ce(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function Pe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Oe = null,
          _e = null,
          je = null;
        function Te(e) {
          if ((e = ra(e))) {
            if ("function" !== typeof Oe) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ia(t)), Oe(e.stateNode, e.type, t));
          }
        }
        function Re(e) {
          _e ? (je ? je.push(e) : (je = [e])) : (_e = e);
        }
        function Ae() {
          if (_e) {
            var e = _e,
              t = je;
            if (((je = _e = null), Te(e), t)) for (e = 0; e < t.length; e++) Te(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function Me(e, t, n, r, a) {
          return e(t, n, r, a);
        }
        function Le() {}
        var Ie = Ne,
          ze = !1,
          Fe = !1;
        function De() {
          (null === _e && null === je) || (Le(), Ae());
        }
        function Be(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ia(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var We = !1;
        if (f)
          try {
            var Ue = {};
            Object.defineProperty(Ue, "passive", {
              get: function () {
                We = !0;
              },
            }),
              window.addEventListener("test", Ue, Ue),
              window.removeEventListener("test", Ue, Ue);
          } catch (ve) {
            We = !1;
          }
        function Ve(e, t, n, r, a, i, o, u, l) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var He = !1,
          $e = null,
          qe = !1,
          Ke = null,
          Ye = {
            onError: function (e) {
              (He = !0), ($e = e);
            },
          };
        function Ge(e, t, n, r, a, i, o, u, l) {
          (He = !1), ($e = null), Ve.apply(Ye, arguments);
        }
        function Qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Xe(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
          }
          return null;
        }
        function Je(e) {
          if (Qe(e) !== e) throw Error(o(188));
        }
        function Ze(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Qe(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return Je(a), e;
                    if (i === r) return Je(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var u = !1, l = a.child; l; ) {
                    if (l === n) {
                      (u = !0), (n = a), (r = i);
                      break;
                    }
                    if (l === r) {
                      (u = !0), (r = a), (n = i);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!u) {
                    for (l = i.child; l; ) {
                      if (l === n) {
                        (u = !0), (n = i), (r = a);
                        break;
                      }
                      if (l === r) {
                        (u = !0), (r = i), (n = a);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!u) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function et(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var tt,
          nt,
          rt,
          at,
          it = !1,
          ot = [],
          ut = null,
          lt = null,
          st = null,
          ct = new Map(),
          ft = new Map(),
          dt = [],
          pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function ht(e, t, n, r, a) {
          return { blockedOn: e, domEventName: t, eventSystemFlags: 16 | n, nativeEvent: a, targetContainers: [r] };
        }
        function mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              ut = null;
              break;
            case "dragenter":
            case "dragleave":
              lt = null;
              break;
            case "mouseover":
            case "mouseout":
              st = null;
              break;
            case "pointerover":
            case "pointerout":
              ct.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ft.delete(t.pointerId);
          }
        }
        function vt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = ht(t, n, r, a, i)), null !== t && null !== (t = ra(t)) && nt(t), e)
            : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
        }
        function gt(e) {
          var t = na(e.target);
          if (null !== t) {
            var n = Qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Xe(n)))
                  return (
                    (e.blockedOn = t),
                    void at(e.lanePriority, function () {
                      i.unstable_runWithPriority(e.priority, function () {
                        rt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function yt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = ra(n)) && nt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function bt(e, t, n) {
          yt(e) && n.delete(t);
        }
        function wt() {
          for (it = !1; 0 < ot.length; ) {
            var e = ot[0];
            if (null !== e.blockedOn) {
              null !== (e = ra(e.blockedOn)) && tt(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && ot.shift();
          }
          null !== ut && yt(ut) && (ut = null),
            null !== lt && yt(lt) && (lt = null),
            null !== st && yt(st) && (st = null),
            ct.forEach(bt),
            ft.forEach(bt);
        }
        function xt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null), it || ((it = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, wt)));
        }
        function kt(e) {
          function t(t) {
            return xt(t, e);
          }
          if (0 < ot.length) {
            xt(ot[0], e);
            for (var n = 1; n < ot.length; n++) {
              var r = ot[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== ut && xt(ut, e),
              null !== lt && xt(lt, e),
              null !== st && xt(st, e),
              ct.forEach(t),
              ft.forEach(t),
              n = 0;
            n < dt.length;
            n++
          )
            (r = dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < dt.length && null === (n = dt[0]).blockedOn; ) gt(n), null === n.blockedOn && dt.shift();
        }
        function Et(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n
          );
        }
        var St = {
            animationend: Et("Animation", "AnimationEnd"),
            animationiteration: Et("Animation", "AnimationIteration"),
            animationstart: Et("Animation", "AnimationStart"),
            transitionend: Et("Transition", "TransitionEnd"),
          },
          Ct = {},
          Pt = {};
        function Ot(e) {
          if (Ct[e]) return Ct[e];
          if (!St[e]) return e;
          var t,
            n = St[e];
          for (t in n) if (n.hasOwnProperty(t) && t in Pt) return (Ct[e] = n[t]);
          return e;
        }
        f &&
          ((Pt = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete St.animationend.animation,
            delete St.animationiteration.animation,
            delete St.animationstart.animation),
          "TransitionEvent" in window || delete St.transitionend.transition);
        var _t = Ot("animationend"),
          jt = Ot("animationiteration"),
          Tt = Ot("animationstart"),
          Rt = Ot("transitionend"),
          At = new Map(),
          Nt = new Map(),
          Mt = [
            "abort",
            "abort",
            _t,
            "animationEnd",
            jt,
            "animationIteration",
            Tt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Rt,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function Lt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              a = e[n + 1];
            (a = "on" + (a[0].toUpperCase() + a.slice(1))), Nt.set(r, t), At.set(r, a), s(a, [r]);
          }
        }
        (0, i.unstable_now)();
        var It = 8;
        function zt(e) {
          if (0 !== (1 & e)) return (It = 15), 1;
          if (0 !== (2 & e)) return (It = 14), 2;
          if (0 !== (4 & e)) return (It = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((It = 12), t)
            : 0 !== (32 & e)
            ? ((It = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((It = 10), t)
            : 0 !== (256 & e)
            ? ((It = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((It = 8), t)
            : 0 !== (4096 & e)
            ? ((It = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((It = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((It = 5), t)
            : 67108864 & e
            ? ((It = 4), 67108864)
            : 0 !== (134217728 & e)
            ? ((It = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((It = 2), t)
            : 0 !== (1073741824 & e)
            ? ((It = 1), 1073741824)
            : ((It = 8), e);
        }
        function Ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (It = 0);
          var r = 0,
            a = 0,
            i = e.expiredLanes,
            o = e.suspendedLanes,
            u = e.pingedLanes;
          if (0 !== i) (r = i), (a = It = 15);
          else if (0 !== (i = 134217727 & n)) {
            var l = i & ~o;
            0 !== l ? ((r = zt(l)), (a = It)) : 0 !== (u &= i) && ((r = zt(u)), (a = It));
          } else 0 !== (i = n & ~o) ? ((r = zt(i)), (a = It)) : 0 !== u && ((r = zt(u)), (a = It));
          if (0 === r) return 0;
          if (((r = n & (((0 > (r = 31 - Ht(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== t && t !== r && 0 === (t & o))) {
            if ((zt(t), a <= It)) return t;
            It = a;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; ) (a = 1 << (n = 31 - Ht(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function Dt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function Bt(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Wt(24 & ~t)) ? Bt(10, t) : e;
            case 10:
              return 0 === (e = Wt(192 & ~t)) ? Bt(8, t) : e;
            case 8:
              return 0 === (e = Wt(3584 & ~t)) && 0 === (e = Wt(4186112 & ~t)) && (e = 512), e;
            case 2:
              return 0 === (t = Wt(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(o(358, e));
        }
        function Wt(e) {
          return e & -e;
        }
        function Ut(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Vt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(t = 31 - Ht(t))] = n);
        }
        var Ht = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - (($t(e) / qt) | 0)) | 0;
              },
          $t = Math.log,
          qt = Math.LN2;
        var Kt = i.unstable_UserBlockingPriority,
          Yt = i.unstable_runWithPriority,
          Gt = !0;
        function Qt(e, t, n, r) {
          ze || Le();
          var a = Jt,
            i = ze;
          ze = !0;
          try {
            Me(a, e, t, n, r);
          } finally {
            (ze = i) || De();
          }
        }
        function Xt(e, t, n, r) {
          Yt(Kt, Jt.bind(null, e, t, n, r));
        }
        function Jt(e, t, n, r) {
          var a;
          if (Gt)
            if ((a = 0 === (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e)) (e = ht(null, e, t, n, r)), ot.push(e);
            else {
              var i = Zt(e, t, n, r);
              if (null === i) a && mt(e, r);
              else {
                if (a) {
                  if (-1 < pt.indexOf(e)) return (e = ht(i, e, t, n, r)), void ot.push(e);
                  if (
                    (function (e, t, n, r, a) {
                      switch (t) {
                        case "focusin":
                          return (ut = vt(ut, e, t, n, r, a)), !0;
                        case "dragenter":
                          return (lt = vt(lt, e, t, n, r, a)), !0;
                        case "mouseover":
                          return (st = vt(st, e, t, n, r, a)), !0;
                        case "pointerover":
                          var i = a.pointerId;
                          return ct.set(i, vt(ct.get(i) || null, e, t, n, r, a)), !0;
                        case "gotpointercapture":
                          return (i = a.pointerId), ft.set(i, vt(ft.get(i) || null, e, t, n, r, a)), !0;
                      }
                      return !1;
                    })(i, e, t, n, r)
                  )
                    return;
                  mt(e, r);
                }
                Lr(e, t, r, null, n);
              }
            }
        }
        function Zt(e, t, n, r) {
          var a = Pe(r);
          if (null !== (a = na(a))) {
            var i = Qe(a);
            if (null === i) a = null;
            else {
              var o = i.tag;
              if (13 === o) {
                if (null !== (a = Xe(i))) return a;
                a = null;
              } else if (3 === o) {
                if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                a = null;
              } else i !== a && (a = null);
            }
          }
          return Lr(e, t, r, a, n), null;
        }
        var en = null,
          tn = null,
          nn = null;
        function rn() {
          if (nn) return nn;
          var e,
            t,
            n = tn,
            r = n.length,
            a = "value" in en ? en.value : en.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (nn = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function an(e) {
          var t = e.keyCode;
          return (
            "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function on() {
          return !0;
        }
        function un() {
          return !1;
        }
        function ln(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue)
                ? on
                : un),
              (this.isPropagationStopped = un),
              this
            );
          }
          return (
            a(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = on));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = on));
              },
              persist: function () {},
              isPersistent: on,
            }),
            t
          );
        }
        var sn,
          cn,
          fn,
          dn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          pn = ln(dn),
          hn = a({}, dn, { view: 0, detail: 0 }),
          mn = ln(hn),
          vn = a({}, hn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: _n,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== fn &&
                    (fn && "mousemove" === e.type
                      ? ((sn = e.screenX - fn.screenX), (cn = e.screenY - fn.screenY))
                      : (cn = sn = 0),
                    (fn = e)),
                  sn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : cn;
            },
          }),
          gn = ln(vn),
          yn = ln(a({}, vn, { dataTransfer: 0 })),
          bn = ln(a({}, hn, { relatedTarget: 0 })),
          wn = ln(a({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          xn = a({}, dn, {
            clipboardData: function (e) {
              return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            },
          }),
          kn = ln(xn),
          En = ln(a({}, dn, { data: 0 })),
          Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Cn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Pn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function On(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = Pn[e]) && !!t[e];
        }
        function _n() {
          return On;
        }
        var jn = a({}, hn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = an(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Cn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: _n,
            charCode: function (e) {
              return "keypress" === e.type ? an(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type ? an(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
          }),
          Tn = ln(jn),
          Rn = ln(
            a({}, vn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          An = ln(
            a({}, hn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: _n,
            })
          ),
          Nn = ln(a({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          Mn = a({}, vn, {
            deltaX: function (e) {
              return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = ln(Mn),
          In = [9, 13, 27, 32],
          zn = f && "CompositionEvent" in window,
          Fn = null;
        f && "documentMode" in document && (Fn = document.documentMode);
        var Dn = f && "TextEvent" in window && !Fn,
          Bn = f && (!zn || (Fn && 8 < Fn && 11 >= Fn)),
          Wn = String.fromCharCode(32),
          Un = !1;
        function Vn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== In.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" === typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var $n = !1;
        var qn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Kn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!qn[e.type] : "textarea" === t;
        }
        function Yn(e, t, n, r) {
          Re(r),
            0 < (t = zr(t, "onChange")).length &&
              ((n = new pn("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          Qn = null;
        function Xn(e) {
          jr(e, 0);
        }
        function Jn(e) {
          if (X(aa(e))) return e;
        }
        function Zn(e, t) {
          if ("change" === e) return t;
        }
        var er = !1;
        if (f) {
          var tr;
          if (f) {
            var nr = "oninput" in document;
            if (!nr) {
              var rr = document.createElement("div");
              rr.setAttribute("oninput", "return;"), (nr = "function" === typeof rr.oninput);
            }
            tr = nr;
          } else tr = !1;
          er = tr && (!document.documentMode || 9 < document.documentMode);
        }
        function ar() {
          Gn && (Gn.detachEvent("onpropertychange", ir), (Qn = Gn = null));
        }
        function ir(e) {
          if ("value" === e.propertyName && Jn(Qn)) {
            var t = [];
            if ((Yn(t, Qn, e, Pe(e)), (e = Xn), ze)) e(t);
            else {
              ze = !0;
              try {
                Ne(e, t);
              } finally {
                (ze = !1), De();
              }
            }
          }
        }
        function or(e, t, n) {
          "focusin" === e ? (ar(), (Qn = n), (Gn = t).attachEvent("onpropertychange", ir)) : "focusout" === e && ar();
        }
        function ur(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Jn(Qn);
        }
        function lr(e, t) {
          if ("click" === e) return Jn(t);
        }
        function sr(e, t) {
          if ("input" === e || "change" === e) return Jn(t);
        }
        var cr =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
                },
          fr = Object.prototype.hasOwnProperty;
        function dr(e, t) {
          if (cr(e, t)) return !0;
          if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) if (!fr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function pr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function hr(e, t) {
          var n,
            r = pr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = pr(r);
          }
        }
        function mr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? mr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function vr() {
          for (var e = window, t = J(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = J((e = t.contentWindow).document);
          }
          return t;
        }
        function gr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var yr = f && "documentMode" in document && 11 >= document.documentMode,
          br = null,
          wr = null,
          xr = null,
          kr = !1;
        function Er(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          kr ||
            null == br ||
            br !== J(r) ||
            ("selectionStart" in (r = br) && gr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                    .anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (xr && dr(xr, r)) ||
              ((xr = r),
              0 < (r = zr(wr, "onSelect")).length &&
                ((t = new pn("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = br))));
        }
        Lt(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          Lt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          Lt(Mt, 2);
        for (
          var Sr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),
            Cr = 0;
          Cr < Sr.length;
          Cr++
        )
          Nt.set(Sr[Cr], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")
          ),
          s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
          s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
          s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
          s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Pr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Or = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));
        function _r(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, u, l, s) {
              if ((Ge.apply(this, arguments), He)) {
                if (!He) throw Error(o(198));
                var c = $e;
                (He = !1), ($e = null), qe || ((qe = !0), (Ke = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function jr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var u = r[o],
                    l = u.instance,
                    s = u.currentTarget;
                  if (((u = u.listener), l !== i && a.isPropagationStopped())) break e;
                  _r(a, u, s), (i = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (u = r[o]).instance),
                    (s = u.currentTarget),
                    (u = u.listener),
                    l !== i && a.isPropagationStopped())
                  )
                    break e;
                  _r(a, u, s), (i = l);
                }
            }
          }
          if (qe) throw ((e = Ke), (qe = !1), (Ke = null), e);
        }
        function Tr(e, t) {
          var n = oa(t),
            r = e + "__bubble";
          n.has(r) || (Mr(t, e, 2, !1), n.add(r));
        }
        var Rr = "_reactListening" + Math.random().toString(36).slice(2);
        function Ar(e) {
          e[Rr] ||
            ((e[Rr] = !0),
            u.forEach(function (t) {
              Or.has(t) || Nr(t, !1, e, null), Nr(t, !0, e, null);
            }));
        }
        function Nr(e, t, n, r) {
          var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
            i = n;
          if (("selectionchange" === e && 9 !== n.nodeType && (i = n.ownerDocument), null !== r && !t && Or.has(e))) {
            if ("scroll" !== e) return;
            (a |= 2), (i = r);
          }
          var o = oa(i),
            u = e + "__" + (t ? "capture" : "bubble");
          o.has(u) || (t && (a |= 4), Mr(i, e, a, t), o.add(u));
        }
        function Mr(e, t, n, r) {
          var a = Nt.get(t);
          switch (void 0 === a ? 2 : a) {
            case 0:
              a = Qt;
              break;
            case 1:
              a = Xt;
              break;
            default:
              a = Jt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !We || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Lr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var u = r.stateNode.containerInfo;
                if (u === a || (8 === u.nodeType && u.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === a || (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== u; ) {
                  if (null === (o = na(u))) return;
                  if (5 === (l = o.tag) || 6 === l) {
                    r = i = o;
                    continue e;
                  }
                  u = u.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (Fe) return e(t, n);
            Fe = !0;
            try {
              Ie(e, t, n);
            } finally {
              (Fe = !1), De();
            }
          })(function () {
            var r = i,
              a = Pe(n),
              o = [];
            e: {
              var u = At.get(e);
              if (void 0 !== u) {
                var l = pn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === an(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Tn;
                    break;
                  case "focusin":
                    (s = "focus"), (l = bn);
                    break;
                  case "focusout":
                    (s = "blur"), (l = bn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = bn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = gn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = yn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = An;
                    break;
                  case _t:
                  case jt:
                  case Tt:
                    l = wn;
                    break;
                  case Rt:
                    l = Nn;
                    break;
                  case "scroll":
                    l = mn;
                    break;
                  case "wheel":
                    l = Ln;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = kn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Rn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== u ? u + "Capture" : null) : u;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m), null !== d && null != (m = Be(h, d)) && c.push(Ir(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length && ((u = new l(u, s, null, n, a)), o.push({ event: u, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(u = "mouseover" === e || "pointerover" === e) ||
                  0 !== (16 & t) ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!na(s) && !s[ea])) &&
                  (l || u) &&
                  ((u = a.window === a ? a : (u = a.ownerDocument) ? u.defaultView || u.parentWindow : window),
                  l
                    ? ((l = r),
                      null !== (s = (s = n.relatedTarget || n.toElement) ? na(s) : null) &&
                        (s !== (f = Qe(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((l = null), (s = r)),
                  l !== s))
              ) {
                if (
                  ((c = gn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Rn), (m = "onPointerLeave"), (d = "onPointerEnter"), (h = "pointer")),
                  (f = null == l ? u : aa(l)),
                  (p = null == s ? u : aa(s)),
                  ((u = new c(m, h + "leave", l, n, a)).target = f),
                  (u.relatedTarget = p),
                  (m = null),
                  na(a) === r && (((c = new c(d, h + "enter", s, n, a)).target = p), (c.relatedTarget = f), (m = c)),
                  (f = m),
                  l && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = l; p; p = Fr(p)) h++;
                    for (p = 0, m = d; m; m = Fr(m)) p++;
                    for (; 0 < h - p; ) (c = Fr(c)), h--;
                    for (; 0 < p - h; ) (d = Fr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Fr(c)), (d = Fr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Dr(o, u, l, c, !1), null !== s && null !== f && Dr(o, f, s, c, !0);
              }
              if (
                "select" === (l = (u = r ? aa(r) : window).nodeName && u.nodeName.toLowerCase()) ||
                ("input" === l && "file" === u.type)
              )
                var v = Zn;
              else if (Kn(u))
                if (er) v = sr;
                else {
                  v = ur;
                  var g = or;
                }
              else
                (l = u.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === u.type || "radio" === u.type) &&
                  (v = lr);
              switch (
                (v && (v = v(e, r))
                  ? Yn(o, v, n, a)
                  : (g && g(e, u, r),
                    "focusout" === e &&
                      (g = u._wrapperState) &&
                      g.controlled &&
                      "number" === u.type &&
                      ae(u, "number", u.value)),
                (g = r ? aa(r) : window),
                e)
              ) {
                case "focusin":
                  (Kn(g) || "true" === g.contentEditable) && ((br = g), (wr = r), (xr = null));
                  break;
                case "focusout":
                  xr = wr = br = null;
                  break;
                case "mousedown":
                  kr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (kr = !1), Er(o, n, a);
                  break;
                case "selectionchange":
                  if (yr) break;
                case "keydown":
                case "keyup":
                  Er(o, n, a);
              }
              var y;
              if (zn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                $n
                  ? Vn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
              b &&
                (Bn &&
                  "ko" !== n.locale &&
                  ($n || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && $n && (y = rn())
                    : ((tn = "value" in (en = a) ? en.value : en.textContent), ($n = !0))),
                0 < (g = zr(r, b)).length &&
                  ((b = new En(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), Wn);
                        case "textInput":
                          return (e = t.data) === Wn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if ($n)
                        return "compositionend" === e || (!zn && Vn(e, t))
                          ? ((e = rn()), (nn = tn = en = null), ($n = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Bn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = zr(r, "onBeforeInput")).length &&
                  ((a = new En("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            jr(o, t);
          });
        }
        function Ir(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function zr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Be(e, n)) && r.unshift(Ir(e, i, a)),
              null != (i = Be(e, t)) && r.push(Ir(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Fr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Dr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var u = n,
              l = u.alternate,
              s = u.stateNode;
            if (null !== l && l === r) break;
            5 === u.tag &&
              null !== s &&
              ((u = s),
              a
                ? null != (l = Be(n, i)) && o.unshift(Ir(n, l, u))
                : a || (null != (l = Be(n, i)) && o.push(Ir(n, l, u)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        function Br() {}
        var Wr = null,
          Ur = null;
        function Vr(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Hr(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var $r = "function" === typeof setTimeout ? setTimeout : void 0,
          qr = "function" === typeof clearTimeout ? clearTimeout : void 0;
        function Kr(e) {
          1 === e.nodeType ? (e.textContent = "") : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
        }
        function Yr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Gr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Qr = 0;
        var Xr = Math.random().toString(36).slice(2),
          Jr = "__reactFiber$" + Xr,
          Zr = "__reactProps$" + Xr,
          ea = "__reactContainer$" + Xr,
          ta = "__reactEvents$" + Xr;
        function na(e) {
          var t = e[Jr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ea] || n[Jr])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Gr(e); null !== e; ) {
                  if ((n = e[Jr])) return n;
                  e = Gr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ra(e) {
          return !(e = e[Jr] || e[ea]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
        }
        function aa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ia(e) {
          return e[Zr] || null;
        }
        function oa(e) {
          var t = e[ta];
          return void 0 === t && (t = e[ta] = new Set()), t;
        }
        var ua = [],
          la = -1;
        function sa(e) {
          return { current: e };
        }
        function ca(e) {
          0 > la || ((e.current = ua[la]), (ua[la] = null), la--);
        }
        function fa(e, t) {
          la++, (ua[la] = e.current), (e.current = t);
        }
        var da = {},
          pa = sa(da),
          ha = sa(!1),
          ma = da;
        function va(e, t) {
          var n = e.type.contextTypes;
          if (!n) return da;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function ga(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function ya() {
          ca(ha), ca(pa);
        }
        function ba(e, t, n) {
          if (pa.current !== da) throw Error(o(168));
          fa(pa, t), fa(ha, n);
        }
        function wa(e, t, n) {
          var r = e.stateNode;
          if (((e = t.childContextTypes), "function" !== typeof r.getChildContext)) return n;
          for (var i in (r = r.getChildContext())) if (!(i in e)) throw Error(o(108, K(t) || "Unknown", i));
          return a({}, n, r);
        }
        function xa(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || da),
            (ma = pa.current),
            fa(pa, e),
            fa(ha, ha.current),
            !0
          );
        }
        function ka(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = wa(e, t, ma)), (r.__reactInternalMemoizedMergedChildContext = e), ca(ha), ca(pa), fa(pa, e))
            : ca(ha),
            fa(ha, n);
        }
        var Ea = null,
          Sa = null,
          Ca = i.unstable_runWithPriority,
          Pa = i.unstable_scheduleCallback,
          Oa = i.unstable_cancelCallback,
          _a = i.unstable_shouldYield,
          ja = i.unstable_requestPaint,
          Ta = i.unstable_now,
          Ra = i.unstable_getCurrentPriorityLevel,
          Aa = i.unstable_ImmediatePriority,
          Na = i.unstable_UserBlockingPriority,
          Ma = i.unstable_NormalPriority,
          La = i.unstable_LowPriority,
          Ia = i.unstable_IdlePriority,
          za = {},
          Fa = void 0 !== ja ? ja : function () {},
          Da = null,
          Ba = null,
          Wa = !1,
          Ua = Ta(),
          Va =
            1e4 > Ua
              ? Ta
              : function () {
                  return Ta() - Ua;
                };
        function Ha() {
          switch (Ra()) {
            case Aa:
              return 99;
            case Na:
              return 98;
            case Ma:
              return 97;
            case La:
              return 96;
            case Ia:
              return 95;
            default:
              throw Error(o(332));
          }
        }
        function $a(e) {
          switch (e) {
            case 99:
              return Aa;
            case 98:
              return Na;
            case 97:
              return Ma;
            case 96:
              return La;
            case 95:
              return Ia;
            default:
              throw Error(o(332));
          }
        }
        function qa(e, t) {
          return (e = $a(e)), Ca(e, t);
        }
        function Ka(e, t, n) {
          return (e = $a(e)), Pa(e, t, n);
        }
        function Ya() {
          if (null !== Ba) {
            var e = Ba;
            (Ba = null), Oa(e);
          }
          Ga();
        }
        function Ga() {
          if (!Wa && null !== Da) {
            Wa = !0;
            var e = 0;
            try {
              var t = Da;
              qa(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Da = null);
            } catch (n) {
              throw (null !== Da && (Da = Da.slice(e + 1)), Pa(Aa, Ya), n);
            } finally {
              Wa = !1;
            }
          }
        }
        var Qa = x.ReactCurrentBatchConfig;
        function Xa(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = a({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Ja = sa(null),
          Za = null,
          ei = null,
          ti = null;
        function ni() {
          ti = ei = Za = null;
        }
        function ri(e) {
          var t = Ja.current;
          ca(Ja), (e.type._context._currentValue = t);
        }
        function ai(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function ii(e, t) {
          (Za = e),
            (ti = ei = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (zo = !0), (e.firstContext = null));
        }
        function oi(e, t) {
          if (ti !== e && !1 !== t && 0 !== t)
            if (
              (("number" === typeof t && 1073741823 !== t) || ((ti = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === ei)
            ) {
              if (null === Za) throw Error(o(308));
              (ei = t), (Za.dependencies = { lanes: 0, firstContext: t, responders: null });
            } else ei = ei.next = t;
          return e._currentValue;
        }
        var ui = !1;
        function li(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function si(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function ci(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function fi(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
          }
        }
        function di(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
        }
        function pi(e, t, n, r) {
          var i = e.updateQueue;
          ui = !1;
          var o = i.firstBaseUpdate,
            u = i.lastBaseUpdate,
            l = i.shared.pending;
          if (null !== l) {
            i.shared.pending = null;
            var s = l,
              c = s.next;
            (s.next = null), null === u ? (o = c) : (u.next = c), (u = s);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== u && (null === d ? (f.firstBaseUpdate = c) : (d.next = c), (f.lastBaseUpdate = s));
            }
          }
          if (null !== o) {
            for (d = i.baseState, u = 0, f = c = s = null; ; ) {
              l = o.lane;
              var p = o.eventTime;
              if ((r & l) === l) {
                null !== f &&
                  (f = f.next =
                    { eventTime: p, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
                e: {
                  var h = e,
                    m = o;
                  switch (((l = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, l);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-4097 & h.flags) | 64;
                    case 0:
                      if (null === (l = "function" === typeof (h = m.payload) ? h.call(p, d, l) : h) || void 0 === l)
                        break e;
                      d = a({}, d, l);
                      break e;
                    case 2:
                      ui = !0;
                  }
                }
                null !== o.callback && ((e.flags |= 32), null === (l = i.effects) ? (i.effects = [o]) : l.push(o));
              } else
                (p = { eventTime: p, lane: l, tag: o.tag, payload: o.payload, callback: o.callback, next: null }),
                  null === f ? ((c = f = p), (s = d)) : (f = f.next = p),
                  (u |= l);
              if (null === (o = o.next)) {
                if (null === (l = i.shared.pending)) break;
                (o = l.next), (l.next = null), (i.lastBaseUpdate = l), (i.shared.pending = null);
              }
            }
            null === f && (s = d),
              (i.baseState = s),
              (i.firstBaseUpdate = c),
              (i.lastBaseUpdate = f),
              (Wu |= u),
              (e.lanes = u),
              (e.memoizedState = d);
          }
        }
        function hi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a)) throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var mi = new r.Component().refs;
        function vi(e, t, n, r) {
          (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : a({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var gi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = dl(),
              a = pl(e),
              i = ci(r, a);
            (i.payload = t), void 0 !== n && null !== n && (i.callback = n), fi(e, i), hl(e, a, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = dl(),
              a = pl(e),
              i = ci(r, a);
            (i.tag = 1), (i.payload = t), void 0 !== n && null !== n && (i.callback = n), fi(e, i), hl(e, a, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = dl(),
              r = pl(e),
              a = ci(n, r);
            (a.tag = 2), void 0 !== t && null !== t && (a.callback = t), fi(e, a), hl(e, r, n);
          },
        };
        function yi(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype || !t.prototype.isPureReactComponent || !dr(n, r) || !dr(a, i);
        }
        function bi(e, t, n) {
          var r = !1,
            a = da,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = oi(i))
              : ((a = ga(t) ? ma : pa.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r) ? va(e, a) : da)),
            (t = new t(n, i)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = gi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function wi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && gi.enqueueReplaceState(t, t.state, null);
        }
        function xi(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = mi), li(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = oi(i))
            : ((i = ga(t) ? ma : pa.current), (a.context = va(e, i))),
            pi(e, n, a, r),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) && (vi(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount && a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
              t !== a.state && gi.enqueueReplaceState(a, a.state, null),
              pi(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4);
        }
        var ki = Array.isArray;
        function Ei(e, t, n) {
          if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = "" + e;
              return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === mi && (t = r.refs = {}), null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Si(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              o(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function Ci(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = ql(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags = 2), n) : r) : ((t.flags = 2), n)) : n
            );
          }
          function u(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ql(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = a(t, n.props)).ref = Ei(e, t, n)), (r.return = e), r)
              : (((r = Kl(n.type, n.key, n.props, null, e.mode, r)).ref = Ei(e, t, n)), (r.return = e), r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Xl(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Yl(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ("string" === typeof t || "number" === typeof t) return ((t = Ql("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return ((n = Kl(t.type, t.key, t.props, null, e.mode, n)).ref = Ei(e, null, t)), (n.return = e), n;
                case E:
                  return ((t = Xl(t, e.mode, n)).return = e), t;
              }
              if (ki(t) || U(t)) return ((t = Yl(t, e.mode, n, null)).return = e), t;
              Si(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if ("string" === typeof n || "number" === typeof n) return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? (n.type === S ? f(e, t, n.props.children, r, a) : s(e, t, n, r)) : null;
                case E:
                  return n.key === a ? c(e, t, n, r) : null;
              }
              if (ki(n) || U(n)) return null !== a ? null : f(e, t, n, r, null);
              Si(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if ("string" === typeof r || "number" === typeof r) return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === S ? f(t, e, r.props.children, a, r.key) : s(t, e, r, a)
                  );
                case E:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
              }
              if (ki(r) || U(r)) return f(t, (e = e.get(n) || null), r, a, null);
              Si(t, r);
            }
            return null;
          }
          function m(a, o, u, l) {
            for (var s = null, c = null, f = o, m = (o = 0), v = null; null !== f && m < u.length; m++) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(a, f, u[m], l);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (o = i(g, o, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = v);
            }
            if (m === u.length) return n(a, f), s;
            if (null === f) {
              for (; m < u.length; m++)
                null !== (f = d(a, u[m], l)) && ((o = i(f, o, m)), null === c ? (s = f) : (c.sibling = f), (c = f));
              return s;
            }
            for (f = r(a, f); m < u.length; m++)
              null !== (v = h(f, a, m, u[m], l)) &&
                (e && null !== v.alternate && f.delete(null === v.key ? m : v.key),
                (o = i(v, o, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              s
            );
          }
          function v(a, u, l, s) {
            var c = U(l);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (l = c.call(l))) throw Error(o(151));
            for (
              var f = (c = null), m = u, v = (u = 0), g = null, y = l.next();
              null !== m && !y.done;
              v++, y = l.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, s);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (u = i(b, u, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = g);
            }
            if (y.done) return n(a, m), c;
            if (null === m) {
              for (; !y.done; v++, y = l.next())
                null !== (y = d(a, y.value, s)) && ((u = i(y, u, v)), null === f ? (c = y) : (f.sibling = y), (f = y));
              return c;
            }
            for (m = r(a, m); !y.done; v++, y = l.next())
              null !== (y = h(m, a, v, y.value, s)) &&
                (e && null !== y.alternate && m.delete(null === y.key ? v : y.key),
                (u = i(y, u, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              c
            );
          }
          return function (e, r, i, l) {
            var s = "object" === typeof i && null !== i && i.type === S && null === i.key;
            s && (i = i.props.children);
            var c = "object" === typeof i && null !== i;
            if (c)
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (c = i.key, s = r; null !== s; ) {
                      if (s.key === c) {
                        if (7 === s.tag) {
                          if (i.type === S) {
                            n(e, s.sibling), ((r = a(s, i.props.children)).return = e), (e = r);
                            break e;
                          }
                        } else if (s.elementType === i.type) {
                          n(e, s.sibling), ((r = a(s, i.props)).ref = Ei(e, s, i)), (r.return = e), (e = r);
                          break e;
                        }
                        n(e, s);
                        break;
                      }
                      t(e, s), (s = s.sibling);
                    }
                    i.type === S
                      ? (((r = Yl(i.props.children, e.mode, l, i.key)).return = e), (e = r))
                      : (((l = Kl(i.type, i.key, i.props, null, e.mode, l)).ref = Ei(e, r, i)),
                        (l.return = e),
                        (e = l));
                  }
                  return u(e);
                case E:
                  e: {
                    for (s = i.key; null !== r; ) {
                      if (r.key === s) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === i.containerInfo &&
                          r.stateNode.implementation === i.implementation
                        ) {
                          n(e, r.sibling), ((r = a(r, i.children || [])).return = e), (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Xl(i, e.mode, l)).return = e), (e = r);
                  }
                  return u(e);
              }
            if ("string" === typeof i || "number" === typeof i)
              return (
                (i = "" + i),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = a(r, i)).return = e), (e = r))
                  : (n(e, r), ((r = Ql(i, e.mode, l)).return = e), (e = r)),
                u(e)
              );
            if (ki(i)) return m(e, r, i, l);
            if (U(i)) return v(e, r, i, l);
            if ((c && Si(e, i), "undefined" === typeof i && !s))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(o(152, K(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var Pi = Ci(!0),
          Oi = Ci(!1),
          _i = {},
          ji = sa(_i),
          Ti = sa(_i),
          Ri = sa(_i);
        function Ai(e) {
          if (e === _i) throw Error(o(174));
          return e;
        }
        function Ni(e, t) {
          switch ((fa(Ri, t), fa(Ti, e), fa(ji, _i), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
              break;
            default:
              t = he((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          ca(ji), fa(ji, t);
        }
        function Mi() {
          ca(ji), ca(Ti), ca(Ri);
        }
        function Li(e) {
          Ai(Ri.current);
          var t = Ai(ji.current),
            n = he(t, e.type);
          t !== n && (fa(Ti, e), fa(ji, n));
        }
        function Ii(e) {
          Ti.current === e && (ca(ji), ca(Ti));
        }
        var zi = sa(0);
        function Fi(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Di = null,
          Bi = null,
          Wi = !1;
        function Ui(e, t) {
          var n = Hl(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Vi(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), !0)
              );
            case 6:
              return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
            default:
              return !1;
          }
        }
        function Hi(e) {
          if (Wi) {
            var t = Bi;
            if (t) {
              var n = t;
              if (!Vi(e, t)) {
                if (!(t = Yr(n.nextSibling)) || !Vi(e, t))
                  return (e.flags = (-1025 & e.flags) | 2), (Wi = !1), void (Di = e);
                Ui(Di, n);
              }
              (Di = e), (Bi = Yr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Wi = !1), (Di = e);
          }
        }
        function $i(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
          Di = e;
        }
        function qi(e) {
          if (e !== Di) return !1;
          if (!Wi) return $i(e), (Wi = !0), !1;
          var t = e.type;
          if (5 !== e.tag || ("head" !== t && "body" !== t && !Hr(t, e.memoizedProps)))
            for (t = Bi; t; ) Ui(e, t), (t = Yr(t.nextSibling));
          if (($i(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Bi = Yr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Bi = null;
            }
          } else Bi = Di ? Yr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Ki() {
          (Bi = Di = null), (Wi = !1);
        }
        var Yi = [];
        function Gi() {
          for (var e = 0; e < Yi.length; e++) Yi[e]._workInProgressVersionPrimary = null;
          Yi.length = 0;
        }
        var Qi = x.ReactCurrentDispatcher,
          Xi = x.ReactCurrentBatchConfig,
          Ji = 0,
          Zi = null,
          eo = null,
          to = null,
          no = !1,
          ro = !1;
        function ao() {
          throw Error(o(321));
        }
        function io(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!cr(e[n], t[n])) return !1;
          return !0;
        }
        function oo(e, t, n, r, a, i) {
          if (
            ((Ji = i),
            (Zi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Qi.current = null === e || null === e.memoizedState ? No : Mo),
            (e = n(r, a)),
            ro)
          ) {
            i = 0;
            do {
              if (((ro = !1), !(25 > i))) throw Error(o(301));
              (i += 1), (to = eo = null), (t.updateQueue = null), (Qi.current = Lo), (e = n(r, a));
            } while (ro);
          }
          if (((Qi.current = Ao), (t = null !== eo && null !== eo.next), (Ji = 0), (to = eo = Zi = null), (no = !1), t))
            throw Error(o(300));
          return e;
        }
        function uo() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return null === to ? (Zi.memoizedState = to = e) : (to = to.next = e), to;
        }
        function lo() {
          if (null === eo) {
            var e = Zi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = eo.next;
          var t = null === to ? Zi.memoizedState : to.next;
          if (null !== t) (to = t), (eo = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (eo = e).memoizedState,
              baseState: eo.baseState,
              baseQueue: eo.baseQueue,
              queue: eo.queue,
              next: null,
            }),
              null === to ? (Zi.memoizedState = to = e) : (to = to.next = e);
          }
          return to;
        }
        function so(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function co(e) {
          var t = lo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = eo,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var u = a.next;
              (a.next = i.next), (i.next = u);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (a = a.next), (r = r.baseState);
            var l = (u = i = null),
              s = a;
            do {
              var c = s.lane;
              if ((Ji & c) === c)
                null !== l &&
                  (l = l.next =
                    { lane: 0, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null }),
                  (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
              else {
                var f = {
                  lane: c,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === l ? ((u = l = f), (i = r)) : (l = l.next = f), (Zi.lanes |= c), (Wu |= c);
              }
              s = s.next;
            } while (null !== s && s !== a);
            null === l ? (i = r) : (l.next = u),
              cr(r, t.memoizedState) || (zo = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = l),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function fo(e) {
          var t = lo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var u = (a = a.next);
            do {
              (i = e(i, u.action)), (u = u.next);
            } while (u !== a);
            cr(i, t.memoizedState) || (zo = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function po(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var a = t._workInProgressVersionPrimary;
          if (
            (null !== a
              ? (e = a === r)
              : ((e = e.mutableReadLanes), (e = (Ji & e) === e) && ((t._workInProgressVersionPrimary = r), Yi.push(t))),
            e)
          )
            return n(t._source);
          throw (Yi.push(t), Error(o(350)));
        }
        function ho(e, t, n, r) {
          var a = Nu;
          if (null === a) throw Error(o(349));
          var i = t._getVersion,
            u = i(t._source),
            l = Qi.current,
            s = l.useState(function () {
              return po(a, t, n);
            }),
            c = s[1],
            f = s[0];
          s = to;
          var d = e.memoizedState,
            p = d.refs,
            h = p.getSnapshot,
            m = d.source;
          d = d.subscribe;
          var v = Zi;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            l.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = c);
                var e = i(t._source);
                if (!cr(u, e)) {
                  (e = n(t._source)),
                    cr(f, e) || (c(e), (e = pl(v)), (a.mutableReadLanes |= e & a.pendingLanes)),
                    (e = a.mutableReadLanes),
                    (a.entangledLanes |= e);
                  for (var r = a.entanglements, o = e; 0 < o; ) {
                    var l = 31 - Ht(o),
                      s = 1 << l;
                    (r[l] |= e), (o &= ~s);
                  }
                }
              },
              [n, t, r]
            ),
            l.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = pl(v);
                    a.mutableReadLanes |= r & a.pendingLanes;
                  } catch (i) {
                    n(function () {
                      throw i;
                    });
                  }
                });
              },
              [t, r]
            ),
            (cr(h, n) && cr(m, t) && cr(d, r)) ||
              (((e = { pending: null, dispatch: null, lastRenderedReducer: so, lastRenderedState: f }).dispatch = c =
                Ro.bind(null, Zi, e)),
              (s.queue = e),
              (s.baseQueue = null),
              (f = po(a, t, n)),
              (s.memoizedState = s.baseState = f)),
            f
          );
        }
        function mo(e, t, n) {
          return ho(lo(), e, t, n);
        }
        function vo(e) {
          var t = uo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              { pending: null, dispatch: null, lastRenderedReducer: so, lastRenderedState: e }).dispatch =
              Ro.bind(null, Zi, e)),
            [t.memoizedState, e]
          );
        }
        function go(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Zi.updateQueue)
              ? ((t = { lastEffect: null }), (Zi.updateQueue = t), (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function yo(e) {
          return (e = { current: e }), (uo().memoizedState = e);
        }
        function bo() {
          return lo().memoizedState;
        }
        function wo(e, t, n, r) {
          var a = uo();
          (Zi.flags |= e), (a.memoizedState = go(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function xo(e, t, n, r) {
          var a = lo();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== eo) {
            var o = eo.memoizedState;
            if (((i = o.destroy), null !== r && io(r, o.deps))) return void go(t, n, i, r);
          }
          (Zi.flags |= e), (a.memoizedState = go(1 | t, n, i, r));
        }
        function ko(e, t) {
          return wo(516, 4, e, t);
        }
        function Eo(e, t) {
          return xo(516, 4, e, t);
        }
        function So(e, t) {
          return xo(4, 2, e, t);
        }
        function Co(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Po(e, t, n) {
          return (n = null !== n && void 0 !== n ? n.concat([e]) : null), xo(4, 2, Co.bind(null, t, e), n);
        }
        function Oo() {}
        function _o(e, t) {
          var n = lo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && io(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function jo(e, t) {
          var n = lo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && io(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function To(e, t) {
          var n = Ha();
          qa(98 > n ? 98 : n, function () {
            e(!0);
          }),
            qa(97 < n ? 97 : n, function () {
              var n = Xi.transition;
              Xi.transition = 1;
              try {
                e(!1), t();
              } finally {
                Xi.transition = n;
              }
            });
        }
        function Ro(e, t, n) {
          var r = dl(),
            a = pl(e),
            i = { lane: a, action: n, eagerReducer: null, eagerState: null, next: null },
            o = t.pending;
          if (
            (null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (t.pending = i),
            (o = e.alternate),
            e === Zi || (null !== o && o === Zi))
          )
            ro = no = !0;
          else {
            if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
              try {
                var u = t.lastRenderedState,
                  l = o(u, n);
                if (((i.eagerReducer = o), (i.eagerState = l), cr(l, u))) return;
              } catch (s) {}
            hl(e, a, r);
          }
        }
        var Ao = {
            readContext: oi,
            useCallback: ao,
            useContext: ao,
            useEffect: ao,
            useImperativeHandle: ao,
            useLayoutEffect: ao,
            useMemo: ao,
            useReducer: ao,
            useRef: ao,
            useState: ao,
            useDebugValue: ao,
            useDeferredValue: ao,
            useTransition: ao,
            useMutableSource: ao,
            useOpaqueIdentifier: ao,
            unstable_isNewReconciler: !1,
          },
          No = {
            readContext: oi,
            useCallback: function (e, t) {
              return (uo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: oi,
            useEffect: ko,
            useImperativeHandle: function (e, t, n) {
              return (n = null !== n && void 0 !== n ? n.concat([e]) : null), wo(4, 2, Co.bind(null, t, e), n);
            },
            useLayoutEffect: function (e, t) {
              return wo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = uo();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = uo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch =
                  Ro.bind(null, Zi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: yo,
            useState: vo,
            useDebugValue: Oo,
            useDeferredValue: function (e) {
              var t = vo(e),
                n = t[0],
                r = t[1];
              return (
                ko(
                  function () {
                    var t = Xi.transition;
                    Xi.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xi.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = vo(!1),
                t = e[0];
              return yo((e = To.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = uo();
              return (
                (r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }),
                ho(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Wi) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: L, toString: e, valueOf: e };
                  })(function () {
                    throw (e || ((e = !0), n("r:" + (Qr++).toString(36))), Error(o(355)));
                  }),
                  n = vo(t)[1];
                return (
                  0 === (2 & Zi.mode) &&
                    ((Zi.flags |= 516),
                    go(
                      5,
                      function () {
                        n("r:" + (Qr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return vo((t = "r:" + (Qr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Mo = {
            readContext: oi,
            useCallback: _o,
            useContext: oi,
            useEffect: Eo,
            useImperativeHandle: Po,
            useLayoutEffect: So,
            useMemo: jo,
            useReducer: co,
            useRef: bo,
            useState: function () {
              return co(so);
            },
            useDebugValue: Oo,
            useDeferredValue: function (e) {
              var t = co(so),
                n = t[0],
                r = t[1];
              return (
                Eo(
                  function () {
                    var t = Xi.transition;
                    Xi.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xi.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = co(so)[0];
              return [bo().current, e];
            },
            useMutableSource: mo,
            useOpaqueIdentifier: function () {
              return co(so)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Lo = {
            readContext: oi,
            useCallback: _o,
            useContext: oi,
            useEffect: Eo,
            useImperativeHandle: Po,
            useLayoutEffect: So,
            useMemo: jo,
            useReducer: fo,
            useRef: bo,
            useState: function () {
              return fo(so);
            },
            useDebugValue: Oo,
            useDeferredValue: function (e) {
              var t = fo(so),
                n = t[0],
                r = t[1];
              return (
                Eo(
                  function () {
                    var t = Xi.transition;
                    Xi.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xi.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = fo(so)[0];
              return [bo().current, e];
            },
            useMutableSource: mo,
            useOpaqueIdentifier: function () {
              return fo(so)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Io = x.ReactCurrentOwner,
          zo = !1;
        function Fo(e, t, n, r) {
          t.child = null === e ? Oi(t, null, n, r) : Pi(t, e.child, n, r);
        }
        function Do(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            ii(t, a),
            (r = oo(e, t, n, r, i, a)),
            null === e || zo
              ? ((t.flags |= 1), Fo(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~a), iu(e, t, a))
          );
        }
        function Bo(e, t, n, r, a, i) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              $l(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Kl(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
              : ((t.tag = 15), (t.type = o), Wo(e, t, o, r, a, i));
          }
          return (
            (o = e.child),
            0 === (a & i) && ((a = o.memoizedProps), (n = null !== (n = n.compare) ? n : dr)(a, r) && e.ref === t.ref)
              ? iu(e, t, i)
              : ((t.flags |= 1), ((e = ql(o, r)).ref = t.ref), (e.return = t), (t.child = e))
          );
        }
        function Wo(e, t, n, r, a, i) {
          if (null !== e && dr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((zo = !1), 0 === (i & a))) return (t.lanes = e.lanes), iu(e, t, i);
            0 !== (16384 & e.flags) && (zo = !0);
          }
          return Ho(e, t, n, r, i);
        }
        function Uo(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 === (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), kl(t, n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  kl(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }), kl(t, null !== i ? i.baseLanes : n);
            }
          else null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), kl(t, r);
          return Fo(e, t, a, n), t.child;
        }
        function Vo(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.flags |= 128);
        }
        function Ho(e, t, n, r, a) {
          var i = ga(n) ? ma : pa.current;
          return (
            (i = va(t, i)),
            ii(t, a),
            (n = oo(e, t, n, r, i, a)),
            null === e || zo
              ? ((t.flags |= 1), Fo(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~a), iu(e, t, a))
          );
        }
        function $o(e, t, n, r, a) {
          if (ga(n)) {
            var i = !0;
            xa(t);
          } else i = !1;
          if ((ii(t, a), null === t.stateNode))
            null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              bi(t, n, r),
              xi(t, n, r, a),
              (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              u = t.memoizedProps;
            o.props = u;
            var l = o.context,
              s = n.contextType;
            "object" === typeof s && null !== s ? (s = oi(s)) : (s = va(t, (s = ga(n) ? ma : pa.current)));
            var c = n.getDerivedStateFromProps,
              f = "function" === typeof c || "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((u !== r || l !== s) && wi(t, o, r, s)),
              (ui = !1);
            var d = t.memoizedState;
            (o.state = d),
              pi(t, r, o, a),
              (l = t.memoizedState),
              u !== r || d !== l || ha.current || ui
                ? ("function" === typeof c && (vi(t, n, c, r), (l = t.memoizedState)),
                  (u = ui || yi(t, n, u, r, d, l, s))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount && o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount && (t.flags |= 4))
                    : ("function" === typeof o.componentDidMount && (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = s),
                  (r = u))
                : ("function" === typeof o.componentDidMount && (t.flags |= 4), (r = !1));
          } else {
            (o = t.stateNode),
              si(e, t),
              (u = t.memoizedProps),
              (s = t.type === t.elementType ? u : Xa(t.type, u)),
              (o.props = s),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = oi(l))
                : (l = va(t, (l = ga(n) ? ma : pa.current)));
            var p = n.getDerivedStateFromProps;
            (c = "function" === typeof p || "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((u !== f || d !== l) && wi(t, o, r, l)),
              (ui = !1),
              (d = t.memoizedState),
              (o.state = d),
              pi(t, r, o, a);
            var h = t.memoizedState;
            u !== f || d !== h || ha.current || ui
              ? ("function" === typeof p && (vi(t, n, p, r), (h = t.memoizedState)),
                (s = ui || yi(t, n, s, r, d, h, l))
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(r, h, l),
                      "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof o.componentDidUpdate && (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate && (t.flags |= 256))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = l),
                (r = s))
              : ("function" !== typeof o.componentDidUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return qo(e, t, n, r, i, a);
        }
        function qo(e, t, n, r, a, i) {
          Vo(e, t);
          var o = 0 !== (64 & t.flags);
          if (!r && !o) return a && ka(t, n, !1), iu(e, t, i);
          (r = t.stateNode), (Io.current = t);
          var u = o && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && o ? ((t.child = Pi(t, e.child, null, i)), (t.child = Pi(t, null, u, i))) : Fo(e, t, u, i),
            (t.memoizedState = r.state),
            a && ka(t, n, !0),
            t.child
          );
        }
        function Ko(e) {
          var t = e.stateNode;
          t.pendingContext
            ? ba(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ba(0, t.context, !1),
            Ni(e, t.containerInfo);
        }
        var Yo,
          Go,
          Qo,
          Xo = { dehydrated: null, retryLane: 0 };
        function Jo(e, t, n) {
          var r,
            a = t.pendingProps,
            i = zi.current,
            o = !1;
          return (
            (r = 0 !== (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((o = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === a.fallback ||
                !0 === a.unstable_avoidThisFallback ||
                (i |= 1),
            fa(zi, 1 & i),
            null === e
              ? (void 0 !== a.fallback && Hi(t),
                (e = a.children),
                (i = a.fallback),
                o
                  ? ((e = Zo(t, e, i, n)), (t.child.memoizedState = { baseLanes: n }), (t.memoizedState = Xo), e)
                  : "number" === typeof a.unstable_expectedLoadTime
                  ? ((e = Zo(t, e, i, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Xo),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Gl({ mode: "visible", children: e }, t.mode, n, null)).return = t), (t.child = n)))
              : (e.memoizedState,
                o
                  ? ((a = tu(e, t, a.children, a.fallback, n)),
                    (o = t.child),
                    (i = e.child.memoizedState),
                    (o.memoizedState = null === i ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
                    (o.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Xo),
                    a)
                  : ((n = eu(e, t, a.children, n)), (t.memoizedState = null), n))
          );
        }
        function Zo(e, t, n, r) {
          var a = e.mode,
            i = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 === (2 & a) && null !== i ? ((i.childLanes = 0), (i.pendingProps = t)) : (i = Gl(t, a, 0, null)),
            (n = Yl(n, a, r, null)),
            (i.return = e),
            (n.return = e),
            (i.sibling = n),
            (e.child = i),
            n
          );
        }
        function eu(e, t, n, r) {
          var a = e.child;
          return (
            (e = a.sibling),
            (n = ql(a, { mode: "visible", children: n })),
            0 === (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function tu(e, t, n, r, a) {
          var i = t.mode,
            o = e.child;
          e = o.sibling;
          var u = { mode: "hidden", children: n };
          return (
            0 === (2 & i) && t.child !== o
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = u),
                null !== (o = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect), (t.lastEffect = o), (o.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = ql(o, u)),
            null !== e ? (r = ql(e, r)) : ((r = Yl(r, i, a, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function nu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), ai(e.return, t);
        }
        function ru(e, t, n, r, a, i) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
                lastEffect: i,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a),
              (o.lastEffect = i));
        }
        function au(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((Fo(e, t, r.children, n), 0 !== (2 & (r = zi.current)))) (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 !== (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && nu(e, n);
                else if (19 === e.tag) nu(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((fa(zi, r), 0 === (2 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === Fi(e) && (a = n), (n = n.sibling);
                null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
                  ru(t, !1, a, n, i, t.lastEffect);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === Fi(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                ru(t, !0, n, null, i, t.lastEffect);
                break;
              case "together":
                ru(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function iu(e, t, n) {
          if ((null !== e && (t.dependencies = e.dependencies), (Wu |= t.lanes), 0 !== (n & t.childLanes))) {
            if (null !== e && t.child !== e.child) throw Error(o(153));
            if (null !== t.child) {
              for (n = ql((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
                (e = e.sibling), ((n = n.sibling = ql(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function ou(e, t) {
          if (!Wi)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
            }
        }
        function uu(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return ga(t.type) && ya(), null;
            case 3:
              return (
                Mi(),
                ca(ha),
                ca(pa),
                Gi(),
                (r = t.stateNode).pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) || (qi(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Ii(t);
              var i = Ai(Ri.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Go(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return null;
                }
                if (((e = Ai(ji.current)), qi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var u = t.memoizedProps;
                  switch (((r[Jr] = t), (r[Zr] = u), n)) {
                    case "dialog":
                      Tr("cancel", r), Tr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Pr.length; e++) Tr(Pr[e], r);
                      break;
                    case "source":
                      Tr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", r), Tr("load", r);
                      break;
                    case "details":
                      Tr("toggle", r);
                      break;
                    case "input":
                      ee(r, u), Tr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!u.multiple }), Tr("invalid", r);
                      break;
                    case "textarea":
                      le(r, u), Tr("invalid", r);
                  }
                  for (var s in (Se(n, u), (e = null), u))
                    u.hasOwnProperty(s) &&
                      ((i = u[s]),
                      "children" === s
                        ? "string" === typeof i
                          ? r.textContent !== i && (e = ["children", i])
                          : "number" === typeof i && r.textContent !== "" + i && (e = ["children", "" + i])
                        : l.hasOwnProperty(s) && null != i && "onScroll" === s && Tr("scroll", r));
                  switch (n) {
                    case "input":
                      Q(r), re(r, u, !0);
                      break;
                    case "textarea":
                      Q(r), ce(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof u.onClick && (r.onclick = Br);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((s = 9 === i.nodeType ? i : i.ownerDocument),
                    e === fe && (e = pe(n)),
                    e === fe
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML = "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[Jr] = t),
                    (e[Zr] = r),
                    Yo(e, t),
                    (t.stateNode = e),
                    (s = Ce(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Tr("cancel", e), Tr("close", e), (i = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Tr("load", e), (i = r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Pr.length; i++) Tr(Pr[i], e);
                      i = r;
                      break;
                    case "source":
                      Tr("error", e), (i = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Tr("error", e), Tr("load", e), (i = r);
                      break;
                    case "details":
                      Tr("toggle", e), (i = r);
                      break;
                    case "input":
                      ee(e, r), (i = Z(e, r)), Tr("invalid", e);
                      break;
                    case "option":
                      i = ie(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (i = a({}, r, { value: void 0 })),
                        Tr("invalid", e);
                      break;
                    case "textarea":
                      le(e, r), (i = ue(e, r)), Tr("invalid", e);
                      break;
                    default:
                      i = r;
                  }
                  Se(n, i);
                  var c = i;
                  for (u in c)
                    if (c.hasOwnProperty(u)) {
                      var f = c[u];
                      "style" === u
                        ? ke(e, f)
                        : "dangerouslySetInnerHTML" === u
                        ? null != (f = f ? f.__html : void 0) && ge(e, f)
                        : "children" === u
                        ? "string" === typeof f
                          ? ("textarea" !== n || "" !== f) && ye(e, f)
                          : "number" === typeof f && ye(e, "" + f)
                        : "suppressContentEditableWarning" !== u &&
                          "suppressHydrationWarning" !== u &&
                          "autoFocus" !== u &&
                          (l.hasOwnProperty(u)
                            ? null != f && "onScroll" === u && Tr("scroll", e)
                            : null != f && w(e, u, f, s));
                    }
                  switch (n) {
                    case "input":
                      Q(e), re(e, r, !1);
                      break;
                    case "textarea":
                      Q(e), ce(e);
                      break;
                    case "option":
                      null != r.value && e.setAttribute("value", "" + Y(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (u = r.value)
                          ? oe(e, !!r.multiple, u, !1)
                          : null != r.defaultValue && oe(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" === typeof i.onClick && (e.onclick = Br);
                  }
                  Vr(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Qo(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode) throw Error(o(166));
                (n = Ai(Ri.current)),
                  Ai(ji.current),
                  qi(t)
                    ? ((r = t.stateNode), (n = t.memoizedProps), (r[Jr] = t), r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Jr] = t), (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                ca(zi),
                (r = t.memoizedState),
                0 !== (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e ? void 0 !== t.memoizedProps.fallback && qi(t) : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 !== (2 & t.mode) &&
                      ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 !== (1 & zi.current)
                        ? 0 === Fu && (Fu = 3)
                        : ((0 !== Fu && 3 !== Fu) || (Fu = 4),
                          null === Nu || (0 === (134217727 & Wu) && 0 === (134217727 & Uu)) || yl(Nu, Lu))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Mi(), null === e && Ar(t.stateNode.containerInfo), null;
            case 10:
              return ri(t), null;
            case 19:
              if ((ca(zi), null === (r = t.memoizedState))) return null;
              if (((u = 0 !== (64 & t.flags)), null === (s = r.rendering)))
                if (u) ou(r, !1);
                else {
                  if (0 !== Fu || (null !== e && 0 !== (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = Fi(e))) {
                        for (
                          t.flags |= 64,
                            ou(r, !1),
                            null !== (u = s.updateQueue) && ((t.updateQueue = u), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((u = n).flags &= 2),
                            (u.nextEffect = null),
                            (u.firstEffect = null),
                            (u.lastEffect = null),
                            null === (s = u.alternate)
                              ? ((u.childLanes = 0),
                                (u.lanes = e),
                                (u.child = null),
                                (u.memoizedProps = null),
                                (u.memoizedState = null),
                                (u.updateQueue = null),
                                (u.dependencies = null),
                                (u.stateNode = null))
                              : ((u.childLanes = s.childLanes),
                                (u.lanes = s.lanes),
                                (u.child = s.child),
                                (u.memoizedProps = s.memoizedProps),
                                (u.memoizedState = s.memoizedState),
                                (u.updateQueue = s.updateQueue),
                                (u.type = s.type),
                                (e = s.dependencies),
                                (u.dependencies =
                                  null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return fa(zi, (1 & zi.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail && Va() > qu && ((t.flags |= 64), (u = !0), ou(r, !1), (t.lanes = 33554432));
                }
              else {
                if (!u)
                  if (null !== (e = Fi(s))) {
                    if (
                      ((t.flags |= 64),
                      (u = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      ou(r, !0),
                      null === r.tail && "hidden" === r.tailMode && !s.alternate && !Wi)
                    )
                      return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                  } else
                    2 * Va() - r.renderingStartTime > qu &&
                      1073741824 !== n &&
                      ((t.flags |= 64), (u = !0), ou(r, !1), (t.lanes = 33554432));
                r.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = r.last) ? (n.sibling = s) : (t.child = s), (r.last = s));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Va()),
                  (n.sibling = null),
                  (t = zi.current),
                  fa(zi, u ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                El(),
                null !== e &&
                  (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(o(156, t.tag));
        }
        function lu(e) {
          switch (e.tag) {
            case 1:
              ga(e.type) && ya();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Mi(), ca(ha), ca(pa), Gi(), 0 !== (64 & (t = e.flags)))) throw Error(o(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Ii(e), null;
            case 13:
              return ca(zi), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 19:
              return ca(zi), null;
            case 4:
              return Mi(), null;
            case 10:
              return ri(e), null;
            case 23:
            case 24:
              return El(), null;
            default:
              return null;
          }
        }
        function su(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += q(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a };
        }
        function cu(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        (Yo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Go = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), Ai(ji.current);
              var o,
                u = null;
              switch (n) {
                case "input":
                  (i = Z(e, i)), (r = Z(e, r)), (u = []);
                  break;
                case "option":
                  (i = ie(e, i)), (r = ie(e, r)), (u = []);
                  break;
                case "select":
                  (i = a({}, i, { value: void 0 })), (r = a({}, r, { value: void 0 })), (u = []);
                  break;
                case "textarea":
                  (i = ue(e, i)), (r = ue(e, r)), (u = []);
                  break;
                default:
                  "function" !== typeof i.onClick && "function" === typeof r.onClick && (e.onclick = Br);
              }
              for (f in (Se(n, r), (n = null), i))
                if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && null != i[f])
                  if ("style" === f) {
                    var s = i[f];
                    for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== f &&
                      "children" !== f &&
                      "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      "autoFocus" !== f &&
                      (l.hasOwnProperty(f) ? u || (u = []) : (u = u || []).push(f, null));
              for (f in r) {
                var c = r[f];
                if (((s = null != i ? i[f] : void 0), r.hasOwnProperty(f) && c !== s && (null != c || null != s)))
                  if ("style" === f)
                    if (s) {
                      for (o in s) !s.hasOwnProperty(o) || (c && c.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
                      for (o in c) c.hasOwnProperty(o) && s[o] !== c[o] && (n || (n = {}), (n[o] = c[o]));
                    } else n || (u || (u = []), u.push(f, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === f
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (u = u || []).push(f, c))
                      : "children" === f
                      ? ("string" !== typeof c && "number" !== typeof c) || (u = u || []).push(f, "" + c)
                      : "suppressContentEditableWarning" !== f &&
                        "suppressHydrationWarning" !== f &&
                        (l.hasOwnProperty(f)
                          ? (null != c && "onScroll" === f && Tr("scroll", e), u || s === c || (u = []))
                          : "object" === typeof c && null !== c && c.$$typeof === L
                          ? c.toString()
                          : (u = u || []).push(f, c));
              }
              n && (u = u || []).push("style", n);
              var f = u;
              (t.updateQueue = f) && (t.flags |= 4);
            }
          }),
          (Qo = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var fu = "function" === typeof WeakMap ? WeakMap : Map;
        function du(e, t, n) {
          ((n = ci(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Qu || ((Qu = !0), (Xu = r)), cu(0, t);
            }),
            n
          );
        }
        function pu(e, t, n) {
          (n = ci(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            n.payload = function () {
              return cu(0, t), r(a);
            };
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                "function" !== typeof r && (null === Ju ? (Ju = new Set([this])) : Ju.add(this), cu(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" });
              }),
            n
          );
        }
        var hu = "function" === typeof WeakSet ? WeakSet : Set;
        function mu(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (n) {
                Bl(e, n);
              }
            else t.current = null;
        }
        function vu(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Xa(t.type, n), r)),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Kr(t.stateNode.containerInfo));
          }
          throw Error(o(163));
        }
        function gu(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                e = t = t.next;
                do {
                  if (3 === (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                e = t = t.next;
                do {
                  var a = e;
                  (r = a.next), 0 !== (4 & (a = a.tag)) && 0 !== (1 & a) && (zl(n, e), Il(n, e)), (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r = n.elementType === n.type ? t.memoizedProps : Xa(n.type, t.memoizedProps)),
                      e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
                void (null !== (t = n.updateQueue) && hi(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                hi(n, t, e);
              }
              return;
            case 5:
              return (e = n.stateNode), void (null === t && 4 & n.flags && Vr(n.type, n.memoizedProps) && e.focus());
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && kt(n))))
              );
          }
          throw Error(o(163));
        }
        function yu(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" === typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var a = n.memoizedProps.style;
                (a = void 0 !== a && null !== a && a.hasOwnProperty("display") ? a.display : null),
                  (r.style.display = xe("display", a));
              }
            } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function bu(e, t) {
          if (Sa && "function" === typeof Sa.onCommitFiberUnmount)
            try {
              Sa.onCommitFiberUnmount(Ea, t);
            } catch (i) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    a = r.destroy;
                  if (((r = r.tag), void 0 !== a))
                    if (0 !== (4 & r)) zl(t, n);
                    else {
                      r = t;
                      try {
                        a();
                      } catch (i) {
                        Bl(r, i);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if ((mu(t), "function" === typeof (e = t.stateNode).componentWillUnmount))
                try {
                  (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
                } catch (i) {
                  Bl(t, i);
                }
              break;
            case 5:
              mu(t);
              break;
            case 4:
              Cu(e, t);
          }
        }
        function wu(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function xu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ku(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (xu(t)) break e;
              t = t.return;
            }
            throw Error(o(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(o(161));
          }
          16 & n.flags && (ye(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || xu(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? Eu(e, n, t) : Su(e, n, t);
        }
        function Eu(e, t, n) {
          var r = e.tag,
            a = 5 === r || 6 === r;
          if (a)
            (e = a ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) || null !== t.onclick || (t.onclick = Br));
          else if (4 !== r && null !== (e = e.child))
            for (Eu(e, t, n), e = e.sibling; null !== e; ) Eu(e, t, n), (e = e.sibling);
        }
        function Su(e, t, n) {
          var r = e.tag,
            a = 5 === r || 6 === r;
          if (a) (e = a ? e.stateNode : e.stateNode.instance), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (Su(e, t, n), e = e.sibling; null !== e; ) Su(e, t, n), (e = e.sibling);
        }
        function Cu(e, t) {
          for (var n, r, a = t, i = !1; ; ) {
            if (!i) {
              i = a.return;
              e: for (;;) {
                if (null === i) throw Error(o(160));
                switch (((n = i.stateNode), i.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                i = i.return;
              }
              i = !0;
            }
            if (5 === a.tag || 6 === a.tag) {
              e: for (var u = e, l = a, s = l; ; )
                if ((bu(u, s), null !== s.child && 4 !== s.tag)) (s.child.return = s), (s = s.child);
                else {
                  if (s === l) break e;
                  for (; null === s.sibling; ) {
                    if (null === s.return || s.return === l) break e;
                    s = s.return;
                  }
                  (s.sibling.return = s.return), (s = s.sibling);
                }
              r
                ? ((u = n), (l = a.stateNode), 8 === u.nodeType ? u.parentNode.removeChild(l) : u.removeChild(l))
                : n.removeChild(a.stateNode);
            } else if (4 === a.tag) {
              if (null !== a.child) {
                (n = a.stateNode.containerInfo), (r = !0), (a.child.return = a), (a = a.child);
                continue;
              }
            } else if ((bu(e, a), null !== a.child)) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === t) break;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === t) return;
              4 === (a = a.return).tag && (i = !1);
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
        }
        function Pu(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 === (3 & r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()), (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var a = null !== e ? e.memoizedProps : r;
                e = t.type;
                var i = t.updateQueue;
                if (((t.updateQueue = null), null !== i)) {
                  for (
                    n[Zr] = r,
                      "input" === e && "radio" === r.type && null != r.name && te(n, r),
                      Ce(e, a),
                      t = Ce(e, r),
                      a = 0;
                    a < i.length;
                    a += 2
                  ) {
                    var u = i[a],
                      l = i[a + 1];
                    "style" === u
                      ? ke(n, l)
                      : "dangerouslySetInnerHTML" === u
                      ? ge(n, l)
                      : "children" === u
                      ? ye(n, l)
                      : w(n, u, l, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      se(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (i = r.value)
                          ? oe(n, !!r.multiple, i, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? oe(n, !!r.multiple, r.defaultValue, !0)
                              : oe(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(o(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void ((n = t.stateNode).hydrate && ((n.hydrate = !1), kt(n.containerInfo)));
            case 13:
              return null !== t.memoizedState && (($u = Va()), yu(t.child, !0)), void Ou(t);
            case 19:
              return void Ou(t);
            case 23:
            case 24:
              return void yu(t, null !== t.memoizedState);
          }
          throw Error(o(163));
        }
        function Ou(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new hu()),
              t.forEach(function (t) {
                var r = Ul.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function _u(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var ju = Math.ceil,
          Tu = x.ReactCurrentDispatcher,
          Ru = x.ReactCurrentOwner,
          Au = 0,
          Nu = null,
          Mu = null,
          Lu = 0,
          Iu = 0,
          zu = sa(0),
          Fu = 0,
          Du = null,
          Bu = 0,
          Wu = 0,
          Uu = 0,
          Vu = 0,
          Hu = null,
          $u = 0,
          qu = 1 / 0;
        function Ku() {
          qu = Va() + 500;
        }
        var Yu,
          Gu = null,
          Qu = !1,
          Xu = null,
          Ju = null,
          Zu = !1,
          el = null,
          tl = 90,
          nl = [],
          rl = [],
          al = null,
          il = 0,
          ol = null,
          ul = -1,
          ll = 0,
          sl = 0,
          cl = null,
          fl = !1;
        function dl() {
          return 0 !== (48 & Au) ? Va() : -1 !== ul ? ul : (ul = Va());
        }
        function pl(e) {
          if (0 === (2 & (e = e.mode))) return 1;
          if (0 === (4 & e)) return 99 === Ha() ? 1 : 2;
          if ((0 === ll && (ll = Bu), 0 !== Qa.transition)) {
            0 !== sl && (sl = null !== Hu ? Hu.pendingLanes : 0), (e = ll);
            var t = 4186112 & ~sl;
            return 0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t;
          }
          return (
            (e = Ha()),
            0 !== (4 & Au) && 98 === e
              ? (e = Bt(12, ll))
              : (e = Bt(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  ll
                )),
            e
          );
        }
        function hl(e, t, n) {
          if (50 < il) throw ((il = 0), (ol = null), Error(o(185)));
          if (null === (e = ml(e, t))) return null;
          Vt(e, t, n), e === Nu && ((Uu |= t), 4 === Fu && yl(e, Lu));
          var r = Ha();
          1 === t
            ? 0 !== (8 & Au) && 0 === (48 & Au)
              ? bl(e)
              : (vl(e, n), 0 === Au && (Ku(), Ya()))
            : (0 === (4 & Au) || (98 !== r && 99 !== r) || (null === al ? (al = new Set([e])) : al.add(e)), vl(e, n)),
            (Hu = e);
        }
        function ml(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function vl(e, t) {
          for (
            var n = e.callbackNode, r = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes;
            0 < u;

          ) {
            var l = 31 - Ht(u),
              s = 1 << l,
              c = i[l];
            if (-1 === c) {
              if (0 === (s & r) || 0 !== (s & a)) {
                (c = t), zt(s);
                var f = It;
                i[l] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= s);
            u &= ~s;
          }
          if (((r = Ft(e, e === Nu ? Lu : 0)), (t = It), 0 === r))
            null !== n && (n !== za && Oa(n), (e.callbackNode = null), (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== za && Oa(n);
            }
            15 === t
              ? ((n = bl.bind(null, e)), null === Da ? ((Da = [n]), (Ba = Pa(Aa, Ga))) : Da.push(n), (n = za))
              : 14 === t
              ? (n = Ka(99, bl.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(o(358, e));
                  }
                })(t)),
                (n = Ka(n, gl.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function gl(e) {
          if (((ul = -1), (sl = ll = 0), 0 !== (48 & Au))) throw Error(o(327));
          var t = e.callbackNode;
          if (Ll() && e.callbackNode !== t) return null;
          var n = Ft(e, e === Nu ? Lu : 0);
          if (0 === n) return null;
          var r = n,
            a = Au;
          Au |= 16;
          var i = Pl();
          for ((Nu === e && Lu === r) || (Ku(), Sl(e, r)); ; )
            try {
              jl();
              break;
            } catch (l) {
              Cl(e, l);
            }
          if (
            (ni(),
            (Tu.current = i),
            (Au = a),
            null !== Mu ? (r = 0) : ((Nu = null), (Lu = 0), (r = Fu)),
            0 !== (Bu & Uu))
          )
            Sl(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Au |= 64), e.hydrate && ((e.hydrate = !1), Kr(e.containerInfo)), 0 !== (n = Dt(e)) && (r = Ol(e, n))),
              1 === r)
            )
              throw ((t = Du), Sl(e, 0), yl(e, n), vl(e, Va()), t);
            switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
              case 0:
              case 1:
                throw Error(o(345));
              case 2:
              case 5:
                Al(e);
                break;
              case 3:
                if ((yl(e, n), (62914560 & n) === n && 10 < (r = $u + 500 - Va()))) {
                  if (0 !== Ft(e, 0)) break;
                  if (((a = e.suspendedLanes) & n) !== n) {
                    dl(), (e.pingedLanes |= e.suspendedLanes & a);
                    break;
                  }
                  e.timeoutHandle = $r(Al.bind(null, e), r);
                  break;
                }
                Al(e);
                break;
              case 4:
                if ((yl(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, a = -1; 0 < n; ) {
                  var u = 31 - Ht(n);
                  (i = 1 << u), (u = r[u]) > a && (a = u), (n &= ~i);
                }
                if (
                  ((n = a),
                  10 <
                    (n =
                      (120 > (n = Va() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * ju(n / 1960)) - n))
                ) {
                  e.timeoutHandle = $r(Al.bind(null, e), n);
                  break;
                }
                Al(e);
                break;
              default:
                throw Error(o(329));
            }
          }
          return vl(e, Va()), e.callbackNode === t ? gl.bind(null, e) : null;
        }
        function yl(e, t) {
          for (t &= ~Vu, t &= ~Uu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
            var n = 31 - Ht(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function bl(e) {
          if (0 !== (48 & Au)) throw Error(o(327));
          if ((Ll(), e === Nu && 0 !== (e.expiredLanes & Lu))) {
            var t = Lu,
              n = Ol(e, t);
            0 !== (Bu & Uu) && (n = Ol(e, (t = Ft(e, t))));
          } else n = Ol(e, (t = Ft(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Au |= 64), e.hydrate && ((e.hydrate = !1), Kr(e.containerInfo)), 0 !== (t = Dt(e)) && (n = Ol(e, t))),
            1 === n)
          )
            throw ((n = Du), Sl(e, 0), yl(e, t), vl(e, Va()), n);
          return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Al(e), vl(e, Va()), null;
        }
        function wl(e, t) {
          var n = Au;
          Au |= 1;
          try {
            return e(t);
          } finally {
            0 === (Au = n) && (Ku(), Ya());
          }
        }
        function xl(e, t) {
          var n = Au;
          (Au &= -2), (Au |= 8);
          try {
            return e(t);
          } finally {
            0 === (Au = n) && (Ku(), Ya());
          }
        }
        function kl(e, t) {
          fa(zu, Iu), (Iu |= t), (Bu |= t);
        }
        function El() {
          (Iu = zu.current), ca(zu);
        }
        function Sl(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), qr(n)), null !== Mu))
            for (n = Mu.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && ya();
                  break;
                case 3:
                  Mi(), ca(ha), ca(pa), Gi();
                  break;
                case 5:
                  Ii(r);
                  break;
                case 4:
                  Mi();
                  break;
                case 13:
                case 19:
                  ca(zi);
                  break;
                case 10:
                  ri(r);
                  break;
                case 23:
                case 24:
                  El();
              }
              n = n.return;
            }
          (Nu = e), (Mu = ql(e.current, null)), (Lu = Iu = Bu = t), (Fu = 0), (Du = null), (Vu = Uu = Wu = 0);
        }
        function Cl(e, t) {
          for (;;) {
            var n = Mu;
            try {
              if ((ni(), (Qi.current = Ao), no)) {
                for (var r = Zi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                no = !1;
              }
              if (((Ji = 0), (to = eo = Zi = null), (ro = !1), (Ru.current = null), null === n || null === n.return)) {
                (Fu = 1), (Du = t), (Mu = null);
                break;
              }
              e: {
                var i = e,
                  o = n.return,
                  u = n,
                  l = t;
                if (
                  ((t = Lu),
                  (u.flags |= 2048),
                  (u.firstEffect = u.lastEffect = null),
                  null !== l && "object" === typeof l && "function" === typeof l.then)
                ) {
                  var s = l;
                  if (0 === (2 & u.mode)) {
                    var c = u.alternate;
                    c
                      ? ((u.updateQueue = c.updateQueue), (u.memoizedState = c.memoizedState), (u.lanes = c.lanes))
                      : ((u.updateQueue = null), (u.memoizedState = null));
                  }
                  var f = 0 !== (1 & zi.current),
                    d = o;
                  do {
                    var p;
                    if ((p = 13 === d.tag)) {
                      var h = d.memoizedState;
                      if (null !== h) p = null !== h.dehydrated;
                      else {
                        var m = d.memoizedProps;
                        p = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !f);
                      }
                    }
                    if (p) {
                      var v = d.updateQueue;
                      if (null === v) {
                        var g = new Set();
                        g.add(s), (d.updateQueue = g);
                      } else v.add(s);
                      if (0 === (2 & d.mode)) {
                        if (((d.flags |= 64), (u.flags |= 16384), (u.flags &= -2981), 1 === u.tag))
                          if (null === u.alternate) u.tag = 17;
                          else {
                            var y = ci(-1, 1);
                            (y.tag = 2), fi(u, y);
                          }
                        u.lanes |= 1;
                        break e;
                      }
                      (l = void 0), (u = t);
                      var b = i.pingCache;
                      if (
                        (null === b
                          ? ((b = i.pingCache = new fu()), (l = new Set()), b.set(s, l))
                          : void 0 === (l = b.get(s)) && ((l = new Set()), b.set(s, l)),
                        !l.has(u))
                      ) {
                        l.add(u);
                        var w = Wl.bind(null, i, s, u);
                        s.then(w, w);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  l = Error(
                    (K(u.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== Fu && (Fu = 2), (l = su(l, u)), (d = o);
                do {
                  switch (d.tag) {
                    case 3:
                      (i = l), (d.flags |= 4096), (t &= -t), (d.lanes |= t), di(d, du(0, i, t));
                      break e;
                    case 1:
                      i = l;
                      var x = d.type,
                        k = d.stateNode;
                      if (
                        0 === (64 & d.flags) &&
                        ("function" === typeof x.getDerivedStateFromError ||
                          (null !== k && "function" === typeof k.componentDidCatch && (null === Ju || !Ju.has(k))))
                      ) {
                        (d.flags |= 4096), (t &= -t), (d.lanes |= t), di(d, pu(d, i, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              Rl(n);
            } catch (E) {
              (t = E), Mu === n && null !== n && (Mu = n = n.return);
              continue;
            }
            break;
          }
        }
        function Pl() {
          var e = Tu.current;
          return (Tu.current = Ao), null === e ? Ao : e;
        }
        function Ol(e, t) {
          var n = Au;
          Au |= 16;
          var r = Pl();
          for ((Nu === e && Lu === t) || Sl(e, t); ; )
            try {
              _l();
              break;
            } catch (a) {
              Cl(e, a);
            }
          if ((ni(), (Au = n), (Tu.current = r), null !== Mu)) throw Error(o(261));
          return (Nu = null), (Lu = 0), Fu;
        }
        function _l() {
          for (; null !== Mu; ) Tl(Mu);
        }
        function jl() {
          for (; null !== Mu && !_a(); ) Tl(Mu);
        }
        function Tl(e) {
          var t = Yu(e.alternate, e, Iu);
          (e.memoizedProps = e.pendingProps), null === t ? Rl(e) : (Mu = t), (Ru.current = null);
        }
        function Rl(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (2048 & t.flags))) {
              if (null !== (n = uu(n, t, Iu))) return void (Mu = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 !== (1073741824 & Iu) ||
                0 === (4 & n.mode)
              ) {
                for (var r = 0, a = n.child; null !== a; ) (r |= a.lanes | a.childLanes), (a = a.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 === (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t), (e.lastEffect = t)));
            } else {
              if (null !== (n = lu(t))) return (n.flags &= 2047), void (Mu = n);
              null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Mu = t);
            Mu = t = e;
          } while (null !== t);
          0 === Fu && (Fu = 5);
        }
        function Al(e) {
          var t = Ha();
          return qa(99, Nl.bind(null, e, t)), null;
        }
        function Nl(e, t) {
          do {
            Ll();
          } while (null !== el);
          if (0 !== (48 & Au)) throw Error(o(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(o(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            a = r,
            i = e.pendingLanes & ~a;
          (e.pendingLanes = a),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= a),
            (e.mutableReadLanes &= a),
            (e.entangledLanes &= a),
            (a = e.entanglements);
          for (var u = e.eventTimes, l = e.expirationTimes; 0 < i; ) {
            var s = 31 - Ht(i),
              c = 1 << s;
            (a[s] = 0), (u[s] = -1), (l[s] = -1), (i &= ~c);
          }
          if (
            (null !== al && 0 === (24 & r) && al.has(e) && al.delete(e),
            e === Nu && ((Mu = Nu = null), (Lu = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (((a = Au), (Au |= 32), (Ru.current = null), (Wr = Gt), gr((u = vr())))) {
              if ("selectionStart" in u) l = { start: u.selectionStart, end: u.selectionEnd };
              else
                e: if (
                  ((l = ((l = u.ownerDocument) && l.defaultView) || window),
                  (c = l.getSelection && l.getSelection()) && 0 !== c.rangeCount)
                ) {
                  (l = c.anchorNode), (i = c.anchorOffset), (s = c.focusNode), (c = c.focusOffset);
                  try {
                    l.nodeType, s.nodeType;
                  } catch (P) {
                    l = null;
                    break e;
                  }
                  var f = 0,
                    d = -1,
                    p = -1,
                    h = 0,
                    m = 0,
                    v = u,
                    g = null;
                  t: for (;;) {
                    for (
                      var y;
                      v !== l || (0 !== i && 3 !== v.nodeType) || (d = f + i),
                        v !== s || (0 !== c && 3 !== v.nodeType) || (p = f + c),
                        3 === v.nodeType && (f += v.nodeValue.length),
                        null !== (y = v.firstChild);

                    )
                      (g = v), (v = y);
                    for (;;) {
                      if (v === u) break t;
                      if (
                        (g === l && ++h === i && (d = f), g === s && ++m === c && (p = f), null !== (y = v.nextSibling))
                      )
                        break;
                      g = (v = g).parentNode;
                    }
                    v = y;
                  }
                  l = -1 === d || -1 === p ? null : { start: d, end: p };
                } else l = null;
              l = l || { start: 0, end: 0 };
            } else l = null;
            (Ur = { focusedElem: u, selectionRange: l }), (Gt = !1), (cl = null), (fl = !1), (Gu = r);
            do {
              try {
                Ml();
              } catch (P) {
                if (null === Gu) throw Error(o(330));
                Bl(Gu, P), (Gu = Gu.nextEffect);
              }
            } while (null !== Gu);
            (cl = null), (Gu = r);
            do {
              try {
                for (u = e; null !== Gu; ) {
                  var b = Gu.flags;
                  if ((16 & b && ye(Gu.stateNode, ""), 128 & b)) {
                    var w = Gu.alternate;
                    if (null !== w) {
                      var x = w.ref;
                      null !== x && ("function" === typeof x ? x(null) : (x.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      ku(Gu), (Gu.flags &= -3);
                      break;
                    case 6:
                      ku(Gu), (Gu.flags &= -3), Pu(Gu.alternate, Gu);
                      break;
                    case 1024:
                      Gu.flags &= -1025;
                      break;
                    case 1028:
                      (Gu.flags &= -1025), Pu(Gu.alternate, Gu);
                      break;
                    case 4:
                      Pu(Gu.alternate, Gu);
                      break;
                    case 8:
                      Cu(u, (l = Gu));
                      var k = l.alternate;
                      wu(l), null !== k && wu(k);
                  }
                  Gu = Gu.nextEffect;
                }
              } catch (P) {
                if (null === Gu) throw Error(o(330));
                Bl(Gu, P), (Gu = Gu.nextEffect);
              }
            } while (null !== Gu);
            if (
              ((x = Ur),
              (w = vr()),
              (b = x.focusedElem),
              (u = x.selectionRange),
              w !== b && b && b.ownerDocument && mr(b.ownerDocument.documentElement, b))
            ) {
              null !== u &&
                gr(b) &&
                ((w = u.start),
                void 0 === (x = u.end) && (x = w),
                "selectionStart" in b
                  ? ((b.selectionStart = w), (b.selectionEnd = Math.min(x, b.value.length)))
                  : (x = ((w = b.ownerDocument || document) && w.defaultView) || window).getSelection &&
                    ((x = x.getSelection()),
                    (l = b.textContent.length),
                    (k = Math.min(u.start, l)),
                    (u = void 0 === u.end ? k : Math.min(u.end, l)),
                    !x.extend && k > u && ((l = u), (u = k), (k = l)),
                    (l = hr(b, k)),
                    (i = hr(b, u)),
                    l &&
                      i &&
                      (1 !== x.rangeCount ||
                        x.anchorNode !== l.node ||
                        x.anchorOffset !== l.offset ||
                        x.focusNode !== i.node ||
                        x.focusOffset !== i.offset) &&
                      ((w = w.createRange()).setStart(l.node, l.offset),
                      x.removeAllRanges(),
                      k > u
                        ? (x.addRange(w), x.extend(i.node, i.offset))
                        : (w.setEnd(i.node, i.offset), x.addRange(w))))),
                (w = []);
              for (x = b; (x = x.parentNode); )
                1 === x.nodeType && w.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
              for ("function" === typeof b.focus && b.focus(), b = 0; b < w.length; b++)
                ((x = w[b]).element.scrollLeft = x.left), (x.element.scrollTop = x.top);
            }
            (Gt = !!Wr), (Ur = Wr = null), (e.current = n), (Gu = r);
            do {
              try {
                for (b = e; null !== Gu; ) {
                  var E = Gu.flags;
                  if ((36 & E && gu(b, Gu.alternate, Gu), 128 & E)) {
                    w = void 0;
                    var S = Gu.ref;
                    if (null !== S) {
                      var C = Gu.stateNode;
                      Gu.tag, (w = C), "function" === typeof S ? S(w) : (S.current = w);
                    }
                  }
                  Gu = Gu.nextEffect;
                }
              } catch (P) {
                if (null === Gu) throw Error(o(330));
                Bl(Gu, P), (Gu = Gu.nextEffect);
              }
            } while (null !== Gu);
            (Gu = null), Fa(), (Au = a);
          } else e.current = n;
          if (Zu) (Zu = !1), (el = e), (tl = t);
          else
            for (Gu = r; null !== Gu; )
              (t = Gu.nextEffect),
                (Gu.nextEffect = null),
                8 & Gu.flags && (((E = Gu).sibling = null), (E.stateNode = null)),
                (Gu = t);
          if (
            (0 === (r = e.pendingLanes) && (Ju = null),
            1 === r ? (e === ol ? il++ : ((il = 0), (ol = e))) : (il = 0),
            (n = n.stateNode),
            Sa && "function" === typeof Sa.onCommitFiberRoot)
          )
            try {
              Sa.onCommitFiberRoot(Ea, n, void 0, 64 === (64 & n.current.flags));
            } catch (P) {}
          if ((vl(e, Va()), Qu)) throw ((Qu = !1), (e = Xu), (Xu = null), e);
          return 0 !== (8 & Au) || Ya(), null;
        }
        function Ml() {
          for (; null !== Gu; ) {
            var e = Gu.alternate;
            fl ||
              null === cl ||
              (0 !== (8 & Gu.flags) ? et(Gu, cl) && (fl = !0) : 13 === Gu.tag && _u(e, Gu) && et(Gu, cl) && (fl = !0));
            var t = Gu.flags;
            0 !== (256 & t) && vu(e, Gu),
              0 === (512 & t) ||
                Zu ||
                ((Zu = !0),
                Ka(97, function () {
                  return Ll(), null;
                })),
              (Gu = Gu.nextEffect);
          }
        }
        function Ll() {
          if (90 !== tl) {
            var e = 97 < tl ? 97 : tl;
            return (tl = 90), qa(e, Fl);
          }
          return !1;
        }
        function Il(e, t) {
          nl.push(t, e),
            Zu ||
              ((Zu = !0),
              Ka(97, function () {
                return Ll(), null;
              }));
        }
        function zl(e, t) {
          rl.push(t, e),
            Zu ||
              ((Zu = !0),
              Ka(97, function () {
                return Ll(), null;
              }));
        }
        function Fl() {
          if (null === el) return !1;
          var e = el;
          if (((el = null), 0 !== (48 & Au))) throw Error(o(331));
          var t = Au;
          Au |= 32;
          var n = rl;
          rl = [];
          for (var r = 0; r < n.length; r += 2) {
            var a = n[r],
              i = n[r + 1],
              u = a.destroy;
            if (((a.destroy = void 0), "function" === typeof u))
              try {
                u();
              } catch (s) {
                if (null === i) throw Error(o(330));
                Bl(i, s);
              }
          }
          for (n = nl, nl = [], r = 0; r < n.length; r += 2) {
            (a = n[r]), (i = n[r + 1]);
            try {
              var l = a.create;
              a.destroy = l();
            } catch (s) {
              if (null === i) throw Error(o(330));
              Bl(i, s);
            }
          }
          for (l = e.current.firstEffect; null !== l; )
            (e = l.nextEffect),
              (l.nextEffect = null),
              8 & l.flags && ((l.sibling = null), (l.stateNode = null)),
              (l = e);
          return (Au = t), Ya(), !0;
        }
        function Dl(e, t, n) {
          fi(e, (t = du(0, (t = su(n, t)), 1))), (t = dl()), null !== (e = ml(e, 1)) && (Vt(e, 1, t), vl(e, t));
        }
        function Bl(e, t) {
          if (3 === e.tag) Dl(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Dl(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch && (null === Ju || !Ju.has(r)))
                ) {
                  var a = pu(n, (e = su(t, e)), 1);
                  if ((fi(n, a), (a = dl()), null !== (n = ml(n, 1)))) Vt(n, 1, a), vl(n, a);
                  else if ("function" === typeof r.componentDidCatch && (null === Ju || !Ju.has(r)))
                    try {
                      r.componentDidCatch(t, e);
                    } catch (i) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Wl(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = dl()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Nu === e &&
              (Lu & n) === n &&
              (4 === Fu || (3 === Fu && (62914560 & Lu) === Lu && 500 > Va() - $u) ? Sl(e, 0) : (Vu |= n)),
            vl(e, t);
        }
        function Ul(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 === (2 & (t = e.mode))
                ? (t = 1)
                : 0 === (4 & t)
                ? (t = 99 === Ha() ? 1 : 2)
                : (0 === ll && (ll = Bu), 0 === (t = Wt(62914560 & ~ll)) && (t = 4194304))),
            (n = dl()),
            null !== (e = ml(e, t)) && (Vt(e, t, n), vl(e, n));
        }
        function Vl(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Hl(e, t, n, r) {
          return new Vl(e, t, n, r);
        }
        function $l(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function ql(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Hl(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Kl(e, t, n, r, a, i) {
          var u = 2;
          if (((r = e), "function" === typeof e)) $l(e) && (u = 1);
          else if ("string" === typeof e) u = 5;
          else
            e: switch (e) {
              case S:
                return Yl(n.children, a, i, t);
              case I:
                (u = 8), (a |= 16);
                break;
              case C:
                (u = 8), (a |= 1);
                break;
              case P:
                return ((e = Hl(12, n, t, 8 | a)).elementType = P), (e.type = P), (e.lanes = i), e;
              case T:
                return ((e = Hl(13, n, t, a)).type = T), (e.elementType = T), (e.lanes = i), e;
              case R:
                return ((e = Hl(19, n, t, a)).elementType = R), (e.lanes = i), e;
              case z:
                return Gl(n, a, i, t);
              case F:
                return ((e = Hl(24, n, t, a)).elementType = F), (e.lanes = i), e;
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case O:
                      u = 10;
                      break e;
                    case _:
                      u = 9;
                      break e;
                    case j:
                      u = 11;
                      break e;
                    case A:
                      u = 14;
                      break e;
                    case N:
                      (u = 16), (r = null);
                      break e;
                    case M:
                      u = 22;
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return ((t = Hl(u, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t;
        }
        function Yl(e, t, n, r) {
          return ((e = Hl(7, e, r, t)).lanes = n), e;
        }
        function Gl(e, t, n, r) {
          return ((e = Hl(23, e, r, t)).elementType = z), (e.lanes = n), e;
        }
        function Ql(e, t, n) {
          return ((e = Hl(6, e, null, t)).lanes = n), e;
        }
        function Xl(e, t, n) {
          return (
            ((t = Hl(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
          );
        }
        function Jl(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Ut(0)),
            (this.expirationTimes = Ut(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ut(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Zl(e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return { $$typeof: E, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
        }
        function es(e, t, n, r) {
          var a = t.current,
            i = dl(),
            u = pl(a);
          e: if (n) {
            t: {
              if (Qe((n = n._reactInternals)) !== n || 1 !== n.tag) throw Error(o(170));
              var l = n;
              do {
                switch (l.tag) {
                  case 3:
                    l = l.stateNode.context;
                    break t;
                  case 1:
                    if (ga(l.type)) {
                      l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                l = l.return;
              } while (null !== l);
              throw Error(o(171));
            }
            if (1 === n.tag) {
              var s = n.type;
              if (ga(s)) {
                n = wa(n, s, l);
                break e;
              }
            }
            n = l;
          } else n = da;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ci(i, u)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            fi(a, t),
            hl(a, u, i),
            u
          );
        }
        function ts(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function ns(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function rs(e, t) {
          ns(e, t), (e = e.alternate) && ns(e, t);
        }
        function as(e, t, n) {
          var r = (null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources) || null;
          if (
            ((n = new Jl(e, t, null != n && !0 === n.hydrate)),
            (t = Hl(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            li(t),
            (e[ea] = n.current),
            Ar(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var a = (t = r[e])._getVersion;
              (a = a(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, a])
                  : n.mutableSourceEagerHydrationData.push(t, a);
            }
          this._internalRoot = n;
        }
        function is(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function os(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i._internalRoot;
            if ("function" === typeof a) {
              var u = a;
              a = function () {
                var e = ts(o);
                u.call(e);
              };
            }
            es(t, o, e, a);
          } else {
            if (
              ((i = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new as(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (o = i._internalRoot),
              "function" === typeof a)
            ) {
              var l = a;
              a = function () {
                var e = ts(o);
                l.call(e);
              };
            }
            xl(function () {
              es(t, o, e, a);
            });
          }
          return ts(o);
        }
        function us(e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!is(t)) throw Error(o(200));
          return Zl(e, t, null, n);
        }
        (Yu = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || ha.current) zo = !0;
            else {
              if (0 === (n & r)) {
                switch (((zo = !1), t.tag)) {
                  case 3:
                    Ko(t), Ki();
                    break;
                  case 5:
                    Li(t);
                    break;
                  case 1:
                    ga(t.type) && xa(t);
                    break;
                  case 4:
                    Ni(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var a = t.type._context;
                    fa(Ja, a._currentValue), (a._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (n & t.child.childLanes)
                        ? Jo(e, t, n)
                        : (fa(zi, 1 & zi.current), null !== (t = iu(e, t, n)) ? t.sibling : null);
                    fa(zi, 1 & zi.current);
                    break;
                  case 19:
                    if (((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))) {
                      if (r) return au(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (a = t.memoizedState) && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                      fa(zi, zi.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Uo(e, t, n);
                }
                return iu(e, t, n);
              }
              zo = 0 !== (16384 & e.flags);
            }
          else zo = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = va(t, pa.current)),
                ii(t, n),
                (a = oo(null, t, r, e, a, n)),
                (t.flags |= 1),
                "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof)
              ) {
                if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ga(r))) {
                  var i = !0;
                  xa(t);
                } else i = !1;
                (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null), li(t);
                var u = r.getDerivedStateFromProps;
                "function" === typeof u && vi(t, r, u, e),
                  (a.updater = gi),
                  (t.stateNode = a),
                  (a._reactInternals = t),
                  xi(t, r, e, n),
                  (t = qo(null, t, r, !0, i, n));
              } else (t.tag = 0), Fo(null, t, a, n), (t = t.child);
              return t;
            case 16:
              a = t.elementType;
              e: {
                switch (
                  (null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                  (e = t.pendingProps),
                  (a = (i = a._init)(a._payload)),
                  (t.type = a),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return $l(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === A) return 14;
                      }
                      return 2;
                    })(a)),
                  (e = Xa(a, e)),
                  i)
                ) {
                  case 0:
                    t = Ho(null, t, a, e, n);
                    break e;
                  case 1:
                    t = $o(null, t, a, e, n);
                    break e;
                  case 11:
                    t = Do(null, t, a, e, n);
                    break e;
                  case 14:
                    t = Bo(null, t, a, Xa(a.type, e), r, n);
                    break e;
                }
                throw Error(o(306, a, ""));
              }
              return t;
            case 0:
              return (r = t.type), (a = t.pendingProps), Ho(e, t, r, (a = t.elementType === r ? a : Xa(r, a)), n);
            case 1:
              return (r = t.type), (a = t.pendingProps), $o(e, t, r, (a = t.elementType === r ? a : Xa(r, a)), n);
            case 3:
              if ((Ko(t), (r = t.updateQueue), null === e || null === r)) throw Error(o(282));
              if (
                ((r = t.pendingProps),
                (a = null !== (a = t.memoizedState) ? a.element : null),
                si(e, t),
                pi(t, r, null, n),
                (r = t.memoizedState.element) === a)
              )
                Ki(), (t = iu(e, t, n));
              else {
                if (
                  ((i = (a = t.stateNode).hydrate) &&
                    ((Bi = Yr(t.stateNode.containerInfo.firstChild)), (Di = t), (i = Wi = !0)),
                  i)
                ) {
                  if (null != (e = a.mutableSourceEagerHydrationData))
                    for (a = 0; a < e.length; a += 2) ((i = e[a])._workInProgressVersionPrimary = e[a + 1]), Yi.push(i);
                  for (n = Oi(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Fo(e, t, r, n), Ki();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Li(t),
                null === e && Hi(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (u = a.children),
                Hr(r, a) ? (u = null) : null !== i && Hr(r, i) && (t.flags |= 16),
                Vo(e, t),
                Fo(e, t, u, n),
                t.child
              );
            case 6:
              return null === e && Hi(t), null;
            case 13:
              return Jo(e, t, n);
            case 4:
              return (
                Ni(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Pi(t, null, r, n)) : Fo(e, t, r, n),
                t.child
              );
            case 11:
              return (r = t.type), (a = t.pendingProps), Do(e, t, r, (a = t.elementType === r ? a : Xa(r, a)), n);
            case 7:
              return Fo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Fo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context), (a = t.pendingProps), (u = t.memoizedProps), (i = a.value);
                var l = t.type._context;
                if ((fa(Ja, l._currentValue), (l._currentValue = i), null !== u))
                  if (
                    ((l = u.value),
                    0 ===
                      (i = cr(l, i)
                        ? 0
                        : 0 |
                          ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(l, i) : 1073741823)))
                  ) {
                    if (u.children === a.children && !ha.current) {
                      t = iu(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                      var s = l.dependencies;
                      if (null !== s) {
                        u = l.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r && 0 !== (c.observedBits & i)) {
                            1 === l.tag && (((c = ci(-1, n & -n)).tag = 2), fi(l, c)),
                              (l.lanes |= n),
                              null !== (c = l.alternate) && (c.lanes |= n),
                              ai(l.return, n),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else u = 10 === l.tag && l.type === t.type ? null : l.child;
                      if (null !== u) u.return = l;
                      else
                        for (u = l; null !== u; ) {
                          if (u === t) {
                            u = null;
                            break;
                          }
                          if (null !== (l = u.sibling)) {
                            (l.return = u.return), (u = l);
                            break;
                          }
                          u = u.return;
                        }
                      l = u;
                    }
                Fo(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = (i = t.pendingProps).children),
                ii(t, n),
                (r = r((a = oi(a, i.unstable_observedBits)))),
                (t.flags |= 1),
                Fo(e, t, r, n),
                t.child
              );
            case 14:
              return (i = Xa((a = t.type), t.pendingProps)), Bo(e, t, a, (i = Xa(a.type, i)), r, n);
            case 15:
              return Wo(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Xa(r, a)),
                null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                ga(r) ? ((e = !0), xa(t)) : (e = !1),
                ii(t, n),
                bi(t, r, a),
                xi(t, r, a, n),
                qo(null, t, r, !0, e, n)
              );
            case 19:
              return au(e, t, n);
            case 23:
            case 24:
              return Uo(e, t, n);
          }
          throw Error(o(156, t.tag));
        }),
          (as.prototype.render = function (e) {
            es(e, this._internalRoot, null, null);
          }),
          (as.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            es(null, e, null, function () {
              t[ea] = null;
            });
          }),
          (tt = function (e) {
            13 === e.tag && (hl(e, 4, dl()), rs(e, 4));
          }),
          (nt = function (e) {
            13 === e.tag && (hl(e, 67108864, dl()), rs(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = dl(),
                n = pl(e);
              hl(e, n, t), rs(e, n);
            }
          }),
          (at = function (e, t) {
            return t();
          }),
          (Oe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ia(r);
                      if (!a) throw Error(o(90));
                      X(r), ne(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                se(e, n);
                break;
              case "select":
                null != (t = n.value) && oe(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = wl),
          (Me = function (e, t, n, r, a) {
            var i = Au;
            Au |= 4;
            try {
              return qa(98, e.bind(null, t, n, r, a));
            } finally {
              0 === (Au = i) && (Ku(), Ya());
            }
          }),
          (Le = function () {
            0 === (49 & Au) &&
              ((function () {
                if (null !== al) {
                  var e = al;
                  (al = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), vl(e, Va());
                    });
                }
                Ya();
              })(),
              Ll());
          }),
          (Ie = function (e, t) {
            var n = Au;
            Au |= 2;
            try {
              return e(t);
            } finally {
              0 === (Au = n) && (Ku(), Ya());
            }
          });
        var ls = { Events: [ra, aa, ia, Re, Ae, Ll, { current: !1 }] },
          ss = { findFiberByHostInstance: na, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" },
          cs = {
            bundleType: ss.bundleType,
            version: ss.version,
            rendererPackageName: ss.rendererPackageName,
            rendererConfig: ss.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ze(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ss.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!fs.isDisabled && fs.supportsFiber)
            try {
              (Ea = fs.inject(cs)), (Sa = fs);
            } catch (ve) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ls),
          (t.createPortal = us),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw Error(o(268, Object.keys(e)));
            }
            return (e = null === (e = Ze(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = Au;
            if (0 !== (48 & n)) return e(t);
            Au |= 1;
            try {
              if (e) return qa(99, e.bind(null, t));
            } finally {
              (Au = n), Ya();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!is(t)) throw Error(o(200));
            return os(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!is(t)) throw Error(o(200));
            return os(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!is(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (xl(function () {
                os(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ea] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = wl),
          (t.unstable_createPortal = function (e, t) {
            return us(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!is(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return os(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        n(725);
        var r = n(791),
          a = 60103;
        if (((t.Fragment = 60107), "function" === typeof Symbol && Symbol.for)) {
          var i = Symbol.for;
          (a = i("react.element")), (t.Fragment = i("react.fragment"));
        }
        var o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          u = Object.prototype.hasOwnProperty,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            i = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            u.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return { $$typeof: a, type: e, key: s, ref: c, props: i, _owner: o.current };
        }
        (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t, n) {
        "use strict";
        var r = n(725),
          a = 60103,
          i = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var o = 60109,
          u = 60110,
          l = 60112;
        t.Suspense = 60113;
        var s = 60115,
          c = 60116;
        if ("function" === typeof Symbol && Symbol.for) {
          var f = Symbol.for;
          (a = f("react.element")),
            (i = f("react.portal")),
            (t.Fragment = f("react.fragment")),
            (t.StrictMode = f("react.strict_mode")),
            (t.Profiler = f("react.profiler")),
            (o = f("react.provider")),
            (u = f("react.context")),
            (l = f("react.forward_ref")),
            (t.Suspense = f("react.suspense")),
            (s = f("react.memo")),
            (c = f("react.lazy"));
        }
        var d = "function" === typeof Symbol && Symbol.iterator;
        function p(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = {};
        function v(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
        }
        function g() {}
        function y(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = v.prototype);
        var b = (y.prototype = new g());
        (b.constructor = y), r(b, v.prototype), (b.isPureReactComponent = !0);
        var w = { current: null },
          x = Object.prototype.hasOwnProperty,
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, n) {
          var r,
            i = {},
            o = null,
            u = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (o = "" + t.key), t))
              x.call(t, r) && !k.hasOwnProperty(r) && (i[r] = t[r]);
          var l = arguments.length - 2;
          if (1 === l) i.children = n;
          else if (1 < l) {
            for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
            i.children = s;
          }
          if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === i[r] && (i[r] = l[r]);
          return { $$typeof: a, type: e, key: o, ref: u, props: i, _owner: w.current };
        }
        function S(e) {
          return "object" === typeof e && null !== e && e.$$typeof === a;
        }
        var C = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, n, r, o) {
          var u = typeof e;
          ("undefined" !== u && "boolean" !== u) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (u) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case a:
                  case i:
                    l = !0;
                }
            }
          if (l)
            return (
              (o = o((l = e))),
              (e = "" === r ? "." + P(l, 0) : r),
              Array.isArray(o)
                ? ((n = ""),
                  null != e && (n = e.replace(C, "$&/") + "/"),
                  O(o, t, n, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (S(o) &&
                    (o = (function (e, t) {
                      return { $$typeof: a, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                    })(o, n + (!o.key || (l && l.key === o.key) ? "" : ("" + o.key).replace(C, "$&/") + "/") + e)),
                  t.push(o)),
              1
            );
          if (((l = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var s = 0; s < e.length; s++) {
              var c = r + P((u = e[s]), s);
              l += O(u, t, n, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(u = e.next()).done; ) l += O((u = u.value), t, n, (c = r + P(u, s++)), o);
          else if ("object" === u)
            throw (
              ((t = "" + e),
              Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
            );
          return l;
        }
        function _(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var T = { current: null };
        function R() {
          var e = T.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var A = {
          ReactCurrentDispatcher: T,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: w,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: _,
          forEach: function (e, t, n) {
            _(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              _(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              _(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!S(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = v),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(p(267, e));
            var i = r({}, e.props),
              o = e.key,
              u = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((u = t.ref), (l = w.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                x.call(t, c) && !k.hasOwnProperty(c) && (i[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) i.children = n;
            else if (1 < c) {
              s = Array(c);
              for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
              i.children = s;
            }
            return { $$typeof: a, type: e.type, key: o, ref: u, props: i, _owner: l };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: u,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = S),
          (t.lazy = function (e) {
            return { $$typeof: c, _payload: { _status: -1, _result: e }, _init: j };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return R().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return R().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return R().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R().useRef(e);
          }),
          (t.useState = function (e) {
            return R().useState(e);
          }),
          (t.version = "17.0.2");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      760: function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(791),
          a = n(173);
        var i = (function (e) {
            return e && "object" == typeof e && "default" in e ? e : { default: e };
          })(r),
          o = function () {
            return (
              (o =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                  return e;
                }),
              o.apply(this, arguments)
            );
          };
        function u(e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
          }
          return n;
        }
        function l(e) {
          var t = e.setContainerRef,
            n = e.setCanvasRef,
            r = u(e, ["setContainerRef", "setCanvasRef"]);
          return i.default.createElement(
            "div",
            o({ ref: t, style: "className" in r ? void 0 : { width: "100%", height: "100%" } }, r),
            i.default.createElement("canvas", { ref: n, style: { verticalAlign: "top" } })
          );
        }
        var s = { useDevicePixelRatio: !0, fitCanvasToArtboardHeight: !1, useOffscreenRenderer: !0 };
        function c(e, t) {
          void 0 === t && (t = {});
          var n = r.useRef(null),
            u = r.useRef(null),
            c = r.useState(null),
            f = c[0],
            d = c[1],
            p = r.useState({ height: 0, width: 0 }),
            h = p[0],
            m = p[1],
            v = (function () {
              var e = r.useState({ width: 0, height: 0 }),
                t = e[0],
                n = e[1];
              return (
                r.useEffect(function () {
                  if ("undefined" != typeof window) {
                    var e = function () {
                      n({ width: window.innerWidth, height: window.innerHeight });
                    };
                    return (
                      window.addEventListener("resize", e),
                      e(),
                      function () {
                        return window.removeEventListener("resize", e);
                      }
                    );
                  }
                }, []),
                t
              );
            })(),
            g = Boolean(e),
            y = (function (e) {
              return Object.assign({}, s, e);
            })(t);
          r.useEffect(
            function () {
              f &&
                (function () {
                  if (u.current) {
                    var e = (function () {
                        var e,
                          t,
                          n =
                            null !==
                              (t = null === (e = u.current) || void 0 === e ? void 0 : e.getBoundingClientRect()) &&
                            void 0 !== t
                              ? t
                              : new DOMRect(0, 0, 0, 0),
                          r = n.width,
                          a = n.height;
                        if (f && y.fitCanvasToArtboardHeight) {
                          var i = f.bounds;
                          return { width: r, height: r * (i.maxY / i.maxX) };
                        }
                        return { width: r, height: a };
                      })(),
                      t = e.width,
                      r = e.height,
                      a = t !== h.width || r !== h.height;
                    if (n.current && f && a) {
                      if ((y.fitCanvasToArtboardHeight && (u.current.style.height = r + "px"), y.useDevicePixelRatio)) {
                        var i = window.devicePixelRatio || 1;
                        (n.current.width = i * t),
                          (n.current.height = i * r),
                          (n.current.style.width = t + "px"),
                          (n.current.style.height = r + "px");
                      } else (n.current.width = t), (n.current.height = r);
                      m({ width: t, height: r }), f.startRendering();
                    }
                    f && f.resizeToCanvas();
                  }
                })();
            },
            [f, v]
          );
          var b = r.useCallback(
              function (t) {
                if (t && e) {
                  var r = y.useOffscreenRenderer,
                    i = new a.Rive(o(o({ useOffscreenRenderer: r }, e), { canvas: t }));
                  i.on(a.EventType.Load, function () {
                    return d(i);
                  });
                } else null === t && n.current && ((n.current.height = 0), (n.current.width = 0));
                n.current = t;
              },
              [g]
            ),
            w = r.useCallback(function (e) {
              u.current = e;
            }, []);
          r.useEffect(
            function () {
              var e = new IntersectionObserver(function (e) {
                e[0].isIntersecting ? f && f.startRendering() : f && f.stopRendering();
              });
              return (
                n.current && e.observe(n.current),
                function () {
                  e.disconnect();
                }
              );
            },
            [f]
          ),
            r.useEffect(
              function () {
                return function () {
                  f && (f.stop(), d(null));
                };
              },
              [f]
            );
          var x = r.useCallback(function (e) {
            return i.default.createElement(l, o({ setContainerRef: w, setCanvasRef: b }, e));
          }, []);
          return { canvas: n.current, setCanvasRef: b, setContainerRef: w, rive: f, RiveComponent: x };
        }
        (t.default = function (e) {
          var t = e.src,
            n = e.artboard,
            r = e.animations,
            a = e.layout,
            l = e.useOffscreenRenderer,
            s = void 0 === l || l,
            f = u(e, ["src", "artboard", "animations", "layout", "useOffscreenRenderer"]),
            d = c(
              { src: t, artboard: n, animations: r, layout: a, autoplay: !0 },
              { useOffscreenRenderer: s }
            ).RiveComponent;
          return i.default.createElement(d, o({}, f));
        }),
          (t.useRive = c),
          (t.useStateMachineInput = function (e, t, n) {
            var a = r.useState(null),
              i = a[0],
              o = a[1];
            return (
              r.useEffect(
                function () {
                  if (((e && t && n) || o(null), e && t && n)) {
                    var r = e.stateMachineInputs(t);
                    if (r) {
                      var a = r.find(function (e) {
                        return e.name === n;
                      });
                      o(a || null);
                    }
                  } else o(null);
                },
                [e]
              ),
              i
            );
          }),
          Object.keys(a).forEach(function (e) {
            "default" === e ||
              t.hasOwnProperty(e) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return a[e];
                },
              });
          });
      },
      813: function (e, t) {
        "use strict";
        var n, r, a, i;
        if ("object" === typeof performance && "function" === typeof performance.now) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var u = Date,
            l = u.now();
          t.unstable_now = function () {
            return u.now() - l;
          };
        }
        if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
          var s = null,
            c = null,
            f = function e() {
              if (null !== s)
                try {
                  var n = t.unstable_now();
                  s(!0, n), (s = null);
                } catch (r) {
                  throw (setTimeout(e, 0), r);
                }
            };
          (n = function (e) {
            null !== s ? setTimeout(n, 0, e) : ((s = e), setTimeout(f, 0));
          }),
            (r = function (e, t) {
              c = setTimeout(e, t);
            }),
            (a = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (i = t.unstable_forceFrameRate = function () {});
        } else {
          var d = window.setTimeout,
            p = window.clearTimeout;
          if ("undefined" !== typeof console) {
            var h = window.cancelAnimationFrame;
            "function" !== typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" !== typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var m = !1,
            v = null,
            g = -1,
            y = 5,
            b = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= b;
          }),
            (i = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (y = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var w = new MessageChannel(),
            x = w.port2;
          (w.port1.onmessage = function () {
            if (null !== v) {
              var e = t.unstable_now();
              b = e + y;
              try {
                v(!0, e) ? x.postMessage(null) : ((m = !1), (v = null));
              } catch (n) {
                throw (x.postMessage(null), n);
              }
            } else m = !1;
          }),
            (n = function (e) {
              (v = e), m || ((m = !0), x.postMessage(null));
            }),
            (r = function (e, n) {
              g = d(function () {
                e(t.unstable_now());
              }, n);
            }),
            (a = function () {
              p(g), (g = -1);
            });
        }
        function k(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(void 0 !== a && 0 < C(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function E(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function S(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, a = e.length; r < a; ) {
                var i = 2 * (r + 1) - 1,
                  o = e[i],
                  u = i + 1,
                  l = e[u];
                if (void 0 !== o && 0 > C(o, n))
                  void 0 !== l && 0 > C(l, o) ? ((e[r] = l), (e[u] = n), (r = u)) : ((e[r] = o), (e[i] = n), (r = i));
                else {
                  if (!(void 0 !== l && 0 > C(l, n))) break e;
                  (e[r] = l), (e[u] = n), (r = u);
                }
              }
            }
            return t;
          }
          return null;
        }
        function C(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var P = [],
          O = [],
          _ = 1,
          j = null,
          T = 3,
          R = !1,
          A = !1,
          N = !1;
        function M(e) {
          for (var t = E(O); null !== t; ) {
            if (null === t.callback) S(O);
            else {
              if (!(t.startTime <= e)) break;
              S(O), (t.sortIndex = t.expirationTime), k(P, t);
            }
            t = E(O);
          }
        }
        function L(e) {
          if (((N = !1), M(e), !A))
            if (null !== E(P)) (A = !0), n(I);
            else {
              var t = E(O);
              null !== t && r(L, t.startTime - e);
            }
        }
        function I(e, n) {
          (A = !1), N && ((N = !1), a()), (R = !0);
          var i = T;
          try {
            for (M(n), j = E(P); null !== j && (!(j.expirationTime > n) || (e && !t.unstable_shouldYield())); ) {
              var o = j.callback;
              if ("function" === typeof o) {
                (j.callback = null), (T = j.priorityLevel);
                var u = o(j.expirationTime <= n);
                (n = t.unstable_now()), "function" === typeof u ? (j.callback = u) : j === E(P) && S(P), M(n);
              } else S(P);
              j = E(P);
            }
            if (null !== j) var l = !0;
            else {
              var s = E(O);
              null !== s && r(L, s.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (j = null), (T = i), (R = !1);
          }
        }
        var z = i;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            A || R || ((A = !0), n(I));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return E(P);
          }),
          (t.unstable_next = function (e) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = T;
            }
            var n = T;
            T = t;
            try {
              return e();
            } finally {
              T = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = z),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = T;
            T = e;
            try {
              return t();
            } finally {
              T = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, o) {
            var u = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? u + o : u)
                : (o = u),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: _++,
                callback: i,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > u
                ? ((e.sortIndex = o), k(O, e), null === E(P) && e === E(O) && (N ? a() : (N = !0), r(L, o - u)))
                : ((e.sortIndex = l), k(P, e), A || R || ((A = !0), n(I))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = T;
            return function () {
              var n = T;
              T = t;
              try {
                return e.apply(this, arguments);
              } finally {
                T = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      598: function () {},
      853: function () {},
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var u = 2 & a && r; "object" == typeof u && !~e.indexOf(u); u = t(u))
          Object.getOwnPropertyNames(u).forEach(function (e) {
            o[e] = function () {
              return r[e];
            };
          });
        return (
          (o.default = function () {
            return r;
          }),
          n.d(i, o),
          i
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      "use strict";
      var e = n(791),
        t = n.t(e, 2),
        r = n(164);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e, t) {
        if (e) {
          if ("string" === typeof e) return a(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? a(e, t)
              : void 0
          );
        }
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                o = !0,
                u = !1;
              try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
              } catch (l) {
                (u = !0), (a = l);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (u) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          i(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function f(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = c(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var d = n(694),
        p = n.n(d),
        h = n(7),
        m = n.n(h),
        v = n(184),
        g = ["xxl", "xl", "lg", "md", "sm", "xs"],
        y = e.createContext({ prefixes: {}, breakpoints: g });
      y.Consumer, y.Provider;
      function b(t, n) {
        var r = (0, e.useContext)(y).prefixes;
        return t || r[n] || n;
      }
      var w = ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"],
        x =
          (m().string,
          m().bool,
          m().bool,
          m().bool,
          m().bool,
          e.forwardRef(function (e, t) {
            var n = e.bsPrefix,
              r = e.className,
              a = e.fluid,
              i = e.rounded,
              o = e.roundedCircle,
              u = e.thumbnail,
              l = f(e, w);
            return (
              (n = b(n, "img")),
              (0, v.jsx)(
                "img",
                s(
                  s({ ref: t }, l),
                  {},
                  {
                    className: p()(
                      r,
                      a && "".concat(n, "-fluid"),
                      i && "rounded",
                      o && "rounded-circle",
                      u && "".concat(n, "-thumbnail")
                    ),
                  }
                )
              )
            );
          }));
      (x.displayName = "Image"), (x.defaultProps = { fluid: !1, rounded: !1, roundedCircle: !1, thumbnail: !1 });
      var k = x;
      var E,
        S = function (e) {
          var t = e.image,
            n = e.height;
          return (0, v.jsx)("div", {
            className: "slider",
            children: (0, v.jsx)(k, { className: "sliderimage", width: "100%", height: n || 600, src: t }),
          });
        };
      function C() {
        return (
          (C =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          C.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(E || (E = {}));
      var P = function (e) {
        return e;
      };
      var O = "beforeunload",
        _ = "popstate";
      function j(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function T() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t);
            });
          },
        };
      }
      function R() {
        return Math.random().toString(36).substr(2, 8);
      }
      function A(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          i = e.hash,
          o = void 0 === i ? "" : i;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function N(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
        }
        return t;
      }
      var M = (0, e.createContext)(null);
      var L = (0, e.createContext)(null);
      var I = (0, e.createContext)({ outlet: null, matches: [] });
      function z(e, t) {
        if (!e) throw new Error(t);
      }
      function F(e, t, n) {
        void 0 === n && (n = "/");
        var r = q(("string" === typeof t ? N(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = D(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var i = null, o = 0; null == i && o < a.length; ++o) i = V(a[o], r);
        return i;
      }
      function D(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var i = { relativePath: e.path || "", caseSensitive: !0 === e.caseSensitive, childrenIndex: a, route: e };
            i.relativePath.startsWith("/") &&
              (i.relativePath.startsWith(r) || z(!1), (i.relativePath = i.relativePath.slice(r.length)));
            var o = K([r, i.relativePath]),
              u = n.concat(i);
            e.children && e.children.length > 0 && (!0 === e.index && z(!1), D(e.children, t, u, o)),
              (null != e.path || e.index) && t.push({ path: o, score: U(o, e.index), routesMeta: u });
          }),
          t
        );
      }
      var B = /^:\w+$/,
        W = function (e) {
          return "*" === e;
        };
      function U(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(W) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !W(e);
            })
            .reduce(function (e, t) {
              return e + (B.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function V(e, t) {
        for (var n = e.routesMeta, r = {}, a = "/", i = [], o = 0; o < n.length; ++o) {
          var u = n[o],
            l = o === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = H({ path: u.relativePath, caseSensitive: u.caseSensitive, end: l }, s);
          if (!c) return null;
          Object.assign(r, c.params);
          var f = u.route;
          i.push({ params: r, pathname: K([a, c.pathname]), pathnameBase: Y(K([a, c.pathnameBase])), route: f }),
            "/" !== c.pathnameBase && (a = K([a, c.pathnameBase]));
        }
        return i;
      }
      function H(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"), (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : (a += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)");
            return [new RegExp(a, t ? void 0 : "i"), r];
          })(e.path, e.caseSensitive, e.end),
          r = o(n, 2),
          a = r[0],
          i = r[1],
          u = t.match(a);
        if (!u) return null;
        var l = u[0],
          s = l.replace(/(.)\/+$/, "$1"),
          c = u.slice(1);
        return {
          params: i.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              s = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return e;
                }
              })(c[n] || "")),
              e
            );
          }, {}),
          pathname: l,
          pathnameBase: s,
          pattern: e,
        };
      }
      function $(e, t, n) {
        var r,
          a = "string" === typeof e ? N(e) : e,
          i = "" === e || "" === a.pathname ? "/" : a.pathname;
        if (null == i) r = n;
        else {
          var o = t.length - 1;
          if (i.startsWith("..")) {
            for (var u = i.split("/"); ".." === u[0]; ) u.shift(), (o -= 1);
            a.pathname = u.join("/");
          }
          r = o >= 0 ? t[o] : "/";
        }
        var l = (function (e, t) {
          void 0 === t && (t = "/");
          var n = "string" === typeof e ? N(e) : e,
            r = n.pathname,
            a = n.search,
            i = void 0 === a ? "" : a,
            o = n.hash,
            u = void 0 === o ? "" : o,
            l = r
              ? r.startsWith("/")
                ? r
                : (function (e, t) {
                    var n = t.replace(/\/+$/, "").split("/");
                    return (
                      e.split("/").forEach(function (e) {
                        ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e);
                      }),
                      n.length > 1 ? n.join("/") : "/"
                    );
                  })(r, t)
              : t;
          return { pathname: l, search: G(i), hash: Q(u) };
        })(a, r);
        return i && "/" !== i && i.endsWith("/") && !l.pathname.endsWith("/") && (l.pathname += "/"), l;
      }
      function q(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = e.charAt(t.length);
        return n && "/" !== n ? null : e.slice(t.length) || "/";
      }
      var K = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        Y = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        G = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        Q = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        };
      function X(t) {
        J() || z(!1);
        var n = (0, e.useContext)(M),
          r = n.basename,
          a = n.navigator,
          i = te(t),
          o = i.hash,
          u = i.pathname,
          l = i.search,
          s = u;
        if ("/" !== r) {
          var c = (function (e) {
              return "" === e || "" === e.pathname ? "/" : "string" === typeof e ? N(e).pathname : e.pathname;
            })(t),
            f = null != c && c.endsWith("/");
          s = "/" === u ? r + (f ? "/" : "") : K([r, u]);
        }
        return a.createHref({ pathname: s, search: l, hash: o });
      }
      function J() {
        return null != (0, e.useContext)(L);
      }
      function Z() {
        return J() || z(!1), (0, e.useContext)(L).location;
      }
      function ee() {
        J() || z(!1);
        var t = (0, e.useContext)(M),
          n = t.basename,
          r = t.navigator,
          a = (0, e.useContext)(I).matches,
          i = Z().pathname,
          o = JSON.stringify(
            a.map(function (e) {
              return e.pathnameBase;
            })
          ),
          u = (0, e.useRef)(!1);
        (0, e.useEffect)(function () {
          u.current = !0;
        });
        var l = (0, e.useCallback)(
          function (e, t) {
            if ((void 0 === t && (t = {}), u.current))
              if ("number" !== typeof e) {
                var a = $(e, JSON.parse(o), i);
                "/" !== n && (a.pathname = K([n, a.pathname])), (t.replace ? r.replace : r.push)(a, t.state);
              } else r.go(e);
          },
          [n, r, o, i]
        );
        return l;
      }
      function te(t) {
        var n = (0, e.useContext)(I).matches,
          r = Z().pathname,
          a = JSON.stringify(
            n.map(function (e) {
              return e.pathnameBase;
            })
          );
        return (0, e.useMemo)(
          function () {
            return $(t, JSON.parse(a), r);
          },
          [t, a, r]
        );
      }
      function ne(t, n) {
        return (
          void 0 === n && (n = []),
          null == t
            ? null
            : t.reduceRight(function (r, a, i) {
                return (0,
                e.createElement)(I.Provider, { children: void 0 !== a.route.element ? a.route.element : r, value: { outlet: r, matches: n.concat(t.slice(0, i + 1)) } });
              }, null)
        );
      }
      function re(e) {
        z(!1);
      }
      function ae(t) {
        var n = t.basename,
          r = void 0 === n ? "/" : n,
          a = t.children,
          i = void 0 === a ? null : a,
          o = t.location,
          u = t.navigationType,
          l = void 0 === u ? E.Pop : u,
          s = t.navigator,
          c = t.static,
          f = void 0 !== c && c;
        J() && z(!1);
        var d = Y(r),
          p = (0, e.useMemo)(
            function () {
              return { basename: d, navigator: s, static: f };
            },
            [d, s, f]
          );
        "string" === typeof o && (o = N(o));
        var h = o,
          m = h.pathname,
          v = void 0 === m ? "/" : m,
          g = h.search,
          y = void 0 === g ? "" : g,
          b = h.hash,
          w = void 0 === b ? "" : b,
          x = h.state,
          k = void 0 === x ? null : x,
          S = h.key,
          C = void 0 === S ? "default" : S,
          P = (0, e.useMemo)(
            function () {
              var e = q(v, d);
              return null == e ? null : { pathname: e, search: y, hash: w, state: k, key: C };
            },
            [d, v, y, w, k, C]
          );
        return null == P
          ? null
          : (0, e.createElement)(
              M.Provider,
              { value: p },
              (0, e.createElement)(L.Provider, { children: i, value: { location: P, navigationType: l } })
            );
      }
      function ie(t) {
        var n = t.children,
          r = t.location;
        return (function (t, n) {
          J() || z(!1);
          var r,
            a = (0, e.useContext)(I).matches,
            i = a[a.length - 1],
            o = i ? i.params : {},
            u = (i && i.pathname, i ? i.pathnameBase : "/"),
            l = (i && i.route, Z());
          if (n) {
            var s,
              c = "string" === typeof n ? N(n) : n;
            "/" === u || (null == (s = c.pathname) ? void 0 : s.startsWith(u)) || z(!1), (r = c);
          } else r = l;
          var f = r.pathname || "/",
            d = F(t, { pathname: "/" === u ? f : f.slice(u.length) || "/" });
          return ne(
            d &&
              d.map(function (e) {
                return Object.assign({}, e, {
                  params: Object.assign({}, o, e.params),
                  pathname: K([u, e.pathname]),
                  pathnameBase: "/" === e.pathnameBase ? u : K([u, e.pathnameBase]),
                });
              }),
            a
          );
        })(oe(n), r);
      }
      function oe(t) {
        var n = [];
        return (
          e.Children.forEach(t, function (t) {
            if ((0, e.isValidElement)(t))
              if (t.type !== e.Fragment) {
                t.type !== re && z(!1);
                var r = {
                  caseSensitive: t.props.caseSensitive,
                  element: t.props.element,
                  index: t.props.index,
                  path: t.props.path,
                };
                t.props.children && (r.children = oe(t.props.children)), n.push(r);
              } else n.push.apply(n, oe(t.props.children));
          }),
          n
        );
      }
      function ue() {
        return (
          (ue =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          ue.apply(this, arguments)
        );
      }
      function le(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var se = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
      function ce(t) {
        var n = t.basename,
          r = t.children,
          a = t.window,
          i = (0, e.useRef)();
        null == i.current &&
          (i.current = (function (e) {
            void 0 === e && (e = {});
            var t = e.window,
              n = void 0 === t ? document.defaultView : t,
              r = n.history;
            function a() {
              var e = n.location,
                t = e.pathname,
                a = e.search,
                i = e.hash,
                o = r.state || {};
              return [o.idx, P({ pathname: t, search: a, hash: i, state: o.usr || null, key: o.key || "default" })];
            }
            var i = null;
            n.addEventListener(_, function () {
              if (i) f.call(i), (i = null);
              else {
                var e = E.Pop,
                  t = a(),
                  n = t[0],
                  r = t[1];
                if (f.length) {
                  if (null != n) {
                    var o = l - n;
                    o &&
                      ((i = {
                        action: e,
                        location: r,
                        retry: function () {
                          g(-1 * o);
                        },
                      }),
                      g(o));
                  }
                } else v(e);
              }
            });
            var o = E.Pop,
              u = a(),
              l = u[0],
              s = u[1],
              c = T(),
              f = T();
            function d(e) {
              return "string" === typeof e ? e : A(e);
            }
            function p(e, t) {
              return (
                void 0 === t && (t = null),
                P(
                  C({ pathname: s.pathname, hash: "", search: "" }, "string" === typeof e ? N(e) : e, {
                    state: t,
                    key: R(),
                  })
                )
              );
            }
            function h(e, t) {
              return [{ usr: e.state, key: e.key, idx: t }, d(e)];
            }
            function m(e, t, n) {
              return !f.length || (f.call({ action: e, location: t, retry: n }), !1);
            }
            function v(e) {
              o = e;
              var t = a();
              (l = t[0]), (s = t[1]), c.call({ action: o, location: s });
            }
            function g(e) {
              r.go(e);
            }
            null == l && ((l = 0), r.replaceState(C({}, r.state, { idx: l }), ""));
            var y = {
              get action() {
                return o;
              },
              get location() {
                return s;
              },
              createHref: d,
              push: function e(t, a) {
                var i = E.Push,
                  o = p(t, a);
                if (
                  m(i, o, function () {
                    e(t, a);
                  })
                ) {
                  var u = h(o, l + 1),
                    s = u[0],
                    c = u[1];
                  try {
                    r.pushState(s, "", c);
                  } catch (f) {
                    n.location.assign(c);
                  }
                  v(i);
                }
              },
              replace: function e(t, n) {
                var a = E.Replace,
                  i = p(t, n);
                if (
                  m(a, i, function () {
                    e(t, n);
                  })
                ) {
                  var o = h(i, l),
                    u = o[0],
                    s = o[1];
                  r.replaceState(u, "", s), v(a);
                }
              },
              go: g,
              back: function () {
                g(-1);
              },
              forward: function () {
                g(1);
              },
              listen: function (e) {
                return c.push(e);
              },
              block: function (e) {
                var t = f.push(e);
                return (
                  1 === f.length && n.addEventListener(O, j),
                  function () {
                    t(), f.length || n.removeEventListener(O, j);
                  }
                );
              },
            };
            return y;
          })({ window: a }));
        var u = i.current,
          l = o((0, e.useState)({ action: u.action, location: u.location }), 2),
          s = l[0],
          c = l[1];
        return (
          (0, e.useLayoutEffect)(
            function () {
              return u.listen(c);
            },
            [u]
          ),
          (0, e.createElement)(ae, {
            basename: n,
            children: r,
            location: s.location,
            navigationType: s.action,
            navigator: u,
          })
        );
      }
      var fe = (0, e.forwardRef)(function (t, n) {
        var r = t.onClick,
          a = t.reloadDocument,
          i = t.replace,
          o = void 0 !== i && i,
          u = t.state,
          l = t.target,
          s = t.to,
          c = le(t, se),
          f = X(s),
          d = (function (t, n) {
            var r = void 0 === n ? {} : n,
              a = r.target,
              i = r.replace,
              o = r.state,
              u = ee(),
              l = Z(),
              s = te(t);
            return (0, e.useCallback)(
              function (e) {
                if (
                  0 === e.button &&
                  (!a || "_self" === a) &&
                  !(function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(e)
                ) {
                  e.preventDefault();
                  var n = !!i || A(l) === A(s);
                  u(t, { replace: n, state: o });
                }
              },
              [l, u, s, i, o, a, t]
            );
          })(s, { replace: o, state: u, target: l });
        return (0, e.createElement)(
          "a",
          ue({}, c, {
            href: f,
            onClick: function (e) {
              r && r(e), e.defaultPrevented || a || d(e);
            },
            ref: n,
            target: l,
          })
        );
      });
      var de = /-(.)/g;
      var pe = ["className", "bsPrefix", "as"],
        he = function (e) {
          return (
            e[0].toUpperCase() +
            ((t = e),
            t.replace(de, function (e, t) {
              return t.toUpperCase();
            })).slice(1)
          );
          var t;
        };
      function me(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = n.displayName,
          a = void 0 === r ? he(t) : r,
          i = n.Component,
          o = n.defaultProps,
          u = e.forwardRef(function (e, n) {
            var r = e.className,
              a = e.bsPrefix,
              o = e.as,
              u = void 0 === o ? i || "div" : o,
              l = f(e, pe),
              c = b(a, t);
            return (0, v.jsx)(u, s({ ref: n, className: p()(r, c) }, l));
          });
        return (u.defaultProps = o), (u.displayName = a), u;
      }
      var ve = function (t) {
          return e.forwardRef(function (e, n) {
            return (0, v.jsx)("div", s(s({}, e), {}, { ref: n, className: p()(e.className, t) }));
          });
        },
        ge = ["bsPrefix", "className", "variant", "as"],
        ye = e.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.variant,
            i = e.as,
            o = void 0 === i ? "img" : i,
            u = f(e, ge),
            l = b(n, "card-img");
          return (0, v.jsx)(o, s({ ref: t, className: p()(a ? "".concat(l, "-").concat(a) : l, r) }, u));
        });
      ye.displayName = "CardImg";
      var be = ye,
        we = e.createContext(null);
      we.displayName = "CardHeaderContext";
      var xe = we,
        ke = ["bsPrefix", "className", "as"],
        Ee = e.forwardRef(function (t, n) {
          var r = t.bsPrefix,
            a = t.className,
            i = t.as,
            o = void 0 === i ? "div" : i,
            u = f(t, ke),
            l = b(r, "card-header"),
            c = (0, e.useMemo)(
              function () {
                return { cardHeaderBsPrefix: l };
              },
              [l]
            );
          return (0,
          v.jsx)(xe.Provider, { value: c, children: (0, v.jsx)(o, s(s({ ref: n }, u), {}, { className: p()(a, l) })) });
        });
      Ee.displayName = "CardHeader";
      var Se = Ee,
        Ce = ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"],
        Pe = ve("h5"),
        Oe = ve("h6"),
        _e = me("card-body"),
        je = me("card-title", { Component: Pe }),
        Te = me("card-subtitle", { Component: Oe }),
        Re = me("card-link", { Component: "a" }),
        Ae = me("card-text", { Component: "p" }),
        Ne = me("card-footer"),
        Me = me("card-img-overlay"),
        Le = e.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.bg,
            i = e.text,
            o = e.border,
            u = e.body,
            l = e.children,
            c = e.as,
            d = void 0 === c ? "div" : c,
            h = f(e, Ce),
            m = b(n, "card");
          return (0,
          v.jsx)(d, s(s({ ref: t }, h), {}, { className: p()(r, m, a && "bg-".concat(a), i && "text-".concat(i), o && "border-".concat(o)), children: u ? (0, v.jsx)(_e, { children: l }) : l }));
        });
      (Le.displayName = "Card"), (Le.defaultProps = { body: !1 });
      var Ie = Object.assign(Le, {
          Img: be,
          Title: je,
          Subtitle: Te,
          Body: _e,
          Link: Re,
          Text: Ae,
          Header: Se,
          Footer: Ne,
          ImgOverlay: Me,
        }),
        ze = ["as", "disabled"];
      function Fe(e) {
        var t = e.tagName,
          n = e.disabled,
          r = e.href,
          a = e.target,
          i = e.rel,
          o = e.onClick,
          u = e.tabIndex,
          l = void 0 === u ? 0 : u,
          s = e.type;
        t || (t = null != r || null != a || null != i ? "a" : "button");
        var c = { tagName: t };
        if ("button" === t) return [{ type: s || "button", disabled: n }, c];
        var f = function (e) {
          (n ||
            ("a" === t &&
              (function (e) {
                return !e || "#" === e.trim();
              })(r))) &&
            e.preventDefault(),
            n ? e.stopPropagation() : null == o || o(e);
        };
        return (
          "a" === t && (r || (r = "#"), n && (r = void 0)),
          [
            {
              role: "button",
              disabled: void 0,
              tabIndex: n ? void 0 : l,
              href: r,
              target: "a" === t ? a : void 0,
              "aria-disabled": n || void 0,
              rel: "a" === t ? i : void 0,
              onClick: f,
              onKeyDown: function (e) {
                " " === e.key && (e.preventDefault(), f(e));
              },
            },
            c,
          ]
        );
      }
      var De = e.forwardRef(function (e, t) {
        var n = e.as,
          r = e.disabled,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, ze),
          i = o(Fe(Object.assign({ tagName: n, disabled: r }, a)), 2),
          u = i[0],
          l = i[1].tagName;
        return (0, v.jsx)(l, Object.assign({}, a, u, { ref: t }));
      });
      De.displayName = "Button";
      var Be = De,
        We = ["as", "bsPrefix", "variant", "size", "active", "className"],
        Ue = e.forwardRef(function (e, t) {
          var n = e.as,
            r = e.bsPrefix,
            a = e.variant,
            i = e.size,
            u = e.active,
            l = e.className,
            c = f(e, We),
            d = b(r, "btn"),
            h = o(Fe(s({ tagName: n }, c)), 2),
            m = h[0],
            g = h[1].tagName;
          return (0,
          v.jsx)(g, s(s(s({}, m), c), {}, { ref: t, className: p()(l, d, u && "active", a && "".concat(d, "-").concat(a), i && "".concat(d, "-").concat(i), c.href && c.disabled && "disabled") }));
        });
      (Ue.displayName = "Button"), (Ue.defaultProps = { variant: "primary", active: !1, disabled: !1 });
      var Ve = Ue;
      var He = function (e) {
        var t = e.props,
          n = e.darkMode;
        return (0, v.jsx)("div", {
          className: "pb-5",
          children: (0, v.jsxs)(Ie, {
            bg: n ? "dark" : "Light",
            style: { width: "18rem" },
            children: [
              (0, v.jsx)(Ie.Img, {
                variant: "top",
                src: t.img,
                height: 190,
                width: 280,
                style: { borderRadius: ".5rem" },
              }),
              (0, v.jsxs)(Ie.Body, {
                children: [
                  (0, v.jsx)(Ie.Title, { children: t.title }),
                  (0, v.jsx)(Ie.Text, { children: t.content }),
                  (0, v.jsx)(Ve, {
                    variant: "primary",
                    children: (0, v.jsx)(fe, {
                      className: n ? "darkmodeText" : "lightmodeText",
                      to: "/blog/",
                      params: { id: "123" },
                      children: "Go somewhere",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      function $e(e) {
        var t,
          n,
          r = "";
        if ("string" === typeof e || "number" === typeof e) r += e;
        else if ("object" === typeof e)
          if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = $e(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      function qe() {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = $e(e)) && (r && (r += " "), (r += t));
        return r;
      }
      function Ke(e) {
        for (var t = "https://mui.com/production-error/?code=" + e, n = 1; n < arguments.length; n += 1)
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
      }
      function Ye(e) {
        if ("string" !== typeof e) throw new Error(Ke(7));
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var Ge = Ye;
      function Qe(e) {
        var t = e.theme,
          n = e.name,
          r = e.props;
        return t && t.components && t.components[n] && t.components[n].defaultProps
          ? (function (e, t) {
              var n = C({}, t);
              return (
                Object.keys(e).forEach(function (t) {
                  void 0 === n[t] && (n[t] = e[t]);
                }),
                n
              );
            })(t.components[n].defaultProps, r)
          : r;
      }
      function Xe(e) {
        return null !== e && "object" === typeof e && e.constructor === Object;
      }
      function Je(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { clone: !0 },
          r = n.clone ? C({}, e) : e;
        return (
          Xe(e) &&
            Xe(t) &&
            Object.keys(t).forEach(function (a) {
              "__proto__" !== a && (Xe(t[a]) && a in e && Xe(e[a]) ? (r[a] = Je(e[a], t[a], n)) : (r[a] = t[a]));
            }),
          r
        );
      }
      var Ze = ["values", "unit", "step"];
      function et(e) {
        var t = e.values,
          n = void 0 === t ? { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } : t,
          r = e.unit,
          a = void 0 === r ? "px" : r,
          i = e.step,
          o = void 0 === i ? 5 : i,
          l = c(e, Ze),
          s = (function (e) {
            var t =
              Object.keys(e).map(function (t) {
                return { key: t, val: e[t] };
              }) || [];
            return (
              t.sort(function (e, t) {
                return e.val - t.val;
              }),
              t.reduce(function (e, t) {
                return C({}, e, u({}, t.key, t.val));
              }, {})
            );
          })(n),
          f = Object.keys(s);
        function d(e) {
          var t = "number" === typeof n[e] ? n[e] : e;
          return "@media (min-width:".concat(t).concat(a, ")");
        }
        function p(e) {
          var t = "number" === typeof n[e] ? n[e] : e;
          return "@media (max-width:".concat(t - o / 100).concat(a, ")");
        }
        function h(e, t) {
          var r = f.indexOf(t);
          return (
            "@media (min-width:".concat("number" === typeof n[e] ? n[e] : e).concat(a, ") and ") +
            "(max-width:".concat((-1 !== r && "number" === typeof n[f[r]] ? n[f[r]] : t) - o / 100).concat(a, ")")
          );
        }
        return C(
          {
            keys: f,
            values: s,
            up: d,
            down: p,
            between: h,
            only: function (e) {
              return f.indexOf(e) + 1 < f.length ? h(e, f[f.indexOf(e) + 1]) : d(e);
            },
            not: function (e) {
              var t = f.indexOf(e);
              return 0 === t
                ? d(f[1])
                : t === f.length - 1
                ? p(f[t])
                : h(e, f[f.indexOf(e) + 1]).replace("@media", "@media not all and");
            },
            unit: a,
          },
          l
        );
      }
      var tt = { borderRadius: 4 },
        nt = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        rt = {
          keys: ["xs", "sm", "md", "lg", "xl"],
          up: function (e) {
            return "@media (min-width:".concat(nt[e], "px)");
          },
        };
      function at(e, t, n) {
        var r = e.theme || {};
        if (Array.isArray(t)) {
          var a = r.breakpoints || rt;
          return t.reduce(function (e, r, i) {
            return (e[a.up(a.keys[i])] = n(t[i])), e;
          }, {});
        }
        if ("object" === typeof t) {
          var i = r.breakpoints || rt;
          return Object.keys(t).reduce(function (e, r) {
            if (-1 !== Object.keys(i.values || nt).indexOf(r)) {
              e[i.up(r)] = n(t[r], r);
            } else {
              var a = r;
              e[a] = t[a];
            }
            return e;
          }, {});
        }
        return n(t);
      }
      function it() {
        var e,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n =
            null == t || null == (e = t.keys)
              ? void 0
              : e.reduce(function (e, n) {
                  return (e[t.up(n)] = {}), e;
                }, {});
        return n || {};
      }
      function ot(e, t) {
        return e.reduce(function (e, t) {
          var n = e[t];
          return (!n || 0 === Object.keys(n).length) && delete e[t], e;
        }, t);
      }
      function ut(e, t) {
        return t && "string" === typeof t
          ? t.split(".").reduce(function (e, t) {
              return e && e[t] ? e[t] : null;
            }, e)
          : null;
      }
      function lt(e, t, n) {
        var r,
          a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
        return (r = "function" === typeof e ? e(n) : Array.isArray(e) ? e[n] || a : ut(e, n) || a), t && (r = t(r)), r;
      }
      var st = function (e) {
        var t = e.prop,
          n = e.cssProperty,
          r = void 0 === n ? e.prop : n,
          a = e.themeKey,
          i = e.transform,
          o = function (e) {
            if (null == e[t]) return null;
            var n = e[t],
              o = ut(e.theme, a) || {};
            return at(e, n, function (e) {
              var n = lt(o, i, e);
              return (
                e === n &&
                  "string" === typeof e &&
                  (n = lt(o, i, "".concat(t).concat("default" === e ? "" : Ye(e)), e)),
                !1 === r ? n : u({}, r, n)
              );
            });
          };
        return (o.propTypes = {}), (o.filterProps = [t]), o;
      };
      var ct = function (e, t) {
        return t ? Je(e, t, { clone: !1 }) : e;
      };
      var ft = { m: "margin", p: "padding" },
        dt = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] },
        pt = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
        ht = (function (e) {
          var t = {};
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        })(function (e) {
          if (e.length > 2) {
            if (!pt[e]) return [e];
            e = pt[e];
          }
          var t = o(e.split(""), 2),
            n = t[0],
            r = t[1],
            a = ft[n],
            i = dt[r] || "";
          return Array.isArray(i)
            ? i.map(function (e) {
                return a + e;
              })
            : [a + i];
        }),
        mt = [
          "m",
          "mt",
          "mr",
          "mb",
          "ml",
          "mx",
          "my",
          "margin",
          "marginTop",
          "marginRight",
          "marginBottom",
          "marginLeft",
          "marginX",
          "marginY",
          "marginInline",
          "marginInlineStart",
          "marginInlineEnd",
          "marginBlock",
          "marginBlockStart",
          "marginBlockEnd",
        ],
        vt = [
          "p",
          "pt",
          "pr",
          "pb",
          "pl",
          "px",
          "py",
          "padding",
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
          "paddingX",
          "paddingY",
          "paddingInline",
          "paddingInlineStart",
          "paddingInlineEnd",
          "paddingBlock",
          "paddingBlockStart",
          "paddingBlockEnd",
        ],
        gt = [].concat(mt, vt);
      function yt(e, t, n, r) {
        var a = ut(e, t) || n;
        return "number" === typeof a
          ? function (e) {
              return "string" === typeof e ? e : a * e;
            }
          : Array.isArray(a)
          ? function (e) {
              return "string" === typeof e ? e : a[e];
            }
          : "function" === typeof a
          ? a
          : function () {};
      }
      function bt(e) {
        return yt(e, "spacing", 8);
      }
      function wt(e, t) {
        if ("string" === typeof t || null == t) return t;
        var n = e(Math.abs(t));
        return t >= 0 ? n : "number" === typeof n ? -n : "-".concat(n);
      }
      function xt(e, t, n, r) {
        if (-1 === t.indexOf(n)) return null;
        var a = (function (e, t) {
          return function (n) {
            return e.reduce(function (e, r) {
              return (e[r] = wt(t, n)), e;
            }, {});
          };
        })(ht(n), r);
        return at(e, e[n], a);
      }
      function kt(e, t) {
        var n = bt(e.theme);
        return Object.keys(e)
          .map(function (r) {
            return xt(e, t, r, n);
          })
          .reduce(ct, {});
      }
      function Et(e) {
        return kt(e, mt);
      }
      function St(e) {
        return kt(e, vt);
      }
      function Ct(e) {
        return kt(e, gt);
      }
      (Et.propTypes = {}),
        (Et.filterProps = mt),
        (St.propTypes = {}),
        (St.filterProps = vt),
        (Ct.propTypes = {}),
        (Ct.filterProps = gt);
      var Pt = Ct;
      function Ot() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8;
        if (e.mui) return e;
        var t = bt({ spacing: e }),
          n = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            var a = 0 === n.length ? [1] : n;
            return a
              .map(function (e) {
                var n = t(e);
                return "number" === typeof n ? "".concat(n, "px") : n;
              })
              .join(" ");
          };
        return (n.mui = !0), n;
      }
      var _t = ["breakpoints", "palette", "spacing", "shape"];
      var jt = function () {
        for (
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.breakpoints,
            n = void 0 === t ? {} : t,
            r = e.palette,
            a = void 0 === r ? {} : r,
            i = e.spacing,
            o = e.shape,
            u = void 0 === o ? {} : o,
            l = c(e, _t),
            s = et(n),
            f = Ot(i),
            d = Je(
              {
                breakpoints: s,
                direction: "ltr",
                components: {},
                palette: C({ mode: "light" }, a),
                spacing: f,
                shape: C({}, tt, u),
              },
              l
            ),
            p = arguments.length,
            h = new Array(p > 1 ? p - 1 : 0),
            m = 1;
          m < p;
          m++
        )
          h[m - 1] = arguments[m];
        return (d = h.reduce(function (e, t) {
          return Je(e, t);
        }, d));
      };
      var Tt = e.createContext(null);
      function Rt() {
        return e.useContext(Tt);
      }
      function At(e) {
        return 0 === Object.keys(e).length;
      }
      var Nt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = Rt();
          return !t || At(t) ? e : t;
        },
        Mt = jt();
      var Lt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mt;
        return Nt(e);
      };
      function It(e, t, n) {
        var r;
        return C(
          {
            toolbar:
              ((r = { minHeight: 56 }),
              u(r, "".concat(e.up("xs"), " and (orientation: landscape)"), { minHeight: 48 }),
              u(r, e.up("sm"), { minHeight: 64 }),
              r),
          },
          n
        );
      }
      function zt(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return Math.min(Math.max(t, e), n);
      }
      function Ft(e) {
        if (e.type) return e;
        if ("#" === e.charAt(0))
          return Ft(
            (function (e) {
              e = e.slice(1);
              var t = new RegExp(".{1,".concat(e.length >= 6 ? 2 : 1, "}"), "g"),
                n = e.match(t);
              return (
                n &&
                  1 === n[0].length &&
                  (n = n.map(function (e) {
                    return e + e;
                  })),
                n
                  ? "rgb".concat(4 === n.length ? "a" : "", "(").concat(
                      n
                        .map(function (e, t) {
                          return t < 3 ? parseInt(e, 16) : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3;
                        })
                        .join(", "),
                      ")"
                    )
                  : ""
              );
            })(e)
          );
        var t = e.indexOf("("),
          n = e.substring(0, t);
        if (-1 === ["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n)) throw new Error(Ke(9, e));
        var r,
          a = e.substring(t + 1, e.length - 1);
        if ("color" === n) {
          if (
            ((r = (a = a.split(" ")).shift()),
            4 === a.length && "/" === a[3].charAt(0) && (a[3] = a[3].slice(1)),
            -1 === ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(r))
          )
            throw new Error(Ke(10, r));
        } else a = a.split(",");
        return {
          type: n,
          values: (a = a.map(function (e) {
            return parseFloat(e);
          })),
          colorSpace: r,
        };
      }
      function Dt(e) {
        var t = e.type,
          n = e.colorSpace,
          r = e.values;
        return (
          -1 !== t.indexOf("rgb")
            ? (r = r.map(function (e, t) {
                return t < 3 ? parseInt(e, 10) : e;
              }))
            : -1 !== t.indexOf("hsl") && ((r[1] = "".concat(r[1], "%")), (r[2] = "".concat(r[2], "%"))),
          (r = -1 !== t.indexOf("color") ? "".concat(n, " ").concat(r.join(" ")) : "".concat(r.join(", "))),
          "".concat(t, "(").concat(r, ")")
        );
      }
      function Bt(e) {
        var t =
          "hsl" === (e = Ft(e)).type
            ? Ft(
                (function (e) {
                  var t = (e = Ft(e)).values,
                    n = t[0],
                    r = t[1] / 100,
                    a = t[2] / 100,
                    i = r * Math.min(a, 1 - a),
                    o = function (e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + n / 30) % 12;
                      return a - i * Math.max(Math.min(t - 3, 9 - t, 1), -1);
                    },
                    u = "rgb",
                    l = [Math.round(255 * o(0)), Math.round(255 * o(8)), Math.round(255 * o(4))];
                  return "hsla" === e.type && ((u += "a"), l.push(t[3])), Dt({ type: u, values: l });
                })(e)
              ).values
            : e.values;
        return (
          (t = t.map(function (t) {
            return "color" !== e.type && (t /= 255), t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
          })),
          Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
        );
      }
      function Wt(e, t) {
        if (((e = Ft(e)), (t = zt(t)), -1 !== e.type.indexOf("hsl"))) e.values[2] *= 1 - t;
        else if (-1 !== e.type.indexOf("rgb") || -1 !== e.type.indexOf("color"))
          for (var n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
        return Dt(e);
      }
      function Ut(e, t) {
        if (((e = Ft(e)), (t = zt(t)), -1 !== e.type.indexOf("hsl"))) e.values[2] += (100 - e.values[2]) * t;
        else if (-1 !== e.type.indexOf("rgb")) for (var n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
        else if (-1 !== e.type.indexOf("color")) for (var r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
        return Dt(e);
      }
      var Vt = { black: "#000", white: "#fff" },
        Ht = {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          A100: "#f5f5f5",
          A200: "#eeeeee",
          A400: "#bdbdbd",
          A700: "#616161",
        },
        $t = {
          50: "#f3e5f5",
          100: "#e1bee7",
          200: "#ce93d8",
          300: "#ba68c8",
          400: "#ab47bc",
          500: "#9c27b0",
          600: "#8e24aa",
          700: "#7b1fa2",
          800: "#6a1b9a",
          900: "#4a148c",
          A100: "#ea80fc",
          A200: "#e040fb",
          A400: "#d500f9",
          A700: "#aa00ff",
        },
        qt = {
          50: "#ffebee",
          100: "#ffcdd2",
          200: "#ef9a9a",
          300: "#e57373",
          400: "#ef5350",
          500: "#f44336",
          600: "#e53935",
          700: "#d32f2f",
          800: "#c62828",
          900: "#b71c1c",
          A100: "#ff8a80",
          A200: "#ff5252",
          A400: "#ff1744",
          A700: "#d50000",
        },
        Kt = {
          50: "#fff3e0",
          100: "#ffe0b2",
          200: "#ffcc80",
          300: "#ffb74d",
          400: "#ffa726",
          500: "#ff9800",
          600: "#fb8c00",
          700: "#f57c00",
          800: "#ef6c00",
          900: "#e65100",
          A100: "#ffd180",
          A200: "#ffab40",
          A400: "#ff9100",
          A700: "#ff6d00",
        },
        Yt = {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
          A100: "#82b1ff",
          A200: "#448aff",
          A400: "#2979ff",
          A700: "#2962ff",
        },
        Gt = {
          50: "#e1f5fe",
          100: "#b3e5fc",
          200: "#81d4fa",
          300: "#4fc3f7",
          400: "#29b6f6",
          500: "#03a9f4",
          600: "#039be5",
          700: "#0288d1",
          800: "#0277bd",
          900: "#01579b",
          A100: "#80d8ff",
          A200: "#40c4ff",
          A400: "#00b0ff",
          A700: "#0091ea",
        },
        Qt = {
          50: "#e8f5e9",
          100: "#c8e6c9",
          200: "#a5d6a7",
          300: "#81c784",
          400: "#66bb6a",
          500: "#4caf50",
          600: "#43a047",
          700: "#388e3c",
          800: "#2e7d32",
          900: "#1b5e20",
          A100: "#b9f6ca",
          A200: "#69f0ae",
          A400: "#00e676",
          A700: "#00c853",
        },
        Xt = ["mode", "contrastThreshold", "tonalOffset"],
        Jt = {
          text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" },
          divider: "rgba(0, 0, 0, 0.12)",
          background: { paper: Vt.white, default: Vt.white },
          action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: 0.04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
          },
        },
        Zt = {
          text: {
            primary: Vt.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)",
          },
          divider: "rgba(255, 255, 255, 0.12)",
          background: { paper: "#121212", default: "#121212" },
          action: {
            active: Vt.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: 0.16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
          },
        };
      function en(e, t, n, r) {
        var a = r.light || r,
          i = r.dark || 1.5 * r;
        e[t] ||
          (e.hasOwnProperty(n)
            ? (e[t] = e[n])
            : "light" === t
            ? (e.light = Ut(e.main, a))
            : "dark" === t && (e.dark = Wt(e.main, i)));
      }
      function tn(e) {
        var t = e.mode,
          n = void 0 === t ? "light" : t,
          r = e.contrastThreshold,
          a = void 0 === r ? 3 : r,
          i = e.tonalOffset,
          o = void 0 === i ? 0.2 : i,
          u = c(e, Xt),
          l =
            e.primary ||
            (function () {
              return "dark" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light")
                ? { main: Yt[200], light: Yt[50], dark: Yt[400] }
                : { main: Yt[700], light: Yt[400], dark: Yt[800] };
            })(n),
          s =
            e.secondary ||
            (function () {
              return "dark" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light")
                ? { main: $t[200], light: $t[50], dark: $t[400] }
                : { main: $t[500], light: $t[300], dark: $t[700] };
            })(n),
          f =
            e.error ||
            (function () {
              return "dark" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light")
                ? { main: qt[500], light: qt[300], dark: qt[700] }
                : { main: qt[700], light: qt[400], dark: qt[800] };
            })(n),
          d =
            e.info ||
            (function () {
              return "dark" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light")
                ? { main: Gt[400], light: Gt[300], dark: Gt[700] }
                : { main: Gt[700], light: Gt[500], dark: Gt[900] };
            })(n),
          p =
            e.success ||
            (function () {
              return "dark" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light")
                ? { main: Qt[400], light: Qt[300], dark: Qt[700] }
                : { main: Qt[800], light: Qt[500], dark: Qt[900] };
            })(n),
          h =
            e.warning ||
            (function () {
              return "dark" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "light")
                ? { main: Kt[400], light: Kt[300], dark: Kt[700] }
                : { main: "#ed6c02", light: Kt[500], dark: Kt[900] };
            })(n);
        function m(e) {
          var t =
            (function (e, t) {
              var n = Bt(e),
                r = Bt(t);
              return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
            })(e, Zt.text.primary) >= a
              ? Zt.text.primary
              : Jt.text.primary;
          return t;
        }
        var v = function (e) {
            var t = e.color,
              n = e.name,
              r = e.mainShade,
              a = void 0 === r ? 500 : r,
              i = e.lightShade,
              u = void 0 === i ? 300 : i,
              l = e.darkShade,
              s = void 0 === l ? 700 : l;
            if ((!(t = C({}, t)).main && t[a] && (t.main = t[a]), !t.hasOwnProperty("main")))
              throw new Error(Ke(11, n ? " (".concat(n, ")") : "", a));
            if ("string" !== typeof t.main)
              throw new Error(Ke(12, n ? " (".concat(n, ")") : "", JSON.stringify(t.main)));
            return en(t, "light", u, o), en(t, "dark", s, o), t.contrastText || (t.contrastText = m(t.main)), t;
          },
          g = { dark: Zt, light: Jt };
        return Je(
          C(
            {
              common: Vt,
              mode: n,
              primary: v({ color: l, name: "primary" }),
              secondary: v({ color: s, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }),
              error: v({ color: f, name: "error" }),
              warning: v({ color: h, name: "warning" }),
              info: v({ color: d, name: "info" }),
              success: v({ color: p, name: "success" }),
              grey: Ht,
              contrastThreshold: a,
              getContrastText: m,
              augmentColor: v,
              tonalOffset: o,
            },
            g[n]
          ),
          u
        );
      }
      var nn = [
        "fontFamily",
        "fontSize",
        "fontWeightLight",
        "fontWeightRegular",
        "fontWeightMedium",
        "fontWeightBold",
        "htmlFontSize",
        "allVariants",
        "pxToRem",
      ];
      var rn = { textTransform: "uppercase" },
        an = '"Roboto", "Helvetica", "Arial", sans-serif';
      function on(e, t) {
        var n = "function" === typeof t ? t(e) : t,
          r = n.fontFamily,
          a = void 0 === r ? an : r,
          i = n.fontSize,
          o = void 0 === i ? 14 : i,
          u = n.fontWeightLight,
          l = void 0 === u ? 300 : u,
          s = n.fontWeightRegular,
          f = void 0 === s ? 400 : s,
          d = n.fontWeightMedium,
          p = void 0 === d ? 500 : d,
          h = n.fontWeightBold,
          m = void 0 === h ? 700 : h,
          v = n.htmlFontSize,
          g = void 0 === v ? 16 : v,
          y = n.allVariants,
          b = n.pxToRem,
          w = c(n, nn);
        var x = o / 14,
          k =
            b ||
            function (e) {
              return "".concat((e / g) * x, "rem");
            },
          E = function (e, t, n, r, i) {
            return C(
              { fontFamily: a, fontWeight: e, fontSize: k(t), lineHeight: n },
              a === an ? { letterSpacing: "".concat(((o = r / t), Math.round(1e5 * o) / 1e5), "em") } : {},
              i,
              y
            );
            var o;
          },
          S = {
            h1: E(l, 96, 1.167, -1.5),
            h2: E(l, 60, 1.2, -0.5),
            h3: E(f, 48, 1.167, 0),
            h4: E(f, 34, 1.235, 0.25),
            h5: E(f, 24, 1.334, 0),
            h6: E(p, 20, 1.6, 0.15),
            subtitle1: E(f, 16, 1.75, 0.15),
            subtitle2: E(p, 14, 1.57, 0.1),
            body1: E(f, 16, 1.5, 0.15),
            body2: E(f, 14, 1.43, 0.15),
            button: E(p, 14, 1.75, 0.4, rn),
            caption: E(f, 12, 1.66, 0.4),
            overline: E(f, 12, 2.66, 1, rn),
          };
        return Je(
          C(
            {
              htmlFontSize: g,
              pxToRem: k,
              fontFamily: a,
              fontSize: o,
              fontWeightLight: l,
              fontWeightRegular: f,
              fontWeightMedium: p,
              fontWeightBold: m,
            },
            S
          ),
          w,
          { clone: !1 }
        );
      }
      function un() {
        return [
          ""
            .concat(arguments.length <= 0 ? void 0 : arguments[0], "px ")
            .concat(arguments.length <= 1 ? void 0 : arguments[1], "px ")
            .concat(arguments.length <= 2 ? void 0 : arguments[2], "px ")
            .concat(arguments.length <= 3 ? void 0 : arguments[3], "px rgba(0,0,0,")
            .concat(0.2, ")"),
          ""
            .concat(arguments.length <= 4 ? void 0 : arguments[4], "px ")
            .concat(arguments.length <= 5 ? void 0 : arguments[5], "px ")
            .concat(arguments.length <= 6 ? void 0 : arguments[6], "px ")
            .concat(arguments.length <= 7 ? void 0 : arguments[7], "px rgba(0,0,0,")
            .concat(0.14, ")"),
          ""
            .concat(arguments.length <= 8 ? void 0 : arguments[8], "px ")
            .concat(arguments.length <= 9 ? void 0 : arguments[9], "px ")
            .concat(arguments.length <= 10 ? void 0 : arguments[10], "px ")
            .concat(arguments.length <= 11 ? void 0 : arguments[11], "px rgba(0,0,0,")
            .concat(0.12, ")"),
        ].join(",");
      }
      var ln = [
          "none",
          un(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
          un(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
          un(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
          un(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
          un(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
          un(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
          un(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
          un(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
          un(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
          un(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
          un(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
          un(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
          un(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
          un(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
          un(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
          un(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
          un(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
          un(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
          un(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
          un(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
          un(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
          un(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
          un(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
          un(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
        ],
        sn = ["duration", "easing", "delay"],
        cn = {
          easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
          easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
          easeIn: "cubic-bezier(0.4, 0, 1, 1)",
          sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
        },
        fn = {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        };
      function dn(e) {
        return "".concat(Math.round(e), "ms");
      }
      function pn(e) {
        if (!e) return 0;
        var t = e / 36;
        return Math.round(10 * (4 + 15 * Math.pow(t, 0.25) + t / 5));
      }
      function hn(e) {
        var t = C({}, cn, e.easing),
          n = C({}, fn, e.duration);
        return C(
          {
            getAutoHeightDuration: pn,
            create: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["all"],
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = r.duration,
                i = void 0 === a ? n.standard : a,
                o = r.easing,
                u = void 0 === o ? t.easeInOut : o,
                l = r.delay,
                s = void 0 === l ? 0 : l;
              c(r, sn);
              return (Array.isArray(e) ? e : [e])
                .map(function (e) {
                  return ""
                    .concat(e, " ")
                    .concat("string" === typeof i ? i : dn(i), " ")
                    .concat(u, " ")
                    .concat("string" === typeof s ? s : dn(s));
                })
                .join(",");
            },
          },
          e,
          { easing: t, duration: n }
        );
      }
      var mn = {
          mobileStepper: 1e3,
          fab: 1050,
          speedDial: 1050,
          appBar: 1100,
          drawer: 1200,
          modal: 1300,
          snackbar: 1400,
          tooltip: 1500,
        },
        vn = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
      function gn() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.mixins,
          n = void 0 === t ? {} : t,
          r = e.palette,
          a = void 0 === r ? {} : r,
          i = e.transitions,
          o = void 0 === i ? {} : i,
          u = e.typography,
          l = void 0 === u ? {} : u,
          s = c(e, vn),
          f = tn(a),
          d = jt(e),
          p = Je(d, {
            mixins: It(d.breakpoints, d.spacing, n),
            palette: f,
            shadows: ln.slice(),
            typography: on(f, l),
            transitions: hn(o),
            zIndex: C({}, mn),
          });
        p = Je(p, s);
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++) m[v - 1] = arguments[v];
        return (p = m.reduce(function (e, t) {
          return Je(e, t);
        }, p));
      }
      var yn = gn();
      function bn(e) {
        return (function (e) {
          var t = e.props,
            n = e.name,
            r = e.defaultTheme;
          return Qe({ theme: Lt(r), name: n, props: t });
        })({ props: e.props, name: e.name, defaultTheme: yn });
      }
      function wn(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return a(e);
          })(e) ||
          (function (e) {
            if (("undefined" !== typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
              return Array.from(e);
          })(e) ||
          i(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var xn = function (e) {
          var t = Object.create(null);
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        },
        kn =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        En = xn(function (e) {
          return kn.test(e) || (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91);
        });
      var Sn = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement("style");
                    return (
                      t.setAttribute("data-emotion", e.key),
                      void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                      t.appendChild(document.createTextNode("")),
                      t.setAttribute("data-s", ""),
                      t
                    );
                  })(this)
                );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
                })(t);
                try {
                  n.insertRule(e, n.cssRules.length);
                } catch (r) {
                  0;
                }
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        Cn = Math.abs,
        Pn = String.fromCharCode,
        On = Object.assign;
      function _n(e) {
        return e.trim();
      }
      function jn(e, t, n) {
        return e.replace(t, n);
      }
      function Tn(e, t) {
        return e.indexOf(t);
      }
      function Rn(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function An(e, t, n) {
        return e.slice(t, n);
      }
      function Nn(e) {
        return e.length;
      }
      function Mn(e) {
        return e.length;
      }
      function Ln(e, t) {
        return t.push(e), e;
      }
      var In = 1,
        zn = 1,
        Fn = 0,
        Dn = 0,
        Bn = 0,
        Wn = "";
      function Un(e, t, n, r, a, i, o) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: a,
          children: i,
          line: In,
          column: zn,
          length: o,
          return: "",
        };
      }
      function Vn(e, t) {
        return On(Un("", null, null, "", null, null, 0), e, { length: -e.length }, t);
      }
      function Hn() {
        return (Bn = Dn > 0 ? Rn(Wn, --Dn) : 0), zn--, 10 === Bn && ((zn = 1), In--), Bn;
      }
      function $n() {
        return (Bn = Dn < Fn ? Rn(Wn, Dn++) : 0), zn++, 10 === Bn && ((zn = 1), In++), Bn;
      }
      function qn() {
        return Rn(Wn, Dn);
      }
      function Kn() {
        return Dn;
      }
      function Yn(e, t) {
        return An(Wn, e, t);
      }
      function Gn(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function Qn(e) {
        return (In = zn = 1), (Fn = Nn((Wn = e))), (Dn = 0), [];
      }
      function Xn(e) {
        return (Wn = ""), e;
      }
      function Jn(e) {
        return _n(Yn(Dn - 1, tr(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function Zn(e) {
        for (; (Bn = qn()) && Bn < 33; ) $n();
        return Gn(e) > 2 || Gn(Bn) > 3 ? "" : " ";
      }
      function er(e, t) {
        for (; --t && $n() && !(Bn < 48 || Bn > 102 || (Bn > 57 && Bn < 65) || (Bn > 70 && Bn < 97)); );
        return Yn(e, Kn() + (t < 6 && 32 == qn() && 32 == $n()));
      }
      function tr(e) {
        for (; $n(); )
          switch (Bn) {
            case e:
              return Dn;
            case 34:
            case 39:
              34 !== e && 39 !== e && tr(Bn);
              break;
            case 40:
              41 === e && tr(e);
              break;
            case 92:
              $n();
          }
        return Dn;
      }
      function nr(e, t) {
        for (; $n() && e + Bn !== 57 && (e + Bn !== 84 || 47 !== qn()); );
        return "/*" + Yn(t, Dn - 1) + "*" + Pn(47 === e ? e : $n());
      }
      function rr(e) {
        for (; !Gn(qn()); ) $n();
        return Yn(e, Dn);
      }
      var ar = "-ms-",
        ir = "-moz-",
        or = "-webkit-",
        ur = "comm",
        lr = "rule",
        sr = "decl",
        cr = "@keyframes";
      function fr(e, t) {
        for (var n = "", r = Mn(e), a = 0; a < r; a++) n += t(e[a], a, e, t) || "";
        return n;
      }
      function dr(e, t, n, r) {
        switch (e.type) {
          case "@import":
          case sr:
            return (e.return = e.return || e.value);
          case ur:
            return "";
          case cr:
            return (e.return = e.value + "{" + fr(e.children, r) + "}");
          case lr:
            e.value = e.props.join(",");
        }
        return Nn((n = fr(e.children, r))) ? (e.return = e.value + "{" + n + "}") : "";
      }
      function pr(e, t) {
        switch (
          (function (e, t) {
            return (((((((t << 2) ^ Rn(e, 0)) << 2) ^ Rn(e, 1)) << 2) ^ Rn(e, 2)) << 2) ^ Rn(e, 3);
          })(e, t)
        ) {
          case 5103:
            return or + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return or + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return or + e + ir + e + ar + e + e;
          case 6828:
          case 4268:
            return or + e + ar + e + e;
          case 6165:
            return or + e + ar + "flex-" + e + e;
          case 5187:
            return or + e + jn(e, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") + e;
          case 5443:
            return or + e + ar + "flex-item-" + jn(e, /flex-|-self/, "") + e;
          case 4675:
            return or + e + ar + "flex-line-pack" + jn(e, /align-content|flex-|-self/, "") + e;
          case 5548:
            return or + e + ar + jn(e, "shrink", "negative") + e;
          case 5292:
            return or + e + ar + jn(e, "basis", "preferred-size") + e;
          case 6060:
            return or + "box-" + jn(e, "-grow", "") + or + e + ar + jn(e, "grow", "positive") + e;
          case 4554:
            return or + jn(e, /([^-])(transform)/g, "$1-webkit-$2") + e;
          case 6187:
            return jn(jn(jn(e, /(zoom-|grab)/, or + "$1"), /(image-set)/, or + "$1"), e, "") + e;
          case 5495:
          case 3959:
            return jn(e, /(image-set\([^]*)/, or + "$1$`$1");
          case 4968:
            return (
              jn(jn(e, /(.+:)(flex-)?(.*)/, "-webkit-box-pack:$3-ms-flex-pack:$3"), /s.+-b[^;]+/, "justify") +
              or +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return jn(e, /(.+)-inline(.+)/, or + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (Nn(e) - 1 - t > 6)
              switch (Rn(e, t + 1)) {
                case 109:
                  if (45 !== Rn(e, t + 4)) break;
                case 102:
                  return (
                    jn(e, /(.+:)(.+)-([^]+)/, "$1-webkit-$2-$3$1" + ir + (108 == Rn(e, t + 3) ? "$3" : "$2-$3")) + e
                  );
                case 115:
                  return ~Tn(e, "stretch") ? pr(jn(e, "stretch", "fill-available"), t) + e : e;
              }
            break;
          case 4949:
            if (115 !== Rn(e, t + 1)) break;
          case 6444:
            switch (Rn(e, Nn(e) - 3 - (~Tn(e, "!important") && 10))) {
              case 107:
                return jn(e, ":", ":" + or) + e;
              case 101:
                return (
                  jn(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1" + or + (45 === Rn(e, 14) ? "inline-" : "") + "box$3$1" + or + "$2$3$1" + ar + "$2box$3"
                  ) + e
                );
            }
            break;
          case 5936:
            switch (Rn(e, t + 11)) {
              case 114:
                return or + e + ar + jn(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return or + e + ar + jn(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return or + e + ar + jn(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return or + e + ar + e + e;
        }
        return e;
      }
      function hr(e) {
        return Xn(mr("", null, null, null, [""], (e = Qn(e)), 0, [0], e));
      }
      function mr(e, t, n, r, a, i, o, u, l) {
        for (
          var s = 0, c = 0, f = o, d = 0, p = 0, h = 0, m = 1, v = 1, g = 1, y = 0, b = "", w = a, x = i, k = r, E = b;
          v;

        )
          switch (((h = y), (y = $n()))) {
            case 40:
              if (108 != h && 58 == E.charCodeAt(f - 1)) {
                -1 != Tn((E += jn(Jn(y), "&", "&\f")), "&\f") && (g = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              E += Jn(y);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              E += Zn(h);
              break;
            case 92:
              E += er(Kn() - 1, 7);
              continue;
            case 47:
              switch (qn()) {
                case 42:
                case 47:
                  Ln(gr(nr($n(), Kn()), t, n), l);
                  break;
                default:
                  E += "/";
              }
              break;
            case 123 * m:
              u[s++] = Nn(E) * g;
            case 125 * m:
            case 59:
            case 0:
              switch (y) {
                case 0:
                case 125:
                  v = 0;
                case 59 + c:
                  p > 0 &&
                    Nn(E) - f &&
                    Ln(p > 32 ? yr(E + ";", r, n, f - 1) : yr(jn(E, " ", "") + ";", r, n, f - 2), l);
                  break;
                case 59:
                  E += ";";
                default:
                  if ((Ln((k = vr(E, t, n, s, c, a, u, b, (w = []), (x = []), f)), i), 123 === y))
                    if (0 === c) mr(E, t, k, k, w, i, f, u, x);
                    else
                      switch (d) {
                        case 100:
                        case 109:
                        case 115:
                          mr(e, k, k, r && Ln(vr(e, k, k, 0, 0, a, u, b, a, (w = []), f), x), a, x, f, u, r ? w : x);
                          break;
                        default:
                          mr(E, k, k, k, [""], x, 0, u, x);
                      }
              }
              (s = c = p = 0), (m = g = 1), (b = E = ""), (f = o);
              break;
            case 58:
              (f = 1 + Nn(E)), (p = h);
            default:
              if (m < 1)
                if (123 == y) --m;
                else if (125 == y && 0 == m++ && 125 == Hn()) continue;
              switch (((E += Pn(y)), y * m)) {
                case 38:
                  g = c > 0 ? 1 : ((E += "\f"), -1);
                  break;
                case 44:
                  (u[s++] = (Nn(E) - 1) * g), (g = 1);
                  break;
                case 64:
                  45 === qn() && (E += Jn($n())), (d = qn()), (c = f = Nn((b = E += rr(Kn())))), y++;
                  break;
                case 45:
                  45 === h && 2 == Nn(E) && (m = 0);
              }
          }
        return i;
      }
      function vr(e, t, n, r, a, i, o, u, l, s, c) {
        for (var f = a - 1, d = 0 === a ? i : [""], p = Mn(d), h = 0, m = 0, v = 0; h < r; ++h)
          for (var g = 0, y = An(e, f + 1, (f = Cn((m = o[h])))), b = e; g < p; ++g)
            (b = _n(m > 0 ? d[g] + " " + y : jn(y, /&\f/g, d[g]))) && (l[v++] = b);
        return Un(e, t, n, 0 === a ? lr : u, l, s, c);
      }
      function gr(e, t, n) {
        return Un(e, t, n, ur, Pn(Bn), An(e, 2, -2), 0);
      }
      function yr(e, t, n, r) {
        return Un(e, t, n, sr, An(e, 0, r), An(e, r + 1, -1), r);
      }
      var br = function (e, t, n) {
          for (var r = 0, a = 0; (r = a), (a = qn()), 38 === r && 12 === a && (t[n] = 1), !Gn(a); ) $n();
          return Yn(e, Dn);
        },
        wr = function (e, t) {
          return Xn(
            (function (e, t) {
              var n = -1,
                r = 44;
              do {
                switch (Gn(r)) {
                  case 0:
                    38 === r && 12 === qn() && (t[n] = 1), (e[n] += br(Dn - 1, t, n));
                    break;
                  case 2:
                    e[n] += Jn(r);
                    break;
                  case 4:
                    if (44 === r) {
                      (e[++n] = 58 === qn() ? "&\f" : ""), (t[n] = e[n].length);
                      break;
                    }
                  default:
                    e[n] += Pn(r);
                }
              } while ((r = $n()));
              return e;
            })(Qn(e), t)
          );
        },
        xr = new WeakMap(),
        kr = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; "rule" !== n.type; )
              if (!(n = n.parent)) return;
            if ((1 !== e.props.length || 58 === t.charCodeAt(0) || xr.get(n)) && !r) {
              xr.set(e, !0);
              for (var a = [], i = wr(t, a), o = n.props, u = 0, l = 0; u < i.length; u++)
                for (var s = 0; s < o.length; s++, l++)
                  e.props[l] = a[u] ? i[u].replace(/&\f/g, o[s]) : o[s] + " " + i[u];
            }
          }
        },
        Er = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && ((e.return = ""), (e.value = ""));
          }
        },
        Sr = [
          function (e, t, n, r) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case sr:
                  e.return = pr(e.value, e.length);
                  break;
                case cr:
                  return fr([Vn(e, { value: jn(e.value, "@", "@" + or) })], r);
                case lr:
                  if (e.length)
                    return (function (e, t) {
                      return e.map(t).join("");
                    })(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = t.exec(e)) ? e[0] : e;
                        })(t, /(::plac\w+|:read-\w+)/)
                      ) {
                        case ":read-only":
                        case ":read-write":
                          return fr([Vn(e, { props: [jn(t, /:(read-\w+)/, ":-moz-$1")] })], r);
                        case "::placeholder":
                          return fr(
                            [
                              Vn(e, { props: [jn(t, /:(plac\w+)/, ":-webkit-input-$1")] }),
                              Vn(e, { props: [jn(t, /:(plac\w+)/, ":-moz-$1")] }),
                              Vn(e, { props: [jn(t, /:(plac\w+)/, ar + "input-$1")] }),
                            ],
                            r
                          );
                      }
                      return "";
                    });
              }
          },
        ],
        Cr = function (e) {
          var t = e.key;
          if ("css" === t) {
            var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(n, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var r = e.stylisPlugins || Sr;
          var a,
            i,
            o = {},
            u = [];
          (a = e.container || document.head),
            Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function (e) {
              for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) o[t[n]] = !0;
              u.push(e);
            });
          var l,
            s,
            c = [
              dr,
              ((s = function (e) {
                l.insert(e);
              }),
              function (e) {
                e.root || ((e = e.return) && s(e));
              }),
            ],
            f = (function (e) {
              var t = Mn(e);
              return function (n, r, a, i) {
                for (var o = "", u = 0; u < t; u++) o += e[u](n, r, a, i) || "";
                return o;
              };
            })([kr, Er].concat(r, c));
          i = function (e, t, n, r) {
            (l = n), fr(hr(e ? e + "{" + t.styles + "}" : t.styles), f), r && (d.inserted[t.name] = !0);
          };
          var d = {
            key: t,
            sheet: new Sn({
              key: t,
              container: a,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: o,
            registered: {},
            insert: i,
          };
          return d.sheet.hydrate(u), d;
        };
      var Pr = function (e) {
          for (var t, n = 0, r = 0, a = e.length; a >= 4; ++r, a -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(r)) |
                    ((255 & e.charCodeAt(++r)) << 8) |
                    ((255 & e.charCodeAt(++r)) << 16) |
                    ((255 & e.charCodeAt(++r)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (n =
                (1540483477 * (65535 & (t ^= t >>> 24)) + ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
          switch (a) {
            case 3:
              n ^= (255 & e.charCodeAt(r + 2)) << 16;
            case 2:
              n ^= (255 & e.charCodeAt(r + 1)) << 8;
            case 1:
              n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + ((59797 * (n >>> 16)) << 16);
          }
          return (
            ((n = 1540483477 * (65535 & (n ^= n >>> 13)) + ((59797 * (n >>> 16)) << 16)) ^ (n >>> 15)) >>>
            0
          ).toString(36);
        },
        Or = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        _r = /[A-Z]|^ms/g,
        jr = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        Tr = function (e) {
          return 45 === e.charCodeAt(1);
        },
        Rr = function (e) {
          return null != e && "boolean" !== typeof e;
        },
        Ar = xn(function (e) {
          return Tr(e) ? e : e.replace(_r, "-$&").toLowerCase();
        }),
        Nr = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" === typeof t)
                return t.replace(jr, function (e, t, n) {
                  return (Lr = { name: t, styles: n, next: Lr }), t;
                });
          }
          return 1 === Or[e] || Tr(e) || "number" !== typeof t || 0 === t ? t : t + "px";
        };
      function Mr(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim) return (Lr = { name: n.name, styles: n.styles, next: Lr }), n.name;
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r; ) (Lr = { name: r.name, styles: r.styles, next: Lr }), (r = r.next);
              return n.styles + ";";
            }
            return (function (e, t, n) {
              var r = "";
              if (Array.isArray(n)) for (var a = 0; a < n.length; a++) r += Mr(e, t, n[a]) + ";";
              else
                for (var i in n) {
                  var o = n[i];
                  if ("object" !== typeof o)
                    null != t && void 0 !== t[o]
                      ? (r += i + "{" + t[o] + "}")
                      : Rr(o) && (r += Ar(i) + ":" + Nr(i, o) + ";");
                  else if (!Array.isArray(o) || "string" !== typeof o[0] || (null != t && void 0 !== t[o[0]])) {
                    var u = Mr(e, t, o);
                    switch (i) {
                      case "animation":
                      case "animationName":
                        r += Ar(i) + ":" + u + ";";
                        break;
                      default:
                        r += i + "{" + u + "}";
                    }
                  } else for (var l = 0; l < o.length; l++) Rr(o[l]) && (r += Ar(i) + ":" + Nr(i, o[l]) + ";");
                }
              return r;
            })(e, t, n);
          case "function":
            if (void 0 !== e) {
              var a = Lr,
                i = n(e);
              return (Lr = a), Mr(e, t, i);
            }
        }
        if (null == t) return n;
        var o = t[n];
        return void 0 !== o ? o : n;
      }
      var Lr,
        Ir = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
      var zr = function (e, t, n) {
          if (1 === e.length && "object" === typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
          var r = !0,
            a = "";
          Lr = void 0;
          var i = e[0];
          null == i || void 0 === i.raw ? ((r = !1), (a += Mr(n, t, i))) : (a += i[0]);
          for (var o = 1; o < e.length; o++) (a += Mr(n, t, e[o])), r && (a += i[o]);
          Ir.lastIndex = 0;
          for (var u, l = ""; null !== (u = Ir.exec(a)); ) l += "-" + u[1];
          return { name: Pr(a) + l, styles: a, next: Lr };
        },
        Fr = (0, e.createContext)("undefined" !== typeof HTMLElement ? Cr({ key: "css" }) : null);
      Fr.Provider;
      var Dr = function (t) {
          return (0, e.forwardRef)(function (n, r) {
            var a = (0, e.useContext)(Fr);
            return t(n, a, r);
          });
        },
        Br = (0, e.createContext)({});
      t.useInsertionEffect && t.useInsertionEffect;
      function Wr(e, t, n) {
        var r = "";
        return (
          n.split(" ").forEach(function (n) {
            void 0 !== e[n] ? t.push(e[n] + ";") : (r += n + " ");
          }),
          r
        );
      }
      var Ur = function (e, t, n) {
          var r = e.key + "-" + t.name;
          !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles);
        },
        Vr = En,
        Hr = function (e) {
          return "theme" !== e;
        },
        $r = function (e) {
          return "string" === typeof e && e.charCodeAt(0) > 96 ? Vr : Hr;
        },
        qr = function (e, t, n) {
          var r;
          if (t) {
            var a = t.shouldForwardProp;
            r =
              e.__emotion_forwardProp && a
                ? function (t) {
                    return e.__emotion_forwardProp(t) && a(t);
                  }
                : a;
          }
          return "function" !== typeof r && n && (r = e.__emotion_forwardProp), r;
        },
        Kr = t.useInsertionEffect
          ? t.useInsertionEffect
          : function (e) {
              e();
            };
      var Yr = function (e) {
          var t = e.cache,
            n = e.serialized,
            r = e.isStringTag;
          Ur(t, n, r);
          var a;
          (a = function () {
            return (function (e, t, n) {
              Ur(e, t, n);
              var r = e.key + "-" + t.name;
              if (void 0 === e.inserted[t.name]) {
                var a = t;
                do {
                  e.insert(t === a ? "." + r : "", a, e.sheet, !0), (a = a.next);
                } while (void 0 !== a);
              }
            })(t, n, r);
          }),
            Kr(a);
          return null;
        },
        Gr = function t(n, r) {
          var a,
            i,
            o = n.__emotion_real === n,
            u = (o && n.__emotion_base) || n;
          void 0 !== r && ((a = r.label), (i = r.target));
          var l = qr(n, r, o),
            s = l || $r(u),
            c = !s("as");
          return function () {
            var f = arguments,
              d = o && void 0 !== n.__emotion_styles ? n.__emotion_styles.slice(0) : [];
            if ((void 0 !== a && d.push("label:" + a + ";"), null == f[0] || void 0 === f[0].raw)) d.push.apply(d, f);
            else {
              0, d.push(f[0][0]);
              for (var p = f.length, h = 1; h < p; h++) d.push(f[h], f[0][h]);
            }
            var m = Dr(function (t, n, r) {
              var a = (c && t.as) || u,
                o = "",
                f = [],
                p = t;
              if (null == t.theme) {
                for (var h in ((p = {}), t)) p[h] = t[h];
                p.theme = (0, e.useContext)(Br);
              }
              "string" === typeof t.className
                ? (o = Wr(n.registered, f, t.className))
                : null != t.className && (o = t.className + " ");
              var m = zr(d.concat(f), n.registered, p);
              (o += n.key + "-" + m.name), void 0 !== i && (o += " " + i);
              var v = c && void 0 === l ? $r(a) : s,
                g = {};
              for (var y in t) (c && "as" === y) || (v(y) && (g[y] = t[y]));
              return (
                (g.className = o),
                (g.ref = r),
                (0, e.createElement)(
                  e.Fragment,
                  null,
                  (0, e.createElement)(Yr, { cache: n, serialized: m, isStringTag: "string" === typeof a }),
                  (0, e.createElement)(a, g)
                )
              );
            });
            return (
              (m.displayName =
                void 0 !== a
                  ? a
                  : "Styled(" + ("string" === typeof u ? u : u.displayName || u.name || "Component") + ")"),
              (m.defaultProps = n.defaultProps),
              (m.__emotion_real = m),
              (m.__emotion_base = u),
              (m.__emotion_styles = d),
              (m.__emotion_forwardProp = l),
              Object.defineProperty(m, "toString", {
                value: function () {
                  return "." + i;
                },
              }),
              (m.withComponent = function (e, n) {
                return t(e, C({}, r, n, { shouldForwardProp: qr(m, n, !0) })).apply(void 0, d);
              }),
              m
            );
          };
        },
        Qr = Gr.bind();
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (e) {
        Qr[e] = Qr(e);
      });
      var Xr = Qr;
      function Jr(e, t) {
        return Xr(e, t);
      }
      var Zr = ["variant"];
      function ea(e) {
        return 0 === e.length;
      }
      function ta(e) {
        var t = e.variant,
          n = c(e, Zr),
          r = t || "";
        return (
          Object.keys(n)
            .sort()
            .forEach(function (t) {
              r += "color" === t ? (ea(r) ? e[t] : Ye(e[t])) : "".concat(ea(r) ? t : Ye(t)).concat(Ye(e[t].toString()));
            }),
          r
        );
      }
      var na = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = t.reduce(function (e, t) {
            return (
              t.filterProps.forEach(function (n) {
                e[n] = t;
              }),
              e
            );
          }, {}),
          a = function (e) {
            return Object.keys(e).reduce(function (t, n) {
              return r[n] ? ct(t, r[n](e)) : t;
            }, {});
          };
        return (
          (a.propTypes = {}),
          (a.filterProps = t.reduce(function (e, t) {
            return e.concat(t.filterProps);
          }, [])),
          a
        );
      };
      function ra(e) {
        return "number" !== typeof e ? e : "".concat(e, "px solid");
      }
      var aa = st({ prop: "border", themeKey: "borders", transform: ra }),
        ia = st({ prop: "borderTop", themeKey: "borders", transform: ra }),
        oa = st({ prop: "borderRight", themeKey: "borders", transform: ra }),
        ua = st({ prop: "borderBottom", themeKey: "borders", transform: ra }),
        la = st({ prop: "borderLeft", themeKey: "borders", transform: ra }),
        sa = st({ prop: "borderColor", themeKey: "palette" }),
        ca = st({ prop: "borderTopColor", themeKey: "palette" }),
        fa = st({ prop: "borderRightColor", themeKey: "palette" }),
        da = st({ prop: "borderBottomColor", themeKey: "palette" }),
        pa = st({ prop: "borderLeftColor", themeKey: "palette" }),
        ha = function (e) {
          if (void 0 !== e.borderRadius && null !== e.borderRadius) {
            var t = yt(e.theme, "shape.borderRadius", 4);
            return at(e, e.borderRadius, function (e) {
              return { borderRadius: wt(t, e) };
            });
          }
          return null;
        };
      (ha.propTypes = {}), (ha.filterProps = ["borderRadius"]);
      var ma = na(aa, ia, oa, ua, la, sa, ca, fa, da, pa, ha),
        va = na(
          st({
            prop: "displayPrint",
            cssProperty: !1,
            transform: function (e) {
              return { "@media print": { display: e } };
            },
          }),
          st({ prop: "display" }),
          st({ prop: "overflow" }),
          st({ prop: "textOverflow" }),
          st({ prop: "visibility" }),
          st({ prop: "whiteSpace" })
        ),
        ga = na(
          st({ prop: "flexBasis" }),
          st({ prop: "flexDirection" }),
          st({ prop: "flexWrap" }),
          st({ prop: "justifyContent" }),
          st({ prop: "alignItems" }),
          st({ prop: "alignContent" }),
          st({ prop: "order" }),
          st({ prop: "flex" }),
          st({ prop: "flexGrow" }),
          st({ prop: "flexShrink" }),
          st({ prop: "alignSelf" }),
          st({ prop: "justifyItems" }),
          st({ prop: "justifySelf" })
        ),
        ya = function (e) {
          if (void 0 !== e.gap && null !== e.gap) {
            var t = yt(e.theme, "spacing", 8);
            return at(e, e.gap, function (e) {
              return { gap: wt(t, e) };
            });
          }
          return null;
        };
      (ya.propTypes = {}), (ya.filterProps = ["gap"]);
      var ba = function (e) {
        if (void 0 !== e.columnGap && null !== e.columnGap) {
          var t = yt(e.theme, "spacing", 8);
          return at(e, e.columnGap, function (e) {
            return { columnGap: wt(t, e) };
          });
        }
        return null;
      };
      (ba.propTypes = {}), (ba.filterProps = ["columnGap"]);
      var wa = function (e) {
        if (void 0 !== e.rowGap && null !== e.rowGap) {
          var t = yt(e.theme, "spacing", 8);
          return at(e, e.rowGap, function (e) {
            return { rowGap: wt(t, e) };
          });
        }
        return null;
      };
      (wa.propTypes = {}), (wa.filterProps = ["rowGap"]);
      var xa = na(
          ya,
          ba,
          wa,
          st({ prop: "gridColumn" }),
          st({ prop: "gridRow" }),
          st({ prop: "gridAutoFlow" }),
          st({ prop: "gridAutoColumns" }),
          st({ prop: "gridAutoRows" }),
          st({ prop: "gridTemplateColumns" }),
          st({ prop: "gridTemplateRows" }),
          st({ prop: "gridTemplateAreas" }),
          st({ prop: "gridArea" })
        ),
        ka = na(
          st({ prop: "position" }),
          st({ prop: "zIndex", themeKey: "zIndex" }),
          st({ prop: "top" }),
          st({ prop: "right" }),
          st({ prop: "bottom" }),
          st({ prop: "left" })
        ),
        Ea = na(
          st({ prop: "color", themeKey: "palette" }),
          st({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette" }),
          st({ prop: "backgroundColor", themeKey: "palette" })
        ),
        Sa = st({ prop: "boxShadow", themeKey: "shadows" });
      function Ca(e) {
        return e <= 1 && 0 !== e ? "".concat(100 * e, "%") : e;
      }
      var Pa = st({ prop: "width", transform: Ca }),
        Oa = function (e) {
          if (void 0 !== e.maxWidth && null !== e.maxWidth) {
            return at(e, e.maxWidth, function (t) {
              var n, r, a;
              return {
                maxWidth:
                  (null == (n = e.theme) || null == (r = n.breakpoints) || null == (a = r.values) ? void 0 : a[t]) ||
                  nt[t] ||
                  Ca(t),
              };
            });
          }
          return null;
        };
      Oa.filterProps = ["maxWidth"];
      var _a = st({ prop: "minWidth", transform: Ca }),
        ja = st({ prop: "height", transform: Ca }),
        Ta = st({ prop: "maxHeight", transform: Ca }),
        Ra = st({ prop: "minHeight", transform: Ca }),
        Aa =
          (st({ prop: "size", cssProperty: "width", transform: Ca }),
          st({ prop: "size", cssProperty: "height", transform: Ca }),
          na(Pa, Oa, _a, ja, Ta, Ra, st({ prop: "boxSizing" }))),
        Na = st({ prop: "fontFamily", themeKey: "typography" }),
        Ma = st({ prop: "fontSize", themeKey: "typography" }),
        La = st({ prop: "fontStyle", themeKey: "typography" }),
        Ia = st({ prop: "fontWeight", themeKey: "typography" }),
        za = st({ prop: "letterSpacing" }),
        Fa = st({ prop: "textTransform" }),
        Da = st({ prop: "lineHeight" }),
        Ba = st({ prop: "textAlign" }),
        Wa = na(st({ prop: "typography", cssProperty: !1, themeKey: "typography" }), Na, Ma, La, Ia, za, Da, Ba, Fa),
        Ua = {
          borders: ma.filterProps,
          display: va.filterProps,
          flexbox: ga.filterProps,
          grid: xa.filterProps,
          positions: ka.filterProps,
          palette: Ea.filterProps,
          shadows: Sa.filterProps,
          sizing: Aa.filterProps,
          spacing: Pt.filterProps,
          typography: Wa.filterProps,
        },
        Va = {
          borders: ma,
          display: va,
          flexbox: ga,
          grid: xa,
          positions: ka,
          palette: Ea,
          shadows: Sa,
          sizing: Aa,
          spacing: Pt,
          typography: Wa,
        };
      Object.keys(Ua).reduce(function (e, t) {
        return (
          Ua[t].forEach(function (n) {
            e[n] = Va[t];
          }),
          e
        );
      }, {});
      function Ha() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = t.reduce(function (e, t) {
            return e.concat(Object.keys(t));
          }, []),
          a = new Set(r);
        return t.every(function (e) {
          return a.size === Object.keys(e).length;
        });
      }
      function $a(e, t) {
        return "function" === typeof e ? e(t) : e;
      }
      var qa = (function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Va,
          t = Object.keys(e).reduce(function (t, n) {
            return (
              e[n].filterProps.forEach(function (r) {
                t[r] = e[n];
              }),
              t
            );
          }, {});
        function n(e, n, r) {
          var a,
            i = (u((a = {}), e, n), u(a, "theme", r), a),
            o = t[e];
          return o ? o(i) : u({}, e, n);
        }
        function r(e) {
          var a = e || {},
            i = a.sx,
            o = a.theme,
            l = void 0 === o ? {} : o;
          if (!i) return null;
          function s(e) {
            var a = e;
            if ("function" === typeof e) a = e(l);
            else if ("object" !== typeof e) return e;
            if (!a) return null;
            var i = it(l.breakpoints),
              o = Object.keys(i),
              s = i;
            return (
              Object.keys(a).forEach(function (e) {
                var i = $a(a[e], l);
                if (null !== i && void 0 !== i)
                  if ("object" === typeof i)
                    if (t[e]) s = ct(s, n(e, i, l));
                    else {
                      var o = at({ theme: l }, i, function (t) {
                        return u({}, e, t);
                      });
                      Ha(o, i) ? (s[e] = r({ sx: i, theme: l })) : (s = ct(s, o));
                    }
                  else s = ct(s, n(e, i, l));
              }),
              ot(o, s)
            );
          }
          return Array.isArray(i) ? i.map(s) : s(i);
        }
        return r;
      })();
      qa.filterProps = ["sx"];
      var Ka = qa,
        Ya = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"],
        Ga = ["theme"],
        Qa = ["theme"];
      function Xa(e) {
        return 0 === Object.keys(e).length;
      }
      var Ja = function (e, t) {
          return t.components && t.components[e] && t.components[e].styleOverrides
            ? t.components[e].styleOverrides
            : null;
        },
        Za = function (e, t) {
          var n = [];
          t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
          var r = {};
          return (
            n.forEach(function (e) {
              var t = ta(e.props);
              r[t] = e.style;
            }),
            r
          );
        },
        ei = function (e, t, n, r) {
          var a,
            i,
            o = e.ownerState,
            u = void 0 === o ? {} : o,
            l = [],
            s = null == n || null == (a = n.components) || null == (i = a[r]) ? void 0 : i.variants;
          return (
            s &&
              s.forEach(function (n) {
                var r = !0;
                Object.keys(n.props).forEach(function (t) {
                  u[t] !== n.props[t] && e[t] !== n.props[t] && (r = !1);
                }),
                  r && l.push(t[ta(n.props)]);
              }),
            l
          );
        };
      function ti(e) {
        return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
      }
      var ni = jt();
      function ri() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.defaultTheme,
          n = void 0 === t ? ni : t,
          r = e.rootShouldForwardProp,
          a = void 0 === r ? ti : r,
          i = e.slotShouldForwardProp,
          u = void 0 === i ? ti : i,
          l = e.styleFunctionSx,
          s = void 0 === l ? Ka : l;
        return function (e) {
          var t,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = r.name,
            l = r.slot,
            f = r.skipVariantsResolver,
            d = r.skipSx,
            p = r.overridesResolver,
            h = c(r, Ya),
            m = void 0 !== f ? f : (l && "Root" !== l) || !1,
            v = d || !1;
          var g = ti;
          "Root" === l ? (g = a) : l && (g = u);
          var y = Jr(e, C({ shouldForwardProp: g, label: t }, h)),
            b = function (e) {
              for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                r[a - 1] = arguments[a];
              var u = r
                  ? r.map(function (e) {
                      return "function" === typeof e && e.__emotion_real !== e
                        ? function (t) {
                            var r = t.theme,
                              a = c(t, Ga);
                            return e(C({ theme: Xa(r) ? n : r }, a));
                          }
                        : e;
                    })
                  : [],
                l = e;
              i &&
                p &&
                u.push(function (e) {
                  var t = Xa(e.theme) ? n : e.theme,
                    r = Ja(i, t);
                  if (r) {
                    var a = {};
                    return (
                      Object.entries(r).forEach(function (t) {
                        var n = o(t, 2),
                          r = n[0],
                          i = n[1];
                        a[r] = "function" === typeof i ? i(e) : i;
                      }),
                      p(e, a)
                    );
                  }
                  return null;
                }),
                i &&
                  !m &&
                  u.push(function (e) {
                    var t = Xa(e.theme) ? n : e.theme;
                    return ei(e, Za(i, t), t, i);
                  }),
                v ||
                  u.push(function (e) {
                    var t = Xa(e.theme) ? n : e.theme;
                    return s(C({}, e, { theme: t }));
                  });
              var f = u.length - r.length;
              if (Array.isArray(e) && f > 0) {
                var d = new Array(f).fill("");
                (l = [].concat(wn(e), wn(d))).raw = [].concat(wn(e.raw), wn(d));
              } else
                "function" === typeof e &&
                  e.__emotion_real !== e &&
                  (l = function (t) {
                    var r = t.theme,
                      a = c(t, Qa);
                    return e(C({ theme: Xa(r) ? n : r }, a));
                  });
              var h = y.apply(void 0, [l].concat(wn(u)));
              return h;
            };
          return y.withConfig && (b.withConfig = y.withConfig), b;
        };
      }
      var ai = ri({
          defaultTheme: yn,
          rootShouldForwardProp: function (e) {
            return ti(e) && "classes" !== e;
          },
        }),
        ii = function (e) {
          return e;
        },
        oi = (function () {
          var e = ii;
          return {
            configure: function (t) {
              e = t;
            },
            generate: function (t) {
              return e(t);
            },
            reset: function () {
              e = ii;
            },
          };
        })(),
        ui = {
          active: "Mui-active",
          checked: "Mui-checked",
          completed: "Mui-completed",
          disabled: "Mui-disabled",
          error: "Mui-error",
          expanded: "Mui-expanded",
          focused: "Mui-focused",
          focusVisible: "Mui-focusVisible",
          required: "Mui-required",
          selected: "Mui-selected",
        };
      function li(e, t) {
        return ui[t] || "".concat(oi.generate(e), "-").concat(t);
      }
      function si(e) {
        return li("MuiSvgIcon", e);
      }
      !(function (e, t) {
        var n = {};
        t.forEach(function (t) {
          n[t] = li(e, t);
        });
      })("MuiSvgIcon", [
        "root",
        "colorPrimary",
        "colorSecondary",
        "colorAction",
        "colorError",
        "colorDisabled",
        "fontSizeInherit",
        "fontSizeSmall",
        "fontSizeMedium",
        "fontSizeLarge",
      ]);
      var ci = [
          "children",
          "className",
          "color",
          "component",
          "fontSize",
          "htmlColor",
          "inheritViewBox",
          "titleAccess",
          "viewBox",
        ],
        fi = function (e) {
          var t = e.color,
            n = e.fontSize,
            r = e.classes;
          return (function (e, t, n) {
            var r = {};
            return (
              Object.keys(e).forEach(function (a) {
                r[a] = e[a]
                  .reduce(function (e, r) {
                    return r && (n && n[r] && e.push(n[r]), e.push(t(r))), e;
                  }, [])
                  .join(" ");
              }),
              r
            );
          })({ root: ["root", "inherit" !== t && "color".concat(Ge(t)), "fontSize".concat(Ge(n))] }, si, r);
        },
        di = ai("svg", {
          name: "MuiSvgIcon",
          slot: "Root",
          overridesResolver: function (e, t) {
            var n = e.ownerState;
            return [
              t.root,
              "inherit" !== n.color && t["color".concat(Ge(n.color))],
              t["fontSize".concat(Ge(n.fontSize))],
            ];
          },
        })(function (e) {
          var t,
            n,
            r,
            a,
            i,
            o,
            u,
            l,
            s,
            c,
            f,
            d,
            p,
            h,
            m,
            v,
            g,
            y = e.theme,
            b = e.ownerState;
          return {
            userSelect: "none",
            width: "1em",
            height: "1em",
            display: "inline-block",
            fill: "currentColor",
            flexShrink: 0,
            transition:
              null == (t = y.transitions) || null == (n = t.create)
                ? void 0
                : n.call(t, "fill", {
                    duration: null == (r = y.transitions) || null == (a = r.duration) ? void 0 : a.shorter,
                  }),
            fontSize: {
              inherit: "inherit",
              small: (null == (i = y.typography) || null == (o = i.pxToRem) ? void 0 : o.call(i, 20)) || "1.25rem",
              medium: (null == (u = y.typography) || null == (l = u.pxToRem) ? void 0 : l.call(u, 24)) || "1.5rem",
              large: (null == (s = y.typography) || null == (c = s.pxToRem) ? void 0 : c.call(s, 35)) || "2.1875",
            }[b.fontSize],
            color:
              null != (f = null == (d = y.palette) || null == (p = d[b.color]) ? void 0 : p.main)
                ? f
                : {
                    action: null == (h = y.palette) || null == (m = h.action) ? void 0 : m.active,
                    disabled: null == (v = y.palette) || null == (g = v.action) ? void 0 : g.disabled,
                    inherit: void 0,
                  }[b.color],
          };
        }),
        pi = e.forwardRef(function (e, t) {
          var n = bn({ props: e, name: "MuiSvgIcon" }),
            r = n.children,
            a = n.className,
            i = n.color,
            o = void 0 === i ? "inherit" : i,
            u = n.component,
            l = void 0 === u ? "svg" : u,
            s = n.fontSize,
            f = void 0 === s ? "medium" : s,
            d = n.htmlColor,
            p = n.inheritViewBox,
            h = void 0 !== p && p,
            m = n.titleAccess,
            g = n.viewBox,
            y = void 0 === g ? "0 0 24 24" : g,
            b = c(n, ci),
            w = C({}, n, {
              color: o,
              component: l,
              fontSize: f,
              instanceFontSize: e.fontSize,
              inheritViewBox: h,
              viewBox: y,
            }),
            x = {};
          h || (x.viewBox = y);
          var k = fi(w);
          return (0,
          v.jsxs)(di, C({ as: l, className: qe(k.root, a), ownerState: w, focusable: "false", color: d, "aria-hidden": !m || void 0, role: m ? "img" : void 0, ref: t }, x, b, { children: [r, m ? (0, v.jsx)("title", { children: m }) : null] }));
        });
      pi.muiName = "SvgIcon";
      var hi = pi;
      function mi(t, n) {
        var r = function (e, r) {
          return (0, v.jsx)(hi, C({ "data-testid": "".concat(n, "Icon"), ref: r }, e, { children: t }));
        };
        return (r.muiName = hi.muiName), e.memo(e.forwardRef(r));
      }
      var vi = mi(
          (0, v.jsx)("path", {
            d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z",
          }),
          "FacebookRounded"
        ),
        gi = mi(
          (0, v.jsx)("path", {
            d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
          }),
          "Instagram"
        ),
        yi = mi(
          (0, v.jsx)("path", {
            d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
          }),
          "Twitter"
        );
      var bi = function (e) {
        var t = e.name,
          n = e.job,
          r = e.image,
          a = e.facebook,
          i = e.instagram,
          o = e.twitter;
        return (0, v.jsx)(v.Fragment, {
          children: (0, v.jsxs)("div", {
            className: "p-4",
            style: { border: "1px solid rgba(0,0,0,.125) ", borderRadius: ".25rem", backgroundColor: "#fff" },
            children: [
              (0, v.jsx)(k, { src: r, height: "250", width: "250", roundedCircle: "true" }),
              (0, v.jsx)("h5", {
                className: "p-4 pb-0",
                style: { fontWeight: "900px", textAlign: "center" },
                children: t,
              }),
              (0, v.jsx)("h6", { className: "p-1", style: { textAlign: "center" }, children: n }),
              (0, v.jsxs)("div", {
                className: "icons",
                style: { display: "flex", justifyContent: "space-between ", marginRight: "20%", marginLeft: "20%" },
                children: [
                  (0, v.jsx)("a", {
                    href: a ? "https://facebook.com/".concat(a) : "https://facebook.com/",
                    children: (0, v.jsx)(vi, { fontSize: "large", color: "primary" }),
                  }),
                  (0, v.jsx)("a", {
                    href: i ? "https://instagram.com/".concat(i) : "https://instagram.com/",
                    children: (0, v.jsx)(gi, { fontSize: "large", color: "blue" }),
                  }),
                  (0, v.jsx)("a", {
                    href: o ? "https://twitter.com/".concat(o) : "https://twitter.com/",
                    children: (0, v.jsx)(yi, { fontSize: "large", color: "blue" }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var wi = function (t) {
        var n = t.darkMode,
          r = o((0, e.useState)(null), 2),
          a = r[0],
          i = r[1];
        return (
          (0, e.useEffect)(function () {
            i([
              { title: "Hunza", content: "this blog is about hunza", img: "/hunza.jpg" },
              { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
              { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
              { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
              { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
              { title: "Hunza", content: "this blog is about hunza", img: "/hunza.jpg" },
              { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
              { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
              { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
              { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
            ]);
          }, []),
          (0, v.jsxs)("div", {
            className: n ? "darkmode Home" : "lightmode Home",
            children: [
              (0, v.jsx)(S, { image: "/hunza.jpg" }),
              (0, v.jsxs)("div", {
                className: n ? "darkmode Team" : "lightmode Team",
                children: [
                  (0, v.jsx)("h1", { className: " headingHome pb-3", children: "Our Team" }),
                  (0, v.jsxs)("div", {
                    className: "GridHome",
                    children: [
                      (0, v.jsx)(bi, {
                        name: "Shams Tabraiz",
                        facebook: "shamstabraizofficial",
                        image: "hunza.jpg",
                        job: "Backen Dev",
                      }),
                      (0, v.jsx)(bi, { name: "Ali Hunza", image: "aliabad.jpg", job: "Backen Dev" }),
                      (0, v.jsx)(bi, { name: "Shezi Roy", image: "hunza.jpg", job: "Backen Dev" }),
                    ],
                  }),
                ],
              }),
              (0, v.jsxs)("div", {
                className: n ? "darkmode recentposts" : "lightmode recentposts",
                children: [
                  (0, v.jsx)("h1", { className: "headingHome pb-3", children: "Recent Posts" }),
                  (0, v.jsx)("div", {
                    className: "GridHome",
                    children:
                      a &&
                      a.slice(0, 4).map(function (e) {
                        return (0, v.jsx)(He, { darkMode: n, props: e }, e._id);
                      }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var xi = function (e) {
        return (
          e.darkMode,
          (0, v.jsx)("div", { className: "about", children: (0, v.jsx)("h1", { children: "this is about page" }) })
        );
      };
      var ki = function (t) {
          var n = t.darkMode,
            r = o((0, e.useState)(null), 2),
            a = r[0],
            i = r[1];
          return (
            (0, e.useEffect)(function () {
              i([
                { title: "Hunza", content: "this blog is about hunza", img: "/hunza.jpg" },
                { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
                { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
                { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
                { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
                { title: "Hunza", content: "this blog is about hunza", img: "/hunza.jpg" },
                { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
                { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
                { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
                { title: "Aliabad", content: "aliabad is in hunza", img: "/aliabad.jpg" },
              ]);
            }, []),
            (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(S, { image: "aliabad.jpg", height: "250" }),
                (0, v.jsx)("div", {
                  className: n ? "darkmode Blog" : "lightmode Blog",
                  children: (0, v.jsx)("div", {
                    className: n ? "darkmode" : "lightmode",
                    children: (0, v.jsx)("div", {
                      className: n ? "darkmode GridHome" : "lightmode GridHome",
                      children:
                        a &&
                        a.map(function (e) {
                          return (0, v.jsx)(He, { darkMode: n, props: e }, e._id);
                        }),
                    }),
                  }),
                }),
              ],
            })
          );
        },
        Ei = JSON.parse('[{"link":"/blog","name":"Blog"},{"link":"/about","name":"About"}]');
      var Si = function () {
        return (0, v.jsx)("div", { children: "BlogDetail" });
      };
      function Ci(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
      }
      var Pi = ri();
      var Oi,
        _i,
        ji,
        Ti,
        Ri = !0,
        Ai = !1,
        Ni = {
          text: !0,
          search: !0,
          url: !0,
          tel: !0,
          email: !0,
          password: !0,
          number: !0,
          date: !0,
          month: !0,
          week: !0,
          time: !0,
          datetime: !0,
          "datetime-local": !0,
        };
      function Mi(e) {
        e.metaKey || e.altKey || e.ctrlKey || (Ri = !0);
      }
      function Li() {
        Ri = !1;
      }
      function Ii() {
        "hidden" === this.visibilityState && Ai && (Ri = !0);
      }
      function zi(e) {
        var t = e.target;
        try {
          return t.matches(":focus-visible");
        } catch (n) {}
        return (
          Ri ||
          (function (e) {
            var t = e.type,
              n = e.tagName;
            return (
              !("INPUT" !== n || !Ni[t] || e.readOnly) || ("TEXTAREA" === n && !e.readOnly) || !!e.isContentEditable
            );
          })(t)
        );
      }
      function Fi() {
        var t = e.useCallback(function (e) {
            var t;
            null != e &&
              ((t = e.ownerDocument).addEventListener("keydown", Mi, !0),
              t.addEventListener("mousedown", Li, !0),
              t.addEventListener("pointerdown", Li, !0),
              t.addEventListener("touchstart", Li, !0),
              t.addEventListener("visibilitychange", Ii, !0));
          }, []),
          n = e.useRef(!1);
        return {
          isFocusVisibleRef: n,
          onFocus: function (e) {
            return !!zi(e) && ((n.current = !0), !0);
          },
          onBlur: function () {
            return (
              !!n.current &&
              ((Ai = !0),
              window.clearTimeout(Oi),
              (Oi = window.setTimeout(function () {
                Ai = !1;
              }, 100)),
              (n.current = !1),
              !0)
            );
          },
          ref: t,
        };
      }
      function Di(e, t) {
        "function" === typeof e ? e(t) : e && (e.current = t);
      }
      function Bi(t) {
        var n = t.checked,
          r = t.defaultChecked,
          a = t.disabled,
          i = t.onBlur,
          u = t.onChange,
          l = t.onFocus,
          s = t.onFocusVisible,
          c = t.readOnly,
          f = t.required,
          d = (function (t) {
            var n = t.controlled,
              r = t.default,
              a = (t.name, t.state, e.useRef(void 0 !== n).current),
              i = o(e.useState(r), 2),
              u = i[0],
              l = i[1];
            return [
              a ? n : u,
              e.useCallback(function (e) {
                a || l(e);
              }, []),
            ];
          })({ controlled: n, default: Boolean(r), name: "Switch", state: "checked" }),
          p = o(d, 2),
          h = p[0],
          m = p[1],
          v = function (e, t) {
            e.nativeEvent.defaultPrevented || (m(e.target.checked), null == u || u(e), null == t || t(e));
          },
          g = Fi(),
          y = g.isFocusVisibleRef,
          b = g.onBlur,
          w = g.onFocus,
          x = g.ref,
          k = o(e.useState(!1), 2),
          E = k[0],
          S = k[1];
        a && E && S(!1),
          e.useEffect(
            function () {
              y.current = E;
            },
            [E, y]
          );
        var P,
          O,
          _ = e.useRef(null),
          j = function (e, t) {
            _.current || (_.current = e.currentTarget),
              w(e),
              !0 === y.current && (S(!0), null == s || s(e)),
              null == l || l(e),
              null == t || t(e);
          },
          T = function (e, t) {
            b(e), !1 === y.current && S(!1), null == i || i(e), null == t || t(e);
          },
          R =
            ((P = x),
            (O = _),
            e.useMemo(
              function () {
                return null == P && null == O
                  ? null
                  : function (e) {
                      Di(P, e), Di(O, e);
                    };
              },
              [P, O]
            ));
        return {
          checked: h,
          disabled: Boolean(a),
          focusVisible: E,
          getInputProps: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return C({ checked: n, defaultChecked: r, disabled: a, readOnly: c, required: f, type: "checkbox" }, e, {
              onChange: function (t) {
                return v(t, e.onChange);
              },
              onFocus: function (t) {
                return j(t, e.onFocus);
              },
              onBlur: function (t) {
                return T(t, e.onBlur);
              },
              ref: R,
            });
          },
          readOnly: Boolean(c),
        };
      }
      var Wi = "#BFC7CF",
        Ui = "#2F3A45",
        Vi = Pi("span")(
          _i ||
            (_i = Ci([
              "\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 36px;\n  padding: 8px;\n",
            ]))
        ),
        Hi = Pi("input")(
          ji ||
            (ji = Ci([
              "\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: 1;\n  margin: 0;\n  cursor: pointer;\n",
            ]))
        ),
        $i = Pi("span")(
          Ti ||
            (Ti = Ci([
              "\n  position: absolute;\n  display: block;\n  background-color: ",
              ';\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  top: 3px;\n  left: 4px;\n  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &::before {\n    display: block;\n    content: \'\';\n    width: 100%;\n    height: 100%;\n    background: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="',
              '" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')\n      center center no-repeat;\n  }\n\n  &.focusVisible {\n    background-color: #79b;\n  }\n\n  &.checked {\n    transform: translateX(24px);\n\n    &::before {\n      background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="',
              '" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\');\n    }\n  }\n',
            ])),
          "#0059B2",
          encodeURIComponent("#fff"),
          encodeURIComponent("#fff")
        ),
        qi = Pi("span")(function (e) {
          var t = e.theme;
          return "\n  background-color: ".concat(
            "dark" === t.palette.mode ? Ui : Wi,
            ";\n  border-radius: 4px;\n  width: 100%;\n  height: 100%;\n  display: block;\n"
          );
        });
      function Ki(e) {
        var t = Bi(e),
          n = t.getInputProps,
          r = { checked: t.checked, disabled: t.disabled, focusVisible: t.focusVisible };
        return (0, v.jsxs)(Vi, {
          className: qe(r),
          children: [
            (0, v.jsx)(qi, { children: (0, v.jsx)($i, { className: qe(r) }) }),
            (0, v.jsx)(Hi, s(s({}, n()), {}, { "aria-label": "Demo switch" })),
          ],
        });
      }
      function Yi() {
        return (0, v.jsx)(Ki, { defaultChecked: !0 });
      }
      var Gi = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return null != e ? String(e) : t || null;
        },
        Qi = e.createContext(null);
      n(176);
      function Xi(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function Ji(e) {
        var t = (function (e, t) {
          if ("object" !== typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === typeof t ? t : String(t);
      }
      function Zi(t, n) {
        return Object.keys(n).reduce(function (r, a) {
          var i,
            o = r,
            u = o[Xi(a)],
            l = o[a],
            s = c(o, [Xi(a), a].map(Ji)),
            f = n[a],
            d = (function (t, n, r) {
              var a = (0, e.useRef)(void 0 !== t),
                i = (0, e.useState)(n),
                o = i[0],
                u = i[1],
                l = void 0 !== t,
                s = a.current;
              return (
                (a.current = l),
                !l && s && o !== n && u(n),
                [
                  l ? t : o,
                  (0, e.useCallback)(
                    function (e) {
                      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                        n[a - 1] = arguments[a];
                      r && r.apply(void 0, [e].concat(n)), u(e);
                    },
                    [r]
                  ),
                ]
              );
            })(l, u, t[f]),
            p = d[0],
            h = d[1];
          return C({}, s, (((i = {})[a] = p), (i[f] = h), i));
        }, t);
      }
      function eo() {
        var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
        null !== e && void 0 !== e && this.setState(e);
      }
      function to(e) {
        this.setState(
          function (t) {
            var n = this.constructor.getDerivedStateFromProps(e, t);
            return null !== n && void 0 !== n ? n : null;
          }.bind(this)
        );
      }
      function no(e, t) {
        try {
          var n = this.props,
            r = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
        } finally {
          (this.props = n), (this.state = r);
        }
      }
      (eo.__suppressDeprecationWarning = !0),
        (to.__suppressDeprecationWarning = !0),
        (no.__suppressDeprecationWarning = !0);
      var ro = ["bsPrefix", "className", "as"],
        ao = e.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.as,
            i = f(e, ro);
          n = b(n, "navbar-brand");
          var o = a || (i.href ? "a" : "span");
          return (0, v.jsx)(o, s(s({}, i), {}, { ref: t, className: p()(r, n) }));
        });
      ao.displayName = "NavbarBrand";
      var io = ao;
      function oo(e) {
        return (e && e.ownerDocument) || document;
      }
      function uo(e, t) {
        return (function (e) {
          var t = oo(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var lo = /([A-Z])/g;
      var so = /^ms-/;
      function co(e) {
        return (function (e) {
          return e.replace(lo, "-$1").toLowerCase();
        })(e).replace(so, "-ms-");
      }
      var fo = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      var po = function (e, t) {
        var n = "",
          r = "";
        if ("string" === typeof t) return e.style.getPropertyValue(co(t)) || uo(e).getPropertyValue(co(t));
        Object.keys(t).forEach(function (a) {
          var i = t[a];
          i || 0 === i
            ? !(function (e) {
                return !(!e || !fo.test(e));
              })(a)
              ? (n += co(a) + ": " + i + ";")
              : (r += a + "(" + i + ") ")
            : e.style.removeProperty(co(a));
        }),
          r && (n += "transform: " + r + ";"),
          (e.style.cssText += ";" + n);
      };
      function ho(e, t) {
        return (
          (ho =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          ho(e, t)
        );
      }
      var mo = !1,
        vo = e.createContext(null),
        go = "unmounted",
        yo = "exited",
        bo = "entering",
        wo = "entered",
        xo = "exiting",
        ko = (function (t) {
          var n, a;
          function i(e, n) {
            var r;
            r = t.call(this, e, n) || this;
            var a,
              i = n && !n.isMounting ? e.enter : e.appear;
            return (
              (r.appearStatus = null),
              e.in
                ? i
                  ? ((a = yo), (r.appearStatus = bo))
                  : (a = wo)
                : (a = e.unmountOnExit || e.mountOnEnter ? go : yo),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            );
          }
          (a = t),
            ((n = i).prototype = Object.create(a.prototype)),
            (n.prototype.constructor = n),
            ho(n, a),
            (i.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === go ? { status: yo } : null;
            });
          var o = i.prototype;
          return (
            (o.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (o.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in ? n !== bo && n !== wo && (t = bo) : (n !== bo && n !== wo) || (t = xo);
              }
              this.updateStatus(!1, t);
            }),
            (o.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (o.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" !== typeof r &&
                  ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (o.updateStatus = function (e, t) {
              void 0 === e && (e = !1),
                null !== t
                  ? (this.cancelNextCallback(), t === bo ? this.performEnter(e) : this.performExit())
                  : this.props.unmountOnExit && this.state.status === yo && this.setState({ status: go });
            }),
            (o.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                a = this.context ? this.context.isMounting : e,
                i = this.props.nodeRef ? [a] : [r.findDOMNode(this), a],
                o = i[0],
                u = i[1],
                l = this.getTimeouts(),
                s = a ? l.appear : l.enter;
              (!e && !n) || mo
                ? this.safeSetState({ status: wo }, function () {
                    t.props.onEntered(o);
                  })
                : (this.props.onEnter(o, u),
                  this.safeSetState({ status: bo }, function () {
                    t.props.onEntering(o, u),
                      t.onTransitionEnd(s, function () {
                        t.safeSetState({ status: wo }, function () {
                          t.props.onEntered(o, u);
                        });
                      });
                  }));
            }),
            (o.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                a = this.props.nodeRef ? void 0 : r.findDOMNode(this);
              t && !mo
                ? (this.props.onExit(a),
                  this.safeSetState({ status: xo }, function () {
                    e.props.onExiting(a),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: yo }, function () {
                          e.props.onExited(a);
                        });
                      });
                  }))
                : this.safeSetState({ status: yo }, function () {
                    e.props.onExited(a);
                  });
            }),
            (o.cancelNextCallback = function () {
              null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (o.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (o.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (o.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef ? this.props.nodeRef.current : r.findDOMNode(this),
                a = null == e && !this.props.addEndListener;
              if (n && !a) {
                if (this.props.addEndListener) {
                  var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                    o = i[0],
                    u = i[1];
                  this.props.addEndListener(o, u);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (o.render = function () {
              var t = this.state.status;
              if (t === go) return null;
              var n = this.props,
                r = n.children,
                a =
                  (n.in,
                  n.mountOnEnter,
                  n.unmountOnExit,
                  n.appear,
                  n.enter,
                  n.exit,
                  n.timeout,
                  n.addEndListener,
                  n.onEnter,
                  n.onEntering,
                  n.onEntered,
                  n.onExit,
                  n.onExiting,
                  n.onExited,
                  n.nodeRef,
                  c(n, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return e.createElement(
                vo.Provider,
                { value: null },
                "function" === typeof r ? r(t, a) : e.cloneElement(e.Children.only(r), a)
              );
            }),
            i
          );
        })(e.Component);
      function Eo() {}
      (ko.contextType = vo),
        (ko.propTypes = {}),
        (ko.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: Eo,
          onEntering: Eo,
          onEntered: Eo,
          onExit: Eo,
          onExiting: Eo,
          onExited: Eo,
        }),
        (ko.UNMOUNTED = go),
        (ko.EXITED = yo),
        (ko.ENTERING = bo),
        (ko.ENTERED = wo),
        (ko.EXITING = xo);
      var So = ko,
        Co = !("undefined" === typeof window || !window.document || !window.document.createElement),
        Po = !1,
        Oo = !1;
      try {
        var _o = {
          get passive() {
            return (Po = !0);
          },
          get once() {
            return (Oo = Po = !0);
          },
        };
        Co && (window.addEventListener("test", _o, _o), window.removeEventListener("test", _o, !0));
      } catch (Kl) {}
      var jo = function (e, t, n, r) {
        if (r && "boolean" !== typeof r && !Oo) {
          var a = r.once,
            i = r.capture,
            o = n;
          !Oo &&
            a &&
            ((o =
              n.__once ||
              function e(r) {
                this.removeEventListener(t, e, i), n.call(this, r);
              }),
            (n.__once = o)),
            e.addEventListener(t, o, Po ? r : i);
        }
        e.addEventListener(t, n, r);
      };
      var To = function (e, t, n, r) {
        var a = r && "boolean" !== typeof r ? r.capture : r;
        e.removeEventListener(t, n, a), n.__once && e.removeEventListener(t, n.__once, a);
      };
      var Ro = function (e, t, n, r) {
        return (
          jo(e, t, n, r),
          function () {
            To(e, t, n, r);
          }
        );
      };
      function Ao(e, t, n) {
        void 0 === n && (n = 5);
        var r = !1,
          a = setTimeout(function () {
            r ||
              (function (e, t, n, r) {
                if ((void 0 === n && (n = !1), void 0 === r && (r = !0), e)) {
                  var a = document.createEvent("HTMLEvents");
                  a.initEvent(t, n, r), e.dispatchEvent(a);
                }
              })(e, "transitionend", !0);
          }, t + n),
          i = Ro(
            e,
            "transitionend",
            function () {
              r = !0;
            },
            { once: !0 }
          );
        return function () {
          clearTimeout(a), i();
        };
      }
      function No(e, t, n, r) {
        null == n &&
          (n =
            (function (e) {
              var t = po(e, "transitionDuration") || "",
                n = -1 === t.indexOf("ms") ? 1e3 : 1;
              return parseFloat(t) * n;
            })(e) || 0);
        var a = Ao(e, n, r),
          i = Ro(e, "transitionend", t);
        return function () {
          a(), i();
        };
      }
      function Mo(e, t) {
        var n = po(e, t) || "",
          r = -1 === n.indexOf("ms") ? 1e3 : 1;
        return parseFloat(n) * r;
      }
      function Lo(e, t) {
        var n = Mo(e, "transitionDuration"),
          r = Mo(e, "transitionDelay"),
          a = No(
            e,
            function (n) {
              n.target === e && (a(), t(n));
            },
            n + r
          );
      }
      var Io = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t
          .filter(function (e) {
            return null != e;
          })
          .reduce(function (e, t) {
            if ("function" !== typeof t)
              throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
            return null === e
              ? t
              : function () {
                  for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                  e.apply(this, r), t.apply(this, r);
                };
          }, null);
      };
      function zo(e) {
        e.offsetHeight;
      }
      var Fo = function (e) {
        return e && "function" !== typeof e
          ? function (t) {
              e.current = t;
            }
          : e;
      };
      var Do = function (t, n) {
        return (0, e.useMemo)(
          function () {
            return (function (e, t) {
              var n = Fo(e),
                r = Fo(t);
              return function (e) {
                n && n(e), r && r(e);
              };
            })(t, n);
          },
          [t, n]
        );
      };
      var Bo,
        Wo = [
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "addEndListener",
          "children",
          "childRef",
        ],
        Uo = e.forwardRef(function (t, n) {
          var a = t.onEnter,
            i = t.onEntering,
            o = t.onEntered,
            u = t.onExit,
            l = t.onExiting,
            c = t.onExited,
            d = t.addEndListener,
            p = t.children,
            h = t.childRef,
            m = f(t, Wo),
            g = (0, e.useRef)(null),
            y = Do(g, h),
            b = function (e) {
              var t;
              y((t = e) && "setState" in t ? r.findDOMNode(t) : null != t ? t : null);
            },
            w = function (e) {
              return function (t) {
                e && g.current && e(g.current, t);
              };
            },
            x = (0, e.useCallback)(w(a), [a]),
            k = (0, e.useCallback)(w(i), [i]),
            E = (0, e.useCallback)(w(o), [o]),
            S = (0, e.useCallback)(w(u), [u]),
            C = (0, e.useCallback)(w(l), [l]),
            P = (0, e.useCallback)(w(c), [c]),
            O = (0, e.useCallback)(w(d), [d]);
          return (0, v.jsx)(
            So,
            s(
              s({ ref: n }, m),
              {},
              {
                onEnter: x,
                onEntered: E,
                onEntering: k,
                onExit: S,
                onExited: P,
                onExiting: C,
                addEndListener: O,
                nodeRef: g,
                children:
                  "function" === typeof p
                    ? function (e, t) {
                        return p(e, s(s({}, t), {}, { ref: b }));
                      }
                    : e.cloneElement(p, { ref: b }),
              }
            )
          );
        }),
        Vo = [
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "className",
          "children",
          "dimension",
          "getDimensionValue",
        ],
        Ho = { height: ["marginTop", "marginBottom"], width: ["marginLeft", "marginRight"] };
      function $o(e, t) {
        var n = t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],
          r = Ho[e];
        return n + parseInt(po(t, r[0]), 10) + parseInt(po(t, r[1]), 10);
      }
      var qo =
          (u((Bo = {}), yo, "collapse"),
          u(Bo, xo, "collapsing"),
          u(Bo, bo, "collapsing"),
          u(Bo, wo, "collapse show"),
          Bo),
        Ko = { in: !1, timeout: 300, mountOnEnter: !1, unmountOnExit: !1, appear: !1, getDimensionValue: $o },
        Yo = e.forwardRef(function (t, n) {
          var r = t.onEnter,
            a = t.onEntering,
            i = t.onEntered,
            o = t.onExit,
            u = t.onExiting,
            l = t.className,
            c = t.children,
            d = t.dimension,
            h = void 0 === d ? "height" : d,
            m = t.getDimensionValue,
            g = void 0 === m ? $o : m,
            y = f(t, Vo),
            b = "function" === typeof h ? h() : h,
            w = (0, e.useMemo)(
              function () {
                return Io(function (e) {
                  e.style[b] = "0";
                }, r);
              },
              [b, r]
            ),
            x = (0, e.useMemo)(
              function () {
                return Io(function (e) {
                  var t = "scroll".concat(b[0].toUpperCase()).concat(b.slice(1));
                  e.style[b] = "".concat(e[t], "px");
                }, a);
              },
              [b, a]
            ),
            k = (0, e.useMemo)(
              function () {
                return Io(function (e) {
                  e.style[b] = null;
                }, i);
              },
              [b, i]
            ),
            E = (0, e.useMemo)(
              function () {
                return Io(function (e) {
                  (e.style[b] = "".concat(g(b, e), "px")), zo(e);
                }, o);
              },
              [o, g, b]
            ),
            S = (0, e.useMemo)(
              function () {
                return Io(function (e) {
                  e.style[b] = null;
                }, u);
              },
              [b, u]
            );
          return (0, v.jsx)(
            Uo,
            s(
              s({ ref: n, addEndListener: Lo }, y),
              {},
              {
                "aria-expanded": y.role ? y.in : null,
                onEnter: w,
                onEntering: x,
                onEntered: k,
                onExit: E,
                onExiting: S,
                childRef: c.ref,
                children: function (t, n) {
                  return e.cloneElement(
                    c,
                    s(
                      s({}, n),
                      {},
                      { className: p()(l, c.props.className, qo[t], "width" === b && "collapse-horizontal") }
                    )
                  );
                },
              }
            )
          );
        });
      Yo.defaultProps = Ko;
      var Go = Yo,
        Qo = e.createContext(null);
      Qo.displayName = "NavbarContext";
      var Xo = Qo,
        Jo = ["children", "bsPrefix"],
        Zo = e.forwardRef(function (t, n) {
          var r = t.children,
            a = t.bsPrefix,
            i = f(t, Jo);
          a = b(a, "navbar-collapse");
          var o = (0, e.useContext)(Xo);
          return (0,
          v.jsx)(Go, s(s({ in: !(!o || !o.expanded) }, i), {}, { children: (0, v.jsx)("div", { ref: n, className: a, children: r }) }));
        });
      Zo.displayName = "NavbarCollapse";
      var eu = Zo;
      var tu = function (t) {
        var n = (0, e.useRef)(t);
        return (
          (0, e.useEffect)(
            function () {
              n.current = t;
            },
            [t]
          ),
          n
        );
      };
      function nu(t) {
        var n = tu(t);
        return (0, e.useCallback)(
          function () {
            return n.current && n.current.apply(n, arguments);
          },
          [n]
        );
      }
      var ru = ["bsPrefix", "className", "children", "label", "as", "onClick"],
        au = e.forwardRef(function (t, n) {
          var r = t.bsPrefix,
            a = t.className,
            i = t.children,
            o = t.label,
            u = t.as,
            l = void 0 === u ? "button" : u,
            c = t.onClick,
            d = f(t, ru);
          r = b(r, "navbar-toggler");
          var h = (0, e.useContext)(Xo) || {},
            m = h.onToggle,
            g = h.expanded,
            y = nu(function (e) {
              c && c(e), m && m();
            });
          return (
            "button" === l && (d.type = "button"),
            (0, v.jsx)(
              l,
              s(
                s({}, d),
                {},
                {
                  ref: n,
                  onClick: y,
                  "aria-label": o,
                  className: p()(a, r, !g && "collapsed"),
                  children: i || (0, v.jsx)("span", { className: "".concat(r, "-icon") }),
                }
              )
            )
          );
        });
      (au.displayName = "NavbarToggle"), (au.defaultProps = { label: "Toggle navigation" });
      var iu = au;
      function ou(e) {
        void 0 === e && (e = oo());
        try {
          var t = e.activeElement;
          return t && t.nodeName ? t : null;
        } catch (Kl) {
          return e.body;
        }
      }
      function uu(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      function lu(t) {
        var n = (function (t) {
          var n = (0, e.useRef)(t);
          return (n.current = t), n;
        })(t);
        (0, e.useEffect)(function () {
          return function () {
            return n.current();
          };
        }, []);
      }
      function su(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function cu(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function fu(e, t, n) {
        return t && cu(e.prototype, t), n && cu(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
      }
      function du(e) {
        return "".concat("data-rr-ui-").concat(e);
      }
      var pu = du("modal-open"),
        hu = (function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = t.ownerDocument,
              r = t.handleContainerOverflow,
              a = void 0 === r || r,
              i = t.isRTL,
              o = void 0 !== i && i;
            su(this, e),
              (this.handleContainerOverflow = a),
              (this.isRTL = o),
              (this.modals = []),
              (this.ownerDocument = n);
          }
          return (
            fu(e, [
              {
                key: "getScrollbarWidth",
                value: function () {
                  return (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                      t = e.defaultView;
                    return Math.abs(t.innerWidth - e.documentElement.clientWidth);
                  })(this.ownerDocument);
                },
              },
              {
                key: "getElement",
                value: function () {
                  return (this.ownerDocument || document).body;
                },
              },
              { key: "setModalAttributes", value: function (e) {} },
              { key: "removeModalAttributes", value: function (e) {} },
              {
                key: "setContainerStyle",
                value: function (e) {
                  var t = { overflow: "hidden" },
                    n = this.isRTL ? "paddingLeft" : "paddingRight",
                    r = this.getElement();
                  (e.style = u({ overflow: r.style.overflow }, n, r.style[n])),
                    e.scrollBarWidth && (t[n] = "".concat(parseInt(po(r, n) || "0", 10) + e.scrollBarWidth, "px")),
                    r.setAttribute(pu, ""),
                    po(r, t);
                },
              },
              {
                key: "reset",
                value: function () {
                  var e = this;
                  wn(this.modals).forEach(function (t) {
                    return e.remove(t);
                  });
                },
              },
              {
                key: "removeContainerStyle",
                value: function (e) {
                  var t = this.getElement();
                  t.removeAttribute(pu), Object.assign(t.style, e.style);
                },
              },
              {
                key: "add",
                value: function (e) {
                  var t = this.modals.indexOf(e);
                  return -1 !== t
                    ? t
                    : ((t = this.modals.length),
                      this.modals.push(e),
                      this.setModalAttributes(e),
                      0 !== t ||
                        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
                        this.handleContainerOverflow && this.setContainerStyle(this.state)),
                      t);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = this.modals.indexOf(e);
                  -1 !== t &&
                    (this.modals.splice(t, 1),
                    !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state),
                    this.removeModalAttributes(e));
                },
              },
              {
                key: "isTopModal",
                value: function (e) {
                  return !!this.modals.length && this.modals[this.modals.length - 1] === e;
                },
              },
            ]),
            e
          );
        })(),
        mu = hu,
        vu = (0, e.createContext)(Co ? window : void 0);
      vu.Provider;
      function gu() {
        return (0, e.useContext)(vu);
      }
      var yu = function (e, t) {
        var n;
        return Co
          ? null == e
            ? (t || oo()).body
            : ("function" === typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              (null != (n = e) && n.nodeType && e) || null)
          : null;
      };
      var bu,
        wu = [
          "show",
          "role",
          "className",
          "style",
          "children",
          "backdrop",
          "keyboard",
          "onBackdropClick",
          "onEscapeKeyDown",
          "transition",
          "backdropTransition",
          "autoFocus",
          "enforceFocus",
          "restoreFocus",
          "restoreFocusOptions",
          "renderDialog",
          "renderBackdrop",
          "manager",
          "container",
          "onShow",
          "onHide",
          "onExit",
          "onExited",
          "onExiting",
          "onEnter",
          "onEntering",
          "onEntered",
        ];
      function xu(t) {
        var n = gu(),
          r =
            t ||
            (function (e) {
              return bu || (bu = new mu({ ownerDocument: null == e ? void 0 : e.document })), bu;
            })(n),
          a = (0, e.useRef)({ dialog: null, backdrop: null });
        return Object.assign(a.current, {
          add: function () {
            return r.add(a.current);
          },
          remove: function () {
            return r.remove(a.current);
          },
          isTopModal: function () {
            return r.isTopModal(a.current);
          },
          setDialogRef: (0, e.useCallback)(function (e) {
            a.current.dialog = e;
          }, []),
          setBackdropRef: (0, e.useCallback)(function (e) {
            a.current.backdrop = e;
          }, []),
        });
      }
      var ku = (0, e.forwardRef)(function (t, n) {
        var a = t.show,
          i = void 0 !== a && a,
          u = t.role,
          l = void 0 === u ? "dialog" : u,
          s = t.className,
          c = t.style,
          f = t.children,
          d = t.backdrop,
          p = void 0 === d || d,
          h = t.keyboard,
          m = void 0 === h || h,
          g = t.onBackdropClick,
          y = t.onEscapeKeyDown,
          b = t.transition,
          w = t.backdropTransition,
          x = t.autoFocus,
          k = void 0 === x || x,
          E = t.enforceFocus,
          S = void 0 === E || E,
          C = t.restoreFocus,
          P = void 0 === C || C,
          O = t.restoreFocusOptions,
          _ = t.renderDialog,
          j = t.renderBackdrop,
          T =
            void 0 === j
              ? function (e) {
                  return (0, v.jsx)("div", Object.assign({}, e));
                }
              : j,
          R = t.manager,
          A = t.container,
          N = t.onShow,
          M = t.onHide,
          L = void 0 === M ? function () {} : M,
          I = t.onExit,
          z = t.onExited,
          F = t.onExiting,
          D = t.onEnter,
          B = t.onEntering,
          W = t.onEntered,
          U = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(t, wu),
          V = (function (t, n) {
            var r = gu(),
              a = o(
                (0, e.useState)(function () {
                  return yu(t, null == r ? void 0 : r.document);
                }),
                2
              ),
              i = a[0],
              u = a[1];
            if (!i) {
              var l = yu(t);
              l && u(l);
            }
            return (
              (0, e.useEffect)(
                function () {
                  n && i && n(i);
                },
                [n, i]
              ),
              (0, e.useEffect)(
                function () {
                  var e = yu(t);
                  e !== i && u(e);
                },
                [t, i]
              ),
              i
            );
          })(A),
          H = xu(R),
          $ = (function () {
            var t = (0, e.useRef)(!0),
              n = (0, e.useRef)(function () {
                return t.current;
              });
            return (
              (0, e.useEffect)(function () {
                return function () {
                  t.current = !1;
                };
              }, []),
              n.current
            );
          })(),
          q = (function (t) {
            var n = (0, e.useRef)(null);
            return (
              (0, e.useEffect)(function () {
                n.current = t;
              }),
              n.current
            );
          })(i),
          K = o((0, e.useState)(!i), 2),
          Y = K[0],
          G = K[1],
          Q = (0, e.useRef)(null);
        (0, e.useImperativeHandle)(
          n,
          function () {
            return H;
          },
          [H]
        ),
          Co && !q && i && (Q.current = ou()),
          b || i || Y ? i && Y && G(!1) : G(!0);
        var X = nu(function () {
            if (
              (H.add(),
              (re.current = Ro(document, "keydown", te)),
              (ne.current = Ro(
                document,
                "focus",
                function () {
                  return setTimeout(Z);
                },
                !0
              )),
              N && N(),
              k)
            ) {
              var e = ou(document);
              H.dialog && e && !uu(H.dialog, e) && ((Q.current = e), H.dialog.focus());
            }
          }),
          J = nu(function () {
            var e;
            (H.remove(), null == re.current || re.current(), null == ne.current || ne.current(), P) &&
              (null == (e = Q.current) || null == e.focus || e.focus(O), (Q.current = null));
          });
        (0, e.useEffect)(
          function () {
            i && V && X();
          },
          [i, V, X]
        ),
          (0, e.useEffect)(
            function () {
              Y && J();
            },
            [Y, J]
          ),
          lu(function () {
            J();
          });
        var Z = nu(function () {
            if (S && $() && H.isTopModal()) {
              var e = ou();
              H.dialog && e && !uu(H.dialog, e) && H.dialog.focus();
            }
          }),
          ee = nu(function (e) {
            e.target === e.currentTarget && (null == g || g(e), !0 === p && L());
          }),
          te = nu(function (e) {
            m && 27 === e.keyCode && H.isTopModal() && (null == y || y(e), e.defaultPrevented || L());
          }),
          ne = (0, e.useRef)(),
          re = (0, e.useRef)(),
          ae = b;
        if (!V || !(i || (ae && !Y))) return null;
        var ie = Object.assign({ role: l, ref: H.setDialogRef, "aria-modal": "dialog" === l || void 0 }, U, {
            style: c,
            className: s,
            tabIndex: -1,
          }),
          oe = _
            ? _(ie)
            : (0, v.jsx)("div", Object.assign({}, ie, { children: e.cloneElement(f, { role: "document" }) }));
        ae &&
          (oe = (0, v.jsx)(ae, {
            appear: !0,
            unmountOnExit: !0,
            in: !!i,
            onExit: I,
            onExiting: F,
            onExited: function () {
              G(!0), null == z || z.apply(void 0, arguments);
            },
            onEnter: D,
            onEntering: B,
            onEntered: W,
            children: oe,
          }));
        var ue = null;
        if (p) {
          var le = w;
          (ue = T({ ref: H.setBackdropRef, onClick: ee })),
            le && (ue = (0, v.jsx)(le, { appear: !0, in: !!i, children: ue }));
        }
        return (0, v.jsx)(v.Fragment, { children: r.createPortal((0, v.jsxs)(v.Fragment, { children: [ue, oe] }), V) });
      });
      ku.displayName = "Modal";
      var Eu,
        Su = Object.assign(ku, { Manager: mu }),
        Cu = ["className", "children", "transitionClasses"],
        Pu = (u((Eu = {}), bo, "show"), u(Eu, wo, "show"), Eu),
        Ou = e.forwardRef(function (t, n) {
          var r = t.className,
            a = t.children,
            i = t.transitionClasses,
            o = void 0 === i ? {} : i,
            u = f(t, Cu),
            l = (0, e.useCallback)(
              function (e, t) {
                zo(e), null == u.onEnter || u.onEnter(e, t);
              },
              [u]
            );
          return (0, v.jsx)(
            Uo,
            s(
              s({ ref: n, addEndListener: Lo }, u),
              {},
              {
                onEnter: l,
                childRef: a.ref,
                children: function (t, n) {
                  return e.cloneElement(
                    a,
                    s(s({}, n), {}, { className: p()("fade", r, a.props.className, Pu[t], o[t]) })
                  );
                },
              }
            )
          );
        });
      (Ou.defaultProps = { in: !1, timeout: 300, mountOnEnter: !1, unmountOnExit: !1, appear: !1 }),
        (Ou.displayName = "Fade");
      var _u,
        ju = Ou,
        Tu = me("offcanvas-body"),
        Ru = ["bsPrefix", "className", "children"],
        Au = (u((_u = {}), bo, "show"), u(_u, wo, "show"), _u),
        Nu = e.forwardRef(function (t, n) {
          var r = t.bsPrefix,
            a = t.className,
            i = t.children,
            o = f(t, Ru);
          return (
            (r = b(r, "offcanvas")),
            (0, v.jsx)(
              Uo,
              s(
                s({ ref: n, addEndListener: Lo }, o),
                {},
                {
                  childRef: i.ref,
                  children: function (t, n) {
                    return e.cloneElement(
                      i,
                      s(
                        s({}, n),
                        {},
                        {
                          className: p()(
                            a,
                            i.props.className,
                            (t === bo || t === xo) && "".concat(r, "-toggling"),
                            Au[t]
                          ),
                        }
                      )
                    );
                  },
                }
              )
            )
          );
        });
      (Nu.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1 }),
        (Nu.displayName = "OffcanvasToggling");
      var Mu = Nu,
        Lu = e.createContext({ onHide: function () {} }),
        Iu = ["className", "variant"],
        zu = { "aria-label": m().string, onClick: m().func, variant: m().oneOf(["white"]) },
        Fu = e.forwardRef(function (e, t) {
          var n = e.className,
            r = e.variant,
            a = f(e, Iu);
          return (0,
          v.jsx)("button", s({ ref: t, type: "button", className: p()("btn-close", r && "btn-close-".concat(r), n) }, a));
        });
      (Fu.displayName = "CloseButton"), (Fu.propTypes = zu), (Fu.defaultProps = { "aria-label": "Close" });
      var Du = Fu,
        Bu = ["closeLabel", "closeVariant", "closeButton", "onHide", "children"],
        Wu = e.forwardRef(function (t, n) {
          var r = t.closeLabel,
            a = t.closeVariant,
            i = t.closeButton,
            o = t.onHide,
            u = t.children,
            l = f(t, Bu),
            c = (0, e.useContext)(Lu),
            d = nu(function () {
              null == c || c.onHide(), null == o || o();
            });
          return (0,
          v.jsxs)("div", s(s({ ref: n }, l), {}, { children: [u, i && (0, v.jsx)(Du, { "aria-label": r, variant: a, onClick: d })] }));
        });
      Wu.defaultProps = { closeLabel: "Close", closeButton: !1 };
      var Uu = Wu,
        Vu = ["bsPrefix", "className"],
        Hu = e.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = f(e, Vu);
          return (n = b(n, "offcanvas-header")), (0, v.jsx)(Uu, s(s({ ref: t }, a), {}, { className: p()(r, n) }));
        });
      (Hu.displayName = "OffcanvasHeader"), (Hu.defaultProps = { closeLabel: "Close", closeButton: !1 });
      var $u = Hu,
        qu = me("offcanvas-title", { Component: ve("h5") });
      function Ku(e) {
        return (
          (Ku = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Ku(e)
        );
      }
      function Yu(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ku(e)); );
        return e;
      }
      function Gu() {
        return (
          (Gu =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get
              : function (e, t, n) {
                  var r = Yu(e, t);
                  if (r) {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    return a.get ? a.get.call(arguments.length < 3 ? e : n) : a.value;
                  }
                }),
          Gu.apply(this, arguments)
        );
      }
      function Qu(e) {
        return (
          (Qu =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Qu(e)
        );
      }
      function Xu(e, t) {
        if (t && ("object" === Qu(t) || "function" === typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return (function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        })(e);
      }
      function Ju(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (Kl) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Ku(e);
          if (t) {
            var a = Ku(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return Xu(this, n);
        };
      }
      var Zu = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function el(e, t) {
        return Zu(e.querySelectorAll(t));
      }
      function tl(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      var nl,
        rl = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        al = ".sticky-top",
        il = ".navbar-toggler",
        ol = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && ho(e, t);
          })(n, e);
          var t = Ju(n);
          function n() {
            return su(this, n), t.apply(this, arguments);
          }
          return (
            fu(n, [
              {
                key: "adjustAndStore",
                value: function (e, t, n) {
                  var r = t.style[e];
                  (t.dataset[e] = r), po(t, u({}, e, "".concat(parseFloat(po(t, e)) + n, "px")));
                },
              },
              {
                key: "restore",
                value: function (e, t) {
                  var n = t.dataset[e];
                  void 0 !== n && (delete t.dataset[e], po(t, u({}, e, n)));
                },
              },
              {
                key: "setContainerStyle",
                value: function (e) {
                  var t = this;
                  Gu(Ku(n.prototype), "setContainerStyle", this).call(this, e);
                  var r,
                    a,
                    i = this.getElement();
                  if (
                    ((a = "modal-open"),
                    (r = i).classList
                      ? r.classList.add(a)
                      : (function (e, t) {
                          return e.classList
                            ? !!t && e.classList.contains(t)
                            : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ");
                        })(r, a) ||
                        ("string" === typeof r.className
                          ? (r.className = r.className + " " + a)
                          : r.setAttribute("class", ((r.className && r.className.baseVal) || "") + " " + a)),
                    e.scrollBarWidth)
                  ) {
                    var o = this.isRTL ? "paddingLeft" : "paddingRight",
                      u = this.isRTL ? "marginLeft" : "marginRight";
                    el(i, rl).forEach(function (n) {
                      return t.adjustAndStore(o, n, e.scrollBarWidth);
                    }),
                      el(i, al).forEach(function (n) {
                        return t.adjustAndStore(u, n, -e.scrollBarWidth);
                      }),
                      el(i, il).forEach(function (n) {
                        return t.adjustAndStore(u, n, e.scrollBarWidth);
                      });
                  }
                },
              },
              {
                key: "removeContainerStyle",
                value: function (e) {
                  var t = this;
                  Gu(Ku(n.prototype), "removeContainerStyle", this).call(this, e);
                  var r,
                    a,
                    i = this.getElement();
                  (a = "modal-open"),
                    (r = i).classList
                      ? r.classList.remove(a)
                      : "string" === typeof r.className
                      ? (r.className = tl(r.className, a))
                      : r.setAttribute("class", tl((r.className && r.className.baseVal) || "", a));
                  var o = this.isRTL ? "paddingLeft" : "paddingRight",
                    u = this.isRTL ? "marginLeft" : "marginRight";
                  el(i, rl).forEach(function (e) {
                    return t.restore(o, e);
                  }),
                    el(i, al).forEach(function (e) {
                      return t.restore(u, e);
                    }),
                    el(i, il).forEach(function (e) {
                      return t.restore(u, e);
                    });
                },
              },
            ]),
            n
          );
        })(mu);
      var ul = ol,
        ll = [
          "bsPrefix",
          "className",
          "children",
          "aria-labelledby",
          "placement",
          "show",
          "backdrop",
          "keyboard",
          "scroll",
          "onEscapeKeyDown",
          "onShow",
          "onHide",
          "container",
          "autoFocus",
          "enforceFocus",
          "restoreFocus",
          "restoreFocusOptions",
          "onEntered",
          "onExit",
          "onExiting",
          "onEnter",
          "onEntering",
          "onExited",
          "backdropClassName",
          "manager",
        ];
      function sl(e) {
        return (0, v.jsx)(Mu, s({}, e));
      }
      function cl(e) {
        return (0, v.jsx)(ju, s({}, e));
      }
      var fl = e.forwardRef(function (t, n) {
        var r = t.bsPrefix,
          a = t.className,
          i = t.children,
          o = t["aria-labelledby"],
          u = t.placement,
          l = t.show,
          c = t.backdrop,
          d = t.keyboard,
          h = t.scroll,
          m = t.onEscapeKeyDown,
          g = t.onShow,
          y = t.onHide,
          w = t.container,
          x = t.autoFocus,
          k = t.enforceFocus,
          E = t.restoreFocus,
          S = t.restoreFocusOptions,
          C = t.onEntered,
          P = t.onExit,
          O = t.onExiting,
          _ = t.onEnter,
          j = t.onEntering,
          T = t.onExited,
          R = t.backdropClassName,
          A = t.manager,
          N = f(t, ll),
          M = (0, e.useRef)();
        r = b(r, "offcanvas");
        var L = ((0, e.useContext)(Xo) || {}).onToggle,
          I = nu(function () {
            null == L || L(), null == y || y();
          }),
          z = (0, e.useMemo)(
            function () {
              return { onHide: I };
            },
            [I]
          );
        var F = (0, e.useCallback)(
          function (e) {
            return (0, v.jsx)("div", s(s({}, e), {}, { className: p()("".concat(r, "-backdrop"), R) }));
          },
          [R, r]
        );
        return (0, v.jsx)(Lu.Provider, {
          value: z,
          children: (0, v.jsx)(Su, {
            show: l,
            ref: n,
            backdrop: c,
            container: w,
            keyboard: d,
            autoFocus: x,
            enforceFocus: k && !h,
            restoreFocus: E,
            restoreFocusOptions: S,
            onEscapeKeyDown: m,
            onShow: g,
            onHide: I,
            onEnter: function (e) {
              e && (e.style.visibility = "visible");
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
              null == _ || _.apply(void 0, [e].concat(n));
            },
            onEntering: j,
            onEntered: C,
            onExit: P,
            onExiting: O,
            onExited: function (e) {
              e && (e.style.visibility = "");
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
              null == T || T.apply(void 0, n);
            },
            manager:
              A ||
              (h
                ? (M.current || (M.current = new ul({ handleContainerOverflow: !1 })), M.current)
                : (function (e) {
                    return nl || (nl = new ol(e)), nl;
                  })()),
            transition: sl,
            backdropTransition: cl,
            renderBackdrop: F,
            renderDialog: function (e) {
              return (0, v.jsx)(
                "div",
                s(
                  s(s({ role: "dialog" }, e), N),
                  {},
                  { className: p()(a, r, "".concat(r, "-").concat(u)), "aria-labelledby": o, children: i }
                )
              );
            },
          }),
        });
      });
      (fl.displayName = "Offcanvas"),
        (fl.defaultProps = {
          show: !1,
          backdrop: !0,
          keyboard: !0,
          scroll: !1,
          autoFocus: !0,
          enforceFocus: !0,
          restoreFocus: !0,
          placement: "start",
        });
      var dl = Object.assign(fl, { Body: Tu, Header: $u, Title: qu }),
        pl = e.forwardRef(function (t, n) {
          var r = (0, e.useContext)(Xo);
          return (0, v.jsx)(dl, s({ ref: n, show: !(null == r || !r.expanded) }, t));
        });
      pl.displayName = "NavbarOffcanvas";
      var hl = pl,
        ml = [
          "bsPrefix",
          "expand",
          "variant",
          "bg",
          "fixed",
          "sticky",
          "className",
          "as",
          "expanded",
          "onToggle",
          "onSelect",
          "collapseOnSelect",
        ],
        vl = me("navbar-text", { Component: "span" }),
        gl = e.forwardRef(function (t, n) {
          var r = Zi(t, { expanded: "onToggle" }),
            a = r.bsPrefix,
            i = r.expand,
            o = r.variant,
            u = r.bg,
            l = r.fixed,
            c = r.sticky,
            d = r.className,
            h = r.as,
            m = void 0 === h ? "nav" : h,
            g = r.expanded,
            y = r.onToggle,
            w = r.onSelect,
            x = r.collapseOnSelect,
            k = f(r, ml),
            E = b(a, "navbar"),
            S = (0, e.useCallback)(
              function () {
                null == w || w.apply(void 0, arguments), x && g && (null == y || y(!1));
              },
              [w, x, g, y]
            );
          void 0 === k.role && "nav" !== m && (k.role = "navigation");
          var C = "".concat(E, "-expand");
          "string" === typeof i && (C = "".concat(C, "-").concat(i));
          var P = (0, e.useMemo)(
            function () {
              return {
                onToggle: function () {
                  return null == y ? void 0 : y(!g);
                },
                bsPrefix: E,
                expanded: !!g,
              };
            },
            [E, g, y]
          );
          return (0,
          v.jsx)(Xo.Provider, { value: P, children: (0, v.jsx)(Qi.Provider, { value: S, children: (0, v.jsx)(m, s(s({ ref: n }, k), {}, { className: p()(d, E, i && C, o && "".concat(E, "-").concat(o), u && "bg-".concat(u), c && "sticky-".concat(c), l && "fixed-".concat(l)) })) }) });
        });
      (gl.defaultProps = { expand: !0, variant: "light", collapseOnSelect: !1 }), (gl.displayName = "Navbar");
      var yl = Object.assign(gl, { Brand: io, Collapse: eu, Offcanvas: hl, Text: vl, Toggle: iu }),
        bl = ["bsPrefix", "fluid", "as", "className"],
        wl = e.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.fluid,
            a = e.as,
            i = void 0 === a ? "div" : a,
            o = e.className,
            u = f(e, bl),
            l = b(n, "container"),
            c = "string" === typeof r ? "-".concat(r) : "-fluid";
          return (0, v.jsx)(i, s(s({ ref: t }, u), {}, { className: p()(o, r ? "".concat(l).concat(c) : l) }));
        });
      (wl.displayName = "Container"), (wl.defaultProps = { fluid: !1 });
      var xl = wl;
      n(573);
      var kl = e.createContext(null);
      kl.displayName = "NavContext";
      var El = kl,
        Sl = e.createContext(null),
        Cl = ["as", "active", "eventKey"];
      function Pl(t) {
        var n = t.key,
          r = t.onClick,
          a = t.active,
          i = t.id,
          o = t.role,
          u = t.disabled,
          l = (0, e.useContext)(Qi),
          s = (0, e.useContext)(El),
          c = (0, e.useContext)(Sl),
          f = a,
          d = { role: o };
        if (s) {
          o || "tablist" !== s.role || (d.role = "tab");
          var p = s.getControllerId(null != n ? n : null),
            h = s.getControlledId(null != n ? n : null);
          (d[du("event-key")] = n),
            (d.id = p || i),
            (!(f = null == a && null != n ? s.activeKey === n : a) &&
              ((null != c && c.unmountOnExit) || (null != c && c.mountOnEnter))) ||
              (d["aria-controls"] = h);
        }
        return (
          "tab" === d.role &&
            (u && ((d.tabIndex = -1), (d["aria-disabled"] = !0)), f ? (d["aria-selected"] = f) : (d.tabIndex = -1)),
          (d.onClick = nu(function (e) {
            u || (null == r || r(e), null != n && l && !e.isPropagationStopped() && l(n, e));
          })),
          [d, { isActive: f }]
        );
      }
      var Ol = e.forwardRef(function (e, t) {
        var n = e.as,
          r = void 0 === n ? Be : n,
          a = e.active,
          i = e.eventKey,
          u = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, Cl),
          l = o(Pl(Object.assign({ key: Gi(i, u.href), active: a }, u)), 2),
          s = l[0],
          c = l[1];
        return (s[du("active")] = c.isActive), (0, v.jsx)(r, Object.assign({}, u, s, { ref: t }));
      });
      Ol.displayName = "NavItem";
      var _l = Ol,
        jl = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
      var Tl = function () {},
        Rl = du("event-key"),
        Al = e.forwardRef(function (t, n) {
          var r,
            a,
            i = t.as,
            o = void 0 === i ? "div" : i,
            u = t.onSelect,
            l = t.activeKey,
            s = t.role,
            c = t.onKeyDown,
            f = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                a = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
              return a;
            })(t, jl),
            d = (0, e.useReducer)(function (e) {
              return !e;
            }, !1)[1],
            p = (0, e.useRef)(!1),
            h = (0, e.useContext)(Qi),
            m = (0, e.useContext)(Sl);
          m && ((s = s || "tablist"), (l = m.activeKey), (r = m.getControlledId), (a = m.getControllerId));
          var g = (0, e.useRef)(null),
            y = function (e) {
              var t = g.current;
              if (!t) return null;
              var n = el(t, "[".concat(Rl, "]:not([aria-disabled=true])")),
                r = t.querySelector("[aria-selected=true]");
              if (!r || r !== document.activeElement) return null;
              var a = n.indexOf(r);
              if (-1 === a) return null;
              var i = a + e;
              return i >= n.length && (i = 0), i < 0 && (i = n.length - 1), n[i];
            },
            b = function (e, t) {
              null != e && (null == u || u(e, t), null == h || h(e, t));
            };
          (0, e.useEffect)(function () {
            if (g.current && p.current) {
              var e = g.current.querySelector("[".concat(Rl, "][aria-selected=true]"));
              null == e || e.focus();
            }
            p.current = !1;
          });
          var w = Do(n, g);
          return (0, v.jsx)(Qi.Provider, {
            value: b,
            children: (0, v.jsx)(El.Provider, {
              value: { role: s, activeKey: Gi(l), getControlledId: r || Tl, getControllerId: a || Tl },
              children: (0, v.jsx)(
                o,
                Object.assign({}, f, {
                  onKeyDown: function (e) {
                    if ((null == c || c(e), m)) {
                      var t, n;
                      switch (e.key) {
                        case "ArrowLeft":
                        case "ArrowUp":
                          t = y(-1);
                          break;
                        case "ArrowRight":
                        case "ArrowDown":
                          t = y(1);
                          break;
                        default:
                          return;
                      }
                      if (t)
                        e.preventDefault(),
                          b(t.dataset[((n = "EventKey"), "".concat("rrUi").concat(n))] || null, e),
                          (p.current = !0),
                          d();
                    }
                  },
                  ref: w,
                  role: s,
                })
              ),
            }),
          });
        });
      Al.displayName = "Nav";
      var Nl = Object.assign(Al, { Item: _l }),
        Ml = me("nav-item");
      var Ll = "undefined" !== typeof n.g && n.g.navigator && "ReactNative" === n.g.navigator.product;
      "undefined" !== typeof document || Ll ? e.useLayoutEffect : e.useEffect, new WeakMap();
      var Il = ["onKeyDown"];
      var zl = e.forwardRef(function (e, t) {
        var n,
          r = e.onKeyDown,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, Il),
          i = o(Fe(Object.assign({ tagName: "a" }, a)), 1)[0],
          u = nu(function (e) {
            i.onKeyDown(e), null == r || r(e);
          });
        return (((n = a.href) && "#" !== n.trim()) || a.role) && "button" !== a.role
          ? (0, v.jsx)("a", Object.assign({ ref: t }, a, { onKeyDown: r }))
          : (0, v.jsx)("a", Object.assign({ ref: t }, a, i, { onKeyDown: u }));
      });
      zl.displayName = "Anchor";
      var Fl = zl,
        Dl = ["bsPrefix", "className", "as", "active", "eventKey"],
        Bl = e.forwardRef(function (e, t) {
          var n = e.bsPrefix,
            r = e.className,
            a = e.as,
            i = void 0 === a ? Fl : a,
            u = e.active,
            l = e.eventKey,
            c = f(e, Dl);
          n = b(n, "nav-link");
          var d = o(Pl(s({ key: Gi(l, c.href), active: u }, c)), 2),
            h = d[0],
            m = d[1];
          return (0,
          v.jsx)(i, s(s(s({}, c), h), {}, { ref: t, className: p()(r, n, c.disabled && "disabled", m.isActive && "active") }));
        });
      (Bl.displayName = "NavLink"), (Bl.defaultProps = { disabled: !1 });
      var Wl = Bl,
        Ul = ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "navbarScroll", "className", "activeKey"],
        Vl = e.forwardRef(function (t, n) {
          var r,
            a,
            i,
            o = Zi(t, { activeKey: "onSelect" }),
            l = o.as,
            c = void 0 === l ? "div" : l,
            d = o.bsPrefix,
            h = o.variant,
            m = o.fill,
            g = o.justify,
            y = o.navbar,
            w = o.navbarScroll,
            x = o.className,
            k = o.activeKey,
            E = f(o, Ul),
            S = b(d, "nav"),
            C = !1,
            P = (0, e.useContext)(Xo),
            O = (0, e.useContext)(xe);
          return (
            P ? ((a = P.bsPrefix), (C = null == y || y)) : O && (i = O.cardHeaderBsPrefix),
            (0, v.jsx)(
              Nl,
              s(
                {
                  as: c,
                  ref: n,
                  activeKey: k,
                  className: p()(
                    x,
                    ((r = {}),
                    u(r, S, !C),
                    u(r, "".concat(a, "-nav"), C),
                    u(r, "".concat(a, "-nav-scroll"), C && w),
                    u(r, "".concat(i, "-").concat(h), !!i),
                    u(r, "".concat(S, "-").concat(h), !!h),
                    u(r, "".concat(S, "-fill"), m),
                    u(r, "".concat(S, "-justified"), g),
                    r)
                  ),
                },
                E
              )
            )
          );
        });
      (Vl.displayName = "Nav"), (Vl.defaultProps = { justify: !1, fill: !1 });
      var Hl = Object.assign(Vl, { Item: Ml, Link: Wl }),
        $l = n(760);
      var ql = function () {
        var t = o((0, e.useState)(!1), 2),
          n = t[0],
          r = t[1],
          a = "state",
          i = (0, $l.useRive)({ src: "/1.riv", stateMachines: a, autoplay: !0 }),
          u = (i.RiveComponent, i.rive);
        return (
          (0, $l.useStateMachineInput)(u, a, "toggle"),
          (0, v.jsx)(v.Fragment, {
            children: (0, v.jsxs)("div", {
              className: "main",
              children: [
                (0, v.jsx)(yl, {
                  bg: n ? "dark" : "Light",
                  variant: n ? "dark" : "Light",
                  children: (0, v.jsxs)(xl, {
                    children: [
                      (0, v.jsx)(fe, {
                        className: n ? "darkmodeText" : "lightmodeText",
                        to: "/",
                        children: (0, v.jsx)(yl.Brand, {
                          className: n ? "darkmodeText" : "lightmodeText",
                          children: "Site Name",
                        }),
                      }),
                      (0, v.jsx)(Hl, {
                        className: "me-auto",
                        children: Ei.map(function (e, t) {
                          return (0,
                          v.jsx)(Hl.Link, { children: (0, v.jsx)(fe, { className: n ? "darkmodeText" : "lightmodeText", to: e.link, children: e.name }) }, t);
                        }),
                      }),
                      (0, v.jsx)("div", {
                        style: { height: "50px" },
                        children: (0, v.jsx)(Yi, {
                          onClick: function () {
                            r(!n);
                          },
                          defaultChecked: !0,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, v.jsxs)(ie, {
                  children: [
                    (0, v.jsx)(re, { path: "/", element: (0, v.jsx)(wi, { darkMode: n }) }),
                    (0, v.jsx)(re, {
                      path: "/blog",
                      element: (0, v.jsx)(ki, { darkMode: n }),
                      children: (0, v.jsx)(re, { path: ":id", element: (0, v.jsx)(Si, { darkMode: n }) }),
                    }),
                    (0, v.jsx)(re, { path: "/about", element: (0, v.jsx)(xi, { darkMode: n }) }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      r.render((0, v.jsx)(ce, { children: (0, v.jsx)(ql, {}) }), document.getElementById("root"));
    })();
})();
//# sourceMappingURL=main.833a6ad3.js.map
