import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../reducer/index';
import more from '../views/more.png';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import edit from '../views/edit.png';
import butDelete from '../views/delete.png';
import image from '../views/image1.png';

export default function Card({ p }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteProject(id));
    setIsDialogOpen(false);
  };
  const handleEditClick = (projectId) => {
    history.push(`/edit/${projectId}`);
    setIsDialogOpen(false);
  };
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="project-card">
      <div className="relative top-[10px] left-[24px] w-[1079.74px] h-[39px]">
        <div>
          <div>{p.name}</div>
          <div className=" top-[19px] left-[0px] text-xs leading-[20px] text-text-color-secondary flex items-center w-[201.19px]">
            Creation date: 09/09/2020 10:30 am
          </div>
        </div>
        <div className="absolute top-[9px] left-[1020.74px] flex flex-row items-center justify-start text-xs text-grey-grey-8">
          <div className="rounded bg-grey-grey-3 flex flex-row items-center justify-start py-px px-2 border-[1px] border-solid border-grey-grey-5">
            <div className="relative leading-[20px]">{p.status}</div>
          </div>
        </div>
        <div className="absolute top-[8px] left-[398.81px] w-[108.19px] h-6">
          <div className="absolute top-[1px] left-[33.19px] leading-[22px]">
            {p.manager}
          </div>
          <div className="absolute top-[0px] left-[0px] w-[24.89px] h-6 text-center text-4xs text-chocolate font-inter">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-navajowhite w-[24.89px] h-6" />
            <div className="absolute top-[0px] left-[0px] leading-[20px] flex items-center justify-center w-[24.89px] h-6">
              WC
            </div>
          </div>
        </div>
        <div className="absolute top-[7px] left-[685.81px] w-[120.19px] h-6">
          <div className="absolute top-[1px] left-[33.19px] leading-[22px]">
            {p.assigned}
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[24.89px] h-6"
            alt=""
            src={image}
          />
        </div>
        <div className="absolute top-[7px] left-[1190px] w-[120.19px] h-6">
          <div className="absolute top-[1px] left-[33.19px] leading-[22px]"  onClick={toggleDialog}>
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden cursor-pointer"
              alt=""
              src={more}
          
            />
          </div>

          {isDialogOpen && (
            <div className="absolute w-full h-[90px] text-left text-xs text-grey-grey-9 font-regular-12px-20">
              <div className="absolute top-[10px] left-[5px] rounded bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-col items-start justify-start">
                
                <div
                  className="relative w-[181px] h-[38px] cursor-pointer"
               
                >
                <div     className="relative w-[181px] h-[38px] cursor-pointer "
                onClick={() => handleEditClick(p.id)}>
                <img
                    className="absolute top-[11px] left-[16px] w-4 h-4 overflow-hidden"
                    alt=""
                    src={edit}
                  />
                  <div className="absolute top-[9px] left-[44px] leading-[20px]">
                    Edit
                  </div>
                </div>
                 
                </div>

                <div className="relative box-border w-[182px] h-px border-t-[1px] border-solid border-gainsboro" />
                <div 
                className="relative w-[181px] h-[38px] cursor-pointer "
                 onClick={() => handleDelete(p.id)}>
                  <img
                    className="absolute top-[11px] left-[16px] w-4 h-4 overflow-hidden"
                    alt=""
                    src={butDelete}
                  />
                  <div
                    className="absolute top-[9px] left-[44px] leading-[20px] text-opacity-100 opacity-100"
                  >
                    Delete
                  </div>
                </div>
               
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
