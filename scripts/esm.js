const path = require('path');
const chalk = require('chalk');
const mkdirpNode = require('mkdirp');
const { promisify } = require('util');
const { configs, utils, paths } = require('./config');

const mkdirp = promisify(mkdirpNode);

async function build () {
  await mkdirp(paths.dist);
  // eslint-disable-next-line no-console
  console.log(chalk.cyan('Generating esm build...'));
  await utils.writeBundle(configs.esm, 'vee-validate.esm.js');
  await utils.writeBundle(configs.esmMinimal, 'vee-validate.minimal.esm.js');
  await utils.writeBundle(configs.esmOnlyDirective, 'vee-validate.only-directive.esm.js');
  await utils.writeBundle(configs.rules, 'rules.esm.js');

  await mkdirp(path.join(paths.dist, 'rules'));

  const rules = Object.keys(configs).filter(item => item.startsWith('rules:'));
  for (const item of rules) {
    const name = item.replace('rules:', '');
    await utils.writeBundle(configs[item], `rules/${name}`);
  }
}

build();
