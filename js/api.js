const BASE_URL = "http://localhost:8080";
const TOY_CARS_URL = `${BASE_URL}/toyCars`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const requestParameters = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      requestParameters.body = JSON.stringify(body);
    }

    return await fetch(`${TOY_CARS_URL}${urlPath}`, requestParameters);
  } catch (error) {
    console.log("request fail, error:", error);
  }
};

export const getAllToyCars = async () => {
  const response = await baseRequest({ method: "GET" });

  return await response.json();
};

export const postToyCars = async (body) =>
  baseRequest({ method: "POST", body });

export const updateToyCars = async (id, body) =>
  baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteToyCar = (id) =>
  baseRequest({ urlPath: `/${id}`, method: "DELETE" });

export const getToyCar = async (id) => {
  const response = await baseRequest({ urlPath: `/${id}`, method: "GET" });

  return await response.json();
};
