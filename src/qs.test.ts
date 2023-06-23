import { describe, expect, test } from "vitest";
import sort from "./qs";

describe("quicksort", () => {
    test("1", () => {
        const size = 102400;
        const input = new Array<number>(size);
        for (let i = 0; i < size; ++i) {
            input[i] = Math.round(Math.random() * 1000);
        }

        const qsOutput = structuredClone(input);
        sort(qsOutput);

        const checkOutput = input.sort((a, b) => a - b);
        expect(qsOutput).toEqual(checkOutput);
    });
});
