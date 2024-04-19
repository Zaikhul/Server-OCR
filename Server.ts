import dotenv from "dotenv";
import Apps from "./src/App";

dotenv.config();

const App = Apps();
const port = process.env.PORT;

async function main() {
  try {
    await App.listen(port);
    console.log(`Server is running at http://localhost:${port}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
