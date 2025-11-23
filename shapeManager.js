const SHAPE_TYPE = ["L", "L_REV", "DOG", "DOG_REV", 
    "LINE", "SQUARE", "PLUS"]

function getBaseShape(shapeType) {
    let baseShape = {}
    baseShape["L"] = [{col: -1, row: -1}, {col: 0, row: -1}, {col: 0, row: 0}, {col: 0, row: 1}]
    baseShape["L_REV"] = [{col: 0, row: -1}, {col: 1, row: -1}, {col: 0, row: 0}, {col: 0, row: 1}]
    baseShape["DOG"] = [{col: 0, row: 0}, {col: 1, row: 0}, {col: -1, row: 1}, {col: 0, row: 1}]
    baseShape["DOG_REV"] = [{col: -1, row: 0}, {col: 0, row: 0}, {col: 0, row: 1}, {col: 1, row: 1}]
    baseShape["LINE"] = [{col: 0, row: -2}, {col: 0, row: -1}, {col: 0, row: 0}, {col: 0, row: 1}]
    baseShape["SQUARE"] = [{col: 0, row: 0}, {col: 1, row: 0}, {col: 0, row: 1}, {col: 1, row: 1}]
    baseShape["PLUS"] = [{col: 0, row: -1}, {col: -1, row: 0}, {col: 0, row: 0}, {col: 1, row: 0}]
    return baseShape[shapeType]
}

function rotateShape(baseShape, orientation) {
    rotatedShape = baseShape
    for (i = 0; i < orientation; i++) {
        rotatedShape = rotatedShape.map(sq => {return {col: -sq.row, row: sq.col}})
    }
    return rotatedShape
}

function getShape(shapeType, top, left, shape_orient) {
    baseShape = getBaseShape(shapeType)
    rotatedShape = rotateShape(baseShape, shape_orient)
    shapeWithOffset = rotatedShape.map(square => {
        return {row: square.row + top, col: square.col + left}
    })
    return shapeWithOffset
}
