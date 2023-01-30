import{_ as s,c as a,o as n,a as l}from"./app.611aeb95.js";const C=JSON.parse('{"title":"前端正则验证","description":"","frontmatter":{},"headers":[{"level":3,"title":"获取url传递参数","slug":"获取url传递参数","link":"#获取url传递参数","children":[]},{"level":3,"title":"密码验证","slug":"密码验证","link":"#密码验证","children":[]},{"level":3,"title":"邮箱验证","slug":"邮箱验证","link":"#邮箱验证","children":[]}],"relativePath":"javascript/regexp.md"}'),o={name:"javascript/regexp.md"},p=l(`<h1 id="前端正则验证" tabindex="-1">前端正则验证 <a class="header-anchor" href="#前端正则验证" aria-hidden="true">#</a></h1><h3 id="获取url传递参数" tabindex="-1">获取url传递参数 <a class="header-anchor" href="#获取url传递参数" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getQueryString</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">RegExp</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">(^|&amp;)</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">=([^&amp;]*)(&amp;|$)</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">search</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substr</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">reg</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">unescape</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getQueryStringByName</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">href</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">decodeURI</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 转义</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">href</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">RegExp</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">[</span><span style="color:#A6ACCD;">\\?\\&amp;</span><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">=([^</span><span style="color:#A6ACCD;">\\&amp;</span><span style="color:#C3E88D;">]+)</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="密码验证" tabindex="-1">密码验证 <a class="header-anchor" href="#密码验证" aria-hidden="true">#</a></h3><p>数字、字母、特殊字符（除空格），两个以上组合</p><p>匹配组合</p><ul><li>数字+字母</li><li>数字+特殊字符</li><li>字母+特殊字符</li><li>数字+字母+特殊字符组合</li><li>不能是纯数字，纯字母，纯特殊字符</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> regexp </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">(?![</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">]+</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)(?![</span><span style="color:#C3E88D;">a-zA-Z</span><span style="color:#89DDFF;">]+</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)(?![^</span><span style="color:#C3E88D;">\\da-zA-Z</span><span style="color:#89DDFF;">]+</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">{6,20}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>创建 RegExp 对象: <code>/pattern/attributes</code> <code>new RegExp(pattern, attributes)</code></p><p><code>?!n</code>：匹配任何其后没有紧接指定字符串 n 的字符串。</p><p><code>\\d</code>：查找数字。</p><p><code>n+</code>：匹配任何包含至少一个 n 的字符串。</p><p><code>[abc]</code>：查找方括号之间的任何字符。</p><p><code>[^abc]</code>：查找任何不在方括号之间的字符。</p><p><code>.</code>：查找单个字符，除了换行和行结束符。</p><p><code>n{X,Y}</code>：匹配包含 X 至 Y 个 n 的序列的字符串。</p><p>限定特殊字符，例如，特殊字符的范围为 !#$%^&amp;*，修改为</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> regexp </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">(?![</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">]+</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)(?![</span><span style="color:#C3E88D;">a-zA-Z</span><span style="color:#89DDFF;">]+</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)(?![</span><span style="color:#C3E88D;">!#$%^&amp;*</span><span style="color:#89DDFF;">]+</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)[</span><span style="color:#C3E88D;">\\da-zA-Z!#$%^&amp;*</span><span style="color:#89DDFF;">]{6,20}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><a href="https://www.zhihu.com/question/31285610/answer/54864079" target="_blank" rel="noreferrer">ZhiHu</a></p><hr><h3 id="邮箱验证" tabindex="-1">邮箱验证 <a class="header-anchor" href="#邮箱验证" aria-hidden="true">#</a></h3><p>邮箱@前缀的几种类型：</p><table><thead><tr><th>类型</th><th style="text-align:right;">例子</th></tr></thead><tbody><tr><td>纯数字</td><td style="text-align:right;"><a href="mailto:123456@qq.com" target="_blank" rel="noreferrer">123456@qq.com</a></td></tr><tr><td>纯字母</td><td style="text-align:right;"><a href="mailto:abcd@qq.com" target="_blank" rel="noreferrer">abcd@qq.com</a></td></tr><tr><td>字母数字混合</td><td style="text-align:right;"><a href="mailto:abcd1234@qq.com" target="_blank" rel="noreferrer">abcd1234@qq.com</a></td></tr><tr><td>带点的</td><td style="text-align:right;"><a href="mailto:abc.def@qq.com" target="_blank" rel="noreferrer">abc.def@qq.com</a></td></tr><tr><td>带下划线</td><td style="text-align:right;"><a href="mailto:abc_def@qq.com" target="_blank" rel="noreferrer">abc_def@qq.com</a></td></tr><tr><td>带连接线</td><td style="text-align:right;"><a href="mailto:abc-def@qq.com" target="_blank" rel="noreferrer">abc-def@qq.com</a></td></tr></tbody></table><p>邮箱@后缀的类型：</p><ul><li><p>至少有两处单词</p></li><li><p>顶级域名一般为2~4位（如cn、com、club）</p></li></ul><table><thead><tr><th>例子</th></tr></thead><tbody><tr><td><a href="mailto:123456@qq.com" target="_blank" rel="noreferrer">123456@qq.com</a></td></tr><tr><td><a href="mailto:123456@vip.qq.com" target="_blank" rel="noreferrer">123456@vip.qq.com</a></td></tr></tbody></table><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> regexp </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">\\w.</span><span style="color:#89DDFF;">]+</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">\\w</span><span style="color:#89DDFF;">]+(</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">a-zA-Z</span><span style="color:#89DDFF;">]{2,3}){1,2}</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,27),t=[p];function e(r,c,F,y,D,i){return n(),a("div",null,t)}const A=s(o,[["render",e]]);export{C as __pageData,A as default};