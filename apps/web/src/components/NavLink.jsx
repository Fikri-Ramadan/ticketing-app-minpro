import Link from 'next/link';

const NavLink = ({ href, name }) => {
  return (
    <Link href={href} className="block py-2 px-3 bg-transparent">
      {name}
    </Link>
  );
};

export default NavLink;