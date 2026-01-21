import he, { useEffect as me, useState as k, useRef as Re } from "react";
import { AlertTriangle as Fr, AlertCircle as lr, CheckCircle as $r, User as cr, KeyRound as Vr, LogOut as dr, Loader2 as Ze, Sparkles as er, Mail as zr, Key as rr, Settings as sr, Monitor as tr, Smartphone as Wr, Tablet as Ur } from "lucide-react";
var Ve = { exports: {} }, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Yr() {
  if (or) return Se;
  or = 1;
  var s = he, d = Symbol.for("react.element"), l = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, g = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(b, m, L) {
    var o, j = {}, n = null, t = null;
    L !== void 0 && (n = "" + L), m.key !== void 0 && (n = "" + m.key), m.ref !== void 0 && (t = m.ref);
    for (o in m) y.call(m, o) && !u.hasOwnProperty(o) && (j[o] = m[o]);
    if (b && b.defaultProps) for (o in m = b.defaultProps, m) j[o] === void 0 && (j[o] = m[o]);
    return { $$typeof: d, type: b, key: n, ref: t, props: j, _owner: g.current };
  }
  return Se.Fragment = l, Se.jsx = p, Se.jsxs = p, Se;
}
var Ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function Hr() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var s = he, d = Symbol.for("react.element"), l = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), b = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), o = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), c = Symbol.iterator, P = "@@iterator";
    function f(r) {
      if (r === null || typeof r != "object")
        return null;
      var a = c && r[c] || r[P];
      return typeof a == "function" ? a : null;
    }
    var N = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(r) {
      {
        for (var a = arguments.length, x = new Array(a > 1 ? a - 1 : 0), E = 1; E < a; E++)
          x[E - 1] = arguments[E];
        T("error", r, x);
      }
    }
    function T(r, a, x) {
      {
        var E = N.ReactDebugCurrentFrame, H = E.getStackAddendum();
        H !== "" && (a += "%s", x = x.concat([H]));
        var B = x.map(function(W) {
          return String(W);
        });
        B.unshift("Warning: " + a), Function.prototype.apply.call(console[r], console, B);
      }
    }
    var i = !1, S = !1, M = !1, C = !1, q = !1, V;
    V = Symbol.for("react.module.reference");
    function Y(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === y || r === u || q || r === g || r === L || r === o || C || r === t || i || S || M || typeof r == "object" && r !== null && (r.$$typeof === n || r.$$typeof === j || r.$$typeof === p || r.$$typeof === b || r.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === V || r.getModuleId !== void 0));
    }
    function z(r, a, x) {
      var E = r.displayName;
      if (E)
        return E;
      var H = a.displayName || a.name || "";
      return H !== "" ? x + "(" + H + ")" : x;
    }
    function G(r) {
      return r.displayName || "Context";
    }
    function F(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case y:
          return "Fragment";
        case l:
          return "Portal";
        case u:
          return "Profiler";
        case g:
          return "StrictMode";
        case L:
          return "Suspense";
        case o:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case b:
            var a = r;
            return G(a) + ".Consumer";
          case p:
            var x = r;
            return G(x._context) + ".Provider";
          case m:
            return z(r, r.render, "ForwardRef");
          case j:
            var E = r.displayName || null;
            return E !== null ? E : F(r.type) || "Memo";
          case n: {
            var H = r, B = H._payload, W = H._init;
            try {
              return F(W(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var v = Object.assign, D = 0, O, w, R, X, de, ue, ie;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function se() {
      {
        if (D === 0) {
          O = console.log, w = console.info, R = console.warn, X = console.error, de = console.group, ue = console.groupCollapsed, ie = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        D++;
      }
    }
    function ee() {
      {
        if (D--, D === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: v({}, r, {
              value: O
            }),
            info: v({}, r, {
              value: w
            }),
            warn: v({}, r, {
              value: R
            }),
            error: v({}, r, {
              value: X
            }),
            group: v({}, r, {
              value: de
            }),
            groupCollapsed: v({}, r, {
              value: ue
            }),
            groupEnd: v({}, r, {
              value: ie
            })
          });
        }
        D < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = N.ReactCurrentDispatcher, pe;
    function K(r, a, x) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (H) {
            var E = H.stack.trim().match(/\n( *(at )?)/);
            pe = E && E[1] || "";
          }
        return `
` + pe + r;
      }
    }
    var J = !1, te;
    {
      var Pe = typeof WeakMap == "function" ? WeakMap : Map;
      te = new Pe();
    }
    function ke(r, a) {
      if (!r || J)
        return "";
      {
        var x = te.get(r);
        if (x !== void 0)
          return x;
      }
      var E;
      J = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = re.current, re.current = null, se();
      try {
        if (a) {
          var W = function() {
            throw Error();
          };
          if (Object.defineProperty(W.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(W, []);
            } catch (ae) {
              E = ae;
            }
            Reflect.construct(r, [], W);
          } else {
            try {
              W.call();
            } catch (ae) {
              E = ae;
            }
            r.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            E = ae;
          }
          r();
        }
      } catch (ae) {
        if (ae && E && typeof ae.stack == "string") {
          for (var $ = ae.stack.split(`
`), ne = E.stack.split(`
`), Q = $.length - 1, Z = ne.length - 1; Q >= 1 && Z >= 0 && $[Q] !== ne[Z]; )
            Z--;
          for (; Q >= 1 && Z >= 0; Q--, Z--)
            if ($[Q] !== ne[Z]) {
              if (Q !== 1 || Z !== 1)
                do
                  if (Q--, Z--, Z < 0 || $[Q] !== ne[Z]) {
                    var ce = `
` + $[Q].replace(" at new ", " at ");
                    return r.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", r.displayName)), typeof r == "function" && te.set(r, ce), ce;
                  }
                while (Q >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        J = !1, re.current = B, ee(), Error.prepareStackTrace = H;
      }
      var Ce = r ? r.displayName || r.name : "", we = Ce ? K(Ce) : "";
      return typeof r == "function" && te.set(r, we), we;
    }
    function Oe(r, a, x) {
      return ke(r, !1);
    }
    function A(r) {
      var a = r.prototype;
      return !!(a && a.isReactComponent);
    }
    function _(r, a, x) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return ke(r, A(r));
      if (typeof r == "string")
        return K(r);
      switch (r) {
        case L:
          return K("Suspense");
        case o:
          return K("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case m:
            return Oe(r.render);
          case j:
            return _(r.type, a, x);
          case n: {
            var E = r, H = E._payload, B = E._init;
            try {
              return _(B(H), a, x);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, oe = {}, _e = N.ReactDebugCurrentFrame;
    function Le(r) {
      if (r) {
        var a = r._owner, x = _(r.type, r._source, a ? a.type : null);
        _e.setExtraStackFrame(x);
      } else
        _e.setExtraStackFrame(null);
    }
    function pr(r, a, x, E, H) {
      {
        var B = Function.call.bind(U);
        for (var W in r)
          if (B(r, W)) {
            var $ = void 0;
            try {
              if (typeof r[W] != "function") {
                var ne = Error((E || "React class") + ": " + x + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ne.name = "Invariant Violation", ne;
              }
              $ = r[W](a, W, E, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Q) {
              $ = Q;
            }
            $ && !($ instanceof Error) && (Le(H), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", x, W, typeof $), Le(null)), $ instanceof Error && !($.message in oe) && (oe[$.message] = !0, Le(H), h("Failed %s type: %s", x, $.message), Le(null));
          }
      }
    }
    var hr = Array.isArray;
    function Me(r) {
      return hr(r);
    }
    function yr(r) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, x = a && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return x;
      }
    }
    function br(r) {
      try {
        return ze(r), !1;
      } catch {
        return !0;
      }
    }
    function ze(r) {
      return "" + r;
    }
    function We(r) {
      if (br(r))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(r)), ze(r);
    }
    var Ue = N.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, He;
    function wr(r) {
      if (U.call(r, "ref")) {
        var a = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function jr(r) {
      if (U.call(r, "key")) {
        var a = Object.getOwnPropertyDescriptor(r, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Nr(r, a) {
      typeof r.ref == "string" && Ue.current;
    }
    function Cr(r, a) {
      {
        var x = function() {
          Ye || (Ye = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        x.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function kr(r, a) {
      {
        var x = function() {
          He || (He = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        x.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Sr = function(r, a, x, E, H, B, W) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: r,
        key: a,
        ref: x,
        props: W,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function Er(r, a, x, E, H) {
      {
        var B, W = {}, $ = null, ne = null;
        x !== void 0 && (We(x), $ = "" + x), jr(a) && (We(a.key), $ = "" + a.key), wr(a) && (ne = a.ref, Nr(a, H));
        for (B in a)
          U.call(a, B) && !vr.hasOwnProperty(B) && (W[B] = a[B]);
        if (r && r.defaultProps) {
          var Q = r.defaultProps;
          for (B in Q)
            W[B] === void 0 && (W[B] = Q[B]);
        }
        if ($ || ne) {
          var Z = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          $ && Cr(W, Z), ne && kr(W, Z);
        }
        return Sr(r, $, ne, H, E, Ue.current, W);
      }
    }
    var Ie = N.ReactCurrentOwner, qe = N.ReactDebugCurrentFrame;
    function Ne(r) {
      if (r) {
        var a = r._owner, x = _(r.type, r._source, a ? a.type : null);
        qe.setExtraStackFrame(x);
      } else
        qe.setExtraStackFrame(null);
    }
    var Te;
    Te = !1;
    function De(r) {
      return typeof r == "object" && r !== null && r.$$typeof === d;
    }
    function Ke() {
      {
        if (Ie.current) {
          var r = F(Ie.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Pr(r) {
      return "";
    }
    var Be = {};
    function _r(r) {
      {
        var a = Ke();
        if (!a) {
          var x = typeof r == "string" ? r : r.displayName || r.name;
          x && (a = `

Check the top-level render call using <` + x + ">.");
        }
        return a;
      }
    }
    function Xe(r, a) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var x = _r(a);
        if (Be[x])
          return;
        Be[x] = !0;
        var E = "";
        r && r._owner && r._owner !== Ie.current && (E = " It was passed a child from " + F(r._owner.type) + "."), Ne(r), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, E), Ne(null);
      }
    }
    function Ge(r, a) {
      {
        if (typeof r != "object")
          return;
        if (Me(r))
          for (var x = 0; x < r.length; x++) {
            var E = r[x];
            De(E) && Xe(E, a);
          }
        else if (De(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var H = f(r);
          if (typeof H == "function" && H !== r.entries)
            for (var B = H.call(r), W; !(W = B.next()).done; )
              De(W.value) && Xe(W.value, a);
        }
      }
    }
    function Lr(r) {
      {
        var a = r.type;
        if (a == null || typeof a == "string")
          return;
        var x;
        if (typeof a == "function")
          x = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === j))
          x = a.propTypes;
        else
          return;
        if (x) {
          var E = F(a);
          pr(x, r.props, "prop", E, r);
        } else if (a.PropTypes !== void 0 && !Te) {
          Te = !0;
          var H = F(a);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rr(r) {
      {
        for (var a = Object.keys(r.props), x = 0; x < a.length; x++) {
          var E = a[x];
          if (E !== "children" && E !== "key") {
            Ne(r), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), Ne(null);
            break;
          }
        }
        r.ref !== null && (Ne(r), h("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    var Je = {};
    function Qe(r, a, x, E, H, B) {
      {
        var W = Y(r);
        if (!W) {
          var $ = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ne = Pr();
          ne ? $ += ne : $ += Ke();
          var Q;
          r === null ? Q = "null" : Me(r) ? Q = "array" : r !== void 0 && r.$$typeof === d ? (Q = "<" + (F(r.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : Q = typeof r, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Q, $);
        }
        var Z = Er(r, a, x, H, B);
        if (Z == null)
          return Z;
        if (W) {
          var ce = a.children;
          if (ce !== void 0)
            if (E)
              if (Me(ce)) {
                for (var Ce = 0; Ce < ce.length; Ce++)
                  Ge(ce[Ce], r);
                Object.freeze && Object.freeze(ce);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(ce, r);
        }
        if (U.call(a, "key")) {
          var we = F(r), ae = Object.keys(a).filter(function(Dr) {
            return Dr !== "key";
          }), Fe = ae.length > 0 ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Je[we + Fe]) {
            var Tr = ae.length > 0 ? "{" + ae.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Fe, we, Tr, we), Je[we + Fe] = !0;
          }
        }
        return r === y ? Rr(Z) : Lr(Z), Z;
      }
    }
    function Ar(r, a, x) {
      return Qe(r, a, x, !0);
    }
    function Or(r, a, x) {
      return Qe(r, a, x, !1);
    }
    var Mr = Or, Ir = Ar;
    Ee.Fragment = y, Ee.jsx = Mr, Ee.jsxs = Ir;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Ve.exports = Yr() : Ve.exports = Hr();
var e = Ve.exports, ur = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ar = he.createContext && he.createContext(ur), be = function() {
  return be = Object.assign || function(s) {
    for (var d, l = 1, y = arguments.length; l < y; l++) {
      d = arguments[l];
      for (var g in d) Object.prototype.hasOwnProperty.call(d, g) && (s[g] = d[g]);
    }
    return s;
  }, be.apply(this, arguments);
}, qr = function(s, d) {
  var l = {};
  for (var y in s) Object.prototype.hasOwnProperty.call(s, y) && d.indexOf(y) < 0 && (l[y] = s[y]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var g = 0, y = Object.getOwnPropertySymbols(s); g < y.length; g++)
    d.indexOf(y[g]) < 0 && Object.prototype.propertyIsEnumerable.call(s, y[g]) && (l[y[g]] = s[y[g]]);
  return l;
};
function fr(s) {
  return s && s.map(function(d, l) {
    return he.createElement(d.tag, be({
      key: l
    }, d.attr), fr(d.child));
  });
}
function mr(s) {
  return function(d) {
    return he.createElement(Kr, be({
      attr: be({}, s.attr)
    }, d), fr(s.child));
  };
}
function Kr(s) {
  var d = function(l) {
    var y = s.attr, g = s.size, u = s.title, p = qr(s, ["attr", "size", "title"]), b = g || l.size || "1em", m;
    return l.className && (m = l.className), s.className && (m = (m ? m + " " : "") + s.className), he.createElement("svg", be({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, l.attr, y, p, {
      className: m,
      style: be(be({
        color: s.color || l.color
      }, l.style), s.style),
      height: b,
      width: b,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && he.createElement("title", null, u), s.children);
  };
  return ar !== void 0 ? he.createElement(ar.Consumer, null, function(l) {
    return d(l);
  }) : d(ur);
}
function Br(s) {
  return mr({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "title", attr: {}, child: [] }, { tag: "path", attr: { d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" } }] })(s);
}
const le = {
  en: {
    login: "Login",
    loginSubtitle: "Enter your credentials",
    email: "Email Address",
    password: "Password",
    forgotPassword: "Forgot your password?",
    loginButton: "Login",
    or: "OR",
    continueWith: "Continue with",
    dontHaveAccount: "Don't have an account?",
    signUp: "Sign Up",
    createAccount: "Create Account",
    createAccountSubtitle: "Sign up to get started",
    firstName: "First Name",
    lastName: "Last Name",
    confirmPassword: "Confirm Password",
    alreadyHaveAccount: "Already have an account?",
    creatingAccount: "Creating account...",
    passwordsDontMatch: "Passwords don't match",
    checkEmail: "Check your email",
    resetPasswordInstructions: "Enter your email to receive a recovery link",
    verifyEmailMessage: "If the email exists, we've sent a link to reset your password.",
    backToLogin: "Back to Login",
    sending: "Sending...",
    sendResetLink: "Send recovery link",
    resetPasswordTitle: "Reset Password",
    resetPasswordSubtitle: "Enter your new password",
    newPassword: "New Password",
    resetting: "Resetting...",
    resetSuccessTitle: "Password Reset Successful",
    resetSuccessSubtitle: "Your password has been updated securely",
    emailVerification: "Email Verification",
    verifying: "Verifying account...",
    verifyingSubtitle: "Please wait while we confirm your email",
    verifySuccess: "Account verified successfully!",
    verifyError: "Verification failed or token expired.",
    waitingConfirmation: "Waiting for confirmation",
    waitingConfirmationMsg: "Hemos enviado un correo con un enlace de confirmación. Por favor, revisa tu bandeja de entrada y spam.",
    resendEmail: "Resend Email",
    resendSent: "Resend email sent!",
    goToLogin: "Go to Login",
    loading: "Loading...",
    enterCode: "Enter the code sent to your email",
    verificationCode: "Verification Code",
    verifyButton: "Verify Account",
    verificationFailed: "Verification failed. Please check the code.",
    activeSessions: "Active Sessions",
    sessionsSubtitle: "You are logged in on these devices. You can sign out from any or all of them for security.",
    ipAddress: "IP Address",
    deviceName: "Device",
    expiry: "Expires",
    logoutThisSession: "Sign out",
    logoutAllSessions: "Sign out from all other devices",
    loggingOut: "Signing out...",
    logoutSuccess: "Signed out successfully",
    changePassword: "Change Password",
    changePasswordSubtitle: "Update your password to keep your account secure",
    oldPassword: "Current Password",
    confirmNewPassword: "Confirm New Password",
    passwordChanged: "Password updated successfully!",
    profile: "My Profile",
    personalInfo: "Personal Information",
    fullNameLabel: "Full Name",
    rolesLabel: "Assigned Roles",
    permissionsLabel: "Active Permissions",
    noPermissions: "No specific permissions assigned",
    closeProfile: "Close Profile",
    connectionError: "Server connection error. Please check your internet or try again later.",
    serverError: "Internal server error. Our team has been notified.",
    unknownError: "An unexpected error occurred.",
    loadingProfile: "Loading profile...",
    failedLoadProfile: "Failed to load profile",
    noSessions: "No active sessions found",
    noApps: "No apps assigned",
    authErrorTitle: "Authorization Error",
    authErrorMessage: "API Token not found in component props.",
    enterRecoveryCode: "Enter recovery code",
    enterCodeAndPassword: "Enter code and password",
    min8Chars: "At least 8 characters",
    resendCode: "Resend Code",
    resendCodeIn: "Resend code in: ",
    close: "Close"
  },
  es: {
    login: "Iniciar Sesión",
    loginSubtitle: "Ingresa tus credenciales",
    email: "Correo Electrónico",
    password: "Contraseña",
    forgotPassword: "¿Olvidaste tu contraseña?",
    loginButton: "Iniciar Sesión",
    or: "O",
    continueWith: "Continuar con",
    dontHaveAccount: "¿No tienes cuenta?",
    signUp: "Regístrate",
    createAccount: "Crear cuenta",
    createAccountSubtitle: "Regístrate para comenzar",
    firstName: "Nombre",
    lastName: "Apellido",
    confirmPassword: "Confirmar Contraseña",
    alreadyHaveAccount: "¿Ya tienes cuenta?",
    creatingAccount: "Creando cuenta...",
    passwordsDontMatch: "Las contraseñas no coinciden",
    checkEmail: "Revisa tu correo",
    resetPasswordInstructions: "Ingresa tu email para recibir un link de recuperación",
    verifyEmailMessage: "Si el correo existe, hemos enviado un enlace para restablecer tu contraseña.",
    backToLogin: "Volver al inicio de sesión",
    sending: "Enviando...",
    sendResetLink: "Enviar enlace de recuperación",
    resetPasswordTitle: "Restablecer contraseña",
    resetPasswordSubtitle: "Ingresa tu nueva contraseña",
    newPassword: "Nueva Contraseña",
    resetting: "Restableciendo...",
    resetSuccessTitle: "Contraseña restablecida",
    resetSuccessSubtitle: "Tu contraseña ha sido actualizada con éxito",
    emailVerification: "Verificación de Email",
    verifying: "Verificando cuenta...",
    verifyingSubtitle: "Por favor espera mientras confirmamos tu correo",
    verifySuccess: "¡Cuenta verificada con éxito!",
    verifyError: "La verificación falló o el token ha expirado.",
    waitingConfirmation: "Esperando confirmación",
    waitingConfirmationMsg: "Hemos enviado un correo con un enlace de confirmación. Por favor, revisa tu bandeja de entrada y spam.",
    resendEmail: "Reenviar Correo",
    resendSent: "¡Correo de reenvío enviado!",
    goToLogin: "Ir al Login",
    loading: "Cargando...",
    enterCode: "Ingresa el código enviado a tu correo",
    verificationCode: "Código de Verificación",
    verifyButton: "Verificar Cuenta",
    verificationFailed: "La verificación falló. Revisa el código.",
    activeSessions: "Sesiones Activas",
    sessionsSubtitle: "Tienes sesiones abiertas en estos dispositivos. Puedes cerrarlas por seguridad.",
    ipAddress: "Dirección IP",
    deviceName: "Dispositivo",
    expiry: "Expira",
    logoutThisSession: "Cerrar sesión",
    logoutAllSessions: "Cerrar todas las demás sesiones",
    loggingOut: "Cerrando sesión...",
    logoutSuccess: "Sesión cerrada con éxito",
    changePassword: "Cambiar Contraseña",
    changePasswordSubtitle: "Actualiza tu contraseña para mantener tu cuenta segura",
    oldPassword: "Contraseña Actual",
    confirmNewPassword: "Confirmar Nueva Contraseña",
    passwordChanged: "¡Contraseña actualizada con éxito!",
    profile: "Mi Perfil",
    personalInfo: "Información Personal",
    fullNameLabel: "Nombre Completo",
    rolesLabel: "Roles Asignados",
    permissionsLabel: "Permisos Activos",
    noPermissions: "Sin permisos específicos asignados",
    closeProfile: "Cerrar Perfil",
    connectionError: "Error de conexión con el servidor. Revisa tu internet o intenta más tarde.",
    serverError: "Error interno del servidor. Nuestro equipo ha sido notificado.",
    unknownError: "Ocurrió un error inesperado.",
    loadingProfile: "Cargando perfil...",
    failedLoadProfile: "Error al cargar el perfil",
    noSessions: "No hay sesiones activas",
    noApps: "No hay aplicaciones asignadas",
    authErrorTitle: "Error de Autorización",
    authErrorMessage: "No se ha encontrado el token de autorización en las props del componente.",
    enterRecoveryCode: "Ingresa el código de recuperación",
    enterCodeAndPassword: "Ingresar código y contraseña",
    min8Chars: "Mínimo 8 caracteres",
    resendCode: "Reenviar Código",
    resendCodeIn: "Reenviar código en: ",
    close: "Cerrar"
  }
};
function ve(s) {
  const d = !!s && s.length > 0;
  return d || console.warn("⚠️ Core Identity Library: Falta el token de autorización (apiToken) en las props del componente."), { isAuthorized: d, apiToken: s };
}
function ge(s, d) {
  const { isAuthorized: l } = ve(d), y = async (n, t = {}) => {
    const { token: c, ...P } = t;
    try {
      const f = {
        "Content-Type": "application/json",
        "X-API-KEY": d,
        "X-REQUEST-URL": typeof window < "u" ? window.location.origin.replace(/\/$/, "") : "",
        ...t.headers
      };
      c && (f.Authorization = `Bearer ${c}`);
      const N = await fetch(`${s}${n}`, {
        ...P,
        headers: f,
        credentials: "include"
      });
      let h;
      const T = N.headers.get("content-type");
      if (T && T.includes("application/json"))
        try {
          h = await N.json();
        } catch (i) {
          console.error("Failed to parse JSON response", i), h = { message: await N.text() };
        }
      else
        h = { message: await N.text() };
      if (!N.ok) {
        const i = new Error(h.message || h.error || `Error ${N.status}`);
        throw i.status = N.status, i.data = h, i;
      }
      return h;
    } catch (f) {
      if (f.name === "TypeError" && (f.message.includes("Failed to fetch") || f.message.includes("NetworkError"))) {
        const N = new Error("Connection Error");
        throw N.isConnectionError = !0, N;
      }
      throw f;
    }
  }, g = async (n, t, c = {}) => y(n, {
    method: "POST",
    body: t ? JSON.stringify(t) : void 0,
    ...c
  }), u = async (n, t = {}) => y(n, {
    method: "GET",
    ...t
  });
  return {
    post: g,
    get: u,
    verifySession: async (n, t) => g("/verify-session", { email: t }, { token: n }),
    getUserContext: async (n, t) => g("/user-context", { email: t }, { token: n }),
    logout: async (n, t) => g("/logout", { email: t }, { token: n }),
    changePassword: async (n) => {
      const { token: t, ...c } = n;
      return g("/change-password", c, { token: t });
    },
    getAppColors: async () => u("/colors-app"),
    getMe: async (n, t) => g("/me", { email: n }, { token: t })
  };
}
function gr({
  apiBaseUrl: s,
  user: d = {},
  primaryColor: l = "#3b82f6",
  onSuccess: y,
  onError: g,
  lang: u = "en",
  apiToken: p,
  texts: b = {}
}) {
  var t;
  const m = { ...le[u], ...b }, { post: L } = ge(s, p), o = ((t = d.app_info) == null ? void 0 : t.primaryColor) || l;
  me(() => {
    const c = (P) => {
      let f, N;
      try {
        const i = new URL(s);
        f = i.origin;
        const S = i.hostname.split(".");
        S.length >= 2 && (N = S.slice(-2).join("."));
      } catch {
      }
      const h = N && P.origin.endsWith(N) || f && P.origin === f;
      if (P.origin === window.location.origin || h) {
        if (P.data.type === "OAUTH_SUCCESS") {
          const { token: i, handshake_code: S, user: M } = P.data.payload;
          console.log("OAuth Login Successful:", M), y && y({
            success: !0,
            token: i,
            handshake_code: S,
            user: M,
            email: M == null ? void 0 : M.email,
            // Ensure compatibility with existing success handlers
            provider: "Social"
          });
        } else if (P.data.type === "OAUTH_ERROR") {
          const { message: i, apps: S } = P.data.payload;
          console.error("OAuth Login Error:", i), g && g(i, S);
        }
      }
    };
    return window.addEventListener("message", c, !1), () => window.removeEventListener("message", c);
  }, [y, g, s]);
  const j = (c) => {
    L("/login", {
      provider: c,
      frontend_origin: window.location.origin
    }).then((P) => {
      const f = P.auth_url || P.redirect_url;
      if (f) {
        const T = window.screen.width / 2 - 300, i = window.screen.height / 2 - 700 / 2;
        window.open(
          f,
          "login_popup",
          `width=600,height=700,left=${T},top=${i},status=no,resizable=yes,scrollbars=yes`
        );
      } else {
        const N = P.error || P.message || (u === "es" ? "Error al iniciar sesión social" : "Social login error");
        g && g(N);
      }
    }).catch((P) => {
      console.error("⚠️ Social Auth Error:", P), g && g(P.message || "Error");
    });
  }, n = o ? { borderColor: o, color: o } : {};
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        className: "w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors",
        style: n,
        onClick: () => j("Google"),
        "data-testid": "button-google-login",
        children: [
          /* @__PURE__ */ e.jsx(Br, { className: "h-4 w-4" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            m.continueWith,
            " Google"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        className: "w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors",
        style: n,
        onClick: () => j("Microsoft"),
        "data-testid": "button-microsoft-login",
        children: [
          /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" }) }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            m.continueWith,
            " Microsoft"
          ] })
        ]
      }
    )
  ] });
}
let fe = null, $e = null;
function xe(s, d, l, y, g) {
  var m, L, o, j;
  const { getAppColors: u } = ge(s, d), [p, b] = k({
    primaryColor: ((m = l == null ? void 0 : l.app_info) == null ? void 0 : m.primaryColor) || ((L = l == null ? void 0 : l.app_info) == null ? void 0 : L.primary_color) || (fe == null ? void 0 : fe.primaryColor) || y,
    backgroundColor: ((o = l == null ? void 0 : l.app_info) == null ? void 0 : o.backgroundColor) || ((j = l == null ? void 0 : l.app_info) == null ? void 0 : j.background_color) || (fe == null ? void 0 : fe.backgroundColor) || g,
    isLoading: !fe && !(l != null && l.app_info) && !!(s && d)
  });
  return me(() => {
    if (l != null && l.app_info) {
      const n = l.app_info.primaryColor || l.app_info.primary_color, t = l.app_info.backgroundColor || l.app_info.background_color;
      if ((n || t) && (b((c) => ({
        primaryColor: n || c.primaryColor,
        backgroundColor: t || c.backgroundColor,
        isLoading: !1
      })), n && t))
        return;
    }
    if (fe && !(l != null && l.app_info)) {
      b({
        primaryColor: fe.primaryColor,
        backgroundColor: fe.backgroundColor,
        isLoading: !1
      });
      return;
    }
    s && d ? (async () => {
      $e || ($e = u().catch((P) => (console.error("Failed to fetch app colors:", P), null)));
      const t = await $e, c = {
        primaryColor: (t == null ? void 0 : t.primaryColor) || (t == null ? void 0 : t.primary_color) || y,
        backgroundColor: (t == null ? void 0 : t.backgroundColor) || (t == null ? void 0 : t.background_color) || g
      };
      fe = c, b({ ...c, isLoading: !1 });
    })() : b((n) => ({ ...n, isLoading: !1 }));
  }, [l == null ? void 0 : l.app_info, y, g, s, d]), p;
}
function je({ lang: s = "en" }) {
  const d = le[s] || le.en;
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center p-8 bg-red-50 border border-red-200 rounded-lg text-red-800 space-x-4 max-w-md mx-auto my-10", children: [
    /* @__PURE__ */ e.jsx(Fr, { className: "w-8 h-8 flex-shrink-0" }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "font-bold text-lg", children: d.authErrorTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: d.authErrorMessage })
    ] })
  ] });
}
function ye({ message: s }) {
  return s ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 p-3 text-sm text-red-700 bg-red-50 border border-red-100 rounded-md animate-in fade-in slide-in-from-top-1 duration-200", children: [
    /* @__PURE__ */ e.jsx(lr, { className: "w-4 h-4 flex-shrink-0" }),
    /* @__PURE__ */ e.jsx("p", { children: s })
  ] }) : null;
}
function es({
  apiBaseUrl: s,
  user: d = {},
  primaryColor: l = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: p,
  apiToken: b,
  lang: m = "en",
  texts: L = {}
}) {
  const o = { ...le[m], ...L }, { isAuthorized: j } = ve(b), { primaryColor: n, backgroundColor: t, isLoading: c } = xe(s, b, d, l, y), { post: P } = ge(s, b), [f, N] = k(""), [h, T] = k(""), [i, S] = k(!1), [M, C] = k(""), [q, V] = k([]);
  if (c) return null;
  if (!j)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const Y = (D) => {
    g && g(D);
  }, z = async (D) => {
    var O;
    D.preventDefault(), S(!0), C(""), V([]);
    try {
      const w = await P("/login", {
        provider: "Email",
        email: f,
        password: h
      });
      if (w.success)
        Y({ ...w, email: f });
      else {
        const R = w.message || w.error || o.unknownError;
        C(R), w.apps && V(w.apps), u && u(R), S(!1);
      }
    } catch (w) {
      console.error("⚠️ Login Error:", w);
      let R = w.message;
      w.isConnectionError ? R = o.connectionError : w.status >= 500 ? R = o.serverError : (!R || R === "Error " + w.status) && (R = o.unknownError), C(R), (O = w.data) != null && O.apps && V(w.data.apps), u && u(R), S(!1);
    }
  }, G = {
    backgroundColor: n,
    color: "#ffffff"
  }, F = {
    backgroundColor: t
  }, v = {
    color: n
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: F, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: o.login }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: o.loginSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(
        gr,
        {
          apiBaseUrl: s,
          user: d,
          primaryColor: n,
          onSuccess: Y,
          onError: (D, O) => {
            C(D), O && V(O), u && u(D);
          },
          lang: m,
          apiToken: b,
          texts: L
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "relative py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full border-t border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "px-2 text-gray-500", style: F, children: o.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: z, className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(ye, { message: M }),
        q.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-blue-50 border border-blue-100 rounded-md space-y-2", children: [
          /* @__PURE__ */ e.jsxs("p", { className: "text-xs font-bold text-blue-800 uppercase tracking-wider", children: [
            o.availableApps || "Available Apps",
            ":"
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-2", children: q.map((D) => /* @__PURE__ */ e.jsx(
            "a",
            {
              href: D.publicUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-[10px] px-2 py-1 bg-white border border-blue-200 rounded-full text-blue-600 hover:bg-blue-100 transition-colors",
              children: D.appName
            },
            D.appKey
          )) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-email", className: "text-sm font-medium leading-none", children: o.email }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              id: "auth-email",
              type: "email",
              placeholder: "user@example.com",
              className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
              value: f,
              onChange: (D) => {
                N(D.target.value), M && C("");
              },
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-password", className: "text-sm font-medium leading-none", children: o.password }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              id: "auth-password",
              type: "password",
              className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
              value: h,
              onChange: (D) => {
                T(D.target.value), M && C("");
              },
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => p && p("forgot-password"),
            className: "text-sm hover:underline",
            style: v,
            children: o.forgotPassword
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
            style: G,
            disabled: i,
            children: i ? o.loading : o.loginButton
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500", children: [
      o.dontHaveAccount,
      " ",
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => p && p("signup"),
          className: "font-medium hover:underline",
          style: v,
          children: o.signUp
        }
      )
    ] }) })
  ] });
}
function rs({
  apiBaseUrl: s,
  user: d = {},
  primaryColor: l = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: p,
  apiToken: b,
  lang: m = "en",
  texts: L = {}
}) {
  const o = { ...le[m], ...L }, { isAuthorized: j } = ve(b), { primaryColor: n, backgroundColor: t, isLoading: c } = xe(s, b, d, l, y), { post: P } = ge(s, b), [f, N] = k(!1), [h, T] = k(""), [i, S] = k({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }), [M, C] = k([]);
  if (c) return null;
  if (!j)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const q = (v) => {
    g && g(v);
  }, V = async (v) => {
    var D;
    if (v.preventDefault(), T(""), C([]), i.password !== i.confirmPassword) {
      const O = o.passwordsDontMatch;
      T(O), u && u(O);
      return;
    }
    N(!0);
    try {
      const O = await P("/register", {
        firstName: i.firstName,
        lastName: i.lastName,
        email: i.email,
        password: i.password
      });
      if (O.success)
        q({ ...O, email: i.email });
      else {
        const w = O.message || O.error || o.unknownError;
        T(w), O.apps && C(O.apps), u && u(w), N(!1);
      }
    } catch (O) {
      console.error("⚠️ SignUp Error:", O);
      let w = O.message;
      O.isConnectionError ? w = o.connectionError : O.status >= 500 ? w = o.serverError : (!w || w === "Error " + O.status) && (w = o.unknownError), T(w), (D = O.data) != null && D.apps && C(O.data.apps), u && u(w), N(!1);
    }
  }, Y = (v, D) => {
    S((O) => ({ ...O, [v]: D })), h && T("");
  }, z = {
    backgroundColor: n,
    color: "#ffffff"
  }, G = {
    backgroundColor: t
  }, F = {
    color: n
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: G, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6 text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: o.createAccount }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: o.createAccountSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(
        gr,
        {
          apiBaseUrl: s,
          user: d,
          primaryColor: n,
          onSuccess: q,
          onError: (v, D) => {
            T(v), D && C(D), u && u(v);
          },
          lang: m,
          apiToken: b,
          texts: L
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "relative py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full border-t border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "px-2 text-gray-500", style: G, children: o.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: V, className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(ye, { message: h }),
        M.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "p-3 bg-blue-50 border border-blue-100 rounded-md space-y-2", children: [
          /* @__PURE__ */ e.jsxs("p", { className: "text-xs font-bold text-blue-800 uppercase tracking-wider", children: [
            o.availableApps || "Available Apps",
            ":"
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-2", children: M.map((v) => /* @__PURE__ */ e.jsx(
            "a",
            {
              href: v.publicUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-[10px] px-2 py-1 bg-white border border-blue-200 rounded-full text-blue-600 hover:bg-blue-100 transition-colors",
              children: v.appName
            },
            v.appKey
          )) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: o.firstName }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                value: i.firstName,
                onChange: (v) => Y("firstName", v.target.value),
                required: !0,
                className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: o.lastName }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                value: i.lastName,
                onChange: (v) => Y("lastName", v.target.value),
                required: !0,
                className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: o.email }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "email",
              value: i.email,
              onChange: (v) => Y("email", v.target.value),
              required: !0,
              className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: o.password }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "password",
              value: i.password,
              onChange: (v) => Y("password", v.target.value),
              required: !0,
              className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: o.confirmPassword }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "password",
              value: i.confirmPassword,
              onChange: (v) => Y("confirmPassword", v.target.value),
              required: !0,
              className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
            style: z,
            disabled: f,
            children: f ? o.creatingAccount : o.createAccount
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500", children: [
      o.alreadyHaveAccount,
      " ",
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => p && p("login"),
          className: "font-medium hover:underline",
          style: F,
          children: o.login
        }
      )
    ] }) })
  ] });
}
function ss({
  apiBaseUrl: s,
  user: d = {},
  primaryColor: l = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: p,
  apiToken: b,
  lang: m = "en",
  texts: L = {}
}) {
  const o = { ...le[m], ...L }, { isAuthorized: j } = ve(b), { primaryColor: n, backgroundColor: t, isLoading: c } = xe(s, b, d, l, y), { post: P } = ge(s, b), [f, N] = k(""), [h, T] = k(!1), [i, S] = k(!1), [M, C] = k("");
  if (c) return null;
  if (!j)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const q = async (G) => {
    G.preventDefault(), T(!0), C("");
    try {
      const F = await P("/forgot-password", { email: f });
      if (F.success)
        S(!0), g && g({ ...F, email: f });
      else {
        const v = F.message || F.error || o.unknownError;
        C(v), u && u(v), T(!1);
      }
    } catch (F) {
      console.error("⚠️ ForgotPassword Error:", F);
      let v = F.message;
      F.isConnectionError ? v = o.connectionError : F.status >= 500 ? v = o.serverError : (!v || v === "Error " + F.status) && (v = o.unknownError), C(v), u && u(v), T(!1);
    }
  }, V = {
    backgroundColor: n,
    color: "#ffffff"
  }, Y = {
    backgroundColor: t
  }, z = {
    color: n
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: Y, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6 text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: o.forgotPassword }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: i ? o.checkEmail : o.resetPasswordInstructions })
    ] }),
    i ? /* @__PURE__ */ e.jsxs("div", { className: "text-center space-y-6 py-4", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8 text-blue-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: o.verifyEmailMessage }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => p && p("reset-password"),
            className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
            style: V,
            children: o.enterCodeAndPassword
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => p && p("login"),
            className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-200 hover:bg-gray-50",
            children: o.backToLogin
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e.jsxs("form", { onSubmit: q, className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: M }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-forgot-email", className: "text-sm font-medium", children: o.email }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            id: "auth-forgot-email",
            type: "email",
            placeholder: "user@example.com",
            className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
            value: f,
            onChange: (G) => {
              N(G.target.value), M && C("");
            },
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
          style: V,
          disabled: h,
          children: h ? o.sending : o.sendResetLink
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => p && p("login"),
          className: "w-full text-sm font-medium hover:underline text-center",
          style: z,
          children: o.backToLogin
        }
      )
    ] })
  ] });
}
function Ae({ message: s }) {
  return s ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 p-3 text-sm text-green-700 bg-green-50 border border-green-100 rounded-md animate-in fade-in slide-in-from-top-1 duration-200", children: [
    /* @__PURE__ */ e.jsx($r, { className: "w-4 h-4 flex-shrink-0" }),
    /* @__PURE__ */ e.jsx("p", { children: s })
  ] }) : null;
}
function ts({
  apiBaseUrl: s,
  token: d = "",
  // The recovery code from URL/Email
  primaryColor: l = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: p,
  apiToken: b,
  lang: m = "en",
  email: L = "",
  authToken: o = "",
  // Auth token passed from consumer
  user: j = {},
  initialWaitSeconds: n = 0,
  texts: t = {}
}) {
  const c = { ...le[m], ...t }, { isAuthorized: P } = ve(b), { primaryColor: f, backgroundColor: N, isLoading: h } = xe(s, b, j, l, y), { post: T } = ge(s, b), [i, S] = k({
    token: d,
    newPassword: "",
    confirmPassword: ""
  }), [M, C] = k(!1), [q, V] = k(!1), [Y, z] = k(!1), [G, F] = k([]), [v, D] = k(!1), [O, w] = k(""), [R, X] = k(""), [de, ue] = k(o), [ie, I] = k(n), [se, ee] = k(c.resetPasswordSubtitle), re = Re(null);
  if (me(() => (ie > 0 && (re.current = setInterval(() => {
    I((A) => A <= 1 ? (clearInterval(re.current), 0) : A - 1);
  }, 1e3)), () => clearInterval(re.current)), [ie]), me(() => {
    o && ue(o);
  }, [o]), h) return null;
  if (!P)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const pe = (A) => {
    const _ = Math.floor(A / 60), U = A % 60;
    return `${_.toString().padStart(2, "0")}:${U.toString().padStart(2, "0")}`;
  }, K = async () => {
    if (!(!L || ie > 0)) {
      V(!0), w("");
      try {
        const A = await T("/forgot-password", { email: L });
        if (A.success)
          A.wait_seconds && I(A.wait_seconds), ee(A.message || c.resendSent);
        else {
          const _ = A.message || A.error || c.connectionError;
          w(_), A.wait_seconds && I(A.wait_seconds), u && u(_);
        }
      } catch (A) {
        console.error("⚠️ Resend Reset Error:", A);
        let _ = A.message;
        A.isConnectionError ? _ = c.connectionError : A.status >= 500 ? _ = c.serverError : (!_ || _ === "Error " + A.status) && (_ = c.unknownError), w(_), u && u(_);
      } finally {
        V(!1);
      }
    }
  }, J = async (A) => {
    if (A.preventDefault(), w(""), i.newPassword !== i.confirmPassword) {
      const _ = c.passwordsDontMatch;
      w(_), u && u(_);
      return;
    }
    if (!i.token) {
      const _ = c.enterRecoveryCode;
      w(_), u && u(_);
      return;
    }
    C(!0);
    try {
      const _ = await T("/reset-password", {
        token: i.token,
        newPassword: i.newPassword,
        confirmPassword: i.confirmPassword
      });
      if (_.success || _.status)
        z(!0), _.active_sessions && F(_.active_sessions), _.token && ue(_.token), g && g(_);
      else {
        const U = _.message || _.error || c.unknownError;
        w(U), u && u(U), C(!1);
      }
    } catch (_) {
      console.error("⚠️ ResetPassword Error:", _);
      let U = _.message;
      _.isConnectionError ? U = c.connectionError : _.status >= 500 ? U = c.serverError : (!U || U === "Error " + _.status) && (U = c.unknownError), w(U), u && u(U), C(!1);
    }
  }, te = async (A = !1, _ = []) => {
    if (!de) {
      const U = c.noSessions;
      w(U), u && u(U);
      return;
    }
    D(!0), w(""), X("");
    try {
      const U = await T("/logout_sessions", {
        email: L || "",
        all_sessions: A,
        session_ids: _
      }, { token: de });
      if (U.success)
        F(A ? [] : (oe) => oe.filter((_e) => !_.includes(_e._id))), X(c.logoutSuccess);
      else {
        const oe = U.message || U.error || "Logout failed";
        w(oe), u && u(oe);
      }
    } catch (U) {
      console.error("⚠️ Logout Sessions Error:", U);
      let oe = U.message;
      U.isConnectionError ? oe = c.connectionError : U.status >= 500 ? oe = c.serverError : (!oe || oe === "Error " + U.status) && (oe = c.unknownError), w(oe), u && u(oe);
    } finally {
      D(!1);
    }
  }, Pe = {
    backgroundColor: f,
    color: "#ffffff"
  }, ke = {
    backgroundColor: N
  }, Oe = {
    color: f
  };
  return Y ? /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: ke, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-4", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: c.resetSuccessTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: c.resetSuccessSubtitle })
    ] }),
    /* @__PURE__ */ e.jsx(Ae, { message: R }),
    /* @__PURE__ */ e.jsx(ye, { message: O }),
    G.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "mt-8 space-y-4 border-t pt-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium", children: c.activeSessions }),
        /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500", children: c.sessionsSubtitle })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "space-y-3 max-h-60 overflow-y-auto pr-1", children: G.map((A) => {
        var _;
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 border rounded-md text-xs bg-gray-50 flex justify-between items-center", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ e.jsx("div", { className: "font-semibold text-gray-700 truncate max-w-[180px]", title: A["Device Name"], children: ((_ = A["Device Name"]) == null ? void 0 : _.split(" ")[0]) || c.deviceName }),
            /* @__PURE__ */ e.jsx("div", { className: "text-gray-500", children: A.IP }),
            A["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "text-gray-400 italic", children: [
              c.expiry,
              ": ",
              new Date(A["Expiration Date"]).toLocaleDateString()
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => te(!1, [A._id]),
              disabled: v,
              className: "px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors",
              children: c.logoutThisSession
            }
          )
        ] }, A._id);
      }) }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => te(!0),
          disabled: v,
          className: "w-full py-2 text-sm text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors font-medium",
          children: v ? c.loggingOut : c.logoutAllSessions
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-8 pt-6 border-t", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => p && p("login"),
        className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        style: Pe,
        children: c.goToLogin
      }
    ) })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: ke, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6 text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: c.resetPasswordTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: se })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: J, className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: O }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: c.verificationCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: i.token,
            onChange: (A) => S({ ...i, token: A.target.value }),
            required: !0,
            className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 font-mono tracking-widest text-center",
            placeholder: "XXXXXX"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: c.newPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: i.newPassword,
            onChange: (A) => S({ ...i, newPassword: A.target.value }),
            required: !0,
            className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
            placeholder: c.min8Chars
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: c.confirmPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: i.confirmPassword,
            onChange: (A) => S({ ...i, confirmPassword: A.target.value }),
            required: !0,
            className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
          style: Pe,
          disabled: M || !i.token,
          children: M ? c.resetting : c.resetPasswordTitle
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "pt-2 text-center space-y-3", children: [
        ie > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "text-xs text-gray-500 font-mono", children: [
          c.resendCodeIn,
          /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: pe(ie) })
        ] }) : /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: K,
            disabled: q || !L,
            className: "text-sm font-medium hover:underline",
            style: Oe,
            children: q ? c.loading : c.resendCode
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => p && p("login"),
            className: "w-full text-sm font-medium hover:underline text-center text-gray-500",
            children: c.backToLogin
          }
        )
      ] })
    ] })
  ] });
}
function os({
  apiBaseUrl: s,
  user: d = {},
  primaryColor: l = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: p,
  apiToken: b,
  // X-API-KEY for headers
  authToken: m,
  // User session token
  email: L,
  // User email
  lang: o = "en",
  texts: j = {}
}) {
  const n = { ...le[o], ...j }, { isAuthorized: t } = ve(b), { primaryColor: c, backgroundColor: P, isLoading: f } = xe(s, b, d, l, y), { changePassword: N } = ge(s, b), [h, T] = k({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }), [i, S] = k(!1), [M, C] = k(!1), [q, V] = k(""), [Y, z] = k("");
  if (f) return null;
  if (!t)
    return /* @__PURE__ */ e.jsx(je, { lang: o });
  const G = async (w) => {
    if (w.preventDefault(), V(""), z(""), h.newPassword !== h.confirmPassword) {
      const R = n.passwordsDontMatch;
      V(R), u && u(R);
      return;
    }
    S(!0);
    try {
      const R = await N({
        email: L || d.email,
        old_password: h.oldPassword,
        new_password: h.newPassword,
        token: m
        // Now using user session token, not api key
      });
      if (R.success)
        C(!0), z(n.passwordChanged), g && g(R), T({ oldPassword: "", newPassword: "", confirmPassword: "" }), setTimeout(() => z(""), 5e3);
      else {
        const X = R.message || R.error || n.unknownError;
        V(X), u && u(X);
      }
    } catch (R) {
      console.error("⚠️ ChangePassword Error:", R);
      let X = R.message;
      R.isConnectionError ? X = n.connectionError : R.status >= 500 ? X = n.serverError : (!X || X === "Error " + R.status) && (X = n.unknownError), V(X), u && u(X);
    } finally {
      S(!1);
    }
  }, F = (w, R) => {
    T((X) => ({ ...X, [w]: R })), q && V("");
  }, v = {
    backgroundColor: c,
    color: "#ffffff"
  }, D = {
    backgroundColor: P
  }, O = {
    color: c
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: D, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6 text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: n.changePassword }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: n.changePasswordSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: G, className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: q }),
      /* @__PURE__ */ e.jsx(Ae, { message: Y }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: n.oldPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: h.oldPassword,
            onChange: (w) => F("oldPassword", w.target.value),
            required: !0,
            className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: n.newPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: h.newPassword,
            onChange: (w) => F("newPassword", w.target.value),
            required: !0,
            className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: n.confirmNewPassword || n.confirmPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: h.confirmPassword,
            onChange: (w) => F("confirmPassword", w.target.value),
            required: !0,
            className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
          style: v,
          disabled: i,
          children: i ? n.loading : n.changePassword
        }
      ),
      p && /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => p("login"),
          className: "w-full text-sm font-medium hover:underline text-center",
          style: O,
          children: n.backToLogin
        }
      )
    ] })
  ] });
}
function ns({
  apiBaseUrl: s,
  token: d,
  user: l = {},
  primaryColor: y = "#3b82f6",
  backgroundColor: g = "#ffffff",
  onSuccess: u,
  onError: p,
  onNavigate: b,
  lang: m = "en",
  apiToken: L,
  texts: o = {}
}) {
  const j = { ...le[m], ...o }, { isAuthorized: n } = ve(L), { primaryColor: t, backgroundColor: c, isLoading: P } = xe(s, L, l, y, g), { post: f } = ge(s, L), [N, h] = k(d ? "verifying" : "idle"), [T, i] = k(""), [S, M] = k("");
  if (me(() => {
    d && N === "verifying" && C();
  }, [d]), P) return null;
  if (!n)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const C = async () => {
    M("");
    try {
      const Y = await f("/verify-email", { token: d });
      if (Y.success)
        h("success"), i(Y.message || j.verifySuccess), u && u(Y);
      else {
        h("error");
        const z = Y.message || Y.error || j.verifyError;
        i(z), M(z), p && p(z);
      }
    } catch (Y) {
      console.error("⚠️ Verification Error:", Y), h("error");
      const z = j.connectionError;
      i(z), M(z), p && p(z);
    }
  }, q = {
    backgroundColor: t,
    color: "#ffffff"
  }, V = {
    backgroundColor: c
  };
  return d ? /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: V, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: N === "verifying" ? j.verifying : j.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: N === "verifying" ? j.verifyingSubtitle : T })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "py-6 flex flex-col items-center", children: [
      /* @__PURE__ */ e.jsx(ye, { message: S }),
      N === "verifying" && /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-500", style: { borderTopColor: t } }),
      N === "success" && /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      N === "error" && /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })
    ] }),
    N !== "verifying" && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => b && b("login"),
        className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        style: q,
        children: j.backToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: V, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: j.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: j.checkEmail })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-6 py-4 flex flex-col items-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 max-w-sm", children: j.verifyEmailMessage }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => b && b("login"),
          className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-200 hover:bg-gray-50",
          children: j.backToLogin
        }
      )
    ] })
  ] });
}
function as({
  apiBaseUrl: s,
  user: d = {},
  primaryColor: l = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onNavigate: g,
  lang: u = "en",
  userEmail: p,
  initialMessage: b,
  initialWaitSeconds: m = 0,
  onSuccess: L,
  onError: o,
  apiToken: j,
  // Added apiToken
  texts: n = {}
}) {
  const t = { ...le[u], ...n }, { isAuthorized: c } = ve(j), { primaryColor: P, backgroundColor: f, isLoading: N } = xe(s, j, d, l, y), { post: h } = ge(s, j), [T, i] = k(!1), [S, M] = k(!1), [C, q] = k(""), [V, Y] = k(b || t.waitingConfirmationMsg), [z, G] = k(m), [F, v] = k(!1), [D, O] = k(!1), [w, R] = k(""), [X, de] = k(""), ue = Re(null);
  if (me(() => (z > 0 && (ue.current = setInterval(() => {
    G((K) => K <= 1 ? (clearInterval(ue.current), 0) : K - 1);
  }, 1e3)), () => clearInterval(ue.current)), [z]), me(() => {
    z === 0 && (m > 0 || F) && (Y(t.waitingConfirmationMsg), v(!1));
  }, [z, m, t.waitingConfirmationMsg]), N) return null;
  if (!c)
    return /* @__PURE__ */ e.jsx(je, { lang: u });
  const ie = (K) => {
    const J = Math.floor(K / 60), te = K % 60;
    return `${J.toString().padStart(2, "0")}:${te.toString().padStart(2, "0")}`;
  }, I = async (K) => {
    if (K.preventDefault(), !!C) {
      M(!0), R("");
      try {
        const J = await h("/verify-email", { token: C });
        if (J.success)
          O(!0), L && L(J);
        else {
          const te = J.message || J.error || t.verificationFailed;
          R(te), o && o(te);
        }
      } catch (J) {
        console.error("⚠️ Manual Verification Error:", J);
        const te = t.connectionError;
        R(te), o && o(te);
      } finally {
        M(!1);
      }
    }
  }, se = async () => {
    if (!(!p || z > 0)) {
      i(!0), v(!1), R(""), de("");
      try {
        const K = await h("/resend-confirmation", { email: p });
        if (K.success) {
          v(!0);
          const J = K.message || t.resendSent;
          de(J), K.wait_seconds && G(K.wait_seconds);
        } else {
          const J = K.message || K.error || t.connectionError;
          R(J), K.wait_seconds && G(K.wait_seconds), o && o(J);
        }
      } catch (K) {
        console.error("⚠️ Resend Error:", K);
        const J = t.connectionError;
        R(J), o && o(J);
      } finally {
        i(!1);
      }
    }
  }, ee = {
    backgroundColor: P,
    color: "#ffffff"
  }, re = {
    backgroundColor: f
  }, pe = {
    color: P
  };
  return D ? /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: re, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: t.verifySuccess }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: t.verifySuccess })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "py-6 flex justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }) }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => g && g("login"),
        className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        style: ee,
        children: t.goToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: re, children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center mb-6", children: S ? /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-blue-500", style: { borderTopColor: P } }) : /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }) }),
    /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold mb-2", children: t.waitingConfirmation }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm mb-6 text-gray-500", children: V }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx(Ae, { message: X }),
      /* @__PURE__ */ e.jsx(ye, { message: w })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: I, className: "mb-8 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700 block text-left px-1", children: t.enterCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: "XXXXXX",
            className: "flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-center text-lg font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2",
            value: C,
            onChange: (K) => q(K.target.value),
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          disabled: S || !C,
          className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50",
          style: ee,
          children: S ? t.loading : t.verifyButton
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "border-t pt-6 space-y-3", children: [
      z > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-2 rounded bg-gray-50 text-gray-700 text-xs font-mono border inline-block", children: [
        t.resendCodeIn,
        /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: ie(z) })
      ] }) : /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: se,
          disabled: T || !p,
          className: "text-sm font-medium hover:underline",
          style: pe,
          children: T ? t.loading : t.resendEmail
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => g && g("login"),
          className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-200 hover:bg-gray-50",
          children: t.goToLogin
        }
      )
    ] })
  ] });
}
function Xr(s, d, l, y) {
  const { getMe: g } = ge(s, d), [u, p] = k({
    user: null,
    isLoading: !0,
    error: null
  });
  return me(() => {
    if (!l || !y) {
      p({
        user: null,
        isLoading: !1,
        error: "Missing authentication credentials"
      });
      return;
    }
    (async () => {
      p((m) => ({ ...m, isLoading: !0, error: null }));
      try {
        const m = await g(y, l);
        if (m.success) {
          const L = m.user ? { ...m.user, ...Object.fromEntries(Object.entries(m).filter(([o]) => o !== "user" && o !== "success")) } : m;
          p({
            user: L,
            isLoading: !1,
            error: null
          });
        } else
          p({
            user: null,
            isLoading: !1,
            error: m.message || "Failed to load profile"
          });
      } catch (m) {
        console.error("Failed to fetch user profile:", m), p({
          user: null,
          isLoading: !1,
          error: m.message || "Connection error"
        });
      }
    })();
  }, [l, y, s, d]), u;
}
function Gr(s) {
  return mr({ attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }] })(s);
}
const ir = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
  "#06b6d4",
  "#84cc16",
  "#f97316",
  "#6366f1"
];
function is({
  apps: s = [],
  user: d = {},
  customLabels: l = {},
  backgroundColor: y = "#ffffff",
  primaryColor: g = "#3b82f6",
  apiBaseUrl: u,
  apiToken: p,
  onAppClick: b,
  lang: m = "en",
  texts: L = {}
}) {
  const [o, j] = k(!1), n = Re(null), t = { ...le[m], ...L }, { primaryColor: c, backgroundColor: P, isLoading: f } = xe(u, p, d, g, y);
  if (me(() => {
    const i = (S) => {
      n.current && !n.current.contains(S.target) && j(!1);
    };
    return o && document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, [o]), f) return null;
  const N = (i) => i ? i.charAt(0).toUpperCase() : "?", h = (i) => {
    let S = 0;
    for (let M = 0; M < i.length; M++)
      S = i.charCodeAt(M) + ((S << 5) - S);
    return ir[Math.abs(S) % ir.length];
  }, T = (i) => {
    b && b(i), j(!1), i.publicUrl && window.open(i.publicUrl, "_blank");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "relative inline-block text-left", ref: n, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => j(!o),
        className: "flex items-center justify-center p-2 rounded-full transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2",
        style: {
          color: c,
          borderColor: c
        },
        "aria-label": "App Grid",
        children: /* @__PURE__ */ e.jsx(
          Gr,
          {
            className: "w-6 h-6",
            style: {
              color: c,
              stroke: c,
              fill: "none"
            }
          }
        )
      }
    ),
    o && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "absolute right-0 mt-3 w-80 origin-top-right rounded-[2rem] bg-gray-100/90 backdrop-blur-md p-2 shadow-2xl border border-gray-200/50 z-50 transform transition-all duration-300 ease-out",
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "rounded-[1.5rem] p-4 shadow-sm",
            style: { backgroundColor: P },
            children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
              s.map((i) => /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => T(i),
                  className: "group relative flex flex-col items-center p-2 rounded-2xl hover:bg-gray-50 transition-all duration-200",
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm text-white text-2xl font-bold mb-2 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300",
                        style: { backgroundColor: h(i.appKey) },
                        children: N(i.appKey)
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-gray-700 uppercase tracking-wider text-center truncate w-full px-1", children: l[i.appKey] ? l[i.appKey] : i.appKey.replace(/_/g, " ").length > 9 ? `${i.appKey.replace(/_/g, " ").substring(0, 9)}...` : i.appKey.replace(/_/g, " ") }),
                    /* @__PURE__ */ e.jsxs("div", { className: "absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[60] shadow-xl", children: [
                      i.appName,
                      /* @__PURE__ */ e.jsx("div", { className: "absolute -top-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-b-4 border-b-gray-900" })
                    ] })
                  ]
                },
                i.appKey
              )),
              s.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "col-span-3 py-12 text-center text-gray-400 text-sm", children: t.noApps })
            ] })
          }
        )
      }
    )
  ] });
}
function Jr(s) {
  if (!s || typeof s != "string") return !1;
  try {
    const d = new URL(s);
    return d.protocol === "http:" || d.protocol === "https:";
  } catch {
    return !1;
  }
}
function xr(s) {
  if (!s) return null;
  const d = [
    s.profileImageURL,
    s.profile_image_url,
    s.profile_image,
    s.profileImage,
    s.avatar,
    s.avatarUrl,
    s.avatar_url
  ];
  for (const l of d)
    if (Jr(l))
      return l;
  return null;
}
function ls({
  user: s = {},
  backgroundColor: d = "#ffffff",
  primaryColor: l = "#3b82f6",
  onLogout: y,
  onChangePassword: g,
  onProfileClick: u,
  // Added onProfileClick
  extraItems: p = [],
  // Array of { icon: ReactNode, label: string, onClick: function }
  lang: b = "en",
  apiBaseUrl: m,
  apiToken: L,
  texts: o = {}
}) {
  var M;
  const [j, n] = k(!1), t = Re(null), c = { ...le[b], ...o }, { primaryColor: P, backgroundColor: f, isLoading: N } = xe(m, L, s, l, d);
  if (me(() => {
    const C = (q) => {
      t.current && !t.current.contains(q.target) && n(!1);
    };
    return j && document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [j]), N) return null;
  const h = xr(s), T = () => {
    const C = s["Full Name"] || s.fullName || s.full_name || s.firstName || s.first_name;
    return C ? C.trim().charAt(0).toUpperCase() : s.email ? s.email.charAt(0).toUpperCase() : "U";
  }, i = s["Full Name"] || s.fullName || s.full_name || s.firstName || s.first_name || ((M = s.email) == null ? void 0 : M.split("@")[0]) || "User", S = ({ icon: C, label: q, onClick: V, className: Y = "", color: z = "text-gray-600" }) => /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: () => {
        n(!1), V && V();
      },
      className: `w-full flex items-center gap-3 px-3 py-2 text-sm rounded-xl hover:bg-gray-50 transition-colors group ${z} ${Y}`,
      children: [
        C && /* @__PURE__ */ e.jsx(C, { className: "w-4 h-4 transition-transform group-hover:scale-110" }),
        /* @__PURE__ */ e.jsx("span", { className: "flex-1 text-left", children: q })
      ]
    }
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "relative inline-block text-left", ref: t, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => n(!j),
        className: "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden",
        style: {
          borderColor: P,
          backgroundColor: f,
          color: P
        },
        children: [
          h ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: h,
              alt: i,
              className: "w-full h-full object-cover",
              onError: (C) => {
                C.target.style.display = "none", C.target.nextSibling.style.display = "block";
              }
            }
          ) : null,
          /* @__PURE__ */ e.jsx("span", { className: `${h ? "hidden" : "block"} text-sm font-bold`, children: T() })
        ]
      }
    ),
    j && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "absolute right-0 mt-3 w-56 origin-top-right rounded-2xl bg-gray-100/90 backdrop-blur-md p-2 shadow-2xl border border-gray-200/50 z-50 transform transition-all duration-300 ease-out",
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "rounded-[1.5rem] bg-white p-2 shadow-sm",
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "px-3 py-2 border-b border-gray-50 mb-1", children: [
                /* @__PURE__ */ e.jsx("p", { className: "text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1", children: "Account" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-sm font-bold text-gray-700 truncate mb-0.5", children: i }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] font-medium text-gray-400 truncate", children: s.email })
              ] }),
              /* @__PURE__ */ e.jsx(
                S,
                {
                  icon: cr,
                  label: c.profile,
                  onClick: u
                }
              ),
              /* @__PURE__ */ e.jsx(
                S,
                {
                  icon: Vr,
                  label: c.changePassword,
                  onClick: g
                }
              ),
              p.map((C, q) => /* @__PURE__ */ e.jsx(
                S,
                {
                  icon: C.icon,
                  label: C.label,
                  onClick: C.onClick
                },
                `extra-${q}`
              )),
              p.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "my-1 border-t border-gray-50" }),
              /* @__PURE__ */ e.jsx(
                S,
                {
                  icon: dr,
                  label: c.logoutThisSession,
                  onClick: y,
                  color: "text-red-500",
                  className: "hover:bg-red-50"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
function cs({
  apiBaseUrl: s,
  apiToken: d,
  authToken: l,
  userEmail: y,
  primaryColor: g = "#3b82f6",
  backgroundColor: u = "#ffffff",
  onClose: p,
  onNavigate: b,
  onError: m,
  onSuccess: L,
  lang: o = "en",
  texts: j = {}
}) {
  const n = { ...le[o], ...j }, { user: t, isLoading: c, error: P } = Xr(s, d, l, y), { primaryColor: f, backgroundColor: N, isLoading: h } = xe(s, d, t, g, u), { post: T } = ge(s, d), [i, S] = k([]), [M, C] = k(!1), [q, V] = k(""), [Y, z] = k(""), [G, F] = k(!1);
  me(() => {
    t != null && t.active_sessions ? S(t.active_sessions) : t != null && t.sessions && S(t.sessions);
  }, [t]);
  const v = (I) => I ? I.includes("Mozilla/") ? I.includes("iPhone") ? "iPhone" : I.includes("Android") ? "Android Device" : I.includes("Windows") ? "Windows PC" : I.includes("Macintosh") ? "Mac" : I.includes("iPad") ? "iPad" : "Web Browser" : I : n.deviceName, D = (I) => {
    if (!I) return /* @__PURE__ */ e.jsx(tr, { className: "w-5 h-5" });
    const se = I.toLowerCase();
    return se.includes("iphone") || se.includes("android") ? /* @__PURE__ */ e.jsx(Wr, { className: "w-5 h-5" }) : se.includes("ipad") || se.includes("tablet") ? /* @__PURE__ */ e.jsx(Ur, { className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(tr, { className: "w-5 h-5" });
  };
  if (c || h)
    return /* @__PURE__ */ e.jsx("div", { className: "w-full max-w-4xl mx-auto p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx(Ze, { className: "w-16 h-16 animate-spin", style: { color: g } }),
        /* @__PURE__ */ e.jsx(er, { className: "w-6 h-6 absolute top-0 right-0 animate-pulse", style: { color: g } })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg font-semibold text-gray-600 animate-pulse", children: n.loadingProfile })
    ] }) });
  if (P || !t)
    return /* @__PURE__ */ e.jsx("div", { className: "w-full max-w-4xl mx-auto p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 space-y-4", children: [
      /* @__PURE__ */ e.jsx(lr, { className: "w-16 h-16 text-red-500" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg font-semibold text-red-600", children: P || n.failedLoadProfile }),
      p && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: p,
          className: "mt-4 px-6 py-2 rounded-xl font-semibold text-white transition-all hover:brightness-110",
          style: { backgroundColor: g },
          children: n.close
        }
      )
    ] }) });
  const O = t["Full Name"] || t.fullName || t.full_name || `${t.firstName || ""} ${t.lastName || ""}`.trim() || "User", w = t.Roles || [], R = t.permissions || [], X = t.biography || t.bio || "", de = xr(t), ue = () => O.charAt(0).toUpperCase(), ie = async (I = !1, se = []) => {
    if (!l) {
      const ee = n.noSessions;
      V(ee);
      return;
    }
    C(!0), V(""), z("");
    try {
      const ee = await T("/logout_sessions", {
        email: t.email || y || "",
        all_sessions: I,
        session_ids: se
      }, { token: l });
      if (ee.success)
        S(I ? [] : (re) => re.filter((pe) => !se.includes(pe._id))), z(n.logoutSuccess), L && L(ee);
      else {
        const re = ee.message || ee.error || "Logout failed";
        V(re), m && m(re);
      }
    } catch (ee) {
      console.error("⚠️ Logout Sessions Error:", ee), V(n.connectionError);
    } finally {
      C(!1);
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-5xl mx-auto", children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "relative rounded-t-[2.5rem] p-8 md:p-12 overflow-hidden",
        style: {
          background: `linear-gradient(135deg, ${f}15 0%, ${f}05 100%)`
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-64 h-64 opacity-10 blur-3xl rounded-full",
              style: { backgroundColor: f }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 w-48 h-48 opacity-10 blur-3xl rounded-full",
              style: { backgroundColor: f }
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "relative flex flex-col md:flex-row items-center md:items-start gap-6", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative group", children: [
              de && !G ? /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: de,
                  alt: O,
                  className: "w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-2xl ring-4 ring-white transition-transform group-hover:scale-105",
                  onError: () => F(!0)
                }
              ) }) : /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center text-5xl md:text-6xl font-black shadow-2xl ring-4 ring-white transition-transform group-hover:scale-105",
                  style: {
                    background: `linear-gradient(135deg, ${f}30 0%, ${f}10 100%)`,
                    color: f
                  },
                  children: ue()
                }
              ),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg",
                  style: { backgroundColor: f },
                  children: /* @__PURE__ */ e.jsx(er, { className: "w-6 h-6 text-white" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-1 text-center md:text-left space-y-3", children: [
              /* @__PURE__ */ e.jsx("h1", { className: "text-4xl md:text-5xl font-black text-gray-900 tracking-tight", children: O }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center md:justify-start gap-2 text-gray-600", children: [
                /* @__PURE__ */ e.jsx(zr, { className: "w-5 h-5" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-lg font-medium", children: t.email || y })
              ] }),
              X && /* @__PURE__ */ e.jsxs("p", { className: "text-gray-600 max-w-2xl leading-relaxed italic", children: [
                '"',
                X,
                '"'
              ] }),
              w.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-2 justify-center md:justify-start pt-2", children: w.map((I, se) => /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover:scale-105 hover:shadow-md",
                  style: {
                    backgroundColor: `${f}20`,
                    color: f,
                    border: `2px solid ${f}40`
                  },
                  children: I.replace(/_/g, " ")
                },
                se
              )) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "rounded-b-[2.5rem] shadow-2xl border-x border-b border-gray-100 p-8 md:p-12",
        style: { backgroundColor: N },
        children: [
          /* @__PURE__ */ e.jsx(ye, { message: q }),
          /* @__PURE__ */ e.jsx(Ae, { message: Y }),
          /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b-2", style: { borderColor: `${f}20` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl", style: { backgroundColor: `${f}15` }, children: /* @__PURE__ */ e.jsx(cr, { className: "w-6 h-6", style: { color: f } }) }),
                  /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-black text-gray-800 uppercase tracking-wide", children: n.personalInfo })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 pl-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "group", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "text-xs uppercase font-bold text-gray-400 tracking-widest mb-1.5", children: n.fullNameLabel }),
                    /* @__PURE__ */ e.jsx("p", { className: "text-base font-bold text-gray-800 group-hover:text-gray-900 transition-colors", children: O })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "group", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "text-xs uppercase font-bold text-gray-400 tracking-widest mb-1.5", children: n.email }),
                    /* @__PURE__ */ e.jsx("p", { className: "text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors", children: t.email || y })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b-2", style: { borderColor: `${f}20` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl", style: { backgroundColor: `${f}15` }, children: /* @__PURE__ */ e.jsx(rr, { className: "w-6 h-6", style: { color: f } }) }),
                  /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-black text-gray-800 uppercase tracking-wide", children: n.permissionsLabel })
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar", children: R.length > 0 ? R.map((I, se) => {
                  var ee, re;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      className: "p-4 rounded-2xl border-2 flex flex-col gap-2 hover:shadow-lg transition-all group",
                      style: {
                        backgroundColor: `${f}05`,
                        borderColor: `${f}20`
                      },
                      children: [
                        /* @__PURE__ */ e.jsx("p", { className: "text-xs font-bold uppercase tracking-wider", style: { color: f }, children: ((ee = I["Permission ID"]) == null ? void 0 : ee.split(".")[0]) || "App" }),
                        /* @__PURE__ */ e.jsx("p", { className: "text-sm font-bold text-gray-800", children: ((re = I["Permission ID"]) == null ? void 0 : re.split(".").slice(1).join(" ")) || I["Permission ID"] }),
                        /* @__PURE__ */ e.jsx(
                          "span",
                          {
                            className: "mt-1 w-fit px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-widest",
                            style: { backgroundColor: f, color: "white" },
                            children: I["Action Key"]
                          }
                        )
                      ]
                    },
                    se
                  );
                }) : /* @__PURE__ */ e.jsxs("div", { className: "py-8 text-center", children: [
                  /* @__PURE__ */ e.jsx(rr, { className: "w-12 h-12 mx-auto mb-3 text-gray-300" }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-400 italic", children: n.noPermissions })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b-2", style: { borderColor: `${f}20` }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl", style: { backgroundColor: `${f}15` }, children: /* @__PURE__ */ e.jsx(sr, { className: "w-6 h-6", style: { color: f } }) }),
                /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-black text-gray-800 uppercase tracking-wide", children: n.activeSessions })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar", children: i.length > 0 ? i.map((I) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "p-4 border-2 rounded-2xl flex justify-between items-center group hover:shadow-lg transition-all",
                  style: {
                    backgroundColor: `${f}05`,
                    borderColor: `${f}15`
                  },
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 flex-1", children: [
                      /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl", style: { backgroundColor: `${f}10`, color: f }, children: D(I["Device Name"]) }),
                      /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 flex-1", children: [
                        /* @__PURE__ */ e.jsx("div", { className: "font-black text-gray-800 text-sm", title: I["Device Name"], children: v(I["Device Name"]) }),
                        /* @__PURE__ */ e.jsxs("div", { className: "text-xs text-gray-600 font-semibold flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "w-2 h-2 rounded-full bg-green-500" }),
                          I.IP
                        ] }),
                        I["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "text-xs text-gray-500 italic", children: [
                          n.expiry,
                          ": ",
                          new Date(I["Expiration Date"]).toLocaleDateString()
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => ie(!1, [I._id]),
                        disabled: M,
                        className: "p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110",
                        title: n.logoutThisSession,
                        children: /* @__PURE__ */ e.jsx(dr, { className: "w-5 h-5" })
                      }
                    )
                  ]
                },
                I._id
              )) : /* @__PURE__ */ e.jsxs("div", { className: "py-12 text-center", children: [
                /* @__PURE__ */ e.jsx(sr, { className: "w-12 h-12 mx-auto mb-3 text-gray-300" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-400 italic", children: n.noSessions })
              ] }) }),
              i.length > 1 && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => ie(!0),
                  disabled: M,
                  className: "w-full py-3 text-sm uppercase tracking-widest font-extrabold text-white rounded-2xl transition-all active:scale-95 hover:brightness-110 shadow-lg",
                  style: { backgroundColor: "#ef4444" },
                  children: M ? /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                    /* @__PURE__ */ e.jsx(Ze, { className: "w-4 h-4 animate-spin" }),
                    n.loggingOut
                  ] }) : n.logoutAllSessions
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "mt-12 flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t-2", style: { borderColor: `${f}10` }, children: [
            p && /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: p,
                className: "px-10 py-4 rounded-2xl font-bold text-base transition-all border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 active:scale-95 shadow-md hover:shadow-lg",
                children: n.closeProfile
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => b && b("change-password"),
                className: "px-10 py-4 rounded-2xl font-bold text-base text-white shadow-lg transition-all active:scale-95 hover:brightness-110 hover:shadow-xl",
                style: { backgroundColor: f },
                children: n.changePassword
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  is as AppGrid,
  je as AuthError,
  os as ChangePassword,
  ns as EmailVerification,
  ss as ForgotPassword,
  es as Login,
  ts as ResetPassword,
  rs as SignUp,
  gr as SocialAuthButtons,
  ls as UserMenu,
  cs as UserProfile,
  as as WaitingConfirmation,
  xr as getValidProfileImageUrl,
  Jr as isValidUrl,
  le as translations,
  ge as useAuthApi,
  ve as useSecurity,
  Xr as useUserProfile
};
