import { Post, Comment, Avatar } from './components/Blog_comp.jsx'

function App() {
  return (
    <>
    <Avatar img="https://media.licdn.com/dms/image/D5603AQGGFQXqyAnTyQ/profile-displayphoto-shrink_800_800/0/1666243418109?e=2147483647&v=beta&t=RZgw616x-Cw_vQEbJd7rC0jp2Y1vUIp4hvtNMQzdxbc"/>
    <Post title="Internship" text="I got an internship!"/>
    <Comment name="Falak" text="Congrats!"/>
    </>
  );
}

export default App;
