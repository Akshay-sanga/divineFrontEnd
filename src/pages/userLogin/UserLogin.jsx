import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { userLoginslicedata } from '../../redux/UserSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserLogin = () => {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form', form)
    try {
      const res = await dispatch(userLoginslicedata(form)).unwrap();
      console.log('user data', res);
      if (res.status_code === 200) {
        localStorage.setItem('user_token', res.token)
        toast.success(res.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
        });

        setForm({
          email: "",
          password: "",
        });
      } else {
        toast.error(res.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
        });
      }


    } catch (error) {
      toast.error(error.message || "Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
      });
      console.error("Error fetching data:", error);
    }
  }



  useEffect(() => {
    handleSubmit()
  }, []);

  return (
    <>

      {/* Audition Section start */}
      <section className="contact-section second s1-bg-color pt-120">
        <div className="container pb-120">
          <div className="row gy-8 gy-lg-0 align-items-center justify-content-center">

            <div className="col-md-9 col-lg-12 order-1 order-lg-0">
              <div className="d-grid gap-5 gap-md-8  reveal-text text-one">
                <div className="section-text d-grid gap-3 gap-md-4">
                  <span className="p6-color fw-semibold text-center">User Login in to Panel</span>
                  {/* <h className="fs-two">User Login in to Panel</h> */}

                </div>

                <div className="row align-items-center justify-content-between">
                  <div className="col-6 col-xxl-5 d-flex flex-column gap-3 gap-md-4">
                    <div className="d-flex align-items-center gap-3">
                      <span className="d-center p6-color fs-five">
                        <i className="ph ph-envelope-open" />
                      </span>
                      {/* <span className="n2-color">Address :  {filterseason && filterseason.season_address}</span> */}
                    </div>
                    {/* <p className="n3-color">
                    {filterseason && filterseason.season_address}
                  </p> */}
                  </div>
                  <div className="col-6 col-xxl-5 d-flex flex-column gap-3 gap-md-4">
                    <div className="d-flex align-items-center gap-3">
                      <span className="d-center p6-color fs-five">
                        <i className="ph ph-clock" />
                      </span>
                      {/* <span className="n2-color">Season :  {filterseason && filterseason.season_paid_type === 'paid' ? 'Paid' : 'Free'}</span> */}
                    </div>
                    {/* <p className="n3-color">Monday -&gt; Saturday 9AM to 10PM</p> */}
                  </div>
                </div>
              </div>
            </div>


            {/* Form Start */}
            <div className="col-lg-6 d-grid gap-4 gap-md-6 mt-3">
              <div className="form-area box-shadow-p1 n1-bg-color rounded-4 d-grid gap-3 gap-md-4 px-3 px-md-8 py-5 py-md-8">
                <form className="row gy-4 gy-md-6" action="#" onSubmit={handleSubmit} >

                  <div className="col-md-12">
                    <div className="single-box d-grid gap-1">
                      <label className="n2-color fs-seven text-capitalize">
                        user name <span className="p2-color">*</span>
                      </label>
                      <div
                        id="name-enter"
                        className="input-area second focus-four transition rounded-1 s1-bg-color px-3 px-md-4 py-2 py-md-3 d-center gap-2"
                      >
                        <span className="d-center fs-five n3-color">
                          <i className="ph ph-smiley" />
                        </span>
                        <input
                          type="text"
                          name="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="Enter Your Username"
                          className="w-100 n2-color"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="single-box d-grid gap-1">
                      <label className="n2-color fs-seven text-capitalize">
                        password <span className="p2-color">*</span>
                      </label>
                      <div
                        id="name-enter"
                        className="input-area second focus-four transition rounded-1 s1-bg-color px-3 px-md-4 py-2 py-md-3 d-center gap-2"
                      >
                        <span className="d-center fs-five n3-color">
                          <i className="ph ph-smiley" />
                        </span>
                        <input
                          type="text"
                          name="password"
                          value={form.password}
                          onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                          }
                          placeholder="Enter Your Password"
                          className="w-100 n2-color"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <button className="box-style box-second first-alt transition d-center py-2 py-md-3 px-4 px-md-6 w-100">
                      <span className="fs-eight fw-semibold">Log in</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* Audition Section end */}
    </>
  )
}

export default UserLogin