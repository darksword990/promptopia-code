import Feed from '@components/Feed'


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="" />
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reprehenderit, neque sit rerum quibusdam eos adipisci rem vel odit beatae, fugit harum voluptates quo maxime deserunt ex totam molestias nam.
        </p>

        <Feed />
    </section>
  )
}

export default Home