import axios from "axios";

const API_URL = "http://localhost:5000/tickets";

const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, ticketData, config);

  return response.data;
};

const ticketService = {
  createTicket,
};

export default ticketService;
