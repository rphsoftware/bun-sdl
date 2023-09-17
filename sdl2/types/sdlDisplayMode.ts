// Original typedef:
// typedef struct
// {
//     Uint32 format;              /**< pixel format */
//     int w;                      /**< width, in screen coordinates */
//     int h;                      /**< height, in screen coordinates */
//     int refresh_rate;           /**< refresh rate (or zero for unspecified) */
//     void *driverdata;           /**< driver-specific data, initialize to 0 */
// } SDL_DisplayMode;

import { ptr } from "bun:ffi";

// TODO: Implement pixel format decoder and encoder
export default class SDLDisplayMode {
    // 0->Format, 
    // 1->W, 
    // 2->H, 
    // 3->RefreshRate,
    // (4,5)->Pointer to driverdata, we will ignore it but we have to pass it back to SDL.
    private data = new Uint32Array([0, 0, 0, 0, 0, 0]);

    get format() { return this.data[0]; }
    private set format(newFormat: number) { this.data[0] = newFormat; }

    get w() { return this.data[1]; }
    private set w(newW: number) { this.data[1] = newW; }

    get h() { return this.data[2]; }
    private set h(newH: number) { this.data[2] = newH; }

    get refreshRate() { return this.data[3]; }
    private set refreshRate(newRefreshRate: number) { this.data[3] = newRefreshRate; }

    // no getters and setters for driverdata, you are not meant to touch it.
    private get ptr() {
        return ptr(this.data);
    }

    private constructor() {} // No data constructor, this class is intended to be populated by SDL calls, and construction is internal-only
}