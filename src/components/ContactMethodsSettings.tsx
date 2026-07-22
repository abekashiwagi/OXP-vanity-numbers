import {
  X,
  ChevronRight,
  Info,
  CirclePlus,
  Pencil,
  RotateCw,
  EllipsisVertical,
  Settings,
  CircleCheck,
  CirclePlay,
  TriangleAlert,
  SquareArrowOutUpRight,
} from 'lucide-react'

type VanityNumber = {
  phone: string
  type: string
  leadSource: string
  forwardPreference: string
  routeCalls: string
  smsStatus: 'failed' | null
  smsRegister: boolean
  smsGear: boolean
}

const vanityNumbers: VanityNumber[] = [
  { phone: '(888) 743-8435', type: 'Lead', leadSource: 'Digital Ads', forwardPreference: 'Office Contacts', routeCalls: 'All Calls to Property', smsStatus: null, smsRegister: false, smsGear: false },
  { phone: '(855) 781-7319', type: 'Lead', leadSource: 'Facebook Lead Ads', forwardPreference: 'Office Contacts', routeCalls: 'All Calls to Property', smsStatus: null, smsRegister: false, smsGear: false },
  { phone: '(888) 683-8096', type: 'Lead', leadSource: 'Google Business Profile', forwardPreference: 'Office Contacts', routeCalls: 'All Calls to Property', smsStatus: null, smsRegister: false, smsGear: false },
  { phone: '(888) 683-4135', type: 'Lead', leadSource: '', forwardPreference: 'Office Contacts', routeCalls: 'All Calls to Property', smsStatus: null, smsRegister: false, smsGear: false },
  { phone: '(346) 389-5327', type: 'Lead', leadSource: 'Website', forwardPreference: 'Office Contacts', routeCalls: 'All Calls to Property', smsStatus: null, smsRegister: false, smsGear: false },
  { phone: '(346) 538-6485', type: 'Lead', leadSource: 'Apartment List', forwardPreference: 'Office Contacts', routeCalls: 'All Calls to Property', smsStatus: null, smsRegister: false, smsGear: false },
  { phone: '(346) 538-6487', type: 'Lead', leadSource: 'Apple Maps', forwardPreference: 'Office Contacts', routeCalls: 'All Calls to Property', smsStatus: null, smsRegister: false, smsGear: false },
  { phone: '(346) 538-6489', type: 'Lead', leadSource: 'Apartments.com', forwardPreference: 'Office Contacts', routeCalls: 'All Calls to Property', smsStatus: null, smsRegister: false, smsGear: false },
  { phone: '(346) 656-1919', type: 'Lead', leadSource: '', forwardPreference: 'Office Contacts', routeCalls: 'All Calls to Property', smsStatus: null, smsRegister: false, smsGear: false },
  { phone: '(346) 656-1923', type: 'Lead', leadSource: 'Zillow', forwardPreference: 'Office Contacts', routeCalls: 'All Calls to Property', smsStatus: null, smsRegister: false, smsGear: false },
  { phone: '(948) 849-2178', type: 'ELI+ Leasing AI', leadSource: '', forwardPreference: 'Office Contacts', routeCalls: '-', smsStatus: 'failed', smsRegister: true, smsGear: true },
  { phone: '(447) 223-3385', type: 'ELI+ Renewals AI', leadSource: '', forwardPreference: 'Office Contacts', routeCalls: '-', smsStatus: null, smsRegister: false, smsGear: true },
  { phone: '(478) 834-8000', type: 'ELI+ Payments AI', leadSource: '', forwardPreference: 'Office Contacts', routeCalls: '-', smsStatus: null, smsRegister: false, smsGear: true },
]

const additionalPhoneNumbers = [
  { phone: '(713) 319-9668', type: 'Maintenance', caption: '', displayOnWebsite: false },
  { phone: '(346) 358-5327', type: 'Primary', caption: 'website - marketing tracking number', displayOnWebsite: true },
]

const greetingsVoicemail = [
  'IVR - After Hours',
  'IVR - During Hours',
  'Lead',
  'Lead - After Hours',
  'Maintenance',
]

function HelpChip() {
  return (
    <span className="inline-flex items-center justify-center w-[14px] h-[14px] rounded-[3px] border border-[#a9c8ef] bg-[#eaf2fd] text-[#4285d6] text-[9px] font-semibold leading-none cursor-help select-none align-middle">
      ?
    </span>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <h2 className="text-[13px] font-semibold text-[#3e3f42]">{title}</h2>
      <HelpChip />
    </div>
  )
}

