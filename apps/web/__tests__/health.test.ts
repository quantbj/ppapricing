import { describe, expect, it } from "vitest";

import { mapApiHealth } from "../lib/health";

describe("mapApiHealth", () => {
  it("returns status when payload is valid", () => {
    expect(mapApiHealth({ status: "ok" })).toEqual({ status: "ok" });
  });

  it("throws on invalid payload", () => {
    expect(() => mapApiHealth({})).toThrowError("Invalid health payload");
  });
});
