interface Advertisement {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface AdvertisementsProps {
  data: Advertisement[];
}

export default function Advertisements({ data }: AdvertisementsProps) {
  return (
    <section className="py-32 bg-gray-300">
      <h1 className="text-center font-bold text-3xl">Наши объявления</h1>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <li
              className="w-full mx-auto group sm:max-w-sm rounded-md shadow-md bg-white"
              key={item.id}
            >
              <a href="#">
                <img
                  src={item.image}
                  loading="lazy"
                  alt={item.title}
                  className="w-full rounded-lg h-[200px] object-cover"
                />
                <div className="mt-3 space-y-2 p-2">
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-[#002F34] font-semibold">
                    {item.title}
                  </h3>
                  <span className="block text-black text-lg font-bold">
                    {item.price * 450} ₸
                  </span>
                  <span className="block text-gray-500 text-sm">
                    {item.description}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
