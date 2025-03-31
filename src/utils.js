export const convertTo12HourFormat = (time24) => {
  if (!time24) return "";
  let [hours, minutes] = time24.split(":").map(Number);

  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours || 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes} ${period}`;
};

const seededRandom = (n) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = n % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

export const submitAPI = (formData) => {
  console.log(formData);
  return true;
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date();
  return { times: fetchAPI(today) };
};

export const toTwoDecimals = (number) => {
  return parseFloat(number).toFixed(2);
};
