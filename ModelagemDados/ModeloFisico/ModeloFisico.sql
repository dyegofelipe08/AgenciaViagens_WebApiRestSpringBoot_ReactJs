/* ModeloLogico: */

CREATE TABLE Cliente (
    IdCliente Long PRIMARY KEY,
    Nome nvarchar(50),
    Cpf nvarchar(11),
    Telefone nvarchar(11),
    Email nvarchar(50)
);

CREATE TABLE Pedido (
    IdPedido Long PRIMARY KEY,
    DataPedido Date,
    TotalPedido real,
    fk_Cliente_IdCliente Long
);

CREATE TABLE Local (
    IdLocal Long PRIMARY KEY,
    Descricao nvarchar(50),
    Preco real,
    UrlImagem nvarchar(300)
);

CREATE TABLE LocalPromo (
    Preco real,
    DescricaoPromo nvarchar(50),
    IdLocalPromo Long PRIMARY KEY,
    UrlImagemPromo nvarchar(300),
    PrecoComDesconto real,
    taxaDesconto real
);

CREATE TABLE Suporte (
    IdSuporte Long PRIMARY KEY,
    Mensagem nvarchar(300),
    fk_Cliente_IdCliente Long
);

CREATE TABLE ItemPedido (
    IdItem Long PRIMARY KEY,
    fk_Pedido_IdPedido Long,
    fk_Local_IdLocal Long
);

CREATE TABLE ItemPedidoPromo (
    IdItemPromo Long PRIMARY KEY,
    fk_LocalPromo_IdLocalPromo Long,
    fk_Pedido_IdPedido Long
);
 
ALTER TABLE Pedido ADD CONSTRAINT FK_Pedido_2
    FOREIGN KEY (fk_Cliente_IdCliente)
    REFERENCES Cliente (IdCliente)
    ON DELETE CASCADE;
 
ALTER TABLE Suporte ADD CONSTRAINT FK_Suporte_2
    FOREIGN KEY (fk_Cliente_IdCliente)
    REFERENCES Cliente (IdCliente)
    ON DELETE CASCADE;
 
ALTER TABLE ItemPedido ADD CONSTRAINT FK_ItemPedido_2
    FOREIGN KEY (fk_Pedido_IdPedido)
    REFERENCES Pedido (IdPedido)
    ON DELETE RESTRICT;
 
ALTER TABLE ItemPedido ADD CONSTRAINT FK_ItemPedido_3
    FOREIGN KEY (fk_Local_IdLocal)
    REFERENCES Local (IdLocal)
    ON DELETE CASCADE;
 
ALTER TABLE ItemPedidoPromo ADD CONSTRAINT FK_ItemPedidoPromo_2
    FOREIGN KEY (fk_LocalPromo_IdLocalPromo)
    REFERENCES LocalPromo (IdLocalPromo)
    ON DELETE CASCADE;
 
ALTER TABLE ItemPedidoPromo ADD CONSTRAINT FK_ItemPedidoPromo_3
    FOREIGN KEY (fk_Pedido_IdPedido)
    REFERENCES Pedido (IdPedido)
    ON DELETE RESTRICT;