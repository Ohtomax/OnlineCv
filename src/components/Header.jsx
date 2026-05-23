import React from 'react'

export default function Header({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'data-analytics', label: 'Data Analytics' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className="header-class">
      <div className="header-name-section" onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }}>
        <img data-aos="fade-down" data-aos-duration="1500" src={`${import.meta.env.BASE_URL}cssfiles/images/logo.png`} className="circle-image" alt="Logo" />
        <h2 data-aos="fade-down" data-aos-duration="2000">WESLY</h2>
      </div>
      
      {/* Desktop Menu */}
      <div className="header-menu-section">
        {menuItems.map((item, index) => (
          <a
            key={item.id}
            data-aos="fade-down"
            data-aos-delay={index * 150}
            data-aos-duration="1000"
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab(item.id)
            }}
            className={activeTab === item.id ? 'active-menu-item' : ''}
            style={activeTab === item.id ? { 
              fontWeight: 'bolder', 
              textDecoration: 'underline', 
              textDecorationColor: 'rgb(255, 0, 0)', 
              textDecorationThickness: '3px', 
              textUnderlineOffset: '5px', 
              fontSize: '20px' 
            } : {}}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Bootstrap Dropdown Menu */}
      <div data-aos="fade-down" data-aos-duration="2000" className="dropdown">
        <button
          className="btn dropdown-toggle custom-btn"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Menu
        </button>
        <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                className="dropdown-item"
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab(item.id)
                }}
                style={activeTab === item.id ? { color: '#ff0000', fontWeight: 'bold' } : {}}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
