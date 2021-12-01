import { MutableRefObject } from 'hoist-non-react-statics/node_modules/@types/react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { ReactNode, useState } from 'react'
import { Container, FloatingTag } from './styles'

interface Props {
  items: ReactNode;
}

const tags = [
  "Donald Trump",
  "Deaths in 2020",
  "Kamala Harris",
  "Joe Biden",
  "Coronavirus",
  "Kobe Bryant",
  "Wikipedia",
  "Elizabeth II",
  "Elon Musk",
  "Spanish flu",
  "Michael Jordan",
  "Tasuku Honjo",
  "QAnon",
  "Chadwick Boseman",
  "COVID-19",
  "Microsoft Office",
  "United States",
  "F5 Networks",
  "YouTube",
  "Alexander Hamilton",
  "Barack Obama",
  "Jeffrey Epstein",
  "Tenet (film)",
  "Billie Eilish",
  "The Mandalorian",
  "Diana",
  "Prince Philip",
  "The Queen's Gambit",
  "Charles",
  "Cleopatra",
  "BBC World Service",
  "Antifa (United States)",
  "Ruth Bader Ginsburg",
  "Media",
  "India",
  "Periodic table",
  "Ken Miles",
  "Amy Coney Barrett",
  "Money Heist",
  "Cristiano Ronaldo",
  "LeBron James",
  "Shooting of Breonna Taylor",
  "Kepler's Supernova",
  "Sean Connery",
  "Margaret Thatcher",
  "Aaron Hernandez",
  "Naya Rivera",
  "Kim Jong-un",
  "Jeff Bezos",
  "Joe Exotic",
  "George VI",
  "Hamilton (musical)",
  "The Boys",
  "Beau Biden",
  "Jill Biden",
  "Melania Trump",
  "1917",
  "Schitt's Creek",
  "Winston Churchill",
  "Boris Johnson",
  "Dwayne Johnson",
  "Ozark (TV series)",
  "Anya Taylor-Joy",
  "Google",
  "Joaquin Phoenix",
  "United Kingdom",
  "Diego Maradona",
  "Judy Garland",
  "World War II",
  "Joker (2019 film)",
  "Keanu Reeves",
  "Black Death",
  "Once Upon a Time in Hollywood",
  "Carole Baskin",
  "Mike Tyson",
  "Scarlett Johansson",
  "Patrick Mahomes",
  "Andrew Cuomo",
  "Johnny Depp",
  "Edward VIII",
]

interface ITag {
  text: string;
  // ref: Mu tableRefObject<JSX.Element>;
  random: number;
  from: {
    x: number;
    y: number;
  }
  to: {
    x: number;
    y: number;
    
  }
}

export function FloatingTagsBackground() {

  const elRef = useRef(null);
  
  // const item=<span>Xitem</span>;
  const numberOfItems = 50;
  const [floatingItems, setFloatingItems] = useState<ITag[]>([]);

  useEffect(()=>{

    function getSquaredCoords(angle:number){
      let x = Math.cos(angle);
      let y = Math.sin(angle); 
      const M = Math.max(Math.abs(x), Math.abs(y)); 
      x = x / M; 
      y = y / M
      return {x, y};
    }

    const initialFloatingItems:ITag[] = [];

    
    tags.forEach((tag)=>{
      const randonAngle1 = Math.random() * 2 * Math.PI;
      const randonAngle2 = Math.random() * 2 * Math.PI;
      const from = getSquaredCoords(randonAngle1);
      const to = getSquaredCoords(randonAngle2);
      initialFloatingItems.push({
        text: tag,
        
        random: Math.random(),
        from: {
          x:from.x * 50 + 50,
          y:from.y * 50 + 50,
        },
        to: {
          x:to.x * 50 + 50,
          y:to.y * 50 + 50
        }
      });
    })
    setFloatingItems(initialFloatingItems);
  },[elRef])

  return (
    <Container ref={elRef}>
      {
        floatingItems.map((item, index)=>(
          <FloatingTag 
            random={item.random}
            key={index}
            from = {item.from}
            to = { item.to}
          >
            {item.text}
          </FloatingTag>
        ))
      }
    </Container>
  )
}