export default function Footer(){
    return(
<footer className="w-full bg-white py-6 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-700 text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="text-gray-500 hover:text-blue-500 text-sm">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-500 hover:text-blue-500 text-sm">
          Terms of Service
        </a>
        <a href="#" className="text-gray-500 hover:text-blue-500 text-sm">
          Contact
        </a>
      </div>
    </div>
  </div>
</footer>

    )
}