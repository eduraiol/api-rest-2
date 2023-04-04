import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta{
  constructor(erro){
    const mesagensErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");

    super(`Os seguintes erros foram encontraos: ${mesagensErro}`);
  }
}

export default ErroValidacao;