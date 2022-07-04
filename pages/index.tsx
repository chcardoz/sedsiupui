import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="justify-between space-y-5 md:flex md:space-y-0">
        <div>
          <h1 className="font-bold text-3xl lg:text-5xl">
            Home of Indiana's Space Nerds
          </h1>
          <p>
            Hailing from all the corners of Indiana and the world, student
            members of SEDS at IUPUI bring the wonders of space exploration back
            to Earth.
          </p>
          <p className="underline">Learn more about us</p>
        </div>
        <img
          className="w-full md:w-1/2 md:pl-5"
          src="/whitehouse.jpeg"
          alt="Ebin Daniel shakes hands with Vice President Mike Pence after showing SEDS project"
        />
      </div>
    </Layout>
  );
};

export default Home;
