import React from "react";
import service from '../../../assets/home/chef-service.jpg'

const AboutBistro = () => {
  return (
    <div className="my-20">
      <div
        className="hero min-h-screen"
        style={{backgroundImage: `url(${service})`}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-black max-w-4xl">
          <div className=" bg-white py-20 px-40">
            <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
            <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBistro;
