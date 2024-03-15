/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
// import bannerImage from "assets/images/banner.png";
// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import Lottie from "react-lottie";
import bug from "../../assets/animation/bug.json";

function Banner() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: bug,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section>
      <div className="mx-4 my-4 flex flex-col items-center justify-between py-10 md:max-w-3xl  lg:mx-auto lg:max-w-6xl lg:flex-row">
        {/* left side */}
        <div className="order-2 mx-auto w-[90%] space-y-8 text-center lg:order-1 lg:w-[40%] lg:text-left">
          <h1 className="text-4xl font-bold leading-[50px] text-gray-800">
            One app to <br /> replace them all.
          </h1>
          <p className="text-sm text-gray-800">
            All of your work in one place: Tasks, Docs, Chat, Goals, & more.
          </p>

          {/* subscribe */}
          <div className="space-y-6">
            <input
              className="w-[80%] rounded-lg border-gray-300 px-4 py-4 text-sm font-medium shadow-lg placeholder:text-gray-400"
              placeholder="Enter your email address"
              type="email"
            />
            <div className="flex-warp mx-auto flex items-center justify-center space-x-4 lg:justify-start">
              <Link href="/register" className="primary-btn">
                Get Started
              </Link>
              <p className="text-sm font-semibold uppercase text-gray-300">
                Free forever <br /> no credit card
              </p>
            </div>
          </div>

          {/* ratings and companies */}
          <div className="flex flex-col items-center space-y-4 lg:items-start">
            {/* ratings */}
            <div className="flex space-x-4">
              <div className="flex space-x-1">
                {new Array(5)
                  .fill(
                    "https://clickup.com/landing/images/icons/rating-star.svg"
                  )
                  .map((rating, i) => (
                    <div className="w-4" key={i}>
                      <Image src={rating} alt="" width={1} height={1} />
                    </div>
                  ))}
              </div>
              <p className="text-sm text-gray-500">
                Based on 10,000+ reviews on
              </p>
            </div>
            {/* companies */}
          </div>
        </div>

        {/* right side  */}
        <div className="order-1 w-full lg:order-2 lg:w-[60%]">
          <div className="bg-none bg-cover bg-center bg-no-repeat ">
            {/* shadow-[0_0_10px_#5584AC] */}
            {/* <Image src={bannerImage} /> */}

            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
