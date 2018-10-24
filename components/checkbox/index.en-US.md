---
category: Components
type: Data Entry
title: CheckBox
---

CheckBox

## API

### CheckBox

Properties | Descrition | Type | Default
-----------|------------|------|--------
| defaultChecked  |  whether is checked when init  | Boolean   |   |
| checked         |  whether is checked now (Controlled Mode)   | Boolean  |   |
| disabled        |  whether is been disabled       | Boolean |  false  |
| onChange        | callback when check status is changed | (e: Object): void |     |

### CheckBox.CheckBoxItem

The encapsulation about `CheckBox` based on `List.Item`, the property `thumb` of `List.Item` will be passed to `CheckBox`, while other properties remain the same.

Other APIs are identical with `CheckBox`.

### CheckBox.AgreeItem

Almost the same as CheckBoxItem and be used for special scenes. See demo for details.
