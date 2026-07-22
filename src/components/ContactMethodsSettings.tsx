import { useState } from 'react'
import {
  X,
  ChevronRight,
  ChevronDown,
  Info,
  CirclePlus,
  Pencil,
  Phone,
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

const callTrackingNumbers: VanityNumber[] = [
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
]

// Numbers currently provisioned on Twilio
const oxpCommunicationNumbers: VanityNumber[] = [
  { phone: '(948) 849-2178', type: 'ELI+ Leasing AI', leadSource: '', forwardPreference: 'Office Contacts', routeCalls: '-', smsStatus: 'failed', smsRegister: true, smsGear: true },
  { phone: '(447) 223-3385', type: 'ELI+ Renewals AI', leadSource: '', forwardPreference: 'Office Contacts', routeCalls: '-', smsStatus: null, smsRegister: false, smsGear: true },
  { phone: '(478) 834-8000', type: 'ELI+ Payments AI', leadSource: '', forwardPreference: 'Office Contacts', routeCalls: '-', smsStatus: null, smsRegister: false, smsGear: true },
  { phone: '(832) 419-7702', type: 'ELI+ Maintenance AI', leadSource: '', forwardPreference: 'Office Contacts', routeCalls: '-', smsStatus: null, smsRegister: false, smsGear: true },
  { phone: '(346) 227-8841', type: 'SMS Only', leadSource: '', forwardPreference: 'Office Contacts', routeCalls: '-', smsStatus: null, smsRegister: false, smsGear: true },
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

function PillButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-[#cfd0d4] bg-white px-3 py-[5px] text-[11px] text-[#3e3f42] hover:bg-[#f7f7f8] cursor-pointer"
    >
      <CirclePlus className="w-[13px] h-[13px] text-[#3e3f42]" strokeWidth={1.75} />
      {label}
    </button>
  )
}

function YesNoToggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`relative inline-flex items-center h-[24px] w-[58px] rounded-full transition-colors cursor-pointer select-none ${
        value ? 'bg-[#3e7d4e]' : 'bg-[#b9babc]'
      }`}
    >
      <span
        className={`absolute text-[11px] font-medium ${
          value ? 'left-[10px] text-white' : 'right-[10px] text-[#f2f2f2]'
        }`}
      >
        {value ? 'Yes' : 'No'}
      </span>
      <span
        className={`absolute h-[18px] w-[18px] rounded-full bg-white shadow transition-all ${
          value ? 'right-[3px]' : 'left-[3px]'
        }`}
      />
    </button>
  )
}

type EditingRow = { row: VanityNumber; section: 'callTracking' | 'oxp' }

const oxpTypeOptions = [
  'ELI+ Leasing AI',
  'ELI+ Renewals AI',
  'ELI+ Maintenance AI',
  'ELI+ Payments AI',
  'ELI+ Super Agent Voice',
  'SMS SMS Only',
]
const forwardPreferenceOptions = ['Office Contact', 'Property Contacts', 'Call Center']

