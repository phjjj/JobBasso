module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write --loglevel=error'],
  '*.{json,css,md}': ['prettier --write --loglevel=error'],
};
