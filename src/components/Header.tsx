import { CartDrawer } from '@/components/CartDrawer';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neon-green flex items-center justify-center">
            <span className="text-xl">👁️</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl uppercase tracking-wider">
            SWAG
          </h1>
        </div>

        {/* Cart */}
        <CartDrawer />
      </div>
    </header>
  );
}
