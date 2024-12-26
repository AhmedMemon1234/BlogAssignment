export default function Contact() {
    return (
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Contact Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
              <p className="text-lg text-gray-600 mb-6">
                I’d love to hear from you! Whether you have a question, feedback, or collaboration opportunity, feel free to reach out. I'll get back to you as soon as possible.
              </p>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                >
                  Send Message
                </button>
              </form>
            </div>
  
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Info</h3>
              <p className="text-lg text-gray-600 mb-4">
                Feel free to contact me through any of the following methods:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-xl text-blue-500">📍</span>
                  <p className="text-lg text-gray-600">Karachi, Pakistan</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl text-blue-500">✉️</span>
                  <p className="text-lg text-gray-600">ahm@example.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl text-blue-500">📞</span>
                  <p className="text-lg text-gray-600">+92 300 1234567</p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex justify-center space-x-6">
                  <a href="https://www.linkedin.com/in/ahmedmemon" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    LinkedIn
                  </a>
                  <a href="https://github.com/ahmedmemon" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    GitHub
                  </a>
                  <a href="https://twitter.com/ahmedmemon" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  