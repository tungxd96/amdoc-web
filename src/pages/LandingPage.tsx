import { useState, useRef } from "react";
import { AMS_SUBSCRIBE_NEWSLETTER_ENDPOINT } from "../config/AMSEndpointConfig";
import axios from "axios";

export const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const popupRef = useRef<HTMLDivElement>(null);

  const handleJoinWaitlist = () => {
    setShowPopup(true);
  };

  const handleClosePopup = (e: any) => {
    if (popupRef.current && popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios
      .post(AMS_SUBSCRIBE_NEWSLETTER_ENDPOINT, {
        email: email,
      })
      .catch(() => {});
    setShowPopup(false);
  };

  return (
    <div
      className="max-w-screen-2xl ml-auto mr-auto"
      onClick={handleClosePopup}
    >
      <div className="flex flex-col items-center gap-12 py-12">
        <p className="text-center max-w-screen-md ml-auto mr-auto">
          <h1 className="font-bold text-[48px]">
            AI-Powered No Code Documentation
          </h1>
          <h2 className="mt-4 text-[32px]">
            Create your developer documentation with no code in just minutes.
            You write your docs in Markdown, we render and host your
            documentation.
          </h2>
        </p>
        <button
          onClick={handleJoinWaitlist}
          className="px-24 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-500/90 transition-all duration-300"
        >
          Join Waitlist
        </button>
        <img
          alt="landing-img"
          className="rounded-2xl max-w-screen-lg"
          src="https://utfs.io/f/ab8c8487-8281-4286-bbce-ec8d78310cc1-ml3hzq.png"
        />
      </div>

      <div className="flex flex-col items-center gap-12 py-12">
        <p className="max-w-screen-lg ml-auto mr-auto flex flex-col gap-12">
          <h1 className="font-bold text-[48px] text-center">How It Works</h1>
          <ol className="text-[32px] list-decimal">
            <li>Choose a documentation template</li>
            <li>Add sections to your documentation sidebar using our UI</li>
            <li>
              Write your documentation in markdown per section, or describe it,
              and an AI will generate the document
            </li>
          </ol>
        </p>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div
            ref={popupRef}
            className="bg-gray-800 bg-opacity-50 w-full h-full absolute"
            onClick={handleClosePopup}
          ></div>
          <div className="bg-white p-8 rounded-lg shadow-lg relative z-10">
            <h2 className="text-2xl font-bold mb-4">Join Our Waitlist</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-500/90 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
