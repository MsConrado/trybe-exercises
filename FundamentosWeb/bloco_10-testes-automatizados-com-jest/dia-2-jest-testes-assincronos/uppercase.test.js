const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('verificando se a letra é transformada em maiuscula', (done) => {
  uppercase('b', (result) => {
    try {
      expect(result).toBe('B')
      done()
    } catch (error) {
      done(error)
    }
  })
})