import{_ as s,c as a,o as n,a1 as p}from"./chunks/framework.Ctv3Rdcp.js";const E=JSON.parse('{"title":"前端规范 css","description":"","frontmatter":{},"headers":[],"relativePath":"standard/css.md","filePath":"standard/css.md"}'),i={name:"standard/css.md"},l=p(`<h1 id="前端规范-css" tabindex="-1">前端规范 css <a class="header-anchor" href="#前端规范-css" aria-label="Permalink to &quot;前端规范 css&quot;">​</a></h1><blockquote><p>代码千万行，注释第一行。命名不规范，同事两行泪。</p></blockquote><h3 id="一、css-书写顺序" tabindex="-1">一、css 书写顺序 <a class="header-anchor" href="#一、css-书写顺序" aria-label="Permalink to &quot;一、css 书写顺序&quot;">​</a></h3><ol><li>位置属性(position, top, right, z-index, display, float等)</li><li>大小(width, height, padding, margin)</li><li>文字系列(font, line-height, letter-spacing, color, text-align等)</li><li>背景(background, border等)</li><li>其他(animation, transition等)</li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    z-index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">em</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#9e0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="二、css-书写规范" tabindex="-1">二、css 书写规范 <a class="header-anchor" href="#二、css-书写规范" aria-label="Permalink to &quot;二、css 书写规范&quot;">​</a></h3><ol><li><p>使用 css 缩写属性</p><ul><li>css 有些属性是可以缩写的，比如padding, margin, font等等，这样精简代码同时又能提高用户的阅读体验。</li></ul></li><li><p>去掉小数点前的 0</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* bad */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">em</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* good */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">em</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span></code></pre></div></li><li><p>简写命名</p><ul><li>很多用户都喜欢简写类名，但前提是要让人看懂你的命名才能简写哦！</li></ul></li><li><p>16进制颜色代码缩写</p><ul><li>有些颜色代码是可以缩写的，我们就尽量缩写吧，提高用户体验为主。</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* bad */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#ffffff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* good */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#fff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span></code></pre></div></li><li><p>连字符 css 选择器命名规范</p><ul><li>长名称或词组可以使用中横线 <code>-</code> 来为选择器命名。</li><li>不建议使用 <code>_</code> 下划线来命名 css 选择器，为什么呢？ 输入的时候少按一个shift键； 浏览器兼容问题 （比如使用_tips的选择器命名，在IE6是无效的） 能良好区分JavaScript变量命名（JS变量命名是用<code>_</code>）</li></ul></li><li><p>不要随意使用ID</p><ul><li>ID在JS是唯一的，不能多次使用，而使用class类选择器却可以重复使用，另外ID的优先级优先与class，所以ID应该按需使用，而不能滥用。</li></ul></li><li><p>为选择器添加状态前缀</p><ul><li>有时候可以给选择器添加一个表示状态的前缀，让语义更明了，比如下图是添加了 <code>.is-</code>前缀。</li></ul></li></ol><h3 id="三、css-命名规范-规则" tabindex="-1">三、css 命名规范（规则） <a class="header-anchor" href="#三、css-命名规范-规则" aria-label="Permalink to &quot;三、css 命名规范（规则）&quot;">​</a></h3><h4 id="常用的-css-命名规则" tabindex="-1">常用的 css 命名规则 <a class="header-anchor" href="#常用的-css-命名规则" aria-label="Permalink to &quot;常用的 css 命名规则&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>头：header</span></span>
<span class="line"><span>内容：content/container</span></span>
<span class="line"><span>尾：footer</span></span>
<span class="line"><span>导航：nav</span></span>
<span class="line"><span>侧栏：sidebar</span></span>
<span class="line"><span>栏目：column</span></span>
<span class="line"><span>页面外围控制整体佈局宽度：wrapper</span></span>
<span class="line"><span>左右中：left right center</span></span>
<span class="line"><span>登录条：loginbar</span></span>
<span class="line"><span>标志：logo</span></span>
<span class="line"><span>广告：banner</span></span>
<span class="line"><span>页面主体：main</span></span>
<span class="line"><span>热点：hot</span></span>
<span class="line"><span>新闻：news</span></span>
<span class="line"><span>下载：download</span></span>
<span class="line"><span>子导航：subnav</span></span>
<span class="line"><span>菜单：menu</span></span>
<span class="line"><span>子菜单：submenu</span></span>
<span class="line"><span>搜索：search</span></span>
<span class="line"><span>友情链接：friendlink</span></span>
<span class="line"><span>页脚：footer</span></span>
<span class="line"><span>版权：copyright</span></span>
<span class="line"><span>滚动：scroll</span></span>
<span class="line"><span>内容：content</span></span>
<span class="line"><span>标签：tags</span></span>
<span class="line"><span>文章列表：list</span></span>
<span class="line"><span>提示信息：msg</span></span>
<span class="line"><span>小技巧：tips</span></span>
<span class="line"><span>栏目标题：title</span></span>
<span class="line"><span>加入：joinus</span></span>
<span class="line"><span>指南：guide</span></span>
<span class="line"><span>服务：service</span></span>
<span class="line"><span>注册：regsiter</span></span>
<span class="line"><span>状态：status</span></span>
<span class="line"><span>投票：vote</span></span>
<span class="line"><span>合作伙伴：partner</span></span></code></pre></div><h4 id="注释的写法" tabindex="-1">注释的写法: <a class="header-anchor" href="#注释的写法" aria-label="Permalink to &quot;注释的写法:&quot;">​</a></h4><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Header */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* End Header */</span></span></code></pre></div><h4 id="id的命名" tabindex="-1">ID的命名: <a class="header-anchor" href="#id的命名" aria-label="Permalink to &quot;ID的命名:&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(1)页面结构</span></span>
<span class="line"><span>容器: container</span></span>
<span class="line"><span>页头：header</span></span>
<span class="line"><span>内容：content/container</span></span>
<span class="line"><span>页面主体：main</span></span>
<span class="line"><span>页尾：footer</span></span>
<span class="line"><span>导航：nav</span></span>
<span class="line"><span>侧栏：sidebar</span></span>
<span class="line"><span>栏目：column</span></span>
<span class="line"><span>页面外围控制整体佈局宽度：wrapper</span></span>
<span class="line"><span>左右中：left right center</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(2)导航</span></span>
<span class="line"><span>导航：nav</span></span>
<span class="line"><span>主导航：mainnav</span></span>
<span class="line"><span>子导航：subnav</span></span>
<span class="line"><span>顶导航：topnav</span></span>
<span class="line"><span>边导航：sidebar</span></span>
<span class="line"><span>左导航：leftsidebar</span></span>
<span class="line"><span>右导航：rightsidebar</span></span>
<span class="line"><span>菜单：menu</span></span>
<span class="line"><span>子菜单：submenu</span></span>
<span class="line"><span>标题: title</span></span>
<span class="line"><span>摘要: summary</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(3)功能</span></span>
<span class="line"><span>标志：logo</span></span>
<span class="line"><span>广告：banner</span></span>
<span class="line"><span>登陆：login</span></span>
<span class="line"><span>登录条：loginbar</span></span>
<span class="line"><span>注册：register</span></span>
<span class="line"><span>搜索：search</span></span>
<span class="line"><span>功能区：shop</span></span>
<span class="line"><span>标题：title</span></span>
<span class="line"><span>加入：joinus</span></span>
<span class="line"><span>状态：status</span></span>
<span class="line"><span>按钮：btn</span></span>
<span class="line"><span>滚动：scroll</span></span>
<span class="line"><span>标籤页：tab</span></span>
<span class="line"><span>文章列表：list</span></span>
<span class="line"><span>提示信息：msg</span></span>
<span class="line"><span>当前的: current</span></span>
<span class="line"><span>小技巧：tips</span></span>
<span class="line"><span>图标: icon</span></span>
<span class="line"><span>注释：note</span></span>
<span class="line"><span>指南：guild</span></span>
<span class="line"><span>服务：service</span></span>
<span class="line"><span>热点：hot</span></span>
<span class="line"><span>新闻：news</span></span>
<span class="line"><span>下载：download</span></span>
<span class="line"><span>投票：vote</span></span>
<span class="line"><span>合作伙伴：partner</span></span>
<span class="line"><span>友情链接：link</span></span>
<span class="line"><span>版权：copyright</span></span></code></pre></div><h3 id="四、注意事项" tabindex="-1">四、注意事项 <a class="header-anchor" href="#四、注意事项" aria-label="Permalink to &quot;四、注意事项&quot;">​</a></h3><ol><li>一律小写</li><li>尽量用英文</li><li>不加中槓和下划线</li><li>尽量不缩写，除非一看就明白的单词</li></ol><h3 id="五、css-样式表文件命名" tabindex="-1">五、css 样式表文件命名 <a class="header-anchor" href="#五、css-样式表文件命名" aria-label="Permalink to &quot;五、css 样式表文件命名&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>主要的 master.css</span></span>
<span class="line"><span>模块 module.css</span></span>
<span class="line"><span>基本共用 base.css</span></span>
<span class="line"><span>布局、版面 layout.css</span></span>
<span class="line"><span>主题 themes.css</span></span>
<span class="line"><span>专栏 columns.css</span></span>
<span class="line"><span>文字 font.css</span></span>
<span class="line"><span>表单 forms.css</span></span>
<span class="line"><span>补丁 mend.css</span></span>
<span class="line"><span>打印 print.css</span></span></code></pre></div>`,18),e=[l];function t(c,h,r,d,k,o){return n(),a("div",null,e)}const u=s(i,[["render",t]]);export{E as __pageData,u as default};
