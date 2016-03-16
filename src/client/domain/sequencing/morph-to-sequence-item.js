"use strict";

import SequenceItem from "./sequence-item";

export default class MorphToSequenceItem extends SequenceItem {
    constructor(name, target, destination) {
        super(name);
        this.target = target;
        this.destination = destination;
    }
}
