/* ModeloLogico: */

CREATE TABLE Cliente (
    IdCliente int PRIMARY KEY,
    Nome nvarchar(50),
    Cpf nvarchar(11),
    Telefone nvarchar(11),
    Email nvarchar(50)
);

CREATE TABLE Pedido (
    IdPedido int PRIMARY KEY,
    DataPedido Date,
    TotalPedido real,
    fk_Cliente_IdCliente int
);

CREATE TABLE PedidoPromo (
    IdPedidoPromo int PRIMARY KEY,
    DataPedidoPromo Date,
    TotalPedidoPromo real,
    fk_Cliente_IdCliente int
);

CREATE TABLE Local (
    IdLocal int PRIMARY KEY,
    Descricao nvarchar(50),
    Preco real,
    UrlImagem nvarchar(300)
);

CREATE TABLE LocalPromo (
    Preco real,
    DescricaoPromo nvarchar(50),
    IdLocalPromo int PRIMARY KEY,
    UrlImagemPromo nvarchar(300),
    PrecoComDesconto real,
    taxaDesconto real
);

CREATE TABLE Suporte (
    IdSuporte int PRIMARY KEY,
    Mensagem nvarchar(300),
    fk_Cliente_IdCliente int
);

CREATE TABLE ItemPedido (
    IdItem int PRIMARY KEY,
    fk_Pedido_IdPedido int,
    fk_Local_IdLocal int
);

CREATE TABLE ItemPedidoPromo (
    IdItemPromo int PRIMARY KEY,
    fk_PedidoPromo_IdPedidoPromo int,
    fk_LocalPromo_IdLocalPromo int
);
 
ALTER TABLE Pedido ADD CONSTRAINT FK_Pedido_2
    FOREIGN KEY (fk_Cliente_IdCliente)
    REFERENCES Cliente (IdCliente)
    ON DELETE CASCADE;
 
ALTER TABLE PedidoPromo ADD CONSTRAINT FK_PedidoPromo_2
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
    FOREIGN KEY (fk_PedidoPromo_IdPedidoPromo)
    REFERENCES PedidoPromo (IdPedidoPromo)
    ON DELETE RESTRICT;
 
ALTER TABLE ItemPedidoPromo ADD CONSTRAINT FK_ItemPedidoPromo_3
    FOREIGN KEY (fk_LocalPromo_IdLocalPromo)
    REFERENCES LocalPromo (IdLocalPromo)
    ON DELETE CASCADE;