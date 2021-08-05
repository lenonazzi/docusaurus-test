---
sidebar_position: 1
---

# Utilizando Context API
Compartilhando informações globais dentro de um app.

Vamos criar uma pasta na raiz chamada de **context.**
Em seguida criamos o arquivo **index.tsx** e vamos importar o React e o hook **createContext** nele:

```tsx
import React, { createContext } from 'react'
```

> 👆Também adicionamos o hook de useState para usarmos mais tarde no exemplo.

Agora vamos criar uma interface para o nosso **provider** onde apenas vamos passar a informação que vamos receber os components filhos dele (no caso, de todo nosso app)**.**

```tsx
interface IContextProvider {
  children?: React.ReactNode
}
```

Criamos uma interface para o **context,** onde temos uma variável do tipo *boolean* e uma função que *não tem retorno*:

```tsx
interface IContext {
  foo: boolean
  toggleAccess(): void
}
```

Vamos criar o nosso **context** e **exportar** ele:

```tsx
export const MyContext = createContext<IContext>(
  {} as IContext
)
```

Por fim, exportamos nosso **context provider** com seus respectivos **values**:

```tsx
export const MyContextProvider = ({ children }: IContextProvider) => {
  const [access, setAccess] = useState<boolean>(false)

  const foo = false

  function toggleAccess() {
    setAccess(!access)
  }

  const values = {
    foo,
    toggleAccess
  }

  return (
    <MyContext.Provider value={values}>
      {children}
    </MyContext.Provider>
  )
}
```

<details>
  <summary>Código completo:</summary>

  ```tsx
  import React, { createContext, useState } from 'react'

  interface IContextProvider {
    children?: React.ReactNode
  }

  interface IContext {
    foo: boolean
    toggleAccess(): void
  }

  export const MyContext = createContext<IContext>(
    {} as IContext
  )

  export const MyContextProvider = ({ children }: IContextProvider) => {
    const [access, setAccess] = useState<boolean>(false)

    const foo = false

    function toggleAccess() {
      setAccess(!access)
    }

    const values = {
      foo,
      toggleAccess
    }

    return (
      <MyContext.Provider value={values}>
        {children}
      </MyContext.Provider>
    )
  }
  ```
</details>

Voltando a raiz do projeto, no arquivo **index.tsx,** devemos importar nosso **provider**:

```tsx
import { MyContextProvider } from './context'
```

Em seguida, no **return** do nosso app, vamos encapsular dentro do nosso **provider** todos os componentes filhos, que vão ter acesso aos **values** do nosso context:

```tsx
return (
  <MyContextProvider>
    <MyFirstComponent />
    <MySecondComponent />
  </MyContextProvider>
)
```

> 👆Dessa forma, ambos *MyFirstComponent* e *MySecondComponent* terão acesso aos valores do context.

Dentro do componente (no casso deste exemplo, o componente *MyFirstComponent*) onde vamos acessar algum valor vindo do nosso context, precisamos importar junto com o React, o hook **useContext**:

```tsx
import React, { useContext } from 'react'
```

Agora importamos nosso context:

```tsx
import { MyContext } from '../context'
```

Já *dentro da função* do componente, vamos chamar os values que precisamos acessar:

```tsx
const { foo } = useContext(MyContext)
```

Agora basta chamar **foo** onde necessário dentro do componente.

**Pronto**, agora você tem acesso aos dados compartilhados dentro da sua aplicação! 🚀
