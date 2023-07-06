import React, { useState, useEffect } from 'react';
import { addProduct, editProduct } from '../../services/Api/products'
import { getAllProducts } from '../../services/Api/products';


const AdminProductForm = ({products}) => {
  const handleAddProduct = async (product) => {
    // Aqui você pode fazer a chamada para adicionar o produto no backend
    await addProduct(product)
  };

  const handleEditProduct = async (productId, product) => {
    await editProduct(productId, product);

  };

  const [editSelected, setEditSelected] = useState(false);
  const [productId, setProductId] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [urlImage, setUrlImage] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar se os campos estão preenchidos
    if ((!name || !price || !urlImage) && !editSelected) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    if (editSelected) {
      // Chamar a função de edição passando o ID do produto e os dados atualizados
      handleEditProduct(productId, { name, price, urlImage });
    } else {
      // Chamar a função de adição passando os dados do novo produto
      handleAddProduct({ name, price, urlImage });
    }

    // Limpar os campos do formulário
    setName('');
    setPrice('');
    setUrlImage('');
    setEditSelected(false);
    setProductId(null);
  };
  

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="editCheckbox">
      Editar:
      <input
        type="checkbox"
        id="editCheckbox"
        checked={editSelected}
        onChange={(e) => setEditSelected(e.target.checked)}
      />
    </label>

    <label htmlFor="name">Nome:</label>
    {editSelected ? (
      <select
      id="name"
      value={productId}
      onChange={(e) => setProductId(e.target.value)}
    >
      <option value="">Selecione um produto</option>
      {products.map((product) => (
        <option key={product.id} value={product.id}>
          {product.name}
        </option>
      ))}
    </select>
    ) : (
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    )}

    <label htmlFor="price">Preço:</label>
    <input
      type="number"
      id="price"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />

    <label htmlFor="image">Imagem:</label>
    <input
      type="text"
      id="image"
      value={urlImage}
      onChange={(e) => setUrlImage(e.target.value)}
    />

    <button type="submit">
      {editSelected ? 'Editar Produto' : 'Adicionar Produto'}
    </button>
  </form>
  );
};

export default AdminProductForm;
