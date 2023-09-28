import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addProject } from '../../reducer/index';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import arrowLeft from '../views/arrow_left.png';
import logo from '../views/logo.png';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  description: Yup.string().required('This field is required'),
  manager: Yup.string().required('This field is required'),
  assigned: Yup.string().required('This field is required'),
  status: Yup.string().required('This field is required'),
});

const AddProject = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values, { resetForm }) => {
    const projectId = Date.now();
    const projectWithId = { ...values, id: projectId };
    dispatch(addProject(projectWithId));
    alert('Success');
    resetForm();
    history.push('/');
  };

  return (
    <div>
      <header className="relative bg-whitesmoke w-full h-[1024px] overflow-hidden text-left text-sm text-gray-4 font-font-size-sm-12">
        <div className="absolute top-[0px] left-[0px] w-[1442px] h-[57px]">
          <div className="absolute top-[-1px] left-[-1px] bg-grey-grey-1 box-border w-[1442px] h-[58px] border-[1px] border-solid border-grey-grey-5" />
          <div className="absolute top-[12px] left-[48px] leading-[32px] font-semibold">
            <img alt="" src={logo} />
          </div>
        </div>
        <div className="absolute top-[65px] left-[1258px] flex flex-col items-start justify-start text-center text-xl text-grey-grey-1 font-regular-20-px-28">
          <div className="rounded bg-highlight-color flex flex-col items-center justify-start py-2 px-4">
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
              <div className="relative text-base leading-[24px]">
                Add project
              </div>
              <div className="relative w-4 h-6 overflow-hidden shrink-0 hidden" />
            </div>
          </div>
        </div>

        <Formik
          initialValues={{
            name: '',
            description: '',
            manager: '',
            assigned: '',
            status: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="absolute top-[145px] left-[388px] w-[670px] h-[544px] text-grey-grey-9 font-regular-20-px-28">
              <div className="absolute top-[0px] left-[0px] rounded bg-grey-grey-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.15)] w-[664px] h-[560px]" />
              <div className="absolute top-[32px] left-[40px] flex flex-col items-start justify-start gap-[24px]">
                <div className="w-[584px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start gap-2">
                    <div className="self-stretch relative leading-22">
                      <label htmlFor="name" className="block">
                        Project name:
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="self-stretch relative h-9 text-base text-grey-grey-8 border border-gray-300 rounded w-full mt-2"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className=" w-[calc(100% - 328px)] top-[80px] left-[0px] leading-[22px] text-grey-grey-7"
                      />
                    </div>
                    <div className="self-stretch relative leading-22">
                      <label htmlFor="description" className="block">
                        Description:
                      </label>
                      <Field
                        type="text"
                        id="description"
                        name="description"
                        className="self-stretch relative h-9 text-base text-grey-grey-8 border border-gray-300 rounded w-full mt-2"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className=" w-[calc(100% - 328px)] top-[80px] left-[0px] leading-[22px] text-grey-grey-7"
                      />
                    </div>
                    <div className="self-stretch relative leading-22">
                      <label htmlFor="manager" className="block">
                        Project Manager:
                      </label>
                      <Field
                        as="select"
                        id="manager"
                        name="manager"
                        className="self-stretch relative h-9 text-base text-grey-grey-8 border border-gray-300 rounded w-full mt-2"
                      >
                        <option value="">Select a person</option>
                        <option value="Walt Cosani">Walt Cosani</option>
                  
                      </Field>
                      <ErrorMessage
                        name="manager"
                        component="div"
                        className=" w-[calc(100% - 328px)] top-[80px] left-[0px] leading-[22px] text-grey-grey-7"
                      />
                    </div>
                    <div className="self-stretch relative leading-22">
                      <label htmlFor="assigned" className="block">
                        Assigned to:
                      </label>
                      <Field
                        as="select"
                        id="assigned"
                        name="assigned"
                        className="self-stretch relative h-9 text-base text-grey-grey-8 border border-gray-300 rounded w-full mt-2"
                      >
                        <option value="">Select a person</option>
                        <option value="Ignacio Truffa">Ignacio Truffa</option>
               
                      </Field>
                      <ErrorMessage
                        name="assigned"
                        component="div"
                        className=" w-[calc(100% - 328px)] top-[80px] left-[0px] leading-[22px] text-grey-grey-7"
                      />
                    </div>
                    <div className="self-stretch relative leading-22">
                      <label htmlFor="status" className="block">
                        Status:
                      </label>
                      <Field
                        as="select"
                        id="status"
                        name="status"
                        className="self-stretch relative h-9 text-base text-grey-grey-8 border border-gray-300 rounded w-full mt-2"
                      >
                        <option value="">Status</option>
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                      </Field>
                      <ErrorMessage
                        name="status"
                        component="div"
                        className=" w-[calc(100% - 328px)] top-[80px] left-[0px] leading-[22px] text-grey-grey-7"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start cursor-pointer text-center text-base text-grey-grey-1">
                  <button
                    type="submit"
                    className="rounded bg-highlight-color flex flex-col items-center justify-start py-2 px-4 cursor-pointer text-center text-base text-grey-grey-1"
                  >
                    <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="relative w-4 h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon-container.svg"
                      />
                      <div className="relative leading-[24px]">
                        Create project
                      </div>
                      <img
                        className="relative w-4 h-6 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/icon-container1.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>

        <div className="absolute top-[57px] left-[0px] w-[1440px] h-16 text-xs text-text-color">
          <div className="absolute top-[0px] left-[0px] bg-grey-grey-1 shadow-[0px_-1px_0px_#d9d9d9_inset] w-[1440px] h-16" />
          <div className="absolute top-[20px] left-[48px] w-14 h-6">
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src={arrowLeft}
            />
            <a
              style={{ textDecoration: 'none' }}
              href="/"
              className="absolute top-[1px] left-[28px] leading-[22px]"
            >
              Back
            </a>
          </div>
          <div className="absolute top-[16px] left-[128px] w-[136px] h-8 text-[24px] text-heading-color">
            <div className="absolute top-[0px] left-[0px] w-[136px] h-8">
              <div className="absolute top-[0px] left-[0px] leading-[32px] font-semibold">
                Add project
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AddProject;
