import pe, { useEffect as ge, useState as v, useRef as Ie } from "react";
import { AlertTriangle as zi, AlertCircle as fi, EyeOff as ve, Eye as we, CheckCircle as Vi, User as mi, KeyRound as Wi, LogOut as gi, Loader2 as ri, Sparkles as ci, Mail as Ui, Key as si, Settings as ti, Monitor as oi, Smartphone as Yi, Tablet as Hi } from "lucide-react";
var Ye = { exports: {} }, Le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ni;
function qi() {
  if (ni) return Le;
  ni = 1;
  var l = pe, d = Symbol.for("react.element"), o = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, g = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(b, m, _) {
    var c, w = {}, s = null, r = null;
    _ !== void 0 && (s = "" + _), m.key !== void 0 && (s = "" + m.key), m.ref !== void 0 && (r = m.ref);
    for (c in m) y.call(m, c) && !u.hasOwnProperty(c) && (w[c] = m[c]);
    if (b && b.defaultProps) for (c in m = b.defaultProps, m) w[c] === void 0 && (w[c] = m[c]);
    return { $$typeof: d, type: b, key: s, ref: r, props: w, _owner: g.current };
  }
  return Le.Fragment = o, Le.jsx = h, Le.jsxs = h, Le;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ai;
function Bi() {
  return ai || (ai = 1, process.env.NODE_ENV !== "production" && function() {
    var l = pe, d = Symbol.for("react.element"), o = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), b = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), s = Symbol.for("react.lazy"), r = Symbol.for("react.offscreen"), a = Symbol.iterator, S = "@@iterator";
    function f(i) {
      if (i === null || typeof i != "object")
        return null;
      var t = a && i[a] || i[S];
      return typeof t == "function" ? t : null;
    }
    var j = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(i) {
      {
        for (var t = arguments.length, x = new Array(t > 1 ? t - 1 : 0), k = 1; k < t; k++)
          x[k - 1] = arguments[k];
        M("error", i, x);
      }
    }
    function M(i, t, x) {
      {
        var k = j.ReactDebugCurrentFrame, H = k.getStackAddendum();
        H !== "" && (t += "%s", x = x.concat([H]));
        var G = x.map(function(V) {
          return String(V);
        });
        G.unshift("Warning: " + t), Function.prototype.apply.call(console[i], console, G);
      }
    }
    var n = !1, L = !1, O = !1, E = !1, I = !1, T;
    T = Symbol.for("react.module.reference");
    function q(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === y || i === u || I || i === g || i === _ || i === c || E || i === r || n || L || O || typeof i == "object" && i !== null && (i.$$typeof === s || i.$$typeof === w || i.$$typeof === h || i.$$typeof === b || i.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === T || i.getModuleId !== void 0));
    }
    function $(i, t, x) {
      var k = i.displayName;
      if (k)
        return k;
      var H = t.displayName || t.name || "";
      return H !== "" ? x + "(" + H + ")" : x;
    }
    function B(i) {
      return i.displayName || "Context";
    }
    function W(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case y:
          return "Fragment";
        case o:
          return "Portal";
        case u:
          return "Profiler";
        case g:
          return "StrictMode";
        case _:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case b:
            var t = i;
            return B(t) + ".Consumer";
          case h:
            var x = i;
            return B(x._context) + ".Provider";
          case m:
            return $(i, i.render, "ForwardRef");
          case w:
            var k = i.displayName || null;
            return k !== null ? k : W(i.type) || "Memo";
          case s: {
            var H = i, G = H._payload, V = H._init;
            try {
              return W(V(G));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, J = 0, C, A, Y, se, ne, Q, ue;
    function N() {
    }
    N.__reactDisabledLog = !0;
    function z() {
      {
        if (J === 0) {
          C = console.log, A = console.info, Y = console.warn, se = console.error, ne = console.group, Q = console.groupCollapsed, ue = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: N,
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
        J++;
      }
    }
    function U() {
      {
        if (J--, J === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, i, {
              value: C
            }),
            info: D({}, i, {
              value: A
            }),
            warn: D({}, i, {
              value: Y
            }),
            error: D({}, i, {
              value: se
            }),
            group: D({}, i, {
              value: ne
            }),
            groupCollapsed: D({}, i, {
              value: Q
            }),
            groupEnd: D({}, i, {
              value: ue
            })
          });
        }
        J < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = j.ReactCurrentDispatcher, fe;
    function K(i, t, x) {
      {
        if (fe === void 0)
          try {
            throw Error();
          } catch (H) {
            var k = H.stack.trim().match(/\n( *(at )?)/);
            fe = k && k[1] || "";
          }
        return `
` + fe + i;
      }
    }
    var Z = !1, re;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      re = new De();
    }
    function Ae(i, t) {
      if (!i || Z)
        return "";
      {
        var x = re.get(i);
        if (x !== void 0)
          return x;
      }
      var k;
      Z = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var G;
      G = ie.current, ie.current = null, z();
      try {
        if (t) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (oe) {
              k = oe;
            }
            Reflect.construct(i, [], V);
          } else {
            try {
              V.call();
            } catch (oe) {
              k = oe;
            }
            i.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (oe) {
            k = oe;
          }
          i();
        }
      } catch (oe) {
        if (oe && k && typeof oe.stack == "string") {
          for (var F = oe.stack.split(`
`), ce = k.stack.split(`
`), ee = F.length - 1, le = ce.length - 1; ee >= 1 && le >= 0 && F[ee] !== ce[le]; )
            le--;
          for (; ee >= 1 && le >= 0; ee--, le--)
            if (F[ee] !== ce[le]) {
              if (ee !== 1 || le !== 1)
                do
                  if (ee--, le--, le < 0 || F[ee] !== ce[le]) {
                    var de = `
` + F[ee].replace(" at new ", " at ");
                    return i.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", i.displayName)), typeof i == "function" && re.set(i, de), de;
                  }
                while (ee >= 1 && le >= 0);
              break;
            }
        }
      } finally {
        Z = !1, ie.current = G, U(), Error.prepareStackTrace = H;
      }
      var Ee = i ? i.displayName || i.name : "", ke = Ee ? K(Ee) : "";
      return typeof i == "function" && re.set(i, ke), ke;
    }
    function Fe(i, t, x) {
      return Ae(i, !1);
    }
    function Oe(i) {
      var t = i.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ce(i, t, x) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Ae(i, Oe(i));
      if (typeof i == "string")
        return K(i);
      switch (i) {
        case _:
          return K("Suspense");
        case c:
          return K("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case m:
            return Fe(i.render);
          case w:
            return Ce(i.type, t, x);
          case s: {
            var k = i, H = k._payload, G = k._init;
            try {
              return Ce(G(H), t, x);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, Me = {}, R = j.ReactDebugCurrentFrame;
    function P(i) {
      if (i) {
        var t = i._owner, x = Ce(i.type, i._source, t ? t.type : null);
        R.setExtraStackFrame(x);
      } else
        R.setExtraStackFrame(null);
    }
    function X(i, t, x, k, H) {
      {
        var G = Function.call.bind(be);
        for (var V in i)
          if (G(i, V)) {
            var F = void 0;
            try {
              if (typeof i[V] != "function") {
                var ce = Error((k || "React class") + ": " + x + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              F = i[V](t, V, k, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              F = ee;
            }
            F && !(F instanceof Error) && (P(H), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", x, V, typeof F), P(null)), F instanceof Error && !(F.message in Me) && (Me[F.message] = !0, P(H), p("Failed %s type: %s", x, F.message), P(null));
          }
      }
    }
    var te = Array.isArray;
    function _e(i) {
      return te(i);
    }
    function vi(i) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, x = t && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return x;
      }
    }
    function wi(i) {
      try {
        return He(i), !1;
      } catch {
        return !0;
      }
    }
    function He(i) {
      return "" + i;
    }
    function qe(i) {
      if (wi(i))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vi(i)), He(i);
    }
    var Be = j.ReactCurrentOwner, ji = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ke, Xe;
    function Ni(i) {
      if (be.call(i, "ref")) {
        var t = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Ci(i) {
      if (be.call(i, "key")) {
        var t = Object.getOwnPropertyDescriptor(i, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function ki(i, t) {
      typeof i.ref == "string" && Be.current;
    }
    function Si(i, t) {
      {
        var x = function() {
          Ke || (Ke = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        x.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Pi(i, t) {
      {
        var x = function() {
          Xe || (Xe = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        x.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Ei = function(i, t, x, k, H, G, V) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: i,
        key: t,
        ref: x,
        props: V,
        // Record the component responsible for creating this element.
        _owner: G
      };
      return F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(F, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function _i(i, t, x, k, H) {
      {
        var G, V = {}, F = null, ce = null;
        x !== void 0 && (qe(x), F = "" + x), Ci(t) && (qe(t.key), F = "" + t.key), Ni(t) && (ce = t.ref, ki(t, H));
        for (G in t)
          be.call(t, G) && !ji.hasOwnProperty(G) && (V[G] = t[G]);
        if (i && i.defaultProps) {
          var ee = i.defaultProps;
          for (G in ee)
            V[G] === void 0 && (V[G] = ee[G]);
        }
        if (F || ce) {
          var le = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          F && Si(V, le), ce && Pi(V, le);
        }
        return Ei(i, F, ce, H, k, Be.current, V);
      }
    }
    var $e = j.ReactCurrentOwner, Ge = j.ReactDebugCurrentFrame;
    function Pe(i) {
      if (i) {
        var t = i._owner, x = Ce(i.type, i._source, t ? t.type : null);
        Ge.setExtraStackFrame(x);
      } else
        Ge.setExtraStackFrame(null);
    }
    var ze;
    ze = !1;
    function Ve(i) {
      return typeof i == "object" && i !== null && i.$$typeof === d;
    }
    function Je() {
      {
        if ($e.current) {
          var i = W($e.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Li(i) {
      return "";
    }
    var Qe = {};
    function Ri(i) {
      {
        var t = Je();
        if (!t) {
          var x = typeof i == "string" ? i : i.displayName || i.name;
          x && (t = `

Check the top-level render call using <` + x + ">.");
        }
        return t;
      }
    }
    function Ze(i, t) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var x = Ri(t);
        if (Qe[x])
          return;
        Qe[x] = !0;
        var k = "";
        i && i._owner && i._owner !== $e.current && (k = " It was passed a child from " + W(i._owner.type) + "."), Pe(i), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, k), Pe(null);
      }
    }
    function ei(i, t) {
      {
        if (typeof i != "object")
          return;
        if (_e(i))
          for (var x = 0; x < i.length; x++) {
            var k = i[x];
            Ve(k) && Ze(k, t);
          }
        else if (Ve(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var H = f(i);
          if (typeof H == "function" && H !== i.entries)
            for (var G = H.call(i), V; !(V = G.next()).done; )
              Ve(V.value) && Ze(V.value, t);
        }
      }
    }
    function Ai(i) {
      {
        var t = i.type;
        if (t == null || typeof t == "string")
          return;
        var x;
        if (typeof t == "function")
          x = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === w))
          x = t.propTypes;
        else
          return;
        if (x) {
          var k = W(t);
          X(x, i.props, "prop", k, i);
        } else if (t.PropTypes !== void 0 && !ze) {
          ze = !0;
          var H = W(t);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Oi(i) {
      {
        for (var t = Object.keys(i.props), x = 0; x < t.length; x++) {
          var k = t[x];
          if (k !== "children" && k !== "key") {
            Pe(i), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), Pe(null);
            break;
          }
        }
        i.ref !== null && (Pe(i), p("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    var ii = {};
    function li(i, t, x, k, H, G) {
      {
        var V = q(i);
        if (!V) {
          var F = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Li();
          ce ? F += ce : F += Je();
          var ee;
          i === null ? ee = "null" : _e(i) ? ee = "array" : i !== void 0 && i.$$typeof === d ? (ee = "<" + (W(i.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof i, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, F);
        }
        var le = _i(i, t, x, H, G);
        if (le == null)
          return le;
        if (V) {
          var de = t.children;
          if (de !== void 0)
            if (k)
              if (_e(de)) {
                for (var Ee = 0; Ee < de.length; Ee++)
                  ei(de[Ee], i);
                Object.freeze && Object.freeze(de);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ei(de, i);
        }
        if (be.call(t, "key")) {
          var ke = W(i), oe = Object.keys(t).filter(function($i) {
            return $i !== "key";
          }), We = oe.length > 0 ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ii[ke + We]) {
            var Fi = oe.length > 0 ? "{" + oe.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, We, ke, Fi, ke), ii[ke + We] = !0;
          }
        }
        return i === y ? Oi(le) : Ai(le), le;
      }
    }
    function Mi(i, t, x) {
      return li(i, t, x, !0);
    }
    function Ii(i, t, x) {
      return li(i, t, x, !1);
    }
    var Ti = Ii, Di = Mi;
    Re.Fragment = y, Re.jsx = Ti, Re.jsxs = Di;
  }()), Re;
}
process.env.NODE_ENV === "production" ? Ye.exports = qi() : Ye.exports = Bi();
var e = Ye.exports, xi = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, di = pe.createContext && pe.createContext(xi), je = function() {
  return je = Object.assign || function(l) {
    for (var d, o = 1, y = arguments.length; o < y; o++) {
      d = arguments[o];
      for (var g in d) Object.prototype.hasOwnProperty.call(d, g) && (l[g] = d[g]);
    }
    return l;
  }, je.apply(this, arguments);
}, Ki = function(l, d) {
  var o = {};
  for (var y in l) Object.prototype.hasOwnProperty.call(l, y) && d.indexOf(y) < 0 && (o[y] = l[y]);
  if (l != null && typeof Object.getOwnPropertySymbols == "function") for (var g = 0, y = Object.getOwnPropertySymbols(l); g < y.length; g++)
    d.indexOf(y[g]) < 0 && Object.prototype.propertyIsEnumerable.call(l, y[g]) && (o[y[g]] = l[y[g]]);
  return o;
};
function hi(l) {
  return l && l.map(function(d, o) {
    return pe.createElement(d.tag, je({
      key: o
    }, d.attr), hi(d.child));
  });
}
function pi(l) {
  return function(d) {
    return pe.createElement(Xi, je({
      attr: je({}, l.attr)
    }, d), hi(l.child));
  };
}
function Xi(l) {
  var d = function(o) {
    var y = l.attr, g = l.size, u = l.title, h = Ki(l, ["attr", "size", "title"]), b = g || o.size || "1em", m;
    return o.className && (m = o.className), l.className && (m = (m ? m + " " : "") + l.className), pe.createElement("svg", je({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, y, h, {
      className: m,
      style: je(je({
        color: l.color || o.color
      }, o.style), l.style),
      height: b,
      width: b,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && pe.createElement("title", null, u), l.children);
  };
  return di !== void 0 ? pe.createElement(di.Consumer, null, function(o) {
    return d(o);
  }) : d(xi);
}
function Gi(l) {
  return pi({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "title", attr: {}, child: [] }, { tag: "path", attr: { d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" } }] })(l);
}
const ae = {
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
function Ne(l) {
  const d = !!l && l.length > 0;
  return d || console.warn("⚠️ Core Identity Library: Falta el token de autorización (apiToken) en las props del componente."), { isAuthorized: d, apiToken: l };
}
function xe(l, d) {
  const { isAuthorized: o } = Ne(d), y = async (s, r = {}) => {
    const { token: a, ...S } = r;
    try {
      const f = {
        "Content-Type": "application/json",
        "X-API-KEY": d,
        "X-REQUEST-URL": typeof window < "u" ? window.location.origin.replace(/\/$/, "") : "",
        ...r.headers
      };
      a && (f.Authorization = `Bearer ${a}`);
      const j = await fetch(`${l}${s}`, {
        ...S,
        headers: f,
        credentials: "include"
      });
      let p;
      const M = j.headers.get("content-type");
      if (M && M.includes("application/json"))
        try {
          p = await j.json();
        } catch (n) {
          console.error("Failed to parse JSON response", n), p = { message: await j.text() };
        }
      else
        p = { message: await j.text() };
      if (!j.ok) {
        const n = new Error(p.message || p.error || `Error ${j.status}`);
        throw n.status = j.status, n.data = p, n;
      }
      return p;
    } catch (f) {
      if (f.name === "TypeError" && (f.message.includes("Failed to fetch") || f.message.includes("NetworkError"))) {
        const j = new Error("Connection Error");
        throw j.isConnectionError = !0, j;
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
function yi({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: o = "#3b82f6",
  onSuccess: y,
  onError: g,
  lang: u = "en",
  apiToken: h,
  texts: b = {}
}) {
  var r;
  const m = { ...ae[u], ...b }, { post: _ } = xe(l, h), c = ((r = d.app_info) == null ? void 0 : r.primaryColor) || o;
  ge(() => {
    const a = (S) => {
      let f, j;
      try {
        const n = new URL(l);
        f = n.origin;
        const L = n.hostname.split(".");
        L.length >= 2 && (j = L.slice(-2).join("."));
      } catch {
      }
      const p = j && S.origin.endsWith(j) || f && S.origin === f;
      if (S.origin === window.location.origin || p) {
        if (S.data.type === "OAUTH_SUCCESS") {
          const { token: n, handshake_code: L, user: O } = S.data.payload;
          console.log("OAuth Login Successful:", O), y && y({
            success: !0,
            token: n,
            handshake_code: L,
            user: O,
            email: O == null ? void 0 : O.email,
            // Ensure compatibility with existing success handlers
            provider: "Social"
          });
        } else if (S.data.type === "OAUTH_ERROR") {
          const { message: n } = S.data.payload;
          console.error("OAuth Login Error:", n), g && g(n);
        }
      }
    };
    return window.addEventListener("message", a, !1), () => window.removeEventListener("message", a);
  }, [y, g, l]);
  const w = (a) => {
    _("/login", {
      provider: a,
      frontend_origin: window.location.origin
    }).then((S) => {
      const f = S.auth_url || S.redirect_url;
      if (f) {
        const M = window.screen.width / 2 - 300, n = window.screen.height / 2 - 700 / 2;
        window.open(
          f,
          "login_popup",
          `width=600,height=700,left=${M},top=${n},status=no,resizable=yes,scrollbars=yes`
        );
      } else {
        const j = S.error || S.message || (u === "es" ? "Error al iniciar sesión social" : "Social login error");
        g && g(j);
      }
    }).catch((S) => {
      console.error("⚠️ Social Auth Error:", S), g && g(S.message || "Error");
    });
  }, s = c ? { borderColor: c, color: c } : {};
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-3", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        className: "cil-w-full cil-flex cil-items-center cil-justify-center cil-gap-2 cil-px-4 cil-py-2 cil-border cil-rounded-md cil-hover:bg-gray-50 cil-transition-colors",
        style: s,
        onClick: () => w("Google"),
        "data-testid": "button-google-login",
        children: [
          /* @__PURE__ */ e.jsx(Gi, { className: "cil-h-4 cil-w-4" }),
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
        onClick: () => w("Microsoft"),
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
let me = null, Ue = null;
function he(l, d, o, y, g) {
  var m, _, c, w;
  const { getAppColors: u } = xe(l, d), [h, b] = v({
    primaryColor: ((m = o == null ? void 0 : o.app_info) == null ? void 0 : m.primaryColor) || ((_ = o == null ? void 0 : o.app_info) == null ? void 0 : _.primary_color) || (me == null ? void 0 : me.primaryColor) || y,
    backgroundColor: ((c = o == null ? void 0 : o.app_info) == null ? void 0 : c.backgroundColor) || ((w = o == null ? void 0 : o.app_info) == null ? void 0 : w.background_color) || (me == null ? void 0 : me.backgroundColor) || g,
    isLoading: !me && !(o != null && o.app_info) && !!(l && d)
  });
  return ge(() => {
    if (o != null && o.app_info) {
      const s = o.app_info.primaryColor || o.app_info.primary_color, r = o.app_info.backgroundColor || o.app_info.background_color;
      if ((s || r) && (b((a) => ({
        primaryColor: s || a.primaryColor,
        backgroundColor: r || a.backgroundColor,
        isLoading: !1
      })), s && r))
        return;
    }
    if (me && !(o != null && o.app_info)) {
      b({
        primaryColor: me.primaryColor,
        backgroundColor: me.backgroundColor,
        isLoading: !1
      });
      return;
    }
    l && d ? (async () => {
      Ue || (Ue = u().catch((S) => (console.error("Failed to fetch app colors:", S), null)));
      const r = await Ue, a = {
        primaryColor: (r == null ? void 0 : r.primaryColor) || (r == null ? void 0 : r.primary_color) || y,
        backgroundColor: (r == null ? void 0 : r.backgroundColor) || (r == null ? void 0 : r.background_color) || g
      };
      me = a, b({ ...a, isLoading: !1 });
    })() : b((s) => ({ ...s, isLoading: !1 }));
  }, [o == null ? void 0 : o.app_info, y, g, l, d]), h;
}
function Se({ lang: l = "en" }) {
  const d = ae[l] || ae.en;
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-justify-center cil-p-8 cil-bg-red-50 cil-border cil-border-red-200 cil-rounded-lg cil-text-red-800 cil-space-x-4 cil-max-w-md cil-mx-auto cil-my-10", children: [
    /* @__PURE__ */ e.jsx(zi, { className: "cil-w-8 cil-h-8 cil-flex-shrink-0" }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "cil-font-bold cil-text-lg", children: d.authErrorTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: d.authErrorMessage })
    ] })
  ] });
}
function ye({ message: l }) {
  return l ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2 cil-p-3 cil-text-sm cil-text-red-700 cil-bg-red-50 cil-border cil-border-red-100 cil-rounded-md cil-animate-in cil-fade-in cil-slide-in-from-top-1 cil-duration-200", children: [
    /* @__PURE__ */ e.jsx(fi, { className: "cil-w-4 cil-h-4 cil-flex-shrink-0" }),
    /* @__PURE__ */ e.jsx("p", { children: l })
  ] }) : null;
}
function ll({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: o = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: h,
  apiToken: b,
  lang: m = "en",
  texts: _ = {}
}) {
  const c = { ...ae[m], ..._ }, { isAuthorized: w } = Ne(b), { primaryColor: s, backgroundColor: r, isLoading: a } = he(l, b, d, o, y), { post: S } = xe(l, b), [f, j] = v(""), [p, M] = v(""), [n, L] = v(!1), [O, E] = v(!1), [I, T] = v("");
  if (a) return null;
  if (!w)
    return /* @__PURE__ */ e.jsx(Se, { lang: m });
  const q = (J) => {
    g && g(J);
  }, $ = async (J) => {
    J.preventDefault(), E(!0), T("");
    try {
      const C = await S("/login", {
        provider: "Email",
        email: f,
        password: p
      });
      if (C.success)
        q({ ...C, email: f });
      else {
        const A = C.message || C.error || c.unknownError;
        T(A), u && u(A), E(!1);
      }
    } catch (C) {
      console.error("⚠️ Login Error:", C);
      let A = C.message;
      C.isConnectionError ? A = c.connectionError : C.status >= 500 ? A = c.serverError : (!A || A === "Error " + C.status) && (A = c.unknownError), T(A), u && u(A), E(!1);
    }
  }, B = {
    backgroundColor: s,
    color: "#ffffff"
  }, W = {
    backgroundColor: r
  }, D = {
    color: s
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: W, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: c.login }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: c.loginSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(
        yi,
        {
          apiBaseUrl: l,
          user: d,
          primaryColor: s,
          onSuccess: q,
          onError: (J) => {
            T(J), u && u(J);
          },
          lang: m,
          apiToken: b,
          texts: _
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil-inset-0 cil-flex cil-items-center", children: /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-border-t cil-border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "cil-relative cil-flex cil-justify-center cil-text-xs cil-uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "cil-px-2 cil-text-gray-500", style: W, children: c.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: $, className: "cil-space-y-4", children: [
        /* @__PURE__ */ e.jsx(ye, { message: I }),
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
              onChange: (J) => {
                j(J.target.value), I && T("");
              },
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-password", className: "cil-text-sm cil-font-medium cil-leading-none", children: c.password }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                id: "auth-password",
                type: n ? "text" : "password",
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10",
                value: p,
                onChange: (J) => {
                  M(J.target.value), I && T("");
                },
                required: !0
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
                onClick: () => L(!n),
                children: n ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-justify-end", children: /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => h && h("forgot-password"),
            className: "cil-text-sm cil-hover:underline",
            style: D,
            children: c.forgotPassword
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-50",
            style: B,
            disabled: O,
            children: O ? c.loading : c.loginButton
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
          style: D,
          children: c.signUp
        }
      )
    ] }) })
  ] });
}
function rl({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: o = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: h,
  apiToken: b,
  lang: m = "en",
  texts: _ = {}
}) {
  const c = { ...ae[m], ..._ }, { isAuthorized: w } = Ne(b), { primaryColor: s, backgroundColor: r, isLoading: a } = he(l, b, d, o, y), { post: S } = xe(l, b), [f, j] = v(!1), [p, M] = v(""), [n, L] = v(!1), [O, E] = v(!1), [I, T] = v({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  if (a) return null;
  if (!w)
    return /* @__PURE__ */ e.jsx(Se, { lang: m });
  const q = (C) => {
    g && g(C);
  }, $ = async (C) => {
    if (C.preventDefault(), M(""), I.password !== I.confirmPassword) {
      const A = c.passwordsDontMatch;
      M(A), u && u(A);
      return;
    }
    j(!0);
    try {
      const A = await S("/register", {
        firstName: I.firstName,
        lastName: I.lastName,
        email: I.email,
        password: I.password
      });
      if (A.success)
        q({ ...A, email: I.email });
      else {
        const Y = A.message || A.error || c.unknownError;
        M(Y), u && u(Y), j(!1);
      }
    } catch (A) {
      console.error("⚠️ SignUp Error:", A);
      let Y = A.message;
      A.isConnectionError ? Y = c.connectionError : A.status >= 500 ? Y = c.serverError : (!Y || Y === "Error " + A.status) && (Y = c.unknownError), M(Y), u && u(Y), j(!1);
    }
  }, B = (C, A) => {
    T((Y) => ({ ...Y, [C]: A })), p && M("");
  }, W = {
    backgroundColor: s,
    color: "#ffffff"
  }, D = {
    backgroundColor: r
  }, J = {
    color: s
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: D, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: c.createAccount }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: c.createAccountSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(
        yi,
        {
          apiBaseUrl: l,
          user: d,
          primaryColor: s,
          onSuccess: q,
          onError: (C) => {
            M(C), u && u(C);
          },
          lang: m,
          apiToken: b,
          texts: _
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil-inset-0 cil-flex cil-items-center", children: /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-border-t cil-border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "cil-relative cil-flex cil-justify-center cil-text-xs cil-uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "cil-px-2 cil-text-gray-500", style: D, children: c.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: $, className: "cil-space-y-4", children: [
        /* @__PURE__ */ e.jsx(ye, { message: p }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-2 cil-gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: c.firstName }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                value: I.firstName,
                onChange: (C) => B("firstName", C.target.value),
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
                value: I.lastName,
                onChange: (C) => B("lastName", C.target.value),
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
              value: I.email,
              onChange: (C) => B("email", C.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: c.password }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: n ? "text" : "password",
                value: I.password,
                onChange: (C) => B("password", C.target.value),
                required: !0,
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
                onClick: () => L(!n),
                children: n ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: c.confirmPassword }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: O ? "text" : "password",
                value: I.confirmPassword,
                onChange: (C) => B("confirmPassword", C.target.value),
                required: !0,
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
                onClick: () => E(!O),
                children: O ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-50",
            style: W,
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
          style: J,
          children: c.login
        }
      )
    ] }) })
  ] });
}
function cl({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: o = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: h,
  apiToken: b,
  lang: m = "en",
  texts: _ = {}
}) {
  const c = { ...ae[m], ..._ }, { isAuthorized: w } = Ne(b), { primaryColor: s, backgroundColor: r, isLoading: a } = he(l, b, d, o, y), { post: S } = xe(l, b), [f, j] = v(""), [p, M] = v(!1), [n, L] = v(!1), [O, E] = v("");
  if (a) return null;
  if (!w)
    return /* @__PURE__ */ e.jsx(Se, { lang: m });
  const I = async (B) => {
    B.preventDefault(), M(!0), E("");
    try {
      const W = await S("/forgot-password", { email: f });
      if (W.success)
        L(!0), g && g({ ...W, email: f });
      else {
        const D = W.message || W.error || c.unknownError;
        E(D), u && u(D), M(!1);
      }
    } catch (W) {
      console.error("⚠️ ForgotPassword Error:", W);
      let D = W.message;
      W.isConnectionError ? D = c.connectionError : W.status >= 500 ? D = c.serverError : (!D || D === "Error " + W.status) && (D = c.unknownError), E(D), u && u(D), M(!1);
    }
  }, T = {
    backgroundColor: s,
    color: "#ffffff"
  }, q = {
    backgroundColor: r
  }, $ = {
    color: s
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: q, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: c.forgotPassword }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: n ? c.checkEmail : c.resetPasswordInstructions })
    ] }),
    n ? /* @__PURE__ */ e.jsxs("div", { className: "cil-text-center cil-space-y-6 cil-py-4", children: [
      /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-mx-auto cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8 cil-text-blue-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: c.verifyEmailMessage }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-3", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => h && h("reset-password"),
            className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
            style: T,
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
    ] }) : /* @__PURE__ */ e.jsxs("form", { onSubmit: I, className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: O }),
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
            onChange: (B) => {
              j(B.target.value), O && E("");
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
          style: T,
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
          style: $,
          children: c.backToLogin
        }
      )
    ] })
  ] });
}
function Te({ message: l }) {
  return l ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2 cil-p-3 cil-text-sm cil-text-green-700 cil-bg-green-50 cil-border cil-border-green-100 cil-rounded-md cil-animate-in cil-fade-in cil-slide-in-from-top-1 cil-duration-200", children: [
    /* @__PURE__ */ e.jsx(Vi, { className: "cil-w-4 cil-h-4 cil-flex-shrink-0" }),
    /* @__PURE__ */ e.jsx("p", { children: l })
  ] }) : null;
}
function sl({
  apiBaseUrl: l,
  token: d = "",
  // The recovery code from URL/Email
  primaryColor: o = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: h,
  apiToken: b,
  lang: m = "en",
  email: _ = "",
  authToken: c = "",
  // Auth token passed from consumer
  user: w = {},
  initialWaitSeconds: s = 0,
  texts: r = {}
}) {
  const a = { ...ae[m], ...r }, { isAuthorized: S } = Ne(b), { primaryColor: f, backgroundColor: j, isLoading: p } = he(l, b, w, o, y), { post: M } = xe(l, b), [n, L] = v({
    token: d,
    newPassword: "",
    confirmPassword: ""
  }), [O, E] = v(!1), [I, T] = v(!1), [q, $] = v(!1), [B, W] = v(!1), [D, J] = v(!1), [C, A] = v([]), [Y, se] = v(!1), [ne, Q] = v(""), [ue, N] = v(""), [z, U] = v(c), [ie, fe] = v(s), [K, Z] = v(a.resetPasswordSubtitle), re = Ie(null);
  if (ge(() => (ie > 0 && (re.current = setInterval(() => {
    fe((R) => R <= 1 ? (clearInterval(re.current), 0) : R - 1);
  }, 1e3)), () => clearInterval(re.current)), [ie]), ge(() => {
    c && U(c);
  }, [c]), p) return null;
  if (!S)
    return /* @__PURE__ */ e.jsx(Se, { lang: m });
  const De = (R) => {
    const P = Math.floor(R / 60), X = R % 60;
    return `${P.toString().padStart(2, "0")}:${X.toString().padStart(2, "0")}`;
  }, Ae = async () => {
    if (!(!_ || ie > 0)) {
      T(!0), Q("");
      try {
        const R = await M("/forgot-password", { email: _ });
        if (R.success)
          R.wait_seconds && fe(R.wait_seconds), Z(R.message || a.resendSent);
        else {
          const P = R.message || R.error || a.connectionError;
          Q(P), R.wait_seconds && fe(R.wait_seconds), u && u(P);
        }
      } catch (R) {
        console.error("⚠️ Resend Reset Error:", R);
        let P = R.message;
        R.isConnectionError ? P = a.connectionError : R.status >= 500 ? P = a.serverError : (!P || P === "Error " + R.status) && (P = a.unknownError), Q(P), u && u(P);
      } finally {
        T(!1);
      }
    }
  }, Fe = async (R) => {
    if (R.preventDefault(), Q(""), n.newPassword !== n.confirmPassword) {
      const P = a.passwordsDontMatch;
      Q(P), u && u(P);
      return;
    }
    if (!n.token) {
      const P = a.enterRecoveryCode;
      Q(P), u && u(P);
      return;
    }
    E(!0);
    try {
      const P = await M("/reset-password", {
        token: n.token,
        newPassword: n.newPassword,
        confirmPassword: n.confirmPassword
      });
      if (P.success || P.status)
        J(!0), P.active_sessions && A(P.active_sessions), P.token && U(P.token), g && g(P);
      else {
        const X = P.message || P.error || a.unknownError;
        Q(X), u && u(X), E(!1);
      }
    } catch (P) {
      console.error("⚠️ ResetPassword Error:", P);
      let X = P.message;
      P.isConnectionError ? X = a.connectionError : P.status >= 500 ? X = a.serverError : (!X || X === "Error " + P.status) && (X = a.unknownError), Q(X), u && u(X), E(!1);
    }
  }, Oe = async (R = !1, P = []) => {
    if (!z) {
      const X = a.noSessions;
      Q(X), u && u(X);
      return;
    }
    se(!0), Q(""), N("");
    try {
      const X = await M("/logout_sessions", {
        email: _ || "",
        all_sessions: R,
        session_ids: P
      }, { token: z });
      if (X.success)
        A(R ? [] : (te) => te.filter((_e) => !P.includes(_e._id))), N(a.logoutSuccess);
      else {
        const te = X.message || X.error || "Logout failed";
        Q(te), u && u(te);
      }
    } catch (X) {
      console.error("⚠️ Logout Sessions Error:", X);
      let te = X.message;
      X.isConnectionError ? te = a.connectionError : X.status >= 500 ? te = a.serverError : (!te || te === "Error " + X.status) && (te = a.unknownError), Q(te), u && u(te);
    } finally {
      se(!1);
    }
  }, Ce = {
    backgroundColor: f,
    color: "#ffffff"
  }, be = {
    backgroundColor: j
  }, Me = {
    color: f
  };
  return D ? /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: be, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-text-center cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-mx-auto cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500 cil-mb-4", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: a.resetSuccessTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: a.resetSuccessSubtitle })
    ] }),
    /* @__PURE__ */ e.jsx(Te, { message: ue }),
    /* @__PURE__ */ e.jsx(ye, { message: ne }),
    C.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "cil-mt-8 cil-space-y-4 cil-border-t cil-pt-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "cil-text-left", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "cil-text-lg cil-font-medium", children: a.activeSessions }),
        /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-text-gray-500", children: a.sessionsSubtitle })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "cil-space-y-3 cil-max-h-60 cil-overflow-y-auto cil-pr-1", children: C.map((R) => {
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
              onClick: () => Oe(!1, [R._id]),
              disabled: Y,
              className: "cil-px-2 cil-py-1 cil-text-red-600 cil-hover:bg-red-50 cil-rounded cil-transition-colors",
              children: a.logoutThisSession
            }
          )
        ] }, R._id);
      }) }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => Oe(!0),
          disabled: Y,
          className: "cil-w-full cil-py-2 cil-text-sm cil-text-red-600 cil-border cil-border-red-200 cil-rounded-md cil-hover:bg-red-50 cil-transition-colors cil-font-medium",
          children: Y ? a.loggingOut : a.logoutAllSessions
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "cil-mt-8 cil-pt-6 cil-border-t", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => h && h("login"),
        className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
        style: Ce,
        children: a.goToLogin
      }
    ) })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: be, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: a.resetPasswordTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: K })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: Fe, className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: ne }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: a.verificationCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: n.token,
            onChange: (R) => L({ ...n, token: R.target.value }),
            required: !0,
            className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-font-mono cil-tracking-widest cil-text-center",
            placeholder: "XXXXXX"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: a.newPassword }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: q ? "text" : "password",
              value: n.newPassword,
              onChange: (R) => L({ ...n, newPassword: R.target.value }),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10",
              placeholder: a.min8Chars
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => $(!q),
              children: q ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: a.confirmPassword }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: B ? "text" : "password",
              value: n.confirmPassword,
              onChange: (R) => L({ ...n, confirmPassword: R.target.value }),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => W(!B),
              children: B ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-50",
          style: Ce,
          disabled: O || !n.token,
          children: O ? a.resetting : a.resetPasswordTitle
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-pt-2 cil-text-center cil-space-y-3", children: [
        ie > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "cil-text-xs cil-text-gray-500 cil-font-mono", children: [
          a.resendCodeIn,
          /* @__PURE__ */ e.jsx("span", { className: "cil-font-bold", children: De(ie) })
        ] }) : /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: Ae,
            disabled: I || !_,
            className: "cil-text-sm cil-font-medium cil-hover:underline",
            style: Me,
            children: I ? a.loading : a.resendCode
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
function tl({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: o = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onSuccess: g,
  onError: u,
  onNavigate: h,
  apiToken: b,
  // X-API-KEY for headers
  authToken: m,
  // User session token
  email: _,
  // User email
  lang: c = "en",
  texts: w = {}
}) {
  const s = { ...ae[c], ...w }, { isAuthorized: r } = Ne(b), { primaryColor: a, backgroundColor: S, isLoading: f } = he(l, b, d, o, y), { changePassword: j } = xe(l, b), [p, M] = v({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }), [n, L] = v(!1), [O, E] = v(!1), [I, T] = v(""), [q, $] = v(""), [B, W] = v(!1), [D, J] = v(!1), [C, A] = v(!1);
  if (f) return null;
  if (!r)
    return /* @__PURE__ */ e.jsx(Se, { lang: c });
  const Y = async (N) => {
    if (N.preventDefault(), T(""), $(""), p.newPassword !== p.confirmPassword) {
      const z = s.passwordsDontMatch;
      T(z), u && u(z);
      return;
    }
    L(!0);
    try {
      const z = await j({
        email: _ || d.email,
        old_password: p.oldPassword,
        new_password: p.newPassword,
        token: m
        // Now using user session token, not api key
      });
      if (z.success)
        E(!0), $(s.passwordChanged), g && g(z), M({ oldPassword: "", newPassword: "", confirmPassword: "" }), setTimeout(() => $(""), 5e3);
      else {
        const U = z.message || z.error || s.unknownError;
        T(U), u && u(U);
      }
    } catch (z) {
      console.error("⚠️ ChangePassword Error:", z);
      let U = z.message;
      z.isConnectionError ? U = s.connectionError : z.status >= 500 ? U = s.serverError : (!U || U === "Error " + z.status) && (U = s.unknownError), T(U), u && u(U);
    } finally {
      L(!1);
    }
  }, se = (N, z) => {
    M((U) => ({ ...U, [N]: z })), I && T("");
  }, ne = {
    backgroundColor: a,
    color: "#ffffff"
  }, Q = {
    backgroundColor: S
  }, ue = {
    color: a
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: Q, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: s.changePassword }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: s.changePasswordSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: Y, className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(ye, { message: I }),
      /* @__PURE__ */ e.jsx(Te, { message: q }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: s.oldPassword }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: B ? "text" : "password",
              value: p.oldPassword,
              onChange: (N) => se("oldPassword", N.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => W(!B),
              children: B ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: s.newPassword }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: D ? "text" : "password",
              value: p.newPassword,
              onChange: (N) => se("newPassword", N.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => J(!D),
              children: D ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: s.confirmNewPassword || s.confirmPassword }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: C ? "text" : "password",
              value: p.confirmPassword,
              onChange: (N) => se("confirmPassword", N.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => A(!C),
              children: C ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-50",
          style: ne,
          disabled: n,
          children: n ? s.loading : s.changePassword
        }
      ),
      h && /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => h("login"),
          className: "cil-w-full cil-text-sm cil-font-medium cil-hover:underline cil-text-center",
          style: ue,
          children: s.backToLogin
        }
      )
    ] })
  ] });
}
function ol({
  apiBaseUrl: l,
  token: d,
  user: o = {},
  primaryColor: y = "#3b82f6",
  backgroundColor: g = "#ffffff",
  onSuccess: u,
  onError: h,
  onNavigate: b,
  lang: m = "en",
  apiToken: _,
  texts: c = {}
}) {
  const w = { ...ae[m], ...c }, { isAuthorized: s } = Ne(_), { primaryColor: r, backgroundColor: a, isLoading: S } = he(l, _, o, y, g), { post: f } = xe(l, _), [j, p] = v(d ? "verifying" : "idle"), [M, n] = v(""), [L, O] = v("");
  if (ge(() => {
    d && j === "verifying" && E();
  }, [d]), S) return null;
  if (!s)
    return /* @__PURE__ */ e.jsx(Se, { lang: m });
  const E = async () => {
    O("");
    try {
      const q = await f("/verify-email", { token: d });
      if (q.success)
        p("success"), n(q.message || w.verifySuccess), u && u(q);
      else {
        p("error");
        const $ = q.message || q.error || w.verifyError;
        n($), O($), h && h($);
      }
    } catch (q) {
      console.error("⚠️ Verification Error:", q), p("error");
      const $ = w.connectionError;
      n($), O($), h && h($);
    }
  }, I = {
    backgroundColor: r,
    color: "#ffffff"
  }, T = {
    backgroundColor: a
  };
  return d ? /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: T, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: j === "verifying" ? w.verifying : w.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: j === "verifying" ? w.verifyingSubtitle : M })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-py-6 cil-flex cil-flex-col cil-items-center", children: [
      /* @__PURE__ */ e.jsx(ye, { message: L }),
      j === "verifying" && /* @__PURE__ */ e.jsx("div", { className: "cil-animate-spin cil-rounded-full cil-h-12 cil-w-12 cil-border-4 cil-border-gray-200 cil-border-t-blue-500", style: { borderTopColor: r } }),
      j === "success" && /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      j === "error" && /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-red-50 cil-flex cil-items-center cil-justify-center cil-text-red-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })
    ] }),
    j !== "verifying" && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => b && b("login"),
        className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
        style: I,
        children: w.backToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: T, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: w.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: w.checkEmail })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-6 cil-py-4 cil-flex cil-flex-col cil-items-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center cil-text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500 cil-max-w-sm", children: w.verifyEmailMessage }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => b && b("login"),
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-border cil-border-gray-200 cil-hover:bg-gray-50",
          children: w.backToLogin
        }
      )
    ] })
  ] });
}
function nl({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: o = "#3b82f6",
  backgroundColor: y = "#ffffff",
  onNavigate: g,
  lang: u = "en",
  userEmail: h,
  initialMessage: b,
  initialWaitSeconds: m = 0,
  onSuccess: _,
  onError: c,
  apiToken: w,
  // Added apiToken
  texts: s = {}
}) {
  const r = { ...ae[u], ...s }, { isAuthorized: a } = Ne(w), { primaryColor: S, backgroundColor: f, isLoading: j } = he(l, w, d, o, y), { post: p } = xe(l, w), [M, n] = v(!1), [L, O] = v(!1), [E, I] = v(""), [T, q] = v(b || r.waitingConfirmationMsg), [$, B] = v(m), [W, D] = v(!1), [J, C] = v(!1), [A, Y] = v(""), [se, ne] = v(""), Q = Ie(null);
  if (ge(() => ($ > 0 && (Q.current = setInterval(() => {
    B((K) => K <= 1 ? (clearInterval(Q.current), 0) : K - 1);
  }, 1e3)), () => clearInterval(Q.current)), [$]), ge(() => {
    $ === 0 && (m > 0 || W) && (q(r.waitingConfirmationMsg), D(!1));
  }, [$, m, r.waitingConfirmationMsg]), j) return null;
  if (!a)
    return /* @__PURE__ */ e.jsx(Se, { lang: u });
  const ue = (K) => {
    const Z = Math.floor(K / 60), re = K % 60;
    return `${Z.toString().padStart(2, "0")}:${re.toString().padStart(2, "0")}`;
  }, N = async (K) => {
    if (K.preventDefault(), !!E) {
      O(!0), Y("");
      try {
        const Z = await p("/verify-email", { token: E });
        if (Z.success)
          C(!0), _ && _(Z);
        else {
          const re = Z.message || Z.error || r.verificationFailed;
          Y(re), c && c(re);
        }
      } catch (Z) {
        console.error("⚠️ Manual Verification Error:", Z);
        const re = r.connectionError;
        Y(re), c && c(re);
      } finally {
        O(!1);
      }
    }
  }, z = async () => {
    if (!(!h || $ > 0)) {
      n(!0), D(!1), Y(""), ne("");
      try {
        const K = await p("/resend-confirmation", { email: h });
        if (K.success) {
          D(!0);
          const Z = K.message || r.resendSent;
          ne(Z), K.wait_seconds && B(K.wait_seconds);
        } else {
          const Z = K.message || K.error || r.connectionError;
          Y(Z), K.wait_seconds && B(K.wait_seconds), c && c(Z);
        }
      } catch (K) {
        console.error("⚠️ Resend Error:", K);
        const Z = r.connectionError;
        Y(Z), c && c(Z);
      } finally {
        n(!1);
      }
    }
  }, U = {
    backgroundColor: S,
    color: "#ffffff"
  }, ie = {
    backgroundColor: f
  }, fe = {
    color: S
  };
  return J ? /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: ie, children: [
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
        style: U,
        children: r.goToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: ie, children: [
    /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-items-center cil-justify-center cil-mb-6", children: L ? /* @__PURE__ */ e.jsx("div", { className: "cil-animate-spin cil-rounded-full cil-h-10 cil-w-10 cil-border-4 cil-border-gray-200 cil-border-t-blue-500", style: { borderTopColor: S } }) : /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center cil-text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }) }),
    /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold cil-mb-2", children: r.waitingConfirmation }),
    /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-mb-6 cil-text-gray-500", children: T }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-mb-4", children: [
      /* @__PURE__ */ e.jsx(Te, { message: se }),
      /* @__PURE__ */ e.jsx(ye, { message: A })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: N, className: "cil-mb-8 cil-space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium cil-text-gray-700 cil-block cil-text-left cil-px-1", children: r.enterCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: "XXXXXX",
            className: "cil-flex cil-h-12 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-center cil-text-lg cil-font-mono cil-tracking-widest cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
            value: E,
            onChange: (K) => I(K.target.value),
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          disabled: L || !E,
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-disabled:opacity-50",
          style: U,
          children: L ? r.loading : r.verifyButton
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-border-t cil-pt-6 cil-space-y-3", children: [
      $ > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "cil-p-2 cil-rounded cil-bg-gray-50 cil-text-gray-700 cil-text-xs cil-font-mono cil-border cil-inline-block", children: [
        r.resendCodeIn,
        /* @__PURE__ */ e.jsx("span", { className: "cil-font-bold", children: ue($) })
      ] }) : /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: z,
          disabled: M || !h,
          className: "cil-text-sm cil-font-medium cil-hover:underline",
          style: fe,
          children: M ? r.loading : r.resendEmail
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
function Ji(l, d, o, y) {
  const { getMe: g } = xe(l, d), [u, h] = v({
    user: null,
    isLoading: !0,
    error: null
  });
  return ge(() => {
    if (!o || !y) {
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
        const m = await g(y, o);
        if (m.success) {
          const _ = m.user ? { ...m.user, ...Object.fromEntries(Object.entries(m).filter(([c]) => c !== "user" && c !== "success")) } : m;
          h({
            user: _,
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
  }, [o, y, l, d]), u;
}
function Qi(l) {
  return pi({ attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }] })(l);
}
const ui = [
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
function al({
  apps: l = [],
  user: d = {},
  customLabels: o = {},
  backgroundColor: y = "#ffffff",
  primaryColor: g = "#3b82f6",
  apiBaseUrl: u,
  apiToken: h,
  onAppClick: b,
  lang: m = "en",
  texts: _ = {}
}) {
  const [c, w] = v(!1), s = Ie(null), r = { ...ae[m], ..._ }, { primaryColor: a, backgroundColor: S, isLoading: f } = he(u, h, d, g, y);
  if (ge(() => {
    const n = (L) => {
      s.current && !s.current.contains(L.target) && w(!1);
    };
    return c && document.addEventListener("mousedown", n), () => document.removeEventListener("mousedown", n);
  }, [c]), f) return null;
  const j = (n) => n ? n.charAt(0).toUpperCase() : "?", p = (n) => {
    let L = 0;
    for (let O = 0; O < n.length; O++)
      L = n.charCodeAt(O) + ((L << 5) - L);
    return ui[Math.abs(L) % ui.length];
  }, M = (n) => {
    b && b(n), w(!1), n.publicUrl && window.open(n.publicUrl, "_blank");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-inline-block cil-text-left", ref: s, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => w(!c),
        className: "cil-flex cil-items-center cil-justify-center cil-p-2 cil-rounded-full cil-transition-all cil-duration-200 cil-hover:bg-gray-100 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
        style: {
          color: a,
          borderColor: a
        },
        "aria-label": "App Grid",
        children: /* @__PURE__ */ e.jsx(
          Qi,
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
            style: { backgroundColor: S },
            children: /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-3 cil-gap-3", children: [
              l.map((n) => /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => M(n),
                  className: "cil-group cil-relative cil-flex cil-flex-col cil-items-center cil-p-2 cil-rounded-2xl cil-hover:bg-gray-50 cil-transition-all cil-duration-200",
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "cil-w-14 cil-h-14 cil-flex cil-items-center cil-justify-center cil-rounded-2xl cil-shadow-sm cil-text-white cil-text-2xl cil-font-bold cil-mb-2 cil-group-hover:shadow-lg cil-group-hover:scale-105 cil-transition-all cil-duration-300",
                        style: { backgroundColor: p(n.appKey) },
                        children: j(n.appKey)
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "cil-text-[10px] cil-font-bold cil-text-gray-700 cil-uppercase cil-tracking-wider cil-text-center cil-truncate cil-w-full cil-px-1", children: o[n.appKey] ? o[n.appKey] : n.appKey.replace(/_/g, " ").length > 9 ? `${n.appKey.replace(/_/g, " ").substring(0, 9)}...` : n.appKey.replace(/_/g, " ") }),
                    /* @__PURE__ */ e.jsxs("div", { className: "cil-absolute cil--bottom-10 cil-left-1/2 cil--translate-x-1/2 cil-px-2 cil-py-1 cil-bg-gray-900 cil-text-white cil-text-[10px] cil-rounded cil-opacity-0 cil-group-hover:opacity-100 cil-transition-opacity cil-pointer-events-none cil-whitespace-nowrap cil-z-[60] cil-shadow-xl", children: [
                      n.appName,
                      /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil--top-1 cil-left-1/2 cil--translate-x-1/2 cil-border-x-4 cil-border-x-transparent cil-border-b-4 cil-border-b-gray-900" })
                    ] })
                  ]
                },
                n.appKey
              )),
              l.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "cil-col-span-3 cil-py-12 cil-text-center cil-text-gray-400 cil-text-sm", children: r.noApps })
            ] })
          }
        )
      }
    )
  ] });
}
function Zi(l) {
  if (!l || typeof l != "string") return !1;
  try {
    const d = new URL(l);
    return d.protocol === "http:" || d.protocol === "https:";
  } catch {
    return !1;
  }
}
function bi(l) {
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
  for (const o of d)
    if (Zi(o))
      return o;
  return null;
}
function dl({
  user: l = {},
  backgroundColor: d = "#ffffff",
  primaryColor: o = "#3b82f6",
  onLogout: y,
  onChangePassword: g,
  onProfileClick: u,
  // Added onProfileClick
  extraItems: h = [],
  // Array of { icon: ReactNode, label: string, onClick: function }
  lang: b = "en",
  apiBaseUrl: m,
  apiToken: _,
  texts: c = {}
}) {
  var O;
  const [w, s] = v(!1), r = Ie(null), a = { ...ae[b], ...c }, { primaryColor: S, backgroundColor: f, isLoading: j } = he(m, _, l, o, d);
  if (ge(() => {
    const E = (I) => {
      r.current && !r.current.contains(I.target) && s(!1);
    };
    return w && document.addEventListener("mousedown", E), () => document.removeEventListener("mousedown", E);
  }, [w]), j) return null;
  const p = bi(l), M = () => {
    const E = l["Full Name"] || l.fullName || l.full_name || l.firstName || l.first_name;
    return E ? E.trim().charAt(0).toUpperCase() : l.email ? l.email.charAt(0).toUpperCase() : "U";
  }, n = l["Full Name"] || l.fullName || l.full_name || l.firstName || l.first_name || ((O = l.email) == null ? void 0 : O.split("@")[0]) || "User", L = ({ icon: E, label: I, onClick: T, className: q = "", color: $ = "cil-text-gray-600" }) => /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: () => {
        s(!1), T && T();
      },
      className: `cil-w-full cil-flex cil-items-center cil-gap-3 cil-px-3 cil-py-2 cil-text-sm cil-rounded-xl cil-hover:bg-gray-50 cil-transition-colors cil-group ${$} ${q}`,
      children: [
        E && /* @__PURE__ */ e.jsx(E, { className: "cil-w-4 cil-h-4 cil-transition-transform cil-group-hover:scale-110" }),
        /* @__PURE__ */ e.jsx("span", { className: "cil-flex-1 cil-text-left", children: I })
      ]
    }
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-inline-block cil-text-left", ref: r, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => s(!w),
        className: "cil-flex cil-items-center cil-justify-center cil-w-10 cil-h-10 cil-rounded-full cil-border-2 cil-transition-all cil-duration-200 cil-hover:shadow-md cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-overflow-hidden",
        style: {
          borderColor: S,
          backgroundColor: f,
          color: S
        },
        children: [
          p ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: p,
              alt: n,
              className: "cil-w-full cil-h-full cil-object-cover",
              onError: (E) => {
                E.target.style.display = "none", E.target.nextSibling.style.display = "cil-block";
              }
            }
          ) : null,
          /* @__PURE__ */ e.jsx("span", { className: `${p ? "cil-hidden" : "cil-block"} cil-text-sm cil-font-bold`, children: M() })
        ]
      }
    ),
    w && /* @__PURE__ */ e.jsx(
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
                /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-font-bold cil-text-gray-700 cil-truncate cil-mb-0.5", children: n }),
                /* @__PURE__ */ e.jsx("p", { className: "cil-text-[10px] cil-font-medium cil-text-gray-400 cil-truncate", children: l.email })
              ] }),
              /* @__PURE__ */ e.jsx(
                L,
                {
                  icon: mi,
                  label: a.profile,
                  onClick: u
                }
              ),
              /* @__PURE__ */ e.jsx(
                L,
                {
                  icon: Wi,
                  label: a.changePassword,
                  onClick: g
                }
              ),
              h.map((E, I) => /* @__PURE__ */ e.jsx(
                L,
                {
                  icon: E.icon,
                  label: E.label,
                  onClick: E.onClick
                },
                `extra-${I}`
              )),
              h.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "cil-my-1 cil-border-t cil-border-gray-50" }),
              /* @__PURE__ */ e.jsx(
                L,
                {
                  icon: gi,
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
function ul({
  apiBaseUrl: l,
  apiToken: d,
  authToken: o,
  userEmail: y,
  primaryColor: g = "#3b82f6",
  backgroundColor: u = "#ffffff",
  onClose: h,
  onNavigate: b,
  onError: m,
  onSuccess: _,
  lang: c = "en",
  texts: w = {}
}) {
  const s = { ...ae[c], ...w }, { user: r, isLoading: a, error: S } = Ji(l, d, o, y), { primaryColor: f, backgroundColor: j, isLoading: p } = he(l, d, r, g, u), { post: M } = xe(l, d), [n, L] = v([]), [O, E] = v(!1), [I, T] = v(""), [q, $] = v(""), [B, W] = v(!1);
  ge(() => {
    r != null && r.active_sessions ? L(r.active_sessions) : r != null && r.sessions && L(r.sessions);
  }, [r]);
  const D = (N) => N ? N.includes("Mozilla/") ? N.includes("iPhone") ? "iPhone" : N.includes("Android") ? "Android Device" : N.includes("Windows") ? "Windows PC" : N.includes("Macintosh") ? "Mac" : N.includes("iPad") ? "iPad" : "Web Browser" : N : s.deviceName, J = (N) => {
    if (!N) return /* @__PURE__ */ e.jsx(oi, { className: "w-5 h-5" });
    const z = N.toLowerCase();
    return z.includes("iphone") || z.includes("android") ? /* @__PURE__ */ e.jsx(Yi, { className: "w-5 h-5" }) : z.includes("ipad") || z.includes("tablet") ? /* @__PURE__ */ e.jsx(Hi, { className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(oi, { className: "w-5 h-5" });
  };
  if (a || p)
    return /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-max-w-4xl cil-mx-auto cil-p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-flex-col cil-items-center cil-justify-center cil-py-20 cil-space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
        /* @__PURE__ */ e.jsx(ri, { className: "cil-w-16 cil-h-16 cil-animate-spin", style: { color: g } }),
        /* @__PURE__ */ e.jsx(ci, { className: "cil-w-6 cil-h-6 cil-absolute cil-top-0 cil-right-0 cil-animate-pulse", style: { color: g } })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-lg cil-font-semibold cil-text-gray-600 cil-animate-pulse", children: s.loadingProfile })
    ] }) });
  if (S || !r)
    return /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-max-w-4xl cil-mx-auto cil-p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-flex-col cil-items-center cil-justify-center cil-py-20 cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(fi, { className: "cil-w-16 cil-h-16 cil-text-red-500" }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-lg cil-font-semibold cil-text-red-600", children: S || s.failedLoadProfile }),
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
  const C = r["Full Name"] || r.fullName || r.full_name || `${r.firstName || ""} ${r.lastName || ""}`.trim() || "User", A = r.Roles || [], Y = r.permissions || [], se = r.biography || r.bio || "", ne = bi(r), Q = () => C.charAt(0).toUpperCase(), ue = async (N = !1, z = []) => {
    if (!o) {
      const U = s.noSessions;
      T(U);
      return;
    }
    E(!0), T(""), $("");
    try {
      const U = await M("/logout_sessions", {
        email: r.email || y || "",
        all_sessions: N,
        session_ids: z
      }, { token: o });
      if (U.success)
        L(N ? [] : (ie) => ie.filter((fe) => !z.includes(fe._id))), $(s.logoutSuccess), _ && _(U);
      else {
        const ie = U.message || U.error || "Logout failed";
        T(ie), m && m(ie);
      }
    } catch (U) {
      console.error("⚠️ Logout Sessions Error:", U), T(s.connectionError);
    } finally {
      E(!1);
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
              ne && !B ? /* @__PURE__ */ e.jsx("div", { className: "cil-relative", children: /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: ne,
                  alt: C,
                  className: "cil-w-32 cil-h-32 md:cil-w-40 md:cil-h-40 cil-rounded-3xl cil-object-cover cil-shadow-2xl cil-ring-4 cil-ring-white cil-transition-transform cil-group-hover:scale-105",
                  onError: () => W(!0)
                }
              ) }) : /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "cil-w-32 cil-h-32 md:cil-w-40 md:cil-h-40 cil-rounded-3xl cil-flex cil-items-center cil-justify-center cil-text-5xl md:cil-text-6xl cil-font-black cil-shadow-2xl cil-ring-4 cil-ring-white cil-transition-transform cil-group-hover:scale-105",
                  style: {
                    background: `linear-gradient(135deg, ${f}30 0%, ${f}10 100%)`,
                    color: f
                  },
                  children: Q()
                }
              ),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "cil-absolute cil--bottom-2 cil--right-2 cil-w-12 cil-h-12 cil-rounded-2xl cil-flex cil-items-center cil-justify-center cil-shadow-lg",
                  style: { backgroundColor: f },
                  children: /* @__PURE__ */ e.jsx(ci, { className: "cil-w-6 cil-h-6 cil-text-white" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "cil-flex-1 cil-text-center md:cil-text-left cil-space-y-3", children: [
              /* @__PURE__ */ e.jsx("h1", { className: "cil-text-4xl md:cil-text-5xl cil-font-black cil-text-gray-900 cil-tracking-tight", children: C }),
              /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-justify-center md:cil-justify-start cil-gap-2 cil-text-gray-600", children: [
                /* @__PURE__ */ e.jsx(Ui, { className: "cil-w-5 cil-h-5" }),
                /* @__PURE__ */ e.jsx("span", { className: "cil-text-lg cil-font-medium", children: r.email || y })
              ] }),
              se && /* @__PURE__ */ e.jsxs("p", { className: "cil-text-gray-600 cil-max-w-2xl cil-leading-relaxed cil-italic", children: [
                '"',
                se,
                '"'
              ] }),
              A.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-flex-wrap cil-gap-2 cil-justify-center md:cil-justify-start cil-pt-2", children: A.map((N, z) => /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: "cil-px-4 cil-py-1.5 cil-rounded-full cil-text-xs cil-font-bold cil-uppercase cil-tracking-wider cil-shadow-sm cil-transition-all cil-hover:scale-105 cil-hover:shadow-md",
                  style: {
                    backgroundColor: `${f}20`,
                    color: f,
                    border: `2px solid ${f}40`
                  },
                  children: N.replace(/_/g, " ")
                },
                z
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
        style: { backgroundColor: j },
        children: [
          /* @__PURE__ */ e.jsx(ye, { message: I }),
          /* @__PURE__ */ e.jsx(Te, { message: q }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-1 lg:cil-grid-cols-2 cil-gap-10", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-8", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2", style: { borderColor: `${f}20` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${f}15` }, children: /* @__PURE__ */ e.jsx(mi, { className: "cil-w-6 cil-h-6", style: { color: f } }) }),
                  /* @__PURE__ */ e.jsx("h2", { className: "cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide", children: s.personalInfo })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4 cil-pl-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "cil-group", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-uppercase cil-font-bold cil-text-gray-400 cil-tracking-widest cil-mb-1.5", children: s.fullNameLabel }),
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-base cil-font-bold cil-text-gray-800 cil-group-hover:text-gray-900 cil-transition-colors", children: C })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "cil-group", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-uppercase cil-font-bold cil-text-gray-400 cil-tracking-widest cil-mb-1.5", children: s.email }),
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-base cil-font-semibold cil-text-gray-700 cil-group-hover:text-gray-900 cil-transition-colors", children: r.email || y })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2", style: { borderColor: `${f}20` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${f}15` }, children: /* @__PURE__ */ e.jsx(si, { className: "cil-w-6 cil-h-6", style: { color: f } }) }),
                  /* @__PURE__ */ e.jsx("h2", { className: "cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide", children: s.permissionsLabel })
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "cil-grid cil-grid-cols-1 cil-gap-3 cil-max-h-[400px] cil-overflow-y-auto cil-pr-2 cil-custom-scrollbar", children: Y.length > 0 ? Y.map((N, z) => {
                  var U, ie;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      className: "cil-p-4 cil-rounded-2xl cil-border-2 cil-flex cil-flex-col cil-gap-2 cil-hover:shadow-lg cil-transition-all cil-group",
                      style: {
                        backgroundColor: `${f}05`,
                        borderColor: `${f}20`
                      },
                      children: [
                        /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-font-bold cil-uppercase cil-tracking-wider", style: { color: f }, children: ((U = N["Permission ID"]) == null ? void 0 : U.split(".")[0]) || "App" }),
                        /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-font-bold cil-text-gray-800", children: ((ie = N["Permission ID"]) == null ? void 0 : ie.split(".").slice(1).join(" ")) || N["Permission ID"] }),
                        /* @__PURE__ */ e.jsx(
                          "span",
                          {
                            className: "cil-mt-1 cil-w-fit cil-px-3 cil-py-1 cil-rounded-lg cil-text-xs cil-font-extrabold cil-uppercase cil-tracking-widest",
                            style: { backgroundColor: f, color: "white" },
                            children: N["Action Key"]
                          }
                        )
                      ]
                    },
                    z
                  );
                }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-py-8 cil-text-center", children: [
                  /* @__PURE__ */ e.jsx(si, { className: "cil-w-12 cil-h-12 cil-mx-auto cil-mb-3 cil-text-gray-300" }),
                  /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-400 cil-italic", children: s.noPermissions })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2", style: { borderColor: `${f}20` }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${f}15` }, children: /* @__PURE__ */ e.jsx(ti, { className: "cil-w-6 cil-h-6", style: { color: f } }) }),
                /* @__PURE__ */ e.jsx("h2", { className: "cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide", children: s.activeSessions })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "cil-space-y-3 cil-max-h-[500px] cil-overflow-y-auto cil-pr-2 cil-custom-scrollbar", children: n.length > 0 ? n.map((N) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "cil-p-4 cil-border-2 cil-rounded-2xl cil-flex cil-justify-between cil-items-center cil-group cil-hover:shadow-lg cil-transition-all",
                  style: {
                    backgroundColor: `${f}05`,
                    borderColor: `${f}15`
                  },
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-flex-1", children: [
                      /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${f}10`, color: f }, children: J(N["Device Name"]) }),
                      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1.5 cil-flex-1", children: [
                        /* @__PURE__ */ e.jsx("div", { className: "cil-font-black cil-text-gray-800 cil-text-sm", title: N["Device Name"], children: D(N["Device Name"]) }),
                        /* @__PURE__ */ e.jsxs("div", { className: "cil-text-xs cil-text-gray-600 cil-font-semibold cil-flex cil-items-center cil-gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "cil-w-2 cil-h-2 cil-rounded-full cil-bg-green-500" }),
                          N.IP
                        ] }),
                        N["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "cil-text-xs cil-text-gray-500 cil-italic", children: [
                          s.expiry,
                          ": ",
                          new Date(N["Expiration Date"]).toLocaleDateString()
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => ue(!1, [N._id]),
                        disabled: O,
                        className: "cil-p-3 cil-text-red-500 cil-hover:bg-red-50 cil-rounded-xl cil-transition-all cil-opacity-0 cil-group-hover:opacity-100 cil-focus:opacity-100 cil-hover:scale-110",
                        title: s.logoutThisSession,
                        children: /* @__PURE__ */ e.jsx(gi, { className: "cil-w-5 cil-h-5" })
                      }
                    )
                  ]
                },
                N._id
              )) : /* @__PURE__ */ e.jsxs("div", { className: "cil-py-12 cil-text-center", children: [
                /* @__PURE__ */ e.jsx(ti, { className: "cil-w-12 cil-h-12 cil-mx-auto cil-mb-3 cil-text-gray-300" }),
                /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-400 cil-italic", children: s.noSessions })
              ] }) }),
              n.length > 1 && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => ue(!0),
                  disabled: O,
                  className: "cil-w-full cil-py-3 cil-text-sm cil-uppercase cil-tracking-widest cil-font-extrabold cil-text-white cil-rounded-2xl cil-transition-all cil-active:scale-95 cil-hover:brightness-110 cil-shadow-lg",
                  style: { backgroundColor: "#ef4444" },
                  children: O ? /* @__PURE__ */ e.jsxs("span", { className: "cil-flex cil-items-center cil-justify-center cil-gap-2", children: [
                    /* @__PURE__ */ e.jsx(ri, { className: "cil-w-4 cil-h-4 cil-animate-spin" }),
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
                onClick: () => b && b("change-password"),
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
  al as AppGrid,
  Se as AuthError,
  tl as ChangePassword,
  ol as EmailVerification,
  cl as ForgotPassword,
  ll as Login,
  sl as ResetPassword,
  rl as SignUp,
  yi as SocialAuthButtons,
  dl as UserMenu,
  ul as UserProfile,
  nl as WaitingConfirmation,
  bi as getValidProfileImageUrl,
  Zi as isValidUrl,
  ae as translations,
  xe as useAuthApi,
  Ne as useSecurity,
  Ji as useUserProfile
};
