import './App.css';
import PriceCart from './Components/PriceCart/PriceCart';

const details=[
  {
    pricetype: 'Free',
    price: '$0',
    includeslist: ['Single User', '5GB Storage', 'Unlimited Public Projects', 'Community Access'],
    excludelist: ['Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports']
  },
  {
    pricetype: 'Plus',
    price: '$9',
    includeslist: ['5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access',
    'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain'],
    excludelist: ['Monthly Status Reports']
  },
  {
    pricetype: 'Pro',
    price: '$49',
    includeslist: ['Single User', '150GB Storage', 'Unlimited Public Projects', 'Community Access',
    'Unlimited Private Projects', 'Dedicated Phone Support', 'Unlimited Free Subdomains', 'Monthly Status Reports'],
    excludelist: []
  }
]

function App() {
  return (
    <div>
      <h1>Pricing Table</h1>
    <PriceCart data={details}/>
    </div>
  );
}

export default App;
