const NavLand = () => {
  return (
    <header aria-label="Site Header">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between gap-4 laptop:gap-10">
          <div className="flex text-xl gap-2 font-bold text-green-600">
            <i className="ri-shopping-bag-3-line"></i>
            <p>SALUM</p>
          </div>

          <div className="hidden flex-1 items-center justify-end gap-2 tablet:gap-4 phone:flex">
            <a
              className="px-5 py-2  text-sm font-medium text-center text-gray-500 transition duration-500 ease-in-out transform bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none"
              href=""
            >
              Log in
            </a>

            <a
              className="px-5 py-2  text-sm font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-600 rounded-md hover:bg-green-700 focus:outline-none"
              href=""
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavLand;
