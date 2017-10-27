function executeGraphQLQuery(query, variables = {}){
    return window.fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
            "Authorization": "YOUR TOKEN - PLACE HERE"
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    })
        .then(response => response.json());
}

export default executeGraphQLQuery;