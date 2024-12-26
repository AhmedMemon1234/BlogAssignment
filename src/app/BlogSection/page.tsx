import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; 

const BlogSection = () => {
  const blogs = [
    {
      id: "1",
      title: "Understanding Next.js Dynamic Routing",
      image: "/blog1.jpg",
      description: "Learn how to use dynamic routing in Next.js for dynamic content.",
    },
    {
      id: "2",
      title: "A Beginner's Guide to Tailwind CSS",
      image: "/blog2.jpg",
      description: "Master Tailwind CSS with this beginner-friendly guide.",
    },
    {
      id: "3",
      title: "10 Tips to Improve Your TypeScript Skills",
      image: "/blog3.jpg",
      description: "Boost your TypeScript skills with these 10 practical tips.",
    },
    {
      id: "4",
      title: "Exploring the Power of React Hooks",
      image: "/blog4.jpg",
      description: "Understand React Hooks and how they revolutionize functional components.",
    },
    {
      id: "5",
      title: "How to Build Responsive Websites",
      image: "/blog5.jpg",
      description: "Learn the essential techniques for building fully responsive websites.",
    },
    {
      id: "6",
      title: "Mastering JavaScript ES6 Features",
      image: "/blog6.jpg",
      description: "Get the most out of JavaScript ES6 with these advanced techniques.",
    },
    {
      id: "7",
      title: "Creating Stunning Animations with GSAP",
      image: "/blog7.jpg",
      description: "Discover how to create high-quality animations with GSAP for web projects.",
    },
    {
      id: "8",
      title: "Optimizing Web Performance for SEO",
      image: "/blog8.jpg",
      description: "Learn how to improve web performance and SEO rankings effectively.",
    },
    {
      id: "9",
      title: "Introduction to Three.js for 3D Web Development",
      image: "/blog9.jpg",
      description: "Start building amazing 3D experiences on the web with Three.js.",
    },
  ];
  

  return (
    <div className="h-full flex flex-wrap justify-center gap-8 bg-gray-50 p-4">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-lg shadow-lg max-w-xs w-full p-4 transform transition hover:scale-105 hover:shadow-xl"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />

          <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
            <p className="text-gray-600 mt-2">{blog.description}</p>
          </div>

          <div className="mt-4 flex justify-end">
            <Link href={`/BlogSection/${blog.id}`}>
              <h1 className="text-blue-500 flex items-center gap-2 hover:underline">
                Read More <FaArrowRight />
              </h1>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Blog() {
  return (
    <div className="h-full mt-12 min-h-screen bg-gray-50 p-4">
      <div className="text-center">
        <h1 className="text-[60px] font-semibold">Popular Blogs</h1>
      </div>

      <div className="flex flex-col items-center mt-8">
        <BlogSection />
      </div>
    </div>
  );
}
