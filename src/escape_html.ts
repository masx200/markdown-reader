export function escape_html(string: string) {
    return string.replace(/\\/g, "&#92;").replace(/\_/g, "&#95;");
}
