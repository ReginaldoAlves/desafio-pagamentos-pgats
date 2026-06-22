# Projeto de Testes Unitarios Automatizados (CI) - Pagamentos

## Pre-requisitos

1. Instale o Node.js (Versao 20 ou superior) -> [Baixar Node.js](https://nodejs.org)
2. Instalar o Yarn (Gerenciador de pacotes)
```bash
npm install --global yarn
```

### Configuracao Inicial do Projeto
Para instalar as dependencias necessarias na pasta do projeto, execute os seguintes comandos no terminal:

```bash
yarn init -y
yarn add --dev mocha mochawesome
```

No seu arquivo package.json, inclua a configuracao do script de teste:
```json
"scripts": {
  "test": "mocha"
}
```

## Tecnologias Utilizadas
* JavaScript (Node.js): Linguagem base do projeto.
* Yarn: Gerenciador de pacotes para instalacao de dependencias.
* Mocha: Framework responsavel por executar os testes.
* Mochawesome: Gerador de relatorios visuais em formato HTML.
* GitHub Actions: Ferramenta de automacao que executa a pipeline na nuvem.
