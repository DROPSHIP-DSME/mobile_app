import axios from 'axios';

/*
  Method: search API calling
  Feature: It handles unnecessary api call & provide robustness & maintain caching
*/

const resources = {};

const makeSearchRequestCreator = () => {
    let cancel;
    return async query => {
        return new Promise(async (resolve, reject) => {
            let authToken = global.authToken || null;
            let headers = {
                Authorization: authToken,
                'Content-Type': 'application/json',
            };
            if (cancel) {
                // Cancel the previous request before making a new request
                cancel.cancel();
            }
            // Create a new CancelToken
            cancel = axios.CancelToken.source();
            try {
                if (resources[query]) {
                    // Return result if it exists
                    resolve(resources[query])
                }
                const res = await axios(query, { cancelToken: cancel.token, headers: headers });
                const result = res.data;
                // Store response
                resources[query] = result;
                resolve(result);
            } catch (error) {
                if (axios.isCancel(error)) {
                    // Handle if request was cancelled
                    if (resources[query]) {
                        // Return result if it exists
                        resolve(resources[query])
                    }
                    console.log('Request canceled', error.message);
                } else {
                    // Handle usual errors
                    console.log('Something went wrong: ', error.message);
                }
            }
        })
    }
};

export const search = makeSearchRequestCreator()