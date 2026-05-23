import React from 'react'

export default function Experience() {
  const openLocalPDF = (path) => {
    const link = document.createElement("a")
    link.href = `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.substring(1) : path}`
    link.target = "_blank"
    link.click()
  }

  const openExternalLink = (url) => {
    window.open(url, "_blank")
  }

  return (
    <section className="py-[20px] overflow-x-hidden">
      <div className="w-full px-[30px] sm:px-[60px] md:px-[120px] lg:px-[200px] xl:px-[250px] 2xl:px-[300px] mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-[50px] font-bold text-center pb-[50px] z-2 relative" style={{ textShadow: '5px 5px 5px rgb(158, 0, 0)' }} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            Experience
          </h1>
          <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="text-[70px] font-bold text-#808080 !opacity-15 absolute">Experiences</h1>
        </div>
        
        {/* Education, Certifications & Projects */}
        <div className="relative" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
          <div className="mb-12 group">                   
            <div className="bg-[#222] rounded-2xl p-6 shadow-xl button-85">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-shadow" style={{ textShadow: '2px 2px 4px #000000' }}>
                  Bachelor of Science in Computer Science
                </h2>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-sm font-medium">2023 - 2027 at City College of Angeles</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I am currently pursuing my undergraduate studies with a focus on developing strong technical and analytical skills, particularly in web development. Alongside my studies, I actively work on personal projects to enhance my growth and practical experience. I also take on paid projects from both my own and other institutions to further apply and refine my skills in real-world settings.
                </p>
                
                <h2 className="text-[20px] font-bold text-white text-shadow" style={{ textShadow: '2px 2px 4px #000000' }}>
                  Certifications
                </h2>
                <div className="flex flex-col sm:flex-row gap-[10px] sm:items-center pl-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <h1 className="font-bold">Cisco Certificate <span className="font-medium">( IT Essentials: PC Hardware and Software )</span> - <span className="text-sm font-medium opacity-70">January 03, 2024</span></h1>
                  </div>
                  <button className="text-[15px] rounded-[5px] bg-[#333] px-[7px] py-[3px] text-white hover:bg-[#444]" onClick={() => openLocalPDF("/certfolder/ciscocert.pdf")}>View my certificate here</button>
                </div>
                <div className="flex flex-col sm:flex-row gap-[10px] sm:items-center pl-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <h1 className="font-bold">Cisco Certificate <span className="font-medium">( CCNAv7: Introduction to Networks )</span> - <span className="text-sm font-medium opacity-70">February 05, 2024</span></h1>
                  </div>
                  <button className="text-[15px] rounded-[5px] bg-[#333] px-[7px] py-[3px] text-white hover:bg-[#444]" onClick={() => openLocalPDF("/certfolder/net1cert.pdf")}>View my certificate here</button>
                </div>
                <div className="flex flex-col sm:flex-row gap-[10px] sm:items-center pl-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <h1 className="font-bold">Servo certificate - <span className="font-medium">( Privacy by Design: Compliance & Privacy in Software Development ) - </span><span className="text-sm font-medium opacity-70">October 15, 2025</span></h1>
                  </div>
                  <button className="text-[15px] rounded-[5px] bg-[#333] px-[7px] py-[3px] text-white hover:bg-[#444]" onClick={() => openLocalPDF("/certfolder/dataprivacy.pdf")}>View my certificate here</button>
                </div>
                <div className="flex flex-col sm:flex-row gap-[10px] sm:items-center pl-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <h1 className="font-bold">The Linux Foundation certificate - <span className="font-medium">( Cybersecurity Essentials LFC108 ) - </span><span class="text-sm font-medium opacity-70">October 31, 2025</span></h1>
                  </div>
                  <button className="text-[15px] rounded-[5px] bg-[#333] px-[7px] py-[3px] text-white hover:bg-[#444]" onClick={() => openLocalPDF("/certfolder/cyberseccert.pdf")}>View my certificate here</button>
                </div> 
                
                <h2 className="text-[20px] font-bold text-white text-shadow" style={{ textShadow: '2px 2px 4px #000000' }}>
                  Projects
                </h2>
                <div className="flex flex-col sm:flex-row gap-[10px] sm:items-center pl-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <h1 className="font-bold">FitJourneySync - <span className="font-medium">( Created using Java for android development ) - </span><span className="text-sm font-medium opacity-70">December 2024</span></h1>
                  </div>
                  <button className="text-[15px] rounded-[5px] bg-[#333] px-[7px] py-[3px] text-white hover:bg-[#444]" onClick={() => openExternalLink("https://github.com/Ohtomax/FITJOURNEYSYNCFINAL.git")}>View my Project here</button>
                </div>
                <div className="flex flex-col sm:flex-row gap-[10px] sm:items-center pl-[15px]">
                  <div className="flex items-center gap-[10px]">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <h1 className="font-bold">WEB-Based E-commerce School Project - <span className="font-medium">( Front-end web developer for User end (HTML, CSS, Javascript & Bootstrap) ) - </span><span className="text-sm font-medium opacity-70">April 2025</span></h1>
                  </div>
                  <button className="text-[15px] rounded-[5px] bg-[#333] px-[7px] py-[3px] text-white hover:bg-[#444]" onClick={() => openExternalLink("https://github.com/TrustTheGuardian/Web-based-E-commerce-platform-for-Purrfectly-Stitched-.git")}>View our Project here</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#333] text-yellow-400 px-4 py-2 rounded-full text-xs font-semibold">In Progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline item 1 */}
        <div className="relative" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
          <div className="mb-12 group">                   
            <div className="bg-[#222] rounded-2xl p-6 shadow-xl button-85">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-shadow" style={{ textShadow: '2px 2px 4px #000000' }}>
                  Language Assessor 
                </h2>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-sm font-medium">June 2025 - January 2026 at Gngn Eikaiwa Phils</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I worked at GNGN Eikawa for three months as a full-time, project-based worker. During my time there, I was responsible for evaluating students from various countries on their language skills. This role allowed me to assess proficiency levels and provide feedback to support their language learning progress.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#333] text-yellow-400 px-4 py-2 rounded-full text-xs font-semibold">Finished</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline item 2 */}
        <div className="relative" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
          <div className="mb-12 group">                   
            <div className="bg-[#222] rounded-2xl p-6 shadow-xl button-85">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-shadow" style={{ textShadow: '2px 2px 4px #000000' }}>
                  Cashier & Fitness Instructor
                </h2>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-sm font-medium">October 2023 - Present at Vibes Fitness Gym</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I am currently working as a part-time cashier and a freelance fitness coach at Vibes Fitness Gym. These roles allow me to improve my socialization, communication, and leadership skills while balancing my academic and professional responsibilities. Through these experiences, I continue to grow both personally and professionally.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#333] text-yellow-400 px-4 py-2 rounded-full text-xs font-semibold">Current Part-time work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
