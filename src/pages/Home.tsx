import {useEffect, useState} from 'react';
import { Card } from '../components/Card';
import {PoweredBy} from "../components/PoweredBy";
import { kobbleClient } from "../kobble";
import {User} from "@kobbleio/auth-spa-js";

const Home = () => {
    const [user, setUser] = useState<User | null>(null);
    const [actionResult, setActionResult] = useState<any>(null);

    const isAuthenticated = !!user;

    useEffect(() => {
        const fetchUser = async () => {
            const user = await kobbleClient.getUser();
            setUser(user);
        }

        /**
         * We fetch and store the user state on page load.
         */
        fetchUser();

        /**
         * We update the user state when it's updated.
         */
        kobbleClient.onAuthStateChanged((data) => {
            // Handle user state change as needed
            // For example, update the user object in the store
            setUser(data.user);
        })
    }, [])

    const login = () => {
        kobbleClient.loginWithRedirect();
    };

    const logout = () => {
        kobbleClient.logout();
    };

    const getAccessToken = async () => {
        const token = await kobbleClient.getAccessToken();
        setActionResult(token);
    };

    const getIdToken = async () => {
        const token = await kobbleClient.getIdToken();
        setActionResult(token);
    };

    const getUser = async () => {
        const user = await kobbleClient.getUser();
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
                    {!isAuthenticated ? (
                        <div className="flex items-center gap-2">
                            <button onClick={login} className="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3">
                                Login
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <button onClick={logout} className="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3">
                                Logout
                            </button>
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
                    )}
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