export default function sortBySalary(items) {
  return items.sort((a, b) => {
    if (a.salary > b.salary) {
      return 1;
    }
    if (a.salary < b.salary) {
      return -1;
    }
    if (a.salary === b.salary) {
      return a.id - b.id;
    }
    return 0;
  });
}
