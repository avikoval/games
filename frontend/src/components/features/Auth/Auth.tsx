import { memo, useEffect } from "react";
import { AuthProps } from "./types";

export const Auth = memo((props: AuthProps) => {
    const { children, status } = props;

    useEffect(() => {
        if (status === "authenticated") {
            
        }
    }, []);

    if (status === "loading") {
        return <div>loading</div>;
    }

    return <>{children}</>;
});

Auth.displayName = "Auth";
