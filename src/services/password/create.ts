import chalk from "chalk";
import { allowedCharacters, shuffle } from "./utils";

async function createPassword(){
    let characters: Array<string> = allowedCharacters();

    if (characters.length === 0) {
        console.log(chalk.red.bold("Nenhum tipo de caractere selecionado!"));
        return;
    }

    const minLength = parseInt(process.env.PASSWORD_MIN_LENGTH || "8");
    const maxLength = parseInt(process.env.PASSWORD_MAX_LENGTH || "16");

    characters = shuffle(characters)
    characters = shuffle(characters)

    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

    let password = characters.slice(0, passwordLength).join("");

    console.log(chalk.green.bold("Senha gerada:"));
    console.log(chalk.blue.bold(password),"\n");

}

export default createPassword;

