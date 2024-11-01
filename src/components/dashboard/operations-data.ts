export interface Operation {
    id: string;
    title: string;
    kpiValue: string;
    kpiLabel: string;
    timeframe: string;
    data: Array<{ name: string; value: number }>;
    details?: Array<{ label: string; value: string }>;
  }
  
  export const operations: Operation[] = [
    {
      id: 'financials',
      title: 'Financials',
      kpiValue: '$2.4M',
      kpiLabel: 'Revenue MTD',
      timeframe: 'Last updated 2h ago',
      data: [
        { name: 'W1', value: 2400 },
        { name: 'W2', value: 2100 },
        { name: 'W3', value: 2400 },
        { name: 'W4', value: 2300 }
      ],
      details: [
        { label: 'YTD Revenue', value: '$28.6M' },
        { label: 'Expenses', value: '$1.2M' },
        { label: 'Net Profit', value: '$1.2M' },
        { label: 'Profit Margin', value: '50%' }
      ]
    },
    {
      id: 'corporate-objectives',
      title: 'Corporate Objectives',
      kpiValue: '87%',
      kpiLabel: 'Goal Completion',
      timeframe: 'Q1 2024',
      data: [
        { name: 'W1', value: 75 },
        { name: 'W2', value: 80 },
        { name: 'W3', value: 84 },
        { name: 'W4', value: 87 }
      ],
      details: [
        { label: 'Goals Met', value: '26/30' },
        { label: 'In Progress', value: '4' },
        { label: 'At Risk', value: '1' },
        { label: 'Completion Rate', value: '87%' }
      ]
    },
    {
      id: 'human-capital',
      title: 'Human Capital',
      kpiValue: '342',
      kpiLabel: 'Active Employees',
      timeframe: 'Updated today',
      data: [
        { name: 'W1', value: 330 },
        { name: 'W2', value: 334 },
        { name: 'W3', value: 338 },
        { name: 'W4', value: 342 }
      ],
      details: [
        { label: 'New Hires', value: '12' },
        { label: 'Turnover Rate', value: '2.8%' },
        { label: 'Open Positions', value: '8' },
        { label: 'Satisfaction', value: '4.2/5' }
      ]
    },
    {
      id: 'supply-chain',
      title: 'Supply Chain',
      kpiValue: '94%',
      kpiLabel: 'On-time Delivery',
      timeframe: 'Last 30 days',
      data: [
        { name: 'W1', value: 88 },
        { name: 'W2', value: 90 },
        { name: 'W3', value: 92 },
        { name: 'W4', value: 94 }
      ],
      details: [
        { label: 'Active Orders', value: '156' },
        { label: 'Lead Time', value: '3.2 days' },
        { label: 'Suppliers', value: '42' },
        { label: 'Order Accuracy', value: '99.2%' }
      ]
    },
    {
      id: 'technology',
      title: 'Technology',
      kpiValue: '99.9%',
      kpiLabel: 'System Uptime',
      timeframe: 'Last 7 days',
      data: [
        { name: 'W1', value: 99.8 },
        { name: 'W2', value: 99.9 },
        { name: 'W3', value: 99.9 },
        { name: 'W4', value: 99.9 }
      ],
      details: [
        { label: 'Active Users', value: '1,245' },
        { label: 'Response Time', value: '0.3s' },
        { label: 'Open Tickets', value: '12' },
        { label: 'Systems', value: '28' }
      ]
    },
    {
      id: 'esg-metrics',
      title: 'ESG Metrics',
      kpiValue: '42%',
      kpiLabel: 'Carbon Reduction',
      timeframe: 'Year to Date',
      data: [
        { name: 'W1', value: 30 },
        { name: 'W2', value: 35 },
        { name: 'W3', value: 38 },
        { name: 'W4', value: 42 }
      ],
      details: [
        { label: 'Energy Usage', value: '-15%' },
        { label: 'Water Saved', value: '2.3M gal' },
        { label: 'Waste Recycled', value: '86%' },
        { label: 'ESG Score', value: '82/100' }
      ]
    },
    {
      id: 'hse',
      title: 'HSE',
      kpiValue: '145',
      kpiLabel: 'Days Without Incident',
      timeframe: 'Current Streak',
      data: [
        { name: 'W1', value: 115 },
        { name: 'W2', value: 125 },
        { name: 'W3', value: 135 },
        { name: 'W4', value: 145 }
      ],
      details: [
        { label: 'Safety Score', value: '98%' },
        { label: 'Near Misses', value: '3' },
        { label: 'Training Hours', value: '450' },
        { label: 'Certifications', value: '100%' }
      ]
    },
    {
      id: 'fleet-management',
      title: 'Fleet Management',
      kpiValue: '85%',
      kpiLabel: 'Fleet Utilization',
      timeframe: 'This Month',
      data: [
        { name: 'W1', value: 82 },
        { name: 'W2', value: 83 },
        { name: 'W3', value: 84 },
        { name: 'W4', value: 85 }
      ],
      details: [
        { label: 'Active Vehicles', value: '124' },
        { label: 'Maintenance Due', value: '8' },
        { label: 'Fuel Efficiency', value: '+12%' },
        { label: 'Miles Logged', value: '45,892' }
      ]
    },
    {
      id: 'risk-management',
      title: 'Risk Management',
      kpiValue: '12',
      kpiLabel: 'Active Risk Items',
      timeframe: 'Current',
      data: [
        { name: 'W1', value: 15 },
        { name: 'W2', value: 14 },
        { name: 'W3', value: 13 },
        { name: 'W4', value: 12 }
      ],
      details: [
        { label: 'High Priority', value: '3' },
        { label: 'Medium Priority', value: '6' },
        { label: 'Low Priority', value: '3' },
        { label: 'Risk Score', value: '72/100' }
      ]
    },
    {
      id: 'operations',
      title: 'Operations',
      kpiValue: '93%',
      kpiLabel: 'Efficiency Rate',
      timeframe: 'Last 30 days',
      data: [
        { name: 'W1', value: 90 },
        { name: 'W2', value: 91 },
        { name: 'W3', value: 92 },
        { name: 'W4', value: 93 }
      ],
      details: [
        { label: 'Output Rate', value: '450/hr' },
        { label: 'Quality Score', value: '99.3%' },
        { label: 'Downtime', value: '2.1%' },
        { label: 'Capacity Used', value: '87%' }
      ]
    }
  ];