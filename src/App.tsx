import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const cities = ["Tallinn", "Berlin", "Barcelona"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
  //   const [alertVisible, setAlertVisiblility] = useState(false);

  //   return (
  //     <div>
  //       {alertVisible && (
  //         <Alert onClose={() => setAlertVisiblility(false)}> Open Alert </Alert>
  //       )}
  //       <Button color="primary" onClick={() => setAlertVisiblility(true)}>
  //         My Button
  //       </Button>
  //     </div>
  //   );
}

export default App;
