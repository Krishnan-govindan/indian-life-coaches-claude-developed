function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ${
        hover ? 'hover:shadow-2xl hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
