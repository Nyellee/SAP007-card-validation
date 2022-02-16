# Cartão de Crédito Válido

## Índice

- [1. Introdução](#1-Introdução)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Expêriencia do usuário](#3-Experiência-do-Usuário)
- [4. Considerações finais](#4-consideracoes-finais)


---

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

O projeto foi desenvolvido com base da necessidade de uma instituição(fictícia), que arrecada fundos para aplicar em infraestrutura escolar em comunidades carentes. Esse foi o contexto criado e pensado por mim, para uma situação em que uma validação de cartão é necessária, nesse caso no ato de doar para a instituição. 

## 3. Experiência do Usuário
Os principais usuários do produto, são pessoas que possuem intenção de contribuir com ajuda financeira para educação infantil em lugares carentes e os seus principais objetivos seriam encontrar uma organização que seja transparente, objetiva e séria. 
Acredito que o produto atende a necessidade do usuário, quando deixa abordado o tema de forma simples e direta, para que se entenda de forma clara qual o objetivo e para onde vão os fundos arrecadados, assim criando certa credibilidade e confiança nas doações que serão feitas. 

O site contém três páginas que interagem com o usuário, a primeira onde se encontra um resumo do que é a instituição e qual o seu propósito. 

![gráfico do algoritmo de
Luhn](https://image.prntscr.com/image/zBP950n2RAukBiMcsrP3Lw.png)

A segunda página, após o usuário clicar em doar é onde se encontra a interface para efetuar a doação, no ato de doar o usuário só poderá digitar números na caixa de cartão e só poderá enviar após preencher todas as caixas, caso contrário a página o alertará para preencher todos os campos e indicará qual está vazio.
Se caso o cartão não for válido, a página alertará que o cartão não é válido, assim como ocultará todos os dígitos do cartão, exceto os 4 últimos. 

![gráfico do algoritmo de
Luhn](https://image.prntscr.com/image/TVw3nPPeQ_GUxjDf5cDFyg.png)


Inserindo todos os campos e um cartão válido, será concluída a doação e direcionado para uma página de agradecimento. 

![Campo final](https://image.prntscr.com/image/Xpq3lxPpTFaagmNqTxJPEQ.png)

