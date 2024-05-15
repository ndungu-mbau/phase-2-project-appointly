import { Card } from "../../components/card";

export const Dashboard = () => (
  <div className= "flex place-content-around mt-96">

    {/* MY APPOINTMENT CARD */}
    <Card
      icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        className ="icon icon-tabler icon-tabler-24-hours stroke-cyan-500 "
        width="46"
        height="46"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 13c.325 2.532 1.881 4.781 4 6" />
        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2" />
        <path d="M4 5v4h4" />
        <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
        <path d="M18 15v2a1 1 0 0 0 1 1h1" />
        <path d="M21 15v6" />
      </svg>}
      title={<h1 className = "text-4xl font-bold " >Appontments Made :</h1>}
      description={<h1 className = "text-3xl font-semibold text-sky-400/100">1</h1>}
      linkText={"Appointments Made:"}
      href={"/dashboard/appointments"} />

     
     {/* MY APPOINTMENT INVITES */}
      <Card
      icon={<svg
        xmlns="http://www.w3.org/2000/svg"
        className ="icon icon-tabler icon-tabler-24-hours stroke-cyan-500"
        width="46"
        height="46"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 13c.325 2.532 1.881 4.781 4 6" />
        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2" />
        <path d="M4 5v4h4" />
        <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
        <path d="M18 15v2a1 1 0 0 0 1 1h1" />
        <path d="M21 15v6" />
      </svg>}
      title={<h1 className = "text-4xl font-bold " >Appontment Invites :</h1>}
      description={<h1 className = "text-3xl font-semibold text-sky-400/100" >1</h1>}
      linkText={"Appointment Invites:"}
      href={"/dashboard/appointments"} />
  </div>
);
