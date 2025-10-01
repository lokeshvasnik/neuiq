
import AdvisoryEmployeeExp from '../components/AdvisoryPage/AdvisoryEmployeeExp/AdvisoryEmployeeExp'
import Breadcrumb from '../components/Breadcrumb'
import { advisoryEmployeeBreadcrumb } from '../Utils/breadcrumbdata'
import ContactUsForm from '../components/ContactUsForm'
import PageBanner from '../components/PageBanner'
import { EmployeeExpPageData } from '../Utils/data'

const AdvisoryEmployee = () => {
  return (
    <div>
      <div className='header_banner text-white   px-2'>
        <div className="lg:px-10 px-0 max-w-full mx-auto">
          <Breadcrumb breadcrumbData={advisoryEmployeeBreadcrumb}/>
        </div>
      </div>
      <PageBanner data={EmployeeExpPageData.banner} />
      <AdvisoryEmployeeExp data={EmployeeExpPageData.ourServices}/>
      <ContactUsForm />
    </div>
  )
}

export default AdvisoryEmployee