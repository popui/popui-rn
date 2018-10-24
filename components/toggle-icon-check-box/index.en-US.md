---
category: Components
type: Data Entry
title: ToggleIconCheckBox
---

ToggleIconCheckBox

## API

### ToggleIconCheckBox

Properties | Descrition | Type | Default
-----------|------------|------|--------
| defaultChecked  |  whether is checked when init  | Boolean   |   |
| checked         |  whether is checked now (Controlled Mode)   | Boolean  |   |
| disabled        |  whether is been disabled       | Boolean |  false  |
| onChange        | callback when check status is changed | (e: Object): void |     |

### ToggleIconCheckBox.ToggleIconCheckBoxItem

The encapsulation about `ToggleIconCheckBox` based on `List.Item`, the property `thumb` of `List.Item` will be passed to `ToggleIconCheckBox`, while other properties remain the same.

Other APIs are identical with `ToggleIconCheckBox`.

### ToggleIconCheckBox.AgreeItem

Almost the same as ToggleIconCheckBoxItem and be used for special scenes. See demo for details.
