import React, { useState, createContext } from "react";
import Product1Img from '../assets/img/product1.png';

export const TopCompetitorContext = createContext();

export const TopCompetitorProvider = props => {
  const [topCompetitor, setTopCompetitor] = useState({
		title: 'TOP COMPETITOR SKU',
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
    <TopCompetitorContext.Provider value={[topCompetitor, setTopCompetitor]}>
      {props.children}
    </TopCompetitorContext.Provider>
  );
};