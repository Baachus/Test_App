"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorRange = void 0;
class ColorRange {
    constructor() {
        // Function to parse the RGB values from the color string
        this.parseRGB = (color) => {
            const match = color.match(/\d+/g); // This regex matches all numbers in the string
            return match ? match.map(Number) : null; // Convert matches to numbers
        };
        // Function to check if the color is within the desired range
        this.isColorInRange = (color, target, tolerance) => {
            const [r, g, b] = this.parseRGB(color);
            return (Math.abs(r - target.r) <= tolerance &&
                Math.abs(g - target.b) <= tolerance &&
                Math.abs(b - target.g) <= tolerance);
        };
    }
}
exports.ColorRange = ColorRange;
