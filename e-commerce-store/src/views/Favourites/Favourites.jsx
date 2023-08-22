import { FavouritesList } from "../../components/FavouritesList/FavouritesList";
import { Layout } from "../../components/Layout/Layout";
import SweaterImg from "../../assets/products/sweater.jpg";

function Favourites() {
    const products = [
        {
            id: 2,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcde",
        },
        {
            id: 3,
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcd",
        },

        {
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abc",
        },

        {
            name: "Biały Sweter",
            pricePLN: 199,
            priceUSD: 49,
            images: [SweaterImg],
            sku: "abcdef",
        },
    ];
    return (
        <Layout>
            <FavouritesList products={products} />
        </Layout>
    );
}

export { Favourites };
