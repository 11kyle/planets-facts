export function Statistic({ data, subject }) {
  return (
    <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-center border border-[#38384F] px-6 w-full h-12 md:w-[164px] md:h-[88px] lg:w-[255px] lg:h-[128px]">
      <span className="uppercase text-[#D8D8D8] heading-sm">{subject}</span>
      <span className="uppercase text-[#D8D8D8] heading-lg">{data}</span>
    </div>
  );
}