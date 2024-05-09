import PropTypes from "prop-types";
import classnames from "clsx";

export const Button = ({ children, className, variant }) => {
  const classes = classnames(
    "text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none",
    {
      "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700":
        variant === "default",
      " text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg  hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700":
        variant === "alternative",
      "focus:outline-none text-white bg-green-500 font-medium hover:bg-green-600":
        variant === "success",
    },
    className
  );
  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "alternative", "success"]),
};
