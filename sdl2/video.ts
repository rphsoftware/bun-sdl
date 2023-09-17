import { ptr } from "bun:ffi";
import { SDL_video_h } from "./internal/bindings";
import { errorCheck, errorCheckCString } from "./internal/error";
import SDLRect from "./types/sdlRect";
import { SDL_DISPLAY_ORIENTATION_INNER } from "./types/sdlDisplayOrientation";




export function getNumVideoDrivers() {
    return errorCheck(SDL_video_h.SDL_GetNumVideoDrivers());
}

export function getVideoDriver(id: number) {
    return errorCheckCString(SDL_video_h.SDL_GetVideoDriver(id));
}

export function videoInit(driverName: string) {
    let buff = Buffer.concat([Buffer.from(driverName, "utf-8"), Buffer.from([0])]);
    return errorCheck(SDL_video_h.SDL_VideoInit(buff));
}

export function videoQuit() {
    SDL_video_h.SDL_VideoQuit();
}

export function getCurrentVideoDriver() {
    return errorCheckCString(SDL_video_h.SDL_GetCurrentVideoDriver());
}

export function getNumVideoDisplays() {
    return errorCheck(SDL_video_h.SDL_GetNumVideoDisplays());
}

export function getDisplayName(index: number) {
    return errorCheckCString(SDL_video_h.SDL_GetDisplayName(index));
}

export function getDisplayBounds(index: number): SDLRect {
    const _stagingRect = new SDLRect();
    errorCheck(SDL_video_h.SDL_GetDisplayBounds(index, _stagingRect.ptr));
    return _stagingRect;
}

export function getDisplayUsableBounds(index: number): SDLRect {
    const _stagingRect = new SDLRect();
    errorCheck(SDL_video_h.SDL_GetDisplayUsableBounds(index, _stagingRect.ptr));
    return _stagingRect;
}

export function getDisplayDPI(index: number) {
    const stagingBuffer = new Float32Array([0, 0, 0]);
    const pointer = ptr(stagingBuffer);
    errorCheck(SDL_video_h.SDL_GetDisplayDPI(index, pointer, pointer + 4, pointer + 8));
    return {
        ddpi: stagingBuffer[0],
        hdpi: stagingBuffer[1],
        vdpi: stagingBuffer[2]
    }
}

export function getDisplayOrientation(index: number): SDL_DISPLAY_ORIENTATION_INNER {
    return errorCheck(SDL_video_h.SDL_GetDisplayOrientation(index)) as SDL_DISPLAY_ORIENTATION_INNER
}