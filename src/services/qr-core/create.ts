import prompt from "prompt";
import prompQrCode from "../../prompts/prompt-qbcode";
import createQRCodeCallback from "./handle";

async function createQRCode() {
    prompt.get(prompQrCode,  createQRCodeCallback);
    prompt.start();
}


export default createQRCode;