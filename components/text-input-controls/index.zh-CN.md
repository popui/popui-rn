---
category: Components
type: Data Entry
title: InputItem
subtitle: 文本输入
---

文本输入框常用控件. 包含 clear. extra, error

### 规则


## API

**`InputItem` 必须用 [List](https://mobile.ant.design/components/list) 组件包裹才能正常使用**

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| clear      |  是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效) | bool | false  |
| onClearPress       | 点击清除 icon 触发的回调函数  | (e: Object): void |  无  |
| error       | 报错样式        | bool |  false  |
| onErrorPress       | 点击报错 icon 触发的回调函数  | (e: Object): void |  无  |
| extra       | 右边注释   | string or node |  ''  |
| onExtraPress      | extra 点击事件触发的回调函数 | (e: Object): void |  无  |

