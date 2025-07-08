import chalk from "chalk";

const prompQrCode = [
    {
        name:"link",
        description: chalk.yellow("Digite o link para gerar o QR Code")
    },
    {
        name: "type",
        description: chalk.yellow("Digite o tipo de QR Code (ex: 1 - terminal, 2 - image)"),
        pattern: /^[1-2]$/,
        message: chalk.red.italic("Digite 1 para terminal ou 2 para imagem"),        
        required: true
    }
]



export default prompQrCode;
