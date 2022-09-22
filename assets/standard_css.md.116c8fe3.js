import{_ as s,c as n,o as a,a as l}from"./app.cf263177.js";const d=JSON.parse('{"title":"\u524D\u7AEF\u89C4\u8303 css","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4E00\u3001css \u4E66\u5199\u987A\u5E8F","slug":"\u4E00\u3001css-\u4E66\u5199\u987A\u5E8F","link":"#\u4E00\u3001css-\u4E66\u5199\u987A\u5E8F","children":[]},{"level":3,"title":"\u4E8C\u3001css \u4E66\u5199\u89C4\u8303","slug":"\u4E8C\u3001css-\u4E66\u5199\u89C4\u8303","link":"#\u4E8C\u3001css-\u4E66\u5199\u89C4\u8303","children":[]},{"level":3,"title":"\u4E09\u3001css \u547D\u540D\u89C4\u8303\uFF08\u89C4\u5219\uFF09","slug":"\u4E09\u3001css-\u547D\u540D\u89C4\u8303\uFF08\u89C4\u5219\uFF09","link":"#\u4E09\u3001css-\u547D\u540D\u89C4\u8303\uFF08\u89C4\u5219\uFF09","children":[]},{"level":3,"title":"\u56DB\u3001\u6CE8\u610F\u4E8B\u9879","slug":"\u56DB\u3001\u6CE8\u610F\u4E8B\u9879","link":"#\u56DB\u3001\u6CE8\u610F\u4E8B\u9879","children":[]},{"level":3,"title":"\u4E94\u3001css \u6837\u5F0F\u8868\u6587\u4EF6\u547D\u540D","slug":"\u4E94\u3001css-\u6837\u5F0F\u8868\u6587\u4EF6\u547D\u540D","link":"#\u4E94\u3001css-\u6837\u5F0F\u8868\u6587\u4EF6\u547D\u540D","children":[]}],"relativePath":"standard/css.md"}'),p={name:"standard/css.md"},e=l(`<h1 id="\u524D\u7AEF\u89C4\u8303-css" tabindex="-1">\u524D\u7AEF\u89C4\u8303 css <a class="header-anchor" href="#\u524D\u7AEF\u89C4\u8303-css" aria-hidden="true">#</a></h1><blockquote><p>\u4EE3\u7801\u5343\u4E07\u884C\uFF0C\u6CE8\u91CA\u7B2C\u4E00\u884C\u3002\u547D\u540D\u4E0D\u89C4\u8303\uFF0C\u540C\u4E8B\u4E24\u884C\u6CEA\u3002</p></blockquote><h3 id="\u4E00\u3001css-\u4E66\u5199\u987A\u5E8F" tabindex="-1">\u4E00\u3001css \u4E66\u5199\u987A\u5E8F <a class="header-anchor" href="#\u4E00\u3001css-\u4E66\u5199\u987A\u5E8F" aria-hidden="true">#</a></h3><ol><li>\u4F4D\u7F6E\u5C5E\u6027(position, top, right, z-index, display, float\u7B49)</li><li>\u5927\u5C0F(width, height, padding, margin)</li><li>\u6587\u5B57\u7CFB\u5217(font, line-height, letter-spacing, color, text-align\u7B49)</li><li>\u80CC\u666F(background, border\u7B49)</li><li>\u5176\u4ED6(animation, transition\u7B49)</li></ol><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.5em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">9e0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4E8C\u3001css-\u4E66\u5199\u89C4\u8303" tabindex="-1">\u4E8C\u3001css \u4E66\u5199\u89C4\u8303 <a class="header-anchor" href="#\u4E8C\u3001css-\u4E66\u5199\u89C4\u8303" aria-hidden="true">#</a></h3><ol><li><p>\u4F7F\u7528 css \u7F29\u5199\u5C5E\u6027</p><ul><li>css \u6709\u4E9B\u5C5E\u6027\u662F\u53EF\u4EE5\u7F29\u5199\u7684\uFF0C\u6BD4\u5982padding, margin, font\u7B49\u7B49\uFF0C\u8FD9\u6837\u7CBE\u7B80\u4EE3\u7801\u540C\u65F6\u53C8\u80FD\u63D0\u9AD8\u7528\u6237\u7684\u9605\u8BFB\u4F53\u9A8C\u3002</li></ul></li><li><p>\u53BB\u6389\u5C0F\u6570\u70B9\u524D\u7684 0</p><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#676E95;">/* bad */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.8em</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">/* good */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">.8em</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u7B80\u5199\u547D\u540D</p><ul><li>\u5F88\u591A\u7528\u6237\u90FD\u559C\u6B22\u7B80\u5199\u7C7B\u540D\uFF0C\u4F46\u524D\u63D0\u662F\u8981\u8BA9\u4EBA\u770B\u61C2\u4F60\u7684\u547D\u540D\u624D\u80FD\u7B80\u5199\u54E6\uFF01</li></ul></li><li><p>16\u8FDB\u5236\u989C\u8272\u4EE3\u7801\u7F29\u5199</p><ul><li>\u6709\u4E9B\u989C\u8272\u4EE3\u7801\u662F\u53EF\u4EE5\u7F29\u5199\u7684\uFF0C\u6211\u4EEC\u5C31\u5C3D\u91CF\u7F29\u5199\u5427\uFF0C\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u4E3A\u4E3B\u3002</li></ul><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#676E95;">/* bad */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffffff</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">/* good */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u8FDE\u5B57\u7B26 css \u9009\u62E9\u5668\u547D\u540D\u89C4\u8303</p><ul><li>\u957F\u540D\u79F0\u6216\u8BCD\u7EC4\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6A2A\u7EBF <code>-</code> \u6765\u4E3A\u9009\u62E9\u5668\u547D\u540D\u3002</li><li>\u4E0D\u5EFA\u8BAE\u4F7F\u7528 <code>_</code> \u4E0B\u5212\u7EBF\u6765\u547D\u540D css \u9009\u62E9\u5668\uFF0C\u4E3A\u4EC0\u4E48\u5462\uFF1F \u8F93\u5165\u7684\u65F6\u5019\u5C11\u6309\u4E00\u4E2Ashift\u952E\uFF1B \u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898 \uFF08\u6BD4\u5982\u4F7F\u7528_tips\u7684\u9009\u62E9\u5668\u547D\u540D\uFF0C\u5728IE6\u662F\u65E0\u6548\u7684\uFF09 \u80FD\u826F\u597D\u533A\u5206JavaScript\u53D8\u91CF\u547D\u540D\uFF08JS\u53D8\u91CF\u547D\u540D\u662F\u7528<code>_</code>\uFF09</li></ul></li><li><p>\u4E0D\u8981\u968F\u610F\u4F7F\u7528ID</p><ul><li>ID\u5728JS\u662F\u552F\u4E00\u7684\uFF0C\u4E0D\u80FD\u591A\u6B21\u4F7F\u7528\uFF0C\u800C\u4F7F\u7528class\u7C7B\u9009\u62E9\u5668\u5374\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\uFF0C\u53E6\u5916ID\u7684\u4F18\u5148\u7EA7\u4F18\u5148\u4E0Eclass\uFF0C\u6240\u4EE5ID\u5E94\u8BE5\u6309\u9700\u4F7F\u7528\uFF0C\u800C\u4E0D\u80FD\u6EE5\u7528\u3002</li></ul></li><li><p>\u4E3A\u9009\u62E9\u5668\u6DFB\u52A0\u72B6\u6001\u524D\u7F00</p><ul><li>\u6709\u65F6\u5019\u53EF\u4EE5\u7ED9\u9009\u62E9\u5668\u6DFB\u52A0\u4E00\u4E2A\u8868\u793A\u72B6\u6001\u7684\u524D\u7F00\uFF0C\u8BA9\u8BED\u4E49\u66F4\u660E\u4E86\uFF0C\u6BD4\u5982\u4E0B\u56FE\u662F\u6DFB\u52A0\u4E86 <code>.is-</code>\u524D\u7F00\u3002</li></ul></li></ol><h3 id="\u4E09\u3001css-\u547D\u540D\u89C4\u8303\uFF08\u89C4\u5219\uFF09" tabindex="-1">\u4E09\u3001css \u547D\u540D\u89C4\u8303\uFF08\u89C4\u5219\uFF09 <a class="header-anchor" href="#\u4E09\u3001css-\u547D\u540D\u89C4\u8303\uFF08\u89C4\u5219\uFF09" aria-hidden="true">#</a></h3><h4 id="\u5E38\u7528\u7684-css-\u547D\u540D\u89C4\u5219" tabindex="-1">\u5E38\u7528\u7684 css \u547D\u540D\u89C4\u5219 <a class="header-anchor" href="#\u5E38\u7528\u7684-css-\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5934\uFF1Aheader</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5185\u5BB9\uFF1Acontent/container</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5C3E\uFF1Afooter</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5BFC\u822A\uFF1Anav</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4FA7\u680F\uFF1Asidebar</span></span>
<span class="line"><span style="color:#A6ACCD;">\u680F\u76EE\uFF1Acolumn</span></span>
<span class="line"><span style="color:#A6ACCD;">\u9875\u9762\u5916\u56F4\u63A7\u5236\u6574\u4F53\u4F48\u5C40\u5BBD\u5EA6\uFF1Awrapper</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5DE6\u53F3\u4E2D\uFF1Aleft right center</span></span>
<span class="line"><span style="color:#A6ACCD;">\u767B\u5F55\u6761\uFF1Aloginbar</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6807\u5FD7\uFF1Alogo</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5E7F\u544A\uFF1Abanner</span></span>
<span class="line"><span style="color:#A6ACCD;">\u9875\u9762\u4E3B\u4F53\uFF1Amain</span></span>
<span class="line"><span style="color:#A6ACCD;">\u70ED\u70B9\uFF1Ahot</span></span>
<span class="line"><span style="color:#A6ACCD;">\u65B0\u95FB\uFF1Anews</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E0B\u8F7D\uFF1Adownload</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5B50\u5BFC\u822A\uFF1Asubnav</span></span>
<span class="line"><span style="color:#A6ACCD;">\u83DC\u5355\uFF1Amenu</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5B50\u83DC\u5355\uFF1Asubmenu</span></span>
<span class="line"><span style="color:#A6ACCD;">\u641C\u7D22\uFF1Asearch</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53CB\u60C5\u94FE\u63A5\uFF1Afriendlink</span></span>
<span class="line"><span style="color:#A6ACCD;">\u9875\u811A\uFF1Afooter</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7248\u6743\uFF1Acopyright</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6EDA\u52A8\uFF1Ascroll</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5185\u5BB9\uFF1Acontent</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6807\u7B7E\uFF1Atags</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6587\u7AE0\u5217\u8868\uFF1Alist</span></span>
<span class="line"><span style="color:#A6ACCD;">\u63D0\u793A\u4FE1\u606F\uFF1Amsg</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5C0F\u6280\u5DE7\uFF1Atips</span></span>
<span class="line"><span style="color:#A6ACCD;">\u680F\u76EE\u6807\u9898\uFF1Atitle</span></span>
<span class="line"><span style="color:#A6ACCD;">\u52A0\u5165\uFF1Ajoinus</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6307\u5357\uFF1Aguide</span></span>
<span class="line"><span style="color:#A6ACCD;">\u670D\u52A1\uFF1Aservice</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u518C\uFF1Aregsiter</span></span>
<span class="line"><span style="color:#A6ACCD;">\u72B6\u6001\uFF1Astatus</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6295\u7968\uFF1Avote</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5408\u4F5C\u4F19\u4F34\uFF1Apartner</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u6CE8\u91CA\u7684\u5199\u6CD5" tabindex="-1">\u6CE8\u91CA\u7684\u5199\u6CD5: <a class="header-anchor" href="#\u6CE8\u91CA\u7684\u5199\u6CD5" aria-hidden="true">#</a></h4><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#676E95;">/* Header */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">/* End Header */</span></span>
<span class="line"></span></code></pre></div><h4 id="id\u7684\u547D\u540D" tabindex="-1">ID\u7684\u547D\u540D: <a class="header-anchor" href="#id\u7684\u547D\u540D" aria-hidden="true">#</a></h4><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">(1)\u9875\u9762\u7ED3\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5BB9\u5668: container</span></span>
<span class="line"><span style="color:#A6ACCD;">\u9875\u5934\uFF1Aheader</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5185\u5BB9\uFF1Acontent/container</span></span>
<span class="line"><span style="color:#A6ACCD;">\u9875\u9762\u4E3B\u4F53\uFF1Amain</span></span>
<span class="line"><span style="color:#A6ACCD;">\u9875\u5C3E\uFF1Afooter</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5BFC\u822A\uFF1Anav</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4FA7\u680F\uFF1Asidebar</span></span>
<span class="line"><span style="color:#A6ACCD;">\u680F\u76EE\uFF1Acolumn</span></span>
<span class="line"><span style="color:#A6ACCD;">\u9875\u9762\u5916\u56F4\u63A7\u5236\u6574\u4F53\u4F48\u5C40\u5BBD\u5EA6\uFF1Awrapper</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5DE6\u53F3\u4E2D\uFF1Aleft right center</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(2)\u5BFC\u822A</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5BFC\u822A\uFF1Anav</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E3B\u5BFC\u822A\uFF1Amainnav</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5B50\u5BFC\u822A\uFF1Asubnav</span></span>
<span class="line"><span style="color:#A6ACCD;">\u9876\u5BFC\u822A\uFF1Atopnav</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8FB9\u5BFC\u822A\uFF1Asidebar</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5DE6\u5BFC\u822A\uFF1Aleftsidebar</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53F3\u5BFC\u822A\uFF1Arightsidebar</span></span>
<span class="line"><span style="color:#A6ACCD;">\u83DC\u5355\uFF1Amenu</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5B50\u83DC\u5355\uFF1Asubmenu</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6807\u9898: title</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6458\u8981: summary</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(3)\u529F\u80FD</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6807\u5FD7\uFF1Alogo</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5E7F\u544A\uFF1Abanner</span></span>
<span class="line"><span style="color:#A6ACCD;">\u767B\u9646\uFF1Alogin</span></span>
<span class="line"><span style="color:#A6ACCD;">\u767B\u5F55\u6761\uFF1Aloginbar</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u518C\uFF1Aregister</span></span>
<span class="line"><span style="color:#A6ACCD;">\u641C\u7D22\uFF1Asearch</span></span>
<span class="line"><span style="color:#A6ACCD;">\u529F\u80FD\u533A\uFF1Ashop</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6807\u9898\uFF1Atitle</span></span>
<span class="line"><span style="color:#A6ACCD;">\u52A0\u5165\uFF1Ajoinus</span></span>
<span class="line"><span style="color:#A6ACCD;">\u72B6\u6001\uFF1Astatus</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6309\u94AE\uFF1Abtn</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6EDA\u52A8\uFF1Ascroll</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6807\u7C64\u9875\uFF1Atab</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6587\u7AE0\u5217\u8868\uFF1Alist</span></span>
<span class="line"><span style="color:#A6ACCD;">\u63D0\u793A\u4FE1\u606F\uFF1Amsg</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5F53\u524D\u7684: current</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5C0F\u6280\u5DE7\uFF1Atips</span></span>
<span class="line"><span style="color:#A6ACCD;">\u56FE\u6807: icon</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6CE8\u91CA\uFF1Anote</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6307\u5357\uFF1Aguild</span></span>
<span class="line"><span style="color:#A6ACCD;">\u670D\u52A1\uFF1Aservice</span></span>
<span class="line"><span style="color:#A6ACCD;">\u70ED\u70B9\uFF1Ahot</span></span>
<span class="line"><span style="color:#A6ACCD;">\u65B0\u95FB\uFF1Anews</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E0B\u8F7D\uFF1Adownload</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6295\u7968\uFF1Avote</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5408\u4F5C\u4F19\u4F34\uFF1Apartner</span></span>
<span class="line"><span style="color:#A6ACCD;">\u53CB\u60C5\u94FE\u63A5\uFF1Alink</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7248\u6743\uFF1Acopyright</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u56DB\u3001\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u56DB\u3001\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u56DB\u3001\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h3><ol><li>\u4E00\u5F8B\u5C0F\u5199</li><li>\u5C3D\u91CF\u7528\u82F1\u6587</li><li>\u4E0D\u52A0\u4E2D\u69D3\u548C\u4E0B\u5212\u7EBF</li><li>\u5C3D\u91CF\u4E0D\u7F29\u5199\uFF0C\u9664\u975E\u4E00\u770B\u5C31\u660E\u767D\u7684\u5355\u8BCD</li></ol><h3 id="\u4E94\u3001css-\u6837\u5F0F\u8868\u6587\u4EF6\u547D\u540D" tabindex="-1">\u4E94\u3001css \u6837\u5F0F\u8868\u6587\u4EF6\u547D\u540D <a class="header-anchor" href="#\u4E94\u3001css-\u6837\u5F0F\u8868\u6587\u4EF6\u547D\u540D" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u4E3B\u8981\u7684 master.css</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6A21\u5757 module.css</span></span>
<span class="line"><span style="color:#A6ACCD;">\u57FA\u672C\u5171\u7528 base.css</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5E03\u5C40\u3001\u7248\u9762 layout.css</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E3B\u9898 themes.css</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E13\u680F columns.css</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6587\u5B57 font.css</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8868\u5355 forms.css</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8865\u4E01 mend.css</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6253\u5370 print.css</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,18),o=[e];function c(t,r,i,C,A,D){return a(),n("div",null,o)}const F=s(p,[["render",c]]);export{d as __pageData,F as default};
