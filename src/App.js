
import './App.css';

// function App() {
//   return (
//     <div className="App">
//        <CardList/>
//     </div>
//   );
// }
function CardList(){
  return (
    <div className='cardlist'>
      <Card card={card}>
        <p>children tag</p>
      </Card>
      <Card2 card={card}/>
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}
      
    </div>
    );
}

const card={
  image:"https://via.placeholder.com/150/d32776",
  title:"card title",
  description:"card description",
};

function Card(props){
  console.log(props.title);
  var card = props.card;
 
  return (
  <section className='card'>
    <img src={props.card.image} alt='cardname'/>
    <h1 style={{marginTop:"1rem"}}>{props.card.title}</h1>
    <Description card={card}/>
    {props.children}
  </section>
  );
}
//  OBJECT DESTRUCTURING
  function Card2({card: {image, title}}){
    // const {image, title } = props;
    
   
    return (
    <section className='card'>
      <img src={image} alt='cardname'/>
      <h1 style={{marginTop:"1rem"}}>{title}</h1>
      
    </section>
    );
    }

  function Description(props){
    return <p style={{marginTop:"1rem"}}>{props.card.description}</p>;
  }


export default CardList;
