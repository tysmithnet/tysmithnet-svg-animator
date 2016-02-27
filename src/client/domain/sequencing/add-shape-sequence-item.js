import Shape from "../shape";
import SequenceItem from "./sequence-item";

/**
 * Represents a sequence item that will add a shape to the
 * sequence for animating.
 */
export default class AddShapeSequenceItem extends SequenceItem {
    
    /**
     * Creates a AddShapeSequenceItem
     * @param {string} name - user friendly name for this item
     * @param {Shape} shape - the shape to be added 
     */
    constructor(name, shape) {
        super(name)
        this.shape = shape;
    }
}