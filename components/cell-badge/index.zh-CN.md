---
category: Components
type: Data Display
title: CellBadge
subtitle: Cell 中的徽标
---

用于 Cell 中的Badge. 依赖 Cell 的样式.

### 规则

- 当用户只需知道大致有内容更新时，应该使用红点型，如：社交中的群消息通知。
- 当用户有必要知晓每条更新时，应该使用数字型。如：社交中的一对一的消息通知。
- 新消息提示跟摘要信息后，统一在列表右侧
- 未读数红点跟在主题信息后，统一在列表左侧



## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
children | 展示的数字或文案，当为数字时候，大于 overflowCount <br/> 时显示为 ${overflowCount}+，为 0 时隐藏 | ReactNode | -
dot | 不展示数字，只有一个小红点 | boolean | `false`
preset | 展示位置 | `'default' | 'header' | 'body'| 'footer'` | `default`

### 注意事项

- preset=default 时, 无特别样式
- preset=header 时,显示在 `CellBadge` **父元素** 的右上角
- preset=body 时, 左边有空白, 垂直居中,用在 `CellBody` 中
- preset=footer 时, 左右两边都有空白, 垂直居中, 用在 `CellFooter` 中