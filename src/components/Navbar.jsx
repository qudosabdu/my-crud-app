import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-800 flex justify-between items-center px-8 py-3">
      <Link href={'/'} className="text-white font-bold">AbduTECH.</Link>
      <Link href={'/addTopic'} className="bg-white p-2">Add Topic</Link>
    </nav>
  );
}

export default Navbar;
