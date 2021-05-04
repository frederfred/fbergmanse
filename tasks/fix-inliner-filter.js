const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../build/tmp');
const erroneousStringRegExp = /data:application\/octet-stream;base64,/g;
const replacement = '/#filter-glitch';

fs.readFile(file, 'utf8', (readError, data) => {
  const result = data.replace(erroneousStringRegExp, replacement);

  fs.writeFile(file, result, (writeError) => {
    if (writeError) {
      console.error(writeError); // eslint-disable-line no-console
    }
  });
});
