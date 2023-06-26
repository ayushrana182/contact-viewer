import { httpBase } from "./http.utils";

function get(endpoint: string): unknown {
  return httpBase().get(`${endpoint}`);
}

const httpUtils = {
  get,
};

export default httpUtils;
