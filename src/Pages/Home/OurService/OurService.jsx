import doc from '../../../assets/female.png';
import Tab from '../Tab/Tab';

function OurService() {
  return (
     <div data-aos="zoom-out-right"  className='container mx-auto my-28 p-2 flex flex-col md:flex-row justify-center items-center'>
            <div  className=' w-full '>
                <img src={doc} alt="" />
            </div>
            <div className=' w-full ml-2'>
                <div className=''>
                    <h1 className='text-4xl  md:text-5xl font-sans font-bold mb-8'>Our Services</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div>
                    <Tab></Tab>
                </div>
            </div>
        </div>
  )
}

export default OurService