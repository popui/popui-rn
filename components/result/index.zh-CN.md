---
category: Components
type: Combination
title: Result
subtitle: 结果页
---

在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

### 规则

- 用作非常重要的操作反馈，如支付成功，无网络状态。
- 个性化且优美的插画，可以提升品牌形象。
- 对于错误类型的结果页，页面中需要提供明确的行动点，eg：重新加载。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
imgUrl | 插图 url | string / Image Source(rn)  | -
iconName | weui icon name,会覆盖 imgUrl 设置 | string  | -
icon | 插图元素 (可以为`<Image src="" />`/`<Icon type="" />`等), 会覆盖 imgUrl/iconName 设置  | 
ReactNode | -
title | title 文案 | ReactNode | -
message | message 文案 | ReactNode | -
renderButtons | 渲染按钮 | Function | -
extra | extra 文案 | ReactNode | -
