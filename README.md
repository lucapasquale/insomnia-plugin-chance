# Insomnia Plugin - Chance
## Random Value Generator

Generates a random value from on [Chance.JS](http://chancejs.com/)

### Instalation:
- Open Insomnia options (Ctrl + , | Cmd + ,)
- Write `insomnia-plugin-chance` on the **Plugins** tab

### Args:
- Type: Select a function from Chance to be executed
- Custom Function: If selected **custom** type, it will execute the function named here
- Options: Arguments you want to pass to your `chance` function. Because of the way Insomnia handles plugins, you need to pass it as:

`argumentName: argumentValue, argumentName2: argumentValue2`

For example, with [Natural](https://chancejs.com/basics/natural.html), you can pass it as: `min: 1, max: 20`
