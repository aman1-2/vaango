import React from 'react';

const Section = ({ innerRef, title, description }) => {
  return (
    <section ref={innerRef} className="container mx-auto p-6 my-12">
      <h2 className="text-3xl font-bold text-green-700 mb-4">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </section>
  );
};

export default Section;
