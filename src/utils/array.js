function removeObjectFromArrayById(arr, id) {
  const index = arr.findIndex((el) => el.id === id);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}

export { removeObjectFromArrayById };