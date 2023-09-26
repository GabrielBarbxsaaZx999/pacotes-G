const bcrypt = require('bcrypt');
const saltRounds = 10; // Define o número de rounds de hashing (quanto maior, mais seguro, mas mais lento)

const senhaPlana = 'senhaSegura123';

// Gere um salt aleatório
bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    console.error('Erro ao gerar o salt:', err);
    return;
  }

  // Utilize o salt para criar um hash da senha
  bcrypt.hash(senhaPlana, salt, (err, hash) => {
    if (err) {
      console.error('Erro ao criar o hash da senha:', err);
      return;
    }

    // O 'hash' é o valor seguro a ser armazenado no banco de dados
    console.log('Senha criptografada:', hash);

    // Verifique se a senha inserida corresponde ao hash
    bcrypt.compare(senhaPlana, hash, (err, resultado) => {
      if (err) {
        console.error('Erro ao verificar a senha:', err);
        return;
      }

      if (resultado) {
        console.log('Senha correta! Acesso concedido.');
      } else {
        console.log('Senha incorreta. Acesso negado.');
      }
    });
  });
});

