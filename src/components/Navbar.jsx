import CommuteIcon from "@mui/icons-material/Commute";
import Link from "next/link";

const Navbar = () => {
  return (
    <Link href="/">
      <nav className="fixed bg-white flex w-screen items-center justify-center gap-3 merienda-font h-14 md:text-3xl ">
        <CommuteIcon fontSize="large" />
        <span className=" text-2xl">MotoCheck</span>
      </nav>
    </Link>
  );
};

export default Navbar;
