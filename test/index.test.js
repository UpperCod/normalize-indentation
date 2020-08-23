import test from "ava";
import normalizeIndentation from "../esm";

const ok = `
line a
line b
    line c.1
    line c.2
  line f.1
  line f.2
`;

test("simple replace", async (t) => {
    const str = `
        line a
        line b
            line c.1
            line c.2
          line f.1
          line f.2
    `;
    t.is(normalizeIndentation(str), ok);
});
