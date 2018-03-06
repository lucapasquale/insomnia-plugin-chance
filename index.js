const Chance = require('chance');
const chance = new Chance();

module.exports.templateTags = [{
  name: 'random',
  displayName: 'Random Value Generator',
  description: 'Generates a random value',
  args: [
    {
      displayName: 'Type',
      type: 'enum',
      options: [
        {
          displayName: 'Random Email',
          value: 'email'
        },
        {
          displayName: 'Random String',
          value: 'string'
        },
        {
          displayName: 'Random CPF',
          value: 'cpf'
        },
        {
          displayName: 'Random Natural Number',
          value: 'natural'
        },
      ],
    },
  ],
  async run(context, type = 'email') {
    switch (type) {
      case 'email': return chance.email();
      case 'string': return chance.string();
      case 'cpf': return chance.cpf();
      case 'natural': return chance.natural();
      default: throw new Error('invalid type');
    }
  }
}];
