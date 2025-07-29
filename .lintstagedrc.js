module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --quiet',
    'prettier --write --loglevel=error',
  ],
  '*.{json,css,md}': ['prettier --write --loglevel=error'],
};
