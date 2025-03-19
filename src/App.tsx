import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import ExpandableText from "./components/ExpandableText";

// function App() {
//   const cities = ["Tallinn", "Berlin", "Barcelona"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={cities}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       ></ListGroup>
//     </div>
//   );
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
function App() {
  return (
    <div>
      <ExpandableText maxChars={30}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic
        voluptates deserunt voluptatibus? Labore inventore, repellendus rem
        quibusdam, asperiores exercitationem cum dignissimos id, eveniet dolorum
        illo in facilis harum distinctio. Nesciunt eaque eos doloremque
        repudiandae aspernatur voluptatem dignissimos ut, blanditiis asperiores
        dolore debitis esse numquam neque fugit accusantium necessitatibus. Est,
        sunt fugit doloribus amet et odit suscipit, eligendi aliquid labore vero
        doloremque eaque perspiciatis alias animi vitae debitis corporis placeat
        saepe, aliquam veniam dolor? Laborum itaque assumenda earum et velit,
        praesentium laboriosam, quis amet repellendus temporibus beatae eius,
        nobis aperiam quia odio repudiandae voluptates eligendi quas maiores
        impedit. Tempora, facilis.
      </ExpandableText>
    </div>
  );
}

export default App;
