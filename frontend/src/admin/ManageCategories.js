import React, {useState, useEffect} from 'react'
import Base from '../core/Base'
import { getCategories, deleteCatagorie } from './helper/adminapicall'
import { isAuthenticated } from '../auth/helper'
import { Link } from 'react-router-dom'


const ManageCategories = () => {

  const [catagories, setCatagories] = useState([])

  const { user, token } = isAuthenticated();

  const preload = () => {
    getCategories().then((data) => {
      if (data?.error) {
        console.log(data.error);
      } else {
        setCatagories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisCategory = (catagoryId) => {
    deleteCatagorie(user._id, token, catagoryId).then((data) => {
      if (data?.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  return (
    <Base title="Manage Categories" description="Manage your categories here !">
      <h2 className="mb-4">All catagories:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">{`Total ${catagories.length} catagories`}</h2>

          {catagories.map((catagory, index) => {
            return (
              <div key={index} className="row text-center mb-2 ">
                <div className="col-4 d-flex">
                  <h5 className="text-white text-left">
                    {catagory.name}
                  </h5>
                </div>
                <div className="col-4">
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisCategory(catagory._id)
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  )
}

export default ManageCategories
