import { Link } from 'react-router-dom';

const Button = ({ href, type, children, className, onClick = () => {} }) => {
  const btnStyles = {
    primary:
      'text-center rounded-xl text-white px-6 py-3 font-semibold transition ease-in-out',
  };

  if (!!href) {
    return (
      <Link to={href} className={`${className} ${btnStyles.primary}`}>
        {children}
      </Link>
    );
  } else {
    if (type === 'submit') {
      return (
        <button type="submit" className={`${className}`}>
          {children}
        </button>
      );
    } else {
      return (
        <button
          onClick={onClick}
          className={`${className} ${btnStyles.primary}`}
        >
          {children}
        </button>
      );
    }
  }
};

export default Button;
