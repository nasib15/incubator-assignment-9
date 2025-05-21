import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">
          Contact Us
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="dummy@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              rows="4"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center text-gray-500">
          <p>Or reach us at:</p>
          <p className="font-medium text-gray-700">contact@daisyui.com</p>
          <p className="font-medium text-gray-700">+1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
