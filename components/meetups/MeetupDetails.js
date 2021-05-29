import classes from "./MeetupDetails.module.scss";

const MeetupDetails = ({ image, title, address, content }) => {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{content}</p>
    </section>
  );
};

export default MeetupDetails;
