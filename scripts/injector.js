const { root: siteRoot = "/" } = hexo.config;
// layout为photo的时候导入这些js与css
hexo.extend.injector.register(
  "body_end",
  `
  <link rel="stylesheet" href="https://cdn.staticfile.org/fancybox/3.5.7/jquery.fancybox.min.css">
  <script defer src="//cdn.jsdelivr.net/npm/minigrid@3.1.1/dist/minigrid.min.js"></script>
  <script defer src="https://cdn.staticfile.org/fancybox/3.5.7/jquery.fancybox.min.js"></script>
	<script defer src="https://cdn.bootcdn.net/ajax/libs/lazyloadjs/3.2.2/lazyload.js"></script>
  <script defer src="https://cdn.jsdelivr.net/gh/ddshiyu/zredImage@v1.7/photoWall.js"></script>`,
  "photo"
);

hexo.extend.injector.register(
  "body_end",
  `<script defer type="text/javascript" src="https://cdn.jsdelivr.net/gh/ddshiyu/zredImage@v1.3/love.js"></script>
  <script defer type="text/javascript"
color="220,220,220" opacity='0.7' zIndex="-2" count="200" src="//cdn.bootcss.com/canvas-nest.js/1.0.0/canvas-nest.min.js">
</script>
<script>
var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true
});
wow.init();</script>`,
  "default"
)
hexo.extend.injector.register(
  "head_begin",
  `<script src="https://cdn.dowebok.com/131/js/wow.min.js"></script>
  <link rel="stylesheet" href="https://cdn.dowebok.com/98/css/animate.min.css"></link>`,
  "default"
)