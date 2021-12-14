import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/lii.png" height={50} weidth={111} alt=""/>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas/"><a>Ninja Listing</a></Link>
    </nav>
);
}
 
export default Navbar;