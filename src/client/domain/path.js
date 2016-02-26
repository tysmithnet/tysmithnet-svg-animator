/**
 * Represents an abitrary SVG path
 */
export default class Path {
    
    /**
     * Create a path
     * @param {string} name - A user friendly name
     * @param {string} data - The data used to create this path, must be
     * a valid SVG path data string
     */
    constructor(name, data){
        this.name = name;
        this.data = data;
    }
}