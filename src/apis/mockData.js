const clone = (value) => JSON.parse(JSON.stringify(value));

const createSvgDataUri = (label, background, color = '#FFFFFF') => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${background}" />
          <stop offset="100%" stop-color="#A5B0D0" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" rx="32" fill="url(#g)" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="${color}">
        ${label}
      </text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const imageMap = {
  blue: createSvgDataUri('HUE', '#1E3A8A'),
  teal: createSvgDataUri('HUE', '#0F766E'),
  purple: createSvgDataUri('HUE', '#7C3AED'),
  rose: createSvgDataUri('HUE', '#E11D48'),
  amber: createSvgDataUri('HUE', '#D97706'),
  green: createSvgDataUri('HUE', '#16A34A'),
  slate: createSvgDataUri('HUE', '#334155'),
  sky: createSvgDataUri('HUE', '#0284C7'),
  pink: createSvgDataUri('HUE', '#DB2777'),
};

const activitySeed = [
  {
    id: 1,
    title: '캠퍼스 굿즈 마켓 참여',
    large_category: 'CAREER',
    large_category_display: '채용(인턴)',
    author: '휴알유 편집팀',
    created_at: '2026-04-01',
    host: '휴알유',
    area: '서울',
    employment_form: '인턴',
    duty: '디자인',
    field: '브랜딩',
    app_fee: '0',
    app_due: '2026-04-20',
    start_date: '2026-05-01',
    end_date: '2026-06-30',
    prep_period: '2026-04-10 ~ 2026-04-30',
    content: '캠퍼스 내 팝업스토어 운영을 돕는 프로젝트입니다.\n브랜드 홍보와 판매 경험을 함께 쌓을 수 있습니다.\n현장 운영과 굿즈 디스플레이를 경험해보세요.',
    procedure: '1. 서류 접수\n2. 간단한 인터뷰\n3. 합격 발표',
    detailplans: [
      { content: '팝업스토어 운영안 확인하기' },
      { content: '홍보 포스터 초안 만들기' },
    ],
    images: [{ image_id: 1, image: imageMap.blue }],
    likes: [1, 2, 3],
    saved: true,
    is_liked_by_user: true,
    is_notice: true,
    notice_id: 11,
    review_id: 101,
  },
  {
    id: 2,
    title: '토익 스터디 챌린지',
    large_category: 'CERTIFICATE',
    large_category_display: '자격증',
    author: '휴알유 편집팀',
    created_at: '2026-04-02',
    host: 'YBM',
    app_fee: '39000',
    app_due: '2026-05-12',
    date: '2026-05-26',
    prep_period: '2026-04-15 ~ 2026-05-25',
    content: '토익 공부를 함께 할 스터디 챌린지입니다.\n매일 인증과 미션으로 꾸준함을 만들 수 있어요.',
    procedure: '1. 신청서 작성\n2. 오리엔테이션\n3. 주간 미션 수행',
    detailplans: [
      { content: '단어장 100개 외우기' },
      { content: '모의고사 2회 풀기' },
    ],
    images: [{ image_id: 1, image: imageMap.teal }],
    likes: [1],
    saved: false,
    is_liked_by_user: false,
    is_notice: true,
    notice_id: 12,
    review_id: 102,
  },
  {
    id: 3,
    title: '비대면 서포터즈 모집',
    large_category: 'OUTBOUND',
    large_category_display: '대외활동',
    author: '휴알유 편집팀',
    created_at: '2026-04-03',
    host: '청년지원센터',
    area: '비대면',
    field: '콘텐츠 제작',
    app_due: '2026-05-08',
    start_date: '2026-05-15',
    end_date: '2026-07-15',
    prep_period: '2026-04-20 ~ 2026-05-10',
    content: '온라인 채널을 운영하며 콘텐츠를 만드는 서포터즈입니다.\n재택으로도 참여할 수 있어요.',
    procedure: '1. 지원서 제출\n2. 온라인 인터뷰\n3. 발대식 참석',
    detailplans: [
      { content: '월간 콘텐츠 캘린더 만들기' },
      { content: 'SNS 카드뉴스 제작하기' },
    ],
    images: [{ image_id: 1, image: imageMap.purple }],
    likes: [1, 2],
    saved: true,
    is_liked_by_user: false,
    is_notice: true,
    notice_id: 13,
    review_id: 103,
  },
  {
    id: 4,
    title: '브랜드 아이디어 공모전',
    large_category: 'CONTEST',
    large_category_display: '공모전',
    author: '휴알유 편집팀',
    created_at: '2026-04-04',
    host: '창업진흥원',
    app_due: '2026-06-01',
    field: '기획/아이디어',
    content: '신선한 브랜드 아이디어를 제출하는 공모전입니다.\n기획 경험을 쌓고 포트폴리오에 남겨보세요.',
    procedure: '1. 아이디어 접수\n2. 1차 심사\n3. 본선 발표',
    detailplans: [
      { content: '문제 정의 한 줄로 정리하기' },
      { content: '타깃 사용자 페르소나 만들기' },
    ],
    images: [{ image_id: 1, image: imageMap.rose }],
    likes: [1, 2, 3, 4],
    saved: false,
    is_liked_by_user: true,
    is_notice: true,
    notice_id: 14,
    review_id: 104,
  },
  {
    id: 5,
    title: '주말 원데이 드로잉',
    large_category: 'HOBBY',
    large_category_display: '취미',
    author: '휴알유 편집팀',
    created_at: '2026-04-05',
    host: '아트살롱',
    area: '서울',
    field: '그림 및 공예',
    content: '초보자도 참여 가능한 원데이 드로잉 클래스입니다.\n가볍게 취미를 시작해보세요.',
    procedure: '1. 신청\n2. 재료 안내\n3. 클래스 참여',
    detailplans: [
      { content: '드로잉 도구 준비하기' },
      { content: '완성작 사진 남기기' },
    ],
    images: [{ image_id: 1, image: imageMap.amber }],
    likes: [1],
    saved: false,
    is_liked_by_user: false,
    is_notice: true,
    notice_id: 15,
    review_id: 105,
  },
  {
    id: 6,
    title: '국내 미니 여행 챌린지',
    large_category: 'TRAVEL',
    large_category_display: '여행',
    author: '휴알유 편집팀',
    created_at: '2026-04-05',
    host: '트래블버디',
    area: '강원',
    content: '주말 동안 국내 여행을 떠나 기록을 남기는 미션입니다.\n작은 여행도 멋진 포트폴리오가 됩니다.',
    procedure: '1. 장소 선정\n2. 동행자 모집\n3. 후기 기록',
    detailplans: [
      { content: '코스 지도 만들기' },
      { content: '여행 사진 정리하기' },
    ],
    images: [{ image_id: 1, image: imageMap.green }],
    likes: [1, 2],
    saved: true,
    is_liked_by_user: false,
    is_notice: true,
    notice_id: 16,
    review_id: 106,
  },
  {
    id: 7,
    title: '독서로 자기계발 루틴',
    large_category: 'SELFIMPROVEMENT',
    large_category_display: '자기계발',
    author: '휴알유 편집팀',
    created_at: '2026-04-05',
    host: '리딩클럽',
    field: '독서',
    content: '한 달 동안 책 한 권을 읽고 기록하는 루틴형 활동입니다.\n꾸준함을 키우기 좋아요.',
    procedure: '1. 도서 선정\n2. 읽기 기록\n3. 요약 작성',
    detailplans: [
      { content: '한 줄 요약 남기기' },
      { content: '인상 깊은 문장 메모하기' },
    ],
    images: [{ image_id: 1, image: imageMap.slate }],
    likes: [1, 2, 3],
    saved: false,
    is_liked_by_user: true,
    is_notice: true,
    notice_id: 17,
    review_id: 107,
  },
  {
    id: 8,
    title: '도심 속 1일 휴식',
    large_category: 'REST',
    large_category_display: '휴식',
    author: '휴알유 편집팀',
    created_at: '2026-04-05',
    host: '쉼표 프로젝트',
    area: '제주',
    content: '한 템포 쉬어가는 하루를 계획하는 활동입니다.\n스스로를 돌보는 시간을 만들어보세요.',
    procedure: '1. 쉬고 싶은 방식 고르기\n2. 일정 비우기\n3. 산책과 휴식',
    detailplans: [
      { content: '휴식 장소 정하기' },
      { content: '오늘의 컨디션 기록하기' },
    ],
    images: [{ image_id: 1, image: imageMap.sky }],
    likes: [1],
    saved: false,
    is_liked_by_user: false,
    is_notice: true,
    notice_id: 18,
    review_id: 108,
  },
  {
    id: 9,
    title: '포트폴리오 리프레시 데이',
    large_category: 'CAREER',
    large_category_display: '채용(인턴)',
    author: '휴알유 편집팀',
    created_at: '2026-04-05',
    host: '청년커리어랩',
    duty: '콘텐츠 기획',
    employment_form: '인턴',
    area: '서울',
    app_due: '2026-06-10',
    start_date: '2026-06-20',
    end_date: '2026-08-20',
    prep_period: '2026-05-15 ~ 2026-06-15',
    content: '커리어 포트폴리오를 함께 점검하는 활동입니다.\n이력과 기록을 정리하기 좋아요.',
    procedure: '1. 자료 정리\n2. 피드백\n3. 최종 공유',
    detailplans: [
      { content: '자기소개 문장 정리하기' },
      { content: '성과 항목 업데이트하기' },
    ],
    images: [{ image_id: 1, image: imageMap.pink }],
    likes: [1, 2],
    saved: true,
    is_liked_by_user: false,
    is_notice: true,
    notice_id: 19,
    review_id: 109,
  },
];

const createBingoBoardItem = (activity, location) => ({
  location,
  id: activity.id,
  title: activity.title,
  large_category: activity.large_category,
  large_category_display: activity.large_category_display,
  choice: '1',
  todo: activity.detailplans.map((item, index) => ({
    id: `${activity.id}-${index + 1}`,
    title: item.content,
    is_completed: index % 2 === 0,
  })),
});

const bingoBoardSeed = [
  createBingoBoardItem(activitySeed[0], 0),
  createBingoBoardItem(activitySeed[1], 1),
  createBingoBoardItem(activitySeed[2], 2),
  { location: 3, id: '', title: '', choice: '0', todo: [], large_category: '', large_category_display: '' },
  { location: 4, id: '', title: '', choice: '0', todo: [], large_category: '', large_category_display: '' },
  { location: 5, id: '', title: '', choice: '0', todo: [], large_category: '', large_category_display: '' },
  { location: 6, id: '', title: '', choice: '0', todo: [], large_category: '', large_category_display: '' },
  { location: 7, id: '', title: '', choice: '0', todo: [], large_category: '', large_category_display: '' },
  createBingoBoardItem(activitySeed[8], 8),
];

const portfolioSeed = {
  username: '선빈',
  basic_information: {
    modifier: '도전을 즐기는 휴학러',
    birth: '2001-04-05',
    school_major: 'OO대학교 경영학과',
    phone_number: '010-1234-5678',
    email: 'demo@hueareyou.dev',
    image: imageMap.blue,
  },
  this_is_me: [
    { id: 1, content: '새로운 활동을 발견하면 바로 기록합니다.' },
    { id: 2, content: '휴학 기간에도 꾸준히 루틴을 만들고 있습니다.' },
  ],
  bingo_complete: [
    { id: 1, content: '빙고판 3칸을 완성했습니다.' },
    { id: 2, content: '주말마다 성장 기록을 남기고 있습니다.' },
  ],
  other_complete: [
    { id: 1, content: '동아리 발표 자료를 직접 제작했습니다.' },
    { id: 2, content: '개인 블로그를 개설해 글을 연재했습니다.' },
  ],
};

let portfolioState = clone(portfolioSeed);
let reviewState = activitySeed.map((activity, index) => ({
  id: 101 + index,
  title: `${activity.title} 후기`,
  large_category: activity.large_category,
  large_category_display: activity.large_category_display,
  start_date: activity.start_date,
  end_date: activity.end_date,
  content: `${activity.title}를 직접 참여해본 후기입니다.\n준비 과정과 느낀 점을 정리했습니다.`,
  duty: activity.duty,
  employment_form: activity.employment_form,
  area: activity.area,
  host: activity.host,
  app_fee: activity.app_fee,
  date: activity.date,
  app_due: activity.app_due,
  field: activity.field,
  procedure: activity.procedure,
  likes: new Array(index + 1).fill(0),
  author_id: index + 1,
  author: `작성자${index + 1}`,
  created_at: `2026-04-0${index + 1}`,
  profile: portfolioSeed.basic_information.image,
  saved: index % 2 === 0,
  is_liked_by_user: index % 2 === 1,
  images: activity.images,
  detailplans: activity.detailplans,
  comments: [
    { id: 1, author_name: '휴알유', content: '좋은 후기네요!', created_at: '2026-04-05' },
  ],
  likes_count: index + 1,
  comments_count: 1,
  related_activity_id: activity.id,
}));

let noticeState = activitySeed.filter((activity) => activity.is_notice).map((activity, index) => ({
  id: 201 + index,
  title: `${activity.title} 공고`,
  large_category: activity.large_category,
  large_category_display: activity.large_category_display,
  start_date: activity.start_date,
  end_date: activity.end_date,
  content: `${activity.title}에 대한 상세 공고입니다.\n참여 조건과 일정을 확인해보세요.`,
  duty: activity.duty,
  employment_form: activity.employment_form,
  area: activity.area,
  host: activity.host,
  app_fee: activity.app_fee,
  date: activity.date,
  app_due: activity.app_due,
  field: activity.field,
  procedure: activity.procedure,
  likes: new Array(index + 2).fill(0),
  author_id: index + 11,
  author: `공고담당${index + 1}`,
  created_at: `2026-04-0${index + 1}`,
  profile: portfolioSeed.basic_information.image,
  saved: index % 2 === 0,
  images: activity.images,
  is_notice: true,
  notice_id: activity.notice_id,
  image_url: activity.images[0]?.image || '',
  detailplans: activity.detailplans,
  comments: [],
  related_activity_id: activity.id,
}));

let bingoBoardState = clone(bingoBoardSeed);
let ddayState = {
  rest_school: '2026.03.01',
  return_school: '2026.06.30',
};

let commentsState = reviewState.reduce((acc, review) => {
  acc[review.id] = clone(review.comments || []);
  return acc;
}, {});

const defaultTypeResult = {
  user_type: 'planner',
  user_type_display: '계획형 휴학러',
  content: '휴학 기간에도 계획을 세우며 꾸준히 움직이는 타입입니다.\n작은 목표를 차근차근 완성하는 스타일이에요.\n지금처럼 기록을 남기면 더 큰 성장이 쌓입니다.',
  image: imageMap.blue,
  username: portfolioSeed.username,
};

const typeResults = {
  planner: defaultTypeResult,
  explorer: {
    user_type: 'explorer',
    user_type_display: '탐험형 휴학러',
    content: '새로운 경험을 적극적으로 찾아다니는 타입입니다.\n도전과 이동이 많은 활동에서 에너지를 얻습니다.',
    image: imageMap.teal,
    username: portfolioSeed.username,
  },
  restful: {
    user_type: 'restful',
    user_type_display: '충전형 휴학러',
    content: '쉬는 시간을 통해 에너지를 회복하는 타입입니다.\n휴식과 리듬 조절이 중요한 키워드입니다.',
    image: imageMap.sky,
    username: portfolioSeed.username,
  },
};

const findActivity = (id) => activitySeed.find((item) => String(item.id) === String(id));
const findReview = (id) => reviewState.find((item) => String(item.id) === String(id));
const findNotice = (id) => noticeState.find((item) => String(item.id) === String(id));

const getFiltersFromKeyword = (keyword) => {
  if (!keyword) return {};
  try {
    const searchParams = new URLSearchParams(keyword);
    const filters = {};
    for (const [key, value] of searchParams.entries()) {
      filters[key] = value;
    }
    return filters;
  } catch {
    return { search: keyword };
  }
};

const matchesKeyword = (item, keyword) => {
  if (!keyword) return true;
  const text = [
    item.title,
    item.author,
    item.large_category_display,
    item.large_category,
    item.host,
    item.area,
    item.field,
    item.duty,
    item.employment_form,
    item.content,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return text.includes(String(keyword).toLowerCase());
};

const matchesFilters = (item, filters) => {
  if (filters.large_category && item.large_category !== filters.large_category) return false;
  if (filters.search && !matchesKeyword(item, filters.search)) return false;
  if (filters.field && item.field && !item.field.includes(filters.field)) return false;
  if (filters.area && item.area && !item.area.includes(filters.area)) return false;
  if (filters.start_date && item.start_date && item.start_date < filters.start_date) return false;
  if (filters.end_date && item.end_date && item.end_date > filters.end_date) return false;
  return true;
};

const mapActivityToSummary = (activity) => ({
  id: activity.id,
  title: activity.title,
  image: activity.images[0]?.image || '',
  is_notice: activity.is_notice,
});

const mapActivityToNotice = (notice) => ({
  id: notice.id,
  title: notice.title,
  large_category: notice.large_category,
  large_category_display: notice.large_category_display,
  start_date: notice.start_date,
  end_date: notice.end_date,
  content: notice.content,
  duty: notice.duty,
  employment_form: notice.employment_form,
  area: notice.area,
  host: notice.host,
  app_fee: notice.app_fee,
  date: notice.date,
  app_due: notice.app_due,
  field: notice.field,
  procedure: notice.procedure,
  likes: notice.likes,
  author_id: notice.author_id,
  author: notice.author,
  created_at: notice.created_at,
  profile: notice.profile,
  saved: notice.saved,
  images: notice.images,
  is_notice: true,
  notice_id: notice.notice_id,
  detailplans: notice.detailplans,
});

const mapReviewToDetail = (review) => ({
  id: review.id,
  title: review.title,
  large_category: review.large_category,
  large_category_display: review.large_category_display,
  start_date: review.start_date,
  end_date: review.end_date,
  content: review.content,
  duty: review.duty,
  employment_form: review.employment_form,
  area: review.area,
  host: review.host,
  app_fee: review.app_fee,
  date: review.date,
  app_due: review.app_due,
  field: review.field,
  procedure: review.procedure,
  likes: review.likes,
  author_id: review.author_id,
  author: review.author,
  created_at: review.created_at,
  profile: review.profile,
  saved: review.saved,
  is_liked_by_user: review.is_liked_by_user,
  images: review.images,
  detailplans: review.detailplans,
});

const toCommentsList = (reviewId) => clone(commentsState[reviewId] || []);

const nextId = (items) => (items.length ? Math.max(...items.map((item) => Number(item.id) || 0)) + 1 : 1);

export const mock = {
  clone,
  activitySeed,
  reviewState,
  noticeState,
  portfolioState: () => portfolioState,
  bingoBoardState: () => bingoBoardState,
  ddayState: () => ddayState,
  typeResults,
  findActivity,
  findReview,
  findNotice,
  getFiltersFromKeyword,
  matchesFilters,
  mapActivityToSummary,
  mapActivityToNotice,
  mapReviewToDetail,
  toCommentsList,
  nextId,
  imageMap,
  defaultTypeResult,
};

export const seedDemoSession = () => {
  const tokens = {
    access_token: 'demo-access-token',
    refresh_token: 'demo-refresh-token',
    'token.access_token': 'demo-access-token',
    'token.refresh_token': 'demo-refresh-token',
  };

  Object.entries(tokens).forEach(([key, value]) => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, value);
    }
  });
};

