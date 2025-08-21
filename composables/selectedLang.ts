export const useSelectedLang = () => {
  const selectedLang = useState('lang', () => null); 
  return { selectedLang };
};