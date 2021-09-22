import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchIssues } from "../actions";

class IssueList extends React.Component {
  componentDidMount() {
    this.props.fetchIssues();
  }

  renderAdmin(issue) {
    if (issue.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/issue/edit/${issue.id}`} className="ui button grey">
            EDIT
          </Link>

          <Link to={`issue/delete/${issue.id}`} className="ui button teal">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.issues.map((issue) => {
      return (
        <div className="item" key={issue.id}>
          {this.renderAdmin(issue)}
          <i className="large icon user outline" />
          <div className="ui content">
            <Link to={`/issue/${issue.id}`} className="ui header black">
              {issue.title}
            </Link>
            <div className="description">{issue.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/issue/new" className="ui button grey">
            Create a new issue
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{ maxWidth: "900px" }}>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    issues: Object.values(state.issues),
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchIssues })(IssueList);
