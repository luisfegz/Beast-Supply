import ProductBox from "./NewProducts/ProductBox.js";
import ProductsGrid from "./NewProducts/ProductsGrid";

export default function NewProducts( {newProducts} ) {
    return (
        <div className="mt-[32px] md:mt-[40px] lg:mt-[110px]">
            <ProductsGrid>
                {newProducts?.length > 0 && newProducts.map(newProducts => (
                    <ProductBox {...newProducts}/>
                ))}
            </ProductsGrid>
        </div>
    );
}