export function Tab({ children }) {
  return (
    <div className="heading-md btn flex flex-row justify-center md:justify-start cursor-pointer">
      {children}
    </div>
  );
}