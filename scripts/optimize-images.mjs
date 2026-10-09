// Converts source PNGs in assets/images into the right-sized WebP files the pages import.
// Run with: npm run images
import sharp from 'sharp';
import { stat } from 'node:fs/promises';

const dir = 'assets/images';

// width = the largest size we ever render (about 2x the CSS display width)
const images = [
    { name: 'mission-hero', width: 1000 },
    { name: 'logo', width: 240 },
];

for (const { name, width } of images) {
    const input = `${dir}/${name}.png`;
    const output = `${dir}/${name}.webp`;
    const info = await sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(output);
    const before = (await stat(input)).size;
    console.log(
        `${name}: ${(before / 1024).toFixed(0)} KB -> ${(info.size / 1024).toFixed(0)} KB (${info.width}x${info.height})`
    );
}