function ModalSelect({
  value,
  options,
  onChange,
}: {
  value: string
  options: string[]
  onChange: (v: string) => void
}) {
  return (
    <div className="relative w-[300px]">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-[6px] border border-[#c9cacd] bg-white pl-3 pr-8 py-[7px] text-[13px] text-[#2f3033] cursor-pointer focus:outline-none focus:border-[#8ab2e0]"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-[#55575c]" strokeWidth={2} />
    </div>
  )
}

function ModalHelpChip() {
  return (
    <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-[4px] border border-[#a9c8ef] bg-white text-[#4285d6] text-[11px] font-semibold leading-none cursor-help select-none">
      ?
    </span>
  )
}

function CallTrackingModalBody({ row }: { row: VanityNumber }) {
  const [forwardPreference, setForwardPreference] = useState('Office Contact')
  const [useForSms, setUseForSms] = useState(false)
  const [expirationDate, setExpirationDate] = useState('')
  const [aiBailout, setAiBailout] = useState(false)

  const labelCls = 'w-[38%] shrink-0 pr-4 text-right text-[13px] text-[#2f3033]'
  const hasLeadSource = !!row.leadSource

  return (
    <div className="px-4 pt-4 pb-6">
      {/* Retest banner */}
      <div className="flex justify-end rounded-[8px] bg-[#f5f5f6] px-3 py-3 mb-4">
        <button className="inline-flex items-center gap-2 rounded-[8px] border border-[#c9cacd] bg-white px-3.5 py-[7px] text-[13px] text-[#2f3033] shadow-sm cursor-pointer hover:bg-[#f7f7f8]">
          <Phone className="w-[14px] h-[14px]" strokeWidth={1.75} />
          Retest Vanity Number
        </button>
      </div>

      {hasLeadSource && (
        <p className="text-[13px] text-[#55575c] leading-[1.5] mb-4">
          This vanity number is associated with at least one lead source, please disassociate before changing the number type.
        </p>
      )}

      <div className="flex items-center bg-[#f8f8f9] py-2.5">
        <label className={labelCls}>Forward Preference:</label>
        <ModalSelect value={forwardPreference} options={forwardPreferenceOptions} onChange={setForwardPreference} />
      </div>
      <div className="flex items-center bg-white py-2.5">
        <label className={labelCls}>Route Calls:</label>
        <span className="text-[13px] text-[#2f3033]">{row.routeCalls}</span>
      </div>
      <div className="flex items-center bg-[#f8f8f9] py-2.5">
        <label className={labelCls}>Lead Source:</label>
        <input
          type="text"
          readOnly
          value={row.leadSource || ''}
          className="w-[300px] rounded-[6px] border border-[#c9cacd] bg-[#f0f0f1] px-3 py-[7px] text-[13px] text-[#2f3033] cursor-default focus:outline-none"
        />
        <span className="ml-auto pr-3"><ModalHelpChip /></span>
      </div>
      <div className="flex items-center bg-white py-3">
        <label className={labelCls}>Use for SMS:</label>
        <YesNoToggle value={useForSms} onChange={setUseForSms} />
        <span className="ml-auto pr-3"><ModalHelpChip /></span>
      </div>
      <div className="flex items-center bg-[#f8f8f9] py-3">
        <label className={labelCls}>Expiration Date:</label>
        <div className="flex items-center gap-3">
          <input
            type="date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            className="rounded-[6px] border border-[#c9cacd] bg-white px-3 py-[6px] text-[13px] text-[#2f3033] focus:outline-none focus:border-[#8ab2e0] w-[180px]"
          />
          <button
            onClick={() => setExpirationDate('')}
            className="inline-flex items-center gap-1.5 rounded-[6px] border border-[#c9cacd] bg-white px-3 py-[6px] text-[13px] text-[#2f3033] shadow-sm cursor-pointer hover:bg-[#f7f7f8]"
          >
            <X className="w-[12px] h-[12px]" strokeWidth={2} />
            Remove Expiration
          </button>
        </div>
      </div>
      <div className="flex items-center bg-white py-3">
        <label className={labelCls}>AI Bailout Number:</label>
        <YesNoToggle value={aiBailout} onChange={setAiBailout} />
        <span className="ml-auto pr-3"><ModalHelpChip /></span>
      </div>
    </div>
  )
}

function OxpModalBody({ row }: { row: VanityNumber }) {
  const [type, setType] = useState(row.type)
  const [forwardPreference, setForwardPreference] = useState('Office Contact')
  const [useForSms, setUseForSms] = useState(true)
  const [outboundDefault, setOutboundDefault] = useState(false)
  const [clickToCall, setClickToCall] = useState(false)

  const options = oxpTypeOptions.includes(type) ? oxpTypeOptions : [type, ...oxpTypeOptions]
  const labelCls = 'w-[38%] shrink-0 pr-4 text-right text-[13px] text-[#2f3033]'

  return (
    <div className="px-4 pt-4 pb-6">
      {/* Retest banner */}
      <div className="flex justify-end rounded-[8px] bg-[#f5f5f6] px-3 py-3 mb-4">
        <button className="inline-flex items-center gap-2 rounded-[8px] border border-[#c9cacd] bg-white px-3.5 py-[7px] text-[13px] text-[#2f3033] shadow-sm cursor-pointer hover:bg-[#f7f7f8]">
          <Phone className="w-[14px] h-[14px]" strokeWidth={1.75} />
          Retest Vanity Number
        </button>
      </div>

      <div className="flex items-center bg-[#f8f8f9] py-2.5">
        <label className={labelCls}>Phone Number Type:</label>
        <ModalSelect value={type} options={options} onChange={setType} />
      </div>
      <div className="flex items-center bg-white py-2.5">
        <label className={labelCls}>Forward Preference:</label>
        <ModalSelect value={forwardPreference} options={forwardPreferenceOptions} onChange={setForwardPreference} />
      </div>

      <div className="h-[14px]" />

      <div className="flex items-center bg-[#f8f8f9] py-3">
        <label className={labelCls}>Use for SMS:</label>
        <YesNoToggle value={useForSms} onChange={setUseForSms} />
        <span className="ml-auto pr-3"><ModalHelpChip /></span>
      </div>
      <div className="flex items-center bg-white py-3">
        <label className={labelCls}>Outbound Default:</label>
        <YesNoToggle value={outboundDefault} onChange={setOutboundDefault} />
        <span className="ml-auto pr-3"><ModalHelpChip /></span>
      </div>
      <div className="flex items-center bg-[#f8f8f9] py-3">
            <label className={labelCls}>Voice:</label>
            <YesNoToggle value={clickToCall} onChange={setClickToCall} />
            <span className="ml-auto pr-3"><ModalHelpChip /></span>
          </div>
    </div>
  )
}

const addCallTrackingTypeOptions = [
  'Please Select',
  'Call Tracker Lead',
  'Call Tracker Maintenance',
  'Call Tracker Maintenance Emergency',
]

const addOxpTypeOptions = [
  'Please Select',
  'ELI+ Leasing AI',
  'ELI+ Renewals AI',
  'ELI+ Maintenance AI',
  'ELI+ Payments AI',
  'ELI+ Super Agent Voice',
  'SMS SMS Only',
]

function generateNumbers(code: string) {
  const cities = ['Casper, WY', 'Sheridan, WY', 'Greenriver, US', ', US', 'Sheridan, WY', 'Laramie, WY', ', US', 'Gillette, US']
  return cities.map((city, i) => ({
    number: `(${code || '307'}) ${String(Math.floor(Math.random() * 900 + 100))}-${String(Math.floor(Math.random() * 9000 + 1000))}`,
    city,
    id: i,
  }))
}

function AddVanityNumberModal({ section, onClose }: { section: 'callTracking' | 'oxp'; onClose: () => void }) {
  const isCallTracking = section === 'callTracking'
  const typeOptions = isCallTracking ? addCallTrackingTypeOptions : addOxpTypeOptions
  const [step, setStep] = useState<1 | 2>(1)
  const [type, setType] = useState('Please Select')
  const [tollFree, setTollFree] = useState(false)
  const [areaCode, setAreaCode] = useState('')
  const [forwardPreference, setForwardPreference] = useState('Office Contacts')
  const [useForSms, setUseForSms] = useState(false)
  const [useForVoice, setUseForVoice] = useState(false)
  const [outboundDefault, setOutboundDefault] = useState(false)
  const [expirationDate, setExpirationDate] = useState('')
  const [availableNumbers, setAvailableNumbers] = useState<ReturnType<typeof generateNumbers>>([])
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null)
  const [step2AreaCode, setStep2AreaCode] = useState('')

  const isEliType = type.startsWith('ELI+')
  const labelCls = 'w-[38%] shrink-0 pr-4 text-right text-[13px] text-[#2f3033]'

  function handleSubmitStep1() {
    const code = areaCode || '307'
    setStep2AreaCode(code)
    setAvailableNumbers(generateNumbers(code))
    setStep(2)
  }

  function handleRefreshNumbers() {
    const code = step2AreaCode || '307'
    setAvailableNumbers(generateNumbers(code))
    setSelectedNumber(null)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4" onClick={onClose}>
      <div
        className="w-full max-w-[680px] rounded-[6px] bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-stretch justify-between bg-[#1f1f21]">
          <h3 className="px-4 py-3 text-[14px] font-bold text-white">Add Vanity Number</h3>
          <div className="flex items-stretch">
            <div className="flex items-center pr-3">
              <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-[3px] border border-[#8a8a8e] text-white text-[12px] font-semibold cursor-help select-none">
                ?
              </span>
            </div>
            <button
              onClick={onClose}
              className="flex items-center gap-2 bg-[#3a3a3d] px-4 text-[13px] text-white cursor-pointer hover:bg-[#4a4a4d]"
            >
              <X className="w-[14px] h-[14px]" strokeWidth={2} />
              Close
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-4 pt-4 pb-6">
          {/* Stepper */}
          <div className="flex items-stretch mb-5">
            <div className={`relative flex items-center text-[12px] font-semibold pl-4 pr-6 py-[7px] ${step >= 1 ? 'bg-[#c0392b] text-white' : 'bg-[#e8e8ea] text-[#55575c]'}`}>
              Select Preferences
              <div className="absolute -right-[14px] top-0 h-full w-[14px] overflow-hidden">
                <div className={`absolute top-1/2 -translate-y-1/2 -left-[14px] w-[28px] h-[28px] rotate-45 ${step >= 1 ? 'bg-[#c0392b]' : 'bg-[#e8e8ea]'}`} />
              </div>
            </div>
            <div className={`relative flex items-center text-[12px] pl-6 pr-6 py-[7px] ml-[1px] ${step === 2 ? 'bg-[#c0392b] text-white font-semibold' : 'bg-[#e8e8ea] text-[#55575c]'}`}>
              Request Number
              <div className="absolute -right-[14px] top-0 h-full w-[14px] overflow-hidden">
                <div className={`absolute top-1/2 -translate-y-1/2 -left-[14px] w-[28px] h-[28px] rotate-45 ${step === 2 ? 'bg-[#c0392b]' : 'bg-[#e8e8ea]'}`} />
              </div>
            </div>
          </div>

          {step === 1 ? (
            <>
              {/* Step 1: Select Preferences */}
              <div className="flex items-center bg-white py-2.5">
                <label className={labelCls}>Phone Number Type:</label>
                <ModalSelect value={type} options={typeOptions} onChange={setType} />
              </div>

              {isEliType ? (
                <>
                  <div className="flex items-center bg-[#f8f8f9] py-2.5">
                    <label className={labelCls}>Area Code:</label>
                    <input
                      type="text"
                      maxLength={3}
                      value={areaCode}
                      onChange={(e) => setAreaCode(e.target.value.replace(/\D/g, ''))}
                      className="w-[70px] rounded-[6px] border border-[#c9cacd] bg-white px-3 py-[7px] text-[13px] text-[#2f3033] focus:outline-none focus:border-[#8ab2e0] text-center"
                    />
                  </div>
                  <div className="flex items-center bg-white py-3">
                    <label className={labelCls}>Use for Voice:</label>
                    <YesNoToggle value={useForVoice} onChange={setUseForVoice} />
                    <span className="ml-auto pr-3"><ModalHelpChip /></span>
                  </div>
                  <div className="flex items-center bg-[#f8f8f9] py-3">
                    <label className={labelCls}>Use for Outbound Default:</label>
                    <YesNoToggle value={outboundDefault} onChange={setOutboundDefault} />
                    <span className="ml-auto pr-3"><ModalHelpChip /></span>
                  </div>
                  <div className="flex items-center bg-white py-3">
                    <label className={labelCls}>Use for SMS:</label>
                    <YesNoToggle value={useForSms} onChange={setUseForSms} />
                    <span className="ml-auto pr-3"><ModalHelpChip /></span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center bg-[#f8f8f9] py-3">
                    <label className={labelCls}>Toll-Free:</label>
                    <YesNoToggle value={tollFree} onChange={setTollFree} />
                  </div>
                  <div className="flex items-center bg-white py-2.5">
                    <label className={labelCls}>Area Code:</label>
                    <input
                      type="text"
                      maxLength={3}
                      value={areaCode}
                      onChange={(e) => setAreaCode(e.target.value.replace(/\D/g, ''))}
                      className="w-[70px] rounded-[6px] border border-[#c9cacd] bg-white px-3 py-[7px] text-[13px] text-[#2f3033] focus:outline-none focus:border-[#8ab2e0] text-center"
                    />
                  </div>
                  <div className="flex items-center bg-[#f8f8f9] py-2.5">
                    <label className={labelCls}>Forward Preference:</label>
                    <ModalSelect value={forwardPreference} options={['Office Contacts', ...forwardPreferenceOptions.slice(1)]} onChange={setForwardPreference} />
                  </div>
                  <div className="flex items-center bg-white py-3">
                    <label className={labelCls}>Use for SMS:</label>
                    <YesNoToggle value={useForSms} onChange={setUseForSms} />
                    <span className="ml-auto pr-3"><ModalHelpChip /></span>
                  </div>
                  {isCallTracking && (
                    <div className="flex items-center bg-[#f8f8f9] py-3">
                      <label className={labelCls}>Expiration Date:</label>
                      <div className="flex items-center gap-3">
                        <input
                          type="date"
                          value={expirationDate}
                          onChange={(e) => setExpirationDate(e.target.value)}
                          className="rounded-[6px] border border-[#c9cacd] bg-white px-3 py-[6px] text-[13px] text-[#2f3033] focus:outline-none focus:border-[#8ab2e0] w-[180px]"
                        />
                        <button
                          onClick={() => setExpirationDate('')}
                          className="inline-flex items-center gap-1.5 rounded-[6px] border border-[#c9cacd] bg-white px-3 py-[6px] text-[13px] text-[#2f3033] shadow-sm cursor-pointer hover:bg-[#f7f7f8]"
                        >
                          <X className="w-[12px] h-[12px]" strokeWidth={2} />
                          Remove Expiration
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {/* Step 2: Request Number */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <h4 className="text-[16px] font-bold text-[#2f3033]">Available Phone Numbers</h4>
                <span className="text-[13px] text-[#55575c]">Area Code</span>
                <input
                  type="text"
                  maxLength={3}
                  value={step2AreaCode}
                  onChange={(e) => setStep2AreaCode(e.target.value.replace(/\D/g, ''))}
                  className="w-[60px] rounded-[4px] border border-[#c9cacd] bg-white px-2 py-[5px] text-[13px] text-[#2f3033] focus:outline-none focus:border-[#8ab2e0] text-center"
                />
                <button
                  onClick={handleRefreshNumbers}
                  className="inline-flex items-center gap-1.5 rounded-[6px] border border-[#c9cacd] bg-white px-3 py-[6px] text-[13px] text-[#2f3033] shadow-sm cursor-pointer hover:bg-[#f7f7f8]"
                >
                  <RotateCw className="w-[13px] h-[13px]" strokeWidth={2} />
                  Get New Group of Numbers
                </button>
              </div>

              <div className="border border-[#e6e6e9] rounded-[4px] overflow-hidden">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#55575c]">
                      <th className="w-[50px]"></th>
                      <th className="text-left text-white text-[11px] font-semibold px-3 py-2 uppercase tracking-wider">Number</th>
                      <th className="text-left text-white text-[11px] font-semibold px-3 py-2 uppercase tracking-wider">City, ST</th>
                    </tr>
                  </thead>
                  <tbody>
                    {availableNumbers.map((item) => (
                      <tr
                        key={item.id}
                        className={`border-b border-[#ededf0] last:border-b-0 cursor-pointer hover:bg-[#f5f5f7] ${selectedNumber === item.id ? 'bg-[#eef4fc]' : item.id % 2 === 1 ? 'bg-[#f8f8f9]' : 'bg-white'}`}
                        onClick={() => setSelectedNumber(item.id)}
                      >
                        <td className="px-3 py-2.5 text-center">
                          <div className={`w-[16px] h-[16px] rounded-full border-2 inline-flex items-center justify-center ${selectedNumber === item.id ? 'border-[#3e7d4e]' : 'border-[#b9babc]'}`}>
                            {selectedNumber === item.id && <div className="w-[8px] h-[8px] rounded-full bg-[#3e7d4e]" />}
                          </div>
                        </td>
                        <td className="px-3 py-2.5 text-[13px] text-[#2f3033]">{item.number}</td>
                        <td className="px-3 py-2.5 text-[13px] text-[#55575c]">{item.city}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end bg-[#efeff0] border-t border-[#dededf] px-4 py-3">
          <div className="flex items-center gap-2.5">
            <button
              onClick={step === 1 ? handleSubmitStep1 : onClose}
              className="rounded-[6px] bg-[#47835a] px-7 py-[8px] text-[14px] text-white cursor-pointer hover:bg-[#3e7450]"
            >
              Submit Request
            </button>
            <span className="text-[13px] text-[#55575c]">
              or{' '}
              <button onClick={onClose} className="text-[#4285d6] cursor-pointer hover:underline">
                Cancel
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function EditVanityNumberModal({ editing, onClose }: { editing: EditingRow; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4" onClick={onClose}>
      <div
        className="w-full max-w-[680px] rounded-[6px] bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-stretch justify-between bg-[#1f1f21]">
          <h3 className="px-4 py-3 text-[14px] font-bold text-white">Edit Vanity Number</h3>
          <div className="flex items-stretch">
            <div className="flex items-center pr-3">
              <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-[3px] border border-[#8a8a8e] text-white text-[12px] font-semibold cursor-help select-none">
                ?
              </span>
            </div>
            <button
              onClick={onClose}
              className="flex items-center gap-2 bg-[#3a3a3d] px-4 text-[13px] text-white cursor-pointer hover:bg-[#4a4a4d]"
            >
              <X className="w-[14px] h-[14px]" strokeWidth={2} />
              Close
            </button>
          </div>
        </div>

        {editing.section === 'callTracking' ? (
          <CallTrackingModalBody row={editing.row} />
        ) : (
          <OxpModalBody row={editing.row} />
        )}

        {/* Footer */}
        <div className="flex items-center justify-between bg-[#efeff0] border-t border-[#dededf] px-4 py-3">
          <button
            onClick={onClose}
            className="rounded-[6px] border border-[#c9cacd] bg-white px-5 py-[8px] text-[13px] text-[#2f3033] shadow-sm cursor-pointer hover:bg-[#f7f7f8]"
          >
            Delete
          </button>
          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="rounded-[6px] bg-[#47835a] px-7 py-[8px] text-[14px] text-white cursor-pointer hover:bg-[#3e7450]"
            >
              Save
            </button>
            <span className="text-[13px] text-[#55575c]">
              or{' '}
              <button onClick={onClose} className="text-[#4285d6] cursor-pointer hover:underline">
                Cancel
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const th = 'text-left font-normal text-[#6b6f76] text-[11px] px-3 py-[9px] whitespace-nowrap'
const td = 'text-left text-[#55575c] text-[11px] px-3 py-[9px] whitespace-nowrap'

function VanityNumbersTable({ rows, onEdit }: { rows: VanityNumber[]; onEdit: (row: VanityNumber) => void }) {
  return (
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
          {rows.map((item, idx) => (
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
                  <Pencil
                    className="w-[13px] h-[13px] text-[#e8c33f] cursor-pointer"
                    strokeWidth={2}
                    fill="#e8c33f"
                    onClick={() => onEdit(item)}
                  />
                  <EllipsisVertical className="w-[14px] h-[14px] text-[#55575c] cursor-pointer" strokeWidth={2} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ContactMethodsSettings() {
  const [editing, setEditing] = useState<EditingRow | null>(null)
  const [addModalSection, setAddModalSection] = useState<'callTracking' | 'oxp' | null>(null)

  return (
    <div className="min-h-screen bg-[#f0f0f1]">
      {editing && <EditVanityNumberModal key={editing.row.phone} editing={editing} onClose={() => setEditing(null)} />}
      {addModalSection && <AddVanityNumberModal section={addModalSection} onClose={() => setAddModalSection(null)} />}
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

        {/* Call Tracking Vanity Numbers */}
        <section className="bg-white border border-[#e3e3e6] rounded-[6px] px-3.5 pt-3 pb-3.5 mb-4">
          <div className="flex items-center justify-between mb-3 pl-1">
            <SectionTitle title="Call Tracking Vanity Numbers" />
            <PillButton label="Request Vanity Number" onClick={() => setAddModalSection('callTracking')} />
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

          <VanityNumbersTable
            rows={callTrackingNumbers}
            onEdit={(row) => setEditing({ row, section: 'callTracking' })}
          />
        </section>

        {/* OXP Communication Vanity Numbers */}
        <section className="bg-white border border-[#e3e3e6] rounded-[6px] px-3.5 pt-3 pb-3.5 mb-4">
          <div className="flex items-center justify-between mb-3 pl-1">
            <SectionTitle title="OXP Communication Vanity Numbers" />
            <PillButton label="Request Vanity Number" onClick={() => setAddModalSection('oxp')} />
          </div>

          <VanityNumbersTable
            rows={oxpCommunicationNumbers}
            onEdit={(row) => setEditing({ row, section: 'oxp' })}
          />
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
