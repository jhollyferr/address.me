# address.me

Cadastro de usuário e seu endereço.

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar
- [x] Deve ser possível adicionar um endereço ao usuário
- [x] Deve ser possível buscar um endereço ao usuário pelo cep

## RNs (Regras de negócios)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado
- [x] Usuário deve informar cep para realizar um auto complete de seu endereço

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [x] O banco deve estar em um container docker
- [x] A busca de endereço deve ser feita por uma API exerna (viacep ou outro)

## Como instalar ?

obs: necessário ter docker e nodejs em sua máquina

1. No diretório raiz executar `yarn && yarn bootstrap` para instalar as dependencias.
2. No diretório raiz criar `.env` e copiar as variáveis de `.env.example` para este novo arquivo.
3. Execute o seguinte comando `docker compose up -d` para iniciar o container com o banco postgres.
4. Navegue atá o diretório `packages/api` e execute `npx prisma migrate dev`
5. Crie um `.env` e copie as variáveis de `.env.example` para este novo arquivo
6. Navegue atá o diretório `packages/web` e execute o passo 5 para o mesmo.
7. Volte ao diretório raiz e execute `yarn dev` para iniciar os pacotes em modo de desenvolvimento
8. Caso queira executar os testes unitários execute `yarn test`
9. Caso queira executar os testes e2e execute `yarn test:e2e`

Pronto você terá a api executando na porta `3333` e o web app na porta `5173`
No diretório raiz voce terá o json para testar as rotas no insomnia

Caso não consiga iniciar os pacotes navegue até os diretórios `/web` e `/api` e execute em cada uma delas o comando `yarn install`

## Demo

1. WEB: https://address-me-web.vercel.app/
2. API: https://address-me-api.onrender.com
