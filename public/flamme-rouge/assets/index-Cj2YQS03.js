var e = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), (e = null)), t.exports);
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var t = e((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      ((this.props = e), (this.context = t), (this.refs = _), (this.updater = n || h));
    }
    ((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      ((this.props = e), (this.context = t), (this.refs = _), (this.updater = n || h));
    }
    var x = (b.prototype = new y());
    ((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0));
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      T = Object.prototype.hasOwnProperty;
    function E(e, n, r) {
      var i = r.ref;
      return { $$typeof: t, type: e, key: n, ref: i === void 0 ? null : i, props: r };
    }
    function D(e, t) {
      return E(e.type, t, e.props);
    }
    function O(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function ee(e) {
      var t = { '=': `=0`, ':': `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var te = /\/+/g;
    function ne(e, t) {
      return typeof e == `object` && e && e.key != null ? ee(`` + e.key) : t.toString(36);
    }
    function re(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` && ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` && ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function ie(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), ie(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + ne(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(te, `$&/`) + `/`),
              ie(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (O(o) &&
                (o = D(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(te, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + ne(a, u)), (c += ie(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          ((a = a.value), (s = l + ne(a, u++)), (c += ie(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return ie(re(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function ae(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        ie(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function oe(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var k =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      A = {
        map: ae,
        forEach: function (e, t, n) {
          ae(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            ae(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            ae(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!O(e))
            throw Error(`React.Children.only expected to receive a single React element child.`);
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = A),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(`The argument must be a React element, but you passed ` + e + `.`);
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !T.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return E(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            T.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return E(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = O),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: oe };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          (i !== null && i(n, r),
            typeof r == `object` && r && typeof r.then == `function` && r.then(C, k));
        } catch (e) {
          k(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (w.T = t));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.8`));
  }),
  n = e((e, n) => {
    n.exports = t();
  }),
  r = e((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e) (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m)) {
        if (n(c) !== null) ((m = !0), S || ((S = !0), O()));
        else {
          var t = n(l);
          t !== null && ne(x, t.startTime - e);
        }
      }
    }
    var S = !1,
      C = -1,
      w = 5,
      T = -1;
    function E() {
      return g ? !0 : !(e.unstable_now() - T < w);
    }
    function D() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        T = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E()); ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && ne(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? O() : (S = !1);
        }
      }
    }
    var O;
    if (typeof y == `function`)
      O = function () {
        y(D);
      };
    else if (typeof MessageChannel < `u`) {
      var ee = new MessageChannel(),
        te = ee.port2;
      ((ee.port1.onmessage = D),
        (O = function () {
          te.postMessage(null);
        }));
    } else
      O = function () {
        _(D, 0);
      };
    function ne(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
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
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null && r === n(l) && (h ? (v(C), (C = -1)) : (h = !0), ne(x, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), S || ((S = !0), O()))),
          r
        );
      }),
      (e.unstable_shouldYield = E),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  i = e((e, t) => {
    t.exports = r();
  }),
  a = e((e) => {
    var t = n();
    function r(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function i() {}
    var a = {
        d: {
          f: i,
          r: function () {
            throw Error(r(522));
          },
          D: i,
          C: i,
          L: i,
          m: i,
          X: i,
          S: i,
          M: i,
        },
        p: 0,
        findDOMNode: null,
      },
      o = Symbol.for(`react.portal`);
    function s(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: o,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function l(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
      (e.createPortal = function (e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)) throw Error(r(299));
        return s(e, t, null, n);
      }),
      (e.flushSync = function (e) {
        var t = c.T,
          n = a.p;
        try {
          if (((c.T = null), (a.p = 2), e)) return e();
        } finally {
          ((c.T = t), (a.p = n), a.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t = typeof t == `string` ? (t === `use-credentials` ? t : ``) : void 0))
            : (t = null),
          a.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && a.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = l(n, t.crossOrigin),
            i = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? a.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
                crossOrigin: r,
                integrity: i,
                fetchPriority: o,
              })
            : n === `script` &&
              a.d.X(e, {
                crossOrigin: r,
                integrity: i,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`) {
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = l(t.as, t.crossOrigin);
              a.d.M(e, {
                crossOrigin: n,
                integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? a.d.M(e);
        }
      }),
      (e.preload = function (e, t) {
        if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
          var n = t.as,
            r = l(n, t.crossOrigin);
          a.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`) {
          if (t) {
            var n = l(t.as, t.crossOrigin);
            a.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else a.d.m(e);
        }
      }),
      (e.requestFormReset = function (e) {
        a.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return c.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return c.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.8`));
  }),
  o = e((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = a()));
  }),
  s = e((e) => {
    var t = i(),
      r = n(),
      a = o();
    function s(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function c(e) {
      return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function l(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function u(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function d(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function f(e) {
      if (l(e) !== e) throw Error(s(188));
    }
    function p(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = l(e)), t === null)) throw Error(s(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var a = i.alternate;
        if (a === null) {
          if (((r = i.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (i.child === a.child) {
          for (a = i.child; a; ) {
            if (a === n) return (f(i), e);
            if (a === r) return (f(i), t);
            a = a.sibling;
          }
          throw Error(s(188));
        }
        if (n.return !== r.return) ((n = i), (r = a));
        else {
          for (var o = !1, c = i.child; c; ) {
            if (c === n) {
              ((o = !0), (n = i), (r = a));
              break;
            }
            if (c === r) {
              ((o = !0), (r = i), (n = a));
              break;
            }
            c = c.sibling;
          }
          if (!o) {
            for (c = a.child; c; ) {
              if (c === n) {
                ((o = !0), (n = a), (r = i));
                break;
              }
              if (c === r) {
                ((o = !0), (r = a), (n = i));
                break;
              }
              c = c.sibling;
            }
            if (!o) throw Error(s(189));
          }
        }
        if (n.alternate !== r) throw Error(s(190));
      }
      if (n.tag !== 3) throw Error(s(188));
      return n.stateNode.current === n ? e : t;
    }
    function m(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = m(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      w = Symbol.for(`react.forward_ref`),
      T = Symbol.for(`react.suspense`),
      E = Symbol.for(`react.suspense_list`),
      D = Symbol.for(`react.memo`),
      O = Symbol.for(`react.lazy`),
      ee = Symbol.for(`react.activity`),
      te = Symbol.for(`react.memo_cache_sentinel`),
      ne = Symbol.iterator;
    function re(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ne && e[ne]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var ie = Symbol.for(`react.client.reference`);
    function ae(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.$$typeof === ie ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case T:
          return `Suspense`;
        case E:
          return `SuspenseList`;
        case ee:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case C:
            return e.displayName || `Context`;
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case w:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case D:
            return ((t = e.displayName || null), t === null ? ae(e.type) || `Memo` : t);
          case O:
            ((t = e._payload), (e = e._init));
            try {
              return ae(e(t));
            } catch {}
        }
      return null;
    }
    var oe = Array.isArray,
      k = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      A = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      se = { pending: !1, data: null, method: null, action: null },
      ce = [],
      le = -1;
    function ue(e) {
      return { current: e };
    }
    function j(e) {
      0 > le || ((e.current = ce[le]), (ce[le] = null), le--);
    }
    function M(e, t) {
      (le++, (ce[le] = e.current), (e.current = t));
    }
    var de = ue(null),
      fe = ue(null),
      pe = ue(null),
      me = ue(null);
    function he(e, t) {
      switch ((M(pe, t), M(fe, e), M(de, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) ((t = Vd(t)), (e = Hd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (j(de), M(de, e));
    }
    function ge() {
      (j(de), j(fe), j(pe));
    }
    function _e(e) {
      e.memoizedState !== null && M(me, e);
      var t = de.current,
        n = Hd(t, e.type);
      t !== n && (M(fe, e), M(de, n));
    }
    function ve(e) {
      (fe.current === e && (j(de), j(fe)), me.current === e && (j(me), (Qf._currentValue = se)));
    }
    var ye, be;
    function xe(e) {
      if (ye === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((ye = (t && t[1]) || ``),
            (be =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        ye +
        e +
        be
      );
    }
    var Se = !1;
    function Ce(e, t) {
      if (!e || Se) return ``;
      Se = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, 'props', {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) && typeof n.catch == `function` && n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`) return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, 'name', {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`); ) r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`); ) i++;
          if (r === c.length || i === l.length)
            for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i]; ) i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((Se = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? xe(n) : ``;
    }
    function we(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return xe(e.type);
        case 16:
          return xe(`Lazy`);
        case 13:
          return e.child !== t && t !== null ? xe(`Suspense Fallback`) : xe(`Suspense`);
        case 19:
          return xe(`SuspenseList`);
        case 0:
        case 15:
          return Ce(e.type, !1);
        case 11:
          return Ce(e.type.render, !1);
        case 1:
          return Ce(e.type, !0);
        case 31:
          return xe(`Activity`);
        default:
          return ``;
      }
    }
    function Te(e) {
      try {
        var t = ``,
          n = null;
        do ((t += we(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Ee = Object.prototype.hasOwnProperty,
      De = t.unstable_scheduleCallback,
      Oe = t.unstable_cancelCallback,
      ke = t.unstable_shouldYield,
      Ae = t.unstable_requestPaint,
      je = t.unstable_now,
      Me = t.unstable_getCurrentPriorityLevel,
      Ne = t.unstable_ImmediatePriority,
      Pe = t.unstable_UserBlockingPriority,
      Fe = t.unstable_NormalPriority,
      Ie = t.unstable_LowPriority,
      Le = t.unstable_IdlePriority,
      Re = t.log,
      ze = t.unstable_setDisableYieldValue,
      Be = null,
      Ve = null;
    function He(e) {
      if ((typeof Re == `function` && ze(e), Ve && typeof Ve.setStrictMode == `function`))
        try {
          Ve.setStrictMode(Be, e);
        } catch {}
    }
    var Ue = Math.clz32 ? Math.clz32 : Ke,
      We = Math.log,
      Ge = Math.LN2;
    function Ke(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((We(e) / Ge) | 0)) | 0);
    }
    var qe = 256,
      Je = 262144,
      Ye = 4194304;
    function Xe(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function Ze(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Xe(n)))
                : (i = Xe(o))
              : (i = Xe(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s), o === 0 ? n || ((n = s & ~e), n !== 0 && (i = Xe(n))) : (i = Xe(o)))
              : (i = Xe(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function Qe(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function $e(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function et() {
      var e = Ye;
      return ((Ye <<= 1), !(Ye & 62914560) && (Ye = 4194304), e);
    }
    function tt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function nt(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function rt(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - Ue(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && it(e, r, 0),
        a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function it(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Ue(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function at(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Ue(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function ot(e, t) {
      var n = t & -t;
      return ((n = n & 42 ? 1 : st(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0);
    }
    function st(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function ct(e) {
      return ((e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2);
    }
    function lt() {
      var e = A.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function ut(e, t) {
      var n = A.p;
      try {
        return ((A.p = e), t());
      } finally {
        A.p = n;
      }
    }
    var dt = Math.random().toString(36).slice(2),
      ft = `__reactFiber$` + dt,
      pt = `__reactProps$` + dt,
      mt = `__reactContainer$` + dt,
      ht = `__reactEvents$` + dt,
      gt = `__reactListeners$` + dt,
      _t = `__reactHandles$` + dt,
      vt = `__reactResources$` + dt,
      yt = `__reactMarker$` + dt;
    function bt(e) {
      (delete e[ft], delete e[pt], delete e[ht], delete e[gt], delete e[_t]);
    }
    function xt(e) {
      var t = e[ft];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[mt] || n[ft])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = df(e); e !== null; ) {
              if ((n = e[ft])) return n;
              e = df(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function St(e) {
      if ((e = e[ft] || e[mt])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function Ct(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(s(33));
    }
    function wt(e) {
      var t = e[vt];
      return ((t ||= e[vt] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function Tt(e) {
      e[yt] = !0;
    }
    var Et = new Set(),
      Dt = {};
    function Ot(e, t) {
      (kt(e, t), kt(e + `Capture`, t));
    }
    function kt(e, t) {
      for (Dt[e] = t, e = 0; e < t.length; e++) Et.add(t[e]);
    }
    var At = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      jt = {},
      Mt = {};
    function Nt(e) {
      return Ee.call(Mt, e)
        ? !0
        : Ee.call(jt, e)
          ? !1
          : At.test(e)
            ? (Mt[e] = !0)
            : ((jt[e] = !0), !1);
    }
    function Pt(e, t, n) {
      if (Nt(t)) {
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
      }
    }
    function Ft(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function It(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function Lt(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Rt(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
    }
    function zt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Bt(e) {
      if (!e._valueTracker) {
        var t = Rt(e) ? `checked` : `value`;
        e._valueTracker = zt(e, t, `` + e[t]);
      }
    }
    function Vt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Rt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function Ht(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0)) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ut = /[\n"\\]/g;
    function Wt(e) {
      return e.replace(Ut, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Gt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) && (e.value = `` + Lt(t))
            : e.value !== `` + Lt(t) && (e.value = `` + Lt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : qt(e, o, Lt(n))
          : qt(e, o, Lt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`
          ? (e.name = `` + Lt(s))
          : e.removeAttribute(`name`));
    }
    function Kt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Bt(e);
          return;
        }
        ((n = n == null ? `` : `` + Lt(n)),
          (t = t == null ? n : `` + Lt(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Bt(e));
    }
    function qt(e, t, n) {
      (t === `number` && Ht(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Jt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + Lt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Yt(e, t, n) {
      if (t != null && ((t = `` + Lt(t)), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Lt(n);
    }
    function Xt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(s(92));
          if (oe(r)) {
            if (1 < r.length) throw Error(s(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = Lt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Bt(e));
    }
    function Zt(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Qt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function $t(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || Qt.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function en(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(s(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var i in t) ((r = t[i]), t.hasOwnProperty(i) && n[i] !== r && $t(e, i, r));
      } else for (var a in t) t.hasOwnProperty(a) && $t(e, a, t[a]);
    }
    function tn(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var nn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      rn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function an(e) {
      return rn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function on() {}
    var sn = null;
    function cn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var ln = null,
      un = null;
    function dn(e) {
      var t = St(e);
      if (t && (e = t.stateNode)) {
        var n = e[pt] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Gt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(`input[name="` + Wt(`` + t) + `"][type="radio"]`), t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = r[pt] || null;
                  if (!i) throw Error(s(90));
                  Gt(
                    r,
                    i.value,
                    i.defaultValue,
                    i.defaultValue,
                    i.checked,
                    i.defaultChecked,
                    i.type,
                    i.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++) ((r = n[t]), r.form === e.form && Vt(r));
            }
            break a;
          case `textarea`:
            Yt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && Jt(e, !!n.multiple, t, !1));
        }
      }
    }
    var fn = !1;
    function pn(e, t, n) {
      if (fn) return e(t, n);
      fn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((fn = !1),
          (ln !== null || un !== null) &&
            (bu(), ln && ((t = ln), (e = un), (un = ln = null), dn(t), e)))
        )
          for (t = 0; t < e.length; t++) dn(e[t]);
      }
    }
    function mn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[pt] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(s(231, t, typeof n));
      return n;
    }
    var hn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      gn = !1;
    if (hn)
      try {
        var _n = {};
        (Object.defineProperty(_n, 'passive', {
          get: function () {
            gn = !0;
          },
        }),
          window.addEventListener(`test`, _n, _n),
          window.removeEventListener(`test`, _n, _n));
      } catch {
        gn = !1;
      }
    var vn = null,
      yn = null,
      bn = null;
    function xn() {
      if (bn) return bn;
      var e,
        t = yn,
        n = t.length,
        r,
        i = `value` in vn ? vn.value : vn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (bn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Sn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Cn() {
      return !0;
    }
    function wn() {
      return !1;
    }
    function Tn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented
          )
            ? Cn
            : wn),
          (this.isPropagationStopped = wn),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Cn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Cn));
          },
          persist: function () {},
          isPersistent: Cn,
        }),
        t
      );
    }
    var En = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Dn = Tn(En),
      On = h({}, En, { view: 0, detail: 0 }),
      kn = Tn(On),
      An,
      jn,
      Mn,
      Nn = h({}, On, {
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
        getModifierState: Wn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Mn &&
                (Mn && e.type === `mousemove`
                  ? ((An = e.screenX - Mn.screenX), (jn = e.screenY - Mn.screenY))
                  : (jn = An = 0),
                (Mn = e)),
              An);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : jn;
        },
      }),
      Pn = Tn(Nn),
      Fn = Tn(h({}, Nn, { dataTransfer: 0 })),
      In = Tn(h({}, On, { relatedTarget: 0 })),
      Ln = Tn(h({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Rn = Tn(
        h({}, En, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData;
          },
        }),
      ),
      zn = Tn(h({}, En, { data: 0 })),
      Bn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Vn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Hn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function Un(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Hn[e]) ? !!t[e] : !1;
    }
    function Wn() {
      return Un;
    }
    var Gn = Tn(
        h({}, On, {
          key: function (e) {
            if (e.key) {
              var t = Bn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = Sn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Vn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Wn,
          charCode: function (e) {
            return e.type === `keypress` ? Sn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? Sn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Kn = Tn(
        h({}, Nn, {
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
        }),
      ),
      qn = Tn(
        h({}, On, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Wn,
        }),
      ),
      Jn = Tn(h({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Yn = Tn(
        h({}, Nn, {
          deltaX: function (e) {
            return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Xn = Tn(h({}, En, { newState: 0, oldState: 0 })),
      Zn = [9, 13, 27, 32],
      Qn = hn && `CompositionEvent` in window,
      $n = null;
    hn && `documentMode` in document && ($n = document.documentMode);
    var er = hn && `TextEvent` in window && !$n,
      tr = hn && (!Qn || ($n && 8 < $n && 11 >= $n)),
      nr = ` `,
      rr = !1;
    function ir(e, t) {
      switch (e) {
        case `keyup`:
          return Zn.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function ar(e) {
      return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null);
    }
    var or = !1;
    function sr(e, t) {
      switch (e) {
        case `compositionend`:
          return ar(t);
        case `keypress`:
          return t.which === 32 ? ((rr = !0), nr) : null;
        case `textInput`:
          return ((e = t.data), e === nr && rr ? null : e);
        default:
          return null;
      }
    }
    function cr(e, t) {
      if (or)
        return e === `compositionend` || (!Qn && ir(e, t))
          ? ((e = xn()), (bn = yn = vn = null), (or = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return tr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var lr = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
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
    function ur(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!lr[e.type] : t === `textarea`;
    }
    function dr(e, t, n, r) {
      (ln ? (un ? un.push(r) : (un = [r])) : (ln = r),
        (t = Ed(t, `onChange`)),
        0 < t.length &&
          ((n = new Dn(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t })));
    }
    var fr = null,
      pr = null;
    function mr(e) {
      yd(e, 0);
    }
    function hr(e) {
      if (Vt(Ct(e))) return e;
    }
    function gr(e, t) {
      if (e === `change`) return t;
    }
    var _r = !1;
    if (hn) {
      var vr;
      if (hn) {
        var yr = `oninput` in document;
        if (!yr) {
          var br = document.createElement(`div`);
          (br.setAttribute(`oninput`, `return;`), (yr = typeof br.oninput == `function`));
        }
        vr = yr;
      } else vr = !1;
      _r = vr && (!document.documentMode || 9 < document.documentMode);
    }
    function xr() {
      fr && (fr.detachEvent(`onpropertychange`, Sr), (pr = fr = null));
    }
    function Sr(e) {
      if (e.propertyName === `value` && hr(pr)) {
        var t = [];
        (dr(t, pr, e, cn(e)), pn(mr, t));
      }
    }
    function Cr(e, t, n) {
      e === `focusin`
        ? (xr(), (fr = t), (pr = n), fr.attachEvent(`onpropertychange`, Sr))
        : e === `focusout` && xr();
    }
    function wr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return hr(pr);
    }
    function Tr(e, t) {
      if (e === `click`) return hr(t);
    }
    function Er(e, t) {
      if (e === `input` || e === `change`) return hr(t);
    }
    function Dr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Or = typeof Object.is == `function` ? Object.is : Dr;
    function kr(e, t) {
      if (Or(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ee.call(t, i) || !Or(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Ar(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function jr(e, t) {
      var n = Ar(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Ar(n);
      }
    }
    function Mr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Mr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Nr(e) {
      e =
        e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Ht(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ht(e.document);
      }
      return t;
    }
    function Pr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Fr = hn && `documentMode` in document && 11 >= document.documentMode,
      Ir = null,
      Lr = null,
      Rr = null,
      zr = !1;
    function Br(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      zr ||
        Ir == null ||
        Ir !== Ht(r) ||
        ((r = Ir),
        `selectionStart` in r && Pr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Rr && kr(Rr, r)) ||
          ((Rr = r),
          (r = Ed(Lr, `onSelect`)),
          0 < r.length &&
            ((t = new Dn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Ir))));
    }
    function Vr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Hr = {
        animationend: Vr(`Animation`, `AnimationEnd`),
        animationiteration: Vr(`Animation`, `AnimationIteration`),
        animationstart: Vr(`Animation`, `AnimationStart`),
        transitionrun: Vr(`Transition`, `TransitionRun`),
        transitionstart: Vr(`Transition`, `TransitionStart`),
        transitioncancel: Vr(`Transition`, `TransitionCancel`),
        transitionend: Vr(`Transition`, `TransitionEnd`),
      },
      Ur = {},
      Wr = {};
    hn &&
      ((Wr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Hr.animationend.animation,
        delete Hr.animationiteration.animation,
        delete Hr.animationstart.animation),
      `TransitionEvent` in window || delete Hr.transitionend.transition);
    function Gr(e) {
      if (Ur[e]) return Ur[e];
      if (!Hr[e]) return e;
      var t = Hr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Wr) return (Ur[e] = t[n]);
      return e;
    }
    var Kr = Gr(`animationend`),
      qr = Gr(`animationiteration`),
      Jr = Gr(`animationstart`),
      Yr = Gr(`transitionrun`),
      N = Gr(`transitionstart`),
      Xr = Gr(`transitioncancel`),
      Zr = Gr(`transitionend`),
      Qr = new Map(),
      $r =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    $r.push(`scrollEnd`);
    function ei(e, t) {
      (Qr.set(e, t), Ot(t, [e]));
    }
    var ti =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ni = [],
      ri = 0,
      ii = 0;
    function ai() {
      for (var e = ri, t = (ii = ri = 0); t < e; ) {
        var n = ni[t];
        ni[t++] = null;
        var r = ni[t];
        ni[t++] = null;
        var i = ni[t];
        ni[t++] = null;
        var a = ni[t];
        if (((ni[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i));
        }
        a !== 0 && li(n, i, a);
      }
    }
    function oi(e, t, n, r) {
      ((ni[ri++] = e),
        (ni[ri++] = t),
        (ni[ri++] = n),
        (ni[ri++] = r),
        (ii |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function si(e, t, n, r) {
      return (oi(e, t, n, r), ui(e));
    }
    function ci(e, t) {
      return (oi(e, null, null, t), ui(e));
    }
    function li(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 && ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Ue(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function ui(e) {
      if (50 < du) throw ((du = 0), (fu = null), Error(s(185)));
      for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var di = {};
    function fi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function pi(e, t, n, r) {
      return new fi(e, t, n, r);
    }
    function mi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function hi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = pi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function gi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function _i(e, t, n, r, i, a) {
      var o = 0;
      if (((r = e), typeof e == `function`)) mi(e) && (o = 1);
      else if (typeof e == `string`)
        o = Uf(e, n, de.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
      else
        a: switch (e) {
          case ee:
            return ((e = pi(31, n, t, i)), (e.elementType = ee), (e.lanes = a), e);
          case y:
            return vi(n.children, i, a, t);
          case b:
            ((o = 8), (i |= 24));
            break;
          case x:
            return ((e = pi(12, n, t, i | 2)), (e.elementType = x), (e.lanes = a), e);
          case T:
            return ((e = pi(13, n, t, i)), (e.elementType = T), (e.lanes = a), e);
          case E:
            return ((e = pi(19, n, t, i)), (e.elementType = E), (e.lanes = a), e);
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  o = 10;
                  break a;
                case S:
                  o = 9;
                  break a;
                case w:
                  o = 11;
                  break a;
                case D:
                  o = 14;
                  break a;
                case O:
                  ((o = 16), (r = null));
                  break a;
              }
            ((o = 29), (n = Error(s(130, e === null ? `null` : typeof e, ``))), (r = null));
        }
      return ((t = pi(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t);
    }
    function vi(e, t, n, r) {
      return ((e = pi(7, e, r, t)), (e.lanes = n), e);
    }
    function yi(e, t, n) {
      return ((e = pi(6, e, null, t)), (e.lanes = n), e);
    }
    function bi(e) {
      var t = pi(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function xi(e, t, n) {
      return (
        (t = pi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Si = new WeakMap();
    function Ci(e, t) {
      if (typeof e == `object` && e) {
        var n = Si.get(e);
        return n === void 0 ? ((t = { value: e, source: t, stack: Te(t) }), Si.set(e, t), t) : n;
      }
      return { value: e, source: t, stack: Te(t) };
    }
    var wi = [],
      Ti = 0,
      Ei = null,
      Di = 0,
      Oi = [],
      ki = 0,
      Ai = null,
      ji = 1,
      Mi = ``;
    function Ni(e, t) {
      ((wi[Ti++] = Di), (wi[Ti++] = Ei), (Ei = e), (Di = t));
    }
    function Pi(e, t, n) {
      ((Oi[ki++] = ji), (Oi[ki++] = Mi), (Oi[ki++] = Ai), (Ai = e));
      var r = ji;
      e = Mi;
      var i = 32 - Ue(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Ue(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ji = (1 << (32 - Ue(t) + i)) | (n << i) | r),
          (Mi = a + e));
      } else ((ji = (1 << a) | (n << i) | r), (Mi = e));
    }
    function Fi(e) {
      e.return !== null && (Ni(e, 1), Pi(e, 1, 0));
    }
    function Ii(e) {
      for (; e === Ei; ) ((Ei = wi[--Ti]), (wi[Ti] = null), (Di = wi[--Ti]), (wi[Ti] = null));
      for (; e === Ai; )
        ((Ai = Oi[--ki]),
          (Oi[ki] = null),
          (Mi = Oi[--ki]),
          (Oi[ki] = null),
          (ji = Oi[--ki]),
          (Oi[ki] = null));
    }
    function Li(e, t) {
      ((Oi[ki++] = ji), (Oi[ki++] = Mi), (Oi[ki++] = Ai), (ji = t.id), (Mi = t.overflow), (Ai = e));
    }
    var P = null,
      F = null,
      I = !1,
      Ri = null,
      zi = !1,
      Bi = Error(s(519));
    function Vi(e) {
      throw (
        qi(
          Ci(
            Error(
              s(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Bi
      );
    }
    function Hi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[ft] = e), (t[pt] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < _d.length; n++) Q(_d[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            Kt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), Xt(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` && typeof n != `number` && typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Md(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = on),
            (t = !0))
          : (t = !1),
        t || Vi(e, !0));
    }
    function Ui(e) {
      for (P = e.return; P; )
        switch (P.tag) {
          case 5:
          case 31:
          case 13:
            zi = !1;
            return;
          case 27:
          case 3:
            zi = !0;
            return;
          default:
            P = P.return;
        }
    }
    function Wi(e) {
      if (e !== P) return !1;
      if (!I) return (Ui(e), (I = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type), (n = n === `form` || n === `button` || Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && F && Vi(e),
        Ui(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(s(317));
        F = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(s(317));
        F = uf(e);
      } else
        t === 27
          ? ((t = F), Zd(e.type) ? ((e = lf), (lf = null), (F = e)) : (F = t))
          : (F = P ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Gi() {
      ((F = P = null), (I = !1));
    }
    function Ki() {
      var e = Ri;
      return (e !== null && (Zl === null ? (Zl = e) : Zl.push.apply(Zl, e), (Ri = null)), e);
    }
    function qi(e) {
      Ri === null ? (Ri = [e]) : Ri.push(e);
    }
    var Ji = ue(null),
      Yi = null,
      Xi = null;
    function Zi(e, t, n) {
      (M(Ji, t._currentValue), (t._currentValue = n));
    }
    function Qi(e) {
      ((e._currentValue = Ji.current), j(Ji));
    }
    function $i(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function ea(e, t, n, r) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var a = i.dependencies;
        if (a !== null) {
          var o = i.child;
          a = a.firstContext;
          a: for (; a !== null; ) {
            var c = a;
            a = i;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((a.lanes |= n),
                  (c = a.alternate),
                  c !== null && (c.lanes |= n),
                  $i(a.return, n, e),
                  r || (o = null));
                break a;
              }
            a = c.next;
          }
        } else if (i.tag === 18) {
          if (((o = i.return), o === null)) throw Error(s(341));
          ((o.lanes |= n),
            (a = o.alternate),
            a !== null && (a.lanes |= n),
            $i(o, n, e),
            (o = null));
        } else o = i.child;
        if (o !== null) o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            if (((i = o.sibling), i !== null)) {
              ((i.return = o.return), (o = i));
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function ta(e, t, n, r) {
      e = null;
      for (var i = t, a = !1; i !== null; ) {
        if (!a) {
          if (i.flags & 524288) a = !0;
          else if (i.flags & 262144) break;
        }
        if (i.tag === 10) {
          var o = i.alternate;
          if (o === null) throw Error(s(387));
          if (((o = o.memoizedProps), o !== null)) {
            var c = i.type;
            Or(i.pendingProps.value, o.value) || (e === null ? (e = [c]) : e.push(c));
          }
        } else if (i === me.current) {
          if (((o = i.alternate), o === null)) throw Error(s(387));
          o.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        i = i.return;
      }
      (e !== null && ea(t, e, n, r), (t.flags |= 262144));
    }
    function na(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Or(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ra(e) {
      ((Yi = e), (Xi = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function L(e) {
      return aa(Yi, e);
    }
    function ia(e, t) {
      return (Yi === null && ra(e), aa(e, t));
    }
    function aa(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Xi === null)) {
        if (e === null) throw Error(s(308));
        ((Xi = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
      } else Xi = Xi.next = t;
      return n;
    }
    var oa =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      sa = t.unstable_scheduleCallback,
      ca = t.unstable_NormalPriority,
      R = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function la() {
      return { controller: new oa(), data: new Map(), refCount: 0 };
    }
    function ua(e) {
      (e.refCount--,
        e.refCount === 0 &&
          sa(ca, function () {
            e.controller.abort();
          }));
    }
    var da = null,
      fa = 0,
      pa = 0,
      ma = null;
    function ha(e, t) {
      if (da === null) {
        var n = (da = []);
        ((fa = 0),
          (pa = dd()),
          (ma = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (fa++, t.then(ga, ga), t);
    }
    function ga() {
      if (--fa === 0 && da !== null) {
        ma !== null && (ma.status = `fulfilled`);
        var e = da;
        ((da = null), (pa = 0), (ma = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function _a(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var va = k.S;
    k.S = function (e, t) {
      ((eu = je()),
        typeof t == `object` && t && typeof t.then == `function` && ha(e, t),
        va !== null && va(e, t));
    };
    var ya = ue(null);
    function ba() {
      var e = ya.current;
      return e === null ? K.pooledCache : e;
    }
    function xa(e, t) {
      t === null ? M(ya, ya.current) : M(ya, t.pool);
    }
    function Sa() {
      var e = ba();
      return e === null ? null : { parent: R._currentValue, pool: e };
    }
    var Ca = Error(s(460)),
      wa = Error(s(474)),
      Ta = Error(s(542)),
      Ea = { then: function () {} };
    function Da(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Oa(e, t, n) {
      switch (
        ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(on, on), (t = n)), t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Ma(e), e);
        default:
          if (typeof t.status == `string`) t.then(on, on);
          else {
            if (((e = K), e !== null && 100 < e.shellSuspendCounter)) throw Error(s(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Ma(e), e);
          }
          throw ((Aa = t), Ca);
      }
    }
    function ka(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? ((Aa = e), Ca) : e;
      }
    }
    var Aa = null;
    function ja() {
      if (Aa === null) throw Error(s(459));
      var e = Aa;
      return ((Aa = null), e);
    }
    function Ma(e) {
      if (e === Ca || e === Ta) throw Error(s(483));
    }
    var Na = null,
      Pa = 0;
    function Fa(e) {
      var t = Pa;
      return ((Pa += 1), Na === null && (Na = []), Oa(Na, e, t));
    }
    function Ia(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function La(e, t) {
      throw t.$$typeof === g
        ? Error(s(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            s(
              31,
              e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e,
            ),
          ));
    }
    function Ra(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling));
        return t;
      }
      function i(e, t) {
        return ((e = hi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function a(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function o(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = yi(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var a = n.type;
        return a === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === a ||
                (typeof a == `object` && a && a.$$typeof === O && ka(a) === t.type))
            ? ((t = i(t, n.props)), Ia(t, n), (t.return = e), t)
            : ((t = _i(n.type, n.key, n.props, null, e.mode, r)), Ia(t, n), (t.return = e), t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = xi(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, a) {
        return t === null || t.tag !== 7
          ? ((t = vi(n, e.mode, r, a)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
          return ((t = yi(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = _i(t.type, t.key, t.props, null, e.mode, n)),
                Ia(n, t),
                (n.return = e),
                n
              );
            case v:
              return ((t = xi(t, e.mode, n)), (t.return = e), t);
            case O:
              return ((t = ka(t)), f(e, t, n));
          }
          if (oe(t) || re(t)) return ((t = vi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, Fa(t), n);
          if (t.$$typeof === C) return f(e, ia(e, t), n);
          La(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if ((typeof n == `string` && n !== ``) || typeof n == `number` || typeof n == `bigint`)
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case O:
              return ((n = ka(n)), p(e, t, n, r));
          }
          if (oe(n) || re(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Fa(n), r);
          if (n.$$typeof === C) return p(e, t, ia(e, n), r);
          La(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number` || typeof r == `bigint`)
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return ((e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i));
            case v:
              return ((e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i));
            case O:
              return ((r = ka(r)), m(e, t, n, r, i));
          }
          if (oe(r) || re(r)) return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, Fa(r), i);
          if (r.$$typeof === C) return m(e, t, n, ia(t, r), i);
          La(t, r);
        }
        return null;
      }
      function h(i, o, s, c) {
        for (
          var l = null, u = null, d = o, h = (o = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (o = a(_, o, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), I && Ni(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null && ((o = a(d, o, h)), u === null ? (l = d) : (u.sibling = d), (u = d)));
          return (I && Ni(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e && g.alternate !== null && d.delete(g.key === null ? h : g.key),
              (o = a(g, o, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          I && Ni(i, h),
          l
        );
      }
      function g(i, o, c, l) {
        if (c == null) throw Error(s(151));
        for (
          var u = null, d = null, h = o, g = (o = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(i, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(i, h),
            (o = a(y, o, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(i, h), I && Ni(i, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(i, v.value, l)),
              v !== null && ((o = a(v, o, g)), d === null ? (u = v) : (d.sibling = v), (d = v)));
          return (I && Ni(i, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, i, g, v.value, l)),
            v !== null &&
              (e && v.alternate !== null && h.delete(v.key === null ? g : v.key),
              (o = a(v, o, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(i, e);
            }),
          I && Ni(i, g),
          u
        );
      }
      function b(e, r, a, c) {
        if (
          (typeof a == `object` && a && a.type === y && a.key === null && (a = a.props.children),
          typeof a == `object` && a)
        ) {
          switch (a.$$typeof) {
            case _:
              a: {
                for (var l = a.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = a.type), l === y)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling), (c = i(r, a.props.children)), (c.return = e), (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` && l && l.$$typeof === O && ka(l) === r.type)
                    ) {
                      (n(e, r.sibling), (c = i(r, a.props)), Ia(c, a), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                a.type === y
                  ? ((c = vi(a.props.children, e.mode, c, a.key)), (c.return = e), (e = c))
                  : ((c = _i(a.type, a.key, a.props, null, e.mode, c)),
                    Ia(c, a),
                    (c.return = e),
                    (e = c));
              }
              return o(e);
            case v:
              a: {
                for (l = a.key; r !== null; ) {
                  if (r.key === l) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === a.containerInfo &&
                      r.stateNode.implementation === a.implementation
                    ) {
                      (n(e, r.sibling), (c = i(r, a.children || [])), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                ((c = xi(a, e.mode, c)), (c.return = e), (e = c));
              }
              return o(e);
            case O:
              return ((a = ka(a)), b(e, r, a, c));
          }
          if (oe(a)) return h(e, r, a, c);
          if (re(a)) {
            if (((l = re(a)), typeof l != `function`)) throw Error(s(150));
            return ((a = l.call(a)), g(e, r, a, c));
          }
          if (typeof a.then == `function`) return b(e, r, Fa(a), c);
          if (a.$$typeof === C) return b(e, r, ia(e, a), c);
          La(e, a);
        }
        return (typeof a == `string` && a !== ``) || typeof a == `number` || typeof a == `bigint`
          ? ((a = `` + a),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = i(r, a)), (c.return = e), (e = c))
              : (n(e, r), (c = yi(a, e.mode, c)), (c.return = e), (e = c)),
            o(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Pa = 0;
          var i = b(e, t, n, r);
          return ((Na = null), i);
        } catch (t) {
          if (t === Ca || t === Ta) throw t;
          var a = pi(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var za = Ra(!0),
      Ba = Ra(!1),
      Va = !1;
    function Ha(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ua(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Wa(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Ga(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), G & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ui(e)),
          li(e, null, n),
          t
        );
      }
      return (oi(e, r, t, n), ui(e));
    }
    function Ka(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), at(e, n));
      }
    }
    function qa(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Ja = !1;
    function Ya() {
      if (Ja) {
        var e = ma;
        if (e !== null) throw e;
      }
    }
    function Xa(e, t, n, r) {
      Ja = !1;
      var i = e.updateQueue;
      Va = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o && (s === null ? (u.firstBaseUpdate = l) : (s.next = l), (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (J & f) === f : (r & f) === f) {
            (f !== 0 && f === pa && (Ja = !0),
              u !== null &&
                (u = u.next =
                  { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null }));
            a: {
              var m = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = g.payload), (f = typeof m == `function` ? m.call(_, d, f) : m), f == null)
                  )
                    break a;
                  d = h({}, d, f);
                  break a;
                case 2:
                  Va = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = { lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Gl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function Za(e, t) {
      if (typeof e != `function`) throw Error(s(191, e));
      e.call(t);
    }
    function Qa(e, t) {
      var n = e.callbacks;
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Za(n[e], t);
    }
    var $a = ue(null),
      eo = ue(0);
    function to(e, t) {
      ((e = Wl), M(eo, e), M($a, t), (Wl = e | t.baseLanes));
    }
    function no() {
      (M(eo, Wl), M($a, $a.current));
    }
    function ro() {
      ((Wl = eo.current), j($a), j(eo));
    }
    var io = ue(null),
      ao = null;
    function oo(e) {
      var t = e.alternate;
      (M(z, z.current & 1),
        M(io, e),
        ao === null && (t === null || $a.current !== null || t.memoizedState !== null) && (ao = e));
    }
    function so(e) {
      (M(z, z.current), M(io, e), ao === null && (ao = e));
    }
    function co(e) {
      e.tag === 22 ? (M(z, z.current), M(io, e), ao === null && (ao = e)) : lo(e);
    }
    function lo() {
      (M(z, z.current), M(io, io.current));
    }
    function uo(e) {
      (j(io), ao === e && (ao = null), j(z));
    }
    var z = ue(0);
    function fo(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n))) return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var po = 0,
      B = null,
      V = null,
      mo = null,
      ho = !1,
      go = !1,
      _o = !1,
      vo = 0,
      yo = 0,
      bo = null,
      xo = 0;
    function H() {
      throw Error(s(321));
    }
    function So(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!Or(e[n], t[n])) return !1;
      return !0;
    }
    function Co(e, t, n, r, i, a) {
      return (
        (po = a),
        (B = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (k.H = e === null || e.memoizedState === null ? Bs : Vs),
        (_o = !1),
        (a = n(r, i)),
        (_o = !1),
        go && (a = To(t, n, r, i)),
        wo(e),
        a
      );
    }
    function wo(e) {
      k.H = zs;
      var t = V !== null && V.next !== null;
      if (((po = 0), (mo = V = B = null), (ho = !1), (yo = 0), (bo = null), t)) throw Error(s(300));
      e === null || ic || ((e = e.dependencies), e !== null && na(e) && (ic = !0));
    }
    function To(e, t, n, r) {
      B = e;
      var i = 0;
      do {
        if ((go && (bo = null), (yo = 0), (go = !1), 25 <= i)) throw Error(s(301));
        if (((i += 1), (mo = V = null), e.updateQueue != null)) {
          var a = e.updateQueue;
          ((a.lastEffect = null),
            (a.events = null),
            (a.stores = null),
            a.memoCache != null && (a.memoCache.index = 0));
        }
        ((k.H = Hs), (a = t(n, r)));
      } while (go);
      return a;
    }
    function Eo() {
      var e = k.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? No(t) : t),
        (e = e.useState()[0]),
        (V === null ? null : V.memoizedState) !== e && (B.flags |= 1024),
        t
      );
    }
    function Do() {
      var e = vo !== 0;
      return ((vo = 0), e);
    }
    function Oo(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function ko(e) {
      if (ho) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        ho = !1;
      }
      ((po = 0), (mo = V = B = null), (go = !1), (yo = vo = 0), (bo = null));
    }
    function Ao() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (mo === null ? (B.memoizedState = mo = e) : (mo = mo.next = e), mo);
    }
    function jo() {
      if (V === null) {
        var e = B.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = V.next;
      var t = mo === null ? B.memoizedState : mo.next;
      if (t !== null) ((mo = t), (V = e));
      else {
        if (e === null) throw B.alternate === null ? Error(s(467)) : Error(s(310));
        ((V = e),
          (e = {
            memoizedState: V.memoizedState,
            baseState: V.baseState,
            baseQueue: V.baseQueue,
            queue: V.queue,
            next: null,
          }),
          mo === null ? (B.memoizedState = mo = e) : (mo = mo.next = e));
      }
      return mo;
    }
    function Mo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function No(e) {
      var t = yo;
      return (
        (yo += 1),
        bo === null && (bo = []),
        (e = Oa(bo, e, t)),
        (t = B),
        (mo === null ? t.memoizedState : mo.next) === null &&
          ((t = t.alternate), (k.H = t === null || t.memoizedState === null ? Bs : Vs)),
        e
      );
    }
    function Po(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return No(e);
        if (e.$$typeof === C) return L(e);
      }
      throw Error(s(438, String(e)));
    }
    function Fo(e) {
      var t = null,
        n = B.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = B.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Mo()), (B.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = te;
      return (t.index++, n);
    }
    function Io(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Lo(e) {
      return Ro(jo(), V, e);
    }
    function Ro(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(s(311));
      r.lastRenderedReducer = n;
      var i = e.baseQueue,
        a = r.pending;
      if (a !== null) {
        if (i !== null) {
          var o = i.next;
          ((i.next = a.next), (a.next = o));
        }
        ((t.baseQueue = i = a), (r.pending = null));
      }
      if (((a = e.baseState), i === null)) e.memoizedState = a;
      else {
        t = i.next;
        var c = (o = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (po & f) === f : (J & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === pa && (d = !0));
            else if ((po & p) === p) {
              ((u = u.next), p === pa && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (o = a)) : (l = l.next = f),
                (B.lanes |= p),
                (Gl |= p));
            ((f = u.action), _o && n(a, f), (a = u.hasEagerState ? u.eagerState : n(a, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (o = a)) : (l = l.next = p),
              (B.lanes |= f),
              (Gl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (o = a) : (l.next = c),
          !Or(a, e.memoizedState) && ((ic = !0), d && ((n = ma), n !== null)))
        )
          throw n;
        ((e.memoizedState = a), (e.baseState = o), (e.baseQueue = l), (r.lastRenderedState = a));
      }
      return (i === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function zo(e) {
      var t = jo(),
        n = t.queue;
      if (n === null) throw Error(s(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        i = n.pending,
        a = t.memoizedState;
      if (i !== null) {
        n.pending = null;
        var o = (i = i.next);
        do ((a = e(a, o.action)), (o = o.next));
        while (o !== i);
        (Or(a, t.memoizedState) || (ic = !0),
          (t.memoizedState = a),
          t.baseQueue === null && (t.baseState = a),
          (n.lastRenderedState = a));
      }
      return [a, r];
    }
    function Bo(e, t, n) {
      var r = B,
        i = jo(),
        a = I;
      if (a) {
        if (n === void 0) throw Error(s(407));
        n = n();
      } else n = t();
      var o = !Or((V || i).memoizedState, n);
      if (
        (o && ((i.memoizedState = n), (ic = !0)),
        (i = i.queue),
        ds(Uo.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || o || (mo !== null && mo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          os(9, { destroy: void 0 }, Ho.bind(null, r, i, n, t), null),
          K === null)
        )
          throw Error(s(349));
        a || po & 127 || Vo(r, t, n);
      }
      return n;
    }
    function Vo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = B.updateQueue),
        t === null
          ? ((t = Mo()), (B.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Ho(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Wo(t) && Go(e));
    }
    function Uo(e, t, n) {
      return n(function () {
        Wo(t) && Go(e);
      });
    }
    function Wo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Or(e, n);
      } catch {
        return !0;
      }
    }
    function Go(e) {
      var t = ci(e, 2);
      t !== null && hu(t, e, 2);
    }
    function Ko(e) {
      var t = Ao();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), _o)) {
          He(!0);
          try {
            n();
          } finally {
            He(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Io,
          lastRenderedState: e,
        }),
        t
      );
    }
    function qo(e, t, n, r) {
      return ((e.baseState = n), Ro(e, V, typeof r == `function` ? r : Io));
    }
    function Jo(e, t, n, r, i) {
      if (Is(e)) throw Error(s(485));
      if (((e = t.action), e !== null)) {
        var a = {
          payload: i,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            a.listeners.push(e);
          },
        };
        (k.T === null ? (a.isTransition = !1) : n(!0),
          r(a),
          (n = t.pending),
          n === null
            ? ((a.next = t.pending = a), Yo(t, a))
            : ((a.next = n.next), (t.pending = n.next = a)));
      }
    }
    function Yo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = k.T,
          o = {};
        k.T = o;
        try {
          var s = n(i, r),
            c = k.S;
          (c !== null && c(o, s), Xo(e, t, s));
        } catch (n) {
          Qo(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (k.T = a));
        }
      } else
        try {
          ((a = n(i, r)), Xo(e, t, a));
        } catch (n) {
          Qo(e, t, n);
        }
    }
    function Xo(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              Zo(e, t, n);
            },
            function (n) {
              return Qo(e, t, n);
            },
          )
        : Zo(e, t, n);
    }
    function Zo(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        $o(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Yo(e, n))));
    }
    function Qo(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), $o(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function $o(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function es(e, t) {
      return t;
    }
    function ts(e, t) {
      if (I) {
        var n = K.formState;
        if (n !== null) {
          a: {
            var r = B;
            if (I) {
              if (F) {
                b: {
                  for (var i = F, a = zi; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((F = cf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Vi(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Ao()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: es,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Ns.bind(null, B, r)),
        (r.dispatch = n),
        (r = Ko(!1)),
        (a = Fs.bind(null, B, !1, r.queue)),
        (r = Ao()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Jo.bind(null, B, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function ns(e) {
      return rs(jo(), V, e);
    }
    function rs(e, t, n) {
      if (
        ((t = Ro(e, t, es)[0]),
        (e = Lo(Io)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = No(t);
        } catch (e) {
          throw e === Ca ? Ta : e;
        }
      else r = t;
      t = jo();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((B.flags |= 2048), os(9, { destroy: void 0 }, is.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function is(e, t) {
      e.action = t;
    }
    function as(e) {
      var t = jo(),
        n = V;
      if (n !== null) return rs(t, n, e);
      (jo(), (t = t.memoizedState), (n = jo()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function os(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = B.updateQueue),
        t === null && ((t = Mo()), (B.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function ss() {
      return jo().memoizedState;
    }
    function cs(e, t, n, r) {
      var i = Ao();
      ((B.flags |= e),
        (i.memoizedState = os(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r)));
    }
    function ls(e, t, n, r) {
      var i = jo();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      V !== null && r !== null && So(r, V.memoizedState.deps)
        ? (i.memoizedState = os(t, a, n, r))
        : ((B.flags |= e), (i.memoizedState = os(1 | t, a, n, r)));
    }
    function us(e, t) {
      cs(8390656, 8, e, t);
    }
    function ds(e, t) {
      ls(2048, 8, e, t);
    }
    function fs(e) {
      B.flags |= 4;
      var t = B.updateQueue;
      if (t === null) ((t = Mo()), (B.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function ps(e) {
      var t = jo().memoizedState;
      return (
        fs({ ref: t, nextImpl: e }),
        function () {
          if (G & 2) throw Error(s(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function ms(e, t) {
      return ls(4, 2, e, t);
    }
    function hs(e, t) {
      return ls(4, 4, e, t);
    }
    function gs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function _s(e, t, n) {
      ((n = n == null ? null : n.concat([e])), ls(4, 4, gs.bind(null, t, e), n));
    }
    function vs() {}
    function ys(e, t) {
      var n = jo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && So(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function bs(e, t) {
      var n = jo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && So(t, r[1])) return r[0];
      if (((r = e()), _o)) {
        He(!0);
        try {
          e();
        } finally {
          He(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function xs(e, t, n) {
      return n === void 0 || (po & 1073741824 && !(J & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = mu()), (B.lanes |= e), (Gl |= e), n);
    }
    function Ss(e, t, n, r) {
      return Or(n, t)
        ? n
        : $a.current === null
          ? !(po & 42) || (po & 1073741824 && !(J & 261930))
            ? ((ic = !0), (e.memoizedState = n))
            : ((e = mu()), (B.lanes |= e), (Gl |= e), t)
          : ((e = xs(e, n, r)), Or(e, t) || (ic = !0), e);
    }
    function Cs(e, t, n, r, i) {
      var a = A.p;
      A.p = a !== 0 && 8 > a ? a : 8;
      var o = k.T,
        s = {};
      ((k.T = s), Fs(e, !1, t, n));
      try {
        var c = i(),
          l = k.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ps(e, t, _a(c, r), pu(e))
            : Ps(e, t, r, pu(e)));
      } catch (n) {
        Ps(e, t, { then: function () {}, status: `rejected`, reason: n }, pu());
      } finally {
        ((A.p = a), o !== null && s.types !== null && (o.types = s.types), (k.T = o));
      }
    }
    function ws() {}
    function Ts(e, t, n, r) {
      if (e.tag !== 5) throw Error(s(476));
      var i = Es(e).queue;
      Cs(
        e,
        i,
        t,
        se,
        n === null
          ? ws
          : function () {
              return (Ds(e), n(r));
            },
      );
    }
    function Es(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: se,
        baseState: se,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Io,
          lastRenderedState: se,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Io,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function Ds(e) {
      var t = Es(e);
      (t.next === null && (t = e.alternate.memoizedState), Ps(e, t.next.queue, {}, pu()));
    }
    function Os() {
      return L(Qf);
    }
    function ks() {
      return jo().memoizedState;
    }
    function As() {
      return jo().memoizedState;
    }
    function js(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = pu();
            e = Wa(n);
            var r = Ga(t, e, n);
            (r !== null && (hu(r, t, n), Ka(r, t, n)), (t = { cache: la() }), (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Ms(e, t, n) {
      var r = pu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Is(e) ? Ls(t, n) : ((n = si(e, t, n, r)), n !== null && (hu(n, e, r), Rs(n, t, r))));
    }
    function Ns(e, t, n) {
      Ps(e, t, n, pu());
    }
    function Ps(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Is(e)) Ls(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Or(s, o)))
              return (oi(e, t, i, 0), K === null && ai(), !1);
          } catch {}
        if (((n = si(e, t, i, r)), n !== null)) return (hu(n, e, r), Rs(n, t, r), !0);
      }
      return !1;
    }
    function Fs(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: dd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Is(e))
      ) {
        if (t) throw Error(s(479));
      } else ((t = si(e, n, r, 2)), t !== null && hu(t, e, 2));
    }
    function Is(e) {
      var t = e.alternate;
      return e === B || (t !== null && t === B);
    }
    function Ls(e, t) {
      go = ho = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function Rs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), at(e, n));
      }
    }
    var zs = {
      readContext: L,
      use: Po,
      useCallback: H,
      useContext: H,
      useEffect: H,
      useImperativeHandle: H,
      useLayoutEffect: H,
      useInsertionEffect: H,
      useMemo: H,
      useReducer: H,
      useRef: H,
      useState: H,
      useDebugValue: H,
      useDeferredValue: H,
      useTransition: H,
      useSyncExternalStore: H,
      useId: H,
      useHostTransitionStatus: H,
      useFormState: H,
      useActionState: H,
      useOptimistic: H,
      useMemoCache: H,
      useCacheRefresh: H,
    };
    zs.useEffectEvent = H;
    var Bs = {
        readContext: L,
        use: Po,
        useCallback: function (e, t) {
          return ((Ao().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: L,
        useEffect: us,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])), cs(4194308, 4, gs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return cs(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          cs(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Ao();
          t = t === void 0 ? null : t;
          var r = e();
          if (_o) {
            He(!0);
            try {
              e();
            } finally {
              He(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Ao();
          if (n !== void 0) {
            var i = n(t);
            if (_o) {
              He(!0);
              try {
                n(t);
              } finally {
                He(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ms.bind(null, B, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Ao();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Ko(e);
          var t = e.queue,
            n = Ns.bind(null, B, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: vs,
        useDeferredValue: function (e, t) {
          return xs(Ao(), e, t);
        },
        useTransition: function () {
          var e = Ko(!1);
          return ((e = Cs.bind(null, B, e.queue, !0, !1)), (Ao().memoizedState = e), [!1, e]);
        },
        useSyncExternalStore: function (e, t, n) {
          var r = B,
            i = Ao();
          if (I) {
            if (n === void 0) throw Error(s(407));
            n = n();
          } else {
            if (((n = t()), K === null)) throw Error(s(349));
            J & 127 || Vo(r, t, n);
          }
          i.memoizedState = n;
          var a = { value: n, getSnapshot: t };
          return (
            (i.queue = a),
            us(Uo.bind(null, r, a, e), [e]),
            (r.flags |= 2048),
            os(9, { destroy: void 0 }, Ho.bind(null, r, a, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Ao(),
            t = K.identifierPrefix;
          if (I) {
            var n = Mi,
              r = ji;
            ((n = (r & ~(1 << (32 - Ue(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = vo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = xo++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: Os,
        useFormState: ts,
        useActionState: ts,
        useOptimistic: function (e) {
          var t = Ao();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return ((t.queue = n), (t = Fs.bind(null, B, !0, n)), (n.dispatch = t), [e, t]);
        },
        useMemoCache: Fo,
        useCacheRefresh: function () {
          return (Ao().memoizedState = js.bind(null, B));
        },
        useEffectEvent: function (e) {
          var t = Ao(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (G & 2) throw Error(s(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Vs = {
        readContext: L,
        use: Po,
        useCallback: ys,
        useContext: L,
        useEffect: ds,
        useImperativeHandle: _s,
        useInsertionEffect: ms,
        useLayoutEffect: hs,
        useMemo: bs,
        useReducer: Lo,
        useRef: ss,
        useState: function () {
          return Lo(Io);
        },
        useDebugValue: vs,
        useDeferredValue: function (e, t) {
          return Ss(jo(), V.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Lo(Io)[0],
            t = jo().memoizedState;
          return [typeof e == `boolean` ? e : No(e), t];
        },
        useSyncExternalStore: Bo,
        useId: ks,
        useHostTransitionStatus: Os,
        useFormState: ns,
        useActionState: ns,
        useOptimistic: function (e, t) {
          return qo(jo(), V, e, t);
        },
        useMemoCache: Fo,
        useCacheRefresh: As,
      };
    Vs.useEffectEvent = ps;
    var Hs = {
      readContext: L,
      use: Po,
      useCallback: ys,
      useContext: L,
      useEffect: ds,
      useImperativeHandle: _s,
      useInsertionEffect: ms,
      useLayoutEffect: hs,
      useMemo: bs,
      useReducer: zo,
      useRef: ss,
      useState: function () {
        return zo(Io);
      },
      useDebugValue: vs,
      useDeferredValue: function (e, t) {
        var n = jo();
        return V === null ? xs(n, e, t) : Ss(n, V.memoizedState, e, t);
      },
      useTransition: function () {
        var e = zo(Io)[0],
          t = jo().memoizedState;
        return [typeof e == `boolean` ? e : No(e), t];
      },
      useSyncExternalStore: Bo,
      useId: ks,
      useHostTransitionStatus: Os,
      useFormState: as,
      useActionState: as,
      useOptimistic: function (e, t) {
        var n = jo();
        return V === null ? ((n.baseState = e), [e, n.queue.dispatch]) : qo(n, V, e, t);
      },
      useMemoCache: Fo,
      useCacheRefresh: As,
    };
    Hs.useEffectEvent = ps;
    function Us(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Ws = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Wa(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Ga(e, i, r)),
          t !== null && (hu(t, e, r), Ka(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Wa(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ga(e, i, r)),
          t !== null && (hu(t, e, r), Ka(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pu(),
          r = Wa(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Ga(e, r, n)),
          t !== null && (hu(t, e, n), Ka(t, e, n)));
      },
    };
    function Gs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !kr(n, r) || !kr(i, a)
            : !0
      );
    }
    function Ks(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ws.enqueueReplaceState(t, t.state, null));
    }
    function qs(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e)) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Js(e) {
      ti(e);
    }
    function Ys(e) {
      console.error(e);
    }
    function Xs(e) {
      ti(e);
    }
    function Zs(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Qs(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function $s(e, t, n) {
      return (
        (n = Wa(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Zs(e, t);
        }),
        n
      );
    }
    function ec(e) {
      return ((e = Wa(e)), (e.tag = 3), e);
    }
    function tc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Qs(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Qs(t, n, r),
            typeof i != `function` && (ru === null ? (ru = new Set([this])) : ru.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, { componentStack: e === null ? `` : e });
        });
    }
    function nc(e, t, n, r, i) {
      if (((n.flags |= 32768), typeof r == `object` && r && typeof r.then == `function`)) {
        if (((t = n.alternate), t !== null && ta(t, n, i, !0), (n = io.current), n !== null)) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                ao === null ? Du() : n.alternate === null && X === 0 && (X = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = i),
                r === Ea
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Gu(e, r, i)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Ea
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Gu(e, r, i)),
                !1
              );
          }
          throw Error(s(435, n.tag));
        }
        return (Gu(e, r, i), Du(), !1);
      }
      if (I)
        return (
          (t = io.current),
          t === null
            ? (r !== Bi && ((t = Error(s(423), { cause: r })), qi(Ci(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (i &= -i),
              (e.lanes |= i),
              (r = Ci(r, n)),
              (i = $s(e.stateNode, r, i)),
              qa(e, i),
              X !== 4 && (X = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = i),
              r !== Bi && ((e = Error(s(422), { cause: r })), qi(Ci(e, n)))),
          !1
        );
      var a = Error(s(520), { cause: r });
      if (((a = Ci(a, n)), Xl === null ? (Xl = [a]) : Xl.push(a), X !== 4 && (X = 2), t === null))
        return !0;
      ((r = Ci(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = i & -i),
              (n.lanes |= e),
              (e = $s(n.stateNode, r, e)),
              qa(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (a = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (a !== null &&
                    typeof a.componentDidCatch == `function` &&
                    (ru === null || !ru.has(a)))))
            )
              return (
                (n.flags |= 65536),
                (i &= -i),
                (n.lanes |= i),
                (i = ec(i)),
                tc(i, e, n, r),
                qa(n, i),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var rc = Error(s(461)),
      ic = !1;
    function ac(e, t, n, r) {
      t.child = e === null ? Ba(t, null, n, r) : za(t, e.child, n, r);
    }
    function oc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ra(t),
        (r = Co(e, t, n, o, a, i)),
        (s = Do()),
        e !== null && !ic
          ? (Oo(e, t, i), Ac(e, t, i))
          : (I && s && Fi(t), (t.flags |= 1), ac(e, t, r, i), t.child)
      );
    }
    function sc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` && !mi(a) && a.defaultProps === void 0 && n.compare === null
          ? ((t.tag = 15), (t.type = a), cc(e, t, a, r, i))
          : ((e = _i(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !jc(e, i))) {
        var o = a.memoizedProps;
        if (((n = n.compare), (n = n === null ? kr : n), n(o, r) && e.ref === t.ref))
          return Ac(e, t, i);
      }
      return ((t.flags |= 1), (e = hi(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function cc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (kr(a, r) && e.ref === t.ref) {
          if (((ic = !1), (t.pendingProps = r = a), jc(e, i))) e.flags & 131072 && (ic = !0);
          else return ((t.lanes = e.lanes), Ac(e, t, i));
        }
      }
      return gc(e, t, n, r, i);
    }
    function lc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return dc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && xa(t, a === null ? null : a.cachePool),
            a === null ? no() : to(t, a),
            co(t));
        else return ((r = t.lanes = 536870912), dc(e, t, a === null ? n : a.baseLanes | n, n, r));
      } else
        a === null
          ? (e !== null && xa(t, null), no(), lo(t))
          : (xa(t, a.cachePool), to(t, a), lo(t), (t.memoizedState = null));
      return (ac(e, t, i, n), t.child);
    }
    function uc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function dc(e, t, n, r, i) {
      var a = ba();
      return (
        (a = a === null ? null : { parent: R._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && xa(t, null),
        no(),
        co(t),
        e !== null && ta(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function fc(e, t) {
      return (
        (t = Tc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function pc(e, t, n) {
      return (
        za(t, e.child, null, n),
        (e = fc(t, t.pendingProps)),
        (e.flags |= 2),
        uo(t),
        (t.memoizedState = null),
        e
      );
    }
    function mc(e, t, n) {
      var r = t.pendingProps,
        i = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (I) {
          if (r.mode === `hidden`) return ((e = fc(t, r)), (t.lanes = 536870912), uc(null, e));
          if (
            (so(t),
            (e = F)
              ? ((e = rf(e, zi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ai === null ? null : { id: ji, overflow: Mi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = bi(e)),
                  (n.return = t),
                  (t.child = n),
                  (P = t),
                  (F = null)))
              : (e = null),
            e === null)
          )
            throw Vi(t);
          return ((t.lanes = 536870912), null);
        }
        return fc(t, r);
      }
      var a = e.memoizedState;
      if (a !== null) {
        var o = a.dehydrated;
        if ((so(t), i)) {
          if (t.flags & 256) ((t.flags &= -257), (t = pc(e, t, n)));
          else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(s(558));
        } else if ((ic || ta(e, t, n, !1), (i = (n & e.childLanes) !== 0), ic || i)) {
          if (((r = K), r !== null && ((o = ot(r, n)), o !== 0 && o !== a.retryLane)))
            throw ((a.retryLane = o), ci(e, o), hu(r, e, o), rc);
          (Du(), (t = pc(e, t, n)));
        } else
          ((e = a.treeContext),
            (F = cf(o.nextSibling)),
            (P = t),
            (I = !0),
            (Ri = null),
            (zi = !1),
            e !== null && Li(t, e),
            (t = fc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = hi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function hc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(s(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function gc(e, t, n, r, i) {
      return (
        ra(t),
        (n = Co(e, t, n, r, void 0, i)),
        (r = Do()),
        e !== null && !ic
          ? (Oo(e, t, i), Ac(e, t, i))
          : (I && r && Fi(t), (t.flags |= 1), ac(e, t, n, i), t.child)
      );
    }
    function _c(e, t, n, r, i, a) {
      return (
        ra(t),
        (t.updateQueue = null),
        (n = To(t, r, n, i)),
        wo(e),
        (r = Do()),
        e !== null && !ic
          ? (Oo(e, t, a), Ac(e, t, a))
          : (I && r && Fi(t), (t.flags |= 1), ac(e, t, n, a), t.child)
      );
    }
    function vc(e, t, n, r, i) {
      if ((ra(t), t.stateNode === null)) {
        var a = di,
          o = n.contextType;
        (typeof o == `object` && o && (a = L(o)),
          (a = new n(r, a)),
          (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ws),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ha(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? L(o) : di),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` && (Us(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && Ws.enqueueReplaceState(a, a.state, null),
            Xa(t, r, a, i),
            Ya(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = qs(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = di), typeof u == `object` && u && (o = L(u)));
        var d = n.getDerivedStateFromProps;
        ((u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Ks(t, a, r, o)),
          (Va = !1));
        var f = t.memoizedState;
        ((a.state = f),
          Xa(t, r, a, i),
          Ya(),
          (l = t.memoizedState),
          s || f !== l || Va
            ? (typeof d == `function` && (Us(t, n, d, r), (l = t.memoizedState)),
              (c = Va || Gs(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` && a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` && (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), (r = !1)));
      } else {
        ((a = t.stateNode),
          Ua(e, t),
          (o = t.memoizedProps),
          (u = qs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = di),
          typeof l == `object` && l && (c = L(l)),
          (s = n.getDerivedStateFromProps),
          (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Ks(t, a, r, c)),
          (Va = !1),
          (f = t.memoizedState),
          (a.state = f),
          Xa(t, r, a, i),
          Ya());
        var p = t.memoizedState;
        o !== d || f !== p || Va || (e !== null && e.dependencies !== null && na(e.dependencies))
          ? (typeof s == `function` && (Us(t, n, s, r), (p = t.memoizedState)),
            (u =
              Va ||
              Gs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && na(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        hc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = za(t, e.child, null, i)), (t.child = za(t, null, n, i)))
              : ac(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Ac(e, t, i)),
        e
      );
    }
    function yc(e, t, n, r) {
      return (Gi(), (t.flags |= 256), ac(e, t, n, r), t.child);
    }
    var bc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function xc(e) {
      return { baseLanes: e, cachePool: Sa() };
    }
    function Sc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Jl), e);
    }
    function Cc(e, t, n) {
      var r = t.pendingProps,
        i = !1,
        a = !!(t.flags & 128),
        o;
      if (
        ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(z.current & 2)),
        o && ((i = !0), (t.flags &= -129)),
        (o = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (I) {
          if (
            (i ? oo(t) : lo(t),
            (e = F)
              ? ((e = rf(e, zi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ai === null ? null : { id: ji, overflow: Mi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = bi(e)),
                  (n.return = t),
                  (t.child = n),
                  (P = t),
                  (F = null)))
              : (e = null),
            e === null)
          )
            throw Vi(t);
          return (of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          i
            ? (lo(t),
              (i = t.mode),
              (c = Tc({ mode: `hidden`, children: c }, i)),
              (r = vi(r, i, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = xc(n)),
              (r.childLanes = Sc(e, o, n)),
              (t.memoizedState = bc),
              uc(null, r))
            : (oo(t), wc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (a)
          t.flags & 256
            ? (oo(t), (t.flags &= -257), (t = Ec(e, t, n)))
            : t.memoizedState === null
              ? (lo(t),
                (c = r.fallback),
                (i = t.mode),
                (r = Tc({ mode: `visible`, children: r.children }, i)),
                (c = vi(c, i, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                za(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = xc(n)),
                (r.childLanes = Sc(e, o, n)),
                (t.memoizedState = bc),
                (t = uc(null, r)))
              : (lo(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((oo(t), of(c))) {
          if (((o = c.nextSibling && c.nextSibling.dataset), o)) var u = o.dgst;
          ((o = u),
            (r = Error(s(419))),
            (r.stack = ``),
            (r.digest = o),
            qi({ value: r, source: null, stack: null }),
            (t = Ec(e, t, n)));
        } else if ((ic || ta(e, t, n, !1), (o = (n & e.childLanes) !== 0), ic || o)) {
          if (((o = K), o !== null && ((r = ot(o, n)), r !== 0 && r !== l.retryLane)))
            throw ((l.retryLane = r), ci(e, r), hu(o, e, r), rc);
          (af(c) || Du(), (t = Ec(e, t, n)));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (F = cf(c.nextSibling)),
              (P = t),
              (I = !0),
              (Ri = null),
              (zi = !1),
              e !== null && Li(t, e),
              (t = wc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return i
        ? (lo(t),
          (c = r.fallback),
          (i = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = hi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null ? ((c = vi(c, i, n, null)), (c.flags |= 2)) : (c = hi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          uc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = xc(n))
            : ((i = c.cachePool),
              i === null
                ? (i = Sa())
                : ((l = R._currentValue), (i = i.parent === l ? i : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: i })),
          (r.memoizedState = c),
          (r.childLanes = Sc(e, o, n)),
          (t.memoizedState = bc),
          uc(e.child, r))
        : (oo(t),
          (n = e.child),
          (e = n.sibling),
          (n = hi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((o = t.deletions), o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function wc(e, t) {
      return ((t = Tc({ mode: `visible`, children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function Tc(e, t) {
      return ((e = pi(22, e, null, t)), (e.lanes = 0), e);
    }
    function Ec(e, t, n) {
      return (
        za(t, e.child, null, n),
        (e = wc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Dc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), $i(e.return, t, n));
    }
    function Oc(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function kc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = z.current,
        s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        M(z, o),
        ac(e, t, r, n),
        (r = I ? Di : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Dc(e, n, t);
          else if (e.tag === 19) Dc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            ((e = n.alternate), e !== null && fo(e) === null && (i = n), (n = n.sibling));
          ((n = i),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
            Oc(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && fo(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Oc(t, !0, n, null, a, r);
          break;
        case `together`:
          Oc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Ac(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies), (Gl |= t.lanes), (n & t.childLanes) === 0)
      ) {
        if (e !== null) {
          if ((ta(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(s(153));
      if (t.child !== null) {
        for (
          e = t.child, n = hi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling), (n = n.sibling = hi(e, e.pendingProps)), (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function jc(e, t) {
      return (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && na(e)));
    }
    function Mc(e, t, n) {
      switch (t.tag) {
        case 3:
          (he(t, t.stateNode.containerInfo), Zi(t, R, e.memoizedState.cache), Gi());
          break;
        case 27:
        case 5:
          _e(t);
          break;
        case 4:
          he(t, t.stateNode.containerInfo);
          break;
        case 10:
          Zi(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), so(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (oo(t), (e = Ac(e, t, n)), e === null ? null : e.sibling)
                : Cc(e, t, n)
              : (oo(t), (t.flags |= 128), null);
          oo(t);
          break;
        case 19:
          var i = !!(e.flags & 128);
          if (
            ((r = (n & t.childLanes) !== 0), (r ||= (ta(e, t, n, !1), (n & t.childLanes) !== 0)), i)
          ) {
            if (r) return kc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            M(z, z.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), lc(e, t, n, t.pendingProps));
        case 24:
          Zi(t, R, e.memoizedState.cache);
      }
      return Ac(e, t, n);
    }
    function Nc(e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps) ic = !0;
        else {
          if (!jc(e, n) && !(t.flags & 128)) return ((ic = !1), Mc(e, t, n));
          ic = !!(e.flags & 131072);
        }
      } else ((ic = !1), I && t.flags & 1048576 && Pi(t, Di, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = ka(t.elementType)), (t.type = e), typeof e == `function`))
              mi(e)
                ? ((r = qs(e, r)), (t.tag = 1), (t = vc(null, t, e, r, n)))
                : ((t.tag = 0), (t = gc(null, t, e, r, n)));
            else {
              if (e != null) {
                var i = e.$$typeof;
                if (i === w) {
                  ((t.tag = 11), (t = oc(null, t, e, r, n)));
                  break a;
                }
                if (i === D) {
                  ((t.tag = 14), (t = sc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = ae(e) || e), Error(s(306, t, ``)));
            }
          }
          return t;
        case 0:
          return gc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (i = qs(r, t.pendingProps)), vc(e, t, r, i, n));
        case 3:
          a: {
            if ((he(t, t.stateNode.containerInfo), e === null)) throw Error(s(387));
            r = t.pendingProps;
            var a = t.memoizedState;
            ((i = a.element), Ua(e, t), Xa(t, r, null, n));
            var o = t.memoizedState;
            if (
              ((r = o.cache),
              Zi(t, R, r),
              r !== a.cache && ea(t, [R], n, !0),
              Ya(),
              (r = o.element),
              a.isDehydrated)
            ) {
              if (
                ((a = { element: r, isDehydrated: !1, cache: o.cache }),
                (t.updateQueue.baseState = a),
                (t.memoizedState = a),
                t.flags & 256)
              ) {
                t = yc(e, t, r, n);
                break a;
              }
              if (r !== i) {
                ((i = Ci(Error(s(424)), t)), qi(i), (t = yc(e, t, r, n)));
                break a;
              }
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
              }
              for (
                F = cf(e.firstChild),
                  P = t,
                  I = !0,
                  Ri = null,
                  zi = !0,
                  n = Ba(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            } else {
              if ((Gi(), r === i)) {
                t = Ac(e, t, n);
                break a;
              }
              ac(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            hc(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : I ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(pe.current).createElement(n)),
                  (r[ft] = t),
                  (r[pt] = e),
                  Pd(r, n, e),
                  Tt(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
            null
          );
        case 27:
          return (
            _e(t),
            e === null &&
              I &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, pe.current)),
              (P = t),
              (zi = !0),
              (i = F),
              Zd(t.type) ? ((lf = i), (F = cf(r.firstChild))) : (F = i)),
            ac(e, t, t.pendingProps.children, n),
            hc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              I &&
              ((i = r = F) &&
                ((r = tf(r, t.type, t.pendingProps, zi)),
                r === null
                  ? (i = !1)
                  : ((t.stateNode = r), (P = t), (F = cf(r.firstChild)), (zi = !1), (i = !0))),
              i || Vi(t)),
            _e(t),
            (i = t.type),
            (a = t.pendingProps),
            (o = e === null ? null : e.memoizedProps),
            (r = a.children),
            Ud(i, a) ? (r = null) : o !== null && Ud(i, o) && (t.flags |= 32),
            t.memoizedState !== null && ((i = Co(e, t, Eo, null, null, n)), (Qf._currentValue = i)),
            hc(e, t),
            ac(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              I &&
              ((e = n = F) &&
                ((n = nf(n, t.pendingProps, zi)),
                n === null ? (e = !1) : ((t.stateNode = n), (P = t), (F = null), (e = !0))),
              e || Vi(t)),
            null
          );
        case 13:
          return Cc(e, t, n);
        case 4:
          return (
            he(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = za(t, null, r, n)) : ac(e, t, r, n),
            t.child
          );
        case 11:
          return oc(e, t, t.type, t.pendingProps, n);
        case 7:
          return (ac(e, t, t.pendingProps, n), t.child);
        case 8:
          return (ac(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (ac(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return ((r = t.pendingProps), Zi(t, t.type, r.value), ac(e, t, r.children, n), t.child);
        case 9:
          return (
            (i = t.type._context),
            (r = t.pendingProps.children),
            ra(t),
            (i = L(i)),
            (r = r(i)),
            (t.flags |= 1),
            ac(e, t, r, n),
            t.child
          );
        case 14:
          return sc(e, t, t.type, t.pendingProps, n);
        case 15:
          return cc(e, t, t.type, t.pendingProps, n);
        case 19:
          return kc(e, t, n);
        case 31:
          return mc(e, t, n);
        case 22:
          return lc(e, t, n, t.pendingProps);
        case 24:
          return (
            ra(t),
            (r = L(R)),
            e === null
              ? ((i = ba()),
                i === null &&
                  ((i = K),
                  (a = la()),
                  (i.pooledCache = a),
                  a.refCount++,
                  a !== null && (i.pooledCacheLanes |= n),
                  (i = a)),
                (t.memoizedState = { parent: r, cache: i }),
                Ha(t),
                Zi(t, R, i))
              : ((e.lanes & n) !== 0 && (Ua(e, t), Xa(t, null, null, n), Ya()),
                (i = e.memoizedState),
                (a = t.memoizedState),
                i.parent === r
                  ? ((r = a.cache), Zi(t, R, r), r !== i.cache && ea(t, [R], n, !0))
                  : ((i = { parent: r, cache: r }),
                    (t.memoizedState = i),
                    t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                    Zi(t, R, r))),
            ac(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(s(156, t.tag));
    }
    function Pc(e) {
      e.flags |= 4;
    }
    function Fc(e, t, n, r, i) {
      if (((t = !!(e.mode & 32)) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i)) {
          if (e.stateNode.complete) e.flags |= 8192;
          else if (wu()) e.flags |= 8192;
          else throw ((Aa = Ea), wa);
        }
      } else e.flags &= -16777217;
    }
    function Ic(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t))) {
        if (wu()) e.flags |= 8192;
        else throw ((Aa = Ea), wa);
      }
    }
    function Lc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 && ((t = e.tag === 22 ? 536870912 : et()), (e.lanes |= t), (Yl |= t)));
    }
    function Rc(e, t) {
      if (!I)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; ) (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function U(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function zc(e, t, n) {
      var r = t.pendingProps;
      switch ((Ii(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (U(t), null);
        case 1:
          return (U(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Qi(R),
            ge(),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Wi(t)
                ? Pc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Ki())),
            U(t),
            null
          );
        case 26:
          var i = t.type,
            a = t.memoizedState;
          return (
            e === null
              ? (Pc(t), a === null ? (U(t), Fc(t, i, null, r, n)) : (U(t), Ic(t, a)))
              : a
                ? a === e.memoizedState
                  ? (U(t), (t.flags &= -16777217))
                  : (Pc(t), U(t), Ic(t, a))
                : ((e = e.memoizedProps), e !== r && Pc(t), U(t), Fc(t, i, e, r, n)),
            null
          );
        case 27:
          if ((ve(t), (n = pe.current), (i = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Pc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(s(166));
              return (U(t), null);
            }
            ((e = de.current), Wi(t) ? Hi(t, e) : ((e = ff(i, r, n)), (t.stateNode = e), Pc(t)));
          }
          return (U(t), null);
        case 5:
          if ((ve(t), (i = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Pc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(s(166));
              return (U(t), null);
            }
            if (((a = de.current), Wi(t))) Hi(t, a);
            else {
              var o = Bd(pe.current);
              switch (a) {
                case 1:
                  a = o.createElementNS(`http://www.w3.org/2000/svg`, i);
                  break;
                case 2:
                  a = o.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                  break;
                default:
                  switch (i) {
                    case `svg`:
                      a = o.createElementNS(`http://www.w3.org/2000/svg`, i);
                      break;
                    case `math`:
                      a = o.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                      break;
                    case `script`:
                      ((a = o.createElement(`div`)),
                        (a.innerHTML = `<script><\/script>`),
                        (a = a.removeChild(a.firstChild)));
                      break;
                    case `select`:
                      ((a =
                        typeof r.is == `string`
                          ? o.createElement(`select`, { is: r.is })
                          : o.createElement(`select`)),
                        r.multiple ? (a.multiple = !0) : r.size && (a.size = r.size));
                      break;
                    default:
                      a =
                        typeof r.is == `string`
                          ? o.createElement(i, { is: r.is })
                          : o.createElement(i);
                  }
              }
              ((a[ft] = t), (a[pt] = r));
              a: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6) a.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  ((o.child.return = o), (o = o.child));
                  continue;
                }
                if (o === t) break a;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t) break a;
                  o = o.return;
                }
                ((o.sibling.return = o.return), (o = o.sibling));
              }
              t.stateNode = a;
              a: switch ((Pd(a, i, r), i)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Pc(t);
            }
          }
          return (
            U(t),
            Fc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Pc(t);
          else {
            if (typeof r != `string` && t.stateNode === null) throw Error(s(166));
            if (((e = pe.current), Wi(t))) {
              if (((e = t.stateNode), (n = t.memoizedProps), (r = null), (i = P), i !== null))
                switch (i.tag) {
                  case 27:
                  case 5:
                    r = i.memoizedProps;
                }
              ((e[ft] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Md(e.nodeValue, n)
                )),
                e || Vi(t, !0));
            } else ((e = Bd(e).createTextNode(r)), (e[ft] = t), (t.stateNode = e));
          }
          return (U(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Wi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(s(318));
                if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e))
                  throw Error(s(557));
                e[ft] = t;
              } else (Gi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (U(t), (e = !1));
            } else
              ((n = Ki()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (uo(t), t) : (uo(t), null);
            if (t.flags & 128) throw Error(s(558));
          }
          return (U(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((i = Wi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!i) throw Error(s(318));
                if (((i = t.memoizedState), (i = i === null ? null : i.dehydrated), !i))
                  throw Error(s(317));
                i[ft] = t;
              } else (Gi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (U(t), (i = !1));
            } else
              ((i = Ki()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
                (i = !0));
            if (!i) return t.flags & 256 ? (uo(t), t) : (uo(t), null);
          }
          return (
            uo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (i = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (i = r.alternate.memoizedState.cachePool.pool),
                  (a = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (a = r.memoizedState.cachePool.pool),
                  a !== i && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Lc(t, t.updateQueue),
                U(t),
                null)
          );
        case 4:
          return (ge(), e === null && Sd(t.stateNode.containerInfo), U(t), null);
        case 10:
          return (Qi(t.type), U(t), null);
        case 19:
          if ((j(z), (r = t.memoizedState), r === null)) return (U(t), null);
          if (((i = !!(t.flags & 128)), (a = r.rendering), a === null)) {
            if (i) Rc(r, !1);
            else {
              if (X !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((a = fo(e)), a !== null)) {
                    for (
                      t.flags |= 128,
                        Rc(r, !1),
                        e = a.updateQueue,
                        t.updateQueue = e,
                        Lc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (gi(n, e), (n = n.sibling));
                    return (M(z, (z.current & 1) | 2), I && Ni(t, r.treeForkCount), t.child);
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                je() > tu &&
                ((t.flags |= 128), (i = !0), Rc(r, !1), (t.lanes = 4194304));
            }
          } else {
            if (!i) {
              if (((e = fo(a)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (i = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Lc(t, e),
                  Rc(r, !0),
                  r.tail === null && r.tailMode === `hidden` && !a.alternate && !I)
                )
                  return (U(t), null);
              } else
                2 * je() - r.renderingStartTime > tu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (i = !0), Rc(r, !1), (t.lanes = 4194304));
            }
            r.isBackwards
              ? ((a.sibling = t.child), (t.child = a))
              : ((e = r.last), e === null ? (t.child = a) : (e.sibling = a), (r.last = a));
          }
          return r.tail === null
            ? (U(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = je()),
              (e.sibling = null),
              (n = z.current),
              M(z, i ? (n & 1) | 2 : n & 1),
              I && Ni(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            uo(t),
            ro(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 && !(t.flags & 128) && (U(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : U(t),
            (n = t.updateQueue),
            n !== null && Lc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && j(ya),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Qi(R),
            U(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(s(156, t.tag));
    }
    function Bc(e, t) {
      switch ((Ii(t), t.tag)) {
        case 1:
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 3:
          return (
            Qi(R),
            ge(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (ve(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((uo(t), t.alternate === null)) throw Error(s(340));
            Gi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 13:
          if ((uo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(s(340));
            Gi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
          return (j(z), null);
        case 4:
          return (ge(), null);
        case 10:
          return (Qi(t.type), null);
        case 22:
        case 23:
          return (
            uo(t),
            ro(),
            e !== null && j(ya),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (Qi(R), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Vc(e, t) {
      switch ((Ii(t), t.tag)) {
        case 3:
          (Qi(R), ge());
          break;
        case 26:
        case 27:
        case 5:
          ve(t);
          break;
        case 4:
          ge();
          break;
        case 31:
          t.memoizedState !== null && uo(t);
          break;
        case 13:
          uo(t);
          break;
        case 19:
          j(z);
          break;
        case 10:
          Qi(t.type);
          break;
        case 22:
        case 23:
          (uo(t), ro(), e !== null && j(ya));
          break;
        case 24:
          Qi(R);
      }
    }
    function Hc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Uc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Wc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          Qa(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Gc(e, t, n) {
      ((n.props = qs(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Kc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function qc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null) {
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
      }
    }
    function Jc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Yc(e, t, n) {
      try {
        var r = e.stateNode;
        (Fd(r, e.type, n, t), (r[pt] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Xc(e) {
      return (
        e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Zd(e.type)) || e.tag === 4
      );
    }
    function Zc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Xc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if ((e.tag === 27 && Zd(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Qc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = on)));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
      )
        for (Qc(e, t, n), e = e.sibling; e !== null; ) (Qc(e, t, n), (e = e.sibling));
    }
    function $c(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null))
        for ($c(e, t, n), e = e.sibling; e !== null; ) ($c(e, t, n), (e = e.sibling));
    }
    function el(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
        (Pd(t, r, n), (t[ft] = e), (t[pt] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var tl = !1,
      nl = !1,
      rl = !1,
      il = typeof WeakSet == `function` ? WeakSet : Set,
      al = null;
    function ol(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Nr(e)), Pr(e))) {
        if (`selectionStart` in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var i = r.anchorOffset,
                a = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, a.nodeType);
              } catch {
                n = null;
                break a;
              }
              var o = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (i !== 0 && f.nodeType !== 3) || (c = o + i),
                    f !== a || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                    f.nodeType === 3 && (o += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === i && (c = o),
                    p === a && ++d === r && (l = o),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (zd = { focusedElem: e, selectionRange: n }, sp = !1, al = t; al !== null; )
        if (((t = al), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (al = e));
        else
          for (; al !== null; ) {
            switch (((t = al), (a = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (e & 4 && ((e = t.updateQueue), (e = e === null ? null : e.events), e !== null))
                  for (n = 0; n < e.length; n++) ((i = e[n]), (i.ref.impl = i.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && a !== null) {
                  ((e = void 0),
                    (n = t),
                    (i = a.memoizedProps),
                    (a = a.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = qs(n.type, i);
                    ((e = r.getSnapshotBeforeUpdate(h, a)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    Z(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(s(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (al = e));
              break;
            }
            al = t.return;
          }
    }
    function sl(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (xl(e, n), r & 4 && Hc(5, n));
          break;
        case 1:
          if ((xl(e, n), r & 4)) {
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = qs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          }
          (r & 64 && Wc(n), r & 512 && Kc(n, n.return));
          break;
        case 3:
          if ((xl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              Qa(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && el(n);
        case 26:
        case 5:
          (xl(e, n), t === null && r & 4 && Jc(n), r & 512 && Kc(n, n.return));
          break;
        case 12:
          xl(e, n);
          break;
        case 31:
          (xl(e, n), r & 4 && fl(e, n));
          break;
        case 13:
          (xl(e, n),
            r & 4 && pl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated), e !== null && ((n = Ju.bind(null, n)), sf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || tl), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || nl), (i = tl));
            var a = nl;
            ((tl = r),
              (nl = t) && !a ? Cl(e, n, !!(n.subtreeFlags & 8772)) : xl(e, n),
              (tl = i),
              (nl = a));
          }
          break;
        case 30:
          break;
        default:
          xl(e, n);
      }
    }
    function cl(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), cl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && bt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var W = null,
      ll = !1;
    function ul(e, t, n) {
      for (n = n.child; n !== null; ) (dl(e, t, n), (n = n.sibling));
    }
    function dl(e, t, n) {
      if (Ve && typeof Ve.onCommitFiberUnmount == `function`)
        try {
          Ve.onCommitFiberUnmount(Be, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (nl || qc(n, t),
            ul(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          nl || qc(n, t);
          var r = W,
            i = ll;
          (Zd(n.type) && ((W = n.stateNode), (ll = !1)),
            ul(e, t, n),
            pf(n.stateNode),
            (W = r),
            (ll = i));
          break;
        case 5:
          nl || qc(n, t);
        case 6:
          if (((r = W), (i = ll), (W = null), ul(e, t, n), (W = r), (ll = i), W !== null)) {
            if (ll)
              try {
                (W.nodeType === 9
                  ? W.body
                  : W.nodeName === `HTML`
                    ? W.ownerDocument.body
                    : W
                ).removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                W.removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
          }
          break;
        case 18:
          W !== null &&
            (ll
              ? ((e = W),
                Qd(
                  e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e,
                  n.stateNode,
                ),
                Np(e))
              : Qd(W, n.stateNode));
          break;
        case 4:
          ((r = W),
            (i = ll),
            (W = n.stateNode.containerInfo),
            (ll = !0),
            ul(e, t, n),
            (W = r),
            (ll = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Uc(2, n, t), nl || Uc(4, n, t), ul(e, t, n));
          break;
        case 1:
          (nl ||
            (qc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Gc(n, t, r)),
            ul(e, t, n));
          break;
        case 21:
          ul(e, t, n);
          break;
        case 22:
          ((nl = (r = nl) || n.memoizedState !== null), ul(e, t, n), (nl = r));
          break;
        default:
          ul(e, t, n);
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function pl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function ml(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new il()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new il()),
            t
          );
        default:
          throw Error(s(435, e.tag));
      }
    }
    function hl(e, t) {
      var n = ml(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Yu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function gl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = e,
            o = t,
            c = o;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  ((W = c.stateNode), (ll = !1));
                  break a;
                }
                break;
              case 5:
                ((W = c.stateNode), (ll = !1));
                break a;
              case 3:
              case 4:
                ((W = c.stateNode.containerInfo), (ll = !0));
                break a;
            }
            c = c.return;
          }
          if (W === null) throw Error(s(160));
          (dl(a, o, i),
            (W = null),
            (ll = !1),
            (a = i.alternate),
            a !== null && (a.return = null),
            (i.return = null));
        }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (vl(t, e), (t = t.sibling));
    }
    var _l = null;
    function vl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (gl(t, e), yl(e), r & 4 && (Uc(3, e, e.return), Hc(3, e), Uc(5, e, e.return)));
          break;
        case 1:
          (gl(t, e),
            yl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            r & 64 &&
              tl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var i = _l;
          if ((gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), r & 4)) {
            var a = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null)) {
              if (r === null) {
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type), (n = e.memoizedProps), (i = i.ownerDocument || i));
                    b: switch (r) {
                      case `title`:
                        ((a = i.getElementsByTagName(`title`)[0]),
                          (!a ||
                            a[yt] ||
                            a[ft] ||
                            a.namespaceURI === `http://www.w3.org/2000/svg` ||
                            a.hasAttribute(`itemprop`)) &&
                            ((a = i.createElement(r)),
                            i.head.insertBefore(a, i.querySelector(`head > title`))),
                          Pd(a, r, n),
                          (a[ft] = e),
                          Tt(a),
                          (r = a));
                        break a;
                      case `link`:
                        var o = Vf(`link`, `href`, i).get(r + (n.href || ``));
                        if (o) {
                          for (var c = 0; c < o.length; c++)
                            if (
                              ((a = o[c]),
                              a.getAttribute(`href`) ===
                                (n.href == null || n.href === `` ? null : n.href) &&
                                a.getAttribute(`rel`) === (n.rel == null ? null : n.rel) &&
                                a.getAttribute(`title`) === (n.title == null ? null : n.title) &&
                                a.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null ? null : n.crossOrigin))
                            ) {
                              o.splice(c, 1);
                              break b;
                            }
                        }
                        ((a = i.createElement(r)), Pd(a, r, n), i.head.appendChild(a));
                        break;
                      case `meta`:
                        if ((o = Vf(`meta`, `content`, i).get(r + (n.content || ``)))) {
                          for (c = 0; c < o.length; c++)
                            if (
                              ((a = o[c]),
                              a.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                a.getAttribute(`name`) === (n.name == null ? null : n.name) &&
                                a.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                a.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                a.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              o.splice(c, 1);
                              break b;
                            }
                        }
                        ((a = i.createElement(r)), Pd(a, r, n), i.head.appendChild(a));
                        break;
                      default:
                        throw Error(s(468, r));
                    }
                    ((a[ft] = e), Tt(a), (r = a));
                  }
                  e.stateNode = r;
                } else Hf(i, e.type, e.stateNode);
              } else e.stateNode = If(i, r, e.memoizedProps);
            } else
              a === r
                ? r === null && e.stateNode !== null && Yc(e, e.memoizedProps, n.memoizedProps)
                : (a === null
                    ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                    : a.count--,
                  r === null ? Hf(i, e.type, e.stateNode) : If(i, r, e.memoizedProps));
          }
          break;
        case 27:
          (gl(t, e),
            yl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            n !== null && r & 4 && Yc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if ((gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), e.flags & 32)) {
            i = e.stateNode;
            try {
              Zt(i, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((i = e.memoizedProps), Yc(e, i, n === null ? i : n.memoizedProps)),
            r & 1024 && (rl = !0));
          break;
        case 6:
          if ((gl(t, e), yl(e), r & 4)) {
            if (e.stateNode === null) throw Error(s(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (i = _l),
            (_l = gf(t.containerInfo)),
            gl(t, e),
            (_l = i),
            yl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          rl && ((rl = !1), bl(e));
          break;
        case 4:
          ((r = _l), (_l = gf(e.stateNode.containerInfo)), gl(t, e), yl(e), (_l = r));
          break;
        case 12:
          (gl(t, e), yl(e));
          break;
        case 31:
          (gl(t, e),
            yl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 13:
          (gl(t, e),
            yl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
              ($l = je()),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 22:
          i = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = tl,
            d = nl;
          if (((tl = u || i), (nl = d || l), gl(t, e), (nl = d), (tl = u), yl(e), r & 8192))
            a: for (
              t = e.stateNode,
                t._visibility = i ? t._visibility & -2 : t._visibility | 1,
                i && (n === null || l || tl || nl || Sl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((a = l.stateNode), i))
                      ((o = a.style),
                        typeof o.setProperty == `function`
                          ? o.setProperty(`display`, `none`, `important`)
                          : (o.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p = f != null && f.hasOwnProperty(`display`) ? f.display : null;
                      c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim();
                    }
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = i ? `` : l.memoizedProps;
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    i ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((n = r.retryQueue), n !== null && ((r.retryQueue = null), hl(e, n))));
          break;
        case 19:
          (gl(t, e),
            yl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (gl(t, e), yl(e));
      }
    }
    function yl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (Xc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(s(160));
          switch (n.tag) {
            case 27:
              var i = n.stateNode;
              $c(e, Zc(e), i);
              break;
            case 5:
              var a = n.stateNode;
              (n.flags & 32 && (Zt(a, ``), (n.flags &= -33)), $c(e, Zc(e), a));
              break;
            case 3:
            case 4:
              var o = n.stateNode.containerInfo;
              Qc(e, Zc(e), o);
              break;
            default:
              throw Error(s(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function bl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          (bl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
        }
    }
    function xl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; ) (sl(e, t.alternate, t), (t = t.sibling));
    }
    function Sl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Uc(4, t, t.return), Sl(t));
            break;
          case 1:
            qc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Gc(t, t.return, n), Sl(t));
            break;
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            (qc(t, t.return), Sl(t));
            break;
          case 22:
            t.memoizedState === null && Sl(t);
            break;
          case 30:
            Sl(t);
            break;
          default:
            Sl(t);
        }
        e = e.sibling;
      }
    }
    function Cl(e, t, n) {
      for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Cl(i, a, n), Hc(4, a));
            break;
          case 1:
            if ((Cl(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) Za(c[i], s);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (n && o & 64 && Wc(a), Kc(a, a.return));
            break;
          case 27:
            el(a);
          case 26:
          case 5:
            (Cl(i, a, n), n && r === null && o & 4 && Jc(a), Kc(a, a.return));
            break;
          case 12:
            Cl(i, a, n);
            break;
          case 31:
            (Cl(i, a, n), n && o & 4 && fl(i, a));
            break;
          case 13:
            (Cl(i, a, n), n && o & 4 && pl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Cl(i, a, n), Kc(a, a.return));
            break;
          case 30:
            break;
          default:
            Cl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function wl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ua(n)));
    }
    function Tl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ua(e)));
    }
    function El(e, t, n, r) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Dl(e, t, n, r), (t = t.sibling));
    }
    function Dl(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (El(e, t, n, r), i & 2048 && Hc(9, t));
          break;
        case 1:
          El(e, t, n, r);
          break;
        case 3:
          (El(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ua(e))));
          break;
        case 12:
          if (i & 2048) {
            (El(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0);
            } catch (e) {
              Z(t, t.return, e);
            }
          } else El(e, t, n, r);
          break;
        case 31:
          El(e, t, n, r);
          break;
        case 13:
          El(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? El(e, t, n, r)
                : ((a._visibility |= 2), Ol(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))
              : a._visibility & 2
                ? El(e, t, n, r)
                : kl(e, t),
            i & 2048 && wl(o, t));
          break;
        case 24:
          (El(e, t, n, r), i & 2048 && Tl(t.alternate, t));
          break;
        default:
          El(e, t, n, r);
      }
    }
    function Ol(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null; ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Ol(a, o, s, c, i), Hc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Ol(a, o, s, c, i))
              : u._visibility & 2
                ? Ol(a, o, s, c, i)
                : kl(a, o),
              i && l & 2048 && wl(o.alternate, o));
            break;
          case 24:
            (Ol(a, o, s, c, i), i && l & 2048 && Tl(o.alternate, o));
            break;
          default:
            Ol(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function kl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (kl(n, r), i & 2048 && wl(r.alternate, r));
              break;
            case 24:
              (kl(n, r), i & 2048 && Tl(r.alternate, r));
              break;
            default:
              kl(n, r);
          }
          t = t.sibling;
        }
    }
    var Al = 8192;
    function jl(e, t, n) {
      if (e.subtreeFlags & Al) for (e = e.child; e !== null; ) (Ml(e, t, n), (e = e.sibling));
    }
    function Ml(e, t, n) {
      switch (e.tag) {
        case 26:
          (jl(e, t, n),
            e.flags & Al &&
              e.memoizedState !== null &&
              Gf(n, _l, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          jl(e, t, n);
          break;
        case 3:
        case 4:
          var r = _l;
          ((_l = gf(e.stateNode.containerInfo)), jl(e, t, n), (_l = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Al), (Al = 16777216), jl(e, t, n), (Al = r))
              : jl(e, t, n));
          break;
        default:
          jl(e, t, n);
      }
    }
    function Nl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Pl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((al = r), Ll(r, e));
          }
        Nl(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Fl(e), (e = e.sibling));
    }
    function Fl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Pl(e), e.flags & 2048 && Uc(9, e, e.return));
          break;
        case 3:
          Pl(e);
          break;
        case 12:
          Pl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Il(e))
            : Pl(e);
          break;
        default:
          Pl(e);
      }
    }
    function Il(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((al = r), Ll(r, e));
          }
        Nl(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Uc(8, t, t.return), Il(t));
            break;
          case 22:
            ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Il(t)));
            break;
          default:
            Il(t);
        }
        e = e.sibling;
      }
    }
    function Ll(e, t) {
      for (; al !== null; ) {
        var n = al;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Uc(8, n, t);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ua(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (al = r));
        else
          a: for (n = e; al !== null; ) {
            r = al;
            var i = r.sibling,
              a = r.return;
            if ((cl(r), r === n)) {
              al = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (al = i));
              break a;
            }
            al = a;
          }
      }
    }
    var Rl = {
        getCacheForType: function (e) {
          var t = L(R),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return L(R).controller.signal;
        },
      },
      zl = typeof WeakMap == `function` ? WeakMap : Map,
      G = 0,
      K = null,
      q = null,
      J = 0,
      Y = 0,
      Bl = null,
      Vl = !1,
      Hl = !1,
      Ul = !1,
      Wl = 0,
      X = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = null,
      Zl = null,
      Ql = !1,
      $l = 0,
      eu = 0,
      tu = 1 / 0,
      nu = null,
      ru = null,
      iu = 0,
      au = null,
      ou = null,
      su = 0,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = null;
    function pu() {
      return G & 2 && J !== 0 ? J & -J : k.T === null ? lt() : dd();
    }
    function mu() {
      if (Jl === 0) {
        if (!(J & 536870912) || I) {
          var e = Je;
          ((Je <<= 1), !(Je & 3932160) && (Je = 262144), (Jl = e));
        } else Jl = 536870912;
      }
      return ((e = io.current), e !== null && (e.flags |= 32), Jl);
    }
    function hu(e, t, n) {
      (((e === K && (Y === 2 || Y === 9)) || e.cancelPendingCommit !== null) &&
        (Su(e, 0), yu(e, J, Jl, !1)),
        nt(e, n),
        (!(G & 2) || e !== K) &&
          (e === K && (!(G & 2) && (Kl |= n), X === 4 && yu(e, J, Jl, !1)), rd(e)));
    }
    function gu(e, t, n) {
      if (G & 6) throw Error(s(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || Qe(e, t),
        i = r ? Au(e, t) : Ou(e, t, !0),
        a = r;
      do {
        if (i === 0) {
          Hl && !r && yu(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), a && !vu(n))) {
          ((i = Ou(e, t, !1)), (a = !1));
          continue;
        }
        if (i === 2) {
          if (((a = t), e.errorRecoveryDisabledLanes & a)) var o = 0;
          else
            ((o = e.pendingLanes & -536870913),
              (o = o === 0 ? (o & 536870912 ? 536870912 : 0) : o));
          if (o !== 0) {
            t = o;
            a: {
              var c = e;
              i = Xl;
              var l = c.current.memoizedState.isDehydrated;
              if ((l && (Su(c, o).flags |= 256), (o = Ou(c, o, !1)), o !== 2)) {
                if (Ul && !l) {
                  ((c.errorRecoveryDisabledLanes |= a), (Kl |= a), (i = 4));
                  break a;
                }
                ((a = Zl), (Zl = i), a !== null && (Zl === null ? (Zl = a) : Zl.push.apply(Zl, a)));
              }
              i = o;
            }
            if (((a = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (Su(e, 0), yu(e, t, 0, !0));
          break;
        }
        a: {
          switch (((r = e), (a = i), a)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              yu(r, t, Jl, !Vl);
              break a;
            case 2:
              Zl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((i = $l + 300 - je()), 10 < i)) {
            if ((yu(r, t, Jl, !Vl), Ze(r, 0, !0) !== 0)) break a;
            ((su = t),
              (r.timeoutHandle = Kd(
                _u.bind(null, r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Vl, a, `Throttled`, -0, 0),
                i,
              )));
            break a;
          }
          _u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Vl, a, null, -0, 0);
        }
        break;
      } while (1);
      rd(e);
    }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (((e.timeoutHandle = -1), (d = t.subtreeFlags), d & 8192 || (d & 16785408) == 16785408)) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: on,
        }),
          Ml(t, a, d));
        var m = (a & 62914560) === a ? $l - je() : (a & 4194048) === a ? eu - je() : 0;
        if (((m = qf(d, m)), m !== null)) {
          ((su = a),
            (e.cancelPendingCommit = m(Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p))),
            yu(e, a, o, !l));
          return;
        }
      }
      Lu(e, t, a, n, r, i, o, s, c);
    }
    function vu(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Or(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function yu(e, t, n, r) {
      ((t &= ~ql),
        (t &= ~Kl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i; ) {
        var a = 31 - Ue(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && it(e, n, t);
    }
    function bu() {
      return G & 6 ? !0 : (id(0, !1), !1);
    }
    function xu() {
      if (q !== null) {
        if (Y === 0) var e = q.return;
        else ((e = q), (Xi = Yi = null), ko(e), (Na = null), (Pa = 0), (e = q));
        for (; e !== null; ) (Vc(e.alternate, e), (e = e.return));
        q = null;
      }
    }
    function Su(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (su = 0),
        xu(),
        (K = e),
        (q = n = hi(e.current, null)),
        (J = t),
        (Y = 0),
        (Bl = null),
        (Vl = !1),
        (Hl = Qe(e, t)),
        (Ul = !1),
        (Yl = Jl = ql = Kl = Gl = X = 0),
        (Zl = Xl = null),
        (Ql = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - Ue(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Wl = t), ai(), n);
    }
    function Cu(e, t) {
      ((B = null),
        (k.H = zs),
        t === Ca || t === Ta
          ? ((t = ja()), (Y = 3))
          : t === wa
            ? ((t = ja()), (Y = 4))
            : (Y = t === rc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1),
        (Bl = t),
        q === null && ((X = 1), Zs(e, Ci(t, e.current))));
    }
    function wu() {
      var e = io.current;
      return e === null
        ? !0
        : (J & 4194048) === J
          ? ao === null
          : (J & 62914560) === J || J & 536870912
            ? e === ao
            : !1;
    }
    function Tu() {
      var e = k.H;
      return ((k.H = zs), e === null ? zs : e);
    }
    function Eu() {
      var e = k.A;
      return ((k.A = Rl), e);
    }
    function Du() {
      ((X = 4),
        Vl || ((J & 4194048) !== J && io.current !== null) || (Hl = !0),
        (!(Gl & 134217727) && !(Kl & 134217727)) || K === null || yu(K, J, Jl, !1));
    }
    function Ou(e, t, n) {
      var r = G;
      G |= 2;
      var i = Tu(),
        a = Eu();
      ((K !== e || J !== t) && ((nu = null), Su(e, t)), (t = !1));
      var o = X;
      a: do
        try {
          if (Y !== 0 && q !== null) {
            var s = q,
              c = Bl;
            switch (Y) {
              case 8:
                (xu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                io.current === null && (t = !0);
                var l = Y;
                if (((Y = 0), (Bl = null), Pu(e, s, c, l), n && Hl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = Y), (Y = 0), (Bl = null), Pu(e, s, c, l));
            }
          }
          (ku(), (o = X));
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Xi = Yi = null),
        (G = r),
        (k.H = i),
        (k.A = a),
        q === null && ((K = null), (J = 0), ai()),
        o
      );
    }
    function ku() {
      for (; q !== null; ) Mu(q);
    }
    function Au(e, t) {
      var n = G;
      G |= 2;
      var r = Tu(),
        i = Eu();
      K !== e || J !== t ? ((nu = null), (tu = je() + 500), Su(e, t)) : (Hl = Qe(e, t));
      a: do
        try {
          if (Y !== 0 && q !== null) {
            t = q;
            var a = Bl;
            b: switch (Y) {
              case 1:
                ((Y = 0), (Bl = null), Pu(e, t, a, 1));
                break;
              case 2:
              case 9:
                if (Da(a)) {
                  ((Y = 0), (Bl = null), Nu(t));
                  break;
                }
                ((t = function () {
                  ((Y !== 2 && Y !== 9) || K !== e || (Y = 7), rd(e));
                }),
                  a.then(t, t));
                break a;
              case 3:
                Y = 7;
                break a;
              case 4:
                Y = 5;
                break a;
              case 7:
                Da(a) ? ((Y = 0), (Bl = null), Nu(t)) : ((Y = 0), (Bl = null), Pu(e, t, a, 7));
                break;
              case 5:
                var o = null;
                switch (q.tag) {
                  case 26:
                    o = q.memoizedState;
                  case 5:
                  case 27:
                    var c = q;
                    if (o ? Wf(o) : c.stateNode.complete) {
                      ((Y = 0), (Bl = null));
                      var l = c.sibling;
                      if (l !== null) q = l;
                      else {
                        var u = c.return;
                        u === null ? (q = null) : ((q = u), Fu(u));
                      }
                      break b;
                    }
                }
                ((Y = 0), (Bl = null), Pu(e, t, a, 5));
                break;
              case 6:
                ((Y = 0), (Bl = null), Pu(e, t, a, 6));
                break;
              case 8:
                (xu(), (X = 6));
                break a;
              default:
                throw Error(s(462));
            }
          }
          ju();
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        (Xi = Yi = null),
        (k.H = r),
        (k.A = i),
        (G = n),
        q === null ? ((K = null), (J = 0), ai(), X) : 0
      );
    }
    function ju() {
      for (; q !== null && !ke(); ) Mu(q);
    }
    function Mu(e) {
      var t = Nc(e.alternate, e, Wl);
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (q = t));
    }
    function Nu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = _c(n, t, t.pendingProps, t.type, void 0, J);
          break;
        case 11:
          t = _c(n, t, t.pendingProps, t.type.render, t.ref, J);
          break;
        case 5:
          ko(t);
        default:
          (Vc(n, t), (t = q = gi(t, Wl)), (t = Nc(n, t, Wl)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (q = t));
    }
    function Pu(e, t, n, r) {
      ((Xi = Yi = null), ko(t), (Na = null), (Pa = 0));
      var i = t.return;
      try {
        if (nc(e, i, t, n, J)) {
          ((X = 1), Zs(e, Ci(n, e.current)), (q = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((q = i), t);
        ((X = 1), Zs(e, Ci(n, e.current)), (q = null));
        return;
      }
      t.flags & 32768
        ? (I || r === 1
            ? (e = !0)
            : Hl || J & 536870912
              ? (e = !1)
              : ((Vl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = io.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
          Iu(t, e))
        : Fu(t);
    }
    function Fu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Iu(t, Vl);
          return;
        }
        e = t.return;
        var n = zc(t.alternate, t, Wl);
        if (n !== null) {
          q = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          q = t;
          return;
        }
        q = t = e;
      } while (t !== null);
      X === 0 && (X = 5);
    }
    function Iu(e, t) {
      do {
        var n = Bc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (q = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          q = e;
          return;
        }
        q = e = n;
      } while (e !== null);
      ((X = 6), (q = null));
    }
    function Lu(e, t, n, r, i, a, o, c, l) {
      e.cancelPendingCommit = null;
      do Hu();
      while (iu !== 0);
      if (G & 6) throw Error(s(327));
      if (t !== null) {
        if (t === e.current) throw Error(s(177));
        if (
          ((a = t.lanes | t.childLanes),
          (a |= ii),
          rt(e, n, a, o, c, l),
          e === K && ((q = K = null), (J = 0)),
          (ou = t),
          (au = e),
          (su = n),
          (cu = a),
          (lu = i),
          (uu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Xu(Fe, function () {
                return (Uu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = k.T), (k.T = null), (i = A.p), (A.p = 2), (o = G), (G |= 4));
          try {
            ol(e, t, n);
          } finally {
            ((G = o), (A.p = i), (k.T = r));
          }
        }
        ((iu = 1), Ru(), zu(), Bu());
      }
    }
    function Ru() {
      if (iu === 1) {
        iu = 0;
        var e = au,
          t = ou,
          n = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || n) {
          ((n = k.T), (k.T = null));
          var r = A.p;
          A.p = 2;
          var i = G;
          G |= 4;
          try {
            vl(t, e);
            var a = zd,
              o = Nr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (o !== s && s && s.ownerDocument && Mr(s.ownerDocument.documentElement, s)) {
              if (c !== null && Pr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l), (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = jr(s, h),
                      v = jr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 && d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
                var b = d[s];
                ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
              }
            }
            ((sp = !!Rd), (zd = Rd = null));
          } finally {
            ((G = i), (A.p = r), (k.T = n));
          }
        }
        ((e.current = t), (iu = 2));
      }
    }
    function zu() {
      if (iu === 2) {
        iu = 0;
        var e = au,
          t = ou,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = k.T), (k.T = null));
          var r = A.p;
          A.p = 2;
          var i = G;
          G |= 4;
          try {
            sl(e, t.alternate, t);
          } finally {
            ((G = i), (A.p = r), (k.T = n));
          }
        }
        iu = 3;
      }
    }
    function Bu() {
      if (iu === 4 || iu === 3) {
        ((iu = 0), Ae());
        var e = au,
          t = ou,
          n = su,
          r = uu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (iu = 5)
          : ((iu = 0), (ou = au = null), Vu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (ru = null),
          ct(n),
          (t = t.stateNode),
          Ve && typeof Ve.onCommitFiberRoot == `function`)
        )
          try {
            Ve.onCommitFiberRoot(Be, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = k.T), (i = A.p), (A.p = 2), (k.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((k.T = t), (A.p = i));
          }
        }
        (su & 3 && Hu(),
          rd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42 ? (e === fu ? du++ : ((du = 0), (fu = e))) : (du = 0),
          id(0, !1));
      }
    }
    function Vu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ua(t)));
    }
    function Hu() {
      return (Ru(), zu(), Bu(), Uu());
    }
    function Uu() {
      if (iu !== 5) return !1;
      var e = au,
        t = cu;
      cu = 0;
      var n = ct(su),
        r = k.T,
        i = A.p;
      try {
        ((A.p = 32 > n ? 32 : n), (k.T = null), (n = lu), (lu = null));
        var a = au,
          o = su;
        if (((iu = 0), (ou = au = null), (su = 0), G & 6)) throw Error(s(331));
        var c = G;
        if (
          ((G |= 4),
          Fl(a.current),
          Dl(a, a.current, o, n),
          (G = c),
          id(0, !1),
          Ve && typeof Ve.onPostCommitFiberRoot == `function`)
        )
          try {
            Ve.onPostCommitFiberRoot(Be, a);
          } catch {}
        return !0;
      } finally {
        ((A.p = i), (k.T = r), Vu(e, t));
      }
    }
    function Wu(e, t, n) {
      ((t = Ci(n, t)),
        (t = $s(e.stateNode, t, 2)),
        (e = Ga(e, t, 2)),
        e !== null && (nt(e, 2), rd(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) Wu(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Wu(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` && (ru === null || !ru.has(r)))
            ) {
              ((e = Ci(n, e)),
                (n = ec(2)),
                (r = Ga(t, n, 2)),
                r !== null && (tc(n, r, t, e), nt(r, 2), rd(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Gu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new zl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || ((Ul = !0), i.add(n), (e = Ku.bind(null, e, t, n)), t.then(e, e));
    }
    function Ku(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        K === e &&
          (J & n) === n &&
          (X === 4 || (X === 3 && (J & 62914560) === J && 300 > je() - $l)
            ? !(G & 2) && Su(e, 0)
            : (ql |= n),
          Yl === J && (Yl = 0)),
        rd(e));
    }
    function qu(e, t) {
      (t === 0 && (t = et()), (e = ci(e, t)), e !== null && (nt(e, t), rd(e)));
    }
    function Ju(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), qu(e, n));
    }
    function Yu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            i = e.memoizedState;
          i !== null && (n = i.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(s(314));
      }
      (r !== null && r.delete(t), qu(e, n));
    }
    function Xu(e, t) {
      return De(e, t);
    }
    var Zu = null,
      Qu = null,
      $u = !1,
      ed = !1,
      td = !1,
      nd = 0;
    function rd(e) {
      (e !== Qu && e.next === null && (Qu === null ? (Zu = Qu = e) : (Qu = Qu.next = e)),
        (ed = !0),
        $u || (($u = !0), ud()));
    }
    function id(e, t) {
      if (!td && ed) {
        td = !0;
        do
          for (var n = !1, r = Zu; r !== null; ) {
            if (!t) {
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Ue(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), ld(r, a));
              } else
                ((a = J),
                  (a = Ze(
                    r,
                    r === K ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || Qe(r, a) || ((n = !0), ld(r, a)));
            }
            r = r.next;
          }
        while (n);
        td = !1;
      }
    }
    function ad() {
      od();
    }
    function od() {
      ed = $u = !1;
      var e = 0;
      nd !== 0 && Gd() && (e = nd);
      for (var t = je(), n = null, r = Zu; r !== null; ) {
        var i = r.next,
          a = sd(r, t);
        (a === 0
          ? ((r.next = null), n === null ? (Zu = i) : (n.next = i), i === null && (Qu = n))
          : ((n = r), (e !== 0 || a & 3) && (ed = !0)),
          (r = i));
      }
      ((iu !== 0 && iu !== 5) || id(e, !1), nd !== 0 && (nd = 0));
    }
    function sd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Ue(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = $e(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = K),
        (n = J),
        (n = Ze(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        (r = e.callbackNode),
        n === 0 || (e === t && (Y === 2 || Y === 9)) || e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Oe(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || Qe(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Oe(r), ct(n))) {
          case 2:
          case 8:
            n = Pe;
            break;
          case 32:
            n = Fe;
            break;
          case 268435456:
            n = Le;
            break;
          default:
            n = Fe;
        }
        return (
          (r = cd.bind(null, e)),
          (n = De(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Oe(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function cd(e, t) {
      if (iu !== 0 && iu !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Hu() && e.callbackNode !== n) return null;
      var r = J;
      return (
        (r = Ze(e, e === K ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        r === 0
          ? null
          : (gu(e, r, t),
            sd(e, je()),
            e.callbackNode != null && e.callbackNode === n ? cd.bind(null, e) : null)
      );
    }
    function ld(e, t) {
      if (Hu()) return null;
      gu(e, t, !0);
    }
    function ud() {
      Yd(function () {
        G & 6 ? De(Ne, ad) : od();
      });
    }
    function dd() {
      if (nd === 0) {
        var e = pa;
        (e === 0 && ((e = qe), (qe <<= 1), !(qe & 261888) && (qe = 256)), (nd = e));
      }
      return nd;
    }
    function fd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : an(`` + e);
    }
    function pd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function md(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[pt] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[pt] || null) ? fd(t.formAction) : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new Dn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (nd !== 0) {
                    var e = o ? pd(i, o) : new FormData(i);
                    Ts(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? pd(i, o) : new FormData(i)),
                    Ts(n, { pending: !0, data: e, method: i.method, action: a }, a, e));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var hd = 0; hd < $r.length; hd++) {
      var gd = $r[hd];
      ei(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
    }
    (ei(Kr, `onAnimationEnd`),
      ei(qr, `onAnimationIteration`),
      ei(Jr, `onAnimationStart`),
      ei(`dblclick`, `onDoubleClick`),
      ei(`focusin`, `onFocus`),
      ei(`focusout`, `onBlur`),
      ei(Yr, `onTransitionRun`),
      ei(N, `onTransitionStart`),
      ei(Xr, `onTransitionCancel`),
      ei(Zr, `onTransitionEnd`),
      kt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      kt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      kt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      kt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Ot(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(` `),
      ),
      Ot(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Ot(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Ot(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
      Ot(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Ot(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `),
      ));
    var _d =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      vd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d),
      );
    function yd(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped())) break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ti(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ti(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[ht];
      n === void 0 && (n = t[ht] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Cd(t, e, 2, !1), n.add(r));
    }
    function bd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Cd(n, e, r, t));
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) {
      if (!e[xd]) {
        ((e[xd] = !0),
          Et.forEach(function (t) {
            t !== `selectionchange` && (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xd] || ((t[xd] = !0), bd(`selectionchange`, !1, t));
      }
    }
    function Cd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp;
          break;
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !gn || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function wd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i) break;
            if (o === 4)
              for (o = r.return; o !== null; ) {
                var c = o.tag;
                if ((c === 3 || c === 4) && o.stateNode.containerInfo === i) return;
                o = o.return;
              }
            for (; s !== null; ) {
              if (((o = xt(s)), o === null)) return;
              if (((c = o.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
                r = a = o;
                continue a;
              }
              s = s.parentNode;
            }
          }
          r = r.return;
        }
      pn(function () {
        var r = a,
          i = cn(n),
          o = [];
        a: {
          var s = Qr.get(e);
          if (s !== void 0) {
            var c = Dn,
              u = e;
            switch (e) {
              case `keypress`:
                if (Sn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                c = Gn;
                break;
              case `focusin`:
                ((u = `focus`), (c = In));
                break;
              case `focusout`:
                ((u = `blur`), (c = In));
                break;
              case `beforeblur`:
              case `afterblur`:
                c = In;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                c = Pn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                c = Fn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                c = qn;
                break;
              case Kr:
              case qr:
              case Jr:
                c = Ln;
                break;
              case Zr:
                c = Jn;
                break;
              case `scroll`:
              case `scrollend`:
                c = kn;
                break;
              case `wheel`:
                c = Yn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                c = Rn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                c = Kn;
                break;
              case `toggle`:
              case `beforetoggle`:
                c = Xn;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (s === null ? null : s + `Capture`) : s;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = mn(m, p)), g != null && d.push(Td(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length && ((s = new c(s, u, null, n, i)), o.push({ event: s, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((s = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              s && n !== sn && (u = n.relatedTarget || n.fromElement) && (xt(u) || u[mt]))
            )
              break a;
            if (
              (c || s) &&
              ((s =
                i.window === i
                  ? i
                  : (s = i.ownerDocument)
                    ? s.defaultView || s.parentWindow
                    : window),
              c
                ? ((u = n.relatedTarget || n.toElement),
                  (c = r),
                  (u = u ? xt(u) : null),
                  u !== null &&
                    ((f = l(u)), (d = u.tag), u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((c = null), (u = r)),
              c !== u)
            ) {
              if (
                ((d = Pn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Kn), (g = `onPointerLeave`), (p = `onPointerEnter`), (m = `pointer`)),
                (f = c == null ? s : Ct(c)),
                (h = u == null ? s : Ct(u)),
                (s = new d(g, m + `leave`, c, n, i)),
                (s.target = f),
                (s.relatedTarget = h),
                (g = null),
                xt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                c && u)
              )
                b: {
                  for (d = Dd, p = c, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g; ) ((p = d(p)), h--);
                  for (; 0 < g - h; ) ((m = d(m)), g--);
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (c !== null && Od(o, s, c, d, !1), u !== null && f !== null && Od(o, f, u, d, !0));
            }
          }
          a: {
            if (
              ((s = r ? Ct(r) : window),
              (c = s.nodeName && s.nodeName.toLowerCase()),
              c === `select` || (c === `input` && s.type === `file`))
            )
              var v = gr;
            else if (ur(s)) {
              if (_r) v = Er;
              else {
                v = wr;
                var y = Cr;
              }
            } else
              ((c = s.nodeName),
                !c || c.toLowerCase() !== `input` || (s.type !== `checkbox` && s.type !== `radio`)
                  ? r && tn(r.elementType) && (v = gr)
                  : (v = Tr));
            if ((v &&= v(e, r))) {
              dr(o, v, n, i);
              break a;
            }
            (y && y(e, s, r),
              e === `focusout` &&
                r &&
                s.type === `number` &&
                r.memoizedProps.value != null &&
                qt(s, `number`, s.value));
          }
          switch (((y = r ? Ct(r) : window), e)) {
            case `focusin`:
              (ur(y) || y.contentEditable === `true`) && ((Ir = y), (Lr = r), (Rr = null));
              break;
            case `focusout`:
              Rr = Lr = Ir = null;
              break;
            case `mousedown`:
              zr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((zr = !1), Br(o, n, i));
              break;
            case `selectionchange`:
              if (Fr) break;
            case `keydown`:
            case `keyup`:
              Br(o, n, i);
          }
          var b;
          if (Qn)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            or
              ? ir(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
          (x &&
            (tr &&
              n.locale !== `ko` &&
              (or || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && or && (b = xn())
                : ((vn = i), (yn = `value` in vn ? vn.value : vn.textContent), (or = !0))),
            (y = Ed(r, x)),
            0 < y.length &&
              ((x = new zn(x, e, null, n, i)),
              o.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = ar(n)), b !== null && (x.data = b)))),
            (b = er ? sr(e, n) : cr(e, n)) &&
              ((x = Ed(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new zn(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({ event: y, listeners: x }),
                (y.data = b))),
            md(o, e, r, n, i));
        }
        yd(o, t);
      });
    }
    function Td(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ed(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = mn(e, n)),
            i != null && r.unshift(Td(e, i, a)),
            (i = mn(e, t)),
            i != null && r.push(Td(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Dd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Od(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = mn(n, a)), l != null && o.unshift(Td(n, l, c)))
            : i || ((l = mn(n, a)), l != null && o.push(Td(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var kd = /\r\n?/g,
      Ad = /\u0000|\uFFFD/g;
    function jd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          kd,
          `
`,
        )
        .replace(Ad, ``);
    }
    function Md(e, t) {
      return ((t = jd(t)), jd(e) === t);
    }
    function $(e, t, n, r, i, a) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Zt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && Zt(e, `` + r);
          break;
        case `className`:
          Ft(e, `class`, r);
          break;
        case `tabIndex`:
          Ft(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Ft(e, n, r);
          break;
        case `style`:
          en(e, r, a);
          break;
        case `data`:
          if (t !== `object`) {
            Ft(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = an(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof a == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, i.name, i, null),
                  $(e, t, `formEncType`, i.formEncType, i, null),
                  $(e, t, `formMethod`, i.formMethod, i, null),
                  $(e, t, `formTarget`, i.formTarget, i, null))
                : ($(e, t, `encType`, i.encType, i, null),
                  $(e, t, `method`, i.method, i, null),
                  $(e, t, `target`, i.target, i, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = an(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = on);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(s(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(s(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = an(`` + r)), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Pt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          It(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          It(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          It(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          It(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          It(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          It(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          It(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          It(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          It(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Pt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = nn.get(n) || n), Pt(e, n, r));
      }
    }
    function Nd(e, t, n, r, i, a) {
      switch (n) {
        case `style`:
          en(e, r, a);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(s(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(s(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? Zt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Zt(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = on);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!Dt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((i = n.endsWith(`Capture`)),
                (t = n.slice(2, i ? n.length - 7 : void 0)),
                (a = e[pt] || null),
                (a = a == null ? null : a[n]),
                typeof a == `function` && e.removeEventListener(t, a, i),
                typeof r == `function`)
              ) {
                (typeof a != `function` &&
                  a !== null &&
                  (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, i));
                break a;
              }
              n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, ``) : Pt(e, n, r);
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            i = !1,
            a;
          for (a in n)
            if (n.hasOwnProperty(a)) {
              var o = n[a];
              if (o != null)
                switch (a) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    i = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(s(137, t));
                  default:
                    $(e, t, a, o, n, null);
                }
            }
          (i && $(e, t, `srcSet`, n.srcSet, n, null), r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (a = o = i = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    i = d;
                    break;
                  case `type`:
                    o = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    a = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(s(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          Kt(e, a, c, l, u, o, i, !1);
          return;
        case `select`:
          for (i in (Q(`invalid`, e), (r = o = a = null), n))
            if (n.hasOwnProperty(i) && ((c = n[i]), c != null))
              switch (i) {
                case `value`:
                  a = c;
                  break;
                case `defaultValue`:
                  o = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, i, c, n, null);
              }
          ((t = a),
            (n = o),
            (e.multiple = !!r),
            t == null ? n != null && Jt(e, !!r, n, !0) : Jt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (o in (Q(`invalid`, e), (a = i = r = null), n))
            if (n.hasOwnProperty(o) && ((c = n[o]), c != null))
              switch (o) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  i = c;
                  break;
                case `children`:
                  a = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(s(91));
                  break;
                default:
                  $(e, t, o, c, n, null);
              }
          Xt(e, r, i, a);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected = r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < _d.length; r++) Q(_d[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(s(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (tn(t)) {
            for (d in n)
              n.hasOwnProperty(d) && ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n) n.hasOwnProperty(c) && ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var i = null,
            a = null,
            o = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  a = m;
                  break;
                case `name`:
                  i = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  o = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(s(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          Gt(e, o, c, l, u, d, a, i);
          return;
        case `select`:
          for (a in ((m = o = c = p = null), n))
            if (((l = n[a]), n.hasOwnProperty(a) && l != null))
              switch (a) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(a) || $(e, t, a, null, r, l);
              }
          for (i in r)
            if (((a = r[i]), (l = n[i]), r.hasOwnProperty(i) && (a != null || l != null)))
              switch (i) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  c = a;
                  break;
                case `multiple`:
                  o = a;
                default:
                  a !== l && $(e, t, i, a, r, l);
              }
          ((t = c),
            (n = o),
            (r = m),
            p == null
              ? !!r != !!n && (t == null ? Jt(e, !!n, n ? [] : ``, !1) : Jt(e, !!n, t, !0))
              : Jt(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (((i = n[c]), n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c)))
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, i);
              }
          for (o in r)
            if (((i = r[o]), (a = n[o]), r.hasOwnProperty(o) && (i != null || a != null)))
              switch (o) {
                case `value`:
                  p = i;
                  break;
                case `defaultValue`:
                  m = i;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (i != null) throw Error(s(91));
                  break;
                default:
                  i !== a && $(e, t, o, i, r, a);
              }
          Yt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (((p = n[h]), n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)))
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]), (m = n[l]), r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected = p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]), (m = n[u]), r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(s(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (tn(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) || p === m || (p == null && m == null) || $(e, t, f, p, r, m));
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u && Id(d) && ((c = c.responseEnd), (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e)) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;
    function Gd() {
      var e = window.event;
      return e && e.type === `popstate` ? e !== Wd && ((Wd = e), !0) : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : function (e) {
                return Jd.resolve(null).then(e).catch(Xd);
              };
    function Xd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Zd(e) {
      return e === `head`;
    }
    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8)) {
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Np(t));
              return;
            }
            r--;
          } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), pf(n));
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[yt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && pf(e.ownerDocument.body);
        }
        n = i;
      } while (n);
      Np(t);
    }
    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display), (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        ) {
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        }
        n = r;
      } while (n);
    }
    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (ef(n), bt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r) {
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        } else if (!e[yt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !== (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function rf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function of(e) {
      return e.data === `$!` || (e.data === `$?` && e.ownerDocument.readyState !== `loading`);
    }
    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;
    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else (n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&`) || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(s(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(s(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(s(454));
          return e;
        default:
          throw Error(s(451));
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      bt(e);
    }
    var mf = new Map(),
      hf = new Set();
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var _f = A.d;
    A.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e = _f.f(),
        t = bu();
      return e || t;
    }
    function yf(e) {
      var t = St(e);
      t !== null && t.tag === 5 && t.type === `form` ? Ds(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = Wt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)), Pd(t, `link`, e), Tt(t), r.head.appendChild(t))));
      }
    }
    function Sf(e) {
      (_f.D(e), xf(`dns-prefetch`, e, null));
    }
    function Cf(e, t) {
      (_f.C(e, t), xf(`preconnect`, e, t));
    }
    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Wt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Wt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + Wt(n.imageSizes) + `"]`))
          : (i += `[href="` + Wt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = h(
            { rel: `preload`, href: t === `image` && n && n.imageSrcSet ? void 0 : e, as: t },
            n,
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)), Pd(t, `link`, e), Tt(t), r.head.appendChild(t)));
      }
    }
    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i = `link[rel="modulepreload"][as="` + Wt(r) + `"][href="` + Wt(e) + `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = h({ rel: `modulepreload`, href: e }, t)), mf.set(a, e), n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          ((r = n.createElement(`link`)), Pd(r, `link`, e), Tt(r), n.head.appendChild(r));
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = wt(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            ((e = h({ rel: `stylesheet`, href: e, 'data-precedence': t }, n)),
              (n = mf.get(a)) && Rf(e, n));
            var c = (o = r.createElement(`link`));
            (Tt(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }), i.set(a, o));
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = wt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            Tt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = wt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            Tt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function kf(e, t, n, r) {
      var i = (i = pe.current) ? gf(i) : null;
      if (!i) throw Error(s(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = wt(i).hoistableStyles),
              (r = n.get(t)),
              r || ((r = { type: `style`, instance: null, count: 0, state: null }), n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var a = wt(i).hoistableStyles,
              o = a.get(e);
            if (
              (o ||
                ((i = i.ownerDocument || i),
                (o = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                a.set(e, o),
                (a = i.querySelector(jf(e))) && !a._p && ((o.instance = a), (o.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  a || Nf(i, e, n, o.state))),
              t && r === null)
            )
              throw Error(s(528, ``));
            return o;
          }
          if (t && r !== null) throw Error(s(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` && t && typeof t != `function` && typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = wt(i).hoistableScripts),
                (r = n.get(t)),
                r || ((r = { type: `script`, instance: null, count: 0, state: null }), n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(s(444, e));
      }
    }
    function Af(e) {
      return `href="` + Wt(e) + `"`;
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Mf(e) {
      return h({}, e, { 'data-precedence': e.precedence, precedence: null });
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Pd(t, `link`, n),
          Tt(t),
          e.head.appendChild(t));
    }
    function Pf(e) {
      return `[src="` + Wt(e) + `"]`;
    }
    function Ff(e) {
      return `script[async]` + e;
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Wt(n.href) + `"]`);
            if (r) return ((t.instance = r), Tt(r), r);
            var i = h({}, n, {
              'data-href': n.href,
              'data-precedence': n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Tt(r),
              Pd(r, `style`, i),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            i = Af(n.href);
            var a = e.querySelector(jf(i));
            if (a) return ((t.state.loading |= 4), (t.instance = a), Tt(a), a);
            ((r = Mf(n)),
              (i = mf.get(i)) && Rf(r, i),
              (a = (e.ownerDocument || e).createElement(`link`)),
              Tt(a));
            var o = a;
            return (
              (o._p = new Promise(function (e, t) {
                ((o.onload = e), (o.onerror = t));
              })),
              Pd(a, `link`, r),
              (t.state.loading |= 4),
              Lf(a, n.precedence, e),
              (t.instance = a)
            );
          case `script`:
            return (
              (a = Pf(n.src)),
              (i = e.querySelector(Ff(a)))
                ? ((t.instance = i), Tt(i), i)
                : ((r = n),
                  (i = mf.get(a)) && ((r = h({}, n)), zf(r, i)),
                  (e = e.ownerDocument || e),
                  (i = e.createElement(`script`)),
                  Tt(i),
                  Pd(i, `link`, r),
                  e.head.appendChild(i),
                  (t.instance = i))
            );
          case `void`:
            return null;
          default:
            throw Error(s(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
    }
    function Rf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function zf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Bf = null;
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else ((i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
          !(a[yt] || a[ft] || (e === `link` && a.getAttribute(`rel`) === `stylesheet`)) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Hf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null));
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return ((e = t.disabled), typeof t.precedence == `string` && e == null);
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Tt(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            Tt(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Pd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Kf = 0;
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Jf() {
      if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Yf = null;
    function Xf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++, (Yf = new Map()), t.forEach(Zf, e), (Yf = null), Jf.call(e)));
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Yf.set(e, n));
          for (
            var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Qf = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: se,
      _currentValue2: se,
      _threadCount: 0,
    };
    function $f(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = tt(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = tt(0)),
        (this.hiddenUpdates = tt(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = pi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = la()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ha(a),
        e
      );
    }
    function tp(e) {
      return e ? ((e = di), e) : di;
    }
    function np(e, t, n, r, i, a) {
      ((i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Wa(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ga(e, r, t)),
        n !== null && (hu(n, e, t), Ka(n, e, t)));
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ip(e, t) {
      (rp(e, t), (e = e.alternate) && rp(e, t));
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ci(e, 67108864);
        (t !== null && hu(t, e, 67108864), ip(e, 67108864));
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = pu();
        t = st(t);
        var n = ci(e, t);
        (n !== null && hu(n, e, t), ip(e, t));
      }
    }
    var sp = !0;
    function cp(e, t, n, r) {
      var i = k.T;
      k.T = null;
      var a = A.p;
      try {
        ((A.p = 2), up(e, t, n, r));
      } finally {
        ((A.p = a), (k.T = i));
      }
    }
    function lp(e, t, n, r) {
      var i = k.T;
      k.T = null;
      var a = A.p;
      try {
        ((A.p = 8), up(e, t, n, r));
      } finally {
        ((A.p = a), (k.T = i));
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) (wd(e, t, r, fp, n), Cp(e, r));
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null; ) {
            var a = St(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                    var o = Xe(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - Ue(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (rd(a), !(G & 6) && ((tu = je() + 500), id(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = ci(a, 2)), s !== null && hu(s, a, 2), bu(), ip(a, 2));
              }
            if (((a = dp(r)), a === null && wd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else wd(e, t, r, null, n);
      }
    }
    function dp(e) {
      return ((e = cn(e)), pp(e));
    }
    var fp = null;
    function pp(e) {
      if (((fp = null), (e = xt(e)), e !== null)) {
        var t = l(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = u(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = d(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((fp = e), null);
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Me()) {
            case Ne:
              return 2;
            case Pe:
              return 8;
            case Fe:
            case Ie:
              return 32;
            case Le:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = St(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((gp = wp(gp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((_p = wp(_p, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((vp = wp(vp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return ((a = i.pointerId), bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)), !0);
      }
      return !1;
    }
    function Ep(e) {
      var t = xt(e.target);
      if (t !== null) {
        var n = l(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = u(n)), t !== null)) {
              ((e.blockedOn = t),
                ut(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = d(n)), t !== null)) {
              ((e.blockedOn = t),
                ut(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((sn = r), n.target.dispatchEvent(r), (sn = null));
        } else return ((t = St(n)), t !== null && ap(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      ((hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op));
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp || ((hp = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = St(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Ts(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      (gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t));
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null); )
        (Ep(n), n.blockedOn === null && xp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[pt] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[pt] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function` ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), Mp(n));
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    ((Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        var n = t.current;
        np(n, pu(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (np(e.current, 2, null, e, null, null), bu(), (t[mt] = null));
          }
        }));
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = lt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        (xp.splice(n, 0, e), n === 0 && Ep(e));
      }
    };
    var Lp = r.version;
    if (Lp !== `19.2.8`) throw Error(s(527, Lp, `19.2.8`));
    A.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(s(188))
          : ((e = Object.keys(e).join(`,`)), Error(s(268, e)));
      return ((e = p(t)), (e = e === null ? null : m(e)), (e = e === null ? null : e.stateNode), e);
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.8`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: k,
      reconcilerVersion: `19.2.8`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          ((Be = zp.inject(Rp)), (Ve = zp));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!c(e)) throw Error(s(299));
      var n = !1,
        r = ``,
        i = Js,
        a = Ys,
        o = Xs;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (a = t.onCaughtError),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = ep(e, 1, !1, null, null, n, r, null, i, a, o, Pp)),
        (e[mt] = t.current),
        Sd(e),
        new Fp(t)
      );
    };
  }),
  c = e((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = s()));
  }),
  l = n(),
  u = c(),
  d = { min: 50, max: 75, default: 65 },
  f = 0.5,
  p = 1,
  m = [
    { shape: `straight`, ranks: 4, terrain: `flat`, role: `start` },
    { shape: `straight`, ranks: 4, terrain: `flat`, flexible: !0 },
    { shape: `sharp-turn`, direction: `right`, ranks: 4, terrain: `climb` },
    { shape: `straight`, ranks: 3, terrain: `climb` },
    { shape: `sharp-turn`, direction: `right`, ranks: 4, terrain: `descent` },
    { shape: `straight`, ranks: 4, terrain: `descent` },
    { shape: `straight`, ranks: 8, terrain: `flat`, flexible: !0 },
    { shape: `straight`, ranks: 7, terrain: `cobble`, singleFile: !0 },
    { shape: `soft-turn`, direction: `left`, ranks: 2, terrain: `flat` },
    { shape: `straight`, ranks: 2, terrain: `flat` },
    { shape: `sharp-turn`, direction: `right`, ranks: 2, terrain: `flat` },
    { shape: `straight`, ranks: 6, terrain: `flat`, flexible: !0 },
    { shape: `straight`, ranks: 5, terrain: `flat`, role: `finish` },
  ],
  h = [
    { shape: `straight`, ranks: 4, terrain: `flat`, role: `start` },
    { shape: `straight`, ranks: 6, terrain: `flat`, flexible: !1 },
    { shape: `soft-turn`, direction: `right`, ranks: 4, terrain: `flat` },
    { shape: `sharp-turn`, direction: `right`, ranks: 4, terrain: `flat` },
    { shape: `sharp-turn`, direction: `right`, ranks: 3, terrain: `flat` },
    { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !1 },
    { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `flat` },
    { shape: `straight`, ranks: 2, terrain: `climb` },
    { shape: `straight`, ranks: 2, terrain: `descent` },
    { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `flat`, flexible: !1 },
    { shape: `soft-turn`, direction: `right`, ranks: 2, terrain: `climb` },
    { shape: `straight`, ranks: 2, terrain: `descent` },
    { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !1 },
    { shape: `soft-turn`, direction: `left`, ranks: 2, terrain: `climb` },
    { shape: `soft-turn`, direction: `left`, ranks: 2, terrain: `descent` },
    { shape: `sharp-turn`, direction: `left`, ranks: 4, terrain: `flat`, flexible: !1 },
    { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !1 },
    { shape: `soft-turn`, direction: `left`, ranks: 4, terrain: `climb` },
    { shape: `soft-turn`, direction: `right`, ranks: 2, terrain: `climb` },
    { shape: `straight`, ranks: 5, terrain: `descent` },
    { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !1 },
    { shape: `soft-turn`, direction: `right`, ranks: 4, terrain: `flat`, flexible: !1 },
    { shape: `sharp-turn`, direction: `right`, ranks: 4, terrain: `flat`, flexible: !1 },
    { shape: `sharp-turn`, direction: `right`, ranks: 3, terrain: `climb` },
    { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `descent` },
    { shape: `straight`, ranks: 3, terrain: `flat`, flexible: !1 },
    { shape: `straight`, ranks: 5, terrain: `flat`, role: `finish` },
  ],
  g = [
    { shape: `straight`, ranks: 4, terrain: `flat`, role: `start` },
    { shape: `straight`, ranks: 4, terrain: `flat`, flexible: !1 },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
    { shape: `straight`, ranks: 2, terrain: `cobble`, singleFile: !0 },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
    { shape: `soft-turn`, direction: `left`, ranks: 1, terrain: `flat` },
    { shape: `sharp-turn`, direction: `left`, ranks: 2, terrain: `flat` },
    { shape: `straight`, ranks: 3, terrain: `flat` },
    { shape: `soft-turn`, direction: `right`, ranks: 2, terrain: `flat` },
    { shape: `soft-turn`, direction: `left`, ranks: 2, terrain: `cobble`, singleFile: !0 },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
    { shape: `soft-turn`, direction: `left`, ranks: 2, terrain: `cobble`, singleFile: !0 },
    { shape: `straight`, ranks: 4, terrain: `flat` },
    { shape: `soft-turn`, direction: `left`, ranks: 2, terrain: `flat` },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
    { shape: `soft-turn`, direction: `right`, ranks: 1, terrain: `cobble`, singleFile: !0 },
    { shape: `sharp-turn`, direction: `right`, ranks: 2, terrain: `cobble`, singleFile: !0 },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
    { shape: `soft-turn`, direction: `left`, ranks: 1, terrain: `cobble`, singleFile: !0 },
    { shape: `soft-turn`, direction: `left`, ranks: 1, terrain: `cobble`, singleFile: !1 },
    { shape: `straight`, ranks: 2, terrain: `cobble`, singleFile: !0 },
    { shape: `sharp-turn`, direction: `left`, ranks: 3, terrain: `flat` },
    { shape: `soft-turn`, direction: `left`, ranks: 2, terrain: `flat` },
    { shape: `sharp-turn`, direction: `right`, ranks: 4, terrain: `flat` },
    { shape: `soft-turn`, direction: `left`, ranks: 2, terrain: `flat` },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
    { shape: `soft-turn`, direction: `left`, ranks: 2, terrain: `cobble`, singleFile: !0 },
    { shape: `soft-turn`, direction: `left`, ranks: 1, terrain: `cobble`, singleFile: !1 },
    { shape: `straight`, ranks: 2, terrain: `cobble`, singleFile: !0 },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
    { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
    { shape: `straight`, ranks: 6, terrain: `flat` },
    { shape: `straight`, ranks: 2, terrain: `cobble`, singleFile: !1 },
    { shape: `straight`, ranks: 2, terrain: `flat` },
    { shape: `straight`, ranks: 5, terrain: `flat`, role: `finish` },
  ],
  _ = [
    { shape: `straight`, ranks: 4, terrain: `flat`, role: `start` },
    { shape: `straight`, ranks: 3, terrain: `flat`, flexible: !0 },
    { shape: `straight`, ranks: 2, terrain: `climb` },
    { shape: `soft-turn`, direction: `right`, ranks: 4, terrain: `climb` },
    { shape: `straight`, ranks: 5, terrain: `descent` },
    { shape: `soft-turn`, direction: `left`, ranks: 2, terrain: `descent` },
    { shape: `straight`, ranks: 2, terrain: `flat` },
    { shape: `soft-turn`, direction: `right`, ranks: 2, terrain: `flat` },
    { shape: `soft-turn`, direction: `right`, ranks: 4, terrain: `climb` },
    { shape: `soft-turn`, direction: `right`, ranks: 2, terrain: `flat` },
    { shape: `soft-turn`, direction: `left`, ranks: 4, terrain: `descent` },
    { shape: `straight`, ranks: 1, terrain: `descent` },
    { shape: `soft-turn`, direction: `right`, ranks: 3, terrain: `flat` },
    { shape: `straight`, ranks: 2, terrain: `climb` },
    { shape: `soft-turn`, direction: `right`, ranks: 5, terrain: `climb` },
    { shape: `straight`, ranks: 4, terrain: `descent` },
    { shape: `soft-turn`, direction: `right`, ranks: 4, terrain: `flat` },
    { shape: `straight`, ranks: 1, terrain: `descent` },
    { shape: `straight`, ranks: 3, terrain: `descent` },
    { shape: `soft-turn`, direction: `right`, ranks: 2, terrain: `flat` },
    { shape: `sharp-turn`, direction: `right`, ranks: 6, terrain: `climb` },
    { shape: `sharp-turn`, direction: `left`, ranks: 3, terrain: `descent` },
    { shape: `soft-turn`, direction: `left`, ranks: 4, terrain: `descent` },
    { shape: `straight`, ranks: 3, terrain: `flat` },
    { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `flat` },
    { shape: `straight`, ranks: 5, terrain: `flat`, role: `finish` },
  ],
  v = `Default Course`,
  y = {
    [v]: { segments: m, length: d.default },
    'Milano–San Remo': { segments: h, length: d.max },
    'Paris–Roubaix': { segments: g, length: 71 },
    'Liege-Bastogne-Liege': { segments: _, length: 74 },
  };
function b() {
  return Math.random() < 0.5 ? `right` : `left`;
}
function x(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function S(e, t) {
  if (e === 0) return [];
  if (e === 1) return [t];
  let n = x(Math.round(t * f), p, t - p * (e - 1)),
    r = e - 1,
    i = t - n,
    a = Math.floor(i / r),
    o = i - a * r;
  return [n, ...Array.from({ length: r }, (e, t) => a + +(t < o))];
}
function C({ raceRanks: e, mountains: t, courseName: n, segments: r }) {
  let i = n && y[n] ? n : v,
    a = r ? (n ?? i) : i;
  return T(
    w(r ?? y[i].segments, x(Math.round(e), d.min, d.max)).map((e) => ({
      ...e,
      terrain: t ? e.terrain : `flat`,
    })),
    a,
  );
}
function w(e, t) {
  let n = e.filter((e) => !e.flexible && !e.role).reduce((e, t) => e + t.ranks, 0),
    r = e.filter((e) => e.flexible).length,
    i = S(r, Math.max(Math.round(t) - n, p * r)),
    a = 0;
  return e.map((e) => ({ ...e, ranks: e.flexible ? i[a++] : e.ranks }));
}
function T(e, t) {
  return {
    name: t,
    segments: e.map((e) => {
      let t = e.terrain === `cobble` && e.singleFile;
      return { ...e, narrowSlots: t ? Array.from({ length: e.ranks }, b) : void 0 };
    }),
  };
}
C({ raceRanks: d.default, mountains: !0 });
function E(e) {
  let t = [];
  return (
    e.segments.forEach((e, n) => {
      for (let r = 0; r < e.ranks; r += 1)
        t.push({
          index: t.length,
          segmentIndex: n,
          terrain: e.terrain,
          isStart: e.role === `start`,
          isFinish: e.role === `finish`,
          narrowSlot: e.narrowSlots?.[r],
        });
    }),
    t
  );
}
function D(e) {
  let t = 0,
    n = [t];
  E(e).forEach((e) => {
    (e.terrain === `climb` ? (t += 1) : e.terrain === `descent` && --t, n.push(t));
  });
  let r = Math.min(...n);
  return n.map((e) => e - r);
}
function O(e) {
  return E(e).some((e) => e.terrain !== `flat`);
}
function ee(e) {
  return D(e).slice(1);
}
function te(e) {
  return e.segments.reduce((e, t) => e + t.ranks, 0);
}
function ne(e) {
  let t = E(e).find((e) => e.isFinish);
  return t ? t.index : te(e) - 1;
}
function re(e) {
  let t = E(e).filter((e) => e.isStart).length;
  return ne(e) - t;
}
var ie = { rouleur: [3, 4, 5, 6, 7], sprinteur: [2, 3, 4, 5, 9] },
  ae = 3;
function oe(e) {
  return ie[e].flatMap((e) => Array.from({ length: ae }, () => e));
}
var k = [`no-draft`, `relentless`],
  A = {
    baroudeur: {
      removed: [3, 5, 6, 6, 7],
      added: [
        { value: 5, powers: k },
        { value: 6, powers: k },
        { value: 6, powers: k },
        { value: 7, powers: k },
      ],
    },
    flandrien: {
      removed: [3, 4, 5, 6, 7],
      added: [
        { value: 3, powers: [`chase`] },
        { value: 4, powers: [`chase`] },
        { value: 5, powers: [`chase`] },
        { value: 6, powers: [`chase`] },
        { value: 7, powers: [`chase`] },
      ],
    },
    grimpeur: {
      removed: [3, 3, 3, 6, 6, 6],
      added: [
        { value: 3, powers: [`descent-floor-7`] },
        { value: 3, powers: [`descent-floor-7`] },
        { value: 3, powers: [`descent-floor-7`] },
        { value: 6, powers: [`ascent-cap-6`] },
        { value: 6, powers: [`ascent-cap-6`] },
        { value: 6, powers: [`ascent-cap-6`] },
      ],
    },
    domestique: {
      removed: [4, 4, 4],
      added: [
        { value: 4, powers: [`recovery`] },
        { value: 4, powers: [`recovery`] },
        { value: 4, powers: [`recovery`] },
      ],
    },
    'super-rouleur': {
      removed: [5, 5, 6, 6],
      added: [
        { value: 5, powers: [`nimble`] },
        { value: 5, powers: [`nimble`] },
        { value: 6, powers: [`nimble`] },
        { value: 6, powers: [`nimble`] },
      ],
    },
    puncheur: { removed: [4, 6], added: [{ value: 8, powers: [`relentless`] }] },
    descender: {
      removed: [3, 3, 3],
      added: [
        { value: 3, powers: [`descent-floor-7`, `recovery`] },
        { value: 3, powers: [`descent-floor-7`, `recovery`] },
        { value: 3, powers: [`descent-floor-7`, `recovery`] },
      ],
    },
    polyvalent: {
      removed: [4, 4, 4],
      added: [
        { value: 3, powers: [] },
        { value: 6, powers: [] },
        { value: 6, powers: [] },
      ],
    },
    mountaineer: {
      removed: [2, 3, 5, 9],
      added: [
        { value: 4, powers: [] },
        { value: 7, powers: [`ascent-cap-7`] },
        { value: 7, powers: [`ascent-cap-7`] },
      ],
    },
    squirrel: {
      removed: [2, 9],
      added: [
        { value: 7, powers: [`no-draft`, `chase`] },
        { value: 7, powers: [`no-draft`, `chase`] },
      ],
    },
    'super-sprinteur': {
      removed: [5, 9, 9],
      added: [
        { value: 4, powers: [] },
        { value: 10, powers: [] },
        { value: 11, powers: [] },
      ],
    },
    flahute: {
      removed: [4, 9, 9],
      added: [
        { value: 5, powers: [`nimble`] },
        { value: 9, powers: [`nimble`] },
        { value: 9, powers: [`nimble`] },
      ],
    },
  };
function se(e) {
  let t = [...e];
  for (let e = t.length - 1; e > 0; --e) {
    let n = Math.floor(Math.random() * (e + 1));
    [t[e], t[n]] = [t[n], t[e]];
  }
  return t;
}
function ce(e, t) {
  let n = [...e];
  for (let e of t) {
    let t = n.findIndex((t) => t.value === e);
    t !== -1 && n.splice(t, 1);
  }
  return n;
}
function le(e, t, n) {
  let r = ie[t].flatMap((t) =>
      Array.from({ length: ae }, (n, r) => ({
        id: `${e}-${t}-${r}`,
        value: t,
        isExhaustion: !1,
        powers: [],
      })),
    ),
    i = n ? A[n] : void 0;
  return {
    drawPile: se(
      i
        ? [
            ...ce(r, i.removed),
            ...i.added.map((t, n) => ({
              id: `${e}-spec-${n}`,
              value: t.value,
              isExhaustion: !1,
              powers: t.powers,
            })),
          ]
        : r,
    ),
    recycled: [],
    hand: [],
    played: null,
  };
}
function ue(e, t) {
  return { id: `${e}-exhaustion-${t}`, value: 2, isExhaustion: !0, powers: [] };
}
function j(e) {
  let t = e.recycled.findIndex((e) => e.isExhaustion);
  return t === -1 ? e : { ...e, recycled: [...e.recycled.slice(0, t), ...e.recycled.slice(t + 1)] };
}
function M(e, t, n) {
  if (n <= 0) return e;
  let r = Array.from({ length: n }, (e, n) => ({
    id: `${t}-carried-${n}`,
    value: 2,
    isExhaustion: !0,
    powers: [],
  }));
  return { ...e, drawPile: se([...e.drawPile, ...r]) };
}
function de(e, t) {
  return Array.from({ length: t }, (t, n) => ({
    id: `${e}-breakaway-${n}`,
    value: 2,
    isExhaustion: !0,
    powers: [],
  }));
}
function fe(e) {
  return e.recycled.length === 0
    ? e
    : { ...e, drawPile: se([...e.drawPile, ...e.recycled]), recycled: [] };
}
function pe(e) {
  return e.drawPile.length + e.recycled.length + e.hand.length;
}
function me(e) {
  return e.played !== null || pe(e) === 0;
}
function he(e) {
  let t = [...e.drawPile],
    n = [...e.recycled],
    r = [];
  for (; r.length < 4; ) {
    if (t.length === 0) {
      if (n.length === 0) break;
      (t.push(...se(n)), (n = []));
    }
    r.push(t.shift());
  }
  return { ...e, drawPile: t, recycled: n, hand: r };
}
function ge(e, t) {
  let n = e.hand.find((e) => e.id === t);
  return n
    ? { ...e, hand: [], recycled: [...e.recycled, ...e.hand.filter((e) => e.id !== t)], played: n }
    : e;
}
function _e(e) {
  return e.powers.includes(`ascent-cap-7`) ? 7 : e.powers.includes(`ascent-cap-6`) ? 6 : 5;
}
function ve(e) {
  return e.powers.includes(`descent-floor-7`) ? 7 : 5;
}
function ye(e, t) {
  return e.rankIndex === t.rankIndex
    ? e.slot === t.slot
      ? 0
      : e.slot === `right`
        ? -1
        : 1
    : t.rankIndex - e.rankIndex;
}
function be(e, t, n) {
  let r = e[t]?.narrowSlot;
  return r === void 0 || r === n;
}
function xe(e, t, n) {
  return e[t]?.narrowSlot ?? n;
}
function Se(e, t, n, r, i) {
  return be(e, n, r) ? we(t, n, r, i) === null : !1;
}
function Ce(e, t, n, r, i) {
  for (let a = i; a > r; --a) {
    if (Se(e, t, a, `right`, n)) return { rankIndex: a, slot: `right` };
    if (Se(e, t, a, `left`, n)) return { rankIndex: a, slot: `left` };
  }
  return null;
}
function we(e, t, n, r) {
  for (let [i, a] of e) if (i !== r && a.rankIndex === t && a.slot === n) return i;
  return null;
}
function Te(e, t, n) {
  for (let [r, i] of e) if (r !== n && i.rankIndex === t) return !0;
  return !1;
}
function Ee(e, t, n, r, i) {
  if (i <= r || e[i]?.narrowSlot !== void 0) return null;
  let a = we(t, i, `right`, n);
  return !a || !Se(e, t, i, `left`, n)
    ? null
    : {
        spot: { rankIndex: i, slot: `right` },
        displaced: { riderId: a, spot: { rankIndex: i, slot: `left` } },
      };
}
function De(e, t, n, r, i) {
  let a = r.rankIndex + 1;
  if (a > i || (!Te(t, a, n) && !Te(t, a + 1, n))) return null;
  let o = [`right`, `left`].find((r) => Se(e, t, a, r, n));
  return o ? { rankIndex: a, slot: o } : null;
}
function Oe(e, t) {
  return e[t]?.terrain ?? `flat`;
}
function ke(e) {
  return e === `climb` || e === `cobble`;
}
function Ae(e, t, n, r) {
  let i = _e(n),
    a = Oe(e, t) === `descent` ? Math.max(n.value, ve(n)) : n.value,
    o = Math.min(t + a, r),
    s = -1;
  for (let n = t; n <= o; n += 1)
    if (Oe(e, n) === `climb`) {
      s = n;
      break;
    }
  return s === -1 ? o - t : s > t + i ? s - 1 - t : Math.min(o - t, i);
}
function je(e) {
  let t = [];
  for (let n of [...e].sort((e, t) => e.rankIndex - t.rankIndex)) {
    let e = t[t.length - 1],
      r = e?.[e.length - 1];
    r && n.rankIndex - r.rankIndex <= 1 ? e.push(n) : t.push([n]);
  }
  return t;
}
function Me(e) {
  return je([...e].map(([e, t]) => ({ id: e, rankIndex: t.rankIndex }))).map((e) => ({
    back: e[0].rankIndex,
    front: e[e.length - 1].rankIndex,
    riderIds: e.map((e) => e.id),
  }));
}
function Ne(e, t, n, r, i) {
  if (ke(Oe(e, r.back))) return [];
  let a = new Set([...t].filter(([e]) => i.has(e)).map(([, e]) => e.rankIndex));
  if (a.has(r.back)) return [];
  let o = new Map(t),
    s = [],
    c = n.riderIds
      .map((e) => ({ riderId: e, ...o.get(e) }))
      .sort((e, t) => t.rankIndex - e.rankIndex);
  for (let t of c) {
    if (ke(Oe(e, t.rankIndex))) break;
    let n = t.rankIndex + 1;
    if (ke(Oe(e, n)) || a.has(n)) break;
    let r = t.slot === `right` ? `left` : `right`,
      i = [t.slot, r].find((r) => Se(e, o, n, r, t.riderId));
    if (!i) break;
    (o.set(t.riderId, { rankIndex: n, slot: i }),
      s.push({ riderId: t.riderId, rankIndex: n, slot: i }));
  }
  return s;
}
function Pe(e, t) {
  let n = t.length,
    r = new Map(e.riders.map((e) => [e.id, { rankIndex: e.rankIndex, slot: e.slot }])),
    i = [],
    a = [];
  for (let a of [...e.riders].sort(ye)) {
    let e = a.deck.played;
    if (!e) continue;
    let o = r.get(a.id),
      s = o.rankIndex + Ae(t, o.rankIndex, e, n - 1),
      c = e.powers.includes(`nimble`) ? Ee(t, r, a.id, o.rankIndex, s) : null,
      l = c?.spot ?? Ce(t, r, a.id, o.rankIndex, s);
    if (l) {
      c &&
        (r.set(c.displaced.riderId, c.displaced.spot),
        i.push({ riderId: c.displaced.riderId, ...c.displaced.spot }));
      for (let e = o.rankIndex + 1; e <= l.rankIndex; e += 1) {
        let n = e === l.rankIndex ? l.slot : xe(t, e, o.slot);
        i.push({ riderId: a.id, rankIndex: e, slot: n });
      }
      if ((r.set(a.id, l), e.powers.includes(`chase`))) {
        let e = De(t, r, a.id, l, n - 1);
        e && (r.set(a.id, e), i.push({ riderId: a.id, ...e }));
      }
    }
  }
  let o = new Set(
    e.riders.filter((e) => e.deck.played?.powers.includes(`no-draft`)).map((e) => e.id),
  );
  for (;;) {
    let e = Me(r),
      n = [];
    for (let i = 0; i < e.length - 1 && n.length === 0; i += 1)
      e[i + 1].back - e[i].front === 2 && (n = Ne(t, r, e[i], e[i + 1], o));
    if (n.length === 0) break;
    for (let e of n) r.set(e.riderId, { rankIndex: e.rankIndex, slot: e.slot });
    a.push(n);
  }
  return { ride: i, slipstream: a };
}
function Fe(e, t) {
  let n = new Set(e.riders.map((e) => e.rankIndex));
  return e.riders.filter((e) => e.rankIndex + 1 < t && !n.has(e.rankIndex + 1)).map((e) => e.id);
}
var Ie = 66,
  Le = 0.1,
  Re = 9,
  ze = 2;
function Be(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function Ve(e) {
  return e >= Ie ? `conservative` : `aggressive`;
}
function He(e, t) {
  let n = e.find((e) => e.kind === `rouleur`) ?? e[0];
  return !n || t.length === 0 ? null : { riderId: n.id, spot: t[0] };
}
function Ue(e) {
  return e.length > 0 ? Be(e) : null;
}
function We(e) {
  return e.length > 0 ? Be(e) : null;
}
function Ge(e) {
  return e.length > 0 ? Be(e) : null;
}
function Ke(e) {
  return e.reduce((e, t) => (t.value > e.value ? t : e));
}
function qe(e) {
  let t = [...e].sort((e, t) => e.value - t.value);
  return t[1] ?? t[0];
}
function Je(e) {
  let t = [...e].sort((e, t) => t.value - e.value);
  return t[1] ?? t[0];
}
function Ye(e, t) {
  return (
    je(t)
      .find((t) => t.some((t) => t.id === e.id))
      ?.some((t) => t.rankIndex > e.rankIndex) ?? !1
  );
}
function Xe(e, t) {
  return e.rankIndex * 2 >= t;
}
function Ze(e, t) {
  let n = je(t),
    r = n.findIndex((t) => t.some((t) => t.id === e.id));
  if (r === -1 || r === n.length - 1) return 0;
  let i = n[r];
  return n[r + 1][0].rankIndex - i[i.length - 1].rankIndex - 1;
}
function Qe(e, t, n) {
  return n.some((t) => t.rankIndex > e.rankIndex) && !Ye(e, n) ? Je(t) : qe(t);
}
function $e(e, t, n) {
  let r = e.deck.hand;
  return Xe(e, t.finishRank) || Math.random() < Le ? Ke(r) : Qe(e, r, n);
}
function et(e, t, n) {
  return Ae(e.ranks, t.rankIndex, n, e.ranks.length - 1);
}
function tt(e, t) {
  return e.reduce((e, n) => {
    let r = t.get(n.id),
      i = t.get(e.id);
    return r > i || (r === i && n.value < e.value) ? n : e;
  });
}
function nt(e, t, n) {
  if (t.ranks[n.rankIndex]?.terrain !== `climb`) return e;
  let r = e.filter((e) => e.value <= _e(e));
  return r.length > 0 ? r : e;
}
function rt(e, t) {
  return t.sprints.some((t) => t > e.rankIndex && t - e.rankIndex <= Re);
}
function it(e, t, n) {
  let r = n.reduce((n, r) => Math.max(n, et(t, e, r)), 0),
    i = Math.min(e.rankIndex + r, t.ranks.length - 1);
  for (let n = e.rankIndex; n <= i; n += 1) if (t.ranks[n]?.terrain === `climb`) return !0;
  return !1;
}
function at(e, t, n) {
  let r = [...t].sort((e, t) => e.value - t.value),
    i = n.get(e.id);
  return r.find((e) => n.get(e.id) >= i) ?? e;
}
function ot(e, t, n) {
  let r = nt(e.deck.hand, t, e),
    i = new Map(r.map((n) => [n.id, et(t, e, n)]));
  if (
    r.some((n) => e.rankIndex + i.get(n.id) >= t.finishRank) ||
    (e.kind === `sprinteur` && rt(e, t))
  )
    return Ke(r);
  let a = !Xe(e, t.finishRank);
  if (Ve(t.racedRanks) === `aggressive`) {
    if (e.kind === `sprinteur`) {
      if (!a) return Ke(r);
      if (!it(e, t, r)) return Ze(e, n) >= ze ? Ke(r) : at(Je(r), r, i);
    }
    return tt(r, i);
  }
  return a ? at(Qe(e, r, n), r, i) : tt(r, i);
}
var st = 4;
function ct(e) {
  return e === `climb` || e === `cobble`;
}
function lt(e, t, n, r) {
  if (ct(e.ranks[n]?.terrain)) return !1;
  let i = je(r),
    a = i.findIndex((e) => e.some((e) => e.id === t.id));
  return a <= 0 ? !1 : n - i[a - 1][i[a - 1].length - 1].rankIndex === 2;
}
function ut(e, t, n, r, i) {
  let a = tt(e, t),
    o = t.get(a.id);
  if (!lt(n, r, r.rankIndex + o, i)) return a;
  let s = e.filter((e) => t.get(e.id) === o - 1);
  return s.length === 0 || lt(n, r, r.rankIndex + o - 1, i)
    ? a
    : s.reduce((e, t) => (t.value < e.value ? t : e));
}
function dt(e, t, n) {
  let r = nt(e.deck.hand, t, e),
    i = new Map(r.map((n) => [n.id, et(t, e, n)]));
  if (
    r.some((n) => e.rankIndex + i.get(n.id) >= t.finishRank) ||
    (e.kind === `sprinteur` && rt(e, t))
  )
    return Ke(r);
  let a = !Xe(e, t.finishRank);
  return Ve(t.racedRanks) === `aggressive`
    ? a
      ? it(e, t, r)
        ? ut(r, i, t, e, n)
        : Ze(e, n) >= st
          ? Ke(r)
          : at(Je(r), r, i)
      : Ke(r)
    : a
      ? at(Qe(e, r, n), r, i)
      : ut(r, i, t, e, n);
}
function ft(e, t, n, r) {
  let i = e.deck.hand;
  return i.length === 0
    ? null
    : t.difficulty === `expert`
      ? dt(e, n, r)
      : t.difficulty === `hard`
        ? ot(e, n, r)
        : t.difficulty !== `normal` || t.strategy === null
          ? Be(i)
          : t.strategy === `aggressive`
            ? Ke(i)
            : $e(e, n, r);
}
function pt(e = 6) {
  return { entrantByPlayer: {}, bidRound: 1, bids: {}, winners: null, targetRank: e };
}
function mt(e, t) {
  let n = E(e),
    r = n.filter((e) => e.isStart),
    i = r.length > 0 ? r[r.length - 1].index : -1;
  return Math.min(i + t, n.length - 1);
}
function ht(e) {
  let t = e.breakaway;
  return !t || e.phase !== `breakaway`
    ? null
    : t.winners
      ? `resolved`
      : e.players.every((e) => t.entrantByPlayer[e.id])
        ? `bidding`
        : `entrants`;
}
function gt(e) {
  let t = e.breakaway;
  return t
    ? e.players
        .map((n) => e.riders.find((e) => e.id === t.entrantByPlayer[n.id]))
        .filter((e) => e !== void 0)
    : [];
}
function _t(e) {
  let t = ht(e);
  return t === null || t === `resolved`
    ? null
    : t === `entrants`
      ? (e.players.find((t) => !e.breakaway.entrantByPlayer[t.id]) ?? null)
      : (e.players[e.activePlayerIndex] ?? null);
}
function vt(e, t) {
  return (e.bids[t] ?? []).reduce((e, t) => e + t.value, 0);
}
function yt(e, t, n) {
  return { ...e, riders: e.riders.map((e) => (e.id === t ? n(e) : e)) };
}
function bt(e, t) {
  let n = _t(e),
    r = e.riders.find((e) => e.id === t);
  return ht(e) !== `entrants` || !n || r?.playerId !== n.id
    ? e
    : {
        ...e,
        activePlayerIndex: 0,
        breakaway: {
          ...e.breakaway,
          entrantByPlayer: { ...e.breakaway.entrantByPlayer, [n.id]: t },
        },
      };
}
function xt(e, t) {
  let n = _t(e);
  return ht(e) !== `bidding` ||
    !n ||
    n.isCpu ||
    t.playerId !== n.id ||
    e.breakaway.entrantByPlayer[n.id] !== t.id
    ? !1
    : t.deck.played === null && t.deck.hand.length === 0;
}
function St(e, t) {
  return yt(e, t, (e) => ({ ...e, deck: he(e.deck) }));
}
function Ct(e, t, n) {
  return Tt(wt(yt(e, t, (e) => ({ ...e, deck: ge(e.deck, n) }))));
}
function wt(e) {
  let t = e.breakaway,
    n = e.players.findIndex(
      (n) => e.riders.find((e) => e.id === t.entrantByPlayer[n.id])?.deck.played === null,
    );
  return { ...e, activePlayerIndex: n === -1 ? 0 : n };
}
function Tt(e) {
  let t = e.breakaway,
    n = gt(e);
  if (n.some((e) => e.deck.played === null)) return e;
  let r = { ...t.bids };
  for (let e of n) r[e.id] = [...(r[e.id] ?? []), e.deck.played];
  let i = {
    ...e,
    activePlayerIndex: 0,
    riders: e.riders.map((e) =>
      n.some((t) => t.id === e.id) ? { ...e, deck: { ...e.deck, played: null } } : e,
    ),
    breakaway: { ...t, bids: r, bidRound: t.bidRound + 1 },
  };
  return i.breakaway.bidRound > 2 ? Dt(i) : i;
}
function Et(e) {
  let t = e.breakaway;
  return [...gt(e)].sort((e, n) => vt(t, n.id) - vt(t, e.id) || ye(n, e));
}
function Dt(e) {
  let t = e.breakaway,
    n = Et(e),
    r = e.players.length >= 5 ? 2 : 1,
    i = n.slice(0, r),
    a = mt(e.course, t.targetRank),
    o = E(e.course),
    s = new Map(e.riders.map((e) => [e.id, { rankIndex: e.rankIndex, slot: e.slot }]));
  for (let e of i) {
    let t = Ce(o, s, e.id, e.rankIndex, a);
    t && s.set(e.id, t);
  }
  let c = new Set(i.map((e) => e.id));
  return {
    ...e,
    activePlayerIndex: 0,
    riders: e.riders.map((e) => {
      let n = t.bids[e.id] ?? [],
        r = c.has(e.id) ? de(e.id, 2) : n;
      return {
        ...e,
        ...s.get(e.id),
        deck: fe({ ...e.deck, recycled: [...e.deck.recycled, ...r] }),
      };
    }),
    breakaway: { ...t, winners: i.map((e) => e.id) },
  };
}
function Ot(e) {
  let t = _t(e);
  if (!t?.isCpu) return e;
  if (ht(e) === `entrants`) {
    let n = Ue(e.riders.filter((e) => e.playerId === t.id));
    return n ? bt(e, n.id) : e;
  }
  let n = e.breakaway.entrantByPlayer[t.id],
    r = St(e, n),
    i = We(r.riders.find((e) => e.id === n).deck.hand);
  return i ? Ct(r, n, i.id) : r;
}
function kt(e) {
  return { ...e, phase: `energy`, activePlayerIndex: 0 };
}
var At = { rouleur: 0, sprinteur: 1 };
function jt(e) {
  return `${e.rankIndex}-${e.slot}`;
}
function Mt(e) {
  return E(e)
    .filter((e) => e.isStart)
    .reverse()
    .flatMap((e) => [`right`, `left`].map((t) => ({ rankIndex: e.index, slot: t })));
}
function Nt(e, t) {
  let n = new Set(e.riders.map((e) => jt(e)));
  return Mt(t).filter((e) => !n.has(jt(e)));
}
function Pt(e) {
  return [...e, ...[...e].reverse()];
}
function Ft(e) {
  let t = e.players.length * 2 - e.pending.length;
  return Pt(e.players)[t] ?? null;
}
function It(e, t) {
  return e.pending.filter((e) => e.playerId === t);
}
function Lt(e, t) {
  let n = new Map(e.map((e, t) => [e.id, t]));
  return [...t].sort(
    (e, t) => (n.get(e.playerId) ?? 0) - (n.get(t.playerId) ?? 0) || At[e.kind] - At[t.kind],
  );
}
function Rt(e, t, n) {
  let r = e.pending.find((e) => e.id === t);
  if (
    e.phase !== `placement` ||
    !r ||
    r.playerId !== Ft(e)?.id ||
    e.riders.some((e) => jt(e) === jt(n))
  )
    return e;
  let i = e.pending.filter((e) => e.id !== t);
  return {
    ...e,
    riders: Lt(e.players, [...e.riders, { ...r, ...n }]),
    pending: i,
    phase: i.length > 0 ? `placement` : e.breakaway ? `breakaway` : `energy`,
  };
}
function zt(e, t) {
  let n = Ft(e);
  if (e.phase !== `placement` || !n?.isCpu) return e;
  let r = He(It(e, n.id), Nt(e, t));
  return r ? Rt(e, r.riderId, r.spot) : e;
}
function Bt(e, t) {
  return Array.from({ length: t }, (t, n) => e - n).flatMap((e) =>
    [`right`, `left`].map((t) => ({ rankIndex: e, slot: t })),
  );
}
function Vt(e, t) {
  return `${e}-${t}`;
}
function Ht(e, t = {}, n = {}) {
  return e.flatMap((e) =>
    [`rouleur`, `sprinteur`].map((r) => {
      let i = Vt(e.id, r),
        a = n[i] ?? null,
        o = M(le(i, r, a ?? void 0), i, t[i] ?? 0);
      return { id: i, playerId: e.id, kind: r, deck: o, specialist: a };
    }),
  );
}
function Ut(e, t, n = Ht(e)) {
  let r = E(t)
      .filter((e) => e.isStart)
      .map((e) => e.index),
    i = se(Bt(r[r.length - 1] ?? e.length - 1, e.length));
  return n.map((e, t) => ({ ...e, ...i[t] }));
}
function Wt(e, t, n = Ht(e)) {
  let r = Mt(t),
    i = new Map();
  return (
    Pt(e).forEach((e, t) => {
      let a = n.find((t) => t.playerId === e.id && !i.has(t.id));
      a && r[t] && i.set(a.id, r[t]);
    }),
    n.map((e) => ({ ...e, ...i.get(e.id) }))
  );
}
function Gt(e, t, n, r = {}) {
  let i = n.manualPlacement,
    a = Ht(e, r.carriedExhaustion, r.specialists),
    o = r.orderedGrid ? Wt : Ut,
    s = n.breakaway ? pt() : null;
  return {
    players: e,
    course: t,
    riders: i ? [] : o(e, t, a),
    pending: i ? a : [],
    breakaway: s,
    round: 1,
    phase: i ? `placement` : s ? `breakaway` : `energy`,
    activePlayerIndex: 0,
    exhaustedRiderIds: [],
    bonuses: r.bonuses ?? [],
  };
}
var Kt = [5, 3, 1],
  qt = [2, 1],
  Jt = 5;
function Yt(e) {
  let t = [],
    n = null;
  return (
    e.forEach((e, r) => {
      e.terrain === `climb`
        ? n === null && (n = r)
        : n !== null && (t.push({ start: n, end: r - 1, length: r - n }), (n = null));
    }),
    n !== null && t.push({ start: n, end: e.length - 1, length: e.length - n }),
    t
  );
}
function Xt(e) {
  return [...e].sort((e, t) => t.length - e.length || t.start - e.start);
}
function Zt(e) {
  let t = E(e);
  if (t.some((e) => e.terrain === `cobble`)) return [];
  let n = ne(e),
    r = t.length - 1,
    i = Math.min(n, r),
    a = (e) => t[e]?.terrain === `climb`,
    o = Yt(t),
    s = Xt(o.filter((e) => e.length >= Jt))[0],
    c = s !== void 0 && s.end >= n,
    l = s === void 0 || c,
    u = {
      rankIndex: l ? i : Math.min(s.end + 1, r),
      kind: s === void 0 ? `sprint` : `climb`,
      points: Kt,
      takenBy: [],
      settledRound: null,
    },
    d;
  if (!l)
    d = {
      rankIndex: i,
      kind: a(n) ? `climb` : `sprint`,
      points: qt,
      takenBy: [],
      settledRound: null,
    };
  else {
    let e = Xt(o.filter((e) => e !== s))[0];
    d = e
      ? {
          rankIndex: Math.min(e.end + 1, r),
          kind: `climb`,
          points: qt,
          takenBy: [],
          settledRound: null,
        }
      : {
          rankIndex: Math.round((n + t.filter((e) => e.isStart).length) / 2),
          kind: `sprint`,
          points: qt,
          takenBy: [],
          settledRound: null,
        };
  }
  return [u, d];
}
function Qt(e, t) {
  return t.rankIndex >= e.rankIndex;
}
function $t(e) {
  if (e.bonuses.every((e) => e.takenBy.length >= e.points.length)) return e;
  let t = [...e.riders].sort(ye);
  return {
    ...e,
    bonuses: e.bonuses.map((n) => {
      let r = n.points.length - n.takenBy.length;
      if (r <= 0) return n;
      let i = t
        .filter((e) => Qt(n, e) && !n.takenBy.includes(e.id))
        .slice(0, r)
        .map((e) => e.id);
      if (i.length === 0) return n;
      let a = [...n.takenBy, ...i];
      return { ...n, takenBy: a, settledRound: a.length >= n.points.length ? e.round : null };
    }),
  };
}
function en(e, t) {
  let n = e.takenBy.indexOf(t);
  return n === -1 ? 0 : (e.points[n] ?? 0);
}
var tn = {
  'Rolling Start': {
    segments: [
      { shape: `straight`, ranks: 4, terrain: `flat`, role: `start` },
      { shape: `straight`, ranks: 4, terrain: `flat`, flexible: !0 },
      { shape: `soft-turn`, direction: `right`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 4, terrain: `flat` },
      { shape: `sharp-turn`, direction: `right`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `sharp-turn`, direction: `right`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 5, terrain: `flat` },
      { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `straight`, ranks: 5, terrain: `flat`, role: `finish` },
    ],
    length: 55,
  },
  'Broken Roads': {
    segments: [
      { shape: `straight`, ranks: 4, terrain: `flat`, role: `start` },
      { shape: `straight`, ranks: 4, terrain: `flat`, flexible: !0 },
      { shape: `soft-turn`, direction: `right`, ranks: 4, terrain: `flat` },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
      { shape: `straight`, ranks: 2, terrain: `cobble`, singleFile: !1 },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
      { shape: `straight`, ranks: 2, terrain: `cobble`, singleFile: !1 },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
      { shape: `soft-turn`, direction: `left`, ranks: 4, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !1 },
      { shape: `straight`, ranks: 2, terrain: `cobble`, singleFile: !0 },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
      { shape: `soft-turn`, direction: `left`, ranks: 2, terrain: `cobble`, singleFile: !0 },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
      { shape: `straight`, ranks: 5, terrain: `flat` },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
      { shape: `straight`, ranks: 2, terrain: `cobble`, singleFile: !0 },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
      { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `flat` },
      { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `flat` },
      { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !0 },
      { shape: `straight`, ranks: 1, terrain: `cobble`, singleFile: !1 },
      { shape: `straight`, ranks: 5, terrain: `flat`, flexible: !0 },
      { shape: `straight`, ranks: 5, terrain: `flat`, role: `finish` },
    ],
    length: 60,
  },
  'Coastal Dash': {
    segments: [
      { shape: `straight`, ranks: 4, terrain: `flat`, role: `start` },
      { shape: `straight`, ranks: 4, terrain: `flat`, flexible: !0 },
      { shape: `soft-turn`, direction: `right`, ranks: 4, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `sharp-turn`, direction: `left`, ranks: 4, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `soft-turn`, direction: `right`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `straight`, ranks: 5, terrain: `flat`, role: `finish` },
    ],
    length: 70,
  },
  'The Four Walls': {
    segments: [
      { shape: `straight`, ranks: 4, terrain: `flat`, role: `start` },
      { shape: `straight`, ranks: 4, terrain: `flat`, flexible: !0 },
      { shape: `straight`, ranks: 2, terrain: `climb` },
      { shape: `soft-turn`, direction: `right`, ranks: 2, terrain: `descent` },
      { shape: `straight`, ranks: 3, terrain: `flat` },
      { shape: `sharp-turn`, direction: `left`, ranks: 3, terrain: `climb` },
      { shape: `straight`, ranks: 2, terrain: `descent` },
      { shape: `soft-turn`, direction: `left`, ranks: 2, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `climb` },
      { shape: `straight`, ranks: 2, terrain: `descent` },
      { shape: `straight`, ranks: 3, terrain: `flat` },
      { shape: `sharp-turn`, direction: `left`, ranks: 3, terrain: `climb` },
      { shape: `straight`, ranks: 3, terrain: `descent` },
      { shape: `soft-turn`, direction: `right`, ranks: 3, terrain: `flat` },
      { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `straight`, ranks: 5, terrain: `flat`, role: `finish` },
    ],
    length: 60,
  },
  'First Summit': {
    segments: [
      { shape: `straight`, ranks: 4, terrain: `flat`, role: `start` },
      { shape: `straight`, ranks: 4, terrain: `flat`, flexible: !0 },
      { shape: `soft-turn`, direction: `right`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 3, terrain: `climb` },
      { shape: `sharp-turn`, direction: `right`, ranks: 4, terrain: `climb` },
      { shape: `straight`, ranks: 4, terrain: `descent` },
      { shape: `soft-turn`, direction: `right`, ranks: 4, terrain: `descent` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `straight`, ranks: 5, terrain: `flat`, role: `finish` },
    ],
    length: 65,
  },
  'Transition Stage': {
    segments: [
      { shape: `straight`, ranks: 4, terrain: `flat`, role: `start` },
      { shape: `straight`, ranks: 4, terrain: `flat`, flexible: !0 },
      { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `sharp-turn`, direction: `left`, ranks: 4, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `straight`, ranks: 5, terrain: `flat`, role: `finish` },
    ],
    length: 50,
  },
  'Queen Stage': {
    segments: [
      { shape: `straight`, ranks: 4, terrain: `flat`, role: `start` },
      { shape: `straight`, ranks: 4, terrain: `flat`, flexible: !0 },
      { shape: `soft-turn`, direction: `right`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 3, terrain: `climb` },
      { shape: `sharp-turn`, direction: `right`, ranks: 3, terrain: `descent` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `soft-turn`, direction: `left`, ranks: 4, terrain: `flat` },
      { shape: `straight`, ranks: 5, terrain: `climb` },
      { shape: `sharp-turn`, direction: `right`, ranks: 3, terrain: `climb` },
      { shape: `straight`, ranks: 4, terrain: `descent` },
      { shape: `soft-turn`, direction: `right`, ranks: 3, terrain: `descent` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `straight`, ranks: 6, terrain: `climb` },
      { shape: `straight`, ranks: 5, terrain: `flat`, role: `finish` },
    ],
    length: 75,
  },
  'Finish in Style': {
    segments: [
      { shape: `straight`, ranks: 4, terrain: `flat`, role: `start` },
      { shape: `straight`, ranks: 4, terrain: `flat`, flexible: !0 },
      { shape: `sharp-turn`, direction: `left`, ranks: 4, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 3, terrain: `flat` },
      { shape: `soft-turn`, direction: `left`, ranks: 3, terrain: `flat` },
      { shape: `straight`, ranks: 2, terrain: `flat`, flexible: !0 },
      { shape: `straight`, ranks: 5, terrain: `flat`, role: `finish` },
    ],
    length: 60,
  },
};
function nn(e) {
  let t = e * 10;
  return t < 60 ? `${t}"` : `${Math.floor(t / 60)}'${String(t % 60).padStart(2, `0`)}"`;
}
function rn(e, t) {
  return e.rankIndex >= t;
}
function an(e, t) {
  return e.riders.some((e) => rn(e, t));
}
function on(e, t) {
  let n = je(e.riders)
    .reverse()
    .map((e) => [...e].sort(ye));
  if (n.length === 0) return { toGo: 0, groups: [] };
  let r = 0;
  n.forEach((e, t) => {
    e.length > n[r].length && (r = t);
  });
  let i = n[0][0].rankIndex;
  return {
    toGo: Math.max(0, t - i),
    groups: n.map((e, t) => ({
      label: t === r ? `PEL` : t < r ? (t === 0 ? `TÊTE` : `POUR${t}`) : `GR${t - r}`,
      riders: e,
      gapToAhead: t === 0 ? null : n[t - 1][n[t - 1].length - 1].rankIndex - e[0].rankIndex - 1,
      gapToLeader: t === 0 ? null : i - e[0].rankIndex - 1,
    })),
  };
}
function sn(e) {
  let t = je(e.riders);
  return t[t.length - 1] ?? [];
}
function cn(e, t) {
  let n = new Set(sn(e).map((e) => e.id));
  return [...e.riders].sort(ye).map((e, r) => {
    let i = rn(e, t);
    return { rider: e, position: r + 1, crossed: i, finished: i || n.has(e.id) };
  });
}
var ln = [3, 2, 1];
function un(e, t, n) {
  return { name: e, kind: t, billing: n, template: tn[e] };
}
var dn = { min: 3, max: 8, default: 7 },
  fn = [
    un(`Rolling Start`, `sprint`, 2),
    un(`Broken Roads`, `cobbles`, 1),
    un(`Coastal Dash`, `sprint`, 3),
    un(`The Four Walls`, `hill`, 1),
    un(`First Summit`, `hill`, 2),
    un(`Transition Stage`, `sprint`, 4),
    un(`Queen Stage`, `hill`, 3),
    un(`Finish in Style`, `sprint`, 1),
  ],
  pn = [`sprint`, `hill`, `cobbles`];
function mn(e) {
  return fn.filter((t) => t.kind === e);
}
function hn(e) {
  let t = pn.map((t) => ({ kind: t, exact: (mn(t).length / fn.length) * e })),
    n = { sprint: 0, hill: 0, cobbles: 0 };
  for (let { kind: e, exact: r } of t) n[e] = Math.floor(r);
  let r = pn.reduce((e, t) => e + n[t], 0),
    i = [...t].sort(
      (e, t) =>
        t.exact - Math.floor(t.exact) - (e.exact - Math.floor(e.exact)) || n[e.kind] - n[t.kind],
    );
  for (let { kind: t } of i.slice(0, e - r)) n[t] += 1;
  return n;
}
function gn(e) {
  let t = hn(Math.min(Math.max(Math.round(e), dn.min), dn.max)),
    n = new Set(
      pn.flatMap((e) =>
        [...mn(e)]
          .sort((e, t) => e.billing - t.billing)
          .slice(0, t[e])
          .map((e) => e.name),
      ),
    );
  return fn.filter((e) => n.has(e.name));
}
function _n(e) {
  return { name: `Grand Tour`, stages: gn(e) };
}
var vn = _n(dn.default);
function yn(e, t = vn) {
  return {
    definition: t,
    currentStageIndex: 0,
    standings: e.flatMap((e) =>
      [`rouleur`, `sprinteur`].map((t) => ({
        riderId: `${e.id}-${t}`,
        playerId: e.id,
        kind: t,
        cumulativeTimeSeconds: 0,
        podiumPoints: 0,
        sprintPoints: 0,
        climbPoints: 0,
        carriedExhaustion: 0,
        stageWins: 0,
        lastStageSeconds: null,
        lastStagePodiumPoints: 0,
        lastStageSprintPoints: 0,
        lastStageClimbPoints: 0,
      })),
    ),
    stageWinners: [],
    lastStageOrder: [],
    startOrder: se(e.map((e) => e.id)),
  };
}
function bn(e) {
  return e.definition.stages[e.currentStageIndex] ?? null;
}
function xn(e) {
  return e.currentStageIndex >= e.definition.stages.length;
}
function Sn(e, t) {
  return e.standings
    .filter((e) => e.playerId === t)
    .reduce((e, t) => e + t.cumulativeTimeSeconds, 0);
}
function Cn(e, t) {
  return e.standings.filter((e) => e.playerId === t).reduce((e, t) => e + t.podiumPoints, 0);
}
function wn(e, t) {
  return e.standings
    .filter((e) => e.playerId === t)
    .reduce((e, t) => e + t.lastStagePodiumPoints, 0);
}
function Tn(e, t) {
  let n = e.lastStageOrder.indexOf(t);
  return n === -1 ? 1 / 0 : n;
}
function En(e, t) {
  let n = e.standings.filter((e) => e.playerId === t).map((t) => Tn(e, t.riderId));
  return n.length > 0 ? Math.min(...n) : 1 / 0;
}
function Dn(e, t) {
  let n = new Map(e.startOrder.map((e, t) => [e, t]));
  return [...t].sort((e, r) => (n.get(e.id) ?? t.length) - (n.get(r.id) ?? t.length));
}
function On(e) {
  return [...new Set(e.standings.map((e) => e.playerId))].sort(
    (t, n) => Sn(e, n) - Sn(e, t) || En(e, n) - En(e, t),
  );
}
function kn(e) {
  return [...e.deck.drawPile, ...e.deck.recycled, ...e.deck.hand].filter((e) => e.isExhaustion)
    .length;
}
function An(e, t) {
  let n = {};
  for (let r of on(e, t).groups) {
    let e = (r.gapToLeader ?? 0) * 10;
    for (let t of r.riders) n[t.id] = e;
  }
  return n;
}
function jn(e, t, n) {
  let r = An(t, n),
    i = cn(t, n),
    a = i[0]?.rider.id ?? ``,
    o = new Map(t.riders.map((e) => [e.id, e])),
    s = Object.fromEntries(i.slice(0, ln.length).map((e, t) => [e.rider.id, ln[t]])),
    c = e.standings.map((e) => {
      let n = o.get(e.riderId),
        i = (n) => t.bonuses.filter((e) => e.kind === n).reduce((t, n) => t + en(n, e.riderId), 0),
        c = s[e.riderId] ?? 0,
        l = i(`sprint`),
        u = i(`climb`);
      return {
        ...e,
        cumulativeTimeSeconds: e.cumulativeTimeSeconds + (r[e.riderId] ?? 0),
        podiumPoints: e.podiumPoints + c,
        sprintPoints: e.sprintPoints + l,
        climbPoints: e.climbPoints + u,
        carriedExhaustion: n ? Math.ceil(kn(n) / 2) : 0,
        lastStageSeconds: r[e.riderId] ?? 0,
        lastStagePodiumPoints: c,
        lastStageSprintPoints: l,
        lastStageClimbPoints: u,
        stageWins: e.stageWins + +(e.riderId === a),
      };
    }),
    l = { ...e, standings: c, lastStageOrder: i.map((e) => e.rider.id) };
  return {
    ...l,
    currentStageIndex: e.currentStageIndex + 1,
    stageWinners: [...e.stageWinners, a],
    startOrder: On(l),
  };
}
function Mn(e, t) {
  let n = Fn(e)[0];
  return t.lastStageSeconds === null || n?.lastStageSeconds == null
    ? null
    : t.lastStageSeconds - n.lastStageSeconds;
}
function Nn(e, t) {
  return {
    ...e,
    standings: e.standings.map((e) => {
      let n = (n) => t.filter((e) => e.kind === n).reduce((t, n) => t + en(n, e.riderId), 0);
      return {
        ...e,
        sprintPoints: e.sprintPoints + n(`sprint`),
        climbPoints: e.climbPoints + n(`climb`),
      };
    }),
  };
}
function Pn(e) {
  return Object.fromEntries(e.standings.map((e) => [e.riderId, e.carriedExhaustion]));
}
function Fn(e) {
  return [...e.standings].sort(
    (t, n) =>
      t.cumulativeTimeSeconds - n.cumulativeTimeSeconds || Tn(e, t.riderId) - Tn(e, n.riderId),
  );
}
function In(e, t) {
  let n = (e) => (t === `sprint` ? e.sprintPoints : e.climbPoints);
  return [...e.standings].sort((t, r) => n(r) - n(t) || Tn(e, t.riderId) - Tn(e, r.riderId));
}
var Ln = {
  short: { gc: [3, 2, 1], tc: [1], sc: [2, 1], mc: [2, 1] },
  mid: { gc: [4, 3, 2, 1], tc: [2, 1], sc: [3, 2, 1], mc: [3, 2, 1] },
  long: { gc: [5, 4, 3, 2, 1], tc: [3, 2, 1], sc: [4, 3, 2, 1], mc: [4, 3, 2, 1] },
};
function Rn(e, t) {
  return t <= 2 || e <= 7 ? `short` : e <= 14 ? `mid` : `long`;
}
function zn(e, t) {
  let n = Ln[Rn(e.definition.stages.length, t)],
    r = (e, t) => {
      let n = {};
      return (
        e.slice(0, t.length).forEach((e, r) => {
          n[e.riderId] = t[r];
        }),
        n
      );
    },
    i = {};
  return (
    [...new Set(e.standings.map((e) => e.playerId))]
      .sort((t, n) => Sn(e, t) - Sn(e, n) || En(e, t) - En(e, n))
      .slice(0, n.tc.length)
      .forEach((e, t) => {
        i[e] = n.tc[t];
      }),
    { gc: r(Fn(e), n.gc), sc: r(In(e, `sprint`), n.sc), mc: r(In(e, `climb`), n.mc), tc: i }
  );
}
function Bn(e, t, n) {
  let r = e.standings.filter((e) => e.playerId === t).map((e) => e.riderId),
    i = (e) => r.reduce((t, n) => t + (e[n] ?? 0), 0),
    a = Cn(e, t),
    o = i(n.gc),
    s = i(n.sc),
    c = i(n.mc),
    l = n.tc[t] ?? 0;
  return { podium: a, gc: o, sc: s, mc: c, tc: l, total: a + o + s + c + l };
}
function Vn(e, t, n = null) {
  return n ? Bn(e, t, n).total : Cn(e, t);
}
function Hn(e, t, n = null) {
  return [...t].sort((t, r) => Vn(e, r.id, n) - Vn(e, t.id, n) || En(e, t.id) - En(e, r.id));
}
function Un(e) {
  let t = (e, t) => e.find((e) => t(e) > 0)?.riderId ?? null;
  return {
    overall: e.stageWinners.length > 0 ? (Fn(e)[0]?.riderId ?? null) : null,
    sprint: t(In(e, `sprint`), (e) => e.sprintPoints),
    climb: t(In(e, `climb`), (e) => e.climbPoints),
  };
}
function Wn(e) {
  let t = new Set(),
    { overall: n } = Un(e);
  n && t.add(n);
  let r = (e, n) => e.find((e) => !t.has(e.riderId) && n(e) > 0)?.riderId ?? null,
    i = r(In(e, `sprint`), (e) => e.sprintPoints);
  return (i && t.add(i), { overall: n, sprint: i, climb: r(In(e, `climb`), (e) => e.climbPoints) });
}
function Gn(e) {
  let t = Wn(e),
    n = {};
  for (let e of [`overall`, `sprint`, `climb`]) {
    let r = t[e];
    r && (n[r] = e);
  }
  return n;
}
function Kn(e) {
  if (e === 0) return `—`;
  let t = e < 0 ? `−` : `+`,
    n = Math.abs(e),
    r = Math.floor(n / 60),
    i = n % 60;
  return r > 0 ? `${t}${r}'${String(i).padStart(2, `0`)}"` : `${t}${i}"`;
}
var qn = 1,
  Jn = `flamme-rouge-save`;
function Yn(e) {
  try {
    localStorage.setItem(Jn, JSON.stringify({ version: qn, ...e }));
  } catch {}
}
function Xn() {
  try {
    let e = localStorage.getItem(Jn);
    if (!e) return null;
    let t = JSON.parse(e);
    return t.version === qn ? t : null;
  } catch {
    return null;
  }
}
function Zn() {
  try {
    localStorage.removeItem(Jn);
  } catch {}
}
var Qn = [`#e63946`, `#2a9d8f`, `#f4a300`, `#3a86ff`],
  $n = o(),
  er = [
    {
      id: `baroudeur`,
      name: `Baroudeur`,
      kind: `rouleur`,
      powers: [`no-draft`, `relentless`],
      blurb: `Rides off the front: its cards tire nobody and tow nobody.`,
    },
    {
      id: `flandrien`,
      name: `Flandrien`,
      kind: `rouleur`,
      powers: [`chase`],
      blurb: `Never lets a wheel go — every card closes a one-tile gap.`,
    },
    {
      id: `grimpeur`,
      name: `Grimpeur`,
      kind: `rouleur`,
      powers: [`ascent-cap-6`, `descent-floor-7`],
      blurb: `At home on a col, and quick down the far side.`,
    },
    {
      id: `domestique`,
      name: `Domestique`,
      kind: `rouleur`,
      powers: [`recovery`],
      blurb: `Works, and shakes the day off: its 4s hand back exhaustion.`,
    },
    {
      id: `super-rouleur`,
      name: `Super Rouleur`,
      kind: `rouleur`,
      powers: [`nimble`],
      blurb: `Always finds the good lane, whoever is already in it.`,
    },
    {
      id: `puncheur`,
      name: `Puncheur`,
      kind: `rouleur`,
      powers: [`relentless`],
      blurb: `One huge gear, and it costs nothing to use — a card down for it.`,
    },
    {
      id: `descender`,
      name: `Descender`,
      kind: `sprinteur`,
      powers: [`descent-floor-7`, `recovery`],
      blurb: `Fearless downhill, and recovers on the way.`,
    },
    {
      id: `polyvalent`,
      name: `Polyvalent`,
      kind: `sprinteur`,
      powers: [],
      blurb: `No power at all — just a deck with some road in the middle of it.`,
    },
    {
      id: `mountaineer`,
      name: `Mountaineer`,
      kind: `sprinteur`,
      powers: [`ascent-cap-7`],
      blurb: `A sprinteur who can climb, at the price of the sprint and a card.`,
    },
    {
      id: `squirrel`,
      name: `Squirrel`,
      kind: `sprinteur`,
      powers: [`no-draft`, `chase`],
      blurb: `Darts about: closes gaps itself and gives nobody else a wheel.`,
    },
    {
      id: `super-sprinteur`,
      name: `Super Sprinteur`,
      kind: `sprinteur`,
      powers: [],
      blurb: `The biggest gears in the game — a 10 and an 11 — and no power.`,
    },
    {
      id: `flahute`,
      name: `Flahute`,
      kind: `sprinteur`,
      powers: [`nimble`],
      blurb: `Keeps its 9s and takes the good lane with them.`,
    },
  ],
  tr = {
    'ascent-cap-6': {
      name: `Strong Ascents 6`,
      blurb: `On an ascent this card is capped at 6 rather than 5.`,
      detail: `The cap is the whole move, not the tile it starts on: a move that begins on, rides onto or rides across a climb stops at 6 tiles instead of the usual 5. It lifts nothing on the flat, so a 6 played on level road is still a 6.`,
    },
    'ascent-cap-7': {
      name: `Strong Ascents 7`,
      blurb: `On an ascent this card is capped at 7 rather than 5.`,
      detail: `The same rule one gear higher, and the reason a Mountaineer's 7s are worth carrying up a col that would have flattened them to 5.`,
    },
    'descent-floor-7': {
      name: `Strong Descents`,
      blurb: `Played from a descent this card is worth at least 7 rather than 5.`,
      detail: `It is the tile the rider sets off from that has to be a descent, not the road it lands on. A card already worth more than 7 is unaffected — the floor only lifts the small ones.`,
    },
    recovery: {
      name: `Recovery`,
      blurb: `Playing it returns one recycled exhaustion card to the exhaustion deck.`,
      detail: `It fires the moment the card is played, and takes the exhaustion card out of the game for good. With nothing recycled there is nothing to return and the card is simply played. A Breakaway bid is not a played card, so it triggers nothing.`,
    },
    relentless: {
      name: `Relentless`,
      blurb: `The rider takes no exhaustion card this round.`,
      detail: `The rider still rides off the front with an empty tile ahead of it — it just does not pay for the privilege. Only this round, and only for the rider that played the card.`,
    },
    'no-draft': {
      name: `Breakaway`,
      blurb: `Nobody on this rider's square gives a slipstream this round.`,
      detail: `It silences the square, not the rider: everyone standing on that tile stops towing — their own pack included, which is the point. The riders on the rank directly behind are dropped rather than carried along, so the pack splits at this rider's wheel and it genuinely gets away. It still takes a wheel itself, since the power stops it giving, not receiving.`,
    },
    nimble: {
      name: `Nimble`,
      blurb: `The rider takes the right-hand tile of its square, pushing the occupier left.`,
      detail: `A house rule for this board. The printed power puts the rider on the grass beside a full square; here a rank has exactly two tiles and nothing else, so the Nimble rider takes the right-hand one and whoever was there slides across. With both tiles held, or on a cobbled rank narrowed to a single tile, there is nowhere to slide and the rider lands normally.`,
    },
    chase: {
      name: `Chase`,
      blurb: `Straight after moving, the rider closes a one-tile gap ahead of it.`,
      detail: `Immediately after this rider moves, before anyone else does: if the square in front holds a rider and still has a free lane, or the square in front is empty and the one beyond it is not, the rider moves up one. Terrain is not consulted — it works on ascents and cobbles — and the rider still slipstreams normally in the end phase.`,
    },
  },
  nr = [
    `ascent-cap-6`,
    `ascent-cap-7`,
    `descent-floor-7`,
    `recovery`,
    `relentless`,
    `no-draft`,
    `nimble`,
    `chase`,
  ];
function rr(e) {
  return e === null ? void 0 : er.find((t) => t.id === e);
}
function ir(e, t) {
  let n = t >= 4 ? 2 : 1;
  return er.filter((t) => t.kind === e).flatMap((e) => Array.from({ length: n }, () => e.id));
}
function ar(e) {
  return {
    order: se(e).map((e) => e.id),
    pool: { rouleur: ir(`rouleur`, e.length), sprinteur: ir(`sprinteur`, e.length) },
    taken: {},
  };
}
function or(e, t) {
  let n = e.order.flatMap((e) => t.filter((t) => t.id === e)),
    r = Object.keys(e.taken).length,
    i = Pt(n)[r];
  if (!i) return null;
  let a = r < n.length ? `rouleur` : `sprinteur`;
  return { player: i, kind: a, riderId: Vt(i.id, a) };
}
function sr(e, t, n) {
  let r = or(e, t);
  if (!r) return e;
  let i = e.pool[r.kind],
    a = i.indexOf(n);
  return a === -1
    ? e
    : {
        ...e,
        pool: { ...e.pool, [r.kind]: [...i.slice(0, a), ...i.slice(a + 1)] },
        taken: { ...e.taken, [r.riderId]: n },
      };
}
function cr(e, t) {
  let n = or(e, t);
  if (!n?.player.isCpu) return e;
  let r = Ge(e.pool[n.kind]);
  return r ? sr(e, t, r) : e;
}
var lr = (e) => e?.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
function ur(e, t, n = []) {
  if (t == null) throw Error(`[lucide]: iconNode is required when icon name is used`);
  return { name: lr(e), size: 24, node: t, ...(n.length > 0 ? { aliases: n } : {}) };
}
var dr = (e) => {
    let t = ``,
      n = !1;
    for (let r of e) {
      if (r === `-` || r === `_` || r <= ` `) {
        n = t.length > 0;
        continue;
      }
      (t.length === 0 ? (t += r.toLowerCase()) : (t += n ? r.toUpperCase() : r), (n = !1));
    }
    return t;
  },
  fr = (e) => {
    let t = dr(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  pr = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  mr = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    'stroke-width': 2,
    'stroke-linecap': `round`,
    'stroke-linejoin': `round`,
  };
function hr(e) {
  return e != null;
}
function gr(e, t = {}) {
  let n = t.attributeNames ?? {},
    r = (e) => n[e] ?? e,
    i = e.size ?? e.width ?? mr.width,
    a = e.size ?? e.height ?? mr.height,
    o =
      e.aliases?.filter((e) => typeof e == `string` && e.trim() !== ``).map((e) => `lucide-${e}`) ??
      [],
    s = [...(e.name ? [`lucide-${e.name}`] : []), ...o],
    c = t.className?.split(` `).filter(Boolean) ?? [],
    l = t.includeDefaultClasses === !1 ? pr(...c) : pr(`lucide`, ...s, ...c),
    u = t.absoluteStrokeWidth
      ? (Number(t.strokeWidth ?? mr[`stroke-width`]) * Number(e.size ?? e.width ?? mr.width)) /
        Number(t.size ?? t.width ?? mr.width)
      : (t.strokeWidth ?? mr[`stroke-width`]);
  return [
    `svg`,
    {
      ...Object.entries(mr).reduce((e, [t, n]) => ((e[r(t)] = n), e), {}),
      ...(`color` in t && t.color && { [r(`stroke`)]: t.color }),
      ...(`size` in t && hr(t.size) && { [r(`width`)]: t.size, [r(`height`)]: t.size }),
      ...(`width` in t && hr(t.width) && { [r(`width`)]: t.width }),
      ...(`height` in t && hr(t.height) && { [r(`height`)]: t.height }),
      [r(`stroke-width`)]: u,
      ...(l && { [r(`class`)]: l }),
      [r(`viewBox`)]: `0 0 ${i} ${a}`,
      ...(t.hasA11yProp === !1 ? { [r(`aria-hidden`)]: `true` } : {}),
      ...(`attributes` in t && t.attributes),
    },
    e.node.map((e) => {
      let [n, i, a] = e,
        o = t.nonScalingStroke ? { [r(`vector-effect`)]: `non-scaling-stroke`, ...i } : i;
      return a ? [n, o, a] : [n, o];
    }),
  ];
}
function _r(e, t = {}) {
  return gr(e, {
    ...t,
    attributeNames: {
      ...t.attributeNames,
      class: `className`,
      'stroke-width': `strokeWidth`,
      'stroke-linecap': `strokeLinecap`,
      'stroke-linejoin': `strokeLinejoin`,
      'vector-effect': `vectorEffect`,
    },
  });
}
var vr = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  yr = (0, l.createContext)({}),
  br = () => (0, l.useContext)(yr),
  xr = (0, l.forwardRef)(
    (
      {
        color: e,
        size: t,
        width: n,
        height: r,
        strokeWidth: i,
        absoluteStrokeWidth: a,
        nonScalingStroke: o,
        className: s = ``,
        children: c,
        iconNode: u = [],
        icon: d = { node: u, aliases: [], size: 24 },
        ...f
      },
      p,
    ) => {
      let {
          size: m = 24,
          strokeWidth: h = 2,
          absoluteStrokeWidth: g = !1,
          nonScalingStroke: _ = !1,
          color: v = `currentColor`,
          className: y = ``,
        } = br() ?? {},
        b = !!c || vr(f),
        [x, S, C = []] = _r(d, {
          color: e ?? v,
          width: n ?? t ?? m,
          height: r ?? t ?? m,
          strokeWidth: i ?? h,
          absoluteStrokeWidth: a ?? g,
          nonScalingStroke: o ?? _,
          className: pr(y, s),
          hasA11yProp: b,
          attributes: f,
        });
      return (0, l.createElement)(x, { ref: p, ...S }, [
        ...C.map(([e, t]) => (0, l.createElement)(e, t)),
        ...(Array.isArray(c) ? c : [c]),
      ]);
    },
  );
function Sr(e, t = [], n = []) {
  let r = typeof e == `string` ? ur(e, t, n) : e,
    i = (0, l.forwardRef)(({ className: e, ...t }, n) =>
      (0, l.createElement)(xr, { ref: n, icon: r, className: e, ...t }),
    );
  return (r.name && (i.displayName = fr(r.name)), i);
}
var Cr = {
  name: `arrow-down`,
  size: 24,
  node: [
    [`path`, { d: `M12 5v14`, key: `s699le` }],
    [`path`, { d: `m19 12-7 7-7-7`, key: `1idqje` }],
  ],
};
Cr.node;
var wr = Sr(Cr),
  Tr = {
    name: `arrow-right-to-line`,
    size: 24,
    node: [
      [`path`, { d: `M17 12H3`, key: `8awo09` }],
      [`path`, { d: `m11 18 6-6-6-6`, key: `8c2y43` }],
      [`path`, { d: `M21 5v14`, key: `nzette` }],
    ],
  };
Tr.node;
var Er = Sr(Tr),
  Dr = {
    name: `arrow-up`,
    size: 24,
    node: [
      [`path`, { d: `m5 12 7-7 7 7`, key: `hav0vg` }],
      [`path`, { d: `M12 19V5`, key: `x0mq9r` }],
    ],
  };
Dr.node;
var Or = Sr(Dr),
  kr = {
    name: `battery-plus`,
    size: 24,
    node: [
      [`path`, { d: `M10 9v6`, key: `17i7lo` }],
      [`path`, { d: `M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605`, key: `o09yah` }],
      [`path`, { d: `M22 14v-4`, key: `14q9d5` }],
      [`path`, { d: `M7 12h6`, key: `iekk3h` }],
      [`path`, { d: `M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606`, key: `xyqvf1` }],
    ],
  };
kr.node;
var Ar = Sr(kr),
  jr = {
    name: `circle-slash`,
    size: 24,
    node: [
      [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
      [`line`, { x1: `9`, x2: `15`, y1: `15`, y2: `9`, key: `1dfufj` }],
    ],
  };
jr.node;
var Mr = Sr(jr),
  Nr = {
    name: `copy`,
    size: 24,
    node: [
      [`rect`, { width: `14`, height: `14`, x: `8`, y: `8`, rx: `2`, ry: `2`, key: `17jyea` }],
      [`path`, { d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`, key: `zix9uf` }],
    ],
  };
Nr.node;
var Pr = Sr(Nr),
  Fr = {
    name: `corner-left-down`,
    size: 24,
    node: [
      [`path`, { d: `m14 15-5 5-5-5`, key: `1eia93` }],
      [`path`, { d: `M20 4h-7a4 4 0 0 0-4 4v12`, key: `nbpdq2` }],
    ],
  };
Fr.node;
var Ir = Sr(Fr),
  Lr = {
    name: `magnet`,
    size: 24,
    node: [
      [`path`, { d: `m12 15 4 4`, key: `lnac28` }],
      [
        `path`,
        {
          d: `M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z`,
          key: `nlhkjb`,
        },
      ],
      [`path`, { d: `m5 8 4 4`, key: `j6kj7e` }],
    ],
  };
Lr.node;
var Rr = Sr(Lr),
  zr = {
    name: `plus`,
    size: 24,
    node: [
      [`path`, { d: `M5 12h14`, key: `1ays0h` }],
      [`path`, { d: `M12 5v14`, key: `s699le` }],
    ],
  };
zr.node;
var Br = Sr(zr),
  Vr = {
    name: `shield-check`,
    size: 24,
    node: [
      [
        `path`,
        {
          d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
          key: `oel41y`,
        },
      ],
      [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
    ],
  };
Vr.node;
var Hr = Sr(Vr),
  Ur = {
    name: `trash`,
    size: 24,
    node: [
      [`path`, { d: `M10 11v6`, key: `nco0om` }],
      [`path`, { d: `M14 11v6`, key: `outv1u` }],
      [`path`, { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`, key: `miytrc` }],
      [`path`, { d: `M3 6h18`, key: `d0wm0j` }],
      [`path`, { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`, key: `e791ji` }],
    ],
    aliases: [`trash-2`],
  };
Ur.node;
var Wr = Sr(Ur),
  Gr = {
    name: `trending-down`,
    size: 24,
    node: [
      [`path`, { d: `M16 17h6v-6`, key: `t6n2it` }],
      [`path`, { d: `m22 17-8.5-8.5-5 5L2 7`, key: `x473p` }],
    ],
  };
Gr.node;
var Kr = Sr(Gr),
  qr = {
    name: `trending-up`,
    size: 24,
    node: [
      [`path`, { d: `M16 7h6v6`, key: `box55l` }],
      [`path`, { d: `m22 7-8.5 8.5-5-5L2 17`, key: `1t1m79` }],
    ],
  };
qr.node;
var Jr = Sr(qr),
  Yr = e((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if ((r !== void 0 && (i = `` + r), n.key !== void 0 && (i = `` + n.key), `key` in n))
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  N = e((e, t) => {
    t.exports = Yr();
  })(),
  Xr = {
    'ascent-cap-6': Jr,
    'ascent-cap-7': Jr,
    'descent-floor-7': Kr,
    recovery: Ar,
    relentless: Hr,
    'no-draft': Mr,
    nimble: Er,
    chase: Rr,
  },
  Zr = { 'ascent-cap-6': 6, 'ascent-cap-7': 7, 'descent-floor-7': 7 };
function Qr({ power: e, labelled: t = !1 }) {
  let n = tr[e],
    r = Xr[e],
    i = Zr[e];
  return (0, N.jsxs)(`span`, {
    className: `power-badge power-${e}`,
    title: `${n.name} — ${n.blurb}`,
    children: [
      (0, N.jsxs)(`span`, {
        className: `power-mark`,
        children: [
          i !== void 0 &&
            (0, N.jsx)(`span`, { className: `power-value`, 'aria-hidden': `true`, children: i }),
          (0, N.jsx)(r, {
            className: `power-icon`,
            size: t ? 15 : 13,
            strokeWidth: 2.5,
            'aria-hidden': `true`,
          }),
        ],
      }),
      t ? (0, N.jsx)(`span`, { className: `power-name`, children: n.name }) : null,
      t ? null : (0, N.jsx)(`span`, { className: `power-sr`, children: n.name }),
    ],
  });
}
function $r({ cards: e, struck: t = !1 }) {
  return (0, N.jsx)(`span`, {
    className: `deck-chips`,
    children: e.map((e, n) =>
      (0, N.jsxs)(
        `span`,
        {
          className: t ? `deck-chip is-out` : `deck-chip`,
          children: [e.value, e.powers?.map((e) => (0, N.jsx)(Qr, { power: e }, e))],
        },
        n,
      ),
    ),
  });
}
var ei = { rouleur: `Rouleur`, sprinteur: `Sprinteur` },
  ti = 8,
  ni = 8;
function ri(e) {
  let t = [];
  for (let n of e) {
    let e = t[t.length - 1];
    e && e[0] === n ? e.push(n) : t.push([n]);
  }
  return t;
}
function ii({ kind: e, specialist: t, children: n }) {
  let [r, i] = (0, l.useState)(null),
    [a, o] = (0, l.useState)(null),
    s = (0, l.useRef)(null);
  (0, l.useLayoutEffect)(() => {
    if (!r || !s.current) {
      o(null);
      return;
    }
    let e = s.current.getBoundingClientRect(),
      t = r.top - ti - e.height >= ni,
      n = r.left + r.width / 2 - e.width / 2;
    o({
      left: Math.min(Math.max(n, ni), window.innerWidth - e.width - ni),
      top: t ? r.top - ti - e.height : r.bottom + ti,
    });
  }, [r]);
  function c(e) {
    i(e.currentTarget.getBoundingClientRect());
  }
  function u() {
    i(null);
  }
  let d = rr(t ?? null),
    f = d ? A[d.id] : void 0;
  return (0, N.jsxs)(`span`, {
    className: `rider-tooltip-anchor`,
    tabIndex: 0,
    onPointerEnter: c,
    onPointerLeave: u,
    onFocus: c,
    onBlur: u,
    children: [
      n,
      r &&
        (0, $n.createPortal)(
          (0, N.jsxs)(`div`, {
            ref: s,
            role: `tooltip`,
            className: `rider-tooltip`,
            style: a ? { left: a.left, top: a.top } : { left: 0, top: 0, visibility: `hidden` },
            children: [
              (0, N.jsx)(`p`, { className: `rider-tooltip-name`, children: d ? d.name : ei[e] }),
              f
                ? (0, N.jsxs)(N.Fragment, {
                    children: [
                      (0, N.jsxs)(`p`, {
                        className: `rider-tooltip-row`,
                        children: [
                          (0, N.jsx)(`span`, { className: `rider-tooltip-sign`, children: `−` }),
                          (0, N.jsx)($r, {
                            cards: f.removed.map((e) => ({ value: e })),
                            struck: !0,
                          }),
                        ],
                      }),
                      (0, N.jsxs)(`p`, {
                        className: `rider-tooltip-row`,
                        children: [
                          (0, N.jsx)(`span`, { className: `rider-tooltip-sign`, children: `+` }),
                          (0, N.jsx)($r, { cards: f.added }),
                        ],
                      }),
                    ],
                  })
                : (0, N.jsx)(`div`, {
                    className: `rider-tooltip-deck`,
                    children: ri(oe(e)).map((e) =>
                      (0, N.jsx)($r, { cards: e.map((e) => ({ value: e })) }, e[0]),
                    ),
                  }),
            ],
          }),
          document.body,
        ),
    ],
  });
}
function ai(e) {
  let t = gn(e),
    n = (e) => t.filter((t) => t.kind === e).length;
  return [
    [n(`sprint`), `flat`],
    [n(`hill`), `hill`],
    [n(`cobbles`), `pavé`],
  ]
    .filter(([e]) => e > 0)
    .map(([e, t]) => `${e} ${t}`)
    .join(` · `);
}
function oi({
  tourStageCount: e,
  onStageCountChange: t,
  tourBreakaway: n,
  onBreakawayChange: r,
  tourSpecialists: i,
  onSpecialistsChange: a,
  onBack: o,
  onStart: s,
  disabled: c,
}) {
  return (0, N.jsx)(`div`, {
    className: `tour-settings-screen`,
    children: (0, N.jsxs)(`div`, {
      className: `tour-settings-card`,
      children: [
        (0, N.jsxs)(`header`, {
          className: `tour-settings-header`,
          children: [
            (0, N.jsx)(`button`, {
              type: `button`,
              className: `tour-settings-back`,
              onClick: o,
              children: `← Back`,
            }),
            (0, N.jsx)(`h1`, { style: { marginTop: 4 }, children: `Grand Tour` }),
          ],
        }),
        (0, N.jsxs)(`div`, {
          className: `tour-length`,
          children: [
            (0, N.jsxs)(`label`, {
              htmlFor: `tour-stages`,
              children: [`Tour length`, (0, N.jsx)(`small`, { children: ai(e) })],
            }),
            (0, N.jsx)(`input`, {
              id: `tour-stages`,
              type: `range`,
              min: dn.min,
              max: dn.max,
              step: 1,
              value: e,
              onChange: (e) => t(Number(e.target.value)),
            }),
          ],
        }),
        (0, N.jsxs)(`label`, {
          className: `tour-option`,
          children: [
            (0, N.jsx)(`input`, {
              type: `checkbox`,
              checked: n,
              onChange: (e) => r(e.target.checked),
            }),
            (0, N.jsxs)(`span`, {
              children: [
                `Breakaway on every stage`,
                (0, N.jsx)(`small`, {
                  children: `Two bid cards for a jump off the line — and two exhaustion cards for it.`,
                }),
              ],
            }),
          ],
        }),
        (0, N.jsxs)(`label`, {
          className: `tour-option`,
          children: [
            (0, N.jsx)(`input`, {
              type: `checkbox`,
              checked: i,
              onChange: (e) => a(e.target.checked),
            }),
            (0, N.jsxs)(`span`, {
              children: [
                `Specialist riders`,
                (0, N.jsx)(`small`, {
                  children: `Drafted once before stage 1, and kept for the whole tour.`,
                }),
              ],
            }),
          ],
        }),
        (0, N.jsx)(`button`, {
          type: `button`,
          className: `confirm-tour`,
          onClick: s,
          disabled: c,
          children: `Start Grand Tour`,
        }),
      ],
    }),
  });
}
var si = [2, 3, 4],
  ci = [`easy`, `normal`, `hard`, `expert`];
function li(e) {
  return Array.from({ length: e }, (e, t) => ({
    id: `player-${t}`,
    name: `Player ${t + 1}`,
    color: Qn[t],
    isCpu: t > 0,
    difficulty: `easy`,
    strategy: null,
  }));
}
function ui({ onStart: e, onStartTour: t, onOpenBuilder: n }) {
  let [r, i] = (0, l.useState)(() => li(2)),
    [a, o] = (0, l.useState)(v),
    [s, c] = (0, l.useState)(!1),
    [u, f] = (0, l.useState)(!1),
    [p, m] = (0, l.useState)(!1),
    [h, g] = (0, l.useState)(!1),
    [_, b] = (0, l.useState)(!1),
    [x, S] = (0, l.useState)(dn.default),
    [C, w] = (0, l.useState)(!1),
    T = a === v,
    [E, D] = (0, l.useState)(!0),
    [O, ee] = (0, l.useState)(d.default),
    te = T ? O : y[a].length,
    ne = !T || E;
  function re(e) {
    o(e);
  }
  function ie(e) {
    i((t) => {
      if (e > t.length) {
        let n = new Set(t.map((e) => e.color)),
          r = Array.from({ length: e - t.length }, (e, r) => {
            let i = t.length + r,
              a = Qn.find((e) => !n.has(e)) ?? Qn[i];
            return (
              n.add(a),
              {
                id: `player-${i}`,
                name: `Player ${i + 1}`,
                color: a,
                isCpu: !0,
                difficulty: `easy`,
                strategy: null,
              }
            );
          });
        return [...t, ...r];
      }
      return t.slice(0, e);
    });
  }
  function ae(e, t) {
    i((n) => n.map((n) => (n.id === e ? { ...n, name: t } : n)));
  }
  function oe(e, t) {
    i((n) => n.map((n) => (n.id === e ? { ...n, color: t } : n)));
  }
  function k(e, t) {
    i((n) =>
      n.map((n) => (n.id === e ? { ...n, isCpu: t, difficulty: `easy`, strategy: null } : n)),
    );
  }
  function A(e, t) {
    i((n) => n.map((n) => (n.id === e ? { ...n, difficulty: t, strategy: null } : n)));
  }
  let se = { manualPlacement: s, mountains: ne, stageLength: te, courseName: a },
    ce = r.some((e) => e.name.trim() === ``);
  return C
    ? (0, N.jsx)(oi, {
        tourStageCount: x,
        onStageCountChange: S,
        tourBreakaway: p,
        onBreakawayChange: m,
        tourSpecialists: _,
        onSpecialistsChange: b,
        onBack: () => w(!1),
        onStart: () => t(r, { ...se, breakaway: p, specialists: _ }, x),
        disabled: ce,
      })
    : (0, N.jsxs)(`div`, {
        className: `menu-screen`,
        children: [
          (0, N.jsxs)(`header`, {
            className: `menu-header`,
            children: [
              (0, N.jsx)(`span`, {
                className: `menu-kite`,
                'aria-hidden': `true`,
                children: `1 km`,
              }),
              (0, N.jsxs)(`h1`, { children: [`Flamme`, (0, N.jsx)(`br`, {}), `Rouge`] }),
              (0, N.jsx)(`p`, {
                className: `menu-tagline`,
                children: `Hotseat racing · 2–4 teams · one device`,
              }),
            ],
          }),
          (0, N.jsxs)(`div`, {
            className: `menu-card`,
            children: [
              (0, N.jsxs)(`fieldset`, {
                className: `player-count`,
                children: [
                  (0, N.jsx)(`legend`, { children: `Teams` }),
                  (0, N.jsx)(`div`, {
                    className: `segmented`,
                    children: si.map((e) =>
                      (0, N.jsxs)(
                        `label`,
                        {
                          className: `segment`,
                          children: [
                            (0, N.jsx)(`input`, {
                              type: `radio`,
                              name: `player-count`,
                              checked: r.length === e,
                              onChange: () => ie(e),
                            }),
                            (0, N.jsx)(`span`, { children: e }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              (0, N.jsx)(`span`, { className: `field-label`, children: `Riders` }),
              (0, N.jsx)(`div`, {
                className: `player-list`,
                children: r.map((e) => {
                  let t = new Set(r.filter((t) => t.id !== e.id).map((e) => e.color));
                  return (0, N.jsxs)(
                    `div`,
                    {
                      className: `player-row`,
                      children: [
                        (0, N.jsx)(`button`, {
                          type: `button`,
                          className: `cpu-toggle`,
                          'aria-pressed': e.isCpu,
                          'aria-label': `${e.name} is played by the CPU`,
                          onClick: () => k(e.id, !e.isCpu),
                          children: `CPU`,
                        }),
                        (0, N.jsxs)(`span`, {
                          className: `team-riders`,
                          children: [
                            (0, N.jsx)(ii, {
                              kind: `rouleur`,
                              children: (0, N.jsx)(`span`, {
                                className: `team-rider`,
                                style: { backgroundColor: e.color },
                                children: `R`,
                              }),
                            }),
                            (0, N.jsx)(ii, {
                              kind: `sprinteur`,
                              children: (0, N.jsx)(`span`, {
                                className: `team-rider`,
                                style: { backgroundColor: e.color },
                                children: `S`,
                              }),
                            }),
                          ],
                        }),
                        (0, N.jsx)(`input`, {
                          type: `text`,
                          value: e.name,
                          onChange: (t) => ae(e.id, t.target.value),
                          'aria-label': `Name for ${e.id}`,
                        }),
                        (0, N.jsx)(`div`, {
                          className: `color-swatches`,
                          role: `radiogroup`,
                          'aria-label': `Color for ${e.name}`,
                          children: Qn.map((n) =>
                            (0, N.jsx)(
                              `button`,
                              {
                                type: `button`,
                                className: `color-swatch`,
                                style: { backgroundColor: n },
                                disabled: t.has(n) && e.color !== n,
                                'aria-pressed': e.color === n,
                                'aria-label': n,
                                onClick: () => oe(e.id, n),
                              },
                              n,
                            ),
                          ),
                        }),
                        e.isCpu &&
                          (0, N.jsx)(`div`, {
                            className: `difficulty-picker`,
                            role: `radiogroup`,
                            'aria-label': `Difficulty for ${e.name}`,
                            children: ci.map((t) =>
                              (0, N.jsx)(
                                `button`,
                                {
                                  type: `button`,
                                  className: `difficulty-option`,
                                  'aria-pressed': e.difficulty === t,
                                  onClick: () => A(e.id, t),
                                  children: t,
                                },
                                t,
                              ),
                            ),
                          }),
                      ],
                    },
                    e.id,
                  );
                }),
              }),
              (0, N.jsx)(`span`, { className: `field-label`, children: `Course` }),
              (0, N.jsxs)(`div`, {
                className: `course-list`,
                role: `radiogroup`,
                'aria-label': `Course`,
                children: [
                  (0, N.jsxs)(
                    `label`,
                    {
                      className: `course-option`,
                      children: [
                        (0, N.jsx)(`input`, {
                          type: `radio`,
                          name: `course`,
                          checked: a === v,
                          onChange: () => re(v),
                        }),
                        (0, N.jsx)(`span`, { children: v }),
                      ],
                    },
                    v,
                  ),
                  (0, N.jsx)(`span`, {
                    className: `field-label course-subsection`,
                    children: `Classics`,
                  }),
                  Object.keys(y)
                    .filter((e) => e !== v)
                    .map((e) =>
                      (0, N.jsxs)(
                        `label`,
                        {
                          className: `course-option`,
                          children: [
                            (0, N.jsx)(`input`, {
                              type: `radio`,
                              name: `course`,
                              checked: a === e,
                              onChange: () => re(e),
                            }),
                            (0, N.jsx)(`span`, { children: e }),
                          ],
                        },
                        e,
                      ),
                    ),
                ],
              }),
              (0, N.jsxs)(`details`, {
                className: `advanced`,
                children: [
                  (0, N.jsx)(`summary`, { children: `Advanced settings` }),
                  (0, N.jsxs)(`label`, {
                    className: `advanced-option`,
                    children: [
                      (0, N.jsx)(`input`, {
                        type: `checkbox`,
                        checked: s,
                        onChange: (e) => c(e.target.checked),
                      }),
                      (0, N.jsxs)(`span`, {
                        children: [
                          `Manual rider placement`,
                          (0, N.jsx)(`small`, {
                            children: `Teams take turns putting one rider on the grid at a time; a CPU takes the free tile closest to the line, Rouleur first.`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`label`, {
                    className: `advanced-option`,
                    children: [
                      (0, N.jsx)(`input`, {
                        type: `checkbox`,
                        checked: ne,
                        disabled: !T,
                        onChange: (e) => D(e.target.checked),
                      }),
                      (0, N.jsxs)(`span`, {
                        children: [
                          `Special terrain`,
                          (0, N.jsx)(`small`, {
                            children: T
                              ? `Turning this off turns the mountain and the cobbles into flat road.`
                              : `Every course is authored with its climbs in place — max 5 up, min 5 down.`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`label`, {
                    className: `advanced-option`,
                    children: [
                      (0, N.jsx)(`input`, {
                        type: `checkbox`,
                        checked: u,
                        onChange: (e) => f(e.target.checked),
                      }),
                      (0, N.jsxs)(`span`, {
                        children: [
                          `Breakaway`,
                          (0, N.jsx)(`small`, {
                            children: `Before the flag, each team bids two cards with one rider; the biggest total jumps five tiles up the road and pays for it with two exhaustion cards.`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`label`, {
                    className: `advanced-option`,
                    children: [
                      (0, N.jsx)(`input`, {
                        type: `checkbox`,
                        checked: h,
                        onChange: (e) => g(e.target.checked),
                      }),
                      (0, N.jsxs)(`span`, {
                        children: [
                          `Specialist riders`,
                          (0, N.jsx)(`small`, {
                            children: `Before the flag, each team drafts one of twelve Specialists per rider — a customised deck, and on six of them a power that rides on the card.`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `advanced-option advanced-range`,
                    children: [
                      (0, N.jsxs)(`label`, {
                        htmlFor: `stage-length`,
                        children: [
                          `Stage length`,
                          (0, N.jsxs)(`small`, {
                            children: [te, ` tiles`, T ? `` : ` — fixed by the course`],
                          }),
                        ],
                      }),
                      (0, N.jsx)(`input`, {
                        id: `stage-length`,
                        type: `range`,
                        min: d.min,
                        max: d.max,
                        step: 1,
                        value: te,
                        disabled: !T,
                        onChange: (e) => ee(Number(e.target.value)),
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsx)(`button`, {
                type: `button`,
                className: `start-race`,
                onClick: () => e(r, { ...se, breakaway: u, specialists: h }),
                disabled: ce,
                children: `Start Race`,
              }),
              (0, N.jsxs)(`button`, {
                type: `button`,
                className: `start-tour`,
                onClick: () => w(!0),
                disabled: ce,
                children: [
                  `Grand Tour`,
                  (0, N.jsx)(`small`, {
                    children: `Multiple stages · three jerseys · yesterday's legs`,
                  }),
                ],
              }),
              (0, N.jsx)(`button`, {
                type: `button`,
                className: `open-builder`,
                onClick: n,
                children: `Course builder`,
              }),
            ],
          }),
        ],
      });
}
function di(e, t, n) {
  return { ...e, riders: e.riders.map((e) => (e.id === t ? n(e) : e)) };
}
function fi(e, t) {
  return e.riders.filter((e) => e.playerId === t);
}
function pi(e) {
  return e.players[e.activePlayerIndex];
}
function mi(e, t) {
  return fi(e, t).every((e) => me(e.deck));
}
function hi(e) {
  let t = e.activePlayerIndex;
  for (; t < e.players.length && mi(e, e.players[t].id); ) t += 1;
  return t >= e.players.length ? { ...e, phase: `reveal` } : { ...e, activePlayerIndex: t };
}
function gi(e, t) {
  return e.phase !== `energy` ||
    t.playerId !== pi(e).id ||
    pi(e).isCpu ||
    me(t.deck) ||
    t.deck.hand.length > 0
    ? !1
    : fi(e, t.playerId).every((e) => e.deck.hand.length === 0);
}
function _i(e, t) {
  return di(e, t, (e) => ({ ...e, deck: he(e.deck) }));
}
function vi(e, t, n) {
  return hi(
    di(e, t, (e) => {
      let t = e.deck.hand.find((e) => e.id === n)?.powers.includes(`recovery`) ? j(e.deck) : e.deck;
      return { ...e, deck: ge(t, n) };
    }),
  );
}
function yi(e) {
  return e.phase === `energy` && pi(e).isCpu;
}
function bi(e, t) {
  if (!yi(e)) return e;
  let n = pi(e),
    r = fi(e, n.id).find((e) => !me(e.deck));
  if (!r) return e;
  let i = _i(e, r.id),
    a = ft(
      i.riders.find((e) => e.id === r.id),
      n,
      t,
      i.riders,
    );
  return a ? vi(i, r.id, a.id) : i;
}
function xi(e) {
  return { ...e, phase: `moving` };
}
function Si(e) {
  return { ...e, phase: `slipstream` };
}
function Ci(e, t) {
  return di(e, t.riderId, (e) => ({ ...e, rankIndex: t.rankIndex, slot: t.slot }));
}
function wi(e, t, n) {
  let r = $t(e);
  if (an(r, n)) return { ...r, phase: `finished`, exhaustedRiderIds: [] };
  let i = Fe(r, t).filter(
    (e) => !r.riders.find((t) => t.id === e)?.deck.played?.powers.includes(`relentless`),
  );
  return {
    ...r,
    phase: `end`,
    exhaustedRiderIds: i,
    riders: r.riders.map((e) =>
      i.includes(e.id)
        ? { ...e, deck: { ...e.deck, recycled: [...e.deck.recycled, ue(e.id, r.round)] } }
        : e,
    ),
  };
}
function Ti(e) {
  return hi({
    ...e,
    round: e.round + 1,
    phase: `energy`,
    activePlayerIndex: 0,
    exhaustedRiderIds: [],
    riders: e.riders.map((e) => ({ ...e, deck: { ...e.deck, played: null } })),
  });
}
var Ei = { straight: 0, 'soft-turn': 45, 'sharp-turn': 90 },
  Di = [`right`, `left`];
function Oi(e) {
  return { x: -Math.sin(e), y: Math.cos(e) };
}
function ki(e) {
  return e === `right` ? 1 : -1;
}
function Ai(e, t) {
  let n = Oi(e.heading),
    r = ki(t) * 17;
  return { x: e.x + n.x * r, y: e.y + n.y * r };
}
function ji(e, t, n) {
  let r = e.x - t.x,
    i = e.y - t.y,
    a = Math.cos(n),
    o = Math.sin(n);
  return { x: t.x + r * a - i * o, y: t.y + r * o + i * a };
}
function Mi(e) {
  return e.toFixed(2);
}
function Ni(e) {
  let t = { x: 0, y: 0, heading: 0 },
    n = (e) => {
      let n = Ai(t, e);
      return { slot: e, d: `M ${Mi(n.x)} ${Mi(n.y)}`, rankDistances: [], segmentEnds: [] };
    },
    r = { right: n(`right`), left: n(`left`) },
    i = { right: 0, left: 0 };
  for (let n of e.segments) {
    let e = (Ei[n.shape] * Math.PI) / 180,
      a = { right: 0, left: 0 };
    if (e === 0) {
      let e = n.ranks * 46;
      t = {
        x: t.x + Math.cos(t.heading) * e,
        y: t.y + Math.sin(t.heading) * e,
        heading: t.heading,
      };
      for (let n of Di) {
        let i = Ai(t, n);
        ((r[n].d += ` L ${Mi(i.x)} ${Mi(i.y)}`), (a[n] = e));
      }
    } else {
      let i = n.direction === `left` ? -1 : 1,
        o = (n.ranks * 46) / e,
        s = Oi(t.heading),
        c = { x: t.x + s.x * o * i, y: t.y + s.y * o * i },
        l = ji(t, c, e * i);
      t = { x: l.x, y: l.y, heading: t.heading + e * i };
      for (let n of Di) {
        let s = o - i * ki(n) * 17,
          c = Ai(t, n),
          l = +(i > 0),
          u = +(e > Math.PI);
        ((r[n].d += ` A ${Mi(s)} ${Mi(s)} 0 ${u} ${l} ${Mi(c.x)} ${Mi(c.y)}`), (a[n] = s * e));
      }
    }
    for (let e of Di) {
      let t = a[e] / n.ranks;
      for (let a = 0; a < n.ranks; a += 1) r[e].rankDistances.push(i[e] + (a + 0.5) * t);
      ((i[e] += a[e]), r[e].segmentEnds.push(i[e]));
    }
  }
  return r;
}
function Pi(e) {
  let t = { x: 0, y: 0, heading: 0 },
    n = [];
  for (let r of e.segments) {
    let e = (Ei[r.shape] * Math.PI) / 180;
    if (e === 0) {
      let e = r.ranks * 46;
      for (let e = 0; e < r.ranks; e += 1) {
        let r = (e + 0.5) * 46;
        n.push({ x: t.x + Math.cos(t.heading) * r, y: t.y + Math.sin(t.heading) * r });
      }
      t = {
        x: t.x + Math.cos(t.heading) * e,
        y: t.y + Math.sin(t.heading) * e,
        heading: t.heading,
      };
    } else {
      let i = r.direction === `left` ? -1 : 1,
        a = (r.ranks * 46) / e,
        o = Oi(t.heading),
        s = { x: t.x + o.x * a * i, y: t.y + o.y * a * i };
      for (let a = 0; a < r.ranks; a += 1) {
        let o = (a + 0.5) / r.ranks;
        n.push(ji(t, s, e * i * o));
      }
      let c = ji(t, s, e * i);
      t = { x: c.x, y: c.y, heading: t.heading + e * i };
    }
  }
  return n;
}
function Fi(e) {
  let t = Pi(e),
    n = [];
  for (let e = 0; e < t.length; e += 1)
    for (let r = e + 3 + 1; r < t.length; r += 1) {
      let i = t[e].x - t[r].x,
        a = t[e].y - t[r].y;
      Math.hypot(i, a) < 34 && n.push([e, r]);
    }
  return n;
}
var Ii = {
  overall: `leads the overall`,
  sprint: `leads the sprint classification`,
  climb: `leads the climb classification`,
};
function Li({ rider: e, color: t, jersey: n, winner: r = !1 }) {
  let i = e.kind === `rouleur` ? `R` : `S`;
  return (0, N.jsxs)(`g`, {
    className: `rider-token${r ? ` is-winner` : ``}`,
    children: [
      (0, N.jsxs)(`title`, { children: [e.kind, n ? ` — ${Ii[n]}` : ``] }),
      n && (0, N.jsx)(`circle`, { className: `rider-jersey jersey-${n}`, r: 13.5 }),
      (0, N.jsx)(`circle`, { r: 10, fill: t }),
      (0, N.jsx)(`text`, {
        className: `rider-token-label`,
        textAnchor: `middle`,
        dy: `0.34em`,
        children: i,
      }),
    ],
  });
}
var P = [`right`, `left`],
  F = new Set(),
  I = 1,
  Ri = 3,
  zi = 0.5;
function Bi(e) {
  return Math.round(e * 100) / 100;
}
var Vi = 1,
  Hi = 9,
  Ui = 6,
  Wi = 2.2,
  Gi = 0.6,
  Ki = 6,
  qi = 17 + Ki + 12;
function Ji(e, t, n) {
  if (n < 0) return null;
  let [r, i] = P.map((r) => {
    let i = e[r],
      a = t[r].segmentEnds[n];
    return !i || a === void 0 ? null : i.getPointAtLength(Math.min(a, i.getTotalLength()));
  });
  return !r || !i ? null : { x1: r.x, y1: r.y, x2: i.x, y2: i.y };
}
function Yi(e, t) {
  let n = e.x2 - e.x1,
    r = e.y2 - e.y1,
    i = Math.hypot(n, r) || 1,
    a = { x: (n / i) * t, y: (r / i) * t };
  return { x1: e.x1 - a.x, y1: e.y1 - a.y, x2: e.x2 + a.x, y2: e.y2 + a.y };
}
function Xi(e, t) {
  let n = e.x2 - e.x1,
    r = e.y2 - e.y1,
    i = Math.hypot(n, r) || 1,
    a = { x: -r / i, y: n / i };
  return [1, -1].map((n) => {
    let r = (t / 4) * n;
    return { x1: e.x1 + a.x * r, y1: e.y1 + a.y * r, x2: e.x2 + a.x * r, y2: e.y2 + a.y * r };
  });
}
function Zi(e, t) {
  let n = [];
  for (let r of P) {
    let i = e[r].rankDistances,
      a = (e) => {
        if (e <= 0) return i[0] - (i[1] - i[0]) / 2;
        if (e >= i.length) {
          let e = i.length - 1;
          return i[e] + (i[e] - i[e - 1]) / 2;
        }
        return (i[e - 1] + i[e]) / 2;
      };
    t.forEach((e, t) => {
      if (e <= 0) return;
      let i = Math.max(0, a(t) - Gi),
        o = a(t + 1) + Gi;
      n.push({ slot: r, dash: `0 ${Bi(i)} ${Bi(o - i)} ${Bi(o * 2 + 1e3)}`, drop: e * Wi });
    });
  }
  return n;
}
function Qi({
  course: e,
  gameState: t,
  placeableSpots: n = [],
  breakawaySpot: r = null,
  onPlace: i,
  jerseys: a = {},
  compact: o = !1,
  winners: s = F,
}) {
  let c = (0, l.useMemo)(() => Ni(e), [e]),
    u = (0, l.useMemo)(() => E(e), [e]),
    d = (0, l.useMemo)(() => Zi(c, ee(e)), [c, e]),
    f = (0, l.useRef)(null),
    p = (0, l.useRef)({}),
    [m, h] = (0, l.useState)({ tiles: [], finishLine: null, viewBox: `0 0 100 100` }),
    { tiles: g, finishLine: _, viewBox: v } = m,
    [y, b] = (0, l.useState)(1);
  (0, l.useLayoutEffect)(() => {
    let t = [],
      n = {},
      r = {};
    for (let e of P) {
      let t = p.current[e];
      if (!t) return;
      ((n[e] = t), (r[e] = t.getTotalLength()));
    }
    let i = (e, t) => {
        let i = n[e],
          a = r[e],
          o = Math.min(c[e].rankDistances[t], a);
        return { point: i.getPointAtLength(o), ahead: i.getPointAtLength(Math.min(o + Vi, a)) };
      },
      a = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI;
    c.right.rankDistances.forEach((e, n) => {
      let r = u[n]?.narrowSlot;
      if (r) {
        let e = i(`right`, n),
          o = i(`left`, n),
          s = { x: (e.point.x + o.point.x) / 2, y: (e.point.y + o.point.y) / 2 },
          c = { x: (e.ahead.x + o.ahead.x) / 2, y: (e.ahead.y + o.ahead.y) / 2 };
        t.push({ rankIndex: n, slot: r, x: s.x, y: s.y, angle: a(s, c) });
        return;
      }
      for (let e of P) {
        let { point: r, ahead: o } = i(e, n);
        t.push({ rankIndex: n, slot: e, x: r.x, y: r.y, angle: a(r, o) });
      }
    });
    let o = f.current;
    if (!o) return;
    let s = o.getBBox(),
      l = e.segments.findIndex((e) => e.role === `finish`);
    h({
      tiles: t,
      finishLine: Ji(p.current, c, l - 1),
      viewBox: `${s.x - 28} ${s.y - 28} ${s.width + 56} ${s.height + 56}`,
    });
  }, [c, e, u]);
  let x = new Map((t?.players ?? []).map((e) => [e.id, e.color])),
    S = new Map(g.map((e) => [`${e.rankIndex}-${e.slot}`, e])),
    C = new Set(n.map((e) => `${e.rankIndex}-${e.slot}`)),
    w = r ? `${r.rankIndex}-${r.slot}` : null,
    T = (e) => {
      let t = S.get(`${e}-right`),
        n = S.get(`${e}-left`);
      return t && n ? { x: (t.x + n.x) / 2, y: (t.y + n.y) / 2 } : (t ?? n ?? null);
    },
    D = (t?.bonuses ?? []).flatMap((e) => {
      let t = S.get(`${e.rankIndex}-right`),
        n = S.get(`${e.rankIndex}-left`),
        r = t ?? n;
      if (!r) return [];
      let i =
          t && n
            ? { x: t.x - n.x, y: t.y - n.y }
            : { x: -Math.sin((r.angle * Math.PI) / 180), y: Math.cos((r.angle * Math.PI) / 180) },
        a = Math.hypot(i.x, i.y) || 1,
        o = T(e.rankIndex - 1),
        s = T(e.rankIndex) ?? r,
        c = o ? { x: (o.x + s.x) / 2, y: (o.y + s.y) / 2 } : s;
      return [{ bonus: e, x: c.x + (i.x / a) * qi, y: c.y + (i.y / a) * qi }];
    });
  return (0, N.jsxs)(`div`, {
    className: `track-wrap`,
    children: [
      (0, N.jsxs)(`div`, {
        className: `track-zoom-controls`,
        children: [
          (0, N.jsx)(`button`, {
            type: `button`,
            onClick: () => b((e) => Math.max(I, Bi(e - zi))),
            disabled: y <= I,
            'aria-label': `Zoom out`,
            children: `−`,
          }),
          (0, N.jsxs)(`span`, {
            className: `track-zoom-level`,
            children: [Math.round(y * 100), `%`],
          }),
          (0, N.jsx)(`button`, {
            type: `button`,
            onClick: () => b((e) => Math.min(Ri, Bi(e + zi))),
            disabled: y >= Ri,
            'aria-label': `Zoom in`,
            children: `+`,
          }),
        ],
      }),
      (0, N.jsx)(`div`, {
        className: `track-scroll${o ? ` is-compact` : ``}`,
        children: (0, N.jsx)(`div`, {
          className: `track-zoom`,
          style: { transform: `scale(${y})` },
          children: (0, N.jsxs)(`svg`, {
            className: `track-svg${t?.phase === `moving` ? ` is-riding` : ``}${t?.phase === `slipstream` ? ` is-slipstream` : ``}`,
            viewBox: v,
            role: `img`,
            'aria-label': e.name,
            children: [
              (0, N.jsx)(`defs`, {
                children: (0, N.jsxs)(`pattern`, {
                  id: `asphalt-texture`,
                  width: 9,
                  height: 9,
                  patternUnits: `userSpaceOnUse`,
                  patternTransform: `rotate(15)`,
                  children: [
                    (0, N.jsx)(`rect`, { className: `asphalt-texture-base`, width: 9, height: 9 }),
                    (0, N.jsx)(`circle`, {
                      className: `asphalt-texture-fleck-light`,
                      cx: 2,
                      cy: 2,
                      r: 0.6,
                    }),
                    (0, N.jsx)(`circle`, {
                      className: `asphalt-texture-fleck-light`,
                      cx: 6,
                      cy: 5.5,
                      r: 0.45,
                    }),
                    (0, N.jsx)(`circle`, {
                      className: `asphalt-texture-fleck-dark`,
                      cx: 4.5,
                      cy: 7.5,
                      r: 0.5,
                    }),
                  ],
                }),
              }),
              (0, N.jsx)(`g`, {
                className: `road-shadow`,
                'aria-hidden': `true`,
                children: d.map((e, t) =>
                  (0, N.jsx)(
                    `path`,
                    {
                      d: c[e.slot].d,
                      strokeWidth: 34,
                      strokeDasharray: e.dash,
                      transform: `translate(0 ${e.drop})`,
                    },
                    `${e.slot}-${t}`,
                  ),
                ),
              }),
              (0, N.jsx)(`g`, {
                className: `road-verge`,
                'aria-hidden': `true`,
                children: P.map((e) =>
                  (0, N.jsx)(`path`, { d: c[e].d, strokeWidth: (17 + Ki) * 2 }, e),
                ),
              }),
              (0, N.jsx)(`g`, {
                ref: f,
                className: `road`,
                children: P.map((e) =>
                  (0, N.jsx)(
                    `path`,
                    {
                      ref: (t) => {
                        p.current[e] = t;
                      },
                      className: `road-lane`,
                      d: c[e].d,
                      strokeWidth: 34,
                    },
                    e,
                  ),
                ),
              }),
              _ &&
                (0, N.jsxs)(`g`, {
                  className: `finish-line${s.size > 0 ? ` is-decided` : ``}`,
                  children: [
                    (0, N.jsx)(`line`, {
                      className: `finish-line-base`,
                      ...Yi(_, 17),
                      strokeWidth: Hi,
                    }),
                    Xi(Yi(_, 17), Hi).map((e, t) =>
                      (0, N.jsx)(
                        `line`,
                        {
                          className: `finish-line-check`,
                          x1: e.x1,
                          y1: e.y1,
                          x2: e.x2,
                          y2: e.y2,
                          strokeWidth: Hi / 2,
                          strokeDasharray: `${Ui} ${Ui}`,
                          strokeDashoffset: t * Ui,
                        },
                        t,
                      ),
                    ),
                  ],
                }),
              g.map((e) => {
                let t = u[e.rankIndex];
                if (!t) return null;
                let n = `${e.rankIndex}-${e.slot}`,
                  r = C.has(n);
                return (0, N.jsx)(
                  `g`,
                  {
                    transform: `translate(${e.x} ${e.y}) rotate(${e.angle})`,
                    children: (0, N.jsx)(`rect`, {
                      className: [
                        `track-tile`,
                        `terrain-${t.terrain}`,
                        t.isStart ? `tile-start` : ``,
                        t.isFinish ? `tile-finish` : ``,
                        n === w ? `tile-breakaway` : ``,
                        r ? `tile-placeable` : ``,
                      ]
                        .filter(Boolean)
                        .join(` `),
                      onClick: r ? () => i?.({ rankIndex: e.rankIndex, slot: e.slot }) : void 0,
                      x: -14,
                      y: -14,
                      width: 28,
                      height: 28,
                      rx: 4,
                    }),
                  },
                  `${e.rankIndex}-${e.slot}`,
                );
              }),
              D.map(({ bonus: e, x: n, y: r }) => {
                let i = e.takenBy.length >= e.points.length,
                  a = i && e.settledRound === t?.round;
                return (0, N.jsx)(
                  `g`,
                  {
                    transform: `translate(${n} ${r})`,
                    children: (0, N.jsxs)(`g`, {
                      className: `bonus-marker bonus-${e.kind}${i ? ` is-taken` : ``}${a ? ` is-just-taken` : ``}`,
                      children: [
                        (0, N.jsxs)(`title`, {
                          children: [
                            e.kind === `sprint` ? `Sprint` : `Climb`,
                            ` bonus —`,
                            ` `,
                            e.points.join(` / `),
                            ` points`,
                          ],
                        }),
                        (0, N.jsx)(`circle`, { r: 9 }),
                        (0, N.jsx)(`text`, {
                          className: `bonus-marker-points`,
                          textAnchor: `middle`,
                          dy: `0.34em`,
                          children: e.points[0],
                        }),
                      ],
                    }),
                  },
                  `bonus-${e.rankIndex}-${e.kind}`,
                );
              }),
              (t?.riders ?? []).map((e) => {
                let t = S.get(`${e.rankIndex}-${e.slot}`);
                return t
                  ? (0, N.jsx)(
                      `g`,
                      {
                        className: `rider-anchor`,
                        style: { transform: `translate(${t.x}px, ${t.y}px)` },
                        children: (0, N.jsx)(Li, {
                          rider: e,
                          color: x.get(e.playerId) ?? `var(--asphalt)`,
                          jersey: a[e.id],
                          winner: s.has(e.id),
                        }),
                      },
                      e.id,
                    )
                  : null;
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function $i({ gameState: e, finishRank: t }) {
  let n = e.phase !== `moving` && e.phase !== `slipstream`,
    [r, i] = (0, l.useState)(() => ({ board: e, gaps: on(e, t) }));
  n && e !== r.board && i({ board: e, gaps: on(e, t) });
  let { toGo: a, groups: o } = r.gaps;
  if (o.length === 0) return null;
  let s = new Map(e.players.map((e) => [e.id, e.color]));
  return (0, N.jsxs)(`div`, {
    className: `gap-bar`,
    'aria-label': `Gaps on the road`,
    children: [
      (0, N.jsxs)(`span`, {
        className: `gap-bar-togo`,
        children: [(0, N.jsx)(`strong`, { children: a * 1 }), ` km to go`],
      }),
      (0, N.jsx)(`div`, {
        className: `gap-bar-chain`,
        children: o.map((e) =>
          (0, N.jsxs)(
            l.Fragment,
            {
              children: [
                e.gapToAhead !== null &&
                  (0, N.jsx)(`span`, { className: `gap-bar-split`, children: nn(e.gapToAhead) }),
                (0, N.jsxs)(`span`, {
                  className: `gap-bar-group${e.label === `PEL` ? ` is-peloton` : ``}`,
                  title: `${e.riders.length} rider${e.riders.length === 1 ? `` : `s`}`,
                  children: [
                    (0, N.jsx)(`span`, { className: `gap-bar-label`, children: e.label }),
                    (0, N.jsx)(`span`, {
                      className: `gap-bar-riders`,
                      'aria-hidden': `true`,
                      children: e.riders.map((e) =>
                        (0, N.jsx)(
                          `span`,
                          {
                            className: `gap-bar-dot`,
                            style: { backgroundColor: s.get(e.playerId) },
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            },
            e.label,
          ),
        ),
      }),
    ],
  });
}
var ea = { rouleur: `Rouleur`, sprinteur: `Sprinteur` };
function ta({ player: e, pending: t, selectedRiderId: n, onSelect: r }) {
  return (0, N.jsxs)(`div`, {
    className: `placement-tray`,
    children: [
      (0, N.jsxs)(`p`, {
        className: `placement-tray-prompt`,
        children: [
          (0, N.jsx)(`strong`, { style: { color: e.color }, children: e.name }),
          ` — pick a rider, then a free tile on the grid`,
        ],
      }),
      (0, N.jsx)(`div`, {
        className: `placement-tray-riders`,
        children: t.map((t) =>
          (0, N.jsxs)(
            `button`,
            {
              type: `button`,
              className: `placement-rider`,
              'aria-pressed': t.id === n,
              onClick: () => r(t.id),
              children: [
                (0, N.jsx)(`span`, {
                  className: `placement-rider-token`,
                  style: { backgroundColor: e.color },
                  children: t.kind === `rouleur` ? `R` : `S`,
                }),
                ea[t.kind],
              ],
            },
            t.id,
          ),
        ),
      }),
    ],
  });
}
var na = { rouleur: `Rouleur`, sprinteur: `Sprinteur` };
function ra({ player: e, choices: t, onPick: n }) {
  return (0, N.jsxs)(`div`, {
    className: `breakaway-tray`,
    children: [
      (0, N.jsxs)(`p`, {
        className: `breakaway-tray-prompt`,
        children: [
          (0, N.jsx)(`strong`, { style: { color: e.color }, children: e.name }),
          ` — who is going for the breakaway? They bid twice, and the biggest total gets away.`,
        ],
      }),
      (0, N.jsx)(`div`, {
        className: `breakaway-tray-riders`,
        children: t.map((t) =>
          (0, N.jsxs)(
            `button`,
            {
              type: `button`,
              className: `breakaway-rider`,
              onClick: () => n(t.id),
              children: [
                (0, N.jsx)(`span`, {
                  className: `breakaway-rider-token`,
                  style: { backgroundColor: e.color },
                  children: t.kind === `rouleur` ? `R` : `S`,
                }),
                na[t.kind],
              ],
            },
            t.id,
          ),
        ),
      }),
    ],
  });
}
function L({
  value: e,
  isExhaustion: t,
  powers: n = [],
  faceDown: r,
  caption: i,
  small: a,
  onClick: o,
  title: s,
}) {
  let c = [
      `card`,
      r ? `card-back` : `card-front`,
      t && !r ? `card-exhaustion` : ``,
      a ? `card-small` : ``,
    ]
      .filter(Boolean)
      .join(` `),
    l = r
      ? (0, N.jsx)(`span`, { className: `card-caption`, children: i })
      : (0, N.jsxs)(N.Fragment, {
          children: [
            n.length > 0 &&
              (0, N.jsx)(`span`, {
                className: `card-powers`,
                children: n.map((e) => (0, N.jsx)(Qr, { power: e }, e)),
              }),
            (0, N.jsx)(`span`, { className: `card-value`, children: e }),
            t && (0, N.jsx)(`span`, { className: `card-tag`, children: `exh` }),
          ],
        });
  return o
    ? (0, N.jsx)(`button`, { type: `button`, className: c, onClick: o, title: s, children: l })
    : (0, N.jsx)(`div`, { className: c, title: s, children: l });
}
function ia({ breakaway: e, players: t, riders: n }) {
  let r = Object.entries(e.bids)
    .flatMap(([r, i]) => {
      let a = n.find((e) => e.id === r),
        o = t.find((e) => e.id === a?.playerId);
      return !a || !o
        ? []
        : [{ rider: a, player: o, cards: i, total: vt(e, r), won: e.winners?.includes(r) ?? !1 }];
    })
    .sort((e, t) => t.total - e.total);
  return (0, N.jsxs)(`div`, {
    className: `breakaway-result`,
    children: [
      (0, N.jsxs)(`p`, {
        className: `breakaway-result-title`,
        children: [
          `The bids`,
          (0, N.jsxs)(`small`, {
            children: [
              `The winner's two cards leave the game and `,
              2,
              ` exhaustion cards go into the deck in their place.`,
            ],
          }),
        ],
      }),
      (0, N.jsx)(`ul`, {
        className: `breakaway-bids`,
        children: r.map((e) =>
          (0, N.jsxs)(
            `li`,
            {
              className: e.won ? `breakaway-bid is-away` : `breakaway-bid`,
              children: [
                (0, N.jsx)(`span`, {
                  className: `breakaway-bid-rider`,
                  style: { backgroundColor: e.player.color },
                  children: e.rider.kind === `rouleur` ? `R` : `S`,
                }),
                (0, N.jsx)(`span`, { className: `breakaway-bid-name`, children: e.player.name }),
                (0, N.jsx)(`span`, {
                  className: `breakaway-bid-cards`,
                  children: e.cards.map((e) =>
                    (0, N.jsx)(
                      L,
                      { small: !0, value: e.value, isExhaustion: e.isExhaustion, powers: e.powers },
                      e.id,
                    ),
                  ),
                }),
                (0, N.jsx)(`span`, { className: `breakaway-bid-total`, children: e.total }),
                (0, N.jsx)(`span`, {
                  className: `breakaway-bid-flag`,
                  children: e.won ? `away` : ``,
                }),
              ],
            },
            e.rider.id,
          ),
        ),
      }),
    ],
  });
}
function aa({ bonuses: e = !1, powers: t = [] }) {
  return (0, N.jsxs)(`div`, {
    className: `legend`,
    children: [
      (0, N.jsxs)(`div`, {
        className: `legend-markers`,
        children: [
          (0, N.jsxs)(`span`, {
            children: [(0, N.jsx)(`span`, { className: `legend-swatch tile-finish` }), ` Finish`],
          }),
          (0, N.jsxs)(`span`, {
            title: `No move past 5 ranks, and no slipstream`,
            children: [
              (0, N.jsx)(`span`, { className: `legend-swatch terrain-climb` }),
              ` Climb · max 5`,
            ],
          }),
          (0, N.jsxs)(`span`, {
            title: `A card played from a descent is worth at least 5`,
            children: [
              (0, N.jsx)(`span`, { className: `legend-swatch terrain-descent` }),
              ` Descent · min 5`,
            ],
          }),
          (0, N.jsxs)(`span`, {
            title: `No slipstream, and the road narrows to one tile on some ranks`,
            children: [
              (0, N.jsx)(`span`, { className: `legend-swatch terrain-cobble` }),
              ` Cobbles`,
            ],
          }),
          e &&
            (0, N.jsxs)(N.Fragment, {
              children: [
                (0, N.jsxs)(`span`, {
                  title: `First rider past it takes the points`,
                  children: [
                    (0, N.jsx)(`span`, { className: `legend-swatch legend-bonus-sprint` }),
                    ` Sprint points`,
                  ],
                }),
                (0, N.jsxs)(`span`, {
                  title: `First rider past it takes the points`,
                  children: [
                    (0, N.jsx)(`span`, { className: `legend-swatch legend-bonus-climb` }),
                    ` Climb points`,
                  ],
                }),
              ],
            }),
          (0, N.jsx)(`span`, { children: `R = Rouleur, S = Sprinteur` }),
        ],
      }),
      t.length > 0 &&
        (0, N.jsx)(`div`, {
          className: `legend-powers`,
          children: t.map((e) => (0, N.jsx)(Qr, { power: e, labelled: !0 }, e)),
        }),
    ],
  });
}
var oa = 13,
  sa = 4,
  ca = 10,
  R = 13,
  la = 15,
  ua = 4,
  da = 5;
function fa(e) {
  return e.isStart ? `tile-start` : e.isFinish ? `tile-finish` : `terrain-${e.terrain}`;
}
function pa({ course: e, bonuses: t = [], gameState: n }) {
  let r = (0, l.useRef)(null),
    [i, a] = (0, l.useState)(0);
  (0, l.useEffect)(() => {
    let e = r.current;
    if (!e) return;
    let t = new ResizeObserver(([e]) => a(e.contentRect.width));
    return (t.observe(e), () => t.disconnect());
  }, []);
  let o = E(e),
    s = D(e),
    c = ne(e),
    u = n && n.riders.length > 0 ? on(n, c).groups : [],
    d = Math.max(...s),
    f = Math.min(d, 8) * oa,
    p = d > 0 ? f / d : 0,
    m = u.length > 0 ? R : 0,
    h = t.length > 0 ? la : ua,
    g = m + h,
    _ = g + f + ca,
    v = Math.max(sa, i / o.length),
    y = o.length * v,
    b = _ + 1,
    x = (e) => _ - ca - e * p,
    S = (e) => x((s[e] + s[e + 1]) / 2),
    C = [];
  o.forEach((e) => {
    let t = fa(e),
      n = C[C.length - 1];
    n && n.fill === t ? (n.to = e.index) : C.push({ from: e.index, to: e.index, fill: t });
  });
  let w = d > 8 ? Math.ceil(d / 8) : 1,
    T = [];
  for (let e = w; e <= d; e += w) T.push(e);
  let O = new Map((n?.players ?? []).map((e) => [e.id, e.color])),
    ee = (e) => n?.riders.find((t) => t.id === e)?.playerId;
  return (0, N.jsx)(`div`, {
    className: `profile-box`,
    ref: r,
    children:
      i > 0 &&
      (0, N.jsxs)(`svg`, {
        className: `profile-chart`,
        viewBox: `0 0 ${y} ${b}`,
        width: y,
        height: b,
        role: `img`,
        'aria-label': `Profile of ${e.name}`,
        children: [
          T.map((e) =>
            (0, N.jsx)(
              `line`,
              { className: `profile-gridline`, x1: 0, x2: y, y1: x(e), y2: x(e) },
              e,
            ),
          ),
          C.map((e) => {
            let t = e.from * v,
              n = (e.to + 1) * v,
              r = [];
            for (let t = e.from; t <= e.to + 1; t += 1) r.push(`${t * v},${x(s[t])}`);
            return (0, N.jsx)(
              `polygon`,
              { className: `profile-rank ${e.fill}`, points: `${t},${_} ${r.join(` `)} ${n},${_}` },
              e.from,
            );
          }),
          (0, N.jsx)(`line`, { className: `profile-base`, x1: 0, x2: y, y1: _, y2: _ }),
          (() => {
            let e = c * v,
              t = da / 2,
              n = Math.max(0, g - 5);
            return (0, N.jsxs)(`g`, {
              className: `profile-finish`,
              children: [
                (0, N.jsx)(`line`, {
                  className: `profile-finish-base`,
                  x1: e,
                  x2: e,
                  y1: n,
                  y2: _,
                  strokeWidth: da,
                }),
                [0, 1].map((r) =>
                  (0, N.jsx)(
                    `line`,
                    {
                      className: `profile-finish-check`,
                      x1: e - t / 2 + r * t,
                      x2: e - t / 2 + r * t,
                      y1: n,
                      y2: _,
                      strokeWidth: t,
                      strokeDasharray: `${t} ${t}`,
                      strokeDashoffset: r * t,
                    },
                    r,
                  ),
                ),
              ],
            });
          })(),
          t.map((e) => {
            let t = e.rankIndex * v,
              n = O.get(ee(e.takenBy[0] ?? ``) ?? ``),
              r = m + h / 2 - 2;
            return (0, N.jsxs)(
              `g`,
              {
                className: `profile-token`,
                children: [
                  (0, N.jsx)(`title`, {
                    children: `${e.kind === `sprint` ? `Sprint` : `Climb`} points · ${e.points.join(`-`)}`,
                  }),
                  (0, N.jsx)(`line`, { x1: t, x2: t, y1: g - 3, y2: x(s[e.rankIndex]) }),
                  (0, N.jsx)(`circle`, {
                    className: `profile-token-dot is-${e.kind}`,
                    cx: t,
                    cy: r,
                    r: 4.5,
                  }),
                  n && (0, N.jsx)(`circle`, { cx: t, cy: r, r: 2, fill: n, stroke: `none` }),
                ],
              },
              `${e.kind}-${e.rankIndex}`,
            );
          }),
          u.map((e) => {
            let t = Math.max(...e.riders.map((e) => e.rankIndex)),
              n = Math.min(...e.riders.map((e) => e.rankIndex)),
              r = (t - n + 1) * v,
              i = Math.max(r, e.riders.length * 6),
              a = (r - i) / 2;
            return (0, N.jsxs)(
              `g`,
              {
                className: `profile-group${e.label === `PEL` ? ` is-peloton` : ``}`,
                style: { transform: `translate(${n * v}px, 0px)` },
                children: [
                  (0, N.jsx)(`title`, {
                    children: `${e.label} · ${e.riders.length} rider${e.riders.length === 1 ? `` : `s`}`,
                  }),
                  (0, N.jsx)(`line`, { x1: r - v / 2, x2: r - v / 2, y1: 10, y2: S(t) }),
                  (0, N.jsx)(`rect`, { x: a, y: 3, width: i, height: 7, rx: 7 / 2 }),
                  [...e.riders]
                    .reverse()
                    .map((t, n) =>
                      (0, N.jsx)(
                        `circle`,
                        {
                          cx: a + ((n + 0.5) * i) / e.riders.length,
                          cy: 6.5,
                          r: 2,
                          fill: O.get(t.playerId) ?? `var(--paper)`,
                        },
                        t.id,
                      ),
                    ),
                ],
              },
              e.label,
            );
          }),
        ],
      }),
  });
}
function ma({ player: e, rider: t, onPlay: n }) {
  return (0, N.jsxs)(`div`, {
    className: `hand-tray`,
    children: [
      (0, N.jsxs)(`p`, {
        className: `hand-tray-prompt`,
        children: [
          (0, N.jsx)(`strong`, { style: { color: e.color }, children: e.name }),
          ` · `,
          t.kind,
          ` — play one card, the rest go back in the deck`,
        ],
      }),
      (0, N.jsx)(`div`, {
        className: `hand-tray-cards`,
        children: t.deck.hand.map((e) =>
          (0, N.jsx)(
            L,
            {
              value: e.value,
              isExhaustion: e.isExhaustion,
              powers: e.powers,
              onClick: () => n(e.id),
              title: e.isExhaustion ? `Exhaustion card` : void 0,
            },
            e.id,
          ),
        ),
      }),
    ],
  });
}
var ha = { rouleur: `R`, sprinteur: `S` };
function ga({
  player: e,
  riders: t,
  isActive: n,
  revealPlayed: r,
  drawableRiderIds: i,
  exhaustedRiderIds: a,
  onDraw: o,
}) {
  return (0, N.jsxs)(`div`, {
    className: `player-decks${n ? ` is-active` : ``}`,
    children: [
      (0, N.jsxs)(`div`, {
        className: `player-decks-header`,
        children: [
          (0, N.jsx)(`span`, {
            className: `player-decks-swatch`,
            style: { backgroundColor: e.color },
          }),
          (0, N.jsx)(`span`, { className: `player-decks-name`, children: e.name }),
          e.isCpu && (0, N.jsx)(`span`, { className: `player-decks-cpu`, children: `CPU` }),
        ],
      }),
      t.map((t) => {
        let n = i.includes(t.id),
          s = t.deck.played,
          c = rr(t.specialist);
        return (0, N.jsxs)(
          `div`,
          {
            className: `deck-row`,
            children: [
              (0, N.jsx)(ii, {
                kind: t.kind,
                specialist: t.specialist,
                children: (0, N.jsx)(`span`, {
                  className: `deck-rider`,
                  style: { backgroundColor: e.color },
                  children: ha[t.kind],
                }),
              }),
              (0, N.jsx)(L, {
                small: !0,
                faceDown: !0,
                caption: `${t.deck.drawPile.length}`,
                onClick: n ? () => o(t.id) : void 0,
                title: n ? `Draw 4 cards` : `${pe(t.deck)} cards left`,
              }),
              s
                ? (0, N.jsx)(L, {
                    small: !0,
                    faceDown: !r,
                    caption: `?`,
                    value: s.value,
                    isExhaustion: s.isExhaustion,
                    powers: s.powers,
                    title: r ? void 0 : `Played face-down`,
                  })
                : (0, N.jsx)(`span`, { className: `deck-empty-slot`, 'aria-hidden': `true` }),
              (0, N.jsxs)(`span`, {
                className: `deck-counts`,
                children: [
                  (0, N.jsxs)(`span`, {
                    title: `Recycled, face-up at the bottom of the deck`,
                    children: [`♻ `, t.deck.recycled.length],
                  }),
                  a.includes(t.id) &&
                    (0, N.jsx)(`span`, {
                      className: `deck-tired`,
                      title: `Took an exhaustion card`,
                      children: `tired`,
                    }),
                ],
              }),
              c &&
                (0, N.jsxs)(`span`, {
                  className: `deck-specialist`,
                  title: c.blurb,
                  children: [c.name, c.powers.map((e) => (0, N.jsx)(Qr, { power: e }, e))],
                }),
            ],
          },
          t.id,
        );
      }),
    ],
  });
}
function _a({ gameState: e, drawableRiderIds: t, activePlayerId: n, concealPlayed: r, onDraw: i }) {
  return (0, N.jsx)(`div`, {
    className: `deck-panel`,
    children: e.players.map((a) => {
      let o = a.id === n;
      return (0, N.jsx)(
        ga,
        {
          player: a,
          riders: fi(e, a.id),
          isActive: o,
          revealPlayed: !r && (e.phase !== `energy` || (o && !a.isCpu)),
          drawableRiderIds: t,
          exhaustedRiderIds: e.exhaustedRiderIds,
          onDraw: i,
        },
        a.id,
      );
    }),
  });
}
function va({ label: e }) {
  return (0, N.jsx)(`div`, {
    className: `phase-banner`,
    role: `status`,
    children: (0, N.jsx)(`span`, { className: `phase-banner-text`, children: e }),
  });
}
var ya = { rouleur: `Rouleur`, sprinteur: `Sprinteur` };
function ba({ gameState: e, finishRank: t }) {
  let n = cn(e, t),
    r = new Map(e.players.map((e) => [e.id, e])),
    i = n[0],
    a = r.get(i.rider.playerId);
  return (0, N.jsxs)(`section`, {
    className: `race-results`,
    children: [
      (0, N.jsxs)(`p`, {
        className: `race-results-winner`,
        children: [
          (0, N.jsx)(`span`, {
            className: `race-results-swatch`,
            style: { backgroundColor: a?.color },
            'aria-hidden': `true`,
          }),
          (0, N.jsxs)(`span`, {
            children: [a?.name, ` wins the stage — `, ya[i.rider.kind], ` first across the line`],
          }),
        ],
      }),
      (0, N.jsx)(`ol`, {
        className: `race-results-list`,
        children: n.map((e) => {
          let t = r.get(e.rider.playerId);
          return (0, N.jsxs)(
            `li`,
            {
              className: `race-results-row${e.finished ? ` has-crossed` : ``}`,
              children: [
                (0, N.jsx)(`span`, { className: `race-results-position`, children: e.position }),
                (0, N.jsx)(`span`, {
                  className: `race-results-swatch`,
                  style: { backgroundColor: t?.color },
                  'aria-hidden': `true`,
                }),
                (0, N.jsx)(`span`, { className: `race-results-team`, children: t?.name }),
                (0, N.jsx)(`span`, { className: `race-results-kind`, children: ya[e.rider.kind] }),
                (0, N.jsx)(`span`, {
                  className: `race-results-note`,
                  children: e.finished ? `finished` : `still on the road`,
                }),
              ],
            },
            e.rider.id,
          );
        }),
      }),
    ],
  });
}
var xa = { rouleur: `Rouleur`, sprinteur: `Sprinteur` };
function Sa({ gameState: e, finishRank: t, onClose: n }) {
  let { groups: r } = on(e, t),
    i = new Map(e.players.map((e) => [e.id, e])),
    a = r[0]?.riders[0],
    o = a ? i.get(a.playerId) : void 0;
  return (
    (0, l.useEffect)(() => {
      let e = (e) => {
        e.key === `Escape` && n();
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, [n]),
    (0, N.jsx)(`div`, {
      className: `results-modal`,
      onClick: n,
      children: (0, N.jsxs)(`div`, {
        className: `results-modal-card`,
        role: `dialog`,
        'aria-modal': `true`,
        'aria-label': `Race result`,
        onClick: (e) => e.stopPropagation(),
        children: [
          (0, N.jsxs)(`header`, {
            className: `results-modal-header`,
            children: [
              (0, N.jsx)(`span`, { className: `results-modal-eyebrow`, children: `Result` }),
              (0, N.jsx)(`h2`, { children: e.course.name }),
              (0, N.jsx)(`button`, {
                type: `button`,
                className: `results-modal-close`,
                onClick: n,
                'aria-label': `Close`,
                children: `×`,
              }),
            ],
          }),
          (0, N.jsxs)(`div`, {
            className: `results-modal-body`,
            children: [
              o &&
                a &&
                (0, N.jsxs)(`p`, {
                  className: `results-modal-winner`,
                  children: [
                    (0, N.jsx)(`span`, {
                      className: `results-modal-swatch`,
                      style: { backgroundColor: o.color },
                      'aria-hidden': `true`,
                    }),
                    (0, N.jsxs)(`span`, {
                      children: [o.name, ` wins — `, xa[a.kind], ` first across the line`],
                    }),
                  ],
                }),
              (0, N.jsx)(`ol`, {
                className: `results-modal-groups`,
                children: r.map((e, t) =>
                  (0, N.jsxs)(
                    `li`,
                    {
                      className: `results-modal-group`,
                      children: [
                        (0, N.jsx)(`span`, {
                          className: `results-modal-gap`,
                          children: t === 0 ? `—` : `+${nn(e.gapToLeader ?? 0)}`,
                        }),
                        (0, N.jsx)(`ul`, {
                          className: `results-modal-riders`,
                          children: e.riders.map((e) => {
                            let t = i.get(e.playerId);
                            return (0, N.jsxs)(
                              `li`,
                              {
                                children: [
                                  (0, N.jsx)(`span`, {
                                    className: `results-modal-swatch`,
                                    style: { backgroundColor: t?.color },
                                    'aria-hidden': `true`,
                                  }),
                                  (0, N.jsx)(`span`, {
                                    className: `results-modal-team`,
                                    children: t?.name,
                                  }),
                                  (0, N.jsx)(`span`, {
                                    className: `results-modal-kind`,
                                    children: xa[e.kind],
                                  }),
                                ],
                              },
                              e.id,
                            );
                          }),
                        }),
                      ],
                    },
                    e.label,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var Ca = { rouleur: `R`, sprinteur: `S` },
  wa = 5;
function Ta({ tour: e, players: t, jersey: n, lastToken: r }) {
  let i = new Map(t.map((e) => [e.id, e])),
    a = In(e, n)
      .filter((e) => (n === `sprint` ? e.sprintPoints : e.climbPoints) > 0)
      .slice(0, wa);
  return a.length === 0
    ? null
    : (0, N.jsxs)(`section`, {
        className: `points-standing points-${n}`,
        children: [
          (0, N.jsxs)(`span`, {
            className: `points-standing-title`,
            children: [
              n === `sprint` ? `Sprint` : `Climb`,
              ` classification`,
              (0, N.jsx)(`small`, { children: `as it stands` }),
            ],
          }),
          (0, N.jsx)(`ol`, {
            className: `points-standing-list`,
            children: a.map((e, t) => {
              let a = i.get(e.playerId),
                o = r ? en(r, e.riderId) : 0;
              return (0, N.jsxs)(
                `li`,
                {
                  children: [
                    (0, N.jsx)(`span`, { className: `points-standing-place`, children: t + 1 }),
                    (0, N.jsx)(`span`, {
                      className: `points-standing-swatch`,
                      style: { backgroundColor: a?.color },
                      'aria-hidden': `true`,
                    }),
                    (0, N.jsxs)(`span`, {
                      className: `points-standing-rider`,
                      children: [a?.name, ` · `, Ca[e.kind]],
                    }),
                    o > 0 &&
                      (0, N.jsxs)(`span`, {
                        className: `points-standing-gained`,
                        title: `Took ${o} at the last ${n === `sprint` ? `sprint` : `summit`}`,
                        children: [`+`, o],
                      }),
                    (0, N.jsx)(`span`, {
                      className: `points-standing-points`,
                      children: n === `sprint` ? e.sprintPoints : e.climbPoints,
                    }),
                  ],
                },
                e.riderId,
              );
            }),
          }),
        ],
      });
}
var Ea = 110,
  Da = 900,
  Oa = 380,
  ka = 550;
function Aa({
  gameState: e,
  onUpdate: t,
  onExit: n,
  onQuit: r,
  stageLabel: i,
  exitLabel: a = `New game`,
  tour: o,
}) {
  let [s, c] = (0, l.useState)(null),
    [u, d] = (0, l.useState)(null),
    [f, p] = (0, l.useState)(!0),
    [m, h] = (0, l.useState)(null),
    g = (0, l.useRef)(!1),
    [_, v] = (0, l.useState)(null),
    y = e.course,
    b = (0, l.useMemo)(() => E(y), [y]),
    x = b.length,
    S = (0, l.useMemo)(() => ne(y), [y]),
    C = (0, l.useMemo)(
      () =>
        e.bonuses
          .filter((e) => e.kind === `sprint` && e.takenBy.length < e.points.length)
          .map((e) => e.rankIndex),
      [e.bonuses],
    ),
    w = (0, l.useMemo)(
      () => ({ ranks: b, finishRank: S, racedRanks: re(y), sprints: C }),
      [b, S, y, C],
    ),
    T = (0, l.useMemo)(
      () =>
        e.phase === `finished`
          ? new Set(e.riders.filter((e) => e.rankIndex >= S).map((e) => e.id))
          : new Set(),
      [e.phase, e.riders, S],
    );
  (0, l.useEffect)(() => {
    if (!s) return;
    let e = s.stage === `ride` ? Ea : s.stage === `banner` ? Da : Oa,
      n = setTimeout(() => {
        if (s.stage === `banner`) {
          c({ stage: `slipstream`, plan: s.plan, index: 0 });
          return;
        }
        if (s.stage === `ride`) {
          let e = s.plan.ride[s.index],
            n = s.index === s.plan.ride.length - 1,
            r = s.plan.slipstream.length > 0;
          (t((t) => {
            let i = Ci(t, e);
            return n ? (r ? Si(i) : wi(i, x, S)) : i;
          }),
            c(n ? (r ? { stage: `banner`, plan: s.plan } : null) : { ...s, index: s.index + 1 }));
          return;
        }
        let e = s.plan.slipstream[s.index],
          n = s.index === s.plan.slipstream.length - 1;
        (t((t) => {
          let r = e.reduce((e, t) => Ci(e, t), t);
          return n ? wi(r, x, S) : r;
        }),
          c(n ? null : { ...s, index: s.index + 1 }));
      }, e);
    return () => clearTimeout(n);
  }, [s, t, x, S]);
  let D = Ft(e),
    ee = e.phase === `placement`,
    te = D ? It(e, D.id) : [],
    ie = te.find((e) => e.id === u) ?? te[0] ?? null,
    ae = ee ? Nt(e, y) : [],
    oe = ht(e),
    k = _t(e),
    A = k ? e.riders.filter((e) => e.playerId === k.id) : [],
    se = e.breakaway?.targetRank ?? null,
    ce = (0, l.useMemo)(
      () => (se === null ? null : { rankIndex: mt(y, se), slot: `right` }),
      [se, y],
    ),
    le = k !== null && k.isCpu;
  (0, l.useEffect)(() => {
    if (!le) return;
    let e = setTimeout(() => t(Ot), ka);
    return () => clearTimeout(e);
  }, [le, e.riders, e.breakaway, t]);
  let ue = ee && D !== null && D.isCpu;
  (0, l.useEffect)(() => {
    if (!ue) return;
    let e = setTimeout(() => t((e) => zt(e, y)), ka);
    return () => clearTimeout(e);
  }, [ue, e.pending, y, t]);
  let j = yi(e);
  ((0, l.useEffect)(() => {
    if (!j) return;
    let e = setTimeout(() => t((e) => bi(e, w)), ka);
    return () => clearTimeout(e);
  }, [j, e.riders, w, t]),
    (0, l.useEffect)(() => {
      if (g.current) {
        g.current = !1;
        return;
      }
      h(null);
    }, [e]));
  let M = e.phase === `finished` && !o && _ !== e.round;
  function de(n, r) {
    if (e.phase === `breakaway`) {
      t((e) => Ct(e, n, r));
      return;
    }
    let i = e;
    ((g.current = !0), t((e) => vi(e, n, r)), h(i));
  }
  function fe() {
    if (!m) return;
    let e = m;
    (h(null), t(() => e));
  }
  let pe = m !== null && (e.phase === `energy` || e.phase === `reveal`);
  function me() {
    let n = Pe(e, b);
    if (n.ride.length > 0) {
      (t(xi), c({ stage: `ride`, plan: n, index: 0 }));
      return;
    }
    if (n.slipstream.length > 0) {
      (t(Si), c({ stage: `banner`, plan: n }));
      return;
    }
    t((e) => wi(xi(e), x, S));
  }
  let he = o ? Nn(o, e.bonuses) : null,
    ge = o ? Gn(o) : void 0,
    _e =
      e.phase === `moving` || e.phase === `slipstream`
        ? null
        : e.phase === `end`
          ? e.round
          : e.round - 1,
    ve = [`sprint`, `climb`]
      .map((t) => ({
        jersey: t,
        lastToken: e.bonuses
          .filter((e) => e.kind === t && e.settledRound !== null && e.settledRound === _e)
          .sort((e, t) => e.rankIndex - t.rankIndex)
          .pop(),
      }))
      .filter((e) => e.lastToken !== void 0),
    ye = e.bonuses.length > 0 || O(y),
    be = f && ye,
    xe = (0, l.useMemo)(() => {
      let t = e.riders.flatMap((e) => rr(e.specialist)?.powers ?? []);
      return [...new Set(t)];
    }, [e.riders]),
    Se = e.riders.find((e) => e.deck.hand.length > 0),
    Ce = e.players.find((e) => e.id === Se?.playerId),
    we = e.exhaustedRiderIds.length,
    Te = e.riders.filter((t) => gi(e, t) || xt(e, t)).map((e) => e.id),
    Ee = e.phase === `energy` ? pi(e).id : (k?.id ?? null),
    De = e.phase === `breakaway`;
  function Oe() {
    switch (e.phase) {
      case `placement`:
        return D
          ? D.isCpu
            ? `${D.name} is taking a spot on the grid…`
            : `${D.name} — place your ${ie?.kind ?? `rider`}`
          : ``;
      case `breakaway`:
        if (oe === `resolved`) {
          let t = e.breakaway?.winners ?? [],
            n = e.riders.find((e) => e.id === t[0]),
            r = e.players.find((e) => e.id === n?.playerId);
          return r ? `${r.name}'s ${n.kind} is up the road.` : `Nobody got away.`;
        }
        return k
          ? k.isCpu
            ? `${k.name} is bidding…`
            : oe === `entrants`
              ? `${k.name} — pick a rider to attack with`
              : Se
                ? `Bid a card — the other three go back in the deck`
                : `${k.name} — draw for bid ${e.breakaway?.bidRound ?? 1} of 2`
          : ``;
      case `energy`:
        return j
          ? `${pi(e).name} is choosing…`
          : Se
            ? `Pick a card — the other three go back in the deck`
            : `${pi(e).name} — draw for a rider`;
      case `reveal`:
        return `Every card is in. Reveal and ride.`;
      case `moving`:
        return `Riding…`;
      case `slipstream`:
        return `Slipstream — the packs close up`;
      case `end`:
        return we === 0
          ? `Nobody tired this round.`
          : `${we} rider${we === 1 ? `` : `s`} took an exhaustion card.`;
      case `finished`:
        return `The riders have finished!`;
    }
  }
  return (0, N.jsxs)(`div`, {
    className: `board-screen`,
    children: [
      (0, N.jsxs)(`header`, {
        className: `board-header`,
        children: [
          (0, N.jsx)(`button`, {
            type: `button`,
            className: `board-back`,
            onClick: r,
            children: `← Quit game`,
          }),
          (0, N.jsxs)(`div`, {
            children: [
              (0, N.jsx)(`h1`, { children: `Flamme Rouge` }),
              (0, N.jsx)(`span`, {
                className: `board-course`,
                children: i ? `${i} · ${y.name}` : y.name,
              }),
            ],
          }),
          (0, N.jsxs)(`span`, { className: `board-round`, children: [`Round `, e.round] }),
        ],
      }),
      e.riders.length > 0 && (0, N.jsx)($i, { gameState: e, finishRank: S }),
      (0, N.jsxs)(`div`, {
        className: `board-track`,
        children: [
          (0, N.jsx)(Qi, {
            course: y,
            gameState: e,
            jerseys: ge,
            compact: be,
            placeableSpots: D && !D.isCpu ? ae : [],
            breakawaySpot: ce,
            winners: T,
            onPlace: (e) => ie && t((t) => Rt(t, ie.id, e)),
          }),
          s?.stage === `banner` && (0, N.jsx)(va, { label: `Slipstream` }),
          he &&
            ve.length > 0 &&
            (0, N.jsx)(`div`, {
              className: `board-standings`,
              children: ve.map(({ jersey: t, lastToken: n }) =>
                (0, N.jsx)(Ta, { tour: he, players: e.players, jersey: t, lastToken: n }, t),
              ),
            }),
        ],
      }),
      ye &&
        (0, N.jsxs)(`div`, {
          className: `board-profile`,
          children: [
            (0, N.jsxs)(`button`, {
              type: `button`,
              className: `profile-toggle`,
              'aria-expanded': be,
              onClick: () => p((e) => !e),
              children: [
                (0, N.jsx)(`span`, {
                  className: `profile-caret`,
                  'aria-hidden': `true`,
                  children: be ? `▾` : `▸`,
                }),
                `Stage profile`,
              ],
            }),
            be && (0, N.jsx)(pa, { course: y, bonuses: e.bonuses, gameState: e }),
          ],
        }),
      !be && (0, N.jsx)(aa, { bonuses: e.bonuses.length > 0, powers: xe }),
      (0, N.jsxs)(`div`, {
        className: `race-controls`,
        children: [
          (0, N.jsxs)(`div`, {
            className: `race-status`,
            children: [
              (0, N.jsx)(`p`, { className: `race-prompt`, children: Oe() }),
              (0, N.jsxs)(`div`, {
                className: `race-buttons`,
                children: [
                  pe &&
                    (0, N.jsx)(`button`, {
                      type: `button`,
                      className: `race-undo`,
                      onClick: fe,
                      children: `Undo`,
                    }),
                  e.phase === `reveal` &&
                    (0, N.jsx)(`button`, {
                      type: `button`,
                      className: `race-action`,
                      onClick: me,
                      children: `Ride!`,
                    }),
                ],
              }),
              oe === `resolved` &&
                (0, N.jsx)(`button`, {
                  type: `button`,
                  className: `race-action`,
                  onClick: () => t(kt),
                  children: `Start the race`,
                }),
              e.phase === `end` &&
                (0, N.jsx)(`button`, {
                  type: `button`,
                  className: `race-action`,
                  onClick: () => t(Ti),
                  children: `Next round`,
                }),
              e.phase === `finished` &&
                (0, N.jsx)(`button`, {
                  type: `button`,
                  className: `race-action`,
                  onClick: n,
                  children: a,
                }),
            ],
          }),
          ee &&
            D &&
            !D.isCpu &&
            (0, N.jsx)(ta, {
              player: D,
              pending: te,
              selectedRiderId: ie?.id ?? null,
              onSelect: d,
            }),
          oe === `entrants` &&
            k &&
            !k.isCpu &&
            (0, N.jsx)(ra, { player: k, choices: A, onPick: (e) => t((t) => bt(t, e)) }),
          oe === `resolved` &&
            e.breakaway &&
            (0, N.jsx)(ia, { breakaway: e.breakaway, players: e.players, riders: e.riders }),
          e.phase === `finished`
            ? (0, N.jsx)(ba, { gameState: e, finishRank: S })
            : ee
              ? null
              : (0, N.jsxs)(N.Fragment, {
                  children: [
                    Se &&
                      Ce &&
                      (0, N.jsx)(ma, { player: Ce, rider: Se, onPlay: (e) => de(Se.id, e) }),
                    (0, N.jsx)(_a, {
                      gameState: e,
                      drawableRiderIds: Te,
                      activePlayerId: Ee,
                      concealPlayed: De,
                      onDraw: (e) => t((t) => (t.phase === `breakaway` ? St(t, e) : _i(t, e))),
                    }),
                  ],
                }),
        ],
      }),
      M && (0, N.jsx)(Sa, { gameState: e, finishRank: S, onClose: () => v(e.round) }),
    ],
  });
}
var ja = {
    overall: `Leads the overall`,
    sprint: `Leads the sprint classification`,
    climb: `Leads the climb classification`,
  },
  Ma = `M12 4 H20 L29 8 L26 14 L22 12 V22 H10 V12 L6 14 L3 8 Z`,
  Na = `M12 4 Q16 7.5 20 4`,
  Pa = [
    { cx: 13.2, cy: 13.6, r: 1.5 },
    { cx: 18.6, cy: 14.8, r: 1.5 },
    { cx: 16, cy: 17.9, r: 1.5 },
    { cx: 12.7, cy: 20.2, r: 1.35 },
    { cx: 19.3, cy: 20.4, r: 1.35 },
  ];
function Fa({ jersey: e }) {
  return (0, N.jsxs)(`svg`, {
    className: `jersey-icon jersey-${e}`,
    viewBox: `0 0 32 24`,
    role: `img`,
    'aria-label': ja[e],
    children: [
      (0, N.jsx)(`title`, { children: ja[e] }),
      (0, N.jsx)(`path`, { className: `jersey-icon-body`, d: Ma }),
      e === `climb` &&
        Pa.map((e) =>
          (0, N.jsx)(
            `circle`,
            { className: `jersey-icon-spot`, cx: e.cx, cy: e.cy, r: e.r },
            `${e.cx}-${e.cy}`,
          ),
        ),
      (0, N.jsx)(`path`, { className: `jersey-icon-collar`, d: Na }),
    ],
  });
}
var Ia = { sprint: `Sprint stage`, hill: `Hill stage`, cobbles: `Cobbled stage` };
function La({ stage: e, day: t, mountains: n, winner: r, onClose: i }) {
  let a = (0, l.useMemo)(
      () =>
        C({
          raceRanks: e.template.length,
          mountains: n,
          courseName: e.name,
          segments: e.template.segments,
        }),
      [e, n],
    ),
    o = (0, l.useMemo)(() => Zt(a), [a]),
    s = ne(a),
    c = E(a),
    u = (e) => c.filter((t) => t.terrain === e).length * 1;
  return (
    (0, l.useEffect)(() => {
      let e = (e) => {
        e.key === `Escape` && i();
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, [i]),
    (0, N.jsx)(`div`, {
      className: `stage-modal`,
      onClick: i,
      children: (0, N.jsxs)(`div`, {
        className: `stage-modal-card`,
        role: `dialog`,
        'aria-modal': `true`,
        'aria-label': `${e.name} — stage details`,
        onClick: (e) => e.stopPropagation(),
        children: [
          (0, N.jsxs)(`header`, {
            className: `stage-modal-header`,
            children: [
              (0, N.jsxs)(`span`, { className: `stage-modal-day`, children: [`Stage `, t] }),
              (0, N.jsx)(`h2`, { children: e.name }),
              (0, N.jsxs)(`p`, {
                className: `stage-modal-kind`,
                children: [Ia[e.kind], ` · `, e.template.length, ` km`],
              }),
              (0, N.jsx)(`button`, {
                type: `button`,
                className: `stage-modal-close`,
                onClick: i,
                'aria-label': `Close`,
                children: `×`,
              }),
            ],
          }),
          (0, N.jsxs)(`div`, {
            className: `stage-modal-body`,
            children: [
              (0, N.jsx)(pa, { course: a, bonuses: o }),
              (0, N.jsxs)(`dl`, {
                className: `stage-modal-facts`,
                children: [
                  (0, N.jsxs)(`div`, {
                    children: [
                      (0, N.jsx)(`dt`, { children: `Raced` }),
                      (0, N.jsxs)(`dd`, { children: [e.template.length, ` km`] }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    children: [
                      (0, N.jsx)(`dt`, { children: `Climbing` }),
                      (0, N.jsx)(`dd`, { children: u(`climb`) > 0 ? `${u(`climb`)} km` : `—` }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    children: [
                      (0, N.jsx)(`dt`, { children: `Descent` }),
                      (0, N.jsx)(`dd`, { children: u(`descent`) > 0 ? `${u(`descent`)} km` : `—` }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    children: [
                      (0, N.jsx)(`dt`, { children: `Pavé` }),
                      (0, N.jsx)(`dd`, { children: u(`cobble`) > 0 ? `${u(`cobble`)} km` : `—` }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(`section`, {
                className: `stage-modal-section`,
                children: [
                  (0, N.jsx)(`span`, { className: `tour-label`, children: `Points on offer` }),
                  (0, N.jsxs)(`ul`, {
                    className: `stage-modal-tokens`,
                    children: [
                      o
                        .slice()
                        .sort((e, t) => e.rankIndex - t.rankIndex)
                        .map((e) =>
                          (0, N.jsxs)(
                            `li`,
                            {
                              children: [
                                (0, N.jsx)(`span`, {
                                  className: `stage-modal-token is-${e.kind}`,
                                  'aria-hidden': `true`,
                                }),
                                (0, N.jsx)(`span`, {
                                  className: `stage-modal-token-name`,
                                  children:
                                    e.kind === `sprint` ? `Sprint points` : `Mountain points`,
                                }),
                                (0, N.jsx)(`span`, {
                                  className: `stage-modal-token-at`,
                                  children:
                                    e.rankIndex > s
                                      ? `${(e.rankIndex - s) * 1} km past the line`
                                      : `${(s - e.rankIndex) * 1} km to go`,
                                }),
                                (0, N.jsx)(`span`, {
                                  className: `stage-modal-token-points`,
                                  children: e.points.join(`-`),
                                }),
                              ],
                            },
                            `${e.kind}-${e.rankIndex}`,
                          ),
                        ),
                      (0, N.jsxs)(`li`, {
                        children: [
                          (0, N.jsx)(`span`, {
                            className: `stage-modal-token is-finish`,
                            'aria-hidden': `true`,
                          }),
                          (0, N.jsx)(`span`, {
                            className: `stage-modal-token-name`,
                            children: `Podium (Tour Points)`,
                          }),
                          (0, N.jsx)(`span`, {
                            className: `stage-modal-token-at`,
                            children: `0 km to go`,
                          }),
                          (0, N.jsx)(`span`, {
                            className: `stage-modal-token-points`,
                            children: ln.join(`-`),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsx)(`p`, {
                className: `stage-modal-winner`,
                children: r
                  ? (0, N.jsxs)(N.Fragment, {
                      children: [
                        (0, N.jsx)(`span`, { className: `tour-label`, children: `Won by` }),
                        ` `,
                        r,
                      ],
                    })
                  : (0, N.jsx)(`span`, {
                      className: `stage-modal-none`,
                      children: `Not yet ridden.`,
                    }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var Ra = { rouleur: `Rouleur`, sprinteur: `Sprinteur` },
  za = { overall: `Overall`, sprint: `Sprint`, climb: `Climb` };
function Ba(e, t) {
  let n = (t) =>
      e.template.segments.filter((e) => e.terrain === t).reduce((e, t) => e + t.ranks, 0),
    r = t.filter((e) => e.kind === `sprint`).length,
    i = t.filter((e) => e.kind === `climb`).length,
    a = [`${e.template.length} km`];
  return (
    n(`climb`) > 0 && a.push(`${n(`climb`)} km of climbing`),
    n(`cobble`) > 0 && a.push(`${n(`cobble`)} km of pavé`),
    r > 0 && a.push(`${r} sprint token${r === 1 ? `` : `s`}`),
    i > 0 && a.push(`${i} climb token${i === 1 ? `` : `s`}`),
    a.push(`${ln.join(`-`)} TP at the line`),
    a.join(` · `)
  );
}
function Va({ tour: e, players: t, onStartStage: n, onExit: r, mountains: i }) {
  let [a, o] = (0, l.useState)(null),
    s = bn(e),
    c = xn(e),
    u = Fn(e),
    d = Un(e),
    f = new Map(t.map((e) => [e.id, e])),
    p = u[0]?.cumulativeTimeSeconds ?? 0,
    m = new Map(e.standings.map((e) => [e.riderId, e])),
    h = c ? zn(e, t.length) : null,
    g = c ? Hn(e, t, h) : null,
    _ = (0, l.useMemo)(() => [...t].sort((t, n) => Cn(e, n.id) - Cn(e, t.id)), [t, e]),
    v = (0, l.useMemo)(
      () =>
        s
          ? C({
              raceRanks: s.template.length,
              mountains: i,
              courseName: s.name,
              segments: s.template.segments,
            })
          : null,
      [s, i],
    ),
    y = (0, l.useMemo)(() => (v ? Zt(v) : []), [v]),
    b = (e) => `${f.get(e.playerId)?.name ?? `—`} · ${Ra[e.kind]}`,
    x = (e) =>
      (0, N.jsx)(`span`, {
        className: `tour-swatch`,
        style: { backgroundColor: f.get(e.playerId)?.color },
        'aria-hidden': `true`,
      }),
    S = e.definition.stages[e.stageWinners.length - 1]?.name ?? `the last stage`,
    w = new Map(e.standings.map((t) => [t.riderId, Mn(e, t)])),
    T = (e) => w.get(e) ?? null,
    E = (e) =>
      e === 0
        ? `Level with the leader on ${S}`
        : e < 0
          ? `Gained ${Math.abs(e)}s on the leader on ${S}`
          : `Lost ${e}s to the leader on ${S}`,
    D = (e, t) =>
      e > 0
        ? (0, N.jsxs)(`span`, {
            className: `tour-move has-gained`,
            title: `+${e} ${t} on ${S}`,
            children: [`+`, e],
          })
        : null,
    O = (e) =>
      [`overall`, `sprint`, `climb`]
        .filter((t) => d[t] === e)
        .map((e) => (0, N.jsx)(Fa, { jersey: e }, e));
  return (0, N.jsxs)(`div`, {
    className: `tour-screen`,
    children: [
      (0, N.jsxs)(`header`, {
        className: `tour-header`,
        children: [
          (0, N.jsx)(`h1`, { children: e.definition.name }),
          (0, N.jsx)(`p`, {
            className: `tour-tagline`,
            children: c
              ? `Every stage ridden — the tour is decided.`
              : `Stage ${e.currentStageIndex + 1} of ${e.definition.stages.length}`,
          }),
        ],
      }),
      (0, N.jsxs)(`div`, {
        className: `tour-card`,
        children: [
          (0, N.jsx)(`button`, {
            type: `button`,
            className: `tour-back`,
            onClick: r,
            children: c ? `← Back to menu` : `← Abandon the tour`,
          }),
          s
            ? (0, N.jsxs)(`section`, {
                className: `tour-next`,
                children: [
                  (0, N.jsx)(`span`, { className: `tour-label`, children: `Next stage` }),
                  (0, N.jsx)(`h2`, { children: s.name }),
                  (0, N.jsx)(`p`, { className: `tour-profile`, children: Ba(s, y) }),
                  (0, N.jsx)(`span`, { className: `tour-label`, children: `Starting order` }),
                  (0, N.jsx)(`ol`, {
                    className: `tour-order`,
                    children: Dn(e, t).map((e) =>
                      (0, N.jsxs)(
                        `li`,
                        {
                          children: [
                            (0, N.jsx)(`span`, {
                              className: `tour-swatch`,
                              style: { backgroundColor: e.color },
                              'aria-hidden': `true`,
                            }),
                            e.name,
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                  (0, N.jsxs)(`button`, {
                    type: `button`,
                    className: `tour-start`,
                    onClick: n,
                    children: [`Ride stage `, e.currentStageIndex + 1],
                  }),
                ],
              })
            : (0, N.jsxs)(`section`, {
                className: `tour-next`,
                children: [
                  (0, N.jsx)(`span`, { className: `tour-label`, children: `Winner` }),
                  (0, N.jsx)(`h2`, { children: g?.[0]?.name ?? `—` }),
                  (0, N.jsxs)(`p`, {
                    className: `tour-profile`,
                    children: [
                      `Champion of the `,
                      e.definition.name,
                      g?.[0] ? ` · ${Vn(e, g[0].id, h)} TP` : ``,
                    ],
                  }),
                ],
              }),
          c && h && g
            ? (0, N.jsxs)(`section`, {
                className: `tour-classification`,
                children: [
                  (0, N.jsx)(`span`, {
                    className: `tour-label`,
                    children: `Tour Points · how it was made up`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `tour-breakdown-head`,
                    'aria-hidden': `true`,
                    children: [
                      (0, N.jsx)(`span`, {}),
                      (0, N.jsx)(`span`, {}),
                      (0, N.jsx)(`span`, { children: `Team` }),
                      (0, N.jsx)(`span`, { children: `Stages` }),
                      (0, N.jsx)(`span`, { children: `GC` }),
                      (0, N.jsx)(`span`, { children: `TC` }),
                      (0, N.jsx)(`span`, { children: `SC` }),
                      (0, N.jsx)(`span`, { children: `MC` }),
                      (0, N.jsx)(`span`, { children: `Total` }),
                    ],
                  }),
                  (0, N.jsx)(`ol`, {
                    className: `tour-table tour-breakdown`,
                    children: g.map((t, n) => {
                      let r = Bn(e, t.id, h);
                      return (0, N.jsxs)(
                        `li`,
                        {
                          children: [
                            (0, N.jsx)(`span`, { className: `tour-position`, children: n + 1 }),
                            (0, N.jsx)(`span`, {
                              className: `tour-swatch`,
                              style: { backgroundColor: t.color },
                              'aria-hidden': `true`,
                            }),
                            (0, N.jsx)(`span`, { className: `tour-rider`, children: t.name }),
                            (0, N.jsx)(`span`, {
                              className: `tour-value`,
                              title: `Podium Tour Points from earlier stages`,
                              children: r.podium,
                            }),
                            (0, N.jsx)(`span`, {
                              className: `tour-value`,
                              title: `General Classification bonus`,
                              children: r.gc || `—`,
                            }),
                            (0, N.jsx)(`span`, {
                              className: `tour-value`,
                              title: `Team Classification bonus`,
                              children: r.tc || `—`,
                            }),
                            (0, N.jsx)(`span`, {
                              className: `tour-value`,
                              title: `Sprint Classification bonus`,
                              children: r.sc || `—`,
                            }),
                            (0, N.jsx)(`span`, {
                              className: `tour-value`,
                              title: `Mountain Classification bonus`,
                              children: r.mc || `—`,
                            }),
                            (0, N.jsx)(`span`, {
                              className: `tour-value tour-breakdown-total`,
                              children: r.total,
                            }),
                          ],
                        },
                        t.id,
                      );
                    }),
                  }),
                ],
              })
            : (0, N.jsxs)(`section`, {
                className: `tour-classification`,
                children: [
                  (0, N.jsxs)(`span`, {
                    className: `tour-label`,
                    children: [`Tour Points`, c ? `` : ` · so far`],
                  }),
                  (0, N.jsx)(`ol`, {
                    className: `tour-table tour-scores`,
                    children: (g ?? _).map((t, n) =>
                      (0, N.jsxs)(
                        `li`,
                        {
                          children: [
                            (0, N.jsx)(`span`, { className: `tour-position`, children: n + 1 }),
                            (0, N.jsx)(`span`, {
                              className: `tour-swatch`,
                              style: { backgroundColor: t.color },
                              'aria-hidden': `true`,
                            }),
                            (0, N.jsx)(`span`, { className: `tour-rider`, children: t.name }),
                            (0, N.jsx)(`span`, { className: `tour-cell tour-cell-jerseys` }),
                            (0, N.jsx)(`span`, {
                              className: `tour-cell`,
                              children: D(wn(e, t.id), `TP`),
                            }),
                            (0, N.jsx)(`span`, {
                              className: `tour-value`,
                              children: Vn(e, t.id, h),
                            }),
                          ],
                        },
                        t.id,
                      ),
                    ),
                  }),
                ],
              }),
          (0, N.jsxs)(`section`, {
            className: `tour-classification`,
            children: [
              (0, N.jsx)(`span`, { className: `tour-label`, children: `Overall (GC) · by time` }),
              (0, N.jsx)(`ol`, {
                className: `tour-table tour-overall`,
                children: u.map((e, t) => {
                  let n = T(e.riderId);
                  return (0, N.jsxs)(
                    `li`,
                    {
                      children: [
                        (0, N.jsx)(`span`, { className: `tour-position`, children: t + 1 }),
                        x(e),
                        (0, N.jsx)(`span`, { className: `tour-rider`, children: b(e) }),
                        (0, N.jsx)(`span`, {
                          className: `tour-cell tour-cell-jerseys`,
                          children: O(e.riderId),
                        }),
                        (0, N.jsx)(`span`, {
                          className: `tour-cell`,
                          children:
                            e.carriedExhaustion > 0 &&
                            (0, N.jsxs)(`span`, {
                              className: `tour-tired`,
                              title: `Exhaustion cards carried into the next stage`,
                              children: [e.carriedExhaustion, ` tired`],
                            }),
                        }),
                        (0, N.jsx)(`span`, {
                          className: `tour-cell`,
                          children:
                            n !== null &&
                            n !== 0 &&
                            (0, N.jsx)(`span`, {
                              className: `tour-move${n < 0 ? ` has-gained` : ``}${n > 0 ? ` has-lost` : ``}`,
                              title: E(n),
                              children: Kn(n),
                            }),
                        }),
                        (0, N.jsx)(`span`, {
                          className: `tour-value`,
                          children: t === 0 ? `leader` : Kn(e.cumulativeTimeSeconds - p),
                        }),
                      ],
                    },
                    e.riderId,
                  );
                }),
              }),
            ],
          }),
          (0, N.jsx)(`div`, {
            className: `tour-points`,
            children: [`sprint`, `climb`].map((t) =>
              (0, N.jsxs)(
                `section`,
                {
                  className: `tour-classification`,
                  children: [
                    (0, N.jsxs)(`span`, {
                      className: `tour-label`,
                      children: [za[t], ` · by points`],
                    }),
                    (0, N.jsx)(`ol`, {
                      className: `tour-table tour-scores`,
                      children: In(e, t)
                        .slice(0, 4)
                        .map((e, n) =>
                          (0, N.jsxs)(
                            `li`,
                            {
                              children: [
                                (0, N.jsx)(`span`, { className: `tour-position`, children: n + 1 }),
                                x(e),
                                (0, N.jsx)(`span`, { className: `tour-rider`, children: b(e) }),
                                (0, N.jsx)(`span`, {
                                  className: `tour-cell tour-cell-jerseys`,
                                  children: d[t] === e.riderId && (0, N.jsx)(Fa, { jersey: t }),
                                }),
                                (0, N.jsx)(`span`, {
                                  className: `tour-cell`,
                                  children: D(
                                    t === `sprint`
                                      ? e.lastStageSprintPoints
                                      : e.lastStageClimbPoints,
                                    `points`,
                                  ),
                                }),
                                (0, N.jsx)(`span`, {
                                  className: `tour-value`,
                                  children: t === `sprint` ? e.sprintPoints : e.climbPoints,
                                }),
                              ],
                            },
                            e.riderId,
                          ),
                        ),
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
          (0, N.jsxs)(`section`, {
            className: `tour-classification`,
            children: [
              (0, N.jsx)(`span`, { className: `tour-label`, children: `Stages` }),
              (0, N.jsx)(`ol`, {
                className: `tour-table tour-stages`,
                children: e.definition.stages.map((t, n) => {
                  let r = m.get(e.stageWinners[n] ?? ``);
                  return (0, N.jsxs)(
                    `li`,
                    {
                      className: n === e.currentStageIndex ? `is-next` : ``,
                      children: [
                        (0, N.jsx)(`button`, {
                          type: `button`,
                          className: `tour-inspect`,
                          onClick: () => o(n),
                          'aria-label': `Stage details for ${t.name}`,
                          title: `Stage details for ${t.name}`,
                          children: `i`,
                        }),
                        (0, N.jsx)(`span`, { className: `tour-position`, children: n + 1 }),
                        (0, N.jsx)(`span`, { className: `tour-rider`, children: t.name }),
                        (0, N.jsx)(`span`, {
                          className: `tour-value`,
                          children: r ? b(r) : n === e.currentStageIndex ? `up next` : `—`,
                        }),
                      ],
                    },
                    t.name,
                  );
                }),
              }),
            ],
          }),
        ],
      }),
      a !== null &&
        e.definition.stages[a] &&
        (0, N.jsx)(La, {
          stage: e.definition.stages[a],
          day: a + 1,
          mountains: i,
          winner: (() => {
            let t = m.get(e.stageWinners[a] ?? ``);
            return t ? b(t) : void 0;
          })(),
          onClose: () => o(null),
        }),
    ],
  });
}
function Ha() {
  let e = (e) => er.filter((t) => t.powers.includes(e)).map((e) => e.name);
  return (0, N.jsxs)(`details`, {
    className: `powers-help`,
    children: [
      (0, N.jsx)(`summary`, { children: `What the powers do` }),
      (0, N.jsxs)(`p`, {
        className: `powers-help-intro`,
        children: [
          `A power belongs to the `,
          (0, N.jsx)(`strong`, { children: `card` }),
          `, not to the rider: a Grimpeur's 3s carry the descent floor while its 6s carry the ascent cap, and only the cards an Overview card adds are marked. Six of the twelve Specialists change nothing but the values in the deck.`,
        ],
      }),
      (0, N.jsx)(`dl`, {
        className: `powers-help-list`,
        children: nr.map((t) =>
          (0, N.jsxs)(
            `div`,
            {
              className: `powers-help-row`,
              children: [
                (0, N.jsx)(`dt`, { children: (0, N.jsx)(Qr, { power: t, labelled: !0 }) }),
                (0, N.jsxs)(`dd`, {
                  children: [
                    (0, N.jsx)(`p`, { className: `powers-help-rule`, children: tr[t].blurb }),
                    (0, N.jsx)(`p`, { className: `powers-help-detail`, children: tr[t].detail }),
                    (0, N.jsxs)(`p`, {
                      className: `powers-help-carriers`,
                      children: [`On the cards of: `, e(t).join(`, `)],
                    }),
                  ],
                }),
              ],
            },
            t,
          ),
        ),
      }),
    ],
  });
}
var Ua = 550,
  Wa = { rouleur: `Rouleur`, sprinteur: `Sprinteur` };
function Ga({ players: e, onDrafted: t }) {
  let [n, r] = (0, l.useState)(() => ar(e)),
    i = or(n, e),
    a = (0, l.useRef)(!1);
  (0, l.useEffect)(() => {
    i || a.current || ((a.current = !0), t(n.taken));
  }, [i, n.taken, t]);
  let o = i?.player.isCpu ?? !1;
  (0, l.useEffect)(() => {
    if (!o) return;
    let t = setTimeout(() => r((t) => cr(t, e)), Ua);
    return () => clearTimeout(t);
  }, [o, n.taken, e]);
  let s = e.map((e) => ({
    player: e,
    riders: [`rouleur`, `sprinteur`].map((t) => ({
      kind: t,
      specialist: rr(n.taken[Vt(e.id, t)] ?? null),
    })),
  }));
  return (0, N.jsxs)(`div`, {
    className: `draft-screen`,
    children: [
      (0, N.jsxs)(`header`, {
        className: `draft-header`,
        children: [
          (0, N.jsx)(`h1`, { children: `Specialist Riders` }),
          (0, N.jsx)(`p`, {
            className: `draft-tagline`,
            children: `One Overview card per rider — Rouleurs first, then the order reverses for the Sprinteurs. Your picks are public, and they hold for every stage.`,
          }),
        ],
      }),
      (0, N.jsx)(Ha, {}),
      (0, N.jsxs)(`div`, {
        className: `draft-card`,
        children: [
          (0, N.jsx)(`p`, {
            className: `draft-prompt`,
            children: i
              ? (0, N.jsxs)(N.Fragment, {
                  children: [
                    (0, N.jsx)(`strong`, {
                      style: { color: i.player.color },
                      children: i.player.name,
                    }),
                    i.player.isCpu ? ` is choosing a ${Wa[i.kind]}…` : ` — choose a ${Wa[i.kind]}`,
                  ],
                })
              : `Every rider has their Overview card.`,
          }),
          (0, N.jsx)(`ol`, {
            className: `draft-order`,
            children: n.order.map((t, n) => {
              let r = e.find((e) => e.id === t);
              return r
                ? (0, N.jsxs)(
                    `li`,
                    {
                      className: r.id === i?.player.id ? `draft-turn is-now` : `draft-turn`,
                      children: [
                        (0, N.jsx)(`span`, {
                          className: `draft-turn-swatch`,
                          style: { backgroundColor: r.color },
                        }),
                        n + 1,
                        `. `,
                        r.name,
                      ],
                    },
                    t,
                  )
                : null;
            }),
          }),
          [`rouleur`, `sprinteur`].map((t) => {
            let a = i?.kind === t;
            return (0, N.jsxs)(
              `section`,
              {
                className: a ? `draft-pool is-open` : `draft-pool`,
                'aria-label': `${Wa[t]} specialists`,
                children: [
                  (0, N.jsxs)(`h2`, { children: [Wa[t], `s`] }),
                  (0, N.jsx)(`div`, {
                    className: `draft-pool-cards`,
                    children: er
                      .filter((e) => e.kind === t)
                      .map((o) => {
                        let s = n.pool[t].filter((e) => e === o.id).length,
                          c = A[o.id],
                          l = a && i !== null && s > 0 && !i.player.isCpu;
                        return (0, N.jsxs)(
                          `button`,
                          {
                            type: `button`,
                            className: s > 0 ? `draft-overview` : `draft-overview is-gone`,
                            disabled: !l,
                            onClick: () => r((t) => sr(t, e, o.id)),
                            children: [
                              (0, N.jsxs)(`span`, {
                                className: `draft-overview-head`,
                                children: [
                                  (0, N.jsx)(`span`, {
                                    className: `draft-overview-name`,
                                    children: o.name,
                                  }),
                                  s > 1 &&
                                    (0, N.jsxs)(`span`, {
                                      className: `draft-overview-copies`,
                                      children: [`×`, s],
                                    }),
                                ],
                              }),
                              (0, N.jsx)(`span`, {
                                className: `draft-overview-powers`,
                                children:
                                  o.powers.length > 0
                                    ? o.powers.map((e) =>
                                        (0, N.jsx)(Qr, { power: e, labelled: !0 }, e),
                                      )
                                    : null,
                              }),
                              (0, N.jsxs)(`span`, {
                                className: `draft-overview-swap`,
                                children: [
                                  (0, N.jsxs)(`span`, {
                                    className: `draft-out`,
                                    children: [
                                      `−`,
                                      ` `,
                                      (0, N.jsx)($r, {
                                        cards: c.removed.map((e) => ({ value: e })),
                                        struck: !0,
                                      }),
                                    ],
                                  }),
                                  (0, N.jsxs)(`span`, {
                                    className: `draft-in`,
                                    children: [`+ `, (0, N.jsx)($r, { cards: c.added })],
                                  }),
                                ],
                              }),
                              (0, N.jsx)(`span`, {
                                className: `draft-overview-blurb`,
                                children: o.blurb,
                              }),
                            ],
                          },
                          o.id,
                        );
                      }),
                  }),
                ],
              },
              t,
            );
          }),
          (0, N.jsx)(`div`, {
            className: `draft-taken`,
            children: s.map(({ player: e, riders: t }) =>
              (0, N.jsxs)(
                `div`,
                {
                  className: `draft-team`,
                  children: [
                    (0, N.jsxs)(`span`, {
                      className: `draft-team-name`,
                      children: [
                        (0, N.jsx)(`span`, {
                          className: `draft-turn-swatch`,
                          style: { backgroundColor: e.color },
                        }),
                        e.name,
                      ],
                    }),
                    t.map(({ kind: e, specialist: t }) =>
                      (0, N.jsxs)(
                        `span`,
                        {
                          className: `draft-team-pick`,
                          children: [
                            (0, N.jsx)(`span`, {
                              className: `draft-team-kind`,
                              children: e === `rouleur` ? `R` : `S`,
                            }),
                            t?.name ?? `—`,
                          ],
                        },
                        e,
                      ),
                    ),
                  ],
                },
                e.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
var Ka = [`shape`, `direction`, `ranks`, `terrain`, `role`, `flexible`, `singleFile`];
function qa(e) {
  return typeof e == `string` ? `"${e}"` : String(e);
}
function Ja(e) {
  return `  { ${Ka.flatMap((t) => {
    let n = e[t];
    return n === void 0 ? [] : [`${t}: ${qa(n)}`];
  }).join(`, `)} },`;
}
function Ya(e) {
  return e.map(Ja).join(`
`);
}
function Xa(e, t, n) {
  let r = `${t
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, `_`)
    .replace(/^_+|_+$/g, ``)}_TEMPLATE`;
  return [
    `export const ${r}: Segment[] = [`,
    Ya(e),
    `];`,
    ``,
    `// In COURSE_TEMPLATES:`,
    `"${t}": { segments: ${r}, length: ${n} },`,
  ].join(`
`);
}
var Za = [`straight`, `soft-turn`, `sharp-turn`],
  Qa = [`flat`, `climb`, `descent`, `cobble`],
  $a = [`left`, `right`],
  eo = [`start`, `finish`];
function to(e) {
  return e.replace(/\/\*[\s\S]*?\*\//g, ``).replace(/\/\/[^\n]*/g, ``);
}
function no(e, t, n, r) {
  let i = 0;
  for (let a = t; a < e.length; a += 1)
    if (e[a] === n) i += 1;
    else if (e[a] === r && (--i, i === 0)) return e.slice(t + 1, a);
  return null;
}
function ro(e) {
  let t = [],
    n = 0,
    r = 0;
  for (let i = 0; i < e.length; i += 1) {
    let a = e[i];
    a === `{` || a === `[`
      ? (n += 1)
      : a === `}` || a === `]`
        ? --n
        : a === `,` && n === 0 && (t.push(e.slice(r, i)), (r = i + 1));
  }
  return (t.push(e.slice(r)), t.map((e) => e.trim()).filter((e) => e !== ``));
}
function io(e, t) {
  let n = {};
  for (let r of ro(e)) {
    let e = r.indexOf(`:`);
    if (e === -1) return `Segment ${t}: "${r}" is not a \`key: value\` pair.`;
    let i = r
        .slice(0, e)
        .trim()
        .replace(/^["']|["']$/g, ``),
      a = r.slice(e + 1).trim();
    if (i === `narrowSlots`) continue;
    let o = a.match(/^"([^"]*)"$|^'([^']*)'$/),
      s = o
        ? (o[1] ?? o[2])
        : a === `true`
          ? !0
          : a === `false`
            ? !1
            : /^-?\d+$/.test(a)
              ? Number(a)
              : void 0;
    if (s === void 0) return `Segment ${t}: cannot read \`${i}: ${a}\`.`;
    let c = (e) =>
      typeof s == `string` && e.includes(s)
        ? null
        : `Segment ${t}: ${i} is \`${a}\`, not ${e.map((e) => `"${e}"`).join(`, `)}.`;
    switch (i) {
      case `shape`:
      case `terrain`:
      case `direction`:
      case `role`: {
        let e = c(i === `shape` ? Za : i === `terrain` ? Qa : i === `direction` ? $a : eo);
        if (e) return e;
        n[i] = s;
        break;
      }
      case `ranks`:
        if (typeof s != `number` || s < 1)
          return `Segment ${t}: ranks is \`${a}\`, and a segment is at least one rank long.`;
        n.ranks = s;
        break;
      case `flexible`:
      case `singleFile`:
        if (typeof s != `boolean`) return `Segment ${t}: ${i} is \`${a}\`, not true or false.`;
        n[i] = s;
        break;
      default:
        return `Segment ${t}: \`${i}\` is not a segment field.`;
    }
  }
  for (let e of [`shape`, `ranks`, `terrain`])
    if (n[e] === void 0) return `Segment ${t} has no ${e}.`;
  return n;
}
function ao(e) {
  let t = to(e).trim();
  if (t === ``) return { ok: !1, error: `Nothing pasted.` };
  let n = -1,
    r = null,
    i = !1;
  for (let e = t.indexOf(`[`); e !== -1; e = t.indexOf(`[`, e + 1)) {
    let a = no(t, e, `[`, `]`);
    if (a === null)
      return { ok: !1, error: 'The segment list is never closed — a `]` is missing.' };
    if (a.includes(`{`)) {
      ((n = e), (r = a));
      break;
    }
    if (a.trim() === `` && t.slice(0, e).trimEnd().endsWith(`=`))
      return { ok: !1, error: `The segment list is empty.` };
    i ||= a.trim() === ``;
  }
  if (n === -1 || r === null)
    return {
      ok: !1,
      error: i ? `The segment list is empty.` : 'No segment list here — expected `[ { … } ]`.',
    };
  let a = [];
  for (let [e, t] of ro(r).entries()) {
    if (!t.startsWith(`{`))
      return { ok: !1, error: `Segment ${e + 1} is not an object: \`${t}\`.` };
    let n = no(t, 0, `{`, `}`);
    if (n === null)
      return { ok: !1, error: `Segment ${e + 1} is never closed — a \`}\` is missing.` };
    let r = io(n, e + 1);
    if (typeof r == `string`) return { ok: !1, error: r };
    a.push(r);
  }
  if (a.length === 0) return { ok: !1, error: `The segment list is empty.` };
  let o = t.slice(n).match(/["']([^"']+)["']\s*:\s*\{\s*segments\s*:[^}]*\}/),
    s = o?.[0].match(/length\s*:\s*(\d+)/);
  return { ok: !0, segments: a, name: o?.[1], length: s ? Number(s[1]) : void 0 };
}
var oo = `export const MY_COURSE_TEMPLATE: Segment[] = [
  { shape: "straight", ranks: 4, terrain: "flat", role: "start" },
  …
];`;
function so({ onImport: e, onClose: t }) {
  let [n, r] = (0, l.useState)(``),
    [i, a] = (0, l.useState)(null);
  (0, l.useEffect)(() => {
    let e = (e) => {
      e.key === `Escape` && t();
    };
    return (window.addEventListener(`keydown`, e), () => window.removeEventListener(`keydown`, e));
  }, [t]);
  function o() {
    let t = ao(n);
    if (!t.ok) {
      a(t.error);
      return;
    }
    e(t.segments, t.name, t.length);
  }
  return (0, N.jsx)(`div`, {
    className: `import-modal`,
    onClick: t,
    children: (0, N.jsxs)(`div`, {
      className: `import-modal-card`,
      role: `dialog`,
      'aria-modal': `true`,
      'aria-label': `Import a course template`,
      onClick: (e) => e.stopPropagation(),
      children: [
        (0, N.jsxs)(`header`, {
          className: `import-modal-header`,
          children: [
            (0, N.jsx)(`h2`, { children: `Import a course` }),
            (0, N.jsxs)(`p`, {
              children: [
                `Paste a `,
                (0, N.jsx)(`code`, { children: `Segment[]` }),
                ` literal — the panel's own output, or a template out of `,
                (0, N.jsx)(`code`, { children: `courses.ts` }),
                `. Nothing is saved; it is loaded into the list to edit.`,
              ],
            }),
            (0, N.jsx)(`button`, {
              type: `button`,
              className: `import-modal-close`,
              onClick: t,
              'aria-label': `Close`,
              children: `×`,
            }),
          ],
        }),
        (0, N.jsxs)(`div`, {
          className: `import-modal-body`,
          children: [
            (0, N.jsx)(`textarea`, {
              className: `import-modal-input`,
              'aria-label': `Course template source`,
              placeholder: oo,
              spellCheck: !1,
              autoFocus: !0,
              value: n,
              onChange: (e) => {
                (r(e.target.value), a(null));
              },
            }),
            i && (0, N.jsx)(`p`, { className: `import-modal-error`, role: `alert`, children: i }),
            (0, N.jsxs)(`div`, {
              className: `import-modal-actions`,
              children: [
                (0, N.jsx)(`button`, { type: `button`, onClick: t, children: `Cancel` }),
                (0, N.jsx)(`button`, {
                  type: `button`,
                  className: `import-modal-go`,
                  onClick: o,
                  children: `Import`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var co = [`straight`, `soft-turn`, `sharp-turn`],
  lo = [`left`, `right`],
  uo = [`flat`, `climb`, `descent`, `cobble`],
  z = 4,
  fo = 5,
  po = [
    { shape: `straight`, ranks: z, terrain: `flat`, role: `start` },
    { shape: `straight`, ranks: 1, terrain: `flat`, flexible: !0 },
    { shape: `straight`, ranks: fo, terrain: `flat`, role: `finish` },
  ],
  B = `New Course`,
  V = d.default,
  mo = { straight: `Straight`, 'soft-turn': `Soft 45°`, 'sharp-turn': `Sharp 90°` };
function ho(e) {
  let t = e.length > 1 ? e : [...e, { ...e[0] }];
  return t.map((e, n) =>
    n === 0
      ? { ...e, role: `start`, ranks: z, flexible: void 0 }
      : n === t.length - 1
        ? { ...e, role: `finish`, ranks: fo, flexible: void 0 }
        : { ...e, role: void 0 },
  );
}
function go(e) {
  return e.shape !== `straight`;
}
function _o(e, t, n, r) {
  let i = [];
  (n !== r &&
    i.push(
      `The road is ${n} tiles, not the ${r} asked for — the fixed segments alone are longer than that, and a flexible straight never shrinks past one rank.`,
    ),
    (n < d.min || n > d.max) &&
      i.push(
        `${n} tiles from the grid to the line — outside the printed game's ${d.min}–${d.max}, which is the range the decks and the CPU's plans are pitched at.`,
      ));
  for (let t of e)
    if (go(t) && !t.direction) {
      i.push(`A turn with no direction bends right by default — say which way.`);
      break;
    }
  for (let t of e)
    if (t.singleFile && t.terrain !== `cobble`) {
      i.push(`Single file is a cobble rule; it does nothing on any other terrain.`);
      break;
    }
  if (t.length > 0) {
    let [e, n] = t[0];
    i.push(
      `The road folds back over itself — rank ${e + 1} and rank ${n + 1} share the same ground${t.length > 1 ? `, and ${t.length - 1} more pair(s)` : ``}.`,
    );
  }
  return i;
}
function vo({ onExit: e }) {
  let [t, n] = (0, l.useState)(B),
    [r, i] = (0, l.useState)(po),
    [a, o] = (0, l.useState)(V),
    [s, c] = (0, l.useState)(!1),
    [u, d] = (0, l.useState)(!0),
    [f, p] = (0, l.useState)(null),
    [m, h] = (0, l.useState)(null),
    [g, _] = (0, l.useState)(!1),
    [v, b] = (0, l.useState)(!1),
    x = (0, l.useMemo)(() => w(r, a), [r, a]),
    S = (0, l.useMemo)(() => T(x, t), [x, t]),
    C = (0, l.useMemo)(() => E(S), [S]),
    D = (0, l.useMemo)(() => Fi(S), [S]),
    O = re(S),
    ee = r.filter((e) => e.flexible).length,
    ie = _o(x, D, O, ee === 0 ? O : a),
    ae = (e) => C.filter((t) => t.terrain === e).length,
    oe = C.filter((e) => e.narrowSlot).length;
  function k(e, t) {
    (i((n) => ho(n.map((n, r) => (r === e ? { ...n, ...t } : n)))), _(!1));
  }
  function A(e, t, r) {
    (i(ho(e)), n(t), o(r), _(!1));
  }
  function se(e) {
    (i((t) =>
      ho([...t.slice(0, e), { shape: `straight`, ranks: 2, terrain: `flat` }, ...t.slice(e)]),
    ),
      _(!1));
  }
  function ce(e) {
    (i((t) => ho([...t.slice(0, e + 1), { ...t[e] }, ...t.slice(e + 1)])), _(!1));
  }
  function le(e) {
    (i((t) => (t.length > 2 ? ho(t.filter((t, n) => n !== e)) : t)), _(!1));
  }
  function ue(e, t) {
    (i((n) => {
      let r = e + t;
      if (r < 0 || r >= n.length) return n;
      let i = [...n],
        [a] = i.splice(e, 1);
      return (i.splice(r, 0, a), ho(i));
    }),
      _(!1));
  }
  let j = Xa(x, t, O);
  async function M() {
    try {
      (await navigator.clipboard.writeText(j), _(!0));
    } catch {
      _(!1);
    }
  }
  return (0, N.jsxs)(`div`, {
    className: `builder-screen`,
    children: [
      (0, N.jsxs)(`header`, {
        className: `builder-header`,
        children: [
          (0, N.jsx)(`button`, {
            type: `button`,
            className: `builder-back`,
            onClick: e,
            children: `← Back`,
          }),
          (0, N.jsxs)(`div`, {
            className: `builder-title`,
            children: [
              (0, N.jsx)(`h1`, { children: `Course builder` }),
              (0, N.jsxs)(`p`, {
                children: [
                  `A design tool, not a game mode: the only thing it makes is the segment list you paste into `,
                  (0, N.jsx)(`code`, { children: `courses.ts` }),
                  ` yourself.`,
                ],
              }),
            ],
          }),
          (0, N.jsxs)(`div`, {
            className: `builder-start`,
            children: [
              (0, N.jsx)(`span`, { className: `builder-start-label`, children: `Start from` }),
              (0, N.jsxs)(`div`, {
                className: `builder-templates`,
                children: [
                  [...Object.keys(y), B].map((e) =>
                    (0, N.jsx)(
                      `button`,
                      {
                        type: `button`,
                        className: `builder-template`,
                        onClick: () =>
                          A(
                            e === B
                              ? po.map((e) => ({ ...e }))
                              : y[e].segments.map((e) => ({ ...e })),
                            e,
                            e === B ? V : y[e].length,
                          ),
                        children: e === B ? `Blank` : e,
                      },
                      e,
                    ),
                  ),
                  (0, N.jsx)(`button`, {
                    type: `button`,
                    className: `builder-template`,
                    onClick: () => b(!0),
                    children: `Import…`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      v &&
        (0, N.jsx)(so, {
          onImport: (e, n, r) => {
            (A(e, n ?? t, r ?? re(T(e, `imported`))), b(!1));
          },
          onClose: () => b(!1),
        }),
      (0, N.jsxs)(`div`, {
        className: `builder-body`,
        children: [
          (0, N.jsxs)(`div`, {
            className: `builder-list`,
            children: [
              (0, N.jsxs)(`div`, {
                className: `builder-fields`,
                children: [
                  (0, N.jsxs)(`label`, {
                    className: `builder-name`,
                    children: [
                      `Name`,
                      (0, N.jsx)(`input`, {
                        id: `builder-name`,
                        type: `text`,
                        value: t,
                        onChange: (e) => n(e.target.value),
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`label`, {
                    className: `builder-name`,
                    children: [
                      `Course length`,
                      (0, N.jsx)(`input`, {
                        id: `builder-length`,
                        type: `number`,
                        min: 1,
                        disabled: ee === 0,
                        title:
                          ee === 0
                            ? `Nothing to stretch: no straight is marked flex`
                            : `The tiles from the grid to the line, taken out of the flexible straights`,
                        value: m ?? (ee === 0 ? O : a),
                        onChange: (e) => {
                          let t = e.target.value;
                          h(t);
                          let n = Math.round(Number(t));
                          t !== `` && Number.isFinite(n) && n >= 1 && (o(n), _(!1));
                        },
                        onBlur: () => h(null),
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsx)(`ol`, {
                className: `segment-rows`,
                children: r.map((e, t) => {
                  let n = e.role !== void 0;
                  return (0, N.jsxs)(
                    `li`,
                    {
                      className: `segment-row${n ? ` is-fixed` : ``}`,
                      children: [
                        (0, N.jsx)(`span`, { className: `segment-number`, children: t + 1 }),
                        n &&
                          (0, N.jsx)(`span`, {
                            className: `segment-role`,
                            children: e.role === `start` ? `grid` : `run-out`,
                          }),
                        (0, N.jsx)(`select`, {
                          'aria-label': `Shape of segment ${t + 1}`,
                          value: e.shape,
                          onChange: (e) => k(t, { shape: e.target.value }),
                          children: co.map((e) =>
                            (0, N.jsx)(`option`, { value: e, children: mo[e] }, e),
                          ),
                        }),
                        (0, N.jsxs)(`select`, {
                          'aria-label': `Direction of segment ${t + 1}`,
                          value: e.direction ?? ``,
                          disabled: !go(e),
                          onChange: (e) => k(t, { direction: e.target.value || void 0 }),
                          children: [
                            (0, N.jsx)(`option`, { value: ``, children: `—` }),
                            lo.map((e) => (0, N.jsx)(`option`, { value: e, children: e }, e)),
                          ],
                        }),
                        (0, N.jsx)(`input`, {
                          className: `segment-ranks`,
                          'aria-label': `Ranks in segment ${t + 1}`,
                          type: `number`,
                          min: 1,
                          disabled: e.flexible || n,
                          title: n
                            ? `The grid and the run-out are a fixed length`
                            : e.flexible
                              ? `Stretched to fit the course length`
                              : void 0,
                          value: f?.index === t ? f.value : x[t].ranks,
                          onChange: (e) => {
                            let n = e.target.value;
                            p({ index: t, value: n });
                            let r = Math.round(Number(n));
                            n !== `` && Number.isFinite(r) && r >= 1 && k(t, { ranks: r });
                          },
                          onBlur: () => {
                            (f?.index === t && f.value.trim() === `` && k(t, { ranks: 1 }),
                              p(null));
                          },
                        }),
                        (0, N.jsx)(`span`, {
                          className: `terrain-swatch terrain-${e.terrain}`,
                          'aria-hidden': `true`,
                        }),
                        (0, N.jsx)(`select`, {
                          'aria-label': `Terrain of segment ${t + 1}`,
                          value: e.terrain,
                          onChange: (e) => k(t, { terrain: e.target.value }),
                          children: uo.map((e) =>
                            (0, N.jsx)(`option`, { value: e, children: e }, e),
                          ),
                        }),
                        (0, N.jsxs)(`label`, {
                          className: `segment-flag`,
                          title: `The stage length is taken out of this straight`,
                          children: [
                            (0, N.jsx)(`input`, {
                              type: `checkbox`,
                              checked: e.flexible ?? !1,
                              disabled: n,
                              onChange: (e) => k(t, { flexible: e.target.checked || void 0 }),
                            }),
                            `flex`,
                          ],
                        }),
                        (0, N.jsxs)(`label`, {
                          className: `segment-flag`,
                          title: `Cobbles: this sector rides in single file, one tile per rank`,
                          children: [
                            (0, N.jsx)(`input`, {
                              type: `checkbox`,
                              checked: e.singleFile ?? !1,
                              disabled: e.terrain !== `cobble`,
                              onChange: (e) => k(t, { singleFile: e.target.checked || void 0 }),
                            }),
                            `1‑file`,
                          ],
                        }),
                        (0, N.jsxs)(`span`, {
                          className: `segment-controls`,
                          children: [
                            (0, N.jsx)(`button`, {
                              type: `button`,
                              onClick: () => ue(t, -1),
                              'aria-label': `Move up`,
                              children: (0, N.jsx)(Or, { size: 14 }),
                            }),
                            (0, N.jsx)(`button`, {
                              type: `button`,
                              onClick: () => ue(t, 1),
                              'aria-label': `Move down`,
                              children: (0, N.jsx)(wr, { size: 14 }),
                            }),
                            (0, N.jsx)(`button`, {
                              type: `button`,
                              onClick: () => se(t),
                              'aria-label': `Insert above`,
                              children: (0, N.jsx)(Ir, { size: 14 }),
                            }),
                            (0, N.jsx)(`button`, {
                              type: `button`,
                              onClick: () => ce(t),
                              'aria-label': `Duplicate`,
                              children: (0, N.jsx)(Pr, { size: 14 }),
                            }),
                            (0, N.jsx)(`button`, {
                              type: `button`,
                              onClick: () => le(t),
                              'aria-label': `Delete`,
                              children: (0, N.jsx)(Wr, { size: 14 }),
                            }),
                          ],
                        }),
                      ],
                    },
                    t,
                  );
                }),
              }),
              (0, N.jsxs)(`button`, {
                type: `button`,
                className: `segment-add`,
                onClick: () => se(r.length - 1),
                children: [(0, N.jsx)(Br, { size: 14 }), ` Add segment`],
              }),
            ],
          }),
          (0, N.jsxs)(`div`, {
            className: `builder-preview`,
            children: [
              (0, N.jsx)(Qi, { course: S }),
              (0, N.jsxs)(`div`, {
                className: `builder-profile`,
                children: [
                  (0, N.jsxs)(`button`, {
                    type: `button`,
                    className: `builder-profile-toggle`,
                    'aria-expanded': u,
                    onClick: () => d((e) => !e),
                    children: [
                      (0, N.jsx)(`span`, {
                        className: `builder-profile-caret`,
                        'aria-hidden': `true`,
                        children: u ? `▾` : `▸`,
                      }),
                      `Stage profile`,
                    ],
                  }),
                  u && (0, N.jsx)(pa, { course: S }),
                ],
              }),
              (0, N.jsxs)(`dl`, {
                className: `builder-numbers`,
                children: [
                  (0, N.jsxs)(`div`, {
                    children: [
                      (0, N.jsx)(`dt`, { children: `Raced` }),
                      (0, N.jsxs)(`dd`, { children: [O, ` tiles`] }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    children: [
                      (0, N.jsx)(`dt`, { children: `Total road` }),
                      (0, N.jsxs)(`dd`, { children: [te(S), ` ranks`] }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    children: [
                      (0, N.jsx)(`dt`, { children: `Line at` }),
                      (0, N.jsxs)(`dd`, { children: [`rank `, ne(S) + 1] }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    children: [
                      (0, N.jsx)(`dt`, { children: `Climb / descent` }),
                      (0, N.jsxs)(`dd`, { children: [ae(`climb`), ` / `, ae(`descent`)] }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    children: [
                      (0, N.jsx)(`dt`, { children: `Cobbles` }),
                      (0, N.jsxs)(`dd`, { children: [ae(`cobble`), ` (`, oe, ` single file)`] }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    children: [
                      (0, N.jsx)(`dt`, { children: `Flexible` }),
                      (0, N.jsx)(`dd`, {
                        children:
                          ee === 0 ? `none — fixed length` : `${ee} straight${ee > 1 ? `s` : ``}`,
                      }),
                    ],
                  }),
                ],
              }),
              ie.length > 0 &&
                (0, N.jsx)(`ul`, {
                  className: `builder-warnings`,
                  children: ie.map((e) => (0, N.jsx)(`li`, { children: e }, e)),
                }),
              (0, N.jsxs)(`div`, {
                className: `builder-code`,
                children: [
                  (0, N.jsx)(`button`, {
                    type: `button`,
                    onClick: () => c((e) => !e),
                    children: s ? `Hide code` : `Show code`,
                  }),
                  s &&
                    (0, N.jsxs)(N.Fragment, {
                      children: [
                        (0, N.jsx)(`button`, {
                          type: `button`,
                          className: `builder-copy`,
                          onClick: M,
                          children: g ? `Copied` : `Copy`,
                        }),
                        (0, N.jsx)(`pre`, { children: j }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var yo = Xn();
function bo(e, t) {
  return e.map((e) =>
    e.isCpu && e.difficulty === `normal` ? { ...e, strategy: Ve(t) } : { ...e, strategy: null },
  );
}
function xo() {
  let [e, t] = (0, l.useState)(yo?.gameState ?? null),
    [n, r] = (0, l.useState)(yo?.tour ?? null),
    [i, a] = (0, l.useState)(yo?.roster ?? null),
    [o, s] = (0, l.useState)(null),
    [c, u] = (0, l.useState)(`menu`);
  (0, l.useEffect)(() => {
    if (!i || (!e && !n)) {
      Zn();
      return;
    }
    let t = setTimeout(() => Yn({ roster: i, tour: n, gameState: e }), 300);
    return () => clearTimeout(t);
  }, [i, n, e]);
  function d(e, n, r) {
    let i = C({ raceRanks: n.stageLength, mountains: n.mountains, courseName: n.courseName });
    t(Gt(bo(e, n.stageLength), i, n, { specialists: r }));
  }
  function f(e, n) {
    if ((r(null), a({ players: e, settings: n, specialists: {} }), n.specialists)) {
      (s({ mode: `race` }), t(null));
      return;
    }
    d(e, n, {});
  }
  function p(e, n, i) {
    if ((a({ players: e, settings: n, specialists: {} }), t(null), n.specialists)) {
      (s({ mode: `tour`, stages: i }), r(null));
      return;
    }
    r(yn(e, _n(i)));
  }
  function m(e) {
    if (i && o) {
      if ((a({ ...i, specialists: e }), s(null), o.mode === `tour`)) {
        r(yn(i.players, _n(o.stages)));
        return;
      }
      d(i.players, i.settings, e);
    }
  }
  function h() {
    if (!n || !i) return;
    let e = bn(n);
    if (!e) return;
    let r = C({
      raceRanks: e.template.length,
      mountains: i.settings.mountains,
      courseName: e.name,
      segments: e.template.segments,
    });
    t(
      Gt(bo(Dn(n, i.players), e.template.length), r, i.settings, {
        bonuses: Zt(r),
        carriedExhaustion: Pn(n),
        orderedGrid: !0,
        specialists: i.specialists,
      }),
    );
  }
  function g() {
    (e && r((t) => t && jn(t, e, ne(e.course))), t(null));
  }
  function _() {
    (r(null), a(null), t(null), s(null));
  }
  let v = (0, l.useCallback)((e) => {
    t((t) => t && e(t));
  }, []);
  return e
    ? (0, N.jsx)(Aa, {
        gameState: e,
        onUpdate: v,
        onExit: n ? g : () => t(null),
        onQuit: _,
        stageLabel: n
          ? `Stage ${n.currentStageIndex + 1} of ${n.definition.stages.length}`
          : void 0,
        exitLabel: n ? `Tour standings` : `New game`,
        tour: n ?? void 0,
      })
    : o && i
      ? (0, N.jsx)(Ga, { players: i.players, onDrafted: m })
      : n && i
        ? (0, N.jsx)(Va, {
            tour: n,
            players: i.players,
            onStartStage: h,
            onExit: _,
            mountains: i.settings.mountains,
          })
        : c === `builder`
          ? (0, N.jsx)(vo, { onExit: () => u(`menu`) })
          : (0, N.jsx)(ui, { onStart: f, onStartTour: p, onOpenBuilder: () => u(`builder`) });
}
(0, u.createRoot)(document.getElementById(`root`)).render(
  (0, N.jsx)(l.StrictMode, { children: (0, N.jsx)(xo, {}) }),
);