export const getMockTypeResult = (type) => clone(typeResults[type] || defaultTypeResult);

export const getMockDdayDisplay = () => {
  const restDate = new Date(ddayState.rest_school.replace(/\./g, '-'));
  const returnDate = new Date(ddayState.return_school.replace(/\./g, '-'));
  const now = new Date();
  const restDiff = Math.ceil((restDate - now) / (1000 * 60 * 60 * 24));
  const returnDiff = Math.ceil((returnDate - now) / (1000 * 60 * 60 * 24));

  return {
    display: {
      rest_dday_display: `D-${Math.abs(restDiff)}`,
      return_dday_display: `D-${Math.abs(returnDiff)}`,
    },
  };
};

export const setMockDday = (day) => {
  if (day?.rest_school) ddayState.rest_school = day.rest_school;
  if (day?.return_school) ddayState.return_school = day.return_school;
  return getMockDdayDisplay();
};

export const getMockHomeData = () => ({
  username: portfolioState.username,
  start_date: ddayState.rest_school,
  end_date: ddayState.return_school,
  bingo_obj: clone(bingoBoardState),
});

export const setMockBingoFromPayload = (bingoData) => {
  if (bingoData?.start_date) ddayState.rest_school = bingoData.start_date;
  if (bingoData?.end_date) ddayState.return_school = bingoData.end_date;

  if (Array.isArray(bingoData?.bingo_obj)) {
    bingoBoardState = bingoData.bingo_obj.map((item, index) => {
      const activity = findActivity(item.id) || findActivity(item.location + 1) || activitySeed[index] || null;
      return {
        location: index,
        id: item.id || activity?.id || '',
        title: item.title || activity?.title || '',
        large_category: item.large_category || activity?.large_category || '',
        large_category_display: item.large_category_display || activity?.large_category_display || '',
        choice: item.choice ?? (item.title ? '1' : '0'),
        todo: item.todo || activity?.detailplans?.map((plan, todoIndex) => ({
          id: `${activity.id}-${todoIndex + 1}`,
          title: plan.content,
          is_completed: false,
        })) || [],
      };
    });
  }

  return {
    username: portfolioState.username,
    start_date: ddayState.rest_school,
    end_date: ddayState.return_school,
    bingo_obj: clone(bingoBoardState),
  };
};

