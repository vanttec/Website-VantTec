 import React from 'react'; // Import React for component creation
 import Forms from '../shared/Forms';

  
 const ContactUs = () => {
     return (
         // Container with responsive padding and centered content
         <> 
         <section id="contactus"> 
         <div className="container mx-auto px-4 py-8">
             <h2 className="text-2xl text-white font-thin mb-6 text-center">
                 Contact Us
             </h2>
             <Forms/>
             
             
 
         
         </div>
         </section>
         </>
     );
 };
 
 export default ContactUs; // Export the Research component
 