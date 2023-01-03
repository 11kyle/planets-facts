import { useState, useEffect } from 'react';
import './App.css';
import { Tab } from './components/tab';
import { Statistic } from './components/statistic';
import mercury from './assets/planet-mercury.svg';

import planetData from './data.json';


function App() {
  const [activePlanet, setActivePlanet] = useState('mercury');
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log(planetData);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleActivePlanet(planet) {
    setActivePlanet(planet);
    // setActiveTab('overview');
    setIsMobileMenuOpen(false);
  }

  function handleActiveTab(tab) {
    setActiveTab(tab);
  }

  return (
    <div>
      <header>
        <nav className="flex flex-row items-center justify-between flex-wrap border-b border-[#38384F] px-6 py-4">
          <h1 className="uppercase text-white text-[28px] leading-[36.23px] -tracking-[1.05px] font-antonio font-medium md:mx-auto lg:mx-0 md:mb-10 lg:mb-0">The Planets</h1>
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
          </button>
          {/* <ul className="closed md:flex md:flex-row md:gap-x-8 md:basis-full lg:basis-0 md:justify-center">
            {planetData.map((planet) => (
              <li className="heading-sm text-[#D8D8D8] cursor-pointer" onClick={() => handleActivePlanet(planet.name.toLowerCase())} key={planet.name}>{planet.name}</li>
            ))}
          </ul> */}

          <ul className={`${windowSize.innerWidth < 768 && isMobileMenuOpen ? "open" : "closed"} md:flex md:flex-row md:gap-x-8 md:basis-full lg:basis-0 md:justify-center`}>
            {planetData.map((planet) => (
              <li className="heading-sm text-[#D8D8D8] cursor-pointer" onClick={() => handleActivePlanet(planet.name.toLowerCase())} key={planet.name}>
                {isMobileMenuOpen && <span className={`${planet.name.toLocaleLowerCase()} block rounded-full w-5 h-5 mr-4`}></span>}
                {planet.name}
              </li>
            ))}
          </ul>

        </nav>
      </header>

      {planetData.filter((query) => query.name.toLowerCase() === activePlanet).map((planet) => (
        <main className="grid grid-cols-2 lg:grid-cols-3 gap-x-[70px] md:max-w-[689px] lg:max-w-[1110px] mx-auto" key={planet.name}>

          {/* Tab Bar */}
          <div className="md:order-3 col-span-2 md:col-span-1 flex flex-row md:flex-col justify-between md:justify-center md:items-end md:gap-y-4 border-b md:border-none border-[#38384F] px-6 md:px-0">
            {["overview", "structure", "geology"].map((tab, index) => (
              <div className={`${activeTab === tab ? activePlanet : ""} heading-md btn flex flex-row justify-center md:justify-start cursor-pointer`} key={tab} onClick={() => handleActiveTab(tab)}>
                <span className="hidden md:block text-[#D8D8D8] ml-5 mr-4">0{index + 1}</span><span>{tab}</span>
              </div>
              // <Tab key={tab}><span className="hidden md:block text-[#D8D8D8] ml-5 mr-4">0{index + 1}</span><span>{tab}</span></Tab>
            ))}
          </div>

          {/* Planet Image */}
          <div className="relative md:order-1 col-span-2 lg:col-span-2 lg:row-span-2 w-full h-[304px] md:h-[460px] lg:h-[754px] flex flex-row justify-center">
            {activeTab === "overview" && 
              <img 
                className={`${activePlanet}-size my-auto`} 
                src={planet.images.planet}
                alt={planet.name}
              />
            }
            {activeTab === "structure" && 
              <img 
                className={`${activePlanet}-size my-auto`} 
                src={planet.images.internal}
                alt={planet.name}
              />
            }
            {activeTab === "geology" && 
              <div className="my-auto">
                <img 
                  className={`${activePlanet}-size`} 
                  src={planet.images.planet}
                  alt={planet.name}
                />
                <img
                className="absolute left-1/2 -translate-x-1/2 bottom-0 md:-translate-y-1/2 lg:-translate-y-full w-[129px] h-[129px]" 
                  src={planet.images.geology}
                />
              </div>
            }
          </div>

          {/* Description */}
          <div className="md:order-2 col-span-2 md:col-span-1 lg:self-end text-center md:text-left mx-6 md:mx-0">
            <h1 className="heading-xl">{planet.name}</h1>
            <p className="body mb-8">{planet[activeTab].content}</p>
            <p className="body">Source : Wikipedia</p>
          </div>

          {/* Statistics */}
          <div className="order-4 col-span-2 lg:col-span-3 flex flex-col md:flex-row md:justify-between gap-y-2 md:gap-x-2 mx-6 md:mx-0 mt-7 lg:mt-20 md:mb-9">
            <Statistic 
              data={planet.rotation}
              subject="Rotation Time"
            />
            <Statistic 
              data={planet.revolution}
              subject="Revolution Time"
            />
            <Statistic 
              data={planet.radius}
              subject="Radius"
            />
            <Statistic 
              data={planet.temperature}
              subject="Average Temp."
            />
          </div>
        </main>
      ))}
    </div>
  )
}

export default App
