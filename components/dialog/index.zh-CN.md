---
category: Components
type: Feedback
title: Dialog
subtitle: 对话框
---

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

### 规则
- 尽可能少用。Modal 会打断用户操作，只用在重要的时候。
- 标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。
- 操作按钮最多到 3 个（竖排），一般为 1-2 个（横排）；3 个以上建议使用组件 ActionSheet 来完成。
- 一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。

### 注意


## API

### Dialog

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title | 标题 | React.Element | 无 |
| visible | 对话框是否可见 | Boolean | false |
| showCloseButton | 是否显示关闭按钮 | Boolean | false |
| actions | 底部内容 | Array [{text, onPress}] | [] |
| operation | actions 是否垂直排列 | Boolean | false |
| actionsDirection | `'horizontal' | 'vertical'` | string | 'horizontal' |
| onClose | 点击 x 或 mask 回调 | Function | 无 |
| renderActionButton | 渲染按钮 | Function | 无 |
| renderActions | 渲染 actions | Function | 无 |
| renderCloseButton | 渲染关闭按钮 | Function | 无 |
| styles | 样式 | ViewStyle | 无 |
| styles | 最外层样式 | ViewStyle | 无 |
| bodyStyle | body 样式 | ViewStyle | 无 |