import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { kobbleClient } from '../kobble';
import {Card} from '../components/Card';

const Callback: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const authenticate = async () => {
            try {
                await kobbleClient.handleRedirectCallback();
                navigate('/', {
                    replace: true,
                });
            } catch (e: any) {
                console.log(e.message);
                setError(e.message);
            }
        };

        authenticate();
    }, [navigate]);

    return (
        <div className="h-screen flex items-center justify-center">
            {!error ? (
                <h1 className="text-xl animate-pulse">Authenticating...</h1>
            ) : (
                <div>
                    <Card className="max-w-lg">
                        <p className="text-md mb-5">
                            An error occurred while authenticating. This is likely because of a misconfiguration of the SDK.
                        </p>
                        <p className="text-red-500">Error Code: {error}</p>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default Callback;