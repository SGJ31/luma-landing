import Layout from "../../Components/Layout";

  function Home() {

      return (
        <Layout>
          <div className='grid gap-6 grid-cols-4 w-full left-9'>
            <ul className="">
              <li>
                <h1 className='text-xl font-bold'>          
                  Delightful
                  events
                  start here.
                </h1>
                <p>
                  Set up an event page, invite friends and sell tickets. Host a memorable event today.
                </p>
                <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
                  Sign up here!
                </button>
              </li>  
            </ul>  
          </div>
        </Layout>
      )
  }

export default Home