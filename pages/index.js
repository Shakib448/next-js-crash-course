import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the next js crash course</h1>
      <Link href="news">News</Link>
    </div>
  );
};

export default HomePage;
