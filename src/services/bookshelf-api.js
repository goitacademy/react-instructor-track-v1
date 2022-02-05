import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchAuthors = async () => {
  const response = await axios.get('/authors');
  return response.data;
};

export const fetchAuthorById = async id => {
  const response = await axios.get(`/authors/${id}?_embed=books`);
  return response.data;
};

export const fetchBooks = async () => {
  const response = await axios.get('/books');
  return response.data;
};

export const fetchBookById = async id => {
  const response = await axios.get(`/books/${id}?_expand=author`);
  return response.data;
};
