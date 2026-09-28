function ImageCard({ image, title, description }) {
  function handleDetails() {
    alert(
      "Title: " +
        title +
        "\n\nDescription: " +
        description
    );
  }

  return (
    <div className="image-card">
      <img src={image} alt={title} />

      <div className="card-content">
        <h2>{title}</h2>

        <p>{description}</p>

        <button
          className="details-button"
          onClick={handleDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ImageCard;