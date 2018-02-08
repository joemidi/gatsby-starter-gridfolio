import React from 'react';
import { Index } from 'elasticlunr';

// Graphql query used to retrieve the serialized search index.
export const elasticIndexQuery = graphql`
  query SearchIndexExampleQuery {
    siteSearchIndex {
      index
    }
  }
`;

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    const { siteSearchIndex } = this.props.data;
    this.index = Index.load(siteSearchIndex.index);

    this.state = {
      query: ``,
      results: [],
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const query = event.target.value;
    this.setState({
      query,
      results: this.index.search(query, {}).map(({ ref }) => this.index.documentStore.docs[ref]),
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.onChange} />
        <div>
          <ul>{this.state.results.map(page => <li key={page.slug}>{page.title}</li>)}</ul>
        </div>
      </div>
    );
  }
}
