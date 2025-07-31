const palindromes = function (string) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const original = string
    .toLowerCase()
    .split('')
    .filter((character) => characters.includes(character))
    .join('');

  const reversed = original.split('').reverse().join('');

  return original === reversed;
};

module.exports = palindromes;