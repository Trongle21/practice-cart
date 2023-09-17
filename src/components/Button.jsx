
import PropTypes from "prop-types";

const Button = ({ context, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {context}
    </button>
  );
};

Button.propTypes = {
  context: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
