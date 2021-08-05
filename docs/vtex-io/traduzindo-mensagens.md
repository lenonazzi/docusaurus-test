---
sidebar_position: 2
---

# Traduzindo Alguns componentes no vtex IO

- instalar master workspace:
  Entrar na pasta da Store theme

```
  vtex use master
  vtex install vtex.admin-graphql-ide
```

No admin pesquisar o app graphql
selecionar vtex.messages

**no campo de query** :

```
  mutation Save($saveArgs: SaveArgsV2!) {
    saveV2(args: $saveArgs)
  }
```

> Repare que alteração será feita no app vtex.search-result@3.x (context), dentro dele identificamos a message a ser traduzida que foi store/ordenation.name.ascending! Nele escolhemos a localidade da tradução 'pt-BR' e na targetMessage a nova mensagem a ser inserida,

**no campo queryVariables**:

```
{
  "saveArgs": {
    "to": "pt-BR",
    "messages": [
      {
        "srcLang": "pt-BR",
        "srcMessage": "store/ordenation.name.ascending",
        "context": "vtex.search-result@3.x",
        "targetMessage": "Minha nova mensagem"
      }
    ]
  }
}
```

**Pronto**,Agora Consegue fazer traduções de apps que usam vtex.messages no VTEX IO ! 🚀
