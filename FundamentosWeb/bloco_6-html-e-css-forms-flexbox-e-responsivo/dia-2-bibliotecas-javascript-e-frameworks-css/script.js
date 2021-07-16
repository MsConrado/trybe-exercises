const estado = document.getElementById('estado')
const todosEstados = ['Acre (AC)',
  'Alagoas (AL)',
  'Amapá (AP)',
  'Amazonas (AM)',
  'Bahia (BA)',
  'Ceará (CE)',
  'Distrito Federal (DF)',
  ' Espírito Santo (ES)',
  'Goiás (GO)',
  'Maranhão (MA)',
  ' Mato Grosso (MT)',
  'Mato Grosso do Sul (MS)',
  'Minas Gerais (MG)',
  'Pará (PA)',
  'Paraíba (PB)',
  'Paraná (PR)',
  'Pernambuco (PE)',
  'Piauí (PI)',
  'Rio de Janeiro (RJ)',
  'Rio Grande do Norte (RN)',
  'Rio Grande do Sul (RS)',
  'Rondônia (RO)',
  'Roraima (RR)',
  'Santa Catarina (SC)',
  'São Paulo (SP)',
  'Sergipe (SE)',
  'Tocantins (TO)']

for (const index of todosEstados) {
  const criarEstado = document.createElement('option');
  criarEstado.innerText = index;
  estado.appendChild(criarEstado);
}

// // const data = document.getElementById('data-inicio');
// // function verificarData() {
// //   const conferirData = data.value.split('/');
// //   if (conferirData[0] > 31 || conferirData[0, 1] < 0) {
// //     alert('Formato de data INVÁLIDO')
// //   } else if (conferirData[1] >= 12 || conferirData[2] < 0) {
// //     alert('Formato de data INVÁLIDO');;
// //   } else if (conferirData.length < 3 || conferirData.length > 3) {
// //     alert('Formato de data INVÁLIDO');
// //   }
// // }

// const nome = document.getElementById('nome');
// const email = document.getElementById('email');
// const cpf = document.getElementById('cpf');
// const endereco = document.getElementById('endereco');
// const cidade = document.getElementById('cidade');
// const resumoCurriculo = document.getElementById('resumo-curriculo');
// const cargo = document.getElementById('cargo');
// const descricaoCargo = document.getElementById('descricao-cargo');
// const botao1 = document.getElementById('botao-1');
// const botao2 = document.getElementById('botao-2');

// function tamanhoNome() {
//   const form = document.getElementById('form')
//   const div = document.createElement('div')
//   if (nome.value.length > 40 || nome.value.length === 0) {
//     div.innerText = 'Nome INVÁLIDO..';
//     form.appendChild(div);
//   } else {
//     div.innerText = nome.value;
//     form.appendChild(div);
//   }
// }

// function tamanhoEmail() {
//   const form = document.getElementById('form')
//   const div = document.createElement('div')
//   if (email.value.length > 50 || email.value.length === 0) {
//     div.innerText = 'E-mail INVÁLIDO..';
//     form.appendChild(div);
//   } else {
//     div.innerText = email.value;
//     form.appendChild(div);
//   }
// }

// function tamanhoCPF() {
//   const form = document.getElementById('form')
//   const div = document.createElement('div')
//   if (cpf.value.length > 11 || cpf.value.length === 0) {
//     div.innerText = 'CPF INVÁLIDO..';
//     form.appendChild(div);
//   } else {
//     div.innerText = cpf.value;
//     form.appendChild(div);
//   }
// }

// function tamanhoEndereco() {
//   const form = document.getElementById('form')
//   const div = document.createElement('div')
//   if (endereco.value.length > 200 || endereco.value.length === 0) {
//     div.innerText = 'Endereço INVÁLIDO..';
//     form.appendChild(div);
//   } else {
//     div.innerText = endereco.value;
//     form.appendChild(div);
//   }
// }

