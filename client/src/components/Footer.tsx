const Footer = () => {
  return (
    <footer className="py-8 border-t border-cyber-green border-opacity-30 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="font-vt323 text-lg text-gray-400">
              <span className="text-cyber-green">&lt;</span>
              Designed and coded by Arnav Barway
              <span className="text-cyber-green">/&gt;</span>
            </p>
          </div>
          
          <div>
            <p className="font-vt323 text-lg text-gray-400">
              <span className="text-cyber-purple">System Status:</span> Online
              <span className="inline-block w-2 h-2 bg-cyber-green rounded-full ml-2 animate-pulse"></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
