function Button(props) {
  const { title, isAnchor = true, onClick } = props;

  return isAnchor ? (
    <a
      href="#"
      className="bg-teal-500 text-white px-4 py-2 rounded-md w-full md:w-fit "
    >
      {title}
    </a>
  ) : (
    <button
      onClick={onClick}
      className="bg-teal-500 text-white px-4 py-2 rounded-md w-full md:w-fit  "
    >
      {title}
    </button>
  );
}

export default Button;
