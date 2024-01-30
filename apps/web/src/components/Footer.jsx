export const Footer = () => {
  return (
    <section>
      <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2023 <a className="hover:underline">Brand™</a>. All Rights
          Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="/event" className="hover:underline me-4 md:me-6">
              Event
            </a>
          </li>
          <li>
            <a href="/event/create" className="hover:underline me-4 md:me-6">
              Create Event
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
};
