const { HomeHeader } = require("./HomeHeader");

const About = () => {
  return (
    <div className="aboutus h-screen w-full flex flex-col items-center justify-center">
      <HomeHeader />
      <h1 className="self-center text-white fonmd. text-center">About Us page</h1>
    </div>
  );
};
export { About };
