/*-----SlotMachine API for getting values from server ------ */
/*-----only returns values  , So kept it as a helper fn----- */

import axios from "axios";

export default async function getValues(method, params) {
  const response = await axios({
    method: method,
    url: "/slotmachine/result",
    headers: { "Content-type": "application/json" },
    params: params,
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
  return response;
}
