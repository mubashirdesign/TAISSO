/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const files = [
  {
    title: "TAISSO Season Opener",
    size: "May 14th 2022",
    source: "https://i.imgur.com/bYVQWOU.jpg",
    href: "/events/may-14-2022",
  },
  // More files...
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 mx-auto max-w-7xl px-4 lg:px-8">
      {files.map((file) => (
        <a href={file.href} key={file.source} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img
              src={file.source}
              alt=""
              className="object-cover pointer-events-none group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
            {file.title}
          </p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
            {file.size}
          </p>
        </a>
      ))}
    </div>
  );
}
