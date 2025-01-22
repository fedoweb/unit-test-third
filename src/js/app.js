import fetchData from './http';

export async function getLevel(userId) {
  const response = await fetchData(`https://server/user/${userId}`);

  if (response.status === 'ok') {
     return `Ваш текущий уровень: ${response.level}`; 
  }
  
  return `Информация об уровне временно недоступна`;
}