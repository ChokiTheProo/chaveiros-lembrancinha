import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const DIR = "public/lembrancinhas";

// hero é exibida maior (banner com texto) → largura um pouco maior
// edit1..6 aparecem em cards menores na galeria → largura menor
const TARGETS = {
  "hero.png": { width: 1000, quality: 82, out: "hero.webp" },
};
const GALLERY = { width: 820, quality: 80 };

const kb = (n) => (n / 1024).toFixed(0) + " KB";

const files = (await readdir(DIR)).filter((f) => f.endsWith(".png"));
let antes = 0;
let depois = 0;

for (const file of files) {
  const input = path.join(DIR, file);
  const cfg = TARGETS[file] ?? {
    width: GALLERY.width,
    quality: GALLERY.quality,
    out: file.replace(/\.png$/i, ".webp"),
  };
  const output = path.join(DIR, cfg.out);

  const sizeIn = (await stat(input)).size;
  await sharp(input)
    .resize({ width: cfg.width, withoutEnlargement: true })
    .webp({ quality: cfg.quality })
    .toFile(output);
  const sizeOut = (await stat(output)).size;

  antes += sizeIn;
  depois += sizeOut;
  console.log(`${file} (${kb(sizeIn)}) -> ${cfg.out} (${kb(sizeOut)})`);
}

console.log(`\nTOTAL: ${kb(antes)} -> ${kb(depois)}  (${(100 - (depois / antes) * 100).toFixed(0)}% menor)`);
