import "./Achievement.css";

const Achievement = () => {
  return (
    <div id="fifth_row">
      <h1 className="heading1">Achievements</h1>
      <div className="badge badge1">
        <p className="title1">1st position</p>
        <p className="subtitle1">District level speech competition on World Environmental Health Day.</p>
      </div>

      <div className="badge badge2">
        <p className="title1">1st position</p>
        <p className="subtitle1">District level working modal exhibition in 2020.</p>
      </div>

    <div className="badge badge3">
        <p className="title1">School Topper </p>
        <p className="subtitle1">Secondary School of Education (CBSE) in 2020 from D.M.F. Academy</p>
        
      </div>

        {/* <div className="badge badge4">
        <p className="title1">WINNING TEAM</p>
        <p className="subtitle1">CTF 365</p>
      </div>

      <div className="badge badge5">
        <p className="title1">WINNING TEAM</p>
        <p className="subtitle1">CTF 365</p>
      </div> */}
    </div>
  );
};

export default Achievement;
