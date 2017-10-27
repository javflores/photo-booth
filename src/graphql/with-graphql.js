import React from 'react';
import executeGraphQLQuery from './execute-graphql';

const withGraphQL = (query, { variables } = {}) => Component =>
    class extends React.Component {
        state = { loading: true };

        async fetchData(){
            try {
                const json = await executeGraphQLQuery(query, variables);
                this.setState({
                    loading: false,
                    error: null,
                    data: json.data
                });
            } catch(e){
                console.log(e);
                this.setState({
                    loading: false,
                    error: e
                });
            }
        }

        componentDidMount(){
            this.fetchData();
        }

        render(){
            return <Component {...this.props}
                              loading={this.state.loading}
                              data={this.state.data}
                              error={this.state.error} />;
        }
    };

export default withGraphQL;