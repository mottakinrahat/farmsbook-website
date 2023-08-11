import React, { useEffect, useState } from 'react';
import SingleTeam from '../AboutUs/SingleTeam/SingleTeam';

const Team = () => {
    const [teamData, setTeamData] = useState([])
    useEffect(() => {
        fetch('/team.json')
            .then(res => res.json())
            .then(data => setTeamData(data))
    }, [])
    return (
        <div className='mb-[32px]'>
            <h2 className='md:mt-[120px] mt-20 text-center md:mb-[70px] mb-8 text-[32px] font-semibold'>Our Team</h2>

           <div className='grid grid-cols-2 md:grid-cols-3 justify-around items-center md:mx-[260px] mx-[24px] gap-6'>
            {
                teamData.map((team,index)=><SingleTeam key={index} team={team}></SingleTeam>)
            }
           </div>
        </div>
    );
};

export default Team;