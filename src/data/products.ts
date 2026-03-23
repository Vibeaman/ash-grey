import mobTeeBlack from '@/assets/products/mob-tee-black.jpg';
import shyTeeWhite from '@/assets/products/shy-tee-white.jpg';
import cryTeeWhite from '@/assets/products/cry-tee-white.jpg';
import demonTeeWhite from '@/assets/products/demon-tee-white.jpg';
import chaosTeeBlack from '@/assets/products/chaos-tee-black.jpg';
import squadTeeWhite from '@/assets/products/squad-tee-white.jpg';
import chaosTeeWhite from '@/assets/products/chaos-tee-white.jpg';
import rickTeeBlack from '@/assets/products/rick-tee-black.jpg';
import holeTeeBlack from '@/assets/products/hole-tee-black.jpg';
import neonMobTeeBlack from '@/assets/products/neon-mob-tee-black.jpg';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

export const PRODUCT_PRICE = 13000;

export const products: Product[] = [
  {
    id: 'mob-tee-black',
    name: '001',
    image: mobTeeBlack,
    price: PRODUCT_PRICE,
  },
  {
    id: 'shy-tee-white',
    name: '002',
    image: shyTeeWhite,
    price: PRODUCT_PRICE,
  },
  {
    id: 'cry-tee-white',
    name: '003',
    image: cryTeeWhite,
    price: PRODUCT_PRICE,
  },
  {
    id: 'demon-tee-white',
    name: '004',
    image: demonTeeWhite,
    price: PRODUCT_PRICE,
  },
  {
    id: 'chaos-tee-black',
    name: '005',
    image: chaosTeeBlack,
    price: PRODUCT_PRICE,
  },
  {
    id: 'squad-tee-white',
    name: '006',
    image: squadTeeWhite,
    price: PRODUCT_PRICE,
  },
  {
    id: 'chaos-tee-white',
    name: '007',
    image: chaosTeeWhite,
    price: PRODUCT_PRICE,
  },
  {
    id: 'rick-tee-black',
    name: '008',
    image: rickTeeBlack,
    price: PRODUCT_PRICE,
  },
  {
    id: 'hole-tee-black',
    name: '009',
    image: holeTeeBlack,
    price: PRODUCT_PRICE,
  },
  {
    id: 'neon-mob-tee',
    name: '010',
    image: neonMobTeeBlack,
    price: PRODUCT_PRICE,
  },
];
