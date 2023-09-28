import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../views/logo.png';
import { useSelector } from 'react-redux';
import Card from '../ProjectCard/Card';
import ProjectCard from '../ProjectCard';

export default function Projects(){
  const project = useSelector((state)=> state.projects.projects)

  return (
        <>
          <div className="relative bg-whitesmoke w-full h-[1024px] overflow-hidden text-left text-sm text-text-color font-regular-16-px-24">
            <div className="absolute top-[145px] left-[48px] rounded bg-grey-grey-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.15)] w-[1344px] h-[500px]" />
            <div className="absolute top-[145px] left-[48px] flex flex-col items-start justify-start">
              <div className="relative w-[1344px] h-[60px] text-heading-color">
                <div className="absolute top-[0px] left-[0px] bg-table-header shadow-[0px_-1px_0px_#d9d9d9_inset] w-[1344px] h-[60px]" />
                <div className="absolute top-[19px] left-[24px] w-[1258.44px] h-[22px]">
                  <div className="absolute top-[0px] left-[0px] leading-[22px] font-medium">
                    Project info
                  </div>
                  <div className="absolute top-[0px] left-[398.81px] leading-[22px] font-medium flex items-center w-[132.74px]">
                    Project Manager
                  </div>
                  <div className="absolute top-[0px] left-[686.81px] leading-[22px] font-medium flex items-center w-[132.74px]">
                    Assigned to
                  </div>
                  <div className="absolute top-[0px] left-[1020.74px] leading-[22px] font-medium flex items-center w-[42.52px]">
                    Status
                  </div>
                  <div className="absolute top-[0px] left-[1215.93px] leading-[22px] font-medium flex items-center w-[42.52px]">
                    Action
                  </div>
                </div>
              </div>
              <div className="relative w-[1344px] h-[60px]">
              
                
                <ProjectCard project={project}/>
                
             
              </div>
            
            </div>
            
            <div className="absolute top-[0px] left-[0px] w-[1442px] h-[57px] text-gray-4 font-inter">
              <div className="absolute top-[-1px] left-[-1px] bg-grey-grey-1 box-border w-[1442px] h-[58px] border-[1px] border-solid border-grey-grey-5" />
              <div className="absolute top-[12px] left-[48px] leading-[32px] font-semibold">
                <img alt="" src={logo} />
              </div>
            </div>
            <div className="absolute top-[57px] left-[0px] w-[1440px] h-14 text-xl text-heading-color font-inter">
              <div className="absolute top-[0px] left-[0px] bg-grey-grey-1 shadow-[0px_-1px_0px_#d9d9d9_inset] w-[1440px] h-14" />
              <div className="absolute top-[12px] left-[48px] w-[114px] h-8">
                <div className="absolute top-[0px] left-[0px] w-[114px] h-8">
                  <div className="absolute top-[0px] left-[0px] leading-[32px] font-semibold">
                    My projects
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute top-[65px] left-[1258px] flex flex-col items-start justify-start cursor-pointer text-center text-xl text-grey-grey-1"
            
            >
              <div className="rounded bg-dust-red-red-6 flex flex-col items-center justify-start py-2 px-4">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px]">
                  <div className="relative w-4 h-6 overflow-hidden shrink-0">
                    <img
                      className="absolute top-[calc(50%_-_8px)] left-[0px] w-4 h-4 overflow-hidden hidden"
                      alt=""
                      src="/iconoutlinedapplicationdownload.svg"
                    />
                    <div className="absolute h-full w-full top-[0%] left-[0%] leading-[28px] flex items-center justify-center">
                      +
                    </div>
                  </div>
            
                  <Link to="/add" className="relative text-base leading-[24px] cursor-pointer" style={{ textDecoration: 'none', color: 'white' }}>
  Add project
  <div className="relative w-4 h-6 overflow-hidden shrink-0 hidden" />
</Link>
                </div>
              </div>
            </div>
          </div>
          
        </>
      );
    };
        
