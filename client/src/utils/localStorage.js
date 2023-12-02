export const getSavedBookIds = () => {
  const savedBooks = localStorage.getItem('saved_books');
  const savedBookIds = savedBooks ? JSON.parse(savedBooks) : [];
  return savedBookIds;
};

export const saveBookIds = (bookIdArr) => {
  if (bookIdArr.length) {
    localStorage.setItem('saved_books', JSON.stringify(bookIdArr));
  } else {
    localStorage.removeItem('saved_books');
  }
};

export const removeBookId = (bookId) => {
  const savedBooks = localStorage.getItem('saved_books');
  const savedBookIds = savedBooks ? JSON.parse(savedBooks) : null;

  if (!savedBookIds) {
    return false;
  }

  const updatedSavedBookIds = savedBookIds.filter(
    (savedBookId) => savedBookId !== bookId
  );
  localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));

  return true;
};