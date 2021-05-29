import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const addMeetupHandler = (enterMeetupData) => {
    console.log(enterMeetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetUp;
