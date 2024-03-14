type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  readonly rating: {
    rate: number;
    count: number;
  };
};

export const getProduct = async (): Promise<Product[] | []> => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch products: ', error);
    return [];
  }
};
