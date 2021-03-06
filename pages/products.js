import React from 'react';
import Layout from '../components/Layout';
import { gql, useQuery } from '@apollo/client';
import Product from '../components/Product';
import Link from 'next/link';

const GET_PRODUCTS = gql`
    query getProducts {
        getProducts {
            id
            name
            price
            stock
        }
    }
`;

const Products = () => {
    const { data, loading } = useQuery(GET_PRODUCTS);
    
    if (loading) return 'Loading...';

    return (
        <div>
            <Layout>
                <h1 className="text-2xl text-gray-800 font-light">Products</h1>

                <Link href="/newProduct">
                    <a className="bg-blue-800 py-2 px-5 mt-3 mb-3 inline-block text-white rounded text-sm uppercase font-bold hover:bg-gray-800 w-full lg:w-auto text-center">New Product</a>
                </Link>
                <div className="overflow-x-scroll lg:overflow-x-hidden">
                    <table className="table-auto shadow-md mt-10 w-full w-lg">
                        <thead className="bg-gray-800">
                            <tr className="text-white">
                                <th className="w-1/5 py-2">Name</th>
                                <th className="w-1/5 py-2">Stock</th>
                                <th className="w-1/5 py-2">Price</th>
                                <th className="w-1/5 py-2">Delete</th>
                                <th className="w-1/5 py-2">Edit</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {data.getProducts.map(product => (
                                <Product
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </Layout>
        </div>
    );
};
 
export default Products;