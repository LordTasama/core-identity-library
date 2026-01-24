import ye, { useEffect as ge, useState as v, useRef as Te } from "react";
import { AlertTriangle as $i, EyeOff as ve, Eye as we, AlertCircle as fi, CheckCircle as Vi, User as mi, KeyRound as Wi, LogOut as xi, Sparkles as si, Mail as Ui, Key as ri, Settings as ti, Monitor as oi, Smartphone as Yi, Tablet as Hi } from "lucide-react";
var He = { exports: {} }, Le = {};
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
  var l = ye, d = Symbol.for("react.element"), o = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, f = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(b, x, _) {
    var s, w = {}, r = null, c = null;
    _ !== void 0 && (r = "" + _), x.key !== void 0 && (r = "" + x.key), x.ref !== void 0 && (c = x.ref);
    for (s in x) g.call(x, s) && !u.hasOwnProperty(s) && (w[s] = x[s]);
    if (b && b.defaultProps) for (s in x = b.defaultProps, x) w[s] === void 0 && (w[s] = x[s]);
    return { $$typeof: d, type: b, key: r, ref: c, props: w, _owner: f.current };
  }
  return Le.Fragment = o, Le.jsx = p, Le.jsxs = p, Le;
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
function Ki() {
  return ai || (ai = 1, process.env.NODE_ENV !== "production" && function() {
    var l = ye, d = Symbol.for("react.element"), o = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), b = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), r = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), n = Symbol.iterator, C = "@@iterator";
    function m(i) {
      if (i === null || typeof i != "object")
        return null;
      var t = n && i[n] || i[C];
      return typeof t == "function" ? t : null;
    }
    var j = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(i) {
      {
        for (var t = arguments.length, h = new Array(t > 1 ? t - 1 : 0), S = 1; S < t; S++)
          h[S - 1] = arguments[S];
        M("error", i, h);
      }
    }
    function M(i, t, h) {
      {
        var S = j.ReactDebugCurrentFrame, H = S.getStackAddendum();
        H !== "" && (t += "%s", h = h.concat([H]));
        var B = h.map(function(V) {
          return String(V);
        });
        B.unshift("Warning: " + t), Function.prototype.apply.call(console[i], console, B);
      }
    }
    var a = !1, L = !1, O = !1, P = !1, I = !1, T;
    T = Symbol.for("react.module.reference");
    function q(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === g || i === u || I || i === f || i === _ || i === s || P || i === c || a || L || O || typeof i == "object" && i !== null && (i.$$typeof === r || i.$$typeof === w || i.$$typeof === p || i.$$typeof === b || i.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === T || i.getModuleId !== void 0));
    }
    function F(i, t, h) {
      var S = i.displayName;
      if (S)
        return S;
      var H = t.displayName || t.name || "";
      return H !== "" ? h + "(" + H + ")" : h;
    }
    function K(i) {
      return i.displayName || "Context";
    }
    function W(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case g:
          return "Fragment";
        case o:
          return "Portal";
        case u:
          return "Profiler";
        case f:
          return "StrictMode";
        case _:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case b:
            var t = i;
            return K(t) + ".Consumer";
          case p:
            var h = i;
            return K(h._context) + ".Provider";
          case x:
            return F(i, i.render, "ForwardRef");
          case w:
            var S = i.displayName || null;
            return S !== null ? S : W(i.type) || "Memo";
          case r: {
            var H = i, B = H._payload, V = H._init;
            try {
              return W(V(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, J = 0, k, A, Y, te, ae, Q, fe;
    function N() {
    }
    N.__reactDisabledLog = !0;
    function $() {
      {
        if (J === 0) {
          k = console.log, A = console.info, Y = console.warn, te = console.error, ae = console.group, Q = console.groupCollapsed, fe = console.groupEnd;
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
            log: z({}, i, {
              value: k
            }),
            info: z({}, i, {
              value: A
            }),
            warn: z({}, i, {
              value: Y
            }),
            error: z({}, i, {
              value: te
            }),
            group: z({}, i, {
              value: ae
            }),
            groupCollapsed: z({}, i, {
              value: Q
            }),
            groupEnd: z({}, i, {
              value: fe
            })
          });
        }
        J < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = j.ReactCurrentDispatcher, me;
    function X(i, t, h) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (H) {
            var S = H.stack.trim().match(/\n( *(at )?)/);
            me = S && S[1] || "";
          }
        return `
` + me + i;
      }
    }
    var Z = !1, se;
    {
      var De = typeof WeakMap == "function" ? WeakMap : Map;
      se = new De();
    }
    function Ae(i, t) {
      if (!i || Z)
        return "";
      {
        var h = se.get(i);
        if (h !== void 0)
          return h;
      }
      var S;
      Z = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = le.current, le.current = null, $();
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
            } catch (ne) {
              S = ne;
            }
            Reflect.construct(i, [], V);
          } else {
            try {
              V.call();
            } catch (ne) {
              S = ne;
            }
            i.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            S = ne;
          }
          i();
        }
      } catch (ne) {
        if (ne && S && typeof ne.stack == "string") {
          for (var D = ne.stack.split(`
`), re = S.stack.split(`
`), ee = D.length - 1, ce = re.length - 1; ee >= 1 && ce >= 0 && D[ee] !== re[ce]; )
            ce--;
          for (; ee >= 1 && ce >= 0; ee--, ce--)
            if (D[ee] !== re[ce]) {
              if (ee !== 1 || ce !== 1)
                do
                  if (ee--, ce--, ce < 0 || D[ee] !== re[ce]) {
                    var ue = `
` + D[ee].replace(" at new ", " at ");
                    return i.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", i.displayName)), typeof i == "function" && se.set(i, ue), ue;
                  }
                while (ee >= 1 && ce >= 0);
              break;
            }
        }
      } finally {
        Z = !1, le.current = B, U(), Error.prepareStackTrace = H;
      }
      var Pe = i ? i.displayName || i.name : "", ke = Pe ? X(Pe) : "";
      return typeof i == "function" && se.set(i, ke), ke;
    }
    function Fe(i, t, h) {
      return Ae(i, !1);
    }
    function Oe(i) {
      var t = i.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ce(i, t, h) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Ae(i, Oe(i));
      if (typeof i == "string")
        return X(i);
      switch (i) {
        case _:
          return X("Suspense");
        case s:
          return X("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case x:
            return Fe(i.render);
          case w:
            return Ce(i.type, t, h);
          case r: {
            var S = i, H = S._payload, B = S._init;
            try {
              return Ce(B(H), t, h);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, Me = {}, R = j.ReactDebugCurrentFrame;
    function E(i) {
      if (i) {
        var t = i._owner, h = Ce(i.type, i._source, t ? t.type : null);
        R.setExtraStackFrame(h);
      } else
        R.setExtraStackFrame(null);
    }
    function G(i, t, h, S, H) {
      {
        var B = Function.call.bind(be);
        for (var V in i)
          if (B(i, V)) {
            var D = void 0;
            try {
              if (typeof i[V] != "function") {
                var re = Error((S || "React class") + ": " + h + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              D = i[V](t, V, S, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              D = ee;
            }
            D && !(D instanceof Error) && (E(H), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", h, V, typeof D), E(null)), D instanceof Error && !(D.message in Me) && (Me[D.message] = !0, E(H), y("Failed %s type: %s", h, D.message), E(null));
          }
      }
    }
    var oe = Array.isArray;
    function _e(i) {
      return oe(i);
    }
    function vi(i) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, h = t && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return h;
      }
    }
    function wi(i) {
      try {
        return qe(i), !1;
      } catch {
        return !0;
      }
    }
    function qe(i) {
      return "" + i;
    }
    function Ke(i) {
      if (wi(i))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vi(i)), qe(i);
    }
    var Xe = j.ReactCurrentOwner, ji = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ge, Be;
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
      typeof i.ref == "string" && Xe.current;
    }
    function Si(i, t) {
      {
        var h = function() {
          Ge || (Ge = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        h.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function Ei(i, t) {
      {
        var h = function() {
          Be || (Be = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        h.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var Pi = function(i, t, h, S, H, B, V) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: i,
        key: t,
        ref: h,
        props: V,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function _i(i, t, h, S, H) {
      {
        var B, V = {}, D = null, re = null;
        h !== void 0 && (Ke(h), D = "" + h), Ci(t) && (Ke(t.key), D = "" + t.key), Ni(t) && (re = t.ref, ki(t, H));
        for (B in t)
          be.call(t, B) && !ji.hasOwnProperty(B) && (V[B] = t[B]);
        if (i && i.defaultProps) {
          var ee = i.defaultProps;
          for (B in ee)
            V[B] === void 0 && (V[B] = ee[B]);
        }
        if (D || re) {
          var ce = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          D && Si(V, ce), re && Ei(V, ce);
        }
        return Pi(i, D, re, H, S, Xe.current, V);
      }
    }
    var $e = j.ReactCurrentOwner, Je = j.ReactDebugCurrentFrame;
    function Ee(i) {
      if (i) {
        var t = i._owner, h = Ce(i.type, i._source, t ? t.type : null);
        Je.setExtraStackFrame(h);
      } else
        Je.setExtraStackFrame(null);
    }
    var Ve;
    Ve = !1;
    function We(i) {
      return typeof i == "object" && i !== null && i.$$typeof === d;
    }
    function Qe() {
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
    var Ze = {};
    function Ri(i) {
      {
        var t = Qe();
        if (!t) {
          var h = typeof i == "string" ? i : i.displayName || i.name;
          h && (t = `

Check the top-level render call using <` + h + ">.");
        }
        return t;
      }
    }
    function ei(i, t) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var h = Ri(t);
        if (Ze[h])
          return;
        Ze[h] = !0;
        var S = "";
        i && i._owner && i._owner !== $e.current && (S = " It was passed a child from " + W(i._owner.type) + "."), Ee(i), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, S), Ee(null);
      }
    }
    function ii(i, t) {
      {
        if (typeof i != "object")
          return;
        if (_e(i))
          for (var h = 0; h < i.length; h++) {
            var S = i[h];
            We(S) && ei(S, t);
          }
        else if (We(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var H = m(i);
          if (typeof H == "function" && H !== i.entries)
            for (var B = H.call(i), V; !(V = B.next()).done; )
              We(V.value) && ei(V.value, t);
        }
      }
    }
    function Ai(i) {
      {
        var t = i.type;
        if (t == null || typeof t == "string")
          return;
        var h;
        if (typeof t == "function")
          h = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === w))
          h = t.propTypes;
        else
          return;
        if (h) {
          var S = W(t);
          G(h, i.props, "prop", S, i);
        } else if (t.PropTypes !== void 0 && !Ve) {
          Ve = !0;
          var H = W(t);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Oi(i) {
      {
        for (var t = Object.keys(i.props), h = 0; h < t.length; h++) {
          var S = t[h];
          if (S !== "children" && S !== "key") {
            Ee(i), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Ee(null);
            break;
          }
        }
        i.ref !== null && (Ee(i), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    var li = {};
    function ci(i, t, h, S, H, B) {
      {
        var V = q(i);
        if (!V) {
          var D = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = Li();
          re ? D += re : D += Qe();
          var ee;
          i === null ? ee = "null" : _e(i) ? ee = "array" : i !== void 0 && i.$$typeof === d ? (ee = "<" + (W(i.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof i, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, D);
        }
        var ce = _i(i, t, h, H, B);
        if (ce == null)
          return ce;
        if (V) {
          var ue = t.children;
          if (ue !== void 0)
            if (S)
              if (_e(ue)) {
                for (var Pe = 0; Pe < ue.length; Pe++)
                  ii(ue[Pe], i);
                Object.freeze && Object.freeze(ue);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ii(ue, i);
        }
        if (be.call(t, "key")) {
          var ke = W(i), ne = Object.keys(t).filter(function(Fi) {
            return Fi !== "key";
          }), Ue = ne.length > 0 ? "{key: someKey, " + ne.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!li[ke + Ue]) {
            var Di = ne.length > 0 ? "{" + ne.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ue, ke, Di, ke), li[ke + Ue] = !0;
          }
        }
        return i === g ? Oi(ce) : Ai(ce), ce;
      }
    }
    function Mi(i, t, h) {
      return ci(i, t, h, !0);
    }
    function Ii(i, t, h) {
      return ci(i, t, h, !1);
    }
    var Ti = Ii, zi = Mi;
    Re.Fragment = g, Re.jsx = Ti, Re.jsxs = zi;
  }()), Re;
}
process.env.NODE_ENV === "production" ? He.exports = qi() : He.exports = Ki();
var e = He.exports, gi = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, di = ye.createContext && ye.createContext(gi), je = function() {
  return je = Object.assign || function(l) {
    for (var d, o = 1, g = arguments.length; o < g; o++) {
      d = arguments[o];
      for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (l[f] = d[f]);
    }
    return l;
  }, je.apply(this, arguments);
}, Xi = function(l, d) {
  var o = {};
  for (var g in l) Object.prototype.hasOwnProperty.call(l, g) && d.indexOf(g) < 0 && (o[g] = l[g]);
  if (l != null && typeof Object.getOwnPropertySymbols == "function") for (var f = 0, g = Object.getOwnPropertySymbols(l); f < g.length; f++)
    d.indexOf(g[f]) < 0 && Object.prototype.propertyIsEnumerable.call(l, g[f]) && (o[g[f]] = l[g[f]]);
  return o;
};
function hi(l) {
  return l && l.map(function(d, o) {
    return ye.createElement(d.tag, je({
      key: o
    }, d.attr), hi(d.child));
  });
}
function pi(l) {
  return function(d) {
    return ye.createElement(Gi, je({
      attr: je({}, l.attr)
    }, d), hi(l.child));
  };
}
function Gi(l) {
  var d = function(o) {
    var g = l.attr, f = l.size, u = l.title, p = Xi(l, ["attr", "size", "title"]), b = f || o.size || "1em", x;
    return o.className && (x = o.className), l.className && (x = (x ? x + " " : "") + l.className), ye.createElement("svg", je({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, g, p, {
      className: x,
      style: je(je({
        color: l.color || o.color
      }, o.style), l.style),
      height: b,
      width: b,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && ye.createElement("title", null, u), l.children);
  };
  return di !== void 0 ? ye.createElement(di.Consumer, null, function(o) {
    return d(o);
  }) : d(gi);
}
function Bi(l) {
  return pi({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "title", attr: {}, child: [] }, { tag: "path", attr: { d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" } }] })(l);
}
const de = {
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
function he(l, d) {
  const { isAuthorized: o } = Ne(d), g = async (r, c = {}) => {
    const { token: n, ...C } = c;
    try {
      const m = {
        "Content-Type": "application/json",
        "X-API-KEY": d,
        "X-REQUEST-URL": typeof window < "u" ? window.location.origin.replace(/\/$/, "") : "",
        ...c.headers
      };
      n && (m.Authorization = `Bearer ${n}`);
      const j = await fetch(`${l}${r}`, {
        ...C,
        headers: m,
        credentials: "include"
      });
      let y;
      const M = j.headers.get("content-type");
      if (M && M.includes("application/json"))
        try {
          y = await j.json();
        } catch (a) {
          console.error("Failed to parse JSON response", a), y = { message: await j.text() };
        }
      else
        y = { message: await j.text() };
      if (!j.ok) {
        const a = new Error(y.message || y.error || `Error ${j.status}`);
        throw a.status = j.status, a.data = y, a;
      }
      return y;
    } catch (m) {
      if (m.name === "TypeError" && (m.message.includes("Failed to fetch") || m.message.includes("NetworkError"))) {
        const j = new Error("Connection Error");
        throw j.isConnectionError = !0, j;
      }
      throw m;
    }
  }, f = async (r, c, n = {}) => g(r, {
    method: "POST",
    body: c ? JSON.stringify(c) : void 0,
    ...n
  }), u = async (r, c = {}) => g(r, {
    method: "GET",
    ...c
  });
  return {
    post: f,
    get: u,
    verifySession: async (r, c) => f("/verify-session", { email: c }, { token: r }),
    getUserContext: async (r, c) => f("/user-context", { email: c }, { token: r }),
    logout: async (r, c) => f("/logout", { email: c }, { token: r }),
    changePassword: async (r) => {
      const { token: c, ...n } = r;
      return f("/change-password", n, { token: c });
    },
    getAppColors: async () => u("/colors-app"),
    getMe: async (r, c) => f("/me", { email: r }, { token: c })
  };
}
function yi({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: o = "#3b82f6",
  onSuccess: g,
  onError: f,
  lang: u = "en",
  apiToken: p,
  texts: b = {}
}) {
  var c;
  const x = { ...de[u], ...b }, { post: _ } = he(l, p), s = ((c = d.app_info) == null ? void 0 : c.primaryColor) || o;
  ge(() => {
    const n = (C) => {
      let m, j;
      try {
        const a = new URL(l);
        m = a.origin;
        const L = a.hostname.split(".");
        L.length >= 2 && (j = L.slice(-2).join("."));
      } catch {
      }
      const y = j && C.origin.endsWith(j) || m && C.origin === m;
      if (C.origin === window.location.origin || y) {
        if (C.data.type === "OAUTH_SUCCESS") {
          const { token: a, handshake_code: L, user: O } = C.data.payload;
          console.log("OAuth Login Successful:", O), g && g({
            success: !0,
            token: a,
            handshake_code: L,
            user: O,
            email: O == null ? void 0 : O.email,
            // Ensure compatibility with existing success handlers
            provider: "Social"
          });
        } else if (C.data.type === "OAUTH_ERROR") {
          const { message: a } = C.data.payload;
          console.error("OAuth Login Error:", a), f && f(a);
        }
      }
    };
    return window.addEventListener("message", n, !1), () => window.removeEventListener("message", n);
  }, [g, f, l]);
  const w = (n) => {
    _("/login", {
      provider: n,
      frontend_origin: window.location.origin
    }).then((C) => {
      const m = C.auth_url || C.redirect_url;
      if (m) {
        const M = window.screen.width / 2 - 300, a = window.screen.height / 2 - 700 / 2;
        window.open(
          m,
          "login_popup",
          `width=600,height=700,left=${M},top=${a},status=no,resizable=yes,scrollbars=yes`
        );
      } else {
        const j = C.error || C.message || (u === "es" ? "Error al iniciar sesión social" : "Social login error");
        f && f(j);
      }
    }).catch((C) => {
      console.error("⚠️ Social Auth Error:", C), f && f(C.message || "Error");
    });
  }, r = s ? { borderColor: s, color: s } : {};
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-3", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        className: "cil-w-full cil-flex cil-items-center cil-justify-center cil-gap-2 cil-px-4 cil-py-2 cil-border cil-rounded-md cil-hover:bg-gray-50 cil-transition-colors",
        style: r,
        onClick: () => w("Google"),
        "data-testid": "button-google-login",
        children: [
          /* @__PURE__ */ e.jsx(Bi, { className: "cil-h-4 cil-w-4" }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            x.continueWith,
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
        style: r,
        onClick: () => w("Microsoft"),
        "data-testid": "button-microsoft-login",
        children: [
          /* @__PURE__ */ e.jsx("svg", { className: "cil-h-4 cil-w-4", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ e.jsx("path", { d: "M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" }) }),
          /* @__PURE__ */ e.jsxs("span", { children: [
            x.continueWith,
            " Microsoft"
          ] })
        ]
      }
    )
  ] });
}
let xe = null, Ye = null;
function pe(l, d, o, g, f) {
  var x, _, s, w;
  const { getAppColors: u } = he(l, d), [p, b] = v({
    primaryColor: ((x = o == null ? void 0 : o.app_info) == null ? void 0 : x.primaryColor) || ((_ = o == null ? void 0 : o.app_info) == null ? void 0 : _.primary_color) || (xe == null ? void 0 : xe.primaryColor) || g,
    backgroundColor: ((s = o == null ? void 0 : o.app_info) == null ? void 0 : s.backgroundColor) || ((w = o == null ? void 0 : o.app_info) == null ? void 0 : w.background_color) || (xe == null ? void 0 : xe.backgroundColor) || f,
    isLoading: !xe && !(o != null && o.app_info) && !!(l && d)
  });
  return ge(() => {
    if (o != null && o.app_info) {
      const r = o.app_info.primaryColor || o.app_info.primary_color, c = o.app_info.backgroundColor || o.app_info.background_color;
      if ((r || c) && (b((n) => ({
        primaryColor: r || n.primaryColor,
        backgroundColor: c || n.backgroundColor,
        isLoading: !1
      })), r && c))
        return;
    }
    if (xe && !(o != null && o.app_info)) {
      b({
        primaryColor: xe.primaryColor,
        backgroundColor: xe.backgroundColor,
        isLoading: !1
      });
      return;
    }
    l && d ? (async () => {
      Ye || (Ye = u().catch((C) => (console.error("Failed to fetch app colors:", C), null)));
      const c = await Ye, n = {
        primaryColor: (c == null ? void 0 : c.primaryColor) || (c == null ? void 0 : c.primary_color) || g,
        backgroundColor: (c == null ? void 0 : c.backgroundColor) || (c == null ? void 0 : c.background_color) || f
      };
      xe = n, b({ ...n, isLoading: !1 });
    })() : b((r) => ({ ...r, isLoading: !1 }));
  }, [o == null ? void 0 : o.app_info, g, f, l, d]), p;
}
function Se({ lang: l = "en" }) {
  const d = de[l] || de.en;
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-justify-center cil-p-8 cil-bg-red-50 cil-border cil-border-red-200 cil-rounded-lg cil-text-red-800 cil-space-x-4 cil-max-w-md cil-mx-auto cil-my-10", children: [
    /* @__PURE__ */ e.jsx($i, { className: "cil-w-8 cil-h-8 cil-flex-shrink-0" }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "cil-font-bold cil-text-lg", children: d.authErrorTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: d.authErrorMessage })
    ] })
  ] });
}
function ie({
  size: l = "md",
  color: d = "currentColor",
  className: o = ""
}) {
  const g = {
    xs: "cil-w-3 cil-h-3",
    sm: "cil-w-4 cil-h-4",
    md: "cil-w-6 cil-h-6",
    lg: "cil-w-8 cil-h-8",
    xl: "cil-w-12 cil-h-12"
  }, f = {
    xs: 2,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4
  };
  return /* @__PURE__ */ e.jsx("div", { className: `cil-flex cil-items-center cil-justify-center ${o}`, children: /* @__PURE__ */ e.jsxs(
    "svg",
    {
      className: `cil-animate-spin ${g[l] || g.md}`,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ e.jsx(
          "circle",
          {
            className: "cil-opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: d,
            strokeWidth: f[l] || 3
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            className: "cil-opacity-75",
            fill: d,
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  ) });
}
function ll({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: o = "#3b82f6",
  backgroundColor: g = "#ffffff",
  onSuccess: f,
  onError: u,
  onNavigate: p,
  apiToken: b,
  lang: x = "en",
  texts: _ = {}
}) {
  const s = { ...de[x], ..._ }, { isAuthorized: w } = Ne(b), { primaryColor: r, backgroundColor: c, isLoading: n } = pe(l, b, d, o, g), { post: C } = he(l, b), [m, j] = v(""), [y, M] = v(""), [a, L] = v(!1), [O, P] = v(!1), [I, T] = v("");
  if (n)
    return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-flex cil-flex-col cil-items-center cil-justify-center cil-min-h-[400px]", style: { backgroundColor: g }, children: [
      /* @__PURE__ */ e.jsx(ie, { size: "xl", color: o }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-mt-4 cil-text-gray-500 cil-animate-pulse", children: s.loading })
    ] });
  if (!w)
    return /* @__PURE__ */ e.jsx(Se, { lang: x });
  const q = (J) => {
    f && f(J);
  }, F = async (J) => {
    J.preventDefault(), P(!0), T("");
    try {
      const k = await C("/login", {
        provider: "Email",
        email: m,
        password: y
      });
      if (k.success)
        q({ ...k, email: m });
      else {
        const A = k.message || k.error || s.unknownError;
        T(A), u && u(A), P(!1);
      }
    } catch (k) {
      console.error("⚠️ Login Error:", k);
      let A = k.message;
      k.isConnectionError ? A = s.connectionError : k.status >= 500 ? A = s.serverError : (!A || A === "Error " + k.status) && (A = s.unknownError), T(A), u && u(A), P(!1);
    }
  }, K = {
    backgroundColor: r,
    color: "#ffffff"
  }, W = {
    backgroundColor: c
  }, z = {
    color: r
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: W, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: s.login }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: s.loginSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(
        yi,
        {
          apiBaseUrl: l,
          user: d,
          primaryColor: r,
          onSuccess: q,
          onError: (J) => {
            T(J), u && u(J);
          },
          lang: x,
          apiToken: b,
          texts: _
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil-inset-0 cil-flex cil-items-center", children: /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-border-t cil-border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "cil-relative cil-flex cil-justify-center cil-text-xs cil-uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "cil-px-2 cil-text-gray-500", style: W, children: s.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: F, className: "cil-space-y-4", children: [
        /* @__PURE__ */ e.jsx(FormError, { message: I }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-email", className: "cil-text-sm cil-font-medium cil-leading-none", children: s.email }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              id: "auth-email",
              type: "email",
              placeholder: "user@example.com",
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
              value: m,
              onChange: (J) => {
                j(J.target.value), I && T("");
              },
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-password", className: "cil-text-sm cil-font-medium cil-leading-none", children: s.password }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                id: "auth-password",
                type: a ? "text" : "password",
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10",
                value: y,
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
                onClick: () => L(!a),
                children: a ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-justify-end", children: /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => p && p("forgot-password"),
            className: "cil-text-sm cil-hover:underline",
            style: z,
            children: s.forgotPassword
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed",
            style: K,
            disabled: O,
            children: O ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2", children: [
              /* @__PURE__ */ e.jsx(ie, { size: "sm", color: "#ffffff" }),
              /* @__PURE__ */ e.jsx("span", { children: s.loading })
            ] }) : s.loginButton
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "cil-mt-6 cil-flex cil-justify-center", children: /* @__PURE__ */ e.jsxs("p", { className: "cil-text-sm cil-text-gray-500", children: [
      s.dontHaveAccount,
      " ",
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => p && p("signup"),
          className: "cil-font-medium cil-hover:underline",
          style: z,
          children: s.signUp
        }
      )
    ] }) })
  ] });
}
function cl({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: o = "#3b82f6",
  backgroundColor: g = "#ffffff",
  onSuccess: f,
  onError: u,
  onNavigate: p,
  apiToken: b,
  lang: x = "en",
  texts: _ = {}
}) {
  const s = { ...de[x], ..._ }, { isAuthorized: w } = Ne(b), { primaryColor: r, backgroundColor: c, isLoading: n } = pe(l, b, d, o, g), { post: C } = he(l, b), [m, j] = v(!1), [y, M] = v(""), [a, L] = v(!1), [O, P] = v(!1), [I, T] = v({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  if (n)
    return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-flex cil-flex-col cil-items-center cil-justify-center cil-min-h-[400px]", style: { backgroundColor: g }, children: [
      /* @__PURE__ */ e.jsx(ie, { size: "xl", color: o }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-mt-4 cil-text-gray-500 cil-animate-pulse", children: s.loading })
    ] });
  if (!w)
    return /* @__PURE__ */ e.jsx(Se, { lang: x });
  const q = (k) => {
    f && f(k);
  }, F = async (k) => {
    if (k.preventDefault(), M(""), I.password !== I.confirmPassword) {
      const A = s.passwordsDontMatch;
      M(A), u && u(A);
      return;
    }
    j(!0);
    try {
      const A = await C("/register", {
        firstName: I.firstName,
        lastName: I.lastName,
        email: I.email,
        password: I.password
      });
      if (A.success)
        q({ ...A, email: I.email });
      else {
        const Y = A.message || A.error || s.unknownError;
        M(Y), u && u(Y), j(!1);
      }
    } catch (A) {
      console.error("⚠️ SignUp Error:", A);
      let Y = A.message;
      A.isConnectionError ? Y = s.connectionError : A.status >= 500 ? Y = s.serverError : (!Y || Y === "Error " + A.status) && (Y = s.unknownError), M(Y), u && u(Y), j(!1);
    }
  }, K = (k, A) => {
    T((Y) => ({ ...Y, [k]: A })), y && M("");
  }, W = {
    backgroundColor: r,
    color: "#ffffff"
  }, z = {
    backgroundColor: c
  }, J = {
    color: r
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: z, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: s.createAccount }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: s.createAccountSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(
        yi,
        {
          apiBaseUrl: l,
          user: d,
          primaryColor: r,
          onSuccess: q,
          onError: (k) => {
            M(k), u && u(k);
          },
          lang: x,
          apiToken: b,
          texts: _
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil-inset-0 cil-flex cil-items-center", children: /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-border-t cil-border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "cil-relative cil-flex cil-justify-center cil-text-xs cil-uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "cil-px-2 cil-text-gray-500", style: z, children: s.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: F, className: "cil-space-y-4", children: [
        /* @__PURE__ */ e.jsx(FormError, { message: y }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-2 cil-gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: s.firstName }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                value: I.firstName,
                onChange: (k) => K("firstName", k.target.value),
                required: !0,
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: s.lastName }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                value: I.lastName,
                onChange: (k) => K("lastName", k.target.value),
                required: !0,
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: s.email }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "email",
              value: I.email,
              onChange: (k) => K("email", k.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: s.password }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: a ? "text" : "password",
                value: I.password,
                onChange: (k) => K("password", k.target.value),
                required: !0,
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
                onClick: () => L(!a),
                children: a ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: s.confirmPassword }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: O ? "text" : "password",
                value: I.confirmPassword,
                onChange: (k) => K("confirmPassword", k.target.value),
                required: !0,
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
                onClick: () => P(!O),
                children: O ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed",
            style: W,
            disabled: m,
            children: m ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2", children: [
              /* @__PURE__ */ e.jsx(ie, { size: "sm", color: "#ffffff" }),
              /* @__PURE__ */ e.jsx("span", { children: s.creatingAccount })
            ] }) : s.createAccount
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "cil-mt-6 cil-text-center", children: /* @__PURE__ */ e.jsxs("p", { className: "cil-text-sm cil-text-gray-500", children: [
      s.alreadyHaveAccount,
      " ",
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => p && p("login"),
          className: "cil-font-medium cil-hover:underline",
          style: J,
          children: s.login
        }
      )
    ] }) })
  ] });
}
function sl({
  apiBaseUrl: l,
  user: d = {},
  primaryColor: o = "#3b82f6",
  backgroundColor: g = "#ffffff",
  onSuccess: f,
  onError: u,
  onNavigate: p,
  apiToken: b,
  lang: x = "en",
  texts: _ = {}
}) {
  const s = { ...de[x], ..._ }, { isAuthorized: w } = Ne(b), { primaryColor: r, backgroundColor: c, isLoading: n } = pe(l, b, d, o, g), { post: C } = he(l, b), [m, j] = v(""), [y, M] = v(!1), [a, L] = v(!1), [O, P] = v("");
  if (n)
    return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-flex cil-flex-col cil-items-center cil-justify-center cil-min-h-[300px]", style: { backgroundColor: g }, children: [
      /* @__PURE__ */ e.jsx(ie, { size: "xl", color: o }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-mt-4 cil-text-gray-500 cil-animate-pulse", children: s.loading })
    ] });
  if (!w)
    return /* @__PURE__ */ e.jsx(Se, { lang: x });
  const I = async (K) => {
    K.preventDefault(), M(!0), P("");
    try {
      const W = await C("/forgot-password", { email: m });
      if (W.success)
        L(!0), f && f({ ...W, email: m });
      else {
        const z = W.message || W.error || s.unknownError;
        P(z), u && u(z), M(!1);
      }
    } catch (W) {
      console.error("⚠️ ForgotPassword Error:", W);
      let z = W.message;
      W.isConnectionError ? z = s.connectionError : W.status >= 500 ? z = s.serverError : (!z || z === "Error " + W.status) && (z = s.unknownError), P(z), u && u(z), M(!1);
    }
  }, T = {
    backgroundColor: r,
    color: "#ffffff"
  }, q = {
    backgroundColor: c
  }, F = {
    color: r
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: q, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: s.forgotPassword }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: a ? s.checkEmail : s.resetPasswordInstructions })
    ] }),
    a ? /* @__PURE__ */ e.jsxs("div", { className: "cil-text-center cil-space-y-6 cil-py-4", children: [
      /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-mx-auto cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8 cil-text-blue-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: s.verifyEmailMessage }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-3", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => p && p("reset-password"),
            className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
            style: T,
            children: s.enterCodeAndPassword
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => p && p("login"),
            className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-border cil-border-gray-200 cil-hover:bg-gray-50",
            children: s.backToLogin
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e.jsxs("form", { onSubmit: I, className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(FormError, { message: O }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-forgot-email", className: "cil-text-sm cil-font-medium", children: s.email }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            id: "auth-forgot-email",
            type: "email",
            placeholder: "user@example.com",
            className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
            value: m,
            onChange: (K) => {
              j(K.target.value), O && P("");
            },
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          className: "cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed",
          style: T,
          disabled: y,
          children: y ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2", children: [
            /* @__PURE__ */ e.jsx(ie, { size: "sm", color: "#ffffff" }),
            /* @__PURE__ */ e.jsx("span", { children: s.sending })
          ] }) : s.sendResetLink
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => p && p("login"),
          className: "cil-w-full cil-text-sm cil-font-medium cil-hover:underline cil-text-center",
          style: F,
          children: s.backToLogin
        }
      )
    ] })
  ] });
}
function Ie({ message: l }) {
  return l ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2 cil-p-3 cil-text-sm cil-text-red-700 cil-bg-red-50 cil-border cil-border-red-100 cil-rounded-md cil-animate-in cil-fade-in cil-slide-in-from-top-1 cil-duration-200", children: [
    /* @__PURE__ */ e.jsx(fi, { className: "cil-w-4 cil-h-4 cil-flex-shrink-0" }),
    /* @__PURE__ */ e.jsx("p", { children: l })
  ] }) : null;
}
function ze({ message: l }) {
  return l ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2 cil-p-3 cil-text-sm cil-text-green-700 cil-bg-green-50 cil-border cil-border-green-100 cil-rounded-md cil-animate-in cil-fade-in cil-slide-in-from-top-1 cil-duration-200", children: [
    /* @__PURE__ */ e.jsx(Vi, { className: "cil-w-4 cil-h-4 cil-flex-shrink-0" }),
    /* @__PURE__ */ e.jsx("p", { children: l })
  ] }) : null;
}
function rl({
  apiBaseUrl: l,
  token: d = "",
  // The recovery code from URL/Email
  primaryColor: o = "#3b82f6",
  backgroundColor: g = "#ffffff",
  onSuccess: f,
  onError: u,
  onNavigate: p,
  apiToken: b,
  lang: x = "en",
  email: _ = "",
  authToken: s = "",
  // Auth token passed from consumer
  user: w = {},
  initialWaitSeconds: r = 0,
  texts: c = {}
}) {
  const n = { ...de[x], ...c }, { isAuthorized: C } = Ne(b), { primaryColor: m, backgroundColor: j, isLoading: y } = pe(l, b, w, o, g), { post: M } = he(l, b), [a, L] = v({
    token: d,
    newPassword: "",
    confirmPassword: ""
  }), [O, P] = v(!1), [I, T] = v(!1), [q, F] = v(!1), [K, W] = v(!1), [z, J] = v(!1), [k, A] = v([]), [Y, te] = v(!1), [ae, Q] = v(""), [fe, N] = v(""), [$, U] = v(s), [le, me] = v(r), [X, Z] = v(n.resetPasswordSubtitle), se = Te(null);
  if (ge(() => (le > 0 && (se.current = setInterval(() => {
    me((R) => R <= 1 ? (clearInterval(se.current), 0) : R - 1);
  }, 1e3)), () => clearInterval(se.current)), [le]), ge(() => {
    s && U(s);
  }, [s]), y)
    return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-flex cil-flex-col cil-items-center cil-justify-center cil-min-h-[400px]", style: { backgroundColor: g }, children: [
      /* @__PURE__ */ e.jsx(ie, { size: "xl", color: o }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-mt-4 cil-text-gray-500 cil-animate-pulse", children: n.loading })
    ] });
  if (!C)
    return /* @__PURE__ */ e.jsx(Se, { lang: x });
  const De = (R) => {
    const E = Math.floor(R / 60), G = R % 60;
    return `${E.toString().padStart(2, "0")}:${G.toString().padStart(2, "0")}`;
  }, Ae = async () => {
    if (!(!_ || le > 0)) {
      T(!0), Q("");
      try {
        const R = await M("/forgot-password", { email: _ });
        if (R.success)
          R.wait_seconds && me(R.wait_seconds), Z(R.message || n.resendSent);
        else {
          const E = R.message || R.error || n.connectionError;
          Q(E), R.wait_seconds && me(R.wait_seconds), u && u(E);
        }
      } catch (R) {
        console.error("⚠️ Resend Reset Error:", R);
        let E = R.message;
        R.isConnectionError ? E = n.connectionError : R.status >= 500 ? E = n.serverError : (!E || E === "Error " + R.status) && (E = n.unknownError), Q(E), u && u(E);
      } finally {
        T(!1);
      }
    }
  }, Fe = async (R) => {
    if (R.preventDefault(), Q(""), a.newPassword !== a.confirmPassword) {
      const E = n.passwordsDontMatch;
      Q(E), u && u(E);
      return;
    }
    if (!a.token) {
      const E = n.enterRecoveryCode;
      Q(E), u && u(E);
      return;
    }
    P(!0);
    try {
      const E = await M("/reset-password", {
        token: a.token,
        newPassword: a.newPassword,
        confirmPassword: a.confirmPassword
      });
      if (E.success || E.status)
        J(!0), E.active_sessions && A(E.active_sessions), E.token && U(E.token), f && f(E);
      else {
        const G = E.message || E.error || n.unknownError;
        Q(G), u && u(G), P(!1);
      }
    } catch (E) {
      console.error("⚠️ ResetPassword Error:", E);
      let G = E.message;
      E.isConnectionError ? G = n.connectionError : E.status >= 500 ? G = n.serverError : (!G || G === "Error " + E.status) && (G = n.unknownError), Q(G), u && u(G), P(!1);
    }
  }, Oe = async (R = !1, E = []) => {
    if (!$) {
      const G = n.noSessions;
      Q(G), u && u(G);
      return;
    }
    te(!0), Q(""), N("");
    try {
      const G = await M("/logout_sessions", {
        email: _ || "",
        all_sessions: R,
        session_ids: E
      }, { token: $ });
      if (G.success)
        A(R ? [] : (oe) => oe.filter((_e) => !E.includes(_e._id))), N(n.logoutSuccess);
      else {
        const oe = G.message || G.error || "Logout failed";
        Q(oe), u && u(oe);
      }
    } catch (G) {
      console.error("⚠️ Logout Sessions Error:", G);
      let oe = G.message;
      G.isConnectionError ? oe = n.connectionError : G.status >= 500 ? oe = n.serverError : (!oe || oe === "Error " + G.status) && (oe = n.unknownError), Q(oe), u && u(oe);
    } finally {
      te(!1);
    }
  }, Ce = {
    backgroundColor: m,
    color: "#ffffff"
  }, be = {
    backgroundColor: j
  }, Me = {
    color: m
  };
  return z ? /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: be, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-text-center cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-mx-auto cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500 cil-mb-4", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: n.resetSuccessTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: n.resetSuccessSubtitle })
    ] }),
    /* @__PURE__ */ e.jsx(ze, { message: fe }),
    /* @__PURE__ */ e.jsx(Ie, { message: ae }),
    k.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "cil-mt-8 cil-space-y-4 cil-border-t cil-pt-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "cil-text-left", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "cil-text-lg cil-font-medium", children: n.activeSessions }),
        /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-text-gray-500", children: n.sessionsSubtitle })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "cil-space-y-3 cil-max-h-60 cil-overflow-y-auto cil-pr-1", children: k.map((R) => {
        var E;
        return /* @__PURE__ */ e.jsxs("div", { className: "cil-p-3 cil-border cil-rounded-md cil-text-xs cil-bg-gray-50 cil-flex cil-justify-between cil-items-center", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1", children: [
            /* @__PURE__ */ e.jsx("div", { className: "cil-font-semibold cil-text-gray-700 cil-truncate cil-max-w-[180px]", title: R["Device Name"], children: ((E = R["Device Name"]) == null ? void 0 : E.split(" ")[0]) || n.deviceName }),
            /* @__PURE__ */ e.jsx("div", { className: "cil-text-gray-500", children: R.IP }),
            R["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "cil-text-gray-400 cil-italic", children: [
              n.expiry,
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
              children: n.logoutThisSession
            }
          )
        ] }, R._id);
      }) }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => Oe(!0),
          disabled: Y,
          className: "cil-w-full cil-py-2 cil-text-sm cil-text-red-600 cil-border cil-border-red-200 cil-rounded-md cil-hover:bg-red-50 cil-transition-colors cil-font-medium cil-flex cil-items-center cil-justify-center cil-gap-2",
          children: Y ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(ie, { size: "xs", color: "#ef4444" }),
            n.loggingOut
          ] }) : n.logoutAllSessions
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "cil-mt-8 cil-pt-6 cil-border-t", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => p && p("login"),
        className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
        style: Ce,
        children: n.goToLogin
      }
    ) })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: be, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: n.resetPasswordTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: X })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: Fe, className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(Ie, { message: ae }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: n.verificationCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: a.token,
            onChange: (R) => L({ ...a, token: R.target.value }),
            required: !0,
            className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-font-mono cil-tracking-widest cil-text-center",
            placeholder: "XXXXXX"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: n.newPassword }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: q ? "text" : "password",
              value: a.newPassword,
              onChange: (R) => L({ ...a, newPassword: R.target.value }),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10",
              placeholder: n.min8Chars
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => F(!q),
              children: q ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: n.confirmPassword }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: K ? "text" : "password",
              value: a.confirmPassword,
              onChange: (R) => L({ ...a, confirmPassword: R.target.value }),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => W(!K),
              children: K ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          className: "cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed",
          style: Ce,
          disabled: O || !a.token,
          children: O ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2", children: [
            /* @__PURE__ */ e.jsx(ie, { size: "sm", color: "#ffffff" }),
            /* @__PURE__ */ e.jsx("span", { children: n.resetting })
          ] }) : n.resetPasswordTitle
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-pt-2 cil-text-center cil-space-y-3", children: [
        le > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "cil-text-xs cil-text-gray-500 cil-font-mono", children: [
          n.resendCodeIn,
          /* @__PURE__ */ e.jsx("span", { className: "cil-font-bold", children: De(le) })
        ] }) : /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: Ae,
            disabled: I || !_,
            className: "cil-text-sm cil-font-medium cil-hover:underline",
            style: Me,
            children: I ? n.loading : n.resendCode
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => p && p("login"),
            className: "cil-w-full cil-text-sm cil-font-medium cil-hover:underline cil-text-center cil-text-gray-500",
            children: n.backToLogin
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
  backgroundColor: g = "#ffffff",
  onSuccess: f,
  onError: u,
  onNavigate: p,
  apiToken: b,
  // X-API-KEY for headers
  authToken: x,
  // User session token
  email: _,
  // User email
  lang: s = "en",
  texts: w = {}
}) {
  const r = { ...de[s], ...w }, { isAuthorized: c } = Ne(b), { primaryColor: n, backgroundColor: C, isLoading: m } = pe(l, b, d, o, g), { changePassword: j } = he(l, b), [y, M] = v({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }), [a, L] = v(!1), [O, P] = v(!1), [I, T] = v(""), [q, F] = v(""), [K, W] = v(!1), [z, J] = v(!1), [k, A] = v(!1);
  if (m)
    return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-flex cil-flex-col cil-items-center cil-justify-center cil-min-h-[400px]", style: { backgroundColor: g }, children: [
      /* @__PURE__ */ e.jsx(ie, { size: "xl", color: o }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-mt-4 cil-text-gray-500 cil-animate-pulse", children: r.loading })
    ] });
  if (!c)
    return /* @__PURE__ */ e.jsx(Se, { lang: s });
  const Y = async (N) => {
    if (N.preventDefault(), T(""), F(""), y.newPassword !== y.confirmPassword) {
      const $ = r.passwordsDontMatch;
      T($), u && u($);
      return;
    }
    L(!0);
    try {
      const $ = await j({
        email: _ || d.email,
        old_password: y.oldPassword,
        new_password: y.newPassword,
        token: x
        // Now using user session token, not api key
      });
      if ($.success)
        P(!0), F(r.passwordChanged), f && f($), M({ oldPassword: "", newPassword: "", confirmPassword: "" }), setTimeout(() => F(""), 5e3);
      else {
        const U = $.message || $.error || r.unknownError;
        T(U), u && u(U);
      }
    } catch ($) {
      console.error("⚠️ ChangePassword Error:", $);
      let U = $.message;
      $.isConnectionError ? U = r.connectionError : $.status >= 500 ? U = r.serverError : (!U || U === "Error " + $.status) && (U = r.unknownError), T(U), u && u(U);
    } finally {
      L(!1);
    }
  }, te = (N, $) => {
    M((U) => ({ ...U, [N]: $ })), I && T("");
  }, ae = {
    backgroundColor: n,
    color: "#ffffff"
  }, Q = {
    backgroundColor: C
  }, fe = {
    color: n
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: Q, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: r.changePassword }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: r.changePasswordSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: Y, className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(Ie, { message: I }),
      /* @__PURE__ */ e.jsx(ze, { message: q }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: r.oldPassword }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: K ? "text" : "password",
              value: y.oldPassword,
              onChange: (N) => te("oldPassword", N.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => W(!K),
              children: K ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: r.newPassword }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: z ? "text" : "password",
              value: y.newPassword,
              onChange: (N) => te("newPassword", N.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => J(!z),
              children: z ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: r.confirmNewPassword || r.confirmPassword }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: k ? "text" : "password",
              value: y.confirmPassword,
              onChange: (N) => te("confirmPassword", N.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => A(!k),
              children: k ? /* @__PURE__ */ e.jsx(ve, { size: 18 }) : /* @__PURE__ */ e.jsx(we, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          className: "cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed",
          style: ae,
          disabled: a,
          children: a ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2", children: [
            /* @__PURE__ */ e.jsx(ie, { size: "sm", color: "#ffffff" }),
            /* @__PURE__ */ e.jsx("span", { children: r.loading })
          ] }) : r.changePassword
        }
      ),
      p && /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => p("login"),
          className: "cil-w-full cil-text-sm cil-font-medium cil-hover:underline cil-text-center",
          style: fe,
          children: r.backToLogin
        }
      )
    ] })
  ] });
}
function ol({
  apiBaseUrl: l,
  token: d,
  user: o = {},
  primaryColor: g = "#3b82f6",
  backgroundColor: f = "#ffffff",
  onSuccess: u,
  onError: p,
  onNavigate: b,
  lang: x = "en",
  apiToken: _,
  texts: s = {}
}) {
  const w = { ...de[x], ...s }, { isAuthorized: r } = Ne(_), { primaryColor: c, backgroundColor: n, isLoading: C } = pe(l, _, o, g, f), { post: m } = he(l, _), [j, y] = v(d ? "verifying" : "idle"), [M, a] = v(""), [L, O] = v("");
  if (ge(() => {
    d && j === "verifying" && P();
  }, [d]), C)
    return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-flex cil-flex-col cil-items-center cil-justify-center cil-min-h-[300px]", style: { backgroundColor: f }, children: [
      /* @__PURE__ */ e.jsx(ie, { size: "xl", color: g }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-mt-4 cil-text-gray-500 cil-animate-pulse", children: w.loading })
    ] });
  if (!r)
    return /* @__PURE__ */ e.jsx(Se, { lang: x });
  const P = async () => {
    O("");
    try {
      const q = await m("/verify-email", { token: d });
      if (q.success)
        y("success"), a(q.message || w.verifySuccess), u && u(q);
      else {
        y("error");
        const F = q.message || q.error || w.verifyError;
        a(F), O(F), p && p(F);
      }
    } catch (q) {
      console.error("⚠️ Verification Error:", q), y("error");
      const F = w.connectionError;
      a(F), O(F), p && p(F);
    }
  }, I = {
    backgroundColor: c,
    color: "#ffffff"
  }, T = {
    backgroundColor: n
  };
  return d ? /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: T, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: j === "verifying" ? w.verifying : w.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: j === "verifying" ? w.verifyingSubtitle : M })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-py-6 cil-flex cil-flex-col cil-items-center", children: [
      /* @__PURE__ */ e.jsx(FormError, { message: L }),
      j === "verifying" && /* @__PURE__ */ e.jsx(ie, { size: "xl", color: c }),
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
  backgroundColor: g = "#ffffff",
  onNavigate: f,
  lang: u = "en",
  userEmail: p,
  initialMessage: b,
  initialWaitSeconds: x = 0,
  onSuccess: _,
  onError: s,
  apiToken: w,
  // Added apiToken
  texts: r = {}
}) {
  const c = { ...de[u], ...r }, { isAuthorized: n } = Ne(w), { primaryColor: C, backgroundColor: m, isLoading: j } = pe(l, w, d, o, g), { post: y } = he(l, w), [M, a] = v(!1), [L, O] = v(!1), [P, I] = v(""), [T, q] = v(b || c.waitingConfirmationMsg), [F, K] = v(x), [W, z] = v(!1), [J, k] = v(!1), [A, Y] = v(""), [te, ae] = v(""), Q = Te(null);
  if (ge(() => (F > 0 && (Q.current = setInterval(() => {
    K((X) => X <= 1 ? (clearInterval(Q.current), 0) : X - 1);
  }, 1e3)), () => clearInterval(Q.current)), [F]), ge(() => {
    F === 0 && (x > 0 || W) && (q(c.waitingConfirmationMsg), z(!1));
  }, [F, x, c.waitingConfirmationMsg]), j)
    return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-flex cil-flex-col cil-items-center cil-justify-center cil-min-h-[400px]", style: { backgroundColor: g }, children: [
      /* @__PURE__ */ e.jsx(ie, { size: "xl", color: o }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-mt-4 cil-text-gray-500 cil-animate-pulse", children: c.loading })
    ] });
  if (!n)
    return /* @__PURE__ */ e.jsx(Se, { lang: u });
  const fe = (X) => {
    const Z = Math.floor(X / 60), se = X % 60;
    return `${Z.toString().padStart(2, "0")}:${se.toString().padStart(2, "0")}`;
  }, N = async (X) => {
    if (X.preventDefault(), !!P) {
      O(!0), Y("");
      try {
        const Z = await y("/verify-email", { token: P });
        if (Z.success)
          k(!0), _ && _(Z);
        else {
          const se = Z.message || Z.error || c.verificationFailed;
          Y(se), s && s(se);
        }
      } catch (Z) {
        console.error("⚠️ Manual Verification Error:", Z);
        const se = c.connectionError;
        Y(se), s && s(se);
      } finally {
        O(!1);
      }
    }
  }, $ = async () => {
    if (!(!p || F > 0)) {
      a(!0), z(!1), Y(""), ae("");
      try {
        const X = await y("/resend-confirmation", { email: p });
        if (X.success) {
          z(!0);
          const Z = X.message || c.resendSent;
          ae(Z), X.wait_seconds && K(X.wait_seconds);
        } else {
          const Z = X.message || X.error || c.connectionError;
          Y(Z), X.wait_seconds && K(X.wait_seconds), s && s(Z);
        }
      } catch (X) {
        console.error("⚠️ Resend Error:", X);
        const Z = c.connectionError;
        Y(Z), s && s(Z);
      } finally {
        a(!1);
      }
    }
  }, U = {
    backgroundColor: C,
    color: "#ffffff"
  }, le = {
    backgroundColor: m
  }, me = {
    color: C
  };
  return J ? /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: le, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: c.verifySuccess }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: c.verifySuccess })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "cil-py-6 cil-flex cil-justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }) }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => f && f("login"),
        className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
        style: U,
        children: c.goToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: le, children: [
    /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-items-center cil-justify-center cil-mb-6", children: L ? /* @__PURE__ */ e.jsx(ie, { size: "lg", color: C }) : /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center cil-text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }) }),
    /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold cil-mb-2", children: c.waitingConfirmation }),
    /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-mb-6 cil-text-gray-500", children: T }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-mb-4", children: [
      /* @__PURE__ */ e.jsx(ze, { message: te }),
      /* @__PURE__ */ e.jsx(Ie, { message: A })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: N, className: "cil-mb-8 cil-space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium cil-text-gray-700 cil-block cil-text-left cil-px-1", children: c.enterCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: "XXXXXX",
            className: "cil-flex cil-h-12 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-center cil-text-lg cil-font-mono cil-tracking-widest cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
            value: P,
            onChange: (X) => I(X.target.value),
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          disabled: L || !P,
          className: "cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed",
          style: U,
          children: L ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2", children: [
            /* @__PURE__ */ e.jsx(ie, { size: "sm", color: "#ffffff" }),
            /* @__PURE__ */ e.jsx("span", { children: c.loading })
          ] }) : c.verifyButton
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-border-t cil-pt-6 cil-space-y-3", children: [
      F > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "cil-p-2 cil-rounded cil-bg-gray-50 cil-text-gray-700 cil-text-xs cil-font-mono cil-border cil-inline-block", children: [
        c.resendCodeIn,
        /* @__PURE__ */ e.jsx("span", { className: "cil-font-bold", children: fe(F) })
      ] }) : /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: $,
          disabled: M || !p,
          className: "cil-text-sm cil-font-medium cil-hover:underline cil-flex cil-items-center cil-justify-center cil-gap-2 cil-mx-auto",
          style: me,
          children: M ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(ie, { size: "xs", color: C }),
            c.loading
          ] }) : c.resendEmail
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => f && f("login"),
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-border cil-border-gray-200 cil-hover:bg-gray-50",
          children: c.goToLogin
        }
      )
    ] })
  ] });
}
function Ji(l, d, o, g) {
  const { getMe: f } = he(l, d), [u, p] = v({
    user: null,
    isLoading: !0,
    error: null
  });
  return ge(() => {
    if (!o || !g) {
      p({
        user: null,
        isLoading: !1,
        error: "Missing authentication credentials"
      });
      return;
    }
    (async () => {
      p((x) => ({ ...x, isLoading: !0, error: null }));
      try {
        const x = await f(g, o);
        if (x.success) {
          const _ = x.user ? { ...x.user, ...Object.fromEntries(Object.entries(x).filter(([s]) => s !== "user" && s !== "success")) } : x;
          p({
            user: _,
            isLoading: !1,
            error: null
          });
        } else
          p({
            user: null,
            isLoading: !1,
            error: x.message || "Failed to load profile"
          });
      } catch (x) {
        console.error("Failed to fetch user profile:", x), p({
          user: null,
          isLoading: !1,
          error: x.message || "Connection error"
        });
      }
    })();
  }, [o, g, l, d]), u;
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
  backgroundColor: g = "#ffffff",
  primaryColor: f = "#3b82f6",
  apiBaseUrl: u,
  apiToken: p,
  onAppClick: b,
  lang: x = "en",
  texts: _ = {}
}) {
  const [s, w] = v(!1), r = Te(null), c = { ...de[x], ..._ }, { primaryColor: n, backgroundColor: C, isLoading: m } = pe(u, p, d, f, g);
  if (ge(() => {
    const a = (L) => {
      r.current && !r.current.contains(L.target) && w(!1);
    };
    return s && document.addEventListener("mousedown", a), () => document.removeEventListener("mousedown", a);
  }, [s]), m)
    return /* @__PURE__ */ e.jsx("div", { className: "cil-w-10 cil-h-10 cil-flex cil-items-center cil-justify-center", children: /* @__PURE__ */ e.jsx(ie, { size: "sm", color: f }) });
  const j = (a) => a ? a.charAt(0).toUpperCase() : "?", y = (a) => {
    let L = 0;
    for (let O = 0; O < a.length; O++)
      L = a.charCodeAt(O) + ((L << 5) - L);
    return ui[Math.abs(L) % ui.length];
  }, M = (a) => {
    b && b(a), w(!1), a.publicUrl && window.open(a.publicUrl, "_blank");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-inline-block cil-text-left", ref: r, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => w(!s),
        className: "cil-flex cil-items-center cil-justify-center cil-p-2 cil-rounded-full cil-transition-all cil-duration-200 cil-hover:bg-gray-100 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
        style: {
          color: n,
          borderColor: n
        },
        "aria-label": "App Grid",
        children: /* @__PURE__ */ e.jsx(
          Qi,
          {
            className: "cil-w-6 cil-h-6",
            style: {
              color: n,
              stroke: n,
              fill: "none"
            }
          }
        )
      }
    ),
    s && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "cil-absolute cil-right-0 cil-mt-3 cil-w-80 cil-origin-top-right cil-rounded-[2rem] cil-bg-gray-100/90 cil-backdrop-blur-md cil-p-2 cil-shadow-2xl cil-border cil-border-gray-200/50 cil-z-50 cil-transform cil-transition-all cil-duration-300 cil-ease-out",
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "cil-rounded-[1.5rem] cil-p-4 cil-shadow-sm",
            style: { backgroundColor: C },
            children: /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-3 cil-gap-3", children: [
              l.map((a) => /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => M(a),
                  className: "cil-group cil-relative cil-flex cil-flex-col cil-items-center cil-p-2 cil-rounded-2xl cil-hover:bg-gray-50 cil-transition-all cil-duration-200",
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "cil-w-14 cil-h-14 cil-flex cil-items-center cil-justify-center cil-rounded-2xl cil-shadow-sm cil-text-white cil-text-2xl cil-font-bold cil-mb-2 cil-group-hover:shadow-lg cil-group-hover:scale-105 cil-transition-all cil-duration-300",
                        style: { backgroundColor: y(a.appKey) },
                        children: j(a.appKey)
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { className: "cil-text-[10px] cil-font-bold cil-text-gray-700 cil-uppercase cil-tracking-wider cil-text-center cil-truncate cil-w-full cil-px-1", children: o[a.appKey] ? o[a.appKey] : a.appKey.replace(/_/g, " ").length > 9 ? `${a.appKey.replace(/_/g, " ").substring(0, 9)}...` : a.appKey.replace(/_/g, " ") }),
                    /* @__PURE__ */ e.jsxs("div", { className: "cil-absolute cil--bottom-10 cil-left-1/2 cil--translate-x-1/2 cil-px-2 cil-py-1 cil-bg-gray-900 cil-text-white cil-text-[10px] cil-rounded cil-opacity-0 cil-group-hover:opacity-100 cil-transition-opacity cil-pointer-events-none cil-whitespace-nowrap cil-z-[60] cil-shadow-xl", children: [
                      a.appName,
                      /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil--top-1 cil-left-1/2 cil--translate-x-1/2 cil-border-x-4 cil-border-x-transparent cil-border-b-4 cil-border-b-gray-900" })
                    ] })
                  ]
                },
                a.appKey
              )),
              l.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "cil-col-span-3 cil-py-12 cil-text-center cil-text-gray-400 cil-text-sm", children: c.noApps })
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
  onLogout: g,
  onChangePassword: f,
  onProfileClick: u,
  // Added onProfileClick
  extraItems: p = [],
  // Array of { icon: ReactNode, label: string, onClick: function }
  lang: b = "en",
  apiBaseUrl: x,
  apiToken: _,
  texts: s = {}
}) {
  var O;
  const [w, r] = v(!1), c = Te(null), n = { ...de[b], ...s }, { primaryColor: C, backgroundColor: m, isLoading: j } = pe(x, _, l, o, d);
  if (ge(() => {
    const P = (I) => {
      c.current && !c.current.contains(I.target) && r(!1);
    };
    return w && document.addEventListener("mousedown", P), () => document.removeEventListener("mousedown", P);
  }, [w]), j)
    return /* @__PURE__ */ e.jsx("div", { className: "cil-w-10 cil-h-10 cil-flex cil-items-center cil-justify-center", children: /* @__PURE__ */ e.jsx(ie, { size: "sm", color: o }) });
  const y = bi(l), M = () => {
    const P = l["Full Name"] || l.fullName || l.full_name || l.firstName || l.first_name;
    return P ? P.trim().charAt(0).toUpperCase() : l.email ? l.email.charAt(0).toUpperCase() : "U";
  }, a = l["Full Name"] || l.fullName || l.full_name || l.firstName || l.first_name || ((O = l.email) == null ? void 0 : O.split("@")[0]) || "User", L = ({ icon: P, label: I, onClick: T, className: q = "", color: F = "cil-text-gray-600" }) => /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: () => {
        r(!1), T && T();
      },
      className: `cil-w-full cil-flex cil-items-center cil-gap-3 cil-px-3 cil-py-2 cil-text-sm cil-rounded-xl cil-hover:bg-gray-50 cil-transition-colors cil-group ${F} ${q}`,
      children: [
        P && /* @__PURE__ */ e.jsx(P, { className: "cil-w-4 cil-h-4 cil-transition-transform cil-group-hover:scale-110" }),
        /* @__PURE__ */ e.jsx("span", { className: "cil-flex-1 cil-text-left", children: I })
      ]
    }
  );
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-inline-block cil-text-left", ref: c, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => r(!w),
        className: "cil-flex cil-items-center cil-justify-center cil-w-10 cil-h-10 cil-rounded-full cil-border-2 cil-transition-all cil-duration-200 cil-hover:shadow-md cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-overflow-hidden",
        style: {
          borderColor: C,
          backgroundColor: m,
          color: C
        },
        children: [
          y ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: y,
              alt: a,
              className: "cil-w-full cil-h-full cil-object-cover",
              onError: (P) => {
                P.target.style.display = "none", P.target.nextSibling.style.display = "cil-block";
              }
            }
          ) : null,
          /* @__PURE__ */ e.jsx("span", { className: `${y ? "cil-hidden" : "cil-block"} cil-text-sm cil-font-bold`, children: M() })
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
                /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-font-bold cil-text-gray-700 cil-truncate cil-mb-0.5", children: a }),
                /* @__PURE__ */ e.jsx("p", { className: "cil-text-[10px] cil-font-medium cil-text-gray-400 cil-truncate", children: l.email })
              ] }),
              /* @__PURE__ */ e.jsx(
                L,
                {
                  icon: mi,
                  label: n.profile,
                  onClick: u
                }
              ),
              /* @__PURE__ */ e.jsx(
                L,
                {
                  icon: Wi,
                  label: n.changePassword,
                  onClick: f
                }
              ),
              p.map((P, I) => /* @__PURE__ */ e.jsx(
                L,
                {
                  icon: P.icon,
                  label: P.label,
                  onClick: P.onClick
                },
                `extra-${I}`
              )),
              p.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "cil-my-1 cil-border-t cil-border-gray-50" }),
              /* @__PURE__ */ e.jsx(
                L,
                {
                  icon: xi,
                  label: n.logoutThisSession,
                  onClick: g,
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
  userEmail: g,
  primaryColor: f = "#3b82f6",
  backgroundColor: u = "#ffffff",
  onClose: p,
  onNavigate: b,
  onError: x,
  onSuccess: _,
  lang: s = "en",
  texts: w = {}
}) {
  const r = { ...de[s], ...w }, { user: c, isLoading: n, error: C } = Ji(l, d, o, g), { primaryColor: m, backgroundColor: j, isLoading: y } = pe(l, d, c, f, u), { post: M } = he(l, d), [a, L] = v([]), [O, P] = v(!1), [I, T] = v(""), [q, F] = v(""), [K, W] = v(!1);
  ge(() => {
    c != null && c.active_sessions ? L(c.active_sessions) : c != null && c.sessions && L(c.sessions);
  }, [c]);
  const z = (N) => N ? N.includes("Mozilla/") ? N.includes("iPhone") ? "iPhone" : N.includes("Android") ? "Android Device" : N.includes("Windows") ? "Windows PC" : N.includes("Macintosh") ? "Mac" : N.includes("iPad") ? "iPad" : "Web Browser" : N : r.deviceName, J = (N) => {
    if (!N) return /* @__PURE__ */ e.jsx(oi, { className: "w-5 h-5" });
    const $ = N.toLowerCase();
    return $.includes("iphone") || $.includes("android") ? /* @__PURE__ */ e.jsx(Yi, { className: "w-5 h-5" }) : $.includes("ipad") || $.includes("tablet") ? /* @__PURE__ */ e.jsx(Hi, { className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(oi, { className: "w-5 h-5" });
  };
  if (n || y)
    return /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-max-w-4xl cil-mx-auto cil-p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-flex-col cil-items-center cil-justify-center cil-py-20 cil-space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
        /* @__PURE__ */ e.jsx(ie, { size: "xl", color: f }),
        /* @__PURE__ */ e.jsx(si, { className: "cil-w-6 cil-h-6 cil-absolute cil-top-0 cil-right-0 cil-animate-pulse", style: { color: f } })
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-lg cil-font-semibold cil-text-gray-600 cil-animate-pulse", children: r.loadingProfile })
    ] }) });
  if (C || !c)
    return /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-max-w-4xl cil-mx-auto cil-p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-flex-col cil-items-center cil-justify-center cil-py-20 cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(fi, { className: "cil-w-16 cil-h-16 cil-text-red-500" }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-lg cil-font-semibold cil-text-red-600", children: C || r.failedLoadProfile }),
      p && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: p,
          className: "cil-mt-4 cil-px-6 cil-py-2 cil-rounded-xl cil-font-semibold cil-text-white cil-transition-all cil-hover:brightness-110",
          style: { backgroundColor: f },
          children: r.close
        }
      )
    ] }) });
  const k = c["Full Name"] || c.fullName || c.full_name || `${c.firstName || ""} ${c.lastName || ""}`.trim() || "User", A = c.Roles || [], Y = c.permissions || [], te = c.biography || c.bio || "", ae = bi(c), Q = () => k.charAt(0).toUpperCase(), fe = async (N = !1, $ = []) => {
    if (!o) {
      const U = r.noSessions;
      T(U);
      return;
    }
    P(!0), T(""), F("");
    try {
      const U = await M("/logout_sessions", {
        email: c.email || g || "",
        all_sessions: N,
        session_ids: $
      }, { token: o });
      if (U.success)
        L(N ? [] : (le) => le.filter((me) => !$.includes(me._id))), F(r.logoutSuccess), _ && _(U);
      else {
        const le = U.message || U.error || "Logout failed";
        T(le), x && x(le);
      }
    } catch (U) {
      console.error("⚠️ Logout Sessions Error:", U), T(r.connectionError);
    } finally {
      P(!1);
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-5xl cil-mx-auto", children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "cil-relative cil-rounded-t-[2.5rem] cil-p-8 md:cil-p-12 cil-overflow-hidden",
        style: {
          background: `linear-gradient(135deg, ${m}15 0%, ${m}05 100%)`
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "cil-absolute cil-top-0 cil-right-0 cil-w-64 cil-h-64 cil-opacity-10 cil-blur-3xl cil-rounded-full",
              style: { backgroundColor: m }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "cil-absolute cil-bottom-0 cil-left-0 cil-w-48 cil-h-48 cil-opacity-10 cil-blur-3xl cil-rounded-full",
              style: { backgroundColor: m }
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-flex cil-flex-col md:cil-flex-row cil-items-center md:cil-items-start cil-gap-6", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-group", children: [
              ae && !K ? /* @__PURE__ */ e.jsx("div", { className: "cil-relative", children: /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: ae,
                  alt: k,
                  className: "cil-w-32 cil-h-32 md:cil-w-40 md:cil-h-40 cil-rounded-3xl cil-object-cover cil-shadow-2xl cil-ring-4 cil-ring-white cil-transition-transform cil-group-hover:scale-105",
                  onError: () => W(!0)
                }
              ) }) : /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "cil-w-32 cil-h-32 md:cil-w-40 md:cil-h-40 cil-rounded-3xl cil-flex cil-items-center cil-justify-center cil-text-5xl md:cil-text-6xl cil-font-black cil-shadow-2xl cil-ring-4 cil-ring-white cil-transition-transform cil-group-hover:scale-105",
                  style: {
                    background: `linear-gradient(135deg, ${m}30 0%, ${m}10 100%)`,
                    color: m
                  },
                  children: Q()
                }
              ),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "cil-absolute cil--bottom-2 cil--right-2 cil-w-12 cil-h-12 cil-rounded-2xl cil-flex cil-items-center cil-justify-center cil-shadow-lg",
                  style: { backgroundColor: m },
                  children: /* @__PURE__ */ e.jsx(si, { className: "cil-w-6 cil-h-6 cil-text-white" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "cil-flex-1 cil-text-center md:cil-text-left cil-space-y-3", children: [
              /* @__PURE__ */ e.jsx("h1", { className: "cil-text-4xl md:cil-text-5xl cil-font-black cil-text-gray-900 cil-tracking-tight", children: k }),
              /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-justify-center md:cil-justify-start cil-gap-2 cil-text-gray-600", children: [
                /* @__PURE__ */ e.jsx(Ui, { className: "cil-w-5 cil-h-5" }),
                /* @__PURE__ */ e.jsx("span", { className: "cil-text-lg cil-font-medium", children: c.email || g })
              ] }),
              te && /* @__PURE__ */ e.jsxs("p", { className: "cil-text-gray-600 cil-max-w-2xl cil-leading-relaxed cil-italic", children: [
                '"',
                te,
                '"'
              ] }),
              A.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-flex-wrap cil-gap-2 cil-justify-center md:cil-justify-start cil-pt-2", children: A.map((N, $) => /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: "cil-px-4 cil-py-1.5 cil-rounded-full cil-text-xs cil-font-bold cil-uppercase cil-tracking-wider cil-shadow-sm cil-transition-all cil-hover:scale-105 cil-hover:shadow-md",
                  style: {
                    backgroundColor: `${m}20`,
                    color: m,
                    border: `2px solid ${m}40`
                  },
                  children: N.replace(/_/g, " ")
                },
                $
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
          /* @__PURE__ */ e.jsx(FormError, { message: I }),
          /* @__PURE__ */ e.jsx(ze, { message: q }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-1 lg:cil-grid-cols-2 cil-gap-10", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-8", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2", style: { borderColor: `${m}20` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${m}15` }, children: /* @__PURE__ */ e.jsx(mi, { className: "cil-w-6 cil-h-6", style: { color: m } }) }),
                  /* @__PURE__ */ e.jsx("h2", { className: "cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide", children: r.personalInfo })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4 cil-pl-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "cil-group", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-uppercase cil-font-bold cil-text-gray-400 cil-tracking-widest cil-mb-1.5", children: r.fullNameLabel }),
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-base cil-font-bold cil-text-gray-800 cil-group-hover:text-gray-900 cil-transition-colors", children: k })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "cil-group", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-uppercase cil-font-bold cil-text-gray-400 cil-tracking-widest cil-mb-1.5", children: r.email }),
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-base cil-font-semibold cil-text-gray-700 cil-group-hover:text-gray-900 cil-transition-colors", children: c.email || g })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2", style: { borderColor: `${m}20` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${m}15` }, children: /* @__PURE__ */ e.jsx(ri, { className: "cil-w-6 cil-h-6", style: { color: m } }) }),
                  /* @__PURE__ */ e.jsx("h2", { className: "cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide", children: r.permissionsLabel })
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "cil-grid cil-grid-cols-1 cil-gap-3 cil-max-h-[400px] cil-overflow-y-auto cil-pr-2 cil-custom-scrollbar", children: Y.length > 0 ? Y.map((N, $) => {
                  var U, le;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      className: "cil-p-4 cil-rounded-2xl cil-border-2 cil-flex cil-flex-col cil-gap-2 cil-hover:shadow-lg cil-transition-all cil-group",
                      style: {
                        backgroundColor: `${m}05`,
                        borderColor: `${m}20`
                      },
                      children: [
                        /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-font-bold cil-uppercase cil-tracking-wider", style: { color: m }, children: ((U = N["Permission ID"]) == null ? void 0 : U.split(".")[0]) || "App" }),
                        /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-font-bold cil-text-gray-800", children: ((le = N["Permission ID"]) == null ? void 0 : le.split(".").slice(1).join(" ")) || N["Permission ID"] }),
                        /* @__PURE__ */ e.jsx(
                          "span",
                          {
                            className: "cil-mt-1 cil-w-fit cil-px-3 cil-py-1 cil-rounded-lg cil-text-xs cil-font-extrabold cil-uppercase cil-tracking-widest",
                            style: { backgroundColor: m, color: "white" },
                            children: N["Action Key"]
                          }
                        )
                      ]
                    },
                    $
                  );
                }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-py-8 cil-text-center", children: [
                  /* @__PURE__ */ e.jsx(ri, { className: "cil-w-12 cil-h-12 cil-mx-auto cil-mb-3 cil-text-gray-300" }),
                  /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-400 cil-italic", children: r.noPermissions })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2", style: { borderColor: `${m}20` }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${m}15` }, children: /* @__PURE__ */ e.jsx(ti, { className: "cil-w-6 cil-h-6", style: { color: m } }) }),
                /* @__PURE__ */ e.jsx("h2", { className: "cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide", children: r.activeSessions })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "cil-space-y-3 cil-max-h-[500px] cil-overflow-y-auto cil-pr-2 cil-custom-scrollbar", children: a.length > 0 ? a.map((N) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "cil-p-4 cil-border-2 cil-rounded-2xl cil-flex cil-justify-between cil-items-center cil-group cil-hover:shadow-lg cil-transition-all",
                  style: {
                    backgroundColor: `${m}05`,
                    borderColor: `${m}15`
                  },
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-flex-1", children: [
                      /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${m}10`, color: m }, children: J(N["Device Name"]) }),
                      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1.5 cil-flex-1", children: [
                        /* @__PURE__ */ e.jsx("div", { className: "cil-font-black cil-text-gray-800 cil-text-sm", title: N["Device Name"], children: z(N["Device Name"]) }),
                        /* @__PURE__ */ e.jsxs("div", { className: "cil-text-xs cil-text-gray-600 cil-font-semibold cil-flex cil-items-center cil-gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "cil-w-2 cil-h-2 cil-rounded-full cil-bg-green-500" }),
                          N.IP
                        ] }),
                        N["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "cil-text-xs cil-text-gray-500 cil-italic", children: [
                          r.expiry,
                          ": ",
                          new Date(N["Expiration Date"]).toLocaleDateString()
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => fe(!1, [N._id]),
                        disabled: O,
                        className: "cil-p-3 cil-text-red-500 cil-hover:bg-red-50 cil-rounded-xl cil-transition-all cil-opacity-0 cil-group-hover:opacity-100 cil-focus:opacity-100 cil-hover:scale-110",
                        title: r.logoutThisSession,
                        children: /* @__PURE__ */ e.jsx(xi, { className: "cil-w-5 cil-h-5" })
                      }
                    )
                  ]
                },
                N._id
              )) : /* @__PURE__ */ e.jsxs("div", { className: "cil-py-12 cil-text-center", children: [
                /* @__PURE__ */ e.jsx(ti, { className: "cil-w-12 cil-h-12 cil-mx-auto cil-mb-3 cil-text-gray-300" }),
                /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-400 cil-italic", children: r.noSessions })
              ] }) }),
              a.length > 1 && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => fe(!0),
                  disabled: O,
                  className: "cil-w-full cil-py-3 cil-text-sm cil-uppercase cil-tracking-widest cil-font-extrabold cil-text-white cil-rounded-2xl cil-transition-all cil-active:scale-95 cil-hover:brightness-110 cil-shadow-lg",
                  style: { backgroundColor: "#ef4444" },
                  children: O ? /* @__PURE__ */ e.jsxs("span", { className: "cil-flex cil-items-center cil-justify-center cil-gap-2", children: [
                    /* @__PURE__ */ e.jsx(ie, { size: "sm", color: "#ffffff" }),
                    r.loggingOut
                  ] }) : r.logoutAllSessions
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-mt-12 cil-flex cil-flex-col sm:cil-flex-row cil-gap-4 cil-justify-center cil-pt-8 cil-border-t-2", style: { borderColor: `${m}10` }, children: [
            p && /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: p,
                className: "cil-px-10 cil-py-4 cil-rounded-2xl cil-font-bold cil-text-base cil-transition-all cil-border-2 cil-border-gray-300 cil-hover:border-gray-400 cil-hover:bg-gray-50 cil-active:scale-95 cil-shadow-md cil-hover:shadow-lg",
                children: r.closeProfile
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => b && b("change-password"),
                className: "cil-px-10 cil-py-4 cil-rounded-2xl cil-font-bold cil-text-base cil-text-white cil-shadow-lg cil-transition-all cil-active:scale-95 cil-hover:brightness-110 cil-hover:shadow-xl",
                style: { backgroundColor: m },
                children: r.changePassword
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
  sl as ForgotPassword,
  ie as LoadingSpinner,
  ll as Login,
  rl as ResetPassword,
  cl as SignUp,
  yi as SocialAuthButtons,
  dl as UserMenu,
  ul as UserProfile,
  nl as WaitingConfirmation,
  bi as getValidProfileImageUrl,
  Zi as isValidUrl,
  de as translations,
  he as useAuthApi,
  Ne as useSecurity,
  Ji as useUserProfile
};
