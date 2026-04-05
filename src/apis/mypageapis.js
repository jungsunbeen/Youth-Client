import { getMockPortfolio } from "./mockData";

export const myInfo = async () => {
  const portfolio = getMockPortfolio();
  return {
    username: portfolio.username,
    first_name: portfolio.username,
    email: portfolio.basic_information.email,
    college: portfolio.basic_information.school_major,
  };
};
