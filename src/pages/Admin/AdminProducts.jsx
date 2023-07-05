import React from 'react';
import HeaderAdmin from '../../components/Header/HeaderAdmin';
import ProductsList from '../../components/Order_List/ProductsList';
import AddProductForm from '../../components/Admin/AdminProductForm';

const AdminProducts = () => {

  

  return (
    <div>
      <HeaderAdmin />
      <h1>Admin - Produtos</h1>
      <h1>Adicionar Novo Produto</h1>
      <AddProductForm />
      <ProductsList />
    </div>
  )
};

export default AdminProducts;
