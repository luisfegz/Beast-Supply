
export default function Center ({ children }) {
  return (
    <div 
      className="
        w-full max-w-screen-sm md:max-w-screen-sm lg:max-w-lg py-5 mx-auto  
        px-5 md:px-[10px]
      "
    >
      {children}
    </div>
  );
};
