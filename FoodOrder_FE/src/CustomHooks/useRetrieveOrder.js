import { useState } from "react";
import { authApi, AUTH_TOKEN } from "@/src/APIs/AxiosInst";
import Endpoints from "@/src/APIs/Endpoints";

export function useRetrieveOrder() {
  const [state, setState] = useState(null);

  function setOrder(id) {
    if (typeof id !== 'number')
        throw Error('useRetrieveOrder - setOrder - id must be number')

    if (isNaN(id))
        throw Error('useRetrieveOrder - setOrder - id must not be NaN')

    async function retrieveOrder() {
      try {
        const resp = await authApi(AUTH_TOKEN).get(
          Endpoints.RETRIEVE_ORDER_BY_ID(id)
        );

        if (resp.status === 200) {
          setState(resp.data);
        } else {
          throw Error(resp.data);
        }
      } catch (ex) {
        console.error(Error(ex).message);
      }
    }
    retrieveOrder();
  }

  const outProps = {
    order: state,
    setOrder: setOrder,
  };

  return outProps;
}
