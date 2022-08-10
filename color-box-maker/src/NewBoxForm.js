import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

function NewBoxForm({ createBox }) {
    const init = {
        height: "",
        width: "",
        backgroundColor: ""
      }
    const [formData, setFormData] = useState(init);
  
    const handleChange = evt => {
      const { name, value } = evt.target;
      setFormData(formData => ({
        ...formData,
        [name]: value
      }));
    };
  
    const gatherInput = evt => {
      evt.preventDefault();
      if(formData !== ''){
        createBox({ ...formData, id: uuid() });
      } else {
        createBox({ id: uuid() });
      }
      
      setFormData(init);
    };
  
    return (
      <div>
        <form onSubmit={gatherInput}>
          <div>
            <label htmlFor="height">Height</label>
            <input
              onChange={handleChange}
              type="text"
              name="height"
              value={formData.height}
              id="height"
            />
          </div>
          <div>
            <label htmlFor="width">Width</label>
            <input
              onChange={handleChange}
              type="text"
              name="width"
              id="width"
              value={formData.width}
            />
          </div>
          <div>
            <label htmlFor="backgroundColor">Background Color</label>
            <input
              onChange={handleChange}
              type="text"
              name="backgroundColor"
              value={formData.backgroundColor}
              id="backgroundColor"
            />
          </div>
          <button id="newBoxButton">Add a box</button>
        </form>
      </div>
    );
  }

export default NewBoxForm;