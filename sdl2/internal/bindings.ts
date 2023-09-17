import { FFIType, dlopen } from "bun:ffi";
import { errorCheckCString } from "./error";

const { symbols } = dlopen(
    "libSDL2.so",
    {
        ...{

            SDL_Init: {
                args: [ FFIType.u32 ],
                returns: FFIType.i32
            },
            SDL_InitSubSystem: {
                args: [ FFIType.u32 ],
                returns: FFIType.i32
            },
            SDL_QuitSubSystem: {
                args: [ FFIType.u32 ]
            },
            SDL_WasInit: {
                args: [ FFIType.u32 ],
                returns: FFIType.u32
            },
            SDL_Quit: {},
        },  // SDL.h

        ...{
            // Implementation remarks:
            // - SDL_SetError is unsupported, because it makes no sense in the context of a JavaScript program calling into SDL. 
            // - SDL_GetErrorMsg is unsupported, because it overcomplicates the process of getting an error, and functions the same as GetError.
            SDL_GetError: {
                args: [],
                returns: FFIType.cstring
            },
            SDL_ClearError: {}
        }, // SDL_error.h

        ...{
            SDL_GetNumVideoDrivers: {
                returns: FFIType.i32
            },
            SDL_GetVideoDriver: {
                args: [FFIType.i32],
                returns: FFIType.cstring
            },
            SDL_VideoInit: {
                args: [FFIType.cstring],
                returns: FFIType.i32
            },
            SDL_VideoQuit: {},
            SDL_GetCurrentVideoDriver: {
                returns: FFIType.cstring
            },
            SDL_GetNumVideoDisplays: {
                returns: FFIType.i32
            },
            SDL_GetDisplayName: {
                args: [ FFIType.i32 ],
                returns: FFIType.cstring
            },
            SDL_GetDisplayBounds: {
                args: [ FFIType.i32, FFIType.ptr ],
                returns: FFIType.i32
            },
            SDL_GetDisplayUsableBounds: {
                args: [ FFIType.i32, FFIType.ptr ],
                returns: FFIType.i32
            },
            SDL_GetDisplayDPI: {
                args: [ FFIType.i32, FFIType.ptr, FFIType.ptr, FFIType.ptr ],
                returns: FFIType.i32
            },
            SDL_GetDisplayOrientation: {
                args: [ FFIType.i32 ],
                returns: FFIType.i32
            }
        }, // SDL_video.h
    }
);

export const SDL_h = { 
    SDL_Init: symbols.SDL_Init,
    SDL_InitSubSystem: symbols.SDL_InitSubSystem,
    SDL_QuitSubSystem: symbols.SDL_QuitSubSystem,
    SDL_WasInit: symbols.SDL_WasInit,
    SDL_Quit: symbols.SDL_Quit
}

export const SDL_error_h = {
    SDL_GetError: symbols.SDL_GetError,
    SDL_ClearError: symbols.SDL_ClearError
}

export const SDL_video_h = {
    SDL_GetNumVideoDrivers: symbols.SDL_GetNumVideoDrivers,
    SDL_GetVideoDriver: symbols.SDL_GetVideoDriver,
    SDL_VideoInit: symbols.SDL_VideoInit,
    SDL_VideoQuit: symbols.SDL_VideoQuit,
    SDL_GetCurrentVideoDriver: symbols.SDL_GetCurrentVideoDriver,
    SDL_GetNumVideoDisplays: symbols.SDL_GetNumVideoDisplays,
    SDL_GetDisplayName: symbols.SDL_GetDisplayName,
    SDL_GetDisplayBounds: symbols.SDL_GetDisplayBounds,
    SDL_GetDisplayUsableBounds: symbols.SDL_GetDisplayUsableBounds,
    SDL_GetDisplayDPI: symbols.SDL_GetDisplayDPI,
    SDL_GetDisplayOrientation: symbols.SDL_GetDisplayOrientation
}

