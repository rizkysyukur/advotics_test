import React, { useState, createContext } from "react";
import Product1Img from '../assets/img/product1.png';

export const BestSellingContext = createContext();

export const BestSellingProvider = props => {
  const [bestSelling, setBestSelling] = useState({
		title: 'BEST SELLING SKU',
		data: [
			{
				id: '0',
				img: Product1Img,
				productLabel: '[Name Product]',
				price: 'Rp XXXX',
				soldTotal: '[Jml Terjual]'
			},
			{
				id: '1',
				img: Product1Img,
				productLabel: '[Name Product]',
				price: 'Rp XXXX',
				soldTotal: '[Jml Terjual]'
			},
			{
				id: '2',
				img: Product1Img,
				productLabel: '[Name Product]',
				price: 'Rp XXXX',
				soldTotal: '[Jml Terjual]'
			},
			{
				id: '3',
				img: Product1Img,
				productLabel: '[Name Product]',
				price: 'Rp XXXX',
				soldTotal: '[Jml Terjual]'
			},
			{
				id: '4',
				img: Product1Img,
				productLabel: '[Name Product]',
				price: 'Rp XXXX',
				soldTotal: '[Jml Terjual]'
			},
			
		]
	});

  return (
    <BestSellingContext.Provider value={[bestSelling, setBestSelling]}>
      {props.children}
    </BestSellingContext.Provider>
  );
};