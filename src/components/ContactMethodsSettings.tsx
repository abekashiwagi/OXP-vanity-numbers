import { X, ChevronRight, Info, Plus, Phone, MoreVertical, Pencil, RefreshCw, Volume2 } from 'lucide-react'

const vanityNumbers = [
  {
    phone: '(800) 793-8430',
    type: 'Lead',
    leadSource: 'Digital Ads',
    forwardPreference: 'Office Contacts',
    routeCalls: 'All Calls to Property',
    smsStatus: null,
    sms: true,
    outboundDefault: false,
    expirationDate: '',
  },
  {
    phone: '(833) 781-7319',
    type: 'Lead',
    leadSource: 'Facebook Lead Ads',
    forwardPreference: 'Office Contacts',
    routeCalls: 'All Calls to Property',
    smsStatus: null,
    sms: true,
    outboundDefault: false,
    expirationDate: '',
  },
  {
    phone: '(888) 832-8996',
    type: 'Lead',
    leadSource: 'Google Business Profile',
    forwardPreference: 'Office Contacts',
    routeCalls: 'All Calls to Property',
    smsStatus: null,
    sms: true,
    outboundDefault: false,
    expirationDate: '',
  },
  {
    phone: '(800) 832-4135',
    type: 'Lead',
    leadSource: '',
    forwardPreference: 'Office Contacts',
    routeCalls: 'All Calls to Property',
    smsStatus: null,
    sms: true,
    outboundDefault: false,
    expirationDate: '',
  },
  {
    phone: '(346) 509-5327',
    type: 'Lead',
    leadSource: 'Website',
    forwardPreference: 'Office Contacts',
    routeCalls: 'All Calls to Property',
    smsStatus: null,
    sms: true,
    outboundDefault: false,
    expirationDate: '',
  },
  {
    phone: '(346) 338-8445',
    type: 'Lead',
    leadSource: 'Apartment List',
    forwardPreference: 'Office Contacts',
    routeCalls: 'All Calls to Property',
    smsStatus: null,
    sms: true,
    outboundDefault: false,
    expirationDate: '',
  },
  {
    phone: '(346) 338-8487',
    type: 'Lead',
    leadSource: 'Apple Maps',
    forwardPreference: 'Office Contacts',
    routeCalls: 'All Calls to Property',
    smsStatus: null,
    sms: true,
    outboundDefault: false,
    expirationDate: '',
  },
  {
    phone: '(346) 338-8489',
    type: 'Lead',
    leadSource: 'Apartments.com',
    forwardPreference: 'Office Contacts',
    routeCalls: 'All Calls to Property',
    smsStatus: null,
    sms: true,
    outboundDefault: false,
    expirationDate: '',
  },
  {
    phone: '(346) 509-1919',
    type: 'Lead',
    leadSource: '',
    forwardPreference: 'Office Contacts',
    routeCalls: 'All Calls to Property',
    smsStatus: null,
    sms: true,
    outboundDefault: false,
    expirationDate: '',
  },
  {
    phone: '(346) 606-1923',
    type: 'Lead',
    leadSource: 'Zillow',
    forwardPreference: 'Office Contacts',
    routeCalls: 'All Calls to Property',
    smsStatus: null,
    sms: true,
    outboundDefault: false,
    expirationDate: '',
  },
  {
    phone: '(946) 809-2178',
    type: 'Lead',
    leadSource: 'ELI+ Leading AI',
    forwardPreference: 'Office Contacts',
    routeCalls: '-',
    smsStatus: 'failed',
    sms: false,
    outboundDefault: false,
    expirationDate: '',
  },
  {
    phone: '(447) 222-2383',
    type: 'Lead',
    leadSource: 'ELI+ Tenants AI',
    forwardPreference: 'Office Contacts',
    routeCalls: '-',
    smsStatus: 'register',
    sms: false,
    outboundDefault: false,
    expirationDate: '',
  },
  {
    phone: '(478) 831-8880',
    type: 'Lead',
    leadSource: 'ELI+ Payments AI',
    forwardPreference: 'Office Contacts',
    routeCalls: '-',
    smsStatus: null,
    sms: false,
    outboundDefault: true,
    expirationDate: '',
  },
]

const additionalPhoneNumbers = [
  {
    phone: '(713) 319-9668',
    type: 'Maintenance',
    caption: '',
    displayOnWebsite: false,
  },
  {
    phone: '(346) 358-5327',
    type: 'Primary',
    caption: 'website - marketing tracking number',
    displayOnWebsite: true,
  },
]

const greetingsVoicemail = [
  { name: 'IVR - After Hours', hasAudio: true },
  { name: 'IVR - During Hours', hasAudio: true },
  { name: 'Lead', hasAudio: true },
  { name: 'Lead - After Hours', hasAudio: true },
  { name: 'Maintenance', hasAudio: true },
]

