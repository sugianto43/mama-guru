import React from 'react'

const ReportCard = ({
  sessionNo,
  sessionDate,
  imageId,
  activityId,
  teachingPartner,
  nextActivity,
  summary
}) => {
  return (
    <div>
      <div className="text-center card">
        <div className="card-header">
          <small className="text-muted">Session {sessionNo} -- {sessionDate}</small>
        </div><div className="card-body">
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <img
              className="card-img"
              alt=""
              src={`http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/images/image?image_id=${imageId}`}
              style={{ width: "20rem" }}
            />
          </div>
          <div className="card-title h5" style={{ fontWeight: "bold" }}>{activityId}</div>
          <p className="card-text">{summary}</p>
          <footer className="blockquote-footer">
            Co-Teaching partner <cite title="Source Title"> {teachingPartner}</cite>
          </footer>
          <button type="button" className="btn btn-info">Download Report</button>
        </div>
        <div className="card-footer">
          <small className="text-muted">Next Activity/Improvement Plan: {nextActivity}</small>
        </div>
      </div>
      <br />
    </div>
  )
}

export default ReportCard
