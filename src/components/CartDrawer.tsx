import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingBag, Minus, Plus, Trash2, MessageCircle, Instagram } from 'lucide-react';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price);
};

export function CartDrawer() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return '';
    
    const itemsList = items
      .map(item => `• ${item.name} (Size: ${item.size}) x${item.quantity} - ${formatPrice(item.price * item.quantity)}`)
      .join('\n');
    
    const message = `Hi! I'd like to place an order:\n\n${itemsList}\n\nTotal: ${formatPrice(totalPrice)}\n\nPlease let me know the payment details. Thank you!`;
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/2349159791166?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramOrder = () => {
    window.open('https://www.instagram.com/ashy_heart_?igsh=MTZ1Z2ZrY3hhMXpmZA%3D%3D', '_blank');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative border-border hover:border-primary hover:bg-primary/10"
        >
          <ShoppingBag className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-accent-foreground rounded-full text-xs font-bold flex items-center justify-center animate-scale-in">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md bg-background border-border">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl uppercase tracking-wide">
            Your Bag
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-[calc(100vh-120px)] mt-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">Your bag is empty</p>
              <p className="text-sm text-muted-foreground/70 mt-1">
                Add some fire pieces!
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 bg-card rounded-lg p-3 border border-border/50 animate-fade-in"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                      <p className="text-sm text-neon-green font-semibold">{formatPrice(item.price)}</p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-7 h-7 rounded bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-7 h-7 rounded bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="text-muted-foreground hover:text-accent transition-colors self-start"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Cart Footer */}
              <div className="border-t border-border pt-4 mt-4 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-display uppercase">Total</span>
                  <span className="font-display text-neon-green font-bold">{formatPrice(totalPrice)}</span>
                </div>
                
                <Button
                  onClick={handleWhatsAppOrder}
                  className="w-full gap-2 bg-neon-green text-primary-foreground hover:bg-neon-green/90 font-bold text-lg h-14"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </Button>

                <Button
                  onClick={handleInstagramOrder}
                  variant="outline"
                  className="w-full gap-2 border-accent text-accent hover:bg-accent/10 font-bold text-lg h-14"
                >
                  <Instagram className="w-5 h-5" />
                  Order via Instagram
                </Button>
                
                <Button
                  onClick={clearCart}
                  variant="ghost"
                  className="w-full text-muted-foreground hover:text-accent"
                >
                  Clear Bag
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
