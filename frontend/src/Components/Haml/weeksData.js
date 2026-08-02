const normalizeWeeks = (data) =>
  (Array.isArray(data) ? data : [])
    .map((item) => {
      const weekNumber = String(item?.weekNumber || "");
      const numericWeek = Number(weekNumber.replace(/^week_/, ""));

      return {
        ...item,
        numericWeek: Number.isNaN(numericWeek) ? null : numericWeek,
      };
    })
    .filter((item) => item.numericWeek !== null)
    .filter((item) => item.numericWeek >= 1 && item.numericWeek <= 41)
    .sort((a, b) => a.numericWeek - b.numericWeek)
    .filter((item, index, array) => array.findIndex((entry) => entry.numericWeek === item.numericWeek) === index);

let weeksCache = null;
let pendingPromise = null;

export async function loadWeeksData() {
  if (weeksCache) {
    return weeksCache;
  }

  if (pendingPromise) {
    return pendingPromise;
  }

  pendingPromise = fetch("/weeksdata")
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      const normalizedWeeks = normalizeWeeks(data);
      weeksCache = normalizedWeeks;
      return normalizedWeeks;
    })
    .catch((error) => {
      pendingPromise = null;
      throw error;
    });

  return pendingPromise;
}
