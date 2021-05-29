import Card from "../ui/Card";
import classes from "./MeetupItem.module.scss";
import { useRouter } from "next/router";

function MeetupItem({ id, title, image, address }) {
  const router = useRouter();
  const showDetailHandler = () => {
    router.push(`/${id}`);
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
