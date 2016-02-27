/**
 * Represents an abitrary SVG path
 */
export default class Path {
    
    /**
     * Create a path
     * @param {string} name - a user friendly name
     * @param {string} data - the data used to create this path, must be
     * a valid SVG path data string
     */
    constructor(name, data){
        this.name = name;
        this.data = data;
    }
}