// function tamanhoCidade() {
//   const form = document.getElementById('form')
//   const div = document.createElement('div')
//   if (cidade.value.length > 28 || cidade.value.length === 0) {
//     div.innerText = 'Cidade INVÁLIDA..';
//     form.appendChild(div);
//   } else {
//     div.innerText = cidade.value;
//     form.appendChild(div);
//   }
// }

// function tipoCasa() {
//   const form = document.getElementById('form')
//   const div = document.createElement('div')
//   if (botao1.checked === false && botao2.checked === false) {
//     div.innerText = 'Tipo casa INVÁLIDO..';
//     form.appendChild(div);
//   } else if (botao1.checked === true) {
//     div.innerText = botao1.value;
//     form.appendChild(div);
//   } else {
//     div.innerText = botao2.value;
//     form.appendChild(div);
//   }
// }

// function tamanhoResumoCurriculo() {
//   const form = document.getElementById('form')
//   const div = document.createElement('div')
//   if (resumoCurriculo.value.length > 1000 || resumoCurriculo.value.length === 0) {
//     div.innerText = 'Resumo Currículo INVÁLIDO..';
//     form.appendChild(div);
//   } else {
//     div.innerText = resumoCurriculo.value;
//     form.appendChild(div);
//   }
// }

// function tamanhoCargo() {
//   const form = document.getElementById('form')
//   const div = document.createElement('div')
//   if (cargo.value.length > 40 || cargo.value.length === 0) {
//     div.innerText = 'Cargo INVÁLIDO..';
//     form.appendChild(div);
//   } else {
//     div.innerText = cargo.value;
//     form.appendChild(div);
//   }
// }

// function tamanhoDescricaoCargo() {
//   const form = document.getElementById('form')
//   const div = document.createElement('div')
//   if (descricaoCargo.value.length > 500 || descricaoCargo.value.length === 0) {
//     div.innerText = 'Descrição do cargo INVÁLIDO..';
//     form.appendChild(div);
//   } else {
//     div.innerText = descricaoCargo.value;
//     form.appendChild(div);
//   }
// }

// const botao = document.getElementById('submit');
// function interromper(event) {
//   event.preventDefault();

//   tamanhoNome();
//   tamanhoEmail();
//   tamanhoCPF();
//   tamanhoCidade();
//   tipoCasa();
//   tamanhoResumoCurriculo();
//   tamanhoCargo();
//   tamanhoDescricaoCargo();
//   verificarData();
// }
// botao.addEventListener('click', interromper);

const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

new JustValidate('.js-form', {
  rules: {
    nome: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    endereco: {
      required: true,
      maxLength: 200
    },
    cidade: {
      required: true,
      maxLength: 28
    },
    estado: {
      required: true,
    },
    botao: {
      required: true,
    },
    resumoCurriculo: {
      required: true,
      maxLength: 1000
    },
    cargo: {
      required: true,
      maxLength: 40
    },
    descricaoCargo: {
      required: true,
      maxLength: 500
    },
    data: {
      required: true,
    }
  },
  messages: {
    nome: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
      required: 'O campo de email é obrigatório.',
      email: 'O email digitado não é válido.',
      maxLength: 'O limite é de 50 caracteres.'
    },
    cpf: {
      required: 'O campo de CPF é obrigatório.',
      maxLength: 'O limite é de 11 caracteres.'
    },
    endereco: {
      required: 'O campo endereço é obrigatório.',
      maxLength: 'O limite é de 200 caracteres.'
    },
    cidade: {
      required: 'O campo cidade é obrigatório.',
      maxLength: 'O limite é de 28 caracteres.'
    },
    estado: {
      required: 'O campo estado é obrigatório.',
    },
    botao: {
      required: 'A escolha de um item é obrigatória.',
    },
    resumoCurriculo: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    cargo: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    descricaoCargo: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.'
    },
    data: {
      required: 'Este campo é obrigatório.',
    }
  },
  submitHandler: function (form, values) {
    console.log(values);
  }});