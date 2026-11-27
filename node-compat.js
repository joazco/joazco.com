// Node 25+ removed SlowBuffer, which the jsonwebtoken copy bundled in Next 12 still reads.
// shortcut: remove this file (and NODE_OPTIONS in package.json) once Next is upgraded.
const buffer = require("buffer");
if (!buffer.SlowBuffer) buffer.SlowBuffer = buffer.Buffer;
