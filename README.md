# Drag and Drop Areas

Este projeto implementa uma funcionalidade de arrastar e soltar (drag and drop) onde os itens podem ser movidos para áreas específicas. O código utiliza JavaScript para gerenciar os eventos de drag (arrastar) e drop (soltar), criando uma interação dinâmica e visualmente agradável.

## Descrição

O sistema consiste em três áreas onde o usuário pode arrastar itens e soltá-los nas áreas correspondentes. A lógica de verificação é implementada para verificar se os itens estão corretamente posicionados nas áreas. Quando todas as áreas estão preenchidas corretamente, um estilo visual é aplicado para indicar o sucesso.

### Funcionalidades:

1. **Arraste de Itens**: O usuário pode arranjar itens entre as áreas utilizando o recurso de arrastar e soltar.
2. **Verificação de Corretude**: Quando todas as áreas são preenchidas, o sistema verifica se os itens estão na ordem correta.
3. **Feedback Visual**: O sistema fornece um feedback visual, alterando o estilo das áreas para "correto" ou "errado", dependendo da colocação dos itens.
4. ## Instalação

Não há instalação necessária, basta abrir o arquivo `index.html` em um navegador moderno.


## Como Funciona

1. **Interatividade de Drag and Drop**:
    - **Itens**: Os itens podem ser arrastados de sua posição original e colocados em uma das áreas disponíveis.
    - **Áreas de Destino**: Existem três áreas e uma área neutra onde os itens podem ser colocados.
    - **Área Neutra**: Caso o item seja movido para uma área neutra, ele será reposicionado sem aplicar nenhuma verificação.

2. **Verificação de Resultado**:
    - Quando todas as áreas estão preenchidas, o script verifica se os itens estão na ordem certa (1, 2, 3). Se estiverem, uma classe de estilo "correto" é aplicada. Caso contrário, a classe "errado" é aplicada.
    - ## Personalização

- **Adicionar ou Remover Áreas**: Para adicionar mais áreas, basta criar novos elementos `<div>` com a classe `area` e adicionar atributos `data-name` para identificá-las.
- **Alterar Itens**: Modifique o conteúdo dos itens dentro da estrutura HTML para alterar os dados que o usuário irá arranjar.

## Exemplo de Uso:

```html
<div class="area" data-name="a"></div>
<div class="area" data-name="b"></div>
<div class="area" data-name="c"></div>

<div class="item" draggable="true">1</div>
<div class="item" draggable="true">2</div>
<div class="item" draggable="true">3</div>
