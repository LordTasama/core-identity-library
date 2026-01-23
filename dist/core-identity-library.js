import pe, { useEffect as me, useState as C, useRef as Re } from "react";
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
  var s = pe, d = Symbol.for("react.element"), l = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, g = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(v, m, L) {
    var o, j = {}, n = null, t = null;
    L !== void 0 && (n = "" + L), m.key !== void 0 && (n = "" + m.key), m.ref !== void 0 && (t = m.ref);
    for (o in m) y.call(m, o) && !u.hasOwnProperty(o) && (j[o] = m[o]);
    if (v && v.defaultProps) for (o in m = v.defaultProps, m) j[o] === void 0 && (j[o] = m[o]);
    return { $$typeof: d, type: v, key: n, ref: t, props: j, _owner: g.current };
  }
  return Se.Fragment = l, Se.jsx = h, Se.jsxs = h, Se;
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
    var s = pe, d = Symbol.for("react.element"), l = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), v = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), o = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), c = Symbol.iterator, E = "@@iterator";
    function f(r) {
      if (r === null || typeof r != "object")
        return null;
      var a = c && r[c] || r[E];
      return typeof a == "function" ? a : null;
    }
    var N = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(r) {
      {
        for (var a = arguments.length, x = new Array(a > 1 ? a - 1 : 0), S = 1; S < a; S++)
          x[S - 1] = arguments[S];
        I("error", r, x);
      }
    }
    function I(r, a, x) {
      {
        var S = N.ReactDebugCurrentFrame, Y = S.getStackAddendum();
        Y !== "" && (a += "%s", x = x.concat([Y]));
        var q = x.map(function(F) {
          return String(F);
        });
        q.unshift("Warning: " + a), Function.prototype.apply.call(console[r], console, q);
      }
    }
    var i = !1, _ = !1, A = !1, k = !1, z = !1, $;
    $ = Symbol.for("react.module.reference");
    function B(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === y || r === u || z || r === g || r === L || r === o || k || r === t || i || _ || A || typeof r == "object" && r !== null && (r.$$typeof === n || r.$$typeof === j || r.$$typeof === h || r.$$typeof === v || r.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === $ || r.getModuleId !== void 0));
    }
    function D(r, a, x) {
      var S = r.displayName;
      if (S)
        return S;
      var Y = a.displayName || a.name || "";
      return Y !== "" ? x + "(" + Y + ")" : x;
    }
    function O(r) {
      return r.displayName || "Context";
    }
    function b(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
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
          case v:
            var a = r;
            return O(a) + ".Consumer";
          case h:
            var x = r;
            return O(x._context) + ".Provider";
          case m:
            return D(r, r.render, "ForwardRef");
          case j:
            var S = r.displayName || null;
            return S !== null ? S : b(r.type) || "Memo";
          case n: {
            var Y = r, q = Y._payload, F = Y._init;
            try {
              return b(F(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, K = 0, ne, W, U, X, de, ue, ie;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function re() {
      {
        if (K === 0) {
          ne = console.log, W = console.info, U = console.warn, X = console.error, de = console.group, ue = console.groupCollapsed, ie = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: M,
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
        K++;
      }
    }
    function Z() {
      {
        if (K--, K === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, r, {
              value: ne
            }),
            info: w({}, r, {
              value: W
            }),
            warn: w({}, r, {
              value: U
            }),
            error: w({}, r, {
              value: X
            }),
            group: w({}, r, {
              value: de
            }),
            groupCollapsed: w({}, r, {
              value: ue
            }),
            groupEnd: w({}, r, {
              value: ie
            })
          });
        }
        K < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = N.ReactCurrentDispatcher, he;
    function H(r, a, x) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (Y) {
            var S = Y.stack.trim().match(/\n( *(at )?)/);
            he = S && S[1] || "";
          }
        return `
` + he + r;
      }
    }
    var G = !1, se;
    {
      var Pe = typeof WeakMap == "function" ? WeakMap : Map;
      se = new Pe();
    }
    function ke(r, a) {
      if (!r || G)
        return "";
      {
        var x = se.get(r);
        if (x !== void 0)
          return x;
      }
      var S;
      G = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = ee.current, ee.current = null, re();
      try {
        if (a) {
          var F = function() {
            throw Error();
          };
          if (Object.defineProperty(F.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(F, []);
            } catch (ae) {
              S = ae;
            }
            Reflect.construct(r, [], F);
          } else {
            try {
              F.call();
            } catch (ae) {
              S = ae;
            }
            r.call(F.prototype);
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
`), oe = S.stack.split(`
`), J = T.length - 1, Q = oe.length - 1; J >= 1 && Q >= 0 && T[J] !== oe[Q]; )
            Q--;
          for (; J >= 1 && Q >= 0; J--, Q--)
            if (T[J] !== oe[Q]) {
              if (J !== 1 || Q !== 1)
                do
                  if (J--, Q--, Q < 0 || T[J] !== oe[Q]) {
                    var ce = `
` + T[J].replace(" at new ", " at ");
                    return r.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", r.displayName)), typeof r == "function" && se.set(r, ce), ce;
                  }
                while (J >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        G = !1, ee.current = q, Z(), Error.prepareStackTrace = Y;
      }
      var Ce = r ? r.displayName || r.name : "", we = Ce ? H(Ce) : "";
      return typeof r == "function" && se.set(r, we), we;
    }
    function Oe(r, a, x) {
      return ke(r, !1);
    }
    function R(r) {
      var a = r.prototype;
      return !!(a && a.isReactComponent);
    }
    function P(r, a, x) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return ke(r, R(r));
      if (typeof r == "string")
        return H(r);
      switch (r) {
        case L:
          return H("Suspense");
        case o:
          return H("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case m:
            return Oe(r.render);
          case j:
            return P(r.type, a, x);
          case n: {
            var S = r, Y = S._payload, q = S._init;
            try {
              return P(q(Y), a, x);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, te = {}, _e = N.ReactDebugCurrentFrame;
    function Le(r) {
      if (r) {
        var a = r._owner, x = P(r.type, r._source, a ? a.type : null);
        _e.setExtraStackFrame(x);
      } else
        _e.setExtraStackFrame(null);
    }
    function hr(r, a, x, S, Y) {
      {
        var q = Function.call.bind(V);
        for (var F in r)
          if (q(r, F)) {
            var T = void 0;
            try {
              if (typeof r[F] != "function") {
                var oe = Error((S || "React class") + ": " + x + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              T = r[F](a, F, S, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              T = J;
            }
            T && !(T instanceof Error) && (Le(Y), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", x, F, typeof T), Le(null)), T instanceof Error && !(T.message in te) && (te[T.message] = !0, Le(Y), p("Failed %s type: %s", x, T.message), Le(null));
          }
      }
    }
    var pr = Array.isArray;
    function Me(r) {
      return pr(r);
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
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(r)), ze(r);
    }
    var Ue = N.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, He;
    function wr(r) {
      if (V.call(r, "ref")) {
        var a = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function jr(r) {
      if (V.call(r, "key")) {
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
          Ye || (Ye = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
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
          He || (He = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        x.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Sr = function(r, a, x, S, Y, q, F) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: r,
        key: a,
        ref: x,
        props: F,
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
        value: Y
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function Er(r, a, x, S, Y) {
      {
        var q, F = {}, T = null, oe = null;
        x !== void 0 && (We(x), T = "" + x), jr(a) && (We(a.key), T = "" + a.key), wr(a) && (oe = a.ref, Nr(a, Y));
        for (q in a)
          V.call(a, q) && !vr.hasOwnProperty(q) && (F[q] = a[q]);
        if (r && r.defaultProps) {
          var J = r.defaultProps;
          for (q in J)
            F[q] === void 0 && (F[q] = J[q]);
        }
        if (T || oe) {
          var Q = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          T && Cr(F, Q), oe && kr(F, Q);
        }
        return Sr(r, T, oe, Y, S, Ue.current, F);
      }
    }
    var Ie = N.ReactCurrentOwner, qe = N.ReactDebugCurrentFrame;
    function Ne(r) {
      if (r) {
        var a = r._owner, x = P(r.type, r._source, a ? a.type : null);
        qe.setExtraStackFrame(x);
      } else
        qe.setExtraStackFrame(null);
    }
    var Te;
    Te = !1;
    function De(r) {
      return typeof r == "object" && r !== null && r.$$typeof === d;
    }
    function Be() {
      {
        if (Ie.current) {
          var r = b(Ie.current.type);
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
    var Ke = {};
    function _r(r) {
      {
        var a = Be();
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
        if (Ke[x])
          return;
        Ke[x] = !0;
        var S = "";
        r && r._owner && r._owner !== Ie.current && (S = " It was passed a child from " + b(r._owner.type) + "."), Ne(r), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, S), Ne(null);
      }
    }
    function Ge(r, a) {
      {
        if (typeof r != "object")
          return;
        if (Me(r))
          for (var x = 0; x < r.length; x++) {
            var S = r[x];
            De(S) && Xe(S, a);
          }
        else if (De(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var Y = f(r);
          if (typeof Y == "function" && Y !== r.entries)
            for (var q = Y.call(r), F; !(F = q.next()).done; )
              De(F.value) && Xe(F.value, a);
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
          var S = b(a);
          hr(x, r.props, "prop", S, r);
        } else if (a.PropTypes !== void 0 && !Te) {
          Te = !0;
          var Y = b(a);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rr(r) {
      {
        for (var a = Object.keys(r.props), x = 0; x < a.length; x++) {
          var S = a[x];
          if (S !== "children" && S !== "key") {
            Ne(r), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Ne(null);
            break;
          }
        }
        r.ref !== null && (Ne(r), p("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    var Je = {};
    function Qe(r, a, x, S, Y, q) {
      {
        var F = B(r);
        if (!F) {
          var T = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = Pr();
          oe ? T += oe : T += Be();
          var J;
          r === null ? J = "null" : Me(r) ? J = "array" : r !== void 0 && r.$$typeof === d ? (J = "<" + (b(r.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : J = typeof r, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, T);
        }
        var Q = Er(r, a, x, Y, q);
        if (Q == null)
          return Q;
        if (F) {
          var ce = a.children;
          if (ce !== void 0)
            if (S)
              if (Me(ce)) {
                for (var Ce = 0; Ce < ce.length; Ce++)
                  Ge(ce[Ce], r);
                Object.freeze && Object.freeze(ce);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(ce, r);
        }
        if (V.call(a, "key")) {
          var we = b(r), ae = Object.keys(a).filter(function(Dr) {
            return Dr !== "key";
          }), Fe = ae.length > 0 ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Je[we + Fe]) {
            var Tr = ae.length > 0 ? "{" + ae.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Fe, we, Tr, we), Je[we + Fe] = !0;
          }
        }
        return r === y ? Rr(Q) : Lr(Q), Q;
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
}, ar = pe.createContext && pe.createContext(ur), be = function() {
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
    return pe.createElement(d.tag, be({
      key: l
    }, d.attr), fr(d.child));
  });
}
function mr(s) {
  return function(d) {
    return pe.createElement(Br, be({
      attr: be({}, s.attr)
    }, d), fr(s.child));
  };
}
function Br(s) {
  var d = function(l) {
    var y = s.attr, g = s.size, u = s.title, h = qr(s, ["attr", "size", "title"]), v = g || l.size || "1em", m;
    return l.className && (m = l.className), s.className && (m = (m ? m + " " : "") + s.className), pe.createElement("svg", be({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, l.attr, y, h, {
      className: m,
      style: be(be({
        color: s.color || l.color
      }, l.style), s.style),
      height: v,
      width: v,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && pe.createElement("title", null, u), s.children);
  };
  return ar !== void 0 ? pe.createElement(ar.Consumer, null, function(l) {
    return d(l);
  }) : d(ur);
}
function Kr(s) {
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
    const { token: c, ...E } = t;
    try {
      const f = {
        "Content-Type": "application/json",
        "X-API-KEY": d,
        "X-REQUEST-URL": typeof window < "u" ? window.location.origin.replace(/\/$/, "") : "",
        ...t.headers
      };
      c && (f.Authorization = `Bearer ${c}`);
      const N = await fetch(`${s}${n}`, {
        ...E,
        headers: f,
        credentials: "include"
      });
      let p;
      const I = N.headers.get("content-type");
      if (I && I.includes("application/json"))
        try {
          p = await N.json();
        } catch (i) {
          console.error("Failed to parse JSON response", i), p = { message: await N.text() };
        }
      else
        p = { message: await N.text() };
      if (!N.ok) {
        const i = new Error(p.message || p.error || `Error ${N.status}`);
        throw i.status = N.status, i.data = p, i;
      }
      return p;
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
  apiToken: h,
  texts: v = {}
}) {
  var t;
  const m = { ...le[u], ...v }, { post: L } = ge(s, h), o = ((t = d.app_info) == null ? void 0 : t.primaryColor) || l;
  me(() => {
    const c = (E) => {
      let f, N;
      try {
        const i = new URL(s);
        f = i.origin;
        const _ = i.hostname.split(".");
        _.length >= 2 && (N = _.slice(-2).join("."));
      } catch {
      }
      const p = N && E.origin.endsWith(N) || f && E.origin === f;
      if (E.origin === window.location.origin || p) {
        if (E.data.type === "OAUTH_SUCCESS") {
          const { token: i, handshake_code: _, user: A } = E.data.payload;
          console.log("OAuth Login Successful:", A), y && y({
            success: !0,
            token: i,
            handshake_code: _,
            user: A,
            email: A == null ? void 0 : A.email,
            // Ensure compatibility with existing success handlers
            provider: "Social"
          });
        } else if (E.data.type === "OAUTH_ERROR") {
          const { message: i } = E.data.payload;
          console.error("OAuth Login Error:", i), g && g(i);
        }
      }
    };
    return window.addEventListener("message", c, !1), () => window.removeEventListener("message", c);
  }, [y, g, s]);
  const j = (c) => {
    L("/login", {
      provider: c,
      frontend_origin: window.location.origin
    }).then((E) => {
      const f = E.auth_url || E.redirect_url;
      if (f) {
        const I = window.screen.width / 2 - 300, i = window.screen.height / 2 - 700 / 2;
        window.open(
          f,
          "login_popup",
          `width=600,height=700,left=${I},top=${i},status=no,resizable=yes,scrollbars=yes`
        );
      } else {
        const N = E.error || E.message || (u === "es" ? "Error al iniciar sesión social" : "Social login error");
        g && g(N);
      }
    }).catch((E) => {
      console.error("⚠️ Social Auth Error:", E), g && g(E.message || "Error");
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
          /* @__PURE__ */ e.jsx(Kr, { className: "h-4 w-4" }),
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
  const { getAppColors: u } = ge(s, d), [h, v] = C({
    primaryColor: ((m = l == null ? void 0 : l.app_info) == null ? void 0 : m.primaryColor) || ((L = l == null ? void 0 : l.app_info) == null ? void 0 : L.primary_color) || (fe == null ? void 0 : fe.primaryColor) || y,
    backgroundColor: ((o = l == null ? void 0 : l.app_info) == null ? void 0 : o.backgroundColor) || ((j = l == null ? void 0 : l.app_info) == null ? void 0 : j.background_color) || (fe == null ? void 0 : fe.backgroundColor) || g,
    isLoading: !fe && !(l != null && l.app_info) && !!(s && d)
  });
  return me(() => {
    if (l != null && l.app_info) {
      const n = l.app_info.primaryColor || l.app_info.primary_color, t = l.app_info.backgroundColor || l.app_info.background_color;
      if ((n || t) && (v((c) => ({
        primaryColor: n || c.primaryColor,
        backgroundColor: t || c.backgroundColor,
        isLoading: !1
      })), n && t))
        return;
    }
    if (fe && !(l != null && l.app_info)) {
      v({
        primaryColor: fe.primaryColor,
        backgroundColor: fe.backgroundColor,
        isLoading: !1
      });
      return;
    }
    s && d ? (async () => {
      $e || ($e = u().catch((E) => (console.error("Failed to fetch app colors:", E), null)));
      const t = await $e, c = {
        primaryColor: (t == null ? void 0 : t.primaryColor) || (t == null ? void 0 : t.primary_color) || y,
        backgroundColor: (t == null ? void 0 : t.backgroundColor) || (t == null ? void 0 : t.background_color) || g
      };
      fe = c, v({ ...c, isLoading: !1 });
    })() : v((n) => ({ ...n, isLoading: !1 }));
  }, [l == null ? void 0 : l.app_info, y, g, s, d]), h;
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
  onNavigate: h,
  apiToken: v,
  lang: m = "en",
  texts: L = {}
}) {
  const o = { ...le[m], ...L }, { isAuthorized: j } = ve(v), { primaryColor: n, backgroundColor: t, isLoading: c } = xe(s, v, d, l, y), { post: E } = ge(s, v), [f, N] = C(""), [p, I] = C(""), [i, _] = C(!1), [A, k] = C("");
  if (c) return null;
  if (!j)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const z = (b) => {
    g && g(b);
  }, $ = async (b) => {
    b.preventDefault(), _(!0), k("");
    try {
      const w = await E("/login", {
        provider: "Email",
        email: f,
        password: p
      });
      if (w.success)
        z({ ...w, email: f });
      else {
        const K = w.message || w.error || o.unknownError;
        k(K), u && u(K), _(!1);
      }
    } catch (w) {
      console.error("⚠️ Login Error:", w);
      let K = w.message;
      w.isConnectionError ? K = o.connectionError : w.status >= 500 ? K = o.serverError : (!K || K === "Error " + w.status) && (K = o.unknownError), k(K), u && u(K), _(!1);
    }
  }, B = {
    backgroundColor: n,
    color: "#ffffff"
  }, D = {
    backgroundColor: t
  }, O = {
    color: n
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: D, children: [
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
          onSuccess: z,
          onError: (b) => {
            k(b), u && u(b);
          },
          lang: m,
          apiToken: v,
          texts: L
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "relative py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full border-t border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "px-2 text-gray-500", style: D, children: o.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: $, className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(ye, { message: A }),
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
              onChange: (b) => {
                N(b.target.value), A && k("");
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
              value: p,
              onChange: (b) => {
                I(b.target.value), A && k("");
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
            style: O,
            children: o.forgotPassword
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
            style: B,
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
          onClick: () => h && h("signup"),
          className: "font-medium hover:underline",
          style: O,
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
  onNavigate: h,
  apiToken: v,
  lang: m = "en",
  texts: L = {}
}) {
  const o = { ...le[m], ...L }, { isAuthorized: j } = ve(v), { primaryColor: n, backgroundColor: t, isLoading: c } = xe(s, v, d, l, y), { post: E } = ge(s, v), [f, N] = C(!1), [p, I] = C(""), [i, _] = C({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  if (c) return null;
  if (!j)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const A = (O) => {
    g && g(O);
  }, k = async (O) => {
    if (O.preventDefault(), I(""), i.password !== i.confirmPassword) {
      const b = o.passwordsDontMatch;
      I(b), u && u(b);
      return;
    }
    N(!0);
    try {
      const b = await E("/register", {
        firstName: i.firstName,
        lastName: i.lastName,
        email: i.email,
        password: i.password
      });
      if (b.success)
        A({ ...b, email: i.email });
      else {
        const w = b.message || b.error || o.unknownError;
        I(w), u && u(w), N(!1);
      }
    } catch (b) {
      console.error("⚠️ SignUp Error:", b);
      let w = b.message;
      b.isConnectionError ? w = o.connectionError : b.status >= 500 ? w = o.serverError : (!w || w === "Error " + b.status) && (w = o.unknownError), I(w), u && u(w), N(!1);
    }
  }, z = (O, b) => {
    _((w) => ({ ...w, [O]: b })), p && I("");
  }, $ = {
    backgroundColor: n,
    color: "#ffffff"
  }, B = {
    backgroundColor: t
  }, D = {
    color: n
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: B, children: [
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
          onSuccess: A,
          onError: (O) => {
            I(O), u && u(O);
          },
          lang: m,
          apiToken: v,
          texts: L
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "relative py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full border-t border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "px-2 text-gray-500", style: B, children: o.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: k, className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(ye, { message: p }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: o.firstName }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                value: i.firstName,
                onChange: (O) => z("firstName", O.target.value),
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
                onChange: (O) => z("lastName", O.target.value),
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
              onChange: (O) => z("email", O.target.value),
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
              onChange: (O) => z("password", O.target.value),
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
              onChange: (O) => z("confirmPassword", O.target.value),
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
            style: $,
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
          onClick: () => h && h("login"),
          className: "font-medium hover:underline",
          style: D,
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
  onNavigate: h,
  apiToken: v,
  lang: m = "en",
  texts: L = {}
}) {
  const o = { ...le[m], ...L }, { isAuthorized: j } = ve(v), { primaryColor: n, backgroundColor: t, isLoading: c } = xe(s, v, d, l, y), { post: E } = ge(s, v), [f, N] = C(""), [p, I] = C(!1), [i, _] = C(!1), [A, k] = C("");
  if (c) return null;
  if (!j)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const z = async (O) => {
    O.preventDefault(), I(!0), k("");
    try {
      const b = await E("/forgot-password", { email: f });
      if (b.success)
        _(!0), g && g({ ...b, email: f });
      else {
        const w = b.message || b.error || o.unknownError;
        k(w), u && u(w), I(!1);
      }
    } catch (b) {
      console.error("⚠️ ForgotPassword Error:", b);
      let w = b.message;
      b.isConnectionError ? w = o.connectionError : b.status >= 500 ? w = o.serverError : (!w || w === "Error " + b.status) && (w = o.unknownError), k(w), u && u(w), I(!1);
    }
  }, $ = {
    backgroundColor: n,
    color: "#ffffff"
  }, B = {
    backgroundColor: t
  }, D = {
    color: n
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: B, children: [
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
            onClick: () => h && h("reset-password"),
            className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
            style: $,
            children: o.enterCodeAndPassword
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => h && h("login"),
            className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-200 hover:bg-gray-50",
            children: o.backToLogin
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e.jsxs("form", { onSubmit: z, className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: A }),
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
            onChange: (O) => {
              N(O.target.value), A && k("");
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
          children: p ? o.sending : o.sendResetLink
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => h && h("login"),
          className: "w-full text-sm font-medium hover:underline text-center",
          style: D,
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
  onNavigate: h,
  apiToken: v,
  lang: m = "en",
  email: L = "",
  authToken: o = "",
  // Auth token passed from consumer
  user: j = {},
  initialWaitSeconds: n = 0,
  texts: t = {}
}) {
  const c = { ...le[m], ...t }, { isAuthorized: E } = ve(v), { primaryColor: f, backgroundColor: N, isLoading: p } = xe(s, v, j, l, y), { post: I } = ge(s, v), [i, _] = C({
    token: d,
    newPassword: "",
    confirmPassword: ""
  }), [A, k] = C(!1), [z, $] = C(!1), [B, D] = C(!1), [O, b] = C([]), [w, K] = C(!1), [ne, W] = C(""), [U, X] = C(""), [de, ue] = C(o), [ie, M] = C(n), [re, Z] = C(c.resetPasswordSubtitle), ee = Re(null);
  if (me(() => (ie > 0 && (ee.current = setInterval(() => {
    M((R) => R <= 1 ? (clearInterval(ee.current), 0) : R - 1);
  }, 1e3)), () => clearInterval(ee.current)), [ie]), me(() => {
    o && ue(o);
  }, [o]), p) return null;
  if (!E)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const he = (R) => {
    const P = Math.floor(R / 60), V = R % 60;
    return `${P.toString().padStart(2, "0")}:${V.toString().padStart(2, "0")}`;
  }, H = async () => {
    if (!(!L || ie > 0)) {
      $(!0), W("");
      try {
        const R = await I("/forgot-password", { email: L });
        if (R.success)
          R.wait_seconds && M(R.wait_seconds), Z(R.message || c.resendSent);
        else {
          const P = R.message || R.error || c.connectionError;
          W(P), R.wait_seconds && M(R.wait_seconds), u && u(P);
        }
      } catch (R) {
        console.error("⚠️ Resend Reset Error:", R);
        let P = R.message;
        R.isConnectionError ? P = c.connectionError : R.status >= 500 ? P = c.serverError : (!P || P === "Error " + R.status) && (P = c.unknownError), W(P), u && u(P);
      } finally {
        $(!1);
      }
    }
  }, G = async (R) => {
    if (R.preventDefault(), W(""), i.newPassword !== i.confirmPassword) {
      const P = c.passwordsDontMatch;
      W(P), u && u(P);
      return;
    }
    if (!i.token) {
      const P = c.enterRecoveryCode;
      W(P), u && u(P);
      return;
    }
    k(!0);
    try {
      const P = await I("/reset-password", {
        token: i.token,
        newPassword: i.newPassword,
        confirmPassword: i.confirmPassword
      });
      if (P.success || P.status)
        D(!0), P.active_sessions && b(P.active_sessions), P.token && ue(P.token), g && g(P);
      else {
        const V = P.message || P.error || c.unknownError;
        W(V), u && u(V), k(!1);
      }
    } catch (P) {
      console.error("⚠️ ResetPassword Error:", P);
      let V = P.message;
      P.isConnectionError ? V = c.connectionError : P.status >= 500 ? V = c.serverError : (!V || V === "Error " + P.status) && (V = c.unknownError), W(V), u && u(V), k(!1);
    }
  }, se = async (R = !1, P = []) => {
    if (!de) {
      const V = c.noSessions;
      W(V), u && u(V);
      return;
    }
    K(!0), W(""), X("");
    try {
      const V = await I("/logout_sessions", {
        email: L || "",
        all_sessions: R,
        session_ids: P
      }, { token: de });
      if (V.success)
        b(R ? [] : (te) => te.filter((_e) => !P.includes(_e._id))), X(c.logoutSuccess);
      else {
        const te = V.message || V.error || "Logout failed";
        W(te), u && u(te);
      }
    } catch (V) {
      console.error("⚠️ Logout Sessions Error:", V);
      let te = V.message;
      V.isConnectionError ? te = c.connectionError : V.status >= 500 ? te = c.serverError : (!te || te === "Error " + V.status) && (te = c.unknownError), W(te), u && u(te);
    } finally {
      K(!1);
    }
  }, Pe = {
    backgroundColor: f,
    color: "#ffffff"
  }, ke = {
    backgroundColor: N
  }, Oe = {
    color: f
  };
  return B ? /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: ke, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-4", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: c.resetSuccessTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: c.resetSuccessSubtitle })
    ] }),
    /* @__PURE__ */ e.jsx(Ae, { message: U }),
    /* @__PURE__ */ e.jsx(ye, { message: ne }),
    O.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "mt-8 space-y-4 border-t pt-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium", children: c.activeSessions }),
        /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500", children: c.sessionsSubtitle })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "space-y-3 max-h-60 overflow-y-auto pr-1", children: O.map((R) => {
        var P;
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 border rounded-md text-xs bg-gray-50 flex justify-between items-center", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ e.jsx("div", { className: "font-semibold text-gray-700 truncate max-w-[180px]", title: R["Device Name"], children: ((P = R["Device Name"]) == null ? void 0 : P.split(" ")[0]) || c.deviceName }),
            /* @__PURE__ */ e.jsx("div", { className: "text-gray-500", children: R.IP }),
            R["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "text-gray-400 italic", children: [
              c.expiry,
              ": ",
              new Date(R["Expiration Date"]).toLocaleDateString()
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => se(!1, [R._id]),
              disabled: w,
              className: "px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors",
              children: c.logoutThisSession
            }
          )
        ] }, R._id);
      }) }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => se(!0),
          disabled: w,
          className: "w-full py-2 text-sm text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors font-medium",
          children: w ? c.loggingOut : c.logoutAllSessions
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
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: re })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: G, className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: ne }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: c.verificationCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: i.token,
            onChange: (R) => _({ ...i, token: R.target.value }),
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
            onChange: (R) => _({ ...i, newPassword: R.target.value }),
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
            onChange: (R) => _({ ...i, confirmPassword: R.target.value }),
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
          disabled: A || !i.token,
          children: A ? c.resetting : c.resetPasswordTitle
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "pt-2 text-center space-y-3", children: [
        ie > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "text-xs text-gray-500 font-mono", children: [
          c.resendCodeIn,
          /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: he(ie) })
        ] }) : /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: H,
            disabled: z || !L,
            className: "text-sm font-medium hover:underline",
            style: Oe,
            children: z ? c.loading : c.resendCode
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
  user: d = {},
  primaryColor: l = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: h,
  apiToken: v,
  // X-API-KEY for headers
  authToken: m,
  // User session token
  email: L,
  // User email
  lang: o = "en",
  texts: j = {}
}) {
  const n = { ...le[o], ...j }, { isAuthorized: t } = ve(v), { primaryColor: c, backgroundColor: E, isLoading: f } = xe(s, v, d, l, y), { changePassword: N } = ge(s, v), [p, I] = C({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }), [i, _] = C(!1), [A, k] = C(!1), [z, $] = C(""), [B, D] = C("");
  if (f) return null;
  if (!t)
    return /* @__PURE__ */ e.jsx(je, { lang: o });
  const O = async (W) => {
    if (W.preventDefault(), $(""), D(""), p.newPassword !== p.confirmPassword) {
      const U = n.passwordsDontMatch;
      $(U), u && u(U);
      return;
    }
    _(!0);
    try {
      const U = await N({
        email: L || d.email,
        old_password: p.oldPassword,
        new_password: p.newPassword,
        token: m
        // Now using user session token, not api key
      });
      if (U.success)
        k(!0), D(n.passwordChanged), g && g(U), I({ oldPassword: "", newPassword: "", confirmPassword: "" }), setTimeout(() => D(""), 5e3);
      else {
        const X = U.message || U.error || n.unknownError;
        $(X), u && u(X);
      }
    } catch (U) {
      console.error("⚠️ ChangePassword Error:", U);
      let X = U.message;
      U.isConnectionError ? X = n.connectionError : U.status >= 500 ? X = n.serverError : (!X || X === "Error " + U.status) && (X = n.unknownError), $(X), u && u(X);
    } finally {
      _(!1);
    }
  }, b = (W, U) => {
    I((X) => ({ ...X, [W]: U })), z && $("");
  }, w = {
    backgroundColor: c,
    color: "#ffffff"
  }, K = {
    backgroundColor: E
  }, ne = {
    color: c
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: K, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6 text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: n.changePassword }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: n.changePasswordSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: O, className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: z }),
      /* @__PURE__ */ e.jsx(Ae, { message: B }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: n.oldPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: p.oldPassword,
            onChange: (W) => b("oldPassword", W.target.value),
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
            value: p.newPassword,
            onChange: (W) => b("newPassword", W.target.value),
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
            value: p.confirmPassword,
            onChange: (W) => b("confirmPassword", W.target.value),
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
          style: w,
          disabled: i,
          children: i ? n.loading : n.changePassword
        }
      ),
      h && /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => h("login"),
          className: "w-full text-sm font-medium hover:underline text-center",
          style: ne,
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
  onError: h,
  onNavigate: v,
  lang: m = "en",
  apiToken: L,
  texts: o = {}
}) {
  const j = { ...le[m], ...o }, { isAuthorized: n } = ve(L), { primaryColor: t, backgroundColor: c, isLoading: E } = xe(s, L, l, y, g), { post: f } = ge(s, L), [N, p] = C(d ? "verifying" : "idle"), [I, i] = C(""), [_, A] = C("");
  if (me(() => {
    d && N === "verifying" && k();
  }, [d]), E) return null;
  if (!n)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const k = async () => {
    A("");
    try {
      const B = await f("/verify-email", { token: d });
      if (B.success)
        p("success"), i(B.message || j.verifySuccess), u && u(B);
      else {
        p("error");
        const D = B.message || B.error || j.verifyError;
        i(D), A(D), h && h(D);
      }
    } catch (B) {
      console.error("⚠️ Verification Error:", B), p("error");
      const D = j.connectionError;
      i(D), A(D), h && h(D);
    }
  }, z = {
    backgroundColor: t,
    color: "#ffffff"
  }, $ = {
    backgroundColor: c
  };
  return d ? /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: $, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: N === "verifying" ? j.verifying : j.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: N === "verifying" ? j.verifyingSubtitle : I })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "py-6 flex flex-col items-center", children: [
      /* @__PURE__ */ e.jsx(ye, { message: _ }),
      N === "verifying" && /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-500", style: { borderTopColor: t } }),
      N === "success" && /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      N === "error" && /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })
    ] }),
    N !== "verifying" && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => v && v("login"),
        className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        style: z,
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
          onClick: () => v && v("login"),
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
  userEmail: h,
  initialMessage: v,
  initialWaitSeconds: m = 0,
  onSuccess: L,
  onError: o,
  apiToken: j,
  // Added apiToken
  texts: n = {}
}) {
  const t = { ...le[u], ...n }, { isAuthorized: c } = ve(j), { primaryColor: E, backgroundColor: f, isLoading: N } = xe(s, j, d, l, y), { post: p } = ge(s, j), [I, i] = C(!1), [_, A] = C(!1), [k, z] = C(""), [$, B] = C(v || t.waitingConfirmationMsg), [D, O] = C(m), [b, w] = C(!1), [K, ne] = C(!1), [W, U] = C(""), [X, de] = C(""), ue = Re(null);
  if (me(() => (D > 0 && (ue.current = setInterval(() => {
    O((H) => H <= 1 ? (clearInterval(ue.current), 0) : H - 1);
  }, 1e3)), () => clearInterval(ue.current)), [D]), me(() => {
    D === 0 && (m > 0 || b) && (B(t.waitingConfirmationMsg), w(!1));
  }, [D, m, t.waitingConfirmationMsg]), N) return null;
  if (!c)
    return /* @__PURE__ */ e.jsx(je, { lang: u });
  const ie = (H) => {
    const G = Math.floor(H / 60), se = H % 60;
    return `${G.toString().padStart(2, "0")}:${se.toString().padStart(2, "0")}`;
  }, M = async (H) => {
    if (H.preventDefault(), !!k) {
      A(!0), U("");
      try {
        const G = await p("/verify-email", { token: k });
        if (G.success)
          ne(!0), L && L(G);
        else {
          const se = G.message || G.error || t.verificationFailed;
          U(se), o && o(se);
        }
      } catch (G) {
        console.error("⚠️ Manual Verification Error:", G);
        const se = t.connectionError;
        U(se), o && o(se);
      } finally {
        A(!1);
      }
    }
  }, re = async () => {
    if (!(!h || D > 0)) {
      i(!0), w(!1), U(""), de("");
      try {
        const H = await p("/resend-confirmation", { email: h });
        if (H.success) {
          w(!0);
          const G = H.message || t.resendSent;
          de(G), H.wait_seconds && O(H.wait_seconds);
        } else {
          const G = H.message || H.error || t.connectionError;
          U(G), H.wait_seconds && O(H.wait_seconds), o && o(G);
        }
      } catch (H) {
        console.error("⚠️ Resend Error:", H);
        const G = t.connectionError;
        U(G), o && o(G);
      } finally {
        i(!1);
      }
    }
  }, Z = {
    backgroundColor: E,
    color: "#ffffff"
  }, ee = {
    backgroundColor: f
  }, he = {
    color: E
  };
  return K ? /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: ee, children: [
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
        style: Z,
        children: t.goToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: ee, children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center mb-6", children: _ ? /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-blue-500", style: { borderTopColor: E } }) : /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }) }),
    /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold mb-2", children: t.waitingConfirmation }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm mb-6 text-gray-500", children: $ }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx(Ae, { message: X }),
      /* @__PURE__ */ e.jsx(ye, { message: W })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: M, className: "mb-8 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700 block text-left px-1", children: t.enterCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: "XXXXXX",
            className: "flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-center text-lg font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2",
            value: k,
            onChange: (H) => z(H.target.value),
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          disabled: _ || !k,
          className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50",
          style: Z,
          children: _ ? t.loading : t.verifyButton
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "border-t pt-6 space-y-3", children: [
      D > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-2 rounded bg-gray-50 text-gray-700 text-xs font-mono border inline-block", children: [
        t.resendCodeIn,
        /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: ie(D) })
      ] }) : /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: re,
          disabled: I || !h,
          className: "text-sm font-medium hover:underline",
          style: he,
          children: I ? t.loading : t.resendEmail
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
  const { getMe: g } = ge(s, d), [u, h] = C({
    user: null,
    isLoading: !0,
    error: null
  });
  return me(() => {
    if (!l || !y) {
      h({
        user: null,
        isLoading: !1,
        error: "Missing authentication credentials"
      });
      return;
    }
    (async () => {
      h((m) => ({ ...m, isLoading: !0, error: null }));
      try {
        const m = await g(y, l);
        if (m.success) {
          const L = m.user ? { ...m.user, ...Object.fromEntries(Object.entries(m).filter(([o]) => o !== "user" && o !== "success")) } : m;
          h({
            user: L,
            isLoading: !1,
            error: null
          });
        } else
          h({
            user: null,
            isLoading: !1,
            error: m.message || "Failed to load profile"
          });
      } catch (m) {
        console.error("Failed to fetch user profile:", m), h({
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
  apiToken: h,
  onAppClick: v,
  lang: m = "en",
  texts: L = {}
}) {
  const [o, j] = C(!1), n = Re(null), t = { ...le[m], ...L }, { primaryColor: c, backgroundColor: E, isLoading: f } = xe(u, h, d, g, y);
  if (me(() => {
    const i = (_) => {
      n.current && !n.current.contains(_.target) && j(!1);
    };
    return o && document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, [o]), f) return null;
  const N = (i) => i ? i.charAt(0).toUpperCase() : "?", p = (i) => {
    let _ = 0;
    for (let A = 0; A < i.length; A++)
      _ = i.charCodeAt(A) + ((_ << 5) - _);
    return ir[Math.abs(_) % ir.length];
  }, I = (i) => {
    v && v(i), j(!1), i.publicUrl && window.open(i.publicUrl, "_blank");
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
            style: { backgroundColor: E },
            children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
              s.map((i) => /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => I(i),
                  className: "group relative flex flex-col items-center p-2 rounded-2xl hover:bg-gray-50 transition-all duration-200",
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm text-white text-2xl font-bold mb-2 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300",
                        style: { backgroundColor: p(i.appKey) },
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
  extraItems: h = [],
  // Array of { icon: ReactNode, label: string, onClick: function }
  lang: v = "en",
  apiBaseUrl: m,
  apiToken: L,
  texts: o = {}
}) {
  var A;
  const [j, n] = C(!1), t = Re(null), c = { ...le[v], ...o }, { primaryColor: E, backgroundColor: f, isLoading: N } = xe(m, L, s, l, d);
  if (me(() => {
    const k = (z) => {
      t.current && !t.current.contains(z.target) && n(!1);
    };
    return j && document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [j]), N) return null;
  const p = xr(s), I = () => {
    const k = s["Full Name"] || s.fullName || s.full_name || s.firstName || s.first_name;
    return k ? k.trim().charAt(0).toUpperCase() : s.email ? s.email.charAt(0).toUpperCase() : "U";
  }, i = s["Full Name"] || s.fullName || s.full_name || s.firstName || s.first_name || ((A = s.email) == null ? void 0 : A.split("@")[0]) || "User", _ = ({ icon: k, label: z, onClick: $, className: B = "", color: D = "text-gray-600" }) => /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: () => {
        n(!1), $ && $();
      },
      className: `w-full flex items-center gap-3 px-3 py-2 text-sm rounded-xl hover:bg-gray-50 transition-colors group ${D} ${B}`,
      children: [
        k && /* @__PURE__ */ e.jsx(k, { className: "w-4 h-4 transition-transform group-hover:scale-110" }),
        /* @__PURE__ */ e.jsx("span", { className: "flex-1 text-left", children: z })
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
          borderColor: E,
          backgroundColor: f,
          color: E
        },
        children: [
          p ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: p,
              alt: i,
              className: "w-full h-full object-cover",
              onError: (k) => {
                k.target.style.display = "none", k.target.nextSibling.style.display = "block";
              }
            }
          ) : null,
          /* @__PURE__ */ e.jsx("span", { className: `${p ? "hidden" : "block"} text-sm font-bold`, children: I() })
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
                _,
                {
                  icon: cr,
                  label: c.profile,
                  onClick: u
                }
              ),
              /* @__PURE__ */ e.jsx(
                _,
                {
                  icon: Vr,
                  label: c.changePassword,
                  onClick: g
                }
              ),
              h.map((k, z) => /* @__PURE__ */ e.jsx(
                _,
                {
                  icon: k.icon,
                  label: k.label,
                  onClick: k.onClick
                },
                `extra-${z}`
              )),
              h.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "my-1 border-t border-gray-50" }),
              /* @__PURE__ */ e.jsx(
                _,
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
  onClose: h,
  onNavigate: v,
  onError: m,
  onSuccess: L,
  lang: o = "en",
  texts: j = {}
}) {
  const n = { ...le[o], ...j }, { user: t, isLoading: c, error: E } = Xr(s, d, l, y), { primaryColor: f, backgroundColor: N, isLoading: p } = xe(s, d, t, g, u), { post: I } = ge(s, d), [i, _] = C([]), [A, k] = C(!1), [z, $] = C(""), [B, D] = C(""), [O, b] = C(!1);
  me(() => {
    t != null && t.active_sessions ? _(t.active_sessions) : t != null && t.sessions && _(t.sessions);
  }, [t]);
  const w = (M) => M ? M.includes("Mozilla/") ? M.includes("iPhone") ? "iPhone" : M.includes("Android") ? "Android Device" : M.includes("Windows") ? "Windows PC" : M.includes("Macintosh") ? "Mac" : M.includes("iPad") ? "iPad" : "Web Browser" : M : n.deviceName, K = (M) => {
    if (!M) return /* @__PURE__ */ e.jsx(tr, { className: "w-5 h-5" });
    const re = M.toLowerCase();
    return re.includes("iphone") || re.includes("android") ? /* @__PURE__ */ e.jsx(Wr, { className: "w-5 h-5" }) : re.includes("ipad") || re.includes("tablet") ? /* @__PURE__ */ e.jsx(Ur, { className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(tr, { className: "w-5 h-5" });
  };
  if (c || p)
    return /* @__PURE__ */ e.jsx("div", { className: "w-full max-w-4xl mx-auto p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx(Ze, { className: "w-16 h-16 animate-spin", style: { color: g } }),
        /* @__PURE__ */ e.jsx(er, { className: "w-6 h-6 absolute top-0 right-0 animate-pulse", style: { color: g } })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg font-semibold text-gray-600 animate-pulse", children: n.loadingProfile })
    ] }) });
  if (E || !t)
    return /* @__PURE__ */ e.jsx("div", { className: "w-full max-w-4xl mx-auto p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 space-y-4", children: [
      /* @__PURE__ */ e.jsx(lr, { className: "w-16 h-16 text-red-500" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg font-semibold text-red-600", children: E || n.failedLoadProfile }),
      h && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: h,
          className: "mt-4 px-6 py-2 rounded-xl font-semibold text-white transition-all hover:brightness-110",
          style: { backgroundColor: g },
          children: n.close
        }
      )
    ] }) });
  const ne = t["Full Name"] || t.fullName || t.full_name || `${t.firstName || ""} ${t.lastName || ""}`.trim() || "User", W = t.Roles || [], U = t.permissions || [], X = t.biography || t.bio || "", de = xr(t), ue = () => ne.charAt(0).toUpperCase(), ie = async (M = !1, re = []) => {
    if (!l) {
      const Z = n.noSessions;
      $(Z);
      return;
    }
    k(!0), $(""), D("");
    try {
      const Z = await I("/logout_sessions", {
        email: t.email || y || "",
        all_sessions: M,
        session_ids: re
      }, { token: l });
      if (Z.success)
        _(M ? [] : (ee) => ee.filter((he) => !re.includes(he._id))), D(n.logoutSuccess), L && L(Z);
      else {
        const ee = Z.message || Z.error || "Logout failed";
        $(ee), m && m(ee);
      }
    } catch (Z) {
      console.error("⚠️ Logout Sessions Error:", Z), $(n.connectionError);
    } finally {
      k(!1);
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
              de && !O ? /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: de,
                  alt: ne,
                  className: "w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-2xl ring-4 ring-white transition-transform group-hover:scale-105",
                  onError: () => b(!0)
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
              /* @__PURE__ */ e.jsx("h1", { className: "text-4xl md:text-5xl font-black text-gray-900 tracking-tight", children: ne }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center md:justify-start gap-2 text-gray-600", children: [
                /* @__PURE__ */ e.jsx(zr, { className: "w-5 h-5" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-lg font-medium", children: t.email || y })
              ] }),
              X && /* @__PURE__ */ e.jsxs("p", { className: "text-gray-600 max-w-2xl leading-relaxed italic", children: [
                '"',
                X,
                '"'
              ] }),
              W.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-2 justify-center md:justify-start pt-2", children: W.map((M, re) => /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover:scale-105 hover:shadow-md",
                  style: {
                    backgroundColor: `${f}20`,
                    color: f,
                    border: `2px solid ${f}40`
                  },
                  children: M.replace(/_/g, " ")
                },
                re
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
          /* @__PURE__ */ e.jsx(ye, { message: z }),
          /* @__PURE__ */ e.jsx(Ae, { message: B }),
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
                    /* @__PURE__ */ e.jsx("p", { className: "text-base font-bold text-gray-800 group-hover:text-gray-900 transition-colors", children: ne })
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
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar", children: U.length > 0 ? U.map((M, re) => {
                  var Z, ee;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      className: "p-4 rounded-2xl border-2 flex flex-col gap-2 hover:shadow-lg transition-all group",
                      style: {
                        backgroundColor: `${f}05`,
                        borderColor: `${f}20`
                      },
                      children: [
                        /* @__PURE__ */ e.jsx("p", { className: "text-xs font-bold uppercase tracking-wider", style: { color: f }, children: ((Z = M["Permission ID"]) == null ? void 0 : Z.split(".")[0]) || "App" }),
                        /* @__PURE__ */ e.jsx("p", { className: "text-sm font-bold text-gray-800", children: ((ee = M["Permission ID"]) == null ? void 0 : ee.split(".").slice(1).join(" ")) || M["Permission ID"] }),
                        /* @__PURE__ */ e.jsx(
                          "span",
                          {
                            className: "mt-1 w-fit px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-widest",
                            style: { backgroundColor: f, color: "white" },
                            children: M["Action Key"]
                          }
                        )
                      ]
                    },
                    re
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
              /* @__PURE__ */ e.jsx("div", { className: "space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar", children: i.length > 0 ? i.map((M) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "p-4 border-2 rounded-2xl flex justify-between items-center group hover:shadow-lg transition-all",
                  style: {
                    backgroundColor: `${f}05`,
                    borderColor: `${f}15`
                  },
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 flex-1", children: [
                      /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl", style: { backgroundColor: `${f}10`, color: f }, children: K(M["Device Name"]) }),
                      /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 flex-1", children: [
                        /* @__PURE__ */ e.jsx("div", { className: "font-black text-gray-800 text-sm", title: M["Device Name"], children: w(M["Device Name"]) }),
                        /* @__PURE__ */ e.jsxs("div", { className: "text-xs text-gray-600 font-semibold flex items-center gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "w-2 h-2 rounded-full bg-green-500" }),
                          M.IP
                        ] }),
                        M["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "text-xs text-gray-500 italic", children: [
                          n.expiry,
                          ": ",
                          new Date(M["Expiration Date"]).toLocaleDateString()
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => ie(!1, [M._id]),
                        disabled: A,
                        className: "p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110",
                        title: n.logoutThisSession,
                        children: /* @__PURE__ */ e.jsx(dr, { className: "w-5 h-5" })
                      }
                    )
                  ]
                },
                M._id
              )) : /* @__PURE__ */ e.jsxs("div", { className: "py-12 text-center", children: [
                /* @__PURE__ */ e.jsx(sr, { className: "w-12 h-12 mx-auto mb-3 text-gray-300" }),
                /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-400 italic", children: n.noSessions })
              ] }) }),
              i.length > 1 && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => ie(!0),
                  disabled: A,
                  className: "w-full py-3 text-sm uppercase tracking-widest font-extrabold text-white rounded-2xl transition-all active:scale-95 hover:brightness-110 shadow-lg",
                  style: { backgroundColor: "#ef4444" },
                  children: A ? /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
                    /* @__PURE__ */ e.jsx(Ze, { className: "w-4 h-4 animate-spin" }),
                    n.loggingOut
                  ] }) : n.logoutAllSessions
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
                children: n.closeProfile
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => v && v("change-password"),
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
