---
category: Components
type: Data Display
title: Cells
subtitle: 列表
---

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

当你需要一个 infinite scroll 列表时，请使用 [ListView](https://mobile.ant.design/components/list-view/)。

### 规则
- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。

## API

### List

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| header       | cells heder  | (): void |  无  |
| renderBody       | cells body  | (): void |  列表  |
| footer       | cells footer  | (): void |  无  |

