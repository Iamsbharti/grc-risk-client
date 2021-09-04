export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://grc-risk-server.herokuapp.com/api/v1/risk"
    : "http://localhost:8080/api/v1/risk";
