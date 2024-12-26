"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

const BlogPost = () => {
  const params = useParams();
  const { id } = params;

  const blogs = [
    {
      id: "1",
      title: "Understanding Next.js Dynamic Routing",
      image: "/blog1.jpg",
      description: "Dynamic routing in Next.js enables the creation of dynamic web pages that change based on the URL parameters, which is particularly useful for applications with content that varies. For example, in a blog application, each blog post can have its unique URL like /blog/1, /blog/2, etc., and the content for each post can be fetched dynamically based on the id in the URL. In Next.js, dynamic routing is implemented using file-based routing. By using square brackets [] in the file names within the pages folder, developers can create dynamic routes. For instance, a file named [id].js inside the /pages/blog/ directory will match any URL like /blog/1 or /blog/2, where id is a dynamic parameter. Dynamic routing simplifies the development process by automatically handling routes for you, making it easy to build SEO-friendly, content-driven pages without much boilerplate code. It also ensures scalability by allowing you to generate multiple pages from a single template, reducing repetition in your code. Key Benefits: Scalability: Easily handle dynamic content without writing separate components for each route. SEO-Friendly: Each dynamic page can be pre-rendered with static HTML for better search engine indexing. Efficiency: Streamline the process of creating dynamic pages with a simple, intuitive file structure. With Next.js, dynamic routing allows developers to focus more on building features and less on managing routes, making it an excellent choice for modern web applications.",
      author: "Daxesh Patel",
      authorTitle: "Software Development Executive - I",
      lastUpdated: "Apr 23, 2024",
    },
    {
      id: "2",
      title: "A Beginner's Guide to Tailwind CSS",
      image: "/blog2.jpg",
      description: "Tailwind CSS is a utility-first CSS framework that revolutionizes how developers build modern web interfaces. Unlike traditional CSS frameworks, which provide predefined components, Tailwind allows you to create fully customized designs by applying utility classes directly to HTML elements. In this beginner’s guide, we’ll cover the essentials of Tailwind CSS, from setting up your project to understanding its core concepts, including utility classes, responsive design, and customization. One of the key features of Tailwind is its focus on atomic classes, which allows for a more streamlined and efficient workflow compared to traditional CSS. With Tailwind, you can design responsive layouts, manage colors and typography, and control spacing all through utility classes, without needing to write custom CSS for every element. Benefits of Tailwind CSS: Rapid Prototyping: Quickly build layouts and interfaces without writing custom CSS. Customizability: Tailwind is highly configurable, enabling developers to adjust default values and create their own design systems. Responsiveness: Tailwind’s responsive utilities make it easy to create mobile-first designs. Tailwind CSS empowers developers to focus on building user interfaces without being bogged down by repetitive CSS code, making it an excellent choice for both beginners and experienced developers alike.",
      author: "Sandy Roy",
      authorTitle: "Frontend Developer",
      lastUpdated: "May 10, 2024",
    },
    {
      id: "3",
      title: "10 Tips to Improve Your TypeScript Skills",
      image: "/blog3.jpg",
      description: "TypeScript is a powerful superset of JavaScript that adds static typing to the language, making it easier to work with large codebases and avoid common runtime errors. In this blog, we’ll explore 10 actionable tips to enhance your TypeScript skills, ranging from mastering type inference to utilizing advanced features like generics and type guards. By incorporating these tips into your workflow, you’ll not only improve the quality and readability of your code but also enhance your productivity. Whether you're new to TypeScript or already experienced, there’s always room to improve your understanding of the language. Key Tips: Type Inference: Let TypeScript automatically infer types to reduce the need for explicit type annotations. Use Interfaces: Define object shapes clearly using interfaces to improve code maintainability and readability. Leverage Generics: Create reusable components and functions with generics to avoid code duplication. Type Guards: Enhance the safety of your code by using type guards to narrow down types at runtime. With TypeScript, you can catch type-related errors at compile time, making it an invaluable tool for building robust applications. This blog will guide you through the essential techniques to take your TypeScript skills to the next level and write cleaner, more maintainable code.",
      author: "Alex Sharma",
      authorTitle: "Senior Web Developer",
      lastUpdated: "Apr 15, 2024",
    },
    {
      id: "4",
      title: "Exploring the Power of React Hooks",
      image: "/blog4.jpg",
      description: "React Hooks introduced a more intuitive way to manage state, side effects, and component lifecycles in React. Before hooks, managing state and lifecycle events required class components, but with the introduction of hooks like `useState` and `useEffect`, functional components can now handle these tasks with ease. In this blog, we’ll explore the core concepts of React Hooks, including how to use the built-in hooks effectively, and dive into advanced hooks like custom hooks, `useReducer`, and `useContext`. By the end of this blog, you’ll have a solid understanding of hooks and how they simplify React development. Key Concepts: `useState`: Manage local state in functional components. `useEffect`: Handle side effects such as data fetching, subscriptions, or manually changing the DOM. `useReducer`: Manage more complex state logic in large applications. Custom Hooks: Reusable functions to encapsulate component logic. React Hooks make components more modular, reusable, and easier to test, reducing the complexity of large applications. Whether you're building small interactive UIs or complex enterprise-level applications, mastering React Hooks will significantly enhance your development process.",
      author: "Ravi Khandelwal",
      authorTitle: "React Developer",
      lastUpdated: "Mar 30, 2024",
    },
    {
      id: "5",
      title: "How to Build Responsive Websites",
      image: "/blog5.jpg",
      description: "Building responsive websites is a critical skill in today’s world where users access the web on a variety of devices, from desktops to tablets and smartphones. Responsive design ensures that your website looks and functions optimally on any screen size, improving user experience and accessibility. In this blog, we’ll explore the principles of responsive web design, key techniques like CSS media queries, flexible layouts, and mobile-first design. We’ll also look at how to use tools like Flexbox and CSS Grid to create layouts that adapt to different screen sizes. Key Concepts: Mobile-First Design: Start designing for mobile screens and progressively enhance for larger devices. Media Queries: Use media queries to apply different styles based on the viewport width, ensuring your website adapts to various screen sizes. Fluid Layouts: Utilize percentages and relative units (e.g., `vw`, `vh`, `em`) for width, height, and spacing to create flexible layouts. CSS Grid & Flexbox: Master modern CSS layout techniques for creating complex, responsive designs. A responsive website ensures that content is accessible to users across all devices, making it an essential aspect of modern web development. By implementing the techniques discussed in this blog, you’ll be able to build websites that look great and function well on any device, from mobile phones to desktops.",
      author: "Simran Malhotra",
      authorTitle: "UI/UX Designer",
      lastUpdated: "Feb 18, 2024",
    },
    {
      id: "6",
      title: "Mastering JavaScript ES6 Features",
      image: "/blog6.jpg",
      description: "ECMAScript 6 (ES6) introduced many powerful features that significantly improved JavaScript’s capabilities, making it more efficient and easier to work with. In this blog, we’ll explore the key ES6 features that every JavaScript developer should know. From arrow functions and template literals to destructuring, spread operators, and classes, ES6 revolutionized the way we write JavaScript code. This guide covers the most important ES6 features with examples to help you understand how they work and how to integrate them into your projects. Key Concepts: Arrow Functions: Write more concise functions with a shorter syntax and improved handling of the `this` keyword. Template Literals: Use backticks to create multi-line strings and embed expressions directly into strings for cleaner code. Destructuring: Extract values from arrays and objects easily for better readability and less code. Spread & Rest Operators: Use the spread operator to expand elements and the rest operator to collect arguments. Classes: Create object-oriented classes in JavaScript for cleaner and more maintainable code. ES6 also introduced modules, promises, and other features that simplify asynchronous programming and improve code organization. Mastering these ES6 features will not only make your code more readable and concise but also enhance your overall JavaScript development skills.",
      author: "Arjun Singh",
      authorTitle: "Frontend Engineer",
      lastUpdated: "Apr 1, 2024",
    },
    {
      id: "7",
      title: "Creating Stunning Animations with GSAP",
      image: "/blog7.jpg",
      description: "GSAP (GreenSock Animation Platform) is one of the most powerful and flexible JavaScript libraries for creating high-performance animations on the web. Whether you’re animating elements on a page, building interactive animations, or creating complex motion graphics, GSAP allows you to do it all with ease. In this blog, we will dive deep into how to use GSAP to create stunning animations, exploring its core features, best practices, and real-world examples. Key Concepts: Tweening: Learn how to animate properties like position, scale, rotation, opacity, and more with GSAP's `TweenLite` and `TweenMax`. Timelines: Use GSAP's timeline feature to sequence animations with precision and control, creating smooth transitions between multiple animations. Easing: Understand how easing functions work to create more natural and dynamic animations by controlling the pace of an animation. Staggering: Use GSAP’s stagger feature to animate multiple elements with a delay between each animation, perfect for creating impressive entrance effects. Plugins: Explore GSAP’s plugins like ScrollTrigger, DrawSVG, and MorphSVG for advanced animation effects that interact with user scroll or SVG elements. GSAP is known for its high performance and cross-browser compatibility, making it a go-to library for developers and designers looking to create engaging, interactive animations that run smoothly across all devices. By the end of this blog, you’ll be equipped with the knowledge to add dynamic animations to your websites and take your front-end skills to the next level.",
      author: "Priya Mehta",
      authorTitle: "Motion Designer",
      lastUpdated: "Mar 5, 2024",
    },
    {
      id: "8",
      title: "Optimizing Web Performance for SEO",
      image: "/blog8.jpg",
      description: "Web performance is a crucial factor in both user experience and search engine optimization (SEO). A fast-loading website leads to better engagement, higher conversion rates, and improved search engine rankings. In this blog, we’ll explore how optimizing web performance can boost your SEO and provide practical techniques to enhance your website’s speed. Key Concepts: Page Load Time: Understand the impact of page load time on SEO rankings and user retention. Learn how to reduce the time it takes for your web pages to load by optimizing images, minimizing HTTP requests, and utilizing efficient caching strategies. Image Optimization: Discover how to compress images without losing quality, and learn about next-gen formats like WebP that offer smaller file sizes for faster loading times. Lazy Loading: Implement lazy loading to defer the loading of non-essential resources until they are needed, improving the initial load time of your website. Code Splitting: Use code splitting techniques to load only the JavaScript required for each page, reducing the amount of code that needs to be loaded initially. Server-Side Performance: Explore server-side optimizations such as server response time, using a content delivery network (CDN), and ensuring that your website is hosted on a fast, reliable server. Mobile Optimization: With mobile-first indexing becoming the norm, it’s essential to optimize your website’s performance for mobile devices by implementing responsive design and reducing mobile load times. In this guide, we will walk you through the best practices and tools you can use to measure and optimize web performance, resulting in a faster, SEO-friendly website that ranks higher in search results and provides a seamless user experience.",
      author: "Kunal Kapoor",
      authorTitle: "Web Optimization Expert",
      lastUpdated: "Jan 22, 2024",
    },
    {
      id: "9",
      title: "Introduction to Three.js for 3D Web Development",
      image: "/blog9.jpg",
      description: "Three.js is a powerful and widely used JavaScript library that enables developers to create immersive 3D experiences directly in the browser. With Three.js, you can build 3D scenes, objects, and animations that run smoothly across various devices. In this blog, we will introduce you to the basics of Three.js, walking you through the steps to set up your first 3D scene and how to manipulate objects, cameras, and lights. Key Concepts: Setting Up a Scene: Learn how to set up a basic 3D scene in Three.js, including creating a renderer, camera, and scene objects. You'll discover how to view and interact with 3D elements on a web page. Geometry and Materials: Explore how to create 3D shapes (geometries) such as cubes, spheres, and cylinders, and apply materials to give them color and texture. Learn about the different material types available in Three.js and how they affect the appearance of your objects. Lighting: Understand the role of lighting in 3D scenes and how to use various light sources like ambient, directional, and point lights to illuminate your objects and create realistic effects. Animations: Discover how to animate objects in Three.js, from basic rotation and movement to more complex animations such as morphing or transitioning between scenes. Interactivity: Learn how to make your 3D scenes interactive, allowing users to click, drag, and manipulate objects in the environment. Advanced Features: Dive into advanced topics such as shadows, post-processing effects, physics simulations, and integrating WebGL shaders for custom rendering effects. Three.js opens up the possibility of creating highly engaging, interactive, and visually stunning 3D experiences on the web. By the end of this blog, you’ll be equipped to start building your own 3D websites and applications, whether you're developing virtual galleries, games, or immersive product showcases.",
      author: "Lina Patel",
      authorTitle: "3D Web Developer",
      lastUpdated: "Feb 7, 2024",
    },
  ];

  const blog = blogs.find((b) => b.id === id);

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-4xl font-bold text-red-600">404 - Blog Not Found</h1>
        <p className="mt-4 text-lg text-gray-600">
          The blog post you're looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full max-w-2xl rounded-lg shadow-md mb-6"
      />

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">{blog.title}</h1>

      {/* Blog Metadata */}
      <div className="flex justify-between w-full max-w-2xl text-gray-600 text-sm mb-6">
        <div>
          <p className="font-medium">Author: {blog.author}</p>
          <p>{blog.authorTitle}</p>
        </div>
        <p>Last updated on {blog.lastUpdated}</p>
      </div>

      {/* Blog Description */}
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl text-justify mb-10">
        {blog.description}
      </p>

{/* Comment Section */}
<div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>

  {/* Existing Comments */}
  <div className="space-y-4 max-h-80 overflow-y-auto">
    {comments.length > 0 ? (
      comments.map((comment, index) => (
        <div
          key={index}
          className="p-3 rounded-md"
        >
          {comment}
        </div>
      ))
    ) : (
      <p className="text-gray-500">No comments yet. Be the first to comment!</p>
    )}
  </div>

  {/* Add Comment */}
  <div className="mt-6">
    <textarea
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      rows={3}
      placeholder="Write a comment..."
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
    ></textarea>
    <button
      onClick={handleAddComment}
      className="mt-3 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
    >
      Add Comment
    </button>
  </div>
</div>
</div>
  );
};

export default BlogPost;
