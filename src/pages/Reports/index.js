import React, { useEffect, useState } from 'react'
import ReportCard from '../../components/ReportCard';
import { useFetch } from '../../helpers/useFetch'
import "./reports.css"

const Reports = () => {
  const [reportsData, setReportsData] = useState([])
  const { response } = useFetch({
    url: "/api/reports/fetch_reports?kids_id=f54ead50-c1be-11eb-9be1-0242ac110002",
    method: "GET",
    body: {}
  });

  useEffect(() => {
    if (response) {
      setReportsData(response.reports)
    }
  }, [response])

  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <div>
          {reportsData && reportsData.map(value =>
          (<ReportCard
            key={value.kids_id}
            sessionNo={value._session_no}
            sessionDate={value.session_date}
            imageId={value.image_id}
            activityId={value.activity_id}
            teachingPartner={value.teaching_partner}
            summary={value.summary}
            nextActivity={value.next_activity}
          />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reports
