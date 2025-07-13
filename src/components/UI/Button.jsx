const Button = ({ style, text = 'button', type = 'button', onClick }) => {
  return (
    <button style={{ ...style }} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
