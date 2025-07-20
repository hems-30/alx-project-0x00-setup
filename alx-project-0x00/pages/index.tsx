const Home: React.FC = () => { // : React.FC: This tells TypeScript that Home is a React Functional Component.
  return ( // returns the UI that should be shown when the component is rendered.
  <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">{/* uses tailwind and flexbox to style*/}
      <h1>Airbnb Application Clone system</h1>
      <button className=" border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full">Get Started</button> {/* styled button using tailwind*/}
    </main>
  );
};

export default Home; //makes the home component available to other files.