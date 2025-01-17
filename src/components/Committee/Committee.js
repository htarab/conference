import Heading from "../General/Heading";
import Title from "../General/Title";
import CommitteeContent from "./CommitteeContent";

const Committe = () => {

    const AdvisoryMembers = ['Dr. J. Janet, Principal'];
    const Convener = ['Dr. M. Lydia, Professor & Head, Mechatronics Engineering'];
    const TechnicalCommittee = ['Dr. K.B. Gurumoorthy, National Institute of Technology, Calicut, India', 'Dr.Kathiravan Srinivasan, Vellore Institute of Technology, Vellore', 'Dr.T.Mohanraj, Amritha University, Coimbatore', 'Dr. Kamatchi Sundari, SRMIST-Ramapuram, Chennai', 'Dr. Akhilesh Kumar Singh, Adithya College of Engineering and Technology, Andhra Pradesh', 'Dr.R.Rajasekar, HOD/Mech, Kongu Engineering College, Erode', 'Dr.S.Vinod, PSG College of Technology,Coimbatore', 'Dr. Ram Singh Sran, Baba Hira Singh Bhattal Institute of Engineering & Technology, Lehragaga, Sangrur, Punjab', 'Dr.K.Lingadurai, University College of Engineering,  Dindigul', 'Dr.R.Rajasekar, Kongu Engineering College,Erode', 'Dr.M.Ramu, Amirta School of Engineering, Coimbatore', 'Dr.Saravana Mohan, Kumaraguru College of Technology, Coimbatore', 'Dr.Ramakrishnan.R, Vellore Institute of Technology, Vellore', 'Dr. M. Feroskhan, Vellore Institute of Technology, Chennai', 'Dr.M.Venkatesan, SASTRA Deemed to be University, Thanjavur', 'Dr.M.Ravichandran, K.Ramakrishnan College of Engineering, Trichy', 'Dr.S.Karthigai Lakshmi, SSM Institute of Engineering and Technology, Dindigul', 'Dr. B V D S Sekhar, S R K R Engineering College, Buimavaram, West Godavari District, Andhra Pradesh', 'Dr.VVSSS Chakravarthy, Raghu Institute of Technology, Dakamarri, Visakhapatnam, Andhra Pradesh', 'Dr. S. Suresh Kumar, KGiSL Institute of Technology, Coimbatore', 'Dr. K. Baskaran, Alagappa Chettiar Government College of Engineering and Technology , Karaikudi'];
    const InternationalAdvisory = ['Dr. Rajkumar Palaniappan, University of Technology Bahrain, Bahrain', 'Dr. Rathinaraja Jeyaraj, Kyungpook National University, South Korea', 'Zahra Badiei, Shiraz University, Shiraz, Iran', 'Yoash Levron, The Viterbi Faculty of Electrical Engineering, Technion Israel Institute of Technology, Haifa , Israel']

    return (
        <div>
            <Heading />
            <Title title="Committee"/>
            <div className="mt-[3rem]">
                <CommitteeContent Title = {'Advisory Committee'} Members = {AdvisoryMembers}/>
                <CommitteeContent Title = {'Convener'} Members = {Convener}/>
                <CommitteeContent Title = {'Technical Committee'} Members = {TechnicalCommittee}/>
                <CommitteeContent Title = {'International Advisory Board Members'} Members = {InternationalAdvisory}/>
            </div>
            
        </div>
    );

}

export default Committe;