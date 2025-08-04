module.exports = {
  '*.{js,jsx,ts,tsx}': [
    /** 한번에 fix하고 체크하니 오류가 발생하는 경우 커밋이 실패함 */
    'eslint --fix --quiet',
    'eslint --quiet --max-warnings=0',
    'prettier --write --loglevel=error',
  ],
  '*.{json,css,md}': ['prettier --write --loglevel=error'],
};
