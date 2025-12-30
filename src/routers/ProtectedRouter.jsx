import { useEffect } from "react";
import { usePrincipalState } from "../store/usePrincipalState";

function ProtectedRouter({ children }) {
    const { isLoggedIn, principal, loading, login, logout } =
        usePrincipalState();

    useEffect(() => {
        if (!loading) {
            if (!isLoggedIn) {
                alert("로그인 후 이용해주세요.");
                window.location.href = "/auth/signin";
            }
        }
    }, [loading]);

    return children;
}

export default ProtectedRouter;
