import Shape from "../shape";
import SequenceItem from "./sequence-item";

export default class AddShapeSequenceItem extends SequenceItem {
    constructor(name, shape) {
        super(name)
        this.shape = shape;
    }
}