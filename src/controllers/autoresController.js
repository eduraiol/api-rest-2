import autores from "../models/Autor.js";

class AutorController {

  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autores.find();
      res.status(200).json(autoresResultado);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }

  };

  static listarAutorPorId = async (req, res) => {
    const id = req.params.id;
    try {
      const autor = await autores.findById(id);
      res.status(200).json(autor);
    } catch (erro) {
      res.status(400).json({ message: "Id do Autor não localizado." });
    }
  };

  static cadastrarAutor = (req, res) => {
    let autor = new autores(req.body);
    try {
      autor.save();
      res.status(201).json(autor);
    } catch (erro) {
      res.status(500).send({ message: "falha ao cadastrar Autor." });
    }
  };

  static atualizarAutor = async (req, res) => {
    const id = req.params.id;
    try {
      const autor = await autores.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).json(autor);
    } catch (erro) {
      res.status(500).json( { message: `Erro ao atualizar Autor: ${erro}` });
    }
  };

  static excluirAutor = async (req, res) => {
    const id = req.params.id;

    try {
      await autores.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor removido com sucesso!"});
    } catch (error) {
      res.status(500).json({ message: `Erro ao excluir: ${error}` });
    }
  };
}

export default AutorController;