import {renderNumber} from '../../utils/numbers';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {calculate, setAction, setNumbers, clear} from './CalculatorSlice';

const CalculatorPage = () => {
  const {showNumbers, memberAction} = useSelector((state: RootState) => state.calculator);
  const dispatch = useDispatch();
  console.log(memberAction);

  const actionCalc = (type: string) => {
    dispatch(setAction(type));
    // if (memberAction){
    //   dispatch(calculate());
    // }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="border w-[300px] border-black p-2">
        <div className="border border-black h-[60px]">
          {showNumbers}
        </div>
        <div className="grid grid-cols-4 mt-3">
          <div className="col-span-4 grid grid-cols-4">
            <button
              type="button"
              className="grid place-content-center border border-black"
              onClick={() => dispatch(clear())}
            >
              {'<'}
            </button>
          </div>
          <div className="col-span-3 grid grid-cols-3">
            {
              renderNumber().reverse().map((number) =>
                <button
                  type="button"
                  className="grid place-content-center border border-black"
                  onClick={() => dispatch(setNumbers(number.toString()))}
                  key={number}
                >
                  {number}
                </button>
              )
            }
            <button
              type="button"
              className="grid col-span-2 place-content-center border border-black"
            >
              0
            </button>
          </div>
          <div className="col-span-1 grid grid-cols-1">
            <button
              type="button"
              className="grid place-content-center border border-black"
              onClick={() => dispatch(calculate())}
            >
              =
            </button>
            <button
              type="button"
              className="grid place-content-center border border-black"
              onClick={() => actionCalc('+')}
            >
              +
            </button>
            <button
              type="button"
              className="grid place-content-center border border-black"
              onClick={() => actionCalc('-')}
            >
              -
            </button>
            <button
              type="button"
              className="grid place-content-center border border-black"
              onClick={() => actionCalc('/')}
            >
              /
            </button>
            <button
              type="button"
              className="grid place-content-center border border-black"
              onClick={() => actionCalc('*')}
            >
              *
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;