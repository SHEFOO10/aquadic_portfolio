import { Link } from "react-router"
import figma from '../../../assets/images/figma.jpg'
import { useTranslation } from 'react-i18next';

const JobDetailsData = () => {
    const { t } = useTranslation("aboutus");
    return (
        <section className=''>
            <div className='container'>
                <Link to='/job_details' className="w-full h-full border-2 border-[#E4E3E3] p-6 rounded-[32px] mt-10 flex gap-2">
                    <img
                        src={figma}
                        alt="figma"
                        className='md:w-[180px] w-20 md:h-[172px] h-20'
                    />
                    <div>
                        <h2 className='text-[#121212] md:text-[32px] font-bold'>
                            Senior UI/UX Designer
                        </h2>
                        <p className='text-[#5D5D5D] md:text-sm text-xs font-semibold mt-3'>
                            On site - Full Time
                        </p>
                        <p className='text-[#5D5D5D] md:text-base text-xs font-medium mt-4'>
                            We are looking for a talented Senior UI/UX Designer to join our team at AQuadic. You will be responsible for designing intuitive, user-friendly interfaces for web and mobile applications. The ideal candidate combines creativity with a strong understanding of user behavior, delivering designs that enhance user experience and drive engagement.
                        </p>
                    </div>
                </Link>

                <div className="mt-20">
                    <h2 className="text-[#EA433A] text-[32px] font-medium">
                        Key Responsibilities:
                    </h2>
                    <ul className="list-disc px-8">
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Lead discovery, user research, and user journey mapping.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Deliver design solutions from concept to implementation.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Define design standards and contribute to the design system.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Ensure accessibility and user diversity are considered in all stages.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Collaborate on roadmap planning and influence product direction.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Mentor junior designers and advocate for user-centered thinking across teams.
                        </li>
                    </ul>
                </div>

                <div className="mt-16">
                    <h2 className="text-[#EA433A] text-[32px] font-medium">
                        Must-Have Qualifications:
                    </h2>
                    <ul className="list-disc px-8">
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Lead discovery, user research, and user journey mapping.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Deliver design solutions from concept to implementation.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Define design standards and contribute to the design system.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Ensure accessibility and user diversity are considered in all stages.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Collaborate on roadmap planning and influence product direction.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Mentor junior designers and advocate for user-centered thinking across teams.
                        </li>
                    </ul>
                </div>

                <div className="mt-16">
                    <h2 className="text-[#121212] text-[32px] font-medium">
                        Why Join <span className="text-[#EA433A]">Aquadic ?</span>
                    </h2>
                    <ul className="list-disc px-8">
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Work on high-impact, scalable digital products.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Collaborate with talented professionals in a supportive environment.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            A hybrid work model with flexibility.
                        </li>
                        <li className="text-[#121212] text-lg font-medium leading-[150%] mt-3">
                            Opportunities for professional growth and leadership.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default JobDetailsData
