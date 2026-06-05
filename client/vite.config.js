/// <reference types="vitest/config" />
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  base: "/shopping-cart-full-stack/",
  // https://v2.remix.run/docs/guides/vite#plugin-usage-with-other-vite-based-tools-eg-vitest-storybook
  // Vitest나 Storybook처럼 Vite 설정 파일을 활용하는 다른 Vite 기반 도구들이 있지만,
  // Remix Vite 플러그인은 이러한 도구들과 함께 사용하도록 설계되지 않았다.
  plugins: [
    svgr(),
    !process.env.VITEST && !process.env.STORYBOOK && reactRouter(),
  ].filter(Boolean),
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          include: ["app/**/*.test.ts"],
          setupFiles: ["./vitest.setup.ts"],
        },
      },
      {
        extends: true,
        test: {
          name: "integration",
          include: ["app/**/*.test.tsx"],
          setupFiles: ["./rtl-setup.ts"],
          environment: "jsdom",
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
});
