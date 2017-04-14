/**
 * Created by Mihail on 4/14/2017.
 */
import Post from './Post';

export default function ({className, data}) {
  return (
    <div className={className}>
      {data.map(post => (
        <Post key={post.id} post={post}/>
      ))
      }
    </div>
  );
}