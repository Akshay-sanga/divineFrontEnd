import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getalldataslice, getAppliedseasonslicedata, getContactslicedata, PaymentVarifyDataFetchSlice } from '../../redux/UserSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { appliedseasonData } from '../../API/UserProvider';
import { Link, useNavigate } from 'react-router-dom';

const AuditionFormPage = () => {
  const [loading, setLoading] = useState(false);
  const [homeData, setHomeData] = useState(null);
  const [filterseason, setFilterSeason] = useState(null);
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false); // ✅ new state
  const [form, setForm] = useState({
    season_id: '',
    season_exist: '',
    name: "",
    phone: "",
    email: "",
    gender: "",
    city: "",
  });


  const dispatch = useDispatch();

  const fetchHomeData = async () => {
    setLoading(true);
    try {
      const response = await dispatch(getalldataslice()).unwrap();
      if (response.status === 200) {
        const filterData = response.season.filter((item) => item.type === 'new')
        console.log('Apply Now Screen', filterData)
        setHomeData(response);
        setFilterSeason({
          season_name: filterData[0]?.season_name || 'Default Season',
          season_id: filterData[0]?.id || '',
          season_type: filterData[0]?.type || '',
          season_about: filterData[0]?.about || '',
          season_address: filterData[0]?.address || '',
          season_paid_type: filterData[0]?.season_paid_type || '',
          season_amount: filterData[0]?.season_amount || '',
          season_email: filterData[0]?.email || '',
          season_video_link: filterData[0]?.video_link || '',

        });
        form.season_exist = filterData[0]?.season_name || 'Default Season'
        form.season_id = filterData[0]?.id || 'Default Season'

        form.season_paid_type = filterData[0]?.season_paid_type || ''
        form.season_amount = filterData[0]?.season_amount || ''
      } else {
        console.error('Failed to fetch home data');
      }
    } catch (error) {
      console.error('Error fetching home data:', error);
    } finally {
      setLoading(false);
    }
  }

  // Apply season Api submit


  // Your submit handler
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     console.log('form', form)
  // setSubmitting(true);  
  //     try {
  //       const res = await dispatch(getAppliedseasonslicedata(form)).unwrap();
  //       console.log('res on apply screen', res)
  //       if (res.status_code == 200) {
  //         if (filterseason?.season_paid_type === "paid") {
  //           openRazorpay(res);
  //           toast.success(res.message, {
  //             position: "top-right",
  //             autoClose: 3000,
  //             hideProgressBar: false,
  //             pauseOnHover: true,
  //             draggable: true,
  //           });
  //         }
  //         else {
  //           filterseason?.season_paid_type === "free";
  //           toast.success(res.message, {
  //             position: "top-right",
  //             autoClose: 3000,
  //             hideProgressBar: false,
  //             pauseOnHover: true,
  //             draggable: true,
  //           });
  //         }



  //         setForm((prev) => ({
  //           ...prev, // keep season_name & any other untouched fields
  //           name: "",
  //           phone: "",
  //           email: "",
  //           gender: "",
  //           city: "",
  //         }));

  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);

  //       const errors = error.errors;

  //       if (errors) {
  //         if (errors.email && errors.email[0]) {
  //           toast.error(errors.email[0], {
  //             position: "top-right",
  //             autoClose: 3000,
  //             hideProgressBar: false,
  //             pauseOnHover: true,
  //             draggable: true,
  //           });
  //         } else if (errors.gender && errors.gender[0]) {
  //           toast.error(errors.gender[0], {
  //             position: "top-right",
  //             autoClose: 3000,
  //             hideProgressBar: false,
  //             pauseOnHover: true,
  //             draggable: true,
  //           });
  //         }
  //       } else {
  //         toast.error(error.message || "Something went wrong!", {
  //           position: "top-right",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           pauseOnHover: true,
  //           draggable: true,
  //         });
  //       }
  //     }

  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form', form);

    setSubmitting(true);  // ✅ start loader

    try {
      const res = await dispatch(getAppliedseasonslicedata(form)).unwrap();
      console.log('res on apply screen', res);

      if (res.status_code == 200) {
        if (filterseason?.season_paid_type === "paid") {
          openRazorpay(res);
          toast.success(res.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.success(res.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
          });
        }

        setForm((prev) => ({
          ...prev, // keep season info
          name: "",
          phone: "",
          email: "",
          gender: "",
          city: "",
        }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);

      const errors = error.errors;
      if (errors) {
        if (errors.email && errors.email[0]) {
          toast.error(errors.email[0]);
        } else if (errors.gender && errors.gender[0]) {
          toast.error(errors.gender[0]);
        }
      } else {
        toast.error(error.message || "Something went wrong!");
      }
    } finally {
      setSubmitting(false);  // ✅ stop loader (success or error)
    }
  };


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  // Razorpay function

  const openRazorpay = (res) => {
    if (!window.Razorpay) {
      console.error("Razorpay SDK not loaded.");
      return;
    }

    const options = {
      key: res?.keyId,
      amount: res?.amount,            // amount in paise (₹100 = 10000)
      currency: "INR",
      name: res?.name || "Payment",
      description: "Test Transaction",
      order_id: res?.orderId,
      image: "https://www.hunarsangeetmahavidyalaya.com/static/media/Hunar-Sangeet-Mahavidyalaya.cad45e9fffc3878e9dfc.png",

      // SUCCESS handler
      handler: function (paymentResponse) {
        console.log("Payment success:", paymentResponse);
        paymentverify({
          razorpay_payment_id: paymentResponse.razorpay_payment_id,
          razorpay_order_id: paymentResponse.razorpay_order_id,
          razorpay_signature: paymentResponse.razorpay_signature,
        });
        // You can also show a toast or navigate to a success page here
      },

      prefill: {
        name: res?.name || "",
        email: res?.email || "",
        contact: res?.phone || "",
      },

      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);

    // FAILURE handler
    rzp1.on("payment.failed", function (response) {
      console.error("Payment failed:", response.error);
      // You can show an alert, toast, or redirect user to retry
      alert(`Payment failed: ${response.error.description}`);
      // Optional: send details to your backend for logging
      // fetch("/api/payment-failed", { method: "POST", body: JSON.stringify(response.error) });
    });

    rzp1.open();
  };


  // Payment Varify Function
  const paymentverify = async (paymentinfo) => {
    try {
      const response = await dispatch(
        PaymentVarifyDataFetchSlice(paymentinfo)
      ).unwrap();
      console.log("Payment Varify Response:", response);
      if (response.status === 200) {
        toast.success("Payment Success: " + response.message);
      } else {
        toast.error("Payment Failed: " + response.message);
      }
    } catch (error) {

      toast.error("❌ Something went wrong!");
    }
  }



  useEffect(() => {
    handleSubmit();
  }, [])

  useEffect(() => {
    fetchHomeData();
  }, [])
  return (
    <>

      {/* Audition Section start */}
      <section className="contact-section second s1-bg-color pt-120">
        <div className="container pb-120">
          <div className="row gy-8 gy-lg-0 align-items-center justify-content-center">

            <div className="col-md-9 col-lg-12 order-1 order-lg-0">
              <div className="d-grid gap-5 gap-md-8  reveal-text text-one">
                <div className="section-text d-grid gap-3 gap-md-4">
                  <span className="p6-color fw-semibold">Apply form for this season</span>
                  <h2 className="fs-two">{filterseason && filterseason.season_name}</h2>
                </div>

                <div className="row align-items-center justify-content-between">
                  <div className="col-6 col-xxl-5 d-flex flex-column gap-3 gap-md-4">
                    <div className="d-flex align-items-center gap-3">
                      <span className="d-center p6-color fs-five">
                        <i className="ph ph-envelope-open" />
                      </span>
                      <span className="n2-color">Address :  {filterseason && filterseason.season_address}</span>
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
                      {
                        console.log(filterseason)
                      }
                      <span className="n2-color">Season :  {filterseason && filterseason?.season_paid_type === 'paid' ? `${filterseason?.season_amount} ₹` : 'Free'}</span>
                    </div>
                    {/* <p className="n3-color">Monday -&gt; Saturday 9AM to 10PM</p> */}
                  </div>
                </div>
              </div>
            </div>


            {/* Form Start */}
            <div className="col-lg-12 d-grid gap-4 gap-md-6 mt-3">
              <div className="form-area box-shadow-p1 n1-bg-color rounded-4 d-grid gap-3 gap-md-4 px-3 px-md-8 py-5 py-md-8">
                <form className="row gy-4 gy-md-6" action="#" onSubmit={handleSubmit}>
                  <input type="hidden" name="season_id" value={filterseason?.season_id || ''} onChange={(e) =>
                    setForm({ ...form, season_id: e.target.value })
                  } />
                  <input type="hidden" name="season_paid_type" value={filterseason?.season_paid_type || ''} onChange={(e) =>
                    setForm({ ...form, season_id: e.target.value })
                  } />
                  <input type="hidden" name="season_amount" value={filterseason?.season_amount || ''} onChange={(e) =>
                    setForm({ ...form, season_amount: e.target.value })
                  } />

                  <div className="col-md-6">
                    <div className="single-box d-grid gap-1">
                      <label className="n2-color fs-seven text-capitalize">
                        season name <span className="p2-color">*</span>
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
                          name="season_exist"
                          readOnly
                          value={form.season_exist || ''}
                          onChange={(e) =>
                            setForm({ ...form, season_exist: e.target.value })
                          }

                          className="w-100 n2-color"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-box d-grid gap-1">
                      <label className="n2-color fs-seven text-capitalize">
                        name <span className="p2-color">*</span>
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
                          name="name"
                          value={form.name || ''}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="Enter Name"
                          className="w-100 n2-color"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-box d-grid gap-1">
                      <label className="n2-color fs-seven text-capitalize">
                        email <span className="p2-color">*</span>
                      </label>
                      <div className="input-area second focus-four transition rounded-1 s1-bg-color px-3 px-md-4 py-2 py-md-3 d-center gap-2">
                        <span className="d-center fs-five n3-color">
                          <i className="ph ph-envelope-simple" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={form.email || ''}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="Your email address"
                          className="w-100 n2-color"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-box d-grid gap-1">
                      <label className="n2-color fs-seven text-capitalize">
                        phone <span className="p2-color">*</span>
                      </label>
                      <div
                        id="phone-enter"
                        className="input-area second focus-four transition rounded-1 s1-bg-color px-3 px-md-4 py-2 py-md-3 d-center gap-2"
                      >
                        <span className="d-center fs-five n3-color">
                          <i className="ph ph-phone-call" />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone || ''}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          placeholder="Phone"
                          className="w-100 n2-color"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-box d-grid gap-1">
                      <label className="n2-color fs-seven text-capitalize">
                        Gender <span className="p2-color">*</span>
                      </label>
                      <div
                        id="subject-enter"
                        className="input-area second focus-four transition rounded-1 s1-bg-color px-3 px-md-4 py-2 py-md-3 d-center gap-2"
                      >

                        <select className="w-100 n2-color p-0" id="" name="gender"
                          value={form.gender || ''}
                          onChange={(e) =>
                            setForm({ ...form, gender: e.target.value })
                          }>
                          <option value="">Choose</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>

                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-box d-grid gap-1">
                      <label className="n2-color fs-seven text-capitalize">
                        city <span className="p2-color">*</span>
                      </label>
                      <div
                        id="phone-enter"
                        className="input-area second focus-four transition rounded-1 s1-bg-color px-3 px-md-4 py-2 py-md-3 d-center gap-2"
                      >
                        <span className="d-center fs-five n3-color">
                          <i className="ph ph-phone-call" />
                        </span>
                        <input
                          type="text"
                          name="city"
                          value={form.city || ''}
                          onChange={(e) =>
                            setForm({ ...form, city: e.target.value })
                          }
                          placeholder="City"
                          className="w-100 n2-color"
                        />
                      </div>
                    </div>
                  </div>


                  <p style={{ display: 'flex', gap: '5px' }}>If you have already user id & password then
                    <Link to="https://testhunar.rsmsgnr.com/user-login" style={{ color: 'blue' }}>
                      Log in
                    </Link>
                  </p>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      disabled={submitting}   // ✅ disable button while loading
                      className="box-style box-second first-alt transition d-center py-2 py-md-3 px-4 px-md-6 w-100"
                    >
                      {submitting ? (
                        <span className="fs-eight fw-semibold">⏳ Please wait...</span>
                      ) : (
                        <span className="fs-eight fw-semibold">Apply Now</span>
                      )}
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

export default AuditionFormPage