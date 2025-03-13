
function CardWrapper({children}){
  return <div style={{
    border : "2px solid black",
    padding : "10px"
  }}>
      {children}
  </div>
}

function App() {
  return <div>
    <CardWrapper>
      hi there
    </CardWrapper>
  </div>
}




export default App;
