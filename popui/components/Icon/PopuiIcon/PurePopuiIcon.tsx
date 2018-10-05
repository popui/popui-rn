/**
 * Icon icon set component.
 * Usage: <PurePopuiIcon name=icon_name size={20} color=#4F8EF7 />
 */
import { createIconSet } from '@expo/vector-icons'
import Config from 'popui/components/Icon/PopuiIcon/config'

/**
 * 不带默认值的 PopuiIcon
 */
const PurePopuiIcon = createIconSet(Config, 'Popui', 'Popui.ttf')

export default PurePopuiIcon
