export const getDaysLeft = (dueDate) => {
  const today = new Date();

  const due = new Date(dueDate);

  const diff =
    due.getTime() - today.getTime();

  return Math.ceil(
    diff / (1000 * 60 * 60 * 24)
  );
};