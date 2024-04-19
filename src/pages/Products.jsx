import { customFetch } from "../utils";
import { Filters, ProductsContainer, PaginationContainer } from "../components";

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;
  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch("/products", { params: queryParams }),
  };
};

export const productsLoader =
  (queryClient) =>
  async ({ request }) => {
    // const url = new URL(request.url);
    // const singleParam = url.searchParams.get("company"); // Getting a specific param
    // const params = Object.fromEntries(url.searchParams.entries());

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]); // one-liner to get all params

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
    const products = response.data.data;
    const meta = response.data.meta;

    return { products, meta, params };
  };

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
