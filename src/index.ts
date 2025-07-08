import prompt from "prompt";
import chalk from "chalk";
import mainPrompt from "./prompts/prompt-main";
import createQRCode from "./services/qr-core/create";
import createPassword from "./services/password/create";

const log = console.log;

async function main() {
  prompt.get(mainPrompt, async (err: Error | null, result: { select: string }) => {
    if (result.select == "1") await createQRCode();
    if (result.select === "2") await createPassword();
  });

  prompt.start();
}

main();
