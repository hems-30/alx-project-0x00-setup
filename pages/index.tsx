const Home: React.FC = () => { //react.fc tells typescript home is a react functional component
  return ( //returns the ui that is shown when component is rendered
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">{/* flex flex clo: use flexbox in column dxn, make it full height, center content vertically and hori, large bold text*/}
      <h1>Airbnb Application Clone system</h1>
      <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full"> {/*tailwind is use here*/} 
        Get Started
      </button>
    </main>
  );
}

export default Home; //mskes home component available to other files