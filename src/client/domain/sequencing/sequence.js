import SequenceItem from "./sequence-item";

/**
 * Represents a composite structure of sub sequences and
 * sequence items. Instances of this class capture the
 * flow of the animation.
 */
export default class Sequence extends SequenceItem {
    
    /**
     * Create a Sequence
     * @param {string} name - the name of the sequence
     */
    constructor(name){
        super(name);
    }
}