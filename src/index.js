#!/usr/bin/env node

const copyFile = require('./utils/copyCode');
const deleteCOde = require('./utils/deleteCode');
const getFile = require('./utils/getFile');

const main = async () => {
  const file = await getFile();
  const copyCOde = await copyFile(file);
  await deleteCOde(file);
};

main();
