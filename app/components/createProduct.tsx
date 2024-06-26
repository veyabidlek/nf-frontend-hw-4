"use client";
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQueryClient,
} from "react-query";
import Advertisements from "./advertisements";

function useUploadImage() {
  return useMutation(async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/files/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data.location;
  });
}

async function createProduct(data: any) {
  const response = await axios.post("https://fakestoreapi.com/products", data);
  return response.data;
}

export default function CreateProduct() {
  const queryClient = useQueryClient();
  const uploadImageMutation = useUploadImage();
  const createProductMutation = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    const imageFile = formData.get("image");
    if (imageFile && imageFile.name) {
      try {
        const imageUrl = await uploadImageMutation.mutateAsync(imageFile);
        console.log(imageUrl);
        fields.image = imageUrl;
      } catch (error) {
        console.error("Image upload failed", error);
        return;
      }
    }
    try {
      await createProductMutation.mutateAsync(fields);
    } catch (error) {
      console.error("Product creation failed", error);
    }

    event.target.reset();
  };

  return (
    <div className="flex justify-center items-center py-[50px] bg-gray-300">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded shadow-md w-[400px]"
      >
        <div className="mb-4">
          <input
            placeholder="Image"
            name="image"
            type="file"
            className="block w-full text-gray-700 border rounded py-2 px-3 mb-3"
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Title"
            name="title"
            type="text"
            className="block w-full text-gray-700 border rounded py-2 px-3 mb-3"
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Price"
            name="price"
            type="number"
            className="block w-full text-gray-700 border rounded py-2 px-3 mb-3"
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Description"
            name="description"
            type="text"
            className="block w-full text-gray-700 border rounded py-2 px-3 mb-3"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#002F34] text-white py-2 rounded hover:bg-blue-700"
        >
          Add New Product
        </button>
      </form>
    </div>
  );
}
