import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/ProductsRender';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import 'boxicons';

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  useEffect(() => {
    let filtered = items;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedBrands, items]);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleCheckboxChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
    alert(`${product.title} added to cart!`);
  };

  const brandList = [
    'Apple', 'Samsung', 'Xiaomi', 'Poco', 'OPPO', 'Honor', 'Motorola', 'Nokia',
    'Realme', 'Vivo', 'OnePlus', 'Google', 'Sony', 'LG', 'HTC', 'Huawei',
    'Lenovo', 'Asus', 'ZTE', 'TCL', 'Alcatel', 'Micromax', 'Infinix', 'Tecno',
    'Lava', 'Karbonn', 'Gionee',
  ];

  return (
    <main className="w-full flex flex-col items-center bg-white min-h-screen">
      <div className="max-w-7xl w-full px-4">
        <section className="flex flex-col md:flex-row justify-between items-center mt-28 mb-6">
          <h1 className="text-3xl font-bold text-gray-700">Smartphones</h1>
          <p className="text-lg font-semibold text-gray-500">
            Selected Products: <CountUp end={filteredProducts.length} duration={0.5} />
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-1/4 w-full space-y-5 sticky top-24">
            <div className="border rounded-lg max-h-[500px] overflow-y-auto shadow p-4">
              <h3 className="font-semibold mb-2">Brand</h3>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search"
                className="w-full mb-3 px-2 py-1 border rounded"
              />
              <ul className="space-y-2">
                {brandList.map((brand, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleCheckboxChange(brand)}
                      className="accent-blue-600"
                    />
                    <label htmlFor={`brand-${brand}`}>{brand}</label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="lg:w-3/4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 py-20">
                  No products found.
                </div>
              ) : (
                filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={(item.id % 4) * 100}
                    className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center group hover:scale-[1.02] hover:shadow-2xl transition duration-300"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h2 className="text-md font-bold text-gray-800 line-clamp-2">{item.title}</h2>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <p className="text-lg font-bold text-black mt-1">${item.price}</p>
                    <button
                      onClick={() => addToCart(item)}
                      className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-xl hover:opacity-90 active:scale-95 transition duration-300 flex items-center justify-center gap-2"
                    >
                      Buy <i className="bx bx-basket"></i>
                    </button>
                  </div>
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
