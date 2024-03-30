import CommuteIcon from "@mui/icons-material/Commute";
import Link from "next/link";

const Navbar = () => {
  return (
    <Link href="/">
      <nav className="flex items-center justify-center gap-3 merienda-font h-14 text-xl">
        <CommuteIcon />
        <span>MotoCheck</span>
      </nav>
    </Link>
  );
};

export default Navbar;
