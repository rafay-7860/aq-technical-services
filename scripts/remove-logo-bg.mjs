import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const input = path.resolve(
  "C:/Users/samsung/.cursor/projects/c-Users-samsung-Downloads-AQ-Technical-Services/assets/Ajmal_Technical_Services_Logo-e7e7da1d-790b-4f94-9fae-567173ecb722.png",
);
const output = path.join(root, "public", "images", "logo.png");
const outputIcon = path.join(root, "public", "images", "logo-mark.png");

const threshold = 28;

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (r <= threshold && g <= threshold && b <= threshold) {
    data[i + 3] = 0;
  }
}

await sharp(data, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .trim()
  .png()
  .toFile(output);

await sharp(output)
  .resize(320, 320, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(outputIcon);

console.log("Wrote", output);
console.log("Wrote", outputIcon);
