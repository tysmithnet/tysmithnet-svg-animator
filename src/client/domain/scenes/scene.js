"use strict";

import Sequence from "../sequencing/sequence";

export default class Scene {
    constructor(name) {
        this.name = name;
        this.sequence = new Sequence("root");
    }
}