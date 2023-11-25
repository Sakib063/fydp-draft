import React, { FunctionComponent } from "react";
import Image from "next/image";
import consulting from "C:/Users/Hp/Desktop/nextjs/app/Assets/consulting.png";
import diagnosis from "C:/Users/Hp/Desktop/nextjs/app/Assets/diagnostic.png";
import shield from "C:/Users/Hp/Desktop/nextjs/app/Assets/shield.png";

export default function WelcomeDoctor() {
    return (
        <main className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center border-b-4 border-blue-800 mt-10 mb-5">Welcome Patient X
            </h1>
            <div className="flex items-center justify-center">
                <button
                    className="flex flex-col items-center justify-center w-500 h-500 border border-blue-600 text-blue font-bold px-20 py-10 m-10 rounded-md hover:bg-blue-200"
                >
                    <Image src={consulting} alt="consulting" id="consulting" height={200} width={130} />

                    Consultation History                </button>
                <button
                    className="flex flex-col items-center justify-center w-400 h-400 border border-blue-600 text-blue font-bold px-20 py-10 m-10 rounded-md hover:bg-blue-200"
                >
                    <Image src={diagnosis} alt="diagnosis" id="diagnosis" height={200} width={130} />

                    Diagnosis Reports
                                    </button>

                <button
                    className="flex flex-col items-center justify-center w-400 h-400 border border-blue-600 text-blue font-bold px-20 py-10 m-10 rounded-md hover:bg-blue-200"
                >
                    <Image src={shield} alt="shield" id="shield" height={200} width={130} />

                    Permissions
                </button>
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Summarized Report
                </button>
            </div>
        </main>
    )
}
// import React, { FunctionComponent } from "react";

// interface ButtonProps {
//     icon: string;
//     text: string;
// }

// const BigSquareButton: React.FunctionComponent<ButtonProps> = ({ icon, text }) => (
//     <button
//         className="flex flex-col items-center justify-center w-400 h-400 border border-blue-600 text-blue font-bold px-10 py-5 m-5 rounded-md hover:bg-blue-200"
//     >
//         <img src={icon} alt="" className="w-40 h-40 mb-2" />
//         <span className="text-sm">{text}</span>
//     </button>
// );

// const WelcomePatient: React.FunctionComponent = () => (

//     <><div className="flex justify-center items-center">
//         <h1 className="text-3xl font-bold text-center border-b-4 border-blue-500 mt-20 mb-5">Welcome Patient X
//         </h1>
//     </div><div className="flex justify-center items-center">
//             <BigSquareButton icon="/images/consulting.png" text="Consultation History" />
//             <BigSquareButton icon="app/WelcomePatient/images/diagnostic.png" text="Diagnosis Reports" />
//             <BigSquareButton icon="../shield.png" text="Permissions" />
//         </div>
//         <div className="flex justify-center items-center">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded">
//                 Summarized Report
//             </button>
//         </div>
//     </>
// );

// export default WelcomePatient;
