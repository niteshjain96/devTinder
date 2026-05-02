const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 px-6 fixed bottom-0 w-full">
      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} DevTinder. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer