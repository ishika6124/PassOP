import axios from 'axios'

const API_URL = 'http://localhost:3000/api/passwords/'

// Create new goal
const createpassOp = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

// Get user goals
const getpassOp = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deletepassOp = async (passOpId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + passOpId, config)

  return response.data
}
const updatepassOp = async (passOpId, updatedData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + passOpId, updatedData, config);
  return response.data;
};

const goalService = {
  createpassOp,
  getpassOp,
  deletepassOp,
  updatepassOp,
}

export default goalService