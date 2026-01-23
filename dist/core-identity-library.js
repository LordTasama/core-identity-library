import pe, { useEffect as me, useState as C, useRef as Re } from "react";
import { AlertTriangle as Fi, AlertCircle as ni, CheckCircle as $i, User as ai, KeyRound as Vi, LogOut as di, Loader2 as Ze, Sparkles as ei, Mail as zi, Key as ii, Settings as li, Monitor as ri, Smartphone as Wi, Tablet as Ui } from "lucide-react";
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
var ci;
function Yi() {
  if (ci) return Se;
  ci = 1;
  var l = pe, d = Symbol.for("react.element"), n = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, g = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(v, m, L) {
    var c, j = {}, s = null, r = null;
    L !== void 0 && (s = "" + L), m.key !== void 0 && (s = "" + m.key), m.ref !== void 0 && (r = m.ref);
    for (c in m) y.call(m, c) && !u.hasOwnProperty(c) && (j[c] = m[c]);
    if (v && v.defaultProps) for (c in m = v.defaultProps, m) j[c] === void 0 && (j[c] = m[c]);
    return { $$typeof: d, type: v, key: s, ref: r, props: j, _owner: g.current };
  }
  return Se.Fragment = n, Se.jsx = h, Se.jsxs = h, Se;
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
var si;
function Hi() {
  return si || (si = 1, process.env.NODE_ENV !== "production" && function() {
    var l = pe, d = Symbol.for("react.element"), n = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), v = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), s = Symbol.for("react.lazy"), r = Symbol.for("react.offscreen"), a = Symbol.iterator, E = "@@iterator";
    function f(i) {
      if (i === null || typeof i != "object")
        return null;
      var t = a && i[a] || i[E];
      return typeof t == "function" ? t : null;
    }
    var N = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(i) {
      {
        for (var t = arguments.length, x = new Array(t > 1 ? t - 1 : 0), S = 1; S < t; S++)
          x[S - 1] = arguments[S];
        I("error", i, x);
      }
    }
    function I(i, t, x) {
      {
        var S = N.ReactDebugCurrentFrame, Y = S.getStackAddendum();
        Y !== "" && (t += "%s", x = x.concat([Y]));
        var q = x.map(function(F) {
          return String(F);
        });
        q.unshift("Warning: " + t), Function.prototype.apply.call(console[i], console, q);
      }
    }
    var o = !1, _ = !1, A = !1, k = !1, z = !1, $;
    $ = Symbol.for("react.module.reference");
    function B(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === y || i === u || z || i === g || i === L || i === c || k || i === r || o || _ || A || typeof i == "object" && i !== null && (i.$$typeof === s || i.$$typeof === j || i.$$typeof === h || i.$$typeof === v || i.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === $ || i.getModuleId !== void 0));
    }
    function D(i, t, x) {
      var S = i.displayName;
      if (S)
        return S;
      var Y = t.displayName || t.name || "";
      return Y !== "" ? x + "(" + Y + ")" : x;
    }
    function O(i) {
      return i.displayName || "Context";
    }
    function b(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case y:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case g:
          return "StrictMode";
        case L:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case v:
            var t = i;
            return O(t) + ".Consumer";
          case h:
            var x = i;
            return O(x._context) + ".Provider";
          case m:
            return D(i, i.render, "ForwardRef");
          case j:
            var S = i.displayName || null;
            return S !== null ? S : b(i.type) || "Memo";
          case s: {
            var Y = i, q = Y._payload, F = Y._init;
            try {
              return b(F(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, K = 0, se, W, U, X, de, ue, oe;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function ie() {
      {
        if (K === 0) {
          se = console.log, W = console.info, U = console.warn, X = console.error, de = console.group, ue = console.groupCollapsed, oe = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: M,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        K++;
      }
    }
    function Z() {
      {
        if (K--, K === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, i, {
              value: se
            }),
            info: w({}, i, {
              value: W
            }),
            warn: w({}, i, {
              value: U
            }),
            error: w({}, i, {
              value: X
            }),
            group: w({}, i, {
              value: de
            }),
            groupCollapsed: w({}, i, {
              value: ue
            }),
            groupEnd: w({}, i, {
              value: oe
            })
          });
        }
        K < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = N.ReactCurrentDispatcher, he;
    function H(i, t, x) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (Y) {
            var S = Y.stack.trim().match(/\n( *(at )?)/);
            he = S && S[1] || "";
          }
        return `
` + he + i;
      }
    }
    var G = !1, le;
    {
      var Pe = typeof WeakMap == "function" ? WeakMap : Map;
      le = new Pe();
    }
    function ke(i, t) {
      if (!i || G)
        return "";
      {
        var x = le.get(i);
        if (x !== void 0)
          return x;
      }
      var S;
      G = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = ee.current, ee.current = null, ie();
      try {
        if (t) {
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
            } catch (te) {
              S = te;
            }
            Reflect.construct(i, [], F);
          } else {
            try {
              F.call();
            } catch (te) {
              S = te;
            }
            i.call(F.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            S = te;
          }
          i();
        }
      } catch (te) {
        if (te && S && typeof te.stack == "string") {
          for (var T = te.stack.split(`
`), ce = S.stack.split(`
`), J = T.length - 1, Q = ce.length - 1; J >= 1 && Q >= 0 && T[J] !== ce[Q]; )
            Q--;
          for (; J >= 1 && Q >= 0; J--, Q--)
            if (T[J] !== ce[Q]) {
              if (J !== 1 || Q !== 1)
                do
                  if (J--, Q--, Q < 0 || T[J] !== ce[Q]) {
                    var ae = `
` + T[J].replace(" at new ", " at ");
                    return i.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", i.displayName)), typeof i == "function" && le.set(i, ae), ae;
                  }
                while (J >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        G = !1, ee.current = q, Z(), Error.prepareStackTrace = Y;
      }
      var Ce = i ? i.displayName || i.name : "", we = Ce ? H(Ce) : "";
      return typeof i == "function" && le.set(i, we), we;
    }
    function Oe(i, t, x) {
      return ke(i, !1);
    }
    function R(i) {
      var t = i.prototype;
      return !!(t && t.isReactComponent);
    }
    function P(i, t, x) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return ke(i, R(i));
      if (typeof i == "string")
        return H(i);
      switch (i) {
        case L:
          return H("Suspense");
        case c:
          return H("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case m:
            return Oe(i.render);
          case j:
            return P(i.type, t, x);
          case s: {
            var S = i, Y = S._payload, q = S._init;
            try {
              return P(q(Y), t, x);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, re = {}, _e = N.ReactDebugCurrentFrame;
    function Le(i) {
      if (i) {
        var t = i._owner, x = P(i.type, i._source, t ? t.type : null);
        _e.setExtraStackFrame(x);
      } else
        _e.setExtraStackFrame(null);
    }
    function hi(i, t, x, S, Y) {
      {
        var q = Function.call.bind(V);
        for (var F in i)
          if (q(i, F)) {
            var T = void 0;
            try {
              if (typeof i[F] != "function") {
                var ce = Error((S || "React class") + ": " + x + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              T = i[F](t, F, S, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              T = J;
            }
            T && !(T instanceof Error) && (Le(Y), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", x, F, typeof T), Le(null)), T instanceof Error && !(T.message in re) && (re[T.message] = !0, Le(Y), p("Failed %s type: %s", x, T.message), Le(null));
          }
      }
    }
    var pi = Array.isArray;
    function Me(i) {
      return pi(i);
    }
    function yi(i) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, x = t && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return x;
      }
    }
    function bi(i) {
      try {
        return ze(i), !1;
      } catch {
        return !0;
      }
    }
    function ze(i) {
      return "" + i;
    }
    function We(i) {
      if (bi(i))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yi(i)), ze(i);
    }
    var Ue = N.ReactCurrentOwner, vi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, He;
    function wi(i) {
      if (V.call(i, "ref")) {
        var t = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function ji(i) {
      if (V.call(i, "key")) {
        var t = Object.getOwnPropertyDescriptor(i, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function Ni(i, t) {
      typeof i.ref == "string" && Ue.current;
    }
    function Ci(i, t) {
      {
        var x = function() {
          Ye || (Ye = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        x.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function ki(i, t) {
      {
        var x = function() {
          He || (He = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        x.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Si = function(i, t, x, S, Y, q, F) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: i,
        key: t,
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
    function Ei(i, t, x, S, Y) {
      {
        var q, F = {}, T = null, ce = null;
        x !== void 0 && (We(x), T = "" + x), ji(t) && (We(t.key), T = "" + t.key), wi(t) && (ce = t.ref, Ni(t, Y));
        for (q in t)
          V.call(t, q) && !vi.hasOwnProperty(q) && (F[q] = t[q]);
        if (i && i.defaultProps) {
          var J = i.defaultProps;
          for (q in J)
            F[q] === void 0 && (F[q] = J[q]);
        }
        if (T || ce) {
          var Q = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          T && Ci(F, Q), ce && ki(F, Q);
        }
        return Si(i, T, ce, Y, S, Ue.current, F);
      }
    }
    var Ie = N.ReactCurrentOwner, qe = N.ReactDebugCurrentFrame;
    function Ne(i) {
      if (i) {
        var t = i._owner, x = P(i.type, i._source, t ? t.type : null);
        qe.setExtraStackFrame(x);
      } else
        qe.setExtraStackFrame(null);
    }
    var Te;
    Te = !1;
    function De(i) {
      return typeof i == "object" && i !== null && i.$$typeof === d;
    }
    function Be() {
      {
        if (Ie.current) {
          var i = b(Ie.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Pi(i) {
      return "";
    }
    var Ke = {};
    function _i(i) {
      {
        var t = Be();
        if (!t) {
          var x = typeof i == "string" ? i : i.displayName || i.name;
          x && (t = `

Check the top-level render call using <` + x + ">.");
        }
        return t;
      }
    }
    function Xe(i, t) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var x = _i(t);
        if (Ke[x])
          return;
        Ke[x] = !0;
        var S = "";
        i && i._owner && i._owner !== Ie.current && (S = " It was passed a child from " + b(i._owner.type) + "."), Ne(i), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, S), Ne(null);
      }
    }
    function Ge(i, t) {
      {
        if (typeof i != "object")
          return;
        if (Me(i))
          for (var x = 0; x < i.length; x++) {
            var S = i[x];
            De(S) && Xe(S, t);
          }
        else if (De(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var Y = f(i);
          if (typeof Y == "function" && Y !== i.entries)
            for (var q = Y.call(i), F; !(F = q.next()).done; )
              De(F.value) && Xe(F.value, t);
        }
      }
    }
    function Li(i) {
      {
        var t = i.type;
        if (t == null || typeof t == "string")
          return;
        var x;
        if (typeof t == "function")
          x = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === j))
          x = t.propTypes;
        else
          return;
        if (x) {
          var S = b(t);
          hi(x, i.props, "prop", S, i);
        } else if (t.PropTypes !== void 0 && !Te) {
          Te = !0;
          var Y = b(t);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ri(i) {
      {
        for (var t = Object.keys(i.props), x = 0; x < t.length; x++) {
          var S = t[x];
          if (S !== "children" && S !== "key") {
            Ne(i), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Ne(null);
            break;
          }
        }
        i.ref !== null && (Ne(i), p("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    var Je = {};
    function Qe(i, t, x, S, Y, q) {
      {
        var F = B(i);
        if (!F) {
          var T = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Pi();
          ce ? T += ce : T += Be();
          var J;
          i === null ? J = "null" : Me(i) ? J = "array" : i !== void 0 && i.$$typeof === d ? (J = "<" + (b(i.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : J = typeof i, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, T);
        }
        var Q = Ei(i, t, x, Y, q);
        if (Q == null)
          return Q;
        if (F) {
          var ae = t.children;
          if (ae !== void 0)
            if (S)
              if (Me(ae)) {
                for (var Ce = 0; Ce < ae.length; Ce++)
                  Ge(ae[Ce], i);
                Object.freeze && Object.freeze(ae);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(ae, i);
        }
        if (V.call(t, "key")) {
          var we = b(i), te = Object.keys(t).filter(function(Di) {
            return Di !== "key";
          }), Fe = te.length > 0 ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Je[we + Fe]) {
            var Ti = te.length > 0 ? "{" + te.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Fe, we, Ti, we), Je[we + Fe] = !0;
          }
        }
        return i === y ? Ri(Q) : Li(Q), Q;
      }
    }
    function Ai(i, t, x) {
      return Qe(i, t, x, !0);
    }
    function Oi(i, t, x) {
      return Qe(i, t, x, !1);
    }
    var Mi = Oi, Ii = Ai;
    Ee.Fragment = y, Ee.jsx = Mi, Ee.jsxs = Ii;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Ve.exports = Yi() : Ve.exports = Hi();
var e = Ve.exports, ui = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ti = pe.createContext && pe.createContext(ui), be = function() {
  return be = Object.assign || function(l) {
    for (var d, n = 1, y = arguments.length; n < y; n++) {
      d = arguments[n];
      for (var g in d) Object.prototype.hasOwnProperty.call(d, g) && (l[g] = d[g]);
    }
    return l;
  }, be.apply(this, arguments);
}, qi = function(l, d) {
  var n = {};
  for (var y in l) Object.prototype.hasOwnProperty.call(l, y) && d.indexOf(y) < 0 && (n[y] = l[y]);
  if (l != null && typeof Object.getOwnPropertySymbols == "function") for (var g = 0, y = Object.getOwnPropertySymbols(l); g < y.length; g++)
    d.indexOf(y[g]) < 0 && Object.prototype.propertyIsEnumerable.call(l, y[g]) && (n[y[g]] = l[y[g]]);
  return n;
};
function fi(l) {
  return l && l.map(function(d, n) {
    return pe.createElement(d.tag, be({
      key: n
    }, d.attr), fi(d.child));
  });
}
function mi(l) {
  return function(d) {
    return pe.createElement(Bi, be({
      attr: be({}, l.attr)
    }, d), fi(l.child));
  };
}
function Bi(l) {
  var d = function(n) {
    var y = l.attr, g = l.size, u = l.title, h = qi(l, ["attr", "size", "title"]), v = g || n.size || "1em", m;
    return n.className && (m = n.className), l.className && (m = (m ? m + " " : "") + l.className), pe.createElement("svg", be({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, y, h, {
      className: m,
      style: be(be({
        color: l.color || n.color
      }, n.style), l.style),
      height: v,
      width: v,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && pe.createElement("title", null, u), l.children);
  };
  return ti !== void 0 ? pe.createElement(ti.Consumer, null, function(n) {
    return d(n);
  }) : d(ui);
}
function Ki(l) {
  return mi({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "title", attr: {}, child: [] }, { tag: "path", attr: { d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" } }] })(l);
}
const ne = {
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
function ve(l) {
  const d = !!l && l.length > 0;
  return d || console.warn("⚠️ Core Identity Library: Falta el token de autorización (apiToken) en las props del componente."), { isAuthorized: d, apiToken: l };
}
function ge(l, d) {
  const { isAuthorized: n } = ve(d), y = async (s, r = {}) => {
    const { token: a, ...E } = r;
    try {
      const f = {
        "Content-Type": "application/json",
        "X-API-KEY": d,
        "X-REQUEST-URL": typeof window < "u" ? window.location.origin.replace(/\/$/, "") : "",
        ...r.headers
      };
      a && (f.Authorization = `Bearer ${a}`);
      const N = await fetch(`${l}${s}`, {
        ...E,
        headers: f,
        credentials: "include"
      });
      let p;
      const I = N.headers.get("content-type");
      if (I && I.includes("application/json"))
        try {
          p = await N.json();
        } catch (o) {
          console.error("Failed to parse JSON response", o), p = { message: await N.text() };
        }
      else
        p = { message: await N.text() };
      if (!N.ok) {
        const o = new Error(p.message || p.error || `Error ${N.status}`);
        throw o.status = N.status, o.data = p, o;
      }
      return p;
    } catch (f) {
      if (f.name === "TypeError" && (f.message.includes("Failed to fetch") || f.message.includes("NetworkError"))) {
        const N = new Error("Connection Error");
        throw N.isConnectionError = !0, N;
      }
      throw f;
    }
  }, g = async (s, r, a = {}) => y(s, {
    method: "POST",
    body: r ? JSON.stringify(r) : void 0,
    ...a
  }), u = async (s, r = {}) => y(s, {
    method: "GET",
    ...r
  });
  return {
    post: g,
    get: u,
    verifySession: async (s, r) => g("/verify-session", { email: r }, { token: s }),
    getUserContext: async (s, r) => g("/user-context", { email: r }, { token: s }),
    logout: async (s, r) => g("/logout", { email: r }, { token: s }),
    changePassword: async (s) => {
      const { token: r, ...a } = s;
      return g("/change-password", a, { token: r });
    },
    getAppColors: async () => u("/colors-app"),
    getMe: async (s, r) => g("/me", { email: s }, { token: r })
  };
}
function gi({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: n = "#3b82f6",
  onSuccess: y,
  onError: g,
  lang: u = "en",
  apiToken: h,
  texts: v = {}
}) {
  var r;
  const m = { ...ne[u], ...v }, { post: L } = ge(l, h), c = ((r = d.app_info) == null ? void 0 : r.primaryColor) || n;
  me(() => {
    const a = (E) => {
      let f, N;
      try {
        const o = new URL(l);
        f = o.origin;
        const _ = o.hostname.split(".");
        _.length >= 2 && (N = _.slice(-2).join("."));
      } catch {
      }
      const p = N && E.origin.endsWith(N) || f && E.origin === f;
      if (E.origin === window.location.origin || p) {
        if (E.data.type === "OAUTH_SUCCESS") {
          const { token: o, handshake_code: _, user: A } = E.data.payload;
          console.log("OAuth Login Successful:", A), y && y({
            success: !0,
            token: o,
            handshake_code: _,
            user: A,
            email: A == null ? void 0 : A.email,
            // Ensure compatibility with existing success handlers
            provider: "Social"
          });
        } else if (E.data.type === "OAUTH_ERROR") {
          const { message: o } = E.data.payload;
          console.error("OAuth Login Error:", o), g && g(o);
        }
      }
    };
    return window.addEventListener("message", a, !1), () => window.removeEventListener("message", a);
  }, [y, g, l]);
  const j = (a) => {
    L("/login", {
      provider: a,
      frontend_origin: window.location.origin
    }).then((E) => {
      const f = E.auth_url || E.redirect_url;
      if (f) {
        const I = window.screen.width / 2 - 300, o = window.screen.height / 2 - 700 / 2;
        window.open(
          f,
          "login_popup",
          `width=600,height=700,left=${I},top=${o},status=no,resizable=yes,scrollbars=yes`
        );
      } else {
        const N = E.error || E.message || (u === "es" ? "Error al iniciar sesión social" : "Social login error");
        g && g(N);
      }
    }).catch((E) => {
      console.error("⚠️ Social Auth Error:", E), g && g(E.message || "Error");
    });
  }, s = c ? { borderColor: c, color: c } : {};
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-3", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        className: "cil-w-full cil-flex cil-items-center cil-justify-center cil-gap-2 cil-px-4 cil-py-2 cil-border cil-rounded-md cil-hover:bg-gray-50 cil-transition-colors",
        style: s,
        onClick: () => j("Google"),
        "data-testid": "button-google-login",
        children: [
          /* @__PURE__ */ e.jsx(Ki, { className: "cil-h-4 cil-w-4" }),
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
        className: "cil-w-full cil-flex cil-items-center cil-justify-center cil-gap-2 cil-px-4 cil-py-2 cil-border cil-rounded-md cil-hover:bg-gray-50 cil-transition-colors",
        style: s,
        onClick: () => j("Microsoft"),
        "data-testid": "button-microsoft-login",
        children: [
          /* @__PURE__ */ e.jsx("svg", { className: "cil-h-4 cil-w-4", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" }) }),
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
function xe(l, d, n, y, g) {
  var m, L, c, j;
  const { getAppColors: u } = ge(l, d), [h, v] = C({
    primaryColor: ((m = n == null ? void 0 : n.app_info) == null ? void 0 : m.primaryColor) || ((L = n == null ? void 0 : n.app_info) == null ? void 0 : L.primary_color) || (fe == null ? void 0 : fe.primaryColor) || y,
    backgroundColor: ((c = n == null ? void 0 : n.app_info) == null ? void 0 : c.backgroundColor) || ((j = n == null ? void 0 : n.app_info) == null ? void 0 : j.background_color) || (fe == null ? void 0 : fe.backgroundColor) || g,
    isLoading: !fe && !(n != null && n.app_info) && !!(l && d)
  });
  return me(() => {
    if (n != null && n.app_info) {
      const s = n.app_info.primaryColor || n.app_info.primary_color, r = n.app_info.backgroundColor || n.app_info.background_color;
      if ((s || r) && (v((a) => ({
        primaryColor: s || a.primaryColor,
        backgroundColor: r || a.backgroundColor,
        isLoading: !1
      })), s && r))
        return;
    }
    if (fe && !(n != null && n.app_info)) {
      v({
        primaryColor: fe.primaryColor,
        backgroundColor: fe.backgroundColor,
        isLoading: !1
      });
      return;
    }
    l && d ? (async () => {
      $e || ($e = u().catch((E) => (console.error("Failed to fetch app colors:", E), null)));
      const r = await $e, a = {
        primaryColor: (r == null ? void 0 : r.primaryColor) || (r == null ? void 0 : r.primary_color) || y,
        backgroundColor: (r == null ? void 0 : r.backgroundColor) || (r == null ? void 0 : r.background_color) || g
      };
      fe = a, v({ ...a, isLoading: !1 });
    })() : v((s) => ({ ...s, isLoading: !1 }));
  }, [n == null ? void 0 : n.app_info, y, g, l, d]), h;
}
function je({ lang: l = "en" }) {
  const d = ne[l] || ne.en;
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-justify-center cil-p-8 cil-bg-red-50 cil-border cil-border-red-200 cil-rounded-lg cil-text-red-800 cil-space-x-4 cil-max-w-md cil-mx-auto cil-my-10", children: [
    /* @__PURE__ */ e.jsx(Fi, { className: "cil-w-8 cil-h-8 cil-flex-shrink-0" }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "cil-font-bold cil-text-lg", children: d.authErrorTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: d.authErrorMessage })
    ] })
  ] });
}
function ye({ message: l }) {
  return l ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2 cil-p-3 cil-text-sm cil-text-red-700 cil-bg-red-50 cil-border cil-border-red-100 cil-rounded-md cil-animate-in cil-fade-in cil-slide-in-from-top-1 cil-duration-200", children: [
    /* @__PURE__ */ e.jsx(ni, { className: "cil-w-4 cil-h-4 cil-flex-shrink-0" }),
    /* @__PURE__ */ e.jsx("p", { children: l })
  ] }) : null;
}
function el({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: n = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: h,
  apiToken: v,
  lang: m = "en",
  texts: L = {}
}) {
  const c = { ...ne[m], ...L }, { isAuthorized: j } = ve(v), { primaryColor: s, backgroundColor: r, isLoading: a } = xe(l, v, d, n, y), { post: E } = ge(l, v), [f, N] = C(""), [p, I] = C(""), [o, _] = C(!1), [A, k] = C("");
  if (a) return null;
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
        const K = w.message || w.error || c.unknownError;
        k(K), u && u(K), _(!1);
      }
    } catch (w) {
      console.error("⚠️ Login Error:", w);
      let K = w.message;
      w.isConnectionError ? K = c.connectionError : w.status >= 500 ? K = c.serverError : (!K || K === "Error " + w.status) && (K = c.unknownError), k(K), u && u(K), _(!1);
    }
  }, B = {
    backgroundColor: s,
    color: "#ffffff"
  }, D = {
    backgroundColor: r
  }, O = {
    color: s
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: D, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: c.login }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: c.loginSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(
        gi,
        {
          apiBaseUrl: l,
          user: d,
          primaryColor: s,
          onSuccess: z,
          onError: (b) => {
            k(b), u && u(b);
          },
          lang: m,
          apiToken: v,
          texts: L
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil-inset-0 cil-flex cil-items-center", children: /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-border-t cil-border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "cil-relative cil-flex cil-justify-center cil-text-xs cil-uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "cil-px-2 cil-text-gray-500", style: D, children: c.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: $, className: "cil-space-y-4", children: [
        /* @__PURE__ */ e.jsx(ye, { message: A }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-email", className: "cil-text-sm cil-font-medium cil-leading-none", children: c.email }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              id: "auth-email",
              type: "email",
              placeholder: "user@example.com",
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
              value: f,
              onChange: (b) => {
                N(b.target.value), A && k("");
              },
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-password", className: "cil-text-sm cil-font-medium cil-leading-none", children: c.password }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              id: "auth-password",
              type: "password",
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
              value: p,
              onChange: (b) => {
                I(b.target.value), A && k("");
              },
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-justify-end", children: /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => h && h("forgot-password"),
            className: "cil-text-sm cil-hover:underline",
            style: O,
            children: c.forgotPassword
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-50",
            style: B,
            disabled: o,
            children: o ? c.loading : c.loginButton
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "cil-mt-6 cil-flex cil-justify-center", children: /* @__PURE__ */ e.jsxs("p", { className: "cil-text-sm cil-text-gray-500", children: [
      c.dontHaveAccount,
      " ",
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => h && h("signup"),
          className: "cil-font-medium cil-hover:underline",
          style: O,
          children: c.signUp
        }
      )
    ] }) })
  ] });
}
function il({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: n = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: h,
  apiToken: v,
  lang: m = "en",
  texts: L = {}
}) {
  const c = { ...ne[m], ...L }, { isAuthorized: j } = ve(v), { primaryColor: s, backgroundColor: r, isLoading: a } = xe(l, v, d, n, y), { post: E } = ge(l, v), [f, N] = C(!1), [p, I] = C(""), [o, _] = C({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  if (a) return null;
  if (!j)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const A = (O) => {
    g && g(O);
  }, k = async (O) => {
    if (O.preventDefault(), I(""), o.password !== o.confirmPassword) {
      const b = c.passwordsDontMatch;
      I(b), u && u(b);
      return;
    }
    N(!0);
    try {
      const b = await E("/register", {
        firstName: o.firstName,
        lastName: o.lastName,
        email: o.email,
        password: o.password
      });
      if (b.success)
        A({ ...b, email: o.email });
      else {
        const w = b.message || b.error || c.unknownError;
        I(w), u && u(w), N(!1);
      }
    } catch (b) {
      console.error("⚠️ SignUp Error:", b);
      let w = b.message;
      b.isConnectionError ? w = c.connectionError : b.status >= 500 ? w = c.serverError : (!w || w === "Error " + b.status) && (w = c.unknownError), I(w), u && u(w), N(!1);
    }
  }, z = (O, b) => {
    _((w) => ({ ...w, [O]: b })), p && I("");
  }, $ = {
    backgroundColor: s,
    color: "#ffffff"
  }, B = {
    backgroundColor: r
  }, D = {
    color: s
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: B, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: c.createAccount }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: c.createAccountSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(
        gi,
        {
          apiBaseUrl: l,
          user: d,
          primaryColor: s,
          onSuccess: A,
          onError: (O) => {
            I(O), u && u(O);
          },
          lang: m,
          apiToken: v,
          texts: L
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil-inset-0 cil-flex cil-items-center", children: /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-border-t cil-border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "cil-relative cil-flex cil-justify-center cil-text-xs cil-uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "cil-px-2 cil-text-gray-500", style: B, children: c.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: k, className: "cil-space-y-4", children: [
        /* @__PURE__ */ e.jsx(ye, { message: p }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-2 cil-gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: c.firstName }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                value: o.firstName,
                onChange: (O) => z("firstName", O.target.value),
                required: !0,
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: c.lastName }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                value: o.lastName,
                onChange: (O) => z("lastName", O.target.value),
                required: !0,
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: c.email }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "email",
              value: o.email,
              onChange: (O) => z("email", O.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: c.password }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "password",
              value: o.password,
              onChange: (O) => z("password", O.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: c.confirmPassword }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "password",
              value: o.confirmPassword,
              onChange: (O) => z("confirmPassword", O.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-50",
            style: $,
            disabled: f,
            children: f ? c.creatingAccount : c.createAccount
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "cil-mt-6 cil-text-center", children: /* @__PURE__ */ e.jsxs("p", { className: "cil-text-sm cil-text-gray-500", children: [
      c.alreadyHaveAccount,
      " ",
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => h && h("login"),
          className: "cil-font-medium cil-hover:underline",
          style: D,
          children: c.login
        }
      )
    ] }) })
  ] });
}
function ll({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: n = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: h,
  apiToken: v,
  lang: m = "en",
  texts: L = {}
}) {
  const c = { ...ne[m], ...L }, { isAuthorized: j } = ve(v), { primaryColor: s, backgroundColor: r, isLoading: a } = xe(l, v, d, n, y), { post: E } = ge(l, v), [f, N] = C(""), [p, I] = C(!1), [o, _] = C(!1), [A, k] = C("");
  if (a) return null;
  if (!j)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const z = async (O) => {
    O.preventDefault(), I(!0), k("");
    try {
      const b = await E("/forgot-password", { email: f });
      if (b.success)
        _(!0), g && g({ ...b, email: f });
      else {
        const w = b.message || b.error || c.unknownError;
        k(w), u && u(w), I(!1);
      }
    } catch (b) {
      console.error("⚠️ ForgotPassword Error:", b);
      let w = b.message;
      b.isConnectionError ? w = c.connectionError : b.status >= 500 ? w = c.serverError : (!w || w === "Error " + b.status) && (w = c.unknownError), k(w), u && u(w), I(!1);
    }
  }, $ = {
    backgroundColor: s,
    color: "#ffffff"
  }, B = {
    backgroundColor: r
  }, D = {
    color: s
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: B, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: c.forgotPassword }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: o ? c.checkEmail : c.resetPasswordInstructions })
    ] }),
    o ? /* @__PURE__ */ e.jsxs("div", { className: "cil-text-center cil-space-y-6 cil-py-4", children: [
      /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-mx-auto cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8 cil-text-blue-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: c.verifyEmailMessage }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-3", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => h && h("reset-password"),
            className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
            style: $,
            children: c.enterCodeAndPassword
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => h && h("login"),
            className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-border cil-border-gray-200 cil-hover:bg-gray-50",
            children: c.backToLogin
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e.jsxs("form", { onSubmit: z, className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: A }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-forgot-email", className: "cil-text-sm cil-font-medium", children: c.email }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            id: "auth-forgot-email",
            type: "email",
            placeholder: "user@example.com",
            className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
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
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-50",
          style: $,
          disabled: p,
          children: p ? c.sending : c.sendResetLink
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => h && h("login"),
          className: "cil-w-full cil-text-sm cil-font-medium cil-hover:underline cil-text-center",
          style: D,
          children: c.backToLogin
        }
      )
    ] })
  ] });
}
function Ae({ message: l }) {
  return l ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2 cil-p-3 cil-text-sm cil-text-green-700 cil-bg-green-50 cil-border cil-border-green-100 cil-rounded-md cil-animate-in cil-fade-in cil-slide-in-from-top-1 cil-duration-200", children: [
    /* @__PURE__ */ e.jsx($i, { className: "cil-w-4 cil-h-4 cil-flex-shrink-0" }),
    /* @__PURE__ */ e.jsx("p", { children: l })
  ] }) : null;
}
function rl({
  apiBaseUrl: l,
  token: d = "",
  // The recovery code from URL/Email
  primaryColor: n = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: h,
  apiToken: v,
  lang: m = "en",
  email: L = "",
  authToken: c = "",
  // Auth token passed from consumer
  user: j = {},
  initialWaitSeconds: s = 0,
  texts: r = {}
}) {
  const a = { ...ne[m], ...r }, { isAuthorized: E } = ve(v), { primaryColor: f, backgroundColor: N, isLoading: p } = xe(l, v, j, n, y), { post: I } = ge(l, v), [o, _] = C({
    token: d,
    newPassword: "",
    confirmPassword: ""
  }), [A, k] = C(!1), [z, $] = C(!1), [B, D] = C(!1), [O, b] = C([]), [w, K] = C(!1), [se, W] = C(""), [U, X] = C(""), [de, ue] = C(c), [oe, M] = C(s), [ie, Z] = C(a.resetPasswordSubtitle), ee = Re(null);
  if (me(() => (oe > 0 && (ee.current = setInterval(() => {
    M((R) => R <= 1 ? (clearInterval(ee.current), 0) : R - 1);
  }, 1e3)), () => clearInterval(ee.current)), [oe]), me(() => {
    c && ue(c);
  }, [c]), p) return null;
  if (!E)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const he = (R) => {
    const P = Math.floor(R / 60), V = R % 60;
    return `${P.toString().padStart(2, "0")}:${V.toString().padStart(2, "0")}`;
  }, H = async () => {
    if (!(!L || oe > 0)) {
      $(!0), W("");
      try {
        const R = await I("/forgot-password", { email: L });
        if (R.success)
          R.wait_seconds && M(R.wait_seconds), Z(R.message || a.resendSent);
        else {
          const P = R.message || R.error || a.connectionError;
          W(P), R.wait_seconds && M(R.wait_seconds), u && u(P);
        }
      } catch (R) {
        console.error("⚠️ Resend Reset Error:", R);
        let P = R.message;
        R.isConnectionError ? P = a.connectionError : R.status >= 500 ? P = a.serverError : (!P || P === "Error " + R.status) && (P = a.unknownError), W(P), u && u(P);
      } finally {
        $(!1);
      }
    }
  }, G = async (R) => {
    if (R.preventDefault(), W(""), o.newPassword !== o.confirmPassword) {
      const P = a.passwordsDontMatch;
      W(P), u && u(P);
      return;
    }
    if (!o.token) {
      const P = a.enterRecoveryCode;
      W(P), u && u(P);
      return;
    }
    k(!0);
    try {
      const P = await I("/reset-password", {
        token: o.token,
        newPassword: o.newPassword,
        confirmPassword: o.confirmPassword
      });
      if (P.success || P.status)
        D(!0), P.active_sessions && b(P.active_sessions), P.token && ue(P.token), g && g(P);
      else {
        const V = P.message || P.error || a.unknownError;
        W(V), u && u(V), k(!1);
      }
    } catch (P) {
      console.error("⚠️ ResetPassword Error:", P);
      let V = P.message;
      P.isConnectionError ? V = a.connectionError : P.status >= 500 ? V = a.serverError : (!V || V === "Error " + P.status) && (V = a.unknownError), W(V), u && u(V), k(!1);
    }
  }, le = async (R = !1, P = []) => {
    if (!de) {
      const V = a.noSessions;
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
        b(R ? [] : (re) => re.filter((_e) => !P.includes(_e._id))), X(a.logoutSuccess);
      else {
        const re = V.message || V.error || "Logout failed";
        W(re), u && u(re);
      }
    } catch (V) {
      console.error("⚠️ Logout Sessions Error:", V);
      let re = V.message;
      V.isConnectionError ? re = a.connectionError : V.status >= 500 ? re = a.serverError : (!re || re === "Error " + V.status) && (re = a.unknownError), W(re), u && u(re);
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
  return B ? /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: ke, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-text-center cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-mx-auto cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500 cil-mb-4", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: a.resetSuccessTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: a.resetSuccessSubtitle })
    ] }),
    /* @__PURE__ */ e.jsx(Ae, { message: U }),
    /* @__PURE__ */ e.jsx(ye, { message: se }),
    O.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "cil-mt-8 cil-space-y-4 cil-border-t cil-pt-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "cil-text-left", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "cil-text-lg cil-font-medium", children: a.activeSessions }),
        /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-text-gray-500", children: a.sessionsSubtitle })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "cil-space-y-3 cil-max-h-60 cil-overflow-y-auto cil-pr-1", children: O.map((R) => {
        var P;
        return /* @__PURE__ */ e.jsxs("div", { className: "cil-p-3 cil-border cil-rounded-md cil-text-xs cil-bg-gray-50 cil-flex cil-justify-between cil-items-center", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1", children: [
            /* @__PURE__ */ e.jsx("div", { className: "cil-font-semibold cil-text-gray-700 cil-truncate cil-max-w-[180px]", title: R["Device Name"], children: ((P = R["Device Name"]) == null ? void 0 : P.split(" ")[0]) || a.deviceName }),
            /* @__PURE__ */ e.jsx("div", { className: "cil-text-gray-500", children: R.IP }),
            R["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "cil-text-gray-400 cil-italic", children: [
              a.expiry,
              ": ",
              new Date(R["Expiration Date"]).toLocaleDateString()
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => le(!1, [R._id]),
              disabled: w,
              className: "cil-px-2 cil-py-1 cil-text-red-600 cil-hover:bg-red-50 cil-rounded cil-transition-colors",
              children: a.logoutThisSession
            }
          )
        ] }, R._id);
      }) }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => le(!0),
          disabled: w,
          className: "cil-w-full cil-py-2 cil-text-sm cil-text-red-600 cil-border cil-border-red-200 cil-rounded-md cil-hover:bg-red-50 cil-transition-colors cil-font-medium",
          children: w ? a.loggingOut : a.logoutAllSessions
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "cil-mt-8 cil-pt-6 cil-border-t", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => h && h("login"),
        className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
        style: Pe,
        children: a.goToLogin
      }
    ) })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: ke, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: a.resetPasswordTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: ie })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: G, className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: se }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: a.verificationCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: o.token,
            onChange: (R) => _({ ...o, token: R.target.value }),
            required: !0,
            className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-font-mono cil-tracking-widest cil-text-center",
            placeholder: "XXXXXX"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: a.newPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: o.newPassword,
            onChange: (R) => _({ ...o, newPassword: R.target.value }),
            required: !0,
            className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
            placeholder: a.min8Chars
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: a.confirmPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: o.confirmPassword,
            onChange: (R) => _({ ...o, confirmPassword: R.target.value }),
            required: !0,
            className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-50",
          style: Pe,
          disabled: A || !o.token,
          children: A ? a.resetting : a.resetPasswordTitle
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-pt-2 cil-text-center cil-space-y-3", children: [
        oe > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "cil-text-xs cil-text-gray-500 cil-font-mono", children: [
          a.resendCodeIn,
          /* @__PURE__ */ e.jsx("span", { className: "cil-font-bold", children: he(oe) })
        ] }) : /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: H,
            disabled: z || !L,
            className: "cil-text-sm cil-font-medium cil-hover:underline",
            style: Oe,
            children: z ? a.loading : a.resendCode
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => h && h("login"),
            className: "cil-w-full cil-text-sm cil-font-medium cil-hover:underline cil-text-center cil-text-gray-500",
            children: a.backToLogin
          }
        )
      ] })
    ] })
  ] });
}
function cl({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: n = "#3b82f6",
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
  lang: c = "en",
  texts: j = {}
}) {
  const s = { ...ne[c], ...j }, { isAuthorized: r } = ve(v), { primaryColor: a, backgroundColor: E, isLoading: f } = xe(l, v, d, n, y), { changePassword: N } = ge(l, v), [p, I] = C({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }), [o, _] = C(!1), [A, k] = C(!1), [z, $] = C(""), [B, D] = C("");
  if (f) return null;
  if (!r)
    return /* @__PURE__ */ e.jsx(je, { lang: c });
  const O = async (W) => {
    if (W.preventDefault(), $(""), D(""), p.newPassword !== p.confirmPassword) {
      const U = s.passwordsDontMatch;
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
        k(!0), D(s.passwordChanged), g && g(U), I({ oldPassword: "", newPassword: "", confirmPassword: "" }), setTimeout(() => D(""), 5e3);
      else {
        const X = U.message || U.error || s.unknownError;
        $(X), u && u(X);
      }
    } catch (U) {
      console.error("⚠️ ChangePassword Error:", U);
      let X = U.message;
      U.isConnectionError ? X = s.connectionError : U.status >= 500 ? X = s.serverError : (!X || X === "Error " + U.status) && (X = s.unknownError), $(X), u && u(X);
    } finally {
      _(!1);
    }
  }, b = (W, U) => {
    I((X) => ({ ...X, [W]: U })), z && $("");
  }, w = {
    backgroundColor: a,
    color: "#ffffff"
  }, K = {
    backgroundColor: E
  }, se = {
    color: a
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: K, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: s.changePassword }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: s.changePasswordSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: O, className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: z }),
      /* @__PURE__ */ e.jsx(Ae, { message: B }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: s.oldPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: p.oldPassword,
            onChange: (W) => b("oldPassword", W.target.value),
            required: !0,
            className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: s.newPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: p.newPassword,
            onChange: (W) => b("newPassword", W.target.value),
            required: !0,
            className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: s.confirmNewPassword || s.confirmPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: p.confirmPassword,
            onChange: (W) => b("confirmPassword", W.target.value),
            required: !0,
            className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-50",
          style: w,
          disabled: o,
          children: o ? s.loading : s.changePassword
        }
      ),
      h && /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => h("login"),
          className: "cil-w-full cil-text-sm cil-font-medium cil-hover:underline cil-text-center",
          style: se,
          children: s.backToLogin
        }
      )
    ] })
  ] });
}
function sl({
  apiBaseUrl: l,
  token: d,
  user: n = {},
  primaryColor: y = "#3b82f6",
  backgroundColor: g = "#ffffff",
  onSuccess: u,
  onError: h,
  onNavigate: v,
  lang: m = "en",
  apiToken: L,
  texts: c = {}
}) {
  const j = { ...ne[m], ...c }, { isAuthorized: s } = ve(L), { primaryColor: r, backgroundColor: a, isLoading: E } = xe(l, L, n, y, g), { post: f } = ge(l, L), [N, p] = C(d ? "verifying" : "idle"), [I, o] = C(""), [_, A] = C("");
  if (me(() => {
    d && N === "verifying" && k();
  }, [d]), E) return null;
  if (!s)
    return /* @__PURE__ */ e.jsx(je, { lang: m });
  const k = async () => {
    A("");
    try {
      const B = await f("/verify-email", { token: d });
      if (B.success)
        p("success"), o(B.message || j.verifySuccess), u && u(B);
      else {
        p("error");
        const D = B.message || B.error || j.verifyError;
        o(D), A(D), h && h(D);
      }
    } catch (B) {
      console.error("⚠️ Verification Error:", B), p("error");
      const D = j.connectionError;
      o(D), A(D), h && h(D);
    }
  }, z = {
    backgroundColor: r,
    color: "#ffffff"
  }, $ = {
    backgroundColor: a
  };
  return d ? /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: $, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: N === "verifying" ? j.verifying : j.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: N === "verifying" ? j.verifyingSubtitle : I })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-py-6 cil-flex cil-flex-col cil-items-center", children: [
      /* @__PURE__ */ e.jsx(ye, { message: _ }),
      N === "verifying" && /* @__PURE__ */ e.jsx("div", { className: "cil-animate-spin cil-rounded-full cil-h-12 cil-w-12 cil-border-4 cil-border-gray-200 cil-border-t-blue-500", style: { borderTopColor: r } }),
      N === "success" && /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      N === "error" && /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-red-50 cil-flex cil-items-center cil-justify-center cil-text-red-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })
    ] }),
    N !== "verifying" && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => v && v("login"),
        className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
        style: z,
        children: j.backToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: $, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: j.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: j.checkEmail })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-6 cil-py-4 cil-flex cil-flex-col cil-items-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center cil-text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500 cil-max-w-sm", children: j.verifyEmailMessage }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => v && v("login"),
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-border cil-border-gray-200 cil-hover:bg-gray-50",
          children: j.backToLogin
        }
      )
    ] })
  ] });
}
function tl({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: n = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onNavigate: g,
  lang: u = "en",
  userEmail: h,
  initialMessage: v,
  initialWaitSeconds: m = 0,
  onSuccess: L,
  onError: c,
  apiToken: j,
  // Added apiToken
  texts: s = {}
}) {
  const r = { ...ne[u], ...s }, { isAuthorized: a } = ve(j), { primaryColor: E, backgroundColor: f, isLoading: N } = xe(l, j, d, n, y), { post: p } = ge(l, j), [I, o] = C(!1), [_, A] = C(!1), [k, z] = C(""), [$, B] = C(v || r.waitingConfirmationMsg), [D, O] = C(m), [b, w] = C(!1), [K, se] = C(!1), [W, U] = C(""), [X, de] = C(""), ue = Re(null);
  if (me(() => (D > 0 && (ue.current = setInterval(() => {
    O((H) => H <= 1 ? (clearInterval(ue.current), 0) : H - 1);
  }, 1e3)), () => clearInterval(ue.current)), [D]), me(() => {
    D === 0 && (m > 0 || b) && (B(r.waitingConfirmationMsg), w(!1));
  }, [D, m, r.waitingConfirmationMsg]), N) return null;
  if (!a)
    return /* @__PURE__ */ e.jsx(je, { lang: u });
  const oe = (H) => {
    const G = Math.floor(H / 60), le = H % 60;
    return `${G.toString().padStart(2, "0")}:${le.toString().padStart(2, "0")}`;
  }, M = async (H) => {
    if (H.preventDefault(), !!k) {
      A(!0), U("");
      try {
        const G = await p("/verify-email", { token: k });
        if (G.success)
          se(!0), L && L(G);
        else {
          const le = G.message || G.error || r.verificationFailed;
          U(le), c && c(le);
        }
      } catch (G) {
        console.error("⚠️ Manual Verification Error:", G);
        const le = r.connectionError;
        U(le), c && c(le);
      } finally {
        A(!1);
      }
    }
  }, ie = async () => {
    if (!(!h || D > 0)) {
      o(!0), w(!1), U(""), de("");
      try {
        const H = await p("/resend-confirmation", { email: h });
        if (H.success) {
          w(!0);
          const G = H.message || r.resendSent;
          de(G), H.wait_seconds && O(H.wait_seconds);
        } else {
          const G = H.message || H.error || r.connectionError;
          U(G), H.wait_seconds && O(H.wait_seconds), c && c(G);
        }
      } catch (H) {
        console.error("⚠️ Resend Error:", H);
        const G = r.connectionError;
        U(G), c && c(G);
      } finally {
        o(!1);
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
  return K ? /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: ee, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: r.verifySuccess }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: r.verifySuccess })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "cil-py-6 cil-flex cil-justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }) }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => g && g("login"),
        className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
        style: Z,
        children: r.goToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: ee, children: [
    /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-items-center cil-justify-center cil-mb-6", children: _ ? /* @__PURE__ */ e.jsx("div", { className: "cil-animate-spin cil-rounded-full cil-h-10 cil-w-10 cil-border-4 cil-border-gray-200 cil-border-t-blue-500", style: { borderTopColor: E } }) : /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center cil-text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }) }),
    /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold cil-mb-2", children: r.waitingConfirmation }),
    /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-mb-6 cil-text-gray-500", children: $ }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-mb-4", children: [
      /* @__PURE__ */ e.jsx(Ae, { message: X }),
      /* @__PURE__ */ e.jsx(ye, { message: W })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: M, className: "cil-mb-8 cil-space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium cil-text-gray-700 cil-block cil-text-left cil-px-1", children: r.enterCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: "XXXXXX",
            className: "cil-flex cil-h-12 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-center cil-text-lg cil-font-mono cil-tracking-widest cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
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
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-disabled:opacity-50",
          style: Z,
          children: _ ? r.loading : r.verifyButton
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-border-t cil-pt-6 cil-space-y-3", children: [
      D > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "cil-p-2 cil-rounded cil-bg-gray-50 cil-text-gray-700 cil-text-xs cil-font-mono cil-border cil-inline-block", children: [
        r.resendCodeIn,
        /* @__PURE__ */ e.jsx("span", { className: "cil-font-bold", children: oe(D) })
      ] }) : /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: ie,
          disabled: I || !h,
          className: "cil-text-sm cil-font-medium cil-hover:underline",
          style: he,
          children: I ? r.loading : r.resendEmail
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => g && g("login"),
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-border cil-border-gray-200 cil-hover:bg-gray-50",
          children: r.goToLogin
        }
      )
    ] })
  ] });
}
function Xi(l, d, n, y) {
  const { getMe: g } = ge(l, d), [u, h] = C({
    user: null,
    isLoading: !0,
    error: null
  });
  return me(() => {
    if (!n || !y) {
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
        const m = await g(y, n);
        if (m.success) {
          const L = m.user ? { ...m.user, ...Object.fromEntries(Object.entries(m).filter(([c]) => c !== "user" && c !== "success")) } : m;
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
  }, [n, y, l, d]), u;
}
function Gi(l) {
  return mi({ attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }] })(l);
}
const oi = [
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
function ol({
  apps: l = [],
  user: d = {},
  customLabels: n = {},
  backgroundColor: y = "#ffffff",
  primaryColor: g = "#3b82f6",
  apiBaseUrl: u,
  apiToken: h,
  onAppClick: v,
  lang: m = "en",
  texts: L = {}
}) {
  const [c, j] = C(!1), s = Re(null), r = { ...ne[m], ...L }, { primaryColor: a, backgroundColor: E, isLoading: f } = xe(u, h, d, g, y);
  if (me(() => {
    const o = (_) => {
      s.current && !s.current.contains(_.target) && j(!1);
    };
    return c && document.addEventListener("mousedown", o), () => document.removeEventListener("mousedown", o);
  }, [c]), f) return null;
  const N = (o) => o ? o.charAt(0).toUpperCase() : "?", p = (o) => {
    let _ = 0;
    for (let A = 0; A < o.length; A++)
      _ = o.charCodeAt(A) + ((_ << 5) - _);
    return oi[Math.abs(_) % oi.length];
  }, I = (o) => {
    v && v(o), j(!1), o.publicUrl && window.open(o.publicUrl, "_blank");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-inline-block cil-text-left", ref: s, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => j(!c),
        className: "cil-flex cil-items-center cil-justify-center cil-p-2 cil-rounded-full cil-transition-all cil-duration-200 cil-hover:bg-gray-100 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
        style: {
          color: a,
          borderColor: a
        },
        "aria-label": "App Grid",
        children: /* @__PURE__ */ e.jsx(
          Gi,
          {
            className: "cil-w-6 cil-h-6",
            style: {
              color: a,
              stroke: a,
              fill: "none"
            }
          }
        )
      }
    ),
    c && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "cil-absolute cil-right-0 cil-mt-3 cil-w-80 cil-origin-top-right cil-rounded-[2rem] cil-bg-gray-100/90 cil-backdrop-blur-md cil-p-2 cil-shadow-2xl cil-border cil-border-gray-200/50 cil-z-50 cil-transform cil-transition-all cil-duration-300 cil-ease-out",
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "cil-rounded-[1.5rem] cil-p-4 cil-shadow-sm",
            style: { backgroundColor: E },
            children: /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-3 cil-gap-3", children: [
              l.map((o) => /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => I(o),
                  className: "cil-group cil-relative cil-flex cil-flex-col cil-items-center cil-p-2 cil-rounded-2xl cil-hover:bg-gray-50 cil-transition-all cil-duration-200",
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "cil-w-14 cil-h-14 cil-flex cil-items-center cil-justify-center cil-rounded-2xl cil-shadow-sm cil-text-white cil-text-2xl cil-font-bold cil-mb-2 cil-group-hover:shadow-lg cil-group-hover:scale-105 cil-transition-all cil-duration-300",
                        style: { backgroundColor: p(o.appKey) },
                        children: N(o.appKey)
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "cil-text-[10px] cil-font-bold cil-text-gray-700 cil-uppercase cil-tracking-wider cil-text-center cil-truncate cil-w-full cil-px-1", children: n[o.appKey] ? n[o.appKey] : o.appKey.replace(/_/g, " ").length > 9 ? `${o.appKey.replace(/_/g, " ").substring(0, 9)}...` : o.appKey.replace(/_/g, " ") }),
                    /* @__PURE__ */ e.jsxs("div", { className: "cil-absolute cil--bottom-10 cil-left-1/2 cil--translate-x-1/2 cil-px-2 cil-py-1 cil-bg-gray-900 cil-text-white cil-text-[10px] cil-rounded cil-opacity-0 cil-group-hover:opacity-100 cil-transition-opacity cil-pointer-events-none cil-whitespace-nowrap cil-z-[60] cil-shadow-xl", children: [
                      o.appName,
                      /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil--top-1 cil-left-1/2 cil--translate-x-1/2 cil-border-x-4 cil-border-x-transparent cil-border-b-4 cil-border-b-gray-900" })
                    ] })
                  ]
                },
                o.appKey
              )),
              l.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "cil-col-span-3 cil-py-12 cil-text-center cil-text-gray-400 cil-text-sm", children: r.noApps })
            ] })
          }
        )
      }
    )
  ] });
}
function Ji(l) {
  if (!l || typeof l != "string") return !1;
  try {
    const d = new URL(l);
    return d.protocol === "http:" || d.protocol === "https:";
  } catch {
    return !1;
  }
}
function xi(l) {
  if (!l) return null;
  const d = [
    l.profileImageURL,
    l.profile_image_url,
    l.profile_image,
    l.profileImage,
    l.avatar,
    l.avatarUrl,
    l.avatar_url
  ];
  for (const n of d)
    if (Ji(n))
      return n;
  return null;
}
function nl({
  user: l = {},
  backgroundColor: d = "#ffffff",
  primaryColor: n = "#3b82f6",
  onLogout: y,
  onChangePassword: g,
  onProfileClick: u,
  // Added onProfileClick
  extraItems: h = [],
  // Array of { icon: ReactNode, label: string, onClick: function }
  lang: v = "en",
  apiBaseUrl: m,
  apiToken: L,
  texts: c = {}
}) {
  var A;
  const [j, s] = C(!1), r = Re(null), a = { ...ne[v], ...c }, { primaryColor: E, backgroundColor: f, isLoading: N } = xe(m, L, l, n, d);
  if (me(() => {
    const k = (z) => {
      r.current && !r.current.contains(z.target) && s(!1);
    };
    return j && document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [j]), N) return null;
  const p = xi(l), I = () => {
    const k = l["Full Name"] || l.fullName || l.full_name || l.firstName || l.first_name;
    return k ? k.trim().charAt(0).toUpperCase() : l.email ? l.email.charAt(0).toUpperCase() : "U";
  }, o = l["Full Name"] || l.fullName || l.full_name || l.firstName || l.first_name || ((A = l.email) == null ? void 0 : A.split("@")[0]) || "User", _ = ({ icon: k, label: z, onClick: $, className: B = "", color: D = "cil-text-gray-600" }) => /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: () => {
        s(!1), $ && $();
      },
      className: `cil-w-full cil-flex cil-items-center cil-gap-3 cil-px-3 cil-py-2 cil-text-sm cil-rounded-xl cil-hover:bg-gray-50 cil-transition-colors cil-group ${D} ${B}`,
      children: [
        k && /* @__PURE__ */ e.jsx(k, { className: "cil-w-4 cil-h-4 cil-transition-transform cil-group-hover:scale-110" }),
        /* @__PURE__ */ e.jsx("span", { className: "cil-flex-1 cil-text-left", children: z })
      ]
    }
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-inline-block cil-text-left", ref: r, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => s(!j),
        className: "cil-flex cil-items-center cil-justify-center cil-w-10 cil-h-10 cil-rounded-full cil-border-2 cil-transition-all cil-duration-200 cil-hover:shadow-md cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-overflow-hidden",
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
              alt: o,
              className: "cil-w-full cil-h-full cil-object-cover",
              onError: (k) => {
                k.target.style.display = "none", k.target.nextSibling.style.display = "cil-block";
              }
            }
          ) : null,
          /* @__PURE__ */ e.jsx("span", { className: `${p ? "cil-hidden" : "cil-block"} cil-text-sm cil-font-bold`, children: I() })
        ]
      }
    ),
    j && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "cil-absolute cil-right-0 cil-mt-3 cil-w-56 cil-origin-top-right cil-rounded-2xl cil-bg-gray-100/90 cil-backdrop-blur-md cil-p-2 cil-shadow-2xl cil-border cil-border-gray-200/50 cil-z-50 cil-transform cil-transition-all cil-duration-300 cil-ease-out",
        children: /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "cil-rounded-[1.5rem] cil-bg-white cil-p-2 cil-shadow-sm",
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "cil-px-3 cil-py-2 cil-border-b cil-border-gray-50 cil-mb-1", children: [
                /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-font-bold cil-text-gray-400 cil-uppercase cil-tracking-widest cil-leading-none cil-mb-1", children: "Account" }),
                /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-font-bold cil-text-gray-700 cil-truncate cil-mb-0.5", children: o }),
                /* @__PURE__ */ e.jsx("p", { className: "cil-text-[10px] cil-font-medium cil-text-gray-400 cil-truncate", children: l.email })
              ] }),
              /* @__PURE__ */ e.jsx(
                _,
                {
                  icon: ai,
                  label: a.profile,
                  onClick: u
                }
              ),
              /* @__PURE__ */ e.jsx(
                _,
                {
                  icon: Vi,
                  label: a.changePassword,
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
              h.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "cil-my-1 cil-border-t cil-border-gray-50" }),
              /* @__PURE__ */ e.jsx(
                _,
                {
                  icon: di,
                  label: a.logoutThisSession,
                  onClick: y,
                  color: "cil-text-red-500",
                  className: "cil-hover:bg-red-50"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
function al({
  apiBaseUrl: l,
  apiToken: d,
  authToken: n,
  userEmail: y,
  primaryColor: g = "#3b82f6",
  backgroundColor: u = "#ffffff",
  onClose: h,
  onNavigate: v,
  onError: m,
  onSuccess: L,
  lang: c = "en",
  texts: j = {}
}) {
  const s = { ...ne[c], ...j }, { user: r, isLoading: a, error: E } = Xi(l, d, n, y), { primaryColor: f, backgroundColor: N, isLoading: p } = xe(l, d, r, g, u), { post: I } = ge(l, d), [o, _] = C([]), [A, k] = C(!1), [z, $] = C(""), [B, D] = C(""), [O, b] = C(!1);
  me(() => {
    r != null && r.active_sessions ? _(r.active_sessions) : r != null && r.sessions && _(r.sessions);
  }, [r]);
  const w = (M) => M ? M.includes("Mozilla/") ? M.includes("iPhone") ? "iPhone" : M.includes("Android") ? "Android Device" : M.includes("Windows") ? "Windows PC" : M.includes("Macintosh") ? "Mac" : M.includes("iPad") ? "iPad" : "Web Browser" : M : s.deviceName, K = (M) => {
    if (!M) return /* @__PURE__ */ e.jsx(ri, { className: "w-5 h-5" });
    const ie = M.toLowerCase();
    return ie.includes("iphone") || ie.includes("android") ? /* @__PURE__ */ e.jsx(Wi, { className: "w-5 h-5" }) : ie.includes("ipad") || ie.includes("tablet") ? /* @__PURE__ */ e.jsx(Ui, { className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(ri, { className: "w-5 h-5" });
  };
  if (a || p)
    return /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-max-w-4xl cil-mx-auto cil-p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-flex-col cil-items-center cil-justify-center cil-py-20 cil-space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
        /* @__PURE__ */ e.jsx(Ze, { className: "cil-w-16 cil-h-16 cil-animate-spin", style: { color: g } }),
        /* @__PURE__ */ e.jsx(ei, { className: "cil-w-6 cil-h-6 cil-absolute cil-top-0 cil-right-0 cil-animate-pulse", style: { color: g } })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-lg cil-font-semibold cil-text-gray-600 cil-animate-pulse", children: s.loadingProfile })
    ] }) });
  if (E || !r)
    return /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-max-w-4xl cil-mx-auto cil-p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-flex-col cil-items-center cil-justify-center cil-py-20 cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(ni, { className: "cil-w-16 cil-h-16 cil-text-red-500" }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-lg cil-font-semibold cil-text-red-600", children: E || s.failedLoadProfile }),
      h && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: h,
          className: "cil-mt-4 cil-px-6 cil-py-2 cil-rounded-xl cil-font-semibold cil-text-white cil-transition-all cil-hover:brightness-110",
          style: { backgroundColor: g },
          children: s.close
        }
      )
    ] }) });
  const se = r["Full Name"] || r.fullName || r.full_name || `${r.firstName || ""} ${r.lastName || ""}`.trim() || "User", W = r.Roles || [], U = r.permissions || [], X = r.biography || r.bio || "", de = xi(r), ue = () => se.charAt(0).toUpperCase(), oe = async (M = !1, ie = []) => {
    if (!n) {
      const Z = s.noSessions;
      $(Z);
      return;
    }
    k(!0), $(""), D("");
    try {
      const Z = await I("/logout_sessions", {
        email: r.email || y || "",
        all_sessions: M,
        session_ids: ie
      }, { token: n });
      if (Z.success)
        _(M ? [] : (ee) => ee.filter((he) => !ie.includes(he._id))), D(s.logoutSuccess), L && L(Z);
      else {
        const ee = Z.message || Z.error || "Logout failed";
        $(ee), m && m(ee);
      }
    } catch (Z) {
      console.error("⚠️ Logout Sessions Error:", Z), $(s.connectionError);
    } finally {
      k(!1);
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-5xl cil-mx-auto", children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "cil-relative cil-rounded-t-[2.5rem] cil-p-8 md:cil-p-12 cil-overflow-hidden",
        style: {
          background: `linear-gradient(135deg, ${f}15 0%, ${f}05 100%)`
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "cil-absolute cil-top-0 cil-right-0 cil-w-64 cil-h-64 cil-opacity-10 cil-blur-3xl cil-rounded-full",
              style: { backgroundColor: f }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "cil-absolute cil-bottom-0 cil-left-0 cil-w-48 cil-h-48 cil-opacity-10 cil-blur-3xl cil-rounded-full",
              style: { backgroundColor: f }
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-flex cil-flex-col md:cil-flex-row cil-items-center md:cil-items-start cil-gap-6", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-group", children: [
              de && !O ? /* @__PURE__ */ e.jsx("div", { className: "cil-relative", children: /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: de,
                  alt: se,
                  className: "cil-w-32 cil-h-32 md:cil-w-40 md:cil-h-40 cil-rounded-3xl cil-object-cover cil-shadow-2xl cil-ring-4 cil-ring-white cil-transition-transform cil-group-hover:scale-105",
                  onError: () => b(!0)
                }
              ) }) : /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "cil-w-32 cil-h-32 md:cil-w-40 md:cil-h-40 cil-rounded-3xl cil-flex cil-items-center cil-justify-center cil-text-5xl md:cil-text-6xl cil-font-black cil-shadow-2xl cil-ring-4 cil-ring-white cil-transition-transform cil-group-hover:scale-105",
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
                  className: "cil-absolute cil--bottom-2 cil--right-2 cil-w-12 cil-h-12 cil-rounded-2xl cil-flex cil-items-center cil-justify-center cil-shadow-lg",
                  style: { backgroundColor: f },
                  children: /* @__PURE__ */ e.jsx(ei, { className: "cil-w-6 cil-h-6 cil-text-white" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "cil-flex-1 cil-text-center md:cil-text-left cil-space-y-3", children: [
              /* @__PURE__ */ e.jsx("h1", { className: "cil-text-4xl md:cil-text-5xl cil-font-black cil-text-gray-900 cil-tracking-tight", children: se }),
              /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-justify-center md:cil-justify-start cil-gap-2 cil-text-gray-600", children: [
                /* @__PURE__ */ e.jsx(zi, { className: "cil-w-5 cil-h-5" }),
                /* @__PURE__ */ e.jsx("span", { className: "cil-text-lg cil-font-medium", children: r.email || y })
              ] }),
              X && /* @__PURE__ */ e.jsxs("p", { className: "cil-text-gray-600 cil-max-w-2xl cil-leading-relaxed cil-italic", children: [
                '"',
                X,
                '"'
              ] }),
              W.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-flex-wrap cil-gap-2 cil-justify-center md:cil-justify-start cil-pt-2", children: W.map((M, ie) => /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: "cil-px-4 cil-py-1.5 cil-rounded-full cil-text-xs cil-font-bold cil-uppercase cil-tracking-wider cil-shadow-sm cil-transition-all cil-hover:scale-105 cil-hover:shadow-md",
                  style: {
                    backgroundColor: `${f}20`,
                    color: f,
                    border: `2px solid ${f}40`
                  },
                  children: M.replace(/_/g, " ")
                },
                ie
              )) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "cil-rounded-b-[2.5rem] cil-shadow-2xl cil-border-x cil-border-b cil-border-gray-100 cil-p-8 md:cil-p-12",
        style: { backgroundColor: N },
        children: [
          /* @__PURE__ */ e.jsx(ye, { message: z }),
          /* @__PURE__ */ e.jsx(Ae, { message: B }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-1 lg:cil-grid-cols-2 cil-gap-10", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-8", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2", style: { borderColor: `${f}20` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${f}15` }, children: /* @__PURE__ */ e.jsx(ai, { className: "cil-w-6 cil-h-6", style: { color: f } }) }),
                  /* @__PURE__ */ e.jsx("h2", { className: "cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide", children: s.personalInfo })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4 cil-pl-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "cil-group", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-uppercase cil-font-bold cil-text-gray-400 cil-tracking-widest cil-mb-1.5", children: s.fullNameLabel }),
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-base cil-font-bold cil-text-gray-800 cil-group-hover:text-gray-900 cil-transition-colors", children: se })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "cil-group", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-uppercase cil-font-bold cil-text-gray-400 cil-tracking-widest cil-mb-1.5", children: s.email }),
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-base cil-font-semibold cil-text-gray-700 cil-group-hover:text-gray-900 cil-transition-colors", children: r.email || y })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2", style: { borderColor: `${f}20` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${f}15` }, children: /* @__PURE__ */ e.jsx(ii, { className: "cil-w-6 cil-h-6", style: { color: f } }) }),
                  /* @__PURE__ */ e.jsx("h2", { className: "cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide", children: s.permissionsLabel })
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "cil-grid cil-grid-cols-1 cil-gap-3 cil-max-h-[400px] cil-overflow-y-auto cil-pr-2 cil-custom-scrollbar", children: U.length > 0 ? U.map((M, ie) => {
                  var Z, ee;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      className: "cil-p-4 cil-rounded-2xl cil-border-2 cil-flex cil-flex-col cil-gap-2 cil-hover:shadow-lg cil-transition-all cil-group",
                      style: {
                        backgroundColor: `${f}05`,
                        borderColor: `${f}20`
                      },
                      children: [
                        /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-font-bold cil-uppercase cil-tracking-wider", style: { color: f }, children: ((Z = M["Permission ID"]) == null ? void 0 : Z.split(".")[0]) || "App" }),
                        /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-font-bold cil-text-gray-800", children: ((ee = M["Permission ID"]) == null ? void 0 : ee.split(".").slice(1).join(" ")) || M["Permission ID"] }),
                        /* @__PURE__ */ e.jsx(
                          "span",
                          {
                            className: "cil-mt-1 cil-w-fit cil-px-3 cil-py-1 cil-rounded-lg cil-text-xs cil-font-extrabold cil-uppercase cil-tracking-widest",
                            style: { backgroundColor: f, color: "white" },
                            children: M["Action Key"]
                          }
                        )
                      ]
                    },
                    ie
                  );
                }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-py-8 cil-text-center", children: [
                  /* @__PURE__ */ e.jsx(ii, { className: "cil-w-12 cil-h-12 cil-mx-auto cil-mb-3 cil-text-gray-300" }),
                  /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-400 cil-italic", children: s.noPermissions })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2", style: { borderColor: `${f}20` }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${f}15` }, children: /* @__PURE__ */ e.jsx(li, { className: "cil-w-6 cil-h-6", style: { color: f } }) }),
                /* @__PURE__ */ e.jsx("h2", { className: "cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide", children: s.activeSessions })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "cil-space-y-3 cil-max-h-[500px] cil-overflow-y-auto cil-pr-2 cil-custom-scrollbar", children: o.length > 0 ? o.map((M) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "cil-p-4 cil-border-2 cil-rounded-2xl cil-flex cil-justify-between cil-items-center cil-group cil-hover:shadow-lg cil-transition-all",
                  style: {
                    backgroundColor: `${f}05`,
                    borderColor: `${f}15`
                  },
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-flex-1", children: [
                      /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${f}10`, color: f }, children: K(M["Device Name"]) }),
                      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1.5 cil-flex-1", children: [
                        /* @__PURE__ */ e.jsx("div", { className: "cil-font-black cil-text-gray-800 cil-text-sm", title: M["Device Name"], children: w(M["Device Name"]) }),
                        /* @__PURE__ */ e.jsxs("div", { className: "cil-text-xs cil-text-gray-600 cil-font-semibold cil-flex cil-items-center cil-gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "cil-w-2 cil-h-2 cil-rounded-full cil-bg-green-500" }),
                          M.IP
                        ] }),
                        M["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "cil-text-xs cil-text-gray-500 cil-italic", children: [
                          s.expiry,
                          ": ",
                          new Date(M["Expiration Date"]).toLocaleDateString()
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => oe(!1, [M._id]),
                        disabled: A,
                        className: "cil-p-3 cil-text-red-500 cil-hover:bg-red-50 cil-rounded-xl cil-transition-all cil-opacity-0 cil-group-hover:opacity-100 cil-focus:opacity-100 cil-hover:scale-110",
                        title: s.logoutThisSession,
                        children: /* @__PURE__ */ e.jsx(di, { className: "cil-w-5 cil-h-5" })
                      }
                    )
                  ]
                },
                M._id
              )) : /* @__PURE__ */ e.jsxs("div", { className: "cil-py-12 cil-text-center", children: [
                /* @__PURE__ */ e.jsx(li, { className: "cil-w-12 cil-h-12 cil-mx-auto cil-mb-3 cil-text-gray-300" }),
                /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-400 cil-italic", children: s.noSessions })
              ] }) }),
              o.length > 1 && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => oe(!0),
                  disabled: A,
                  className: "cil-w-full cil-py-3 cil-text-sm cil-uppercase cil-tracking-widest cil-font-extrabold cil-text-white cil-rounded-2xl cil-transition-all cil-active:scale-95 cil-hover:brightness-110 cil-shadow-lg",
                  style: { backgroundColor: "#ef4444" },
                  children: A ? /* @__PURE__ */ e.jsxs("span", { className: "cil-flex cil-items-center cil-justify-center cil-gap-2", children: [
                    /* @__PURE__ */ e.jsx(Ze, { className: "cil-w-4 cil-h-4 cil-animate-spin" }),
                    s.loggingOut
                  ] }) : s.logoutAllSessions
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-mt-12 cil-flex cil-flex-col sm:cil-flex-row cil-gap-4 cil-justify-center cil-pt-8 cil-border-t-2", style: { borderColor: `${f}10` }, children: [
            h && /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: h,
                className: "cil-px-10 cil-py-4 cil-rounded-2xl cil-font-bold cil-text-base cil-transition-all cil-border-2 cil-border-gray-300 cil-hover:border-gray-400 cil-hover:bg-gray-50 cil-active:scale-95 cil-shadow-md cil-hover:shadow-lg",
                children: s.closeProfile
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => v && v("change-password"),
                className: "cil-px-10 cil-py-4 cil-rounded-2xl cil-font-bold cil-text-base cil-text-white cil-shadow-lg cil-transition-all cil-active:scale-95 cil-hover:brightness-110 cil-hover:shadow-xl",
                style: { backgroundColor: f },
                children: s.changePassword
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  ol as AppGrid,
  je as AuthError,
  cl as ChangePassword,
  sl as EmailVerification,
  ll as ForgotPassword,
  el as Login,
  rl as ResetPassword,
  il as SignUp,
  gi as SocialAuthButtons,
  nl as UserMenu,
  al as UserProfile,
  tl as WaitingConfirmation,
  xi as getValidProfileImageUrl,
  Ji as isValidUrl,
  ne as translations,
  ge as useAuthApi,
  ve as useSecurity,
  Xi as useUserProfile
};
