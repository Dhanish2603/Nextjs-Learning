import Link from "next/link"; 
function NavBar() {
  return (
    <div>
      <nav>
        <li>
          <Link href={"/About"}>About</Link>
        </li>
        <li>
          <Link href={"/Contact"}>Contact Us</Link>
        </li>
        <li>
          <Link href={"/users"}>users</Link>
        </li>
      </nav>
    </div>
  );
}

export default NavBar;
