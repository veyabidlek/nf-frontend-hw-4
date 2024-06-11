"use client";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Advertisements from "./advertisements";
import { useEffect } from "react";

const queryClient = new QueryClient();

async function fetchProducts() {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
}

function LoadAdvertisements() {
  const { data, isLoading, error } = useQuery("products", fetchProducts, {
    keepPreviousData: true,
  });

  useEffect(() => {
    console.log("data changed");
    console.log(data);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {"ERROR!"}</div>;

  return <Advertisements data={data} />;
}

export default function LoadAdvertisement() {
  return <LoadAdvertisements />;
}
