import categories from "../../public/categories.json";

export default function Categories() {
  return (
    <div className="p-[50px]">
      <h1 className="text-center font-bold text-[30px] color-[#002F34]">
        Разделы на сервисе OLX
      </h1>
      <section className="grid grid-cols-4 inline-block ml-[80px] p-[50px] justify-content items-center ">
        {categories.map((category) => (
          <div key={category.id} className="ml-[10px] w-[100px]">
            <img
              src={category.image}
              className="inline rounded-full h-[100px] w-[100px] shadow-lg border border-black border-solid"
            />
            <p className="color-[#002F34] font-bold text-center  items-center text-[15px]">
              {category.name}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
