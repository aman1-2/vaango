import React from 'react';
import Truck from '../Assets/truck.png';
import Dosa from '../Assets/dosa.jpeg';

const About = React.forwardRef((props, ref) => (
  <section ref={ref} className="container mx-auto pl-6 pr-8 ">
    <div className=' flex flex-col mt-6 space-y-0'>
      <div className=' relative flex'>
        <div>
          <p className="mt-12 font-semibold text-lg">
            Vaango is a one-stop destination for all South Indian food lovers serving pure vegetarian meals in a modern and contemporary ambiance.
          </p>
          <p className="mt-4">
            Vaango essentially means “come in” in Tamil, a quintessential way to welcome guests. Said with a gentle forward bob of the head, a smile, and a Namaskaar, it signifies the opening to a warm and hospitable experience at a South Indian household.
          </p>
        </div>

        <div>
          <img src={Truck} alt="Vaango Food Truck" className="z-20 w-100 h-auto max-w-md" />
        </div>
      </div>

      <div className=' relative flex'>
        <div>
          <img src={Dosa} alt="Dosa" className="z-20 w-100 h-auto max-w-md"  />
        </div>

        <div>
          <p className="mt-4 text-lg">
            The first outlet of Vaango opened in NOIDA in 2011 and is focused on the authentic taste and quality South Indian vegetarian food offerings. It has opened over 70 stores in India.
          </p>
        </div>
      </div>
    </div>
    
  </section>
));

export default About;