export const setMockBingoTodo = (location, todo) => {
  const index = Number(location);
  if (!Number.isNaN(index) && bingoBoardState[index]) {
    bingoBoardState[index].todo = todo;
  }
  return clone(bingoBoardState[index]);
};

export const toggleMockTodo = (todoId, postmessage) => {
  let updated = null;
  bingoBoardState = bingoBoardState.map((item) => ({
    ...item,
    todo: (item.todo || []).map((todo) => {
      if (String(todo.id) === String(todoId)) {
        updated = { ...todo, ...(postmessage || {}) };
        return updated;
      }
      return todo;
    }),
  }));
  return updated;
};

export const getMockBingoLocation = (location) => {
  const index = Number(location);
  const item = bingoBoardState[index];
  if (!item || !item.id) {
    const activity = activitySeed[index] || activitySeed[0];
    return {
      bingo_item: mapReviewToDetail(reviewState.find((review) => review.related_activity_id === activity.id) || reviewState[0]),
      todo: activity.detailplans.map((plan, todoIndex) => ({
        id: `${activity.id}-${todoIndex + 1}`,
        title: plan.content,
        is_completed: false,
      })),
    };
  }

  const activity = findActivity(item.id) || activitySeed[index];
  return {
    bingo_item: mapReviewToDetail(activity || reviewState[0]),
    todo: clone(item.todo || []),
  };
};

