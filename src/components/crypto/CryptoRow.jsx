export default function CryptoRow({ name, symbol, price, change, icon }) {
  const isPositive = change.startsWith("+");

  return (
    <div className="flex items-center justify-between py-2 md:mb-2 rounded-4xl  hover:bg-[#242424] transition-colors px-4 mx-4 cursor-pointer">
      <div className="flex items-center gap-4 w-1/3">
        <img src={icon} alt={name} className="w-8 h-8" />
        <div>
          <p className="hidden md:block text-4xl font-medium text-white">{name}</p>
          <p className="md:hidden text-2xl  text-white">{symbol}</p>
        </div>
      </div>
      <div>
      <p className="font-medium text-2xl tracking-wider text-center">{price}</p>

      <p
        className={`text-right font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}
      >
        {change}
      </p>
      </div>
    </div>
  );
}
