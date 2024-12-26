export default function About() {
    return (
      <section className="w-full bg-white py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="mt-14 mb-14 text-[15vw] font-bold text-black border-b-4 border-t-4 border-black py-4">
            About Me
          </h1>          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who am I?</h3>
              <p className="text-lg text-gray-600 mb-4">
                Hello! I'm Ahmed Memon, a passionate web developer based in Karachi, Pakistan. Currently, I am pursuing my O-levels and enhancing my IT skills through the Governor IT initiative. I have a strong interest in building modern, responsive websites using Next.js, Tailwind CSS, and TypeScript.
              </p>
              <p className="text-lg text-gray-600">
                My goal is to create meaningful digital experiences that not only look great but also deliver exceptional performance and usability.
              </p>
            </div>
  
            <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills & Learning</h3>
              <ul className="list-disc pl-5 text-lg text-gray-600">
                <li>Web Development with Next.js, Tailwind CSS, and TypeScript</li>
                <li>Responsive Design & Performance Optimization</li>
                <li>Continuous Learning through the Governor IT Initiative</li>
                <li>Exploring new frameworks and libraries for better solutions</li>
              </ul>
            </div>
          </div>
  
          <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Passion</h3>
            <p className="text-lg text-gray-600 mb-4">
              Web development isn't just my profession; it's my passion. I enjoy experimenting with new technologies and creating intuitive user interfaces. In my free time, I read about the latest trends in tech, play around with personal projects, and stay up-to-date with industry news.
            </p>
            <p className="text-lg text-gray-600">
              I'm always open to new opportunities to collaborate, learn, and grow. Feel free to reach out if you want to discuss web development, share ideas, or simply connect!
            </p>
          </div>
        </div>
      </section>
    );
  }
  