export const getMockActivityInfo = (id) => {
  const activity = findActivity(id) || activitySeed[0];
  return clone(activity);
};

export const getMockReviewRelated = (id) => {
  const related = reviewState.filter((review) => String(review.related_activity_id) === String(id));
  return { data: clone(related.length ? related : reviewState.slice(0, 3)) };
};

export const getMockReviewList = () => clone(reviewState);
export const getMockNoticeList = () => clone(noticeState);

export const getMockSearch = (keyword) => {
  const filters = getFiltersFromKeyword(keyword);
  const notices = noticeState.filter((item) => matchesFilters(item, filters));
  const reviews = reviewState.filter((item) => matchesFilters(item, filters));
  return {
    notice: clone(notices),
    review: clone(reviews),
  };
};

export const toggleMockSaved = (type, id) => {
  if (type === 'review') {
    reviewState = reviewState.map((item) => (String(item.id) === String(id) ? { ...item, saved: !item.saved } : item));
    return findReview(id);
  }

  noticeState = noticeState.map((item) => (String(item.id) === String(id) ? { ...item, saved: !item.saved } : item));
  return findNotice(id);
};

export const toggleMockLiked = (type, id) => {
  if (type === 'review') {
    reviewState = reviewState.map((item) => {
      if (String(item.id) !== String(id)) return item;
      const isLiked = !item.is_liked_by_user;
      const likes = isLiked ? [...item.likes, item.likes.length + 1] : item.likes.slice(0, Math.max(0, item.likes.length - 1));
      return { ...item, is_liked_by_user: isLiked, likes };
    });
    return findReview(id);
  }

  noticeState = noticeState.map((item) => {
    if (String(item.id) !== String(id)) return item;
    const isLiked = !item.is_liked_by_user;
    const likes = isLiked ? [...item.likes, item.likes.length + 1] : item.likes.slice(0, Math.max(0, item.likes.length - 1));
    return { ...item, is_liked_by_user: isLiked, likes };
  });
  return findNotice(id);
};

