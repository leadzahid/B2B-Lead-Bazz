import CountUp from "react-countup";

function Count() {
  return (
    <section>
      <div>
        <div className="max-w-7xl mx-auto px-12 py-10 text-purple-900">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center content-between gap-5">
            <div className="flex flex-col items-center bg-purple-50 py-8 rounded">
              <h2 className="sm:text-4xl text-3xl font-bold">
                <CountUp
                  end={1.2}
                  suffix="K+"
                  scrollSpyOnce
                  enableScrollSpy
                  duration={5}
                  decimals={1}
                />
              </h2>
              <p className="sm:text-base text-sm">Projects Done</p>
            </div>
            <div className="flex flex-col items-center bg-purple-50 py-8 rounded">
              <h2 className="sm:text-4xl text-3xl font-bold">
                <CountUp
                  end={500}
                  scrollSpyOnce
                  enableScrollSpy
                  duration={5}
                  suffix="+"
                />
              </h2>
              <p className="sm:text-base text-sm">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center bg-purple-50 py-8 rounded">
              <h2 className="sm:text-4xl text-3xl font-bold">
                <CountUp
                  end={4.9}
                  scrollSpyOnce
                  enableScrollSpy
                  duration={5}
                  decimals={1}
                />
              </h2>
              <p className="sm:text-base text-sm">Client Rating</p>
            </div>
            <div className="flex flex-col items-center bg-purple-50 py-8 rounded">
              <h2 className="sm:text-4xl text-3xl font-bold">
                <CountUp
                  end={6}
                  scrollSpyOnce
                  enableScrollSpy
                  duration={5}
                  suffix="+"
                />
              </h2>
              <p className="sm:text-base text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Count;
