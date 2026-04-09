import Container from "@/components/container";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <Container>
      <Sidebar/>
      <h1 className="header mb-4 mt-32">My name is Jochem.</h1>
      <p>
        Welcome! This is the place where I'm planning to share things about myself and 
        my thoughts on things that I find interesting.
      </p>
      <p>
        As you've probably noticed, the website is still a work in progress. 
        I'm planning on updating the content as soon as possible.
      </p>
      <div className="height-2000"/>
    </Container>
  );
}
