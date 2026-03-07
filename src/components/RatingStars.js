function RatingStars({ rating }) {
  const roundedRating = Math.round(rating);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          className={
            index < roundedRating ? "text-amber-400" : "text-slate-300"
          }
          key={index}
        >
          ★
        </span>
      ))}
      <span className="ml-1 text-xs font-medium text-slate-500">{rating}</span>
    </div>
  );
}

export default RatingStars;
