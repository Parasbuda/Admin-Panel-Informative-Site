import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../Dashboard/Header/Header";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import { connect } from "react-redux";
import Pagination from "../../Component/Pagination/Pagination";
import { BsArrowUpDown , BsFillTrashFill} from "react-icons/bs";
import {FaPencilAlt} from  "react-icons/fa"
import { getPrevious, getNext, getPageMainSlider,getMainSliders,editMainSlider,deleteMainSlider } from "../../Action/mainSlider";

const MainSlider = ({
  getMainSliders,
  mainSliders,
  deleteMainSlider,
  editMainSlider,
  count,
  next,
  previous,
  getNext,
  getPrevious,
  getPageMainSlider,
  loading,
}) => {


  //state for searching
  const [search, setSearch] = useState("");

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
 
 

  //change page
  const paginate = (number) => {
    getPageMainSlider({ number, postsPerPage });
    setCurrentPage(number);
  };

  //handle Click
  const handleClick = (type) => {
    if (type === "previous") {
      if (currentPage === 1) {
        setCurrentPage(1);
      } else {
        getPrevious(previous);
        setCurrentPage(currentPage - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(count / postsPerPage) === currentPage) {
        setCurrentPage(currentPage);
      } else {
        getNext(next);
        setCurrentPage(currentPage + 1);
      }
    }
  };

  
  //pagination end

 
  useEffect(() => {
    getMainSliders();
    
  }, []);

  //history
  const history = useHistory();

  //edit function for the province
  const handleEdit = (id) => {
    editMainSlider(id);
    history.push("/main-slider/create");
  };
  return (
    <React.Fragment>
      <Header setSearch={setSearch} />
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
                  <li className="breadcrumb-item active" aria-current="page">
                   Main Slider
                  </li>
                </ol>
              </div>
            </nav>
           
            <Link className="btn btn-primary" to="/main-slider/create">
              Add
            </Link>
            {loading && (
              <div className="d-flex justify-content-center ">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            <div className=" mt-2">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th scope="col">
                      S.N
                      <BsArrowUpDown onClick={() => handleSort("S.N")} />
                    </th>
                    <th scope="col">
                      Slider Name
                      <BsArrowUpDown onClick={() => handleSort("Province")} />
                    </th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {search === ""
                    ? mainSliders?.length > 0 &&
                      mainSliders.map((mainSlider, i) => {
                        const { id, name } = mainSlider;
                        return (
                          <tr key={id}>
                            <th scope="row">
                              {postsPerPage * (currentPage - 1) + (i + 1)}
                            </th>
                            <td>{name}</td>
                            <td>
                            <BsFillTrashFill
                              className=" mr-2"
                                onClick={() => deleteMainSlider(id)}
                              />
                              <FaPencilAlt
                               
                                onClick={() => handleEdit(id)}
                              />
                                
                            </td>
                          </tr>
                        );
                      })
                    : mainSliders?.map((mainSlider, i) => {
                        const { id, name } = mainSlider;

                        if (
                          search === (i + 1).toString() 
                        ) {
                          return (
                            <tr key={id}>
                              <th scope="row"> {postsPerPage * (currentPage - 1) + (i + 1)}</th>
                              <td>{name}</td>
                              <td>
                              <BsFillTrashFill
                              className=" mr-2"
                                onClick={() => deleteMainSlider(id)}
                              />
                              <FaPencilAlt
                               
                                onClick={() => handleEdit(id)}
                              />
                              </td>
                            </tr>
                          );
                        }
                    
                      })}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="col">S.N</th>
                    <th scope="col">Slider Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </tfoot>
              </table>
              <div className="row d-flex justify-content-end">
               

                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={count}
                  paginate={paginate}
                  handleClick={handleClick}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  mainSliders: state.MainSlider.mainSliders,
  count: state.MainSlider.count,
  next: state.MainSlider.next,
  previous: state.MainSlider.previous,
  loading: state.MainSlider.loading,
});
export default connect(mapStateToProps, {
  getMainSliders,
  deleteMainSlider,
  editMainSlider,
  getPrevious,
  getNext,
  getPageMainSlider,
})(MainSlider);
