import { ptr } from "bun:ffi";

export default class SDLRect {
    public data = new Uint32Array([0, 0, 0, 0]);
    
    get x() {
        return this.data[0];
    }

    set x(newX: number) {
        this.data[0] = newX;
    }

    get y() {
        return this.data[1];
    }

    set y(newY: number) {
        this.data[1] = newY;
    }

    get width() {
        return this.data[2];
    }

    set width(newWidth: number) {
        this.data[2] = newWidth;
    }

    get height() {
        return this.data[3];
    }

    set height(newHeight: number) {
        this.data[3] = newHeight;
    }

    get ptr() {
        return ptr(this.data);
    }

    constructor(x?: number, y?: number, width?: number, height?: number) {
        if (x) this.x = x;
        if (y) this.y = y;
        if (width) this.width = width;
        if (height) this.height = height;
    }

    toString() {
        return `SDLRect { x: ${this.x} y: ${this.y} width: ${this.width} height: ${this.height} }`;
    }
}