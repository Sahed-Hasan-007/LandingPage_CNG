export const useSectionCall = () => {
  const activateSection = useState('section',():any=>{}); 
  activateSection.value = 'home';
  return { activateSection };
}
