import pe, { useEffect as me, useState as k, useRef as Re } from "react";
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
  var s = pe, d = Symbol.for("react.element"), i = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, m = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(b, g, P) {
    var o, w = {}, n = null, t = null;
    P !== void 0 && (n = "" + P), g.key !== void 0 && (n = "" + g.key), g.ref !== void 0 && (t = g.ref);
    for (o in g) y.call(g, o) && !u.hasOwnProperty(o) && (w[o] = g[o]);
    if (b && b.defaultProps) for (o in g = b.defaultProps, g) w[o] === void 0 && (w[o] = g[o]);
    return { $$typeof: d, type: b, key: n, ref: t, props: w, _owner: m.current };
  }
  return Se.Fragment = i, Se.jsx = p, Se.jsxs = p, Se;
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
    var s = pe, d = Symbol.for("react.element"), i = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), b = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), o = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), c = Symbol.iterator, T = "@@iterator";
    function f(r) {
      if (r === null || typeof r != "object")
        return null;
      var a = c && r[c] || r[T];
      return typeof a == "function" ? a : null;
    }
    var N = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(r) {
      {
        for (var a = arguments.length, x = new Array(a > 1 ? a - 1 : 0), S = 1; S < a; S++)
          x[S - 1] = arguments[S];
        O("error", r, x);
      }
    }
    function O(r, a, x) {
      {
        var S = N.ReactDebugCurrentFrame, U = S.getStackAddendum();
        U !== "" && (a += "%s", x = x.concat([U]));
        var q = x.map(function(D) {
          return String(D);
        });
        q.unshift("Warning: " + a), Function.prototype.apply.call(console[r], console, q);
      }
    }
    var l = !1, L = !1, F = !1, j = !1, B = !1, $;
    $ = Symbol.for("react.module.reference");
    function H(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === y || r === u || B || r === m || r === P || r === o || j || r === t || l || L || F || typeof r == "object" && r !== null && (r.$$typeof === n || r.$$typeof === w || r.$$typeof === p || r.$$typeof === b || r.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === $ || r.getModuleId !== void 0));
    }
    function C(r, a, x) {
      var S = r.displayName;
      if (S)
        return S;
      var U = a.displayName || a.name || "";
      return U !== "" ? x + "(" + U + ")" : x;
    }
    function _(r) {
      return r.displayName || "Context";
    }
    function v(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case y:
          return "Fragment";
        case i:
          return "Portal";
        case u:
          return "Profiler";
        case m:
          return "StrictMode";
        case P:
          return "Suspense";
        case o:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case b:
            var a = r;
            return _(a) + ".Consumer";
          case p:
            var x = r;
            return _(x._context) + ".Provider";
          case g:
            return C(r, r.render, "ForwardRef");
          case w:
            var S = r.displayName || null;
            return S !== null ? S : v(r.type) || "Memo";
          case n: {
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
    var R = Object.assign, oe = 0, ne, z, W, K, de, ue, ie;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function ee() {
      {
        if (oe === 0) {
          ne = console.log, z = console.info, W = console.warn, K = console.error, de = console.group, ue = console.groupCollapsed, ie = console.groupEnd;
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
        oe++;
      }
    }
    function Q() {
      {
        if (oe--, oe === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, r, {
              value: ne
            }),
            info: R({}, r, {
              value: z
            }),
            warn: R({}, r, {
              value: W
            }),
            error: R({}, r, {
              value: K
            }),
            group: R({}, r, {
              value: de
            }),
            groupCollapsed: R({}, r, {
              value: ue
            }),
            groupEnd: R({}, r, {
              value: ie
            })
          });
        }
        oe < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = N.ReactCurrentDispatcher, he;
    function Y(r, a, x) {
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
    function ke(r, a) {
      if (!r || X)
        return "";
      {
        var x = re.get(r);
        if (x !== void 0)
          return x;
      }
      var S;
      X = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = Z.current, Z.current = null, ee();
      try {
        if (a) {
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
          for (var I = ae.stack.split(`
`), te = S.stack.split(`
`), G = I.length - 1, J = te.length - 1; G >= 1 && J >= 0 && I[G] !== te[J]; )
            J--;
          for (; G >= 1 && J >= 0; G--, J--)
            if (I[G] !== te[J]) {
              if (G !== 1 || J !== 1)
                do
                  if (G--, J--, J < 0 || I[G] !== te[J]) {
                    var ce = `
` + I[G].replace(" at new ", " at ");
                    return r.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", r.displayName)), typeof r == "function" && re.set(r, ce), ce;
                  }
                while (G >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        X = !1, Z.current = q, Q(), Error.prepareStackTrace = U;
      }
      var Ce = r ? r.displayName || r.name : "", we = Ce ? Y(Ce) : "";
      return typeof r == "function" && re.set(r, we), we;
    }
    function Me(r, a, x) {
      return ke(r, !1);
    }
    function A(r) {
      var a = r.prototype;
      return !!(a && a.isReactComponent);
    }
    function E(r, a, x) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return ke(r, A(r));
      if (typeof r == "string")
        return Y(r);
      switch (r) {
        case P:
          return Y("Suspense");
        case o:
          return Y("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case g:
            return Me(r.render);
          case w:
            return E(r.type, a, x);
          case n: {
            var S = r, U = S._payload, q = S._init;
            try {
              return E(q(U), a, x);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, se = {}, _e = N.ReactDebugCurrentFrame;
    function Le(r) {
      if (r) {
        var a = r._owner, x = E(r.type, r._source, a ? a.type : null);
        _e.setExtraStackFrame(x);
      } else
        _e.setExtraStackFrame(null);
    }
    function hr(r, a, x, S, U) {
      {
        var q = Function.call.bind(V);
        for (var D in r)
          if (q(r, D)) {
            var I = void 0;
            try {
              if (typeof r[D] != "function") {
                var te = Error((S || "React class") + ": " + x + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw te.name = "Invariant Violation", te;
              }
              I = r[D](a, D, S, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              I = G;
            }
            I && !(I instanceof Error) && (Le(U), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", x, D, typeof I), Le(null)), I instanceof Error && !(I.message in se) && (se[I.message] = !0, Le(U), h("Failed %s type: %s", x, I.message), Le(null));
          }
      }
    }
    var pr = Array.isArray;
    function Oe(r) {
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
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(r)), ze(r);
    }
    var Ue = N.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, qe;
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
          qe || (qe = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        x.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Sr = function(r, a, x, S, U, q, D) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: r,
        key: a,
        ref: x,
        props: D,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function Er(r, a, x, S, U) {
      {
        var q, D = {}, I = null, te = null;
        x !== void 0 && (We(x), I = "" + x), jr(a) && (We(a.key), I = "" + a.key), wr(a) && (te = a.ref, Nr(a, U));
        for (q in a)
          V.call(a, q) && !vr.hasOwnProperty(q) && (D[q] = a[q]);
        if (r && r.defaultProps) {
          var G = r.defaultProps;
          for (q in G)
            D[q] === void 0 && (D[q] = G[q]);
        }
        if (I || te) {
          var J = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          I && Cr(D, J), te && kr(D, J);
        }
        return Sr(r, I, te, U, S, Ue.current, D);
      }
    }
    var Ie = N.ReactCurrentOwner, He = N.ReactDebugCurrentFrame;
    function Ne(r) {
      if (r) {
        var a = r._owner, x = E(r.type, r._source, a ? a.type : null);
        He.setExtraStackFrame(x);
      } else
        He.setExtraStackFrame(null);
    }
    var Te;
    Te = !1;
    function De(r) {
      return typeof r == "object" && r !== null && r.$$typeof === d;
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
        r && r._owner && r._owner !== Ie.current && (S = " It was passed a child from " + v(r._owner.type) + "."), Ne(r), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, S), Ne(null);
      }
    }
    function Ge(r, a) {
      {
        if (typeof r != "object")
          return;
        if (Oe(r))
          for (var x = 0; x < r.length; x++) {
            var S = r[x];
            De(S) && Xe(S, a);
          }
        else if (De(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var U = f(r);
          if (typeof U == "function" && U !== r.entries)
            for (var q = U.call(r), D; !(D = q.next()).done; )
              De(D.value) && Xe(D.value, a);
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
        else if (typeof a == "object" && (a.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === w))
          x = a.propTypes;
        else
          return;
        if (x) {
          var S = v(a);
          hr(x, r.props, "prop", S, r);
        } else if (a.PropTypes !== void 0 && !Te) {
          Te = !0;
          var U = v(a);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rr(r) {
      {
        for (var a = Object.keys(r.props), x = 0; x < a.length; x++) {
          var S = a[x];
          if (S !== "children" && S !== "key") {
            Ne(r), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Ne(null);
            break;
          }
        }
        r.ref !== null && (Ne(r), h("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    var Je = {};
    function Qe(r, a, x, S, U, q) {
      {
        var D = H(r);
        if (!D) {
          var I = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var te = Pr();
          te ? I += te : I += Be();
          var G;
          r === null ? G = "null" : Oe(r) ? G = "array" : r !== void 0 && r.$$typeof === d ? (G = "<" + (v(r.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : G = typeof r, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, I);
        }
        var J = Er(r, a, x, U, q);
        if (J == null)
          return J;
        if (D) {
          var ce = a.children;
          if (ce !== void 0)
            if (S)
              if (Oe(ce)) {
                for (var Ce = 0; Ce < ce.length; Ce++)
                  Ge(ce[Ce], r);
                Object.freeze && Object.freeze(ce);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(ce, r);
        }
        if (V.call(a, "key")) {
          var we = v(r), ae = Object.keys(a).filter(function(Dr) {
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
        return r === y ? Rr(J) : Lr(J), J;
      }
    }
    function Ar(r, a, x) {
      return Qe(r, a, x, !0);
    }
    function Mr(r, a, x) {
      return Qe(r, a, x, !1);
    }
    var Or = Mr, Ir = Ar;
    Ee.Fragment = y, Ee.jsx = Or, Ee.jsxs = Ir;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? Ve.exports = Yr() : Ve.exports = qr();
var e = Ve.exports, ur = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ar = pe.createContext && pe.createContext(ur), ve = function() {
  return ve = Object.assign || function(s) {
    for (var d, i = 1, y = arguments.length; i < y; i++) {
      d = arguments[i];
      for (var m in d) Object.prototype.hasOwnProperty.call(d, m) && (s[m] = d[m]);
    }
    return s;
  }, ve.apply(this, arguments);
}, Hr = function(s, d) {
  var i = {};
  for (var y in s) Object.prototype.hasOwnProperty.call(s, y) && d.indexOf(y) < 0 && (i[y] = s[y]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var m = 0, y = Object.getOwnPropertySymbols(s); m < y.length; m++)
    d.indexOf(y[m]) < 0 && Object.prototype.propertyIsEnumerable.call(s, y[m]) && (i[y[m]] = s[y[m]]);
  return i;
};
function fr(s) {
  return s && s.map(function(d, i) {
    return pe.createElement(d.tag, ve({
      key: i
    }, d.attr), fr(d.child));
  });
}
function mr(s) {
  return function(d) {
    return pe.createElement(Br, ve({
      attr: ve({}, s.attr)
    }, d), fr(s.child));
  };
}
function Br(s) {
  var d = function(i) {
    var y = s.attr, m = s.size, u = s.title, p = Hr(s, ["attr", "size", "title"]), b = m || i.size || "1em", g;
    return i.className && (g = i.className), s.className && (g = (g ? g + " " : "") + s.className), pe.createElement("svg", ve({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, i.attr, y, p, {
      className: g,
      style: ve(ve({
        color: s.color || i.color
      }, i.style), s.style),
      height: b,
      width: b,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && pe.createElement("title", null, u), s.children);
  };
  return ar !== void 0 ? pe.createElement(ar.Consumer, null, function(i) {
    return d(i);
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
function be(s) {
  const d = !!s && s.length > 0;
  return d || console.warn("⚠️ Core Identity Library: Falta el token de autorización (apiToken) en las props del componente."), { isAuthorized: d, apiToken: s };
}
function ge(s, d) {
  const { isAuthorized: i } = be(d), y = async (n, t = {}) => {
    const { token: c, ...T } = t;
    try {
      const f = {
        "Content-Type": "application/json",
        "X-API-KEY": d,
        "X-REQUEST-URL": typeof window < "u" ? window.location.origin.replace(/\/$/, "") : "",
        ...t.headers
      };
      c && (f.Authorization = `Bearer ${c}`);
      const N = await fetch(`${s}${n}`, {
        ...T,
        headers: f,
        credentials: "include"
      });
      let h;
      const O = N.headers.get("content-type");
      if (O && O.includes("application/json"))
        try {
          h = await N.json();
        } catch (l) {
          console.error("Failed to parse JSON response", l), h = { message: await N.text() };
        }
      else
        h = { message: await N.text() };
      if (!N.ok) {
        const l = new Error(h.message || h.error || `Error ${N.status}`);
        throw l.status = N.status, l.data = h, l;
      }
      return h;
    } catch (f) {
      if (f.name === "TypeError" && (f.message.includes("Failed to fetch") || f.message.includes("NetworkError"))) {
        const N = new Error("Connection Error");
        throw N.isConnectionError = !0, N;
      }
      throw f;
    }
  }, m = async (n, t, c = {}) => y(n, {
    method: "POST",
    body: t ? JSON.stringify(t) : void 0,
    ...c
  }), u = async (n, t = {}) => y(n, {
    method: "GET",
    ...t
  });
  return {
    post: m,
    get: u,
    verifySession: async (n, t) => m("/verify-session", { email: t }, { token: n }),
    getUserContext: async (n, t) => m("/user-context", { email: t }, { token: n }),
    logout: async (n, t) => m("/logout", { email: t }, { token: n }),
    changePassword: async (n) => {
      const { token: t, ...c } = n;
      return m("/change-password", c, { token: t });
    },
    getAppColors: async () => u("/colors-app"),
    getMe: async (n, t) => m("/me", { email: n }, { token: t })
  };
}
function gr({
  apiBaseUrl: s,
  user: d = {},
  primaryColor: i = "#3b82f6",
  onSuccess: y,
  onError: m,
  lang: u = "en",
  apiToken: p,
  texts: b = {}
}) {
  var c;
  const { isAuthorized: g } = be(p), P = { ...le[u], ...b }, { post: o } = ge(s, p), w = ((c = d.app_info) == null ? void 0 : c.primaryColor) || i;
  me(() => {
    const T = (f) => {
      if (f.origin === window.location.origin && f.data.type === "OAUTH_SUCCESS") {
        const { token: N, user: h } = f.data.payload;
        console.log("OAuth Login Successful:", h), y && y({
          success: !0,
          token: N,
          user: h,
          email: h == null ? void 0 : h.email,
          // Ensure compatibility with existing success handlers
          provider: "Social"
        });
      }
    };
    return window.addEventListener("message", T, !1), () => window.removeEventListener("message", T);
  }, [y]);
  const n = (T) => {
    o("/login", { provider: T }).then((f) => {
      const N = f.auth_url || f.redirect_url;
      if (N) {
        const l = window.screen.width / 2 - 300, L = window.screen.height / 2 - 700 / 2;
        window.open(
          N,
          "login_popup",
          `width=600,height=700,left=${l},top=${L},status=no,resizable=yes,scrollbars=yes`
        );
      } else {
        const h = f.error || f.message || (u === "es" ? "Error al iniciar sesión social" : "Social login error");
        m && m(h);
      }
    }).catch((f) => {
      console.error("⚠️ Social Auth Error:", f), m && m(f.message || "Error");
    });
  }, t = w ? { borderColor: w, color: w } : {};
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        className: "w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors",
        style: t,
        onClick: () => n("Google"),
        "data-testid": "button-google-login",
        children: [
          /* @__PURE__ */ e.jsx(Kr, { className: "h-4 w-4" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            P.continueWith,
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
        style: t,
        onClick: () => n("Microsoft"),
        "data-testid": "button-microsoft-login",
        children: [
          /* @__PURE__ */ e.jsx("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" }) }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            P.continueWith,
            " Microsoft"
          ] })
        ]
      }
    )
  ] });
}
let fe = null, $e = null;
function xe(s, d, i, y, m) {
  var g, P, o, w;
  const { getAppColors: u } = ge(s, d), [p, b] = k({
    primaryColor: ((g = i == null ? void 0 : i.app_info) == null ? void 0 : g.primaryColor) || ((P = i == null ? void 0 : i.app_info) == null ? void 0 : P.primary_color) || (fe == null ? void 0 : fe.primaryColor) || y,
    backgroundColor: ((o = i == null ? void 0 : i.app_info) == null ? void 0 : o.backgroundColor) || ((w = i == null ? void 0 : i.app_info) == null ? void 0 : w.background_color) || (fe == null ? void 0 : fe.backgroundColor) || m,
    isLoading: !fe && !(i != null && i.app_info) && !!(s && d)
  });
  return me(() => {
    if (i != null && i.app_info) {
      const n = i.app_info.primaryColor || i.app_info.primary_color, t = i.app_info.backgroundColor || i.app_info.background_color;
      if ((n || t) && (b((c) => ({
        primaryColor: n || c.primaryColor,
        backgroundColor: t || c.backgroundColor,
        isLoading: !1
      })), n && t))
        return;
    }
    if (fe && !(i != null && i.app_info)) {
      b({
        primaryColor: fe.primaryColor,
        backgroundColor: fe.backgroundColor,
        isLoading: !1
      });
      return;
    }
    s && d ? (async () => {
      $e || ($e = u().catch((T) => (console.error("Failed to fetch app colors:", T), null)));
      const t = await $e, c = {
        primaryColor: (t == null ? void 0 : t.primaryColor) || (t == null ? void 0 : t.primary_color) || y,
        backgroundColor: (t == null ? void 0 : t.backgroundColor) || (t == null ? void 0 : t.background_color) || m
      };
      fe = c, b({ ...c, isLoading: !1 });
    })() : b((n) => ({ ...n, isLoading: !1 }));
  }, [i == null ? void 0 : i.app_info, y, m, s, d]), p;
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
  primaryColor: i = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: m,
  onError: u,
  onNavigate: p,
  apiToken: b,
  lang: g = "en",
  texts: P = {}
}) {
  const o = { ...le[g], ...P }, { isAuthorized: w } = be(b), { primaryColor: n, backgroundColor: t, isLoading: c } = xe(s, b, d, i, y), { post: T } = ge(s, b), [f, N] = k(""), [h, O] = k(""), [l, L] = k(!1), [F, j] = k("");
  if (c) return null;
  if (!w)
    return /* @__PURE__ */ e.jsx(je, { lang: g });
  const B = async (_) => {
    _.preventDefault(), L(!0), j("");
    try {
      const v = await T("/login", {
        provider: "Email",
        email: f,
        password: h
      });
      if (v.success)
        m && m({ ...v, email: f });
      else {
        const R = v.message || v.error || o.unknownError;
        j(R), u && u(R), L(!1);
      }
    } catch (v) {
      console.error("⚠️ Login Error:", v);
      let R = v.message;
      v.isConnectionError ? R = o.connectionError : v.status >= 500 ? R = o.serverError : (!R || R === "Error " + v.status) && (R = o.unknownError), j(R), u && u(R), L(!1);
    }
  }, $ = {
    backgroundColor: n,
    color: "#ffffff"
  }, H = {
    backgroundColor: t
  }, C = {
    color: n
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: H, children: [
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
          onSuccess: m,
          onError: (_) => {
            j(_), u && u(_);
          },
          lang: g,
          apiToken: b,
          texts: P
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "relative py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full border-t border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "px-2 text-gray-500", style: H, children: o.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: B, className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(ye, { message: F }),
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
              onChange: (_) => {
                N(_.target.value), F && j("");
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
              onChange: (_) => {
                O(_.target.value), F && j("");
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
            style: C,
            children: o.forgotPassword
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
            style: $,
            disabled: l,
            children: l ? o.loading : o.loginButton
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
          style: C,
          children: o.signUp
        }
      )
    ] }) })
  ] });
}
function rs({
  apiBaseUrl: s,
  user: d = {},
  primaryColor: i = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: m,
  onError: u,
  onNavigate: p,
  apiToken: b,
  lang: g = "en",
  texts: P = {}
}) {
  const o = { ...le[g], ...P }, { isAuthorized: w } = be(b), { primaryColor: n, backgroundColor: t, isLoading: c } = xe(s, b, d, i, y), { post: T } = ge(s, b), [f, N] = k(!1), [h, O] = k(""), [l, L] = k({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  if (c) return null;
  if (!w)
    return /* @__PURE__ */ e.jsx(je, { lang: g });
  const F = async (C) => {
    if (C.preventDefault(), O(""), l.password !== l.confirmPassword) {
      const _ = o.passwordsDontMatch;
      O(_), u && u(_);
      return;
    }
    N(!0);
    try {
      const _ = await T("/register", {
        firstName: l.firstName,
        lastName: l.lastName,
        email: l.email,
        password: l.password
      });
      if (_.success)
        m && m({ ..._, email: l.email });
      else {
        const v = _.message || _.error || o.unknownError;
        O(v), u && u(v), N(!1);
      }
    } catch (_) {
      console.error("⚠️ SignUp Error:", _);
      let v = _.message;
      _.isConnectionError ? v = o.connectionError : _.status >= 500 ? v = o.serverError : (!v || v === "Error " + _.status) && (v = o.unknownError), O(v), u && u(v), N(!1);
    }
  }, j = (C, _) => {
    L((v) => ({ ...v, [C]: _ })), h && O("");
  }, B = {
    backgroundColor: n,
    color: "#ffffff"
  }, $ = {
    backgroundColor: t
  }, H = {
    color: n
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: $, children: [
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
          onSuccess: m,
          onError: (C) => {
            O(C), u && u(C);
          },
          lang: g,
          apiToken: b,
          texts: P
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "relative py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-full border-t border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "px-2 text-gray-500", style: $, children: o.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: F, className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(ye, { message: h }),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: o.firstName }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                value: l.firstName,
                onChange: (C) => j("firstName", C.target.value),
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
                value: l.lastName,
                onChange: (C) => j("lastName", C.target.value),
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
              value: l.email,
              onChange: (C) => j("email", C.target.value),
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
              value: l.password,
              onChange: (C) => j("password", C.target.value),
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
              value: l.confirmPassword,
              onChange: (C) => j("confirmPassword", C.target.value),
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
            style: B,
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
          style: H,
          children: o.login
        }
      )
    ] }) })
  ] });
}
function ss({
  apiBaseUrl: s,
  user: d = {},
  primaryColor: i = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: m,
  onError: u,
  onNavigate: p,
  apiToken: b,
  lang: g = "en",
  texts: P = {}
}) {
  const o = { ...le[g], ...P }, { isAuthorized: w } = be(b), { primaryColor: n, backgroundColor: t, isLoading: c } = xe(s, b, d, i, y), { post: T } = ge(s, b), [f, N] = k(""), [h, O] = k(!1), [l, L] = k(!1), [F, j] = k("");
  if (c) return null;
  if (!w)
    return /* @__PURE__ */ e.jsx(je, { lang: g });
  const B = async (_) => {
    _.preventDefault(), O(!0), j("");
    try {
      const v = await T("/forgot-password", { email: f });
      if (v.success)
        L(!0), m && m({ ...v, email: f });
      else {
        const R = v.message || v.error || o.unknownError;
        j(R), u && u(R), O(!1);
      }
    } catch (v) {
      console.error("⚠️ ForgotPassword Error:", v);
      let R = v.message;
      v.isConnectionError ? R = o.connectionError : v.status >= 500 ? R = o.serverError : (!R || R === "Error " + v.status) && (R = o.unknownError), j(R), u && u(R), O(!1);
    }
  }, $ = {
    backgroundColor: n,
    color: "#ffffff"
  }, H = {
    backgroundColor: t
  }, C = {
    color: n
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: H, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6 text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: o.forgotPassword }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: l ? o.checkEmail : o.resetPasswordInstructions })
    ] }),
    l ? /* @__PURE__ */ e.jsxs("div", { className: "text-center space-y-6 py-4", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8 text-blue-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: o.verifyEmailMessage }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => p && p("reset-password"),
            className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
            style: $,
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
    ] }) : /* @__PURE__ */ e.jsxs("form", { onSubmit: B, className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: F }),
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
            onChange: (_) => {
              N(_.target.value), F && j("");
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
          style: C,
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
  primaryColor: i = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: m,
  onError: u,
  onNavigate: p,
  apiToken: b,
  lang: g = "en",
  email: P = "",
  authToken: o = "",
  // Auth token passed from consumer
  user: w = {},
  initialWaitSeconds: n = 0,
  texts: t = {}
}) {
  const c = { ...le[g], ...t }, { isAuthorized: T } = be(b), { primaryColor: f, backgroundColor: N, isLoading: h } = xe(s, b, w, i, y), { post: O } = ge(s, b), [l, L] = k({
    token: d,
    newPassword: "",
    confirmPassword: ""
  }), [F, j] = k(!1), [B, $] = k(!1), [H, C] = k(!1), [_, v] = k([]), [R, oe] = k(!1), [ne, z] = k(""), [W, K] = k(""), [de, ue] = k(o), [ie, M] = k(n), [ee, Q] = k(c.resetPasswordSubtitle), Z = Re(null);
  if (me(() => (ie > 0 && (Z.current = setInterval(() => {
    M((A) => A <= 1 ? (clearInterval(Z.current), 0) : A - 1);
  }, 1e3)), () => clearInterval(Z.current)), [ie]), me(() => {
    o && ue(o);
  }, [o]), h) return null;
  if (!T)
    return /* @__PURE__ */ e.jsx(je, { lang: g });
  const he = (A) => {
    const E = Math.floor(A / 60), V = A % 60;
    return `${E.toString().padStart(2, "0")}:${V.toString().padStart(2, "0")}`;
  }, Y = async () => {
    if (!(!P || ie > 0)) {
      $(!0), z("");
      try {
        const A = await O("/forgot-password", { email: P });
        if (A.success)
          A.wait_seconds && M(A.wait_seconds), Q(A.message || c.resendSent);
        else {
          const E = A.message || A.error || c.connectionError;
          z(E), A.wait_seconds && M(A.wait_seconds), u && u(E);
        }
      } catch (A) {
        console.error("⚠️ Resend Reset Error:", A);
        let E = A.message;
        A.isConnectionError ? E = c.connectionError : A.status >= 500 ? E = c.serverError : (!E || E === "Error " + A.status) && (E = c.unknownError), z(E), u && u(E);
      } finally {
        $(!1);
      }
    }
  }, X = async (A) => {
    if (A.preventDefault(), z(""), l.newPassword !== l.confirmPassword) {
      const E = c.passwordsDontMatch;
      z(E), u && u(E);
      return;
    }
    if (!l.token) {
      const E = c.enterRecoveryCode;
      z(E), u && u(E);
      return;
    }
    j(!0);
    try {
      const E = await O("/reset-password", {
        token: l.token,
        newPassword: l.newPassword,
        confirmPassword: l.confirmPassword
      });
      if (E.success || E.status)
        C(!0), E.active_sessions && v(E.active_sessions), E.token && ue(E.token), m && m(E);
      else {
        const V = E.message || E.error || c.unknownError;
        z(V), u && u(V), j(!1);
      }
    } catch (E) {
      console.error("⚠️ ResetPassword Error:", E);
      let V = E.message;
      E.isConnectionError ? V = c.connectionError : E.status >= 500 ? V = c.serverError : (!V || V === "Error " + E.status) && (V = c.unknownError), z(V), u && u(V), j(!1);
    }
  }, re = async (A = !1, E = []) => {
    if (!de) {
      const V = c.noSessions;
      z(V), u && u(V);
      return;
    }
    oe(!0), z(""), K("");
    try {
      const V = await O("/logout_sessions", {
        email: P || "",
        all_sessions: A,
        session_ids: E
      }, { token: de });
      if (V.success)
        v(A ? [] : (se) => se.filter((_e) => !E.includes(_e._id))), K(c.logoutSuccess);
      else {
        const se = V.message || V.error || "Logout failed";
        z(se), u && u(se);
      }
    } catch (V) {
      console.error("⚠️ Logout Sessions Error:", V);
      let se = V.message;
      V.isConnectionError ? se = c.connectionError : V.status >= 500 ? se = c.serverError : (!se || se === "Error " + V.status) && (se = c.unknownError), z(se), u && u(se);
    } finally {
      oe(!1);
    }
  }, Pe = {
    backgroundColor: f,
    color: "#ffffff"
  }, ke = {
    backgroundColor: N
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
      /* @__PURE__ */ e.jsx("div", { className: "space-y-3 max-h-60 overflow-y-auto pr-1", children: _.map((A) => {
        var E;
        return /* @__PURE__ */ e.jsxs("div", { className: "p-3 border rounded-md text-xs bg-gray-50 flex justify-between items-center", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ e.jsx("div", { className: "font-semibold text-gray-700 truncate max-w-[180px]", title: A["Device Name"], children: ((E = A["Device Name"]) == null ? void 0 : E.split(" ")[0]) || c.deviceName }),
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
              onClick: () => re(!1, [A._id]),
              disabled: R,
              className: "px-2 py-1 text-red-600 hover:bg-red-50 rounded transition-colors",
              children: c.logoutThisSession
            }
          )
        ] }, A._id);
      }) }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => re(!0),
          disabled: R,
          className: "w-full py-2 text-sm text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition-colors font-medium",
          children: R ? c.loggingOut : c.logoutAllSessions
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
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: ee })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: X, className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: ne }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: c.verificationCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: l.token,
            onChange: (A) => L({ ...l, token: A.target.value }),
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
            value: l.newPassword,
            onChange: (A) => L({ ...l, newPassword: A.target.value }),
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
            value: l.confirmPassword,
            onChange: (A) => L({ ...l, confirmPassword: A.target.value }),
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
          disabled: F || !l.token,
          children: F ? c.resetting : c.resetPasswordTitle
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
            onClick: Y,
            disabled: B || !P,
            className: "text-sm font-medium hover:underline",
            style: Me,
            children: B ? c.loading : c.resendCode
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
  primaryColor: i = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: m,
  onError: u,
  onNavigate: p,
  apiToken: b,
  // X-API-KEY for headers
  authToken: g,
  // User session token
  email: P,
  // User email
  lang: o = "en",
  texts: w = {}
}) {
  const n = { ...le[o], ...w }, { isAuthorized: t } = be(b), { primaryColor: c, backgroundColor: T, isLoading: f } = xe(s, b, d, i, y), { changePassword: N } = ge(s, b), [h, O] = k({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }), [l, L] = k(!1), [F, j] = k(!1), [B, $] = k(""), [H, C] = k("");
  if (f) return null;
  if (!t)
    return /* @__PURE__ */ e.jsx(je, { lang: o });
  const _ = async (z) => {
    if (z.preventDefault(), $(""), C(""), h.newPassword !== h.confirmPassword) {
      const W = n.passwordsDontMatch;
      $(W), u && u(W);
      return;
    }
    L(!0);
    try {
      const W = await N({
        email: P || d.email,
        old_password: h.oldPassword,
        new_password: h.newPassword,
        token: g
        // Now using user session token, not api key
      });
      if (W.success)
        j(!0), C(n.passwordChanged), m && m(W), O({ oldPassword: "", newPassword: "", confirmPassword: "" }), setTimeout(() => C(""), 5e3);
      else {
        const K = W.message || W.error || n.unknownError;
        $(K), u && u(K);
      }
    } catch (W) {
      console.error("⚠️ ChangePassword Error:", W);
      let K = W.message;
      W.isConnectionError ? K = n.connectionError : W.status >= 500 ? K = n.serverError : (!K || K === "Error " + W.status) && (K = n.unknownError), $(K), u && u(K);
    } finally {
      L(!1);
    }
  }, v = (z, W) => {
    O((K) => ({ ...K, [z]: W })), B && $("");
  }, R = {
    backgroundColor: c,
    color: "#ffffff"
  }, oe = {
    backgroundColor: T
  }, ne = {
    color: c
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border", style: oe, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6 text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: n.changePassword }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: n.changePasswordSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: _, className: "space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: B }),
      /* @__PURE__ */ e.jsx(Ae, { message: H }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: n.oldPassword }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "password",
            value: h.oldPassword,
            onChange: (z) => v("oldPassword", z.target.value),
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
            onChange: (z) => v("newPassword", z.target.value),
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
          style: R,
          disabled: l,
          children: l ? n.loading : n.changePassword
        }
      ),
      p && /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => p("login"),
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
  user: i = {},
  primaryColor: y = "#3b82f6",
  backgroundColor: m = "#ffffff",
  onSuccess: u,
  onError: p,
  onNavigate: b,
  lang: g = "en",
  apiToken: P,
  texts: o = {}
}) {
  const w = { ...le[g], ...o }, { isAuthorized: n } = be(P), { primaryColor: t, backgroundColor: c, isLoading: T } = xe(s, P, i, y, m), { post: f } = ge(s, P), [N, h] = k(d ? "verifying" : "idle"), [O, l] = k(""), [L, F] = k("");
  if (me(() => {
    d && N === "verifying" && j();
  }, [d]), T) return null;
  if (!n)
    return /* @__PURE__ */ e.jsx(je, { lang: g });
  const j = async () => {
    F("");
    try {
      const H = await f("/verify-email", { token: d });
      if (H.success)
        h("success"), l(H.message || w.verifySuccess), u && u(H);
      else {
        h("error");
        const C = H.message || H.error || w.verifyError;
        l(C), F(C), p && p(C);
      }
    } catch (H) {
      console.error("⚠️ Verification Error:", H), h("error");
      const C = w.connectionError;
      l(C), F(C), p && p(C);
    }
  }, B = {
    backgroundColor: t,
    color: "#ffffff"
  }, $ = {
    backgroundColor: c
  };
  return d ? /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: $, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: N === "verifying" ? w.verifying : w.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: N === "verifying" ? w.verifyingSubtitle : O })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "py-6 flex flex-col items-center", children: [
      /* @__PURE__ */ e.jsx(ye, { message: L }),
      N === "verifying" && /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-500", style: { borderTopColor: t } }),
      N === "success" && /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      N === "error" && /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })
    ] }),
    N !== "verifying" && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => b && b("login"),
        className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        style: B,
        children: w.backToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: $, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: w.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: w.checkEmail })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-6 py-4 flex flex-col items-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 max-w-sm", children: w.verifyEmailMessage }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => b && b("login"),
          className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-200 hover:bg-gray-50",
          children: w.backToLogin
        }
      )
    ] })
  ] });
}
function as({
  apiBaseUrl: s,
  user: d = {},
  primaryColor: i = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onNavigate: m,
  lang: u = "en",
  userEmail: p,
  initialMessage: b,
  initialWaitSeconds: g = 0,
  onSuccess: P,
  onError: o,
  apiToken: w,
  // Added apiToken
  texts: n = {}
}) {
  const t = { ...le[u], ...n }, { isAuthorized: c } = be(w), { primaryColor: T, backgroundColor: f, isLoading: N } = xe(s, w, d, i, y), { post: h } = ge(s, w), [O, l] = k(!1), [L, F] = k(!1), [j, B] = k(""), [$, H] = k(b || t.waitingConfirmationMsg), [C, _] = k(g), [v, R] = k(!1), [oe, ne] = k(!1), [z, W] = k(""), [K, de] = k(""), ue = Re(null);
  if (me(() => (C > 0 && (ue.current = setInterval(() => {
    _((Y) => Y <= 1 ? (clearInterval(ue.current), 0) : Y - 1);
  }, 1e3)), () => clearInterval(ue.current)), [C]), me(() => {
    C === 0 && (g > 0 || v) && (H(t.waitingConfirmationMsg), R(!1));
  }, [C, g, t.waitingConfirmationMsg]), N) return null;
  if (!c)
    return /* @__PURE__ */ e.jsx(je, { lang: u });
  const ie = (Y) => {
    const X = Math.floor(Y / 60), re = Y % 60;
    return `${X.toString().padStart(2, "0")}:${re.toString().padStart(2, "0")}`;
  }, M = async (Y) => {
    if (Y.preventDefault(), !!j) {
      F(!0), W("");
      try {
        const X = await h("/verify-email", { token: j });
        if (X.success)
          ne(!0), P && P(X);
        else {
          const re = X.message || X.error || t.verificationFailed;
          W(re), o && o(re);
        }
      } catch (X) {
        console.error("⚠️ Manual Verification Error:", X);
        const re = t.connectionError;
        W(re), o && o(re);
      } finally {
        F(!1);
      }
    }
  }, ee = async () => {
    if (!(!p || C > 0)) {
      l(!0), R(!1), W(""), de("");
      try {
        const Y = await h("/resend-confirmation", { email: p });
        if (Y.success) {
          R(!0);
          const X = Y.message || t.resendSent;
          de(X), Y.wait_seconds && _(Y.wait_seconds);
        } else {
          const X = Y.message || Y.error || t.connectionError;
          W(X), Y.wait_seconds && _(Y.wait_seconds), o && o(X);
        }
      } catch (Y) {
        console.error("⚠️ Resend Error:", Y);
        const X = t.connectionError;
        W(X), o && o(X);
      } finally {
        l(!1);
      }
    }
  }, Q = {
    backgroundColor: T,
    color: "#ffffff"
  }, Z = {
    backgroundColor: f
  }, he = {
    color: T
  };
  return oe ? /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: Z, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-1 mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold", children: t.verifySuccess }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: t.verifySuccess })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "py-6 flex justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }) }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => m && m("login"),
        className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        style: Q,
        children: t.goToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-md mx-auto p-6 rounded-lg shadow-lg border text-center", style: Z, children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center mb-6", children: L ? /* @__PURE__ */ e.jsx("div", { className: "animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-blue-500", style: { borderTopColor: T } }) : /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }) }),
    /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold mb-2", children: t.waitingConfirmation }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm mb-6 text-gray-500", children: $ }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx(Ae, { message: K }),
      /* @__PURE__ */ e.jsx(ye, { message: z })
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
            value: j,
            onChange: (Y) => B(Y.target.value),
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          disabled: L || !j,
          className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50",
          style: Q,
          children: L ? t.loading : t.verifyButton
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "border-t pt-6 space-y-3", children: [
      C > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "p-2 rounded bg-gray-50 text-gray-700 text-xs font-mono border inline-block", children: [
        t.resendCodeIn,
        /* @__PURE__ */ e.jsx("span", { className: "font-bold", children: ie(C) })
      ] }) : /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: ee,
          disabled: O || !p,
          className: "text-sm font-medium hover:underline",
          style: he,
          children: O ? t.loading : t.resendEmail
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => m && m("login"),
          className: "w-full h-10 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-200 hover:bg-gray-50",
          children: t.goToLogin
        }
      )
    ] })
  ] });
}
function Xr(s, d, i, y) {
  const { getMe: m } = ge(s, d), [u, p] = k({
    user: null,
    isLoading: !0,
    error: null
  });
  return me(() => {
    if (!i || !y) {
      p({
        user: null,
        isLoading: !1,
        error: "Missing authentication credentials"
      });
      return;
    }
    (async () => {
      p((g) => ({ ...g, isLoading: !0, error: null }));
      try {
        const g = await m(y, i);
        if (g.success) {
          const P = g.user ? { ...g.user, ...Object.fromEntries(Object.entries(g).filter(([o]) => o !== "user" && o !== "success")) } : g;
          p({
            user: P,
            isLoading: !1,
            error: null
          });
        } else
          p({
            user: null,
            isLoading: !1,
            error: g.message || "Failed to load profile"
          });
      } catch (g) {
        console.error("Failed to fetch user profile:", g), p({
          user: null,
          isLoading: !1,
          error: g.message || "Connection error"
        });
      }
    })();
  }, [i, y, s, d]), u;
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
  customLabels: i = {},
  backgroundColor: y = "#ffffff",
  primaryColor: m = "#3b82f6",
  apiBaseUrl: u,
  apiToken: p,
  onAppClick: b,
  lang: g = "en",
  texts: P = {}
}) {
  const [o, w] = k(!1), n = Re(null), t = { ...le[g], ...P }, { primaryColor: c, backgroundColor: T, isLoading: f } = xe(u, p, d, m, y);
  if (me(() => {
    const l = (L) => {
      n.current && !n.current.contains(L.target) && w(!1);
    };
    return o && document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, [o]), f) return null;
  const N = (l) => l ? l.charAt(0).toUpperCase() : "?", h = (l) => {
    let L = 0;
    for (let F = 0; F < l.length; F++)
      L = l.charCodeAt(F) + ((L << 5) - L);
    return ir[Math.abs(L) % ir.length];
  }, O = (l) => {
    b && b(l), w(!1), l.publicUrl && window.open(l.publicUrl, "_blank");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "relative inline-block text-left", ref: n, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => w(!o),
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
            style: { backgroundColor: T },
            children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
              s.map((l) => /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => O(l),
                  className: "group relative flex flex-col items-center p-2 rounded-2xl hover:bg-gray-50 transition-all duration-200",
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm text-white text-2xl font-bold mb-2 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300",
                        style: { backgroundColor: h(l.appKey) },
                        children: N(l.appKey)
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-gray-700 uppercase tracking-wider text-center truncate w-full px-1", children: i[l.appKey] ? i[l.appKey] : l.appKey.replace(/_/g, " ").length > 9 ? `${l.appKey.replace(/_/g, " ").substring(0, 9)}...` : l.appKey.replace(/_/g, " ") }),
                    /* @__PURE__ */ e.jsxs("div", { className: "absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[60] shadow-xl", children: [
                      l.appName,
                      /* @__PURE__ */ e.jsx("div", { className: "absolute -top-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-b-4 border-b-gray-900" })
                    ] })
                  ]
                },
                l.appKey
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
  for (const i of d)
    if (Jr(i))
      return i;
  return null;
}
function ls({
  user: s = {},
  backgroundColor: d = "#ffffff",
  primaryColor: i = "#3b82f6",
  onLogout: y,
  onChangePassword: m,
  onProfileClick: u,
  // Added onProfileClick
  extraItems: p = [],
  // Array of { icon: ReactNode, label: string, onClick: function }
  lang: b = "en",
  apiBaseUrl: g,
  apiToken: P,
  texts: o = {}
}) {
  var F;
  const [w, n] = k(!1), t = Re(null), c = { ...le[b], ...o }, { primaryColor: T, backgroundColor: f, isLoading: N } = xe(g, P, s, i, d);
  if (me(() => {
    const j = (B) => {
      t.current && !t.current.contains(B.target) && n(!1);
    };
    return w && document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
  }, [w]), N) return null;
  const h = xr(s), O = () => {
    const j = s["Full Name"] || s.fullName || s.full_name || s.firstName || s.first_name;
    return j ? j.trim().charAt(0).toUpperCase() : s.email ? s.email.charAt(0).toUpperCase() : "U";
  }, l = s["Full Name"] || s.fullName || s.full_name || s.firstName || s.first_name || ((F = s.email) == null ? void 0 : F.split("@")[0]) || "User", L = ({ icon: j, label: B, onClick: $, className: H = "", color: C = "text-gray-600" }) => /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: () => {
        n(!1), $ && $();
      },
      className: `w-full flex items-center gap-3 px-3 py-2 text-sm rounded-xl hover:bg-gray-50 transition-colors group ${C} ${H}`,
      children: [
        j && /* @__PURE__ */ e.jsx(j, { className: "w-4 h-4 transition-transform group-hover:scale-110" }),
        /* @__PURE__ */ e.jsx("span", { className: "flex-1 text-left", children: B })
      ]
    }
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "relative inline-block text-left", ref: t, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => n(!w),
        className: "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden",
        style: {
          borderColor: T,
          backgroundColor: f,
          color: T
        },
        children: [
          h ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: h,
              alt: l,
              className: "w-full h-full object-cover",
              onError: (j) => {
                j.target.style.display = "none", j.target.nextSibling.style.display = "block";
              }
            }
          ) : null,
          /* @__PURE__ */ e.jsx("span", { className: `${h ? "hidden" : "block"} text-sm font-bold`, children: O() })
        ]
      }
    ),
    w && /* @__PURE__ */ e.jsx(
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
                /* @__PURE__ */ e.jsx("p", { className: "text-sm font-bold text-gray-700 truncate mb-0.5", children: l }),
                /* @__PURE__ */ e.jsx("p", { className: "text-[10px] font-medium text-gray-400 truncate", children: s.email })
              ] }),
              /* @__PURE__ */ e.jsx(
                L,
                {
                  icon: cr,
                  label: c.profile,
                  onClick: u
                }
              ),
              /* @__PURE__ */ e.jsx(
                L,
                {
                  icon: Vr,
                  label: c.changePassword,
                  onClick: m
                }
              ),
              p.map((j, B) => /* @__PURE__ */ e.jsx(
                L,
                {
                  icon: j.icon,
                  label: j.label,
                  onClick: j.onClick
                },
                `extra-${B}`
              )),
              p.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "my-1 border-t border-gray-50" }),
              /* @__PURE__ */ e.jsx(
                L,
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
  authToken: i,
  userEmail: y,
  primaryColor: m = "#3b82f6",
  backgroundColor: u = "#ffffff",
  onClose: p,
  onNavigate: b,
  onError: g,
  onSuccess: P,
  lang: o = "en",
  texts: w = {}
}) {
  const n = { ...le[o], ...w }, { user: t, isLoading: c, error: T } = Xr(s, d, i, y), { primaryColor: f, backgroundColor: N, isLoading: h } = xe(s, d, t, m, u), { post: O } = ge(s, d), [l, L] = k([]), [F, j] = k(!1), [B, $] = k(""), [H, C] = k(""), [_, v] = k(!1);
  me(() => {
    t != null && t.active_sessions ? L(t.active_sessions) : t != null && t.sessions && L(t.sessions);
  }, [t]);
  const R = (M) => M ? M.includes("Mozilla/") ? M.includes("iPhone") ? "iPhone" : M.includes("Android") ? "Android Device" : M.includes("Windows") ? "Windows PC" : M.includes("Macintosh") ? "Mac" : M.includes("iPad") ? "iPad" : "Web Browser" : M : n.deviceName, oe = (M) => {
    if (!M) return /* @__PURE__ */ e.jsx(tr, { className: "w-5 h-5" });
    const ee = M.toLowerCase();
    return ee.includes("iphone") || ee.includes("android") ? /* @__PURE__ */ e.jsx(Wr, { className: "w-5 h-5" }) : ee.includes("ipad") || ee.includes("tablet") ? /* @__PURE__ */ e.jsx(Ur, { className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(tr, { className: "w-5 h-5" });
  };
  if (c || h)
    return /* @__PURE__ */ e.jsx("div", { className: "w-full max-w-4xl mx-auto p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsx(Ze, { className: "w-16 h-16 animate-spin", style: { color: m } }),
        /* @__PURE__ */ e.jsx(er, { className: "w-6 h-6 absolute top-0 right-0 animate-pulse", style: { color: m } })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg font-semibold text-gray-600 animate-pulse", children: n.loadingProfile })
    ] }) });
  if (T || !t)
    return /* @__PURE__ */ e.jsx("div", { className: "w-full max-w-4xl mx-auto p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center justify-center py-20 space-y-4", children: [
      /* @__PURE__ */ e.jsx(lr, { className: "w-16 h-16 text-red-500" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg font-semibold text-red-600", children: T || n.failedLoadProfile }),
      p && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: p,
          className: "mt-4 px-6 py-2 rounded-xl font-semibold text-white transition-all hover:brightness-110",
          style: { backgroundColor: m },
          children: n.close
        }
      )
    ] }) });
  const ne = t["Full Name"] || t.fullName || t.full_name || `${t.firstName || ""} ${t.lastName || ""}`.trim() || "User", z = t.Roles || [], W = t.permissions || [], K = t.biography || t.bio || "", de = xr(t), ue = () => ne.charAt(0).toUpperCase(), ie = async (M = !1, ee = []) => {
    if (!i) {
      const Q = n.noSessions;
      $(Q);
      return;
    }
    j(!0), $(""), C("");
    try {
      const Q = await O("/logout_sessions", {
        email: t.email || y || "",
        all_sessions: M,
        session_ids: ee
      }, { token: i });
      if (Q.success)
        L(M ? [] : (Z) => Z.filter((he) => !ee.includes(he._id))), C(n.logoutSuccess), P && P(Q);
      else {
        const Z = Q.message || Q.error || "Logout failed";
        $(Z), g && g(Z);
      }
    } catch (Q) {
      console.error("⚠️ Logout Sessions Error:", Q), $(n.connectionError);
    } finally {
      j(!1);
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
              de && !_ ? /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: de,
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
              K && /* @__PURE__ */ e.jsxs("p", { className: "text-gray-600 max-w-2xl leading-relaxed italic", children: [
                '"',
                K,
                '"'
              ] }),
              z.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-2 justify-center md:justify-start pt-2", children: z.map((M, ee) => /* @__PURE__ */ e.jsx(
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
                ee
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
          /* @__PURE__ */ e.jsx(ye, { message: B }),
          /* @__PURE__ */ e.jsx(Ae, { message: H }),
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
                /* @__PURE__ */ e.jsx("div", { className: "grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar", children: W.length > 0 ? W.map((M, ee) => {
                  var Q, Z;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      className: "p-4 rounded-2xl border-2 flex flex-col gap-2 hover:shadow-lg transition-all group",
                      style: {
                        backgroundColor: `${f}05`,
                        borderColor: `${f}20`
                      },
                      children: [
                        /* @__PURE__ */ e.jsx("p", { className: "text-xs font-bold uppercase tracking-wider", style: { color: f }, children: ((Q = M["Permission ID"]) == null ? void 0 : Q.split(".")[0]) || "App" }),
                        /* @__PURE__ */ e.jsx("p", { className: "text-sm font-bold text-gray-800", children: ((Z = M["Permission ID"]) == null ? void 0 : Z.split(".").slice(1).join(" ")) || M["Permission ID"] }),
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
                    ee
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
              /* @__PURE__ */ e.jsx("div", { className: "space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar", children: l.length > 0 ? l.map((M) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "p-4 border-2 rounded-2xl flex justify-between items-center group hover:shadow-lg transition-all",
                  style: {
                    backgroundColor: `${f}05`,
                    borderColor: `${f}15`
                  },
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 flex-1", children: [
                      /* @__PURE__ */ e.jsx("div", { className: "p-2 rounded-xl", style: { backgroundColor: `${f}10`, color: f }, children: oe(M["Device Name"]) }),
                      /* @__PURE__ */ e.jsxs("div", { className: "space-y-1.5 flex-1", children: [
                        /* @__PURE__ */ e.jsx("div", { className: "font-black text-gray-800 text-sm", title: M["Device Name"], children: R(M["Device Name"]) }),
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
                        disabled: F,
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
              l.length > 1 && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => ie(!0),
                  disabled: F,
                  className: "w-full py-3 text-sm uppercase tracking-widest font-extrabold text-white rounded-2xl transition-all active:scale-95 hover:brightness-110 shadow-lg",
                  style: { backgroundColor: "#ef4444" },
                  children: F ? /* @__PURE__ */ e.jsxs("span", { className: "flex items-center justify-center gap-2", children: [
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
  be as useSecurity,
  Xr as useUserProfile
};
