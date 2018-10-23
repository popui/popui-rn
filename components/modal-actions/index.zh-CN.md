---
category: Components
type: Feedback
title: ModalActions
subtitle: 对话框
---

Modal 下方的按钮组.

### 规则


## API

### ModalAlert.alert(title, message, actions?, platform?)

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title | 标题  | String 或 React.Element | 无  |
| message  | 提示信息  | String 或 React.Element  | 无  |
| actions | 按钮组, [{text, onPress, style}] | Array | 无  |

`Modal.alert(title, message, actions?, platform?).close()` 可以在外部关闭 Alert