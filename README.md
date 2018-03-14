# Insomnia Plugin - Chance
## Random Value Generator

Generates a random value from on [Chance.JS](http://chancejs.com/)

### Instalation:
- Open Insomnia options (Ctrl + , | Cmd + ,)
- Write `insomnia-plugin-chance` on the **Plugins** tab

### Args:
- Type: Select a function from Chance to be executed
- Custom Function: If selected **custom** type, it will execute the function named here
- Options: Stringified arguments to be used with chosen function

### Examples:

![Screenshot](/readme-preview-1.png?raw=true)
![Screenshot](/readme-preview-2.png?raw=true)

### Warning:

If you pass some value on *Options*, Insomnia will say that there is an invalid token on the resulting JSON. That happens because the options has invalid characters (`"`) and fails to stringify. But this is only visual, you can still use it!
