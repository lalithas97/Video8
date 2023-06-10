const a = "Rohan";
const b = "Harry";
const c = "Mohan";
const d = "roy";

export default b; // This is by default export
// To get the named export, one needs to export all the variables you need, and note that they should be called with the same names while importing else it might throw an error.
export {a};
export {b};
export {c};
export {d};

// Named export Syntax: export{variable_name};
