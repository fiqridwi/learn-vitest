import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import HelloWorld from "./HelloWorld.vue";
describe("HelloWorld", () => {
	it("renders props when passed", () => {
		const msg = "Hello, Vue!";
		render(HelloWorld, {
			props: { msg },
		});

		expect(screen.getByText(msg)).toBeInTheDocument();
	});
});
