import EmailRow from "@/components/Email/EmailRow";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

function Emails() {
  return (
    <DashboardLayout>
      <div >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 11, 1, 1, 1, 1, 1]?.map(
          (item) => (
            <EmailRow />
          )
        )}
      </div>
    </DashboardLayout>
  );
}

export default Emails;
