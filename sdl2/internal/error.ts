import { CString } from "bun:ffi";
import { SDL_error_h } from "./bindings";

function internalErrorCheck(): never {
    const error = SDL_error_h.SDL_GetError()!;
    SDL_error_h.SDL_ClearError();

    throw new Error(`SDL Error: ${error}`);
}

export function errorCheck(status: number|null): number {
    if (status !== null && status >= 0) return status;
    internalErrorCheck();
}

export function errorCheckCString(status: CString): string {
    if (status.ptr !== 0) return status as unknown as string
    internalErrorCheck();
}