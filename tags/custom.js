module.exports = (chance) => {
  return {
    name: 'chance',
    displayName: 'Chance Value Generator',
    description: 'Generates a random value using Chance.JS',
    args: [
      {
        displayName: 'Chance Function Name',
        type: 'string',
        placeholder: 'natural',
      },
      {
        displayName: 'Stringified Options',
        type: 'string',
        placeholder: '"min": 10, "max": 25',
      },
    ],
    async run(context, func = 'natural', opt = '') {
      const options = JSON.parse(`{ ${opt} }`);
      return chance[func](options);
    }
  };
}
