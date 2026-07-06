import { useState, useMemo } from 'react';
import Dropdown from './Dropdown';
import ProductCard from './ProductCard';
import SearchBox from './SearchBox';

const sortList = ['Popularity', 'Price Low to High', 'Price High to Low'];

export default function ProductListings({ products }) {
  const [searchText, setSearchText] = useState('');
  const [selectedSort, setSelectedSort] = useState('popularity');

  const filteredAndSortedProducts = useMemo(() => {
    if (!Array.isArray(products)) {
      return [];
    }

    let filteredProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    return filteredProducts.slice().sort((a, b) => {
      switch (selectedSort) {
        case 'Price Low to High':
          return parseFloat(a.price) - parseFloat(b.price);
        case 'Price High to Low':
          return parseFloat(b.price) - parseFloat(a.price);
        case 'Popularity':
        default:
          return parseInt(b.popularity) - parseInt(a.popularity);
      }
    });
  }, [products, searchText, selectedSort]);

  const handleSearchChange = (inputSearch) => {
    setSearchText(inputSearch);
  };
  const handleSortChange = (sortType) => {
    setSelectedSort(sortType);
  };

  return (
    <div className="product-listings-container">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="Search products..."
          value={searchText}
          handleSearch={(value) => handleSearchChange(value)}
        />

        <Dropdown
          label="Sort by"
          options={sortList}
          value={selectedSort}
          handleSort={(value) => handleSortChange(value)}
        />
      </div>
      <div className="product-listings-grid">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="product-listings-empty">No products found</p>
        )}
      </div>
    </div>
  );
}
