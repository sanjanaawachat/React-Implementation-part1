import React from 'react'

const Que1 = () => {
    return (
        <>
            <h1>Difference between Axios and Fetch</h1>
            One of the fundamental tasks of any web application is to communicate with servers through the HTTP protocol. This can be easily achieved using Fetch or Axios. Fetch and Axios are very similar in functionality. Some developers prefer Axios over built-in APIs for its ease of use. The Fetch API is perfectly capable of reproducing the key features of Axios.
                Fetch: The Fetch API provides a fetch() method defined on the window object. It also provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline (requests and responses). The fetch method has one mandatory argument- the URL of the resource to be fetched. This method returns a Promise that can be used to retrieve the response of the request. 

Axios:--------------------------
                Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests. 
        </>
    )
    }
export default Que1;
