import Link from "next/link";

const NavBar = () => {
  const style = {
    display: "flex",
    backgroundColor: "grey",
    justifyContent: "space-between",
    padding: "1rem",
  };
  return (
    <div style={style}>
      <Link href="/">Home Page</Link>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact Page</Link>
    </div>
  );
};

export default NavBar;
