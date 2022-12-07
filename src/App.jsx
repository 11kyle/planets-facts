import './App.css';
import { Tab } from './components/tab';
import { Statistic } from './components/statistic';
import mercury from './assets/planet-mercury.svg';

function App() {
  return (
    <div>
      <header>
        <nav className="flex flex-row items-center justify-between border-b border-[#38384F] px-6 py-4">
          <h1 className="uppercase text-white text-[28px] leading-[36.23px] -tracking-[1.05px] font-antonio font-medium">The Planets</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
        </nav>
      </header>
      <main className="grid grid-cols-2 gap-x-[70px] md:max-w-[689px] lg:max-w-[1110px] mx-auto">

        

        <div className="md:order-3 col-span-2 md:col-span-1 flex flex-row md:flex-col justify-between md:justify-center md:items-end md:gap-y-4 border-b md:border-none border-[#38384F] px-6 md:px-0">
          <Tab><span className="hidden md:block text-[#D8D8D8] ml-5 mr-4">01</span><span>Overview</span></Tab>
          <Tab><span className="hidden md:block text-[#D8D8D8] ml-5 mr-4">02</span><span>Structure</span></Tab>
          <Tab><span className="hidden md:block text-[#D8D8D8] ml-5 mr-4">03</span><span>Surface</span></Tab>
        </div>

        {/* 
          mercury:  mobile: 111x111, tablet:  184x184,  desktop:  290x290
          venus:    mobile: 154x154, tablet:  253x253,  desktop:  400x400
          earth:    mobile: 173x173, tablet:  285x285,  desktop:  450x450
          mars:     mobile: 129x129, tablet:  213x213,  desktop:  336x336
          jupiter:  mobile: 224x224, tablet:  369x369,  desktop:  260x260
          saturn:   mobile: 256x256, tablet:  422x422,  desktop:  666x666
          uranus:   mobile: 176x176, tablet:  290x290,  desktop:  458x458
          neptune:  mobile: 173x173, tablet:  285x285,  desktop:  450x450
        */}
        <div className="md:order-1 col-span-2 lg:col-span-1 lg:row-span-2 w-full h-[304px] md:h-[460px] lg:h-[754px] flex flex-row justify-center">
          <img className="w-[111px] h-[111px] md:w-[184px] md:h-[184px] lg:w-[290px] lg:h-[290px] my-auto" src={mercury} />
        </div>

        


        <div className="md:order-2 col-span-2 md:col-span-1 lg:self-end text-center md:text-left mx-6 md:mx-0">
          <h1 className="heading-xl">Mercury</h1>
          <p className="body mb-8">Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
          <p className="body">Source : Wikipedia</p>
        </div>




        <div className="order-4 col-span-2 flex flex-col md:flex-row md:justify-between gap-y-2 md:gap-x-2 mx-6 md:mx-0 mt-7 lg:mt-20">
          <Statistic 
            data="58.6 Days"
            subject="Rotation Time"
          />
          <Statistic 
            data="87.97 Days"
            subject="Revolution Time"
          />
          <Statistic 
            data="2,439.7 km"
            subject="Radius"
          />
          <Statistic 
            data="430 C"
            subject="Average Temp."
          />
        </div>
        
        
      </main>
    </div>
  )
}

export default App
