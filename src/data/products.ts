import swagTeeBlack from '@/assets/products/swag-tee-black.jpg';
import crewTeeBlack from '@/assets/products/crew-tee-black.jpg';
import crewTeeWhite from '@/assets/products/crew-tee-white.jpg';
import swagTeeBlack2 from '@/assets/products/swag-tee-black-2.jpg';
import mascotTee from '@/assets/products/mascot-tee.jpg';

// New Imports based on your sidebar
import jaTees from '@/assets/products/9JA TEES.jpg';
import allGirlsSame from '@/assets/products/all girls same.jpg';
import noChillGuy from '@/assets/products/no chill guy.jpg';
import noThiefIkeja from '@/assets/products/no thief ikeja.jpg';
import yelloBlowUp from '@/assets/products/Yello Blow UP.jpg';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

export const PRODUCT_PRICE = 10000;

export const products: Product[] = [
  {
    id: 'swag-tee-1',
    name: '001',
    image: swagTeeBlack,
    price: PRODUCT_PRICE,
  },
  {
    id: 'crew-tee-black',
    name: '002',
    image: crewTeeBlack,
    price: PRODUCT_PRICE,
  },
  {
    id: 'crew-tee-white',
    name: '003',
    image: crewTeeWhite,
    price: PRODUCT_PRICE,
  },
  {
    id: 'swag-tee-2',
    name: '004',
    image: swagTeeBlack2,
    price: PRODUCT_PRICE,
  },
  {
    id: 'mascot-tee',
    name: '005',
    image: mascotTee,
    price: PRODUCT_PRICE,
  },
  // --- Bottom Row Starts Here (Updated Images) ---
  {
    id: 'swag-tee-3',
    name: '006',
    image: noChillGuy, 
    price: PRODUCT_PRICE,
  },
  {
    id: 'crew-tee-lime',
    name: '007',
    image: jaTees, 
    price: PRODUCT_PRICE,
  },
  {
    id: 'classic-crew',
    name: '008',
    image: allGirlsSame,
    price: PRODUCT_PRICE,
  },
  {
    id: 'limited-drop',
    name: '009',
    image: noThiefIkeja,
    price: PRODUCT_PRICE,
  },
  {
    id: 'mascot-premium',
    name: '010',
    image: yelloBlowUp,
    price: PRODUCT_PRICE,
  },
];