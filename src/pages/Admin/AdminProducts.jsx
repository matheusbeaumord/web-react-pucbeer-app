import React from 'react';
import HeaderAdmin from '../../components/Header/HeaderAdmin';
import ProductsList from '../../components/Order_List/ProductsList';
import AddProductForm from '../../components/Admin/AdminProductForm';
import { getAllProducts } from '../../services/Api/products';


const AdminProducts = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getAllProducts().then((r) => { setProducts(r); });
  }, []);

  return (
    <div>
      <HeaderAdmin />
      <h1>Admin - Produtos</h1>
      <h1>Adicionar Novo Produto</h1>
      <AddProductForm products={products}/>
      // voltar e implementar a tela de listagem de produtos do admin
      {/* <AdminProductsList products={products}/> */}
    </div>
  )
};

export default AdminProducts;
