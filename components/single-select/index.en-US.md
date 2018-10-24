---
category: Components
type: Data Entry
title: SingleSelect
---

SingleSelect

## API

### SingleSelect

Properties | Descrition | Type | Default
-----------|------------|------|--------
| defaultChecked  |  whether is checked when init  | Boolean   |   |
| checked         |  whether is checked now (Controlled Mode)   | Boolean  |   |
| disabled        |  whether is been disabled       | Boolean |  false  |
| onChange        | callback when check status is changed | (e: Object): void |     |

### SingleSelect.SingleSelectItem

The encapsulation about `SingleSelect` based on `List.Item`, the property `thumb` of `List.Item` will be passed to `SingleSelect`, while other properties remain the same.

Other APIs are identical with `SingleSelect`.

### SingleSelect.AgreeItem

Almost the same as SingleSelectItem and be used for special scenes. See demo for details.
