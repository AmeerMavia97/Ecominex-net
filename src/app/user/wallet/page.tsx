"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store/store";
import { getUserBalance } from "@/lib/feature/userMachine/balanceSlice";
import { fetchUserWithdrawals, requestWithdrawal } from "@/lib/feature/withdraw/withdrawalSlice";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Wallet() {
  const dispatch = useDispatch<AppDispatch>();

  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { userBalance, loading: balanceLoading } = useSelector((state: RootState) => state.balance);
  const { withdrawals, isLoading: withdrawalsLoading } = useSelector((state: RootState) => state.withdrawal);

  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawAddress, setWithdrawAddress] = useState("");
  const [withdrawNetwork, setWithdrawNetwork] = useState("");
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const [isDepositOpen, setIsDepositOpen] = useState(false);

  type NetworkType = "TRC20" | "ERC20";
  const [depositNetwork, setDepositNetwork] = useState<NetworkType | "">("");

  const depositAddresses = {
    ERC20: { address: "0xE997EA28dA5Bcf59bED6e36245DF080DE8DA2358", qr: "/erc20.jpg" },
    TRC20: { address: "TV7d8mrM6MpCecbDQ2tifG19YNDJmcvRHc", qr: "/trc20.jpg" },
  };

  // Fetch balances & withdrawals
  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.id) dispatch(getUserBalance(user.id));
      if (user.email) dispatch(fetchUserWithdrawals({ email: user.email }));
    }
  }, [dispatch, isAuthenticated, user]);

  const handleWithdraw = async () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) < 59.2) {
      toast.error("Minimum withdrawal amount is $59.20");
      return;
    }
    if (!withdrawAddress || !withdrawNetwork) {
      toast.error("Please fill all fields");
      return;
    }
    if (!user?.id || !user?.email) {
      toast.error("User not authenticated");
      return;
    }

    const payload = {
      userId: user.id,
      email: user.email,
      amount: parseFloat(withdrawAmount),
      walletAddress: withdrawAddress,
      network: withdrawNetwork,
    };

    try {
      const result = await dispatch(requestWithdrawal(payload)).unwrap();
      toast.success(result?.message || "Withdrawal request submitted successfully");
      setIsWithdrawOpen(false);
      setWithdrawAmount("");
      setWithdrawAddress("");
      setWithdrawNetwork("");
    } catch (error: any) {
      const msg = error?.message || error?.data?.message || "Failed to submit withdrawal request";
      toast.error(msg);
    }
  };

  return (
    <div className="space-y-6 p-4 md:p-6 min-h-screen" style={{ backgroundColor: "#000" }}>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Wallet</h2>
          <p className="text-sm text-slate-400">Manage your funds and view transaction history</p>
        </div>

        <div className="flex gap-2">
          {/* Deposit Button */}
          <Dialog open={isDepositOpen} onOpenChange={setIsDepositOpen}>
            <DialogTrigger asChild>
              <Button className="text-white" style={{ backgroundColor: "#22c55e" }}>
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Deposit
              </Button>
            </DialogTrigger>
            <DialogContent className="border-slate-700 max-w-md" style={{ backgroundColor: "#000" }}>
              <DialogHeader>
                <DialogTitle className="text-white text-xl font-semibold">Deposit Funds</DialogTitle>
                <DialogDescription className="text-slate-400">Select network and send USDT</DialogDescription>
              </DialogHeader>
              {/* Deposit Network Selection */}
              <div className="grid grid-cols-2 gap-3">
                {["ERC20", "TRC20"].map((network) => (
                  <div
                    key={network}
                    onClick={() => setDepositNetwork(network as NetworkType)}
                    className={`cursor-pointer rounded-lg border p-4 text-center hover:bg-slate-800 ${
                      depositNetwork === network ? "border-green-500" : "border-slate-700"
                    }`}
                    style={{ backgroundColor: "#1b1b1b" }}
                  >
                    <img
                      src={network === "ERC20" ? "https://cryptologos.cc/logos/ethereum-eth-logo.png" : "https://cryptologos.cc/logos/tron-trx-logo.png"}
                      className="w-12 h-12 mx-auto"
                    />
                    <p className="text-white font-semibold mt-2">{network === "ERC20" ? "Ethereum" : "TRON"}</p>
                    <p className="text-slate-400 text-xs">{network}</p>
                  </div>
                ))}
              </div>

              {depositNetwork && (
                <div className="space-y-3 pt-2">
                  <div className="flex justify-center">
                    <img src={depositAddresses[depositNetwork].qr} alt="QR Code" className="w-36 h-36 rounded-lg border border-slate-700" />
                  </div>
                  <div className="p-3 bg-slate-800 rounded border border-slate-700 text-white text-center text-sm break-all">
                    {depositAddresses[depositNetwork].address}
                  </div>
                  <Button
                    onClick={() => navigator.clipboard.writeText(depositAddresses[depositNetwork].address)}
                    variant="outline"
                    className="w-full"
                  >
                    Copy Address
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* Withdraw Button */}
          <Dialog open={isWithdrawOpen} onOpenChange={setIsWithdrawOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 text-white">
                <ArrowUpFromLine className="mr-2 h-4 w-4" />
                Withdraw
              </Button>
            </DialogTrigger>
            <DialogContent className="border-slate-700" style={{ backgroundColor: "#000" }}>
              <DialogHeader>
                <DialogTitle className="text-white text-2xl font-semibold">Withdraw Funds</DialogTitle>
                <DialogDescription className="text-slate-400">Minimum withdrawal: $50.00</DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <Label className="text-slate-300">Amount</Label>
                <Input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="text-white"
                  style={{ backgroundColor: "#1b1b1b" }}
                  placeholder="50.00"
                />

                <Label className="text-slate-300">Wallet Address</Label>
                <Input
                  value={withdrawAddress}
                  onChange={(e) => setWithdrawAddress(e.target.value)}
                  className="bg-slate-800 text-white"
                  placeholder="Enter address"
                  style={{ backgroundColor: "#1b1b1b" }}
                />

                <div className="grid grid-cols-2 gap-4">
                  {["ERC20", "TRC20"].map((network) => (
                    <div
                      key={network}
                      onClick={() => setWithdrawNetwork(network)}
                      className={`cursor-pointer rounded-xl border p-5 hover:bg-slate-800 transition ${
                        withdrawNetwork === network ? "border-green-500" : "border-slate-700"
                      }`}
                      style={{ backgroundColor: "#1b1b1b" }}
                    >
                      <span className="text-white font-semibold">{network}</span>
                    </div>
                  ))}
                </div>

                <Button onClick={handleWithdraw} className="w-full bg-red-600 text-white">
                  Submit Withdrawal
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* BALANCE CARDS */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-slate-800" style={{ backgroundColor: "#1b1b1b" }}>
          <CardHeader>
            <CardTitle className="text-slate-400 text-sm">Available Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-white font-bold">
              {balanceLoading ? "Loading..." : `$${userBalance?.totalBalance ?? 0}`}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800" style={{ backgroundColor: "#1b1b1b" }}>
          <CardHeader>
            <CardTitle className="text-slate-400 text-sm">Mining Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-white font-bold">
              {balanceLoading ? "Loading..." : `$${userBalance?.miningBalance ?? 0}`}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-800" style={{ backgroundColor: "#1b1b1b" }}>
          <CardHeader>
            <CardTitle className="text-slate-400 text-sm">Admin Added</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-white font-bold">
              {balanceLoading ? "Loading..." : `$${userBalance?.adminAdd ?? 0}`}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
