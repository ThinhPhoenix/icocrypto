const enum Position {
    Bottom = 'bottom',
    Center = 'centered',
    Left = 'left',
    Right = 'right',
    Top = 'top',
}

const enum PositionStyleable {
    Modal = 'modal-dialog'
}

const getPosition = (
    item: Position, 
    style?: PositionStyleable
): string => {
    return `${style}-${item}`; // If style is provided, return 'style-item', otherwise return an empty string
}

export { Position, PositionStyleable, getPosition };