import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/ProductDetailClient";

type Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  dicountPercentage?: number;
  isNew: boolean;
  imageUrl: string;
  tags: string[];
};

// Fetch product data for a specific product
async function getProduct(id: string): Promise<Product | null> {
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0] {
      _id,
      title,
      price,
      description,
      dicountPercentage,
      isNew,
      "imageUrl": productImage.asset->url,
      tags
    }`,
    { id }
  );

  return product || null;
}

// Generate static paths for all products
export async function generateStaticParams() {
  const products = await client.fetch(`*[_type == "product"]{_id}`);
  return products.map((product: { _id: string }) => ({
    id: product._id,
  }));
}

const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  // Fetch the product
  const product = await getProduct(params.id);

  // If the product doesn't exist, show a 404 page
  if (!product) {
    notFound();
  }

  // Safeguard: Ensure TypeScript understands `product` is not null
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full max-w-md lg:max-w-full border rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          {/* Pass the product explicitly to ProductDetailClient */}
          {product && <ProductDetailClient product={product} />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
