const payload = await Bun.file("SDL_video.h").text();

let currentDeclaration = null;

for (let line of payload.split('\n')) {
    if (line.startsWith("extern DECLSPEC")) {
        console.log(line);
    }
}