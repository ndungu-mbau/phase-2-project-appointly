import { Link } from "react-router-dom";
import image from "./images/resort1.jpeg";

export function Landing() {
  return (
    <>
      <div>
        <nav className="bg-green-500 h-36 flex justify-between pt-10 px-10">
          <div className="text-white text-5xl font-semibold">
            <h1>Appointly</h1>
          </div>
          <div className="">
            <Link
              to="/login"
              className="text-white text-2xl border-2 border-white mr-20 px-8 py-1 rounded-full hover:bg-green-500"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="text-white text-2xl border-2 border-white px-8 py-1  rounded-full hover:bg-green-500"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
      <section className="bg-white dark:bg-neutral-900 h-screen pt-12">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Manage your life with Appointly
            </h1>
            <p className="max-w-2xl mb-10 font-light text-neutral-600 lg:mb-8 md:text-lg lg:text-xl dark:text-neutral-400">
              Meet Appointly: the magical solution to appointment chaos! Say
              goodbye to scheduling stress and hello to effortless organization.
              With Appointly, managing appointments is as smooth as butter on a
              hot biscuit. Start using now and reclaim your time!
            </p>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-neutral-900 border border-neutral-300 rounded-lg hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800 mr-10"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-neutral-900 border border-neutral-300 rounded-lg hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800"
            >
              Sign Up
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={image} alt="Inter Resort" className="rounded-lg" />
          </div>
        </div>
      </section>
    </>
  );
}
