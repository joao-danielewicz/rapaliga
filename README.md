# RAPALIGA 🇨🇳

**RAPALIGA, da China para o código.**

Uma esolang baseada no meme da RAPALIGA. Escreva com `VAI CHINA`, declare variáveis com `RAPALIGA` e o marido será seu!

Projeto acadêmico e humorístico inspirado em linguagens esotéricas como o BIRL.

## Como executar localmente

Abra `index.html` no navegador (Chrome, Edge ou Firefox). Não precisa instalar nada.

## Como publicar no GitHub Pages

1. Crie um repositório público no GitHub, como `rapaliga`.
2. Envie **todo o conteúdo desta pasta**, mantendo as subpastas `css`, `js` e `assets`. O `index.html` deve ficar na raiz do repositório.
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
6. Acesse o endereço exibido pelo GitHub Pages quando a publicação terminar.

## Estrutura

```text
index.html              Página do site
css/style.css           Estilos e tema visual
js/engine.js            Parser, interpretador e gerador Python
js/playground.js        Interação do editor, saída e botões
assets/rapaliga-meme.png Foto original do meme
README.md               Documentação
.gitignore              Arquivos ignorados pelo Git
```

## Exemplo

```text
VAI CHINA {
    RAPALIGA contador = 1;
    EU CHINA VAI VEM contador <= 5 {
        EU FALA PLA ELE contador;
        contador = contador + 1;
    }
}
NÃO QUELO SABE MAIS NADA
```

A versão atual do playground suporta variáveis, entrada e saída, condicionais, `while`, `break` e geração de Python. Algumas palavras reservadas de versões futuras ainda não são executadas.

Os caracteres chineses no site são parte da identidade visual, não palavras da linguagem.
