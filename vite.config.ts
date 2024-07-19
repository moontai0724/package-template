/* eslint-disable import/no-extraneous-dependencies */
import { readdirSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import packageJson from "./package.json";

const name = packageJson.name.split("/").pop();
const alias = readdirSync(resolve(__dirname, "src"), { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .reduce(
    (acc, dirent) => {
      const { name: dirName } = dirent;

      acc[dirName] = resolve(__dirname, "src", dirName);

      return acc;
    },
    {} as Record<string, string>,
  );

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name,
      fileName: "index",
    },
  },
  resolve: {
    alias,
  },
  plugins: [
    dts({
      tsconfigPath: resolve(__dirname, "src/tsconfig.build.json"),
      rollupTypes: true,
    }),
  ],
});
