const Experience = () => {
  return (
    <div className="mx-20 mt-20">
      <div className="flex justify-center">
        <span className="bg-gray-200 text-base border-solid rounded-xl px-2 py-1">
          About me
        </span>
      </div>
      <div className="flex w-1/2 justify justify-between gap-8">
        <div className="relative">
          <div className="w-[280px] h-[320px] bg-gray-400 border-solid-[0px] absolute -z-10 -right-5 -bottom-5"></div>
          <img
            src="./image/profile.jpg"
            alt="picture"
            className="w-[280px] h-[320px] border-solid border-8 border-white "
          />
        </div>
        <div className="flex-1 gap-8">
          <h1>Curious about me? Here you have it:</h1>
          <h6>
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </h6>
          <h6>
            Since starting my web development journey in 2015, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </h6>
          <h6>
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </h6>
          <h6>Finally, some quick bits about me.</h6>
        </div>
      </div>
    </div>
  );
};

export default Experience;
