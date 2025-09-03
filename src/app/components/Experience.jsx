"use client";

export default function Experience({ reference }) {
  return (
    <section ref={reference} className="py-16 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        {/* Experience Card 1 */}
        <div className="card bg-base-200 shadow-lg mb-8 p-6">
          <div className="flex justify-between flex-wrap">
            <h3 className="font-bold text-xl">Vocational Trainee</h3>
            <span className="text-sm opacity-70">May 2022 – June 2022</span>
          </div>
          <p className="italic opacity-80">
            M.P. Power Generating Company Limited, Sarni — Sarni, Madhya Pradesh
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>
              Completed a four-week vocational training in a thermal power plant,
              in Electrical Maintenance Department Unit 4.
            </li>
            <li>
              Took readings of high-tension motors, contributing to efficient
              electrical maintenance.
            </li>
            <li>
              Evaluated diesel generator functionality, gaining hands-on
              experience in diagnostics and troubleshooting.
            </li>
          </ul>
        </div>

        {/* Experience Card 2 */}
        <div className="card bg-base-200 shadow-lg p-6">
          <div className="flex justify-between flex-wrap">
            <h3 className="font-bold text-xl">System Engineer</h3>
            <span className="text-sm opacity-70">June 2024 – Present</span>
          </div>
          <p className="italic opacity-80">
            Tata Consultancy Services — Mumbai, Maharashtra
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>
              Led front-end development for banking applications using React.js,
              JavaScript, HTML5, and CSS3, improving UX and reducing load times
              by 9s.
            </li>
            <li>
              Managed CR support for production applications, resolving
              high-priority issues within SLA and maintaining 99.9% uptime.
            </li>
            <li>
              Resolved critical production issues through troubleshooting and
              implemented solutions while participating in Agile ceremonies.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
