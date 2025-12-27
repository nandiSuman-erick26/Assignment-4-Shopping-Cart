export interface Product {
  product_name: string;
  description: string;
  product_price: string;
  product_image: string;
  ratings?: string | number;
  product_id: string;
}

// id: number;
// name: string;
// category: string;
// subcategory?: string;
// price: number; // Changed to match number in JSON (though usually price is number)
// originalPrice: number;
// currency?: string;
// description: string;
// rating: number;
// reviewCount: number;
// inStock: boolean;
// stockQuantity?: number; // Changed from string to number to match JSON
// brand: string;
// sizes?: string[]; // Changed from tuple [string] to array string[]
// size?: string; // Added missing property found in items like "Beard Growth Oil"
// colors?: string[]; // Changed from tuple [string] to array string[]
// imageUrl: string;
// discount?: number;
