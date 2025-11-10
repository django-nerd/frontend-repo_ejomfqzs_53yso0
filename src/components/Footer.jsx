function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Flames.Blue. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <span className="text-gray-300">•</span>
            <a href="mailto:hello@example.com" className="hover:text-gray-900">Email us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
