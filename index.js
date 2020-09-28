const Chance = require('chance');
const chance = new Chance();

module.exports.templateTags = [
  {
    name: 'chance',
    displayName: 'Chance',
    description: 'Generates a random value based on Chance.JS',
    args: [
      {
        displayName: 'Type',
        defaultValue: 'email',
        type: 'enum',
        options: [
          { displayName: 'Natural', value: 'natural' },
          { displayName: 'Float', value: 'floating' },
          { displayName: 'Dice (d6)', value: 'd6' },
          { displayName: 'Dice (d20)', value: 'd20' },
          { displayName: 'Name', value: 'name' },
          { displayName: 'Email', value: 'email' },
          { displayName: 'Gender', value: 'gender' },
          { displayName: 'Phone', value: 'phone' },
          { displayName: 'Zipcode', value: 'zip' },
          { displayName: 'Credit Card', value: 'cc' },
          { displayName: 'Date', value: 'date' },
          { displayName: 'Word', value: 'word' },
          { displayName: 'CPF', value: 'cpf' },
          { displayName: 'Pick One', value: 'pickone' },
          { displayName: 'Custom', value: 'custom' },
        ],
      },
      {
        displayName: 'Custom Function - Only if selected type is Custom',
        type: 'string',
        placeholder: 'integer',
      },
      {
        displayName: 'Options - Arguments for selected function, separated by a comma',
        type: 'string',
        encoding: 'base64',
        placeholder: 'min: 10, max: 25',
      },
    ],
    run(_, type, func, opt = '') {
      const chanceFunction = type === 'custom' ? func : type;
      const options = parseOptions(opt);

      return chance[chanceFunction](options);
    }
  },
];

function parseOptions(options) {
  // insomnia encoding returns 'b64::::46b' if it's an empty string
  if (!options || options === 'b64::::46b') {
    return undefined;
  }

  // if its already an array, just return it
  if (/^\[.*\]$/.test(options)) {
    return JSON.parse(options);
  }

  // if not, parse to be JSON fields
  const stringifiedOptions = options
    .split(/,\s?/gi)
    .map(t => {
      const matches = /(.*):\s?(.*)/gi.exec(t)
      if (!matches) {
        return null
      }

      return `"${matches[1]}": ${matches[2]}`
    })
    .filter(Boolean)
    .join(',')

  return JSON.parse(`{${stringifiedOptions}}`);
}
