
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
      <Card title="Title"/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
    </div>
    );
}



function Card(props){
  console.log(props.title);
  const title = "Card Title";
  return (
  <section className='card'>
    <img src='https://via.placeholder.com/150/d32776' alt='cardname'/>
    <h1 style={{marginTop:"1rem"}}>{title}{props.title}</h1>
    <Description/>
  </section>
  );

  function Description(){
    return <p style={{marginTop:"1rem"}}>a;jhfioaphfsaiofha[o hfhao;pg</p>;
  }
}

export default CardList;
