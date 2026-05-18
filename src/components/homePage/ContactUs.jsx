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
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        <div className="md:w-1/2 w-full flex items-center justify-center">
                            <Forms />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs; // Export the Research component
