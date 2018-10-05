export const pickerData1 = [
    [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }],
    [{ label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }],
    [{ label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }],
]

export const pickerData2 = [{
    label: 'a',
    value: 'value of a',
    children: [{
        label: 'a-a',
        value: 'value of a-a',
    }, {
        label: 'a-b',
        value: 'value of a-b',
        children: [{
            label: 'a-b-a',
            value: 'value of a-b-a',
        }, {
            label: 'a-b-b',
            value: 'value of a-b-b',
        }],
    }],
}, {
    label: 'b',
    value: 'value of b',
    children: [{
        label: 'b-a',
        value: 'value of b-a',
        children: [{
            label: 'b-a-a',
            value: 'value of b-a-a',
        }, {
            label: 'b-a-b',
            value: 'value of b-a-b',
        }],
    }, {
        label: 'b-b',
        value: 'value of b-b',
        children: [{
            label: 'b-b-a',
            value: 'value of b-b-a',
        }, {
            label: 'b-b-b',
            value: 'value of b-b-b',
        }],
    }],
}]

export const pickerData3 = [{
    label: '北京',
    value: '1',
    children: [{
        label: '上海',
        value: '2',
        children: [{
            label: '浦东',
            value: '4',
            children: [],
        }],
    }, {
        label: '天津',
        value: '3',
        children: [{
            label: '天行',
            value: '5',
            children: [],
        }],
    }],
}]

export const selectedValue = ['value of b', 'value of b-b', 'value of b-b-b']
