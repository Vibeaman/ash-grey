import { CartProvider } from '@/contexts/CartContext';
import { Header } from '@/components/Header';
import { Mascot } from '@/components/Mascot';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20 text-center">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-4">
            <span className="text-foreground">DROP </span>
            <span className="text-primary">001</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto">
            Limited edition streetwear. Prices available on request.
          </p>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              © 2026 SWAG. All rights reserved.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2">
              Contact us via WhatsApp to place your order
            </p>
          </div>
        </footer>

        {/* Fixed Mascot */}
        <Mascot />
      </div>
    </CartProvider>
  );
};

export default Index;
