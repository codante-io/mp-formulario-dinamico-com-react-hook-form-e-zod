# Nome do Mini Projeto

Fazer um formulário na vida real nem sempre é uma tarefa trivial. Nuances como validação, mensagens de erro e máscaras de preenchimento tornam o processo um pouco menos intuitivo. Neste mini projeto, você vai aprender a criar um formulário de cadastro dinâmico usando React Hook Form e Zod para facilitar o desenvolvimento.

O formulário terá como funcionalidades: 

- Validação e erros diretamente no cliente
- Validação e erros provenientes do servidor
- Botão para esconder/revelar senha
- Preenchimento automático de endereço e cidade de acordo com CEP
- Máscara para telefone celular, CPF e CEP

Tudo isso usando React, React Hook Forms e Zod. 

## 🤓 Antes de começar

O design e UI do front já estão implementados! O objetivo aqui é conseguir fazer as funcionalidades do formulário bem como aprender as bibliotecas React Hook Form e Zod.

Para isso, basta fazer um fork, clonar o código para a sua máquina, instalar as dependências e rodar pnpm run dev ou npm run dev!

### A API

O seu formulário deverá ser submetido para uma API desenvolvida por nós. O endpoint está em `https://apis.codante.io/api/register-user/register`. Esta API irá retornar um código `200` se todos os dados estiverem corretos; ou um `422` caso haja algum erro de validação. Você deverá implementar em seu código também as mensagens de validação retornadas pelo servidor. 

A documentação da API está em <a target="_blank" href="https://apis-docs.codante.io/orders-api">https://apis-docs.codante.io/orders-api</a>. Será necessário consultá-la para fazer este Mini Projeto.



## 🔨 Requisitos

**Botão para esconder / revelar senha**

- Crie um botão que, ao clicar, as senhas são reveladas ou escondidads diretamente no formulário.
- Este botão deverá ser um ícone que represente que a senha está escondida ou revelada (no código já há uma sugestão de ícone).
- O botão deve possuir, no mínimo, a acessibilidade de ser ativado via teclado (deve ser possível navegar até ele usando a tecla `tab`).

**Máscara de telefone, CPF e CEP**

- Implemente, do zero ou usando uma biblioteca, uma máscara para os inputs de `telefone`, `cpf` e `cep`.
- Uma sugestão para as máscaras é, respectivamente, `(00) 00000 0000`, `000.000.000-27` e `00000-000`

**Preenchimento automático de Endereço (rua) e Cidade após preencido o CEP**

- Após preenchido o CEP, busque em alguma API de CEP dados de logradouro e cidade
- Preencha os inputs de endereço e cidade com os dados retornados

> [!NOTE]
> Antes de implementar sua solução, pense em qual será o melhor evento para ser escutado neste input. 

**Uso da Biblioteca React Hook Form**



## 🔨 Desafio extra para quem quer ir além

(Essa seção é opcional)

- Requisito extra 1. 
- Requisito extra 2.

## 🎨 Design Sugerido

Temos uma sugestão de design no Figma. Entretanto, fique à vontade para montar a aplicação conforme a sua criatividade.

### Figma

🔗 [Link do design]()

## 👉🏽 Sobre esse mini-projeto

### O que você irá praticar:

#### React

- Habilidade 1 do React
- Habilidade 2

#### TailwindCSS

- Habilidade 1 do TailwindCSS

### Pré requisitos

(coloque aqui se houver algum)
