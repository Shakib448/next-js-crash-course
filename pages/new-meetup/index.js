import axios from "axios";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetUp = () => {
  const router = useRouter();
  const addMeetupHandler = async (enterMeetupData) => {
    try {
      const { data } = await axios.post("/api/new-meetup", enterMeetupData);
      router.push("/");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUp;
