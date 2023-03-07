import React from "react";

const Review = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 phone:px-6 laptop:px-8">
        <h2 className="text-xl font-bold phone:text-2xl">Customer Reviews</h2>

        <div className="mt-4 flex items-center gap-4">
          <p className="text-3xl font-medium">
            3.8
            <span className="sr-only"> Average review score </span>
          </p>

          <div>
            <div className="flex">
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-yellow-500"></i>
              <i className="ri-star-fill text-gray-200"></i>
            </div>

            <p className="mt-0.5 text-xs text-gray-500">Based on 48 reviews</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 laptop:grid-cols-2">
          <blockquote>
            <header class="phone:flex phone:items-center phone:gap-4">
              <div class="flex">
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-gray-200"></i>
              </div>

              <p className="mt-2 font-medium phone:mt-0">
                Keren hoddienya , kalian wajib beli!
              </p>
            </header>

            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
              alias incidunt cum tempore aliquid aliquam error quisquam ipsam
              asperiores! Iste?
            </p>

            <footer className="mt-4">
              <p className="text-xs text-gray-500">
                John Doe - 12th January, 2023
              </p>
            </footer>
          </blockquote>

          <blockquote>
            <header className="phone:flex phone:items-center phone:gap-4">
              <div className="flex">
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-gray-200"></i>
              </div>

              <p className="mt-2 font-medium phone:mt-0">
                Keren hoddienya , kalian wajib beli!
              </p>
            </header>

            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
              alias incidunt cum tempore aliquid aliquam error quisquam ipsam
              asperiores! Iste?
            </p>

            <footer className="mt-4">
              <p className="text-xs text-gray-500">
                John Doe - 12th January, 2023
              </p>
            </footer>
          </blockquote>

          <blockquote>
            <header className="phone:flex phone:items-center phone:gap-4">
              <div className="flex">
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-gray-200"></i>
              </div>

              <p className="mt-2 font-medium phone:mt-0">
                Keren hoddienya , kalian wajib beli!
              </p>
            </header>

            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
              alias incidunt cum tempore aliquid aliquam error quisquam ipsam
              asperiores! Iste?
            </p>

            <footer className="mt-4">
              <p className="text-xs text-gray-500">
                John Doe - 12th January, 2023
              </p>
            </footer>
          </blockquote>

          <blockquote>
            <header className="phone:flex phone:items-center phone:gap-4">
              <div className="flex">
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-yellow-500"></i>
                <i className="ri-star-fill text-gray-200"></i>
              </div>

              <p className="mt-2 font-medium phone:mt-0">
                Keren hoddienya , kalian wajib beli!
              </p>
            </header>

            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
              alias incidunt cum tempore aliquid aliquam error quisquam ipsam
              asperiores! Iste?
            </p>

            <footer className="mt-4">
              <p className="text-xs text-gray-500">
                John Doe - 12th January, 2023
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Review;
