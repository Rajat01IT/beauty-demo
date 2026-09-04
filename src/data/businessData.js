export const businessData = {
  name: 'Makeover by Antima',
  hindiName: 'मेकओवर बाय अंतिम',
  category: 'Beauty Parlour',
  rating: 3.2,
  reviewCount: 10,
  phone: '063500 11695',
  address: ['First floor, Mota bhai complex, Mahaveer chauk,', 'Gangashahar, Bikaner, Rajasthan 334001'],
  plusCode: 'X8P2+R8 Bikaner, Rajasthan',
  openingTime: 'Opens at 10:00 AM',
}

export const phoneLink = 'tel:06350011695'
export const directionsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${businessData.name}, ${businessData.address.join(' ')}`)}`
