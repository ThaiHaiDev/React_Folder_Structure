import Navbar from '../../../components/Navbar/Navbar';
import './Signin.scss';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signin">
        <div className="container__sign-in">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Đăng nhập</h1>
            <div className="social-container">
              <Link to="#" className="socialg">
                <img src="https://img.icons8.com/color/344/google-logo.png" alt="go_icon" />
              </Link>
              <Link to="#" className="social">
                <img src="https://img.icons8.com/fluency/344/facebook-new.png" alt="fa_icon" />
              </Link>
              <Link to="#" className="social">
                <img src="https://img.icons8.com/ios-glyphs/344/github.png" alt="gi_icon" />
              </Link>
            </div>
            <span>hoặc đăng nhập bằng</span>
            <label>
              <input
                type="email"
                placeholder="Địa chỉ Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'This is not a valid email',
                  },
                })}
              />
              {errors.email && <span className="message_error">{`${errors.email && errors.email?.message}`}</span>}
            </label>

            <label>
              <input
                className="signup__form-input"
                type="password"
                placeholder="Mật khẩu"
                {...register('password', {
                  required: 'Password is required',
                  maxLength: {
                    value: 16,
                    message: 'Password must be less than 16 characters',
                  },
                })}
              />
              {errors.password && <span className="message_error">{`${errors.password?.message}`}</span>}
            </label>
            <button type="submit">Đăng nhập</button>
          </form>
          <div className="forgot-password">
            <p>Quên mật khẩu</p>
            <Link to="/signup" className="link-create">
              Tạo tài khoản ngay
            </Link>
          </div>
          <div className="policy">
            <p>
              Bằng cách đăng ký hoặc đăng nhập, bạn đã hiểu và đồng ý với{' '}
              <Link to="" className="link-policy">
                Điều Khoản Sử Dụng
              </Link>{' '}
              và{' '}
              <Link to="" className="link-policy">
                Chính Sách Bảo Mật
              </Link>{' '}
              của Yourtours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
