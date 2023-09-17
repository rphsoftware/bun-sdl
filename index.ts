import { CString, dlopen, FFIType, suffix } from "bun:ffi";
import { viewSource } from 'bun:ffi'

import "./sdl2/internal/bindings";
import { init, SDL_INIT } from "./sdl2/sdl";
init(SDL_INIT.EVERYTHING);
/*
const {
    symbols: {
        SDL_Init,
        SDL_CreateWindow,
        SDL_Delay,
        SDL_GetWindowSurface,
        SDL_FillRect,
        SDL_UpdateWindowSurface
    }
} = dlopen(
    "libSDL2.so",
    {
        SDL_Init: {
            args: [ FFIType.u32 ],
            returns: FFIType.u32
        },
        SDL_CreateWindow: {
            args: [ FFIType.cstring, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32 ],
            returns: FFIType.ptr
        },
        SDL_Delay: {
            args: [ FFIType.u32 ]
        },
        SDL_GetWindowSurface: {
            args: [ FFIType.ptr ],
            returns: FFIType.ptr
        },
        SDL_FillRect: {
            args: [ FFIType.ptr, FFIType.ptr, FFIType.u32 ],
            returns: FFIType.i32
        },
        SDL_UpdateWindowSurface: {
            args: [ FFIType.ptr ],
            returns: FFIType.i32
        }
    }
)

const SDL_INIT = {
    TIMER:          0x0001,
    AUDIO:          0x0010,
    VIDEO:          0x0020,
    JOYSTICK:       0x0200,
    HAPTIC:         0x1000,
    GAMECONTROLLER: 0x2000,
    EVENTS:         0x4000,
    SENSOR:         0x8000,
    EVERYTHING:     0
};
SDL_INIT.EVERYTHING = 
    SDL_INIT.TIMER | SDL_INIT.AUDIO | SDL_INIT.VIDEO | SDL_INIT.EVENTS | 
    SDL_INIT.JOYSTICK | SDL_INIT.HAPTIC | SDL_INIT.GAMECONTROLLER | SDL_INIT.SENSOR;

console.log(SDL_Init(SDL_INIT.EVERYTHING));
let window = SDL_CreateWindow(Buffer.from("Test\0","utf-8"), 0x2FFF0000, 0x2FFF0000, 800, 600, 4);
let surface = SDL_GetWindowSurface(window);

let rect = new SDLRect(10, 10, 50, 30);

console.log(SDL_FillRect(surface, rect.data, 0xFF00FFFF));
console.log(SDL_UpdateWindowSurface(window));
console.log(window, surface);
SDL_Delay(6000);*/