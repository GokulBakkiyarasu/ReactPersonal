import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("tamil");

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider
      value={{ language: language, changeLanguage: changeLanguage }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}

//higher order component

// export const withLanguageContext = (Component) => (props) => {
//   return (
//     <LanguageContext.Consumer>
//       {(value) => <Component LanguageContext={value} {...props} />}
//     </LanguageContext.Consumer>
//   );
// };
