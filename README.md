# Documentação do Projeto
## Introdução
Esta documentação destina-se a fornecer uma visão geral do projeto e um guia passo a passo sobre sua estrutura de pastas, componentes e processos principais, incluindo implantação de contratos e testes automatizados.
## Estrutura de Pastas
O projeto segue uma estrutura organizada para facilitar o desenvolvimento, teste e implantação de contratos inteligentes. Aqui está a estrutura de pastas do projeto:
```
project-root/
│
├── contracts/ # Pasta contendo os contratos inteligentes
│ ├── Contract1.sol
│ ├── Contract2.sol
│ └── ...
│
├── scripts/ # Pasta contendo scripts para rodar o script de deploy
│ ├── deploy.js
│ ├── script1.js
│ └── ...
│
├── smartcontract-upgrades-example/ # Pasta contendo exemplos de atualizações de contratos
│ ├── ...
│ └── ...
│
├── basic/ # Pasta contendo testes automatizados básicos
│ ├── test1.js
│ ├── test2.js
│ └── ...
│
└── test/ # Pasta contendo testes individuais para cada contrato
├── Contract1.test.js
├── Contract2.test.js
└── ...
```
# Componentes Principais
## Contratos Inteligentes
A pasta contracts/ contém todos os contratos inteligentes desenvolvidos para o projeto. Eles são escritos em Solidity.

# Scripts de Implantação
A pasta scripts/ contém scripts utilizados para a implantação de contratos no blockchain. Isso inclui o script principal de deploy e scripts auxiliares para configurações específicas.

# Exemplos de Atualizações de Contratos
A pasta smartcontract-upgrades-example/ contém exemplos de como atualizar contratos inteligentes utilizando ferramentas como OpenZeppelin Upgrades.

# Testes Automatizados Básicos
A pasta basic/ contém testes automatizados básicos para garantir o funcionamento correto dos contratos inteligentes em condições normais.

# Testes Individuais para Cada Contrato
A pasta test/ contém testes individuais para cada contrato inteligente desenvolvido no projeto. Esses testes verificam o comportamento específico de cada contrato e são executados de forma isolada.
