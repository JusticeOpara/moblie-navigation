import { useState } from 'react';
import PropTypes from 'prop-types';

const MobileNavigation = ({ navigation }) => {
  const [currentItems, setCurrentItems] = useState(navigation);
  const [navigationStack, setNavigationStack] = useState([]);

  const handleItemClick = (item) => {
    if (item.url) {
      window.location.href = item.url;
    } else if (item.children) {
      setNavigationStack([...navigationStack, currentItems]);
      setCurrentItems(item.children);
    }
  };

  const handleBackClick = () => {
    if (navigationStack.length > 0) {
      const previousItems = navigationStack[navigationStack.length - 1];
      setCurrentItems(previousItems);
      setNavigationStack(navigationStack.slice(0, -1));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {navigationStack.length > 0 && (
        <div className="flex items-center p-4 bg-gray-100 border-b">
          <button onClick={handleBackClick} className="mr-2">

            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.828 11H20v2H7.828l5.364 5.364l-1.414 1.414L4 12l7.778-7.778l1.414 1.414z"/>
            </svg>
          </button>
          <span className="font-semibold">{currentItems[0]?.parentTitle || 'Back'}</span>
        </div>
      )}
      <ul className="divide-y divide-gray-200">
        {currentItems.map((item, index) => (
          <li key={index} className="p-4">
            <button
              onClick={() => handleItemClick(item)}
              className="w-full text-left flex justify-between items-center"
            >
              <span>{item.title}</span>
              {item.children && 
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.828 11H20v2H7.828l5.364 5.364l-1.414 1.414L4 12l7.778-7.778l1.414 1.414z"/>
                </svg>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
MobileNavigation.propTypes = {
  navigation: PropTypes.array.isRequired,
};


export default MobileNavigation;