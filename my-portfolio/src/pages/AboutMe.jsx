export default function AboutMe() {
    return (
      <div className="container mx-auto mt-20 p-4 prose">
        <div className="max-w-3xl mx-auto p-6 border border-solid border-white rounded-lg text-gray-700 shadow-lg mb-4">
          <h1 className="text-2xl font-bold mb-4">About Me</h1>
          <p className="prose">
            I am a computer science student based near Frankfurt, passionate about solving problems and constantly seeking new knowledge,
            particularly in software engineering and design. My goal is to enhance my skills and broaden my knowledge in these areas.
            When I'm not coding, I enjoy playing basketball and playing musical instruments.
          </p>
        </div>
        <div className="max-w-3xl mx-auto p-6 border border-solid border-white text-gray-700 shadow-lg rounded-lg prose">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p><span className="font-bold">Programming languages :</span> Java, JavaScript, Python, SQL</p>
            <p><span className="font-bold">Frameworks/Libraries :</span> React, Express</p>
            <p><span className="font-bold">Tools :</span> Git, Docker, Excel, PowerPoint</p>
            <p><span className="font-bold">Languages :</span> English, German, Tigrinya</p>
        </div>
        <div className="max-w-3xl mx-auto p-6 border borer-solid border-white text-gray-700 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold">Education</h1>
            <ul>
                <li>Frankfurt University of Applied Science</li>
                <li>Peter Paul Cahensly School</li>
            </ul>
        </div>
      </div>
    );
  }
  