import React from "react";
import Span from "../../atoms/span";
const Profile = () => {
  const user = {
    name: "Naveen",
    age: 23,
    img: null,
    city: "Jaipur",
    verifiedSelfie: true,
    verifiedPhone: true,
    verifiedFb: true,
    about: "Lorem ipsum2elnkf e necv le",
    interests: ["Animal", "pet", "Science"],
    vaccinated: true,
  };
  return (
    <>
      <div className="p-5">
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1613323593608-abc90fec84ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt={user.name || "Profile Pic"}
            className="h-auto p-5 w-25"
          />
        </div>
        <div className="flex items-center justify-center">
          <h4 className="bg-white text-black l-4">
            {user.name || "User Name"},
          </h4>
          <Span value={user.age || "User Age"} tag="age" />
          <Span value={user.city || "User City"} tag="city" />
          <Span value={user.verifiedSelfie} tag="verifiedSelfie" />
          <Span value={user.verifiedPhone} tag="verifiedPhone" />
          <Span value={user.verifiedFb} tag="verifiedFb" />
        </div>
        <div className="flex flex-col ">
          <Span className="text-xl font-bold" value="About me" />
          <Span className="top-1" value={user.about} />
        </div>
        <div className="flex flex-col ">
          <Span className="text-xl font-bold" value="Interests" />
          <div className="flex flex-col">
            {user.interests &&
              user.interests.map((interest) => {
                // console.log(interest);
                return (
                  <Span key={interest} className="top-1" value={interest} />
                );
              })}
          </div>
        </div>
        <div className="flex flex-col">
          <Span className="text-xl font-bold" value="Covid-19 Vaccination" />
          <Span value={user.vaccinated} tag="vaccinated" />
        </div>
      </div>
    </>
  );
};

export default Profile;
