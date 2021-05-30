import axios from "axios";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const addMeetupHandler = async (enterMeetupData) => {
    try {
      await axios.post("/api/new-meetup", enterMeetupData);
    } catch (error) {
      console.log(error);
    }
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUp;
