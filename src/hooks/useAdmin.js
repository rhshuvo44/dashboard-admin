import { useEffect, useState } from "react";
import BackendApiUrl from "../api/BackendApiUrl";

const useAdmin = () => {
  const [admin, setAdmin] = useState({
    name: "ripon",
    email: "rhshuvo@gmail.com",
    password: "123456s",
  });
  const [adminLoading, setAdminLoading] = useState(true);
  const user = true;
  useEffect(() => {
    const email = user?.email;
    if (email) {
      BackendApiUrl.get(`/admin/${email}`).then((data) => {
        setAdmin(data.admin);
        setAdminLoading(false);
      });
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
