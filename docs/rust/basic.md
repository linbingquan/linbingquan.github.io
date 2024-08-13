# Rust 入门

一门赋予每个人，构建可靠且高效软件能力的语言。

## 为什么选择 Rust

- 高性能 - Rust 速度惊人且内存利用率极高。由于没有运行时和垃圾回收，它能够胜任对性能要求特别高的服务，可以在嵌入式设备上运行，还能轻松和其他语言集成。
- 可靠性 - Rust 丰富的类型系统和所有权模型保证了内存安全和线程安全，让您在编译期就能够消除各种各样的错误。
- 生产力 - Rust 拥有出色的文档、友好的编译器和清晰的错误提示信息， 还集成了一流的工具 —— 包管理器和构建工具，智能地自动补全和类型检验的多编辑器支持， 以及自动格式化代码等等。

## 用 Rust 构建应用

- 命令行程序
- WebAssembly 应用
- 网络服务器
- 嵌入式设备

## Rust 数据类型

- 整数类型
- 浮点类型
- 布尔类型
- 字符类型
- 复合类型
  - 元组用一对 `()` 包括的一组数据，可以包含不同种类的数据
  - 数组用一对 `[]` 包括的同类型数据

### Rust 数据类型转换

#### 将 String 转换为 &'static str

```rs
fn box_leak(string: String) -> &'static str {
    Box::leak(string.into_boxed_str())
}

fn leak(string: String) -> &'static str {
    string.leak()
}
```

#### Rust 中 String，＆str，Vec\<u8\> 和 ＆[u8] 的惯用转换

> 变量 s 为 from 类型

| from      | to        | fn                                                       |
| --------- | --------- | -------------------------------------------------------- |
| &str      | String    | String::from(s) <br /> s.to_string() <br /> s.to_owned() |
| &str      | &[u8]     | s.as_bytes()                                             |
| &str      | Vec\<u8\> | s.as_bytes().to_vec()                                    |
| String    | &[u8]     | s.as_bytes()                                             |
| String    | &str      | s.as_str() <br /> &s                                     |
| String    | Vec\<u8\> | s.into_bytes()                                           |
| &[u8]     | &str      | std::str::from_utf8(s).unwrap()                          |
| &[u8]     | String    | String::from_utf8(s).unwrap()                            |
| &[u8]     | Vec\<u8\> | s.to_vec()                                               |
| Vec\<u8\> | &str      | std::str::from_utf8(&s).unwrap()                         |
| Vec\<u8\> | String    | String::from_utf8(s).unwrap()                            |
| Vec\<u8\> | &[u8]     | &s <br /> s.as_slice()                                   |

## Rust 所有权

## Rust 结构体

## Rust 组织管理

三个重要的组织概念：箱(Crate)、包(Package)、模块(Module)

## Rust 错误处理

程序中一般会出现两种错误：可恢复错误和不可恢复错误。

对于可恢复错误用 `Result<T, E>` 类来处理，对于不可恢复错误使用 `panic!` 宏来处理。

## Rust 泛型与特性

## Rust 生命周期

## Rust 面向对象

### 链接

[Rust 官网](https://www.rust-lang.org/)
