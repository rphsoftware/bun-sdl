import { Unique } from "../internal/utility";

const _SDL_DISPLAY_ORIENTATION = {
    UNKNOWN: 0,
    LANDSCAPE: 1,
    LANDSCAPE_FLIPPED: 2,
    PORTRAIT: 3,
    PORTRAIT_FLIPPED: 4
};

export type SDL_DISPLAY_ORIENTATION_INNER = Unique<0|1|2|3|4, "SDL_DISPLAY_ORIENTATION">;
type SDL_DISPLAY_ORIENTATION_TYPE = {
    [k in keyof typeof _SDL_DISPLAY_ORIENTATION]: SDL_DISPLAY_ORIENTATION_INNER
};

const mapper: { [index in 0|1|2|3|4]: string } = {
    0: "UNKNOWN",
    1: "LANDSCAPE",
    2: "LANDSCAPE_FLIPPED",
    3: "PORTRAIT",
    4: "PORTRAIT_FLIPPED"
};

export const SDL_DISPLAY_ORIENTATION = _SDL_DISPLAY_ORIENTATION as SDL_DISPLAY_ORIENTATION_TYPE;
export function orientationAsString(o: SDL_DISPLAY_ORIENTATION_INNER) {
    return mapper[o as 0|1|2|3|4];
}
