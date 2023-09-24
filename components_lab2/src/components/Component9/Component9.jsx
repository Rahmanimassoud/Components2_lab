
import { useState } from 'react';
import './index.css'

const Component9 = () => {

    const [isExpanded, setIsExpanded] = useState(true);


    const toggleSidebar = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className={`container ${isExpanded ? 'expanded' : ''}`}>
        <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <button className="toggle-button" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
      </div>
    )
};

export default Component9;
