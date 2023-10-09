const Team = () => {
  return (
    // main container
    <div className="flex justify-center items-center flex-col">
      <p className="pt-28 pb-1">Events Class</p>
      <h1 className="text-2xl font-bold mb-7">Lets Join Your Team</h1>
      <hr className="w-16 text-center h-1 bg-blue-400 mb-4" />

      {/* card container */}
      <div className="grid grid-cols-3">
        <div
          className={`flex w-64 flex-col rounded-lg mx-5 border-slate-300 border-2`}
        >
          <h1>Junior Class</h1>
          <ul className="menu  w-56 p-0 [&_li>*]:rounded-none">
            <li>0 - 2 Winner Rate</li>
            <li>Open For New Team</li>
            <li>Easy Battle</li>
            <li>Certificate</li>
          </ul>
          <div className="btn bg-blue-500 text-white">View Events</div>
        </div>
        <div
          className={`flex w-64 flex-col rounded-lg mx-5 border-slate-300 border-2`}
        >
          <h1>Middle Class</h1>
          <ul className="menu w-56 p-0 [&_li>*]:rounded-none">
            <li>3 - 6 Winner Rate</li>
            <li>Open For New Team</li>
            <li>Easy Battle</li>
            <li>Certificate</li>
          </ul>
          <div className="btn bg-blue-500 text-white">View Events</div>
        </div>
        <div
          className={`flex w-64 flex-col rounded-lg mx-5 border-slate-300 border-2`}
        >
          <h1>Expert Class</h1>
          <ul className="menu w-56 p-0 [&_li>*]:rounded-none">
            <li>More 10+ Winner Rate</li>
            <li>High Class Team</li>
            <li>Super Battle</li>
            <li>Certificate</li>
          </ul>
          <div className="btn bg-blue-500 text-white">View Events</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
