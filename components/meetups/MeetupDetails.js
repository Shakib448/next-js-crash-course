const MeetupDetails = ({ image, title, address, content }) => {
  return (
    <>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{content}</p>
    </>
  );
};

export default MeetupDetails;
