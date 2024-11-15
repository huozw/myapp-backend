/**
 * 配置选项参考：
 * https://prettier.io/docs/en/options
 */
module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: true,
  endOfLine: 'auto',
  trailingComma: 'none',
  printWidth: 80,
  bracketSameLine: false,
  htmlWhitespaceSensitivity: 'ignore',
};

// printWidth: 定义每行代码的最大字符数。超过这个限制的行将被自动换行。此处设置为 100，即每行最多可以有 100 个字符。
// tabWidth: 设置制表符（tab）所占的空格数。此处为 2，意味着一个制表符的宽度等于 2 个空格。
// useTabs: 指定是否使用制表符代替空格进行缩进。false 表示使用空格。
// semi: 控制语句末尾是否使用分号。false 表示不使用分号，所有语句末尾都将省略分号。
// vueIndentScriptAndStyle: 当格式化 Vue 文件时，是否缩进 &lt;script&gt; 和 &lt;style&gt; 标签内的内容。true 表示启用缩进。
// singleQuote: 设置是否使用单引号（'）而不是双引号（"）。true 表示使用单引号。
// quoteProps: 定义在对象字面量中如何处理属性名的引号。as-needed 表示仅在必要时使用引号（如属性名包含空格或特殊字符时）。
// bracketSpacing: 控制对象字面量中大括号之间的空格。true 表示 { foo: bar } 的形式，而 false 则为 {foo: bar}。
// trailingComma: 控制对象、数组等结构末尾是否添加逗号。es5 表示在可以的情况下添加尾随逗号（如对象字面量、数组等），但不会在函数参数中添加。
// jsxBracketSameLine: 控制 JSX 元素的闭合括号是否与最后一行内容在同一行。false 表示闭合括号会独占一行。
// jsxSingleQuote: 指定在 JSX 中是否使用单引号。false 表示使用双引号。
// arrowParens: 控制箭头函数参数是否需要括号。always 表示即使只有一个参数也要使用括号，例如 (param) =&gt; {}。
// insertPragma: 控制是否在格式化的文件顶部插入一个特殊的注释。false 表示不插入。
// requirePragma: 控制是否仅格式化包含特定注释的文件。false 表示不要求注释。
// proseWrap: 设置如何处理文本块的换行。never 表示不进行换行。
// htmlWhitespaceSensitivity: 控制 HTML 中的空白字符敏感度。strict 表示严格遵循 HTML 规范。
// endOfLine: 定义行尾字符的处理方式。auto 表示使用操作系统的默认行尾格式。
// rangeStart: 设置格式化的起始字符位置。0 表示从文件的开始位置开始格式化。
