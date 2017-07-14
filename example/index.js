ppk.controller('hello', () => {
  console.log('hello controller');
  return 'I\'m hello controller';
});

ppk.controller('world', ['hello', function(hello) {
  console.log(hello);
}]);