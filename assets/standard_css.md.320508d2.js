import{_ as s,c as n,o as a,a as l}from"./app.c49b3118.js";const d=JSON.parse('{"title":"前端规范 css","description":"","frontmatter":{},"headers":[{"level":3,"title":"一、css 书写顺序","slug":"一、css-书写顺序","link":"#一、css-书写顺序","children":[]},{"level":3,"title":"二、css 书写规范","slug":"二、css-书写规范","link":"#二、css-书写规范","children":[]},{"level":3,"title":"三、css 命名规范（规则）","slug":"三、css-命名规范-规则","link":"#三、css-命名规范-规则","children":[]},{"level":3,"title":"四、注意事项","slug":"四、注意事项","link":"#四、注意事项","children":[]},{"level":3,"title":"五、css 样式表文件命名","slug":"五、css-样式表文件命名","link":"#五、css-样式表文件命名","children":[]}],"relativePath":"standard/css.md"}'),p={name:"standard/css.md"},e=l(`<h1 id="前端规范-css" tabindex="-1">前端规范 css <a class="header-anchor" href="#前端规范-css" aria-hidden="true">#</a></h1><blockquote><p>代码千万行，注释第一行。命名不规范，同事两行泪。</p></blockquote><h3 id="一、css-书写顺序" tabindex="-1">一、css 书写顺序 <a class="header-anchor" href="#一、css-书写顺序" aria-hidden="true">#</a></h3><ol><li>位置属性(position, top, right, z-index, display, float等)</li><li>大小(width, height, padding, margin)</li><li>文字系列(font, line-height, letter-spacing, color, text-align等)</li><li>背景(background, border等)</li><li>其他(animation, transition等)</li></ol><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.5em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">9e0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="二、css-书写规范" tabindex="-1">二、css 书写规范 <a class="header-anchor" href="#二、css-书写规范" aria-hidden="true">#</a></h3><ol><li><p>使用 css 缩写属性</p><ul><li>css 有些属性是可以缩写的，比如padding, margin, font等等，这样精简代码同时又能提高用户的阅读体验。</li></ul></li><li><p>去掉小数点前的 0</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* bad */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.8em</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* good */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">.8em</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>简写命名</p><ul><li>很多用户都喜欢简写类名，但前提是要让人看懂你的命名才能简写哦！</li></ul></li><li><p>16进制颜色代码缩写</p><ul><li>有些颜色代码是可以缩写的，我们就尽量缩写吧，提高用户体验为主。</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* bad */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffffff</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* good */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>连字符 css 选择器命名规范</p><ul><li>长名称或词组可以使用中横线 <code>-</code> 来为选择器命名。</li><li>不建议使用 <code>_</code> 下划线来命名 css 选择器，为什么呢？ 输入的时候少按一个shift键； 浏览器兼容问题 （比如使用_tips的选择器命名，在IE6是无效的） 能良好区分JavaScript变量命名（JS变量命名是用<code>_</code>）</li></ul></li><li><p>不要随意使用ID</p><ul><li>ID在JS是唯一的，不能多次使用，而使用class类选择器却可以重复使用，另外ID的优先级优先与class，所以ID应该按需使用，而不能滥用。</li></ul></li><li><p>为选择器添加状态前缀</p><ul><li>有时候可以给选择器添加一个表示状态的前缀，让语义更明了，比如下图是添加了 <code>.is-</code>前缀。</li></ul></li></ol><h3 id="三、css-命名规范-规则" tabindex="-1">三、css 命名规范（规则） <a class="header-anchor" href="#三、css-命名规范-规则" aria-hidden="true">#</a></h3><h4 id="常用的-css-命名规则" tabindex="-1">常用的 css 命名规则 <a class="header-anchor" href="#常用的-css-命名规则" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">头：header</span></span>
<span class="line"><span style="color:#A6ACCD;">内容：content/container</span></span>
<span class="line"><span style="color:#A6ACCD;">尾：footer</span></span>
<span class="line"><span style="color:#A6ACCD;">导航：nav</span></span>
<span class="line"><span style="color:#A6ACCD;">侧栏：sidebar</span></span>
<span class="line"><span style="color:#A6ACCD;">栏目：column</span></span>
<span class="line"><span style="color:#A6ACCD;">页面外围控制整体佈局宽度：wrapper</span></span>
<span class="line"><span style="color:#A6ACCD;">左右中：left right center</span></span>
<span class="line"><span style="color:#A6ACCD;">登录条：loginbar</span></span>
<span class="line"><span style="color:#A6ACCD;">标志：logo</span></span>
<span class="line"><span style="color:#A6ACCD;">广告：banner</span></span>
<span class="line"><span style="color:#A6ACCD;">页面主体：main</span></span>
<span class="line"><span style="color:#A6ACCD;">热点：hot</span></span>
<span class="line"><span style="color:#A6ACCD;">新闻：news</span></span>
<span class="line"><span style="color:#A6ACCD;">下载：download</span></span>
<span class="line"><span style="color:#A6ACCD;">子导航：subnav</span></span>
<span class="line"><span style="color:#A6ACCD;">菜单：menu</span></span>
<span class="line"><span style="color:#A6ACCD;">子菜单：submenu</span></span>
<span class="line"><span style="color:#A6ACCD;">搜索：search</span></span>
<span class="line"><span style="color:#A6ACCD;">友情链接：friendlink</span></span>
<span class="line"><span style="color:#A6ACCD;">页脚：footer</span></span>
<span class="line"><span style="color:#A6ACCD;">版权：copyright</span></span>
<span class="line"><span style="color:#A6ACCD;">滚动：scroll</span></span>
<span class="line"><span style="color:#A6ACCD;">内容：content</span></span>
<span class="line"><span style="color:#A6ACCD;">标签：tags</span></span>
<span class="line"><span style="color:#A6ACCD;">文章列表：list</span></span>
<span class="line"><span style="color:#A6ACCD;">提示信息：msg</span></span>
<span class="line"><span style="color:#A6ACCD;">小技巧：tips</span></span>
<span class="line"><span style="color:#A6ACCD;">栏目标题：title</span></span>
<span class="line"><span style="color:#A6ACCD;">加入：joinus</span></span>
<span class="line"><span style="color:#A6ACCD;">指南：guide</span></span>
<span class="line"><span style="color:#A6ACCD;">服务：service</span></span>
<span class="line"><span style="color:#A6ACCD;">注册：regsiter</span></span>
<span class="line"><span style="color:#A6ACCD;">状态：status</span></span>
<span class="line"><span style="color:#A6ACCD;">投票：vote</span></span>
<span class="line"><span style="color:#A6ACCD;">合作伙伴：partner</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="注释的写法" tabindex="-1">注释的写法: <a class="header-anchor" href="#注释的写法" aria-hidden="true">#</a></h4><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Header */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* End Header */</span></span>
<span class="line"></span></code></pre></div><h4 id="id的命名" tabindex="-1">ID的命名: <a class="header-anchor" href="#id的命名" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">(1)页面结构</span></span>
<span class="line"><span style="color:#A6ACCD;">容器: container</span></span>
<span class="line"><span style="color:#A6ACCD;">页头：header</span></span>
<span class="line"><span style="color:#A6ACCD;">内容：content/container</span></span>
<span class="line"><span style="color:#A6ACCD;">页面主体：main</span></span>
<span class="line"><span style="color:#A6ACCD;">页尾：footer</span></span>
<span class="line"><span style="color:#A6ACCD;">导航：nav</span></span>
<span class="line"><span style="color:#A6ACCD;">侧栏：sidebar</span></span>
<span class="line"><span style="color:#A6ACCD;">栏目：column</span></span>
<span class="line"><span style="color:#A6ACCD;">页面外围控制整体佈局宽度：wrapper</span></span>
<span class="line"><span style="color:#A6ACCD;">左右中：left right center</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(2)导航</span></span>
<span class="line"><span style="color:#A6ACCD;">导航：nav</span></span>
<span class="line"><span style="color:#A6ACCD;">主导航：mainnav</span></span>
<span class="line"><span style="color:#A6ACCD;">子导航：subnav</span></span>
<span class="line"><span style="color:#A6ACCD;">顶导航：topnav</span></span>
<span class="line"><span style="color:#A6ACCD;">边导航：sidebar</span></span>
<span class="line"><span style="color:#A6ACCD;">左导航：leftsidebar</span></span>
<span class="line"><span style="color:#A6ACCD;">右导航：rightsidebar</span></span>
<span class="line"><span style="color:#A6ACCD;">菜单：menu</span></span>
<span class="line"><span style="color:#A6ACCD;">子菜单：submenu</span></span>
<span class="line"><span style="color:#A6ACCD;">标题: title</span></span>
<span class="line"><span style="color:#A6ACCD;">摘要: summary</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(3)功能</span></span>
<span class="line"><span style="color:#A6ACCD;">标志：logo</span></span>
<span class="line"><span style="color:#A6ACCD;">广告：banner</span></span>
<span class="line"><span style="color:#A6ACCD;">登陆：login</span></span>
<span class="line"><span style="color:#A6ACCD;">登录条：loginbar</span></span>
<span class="line"><span style="color:#A6ACCD;">注册：register</span></span>
<span class="line"><span style="color:#A6ACCD;">搜索：search</span></span>
<span class="line"><span style="color:#A6ACCD;">功能区：shop</span></span>
<span class="line"><span style="color:#A6ACCD;">标题：title</span></span>
<span class="line"><span style="color:#A6ACCD;">加入：joinus</span></span>
<span class="line"><span style="color:#A6ACCD;">状态：status</span></span>
<span class="line"><span style="color:#A6ACCD;">按钮：btn</span></span>
<span class="line"><span style="color:#A6ACCD;">滚动：scroll</span></span>
<span class="line"><span style="color:#A6ACCD;">标籤页：tab</span></span>
<span class="line"><span style="color:#A6ACCD;">文章列表：list</span></span>
<span class="line"><span style="color:#A6ACCD;">提示信息：msg</span></span>
<span class="line"><span style="color:#A6ACCD;">当前的: current</span></span>
<span class="line"><span style="color:#A6ACCD;">小技巧：tips</span></span>
<span class="line"><span style="color:#A6ACCD;">图标: icon</span></span>
<span class="line"><span style="color:#A6ACCD;">注释：note</span></span>
<span class="line"><span style="color:#A6ACCD;">指南：guild</span></span>
<span class="line"><span style="color:#A6ACCD;">服务：service</span></span>
<span class="line"><span style="color:#A6ACCD;">热点：hot</span></span>
<span class="line"><span style="color:#A6ACCD;">新闻：news</span></span>
<span class="line"><span style="color:#A6ACCD;">下载：download</span></span>
<span class="line"><span style="color:#A6ACCD;">投票：vote</span></span>
<span class="line"><span style="color:#A6ACCD;">合作伙伴：partner</span></span>
<span class="line"><span style="color:#A6ACCD;">友情链接：link</span></span>
<span class="line"><span style="color:#A6ACCD;">版权：copyright</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="四、注意事项" tabindex="-1">四、注意事项 <a class="header-anchor" href="#四、注意事项" aria-hidden="true">#</a></h3><ol><li>一律小写</li><li>尽量用英文</li><li>不加中槓和下划线</li><li>尽量不缩写，除非一看就明白的单词</li></ol><h3 id="五、css-样式表文件命名" tabindex="-1">五、css 样式表文件命名 <a class="header-anchor" href="#五、css-样式表文件命名" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">主要的 master.css</span></span>
<span class="line"><span style="color:#A6ACCD;">模块 module.css</span></span>
<span class="line"><span style="color:#A6ACCD;">基本共用 base.css</span></span>
<span class="line"><span style="color:#A6ACCD;">布局、版面 layout.css</span></span>
<span class="line"><span style="color:#A6ACCD;">主题 themes.css</span></span>
<span class="line"><span style="color:#A6ACCD;">专栏 columns.css</span></span>
<span class="line"><span style="color:#A6ACCD;">文字 font.css</span></span>
<span class="line"><span style="color:#A6ACCD;">表单 forms.css</span></span>
<span class="line"><span style="color:#A6ACCD;">补丁 mend.css</span></span>
<span class="line"><span style="color:#A6ACCD;">打印 print.css</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,18),o=[e];function c(t,i,r,C,A,D){return a(),n("div",null,o)}const h=s(p,[["render",c]]);export{d as __pageData,h as default};
