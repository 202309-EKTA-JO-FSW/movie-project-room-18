// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from "react-bootstrap/Carousel";
// import img4 from "../../assets/1.png";
// import img2 from "../../assets/2.png";
// import img3 from "../../assets/3.png";
// import img from "../../assets/4.png";
// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";



// import "./hero.module.css";

// const Hero = ({ games }) => {
//     const navigate = useNavigate();
//     const [searchResult, setSearchResult] = useState([]);

//     const searchHandler = (text) => {
//         const result = games.filter((e) =>
//             e.title.toLowerCase().includes(text.toLowerCase())
//         );

//         setSearchResult(result);
//     };

//     const sumbitHandler = (e) => {
//         e.preventDefault();
//         if (searchResult.length === 1) {
//             navigate(`/details/${searchResult[0].id}`);
//         }
//     };

//     return (
//         <section className="section">
//             <Carousel>
//                 <Carousel.Item>
//                     <img className="w-50" src={img} alt="First slide" />
//                     <Carousel.Caption>
//                         <h3 className="hs">
//                             Home is where you are 'Player 1'.
//                         </h3>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img className="w-50" src={img2} alt="Second slide" />
//                     <Carousel.Caption>
//                         <h3 className="hs">Eat. Sleep. Game. Repeat.</h3>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img className="w-50" src={img3} alt="Third slide" />
//                     <Carousel.Caption>
//                         <h3 className="hs">
//                             I'm not a player. I'm a gamer. Players get chicks. I
//                             get achievements.
//                         </h3>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img className="w-50" src={img4} alt="Third slide" />
//                     <Carousel.Caption>
//                         <h3 className="hs">
//                             A game is the complete exploration of freedom within
//                             a restrictive environment
//                         </h3>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//             <form onSubmit={sumbitHandler} className="search">
//                 <input
//                     className="form-control"
//                     list="datalistOptions"
//                     id="exampleDataList"
//                     placeholder="Search a game "
//                     onInput={(e) => searchHandler(e.target.value)}
//                 />
//                 <datalist id="datalistOptions">
//                     {searchResult.length > 0 &&
//                         searchResult.map((e, index) => {
//                             return (
//                                 <option
//                                     key={index}
//                                     value={e.title}
//                                     onClick={() => navigate(`/details/${e.id}`)}
//                                 />
//                             );
//                         })}
//                 </datalist>
//             </form>
//             =
//         </section>
//     );
// };
// export default Hero;


// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import Carousel from 'react-bootstrap/Carousel';
// import styles from './hero.module.css';

// import img1 from '../../assets/1.png';
// import img2 from '../../assets/2.png';
// import img3 from '../../assets/3.png';
// import img4 from '../../assets/4.png';

// const Hero = ({ games }) => {
//   const router = useRouter();
//   const [searchResult, setSearchResult] = useState([]);

//   const searchHandler = (text) => {
//     const result = games.filter((e) =>
//       e.title.toLowerCase().includes(text.toLowerCase())
//     );

//     setSearchResult(result);
//   };

//   const sumbitHandler = (e) => {
//     e.preventDefault();
//     if (searchResult.length === 1) {
//       router.push(`/details/${searchResult[0].id}`);
//     }
//   };

//   return (
//     <section className={styles.section}>
//       <Carousel>
//         <Carousel.Item>
//           <img className="w-50" src={img1} alt="First slide" />
//           <Carousel.Caption>
//             <h3 className={styles.hs}>Home is where you are 'Player 1'.</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="w-50" src={img2} alt="Second slide" />
//           <Carousel.Caption>
//             <h3 className={styles.hs}>Eat. Sleep. Game. Repeat.</h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="w-50" src={img3} alt="Third slide" />
//           <Carousel.Caption>
//             <h3 className={styles.hs}>
//               I'm not a player. I'm a gamer. Players get chicks. I get achievements.
//             </h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="w-50" src={img4} alt="Fourth slide" />
//           <Carousel.Caption>
//             <h3 className={styles.hs}>
//               A game is the complete exploration of freedom within a restrictive environment
//             </h3>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//       <form onSubmit={sumbitHandler} className={styles.search}>
//         <input
//           className="form-control"
//           list="datalistOptions"
//           id="exampleDataList"
//           placeholder="Search a game"
//           onInput={(e) => searchHandler(e.target.value)}
//         />
//         <datalist id="datalistOptions">
//           {searchResult.length > 0 &&
//             searchResult.map((e, index) => (
//               <option
//                 key={index}
//                 value={e.title}
//                 onClick={() => router.push(`/details/${e.id}`)}
//               />
//             ))}
//         </datalist>
//       </form>
//     </section>
//   );
// };

// export default Hero;

import React, { useState } from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Hero() {
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  const cards = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ];

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'600px'} /* Change '6xl' to '600px' */
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}

