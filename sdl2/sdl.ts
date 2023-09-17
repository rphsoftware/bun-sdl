import { SDL_h } from "./internal/bindings";
import { errorCheck } from "./internal/error";
import { Unique } from "./internal/utility";

const _SDL_INIT = {
    TIMER:          0x0001,
    AUDIO:          0x0010,
    VIDEO:          0x0020,
    JOYSTICK:       0x0200,
    HAPTIC:         0x1000,
    GAMECONTROLLER: 0x2000,
    EVENTS:         0x4000,
    SENSOR:         0x8000,
    EVERYTHING:     0xF231
};

type SDL_INIT_INNER = Unique<0x1 | 0x10 | 0x20 | 0x200 | 0x1000 | 0x2000 | 0x4000 | 0x8000 | 0xF231, "SDL_FLAG_INNER">;
type SDL_INIT_TYPE = {
    [k in keyof typeof _SDL_INIT]: SDL_INIT_INNER
};

export const SDL_INIT = _SDL_INIT as SDL_INIT_TYPE;

export function init(flags: SDL_INIT_INNER) {
    return errorCheck(SDL_h.SDL_InitSubSystem(flags));
}