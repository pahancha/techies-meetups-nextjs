const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>
          Developed by <a href="https://github.com/pahancha" className="text-blue-500 hover:underline" target="_blank">pahancha</a> ❤️ {currentYear}
        </p>
      </footer>
    );
  };
  
  export default Footer;