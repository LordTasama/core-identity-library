import pe, { useEffect as fe, useState as C, useRef as Re } from "react";
import { AlertTriangle as Dr, AlertCircle as lr, CheckCircle as Fr, KeyRound as $r, LogOut as cr, Loader2 as Qe, Sparkles as er, Mail as Vr, User as zr, Key as rr, Settings as sr, Monitor as tr, Smartphone as Wr, Tablet as Ur } from "lucide-react";
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
  var s = pe, u = Symbol.for("react.element"), a = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, x = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(b, d, k) {
    var t, j = {}, o = null, i = null;
    k !== void 0 && (o = "" + k), d.key !== void 0 && (o = "" + d.key), d.ref !== void 0 && (i = d.ref);
    for (t in d) y.call(d, t) && !l.hasOwnProperty(t) && (j[t] = d[t]);
    if (b && b.defaultProps) for (t in d = b.defaultProps, d) j[t] === void 0 && (j[t] = d[t]);
    return { $$typeof: u, type: b, key: o, ref: i, props: j, _owner: x.current };
  }
  return Se.Fragment = a, Se.jsx = h, Se.jsxs = h, Se;
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
function qr() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var s = pe, u = Symbol.for("react.element"), a = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), b = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), t = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), o = Symbol.for("react.lazy"), i = Symbol.for("react.offscreen"), c = Symbol.iterator, P = "@@iterator";
    function f(r) {
      if (r === null || typeof r != "object")
        return null;
      var n = c && r[c] || r[P];
      return typeof n == "function" ? n : null;
    }
    var m = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(r) {
      {
        for (var n = arguments.length, g = new Array(n > 1 ? n - 1 : 0), S = 1; S < n; S++)
          g[S - 1] = arguments[S];
        I("error", r, g);
      }
    }
    function I(r, n, g) {
      {
        var S = m.ReactDebugCurrentFrame, U = S.getStackAddendum();
        U !== "" && (n += "%s", g = g.concat([U]));
        var q = g.map(function(D) {
          return String(D);
        });
        q.unshift("Warning: " + n), Function.prototype.apply.call(console[r], console, q);
      }
    }
    var w = !1, F = !1, L = !1, R = !1, K = !1, $;
    $ = Symbol.for("react.module.reference");
    function H(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === y || r === l || K || r === x || r === k || r === t || R || r === i || w || F || L || typeof r == "object" && r !== null && (r.$$typeof === o || r.$$typeof === j || r.$$typeof === h || r.$$typeof === b || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === $ || r.getModuleId !== void 0));
    }
    function N(r, n, g) {
      var S = r.displayName;
      if (S)
        return S;
      var U = n.displayName || n.name || "";
      return U !== "" ? g + "(" + U + ")" : g;
    }
    function _(r) {
      return r.displayName || "Context";
    }
    function v(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case y:
          return "Fragment";
        case a:
          return "Portal";
        case l:
          return "Profiler";
        case x:
          return "StrictMode";
        case k:
          return "Suspense";
        case t:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case b:
            var n = r;
            return _(n) + ".Consumer";
          case h:
            var g = r;
            return _(g._context) + ".Provider";
          case d:
            return N(r, r.render, "ForwardRef");
          case j:
            var S = r.displayName || null;
            return S !== null ? S : v(r.type) || "Memo";
          case o: {
            var U = r, q = U._payload, D = U._init;
            try {
              return v(D(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, oe = 0, ne, z, W, B, ce, de, ie;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function Q() {
      {
        if (oe === 0) {
          ne = console.log, z = console.info, W = console.warn, B = console.error, ce = console.group, de = console.groupCollapsed, ie = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: O,
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
        oe++;
      }
    }
    function ee() {
      {
        if (oe--, oe === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, r, {
              value: ne
            }),
            info: A({}, r, {
              value: z
            }),
            warn: A({}, r, {
              value: W
            }),
            error: A({}, r, {
              value: B
            }),
            group: A({}, r, {
              value: ce
            }),
            groupCollapsed: A({}, r, {
              value: de
            }),
            groupEnd: A({}, r, {
              value: ie
            })
          });
        }
        oe < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = m.ReactCurrentDispatcher, he;
    function Y(r, n, g) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (U) {
            var S = U.stack.trim().match(/\n( *(at )?)/);
            he = S && S[1] || "";
          }
        return `
` + he + r;
      }
    }
    var X = !1, re;
    {
      var Pe = typeof WeakMap == "function" ? WeakMap : Map;
      re = new Pe();
    }
    function ke(r, n) {
      if (!r || X)
        return "";
      {
        var g = re.get(r);
        if (g !== void 0)
          return g;
      }
      var S;
      X = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = Z.current, Z.current = null, Q();
      try {
        if (n) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (ae) {
              S = ae;
            }
            Reflect.construct(r, [], D);
          } else {
            try {
              D.call();
            } catch (ae) {
              S = ae;
            }
            r.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            S = ae;
          }
          r();
        }
      } catch (ae) {
        if (ae && S && typeof ae.stack == "string") {
          for (var T = ae.stack.split(`
`), te = S.stack.split(`
`), G = T.length - 1, J = te.length - 1; G >= 1 && J >= 0 && T[G] !== te[J]; )
            J--;
          for (; G >= 1 && J >= 0; G--, J--)
            if (T[G] !== te[J]) {
              if (G !== 1 || J !== 1)
                do
                  if (G--, J--, J < 0 || T[G] !== te[J]) {
                    var le = `
` + T[G].replace(" at new ", " at ");
                    return r.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", r.displayName)), typeof r == "function" && re.set(r, le), le;
                  }
                while (G >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        X = !1, Z.current = q, ee(), Error.prepareStackTrace = U;
      }
      var Ce = r ? r.displayName || r.name : "", we = Ce ? Y(Ce) : "";
      return typeof r == "function" && re.set(r, we), we;
    }
    function Me(r, n, g) {
      return ke(r, !1);
    }
    function M(r) {
      var n = r.prototype;
      return !!(n && n.isReactComponent);
    }
    function E(r, n, g) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return ke(r, M(r));
      if (typeof r == "string")
        return Y(r);
      switch (r) {
        case k:
          return Y("Suspense");
        case t:
          return Y("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return Me(r.render);
          case j:
            return E(r.type, n, g);
          case o: {
            var S = r, U = S._payload, q = S._init;
            try {
              return E(q(U), n, g);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, se = {}, _e = m.ReactDebugCurrentFrame;
    function Le(r) {
      if (r) {
        var n = r._owner, g = E(r.type, r._source, n ? n.type : null);
        _e.setExtraStackFrame(g);
      } else
        _e.setExtraStackFrame(null);
    }
    function xr(r, n, g, S, U) {
      {
        var q = Function.call.bind(V);
        for (var D in r)
          if (q(r, D)) {
            var T = void 0;
            try {
              if (typeof r[D] != "function") {
                var te = Error((S || "React class") + ": " + g + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw te.name = "Invariant Violation", te;
              }
              T = r[D](n, D, S, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              T = G;
            }
            T && !(T instanceof Error) && (Le(U), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", g, D, typeof T), Le(null)), T instanceof Error && !(T.message in se) && (se[T.message] = !0, Le(U), p("Failed %s type: %s", g, T.message), Le(null));
          }
      }
    }
    var hr = Array.isArray;
    function Oe(r) {
      return hr(r);
    }
    function pr(r) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, g = n && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return g;
      }
    }
    function yr(r) {
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
      if (yr(r))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(r)), ze(r);
    }
    var Ue = m.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, qe;
    function vr(r) {
      if (V.call(r, "ref")) {
        var n = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function wr(r) {
      if (V.call(r, "key")) {
        var n = Object.getOwnPropertyDescriptor(r, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function jr(r, n) {
      typeof r.ref == "string" && Ue.current;
    }
    function Nr(r, n) {
      {
        var g = function() {
          Ye || (Ye = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        g.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function Cr(r, n) {
      {
        var g = function() {
          qe || (qe = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        g.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var kr = function(r, n, g, S, U, q, D) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: r,
        key: n,
        ref: g,
        props: D,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(T, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function Sr(r, n, g, S, U) {
      {
        var q, D = {}, T = null, te = null;
        g !== void 0 && (We(g), T = "" + g), wr(n) && (We(n.key), T = "" + n.key), vr(n) && (te = n.ref, jr(n, U));
        for (q in n)
          V.call(n, q) && !br.hasOwnProperty(q) && (D[q] = n[q]);
        if (r && r.defaultProps) {
          var G = r.defaultProps;
          for (q in G)
            D[q] === void 0 && (D[q] = G[q]);
        }
        if (T || te) {
          var J = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          T && Nr(D, J), te && Cr(D, J);
        }
        return kr(r, T, te, U, S, Ue.current, D);
      }
    }
    var Ie = m.ReactCurrentOwner, He = m.ReactDebugCurrentFrame;
    function Ne(r) {
      if (r) {
        var n = r._owner, g = E(r.type, r._source, n ? n.type : null);
        He.setExtraStackFrame(g);
      } else
        He.setExtraStackFrame(null);
    }
    var Te;
    Te = !1;
    function De(r) {
      return typeof r == "object" && r !== null && r.$$typeof === u;
    }
    function Be() {
      {
        if (Ie.current) {
          var r = v(Ie.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Er(r) {
      return "";
    }
    var Ke = {};
    function Pr(r) {
      {
        var n = Be();
        if (!n) {
          var g = typeof r == "string" ? r : r.displayName || r.name;
          g && (n = `

Check the top-level render call using <` + g + ">.");
        }
        return n;
      }
    }
    function Xe(r, n) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var g = Pr(n);
        if (Ke[g])
          return;
        Ke[g] = !0;
        var S = "";
        r && r._owner && r._owner !== Ie.current && (S = " It was passed a child from " + v(r._owner.type) + "."), Ne(r), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, S), Ne(null);
      }
    }
    function Ge(r, n) {
      {
        if (typeof r != "object")
          return;
        if (Oe(r))
          for (var g = 0; g < r.length; g++) {
            var S = r[g];
            De(S) && Xe(S, n);
          }
        else if (De(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var U = f(r);
          if (typeof U == "function" && U !== r.entries)
            for (var q = U.call(r), D; !(D = q.next()).done; )
              De(D.value) && Xe(D.value, n);
        }
      }
    }
    function _r(r) {
      {
        var n = r.type;
        if (n == null || typeof n == "string")
          return;
        var g;
        if (typeof n == "function")
          g = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === j))
          g = n.propTypes;
        else
          return;
        if (g) {
          var S = v(n);
          xr(g, r.props, "prop", S, r);
        } else if (n.PropTypes !== void 0 && !Te) {
          Te = !0;
          var U = v(n);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(r) {
      {
        for (var n = Object.keys(r.props), g = 0; g < n.length; g++) {
          var S = n[g];
          if (S !== "children" && S !== "key") {
            Ne(r), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Ne(null);
            break;
          }
        }
        r.ref !== null && (Ne(r), p("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    var Je = {};
    function Ze(r, n, g, S, U, q) {
      {
        var D = H(r);
        if (!D) {
          var T = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var te = Er();
          te ? T += te : T += Be();
          var G;
          r === null ? G = "null" : Oe(r) ? G = "array" : r !== void 0 && r.$$typeof === u ? (G = "<" + (v(r.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : G = typeof r, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, T);
        }
        var J = Sr(r, n, g, U, q);
        if (J == null)
          return J;
        if (D) {
          var le = n.children;
          if (le !== void 0)
            if (S)
              if (Oe(le)) {
                for (var Ce = 0; Ce < le.length; Ce++)
                  Ge(le[Ce], r);
                Object.freeze && Object.freeze(le);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(le, r);
        }
        if (V.call(n, "key")) {
          var we = v(r), ae = Object.keys(n).filter(function(Tr) {
            return Tr !== "key";
          }), Fe = ae.length > 0 ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Je[we + Fe]) {
            var Ir = ae.length > 0 ? "{" + ae.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Fe, we, Ir, we), Je[we + Fe] = !0;
          }
        }
        return r === y ? Lr(J) : _r(J), J;
      }
    }
    function Rr(r, n, g) {
      return Ze(r, n, g, !0);
    }
    function Ar(r, n, g) {
      return Ze(r, n, g, !1);
    }
    var Mr = Ar, Or = Rr;
    Ee.Fragment = y, Ee.jsx = Mr, Ee.jsxs = Or;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Ve.exports = Yr() : Ve.exports = qr();
var e = Ve.exports, dr = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ar = pe.createContext && pe.createContext(dr), ve = function() {
  return ve = Object.assign || function(s) {
    for (var u, a = 1, y = arguments.length; a < y; a++) {
      u = arguments[a];
      for (var x in u) Object.prototype.hasOwnProperty.call(u, x) && (s[x] = u[x]);
    }
    return s;
  }, ve.apply(this, arguments);
}, Hr = function(s, u) {
  var a = {};
  for (var y in s) Object.prototype.hasOwnProperty.call(s, y) && u.indexOf(y) < 0 && (a[y] = s[y]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var x = 0, y = Object.getOwnPropertySymbols(s); x < y.length; x++)
    u.indexOf(y[x]) < 0 && Object.prototype.propertyIsEnumerable.call(s, y[x]) && (a[y[x]] = s[y[x]]);
  return a;
};
function ur(s) {
  return s && s.map(function(u, a) {
    return pe.createElement(u.tag, ve({
      key: a
    }, u.attr), ur(u.child));
  });
}
function fr(s) {
  return function(u) {
    return pe.createElement(Br, ve({
      attr: ve({}, s.attr)
    }, u), ur(s.child));
  };
}
function Br(s) {
  var u = function(a) {
    var y = s.attr, x = s.size, l = s.title, h = Hr(s, ["attr", "size", "title"]), b = x || a.size || "1em", d;
    return a.className && (d = a.className), s.className && (d = (d ? d + " " : "") + s.className), pe.createElement("svg", ve({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, y, h, {
      className: d,
      style: ve(ve({
        color: s.color || a.color
      }, a.style), s.style),
      height: b,
      width: b,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && pe.createElement("title", null, l), s.children);
  };
  return ar !== void 0 ? pe.createElement(ar.Consumer, null, function(a) {
    return u(a);
  }) : u(dr);
}
function Kr(s) {
  return fr({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "title", attr: {}, child: [] }, { tag: "path", attr: { d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" } }] })(s);
}
const ge = {
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
    unknownError: "An unexpected error occurred."
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
    unknownError: "Ocurrió un error inesperado."
  }
};
function be(s) {
  const u = !!s && s.length > 0;
  return u || console.warn("⚠️ Core Identity Library: Falta el token de autorización (apiToken) en las props del componente."), { isAuthorized: u, apiToken: s };
}
function me(s, u) {
  const { isAuthorized: a } = be(u), y = async (o, i = {}) => {
    try {
      const c = await fetch(`${s}${o}`, {
        ...i,
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": u,
          ...i.headers
        },
        credentials: "include"
      });
      let P;
      const f = c.headers.get("content-type");
      if (f && f.includes("application/json"))
        try {
          P = await c.json();
        } catch (m) {
          console.error("Failed to parse JSON response", m), P = { message: await c.text() };
        }
      else
        P = { message: await c.text() };
      if (!c.ok) {
        const m = new Error(P.message || P.error || `Error ${c.status}`);
        throw m.status = c.status, m.data = P, m;
      }
      return P;
    } catch (c) {
      if (c.name === "TypeError" && (c.message.includes("Failed to fetch") || c.message.includes("NetworkError"))) {
        const P = new Error("Connection Error");
        throw P.isConnectionError = !0, P;
      }
      throw c;
    }
  }, x = async (o, i) => y(o, {
    method: "POST",
    body: i ? JSON.stringify(i) : void 0
  }), l = async (o) => y(o, {
    method: "GET"
  });
  return {
    post: x,
    get: l,
    verifySession: async (o, i) => x("/verify-session", { token: o, email: i }),
    getUserContext: async (o, i) => x("/user-context", { token: o, email: i }),
    logout: async (o, i) => x("/logout", { token: o, email: i }),
    changePassword: async (o) => x("/change-password", o),
    getAppColors: async () => l("/colors-app"),
    getMe: async (o, i) => l(`/me?email=${encodeURIComponent(o)}&token=${encodeURIComponent(i)}`)
  };
}
function mr({
  apiBaseUrl: s,
  user: u = {},
  primaryColor: a = "#3b82f6",
  onSuccess: y,
  onError: x,
  lang: l = "en",
  apiToken: h,
  texts: b = {}
}) {
  var c;
  const { isAuthorized: d } = be(h), k = { ...ge[l], ...b }, { post: t } = me(s, h), j = ((c = u.app_info) == null ? void 0 : c.primaryColor) || a;
  fe(() => {
    const P = (f) => {
      if (f.origin === window.location.origin && f.data.type === "OAUTH_SUCCESS") {
        const { token: m, user: p } = f.data.payload;
        console.log("OAuth Login Successful:", p), y && y({
          success: !0,
          token: m,
          user: p,
          email: p == null ? void 0 : p.email,
          // Ensure compatibility with existing success handlers
          provider: "Social"
        });
      }
    };
    return window.addEventListener("message", P, !1), () => window.removeEventListener("message", P);
  }, [y]);
  const o = (P) => {
    t("/login", { provider: P }).then((f) => {
      const m = f.auth_url || f.redirect_url;
      if (m) {
        const w = window.screen.width / 2 - 300, F = window.screen.height / 2 - 700 / 2;
        window.open(
          m,
          "login_popup",
          `width=600,height=700,left=${w},top=${F},status=no,resizable=yes,scrollbars=yes`
        );
      } else {
        const p = f.error || f.message || (l === "es" ? "Error al iniciar sesión social" : "Social login error");
        x && x(p);
      }
    }).catch((f) => {
      console.error("⚠️ Social Auth Error:", f), x && x(f.message || "Error");
    });
  }, i = j ? { borderColor: j, color: j } : {};
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        className: "w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors",
        style: i,
        onClick: () => o("Google"),
        "data-testid": "button-google-login",
        children: [
          /* @__PURE__ */ e.jsx(Kr, { className: "h-4 w-4" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            k.continueWith,
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
        style: i,
        onClick: () => o("Microsoft"),
        "data-testid": "button-microsoft-login",
        children: [
          /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" }) }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            k.continueWith,
            " Microsoft"
          ] })
        ]
      }
    )
  ] });
}
let ue = null, $e = null;
function xe(s, u, a, y, x) {
  var d, k, t, j;
  const { getAppColors: l } = me(s, u), [h, b] = C({
    primaryColor: ((d = a == null ? void 0 : a.app_info) == null ? void 0 : d.primaryColor) || ((k = a == null ? void 0 : a.app_info) == null ? void 0 : k.primary_color) || (ue == null ? void 0 : ue.primaryColor) || y,
    backgroundColor: ((t = a == null ? void 0 : a.app_info) == null ? void 0 : t.backgroundColor) || ((j = a == null ? void 0 : a.app_info) == null ? void 0 : j.background_color) || (ue == null ? void 0 : ue.backgroundColor) || x,
    isLoading: !ue && !(a != null && a.app_info) && !!(s && u)
  });
  return fe(() => {
    if (a != null && a.app_info) {
      const o = a.app_info.primaryColor || a.app_info.primary_color, i = a.app_info.backgroundColor || a.app_info.background_color;
      if ((o || i) && (b((c) => ({
        primaryColor: o || c.primaryColor,
        backgroundColor: i || c.backgroundColor,
        isLoading: !1
      })), o && i))
        return;
    }
    if (ue && !(a != null && a.app_info)) {
      b({
        primaryColor: ue.primaryColor,
        backgroundColor: ue.backgroundColor,
        isLoading: !1
      });
      return;
    }
    s && u ? (async () => {
      $e || ($e = l().catch((P) => (console.error("Failed to fetch app colors:", P), null)));
      const i = await $e, c = {
        primaryColor: (i == null ? void 0 : i.primaryColor) || (i == null ? void 0 : i.primary_color) || y,
        backgroundColor: (i == null ? void 0 : i.backgroundColor) || (i == null ? void 0 : i.background_color) || x
      };
      ue = c, b({ ...c, isLoading: !1 });
    })() : b((o) => ({ ...o, isLoading: !1 }));
  }, [a == null ? void 0 : a.app_info, y, x, s, u]), h;
}
function je() {
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center p-8 bg-red-50 border border-red-200 rounded-lg text-red-800 space-x-4 max-w-md mx-auto my-10", children: [
    /* @__PURE__ */ e.jsx(Dr, { className: "w-8 h-8 flex-shrink-0" }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "font-bold text-lg", children: "Error de Autorización" }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-sm", children: [
        "No se ha encontrado el token de la librería en el archivo ",
        /* @__PURE__ */ e.jsx("code", { children: ".env" }),
        ". Por favor, configura ",
        /* @__PURE__ */ e.jsx("code", { children: "VITE_API_TOKEN" }),
        " para habilitar el uso de los componentes."
      ] })
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
  user: u = {},
  primaryColor: a = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: x,
  onError: l,
  onNavigate: h,
  apiToken: b,
  lang: d = "en",
  texts: k = {}
}) {
  const t = { ...ge[d], ...k }, { isAuthorized: j } = be(b), { primaryColor: o, backgroundColor: i, isLoading: c } = xe(s, b, u, a, y), { post: P } = me(s, b), [f, m] = C(""), [p, I] = C(""), [w, F] = C(!1), [L, R] = C("");
  if (c) return null;
  if (!j)
    return /* @__PURE__ */ e.jsx(je, {});
  const K = async (_) => {
    _.preventDefault(), F(!0), R("");
    try {
      const v = await P("/login", {
        provider: "Email",
        email: f,
        password: p
      });
      if (v.success)
        x && x({ ...v, email: f });
      else {
        const A = v.message || v.error || t.unknownError;
        R(A), l && l(A), F(!1);
      }
    } catch (v) {
      console.error("⚠️ Login Error:", v);
      let A = v.message;
      v.isConnectionError ? A = t.connectionError : v.status >= 500 ? A = t.serverError : (!A || A === "Error " + v.status) && (A = t.unknownError), R(A), l && l(A), F(!1);
    }
  }, $ = {
    backgroundColor: o,
    color: "#ffffff"
  }, H = {
    backgroundColor: i
  }, N = {
    color: o
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: H, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: t.login }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: t.loginSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(
        mr,
        {
          apiBaseUrl: s,
          user: u,
          primaryColor: o,
          onSuccess: x,
          onError: (_) => {
            R(_), l && l(_);
          },
          lang: d,
          apiToken: b,
          texts: k
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "relative py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full border-t border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "px-2 text-gray-500", style: H, children: t.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: K, className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(ye, { message: L }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-email", className: "text-sm font-medium leading-none", children: t.email }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              id: "auth-email",
              type: "email",
              placeholder: "user@example.com",
              className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
              value: f,
              onChange: (_) => {
                m(_.target.value), L && R("");
              },
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-password", className: "text-sm font-medium leading-none", children: t.password }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              id: "auth-password",
              type: "password",
              className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
              value: p,
              onChange: (_) => {
                I(_.target.value), L && R("");
              },
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => h && h("forgot-password"),
            className: "text-sm hover:underline",
            style: N,
            children: t.forgotPassword
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
            style: $,
            disabled: w,
            children: w ? t.loading : t.loginButton
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500", children: [
      t.dontHaveAccount,
      " ",
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => h && h("signup"),
          className: "font-medium hover:underline",
          style: N,
          children: t.signUp
        }
      )
    ] }) })
  ] });
}
function rs({
  apiBaseUrl: s,
  user: u = {},
  primaryColor: a = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: x,
  onError: l,
  onNavigate: h,
  apiToken: b,
  lang: d = "en",
  texts: k = {}
}) {
  const t = { ...ge[d], ...k }, { isAuthorized: j } = be(b), { primaryColor: o, backgroundColor: i, isLoading: c } = xe(s, b, u, a, y), { post: P } = me(s, b), [f, m] = C(!1), [p, I] = C(""), [w, F] = C({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  if (c) return null;
  if (!j)
    return /* @__PURE__ */ e.jsx(je, {});
  const L = async (N) => {
    if (N.preventDefault(), I(""), w.password !== w.confirmPassword) {
      const _ = t.passwordsDontMatch;
      I(_), l && l(_);
      return;
    }
    m(!0);
    try {
      const _ = await P("/register", {
        firstName: w.firstName,
        lastName: w.lastName,
        email: w.email,
        password: w.password
      });
      if (_.success)
        x && x({ ..._, email: w.email });
      else {
        const v = _.message || _.error || t.unknownError;
        I(v), l && l(v), m(!1);
      }
    } catch (_) {
      console.error("⚠️ SignUp Error:", _);
      let v = _.message;
      _.isConnectionError ? v = t.connectionError : _.status >= 500 ? v = t.serverError : (!v || v === "Error " + _.status) && (v = t.unknownError), I(v), l && l(v), m(!1);
    }
  }, R = (N, _) => {
    F((v) => ({ ...v, [N]: _ })), p && I("");
  }, K = {
    backgroundColor: o,
    color: "#ffffff"
  }, $ = {
    backgroundColor: i
  }, H = {
    color: o
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: $, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6 text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: t.createAccount }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: t.createAccountSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(
        mr,
        {
          apiBaseUrl: s,
          user: u,
          primaryColor: o,
          onSuccess: x,
          onError: (N) => {
            I(N), l && l(N);
          },
          lang: d,
          apiToken: b,
          texts: k
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "relative py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full border-t border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "px-2 text-gray-500", style: $, children: t.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: L, className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(ye, { message: p }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: t.firstName }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                value: w.firstName,
                onChange: (N) => R("firstName", N.target.value),
                required: !0,
                className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: t.lastName }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                value: w.lastName,
                onChange: (N) => R("lastName", N.target.value),
                required: !0,
                className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: t.email }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "email",
              value: w.email,
              onChange: (N) => R("email", N.target.value),
              required: !0,
              className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: t.password }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "password",
              value: w.password,
              onChange: (N) => R("password", N.target.value),
              required: !0,
              className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: t.confirmPassword }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "password",
              value: w.confirmPassword,
              onChange: (N) => R("confirmPassword", N.target.value),
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
            style: K,
            disabled: f,
            children: f ? t.creatingAccount : t.createAccount
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500", children: [
      t.alreadyHaveAccount,
      " ",
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => h && h("login"),
          className: "font-medium hover:underline",
          style: H,
          children: t.login
        }
      )
    ] }) })
  ] });
}
function ss({
  apiBaseUrl: s,
  user: u = {},
  primaryColor: a = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: x,
  onError: l,
  onNavigate: h,
  apiToken: b,
  lang: d = "en",
  texts: k = {}
}) {
  const t = { ...ge[d], ...k }, { isAuthorized: j } = be(b), { primaryColor: o, backgroundColor: i, isLoading: c } = xe(s, b, u, a, y), { post: P } = me(s, b), [f, m] = C(""), [p, I] = C(!1), [w, F] = C(!1), [L, R] = C("");
  if (c) return null;
  if (!j)
    return /* @__PURE__ */ e.jsx(je, {});
  const K = async (_) => {
    _.preventDefault(), I(!0), R("");
    try {
      const v = await P("/forgot-password", { email: f });
      if (v.success)
        F(!0), x && x({ ...v, email: f });
      else {
        const A = v.message || v.error || t.unknownError;
        R(A), l && l(A), I(!1);
      }
    } catch (v) {
      console.error("⚠️ ForgotPassword Error:", v);
      let A = v.message;
      v.isConnectionError ? A = t.connectionError : v.status >= 500 ? A = t.serverError : (!A || A === "Error " + v.status) && (A = t.unknownError), R(A), l && l(A), I(!1);
    }
  }, $ = {
    backgroundColor: o,
    color: "#ffffff"
  }, H = {
    backgroundColor: i
  }, N = {
    color: o
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: H, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6 text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: t.forgotPassword }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: w ? t.checkEmail : t.resetPasswordInstructions })
    ] }),
    w ? /* @__PURE__ */ e.jsxs("div", { className: "text-center space-y-6 py-4", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8 text-blue-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: t.verifyEmailMessage }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => h && h("reset-password"),
            className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
            style: $,
            children: d === "es" ? "Ingresar código y contraseña" : "Enter code and password"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => h && h("login"),
            className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-200 hover:bg-gray-50",
            children: t.backToLogin
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e.jsxs("form", { onSubmit: K, className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: L }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-forgot-email", className: "text-sm font-medium", children: t.email }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            id: "auth-forgot-email",
            type: "email",
            placeholder: "user@example.com",
            className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
            value: f,
            onChange: (_) => {
              m(_.target.value), L && R("");
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
          style: $,
          disabled: p,
          children: p ? t.sending : t.sendResetLink
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => h && h("login"),
          className: "w-full text-sm font-medium hover:underline text-center",
          style: N,
          children: t.backToLogin
        }
      )
    ] })
  ] });
}
function Ae({ message: s }) {
  return s ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2 p-3 text-sm text-green-700 bg-green-50 border border-green-100 rounded-md animate-in fade-in slide-in-from-top-1 duration-200", children: [
    /* @__PURE__ */ e.jsx(Fr, { className: "w-4 h-4 flex-shrink-0" }),
    /* @__PURE__ */ e.jsx("p", { children: s })
  ] }) : null;
}
function ts({
  apiBaseUrl: s,
  token: u = "",
  // The recovery code from URL/Email
  primaryColor: a = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: x,
  onError: l,
  onNavigate: h,
  apiToken: b,
  lang: d = "en",
  email: k = "",
  authToken: t = "",
  // Auth token passed from consumer
  user: j = {},
  initialWaitSeconds: o = 0,
  texts: i = {}
}) {
  const c = { ...ge[d], ...i }, { isAuthorized: P } = be(b), { primaryColor: f, backgroundColor: m, isLoading: p } = xe(s, b, j, a, y), { post: I } = me(s, b), [w, F] = C({
    token: u,
    newPassword: "",
    confirmPassword: ""
  }), [L, R] = C(!1), [K, $] = C(!1), [H, N] = C(!1), [_, v] = C([]), [A, oe] = C(!1), [ne, z] = C(""), [W, B] = C(""), [ce, de] = C(t), [ie, O] = C(o), [Q, ee] = C(c.resetPasswordSubtitle), Z = Re(null);
  if (fe(() => (ie > 0 && (Z.current = setInterval(() => {
    O((M) => M <= 1 ? (clearInterval(Z.current), 0) : M - 1);
  }, 1e3)), () => clearInterval(Z.current)), [ie]), fe(() => {
    t && de(t);
  }, [t]), p) return null;
  if (!P)
    return /* @__PURE__ */ e.jsx(je, {});
  const he = (M) => {
    const E = Math.floor(M / 60), V = M % 60;
    return `${E.toString().padStart(2, "0")}:${V.toString().padStart(2, "0")}`;
  }, Y = async () => {
    if (!(!k || ie > 0)) {
      $(!0), z("");
      try {
        const M = await I("/forgot-password", { email: k });
        if (M.success)
          M.wait_seconds && O(M.wait_seconds), ee(M.message || c.resendSent);
        else {
          const E = M.message || M.error || (d === "es" ? "Error al reenviar" : "Error resending");
          z(E), M.wait_seconds && O(M.wait_seconds), l && l(E);
        }
      } catch (M) {
        console.error("⚠️ Resend Reset Error:", M);
        let E = M.message;
        M.isConnectionError ? E = c.connectionError : M.status >= 500 ? E = c.serverError : (!E || E === "Error " + M.status) && (E = c.unknownError), z(E), l && l(E);
      } finally {
        $(!1);
      }
    }
  }, X = async (M) => {
    if (M.preventDefault(), z(""), w.newPassword !== w.confirmPassword) {
      const E = c.passwordsDontMatch;
      z(E), l && l(E);
      return;
    }
    if (!w.token) {
      const E = d === "es" ? "Ingresa el código de recuperación" : "Please enter the recovery code";
      z(E), l && l(E);
      return;
    }
    R(!0);
    try {
      const E = await I("/reset-password", {
        token: w.token,
        newPassword: w.newPassword,
        confirmPassword: w.confirmPassword
      });
      if (E.success || E.status)
        N(!0), E.active_sessions && v(E.active_sessions), E.token && de(E.token), x && x(E);
      else {
        const V = E.message || E.error || (d === "es" ? "Error al restablecer la contraseña" : "Error resetting password");
        z(V), l && l(V), R(!1);
      }
    } catch (E) {
      console.error("⚠️ ResetPassword Error:", E);
      let V = E.message;
      E.isConnectionError ? V = c.connectionError : E.status >= 500 ? V = c.serverError : (!V || V === "Error " + E.status) && (V = c.unknownError), z(V), l && l(V), R(!1);
    }
  }, re = async (M = !1, E = []) => {
    if (!ce) {
      const V = d === "es" ? "No hay sesión activa" : "No active session";
      z(V), l && l(V);
      return;
    }
    oe(!0), z(""), B("");
    try {
      const V = await I("/logout_sessions", {
        email: k || "",
        token: ce,
        all_sessions: M,
        session_ids: E
      });
      if (V.success)
        v(M ? [] : (se) => se.filter((_e) => !E.includes(_e._id))), B(c.logoutSuccess);
      else {
        const se = V.message || V.error || "Logout failed";
        z(se), l && l(se);
      }
    } catch (V) {
      console.error("⚠️ Logout Sessions Error:", V);
      let se = V.message;
      V.isConnectionError ? se = c.connectionError : V.status >= 500 ? se = c.serverError : (!se || se === "Error " + V.status) && (se = c.unknownError), z(se), l && l(se);
    } finally {
      oe(!1);
    }
  }, Pe = {
    backgroundColor: f,
    color: "#ffffff"
  }, ke = {
    backgroundColor: m
  }, Me = {
    color: f
  };
  return H ? /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: ke, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-4", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: c.resetSuccessTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: c.resetSuccessSubtitle })
    ] }),
    /* @__PURE__ */ e.jsx(Ae, { message: W }),
    /* @__PURE__ */ e.jsx(ye, { message: ne }),
    _.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "mt-8 space-y-4 border-t pt-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium", children: c.activeSessions }),
        /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500", children: c.sessionsSubtitle })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "space-y-3 max-h-60 overflow-y-auto pr-1", children: _.map((M) => {
        var E;
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 border rounded-md text-xs bg-gray-50 flex justify-between items-center", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ e.jsx("div", { className: "font-semibold text-gray-700 truncate max-w-[180px]", title: M["Device Name"], children: ((E = M["Device Name"]) == null ? void 0 : E.split(" ")[0]) || c.deviceName }),
            /* @__PURE__ */ e.jsx("div", { className: "text-gray-500", children: M.IP }),
            M["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "text-gray-400 italic", children: [
              c.expiry,
              ": ",
              new Date(M["Expiration Date"]).toLocaleDateString()
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => re(!1, [M._id]),
              disabled: A,
              className: "px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors",
              children: c.logoutThisSession
            }
          )
        ] }, M._id);
      }) }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => re(!0),
          disabled: A,
          className: "w-full py-2 text-sm text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors font-medium",
          children: A ? c.loggingOut : c.logoutAllSessions
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-8 pt-6 border-t", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => h && h("login"),
        className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        style: Pe,
        children: c.goToLogin
      }
    ) })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: ke, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6 text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: c.resetPasswordTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: Q })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: X, className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: ne }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: c.verificationCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: w.token,
            onChange: (M) => F({ ...w, token: M.target.value }),
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
            value: w.newPassword,
            onChange: (M) => F({ ...w, newPassword: M.target.value }),
            required: !0,
            className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
            placeholder: d === "es" ? "Mínimo 8 caracteres" : "At least 8 characters"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: c.confirmPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: w.confirmPassword,
            onChange: (M) => F({ ...w, confirmPassword: M.target.value }),
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
          disabled: L || !w.token,
          children: L ? c.resetting : c.resetPasswordTitle
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "pt-2 text-center space-y-3", children: [
        ie > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "text-xs text-gray-500 font-mono", children: [
          d === "es" ? "Reenviar código en: " : "Resend code in: ",
          /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: he(ie) })
        ] }) : /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: Y,
            disabled: K || !k,
            className: "text-sm font-medium hover:underline",
            style: Me,
            children: K ? c.loading : d === "es" ? "Reenviar código" : "Resend code"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => h && h("login"),
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
  user: u = {},
  primaryColor: a = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: x,
  onError: l,
  onNavigate: h,
  apiToken: b,
  // X-API-KEY for headers
  authToken: d,
  // User session token
  email: k,
  // User email
  lang: t = "en",
  texts: j = {}
}) {
  const o = { ...ge[t], ...j }, { isAuthorized: i } = be(b), { primaryColor: c, backgroundColor: P, isLoading: f } = xe(s, b, u, a, y), { changePassword: m } = me(s, b), [p, I] = C({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }), [w, F] = C(!1), [L, R] = C(!1), [K, $] = C(""), [H, N] = C("");
  if (f) return null;
  if (!i)
    return /* @__PURE__ */ e.jsx(je, {});
  const _ = async (z) => {
    if (z.preventDefault(), $(""), N(""), p.newPassword !== p.confirmPassword) {
      const W = o.passwordsDontMatch;
      $(W), l && l(W);
      return;
    }
    F(!0);
    try {
      const W = await m({
        email: k || u.email,
        old_password: p.oldPassword,
        new_password: p.newPassword,
        token: d
        // Now using user session token, not api key
      });
      if (W.success)
        R(!0), N(o.passwordChanged), x && x(W), I({ oldPassword: "", newPassword: "", confirmPassword: "" }), setTimeout(() => N(""), 5e3);
      else {
        const B = W.message || W.error || o.unknownError;
        $(B), l && l(B);
      }
    } catch (W) {
      console.error("⚠️ ChangePassword Error:", W);
      let B = W.message;
      W.isConnectionError ? B = o.connectionError : W.status >= 500 ? B = o.serverError : (!B || B === "Error " + W.status) && (B = o.unknownError), $(B), l && l(B);
    } finally {
      F(!1);
    }
  }, v = (z, W) => {
    I((B) => ({ ...B, [z]: W })), K && $("");
  }, A = {
    backgroundColor: c,
    color: "#ffffff"
  }, oe = {
    backgroundColor: P
  }, ne = {
    color: c
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: oe, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6 text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: o.changePassword }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: o.changePasswordSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: _, className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: K }),
      /* @__PURE__ */ e.jsx(Ae, { message: H }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: o.oldPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: p.oldPassword,
            onChange: (z) => v("oldPassword", z.target.value),
            required: !0,
            className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: o.newPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: p.newPassword,
            onChange: (z) => v("newPassword", z.target.value),
            required: !0,
            className: "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: o.confirmNewPassword || o.confirmPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: p.confirmPassword,
            onChange: (z) => v("confirmPassword", z.target.value),
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
          style: A,
          disabled: w,
          children: w ? o.loading : o.changePassword
        }
      ),
      h && /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => h("login"),
          className: "w-full text-sm font-medium hover:underline text-center",
          style: ne,
          children: o.backToLogin
        }
      )
    ] })
  ] });
}
function ns({
  apiBaseUrl: s,
  token: u,
  user: a = {},
  primaryColor: y = "#3b82f6",
  backgroundColor: x = "#ffffff",
  onSuccess: l,
  onError: h,
  onNavigate: b,
  lang: d = "en",
  apiToken: k,
  texts: t = {}
}) {
  const j = { ...ge[d], ...t }, { isAuthorized: o } = be(k), { primaryColor: i, backgroundColor: c, isLoading: P } = xe(s, k, a, y, x), { post: f } = me(s, k), [m, p] = C(u ? "verifying" : "idle"), [I, w] = C(""), [F, L] = C("");
  if (fe(() => {
    u && m === "verifying" && R();
  }, [u]), P) return null;
  if (!o)
    return /* @__PURE__ */ e.jsx(je, {});
  const R = async () => {
    L("");
    try {
      const H = await f("/verify-email", { token: u });
      if (H.success)
        p("success"), w(H.message || j.verifySuccess), l && l(H);
      else {
        p("error");
        const N = H.message || H.error || j.verifyError;
        w(N), L(N), h && h(N);
      }
    } catch (H) {
      console.error("⚠️ Verification Error:", H), p("error");
      const N = d === "es" ? "Error de conexión" : "Connection error";
      w(N), L(N), h && h(N);
    }
  }, K = {
    backgroundColor: i,
    color: "#ffffff"
  }, $ = {
    backgroundColor: c
  };
  return u ? /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: $, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: m === "verifying" ? j.verifying : j.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: m === "verifying" ? j.verifyingSubtitle : I })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "py-6 flex flex-col items-center", children: [
      /* @__PURE__ */ e.jsx(ye, { message: F }),
      m === "verifying" && /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-500", style: { borderTopColor: i } }),
      m === "success" && /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      m === "error" && /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })
    ] }),
    m !== "verifying" && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => b && b("login"),
        className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        style: K,
        children: j.backToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: $, children: [
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
  user: u = {},
  primaryColor: a = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onNavigate: x,
  lang: l = "en",
  userEmail: h,
  initialMessage: b,
  initialWaitSeconds: d = 0,
  onSuccess: k,
  onError: t,
  texts: j = {}
}) {
  const o = { ...ge[l], ...j }, { isAuthorized: i, apiToken: c } = be(), { primaryColor: P, backgroundColor: f, isLoading: m } = xe(s, c, u, a, y), { post: p } = me(s), [I, w] = C(!1), [F, L] = C(!1), [R, K] = C(""), [$, H] = C(b || o.waitingConfirmationMsg), [N, _] = C(d), [v, A] = C(!1), [oe, ne] = C(!1), [z, W] = C(""), [B, ce] = C(""), de = Re(null);
  if (fe(() => (N > 0 && (de.current = setInterval(() => {
    _((Y) => Y <= 1 ? (clearInterval(de.current), 0) : Y - 1);
  }, 1e3)), () => clearInterval(de.current)), [N]), fe(() => {
    N === 0 && (d > 0 || v) && (H(o.waitingConfirmationMsg), A(!1));
  }, [N, d, o.waitingConfirmationMsg]), m) return null;
  if (!i)
    return /* @__PURE__ */ e.jsx(je, {});
  const ie = (Y) => {
    const X = Math.floor(Y / 60), re = Y % 60;
    return `${X.toString().padStart(2, "0")}:${re.toString().padStart(2, "0")}`;
  }, O = async (Y) => {
    if (Y.preventDefault(), !!R) {
      L(!0), W("");
      try {
        const X = await p("/verify-email", { token: R });
        if (X.success)
          ne(!0), k && k(X);
        else {
          const re = X.message || X.error || o.verificationFailed;
          W(re), t && t(re);
        }
      } catch (X) {
        console.error("⚠️ Manual Verification Error:", X);
        const re = l === "es" ? "Error de conexión" : "Connection error";
        W(re), t && t(re);
      } finally {
        L(!1);
      }
    }
  }, Q = async () => {
    if (!(!h || N > 0)) {
      w(!0), A(!1), W(""), ce("");
      try {
        const Y = await p("/resend-confirmation", { email: h });
        if (Y.success) {
          A(!0);
          const X = Y.message || o.resendSent;
          ce(X), Y.wait_seconds && _(Y.wait_seconds);
        } else {
          const X = Y.message || Y.error || (l === "es" ? "Error al reenviar" : "Error resending");
          W(X), Y.wait_seconds && _(Y.wait_seconds), t && t(X);
        }
      } catch (Y) {
        console.error("⚠️ Resend Error:", Y);
        const X = l === "es" ? "Error de conexión" : "Connection error";
        W(X), t && t(X);
      } finally {
        w(!1);
      }
    }
  }, ee = {
    backgroundColor: P,
    color: "#ffffff"
  }, Z = {
    backgroundColor: f
  }, he = {
    color: P
  };
  return oe ? /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: Z, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: o.verifySuccess }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: l === "es" ? "Tu cuenta ha sido confirmada." : "Your account has been confirmed." })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "py-6 flex justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }) }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => x && x("login"),
        className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        style: ee,
        children: o.goToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: Z, children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center mb-6", children: F ? /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-blue-500", style: { borderTopColor: P } }) : /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }) }),
    /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold mb-2", children: o.waitingConfirmation }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm mb-6 text-gray-500", children: $ }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx(Ae, { message: B }),
      /* @__PURE__ */ e.jsx(ye, { message: z })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: O, className: "mb-8 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700 block text-left px-1", children: o.enterCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: "XXXXXX",
            className: "flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-center text-lg font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2",
            value: R,
            onChange: (Y) => K(Y.target.value),
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          disabled: F || !R,
          className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50",
          style: ee,
          children: F ? o.loading : o.verifyButton
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "border-t pt-6 space-y-3", children: [
      N > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-2 rounded bg-gray-50 text-gray-700 text-xs font-mono border inline-block", children: [
        l === "es" ? "Puedes reenviar en: " : "You can resend in: ",
        /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: ie(N) })
      ] }) : /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: Q,
          disabled: I || !h,
          className: "text-sm font-medium hover:underline",
          style: he,
          children: I ? o.loading : o.resendEmail
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => x && x("login"),
          className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-200 hover:bg-gray-50",
          children: o.goToLogin
        }
      )
    ] })
  ] });
}
function Xr(s, u, a, y) {
  const { getMe: x } = me(s, u), [l, h] = C({
    user: null,
    isLoading: !0,
    error: null
  });
  return fe(() => {
    if (!a || !y) {
      h({
        user: null,
        isLoading: !1,
        error: "Missing authentication credentials"
      });
      return;
    }
    (async () => {
      h((d) => ({ ...d, isLoading: !0, error: null }));
      try {
        const d = await x(y, a);
        if (d.success) {
          const k = d.user ? { ...d.user, ...Object.fromEntries(Object.entries(d).filter(([t]) => t !== "user" && t !== "success")) } : d;
          h({
            user: k,
            isLoading: !1,
            error: null
          });
        } else
          h({
            user: null,
            isLoading: !1,
            error: d.message || "Failed to load profile"
          });
      } catch (d) {
        console.error("Failed to fetch user profile:", d), h({
          user: null,
          isLoading: !1,
          error: d.message || "Connection error"
        });
      }
    })();
  }, [a, y, s, u]), l;
}
function Gr(s) {
  return fr({ attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }] })(s);
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
  user: u = {},
  customLabels: a = {},
  backgroundColor: y = "#ffffff",
  primaryColor: x = "#3b82f6",
  apiBaseUrl: l,
  apiToken: h,
  onAppClick: b
}) {
  const [d, k] = C(!1), t = Re(null), { primaryColor: j, backgroundColor: o, isLoading: i } = xe(l, h, u, x, y);
  if (fe(() => {
    const m = (p) => {
      t.current && !t.current.contains(p.target) && k(!1);
    };
    return d && document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [d]), i) return null;
  const c = (m) => m ? m.charAt(0).toUpperCase() : "?", P = (m) => {
    let p = 0;
    for (let I = 0; I < m.length; I++)
      p = m.charCodeAt(I) + ((p << 5) - p);
    return ir[Math.abs(p) % ir.length];
  }, f = (m) => {
    b && b(m), k(!1), m.publicUrl && window.open(m.publicUrl, "_blank");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "relative inline-block text-left", ref: t, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => k(!d),
        className: "flex items-center justify-center p-2 rounded-full transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2",
        style: {
          color: j,
          borderColor: j
        },
        "aria-label": "App Grid",
        children: /* @__PURE__ */ e.jsx(
          Gr,
          {
            className: "w-6 h-6",
            style: {
              color: j,
              stroke: j,
              fill: "none"
            }
          }
        )
      }
    ),
    d && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "absolute right-0 mt-3 w-80 origin-top-right rounded-[2rem] bg-gray-100/90 backdrop-blur-md p-2 shadow-2xl border border-gray-200/50 z-50 transform transition-all duration-300 ease-out",
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "rounded-[1.5rem] p-4 shadow-sm",
            style: { backgroundColor: o },
            children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
              s.map((m) => /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => f(m),
                  className: "group relative flex flex-col items-center p-2 rounded-2xl hover:bg-gray-50 transition-all duration-200",
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm text-white text-2xl font-bold mb-2 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300",
                        style: { backgroundColor: P(m.appKey) },
                        children: c(m.appKey)
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-gray-700 uppercase tracking-wider text-center truncate w-full px-1", children: a[m.appKey] ? a[m.appKey] : m.appKey.replace(/_/g, " ").length > 9 ? `${m.appKey.replace(/_/g, " ").substring(0, 9)}...` : m.appKey.replace(/_/g, " ") }),
                    /* @__PURE__ */ e.jsxs("div", { className: "absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[60] shadow-xl", children: [
                      m.appName,
                      /* @__PURE__ */ e.jsx("div", { className: "absolute -top-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-b-4 border-b-gray-900" })
                    ] })
                  ]
                },
                m.appKey
              )),
              s.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "col-span-3 py-12 text-center text-gray-400 text-sm", children: "No apps" })
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
    const u = new URL(s);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return !1;
  }
}
function gr(s) {
  if (!s) return null;
  const u = [
    s.profileImageURL,
    s.profile_image_url,
    s.profile_image,
    s.profileImage,
    s.avatar,
    s.avatarUrl,
    s.avatar_url
  ];
  for (const a of u)
    if (Jr(a))
      return a;
  return null;
}
function ls({
  user: s = {},
  backgroundColor: u = "#ffffff",
  primaryColor: a = "#3b82f6",
  onLogout: y,
  onChangePassword: x,
  extraItems: l = [],
  // Array of { icon: ReactNode, label: string, onClick: function }
  lang: h = "en",
  apiBaseUrl: b,
  apiToken: d,
  texts: k = {}
}) {
  var F;
  const [t, j] = C(!1), o = Re(null), i = { ...ge[h], ...k }, { primaryColor: c, backgroundColor: P, isLoading: f } = xe(b, d, s, a, u);
  if (fe(() => {
    const L = (R) => {
      o.current && !o.current.contains(R.target) && j(!1);
    };
    return t && document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, [t]), f) return null;
  const m = gr(s), p = () => {
    const L = s["Full Name"] || s.fullName || s.full_name || s.firstName || s.first_name;
    return L ? L.trim().charAt(0).toUpperCase() : s.email ? s.email.charAt(0).toUpperCase() : "U";
  }, I = s["Full Name"] || s.fullName || s.full_name || s.firstName || s.first_name || ((F = s.email) == null ? void 0 : F.split("@")[0]) || "User", w = ({ icon: L, label: R, onClick: K, className: $ = "", color: H = "text-gray-600" }) => /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: () => {
        j(!1), K && K();
      },
      className: `w-full flex items-center gap-3 px-3 py-2 text-sm rounded-xl hover:bg-gray-50 transition-colors group ${H} ${$}`,
      children: [
        L && /* @__PURE__ */ e.jsx(L, { className: "w-4 h-4 transition-transform group-hover:scale-110" }),
        /* @__PURE__ */ e.jsx("span", { className: "flex-1 text-left", children: R })
      ]
    }
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "relative inline-block text-left", ref: o, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => j(!t),
        className: "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden",
        style: {
          borderColor: c,
          backgroundColor: P,
          color: c
        },
        children: [
          m ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: m,
              alt: I,
              className: "w-full h-full object-cover",
              onError: (L) => {
                L.target.style.display = "none", L.target.nextSibling.style.display = "block";
              }
            }
          ) : null,
          /* @__PURE__ */ e.jsx("span", { className: `${m ? "hidden" : "block"} text-sm font-bold`, children: p() })
        ]
      }
    ),
    t && /* @__PURE__ */ e.jsx(
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
                /* @__PURE__ */ e.jsx("p", { className: "text-sm font-bold text-gray-700 truncate mb-0.5", children: I }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] font-medium text-gray-400 truncate", children: s.email })
              ] }),
              /* @__PURE__ */ e.jsx(
                w,
                {
                  icon: $r,
                  label: i.changePassword,
                  onClick: x
                }
              ),
              l.map((L, R) => /* @__PURE__ */ e.jsx(
                w,
                {
                  icon: L.icon,
                  label: L.label,
                  onClick: L.onClick
                },
                `extra-${R}`
              )),
              l.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "my-1 border-t border-gray-50" }),
              /* @__PURE__ */ e.jsx(
                w,
                {
                  icon: cr,
                  label: i.logoutThisSession || (h === "es" ? "Cerrar Sesión" : "Logout"),
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
  apiToken: u,
  authToken: a,
  userEmail: y,
  primaryColor: x = "#3b82f6",
  backgroundColor: l = "#ffffff",
  onClose: h,
  onNavigate: b,
  onError: d,
  onSuccess: k,
  lang: t = "en",
  texts: j = {}
}) {
  const o = { ...ge[t], ...j }, { user: i, isLoading: c, error: P } = Xr(s, u, a, y), { primaryColor: f, backgroundColor: m, isLoading: p } = xe(s, u, i, x, l), { post: I } = me(s, u), [w, F] = C([]), [L, R] = C(!1), [K, $] = C(""), [H, N] = C(""), [_, v] = C(!1);
  fe(() => {
    i != null && i.active_sessions ? F(i.active_sessions) : i != null && i.sessions && F(i.sessions);
  }, [i]);
  const A = (O) => O ? O.includes("Mozilla/") ? O.includes("iPhone") ? "iPhone" : O.includes("Android") ? "Android Device" : O.includes("Windows") ? "Windows PC" : O.includes("Macintosh") ? "Mac" : O.includes("iPad") ? "iPad" : "Web Browser" : O : o.deviceName || "Device", oe = (O) => {
    if (!O) return /* @__PURE__ */ e.jsx(tr, { className: "w-5 h-5" });
    const Q = O.toLowerCase();
    return Q.includes("iphone") || Q.includes("android") ? /* @__PURE__ */ e.jsx(Wr, { className: "w-5 h-5" }) : Q.includes("ipad") || Q.includes("tablet") ? /* @__PURE__ */ e.jsx(Ur, { className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(tr, { className: "w-5 h-5" });
  };
  if (c || p)
    return /* @__PURE__ */ e.jsx("div", { className: "w-full max-w-4xl mx-auto p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx(Qe, { className: "w-16 h-16 animate-spin", style: { color: x } }),
        /* @__PURE__ */ e.jsx(er, { className: "w-6 h-6 absolute top-0 right-0 animate-pulse", style: { color: x } })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg font-semibold text-gray-600 animate-pulse", children: t === "es" ? "Cargando perfil..." : "Loading profile..." })
    ] }) });
  if (P || !i)
    return /* @__PURE__ */ e.jsx("div", { className: "w-full max-w-4xl mx-auto p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 space-y-4", children: [
      /* @__PURE__ */ e.jsx(lr, { className: "w-16 h-16 text-red-500" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg font-semibold text-red-600", children: P || (t === "es" ? "Error al cargar el perfil" : "Failed to load profile") }),
      h && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: h,
          className: "mt-4 px-6 py-2 rounded-xl font-semibold text-white transition-all hover:brightness-110",
          style: { backgroundColor: x },
          children: t === "es" ? "Cerrar" : "Close"
        }
      )
    ] }) });
  const ne = i["Full Name"] || i.fullName || i.full_name || `${i.firstName || ""} ${i.lastName || ""}`.trim() || "User", z = i.Roles || [], W = i.permissions || [], B = i.biography || i.bio || "", ce = gr(i), de = () => ne.charAt(0).toUpperCase(), ie = async (O = !1, Q = []) => {
    if (!a) {
      $(t === "es" ? "No hay sesión activa" : "No active session");
      return;
    }
    R(!0), $(""), N("");
    try {
      const ee = await I("/logout_sessions", {
        email: i.email || y || "",
        token: a,
        all_sessions: O,
        session_ids: Q
      });
      if (ee.success)
        F(O ? [] : (Z) => Z.filter((he) => !Q.includes(he._id))), N(o.logoutSuccess), k && k(ee);
      else {
        const Z = ee.message || ee.error || "Logout failed";
        $(Z), d && d(Z);
      }
    } catch (ee) {
      console.error("⚠️ Logout Sessions Error:", ee), $(o.connectionError);
    } finally {
      R(!1);
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
              ce && !_ ? /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: ce,
                  alt: ne,
                  className: "w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-2xl ring-4 ring-white transition-transform group-hover:scale-105",
                  onError: () => v(!0)
                }
              ) }) : /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center text-5xl md:text-6xl font-black shadow-2xl ring-4 ring-white transition-transform group-hover:scale-105",
                  style: {
                    background: `linear-gradient(135deg, ${f}30 0%, ${f}10 100%)`,
                    color: f
                  },
                  children: de()
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
              /* @__PURE__ */ e.jsx("h1", { className: "text-4xl md:text-5xl font-black text-gray-900 tracking-tight", children: ne }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center md:justify-start gap-2 text-gray-600", children: [
                /* @__PURE__ */ e.jsx(Vr, { className: "w-5 h-5" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-lg font-medium", children: i.email || y })
              ] }),
              B && /* @__PURE__ */ e.jsxs("p", { className: "text-gray-600 max-w-2xl leading-relaxed italic", children: [
                '"',
                B,
                '"'
              ] }),
              z.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-2 justify-center md:justify-start pt-2", children: z.map((O, Q) => /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover:scale-105 hover:shadow-md",
                  style: {
                    backgroundColor: `${f}20`,
                    color: f,
                    border: `2px solid ${f}40`
                  },
                  children: O.replace(/_/g, " ")
                },
                Q
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
        style: { backgroundColor: m },
        children: [
          /* @__PURE__ */ e.jsx(ye, { message: K }),
          /* @__PURE__ */ e.jsx(Ae, { message: H }),
          /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b-2", style: { borderColor: `${f}20` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl", style: { backgroundColor: `${f}15` }, children: /* @__PURE__ */ e.jsx(zr, { className: "w-6 h-6", style: { color: f } }) }),
                  /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-black text-gray-800 uppercase tracking-wide", children: o.personalInfo || "Personal Information" })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 pl-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "group", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "text-xs uppercase font-bold text-gray-400 tracking-widest mb-1.5", children: o.fullNameLabel || "Full Name" }),
                    /* @__PURE__ */ e.jsx("p", { className: "text-base font-bold text-gray-800 group-hover:text-gray-900 transition-colors", children: ne })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "group", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "text-xs uppercase font-bold text-gray-400 tracking-widest mb-1.5", children: o.email || "Email" }),
                    /* @__PURE__ */ e.jsx("p", { className: "text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors", children: i.email || y })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b-2", style: { borderColor: `${f}20` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl", style: { backgroundColor: `${f}15` }, children: /* @__PURE__ */ e.jsx(rr, { className: "w-6 h-6", style: { color: f } }) }),
                  /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-black text-gray-800 uppercase tracking-wide", children: o.permissionsLabel || "Permissions" })
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar", children: W.length > 0 ? W.map((O, Q) => {
                  var ee, Z;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      className: "p-4 rounded-2xl border-2 flex flex-col gap-2 hover:shadow-lg transition-all group",
                      style: {
                        backgroundColor: `${f}05`,
                        borderColor: `${f}20`
                      },
                      children: [
                        /* @__PURE__ */ e.jsx("p", { className: "text-xs font-bold uppercase tracking-wider", style: { color: f }, children: ((ee = O["Permission ID"]) == null ? void 0 : ee.split(".")[0]) || "App" }),
                        /* @__PURE__ */ e.jsx("p", { className: "text-sm font-bold text-gray-800", children: ((Z = O["Permission ID"]) == null ? void 0 : Z.split(".").slice(1).join(" ")) || O["Permission ID"] }),
                        /* @__PURE__ */ e.jsx(
                          "span",
                          {
                            className: "mt-1 w-fit px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-widest",
                            style: { backgroundColor: f, color: "white" },
                            children: O["Action Key"]
                          }
                        )
                      ]
                    },
                    Q
                  );
                }) : /* @__PURE__ */ e.jsxs("div", { className: "py-8 text-center", children: [
                  /* @__PURE__ */ e.jsx(rr, { className: "w-12 h-12 mx-auto mb-3 text-gray-300" }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-400 italic", children: o.noPermissions || "No permissions assigned" })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b-2", style: { borderColor: `${f}20` }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl", style: { backgroundColor: `${f}15` }, children: /* @__PURE__ */ e.jsx(sr, { className: "w-6 h-6", style: { color: f } }) }),
                /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-black text-gray-800 uppercase tracking-wide", children: o.activeSessions || "Active Sessions" })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar", children: w.length > 0 ? w.map((O) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "p-4 border-2 rounded-2xl flex justify-between items-center group hover:shadow-lg transition-all",
                  style: {
                    backgroundColor: `${f}05`,
                    borderColor: `${f}15`
                  },
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 flex-1", children: [
                      /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl", style: { backgroundColor: `${f}10`, color: f }, children: oe(O["Device Name"]) }),
                      /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 flex-1", children: [
                        /* @__PURE__ */ e.jsx("div", { className: "font-black text-gray-800 text-sm", title: O["Device Name"], children: A(O["Device Name"]) }),
                        /* @__PURE__ */ e.jsxs("div", { className: "text-xs text-gray-600 font-semibold flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "w-2 h-2 rounded-full bg-green-500" }),
                          O.IP
                        ] }),
                        O["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "text-xs text-gray-500 italic", children: [
                          o.expiry || "Expires",
                          ": ",
                          new Date(O["Expiration Date"]).toLocaleDateString()
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => ie(!1, [O._id]),
                        disabled: L,
                        className: "p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110",
                        title: o.logoutThisSession || "Logout this session",
                        children: /* @__PURE__ */ e.jsx(cr, { className: "w-5 h-5" })
                      }
                    )
                  ]
                },
                O._id
              )) : /* @__PURE__ */ e.jsxs("div", { className: "py-12 text-center", children: [
                /* @__PURE__ */ e.jsx(sr, { className: "w-12 h-12 mx-auto mb-3 text-gray-300" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-400 italic", children: t === "es" ? "No hay sesiones activas" : "No active sessions found" })
              ] }) }),
              w.length > 1 && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => ie(!0),
                  disabled: L,
                  className: "w-full py-3 text-sm uppercase tracking-widest font-extrabold text-white rounded-2xl transition-all active:scale-95 hover:brightness-110 shadow-lg",
                  style: { backgroundColor: "#ef4444" },
                  children: L ? /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                    /* @__PURE__ */ e.jsx(Qe, { className: "w-4 h-4 animate-spin" }),
                    o.loggingOut || "Logging out..."
                  ] }) : o.logoutAllSessions || "Logout All Sessions"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "mt-12 flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t-2", style: { borderColor: `${f}10` }, children: [
            h && /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: h,
                className: "px-10 py-4 rounded-2xl font-bold text-base transition-all border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 active:scale-95 shadow-md hover:shadow-lg",
                children: o.closeProfile || "Close"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => b && b("change-password"),
                className: "px-10 py-4 rounded-2xl font-bold text-base text-white shadow-lg transition-all active:scale-95 hover:brightness-110 hover:shadow-xl",
                style: { backgroundColor: f },
                children: o.changePassword || "Change Password"
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
  mr as SocialAuthButtons,
  ls as UserMenu,
  cs as UserProfile,
  as as WaitingConfirmation,
  gr as getValidProfileImageUrl,
  Jr as isValidUrl,
  ge as translations,
  me as useAuthApi,
  be as useSecurity,
  Xr as useUserProfile
};
