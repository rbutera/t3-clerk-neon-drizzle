import Link from "next/link";

export default function TopNav() {
  return (
    <header>
      <nav className="container flex w-full items-center justify-between gap-4 p-4">
        <Link href="/">Home</Link>
        <Link href="/signin">Sign In</Link>
      </nav>
    </header>
  );
}
