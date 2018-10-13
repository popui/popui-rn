---
category: Components
type: Data Entry
title: InputItem
subtitle: 文本输入
---

用于提供 TextInput 所需的属性. 根据 type 提供不同的校验方法和显示方法.

### 规则


## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 可以是银行卡`bankCard`; 手机号`phone`(此时最大长度固定为11,`maxLength`设置无效); 密码`password`; 数字`number`(为了尽量唤起`带小数点`的数字键盘，此类型并不是原生 number，而是`<input type="text" pattern="[0-9]*" />`); `digit`(表示原生的 number 类型); 以及其他标准 input type 类型 | String |  `text`  |
| children      |  render props      | (args:IChildrenArgs)=>React.ReactNode |  noop  |

## Children Args
属性 | 说明 | 类型 | 默认值
----|-----|------|------
| getDisplayTextByType      |  将 text 转换成可显示的形式      | (text:string,maxLength:number)=>string |  无  |
| keyboardType      |  keyboardType      | string |  'default'  |
| secureTextEntry      |  boolean      | boolean |  false  |
