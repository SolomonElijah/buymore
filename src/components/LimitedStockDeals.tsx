import Image from "next/image";

const deals = [
  {
    title: "Skyrun 6kg Twin Tub Semi...",
    price: "₦ 147,000",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/0427404/1.jpg?2709",
  },
  {
    title: "Malta Guinness Can 330ml x24",
    oldPrice: "₦ 16,500",
    price: "₦ 15,200",
    discount: "-8%",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/612838/1.jpg?0389",
  },
  {
    title: "NIVEA DoShakara Pack – 400ml",
    price: "₦ 13,050",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/9023401/1.jpg?5255",
  },
  {
    title: "Mi+ 32 inches LED Tv",
    oldPrice: "₦ 115,000",
    price: "₦ 101,518",
    discount: "-12%",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/3414773/1.jpg?2120",
  },
  {
    title: "Ace Elec 14.1\" Intel(R) Laptop",
    price: "₦ 220,442",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/8487963/1.jpg?7909",
  },
  {
    title: "Aeon 1HP Split Air Conditioner",
    price: "₦ 283,500",
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/1311391/1.jpg?5993",
  },
];

export default function LimitedStockDeals() {
  return (
    <section className="bg-[#211ef3] p-4 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Limited Stock Deals</h2>
        <a href="#" className="text-white text-sm font-medium">
          See All &gt;
        </a>
      </div>
      <div className="bg-orange-100 p-4 rounded-md overflow-x-auto">
        <div className="flex space-x-4 min-w-max">
          {deals.map((item, index) => (
            <div
              key={index}
              className="bg-white min-w-[180px] max-w-[180px] p-2 rounded shadow-sm relative"
            >
              {item.discount && (
                <span className="absolute top-2 left-2 bg-orange-200 text-orange-700 text-xs font-bold px-2 py-1 rounded">
                  {item.discount}
                </span>
              )}
              <div className="h-32 flex items-center justify-center mb-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-contain max-h-full"
                />
              </div>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-[#0c0c0c] font-semibold">{item.price}</p>
              {item.oldPrice && (
                <p className="text-gray-500 text-xs line-through">{item.oldPrice}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
