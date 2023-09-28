import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { UserAuth } from "../../auth/AuthContext";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../assets/images/FurryPalsfooter.png";
import { Link, useLocation } from "react-router-dom";
import Community from "./Community";
import About from "../../pages/About";
import Profile from "./Profile";

const userSignOut = () => {
  signOut(auth)
    .then(() => {
      alert("sign out successful");
    })
    .catch((error) => console.log(error));
};

const Userdash = () => {
  const { currentUser } = UserAuth();
  const location = useLocation();

  const user = {
    name: currentUser.displayName,
    email: currentUser.email,
    imageUrl: currentUser.photoURL,
  };

  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Dashboard", href: "/dashboard/overview", current: true },
    { name: " Consultation", href: "/dashboard/consultation", current: false },
    { name: "Grooming", href: "/dashboard/grooming", current: false },
    { name: "Community", href: "/dashboard/community", current: false },
    { name: "FurryPals", href: "/dashboard/pets", current: false },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "/dashboard/profile" },
    { name: "Settings", href: "/dashboard/settings" },
    { name: "Sign out", href: "/", onClick: "userSignOut" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const routesToShowDiv1 = ["/dashboard/overview"];
  const routesToShowDiv2 = ["/dashboard/consultation"];
  const routesToShowDiv3 = ["/dashboard/grooming"];
  const routesToShowDiv4 = ["/dashboard/community"];
  const routesToShowDiv5 = ["/dashboard/pets"];
  const routesToShowDiv6 = ["/dashboard/profile"];
  const routesToShowDiv7 = ["/dashboard/settings"];

  const shouldShowDiv1 = routesToShowDiv1.includes(location.pathname);
  const shouldShowDiv2 = routesToShowDiv2.includes(location.pathname);
  const shouldShowDiv3 = routesToShowDiv3.includes(location.pathname);
  const shouldShowDiv4 = routesToShowDiv4.includes(location.pathname);
  const shouldShowDiv5 = routesToShowDiv5.includes(location.pathname);
  const shouldShowDiv6 = routesToShowDiv6.includes(location.pathname);
  const shouldShowDiv7 = routesToShowDiv7.includes(location.pathname);

  return (
    <>
      <div className="h-32 fixed w-full">
        <Disclosure as="nav" className="bg-secondary">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-24 sm:h-24"
                        src={Logo}
                        alt="FurryPals Logo"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-secondary text-neutral hover:bg-purple-200 rounded-md"
                                : "bg-secondary text-neutral hover:bg-purple-200 rounded-md",
                              " px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-white p-1 text-neutral hover:text-purple focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2 focus:ring-offset-purple-300"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2 focus:ring-offset-purple-300">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-white" : "",
                                      "block px-4 py-2 text-sm text-neutral"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-whites p-2 text-neutral hover:bg-purple-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-white text-neutral"
                          : "text-neutral hover:bg-purple-300 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-Neutral">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-Neutral">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-neutral hover:bg-purple-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-Neutral hover:bg-purple-300 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-neutral">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-5 max-w-7xl py-6 my-5 sm:px-6 lg:px-8  bg-base-200 rounded-3xl">
            {shouldShowDiv1 ? (
              <div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                  <div class="row-span-3 ...">01</div>
                  <div class="col-span-2 ...">02</div>
                  <div class="row-span-2 col-span-2 ...">03</div>
                </div>{" "}
              </div>
            ) : null}
            {shouldShowDiv2 ? <div>Your div content here2 </div> : null}
            {shouldShowDiv3 ? <div>Your div content here 3 </div> : null}
            {shouldShowDiv4 ? (
              <div>
                <Community />
              </div>
            ) : null}
            {shouldShowDiv5 ? <div>Your div content here 5 </div> : null}
            {shouldShowDiv6 ? (
              <div className="">
                <Profile />
              </div>
            ) : null}
            {shouldShowDiv7 ? <div>Your div content here 7 </div> : null}
          </div>
        </main>
      </div>
    </>
  );
};

export default Userdash;
