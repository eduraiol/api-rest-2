import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true, "O título do livro é obrigatório!"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "autores", required: [true, "O autor(a) é obrigatório!"]
    },
    editora: {
      type: String, 
      required: [true, "A Editora é obrigatória!"],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} não é um valor permitido!"
      }
    },
    numeroPaginas: {
      type: Number,
      min: [10, "O núemro de página deve estar enter 10 e 2000. Valor fornecido {VALUE}"],
      max: [2000, "O núemro de página deve estar enter 10 e 2000. Valor fornecido {VALUE}"]
    }
  }
);

const livros= mongoose.model("livros", livroSchema);

export default livros;