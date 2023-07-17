"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsButtonDisabled(true);

        // Perform form submission logic here
        // You can reset the form and handle success/failure states as needed
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 2000);
    };

    return (
        <div className="p-8 flex flex-col md:flex-row justify-between">
            <div className="flex items-center w-full md:w-1/2">
                <Image src="/contact.png" width={700} height={500} alt="Banner" />
            </div>
            <div className="w-full md:w-1/2 p-8">
                <h2 className="text-4xl font-bold mb-6 text-[#45ffdc]">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full p-2 py-3 text-white bg-transparent border border-gray-500 rounded-1xl focus:outline-none focus:border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full p-2 py-3 text-white bg-transparent border border-gray-500 rounded-1xl focus:outline-none focus:border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
                            Subject
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            required
                            className="w-full p-2 py-3 text-black bg-transparent border border-gray-500 rounded-2xl focus:outline-none focus:border-gray-300"
                        >
                            <option value="">Select Subject</option>
                            <option value="support">Support</option>
                            <option value="inquiry">Inquiry</option>
                            <option value="feedback">Feedback</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full p-2 py-16 text-white bg-transparent border border-gray-500 rounded-2xl focus:outline-none focus:border-gray-300"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-8 py-4 text-white border-2 border-amber-50 font-semibold rounded-4xl hover:bg-[#5142fc]"
                            disabled={isButtonDisabled}
                        >
                            {isButtonDisabled ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
