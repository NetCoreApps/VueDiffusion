var Gs = Object.defineProperty;
var Ws = (e, t, l) => t in e ? Gs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var pe = (e, t, l) => (Ws(e, typeof t != "symbol" ? t + "" : t, l), l);
import { defineComponent as se, computed as f, openBlock as a, createElementBlock as u, normalizeClass as x, unref as o, createElementVNode as s, createCommentVNode as $, renderSlot as G, ref as S, toDisplayString as M, inject as Ne, nextTick as hl, isRef as Hn, mergeProps as _e, withModifiers as He, h as gt, resolveComponent as q, createBlock as Y, withCtx as he, useAttrs as Zs, createVNode as ge, createTextVNode as ye, watchEffect as jl, normalizeStyle as Gl, Fragment as ke, renderList as Me, withDirectives as xt, vModelCheckbox as Wl, withKeys as Js, createStaticVNode as gl, vModelSelect as Xs, useSlots as Zl, getCurrentInstance as We, onMounted as at, createSlots as Jl, normalizeProps as St, guardReactiveProps as cl, vModelDynamic as Ys, onUnmounted as Gt, watch as Dt, vModelText as eo, resolveDynamicComponent as zn, provide as Wt, resolveDirective as to } from "vue";
import { errorResponseExcept as lo, dateFmt as Un, toTime as no, omit as it, enc as Ol, setQueryString as so, appendQueryString as zt, nameOf as oo, ApiResult as Ye, lastRightPart as kt, leftPart as pl, map as Ee, toDate as Ct, toDateTime as ao, toCamelCase as io, mapGet as fe, chop as ro, fromXsdDuration as qn, isDate as yl, timeFmt12 as uo, apiValue as co, indexOfAny as fo, createBus as mo, toKebabCase as jn, humanize as Oe, delaySet as Qn, rightPart as Tl, queryString as Bl, combinePaths as vo, toPascalCase as nt, errorResponse as vt, trimEnd as ho, $1 as fl, lastLeftPart as go, ResponseStatus as Il, ResponseError as On, HttpMethods as Xl, uniqueKeys as El, humanify as Kn, each as po } from "@servicestack/client";
const yo = { class: "flex items-center" }, bo = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, wo = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, xo = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), ko = [
  xo
], $o = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Co = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
  "clip-rule": "evenodd"
}, null, -1), _o = [
  Co
], Lo = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Vo = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), Mo = [
  Vo
], So = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Ao = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  "clip-rule": "evenodd"
}, null, -1), Fo = [
  Ao
], To = /* @__PURE__ */ se({
  __name: "Alert",
  props: {
    type: { default: "warn" },
    hideIcon: { type: Boolean }
  },
  setup(e) {
    const t = e, l = f(() => t.type == "info" ? "bg-blue-50 dark:bg-blue-200" : t.type == "error" ? "bg-red-50 dark:bg-red-200" : t.type == "success" ? "bg-green-50 dark:bg-green-200" : "bg-yellow-50 dark:bg-yellow-200"), n = f(() => t.type == "info" ? "border-blue-400" : t.type == "error" ? "border-red-400" : t.type == "success" ? "border-green-400" : "border-yellow-400"), i = f(() => t.type == "info" ? "text-blue-700" : t.type == "error" ? "text-red-700" : t.type == "success" ? "text-green-700" : "text-yellow-700");
    return (r, d) => (a(), u("div", {
      class: x([o(l), o(n), "border-l-4 p-4"])
    }, [
      s("div", yo, [
        e.hideIcon ? $("", !0) : (a(), u("div", bo, [
          e.type == "warn" ? (a(), u("svg", wo, ko)) : e.type == "error" ? (a(), u("svg", $o, _o)) : e.type == "info" ? (a(), u("svg", Lo, Mo)) : e.type == "success" ? (a(), u("svg", So, Fo)) : $("", !0)
        ])),
        s("div", null, [
          s("p", {
            class: x([o(i), "text-sm"])
          }, [
            G(r.$slots, "default")
          ], 2)
        ])
      ])
    ], 2));
  }
}), Io = {
  key: 0,
  class: "rounded-md bg-green-50 dark:bg-green-200 p-4",
  role: "alert"
}, Do = { class: "flex" }, Po = /* @__PURE__ */ s("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-green-400 dark:text-green-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    })
  ])
], -1), jo = { class: "ml-3" }, Oo = { class: "text-sm font-medium text-green-800" }, Bo = { key: 0 }, Eo = { class: "ml-auto pl-3" }, Ro = { class: "-mx-1.5 -my-1.5" }, No = /* @__PURE__ */ s("span", { class: "sr-only" }, "Dismiss", -1), Ho = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), zo = [
  No,
  Ho
], Uo = /* @__PURE__ */ se({
  __name: "AlertSuccess",
  props: {
    message: null
  },
  setup(e) {
    const t = S(!1);
    return (l, n) => t.value ? $("", !0) : (a(), u("div", Io, [
      s("div", Do, [
        Po,
        s("div", jo, [
          s("h3", Oo, [
            e.message ? (a(), u("span", Bo, M(e.message), 1)) : G(l.$slots, "default", { key: 1 })
          ])
        ]),
        s("div", Eo, [
          s("div", Ro, [
            s("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",
              onClick: n[0] || (n[0] = (i) => t.value = !0)
            }, zo)
          ])
        ])
      ])
    ]));
  }
}), qo = { class: "flex" }, Qo = /* @__PURE__ */ s("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ s("path", {
      fill: "currentColor",
      d: "M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
    })
  ])
], -1), Ko = { class: "ml-3" }, Go = { class: "text-sm text-red-700 dark:text-red-200" }, Wo = /* @__PURE__ */ se({
  __name: "ErrorSummary",
  props: {
    status: null,
    except: null,
    class: null
  },
  setup(e) {
    const t = e;
    let l = Ne("ApiState", void 0);
    const n = f(() => t.status || l != null && l.error.value ? lo.call({ responseStatus: t.status ?? (l == null ? void 0 : l.error.value) }, t.except ?? []) : null);
    return (i, r) => o(n) ? (a(), u("div", {
      key: 0,
      class: x(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${i.$props.class}`)
    }, [
      s("div", qo, [
        Qo,
        s("div", Ko, [
          s("p", Go, M(o(n)), 1)
        ])
      ])
    ], 2)) : $("", !0);
  }
}), Zo = ["id", "aria-describedby"], Jo = /* @__PURE__ */ se({
  __name: "InputDescription",
  props: {
    id: null,
    description: null
  },
  setup(e) {
    return (t, l) => e.description ? (a(), u("div", {
      key: "description",
      class: "mt-2 text-sm text-gray-500",
      id: `${e.id}-description`,
      "aria-describedby": `${e.id}-description`
    }, [
      s("div", null, M(e.description), 1)
    ], 8, Zo)) : $("", !0);
  }
});
function bl(e) {
  return Un(e).replace(/\//g, "-");
}
function Gn(e) {
  return e == null ? "" : no(e);
}
function Wn(e, t) {
  e.value = null, hl(() => e.value = t);
}
function Vt(e) {
  return Object.keys(e).forEach((t) => {
    const l = e[t];
    e[t] = Hn(l) ? o(l) : l;
  }), e;
}
function At(e, t, l) {
  l ? (t.value = e.entering.cls + " " + e.entering.from, setTimeout(() => t.value = e.entering.cls + " " + e.entering.to, 0)) : (t.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => t.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function il(e) {
  if (typeof document > "u")
    return;
  let t = (e == null ? void 0 : e.after) || document.activeElement, l = t && t.form;
  if (l) {
    let n = ':not([disabled]):not([tabindex="-1"])', i = l.querySelectorAll(`a:not([disabled]), button${n}, input[type=text]${n}, [tabindex]${n}`), r = Array.prototype.filter.call(
      i,
      (c) => c.offsetWidth > 0 || c.offsetHeight > 0 || c === t
    ), d = r.indexOf(t);
    d > -1 && (r[d + 1] || r[0]).focus();
  }
}
function Pt(e) {
  if (!e)
    return null;
  if (typeof e == "string")
    return e;
  const t = typeof e == "function" ? new e() : typeof e == "object" ? e : null;
  if (!t)
    throw new Error(`Invalid DTO Type '${typeof e}'`);
  if (typeof t.getTypeName != "function")
    throw new Error(`${JSON.stringify(t)} is not a Request DTO`);
  const l = t.getTypeName();
  if (!l)
    throw new Error("DTO Required");
  return l;
}
function st(e, t, l) {
  l || (l = {});
  let n = l.cls || l.className || l.class;
  return n && (l = it(l, ["cls", "class", "className"]), l.class = n), t == null ? `<${e}` + Rl(l) + "/>" : `<${e}` + Rl(l) + `>${t || ""}</${e}>`;
}
function Rl(e) {
  return Object.keys(e).reduce((t, l) => `${t} ${l}="${Ol(e[l])}"`, "");
}
function wl(e) {
  return Object.assign({ target: "_blank", rel: "noopener", class: "text-blue-600" }, e);
}
function Mt(e) {
  return pn(e);
}
let Xo = ["string", "number", "boolean", "null", "undefined"];
function $t(e) {
  return Xo.indexOf(typeof e) >= 0 || e instanceof Date;
}
function Ut(e) {
  return !$t(e);
}
class Zn {
  get length() {
    return typeof localStorage > "u" ? 0 : localStorage.length;
  }
  getItem(t) {
    return typeof localStorage > "u" ? null : localStorage.getItem(t);
  }
  setItem(t, l) {
    typeof localStorage > "u" || localStorage.setItem(t, l);
  }
  removeItem(t) {
    typeof localStorage > "u" || localStorage.removeItem(t);
  }
  clear() {
    typeof localStorage > "u" || localStorage.clear();
  }
  key(t) {
    return typeof localStorage > "u" ? null : localStorage.key(t);
  }
}
function ml(e) {
  return typeof e == "string" ? JSON.parse(e) : null;
}
function Yl(e) {
  if (typeof history < "u") {
    const t = so(location.href, e);
    history.pushState({}, "", t);
  }
}
function en(e, t) {
  if (["function", "Function", "eval", "=>", ";"].some((i) => e.includes(i)))
    throw new Error(`Unsafe script: '${e}'`);
  const n = Object.assign(
    Object.keys(globalThis).reduce((i, r) => (i[r] = void 0, i), {}),
    t
  );
  return new Function("with(this) { return (" + e + ") }").call(n);
}
function Nl(e) {
  typeof navigator < "u" && navigator.clipboard.writeText(e);
}
function Jn(e) {
  const t = X.config.storage.getItem(e);
  return t ? JSON.parse(t) : null;
}
function tn(e, t) {
  return zt(`swr.${oo(e)}`, t ? Object.assign({}, e, t) : e);
}
function Yo(e) {
  if (e.request) {
    const t = tn(e.request, e.args);
    X.config.storage.removeItem(t);
  }
}
async function Xn(e, t, l, n, i) {
  const r = tn(t, n);
  l(new Ye({ response: Jn(r) }));
  const d = await e.api(t, n, i);
  if (d.succeeded && d.response) {
    d.response._date = new Date().valueOf();
    const c = JSON.stringify(d.response);
    X.config.storage.setItem(r, c), l(d);
  }
  return d;
}
function ea() {
  return {
    LocalStore: Zn,
    dateInputFormat: bl,
    timeInputFormat: Gn,
    setRef: Wn,
    unRefs: Vt,
    transition: At,
    focusNextElement: il,
    getTypeName: Pt,
    htmlTag: st,
    htmlAttrs: Rl,
    linkAttrs: wl,
    toAppUrl: Mt,
    isPrimitive: $t,
    isComplexType: Ut,
    pushState: Yl,
    scopedExpr: en,
    copyText: Nl,
    fromCache: Jn,
    swrCacheKey: tn,
    swrClear: Yo,
    swrApi: Xn
  };
}
const Yn = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), es = {
  img: "png,jpg,jpeg,gif,svg,webp,png,jpg,jpeg,gif,bmp,tif,tiff,webp,ai,psd,ps".split(","),
  vid: "avi,m4v,mov,mp4,mpg,mpeg,wmv,webm".split(","),
  aud: "mp3,mpa,ogg,wav,wma,mid,webm".split(","),
  ppt: "key,odp,pps,ppt,pptx".split(","),
  xls: "xls,xlsm,xlsx,ods,csv,tsv".split(","),
  doc: "doc,docx,pdf,rtf,tex,txt,md,rst,xls,xlsm,xlsx,ods,key,odp,pps,ppt,pptx".split(","),
  zip: "zip,tar,gz,7z,rar,gzip,deflate,br,iso,dmg,z,lz,lz4,lzh,s7z,apl,arg,jar,war".split(","),
  exe: "exe,bat,sh,cmd,com,app,msi,run,vb,vbs,js,ws,wsh".split(","),
  att: "bin,oct,dat".split(",")
  //attachment
}, Bn = Object.keys(es), ct = (e, t) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${t}</svg>`, rl = {
  img: ct("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: ct("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: ct("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: ct("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: ct("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: ct("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: ct("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: ct("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: ct("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, ta = /[\r\n%#()<>?[\\\]^`{|}]/g, En = 1024, la = ["Bytes", "KB", "MB", "GB", "TB"], na = (() => {
  const e = "application/", t = e + "vnd.openxmlformats-officedocument.", l = "image/", n = "text/", i = "audio/", r = "video/", d = {
    jpg: l + "jpeg",
    tif: l + "tiff",
    svg: l + "svg+xml",
    ico: l + "x-icon",
    ts: n + "typescript",
    py: n + "x-python",
    sh: n + "x-sh",
    mp3: i + "mpeg3",
    mpg: r + "mpeg",
    ogv: r + "ogg",
    xlsx: t + "spreadsheetml.sheet",
    xltx: t + "spreadsheetml.template",
    docx: t + "wordprocessingml.document",
    dotx: t + "wordprocessingml.template",
    pptx: t + "presentationml.presentation",
    potx: t + "presentationml.template",
    ppsx: t + "presentationml.slideshow",
    mdb: e + "vnd.ms-access"
  };
  function c(v, h) {
    v.split(",").forEach((y) => d[y] = h);
  }
  function m(v, h) {
    v.split(",").forEach((y) => d[y] = h(y));
  }
  return m("jpeg,gif,png,tiff,bmp,webp", (v) => l + v), m("jsx,csv,css", (v) => n + v), m("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (v) => i + v), m("3gpp,avi,dv,divx,ogg,mp4,webm", (v) => r + v), m("rtf,pdf", (v) => e + v), c("htm,html,shtm", n + "html"), c("js,mjs,cjs", n + "javascript"), c("yml,yaml", e + "yaml"), c("bat,cmd", e + "bat"), c("xml,csproj,fsproj,vbproj", n + "xml"), c("txt,ps1", n + "plain"), c("qt,mov", r + "quicktime"), c("doc,dot", e + "msword"), c("xls,xlt,xla", e + "excel"), c("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), c("cer,crt,der", e + "x-x509-ca-cert"), c("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), c("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), d;
})();
let Hl = [];
function ts(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(ta, encodeURIComponent);
}
function ln(e) {
  return "data:image/svg+xml;utf8," + ts(e);
}
function ls(e) {
  let t = URL.createObjectURL(e);
  return Hl.push(t), t;
}
function ns() {
  Hl.forEach((e) => {
    try {
      URL.revokeObjectURL(e);
    } catch (t) {
      console.error("URL.revokeObjectURL", t);
    }
  }), Hl = [];
}
function nn(e) {
  if (!e)
    return null;
  let t = pl(e, "?");
  return kt(t, "/");
}
function Zt(e) {
  let t = nn(e);
  return t == null || t.indexOf(".") === -1 ? null : kt(t, ".").toLowerCase();
}
function sn(e) {
  let t = Zt(e.name);
  return t && Yn.indexOf(t) >= 0 ? ls(e) : pt(e.name);
}
function on(e) {
  if (!e)
    return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let t = Zt(e);
  return t && Yn.indexOf(t) >= 0 || !1;
}
function pt(e) {
  if (!e)
    return null;
  let t = Zt(e);
  return t == null || on(e) ? e : Nt(t) || ln(rl.doc);
}
function Nt(e) {
  let t = ss(e);
  return t && ln(t) || null;
}
function ss(e) {
  if (rl[e])
    return rl[e];
  for (let t = 0; t < Bn.length; t++) {
    let l = Bn[t];
    if (es[l].indexOf(e) >= 0)
      return rl[l];
  }
  return null;
}
function an(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const l = t < 0 ? 0 : t, n = Math.floor(Math.log(e) / Math.log(En));
  return parseFloat((e / Math.pow(En, n)).toFixed(l)) + " " + la[n];
}
function sa(e) {
  return e.files && Array.from(e.files).map((t) => ({ fileName: t.name, contentLength: t.size, filePath: sn(t) }));
}
function xl(e, t) {
  e.onerror = null, e.src = rn(e.src, t) || "";
}
function rn(e, t) {
  return Nt(kt(e, ".").toLowerCase()) || (t ? Nt(t) || t : null) || Nt("doc");
}
function zl(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const t = kt(e, ".").toLowerCase();
  return na[t] || "application/" + t;
}
function G1() {
  return {
    extSvg: ss,
    extSrc: Nt,
    getExt: Zt,
    encodeSvg: ts,
    canPreview: on,
    getFileName: nn,
    getMimeType: zl,
    formatBytes: an,
    filePathUri: pt,
    svgToDataUri: ln,
    fileImageUri: sn,
    objectUrl: ls,
    flush: ns,
    inputFiles: sa,
    iconOnError: xl,
    iconFallbackSrc: rn
  };
}
class oa {
  constructor(t) {
    pe(this, "view");
    pe(this, "includeTypes");
    Object.assign(this, t);
  }
  getTypeName() {
    return "MetadataApp";
  }
  getMethod() {
    return "GET";
  }
  createResponse() {
    return {};
  }
}
const Ft = "/metadata/app.json", aa = {
  Boolean: "checkbox",
  DateTime: "date",
  DateOnly: "date",
  DateTimeOffset: "date",
  TimeSpan: "time",
  TimeOnly: "time",
  Byte: "number",
  Short: "number",
  Int64: "number",
  Int32: "number",
  UInt16: "number",
  UInt32: "number",
  UInt64: "number",
  Single: "number",
  Double: "number",
  Decimal: "number",
  String: "text",
  Guid: "text",
  Uri: "text"
}, ia = {
  number: "Int32",
  checkbox: "Boolean",
  date: "DateTime",
  "datetime-local": "DateTime",
  time: "TimeSpan"
}, Ul = {
  Byte: "byte",
  Int16: "short",
  Int32: "int",
  Int64: "long",
  UInt16: "ushort",
  Unt32: "uint",
  UInt64: "ulong",
  Single: "float",
  Double: "double",
  Decimal: "decimal"
};
[...Object.keys(Ul), ...Object.values(Ul)];
const ra = {
  String: "string",
  Boolean: "bool",
  ...Ul
};
function ol(e) {
  return ra[e] || e;
}
function os(e, t) {
  return e ? (t || (t = []), e === "Nullable`1" ? ol(t[0]) + "?" : e.endsWith("[]") ? `List<${ol(e.substring(0, e.length - 2))}>` : t.length === 0 ? ol(e) : pl(ol(e), "`") + "<" + t.join(",") + ">") : "";
}
function ua(e) {
  return e && os(e.name, e.genericArgs);
}
class Tt {
  constructor() {
    pe(this, "Query");
    pe(this, "QueryInto");
    pe(this, "Create");
    pe(this, "Update");
    pe(this, "Patch");
    pe(this, "Delete");
  }
  get AnyQuery() {
    return this.Query || this.QueryInto;
  }
  get AnyUpdate() {
    return this.Patch || this.Update;
  }
  toArray() {
    return [this.Query, this.QueryInto, this.Create, this.Update, this.Patch, this.Delete].filter((l) => !!l).map((l) => l);
  }
  get empty() {
    return !this.Query && !this.QueryInto && !this.Create && !this.Update && !this.Patch && !this.Delete;
  }
  add(t) {
    je.isQueryInto(t) && !this.QueryInto ? this.QueryInto = t : je.isQuery(t) && !this.Query ? this.Query = t : je.isCreate(t) && !this.Create ? this.Create = t : je.isUpdate(t) && !this.Update ? this.Update = t : je.isPatch(t) && !this.Patch ? this.Patch = t : je.isDelete(t) && !this.Delete && (this.Delete = t);
  }
  static from(t) {
    const l = new Tt();
    return t.forEach((n) => {
      l.add(n);
    }), l;
  }
  static forType(t, l) {
    var i;
    let n = new Tt();
    return t && (l ?? (l = (i = X.metadata.value) == null ? void 0 : i.api), l == null || l.operations.forEach((r) => {
      var d;
      ((d = r.dataModel) == null ? void 0 : d.name) == t && n.add(r);
    })), n;
  }
}
const je = {
  Create: "ICreateDb`1",
  Update: "IUpdateDb`1",
  Patch: "IPatchDb`1",
  Delete: "IDeleteDb`1",
  AnyRead: ["QueryDb`1", "QueryDb`2"],
  AnyWrite: ["ICreateDb`1", "IUpdateDb`1", "IPatchDb`1", "IDeleteDb`1"],
  isAnyQuery: (e) => Ee(e.request.inherits, (t) => je.AnyRead.indexOf(t.name) >= 0),
  isQuery: (e) => Ee(e.request.inherits, (t) => t.name === "QueryDb`1"),
  isQueryInto: (e) => Ee(e.request.inherits, (t) => t.name === "QueryDb`2"),
  isCrud: (e) => {
    var t;
    return (t = e.request.implements) == null ? void 0 : t.some((l) => je.AnyWrite.indexOf(l.name) >= 0);
  },
  isCreate: (e) => al(e, je.Create),
  isUpdate: (e) => al(e, je.Update),
  isPatch: (e) => al(e, je.Patch),
  isDelete: (e) => al(e, je.Delete),
  model: (e) => {
    var t, l, n;
    return e ? Ee(e.inherits, (i) => je.AnyRead.indexOf(i.name) >= 0) ? (t = e.inherits) == null ? void 0 : t.genericArgs[0] : (n = (l = e.implements) == null ? void 0 : l.find((i) => je.AnyWrite.indexOf(i.name) >= 0)) == null ? void 0 : n.genericArgs[0] : null;
  }
};
function da(e) {
  var t;
  return ((t = e.input) == null ? void 0 : t.type) || kl(un(e));
}
function as(e) {
  return e.endsWith("?") ? ro(e, 1) : e;
}
function kl(e) {
  return aa[as(e)];
}
function ca(e) {
  return e && ia[e] || "String";
}
function un(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function ql(e) {
  return e && kl(e) == "number" || !1;
}
function is(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function fa(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function rs(e) {
  if (!(e != null && e.type))
    return !1;
  const t = un(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum ? !1 : kl(e.type) == null;
}
function us(e) {
  var l, n, i;
  if (!(e != null && e.type))
    return !1;
  const t = un(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum || ((l = e.input) == null ? void 0 : l.type) == "file" || ((n = e.input) == null ? void 0 : n.type) == "tag" || ((i = e.input) == null ? void 0 : i.type) == "combobox" ? !0 : kl(e.type) != null;
}
function qt(e, t) {
  let l = typeof e == "string" ? $l(e) : e;
  l || (console.warn(`Metadata not found for: ${e}`), l = { request: { name: e } });
  let n = function() {
    return function(r) {
      Object.assign(this, r);
    };
  }(), i = function() {
    function r(d) {
      Object.assign(this, d);
    }
    return r.prototype.createResponse = function() {
      return l.returnsVoid ? void 0 : new n();
    }, r.prototype.getTypeName = function() {
      return l.request.name;
    }, r.prototype.getMethod = function() {
      return l.method || "POST";
    }, r;
  }();
  return new i(t);
}
function ma(e, t, l = {}) {
  let n = function() {
    return function(r) {
      Object.assign(this, r);
    };
  }(), i = function() {
    function r(d) {
      Object.assign(this, d);
    }
    return r.prototype.createResponse = function() {
      return typeof l.createResponse == "function" ? l.createResponse() : new n();
    }, r.prototype.getTypeName = function() {
      return e;
    }, r.prototype.getMethod = function() {
      return l.method || "POST";
    }, r;
  }();
  return new i(t);
}
function ul(e, t) {
  return e ? (Object.keys(e).forEach((l) => {
    let n = e[l];
    typeof n == "string" && n.startsWith("/Date") && (e[l] = bl(Ct(n)));
  }), e) : {};
}
function va(e, t) {
  let l = {};
  return Array.from(e.elements).forEach((n) => {
    var h;
    let i = n;
    if (!i.id || i.value == null || i.value === "")
      return;
    const r = i.id.toLowerCase(), d = t && t.find((y) => y.name.toLowerCase() == r);
    let c = d == null ? void 0 : d.type, m = (h = d == null ? void 0 : d.genericArgs) == null ? void 0 : h[0], v = i.type === "checkbox" ? i.checked : i.value;
    ql(c) ? v = Number(v) : c === "List`1" && typeof v == "string" && (v = v.split(",").map((y) => ql(m) ? Number(y) : y)), l[i.id] = v;
  }), l;
}
function dn(e) {
  var t;
  return ((t = e == null ? void 0 : e.api) == null ? void 0 : t.operations) && e.api.operations.length > 0;
}
function ha(e) {
  if (e != null && e.assert && !X.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return X.metadata.value;
}
function Qt(e) {
  return e && dn(e) ? (e.date = ao(new Date()), X.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(Ft, JSON.stringify(e)), !0) : !1;
}
function ga() {
  X.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(Ft);
}
function ds() {
  if (X.metadata.value != null)
    return !0;
  let e = globalThis.Server;
  if (dn(e))
    Qt(e);
  else {
    const t = typeof localStorage < "u" ? localStorage.getItem(Ft) : null;
    if (t)
      try {
        Qt(JSON.parse(t));
      } catch {
        console.error(`Could not JSON.parse ${Ft} from localStorage`);
      }
  }
  return X.metadata.value != null;
}
async function Rn(e, t) {
  let l = t ? await t() : await fetch(e);
  if (l.ok) {
    let n = await l.text();
    Qt(JSON.parse(n));
  } else
    console.error(`Could not download ${t ? "AppMetadata" : e}: ${l.statusText}`);
  dn(X.metadata.value) || console.warn("AppMetadata is not available");
}
async function pa(e) {
  var r;
  const { olderThan: t, resolvePath: l, resolve: n } = e || {};
  let i = ds() && t !== 0;
  if (i && t) {
    let d = Ct((r = X.metadata.value) == null ? void 0 : r.date);
    (!d || new Date().getTime() - d.getTime() > t) && (i = !1);
  }
  if (!i) {
    if ((l || n) && await Rn(l || Ft, n), X.metadata.value != null)
      return;
    const d = Ne("client");
    if (d != null) {
      const c = await d.api(new oa());
      c.succeeded && Qt(c.response);
    }
    if (X.metadata.value != null)
      return;
    await Rn(Ft);
  }
  return X.metadata.value;
}
function rt(e, t) {
  var d;
  let l = (d = X.metadata.value) == null ? void 0 : d.api;
  if (!l || !e)
    return null;
  let n = l.types.find((c) => c.name.toLowerCase() === e.toLowerCase() && (!t || c.namespace == t));
  if (n)
    return n;
  let i = $l(e);
  if (i)
    return i.request;
  let r = l.operations.find((c) => c.response && c.response.name.toLowerCase() === e.toLowerCase() && (!t || c.response.namespace == t));
  return r ? r.response : null;
}
function $l(e) {
  var n;
  let t = (n = X.metadata.value) == null ? void 0 : n.api;
  return t ? t.operations.find((i) => i.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function ya({ dataModel: e }) {
  var n;
  const t = (n = X.metadata.value) == null ? void 0 : n.api;
  if (!t)
    return [];
  let l = t.operations;
  if (e) {
    const i = typeof e == "string" ? rt(e) : e;
    l = l.filter((r) => cs(r.dataModel, i));
  }
  return l;
}
function cn(e) {
  return e ? rt(e.name, e.namespace) : null;
}
function cs(e, t) {
  return e && t && e.name === t.name && (!e.namespace || !t.namespace || e.namespace === t.namespace);
}
function ba(e, t) {
  let l = rt(e);
  return l && l.properties && l.properties.find((i) => i.name.toLowerCase() === t.toLowerCase());
}
function fs(e) {
  return ms(rt(e));
}
function ms(e) {
  if (e && e.isEnum && e.enumNames != null) {
    let t = {};
    for (let l = 0; l < e.enumNames.length; l++) {
      const n = (e.enumDescriptions ? e.enumDescriptions[l] : null) || e.enumNames[l], i = (e.enumValues != null ? e.enumValues[l] : null) || e.enumNames[l];
      t[i] = n;
    }
    return t;
  }
  return null;
}
function vs(e) {
  if (!e)
    return null;
  let t = {}, l = e.input && e.input.allowableEntries;
  if (l) {
    for (let i = 0; i < l.length; i++) {
      let r = l[i];
      t[r.key] = r.value;
    }
    return t;
  }
  let n = e.allowableValues || (e.input ? e.input.allowableValues : null);
  if (n) {
    for (let i = 0; i < n.length; i++) {
      let r = n[i];
      t[r] = r;
    }
    return t;
  }
  if (e.isEnum) {
    const i = e.genericArgs && e.genericArgs.length == 1 ? e.genericArgs[0] : e.type, r = rt(i);
    if (r)
      return ms(r);
  }
  return null;
}
function fn(e) {
  if (!e)
    return;
  const t = [];
  return Object.keys(e).forEach((l) => t.push({ key: l, value: e[l] })), t;
}
function wa(e, t) {
  const n = ((i, r) => Object.assign({
    id: i,
    name: i,
    type: r
  }, t))(e.name, (t == null ? void 0 : t.type) || da(e) || "text");
  return e.isEnum && (n.type = "select", n.allowableEntries = fn(vs(e))), n;
}
function xa(e) {
  let t = [];
  if (e) {
    const l = Ze(e), n = $l(e.name), i = cn(n == null ? void 0 : n.dataModel);
    l.forEach((r) => {
      var c, m, v;
      if (!us(r))
        return;
      const d = wa(r, r.input);
      if (d.id = io(d.id), d.type == "file" && r.uploadTo && !d.accept) {
        const h = (m = (c = X.metadata.value) == null ? void 0 : c.plugins.filesUpload) == null ? void 0 : m.locations.find((y) => y.name == r.uploadTo);
        h && !d.accept && h.allowExtensions && (d.accept = h.allowExtensions.map((y) => y.startsWith(".") ? y : `.${y}`).join(","));
      }
      if (i) {
        const h = (v = i.properties) == null ? void 0 : v.find((y) => y.name == r.name);
        r.ref || (r.ref = h == null ? void 0 : h.ref);
      }
      if (d.options)
        try {
          const h = {
            input: d,
            $typeFields: l.map((g) => g.name),
            $dataModelFields: i ? Ze(i).map((g) => g.name) : [],
            ...X.config.scopeWhitelist
          }, y = en(d.options, h);
          Object.keys(y).forEach((g) => {
            d[g] = y[g];
          });
        } catch {
          console.error(`failed to evaluate '${d.options}'`);
        }
      t.push(d);
    });
  }
  return t;
}
function mn(e, t) {
  var i, r;
  if (!t.type)
    return console.error("enumDescriptions missing {type:'EnumType'} options"), [`${e}`];
  const l = rt(t.type);
  if (!(l != null && l.enumValues))
    return console.error(`Could not find metadata for ${t.type}`), [`${e}`];
  const n = [];
  for (let d = 0; d < l.enumValues.length; d++) {
    const c = parseInt(l.enumValues[d]);
    c > 0 && (c & e) === c && n.push(((i = l.enumDescriptions) == null ? void 0 : i[d]) || ((r = l.enumNames) == null ? void 0 : r[d]) || `${e}`);
  }
  return n;
}
function hs(e) {
  return (t) => typeof t == "number" ? mn(t, { type: e }) : t;
}
function Ze(e) {
  if (!e)
    return [];
  let t = [], l = {};
  function n(i) {
    i.forEach((r) => {
      l[r.name] || (l[r.name] = 1, t.push(r));
    });
  }
  for (; e; )
    e.properties && n(e.properties), e = e.inherits ? cn(e.inherits) : null;
  return t.map((i) => i.type.endsWith("[]") ? { ...i, type: "List`1", genericArgs: [i.type.substring(0, i.type.length - 2)] } : i);
}
function al(e, t) {
  var l;
  return ((l = e.request.implements) == null ? void 0 : l.some((n) => n.name === t)) || !1;
}
function Jt(e) {
  return e ? gs(e, Ze(e)) : null;
}
function gs(e, t) {
  let l = t.find((r) => r.name.toLowerCase() === "id");
  if (l && l.isPrimaryKey)
    return l;
  let i = t.find((r) => r.isPrimaryKey) || l;
  if (!i) {
    let r = je.model(e);
    if (r)
      return Ee(rt(r), (d) => Jt(d));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return i || null;
}
function ka(e, t) {
  return Ee(Jt(e), (l) => fe(t, l.name));
}
function ps(e, t, l) {
  return e && e.valueType === "none" ? "" : l.key === "%In" || l.key === "%Between" ? `(${l.value})` : $a(t, l.value);
}
function $a(e, t) {
  return e ? (e = as(e), ql(e) || e === "Boolean" ? t : fa(e) ? `[${t}]` : `'${t}'`) : t;
}
function et() {
  const e = f(() => {
    var n;
    return ((n = X.metadata.value) == null ? void 0 : n.app) || null;
  }), t = f(() => {
    var n;
    return ((n = X.metadata.value) == null ? void 0 : n.api) || null;
  }), l = f(() => {
    var n;
    return ((n = X.metadata.value) == null ? void 0 : n.plugins.autoQuery.viewerConventions) || [];
  });
  return ds(), {
    loadMetadata: pa,
    getMetadata: ha,
    setMetadata: Qt,
    clearMetadata: ga,
    metadataApp: e,
    metadataApi: t,
    filterDefinitions: l,
    typeOf: rt,
    typeOfRef: cn,
    typeEquals: cs,
    apiOf: $l,
    findApis: ya,
    typeName: ua,
    typeName2: os,
    property: ba,
    enumOptions: fs,
    propertyOptions: vs,
    createFormLayout: xa,
    typeProperties: Ze,
    supportsProp: us,
    Crud: je,
    Apis: Tt,
    getPrimaryKey: Jt,
    getPrimaryKeyByProps: gs,
    getId: ka,
    createDto: qt,
    makeDto: ma,
    toFormValues: ul,
    formValues: va,
    isComplexProp: rs,
    asKvps: fn,
    expandEnumFlags: mn,
    enumFlagsConverter: hs
  };
}
const Xe = class {
  static async getOrFetchValue(t, l, n, i, r, d, c) {
    const m = Xe.getValue(n, c, r);
    return m ?? (await Xe.fetchLookupIds(t, l, n, i, r, d, [c]), Xe.getValue(n, c, r));
  }
  static getValue(t, l, n) {
    const i = Xe.Lookup[t];
    if (i) {
      const r = i[l];
      if (r)
        return n = n.toLowerCase(), r[n];
    }
  }
  static setValue(t, l, n, i) {
    const r = Xe.Lookup[t] ?? (Xe.Lookup[t] = {}), d = r[l] ?? (r[l] = {});
    n = n.toLowerCase(), d[n] = i;
  }
  static setRefValue(t, l) {
    const n = fe(l, t.refId);
    if (n == null || t.refLabel == null)
      return null;
    const i = fe(l, t.refLabel);
    return Xe.setValue(t.model, n, t.refLabel, i), i;
  }
  static async fetchLookupIds(t, l, n, i, r, d, c) {
    const m = l.operations.find((v) => {
      var h;
      return je.isAnyQuery(v) && ((h = v.dataModel) == null ? void 0 : h.name) == n;
    });
    if (m) {
      const v = Xe.Lookup[n] ?? (Xe.Lookup[n] = {}), h = [];
      Object.keys(v).forEach((R) => {
        const Q = v[R];
        fe(Q, r) && h.push(R);
      });
      const y = c.filter((R) => !h.includes(R));
      if (y.length == 0)
        return;
      const g = d ? null : `${i},${r}`, b = {
        [i + "In"]: y.join(",")
      };
      g && (b.fields = g);
      const k = qt(m, b), I = await t.api(k, { jsconfig: "edv,eccn" });
      if (I.succeeded)
        (fe(I.response, "results") || []).forEach((Q) => {
          if (!fe(Q, i)) {
            console.error(`result[${i}] == null`, Q);
            return;
          }
          const D = `${fe(Q, i)}`, O = fe(Q, r);
          r = r.toLowerCase();
          const N = v[D] ?? (v[D] = {});
          N[r] = `${O}`;
        });
      else {
        console.error(`Failed to call ${m.request.name}`);
        return;
      }
    }
  }
};
let bt = Xe;
pe(bt, "Lookup", {});
let Ql = () => new Date().getTime(), Ca = ["/", "T", ":", "-"], ot = {
  //locale: null,
  assumeUtc: !0,
  //number: null,
  date: {
    method: "Intl.DateTimeFormat",
    options: "{dateStyle:'medium'}"
  },
  maxFieldLength: 150,
  maxNestedFields: 2,
  maxNestedFieldLength: 30
}, _a = new Intl.RelativeTimeFormat(ot.locale, {}), Nn = 24 * 60 * 60 * 1e3 * 365, Dl = {
  year: Nn,
  month: Nn / 12,
  day: 24 * 60 * 60 * 1e3,
  hour: 60 * 60 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, yt = {
  currency: ys,
  bytes: bs,
  link: ws,
  linkTel: xs,
  linkMailTo: ks,
  icon: $s,
  iconRounded: Cs,
  attachment: _s,
  hidden: Ls,
  time: Vs,
  relativeTime: hn,
  relativeTimeFromMs: Cl,
  enumFlags: Fa,
  formatDate: jt,
  formatNumber: vn
};
"iconOnError" in globalThis || (globalThis.iconOnError = xl);
class Re {
}
pe(Re, "currency", { method: "currency" }), pe(Re, "bytes", { method: "bytes" }), pe(Re, "link", { method: "link" }), pe(Re, "linkTel", { method: "linkTel" }), pe(Re, "linkMailTo", { method: "linkMailTo" }), pe(Re, "icon", { method: "icon" }), pe(Re, "iconRounded", { method: "iconRounded" }), pe(Re, "attachment", { method: "attachment" }), pe(Re, "time", { method: "time" }), pe(Re, "relativeTime", { method: "relativeTime" }), pe(Re, "relativeTimeFromMs", { method: "relativeTimeFromMs" }), pe(Re, "date", { method: "formatDate" }), pe(Re, "number", { method: "formatNumber" }), pe(Re, "hidden", { method: "hidden" }), pe(Re, "enumFlags", { method: "enumFlags" });
function La(e) {
  ot = Object.assign({}, ot, e);
}
function Va(e) {
  Object.keys(e || {}).forEach((t) => {
    typeof e[t] == "function" && (yt[t] = e[t]);
  });
}
function Ma() {
  return yt;
}
function Xt(e, t) {
  return t ? st("span", e, t) : e;
}
function ys(e, t) {
  const l = it(t, ["currency"]);
  return Xt(new Intl.NumberFormat(void 0, { style: "currency", currency: (t == null ? void 0 : t.currency) || "USD" }).format(e), l);
}
function bs(e, t) {
  return Xt(an(e), t);
}
function ws(e, t) {
  return st("a", e, wl({ ...t, href: e }));
}
function xs(e, t) {
  return st("a", e, wl({ ...t, href: `tel:${e}` }));
}
function ks(e, t) {
  t || (t = {});
  let { subject: l, body: n } = t, i = it(t, ["subject", "body"]), r = {};
  return l && (r.subject = l), n && (r.body = n), st("a", e, wl({ ...i, href: `mailto:${zt(e, r)}` }));
}
function $s(e, t) {
  return st("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: Mt(e), onerror: "iconOnError(this)" }, t));
}
function Cs(e, t) {
  return st("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: Mt(e), onerror: "iconOnError(this)" }, t));
}
function _s(e, t) {
  let l = nn(e), i = Zt(l) == null || on(e) ? Mt(e) : rn(e);
  const r = Mt(i);
  let d = t && (t["icon-class"] || t.iconClass), c = st("img", void 0, Object.assign({ class: "w-6 h-6", src: r, onerror: "iconOnError(this,'att')" }, d ? { class: d } : null)), m = `<span class="pl-1">${l}</span>`;
  return st("a", c + m, Object.assign({ class: "flex", href: Mt(e), title: e }, t ? it(t, ["icon-class", "iconClass"]) : null));
}
function Ls(e) {
  return "";
}
function Vs(e, t) {
  let l = typeof e == "string" ? new Date(qn(e) * 1e3) : yl(e) ? Ct(e) : null;
  return Xt(l ? uo(l) : e, t);
}
function jt(e, t) {
  if (e == null)
    return "";
  let l = typeof e == "number" ? new Date(e) : typeof e == "string" ? Ct(e) : e;
  if (!yl(l))
    return console.warn(`${l} is not a Date value`), e == null ? "" : `${e}`;
  let n = ot.date ? _l(ot.date) : null;
  return Xt(typeof n == "function" ? n(l) : Un(l), t);
}
function vn(e, t) {
  if (typeof e != "number")
    return e;
  let l = ot.number ? _l(ot.number) : null, n = typeof l == "function" ? l(e) : `${e}`;
  return n === "" && (console.warn(`formatNumber(${e}) => ${n}`, l), n = `${e}`), Xt(n, t);
}
function Ms(e, t, l) {
  let n = co(e), i = t ? _l(t) : null;
  if (typeof i == "function") {
    let d = l;
    if (t != null && t.options)
      try {
        d = en(t.options, l);
      } catch (c) {
        console.error(`Could not evaluate '${t.options}'`, c, ", with scope:", l);
      }
    return i(e, d);
  }
  let r = n != null ? yl(n) ? jt(n, l) : typeof n == "number" ? vn(n, l) : n : null;
  return r ?? "";
}
function Kt(e, t, l) {
  return $t(e) ? Ms(e, t, l) : Da(e, t, l);
}
function Sa(e) {
  if (e == null)
    return NaN;
  if (typeof e == "number")
    return e;
  if (yl(e))
    return e.getTime() - Ql();
  if (typeof e == "string") {
    let t = Number(e);
    if (!isNaN(t))
      return t;
    if (e[0] === "P" || e.startsWith("-P"))
      return qn(e) * 1e3 * -1;
    if (fo(e, Ca) >= 0)
      return Ct(e).getTime() - Ql();
  }
  return NaN;
}
function Cl(e, t) {
  for (let l in Dl)
    if (Math.abs(e) > Dl[l] || l === "second")
      return (t || _a).format(Math.round(e / Dl[l]), l);
}
function hn(e, t) {
  let l = Sa(e);
  return isNaN(l) ? "" : Cl(l, t);
}
function Aa(e, t) {
  return Cl(e.getTime() - (t ? t.getTime() : Ql()));
}
function Fa(e, t) {
  return mn(e, t).join(", ");
}
function _l(e) {
  if (!e)
    return null;
  let { method: t, options: l } = e, n = `${t}(${l})`, i = yt[n] || yt[t];
  if (typeof i == "function")
    return i;
  let r = e.locale || ot.locale;
  if (t.startsWith("Intl.")) {
    let d = r ? `'${r}'` : "undefined", c = `return new ${t}(${d},${l || "undefined"})`;
    try {
      let m = Function(c)();
      return i = t === "Intl.DateTimeFormat" ? (v) => m.format(Ct(v)) : t === "Intl.NumberFormat" ? (v) => m.format(Number(v)) : t === "Intl.RelativeTimeFormat" ? (v) => hn(v, m) : (v) => m.format(v), yt[n] = i;
    } catch (m) {
      console.error(`Invalid format: ${c}`, m);
    }
  } else {
    let d = globalThis[t];
    if (typeof d == "function") {
      let c = l != null ? Function("return " + l)() : void 0;
      return i = (m) => d(m, c, r), yt[n] = i;
    }
    console.error(`No '${t}' function exists`, Object.keys(yt));
  }
  return null;
}
function Ss(e, t) {
  return e ? e.length > t ? e.substring(0, t) + "..." : e : "";
}
function As(e) {
  return e.substring(0, 6) === "/Date(" ? jt(Ct(e)) : e;
}
function Ta(e) {
  return gn(It(e)).replace(/"/g, "");
}
function Fs(e) {
  if (e == null || e === "")
    return "";
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      console.warn("couldn't parse as JSON", e);
    }
  return e;
}
function gn(e, t = 4) {
  return e = Fs(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, t);
}
function Ia(e) {
  return e = Fs(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = It(e), gn(e));
}
function It(e) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return As(e);
  if ($t(e))
    return e;
  if (e instanceof Date)
    return jt(e);
  if (Array.isArray(e))
    return e.map(It);
  if (typeof e == "object") {
    let t = {};
    return Object.keys(e).forEach((l) => {
      l != "__type" && (t[l] = It(e[l]));
    }), t;
  }
  return e;
}
function Da(e, t, l) {
  let n = e;
  if (Array.isArray(e)) {
    if ($t(e[0]))
      return n.join(",");
    e[0] != null && (n = e[0]);
  }
  if (n == null)
    return "";
  if (n instanceof Date)
    return jt(n, l);
  let i = Object.keys(n), r = [];
  for (let d = 0; d < Math.min(ot.maxNestedFields, i.length); d++) {
    let c = i[d], m = `${It(n[c])}`;
    r.push(`<b class="font-medium">${c}</b>: ${Ol(Ss(As(m), ot.maxNestedFieldLength))}`);
  }
  return i.length > 2 && r.push("..."), st("span", "{ " + r.join(", ") + " }", Object.assign({ title: Ol(Ta(e)) }, l));
}
function W1() {
  return {
    Formats: Re,
    setDefaultFormats: La,
    setFormatters: Va,
    formatValue: Kt,
    formatter: _l,
    dateInputFormat: bl,
    currency: ys,
    bytes: bs,
    link: ws,
    linkTel: xs,
    linkMailTo: ks,
    icon: $s,
    iconRounded: Cs,
    attachment: _s,
    hidden: Ls,
    time: Vs,
    relativeTime: hn,
    relativeTimeFromDate: Aa,
    relativeTimeFromMs: Cl,
    formatDate: jt,
    formatNumber: vn,
    indentJson: gn,
    prettyJson: Ia,
    scrub: It,
    truncate: Ss,
    apiValueFmt: Ms,
    iconOnError: xl
  };
}
const Pa = ["onClick", "title"], ja = /* @__PURE__ */ se({
  __name: "RouterLink",
  props: {
    to: null
  },
  setup(e) {
    const t = e, { config: l } = _t(), n = () => l.value.navigate(t.to ?? "/");
    return (i, r) => (a(), u("a", _e({
      onClick: He(n, ["prevent"]),
      title: e.to,
      href: "javascript:void(0)"
    }, i.$attrs), [
      G(i.$slots, "default")
    ], 16, Pa));
  }
}), Ht = class {
  static component(t) {
    const l = Ht.components[t];
    if (l)
      return l;
    const n = jn(t), i = Object.keys(Ht.components).find((r) => jn(r) === n);
    return i && Ht.components[i] || null;
  }
};
let X = Ht;
pe(X, "config", {
  redirectSignIn: "/signin",
  redirectSignOut: "/auth/logout",
  navigate: (t) => location.href = t,
  assetsPathResolver: (t) => t,
  fallbackPathResolver: (t) => t,
  storage: new Zn(),
  tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" },
  scopeWhitelist: {
    enumFlagsConverter: hs,
    ...Ma()
  }
}), pe(X, "autoQueryGridDefaults", {
  deny: [],
  hide: [],
  toolbarButtonClass: void 0,
  tableStyle: "stripedRows",
  take: 25,
  maxFieldLength: 150
}), pe(X, "events", mo()), pe(X, "user", S(null)), pe(X, "metadata", S(null)), pe(X, "components", {
  RouterLink: ja
});
function Oa(e) {
  X.config = Object.assign(X.config, e);
}
function Ba(e) {
  X.autoQueryGridDefaults = Object.assign(X.autoQueryGridDefaults, e);
}
function pn(e) {
  return e && X.config.assetsPathResolver ? X.config.assetsPathResolver(e) : e;
}
function Ea(e) {
  return e && X.config.fallbackPathResolver ? X.config.fallbackPathResolver(e) : e;
}
function _t() {
  const e = f(() => X.config), t = f(() => X.autoQueryGridDefaults), l = X.events;
  return {
    config: e,
    setConfig: Oa,
    events: l,
    autoQueryGridDefaults: t,
    setAutoQueryGridDefaults: Ba,
    assetsPathResolver: pn,
    fallbackPathResolver: Ea
  };
}
const Ts = se({
  inheritAttrs: !1,
  props: {
    image: Object,
    svg: String,
    src: String,
    alt: String,
    type: String
  },
  setup(e, { attrs: t }) {
    return () => {
      let l = e.image;
      if (e.type) {
        const { typeOf: r } = et(), d = r(e.type);
        d || console.warn(`Type ${e.type} does not exist`), d != null && d.icon ? l = d == null ? void 0 : d.icon : console.warn(`Type ${e.type} does not have a [Svg] icon`);
      }
      let n = e.svg || (l == null ? void 0 : l.svg) || "";
      if (n.startsWith("<svg ")) {
        let d = pl(n, ">").indexOf("class="), c = `${(l == null ? void 0 : l.cls) || ""} ${t.class || ""}`;
        if (d == -1)
          n = `<svg class="${c}" ${n.substring(4)}`;
        else {
          const m = d + 6 + 1;
          n = `${n.substring(0, m) + c} ${n.substring(m)}`;
        }
        return gt("span", { innerHTML: n });
      } else
        return gt("img", {
          class: [l == null ? void 0 : l.cls, t.class],
          src: pn(e.src || (l == null ? void 0 : l.uri)),
          onError: (r) => xl(r.target)
        });
    };
  }
}), Ra = { class: "text-2xl font-semibold text-gray-900 dark:text-gray-300" }, Na = { class: "flex" }, Ha = /* @__PURE__ */ s("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), za = /* @__PURE__ */ s("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), Ua = [
  Ha,
  za
], qa = /* @__PURE__ */ se({
  __name: "Loading",
  props: {
    imageClass: { default: "w-6 h-6" }
  },
  setup(e) {
    return (t, l) => (a(), u("div", Ra, [
      s("div", Na, [
        (a(), u("svg", {
          class: x(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", e.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, Ua, 2)),
        s("span", null, [
          G(t.$slots, "default")
        ])
      ])
    ]));
  }
}), Qa = ["href", "onClick"], Ka = ["type"], Ga = /* @__PURE__ */ se({
  __name: "OutlineButton",
  props: {
    type: { default: "submit" },
    href: null
  },
  setup(e) {
    const t = "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black";
    return (l, n) => {
      const i = q("router-link");
      return e.href ? (a(), Y(i, {
        key: 0,
        to: e.href
      }, {
        default: he(({ navigate: r }) => [
          s("button", {
            class: x(t),
            href: e.href,
            onClick: r
          }, [
            G(l.$slots, "default")
          ], 8, Qa)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", _e({
        key: 1,
        type: e.type,
        class: t
      }, l.$attrs), [
        G(l.$slots, "default")
      ], 16, Ka));
    };
  }
}), Wa = ["href", "onClick"], Za = ["type"], Ja = /* @__PURE__ */ se({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    href: null,
    color: { default: "indigo" }
  },
  setup(e) {
    const t = e, l = {
      blue: "text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:hover:bg-blue-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      purple: "text-white bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:hover:bg-purple-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      red: "focus:ring-red-500 text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:hover:bg-red-400 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500",
      green: "focus:ring-green-300 text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:hover:bg-green-400 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500",
      sky: "focus:ring-sky-300 text-white bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:hover:bg-sky-400 focus:ring-sky-500 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-500",
      cyan: "focus:ring-cyan-300 text-white bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 disabled:hover:bg-cyan-400 focus:ring-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-500",
      indigo: "focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    }, n = f(() => "inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black " + (l[t.color] || l.indigo));
    return (i, r) => {
      const d = q("router-link");
      return e.href ? (a(), Y(d, {
        key: 0,
        to: e.href
      }, {
        default: he(({ navigate: c }) => [
          s("button", {
            class: x(o(n)),
            href: e.href,
            onClick: c
          }, [
            G(i.$slots, "default")
          ], 10, Wa)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", _e({
        key: 1,
        type: e.type,
        class: o(n)
      }, i.$attrs), [
        G(i.$slots, "default")
      ], 16, Za));
    };
  }
}), Xa = ["type", "href", "onClick"], Ya = ["type"], ei = /* @__PURE__ */ se({
  __name: "SecondaryButton",
  props: {
    type: null,
    href: null
  },
  setup(e) {
    const t = "inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black";
    return (l, n) => {
      const i = q("router-link");
      return e.href ? (a(), Y(i, {
        key: 0,
        to: e.href
      }, {
        default: he(({ navigate: r }) => [
          s("button", {
            type: e.type ?? "button",
            class: x(t),
            href: e.href,
            onClick: r
          }, [
            G(l.$slots, "default")
          ], 8, Xa)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", _e({
        key: 1,
        type: e.type ?? "button",
        class: t
      }, l.$attrs), [
        G(l.$slots, "default")
      ], 16, Ya));
    };
  }
});
function Qe(e, t) {
  return Array.isArray(e) ? e.indexOf(t) >= 0 : e == t || e.includes(t);
}
const vl = {
  blue: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",
  purple: "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200",
  red: "text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200",
  green: "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",
  sky: "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
  cyan: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200",
  indigo: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
}, ft = {
  base: "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
  invalid: "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
  valid: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"
}, wt = {
  panelClass: "shadow sm:rounded-md",
  formClass: "space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",
  headingClass: "text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, Rt = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, Kl = {
  modalClass: "relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8",
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, Ge = {
  panelClass(e = "slideOver") {
    return e == "card" ? wt.panelClass : Rt.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? wt.formClass : Rt.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? wt.headingClass : Rt.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? wt.subHeadingClass : Rt.subHeadingClass;
  },
  buttonsClass: "mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between",
  legendClass: "text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4"
}, ue = {
  getGridClass(e = "stripedRows") {
    return ue.gridClass;
  },
  getGrid2Class(e = "stripedRows") {
    return Qe(e, "fullWidth") ? "overflow-x-auto" : ue.grid2Class;
  },
  getGrid3Class(e = "stripedRows") {
    return Qe(e, "fullWidth") ? "inline-block min-w-full py-2 align-middle" : ue.grid3Class;
  },
  getGrid4Class(e = "stripedRows") {
    return Qe(e, "whiteBackground") ? "" : Qe(e, "fullWidth") ? "overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5" : ue.grid4Class;
  },
  getTableClass(e = "stripedRows") {
    return Qe(e, "fullWidth") || Qe(e, "verticalLines") ? "min-w-full divide-y divide-gray-300" : ue.tableClass;
  },
  getTheadClass(e = "stripedRows") {
    return Qe(e, "whiteBackground") ? "" : ue.theadClass;
  },
  getTheadRowClass(e = "stripedRows") {
    return ue.theadRowClass + (Qe(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  getTheadCellClass(e = "stripedRows") {
    return ue.theadCellClass + (Qe(e, "uppercaseHeadings") ? " uppercase" : "");
  },
  getTbodyClass(e = "stripedRows") {
    return (Qe(e, "whiteBackground") || Qe(e, "verticalLines") ? "divide-y divide-gray-200 dark:divide-gray-800" : ue.tableClass) + (Qe(e, "verticalLines") ? " bg-white" : "");
  },
  getTableRowClass(e = "stripedRows", t, l, n) {
    return (n ? "cursor-pointer " : "") + (l ? "bg-indigo-100 dark:bg-blue-800" : (n ? "hover:bg-yellow-50 dark:hover:bg-blue-900 " : "") + (Qe(e, "stripedRows") ? t % 2 == 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-black")) + (Qe(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  gridClass: "flex flex-col",
  //original -margins + padding forces scroll bars when parent is w-full for no clear benefits?
  //original: -my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8
  grid2Class: "",
  //original: inline-block min-w-full py-2 align-middle md:px-6 lg:px-8
  grid3Class: "inline-block min-w-full py-2 align-middle",
  grid4Class: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
  tableClass: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
  theadClass: "bg-gray-50 dark:bg-gray-900",
  tableCellClass: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
  theadRowClass: "select-none",
  theadCellClass: "px-6 py-4 text-left text-sm font-medium tracking-wider whitespace-nowrap",
  toolbarButtonClass: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
}, ti = {
  colspans: "col-span-3 sm:col-span-3"
}, Z1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a: vl,
  card: wt,
  dummy: ti,
  form: Ge,
  grid: ue,
  input: ft,
  modal: Kl,
  slideOver: Rt
}, Symbol.toStringTag, { value: "Module" })), li = /* @__PURE__ */ se({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const t = e, l = Zs(), n = f(() => (vl[t.color] || vl.blue) + (l.href ? "" : " cursor-pointer"));
    return (i, r) => (a(), u("a", {
      class: x(o(n))
    }, [
      G(i.$slots, "default")
    ], 2));
  }
}), ni = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, si = {
  role: "list",
  class: "flex items-center space-x-4"
}, oi = ["href", "title"], ai = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6 flex-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
    "clip-rule": "evenodd"
  })
], -1), ii = { class: "sr-only" }, ri = /* @__PURE__ */ se({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (t, l) => (a(), u("nav", ni, [
      s("ol", si, [
        s("li", null, [
          s("div", null, [
            s("a", {
              href: e.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: e.homeLabel
            }, [
              ai,
              s("span", ii, M(e.homeLabel), 1)
            ], 8, oi)
          ])
        ]),
        G(t.$slots, "default")
      ])
    ]));
  }
}), ui = { class: "flex items-center" }, di = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
    "clip-rule": "evenodd"
  })
], -1), ci = ["href", "title"], fi = ["title"], mi = /* @__PURE__ */ se({
  __name: "Breadcrumb",
  props: {
    href: null,
    title: null
  },
  setup(e) {
    return (t, l) => (a(), u("li", null, [
      s("div", ui, [
        di,
        e.href ? (a(), u("a", {
          key: 0,
          href: e.href,
          class: "ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
          title: e.title
        }, [
          G(t.$slots, "default")
        ], 8, ci)) : (a(), u("span", {
          key: 1,
          class: "ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",
          title: e.title
        }, [
          G(t.$slots, "default")
        ], 8, fi))
      ])
    ]));
  }
}), vi = {
  key: 0,
  class: "text-base font-semibold text-gray-500 dark:text-gray-400"
}, hi = {
  role: "list",
  class: "mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"
}, gi = /* @__PURE__ */ se({
  __name: "NavList",
  props: {
    title: null
  },
  setup(e) {
    return (t, l) => (a(), u("div", null, [
      e.title ? (a(), u("h2", vi, M(e.title), 1)) : $("", !0),
      s("ul", hi, [
        G(t.$slots, "default")
      ])
    ]));
  }
}), pi = { class: "relative flex items-start space-x-4 py-6" }, yi = { class: "flex-shrink-0" }, bi = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, wi = { class: "min-w-0 flex-1" }, xi = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, ki = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, $i = ["href"], Ci = /* @__PURE__ */ s("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), _i = { class: "text-base text-gray-500" }, Li = /* @__PURE__ */ s("div", { class: "flex-shrink-0 self-center" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Vi = /* @__PURE__ */ se({
  __name: "NavListItem",
  props: {
    title: null,
    href: null,
    icon: null,
    iconSvg: null,
    iconSrc: null,
    iconAlt: null
  },
  setup(e) {
    return (t, l) => {
      const n = q("Icon");
      return a(), u("li", pi, [
        s("div", yi, [
          s("span", bi, [
            ge(n, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: e.icon,
              src: e.iconSrc,
              svg: e.iconSvg,
              alt: e.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        s("div", wi, [
          s("h3", xi, [
            s("span", ki, [
              s("a", {
                href: e.href,
                class: "focus:outline-none"
              }, [
                Ci,
                ye(" " + M(e.title), 1)
              ], 8, $i)
            ])
          ]),
          s("p", _i, [
            G(t.$slots, "default")
          ])
        ]),
        Li
      ]);
    };
  }
});
function Mi(e) {
  X.user.value = e, X.events.publish("signIn", e);
}
function Si() {
  X.user.value = null, X.events.publish("signOut", null);
}
function Is(e) {
  var t;
  return (((t = X.user.value) == null ? void 0 : t.roles) || []).indexOf(e) >= 0;
}
function Ai(e) {
  var t;
  return (((t = X.user.value) == null ? void 0 : t.permissions) || []).indexOf(e) >= 0;
}
function yn() {
  return Is("Admin");
}
function dl(e) {
  if (!e)
    return !1;
  if (!e.requiresAuth)
    return !0;
  const t = X.user.value;
  if (!t)
    return !1;
  if (yn())
    return !0;
  let [l, n] = [t.roles || [], t.permissions || []], [i, r, d, c] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!i.every((m) => l.indexOf(m) >= 0) || d.length > 0 && !d.some((m) => l.indexOf(m) >= 0) || !r.every((m) => n.indexOf(m) >= 0) || c.length > 0 && !c.every((m) => n.indexOf(m) >= 0));
}
function Fi(e) {
  if (!e || !e.requiresAuth)
    return null;
  const t = X.user.value;
  if (!t)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (yn())
    return null;
  let [l, n] = [t.roles || [], t.permissions || []], [i, r, d, c] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], m = i.filter((h) => l.indexOf(h) < 0);
  if (m.length > 0)
    return `Requires ${m.map((h) => "<b>" + h + "</b>").join(", ")} Role` + (m.length > 1 ? "s" : "");
  let v = r.filter((h) => n.indexOf(h) < 0);
  return v.length > 0 ? `Requires ${v.map((h) => "<b>" + h + "</b>").join(", ")} Permission` + (v.length > 1 ? "s" : "") : d.length > 0 && !d.some((h) => l.indexOf(h) >= 0) ? `Requires any ${d.filter((h) => l.indexOf(h) < 0).map((h) => "<b>" + h + "</b>").join(", ")} Role` + (m.length > 1 ? "s" : "") : c.length > 0 && !c.every((h) => n.indexOf(h) >= 0) ? `Requires any ${c.filter((h) => n.indexOf(h) < 0).map((h) => "<b>" + h + "</b>").join(", ")} Permission` + (v.length > 1 ? "s" : "") : null;
}
function bn() {
  const e = f(() => X.user.value || null), t = f(() => X.user.value != null);
  return { signIn: Mi, signOut: Si, user: e, isAuthenticated: t, hasRole: Is, hasPermission: Ai, isAdmin: yn, canAccess: dl, invalidAccessMessage: Fi };
}
const Ti = { key: 0 }, Ii = { class: "md:p-4" }, Ds = /* @__PURE__ */ se({
  __name: "EnsureAccess",
  props: {
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: t } = bn(), { config: l } = _t(), n = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = zt(l.value.redirectSignIn, { redirect: r });
      l.value.navigate(d);
    }, i = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = zt(l.value.redirectSignOut, { ReturnUrl: r });
      l.value.navigate(d);
    };
    return (r, d) => {
      const c = q("Alert"), m = q("SecondaryButton");
      return e.invalidAccess ? (a(), u("div", Ti, [
        ge(c, {
          class: x(e.alertClass),
          innerHTML: e.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        s("div", Ii, [
          o(t) ? (a(), Y(m, {
            key: 1,
            onClick: i
          }, {
            default: he(() => [
              ye("Sign Out")
            ]),
            _: 1
          })) : (a(), Y(m, {
            key: 0,
            onClick: n
          }, {
            default: he(() => [
              ye("Sign In")
            ]),
            _: 1
          }))
        ])
      ])) : $("", !0);
    };
  }
}), Di = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, Pi = { class: "p-4" }, ji = /* @__PURE__ */ s("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1), Oi = { class: "flex w-full justify-center" }, Bi = /* @__PURE__ */ s("svg", {
  class: "w-6 h-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ s("g", { fill: "currentColor" }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
    }),
    /* @__PURE__ */ s("path", { d: "M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" })
  ])
], -1), Ei = /* @__PURE__ */ s("span", null, "ASC", -1), Ri = [
  Bi,
  Ei
], Ni = /* @__PURE__ */ gl('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2), Hi = [
  Ni
], zi = /* @__PURE__ */ s("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1), Ui = { key: 0 }, qi = ["id", "value"], Qi = ["for"], Ki = { key: 1 }, Gi = { class: "mb-2" }, Wi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, Zi = ["onClick"], Ji = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Xi = [
  Ji
], Yi = { class: "flex" }, er = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    "clip-rule": "evenodd"
  })
], -1), tr = [
  er
], lr = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, wn = /* @__PURE__ */ se({
  __name: "FilterColumn",
  props: {
    definitions: null,
    column: null,
    topLeft: null
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, n = S(), i = S(""), r = S(""), d = S([]), c = f(() => l.column.meta.isEnum == !0), m = f(() => l.column.meta.isEnum == !0 ? fn(fs(l.column.type)) : []), v = f(() => {
      var V;
      return ((V = g(l.column.type)) == null ? void 0 : V.map((A) => ({ key: A.value, value: A.name }))) || [];
    }), h = S({ filters: [] }), y = f(() => h.value.filters);
    jl(() => h.value = Object.assign({}, l.column.settings, {
      filters: Array.from(l.column.settings.filters)
    })), jl(() => {
      var V, A, j;
      return d.value = ((j = (A = (V = l.column.settings.filters) == null ? void 0 : V[0]) == null ? void 0 : A.value) == null ? void 0 : j.split(",")) || [];
    });
    function g(V) {
      let A = l.definitions;
      return is(V) || (A = A.filter((j) => j.types !== "string")), A;
    }
    function b(V, A) {
      return g(V).find((j) => j.value === A);
    }
    function k() {
      var A;
      if (!i.value)
        return;
      let V = (A = b(l.column.type, i.value)) == null ? void 0 : A.name;
      V && (h.value.filters.push({ key: i.value, name: V, value: r.value }), i.value = r.value = "");
    }
    function I(V) {
      h.value.filters.splice(V, 1);
    }
    function R(V) {
      return ps(b(l.column.type, V.key), l.column.type, V);
    }
    function Q() {
      t("done");
    }
    function D() {
      var V;
      i.value = "%", (V = n.value) == null || V.focus();
    }
    function O() {
      if (r.value && k(), c.value) {
        let V = Object.values(d.value).filter((A) => A);
        h.value.filters = V.length > 0 ? [{ key: "%In", name: "In", value: V.join(",") }] : [];
      }
      t("save", h.value), t("done");
    }
    function N(V) {
      h.value.sort = V === h.value.sort ? void 0 : V, hl(O);
    }
    return (V, A) => {
      var K;
      const j = q("SelectInput"), J = q("TextInput"), C = q("PrimaryButton"), z = q("SecondaryButton");
      return a(), u("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: Q,
        onVnodeMounted: D
      }, [
        s("div", {
          class: "absolute",
          style: Gl(`top:${e.topLeft.y}px;left:${e.topLeft.x}px`),
          onClick: A[5] || (A[5] = He(() => {
          }, ["stop"]))
        }, [
          s("div", Di, [
            s("div", Pi, [
              ji,
              s("div", Oi, [
                s("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: A[0] || (A[0] = (U) => N("ASC")),
                  class: x(`${h.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, Ri, 2),
                s("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: A[1] || (A[1] = (U) => N("DESC")),
                  class: x(`${h.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, Hi, 2)
              ]),
              zi,
              o(c) ? (a(), u("div", Ui, [
                (a(!0), u(ke, null, Me(o(m), (U) => (a(), u("div", {
                  key: U.key,
                  class: "flex items-center"
                }, [
                  xt(s("input", {
                    type: "checkbox",
                    id: U.key,
                    value: U.key,
                    "onUpdate:modelValue": A[2] || (A[2] = (ee) => d.value = ee),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, qi), [
                    [Wl, d.value]
                  ]),
                  s("label", {
                    for: U.key,
                    class: "ml-3"
                  }, M(U.value), 9, Qi)
                ]))), 128))
              ])) : (a(), u("div", Ki, [
                (a(!0), u(ke, null, Me(o(y), (U, ee) => (a(), u("div", Gi, [
                  s("span", Wi, [
                    ye(M(e.column.name) + " " + M(U.name) + " " + M(R(U)) + " ", 1),
                    s("button", {
                      type: "button",
                      onClick: (_) => I(ee),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, Xi, 8, Zi)
                  ])
                ]))), 256)),
                s("div", Yi, [
                  ge(j, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: i.value,
                    "onUpdate:modelValue": A[3] || (A[3] = (U) => i.value = U),
                    entries: o(v),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "entries"]),
                  ((K = b(e.column.type, i.value)) == null ? void 0 : K.valueType) !== "none" ? (a(), Y(J, {
                    key: 0,
                    ref_key: "txtFilter",
                    ref: n,
                    id: "filterValue",
                    class: "w-32 mr-1",
                    type: "text",
                    modelValue: r.value,
                    "onUpdate:modelValue": A[4] || (A[4] = (U) => r.value = U),
                    onKeyup: Js(k, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "onKeyup"])) : $("", !0),
                  s("div", { class: "pt-1" }, [
                    s("button", {
                      type: "button",
                      onClick: k,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, tr)
                  ])
                ])
              ]))
            ]),
            s("div", lr, [
              ge(C, {
                onClick: O,
                color: "red",
                class: "ml-2"
              }, {
                default: he(() => [
                  ye(" Save ")
                ]),
                _: 1
              }),
              ge(z, { onClick: Q }, {
                default: he(() => [
                  ye(" Cancel ")
                ]),
                _: 1
              })
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), nr = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, sr = { class: "flex flex-wrap" }, or = { class: "group pr-4 sm:pr-6 lg:pr-8" }, ar = { class: "flex justify-between w-full font-medium" }, ir = { class: "w-6 flex justify-end" }, rr = { class: "hidden group-hover:inline" }, ur = ["onClick", "title"], dr = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), cr = [
  dr
], fr = {
  key: 0,
  class: "pt-2"
}, mr = { class: "ml-2" }, vr = { key: 1 }, hr = { class: "pt-2" }, gr = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, pr = ["onClick"], yr = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), br = [
  yr
], wr = /* @__PURE__ */ s("span", null, "Clear All", -1), xr = [
  wr
], xn = /* @__PURE__ */ se({
  __name: "FilterViews",
  props: {
    definitions: null,
    columns: null
  },
  emits: ["done", "change"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.columns.filter((y) => y.settings.filters.length > 0));
    function i(y) {
      var g, b;
      return (b = (g = y == null ? void 0 : y[0]) == null ? void 0 : g.value) == null ? void 0 : b.split(",");
    }
    function r(y) {
      let g = l.definitions;
      return is(y) || (g = g.filter((b) => b.types !== "string")), g;
    }
    function d(y, g) {
      return r(y).find((b) => b.value === g);
    }
    function c(y, g) {
      return ps(d(y.type, g.value), y.type, g);
    }
    function m(y) {
      y.settings.filters = [], t("change", y);
    }
    function v(y, g) {
      y.settings.filters.splice(g, 1), t("change", y);
    }
    function h() {
      l.columns.forEach((y) => {
        y.settings.filters = [], t("change", y);
      }), t("done");
    }
    return (y, g) => (a(), u("div", nr, [
      s("div", sr, [
        (a(!0), u(ke, null, Me(o(n), (b) => (a(), u("fieldset", or, [
          s("legend", ar, [
            s("span", null, M(o(Oe)(b.name)), 1),
            s("span", ir, [
              s("span", rr, [
                s("button", {
                  onClick: (k) => m(b),
                  title: `Clear all ${o(Oe)(b.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, cr, 8, ur)
              ])
            ])
          ]),
          b.meta.isEnum ? (a(), u("div", fr, [
            (a(!0), u(ke, null, Me(i(b.settings.filters), (k) => (a(), u("div", {
              key: k,
              class: "flex items-center"
            }, [
              s("label", mr, M(k), 1)
            ]))), 128))
          ])) : (a(), u("div", vr, [
            (a(!0), u(ke, null, Me(b.settings.filters, (k, I) => (a(), u("div", hr, [
              s("span", gr, [
                ye(M(b.name) + " " + M(k.name) + " " + M(c(b, k)) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (R) => v(b, I),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, br, 8, pr)
              ])
            ]))), 256))
          ]))
        ]))), 256))
      ]),
      s("div", { class: "flex justify-center pt-4" }, [
        s("button", {
          type: "button",
          onClick: h,
          class: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, xr)
      ])
    ]));
  }
}), kr = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, $r = { class: "" }, Cr = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, _r = /* @__PURE__ */ s("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1), Lr = { class: "mt-4" }, Vr = ["for"], Mr = ["id"], Sr = ["value", "selected"], Ar = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, Fr = ["id", "checked"], Tr = ["for"], Ir = { class: "mt-4" }, Dr = { class: "pb-2 px-4" }, Pr = { class: "" }, jr = ["id", "value"], Or = ["for"], Br = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, kn = /* @__PURE__ */ se({
  __name: "QueryPrefs",
  props: {
    id: { default: "QueryPrefs" },
    columns: null,
    prefs: null,
    maxLimit: null
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, { autoQueryGridDefaults: n } = _t(), i = S({});
    jl(() => i.value = Object.assign({
      take: n.value.take,
      selectedColumns: []
    }, l.prefs));
    const r = [10, 25, 50, 100, 250, 500, 1e3];
    function d() {
      t("done");
    }
    function c() {
      t("save", i.value);
    }
    return (m, v) => {
      const h = q("PrimaryButton"), y = q("SecondaryButton"), g = q("ModalDialog");
      return a(), Y(g, {
        id: e.id,
        onDone: d,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: he(() => [
          s("div", kr, [
            s("div", $r, [
              s("div", Cr, [
                _r,
                s("div", Lr, [
                  s("label", {
                    for: `${e.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, Vr),
                  xt(s("select", {
                    id: `${e.id}-take`,
                    "onUpdate:modelValue": v[0] || (v[0] = (b) => i.value.take = b),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (a(!0), u(ke, null, Me(r.filter((b) => l.maxLimit == null || b <= l.maxLimit), (b) => (a(), u("option", {
                      value: b,
                      selected: b === i.value.take
                    }, M(b), 9, Sr))), 256))
                  ], 8, Mr), [
                    [Xs, i.value.take]
                  ])
                ]),
                s("div", Ar, [
                  s("input", {
                    type: "radio",
                    id: `${e.id}-allColumns`,
                    onClick: v[1] || (v[1] = (b) => i.value.selectedColumns = []),
                    checked: i.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, Fr),
                  s("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${e.id}-allColumns`
                  }, "View all columns", 8, Tr)
                ]),
                s("div", Ir, [
                  s("div", Dr, [
                    s("div", Pr, [
                      (a(!0), u(ke, null, Me(e.columns, (b) => (a(), u("div", {
                        key: b.name,
                        class: "flex items-center"
                      }, [
                        xt(s("input", {
                          type: "checkbox",
                          id: b.name,
                          value: b.name,
                          "onUpdate:modelValue": v[2] || (v[2] = (k) => i.value.selectedColumns = k),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, jr), [
                          [Wl, i.value.selectedColumns]
                        ]),
                        s("label", {
                          for: b.name,
                          class: "ml-3"
                        }, M(b.name), 9, Or)
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          s("div", Br, [
            ge(h, {
              onClick: c,
              color: "red",
              class: "ml-2"
            }, {
              default: he(() => [
                ye(" Save ")
              ]),
              _: 1
            }),
            ge(y, { onClick: d }, {
              default: he(() => [
                ye(" Cancel ")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["id"]);
    };
  }
}), Er = { key: 0 }, Rr = { key: 1 }, Nr = {
  key: 2,
  class: "pt-1"
}, Hr = { key: 0 }, zr = { key: 1 }, Ur = { key: 3 }, qr = { class: "pl-1 pt-1 flex flex-wrap" }, Qr = { class: "flex mt-1" }, Kr = ["title"], Gr = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ s("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), Wr = [
  Gr
], Zr = ["disabled"], Jr = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), Xr = [
  Jr
], Yr = ["disabled"], eu = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), tu = [
  eu
], lu = ["disabled"], nu = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), su = [
  nu
], ou = ["disabled"], au = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), iu = [
  au
], ru = {
  key: 0,
  class: "flex mt-1"
}, uu = { class: "px-4 text-lg text-black dark:text-white" }, du = { key: 0 }, cu = { key: 1 }, fu = /* @__PURE__ */ s("span", { class: "hidden xl:inline" }, " Showing Results ", -1), mu = { key: 2 }, vu = { class: "flex flex-wrap" }, hu = {
  key: 0,
  class: "pl-2 mt-1"
}, gu = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M20 20v-5h-5M4 4v5h5m10.938 2A8.001 8.001 0 0 0 5.07 8m-1.008 5a8.001 8.001  0 0 0 14.868 3"
  })
], -1), pu = [
  gu
], yu = {
  key: 1,
  class: "pl-2 mt-1"
}, bu = /* @__PURE__ */ gl('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>', 2), wu = [
  bu
], xu = {
  key: 2,
  class: "pl-2 mt-1"
}, ku = {
  key: 0,
  class: "w-5 h-5 mr-1 text-green-600 dark:text-green-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, $u = /* @__PURE__ */ s("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 13l4 4L19 7"
}, null, -1), Cu = [
  $u
], _u = {
  key: 1,
  class: "w-5 h-5 mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Lu = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }),
  /* @__PURE__ */ s("path", {
    d: "M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), Vu = [
  Lu
], Mu = /* @__PURE__ */ s("span", { class: "whitespace-nowrap" }, "Copy URL", -1), Su = {
  key: 3,
  class: "pl-2 mt-1"
}, Au = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), Fu = [
  Au
], Tu = {
  key: 4,
  class: "pl-2 mt-1"
}, Iu = /* @__PURE__ */ s("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), Du = { class: "mr-1" }, Pu = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ju = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), Ou = [
  ju
], Bu = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Eu = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Ru = [
  Eu
], Nu = {
  key: 5,
  class: "pl-2 mt-1"
}, Hu = ["title"], zu = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fill: "currentColor"
  })
], -1), Uu = { class: "whitespace-nowrap" }, qu = { key: 7 }, Qu = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, Ku = { class: "mr-1 select-none" }, Gu = {
  key: 1,
  class: "flex justify-between items-center"
}, Wu = { class: "mr-1 select-none" }, Zu = /* @__PURE__ */ se({
  __name: "AutoQueryGrid",
  props: {
    filterDefinitions: null,
    id: { default: "AutoQueryGrid" },
    apis: null,
    type: null,
    prefs: null,
    deny: null,
    hide: null,
    selectedColumns: null,
    toolbarButtonClass: null,
    tableStyle: null,
    gridClass: null,
    grid2Class: null,
    grid3Class: null,
    grid4Class: null,
    tableClass: null,
    theadClass: null,
    tbodyClass: null,
    theadRowClass: null,
    theadCellClass: null,
    headerTitle: null,
    headerTitles: null,
    visibleFrom: null,
    rowClass: null,
    rowStyle: null,
    apiPrefs: null,
    canFilter: null,
    disableKeyBindings: null,
    configureField: null,
    skip: { default: 0 },
    create: { type: Boolean },
    edit: null,
    filters: null
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { expose: t, emit: l }) {
    const n = e, { config: i, autoQueryGridDefaults: r } = _t(), d = r, c = Ne("client"), m = i.value.storage, v = (w) => typeof w == "string" ? w.split(",") : w || [];
    function h(w, L) {
      const ne = v(L);
      return w.reduce((Z, re) => (Z[re] = !ne.includes(re), Z), {});
    }
    const y = "filtering,queryString,queryFilters".split(","), g = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar".split(","), b = f(() => n.deny ? h(y, n.deny) : h(y, d.value.deny)), k = f(() => n.hide ? h(g, n.hide) : h(g, d.value.hide));
    function I(w) {
      return b.value[w];
    }
    function R(w) {
      return k.value[w];
    }
    const Q = f(() => n.tableStyle ?? d.value.tableStyle), D = f(() => n.gridClass ?? ue.getGridClass(Q.value)), O = f(() => n.grid2Class ?? ue.getGrid2Class(Q.value)), N = f(() => n.grid3Class ?? ue.getGrid3Class(Q.value)), V = f(() => n.grid4Class ?? ue.getGrid4Class(Q.value)), A = f(() => n.tableClass ?? ue.getTableClass(Q.value)), j = f(() => n.theadClass ?? ue.getTheadClass(Q.value)), J = f(() => n.theadRowClass ?? ue.getTheadRowClass(Q.value)), C = f(() => n.theadCellClass ?? ue.getTheadCellClass(Q.value)), z = f(() => n.toolbarButtonClass ?? ue.toolbarButtonClass);
    function K(w, L) {
      var we;
      if (n.rowClass)
        return n.rowClass(w, L);
      const ne = !!me.value.AnyUpdate, re = ((we = De.value) != null && we.name ? fe(w, De.value.name) : null) == Le.value;
      return ue.getTableRowClass(n.tableStyle, L, re, ne);
    }
    const U = Zl(), ee = f(() => {
      var w;
      return Sl(((w = me.value.AnyQuery.viewModel) == null ? void 0 : w.name) || me.value.AnyQuery.dataModel.name);
    }), _ = f(() => {
      const w = Object.keys(U).map((L) => L.toLowerCase());
      return Ze(ee.value).filter((L) => w.includes(L.name.toLowerCase()) || w.includes(L.name.toLowerCase() + "-header")).map((L) => L.name);
    });
    function E() {
      let w = v(n.selectedColumns);
      return w.length > 0 ? w : _.value.length > 0 ? _.value : [];
    }
    const p = f(() => {
      let L = E().map((Z) => Z.toLowerCase());
      const ne = Ze(ee.value);
      return L.length > 0 ? L.map((Z) => ne.find((re) => re.name.toLowerCase() === Z)).filter((Z) => Z != null) : ne;
    }), W = f(() => {
      let w = p.value.map((ne) => ne.name), L = v(oe.value.selectedColumns).map((ne) => ne.toLowerCase());
      return L.length > 0 ? w.filter((ne) => L.includes(ne.toLowerCase())) : w;
    }), F = S([]), B = S(new Ye()), ae = S(new Ye()), ve = S(), ie = S(!1), Le = S(), H = S(), $e = S(!1), de = S(), be = S(n.skip), ze = S(!1), te = 25, oe = S({ take: te }), Ve = S(!1), Fe = f(() => F.value.some((w) => w.settings.filters.length > 0 || !!w.settings.sort) || oe.value.selectedColumns), xe = f(() => F.value.map((w) => w.settings.filters.length).reduce((w, L) => w + L, 0)), qe = f(() => {
      var w;
      return Ze(Sl(Lt.value || ((w = me.value.AnyQuery) == null ? void 0 : w.dataModel.name)));
    }), De = f(() => {
      var w;
      return Jt(Sl(Lt.value || ((w = me.value.AnyQuery) == null ? void 0 : w.dataModel.name)));
    }), T = f(() => oe.value.take ?? te), P = f(() => B.value.response ? fe(B.value.response, "results") : []), le = f(() => {
      var w;
      return ((w = B.value.response) == null ? void 0 : w.total) ?? P.value.length ?? 0;
    }), ce = f(() => be.value > 0), Se = f(() => be.value > 0), Be = f(() => P.value.length >= T.value), Ue = f(() => P.value.length >= T.value), Ce = S(), Te = S(), tt = {
      NoQuery: "No Query API was found"
    };
    t({ update: Je, search: Cn, createRequestArgs: Vl, reset: Dn, createDone: Bt, createSave: Fl, editDone: Ot, editSave: nl, forceUpdate: $n, setEdit: Es, edit: H });
    function Ie(w) {
      if (w) {
        if (n.canFilter)
          return n.canFilter(w);
        const L = qe.value.find((ne) => ne.name.toLowerCase() == w.toLowerCase());
        if (L)
          return !rs(L);
      }
      return !1;
    }
    function Ke(w) {
      I("queryString") && Yl(w);
    }
    async function mt(w) {
      be.value += w, be.value < 0 && (be.value = 0);
      const L = Math.floor(le.value / T.value) * T.value;
      be.value > L && (be.value = L), Ke({ skip: be.value || void 0 }), await Je();
    }
    async function ut(w, L) {
      var re, we;
      if (H.value = null, Le.value = L, !w || !L)
        return;
      let ne = qt(me.value.AnyQuery, { [w]: L });
      const Z = await c.api(ne);
      if (Z.succeeded) {
        let Pe = (re = fe(Z.response, "results")) == null ? void 0 : re[0];
        Pe || console.warn(`API ${(we = me.value.AnyQuery) == null ? void 0 : we.request.name}(${w}:${L}) returned no results`), H.value = Pe;
      }
    }
    async function Yt(w, L) {
      var re;
      l("rowSelected", w, L);
      const ne = (re = De.value) == null ? void 0 : re.name, Z = ne ? fe(w, ne) : null;
      !ne || !Z || (Ke({ edit: Z }), ut(ne, Z));
    }
    function el(w, L) {
      var Z;
      if (!I("filtering"))
        return;
      let ne = L.target;
      if (Ie(w) && (ne == null ? void 0 : ne.tagName) !== "TD") {
        let re = (Z = ne == null ? void 0 : ne.closest("TABLE")) == null ? void 0 : Z.getBoundingClientRect(), we = F.value.find((Pe) => Pe.name.toLowerCase() == w.toLowerCase());
        if (we && re) {
          let Pe = 318, lt = re.x + Pe + 10;
          de.value = {
            column: we,
            topLeft: {
              x: Math.max(Math.floor(L.clientX + Pe / 2), lt),
              y: re.y + 45
            }
          };
        }
      }
      l("headerSelected", w, L);
    }
    function Ps() {
      de.value = null;
    }
    async function js(w) {
      var ne;
      let L = (ne = de.value) == null ? void 0 : ne.column;
      L && (L.settings = w, m.setItem(tl(L.name), JSON.stringify(L.settings)), await Je()), de.value = null;
    }
    async function Os(w) {
      m.setItem(tl(w.name), JSON.stringify(w.settings)), await Je();
    }
    async function Bs(w) {
      $e.value = !1, oe.value = w, m.setItem(Ml(), JSON.stringify(w)), await Je();
    }
    function Es(w) {
      Object.assign(H.value, w), $n();
    }
    function $n() {
      var L, ne, Z;
      (L = Ce.value) == null || L.forceUpdate(), (ne = Te.value) == null || ne.forceUpdate();
      const w = We();
      (Z = w == null ? void 0 : w.proxy) == null || Z.$forceUpdate();
    }
    async function Je() {
      await Cn(Vl());
    }
    async function Rs() {
      await Je();
    }
    async function Cn(w) {
      const L = me.value.AnyQuery;
      if (!L) {
        console.error(tt.NoQuery);
        return;
      }
      let ne = qt(L, w), Z = Qn((Pe) => {
        B.value.response = B.value.error = void 0, Ve.value = Pe;
      }), re = await c.api(ne);
      Z(), hl(() => B.value = re);
      let we = fe(re.response, "results") || [];
      !re.succeeded || we.label == 0;
    }
    function Vl() {
      let w = {
        include: "total",
        take: T.value
      }, L = v(oe.value.selectedColumns || n.selectedColumns);
      if (L.length > 0) {
        let Z = De.value;
        Z && L.includes(Z.name) && (L = [Z.name, ...L]);
        const re = qe.value, we = [];
        L.forEach((Pe) => {
          var sl;
          const lt = re.find((Ae) => Ae.name.toLowerCase() == Pe.toLowerCase());
          (sl = lt == null ? void 0 : lt.ref) != null && sl.selfId && we.push(lt.ref.selfId), fe(U, Pe) && we.push(...re.filter((Ae) => {
            var ht, Et;
            return ((Et = (ht = Ae.ref) == null ? void 0 : ht.selfId) == null ? void 0 : Et.toLowerCase()) == Pe.toLowerCase();
          }).map((Ae) => Ae.name));
        }), we.forEach((Pe) => {
          L.includes(Pe) || L.push(Pe);
        }), w.fields = L.join(",");
      }
      let ne = [];
      if (F.value.forEach((Z) => {
        Z.settings.sort && ne.push((Z.settings.sort === "DESC" ? "-" : "") + Z.name), Z.settings.filters.forEach((re) => {
          let we = re.key.replace("%", Z.name);
          w[we] = re.value;
        });
      }), n.filters && Object.keys(n.filters).forEach((Z) => {
        p.value.find((we) => we.name.toLowerCase() === Z.toLowerCase()) && (w[Z] = n.filters[Z]);
      }), I("queryString") && I("queryFilters")) {
        const Z = location.search ? location.search : location.hash.includes("?") ? "?" + Tl(location.hash, "?") : "";
        let re = Bl(Z);
        if (Object.keys(re).forEach((we) => {
          p.value.find((lt) => lt.name.toLowerCase() === we.toLowerCase()) && (w[we] = re[we]);
        }), typeof re.skip < "u") {
          const we = parseInt(re.skip);
          isNaN(we) || (be.value = w.skip = we);
        }
      }
      return typeof w.skip > "u" && be.value > 0 && (w.skip = be.value), ne.length > 0 && (w.orderBy = ne.join(",")), w;
    }
    function Ns() {
      const w = _n("csv");
      Nl(w), typeof window < "u" && window.open(w);
    }
    function Hs() {
      const w = _n("json");
      Nl(w), ze.value = !0, setTimeout(() => ze.value = !1, 3e3);
    }
    function _n(w = "json") {
      var we;
      const L = Vl(), ne = `/api/${(we = me.value.AnyQuery) == null ? void 0 : we.request.name}`, Z = vo(c.baseUrl, zt(ne, { ...L, jsconfig: "edv" }));
      return Z.indexOf("?") >= 0 ? pl(Z, "?") + "." + w + "?" + Tl(Z, "?") : Z + ".json";
    }
    async function zs() {
      F.value.forEach((w) => {
        w.settings = { filters: [] }, m.removeItem(tl(w.name));
      }), oe.value = { take: te }, m.removeItem(Ml()), await Je();
    }
    function Us() {
      ie.value = !0, Ke({ create: null });
    }
    const Lt = f(() => Pt(n.type)), dt = f(() => {
      var w;
      return Lt.value || ((w = me.value.AnyQuery) == null ? void 0 : w.dataModel.name);
    }), Ml = () => {
      var w;
      return `${n.id}/ApiPrefs/${Lt.value || ((w = me.value.AnyQuery) == null ? void 0 : w.dataModel.name)}`;
    }, tl = (w) => {
      var L;
      return `Column/${n.id}:${Lt.value || ((L = me.value.AnyQuery) == null ? void 0 : L.dataModel.name)}.${w}`;
    }, { metadataApi: Ln, typeOf: Sl, apiOf: Vn, filterDefinitions: qs } = et(), { invalidAccessMessage: Al } = bn(), Mn = f(() => n.filterDefinitions || qs.value), me = f(() => {
      let w = v(n.apis);
      return w.length > 0 ? Tt.from(w.map((L) => Vn(L)).filter((L) => L != null).map((L) => L)) : Tt.forType(Lt.value, Ln.value);
    }), ll = (w) => `<span class="text-yellow-700">${w}</span>`, Sn = f(() => {
      if (!Ln.value)
        return ll(`AppMetadata not loaded, see <a class="${vl.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let L = v(n.apis).map((Z) => Vn(Z) == null ? Z : null).filter((Z) => Z != null);
      if (L.length > 0)
        return ll(`Unknown API${L.length > 1 ? "s" : ""}: ${L.join(", ")}`);
      let ne = me.value;
      return ne.empty ? ll("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : ne.AnyQuery ? null : ll(tt.NoQuery);
    }), An = f(() => me.value.AnyQuery && Al(me.value.AnyQuery)), Fn = f(() => me.value.Create && Al(me.value.Create)), Tn = f(() => me.value.AnyUpdate && Al(me.value.AnyUpdate)), Qs = f(() => dl(me.value.Create));
    f(() => dl(me.value.AnyUpdate));
    const In = f(() => dl(me.value.Delete));
    function Ot() {
      H.value = null, Le.value = null, Ke({ edit: void 0 });
    }
    function Bt() {
      ie.value = !1, Ke({ create: void 0 });
    }
    async function nl() {
      await Je(), Ot();
    }
    async function Fl() {
      await Je(), Bt();
    }
    function Dn() {
      var ne;
      B.value = new Ye(), ae.value = new Ye(), ie.value = !1, Le.value = null, H.value = null, $e.value = !1, de.value = null, be.value = n.skip, ze.value = !1, oe.value = { take: te }, Ve.value = !1;
      const w = n.prefs || ml(m.getItem(Ml()));
      w && (oe.value = w), F.value = p.value.map((Z) => ({
        name: Z.name,
        type: Z.type,
        meta: Z,
        settings: Object.assign(
          {
            filters: []
          },
          ml(m.getItem(tl(Z.name)))
        )
      })), isNaN(n.skip) || (be.value = n.skip);
      let L = (ne = De.value) == null ? void 0 : ne.name;
      if (I("queryString")) {
        const Z = location.search ? location.search : location.hash.includes("?") ? "?" + Tl(location.hash, "?") : "";
        let re = Bl(Z);
        typeof re.create < "u" ? ie.value = typeof re.create < "u" : L && (typeof re.edit == "string" || typeof re.edit == "number") && ut(L, re.edit);
      }
      n.create === !0 && (ie.value = !0), L && n.edit != null && ut(L, n.edit);
    }
    return at(async () => {
      Dn(), await Je();
    }), (w, L) => {
      const ne = q("Alert"), Z = q("EnsureAccessDialog"), re = q("AutoCreateForm"), we = q("AutoEditForm"), Pe = q("ErrorSummary"), lt = q("Loading"), Pn = q("SettingsIcons"), sl = q("DataGrid");
      return o(Sn) ? (a(), u("div", Er, [
        ge(ne, { innerHTML: o(Sn) }, null, 8, ["innerHTML"])
      ])) : o(An) ? (a(), u("div", Rr, [
        ge(Ds, { "invalid-access": o(An) }, null, 8, ["invalid-access"])
      ])) : (a(), u("div", Nr, [
        ie.value && o(me).Create ? (a(), u("div", Hr, [
          o(Fn) ? (a(), Y(Z, {
            key: 0,
            title: `Create ${o(dt)}`,
            "invalid-access": o(Fn),
            "alert-class": "text-yellow-700",
            onDone: Bt
          }, null, 8, ["title", "invalid-access"])) : o(U).createform ? G(w.$slots, "createform", {
            key: 1,
            type: o(me).Create.request.name,
            configure: e.configureField,
            done: Bt,
            save: Fl
          }) : (a(), Y(re, {
            key: 2,
            ref_key: "createForm",
            ref: Ce,
            type: o(me).Create.request.name,
            configure: e.configureField,
            onDone: Bt,
            onSave: Fl
          }, {
            header: he(() => [
              G(w.$slots, "formheader", {
                form: "create",
                formInstance: Ce.value,
                apis: o(me),
                type: o(dt)
              })
            ]),
            footer: he(() => [
              G(w.$slots, "formfooter", {
                form: "create",
                formInstance: Ce.value,
                apis: o(me),
                type: o(dt)
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : H.value && o(me).AnyUpdate ? (a(), u("div", zr, [
          o(Tn) ? (a(), Y(Z, {
            key: 0,
            title: `Update ${o(dt)}`,
            "invalid-access": o(Tn),
            "alert-class": "text-yellow-700",
            onDone: Ot
          }, null, 8, ["title", "invalid-access"])) : o(U).editform ? G(w.$slots, "editform", {
            key: 1,
            model: H.value,
            type: o(me).AnyUpdate.request.name,
            deleteType: o(In) ? o(me).Delete.request.name : null,
            configure: e.configureField,
            done: Ot,
            save: nl
          }) : (a(), Y(we, {
            key: 2,
            ref_key: "editForm",
            ref: Te,
            modelValue: H.value,
            "onUpdate:modelValue": L[0] || (L[0] = (Ae) => H.value = Ae),
            type: o(me).AnyUpdate.request.name,
            deleteType: o(In) ? o(me).Delete.request.name : null,
            configure: e.configureField,
            onDone: Ot,
            onSave: nl,
            onDelete: nl
          }, {
            header: he(() => [
              G(w.$slots, "formheader", {
                form: "edit",
                formInstance: Te.value,
                apis: o(me),
                type: o(dt),
                model: H.value,
                id: Le.value
              })
            ]),
            footer: he(() => [
              G(w.$slots, "formfooter", {
                form: "edit",
                formInstance: Te.value,
                apis: o(me),
                type: o(dt),
                model: H.value,
                id: Le.value
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : $("", !0),
        o(U).toolbar ? G(w.$slots, "toolbar", { key: 2 }) : R("toolbar") ? (a(), u("div", Ur, [
          $e.value ? (a(), Y(kn, {
            key: 0,
            columns: o(p),
            prefs: oe.value,
            onDone: L[1] || (L[1] = (Ae) => $e.value = !1),
            onSave: Bs
          }, null, 8, ["columns", "prefs"])) : $("", !0),
          s("div", qr, [
            s("div", Qr, [
              R("preferences") ? (a(), u("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${o(dt)} Preferences`,
                onClick: L[2] || (L[2] = (Ae) => $e.value = !$e.value)
              }, Wr, 8, Kr)) : $("", !0),
              R("pagingNav") ? (a(), u("button", {
                key: 1,
                type: "button",
                class: x(["pl-2", o(ce) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !o(ce),
                onClick: L[3] || (L[3] = (Ae) => mt(-o(le)))
              }, Xr, 10, Zr)) : $("", !0),
              R("pagingNav") ? (a(), u("button", {
                key: 2,
                type: "button",
                class: x(["pl-2", o(Se) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !o(Se),
                onClick: L[4] || (L[4] = (Ae) => mt(-o(T)))
              }, tu, 10, Yr)) : $("", !0),
              R("pagingNav") ? (a(), u("button", {
                key: 3,
                type: "button",
                class: x(["pl-2", o(Be) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !o(Be),
                onClick: L[5] || (L[5] = (Ae) => mt(o(T)))
              }, su, 10, lu)) : $("", !0),
              R("pagingNav") ? (a(), u("button", {
                key: 4,
                type: "button",
                class: x(["pl-2", o(Ue) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !o(Ue),
                onClick: L[6] || (L[6] = (Ae) => mt(o(le)))
              }, iu, 10, ou)) : $("", !0)
            ]),
            R("pagingInfo") ? (a(), u("div", ru, [
              s("div", uu, [
                Ve.value ? (a(), u("span", du, "Querying...")) : $("", !0),
                o(P).length ? (a(), u("span", cu, [
                  fu,
                  ye(" " + M(be.value + 1) + " - " + M(Math.min(be.value + o(P).length, o(le))) + " ", 1),
                  s("span", null, " of " + M(o(le)), 1)
                ])) : B.value.completed ? (a(), u("span", mu, "No Results")) : $("", !0)
              ])
            ])) : $("", !0),
            s("div", vu, [
              R("refresh") ? (a(), u("div", hu, [
                s("button", {
                  type: "button",
                  onClick: Rs,
                  title: "Refresh",
                  class: x(o(z))
                }, pu, 2)
              ])) : $("", !0),
              R("downloadCsv") ? (a(), u("div", yu, [
                s("button", {
                  type: "button",
                  onClick: Ns,
                  title: "Download CSV",
                  class: x(o(z))
                }, wu, 2)
              ])) : $("", !0),
              R("copyApiUrl") ? (a(), u("div", xu, [
                s("button", {
                  type: "button",
                  onClick: Hs,
                  title: "Copy API URL",
                  class: x(o(z))
                }, [
                  ze.value ? (a(), u("svg", ku, Cu)) : (a(), u("svg", _u, Vu)),
                  Mu
                ], 2)
              ])) : $("", !0),
              o(Fe) && R("resetPreferences") ? (a(), u("div", Su, [
                s("button", {
                  type: "button",
                  onClick: zs,
                  title: "Reset Preferences & Filters",
                  class: x(o(z))
                }, Fu, 2)
              ])) : $("", !0),
              R("filtersView") && o(xe) > 0 ? (a(), u("div", Tu, [
                s("button", {
                  type: "button",
                  onClick: L[7] || (L[7] = (Ae) => ve.value = ve.value == "filters" ? null : "filters"),
                  class: x(o(z)),
                  "aria-expanded": "false"
                }, [
                  Iu,
                  s("span", Du, M(o(xe)) + " " + M(o(xe) == 1 ? "Filter" : "Filters"), 1),
                  ve.value != "filters" ? (a(), u("svg", Pu, Ou)) : (a(), u("svg", Bu, Ru))
                ], 2)
              ])) : $("", !0),
              R("newItem") && o(me).Create && o(Qs) ? (a(), u("div", Nu, [
                s("button", {
                  type: "button",
                  onClick: Us,
                  title: o(dt),
                  class: x(o(z))
                }, [
                  zu,
                  s("span", Uu, "New " + M(o(dt)), 1)
                ], 10, Hu)
              ])) : $("", !0),
              o(U).toolbarbuttons ? G(w.$slots, "toolbarbuttons", {
                key: 6,
                toolbarButtonClass: o(z)
              }) : $("", !0)
            ])
          ])
        ])) : $("", !0),
        ve.value == "filters" ? (a(), Y(xn, {
          key: 4,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: o(Mn),
          columns: F.value,
          onDone: L[8] || (L[8] = (Ae) => ve.value = null),
          onChange: Os
        }, null, 8, ["definitions", "columns"])) : $("", !0),
        ae.value.error ?? B.value.error ? (a(), Y(Pe, {
          key: 5,
          status: ae.value.error ?? B.value.error
        }, null, 8, ["status"])) : Ve.value ? (a(), Y(lt, {
          key: 6,
          class: "p-2"
        })) : $("", !0),
        de.value ? (a(), u("div", qu, [
          ge(wn, {
            definitions: o(Mn),
            column: de.value.column,
            "top-left": de.value.topLeft,
            onDone: Ps,
            onSave: js
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : $("", !0),
        o(P).length ? (a(), Y(sl, {
          key: 8,
          id: e.id,
          items: o(P),
          type: e.type,
          "selected-columns": o(W),
          class: "mt-1",
          onFiltersChanged: Je,
          tableStyle: o(Q),
          gridClass: o(D),
          grid2Class: o(O),
          grid3Class: o(N),
          grid4Class: o(V),
          tableClass: o(A),
          theadClass: o(j),
          theadRowClass: o(J),
          theadCellClass: o(C),
          tbodyClass: e.tbodyClass,
          rowClass: K,
          onRowSelected: Yt,
          rowStyle: e.rowStyle,
          headerTitle: e.headerTitle,
          headerTitles: e.headerTitles,
          visibleFrom: e.visibleFrom,
          onHeaderSelected: el
        }, Jl({
          header: he(({ column: Ae, label: ht }) => {
            var Et;
            return [
              I("filtering") && Ie(Ae) ? (a(), u("div", Qu, [
                s("span", Ku, M(ht), 1),
                ge(Pn, {
                  column: F.value.find((Ks) => Ks.name.toLowerCase() === Ae.toLowerCase()),
                  "is-open": ((Et = de.value) == null ? void 0 : Et.column.name) === Ae
                }, null, 8, ["column", "is-open"])
              ])) : (a(), u("div", Gu, [
                s("span", Wu, M(ht), 1)
              ]))
            ];
          }),
          _: 2
        }, [
          Me(Object.keys(o(U)), (Ae) => ({
            name: Ae,
            fn: he((ht) => [
              G(w.$slots, Ae, St(cl(ht)))
            ])
          }))
        ]), 1032, ["id", "items", "type", "selected-columns", "tableStyle", "gridClass", "grid2Class", "grid3Class", "grid4Class", "tableClass", "theadClass", "theadRowClass", "theadCellClass", "tbodyClass", "rowStyle", "headerTitle", "headerTitles", "visibleFrom"])) : $("", !0)
      ]));
    };
  }
}), Ju = { class: "flex" }, Xu = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Yu = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), ed = [
  Yu
], td = /* @__PURE__ */ s("path", {
  d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
  fill: "currentColor"
}, null, -1), ld = /* @__PURE__ */ s("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
  fill: "currentColor"
}, null, -1), nd = [
  td,
  ld
], sd = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, od = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
    fill: "currentColor"
  })
], -1), ad = [
  od
], id = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, rd = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
    fill: "currentColor"
  })
], -1), ud = [
  rd
], dd = /* @__PURE__ */ se({
  __name: "SettingsIcons",
  props: {
    column: null,
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (t, l) => {
      var n, i, r, d, c, m, v;
      return a(), u("div", Ju, [
        (r = (i = (n = e.column) == null ? void 0 : n.settings) == null ? void 0 : i.filters) != null && r.length ? (a(), u("svg", Xu, ed)) : (a(), u("svg", {
          key: 1,
          class: x(["w-4 h-4 transition-transform", e.isOpen ? "rotate-180" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, nd, 2)),
        ((c = (d = e.column) == null ? void 0 : d.settings) == null ? void 0 : c.sort) === "ASC" ? (a(), u("svg", sd, ad)) : ((v = (m = e.column) == null ? void 0 : m.settings) == null ? void 0 : v.sort) === "DESC" ? (a(), u("svg", id, ud)) : $("", !0)
      ]);
    };
  }
}), cd = /* @__PURE__ */ se({
  __name: "EnsureAccessDialog",
  props: {
    title: null,
    subtitle: null,
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    return (t, l) => {
      const n = q("EnsureAccess"), i = q("SlideOver");
      return e.invalidAccess ? (a(), Y(i, {
        key: 0,
        title: e.title,
        onDone: l[0] || (l[0] = (r) => t.$emit("done")),
        "content-class": "relative flex-1"
      }, Jl({
        default: he(() => [
          ge(n, {
            alertClass: e.alertClass,
            invalidAccess: e.invalidAccess
          }, null, 8, ["alertClass", "invalidAccess"])
        ]),
        _: 2
      }, [
        e.subtitle ? {
          name: "subtitle",
          fn: he(() => [
            ye(M(e.subtitle), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"])) : $("", !0);
    };
  }
}), fd = ["for"], md = { class: "mt-1 relative rounded-md shadow-sm" }, vd = ["type", "name", "id", "placeholder", "value", "aria-invalid", "aria-describedby"], hd = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, gd = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), pd = [
  gd
], yd = ["id"], bd = ["id"], wd = {
  inheritAttrs: !1
}, xd = /* @__PURE__ */ se({
  ...wd,
  __name: "TextInput",
  props: {
    status: null,
    id: null,
    type: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null
  },
  setup(e, { expose: t }) {
    const l = e, n = (g) => g.value;
    t({
      focus: r
    });
    const i = S();
    function r() {
      var g;
      (g = i.value) == null || g.focus();
    }
    const d = f(() => l.type || "text"), c = f(() => l.label ?? Oe(nt(l.id))), m = f(() => l.placeholder ?? c.value);
    let v = Ne("ApiState", void 0);
    const h = f(() => vt.call({ responseStatus: l.status ?? (v == null ? void 0 : v.error.value) }, l.id)), y = f(() => [ft.base, h.value ? ft.invalid : ft.valid, l.inputClass]);
    return (g, b) => (a(), u("div", {
      class: x([g.$attrs.class])
    }, [
      G(g.$slots, "header", _e({
        inputElement: i.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, g.$attrs)),
      o(c) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, M(o(c)), 11, fd)) : $("", !0),
      s("div", md, [
        s("input", _e({
          ref_key: "inputElement",
          ref: i,
          type: o(d),
          name: e.id,
          id: e.id,
          class: o(y),
          placeholder: o(m),
          value: e.modelValue,
          onInput: b[0] || (b[0] = (k) => g.$emit("update:modelValue", n(k.target))),
          "aria-invalid": o(h) != null,
          "aria-describedby": `${e.id}-error`,
          step: "any"
        }, o(it)(g.$attrs, ["class"])), null, 16, vd),
        o(h) ? (a(), u("div", hd, pd)) : $("", !0)
      ]),
      o(h) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, M(o(h)), 9, yd)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, M(e.help), 9, bd)) : $("", !0),
      G(g.$slots, "footer", _e({
        inputElement: i.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, g.$attrs))
    ], 2));
  }
}), kd = ["for"], $d = { class: "mt-1 relative rounded-md shadow-sm" }, Cd = ["name", "id", "placeholder", "aria-invalid", "aria-describedby"], _d = ["id"], Ld = ["id"], Vd = {
  inheritAttrs: !1
}, Md = /* @__PURE__ */ se({
  ...Vd,
  __name: "TextareaInput",
  props: {
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null
  },
  setup(e) {
    const t = e, l = (m) => m.value, n = f(() => t.label ?? Oe(nt(t.id))), i = f(() => t.placeholder ?? n.value);
    let r = Ne("ApiState", void 0);
    const d = f(() => vt.call({ responseStatus: t.status ?? (r == null ? void 0 : r.error.value) }, t.id)), c = f(() => ["shadow-sm " + ft.base, d.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + ft.valid, t.inputClass]);
    return (m, v) => (a(), u("div", {
      class: x([m.$attrs.class])
    }, [
      o(n) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, M(o(n)), 11, kd)) : $("", !0),
      s("div", $d, [
        s("textarea", _e({
          name: e.id,
          id: e.id,
          class: o(c),
          placeholder: o(i),
          onInput: v[0] || (v[0] = (h) => m.$emit("update:modelValue", l(h.target))),
          "aria-invalid": o(d) != null,
          "aria-describedby": `${e.id}-error`
        }, o(it)(m.$attrs, ["class"])), M(e.modelValue), 17, Cd)
      ]),
      o(d) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, M(o(d)), 9, _d)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, M(e.help), 9, Ld)) : $("", !0)
    ], 2));
  }
}), Sd = ["for"], Ad = ["id", "name", "value", "aria-invalid", "aria-describedby"], Fd = ["value"], Td = ["id"], Id = {
  inheritAttrs: !1
}, Dd = /* @__PURE__ */ se({
  ...Id,
  __name: "SelectInput",
  props: {
    status: null,
    id: null,
    modelValue: null,
    inputClass: null,
    label: null,
    labelClass: null,
    options: null,
    values: null,
    entries: null
  },
  setup(e) {
    const t = e, l = (c) => c.value, n = f(() => t.label ?? Oe(nt(t.id)));
    let i = Ne("ApiState", void 0);
    const r = f(() => vt.call({ responseStatus: t.status ?? (i == null ? void 0 : i.error.value) }, t.id)), d = f(() => t.entries || (t.values ? t.values.map((c) => ({ key: c, value: c })) : t.options ? Object.keys(t.options).map((c) => ({ key: c, value: t.options[c] })) : []));
    return (c, m) => (a(), u("div", {
      class: x([c.$attrs.class])
    }, [
      o(n) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, M(o(n)), 11, Sd)) : $("", !0),
      s("select", _e({
        id: e.id,
        name: e.id,
        class: [
          "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600",
          o(r) ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
          e.inputClass
        ],
        value: e.modelValue,
        onInput: m[0] || (m[0] = (v) => c.$emit("update:modelValue", l(v.target))),
        "aria-invalid": o(r) != null,
        "aria-describedby": `${e.id}-error`
      }, o(it)(c.$attrs, ["class"])), [
        (a(!0), u(ke, null, Me(o(d), (v) => (a(), u("option", {
          value: v.key
        }, M(v.value), 9, Fd))), 256))
      ], 16, Ad),
      o(r) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, M(o(r)), 9, Td)) : $("", !0)
    ], 2));
  }
}), Pd = { class: "flex items-center h-5" }, jd = ["id", "name", "checked"], Od = { class: "ml-3 text-sm" }, Bd = ["for"], Ed = {
  key: 0,
  class: "mt-2 text-sm text-red-500",
  id: "`${id}-error`"
}, Rd = {
  key: 1,
  class: "mt-2 text-sm text-gray-500",
  id: "`${id}-description`"
}, Nd = {
  inheritAttrs: !1
}, Hd = /* @__PURE__ */ se({
  ...Nd,
  __name: "CheckboxInput",
  props: {
    modelValue: { type: Boolean },
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.label ?? Oe(nt(l.id)));
    let i = Ne("ApiState", void 0);
    const r = f(() => vt.call({ responseStatus: l.status ?? (i == null ? void 0 : i.error.value) }, l.id));
    return (d, c) => (a(), u("div", {
      class: x(["relative flex items-start", d.$attrs.class])
    }, [
      s("div", Pd, [
        s("input", _e({
          id: e.id,
          name: e.id,
          type: "checkbox",
          checked: e.modelValue,
          onInput: c[0] || (c[0] = (m) => d.$emit("update:modelValue", m.target.checked)),
          class: ["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", e.inputClass]
        }, o(it)(d.$attrs, ["class"])), null, 16, jd)
      ]),
      s("div", Od, [
        s("label", {
          for: e.id,
          class: x(`font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, M(o(n)), 11, Bd),
        o(r) ? (a(), u("p", Ed, M(o(r)), 1)) : e.help ? (a(), u("p", Rd, M(e.help), 1)) : $("", !0)
      ])
    ], 2));
  }
}), zd = ["id"], Ud = ["for"], qd = { class: "mt-1 relative rounded-md shadow-sm" }, Qd = ["id", "name", "value"], Kd = ["onClick"], Gd = { class: "flex flex-wrap pb-1.5" }, Wd = { class: "pt-1.5 pl-1" }, Zd = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, Jd = ["onClick"], Xd = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Yd = [
  Xd
], ec = { class: "pt-1.5 pl-1 shrink" }, tc = ["type", "name", "id", "aria-invalid", "aria-describedby", "onPaste"], lc = ["id"], nc = ["onMouseover", "onClick"], sc = { class: "block truncate" }, oc = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, ac = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), ic = [
  ac
], rc = ["id"], uc = ["id"], dc = {
  inheritAttrs: !1
}, cc = /* @__PURE__ */ se({
  ...dc,
  __name: "TagInput",
  props: {
    status: null,
    id: null,
    type: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    modelValue: { default: () => [] },
    delimiters: { default: () => [","] },
    allowableValues: null,
    string: { type: Boolean },
    converter: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e;
    function n(p) {
      return l.converter ? l.converter(p) : p;
    }
    const i = f(() => Ee(n(l.modelValue), (p) => typeof p == "string" ? p.trim().length == 0 ? [] : p.split(",") : p) || []), r = S(), d = S(!1), c = f(() => !l.allowableValues || l.allowableValues.length == 0 ? [] : l.allowableValues.filter((p) => !i.value.includes(p) && p.toLowerCase().includes(h.value.toLowerCase())));
    function m(p) {
      r.value = p;
    }
    const v = S(null), h = S(""), y = f(() => l.type || "text"), g = f(() => l.label ?? Oe(nt(l.id)));
    let b = Ne("ApiState", void 0);
    const k = f(() => vt.call({ responseStatus: l.status ?? (b == null ? void 0 : b.error.value) }, l.id)), I = f(() => [
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      k.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      l.inputClass
    ]), R = (p) => A(i.value.filter((W) => W != p));
    function Q(p) {
      var W;
      document.activeElement === p.target && ((W = v.value) == null || W.focus());
    }
    const D = S();
    function O() {
      d.value = !0, D.value = !0;
    }
    function N() {
      O();
    }
    function V() {
      ee(J()), D.value = !1, setTimeout(() => {
        D.value || (d.value = !1);
      }, 200);
    }
    function A(p) {
      const W = l.string ? p.join(",") : p;
      t("update:modelValue", W);
    }
    function j(p) {
      if (p.key == "Backspace" && h.value.length == 0 && i.value.length > 0 && R(i.value[i.value.length - 1]), !(!l.allowableValues || l.allowableValues.length == 0))
        if (p.code == "Escape" || p.code == "Tab")
          d.value = !1;
        else if (p.code == "Home")
          r.value = c.value[0], K();
        else if (p.code == "End")
          r.value = c.value[c.value.length - 1], K();
        else if (p.code == "ArrowDown") {
          if (d.value = !0, !r.value)
            r.value = c.value[0];
          else {
            const W = c.value.indexOf(r.value);
            r.value = W + 1 < c.value.length ? c.value[W + 1] : c.value[0];
          }
          U();
        } else if (p.code == "ArrowUp") {
          if (!r.value)
            r.value = c.value[c.value.length - 1];
          else {
            const W = c.value.indexOf(r.value);
            r.value = W - 1 >= 0 ? c.value[W - 1] : c.value[c.value.length - 1];
          }
          U();
        } else
          p.code == "Enter" ? r.value && d.value ? (ee(r.value), p.preventDefault()) : d.value = !1 : d.value = c.value.length > 0;
    }
    function J() {
      if (h.value.length == 0)
        return "";
      let p = ho(h.value.trim(), ",");
      return p[0] == "," && (p = p.substring(1)), p = p.trim(), p.length == 0 && d.value && c.value.length > 0 ? r.value : p;
    }
    function C(p) {
      const W = J();
      if (W.length > 0) {
        const F = l.delimiters.some((ae) => ae == p.key);
        if (F && p.preventDefault(), p.key == "Enter" || p.key == "NumpadEnter" || p.key.length == 1 && F) {
          ee(W);
          return;
        }
      }
    }
    const z = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function K() {
      setTimeout(() => {
        let p = fl(`#${l.id}-tag li.active`);
        p && p.scrollIntoView(z);
      }, 0);
    }
    function U() {
      setTimeout(() => {
        let p = fl(`#${l.id}-tag li.active`);
        p && ("scrollIntoViewIfNeeded" in p ? p.scrollIntoViewIfNeeded(z) : p.scrollIntoView(z));
      }, 0);
    }
    function ee(p) {
      if (p.length === 0)
        return;
      const W = Array.from(i.value);
      W.indexOf(p) == -1 && W.push(p), A(W), h.value = "", d.value = !1;
    }
    function _(p) {
      var F;
      const W = (F = p.clipboardData) == null ? void 0 : F.getData("Text");
      E(W);
    }
    function E(p) {
      if (!p)
        return;
      const W = new RegExp(`\\n|\\t|${l.delimiters.join("|")}`), F = Array.from(i.value);
      p.split(W).map((ae) => ae.trim()).forEach((ae) => {
        F.indexOf(ae) == -1 && F.push(ae);
      }), A(F), h.value = "";
    }
    return (p, W) => (a(), u("div", {
      class: x([p.$attrs.class]),
      id: `${e.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      o(g) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, M(o(g)), 11, Ud)) : $("", !0),
      s("div", qd, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: o(i).join(",")
        }, null, 8, Qd),
        s("button", {
          class: x(o(I)),
          onClick: He(Q, ["prevent"]),
          onFocus: W[2] || (W[2] = (F) => d.value = !0),
          tabindex: "-1"
        }, [
          s("div", Gd, [
            (a(!0), u(ke, null, Me(o(i), (F) => (a(), u("div", Wd, [
              s("span", Zd, [
                ye(M(F) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (B) => R(F),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, Yd, 8, Jd)
              ])
            ]))), 256)),
            s("div", ec, [
              xt(s("input", _e({
                ref_key: "txtInput",
                ref: v,
                type: o(y),
                role: "combobox",
                "aria-controls": "options",
                "aria-expanded": "false",
                autocomplete: "off",
                spellcheck: "false",
                name: `${e.id}-txt`,
                id: `${e.id}-txt`,
                class: "p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",
                style: `box-shadow:none !important;width:${h.value.length + 1}ch`,
                "onUpdate:modelValue": W[0] || (W[0] = (F) => h.value = F),
                "aria-invalid": o(k) != null,
                "aria-describedby": `${e.id}-error`,
                onKeydown: j,
                onKeypress: C,
                onPaste: He(_, ["prevent", "stop"]),
                onFocus: N,
                onBlur: V,
                onClick: W[1] || (W[1] = (F) => d.value = !0)
              }, o(it)(p.$attrs, ["class", "required"])), null, 16, tc), [
                [Ys, h.value]
              ])
            ])
          ])
        ], 42, Kd),
        d.value && o(c).length ? (a(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: j,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (a(!0), u(ke, null, Me(o(c), (F) => (a(), u("li", {
            class: x([F === r.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (B) => m(F),
            onClick: (B) => ee(F),
            role: "option",
            tabindex: "-1"
          }, [
            s("span", sc, M(F), 1)
          ], 42, nc))), 256))
        ], 40, lc)) : $("", !0),
        o(k) ? (a(), u("div", oc, ic)) : $("", !0)
      ]),
      o(k) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, M(o(k)), 9, rc)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, M(e.help), 9, uc)) : $("", !0)
    ], 10, zd));
  }
}), fc = { class: "relative flex-grow mr-2 sm:mr-4" }, mc = ["for"], vc = { class: "block mt-2" }, hc = { class: "sr-only" }, gc = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], pc = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, yc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), bc = [
  yc
], wc = ["id"], xc = ["id"], kc = { key: 0 }, $c = ["title"], Cc = ["alt", "src"], _c = {
  key: 1,
  class: "mt-3"
}, Lc = { class: "w-full" }, Vc = { class: "pr-6 align-bottom pb-2" }, Mc = ["title"], Sc = ["src", "onError"], Ac = ["href"], Fc = {
  key: 1,
  class: "overflow-hidden"
}, Tc = { class: "align-top pb-2 whitespace-nowrap" }, Ic = {
  key: 0,
  class: "text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"
}, Dc = /* @__PURE__ */ se({
  __name: "FileInput",
  props: {
    multiple: { type: Boolean },
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null,
    values: null,
    files: null
  },
  setup(e) {
    var N;
    const t = e, l = S(null), { assetsPathResolver: n, fallbackPathResolver: i } = _t(), r = {}, d = S(), c = S(((N = t.files) == null ? void 0 : N.map(m)) || []);
    function m(V) {
      return V.filePath = n(V.filePath), V;
    }
    t.values && t.values.length > 0 && (c.value = t.values.map((V) => {
      let A = V.replace(/\\/g, "/");
      return { fileName: go(kt(A, "/"), "."), filePath: A, contentType: zl(A) };
    }).map(m));
    const v = f(() => t.label ?? Oe(nt(t.id))), h = f(() => t.placeholder ?? v.value);
    let y = Ne("ApiState", void 0);
    const g = f(() => vt.call({ responseStatus: t.status ?? (y == null ? void 0 : y.error.value) }, t.id)), b = f(() => [
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      g.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      t.inputClass
    ]), k = (V) => {
      let A = V.target;
      d.value = "", c.value = Array.from(A.files || []).map((j) => ({
        fileName: j.name,
        filePath: sn(j),
        contentLength: j.size,
        contentType: j.type || zl(j.name)
      }));
    }, I = () => {
      var V;
      return (V = l.value) == null ? void 0 : V.click();
    }, R = (V) => V == null ? !1 : V.startsWith("data:") || V.startsWith("blob:"), Q = f(() => {
      if (c.value.length > 0)
        return c.value[0].filePath;
      let V = typeof t.modelValue == "string" ? t.modelValue : t.values && t.values[0];
      return V && pt(n(V)) || null;
    }), D = (V) => !V || V.startsWith("data:") || V.endsWith(".svg") ? "" : "rounded-full object-cover";
    function O(V) {
      d.value = i(Q.value);
    }
    return Gt(ns), (V, A) => (a(), u("div", {
      class: x(["flex", e.multiple ? "flex-col" : "justify-between"])
    }, [
      s("div", fc, [
        o(v) ? (a(), u("label", {
          key: 0,
          for: e.id,
          class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, M(o(v)), 11, mc)) : $("", !0),
        s("div", vc, [
          s("span", hc, M(e.help ?? o(v)), 1),
          s("input", _e({
            ref_key: "input",
            ref: l,
            type: "file",
            multiple: e.multiple,
            name: e.id,
            id: e.id,
            class: o(b),
            placeholder: o(h),
            "aria-invalid": o(g) != null,
            "aria-describedby": `${e.id}-error`
          }, V.$attrs, { onChange: k }), null, 16, gc),
          o(g) ? (a(), u("div", pc, bc)) : $("", !0)
        ]),
        o(g) ? (a(), u("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, M(o(g)), 9, wc)) : e.help ? (a(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, M(e.help), 9, xc)) : $("", !0)
      ]),
      e.multiple ? (a(), u("div", _c, [
        s("table", Lc, [
          (a(!0), u(ke, null, Me(c.value, (j) => (a(), u("tr", null, [
            s("td", Vc, [
              s("div", {
                class: "flex w-full",
                title: R(j.filePath) ? "" : j.filePath
              }, [
                s("img", {
                  src: r[o(pt)(j.filePath)] || o(n)(o(pt)(j.filePath)),
                  class: x(["mr-2 h-8 w-8", D(j.filePath)]),
                  onError: (J) => r[o(pt)(j.filePath)] = o(i)(o(pt)(j.filePath))
                }, null, 42, Sc),
                R(j.filePath) ? (a(), u("span", Fc, M(j.fileName), 1)) : (a(), u("a", {
                  key: 0,
                  href: o(n)(j.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, M(j.fileName), 9, Ac))
              ], 8, Mc)
            ]),
            s("td", Tc, [
              j.contentLength && j.contentLength > 0 ? (a(), u("span", Ic, M(o(an)(j.contentLength)), 1)) : $("", !0)
            ])
          ]))), 256))
        ])
      ])) : (a(), u("div", kc, [
        o(Q) ? (a(), u("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: R(o(Q)) ? "" : o(Q)
        }, [
          s("img", {
            onClick: I,
            class: x(["h-16 w-16", D(o(Q))]),
            alt: `Current ${o(v) ?? ""}`,
            src: d.value || o(n)(o(Q)),
            onError: O
          }, null, 42, Cc)
        ], 8, $c)) : $("", !0)
      ]))
    ], 2));
  }
}), Pc = ["id"], jc = ["for"], Oc = { class: "relative mt-1" }, Bc = ["id", "placeholder"], Ec = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
    "clip-rule": "evenodd"
  })
], -1), Rc = [
  Ec
], Nc = ["id"], Hc = ["onMouseover", "onClick"], zc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
    "clip-rule": "evenodd"
  })
], -1), Uc = [
  zc
], qc = {
  key: 2,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
  tabindex: "-1"
}, Qc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), Kc = [
  Qc
], Gc = ["id"], Wc = ["id"], Zc = /* @__PURE__ */ se({
  __name: "Autocomplete",
  props: {
    status: null,
    id: null,
    type: null,
    label: null,
    help: null,
    placeholder: null,
    multiple: { type: Boolean, default: !1 },
    required: { type: Boolean },
    options: { default: () => [] },
    modelValue: null,
    match: null,
    viewCount: { default: 100 },
    pageSize: { default: 8 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e, i = S(!1);
    t({ toggle: z });
    function r(_) {
      return Array.isArray(n.modelValue) && n.modelValue.indexOf(_) >= 0;
    }
    const d = f(() => n.label ?? Oe(nt(n.id)));
    let c = Ne("ApiState", void 0);
    const m = f(() => vt.call({ responseStatus: n.status ?? (c == null ? void 0 : c.error.value) }, n.id)), v = f(() => [ft.base, m.value ? ft.invalid : ft.valid]), h = S(null), y = S(""), g = S(null), b = S(n.viewCount), k = S([]), I = f(() => y.value ? n.options.filter((E) => n.match(E, y.value)).slice(0, b.value) : n.options), R = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function Q(_) {
      g.value = _, k.value.indexOf(_) > Math.floor(b.value * 0.9) && (b.value += n.viewCount, ee());
    }
    const D = [",", `
`, "	"];
    function O(_) {
      var p;
      const E = (p = _.clipboardData) == null ? void 0 : p.getData("Text");
      N(E);
    }
    function N(_) {
      if (!_)
        return;
      const E = D.some((p) => _.includes(p));
      if (!n.multiple || !E) {
        const p = n.options.filter((W) => n.match(W, _));
        p.length == 1 && (U(p[0]), i.value = !1, il());
      } else if (E) {
        const p = new RegExp("\\r|\\n|\\t|,"), F = _.split(p).filter((B) => B.trim()).map((B) => n.options.find((ae) => n.match(ae, B))).filter((B) => !!B);
        if (F.length > 0) {
          y.value = "", i.value = !1, g.value = null;
          let B = Array.from(n.modelValue || []);
          F.forEach((ae) => {
            r(ae) ? B = B.filter((ve) => ve != ae) : B.push(ae);
          }), l("update:modelValue", B), il();
        }
      }
    }
    function V(_) {
      R.indexOf(_.code) || K();
    }
    function A(_) {
      if (!(_.shiftKey || _.ctrlKey || _.altKey)) {
        if (!i.value) {
          _.code == "ArrowDown" && (i.value = !0, g.value = k.value[0]);
          return;
        }
        if (_.code == "Escape")
          i.value && (_.stopPropagation(), i.value = !1);
        else if (_.code == "Tab")
          i.value = !1;
        else if (_.code == "Home")
          g.value = k.value[0], J();
        else if (_.code == "End")
          g.value = k.value[k.value.length - 1], J();
        else if (_.code == "ArrowDown") {
          if (!g.value)
            g.value = k.value[0];
          else {
            const E = k.value.indexOf(g.value);
            g.value = E + 1 < k.value.length ? k.value[E + 1] : k.value[0];
          }
          C();
        } else if (_.code == "ArrowUp") {
          if (!g.value)
            g.value = k.value[k.value.length - 1];
          else {
            const E = k.value.indexOf(g.value);
            g.value = E - 1 >= 0 ? k.value[E - 1] : k.value[k.value.length - 1];
          }
          C();
        } else
          _.code == "Enter" && (g.value ? (U(g.value), n.multiple || (_.preventDefault(), il())) : i.value = !1);
      }
    }
    const j = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function J() {
      setTimeout(() => {
        let _ = fl(`#${n.id}-autocomplete li.active`);
        _ && _.scrollIntoView(j);
      }, 0);
    }
    function C() {
      setTimeout(() => {
        let _ = fl(`#${n.id}-autocomplete li.active`);
        _ && ("scrollIntoViewIfNeeded" in _ ? _.scrollIntoViewIfNeeded(j) : _.scrollIntoView(j));
      }, 0);
    }
    function z(_) {
      var E;
      i.value = _, _ && (K(), (E = h.value) == null || E.focus());
    }
    function K() {
      i.value = !0, ee();
    }
    function U(_) {
      if (y.value = "", i.value = !1, n.multiple) {
        let E = Array.from(n.modelValue || []);
        r(_) ? E = E.filter((p) => p != _) : E.push(_), g.value = null, l("update:modelValue", E);
      } else {
        let E = _;
        n.modelValue == _ && (E = null), l("update:modelValue", E);
      }
    }
    function ee() {
      k.value = I.value;
    }
    return Dt(y, ee), (_, E) => (a(), u("div", {
      id: `${e.id}-autocomplete`
    }, [
      o(d) ? (a(), u("label", {
        key: 0,
        for: `${e.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, M(o(d)), 9, jc)) : $("", !0),
      s("div", Oc, [
        xt(s("input", _e({
          ref_key: "txtInput",
          ref: h,
          id: `${e.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": E[0] || (E[0] = (p) => y.value = p),
          class: o(v),
          placeholder: e.multiple || !e.modelValue ? e.placeholder : "",
          onFocus: K,
          onKeydown: A,
          onKeyup: V,
          onClick: K,
          onPaste: O,
          required: !1
        }, _.$attrs), null, 16, Bc), [
          [eo, y.value]
        ]),
        s("button", {
          type: "button",
          onClick: E[1] || (E[1] = (p) => z(!i.value)),
          class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
          tabindex: "-1"
        }, Rc),
        i.value ? (a(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: A,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (a(!0), u(ke, null, Me(k.value, (p) => (a(), u("li", {
            class: x([p === g.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (W) => Q(p),
            onClick: (W) => U(p),
            role: "option",
            tabindex: "-1"
          }, [
            G(_.$slots, "item", St(cl(p))),
            r(p) ? (a(), u("span", {
              key: 0,
              class: x(["absolute inset-y-0 right-0 flex items-center pr-4", p === g.value ? "text-white" : "text-indigo-600"])
            }, Uc, 2)) : $("", !0)
          ], 42, Hc))), 256))
        ], 40, Nc)) : !e.multiple && e.modelValue ? (a(), u("div", {
          key: 1,
          onKeydown: A,
          onClick: E[2] || (E[2] = (p) => z(!i.value)),
          class: "h-8 -mt-8 ml-3 pt-0.5"
        }, [
          G(_.$slots, "item", St(cl(e.modelValue)))
        ], 32)) : $("", !0),
        o(m) ? (a(), u("div", qc, Kc)) : $("", !0)
      ]),
      o(m) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, M(o(m)), 9, Gc)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, M(e.help), 9, Wc)) : $("", !0)
    ], 8, Pc));
  }
}), Jc = ["id", "name", "value"], Xc = { class: "block truncate" }, Yc = /* @__PURE__ */ se({
  __name: "Combobox",
  props: {
    id: null,
    modelValue: null,
    multiple: { type: Boolean },
    options: null,
    values: null,
    entries: null
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e;
    t({
      toggle(y) {
        var g;
        (g = d.value) == null || g.toggle(y);
      }
    });
    function i(y) {
      l("update:modelValue", y);
    }
    const r = f(() => n.multiple != null ? n.multiple : Array.isArray(n.modelValue)), d = S();
    function c(y, g) {
      return !g || y.value.toLowerCase().includes(g.toLowerCase());
    }
    const m = f(() => n.entries || (n.values ? n.values.map((y) => ({ key: y, value: y })) : n.options ? Object.keys(n.options).map((y) => ({ key: y, value: n.options[y] })) : [])), v = S(r.value ? [] : null);
    at(() => {
      n.modelValue == null || n.modelValue === "" ? v.value = r.value ? [] : null : typeof n.modelValue == "string" ? v.value = m.value.find((y) => y.key === n.modelValue) || null : Array.isArray(n.modelValue) && (v.value = m.value.filter((y) => n.modelValue.includes(y.key)));
    });
    const h = f(() => v.value == null ? "" : Array.isArray(v.value) ? v.value.map((y) => encodeURIComponent(y.key)).join(",") : v.value.key);
    return (y, g) => {
      const b = q("Autocomplete");
      return a(), u(ke, null, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: o(h)
        }, null, 8, Jc),
        ge(b, _e({
          ref_key: "input",
          ref: d,
          id: e.id,
          options: o(m),
          match: c,
          multiple: o(r)
        }, y.$attrs, {
          modelValue: v.value,
          "onUpdate:modelValue": [
            g[0] || (g[0] = (k) => v.value = k),
            i
          ]
        }), {
          item: he(({ key: k, value: I }) => [
            s("span", Xc, M(I), 1)
          ]),
          _: 1
        }, 16, ["id", "options", "multiple", "modelValue"])
      ], 64);
    };
  }
}), e0 = /* @__PURE__ */ se({
  __name: "DynamicInput",
  props: {
    input: null,
    modelValue: null,
    api: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.input.type || "text"), i = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), r = f(() => it(l.input, i)), d = S(Ee(
      l.modelValue[l.input.id],
      (m) => l.input.type === "file" ? null : l.input.type === "date" && m instanceof Date ? bl(m) : l.input.type === "time" ? Gn(m) : m
    ));
    Dt(d, () => {
      l.modelValue[l.input.id] = d.value, t("update:modelValue", l.modelValue);
    });
    const c = f(() => {
      const m = l.modelValue[l.input.id];
      if (l.input.type !== "file" || !m)
        return [];
      if (typeof m == "string")
        return [{ filePath: m, fileName: kt(m, "/") }];
      if (!Array.isArray(m) && typeof m == "object")
        return m;
      if (Array.isArray(m)) {
        const v = [];
        return m.forEach((h) => {
          typeof h == "string" ? v.push({ filePath: h, fileName: kt(h, "/") }) : typeof h == "object" && v.push(h);
        }), v;
      }
    });
    return (m, v) => {
      var Q, D, O, N, V, A, j, J, C, z, K, U, ee, _, E, p, W, F, B, ae, ve, ie, Le, H, $e;
      const h = q("SelectInput"), y = q("CheckboxInput"), g = q("TagInput"), b = q("Combobox"), k = q("FileInput"), I = q("TextareaInput"), R = q("TextInput");
      return o(X).component(o(n)) ? (a(), Y(zn(o(X).component(o(n))), _e({
        key: 0,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[0] || (v[0] = (de) => d.value = de),
        status: (Q = e.api) == null ? void 0 : Q.error,
        "input-class": (D = e.input.css) == null ? void 0 : D.input,
        "label-class": (O = e.input.css) == null ? void 0 : O.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : o(n) == "select" ? (a(), Y(h, _e({
        key: 1,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[1] || (v[1] = (de) => d.value = de),
        status: (N = e.api) == null ? void 0 : N.error,
        "input-class": (V = e.input.css) == null ? void 0 : V.input,
        "label-class": (A = e.input.css) == null ? void 0 : A.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : o(n) == "checkbox" ? (a(), Y(y, _e({
        key: 2,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[2] || (v[2] = (de) => d.value = de),
        status: (j = e.api) == null ? void 0 : j.error,
        "input-class": (J = e.input.css) == null ? void 0 : J.input,
        "label-class": (C = e.input.css) == null ? void 0 : C.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : o(n) == "tag" ? (a(), Y(g, _e({
        key: 3,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[3] || (v[3] = (de) => d.value = de),
        status: (z = e.api) == null ? void 0 : z.error,
        "input-class": (K = e.input.css) == null ? void 0 : K.input,
        "label-class": (U = e.input.css) == null ? void 0 : U.label,
        allowableValues: e.input.allowableValues,
        string: ((ee = e.input.prop) == null ? void 0 : ee.type) == "String"
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : o(n) == "combobox" ? (a(), Y(b, _e({
        key: 4,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[4] || (v[4] = (de) => d.value = de),
        status: (_ = e.api) == null ? void 0 : _.error,
        "input-class": (E = e.input.css) == null ? void 0 : E.input,
        "label-class": (p = e.input.css) == null ? void 0 : p.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : o(n) == "file" ? (a(), Y(k, _e({
        key: 5,
        id: e.input.id,
        status: (W = e.api) == null ? void 0 : W.error,
        modelValue: d.value,
        "onUpdate:modelValue": v[5] || (v[5] = (de) => d.value = de),
        "input-class": (F = e.input.css) == null ? void 0 : F.input,
        "label-class": (B = e.input.css) == null ? void 0 : B.label,
        files: o(c)
      }, o(r)), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : o(n) == "textarea" ? (a(), Y(I, _e({
        key: 6,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[6] || (v[6] = (de) => d.value = de),
        status: (ae = e.api) == null ? void 0 : ae.error,
        "input-class": (ve = e.input.css) == null ? void 0 : ve.input,
        "label-class": (ie = e.input.css) == null ? void 0 : ie.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (a(), Y(R, _e({
        key: 7,
        type: o(n),
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[7] || (v[7] = (de) => d.value = de),
        status: (Le = e.api) == null ? void 0 : Le.error,
        "input-class": (H = e.input.css) == null ? void 0 : H.input,
        "label-class": ($e = e.input.css) == null ? void 0 : $e.label
      }, o(r)), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), t0 = { class: "lookup-field" }, l0 = ["name", "value"], n0 = {
  key: 0,
  class: "flex justify-between"
}, s0 = ["for"], o0 = {
  key: 0,
  class: "flex items-center"
}, a0 = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, i0 = /* @__PURE__ */ s("span", { class: "sr-only" }, "Clear", -1), r0 = /* @__PURE__ */ s("svg", {
  class: "h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), u0 = [
  i0,
  r0
], d0 = {
  key: 1,
  class: "mt-1 relative"
}, c0 = { class: "w-full inline-flex truncate" }, f0 = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, m0 = /* @__PURE__ */ s("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-gray-400 dark:text-gray-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ])
], -1), v0 = ["id"], h0 = ["id"], g0 = /* @__PURE__ */ se({
  __name: "LookupInput",
  props: {
    id: null,
    status: null,
    input: null,
    metadataType: null,
    modelValue: null,
    label: null,
    labelClass: null,
    help: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, { config: n } = _t(), { metadataApi: i } = et(), r = f(() => l.id || l.input.id), d = f(() => l.label ?? Oe(nt(r.value)));
    let c = Ne("ApiState", void 0);
    const m = Ne("client"), v = f(() => vt.call({ responseStatus: l.status ?? (c == null ? void 0 : c.error.value) }, r.value)), h = S(""), y = S(""), g = f(() => fe(l.modelValue, r.value)), b = f(() => Ze(l.metadataType).find((D) => D.name.toLowerCase() == r.value.toLowerCase())), k = f(() => {
      var D, O, N;
      return ((N = rt((O = (D = b.value) == null ? void 0 : D.ref) == null ? void 0 : O.model)) == null ? void 0 : N.icon) || n.value.tableIcon;
    });
    let I;
    function R(D) {
      if (D) {
        if (I == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        I.openModal({ name: "ModalLookup", ref: D }, (O) => {
          if (console.debug("openModal", h.value, " -> ", O, bt.setRefValue(D, O), D), O) {
            const N = fe(O, D.refId);
            h.value = bt.setRefValue(D, O) || N;
            const V = o(l.modelValue);
            V[r.value] = N, t("update:modelValue", V);
          }
        });
      }
    }
    function Q() {
      l.modelValue[r.value] = null, h.value = "";
    }
    return at(async () => {
      var J, C;
      I = Ne("ModalProvider", void 0);
      const D = l.modelValue;
      l.modelValue[r.value] || (l.modelValue[r.value] = null);
      const O = b.value, N = O == null ? void 0 : O.ref;
      if (!N) {
        console.warn(`No RefInfo for property '${r.value}'`);
        return;
      }
      h.value = "";
      let V = N.selfId == null ? fe(D, O.name) : fe(D, N.selfId);
      if (Ut(V) && (V = fe(D, N.refId)), V == null)
        return;
      if (((J = i.value) == null ? void 0 : J.operations.find((z) => {
        var K;
        return ((K = z.dataModel) == null ? void 0 : K.name) == N.model;
      })) != null) {
        const z = fe(D, O.name);
        if (Ut(z))
          return;
        if (h.value = `${z}`, y.value = O.name, N.refLabel != null) {
          const K = Ze(l.metadataType).find((ee) => ee.type == N.model);
          K == null && console.warn(`Could not find ${N.model} Property on ${l.metadataType.name}`);
          const U = K != null ? fe(D, K.name) : null;
          if (U != null) {
            let ee = fe(U, N.refLabel);
            ee && (h.value = `${ee}`, bt.setValue(N.model, V, N.refLabel, ee));
          } else {
            const ee = ((C = O.attributes) == null ? void 0 : C.some((E) => E.name == "Computed")) == !0;
            let _ = await bt.getOrFetchValue(m, i.value, N.model, N.refId, N.refLabel, ee, V);
            h.value = _ || `${N.model}: ${h.value}`;
          }
        }
      }
    }), (D, O) => {
      var V;
      const N = q("Icon");
      return a(), u("div", t0, [
        s("input", {
          type: "hidden",
          name: o(r),
          value: o(g)
        }, null, 8, l0),
        o(d) ? (a(), u("div", n0, [
          s("label", {
            for: o(r),
            class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
          }, M(o(d)), 11, s0),
          o(g) ? (a(), u("div", o0, [
            s("span", a0, M(o(g)), 1),
            s("button", {
              onClick: Q,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, u0)
          ])) : $("", !0)
        ])) : $("", !0),
        (V = o(b)) != null && V.ref ? (a(), u("div", d0, [
          s("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: O[0] || (O[0] = (A) => R(o(b).ref)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            s("span", c0, [
              s("span", f0, [
                ge(N, {
                  class: "mr-1 w-5 h-5",
                  image: o(k)
                }, null, 8, ["image"]),
                s("span", null, M(h.value), 1)
              ])
            ]),
            m0
          ])
        ])) : $("", !0),
        o(v) ? (a(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${o(r)}-error`
        }, M(o(v)), 9, v0)) : e.help ? (a(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${o(r)}-description`
        }, M(e.help), 9, h0)) : $("", !0)
      ]);
    };
  }
}), p0 = /* @__PURE__ */ se({
  __name: "AutoFormFields",
  props: {
    modelValue: null,
    type: null,
    api: null,
    formLayout: null,
    configureField: null,
    configureFormLayout: null,
    hideSummary: { type: Boolean },
    flexClass: { default: "flex flex-1 flex-col justify-between" },
    divideClass: { default: "divide-y divide-gray-200 px-4 sm:px-6" },
    spaceClass: { default: "space-y-6 pt-6 pb-5" },
    fieldsetClass: { default: "grid grid-cols-12 gap-6" }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e;
    t({ forceUpdate: i, props: n, updateValue: d });
    function i() {
      var O;
      const D = We();
      (O = D == null ? void 0 : D.proxy) == null || O.$forceUpdate();
    }
    function r(D, O) {
      d(D.id, fe(O, D.id));
    }
    function d(D, O) {
      n.modelValue[D] = O, l("update:modelValue", n.modelValue), i();
    }
    const { metadataApi: c, apiOf: m, typeOf: v, typeOfRef: h, createFormLayout: y, Crud: g } = et(), b = f(() => n.type || Pt(n.modelValue)), k = f(() => v(b.value)), I = f(() => {
      var D, O;
      return h((O = (D = c.value) == null ? void 0 : D.operations.find((N) => N.request.name == b.value)) == null ? void 0 : O.dataModel) || k.value;
    }), R = f(() => {
      const D = k.value;
      if (!D) {
        if (n.formLayout) {
          const J = n.formLayout.map((C) => {
            const z = { name: C.id, type: ca(C.type) }, K = Object.assign({ prop: z }, C);
            return n.configureField && n.configureField(K), K;
          });
          return n.configureFormLayout && n.configureFormLayout(J), J;
        }
        throw new Error(`MetadataType for ${b.value} not found`);
      }
      const O = Ze(D), N = I.value, V = n.formLayout ? n.formLayout : y(D), A = [], j = m(D.name);
      return V.forEach((J) => {
        var U;
        const C = O.find((ee) => ee.name == J.name);
        if (J.ignore)
          return;
        const z = ((U = N == null ? void 0 : N.properties) == null ? void 0 : U.find((ee) => {
          var _;
          return ee.name.toLowerCase() == ((_ = J.name) == null ? void 0 : _.toLowerCase());
        })) ?? C, K = Object.assign({ prop: z, op: j }, J);
        n.configureField && n.configureField(K), A.push(K);
      }), n.configureFormLayout && n.configureFormLayout(A), A;
    }), Q = f(() => R.value.filter((D) => D.type != "hidden").map((D) => D.id));
    return (D, O) => {
      var j;
      const N = q("ErrorSummary"), V = q("LookupInput"), A = q("DynamicInput");
      return a(), u(ke, null, [
        e.hideSummary ? $("", !0) : (a(), Y(N, {
          key: 0,
          status: (j = e.api) == null ? void 0 : j.error,
          except: o(Q)
        }, null, 8, ["status", "except"])),
        s("div", {
          class: x(e.flexClass)
        }, [
          s("div", {
            class: x(e.divideClass)
          }, [
            s("div", {
              class: x(e.spaceClass)
            }, [
              s("fieldset", {
                class: x(e.fieldsetClass)
              }, [
                (a(!0), u(ke, null, Me(o(R), (J) => {
                  var C, z, K;
                  return a(), u("div", {
                    key: J.id,
                    class: x([
                      "w-full",
                      ((C = J.css) == null ? void 0 : C.field) ?? (J.type == "textarea" ? "col-span-12" : "col-span-12 xl:col-span-6" + (J.type == "checkbox" ? " flex items-center" : "")),
                      J.type == "hidden" ? "hidden" : ""
                    ])
                  }, [
                    ((z = J.prop) == null ? void 0 : z.ref) != null && J.type != "file" && !J.prop.isPrimaryKey ? (a(), Y(V, {
                      key: 0,
                      metadataType: o(I),
                      input: J,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": (U) => r(J, U),
                      status: (K = e.api) == null ? void 0 : K.error
                    }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (a(), Y(A, {
                      key: 1,
                      input: J,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": O[0] || (O[0] = (U) => D.$emit("update:modelValue", U)),
                      api: e.api
                    }, null, 8, ["input", "modelValue", "api"]))
                  ], 2);
                }), 128))
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 64);
    };
  }
});
function Ll() {
  const e = S(!1), t = S(), l = S(), n = Ne("client");
  function i({ message: g, errorCode: b, fieldName: k, errors: I }) {
    return b || (b = "Exception"), I || (I = []), t.value = k ? new Il({
      errorCode: b,
      message: g,
      errors: [new On({ fieldName: k, errorCode: b, message: g })]
    }) : new Il({ errorCode: b, message: g, errors: I });
  }
  function r({ fieldName: g, message: b, errorCode: k }) {
    if (k || (k = "Exception"), !t.value)
      i({ fieldName: g, message: b, errorCode: k });
    else {
      let I = new Il(t.value);
      I.errors = [
        ...(I.errors || []).filter((R) => {
          var Q;
          return ((Q = R.fieldName) == null ? void 0 : Q.toLowerCase()) !== (g == null ? void 0 : g.toLowerCase());
        }),
        new On({ fieldName: g, message: b, errorCode: k })
      ], t.value = I;
    }
  }
  async function d(g, b, k) {
    e.value = !0;
    let I = await n.api(Vt(g), b, k);
    return e.value = !1, l.value = I.response, t.value = I.error, I;
  }
  async function c(g, b, k) {
    e.value = !0;
    let I = await n.apiVoid(Vt(g), b, k);
    return e.value = !1, l.value = I.response, t.value = I.error, I;
  }
  async function m(g, b, k, I) {
    e.value = !0;
    let R = await n.apiForm(Vt(g), b, k, I);
    return e.value = !1, l.value = R.response, t.value = R.error, R;
  }
  async function v(g, b, k, I) {
    e.value = !0;
    let R = await n.apiFormVoid(Vt(g), b, k, I);
    return e.value = !1, l.value = R.response, t.value = R.error, R;
  }
  async function h(g, b, k, I) {
    return Xn(n, g, b, k, I);
  }
  let y = { setError: i, addFieldError: r, loading: e, error: t, api: d, apiVoid: c, apiForm: m, apiFormVoid: v, swr: h, unRefs: Vt, setRef: Wn };
  return Wt("ApiState", y), y;
}
const y0 = ["onSubmit"], b0 = { key: 0 }, w0 = { key: 2 }, x0 = ["innerHTML"], k0 = /* @__PURE__ */ s("input", {
  type: "submit",
  class: "hidden"
}, null, -1), $0 = { class: "flex justify-end" }, C0 = /* @__PURE__ */ s("div", null, null, -1), _0 = /* @__PURE__ */ se({
  __name: "AutoForm",
  props: {
    type: null,
    modelValue: null,
    heading: null,
    subHeading: null,
    showLoading: { type: Boolean, default: !0 },
    jsconfig: { default: "eccn,edv" },
    configureField: null,
    bodyClass: null,
    formClass: { default: "shadow sm:rounded-md" },
    innerFormClass: null,
    headerClass: { default: "p-6" },
    buttonsClass: null,
    headingClass: null,
    subHeadingClass: null,
    submitLabel: { default: "Submit" },
    allowSubmit: null
  },
  emits: ["success", "error", "update:modelValue"],
  setup(e, { emit: t }) {
    const l = e;
    Wt("ModalProvider", {
      openModal: d
    });
    const i = S(), r = S();
    function d(C, z) {
      i.value = C, r.value = z;
    }
    async function c(C) {
      r.value && r.value(C), i.value = void 0, r.value = void 0;
    }
    const m = Ll(), { getTypeName: v } = ea(), { typeOf: h, Crud: y, createDto: g } = et(), b = S(new Ye()), k = f(() => typeof l.buttonsClass == "string" ? l.formClass : Ge.buttonsClass), I = f(() => typeof l.headingClass == "string" ? l.formClass : wt.headingClass), R = f(() => typeof l.subHeadingClass == "string" ? l.subHeadingClass : wt.subHeadingClass), Q = f(() => {
      var C;
      return l.type ? v(l.type) : (C = l.modelValue) != null && C.getTypeName ? l.modelValue.getTypeName() : null;
    }), D = f(() => h(Q.value)), O = S(l.modelValue || A()), N = f(() => m.loading.value), V = f(() => {
      var C;
      return l.heading || ((C = h(Q.value)) == null ? void 0 : C.description) || Oe(Q.value);
    });
    function A() {
      return typeof l.type == "string" ? g(l.type) : l.type ? new l.type() : l.modelValue;
    }
    async function j(C) {
      let z = C.target;
      const K = A();
      let U = Ee(K == null ? void 0 : K.getMethod, (E) => typeof E == "function" ? E() : null) || "POST", ee = Ee(K == null ? void 0 : K.createResponse, (E) => typeof E == "function" ? E() : null) == null;
      const _ = l.jsconfig;
      if (Xl.hasRequestBody(U)) {
        let E = new K.constructor(), p = new FormData(z);
        console.debug("AutoForm.submitForm", E, p), ee ? b.value = await m.apiFormVoid(E, p, { jsconfig: _ }) : b.value = await m.apiForm(E, p, { jsconfig: _ });
      } else {
        let E = new K.constructor(O.value);
        console.debug("AutoForm.submit", E), ee ? b.value = await m.apiVoid(E, { jsconfig: _ }) : b.value = await m.api(E, { jsconfig: _ });
      }
      b.value.succeeded ? t("success", b.value.response) : t("error", b.value.error);
    }
    function J(C) {
      t("update:modelValue", C);
    }
    return (C, z) => {
      var E, p, W;
      const K = q("AutoFormFields"), U = q("FormLoading"), ee = q("PrimaryButton"), _ = q("ModalLookup");
      return o(D) ? (a(), u("form", {
        key: 0,
        onSubmit: He(j, ["prevent"]),
        autocomplete: "off",
        class: x(e.formClass)
      }, [
        s("div", {
          class: x(e.innerFormClass)
        }, [
          s("div", {
            class: x(e.bodyClass)
          }, [
            s("div", {
              class: x(e.headerClass)
            }, [
              C.$slots.heading ? (a(), u("div", b0, [
                G(C.$slots, "heading")
              ])) : (a(), u("h3", {
                key: 1,
                class: x(o(I))
              }, M(o(V)), 3)),
              C.$slots.subheading ? (a(), u("div", w0, [
                G(C.$slots, "subheading")
              ])) : e.subHeading ? (a(), u("p", {
                key: 3,
                class: x(o(R))
              }, M(e.subHeading), 3)) : (E = o(D)) != null && E.notes ? (a(), u("p", {
                key: 4,
                class: x(["notes", o(R)]),
                innerHTML: (p = o(D)) == null ? void 0 : p.notes
              }, null, 10, x0)) : $("", !0)
            ], 2),
            G(C.$slots, "header"),
            k0,
            ge(K, {
              type: e.type,
              modelValue: O.value,
              "onUpdate:modelValue": J,
              api: b.value,
              configureField: e.configureField
            }, null, 8, ["type", "modelValue", "api", "configureField"]),
            G(C.$slots, "footer")
          ], 2),
          G(C.$slots, "buttons", {}, () => [
            s("div", {
              class: x(o(k))
            }, [
              s("div", null, [
                e.showLoading && o(N) ? (a(), Y(U, { key: 0 })) : $("", !0)
              ]),
              s("div", $0, [
                C0,
                ge(ee, {
                  disabled: e.allowSubmit ? !e.allowSubmit(O.value) : !1
                }, {
                  default: he(() => [
                    ye(M(e.submitLabel), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ])
        ], 2),
        ((W = i.value) == null ? void 0 : W.name) == "ModalLookup" && i.value.ref ? (a(), Y(_, {
          key: 0,
          "ref-info": i.value.ref,
          onDone: c
        }, null, 8, ["ref-info"])) : $("", !0)
      ], 42, y0)) : $("", !0);
    };
  }
}), L0 = { key: 0 }, V0 = { class: "text-red-700" }, M0 = /* @__PURE__ */ s("b", null, "type", -1), S0 = ["onSubmit"], A0 = { key: 0 }, F0 = { key: 2 }, T0 = ["innerHTML"], I0 = { class: "flex justify-end" }, D0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, P0 = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), j0 = { class: "fixed inset-0 overflow-hidden" }, O0 = ["onSubmit"], B0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, E0 = { class: "flex-1" }, R0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, N0 = { class: "flex items-start justify-between space-x-3" }, H0 = { class: "space-y-1" }, z0 = { key: 0 }, U0 = { key: 2 }, q0 = ["innerHTML"], Q0 = { class: "flex h-7 items-center" }, K0 = { class: "flex justify-end" }, G0 = /* @__PURE__ */ se({
  __name: "AutoCreateForm",
  props: {
    type: null,
    formStyle: { default: "slideOver" },
    panelClass: null,
    formClass: null,
    headingClass: null,
    subHeadingClass: null,
    buttonsClass: null,
    heading: null,
    subHeading: null,
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    showCancel: { type: Boolean, default: !0 },
    configureField: null,
    configureFormLayout: null
  },
  emits: ["done", "save", "error"],
  setup(e, { expose: t, emit: l }) {
    const n = e, i = S(), r = S(1);
    t({ forceUpdate: d, props: n, setModel: c, formFields: i });
    function d() {
      var $e, de;
      r.value++, ($e = i.value) == null || $e.forceUpdate();
      const H = We();
      (de = H == null ? void 0 : H.proxy) == null || de.$forceUpdate();
    }
    function c(H) {
      Object.assign(A.value, H), d();
    }
    function m(H) {
    }
    Wt("ModalProvider", {
      openModal: g
    });
    const h = S(), y = S();
    function g(H, $e) {
      h.value = H, y.value = $e;
    }
    async function b(H) {
      y.value && y.value(H), h.value = void 0, y.value = void 0;
    }
    const { typeOf: k, typeProperties: I, Crud: R, createDto: Q, formValues: D } = et(), O = f(() => Pt(n.type)), N = f(() => k(O.value)), A = S((() => typeof n.type == "string" ? Q(n.type) : n.type ? new n.type() : null)()), j = f(() => n.panelClass || Ge.panelClass(n.formStyle)), J = f(() => n.formClass || Ge.formClass(n.formStyle)), C = f(() => n.headingClass || Ge.headingClass(n.formStyle)), z = f(() => n.subHeadingClass || Ge.subHeadingClass(n.formStyle)), K = f(() => n.buttonsClass || Ge.buttonsClass), U = f(() => R.model(N.value)), ee = f(() => {
      var H;
      return n.heading || ((H = k(O.value)) == null ? void 0 : H.description) || (U.value ? `New ${Oe(U.value)}` : Oe(O.value));
    }), _ = S(new Ye());
    let E = Ll(), p = f(() => E.loading.value);
    async function W(H) {
      var ze, te;
      let $e = H.target;
      if (!n.autosave) {
        l("save", new A.value.constructor(D($e, I(N.value))));
        return;
      }
      let de = Ee((ze = A.value) == null ? void 0 : ze.getMethod, (oe) => typeof oe == "function" ? oe() : null) || "POST", be = Ee((te = A.value) == null ? void 0 : te.createResponse, (oe) => typeof oe == "function" ? oe() : null) == null;
      if (Xl.hasRequestBody(de)) {
        let oe = new A.value.constructor(), Ve = new FormData($e);
        be ? _.value = await E.apiFormVoid(oe, Ve, { jsconfig: "eccn" }) : _.value = await E.apiForm(oe, Ve, { jsconfig: "eccn" });
      } else {
        let oe = D($e, I(N.value)), Ve = new A.value.constructor(oe);
        be ? _.value = await E.apiVoid(Ve, { jsconfig: "eccn" }) : _.value = await E.api(Ve, { jsconfig: "eccn" });
      }
      _.value.succeeded ? ($e.reset(), l("save", _.value.response)) : l("error", _.value.error);
    }
    function F() {
      l("done");
    }
    const B = S(!1), ae = S(""), ve = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Dt(B, () => {
      At(ve, ae, B.value), B.value || setTimeout(F, 700);
    }), B.value = !0;
    function ie() {
      n.formStyle == "slideOver" ? B.value = !1 : F();
    }
    const Le = (H) => {
      H.key === "Escape" && ie();
    };
    return at(() => window.addEventListener("keydown", Le)), Gt(() => window.removeEventListener("keydown", Le)), (H, $e) => {
      var Fe, xe, qe, De, T, P, le, ce, Se;
      const de = q("AutoFormFields"), be = q("FormLoading"), ze = q("SecondaryButton"), te = q("PrimaryButton"), oe = q("CloseButton"), Ve = q("ModalLookup");
      return a(), u("div", null, [
        o(N) ? e.formStyle == "card" ? (a(), u("div", {
          key: 1,
          class: x(o(j))
        }, [
          s("form", {
            onSubmit: He(W, ["prevent"])
          }, [
            s("div", {
              class: x(o(J))
            }, [
              s("div", null, [
                H.$slots.heading ? (a(), u("div", A0, [
                  G(H.$slots, "heading")
                ])) : (a(), u("h3", {
                  key: 1,
                  class: x(o(C))
                }, M(o(ee)), 3)),
                H.$slots.subheading ? (a(), u("div", F0, [
                  G(H.$slots, "subheading")
                ])) : e.subHeading ? (a(), u("p", {
                  key: 3,
                  class: x(o(z))
                }, M(e.subHeading), 3)) : (Fe = o(N)) != null && Fe.notes ? (a(), u("p", {
                  key: 4,
                  class: x(["notes", o(z)]),
                  innerHTML: (xe = o(N)) == null ? void 0 : xe.notes
                }, null, 10, T0)) : $("", !0)
              ]),
              G(H.$slots, "header", {
                formInstance: (qe = We()) == null ? void 0 : qe.exposed,
                model: A.value
              }),
              (a(), Y(de, {
                ref_key: "formFields",
                ref: i,
                key: r.value,
                modelValue: A.value,
                "onUpdate:modelValue": m,
                api: _.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              G(H.$slots, "footer", {
                formInstance: (De = We()) == null ? void 0 : De.exposed,
                model: A.value
              })
            ], 2),
            s("div", {
              class: x(o(K))
            }, [
              s("div", null, [
                e.showLoading && o(p) ? (a(), Y(be, { key: 0 })) : $("", !0)
              ]),
              s("div", I0, [
                e.showCancel ? (a(), Y(ze, {
                  key: 0,
                  onClick: ie,
                  disabled: o(p)
                }, {
                  default: he(() => [
                    ye("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"])) : $("", !0),
                ge(te, {
                  type: "submit",
                  class: "ml-4",
                  disabled: o(p)
                }, {
                  default: he(() => [
                    ye("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, S0)
        ], 2)) : (a(), u("div", D0, [
          P0,
          s("div", j0, [
            s("div", {
              onMousedown: ie,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: $e[0] || ($e[0] = He(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: x(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", ae.value])
                }, [
                  s("form", {
                    class: x(o(J)),
                    onSubmit: He(W, ["prevent"])
                  }, [
                    s("div", B0, [
                      s("div", E0, [
                        s("div", R0, [
                          s("div", N0, [
                            s("div", H0, [
                              H.$slots.heading ? (a(), u("div", z0, [
                                G(H.$slots, "heading")
                              ])) : (a(), u("h3", {
                                key: 1,
                                class: x(o(C))
                              }, M(o(ee)), 3)),
                              H.$slots.subheading ? (a(), u("div", U0, [
                                G(H.$slots, "subheading")
                              ])) : e.subHeading ? (a(), u("p", {
                                key: 3,
                                class: x(o(z))
                              }, M(e.subHeading), 3)) : (T = o(N)) != null && T.notes ? (a(), u("p", {
                                key: 4,
                                class: x(["notes", o(z)]),
                                innerHTML: (P = o(N)) == null ? void 0 : P.notes
                              }, null, 10, q0)) : $("", !0)
                            ]),
                            s("div", Q0, [
                              ge(oe, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: ie
                              })
                            ])
                          ])
                        ]),
                        G(H.$slots, "header", {
                          formInstance: (le = We()) == null ? void 0 : le.exposed,
                          model: A.value
                        }),
                        (a(), Y(de, {
                          ref_key: "formFields",
                          ref: i,
                          key: r.value,
                          modelValue: A.value,
                          "onUpdate:modelValue": m,
                          api: _.value,
                          configureField: e.configureField,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
                        G(H.$slots, "footer", {
                          formInstance: (ce = We()) == null ? void 0 : ce.exposed,
                          model: A.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: x(o(K))
                    }, [
                      s("div", null, [
                        e.showLoading && o(p) ? (a(), Y(be, { key: 0 })) : $("", !0)
                      ]),
                      s("div", K0, [
                        e.showCancel ? (a(), Y(ze, {
                          key: 0,
                          onClick: ie,
                          disabled: o(p)
                        }, {
                          default: he(() => [
                            ye("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : $("", !0),
                        ge(te, {
                          type: "submit",
                          class: "ml-4",
                          disabled: o(p)
                        }, {
                          default: he(() => [
                            ye("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, O0)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (a(), u("div", L0, [
          s("p", V0, [
            ye("Could not create form for unknown "),
            M0,
            ye(" " + M(o(O)), 1)
          ])
        ])),
        ((Se = h.value) == null ? void 0 : Se.name) == "ModalLookup" && h.value.ref ? (a(), Y(Ve, {
          key: 3,
          "ref-info": h.value.ref,
          onDone: b
        }, null, 8, ["ref-info"])) : $("", !0)
      ]);
    };
  }
}), W0 = { key: 0 }, Z0 = { class: "text-red-700" }, J0 = /* @__PURE__ */ s("b", null, "type", -1), X0 = ["onSubmit"], Y0 = { key: 0 }, ef = { key: 2 }, tf = ["innerHTML"], lf = { class: "flex justify-end" }, nf = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, sf = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), of = { class: "fixed inset-0 overflow-hidden" }, af = ["onSubmit"], rf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, uf = { class: "flex-1" }, df = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, cf = { class: "flex items-start justify-between space-x-3" }, ff = { class: "space-y-1" }, mf = { key: 0 }, vf = { key: 2 }, hf = ["innerHTML"], gf = { class: "flex h-7 items-center" }, pf = { class: "flex justify-end" }, yf = /* @__PURE__ */ se({
  __name: "AutoEditForm",
  props: {
    modelValue: null,
    type: null,
    deleteType: null,
    formStyle: { default: "slideOver" },
    panelClass: null,
    formClass: null,
    headingClass: null,
    subHeadingClass: null,
    heading: null,
    subHeading: null,
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    configureField: null,
    configureFormLayout: null
  },
  emits: ["done", "save", "delete", "error"],
  setup(e, { expose: t, emit: l }) {
    const n = e, i = S(), r = S(1);
    t({ forceUpdate: d, props: n, setModel: c, formFields: i });
    function d() {
      var oe;
      r.value++, C.value = J();
      const te = We();
      (oe = te == null ? void 0 : te.proxy) == null || oe.$forceUpdate();
    }
    function c(te) {
      Object.assign(C.value, te);
    }
    function m(te) {
    }
    Wt("ModalProvider", {
      openModal: g
    });
    const h = S(), y = S();
    function g(te, oe) {
      h.value = te, y.value = oe;
    }
    async function b(te) {
      y.value && y.value(te), h.value = void 0, y.value = void 0;
    }
    const { typeOf: k, apiOf: I, typeProperties: R, createFormLayout: Q, getPrimaryKey: D, Crud: O, createDto: N, formValues: V } = et(), A = f(() => Pt(n.type)), j = f(() => k(A.value)), J = () => typeof n.type == "string" ? N(n.type, ul(n.modelValue)) : n.type ? new n.type(ul(n.modelValue)) : null, C = S(J()), z = f(() => n.panelClass || Ge.panelClass(n.formStyle)), K = f(() => n.formClass || Ge.formClass(n.formStyle)), U = f(() => n.headingClass || Ge.headingClass(n.formStyle)), ee = f(() => n.subHeadingClass || Ge.subHeadingClass(n.formStyle)), _ = f(() => O.model(j.value)), E = f(() => {
      var te;
      return n.heading || ((te = k(A.value)) == null ? void 0 : te.description) || (_.value ? `Update ${Oe(_.value)}` : Oe(A.value));
    }), p = S(new Ye());
    let W = Ll(), F = f(() => W.loading.value);
    const B = () => Ee(k(O.model(j.value)), (te) => D(te));
    function ae(te) {
      const { op: oe, prop: Ve } = te;
      oe && (O.isPatch(oe) || O.isUpdate(oe)) && (te.disabled = Ve == null ? void 0 : Ve.isPrimaryKey), n.configureField && n.configureField(te);
    }
    async function ve(te) {
      var qe, De;
      let oe = te.target;
      if (!n.autosave) {
        l("save", new C.value.constructor(V(oe, R(j.value))));
        return;
      }
      let Ve = Ee((qe = C.value) == null ? void 0 : qe.getMethod, (T) => typeof T == "function" ? T() : null) || "POST", Fe = Ee((De = C.value) == null ? void 0 : De.createResponse, (T) => typeof T == "function" ? T() : null) == null, xe = B();
      if (Xl.hasRequestBody(Ve)) {
        let T = new C.value.constructor(), P = fe(n.modelValue, xe.name), le = new FormData(oe);
        xe && !Array.from(le.keys()).some((Ue) => Ue.toLowerCase() == xe.name.toLowerCase()) && le.append(xe.name, P);
        let ce = [];
        const Se = A.value && I(A.value);
        if (Se && O.isPatch(Se)) {
          let Ue = ul(n.modelValue), Ce = Q(j.value), Te = {};
          if (xe && (Te[xe.name] = P), Ce.forEach((Ie) => {
            let Ke = Ie.id, mt = fe(Ue, Ke);
            if (xe && xe.name.toLowerCase() === Ke.toLowerCase())
              return;
            let ut = le.get(Ke), Yt = ut != null, el = Ie.type === "checkbox" ? Yt !== !!mt : Ie.type === "file" ? Yt : ut != mt;
            !ut && !mt && (el = !1), el && (ut ? Te[Ke] = ut : Ie.type !== "file" && ce.push(Ke));
          }), Array.from(le.keys()).filter((Ie) => !Te[Ie]).forEach((Ie) => le.delete(Ie)), Array.from(le.keys()).filter((Ie) => Ie.toLowerCase() != xe.name.toLowerCase()).length == 0 && ce.length == 0) {
            be();
            return;
          }
        }
        const Be = ce.length > 0 ? { jsconfig: "eccn", reset: ce } : { jsconfig: "eccn" };
        Fe ? p.value = await W.apiFormVoid(T, le, Be) : p.value = await W.apiForm(T, le, Be);
      } else {
        let T = V(oe, R(j.value));
        xe && !fe(T, xe.name) && (T[xe.name] = fe(n.modelValue, xe.name));
        let P = new C.value.constructor(T);
        Fe ? p.value = await W.apiVoid(P, { jsconfig: "eccn" }) : p.value = await W.api(P, { jsconfig: "eccn" });
      }
      p.value.succeeded ? (oe.reset(), l("save", p.value.response)) : l("error", p.value.error);
    }
    async function ie(te) {
      let oe = B();
      const Ve = oe ? fe(n.modelValue, oe.name) : null;
      if (!Ve) {
        console.error(`Could not find Primary Key for Type ${A.value} (${_.value})`);
        return;
      }
      const Fe = { [oe.name]: Ve }, xe = typeof n.deleteType == "string" ? N(n.deleteType, Fe) : n.deleteType ? new n.deleteType(Fe) : null;
      Ee(xe.createResponse, (De) => typeof De == "function" ? De() : null) == null ? p.value = await W.apiVoid(xe) : p.value = await W.api(xe), p.value.succeeded ? l("delete", p.value.response) : l("error", p.value.error);
    }
    function Le() {
      l("done");
    }
    const H = S(!1), $e = S(""), de = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Dt(H, () => {
      At(de, $e, H.value), H.value || setTimeout(Le, 700);
    }), H.value = !0;
    function be() {
      n.formStyle == "slideOver" ? H.value = !1 : Le();
    }
    const ze = (te) => {
      te.key === "Escape" && be();
    };
    return at(() => window.addEventListener("keydown", ze)), Gt(() => window.removeEventListener("keydown", ze)), (te, oe) => {
      var le, ce, Se, Be, Ue, Ce, Te, tt, Ie;
      const Ve = q("AutoFormFields"), Fe = q("ConfirmDelete"), xe = q("FormLoading"), qe = q("SecondaryButton"), De = q("PrimaryButton"), T = q("CloseButton"), P = q("ModalLookup");
      return a(), u("div", null, [
        o(j) ? e.formStyle == "card" ? (a(), u("div", {
          key: 1,
          class: x(o(z))
        }, [
          s("form", {
            onSubmit: He(ve, ["prevent"])
          }, [
            s("div", {
              class: x(o(K))
            }, [
              s("div", null, [
                te.$slots.heading ? (a(), u("div", Y0, [
                  G(te.$slots, "heading")
                ])) : (a(), u("h3", {
                  key: 1,
                  class: x(o(U))
                }, M(o(E)), 3)),
                te.$slots.subheading ? (a(), u("div", ef, [
                  G(te.$slots, "subheading")
                ])) : e.subHeading ? (a(), u("p", {
                  key: 3,
                  class: x(o(ee))
                }, M(e.subHeading), 3)) : (le = o(j)) != null && le.notes ? (a(), u("p", {
                  key: 4,
                  class: x(["notes", o(ee)]),
                  innerHTML: (ce = o(j)) == null ? void 0 : ce.notes
                }, null, 10, tf)) : $("", !0)
              ]),
              G(te.$slots, "header", {
                formInstance: (Se = We()) == null ? void 0 : Se.exposed,
                model: C.value
              }),
              (a(), Y(Ve, {
                ref_key: "formFields",
                ref: i,
                key: r.value,
                modelValue: C.value,
                "onUpdate:modelValue": m,
                api: p.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              G(te.$slots, "footer", {
                formInstance: (Be = We()) == null ? void 0 : Be.exposed,
                model: C.value
              })
            ], 2),
            s("div", {
              class: x(o(Ge).buttonsClass)
            }, [
              s("div", null, [
                e.deleteType ? (a(), Y(Fe, {
                  key: 0,
                  onDelete: ie
                })) : $("", !0)
              ]),
              s("div", null, [
                e.showLoading && o(F) ? (a(), Y(xe, { key: 0 })) : $("", !0)
              ]),
              s("div", lf, [
                ge(qe, {
                  onClick: be,
                  disabled: o(F)
                }, {
                  default: he(() => [
                    ye("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                ge(De, {
                  type: "submit",
                  class: "ml-4",
                  disabled: o(F)
                }, {
                  default: he(() => [
                    ye("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, X0)
        ], 2)) : (a(), u("div", nf, [
          sf,
          s("div", of, [
            s("div", {
              onMousedown: be,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: oe[0] || (oe[0] = He(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: x(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", $e.value])
                }, [
                  s("form", {
                    class: x(o(K)),
                    onSubmit: He(ve, ["prevent"])
                  }, [
                    s("div", rf, [
                      s("div", uf, [
                        s("div", df, [
                          s("div", cf, [
                            s("div", ff, [
                              te.$slots.heading ? (a(), u("div", mf, [
                                G(te.$slots, "heading")
                              ])) : (a(), u("h3", {
                                key: 1,
                                class: x(o(U))
                              }, M(o(E)), 3)),
                              te.$slots.subheading ? (a(), u("div", vf, [
                                G(te.$slots, "subheading")
                              ])) : e.subHeading ? (a(), u("p", {
                                key: 3,
                                class: x(o(ee))
                              }, M(e.subHeading), 3)) : (Ue = o(j)) != null && Ue.notes ? (a(), u("p", {
                                key: 4,
                                class: x(["notes", o(ee)]),
                                innerHTML: (Ce = o(j)) == null ? void 0 : Ce.notes
                              }, null, 10, hf)) : $("", !0)
                            ]),
                            s("div", gf, [
                              ge(T, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: be
                              })
                            ])
                          ])
                        ]),
                        G(te.$slots, "header", {
                          formInstance: (Te = We()) == null ? void 0 : Te.exposed,
                          model: C.value
                        }),
                        (a(), Y(Ve, {
                          ref_key: "formFields",
                          ref: i,
                          key: r.value,
                          modelValue: C.value,
                          "onUpdate:modelValue": m,
                          api: p.value,
                          configureField: ae,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureFormLayout"])),
                        G(te.$slots, "footer", {
                          formInstance: (tt = We()) == null ? void 0 : tt.exposed,
                          model: C.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: x(o(Ge).buttonsClass)
                    }, [
                      s("div", null, [
                        e.deleteType ? (a(), Y(Fe, {
                          key: 0,
                          onDelete: ie
                        })) : $("", !0)
                      ]),
                      s("div", null, [
                        e.showLoading && o(F) ? (a(), Y(xe, { key: 0 })) : $("", !0)
                      ]),
                      s("div", pf, [
                        ge(qe, {
                          onClick: be,
                          disabled: o(F)
                        }, {
                          default: he(() => [
                            ye("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        ge(De, {
                          type: "submit",
                          class: "ml-4",
                          disabled: o(F)
                        }, {
                          default: he(() => [
                            ye("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, af)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (a(), u("div", W0, [
          s("p", Z0, [
            ye("Could not create form for unknown "),
            J0,
            ye(" " + M(o(A)), 1)
          ])
        ])),
        ((Ie = h.value) == null ? void 0 : Ie.name) == "ModalLookup" && h.value.ref ? (a(), Y(P, {
          key: 3,
          "ref-info": h.value.ref,
          onDone: b
        }, null, 8, ["ref-info"])) : $("", !0)
      ]);
    };
  }
}), bf = /* @__PURE__ */ s("label", {
  for: "confirmDelete",
  class: "ml-2 mr-2 select-none"
}, "confirm", -1), wf = ["onClick"], xf = /* @__PURE__ */ se({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: t }) {
    let l = S(!1);
    const n = () => {
      l.value && t("delete");
    }, i = f(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      l.value ? "cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400"
    ]);
    return (r, d) => (a(), u(ke, null, [
      xt(s("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": d[0] || (d[0] = (c) => Hn(l) ? l.value = c : l = c)
      }, null, 512), [
        [Wl, o(l)]
      ]),
      bf,
      s("span", _e({
        onClick: He(n, ["prevent"]),
        class: o(i)
      }, r.$attrs), [
        G(r.$slots, "default", {}, () => [
          ye("Delete")
        ])
      ], 16, wf)
    ], 64));
  }
}), kf = {
  class: "flex",
  title: "loading..."
}, $f = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "30px",
  viewBox: "0 0 24 30"
}, Cf = /* @__PURE__ */ gl('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>', 3), _f = [
  Cf
], Lf = { class: "ml-2 mt-1 text-gray-400" }, Vf = /* @__PURE__ */ se({
  __name: "FormLoading",
  props: {
    icon: { type: Boolean, default: !0 },
    text: { default: "loading..." }
  },
  setup(e) {
    return Ne("ApiState", void 0), (t, l) => (a(), u("div", kf, [
      e.icon ? (a(), u("svg", $f, _f)) : $("", !0),
      s("span", Lf, M(e.text), 1)
    ]));
  }
}), Mf = ["onClick"], Sf = {
  key: 3,
  class: "flex justify-between items-center"
}, Af = { class: "mr-1 select-none" }, Ff = ["onClick"], Tf = /* @__PURE__ */ se({
  __name: "DataGrid",
  props: {
    items: { default: () => [] },
    id: { default: "DataGrid" },
    type: null,
    tableStyle: { default: "stripedRows" },
    selectedColumns: null,
    gridClass: null,
    grid2Class: null,
    grid3Class: null,
    grid4Class: null,
    tableClass: null,
    theadClass: null,
    tbodyClass: null,
    theadRowClass: null,
    theadCellClass: null,
    isSelected: null,
    headerTitle: null,
    headerTitles: null,
    visibleFrom: null,
    rowClass: null,
    rowStyle: null
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { emit: t }) {
    const l = e, n = S(), i = S(null), r = (F) => i.value === F, d = Zl(), c = (F) => Object.keys(d).find((B) => B.toLowerCase() == F.toLowerCase() + "-header"), m = (F) => Object.keys(d).find((B) => B.toLowerCase() == F.toLowerCase()), v = f(() => El(l.items).filter((F) => !!(d[F] || d[F + "-header"]))), { typeOf: h, typeProperties: y } = et(), g = f(() => Pt(l.type)), b = f(() => h(g.value)), k = f(() => y(b.value));
    function I(F) {
      const B = l.headerTitles && fe(l.headerTitles, F) || F;
      return l.headerTitle ? l.headerTitle(B) : Kn(B);
    }
    function R(F) {
      const B = F.toLowerCase();
      return k.value.find((ae) => ae.name.toLowerCase() == B);
    }
    function Q(F) {
      const B = R(F);
      return B != null && B.format ? B.format : (B == null ? void 0 : B.type) == "TimeSpan" || (B == null ? void 0 : B.type) == "TimeOnly" ? { method: "time" } : null;
    }
    const D = {
      xs: "xs:table-cell",
      sm: "sm:table-cell",
      md: "md:table-cell",
      lg: "lg:table-cell",
      xl: "xl:table-cell",
      "2xl": "2xl:table-cell",
      never: ""
    };
    function O(F) {
      const B = l.visibleFrom && fe(l.visibleFrom, F);
      return B && Ee(D[B], (ae) => `hidden ${ae}`);
    }
    const N = f(() => l.gridClass ?? ue.getGridClass(l.tableStyle)), V = f(() => l.grid2Class ?? ue.getGrid2Class(l.tableStyle)), A = f(() => l.grid3Class ?? ue.getGrid3Class(l.tableStyle)), j = f(() => l.grid4Class ?? ue.getGrid4Class(l.tableStyle)), J = f(() => l.tableClass ?? ue.getTableClass(l.tableStyle)), C = f(() => l.tbodyClass ?? ue.getTbodyClass(l.tbodyClass)), z = f(() => l.theadClass ?? ue.getTheadClass(l.tableStyle)), K = f(() => l.theadRowClass ?? ue.getTheadRowClass(l.tableStyle)), U = f(() => l.theadCellClass ?? ue.getTheadCellClass(l.tableStyle));
    function ee(F, B) {
      return l.rowClass ? l.rowClass(F, B) : ue.getTableRowClass(l.tableStyle, B, !!(l.isSelected && l.isSelected(F)), l.isSelected != null);
    }
    function _(F, B) {
      return l.rowStyle ? l.rowStyle(F, B) : void 0;
    }
    const E = f(() => {
      const F = (typeof l.selectedColumns == "string" ? l.selectedColumns.split(",") : l.selectedColumns) || (v.value.length > 0 ? v.value : El(l.items)), B = k.value.reduce((ae, ve) => (ae[ve.name.toLowerCase()] = ve.format, ae), {});
      return F.filter((ae) => {
        var ve;
        return ((ve = B[ae.toLowerCase()]) == null ? void 0 : ve.method) != "hidden";
      });
    });
    function p(F, B) {
      t("headerSelected", B, F);
    }
    function W(F, B, ae) {
      t("rowSelected", ae, F);
    }
    return (F, B) => {
      const ae = q("CellFormat"), ve = q("PreviewFormat");
      return e.items.length ? (a(), u("div", {
        key: 0,
        ref_key: "refResults",
        ref: n,
        class: x(o(N))
      }, [
        s("div", {
          class: x(o(V))
        }, [
          s("div", {
            class: x(o(A))
          }, [
            s("div", {
              class: x(o(j))
            }, [
              s("table", {
                class: x(o(J))
              }, [
                s("thead", {
                  class: x(o(z))
                }, [
                  s("tr", {
                    class: x(o(K))
                  }, [
                    (a(!0), u(ke, null, Me(o(E), (ie) => (a(), u("td", {
                      class: x([O(ie), o(U), r(ie) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      s("div", {
                        onClick: (Le) => p(Le, ie)
                      }, [
                        o(d)[ie + "-header"] ? G(F.$slots, ie + "-header", {
                          key: 0,
                          column: ie
                        }) : c(ie) ? G(F.$slots, c(ie), {
                          key: 1,
                          column: ie
                        }) : o(d).header ? G(F.$slots, "header", {
                          key: 2,
                          column: ie,
                          label: I(ie)
                        }) : (a(), u("div", Sf, [
                          s("span", Af, M(I(ie)), 1)
                        ]))
                      ], 8, Mf)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                s("tbody", {
                  class: x(o(C))
                }, [
                  (a(!0), u(ke, null, Me(e.items, (ie, Le) => (a(), u("tr", {
                    class: x(ee(ie, Le)),
                    style: Gl(_(ie, Le)),
                    onClick: (H) => W(H, Le, ie)
                  }, [
                    (a(!0), u(ke, null, Me(o(E), (H) => (a(), u("td", {
                      class: x([O(H), o(ue).tableCellClass])
                    }, [
                      o(d)[H] ? G(F.$slots, H, St(_e({ key: 0 }, ie))) : m(H) ? G(F.$slots, m(H), St(_e({ key: 1 }, ie))) : R(H) ? (a(), Y(ae, {
                        key: 2,
                        type: o(b),
                        propType: R(H),
                        modelValue: ie
                      }, null, 8, ["type", "propType", "modelValue"])) : (a(), Y(ve, {
                        key: 3,
                        value: o(fe)(ie, H),
                        format: Q(H)
                      }, null, 8, ["value", "format"]))
                    ], 2))), 256))
                  ], 14, Ff))), 256))
                ], 2)
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 2)) : $("", !0);
    };
  }
}), If = se({
  props: {
    type: Object,
    propType: Object,
    modelValue: Object
  },
  setup(e, { attrs: t }) {
    const { typeOf: l } = et();
    function n(i) {
      return i != null && i.format ? i.format : (i == null ? void 0 : i.type) == "TimeSpan" || (i == null ? void 0 : i.type) == "TimeOnly" ? { method: "time" } : null;
    }
    return () => {
      var Q;
      const i = n(e.propType), r = fe(e.modelValue, e.propType.name), d = Object.assign({}, e, t), c = gt("span", { innerHTML: Kt(r, i, d) }), m = Ut(r) && Array.isArray(r) ? gt("span", {}, [
        gt("span", { class: "mr-2" }, `${r.length}`),
        c
      ]) : c, v = (Q = e.propType) == null ? void 0 : Q.ref;
      if (!v)
        return m;
      const y = Ze(e.type).find((D) => D.type === v.model);
      if (!y)
        return m;
      const g = fe(e.modelValue, y.name), b = g && v.refLabel && fe(g, v.refLabel);
      if (!b)
        return m;
      const k = l(v.model), I = k == null ? void 0 : k.icon, R = I ? gt(Ts, { image: I, class: "w-5 h-5 mr-1" }) : null;
      return gt("span", { class: "flex", title: `${v.model} ${r}` }, [
        R,
        b
      ]);
    };
  }
}), Df = { key: 0 }, Pf = {
  key: 0,
  class: "mr-2"
}, jf = ["innerHTML"], Of = ["innerHTML"], Bf = {
  inheritAttrs: !1
}, Ef = /* @__PURE__ */ se({
  ...Bf,
  __name: "PreviewFormat",
  props: {
    value: null,
    format: null,
    includeIcon: { type: Boolean, default: !0 },
    includeCount: { type: Boolean, default: !0 },
    maxFieldLength: { default: 150 },
    maxNestedFields: { default: 2 },
    maxNestedFieldLength: { default: 30 }
  },
  setup(e) {
    const t = e, l = f(() => Array.isArray(t.value));
    return (n, i) => o(Ut)(e.value) ? (a(), u("span", Df, [
      e.includeCount && o(l) ? (a(), u("span", Pf, M(e.value.length), 1)) : $("", !0),
      s("span", {
        innerHTML: o(Kt)(e.value, e.format, n.$attrs)
      }, null, 8, jf)
    ])) : (a(), u("span", {
      key: 1,
      innerHTML: o(Kt)(e.value, e.format, n.$attrs)
    }, null, 8, Of));
  }
}), Rf = ["innerHTML"], Nf = { key: 0 }, Hf = /* @__PURE__ */ s("b", null, null, -1), zf = { key: 2 }, Uf = /* @__PURE__ */ se({
  __name: "HtmlFormat",
  props: {
    value: null,
    depth: { default: 0 },
    fieldAttrs: null,
    classes: { type: Function, default: (e, t, l, n, i) => n }
  },
  setup(e) {
    const t = e, l = f(() => $t(t.value)), n = f(() => Array.isArray(t.value)), i = (m) => Kn(m), r = (m) => t.fieldAttrs ? t.fieldAttrs(m) : null, d = f(() => El(t.value)), c = (m) => m ? Object.keys(m).map((v) => ({ key: i(v), val: m[v] })) : [];
    return (m, v) => {
      const h = q("HtmlFormat", !0);
      return a(), u("div", {
        class: x(e.depth == 0 ? "prose html-format" : "")
      }, [
        o(l) ? (a(), u("div", {
          key: 0,
          innerHTML: o(Kt)(e.value)
        }, null, 8, Rf)) : o(n) ? (a(), u("div", {
          key: 1,
          class: x(e.classes("array", "div", e.depth, o(ue).gridClass))
        }, [
          o($t)(e.value[0]) ? (a(), u("div", Nf, "[ " + M(e.value.join(", ")) + " ]", 1)) : (a(), u("div", {
            key: 1,
            class: x(e.classes("array", "div", e.depth, o(ue).grid2Class))
          }, [
            s("div", {
              class: x(e.classes("array", "div", e.depth, o(ue).grid3Class))
            }, [
              s("div", {
                class: x(e.classes("array", "div", e.depth, o(ue).grid4Class))
              }, [
                s("table", {
                  class: x(e.classes("object", "table", e.depth, o(ue).tableClass))
                }, [
                  s("thead", {
                    class: x(e.classes("array", "thead", e.depth, o(ue).theadClass))
                  }, [
                    s("tr", null, [
                      (a(!0), u(ke, null, Me(o(d), (y) => (a(), u("th", {
                        class: x(e.classes("array", "th", e.depth, o(ue).theadCellClass + " whitespace-nowrap"))
                      }, [
                        Hf,
                        ye(M(i(y)), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  s("tbody", null, [
                    (a(!0), u(ke, null, Me(e.value, (y, g) => (a(), u("tr", {
                      class: x(e.classes("array", "tr", e.depth, g % 2 == 0 ? "bg-white" : "bg-gray-50", g))
                    }, [
                      (a(!0), u(ke, null, Me(o(d), (b) => (a(), u("td", {
                        class: x(e.classes("array", "td", e.depth, o(ue).tableCellClass))
                      }, [
                        ge(h, _e({
                          value: y[b],
                          "field-attrs": e.fieldAttrs,
                          depth: e.depth + 1,
                          classes: e.classes
                        }, r(b)), null, 16, ["value", "field-attrs", "depth", "classes"])
                      ], 2))), 256))
                    ], 2))), 256))
                  ])
                ], 2)
              ], 2)
            ], 2)
          ], 2))
        ], 2)) : (a(), u("div", zf, [
          s("table", {
            class: x(e.classes("object", "table", e.depth, "table-object"))
          }, [
            (a(!0), u(ke, null, Me(c(e.value), (y) => (a(), u("tr", {
              class: x(e.classes("object", "tr", e.depth, ""))
            }, [
              s("th", {
                class: x(e.classes("object", "th", e.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, M(y.key), 3),
              s("td", {
                class: x(e.classes("object", "td", e.depth, "align-top py-2 px-4 text-sm"))
              }, [
                ge(h, _e({
                  value: y.val,
                  "field-attrs": e.fieldAttrs,
                  depth: e.depth + 1,
                  classes: e.classes
                }, r(y.key)), null, 16, ["value", "field-attrs", "depth", "classes"])
              ], 2)
            ], 2))), 256))
          ], 2)
        ]))
      ], 2);
    };
  }
}), qf = { class: "absolute top-0 right-0 pt-4 pr-4" }, Qf = /* @__PURE__ */ s("span", { class: "sr-only" }, "Close", -1), Kf = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Gf = [
  Qf,
  Kf
], Wf = /* @__PURE__ */ se({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    return (l, n) => (a(), u("div", qf, [
      s("button", {
        type: "button",
        onClick: n[0] || (n[0] = (i) => l.$emit("close")),
        class: x([e.buttonClass, "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, Gf, 2)
    ]));
  }
}), Zf = ["id", "aria-labelledby"], Jf = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), Xf = { class: "fixed inset-0 overflow-hidden" }, Yf = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, em = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, tm = { class: "flex-1" }, lm = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, nm = { class: "flex items-start justify-between space-x-3" }, sm = { class: "space-y-1" }, om = ["id"], am = {
  key: 1,
  class: "text-sm text-gray-500"
}, im = { class: "flex h-7 items-center" }, rm = { class: "flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6" }, um = /* @__PURE__ */ se({
  __name: "SlideOver",
  props: {
    id: { default: "SlideOver" },
    title: null,
    contentClass: { default: "relative mt-6 flex-1 px-4 sm:px-6" }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = S(!1), n = S(""), i = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Dt(l, () => {
      At(i, n, l.value), l.value || setTimeout(() => t("done"), 700);
    }), l.value = !0;
    const r = () => l.value = !1, d = (c) => {
      c.key === "Escape" && r();
    };
    return at(() => window.addEventListener("keydown", d)), Gt(() => window.removeEventListener("keydown", d)), (c, m) => {
      const v = q("CloseButton");
      return a(), u("div", {
        id: e.id,
        class: "relative z-10",
        "aria-labelledby": e.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        Jf,
        s("div", Xf, [
          s("div", {
            onMousedown: r,
            class: "absolute inset-0 overflow-hidden"
          }, [
            s("div", {
              onMousedown: m[0] || (m[0] = He(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              s("div", {
                class: x(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", n.value])
              }, [
                s("div", Yf, [
                  s("div", em, [
                    s("div", tm, [
                      s("div", lm, [
                        s("div", nm, [
                          s("div", sm, [
                            e.title ? (a(), u("h2", {
                              key: 0,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: e.id + "-title"
                            }, M(e.title), 9, om)) : $("", !0),
                            c.$slots.subtitle ? (a(), u("p", am, [
                              G(c.$slots, "subtitle")
                            ])) : $("", !0)
                          ]),
                          s("div", im, [
                            ge(v, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: r
                            })
                          ])
                        ])
                      ]),
                      s("div", {
                        class: x(e.contentClass)
                      }, [
                        G(c.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  s("div", rm, [
                    G(c.$slots, "footer")
                  ])
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, Zf);
    };
  }
}), dm = ["id", "data-transition-for", "aria-labelledby"], cm = { class: "fixed inset-0 z-10 overflow-y-auto" }, fm = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, mm = /* @__PURE__ */ s("span", { class: "sr-only" }, "Close", -1), vm = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), hm = [
  mm,
  vm
], gm = /* @__PURE__ */ se({
  __name: "ModalDialog",
  props: {
    id: { default: "ModalDialog" },
    modalClass: { default: Kl.modalClass },
    sizeClass: { default: Kl.sizeClass }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = S(!1), n = S(""), i = {
      entering: { cls: "ease-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100", to: "opacity-0" }
    }, r = S(""), d = {
      entering: { cls: "ease-out duration-300", from: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", to: "opacity-100 translate-y-0 sm:scale-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100 translate-y-0 sm:scale-100", to: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }
    };
    Dt(l, () => {
      At(i, n, l.value), At(d, r, l.value), l.value || setTimeout(() => t("done"), 200);
    }), l.value = !0;
    const c = () => l.value = !1;
    Wt("ModalProvider", {
      openModal: y
    });
    const v = S(), h = S();
    function y(k, I) {
      v.value = k, h.value = I;
    }
    async function g(k) {
      h.value && h.value(k), v.value = void 0, h.value = void 0;
    }
    const b = (k) => {
      k.key === "Escape" && c();
    };
    return at(() => window.addEventListener("keydown", b)), Gt(() => window.removeEventListener("keydown", b)), (k, I) => {
      var Q;
      const R = q("ModalLookup");
      return a(), u("div", {
        id: e.id,
        "data-transition-for": e.id,
        onMousedown: c,
        class: "relative z-10",
        "aria-labelledby": `${e.id}-title`,
        role: "dialog",
        "aria-modal": "true"
      }, [
        s("div", {
          class: x(["fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", n.value])
        }, null, 2),
        s("div", cm, [
          s("div", fm, [
            s("div", {
              class: x([e.modalClass, e.sizeClass, r.value]),
              onMousedown: I[0] || (I[0] = He(() => {
              }, ["stop"]))
            }, [
              s("div", null, [
                s("div", { class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10" }, [
                  s("button", {
                    type: "button",
                    onClick: c,
                    class: "bg-white dark:bg-black rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
                  }, hm)
                ]),
                G(k.$slots, "default")
              ])
            ], 34)
          ])
        ]),
        ((Q = v.value) == null ? void 0 : Q.name) == "ModalLookup" && v.value.ref ? (a(), Y(R, {
          key: 0,
          "ref-info": v.value.ref,
          onDone: g
        }, null, 8, ["ref-info"])) : $("", !0)
      ], 40, dm);
    };
  }
}), pm = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, ym = { class: "mt-3 pl-5 flex flex-wrap items-center" }, bm = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, wm = { class: "hidden md:inline" }, xm = { class: "flex pb-1 sm:pb-0" }, km = ["title"], $m = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ s("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), Cm = [
  $m
], _m = ["disabled"], Lm = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), Vm = [
  Lm
], Mm = ["disabled"], Sm = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), Am = [
  Sm
], Fm = ["disabled"], Tm = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), Im = [
  Tm
], Dm = ["disabled"], Pm = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), jm = [
  Pm
], Om = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, Bm = { class: "px-4 text-lg text-black dark:text-white" }, Em = { key: 0 }, Rm = { key: 1 }, Nm = /* @__PURE__ */ s("span", { class: "hidden xl:inline" }, " Showing Results ", -1), Hm = { key: 2 }, zm = {
  key: 1,
  class: "pl-2"
}, Um = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), qm = [
  Um
], Qm = { class: "flex pb-1 sm:pb-0" }, Km = {
  key: 0,
  class: "pl-2"
}, Gm = /* @__PURE__ */ s("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), Wm = { class: "mr-1" }, Zm = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Jm = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), Xm = [
  Jm
], Ym = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, e1 = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), t1 = [
  e1
], l1 = { key: 1 }, n1 = { key: 4 }, s1 = { key: 0 }, o1 = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, a1 = { class: "mr-1 select-none" }, i1 = {
  key: 1,
  class: "flex justify-between items-center"
}, r1 = { class: "mr-1 select-none" }, u1 = /* @__PURE__ */ se({
  __name: "ModalLookup",
  props: {
    id: { default: "ModalLookup" },
    refInfo: null,
    skip: { default: 0 },
    prefs: null,
    selectedColumns: null,
    allowFiltering: { type: [Boolean, null], default: !0 },
    showPreferences: { type: [Boolean, null], default: !0 },
    showPagingNav: { type: [Boolean, null], default: !0 },
    showPagingInfo: { type: [Boolean, null], default: !0 },
    showResetPreferences: { type: [Boolean, null], default: !0 },
    showFiltersView: { type: [Boolean, null], default: !0 },
    toolbarButtonClass: null,
    canFilter: null
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = e, n = Zl(), { config: i } = _t(), { metadataApi: r, filterDefinitions: d } = et(), c = Ne("client"), m = i.value.storage, v = f(() => l.toolbarButtonClass ?? ue.toolbarButtonClass), h = f(() => d.value), y = 25, g = S({ take: y }), b = S(new Ye()), k = S(l.skip), I = S(!1), R = S(), Q = (T) => typeof T == "string" ? T.split(",") : T || [];
    function D(T, P) {
      return ue.getTableRowClass("fullWidth", P, !1, !0);
    }
    function O() {
      let T = Q(l.selectedColumns);
      return T.length > 0 ? T : [];
    }
    const N = f(() => rt(l.refInfo.model)), V = f(() => {
      let P = O().map((ce) => ce.toLowerCase());
      const le = Ze(N.value);
      return P.length > 0 ? P.map((ce) => le.find((Se) => Se.name.toLowerCase() === ce)).filter((ce) => ce != null) : le;
    }), A = f(() => {
      let T = V.value.map((le) => le.name), P = Q(g.value.selectedColumns).map((le) => le.toLowerCase());
      return P.length > 0 ? T.filter((le) => P.includes(le.toLowerCase())) : T;
    }), j = f(() => g.value.take ?? y), J = f(() => b.value.response ? fe(b.value.response, "results") : []), C = f(() => {
      var T;
      return ((T = b.value.response) == null ? void 0 : T.total) ?? J.value.length ?? 0;
    }), z = f(() => k.value > 0), K = f(() => k.value > 0), U = f(() => J.value.length >= j.value), ee = f(() => J.value.length >= j.value), _ = S([]), E = f(() => _.value.some((T) => T.settings.filters.length > 0 || !!T.settings.sort)), p = f(() => _.value.map((T) => T.settings.filters.length).reduce((T, P) => T + P, 0)), W = f(() => Jt(N.value)), F = f(() => {
      var T;
      return (T = r.value) == null ? void 0 : T.operations.find((P) => {
        var le;
        return ((le = P.dataModel) == null ? void 0 : le.name) == l.refInfo.model && je.isAnyQuery(P);
      });
    }), B = S(), ae = S(!1), ve = S(), ie = () => `${l.id}/ApiPrefs/${l.refInfo.model}`, Le = (T) => `Column/${l.id}:${l.refInfo.model}.${T}`;
    async function H(T) {
      k.value += T, k.value < 0 && (k.value = 0);
      var P = Math.floor(C.value / j.value) * j.value;
      k.value > P && (k.value = P), await Fe();
    }
    async function $e(T, P) {
      t("done", T);
    }
    function de() {
      t("done", null);
    }
    function be(T, P) {
      var ce, Se, Be;
      let le = P.target;
      if ((le == null ? void 0 : le.tagName) !== "TD") {
        let Ue = (ce = le == null ? void 0 : le.closest("TABLE")) == null ? void 0 : ce.getBoundingClientRect(), Ce = _.value.find((Te) => Te.name.toLowerCase() == T.toLowerCase());
        if (Ce && Ue) {
          let Te = 318, Ie = (((Se = P.target) == null ? void 0 : Se.tagName) === "DIV" ? P.target : (Be = P.target) == null ? void 0 : Be.closest("DIV")).getBoundingClientRect(), Ke = Te + 25;
          ve.value = {
            column: Ce,
            topLeft: {
              x: Math.max(Math.floor(Ie.x + 25), Ke),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function ze() {
      ve.value = null;
    }
    async function te(T) {
      var le;
      let P = (le = ve.value) == null ? void 0 : le.column;
      P && (P.settings = T, m.setItem(Le(P.name), JSON.stringify(P.settings)), await Fe()), ve.value = null;
    }
    async function oe(T) {
      m.setItem(Le(T.name), JSON.stringify(T.settings)), await Fe();
    }
    async function Ve(T) {
      ae.value = !1, g.value = T, m.setItem(ie(), JSON.stringify(T)), await Fe();
    }
    async function Fe() {
      await xe(qe());
    }
    async function xe(T) {
      const P = F.value;
      if (!P) {
        console.error(`No Query API was found for ${l.refInfo.model}`);
        return;
      }
      let le = qt(P, T), ce = Qn((Ue) => {
        b.value.response = b.value.error = void 0, I.value = Ue;
      }), Se = await c.api(le);
      ce(), hl(() => b.value = Se);
      let Be = fe(Se.response, "results") || [];
      !Se.succeeded || Be.label == 0;
    }
    function qe() {
      let T = {
        include: "total",
        take: j.value
      }, P = Q(g.value.selectedColumns || l.selectedColumns);
      if (P.length > 0) {
        let ce = W.value;
        ce && P.includes(ce.name) && (P = [ce.name, ...P]), T.fields = P.join(",");
      }
      let le = [];
      return _.value.forEach((ce) => {
        ce.settings.sort && le.push((ce.settings.sort === "DESC" ? "-" : "") + ce.name), ce.settings.filters.forEach((Se) => {
          let Be = Se.key.replace("%", ce.name);
          T[Be] = Se.value;
        });
      }), typeof T.skip > "u" && k.value > 0 && (T.skip = k.value), le.length > 0 && (T.orderBy = le.join(",")), T;
    }
    async function De() {
      _.value.forEach((T) => {
        T.settings = { filters: [] }, m.removeItem(Le(T.name));
      }), await Fe();
    }
    return at(async () => {
      const T = l.prefs || ml(m.getItem(ie()));
      T && (g.value = T), _.value = V.value.map((P) => ({
        name: P.name,
        type: P.type,
        meta: P,
        settings: Object.assign(
          {
            filters: []
          },
          ml(m.getItem(Le(P.name)))
        )
      })), isNaN(l.skip) || (k.value = l.skip), await Fe();
    }), (T, P) => {
      const le = q("ErrorSummary"), ce = q("Loading"), Se = q("SettingsIcons"), Be = q("DataGrid"), Ue = q("ModalDialog");
      return a(), u(ke, null, [
        e.refInfo ? (a(), Y(Ue, {
          key: 0,
          ref_key: "modalDialog",
          ref: B,
          id: e.id,
          onDone: de
        }, {
          default: he(() => [
            s("div", pm, [
              s("div", ym, [
                s("h3", bm, [
                  ye(" Select "),
                  s("span", wm, M(o(Oe)(e.refInfo.model)), 1)
                ]),
                s("div", xm, [
                  e.showPreferences ? (a(), u("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${e.refInfo.model} Preferences`,
                    onClick: P[0] || (P[0] = (Ce) => ae.value = !ae.value)
                  }, Cm, 8, km)) : $("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 1,
                    type: "button",
                    class: x(["pl-2", o(z) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !o(z),
                    onClick: P[1] || (P[1] = (Ce) => H(-o(C)))
                  }, Vm, 10, _m)) : $("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 2,
                    type: "button",
                    class: x(["pl-2", o(K) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !o(K),
                    onClick: P[2] || (P[2] = (Ce) => H(-o(j)))
                  }, Am, 10, Mm)) : $("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 3,
                    type: "button",
                    class: x(["pl-2", o(U) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !o(U),
                    onClick: P[3] || (P[3] = (Ce) => H(o(j)))
                  }, Im, 10, Fm)) : $("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 4,
                    type: "button",
                    class: x(["pl-2", o(ee) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !o(ee),
                    onClick: P[4] || (P[4] = (Ce) => H(o(C)))
                  }, jm, 10, Dm)) : $("", !0)
                ]),
                e.showPagingInfo ? (a(), u("div", Om, [
                  s("div", Bm, [
                    I.value ? (a(), u("span", Em, "Querying...")) : $("", !0),
                    o(J).length ? (a(), u("span", Rm, [
                      Nm,
                      ye(" " + M(k.value + 1) + " - " + M(Math.min(k.value + o(J).length, o(C))) + " ", 1),
                      s("span", null, " of " + M(o(C)), 1)
                    ])) : b.value.completed ? (a(), u("span", Hm, "No Results")) : $("", !0)
                  ])
                ])) : $("", !0),
                o(E) && e.showResetPreferences ? (a(), u("div", zm, [
                  s("button", {
                    type: "button",
                    onClick: De,
                    title: "Reset Preferences & Filters",
                    class: x(o(v))
                  }, qm, 2)
                ])) : $("", !0),
                s("div", Qm, [
                  e.showFiltersView && o(p) > 0 ? (a(), u("div", Km, [
                    s("button", {
                      type: "button",
                      onClick: P[5] || (P[5] = (Ce) => R.value = R.value == "filters" ? null : "filters"),
                      class: x(o(v)),
                      "aria-expanded": "false"
                    }, [
                      Gm,
                      s("span", Wm, M(o(p)) + " " + M(o(p) == 1 ? "Filter" : "Filters"), 1),
                      R.value != "filters" ? (a(), u("svg", Zm, Xm)) : (a(), u("svg", Ym, t1))
                    ], 2)
                  ])) : $("", !0)
                ])
              ]),
              R.value == "filters" ? (a(), Y(xn, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: o(h),
                columns: _.value,
                onDone: P[6] || (P[6] = (Ce) => R.value = null),
                onChange: oe
              }, null, 8, ["definitions", "columns"])) : $("", !0),
              ve.value ? (a(), u("div", l1, [
                ge(wn, {
                  definitions: o(h),
                  column: ve.value.column,
                  "top-left": ve.value.topLeft,
                  onDone: ze,
                  onSave: te
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : $("", !0),
              b.value.error ? (a(), Y(le, {
                key: 2,
                status: b.value.error
              }, null, 8, ["status"])) : I.value ? (a(), Y(ce, { key: 3 })) : (a(), u("div", n1, [
                o(J).length ? (a(), u("div", s1, [
                  ge(Be, {
                    id: e.id,
                    items: o(J),
                    type: e.refInfo.model,
                    "selected-columns": o(A),
                    onFiltersChanged: Fe,
                    tableStyle: "fullWidth",
                    rowClass: D,
                    onRowSelected: $e,
                    onHeaderSelected: be
                  }, Jl({
                    header: he(({ column: Ce, label: Te }) => {
                      var tt;
                      return [
                        e.allowFiltering && (!l.canFilter || l.canFilter(Ce)) ? (a(), u("div", o1, [
                          s("span", a1, M(Te), 1),
                          ge(Se, {
                            column: _.value.find((Ie) => Ie.name.toLowerCase() === Ce.toLowerCase()),
                            "is-open": ((tt = ve.value) == null ? void 0 : tt.column.name) === Ce
                          }, null, 8, ["column", "is-open"])
                        ])) : (a(), u("div", i1, [
                          s("span", r1, M(Te), 1)
                        ]))
                      ];
                    }),
                    _: 2
                  }, [
                    Me(Object.keys(o(n)), (Ce) => ({
                      name: Ce,
                      fn: he((Te) => [
                        G(T.$slots, Ce, St(cl(Te)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : $("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : $("", !0),
        ae.value ? (a(), Y(kn, {
          key: 1,
          columns: o(V),
          prefs: g.value,
          onDone: P[7] || (P[7] = (Ce) => ae.value = !1),
          onSave: Ve
        }, null, 8, ["columns", "prefs"])) : $("", !0)
      ], 64);
    };
  }
}), d1 = { class: "sm:hidden" }, c1 = ["for"], f1 = ["id", "name"], m1 = ["value"], v1 = { class: "hidden sm:block" }, h1 = { class: "border-b border-gray-200" }, g1 = {
  class: "-mb-px flex",
  "aria-label": "Tabs"
}, p1 = ["onClick"], y1 = /* @__PURE__ */ se({
  __name: "Tabs",
  props: {
    tabs: null,
    id: { default: "tabs" },
    param: { default: "tab" },
    label: { type: Function, default: (e) => Oe(e) },
    selected: null,
    tabClass: null,
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, l = f(() => Object.keys(t.tabs)), n = (h) => t.label ? t.label(h) : Oe(h), i = f(() => t.id || "tabs"), r = f(() => t.param || "tab"), d = S();
    function c(h) {
      if (d.value = h, t.url) {
        const y = l.value[0];
        Yl({ tab: h === y ? void 0 : h });
      }
    }
    function m(h) {
      return d.value === h;
    }
    const v = f(() => `${100 / Object.keys(t.tabs).length}%`);
    return at(() => {
      if (d.value = Object.keys(t.tabs)[0], t.url) {
        const y = Bl(location.search)[r.value];
        y && (d.value = y);
      }
    }), (h, y) => (a(), u("div", null, [
      s("div", d1, [
        s("label", {
          for: o(i),
          class: "sr-only"
        }, "Select a tab", 8, c1),
        s("select", {
          id: o(i),
          name: o(i),
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: y[0] || (y[0] = (g) => {
            var b;
            return c((b = g.target) == null ? void 0 : b.value);
          })
        }, [
          (a(!0), u(ke, null, Me(o(l), (g) => (a(), u("option", {
            key: g,
            value: g
          }, M(n(g)), 9, m1))), 128))
        ], 40, f1)
      ]),
      s("div", v1, [
        s("div", h1, [
          s("nav", g1, [
            (a(!0), u(ke, null, Me(o(l), (g) => (a(), u("a", {
              href: "#",
              onClick: He((b) => c(g), ["prevent"]),
              style: Gl({ width: o(v) }),
              class: x([m(g) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", e.tabClass])
            }, M(n(g)), 15, p1))), 256))
          ])
        ])
      ]),
      s("div", {
        class: x(e.bodyClass)
      }, [
        (a(), Y(zn(e.tabs[d.value])))
      ], 2)
    ]));
  }
}), b1 = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-gray-400",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
  })
], -1), w1 = [
  b1
], x1 = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-indigo-600",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
  })
], -1), k1 = [
  x1
], $1 = /* @__PURE__ */ se({
  __name: "DarkModeToggle",
  setup(e) {
    const t = typeof document < "u" ? document.querySelector("html") : null;
    let l = S(t == null ? void 0 : t.classList.contains("dark"));
    function n() {
      l.value ? t == null || t.classList.remove("dark") : t == null || t.classList.add("dark"), l.value = !l.value, localStorage.setItem("color-scheme", l.value ? "dark" : "light");
    }
    return (i, r) => (a(), u("button", {
      type: "button",
      class: "bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",
      role: "switch",
      "aria-checked": "false",
      onClick: r[0] || (r[0] = (d) => n())
    }, [
      s("span", {
        class: x(`${o(l) ? "translate-x-0" : "translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)
      }, [
        s("span", {
          class: x(`${o(l) ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, w1, 2),
        s("span", {
          class: x(`${o(l) ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, k1, 2)
      ], 2)
    ]));
  }
}), C1 = { key: 0 }, _1 = {
  key: 1,
  class: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
}, L1 = { class: "sm:mx-auto sm:w-full sm:max-w-md" }, V1 = { class: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, M1 = {
  key: 0,
  class: "mt-4 text-center text-sm text-gray-600"
}, S1 = { class: "relative z-0 inline-flex shadow-sm rounded-md" }, A1 = ["onClick"], F1 = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }, T1 = { class: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" }, I1 = ["onSubmit"], D1 = { class: "mt-8" }, P1 = {
  key: 1,
  class: "mt-6"
}, j1 = /* @__PURE__ */ gl('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Or continue with </span></div></div>', 1), O1 = { class: "mt-6 grid grid-cols-3 gap-3" }, B1 = ["href", "title"], E1 = {
  key: 1,
  class: "h-5 w-5 text-gray-700",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, R1 = /* @__PURE__ */ s("path", {
  d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
  fill: "currentColor"
}, null, -1), N1 = /* @__PURE__ */ s("path", {
  d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",
  fill: "currentColor"
}, null, -1), H1 = [
  R1,
  N1
], z1 = /* @__PURE__ */ se({
  __name: "SignIn",
  props: {
    provider: null,
    title: { default: "Sign In" },
    tabs: { type: [Boolean, String], default: !0 },
    oauth: { type: [Boolean, String], default: !0 }
  },
  emits: ["login"],
  setup(e, { emit: t }) {
    const l = e, { getMetadata: n, createDto: i } = et(), r = Ll(), { signIn: d } = bn(), c = n({ assert: !0 }), m = c.plugins.auth, v = document.baseURI, h = c.app.baseUrl, y = S(i("Authenticate")), g = S(new Ye()), b = S(l.provider);
    at(() => {
      m == null || m.authProviders.map((C) => C.formLayout).filter((C) => C).forEach((C) => C.forEach((z) => y.value[z.id] = ""));
    });
    const k = f(() => (m == null ? void 0 : m.authProviders.filter((C) => C.formLayout)) || []), I = f(() => k.value[0] || {}), R = f(() => k.value[Math.max(k.value.length - 1, 0)] || {}), Q = f(() => (b.value ? m == null ? void 0 : m.authProviders.find((C) => C.name === b.value) : null) ?? I.value), D = (C) => C === !1 || C === "false";
    function O(C) {
      return C.label || C.navItem && C.navItem.label;
    }
    const N = f(() => {
      var C;
      return (((C = Q.value) == null ? void 0 : C.formLayout) || []).map((z) => {
        var K, U;
        return Object.assign({}, z, {
          type: (K = z.type) == null ? void 0 : K.toLowerCase(),
          autocomplete: z.autocomplete || (((U = z.type) == null ? void 0 : U.toLowerCase()) === "password" ? "current-password" : void 0) || (z.id.toLowerCase() === "username" ? "username" : void 0),
          css: Object.assign({ field: "col-span-12" }, z.css)
        });
      });
    }), V = f(() => D(l.oauth) ? [] : (m == null ? void 0 : m.authProviders.filter((C) => C.type === "oauth")) || []), A = f(() => {
      let C = po(
        m == null ? void 0 : m.authProviders.filter((K) => K.formLayout && K.formLayout.length > 0),
        (K, U) => {
          let ee = O(U) || nt(U.name);
          K[ee] = U.name === I.value.name ? "" : U.name;
        }
      );
      const z = Q.value;
      return z && D(l.tabs) && (C = { [O(z) || nt(z.name)]: z }), C;
    }), j = f(() => {
      let C = N.value.map((z) => z.id).filter((z) => z);
      return g.value.summaryMessage(C);
    });
    async function J() {
      if (y.value.provider = Q.value.name, g.value = await r.api(y.value), g.value.succeeded) {
        const C = g.value.response;
        d(C), t("login", C), g.value = new Ye(), y.value = i("Authenticate");
      }
    }
    return (C, z) => {
      const K = q("ErrorSummary"), U = q("AutoFormFields"), ee = q("PrimaryButton"), _ = q("Icon"), E = to("href");
      return o(m) ? (a(), u("div", _1, [
        s("div", L1, [
          s("h2", V1, M(e.title), 1),
          Object.keys(o(A)).length > 1 ? (a(), u("p", M1, [
            s("span", S1, [
              (a(!0), u(ke, null, Me(o(A), (p, W) => xt((a(), u("a", {
                onClick: (F) => b.value = p,
                class: x([
                  p === "" || p === o(I).name ? "rounded-l-md" : p === o(R).name ? "rounded-r-md -ml-px" : "-ml-px",
                  b.value === p ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                ])
              }, [
                ye(M(W), 1)
              ], 10, A1)), [
                [E, { provider: p }]
              ])), 256))
            ])
          ])) : $("", !0)
        ]),
        s("div", F1, [
          o(j) ? (a(), Y(K, {
            key: 0,
            class: "mb-3",
            errorSummary: o(j)
          }, null, 8, ["errorSummary"])) : $("", !0),
          s("div", T1, [
            o(N).length ? (a(), u("form", {
              key: 0,
              onSubmit: He(J, ["prevent"])
            }, [
              ge(U, {
                modelValue: y.value,
                formLayout: o(N),
                api: g.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              s("div", D1, [
                ge(ee, { class: "w-full" }, {
                  default: he(() => [
                    ye("Sign In")
                  ]),
                  _: 1
                })
              ])
            ], 40, I1)) : $("", !0),
            o(V).length ? (a(), u("div", P1, [
              j1,
              s("div", O1, [
                (a(!0), u(ke, null, Me(o(V), (p) => (a(), u("div", null, [
                  s("a", {
                    href: o(h) + p.navItem.href + "?continue=" + o(v),
                    title: O(p),
                    class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }, [
                    p.icon ? (a(), Y(_, {
                      key: 0,
                      image: p.icon,
                      class: "h-5 w-5 text-gray-700"
                    }, null, 8, ["image"])) : (a(), u("svg", E1, H1))
                  ], 8, B1)
                ]))), 256))
              ])
            ])) : $("", !0)
          ])
        ])
      ])) : (a(), u("div", C1, "No Auth Plugin"));
    };
  }
}), U1 = {
  Alert: To,
  AlertSuccess: Uo,
  ErrorSummary: Wo,
  InputDescription: Jo,
  Icon: Ts,
  Loading: qa,
  OutlineButton: Ga,
  PrimaryButton: Ja,
  SecondaryButton: ei,
  TextLink: li,
  Breadcrumbs: ri,
  Breadcrumb: mi,
  NavList: gi,
  NavListItem: Vi,
  AutoQueryGrid: Zu,
  SettingsIcons: dd,
  FilterViews: xn,
  FilterColumn: wn,
  QueryPrefs: kn,
  EnsureAccess: Ds,
  EnsureAccessDialog: cd,
  TextInput: xd,
  TextareaInput: Md,
  SelectInput: Dd,
  CheckboxInput: Hd,
  TagInput: cc,
  FileInput: Dc,
  Autocomplete: Zc,
  Combobox: Yc,
  DynamicInput: e0,
  LookupInput: g0,
  AutoFormFields: p0,
  AutoForm: _0,
  AutoCreateForm: G0,
  AutoEditForm: yf,
  ConfirmDelete: xf,
  FormLoading: Vf,
  DataGrid: Tf,
  CellFormat: If,
  PreviewFormat: Ef,
  HtmlFormat: Uf,
  CloseButton: Wf,
  SlideOver: um,
  ModalDialog: gm,
  ModalLookup: u1,
  Tabs: y1,
  DarkModeToggle: $1,
  SignIn: z1
}, Pl = U1, J1 = {
  install(e) {
    Object.keys(Pl).forEach((l) => {
      e.component(l, Pl[l]);
    });
    function t(l) {
      const i = Object.keys(l).filter((r) => l[r]).map((r) => `${encodeURIComponent(r)}=${encodeURIComponent(l[r])}`).join("&");
      return i ? "?" + i : "./";
    }
    e.directive("href", function(l, n) {
      l.href = t(n.value), l.onclick = (i) => {
        i.preventDefault(), history.pushState(n.value, "", t(n.value));
      };
    });
  },
  component(e, t) {
    return e ? t ? X.components[e] = t : X.components[e] || Pl[e] || null : null;
  }
};
export {
  Z1 as css,
  J1 as default,
  bn as useAuth,
  Ll as useClient,
  _t as useConfig,
  G1 as useFiles,
  W1 as useFormatters,
  et as useMetadata,
  ea as useUtils
};
