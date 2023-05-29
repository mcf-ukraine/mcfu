import Image from "next/image";
import Link from "next/link";
import { type FC, Fragment, type PropsWithChildren, useState } from "react";
import { useClerk } from "@clerk/nextjs";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Spinner, ToggleColorModeButton } from "@mcfu/ui";
import { ua } from "../../locales/ua";
import { AuthGuard } from "../AuthGuard/AuthGuard";

const navigation = [
  { name: "Кабінет", href: "/", current: true },
  { name: "Профіль", href: "#", current: false },
  { name: "Календар", href: "#", current: false },
  { name: "Підтримати ФАіСУ", href: "#", current: false },
];
const userNavigation = [
  { name: "Твій Профіль", href: "#" },
  { name: "Налаштування", href: "#" },
  { name: "Вихід", href: "#" },
];

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

type LayoutProps = {
  pageTitle?: string;
  user: {
    name: string;
    email: string;
  };
};

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  pageTitle,
  user,
  children,
}) => {
  const [isSigningOut, setIsSigningOut] = useState(false);
  const { signOut } = useClerk();
  const handleSignOut = () => {
    setIsSigningOut(true);
    signOut();
  };

  return (
    <AuthGuard>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <Link href="/">
                        <Image
                          className="block h-10 w-auto"
                          width={40}
                          height={40}
                          src="/logo-transparent.png"
                          alt={ua.common.logoAlt}
                        />
                      </Link>
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "border-sky-600 text-gray-900 dark:border-sky-500 dark:text-white"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300",
                            "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 dark:bg-gray-800 dark:hover:text-gray-300"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="ml-3">
                      <ToggleColorModeButton
                        outlined
                        colorLight="gray-400"
                        colorHoverLight="gray-500"
                        colorDark="gray-400"
                        colorHoverDark="gray-300"
                      />
                    </div>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4">
                      <div className="flex">
                        {!isSigningOut ? (
                          <Menu.Button
                            className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
                            data-testid="open-user-menu"
                          >
                            <span className="sr-only">Open user menu</span>
                            <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                              <svg
                                className="h-full w-full text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                          </Menu.Button>
                        ) : (
                          <Spinner
                            color="text-sky-600"
                            darkColor="text-sky-500"
                          />
                        )}
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border dark:border-gray-600 dark:bg-gray-800">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) =>
                                item.name === "Вихід" ? (
                                  <button
                                    type="button"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 dark:bg-gray-700"
                                        : "",
                                      "block w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                                    )}
                                    onClick={handleSignOut}
                                  >
                                    {item.name}
                                  </button>
                                ) : (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 dark:bg-gray-700"
                                        : "",
                                      "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )
                              }
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 dark:bg-transparent">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : !isSigningOut ? (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Spinner
                          color="text-sky-600"
                          darkColor="text-sky-500"
                          size={6}
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "border-sky-500 bg-sky-50 text-sky-700 dark:bg-gray-700 dark:text-white"
                          : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700",
                        "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4 dark:border-gray-700">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-600">
                        <svg
                          className="h-full w-full text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800 dark:text-gray-300">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-gray-800 dark:hover:text-gray-300"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="ml-3">
                      <ToggleColorModeButton
                        outlined
                        colorLight="gray-400"
                        colorHoverLight="gray-500"
                        colorDark="gray-400"
                        colorHoverDark="gray-300"
                      />
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) =>
                      item.name === "Вихід" ? (
                        <Disclosure.Button
                          key={item.name}
                          as="button"
                          onClick={handleSignOut}
                          className="block w-full px-4 py-2 text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-400"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ) : (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block w-full px-4 py-2 text-left text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-400"
                        >
                          {item.name}
                        </Disclosure.Button>
                      )
                    )}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                {pageTitle ?? ua.common.title}
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </AuthGuard>
  );
};
