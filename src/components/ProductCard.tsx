'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  colorOptions?: string[];
  category: 'Men' | 'Women';
}

const products: Product[] = [
  {
    id: 1,
    image: '/assets/jogger.jpg',
    title: 'Supper Skinny jogger in brown',
    subtitle: 'Your Choice',
    price: '89',
    category: 'Men',
    colorOptions: ['#000000', '#FFD700'],
  },
  {
    id: 2,
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/1544704/1.jpg?4924',
    title: 'WMX Rubber BraTop',
    subtitle: 'Our Picks',
    price: '36',
    category: 'Women',
    colorOptions: ['#FFB6C1', '#FFD700'],
  },
  {
    id: 3,
    image: '/assets/sander.jpg',
    title: 'Casual Pink Sandals',
    subtitle: 'Our Picks',
    price: '36',
    category: 'Women',
    colorOptions: ['#FFB6C1', '#FFD700'],
  },
  {
    id: 4,
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/9743752/1.jpg?6481',
    title: 'Slim Joggers',
    subtitle: 'New',
    price: '70',
    category: 'Men',
    colorOptions: ['#000000'],
  },
  {
    id: 5,
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/2268522/1.jpg?4333',
    title: 'Sweet jacket',
    subtitle: 'New',
    price: '70',
    category: 'Men',
    colorOptions: ['#000000'],
  },
  {
    id: 6,
    image: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/9440104/1.jpg?5885',
    title: 'Cahrat Gown',
    subtitle: 'New',
    price: '70',
    category: 'Women',
    colorOptions: ['#000000'],
  },
];

const ProductCardList = () => {
  const [filter, setFilter] = useState<'All' | 'Men' | 'Women'>('All');

  const filtered = filter === 'All' ? products : products.filter((p) => p.category === filter);

  return (
    <div className="p-4">
      <div className="flex gap-3 mb-6">
        {['All', 'Men', 'Women'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat as 'All' | 'Men' | 'Women')}
            className={`px-4 py-2 rounded-full ${
              filter === cat ? 'bg-black text-white' : 'border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl p-4 shadow-sm space-y-3">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={160}
              className="w-full h-40 object-cover rounded-2xl"
            />
            <div className="flex gap-2">
              {product.colorOptions?.map((color, i) => (
                <span
                  key={i}
                  className="w-3 h-3 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <h4 className="text-xs text-gray-400">{product.subtitle}</h4>
            <h3 className="font-semibold text-base">{product.title}</h3>
            <span className="text-blue-500 font-bold text-sm">${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;
