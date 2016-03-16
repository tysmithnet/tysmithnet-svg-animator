"use strict";

import uuid from "uuid";

/**
 * Represents anything that can be placed in an animation
 * sequence. This class also serves as a null object pattern.
 */
export default class SequenceItem {
    /**
     * Create a SequenceItem
     * @param {string} name - user friendly name for this item
     */
    constructor(name) {
        this.id = uuid.v4();
        this.name = name;
    }
}
