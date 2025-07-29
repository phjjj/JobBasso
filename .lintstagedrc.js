module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --quiet --max-warnings=0',
    'prettier --write --loglevel=error',
  ],
  '*.{json,css,md}': ['prettier --write --loglevel=error'],
};
