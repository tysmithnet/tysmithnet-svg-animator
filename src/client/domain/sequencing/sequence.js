import SequenceItem from "./sequence-item";

/**
 * Represents a composite structure of sub sequences and
 * sequence items. Instances of this class capture the
 * flow of the animation.
 * 
 * @extends SequenceItem
 */
export default class Sequence extends SequenceItem {
    
    /**
     * Create a Sequence
     * @param {string} name - the name of the sequence
     */
    constructor(name){
        super(name);
        this.items = [];
    }
    
    /**
     * Add a SequenceItem to the end of this sequence
     * @param {SequenceItem} sequenceItem - the item to append
     */
    append(sequenceItem){
        this.items.push(sequenceItem);
    }
    
    /**
     * Return a shallow copy of the items in this sequence
     * @returns {SequenceItem[]} - shallow copy of items in this sequence
     */
    getItems(){
        let copy = [];
        copy.push(...this.items);
        return copy;
    }
}