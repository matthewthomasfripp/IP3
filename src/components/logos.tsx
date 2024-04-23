import Image from 'next/image'
const sizes: {
  [key: string]: {
    height: number
    width: number
    marginTop?: number
    marginLeft?: number
  }
} = {
  waitrose: { height: 20, width: 74 },
  morrisons: { height: 15, width: 99 },
  iceland: { height: 14, width: 62 },
  sainsburys: { height: 16, width: 83 },
  coop: { height: 14, width: 50 },
  tesco: { height: 14, width: 49 },
  asda: { height: 13, width: 44 },
  homebargains: { height: 18, width: 87 },
  wilko: { height: 18, width: 49 },
  boots: { height: 20, width: 32 },
  superdrug: { height: 24, width: 70, marginTop: -7 },
  aldi: { height: 24, width: 59 },
  bm: { height: 19, width: 37 },
  ocado: { height: 19, width: 73 },
  savers: { height: 17, width: 66, marginTop: -5 },
  poundland: { height: 18, width: 104 },
  amazon: { height: 18, width: 60 },
  ebay: { height: 24, width: 46 },
  bother: { height: 19, width: 47 },
}

export default function Logo(name: string) {
  return (
    <div className='flex h-5 content-center'>
      <Image
        src={`/logos/${name}.svg`}
        alt={name || 'Shop'}
        height={sizes[name].height}
        width={sizes[name].width}
        style={{
          display: 'block',
          objectFit: 'contain',
          marginTop: sizes[name].marginTop || 0,
        }}
      />
    </div>
  )
}
