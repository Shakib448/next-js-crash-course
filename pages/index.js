import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export default HomePage;

export const getStaticProps = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// };
