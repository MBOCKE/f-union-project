export const getRecruitmentDeadline = () =>
  new Date(2026, 9, 31, 23, 59, 59).getTime();

export const isRecruitmentClosed = () =>
  Date.now() >= getRecruitmentDeadline();
