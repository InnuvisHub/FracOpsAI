import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message, operationTitle, operationData, history } = await req.json();
    
    console.log('API Key:', process.env.OPENROUTER_API_KEY); // This will be hidden in logs
    console.log('Sending request to OpenRouter');

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': process.env.APP_URL || 'http://localhost:3000',
        'X-Title': 'Operations Dashboard'
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct', // Using Mistral as it's more reliable for testing
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant specialized in analyzing ${operationTitle} data. 
                     Current data: ${JSON.stringify(operationData)}`
          },
          ...history.map((msg: any) => ({
            role: msg.role,
            content: msg.content
          })),
          { role: 'user', content: message }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenRouter Error:', errorData);
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenRouter Response:', data);

    return NextResponse.json({ 
      message: data.choices[0].message.content 
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    // Send a more detailed error response
    return NextResponse.json(
      { 
        error: 'Failed to process chat message',
        details: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}