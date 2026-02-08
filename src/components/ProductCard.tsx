import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Plus } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  sizes?: string[];
}

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price);
};

export function ProductCard({ id, name, image, price, sizes = SIZES }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizes, setShowSizes] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizes(true);
      return;
    }
    
    addItem({
      id,
      name,
      size: selectedSize,
      image,
      price,
    });
    
    setSelectedSize(null);
    setShowSizes(false);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden product-hover border border-border/50">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-secondary/50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <h3 className="font-display text-lg uppercase tracking-wide truncate">
          {name}
        </h3>
        
        <p className="text-neon-green text-sm font-bold">
          {formatPrice(price)}
        </p>

        {/* Size Selection */}
        {showSizes && (
          <div className="flex flex-wrap gap-2 animate-fade-in">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`w-10 h-10 rounded border text-sm font-medium transition-all ${
                  selectedSize === size
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-secondary border-border hover:border-primary/50'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          variant="default"
          className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
        >
          {showSizes && !selectedSize ? (
            <>Select Size</>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Add to Bag
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
