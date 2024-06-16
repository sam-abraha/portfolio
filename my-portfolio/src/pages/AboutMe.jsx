export default function AboutMe() {
    return (
      <div className="container mx-auto mt-20 p-4">
        <div className="max-w-3xl mx-auto p-8 border border-transparent rounded-lg shadow-xl mb-8 bg-gradient-to-r from-lightgrey to-darkgrey  text-white">
          <h1 className="text-3xl font-bold mb-6">About Me</h1>
          <p className="text-lg leading-relaxed">
            I am a computer science student based near Frankfurt, passionate about solving problems and constantly seeking new knowledge,
            particularly in software engineering and design. My goal is to enhance my skills and broaden my knowledge in these areas.
            When I'm not coding, I enjoy playing basketball and playing musical instruments.
          </p>
        </div>
        <div className="max-w-3xl mx-auto p-8 border border-transparent rounded-lg text-gray-700 shadow-xl mb-8 bg-white">
          <h1 className="text-3xl font-bold mb-6 text-gray-700">Skills</h1>
          <ul className="list-disc pl-5 space-y-4">
            <li className="text-lg"><span className="font-semi-bold">Programming languages:</span> Java, JavaScript, Python, SQL</li>
            <li className="text-lg"><span className="font-semi-bold">Frameworks/Libraries:</span> React, Express</li>
            <li className="text-lg"><span className="font-semi-bold">Tools:</span> Git, Docker, Excel, PowerPoint</li>
            <li className="text-lg"><span className="font-semi-bold">Databases:</span> MongoDB, PostgreSQL</li>
            <li className="text-lg"><span className="font-semi-bold">Languages:</span> English, German, Tigrinya</li>
          </ul>
        </div>
        <div className="max-w-3xl mx-auto p-8 border border-transparent rounded-lg text-gray-700 shadow-xl bg-white">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Education</h1>
          <ul className="list-disc pl-5 space-y-4">
            <li className="text-lg">Frankfurt University of Applied Science</li>
          </ul>
        </div>
      </div>
    );
  }
  