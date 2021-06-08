import React, {useState, useEffect} from 'react'

export const Drops = () => {

    const [drops, setDrops] = useState([])

    useEffect(() =>{
        makeItRain()
        const audio = new Audio('assets/sos.mp3')
        audio.play()
    }, [])

    const makeItRain = () => {

      let increment = 0;
      let arrayDrops = []

      while (increment < 100) {

        let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));

        let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));

        increment += randoFiver;
  
        const rainVelocity = '0.3' //Must be string

        const styleDrops = {
          id: increment,
          left: increment + "%",
          bottom: (randoFiver + randoFiver - 1 + 85) + "%",
          animationDelay: "0." + randoHundo + "s",
          animationDuration: rainVelocity + randoHundo + 's'
        }
  
        const styleStemSplat = {
          animationDelay: "0." + randoHundo + "s",
          animationDuration: rainVelocity + randoHundo + 's',
          display: "block"
        }

        arrayDrops.push((
            <div key={styleDrops.id +Date.now()} style={styleDrops} className="drop" >
              <div style={styleStemSplat} className="stem"></div>
              <div style={styleStemSplat} className="splat"></div>
            </div>
            
        ))
      }

      setDrops(arrayDrops)
    }

    return (
        <>
          <div className="rain front-row">
              {drops}
          </div>
          <div className="rain back-row">
              {drops}
          </div>
        </>
    )
}