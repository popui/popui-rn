export default {
    CellBg: '#FFFFFF',
    CellBorderColor: '#D9D9D9',
    CellGapV: 10,
    CellGapH: 15,
    CellInnerGapH: 17 * 0.35, // '.35em'
    CellHeight: 44,
    CellFontSize: 17,
    CellTipsFontSize: 14,
    CellLabelWidth: 105,

    // unit((CellHeight - 2 * CellGapV) / CellFontSize)
    // 高度为44，减去上下padding的行高
    CellLineHeight: 44 - 20,
    // unit(20 / @CellFontSize, em),
    CellsMarginTop: 20,

    //  switch
    SwitchHeight: 32,

    //  uploader
    UploaderBorderColor: '#D9D9D9',
    UploaderActiveBorderColor: '#999999',
    UploaderFileSpacing: '9px',
    UploaderSize: '79px',
    UploaderBorderWidth: '1px',
}
