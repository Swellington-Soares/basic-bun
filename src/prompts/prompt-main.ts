import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.blue( "Escolha a ferramenta (1 - QBCORE ou 2 - PASSWORD)" ),
        pattern: /^(1|2)$/,
        message: chalk.red( "Digite 1 para QBCORE ou 2 para PASSWORD" ),
        required: true,
    }];

export default mainPrompt;