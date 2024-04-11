import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Card} from '../components/Card';
import {HandleCallback} from "@kobbleio/react";

const Callback: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    return (
        <HandleCallback navigate={navigate} afterSignInUrl={'/'} onError={(message) => setError(message)}>
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
        </HandleCallback>
    );
};

export default Callback;