import React from 'react';

const Menu = React.forwardRef((props, ref) => (
  <section ref={ref} className="container mx-auto p-6 my-12">
    <h2 className="text-3xl font-bold text-green-700 mb-4">Our Menu</h2>
    
  </section>
));

export default Menu;
