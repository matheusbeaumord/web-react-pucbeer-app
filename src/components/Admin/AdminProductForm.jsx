import React, { useState } from 'react';
import { addProduct } from '../../services/Api/products'

const AdminProductForm = () => {
  const handleAddProduct = async (product) => {
    
    // Aqui você pode fazer a chamada para adicionar o produto no backend
    await addProduct(product)
  };

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [urlImage, setUrlImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar se os campos estão preenchidos
    if (!name || !price || !urlImage) {
      alert('Por favor, preencha todos os campos');
      return;
    }    
    
    // Chamar a função onAddProduct passando o FormData
    handleAddProduct({name, price, urlImage});

    // Limpar os campos do formulário
    setName('');
    setPrice('');
    setUrlImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default AdminProductForm;
