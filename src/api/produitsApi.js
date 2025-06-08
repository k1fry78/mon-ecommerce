import axios from 'axios';
const API_URL = 'https://fakestoreapi.com/products';

export async function getProduits() {
  const res = await axios.get(API_URL);
  return res.data;
}

export async function getProduit(id) {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
}
export async function getProduitsByCategory(category) {
  const res = await axios.get(`${API_URL}/category/${category}`);
  return res.data;
}

// Pour le CRUD complet, tu peux aussi ajouter :
export async function addProduit(produit) {
  const res = await axios.post(API_URL, produit);
  return res.data;
}
export async function updateProduit(id, produit) {
  const res = await axios.put(`${API_URL}/${id}`, produit);
  return res.data;
}
export async function deleteProduit(id) {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
}