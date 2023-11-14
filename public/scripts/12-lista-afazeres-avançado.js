const listaDeAfazeres = [];

//attListaAfazeres();

function attListaAfazeres(){
  let listaAfazeres = '';

  listaDeAfazeres.forEach((afazerObjeto, index) => {
    const { nome, data } = afazerObjeto;
    //const nome = afazerObjeto.nome;
    //const data = afazerObjeto.data;
    const html = `
      <div>${nome}</div>
      <div>${data}</div>
      <button class="botaoDeletar js-botaoDeletar">Deletar</button>`;
      
    listaAfazeres += html;
  });

  /*
  for (i = 0; i < listaDeAfazeres.length; i++){
    const afazerObjeto = listaDeAfazeres[i];
    const nome = afazerObjeto.nome;
    const data = afazerObjeto.data;
    const html = `
      <div>${nome}</div>
      <div>${data}</div>
      <button class="botaoDeletar" onclick="
      listaDeAfazeres.splice(${i}, 1);
      attListaAfazeres();
      ">Deletar</button> 
      `;
    listaAfazeres += html;
  }
  */

  document.querySelector('.js-lista-afazeres').innerHTML = listaAfazeres;

  document.querySelectorAll('.js-botaoDeletar')
    .forEach((botaoDeletar, index) => {
      botaoDeletar.addEventListener('click', () => {
        listaDeAfazeres.splice(index, 1);
        attListaAfazeres();
      })
  });
  
}

function addListaAfazeres(){
  const elementoInput = document.querySelector('.inputAfazer');
  const elementoInputData = document.querySelector('.dataAfazer');

  const nome = elementoInput.value;
  const data = elementoInputData.value;

  listaDeAfazeres.push({
    nome,
    data
  })

  elementoInput.value = ''

  attListaAfazeres();
};

document.querySelector('.js-botaoAdd').addEventListener('click', () => {
  addListaAfazeres();
});

