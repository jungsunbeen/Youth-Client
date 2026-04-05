import {
  getMockReviewList,
  getMockReviewById,
  getMockNoticeList,
  getMockNoticeById,
  getMockSearch,
  toggleMockLiked,
  toggleMockSaved,
  addMockReviewComment,
  getMockReviewComments,
} from "./mockData";

export const baseURL = "";

// 리뷰 가져오기
export const getReview = async () => {
  return getMockReviewList();
};

// id로 리뷰 가져오기
export const getReviewById = async (id) => {
  return getMockReviewById(id);
};

// 공고 가져오기
export const getNotice = async () => {
  return getMockNoticeList();
};

// 공고 가져오기
export const getNoticeById = async (notice_id) => {
  return getMockNoticeById(notice_id);
};

// 카테고리에 따른 공고,후기 가져오기
export const getSearchByCategory = async (category) => {
  return getMockSearch(`large_category=${category}`);
};

// 카테고리에 따른 후기 가져오기
export const getReviewByCategory = async (category) => {
  const all = getMockReviewList();
  if (!category) return all;
  return all.filter((r) => r.large_category === category);
};

// 리뷰 좋아요하기
export const getHandleReviewLike = async (notice_id) => {
  return toggleMockLiked('review', notice_id);
};

// 공고 좋아요하기
export const getHandleNoticeLike = async (notice_id) => {
  return toggleMockLiked('notice', notice_id);
};

// 리뷰 보관함에 담기
export const getHandleReviewSaved = async (notice_id) => {
  return toggleMockSaved('review', notice_id);
};

// 공고 보관함에 담기
export const getHandleNoticeSaved = async (notice_id) => {
  return toggleMockSaved('notice', notice_id);
};

// 검색하기
export const getSearchByKeyword = async (keyword) => {
  return getMockSearch(keyword);
};

// 일반 후기글 작성하기
export const postMyReview = async (data) => {
  return { id: 999, message: '후기가 등록되었습니다.' };
};

// 후기글 댓글 가져오기
export const getReviewComment = async (review_id) => {
  return getMockReviewComments(review_id);
};

// 후기글 댓글 작성하기
export const postReviewComment = async (review_id, comment) => {
  return addMockReviewComment(review_id, comment);
};

// 후기글 작성하기
export const postReview = async (data) => {
  return { id: 999, message: '후기가 등록되었습니다.' };
};
