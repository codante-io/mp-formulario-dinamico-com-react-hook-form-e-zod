# Formulário Dinâmico com React Hook Form e Zod

Fazer um formulário na vida real nem sempre é uma tarefa trivial. Nuances como validação, mensagens de erro e máscaras de preenchimento tornam o processo um pouco menos intuitivo. Neste Mini Projeto, você vai aprender a criar um formulário de cadastro dinâmico usando React Hook Form e Zod para facilitar o desenvolvimento.

React Hook Form e Zod são, respectivamente, as principais ferramentas da indústria para gerenciamento de formulários no React e validação _client_ e _server side_.

O formulário de cadastro terá como funcionalidades:

- Validação e erros diretamente no cliente
- Validação e erros provenientes do servidor
- Botão para esconder/revelar senha
- Preenchimento automático de endereço e cidade de acordo com o CEP
- Máscara para telefone celular, CPF e CEP

Tudo isso usando React, React Hook Forms e Zod.

## 🤓 Antes de começar

O design e a UI do front-end já estão implementados! O objetivo aqui é conseguir fazer as funcionalidades do formulário, bem como aprender as bibliotecas React Hook Form e Zod.

Para isso, basta fazer um fork, clonar o código para a sua máquina, instalar as dependências e rodar `pnpm run dev` ou `npm run dev`!

### A API

O seu formulário deverá ser submetido para uma API desenvolvida por nós. O endpoint está em `https://apis.codante.io/api/register-user/register`. Esta API irá retornar um código `200` se todos os dados estiverem corretos; ou um `422` caso haja algum erro de validação. Você deverá implementar em seu código também as mensagens de validação retornadas pelo servidor.

A documentação da API está em <a target="_blank" href="https://apis-docs.codante.io/register-user">https://apis-docs.codante.io/register-user</a>. Será necessário consultá-la para fazer este Mini Projeto.

## 🔨 Requisitos

**Botão para esconder / revelar senha**

- Crie um botão que, ao clicar, revele ou esconda as senhas diretamente no formulário.
- Este botão deverá ser um ícone que represente que a senha está escondida ou revelada (no código já há uma sugestão de ícone).
- O botão deve possuir, no mínimo, a acessibilidade de ser ativado via teclado (deve ser possível navegar até ele usando a tecla `tab`).

**Máscara de telefone, CPF e CEP**

- Implemente, do zero ou usando uma biblioteca, uma máscara para os inputs de `telefone`, `cpf` e `cep`.
- Uma sugestão para as máscaras é, respectivamente, `(00) 00000-0000`, `000.000.000-27` e `00000-000`.

**Preenchimento automático de Endereço (rua) e Cidade após preenchido o CEP**

- Após preenchido o CEP, busque em alguma API de CEP os dados de logradouro e cidade.
- Preencha os inputs de endereço e cidade com os dados retornados.

> [!NOTE]
> Antes de implementar sua solução, pense em qual será o melhor evento para ser escutado neste input.

**Uso da Biblioteca React Hook Form e Zod**

- Todo o formulário deverá ser "regido" pela biblioteca `React Hook Form`.
- A validação deverá ser "regida" pela biblioteca `Zod`.
- A validação dos dados deverá ocorrer no front-end de acordo com as regras estipuladas:
    - `name`: obrigatório, máximo de 255 caracteres.
    - `email`: obrigatório, deve ser um e-mail válido, máximo de 255 caracteres.
    - `password`: obrigatório, mínimo de 8 caracteres, máximo de 255 caracteres.
    - `password_confirmation`: obrigatório, mínimo de 8 caracteres, máximo de 255 caracteres.
    - `terms`: obrigatório, deve ser um booleano.
    - `phone`: obrigatório, máximo de 20 caracteres.
    - `cpf`: obrigatório, máximo de 14 caracteres, deve seguir o padrão 000.000.000-00, deve ser um CPF válido.
    - `zipcode`: obrigatório, máximo de 9 caracteres, deve seguir o padrão 00000-000.
    - `address`: obrigatório, máximo de 255 caracteres.
    - `city`: obrigatório, máximo de 255 caracteres.
- Todos os dados devem ser submetidos de uma vez só para o endpoint da API do Codante.

**Implementação de validação server-side**

Além da validação client-side, a nossa **API** também implementa uma validação *server-side*. Um exemplo que pode ser explorado é o caso do campo `cpf`: na validação *client-side* vamos checar apenas o "formato" do CPF, enquanto na validação *server-side* da API também checamos se o CPF é válido pelo seu dígito verificador.

- Implemente, além da validação *client-side*, também as mensagens de erro de validação retornadas pela API.

## 🔨 Desafio extra para quem quer ir além

- Crie uma mensagem de sucesso quando a resposta da API for `200`.

## 🎨 Design Sugerido

Neste Mini Projeto, não será preciso implementar nenhum design - já fizemos isso por você.

## 👉🏽 O que você irá praticar:

#### Formulários com React Hook Form e Zod

- Validação *client-side*
- Validação *server-side*
- `schemas` no `zod`
- Biblioteca `react-hook-form`

#### Formulários HTML e React

- Formulários HTML
- Formulários interativos controlados
- Eventos em formulários (_blur_, _click_)

## Pré-requisitos

- React básico/intermediário
