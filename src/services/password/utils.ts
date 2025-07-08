const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SPECIAL_CHARACTERS = "!@#$%^&*()_+[]{}|";

function allowedCharacters(): string[] {
  const characters: string[] = [];

  if (process.env.PASSWORD_ALLOW_LOWERCASE_LETTERS === "true") {
    characters.push(...LOWERCASE_LETTERS.split(""));
  }

  if (process.env.PASSWORD_ALLOW_UPPERCASE_LETTERS === "true") {
    characters.push(...UPPERCASE_LETTERS.split(""));
  }

  if (process.env.PASSWORD_ALLOW_NUMBERS === "true") {
    characters.push(...NUMBERS.split(""));
  }

  if (process.env.PASSWORD_ALLOW_SPECIAL_CHARACTERS === "true") {
    characters.push(...SPECIAL_CHARACTERS.split(""));
  }

  return characters;
}

const shuffle = <T>(array: T[]) => {
  if (array.length <= 1) return array;

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i] as T, array[j] as T] = [array[j] as T, array[i] as T];
  }
  return array;
};

export { shuffle, allowedCharacters };
