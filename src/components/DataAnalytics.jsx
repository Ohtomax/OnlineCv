import React from 'react'

export default function DataAnalytics() {
  const tasks = [
    {
      id: "PracTask1",
      title: "Practice Task 1",
      date: "February 13, 2026",
      description: "This demo file shows how to prepare and clean data before using it for analysis. It includes simple steps to organize the data, fix errors, and remove unnecessary information so the data becomes accurate and ready to use.",
      pdf: "/dataAnalyticsFiles/PracticeTask1.pdf",
      excel: "https://docs.google.com/spreadsheets/d/1h9c15OcOH98xzNMCbAxuJY2cT9JA6NuO/edit?usp=sharing&ouid=104068630638250313777&rtpof=true&sd=true"
    },
    {
      id: "PracTask2",
      title: "Practice Task 2",
      date: "February 27, 2026",
      description: "Practice Task 2 demonstrates how to use basic functions in MS Excel to perform calculations and manage data. It helps users understand how formulas can quickly analyze and organize information in a spreadsheet.",
      pdf: "/dataAnalyticsFiles/PracticeTask2.pdf",
      excel: "https://docs.google.com/spreadsheets/d/1Zs2Ik4zfH4A9dJWL1nrb2k83Cnkix4rh/edit?usp=sharing&ouid=104068630638250313777&rtpof=true&sd=true"
    },
    {
      id: "PracTask3",
      title: "Practice Task 3",
      date: "February 27, 2026",
      description: "Practice Task 3 shows how to create a simple dashboard in Excel to display data visually. It demonstrates how charts, tables, and other tools can be used to summarize and present information clearly.",
      pdf: "/dataAnalyticsFiles/PracticeTask3.pdf",
      excel: "https://docs.google.com/spreadsheets/d/1Vj2ZTcXE3Ch7fJwj5iFMsxRxRkCJI0L0/edit?usp=sharing&ouid=104068630638250313777&rtpof=true&sd=true"
    },
    {
      id: "PracTask4",
      title: "Practice Task 4",
      date: "March 06, 2026",
      description: "Practice Task 4 demonstrates how to use Power Query for data normalization and organizing tables. It also shows how different tables can be connected and displayed in a diagram to better understand the relationships between the data.",
      pdf: "/dataAnalyticsFiles/PracticeTask4.pdf",
      excel: "https://docs.google.com/spreadsheets/d/1VBPUECWoSg6rwzIDWz2NZ8Z-sLWDB4Yd/edit?usp=sharing&ouid=104068630638250313777&rtpof=true&sd=true"
    },
    {
      id: "MidTask1",
      title: "Midterm Task 1",
      date: "February 13, 2026",
      description: "Midterm Lab Task 1 focuses on cleaning and preparing the dataset by identifying and correcting errors, handling missing values, and formatting the data for accurate analysis. This ensures the data is consistent, reliable, and ready for further processing.",
      pdf: "/dataAnalyticsFiles/MidtermTask1.pdf",
      excel: "https://docs.google.com/spreadsheets/d/1w7nkiq5MV5YgGvIHUUsRjZc58nFLEnQ_/edit?usp=sharing&ouid=104068630638250313777&rtpof=true&sd=true"
    },
    {
      id: "MidTask2",
      title: "Midterm Task 2",
      date: "February 20, 2026",
      description: "Midterm Task 2 involves creating pivot tables and charts in Excel to summarize, analyze, and visualize data efficiently. This allows for quick insights and clearer presentation of trends and patterns.",
      pdf: "/dataAnalyticsFiles/MidtermTask2.pdf",
      excel: "https://docs.google.com/spreadsheets/d/1Tpp5n3aX2ltO90-OgGOBog98LC9zZSkD/edit?usp=sharing&ouid=104068630638250313777&rtpof=true&sd=true"
    },
    {
      id: "MidTask3",
      title: "Midterm Task 3",
      date: "March 06, 2026",
      description: "Midterm Task 3 focuses on normalizing data using Power Query to organize it into a structured format, reducing redundancy and improving consistency. This makes the dataset easier to analyze and maintain.",
      pdf: "/dataAnalyticsFiles/MidtermTask3.pdf",
      excel: "https://docs.google.com/spreadsheets/d/1i1E3_l0P4mM_hBQzHrQiIREkPPrK6SSN/edit?usp=sharing&ouid=104068630638250313777&rtpof=true&sd=true"
    }
  ]

  const handleViewPDF = (pdfPath) => {
    const link = document.createElement("a")
    link.href = `${import.meta.env.BASE_URL}${pdfPath.startsWith('/') ? pdfPath.substring(1) : pdfPath}`
    link.target = "_blank"
    link.click()
  }

  const handleViewExcel = (excelUrl) => {
    window.open(excelUrl, "_blank")
  }

  return (
    <section className="py-[40px]">
      <div className="w-full px-[30px] sm:px-[60px] md:px-[120px] lg:px-[200px] xl:px-[250px] 2xl:px-[300px] mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-[50px] font-bold text-center pb-[50px] z-2 relative" style={{ textShadow: '5px 5px 5px rgb(158, 0, 0)' }} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            Data Analytics
          </h1>
          <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="text-[70px] font-bold text-#808080 !opacity-15 absolute text-center">Data Analytics</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-[30px] md:px-[120px] xl:px-[200px]">
        {tasks.map((task) => (
          <div key={task.id} className="" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
            <div className="h-full">                  
              <div className="bg-[#222] rounded-2xl p-6 shadow-xl button-85 h-full">
                <div className="flex flex-col gap-3 h-full min-h-[300px]">
                  <div className="flex flex-row justify-between">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-shadow" style={{ textShadow: '2px 2px 4px #000000' }}>
                      {task.title}
                    </h2>
                    <span className="bg-[#333] text-yellow-400 px-[20px] sm:px-4 py-[10px] rounded-full text-[10px] sm:text-xs font-semibold text-center whitespace-nowrap">Finished</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span className="text-sm font-medium">{task.date}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {task.description}
                  </p>
                  <div className="mt-auto flex flex-row flex-nowrap gap-1 sm:gap-2 justify-between sm:justify-end items-center w-full">
                    <span 
                      className="h-[35px] flex flex-row bg-[#333] text-red-400 px-2 sm:px-4 py-2 rounded-[10px] text-[10px] sm:text-xs font-semibold cursor-pointer text-center whitespace-nowrap items-center gap-[6px] hover:bg-[#444]" 
                      onClick={() => handleViewPDF(task.pdf)}
                    >
                      View PDF
                      <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 309.267 309.267" xmlSpace="preserve" fill="#E2574C">
                        <g>
                          <path d="M38.658,0h164.23l87.049,86.711v203.227c0,10.679-8.659,19.329-19.329,19.329H38.658 c-10.67,0-19.329-8.65-19.329-19.329V19.329C19.329,8.65,27.989,0,38.658,0z"></path>
                          <path style={{ fill: '#B53629' }} d="M289.658,86.981h-67.372c-10.67,0-19.329-8.659-19.329-19.329V0.193L289.658,86.981z"></path>
                          <path d="M217.434,146.544c3.238,0,4.823-2.822,4.823-5.557c0-2.832-1.653-5.567-4.823-5.567h-18.44 c-3.605,0-5.615,2.986-5.615,6.282v45.317c0,4.04,2.3,6.282,5.412,6.282c3.093,0,5.403-2.242,5.403-6.282v-12.438h11.153 c3.46,0,5.19-2.832,5.19-5.644c0-2.754-1.73-5.49-5.19-5.49h-11.153v-16.903C204.194,146.544,217.434,146.544,217.434,146.544z M155.107,135.42h-13.492c-3.663,0-6.263,2.513-6.263,6.243v45.395c0,4.629,3.74,6.079,6.417,6.079h14.159 c16.758,0,27.824-11.027,27.824-28.047C183.743,147.095,173.325,135.42,155.107,135.42z M155.755,181.946h-8.225v-35.334h7.413 c11.221,0,16.101,7.529,16.101,17.918C171.044,174.253,166.25,181.946,155.755,181.946z M106.33,135.42H92.964 c-3.779,0-5.886,2.493-5.886,6.282v45.317c0,4.04,2.416,6.282,5.663,6.282s5.663-2.242,5.663-6.282v-13.231h8.379 c10.341,0,18.875-7.326,18.875-19.107C125.659,143.152,117.425,135.42,106.33,135.42z M106.108,163.158h-7.703v-17.097h7.703 c4.755,0,7.78,3.711,7.78,8.553C113.878,159.447,110.863,163.158,106.108,163.158z"></path>
                        </g>
                      </svg>
                    </span>
                    <span 
                      className="h-[35px] flex flex-row gap-[7px] items-center bg-[#333] text-green-400 px-2 sm:px-4 py-2 rounded-[10px] text-[10px] sm:text-xs font-semibold cursor-pointer text-center whitespace-nowrap hover:bg-[#444]" 
                      onClick={() => handleViewExcel(task.excel)}
                    >
                      View Excel
                      <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#107C41">
                        <g>
                          <path d="M19.581,15.35,8.512,13.4V27.809A1.192,1.192,0,0,0,9.705,29h19.1A1.192,1.192,0,0,0,30,27.809h0V22.5Z" style={{ fill: '#185c37' }}></path>
                          <path d="M19.581,3H9.705A1.192,1.192,0,0,0,8.512,4.191h0V9.5L19.581,16l5.861,1.95L30,16V9.5Z" style={{ fill: '#21a366' }}></path>
                          <path d="M8.512,9.5H19.581V16H8.512Z" style={{ fill: '#107c41' }}></path>
                          <path d="M3.194,8.85H15.132a1.193,1.193,0,0,1,1.194,1.191V21.959a1.193,1.193,0,0,1-1.194,1.191H3.194A1.192,1.192,0,0,1,2,21.959V10.041A1.192,1.192,0,0,1,3.194,8.85Z" style={{ fill: '#107C41' }}></path>
                          <path d="M5.7,19.873l2.511-3.884-2.3-3.862H7.758L9.013,14.6c.116.234.2.408.238.524h.017c.082-.188.169-.369.26-.546l1.342-2.447h1.7l-2.359,3.84,2.419,3.905H10.821l-1.45-2.711A2.355,2.355,0,0,1,9.2,16.8H9.176a1.688,1.688,0,0,1-.168.351L7.515,19.873Z" style={{ fill: '#fff' }}></path>
                          <path d="M28.806,3H19.581V9.5H30V4.191A1.192,1.192,0,0,0,28.806,3Z" style={{ fill: '#33c481' }}></path>
                          <path d="M19.581,16H30v6.5H19.581Z" style={{ fill: '#107c41' }}></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
