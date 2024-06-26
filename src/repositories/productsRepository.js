import ProductDAO from "../daos/productsDao.js";
import errorHandler from "../middlewares/errorMiddlewares.js"

class ProductRepository {
    async getAllProducts(filterOptions) {
        try {
            let products;

            if (filterOptions.stock) {
                products = await ProductDAO.getAllWithStock();
            } else {
                products = await ProductDAO.getAll();
            }

            return products;
        } catch (error) {
            errorHandler({ code: 'INTERNAL_SERVER_ERROR', message: error.message }, req, res);
        }
    }

    async getProductById(id) {
        try {
            const product = await ProductDAO.getById(id);
            return product;
        } catch (error) {
            errorHandler({ code: 'ERROR_GET_PRODUCT_ID', message: error.message }, req, res);
        }
    }

    async createProduct(productData) {
        try {
            await ProductDAO.add(productData);
        } catch (error) {
            errorHandler({ code: 'PRODUCT_CREATE_ERROR', message: error.message }, req, res);
        }
    }

    async updateProduct(productId, updatedFields) {
        try {
            const product = await ProductDAO.getById(productId);
            if (!product) {
                errorHandler({ code: 'ERROR_UPDATE_PRODUCT_ID', message: error.message }, req, res);
            }

            const updatedProduct = await ProductDAO.update(productId, updatedFields);
            return updatedProduct;
        } catch (error) {
            errorHandler({ code: 'ERROR_UPDATE_PRODUCT_ID', message: error.message }, req, res);
        }
    }

    async deleteProduct(productId) {
        try {
            const deletedProduct = await ProductDAO.remove(productId);
            return deletedProduct;
        } catch (error) {
            errorHandler({ code: 'ERROR_DELETE', message: error.message }, req, res);
        }
    }
}

export default ProductRepository;