export const getMockReviewById = (id) => {
  const review = findReview(id) || reviewState[0];
  return clone(review);
};

export const getMockNoticeById = (id) => {
  const notice = findNotice(id) || noticeState[0];
  return clone(notice);
};

export const updateMockPortfolio = (formData) => {
  const getValue = (key) => {
    if (typeof formData?.get === 'function') {
      return formData.get(key);
    }
    return formData?.[key];
  };

  const nextBasic = {
    ...portfolioState.basic_information,
  };

  ['birth', 'phone_number', 'email', 'modifier', 'school_major'].forEach((key) => {
    const value = getValue(key);
    if (value) nextBasic[key] = value;
  });

  const image = getValue('image');
  if (image) nextBasic.image = typeof image === 'string' ? image : portfolioState.basic_information.image;

  portfolioState = {
    ...portfolioState,
    basic_information: nextBasic,
  };

  return clone(portfolioState);
};

export const addPortfolioText = (key, content) => {
  const list = portfolioState[key] || [];
  const next = {
    id: nextId(list),
    content,
  };
  portfolioState = {
    ...portfolioState,
    [key]: [...list, next],
  };
  return clone(portfolioState[key]);
};

export const removePortfolioText = (key, id) => {
  const list = portfolioState[key] || [];
  portfolioState = {
    ...portfolioState,
    [key]: list.filter((item) => String(item.id) !== String(id)),
  };
  return clone(portfolioState[key]);
};

export const getMockPortfolio = () => clone(portfolioState);

export const getMockPortfolioReviews = (onlyBingo = false) => {
  const reviews = onlyBingo ? reviewState.filter((review) => review.related_activity_id && review.related_activity_id % 2 === 1) : reviewState;
  return clone(reviews);
};

export const addMockReviewComment = (reviewId, comment) => {
  const list = commentsState[reviewId] || [];
  const nextComment = {
    id: nextId(list),
    author_name: portfolioState.username,
    content: comment?.content || '',
    created_at: new Date().toISOString().slice(0, 10),
  };
  commentsState[reviewId] = [...list, nextComment];
  return clone(commentsState[reviewId]);
};

export const getMockReviewComments = (reviewId) => clone(commentsState[reviewId] || []);

export const createMockLoginResponse = (username) => ({
  token: {
    access_token: 'demo-access-token',
    refresh_oken: 'demo-refresh-token',
    refresh_token: 'demo-refresh-token',
  },
  username,
});
