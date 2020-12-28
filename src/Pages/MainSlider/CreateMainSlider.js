import React, { useState } from "react";
import Header from "../../Dashboard/Header/Header";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import TextError from "../../Component/TextError/TextError";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { createMainSlider } from "../../Action/mainSlider";
import api from "../../utils/api";
toast.configure();

const CreateMainSlider = ({ createMainSlider, edit, mainSlider }) => {
  //for the history
  const history = useHistory();
  //state for handling the locking of add province button
  const [lock, setLock] = useState(false);
  //initial state of the form
  const initialState = {
    title: edit ? mainSlider.title : "",
    image: edit ? mainSlider.image : "",
    is_active: edit ? mainSlider.is_active : false,
  };
  //validation rules of the form
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .min(4, "Title must be atleast 4 characters"),
    image: Yup.mixed().required("Slider Image is Required"),
    is_active: Yup.bool(),
  });
  const onSubmit = (values) => {
    createMainSlider(values);
    history.push("/main-slider");
  };

  //function which checks whether the province is added already or not
  const handleBlur = (props) => {
    api
      .get(`api/v1/main-slider/?name=${props}`)
      .then((res) => {
        if (!res.data[0]) {
          setLock(false);
        } else {
          setLock(true);
          toast.error(`Main Slider Already Added !!!`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <nav aria-label="breadcrumb">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/main-slider">Main Slider</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Create
                  </li>
                </ol>
              </div>
            </nav>
            <div className="row justify-content-center text-center mt-5">
              <div className="col-12 col-sm-12 col-md-6 col-lg-5 ">
                <div className="registration-process ">
                  <Formik
                    enableReinitialize={true}
                    initialValues={initialState}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {(formik) => {
                      return (
                        <Form>
                          <div className="form-group row mb-2">
                            <div className="col-12">
                              <Field
                                type="text"
                                name="title"
                                className="form-control "
                                placeholder="Title"
                                onBlur={() => handleBlur(formik.values.title)}
                              />
                              <ErrorMessage name="title" component={TextError} />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-12">
                              <label htmlFor="image">Main Slider Image</label>
                              <input
                                type="file"
                                name="image"
                                className="form-control form-control-sm"
                                onChange={(event) =>
                                  formik.setFieldValue(
                                    "image",
                                    event.target.files[0]
                                  )
                                }
                              />
                              <ErrorMessage
                                name="image"
                                component={TextError}
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-2">
                            <div className="col-12">
                              <Field
                                type="checkbox"
                                name="is_active"
                                id="isActive"
                                className="filled-in chk-col-blue"
                              />
                              <label htmlFor="isActive"> Active</label>
                            </div>
                          </div>
                          <div className="form-group">
                            {!edit ? (
                              <button
                                type="btn"
                                className="btn btn-primary"
                                disabled={lock}
                              >
                                Create
                              </button>
                            ) : (
                              <button
                                type="btn"
                                className="btn btn-success"
                                disabled={lock}
                              >
                                Update
                              </button>
                            )}
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  mainSlider: state.mainSlider.mainSlider,
  edit: state.mainSlider.edit,
});
export default connect(mapStateToProps, { createMainSlider })(CreateMainSlider);
