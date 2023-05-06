const notFound = (req, res, next) => {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
};

export default notFound;
