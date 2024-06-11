export default function SearchBar() {
  return (
    <form className="max-w-5xl mx-auto mt-[50px]  ">
      <label
        htmlFor="defaultSearch"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <div className="flex shadow-md">
          <input
            type="search"
            id="defaultSearch"
            className="block w-full py-4 ps-10  text-sm text-gray-900 "
            placeholder="iPhone s5 Б/У..."
            required
          />
          <button
            type="submit"
            className="text-white  bg-[#002F34]  focus:ring-4  font-medium rounded-md text-sm px-9 py-4 ml-[-5px] "
          >
            Искать
          </button>
        </div>
      </div>
    </form>
  );
}
