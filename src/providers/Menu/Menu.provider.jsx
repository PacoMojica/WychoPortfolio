import { useState, useContext, createContext } from 'react';


const MenuContext = createContext(null);

function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error(`Can't use "useMenu" without an MenuProvider!`);
  }
  return context;
}

function MenuProvider({ children }) {
  const [activeItem, setActiveItem] = useState('');

  const contextValue = {
    activeItem,
    setActiveItem,
  };

  return (
    <MenuContext.Provider value={contextValue}>
      {children}
    </MenuContext.Provider>
  );
}

export { useMenu };
export default MenuProvider;
