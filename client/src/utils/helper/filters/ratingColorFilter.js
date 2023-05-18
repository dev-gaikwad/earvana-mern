const ratingColorFilter = (rating) => {
  if (rating >= 3.5) {
    return 'high-rating';
  } else if (rating >= 2) {
    return 'medium-rating';
  } else return 'low-rating';
};

export default ratingColorFilter;
