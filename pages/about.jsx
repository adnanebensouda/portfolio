const AboutPage = () => {
  return (
    <>
      <h1>Adnane Bensouda - Software Engineer</h1>
      <br />
      <h2> 👋 Hello!</h2>
      <br />
      <p>
        I'm Adnane Bensouda, a passionate software engineer dedicated to
        continuous learning and problem-solving in the world of development. My
        journey began in 2019 when I embarked on a learning path through
        FreeCodeCamp and Udemy, focusing on front-end development. These
        experiences ignited my curiosity and enthusiasm for mastering new
        technologies and techniques in the rapidly evolving field of software
        engineering.
        <br />
        <br />
        📚 Currently, I am furthering my education and skills at ALX,
        specializing in software engineering. This immersive program has
        provided me with a robust foundation in both front-end and back-end
        development, allowing me to tackle complex challenges and create
        innovative solutions.
        <br />
        <br />
        💻 I thrive on the creativity and precision required in front-end
        development, where I can blend aesthetics with functionality to craft
        engaging user experiences. Simultaneously, I find immense satisfaction
        in the logic and efficiency of back-end development, where I work behind
        the scenes to ensure systems run smoothly and securely.
        <br />
        <br />
        🌟 My passion for development extends beyond coding; I am driven by the
        opportunity to solve real-world problems and enhance user interactions
        through technology. I am always eager to explore new frameworks, tools,
        and methodologies that push the boundaries of what's possible in
        software engineering.
        <br />✨ I am dedicated software engineer committed to continuous growth
        and innovation, equipped with the skills and enthusiasm to thrive in
        both front-end and back-end development. Let's build a future where
        technology enhances lives and transforms possibilities!
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
