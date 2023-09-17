import { orientationAsString } from "../../sdl2/types/sdlDisplayOrientation";
import * as video from "../../sdl2/video";

console.log("== Available video drivers: ==");
console.log(`Amount: ${video.getNumVideoDrivers()}`);

for (let index = 0; index < video.getNumVideoDrivers(); index++) {
    console.log(`\nDriver[${index}]: ${video.getVideoDriver(index)}`);

    try {
        console.log("- Initializing...");
        video.videoInit(video.getVideoDriver(index));
        
        console.log(`Display count: ${video.getNumVideoDisplays()}`);
        for (let displayIndex = 0; displayIndex < video.getNumVideoDisplays(); displayIndex++) {
            console.log(`Display[${displayIndex}]: ${video.getDisplayName(displayIndex)}`);
            console.log(`- Bounds: ${video.getDisplayBounds(displayIndex)}`);
            console.log(`- Usable Bounds: ${video.getDisplayUsableBounds(displayIndex)}`);
            console.log(`- DPI: ${JSON.stringify(video.getDisplayDPI(displayIndex))}`);
            console.log(`- Orientation: ${video.getDisplayOrientation(displayIndex)} [${orientationAsString(video.getDisplayOrientation(displayIndex))}]`)
            console.log(`- Mode count: ${video.getNumDisplayModes(displayIndex)}`);
        }

        console.log("- Quitting...");
        video.videoQuit();
    } catch(e) {
        console.log(`Error: ${(e as Error).message}`)
        video.videoQuit();
    }
}

