import dotenv from "dotenv";
import App from "./src/App";

dotenv.config();

const server = new App().app;
const port = process.env.PORT || 3000;

async function main() {
  try {
    await server.listen(port);
    console.log(`Server is running at http://localhost:${port}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
