import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LivroService from "../../services/LivroService";

export default function Index() {
  const [livros, setLivros] = useState([]);

  const getAllLivros = () => {
    LivroService.getAllLivros()
      .then((response) => {
        setLivros(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllLivros();
  }, []);

  const deleteLivro = (livroId) => {
    LivroService.deleteLivro(livroId)
      .then((response) => {
        getAllLivros();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro Livro</h1>
      </header>
      <div className="container py-3">
        <Link to="/Livros-Create" className="btn btn-primary mb-2">
          Criar Livro
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Isbn</th>
                <th>Preço</th>
                <th>Autor</th>
                <th>Editora</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((livro) => (
                <tr key={livro.id}>
                  <td>{livro.id}</td>
                  <td>{livro.nome}</td>
                  <td>{livro.isbn}</td>
                  <td>{livro.preco}</td>
                  <td>
                    {livro.autor.nome} {livro.autor.sobrenome}
                  </td>
                  <td>{livro.editora.nome}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Livros-Update/${livro.id}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteLivro(livro.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}