function PillButton({ label }: { label: string }) {
  return (
    <button className="inline-flex items-center gap-1.5 rounded-full border border-[#cfd0d4] bg-white px-3 py-[5px] text-[11px] text-[#3e3f42] hover:bg-[#f7f7f8] cursor-pointer">
      <CirclePlus className="w-[13px] h-[13px] text-[#3e3f42]" strokeWidth={1.75} />
      {label}
    </button>
  )
}

const th = 'text-left font-normal text-[#6b6f76] text-[11px] px-3 py-[9px] whitespace-nowrap'
const td = 'text-left text-[#55575c] text-[11px] px-3 py-[9px] whitespace-nowrap'

export function ContactMethodsSettings() {
  return (
    <div className="min-h-screen bg-[#f0f0f1]">
      {/* Top app bar */}
      <header className="bg-[#3c3c3e] h-[30px] flex items-center justify-between pl-3 pr-4 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <span className="text-white text-[13px] font-bold tracking-tight lowercase">entrata</span>
          <ChevronRight className="w-3 h-3 text-[#9a9a9e]" strokeWidth={2} />
          <span className="text-[#c9c9cd] text-[11px]">Caroline on Voss</span>
        </div>
        <div className="flex items-center gap-4">
          <SquareArrowOutUpRight className="w-[14px] h-[14px] text-[#c9c9cd] cursor-pointer" strokeWidth={1.75} />
          <button className="flex items-center gap-1.5 text-[#dcdcde] text-[11px] cursor-pointer">
            <X className="w-[13px] h-[13px]" strokeWidth={2} />
            Close
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="w-[88%] max-w-[1400px] mx-auto pt-5 pb-8">

        {/* Additional Phone Numbers */}
        <section className="bg-white border border-[#e3e3e6] rounded-[6px] px-3.5 pt-3 pb-3.5 mb-4">
          <div className="flex items-center justify-between mb-3 pl-1">
            <SectionTitle title="Additional Phone Numbers" />
            <PillButton label="Add Phone Number" />
          </div>

          <div className="border border-[#e6e6e9] rounded-[4px] overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#e6e6e9]">
                  <th className={`${th} pl-4 w-[24%]`}>Phone Number</th>
                  <th className={`${th} w-[24%]`}>Type</th>
                  <th className={`${th} w-[33%]`}>Caption</th>
                  <th className={`${th} w-[14%]`}>Display on Website</th>
                  <th className="w-[40px]"></th>
                </tr>
              </thead>
              <tbody>
                {additionalPhoneNumbers.map((item, idx) => (
                  <tr key={idx} className="border-b border-[#ededf0] last:border-b-0">
                    <td className={`${td} pl-4`}>{item.phone}</td>
                    <td className={td}>{item.type}</td>
                    <td className={td}>{item.caption}</td>
                    <td className="px-3 py-[9px]">
                      {item.displayOnWebsite && (
                        <CircleCheck className="w-[15px] h-[15px] text-[#4a4f55] ml-6" strokeWidth={1.5} />
                      )}
                    </td>
                    <td className="px-3 py-[9px] text-right">
                      <Pencil className="w-[13px] h-[13px] text-[#e8c33f] cursor-pointer inline-block" strokeWidth={2} fill="#e8c33f" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Vanity Phone Numbers */}
        <section className="bg-white border border-[#e3e3e6] rounded-[6px] px-3.5 pt-3 pb-3.5 mb-4">
          <div className="flex items-center justify-between mb-3 pl-1">
            <SectionTitle title="Vanity Phone Numbers" />
            <PillButton label="Request Vanity Number" />
          </div>

          {/* Info banner */}
          <div className="flex items-center gap-3 border border-[#e6e6e9] rounded-[8px] bg-[#fbfbfc] px-4 py-2.5 mb-3">
            <Info className="w-[16px] h-[16px] text-[#8a949e] flex-shrink-0" strokeWidth={1.75} />
            <div>
              <p className="text-[11.5px] font-bold text-[#3e3f42] leading-[1.5]">All free Lead type vanity numbers in use.</p>
              <p className="text-[11px] text-[#6b7075] leading-[1.5]">
                You have used the 10 free lead type vanity numbers that we offer. Additional lead type vanity numbers will be billed at $3.00 per number, per month.
              </p>
            </div>
          </div>

          <div className="border border-[#e6e6e9] rounded-[4px] overflow-x-auto">
            <table className="w-full min-w-[1180px] border-collapse">
              <thead>
                <tr className="border-b border-[#e6e6e9]">
                  <th className={`${th} pl-4 min-w-[110px]`}>Phone Number</th>
                  <th className={`${th} min-w-[110px]`}>Type</th>
                  <th className={`${th} min-w-[140px]`}>
                    <span className="inline-flex items-center gap-1.5">Lead Source <HelpChip /></span>
                  </th>
                  <th className={`${th} min-w-[130px]`}>Forward Preference</th>
                  <th className={`${th} min-w-[130px]`}>Route Calls</th>
                  <th className={`${th} min-w-[170px]`}>
                    <span className="inline-flex items-center gap-1.5">SMS Registration Status <HelpChip /></span>
                  </th>
                  <th className={`${th} min-w-[120px]`}>
                    <span className="inline-flex items-center gap-1.5">SMS <HelpChip /></span>
                  </th>
                  <th className={`${th} min-w-[120px]`}>Outbound Default</th>
                  <th className={`${th} min-w-[110px]`}>Expiration Date</th>
                  <th className={`${th} min-w-[70px]`}>Action</th>
                </tr>
              </thead>
              <tbody>
                {vanityNumbers.map((item, idx) => (
                  <tr key={idx} className="border-b border-[#ededf0] last:border-b-0">
                    <td className={`${td} pl-4`}>{item.phone}</td>
                    <td className={td}>{item.type}</td>
                    <td className={td}>{item.leadSource}</td>
                    <td className={td}>{item.forwardPreference}</td>
                    <td className={td}>{item.routeCalls}</td>
                    <td className="px-3 py-[9px]">
                      {item.smsStatus === 'failed' && (
                        <span className="inline-flex items-center gap-1.5">
                          <TriangleAlert className="w-[13px] h-[13px] text-[#d64541]" strokeWidth={2} />
                          <span className="text-[11px] text-[#d64541]">Failed</span>
                          <HelpChip />
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-[6px]">
                      <span className="inline-flex items-center gap-2.5">
                        {item.smsRegister && (
                          <button className="rounded-[4px] border border-[#cfd0d4] bg-white px-2.5 py-[3px] text-[11px] text-[#3e3f42] shadow-sm cursor-pointer hover:bg-[#f7f7f8]">
                            Register
                          </button>
                        )}
                        {item.smsGear && (
                          <Settings className="w-[14px] h-[14px] text-[#a8b530] cursor-pointer" strokeWidth={1.75} />
                        )}
                      </span>
                    </td>
                    <td className={td}></td>
                    <td className={td}></td>
                    <td className="px-3 py-[9px]">
                      <span className="inline-flex items-center gap-2.5">
                        <RotateCw className="w-[13px] h-[13px] text-[#4a9b62] cursor-pointer" strokeWidth={2} />
                        <Pencil className="w-[13px] h-[13px] text-[#e8c33f] cursor-pointer" strokeWidth={2} fill="#e8c33f" />
                        <EllipsisVertical className="w-[14px] h-[14px] text-[#55575c] cursor-pointer" strokeWidth={2} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Greetings & Voicemail */}
        <section className="bg-white border border-[#e3e3e6] rounded-[6px] px-3.5 pt-3 pb-3.5">
          <div className="flex items-center mb-3 pl-1">
            <SectionTitle title="Greetings & Voicemail" />
          </div>

          <div className="border border-[#e6e6e9] rounded-[4px] overflow-hidden">
            <table className="w-full border-collapse">
              <tbody>
                {greetingsVoicemail.map((name, idx) => (
                  <tr key={name} className={idx % 2 === 1 ? 'bg-[#f6f6f8]' : 'bg-white'}>
                    <td className={`${td} pl-4 w-[46%]`}>{name}</td>
                    <td className="px-3 py-[8px] w-[30%]">
                      <span className="inline-flex items-center gap-2 text-[#4285d6] cursor-pointer">
                        <CirclePlay className="w-[14px] h-[14px]" strokeWidth={1.75} />
                        <span className="text-[11px] hover:underline">Listen</span>
                      </span>
                    </td>
                    <td className="px-3 py-[8px] text-right">
                      <Pencil className="w-[13px] h-[13px] text-[#e8c33f] cursor-pointer inline-block" strokeWidth={2} fill="#e8c33f" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
