import { model, Schema } from "mongoose";


const classeSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo NOME é obrigatório!"],
    },
    isbn: {
      type: String,
      required: [true, "O campo ISBN é obrigatório!"],
    },
    preco: {
      type: Number,
      required: [true, "O campo PRECO é obrigatório!"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("livros", classeSchema);
