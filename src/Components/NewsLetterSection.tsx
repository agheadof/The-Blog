import { memo } from 'react'

const NewsLetterSection = () => {
  return (
    <div className="flex flex-col py-8 text-center">
      <p className="pb-3 font-semibold text-[#7F56D9]">Newlatters</p>
      <p className="pb-6 text-5xl font-semibold">Stories and interviews</p>
      <p className="pb-10 text-xl font-normal text-[#667085] dark:text-[#C0C5D0]">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <div className="tablet:grid-rows-2 grid w-full grid-flow-col grid-rows-3 justify-center gap-x-4 gap-y-2">
        <input
          className="w-full max-w-[360px] rounded-lg border-1 border-[#D0D5DD] bg-white px-4 py-3 placeholder:text-[#667085]"
          type="email"
          placeholder="Enter your email"
        />
        <p className="tablet:order-1 order-2 text-start text-[#667085]">
          We care about your data in our{' '}
          <span className="underline">privacy policy</span>
        </p>
        <button className="tablet:order-2 order-1 w-28 cursor-pointer rounded-lg border-1 border-[#7F56D9] bg-[#7F56D9] px-5 py-3 text-white">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default memo(NewsLetterSection)
