import React from "react";

function Box({
    id,
    remove,
    width=4,
    height=4,
    backgroundColor="blue"
}){
    const handleRemove = () => remove(id);

    return (
        <div>
            <div 
                style={{
                    height: `${height}em`,
                    width: `${width}em`,
                    backgroundColor
                }}
            />
            <button onClick={handleRemove}>X</button>
        </div>
    )
}


export default Box;