const spec = require("elasticsearch-client-specification");

let specification = new spec.Specification();
console.log("The specification contains " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");

specification = spec.Specification.load();
console.log("The specification contains " + specification.endpoints.length + " endpoints yielding " + specification.types.length + " types");
