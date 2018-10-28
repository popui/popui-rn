/**
 * Icon icon set component.
 * Usage: <PureIconPopui name=icon_name size={20} color=#4F8EF7 />
 */
import { createIconSet } from '@expo/vector-icons'
import Config from '@popui/popui-rn/components/Icon/IconPopui/config'

/**
 * 不带默认值的 IconPopui
 */
const PureIconPopui = createIconSet(Config, 'Popui', 'Popui.ttf')

export default PureIconPopui
