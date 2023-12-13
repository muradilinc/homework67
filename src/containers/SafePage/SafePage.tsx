import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {changePassword, checkPassword, clearPassword, removePassword} from './SafeSlice';
import {renderNumber} from '../../utils/numbers';
import {useNavigate} from 'react-router-dom';

const SafePage = () => {
  const navigate = useNavigate();
  const {password, status} = useSelector((state: RootState) => state.safe);
  const dispatch = useDispatch();

  const checkingPassword = () => {
    dispatch(checkPassword());
    setTimeout(() => {
      dispatch(clearPassword());
      navigate('/calculator');
    }, 3000);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="border w-[300px] border-black p-2">
          <div className="w-[80%] mx-auto">
            <div
              className={`w-full h-[60px] items-center pe-2 border border-black flex justify-end ${status === 'success' ? 'bg-green-500 text-white' : status === 'unsuccessful' ? 'bg-red-500 text-white' : null}`}>
              {
                status === 'success' ? 'Access Granted' : status === 'unsuccessful' ? 'Access Denied'
                  :
                  password.map((_, i) =>
                    <span className="text-3xl"
                          key={i}>*</span>
                  )
              }
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {
                renderNumber().reverse().map((number) =>
                  <button
                    type="button"
                    onClick={() => dispatch(changePassword(number))}
                    className="grid place-content-center border border-black"
                    key={number}
                  >
                    {number}
                  </button>
                )
              }
              <button
                type="button"
                className="grid place-content-center border border-black"
                onClick={() => dispatch(removePassword())}
              >
                {'<'}
              </button>
              <button
                type="button"
                className="grid place-content-center border border-black"
                onClick={() => dispatch(changePassword(0))}
              >
                0
              </button>
              <button
                type="button"
                className="grid place-content-center border border-black"
                onClick={checkingPassword}
              >
                E
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SafePage;