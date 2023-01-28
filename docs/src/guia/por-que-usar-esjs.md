# ¿Por qué usar EsJS?

EsJS fue creado con la intención de facilitar a los hablantes de español el desarrollo de aplicaciones web al utilizar palabras del idioma español, pero con la misma capacidad de JavaScript.

## ¿Qué es EsJS?

EsJS es un transpilador que convierte código escrito en una sintaxis en español a código equivalente escrito en JavaScript. La gramática de EsJS es la misma que la de JavaScript, solo que utiliza tokens del idioma español. Al ejecutarse, el código transpilado de EsJS es equivalente al código JavaScript.

El siguiente código EsJS:

```esjs
funcion iniciar() {
    const fecha = crear Fecha()
    consola.escribir("Hola Mundo!", fecha)
}

iniciar()
```

Produce el código JavaScript:

```js
function iniciar() {
    const fecha = new Date()
    console.log("Hola Mundo!", fecha)
}

iniciar()
```

## ¿Cómo funciona EsJS?

EsJS es un plugin de Babel. Analiza cada token del código de entrada y busca su equivalente en JavaScript. Este proceso ha sido altamente inspirado en el artículo ["Rebuilding Babel: The Tokenizer"](https://www.nan.fyi/tokenizer) de [Nanda Syahrasyad](https://www.nan.fyi/).

WIP

## ¿Cuál es la diferencia entre EsJS y JavaScript?

EsJS es un transpilador (convierte código escrito en una sintaxis en español a código equivalente escrito en JavaScript). Esta conversión solo tiene lugar durante la etapa de "compilación". Una vez terminada esta etapa, el código EsJS deja de existir y sólo existe su equivalente en JavaScript.

En cambio, JavaScript es un lenguaje de programación interpretado que se ejecuta en un navegador web o en un servidor. Puede ser utilizado tanto para desarrollar aplicaciones del lado del cliente como del servidor.

EsJS y JavaScript son lenguajes muy similares, y gracias a la utilización de plugins adecuados, EsJS puede hacer prácticamente lo mismo que JavaScript. De esta manera, EsJS es prácticamente igual a JavaScript en términos de funcionalidades y capacidades.

## Alternativas

Otra opción es [Lenguaje Latino](https://www.lenguajelatino.org/), que es un verdadero lenguaje de programación con sintaxis en español, pero por el momento no ofrece la misma versatilidad que JavaScript, lo que limita la creación de interfaces gráficas y aplicaciones webs.