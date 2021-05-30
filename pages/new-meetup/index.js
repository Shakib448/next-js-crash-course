import axios from "axios";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const addMeetupHandler = async (enterMeetupData) => {
    try {
      const { data } = await axios.post("/api/new-meetup", enterMeetupData);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUp;
