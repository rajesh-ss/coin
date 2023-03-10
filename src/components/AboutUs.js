import classes from "./AboutUs.module.css";

const AboutUs = () => {
  const custom = classes.cont + " mt-5 mb-0 mt-md-0";
  return (
    <>
      <div className={custom} id="about">
        <h2 className="container-md text-center">Introducing</h2>
        <h1 className="container-md text-center ">IE.Money</h1>
        <p className="container-sm text-center ">
          Providing grants to nonprofits and rewards for ecosystem services,
          {"\n"}
          impact investments and regenerative products.
        </p>
        <button
          type="button"
          class="btn mt-md-5 btn-sm container-md text-center"
        >
          Join The Waitlist
        </button>
      </div>
    </>
  );
};

export default AboutUs;
