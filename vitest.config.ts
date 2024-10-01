import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        enabled: true,
        include: ["src/**/*.ts"],
        reportOnFailure: true,
        reporter: ["text", "text-summary", "json", "html", "cobertura"],
      },
      outputFile: {
        junit: "./coverage/junit-report.xml",
      },
      passWithNoTests: true,
      reporters: ["default", "junit"],
      typecheck: {
        checker: "tsc",
        tsconfig: "./tests/tsconfig.json",
      },
    },
  }),
);
