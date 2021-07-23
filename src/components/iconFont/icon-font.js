!(function (e) {
  var t,
    n,
    o,
    i,
    a,
    c,
    d =
      '<svg><symbol id="icon-mima" viewBox="0 0 1024 1024"><path d="M490.666667 657.706667V725.333333a21.333333 21.333333 0 0 0 42.666666 0v-67.626666a64.021333 64.021333 0 1 0-42.666666 0zM341.333333 405.333333v-85.333333a170.666667 170.666667 0 1 1 341.333334 0v85.333333h85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v341.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H256a42.666667 42.666667 0 0 1-42.666667-42.666667V448a42.666667 42.666667 0 0 1 42.666667-42.666667h85.333333z m64 0h213.333334v-85.333333a106.666667 106.666667 0 0 0-213.333334 0v85.333333z" fill="#2A2A37" ></path></symbol><symbol id="icon-user-fill" viewBox="0 0 1024 1024"><path d="M619.5134375 487.878125c69.99375-37.0734375 108.43125-106.2225 108.43125-186.15C728.0103125 185.050625 631.071875 90.125 511.9259375 90.125c-119.20875 0-216.1471875 94.925625-216.1471875 211.603125 0 79.99125 35.0615625 149.0765625 105.054375 186.15C241.8228125 532.420625 123.2628125 686.8221875 123.2628125 859.2078125c0 35.775 2.53125 73.8890625 80.5115625 74.4740625 69.60375 0.5184375 472.7465625-0.1959375 616.56375 0 63.825 0.06375 80.056875-37.14 80.3821875-74.4740625 1.6875-170.8275-121.9359375-326.7871875-281.206875-371.3278125z"  ></path></symbol></svg>',
    l = (l = document.getElementsByTagName('script'))[
      l.length - 1
    ].getAttribute('data-injectcss');
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    a || ((a = !0), o());
  }
  (t = function () {
    var e, t, n;
    ((n = document.createElement('div')).innerHTML = d),
      (d = null),
      (t = n.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (e = t),
        (n = document.body).firstChild
          ? (t = n.firstChild).parentNode.insertBefore(e, t)
          : n.appendChild(e));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t();
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (a = !1),
        (c = function () {
          try {
            i.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(c, 50);
          }
          s();
        })(),
        (i.onreadystatechange = function () {
          'complete' == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
