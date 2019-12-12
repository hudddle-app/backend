const app = require("./server");
const logger = require("./lib/logger");

const port = process.env.PORT;
app.listen(port, () => logger.debug(`Serving Hudddle @ ${port}`));
