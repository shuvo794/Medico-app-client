
const Overview = () => {
    return (
        <div>
            <div className='my-10'>
                <h3 className='text-neutral-700 text-xl font-bold mb-2'>About ME</h3>
                <p className=" text-neutral-700 text-base font-normal  leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus, nam repudiandae, eius eaque vel molestiae a reprehenderit earum dolores adipisci ad. Ullam, delectus corporis, ab facere odio voluptate harum, cumque obcaecati modi qui magnam excepturi libero exercitationem natus sunt quo saepe veniam! Fugit ut eaque dolorum porro, excepturi perferendis.</p>
            </div>

            <div className='flex justify-around flex-col md:flex-row space-y-5 '>
                <div>
                    <h3 className='text-neutral-700 text-xl font-bold'>Services</h3>
                    <ul className='text-neutral-700 text-base font-normal leading-relaxed'>
                        <li>Tooth cleaning</li>
                        <li>Root Canal Therapy</li>
                        <li>Implants</li>
                        <li>Composite Bonding</li>
                        <li>Fissure Sealants</li>
                        <li>Surgical Extractions</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-neutral-700 text-xl font-bold text-right'>Specializations</h3>
                    <ul className='text-neutral-700 text-base font-normal leading-relaxed text-right'>
                        <li>Children Care</li>
                        <li>Dental Care</li>
                        <li>Oral and Maxillofacial Surgery</li>
                        <li>Orthodontist</li>
                        <li>Periodontist</li>
                        <li>Prosthodontics</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Overview;