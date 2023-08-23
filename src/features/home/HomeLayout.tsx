export function HomeLayout() {
  return (
    <div className="flex flex-col">
      <header className="fixed top-0 w-full border border-red-500">
        <div className="sm:container sm:mx-auto border border-red-500">
          <h1>NAVBAR</h1>
        </div>
      </header>
      <div className="sm:container sm:mx-auto border border-red-500 mt-8">
        <h1>HOME</h1>
        <div className="flex flex-row grid-cols-4 gap-4 border border-red-500">
          <div className="col-span-3 border border-red-500">
            <h2>dailyforecast</h2>
          </div>
          <div className="col-span-1 border border-red-500">
            <h2>weeklyforecast</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
