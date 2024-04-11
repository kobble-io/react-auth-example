import { useState } from 'react';
import { Card } from '../components/Card';
import {PoweredBy} from "../components/PoweredBy";
import {
    LoginButton,
    LogoutButton,
    PricingLink,
    ProfileLink,
    SignedIn,
    SignedOut,
    useAuth,
    useKobble
} from "@kobbleio/react";

const Home = () => {
    const { user } = useAuth();
    const { kobble } = useKobble();

    const [actionResult, setActionResult] = useState<any>(null);

    const getAccessToken = async () => {
        const token = await kobble?.getAccessToken();
        setActionResult(token);
    };

    const getIdToken = async () => {
        const token = await kobble?.getIdToken();
        setActionResult(token);
    };

    const getUser = async () => {
        const user = await kobble?.getUser();
        setActionResult(user);
    };

    return (
        <div className="flex flex-col justify-between items-center w-full">
            <div className="flex gap-5 flex-col md:flex-row justify-between items-center max-w-full w-[1080px] pt-20 px-10">
                <div className="rounded-full border border-[#3b3b3b] bg-[#1f1f1f] text-[#fbfbfb] py-3 px-5">
                    Get started by editing <code className="font-semibold">src/pages/Home.tsx</code>
                </div>
                <div>
                    <PoweredBy />
                </div>
            </div>
            <main className="py-20">
                <span>Available actions:</span>
                <div className="flex items-center gap-2 justify-between mt-5">
                    <SignedOut>
                        <div className="flex items-center gap-2">
                            <LoginButton>
                                <button className="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3">
                                    Login
                                </button>
                            </LoginButton>
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <div className="flex flex-col gap-2">
                            <div className={'flex items-center gap-3'}>
                                <LogoutButton>
                                    <button className="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3">
                                        Logout
                                    </button>
                                </LogoutButton>

                                <ProfileLink className="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3">
                                    My Profile
                                </ProfileLink>

                                <PricingLink className="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3">
                                    View Pricing
                                </PricingLink>
                            </div>
                            <div className={'flex items-center gap-3'}>
                                <button onClick={getIdToken} className="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3">
                                    Get Id Token
                                </button>
                                <button onClick={getUser} className="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3">
                                    Get User
                                </button>
                                <button onClick={getAccessToken} className="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3">
                                    Get Access Token
                                </button>
                            </div>
                        </div>
                    </SignedIn>
                </div>

                <Card className="overflow-x-scroll w-[500px]">
                    <span className="font-semibold">Action result</span>
                    <pre>{JSON.stringify(actionResult)}</pre>
                </Card>

                <Card className="overflow-x-scroll w-[500px]">
                    <span className="font-semibold">User profile</span>
                    <pre>{user ? JSON.stringify(user) : 'Not logged in'}</pre>
                </Card>
            </main>
        </div>
    );
};

export default Home;