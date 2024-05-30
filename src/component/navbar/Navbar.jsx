import Link from "next/link";
import Links from "./links/Links";

const Navbar = async () => {
  return (
    <div>
      <Link href="/">Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
