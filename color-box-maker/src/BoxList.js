import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList(){
    const init = [];
    const [boxes, setBoxes] = useState(init);
    const createBox = (newBox) => {
        setBoxes(boxes => [...boxes, newBox]) 
    };

    const remove = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    return (
        <div>
            <NewBoxForm createBox={createBox}/>
            {boxes.map(box => (
                <Box 
                key={box.id}
                id={box.id}
                width={box.width}
                height={box.height}
                remove={remove}
                backgroundColor={box.backgroundColor}
                />
            ))}
        </div>
    );
}

export default BoxList;