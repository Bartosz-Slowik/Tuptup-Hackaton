interface Props {
  text: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({ text, disabled, loading }: Props) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${disabled ? "cursor-not-allowed" : ""} border`}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;
