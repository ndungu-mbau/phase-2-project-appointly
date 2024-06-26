import { IconDashboard } from "@tabler/icons-react";

const LINKS = [
  {
    name: "Home",
    path: "/",
    icon: (
      <IconDashboard className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
  },
];

export const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white p-4 mb-6">
          Appointly
        </h1>
        <hr className="mb-6" />
        <ul className="space-y-2 font-medium">
          {LINKS.map((link) => {
            return (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {link.icon}
                  <span className="ms-3">{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
