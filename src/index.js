import React from 'react';
import { createRoot } from 'react-dom/client';
import { Shop } from './components/shoppingsite';
import { Content } from './components/shoppingsite';
import { EndBar } from './components/shoppingsite';
import img1 from './components/images/sunglass.jpg'
import img2 from './components/images/cap.jpg'
import img3 from './components/images/shirt.jpg'
import img4 from './components/images/watch.jpg'
import img5 from './components/images/bag.jpg'
import img6 from './components/images/camera.jpg'
import img7 from './components/images/phone.jpg'
import img8 from './components/images/shoes.jpg'

const App = () => {
  return (
    <div >
      <Shop />
      <hr style={{color:'white',marginTop:'8px'}}></hr>
      <div class="cards-container">
        <div class="cards-container">
          <Content
            image={img1}
            title='Sun Glass'
            detail='Trendy pink ladies sunglasses with UV protection, lightweight design, durable frame, and comfortable fit'
          />

          <Content
            image={img2}
            title='Cap'
            detail='Stylish red baseball cap, adjustable strap, breathable fabric, lightweight, durable, perfect for casual outings'
          />
          <Content
            image={img3}
            title='Shirt'
            detail='Classic black t-shirt, soft cotton fabric, breathable, durable, perfect for casual wear and versatile styling'
          />
          <Content
            image={img4}
            title='Watch'
            detail='Feature-packed smartwatch with fitness tracking, heart rate monitor, waterproof design, long battery life, and notifications'
          />
        </div>
        <div class="cards-container">
          <Content
            image={img5}
            title='Bag'
            detail='Stylish leather handbag, durable, lightweight, spacious, versatile, adjustable straps, modern design'
          />
          <Content
            image={img6}
            title='Camera'
            detail='High-resolution DSLR camera, compact, lightweight, versatile, advanced features, perfect for photography lovers'
          />
          <Content
            image={img7}
            title='Iphone'
            detail='Latest iPhone model, sleek design, powerful performance, advanced camera, secure, long battery life'
          />
          <Content
            image={img8}
            title='Shoes'
            detail='Comfortable red sneakers, durable, lightweight, stylish, perfect for sports, running, and casual wear'
          />
        </div>
      </div>
      <hr style={{color:'white',marginBottom:'4px'}}></hr>
      <EndBar />
    </div>
  )
}




const root = createRoot(document.getElementById('root'));
root.render(<App />)
// import IncrementCounter from './stateWithFunction';
// // import IncrementCounterClass from './stateWithClass';
// import {Details} from './components/carChangeColour';
// import Card1 from './components/card';
// import img1 from './components/images/pic1.jpg'
// import img2 from './components/images/pic2.jpg'
// import img3 from './components/images/pic3.jpg'

// const App =()=>
// {
//   return(
//     <div>
//       <Card1 
//         image={img1}
//         title='Arjun'
//         text = 'Hello'
//         time = '45'
//       />
//       <Card1 
//         image={img2}
//         title='rajan  '
//         text = 'Hi'
//         time = '30'
//       />
//       <Card1 
//         image={img3}
//         title='shanker'
//         text = 'Hey'
//         time = '15'
//       />
//     </div>
//   )
// }




