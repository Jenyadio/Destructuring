export default function showSpecialAttack(character) {
  const arr = [];
  const arrSpecial = character.special;
  arrSpecial.forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    arr.push({
      id, name, icon, description,
    });
  });
  return arr;
}
