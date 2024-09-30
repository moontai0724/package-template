import { describe, expect, it } from "vitest";

describe("integration test", () => {
  it("should be able to execute", async () => {
    await expect(import("@/index")).resolves.toBeDefined();
  });
});
