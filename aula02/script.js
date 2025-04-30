function assyncFunction() {
        return new Promise((resolve, reject) => {
          const isSuccess = true; // false ou true
      
          setTimeout(() => {
            if (isSuccess) {
              resolve("Á operação foi executada com Sucesso!");
            } else {
              reject("Algo deu Errado!");
            }
          }, 3000) // executa a função em 3 segundos;
        });
      }
// função async e wait
async function fetch() {
console.log('Execultando á operação...')
        try {
        const responce= await assyncFunction()
        console.log('Sucesso:',responce)
} catch (error) {
        console.log('Erro:',error)
}finally{
        console.log('Final da Execulção!')
}
}

fetch()