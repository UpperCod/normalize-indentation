const getValue = (str) =>
    str.split("").reduce((total, str) => (total += str.charCodeAt()), 0);
/**
 * Normalize the indentation of a string
 * @param {string} str - string to normalize indentation
 * @param {string} [indentation="  "] - spaces to represent as tabs
 */
export default function normalizeIndentation(str, indent = "  ") {
    const range = [];
    let sort;
    return str
        .split(/\n/)
        .map((line) => {
            if (line.trim()) {
                const [, spaces, content] = line.match(/^(\s*)(.*)/);
                const value = getValue(spaces);
                if (!range.includes(value)) range.push(value);
                return [value, content];
            } else {
                return [0, ""];
            }
        })
        .map(([value, content, line]) => {
            if (!sort) {
                sort = true;
                range.sort();
            }
            return (
                indent.repeat(value > 0 ? range.indexOf(value) : 0) + content
            );
        })
        .join("\n");
}
