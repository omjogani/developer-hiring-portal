import "./tagInput.css";
import { useEffect, useState } from "react";

const TagInputAdd = ({handleAddTechStack}) => {
  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
    let tempList = [...tags, value]
    handleAddTechStack(tempList);
  }


  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
    let tempList = [...tags];
    if (index > -1) {
      tempList.splice(index, 1);
    }
    handleAddTechStack(tempList);
  }

  return (
    <div className="tags-input-container">
      {tags.map((tag, index) => (
        <div className="tag-item" key={index}>
          <span className="text">{tag}</span>
          <span onClick={() => removeTag(index)} className="close">
            &times;
          </span>
        </div>
      ))}
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className="text-input"
        placeholder="Write Tech-Stack..."
      />
    </div>
  );
};

export default TagInputAdd;
