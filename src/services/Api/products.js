const { instance } = require('./apiInstance');

export const getAllProducts = async () => {
  try {
    const result = await instance.get('products');
    return result.data;
  } catch (error) {
    return { error: 'algo deu errado' };
  }
};

export const sendProducts = async (body, token) => {
  try {
    const result = await instance.post('sale', body, {
      headers: {
        Authorization: token,
      },
    });
    return result;
  } catch (error) {
    return { error: 'não há produtos' };
  }
};

export const addProduct = async (productData) => {
  try {
    const response = await instance.post('/products', productData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao adicionar produto');
  }
};

export const editProduct = async (productId, productData) => {
  try {
    const response = await instance.put(`/products/${productId}`, productData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao editar produto');
  }
};
