#!/usr/bin/env node

const getFile = require('./getFile');

const main = async () => {
  const file = await getFile();
  console.log(file);

};

main();
