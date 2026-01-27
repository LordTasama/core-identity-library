import ge, { useEffect as ue, useState as b, useRef as Pe } from "react";
import { AlertTriangle as Ii, AlertCircle as oi, EyeOff as pe, Eye as ye, CheckCircle as Di, User as ai, KeyRound as $i, LogOut as di, Globe as zi, Check as Fi, ChevronDown as Vi, Search as Ui, Bell as Wi, Sun as Bi, Moon as Hi, Settings as Ue, Sparkles as Yi, Mail as qi, Key as li, Monitor as ci, Smartphone as Ki, Tablet as Xi } from "lucide-react";
var We = { exports: {} }, Re = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si;
function Gi() {
  if (si) return Re;
  si = 1;
  var l = ge, f = Symbol.for("react.element"), x = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, d = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(N, m, C) {
    var c, k = {}, r = null, t = null;
    C !== void 0 && (r = "" + C), m.key !== void 0 && (r = "" + m.key), m.ref !== void 0 && (t = m.ref);
    for (c in m) h.call(m, c) && !o.hasOwnProperty(c) && (k[c] = m[c]);
    if (N && N.defaultProps) for (c in m = N.defaultProps, m) k[c] === void 0 && (k[c] = m[c]);
    return { $$typeof: f, type: N, key: r, ref: t, props: k, _owner: d.current };
  }
  return Re.Fragment = x, Re.jsx = p, Re.jsxs = p, Re;
}
var _e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri;
function Ji() {
  return ri || (ri = 1, process.env.NODE_ENV !== "production" && function() {
    var l = ge, f = Symbol.for("react.element"), x = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), N = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), r = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), a = Symbol.iterator, w = "@@iterator";
    function u(i) {
      if (i === null || typeof i != "object")
        return null;
      var s = a && i[a] || i[w];
      return typeof s == "function" ? s : null;
    }
    var n = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(i) {
      {
        for (var s = arguments.length, g = new Array(s > 1 ? s - 1 : 0), _ = 1; _ < s; _++)
          g[_ - 1] = arguments[_];
        v("error", i, g);
      }
    }
    function v(i, s, g) {
      {
        var _ = n.ReactDebugCurrentFrame, K = _.getStackAddendum();
        K !== "" && (s += "%s", g = g.concat([K]));
        var X = g.map(function(U) {
          return String(U);
        });
        X.unshift("Warning: " + s), Function.prototype.apply.call(console[i], console, X);
      }
    }
    var S = !1, T = !1, j = !1, O = !1, $ = !1, W;
    W = Symbol.for("react.module.reference");
    function z(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === h || i === o || $ || i === d || i === C || i === c || O || i === t || S || T || j || typeof i == "object" && i !== null && (i.$$typeof === r || i.$$typeof === k || i.$$typeof === p || i.$$typeof === N || i.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === W || i.getModuleId !== void 0));
    }
    function E(i, s, g) {
      var _ = i.displayName;
      if (_)
        return _;
      var K = s.displayName || s.name || "";
      return K !== "" ? g + "(" + K + ")" : g;
    }
    function D(i) {
      return i.displayName || "Context";
    }
    function L(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case h:
          return "Fragment";
        case x:
          return "Portal";
        case o:
          return "Profiler";
        case d:
          return "StrictMode";
        case C:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case N:
            var s = i;
            return D(s) + ".Consumer";
          case p:
            var g = i;
            return D(g._context) + ".Provider";
          case m:
            return E(i, i.render, "ForwardRef");
          case k:
            var _ = i.displayName || null;
            return _ !== null ? _ : L(i.type) || "Memo";
          case r: {
            var K = i, X = K._payload, U = K._init;
            try {
              return L(U(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, P = 0, I, Y, se, ne, J, fe, R;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function H() {
      {
        if (P === 0) {
          I = console.log, Y = console.info, se = console.warn, ne = console.error, J = console.group, fe = console.groupCollapsed, R = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: V,
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
        P++;
      }
    }
    function ie() {
      {
        if (P--, P === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, i, {
              value: I
            }),
            info: B({}, i, {
              value: Y
            }),
            warn: B({}, i, {
              value: se
            }),
            error: B({}, i, {
              value: ne
            }),
            group: B({}, i, {
              value: J
            }),
            groupCollapsed: B({}, i, {
              value: fe
            }),
            groupEnd: B({}, i, {
              value: R
            })
          });
        }
        P < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = n.ReactCurrentDispatcher, G;
    function Q(i, s, g) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (K) {
            var _ = K.stack.trim().match(/\n( *(at )?)/);
            G = _ && _[1] || "";
          }
        return `
` + G + i;
      }
    }
    var le = !1, ke;
    {
      var Te = typeof WeakMap == "function" ? WeakMap : Map;
      ke = new Te();
    }
    function Le(i, s) {
      if (!i || le)
        return "";
      {
        var g = ke.get(i);
        if (g !== void 0)
          return g;
      }
      var _;
      le = !0;
      var K = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = me.current, me.current = null, H();
      try {
        if (s) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (te) {
              _ = te;
            }
            Reflect.construct(i, [], U);
          } else {
            try {
              U.call();
            } catch (te) {
              _ = te;
            }
            i.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            _ = te;
          }
          i();
        }
      } catch (te) {
        if (te && _ && typeof te.stack == "string") {
          for (var F = te.stack.split(`
`), ce = _.stack.split(`
`), Z = F.length - 1, ee = ce.length - 1; Z >= 1 && ee >= 0 && F[Z] !== ce[ee]; )
            ee--;
          for (; Z >= 1 && ee >= 0; Z--, ee--)
            if (F[Z] !== ce[ee]) {
              if (Z !== 1 || ee !== 1)
                do
                  if (Z--, ee--, ee < 0 || F[Z] !== ce[ee]) {
                    var ae = `
` + F[Z].replace(" at new ", " at ");
                    return i.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", i.displayName)), typeof i == "function" && ke.set(i, ae), ae;
                  }
                while (Z >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        le = !1, me.current = X, ie(), Error.prepareStackTrace = K;
      }
      var Ee = i ? i.displayName || i.name : "", Ne = Ee ? Q(Ee) : "";
      return typeof i == "function" && ke.set(i, Ne), Ne;
    }
    function Ae(i, s, g) {
      return Le(i, !1);
    }
    function Oe(i) {
      var s = i.prototype;
      return !!(s && s.isReactComponent);
    }
    function we(i, s, g) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Le(i, Oe(i));
      if (typeof i == "string")
        return Q(i);
      switch (i) {
        case C:
          return Q("Suspense");
        case c:
          return Q("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case m:
            return Ae(i.render);
          case k:
            return we(i.type, s, g);
          case r: {
            var _ = i, K = _._payload, X = _._init;
            try {
              return we(X(K), s, g);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, M = {}, A = n.ReactDebugCurrentFrame;
    function q(i) {
      if (i) {
        var s = i._owner, g = we(i.type, i._source, s ? s.type : null);
        A.setExtraStackFrame(g);
      } else
        A.setExtraStackFrame(null);
    }
    function re(i, s, g, _, K) {
      {
        var X = Function.call.bind(je);
        for (var U in i)
          if (X(i, U)) {
            var F = void 0;
            try {
              if (typeof i[U] != "function") {
                var ce = Error((_ || "React class") + ": " + g + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              F = i[U](s, U, _, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              F = Z;
            }
            F && !(F instanceof Error) && (q(K), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", g, U, typeof F), q(null)), F instanceof Error && !(F.message in M) && (M[F.message] = !0, q(K), y("Failed %s type: %s", g, F.message), q(null));
          }
      }
    }
    var Ie = Array.isArray;
    function De(i) {
      return Ie(i);
    }
    function hi(i) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, g = s && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return g;
      }
    }
    function pi(i) {
      try {
        return Be(i), !1;
      } catch {
        return !0;
      }
    }
    function Be(i) {
      return "" + i;
    }
    function He(i) {
      if (pi(i))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hi(i)), Be(i);
    }
    var Ye = n.ReactCurrentOwner, yi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qe, Ke;
    function bi(i) {
      if (je.call(i, "ref")) {
        var s = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function vi(i) {
      if (je.call(i, "key")) {
        var s = Object.getOwnPropertyDescriptor(i, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function wi(i, s) {
      typeof i.ref == "string" && Ye.current;
    }
    function ji(i, s) {
      {
        var g = function() {
          qe || (qe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function Ni(i, s) {
      {
        var g = function() {
          Ke || (Ke = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Ci = function(i, s, g, _, K, X, U) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: i,
        key: s,
        ref: g,
        props: U,
        // Record the component responsible for creating this element.
        _owner: X
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
        value: _
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function ki(i, s, g, _, K) {
      {
        var X, U = {}, F = null, ce = null;
        g !== void 0 && (He(g), F = "" + g), vi(s) && (He(s.key), F = "" + s.key), bi(s) && (ce = s.ref, wi(s, K));
        for (X in s)
          je.call(s, X) && !yi.hasOwnProperty(X) && (U[X] = s[X]);
        if (i && i.defaultProps) {
          var Z = i.defaultProps;
          for (X in Z)
            U[X] === void 0 && (U[X] = Z[X]);
        }
        if (F || ce) {
          var ee = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          F && ji(U, ee), ce && Ni(U, ee);
        }
        return Ci(i, F, ce, K, _, Ye.current, U);
      }
    }
    var $e = n.ReactCurrentOwner, Xe = n.ReactDebugCurrentFrame;
    function Se(i) {
      if (i) {
        var s = i._owner, g = we(i.type, i._source, s ? s.type : null);
        Xe.setExtraStackFrame(g);
      } else
        Xe.setExtraStackFrame(null);
    }
    var ze;
    ze = !1;
    function Fe(i) {
      return typeof i == "object" && i !== null && i.$$typeof === f;
    }
    function Ge() {
      {
        if ($e.current) {
          var i = L($e.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Si(i) {
      return "";
    }
    var Je = {};
    function Ei(i) {
      {
        var s = Ge();
        if (!s) {
          var g = typeof i == "string" ? i : i.displayName || i.name;
          g && (s = `

Check the top-level render call using <` + g + ">.");
        }
        return s;
      }
    }
    function Qe(i, s) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var g = Ei(s);
        if (Je[g])
          return;
        Je[g] = !0;
        var _ = "";
        i && i._owner && i._owner !== $e.current && (_ = " It was passed a child from " + L(i._owner.type) + "."), Se(i), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, _), Se(null);
      }
    }
    function Ze(i, s) {
      {
        if (typeof i != "object")
          return;
        if (De(i))
          for (var g = 0; g < i.length; g++) {
            var _ = i[g];
            Fe(_) && Qe(_, s);
          }
        else if (Fe(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var K = u(i);
          if (typeof K == "function" && K !== i.entries)
            for (var X = K.call(i), U; !(U = X.next()).done; )
              Fe(U.value) && Qe(U.value, s);
        }
      }
    }
    function Pi(i) {
      {
        var s = i.type;
        if (s == null || typeof s == "string")
          return;
        var g;
        if (typeof s == "function")
          g = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === k))
          g = s.propTypes;
        else
          return;
        if (g) {
          var _ = L(s);
          re(g, i.props, "prop", _, i);
        } else if (s.PropTypes !== void 0 && !ze) {
          ze = !0;
          var K = L(s);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ri(i) {
      {
        for (var s = Object.keys(i.props), g = 0; g < s.length; g++) {
          var _ = s[g];
          if (_ !== "children" && _ !== "key") {
            Se(i), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), Se(null);
            break;
          }
        }
        i.ref !== null && (Se(i), y("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    var ei = {};
    function ii(i, s, g, _, K, X) {
      {
        var U = z(i);
        if (!U) {
          var F = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Si();
          ce ? F += ce : F += Ge();
          var Z;
          i === null ? Z = "null" : De(i) ? Z = "array" : i !== void 0 && i.$$typeof === f ? (Z = "<" + (L(i.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof i, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, F);
        }
        var ee = ki(i, s, g, K, X);
        if (ee == null)
          return ee;
        if (U) {
          var ae = s.children;
          if (ae !== void 0)
            if (_)
              if (De(ae)) {
                for (var Ee = 0; Ee < ae.length; Ee++)
                  Ze(ae[Ee], i);
                Object.freeze && Object.freeze(ae);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ze(ae, i);
        }
        if (je.call(s, "key")) {
          var Ne = L(i), te = Object.keys(s).filter(function(Ti) {
            return Ti !== "key";
          }), Ve = te.length > 0 ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ei[Ne + Ve]) {
            var Mi = te.length > 0 ? "{" + te.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ve, Ne, Mi, Ne), ei[Ne + Ve] = !0;
          }
        }
        return i === h ? Ri(ee) : Pi(ee), ee;
      }
    }
    function _i(i, s, g) {
      return ii(i, s, g, !0);
    }
    function Li(i, s, g) {
      return ii(i, s, g, !1);
    }
    var Ai = Li, Oi = _i;
    _e.Fragment = h, _e.jsx = Ai, _e.jsxs = Oi;
  }()), _e;
}
process.env.NODE_ENV === "production" ? We.exports = Gi() : We.exports = Ji();
var e = We.exports, ui = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ti = ge.createContext && ge.createContext(ui), be = function() {
  return be = Object.assign || function(l) {
    for (var f, x = 1, h = arguments.length; x < h; x++) {
      f = arguments[x];
      for (var d in f) Object.prototype.hasOwnProperty.call(f, d) && (l[d] = f[d]);
    }
    return l;
  }, be.apply(this, arguments);
}, Qi = function(l, f) {
  var x = {};
  for (var h in l) Object.prototype.hasOwnProperty.call(l, h) && f.indexOf(h) < 0 && (x[h] = l[h]);
  if (l != null && typeof Object.getOwnPropertySymbols == "function") for (var d = 0, h = Object.getOwnPropertySymbols(l); d < h.length; d++)
    f.indexOf(h[d]) < 0 && Object.prototype.propertyIsEnumerable.call(l, h[d]) && (x[h[d]] = l[h[d]]);
  return x;
};
function fi(l) {
  return l && l.map(function(f, x) {
    return ge.createElement(f.tag, be({
      key: x
    }, f.attr), fi(f.child));
  });
}
function mi(l) {
  return function(f) {
    return ge.createElement(Zi, be({
      attr: be({}, l.attr)
    }, f), fi(l.child));
  };
}
function Zi(l) {
  var f = function(x) {
    var h = l.attr, d = l.size, o = l.title, p = Qi(l, ["attr", "size", "title"]), N = d || x.size || "1em", m;
    return x.className && (m = x.className), l.className && (m = (m ? m + " " : "") + l.className), ge.createElement("svg", be({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, x.attr, h, p, {
      className: m,
      style: be(be({
        color: l.color || x.color
      }, x.style), l.style),
      height: N,
      width: N,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && ge.createElement("title", null, o), l.children);
  };
  return ti !== void 0 ? ge.createElement(ti.Consumer, null, function(x) {
    return f(x);
  }) : f(ui);
}
function el(l) {
  return mi({ attr: { role: "img", viewBox: "0 0 24 24" }, child: [{ tag: "title", attr: {}, child: [] }, { tag: "path", attr: { d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" } }] })(l);
}
const oe = {
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
  const f = !!l && l.length > 0;
  return f || console.warn("⚠️ Core Identity Library: Falta el token de autorización (apiToken) en las props del componente."), { isAuthorized: f, apiToken: l };
}
function xe(l, f) {
  const { isAuthorized: x } = ve(f), h = async (r, t = {}) => {
    const { token: a, ...w } = t;
    try {
      const u = {
        "Content-Type": "application/json",
        "X-API-KEY": f,
        "X-REQUEST-URL": typeof window < "u" ? window.location.origin.replace(/\/$/, "") : "",
        ...t.headers
      };
      a && (u.Authorization = `Bearer ${a}`);
      const n = await fetch(`${l}${r}`, {
        ...w,
        headers: u,
        credentials: "include"
      });
      let y;
      const v = n.headers.get("content-type");
      if (v && v.includes("application/json"))
        try {
          y = await n.json();
        } catch (S) {
          console.error("Failed to parse JSON response", S), y = { message: await n.text() };
        }
      else
        y = { message: await n.text() };
      if (!n.ok) {
        const S = new Error(y.message || y.error || `Error ${n.status}`);
        throw S.status = n.status, S.data = y, S;
      }
      return y;
    } catch (u) {
      if (u.name === "TypeError" && (u.message.includes("Failed to fetch") || u.message.includes("NetworkError"))) {
        const n = new Error("Connection Error");
        throw n.isConnectionError = !0, n;
      }
      throw u;
    }
  }, d = async (r, t, a = {}) => h(r, {
    method: "POST",
    body: t ? JSON.stringify(t) : void 0,
    ...a
  }), o = async (r, t = {}) => h(r, {
    method: "GET",
    ...t
  });
  return {
    post: d,
    get: o,
    verifySession: async (r, t) => d("/verify-session", { email: t }, { token: r }),
    getUserContext: async (r, t) => d("/user-context", { email: t }, { token: r }),
    logout: async (r, t) => d("/logout", { email: t }, { token: r }),
    changePassword: async (r) => {
      const { token: t, ...a } = r;
      return d("/change-password", a, { token: t });
    },
    getAppColors: async () => o("/colors-app"),
    getMe: async (r, t) => d("/me", { email: r }, { token: t })
  };
}
function xi({
  apiBaseUrl: l,
  user: f = {},
  primaryColor: x = "#3b82f6",
  onSuccess: h,
  onError: d,
  lang: o = "en",
  apiToken: p,
  texts: N = {}
}) {
  var t;
  const m = { ...oe[o], ...N }, { post: C } = xe(l, p), c = ((t = f.app_info) == null ? void 0 : t.primaryColor) || x;
  ue(() => {
    const a = (w) => {
      let u, n;
      try {
        const S = new URL(l);
        u = S.origin;
        const T = S.hostname.split(".");
        T.length >= 2 && (n = T.slice(-2).join("."));
      } catch {
      }
      const y = n && w.origin.endsWith(n) || u && w.origin === u;
      if (w.origin === window.location.origin || y) {
        if (w.data.type === "OAUTH_SUCCESS") {
          const { token: S, handshake_code: T, user: j } = w.data.payload;
          console.log("OAuth Login Successful:", j), h && h({
            success: !0,
            token: S,
            handshake_code: T,
            user: j,
            email: j == null ? void 0 : j.email,
            // Ensure compatibility with existing success handlers
            provider: "Social"
          });
        } else if (w.data.type === "OAUTH_ERROR") {
          const { message: S } = w.data.payload;
          console.error("OAuth Login Error:", S), d && d(S);
        }
      }
    };
    return window.addEventListener("message", a, !1), () => window.removeEventListener("message", a);
  }, [h, d, l]);
  const k = (a) => {
    C("/login", {
      provider: a,
      frontend_origin: window.location.origin
    }).then((w) => {
      const u = w.auth_url || w.redirect_url;
      if (u) {
        const v = window.screen.width / 2 - 300, S = window.screen.height / 2 - 700 / 2;
        window.open(
          u,
          "login_popup",
          `width=600,height=700,left=${v},top=${S},status=no,resizable=yes,scrollbars=yes`
        );
      } else {
        const n = w.error || w.message || (o === "es" ? "Error al iniciar sesión social" : "Social login error");
        d && d(n);
      }
    }).catch((w) => {
      console.error("⚠️ Social Auth Error:", w), d && d(w.message || "Error");
    });
  }, r = c ? { borderColor: c, color: c } : {};
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-3", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        className: "cil-w-full cil-flex cil-items-center cil-justify-center cil-gap-2 cil-px-4 cil-py-2 cil-border cil-rounded-md cil-hover:bg-gray-50 cil-transition-colors",
        style: r,
        onClick: () => k("Google"),
        "data-testid": "button-google-login",
        children: [
          /* @__PURE__ */ e.jsx(el, { className: "cil-h-4 cil-w-4" }),
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
        style: r,
        onClick: () => k("Microsoft"),
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
function Ce({ lang: l = "en" }) {
  const f = oe[l] || oe.en;
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-justify-center cil-p-8 cil-bg-red-50 cil-border cil-border-red-200 cil-rounded-lg cil-text-red-800 cil-space-x-4 cil-max-w-md cil-mx-auto cil-my-10", children: [
    /* @__PURE__ */ e.jsx(Ii, { className: "cil-w-8 cil-h-8 cil-flex-shrink-0" }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h3", { className: "cil-font-bold cil-text-lg", children: f.authErrorTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: f.authErrorMessage })
    ] })
  ] });
}
function he({ message: l }) {
  return l ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2 cil-p-3 cil-text-sm cil-text-red-700 cil-bg-red-50 cil-border cil-border-red-100 cil-rounded-md cil-animate-in cil-fade-in cil-slide-in-from-top-1 cil-duration-200", children: [
    /* @__PURE__ */ e.jsx(oi, { className: "cil-w-4 cil-h-4 cil-flex-shrink-0" }),
    /* @__PURE__ */ e.jsx("p", { children: l })
  ] }) : null;
}
function de({
  size: l = "md",
  color: f = "currentColor",
  className: x = ""
}) {
  const h = {
    xs: "cil-w-3 cil-h-3",
    sm: "cil-w-4 cil-h-4",
    md: "cil-w-6 cil-h-6",
    lg: "cil-w-8 cil-h-8",
    xl: "cil-w-12 cil-h-12"
  }, d = {
    xs: 2,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4
  };
  return /* @__PURE__ */ e.jsx("div", { className: `cil-flex cil-items-center cil-justify-center ${x}`, children: /* @__PURE__ */ e.jsxs(
    "svg",
    {
      className: `cil-animate-spin ${h[l] || h.md}`,
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
            stroke: f,
            strokeWidth: d[l] || 3
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            className: "cil-opacity-75",
            fill: f,
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  ) });
}
function dl({
  apiBaseUrl: l,
  user: f = {},
  primaryColor: x = "#3b82f6",
  backgroundColor: h = "#ffffff",
  onSuccess: d,
  onError: o,
  onNavigate: p,
  apiToken: N,
  lang: m = "en",
  texts: C = {}
}) {
  const c = { ...oe[m], ...C }, { isAuthorized: k } = ve(N), r = x, t = h, { post: a } = xe(l, N), [w, u] = b(""), [n, y] = b(""), [v, S] = b(!1), [T, j] = b(!1), [O, $] = b("");
  if (!k)
    return /* @__PURE__ */ e.jsx(Ce, { lang: m });
  const W = (B) => {
    d && d(B);
  }, z = async (B) => {
    B.preventDefault(), j(!0), $("");
    try {
      const P = await a("/login", {
        provider: "Email",
        email: w,
        password: n
      });
      if (P.success)
        W({ ...P, email: w });
      else {
        const I = P.message || P.error || c.unknownError;
        $(I), o && o(I), j(!1);
      }
    } catch (P) {
      console.error("⚠️ Login Error:", P);
      let I = P.message;
      P.isConnectionError ? I = c.connectionError : P.status >= 500 ? I = c.serverError : (!I || I === "Error " + P.status) && (I = c.unknownError), $(I), o && o(I), j(!1);
    }
  }, E = {
    backgroundColor: r,
    color: "#ffffff"
  }, D = {
    backgroundColor: t
  }, L = {
    color: r
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: D, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: c.login }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: c.loginSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(
        xi,
        {
          apiBaseUrl: l,
          user: f,
          primaryColor: r,
          onSuccess: W,
          onError: (B) => {
            $(B), o && o(B);
          },
          lang: m,
          apiToken: N,
          texts: C
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil-inset-0 cil-flex cil-items-center", children: /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-border-t cil-border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "cil-relative cil-flex cil-justify-center cil-text-xs cil-uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "cil-px-2 cil-text-gray-500", style: D, children: c.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: z, className: "cil-space-y-4", children: [
        /* @__PURE__ */ e.jsx(he, { message: O }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-email", className: "cil-text-sm cil-font-medium cil-leading-none", children: c.email }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              id: "auth-email",
              type: "email",
              placeholder: "user@example.com",
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
              value: w,
              onChange: (B) => {
                u(B.target.value), O && $("");
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
                type: v ? "text" : "password",
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10",
                value: n,
                onChange: (B) => {
                  y(B.target.value), O && $("");
                },
                required: !0
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
                onClick: () => S(!v),
                children: v ? /* @__PURE__ */ e.jsx(pe, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
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
            style: L,
            children: c.forgotPassword
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed",
            style: E,
            disabled: T,
            children: T ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2", children: [
              /* @__PURE__ */ e.jsx(de, { size: "sm", color: "#ffffff" }),
              /* @__PURE__ */ e.jsx("span", { children: c.loading })
            ] }) : c.loginButton
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
          onClick: () => p && p("signup"),
          className: "cil-font-medium cil-hover:underline",
          style: L,
          children: c.signUp
        }
      )
    ] }) })
  ] });
}
function ul({
  apiBaseUrl: l,
  user: f = {},
  primaryColor: x = "#3b82f6",
  backgroundColor: h = "#ffffff",
  onSuccess: d,
  onError: o,
  onNavigate: p,
  apiToken: N,
  lang: m = "en",
  texts: C = {}
}) {
  const c = { ...oe[m], ...C }, { isAuthorized: k } = ve(N), r = x, t = h, { post: a } = xe(l, N), [w, u] = b(!1), [n, y] = b(""), [v, S] = b(!1), [T, j] = b(!1), [O, $] = b({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  if (!k)
    return /* @__PURE__ */ e.jsx(Ce, { lang: m });
  const W = (P) => {
    d && d(P);
  }, z = async (P) => {
    if (P.preventDefault(), y(""), O.password !== O.confirmPassword) {
      const I = c.passwordsDontMatch;
      y(I), o && o(I);
      return;
    }
    u(!0);
    try {
      const I = await a("/register", {
        firstName: O.firstName,
        lastName: O.lastName,
        email: O.email,
        password: O.password
      });
      if (I.success)
        W({ ...I, email: O.email });
      else {
        const Y = I.message || I.error || c.unknownError;
        y(Y), o && o(Y), u(!1);
      }
    } catch (I) {
      console.error("⚠️ SignUp Error:", I);
      let Y = I.message;
      I.isConnectionError ? Y = c.connectionError : I.status >= 500 ? Y = c.serverError : (!Y || Y === "Error " + I.status) && (Y = c.unknownError), y(Y), o && o(Y), u(!1);
    }
  }, E = (P, I) => {
    $((Y) => ({ ...Y, [P]: I })), n && y("");
  }, D = {
    backgroundColor: r,
    color: "#ffffff"
  }, L = {
    backgroundColor: t
  }, B = {
    color: r
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: L, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: c.createAccount }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: c.createAccountSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(
        xi,
        {
          apiBaseUrl: l,
          user: f,
          primaryColor: r,
          onSuccess: W,
          onError: (P) => {
            y(P), o && o(P);
          },
          lang: m,
          apiToken: N,
          texts: C
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-py-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil-inset-0 cil-flex cil-items-center", children: /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-border-t cil-border-gray-200" }) }),
        /* @__PURE__ */ e.jsx("div", { className: "cil-relative cil-flex cil-justify-center cil-text-xs cil-uppercase", children: /* @__PURE__ */ e.jsx("span", { className: "cil-px-2 cil-text-gray-500", style: L, children: c.or }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: z, className: "cil-space-y-4", children: [
        /* @__PURE__ */ e.jsx(he, { message: n }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-2 cil-gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
            /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: c.firstName }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                value: O.firstName,
                onChange: (P) => E("firstName", P.target.value),
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
                value: O.lastName,
                onChange: (P) => E("lastName", P.target.value),
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
              value: O.email,
              onChange: (P) => E("email", P.target.value),
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
                type: v ? "text" : "password",
                value: O.password,
                onChange: (P) => E("password", P.target.value),
                required: !0,
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
                onClick: () => S(!v),
                children: v ? /* @__PURE__ */ e.jsx(pe, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
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
                type: T ? "text" : "password",
                value: O.confirmPassword,
                onChange: (P) => E("confirmPassword", P.target.value),
                required: !0,
                className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
                onClick: () => j(!T),
                children: T ? /* @__PURE__ */ e.jsx(pe, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed",
            style: D,
            disabled: w,
            children: w ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2", children: [
              /* @__PURE__ */ e.jsx(de, { size: "sm", color: "#ffffff" }),
              /* @__PURE__ */ e.jsx("span", { children: c.creatingAccount })
            ] }) : c.createAccount
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
          onClick: () => p && p("login"),
          className: "cil-font-medium cil-hover:underline",
          style: B,
          children: c.login
        }
      )
    ] }) })
  ] });
}
function fl({
  apiBaseUrl: l,
  user: f = {},
  primaryColor: x = "#3b82f6",
  backgroundColor: h = "#ffffff",
  onSuccess: d,
  onError: o,
  onNavigate: p,
  apiToken: N,
  lang: m = "en",
  texts: C = {}
}) {
  const c = { ...oe[m], ...C }, { isAuthorized: k } = ve(N), r = x, t = h, { post: a } = xe(l, N), [w, u] = b(""), [n, y] = b(!1), [v, S] = b(!1), [T, j] = b("");
  if (!k)
    return /* @__PURE__ */ e.jsx(Ce, { lang: m });
  const O = async (E) => {
    E.preventDefault(), y(!0), j("");
    try {
      const D = await a("/forgot-password", { email: w });
      if (D.success)
        S(!0), d && d({ ...D, email: w });
      else {
        const L = D.message || D.error || c.unknownError;
        j(L), o && o(L), y(!1);
      }
    } catch (D) {
      console.error("⚠️ ForgotPassword Error:", D);
      let L = D.message;
      D.isConnectionError ? L = c.connectionError : D.status >= 500 ? L = c.serverError : (!L || L === "Error " + D.status) && (L = c.unknownError), j(L), o && o(L), y(!1);
    }
  }, $ = {
    backgroundColor: r,
    color: "#ffffff"
  }, W = {
    backgroundColor: t
  }, z = {
    color: r
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: W, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: c.forgotPassword }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: v ? c.checkEmail : c.resetPasswordInstructions })
    ] }),
    v ? /* @__PURE__ */ e.jsxs("div", { className: "cil-text-center cil-space-y-6 cil-py-4", children: [
      /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-mx-auto cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8 cil-text-blue-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: c.verifyEmailMessage }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-3", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => p && p("reset-password"),
            className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
            style: $,
            children: c.enterCodeAndPassword
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => p && p("login"),
            className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-border cil-border-gray-200 cil-hover:bg-gray-50",
            children: c.backToLogin
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e.jsxs("form", { onSubmit: O, className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(he, { message: T }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { htmlFor: "auth-forgot-email", className: "cil-text-sm cil-font-medium", children: c.email }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            id: "auth-forgot-email",
            type: "email",
            placeholder: "user@example.com",
            className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
            value: w,
            onChange: (E) => {
              u(E.target.value), T && j("");
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
          style: $,
          disabled: n,
          children: n ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2", children: [
            /* @__PURE__ */ e.jsx(de, { size: "sm", color: "#ffffff" }),
            /* @__PURE__ */ e.jsx("span", { children: c.sending })
          ] }) : c.sendResetLink
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => p && p("login"),
          className: "cil-w-full cil-text-sm cil-font-medium cil-hover:underline cil-text-center",
          style: z,
          children: c.backToLogin
        }
      )
    ] })
  ] });
}
function Me({ message: l }) {
  return l ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2 cil-p-3 cil-text-sm cil-text-green-700 cil-bg-green-50 cil-border cil-border-green-100 cil-rounded-md cil-animate-in cil-fade-in cil-slide-in-from-top-1 cil-duration-200", children: [
    /* @__PURE__ */ e.jsx(Di, { className: "cil-w-4 cil-h-4 cil-flex-shrink-0" }),
    /* @__PURE__ */ e.jsx("p", { children: l })
  ] }) : null;
}
function ml({
  apiBaseUrl: l,
  token: f = "",
  // The recovery code from URL/Email
  primaryColor: x = "#3b82f6",
  backgroundColor: h = "#ffffff",
  onSuccess: d,
  onError: o,
  onNavigate: p,
  apiToken: N,
  lang: m = "en",
  email: C = "",
  authToken: c = "",
  // Auth token passed from consumer
  user: k = {},
  initialWaitSeconds: r = 0,
  texts: t = {}
}) {
  const a = { ...oe[m], ...t }, { isAuthorized: w } = ve(N), u = x, n = h, { post: y } = xe(l, N), [v, S] = b({
    token: f,
    newPassword: "",
    confirmPassword: ""
  }), [T, j] = b(!1), [O, $] = b(!1), [W, z] = b(!1), [E, D] = b(!1), [L, B] = b(!1), [P, I] = b([]), [Y, se] = b(!1), [ne, J] = b(""), [fe, R] = b(""), [V, H] = b(c), [ie, me] = b(r), [G, Q] = b(a.resetPasswordSubtitle), le = Pe(null);
  if (ue(() => (ie > 0 && (le.current = setInterval(() => {
    me((M) => M <= 1 ? (clearInterval(le.current), 0) : M - 1);
  }, 1e3)), () => clearInterval(le.current)), [ie]), ue(() => {
    c && H(c);
  }, [c]), !w)
    return /* @__PURE__ */ e.jsx(Ce, { lang: m });
  const ke = (M) => {
    const A = Math.floor(M / 60), q = M % 60;
    return `${A.toString().padStart(2, "0")}:${q.toString().padStart(2, "0")}`;
  }, Te = async () => {
    if (!(!C || ie > 0)) {
      $(!0), J("");
      try {
        const M = await y("/forgot-password", { email: C });
        if (M.success)
          M.wait_seconds && me(M.wait_seconds), Q(M.message || a.resendSent);
        else {
          const A = M.message || M.error || a.connectionError;
          J(A), M.wait_seconds && me(M.wait_seconds), o && o(A);
        }
      } catch (M) {
        console.error("⚠️ Resend Reset Error:", M);
        let A = M.message;
        M.isConnectionError ? A = a.connectionError : M.status >= 500 ? A = a.serverError : (!A || A === "Error " + M.status) && (A = a.unknownError), J(A), o && o(A);
      } finally {
        $(!1);
      }
    }
  }, Le = async (M) => {
    if (M.preventDefault(), J(""), v.newPassword !== v.confirmPassword) {
      const A = a.passwordsDontMatch;
      J(A), o && o(A);
      return;
    }
    if (!v.token) {
      const A = a.enterRecoveryCode;
      J(A), o && o(A);
      return;
    }
    j(!0);
    try {
      const A = await y("/reset-password", {
        token: v.token,
        newPassword: v.newPassword,
        confirmPassword: v.confirmPassword
      });
      if (A.success || A.status)
        B(!0), A.active_sessions && I(A.active_sessions), A.token && H(A.token), d && d(A);
      else {
        const q = A.message || A.error || a.unknownError;
        J(q), o && o(q), j(!1);
      }
    } catch (A) {
      console.error("⚠️ ResetPassword Error:", A);
      let q = A.message;
      A.isConnectionError ? q = a.connectionError : A.status >= 500 ? q = a.serverError : (!q || q === "Error " + A.status) && (q = a.unknownError), J(q), o && o(q), j(!1);
    }
  }, Ae = async (M = !1, A = []) => {
    if (!V) {
      const q = a.noSessions;
      J(q), o && o(q);
      return;
    }
    se(!0), J(""), R("");
    try {
      const q = await y("/logout_sessions", {
        email: C || "",
        all_sessions: M,
        session_ids: A
      }, { token: V });
      if (q.success)
        I(M ? [] : (re) => re.filter((Ie) => !A.includes(Ie._id))), R(a.logoutSuccess);
      else {
        const re = q.message || q.error || "Logout failed";
        J(re), o && o(re);
      }
    } catch (q) {
      console.error("⚠️ Logout Sessions Error:", q);
      let re = q.message;
      q.isConnectionError ? re = a.connectionError : q.status >= 500 ? re = a.serverError : (!re || re === "Error " + q.status) && (re = a.unknownError), J(re), o && o(re);
    } finally {
      se(!1);
    }
  }, Oe = {
    backgroundColor: u,
    color: "#ffffff"
  }, we = {
    backgroundColor: n
  }, je = {
    color: u
  };
  return L ? /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: we, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-text-center cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-mx-auto cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500 cil-mb-4", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: a.resetSuccessTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: a.resetSuccessSubtitle })
    ] }),
    /* @__PURE__ */ e.jsx(Me, { message: fe }),
    /* @__PURE__ */ e.jsx(he, { message: ne }),
    P.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "cil-mt-8 cil-space-y-4 cil-border-t cil-pt-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "cil-text-left", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "cil-text-lg cil-font-medium", children: a.activeSessions }),
        /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-text-gray-500", children: a.sessionsSubtitle })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "cil-space-y-3 cil-max-h-60 cil-overflow-y-auto cil-pr-1", children: P.map((M) => {
        var A;
        return /* @__PURE__ */ e.jsxs("div", { className: "cil-p-3 cil-border cil-rounded-md cil-text-xs cil-bg-gray-50 cil-flex cil-justify-between cil-items-center", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1", children: [
            /* @__PURE__ */ e.jsx("div", { className: "cil-font-semibold cil-text-gray-700 cil-truncate cil-max-w-[180px]", title: M["Device Name"], children: ((A = M["Device Name"]) == null ? void 0 : A.split(" ")[0]) || a.deviceName }),
            /* @__PURE__ */ e.jsx("div", { className: "cil-text-gray-500", children: M.IP }),
            M["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "cil-text-gray-400 cil-italic", children: [
              a.expiry,
              ": ",
              new Date(M["Expiration Date"]).toLocaleDateString()
            ] })
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => Ae(!1, [M._id]),
              disabled: Y,
              className: "cil-px-2 cil-py-1 cil-text-red-600 cil-hover:bg-red-50 cil-rounded cil-transition-colors",
              children: a.logoutThisSession
            }
          )
        ] }, M._id);
      }) }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => Ae(!0),
          disabled: Y,
          className: "cil-w-full cil-py-2 cil-text-sm cil-text-red-600 cil-border cil-border-red-200 cil-rounded-md cil-hover:bg-red-50 cil-transition-colors cil-font-medium cil-flex cil-items-center cil-justify-center cil-gap-2",
          children: Y ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(de, { size: "xs", color: "#ef4444" }),
            a.loggingOut
          ] }) : a.logoutAllSessions
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "cil-mt-8 cil-pt-6 cil-border-t", children: /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => p && p("login"),
        className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
        style: Oe,
        children: a.goToLogin
      }
    ) })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: we, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: a.resetPasswordTitle }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: G })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: Le, className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(he, { message: ne }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: a.verificationCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: v.token,
            onChange: (M) => S({ ...v, token: M.target.value }),
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
              type: W ? "text" : "password",
              value: v.newPassword,
              onChange: (M) => S({ ...v, newPassword: M.target.value }),
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
              onClick: () => z(!W),
              children: W ? /* @__PURE__ */ e.jsx(pe, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
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
              type: E ? "text" : "password",
              value: v.confirmPassword,
              onChange: (M) => S({ ...v, confirmPassword: M.target.value }),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => D(!E),
              children: E ? /* @__PURE__ */ e.jsx(pe, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          className: "cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed",
          style: Oe,
          disabled: T || !v.token,
          children: T ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2", children: [
            /* @__PURE__ */ e.jsx(de, { size: "sm", color: "#ffffff" }),
            /* @__PURE__ */ e.jsx("span", { children: a.resetting })
          ] }) : a.resetPasswordTitle
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-pt-2 cil-text-center cil-space-y-3", children: [
        ie > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "cil-text-xs cil-text-gray-500 cil-font-mono", children: [
          a.resendCodeIn,
          /* @__PURE__ */ e.jsx("span", { className: "cil-font-bold", children: ke(ie) })
        ] }) : /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: Te,
            disabled: O || !C,
            className: "cil-text-sm cil-font-medium cil-hover:underline",
            style: je,
            children: O ? a.loading : a.resendCode
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: () => p && p("login"),
            className: "cil-w-full cil-text-sm cil-font-medium cil-hover:underline cil-text-center cil-text-gray-500",
            children: a.backToLogin
          }
        )
      ] })
    ] })
  ] });
}
function xl({
  apiBaseUrl: l,
  user: f = {},
  primaryColor: x = "#3b82f6",
  backgroundColor: h = "#ffffff",
  onSuccess: d,
  onError: o,
  onNavigate: p,
  apiToken: N,
  // X-API-KEY for headers
  authToken: m,
  // User session token
  email: C,
  // User email
  lang: c = "en",
  texts: k = {}
}) {
  const r = { ...oe[c], ...k }, { isAuthorized: t } = ve(N), a = x, w = h, { changePassword: u } = xe(l, N), [n, y] = b({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }), [v, S] = b(!1), [T, j] = b(!1), [O, $] = b(""), [W, z] = b(""), [E, D] = b(!1), [L, B] = b(!1), [P, I] = b(!1);
  if (!t)
    return /* @__PURE__ */ e.jsx(Ce, { lang: c });
  const Y = async (R) => {
    if (R.preventDefault(), $(""), z(""), n.newPassword !== n.confirmPassword) {
      const V = r.passwordsDontMatch;
      $(V), o && o(V);
      return;
    }
    S(!0);
    try {
      const V = await u({
        email: C || f.email,
        old_password: n.oldPassword,
        new_password: n.newPassword,
        token: m
        // Now using user session token, not api key
      });
      if (V.success)
        j(!0), z(r.passwordChanged), d && d(V), y({ oldPassword: "", newPassword: "", confirmPassword: "" }), setTimeout(() => z(""), 5e3);
      else {
        const H = V.message || V.error || r.unknownError;
        $(H), o && o(H);
      }
    } catch (V) {
      console.error("⚠️ ChangePassword Error:", V);
      let H = V.message;
      V.isConnectionError ? H = r.connectionError : V.status >= 500 ? H = r.serverError : (!H || H === "Error " + V.status) && (H = r.unknownError), $(H), o && o(H);
    } finally {
      S(!1);
    }
  }, se = (R, V) => {
    y((H) => ({ ...H, [R]: V })), O && $("");
  }, ne = {
    backgroundColor: a,
    color: "#ffffff"
  }, J = {
    backgroundColor: w
  }, fe = {
    color: a
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border", style: J, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6 cil-text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: r.changePassword }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: r.changePasswordSubtitle })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: Y, className: "cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(he, { message: O }),
      /* @__PURE__ */ e.jsx(Me, { message: W }),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium", children: r.oldPassword }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: E ? "text" : "password",
              value: n.oldPassword,
              onChange: (R) => se("oldPassword", R.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => D(!E),
              children: E ? /* @__PURE__ */ e.jsx(pe, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
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
              type: L ? "text" : "password",
              value: n.newPassword,
              onChange: (R) => se("newPassword", R.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => B(!L),
              children: L ? /* @__PURE__ */ e.jsx(pe, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
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
              type: P ? "text" : "password",
              value: n.confirmPassword,
              onChange: (R) => se("confirmPassword", R.target.value),
              required: !0,
              className: "cil-flex cil-h-10 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-sm cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-pr-10"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "cil-absolute cil-right-3 cil-top-1/2 cil--translate-y-1/2 cil-text-gray-500 cil-hover:text-gray-700",
              onClick: () => I(!P),
              children: P ? /* @__PURE__ */ e.jsx(pe, { size: 18 }) : /* @__PURE__ */ e.jsx(ye, { size: 18 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          className: "cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed",
          style: ne,
          disabled: v,
          children: v ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2", children: [
            /* @__PURE__ */ e.jsx(de, { size: "sm", color: "#ffffff" }),
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
function gl({
  apiBaseUrl: l,
  token: f,
  user: x = {},
  primaryColor: h = "#3b82f6",
  backgroundColor: d = "#ffffff",
  onSuccess: o,
  onError: p,
  onNavigate: N,
  lang: m = "en",
  apiToken: C,
  texts: c = {}
}) {
  const k = { ...oe[m], ...c }, { isAuthorized: r } = ve(C), t = h, a = d, { post: w } = xe(l, C), [u, n] = b(f ? "verifying" : "idle"), [y, v] = b(""), [S, T] = b("");
  if (ue(() => {
    f && u === "verifying" && j();
  }, [f]), !r)
    return /* @__PURE__ */ e.jsx(Ce, { lang: m });
  const j = async () => {
    T("");
    try {
      const W = await w("/verify-email", { token: f });
      if (W.success)
        n("success"), v(W.message || k.verifySuccess), o && o(W);
      else {
        n("error");
        const z = W.message || W.error || k.verifyError;
        v(z), T(z), p && p(z);
      }
    } catch (W) {
      console.error("⚠️ Verification Error:", W), n("error");
      const z = k.connectionError;
      v(z), T(z), p && p(z);
    }
  }, O = {
    backgroundColor: t,
    color: "#ffffff"
  }, $ = {
    backgroundColor: a
  };
  return f ? /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: $, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: u === "verifying" ? k.verifying : k.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: u === "verifying" ? k.verifyingSubtitle : y })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-py-6 cil-flex cil-flex-col cil-items-center", children: [
      /* @__PURE__ */ e.jsx(he, { message: S }),
      u === "verifying" && /* @__PURE__ */ e.jsx(de, { size: "xl", color: t }),
      u === "success" && /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
      u === "error" && /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-red-50 cil-flex cil-items-center cil-justify-center cil-text-red-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })
    ] }),
    u !== "verifying" && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => N && N("login"),
        className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
        style: O,
        children: k.backToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: $, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: k.emailVerification }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: k.checkEmail })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-6 cil-py-4 cil-flex cil-flex-col cil-items-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center cil-text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500 cil-max-w-sm", children: k.verifyEmailMessage }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => N && N("login"),
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-border cil-border-gray-200 cil-hover:bg-gray-50",
          children: k.backToLogin
        }
      )
    ] })
  ] });
}
function hl({
  apiBaseUrl: l,
  user: f = {},
  primaryColor: x = "#3b82f6",
  backgroundColor: h = "#ffffff",
  onNavigate: d,
  lang: o = "en",
  userEmail: p,
  initialMessage: N,
  initialWaitSeconds: m = 0,
  onSuccess: C,
  onError: c,
  apiToken: k,
  texts: r = {}
}) {
  const t = { ...oe[o], ...r }, { isAuthorized: a } = ve(k), w = x, u = h, { post: n } = xe(l, k), [y, v] = b(!1), [S, T] = b(!1), [j, O] = b(""), [$, W] = b(N || t.waitingConfirmationMsg), [z, E] = b(m), [D, L] = b(!1), [B, P] = b(!1), [I, Y] = b(""), [se, ne] = b(""), J = Pe(null);
  if (ue(() => (z > 0 && (J.current = setInterval(() => {
    E((G) => G <= 1 ? (clearInterval(J.current), 0) : G - 1);
  }, 1e3)), () => clearInterval(J.current)), [z]), ue(() => {
    z === 0 && (m > 0 || D) && (W(t.waitingConfirmationMsg), L(!1));
  }, [z, m, t.waitingConfirmationMsg]), !a)
    return /* @__PURE__ */ e.jsx(Ce, { lang: o });
  const fe = (G) => {
    const Q = Math.floor(G / 60), le = G % 60;
    return `${Q.toString().padStart(2, "0")}:${le.toString().padStart(2, "0")}`;
  }, R = async (G) => {
    if (G.preventDefault(), !!j) {
      T(!0), Y("");
      try {
        const Q = await n("/verify-email", { token: j });
        if (Q.success)
          P(!0), C && C(Q);
        else {
          const le = Q.message || Q.error || t.verificationFailed;
          Y(le), c && c(le);
        }
      } catch (Q) {
        console.error("⚠️ Manual Verification Error:", Q);
        const le = t.connectionError;
        Y(le), c && c(le);
      } finally {
        T(!1);
      }
    }
  }, V = async () => {
    if (!(!p || z > 0)) {
      v(!0), L(!1), Y(""), ne("");
      try {
        const G = await n("/resend-confirmation", { email: p });
        if (G.success) {
          L(!0);
          const Q = G.message || t.resendSent;
          ne(Q), G.wait_seconds && E(G.wait_seconds);
        } else {
          const Q = G.message || G.error || t.connectionError;
          Y(Q), G.wait_seconds && E(G.wait_seconds), c && c(Q);
        }
      } catch (G) {
        console.error("⚠️ Resend Error:", G);
        const Q = t.connectionError;
        Y(Q), c && c(Q);
      } finally {
        v(!1);
      }
    }
  }, H = {
    backgroundColor: w,
    color: "#ffffff"
  }, ie = {
    backgroundColor: u
  }, me = {
    color: w
  };
  return B ? /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: ie, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1 cil-mb-6", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold", children: t.verifySuccess }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-500", children: t.verifySuccess })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "cil-py-6 cil-flex cil-justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-green-50 cil-flex cil-items-center cil-justify-center cil-text-green-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }) }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => d && d("login"),
        className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors",
        style: H,
        children: t.goToLogin
      }
    )
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-md cil-mx-auto cil-p-6 cil-rounded-lg cil-shadow-lg cil-border cil-text-center", style: ie, children: [
    /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-items-center cil-justify-center cil-mb-6", children: S ? /* @__PURE__ */ e.jsx(de, { size: "lg", color: w }) : /* @__PURE__ */ e.jsx("div", { className: "cil-w-16 cil-h-16 cil-rounded-full cil-bg-blue-50 cil-flex cil-items-center cil-justify-center cil-text-blue-500", children: /* @__PURE__ */ e.jsx("svg", { className: "cil-w-8 cil-h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }) }),
    /* @__PURE__ */ e.jsx("h2", { className: "cil-text-2xl cil-font-semibold cil-mb-2", children: t.waitingConfirmation }),
    /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-mb-6 cil-text-gray-500", children: $ }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-mb-4", children: [
      /* @__PURE__ */ e.jsx(Me, { message: se }),
      /* @__PURE__ */ e.jsx(he, { message: I })
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: R, className: "cil-mb-8 cil-space-y-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "cil-text-sm cil-font-medium cil-text-gray-700 cil-block cil-text-left cil-px-1", children: t.enterCode }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: "XXXXXX",
            className: "cil-flex cil-h-12 cil-w-full cil-rounded-md cil-border cil-border-gray-200 cil-bg-white cil-px-3 cil-py-2 cil-text-center cil-text-lg cil-font-mono cil-tracking-widest cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
            value: j,
            onChange: (G) => O(G.target.value),
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "submit",
          disabled: S || !j,
          className: "cil-w-full cil-h-11 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-all cil-duration-200 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-disabled:opacity-70 cil-disabled:cursor-not-allowed",
          style: H,
          children: S ? /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-2", children: [
            /* @__PURE__ */ e.jsx(de, { size: "sm", color: "#ffffff" }),
            /* @__PURE__ */ e.jsx("span", { children: t.loading })
          ] }) : t.verifyButton
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "cil-border-t cil-pt-6 cil-space-y-3", children: [
      z > 0 ? /* @__PURE__ */ e.jsxs("div", { className: "cil-p-2 cil-rounded cil-bg-gray-50 cil-text-gray-700 cil-text-xs cil-font-mono cil-border cil-inline-block", children: [
        t.resendCodeIn,
        /* @__PURE__ */ e.jsx("span", { className: "cil-font-bold", children: fe(z) })
      ] }) : /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: V,
          disabled: y || !p,
          className: "cil-text-sm cil-font-medium cil-hover:underline cil-flex cil-items-center cil-justify-center cil-gap-2 cil-mx-auto",
          style: me,
          children: y ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(de, { size: "xs", color: w }),
            t.loading
          ] }) : t.resendEmail
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => d && d("login"),
          className: "cil-w-full cil-h-10 cil-inline-flex cil-items-center cil-justify-center cil-rounded-md cil-text-sm cil-font-medium cil-transition-colors cil-border cil-border-gray-200 cil-hover:bg-gray-50",
          children: t.goToLogin
        }
      )
    ] })
  ] });
}
function il(l, f, x, h) {
  const { getMe: d } = xe(l, f), [o, p] = b({
    user: null,
    isLoading: !0,
    error: null
  });
  return ue(() => {
    if (!x || !h) {
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
        const m = await d(h, x);
        if (m.success) {
          const C = m.user ? { ...m.user, ...Object.fromEntries(Object.entries(m).filter(([c]) => c !== "user" && c !== "success")) } : m;
          p({
            user: C,
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
  }, [x, h, l, f]), o;
}
function ll(l) {
  return mi({ attr: { viewBox: "0 0 24 24", strokeWidth: "2", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" } }, { tag: "path", attr: { d: "M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }, { tag: "path", attr: { d: "M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" } }] })(l);
}
const ni = [
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
function cl({
  apps: l = [],
  user: f = {},
  customLabels: x = {},
  backgroundColor: h = "#ffffff",
  primaryColor: d = "#3b82f6",
  apiBaseUrl: o,
  apiToken: p,
  onAppClick: N,
  lang: m = "en",
  texts: C = {}
}) {
  const [c, k] = b(!1), r = Pe(null), t = { ...oe[m], ...C };
  ue(() => {
    const n = (y) => {
      r.current && !r.current.contains(y.target) && k(!1);
    };
    return c && document.addEventListener("mousedown", n), () => document.removeEventListener("mousedown", n);
  }, [c]);
  const a = (n) => n ? n.charAt(0).toUpperCase() : "?", w = (n) => {
    let y = 0;
    for (let v = 0; v < n.length; v++)
      y = n.charCodeAt(v) + ((y << 5) - y);
    return ni[Math.abs(y) % ni.length];
  }, u = (n) => {
    N && N(n), k(!1), n.publicUrl && window.open(n.publicUrl, "_blank");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-inline-block cil-text-left", ref: r, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => k(!c),
        className: "cil-flex cil-items-center cil-justify-center cil-p-2 cil-rounded-full cil-transition-all cil-duration-200 cil-hover:bg-white/10 cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2",
        style: {
          color: "#ffffff"
        },
        "aria-label": "App Grid",
        children: /* @__PURE__ */ e.jsx(ll, { className: "cil-w-6 cil-h-6" })
      }
    ),
    c && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "cil-absolute cil-right-0 cil-mt-1 cil-w-80 cil-origin-top-right cil-rounded-md cil-bg-white cil-shadow-2xl cil-border cil-border-gray-100 cil-z-50 cil-p-4",
        children: /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-3 cil-gap-3", children: [
          l.map((n) => /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => u(n),
              className: "cil-group cil-relative cil-flex cil-flex-col cil-items-center cil-p-2 cil-rounded-md cil-hover:bg-gray-50 cil-transition-all cil-duration-200",
              children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "cil-w-14 cil-h-14 cil-flex cil-items-center cil-justify-center cil-rounded-md cil-shadow-sm cil-text-white cil-text-2xl cil-font-bold cil-mb-2 cil-group-hover:shadow-lg cil-group-hover:scale-105 cil-transition-all cil-duration-300",
                    style: {
                      backgroundColor: w(n.appKey),
                      filter: "brightness(1.1) grayscale(0.2)"
                      // Adjusted for white icons feeling
                    },
                    children: /* @__PURE__ */ e.jsx("span", { className: "cil-filter cil-brightness-0 cil-invert", children: a(n.appKey) })
                  }
                ),
                /* @__PURE__ */ e.jsx("span", { className: "cil-text-[10px] cil-font-bold cil-text-gray-700 cil-uppercase cil-tracking-wider cil-text-center cil-truncate cil-w-full cil-px-1", children: x[n.appKey] ? x[n.appKey] : n.appKey.replace(/_/g, " ").length > 9 ? `${n.appKey.replace(/_/g, " ").substring(0, 9)}...` : n.appKey.replace(/_/g, " ") }),
                /* @__PURE__ */ e.jsxs("div", { className: "cil-absolute cil--bottom-10 cil-left-1/2 cil--translate-x-1/2 cil-px-2 cil-py-1 cil-bg-gray-900 cil-text-white cil-text-[10px] cil-rounded-md cil-opacity-0 cil-group-hover:opacity-100 cil-transition-opacity cil-pointer-events-none cil-whitespace-nowrap cil-z-[60] cil-shadow-xl", children: [
                  n.appName,
                  /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil--top-1 cil-left-1/2 cil--translate-x-1/2 cil-border-x-4 cil-border-x-transparent cil-border-b-4 cil-border-b-gray-900" })
                ] })
              ]
            },
            n.appKey
          )),
          l.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "cil-col-span-3 cil-py-8 cil-text-center cil-text-gray-400 cil-text-sm", children: t.noApps })
        ] })
      }
    )
  ] });
}
function sl(l) {
  if (!l || typeof l != "string") return !1;
  try {
    const f = new URL(l);
    return f.protocol === "http:" || f.protocol === "https:";
  } catch {
    return !1;
  }
}
function gi(l) {
  if (!l) return null;
  const f = [
    l.profileImageURL,
    l.profile_image_url,
    l.profile_image,
    l.profileImage,
    l.avatar,
    l.avatarUrl,
    l.avatar_url
  ];
  for (const x of f)
    if (sl(x))
      return x;
  return null;
}
function rl({
  user: l = {},
  backgroundColor: f = "#ffffff",
  primaryColor: x = "#3b82f6",
  onLogout: h,
  onChangePassword: d,
  onProfileClick: o,
  // Added onProfileClick
  extraItems: p = [],
  // Array of { icon: ReactNode, label: string, onClick: function }
  lang: N = "en",
  apiBaseUrl: m,
  apiToken: C,
  texts: c = {}
}) {
  var T;
  const [k, r] = b(!1), t = Pe(null), a = { ...oe[N], ...c }, w = x, u = f;
  ue(() => {
    const j = (O) => {
      t.current && !t.current.contains(O.target) && r(!1);
    };
    return k && document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
  }, [k]);
  const n = gi(l), y = () => {
    const j = l["Full Name"] || l.fullName || l.full_name || l.firstName || l.first_name;
    return j ? j.trim().charAt(0).toUpperCase() : l.email ? l.email.charAt(0).toUpperCase() : "U";
  }, v = l["Full Name"] || l.fullName || l.full_name || l.firstName || l.first_name || ((T = l.email) == null ? void 0 : T.split("@")[0]) || "User", S = ({ icon: j, label: O, onClick: $, className: W = "", color: z = "cil-text-gray-600", hoverColor: E }) => {
    const [D, L] = b(!1), B = D ? { backgroundColor: E || `${w}10` } : {};
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => {
          r(!1), $ && $();
        },
        onMouseEnter: () => L(!0),
        onMouseLeave: () => L(!1),
        style: B,
        className: `cil-w-full cil-flex cil-items-center cil-gap-3 cil-px-4 cil-py-3 cil-text-sm cil-transition-colors cil-group ${z} ${W}`,
        children: [
          j && /* @__PURE__ */ e.jsx(j, { className: "cil-w-5 cil-h-5 cil-transition-transform cil-group-hover:scale-105" }),
          /* @__PURE__ */ e.jsx("span", { className: "cil-flex-1 cil-text-left cil-font-medium", children: O })
        ]
      }
    );
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-inline-block cil-text-left", ref: t, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => r(!k),
        className: "cil-flex cil-items-center cil-justify-center cil-w-10 cil-h-10 cil-rounded-full cil-border-2 cil-transition-all cil-duration-200 cil-hover:shadow-md cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-offset-2 cil-overflow-hidden",
        style: {
          borderColor: w,
          backgroundColor: u,
          color: w
        },
        children: [
          n ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: n,
              alt: v,
              className: "cil-w-full cil-h-full cil-object-cover",
              onError: (j) => {
                j.target.style.display = "none", j.target.nextSibling.style.display = "cil-block";
              }
            }
          ) : null,
          /* @__PURE__ */ e.jsx("span", { className: `${n ? "cil-hidden" : "cil-block"} cil-text-sm cil-font-bold`, children: y() })
        ]
      }
    ),
    k && /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "cil-absolute cil-right-0 cil-mt-1 cil-w-64 cil-origin-top-right cil-rounded-md cil-bg-white cil-shadow-2xl cil-border cil-border-gray-100 cil-z-50 cil-overflow-hidden",
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "cil-px-4 cil-py-3 cil-border-b cil-border-gray-100 cil-bg-gray-50/50", children: [
            /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-font-bold cil-text-gray-800 cil-truncate cil-mb-0.5", children: v }),
            /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-font-medium cil-text-gray-500 cil-truncate", children: l.email })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-py-1", children: [
            /* @__PURE__ */ e.jsx(
              S,
              {
                icon: ai,
                label: a.profile,
                onClick: o
              }
            ),
            /* @__PURE__ */ e.jsx(
              S,
              {
                icon: $i,
                label: a.changePassword,
                onClick: d
              }
            ),
            p.map((j, O) => /* @__PURE__ */ e.jsx(
              S,
              {
                icon: j.icon,
                label: j.label,
                onClick: j.onClick
              },
              `extra-${O}`
            )),
            /* @__PURE__ */ e.jsx("div", { className: "cil-my-1 cil-border-t cil-border-gray-100" }),
            /* @__PURE__ */ e.jsx(
              S,
              {
                icon: di,
                label: a.logoutThisSession,
                onClick: h,
                color: "cil-text-gray-700",
                hoverColor: "#fff1f2"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function tl({
  lang: l = "en",
  onLanguageChange: f,
  variant: x = "header",
  // 'header' or 'default'
  primaryColor: h = "#3b82f6"
}) {
  const [d, o] = b(!1), p = Pe(null);
  ue(() => {
    const C = (c) => {
      p.current && !p.current.contains(c.target) && o(!1);
    };
    return d && document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [d]);
  const N = [
    { code: "en", label: "English", flag: "US" },
    { code: "es", label: "Español", flag: "ES" }
  ];
  N.find((C) => C.code === l) || N[0];
  const m = x === "header" ? { color: "#ffffff" } : { color: h };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-inline-block cil-text-left", ref: p, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: () => o(!d),
        className: "cil-flex cil-items-center cil-justify-center cil-p-2 cil-rounded-full cil-transition-all cil-duration-200 cil-hover:bg-white/10 cil-focus:outline-none",
        style: m,
        "aria-label": "Change Language",
        children: /* @__PURE__ */ e.jsx(zi, { className: "cil-w-6 cil-h-6" })
      }
    ),
    d && /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil-right-0 cil-mt-2 cil-w-48 cil-origin-top-right cil-rounded-xl cil-bg-white cil-shadow-lg cil-border cil-border-gray-200 cil-z-[100] cil-overflow-hidden", children: /* @__PURE__ */ e.jsx("div", { className: "cil-py-1", children: N.map((C) => /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => {
          f && f(C.code), o(!1);
        },
        className: `cil-w-full cil-flex cil-items-center cil-gap-3 cil-px-4 cil-py-3 cil-text-sm cil-transition-colors ${l === C.code ? "cil-bg-green-50 cil-text-green-600" : "cil-text-gray-700 cil-hover:bg-gray-50"}`,
        children: [
          /* @__PURE__ */ e.jsx("span", { className: "cil-w-6 cil-text-[10px] cil-font-bold cil-text-gray-400 cil-uppercase", children: C.flag }),
          /* @__PURE__ */ e.jsx("span", { className: "cil-flex-1 cil-text-left cil-font-medium", children: C.label }),
          l === C.code && /* @__PURE__ */ e.jsx(Fi, { className: "cil-w-4 cil-h-4" })
        ]
      },
      C.code
    )) }) })
  ] });
}
function pl({
  logo: l,
  customers: f = [],
  selectedCustomers: x = [],
  onCustomerChange: h,
  onSearch: d,
  theme: o = "light",
  onTheme: p,
  notificationsEnabled: N = !1,
  onNotification: m,
  notificationData: C = [],
  showSettings: c = !1,
  onSettings: k,
  user: r,
  apps: t,
  primaryColor: a = "#10b981",
  // Por defecto el verde de la imagen
  lang: w = "en",
  onLanguageChange: u,
  navItems: n = [],
  // Array of { label, onClick, active }
  extraItems: y = [],
  // Array of components or items to render
  apiBaseUrl: v,
  apiToken: S
}) {
  const [T, j] = b(!1), O = Pe(null);
  ue(() => {
    const E = (D) => {
      O.current && !O.current.contains(D.target) && j(!1);
    };
    return T && document.addEventListener("mousedown", E), () => document.removeEventListener("mousedown", E);
  }, [T]);
  const $ = {
    backgroundColor: a,
    color: "#ffffff"
  }, W = (E) => {
    if (!h) return;
    const D = x.includes(E);
    let L;
    D ? L = x.filter((B) => B !== E) : L = [...x, E], h(L);
  }, z = () => x.length === 0 ? "All Customers" : x.length === 1 ? x[0] : `${x.length} Customers`;
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: "cil-w-full cil-h-16 cil-flex cil-items-center cil-px-6 cil-shadow-md cil-relative cil-z-[1000] cil-gap-4",
      style: $,
      children: [
        /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-items-center cil-gap-2 cil-min-w-fit", children: l ? typeof l == "string" ? /* @__PURE__ */ e.jsx("img", { src: l, alt: "Logo", className: "cil-h-14" }) : l : /* @__PURE__ */ e.jsx("img", { src: "/src/public/prism-logo-white.png", alt: "The Prism Group", className: "cil-h-14" }) }),
        n && n.length > 0 && /* @__PURE__ */ e.jsx("nav", { className: "cil-flex cil-items-center cil-gap-6 cil-ml-4 cil-min-w-fit", children: n.map((E, D) => /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: E.onClick,
            className: `cil-text-sm cil-transition-colors cil-hover:text-white ${E.active ? "cil-text-white cil-font-bold" : "cil-text-white/90"}`,
            children: E.label
          },
          `nav-${D}`
        )) }),
        h && f.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "cil-relative", ref: O, children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => j(!T),
              className: "cil-flex cil-items-center cil-gap-2 cil-px-3 cil-py-1.5 cil-rounded-lg cil-hover:bg-white/10 cil-transition-colors cil-text-sm cil-font-medium",
              children: [
                /* @__PURE__ */ e.jsx("span", { children: z() }),
                /* @__PURE__ */ e.jsx(Vi, { className: `cil-w-6 cil-h-6 cil-transition-transform ${T ? "cil-rotate-180" : ""}` })
              ]
            }
          ),
          T && /* @__PURE__ */ e.jsx("div", { className: "cil-absolute cil-left-0 cil-mt-2 cil-w-64 cil-bg-white cil-rounded-xl cil-shadow-xl cil-border cil-border-gray-200 cil-p-2 cil-text-gray-800", children: /* @__PURE__ */ e.jsxs("div", { className: "cil-max-h-60 cil-overflow-y-auto", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => h && h([]),
                className: `cil-w-full cil-text-left cil-px-3 cil-py-2 cil-rounded-lg cil-text-sm cil-mb-1 ${x.length === 0 ? "cil-bg-gray-100 cil-font-bold" : "cil-hover:bg-gray-50"}`,
                children: "All Customers"
              }
            ),
            f.map((E, D) => /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: () => W(E),
                className: `cil-w-full cil-text-left cil-px-3 cil-py-2 cil-rounded-lg cil-text-sm cil-flex cil-items-center cil-gap-2 ${x.includes(E) ? "cil-bg-gray-100 cil-font-bold" : "cil-hover:bg-gray-50"}`,
                children: [
                  /* @__PURE__ */ e.jsx("div", { className: `cil-w-4 cil-h-4 cil-rounded cil-border cil-flex cil-items-center cil-justify-center ${x.includes(E) ? "cil-bg-green-500 cil-border-green-500" : "cil-border-gray-300"}`, children: x.includes(E) && /* @__PURE__ */ e.jsx(nl, { className: "cil-w-3 cil-h-3 cil-text-white" }) }),
                  E
                ]
              },
              D
            ))
          ] }) })
        ] }),
        d && /* @__PURE__ */ e.jsx("div", { className: "cil-flex-1 cil-flex cil-justify-center", children: /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-w-full cil-max-w-md", children: [
          /* @__PURE__ */ e.jsx(Ui, { className: "cil-absolute cil-left-3 cil-top-1/2 cil--translate-y-1/2 cil-w-6 cil-h-6 cil-text-white/70" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              placeholder: "Type / to search",
              onChange: (E) => d && d(E.target.value),
              className: "cil-w-full cil-bg-white/20 cil-border-none cil-rounded-lg cil-py-2 cil-pl-12 cil-pr-4 cil-text-sm cil-placeholder-white/70 cil-text-white cil-focus:outline-none cil-focus:ring-2 cil-focus:ring-white/30 cil-transition-all"
            }
          )
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-1 cil-ml-auto", children: [
          /* @__PURE__ */ e.jsx(
            cl,
            {
              apps: t,
              user: r,
              primaryColor: "#ffffff",
              backgroundColor: "#ffffff",
              lang: w,
              apiBaseUrl: v,
              apiToken: S
            }
          ),
          N && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => m && m(),
              className: "cil-p-2 cil-rounded-full cil-hover:bg-white/10 cil-transition-colors cil-relative",
              children: [
                /* @__PURE__ */ e.jsx(Wi, { className: "cil-w-6 cil-h-6" }),
                C.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "cil-absolute cil-top-1 cil-right-1 cil-w-2 cil-h-2 cil-bg-red-500 cil-rounded-full" })
              ]
            }
          ),
          y.map((E, D) => /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-items-center", children: E }, `header-extra-${D}`)),
          /* @__PURE__ */ e.jsx(
            tl,
            {
              lang: w,
              onLanguageChange: u,
              variant: "header"
            }
          ),
          p && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => p && p(),
              className: "cil-p-2 cil-rounded-full cil-hover:bg-white/10 cil-transition-colors",
              children: o === "dark" ? /* @__PURE__ */ e.jsx(Bi, { className: "cil-w-6 cil-h-6" }) : /* @__PURE__ */ e.jsx(Hi, { className: "cil-w-6 cil-h-6" })
            }
          ),
          k && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => k(),
              className: "cil-p-2 cil-rounded-full cil-hover:bg-white/10 cil-transition-colors",
              children: /* @__PURE__ */ e.jsx(Ue, { className: "cil-w-6 cil-h-6" })
            }
          ),
          r && /* @__PURE__ */ e.jsx(
            rl,
            {
              user: r,
              primaryColor: a,
              backgroundColor: "#ffffff",
              lang: w,
              apiBaseUrl: v,
              apiToken: S
            }
          )
        ] })
      ]
    }
  );
}
function nl({ className: l }) {
  return /* @__PURE__ */ e.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: l,
      children: /* @__PURE__ */ e.jsx("polyline", { points: "20 6 9 17 4 12" })
    }
  );
}
function yl({
  apiBaseUrl: l,
  apiToken: f,
  authToken: x,
  userEmail: h,
  primaryColor: d = "#3b82f6",
  backgroundColor: o = "#ffffff",
  onClose: p,
  onNavigate: N,
  onError: m,
  onSuccess: C,
  lang: c = "en",
  texts: k = {}
}) {
  const r = { ...oe[c], ...k }, { user: t, isLoading: a, error: w } = il(l, f, x, h), u = d, n = o, { post: y } = xe(l, f), [v, S] = b([]), [T, j] = b(!1), [O, $] = b(""), [W, z] = b(""), [E, D] = b(!1);
  ue(() => {
    t != null && t.active_sessions ? S(t.active_sessions) : t != null && t.sessions && S(t.sessions);
  }, [t]);
  const L = (R) => R ? R.includes("Mozilla/") ? R.includes("iPhone") ? "iPhone" : R.includes("Android") ? "Android Device" : R.includes("Windows") ? "Windows PC" : R.includes("Macintosh") ? "Mac" : R.includes("iPad") ? "iPad" : "Web Browser" : R : r.deviceName, B = (R) => {
    if (!R) return /* @__PURE__ */ e.jsx(ci, { className: "w-5 h-5" });
    const V = R.toLowerCase();
    return V.includes("iphone") || V.includes("android") ? /* @__PURE__ */ e.jsx(Ki, { className: "w-5 h-5" }) : V.includes("ipad") || V.includes("tablet") ? /* @__PURE__ */ e.jsx(Xi, { className: "w-5 h-5" }) : /* @__PURE__ */ e.jsx(ci, { className: "w-5 h-5" });
  };
  if (a)
    return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-5xl cil-mx-auto cil-animate-pulse", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "cil-relative cil-rounded-t-[2.5rem] cil-p-8 md:cil-p-12 cil-min-h-[300px] cil-flex cil-items-center",
          style: { background: `linear-gradient(135deg, ${d}15 0%, ${d}05 100%)` },
          children: /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-flex-col md:cil-flex-row cil-items-center md:cil-items-start cil-gap-6 cil-w-full", children: [
            /* @__PURE__ */ e.jsx("div", { className: "cil-w-32 cil-h-32 md:cil-w-40 md:cil-h-40 cil-rounded-3xl cil-bg-gray-200" }),
            /* @__PURE__ */ e.jsxs("div", { className: "cil-flex-1 cil-space-y-4 cil-w-full", children: [
              /* @__PURE__ */ e.jsx("div", { className: "cil-h-12 cil-w-2/3 cil-bg-gray-200 cil-rounded-xl" }),
              /* @__PURE__ */ e.jsx("div", { className: "cil-h-6 cil-w-1/3 cil-bg-gray-200 cil-rounded-lg" }),
              /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-gap-2", children: [
                /* @__PURE__ */ e.jsx("div", { className: "cil-h-8 cil-w-20 cil-bg-gray-200 cil-rounded-full" }),
                /* @__PURE__ */ e.jsx("div", { className: "cil-h-8 cil-w-20 cil-bg-gray-200 cil-rounded-full" })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "cil-rounded-b-[2.5rem] cil-shadow-2xl cil-border cil-p-8 md:cil-p-12", style: { backgroundColor: o }, children: [
        /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-1 lg:cil-grid-cols-2 cil-gap-10", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-8", children: [
            /* @__PURE__ */ e.jsx("div", { className: "cil-h-8 cil-w-48 cil-bg-gray-100 cil-rounded-lg" }),
            /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
              /* @__PURE__ */ e.jsx("div", { className: "cil-h-20 cil-w-full cil-bg-gray-50 cil-rounded-2xl" }),
              /* @__PURE__ */ e.jsx("div", { className: "cil-h-20 cil-w-full cil-bg-gray-50 cil-rounded-2xl" })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-8", children: [
            /* @__PURE__ */ e.jsx("div", { className: "cil-h-8 cil-w-48 cil-bg-gray-100 cil-rounded-lg" }),
            /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-3", children: [
              /* @__PURE__ */ e.jsx("div", { className: "cil-h-24 cil-w-full cil-bg-gray-50 cil-rounded-2xl" }),
              /* @__PURE__ */ e.jsx("div", { className: "cil-h-24 cil-w-full cil-bg-gray-50 cil-rounded-2xl" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "cil-absolute cil-inset-0 cil-flex cil-flex-col cil-items-center cil-justify-center cil-pointer-events-none", children: [
          /* @__PURE__ */ e.jsx(de, { size: "xl", color: d }),
          /* @__PURE__ */ e.jsx("p", { className: "cil-mt-4 cil-text-gray-400 cil-font-medium", children: r.loadingProfile })
        ] })
      ] })
    ] });
  if (w || !t)
    return /* @__PURE__ */ e.jsx("div", { className: "cil-w-full cil-max-w-4xl cil-mx-auto cil-p-8", children: /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-flex-col cil-items-center cil-justify-center cil-py-20 cil-space-y-4", children: [
      /* @__PURE__ */ e.jsx(oi, { className: "cil-w-16 cil-h-16 cil-text-red-500" }),
      /* @__PURE__ */ e.jsx("p", { className: "cil-text-lg cil-font-semibold cil-text-red-600", children: w || r.failedLoadProfile }),
      p && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: p,
          className: "cil-mt-4 cil-px-6 cil-py-2 cil-rounded-xl cil-font-semibold cil-text-white cil-transition-all cil-hover:brightness-110",
          style: { backgroundColor: d },
          children: r.close
        }
      )
    ] }) });
  const P = t["Full Name"] || t.fullName || t.full_name || `${t.firstName || ""} ${t.lastName || ""}`.trim() || "User", I = t.Roles || [], Y = t.permissions || [], se = t.biography || t.bio || "", ne = gi(t), J = () => P.charAt(0).toUpperCase(), fe = async (R = !1, V = []) => {
    if (!x) {
      const H = r.noSessions;
      $(H);
      return;
    }
    j(!0), $(""), z("");
    try {
      const H = await y("/logout_sessions", {
        email: t.email || h || "",
        all_sessions: R,
        session_ids: V
      }, { token: x });
      if (H.success)
        S(R ? [] : (ie) => ie.filter((me) => !V.includes(me._id))), z(r.logoutSuccess), C && C(H);
      else {
        const ie = H.message || H.error || "Logout failed";
        $(ie), m && m(ie);
      }
    } catch (H) {
      console.error("⚠️ Logout Sessions Error:", H), $(r.connectionError);
    } finally {
      j(!1);
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "cil-w-full cil-max-w-5xl cil-mx-auto", children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "cil-relative cil-rounded-t-[2.5rem] cil-p-8 md:cil-p-12 cil-overflow-hidden",
        style: {
          background: `linear-gradient(135deg, ${u}15 0%, ${u}05 100%)`
        },
        children: [
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "cil-absolute cil-top-0 cil-right-0 cil-w-64 cil-h-64 cil-opacity-10 cil-blur-3xl cil-rounded-full",
              style: { backgroundColor: u }
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "cil-absolute cil-bottom-0 cil-left-0 cil-w-48 cil-h-48 cil-opacity-10 cil-blur-3xl cil-rounded-full",
              style: { backgroundColor: u }
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-flex cil-flex-col md:cil-flex-row cil-items-center md:cil-items-start cil-gap-6", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "cil-relative cil-group", children: [
              ne && !E ? /* @__PURE__ */ e.jsx("div", { className: "cil-relative", children: /* @__PURE__ */ e.jsx(
                "img",
                {
                  src: ne,
                  alt: P,
                  className: "cil-w-32 cil-h-32 md:cil-w-40 md:cil-h-40 cil-rounded-3xl cil-object-cover cil-shadow-2xl cil-ring-4 cil-ring-white cil-transition-transform cil-group-hover:scale-105",
                  onError: () => D(!0)
                }
              ) }) : /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "cil-w-32 cil-h-32 md:cil-w-40 md:cil-h-40 cil-rounded-3xl cil-flex cil-items-center cil-justify-center cil-text-5xl md:cil-text-6xl cil-font-black cil-shadow-2xl cil-ring-4 cil-ring-white cil-transition-transform cil-group-hover:scale-105",
                  style: {
                    background: `linear-gradient(135deg, ${u}30 0%, ${u}10 100%)`,
                    color: u
                  },
                  children: J()
                }
              ),
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  className: "cil-absolute cil--bottom-2 cil--right-2 cil-w-12 cil-h-12 cil-rounded-2xl cil-flex cil-items-center cil-justify-center cil-shadow-lg",
                  style: { backgroundColor: u },
                  children: /* @__PURE__ */ e.jsx(Yi, { className: "cil-w-6 cil-h-6 cil-text-white" })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "cil-flex-1 cil-text-center md:cil-text-left cil-space-y-3", children: [
              /* @__PURE__ */ e.jsx("h1", { className: "cil-text-4xl md:cil-text-5xl cil-font-black cil-text-gray-900 cil-tracking-tight", children: P }),
              /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-justify-center md:cil-justify-start cil-gap-2 cil-text-gray-600", children: [
                /* @__PURE__ */ e.jsx(qi, { className: "cil-w-5 cil-h-5" }),
                /* @__PURE__ */ e.jsx("span", { className: "cil-text-lg cil-font-medium", children: t.email || h })
              ] }),
              se && /* @__PURE__ */ e.jsxs("p", { className: "cil-text-gray-600 cil-max-w-2xl cil-leading-relaxed cil-italic", children: [
                '"',
                se,
                '"'
              ] }),
              I.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "cil-flex cil-flex-wrap cil-gap-2 cil-justify-center md:cil-justify-start cil-pt-2", children: I.map((R, V) => /* @__PURE__ */ e.jsx(
                "span",
                {
                  className: "cil-px-4 cil-py-1.5 cil-rounded-full cil-text-xs cil-font-bold cil-uppercase cil-tracking-wider cil-shadow-sm cil-transition-all cil-hover:scale-105 cil-hover:shadow-md",
                  style: {
                    backgroundColor: `${u}20`,
                    color: u,
                    border: `2px solid ${u}40`
                  },
                  children: R.replace(/_/g, " ")
                },
                V
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
        style: { backgroundColor: n },
        children: [
          /* @__PURE__ */ e.jsx(he, { message: O }),
          /* @__PURE__ */ e.jsx(Me, { message: W }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-grid cil-grid-cols-1 lg:cil-grid-cols-2 cil-gap-10", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-8", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2", style: { borderColor: `${u}20` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${u}15` }, children: /* @__PURE__ */ e.jsx(ai, { className: "cil-w-6 cil-h-6", style: { color: u } }) }),
                  /* @__PURE__ */ e.jsx("h2", { className: "cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide", children: r.personalInfo })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4 cil-pl-2", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "cil-group", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-uppercase cil-font-bold cil-text-gray-400 cil-tracking-widest cil-mb-1.5", children: r.fullNameLabel }),
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-base cil-font-bold cil-text-gray-800 cil-group-hover:text-gray-900 cil-transition-colors", children: P })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "cil-group", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-uppercase cil-font-bold cil-text-gray-400 cil-tracking-widest cil-mb-1.5", children: r.email }),
                    /* @__PURE__ */ e.jsx("p", { className: "cil-text-base cil-font-semibold cil-text-gray-700 cil-group-hover:text-gray-900 cil-transition-colors", children: t.email || h })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2", style: { borderColor: `${u}20` }, children: [
                  /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${u}15` }, children: /* @__PURE__ */ e.jsx(li, { className: "cil-w-6 cil-h-6", style: { color: u } }) }),
                  /* @__PURE__ */ e.jsx("h2", { className: "cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide", children: r.permissionsLabel })
                ] }),
                /* @__PURE__ */ e.jsx("div", { className: "cil-grid cil-grid-cols-1 cil-gap-3 cil-max-h-[400px] cil-overflow-y-auto cil-pr-2 cil-custom-scrollbar", children: Y.length > 0 ? Y.map((R, V) => {
                  var H, ie;
                  return /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      className: "cil-p-4 cil-rounded-2xl cil-border-2 cil-flex cil-flex-col cil-gap-2 cil-hover:shadow-lg cil-transition-all cil-group",
                      style: {
                        backgroundColor: `${u}05`,
                        borderColor: `${u}20`
                      },
                      children: [
                        /* @__PURE__ */ e.jsx("p", { className: "cil-text-xs cil-font-bold cil-uppercase cil-tracking-wider", style: { color: u }, children: ((H = R["Permission ID"]) == null ? void 0 : H.split(".")[0]) || "App" }),
                        /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-font-bold cil-text-gray-800", children: ((ie = R["Permission ID"]) == null ? void 0 : ie.split(".").slice(1).join(" ")) || R["Permission ID"] }),
                        /* @__PURE__ */ e.jsx(
                          "span",
                          {
                            className: "cil-mt-1 cil-w-fit cil-px-3 cil-py-1 cil-rounded-lg cil-text-xs cil-font-extrabold cil-uppercase cil-tracking-widest",
                            style: { backgroundColor: u, color: "white" },
                            children: R["Action Key"]
                          }
                        )
                      ]
                    },
                    V
                  );
                }) : /* @__PURE__ */ e.jsxs("div", { className: "cil-py-8 cil-text-center", children: [
                  /* @__PURE__ */ e.jsx(li, { className: "cil-w-12 cil-h-12 cil-mx-auto cil-mb-3 cil-text-gray-300" }),
                  /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-400 cil-italic", children: r.noPermissions })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-pb-3 cil-border-b-2", style: { borderColor: `${u}20` }, children: [
                /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${u}15` }, children: /* @__PURE__ */ e.jsx(Ue, { className: "cil-w-6 cil-h-6", style: { color: u } }) }),
                /* @__PURE__ */ e.jsx("h2", { className: "cil-text-xl cil-font-black cil-text-gray-800 cil-uppercase cil-tracking-wide", children: r.activeSessions })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "cil-space-y-3 cil-max-h-[500px] cil-overflow-y-auto cil-pr-2 cil-custom-scrollbar", children: v.length > 0 ? v.map((R) => /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "cil-p-4 cil-border-2 cil-rounded-2xl cil-flex cil-justify-between cil-items-center cil-group cil-hover:shadow-lg cil-transition-all",
                  style: {
                    backgroundColor: `${u}05`,
                    borderColor: `${u}15`
                  },
                  children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "cil-flex cil-items-center cil-gap-3 cil-flex-1", children: [
                      /* @__PURE__ */ e.jsx("div", { className: "cil-p-2 cil-rounded-xl", style: { backgroundColor: `${u}10`, color: u }, children: B(R["Device Name"]) }),
                      /* @__PURE__ */ e.jsxs("div", { className: "cil-space-y-1.5 cil-flex-1", children: [
                        /* @__PURE__ */ e.jsx("div", { className: "cil-font-black cil-text-gray-800 cil-text-sm", title: R["Device Name"], children: L(R["Device Name"]) }),
                        /* @__PURE__ */ e.jsxs("div", { className: "cil-text-xs cil-text-gray-600 cil-font-semibold cil-flex cil-items-center cil-gap-2", children: [
                          /* @__PURE__ */ e.jsx("span", { className: "cil-w-2 cil-h-2 cil-rounded-full cil-bg-green-500" }),
                          R.IP
                        ] }),
                        R["Expiration Date"] && /* @__PURE__ */ e.jsxs("div", { className: "cil-text-xs cil-text-gray-500 cil-italic", children: [
                          r.expiry,
                          ": ",
                          new Date(R["Expiration Date"]).toLocaleDateString()
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => fe(!1, [R._id]),
                        disabled: T,
                        className: "cil-p-3 cil-text-red-500 cil-hover:bg-red-50 cil-rounded-xl cil-transition-all cil-opacity-0 cil-group-hover:opacity-100 cil-focus:opacity-100 cil-hover:scale-110",
                        title: r.logoutThisSession,
                        children: /* @__PURE__ */ e.jsx(di, { className: "cil-w-5 cil-h-5" })
                      }
                    )
                  ]
                },
                R._id
              )) : /* @__PURE__ */ e.jsxs("div", { className: "cil-py-12 cil-text-center", children: [
                /* @__PURE__ */ e.jsx(Ue, { className: "cil-w-12 cil-h-12 cil-mx-auto cil-mb-3 cil-text-gray-300" }),
                /* @__PURE__ */ e.jsx("p", { className: "cil-text-sm cil-text-gray-400 cil-italic", children: r.noSessions })
              ] }) }),
              v.length > 1 && /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => fe(!0),
                  disabled: T,
                  className: "cil-w-full cil-py-3 cil-text-sm cil-uppercase cil-tracking-widest cil-font-extrabold cil-text-white cil-rounded-2xl cil-transition-all cil-active:scale-95 cil-hover:brightness-110 cil-shadow-lg",
                  style: { backgroundColor: "#ef4444" },
                  children: T ? /* @__PURE__ */ e.jsxs("span", { className: "cil-flex cil-items-center cil-justify-center cil-gap-2", children: [
                    /* @__PURE__ */ e.jsx(de, { size: "sm", color: "#ffffff" }),
                    r.loggingOut
                  ] }) : r.logoutAllSessions
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "cil-mt-12 cil-flex cil-flex-col sm:cil-flex-row cil-gap-4 cil-justify-center cil-pt-8 cil-border-t-2", style: { borderColor: `${u}10` }, children: [
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
                onClick: () => N && N("change-password"),
                className: "cil-px-10 cil-py-4 cil-rounded-2xl cil-font-bold cil-text-base cil-text-white cil-shadow-lg cil-transition-all cil-active:scale-95 cil-hover:brightness-110 cil-hover:shadow-xl",
                style: { backgroundColor: u },
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
  cl as AppGrid,
  Ce as AuthError,
  xl as ChangePassword,
  gl as EmailVerification,
  fl as ForgotPassword,
  pl as Header,
  tl as LanguageSwitcher,
  de as LoadingSpinner,
  dl as Login,
  ml as ResetPassword,
  ul as SignUp,
  xi as SocialAuthButtons,
  rl as UserMenu,
  yl as UserProfile,
  hl as WaitingConfirmation,
  gi as getValidProfileImageUrl,
  sl as isValidUrl,
  oe as translations,
  xe as useAuthApi,
  ve as useSecurity,
  il as useUserProfile
};
