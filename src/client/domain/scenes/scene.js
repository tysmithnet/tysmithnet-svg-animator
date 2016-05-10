"use strict";

import Sequence from "../sequencing/sequence";

export default class Scene {
    constructor(name, sceneDisplay) {
        this.name = name;
        this.sceneDisplay = sceneDisplay;
        this.sequence = new Sequence("root");
    }
}