
import PropTypes from 'prop-types'

function HeaderSection({number, text}) {
  return (
    <div className="flex items-center justify-center ml-4 max-w-screen md:ml-16 md:left-12 left-6 border-slate-900">
      <h1 className="text-2xl md:text-6xl text-copper-800">0{number}</h1>
      <div className="w-0.5 transform rotate-45 translate-x-4 translate-y-4 bg-copper-300 md:w-1 h-36 md:h-64 md:translate-y-8"></div>
      <h1 className='mx-auto text-5xl leading-loose text-center -translate-x-6 translate-y-8 md:-translate-x-24 md:translate-y-24 md:text-8xl inspiration text-copper-600'>{text}</h1>
    </div>
  )
}

HeaderSection.propTypes = {
  number : PropTypes.number,
  text: PropTypes.string
}

export default HeaderSection
