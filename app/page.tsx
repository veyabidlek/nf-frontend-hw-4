"use client";
import Categories from "./components/categories";
import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";
import LoadAdvertisement from "./components/loadAdvertisement";
import CreateProduct from "./components/createProduct";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <div className="pt-10 pb-20 bg-gray-200">
        <SearchBar />
      </div>
      <Categories />
      <LoadAdvertisement />
      <CreateProduct />
    </QueryClientProvider>
  );
}
