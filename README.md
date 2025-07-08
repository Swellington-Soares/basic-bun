# 🔐 QRCore Terminal & Password Generator

Projeto feito com [**Bun**](https://bun.sh/) e **TypeScript**, com o objetivo de oferecer um utilitário de linha de comando para:

- ✅ Gerar senhas aleatórias com base em configurações personalizadas.
- ✅ Criar QR Codes a partir de links, com opção de exibir no terminal ou salvar como imagem.

---

## 🚀 Como Usar

### 1. Instalação

Clone o repositório e instale as dependências:

```bash
bun install
```

### 2. Configuração do `.env`

Crie um arquivo `.env` na raiz com as seguintes variáveis para configurar o gerador de senhas:

```env
PASSWORD_ALLOW_LOWERCASE_LETTERS=true
PASSWORD_ALLOW_UPPERCASE_LETTERS=true
PASSWORD_ALLOW_NUMBERS=true
PASSWORD_ALLOW_SPECIAL_CHARACTERS=true
PASSWORD_MIN_LENGTH=8
PASSWORD_MAX_LENGTH=16
```

Ajuste os valores conforme suas preferências.

### 3. Execução

Inicie o projeto com:

```bash
bun run start
```

Será exibido um menu com duas opções:

```
[1] Gerar QR Code
[2] Gerar Senha Aleatória
```

---

## ✨ Funcionalidades

### 🔒 Gerador de Senhas Aleatórias

Gera senhas com base nas regras definidas no `.env`.  
Ideal para uso seguro em aplicações, autenticações, etc.

- Letras maiúsculas e minúsculas
- Números
- Caracteres especiais
- Comprimento entre valores mínimos e máximos

### 📱 Gerador de QR Code

Ao escolher essa opção, o programa solicita:

Digite o **link** para gerar o QR Code.

Digite o tipo de QR Code (ex: 1 - terminal, 2 - image)

---

## 📁 Estrutura do Projeto

```
.
|-- README.md
|-- bun.lock
|-- index.ts
|-- package.json
|-- src
|   |-- index.ts
|   |-- prompts
|   |   |-- prompt-main.ts
|   |   `-- prompt-qbcode.ts
|   `-- services
|       |-- password
|       |   |-- create.ts
|       |   |-- handle.ts
|       |   `-- utils.ts
|       `-- qr-core
|           |-- create.ts
|           `-- handle.ts
`-- tsconfig.json
```

---

## ✅ Requisitos

- [Bun](https://bun.sh/docs/installation) instalado globalmente
- Terminal compatível com UTF-8 (para visualizar QR codes no terminal)

---

## 📄 Licença

Distribuído sob a licença MIT.  
Sinta-se à vontade para usar, modificar e contribuir com melhorias!

---

Feito com s2 por Swellington Soares.