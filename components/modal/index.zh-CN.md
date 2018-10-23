---
category: Components
type: Feedback
title: ModalAlert
subtitle: 对话框
---

替代 RNModal

### 规则
- 尽可能少用。Modal 会打断用户操作，只用在重要的时候。
- 标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。
- 操作按钮最多到 3 个（竖排），一般为 1-2 个（横排）；3 个以上建议使用组件 ActionSheet 来完成。
- 一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。

### 注意
- feature: 点击 mask 取消
- feature: 支持多种动画: 'none' | 'fade' | 'slide-up' | 'slide-down';

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| wrapStyle | 最外层样式  | ViewStyle | 无  |
| maskStyle | mask 层样式  | ViewStyle | 无  |
| contentStyle | 内容层样式  | ViewStyle | 无  |
| animationType | 动画类型  | `'none' | 'fade' | 'slide-up' | 'slide-down' | 'none'` |
| animationDuration | 动画时间  | number | 300 |
| visible | 是否显示  | boolean | false |
| maskClosable | 点击 mask 是否关闭  | boolean | true |
| animateAppear | 显示时是否使用动画  | boolean | true |
| onClose | 关闭回调  | Function | 无 |
| onAnimationEnd | 动画完成回调  | Function | 无 |