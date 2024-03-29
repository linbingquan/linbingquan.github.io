
# 前端正则验证

### 获取url传递参数

```js
function getQueryString(name) {
    var reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function getQueryStringByName(name) {
    var href = decodeURI(window.location.href); // 转义
    var r = href.match(new RegExp(`[\?\&]${name}=([^\&]+)`, "i"));
    if (r == null || r.length < 1) {
        return "";
    }
    return r[1];
}
```

### 密码验证

数字、字母、特殊字符（除空格），两个以上组合

匹配组合
- 数字+字母
- 数字+特殊字符
- 字母+特殊字符
- 数字+字母+特殊字符组合
- 不能是纯数字，纯字母，纯特殊字符

```js
const regexp = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
```


创建 RegExp 对象: `/pattern/attributes` `new RegExp(pattern, attributes)`

`?!n`：匹配任何其后没有紧接指定字符串 n 的字符串。

`\d`：查找数字。

`n+`：匹配任何包含至少一个 n 的字符串。

`[abc]`：查找方括号之间的任何字符。

`[^abc]`：查找任何不在方括号之间的字符。

`.`：查找单个字符，除了换行和行结束符。

`n{X,Y}`：匹配包含 X 至 Y 个 n 的序列的字符串。

限定特殊字符，例如，特殊字符的范围为 !#$%^&*，修改为
```js
const regexp = /^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{6,20}$/;
```
[ZhiHu](https://www.zhihu.com/question/31285610/answer/54864079)

---

### 邮箱验证

邮箱@前缀的几种类型：

| 类型 | 例子 |
| --- | ---: |
| 纯数字 | 123456@qq.com |
| 纯字母 | abcd@qq.com |
| 字母数字混合 | abcd1234@qq.com |
| 带点的 | abc.def@qq.com |
| 带下划线 | abc_def@qq.com |
| 带连接线 | abc-def@qq.com |

邮箱@后缀的类型：

* 至少有两处单词

* 顶级域名一般为2~4位（如cn、com、club）

| 例子 |
| --- |
| 123456@qq.com |
| 123456@vip.qq.com |

```js
const regexp = /^[\w.]+@[\w]+(\.[a-zA-Z]{2,3}){1,2}$/;
```