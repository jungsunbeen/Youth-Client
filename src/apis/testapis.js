import {
  getMockTypeResult,
  mock,
  getMockHomeData,
  setMockBingoFromPayload,
  setMockBingoTodo,
  getMockBingoLocation,
  getMockActivityInfo,
  getMockReviewRelated,
  toggleMockTodo,
  getMockDdayDisplay,
  setMockDday,
} from "./mockData";

export const baseURL = "";

// 테스트 답변 입력하기
export const postTest = async (reason) => {
  return getMockTypeResult('planner');
};

// 휴아유 추천 게시물 가져오기
export const getHueInfo = async () => {
  return mock.activitySeed.map((a) => ({
    id: a.id,
    title: a.title,
    images: a.images,
    is_notice: a.is_notice,
  }));
};

// 빙고 가져오기
export const getBingo = async () => {
  return getMockHomeData();
};

// 빙고 등록하기
export const postBingo = async (bingoData) => {
  return setMockBingoFromPayload(bingoData);
};

// 빙고 수정하기
export const putBingoloc = async (location, todo) => {
  return setMockBingoTodo(location, todo);
};

// 최신순
export const getUpcomming = async () => {
  return {
    results: mock.activitySeed.map((a) => ({
      id: a.id,
      title: a.title,
      image: a.images[0]?.image || '',
      is_notice: a.is_notice,
    })),
  };
};

// 보관함
export const getSaved = async () => {
  return {
    stored_reviews: mock.activitySeed
      .filter((a) => a.saved)
      .map((a) => ({
        id: a.id,
        title: a.title,
        image: a.images[0]?.image || '',
        is_notice: a.is_notice,
      })),
  };
};

// 추천순
export const getTypeRecommend = async (type) => {
  return {
    data: mock.activitySeed.map((a) => ({
      id: a.id,
      title: a.title,
      image: a.images[0]?.image || '',
      is_notice: a.is_notice,
    })),
  };
};

// 빙고 담기 내용 가져오기
export const getBingoloc = async (location) => {
  return getMockBingoLocation(location);
};

// I 눌렀을 때 정보 가져오기
export const getInfo = async (id) => {
  return getMockActivityInfo(id);
};

// I 눌렀을 때 후기 가져오기
export const getReviewInInfo = async (id) => {
  return getMockReviewRelated(id);
};

// 개별 투두리스트 수정
export const postTodolist = async (todo_id, postmessage) => {
  return toggleMockTodo(todo_id, postmessage);
};

// 디데이 계산
export const putDday = async (day) => {
  return setMockDday(day);
};

export const getDday = async () => {
  return getMockDdayDisplay();
};

// 유형화테스트 결과만 보이는 화면
export const getViewtype = async (type) => {
  return getMockTypeResult(type);
};
