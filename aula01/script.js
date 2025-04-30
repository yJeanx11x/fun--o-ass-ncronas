// função assincrona 
function assyncFunction() {
  return new Promise((resolve, reject) => {
    const isSuccess = false; // false ou true

    setTimeout(() => {
      if (isSuccess) {
        resolve("Á operação foi executada com Sucesso!");
      } else {
        reject("Algo deu Errado!");
      }
    }, 3000) // executa a função em 3 segundos;
  });
}
console.log("Executando função assíncrona...");
assyncFunction()
  .then((resolve) => {
    console.log("Sucesso :", resolve);
  })// then executa sé for verdadeiro
  .catch((erro) => {
    console.log("Erro :", erro);
  })// catch executa sé for falsa;
  .finally(()=>{
        console.log('Função Finalizada!')
  })// é execultado sempre ,independente se a promise foi resolvida ou rejeitada 

