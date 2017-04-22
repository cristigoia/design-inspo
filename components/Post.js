/**
 * Created by Mihail on 4/14/2017.
 */
import React, {PropTypes} from 'react';
import moment from 'moment';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      description,
      name,
      thumbnails,
      link,
      created_at,
    } = this.props.post;

    const collectionId = this.props.post.collection_id;

    return (
      <div key={id}>
        <div>
          <img alt={name} src={thumbnails.large} />
        </div>

        <div>
          <div>
            {link
              ? <a href={link}>
                <h3>{name}</h3>
              </a>
              : <h3>{name}</h3>
            }
          </div>
          <h5>Added {moment(created_at).fromNow()}</h5>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}