import {
  getMockPortfolio,
  updateMockPortfolio,
  addPortfolioText,
  removePortfolioText,
  getMockPortfolioReviews,
} from "./mockData";

// put FormData
export const putFormData = async (formData) => {
  return updateMockPortfolio(formData);
};

// AboutMe
export const postThisIsMe = async (content) => {
  return addPortfolioText('this_is_me', content?.content || content);
};

export const delThisIsMe = async (id) => {
  return removePortfolioText('this_is_me', id);
};

// Bingo
export const postBingo = async (content) => {
  return addPortfolioText('bingo_complete', content?.content || content);
};

export const delBingo = async (id) => {
  return removePortfolioText('bingo_complete', id);
};

// Others
export const postOthers = async (content) => {
  return addPortfolioText('other_complete', content?.content || content);
};

export const delOthers = async (id) => {
  return removePortfolioText('other_complete', id);
};

// 전체 데이터 get
export const getData = async () => {
  return getMockPortfolio();
};

// 후기글 전체 get
export const getReview = async () => {
  return getMockPortfolioReviews(false);
};

// 후기글 빙고 인증 후기 get
export const getCertifiedReview = async () => {
  return getMockPortfolioReviews(true);
};
