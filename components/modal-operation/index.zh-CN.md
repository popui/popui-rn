---
category: Components
type: Feedback
title: ModalOperation
subtitle: 对话框
---

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

### 规则
- 应当提供取消按钮,以免 用户不知道点击空白处取消
## API

### ModalOperation.operation(actions?, platform?)

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| actions | 按钮组, [{text, onPress, style}] | Array | 无  |

`Modal.operation(actions?, platform?).close()` 可以在外部关闭 operation`
