import React from 'react'
import './WantedPoster.css'

function WantedPoster(props) {
  return (
    <div style={{ backgroundColor: 'black', width: '800px', padding: '10px' }}>
      <h1 style={{ color: 'red', fontSize: 150 }}>WANTED</h1>
      <h3 style={{ color: 'white', fontSize: 50, textTransform: 'uppercase' }}>{props.data.fullname}</h3>
      <h5 style={{ color: 'white', fontSize: 40, textTransform: 'uppercase' }}>{props.data.alias}</h5>
      <span style={{ textAlign: 'center' }}>
        <table>
          <tr>
            <td>
              <img src={props.data.src} style={{ height: 600 }} />
            </td>
            <td>
              <ul>
                <li>
                  GOLDEN RETRIEVER
                </li>
                <li>
                  3 YEARS (21 DOG YEARS)
                </li>
                <li>
                  2' 3" TALL
                </li>
                <li>
                  80 LBS
                </li>
                <li>
                  GOLDEN HAIR
                </li>
                <li>
                  BROWN EYES
                </li>
                <li>
                  NO TATOOS
                </li>
              </ul>
            </td>
          </tr >
        </table >
      </span>
      <h1 style={{ color: 'red', fontSize: 80 }}>CALL 555-555-5555</h1>

      <h1 style={{ color: 'red', fontSize: 40 }}>ARMED AND DANGEROUS</h1>
      <table>
        <tr>
          <td>
            <h3 style={{ color: 'white', fontSize: 25, width: '100%', textAlign: 'left', margin: 15 }}>NIKOLAI ONDREJKO is wanted by PLD (The Paw-Leashed Department) for things...TBD</h3>
            <p style={{ color: 'white', fontSize: 20, width: '100%', textAlign: 'left' }}>NIKOLAI ONDREJKO is wanted by PLD (The Paw-Leashed Department) for things...TBD</p> </td>
          <td>
            <img src={"badges.png"} />
          </td>
        </tr>
      </table>
    </div >
  )
}

export default WantedPoster