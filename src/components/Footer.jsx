import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-14 flex items-center justify-center">
      <h1 className=" font-semibold">A <Link className=" font-bold text-green-600" href="https://www.tekkdng.vercel.app">Tekkd NG</Link> Solution</h1>
    </footer>
  );
};

export default Footer;
