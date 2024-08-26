

export const Netflix_logo =
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OpenAiKey = process.env.REACT_APP_OPENAI_KEY;