function InfoIcon({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center w-[16px] h-[16px] rounded-full border border-[#bbb] text-[#999] text-[10px] font-semibold cursor-help ${className}`}>
      ?
    </span>
  )
}

function ToggleSwitch({ enabled }: { enabled: boolean }) {
  return (
    <div className={`relative inline-flex h-[18px] w-[32px] items-center rounded-full transition-colors cursor-pointer ${enabled ? 'bg-[#4caf50]' : 'bg-[#ccc]'}`}>
      <span className={`inline-block h-[14px] w-[14px] rounded-full bg-white shadow transition-transform ${enabled ? 'translate-x-[16px]' : 'translate-x-[2px]'}`} />
    </div>
  )
}

export function ContactMethodsSettings() {
  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {/* Top Navigation Bar */}
      <header className="bg-[#242b36] h-[32px] flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-white text-[13px] font-bold tracking-wide">entrata</span>
          <ChevronRight className="w-3 h-3 text-[#8a919c]" />
          <span className="text-[#c0c5cc] text-[12px]">Caroline on Voss</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[18px] h-[18px] flex items-center justify-center">
            <div className="w-[14px] h-[14px] border border-[#8a919c] rounded-sm" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <X className="w-4 h-4 text-[#c0c5cc]" />
            <span className="text-[#c0c5cc] text-[12px]">Close</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-[1100px] mx-auto py-4 px-6">

        {/* Additional Phone Numbers Section */}
        <section className="bg-white rounded-[4px] shadow-sm mb-5">
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#e8e8e8]">
            <div className="flex items-center gap-2">
              <h2 className="text-[14px] font-semibold text-[#333]">Additional Phone Numbers</h2>
              <InfoIcon />
            </div>
            <button className="flex items-center gap-1.5 text-[12px] text-[#555] hover:text-[#333] cursor-pointer">
              <Plus className="w-3.5 h-3.5" />
              <span>Add Phone Number</span>
            </button>
          </div>

          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-[#e8e8e8]">
                <th className="text-left font-semibold text-[#555] px-5 py-2.5 w-[260px]">Phone Number</th>
                <th className="text-left font-semibold text-[#555] px-3 py-2.5 w-[180px]">Type</th>
                <th className="text-left font-semibold text-[#555] px-3 py-2.5">Caption</th>
                <th className="text-center font-semibold text-[#555] px-3 py-2.5 w-[140px]">Display on Website</th>
                <th className="w-[40px]"></th>
              </tr>
            </thead>
            <tbody>
              {additionalPhoneNumbers.map((item, idx) => (
                <tr key={idx} className="border-b border-[#f0f0f0] last:border-b-0 hover:bg-[#fafafa]">
                  <td className="px-5 py-2.5 text-[12px] text-[#333]">{item.phone}</td>
                  <td className="px-3 py-2.5 text-[12px] text-[#333]">{item.type}</td>
                  <td className="px-3 py-2.5 text-[12px] text-[#666]">{item.caption}</td>
                  <td className="px-3 py-2.5 text-center">
                    {item.displayOnWebsite && <ToggleSwitch enabled={true} />}
                  </td>
                  <td className="px-2 py-2.5 text-center">
                    <Pencil className="w-3.5 h-3.5 text-[#f0ad4e] cursor-pointer inline-block" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Vanity Phone Numbers Section */}
        <section className="bg-white rounded-[4px] shadow-sm mb-5">
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#e8e8e8]">
            <div className="flex items-center gap-2">
              <h2 className="text-[14px] font-semibold text-[#333]">Vanity Phone Numbers</h2>
              <InfoIcon />
            </div>
            <button className="flex items-center gap-1.5 text-[12px] text-[#555] border border-[#ccc] rounded-[3px] px-3 py-1.5 hover:bg-[#f5f5f5] cursor-pointer">
              <Phone className="w-3 h-3" />
              <span>Request Vanity Number</span>
            </button>
          </div>

          {/* Info Banner */}
          <div className="mx-5 my-4 flex items-start gap-3 bg-[#f0f7ff] border border-[#d4e8fc] rounded-[4px] px-4 py-3">
            <Info className="w-[18px] h-[18px] text-[#4a9eff] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[12px] font-semibold text-[#333] leading-snug">All free Lead type vanity numbers in use.</p>
              <p className="text-[11px] text-[#666] leading-snug mt-0.5">You have used the 10 free lead type vanity numbers that we offer. Additional lead type vanity numbers will be billed at $3.00 per number, per month.</p>
            </div>
          </div>

          {/* Vanity Numbers Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-[#e8e8e8]">
                  <th className="text-left font-semibold text-[#555] px-5 py-2.5 whitespace-nowrap">Phone Number</th>
                  <th className="text-left font-semibold text-[#555] px-3 py-2.5 whitespace-nowrap">Type</th>
                  <th className="text-left font-semibold text-[#555] px-3 py-2.5 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">Lead Source <InfoIcon /></span>
                  </th>
                  <th className="text-left font-semibold text-[#555] px-3 py-2.5 whitespace-nowrap">Forward Preference</th>
                  <th className="text-left font-semibold text-[#555] px-3 py-2.5 whitespace-nowrap">Route Calls</th>
                  <th className="text-left font-semibold text-[#555] px-3 py-2.5 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">SMS Registration Status <InfoIcon /></span>
                  </th>
                  <th className="text-center font-semibold text-[#555] px-3 py-2.5 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">SMS <InfoIcon /></span>
                  </th>
                  <th className="text-center font-semibold text-[#555] px-3 py-2.5 whitespace-nowrap">Outbound Default</th>
                  <th className="text-left font-semibold text-[#555] px-3 py-2.5 whitespace-nowrap">Expiration Date</th>
                  <th className="text-center font-semibold text-[#555] px-3 py-2.5 whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody>
                {vanityNumbers.map((item, idx) => (
                  <tr key={idx} className="border-b border-[#f0f0f0] last:border-b-0 hover:bg-[#fafafa]">
                    <td className="px-5 py-2.5 text-[12px] text-[#333] whitespace-nowrap">{item.phone}</td>
                    <td className="px-3 py-2.5 text-[12px] text-[#333]">{item.type}</td>
                    <td className="px-3 py-2.5 text-[12px] text-[#333]">{item.leadSource || ''}</td>
                    <td className="px-3 py-2.5 text-[12px] text-[#333]">{item.forwardPreference}</td>
                    <td className="px-3 py-2.5 text-[12px] text-[#333]">{item.routeCalls}</td>
                    <td className="px-3 py-2.5 text-[12px]">
                      {item.smsStatus === 'failed' && (
                        <span className="inline-flex items-center gap-1 text-[#d9534f]">
                          <span className="inline-flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#d9534f] text-white text-[9px]">!</span>
                          Failed
                          <InfoIcon />
                        </span>
                      )}
                      {item.smsStatus === 'register' && (
                        <span className="inline-flex items-center gap-1.5">
                          <span className="text-[12px] text-[#333] border border-[#ccc] rounded-[3px] px-2 py-0.5 cursor-pointer hover:bg-[#f5f5f5]">Register</span>
                          <InfoIcon />
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <ToggleSwitch enabled={item.sms} />
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      {item.outboundDefault && (
                        <div className="inline-flex items-center justify-center w-[16px] h-[16px] rounded-full bg-[#4caf50] text-white">
                          <span className="text-[10px]">&#10003;</span>
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-2.5 text-[12px] text-[#333]">{item.expirationDate}</td>
                    <td className="px-3 py-2.5 text-center whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        <RefreshCw className="w-3.5 h-3.5 text-[#888] cursor-pointer hover:text-[#555]" />
                        <Pencil className="w-3.5 h-3.5 text-[#f0ad4e] cursor-pointer hover:text-[#d9943a]" />
                        <MoreVertical className="w-3.5 h-3.5 text-[#888] cursor-pointer hover:text-[#555]" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Greetings & Voicemail Section */}
        <section className="bg-white rounded-[4px] shadow-sm mb-5">
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#e8e8e8]">
            <div className="flex items-center gap-2">
              <h2 className="text-[14px] font-semibold text-[#333]">Greetings &amp; Voicemail</h2>
              <InfoIcon />
            </div>
          </div>

          <table className="w-full text-[12px]">
            <tbody>
              {greetingsVoicemail.map((item, idx) => (
                <tr key={idx} className="border-b border-[#f0f0f0] last:border-b-0 hover:bg-[#fafafa]">
                  <td className="px-5 py-2.5 text-[12px] text-[#333] w-[50%]">{item.name}</td>
                  <td className="px-3 py-2.5 text-center">
                    <ToggleSwitch enabled={true} />
                  </td>
                  <td className="px-3 py-2.5">
                    {item.hasAudio && (
                      <span className="inline-flex items-center gap-1 text-[#1a73e8] text-[12px] cursor-pointer hover:underline">
                        <Volume2 className="w-3.5 h-3.5" />
                        Listen
                      </span>
                    )}
                  </td>
                  <td className="px-2 py-2.5 text-right w-[60px]">
                    <Pencil className="w-3.5 h-3.5 text-[#f0ad4e] cursor-pointer inline-block" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}
