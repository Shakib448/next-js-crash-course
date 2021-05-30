import MeetupDetails from "../../components/meetups/MeetupDetails";

const DetailMeetup = () => {
  return (
    <>
      <MeetupDetails
        image="data:image/jpeg;base64,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"
        title="First meetup"
        address="Mirpur -1"
        content="The First Meetup"
      />
    </>
  );
};

export default DetailMeetup;

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "data:image/jpeg;base64,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",
        title: "First meetup",
        address: "Mirpur -1",
        content: "The First Meetup",
      },
    },
  };
};
