import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/clubs">
           Clubs
          </Link>
          <Link href="/meetups">
            meetups
          </Link>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <Link href="/search">
            search
          </Link>
          <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
