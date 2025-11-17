"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store/store';
import { getReferralById, Referral as ReferralType } from '@/lib/feature/userMachine/profitSlice';

const Referral = () => {
 const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  // Referrals state from profit slice
  const { referralData, loading, error } = useSelector(
    (state: RootState) => state.profit.referrals
  );

  useEffect(() => {
    if (user?.id) {
      dispatch(getReferralById(user.id as string));
    }
  }, [user?.id, dispatch]);

  return (
    <section className="px-2 py-4">
      <h2 className="mb-2 text-3xl font-bold text-white">Referral Users</h2>

      <div className="w-full bg-[#121417] mt-6 rounded-xl text-white">

        {/* Table Header */}
        <div className="grid grid-cols-5 bg-[#282c31c4] rounded-t-[13px] font-[400] px-6 py-4.5 text-[#d0d0d0] text-[15.8px]">
          <span>Name</span>
          <span className="text-center">Email Id</span>
          <span className="text-center">Date</span>
          <span className="text-center">Deposits</span>
          <span className="text-center">Profits</span>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-10 text-center text-gray-400 text-lg">
            Loading referrals...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="py-10 text-center text-red-500 text-lg">
            {error}
          </div>
        )}

        {/* No Data */}
        {!loading && !error && referralData.length === 0 && (
          <div className="py-10 text-center text-gray-400 text-lg">
            No Referrals Found
          </div>
        )}

        {/* Data Rows */}
        {!loading && !error && referralData.length > 0 && (
          <div>
            {referralData.map((item: ReferralType , index) => (
              <div
                key={index}
                className="
                  grid grid-cols-5 items-center px-6 py-4
                  bg-[#1c1f2488] border-b border-[#555]
                  transition-all duration-300
                  hover:scale-[1.01] hover:-rotate-1 hover:bg-[#22262b]
                "
              >
                <div>{item.firstName} {item.lastName}</div>
                <div className="text-center text-gray-300">{item.email}</div>
                <div className="text-center text-gray-400 text-sm">
                  {new Date(item.createdAt).toLocaleDateString()}
                </div>
                <div className="text-center font-semibold">{item.deposit_count} Times</div>
                <div className="text-center font-semibold text-[#21eb00]">${item.discount}</div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Referral;
