/**
 * Represents an abitrary SVG shape
 * For example, you could have an SVGPath element like:
 * <path d="M 0 50 h 10 v 10 z"></path>
 * This is an abstraction over the shape that makes
 */
export default class Shape {
    
    /**
     * Create a path
     * @param {string} data - the data used to create this path, must be
     * a valid SVG path data string
     */
    constructor(data){
        this.data = data;
    }
}