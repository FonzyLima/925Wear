import Link from "next/link";
const Nav = () => {
  return (
    <>
      <nav className="w-full bg-beige px-[40px] flex flex-row justify-between items-center">
        <div className="tracking-[-8.2px] text-yellowgreen font-bold text-[40px]">
          925
        </div>
        <ul className="gap-[20px] text-[16px] flex-row flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
