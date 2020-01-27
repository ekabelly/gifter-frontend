import he from './locales/he.json';


// 'hello.world'

export default key => {
  const keysArr = key.split('.');
  let current = '';
  for (const keyItr of keysArr) {
    current = current[keyItr] || he[keyItr];
    if(!current){
      console.warn(`couldn't find word in path ${key}`)
      return key;
    }
  }
  return current;
};