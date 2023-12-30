

import { Link } from 'react-router-dom'
import bannerlog from '../../assets/login.png'

function SignUp() {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="w-1/2 shrink-0  max-w-sm shadow-2xl bg-base-100">
                  <form className="card-body">
               <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Type Your Name" name='name' className="input input-bordered" required />
        </div>       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SIGNUP</button>
            </div>
            <p>Have a Acount?<Link to="/login">Please Login</Link></p>
          </form>
    </div>
    <div className="card w-1/2 ">
      
          <img src={bannerlog} />
    </div>
  </div>
</div>
  )
}

export default SignUp