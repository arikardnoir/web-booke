

# Booke


## Começando
Essas instruções farão com que você tenha uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Veja a implantação de notas sobre como implantar o projeto em um sistema ativo.

## Pré-requisitos
Caso não tenhas o angular instalado em sua máquina, siga os seguintes passos:

```js
npm install -g ionic
```
Para mais detalhes, visite a [página](https://ionicframework.com/getting-started#cli)

OBS: O "-g" presente no comando de instalação, quer dizer que este framework será instalado globalmente na nossa máquina, logo, devemos instala-ló como super usuário.

ex: para linux e mac
```js
sudo npm install -g ionic
```

DICA: Para o Windows, deve-se abrir o terminal como administrador.


## Baixando o Projeto

- copie o código abaixo e cole no terminal:
```js
    git clone https://github.com/filipetristao777/app-eloverde.git
```

- Após clonar o projeto para a sua máquina, navegue até a pasta do projeto, e na raíz do mesmo execute o seguinte comando:
```js
    git submodule update --init --recursive
```

O comando acima apresentado, vai clonar para o nosso projeto um submodulo que será compartilhado entre a "Aplicação Web" e o "App".


- Para rodar o projeto, execute o comando abaixo:
```js
    ionic serve
```

