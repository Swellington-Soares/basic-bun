import chalk from "chalk";
import qr from "qrcode-terminal"

const createQRCodeCallback = (err: Error | null, result: { link: string, type: string }) => {
    const isSmall = result.type === "1";
    qr.generate(result.link, { small: isSmall }, (qrcode: string) => {
        if (isSmall) {
            console.log(qrcode);
        }
        console.log(chalk.green.bold("QR Code gerado com sucesso!\n"));
    });
    
}

export default createQRCodeCallback;