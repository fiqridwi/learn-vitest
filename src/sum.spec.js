import sum from "./sum";
import { describe, expect, test } from "vitest";

describe("sum", () => {
	test("adds two numbers", () => {
		expect(sum(1, 2)).toBe(3);
	});
});
