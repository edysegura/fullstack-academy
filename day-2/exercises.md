## Para enviar as respostas:

Preencher e-mail com o e-mail utilizado no momento de entrar na plataforma
https://goo.gl/forms/dYlQhpV6aUhsJK2H2

### Exercício 1

Implemente a funcionalidade de projeção mês a mês na caluladora. Ou seja, além de exibir somente o montante final, mostrar como foi a evolução até chegar neste valor.
Utilize o ``map`` para gerar os valores e os renderize utilizando EJS.

#### Dica a:
Para gerar um novo vetor preenchido com valores de 0 a x:

```javascript
const x = 10
const vetor = Array.from(new Array(x), (x,i) => i)
// vetor = [0,1,2,3,4,5,6,7,8,9]
```

#### Dica b:

A tabela de projeção gerada para 3 meses, valor inicial de 1000 a 1% a.m. é:


| Mês | Valor   |
|-----|---------|
| 1   | 1010    |
| 2   | 1020.10 |
| 3   | 1030.30 |

### Exercício 2

Na listagem de operações do projeto Meu Dinheiro, crie o código necessário para mostrar o sub-total ao lado de cada operação e o saldo final da conta no final. Exemplo:

| Descrição    | Valor   | Sub-total |
|--------------|---------|-----------|
| Salário      | R$ 1000 | R$ 1000   |
| Academia     | R$ -100 | R$ 900    |
| Supermercado | R$ -20  | R$ 880    |
|              | Saldo   | R$ 880    |

### Exercício 3

Adicionar 2 links para filtrar e mostrar apenas entradas ou apenas saídas.

### Exercício 4

Criar a funcionalidade de cadastro e listagem de contas mensais. Cada contas mensal é formada por:

```javascript
{
  descricao: 'Conta de luz',
  valorEstimado: 120.00,
  diaVencimento: 10
}
```

