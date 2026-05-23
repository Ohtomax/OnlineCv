import React from 'react'

export default function About() {
  const handleViewCV = () => {
    const link = document.createElement("a")
    link.href = `${import.meta.env.BASE_URL}certfolder/Wesly_Cunanan_CV.pdf`  
    link.target = "_blank"    
    link.click()
  }

  return (
    <section>
      <div className="flex w-full px-[100px] py-[30px] max-[1300px]:px-[20px] max-lg:flex-col max-[1300px]:py-[20px]">
        <div className="flex w-[40%] justify-center items-center max-[1400px]:w-[50%] max-lg:w-[100%]">
          <img 
            src={`${import.meta.env.BASE_URL}cssfiles/images/2x2picture.png`} 
            alt="Profile Pic" 
            className="w-[700px] h-[auto] px-[20px] object-contain transition ease-in-out duration-300 drop-shadow-[0_0_25px_rgba(255,0,0,0.2)] hover:scale-105 hover:drop-shadow-[0_0_40px_rgba(255,0,0,0.6)] max-lg:w-[400px]" 
            data-aos="zoom-in-up" 
            data-aos-duration="1500" 
          />
        </div>
        <div className="flex w-[60%] justy-left max-[1400px]:w-[50%] max-lg:pt-[10px] max-lg:w-[100%] max-lg:items-center" style={{ flexDirection: 'column' }}>
          <h1 className="text-[50px] relative z-2 pl-[15px] font-bold" style={{ textShadow: '5px 5px 5px rgb(158, 0, 0)' }} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">About Me</h1>

          <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="text-[110px] absolute font-bold z-1 text-#808080 !opacity-15">About</h1>

          <h1 className="text-[20px] z-2 pl-[15px] mt-[30px] opacity-87 max-lg:px-[100px] max-lg:text-center max-sm:px-[20px] max-xs:px-[10px]" data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="1500">
            Hi, I’m Wesly Cunanan, a passionate Front End Junior Web Developer dedicated to building efficient and user-friendly web applications. I’m continuously striving to improve my skills and grow into a better developer every day.
          </h1>

          <div className="flex flex-row w-[100%] mt-[50px] pl-[15px]">
            <div className="w-[30%] space-y-5 max-lg:w-[40%] max-lg:pl-[120px] max-[700px]:pl-[80px] max-[550px]:pl-[30px]" data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="1500">
              <h1 className="font-bold text-[18px] max-[700px]:text-[16px]">Name:</h1>
              <h1 className="font-bold text-[18px] max-[700px]:text-[16px]">Date of Birth:</h1> 
              <h1 className="font-bold text-[18px] max-[700px]:text-[16px]">Address:</h1>
              <h1 className="font-bold text-[18px] max-[700px]:text-[16px]">Zip Code:</h1>
              <h1 className="font-bold text-[18px] max-[700px]:text-[16px]">Email:</h1>
              <h1 className="font-bold text-[18px] max-[700px]:text-[16px]">Github:</h1>
            </div>
            <div className="w-[70%] space-y-5 pl-[10px] max-lg:w-[60%] max-lg:pl-[10px] max-lg:pr-[10px]" data-aos="fade-left" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="1500">
              <h1 className="opacity-60 text-[18px] max-[700px]:text-[16px]">Wesly Cunanan</h1>
              <h1 className="opacity-60 text-[18px] max-[700px]:text-[16px]">December 03 2004</h1>
              <h1 className="opacity-60 text-[18px] max-[700px]:text-[16px]">Angeles City, Pampanga, Philippines</h1>
              <h1 className="opacity-60 text-[18px] max-[700px]:text-[16px]">2009</h1>
              <h1 className="opacity-60 text-[18px] max-[700px]:text-[16px]">omegawesly3@gmail.com</h1>
              <h1 className="opacity-60 text-[18px] max-[700px]:text-[16px]">Ohtomax - Wesly Cunanan</h1>
            </div>
          </div>
          <div className="pt-[40px] pl-[15px]">
            <button className="button-85" role="button" onClick={handleViewCV} data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">View my CV</button>
          </div>
        </div>
      </div>    
    </section>
  )
}
