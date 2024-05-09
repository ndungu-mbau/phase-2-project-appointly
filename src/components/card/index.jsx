import PropTypes from "prop-types";

export const Card = ({ title, description, icon, href, linkText }) => {
  return (
    <>
    <div className = "flex">
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {icon}
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <a
        href={href}
        className="inline-flex font-medium items-center text-blue-600 hover:underline"
      >
        {linkText}
      </a>
    </div>
    </div>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  href: PropTypes.string,
  linkText: PropTypes.string,
};
